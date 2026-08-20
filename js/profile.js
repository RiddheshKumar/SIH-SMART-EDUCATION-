/* ============================================================
   Raasta — Profile dashboard: course, goal, skills.
   Stores the profile in localStorage so analysis can reuse it.
   ============================================================ */
(function () {
  'use strict';

  var COURSES = [
    "B.Com", "B.Com (Hons)", "B.Tech", "BBA", "B.Sc",
    "B.Pharma", "BA", "BCA", "B.Ed", "Diploma", "Polytechnic",
    "ITI", "M.Com", "MBA", "M.Tech", "Other"
  ];

  var STORAGE_KEY = 'raasta.profile';

  var state = {
    course: '',
    courseOther: '',
    goal: '',
    goodSkills: [],
    basicSkills: []
  };

  /* ---------- Helpers ---------- */

  function $(id) { return document.getElementById(id); }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    if (state.goal) window.Raasta.setGoal(state.goal);
  }

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw) Object.assign(state, JSON.parse(raw));
    } catch (e) { /* corrupted storage — ignore */ }
  }

  function renderCourseOptions() {
    var select = $('course-select');
    select.innerHTML = COURSES.map(function (c) {
      return '<option value="' + c + '"' + (state.course === c ? ' selected' : '') + '>' + c + '</option>';
    }).join('');
    syncOtherCourse();
  }

  /* "Other" chune par custom course input dikhao */
  function syncOtherCourse() {
    var show = state.course === 'Other';
    $('other-course').classList.toggle('show', show);
    $('course-other').value = state.courseOther;
  }

  /* ---------- Skill chips ---------- */

  function renderChips(section) {
    var container = section + '-chips';
    var list = state[section + 'Skills'];
    var levelLabel = section === 'good' ? 'good' : 'basic';
    if (!list.length) {
      $(container).innerHTML = '<span class="chips-empty">' + window.I18N.t('prof.emptySkills') + '</span>';
      return;
    }
    $(container).innerHTML = list.map(function (skill) {
      return (
        '<span class="skill-chip ' + levelLabel + '">' +
          skill +
          '<button type="button" class="chip-remove" aria-label="Remove ' + skill + '" data-section="' + section + '" data-skill="' + skill + '">&times;</button>' +
        '</span>'
      );
    }).join('');
    $('skill-count-' + section).textContent = window.I18N.t('prof.skillCount', { n: list.length });
  }

  function addSkill(section) {
    var input = $('skill-input-' + section);
    var skill = input.value.trim();
    if (!skill) return;
    var list = state[section + 'Skills'];
    if (!list.some(function (s) { return s.toLowerCase() === skill.toLowerCase(); })) {
      list.push(skill);
      renderChips(section);
    }
    input.value = '';
    input.focus();
  }

  function removeSkill(section, skill) {
    var list = state[section + 'Skills'];
    state[section + 'Skills'] = list.filter(function (s) { return s !== skill; });
    renderChips(section);
  }

  /* ---------- Live preview ---------- */

  function renderPreview() {
    $('pv-course').textContent = state.course === 'Other'
      ? (state.courseOther || '—')
      : (state.course || '—');
    $('pv-goal').textContent = state.goal || window.I18N.t('prof.pvGoalEmpty');

    var pvGood = $('pv-good');
    var pvBasic = $('pv-basic');
    pvGood.innerHTML = state.goodSkills.length
      ? state.goodSkills.map(function (s) { return '<span class="preview-skill good">' + s + '</span>'; }).join('')
      : '<span class="preview-empty">' + window.I18N.t('prof.pvEmptyGood') + '</span>';
    pvBasic.innerHTML = state.basicSkills.length
      ? state.basicSkills.map(function (s) { return '<span class="preview-skill basic">' + s + '</span>'; }).join('')
      : '<span class="preview-empty">' + window.I18N.t('prof.pvEmptyBasic') + '</span>';

    $('stat-total').textContent = state.goodSkills.length + state.basicSkills.length;
    $('stat-good').textContent = state.goodSkills.length;
    $('stat-basic').textContent = state.basicSkills.length;
  }

  /* ---------- Events ---------- */

  function bindEvents() {
    $('course-select').addEventListener('change', function () {
      state.course = this.value;
      syncOtherCourse();
      renderPreview();
    });
    $('course-other').addEventListener('input', function () {
      state.courseOther = this.value;
      renderPreview();
    });
    $('goal-input').addEventListener('input', function () {
      state.goal = this.value;
      renderPreview();
    });

    ['good', 'basic'].forEach(function (section) {
      $('skill-add-' + section).addEventListener('click', function () { addSkill(section); });
      $('skill-input-' + section).addEventListener('keydown', function (e) {
        if (e.key === 'Enter') { e.preventDefault(); addSkill(section); }
      });
    });

    // click delegation for chip removal (binds once, listens for any section)
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.chip-remove');
      if (btn) removeSkill(btn.dataset.section, btn.dataset.skill);
    });

    $('save-profile').addEventListener('click', function () {
      saveState();
      var status = $('save-status');
      status.textContent = window.I18N.t('prof.saved');
      status.style.opacity = '1';
      setTimeout(function () { status.style.opacity = '0'; }, 2200);
    });
  }

  /* Language switch ke baad dynamic parts re-render karo */
  function refreshLocalized() {
    ['good', 'basic'].forEach(function (section) {
      $('skill-count-' + section).textContent = window.I18N.t('prof.skillCount', { n: state[section + 'Skills'].length });
      renderChips(section);
    });
    renderPreview();
  }

  /* ---------- Init ---------- */

  document.addEventListener('DOMContentLoaded', function () {
    loadState();
    renderCourseOptions();
    ['good', 'basic'].forEach(function (section) {
      $('skill-count-' + section).textContent = window.I18N.t('prof.skillCount', { n: state[section + 'Skills'].length });
    });
    $('goal-input').value = state.goal;
    renderChips('good');
    renderChips('basic');
    renderPreview();
    bindEvents();
  });

  document.addEventListener('raasta:langchange', refreshLocalized);
})();