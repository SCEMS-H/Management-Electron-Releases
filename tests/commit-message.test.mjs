import test from 'node:test'
import assert from 'node:assert/strict'
import { validateCommitMessage } from '../scripts/commit-message.mjs'
test('提交主题使用可选仓内模块，不重复端名', () => {
  for (const message of ['docs: 更新说明', 'fix(ipc): 验证来源', 'ci(release): 校验版本', 'feat(config)!: 更新协议']) validateCommitMessage(message)
  for (const message of ['docs(desktop): 文档', 'fix(server): 修复', 'feat(student): 界面', 'chore(shared): 依赖', 'ci(releases): 发布', 'invalid', 'docs: ', 'docs: x\nforged']) assert.throws(() => validateCommitMessage(message))
})
