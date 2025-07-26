---
layout: single
title: "Clergy & Staff"
permalink: /about/staff/
header:
  image: /assets/images/about-header-2.webp
  alt: "The altar at Annunciation of the Lord"
---

<style>
  .staff-entry { display: flex; align-items: center; gap: 1.5rem; padding: 1.5rem 0; border-bottom: 1px solid #eee; }
  .staff-entry:last-of-type { border-bottom: none; }
  .staff-entry img { width: 120px; height: 120px; border-radius: 50%; object-fit: cover; flex-shrink: 0; }
  .staff-details h3 { margin-top: 0; margin-bottom: 0.25rem; font-size: 1em; color: #555; }
  .staff-details strong { font-size: 1.2em; }
  .staff-details p { margin-top: 0; margin-bottom: 1rem; }
  @media screen and (max-width: 576px) { .staff-entry { flex-direction: column; text-align: center; } }
</style>

## Clergy

{% for person in site.data.staff.clergy %}
  {% include staff_member.html person=person %}
{% endfor %}

---
## Deacons

{% for person in site.data.staff.deacons %}
  {% include staff_member.html person=person %}
{% endfor %}

---
## Parish Staff

{% for person in site.data.staff.parish_staff %}
  {% include staff_member.html person=person %}
{% endfor %}