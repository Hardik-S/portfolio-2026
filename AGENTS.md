# Portfolio Agent Rules

These rules apply to any agent making changes in this repository.

## Delivery Standard

Every code or content change must include:

- a local run of the portfolio before handoff
- a concise verification note describing what was checked
- a well-commented GitHub PR when changes are published

## Local Run Requirement

Before closing work, run the site locally and confirm the changed surface renders.

Preferred commands:

```powershell
npm run dev:firefox
```

If browser launch is not appropriate, use:

```powershell
npm run dev
```

## Pull Request Requirement

Published changes must use a PR body that covers:

- what changed
- why it changed
- what was verified locally
- screenshots or notes for visible UI changes
- open questions, tradeoffs, or follow-ups

Use `.github/pull_request_template.md`.

## Portfolio-Specific Guardrails

- Keep landing-page copy human-readable first.
- Do not add decorative gimmicks that do not help a reviewer assess Hardik.
- Standout interactions must reveal judgment, proof, or working style.
- Do not claim results that are not supported by source material.

## References

- `docs/agent-guardrails.md`
- `docs/portfolio-strategy.md`
