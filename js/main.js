// 智能地球研究院网站交互逻辑

document.addEventListener('DOMContentLoaded', function() {
    // 初始化GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // 数字增长动画
    const statNums = document.querySelectorAll('.stat-num');
    
    statNums.forEach(num => {
        const target = parseInt(num.dataset.target);
        
        gsap.fromTo(num, 
            { innerText: 0 },
            {
                innerText: target,
                duration: 2,
                ease: 'power2.out',
                snap: { innerText: 1 },
                scrollTrigger: {
                    trigger: num,
                    start: 'top 80%',
                    once: true
                }
            }
        );
    });

    // 产品卡片入场动画
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach((card, index) => {
        gsap.fromTo(card,
            { 
                opacity: 0, 
                y: 50 
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: index * 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    once: true
                }
            }
        );
    });

    // 转化漏斗动画
    const funnelLevels = document.querySelectorAll('.funnel-level');
    
    funnelLevels.forEach((level, index) => {
        gsap.fromTo(level,
            { 
                opacity: 0, 
                x: -30 
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.5,
                delay: index * 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: level,
                    start: 'top 85%',
                    once: true
                }
            }
        );
    });

    // 指标卡片动画
    const metricCards = document.querySelectorAll('.metric-card');
    
    metricCards.forEach((card, index) => {
        gsap.fromTo(card,
            { 
                opacity: 0, 
                scale: 0.9 
            },
            {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                delay: index * 0.1,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    once: true
                }
            }
        );
    });

    // 时间轴动画
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        gsap.fromTo(item,
            { 
                opacity: 0, 
                x: -20 
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.5,
                delay: index * 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                    once: true
                }
            }
        );
    });

    // 创新卡片动画
    const innoCards = document.querySelectorAll('.inno-card');
    
    innoCards.forEach((card, index) => {
        gsap.fromTo(card,
            { 
                opacity: 0, 
                y: 40 
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: index * 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    once: true
                }
            }
        );
    });

    // 新闻卡片动画
    const newsCards = document.querySelectorAll('.news-card');
    
    newsCards.forEach((card, index) => {
        gsap.fromTo(card,
            { 
                opacity: 0, 
                y: 30 
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                delay: index * 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    once: true
                }
            }
        );
    });

    // 项目列表动画
    const projectItems = document.querySelectorAll('.project-item');
    
    projectItems.forEach((item, index) => {
        gsap.fromTo(item,
            { 
                opacity: 0, 
                x: 20 
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.5,
                delay: index * 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                    once: true
                }
            }
        );
    });

    // 专利布局图表
    initPatentChart();

    // 导航滚动效果
    initNavScroll();

    // 平滑滚动
    initSmoothScroll();

    // 项目标记交互
    initProjectMarkers();
});

// 专利布局图表
function initPatentChart() {
    const ctx = document.getElementById('patentChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['已授权', '实质审查', '受理中', '准备申请'],
            datasets: [{
                data: [30, 15, 8, 12],
                backgroundColor: [
                    '#00d4ff',
                    '#7b61ff',
                    'rgba(0, 212, 255, 0.5)',
                    'rgba(123, 97, 255, 0.3)'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: 'rgba(255, 255, 255, 0.7)',
                        font: { size: 11 },
                        padding: 15,
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                }
            },
            cutout: '65%'
        }
    });
}

// 导航滚动效果
function initNavScroll() {
    const nav = document.querySelector('.nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            nav.style.background = 'rgba(10, 14, 23, 0.95)';
            nav.style.backdropFilter = 'blur(20px)';
        } else {
            nav.style.background = 'rgba(10, 14, 23, 0.8)';
        }

        lastScroll = currentScroll;
    }, { passive: true });
}

// 平滑滚动
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 项目标记交互
function initProjectMarkers() {
    const markers = document.querySelectorAll('.project-marker');
    const projectItems = document.querySelectorAll('.project-item');

    markers.forEach(marker => {
        marker.addEventListener('mouseenter', () => {
            const city = marker.dataset.city;
            
            // 高亮对应的项目
            projectItems.forEach(item => {
                if (item.textContent.includes(city)) {
                    item.style.borderColor = '#00d4ff';
                    item.style.transform = 'translateX(8px)';
                }
            });
        });

        marker.addEventListener('mouseleave', () => {
            projectItems.forEach(item => {
                item.style.borderColor = '';
                item.style.transform = '';
            });
        });
    });

    // 反向：从项目列表高亮地图标记
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const text = item.textContent;
            markers.forEach(marker => {
                const city = marker.dataset.city;
                if (text.includes(city)) {
                    marker.querySelector('.marker-dot').style.transform = 'scale(1.5)';
                    marker.querySelector('.marker-dot').style.boxShadow = '0 0 0 8px rgba(0, 212, 255, 0.4)';
                }
            });
        });

        item.addEventListener('mouseleave', () => {
            markers.forEach(marker => {
                marker.querySelector('.marker-dot').style.transform = '';
                marker.querySelector('.marker-dot').style.boxShadow = '';
            });
        });
    });
}

// 产品卡片交互
function initProductCards() {
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const product = card.dataset.product;
            showProductDetail(product);
        });
    });
}

// 显示产品详情（可扩展为弹窗或跳转）
function showProductDetail(product) {
    console.log('查看产品详情:', product);
    // 这里可以扩展为打开详情弹窗或跳转详情页
}

// 动态加载更多新闻（可扩展）
function loadMoreNews() {
    // 实现分页加载逻辑
}

// 搜索功能（可扩展）
function initSearch() {
    // 实现站内搜索逻辑
}

// 图表数据更新（支持实时数据接入）
function updateCharts(data) {
    // 支持从API获取实时数据更新图表
}
