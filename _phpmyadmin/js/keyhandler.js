function onKeyDownArrowsHandler(a) {
    a = a || window.event;
    var b = a.srcElement || a.target;
    if (b)if (!(b.tagName != "TEXTAREA" && b.tagName != "INPUT" && b.tagName != "SELECT")) {
        if (navigator.userAgent.toLowerCase().indexOf("applewebkit/") != -1) {
            if (a.ctrlKey || a.shiftKey || !a.altKey)return
        } else if (!a.ctrlKey || a.shiftKey || a.altKey)return;
        if (b.id) {
            var c = b.id.split("_");
            if (!(c[0] != "field" || typeof c[2] == "undefined")) {
                b = c[2];
                c = c[1];
                for (i = 0; i < 10; i++) {
                    if (switch_movement)switch (a.keyCode) {
                        case 38:
                            b--;
                            break;
                        case 40:
                            b++;
                            break;
                        case 37:
                            c--;
                            break;
                        case 39:
                            c++;
                            break;
                        default:
                            return
                    } else switch (a.keyCode) {
                        case 38:
                            c--;
                            break;
                        case 40:
                            c++;
                            break;
                        case 37:
                            b--;
                            break;
                        case 39:
                            b++;
                            break;
                        default:
                            return
                    }
                    var d = "field_" + c + "_" + b;
                    d = document.getElementById(d);
                    if (!d) {
                        d = "field_" + c + "_" + b + "_0";
                        d = document.getElementById(d)
                    }
                    if (d)break
                }
                if (d) {
                    d.focus();
                    d.tagName != "SELECT" && d.select();
                    a.returnValue = false
                }
            }
        }
    }
};
