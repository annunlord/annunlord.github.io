---
title: "Mass Times"
permalink: /information/mass_times/
excerpt: "Mass and Reconciliation Schedule"
layout: single
date: 2022-01-15
last_modified_at: 2025-07-02
---

<style>
  .schedule-container { display: flex; flex-wrap: wrap; gap: 2rem; justify-content: center; margin-top: 2rem; }
  .schedule-card { background: #f9f9f9; border: 1px solid $border-color; border-radius: 8px; padding: 1.5rem; flex: 1 1 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
  .schedule-card h3 { font-size: 1.125em; margin-top: 0; border-bottom: 2px solid $border-color; padding-bottom: 0.5rem; display: flex; align-items: center; }
  .schedule-card h3 .icon { font-size: 1.125em; margin-right: 0.75rem; color: $muted-text-color; }
  .schedule-time { display: flex; justify-content: space-between; align-items: center; padding: 0.85rem 0; border-bottom: 1px solid $border-color; }
  .schedule-time:last-of-type { border-bottom: none; }
  .schedule-time .time { font-weight: bold; font-size: 1em; }
  .schedule-time .language { font-style: italic; color: $muted-text-color; background: #eaeaea; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.9em; }
  .schedule-note { margin-top: 1rem; font-size: 0.9em; color: $muted-text-color; text-align: center; background: #eef; padding: 0.75rem; border-radius: 4px; }
  .schedule-item { font-size: 1em; padding: 0.5rem 0; }
  .special-mass { text-align: center; padding: 1rem; }
  .special-mass strong { display: block; font-size: 1.125em; }
  .special-mass em { color: $text-color; }
</style>

All are welcome to join us for the celebration of the Holy Mass. This schedule is effective as of August 4th, 2025.

<div class="schedule-card" id="holyday-schedule-card" style="display: none;">
  <h3><span class="icon">🌟</span><span id="holyday-title-text">Upcoming Holy Days of Obligation</span></h3>
  <div id="holyday-container" style="padding: 0 1rem 1rem 1rem;"></div>
</div>

<script>
  const holyDaysData = {{ site.data.holydays | jsonify }};
</script>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const card = document.getElementById('holyday-schedule-card');
    const container = document.getElementById('holyday-container');
    const titleText = document.getElementById('holyday-title-text');

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const futureLimit = new Date(today);
    futureLimit.setDate(today.getDate() + 14);

    const upcomingHolyDays = holyDaysData.filter(holyday => {
      const holydayDate = new Date(holyday.date + 'T00:00:00');
      return holydayDate >= today && holydayDate <= futureLimit;
    });

    const count = upcomingHolyDays.length;

    if (count > 0) {
      if (count === 1) {
        titleText.textContent = 'Upcoming Holy Day of Obligation';
      }

      let htmlContent = '';
      upcomingHolyDays.forEach((holyday, holydayIndex) => {
        if (holydayIndex > 0) {
          htmlContent += `<hr style="margin: 2rem 0;">`;
        }

        htmlContent += `<div style="text-align: center; font-weight: bold; font-size: 1.1em; margin-bottom: 1rem;">${holyday.name}</div>`;

        holyday.schedule.forEach((item, itemIndex) => {
          const h4Style = `margin-top: ${itemIndex === 0 ? '0.5rem' : '1.5rem'}; margin-bottom: 0.5rem;`;
          htmlContent += `<h4 style="${h4Style}">${item.type} (${item.note})</h4>`;

          if (item.times && item.times.length > 0) {
            item.times.forEach(t => {
              htmlContent += `
                <div class="schedule-time">
                  <span class="time">${t.time}</span>
                  <span class="language">${t.language}</span>
                </div>
              `;
              if (t.note) {
                htmlContent += `<div class="schedule-note">${t.note}</div>`;
              }
            });
          } else if (item.note_alt) {
            htmlContent += `<div class="schedule-time"><span class="time">${item.note_alt}</span></div>`;
          }
        });
      });

      container.innerHTML = htmlContent;
      card.style.display = 'block';
    }
  });
</script>

<div class="schedule-container">

  <div class="schedule-card">
    <h3><span class="icon">✞</span>Weekend Schedule</h3>
    {% for day in site.data.schedule.weekend %}
      <h4 style="margin-top: {% if forloop.first == false %}2rem{% else %}1rem{% endif %};">{{ day.day }}</h4>
      {% for item in day.times %}
        <div class="schedule-time">
          <span class="time">{{ item.time }}</span>
          <span class="language">{{ item.language }}</span>
        </div>
      {% endfor %}
    {% endfor %}
  </div>

  <div class="schedule-card">
    <h3><span class="icon">🗓️</span>Weekday Schedule</h3>
    {% for day in site.data.schedule.weekday %}
      <h4 style="margin-top: {% if forloop.first == false %}2rem{% else %}1rem{% endif %};">{{ day.day }}</h4>
      {% for item in day.times %}
        <div class="schedule-time">
          <span class="time">{{ item.time }}</span>
          <span class="language">{{ item.language }}</span>
        </div>
        {% if item.note %}
          <div class="schedule-note">{{ item.note }}</div>
        {% endif %}
      {% endfor %}
    {% endfor %}
  </div>

</div>

<div class="schedule-container">

  <div class="schedule-card">
    <h3><span class="icon">✨</span>Special Masses & Devotions</h3>
    {% for item in site.data.schedule.special_masses %}
      <div class="special-mass schedule-time">
        <div>
          <strong>{{ item.title }}</strong>
          <em>{{ item.subtitle }}</em>
        </div>
        <span class="language">{{ item.time }}</span>
      </div>
    {% endfor %}
  </div>

  <div class="schedule-card">
    <h3 id="reconciliation"><span class="icon">🙏</span>Sacrament of Reconciliation</h3>
    {% for day in site.data.schedule.reconciliation %}
      <h4 style="margin-top: {% if forloop.first == false %}1.5rem{% else %}1rem{% endif %};">{{ day.day }}</h4>
      {% for item in day.times %}
        <div class="schedule-time">
          <span class="time">{{ item.time }}</span>
        </div>
      {% endfor %}
    {% endfor %}
  </div>

</div>