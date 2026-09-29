---
title: Outputs
permalink: /outputs/
eyebrow: Deliverables
subtitle: Track the main products of the project and expose completed files when they are ready.
---

<div class="output-grid">
{% for item in site.data.outputs %}
<article class="card output-card">
  <div class="timeline-meta"><span>{{ item.category }}</span>{% include status-badge.html status=item.status %}</div>
  <h2>{{ item.title }}</h2>
  <p>{{ item.description }}</p>
  {% if item.file != "" %}<a class="button small" href="{{ item.file | relative_url }}">Open output</a>{% else %}<span class="muted">No file published yet.</span>{% endif %}
</article>
{% endfor %}
</div>

Edit `_data/outputs.yml` as deliverables are created. Files can be stored in `assets/docs/results/` or linked externally.
