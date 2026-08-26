# Security Policy

## Supported versions

Security fixes are prioritized for the latest `main` branch and the currently deployed website built from it. Older deployments or archived commits may not receive fixes.

| Version or channel | Security support |
|---|---|
| Current production deployment | Supported |
| `main` | Supported for active development |
| Older deployments | Best effort only |

## Reporting a vulnerability

Please do **not** report security vulnerabilities in a public GitHub issue, discussion, pull request, or website feedback form.

Use GitHub's private vulnerability reporting flow from the repository's **Security** tab. If that option is unavailable, contact the repository maintainers privately through GitHub and include the affected URL or route, commit or deployment identifier, browser or runtime details, reproduction steps, impact, and any proof-of-concept needed to verify the issue.

Please redact API keys, authentication tokens, cookies, personal data, and other secrets from reports. Use safe test accounts and placeholder values when demonstrating an issue.

## Scope

This policy covers the EleViewer website, client-side and server-side route behavior, generated metadata and structured data, download links, documentation content, deployed assets, build configuration, and the GitHub Actions SEO workflow.

Security reports involving Vercel or another hosting provider should also be submitted through that provider's security channel when the issue is in the hosting platform rather than this repository.

## Response expectations

The maintainers will acknowledge a report when practical, investigate the issue, and coordinate a fix or mitigation. Please allow reasonable time for triage, deployment, and cache propagation before making details public.

When a fix is released, the project may publish a security note describing affected deployments, impact, and the recommended upgrade or mitigation. Reporter credit will be given only with permission.
