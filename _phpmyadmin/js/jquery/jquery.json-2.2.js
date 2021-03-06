(function (e) {
    e.toJSON = function (a) {
        if (typeof JSON == "object" && JSON.stringify)return JSON.stringify(a);
        var b = typeof a;
        if (a === null)return "null";
        if (b != "undefined") {
            if (b == "number" || b == "boolean")return a + "";
            if (b == "string")return e.quoteString(a);
            if (b == "object") {
                if (typeof a.toJSON == "function")return e.toJSON(a.toJSON());
                if (a.constructor === Date) {
                    var c = a.getUTCMonth() + 1;
                    if (c < 10)c = "0" + c;
                    var d = a.getUTCDate();
                    if (d < 10)d = "0" + d;
                    b = a.getUTCFullYear();
                    var f = a.getUTCHours();
                    if (f < 10)f = "0" + f;
                    var g = a.getUTCMinutes();
                    if (g <
                        10)g = "0" + g;
                    var h = a.getUTCSeconds();
                    if (h < 10)h = "0" + h;
                    a = a.getUTCMilliseconds();
                    if (a < 100)a = "0" + a;
                    if (a < 10)a = "0" + a;
                    return '"' + b + "-" + c + "-" + d + "T" + f + ":" + g + ":" + h + "." + a + 'Z"'
                }
                if (a.constructor === Array) {
                    c = [];
                    for (d = 0; d < a.length; d++)c.push(e.toJSON(a[d]) || "null");
                    return "[" + c.join(",") + "]"
                }
                c = [];
                for (d in a) {
                    b = typeof d;
                    if (b == "number")b = '"' + d + '"'; else if (b == "string")b = e.quoteString(d); else continue;
                    if (typeof a[d] != "function") {
                        f = e.toJSON(a[d]);
                        c.push(b + ":" + f)
                    }
                }
                return "{" + c.join(", ") + "}"
            }
        }
    };
    e.evalJSON = function (a) {
        if (typeof JSON ==
            "object" && JSON.parse)return JSON.parse(a);
        return eval("(" + a + ")")
    };
    e.secureEvalJSON = function (a) {
        if (typeof JSON == "object" && JSON.parse)return JSON.parse(a);
        var b = a;
        b = b.replace(/\\["\\\/bfnrtu]/g, "@");
        b = b.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]");
        b = b.replace(/(?:^|:|,)(?:\s*\[)+/g, "");
        if (/^[\],:{}\s]*$/.test(b))return eval("(" + a + ")"); else throw new SyntaxError("Error parsing JSON, source is not valid.");
    };
    e.quoteString = function (a) {
        if (a.match(i))return '"' + a.replace(i,
                function (b) {
                    var c = j[b];
                    if (typeof c === "string")return c;
                    c = b.charCodeAt();
                    return "\\u00" + Math.floor(c / 16).toString(16) + (c % 16).toString(16)
                }) + '"';
        return '"' + a + '"'
    };
    var i = /["\\\x00-\x1f\x7f-\x9f]/g, j = {
        "\u0008": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\u000c": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }
})(jQuery);
