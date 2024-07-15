document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-bar');
    const enableSwipe = window.innerWidth <= 768; // 768px - это граница между tablet и desktop

    const swiper = new Swiper('.swiper-container', {
        loop: true,
        speed: 600,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        allowTouchMove: enableSwipe, // Включаем/выключаем свайп
        on: {
            slideChangeTransitionEnd: function () {
                const activeIndex = swiper.realIndex;
                progressBars.forEach((bar, index) => {
                    if (index === activeIndex) {
                        bar.classList.add('active');
                    } else {
                        bar.classList.remove('active');
                    }
                });
            },
        },
    });

    swiper.el.addEventListener('mouseenter', () => swiper.autoplay.stop());
    swiper.el.addEventListener('mouseleave', () => swiper.autoplay.start());
});
