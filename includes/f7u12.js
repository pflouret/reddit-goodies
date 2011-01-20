//==UserScript==
// @include http://*reddit.com/*/comments/*
//==/UserScript==

function makeTitleSpan(a) {
    var outer = document.createElement("span"),
        title = document.createElement("span");

    a.parentNode.insertBefore(outer, a.nextSibling);
    outer.appendChild(a);
    outer.appendChild(title);

    a.style.verticalAlign = "top";
    outer.style.verticalAlign = "text-bottom";
    outer.style.display = "inline-block";
    title.textContent = a.title;
    title.style.color = "#777";
    title.style.fontSize= "0.8em";
    title.style.paddingLeft = "2px";
}

window.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll("a[title]:empty");
    for (var i=0; i < links.length; i++)
        makeTitleSpan(links[i]);
}, false);

