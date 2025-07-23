---
# This file uses the "splash" layout to create a visually rich landing page.
layout: splash

# The title of the page, which will appear in the browser tab.
title: "Our Mission & People"

# The permanent URL for this page.
permalink: /about/

# The main header section with the background image. The mission is now the focus.
header:
  overlay_image: /assets/images/20200302_204320-cropped-blur-dark2.webp
  overlay_filter: 0.5
  caption: "Annunciation of the Lord Catholic Church, Decatur, AL"
  actions:
    - label: "Get Directions"
      url: "/about/directions/"

# The Mission Statement will appear prominently over the header image.
excerpt: "We, the Catholic community of Annunciation of the Lord, are called by God and centered in the Eucharist to be a welcoming parish, to evangelize, and to serve our community through faith, hope, and love."

# UPDATED: This now has three feature rows.
feature_row:
  - image_path: /assets/images/favicons/android-chrome-192x192.png
    alt: "Parish Staff"
    title: "Meet Our Parish Staff"
    excerpt: "Our dedicated staff works behind the scenes to support our parish's mission and ministries."
    url: "/about/staff/"
    btn_label: "See Who's Who"
    btn_class: "btn--inverse"
  - image_path: /assets/images/favicons/android-chrome-192x192.png
    alt: "Parish History"
    title: "Our Parish History"
    excerpt: "Discover the deep roots of our parish and its journey of faith serving the Decatur area."
    url: "/about/history/"
    btn_label: "Read Our Story"
    btn_class: "btn--inverse"
  - image_path: /assets/images/favicons/android-chrome-192x192.png
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
  <div class="grid__item" style="max-width: 350px; margin-bottom: 2rem; text-align: center;">
    <img src="/assets/images/bio-photo-2.webp" alt="Rev. Michael Smith" style="border-radius: 50%; width: 150px; height: 150px; object-fit: cover;">
    <h3>Rev. Michael Smith</h3>
    <h4>Pastor</h4>
    <p>A warm welcome to you from all of us at Annunciation of the Lord! It is a blessing to serve this vibrant community. We hope you find a spiritual home here, rich in faith, fellowship, and service.</p>
  </div>
  <div class="grid__item" style="max-width: 350px; margin-bottom: 2rem; text-align: center;">
    <img src="/assets/images/bio-photo-2.webp" alt="Rev. David Chen" style="border-radius: 50%; width: 150px; height: 150px; object-fit: cover;">
    <h3>Rev. David Chen</h3>
    <h4>Parochial Vicar</h4>
    <p>Peace be with you! I am delighted to be a part of this wonderful parish family. Whether you are a lifelong member or a first-time visitor, know that you are always welcome here.</p>
  </div>
</div>

<div class="deacon-profiles" style="text-align: center; margin-top: 2rem; margin-bottom: 2rem;">
  <h2>Meet Our Deacons</h2>
</div>
<div class="grid__wrapper" style="display: flex; flex-wrap: wrap; justify-content: space-evenly; align-items: flex-start;">
  <div class="grid__item" style="max-width: 280px; margin-bottom: 2rem; text-align: center;">
    <img src="/assets/images/bio-photo-2.webp" alt="Deacon John Miller" style="border-radius: 50%; width: 150px; height: 150px; object-fit: cover;">
    <h3>Deacon John Miller</h3>
    <h4>Deacon</h4>
    <p>It is an honor to serve the Lord and this parish community. May we all grow together in our faith and service to others.</p>
  </div>
  <div class="grid__item" style="max-width: 280px; margin-bottom: 2rem; text-align: center;">
    <img src="/assets/images/bio-photo-2.webp" alt="Deacon Robert Jones" style="border-radius: 50%; width: 150px; height: 150px; object-fit: cover;">
    <h3>Deacon Robert Jones</h3>
    <h4>Deacon</h4>
    <p>Through Baptism, we are all called to serve. I am blessed to live out that call with all of you here at our parish.</p>
  </div>
  <div class="grid__item" style="max-width: 280px; margin-bottom: 2rem; text-align: center;">
    <img src="/assets/images/bio-photo-2.webp" alt="Deacon James Davis" style="border-radius: 50%; width: 150px; height: 150px; object-fit: cover;">
    <h3>Deacon James Davis</h3>
    <h4>Deacon</h4>
    <p>Let us proclaim the Gospel not only with our words, but with our lives. I am grateful for the opportunity to serve this community.</p>
  </div>
  <div class="grid__item" style="max-width: 280px; margin-bottom: 2rem; text-align: center;">
    <img src="/assets/images/bio-photo-2.webp" alt="Deacon William Garcia" style="border-radius: 50%; width: 150px; height: 150px; object-fit: cover;">
    <h3>Deacon William Garcia</h3>
    <h4>Deacon</h4>
    <p>Serving at the Altar of the Lord and the altar of the poor is a profound joy. Thank you for being such a welcoming parish family.</p>
  </div>
</div>

<hr>

{% include feature_row %}