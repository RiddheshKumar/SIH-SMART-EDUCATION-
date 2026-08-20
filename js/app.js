/* ============================================================
   Raasta — Shared app helpers (all pages).
   - Reveals page content with a fade-in.
   - Highlights the active nav link.
   - Reads the user's goal (stored by the intake page).
   ============================================================ */
(function () {
  'use strict';

  /* Goal chaining across pages via sessionStorage */
  var GOAL_KEY = 'raasta.goal';

  window.Raasta = {
    getGoal: function () {
      return sessionStorage.getItem(GOAL_KEY) || window.I18N.t('footer.goalLabel') + window.DATA.courses.hi['B.Com'].goal;
    },
    setGoal: function (goal) {
      sessionStorage.setItem(GOAL_KEY, goal);
    },
    getCourse: function () {
      try {
        var profile = JSON.parse(localStorage.getItem('raasta.profile'));
        if (profile && profile.course && window.DATA.courses[I18N.getLang()][profile.course]) {
          return profile.course;
        }
      } catch (e) { /* corrupted profile — default */ }
      return 'B.Com';
    },
    getCourseData: function () {
      var lang = I18N.getLang();
      var course = 'B.Com';
      try {
        var profile = JSON.parse(localStorage.getItem('raasta.profile'));
        if (profile && profile.course && window.DATA.courses[lang][profile.course]) {
          course = profile.course;
        }
      } catch (e) { /* corrupted profile — default */ }
      return { course: course, data: window.DATA.courses[lang][course] || window.DATA.courses.hi[course] };
    }
  };

  /* Reveal page content */
  function revealPage() {
    var page = document.querySelector('.page');
    if (page) {
      requestAnimationFrame(function () {
        page.classList.add('revealed');
      });
    }
  }

  /* Active nav highlight based on current filename */
  function markActiveNav() {
    var current = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.site-nav a').forEach(function (link) {
      if (link.getAttribute('href') === current) {
        link.classList.add('active');
      }
    });
  }

  /* Show goal in the footer on every page */
  function renderFooterGoal() {
    var el = document.getElementById('footer-goal');
    if (el) {
      el.textContent = window.I18N.t('footer.goalLabel') + window.Raasta.getGoal();
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    markActiveNav();
    renderFooterGoal();
    revealPage();
  });

  document.addEventListener('raasta:langchange', function () {
    renderFooterGoal();
  });
})();