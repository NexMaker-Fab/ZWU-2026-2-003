# Lynn - Concept Designer Portfolio

## 📁 文件结构
```
cwur2026/
├── index.html      # 网页主文件
├── style.css       # 样式文件
├── script.js       # JavaScript 功能文件
├── images/         # 图片文件夹（需创建）
└── README.md       # 本说明文件
```

## 🎨 设计理念

这是一个**设计师级作品集网站**，参考国际设计工作室和个人Portfolio的视觉语言。

### 核心特征
- ✅ 极简主义（Minimalism）
- ✅ 杂志式排版（Editorial Layout）
- ✅ 左对齐结构 + 大留白
- ✅ 温暖中性色调（#FAFAF7 / #1C1C1C / #6E6E6E）
- ✅ 无衬线字体（Inter + Noto Sans SC）
- ✅ 克制、安静的艺术氛围
- ✅ 展览目录式作品展示
- ❌ 无科技感元素
- ❌ 无霓虹或赛博风格
- ❌ 无复杂3D效果

## 🖼️ 如何添加项目图片

### 步骤 1：创建图片文件夹
在项目根目录下创建 `images` 文件夹：
```
cwur2026/
└── images/
    ├── project-01.jpg
    ├── project-02.jpg
    └── your-photo.jpg
```

### 步骤 2：准备图片
- **建议尺寸**：1200x900px (4:3) 或 1600x900px (16:9)
- **格式**：JPG 或 WebP（压缩优化）
- **风格建议**：
  - ✅ 极简摄影风
  - ✅ 黑白或低饱和
  - ✅ 设计草图
  - ✅ 材质细节图
  - ✅ 展示过程图
- **避免使用**：
  - ❌ 花哨插画
  - ❌ 强饱和商业图
  - ❌ 复杂UI截图

### 步骤 3：修改 HTML 代码
打开 `index.html`，找到每个项目的图片部分：

```html
<img src="data:image/svg+xml,..." alt="..." class="work-image">
```

替换为您的实际图片路径：

```html
<img src="images/project-01.jpg" alt="Interactive Sandbox Design" class="work-image">
```

### 个人照片（About 部分）
同样方式替换 About 部分的图片：

```html
<img src="images/your-photo.jpg" alt="Lynn Portrait" class="about-image">
```

**建议**：竖版肖像（3:4 或 2:3），极简风格

## 🌐 语言切换功能

- **默认语言**：英文（EN）
- **切换按钮**：页面右上角 "EN / CN"
- **记忆功能**：自动保存语言偏好
- **切换动画**：自然柔和的淡入淡出

## 📐 页面结构

### 顶部导航栏（固定）
- **左侧**：Lynn（品牌标识）
- **右侧**：Home / About / Skills / Works / Contact + EN/CN
- **特性**：
  - 点击平滑滚动到对应区域
  - 当前栏目轻微高亮
  - Hover 有细微下划线动画
  - 移动端汉堡菜单

### SECTION 1 — HOME
- 大字号姓名标题（5rem）
- 职业定位
- 一句话介绍
- 加载时淡入 + 轻微上浮动画

### SECTION 2 — ABOUT
- 左对齐排版
- 左侧文字 + 右侧图片
- 充足留白
- 杂志式布局

### SECTION 3 — SKILLS
- 两组技能列表（Design Skills + Tools）
- 标签式展示（无进度条）
- 干净、排版感强
- Hover 轻微位移

### SECTION 4 — WORKS（核心）
- 展览目录式纵向布局
- 每个项目包含：
  - 大尺寸封面图片（Hover 放大 1.03）
  - 项目编号（01, 02, 03...）
  - 中英文标题
  - Role（职责）
  - Year（年份）
  - Category（类别）
  - 简短描述
- 项目之间明显间距
- 三个预留位置（可扩展）

### SECTION 5 — CONTACT
- 简洁联系信息
- Email 链接
- 可选社交媒体链接（Instagram / Behance / Portfolio）

## 🔧 自定义修改指南

### 添加新项目

在 `index.html` 的 WORKS 部分，复制现有项目结构：

```html
<article class="work-item fade-in">
    <div class="work-image-wrapper">
        <img src="images/your-project.jpg" alt="Project Name" class="work-image">
    </div>
    
    <div class="work-info">
        <div class="work-header">
            <span class="work-number">04</span>
            
            <div class="work-titles">
                <h3 class="work-title-en" data-lang="en">English Title</h3>
                <h3 class="work-title-zh zh" data-lang="zh" style="display: none;">中文标题</h3>
            </div>
        </div>
        
        <div class="work-meta">
            <div class="meta-row">
                <span class="meta-label" data-lang="en">Role:</span>
                <span class="meta-label zh" data-lang="zh" style="display: none;">职责：</span>
                <span class="meta-value" data-lang="en">Your Role</span>
                <span class="meta-value zh" data-lang="zh" style="display: none;">您的职责</span>
            </div>
            
            <div class="meta-row">
                <span class="meta-label" data-lang="en">Year:</span>
                <span class="meta-label zh" data-lang="zh" style="display: none;">年份：</span>
                <span class="meta-value">202X</span>
            </div>
            
            <div class="meta-row">
                <span class="meta-label" data-lang="en">Category:</span>
                <span class="meta-label zh" data-lang="zh" style="display: none;">类别：</span>
                <span class="meta-value" data-lang="en">Category</span>
                <span class="meta-value zh" data-lang="zh" style="display: none;">类别</span>
            </div>
        </div>
        
        <div class="work-description">
            <p data-lang="en">Description in English.</p>
            <p class="zh" data-lang="zh" style="display: none;">中文简介。</p>
        </div>
    </div>
</article>
```

### 修改个人信息

在 ABOUT 和 CONTACT 部分修改您的个人介绍和联系方式。

### 调整颜色

在 `style.css` 的 `:root` 中修改颜色变量：

```css
:root {
    --color-bg: #FAFAF7;              /* 背景色 */
    --color-text: #1C1C1C;            /* 主文字 */
    --color-text-secondary: #6E6E6E;  /* 辅助文字 */
    --color-border: #E7E7E2;          /* 分割线 */
    --color-accent: #8B7355;          /* 点缀色（hover） */
}
```

### 修改导航菜单

在 `index.html` 的 `<nav class="main-nav">` 中修改导航项。

## ✨ 交互效果

所有动画都**克制、轻缓、高级**：

- **页面加载**：内容淡入 + 轻微上浮（translateY 4px）
- **滚动动画**：元素进入视口时淡入（Intersection Observer）
- **图片 Hover**：轻微放大（scale 1.02~1.03）
- **导航 Hover**：下划线从左展开动画
- **技能列表 Hover**：轻微右移（padding-left）
- **语言切换**：平滑淡入淡出
- **平滑滚动**：点击导航自动滚动到对应区域
- **当前栏目高亮**：滚动时自动更新

## 📱 响应式设计

网站已针对以下设备优化：

- **桌面电脑**（> 1024px）- 完整双栏布局
- **平板**（768px - 1024px）- 自适应单栏
- **手机**（< 768px）- 垂直堆叠 + 汉堡菜单
- **小屏手机**（< 480px）- 进一步优化间距

## 🚀 如何打开网站

1. **直接双击**：双击 `index.html` 文件
2. **右键打开**：右键 → 打开方式 → 选择浏览器
3. **拖拽打开**：将文件拖到浏览器窗口

## 💡 使用建议

### 浏览器推荐
- Chrome / Edge / Firefox / Safari（最新版本）

### 图片优化
- 使用 TinyPNG 或 Squoosh 压缩图片
- JPG 质量建议 80-85%
- WebP 格式可减小 30% 体积

### 保持一致性
- 所有项目图片建议使用相同比例（4:3 或 16:9）
- 保持统一的视觉风格（低饱和、极简）
- 项目名称和描述保持简洁

### 定期更新
- 随着新作品完成，持续更新 WORKS 部分
- 删除或归档旧项目
- 保持作品集精简（建议 5-8 个精选项目）

### SEO 优化（如需上线）
- 添加 `<meta name="description">`
- 添加 `<meta name="keywords">`
- 为所有图片添加有意义的 `alt` 属性
- 考虑添加 Open Graph 标签

## 📝 代码特点

- ✅ 语义化 HTML5 结构（`<article>`, `<section>`, `<header>`, `<footer>`）
- ✅ CSS 变量系统，方便主题定制
- ✅ 模块化 JavaScript 类设计（LanguageSwitcher, ScrollAnimation, Navigation）
- ✅ 完整的注释说明（包括图片添加指南）
- ✅ 响应式断点合理设置（1024px / 768px / 480px）
- ✅ 性能优化（被动事件监听器、requestAnimationFrame）
- ✅ Intersection Observer API 实现滚动动画
- ✅ LocalStorage 保存语言偏好

## 🎯 设计哲学

> **Less is More.**
> 
> 让作品本身说话，网站只是安静的展示空间。

---

**祝您使用愉快！** 如有问题或需要进一步定制，请随时联系。
