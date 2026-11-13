# 安装与使用

凡语言的参考实现（语义基准）是 [fan-rust](https://github.com/china-lang-fan/fan-rust)，使用 Rust 编写，命令为 `fan`。

## 安装

### 下载安装包（推荐）

从 [Releases](https://github.com/china-lang-fan/fan-rust/releases) 下载对应平台的安装包：

| 平台 | 产物 |
| --- | --- |
| Linux x86_64 | `fan-<版本>-x86_64-unknown-linux-gnu.tar.gz` |
| macOS Apple Silicon | `fan-<版本>-aarch64-apple-darwin.tar.gz` |
| macOS Intel | `fan-<版本>-x86_64-apple-darwin.tar.gz` |
| Windows x86_64 | `fan-<版本>-x86_64-pc-windows-msvc.zip` |

每个安装包都包含「可执行文件 + 标准库」，解压即用：

```
fan-0.2.0-x86_64-unknown-linux-gnu/
├── fan            # 可执行文件（Windows 下为 fan.exe）
└── sdk/           # 标准库，内含 库/ 与 测试/ 两个子目录
    ├── 库/        # 库模块（导入时写 库/模块名）
    └── 测试/      # 标准库自带测试
```

把 `fan` 放到系统 `PATH` 中即可使用。

macOS 的二进制未签名，首次运行若被 Gatekeeper 拦下，执行
`xattr -d com.apple.quarantine fan` 即可。

### 从源码构建

需要先安装 [Rust](https://www.rust-lang.org/tools/install)。

```bash
git clone git@github.com:china-lang-fan/fan-rust.git
cd fan-rust
cargo build --release
```

编译产物在 `target/release/fan`。从源码构建时解释器不带标准库，需设置环境变量 `FAN_SDK` 指向 [fan-sdk](https://github.com/china-lang-fan/fan-sdk) 目录，或把 `fan-sdk` 放在本仓库的同级目录。

## 运行脚本

编写一个 `hello.凡`：

```凡
打印 "你好，凡"
```

运行：

```bash
fan 运行 hello.凡
```

输出：

```text
你好，凡
```

## 执行方式

当前 `fan run` 对源码采用**树遍历**方式解释执行，这是唯一可用的执行路径。

凡语言的完整命令体系由参考实现（`fan-rust`）提供：

| 命令 | 输入 → 产物 | 执行方式 | 状态 |
| --- | --- | --- | --- |
| `fan run` | 源码 `.凡` | 树遍历解释执行 | 已可用 |
| `fan run` | 字节码 `.凡码` | 虚拟机（VM）执行 | 规划中 |
| `fan build` | 源码 → 字节码 `.凡码` | 编译 | 规划中 |
| `fan build` | 源码 → 可执行文件（exe） | 编译 | 规划中 |
| `fan package` | 程序与依赖 → 可分发包 | 打包 | 规划中 |

其他宿主实现（如 `fan-go`）只做解释执行，仅实现树遍历方式，后续视情况再考虑引入 VM。

## 交互式模式（REPL）

```bash
fan 交互
```

进入后可以逐行输入，表达式的值会直接回显：

```text
凡语言 REPL，输入 :退出 结束
1 加 2
3
变量 名字 = "小明"
打印 名字
小明
```

输入 `:退出`、`:quit` 或 `:q` 退出 REPL。

## 其他命令

```bash
fan 测试 目录或文件   # 执行 *_测试.凡 中的测试函数
fan 检查 目录或文件   # 不运行，静态检查未定义名、坏导入、语法错误等
fan 版本              # 输出版本
fan 帮助              # 输出用法
```

## 静态检查

`fan 检查`（别名 `fan check`）在**不运行程序**的前提下，扫描目标下的全部
`.凡`/`.fan` 文件，复用与编辑器语言服务器（LSP）同一套静态分析，提前发现：

- 语法错误；
- 未定义的名字；
- 找不到的导入模块；
- 复合字面量、模型嵌入歧义、未知标签等问题。

```bash
fan 检查 .            # 检查当前目录整棵工程
fan 检查 某个.凡      # 只检查单个文件
```

诊断分两级：

- **错误（✗）**：确定的问题，命令以非零码退出，适合接在 CI 流水线里当门禁；
- **警告（·）**：静态分析拿不准的情形（如跨模块的分段函数名、运行时动态注册的标签），
  只提示、不影响退出码。

模块导入路径相对工程根解析（与运行时 `FAN_SDK` 的模块搜索语义一致），因此对整个
SDK 工程跑 `fan 检查` 也不会误报「找不到模块」。

## 编辑器支持

官方正在开发编辑器插件：

- JetBrains 插件：<https://github.com/china-lang-fan/fan-jetbrains-plugin>
- VS Code 插件：<https://github.com/china-lang-fan/fan-code-plugin>

凡语言的源文件使用 `.凡` 后缀。

接下来了解凡语言的[语法风格](./style)。
