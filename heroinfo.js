const filler = document.querySelector(".profileinfo-filler");
const fillerButton = filler.querySelector(".profileinfo__button");

const fillerName = filler.querySelector(".profileinfo__name");
const fillerAge = filler.querySelector(".profileinfo__age");
const fillerRace = filler.querySelector(".profileinfo__race");
const fillerJob = filler.querySelector(".profileinfo__job");
const fillerLink = filler.querySelector(".profileinfo__link");
const fillerLinkName = filler.querySelector(".profileinfo__linkname");

const post = document.querySelector(".post");
console.log(post);

const valueOrPlaceholder = (inputel) => {
    if (inputel.value) {
        return inputel.value;
    } else {
        return inputel.placeholder;
    }
}


fillerButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    let heroName = valueOrPlaceholder(fillerName);
    heroName = heroName.toUpperCase();
    let heroAge = valueOrPlaceholder(fillerAge);
    let heroRace = valueOrPlaceholder(fillerRace);
    heroRace = heroRace.toLowerCase();
    let heroJob = valueOrPlaceholder(fillerJob);
    heroJob = heroJob.toLowerCase();
    let heroLinkName = valueOrPlaceholder(fillerLinkName);
    heroLinkName = heroLinkName.toLowerCase();
    let heroLink = valueOrPlaceholder(fillerLink);

    post.value += "[" + "code" + "]";
    post.value +=
        `<b>${heroName}, ${heroAge}</b><br>${heroRace}, ${heroJob}<br><img src="https://forumstatic.ru/files/001a/bd/39/97184.png"><br><b><a href="${heroLink}">${heroLinkName}</a></b>`;
    post.value += "[/" + "code" + "]";

});

const copyButton = document.querySelector(".copy-button");
copyButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    const inputValue = post.value.trim();
    if (inputValue) {
        post.focus();
        post.setSelectionRange(0, post.value.length);
        if (copyButton.innerText !== 'Выделено!') {
            const originalText = copyButton.innerText;
            copyButton.innerText = 'Выделено!';
            setTimeout(() => {
                copyButton.innerText = originalText;
            }, 1500);
        }
    }
});