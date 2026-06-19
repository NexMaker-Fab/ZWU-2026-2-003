# 团队介绍页面

## 📁 文件位置
`docs/team/team.html`

## 🎯 功能说明
独立的团队介绍页面，展示团队成员信息并提供跳转到个人主页的功能。

## 👥 团队成员

### 有个人主页的成员（可点击跳转）
1. **Yana** - 项目统筹 / 设计表达
   - 跳转路径：`../yana/yana.html`
   
2. **Niki** - 前端开发
   - 跳转路径：`../Niki/Niki.html`
   
3. **Kakei** - 硬件工程
   - 跳转路径：`../kakei/kakei.html`

### 暂无个人主页的成员
4. **Sophia** - UI 设计
5. **Milky** - 项目管理
6. **Lynn** - 文档与表达

## 🔗 导航逻辑

### 从 team.html 页面
- **Home** → `../../index.html`
- **作业** → `../week1/week1.html`
- **项目** → `../project/work.html`
- **团队介绍** → 保持在当前页

### 跳转到 team.html
所有其他页面（index.html, week1-5.html, work.html）点击"团队介绍"都会跳转到：
- `docs/team/team.html`

## 🎨 样式说明
团队介绍页面使用全局样式文件 `style.css`，主要样式类包括：
- `.team-container` - 容器
- `.team-grid` - 网格布局
- `.team-card` - 成员卡片
- `.card-avatar` - 头像区域
- `.member-name` - 成员姓名
- `.member-job` - 职位信息

## ✨ 交互特性
- 卡片悬停效果：向上移动 + 阴影增强
- 头像边框旋转动画
- 可点击成员卡片跳转到个人主页（仅限已有个人主页的成员）
