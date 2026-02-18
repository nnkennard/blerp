---
layout: page
permalink: /publications/
pubyears: [2025, 2023, 2022, 2017, 2016]
repyears: [2018, 2015, 2014]
title: publications
nav: true
nav_order: 1
---

<div class="publications">
  {%- for y in page.pubyears %}
    <!--h2 class="year">{{y}}</h2-->
    {% bibliography -f papers -q @*[year={{y}}]* %}
  {% endfor %}
</div>
<br> <br> <br>
<h1 class="post-title">reports and unpublished work</h1>
<div class="publications">
  {%- for y in page.repyears %}
    <!--h2 class="year">{{y}}</h2-->
    {% bibliography -f reports -q @*[year={{y}}]* %}
  {% endfor %}
</div>
