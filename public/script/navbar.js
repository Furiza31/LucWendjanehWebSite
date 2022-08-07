let on = false;

function responsiveNav () {

    let navigationLinks = document.getElementById("WhiteNavBar");

    let nav = document.getElementById("apearResponsiveNavBar")

    if (on) {
        on = false;
        nav.style.display = "none";
        navigationLinks.style.height = "80px"
    } else {
        on = true
        nav.style.display = "block";
        navigationLinks.style.height = "100%"
    }
}


function NavLinkPress () {

    if ( window.innerWidth < 1400) {
        on = false;
        
        let navigationLinks = document.getElementById("WhiteNavBar");

        let nav = document.getElementById("apearResponsiveNavBar")

        nav.style.display = "none";
        navigationLinks.style.height = "80px"
    }

}

window.onresize = resize;

function resize () {

    let nav = document.getElementById("apearResponsiveNavBar")

    let navigationLinks = document.getElementById("WhiteNavBar");
    navigationLinks.style.height = "80px"

    on = false

    if ( window.innerWidth > 1400) {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
}