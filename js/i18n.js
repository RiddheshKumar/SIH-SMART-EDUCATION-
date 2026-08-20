/* ============================================================
   Raasta — i18n: English ↔ Hinglish switching.
   - I18N.t(key, vars) => translated string (supports {var})
   - Language persisted in localStorage 'raasta.lang' (default hi)
   - Injects a language switch into the header (or auth brand)
   - Applies data-i18n / data-i18n-placeholder attributes
   - Dispatches 'raasta:langchange' so pages can re-render
   ============================================================ */
(function () {
  'use strict';

  var STORAGE_KEY = 'raasta.lang';
  var current = localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'hi';

  var DICT = {
    hi: {
      'nav.home': 'Home',
      'nav.profile': 'Profile',
      'nav.analysis': 'Analysis',
      'nav.roadmap': 'Roadmap',
      'nav.resources': 'Resources',

      'footer.text': 'Raasta · built with care for Bharat ke learners',
      'footer.goalLabel': 'Goal: ',

      'hero.badge': 'Career advisory, India ki zubaan mein',
      'hero.title1': 'Apna ',
      'hero.title2': 'raasta',
      'hero.title3': 'apni skills se.',
      'hero.sub': 'Batao tum kahan ho aur kya banna chahte ho — hum analysis karenge, gap dikhayenge, aur step-by-step roadmap banayenge. Hinglish chalega.',
      'hero.placeholder': 'Tell us your current skills and what you want to become… e.g. main B.Com kar raha hoon, data analyst banna hai',
      'hero.hint': 'Example: "main 2nd year B.Com hoon, Excel aata hai, ab data analyst banna chahta hoon"',
      'btn.analyze': 'Analyze',

      'dash.kicker': 'Analysis',
      'dash.title1': 'Tumhara ',
      'dash.title3': ' check',
      'dash.sub': 'Humne tumhari profile ko 20+ career tracks se compare kiya — yeh top 3 rahe, score ke hisaab se.',
      'dash.skillKicker': 'Skill Gap',
      'dash.skillsTitle': 'Kya karna hai',
      'dash.skillsSub': 'Tumhare paas jo hai aur jo chahiye — beech ka gap samjho.',
      'dash.currentTitle': 'Aaj ke skills',
      'dash.targetTitle': 'Target ke skills',
      'dash.skillsChip': '{n} skills',
      'dash.matchScore': 'Match score',
      'dash.gapLine': '<strong>{pct}% skill gap</strong> · roughly <strong>{months} months</strong> me close ho sakta hai (5–6 hrs/week).',

      'road.kicker': 'Roadmap',
      'road.title': 'Kaise karoge',
      'road.sub': 'Baseline se goal tak ka linear path — ek-ek node pe clear milestone aur time estimate.',

      'exec.kicker': 'Execution',
      'exec.title': 'Kaha se karoge',
      'exec.sub': 'Resources jo abhi shuru kar sakte ho, aur ek mentor jo tumhari language mein samjhayega.',
      'exec.mentorLabel': 'Mentor match',
      'exec.cta': 'Request Introduction',
      'exec.ctaDone': 'Intro request sent!',

      'prof.kicker': 'Profile Dashboard',
      'prof.title1': 'Apni profile ',
      'prof.title2': 'banao',
      'prof.sub': 'Course, goal aur skills bharo — right side pe live preview dikhega. Analysis isi se fit hoga.',
      'prof.courseLabel': '1 · Course',
      'prof.courseOtherPh': 'Apna course likho… e.g. B.Pharm (Ayurveda)',
      'prof.goalLabel': '2 · Goal',
      'prof.goalPh': 'e.g. data analyst banna hai, ya pharmacy ke baad M.Pharm + MBA',
      'prof.skillsLabel': '3 · Skills',
      'prof.skillsHint': '(2 levels mein batao)',
      'prof.goodPanel': 'Good level — aata hai',
      'prof.basicPanel': 'Basic level — seekh rahe ho',
      'prof.goodPh': 'e.g. Excel, Tally, Accounting…',
      'prof.basicPh': 'e.g. Python, SQL, Communication…',
      'prof.addBtn': 'Add',
      'prof.emptySkills': 'Abhi koi skill nahi — upar se add karo.',
      'prof.skillCount': '{n} skills',
      'prof.saveBtn': 'Save Profile',
      'prof.saved': 'Profile saved ✓',
      'prof.previewLabel': 'Profile Snapshot',
      'prof.pvCourse': 'Course',
      'prof.pvGoal': 'Goal',
      'prof.pvGoalEmpty': 'Abhi nahi bataya',
      'prof.pvGood': 'Good-level skills',
      'prof.pvBasic': 'Basic-level skills',
      'prof.pvEmptyGood': 'Koi strong skill add nahi ki',
      'prof.pvEmptyBasic': 'Koi basic skill add nahi ki',
      'prof.pvTotal': 'Total skills',
      'prof.pvGoodStat': 'Good level',
      'prof.pvBasicStat': 'Basic level',
      'prof.pvCta': 'Is profile ka analysis dekho',

      'nav.prev.home': 'Wapas: Goal',
      'nav.next.dash': 'Roadmap dekho',
      'nav.prev.dash': 'Analysis',
      'nav.next.roadmap': 'Resources kahan se',
      'nav.prev.roadmap': 'Roadmap',
      'nav.next.exec': 'Naya goal try karo',
      'nav.prev.exec': 'Resources',
      'nav.prev.profile': 'Home',
      'nav.next.profile': 'Analysis',

      'auth.titleLogin': 'Welcome back',
      'auth.subLogin': 'Apna career ka raasta continue karo.',
      'auth.titleSignup': 'Apna account banao',
      'auth.subSignup': 'Course, goal aur skills — sab yahan se shuru hota hai.',
      'auth.nameLabel': 'Full Name',
      'auth.namePh': 'e.g. Rahul Kumar',
      'auth.emailLabel': 'Email',
      'auth.emailPh': 'tumhara@email.com',
      'auth.passLabel': 'Password',
      'auth.passPhSignup': 'kam se kam 6 characters',
      'auth.passPhLogin': '••••••••',
      'auth.confirmLabel': 'Confirm Password',
      'auth.confirmPh': 'dobara likho',
      'auth.loginBtn': 'Log In',
      'auth.signupBtn': 'Create Account',
      'auth.switchLoginPre': 'Naya ho?',
      'auth.switchLoginLink': 'Sign up karo',
      'auth.switchSignupPre': 'Account hai pehle se?',
      'auth.switchSignupLink': 'Log in karo',
      'auth.back': '← Home pe wapas',
      'auth.demoLogin': 'Demo tip: pehle signup karke account banao — data browser ke localStorage mein store hota hai, koi backend nahi.',
      'auth.demoSignup': 'Note: accounts sirf is browser ke localStorage mein save hote hain. Real app ke liye backend se connect karna hoga.',
      'auth.strengthPrefix': 'Strength: ',
      'auth.strength0': 'Very weak',
      'auth.strength1': 'Weak',
      'auth.strength2': 'Okay',
      'auth.strength3': 'Strong',
      'auth.strength4': 'Very strong',
      'auth.headerLogin': 'Log in',
      'auth.headerSignup': 'Sign up',
      'auth.headerLogout': 'Logout',
      'auth.err.name': 'Apna poora naam likho.',
      'auth.err.email': 'Sahi email address likho.',
      'auth.err.password': 'Password kam se kam 6 characters ka hona chahiye.',
      'auth.err.confirm': 'Password match nahi kar raha.',
      'auth.err.passReq': 'Password to dalo.',
      'auth.err.exists': 'Is email se account pehle se hai — login kar lo.',
      'auth.err.creds': 'Email ya password galat hai. Dobara try karo.',
      'auth.successSignup': 'Account ban gaya! Profile bharne le ja rahe hain…',
      'auth.successLogin': 'Welcome back, {name}!',
      'auth.btnBusyLogin': 'Logging in…',
      'auth.btnBusySignup': 'Creating account…'
    },

    en: {
      'nav.home': 'Home',
      'nav.profile': 'Profile',
      'nav.analysis': 'Analysis',
      'nav.roadmap': 'Roadmap',
      'nav.resources': 'Resources',

      'footer.text': 'Raasta · built with care for Bharat ke learners',
      'footer.goalLabel': 'Goal: ',

      'hero.badge': 'Career advisory, in your language',
      'hero.title1': 'Your ',
      'hero.title2': 'path',
      'hero.title3': 'built by your skills.',
      'hero.sub': 'Tell us where you are and what you want to become — we analyse, show the gaps, and build a step-by-step roadmap. Hinglish is welcome.',
      'hero.placeholder': "Tell us your current skills and what you want to become… e.g. I'm doing B.Com and want to become a data analyst",
      'hero.hint': 'Example: "I am a 2nd year B.Com student, I know Excel, and want to become a data analyst"',
      'btn.analyze': 'Analyze',

      'dash.kicker': 'Analysis',
      'dash.title1': 'Your ',
      'dash.title3': ' fit check',
      'dash.sub': 'We compared your profile against 20+ career tracks — these are the top 3, ranked by score.',
      'dash.skillKicker': 'Skill Gap',
      'dash.skillsTitle': 'What you need to build',
      'dash.skillsSub': 'What you have vs what you need — understand the gap in between.',
      'dash.currentTitle': 'Current skills',
      'dash.targetTitle': 'Target skills',
      'dash.skillsChip': '{n} skills',
      'dash.matchScore': 'Match score',
      'dash.gapLine': '<strong>{pct}% skill gap</strong> · closes in about <strong>{months} months</strong> (5–6 hrs/week).',

      'road.kicker': 'Roadmap',
      'road.title': 'How you\u2019ll get there',
      'road.sub': 'A linear path from baseline to goal — a clear milestone and time estimate at every node.',

      'exec.kicker': 'Execution',
      'exec.title': 'Where you\u2019ll do it',
      'exec.sub': 'Resources you can start right now, plus a mentor who explains things in your language.',
      'exec.mentorLabel': 'Mentor match',
      'exec.cta': 'Request Introduction',
      'exec.ctaDone': 'Intro request sent!',

      'prof.kicker': 'Profile Dashboard',
      'prof.title1': 'Build your ',
      'prof.title2': 'profile',
      'prof.sub': 'Fill in your course, goal and skills — you get a live preview on the right. The analysis adapts to this.',
      'prof.courseLabel': '1 · Course',
      'prof.courseOtherPh': 'Type your course… e.g. B.Pharm (Ayurveda)',
      'prof.goalLabel': '2 · Goal',
      'prof.goalPh': 'e.g. want to become a data analyst, or M.Pharm + MBA after pharmacy',
      'prof.skillsLabel': '3 · Skills',
      'prof.skillsHint': '(split across 2 levels)',
      'prof.goodPanel': 'Good level — I know these',
      'prof.basicPanel': 'Basic level — still learning',
      'prof.goodPh': 'e.g. Excel, Tally, Accounting…',
      'prof.basicPh': 'e.g. Python, SQL, Communication…',
      'prof.addBtn': 'Add',
      'prof.emptySkills': 'No skills yet — add from above.',
      'prof.skillCount': '{n} skills',
      'prof.saveBtn': 'Save Profile',
      'prof.saved': 'Profile saved ✓',
      'prof.previewLabel': 'Profile Snapshot',
      'prof.pvCourse': 'Course',
      'prof.pvGoal': 'Goal',
      'prof.pvGoalEmpty': 'Not set yet',
      'prof.pvGood': 'Good-level skills',
      'prof.pvBasic': 'Basic-level skills',
      'prof.pvEmptyGood': 'No strong skills added',
      'prof.pvEmptyBasic': 'No basic skills added',
      'prof.pvTotal': 'Total skills',
      'prof.pvGoodStat': 'Good level',
      'prof.pvBasicStat': 'Basic level',
      'prof.pvCta': 'View analysis for this profile',

      'nav.prev.home': 'Back: Goal',
      'nav.next.dash': 'View Roadmap',
      'nav.prev.dash': 'Analysis',
      'nav.next.roadmap': 'Where to find resources',
      'nav.prev.roadmap': 'Roadmap',
      'nav.next.exec': 'Try a new goal',
      'nav.prev.exec': 'Resources',
      'nav.prev.profile': 'Home',
      'nav.next.profile': 'Analysis',

      'auth.titleLogin': 'Welcome back',
      'auth.subLogin': 'Continue your career journey.',
      'auth.titleSignup': 'Create your account',
      'auth.subSignup': 'Course, goal and skills — it all starts here.',
      'auth.nameLabel': 'Full Name',
      'auth.namePh': 'e.g. Rahul Kumar',
      'auth.emailLabel': 'Email',
      'auth.emailPh': 'you@email.com',
      'auth.passLabel': 'Password',
      'auth.passPhSignup': 'at least 6 characters',
      'auth.passPhLogin': '••••••••',
      'auth.confirmLabel': 'Confirm Password',
      'auth.confirmPh': 'type it again',
      'auth.loginBtn': 'Log In',
      'auth.signupBtn': 'Create Account',
      'auth.switchLoginPre': 'New here?',
      'auth.switchLoginLink': 'Sign up',
      'auth.switchSignupPre': 'Already have an account?',
      'auth.switchSignupLink': 'Log in',
      'auth.back': '← Back to home',
      'auth.demoLogin': 'Demo tip: create an account via signup first — data is stored in your browser\u2019s localStorage, there is no backend.',
      'auth.demoSignup': 'Note: accounts are saved only in this browser\u2019s localStorage. A real app would need a backend.',
      'auth.strengthPrefix': 'Strength: ',
      'auth.strength0': 'Very weak',
      'auth.strength1': 'Weak',
      'auth.strength2': 'Okay',
      'auth.strength3': 'Strong',
      'auth.strength4': 'Very strong',
      'auth.headerLogin': 'Log in',
      'auth.headerSignup': 'Sign up',
      'auth.headerLogout': 'Logout',
      'auth.err.name': 'Please enter your full name.',
      'auth.err.email': 'Please enter a valid email address.',
      'auth.err.password': 'Password must be at least 6 characters long.',
      'auth.err.confirm': 'Passwords do not match.',
      'auth.err.passReq': 'Please enter your password.',
      'auth.err.exists': 'An account with this email already exists — please log in.',
      'auth.err.creds': 'Incorrect email or password. Please try again.',
      'auth.successSignup': 'Account created! Taking you to your profile…',
      'auth.successLogin': 'Welcome back, {name}!',
      'auth.btnBusyLogin': 'Logging in…',
      'auth.btnBusySignup': 'Creating account…'
    }
  };

  function t(key, vars) {
    var v = (DICT[current] && DICT[current][key] != null) ? DICT[current][key] : (DICT.en[key] || key);
    if (vars) {
      for (var k in vars) {
        v = v.replace('{' + k + '}', vars[k]);
      }
    }
    return v;
  }

  /* Apply data-i18n (text) and data-i18n-placeholder attributes */
  function applyStatic() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
    });
  }

  /* Language switch UI */
  function renderSwitch() {
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === current);
      btn.setAttribute('aria-pressed', btn.dataset.lang === current ? 'true' : 'false');
    });
  }

  function injectSwitch() {
    var headerTarget = document.querySelector('.site-header .container');
    var authTarget = document.querySelector('.auth-card');
    if (!headerTarget && !authTarget) return;

    var wrap = document.createElement('div');
    wrap.className = 'lang-switch';
    wrap.setAttribute('role', 'group');
    wrap.setAttribute('aria-label', 'Language / Bhaasha');
    wrap.innerHTML =
      '<button type="button" class="lang-btn" data-lang="hi">हिंग्लिश</button>' +
      '<button type="button" class="lang-btn" data-lang="en">English</button>';

    wrap.addEventListener('click', function (e) {
      var btn = e.target.closest('.lang-btn');
      if (!btn || btn.dataset.lang === current) return;
      current = btn.dataset.lang;
      localStorage.setItem(STORAGE_KEY, current);
      applyStatic();
      renderSwitch();
      document.dispatchEvent(new CustomEvent('raasta:langchange'));
    });

    if (authTarget) {
      authTarget.insertBefore(wrap, authTarget.firstChild);
    } else {
      headerTarget.appendChild(wrap);
    }
    renderSwitch();
  }

  window.I18N = {
    getLang: function () { return current; },
    t: t,
    setLang: function (lang) {
      current = lang === 'en' ? 'en' : 'hi';
      localStorage.setItem(STORAGE_KEY, current);
      applyStatic();
      renderSwitch();
      document.dispatchEvent(new CustomEvent('raasta:langchange'));
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    injectSwitch();
    applyStatic();
  });
})();