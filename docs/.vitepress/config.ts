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
      { text: '标准库', link: '/sdk/', activeMatch: '/sdk/' },
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
            { text: '编辑器与语言服务器', link: '/guide/editor' },
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
            { text: '字典', link: '/guide/dicts' }
          ]
        },
        {
          text: '抽象',
          items: [
            { text: '函数', link: '/guide/functions' },
            { text: '原生类型方法', link: '/guide/primitive-methods' },
            { text: '模型', link: '/guide/models' },
            { text: '接口', link: '/guide/interfaces' },
            { text: '错误处理', link: '/guide/errors' },
            { text: '模块', link: '/guide/modules' },
            { text: '标签', link: '/guide/tags' }
          ]
        }
      ],
      '/sdk/': [
        {
          text: '标准库',
          items: [
            { text: '总览', link: '/sdk/' },
            { text: '内建函数', link: '/sdk/builtins' }
          ]
        },
        {
          text: '基础',
          items: [
            { text: '数学', link: '/sdk/math' },
            { text: '随机', link: '/sdk/random' },
            { text: '类型转换', link: '/sdk/conversion' }
          ]
        },
        {
          text: '文本',
          items: [
            { text: '正则', link: '/sdk/regex' },
            { text: '编码', link: '/sdk/encoding' }
          ]
        },
        {
          text: '时间',
          items: [
            { text: '时间', link: '/sdk/time' },
            { text: '日期', link: '/sdk/date' }
          ]
        },
        {
          text: '系统交互',
          items: [
            { text: '文件', link: '/sdk/files' },
            { text: '进程', link: '/sdk/process' },
            { text: '网络', link: '/sdk/network' }
          ]
        },
        {
          text: '测试',
          items: [
            { text: '测试框架', link: '/sdk/testing' }
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
            { text: '内建函数', link: '/sdk/builtins' }
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
