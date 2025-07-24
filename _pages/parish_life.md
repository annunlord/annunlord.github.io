---
# This page uses the "splash" layout for a consistent feel with other main sections.
layout: splash

# The title of the page.
title: "Parish Life"

# The permanent URL for this page.
permalink: /parish_life/

# Header block configured for the splash layout.
header:
  overlay_image: /assets/images/parish-life-header.webp # <-- TODO: Replace with a photo of the church entrance, a parish event, or people gathering.
  overlay_filter: 0.5 # A dark overlay for text readability.
  caption: "Annunciation of the Lord Catholic Church, Decatur, AL"
  actions:
    - label: "View Mass Times"
      url: "/parish_life/mass_times/"

# This text will appear overlaid on the main splash image.
excerpt: "Stay connected with the day-to-day life of our parish. Find Mass times, view the weekly bulletin, and see what's happening in our community."

# This feature row will serve as the main navigation for this section.
feature_row:
  - image_path: /assets/images/hand-celebration-finger-religion-darkness-church-546650-pxhere.com.webp
    alt: "Mass Times"
    title: "Mass & Confession Times"
    excerpt: "View our full schedule for weekend and daily Masses, as well as opportunities for the Sacrament of Reconciliation."
    url: "/parish_life/mass_times/"
    btn_label: "View Schedule"
    btn_class: "btn--primary"
  - image_path: /assets/images/news.webp
    alt: "Parish Bulletins"
    title: "Weekly Bulletins"
    excerpt: "Stay up-to-date with the latest news, events, and messages from our pastor by reading the most recent parish bulletins."
    url: "/parish_life/bulletins/"
    btn_label: "Read Bulletins"
    btn_class: "btn--primary"
  - image_path: /assets/images/calendar.webp
    alt: "Parish Calendar"
    title: "Parish Calendar"
    excerpt: "Find dates and times for all upcoming parish events, meetings, holy days, and special liturgies."
    url: "/parish_life/calendar/"
    btn_label: "See the Calendar"
    btn_class: "btn--primary"
  - image_path: /assets/images/20230206_095454-blur.webp
    alt: "Adoration"
    title: "Eucharistic Adoration"
    excerpt: "Spend time in quiet prayer and reflection in the presence of the Blessed Sacrament. View our adoration chapel hours."
    url: "/parish_life/adoration/"
    btn_label: "Adoration Times"
    btn_class: "btn--primary"
  - image_path: /assets/images/laypeople-at-mass.webp
    alt: "Liturgical Minister Schedule"
    title: "Liturgical Ministers"
    excerpt: "For our dedicated lectors, Extraordinary Ministers of Holy Communion, ushers, and altar servers to find their current schedule."
    url: "/parish_life/liturgical_minister_schedule/"
    btn_label: "Find the Schedule"
    btn_class: "btn--primary"
  - image_path: /assets/images/hands-coffee-smartphone-technology.webp
    alt: "Email List"
    title: "Join Our Email List"
    excerpt: "Subscribe to our parish email list to get important news and weekly updates delivered directly to your inbox."
    url: "/parish_life/email_list/"
    btn_label: "Subscribe"
    btn_class: "btn--primary"
---

Welcome to the heart of our community's daily activities. This section is your resource for the most current information, schedules, and news. Whether you're planning your week, looking for the latest bulletin, or wanting to find an event on the calendar, you'll find it here.

{% include feature_row %}