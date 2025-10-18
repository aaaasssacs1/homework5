# 作品集示例

这是一个简单的静态作品集示例项目，包含基础的 HTML、CSS 和 JavaScript，用于展示个人项目和联系方式。

文件列表
- `index.html` - 主页面，包含响应式 meta 标签、导航、作品列表、关于和联系表单。
- `styles.css` - 样式表，包含一个小型重置和响应式布局样式。
- `main.js` - JavaScript，包含导航切换和表单提交的基本 DOM 操作示例。
- `images/` - 图片资源文件夹，放置项目截图或占位图。

运行说明
1. 本项目是静态页面，无需构建工具。
2. 可以直接在文件管理器中双击 `index.html` 打开，或使用任何静态文件服务器在本地查看。例如使用 Python 3:

```bash
# 在项目根目录运行：
python3 -m http.server 8000
# 然后在浏览器访问 http://localhost:8000
```

自定义
- 将你的项目图片放到 `images/` 文件夹，并编辑 `index.html` 中的 `<img>` 标签 `src` 属性。
- 调整 `styles.css` 定制配色与布局。

许可证
- 该示例以 MIT 许可证为准（如需添加许可证，请自行创建 `LICENSE` 文件）。
