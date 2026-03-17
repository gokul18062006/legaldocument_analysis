# Contributing

## Branching Strategy
- Do not push feature work directly to `main`.
- Create short-lived branches:
  - `feature/<short-description>`
  - `fix/<short-description>`
  - `docs/<short-description>`

## Commit Guidelines
- Keep commits small and focused.
- One logical change per commit.
- Use clear messages (Conventional Commits preferred):
  - `feat: add document details tab`
  - `fix: handle pdf base64 decoding`
  - `docs: update render deploy steps`

## Pull Request Process
- Open a PR from your branch into `main`.
- Fill in the PR template completely.
- Ensure CI checks pass before requesting review.
- At least one review is recommended before merge.

## Quality Checks Before PR
- Frontend build passes: `npm run build`
- Backend runs locally from `backend` folder.
- No secrets are committed.
- Update docs when behavior or setup changes.

## Security
- Never commit API keys or secrets.
- Use environment variables and secret managers.
- If a key is exposed, rotate it immediately.
