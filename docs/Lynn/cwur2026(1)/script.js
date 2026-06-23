// ========================================
// 语言切换功能（基于 data-i18n-key）
// ========================================
class LanguageSwitcher {
    constructor() {
        this.currentLang = 'zh'; // 默认语言为中文
        this.langToggle = document.getElementById('langToggle');
        
        // 翻译字典
        this.translations = {
            zh: {
                nav_home: '首页',
                nav_about: '简介',
                nav_projects: '项目',
                nav_archive: '过往作品',
                nav_contact: '联系',
                photo_caption: '🐱 温暖的陪伴',
                projects_title: '重点项目',
                archive_title: '过往作品',
                contact_title: '联系方式',
                copyright: '&copy; 2026 Lynn. 保留所有权利。'
            },
            en: {
                nav_home: 'Home',
                nav_about: 'About',
                nav_projects: 'Projects',
                nav_archive: 'Archive',
                nav_contact: 'Contact',
                photo_caption: '🐱 Warm Companion',
                projects_title: 'Featured Project',
                archive_title: 'Archive',
                contact_title: 'Contact',
                copyright: '&copy; 2026 Lynn. All rights reserved.'
            }
        };
        
        this.init();
    }

    init() {
        // 语言切换按钮点击事件
        this.langToggle.addEventListener('click', () => {
            this.toggleLanguage();
        });

        // 从本地存储恢复语言设置
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang && savedLang !== this.currentLang) {
            this.setLanguage(savedLang);
        }
    }

    toggleLanguage() {
        const newLang = this.currentLang === 'zh' ? 'en' : 'zh';
        this.setLanguage(newLang);
    }

    setLanguage(lang) {
        this.currentLang = lang;
        
        // 保存语言偏好到本地存储
        localStorage.setItem('preferredLanguage', lang);
        
        // 更新按钮文字
        this.langToggle.textContent = lang === 'zh' ? 'English' : '中文';
        
        // 更新所有带 data-i18n-key 的元素
        this.updateTranslations();
        
        // 切换中英文内容显示
        this.toggleContentVisibility();
    }

    updateTranslations() {
        const elements = document.querySelectorAll('[data-i18n-key]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n-key');
            if (this.translations[this.currentLang][key]) {
                el.innerHTML = this.translations[this.currentLang][key];
            }
        });
    }

    toggleContentVisibility() {
        const zhElements = document.querySelectorAll('.content-zh');
        const enElements = document.querySelectorAll('.content-en');
        
        if (this.currentLang === 'zh') {
            zhElements.forEach(el => el.style.display = '');
            enElements.forEach(el => el.style.display = 'none');
        } else {
            zhElements.forEach(el => el.style.display = 'none');
            enElements.forEach(el => el.style.display = '');
        }
    }
}

// ========================================
// 滚动淡入动画（Intersection Observer）
// ========================================
class ScrollAnimation {
    constructor() {
        this.elements = document.querySelectorAll('.fade-in');
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, this.observerOptions);

        this.elements.forEach(element => {
            observer.observe(element);
        });
    }
}

// ========================================
// 导航栏平滑滚动
// ========================================
class Navigation {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
        this.init();
    }

    init() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// ========================================
// 作品详情弹窗功能
// ========================================
const projectData = {
    planet: {
        zh: {
            title: '星球系列设计',
            description: '这是一个探索宇宙与人类情感连接的视觉设计项目。通过星球意象的表达，探讨个体在广阔宇宙中的位置感与归属感。作品运用柔和的色彩渐变和抽象的星球形态，营造出温暖而深邃的视觉氛围，引发观者对存在、孤独与连接的思考。',
            tags: ['视觉设计', '概念艺术', '情感表达']
        },
        en: {
            title: 'Planet Series Design',
            description: 'A visual design project exploring the connection between the cosmos and human emotions. Through the imagery of planets, it examines the sense of position and belonging of individuals in the vast universe. The work uses soft color gradients and abstract planetary forms to create a warm yet profound visual atmosphere, evoking thoughts on existence, loneliness, and connection.',
            tags: ['Visual Design', 'Conceptual Art', 'Emotional Expression']
        },
        images: ['images/星球展板终_画板 1.jpg'],
        imageLayout: 'single'
    },
    kite: {
        zh: {
            title: '纸鸢文化传承',
            description: '本项目致力于传统纸鸢文化的现代表达与创新传承。通过重新诠释纸鸢的形态与象征意义，将古老的手工艺与当代设计理念相结合。作品探索了传统与现代、手工与科技之间的对话，展现了文化遗产在当代语境下的新生命力。',
            tags: ['文化设计', '传统创新', '手工艺']
        },
        en: {
            title: 'Kite Cultural Heritage',
            description: 'This project is dedicated to the modern expression and innovative inheritance of traditional kite culture. By reinterpreting the form and symbolism of kites, it combines ancient craftsmanship with contemporary design concepts. The work explores the dialogue between tradition and modernity, handicraft and technology, showcasing the new vitality of cultural heritage in a contemporary context.',
            tags: ['Cultural Design', 'Traditional Innovation', 'Craftsmanship']
        },
        images: ['images/纸鸢展板1.jpg', 'images/纸鸢展板2.jpg'],
        imageLayout: 'multi'
    },
    bamboo: {
        zh: {
            title: '绣竹雕新工艺',
            description: '一个融合刺绣、竹艺与雕刻技法的创新工艺探索项目。通过对传统材料的重新解构与组合，创造出独特的质感与视觉效果。作品关注材料本身的特性与可能性，探索手工艺在当代设计中的应用边界，展现东方美学的现代表达。',
            tags: ['工艺设计', '材料探索', '东方美学']
        },
        en: {
            title: 'Embroidered Bamboo Craft',
            description: 'An innovative craft exploration project that integrates embroidery, bamboo art, and carving techniques. By deconstructing and recombining traditional materials, it creates unique textures and visual effects. The work focuses on the characteristics and possibilities of materials themselves, exploring the application boundaries of craftsmanship in contemporary design, and showcasing the modern expression of Eastern aesthetics.',
            tags: ['Craft Design', 'Material Exploration', 'Eastern Aesthetics']
        },
        images: ['images/绣竹雕新展板.png'],
        imageLayout: 'single'
    },
    opera: {
        zh: {
            title: '戏曲角色视觉化',
            description: '基于传统戏曲文化的视觉设计探索，以"旦"与"生"两个经典角色为创作核心。作品通过现代设计语言重新诠释戏曲人物的神韵与气质，将传统戏曲的美学元素转化为当代视觉表达。项目关注传统文化符号的现代表达，探索戏曲艺术在设计领域的创新应用。',
            tags: ['戏曲文化', '角色设计', '传统创新']
        },
        en: {
            title: 'Opera Character Visualization',
            description: 'A visual design exploration based on traditional Chinese opera culture, focusing on the two classic roles of "Dan" (female) and "Sheng" (male). The work reinterprets the charm and temperament of opera characters through modern design language, transforming traditional opera aesthetic elements into contemporary visual expressions. The project focuses on the modern expression of traditional cultural symbols and explores the innovative application of opera art in the design field.',
            tags: ['Opera Culture', 'Character Design', 'Traditional Innovation']
        },
        images: ['images/旦_画板 1.png', 'images/生_画板 1.png'],
        imageLayout: 'multi'
    },
    memory: {
        zh: {
            title: '记忆展板设计',
            description: '一个关于记忆与时间的视觉叙事项目。通过图像、材质与空间的组合，探索记忆的碎片化特征与情感维度。作品试图捕捉那些转瞬即逝的记忆片段，将其转化为可视化的设计语言，引发观者对自身记忆经验的共鸣与反思。',
            tags: ['视觉叙事', '记忆研究', '情感设计']
        },
        en: {
            title: 'Memory Board Design',
            description: 'A visual narrative project about memory and time. Through the combination of images, materials, and space, it explores the fragmented characteristics and emotional dimensions of memory. The work attempts to capture those fleeting memory fragments and transform them into visual design language, evoking resonance and reflection on personal memory experiences.',
            tags: ['Visual Narrative', 'Memory Research', 'Emotional Design']
        },
        images: ['images/记忆展板_画板 1_画板 1.jpg'],
        imageLayout: 'single'
    }
};

function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const lang = window.langSwitcher ? window.langSwitcher.currentLang : 'zh';
    const data = projectData[projectId];
    
    if (!data) return;
    
    const content = data[lang];
    
    // 生成图片 HTML
    let imagesHTML = '';
    if (data.imageLayout === 'multi') {
        imagesHTML = `
            <div class="modal-images multi-image">
                ${data.images.map(img => `
                    <div class="modal-image-wrapper">
                        <img src="${img}" alt="${content.title}" loading="lazy">
                    </div>
                `).join('')}
            </div>
        `;
    } else {
        imagesHTML = `
            <div class="modal-images single-image">
                <div class="modal-image-wrapper">
                    <img src="${data.images[0]}" alt="${content.title}" loading="lazy">
                </div>
            </div>
        `;
    }
    
    // 生成标签 HTML
    const tagsHTML = `
        <div class="modal-tags">
            ${content.tags.map(tag => `<span class="modal-tag">${tag}</span>`).join('')}
        </div>
    `;
    
    // 组装完整内容
    modalBody.innerHTML = `
        <h3 class="modal-title">${content.title}</h3>
        ${imagesHTML}
        <p class="modal-description">${content.description}</p>
        ${tagsHTML}
    `;
    
    // 显示弹窗
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// 点击弹窗外部关闭
document.addEventListener('click', (e) => {
    const modal = document.getElementById('projectModal');
    if (e.target === modal) {
        closeProjectModal();
    }
});

// ESC 键关闭弹窗
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.getElementById('projectModal');
        if (modal && modal.classList.contains('active')) {
            closeProjectModal();
        }
    }
});

// ========================================
// 页面加载初始化
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // 初始化语言切换器并暴露到全局
    window.langSwitcher = new LanguageSwitcher();

    // 初始化滚动动画
    new ScrollAnimation();

    // 初始化导航功能
    new Navigation();
});
