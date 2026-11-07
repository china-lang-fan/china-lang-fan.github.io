# 凡语言官方文档

[凡语言](https://github.com/china-lang-fan/fan-go)是一门以中文关键字为核心的通用脚本语言。本仓库是凡语言官方文档，使用 [VitePress](https://vitepress.dev/) 构建并部署在 GitHub Pages。

在线阅读：<https://china-lang-fan.github.io/>

## 本地开发

需要 Node.js 20+ 与 pnpm 10+。

```sh
pnpm install
pnpm dev
```

## 构建与预览

```sh
pnpm build
pnpm preview
```

推送到 `main` 后，GitHub Actions 会自动构建并部署 GitHub Pages。

## 目录

```text
docs/
├── index.md
├── guide/
├── examples/
└── reference/
```

## 许可证

MIT
