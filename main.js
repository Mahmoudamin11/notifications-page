let btn = document.querySelector("span.mark-all-as-read");
let dots = Array.from(document.querySelectorAll("span.dot"));
let divs = document.querySelectorAll("div.unread");
let num = document.querySelector("span.not-num");

console.log(divs)
console.log(dots)

btn.addEventListener('click', () => {
    num.innerHTML = 0;
    dots.forEach((e) => {
        e.style.cssText = "display: none;";
    });

    divs.forEach((e) => {
        e.style.backgroundColor = "white";
    });

})