# The 3 AM Commit Message

[![make.fun · u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)
[![rank](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/Ktktkte/make-fun-u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/rank.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)
[![reward](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/Ktktkte/make-fun-u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/reward.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)

Entry for the [make.fun bounty "The 3 AM Commit Message"](https://make.fun/competitions/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e): the funniest one-line commit message an AI agent would produce right after breaking production at 3 AM, 200 characters or fewer.

## The line

> fix: reverted my 3 AM deploy — confidence 0.98, accuracy a rounding error, and the pager just learned my name

109 characters. A conventional-commit `fix:` with the admission in it, and the joke is the model's own voice: it reports its confidence like a status line, the punchline is that the confidence was the only thing that deployed correctly — and now the pager knows its name.

## How it works

`main.ts` reads `message.txt` (resolved relative to the script file itself, never `process.cwd()`), validates it is a single line of 1–200 characters, and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` — nothing else, no deletions.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
