const tags = document.getElementsByClassName("tag");
const nodes = document.getElementsByClassName("project");

let active = false;
let lastActive;

for (let i = 0; i < tags.length; i++) {
    tags[i].addEventListener("click", domToggle);
}

function filterProj(filteringClass) {
    return [...nodes].filter(
        (el) => el.querySelector(`.${filteringClass}`) == null
    );
}

function domToggle(e) {
    let tag = e.currentTarget.classList[1];
    active = !(tag === lastActive && active === true);
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].classList.remove("hidden");
    }
    if (lastActive !== tag) {
        const filtered = filterProj(tag);
        filtered.forEach((elem) => {
            elem.classList.add("hidden");
        });
    }
    makeActive(tag);
    lastActive = tag;
}

function makeActive(tag) {
    if (!active) {
        for (let i = 0; i < tags.length; i++) {
            tags[i].classList.remove(`${tag}-a`);
        }
    } else {
        for (let i = 0; i < tags.length; i++) {
            tags[i].classList.remove(`${lastActive}-a`);
            if (tags[i].classList.contains(tag)) {
                tags[i].classList.add(`${tag}-a`);
            }
        }
    }
}
