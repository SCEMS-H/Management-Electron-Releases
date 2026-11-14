# SCEMS Windows 下载

学生综合素质测评管理系统 Windows 安装包、校验和及版本清单。

目前尚无正式安装包。下载入口、版本清单和发布说明将在正式发布时提供。

## 发布内容

仅提供经过验证的 Windows 安装包、更新清单、校验和及面向用户的发布说明。源码、数据库、配置密钥和业务数据不属于本仓内容。

正式版本应提供可验证的代码签名；单独的同源校验和不构成完整的更新信任链。

## 自动发布来源

安装包由私有 `SCEMS-H/Management-Electron` 的正式版本发布工作流上传，本仓不读取私有源码，也不保存跨仓写入令牌。

正式标签通过检查后，在私有构建环境签名，再创建本仓草稿 Release；仅上传安装包、对应blockmap、latest.yml、release-manifest.json和SHA256SUMS。全部附件校验通过后才公开，并复核匿名下载。

未完成签名、缺少凭证或只运行CI不会自动产生正式安装包。普通提交不发布，已公开版本不可原地替换；客户端自动安装更新是独立功能。

本仓CI检查Git文件白名单和新PR标题。启用本地提交主题检查：

```powershell
git config core.hooksPath .githooks
node --test tests/*.test.mjs
```

## 协作

参见 [CONTRIBUTING.md](./CONTRIBUTING.md) 和 [AGENTS.md](./AGENTS.md)。
