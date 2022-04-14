const title = document.querySelectorAll('h2');
const buttons = document.querySelectorAll('.control');

const statusBar = () => {
    let scrollY = window.scrollY;
    buttons.forEach(button => button.classList.remove('active'));
    buttons[0].classList.add('active');
    for (let i = 0; i < title.length; i++) {
        if (scrollY > title[i].offsetTop - 150 && scrollY < title[i + 1].offsetTop) {
            buttons.forEach(button => button.classList.remove('active'));
            buttons[i + 1].classList.add('active');
        }
    }
}

window.addEventListener("scroll", statusBar);