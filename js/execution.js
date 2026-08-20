/* ============================================================
   Raasta — Execution hub page: resources + mentor match.
   Bilingual: content I18N.lang ke hisaab se render hota hai.
   ============================================================ */
(function () {
  'use strict';

  function renderResources(resources) {
    var list = document.getElementById('resource-list');
    list.innerHTML = resources.map(function (r) {
      return (
        '<li>' +
          '<a class="resource-item" href="' + r.url + '" target="_blank" rel="noopener noreferrer">' +
            '<span class="resource-index">' + r.index + '</span>' +
            '<span class="resource-body">' +
              '<span class="resource-name">' + r.name + '</span><br />' +
              '<span class="resource-meta">' + r.meta + '</span>' +
            '</span>' +
            '<span class="resource-link" aria-label="Open ' + r.name + '">' +
              '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
                '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>' +
              '</svg>' +
            '</span>' +
          '</a>' +
        '</li>'
      );
    }).join('');
  }

  function renderMentor(mentor) {
    var el = document.getElementById('mentor-card');
    var tags = mentor.tags.map(function (t) {
      var cls = t === 'Shared Language: Hinglish' ? 'tag hinglish' : 'tag';
      return '<span class="' + cls + '">' + t + '</span>';
    }).join('');
    el.innerHTML =
      '<div class="mentor-label">' + I18N.t('exec.mentorLabel') + '</div>' +
      '<h3 class="mentor-name">' + mentor.name + '</h3>' +
      '<p class="mentor-role">' + mentor.role + '</p>' +
      '<div class="mentor-tags">' + tags + '</div>' +
      '<button type="button" class="mentor-btn" id="mentor-cta">' + I18N.t('exec.cta') + '</button>';
    document.getElementById('mentor-cta').addEventListener('click', function () {
      var b = this;
      var original = b.textContent;
      b.textContent = I18N.t('exec.ctaDone');
      b.disabled = true;
      setTimeout(function () { b.textContent = original; b.disabled = false; }, 2000);
    });
  }

  function renderAll() {
    var ctx = window.Raasta.getCourseData();
    var D = ctx.data;

    var chip = document.getElementById('course-chip');
    if (chip) chip.textContent = ctx.course + ' · ' + I18N.t('footer.goalLabel').trim() + ' ' + D.goal;

    renderResources(D.resources);
    renderMentor(D.mentor);
  }

  document.addEventListener('DOMContentLoaded', renderAll);
  document.addEventListener('raasta:langchange', renderAll);
})();