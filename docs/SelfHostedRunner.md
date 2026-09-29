# Self-hosted macOS runner

The `check` job in `.github/workflows/ci.yml` runs on a macOS arm64 runner registered to this repository. GitHub-hosted jobs cannot start while the account's Actions billing is locked, but self-hosted jobs still run.

## Registration

| Field       | Value                                                                                                                                                      |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Labels      | `self-hosted`, `macOS`, `ARM64`, `mlai-site`                                                                                                               |
| Register at | [Settings → Actions → Runners → New self-hosted runner](https://github.com/donaldfilimon/mlai-site/settings/actions/runners/new?arch=arm64) (macOS, ARM64) |

A runner is registered to one repository. If the same Mac already runs a runner for another repository (for example `abi`), install a second runner in its own directory (for example `~/actions-runner-mlai-site`), add the custom label `mlai-site` when `./config.sh` asks for extra labels, then run `./svc.sh install && ./svc.sh start`.

Until a runner with these labels is online, the self-hosted `check` job waits in the queue.

## Host requirements

- `git` (the Xcode Command Line Tools provide it: `xcode-select --install`). `actions/checkout` falls back to the REST API without it, which is slower.
- Nothing else. `actions/setup-node` downloads Node 22 for darwin-arm64 into the runner's tool cache, and the npm cache lives in the runner account's `~/.npm`. No `sudo`, Homebrew or global Node install is needed.
- Outbound HTTPS to github.com, nodejs.org and registry.npmjs.org.

## Security

This repository is public, so the self-hosted job runs only when the repository is `donaldfilimon/mlai-site` and the event is a `push` to `main` or a pull request whose head branch lives in this repository. Fork pull requests run the unchanged job on `ubuntu-latest` as `check (GitHub-hosted, fork PRs)` instead. The workflow has no `pull_request_target`, `issue_comment` or `workflow_run` trigger. Self-hosted checkouts use `persist-credentials: false`, and the workflow token is `contents: read`.

Where you can, run the runner as a dedicated macOS user rather than your daily account, and keep no production secrets on the host.

## Hosted jobs

Only `check-hosted`, the fork-PR fallback, stays on a GitHub-hosted runner. It is blocked while the billing lock lasts, so fork PRs get no CI until it is cleared.
