# 📸 个人作品集网站 - 照片上传指南

## ✨ 新功能说明

- ✅ **点击作品查看大图**：点击任意作品卡片可全屏查看
- ✅ **支持多张图片**：每个作品可以添加多张图片
- ✅ **支持PNG格式**：可以使用 .png、.jpg、.jpeg、.webp 格式
- ✅ **支持视频**：可以添加 .mp4 格式的视频文件
- ✅ **左右切换**：使用箭头按钮或键盘方向键切换图片/视频
- ✅ **ESC关闭**：按 ESC 键或点击背景关闭预览

---

## 📁 文件夹结构

```
hudong/
├── portfolio.html      # 首页（关于我）
├── works.html          # 作品集页面
├── contact.html        # 联系方式页面
└── images/             # 照片文件夹 ⭐
    ├── avatar.jpg      # 您的头像照片
    │
    ├── work1-1.png     # 作品1第1张图
    ├── work1-2.jpg     # 作品1第2张图
    │
    ├── work2-1.png     # 作品2第1张图
    ├── work2-2.jpg     # 作品2第2张图
    ├── work2-video.mp4 # 作品2视频
    │
    ├── work3-1.png     # 作品3第1张图
    ├── work3-2.jpg     # 作品3第2张图
    │
    ├── work4-1.png     # 作品4第1张图
    ├── work4-2.jpg     # 作品4第2张图
    ├── work4-3.jpg     # 作品4第3张图
    │
    ├── work5-1.png     # 作品5第1张图
    ├── work5-video.mp4 # 作品5视频
    │
    ├── work6-1.png     # 作品6第1张图
    ├── work6-2.jpg     # 作品6第2张图
    ├── work6-3.jpg     # 作品6第3张图
    │
    ├── work7-1.png     # 作品7第1张图
    ├── work7-2.jpg     # 作品7第2张图
    │
    ├── work8-1.png     # 作品8第1张图
    ├── work8-video.mp4 # 作品8视频
    ├── work8-2.jpg     # 作品8第2张图
    │
    ├── work9-1.png     # 作品9第1张图
    ├── work9-2.jpg     # 作品9第2张图
    │
    ├── work10-1.png    # 作品10第1张图
    ├── work10-2.jpg    # 作品10第2张图
    ├── work10-video.mp4 # 作品10视频
    │
    ├── work11-video.mp4 # 作品11视频
    ├── work11-1.png    # 作品11第1张图
    └── work11-2.jpg    # 作品11第2张图
```

---

## ✅ 操作步骤

### 第一步：准备照片和视频

#### 1. 头像照片
- **文件名**：`avatar.jpg`
- **建议尺寸**：400x400 像素（正方形）
- **格式**：JPG 或 PNG
- **说明**：您的个人头像照片

#### 2. 作品集媒体文件

**命名规则：**
- 图片：`workX-N.png` 或 `workX-N.jpg`（X=作品编号，N=第几张图）
- 视频：`workX-video.mp4`

**每个作品的媒体文件示例：**

| 作品 | 缩略图 | 其他图片 | 视频 |
|------|--------|----------|------|
| 作品1 | work1-1.png | work1-2.jpg | - |
| 作品2 | work2-1.png | work2-2.jpg | work2-video.mp4 |
| 作品3 | work3-1.png | work3-2.jpg | - |
| 作品4 | work4-1.png | work4-2.jpg, work4-3.jpg | - |
| 作品5 | work5-1.png | - | work5-video.mp4 |
| 作品6 | work6-1.png | work6-2.jpg, work6-3.jpg | - |
| 作品7 | work7-1.png | work7-2.jpg | - |
| 作品8 | work8-1.png | work8-2.jpg | work8-video.mp4 |
| 作品9 | work9-1.png | work9-2.jpg | - |
| 作品10 | work10-1.png | work10-2.jpg | work10-video.mp4 |
| 作品11 | work11-1.png | work11-2.jpg | work11-video.mp4 |

**重要提示：**
- `-1` 的文件会作为缩略图显示在作品列表中
- 每个作品至少需要1张图片作为缩略图
- 可以添加任意数量的额外图片和视频
- 支持格式：.png、.jpg、.jpeg、.webp、.mp4

---

### 第二步：放置媒体文件

将所有照片和视频文件放入 `images` 文件夹中：

```
d:\Homework\hudong\images\
```

**具体操作：**
1. 打开文件夹 `d:\Homework\hudong\images\`
2. 将准备好的所有媒体文件复制到这个文件夹
3. 确保文件名正确（见上面的命名规则）
4. 每个作品至少要有1张缩略图（workX-1.png 或 workX-1.jpg）

---

### 第三步：查看效果

1. 用浏览器打开 `works.html`
2. **点击任意作品卡片**，会弹出全屏预览
3. 使用左右箭头或键盘方向键切换图片/视频
4. 按 ESC 键或点击右上角 × 关闭预览
5. 刷新页面即可看到更新后的缩略图

---

## 🔧 如果照片名称不同

如果您的照片文件名与上述不同，需要修改 HTML 代码中的路径。

### 修改头像照片路径

在 `portfolio.html` 中找到：
```html
<img src="images/avatar.jpg" alt="邱佳慧">
```

将 `avatar.jpg` 改为您实际的文件名，例如：
```html
<img src="images/我的头像.png" alt="邱佳慧">
```

### 修改作品集照片路径

在 `works.html` 中，找到每个作品的图片位置，例如：

**作品1：**
```html
<div class="portfolio-image">
    <img src="images/work1.jpg" alt="交互装置艺术">
</div>
```

将 `work1.jpg` 改为您实际的文件名。

---

## 💡 媒体文件优化建议

### 1. 图片尺寸
- **缩略图**（workX-1）：800x600 像素
- **详细图**：1200x900 像素或更大
- 不要使用过大的图片（如 4000x3000），会影响加载速度

### 2. 视频规格
- **格式**：MP4 (H.264编码)
- **分辨率**：1920x1080 (1080p) 或 1280x720 (720p)
- **文件大小**：建议 < 10MB 每个视频
- **时长**：建议 10-60 秒

### 3. 文件压缩
使用在线工具压缩图片和视频，减小文件大小：
- 图片压缩: https://tinypng.com/ 或 https://squoosh.app/
- 视频压缩: https://handbrake.fr/ (免费软件)

**目标文件大小：**
- 缩略图：< 300KB
- 详细图：< 800KB
- 视频：< 10MB

### 4. 文件格式选择
- **JPG**：适合照片，文件较小（推荐）
- **PNG**：适合有透明背景或需要高质量的图片
- **WebP**：现代格式，压缩率最高（推荐）
- **MP4**：视频格式（H.264编码）

---

## 🎨 照片命名建议

为了便于管理，建议使用有意义的文件名：

```
images/
├── avatar.jpg                  # 头像
├── work-installation.jpg       # 交互装置艺术
├── work-branding.jpg           # 品牌视觉设计
├── work-app-ui.jpg             # 移动应用UI设计
├── work-data-viz.jpg           # 数据可视化
├── work-vr-experience.jpg      # 虚拟现实体验
└── work-motion.jpg             # 动态图形设计
```

如果使用这些名称，记得在 HTML 代码中同步修改路径。

---

## ❓ 常见问题

### Q1: 媒体文件不显示怎么办？
**检查清单：**
1. ✅ 文件是否在 `images` 文件夹中？
2. ✅ 文件名是否正确（包括扩展名）？
3. ✅ 每个作品至少有 workX-1.png 或 workX-1.jpg 作为缩略图？
4. ✅ 浏览器是否已刷新（Ctrl+F5 强制刷新）？

### Q2: 如何为作品添加更多图片？
只需在 `images` 文件夹中添加更多文件，例如：
- work1-3.jpg
- work1-4.png
- work1-5.jpg

然后在 `works.html` 的 JavaScript 代码中的 `portfolioData` 对象里添加对应的媒体路径。

### Q3: 可以只放视频不放图片吗？
可以！但至少需要一张图片作为缩略图显示在作品列表中。建议命名：
- workX-1.png (缩略图)
- workX-video.mp4 (视频)

### Q4: 如何修改某个作品的媒体文件？
在 `works.html` 文件中找到 `<script>` 标签内的 `portfolioData` 对象，修改对应作品的 media 数组即可。

例如修改作品1：
```javascript
'work1': {
    title: '计算机应用基础',
    media: [
        { type: 'image', src: 'images/work1-1.png' },
        { type: 'image', src: 'images/work1-2.jpg' },
        { type: 'image', src: 'images/work1-3.png' }  // 添加新图片
    ]
}
```

### Q5: 可以使用网络图片或视频吗？
可以！将 `src` 属性改为完整的 URL，例如：
```javascript
{ type: 'image', src: 'https://example.com/photo.jpg' }
{ type: 'video', src: 'https://example.com/video.mp4' }
```

---

## 📞 需要帮助？

如果在上传照片过程中遇到问题，可以随时询问！

祝您作品集展示顺利！🎉
