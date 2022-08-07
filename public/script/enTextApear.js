let i = 0;
let htmlP = document.getElementById("hello");
let txt = "Do you need a digital project manager ?";

function showLettersEn () {
    let loop
        if (i < txt.length) {
            htmlP.innerHTML += txt[i];
            i++
        } else {
            clearTimeout(loop)
        }
    loop = setTimeout(showLettersEn, 120)
}
