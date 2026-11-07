# 迭代计划

本页说明凡语言各仓库的分工关系，以及后续的演进方向。

## 一、仓库分工关系

凡语言由多个仓库协同构成，每个仓库承担明确且单一的职责：

| 仓库 | 职责 | 说明 |
| --- | --- | --- |
| [`fan-rust`](https://github.com/china-lang-fan/fan-rust) | 主实现 | 凡语言解释器的主要实现，包含完整的解释组件：词法分析、语法分析、字节码、虚拟机（VM）、语言服务器（LSP）等。未来若凡语言演进为编译型语言，编译器同样使用 Rust 实现。 |
| [`fan-go`](https://github.com/china-lang-fan/fan-go) 及未来的 `fan-*` | 多语言宿主 | 供其他编程语言解释执行或内嵌凡语言脚本的实现。语法与语义以 `fan-rust` 为准，各宿主实现保持对齐。 |
| [`fan-sdk`](https://github.com/china-lang-fan/fan-sdk) | 开发库 | 凡语言的共享标准库，包含全部基础类库与扩展类库；后续会通过目录进行分类组织。各宿主实现共用同一份 SDK。 |
| `fan-*-plugin` | 编辑器插件 | 凡语言在各类 IDE / 编辑器中的插件，例如 VS Code 插件 `fan-code-plugin`、JetBrains 插件 `fan-jetbrains-plugin`、Zed 插件 `fan-zed-plugin`。 |
| [`china-lang-fan.github.io`](https://github.com/china-lang-fan/china-lang-fan.github.io) | 官方文档 | 凡语言官方说明文档站点，包含使用指南、标准库文档、示例与语法参考。 |

### 协作约定

1. **以 `fan-rust` 为语义基准**：新的语法特性与运行时行为优先在 `fan-rust` 落地，`fan-go` 等宿主实现随后跟进对齐。
2. **共享 SDK 是双端契约**：所有宿主实现加载同一份 `fan-sdk`。SDK 中的原生绑定通过 `@内建("模块.函数名")` 的命名空间形式声明（例如 `regex.regexMatch`、`json.jsonEncode`、`http.httpRequest`），各宿主按此名称注册原生函数。
3. **插件与文档独立演进**：编辑器插件只负责编辑体验（高亮、补全、LSP 接入等），不内置语言实现；文档随特性迭代同步更新。

### 待建设方向

- **模块管理工具**：凡语言的包管理与模块分发命令行工具。
- **模块服务**：模块的托管、检索与版本服务。

以上两项会在后续迭代中逐一建立，届时本页将补充对应的仓库与设计说明。
