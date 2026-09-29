---
layout: default
title: Research Project
---
<section class="hero">
  <div class="hero-copy">
    <p class="eyebrow">Generic academic project template</p>
    <h1>A clear home for your project, from question to final output.</h1>
    <p class="hero-text">Use this site to document the project rationale, objectives, activities, literature, files, milestones, methods, and outputs in one traceable workspace.</p>
    <div class="hero-actions">
      <a class="button" href="{{ '/timeline/' | relative_url }}">View project timeline</a>
      <a class="button secondary" href="{{ '/literature/' | relative_url }}">Browse literature</a>
    </div>
  </div>
  <aside class="project-card">
    <span class="label">Project status</span>
    <strong>{{ site.project.status }}</strong>
    <dl>
      <div><dt>Lead</dt><dd>{{ site.project.lead }}</dd></div>
      <div><dt>Period</dt><dd>{{ site.project.start_date }} → {{ site.project.end_date }}</dd></div>
      <div><dt>Affiliation</dt><dd>{{ site.project.affiliation }}</dd></div>
    </dl>
  </aside>
</section>

<section class="metrics">
  <div><strong>{{ site.data.timeline | size }}</strong><span>planned milestones</span></div>
  <div><strong>{{ site.data.literature | size }}</strong><span>sample references</span></div>
  <div><strong>{{ site.data.outputs | size }}</strong><span>tracked outputs</span></div>
  <div><strong>1</strong><span>central project site</span></div>
</section>

<section class="section-block">
  <div class="section-heading">
    <div><p class="eyebrow">Project framing</p><h2>Overview</h2></div>
  </div>
  <div class="card-grid three">
    <article class="card"><span class="card-number">01</span><h3>Problem</h3><p>Define the problem or opportunity addressed by the project, including its context and relevance.</p></article>
    <article class="card"><span class="card-number">02</span><h3>Approach</h3><p>Describe the conceptual, experimental, computational, or analytical strategy used to address the problem.</p></article>
    <article class="card"><span class="card-number">03</span><h3>Expected contribution</h3><p>State what the project is expected to produce, clarify, test, improve, or demonstrate.</p></article>
  </div>
</section>

<section class="section-block">
  <div class="section-heading">
    <div><p class="eyebrow">At a glance</p><h2>Project phases</h2></div>
    <a href="{{ '/timeline/' | relative_url }}">Full timeline →</a>
  </div>
  <div class="phase-list">
    {% assign phase_seen = "" %}
    {% for item in site.data.timeline %}
      {% unless phase_seen contains item.phase %}
        <div class="phase-item"><span>{{ item.phase }}</span><p>{{ item.objective }}</p></div>
        {% assign phase_seen = phase_seen | append: item.phase | append: "|" %}
      {% endunless %}
    {% endfor %}
  </div>
</section>

<section class="callout">
  <div><p class="eyebrow">Reference library</p><h2>Keep literature and project files close to the work.</h2><p>PDFs and supporting documents can live directly in <code>assets/docs/</code>. Add their metadata to <code>_data/literature.yml</code> so the literature page remains organized as the project grows.</p></div>
  <a class="button" href="{{ '/documents/' | relative_url }}">How documents work</a>
</section>
