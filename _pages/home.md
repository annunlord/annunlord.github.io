---
permalink: /
layout: splash
hidden: true
date: 2022-01-15
last_modified_at: 2022-07-23
header:
  overlay_color: "#5e616c"
  overlay_image: /assets/images/20200302_204320-cropped-blur-dark2.webp
  actions:
    - label: "See Mass Times"
      url: "/information/mass_times/"
excerpt: >
  To know and love God and be Christ to one another.<br />
  <small><a href="https://www.catholic.com/magazine/print-edition/christian-yesbut-why-catholic">Why Catholic?</a></small>
feature_row:
  - title: "Weekly Bulletin"
    excerpt: "Get your fix of the weekly news!"
    url: "/information/bulletins/"
    btn_class: "btn--primary"
    btn_label: "Bulletins"
    image_path: "assets/images/blurred_bulletin.webp"
  - title: "Information"
    excerpt: "For a list of information resources, check out"
    url: "/information/"
    btn_class: "btn--primary"
    btn_label: "More Information"
    image_path: "assets/images/books-support.webp"
  - title: "Saint Ann Catholic School"
    excerpt: "Cultivating truth, goodness, and beauty"
    url: "https://saintanndecatur.org/"
    btn_class: "btn--primary"
    btn_label: "St. Ann's Website"
    image_path: "assets/images/school-kids.webp"
---

{% include feature_row %}

<div class="home-mass-times" style="text-align: center; padding: 2rem 1rem; background: #f9f9f9;">
  <h2 style="font-size: 1.5em; margin-top: 0;">Join Us for Mass This Weekend</h2>
  <p class="lead" style="margin-bottom: 2rem;">All are welcome in the house of the Lord.</p>

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
    <a href="/parish_life/mass_times/" class="btn btn--primary">View Full Schedule & Confession Times</a>
  </p>
</div>
