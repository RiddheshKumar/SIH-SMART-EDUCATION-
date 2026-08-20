/* ============================================================
   Raasta — Dashboard page: career cards + skill gap.
   Bilingual: content I18N.lang ke hisaab se render hota hai.
   ============================================================ */
(function () {
  'use strict';

  var SEED_DELAY = 300; // metrics ko visible hone ke baad animate karo

  function renderCareers(careers) {
    var grid = document.getElementById('career-grid');
    grid.innerHTML = careers.map(function (c) {
      return (
        '<article class="card">' +
          '<div class="career-rank">RANK #' + c.rank + '</div>' +
          '<h3 class="career-title">' + c.title + '</h3>' +
          '<p class="career-rationale">' + c.rationale + '</p>' +
          '<div class="score-row">' +
            '<span class="score-label">' + I18N.t('dash.matchScore') + '</span>' +
            '<span class="score-value">' + c.score + '%</span>' +
          '</div>' +
          '<div class="progress-track"><div class="progress-fill" data-score="' + c.score + '"></div></div>' +
        '</article>'
      );
    }).join('');
  }

  function segments(level) {
    var filled = Math.round(level / 10); // 10-segment meter
    var html = '';
    for (var i = 0; i < 10; i++) {
      html += '<span class="segment' + (i < filled ? ' on' : '') + '"></span>';
    }
    return html;
  }

  function renderSkillGap(skills) {
    var widget = document.getElementById('skill-widget');
    var labels = {};

    skills.current.concat(skills.target).forEach(function (s) {
      var levelText = s.level >= 80 ? 'Strong' : s.level >= 50 ? 'Medium' : s.level >= 25 ? 'Basic' : 'Beginner';
      labels[s.name] = levelText + ' · ' + s.level + '%';
    });

    var col = function (titleKey, chipClass, list) {
      var items = list.map(function (s) {
        return (
          '<div class="skill-item">' +
            '<div class="skill-item-top"><span>' + s.name + '</span><span class="lvl">' + labels[s.name] + '</span></div>' +
            '<div class="segments">' + segments(s.level) + '</div>' +
          '</div>'
        );
      }).join('');
      return (
        '<div class="skill-col card">' +
          '<h3>' + I18N.t(titleKey) + ' <span class="chip ' + chipClass + '">' + I18N.t('dash.skillsChip', { n: list.length }) + '</span></h3>' +
          items +
        '</div>'
      );
    };

    widget.innerHTML =
      col('dash.currentTitle', 'chip-current', skills.current) +
      col('dash.targetTitle', 'chip-target', skills.target);
  }

  function renderGapSummary(gap) {
    var el = document.getElementById('skill-summary');
    el.innerHTML =
      '<div class="gap-stat">' +
        '<div class="gap-ring"><div class="gap-ring-inner">' + gap.percentage + '%</div></div>' +
        '<div class="gap-copy">' +
          '<p>' + I18N.t('dash.gapLine', { pct: gap.percentage, months: gap.timelineMonths }) + '</p>' +
          '<p>' + gap.summary + '</p>' +
        '</div>' +
      '</div>';
  }

  /* Reveal ke baad progress bars + gap ring ko animate karna */
  function animateMetrics() {
    setTimeout(function () {
      var fills = document.querySelectorAll('.progress-fill');
      fills.forEach(function (f) { f.style.width = f.dataset.score + '%'; });
      var ring = document.querySelector('.gap-ring');
      if (ring) ring.style.setProperty('--gap-pct', window.Raasta.getCourseData().data.gap.percentage + '%');
    }, SEED_DELAY);
  }

  function renderAll() {
    var ctx = window.Raasta.getCourseData();
    var D = ctx.data;

    var chip = document.getElementById('course-chip');
    if (chip) chip.textContent = ctx.course + ' · ' + I18N.t('footer.goalLabel').trim() + ' ' + D.goal;

    renderCareers(D.careers);
    renderSkillGap(D.skills);
    renderGapSummary(D.gap);
    animateMetrics();
  }

  document.addEventListener('DOMContentLoaded', renderAll);
  document.addEventListener('raasta:langchange', renderAll);
})();