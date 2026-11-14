import { readFileSync } from 'node:fs'
import { pathToFileURL } from 'node:url'

export function validateCommitMessage(subject) {
  const match = /^(feat|fix|docs|chore|test|refactor|perf|build|ci|revert)(?:\(([a-z0-9-]+)\))?!?: (\S.*)$/u.exec(subject)
  if (!match) throw new Error('提交主题必须符合 Conventional Commits')
  if (['desktop', 'server', 'student', 'shared', 'releases'].includes(match[2])) {
    throw new Error('scope 使用仓内模块（如 ipc、config、installer），不要重复端名；无模块时省略')
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const subject = process.argv[2] === '--file'
    ? readFileSync(process.argv[3], 'utf8').split(/\r?\n/)[0]
    : process.env.PR_TITLE
  validateCommitMessage(subject ?? '')
}
