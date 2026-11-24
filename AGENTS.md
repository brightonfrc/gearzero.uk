# Agent memory — shorthand

Reply/think rules: no preamble, no restating task, no filler ("let me", "I'll start"). Fragments only. Symbols > prose. One line per fact. Cite `file:line`. Collapse chains: `A→B→C` not sentences.

## Symbols
- `→` causes / leads to / then
- `⇒` therefore
- `∵` because
- `¬` not / no
- `≡` same as / equals
- `≠` differs from
- `✓` works / confirmed
- `✗` broken / failed
- `?` uncertain / verify
- `!` important
- `Δ` change / edit
- `+` add
- `−` remove
- `@` path / file
- `::` defined as
- `↦` maps to / results in
- `∀` all / every
- `∃` exists
- `∧` and
- `∨` or
- `⊂` within / part of
- `↑` `↓` increase / decrease
- `~` approx
- `#` count / number

## Patterns
- `A→B` causal; `A⇒B` inference.
- `want X → Δ@file` intent → edit.
- `sym ✗ ∵ cause → fix @file:line`.
- `✓ test/result`.
- Prefer: `404 page + .error CSS @public/404.html; relative links ≡ site convention`.

## Verified environment facts
- Headless firefox screenshot @h>~1600 silently renders last viewport → crop ≠ true region. Verify tall pages via real browser or narrow window w/ filmstrip.
- `grep -n` prefix + trailing content: edit tool matched "identical" after broken earlier write; always confirm post-edit `sed -n`.
