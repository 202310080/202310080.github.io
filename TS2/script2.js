const buttons = document.querySelectorAll('.dbutton');
const box = document.getElementById('day-box')

let isAnimating = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (isAnimating) return;
        isAnimating = true;

        const color = button.getAttribute('day-color');

        if (box.classList.contains('show')) {
            box.style.transform = 'translateY(-100%)';
            box.style.opacity = '0';

            setTimeout(() => {
                box.style.backgroundColor = color;
                box.style.transform = 'translateY(100%)';
                box.style.opacity = '0';

                setTimeout(() => {
                    box.classList.add('show');
                    box.style.transform = 'translateY(-50%)';
                    box.style.opacity = '1';
                    isAnimating = false;
                }, 100);
            }, 600);
        } else {
            box.style.backgroundColor = color;
            box.classList.add('show');
            box.style.transform = 'translateY(-50%)';
            box.style.opacity = '1';
            isAnimating = false;
        }
    });
});