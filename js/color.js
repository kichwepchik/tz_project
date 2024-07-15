document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.custom-swiper-button');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            const svg = button.querySelector('svg path');
            svg.style.stroke = '#E1D4C9FF';
        });

        button.addEventListener('mouseleave', () => {
            const svg = button.querySelector('svg path');
            svg.style.stroke = '#403F3D';
        });
    });
});
