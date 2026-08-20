/* ============================================================
   Raasta — Roadmap page: node-based timeline.
   Bilingual: content I18N.lang ke hisaab se render hota hai.
   ============================================================ */
(function () {
  'use strict';

  function renderRoadmap(steps) {
    var tl = document.getElementById('timeline');
    tl.innerHTML = steps.map(function (s) {
      return (
        '<div class="timeline-node ' + s.type + '">' +
          '<div class="node-card">' +
            '<div class="node-stage ' + s.type + '">' + s.stage + '</div>' +
            '<h3 class="node-title">' + s.title + '</h3>' +
            '<p class="node-desc">' + s.desc + '</p>' +
            '<span class="node-duration">' + s.duration + '</span>' +
          '</div>' +
        '</div>'
      );
    }).join('');
  }

  function renderAll() {
    var ctx = window.Raasta.getCourseData();
    var D = ctx.data;

    var chip = document.getElementById('course-chip');
    if (chip) chip.textContent = ctx.course + ' · ' + I18N.t('footer.goalLabel').trim() + ' ' + D.goal;

    renderRoadmap(D.roadmap);
  }

  document.addEventListener('DOMContentLoaded', renderAll);
  document.addEventListener('raasta:langchange', renderAll);
})();