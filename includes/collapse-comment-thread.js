//==UserScript==
// @include http://*reddit.com/*/comments/*
//==/UserScript==

function makeCollapser(f) {
    var c = document.createElement("a");
    c.textContent = "[x]";
    c.className = "expand";
    c.style.marginLeft = "0"
    c.title = "Collapse the whole comment thread";
    c.onclick = f;
    return c;
}

function offsetTop(e) {
    var y = 0;
    while (e) {
        y += e.offsetTop;
        e = e.offsetParent;
    }
    return y;
}

function getHideFunction(a) {
    return function () {
        var y = offsetTop(a);
        if (y < window.scrollY)
            window.scrollTo(window.scrollX, y-10);
        return window.hidecomment(a);
    }
}

window.addEventListener("DOMContentLoaded", function () {
    var comments = document.querySelectorAll("div.nestedlisting > div.comment");
    for (var i=0; i < comments.length; i++) {
        var f = getHideFunction(comments[i].querySelector("div.noncollapsed a.expand"));

        var children = comments[i].querySelectorAll("p.tagline");
        for (var j=0; j < children.length; j++) {
            var a = children[j].querySelector("a.expand");
            if (a)
                a.style.marginRight = "0";
            children[j].appendChild(makeCollapser(f));
        }
    }
}, false);
