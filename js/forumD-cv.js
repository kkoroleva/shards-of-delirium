console.log('meow');
const header = document.querySelector('.main-header');
const menuButton = header.querySelector('.menu-hamburger');
const menu = header.querySelector('.nav');

if (header.offsetWidth < 431) {
    menuButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        if (menu.classList.contains('nav--close')) {
            menu.classList.remove('nav--close');
        } else {
            menu.classList.add('nav--close');
        }
    });
}

const main = document.querySelector('.main');
const welcomeSwitcher = main.querySelector('.welcome__switcher');
const welcomeSwitcherThumb = main.querySelector('.welcome__switcher-thumb');
const welcomeAvatarReal = main.querySelector('.avatar--fake');
const welcomeAvatarFake = main.querySelector('.avatar--true');
const welcomeSpan = main.querySelectorAll('.welcome__switcher-span');


welcomeSwitcher.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (welcomeAvatarReal.classList.contains('visually-hidden')) {
        welcomeAvatarReal.classList.remove('visually-hidden');
        welcomeAvatarFake.classList.add('visually-hidden');
        welcomeSwitcherThumb.classList.add('welcome__switcher-thumb--fake')
        welcomeSwitcherThumb.classList.remove('welcome__switcher-thumb--real');
        welcomeSpan[0].classList.add('welcome__switcher-span--active');
        welcomeSpan[1].classList.remove('welcome__switcher-span--active');
    } else {
        welcomeAvatarFake.classList.remove('visually-hidden');
        welcomeAvatarReal.classList.add('visually-hidden');
        welcomeSwitcherThumb.classList.remove('welcome__switcher-thumb--fake');
        welcomeSwitcherThumb.classList.add('welcome__switcher-thumb--real');
        welcomeSpan[0].classList.remove('welcome__switcher-span--active');
        welcomeSpan[1].classList.add('welcome__switcher-span--active');
    }
});

/*readmore*/

const portfolioList = main.querySelector('.porfolio__list');
const portfolioProjects = main.querySelectorAll('.project');
const seeMore = main.querySelector('.portfolio__readmore');

while (portfolioList.firstChild) {
    portfolioList.removeChild(portfolioList.firstChild);
}

for (let i = 0; i < 4; i++) {
    portfolioList.appendChild(portfolioProjects[i]);
}

seeMore.addEventListener('click', () => {
    for (let i = 4; i < portfolioProjects.length; i++) {
        if (portfolioProjects) {
            portfolioList.appendChild(portfolioProjects[i]);
        }
    }
    seeMore.classList.add('visually-hidden');
});

console.log(portfolioProjects);