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
  .schedule-card { background: #f9f9f9; border: 1px solid #eee; border-radius: 8px; padding: 1.5rem; flex: 1 1 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
  .schedule-card h3 { font-size: 1.5em; margin-top: 0; border-bottom: 2px solid #ddd; padding-bottom: 0.5rem; display: flex; align-items: center; }
  .schedule-card h3 .icon { font-size: 1.5em; margin-right: 0.75rem; color: #888; }
  .schedule-time { display: flex; justify-content: space-between; align-items: center; padding: 0.85rem 0; border-bottom: 1px solid #e5e5e5; }
  .schedule-time:last-of-type { border-bottom: none; }
  .schedule-time .time { font-weight: bold; font-size: 1.1em; }
  .schedule-time .language { font-style: italic; color: #555; background: #eaeaea; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.9em; }
  .schedule-note { margin-top: 1rem; font-size: 0.9em; color: #666; text-align: center; background: #eef; padding: 0.75rem; border-radius: 4px; }
  .schedule-item { font-size: 1.1em; padding: 0.5rem 0; }
  .special-mass { text-align: center; padding: 1rem; }
  .special-mass strong { display: block; font-size: 1.2em; }
  .special-mass em { color: #555; }
</style>

All are welcome to join us for the celebration of the Holy Mass. This schedule is effective as of August 2025.

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
    <h3><span class="icon">🙏</span>Sacrament of Reconciliation</h3>
    {% for item in site.data.schedule.reconciliation %}
      <p class="schedule-item">{{ item.line }}</p>
    {% endfor %}
  </div>

</div>