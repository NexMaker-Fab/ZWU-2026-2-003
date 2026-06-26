document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const weekBtns = document.querySelectorAll('.week-btn');
    const checklist = document.querySelectorAll('.checklist-item');
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalClose = document.getElementById('modalClose');
    const goHome = document.getElementById('goHome');

    // 检查清单点击事件
    if (checklist.length > 0) {
        checklist.forEach((item) => {
            item.addEventListener('click', () => {
                item.classList.toggle('completed');
            });
        });
    }

    // 图片模态框功能
    window.openImageModal = function(src) {
        if (imageModal && modalImage) {
            modalImage.src = src;
            imageModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    function closeImageModal() {
        if (imageModal) {
            imageModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    if (modalClose) modalClose.addEventListener('click', closeImageModal);
    if (imageModal) {
        imageModal.addEventListener('click', (event) => {
            if (event.target === imageModal) closeImageModal();
        });
    }
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && imageModal && imageModal.classList.contains('active')) {
            closeImageModal();
        }
    });

    // Logo 返回主页
    if (goHome) {
        goHome.addEventListener('click', () => {
            window.location.href = '../../index.html';
        });
    }

    // 导航栏点击事件
    navItems.forEach((item) => {
        item.addEventListener('click', () => {
            const page = item.dataset.page;
            if (!page || page === 'homework') {
                return;
            }
            if (page === 'project') {
                window.location.href = '../../docs/project/work.html';
                return;
            }
            if (page === 'team') {
                window.location.href = '../team/team.html';
                return;
            }
            if (page === 'home') {
                window.location.href = '../../index.html';
            }
        });
    });

    // Week 按钮点击事件
    weekBtns.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            event.stopPropagation();
            const week = Number.parseInt(btn.dataset.week, 10);
            if (week === 1) {
                window.location.href = '../week1/week1.html';
                return;
            }
            if (week === 2) {
                window.location.href = '../week2/week2.html';
                return;
            }
            if (week === 3) {
                window.location.href = '../week3/week3.html';
                return;
            }
            if (week === 4) {
                window.location.href = '../week4/week4.html';
                return;
            }
            if (week === 5) {
                window.location.href = '../week5/week5.html';
                return;
            }
            if (week === 6) {
                window.location.href = '../week6/week6.html';
                return;
            }
        });
    });
});
