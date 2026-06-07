---
layout: page
permalink: /newpubs/
pubyears: [2025, 2023, 2022, 2017, 2016]
repyears: [2018, 2015, 2014]
title: publications
nav: true
nav_order: 1
---

<div class="publications">


{% for entry in site.data.pubs.papers %}
    {% include newpub.liquid %}
{% endfor %}

<h3> reports and unpublished work </h3>

{% for entry in site.data.pubs.reports %}
    {% include newpub.liquid %}
{% endfor %}


</div>
