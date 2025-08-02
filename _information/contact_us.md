---
layout: single
title: "Contact Us"
excerpt: "How to get in touch"
permalink: /information/contact_us/
header:
  image: /assets/images/blurred_bulletin.webp
  alt: "The altar at Annunciation of the Lord"
date: 2022-01-15
last_modified_at: 2024-06-18
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

## Mailing Address

<address>
 ANNUNCIATION OF THE LORD CATHOLIC CHURCH<br/> 3910 Spring Avenue SW<br/> Decatur, AL 35603<br/> United States
</address>

## Church Office

**Spiritual Emergencies**:
If you have a **spiritual emergency** please contact
[(256) 558-4246 - bilingual](tel:+1-256-558-4246){: .btn .btn--inverse}
[(256) 686-0096 - bilingual](tel:+1-256-686-0096){: .btn .btn--inverse}
{: .notice--warning}

[For Options: (256) 353-2667](tel:+1-256-353-2667){: .btn .btn--inverse}
[Secretary: (256) 353-2667 x 101](tel:+1-256-353-2667,,101){: .btn .btn--success}
[parish@annunlord.com](mailto:parish@annunlord.com){: .btn .btn--inverse}

Fax Number: `(256) 353-8994`

### Parish Office Hours

| Day       | Office Hours      |
| --------- | ----------------- |
| Monday    | 8:00 AM – 4:00 PM |
| Tuesday   | 8:00 AM – 4:00 PM |
| Wednesday | 8:00 AM – 4:00 PM |
| Thursday  | 8:00 AM – 4:00 PM |
| Friday    | 8:00 AM – Noon    |

## St. Vincent DePaul

For financial help or for assistance with food Please call
[(256) 353-2667 x 502](tel:+1-256-353-2667,,502){: .btn .btn--inverse}
{: .notice--success}

## Our Diocese

<address>
Diocese of Birmingham in Alabama<br/>
2121 3rd Avenue North (35203)<br/>
P. O. Box 12047<br/>
Birmingham, AL 35202-2047<br/>
United States
</address>

[(205) 838-8322](tel:+1-205-838-8322){: .btn .btn--inverse}
[www.bhmdiocese.org](https://www.bhmdiocese.org){: .btn .btn--inverse}

## United States Conference of Catholic Bishops

<address>
United States Conference of Catholic Bishops<br/>
3211 Fourth Street NE<br/>
Washington DC 20017<br/>
United States
</address>

[(202) 541-3000](tel:+1-202-541-3000){: .btn .btn--inverse}
[www.usccb.org](https://www.usccb.org){: .btn .btn--inverse}

# Who To Contact

## Baptism

Pre-Baptism classes in English are usually held on the 2nd Saturday of the month from 8:30-9:30 AM. Pre-registration is required. Contact the Parish Office to register and to verify the date and time of the class.

## Marriage

Arrangements must be made 6 months in advance.
Call Parish Office.

## Anointing of the Sick or Sick Calls

To schedule, please call the Parish Office including
if a family member is in the hospital.

## Funerals

Please contact the Parish Office before making
funeral home arrangements.

## OCIA (Formerly RCIA)

Thursdays, 6:30-7:30 PM September - April.
Please contact the Parish Office.

[More Information on OCIA from USCCB](https://www.usccb.org/beliefs-and-teachings/who-we-teach/christian-initiation-of-adults){: .btn .btn--inverse}

## Problem with the website?

Please leave an issue on the [GitHub Issues.](https://github.com/annunlord/annunlord.github.io/issues){: .btn .btn--danger}
