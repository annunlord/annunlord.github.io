---
permalink: /
layout: splash

# Add a 'home' class to the body tag for our custom CSS
body_class: home
title: "Annunciation of the Lord"
excerpt: "Let it be done to me according to thy word"

# The main header section, now with three action buttons.
header:
  overlay_filter: 0.1 # Slightly darker for better text contrast
  overlay_image: /assets/images/20200302_204320-cropped-blur-dark2.webp
  title: "The Word Became Flesh"
  actions:
    - label: "Mass Times"
      url: "/information/mass_times/"
    - label: "Latest Bulletin"
      url: "/information/bulletins/"
    - label: "Reconciliation"
      url: "/information/mass_times/"
---


<div class="home-mass-times" style="text-align: center; padding: 2rem 1rem;">
  <h2 style="font-size: 1.5em; margin-top: 0;">Join Us for Mass This Weekend</h2>

  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 2rem; max-width: 800px; margin: 0 auto; text-align: left;">

    {% for day in site.data.schedule.weekend %}
    <div style="flex: 1 1 300px;">
      <h3 style="font-size: 1.125em; border-bottom: 2px solid #ddd; padding-bottom: 0.5rem; margin-top: 0;">
        {% if day.day == "Saturday" %}
          {{ day.day }} Vigil
        {% else %}
          {{ day.day }}
        {% endif %}
      </h3>
      <ul style="list-style: none; padding: 0; margin: 0;">
        {% for item in day.times %}
        <li style="font-size: 1.125em; padding: 0.75rem 0; border-bottom: 1px solid #eee;">
          <strong style="color: #333;">{{ item.time }}</strong>
          <span style="color: #666; float: right;">{{ item.language }}</span>
        </li>
        {% endfor %}
      </ul>
    </div>
    {% endfor %}

  </div>

  <p style="margin-top: 2rem;">
    <a href="/broken_link/mass_times/" class="btn btn--primary">View Full Schedule & Confession Times</a>
  </p>
</div>
