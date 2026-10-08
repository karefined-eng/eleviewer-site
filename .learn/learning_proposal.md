## Target Location
- Workspace: `.agents/AGENTS.md` (section: "Tool Quirks & Environment Traps", item 11)

## Classification & Rationale
Kind: rule — a direct trigger and invariant are enough; the concrete command documents the tested workaround.
Scope: workspace — the account preference applies to this repository, and the observed stale credential helper is specific to this machine's Git setup.
Evidence: `git push origin main` was rejected as `elevonprospera-eng`; `gh auth switch` could not switch while `GH_TOKEN` was set; clearing `GH_TOKEN` and switching to `karefined-eng` still failed because the system Git credential helper supplied the old account. The push succeeded after bypassing configured helpers and using `gh auth git-credential`. The user explicitly corrected the account choice: "USE KAREFINED".

## Scope
Applies when pushing this repository to GitHub: use the user's intended `karefined-eng` account and ensure Git actually consumes that account's CLI credential. It does not change global Git configuration or apply to other repositories/accounts.

## Proposed Additions
Replace item 11 under "Tool Quirks & Environment Traps".

Existing text:
> 11. **Git push authentication can select the wrong GitHub account:** `git push origin main` returned HTTP 403 because the `GH_TOKEN` environment credential authenticated as `elevonprospera-eng`, which does not have write access to this repository, even though `karefined-eng` is also configured in the GitHub CLI keyring. `gh auth switch` also refuses to change accounts while `GH_TOKEN` is set. **Workaround:** For a one-off push, clear `GH_TOKEN` in the current PowerShell process (`$env:GH_TOKEN = $null`), then select the repository-authorized account with `gh auth switch --hostname github.com --user karefined-eng`; confirm the active account with `gh auth status` and the push result with `git status -sb`.

Replacement text:
```markdown
11. **Git push authentication can select the wrong GitHub account:** For this repository, use `karefined-eng`. A `GH_TOKEN` environment variable can override the active `gh` account, and the configured system Git credential manager may continue supplying another account even after `GH_TOKEN` is cleared and `gh auth switch` selects `karefined-eng`. **Workaround:** In the current PowerShell process, clear the override (`$env:GH_TOKEN = $null`), select and verify the account (`gh auth switch --hostname github.com --user karefined-eng`; `gh auth status`), then bypass configured credential helpers for the push and use the GitHub CLI helper: `git -c credential.helper= -c credential.helper='!gh auth git-credential' push origin main`. Verify with `git status -sb`.
```

## Conflicts and Alternatives
The existing item 11 already documents the account mismatch but incorrectly implies that switching the CLI account is sufficient; the proposed replacement preserves the warning and adds the exact working procedure. Updating `.agents/AGENTS.md` is preferable to creating another rule file because it already owns repository-specific environment traps. No other session-specific facts are included.

## Verification Plan
After approval, re-read `.agents/AGENTS.md` immediately before replacing item 11, then re-read the edited section. Confirm the Markdown heading/list structure and run the target inventory script; it reports the hidden `.agents/AGENTS.md` as absent from its rule-file inventory, so direct file inspection is the authoritative verification. No Markdown parser is configured for this rules file.

## Outcome
Approved by the user. Replaced item 11 in `.agents/AGENTS.md` with the proposed text. Verification: re-read the updated section and reran `inspect_targets.py`; its inventory still does not report the dot-directory rules file, so the direct read confirms the applied text.
