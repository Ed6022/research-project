# Generic Research Project Site

A lightweight GitHub Pages / Jekyll template for documenting a research, academic, engineering, or technical project.

## What is included

- project overview / landing page
- general and specific objectives
- activity timeline and milestones
- literature/reference catalogue with client-side search
- document upload convention
- project outputs / deliverables
- responsive layout
- no external Jekyll theme or plugin required

## 1. Create the GitHub repository

Create a new empty repository, for example:

```text
research-project
```

Do not add an extra README or .gitignore when creating it if you intend to push this folder directly.

## 2. Personalize `_config.yml`

At minimum change:

```yaml
title: "Research Project"
baseurl: "/research-project"

project:
  short_title: "Project Alpha"
  status: "Planning"
  lead: "Your Name"
  affiliation: "Your Institution / Laboratory"
  email: "your.email@example.com"
  repository_url: "https://github.com/USERNAME/research-project"
```

`baseurl` must exactly match the repository name. If the repository itself is `USERNAME.github.io`, set:

```yaml
baseurl: ""
```

## 3. Push to GitHub

From this directory:

```bash
git init
git add .
git commit -m "Initial project website"
git branch -M main
git remote add origin https://github.com/USERNAME/research-project.git
git push -u origin main
```

## 4. Enable GitHub Pages

On GitHub:

1. Repository → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main**
4. Folder: **/(root)**
5. Save

Your site will normally be available at:

```text
https://USERNAME.github.io/research-project/
```

## Main content files

- `index.md` — project homepage
- `objectives.md` — objectives and research questions
- `_data/timeline.yml` — central activity calendar
- `_milestones/` — milestone-specific notes
- `_data/literature.yml` — reference catalogue
- `literature.md` — rendered literature library
- `documents.md` — upload instructions and document conventions
- `_data/outputs.yml` — deliverables and outputs
- `outputs.md` — rendered outputs page
- `assets/docs/` — files published with the site
- `assets/css/style.css` — visual design

## Updating the timeline

Edit `_data/timeline.yml`. The timeline page and milestone pages read directly from that file.

Statuses can be anything, but the stylesheet already recognizes labels such as:

```text
planned
in-progress
active
complete
reviewed
blocked
```

## Adding literature

Add an entry to `_data/literature.yml`:

```yaml
- key: "example-2026"
  type: "article"
  title: "Example article"
  authors: "Author A.; Author B."
  year: 2026
  venue: "Example Journal"
  topic: "Methodology"
  status: "reviewed"
  link: "https://doi.org/..."
  local_file: "/assets/docs/references/example-2026.pdf"
  notes: "Why this reference matters."
```

Then place the file in `assets/docs/references/` if you have the right to redistribute it.

## Preview locally

GitHub Pages can build this without local installation. For a local preview, install Ruby/Jekyll and run:

```bash
gem install jekyll bundler
jekyll serve
```

Then open the local address shown by Jekyll. The site will be served under the `baseurl` configured in `_config.yml`.

## Design note

The architecture is inspired by the useful data-driven organization of the `fairycloudsi/matrix-theory-i` course site, but this project template was written from scratch for a general project workflow.
