# 编码

基础 SDK 的 `编码.凡` 提供 JSON、Base64、URL Query 和十六进制编解码。

```凡
导入 "编码" 作为 编码模块

变量 文本, 错误值 = 编码模块.jsonString({"name": "凡"})
打印(文本)
```

## JSON

| 函数 | 说明 |
| --- | --- |
| `jsonString(值)` | 编码为 JSON 文本，返回 `文本, 错误` |
| `parseJSON(文本)` | 解析 JSON，返回 `值, 错误` |

支持整数、小数、字符串、布尔、空、数组和字典。JSON 数字解码后会根据是否有小数转换为整数或小数。

## Base64

| 函数 | 说明 |
| --- | --- |
| `base64String(文本)` | Base64 编码 |
| `parseBase64(文本)` | Base64 解码，返回 `文本, 错误` |

## URL Query

| 函数 | 说明 |
| --- | --- |
| `urlQueryString(文本)` | URL Query 转义 |
| `parseURLQuery(文本)` | URL Query 反转义，返回 `文本, 错误` |

## 十六进制

| 函数 | 说明 |
| --- | --- |
| `hexString(文本)` | 十六进制编码 |
| `parseHex(文本)` | 十六进制解码，返回 `文本, 错误` |
