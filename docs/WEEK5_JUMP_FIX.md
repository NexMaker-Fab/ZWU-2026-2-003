# Week5 跳转功能修复记录

## 📋 问题描述
在 week1-4 页面点击导航栏中的 "Week 5 - IoT架构" 按钮时，无法跳转到 week5.html 页面。

## 🔍 问题原因

### 问题1：HTML 中缺少 Week 5 按钮元素
week1-4 页面的导航下拉菜单（`dropdown-weeks`）中**根本没有 Week 5 按钮的 HTML 元素**，导致用户看不到 Week 5 选项。

### 问题2：JavaScript 中缺少 Week 5 跳转逻辑
即使添加了按钮，`weekBtns` 事件监听器中也缺少了 `week === 5` 的判断逻辑，导致点击 Week 5 按钮时无响应。

## ✅ 修复内容

### 第一阶段：添加 Week 5 按钮元素（HTML）

#### 1. docs/week1/week1.html
**位置**：第 18-24 行（dropdown-weeks 区域）
**修改**：在 dropdown-weeks 中添加 Week 5 按钮
```html
<div class="dropdown-weeks">
    <button class="week-btn active" data-week="1">Week 1 - 网络搭建</button>
    <button class="week-btn" data-week="2">Week 2 - Arduino硬件</button>
    <button class="week-btn" data-week="3">Week 3 - CAD小车</button>
    <button class="week-btn" data-week="4">Week 4 - 3D打印</button>
    <button class="week-btn" data-week="5">Week 5 - IoT架构</button> <!-- 新增 -->
</div>
```

#### 2. docs/week2/week2.html
**位置**：第 168-174 行（dropdown-weeks 区域）
**修改**：在 dropdown-weeks 中添加 Week 5 按钮
```html
<div class="dropdown-weeks">
    <button class="week-btn" data-week="1">Week 1 - 网络搭建</button>
    <button class="week-btn active" data-week="2">Week 2 - Arduino硬件</button>
    <button class="week-btn" data-week="3">Week 3 - CAD小车</button>
    <button class="week-btn" data-week="4">Week 4 - 3D打印</button>
    <button class="week-btn" data-week="5">Week 5 - IoT架构</button> <!-- 新增 -->
</div>
```

#### 3. docs/week3/week3.html
**位置**：第 18-24 行（dropdown-weeks 区域）
**修改**：在 dropdown-weeks 中添加 Week 5 按钮
```html
<div class="dropdown-weeks">
    <button class="week-btn" data-week="1">Week 1 - 网络搭建</button>
    <button class="week-btn" data-week="2">Week 2 - Arduino硬件</button>
    <button class="week-btn active" data-week="3">Week 3 - CAD小车</button>
    <button class="week-btn" data-week="4">Week 4 - 3D打印</button>
    <button class="week-btn" data-week="5">Week 5 - IoT架构</button> <!-- 新增 -->
</div>
```

#### 4. docs/week4/week4.html
**位置**：第 18-24 行（dropdown-weeks 区域）
**修改**：在 dropdown-weeks 中添加 Week 5 按钮
```html
<div class="dropdown-weeks">
    <button class="week-btn" data-week="1">Week 1 - 网络搭建</button>
    <button class="week-btn" data-week="2">Week 2 - Arduino硬件</button>
    <button class="week-btn" data-week="3">Week 3 - CAD小车</button>
    <button class="week-btn active" data-week="4">Week 4 - 3D打印</button>
    <button class="week-btn" data-week="5">Week 5 - IoT架构</button> <!-- 新增 -->
</div>
```

### 第二阶段：添加 Week 5 跳转逻辑（JavaScript）

### 1. docs/week1/week1.html
**位置**：第 349-352 行（weekBtns 逻辑末尾）
**修改**：添加 week === 5 的跳转逻辑
```javascript
if (week === 5) {
    window.location.href = '../week5/week5.html';
    return;
}
```

### 2. docs/week2/week2.html
**位置**：第 551-554 行（weekBtns 逻辑末尾）
**修改**：添加 week === 5 的跳转逻辑
```javascript
if (week === 5) {
    window.location.href = '../week5/week5.html';
    return;
}
```

### 3. docs/week3/week3.html
**位置**：第 355-358 行（weekBtns 逻辑末尾）
**修改**：添加 week === 5 的跳转逻辑
```javascript
if (week === 5) {
    window.location.href = '../week5/week5.html';
    return;
}
```

### 4. docs/week4/week4.html
**位置**：第 327 行（weekBtns 逻辑中）
**修改**：添加 week === 5 的跳转逻辑
```javascript
if (week === 5) return window.location.href = '../week5/week5.html';
```

## 📋 已验证的页面

以下页面的 Week 5 跳转功能均已正常工作：

| 页面 | 文件路径 | Week 5 跳转状态 |
|------|---------|----------------|
| 首页 | index.html | ✅ 正常（已有） |
| Week 1 | docs/week1/week1.html | ✅ 已修复 |
| Week 2 | docs/week2/week2.html | ✅ 已修复 |
| Week 3 | docs/week3/week3.html | ✅ 已修复 |
| Week 4 | docs/week4/week4.html | ✅ 已修复 |
| Week 5 | docs/week5/week5.html | ✅ 正常（当前页） |
| 项目页 | docs/project/work.html | ❌ 无 Week 按钮（设计如此） |
| 团队页 | docs/team/team.html | ❌ 无 Week 按钮（设计如此） |

## 🎯 测试建议

1. 在 week1.html 点击 "Week 5 - IoT架构" → 应跳转到 week5.html
2. 在 week2.html 点击 "Week 5 - IoT架构" → 应跳转到 week5.html
3. 在 week3.html 点击 "Week 5 - IoT架构" → 应跳转到 week5.html
4. 在 week4.html 点击 "Week 5 - IoT架构" → 应跳转到 week5.html
5. 在 week5.html 点击 "Week 5 - IoT架构" → 应保持在当前页或重新加载

## 📝 注意事项

- 所有 week 页面的 Week 按钮跳转路径都使用相对路径 `../weekX/weekX.html`
- Week 5 按钮在 index.html 的导航下拉菜单中已经存在并正常工作
- project 和 team 页面没有 Week 按钮，这是符合设计的
