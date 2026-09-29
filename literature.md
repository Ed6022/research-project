---
title: Literature Library
permalink: /literature/
eyebrow: References & evidence
subtitle: A lightweight catalogue for papers, reports, books, datasets, standards, manuals, and other project references.
---

<div class="toolbar">
  <input id="literature-search" type="search" placeholder="Search title, author, topic, year..." aria-label="Search literature">
</div>

<div class="literature-list" id="literature-list">
{% for ref in site.data.literature %}
<article class="literature-item" data-search="{{ ref.title }} {{ ref.authors }} {{ ref.topic }} {{ ref.year }} {{ ref.type }} {{ ref.status }}">
  <div class="literature-main">
    <div class="literature-meta"><span>{{ ref.type }}</span><span>{{ ref.year }}</span><span>{{ ref.topic }}</span></div>
    <h2>{{ ref.title }}</h2>
    <p>{{ ref.authors }}{% if ref.venue %} · {{ ref.venue }}{% endif %}</p>
    {% if ref.notes %}<p class="muted">{{ ref.notes }}</p>{% endif %}
  </div>
  <div class="literature-actions">
    {% include status-badge.html status=ref.status %}
    {% if ref.local_file != "" %}<a class="button small" href="{{ ref.local_file | relative_url }}">Local file</a>{% endif %}
    {% if ref.link != "" and ref.link != "#" %}<a class="button small secondary" href="{{ ref.link }}">External link</a>{% endif %}
  </div>
</article>
{% endfor %}
</div>

## Adding a reference

Add one entry to `_data/literature.yml`. If you want to store the document inside the repository, place it in `assets/docs/` and set `local_file` to `/assets/docs/your-file.pdf`.

Large copyrighted collections should generally not be committed to a public repository. For those, keep bibliographic metadata here and link to the publisher, DOI, institutional repository, or another lawful source instead.
