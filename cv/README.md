# CV

The CV is generated from `CV.yaml` with [RenderCV](https://rendercv.com), so it can be
version controlled and reviewed like code instead of being edited by hand in a GUI.

## Requirements

Python 3.12 or newer, and pipx:

```powershell
py -m pip install --user pipx
py -m pipx ensurepath
pipx install "rendercv[full]"
```

The `[full]` extra is required, since it installs the Typst engine used to build the PDF.

## Edit and publish

Edit `CV.yaml`, then run:

```powershell
.\cv\render.ps1
```

RenderCV writes the PDF straight to `public/cv/thoriq-rahman-cv.pdf`, which is the file the
portfolio links to. There is only one copy of the PDF, so nothing has to be kept in sync.

To re-render automatically while editing:

```powershell
rendercv render cv\CV.yaml --watch
```

## Layout

| Path | Purpose |
| --- | --- |
| `CV.yaml` | Source. The only file to edit. |
| `render.ps1` | Renders the CV into `public/cv/`. |
| `../public/cv/thoriq-rahman-cv.pdf` | The published PDF the site serves. |

`rendercv_output/` only receives the generated Typst source and is gitignored. It must stay
enabled: Typst is what compiles the PDF, so `dont_generate_typst` cannot be turned on.

## Multiple repositories per project

Every text field supports Markdown, which is how several repos fit on one line:

```yaml
- "Repos: [API](https://github.com/thoriqr/commerce-core-api) · [Web](https://github.com/thoriqr/commerce-web-storefront)"
```

Plain names are also accepted, but ATS parsers drop hyperlinks, so the visible text is what
matters. Prefer writing the repository name rather than a word like "API".

Keep the CV to one page. If a section overflows, cut a bullet rather than shrinking the font.
