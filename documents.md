---
title: Documents
permalink: /documents/
eyebrow: Project files
subtitle: A simple convention for keeping reference material, project notes, reports, datasets, and supporting files organized.
---

## Recommended folder use

| Location | Use |
|---|---|
| `assets/docs/references/` | Papers, reports, standards, manuals, and literature you are allowed to redistribute |
| `assets/docs/project/` | Proposals, protocols, internal notes, meeting summaries, and project documentation |
| `assets/docs/results/` | Final tables, reports, supplementary material, and other public outputs |
| `assets/images/` | Figures, diagrams, photographs, and visual assets |

## Uploading a PDF

1. Create the appropriate folder under `assets/docs/`.
2. Add the PDF to the repository.
3. Add or update its entry in `_data/literature.yml` or `_data/outputs.yml`.
4. Commit and push. GitHub Pages will rebuild the site automatically.

Example literature entry:

```yaml
- key: "smith-2026"
  type: "article"
  title: "Example paper title"
  authors: "Smith, A.; Lee, B."
  year: 2026
  venue: "Example Journal"
  topic: "Methodology"
  status: "reviewed"
  link: "https://doi.org/..."
  local_file: "/assets/docs/references/smith-2026.pdf"
  notes: "Key methodological reference."
```

## File-size guidance

Git repositories work best when source files remain reasonably small. For large datasets, many PDFs, videos, or binary outputs, use an external data repository or cloud storage and keep only links and metadata on this site.
