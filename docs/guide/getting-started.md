# 安装与使用

凡语言解释器使用 Go 实现。

## 从源码构建

需要先安装 [Go](https://go.dev/dl/)（建议 1.26 或更高版本）。

```bash
git clone git@github.com:china-lang-fan/fan-go.git
cd fan
go build ./cmd/fan
```

将生成的可执行文件放到系统 `PATH` 中，即可使用。

## 运行脚本

编写一个 `hello.凡`：

```凡
打印 "你好，凡"
```

运行：

```bash
fan run hello.凡
```

输出：

```text
你好，凡
```

## 交互式模式（REPL）

```bash
fan repl
```

进入后可以逐行输入表达式：

```text
fan> 1 加 2
3
fan> 变量 名字 = "小明"
fan> 打印 名字
小明
```

输入 `:退出`、`:quit` 或 `:q` 退出 REPL。

## 其他命令

```bash
fan version
fan help
```

## 编辑器支持

官方正在开发编辑器插件：

- JetBrains 插件：<https://github.com/china-lang-fan/fan-jetbrains-plugin>
- VS Code 插件：<https://github.com/china-lang-fan/fan-code-plugin>

凡语言的源文件使用 `.凡` 后缀。

接下来了解凡语言的[语法风格](./style)。
