function hovergh(element, fn) {
    element.setAttribute('src', 'assets/gh-hovered.svg');
}

function unhovergh(element, fn) {
    element.setAttribute('src', 'assets/gh.svg');
}


function hoverml(element, fn) {
    element.setAttribute('src', 'assets/email-hovered.svg');
}

function unhoverml(element, fn) {
    element.setAttribute('src', 'assets/email.svg');
}



window.addEventListener("scroll", Scroller);

function ScrollPerc() {
    const Element = document.documentElement;
    const perc = Element.scrollTop / Element.clientHeight;
    return perc;
}

function Scroller() {
    x = ScrollPerc()
    if(x < 0.5) {
        document.getElementById("infocard").style.transform = `translate(${-(Math.round(x*200))}%)`;
        document.getElementById("particles-js").style.transform = `translate(${(Math.round(x*200))}%)`;

    } else{
        document.getElementById("infocard").style.transform = `translate(${-(Math.round(0.5*200))}%)`;
        document.getElementById("particles-js").style.transform = `translate(${(Math.round(0.5*200))}%)`;
    }
}

