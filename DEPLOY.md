# 心学日签 - Cloudflare Pages 部署说明

## 项目信息
- 项目名称：心学日签 (XinXueRiQian)
- 项目类型：静态网站
- 技术栈：HTML + CSS + JavaScript

## 文件结构
```
├── index.html          # 主页面
├── style.css           # 样式文件
├── script.js           # 功能脚本
├── test.html           # 测试页面
├── phase1-demo.html    # 演示页面
├── README.md           # 项目说明
└── CLAUDE.md           # 开发文档
```

## 部署方式

### 方式一：GitHub 自动部署（推荐）
1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 进入 Pages > Create a project
3. 选择 "Connect to Git"
4. 选择仓库：`AndyClouder/XinXueRiQian`
5. 配置构建设置：
   - Build command: （留空）
   - Build output directory: /
   - Root directory: /
6. 点击 "Save and Deploy"

### 方式二：直接上传部署
1. 访问 [Cloudflare Pages](https://dash.cloudflare.com/pages)
2. 点击 "Create a project" > "Upload assets"
3. 上传以下文件：
   - index.html
   - style.css
   - script.js
   - test.html
   - phase1-demo.html

## 部署后功能
- 自动 HTTPS 证书
- 全球 CDN 加速
- 自定义域名支持
- 自动部署和版本管理

## 项目特色
- 🎨 专属品牌视觉系统
- 🌈 6种心境专属色彩
- ✨ 墨水扩散和毛笔书写动画
- 🖼️ 海报生成功能
- 📱 完全响应式设计

## 访问地址
部署完成后可通过以下方式访问：
- Cloudflare 提供的 `*.pages.dev` 域名
- 自定义域名（需额外配置）

## 技术支持
如有问题请查看 GitHub 仓库：https://github.com/AndyClouder/XinXueRiQian