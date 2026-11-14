# Conversion and onboarding improvements

## What changed

- Reduced the homepage hero to one dominant download action and one preview action.
- Moved the source-code link below the primary actions so trust remains visible without competing with download intent.
- Added a direct portable ZIP option beside the installer for users who cannot or do not want to install software.
- Rewrote the download flow as three concrete steps: install, open a file, and press F9.
- Added download analytics for the download page and portable ZIP link.
- Corrected the displayed v1.3.7 installer checksum to match the published GitHub release.
- Replaced contradictory “no installation” copy on the core FAQ, demo, and download surfaces.

## Validation

Run `npm run build` from the repository root. Confirm the homepage, `/download`, and `/demo` render successfully and that both download links resolve to the v1.3.7 release assets.
