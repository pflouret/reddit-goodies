//==UserScript==
// @include http://*reddit.com/*/comments/*
//==/UserScript==

window.addEventListener("DOMContentLoaded", function () {
    var xhr = new window.XMLHttpRequest();
    xhr.open("GET", "http://www.reddit.com/r/fffffffuuuuuuuuuuuu/stylesheet.css", false);
    xhr.send(null);

    var styles = xhr.responseText,
        s = "";
        i = styles.indexOf("a[href=");

    while (i < styles.length) {
        var i0 = i;
        if (styles.substring(i, i+7) == "a[href=") {
            i = styles.indexOf("}", i0);
            s += styles.substring(i0, i+1) + "\n";
        }
        i += 1;
    }

    var e = document.createElement('style');
    e.setAttribute("type", "text/css");
    document.head.appendChild(e);
    e.appendChild(document.createTextNode(s));
}, false);
