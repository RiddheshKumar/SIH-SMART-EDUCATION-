/* ============================================================
   Raasta — Auth: signup, login, session + header user menu.
   Users localStorage mein, session sessionStorage mein.
   ============================================================ */
(function () {
  'use strict';

  var USERS_KEY = 'raasta.users';
  var SESSION_KEY = 'raasta.session';

  function getUsers() {
    try { return JSON.parse(localStorage.getItem(USERS_KEY)) || []; }
    catch (e) { return []; }
  }

  function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  function getSession() { return sessionStorage.getItem(SESSION_KEY); }
  function setSession(email) { sessionStorage.setItem(SESSION_KEY, email); }
  function clearSession() { sessionStorage.removeItem(SESSION_KEY); }

  function currentUser() {
    var email = getSession();
    if (!email) return null;
    return getUsers().find(function (u) { return u.email === email; }) || null;
  }

  var Auth = {
    getUsers: getUsers,
    getSession: getSession,
    currentUser: currentUser,

    signup: function (data) {
      var users = getUsers();
      if (users.some(function (u) { return u.email === data.email; })) {
        return { ok: false, error: window.I18N.t('auth.err.exists') };
      }
      users.push({ name: data.name.trim(), email: data.email.trim(), password: data.password });
      saveUsers(users);
      setSession(data.email.trim());
      return { ok: true };
    },

    login: function (email, password) {
      var user = getUsers().find(function (u) { return u.email === email.trim(); });
      if (!user || user.password !== password) {
        return { ok: false, error: window.I18N.t('auth.err.creds') };
      }
      setSession(user.email);
      return { ok: true, user: user };
    },

    logout: function () {
      clearSession();
    }
  };

  window.Auth = Auth;

  /* ---------- Email validation ---------- */
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /* ---------- Password strength (0-4) ---------- */
  function passwordScore(pw) {
    var score = 0;
    if (pw.length >= 8) score++;
    if (/[a-z]/.test(pw) && /[A-Z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^a-zA-Z0-9]/.test(pw)) score++;
    return score;
  }

  function strengthLabel(score) {
    return window.I18N.t('auth.strength' + score);
  }

  /* ---------- Per-field validation UI ---------- */
  function setError(field, message) {
    var el = document.getElementById(field + '-error');
    var wrap = document.getElementById(field).closest('.auth-field');
    if (el) el.textContent = message;
    if (wrap) wrap.classList.toggle('has-error', !!message);
  }

  function showAlert(message, type) {
    var alertEl = document.getElementById('auth-alert');
    alertEl.className = 'auth-alert ' + type + ' show';
    alertEl.textContent = message;
  }

  function hideAlert() {
    var alertEl = document.getElementById('auth-alert');
    if (alertEl) alertEl.className = 'auth-alert';
  }

  /* ---------- Show/hide password toggles ---------- */
  function bindToggles() {
    document.querySelectorAll('.toggle-pass').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var input = document.getElementById(btn.dataset.target);
        var isHidden = input.type === 'password';
        input.type = isHidden ? 'text' : 'password';
        btn.innerHTML = isHidden ? eye(false) : eye(true);
        btn.setAttribute('aria-label', isHidden ? 'Hide password' : 'Show password');
      });
    });
  }

  function eye(open) {
    return open
      ? '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>'
      : '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
  }

  /* ---------- Signup page ---------- */
  function initSignup() {
    var form = document.getElementById('signup-form');
    var pw = document.getElementById('password');
    var meter = document.getElementById('strength-meter');
    var meterText = document.getElementById('strength-text');
    meterText.textContent = window.I18N.t('auth.strengthPrefix') + '—';

    pw.addEventListener('input', function () {
      var score = passwordScore(pw.value);
      var bars = meter.querySelectorAll('.strength-bar');
      bars.forEach(function (bar, i) { bar.classList.toggle('fill', i < score); });
      meterText.textContent = window.I18N.t('auth.strengthPrefix') + strengthLabel(score);
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      hideAlert();

      var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var password = pw.value;
      var confirm = document.getElementById('confirm').value;

      var valid = true;
      if (name.length < 2) { setError('name', window.I18N.t('auth.err.name')); valid = false; } else { setError('name', ''); }
      if (!isValidEmail(email)) { setError('email', window.I18N.t('auth.err.email')); valid = false; } else { setError('email', ''); }
      if (password.length < 6) { setError('password', window.I18N.t('auth.err.password')); valid = false; } else { setError('password', ''); }
      if (confirm !== password || !confirm) { setError('confirm', window.I18N.t('auth.err.confirm')); valid = false; } else { setError('confirm', ''); }

      if (!valid) return;

      var result = Auth.signup({ name: name, email: email, password: password });
      if (!result.ok) { showAlert(result.error, 'error'); return; }

      showAlert(window.I18N.t('auth.successSignup'), 'success');
      var btn = form.querySelector('.auth-submit');
      btn.disabled = true;
      btn.textContent = window.I18N.t('auth.btnBusySignup');
      setTimeout(function () { window.location.href = 'profile.html'; }, 900);
    });
  }

  /* ---------- Login page ---------- */
  function initLogin() {
    var form = document.getElementById('login-form');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      hideAlert();

      var email = document.getElementById('email').value.trim();
      var password = document.getElementById('password').value;

      var valid = true;
      if (!isValidEmail(email)) { setError('email', window.I18N.t('auth.err.email')); valid = false; } else { setError('email', ''); }
      if (!password) { setError('password', window.I18N.t('auth.err.passReq')); valid = false; } else { setError('password', ''); }

      if (!valid) return;

      var result = Auth.login(email, password);
      if (!result.ok) {
        showAlert(result.error, 'error');
        return;
      }

      showAlert(window.I18N.t('auth.successLogin', { name: result.user.name }), 'success');
      var btn = form.querySelector('.auth-submit');
      btn.disabled = true;
      btn.textContent = window.I18N.t('auth.btnBusyLogin');
      setTimeout(function () { window.location.href = 'profile.html'; }, 800);
    });
  }

  /* ---------- Header user menu (main pages) ---------- */
  function initHeaderAuth() {
    var header = document.querySelector('.site-header .container');
    if (!header) return;

    var actions = document.createElement('div');
    actions.className = 'header-auth';

    var user = Auth.currentUser();
    if (user) {
      actions.innerHTML =
        '<span class="header-user" title="Logged in as ' + user.email + '">' +
          '<span class="avatar">' + user.name.charAt(0).toUpperCase() + '</span>' +
          '<span class="header-user-name">' + user.name.split(' ')[0] + '</span>' +
        '</span>' +
        '<button type="button" class="logout-btn" id="logout-btn">' + window.I18N.t('auth.headerLogout') + '</button>';
      actions.querySelector('#logout-btn').addEventListener('click', function () {
        Auth.logout();
        window.location.reload();
      });
    } else {
      actions.innerHTML =
        '<a class="header-auth-link" href="login.html">' + window.I18N.t('auth.headerLogin') + '</a>' +
        '<a class="header-auth-cta" href="signup.html">' + window.I18N.t('auth.headerSignup') + '</a>';
    }

    header.appendChild(actions);
  }

  /* Language switch ke baad header auth text re-translate karo */
  document.addEventListener('raasta:langchange', function () {
    document.querySelectorAll('.header-auth-link').forEach(function (l) {
      l.textContent = window.I18N.t('auth.headerLogin');
    });
    document.querySelectorAll('.header-auth-cta').forEach(function (l) {
      l.textContent = window.I18N.t('auth.headerSignup');
    });
    document.querySelectorAll('.logout-btn').forEach(function (b) {
      b.textContent = window.I18N.t('auth.headerLogout');
    });
  });

  /* ---------- Boot ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    bindToggles();
    initHeaderAuth();
    if (document.getElementById('signup-form')) initSignup();
    if (document.getElementById('login-form')) initLogin();
  });
})();