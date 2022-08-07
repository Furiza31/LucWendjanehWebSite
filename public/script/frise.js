function textFrise (here) {

    let deux = document.getElementById("2");
    let trois = document.getElementById("3");
    let quatre = document.getElementById("4");
    let cinq = document.getElementById("5");

    let text2 = document.getElementById("londre");
    let text3 = document.getElementById("thailande-Vietnam");
    let text4 = document.getElementById("President");
    let text5 = document.getElementById("radio");


    text2.style.display = "none"
    text3.style.display = "none"
    text4.style.display = "none"
    text5.style.display = "none"

    deux.style.backgroundColor = "white"
    trois.style.backgroundColor = "white"
    quatre.style.backgroundColor = "white"
    cinq.style.backgroundColor = "white"



    switch (here) {
        case 2 :
            text2.style.display = "block"
            deux.style.backgroundColor = "#2C63CB"
            break;
        case 3 :
            text3.style.display = "block"
            trois.style.backgroundColor = "#2C63CB"
            break;
        case 4 :
            text4.style.display = "block"
            quatre.style.backgroundColor = "#2C63CB"
            break;
        case 5 :
            text5.style.display = "block"
            cinq.style.backgroundColor = "#2C63CB"
            break;
        default:
            console.log("error");
    }

}