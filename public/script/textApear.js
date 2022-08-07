let i = 0;
let htmlP = document.getElementById("hello");
let txt = "Vous avez besoin d'un chef de projet digital ?";

function showLetters() {
    let loop
        if (i < txt.length) {
            htmlP.innerHTML += txt[i];
            i++
        } else {
            clearTimeout(loop)
        }
    loop = setTimeout(showLetters, 120)
}


const sr = ScrollReveal({
    duration: 1000,
    reset: true,
    origin: 'bottom',
    distance: '50px',
    mobile: false
});

sr.reveal('.Accueil', {

})

sr.reveal('.QuiSuisJeText p', {

})

sr.reveal('.friseBlock', {

})

sr.reveal('.photoAvantCV', {

})

sr.reveal('.expPro', {

})

sr.reveal('.parcourEtSpe', {

})

sr.reveal('.expProBlock', {
    delay: 100
})

sr.reveal('.downloadCV', {

})

sr.reveal('.diplomeImage', {

})

sr.reveal('.Diplomes', {

})

sr.reveal('.appris', {

})

sr.reveal('.diplomeText', {
    delay: 50
})

sr.reveal('.imageDiplome', {
    delay: 50
})

sr.reveal('.mesCompetances', {

})

sr.reveal('.fais', {

})

sr.reveal('.sub-competencesBlock', {
    delay: 150
})

sr.reveal('.titleContact', {

})

sr.reveal('.contactMe', {

})

sr.reveal('.frise', {

})