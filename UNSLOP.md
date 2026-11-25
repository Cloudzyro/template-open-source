# Unslop pass

Done with the unslop skill (unslop by Damir Sokolovsky, @heydamir, CC BY 4.0) on November 25, 2026, right after the first build.

## Audit

Light slop. Built against the skill from the start; the first screenshots showed copy problems more than visual ones.

- Two claims that didn't match the page: "about 40 KB" in the description next to "41 KB" in the facts, and "a dozen lines" over an example of about sixteen: `src/data/project.ts`, `src/pages/index.astro`
- Example code lines too long for the panel, so they ran off the edge: `project.ts`
- The headline broke at "key-" across two lines: `project.ts`
- Six features in an even three-column grid: kept, because it's a ruled list without cards, icons or decoration, and the example and community sections below vary the rhythm
- Checked and clean: no gradients, glows, blobs, badges above the headline, emoji, uppercase tracked labels, italics, heavy weights, trailing periods on labels or buttons, hype words or looping motion; the star count is quiet mono text in the header, not a glowing pill

## Direction

- Product: the home page of loam, an open-source embedded key-value store for Node, Deno and Bun, for developers deciding whether to try it
- Character: sturdy, earthy, matter-of-fact
- World: soil strata and field notes; layers settling over time, clay, stone, dark loam
- Moments: the strata diagram in the hero, showing how a write settles from the log into deeper layers; the dark code panel with its output
- Signature: the clay ramp, used only where something is layered (the diagram, the favicon, contributor initials)

## Changes

- Spacing: 4px scale; sections 112px apart (72 on phones); ruled lists share one padding
- Color: stone paper ramp, near-black ink for primary buttons, one clay accent for links and the prompt; the clay ramp lives only in the diagram and avatars
- Type: Instrument Sans for text, Space Mono for the name, version, commands, figures and code captions; weights 400 and 500; sentence case; non-breaking hyphen in "key-value" so the headline breaks cleanly
- Layout: split hero with the install box under the text and the diagram beside it; the example has a sticky heading beside the code
- Copy: numbers made consistent (41 KB everywhere), example shortened so every line fits, the heading no longer counts lines
- Motion: color changes and a small press scale; the copy button changes its label instead of animating

screenshot-2: Quick example with captioned code steps
screenshot-3: Contributors, sponsors and community links
