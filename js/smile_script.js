'use strict'

//Структура ниже - банк со смайликами.
//Если не получится настроить - пиши мне в дискорд (@mr.G#2360)
const iconsWidth = '40px'; //ширина иконок (не самих смайлов) в панели (у всех одинаковая будет)
const iconsHeight = '40px'; //высота иконок (не самих смайлов) в панели (у всех одинаковая будет)
const smilesBank = {
    salamandras: { //название пака (станет его id)
        icon: 'https://forumstatic.ru/files/001a/bd/39/13353.png', //иконка для пака
        //Ссылки на все картинки через enter. 
        //Кавычки обязательно должны оставаться обратными!! (обычно клавиша "Ё" в qwerty)
        imgs: `https://forumstatic.ru/files/001a/bd/39/99521.png 
        https://forumstatic.ru/files/001a/bd/39/48736.png
        https://forumstatic.ru/files/001a/bd/39/82201.png
        https://forumstatic.ru/files/001a/bd/39/82855.png
        https://forumstatic.ru/files/001a/bd/39/13552.png
        https://forumstatic.ru/files/001a/bd/39/70434.png
        https://forumstatic.ru/files/001a/bd/39/13899.png
        https://forumstatic.ru/files/001a/bd/39/52788.png
        https://forumstatic.ru/files/001a/bd/39/30476.png
        https://forumstatic.ru/files/001a/bd/39/13353.png`,
        //Это не заполняй и не удаляй
        imgsContainer: '',
    },
    //Если нужно добавить еще одну пачку, делаешь это по той же форме здесь в переменной smilesBank:
    // название_пака_на_латинице: { 
    //                                  icon: 'ссылка_на_иконку', 
    //                                  imgs: `ссылки_на_все_смайлики_в_столбик_через_пробел`,
    //                                  imgsContainer: '', 
    //                            },
    dragons: {
        icon: 'https://forumstatic.ru/files/001a/bd/39/84855.png',
        imgs: `https://forumstatic.ru/files/001a/bd/39/84855.png
        https://forumstatic.ru/files/001a/bd/39/22755.png
        https://forumstatic.ru/files/001a/bd/39/76761.png
        https://forumstatic.ru/files/001a/bd/39/74426.png
        https://forumstatic.ru/files/001a/bd/39/30297.png
        https://forumstatic.ru/files/001a/bd/39/30477.png
        https://forumstatic.ru/files/001a/bd/39/51911.png`,
        imgsContainer: '',
    },
    potato: {
        icon: 'https://forumstatic.ru/files/001a/bd/39/81712.png',
        imgs: `https://forumstatic.ru/files/001a/bd/39/40530.png
        https://forumstatic.ru/files/001a/bd/39/14442.png
        https://forumstatic.ru/files/001a/bd/39/70661.png
        https://forumstatic.ru/files/001a/bd/39/32443.png
        https://forumstatic.ru/files/001a/bd/39/96504.png
        https://forumstatic.ru/files/001a/bd/39/59896.png`,
        imgsContainer: '',
    },
    honeydrop: {
        icon: 'https://forumstatic.ru/files/001a/bd/39/13013.png',
        imgs: `https://forumstatic.ru/files/001a/bd/39/49980.png
        https://forumstatic.ru/files/001a/bd/39/36596.png
        https://forumstatic.ru/files/001a/bd/39/61693.png
        https://forumstatic.ru/files/001a/bd/39/16382.png
        https://forumstatic.ru/files/001a/bd/39/96723.png`,
        imgsContainer: '',
    },
    ghostkitty: {
        icon: 'https://forumstatic.ru/files/001a/bd/39/88136.png',
        imgs: `https://forumstatic.ru/files/001a/bd/39/33473.png
        https://forumstatic.ru/files/001a/bd/39/22428.png
        https://forumstatic.ru/files/001a/bd/39/77438.png
        https://forumstatic.ru/files/001a/bd/39/98102.png
        https://forumstatic.ru/files/001a/bd/39/11135.png`,
        imgsContainer: '',
    },
};

const post = document.querySelector('#post');
const formButtons = post.querySelector('#form-buttons');

formButtons.insertAdjacentHTML('beforeend', `<div class="smilesWrapper" 
    style = "display: flex; gap: 10px;"></div>`);
const smilesWrapper = formButtons.querySelector('.smilesWrapper');

for (let key in smilesBank) {
    smilesBank[key].imgs = smilesBank[key].imgs.split('\n');
    for (let i = 0; i < smilesBank[key].imgs.length; i++) {
        smilesBank[key].imgsContainer += `<img src="${smilesBank[key].imgs[i]}" alt="${key}Smile${i}" class="form__custom-smile" style = "display: inline-block;">`
    }

    smilesWrapper.insertAdjacentHTML('beforeend', `<div class="smilesContainer" id='${key}' 
    style = "background: url(${smilesBank[key].icon}) center/cover;"></div>`);
}

const smilePacks = post.querySelectorAll('.smilesContainer');
smilePacks.forEach(pack => {
    pack.style.width = iconsWidth;
    pack.style.height = iconsHeight;

    pack.addEventListener('click', () => {
        const opened = formButtons.querySelector('.opened-smiles');
        if (opened === null) {
            formButtons.insertAdjacentHTML('afterbegin', `<div class="opened-smiles" id="${pack.id}">${smilesBank[pack.id].imgsContainer}</div>`);
            formButtons.querySelectorAll('.form__custom-smile').forEach(smile => {
                smile.addEventListener('click', smileToFormHandler);
            });
        } else if (opened.id != pack.id) {
            opened.remove();
            formButtons.insertAdjacentHTML('afterbegin', `<div class="opened-smiles" id="${pack.id}">${smilesBank[pack.id].imgsContainer}</div>`);
            formButtons.querySelectorAll('.form__custom-smile').forEach(smile => {
                smile.addEventListener('click', smileToFormHandler);
            });
        } else {
            opened.remove();
            console.log('meow');
        }
    });

});


const smileToFormHandler = (evt) => {
    post.querySelector('#main-reply').value += `[img]${evt.target.src}[/img]`;
}