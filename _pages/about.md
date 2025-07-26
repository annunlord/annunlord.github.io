---
layout: splash
title: "Our Mission & People"
permalink: /about/

header:
  overlay_image: /assets/images/20200302_204320-cropped-blur-dark2.webp
  overlay_filter: 0.5
  caption: "Annunciation of the Lord Catholic Church, Decatur, AL"
  actions:
    - label: "Get Directions"
      url: "/about/directions/"

excerpt: "We, the Catholic community of Annunciation of the Lord, are called by God and centered in the Eucharist to be a welcoming parish, to evangelize, and to serve our community through faith, hope, and love."

feature_row:
  - image_path: /assets/images/chrismation--1-.webp
    alt: "Parish Staff"
    title: "Meet Our Parish Staff"
    excerpt: "Our dedicated staff works behind the scenes to support our parish's mission and ministries."
    url: "/about/staff/"
    btn_label: "See Who's Who"
    btn_class: "btn--inverse"
  - image_path: /assets/images/Ascension.webp
    alt: "Parish History"
    title: "Our Parish History"
    excerpt: "Discover the deep roots of our parish and its journey of faith serving the Decatur area."
    url: "/about/history/"
    btn_label: "Read Our Story"
    btn_class: "btn--inverse"
  - image_path: /assets/images/hands-coffee-smartphone-technology.webp
    alt: "Contact Us"
    title: "Contact Us"
    excerpt: "Have questions? Need to get in touch with our office? Find all of our contact information here."
    url: "/about/contact_us/"
    btn_label: "Get In Touch"
    btn_class: "btn--inverse"
---

<div class="priest-profiles" style="text-align: center; margin-top: 3rem; margin-bottom: 2rem;">
  <h2>Meet Our Priests</h2>
</div>
<div class="grid__wrapper" style="display: flex; flex-wrap: wrap; justify-content: space-evenly; align-items: flex-start;">
  {% for person in site.data.staff.clergy %}
    {% include staff_profile_card.html person=person %}
  {% endfor %}
</div>

<div class="deacon-profiles" style="text-align: center; margin-top: 2rem; margin-bottom: 2rem;">
  <h2>Meet Our Deacons</h2>
</div>
<div class="grid__wrapper" style="display: flex; flex-wrap: wrap; justify-content: space-evenly; align-items: flex-start;">
  {% for person in site.data.staff.deacons %}
    {% include staff_profile_card.html person=person max_width="280px" %}
  {% endfor %}
</div>

<hr>

{% include feature_row %}