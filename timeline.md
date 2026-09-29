---
title: Timeline & Activities
permalink: /timeline/
eyebrow: Project management
subtitle: The timeline is generated from one editable file: _data/timeline.yml.
---

<div class="timeline">
{% assign current_phase = "" %}
{% for item in site.data.timeline %}
  {% if item.phase != current_phase %}
    {% assign current_phase = item.phase %}
    <h2 class="timeline-phase">{{ current_phase }}</h2>
  {% endif %}
  <article class="timeline-item">
    <div class="timeline-marker">{{ item.id }}</div>
    <div class="timeline-card">
      <div class="timeline-meta"><span>{{ item.period }}</span>{% include status-badge.html status=item.status %}</div>
      <h3><a href="{{ '/milestones/' | append: item.slug | append: '/' | relative_url }}">{{ item.title }}</a></h3>
      <p>{{ item.objective }}</p>
      <details>
        <summary>Activities and deliverables</summary>
        <div class="details-grid">
          <div><strong>Activities</strong><ul>{% for activity in item.activities %}<li>{{ activity }}</li>{% endfor %}</ul></div>
          <div><strong>Deliverables</strong><ul>{% for deliverable in item.deliverables %}<li>{{ deliverable }}</li>{% endfor %}</ul></div>
        </div>
      </details>
    </div>
  </article>
{% endfor %}
</div>

> To change dates, titles, phases, activities, deliverables, or status labels, edit only `_data/timeline.yml`.
