# 德伦堡朋友圈文案生成器

给门店老板用的轻量网页工具：
- 选择“目标 + 风格 + 产品”，一键生成朋友圈文案
- 支持“不知道发什么，一键生成”
- 自动提示产品建议零售价（不展示进货价）
- 生成主文案、2条备选文案、3条配图建议
- 支持一键复制主文案或全部结果

## 本地使用

直接双击 `index.html` 即可打开。

## 发给别人使用（推荐）

使用 Vercel 部署成公网链接：

1. 把本目录代码推到 Git 仓库
2. 登录 Vercel，点击 `Add New Project`
3. 选择仓库并导入
4. Framework 选择 `Other`，Build Command 留空
5. 点击 `Deploy`
6. 部署完成后，把 Vercel 链接发给门店即可直接使用

## 文件结构

```text
delunbao-moments-generator/
├─ assets/
│  ├─ delunbao-logo.svg
│  └─ delunbao-logo.png
├─ index.html
├─ styles.css
├─ app.js
├─ vercel.json
└─ README.md
```
