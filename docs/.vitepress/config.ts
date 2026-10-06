import { defineConfig } from 'vitepress'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const fanGrammar = JSON.parse(
  readFileSync(resolve(__dirname, 'fan.tmLanguage.json'), 'utf-8')
)

export default defineConfig({
  lang: 'zh-CN',
  title: '凡语言',
  description: '凡语言（fan）—— 中文通用脚本语言官方文档',
  base: '/',
  lastUpdated: true,
  cleanUrls: true,
  markdown: {
    languages: [fanGrammar],
    theme: { light: 'github-light', dark: 'github-dark' }
  },
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/introduction', activeMatch: '/guide/' },
      { text: '示例', link: '/examples/hello-world', activeMatch: '/examples/' },
      { text: '参考', link: '/reference/cheatsheet', activeMatch: '/reference/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '介绍', link: '/guide/introduction' },
            { text: '安装与使用', link: '/guide/getting-started' },
            { text: '语法风格', link: '/guide/style' }
          ]
        },
        {
          text: '基础',
          items: [
            { text: '变量与常量', link: '/guide/variables' },
            { text: '类型系统', link: '/guide/types' },
            { text: '运算', link: '/guide/operators' },
            { text: '条件', link: '/guide/conditionals' },
            { text: '循环', link: '/guide/loops' }
          ]
        },
        {
          text: '数据结构',
          items: [
            { text: '数组', link: '/guide/arrays' },
            { text: '字典', link: '/guide/dicts' },
            { text: '文件', link: '/guide/files' },
            { text: '数学', link: '/guide/math' },
            { text: '随机', link: '/guide/random' },
            { text: '时间', link: '/guide/time' },
            { text: '日期', link: '/guide/date' },
            { text: '类型转换', link: '/guide/conversion' }
          ]
        },
        {
          text: '抽象',
          items: [
            { text: '函数', link: '/guide/functions' },
            { text: '模型', link: '/guide/models' },
            { text: '错误处理', link: '/guide/errors' },
            { text: '模块', link: '/guide/modules' },
            { text: '标签', link: '/guide/tags' },
            { text: '测试', link: '/guide/testing' }
          ]
        }
      ],
      '/examples/': [
        {
          text: '示例',
          items: [
            { text: 'Hello World', link: '/examples/hello-world' },
            { text: '条件与循环', link: '/examples/control-flow' },
            { text: '数组与字典', link: '/examples/collections' },
            { text: '函数与多返回值', link: '/examples/functions' },
            { text: '模型与错误', link: '/examples/models' },
            { text: '模块', link: '/examples/modules' }
          ]
        }
      ],
      '/reference/': [
        {
          text: '参考',
          items: [
            { text: '语法速查', link: '/reference/cheatsheet' },
            { text: '关键字', link: '/reference/keywords' },
            { text: '内建函数', link: '/reference/builtins' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/china-lang-fan' }
    ],
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdatedText: '最后更新',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})
