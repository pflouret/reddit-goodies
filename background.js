
var o = opera.extension;

//var BLANK_URL = "data:text/html,Can't do anything with the current tab, try reloading it.";
var BLANK_URL = "data:text/html,";

function updatePopupUrl() {
    var tab = o.tabs.getFocused();
    uiitem.popup.href = tab ? "http://www.reddit.com/search?x=0&y=0&q=" + encodeURI(tab.url) : BLANK_URL;
}

var uiitem = opera.contexts.toolbar.createItem({
    disabled: false,
    title: "reddit goodies",
    icon: "img/alien18.png",
    popup: {
        href: BLANK_URL,
        width: widget.preferences.popupWidth + "px",
        height: widget.preferences.popupHeight + "px"
    }
});

uiitem.onclick = updatePopupUrl;

opera.contexts.toolbar.addItem(uiitem);

o.tabs.onfocus = function () {
    updatePopupUrl();
}

o.onmessage = function (e) {
    var m = JSON.parse(e.data);
    switch (m.type) {
        default:
            break;
    }
}

