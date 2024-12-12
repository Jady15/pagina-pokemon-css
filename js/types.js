document.addEventListener('DOMContentLoaded', function() {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', function() {
            const panel = this.nextElementSibling;
            const isActive = this.classList.toggle('active');

            if (isActive) {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            } else {
                panel.style.maxHeight = '0';
            }
        });
    });
});