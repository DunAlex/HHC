var hash_to_set = "", hash_init_done = 0;
function setURLHash(a) {
    if (!jQuery.browser.webkit)if (window.parent != window && window.parent.setURLHash)window.parent.setURLHash(a); else {
        var b = window.location.pathname;
        if (b.substring(b.length - 9, b.length) == "index.php")if (hash_init_done) {
            window.location.hash = "PMAURL:" + a;
            fix_favicon()
        } else hash_to_set = "PMAURL:" + a
    }
}
function fix_favicon() {
    jQuery.browser.mozilla && $("head > link[href=\\.\\/favicon\\.ico]").appendTo("head")
}
$(document).ready(function () {
    if (!(window.parent != window && window.parent.setURLHash))if (window.location.hash.substring(0, 8) == "#PMAURL:")window.location = "index.php?" + window.location.hash.substring(8); else {
        if (hash_to_set != "") {
            window.location.hash = hash_to_set;
            hash_to_set = "";
            fix_favicon()
        }
        hash_init_done = 1
    }
});
