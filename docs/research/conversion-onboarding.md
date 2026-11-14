# Conversion and onboarding rationale

## Intent

The first visit should answer four questions quickly: what EleViewer is, who it is for, what happens after clicking download, and whether the user can trust the file.

## Decisions

- **One dominant action:** The hero keeps download as the only filled primary action. Preview remains available for visitors who need proof before downloading, while source code moves to a lower-emphasis trust link.
- **Progressive disclosure:** The homepage communicates the promise and reassurance first. The download page then exposes checksum, SmartScreen guidance, system requirements, and the exact first-session steps.
- **Choice at the point of friction:** The installer is the default path, but the portable ZIP is offered directly for school computers or users who avoid installers. This prevents a hard stop without forcing every visitor to evaluate two downloads before committing.
- **Expectation matching:** Copy now distinguishes the per-user installer from the portable ZIP. Accurate expectations reduce hesitation and support requests caused by a mismatch between the promise and the downloaded file.

## Measurement loop

Compare homepage `download_clicked` events with `download_page` clicks and portable ZIP clicks in Vercel Analytics. The next experiment should test the installer-first path against a hero link that says “Try the live demo first,” using download-page visits and completed release-asset redirects as the primary outcomes.
