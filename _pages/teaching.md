---
layout: page
title: teaching
permalink: /teaching/
description: Artifacts from prior teaching experiences
nav: true
nav_order: 3
display_categories: ["guest", "active", "misc"]
---



<div class="projects">
  {% for category in page.display_categories %}

    <!-- Full category title -->
    {% if category == "guest" %}
      {% assign catname = "guest lectures" %}
    {% elsif category == "active" %}
      {% assign catname = "classroom activities" %}
    {% elsif category == "misc" %}
      {% assign catname = "miscellaneous" %} 
    {% endif %}

    <a id="{{ category }}" href=".#{{ category }}">
      <h2 class="category">{{ catname }}</h2>
    </a>

    <!-- Retrieving projects -->
    {% assign categorized_projects = site.projects | where: "category", category %}
    {% assign sorted_projects = categorized_projects | sort: "importance" %}


    <!-- Generating cards for each project -->
    <div class="row row-cols-1 row-cols-md-3">
      {% for project in sorted_projects %}
        {% include projects.liquid %}
      {% endfor %}
    </div>
{% endfor %}

</div>
