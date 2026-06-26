# Fab Academy 作业提交系统

一个现代简约的 Fab Academy 作业提交 Web 工具。

## 🚀 功能特点

- **Home 页面** - 精美的欢迎界面，展示系统特色
- **作业导航** - Week 1-5 的下拉菜单，快速访问每周作业
- **项目展示** - 展示你的创意作品和期末项目
- **团队介绍** - 认识导师和同学们
- **响应式设计** - 完美适配手机、平板和桌面设备
- **拖拽上传** - 支持文件拖拽上传功能
- **进度追踪** - 可视化显示作业完成进度

## 📁 项目结构

```
fab-academy-submission/
├── index.html          # 主 HTML 文件
├── styles/
│   └── main.css       # 样式文件
└── js/
    └── main.js        # JavaScript 脚本
```

## 🎨 设计特色

- **现代明亮模式** - 清新的配色方案
- **简约大方** - 干净的界面，专注于内容
- **流畅动画** - 优雅的过渡效果
- **渐变色彩** - 现代化的视觉体验

## 💻 使用方法

### 方法 1：直接打开
双击 `index.html` 文件即可在浏览器中打开

### 方法 2：使用本地服务器（推荐）

#### 使用 Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### 使用 Node.js
```bash
npx serve
```

然后在浏览器访问 `http://localhost:8000`

## 🎯 使用说明

1. **导航栏**
   - 点击 Logo 或 Home 返回首页
   - "作业"菜单包含 Week 1-5 的快速链接
   - 移动端点击汉堡菜单展开导航

2. **提交作业**
   - 选择对应的周次页面
   - 点击或拖拽文件到上传区域
   - 查看完成进度

3. **添加项目**
   - 在项目页面点击"+ 添加新项目"
   - 填写项目信息并保存

## 🌈 自定义

### 修改颜色主题
编辑 `styles/main.css` 中的 CSS 变量：

```css
:root {
    --primary-color: #4A90E2;    /* 主色调 */
    --secondary-color: #50E3C2;  /* 辅助色 */
    --accent-color: #F5A623;     /* 强调色 */
}
```

### 添加更多周次
在 `index.html` 中复制 week 模板，修改内容即可：

```html
<section id="week6" class="page">
    <div class="page-header">
        <h1>Week 6 - Your Topic</h1>
        <p>描述</p>
    </div>
    <!-- 内容... -->
</section>
```

然后在导航栏添加对应链接。

## 📱 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge
- 移动端浏览器

## 📝 后续开发建议

1. 添加后端 API 支持真实文件上传
2. 集成用户认证系统
3. 添加作业评分和反馈功能
4. 实现团队协作功能
5. 添加导出 PDF 报告功能

---

**Made with ❤️ for Fab Academy**
