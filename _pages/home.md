---
# This is your home page, using the splash layout for a big impact.
layout: splash

# The title for the browser tab.
title: "Welcome to Annunciation of the Lord Catholic Church"

# The permanent URL for the home page.
permalink: /

# The main header section.
header:
  overlay_image: /assets/images/20200302_204320-cropped-blur-dark2.webp
  overlay_filter: 0.5
  caption: "Annunciation of the Lord Catholic Church, Decatur, AL"
  actions:
    - label: "View Full Mass Schedule"
      url: "/parish_life/mass_times/"

# This text appears over the main header image.
excerpt: >-
  A welcoming Catholic community called by God and centered in the Eucharist.
  <br />
  <strong>Join us for Mass this weekend!</strong>

# UPDATED to a 6-item grid for a balanced layout.
feature_row:
  - image_path: /assets/images/news.webp
    alt: "About Our Parish"
    title: "About Our Parish"
    excerpt: "Learn our mission, meet our clergy and staff, and discover the history of our vibrant parish community."
    url: "/about/"
    btn_label: "Learn More"
    btn_class: "btn--primary"
  - image_path: /assets/images/chrismation--1-.webp
    alt: "The Sacraments"
    title: "The Sacraments"
    excerpt: "Discover how to receive the powerful signs of God's grace at our parish, from Baptism to Matrimony."
    url: "/sacraments/"
    btn_label: "Explore the Sacraments"
    btn_class: "btn--primary"
  - image_path: /assets/images/laypeople-at-mass.webp
    alt: "Faith Formation"
    title: "Faith Formation"
    excerpt: "Growing in faith is a lifelong journey. Find a parish group, learn about becoming Catholic, or register."
    url: "/formation/"
    btn_label: "Get Involved"
    btn_class: "btn--primary"
  - image_path: /assets/images/hands-coffee-smartphone-technology.webp
    alt: "Parish Life & News"
    title: "Parish Life & News"
    excerpt: "Stay connected with the day-to-day life of our parish. Find the latest bulletin, view the calendar, and more."
    url: "/parish_life/"
    btn_label: "See What's Happening"
    btn_class: "btn--primary"
  - image_path: /assets/images/news.webp
    alt: "St. Ann's School"
    title: "St. Ann's School"
    excerpt: "Learn more about our parish school, a vital ministry providing academic excellence rooted in the Catholic faith."
    url: "/school/"
    btn_label: "Visit the School Site"
    btn_class: "btn--primary"
  - image_path: /assets/images/missal.webp
    alt: "Donate"
    title: "Donate Online"
    excerpt: "Support the mission and ministries of our parish through secure online giving. Your generosity is greatly appreciated."
    url: "https://giving.parishsoft.com/App/Giving/annunlord"
    btn_label: "Give Now"
    btn_class: "btn--primary"
---

<div style="margin-top: 2rem; margin-bottom: 2rem;">
  <h2 style="text-align: center;">Join Us for Mass</h2>
  <div class="grid__wrapper" style="display: flex; flex-wrap: wrap; justify-content: center; align-items: flex-start; text-align: left; gap: 2rem;">
    <div class="grid__item">
      <h3>Weekend Masses</h3>
      {% for day in site.data.schedule.weekend %}
        <p style="margin-bottom: 1rem;">
          <strong>{{ day.day }}:</strong><br>
          {% for item in day.times %}
            {{ item.time }} ({{ item.language }})<br>
          {% endfor %}
        </p>
      {% endfor %}
    </div>
    <div class="grid__item">
      <h3>Confessions</h3>
      {% for item in site.data.schedule.confession %}
        <p style="margin-bottom: 0.5rem;">{{ item.line }}</p>
      {% endfor %}
    </div>
  </div>
</div>

<hr>

{% include feature_row %}

<hr>

<div style="padding: 2rem 0;">
  <img src="/assets/images/St-Anne-Emblem-High-Quality-32.webp" alt="St. Ann's Catholic School" class="align-right" style="max-width: 300px; border-radius: 8px;">
  <h2>A Ministry of Our Parish</h2>
  <h3>St. Ann's Catholic School</h3>
  <p class="lead">St. Ann's Catholic School has been providing academic excellence rooted in the Catholic faith for over 70 years. Serving students from Pre-K through 8th grade, St. Ann's forms minds and hearts to prepare students to be faith-filled leaders and lifelong learners.</p>
  <p><a href="/school/" class="btn btn--large">Learn More About St. Ann's</a></p>
</div>