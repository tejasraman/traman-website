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

function disableScroll() {
    // Get the current page scroll position
    scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop;
    scrollLeft =
        window.pageXOffset ||
        document.documentElement.scrollLeft,

        // if any scroll is attempted,
        // set this to the previous value
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function () { };
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
        disableScroll()
        document.getElementById("infocard").style.transform = `translate(${-(Math.round(x*200))}%)`;
        document.getElementById("particles-js").style.transform = `translate(${(Math.round(x*200))}%)`;
    } else{
        enableScroll()
    }
}

