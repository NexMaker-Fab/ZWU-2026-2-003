/**
 * Fab Academy Submission - 主脚本文件
 * 处理导航、页面切换和交互功能
 */

// DOM 元素
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link, .dropdown-menu a, .nav-logo, .start-btn, [data-page]');
const pages = document.querySelectorAll('.page');
const uploadAreas = document.querySelectorAll('.upload-area-modern');
const featureCards = document.querySelectorAll('.feature-card-modern');

// 当前页面
let currentPage = 'home';

/**
 * 初始化应用
 */
function init() {
    setupNavigation();
    setupUploadAreas();
    setupMobileMenu();
    setupFeatureCards();
    setupCheckboxes();
    setupMoodSelector();
    setupCalendar();
    setupLikeButtons();
    updateProgressBars();
    renderCalendarDays();
}

/**
 * 设置导航功能
 */
function setupNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const page = link.getAttribute('data-page');
            if (page) {
                navigateTo(page);
            }
            
            // 移动端关闭菜单
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
            }
        });
    });
}

/**
 * 设置功能卡片点击
 */
function setupFeatureCards() {
    featureCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const page = card.getAttribute('data-page');
            if (page) {
                navigateTo(page);
            }
        });
    });
}

/**
 * 页面导航
 */
function navigateTo(pageName) {
    // 更新当前页面
    currentPage = pageName;
    
    // 隐藏所有页面
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // 显示目标页面
    const targetPage = document.getElementById(pageName);
    if (targetPage) {
        targetPage.classList.add('active');
        
        // 滚动到顶部
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // 更新导航激活状态
    updateNavActiveState(pageName);
    
    // 更新浏览器历史
    updateBrowserHistory(pageName);
}

/**
 * 更新导航激活状态
 */
function updateNavActiveState(pageName) {
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        if (link.getAttribute('data-page') === pageName) {
            link.classList.add('active');
        }
    });
}

/**
 * 更新浏览器历史
 */
function updateBrowserHistory(pageName) {
    const newUrl = pageName === 'home' ? '#' : `#${pageName}`;
    history.pushState({ page: pageName }, '', newUrl);
}

/**
 * 设置移动端菜单
 */
function setupMobileMenu() {
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

/**
 * 设置上传区域
 */
function setupUploadAreas() {
    uploadAreas.forEach(area => {
        const fileInput = area.querySelector('.file-input');
        
        // 点击上传
        area.addEventListener('click', () => {
            fileInput.click();
        });
        
        // 拖拽上传
        area.addEventListener('dragover', (e) => {
            e.preventDefault();
            area.style.borderColor = 'var(--primary)';
            area.style.background = 'rgba(102, 126, 234, 0.05)';
        });
        
        area.addEventListener('dragleave', () => {
            area.style.borderColor = '';
            area.style.background = '';
        });
        
        area.addEventListener('drop', (e) => {
            e.preventDefault();
            area.style.borderColor = '';
            area.style.background = '';
            
            const files = e.dataTransfer.files;
            handleFiles(files, area);
        });
        
        // 文件选择
        fileInput.addEventListener('change', (e) => {
            const files = e.target.files;
            handleFiles(files, area);
        });
    });
}

/**
 * 处理文件上传
 */
function handleFiles(files, area) {
    if (files.length === 0) return;
    
    const fileList = Array.from(files).map(file => ({
        name: file.name,
        size: formatFileSize(file.size),
        type: file.type
    }));
    
    // 显示上传反馈
    showUploadFeedback(area, fileList);
    
    console.log('准备上传的文件:', fileList);
}

/**
 * 格式化文件大小
 */
function formatFileSize(bytes) {
    if (bytes === 0) return '0 B';
    
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

/**
 * 显示上传反馈
 */
function showUploadFeedback(area, files) {
    let fileListHtml = '<div class="uploaded-files" style="margin-top: 1rem;">';
    files.forEach(file => {
        fileListHtml += `
            <div style="display: flex; align-items: center; gap: 0.5rem; padding: 0.75rem; background: var(--bg-primary); border-radius: 8px; margin-bottom: 0.5rem; border: 1px solid var(--bg-tertiary);">
                <span style="font-size: 1.25rem;">📄</span>
                <div style="flex: 1;">
                    <div style="color: var(--text-primary); font-size: 0.9rem; font-weight: 500;">${file.name}</div>
                    <div style="color: var(--text-light); font-size: 0.75rem;">${file.size}</div>
                </div>
                <span style="color: var(--success); font-size: 1rem;">✓</span>
            </div>
        `;
    });
    fileListHtml += '</div>';
    
    area.insertAdjacentHTML('beforeend', fileListHtml);
    
    // 5 秒后恢复原状
    setTimeout(() => {
        const uploadedDiv = area.querySelector('.uploaded-files');
        if (uploadedDiv) {
            uploadedDiv.remove();
        }
    }, 5000);
}

/**
 * 更新进度条
 */
function updateProgressBars() {
    const progressFills = document.querySelectorAll('.progress-fill-modern');
    
    progressFills.forEach(fill => {
        const targetWidth = fill.style.width;
        fill.style.width = '0%';
        
        setTimeout(() => {
            fill.style.width = targetWidth;
        }, 500);
    });
}

/**
 * 设置复选框功能
 */
function setupCheckboxes() {
    const checkboxes = document.querySelectorAll('.custom-checkbox');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            updateWeekProgress(checkbox.closest('.page'));
        });
    });
}

/**
 * 更新周次进度
 */
function updateWeekProgress(page) {
    const checkboxes = page.querySelectorAll('.custom-checkbox');
    const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
    const totalCount = checkboxes.length;
    const percentage = Math.round((checkedCount / totalCount) * 100);
    
    const progressFill = page.querySelector('.progress-fill-modern');
    const progressValue = page.querySelector('.progress-value');
    const progressText = page.querySelector('.progress-text');
    
    if (progressFill) {
        progressFill.style.width = `${percentage}%`;
    }
    
    if (progressValue) {
        progressValue.textContent = `${percentage}%`;
    }
    
    if (progressText) {
        progressText.textContent = `${checkedCount}/${totalCount} 任务完成`;
    }
}

/**
 * 设置心情选择器
 */
function setupMoodSelector() {
    const moodBtns = document.querySelectorAll('.mood-btn');
    
    moodBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            moodBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

/**
 * 设置打卡提交
 */
const checkinSubmit = document.querySelector('.checkin-submit');
if (checkinSubmit) {
    checkinSubmit.addEventListener('click', () => {
        const input = document.querySelector('.checkin-input');
        if (input && input.value.trim()) {
            addHistoryItem(input.value);
            input.value = '';
            showNotification('打卡成功！🎉');
        } else {
            showNotification('请先输入打卡内容', 'error');
        }
    });
}

/**
 * 添加打卡记录
 */
function addHistoryItem(content) {
    const historyList = document.querySelector('.history-list');
    if (!historyList) return;
    
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString('zh-CN', { month: 'short' });
    const mood = document.querySelector('.mood-btn.active')?.textContent || '😊';
    
    const historyItem = document.createElement('div');
    historyItem.className = 'history-item';
    historyItem.innerHTML = `
        <div class="history-date">
            <span class="day">${day}</span>
            <span class="month">${month}</span>
        </div>
        <div class="history-content">
            <p>${content}</p>
            <span class="history-mood">${mood}</span>
        </div>
    `;
    
    historyList.insertBefore(historyItem, historyList.firstChild);
}

/**
 * 设置留言板
 */
const messageSubmit = document.querySelector('.message-submit');
if (messageSubmit) {
    messageSubmit.addEventListener('click', () => {
        const input = document.querySelector('.message-input');
        const nicknameInput = document.querySelector('.nickname-input');
        
        if (input && input.value.trim()) {
            const nickname = nicknameInput?.value.trim() || '匿名用户';
            addMessageItem(nickname, input.value);
            input.value = '';
            if (nicknameInput) nicknameInput.value = '';
            showNotification('留言发布成功！🎉');
        } else {
            showNotification('请先输入留言内容', 'error');
        }
    });
}

/**
 * 添加留言
 */
function addMessageItem(nickname, content) {
    const messagesList = document.querySelector('.messages-list');
    if (!messagesList) return;
    
    const messageCard = document.createElement('div');
    messageCard.className = 'message-card';
    messageCard.innerHTML = `
        <div class="message-avatar">👤</div>
        <div class="message-content">
            <div class="message-header">
                <div class="message-author">
                    <h4>${nickname}</h4>
                    <span class="message-time">刚刚</span>
                </div>
                <div class="message-actions-btn">
                    <button class="like-btn">
                        <span>👍</span>
                        <span class="like-count">0</span>
                    </button>
                </div>
            </div>
            <p class="message-text">${content}</p>
        </div>
    `;
    
    messagesList.insertBefore(messageCard, messagesList.firstChild);
    
    // 为新留言的点赞按钮添加事件
    const likeBtn = messageCard.querySelector('.like-btn');
    if (likeBtn) {
        setupLikeButton(likeBtn);
    }
}

/**
 * 设置点赞按钮
 */
function setupLikeButtons() {
    const likeBtns = document.querySelectorAll('.like-btn');
    likeBtns.forEach(btn => setupLikeButton(btn));
}

function setupLikeButton(btn) {
    btn.addEventListener('click', () => {
        const countEl = btn.querySelector('.like-count');
        let count = parseInt(countEl.textContent);
        
        if (btn.classList.contains('liked')) {
            count--;
            btn.classList.remove('liked');
        } else {
            count++;
            btn.classList.add('liked');
            btn.style.background = 'rgba(102, 126, 234, 0.1)';
        }
        
        countEl.textContent = count;
    });
}

/**
 * 渲染日历
 */
function renderCalendarDays() {
    const calendarGrid = document.querySelector('.calendar-grid');
    if (!calendarGrid) return;
    
    // 清除旧的日期（保留星期标题）
    const weekdays = calendarGrid.querySelectorAll('.calendar-weekday');
    calendarGrid.innerHTML = '';
    weekdays.forEach(day => calendarGrid.appendChild(day));
    
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // 模拟已打卡的日期
    const checkedDays = [1, 3, 5, 7, 10, 12, 15, 18, 20, 22, 24];
    
    // 添加空白
    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement('div');
        calendarGrid.appendChild(emptyDay);
    }
    
    // 添加日期
    for (let day = 1; day <= daysInMonth; day++) {
        const dayEl = document.createElement('div');
        dayEl.className = 'calendar-day';
        dayEl.textContent = day;
        
        if (checkedDays.includes(day)) {
            dayEl.classList.add('checked');
        }
        
        if (day === today.getDate()) {
            dayEl.style.border = '2px solid var(--primary)';
        }
        
        calendarGrid.appendChild(dayEl);
    }
}

/**
 * 设置日历
 */
function setupCalendar() {
    const prevBtn = document.querySelector('.calendar-nav.prev');
    const nextBtn = document.querySelector('.calendar-nav.next');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            showNotification('月份切换功能开发中...');
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            showNotification('月份切换功能开发中...');
        });
    }
}

/**
 * 显示通知
 */
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'error' ? 'var(--error)' : 'var(--success)'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        box-shadow: var(--shadow-lg);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// 添加动画 CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

/**
 * 处理浏览器后退按钮
 */
window.addEventListener('popstate', (e) => {
    if (e.state && e.state.page) {
        navigateTo(e.state.page);
    } else {
        navigateTo('home');
    }
});

/**
 * 页面加载时根据 URL 哈希导航
 */
window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.slice(1);
    if (hash) {
        navigateTo(hash);
    }
    
    init();
});

// 导出函数供外部使用
window.FabAcademyApp = {
    navigateTo,
    currentPage: () => currentPage
};
