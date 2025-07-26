---
# UPDATED to use the "splash" layout for a large header image.
layout: splash

# The title of the page.
title: "The Sacraments"

# The permanent URL for this page.
permalink: /sacraments/

# Main header for the splash layout.
header:
  overlay_image: /assets/images/20200302_204320-cropped-blur-dark2.webp
  overlay_filter: 0.5
  caption: "Annunciation of the Lord Catholic Church, Decatur, AL"
  actions:
    - label: "Contact the Parish Office"
      url: "/about/contact_us/"

# This text will appear overlaid on the main splash image.
excerpt: "The sacraments are Christ’s own gifts that provide us with his grace. They are the primary way in which we encounter the saving love of God in the Church. Explore each sacrament to learn more."
---

<style>
  .sacrament-banner {
    position: relative;
    min-height: 250px;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 1rem;
    border-radius: 8px;
    overflow: hidden; /* Ensures border-radius clips the image */
  }
  .sacrament-banner a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4); /* Dark overlay for text readability */
    text-decoration: none;
    transition: background 0.3s ease;
  }
  .sacrament-banner a:hover {
    background: rgba(0, 0, 0, 0.2); /* Lighter overlay on hover */
  }
  .sacrament-banner h2 {
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    font-size: 2.5em;
    margin: 0;
  }
</style>

<hr style="margin-top: 2rem;">
<div style="text-align: center; margin-top: 2rem; margin-bottom: 1.5rem;">
  <h2>Sacraments of Initiation</h2>
</div>

<div class="sacrament-banner" style="background-image: url('/assets/images/baptismal-font.webp');">
  <a href="/sacraments/baptism/"><h2>Baptism</h2></a>
</div>

<div class="sacrament-banner" style="background-image: url('/assets/images/missal.webp');">
  <a href="/sacraments/confirmation/"><h2>Confirmation</h2></a>
</div>

<div class="sacrament-banner" style="background-image: url('/assets/images/hand-celebration-finger-religion-darkness-church-546650-pxhere.com.webp');">
  <a href="/sacraments/eucharist/"><h2>Eucharist</h2></a>
</div>

<hr style="margin-top: 3rem;">
<div style="text-align: center; margin-top: 2rem; margin-bottom: 1.5rem;">
  <h2>Sacraments of Healing</h2>
</div>

<div class="sacrament-banner" style="background-image: url('/assets/images/laypeople-at-mass.webp');">
  <a href="/sacraments/reconciliation/"><h2>Reconciliation</h2></a>
</div>

<div class="sacrament-banner" style="background-image: url('/assets/images/chrismation--1-.webp');">
  <a href="/sacraments/anointing_of_the_sick/"><h2>Anointing of the Sick</h2></a>
</div>

<hr style="margin-top: 3rem;">
<div style="text-align: center; margin-top: 2rem; margin-bottom: 1.5rem;">
  <h2>Sacraments of Service</h2>
</div>

<div class="sacrament-banner" style="background-image: url('/assets/images/TLM_pro_sponsis.webp');">
  <a href="/sacraments/matrimony/"><h2>Matrimony</h2></a>
</div>

<div class="sacrament-banner" style="background-image: url('/assets/images/Ordination-To-Priesthood.webp');">
  <a href="/sacraments/holy_orders/"><h2>Holy Orders</h2></a>
</div>