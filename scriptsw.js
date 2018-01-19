/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a, b) {
    function parseQueryString() {
        var str = window.location.search;
        var objURL = {};

        str.replace(
            new RegExp( "([^?=&]+)(=([^&]*))?", "g" ),
            function($0, $1, $2, $3) {
                objURL[$1] = $3;
            }
        );
        return objURL;
    };

    var params = parseQueryString();
    if ('present' in params) {
        document.querySelector('#tutor-avatar').remove();
        document.querySelector('#tutor-talk').style.width = '800px';
        document.querySelector('#tutor').style.height = '156px';
    }

    function cy(a) {
        return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }

    function cu(a) {
        if (!cj[a]) {
            var b = c.body,
                d = f("<" + a + ">").appendTo(b),
                e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                ck || (ck = c.createElement("iframe"), ck.frameBorder = ck.width = ck.height = 0), b.appendChild(ck);
                if (!cl || !ck.createElement) {
                    cl = (ck.contentWindow || ck.contentDocument).document, cl.write((f.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), cl.close()
                }
                d = cl.createElement(a), cl.body.appendChild(d), e = f.css(d, "display"), b.removeChild(ck)
            }
            cj[a] = e
        }
        return cj[a]
    }

    function ct(a, b) {
        var c = {};
        f.each(cp.concat.apply([], cp.slice(0, b)), function() {
            c[this] = a
        });
        return c
    }

    function cs() {
        cq = b
    }

    function cr() {
        setTimeout(cs, 0);
        return cq = f.now()
    }

    function ci() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }

    function ch() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function cb(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes,
            e = {},
            g, h, i = d.length,
            j, k = d[0],
            l, m, n, o, p;
        for (g = 1; g < i; g++) {
            if (g === 1) {
                for (h in a.converters) {
                    typeof h == "string" && (e[h.toLowerCase()] = a.converters[h])
                }
            }
            l = k, k = d[g];
            if (k === "*") {
                k = l
            } else {
                if (l !== "*" && l !== k) {
                    m = l + " " + k, n = e[m] || e["* " + k];
                    if (!n) {
                        p = b;
                        for (o in e) {
                            j = o.split(" ");
                            if (j[0] === l || j[0] === "*") {
                                p = e[j[1] + " " + k];
                                if (p) {
                                    o = e[o], o === !0 ? n = p : p === !0 && (n = o);
                                    break
                                }
                            }
                        }
                    }!n && !p && f.error("No conversion from " + m.replace(" ", " to ")), n !== !0 && (c = n ? n(c) : p(o(c)))
                }
            }
        }
        return c
    }

    function ca(a, c, d) {
        var e = a.contents,
            f = a.dataTypes,
            g = a.responseFields,
            h, i, j, k;
        for (i in g) {
            i in d && (c[g[i]] = d[i])
        }
        while (f[0] === "*") {
            f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"))
        }
        if (h) {
            for (i in e) {
                if (e[i] && e[i].test(h)) {
                    f.unshift(i);
                    break
                }
            }
        }
        if (f[0] in d) {
            j = f[0]
        } else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        }
        if (j) {
            j !== f[0] && f.unshift(j);
            return d[j]
        }
    }

    function b_(a, b, c, d) {
        if (f.isArray(b)) {
            f.each(b, function(b, e) {
                c || bD.test(a) ? d(a, e) : b_(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d)
            })
        } else {
            if (!c && f.type(b) === "object") {
                for (var e in b) {
                    b_(a + "[" + e + "]", b[e], c, d)
                }
            } else {
                d(a, b)
            }
        }
    }

    function b$(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c) {
            c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d])
        }
        e && f.extend(!0, a, e)
    }

    function bZ(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h = a[f],
            i = 0,
            j = h ? h.length : 0,
            k = a === bS,
            l;
        for (; i < j && (k || !l); i++) {
            l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = bZ(a, c, d, e, l, g)))
        }(k || !l) && !g["*"] && (l = bZ(a, c, d, e, "*", g));
        return l
    }

    function bY(a) {
        return function(b, c) {
            typeof b != "string" && (c = b, b = "*");
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(bO),
                    e = 0,
                    g = d.length,
                    h, i, j;
                for (; e < g; e++) {
                    h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c)
                }
            }
        }
    }

    function bB(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight,
            e = b === "width" ? 1 : 0,
            g = 4;
        if (d > 0) {
            if (c !== "border") {
                for (; e < g; e += 2) {
                    c || (d -= parseFloat(f.css(a, "padding" + bx[e])) || 0), c === "margin" ? d += parseFloat(f.css(a, c + bx[e])) || 0 : d -= parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0
                }
            }
            return d + "px"
        }
        d = by(a, b);
        if (d < 0 || d == null) {
            d = a.style[b]
        }
        if (bt.test(d)) {
            return d
        }
        d = parseFloat(d) || 0;
        if (c) {
            for (; e < g; e += 2) {
                d += parseFloat(f.css(a, "padding" + bx[e])) || 0, c !== "padding" && (d += parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0), c === "margin" && (d += parseFloat(f.css(a, c + bx[e])) || 0)
            }
        }
        return d + "px"
    }

    function bo(a) {
        var b = c.createElement("div");
        bh.appendChild(b), b.innerHTML = a.outerHTML;
        return b.firstChild
    }

    function bn(a) {
        var b = (a.nodeName || "").toLowerCase();
        b === "input" ? bm(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), bm)
    }

    function bm(a) {
        if (a.type === "checkbox" || a.type === "radio") {
            a.defaultChecked = a.checked
        }
    }

    function bl(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }

    function bk(a, b) {
        var c;
        b.nodeType === 1 && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), c === "object" ? b.outerHTML = a.outerHTML : c !== "input" || a.type !== "checkbox" && a.type !== "radio" ? c === "option" ? b.selected = a.defaultSelected : c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a.text && (b.text = a.text) : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)), b.removeAttribute(f.expando), b.removeAttribute("_submit_attached"), b.removeAttribute("_change_attached"))
    }

    function bj(a, b) {
        if (b.nodeType === 1 && !!f.hasData(a)) {
            var c, d, e, g = f._data(a),
                h = f._data(b, g),
                i = g.events;
            if (i) {
                delete h.handle, h.events = {};
                for (c in i) {
                    for (d = 0, e = i[c].length; d < e; d++) {
                        f.event.add(b, c, i[c][d])
                    }
                }
            }
            h.data && (h.data = f.extend({}, h.data))
        }
    }

    function bi(a, b) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function U(a) {
        var b = V.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement) {
            while (b.length) {
                c.createElement(b.pop())
            }
        }
        return c
    }

    function T(a, b, c) {
        b = b || 0;
        if (f.isFunction(b)) {
            return f.grep(a, function(a, d) {
                var e = !!b.call(a, d, a);
                return e === c
            })
        }
        if (b.nodeType) {
            return f.grep(a, function(a, d) {
                return a === b === c
            })
        }
        if (typeof b == "string") {
            var d = f.grep(a, function(a) {
                return a.nodeType === 1
            });
            if (O.test(b)) {
                return f.filter(b, d, !c)
            }
            b = f.filter(b, d)
        }
        return f.grep(a, function(a, d) {
            return f.inArray(a, b) >= 0 === c
        })
    }

    function S(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }

    function K() {
        return !0
    }

    function J() {
        return !1
    }

    function n(a, b, c) {
        var d = b + "defer",
            e = b + "queue",
            g = b + "mark",
            h = f._data(a, d);
        h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function() {
            !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire())
        }, 0)
    }

    function m(a) {
        for (var b in a) {
            if (b === "data" && f.isEmptyObject(a[b])) {
                continue
            }
            if (b !== "toJSON") {
                return !1
            }
        }
        return !0
    }

    function l(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(k, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNumeric(d) ? +d : j.test(d) ? f.parseJSON(d) : d
                } catch (g) {}
                f.data(a, c, d)
            } else {
                d = b
            }
        }
        return d
    }

    function h(a) {
        var b = g[a] = {},
            c, d;
        a = a.split(/\s+/);
        for (c = 0, d = a.length; c < d; c++) {
            b[a[c]] = !0
        }
        return b
    }
    var c = a.document,
        d = a.navigator,
        e = a.location,
        f = function() {
            function J() {
                if (!e.isReady) {
                    try {
                        c.documentElement.doScroll("left")
                    } catch (a) {
                        setTimeout(J, 1);
                        return
                    }
                    e.ready()
                }
            }
            var e = function(a, b) {
                    return new e.fn.init(a, b, h)
                },
                f = a.jQuery,
                g = a.$,
                h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                j = /\S/,
                k = /^\s+/,
                l = /\s+$/,
                m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                n = /^[\],:{}\s]*$/,
                o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                q = /(?:^|:|,)(?:\s*\[)+/g,
                r = /(webkit)[ \/]([\w.]+)/,
                s = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                t = /(msie) ([\w.]+)/,
                u = /(mozilla)(?:.*? rv:([\w.]+))?/,
                v = /-([a-z]|[0-9])/ig,
                w = /^-ms-/,
                x = function(a, b) {
                    return (b + "").toUpperCase()
                },
                y = d.userAgent,
                z, A, B, C = Object.prototype.toString,
                D = Object.prototype.hasOwnProperty,
                E = Array.prototype.push,
                F = Array.prototype.slice,
                G = String.prototype.trim,
                H = Array.prototype.indexOf,
                I = {};
            e.fn = e.prototype = {
                constructor: e,
                init: function(a, d, f) {
                    var g, h, j, k;
                    if (!a) {
                        return this
                    }
                    if (a.nodeType) {
                        this.context = this[0] = a, this.length = 1;
                        return this
                    }
                    if (a === "body" && !d && c.body) {
                        this.context = c, this[0] = c.body, this.selector = a, this.length = 1;
                        return this
                    }
                    if (typeof a == "string") {
                        a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];
                        if (g && (g[1] || !d)) {
                            if (g[1]) {
                                d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = m.exec(a), j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
                                return e.merge(this, a)
                            }
                            h = c.getElementById(g[2]);
                            if (h && h.parentNode) {
                                if (h.id !== g[2]) {
                                    return f.find(a)
                                }
                                this.length = 1, this[0] = h
                            }
                            this.context = c, this.selector = a;
                            return this
                        }
                        return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
                    }
                    if (e.isFunction(a)) {
                        return f.ready(a)
                    }
                    a.selector !== b && (this.selector = a.selector, this.context = a.context);
                    return e.makeArray(a, this)
                },
                selector: "",
                jquery: "1.7.2",
                length: 0,
                size: function() {
                    return this.length
                },
                toArray: function() {
                    return F.call(this, 0)
                },
                get: function(a) {
                    return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
                },
                pushStack: function(a, b, c) {
                    var d = this.constructor();
                    e.isArray(a) ? E.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
                    return d
                },
                each: function(a, b) {
                    return e.each(this, a, b)
                },
                ready: function(a) {
                    e.bindReady(), A.add(a);
                    return this
                },
                eq: function(a) {
                    a = +a;
                    return a === -1 ? this.slice(a) : this.slice(a, a + 1)
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                slice: function() {
                    return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
                },
                map: function(a) {
                    return this.pushStack(e.map(this, function(b, c) {
                        return a.call(b, c, b)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: E,
                sort: [].sort,
                splice: [].splice
            }, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function() {
                var a, c, d, f, g, h, i = arguments[0] || {},
                    j = 1,
                    k = arguments.length,
                    l = !1;
                typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), typeof i != "object" && !e.isFunction(i) && (i = {}), k === j && (i = this, --j);
                for (; j < k; j++) {
                    if ((a = arguments[j]) != null) {
                        for (c in a) {
                            d = i[c], f = a[c];
                            if (i === f) {
                                continue
                            }
                            l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
                        }
                    }
                }
                return i
            }, e.extend({
                noConflict: function(b) {
                    a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f);
                    return e
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(a) {
                    a ? e.readyWait++ : e.ready(!0)
                },
                ready: function(a) {
                    if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                        if (!c.body) {
                            return setTimeout(e.ready, 1)
                        }
                        e.isReady = !0;
                        if (a !== !0 && --e.readyWait > 0) {
                            return
                        }
                        A.fireWith(c, [e]), e.fn.trigger && e(c).trigger("ready").off("ready")
                    }
                },
                bindReady: function() {
                    if (!A) {
                        A = e.Callbacks("once memory");
                        if (c.readyState === "complete") {
                            return setTimeout(e.ready, 1)
                        }
                        if (c.addEventListener) {
                            c.addEventListener("DOMContentLoaded", B, !1), a.addEventListener("load", e.ready, !1)
                        } else {
                            if (c.attachEvent) {
                                c.attachEvent("onreadystatechange", B), a.attachEvent("onload", e.ready);
                                var b = !1;
                                try {
                                    b = a.frameElement == null
                                } catch (d) {}
                                c.documentElement.doScroll && b && J()
                            }
                        }
                    }
                },
                isFunction: function(a) {
                    return e.type(a) === "function"
                },
                isArray: Array.isArray || function(a) {
                    return e.type(a) === "array"
                },
                isWindow: function(a) {
                    return a != null && a == a.window
                },
                isNumeric: function(a) {
                    return !isNaN(parseFloat(a)) && isFinite(a)
                },
                type: function(a) {
                    return a == null ? String(a) : I[C.call(a)] || "object"
                },
                isPlainObject: function(a) {
                    if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a)) {
                        return !1
                    }
                    try {
                        if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf")) {
                            return !1
                        }
                    } catch (c) {
                        return !1
                    }
                    var d;
                    for (d in a) {}
                    return d === b || D.call(a, d)
                },
                isEmptyObject: function(a) {
                    for (var b in a) {
                        return !1
                    }
                    return !0
                },
                error: function(a) {
                    throw new Error(a)
                },
                parseJSON: function(b) {
                    if (typeof b != "string" || !b) {
                        return null
                    }
                    b = e.trim(b);
                    if (a.JSON && a.JSON.parse) {
                        return a.JSON.parse(b)
                    }
                    if (n.test(b.replace(o, "@").replace(p, "]").replace(q, ""))) {
                        return (new Function("return " + b))()
                    }
                    e.error("Invalid JSON: " + b)
                },
                parseXML: function(c) {
                    if (typeof c != "string" || !c) {
                        return null
                    }
                    var d, f;
                    try {
                        a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                    } catch (g) {
                        d = b
                    }(!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
                    return d
                },
                noop: function() {},
                globalEval: function(b) {
                    b && j.test(b) && (a.execScript || function(b) {
                        a.eval.call(a, b)
                    })(b)
                },
                camelCase: function(a) {
                    return a.replace(w, "ms-").replace(v, x)
                },
                nodeName: function(a, b) {
                    return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                },
                each: function(a, c, d) {
                    var f, g = 0,
                        h = a.length,
                        i = h === b || e.isFunction(a);
                    if (d) {
                        if (i) {
                            for (f in a) {
                                if (c.apply(a[f], d) === !1) {
                                    break
                                }
                            }
                        } else {
                            for (; g < h;) {
                                if (c.apply(a[g++], d) === !1) {
                                    break
                                }
                            }
                        }
                    } else {
                        if (i) {
                            for (f in a) {
                                if (c.call(a[f], f, a[f]) === !1) {
                                    break
                                }
                            }
                        } else {
                            for (; g < h;) {
                                if (c.call(a[g], g, a[g++]) === !1) {
                                    break
                                }
                            }
                        }
                    }
                    return a
                },
                trim: G ? function(a) {
                    return a == null ? "" : G.call(a)
                } : function(a) {
                    return a == null ? "" : (a + "").replace(k, "").replace(l, "")
                },
                makeArray: function(a, b) {
                    var c = b || [];
                    if (a != null) {
                        var d = e.type(a);
                        a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(c, a)
                    }
                    return c
                },
                inArray: function(a, b, c) {
                    var d;
                    if (b) {
                        if (H) {
                            return H.call(b, a, c)
                        }
                        d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                        for (; c < d; c++) {
                            if (c in b && b[c] === a) {
                                return c
                            }
                        }
                    }
                    return -1
                },
                merge: function(a, c) {
                    var d = a.length,
                        e = 0;
                    if (typeof c.length == "number") {
                        for (var f = c.length; e < f; e++) {
                            a[d++] = c[e]
                        }
                    } else {
                        while (c[e] !== b) {
                            a[d++] = c[e++]
                        }
                    }
                    a.length = d;
                    return a
                },
                grep: function(a, b, c) {
                    var d = [],
                        e;
                    c = !!c;
                    for (var f = 0, g = a.length; f < g; f++) {
                        e = !!b(a[f], f), c !== e && d.push(a[f])
                    }
                    return d
                },
                map: function(a, c, d) {
                    var f, g, h = [],
                        i = 0,
                        j = a.length,
                        k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
                    if (k) {
                        for (; i < j; i++) {
                            f = c(a[i], i, d), f != null && (h[h.length] = f)
                        }
                    } else {
                        for (g in a) {
                            f = c(a[g], g, d), f != null && (h[h.length] = f)
                        }
                    }
                    return h.concat.apply([], h)
                },
                guid: 1,
                proxy: function(a, c) {
                    if (typeof c == "string") {
                        var d = a[c];
                        c = a, a = d
                    }
                    if (!e.isFunction(a)) {
                        return b
                    }
                    var f = F.call(arguments, 2),
                        g = function() {
                            return a.apply(c, f.concat(F.call(arguments)))
                        };
                    g.guid = a.guid = a.guid || g.guid || e.guid++;
                    return g
                },
                access: function(a, c, d, f, g, h, i) {
                    var j, k = d == null,
                        l = 0,
                        m = a.length;
                    if (d && typeof d == "object") {
                        for (l in d) {
                            e.access(a, c, l, d[l], 1, h, f)
                        }
                        g = 1
                    } else {
                        if (f !== b) {
                            j = i === b && e.isFunction(f), k && (j ? (j = c, c = function(a, b, c) {
                                return j.call(e(a), c)
                            }) : (c.call(a, f), c = null));
                            if (c) {
                                for (; l < m; l++) {
                                    c(a[l], d, j ? f.call(a[l], l, c(a[l], d)) : f, i)
                                }
                            }
                            g = 1
                        }
                    }
                    return g ? a : k ? c.call(a) : m ? c(a[0], d) : h
                },
                now: function() {
                    return (new Date).getTime()
                },
                uaMatch: function(a) {
                    a = a.toLowerCase();
                    var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
                    return {
                        browser: b[1] || "",
                        version: b[2] || "0"
                    }
                },
                sub: function() {
                    function a(b, c) {
                        return new a.fn.init(b, c)
                    }
                    e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function(d, f) {
                        f && f instanceof e && !(f instanceof a) && (f = a(f));
                        return e.fn.init.call(this, d, f, b)
                    }, a.fn.init.prototype = a.fn;
                    var b = a(c);
                    return a
                },
                browser: {}
            }), e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
                I["[object " + b + "]"] = b.toLowerCase()
            }), z = e.uaMatch(y), z.browser && (e.browser[z.browser] = !0, e.browser.version = z.version), e.browser.webkit && (e.browser.safari = !0), j.test(" ") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? B = function() {
                c.removeEventListener("DOMContentLoaded", B, !1), e.ready()
            } : c.attachEvent && (B = function() {
                c.readyState === "complete" && (c.detachEvent("onreadystatechange", B), e.ready())
            });
            return e
        }(),
        g = {};
    f.Callbacks = function(a) {
        a = a ? g[a] || h(a) : {};
        var c = [],
            d = [],
            e, i, j, k, l, m, n = function(b) {
                var d, e, g, h, i;
                for (d = 0, e = b.length; d < e; d++) {
                    g = b[d], h = f.type(g), h === "array" ? n(g) : h === "function" && (!a.unique || !p.has(g)) && c.push(g)
                }
            },
            o = function(b, f) {
                f = f || [], e = !a.memory || [b, f], i = !0, j = !0, m = k || 0, k = 0, l = c.length;
                for (; c && m < l; m++) {
                    if (c[m].apply(b, f) === !1 && a.stopOnFalse) {
                        e = !0;
                        break
                    }
                }
                j = !1, c && (a.once ? e === !0 ? p.disable() : c = [] : d && d.length && (e = d.shift(), p.fireWith(e[0], e[1])))
            },
            p = {
                add: function() {
                    if (c) {
                        var a = c.length;
                        n(arguments), j ? l = c.length : e && e !== !0 && (k = a, o(e[0], e[1]))
                    }
                    return this
                },
                remove: function() {
                    if (c) {
                        var b = arguments,
                            d = 0,
                            e = b.length;
                        for (; d < e; d++) {
                            for (var f = 0; f < c.length; f++) {
                                if (b[d] === c[f]) {
                                    j && f <= l && (l--, f <= m && m--), c.splice(f--, 1);
                                    if (a.unique) {
                                        break
                                    }
                                }
                            }
                        }
                    }
                    return this
                },
                has: function(a) {
                    if (c) {
                        var b = 0,
                            d = c.length;
                        for (; b < d; b++) {
                            if (a === c[b]) {
                                return !0
                            }
                        }
                    }
                    return !1
                },
                empty: function() {
                    c = [];
                    return this
                },
                disable: function() {
                    c = d = e = b;
                    return this
                },
                disabled: function() {
                    return !c
                },
                lock: function() {
                    d = b, (!e || e === !0) && p.disable();
                    return this
                },
                locked: function() {
                    return !d
                },
                fireWith: function(b, c) {
                    d && (j ? a.once || d.push([b, c]) : (!a.once || !e) && o(b, c));
                    return this
                },
                fire: function() {
                    p.fireWith(this, arguments);
                    return this
                },
                fired: function() {
                    return !!i
                }
            };
        return p
    };
    var i = [].slice;
    f.extend({
        Deferred: function(a) {
            var b = f.Callbacks("once memory"),
                c = f.Callbacks("once memory"),
                d = f.Callbacks("memory"),
                e = "pending",
                g = {
                    resolve: b,
                    reject: c,
                    notify: d
                },
                h = {
                    done: b.add,
                    fail: c.add,
                    progress: d.add,
                    state: function() {
                        return e
                    },
                    isResolved: b.fired,
                    isRejected: c.fired,
                    then: function(a, b, c) {
                        i.done(a).fail(b).progress(c);
                        return this
                    },
                    always: function() {
                        i.done.apply(i, arguments).fail.apply(i, arguments);
                        return this
                    },
                    pipe: function(a, b, c) {
                        return f.Deferred(function(d) {
                            f.each({
                                done: [a, "resolve"],
                                fail: [b, "reject"],
                                progress: [c, "notify"]
                            }, function(a, b) {
                                var c = b[0],
                                    e = b[1],
                                    g;
                                f.isFunction(c) ? i[a](function() {
                                    g = c.apply(this, arguments), g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d : this, [g])
                                }) : i[a](d[e])
                            })
                        }).promise()
                    },
                    promise: function(a) {
                        if (a == null) {
                            a = h
                        } else {
                            for (var b in h) {
                                a[b] = h[b]
                            }
                        }
                        return a
                    }
                },
                i = h.promise({}),
                j;
            for (j in g) {
                i[j] = g[j].fire, i[j + "With"] = g[j].fireWith
            }
            i.done(function() {
                e = "resolved"
            }, c.disable, d.lock).fail(function() {
                e = "rejected"
            }, b.disable, d.lock), a && a.call(i, i);
            return i
        },
        when: function(a) {
            function m(a) {
                return function(b) {
                    e[a] = arguments.length > 1 ? i.call(arguments, 0) : b, j.notifyWith(k, e)
                }
            }

            function l(a) {
                return function(c) {
                    b[a] = arguments.length > 1 ? i.call(arguments, 0) : c, --g || j.resolveWith(j, b)
                }
            }
            var b = i.call(arguments, 0),
                c = 0,
                d = b.length,
                e = Array(d),
                g = d,
                h = d,
                j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(),
                k = j.promise();
            if (d > 1) {
                for (; c < d; c++) {
                    b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g
                }
                g || j.resolveWith(j, b)
            } else {
                j !== a && j.resolveWith(j, d ? [a] : [])
            }
            return k
        }
    }), f.support = function() {
        var b, d, e, g, h, i, j, k, l, m, n, o, p = c.createElement("div"),
            q = c.documentElement;
        p.setAttribute("className", "t"), p.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", d = p.getElementsByTagName("*"), e = p.getElementsByTagName("a")[0];
        if (!d || !d.length || !e) {
            return {}
        }
        g = c.createElement("select"), h = g.appendChild(c.createElement("option")), i = p.getElementsByTagName("input")[0], b = {
            leadingWhitespace: p.firstChild.nodeType === 3,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: /^0.55/.test(e.style.opacity),
            cssFloat: !!e.style.cssFloat,
            checkOn: i.value === "on",
            optSelected: h.selected,
            getSetAttribute: p.className !== "t",
            enctype: !!c.createElement("form").enctype,
            html5Clone: c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            pixelMargin: !0
        }, f.boxModel = b.boxModel = c.compatMode === "CSS1Compat", i.checked = !0, b.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, b.optDisabled = !h.disabled;
        try {
            delete p.test
        } catch (r) {
            b.deleteExpando = !1
        }!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", function() {
            b.noCloneEvent = !1
        }), p.cloneNode(!0).fireEvent("onclick")), i = c.createElement("input"), i.value = "t", i.setAttribute("type", "radio"), b.radioValue = i.value === "t", i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), p.appendChild(i), j = c.createDocumentFragment(), j.appendChild(p.lastChild), b.checkClone = j.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = i.checked, j.removeChild(i), j.appendChild(p);
        if (p.attachEvent) {
            for (n in {
                    submit: 1,
                    change: 1,
                    focusin: 1
                }) {
                m = "on" + n, o = m in p, o || (p.setAttribute(m, "return;"), o = typeof p[m] == "function"), b[n + "Bubbles"] = o
            }
        }
        j.removeChild(p), j = g = h = p = i = null, f(function() {
            var d, e, g, h, i, j, l, m, n, q, r, s, t, u = c.getElementsByTagName("body")[0];
            !u || (m = 1, t = "padding:0;margin:0;border:", r = "position:absolute;top:0;left:0;width:1px;height:1px;", s = t + "0;visibility:hidden;", n = "style='" + r + t + "5px solid #000;", q = "<div " + n + "display:block;'><div style='" + t + "0;display:block;overflow:hidden;'></div></div><table " + n + "' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", d = c.createElement("div"), d.style.cssText = s + "width:0;height:0;position:static;top:0;margin-top:" + m + "px", u.insertBefore(d, u.firstChild), p = c.createElement("div"), d.appendChild(p), p.innerHTML = "<table><tr><td style='" + t + "0;display:none'></td><td>t</td></tr></table>", k = p.getElementsByTagName("td"), o = k[0].offsetHeight === 0, k[0].style.display = "", k[1].style.display = "none", b.reliableHiddenOffsets = o && k[0].offsetHeight === 0, a.getComputedStyle && (p.innerHTML = "", l = c.createElement("div"), l.style.width = "0", l.style.marginRight = "0", p.style.width = "2px", p.appendChild(l), b.reliableMarginRight = (parseInt((a.getComputedStyle(l, null) || {
                marginRight: 0
            }).marginRight, 10) || 0) === 0), typeof p.style.zoom != "undefined" && (p.innerHTML = "", p.style.width = p.style.padding = "1px", p.style.border = 0, p.style.overflow = "hidden", p.style.display = "inline", p.style.zoom = 1, b.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.style.overflow = "visible", p.innerHTML = "<div style='width:5px;'></div>", b.shrinkWrapBlocks = p.offsetWidth !== 3), p.style.cssText = r + s, p.innerHTML = q, e = p.firstChild, g = e.firstChild, i = e.nextSibling.firstChild.firstChild, j = {
                doesNotAddBorder: g.offsetTop !== 5,
                doesAddBorderForTableAndCells: i.offsetTop === 5
            }, g.style.position = "fixed", g.style.top = "20px", j.fixedPosition = g.offsetTop === 20 || g.offsetTop === 15, g.style.position = g.style.top = "", e.style.overflow = "hidden", e.style.position = "relative", j.subtractsBorderForOverflowNotVisible = g.offsetTop === -5, j.doesNotIncludeMarginInBodyOffset = u.offsetTop !== m, a.getComputedStyle && (p.style.marginTop = "1%", b.pixelMargin = (a.getComputedStyle(p, null) || {
                marginTop: 0
            }).marginTop !== "1%"), typeof d.style.zoom != "undefined" && (d.style.zoom = 1), u.removeChild(d), l = p = d = null, f.extend(b, j))
        });
        return b
    }();
    var j = /^(?:\{.*\}|\[.*\])$/,
        k = /([A-Z])/g;
    f.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(a) {
            a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
            return !!a && !m(a)
        },
        data: function(a, c, d, e) {
            if (!!f.acceptData(a)) {
                var g, h, i, j = f.expando,
                    k = typeof c == "string",
                    l = a.nodeType,
                    m = l ? f.cache : a,
                    n = l ? a[j] : a[j] && j,
                    o = c === "events";
                if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b) {
                    return
                }
                n || (l ? a[j] = n = ++f.uuid : n = j), m[n] || (m[n] = {}, l || (m[n].toJSON = f.noop));
                if (typeof c == "object" || typeof c == "function") {
                    e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c)
                }
                g = h = m[n], e || (h.data || (h.data = {}), h = h.data), d !== b && (h[f.camelCase(c)] = d);
                if (o && !h[c]) {
                    return g.events
                }
                k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h;
                return i
            }
        },
        removeData: function(a, b, c) {
            if (!!f.acceptData(a)) {
                var d, e, g, h = f.expando,
                    i = a.nodeType,
                    j = i ? f.cache : a,
                    k = i ? a[h] : h;
                if (!j[k]) {
                    return
                }
                if (b) {
                    d = c ? j[k] : j[k].data;
                    if (d) {
                        f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
                        for (e = 0, g = b.length; e < g; e++) {
                            delete d[b[e]]
                        }
                        if (!(c ? m : f.isEmptyObject)(d)) {
                            return
                        }
                    }
                }
                if (!c) {
                    delete j[k].data;
                    if (!m(j[k])) {
                        return
                    }
                }
                f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null, i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
            }
        },
        _data: function(a, b, c) {
            return f.data(a, b, c, !0)
        },
        acceptData: function(a) {
            if (a.nodeName) {
                var b = f.noData[a.nodeName.toLowerCase()];
                if (b) {
                    return b !== !0 && a.getAttribute("classid") === b
                }
            }
            return !0
        }
    }), f.fn.extend({
        data: function(a, c) {
            var d, e, g, h, i, j = this[0],
                k = 0,
                m = null;
            if (a === b) {
                if (this.length) {
                    m = f.data(j);
                    if (j.nodeType === 1 && !f._data(j, "parsedAttrs")) {
                        g = j.attributes;
                        for (i = g.length; k < i; k++) {
                            h = g[k].name, h.indexOf("data-") === 0 && (h = f.camelCase(h.substring(5)), l(j, h, m[h]))
                        }
                        f._data(j, "parsedAttrs", !0)
                    }
                }
                return m
            }
            if (typeof a == "object") {
                return this.each(function() {
                    f.data(this, a)
                })
            }
            d = a.split(".", 2), d[1] = d[1] ? "." + d[1] : "", e = d[1] + "!";
            return f.access(this, function(c) {
                if (c === b) {
                    m = this.triggerHandler("getData" + e, [d[0]]), m === b && j && (m = f.data(j, a), m = l(j, a, m));
                    return m === b && d[1] ? this.data(d[0]) : m
                }
                d[1] = c, this.each(function() {
                    var b = f(this);
                    b.triggerHandler("setData" + e, d), f.data(this, a, c), b.triggerHandler("changeData" + e, d)
                })
            }, null, c, arguments.length > 1, null, !1)
        },
        removeData: function(a) {
            return this.each(function() {
                f.removeData(this, a)
            })
        }
    }), f.extend({
        _mark: function(a, b) {
            a && (b = (b || "fx") + "mark", f._data(a, b, (f._data(a, b) || 0) + 1))
        },
        _unmark: function(a, b, c) {
            a !== !0 && (c = b, b = a, a = !1);
            if (b) {
                c = c || "fx";
                var d = c + "mark",
                    e = a ? 0 : (f._data(b, d) || 1) - 1;
                e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark"))
            }
        },
        queue: function(a, b, c) {
            var d;
            if (a) {
                b = (b || "fx") + "queue", d = f._data(a, b), c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c));
                return d || []
            }
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = f.queue(a, b),
                d = c.shift(),
                e = {};
            d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), f._data(a, b + ".run", e), d.call(a, function() {
                f.dequeue(a, b)
            }, e)), c.length || (f.removeData(a, b + "queue " + b + ".run", !0), n(a, b, "queue"))
        }
    }), f.fn.extend({
        queue: function(a, c) {
            var d = 2;
            typeof a != "string" && (c = a, a = "fx", d--);
            if (arguments.length < d) {
                return f.queue(this[0], a)
            }
            return c === b ? this : this.each(function() {
                var b = f.queue(this, a, c);
                a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                f.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx";
            return this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, c) {
            function m() {
                --h || d.resolveWith(e, [e])
            }
            typeof a != "string" && (c = a, a = b), a = a || "fx";
            var d = f.Deferred(),
                e = this,
                g = e.length,
                h = 1,
                i = a + "defer",
                j = a + "queue",
                k = a + "mark",
                l;
            while (g--) {
                if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0)) {
                    h++, l.add(m)
                }
            }
            m();
            return d.promise(c)
        }
    });
    var o = /[\n\t\r]/g,
        p = /\s+/,
        q = /\r/g,
        r = /^(?:button|input)$/i,
        s = /^(?:button|input|object|select|textarea)$/i,
        t = /^a(?:rea)?$/i,
        u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        v = f.support.getSetAttribute,
        w, x, y;
    f.fn.extend({
        attr: function(a, b) {
            return f.access(this, f.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                f.removeAttr(this, a)
            })
        },
        prop: function(a, b) {
            return f.access(this, f.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            a = f.propFix[a] || a;
            return this.each(function() {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {}
            })
        },
        addClass: function(a) {
            var b, c, d, e, g, h, i;
            if (f.isFunction(a)) {
                return this.each(function(b) {
                    f(this).addClass(a.call(this, b, this.className))
                })
            }
            if (a && typeof a == "string") {
                b = a.split(p);
                for (c = 0, d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1) {
                        if (!e.className && b.length === 1) {
                            e.className = a
                        } else {
                            g = " " + e.className + " ";
                            for (h = 0, i = b.length; h < i; h++) {
                                ~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ")
                            }
                            e.className = f.trim(g)
                        }
                    }
                }
            }
            return this
        },
        removeClass: function(a) {
            var c, d, e, g, h, i, j;
            if (f.isFunction(a)) {
                return this.each(function(b) {
                    f(this).removeClass(a.call(this, b, this.className))
                })
            }
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(p);
                for (d = 0, e = this.length; d < e; d++) {
                    g = this[d];
                    if (g.nodeType === 1 && g.className) {
                        if (a) {
                            h = (" " + g.className + " ").replace(o, " ");
                            for (i = 0, j = c.length; i < j; i++) {
                                h = h.replace(" " + c[i] + " ", " ")
                            }
                            g.className = f.trim(h)
                        } else {
                            g.className = ""
                        }
                    }
                }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a,
                d = typeof b == "boolean";
            if (f.isFunction(a)) {
                return this.each(function(c) {
                    f(this).toggleClass(a.call(this, c, this.className, b), b)
                })
            }
            return this.each(function() {
                if (c === "string") {
                    var e, g = 0,
                        h = f(this),
                        i = b,
                        j = a.split(p);
                    while (e = j[g++]) {
                        i = d ? i : !h.hasClass(e), h[i ? "addClass" : "removeClass"](e)
                    }
                } else {
                    if (c === "undefined" || c === "boolean") {
                        this.className && f._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
                    }
                }
            })
        },
        hasClass: function(a) {
            var b = " " + a + " ",
                c = 0,
                d = this.length;
            for (; c < d; c++) {
                if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1) {
                    return !0
                }
            }
            return !1
        },
        val: function(a) {
            var c, d, e, g = this[0];
            if (!!arguments.length) {
                e = f.isFunction(a);
                return this.each(function(d) {
                    var g = f(this),
                        h;
                    if (this.nodeType === 1) {
                        e ? h = a.call(this, d, g.val()) : h = a, h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function(a) {
                            return a == null ? "" : a + ""
                        })), c = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()];
                        if (!c || !("set" in c) || c.set(this, h, "value") === b) {
                            this.value = h
                        }
                    }
                })
            }
            if (g) {
                c = f.valHooks[g.type] || f.valHooks[g.nodeName.toLowerCase()];
                if (c && "get" in c && (d = c.get(g, "value")) !== b) {
                    return d
                }
                d = g.value;
                return typeof d == "string" ? d.replace(q, "") : d == null ? "" : d
            }
        }
    }), f.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function(a) {
                    var b, c, d, e, g = a.selectedIndex,
                        h = [],
                        i = a.options,
                        j = a.type === "select-one";
                    if (g < 0) {
                        return null
                    }
                    c = j ? g : 0, d = j ? g + 1 : i.length;
                    for (; c < d; c++) {
                        e = i[c];
                        if (e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
                            b = f(e).val();
                            if (j) {
                                return b
                            }
                            h.push(b)
                        }
                    }
                    if (j && !h.length && i.length) {
                        return f(i[g]).val()
                    }
                    return h
                },
                set: function(a, b) {
                    var c = f.makeArray(b);
                    f(a).find("option").each(function() {
                        this.selected = f.inArray(f(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1);
                    return c
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(a, c, d, e) {
            var g, h, i, j = a.nodeType;
            if (!!a && j !== 3 && j !== 8 && j !== 2) {
                if (e && c in f.attrFn) {
                    return f(a)[c](d)
                }
                if (typeof a.getAttribute == "undefined") {
                    return f.prop(a, c, d)
                }
                i = j !== 1 || !f.isXMLDoc(a), i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x : w));
                if (d !== b) {
                    if (d === null) {
                        f.removeAttr(a, c);
                        return
                    }
                    if (h && "set" in h && i && (g = h.set(a, d, c)) !== b) {
                        return g
                    }
                    a.setAttribute(c, "" + d);
                    return d
                }
                if (h && "get" in h && i && (g = h.get(a, c)) !== null) {
                    return g
                }
                g = a.getAttribute(c);
                return g === null ? b : g
            }
        },
        removeAttr: function(a, b) {
            var c, d, e, g, h, i = 0;
            if (b && a.nodeType === 1) {
                d = b.toLowerCase().split(p), g = d.length;
                for (; i < g; i++) {
                    e = d[i], e && (c = f.propFix[e] || e, h = u.test(e), h || f.attr(a, e, ""), a.removeAttribute(v ? e : c), h && c in a && (a[c] = !1))
                }
            }
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (r.test(a.nodeName) && a.parentNode) {
                        f.error("type property can't be changed")
                    } else {
                        if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
                            var c = a.value;
                            a.setAttribute("type", b), c && (a.value = c);
                            return b
                        }
                    }
                }
            },
            value: {
                get: function(a, b) {
                    if (w && f.nodeName(a, "button")) {
                        return w.get(a, b)
                    }
                    return b in a ? a.value : null
                },
                set: function(a, b, c) {
                    if (w && f.nodeName(a, "button")) {
                        return w.set(a, b, c)
                    }
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(a, c, d) {
            var e, g, h, i = a.nodeType;
            if (!!a && i !== 3 && i !== 8 && i !== 2) {
                h = i !== 1 || !f.isXMLDoc(a), h && (c = f.propFix[c] || c, g = f.propHooks[c]);
                return d !== b ? g && "set" in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && "get" in g && (e = g.get(a, c)) !== null ? e : a[c]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), f.attrHooks.tabindex = f.propHooks.tabIndex, x = {
        get: function(a, c) {
            var d, e = f.prop(a, c);
            return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        },
        set: function(a, b, c) {
            var d;
            b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()));
            return c
        }
    }, v || (y = {
        name: !0,
        id: !0,
        coords: !0
    }, w = f.valHooks.button = {
        get: function(a, c) {
            var d;
            d = a.getAttributeNode(c);
            return d && (y[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b
        },
        set: function(a, b, d) {
            var e = a.getAttributeNode(d);
            e || (e = c.createAttribute(d), a.setAttributeNode(e));
            return e.nodeValue = b + ""
        }
    }, f.attrHooks.tabindex.set = w.set, f.each(["width", "height"], function(a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {
            set: function(a, c) {
                if (c === "") {
                    a.setAttribute(b, "auto");
                    return c
                }
            }
        })
    }), f.attrHooks.contenteditable = {
        get: w.get,
        set: function(a, b, c) {
            b === "" && (b = "false"), w.set(a, b, c)
        }
    }), f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function(a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            get: function(a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b : d
            }
        })
    }), f.support.style || (f.attrHooks.style = {
        get: function(a) {
            return a.style.cssText.toLowerCase() || b
        },
        set: function(a, b) {
            return a.style.cssText = "" + b
        }
    }), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
            return null
        }
    })), f.support.enctype || (f.propFix.enctype = "encoding"), f.support.checkOn || f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = {
            get: function(a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }
        }
    }), f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            set: function(a, b) {
                if (f.isArray(b)) {
                    return a.checked = f.inArray(f(a).val(), b) >= 0
                }
            }
        })
    });
    var z = /^(?:textarea|input|select)$/i,
        A = /^([^\.]*)?(?:\.(.+))?$/,
        B = /(?:^|\s)hover(\.\S+)?\b/,
        C = /^key/,
        D = /^(?:mouse|contextmenu)|click/,
        E = /^(?:focusinfocus|focusoutblur)$/,
        F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        G = function(a) {
            var b = F.exec(a);
            b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"));
            return b
        },
        H = function(a, b) {
            var c = a.attributes || {};
            return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value))
        },
        I = function(a) {
            return f.event.special.hover ? a : a.replace(B, "mouseenter$1 mouseleave$1")
        };
    f.event = {
            add: function(a, c, d, e, g) {
                var h, i, j, k, l, m, n, o, p, q, r, s;
                if (!(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) {
                    d.handler && (p = d, d = p.handler, g = p.selector), d.guid || (d.guid = f.guid++), j = h.events, j || (h.events = j = {}), i = h.handle, i || (h.handle = i = function(a) {
                        return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(i.elem, arguments) : b
                    }, i.elem = a), c = f.trim(I(c)).split(" ");
                    for (k = 0; k < c.length; k++) {
                        l = A.exec(c[k]) || [], m = l[1], n = (l[2] || "").split(".").sort(), s = f.event.special[m] || {}, m = (g ? s.delegateType : s.bindType) || m, s = f.event.special[m] || {}, o = f.extend({
                            type: m,
                            origType: l[1],
                            data: e,
                            handler: d,
                            guid: d.guid,
                            selector: g,
                            quick: g && G(g),
                            namespace: n.join(".")
                        }, p), r = j[m];
                        if (!r) {
                            r = j[m] = [], r.delegateCount = 0;
                            if (!s.setup || s.setup.call(a, e, n, i) === !1) {
                                a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
                            }
                        }
                        s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)), g ? r.splice(r.delegateCount++, 0, o) : r.push(o), f.event.global[m] = !0
                    }
                    a = null
                }
            },
            global: {},
            remove: function(a, b, c, d, e) {
                var g = f.hasData(a) && f._data(a),
                    h, i, j, k, l, m, n, o, p, q, r, s;
                if (!!g && !!(o = g.events)) {
                    b = f.trim(I(b || "")).split(" ");
                    for (h = 0; h < b.length; h++) {
                        i = A.exec(b[h]) || [], j = k = i[1], l = i[2];
                        if (!j) {
                            for (j in o) {
                                f.event.remove(a, j + b[h], c, d, !0)
                            }
                            continue
                        }
                        p = f.event.special[j] || {}, j = (d ? p.delegateType : p.bindType) || j, r = o[j] || [], m = r.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                        for (n = 0; n < r.length; n++) {
                            s = r[n], (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1), s.selector && r.delegateCount--, p.remove && p.remove.call(a, s))
                        }
                        r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle), delete o[j])
                    }
                    f.isEmptyObject(o) && (q = g.handle, q && (q.elem = null), f.removeData(a, ["events", "handle"], !0))
                }
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(c, d, e, g) {
                if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
                    var h = c.type || c,
                        i = [],
                        j, k, l, m, n, o, p, q, r, s;
                    if (E.test(h + f.event.triggered)) {
                        return
                    }
                    h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0), h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
                    if ((!e || f.event.customEvent[h]) && !f.event.global[h]) {
                        return
                    }
                    c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.isTrigger = !0, c.exclusive = k, c.namespace = i.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, o = h.indexOf(":") < 0 ? "on" + h : "";
                    if (!e) {
                        j = f.cache;
                        for (l in j) {
                            j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0)
                        }
                        return
                    }
                    c.result = b, c.target || (c.target = e), d = d != null ? f.makeArray(d) : [], d.unshift(c), p = f.event.special[h] || {};
                    if (p.trigger && p.trigger.apply(e, d) === !1) {
                        return
                    }
                    r = [
                        [e, p.bindType || h]
                    ];
                    if (!g && !p.noBubble && !f.isWindow(e)) {
                        s = p.delegateType || h, m = E.test(s + h) ? e : e.parentNode, n = null;
                        for (; m; m = m.parentNode) {
                            r.push([m, s]), n = m
                        }
                        n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
                    }
                    for (l = 0; l < r.length && !c.isPropagationStopped(); l++) {
                        m = r[l][0], c.type = r[l][1], q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"), q && q.apply(m, d), q = o && m[o], q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault()
                    }
                    c.type = h, !g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered = b, n && (e[o] = n));
                    return c.result
                }
            },
            dispatch: function(c) {
                c = f.event.fix(c || a.event);
                var d = (f._data(this, "events") || {})[c.type] || [],
                    e = d.delegateCount,
                    g = [].slice.call(arguments, 0),
                    h = !c.exclusive && !c.namespace,
                    i = f.event.special[c.type] || {},
                    j = [],
                    k, l, m, n, o, p, q, r, s, t, u;
                g[0] = c, c.delegateTarget = this;
                if (!i.preDispatch || i.preDispatch.call(this, c) !== !1) {
                    if (e && (!c.button || c.type !== "click")) {
                        n = f(this), n.context = this.ownerDocument || this;
                        for (m = c.target; m != this; m = m.parentNode || this) {
                            if (m.disabled !== !0) {
                                p = {}, r = [], n[0] = m;
                                for (k = 0; k < e; k++) {
                                    s = d[k], t = s.selector, p[t] === b && (p[t] = s.quick ? H(m, s.quick) : n.is(t)), p[t] && r.push(s)
                                }
                                r.length && j.push({
                                    elem: m,
                                    matches: r
                                })
                            }
                        }
                    }
                    d.length > e && j.push({
                        elem: this,
                        matches: d.slice(e)
                    });
                    for (k = 0; k < j.length && !c.isPropagationStopped(); k++) {
                        q = j[k], c.currentTarget = q.elem;
                        for (l = 0; l < q.matches.length && !c.isImmediatePropagationStopped(); l++) {
                            s = q.matches[l];
                            if (h || !c.namespace && !s.namespace || c.namespace_re && c.namespace_re.test(s.namespace)) {
                                c.data = s.data, c.handleObj = s, o = ((f.event.special[s.origType] || {}).handle || s.handler).apply(q.elem, g), o !== b && (c.result = o, o === !1 && (c.preventDefault(), c.stopPropagation()))
                            }
                        }
                    }
                    i.postDispatch && i.postDispatch.call(this, c);
                    return c.result
                }
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode);
                    return a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, d) {
                    var e, f, g, h = d.button,
                        i = d.fromElement;
                    a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
                    return a
                }
            },
            fix: function(a) {
                if (a[f.expando]) {
                    return a
                }
                var d, e, g = a,
                    h = f.event.fixHooks[a.type] || {},
                    i = h.props ? this.props.concat(h.props) : this.props;
                a = f.Event(g);
                for (d = i.length; d;) {
                    e = i[--d], a[e] = g[e]
                }
                a.target || (a.target = g.srcElement || c), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey);
                return h.filter ? h.filter(a, g) : a
            },
            special: {
                ready: {
                    setup: f.bindReady
                },
                load: {
                    noBubble: !0
                },
                focus: {
                    delegateType: "focusin"
                },
                blur: {
                    delegateType: "focusout"
                },
                beforeunload: {
                    setup: function(a, b, c) {
                        f.isWindow(this) && (this.onbeforeunload = c)
                    },
                    teardown: function(a, b) {
                        this.onbeforeunload === b && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function(a, b, c, d) {
                var e = f.extend(new f.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
            }
        }, f.event.handle = f.event.dispatch, f.removeEvent = c.removeEventListener ? function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        } : function(a, b, c) {
            a.detachEvent && a.detachEvent("on" + b, c)
        }, f.Event = function(a, b) {
            if (!(this instanceof f.Event)) {
                return new f.Event(a, b)
            }
            a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K : J) : this.type = a, b && f.extend(this, b), this.timeStamp = a && a.timeStamp || f.now(), this[f.expando] = !0
        }, f.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = K;
                var a = this.originalEvent;
                !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function() {
                this.isPropagationStopped = K;
                var a = this.originalEvent;
                !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = K, this.stopPropagation()
            },
            isDefaultPrevented: J,
            isPropagationStopped: J,
            isImmediatePropagationStopped: J
        }, f.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(a, b) {
            f.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c = this,
                        d = a.relatedTarget,
                        e = a.handleObj,
                        g = e.selector,
                        h;
                    if (!d || d !== c && !f.contains(c, d)) {
                        a.type = e.origType, h = e.handler.apply(this, arguments), a.type = b
                    }
                    return h
                }
            }
        }), f.support.submitBubbles || (f.event.special.submit = {
            setup: function() {
                if (f.nodeName(this, "form")) {
                    return !1
                }
                f.event.add(this, "click._submit keypress._submit", function(a) {
                    var c = a.target,
                        d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b;
                    d && !d._submit_attached && (f.event.add(d, "submit._submit", function(a) {
                        a._submit_bubble = !0
                    }), d._submit_attached = !0)
                })
            },
            postDispatch: function(a) {
                a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0))
            },
            teardown: function() {
                if (f.nodeName(this, "form")) {
                    return !1
                }
                f.event.remove(this, "._submit")
            }
        }), f.support.changeBubbles || (f.event.special.change = {
            setup: function() {
                if (z.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") {
                        f.event.add(this, "propertychange._change", function(a) {
                            a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                        }), f.event.add(this, "click._change", function(a) {
                            this._just_changed && !a.isTrigger && (this._just_changed = !1, f.event.simulate("change", this, a, !0))
                        })
                    }
                    return !1
                }
                f.event.add(this, "beforeactivate._change", function(a) {
                    var b = a.target;
                    z.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change", function(a) {
                        this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate("change", this.parentNode, a, !0)
                    }), b._change_attached = !0)
                })
            },
            handle: function(a) {
                var b = a.target;
                if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") {
                    return a.handleObj.handler.apply(this, arguments)
                }
            },
            teardown: function() {
                f.event.remove(this, "._change");
                return z.test(this.nodeName)
            }
        }), f.support.focusinBubbles || f.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var d = 0,
                e = function(a) {
                    f.event.simulate(b, a.target, f.event.fix(a), !0)
                };
            f.event.special[b] = {
                setup: function() {
                    d++ === 0 && c.addEventListener(a, e, !0)
                },
                teardown: function() {
                    --d === 0 && c.removeEventListener(a, e, !0)
                }
            }
        }), f.fn.extend({
            on: function(a, c, d, e, g) {
                var h, i;
                if (typeof a == "object") {
                    typeof c != "string" && (d = d || c, c = b);
                    for (i in a) {
                        this.on(i, c, d, a[i], g)
                    }
                    return this
                }
                d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
                if (e === !1) {
                    e = J
                } else {
                    if (!e) {
                        return this
                    }
                }
                g === 1 && (h = e, e = function(a) {
                    f().off(a);
                    return h.apply(this, arguments)
                }, e.guid = h.guid || (h.guid = f.guid++));
                return this.each(function() {
                    f.event.add(this, a, e, d, c)
                })
            },
            one: function(a, b, c, d) {
                return this.on(a, b, c, d, 1)
            },
            off: function(a, c, d) {
                if (a && a.preventDefault && a.handleObj) {
                    var e = a.handleObj;
                    f(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler);
                    return this
                }
                if (typeof a == "object") {
                    for (var g in a) {
                        this.off(g, c, a[g])
                    }
                    return this
                }
                if (c === !1 || typeof c == "function") {
                    d = c, c = b
                }
                d === !1 && (d = J);
                return this.each(function() {
                    f.event.remove(this, a, d, c)
                })
            },
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            live: function(a, b, c) {
                f(this.context).on(a, this.selector, b, c);
                return this
            },
            die: function(a, b) {
                f(this.context).off(a, this.selector || "**", b);
                return this
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
            },
            trigger: function(a, b) {
                return this.each(function() {
                    f.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                if (this[0]) {
                    return f.event.trigger(a, b, this[0], !0)
                }
            },
            toggle: function(a) {
                var b = arguments,
                    c = a.guid || f.guid++,
                    d = 0,
                    e = function(c) {
                        var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
                        f._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault();
                        return b[e].apply(this, arguments) || !1
                    };
                e.guid = c;
                while (d < b.length) {
                    b[d++].guid = c
                }
                return this.click(e)
            },
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        }), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            f.fn[b] = function(a, c) {
                c == null && (c = a, a = null);
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }, f.attrFn && (f.attrFn[b] = !0), C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks), D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
        }),
        function() {
            function x(a, b, c, e, f, g) {
                for (var h = 0, i = e.length; h < i; h++) {
                    var j = e[h];
                    if (j) {
                        var k = !1;
                        j = j[a];
                        while (j) {
                            if (j[d] === c) {
                                k = e[j.sizset];
                                break
                            }
                            if (j.nodeType === 1) {
                                g || (j[d] = c, j.sizset = h);
                                if (typeof b != "string") {
                                    if (j === b) {
                                        k = !0;
                                        break
                                    }
                                } else {
                                    if (m.filter(b, [j]).length > 0) {
                                        k = j;
                                        break
                                    }
                                }
                            }
                            j = j[a]
                        }
                        e[h] = k
                    }
                }
            }

            function w(a, b, c, e, f, g) {
                for (var h = 0, i = e.length; h < i; h++) {
                    var j = e[h];
                    if (j) {
                        var k = !1;
                        j = j[a];
                        while (j) {
                            if (j[d] === c) {
                                k = e[j.sizset];
                                break
                            }
                            j.nodeType === 1 && !g && (j[d] = c, j.sizset = h);
                            if (j.nodeName.toLowerCase() === b) {
                                k = j;
                                break
                            }
                            j = j[a]
                        }
                        e[h] = k
                    }
                }
            }
            var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                d = "sizcache" + (Math.random() + "").replace(".", ""),
                e = 0,
                g = Object.prototype.toString,
                h = !1,
                i = !0,
                j = /\\/g,
                k = /\r\n/g,
                l = /\W/;
            [0, 0].sort(function() {
                i = !1;
                return 0
            });
            var m = function(b, d, e, f) {
                e = e || [], d = d || c;
                var h = d;
                if (d.nodeType !== 1 && d.nodeType !== 9) {
                    return []
                }
                if (!b || typeof b != "string") {
                    return e
                }
                var i, j, k, l, n, q, r, t, u = !0,
                    v = m.isXML(d),
                    w = [],
                    x = b;
                do {
                    a.exec(""), i = a.exec(x);
                    if (i) {
                        x = i[3], w.push(i[1]);
                        if (i[2]) {
                            l = i[3];
                            break
                        }
                    }
                } while (i);
                if (w.length > 1 && p.exec(b)) {
                    if (w.length === 2 && o.relative[w[0]]) {
                        j = y(w[0] + w[1], d, f)
                    } else {
                        j = o.relative[w[0]] ? [d] : m(w.shift(), d);
                        while (w.length) {
                            b = w.shift(), o.relative[b] && (b += w.shift()), j = y(b, j, f)
                        }
                    }
                } else {
                    !f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
                    if (d) {
                        n = f ? {
                            expr: w.pop(),
                            set: s(f)
                        } : m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d.parentNode ? d.parentNode : d, v), j = n.expr ? m.filter(n.expr, n.set) : n.set, w.length > 0 ? k = s(j) : u = !1;
                        while (w.length) {
                            q = w.pop(), r = q, o.relative[q] ? r = w.pop() : q = "", r == null && (r = d), o.relative[q](k, r, v)
                        }
                    } else {
                        k = w = []
                    }
                }
                k || (k = j), k || m.error(q || b);
                if (g.call(k) === "[object Array]") {
                    if (!u) {
                        e.push.apply(e, k)
                    } else {
                        if (d && d.nodeType === 1) {
                            for (t = 0; k[t] != null; t++) {
                                k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t])
                            }
                        } else {
                            for (t = 0; k[t] != null; t++) {
                                k[t] && k[t].nodeType === 1 && e.push(j[t])
                            }
                        }
                    }
                } else {
                    s(k, e)
                }
                l && (m(l, h, e, f), m.uniqueSort(e));
                return e
            };
            m.uniqueSort = function(a) {
                if (u) {
                    h = i, a.sort(u);
                    if (h) {
                        for (var b = 1; b < a.length; b++) {
                            a[b] === a[b - 1] && a.splice(b--, 1)
                        }
                    }
                }
                return a
            }, m.matches = function(a, b) {
                return m(a, null, null, b)
            }, m.matchesSelector = function(a, b) {
                return m(b, null, null, [a]).length > 0
            }, m.find = function(a, b, c) {
                var d, e, f, g, h, i;
                if (!a) {
                    return []
                }
                for (e = 0, f = o.order.length; e < f; e++) {
                    h = o.order[e];
                    if (g = o.leftMatch[h].exec(a)) {
                        i = g[1], g.splice(1, 1);
                        if (i.substr(i.length - 1) !== "\\") {
                            g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c);
                            if (d != null) {
                                a = a.replace(o.match[h], "");
                                break
                            }
                        }
                    }
                }
                d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
                return {
                    set: d,
                    expr: a
                }
            }, m.filter = function(a, c, d, e) {
                var f, g, h, i, j, k, l, n, p, q = a,
                    r = [],
                    s = c,
                    t = c && c[0] && m.isXML(c[0]);
                while (a && c.length) {
                    for (h in o.filter) {
                        if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                            k = o.filter[h], l = f[1], g = !1, f.splice(1, 1);
                            if (l.substr(l.length - 1) === "\\") {
                                continue
                            }
                            s === r && (r = []);
                            if (o.preFilter[h]) {
                                f = o.preFilter[h](f, s, d, r, e, t);
                                if (!f) {
                                    g = i = !0
                                } else {
                                    if (f === !0) {
                                        continue
                                    }
                                }
                            }
                            if (f) {
                                for (n = 0;
                                    (j = s[n]) != null; n++) {
                                    j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0))
                                }
                            }
                            if (i !== b) {
                                d || (s = r), a = a.replace(o.match[h], "");
                                if (!g) {
                                    return []
                                }
                                break
                            }
                        }
                    }
                    if (a === q) {
                        if (g == null) {
                            m.error(a)
                        } else {
                            break
                        }
                    }
                    q = a
                }
                return s
            }, m.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            };
            var n = m.getText = function(a) {
                    var b, c, d = a.nodeType,
                        e = "";
                    if (d) {
                        if (d === 1 || d === 9 || d === 11) {
                            if (typeof a.textContent == "string") {
                                return a.textContent
                            }
                            if (typeof a.innerText == "string") {
                                return a.innerText.replace(k, "")
                            }
                            for (a = a.firstChild; a; a = a.nextSibling) {
                                e += n(a)
                            }
                        } else {
                            if (d === 3 || d === 4) {
                                return a.nodeValue
                            }
                        }
                    } else {
                        for (b = 0; c = a[b]; b++) {
                            c.nodeType !== 8 && (e += n(c))
                        }
                    }
                    return e
                },
                o = m.selectors = {
                    order: ["ID", "NAME", "TAG"],
                    match: {
                        ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                        ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                        TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                        CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                        POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                        PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                    },
                    leftMatch: {},
                    attrMap: {
                        "class": "className",
                        "for": "htmlFor"
                    },
                    attrHandle: {
                        href: function(a) {
                            return a.getAttribute("href")
                        },
                        type: function(a) {
                            return a.getAttribute("type")
                        }
                    },
                    relative: {
                        "+": function(a, b) {
                            var c = typeof b == "string",
                                d = c && !l.test(b),
                                e = c && !d;
                            d && (b = b.toLowerCase());
                            for (var f = 0, g = a.length, h; f < g; f++) {
                                if (h = a[f]) {
                                    while ((h = h.previousSibling) && h.nodeType !== 1) {}
                                    a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                                }
                            }
                            e && m.filter(b, a, !0)
                        },
                        ">": function(a, b) {
                            var c, d = typeof b == "string",
                                e = 0,
                                f = a.length;
                            if (d && !l.test(b)) {
                                b = b.toLowerCase();
                                for (; e < f; e++) {
                                    c = a[e];
                                    if (c) {
                                        var g = c.parentNode;
                                        a[e] = g.nodeName.toLowerCase() === b ? g : !1
                                    }
                                }
                            } else {
                                for (; e < f; e++) {
                                    c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b)
                                }
                                d && m.filter(b, a, !0)
                            }
                        },
                        "": function(a, b, c) {
                            var d, f = e++,
                                g = x;
                            typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("parentNode", b, f, a, d, c)
                        },
                        "~": function(a, b, c) {
                            var d, f = e++,
                                g = x;
                            typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("previousSibling", b, f, a, d, c)
                        }
                    },
                    find: {
                        ID: function(a, b, c) {
                            if (typeof b.getElementById != "undefined" && !c) {
                                var d = b.getElementById(a[1]);
                                return d && d.parentNode ? [d] : []
                            }
                        },
                        NAME: function(a, b) {
                            if (typeof b.getElementsByName != "undefined") {
                                var c = [],
                                    d = b.getElementsByName(a[1]);
                                for (var e = 0, f = d.length; e < f; e++) {
                                    d[e].getAttribute("name") === a[1] && c.push(d[e])
                                }
                                return c.length === 0 ? null : c
                            }
                        },
                        TAG: function(a, b) {
                            if (typeof b.getElementsByTagName != "undefined") {
                                return b.getElementsByTagName(a[1])
                            }
                        }
                    },
                    preFilter: {
                        CLASS: function(a, b, c, d, e, f) {
                            a = " " + a[1].replace(j, "") + " ";
                            if (f) {
                                return a
                            }
                            for (var g = 0, h;
                                (h = b[g]) != null; g++) {
                                h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1))
                            }
                            return !1
                        },
                        ID: function(a) {
                            return a[1].replace(j, "")
                        },
                        TAG: function(a, b) {
                            return a[1].replace(j, "").toLowerCase()
                        },
                        CHILD: function(a) {
                            if (a[1] === "nth") {
                                a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                                var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                                a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
                            } else {
                                a[2] && m.error(a[0])
                            }
                            a[0] = e++;
                            return a
                        },
                        ATTR: function(a, b, c, d, e, f) {
                            var g = a[1] = a[1].replace(j, "");
                            !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), a[2] === "~=" && (a[4] = " " + a[4] + " ");
                            return a
                        },
                        PSEUDO: function(b, c, d, e, f) {
                            if (b[1] === "not") {
                                if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) {
                                    b[3] = m(b[3], null, null, c)
                                } else {
                                    var g = m.filter(b[3], c, d, !0 ^ f);
                                    d || e.push.apply(e, g);
                                    return !1
                                }
                            } else {
                                if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0])) {
                                    return !0
                                }
                            }
                            return b
                        },
                        POS: function(a) {
                            a.unshift(!0);
                            return a
                        }
                    },
                    filters: {
                        enabled: function(a) {
                            return a.disabled === !1 && a.type !== "hidden"
                        },
                        disabled: function(a) {
                            return a.disabled === !0
                        },
                        checked: function(a) {
                            return a.checked === !0
                        },
                        selected: function(a) {
                            a.parentNode && a.parentNode.selectedIndex;
                            return a.selected === !0
                        },
                        parent: function(a) {
                            return !!a.firstChild
                        },
                        empty: function(a) {
                            return !a.firstChild
                        },
                        has: function(a, b, c) {
                            return !!m(c[3], a).length
                        },
                        header: function(a) {
                            return /h\d/i.test(a.nodeName)
                        },
                        text: function(a) {
                            var b = a.getAttribute("type"),
                                c = a.type;
                            return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
                        },
                        radio: function(a) {
                            return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                        },
                        checkbox: function(a) {
                            return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
                        },
                        file: function(a) {
                            return a.nodeName.toLowerCase() === "input" && "file" === a.type
                        },
                        password: function(a) {
                            return a.nodeName.toLowerCase() === "input" && "password" === a.type
                        },
                        submit: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return (b === "input" || b === "button") && "submit" === a.type
                        },
                        image: function(a) {
                            return a.nodeName.toLowerCase() === "input" && "image" === a.type
                        },
                        reset: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return (b === "input" || b === "button") && "reset" === a.type
                        },
                        button: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return b === "input" && "button" === a.type || b === "button"
                        },
                        input: function(a) {
                            return /input|select|textarea|button/i.test(a.nodeName)
                        },
                        focus: function(a) {
                            return a === a.ownerDocument.activeElement
                        }
                    },
                    setFilters: {
                        first: function(a, b) {
                            return b === 0
                        },
                        last: function(a, b, c, d) {
                            return b === d.length - 1
                        },
                        even: function(a, b) {
                            return b % 2 === 0
                        },
                        odd: function(a, b) {
                            return b % 2 === 1
                        },
                        lt: function(a, b, c) {
                            return b < c[3] - 0
                        },
                        gt: function(a, b, c) {
                            return b > c[3] - 0
                        },
                        nth: function(a, b, c) {
                            return c[3] - 0 === b
                        },
                        eq: function(a, b, c) {
                            return c[3] - 0 === b
                        }
                    },
                    filter: {
                        PSEUDO: function(a, b, c, d) {
                            var e = b[1],
                                f = o.filters[e];
                            if (f) {
                                return f(a, c, b, d)
                            }
                            if (e === "contains") {
                                return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0
                            }
                            if (e === "not") {
                                var g = b[3];
                                for (var h = 0, i = g.length; h < i; h++) {
                                    if (g[h] === a) {
                                        return !1
                                    }
                                }
                                return !0
                            }
                            m.error(e)
                        },
                        CHILD: function(a, b) {
                            var c, e, f, g, h, i, j, k = b[1],
                                l = a;
                            switch (k) {
                                case "only":
                                case "first":
                                    while (l = l.previousSibling) {
                                        if (l.nodeType === 1) {
                                            return !1
                                        }
                                    }
                                    if (k === "first") {
                                        return !0
                                    }
                                    l = a;
                                case "last":
                                    while (l = l.nextSibling) {
                                        if (l.nodeType === 1) {
                                            return !1
                                        }
                                    }
                                    return !0;
                                case "nth":
                                    c = b[2], e = b[3];
                                    if (c === 1 && e === 0) {
                                        return !0
                                    }
                                    f = b[0], g = a.parentNode;
                                    if (g && (g[d] !== f || !a.nodeIndex)) {
                                        i = 0;
                                        for (l = g.firstChild; l; l = l.nextSibling) {
                                            l.nodeType === 1 && (l.nodeIndex = ++i)
                                        }
                                        g[d] = f
                                    }
                                    j = a.nodeIndex - e;
                                    return c === 0 ? j === 0 : j % c === 0 && j / c >= 0
                            }
                        },
                        ID: function(a, b) {
                            return a.nodeType === 1 && a.getAttribute("id") === b
                        },
                        TAG: function(a, b) {
                            return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b
                        },
                        CLASS: function(a, b) {
                            return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                        },
                        ATTR: function(a, b) {
                            var c = b[1],
                                d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
                                e = d + "",
                                f = b[2],
                                g = b[4];
                            return d == null ? f === "!=" : !f && m.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                        },
                        POS: function(a, b, c, d) {
                            var e = b[2],
                                f = o.setFilters[e];
                            if (f) {
                                return f(a, c, b, d)
                            }
                        }
                    }
                },
                p = o.match.POS,
                q = function(a, b) {
                    return "\\" + (b - 0 + 1)
                };
            for (var r in o.match) {
                o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q))
            }
            o.match.globalPOS = p;
            var s = function(a, b) {
                a = Array.prototype.slice.call(a, 0);
                if (b) {
                    b.push.apply(b, a);
                    return b
                }
                return a
            };
            try {
                Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
            } catch (t) {
                s = function(a, b) {
                    var c = 0,
                        d = b || [];
                    if (g.call(a) === "[object Array]") {
                        Array.prototype.push.apply(d, a)
                    } else {
                        if (typeof a.length == "number") {
                            for (var e = a.length; c < e; c++) {
                                d.push(a[c])
                            }
                        } else {
                            for (; a[c]; c++) {
                                d.push(a[c])
                            }
                        }
                    }
                    return d
                }
            }
            var u, v;
            c.documentElement.compareDocumentPosition ? u = function(a, b) {
                    if (a === b) {
                        h = !0;
                        return 0
                    }
                    if (!a.compareDocumentPosition || !b.compareDocumentPosition) {
                        return a.compareDocumentPosition ? -1 : 1
                    }
                    return a.compareDocumentPosition(b) & 4 ? -1 : 1
                } : (u = function(a, b) {
                    if (a === b) {
                        h = !0;
                        return 0
                    }
                    if (a.sourceIndex && b.sourceIndex) {
                        return a.sourceIndex - b.sourceIndex
                    }
                    var c, d, e = [],
                        f = [],
                        g = a.parentNode,
                        i = b.parentNode,
                        j = g;
                    if (g === i) {
                        return v(a, b)
                    }
                    if (!g) {
                        return -1
                    }
                    if (!i) {
                        return 1
                    }
                    while (j) {
                        e.unshift(j), j = j.parentNode
                    }
                    j = i;
                    while (j) {
                        f.unshift(j), j = j.parentNode
                    }
                    c = e.length, d = f.length;
                    for (var k = 0; k < c && k < d; k++) {
                        if (e[k] !== f[k]) {
                            return v(e[k], f[k])
                        }
                    }
                    return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
                }, v = function(a, b, c) {
                    if (a === b) {
                        return c
                    }
                    var d = a.nextSibling;
                    while (d) {
                        if (d === b) {
                            return -1
                        }
                        d = d.nextSibling
                    }
                    return 1
                }),
                function() {
                    var a = c.createElement("div"),
                        d = "script" + (new Date).getTime(),
                        e = c.documentElement;
                    a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (o.find.ID = function(a, c, d) {
                        if (typeof c.getElementById != "undefined" && !d) {
                            var e = c.getElementById(a[1]);
                            return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                        }
                    }, o.filter.ID = function(a, b) {
                        var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                        return a.nodeType === 1 && c && c.nodeValue === b
                    }), e.removeChild(a), e = a = null
                }(),
                function() {
                    var a = c.createElement("div");
                    a.appendChild(c.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG = function(a, b) {
                        var c = b.getElementsByTagName(a[1]);
                        if (a[1] === "*") {
                            var d = [];
                            for (var e = 0; c[e]; e++) {
                                c[e].nodeType === 1 && d.push(c[e])
                            }
                            c = d
                        }
                        return c
                    }), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function(a) {
                        return a.getAttribute("href", 2)
                    }), a = null
                }(), c.querySelectorAll && function() {
                    var a = m,
                        b = c.createElement("div"),
                        d = "__sizzle__";
                    b.innerHTML = "<p class='TEST'></p>";
                    if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
                        m = function(b, e, f, g) {
                            e = e || c;
                            if (!g && !m.isXML(e)) {
                                var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                                if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                                    if (h[1]) {
                                        return s(e.getElementsByTagName(b), f)
                                    }
                                    if (h[2] && o.find.CLASS && e.getElementsByClassName) {
                                        return s(e.getElementsByClassName(h[2]), f)
                                    }
                                }
                                if (e.nodeType === 9) {
                                    if (b === "body" && e.body) {
                                        return s([e.body], f)
                                    }
                                    if (h && h[3]) {
                                        var i = e.getElementById(h[3]);
                                        if (!i || !i.parentNode) {
                                            return s([], f)
                                        }
                                        if (i.id === h[3]) {
                                            return s([i], f)
                                        }
                                    }
                                    try {
                                        return s(e.querySelectorAll(b), f)
                                    } catch (j) {}
                                } else {
                                    if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                                        var k = e,
                                            l = e.getAttribute("id"),
                                            n = l || d,
                                            p = e.parentNode,
                                            q = /^\s*[+~]/.test(b);
                                        l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n), q && p && (e = e.parentNode);
                                        try {
                                            if (!q || p) {
                                                return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
                                            }
                                        } catch (r) {} finally {
                                            l || k.removeAttribute("id")
                                        }
                                    }
                                }
                            }
                            return a(b, e, f, g)
                        };
                        for (var e in a) {
                            m[e] = a[e]
                        }
                        b = null
                    }
                }(),
                function() {
                    var a = c.documentElement,
                        b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
                    if (b) {
                        var d = !b.call(c.createElement("div"), "div"),
                            e = !1;
                        try {
                            b.call(c.documentElement, "[test!='']:sizzle")
                        } catch (f) {
                            e = !0
                        }
                        m.matchesSelector = function(a, c) {
                            c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                            if (!m.isXML(a)) {
                                try {
                                    if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
                                        var f = b.call(a, c);
                                        if (f || !d || a.document && a.document.nodeType !== 11) {
                                            return f
                                        }
                                    }
                                } catch (g) {}
                            }
                            return m(c, null, null, [a]).length > 0
                        }
                    }
                }(),
                function() {
                    var a = c.createElement("div");
                    a.innerHTML = "<div class='test e'></div><div class='test'></div>";
                    if (!!a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
                        a.lastChild.className = "e";
                        if (a.getElementsByClassName("e").length === 1) {
                            return
                        }
                        o.order.splice(1, 0, "CLASS"), o.find.CLASS = function(a, b, c) {
                            if (typeof b.getElementsByClassName != "undefined" && !c) {
                                return b.getElementsByClassName(a[1])
                            }
                        }, a = null
                    }
                }(), c.documentElement.contains ? m.contains = function(a, b) {
                    return a !== b && (a.contains ? a.contains(b) : !0)
                } : c.documentElement.compareDocumentPosition ? m.contains = function(a, b) {
                    return !!(a.compareDocumentPosition(b) & 16)
                } : m.contains = function() {
                    return !1
                }, m.isXML = function(a) {
                    var b = (a ? a.ownerDocument || a : 0).documentElement;
                    return b ? b.nodeName !== "HTML" : !1
                };
            var y = function(a, b, c) {
                var d, e = [],
                    f = "",
                    g = b.nodeType ? [b] : b;
                while (d = o.match.PSEUDO.exec(a)) {
                    f += d[0], a = a.replace(o.match.PSEUDO, "")
                }
                a = o.relative[a] ? a + "*" : a;
                for (var h = 0, i = g.length; h < i; h++) {
                    m(a, g[h], e, c)
                }
                return m.filter(f, e)
            };
            m.attr = f.attr, m.selectors.attrMap = {}, f.find = m, f.expr = m.selectors, f.expr[":"] = f.expr.filters, f.unique = m.uniqueSort, f.text = m.getText, f.isXMLDoc = m.isXML, f.contains = m.contains
        }();
    var L = /Until$/,
        M = /^(?:parents|prevUntil|prevAll)/,
        N = /,/,
        O = /^.[^:#\[\.,]*$/,
        P = Array.prototype.slice,
        Q = f.expr.match.globalPOS,
        R = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    f.fn.extend({
        find: function(a) {
            var b = this,
                c, d;
            if (typeof a != "string") {
                return f(a).filter(function() {
                    for (c = 0, d = b.length; c < d; c++) {
                        if (f.contains(b[c], this)) {
                            return !0
                        }
                    }
                })
            }
            var e = this.pushStack("", "find", a),
                g, h, i;
            for (c = 0, d = this.length; c < d; c++) {
                g = e.length, f.find(a, this[c], e);
                if (c > 0) {
                    for (h = g; h < e.length; h++) {
                        for (i = 0; i < g; i++) {
                            if (e[i] === e[h]) {
                                e.splice(h--, 1);
                                break
                            }
                        }
                    }
                }
            }
            return e
        },
        has: function(a) {
            var b = f(a);
            return this.filter(function() {
                for (var a = 0, c = b.length; a < c; a++) {
                    if (f.contains(this, b[a])) {
                        return !0
                    }
                }
            })
        },
        not: function(a) {
            return this.pushStack(T(this, a, !1), "not", a)
        },
        filter: function(a) {
            return this.pushStack(T(this, a, !0), "filter", a)
        },
        is: function(a) {
            return !!a && (typeof a == "string" ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function(a, b) {
            var c = [],
                d, e, g = this[0];
            if (f.isArray(a)) {
                var h = 1;
                while (g && g.ownerDocument && g !== b) {
                    for (d = 0; d < a.length; d++) {
                        f(g).is(a[d]) && c.push({
                            selector: a[d],
                            elem: g,
                            level: h
                        })
                    }
                    g = g.parentNode, h++
                }
                return c
            }
            var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
            for (d = 0, e = this.length; d < e; d++) {
                g = this[d];
                while (g) {
                    if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
                        c.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b || g.nodeType === 11) {
                        break
                    }
                }
            }
            c = c.length > 1 ? f.unique(c) : c;
            return this.pushStack(c, "closest", a)
        },
        index: function(a) {
            if (!a) {
                return this[0] && this[0].parentNode ? this.prevAll().length : -1
            }
            if (typeof a == "string") {
                return f.inArray(this[0], f(a))
            }
            return f.inArray(a.jquery ? a[0] : a, this)
        },
        add: function(a, b) {
            var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a),
                d = f.merge(this.get(), c);
            return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    }), f.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        },
        parents: function(a) {
            return f.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return f.dir(a, "parentNode", c)
        },
        next: function(a) {
            return f.nth(a, 2, "nextSibling")
        },
        prev: function(a) {
            return f.nth(a, 2, "previousSibling")
        },
        nextAll: function(a) {
            return f.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return f.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return f.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return f.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return f.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return f.sibling(a.firstChild)
        },
        contents: function(a) {
            return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
        }
    }, function(a, b) {
        f.fn[a] = function(c, d) {
            var e = f.map(this, b, c);
            L.test(a) || (d = c), d && typeof d == "string" && (e = f.filter(d, e)), e = this.length > 1 && !R[a] ? f.unique(e) : e, (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse());
            return this.pushStack(e, a, P.call(arguments).join(","))
        }
    }), f.extend({
        filter: function(a, b, c) {
            c && (a = ":not(" + a + ")");
            return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
        },
        dir: function(a, c, d) {
            var e = [],
                g = a[c];
            while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d))) {
                g.nodeType === 1 && e.push(g), g = g[c]
            }
            return e
        },
        nth: function(a, b, c, d) {
            b = b || 1;
            var e = 0;
            for (; a; a = a[c]) {
                if (a.nodeType === 1 && ++e === b) {
                    break
                }
            }
            return a
        },
        sibling: function(a, b) {
            var c = [];
            for (; a; a = a.nextSibling) {
                a.nodeType === 1 && a !== b && c.push(a)
            }
            return c
        }
    });
    var V = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        W = / jQuery\d+="(?:\d+|null)"/g,
        X = /^\s+/,
        Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        Z = /<([\w:]+)/,
        $ = /<tbody/i,
        _ = /<|&#?\w+;/,
        ba = /<(?:script|style)/i,
        bb = /<(?:script|object|embed|option|style)/i,
        bc = new RegExp("<(?:" + V + ")[\\s/>]", "i"),
        bd = /checked\s*(?:[^=]|=\s*.checked.)/i,
        be = /\/(java|ecma)script/i,
        bf = /^\s*<!(?:\[CDATA\[|\-\-)/,
        bg = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        bh = U(c);
    bg.optgroup = bg.option, bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead, bg.th = bg.td, f.support.htmlSerialize || (bg._default = [1, "div<div>", "</div>"]), f.fn.extend({
        text: function(a) {
            return f.access(this, function(a) {
                return a === b ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a))
            }, null, a, arguments.length)
        },
        wrapAll: function(a) {
            if (f.isFunction(a)) {
                return this.each(function(b) {
                    f(this).wrapAll(a.call(this, b))
                })
            }
            if (this[0]) {
                var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1) {
                        a = a.firstChild
                    }
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            if (f.isFunction(a)) {
                return this.each(function(b) {
                    f(this).wrapInner(a.call(this, b))
                })
            }
            return this.each(function() {
                var b = f(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = f.isFunction(a);
            return this.each(function(c) {
                f(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, !1, function(a) {
                    this.parentNode.insertBefore(a, this)
                })
            }
            if (arguments.length) {
                var a = f.clean(arguments);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, !1, function(a) {
                    this.parentNode.insertBefore(a, this.nextSibling)
                })
            }
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, f.clean(arguments));
                return a
            }
        },
        remove: function(a, b) {
            for (var c = 0, d;
                (d = this[c]) != null; c++) {
                if (!a || f.filter(a, [d]).length) {
                    !b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d)
                }
            }
            return this
        },
        empty: function() {
            for (var a = 0, b;
                (b = this[a]) != null; a++) {
                b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
                while (b.firstChild) {
                    b.removeChild(b.firstChild)
                }
            }
            return this
        },
        clone: function(a, b) {
            a = a == null ? !1 : a, b = b == null ? a : b;
            return this.map(function() {
                return f.clone(this, a, b)
            })
        },
        html: function(a) {
            return f.access(this, function(a) {
                var c = this[0] || {},
                    d = 0,
                    e = this.length;
                if (a === b) {
                    return c.nodeType === 1 ? c.innerHTML.replace(W, "") : null
                }
                if (typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Y, "<$1></$2>");
                    try {
                        for (; d < e; d++) {
                            c = this[d] || {}, c.nodeType === 1 && (f.cleanData(c.getElementsByTagName("*")), c.innerHTML = a)
                        }
                        c = 0
                    } catch (g) {}
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function(a) {
            if (this[0] && this[0].parentNode) {
                if (f.isFunction(a)) {
                    return this.each(function(b) {
                        var c = f(this),
                            d = c.html();
                        c.replaceWith(a.call(this, b, d))
                    })
                }
                typeof a != "string" && (a = f(a).detach());
                return this.each(function() {
                    var b = this.nextSibling,
                        c = this.parentNode;
                    f(this).remove(), b ? f(b).before(a) : f(c).append(a)
                })
            }
            return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, c, d) {
            var e, g, h, i, j = a[0],
                k = [];
            if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bd.test(j)) {
                return this.each(function() {
                    f(this).domManip(a, c, d, !0)
                })
            }
            if (f.isFunction(j)) {
                return this.each(function(e) {
                    var g = f(this);
                    a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d)
                })
            }
            if (this[0]) {
                i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {
                    fragment: i
                } : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
                if (g) {
                    c = c && f.nodeName(g, "tr");
                    for (var l = 0, m = this.length, n = m - 1; l < m; l++) {
                        d.call(c ? bi(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
                    }
                }
                k.length && f.each(k, function(a, b) {
                    b.src ? f.ajax({
                        type: "GET",
                        global: !1,
                        url: b.src,
                        async: !1,
                        dataType: "script"
                    }) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bf, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
                })
            }
            return this
        }
    }), f.buildFragment = function(a, b, d) {
        var e, g, h, i, j = a[0];
        b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f.support.checkClone || !bd.test(j)) && (f.support.html5Clone || !bc.test(j)) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)), g && (f.fragments[j] = h ? e : 1);
        return {
            fragment: e,
            cacheable: g
        }
    }, f.fragments = {}, f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        f.fn[a] = function(c) {
            var d = [],
                e = f(c),
                g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
                e[b](this[0]);
                return this
            }
            for (var h = 0, i = e.length; h < i; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                f(e[h])[b](j), d = d.concat(j)
            }
            return this.pushStack(d, a, e.selector)
        }
    }), f.extend({
        clone: function(a, b, c) {
            var d, e, g, h = f.support.html5Clone || f.isXMLDoc(a) || !bc.test("<" + a.nodeName + ">") ? a.cloneNode(!0) : bo(a);
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
                bk(a, h), d = bl(a), e = bl(h);
                for (g = 0; d[g]; ++g) {
                    e[g] && bk(d[g], e[g])
                }
            }
            if (b) {
                bj(a, h);
                if (c) {
                    d = bl(a), e = bl(h);
                    for (g = 0; d[g]; ++g) {
                        bj(d[g], e[g])
                    }
                }
            }
            d = e = null;
            return h
        },
        clean: function(a, b, d, e) {
            var g, h, i, j = [];
            b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
            for (var k = 0, l;
                (l = a[k]) != null; k++) {
                typeof l == "number" && (l += "");
                if (!l) {
                    continue
                }
                if (typeof l == "string") {
                    if (!_.test(l)) {
                        l = b.createTextNode(l)
                    } else {
                        l = l.replace(Y, "<$1></$2>");
                        var m = (Z.exec(l) || ["", ""])[1].toLowerCase(),
                            n = bg[m] || bg._default,
                            o = n[0],
                            p = b.createElement("div"),
                            q = bh.childNodes,
                            r;
                        b === c ? bh.appendChild(p) : U(b).appendChild(p), p.innerHTML = n[1] + l + n[2];
                        while (o--) {
                            p = p.lastChild
                        }
                        if (!f.support.tbody) {
                            var s = $.test(l),
                                t = m === "table" && !s ? p.firstChild && p.firstChild.childNodes : n[1] === "<table>" && !s ? p.childNodes : [];
                            for (i = t.length - 1; i >= 0; --i) {
                                f.nodeName(t[i], "tbody") && !t[i].childNodes.length && t[i].parentNode.removeChild(t[i])
                            }
                        }!f.support.leadingWhitespace && X.test(l) && p.insertBefore(b.createTextNode(X.exec(l)[0]), p.firstChild), l = p.childNodes, p && (p.parentNode.removeChild(p), q.length > 0 && (r = q[q.length - 1], r && r.parentNode && r.parentNode.removeChild(r)))
                    }
                }
                var u;
                if (!f.support.appendChecked) {
                    if (l[0] && typeof(u = l.length) == "number") {
                        for (i = 0; i < u; i++) {
                            bn(l[i])
                        }
                    } else {
                        bn(l)
                    }
                }
                l.nodeType ? j.push(l) : j = f.merge(j, l)
            }
            if (d) {
                g = function(a) {
                    return !a.type || be.test(a.type)
                };
                for (k = 0; j[k]; k++) {
                    h = j[k];
                    if (e && f.nodeName(h, "script") && (!h.type || be.test(h.type))) {
                        e.push(h.parentNode ? h.parentNode.removeChild(h) : h)
                    } else {
                        if (h.nodeType === 1) {
                            var v = f.grep(h.getElementsByTagName("script"), g);
                            j.splice.apply(j, [k + 1, 0].concat(v))
                        }
                        d.appendChild(h)
                    }
                }
            }
            return j
        },
        cleanData: function(a) {
            var b, c, d = f.cache,
                e = f.event.special,
                g = f.support.deleteExpando;
            for (var h = 0, i;
                (i = a[h]) != null; h++) {
                if (i.nodeName && f.noData[i.nodeName.toLowerCase()]) {
                    continue
                }
                c = i[f.expando];
                if (c) {
                    b = d[c];
                    if (b && b.events) {
                        for (var j in b.events) {
                            e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle)
                        }
                        b.handle && (b.handle.elem = null)
                    }
                    g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando), delete d[c]
                }
            }
        }
    });
    var bp = /alpha\([^)]*\)/i,
        bq = /opacity=([^)]*)/,
        br = /([A-Z]|^ms)/g,
        bs = /^[\-+]?(?:\d*\.)?\d+$/i,
        bt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
        bu = /^([\-+])=([\-+.\de]+)/,
        bv = /^margin/,
        bw = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        bx = ["Top", "Right", "Bottom", "Left"],
        by, bz, bA;
    f.fn.css = function(a, c) {
        return f.access(this, function(a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c)
        }, a, c, arguments.length > 1)
    }, f.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = by(a, "opacity");
                        return c === "" ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": f.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, c, d, e) {
            if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
                var g, h, i = f.camelCase(c),
                    j = a.style,
                    k = f.cssHooks[i];
                c = f.cssProps[i] || i;
                if (d === b) {
                    if (k && "get" in k && (g = k.get(a, !1, e)) !== b) {
                        return g
                    }
                    return j[c]
                }
                h = typeof d, h === "string" && (g = bu.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
                if (d == null || h === "number" && isNaN(d)) {
                    return
                }
                h === "number" && !f.cssNumber[i] && (d += "px");
                if (!k || !("set" in k) || (d = k.set(a, d)) !== b) {
                    try {
                        j[c] = d
                    } catch (l) {}
                }
            }
        },
        css: function(a, c, d) {
            var e, g;
            c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c = "float");
            if (g && "get" in g && (e = g.get(a, !0, d)) !== b) {
                return e
            }
            if (by) {
                return by(a, c)
            }
        },
        swap: function(a, b, c) {
            var d = {},
                e, f;
            for (f in b) {
                d[f] = a.style[f], a.style[f] = b[f]
            }
            e = c.call(a);
            for (f in b) {
                a.style[f] = d[f]
            }
            return e
        }
    }), f.curCSS = f.css, c.defaultView && c.defaultView.getComputedStyle && (bz = function(a, b) {
        var c, d, e, g, h = a.style;
        b = b.replace(br, "-$1").toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), c === "" && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b))), !f.support.pixelMargin && e && bv.test(b) && bt.test(c) && (g = h.width, h.width = c, c = e.width, h.width = g);
        return c
    }), c.documentElement.currentStyle && (bA = function(a, b) {
        var c, d, e, f = a.currentStyle && a.currentStyle[b],
            g = a.style;
        f == null && g && (e = g[b]) && (f = e), bt.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em" : f, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d));
        return f === "" ? "auto" : f
    }), by = bz || bA, f.each(["height", "width"], function(a, b) {
        f.cssHooks[b] = {
            get: function(a, c, d) {
                if (c) {
                    return a.offsetWidth !== 0 ? bB(a, b, d) : f.swap(a, bw, function() {
                        return bB(a, b, d)
                    })
                }
            },
            set: function(a, b) {
                return bs.test(b) ? b + "px" : b
            }
        }
    }), f.support.opacity || (f.cssHooks.opacity = {
        get: function(a, b) {
            return bq.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
                g = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && f.trim(g.replace(bp, "")) === "") {
                c.removeAttribute("filter");
                if (d && !d.filter) {
                    return
                }
            }
            c.filter = bp.test(g) ? g.replace(bp, e) : g + " " + e
        }
    }), f(function() {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            get: function(a, b) {
                return f.swap(a, {
                    display: "inline-block"
                }, function() {
                    return b ? by(a, "margin-right") : a.style.marginRight
                })
            }
        })
    }), f.expr && f.expr.filters && (f.expr.filters.hidden = function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight;
        return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none"
    }, f.expr.filters.visible = function(a) {
        return !f.expr.filters.hidden(a)
    }), f.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        f.cssHooks[a + b] = {
            expand: function(c) {
                var d, e = typeof c == "string" ? c.split(" ") : [c],
                    f = {};
                for (d = 0; d < 4; d++) {
                    f[a + bx[d] + b] = e[d] || e[d - 2] || e[0]
                }
                return f
            }
        }
    });
    var bC = /%20/g,
        bD = /\[\]$/,
        bE = /\r?\n/g,
        bF = /#.*$/,
        bG = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        bH = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        bI = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        bJ = /^(?:GET|HEAD)$/,
        bK = /^\/\//,
        bL = /\?/,
        bM = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        bN = /^(?:select|textarea)/i,
        bO = /\s+/,
        bP = /([?&])_=[^&]*/,
        bQ = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        bR = f.fn.load,
        bS = {},
        bT = {},
        bU, bV, bW = ["*/"] + ["*"];
    try {
        bU = e.href
    } catch (bX) {
        bU = c.createElement("a"), bU.href = "", bU = bU.href
    }
    bV = bQ.exec(bU.toLowerCase()) || [], f.fn.extend({
        load: function(a, c, d) {
            if (typeof a != "string" && bR) {
                return bR.apply(this, arguments)
            }
            if (!this.length) {
                return this
            }
            var e = a.indexOf(" ");
            if (e >= 0) {
                var g = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var h = "GET";
            c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
            var i = this;
            f.ajax({
                url: a,
                type: h,
                dataType: "html",
                data: c,
                complete: function(a, b, c) {
                    c = a.responseText, a.isResolved() && (a.done(function(a) {
                        c = a
                    }), i.html(g ? f("<div>").append(c.replace(bM, "")).find(g) : c)), d && i.each(d, [c, b, a])
                }
            });
            return this
        },
        serialize: function() {
            return f.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || bN.test(this.nodeName) || bH.test(this.type))
            }).map(function(a, b) {
                var c = f(this).val();
                return c == null ? null : f.isArray(c) ? f.map(c, function(a, c) {
                    return {
                        name: b.name,
                        value: a.replace(bE, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(bE, "\r\n")
                }
            }).get()
        }
    }), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        f.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), f.each(["get", "post"], function(a, c) {
        f[c] = function(a, d, e, g) {
            f.isFunction(d) && (g = g || e, e = d, d = b);
            return f.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: g
            })
        }
    }), f.extend({
        getScript: function(a, c) {
            return f.get(a, b, c, "script")
        },
        getJSON: function(a, b, c) {
            return f.get(a, b, c, "json")
        },
        ajaxSetup: function(a, b) {
            b ? b$(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), b$(a, b);
            return a
        },
        ajaxSettings: {
            url: bU,
            isLocal: bI.test(bV[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": bW
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": f.parseJSON,
                "text xml": f.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: bY(bS),
        ajaxTransport: bY(bT),
        ajax: function(a, c) {
            function w(a, c, l, m) {
                if (s !== 2) {
                    s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0;
                    var o, r, u, w = c,
                        x = l ? ca(d, v, l) : b,
                        y, z;
                    if (a >= 200 && a < 300 || a === 304) {
                        if (d.ifModified) {
                            if (y = v.getResponseHeader("Last-Modified")) {
                                f.lastModified[k] = y
                            }
                            if (z = v.getResponseHeader("Etag")) {
                                f.etag[k] = z
                            }
                        }
                        if (a === 304) {
                            w = "notmodified", o = !0
                        } else {
                            try {
                                r = cb(d, x), w = "success", o = !0
                            } catch (A) {
                                w = "parsererror", u = A
                            }
                        }
                    } else {
                        u = w;
                        if (!w || a) {
                            w = "error", a < 0 && (a = 0)
                        }
                    }
                    v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.fireWith(e, [v, w]), t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
                }
            }
            typeof a == "object" && (c = a, a = b), c = c || {};
            var d = f.ajaxSetup({}, c),
                e = d.context || d,
                g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event,
                h = f.Deferred(),
                i = f.Callbacks("once memory"),
                j = d.statusCode || {},
                k, l = {},
                m = {},
                n, o, p, q, r, s = 0,
                t, u, v = {
                    readyState: 0,
                    setRequestHeader: function(a, b) {
                        if (!s) {
                            var c = a.toLowerCase();
                            a = m[c] = m[c] || a, l[a] = b
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return s === 2 ? n : null
                    },
                    getResponseHeader: function(a) {
                        var c;
                        if (s === 2) {
                            if (!o) {
                                o = {};
                                while (c = bG.exec(n)) {
                                    o[c[1].toLowerCase()] = c[2]
                                }
                            }
                            c = o[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    },
                    overrideMimeType: function(a) {
                        s || (d.mimeType = a);
                        return this
                    },
                    abort: function(a) {
                        a = a || "abort", p && p.abort(a), w(0, a);
                        return this
                    }
                };
            h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.add, v.statusCode = function(a) {
                if (a) {
                    var b;
                    if (s < 2) {
                        for (b in a) {
                            j[b] = [j[b], a[b]]
                        }
                    } else {
                        b = a[v.status], v.then(b, b)
                    }
                }
                return this
            }, d.url = ((a || d.url) + "").replace(bF, "").replace(bK, bV[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bO), d.crossDomain == null && (r = bQ.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bV[1] && r[2] == bV[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bV[3] || (bV[1] === "http:" ? 80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)), bZ(bS, d, c, v);
            if (s === 2) {
                return !1
            }
            t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bJ.test(d.type), t && f.active++ === 0 && f.event.trigger("ajaxStart");
            if (!d.hasContent) {
                d.data && (d.url += (bL.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url;
                if (d.cache === !1) {
                    var x = f.now(),
                        y = d.url.replace(bP, "$1_=" + x);
                    d.url = y + (y === d.url ? (bL.test(d.url) ? "&" : "?") + "_=" + x : "")
                }
            }(d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bW + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers) {
                v.setRequestHeader(u, d.headers[u])
            }
            if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
                v.abort();
                return !1
            }
            for (u in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) {
                v[u](d[u])
            }
            p = bZ(bT, d, c, v);
            if (!p) {
                w(-1, "No Transport")
            } else {
                v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function() {
                    v.abort("timeout")
                }, d.timeout));
                try {
                    s = 1, p.send(l, w)
                } catch (z) {
                    if (s < 2) {
                        w(-1, z)
                    } else {
                        throw z
                    }
                }
            }
            return v
        },
        param: function(a, c) {
            var d = [],
                e = function(a, b) {
                    b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            c === b && (c = f.ajaxSettings.traditional);
            if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) {
                f.each(a, function() {
                    e(this.name, this.value)
                })
            } else {
                for (var g in a) {
                    b_(g, a[g], c, e)
                }
            }
            return d.join("&").replace(bC, "+")
        }
    }), f.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var cc = f.now(),
        cd = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return f.expando + "_" + cc++
        }
    }), f.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e = typeof b.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(b.contentType);
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (cd.test(b.url) || e && cd.test(b.data))) {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
                i = a[h],
                j = b.url,
                k = b.data,
                l = "$1" + h + "$2";
            b.jsonp !== !1 && (j = j.replace(cd, l), b.url === j && (e && (k = k.replace(cd, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function(a) {
                g = [a]
            }, d.always(function() {
                a[h] = i, g && f.isFunction(i) && a[h](g[0])
            }), b.converters["script json"] = function() {
                g || f.error(h + " was not called");
                return g[0]
            }, b.dataTypes[0] = "json";
            return "script"
        }
    }), f.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(a) {
                f.globalEval(a);
                return a
            }
        }
    }), f.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), f.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return {
                send: function(f, g) {
                    d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function(a, c) {
                        if (c || !d.readyState || /loaded|complete/.test(d.readyState)) {
                            d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success")
                        }
                    }, e.insertBefore(d, e.firstChild)
                },
                abort: function() {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var ce = a.ActiveXObject ? function() {
            for (var a in cg) {
                cg[a](0, 1)
            }
        } : !1,
        cf = 0,
        cg;
    f.ajaxSettings.xhr = a.ActiveXObject ? function() {
            return !this.isLocal && ch() || ci()
        } : ch,
        function(a) {
            f.extend(f.support, {
                ajax: !!a,
                cors: !!a && "withCredentials" in a
            })
        }(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function(c) {
            if (!c.crossDomain || f.support.cors) {
                var d;
                return {
                    send: function(e, g) {
                        var h = c.xhr(),
                            i, j;
                        c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                        if (c.xhrFields) {
                            for (j in c.xhrFields) {
                                h[j] = c.xhrFields[j]
                            }
                        }
                        c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (j in e) {
                                h.setRequestHeader(j, e[j])
                            }
                        } catch (k) {}
                        h.send(c.hasContent && c.data || null), d = function(a, e) {
                            var j, k, l, m, n;
                            try {
                                if (d && (e || h.readyState === 4)) {
                                    d = b, i && (h.onreadystatechange = f.noop, ce && delete cg[i]);
                                    if (e) {
                                        h.readyState !== 4 && h.abort()
                                    } else {
                                        j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n);
                                        try {
                                            m.text = h.responseText
                                        } catch (a) {}
                                        try {
                                            k = h.statusText
                                        } catch (o) {
                                            k = ""
                                        }!j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                                    }
                                }
                            } catch (p) {
                                e || g(-1, p)
                            }
                            m && g(j, k, m, l)
                        }, !c.async || h.readyState === 4 ? d() : (i = ++cf, ce && (cg || (cg = {}, f(a).unload(ce)), cg[i] = d), h.onreadystatechange = d)
                    },
                    abort: function() {
                        d && d(0, 1)
                    }
                }
            }
        });
    var cj = {},
        ck, cl, cm = /^(?:toggle|show|hide)$/,
        cn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        co, cp = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ],
        cq;
    f.fn.extend({
        show: function(a, b, c) {
            var d, e;
            if (a || a === 0) {
                return this.animate(ct("show", 3), a, b, c)
            }
            for (var g = 0, h = this.length; g < h; g++) {
                d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), (e === "" && f.css(d, "display") === "none" || !f.contains(d.ownerDocument.documentElement, d)) && f._data(d, "olddisplay", cu(d.nodeName)))
            }
            for (g = 0; g < h; g++) {
                d = this[g];
                if (d.style) {
                    e = d.style.display;
                    if (e === "" || e === "none") {
                        d.style.display = f._data(d, "olddisplay") || ""
                    }
                }
            }
            return this
        },
        hide: function(a, b, c) {
            if (a || a === 0) {
                return this.animate(ct("hide", 3), a, b, c)
            }
            var d, e, g = 0,
                h = this.length;
            for (; g < h; g++) {
                d = this[g], d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e))
            }
            for (g = 0; g < h; g++) {
                this[g].style && (this[g].style.display = "none")
            }
            return this
        },
        _toggle: f.fn.toggle,
        toggle: function(a, b, c) {
            var d = typeof a == "boolean";
            f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function() {
                var b = d ? a : f(this).is(":hidden");
                f(this)[b ? "show" : "hide"]()
            }) : this.animate(ct("toggle", 3), a, b, c);
            return this
        },
        fadeTo: function(a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            function g() {
                e.queue === !1 && f._mark(this);
                var b = f.extend({}, e),
                    c = this.nodeType === 1,
                    d = c && f(this).is(":hidden"),
                    g, h, i, j, k, l, m, n, o, p, q;
                b.animatedProperties = {};
                for (i in a) {
                    g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]);
                    if ((k = f.cssHooks[g]) && "expand" in k) {
                        l = k.expand(a[g]), delete a[g];
                        for (i in l) {
                            i in a || (a[i] = l[i])
                        }
                    }
                }
                for (g in a) {
                    h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                    if (h === "hide" && d || h === "show" && !d) {
                        return b.complete.call(this)
                    }
                    c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cu(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
                }
                b.overflow != null && (this.style.overflow = "hidden");
                for (i in a) {
                    j = new f.fx(this, b, i), h = a[i], cm.test(h) ? (q = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0), q ? (f._data(this, "toggle" + i, q === "show" ? "hide" : "show"), j[q]()) : j[h]()) : (m = cn.exec(h), n = j.cur(), m ? (o = parseFloat(m[2]), p = m[3] || (f.cssNumber[i] ? "" : "px"), p !== "px" && (f.style(this, i, (o || 1) + p), n = (o || 1) / j.cur() * n, f.style(this, i, n + p)), m[1] && (o = (m[1] === "-=" ? -1 : 1) * o + n), j.custom(n, o, p)) : j.custom(n, h, ""))
                }
                return !0
            }
            var e = f.speed(b, c, d);
            if (f.isEmptyObject(a)) {
                return this.each(e.complete, [!1])
            }
            a = f.extend({}, a);
            return e.queue === !1 ? this.each(g) : this.queue(e.queue, g)
        },
        stop: function(a, c, d) {
            typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []);
            return this.each(function() {
                function h(a, b, c) {
                    var e = b[c];
                    f.removeData(a, c, !0), e.stop(d)
                }
                var b, c = !1,
                    e = f.timers,
                    g = f._data(this);
                d || f._unmark(!0, this);
                if (a == null) {
                    for (b in g) {
                        g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b)
                    }
                } else {
                    g[b = a + ".run"] && g[b].stop && h(this, g, b)
                }
                for (b = e.length; b--;) {
                    e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1))
                }(!d || !c) && f.dequeue(this, a)
            })
        }
    }), f.each({
        slideDown: ct("show", 1),
        slideUp: ct("hide", 1),
        slideToggle: ct("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        f.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), f.extend({
        speed: function(a, b, c) {
            var d = a && typeof a == "object" ? f.extend({}, a) : {
                complete: c || !c && b || f.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !f.isFunction(b) && b
            };
            d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
            if (d.queue == null || d.queue === !0) {
                d.queue = "fx"
            }
            d.old = d.complete, d.complete = function(a) {
                f.isFunction(d.old) && d.old.call(this), d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
            };
            return d
        },
        easing: {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return -Math.cos(a * Math.PI) / 2 + 0.5
            }
        },
        timers: [],
        fx: function(a, b, c) {
            this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
        }
    }), f.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this)
        },
        cur: function() {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
                return this.elem[this.prop]
            }
            var a, b = f.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
        },
        custom: function(a, c, d) {
            function h(a) {
                return e.step(a)
            }
            var e = this,
                g = f.fx;
            this.startTime = cq || cr(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"), h.queue = this.options.queue, h.elem = this.elem, h.saveState = function() {
                f._data(e.elem, "fxshow" + e.prop) === b && (e.options.hide ? f._data(e.elem, "fxshow" + e.prop, e.start) : e.options.show && f._data(e.elem, "fxshow" + e.prop, e.end))
            }, h() && f.timers.push(h) && !co && (co = setInterval(g.tick, g.interval))
        },
        show: function() {
            var a = f._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a || f.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), f(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        step: function(a) {
            var b, c, d, e = cq || cr(),
                g = !0,
                h = this.elem,
                i = this.options;
            if (a || e >= i.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0;
                for (b in i.animatedProperties) {
                    i.animatedProperties[b] !== !0 && (g = !1)
                }
                if (g) {
                    i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function(a, b) {
                        h.style["overflow" + b] = i.overflow[a]
                    }), i.hide && f(h).hide();
                    if (i.hide || i.show) {
                        for (b in i.animatedProperties) {
                            f.style(h, b, i.orig[b]), f.removeData(h, "fxshow" + b, !0), f.removeData(h, "toggle" + b, !0)
                        }
                    }
                    d = i.complete, d && (i.complete = !1, d.call(h))
                }
                return !1
            }
            i.duration == Infinity ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update();
            return !0
        }
    }, f.extend(f.fx, {
        tick: function() {
            var a, b = f.timers,
                c = 0;
            for (; c < b.length; c++) {
                a = b[c], !a() && b[c] === a && b.splice(c--, 1)
            }
            b.length || f.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(co), co = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(a) {
                f.style(a.elem, "opacity", a.now)
            },
            _default: function(a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
            }
        }
    }), f.each(cp.concat.apply([], cp), function(a, b) {
        b.indexOf("margin") && (f.fx.step[b] = function(a) {
            f.style(a.elem, b, Math.max(0, a.now) + a.unit)
        })
    }), f.expr && f.expr.filters && (f.expr.filters.animated = function(a) {
        return f.grep(f.timers, function(b) {
            return a === b.elem
        }).length
    });
    var cv, cw = /^t(?:able|d|h)$/i,
        cx = /^(?:body|html)$/i;
    "getBoundingClientRect" in c.documentElement ? cv = function(a, b, c, d) {
        try {
            d = a.getBoundingClientRect()
        } catch (e) {}
        if (!d || !f.contains(c, a)) {
            return d ? {
                top: d.top,
                left: d.left
            } : {
                top: 0,
                left: 0
            }
        }
        var g = b.body,
            h = cy(b),
            i = c.clientTop || g.clientTop || 0,
            j = c.clientLeft || g.clientLeft || 0,
            k = h.pageYOffset || f.support.boxModel && c.scrollTop || g.scrollTop,
            l = h.pageXOffset || f.support.boxModel && c.scrollLeft || g.scrollLeft,
            m = d.top + k - i,
            n = d.left + l - j;
        return {
            top: m,
            left: n
        }
    } : cv = function(a, b, c) {
        var d, e = a.offsetParent,
            g = a,
            h = b.body,
            i = b.defaultView,
            j = i ? i.getComputedStyle(a, null) : a.currentStyle,
            k = a.offsetTop,
            l = a.offsetLeft;
        while ((a = a.parentNode) && a !== h && a !== c) {
            if (f.support.fixedPosition && j.position === "fixed") {
                break
            }
            d = i ? i.getComputedStyle(a, null) : a.currentStyle, k -= a.scrollTop, l -= a.scrollLeft, a === e && (k += a.offsetTop, l += a.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cw.test(a.nodeName)) && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), g = e, e = a.offsetParent), f.support.subtractsBorderForOverflowNotVisible && d.overflow !== "visible" && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), j = d
        }
        if (j.position === "relative" || j.position === "static") {
            k += h.offsetTop, l += h.offsetLeft
        }
        f.support.fixedPosition && j.position === "fixed" && (k += Math.max(c.scrollTop, h.scrollTop), l += Math.max(c.scrollLeft, h.scrollLeft));
        return {
            top: k,
            left: l
        }
    }, f.fn.offset = function(a) {
        if (arguments.length) {
            return a === b ? this : this.each(function(b) {
                f.offset.setOffset(this, a, b)
            })
        }
        var c = this[0],
            d = c && c.ownerDocument;
        if (!d) {
            return null
        }
        if (c === d.body) {
            return f.offset.bodyOffset(c)
        }
        return cv(c, d, d.documentElement)
    }, f.offset = {
        bodyOffset: function(a) {
            var b = a.offsetTop,
                c = a.offsetLeft;
            f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0);
            return {
                top: b,
                left: c
            }
        },
        setOffset: function(a, b, c) {
            var d = f.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = f(a),
                g = e.offset(),
                h = f.css(a, "top"),
                i = f.css(a, "left"),
                j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1,
                k = {},
                l = {},
                m, n;
            j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : e.css(k)
        }
    }, f.fn.extend({
        position: function() {
            if (!this[0]) {
                return null
            }
            var a = this[0],
                b = this.offsetParent(),
                c = this.offset(),
                d = cx.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
            c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
            return {
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || c.body;
                while (a && !cx.test(a.nodeName) && f.css(a, "position") === "static") {
                    a = a.offsetParent
                }
                return a
            })
        }
    }), f.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, c) {
        var d = /Y/.test(c);
        f.fn[a] = function(e) {
            return f.access(this, function(a, e, g) {
                var h = cy(a);
                if (g === b) {
                    return h ? c in h ? h[c] : f.support.boxModel && h.document.documentElement[e] || h.document.body[e] : a[e]
                }
                h ? h.scrollTo(d ? f(h).scrollLeft() : g, d ? g : f(h).scrollTop()) : a[e] = g
            }, a, e, arguments.length, null)
        }
    }), f.each({
        Height: "height",
        Width: "width"
    }, function(a, c) {
        var d = "client" + a,
            e = "scroll" + a,
            g = "offset" + a;
        f.fn["inner" + a] = function() {
            var a = this[0];
            return a ? a.style ? parseFloat(f.css(a, c, "padding")) : this[c]() : null
        }, f.fn["outer" + a] = function(a) {
            var b = this[0];
            return b ? b.style ? parseFloat(f.css(b, c, a ? "margin" : "border")) : this[c]() : null
        }, f.fn[c] = function(a) {
            return f.access(this, function(a, c, h) {
                var i, j, k, l;
                if (f.isWindow(a)) {
                    i = a.document, j = i.documentElement[d];
                    return f.support.boxModel && j || i.body && i.body[d] || j
                }
                if (a.nodeType === 9) {
                    i = a.documentElement;
                    if (i[d] >= i[e]) {
                        return i[d]
                    }
                    return Math.max(a.body[e], i[e], a.body[g], i[g])
                }
                if (h === b) {
                    k = f.css(a, c), l = parseFloat(k);
                    return f.isNumeric(l) ? l : k
                }
                f(a).css(c, h)
            }, c, a, arguments.length, null)
        }
    }), a.jQuery = a.$ = f, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return f
    })
})(window);
(function(a) {
    "function" === typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
})(function(c) {
    var f = [],
        e = c(document),
        d = c.browser.msie && 6 === parseInt(c.browser.version) && "object" !== typeof window.XMLHttpRequest,
        p = c.browser.msie && 7 === parseInt(c.browser.version),
        a = null,
        o = c(window),
        g = [];
    c.modal = function(b, h) {
        return c.modal.impl.init(b, h)
    };
    c.modal.close = function() {
        c.modal.impl.close()
    };
    c.modal.focus = function(b) {
        c.modal.impl.focus(b)
    };
    c.modal.setContainerDimensions = function() {
        c.modal.impl.setContainerDimensions()
    };
    c.modal.setPosition = function() {
        c.modal.impl.setPosition()
    };
    c.modal.update = function(b, h) {
        c.modal.impl.update(b, h)
    };
    c.fn.modal = function(b) {
        return c.modal.impl.init(this, b)
    };
    c.modal.defaults = {
        appendTo: "body",
        focus: !0,
        opacity: 50,
        overlayId: "simplemodal-overlay",
        overlayCss: {},
        containerId: "simplemodal-container",
        containerCss: {},
        dataId: "simplemodal-data",
        dataCss: {},
        minHeight: null,
        minWidth: null,
        maxHeight: null,
        maxWidth: null,
        autoResize: !1,
        autoPosition: !0,
        zIndex: 1000,
        close: !0,
        closeHTML: '<a class="modalCloseImg" title="Close"></a>',
        closeClass: "simplemodal-close",
        escClose: !0,
        overlayClose: !1,
        fixed: !0,
        position: null,
        persist: !1,
        modal: !0,
        onOpen: null,
        onShow: null,
        onClose: null
    };
    c.modal.impl = {
        d: {},
        init: function(b, h) {
            if (this.d.data) {
                return !1
            }
            a = c.browser.msie && !c.boxModel;
            this.o = c.extend({}, c.modal.defaults, h);
            this.zIndex = this.o.zIndex;
            this.occb = !1;
            if ("object" === typeof b) {
                if (b = b instanceof jQuery ? b : c(b), this.d.placeholder = !1, 0 < b.parent().parent().size() && (b.before(c("<span></span>").attr("id", "simplemodal-placeholder").css({
                        display: "none"
                    })), this.d.placeholder = !0, this.display = b.css("display"), !this.o.persist)) {
                    this.d.orig = b.clone(!0)
                }
            } else {
                if ("string" === typeof b || "number" === typeof b) {
                    b = c("<div></div>").html(b)
                } else {
                    return alert("SimpleModal Error: Unsupported data type: " + typeof b), this
                }
            }
            this.create(b);
            this.open();
            c.isFunction(this.o.onShow) && this.o.onShow.apply(this, [this.d]);
            return this
        },
        create: function(b) {
            this.getDimensions();
            if (this.o.modal && d) {
                this.d.iframe = c('<iframe src="javascript:false;"></iframe>').css(c.extend(this.o.iframeCss, {
                    display: "none",
                    opacity: 0,
                    position: "fixed",
                    height: g[0],
                    width: g[1],
                    zIndex: this.o.zIndex,
                    top: 0,
                    left: 0
                })).appendTo(this.o.appendTo)
            }
            this.d.overlay = c("<div></div>").attr("id", this.o.overlayId).addClass("simplemodal-overlay").css(c.extend(this.o.overlayCss, {
                display: "none",
                opacity: this.o.opacity / 100,
                height: this.o.modal ? f[0] : 0,
                width: this.o.modal ? f[1] : 0,
                position: "fixed",
                left: 0,
                top: 0,
                zIndex: this.o.zIndex + 1
            })).appendTo(this.o.appendTo);
            this.d.container = c("<div></div>").attr("id", this.o.containerId).addClass("simplemodal-container").css(c.extend({
                position: this.o.fixed ? "fixed" : "absolute"
            }, this.o.containerCss, {
                display: "none",
                zIndex: this.o.zIndex + 2
            })).append(this.o.close && this.o.closeHTML ? c(this.o.closeHTML).addClass(this.o.closeClass) : "").appendTo(this.o.appendTo);
            this.d.wrap = c("<div></div>").attr("tabIndex", -1).addClass("simplemodal-wrap").css({
                height: "100%",
                outline: 0,
                width: "100%"
            }).appendTo(this.d.container);
            this.d.data = b.attr("id", b.attr("id") || this.o.dataId).addClass("simplemodal-data").css(c.extend(this.o.dataCss, {
                display: "none"
            })).appendTo("body");
            this.setContainerDimensions();
            this.d.data.appendTo(this.d.wrap);
            (d || a) && this.fixIE()
        },
        bindEvents: function() {
            var b = this;
            c("." + b.o.closeClass).bind("click.simplemodal", function(h) {
                h.preventDefault();
                b.close()
            });
            b.o.modal && b.o.close && b.o.overlayClose && b.d.overlay.bind("click.simplemodal", function(h) {
                h.preventDefault();
                b.close()
            });
            e.bind("keydown.simplemodal", function(h) {
                b.o.modal && 9 === h.keyCode ? b.watchTab(h) : b.o.close && b.o.escClose && 27 === h.keyCode && (h.preventDefault(), b.close())
            });
            o.bind("resize.simplemodal orientationchange.simplemodal", function() {
                b.getDimensions();
                b.o.autoResize ? b.setContainerDimensions() : b.o.autoPosition && b.setPosition();
                d || a ? b.fixIE() : b.o.modal && (b.d.iframe && b.d.iframe.css({
                    height: g[0],
                    width: g[1]
                }), b.d.overlay.css({
                    height: f[0],
                    width: f[1]
                }))
            })
        },
        unbindEvents: function() {
            c("." + this.o.closeClass).unbind("click.simplemodal");
            e.unbind("keydown.simplemodal");
            o.unbind(".simplemodal");
            this.d.overlay.unbind("click.simplemodal")
        },
        fixIE: function() {
            var b = this.o.position;
            c.each([this.d.iframe || null, !this.o.modal ? null : this.d.overlay, "fixed" === this.d.container.css("position") ? this.d.container : null], function(h, k) {
                if (k) {
                    var j = k[0].style;
                    j.position = "absolute";
                    if (2 > h) {
                        j.removeExpression("height"), j.removeExpression("width"), j.setExpression("height", 'document.body.scrollHeight > document.body.clientHeight ? document.body.scrollHeight : document.body.clientHeight + "px"'), j.setExpression("width", 'document.body.scrollWidth > document.body.clientWidth ? document.body.scrollWidth : document.body.clientWidth + "px"')
                    } else {
                        var m, l;
                        b && b.constructor === Array ? (m = b[0] ? "number" === typeof b[0] ? b[0].toString() : b[0].replace(/px/, "") : k.css("top").replace(/px/, ""), m = -1 === m.indexOf("%") ? m + ' + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"' : parseInt(m.replace(/%/, "")) + ' * ((document.documentElement.clientHeight || document.body.clientHeight) / 100) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"', b[1] && (l = "number" === typeof b[1] ? b[1].toString() : b[1].replace(/px/, ""), l = -1 === l.indexOf("%") ? l + ' + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"' : parseInt(l.replace(/%/, "")) + ' * ((document.documentElement.clientWidth || document.body.clientWidth) / 100) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"')) : (m = '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"', l = '(document.documentElement.clientWidth || document.body.clientWidth) / 2 - (this.offsetWidth / 2) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"');
                        j.removeExpression("top");
                        j.removeExpression("left");
                        j.setExpression("top", m);
                        j.setExpression("left", l)
                    }
                }
            })
        },
        focus: function(b) {
            var j = this,
                b = b && -1 !== c.inArray(b, ["first", "last"]) ? b : "first",
                h = c(":input:enabled:visible:" + b, j.d.wrap);
            setTimeout(function() {
                0 < h.length ? h.focus() : j.d.wrap.focus()
            }, 10)
        },
        getDimensions: function() {
            var b = c.browser.opera && "9.5" < c.browser.version && "1.3" > c.fn.jquery || c.browser.opera && "9.5" > c.browser.version && "1.2.6" < c.fn.jquery ? o[0].innerHeight : o.height();
            f = [e.height(), e.width()];
            g = [b, o.width()]
        },
        getVal: function(j, h) {
            return j ? "number" === typeof j ? j : "auto" === j ? 0 : 0 < j.indexOf("%") ? parseInt(j.replace(/%/, "")) / 100 * ("h" === h ? g[0] : g[1]) : parseInt(j.replace(/px/, "")) : null
        },
        update: function(j, h) {
            if (!this.d.data) {
                return !1
            }
            this.d.origHeight = this.getVal(j, "h");
            this.d.origWidth = this.getVal(h, "w");
            this.d.data.hide();
            j && this.d.container.css("height", j);
            h && this.d.container.css("width", h);
            this.setContainerDimensions();
            this.d.data.show();
            this.o.focus && this.focus();
            this.unbindEvents();
            this.bindEvents()
        },
        setContainerDimensions: function() {
            var b = d || p,
                n = this.d.origHeight ? this.d.origHeight : c.browser.opera ? this.d.container.height() : this.getVal(b ? this.d.container[0].currentStyle.height : this.d.container.css("height"), "h"),
                b = this.d.origWidth ? this.d.origWidth : c.browser.opera ? this.d.container.width() : this.getVal(b ? this.d.container[0].currentStyle.width : this.d.container.css("width"), "w"),
                l = this.d.data.outerHeight(!0),
                k = this.d.data.outerWidth(!0);
            this.d.origHeight = this.d.origHeight || n;
            this.d.origWidth = this.d.origWidth || b;
            var q = this.o.maxHeight ? this.getVal(this.o.maxHeight, "h") : null,
                m = this.o.maxWidth ? this.getVal(this.o.maxWidth, "w") : null,
                q = q && q < g[0] ? q : g[0],
                m = m && m < g[1] ? m : g[1],
                j = this.o.minHeight ? this.getVal(this.o.minHeight, "h") : "auto",
                n = n ? this.o.autoResize && n > q ? q : n < j ? j : n : l ? l > q ? q : this.o.minHeight && "auto" !== j && l < j ? j : l : j,
                q = this.o.minWidth ? this.getVal(this.o.minWidth, "w") : "auto",
                b = b ? this.o.autoResize && b > m ? m : b < q ? q : b : k ? k > m ? m : this.o.minWidth && "auto" !== q && k < q ? q : k : q;
            this.d.container.css({
                height: n,
                width: b
            });
            this.d.wrap.css({
                overflow: l > n || k > b ? "auto" : "visible"
            });
            this.o.autoPosition && this.setPosition()
        },
        setPosition: function() {
            var j, h;
            j = g[0] / 2 - this.d.container.outerHeight(!0) / 2;
            h = g[1] / 2 - this.d.container.outerWidth(!0) / 2;
            var k = "fixed" !== this.d.container.css("position") ? o.scrollTop() : 0;
            this.o.position && "[object Array]" === Object.prototype.toString.call(this.o.position) ? (j = k + (this.o.position[0] || j), h = this.o.position[1] || h) : j = k + j;
            this.d.container.css({
                left: h,
                top: j
            })
        },
        watchTab: function(b) {
            if (0 < c(b.target).parents(".simplemodal-container").length) {
                if (this.inputs = c(":input:enabled:visible:first, :input:enabled:visible:last", this.d.data[0]), !b.shiftKey && b.target === this.inputs[this.inputs.length - 1] || b.shiftKey && b.target === this.inputs[0] || 0 === this.inputs.length) {
                    b.preventDefault(), this.focus(b.shiftKey ? "last" : "first")
                }
            } else {
                b.preventDefault(), this.focus()
            }
        },
        open: function() {
            this.d.iframe && this.d.iframe.show();
            c.isFunction(this.o.onOpen) ? this.o.onOpen.apply(this, [this.d]) : (this.d.overlay.show(), this.d.container.show(), this.d.data.show());
            this.o.focus && this.focus();
            this.bindEvents()
        },
        close: function() {
            if (!this.d.data) {
                return !1
            }
            this.unbindEvents();
            if (c.isFunction(this.o.onClose) && !this.occb) {
                this.occb = !0, this.o.onClose.apply(this, [this.d])
            } else {
                if (this.d.placeholder) {
                    var b = c("#simplemodal-placeholder");
                    this.o.persist ? b.replaceWith(this.d.data.removeClass("simplemodal-data").css("display", this.display)) : (this.d.data.hide().remove(), b.replaceWith(this.d.orig))
                } else {
                    this.d.data.hide().remove()
                }
                this.d.container.hide().remove();
                this.d.overlay.hide();
                this.d.iframe && this.d.iframe.hide().remove();
                this.d.overlay.remove();
                this.d = {}
            }
        }
    }
});
var CodeMirror = (function() {
    function w(aS, aO) {
        var ce = {},
            br = w.defaults;
        for (var aF in br) {
            if (br.hasOwnProperty(aF)) {
                ce[aF] = (aO && aO.hasOwnProperty(aF) ? aO : br)[aF]
            }
        }
        var aJ = document.createElement("div");
        aJ.className = "CodeMirror" + (ce.lineWrapping ? " CodeMirror-wrap" : "");
        aJ.innerHTML = '<div style="overflow: hidden; position: relative; width: 3px; height: 0px;"><textarea style="position: absolute; padding: 0; width: 1px; height: 1em" wrap="off" autocorrect="off" autocapitalize="off"></textarea></div><div class="CodeMirror-scrollbar"><div class="CodeMirror-scrollbar-inner"></div></div><div class="CodeMirror-scroll" tabindex="-1"><div style="position: relative"><div style="position: relative"><div class="CodeMirror-gutter"><div class="CodeMirror-gutter-text"></div></div><div class="CodeMirror-lines"><div style="position: relative; z-index: 0"><div style="position: absolute; width: 100%; height: 0; overflow: hidden; visibility: hidden;"></div><pre class="CodeMirror-cursor">&#160;</pre><pre class="CodeMirror-cursor" style="visibility: hidden">&#160;</pre><div style="position: relative; z-index: -1"></div><div></div></div></div></div></div></div>';
        if (aS.appendChild) {
            aS.appendChild(aJ)
        } else {
            aS(aJ)
        }
        var ca = aJ.firstChild,
            bu = ca.firstChild,
            bs = aJ.lastChild,
            bY = bs.firstChild,
            cu = bY.firstChild,
            aM = cu.firstChild,
            a4 = aM.firstChild,
            bD = aM.nextSibling.firstChild,
            aA = bD.firstChild,
            bk = aA.nextSibling,
            bd = bk.nextSibling,
            bo = bd.nextSibling,
            av = bo.nextSibling,
            aR = ca.nextSibling,
            cA = aR.firstChild;
        cT();
        cL();
        if (u) {
            bu.style.width = "0px"
        }
        if (!g) {
            bs.draggable = true
        }
        bD.style.outline = "none";
        if (ce.tabindex != null) {
            bu.tabIndex = ce.tabindex
        }
        if (ce.autofocus) {
            bL()
        }
        if (!ce.gutter && !ce.lineNumbers) {
            aM.style.display = "none"
        }
        if (o) {
            ca.style.height = "1px", ca.style.position = "absolute"
        }
        if (f) {
            aR.className += (bJ() ? " cm-sb-overlap" : " cm-sb-nonoverlap")
        } else {
            if (E) {
                aR.className += " cm-sb-ie7"
            }
        }
        try {
            cI("x")
        } catch (cm) {
            if (cm.message.match(/runtime/i)) {
                cm = new Error("A CodeMirror inside a P-style element does not work in Internet Explorer. (innerHTML bug)")
            }
            throw cm
        }
        var cl = new B(),
            aC = new B(),
            c6;
        var cp, cO = new k([new al([new e("")])]),
            cv, cx;
        b6();
        var de = {
            from: {
                line: 0,
                ch: 0
            },
            to: {
                line: 0,
                ch: 0
            },
            inverted: false
        };
        var cw, bz, a6, bF = 0,
            ch = 0,
            bj, cC = false,
            cH = false;
        var cE, ck, aH, c4, aV, bn, aY, cQ;
        var bl = 0,
            c7 = 0,
            bX = 0,
            bZ = 0;
        var cj;
        var bP = "",
            cU = false,
            by = true;
        var au = {};
        aw(function() {
            a2(ce.value || "");
            cE = false
        })();
        var bg = new m();
        t(bs, "mousedown", aw(cy));
        t(bs, "dblclick", aw(b9));
        t(bD, "selectstart", X);
        if (!R) {
            t(bs, "contextmenu", a8)
        }
        t(bs, "scroll", bW);
        t(aR, "scroll", bW);
        t(aR, "mousedown", function() {
            setTimeout(bL, 0)
        });
        t(bs, "mousewheel", aB);
        t(bs, "DOMMouseScroll", aB);
        t(window, "resize", function() {
            cr(true)
        });
        t(bu, "keyup", aw(cz));
        t(bu, "input", aW);
        t(bu, "keydown", aw(cq));
        t(bu, "keypress", aw(bv));
        t(bu, "focus", db);
        t(bu, "blur", aK);
        if (ce.dragDrop) {
            t(bs, "dragstart", aN);

            function bO(dh) {
                if (ce.onDragEvent && ce.onDragEvent(cn, S(dh))) {
                    return
                }
                y(dh)
            }
            t(bs, "dragenter", bO);
            t(bs, "dragover", bO);
            t(bs, "drop", aw(ar))
        }
        t(bs, "paste", function() {
            bL();
            aW()
        });
        t(bu, "paste", aW);
        t(bu, "cut", aw(function() {
            if (!ce.readOnly) {
                bB("")
            }
        }));
        if (o) {
            t(bY, "mouseup", function() {
                if (document.activeElement == bu) {
                    bu.blur()
                }
                bL()
            })
        }
        var cM;
        try {
            cM = (document.activeElement == bu)
        } catch (cm) {}
        if (cM || ce.autofocus) {
            setTimeout(db, 20)
        } else {
            aK()
        }

        function bA(dh) {
            return dh >= 0 && dh < cO.size
        }
        var cn = aJ.CodeMirror = {
            getValue: cf,
            setValue: aw(a2),
            getSelection: cg,
            replaceSelection: aw(bB),
            focus: function() {
                window.focus();
                bL();
                db();
                aW()
            },
            setOption: function(di, dj) {
                var dh = ce[di];
                ce[di] = dj;
                if (di == "mode" || di == "indentUnit") {
                    b6()
                } else {
                    if (di == "readOnly" && dj == "nocursor") {
                        aK();
                        bu.blur()
                    } else {
                        if (di == "readOnly" && !dj) {
                            cS(true)
                        } else {
                            if (di == "theme") {
                                cT()
                            } else {
                                if (di == "lineWrapping" && dh != dj) {
                                    aw(cX)()
                                } else {
                                    if (di == "tabSize") {
                                        cr(true)
                                    } else {
                                        if (di == "keyMap") {
                                            cL()
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (di == "lineNumbers" || di == "gutter" || di == "firstLineNumber" || di == "theme") {
                    bm();
                    cr(true)
                }
            },
            getOption: function(dh) {
                return ce[dh]
            },
            undo: aw(da),
            redo: aw(c0),
            indentLine: aw(function(di, dh) {
                if (typeof dh != "string") {
                    if (dh == null) {
                        dh = ce.smartIndent ? "smart" : "prev"
                    } else {
                        dh = dh ? "add" : "subtract"
                    }
                }
                if (bA(di)) {
                    bK(di, dh)
                }
            }),
            indentSelection: aw(cR),
            historySize: function() {
                return {
                    undo: bg.done.length,
                    redo: bg.undone.length
                }
            },
            clearHistory: function() {
                bg = new m()
            },
            matchBrackets: aw(function() {
                cs(true)
            }),
            getTokenAt: aw(function(dh) {
                dh = aZ(dh);
                return cW(dh.line).getTokenAt(cp, cJ(dh.line), dh.ch)
            }),
            getStateAfter: function(dh) {
                dh = cc(dh == null ? cO.size - 1 : dh);
                return cJ(dh + 1)
            },
            cursorCoords: function(di, dh) {
                if (di == null) {
                    di = de.inverted
                }
                return this.charCoords(di ? de.from : de.to, dh)
            },
            charCoords: function(di, dh) {
                di = aZ(di);
                if (dh == "local") {
                    return c8(di, false)
                }
                if (dh == "div") {
                    return c8(di, true)
                }
                return at(di)
            },
            coordsChar: function(dh) {
                var di = ao(bD);
                return bS(dh.x - di.left, dh.y - di.top)
            },
            markText: aw(bQ),
            setBookmark: a0,
            findMarksAt: bw,
            setMarker: aw(b8),
            clearMarker: aw(az),
            setLineClass: aw(bt),
            hideLine: aw(function(dh) {
                return c1(dh, true)
            }),
            showLine: aw(function(dh) {
                return c1(dh, false)
            }),
            onDeleteLine: function(dh, di) {
                if (typeof dh == "number") {
                    if (!bA(dh)) {
                        return null
                    }
                    dh = cW(dh)
                }(dh.handlers || (dh.handlers = [])).push(di);
                return dh
            },
            lineInfo: a1,
            addWidget: function(dl, dj, dn, dk, dq) {
                dl = c8(aZ(dl));
                var dm = dl.yBot,
                    di = dl.x;
                dj.style.position = "absolute";
                bY.appendChild(dj);
                if (dk == "over") {
                    dm = dl.y
                } else {
                    if (dk == "near") {
                        var dh = Math.max(bs.offsetHeight, cO.height * b1()),
                            dp = Math.max(bY.clientWidth, bD.clientWidth) - bc();
                        if (dl.yBot + dj.offsetHeight > dh && dl.y > dj.offsetHeight) {
                            dm = dl.y - dj.offsetHeight
                        }
                        if (di + dj.offsetWidth > dp) {
                            di = dp - dj.offsetWidth
                        }
                    }
                }
                dj.style.top = (dm + cG()) + "px";
                dj.style.left = dj.style.right = "";
                if (dq == "right") {
                    di = bY.clientWidth - dj.offsetWidth;
                    dj.style.right = "0px"
                } else {
                    if (dq == "left") {
                        di = 0
                    } else {
                        if (dq == "middle") {
                            di = (bY.clientWidth - dj.offsetWidth) / 2
                        }
                    }
                    dj.style.left = (di + bc()) + "px"
                }
                if (dn) {
                    aG(di, dm, di + dj.offsetWidth, dm + dj.offsetHeight)
                }
            },
            lineCount: function() {
                return cO.size
            },
            clipPos: aZ,
            getCursor: function(dh) {
                if (dh == null) {
                    dh = de.inverted
                }
                return ae(dh ? de.from : de.to)
            },
            somethingSelected: function() {
                return !ah(de.from, de.to)
            },
            setCursor: aw(function(dh, dj, di) {
                if (dj == null && typeof dh.line == "number") {
                    be(dh.line, dh.ch, di)
                } else {
                    be(dh, dj, di)
                }
            }),
            setSelection: aw(function(dj, di, dh) {
                (dh ? bI : bG)(aZ(dj), aZ(di || dj))
            }),
            getLine: function(dh) {
                if (bA(dh)) {
                    return cW(dh).text
                }
            },
            getLineHandle: function(dh) {
                if (bA(dh)) {
                    return cW(dh)
                }
            },
            setLine: aw(function(dh, di) {
                if (bA(dh)) {
                    b2(di, {
                        line: dh,
                        ch: 0
                    }, {
                        line: dh,
                        ch: cW(dh).text.length
                    })
                }
            }),
            removeLine: aw(function(dh) {
                if (bA(dh)) {
                    b2("", {
                        line: dh,
                        ch: 0
                    }, aZ({
                        line: dh + 1,
                        ch: 0
                    }))
                }
            }),
            replaceRange: aw(b2),
            getRange: function(di, dh) {
                return c5(aZ(di), aZ(dh))
            },
            triggerOnKeyDown: aw(cq),
            execCommand: function(dh) {
                return P[dh](cn)
            },
            moveH: aw(cV),
            deleteH: aw(cB),
            moveV: aw(cN),
            toggleOverwrite: function() {
                if (cC) {
                    cC = false;
                    bk.className = bk.className.replace(" CodeMirror-overwrite", "")
                } else {
                    cC = true;
                    bk.className += " CodeMirror-overwrite"
                }
            },
            posFromIndex: function(di) {
                var dj = 0,
                    dh;
                cO.iter(0, cO.size, function(dk) {
                    var dl = dk.text.length + 1;
                    if (dl > di) {
                        dh = di;
                        return true
                    }
                    di -= dl;
                    ++dj
                });
                return aZ({
                    line: dj,
                    ch: dh
                })
            },
            indexFromPos: function(di) {
                if (di.line < 0 || di.ch < 0) {
                    return 0
                }
                var dh = di.ch;
                cO.iter(0, di.line, function(dj) {
                    dh += dj.text.length + 1
                });
                return dh
            },
            scrollTo: function(dh, di) {
                if (dh != null) {
                    bs.scrollLeft = dh
                }
                if (di != null) {
                    aR.scrollTop = di
                }
                cr([])
            },
            getScrollInfo: function() {
                return {
                    x: bs.scrollLeft,
                    y: aR.scrollTop,
                    height: aR.scrollHeight,
                    width: bs.scrollWidth
                }
            },
            operation: function(dh) {
                return aw(dh)()
            },
            compoundChange: function(dh) {
                return b0(dh)
            },
            refresh: function() {
                cr(true);
                if (aR.scrollHeight > bF) {
                    aR.scrollTop = bF
                }
            },
            getInputField: function() {
                return bu
            },
            getWrapperElement: function() {
                return aJ
            },
            getScrollerElement: function() {
                return bs
            },
            getGutterElement: function() {
                return aM
            }
        };

        function cW(dh) {
            return F(cO, dh)
        }

        function ba(di, dh) {
            aY = true;
            var dj = dh - di.height;
            for (var dk = di; dk; dk = dk.parent) {
                dk.height += dj
            }
        }

        function a2(dh) {
            var di = {
                line: 0,
                ch: 0
            };
            aU(di, {
                line: cO.size - 1,
                ch: cW(cO.size - 1).text.length
            }, C(dh), di, di);
            cE = true
        }

        function cf() {
            var dh = [];
            cO.iter(0, cO.size, function(di) {
                dh.push(di.text)
            });
            return dh.join("\n")
        }

        function bW(dh) {
            if (bF != aR.scrollTop || ch != bs.scrollLeft) {
                bF = aR.scrollTop;
                ch = bs.scrollLeft;
                cr([]);
                if (ce.fixedGutter) {
                    aM.style.left = bs.scrollLeft + "px"
                }
                if (ce.onScroll) {
                    ce.onScroll(cn)
                }
            }
        }

        function cy(dr) {
            bb(A(dr, "shiftKey"));
            for (var dl = l(dr); dl != aJ; dl = dl.parentNode) {
                if (dl.parentNode == bY && dl != cu) {
                    return
                }
            }
            for (var dl = l(dr); dl != aJ; dl = dl.parentNode) {
                if (dl.parentNode == a4) {
                    if (ce.onGutterClick) {
                        ce.onGutterClick(cn, s(a4.childNodes, dl) + c7, dr)
                    }
                    return X(dr)
                }
            }
            var dh = a9(dr);
            switch (z(dr)) {
                case 3:
                    if (R && !Q) {
                        a8(dr)
                    }
                    return;
                case 2:
                    if (dh) {
                        be(dh.line, dh.ch, true)
                    }
                    setTimeout(bL, 20);
                    X(dr);
                    return
            }
            if (!dh) {
                if (l(dr) == bs) {
                    X(dr)
                }
                return
            }
            if (!cx) {
                db()
            }
            var di = +new Date;
            if (a6 && a6.time > di - 400 && ah(a6.pos, dh)) {
                X(dr);
                setTimeout(bL, 20);
                return aP(dh.line)
            } else {
                if (bz && bz.time > di - 400 && ah(bz.pos, dh)) {
                    a6 = {
                        time: di,
                        pos: dh
                    };
                    X(dr);
                    return bT(dh)
                } else {
                    bz = {
                        time: di,
                        pos: dh
                    }
                }
            }
            var dt = dh,
                dj;
            if (ce.dragDrop && I && !ce.readOnly && !ah(de.from, de.to) && !ad(dh, de.from) && !ad(de.to, dh)) {
                if (g) {
                    bs.draggable = true
                }

                function dm(du) {
                    if (g) {
                        bs.draggable = false
                    }
                    bj = false;
                    dq();
                    dk();
                    if (Math.abs(dr.clientX - du.clientX) + Math.abs(dr.clientY - du.clientY) < 10) {
                        X(du);
                        be(dh.line, dh.ch, true);
                        bL()
                    }
                }
                var dq = t(document, "mouseup", aw(dm), true);
                var dk = t(bs, "drop", aw(dm), true);
                bj = true;
                if (bs.dragDrop) {
                    bs.dragDrop()
                }
                return
            }
            X(dr);
            be(dh.line, dh.ch, true);

            function ds(du) {
                var dw = a9(du, true);
                if (dw && !ah(dw, dt)) {
                    if (!cx) {
                        db()
                    }
                    dt = dw;
                    bI(dh, dw);
                    cE = false;
                    var dv = bM();
                    if (dw.line >= dv.to || dw.line < dv.from) {
                        dj = setTimeout(aw(function() {
                            ds(du)
                        }), 150)
                    }
                }
            }

            function dp(du) {
                clearTimeout(dj);
                var dv = a9(du);
                if (dv) {
                    bI(dh, dv)
                }
                X(du);
                bL();
                cE = true;
                dn();
                dq()
            }
            var dn = t(document, "mousemove", aw(function(du) {
                clearTimeout(dj);
                X(du);
                if (!L && !z(du)) {
                    dp(du)
                } else {
                    ds(du)
                }
            }), true);
            var dq = t(document, "mouseup", aw(dp), true)
        }

        function b9(dh) {
            for (var dj = l(dh); dj != aJ; dj = dj.parentNode) {
                if (dj.parentNode == a4) {
                    return X(dh)
                }
            }
            var di = a9(dh);
            if (!di) {
                return
            }
            a6 = {
                time: +new Date,
                pos: di
            };
            X(dh);
            bT(di)
        }

        function ar(dl) {
            if (ce.onDragEvent && ce.onDragEvent(cn, S(dl))) {
                return
            }
            dl.preventDefault();
            var dp = a9(dl, true),
                di = dl.dataTransfer.files;
            if (!dp || ce.readOnly) {
                return
            }
            if (di && di.length && window.FileReader && window.File) {
                function dk(ds, dr) {
                    var dq = new FileReader;
                    dq.onload = function() {
                        dm[dr] = dq.result;
                        if (++dj == dn) {
                            dp = aZ(dp);
                            aw(function() {
                                var dt = b2(dm.join(""), dp, dp);
                                bI(dp, dt)
                            })()
                        }
                    };
                    dq.readAsText(ds)
                }
                var dn = di.length,
                    dm = Array(dn),
                    dj = 0;
                for (var dh = 0; dh < dn; ++dh) {
                    dk(di[dh], dh)
                }
            } else {
                if (bj && !(ad(dp, de.from) || ad(de.to, dp))) {
                    return
                }
                try {
                    var dm = dl.dataTransfer.getData("Text");
                    if (dm) {
                        b0(function() {
                            var dr = de.from,
                                dq = de.to;
                            bI(dp, dp);
                            if (bj) {
                                b2("", dr, dq)
                            }
                            bB(dm);
                            bL()
                        })
                    }
                } catch (dl) {}
            }
        }

        function aN(dj) {
            var dh = cg();
            dj.dataTransfer.setData("Text", dh);
            if (R || aj || O) {
                var di = document.createElement("img");
                di.scr = "data:image/gif;base64,R0lGODdhAgACAIAAAAAAAP///ywAAAAAAgACAAACAoRRADs=";
                dj.dataTransfer.setDragImage(di, 0, 0)
            }
        }

        function bq(dj, dh) {
            if (typeof dj == "string") {
                dj = P[dj];
                if (!dj) {
                    return false
                }
            }
            var di = cw;
            try {
                if (ce.readOnly) {
                    cH = true
                }
                if (dh) {
                    cw = null
                }
                dj(cn)
            } catch (dk) {
                if (dk != af) {
                    throw dk
                }
                return false
            } finally {
                cw = di;
                cH = false
            }
            return true
        }

        function c2(dn) {
            var dh = c(ce.keyMap),
                dk = dh.auto;
            clearTimeout(bN);
            if (dk && !U(dn)) {
                bN = setTimeout(function() {
                    if (c(ce.keyMap) == dh) {
                        ce.keyMap = (dk.call ? dk.call(null, cn) : dk)
                    }
                }, 50)
            }
            var di = V[A(dn, "keyCode")],
                dm = false;
            if (di == null || dn.altGraphKey) {
                return false
            }
            if (A(dn, "altKey")) {
                di = "Alt-" + di
            }
            if (A(dn, "ctrlKey")) {
                di = "Ctrl-" + di
            }
            if (A(dn, "metaKey")) {
                di = "Cmd-" + di
            }
            var dl = false;

            function dj() {
                dl = true
            }
            if (A(dn, "shiftKey")) {
                dm = n("Shift-" + di, ce.extraKeys, ce.keyMap, function(dp) {
                    return bq(dp, true)
                }, dj) || n(di, ce.extraKeys, ce.keyMap, function(dp) {
                    if (typeof dp == "string" && /^go[A-Z]/.test(dp)) {
                        return bq(dp)
                    }
                }, dj)
            } else {
                dm = n(di, ce.extraKeys, ce.keyMap, bq, dj)
            }
            if (dl) {
                dm = false
            }
            if (dm) {
                X(dn);
                c3();
                if (L) {
                    dn.oldKeyCode = dn.keyCode;
                    dn.keyCode = 0
                }
            }
            return dm
        }

        function cb(dj, dh) {
            var di = n("'" + dh + "'", ce.extraKeys, ce.keyMap, function(dk) {
                return bq(dk, true)
            });
            if (di) {
                X(dj);
                c3()
            }
            return di
        }
        var cZ = null,
            bN;

        function cq(dj) {
            if (!cx) {
                db()
            }
            if (L && dj.keyCode == 27) {
                dj.returnValue = false
            }
            if (bC) {
                if (bV()) {
                    bC = false
                }
            }
            if (ce.onKeyEvent && ce.onKeyEvent(cn, S(dj))) {
                return
            }
            var dh = A(dj, "keyCode");
            bb(dh == 16 || A(dj, "shiftKey"));
            var di = c2(dj);
            if (O) {
                cZ = di ? dh : null;
                if (!di && dh == 88 && A(dj, Q ? "metaKey" : "ctrlKey")) {
                    bB("")
                }
            }
        }

        function bv(dk) {
            if (bC) {
                bV()
            }
            if (ce.onKeyEvent && ce.onKeyEvent(cn, S(dk))) {
                return
            }
            var dj = A(dk, "keyCode"),
                dh = A(dk, "charCode");
            if (O && dj == cZ) {
                cZ = null;
                X(dk);
                return
            }
            if (((O && (!dk.which || dk.which < 10)) || o) && c2(dk)) {
                return
            }
            var di = String.fromCharCode(dh == null ? dj : dh);
            if (ce.electricChars && cp.electricChars && ce.smartIndent && !ce.readOnly) {
                if (cp.electricChars.indexOf(di) > -1) {
                    setTimeout(aw(function() {
                        bK(de.to.line, "smart")
                    }), 75)
                }
            }
            if (cb(dk, di)) {
                return
            }
            aW()
        }

        function cz(dh) {
            if (ce.onKeyEvent && ce.onKeyEvent(cn, S(dh))) {
                return
            }
            if (A(dh, "keyCode") == 16) {
                cw = null
            }
        }

        function db() {
            if (ce.readOnly == "nocursor") {
                return
            }
            if (!cx) {
                if (ce.onFocus) {
                    ce.onFocus(cn)
                }
                cx = true;
                if (bs.className.search(/\bCodeMirror-focused\b/) == -1) {
                    bs.className += " CodeMirror-focused"
                }
                if (!bn) {
                    cS(true)
                }
            }
            aq();
            c3()
        }

        function aK() {
            if (cx) {
                if (ce.onBlur) {
                    ce.onBlur(cn)
                }
                cx = false;
                if (cj) {
                    aw(function() {
                        if (cj) {
                            cj();
                            cj = null
                        }
                    })()
                }
                bs.className = bs.className.replace(" CodeMirror-focused", "")
            }
            clearInterval(c6);
            setTimeout(function() {
                if (!cx) {
                    cw = null
                }
            }, 150)
        }

        function dc(dh) {
            if (dh > 0 && dh < 1) {
                return 1
            } else {
                if (dh > -1 && dh < 0) {
                    return -1
                } else {
                    return Math.round(dh)
                }
            }
        }

        function aB(dk) {
            var di = 0,
                dh = 0;
            if (dk.type == "DOMMouseScroll") {
                var dl = -dk.detail * 8;
                if (dk.axis == dk.HORIZONTAL_AXIS) {
                    di = dl
                } else {
                    if (dk.axis == dk.VERTICAL_AXIS) {
                        dh = dl
                    }
                }
            } else {
                if (dk.wheelDeltaX !== undefined && dk.wheelDeltaY !== undefined) {
                    di = dk.wheelDeltaX / 3;
                    dh = dk.wheelDeltaY / 3
                } else {
                    if (dk.wheelDelta !== undefined) {
                        dh = dk.wheelDelta / 3
                    }
                }
            }
            var dj = false;
            di = dc(di);
            dh = dc(dh);
            if ((di > 0 && bs.scrollLeft > 0) || (di < 0 && bs.scrollLeft + bs.clientWidth < bs.scrollWidth)) {
                bs.scrollLeft -= di;
                dj = true
            }
            if ((dh > 0 && aR.scrollTop > 0) || (dh < 0 && aR.scrollTop + aR.clientHeight < aR.scrollHeight)) {
                aR.scrollTop -= dh;
                dj = true
            }
            if (dj) {
                y(dk)
            }
        }

        function aU(dm, dl, dk, di, dh) {
            if (cH) {
                return
            }
            if (bg) {
                var dj = [];
                cO.iter(dm.line, dl.line + 1, function(dn) {
                    dj.push(dn.text)
                });
                bg.addChange(dm.line, dk.length, dj);
                while (bg.done.length > ce.undoDepth) {
                    bg.done.shift()
                }
            }
            ax(dm, dl, dk, di, dh)
        }

        function co(dm, dn) {
            if (!dm.length) {
                return
            }
            var dp = dm.pop(),
                di = [];
            for (var dj = dp.length - 1; dj >= 0; dj -= 1) {
                var dl = dp[dj];
                var dq = [],
                    dh = dl.start + dl.added;
                cO.iter(dl.start, dh, function(dr) {
                    dq.push(dr.text)
                });
                di.push({
                    start: dl.start,
                    added: dl.old.length,
                    old: dq
                });
                var dk = {
                    line: dl.start + dl.old.length - 1,
                    ch: aa(dq[dq.length - 1], dl.old[dl.old.length - 1])
                };
                ax({
                    line: dl.start,
                    ch: 0
                }, {
                    line: dh - 1,
                    ch: cW(dh - 1).text.length
                }, dl.old, dk, dk)
            }
            cE = true;
            dn.push(di)
        }

        function da() {
            co(bg.done, bg.undone)
        }

        function c0() {
            co(bg.undone, bg.done)
        }

        function ax(dx, dl, dD, dh, dE) {
            if (cH) {
                return
            }
            var dC = false,
                dk = bP.length;
            if (!ce.lineWrapping) {
                cO.iter(dx.line, dl.line + 1, function(dF) {
                    if (!dF.hidden && dF.text.length == dk) {
                        dC = true;
                        return true
                    }
                })
            }
            if (dx.line != dl.line || dD.length > 1) {
                aY = true
            }
            var du = dl.line - dx.line,
                dt = cW(dx.line),
                di = cW(dl.line);
            if (dx.ch == 0 && dl.ch == 0 && dD[dD.length - 1] == "") {
                var dr = [],
                    ds = null;
                if (dx.line) {
                    ds = cW(dx.line - 1);
                    ds.fixMarkEnds(di)
                } else {
                    di.fixMarkStarts()
                }
                for (var dz = 0, dB = dD.length - 1; dz < dB; ++dz) {
                    dr.push(e.inheritMarks(dD[dz], ds))
                }
                if (du) {
                    cO.remove(dx.line, du, cQ)
                }
                if (dr.length) {
                    cO.insert(dx.line, dr)
                }
            } else {
                if (dt == di) {
                    if (dD.length == 1) {
                        dt.replace(dx.ch, dl.ch, dD[0])
                    } else {
                        di = dt.split(dl.ch, dD[dD.length - 1]);
                        dt.replace(dx.ch, null, dD[0]);
                        dt.fixMarkEnds(di);
                        var dr = [];
                        for (var dz = 1, dB = dD.length - 1; dz < dB; ++dz) {
                            dr.push(e.inheritMarks(dD[dz], dt))
                        }
                        dr.push(di);
                        cO.insert(dx.line + 1, dr)
                    }
                } else {
                    if (dD.length == 1) {
                        dt.replace(dx.ch, null, dD[0]);
                        di.replace(null, dl.ch, "");
                        dt.append(di);
                        cO.remove(dx.line + 1, du, cQ)
                    } else {
                        var dr = [];
                        dt.replace(dx.ch, null, dD[0]);
                        di.replace(null, dl.ch, dD[dD.length - 1]);
                        dt.fixMarkEnds(di);
                        for (var dz = 1, dB = dD.length - 1; dz < dB; ++dz) {
                            dr.push(e.inheritMarks(dD[dz], dt))
                        }
                        if (du > 1) {
                            cO.remove(dx.line + 1, du - 1, cQ)
                        }
                        cO.insert(dx.line + 1, dr)
                    }
                }
            }
            if (ce.lineWrapping) {
                var dn = Math.max(5, bs.clientWidth / bp() - 3);
                cO.iter(dx.line, dx.line + dD.length, function(dF) {
                    if (dF.hidden) {
                        return
                    }
                    var dG = Math.ceil(dF.text.length / dn) || 1;
                    if (dG != dF.height) {
                        ba(dF, dG)
                    }
                })
            } else {
                cO.iter(dx.line, dx.line + dD.length, function(dG) {
                    var dF = dG.text;
                    if (!dG.hidden && dF.length > dk) {
                        bP = dF;
                        dk = dF.length;
                        by = true;
                        dC = false
                    }
                });
                if (dC) {
                    cU = true
                }
            }
            var dj = [],
                dq = dD.length - du - 1;
            for (var dz = 0, dw = cv.length; dz < dw; ++dz) {
                var dA = cv[dz];
                if (dA < dx.line) {
                    dj.push(dA)
                } else {
                    if (dA > dl.line) {
                        dj.push(dA + dq)
                    }
                }
            }
            var dy = dx.line + Math.min(dD.length, 500);
            cY(dx.line, dy);
            dj.push(dy);
            cv = dj;
            bR(100);
            aH.push({
                from: dx.line,
                to: dl.line + 1,
                diff: dq
            });
            var dp = {
                from: dx,
                to: dl,
                text: dD
            };
            if (c4) {
                for (var dm = c4; dm.next; dm = dm.next) {}
                dm.next = dp
            } else {
                c4 = dp
            }

            function dv(dF) {
                return dF <= Math.min(dl.line, dl.line + dq) ? dF : dF + dq
            }
            bG(aZ(dh), aZ(dE), dv(de.from.line), dv(de.to.line))
        }

        function ay(dj) {
            var dh = b1(),
                di = Math.floor(cO.height * dh + 2 * cG()),
                dk = bs.clientHeight;
            aR.style.height = dk + "px";
            if (bs.clientHeight) {
                cA.style.height = di + "px"
            }
            if (dj != null) {
                aR.scrollTop = dj
            }
            cu.style.top = (bl * dh - aR.scrollTop) + "px";
            aR.style.display = (di > dk) ? "block" : "none"
        }

        function bJ() {
            var dj = document.createElement("div"),
                di = document.createElement("div");
            dj.className = "CodeMirror-scrollbar";
            dj.style.cssText = "position: absolute; left: -9999px; height: 100px;";
            di.className = "CodeMirror-scrollbar-inner";
            di.style.height = "200px";
            dj.appendChild(di);
            document.body.appendChild(dj);
            var dh = (dj.offsetWidth <= 1);
            document.body.removeChild(dj);
            return dh
        }

        function bH() {
            var dh = 0;
            bP = "";
            by = true;
            cO.iter(0, cO.size, function(dj) {
                var di = dj.text;
                if (!dj.hidden && di.length > dh) {
                    dh = di.length;
                    bP = di
                }
            });
            cU = false
        }

        function b2(di, dl, dk) {
            dl = aZ(dl);
            if (!dk) {
                dk = dl
            } else {
                dk = aZ(dk)
            }
            di = C(di);

            function dj(dp) {
                if (ad(dp, dl)) {
                    return dp
                }
                if (!ad(dk, dp)) {
                    return dh
                }
                var dm = dp.line + di.length - (dk.line - dl.line) - 1;
                var dn = dp.ch;
                if (dp.line == dk.line) {
                    dn += di[di.length - 1].length - (dk.ch - (dk.line == dl.line ? dl.ch : 0))
                }
                return {
                    line: dm,
                    ch: dn
                }
            }
            var dh;
            aI(di, dl, dk, function(dm) {
                dh = dm;
                return {
                    from: dj(de.from),
                    to: dj(de.to)
                }
            });
            return dh
        }

        function bB(dh, di) {
            aI(C(dh), de.from, de.to, function(dj) {
                if (di == "end") {
                    return {
                        from: dj,
                        to: dj
                    }
                } else {
                    if (di == "start") {
                        return {
                            from: de.from,
                            to: de.from
                        }
                    } else {
                        return {
                            from: de.from,
                            to: dj
                        }
                    }
                }
            })
        }

        function aI(dk, dm, dl, dh) {
            var dj = dk.length == 1 ? dk[0].length + dm.ch : dk[dk.length - 1].length;
            var di = dh({
                line: dm.line + dk.length - 1,
                ch: dj
            });
            aU(dm, dl, dk, di.from, di.to)
        }

        function c5(dl, dk) {
            var di = dl.line,
                dh = dk.line;
            if (di == dh) {
                return cW(di).text.slice(dl.ch, dk.ch)
            }
            var dj = [cW(di).text.slice(dl.ch)];
            cO.iter(di + 1, dh, function(dm) {
                dj.push(dm.text)
            });
            dj.push(cW(dh).text.slice(0, dk.ch));
            return dj.join("\n")
        }

        function cg() {
            return c5(de.from, de.to)
        }
        var bC = false;

        function aq() {
            if (bC) {
                return
            }
            cl.set(ce.pollInterval, function() {
                aT();
                bV();
                if (cx) {
                    aq()
                }
                aE()
            })
        }

        function aW() {
            var dh = false;
            bC = true;

            function di() {
                aT();
                var dj = bV();
                if (!dj && !dh) {
                    dh = true;
                    cl.set(60, di)
                } else {
                    bC = false;
                    aq()
                }
                aE()
            }
            cl.set(20, di)
        }
        var bi = "";

        function bV() {
            if (bn || !cx || ai(bu) || ce.readOnly) {
                return false
            }
            var di = bu.value;
            if (di == bi) {
                return false
            }
            cw = null;
            var dj = 0,
                dh = Math.min(bi.length, di.length);
            while (dj < dh && bi[dj] == di[dj]) {
                ++dj
            }
            if (dj < bi.length) {
                de.from = {
                    line: de.from.line,
                    ch: de.from.ch - (bi.length - dj)
                }
            } else {
                if (cC && ah(de.from, de.to)) {
                    de.to = {
                        line: de.to.line,
                        ch: Math.min(cW(de.to.line).text.length, de.to.ch + (di.length - dj))
                    }
                }
            }
            bB(di.slice(dj), "end");
            if (di.length > 1000) {
                bu.value = bi = ""
            } else {
                bi = di
            }
            return true
        }

        function cS(dh) {
            if (!ah(de.from, de.to)) {
                bi = "";
                bu.value = cg();
                a(bu)
            } else {
                if (dh) {
                    bi = bu.value = ""
                }
            }
        }

        function bL() {
            if (ce.readOnly != "nocursor") {
                bu.focus()
            }
        }

        function dg() {
            if (!bk.getBoundingClientRect) {
                return
            }
            var dh = bk.getBoundingClientRect();
            if (L && dh.top == dh.bottom) {
                return
            }
            var di = window.innerHeight || Math.max(document.body.offsetHeight, document.documentElement.offsetHeight);
            if (dh.top < 0 || dh.bottom > di) {
                ct()
            }
        }

        function ct() {
            var dh = b3();
            return aG(dh.x, dh.y, dh.x, dh.yBot)
        }

        function b3() {
            var di = c8(de.inverted ? de.from : de.to);
            var dh = ce.lineWrapping ? Math.min(di.x, bD.offsetWidth) : di.x;
            return {
                x: dh,
                y: di.y,
                yBot: di.yBot
            }
        }

        function aG(dj, dl, dh, dk) {
            var dm = a5(dj, dl, dh, dk),
                di = false;
            if (dm.scrollLeft != null) {
                bs.scrollLeft = dm.scrollLeft;
                di = true
            }
            if (dm.scrollTop != null) {
                aR.scrollTop = dm.scrollTop;
                di = true
            }
            if (di && ce.onScroll) {
                ce.onScroll(cn)
            }
        }

        function a5(dj, dq, di, dp) {
            var dm = bc(),
                dv = cG();
            dq += dv;
            dp += dv;
            dj += dm;
            di += dm;
            var ds = bs.clientHeight,
                dk = aR.scrollTop,
                du = {};
            var dh = dq < cG() + 10;
            if (dq < dk) {
                du.scrollTop = dh ? 0 : Math.max(0, dq)
            } else {
                if (dp > dk + ds) {
                    du.scrollTop = dp - ds
                }
            }
            var dr = bs.clientWidth,
                dt = bs.scrollLeft;
            var dn = ce.fixedGutter ? aM.clientWidth : 0;
            var dl = dj < dn + dm + 10;
            if (dj < dt + dn || dl) {
                if (dl) {
                    dj = 0
                }
                du.scrollLeft = Math.max(0, dj - 10 - dn)
            } else {
                if (di > dr + dt - 3) {
                    du.scrollLeft = di + 10 - dr
                }
            }
            return du
        }

        function bM(dl) {
            var dh = b1(),
                dk = (dl != null ? dl : aR.scrollTop) - cG();
            var dj = Math.max(0, Math.floor(dk / dh));
            var di = Math.ceil((dk + bs.clientHeight) / dh);
            return {
                from: ab(cO, dj),
                to: ab(cO, di)
            }
        }

        function cr(ds, dn, dl) {
            if (!bs.clientWidth) {
                c7 = bX = bl = 0;
                return
            }
            var dm = bM(dl);
            if (ds !== true && ds.length == 0 && dm.from > c7 && dm.to < bX) {
                ay(dl);
                return
            }
            var dt = Math.max(dm.from - 100, 0),
                du = Math.min(cO.size, dm.to + 100);
            if (c7 < dt && dt - c7 < 20) {
                dt = c7
            }
            if (bX > du && bX - du < 20) {
                du = Math.min(cO.size, bX)
            }
            var dx = ds === true ? [] : cd([{
                from: c7,
                to: bX,
                domStart: 0
            }], ds);
            var dr = 0;
            for (var dp = 0; dp < dx.length; ++dp) {
                var dq = dx[dp];
                if (dq.from < dt) {
                    dq.domStart += (dt - dq.from);
                    dq.from = dt
                }
                if (dq.to > du) {
                    dq.to = du
                }
                if (dq.from >= dq.to) {
                    dx.splice(dp--, 1)
                } else {
                    dr += dq.to - dq.from
                }
            }
            if (dr == du - dt && dt == c7 && du == bX) {
                ay(dl);
                return
            }
            dx.sort(function(dz, dy) {
                return dz.domStart - dy.domStart
            });
            var dk = b1(),
                dh = aM.style.display;
            av.style.display = "none";
            aX(dt, du, dx);
            av.style.display = aM.style.display = "";
            var dj = dt != c7 || du != bX || bZ != bs.clientHeight + dk;
            if (dj) {
                bZ = bs.clientHeight + dk
            }
            c7 = dt;
            bX = du;
            bl = h(cO, dt);
            if (av.childNodes.length != bX - c7) {
                throw new Error("BAD PATCH! " + JSON.stringify(dx) + " size=" + (bX - c7) + " nodes=" + av.childNodes.length)
            }

            function dv() {
                var dz = av.firstChild,
                    dy = false;
                cO.iter(c7, bX, function(dB) {
                    if (!dB.hidden) {
                        var dA = Math.round(dz.offsetHeight / dk) || 1;
                        if (dB.height != dA) {
                            ba(dB, dA);
                            aY = dy = true
                        }
                    }
                    dz = dz.nextSibling
                });
                return dy
            }
            if (ce.lineWrapping) {
                var dw = Math.floor(cO.height * dk + 2 * cG()),
                    di = bs.clientHeight;
                if (dw > di) {
                    aR.style.display = "block"
                }
                dv()
            }
            aM.style.display = dh;
            if (dj || aY) {
                aQ() && ce.lineWrapping && dv() && aQ()
            }
            dd();
            ay(dl);
            if (!dn && ce.onUpdate) {
                ce.onUpdate(cn)
            }
            return true
        }

        function cd(dr, dp) {
            for (var dl = 0, dj = dp.length || 0; dl < dj; ++dl) {
                var dn = dp[dl],
                    dh = [],
                    dq = dn.diff || 0;
                for (var dk = 0, di = dr.length; dk < di; ++dk) {
                    var dm = dr[dk];
                    if (dn.to <= dm.from && dn.diff) {
                        dh.push({
                            from: dm.from + dq,
                            to: dm.to + dq,
                            domStart: dm.domStart
                        })
                    } else {
                        if (dn.to <= dm.from || dn.from >= dm.to) {
                            dh.push(dm)
                        } else {
                            if (dn.from > dm.from) {
                                dh.push({
                                    from: dm.from,
                                    to: dn.from,
                                    domStart: dm.domStart
                                })
                            }
                            if (dn.to < dm.to) {
                                dh.push({
                                    from: dn.to + dq,
                                    to: dm.to + dq,
                                    domStart: dm.domStart + (dn.to - dm.from)
                                })
                            }
                        }
                    }
                }
                dr = dh
            }
            return dr
        }

        function aX(dr, ds, du) {
            if (!du.length) {
                av.innerHTML = ""
            } else {
                function dh(dw) {
                    var dv = dw.nextSibling;
                    dw.parentNode.removeChild(dw);
                    return dv
                }
                var dl = 0,
                    dj = av.firstChild,
                    di;
                for (var dm = 0; dm < du.length; ++dm) {
                    var dt = du[dm];
                    while (dt.domStart > dl) {
                        dj = dh(dj);
                        dl++
                    }
                    for (var dk = 0, dp = dt.to - dt.from; dk < dp; ++dk) {
                        dj = dj.nextSibling;
                        dl++
                    }
                }
                while (dj) {
                    dj = dh(dj)
                }
            }
            var dn = du.shift(),
                dj = av.firstChild,
                dk = dr;
            var dq = document.createElement("div");
            cO.iter(dr, ds, function(dv) {
                if (dn && dn.to == dk) {
                    dn = du.shift()
                }
                if (!dn || dn.from > dk) {
                    if (dv.hidden) {
                        var dw = dq.innerHTML = "<pre></pre>"
                    } else {
                        var dw = "<pre" + (dv.className ? ' class="' + dv.className + '"' : "") + ">" + dv.getHTML(bh) + "</pre>";
                        if (dv.bgClassName) {
                            dw = '<div style="position: relative"><pre class="' + dv.bgClassName + '" style="position: absolute; left: 0; right: 0; top: 0; bottom: 0; z-index: -2">&#160;</pre>' + dw + "</div>"
                        }
                    }
                    dq.innerHTML = dw;
                    av.insertBefore(dq.firstChild, dj)
                } else {
                    dj = dj.nextSibling
                }++dk
            })
        }

        function aQ() {
            if (!ce.gutter && !ce.lineNumbers) {
                return
            }
            var di = cu.offsetHeight,
                dr = bs.clientHeight;
            aM.style.height = (di - dr < 2 ? dr : di) + "px";
            var dp = [],
                dm = c7,
                dq;
            cO.iter(c7, Math.max(bX, c7 + 1), function(dt) {
                if (dt.hidden) {
                    dp.push("<pre></pre>")
                } else {
                    var ds = dt.gutterMarker;
                    var dv = ce.lineNumbers ? dm + ce.firstLineNumber : null;
                    if (ds && ds.text) {
                        dv = ds.text.replace("%N%", dv != null ? dv : "")
                    } else {
                        if (dv == null) {
                            dv = "\u00a0"
                        }
                    }
                    dp.push((ds && ds.style ? '<pre class="' + ds.style + '">' : "<pre>"), dv);
                    for (var du = 1; du < dt.height; ++du) {
                        dp.push("<br/>&#160;")
                    }
                    dp.push("</pre>");
                    if (!ds) {
                        dq = dm
                    }
                }++dm
            });
            aM.style.display = "none";
            a4.innerHTML = dp.join("");
            if (dq != null && ce.lineNumbers) {
                var dk = a4.childNodes[dq - c7];
                var dl = String(cO.size).length,
                    dh = K(dk.firstChild),
                    dj = "";
                while (dh.length + dj.length < dl) {
                    dj += "\u00a0"
                }
                if (dj) {
                    dk.insertBefore(document.createTextNode(dj), dk.firstChild)
                }
            }
            aM.style.display = "";
            var dn = Math.abs((parseInt(bD.style.marginLeft) || 0) - aM.offsetWidth) > 2;
            bD.style.marginLeft = aM.offsetWidth + "px";
            aY = false;
            return dn
        }

        function dd() {
            var dk = ah(de.from, de.to);
            var dw = c8(de.from, true);
            var dr = dk ? dw : c8(de.to, true);
            var dp = de.inverted ? dw : dr,
                di = b1();
            var dh = ao(aJ),
                dj = ao(av);
            ca.style.top = Math.max(0, Math.min(bs.offsetHeight, dp.y + dj.top - dh.top)) + "px";
            ca.style.left = Math.max(0, Math.min(bs.offsetWidth, dp.x + dj.left - dh.left)) + "px";
            if (dk) {
                bk.style.top = dp.y + "px";
                bk.style.left = (ce.lineWrapping ? Math.min(dp.x, bD.offsetWidth) : dp.x) + "px";
                bk.style.display = "";
                bo.style.display = "none"
            } else {
                var du = dw.y == dr.y,
                    dm = "";
                var ds = bD.clientWidth || bD.offsetWidth;
                var dn = bD.clientHeight || bD.offsetHeight;

                function dv(dB, dA, dz, dx) {
                    var dy = H ? "width: " + (!dz ? ds : ds - dz - dB) + "px" : "right: " + dz + "px";
                    dm += '<div class="CodeMirror-selected" style="position: absolute; left: ' + dB + "px; top: " + dA + "px; " + dy + "; height: " + dx + 'px"></div>'
                }
                if (de.from.ch && dw.y >= 0) {
                    var dt = du ? ds - dr.x : 0;
                    dv(dw.x, dw.y, dt, di)
                }
                var dl = Math.max(0, dw.y + (de.from.ch ? di : 0));
                var dq = Math.min(dr.y, dn) - dl;
                if (dq > 0.2 * di) {
                    dv(0, dl, 0, dq)
                }
                if ((!du || !de.from.ch) && dr.y < dn - 0.5 * di) {
                    dv(0, dr.y, ds - dr.x, di)
                }
                bo.innerHTML = dm;
                bk.style.display = "none";
                bo.style.display = ""
            }
        }

        function bb(dh) {
            if (dh) {
                cw = cw || (de.inverted ? de.to : de.from)
            } else {
                cw = null
            }
        }

        function bI(dj, di) {
            var dh = cw && aZ(cw);
            if (dh) {
                if (ad(dh, dj)) {
                    dj = dh
                } else {
                    if (ad(di, dh)) {
                        di = dh
                    }
                }
            }
            bG(dj, di);
            ck = true
        }

        function bG(dp, dn, dh, dm) {
            cK = null;
            if (dh == null) {
                dh = de.from.line;
                dm = de.to.line
            }
            if (ah(de.from, dp) && ah(de.to, dn)) {
                return
            }
            if (ad(dn, dp)) {
                var dk = dn;
                dn = dp;
                dp = dk
            }
            if (dp.line != dh) {
                var dl = b4(dp, dh, de.from.ch);
                if (!dl) {
                    c1(dp.line, false)
                } else {
                    dp = dl
                }
            }
            if (dn.line != dm) {
                dn = b4(dn, dm, de.to.ch)
            }
            if (ah(dp, dn)) {
                de.inverted = false
            } else {
                if (ah(dp, de.to)) {
                    de.inverted = false
                } else {
                    if (ah(dn, de.from)) {
                        de.inverted = true
                    }
                }
            }
            if (ce.autoClearEmptyLines && ah(de.from, de.to)) {
                var dj = de.inverted ? dp : dn;
                if (dj.line != de.from.line && de.from.line < cO.size) {
                    var di = cW(de.from.line);
                    if (/^\s+$/.test(di.text)) {
                        setTimeout(aw(function() {
                            if (di.parent && /^\s+$/.test(di.text)) {
                                var dq = ac(di);
                                b2("", {
                                    line: dq,
                                    ch: 0
                                }, {
                                    line: dq,
                                    ch: di.text.length
                                })
                            }
                        }, 10))
                    }
                }
            }
            de.from = dp;
            de.to = dn;
            aV = true
        }

        function b4(dm, di, dj) {
            function dl(dq) {
                var ds = dm.line + dq,
                    dp = dq == 1 ? cO.size : -1;
                while (ds != dp) {
                    var dn = cW(ds);
                    if (!dn.hidden) {
                        var dr = dm.ch;
                        if (dk || dr > dj || dr > dn.text.length) {
                            dr = dn.text.length
                        }
                        return {
                            line: ds,
                            ch: dr
                        }
                    }
                    ds += dq
                }
            }
            var dh = cW(dm.line);
            var dk = dm.ch == dh.text.length && dm.ch != dj;
            if (!dh.hidden) {
                return dm
            }
            if (dm.line >= di) {
                return dl(1) || dl(-1)
            } else {
                return dl(-1) || dl(1)
            }
        }

        function be(dh, dj, di) {
            var dk = aZ({
                line: dh,
                ch: dj || 0
            });
            (di ? bI : bG)(dk, dk)
        }

        function cc(dh) {
            return Math.max(0, Math.min(dh, cO.size - 1))
        }

        function aZ(dj) {
            if (dj.line < 0) {
                return {
                    line: 0,
                    ch: 0
                }
            }
            if (dj.line >= cO.size) {
                return {
                    line: cO.size - 1,
                    ch: cW(cO.size - 1).text.length
                }
            }
            var dh = dj.ch,
                di = cW(dj.line).text.length;
            if (dh == null || dh > di) {
                return {
                    line: dj.line,
                    ch: di
                }
            } else {
                if (dh < 0) {
                    return {
                        line: dj.line,
                        ch: 0
                    }
                } else {
                    return dj
                }
            }
        }

        function cD(dk, dp) {
            var dl = de.inverted ? de.from : de.to,
                dq = dl.line,
                dh = dl.ch;
            var dn = cW(dq);

            function di() {
                for (var dr = dq + dk, dt = dk < 0 ? -1 : cO.size; dr != dt; dr += dk) {
                    var ds = cW(dr);
                    if (!ds.hidden) {
                        dq = dr;
                        dn = ds;
                        return true
                    }
                }
            }

            function dm(dr) {
                if (dh == (dk < 0 ? 0 : dn.text.length)) {
                    if (!dr && di()) {
                        dh = dk < 0 ? dn.text.length : 0
                    } else {
                        return false
                    }
                } else {
                    dh += dk
                }
                return true
            }
            if (dp == "char") {
                dm()
            } else {
                if (dp == "column") {
                    dm(true)
                } else {
                    if (dp == "word") {
                        var dj = false;
                        for (;;) {
                            if (dk < 0) {
                                if (!dm()) {
                                    break
                                }
                            }
                            if (ak(dn.text.charAt(dh))) {
                                dj = true
                            } else {
                                if (dj) {
                                    if (dk < 0) {
                                        dk = 1;
                                        dm()
                                    }
                                    break
                                }
                            }
                            if (dk > 0) {
                                if (!dm()) {
                                    break
                                }
                            }
                        }
                    }
                }
            }
            return {
                line: dq,
                ch: dh
            }
        }

        function cV(dh, di) {
            var dj = dh < 0 ? de.from : de.to;
            if (cw || ah(de.from, de.to)) {
                dj = cD(dh, di)
            }
            be(dj.line, dj.ch, true)
        }

        function cB(dh, di) {
            if (!ah(de.from, de.to)) {
                b2("", de.from, de.to)
            } else {
                if (dh < 0) {
                    b2("", cD(dh, di), de.to)
                } else {
                    b2("", de.from, cD(dh, di))
                }
            }
            ck = true
        }
        var cK = null;

        function cN(dh, di) {
            var dk = 0,
                dl = c8(de.inverted ? de.from : de.to, true);
            if (cK != null) {
                dl.x = cK
            }
            if (di == "page") {
                dk = Math.min(bs.clientHeight, window.innerHeight || document.documentElement.clientHeight)
            } else {
                if (di == "line") {
                    dk = b1()
                }
            }
            var dj = bS(dl.x, dl.y + dk * dh + 2);
            if (di == "page") {
                aR.scrollTop += c8(dj, true).y - dl.y
            }
            be(dj.line, dj.ch, true);
            cK = dl.x
        }

        function bT(dk) {
            var di = cW(dk.line).text;
            var dj = dk.ch,
                dh = dk.ch;
            while (dj > 0 && ak(di.charAt(dj - 1))) {
                --dj
            }
            while (dh < di.length && ak(di.charAt(dh))) {
                ++dh
            }
            bI({
                line: dk.line,
                ch: dj
            }, {
                line: dk.line,
                ch: dh
            })
        }

        function aP(dh) {
            bI({
                line: dh,
                ch: 0
            }, aZ({
                line: dh + 1,
                ch: 0
            }))
        }

        function cR(dj) {
            if (ah(de.from, de.to)) {
                return bK(de.from.line, dj)
            }
            var di = de.to.line - (de.to.ch ? 0 : 1);
            for (var dh = de.from.line; dh <= di; ++dh) {
                bK(dh, dj)
            }
        }

        function bK(dj, dr) {
            if (!dr) {
                dr = "add"
            }
            if (dr == "smart") {
                if (!cp.indent) {
                    dr = "prev"
                } else {
                    var dh = cJ(dj)
                }
            }
            var ds = cW(dj),
                dl = ds.indentation(ce.tabSize),
                di = ds.text.match(/^\s*/)[0],
                dn;
            if (dr == "smart") {
                dn = cp.indent(dh, ds.text.slice(di.length), ds.text);
                if (dn == af) {
                    dr = "prev"
                }
            }
            if (dr == "prev") {
                if (dj) {
                    dn = cW(dj - 1).indentation(ce.tabSize)
                } else {
                    dn = 0
                }
            } else {
                if (dr == "add") {
                    dn = dl + ce.indentUnit
                } else {
                    if (dr == "subtract") {
                        dn = dl - ce.indentUnit
                    }
                }
            }
            dn = Math.max(0, dn);
            var dq = dn - dl;
            if (!dq) {
                if (de.from.line != dj && de.to.line != dj) {
                    return
                }
                var dp = di
            } else {
                var dp = "",
                    dm = 0;
                if (ce.indentWithTabs) {
                    for (var dk = Math.floor(dn / ce.tabSize); dk; --dk) {
                        dm += ce.tabSize;
                        dp += "\t"
                    }
                }
                while (dm < dn) {
                    ++dm;
                    dp += " "
                }
            }
            b2(dp, {
                line: dj,
                ch: 0
            }, {
                line: dj,
                ch: di.length
            })
        }

        function b6() {
            cp = w.getMode(ce, ce.mode);
            cO.iter(0, cO.size, function(dh) {
                dh.stateAfter = null
            });
            cv = [0];
            bR()
        }

        function bm() {
            var dh = ce.gutter || ce.lineNumbers;
            aM.style.display = dh ? "" : "none";
            if (dh) {
                aY = true
            } else {
                av.parentNode.style.marginLeft = 0
            }
        }

        function cX(dj, di) {
            if (ce.lineWrapping) {
                aJ.className += " CodeMirror-wrap";
                var dh = bs.clientWidth / bp() - 3;
                cO.iter(0, cO.size, function(dk) {
                    if (dk.hidden) {
                        return
                    }
                    var dl = Math.ceil(dk.text.length / dh) || 1;
                    if (dl != 1) {
                        ba(dk, dl)
                    }
                });
                bD.style.width = bY.style.width = "";
                bd.style.left = ""
            } else {
                aJ.className = aJ.className.replace(" CodeMirror-wrap", "");
                bP = "";
                by = true;
                cO.iter(0, cO.size, function(dk) {
                    if (dk.height != 1 && !dk.hidden) {
                        ba(dk, 1)
                    }
                    if (dk.text.length > bP.length) {
                        bP = dk.text
                    }
                })
            }
            aH.push({
                from: 0,
                to: cO.size
            })
        }

        function bh(di) {
            var dh = ce.tabSize - di % ce.tabSize,
                dk = au[dh];
            if (dk) {
                return dk
            }
            for (var dl = '<span class="cm-tab">', dj = 0; dj < dh; ++dj) {
                dl += " "
            }
            return (au[dh] = {
                html: dl + "</span>",
                width: dh
            })
        }

        function cT() {
            bs.className = bs.className.replace(/\s*cm-s-\S+/g, "") + ce.theme.replace(/(^|\s)\s*/g, " cm-s-")
        }

        function cL() {
            var dh = x[ce.keyMap].style;
            aJ.className = aJ.className.replace(/\s*cm-keymap-\S+/g, "") + (dh ? " cm-keymap-" + dh : "")
        }

        function df() {
            this.set = []
        }
        df.prototype.clear = aw(function() {
            var dm = Infinity,
                di = -Infinity;
            for (var dl = 0, dp = this.set.length; dl < dp; ++dl) {
                var dj = this.set[dl],
                    dh = dj.marked;
                if (!dh || !dj.parent) {
                    continue
                }
                var dn = ac(dj);
                dm = Math.min(dm, dn);
                di = Math.max(di, dn);
                for (var dk = 0; dk < dh.length; ++dk) {
                    if (dh[dk].marker == this) {
                        dh.splice(dk--, 1)
                    }
                }
            }
            if (dm != Infinity) {
                aH.push({
                    from: dm,
                    to: di + 1
                })
            }
        });
        df.prototype.find = function() {
            var dm, dn;
            for (var dj = 0, dl = this.set.length; dj < dl; ++dj) {
                var dq = this.set[dj],
                    dk = dq.marked;
                for (var di = 0; di < dk.length; ++di) {
                    var dh = dk[di];
                    if (dh.marker == this) {
                        if (dh.from != null || dh.to != null) {
                            var dp = ac(dq);
                            if (dp != null) {
                                if (dh.from != null) {
                                    dm = {
                                        line: dp,
                                        ch: dh.from
                                    }
                                }
                                if (dh.to != null) {
                                    dn = {
                                        line: dp,
                                        ch: dh.to
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return {
                from: dm,
                to: dn
            }
        };

        function bQ(dn, dm, dj) {
            dn = aZ(dn);
            dm = aZ(dm);
            var dh = new df();
            if (!ad(dn, dm)) {
                return dh
            }

            function dl(dp, ds, dr, dq) {
                cW(dp).addMark(new N(ds, dr, dq, dh))
            }
            if (dn.line == dm.line) {
                dl(dn.line, dn.ch, dm.ch, dj)
            } else {
                dl(dn.line, dn.ch, null, dj);
                for (var di = dn.line + 1, dk = dm.line; di < dk; ++di) {
                    dl(di, null, null, dj)
                }
                dl(dm.line, null, dm.ch, dj)
            }
            aH.push({
                from: dn.line,
                to: dm.line + 1
            });
            return dh
        }

        function a0(di) {
            di = aZ(di);
            var dh = new J(di.ch);
            cW(di.line).addMark(dh);
            return dh
        }

        function bw(dm) {
            dm = aZ(dm);
            var dl = [],
                dj = cW(dm.line).marked;
            if (!dj) {
                return dl
            }
            for (var di = 0, dk = dj.length; di < dk; ++di) {
                var dh = dj[di];
                if ((dh.from == null || dh.from <= dm.ch) && (dh.to == null || dh.to >= dm.ch)) {
                    dl.push(dh.marker || dh)
                }
            }
            return dl
        }

        function b8(dh, dj, di) {
            if (typeof dh == "number") {
                dh = cW(cc(dh))
            }
            dh.gutterMarker = {
                text: dj,
                style: di
            };
            aY = true;
            return dh
        }

        function az(dh) {
            if (typeof dh == "number") {
                dh = cW(cc(dh))
            }
            dh.gutterMarker = null;
            aY = true
        }

        function a3(di, dk) {
            var dj = di,
                dh = di;
            if (typeof di == "number") {
                dh = cW(cc(di))
            } else {
                dj = ac(di)
            }
            if (dj == null) {
                return null
            }
            if (dk(dh, dj)) {
                aH.push({
                    from: dj,
                    to: dj + 1
                })
            } else {
                return null
            }
            return dh
        }

        function bt(di, dh, dj) {
            return a3(di, function(dk) {
                if (dk.className != dh || dk.bgClassName != dj) {
                    dk.className = dh;
                    dk.bgClassName = dj;
                    return true
                }
            })
        }

        function c1(di, dh) {
            return a3(di, function(dk, dn) {
                if (dk.hidden != dh) {
                    dk.hidden = dh;
                    if (!ce.lineWrapping) {
                        var dj = dk.text;
                        if (dh && dj.length == bP.length) {
                            cU = true
                        } else {
                            if (!dh && dj.length > bP.length) {
                                bP = dj;
                                maxWidth = null;
                                cU = false
                            }
                        }
                    }
                    ba(dk, dh ? 0 : 1);
                    var dm = de.from.line,
                        dl = de.to.line;
                    if (dh && (dm == dn || dl == dn)) {
                        var dq = dm == dn ? b4({
                            line: dm,
                            ch: 0
                        }, dm, 0) : de.from;
                        var dp = dl == dn ? b4({
                            line: dl,
                            ch: 0
                        }, dl, 0) : de.to;
                        if (!dp) {
                            return
                        }
                        bG(dq, dp)
                    }
                    return (aY = true)
                }
            })
        }

        function a1(di) {
            if (typeof di == "number") {
                if (!bA(di)) {
                    return null
                }
                var dj = di;
                di = cW(di);
                if (!di) {
                    return null
                }
            } else {
                var dj = ac(di);
                if (dj == null) {
                    return null
                }
            }
            var dh = di.gutterMarker;
            return {
                line: dj,
                handle: di,
                text: di.text,
                markerText: dh && dh.text,
                markerClass: dh && dh.style,
                lineClass: di.className,
                bgClass: di.bgClassName
            }
        }

        function cI(dh) {
            aA.innerHTML = "<pre><span>x</span></pre>";
            aA.firstChild.firstChild.firstChild.nodeValue = dh;
            return aA.firstChild.firstChild.offsetWidth || 10
        }

        function aL(du, dn) {
            if (dn <= 0) {
                return 0
            }
            var dk = cW(du),
                dr = dk.text;

            function ds(dv) {
                return ci(dk, dv).left
            }
            var dp = 0,
                dm = 0,
                dq = dr.length,
                dl;
            var di = Math.min(dq, Math.ceil(dn / bp()));
            for (;;) {
                var dj = ds(di);
                if (dj <= dn && di < dq) {
                    di = Math.min(dq, Math.ceil(di * 1.2))
                } else {
                    dl = dj;
                    dq = di;
                    break
                }
            }
            if (dn > dl) {
                return dq
            }
            di = Math.floor(dq * 0.8);
            dj = ds(di);
            if (dj < dn) {
                dp = di;
                dm = dj
            }
            for (;;) {
                if (dq - dp <= 1) {
                    return (dl - dn > dn - dm) ? dp : dq
                }
                var dt = Math.ceil((dp + dq) / 2),
                    dh = ds(dt);
                if (dh > dn) {
                    dq = dt;
                    dl = dh
                } else {
                    dp = dt;
                    dm = dh
                }
            }
        }
        var cP = "CodeMirror-temp-" + Math.floor(Math.random() * 16777215).toString(16);

        function ci(di, dl) {
            if (dl == 0) {
                return {
                    top: 0,
                    left: 0
                }
            }
            var dh = ce.lineWrapping && dl < di.text.length && q.test(di.text.slice(dl - 1, dl + 1));
            aA.innerHTML = "<pre>" + di.getHTML(bh, dl, cP, dh) + "</pre>";
            var dk = document.getElementById(cP);
            var dn = dk.offsetTop,
                dm = dk.offsetLeft;
            if (L && dn == 0 && dm == 0) {
                var dj = document.createElement("span");
                dj.innerHTML = "x";
                dk.parentNode.insertBefore(dj, dk.nextSibling);
                dn = dj.offsetTop
            }
            return {
                top: dn,
                left: dm
            }
        }

        function c8(dm, dk) {
            var dh, di = b1(),
                dl = di * (h(cO, dm.line) - (dk ? bl : 0));
            if (dm.ch == 0) {
                dh = 0
            } else {
                var dj = ci(cW(dm.line), dm.ch);
                dh = dj.left;
                if (ce.lineWrapping) {
                    dl += Math.max(0, dj.top)
                }
            }
            return {
                x: dh,
                y: dl,
                yBot: dl + di
            }
        }

        function bS(dr, dq) {
            if (dq < 0) {
                dq = 0
            }
            var dn = b1(),
                dl = bp(),
                dx = bl + Math.floor(dq / dn);
            var ds = ab(cO, dx);
            if (ds >= cO.size) {
                return {
                    line: cO.size - 1,
                    ch: cW(cO.size - 1).text.length
                }
            }
            var di = cW(ds),
                du = di.text;
            var dz = ce.lineWrapping,
                dp = dz ? dx - h(cO, ds) : 0;
            if (dr <= 0 && dp == 0) {
                return {
                    line: ds,
                    ch: 0
                }
            }

            function dy(dB) {
                var dC = ci(di, dB);
                if (dz) {
                    var dD = Math.round(dC.top / dn);
                    return Math.max(0, dC.left + (dD - dp) * bs.clientWidth)
                }
                return dC.left
            }
            var dw = 0,
                dv = 0,
                dj = du.length,
                dh;
            var dt = Math.min(dj, Math.ceil((dr + dp * bs.clientWidth * 0.9) / dl));
            for (;;) {
                var dm = dy(dt);
                if (dm <= dr && dt < dj) {
                    dt = Math.min(dj, Math.ceil(dt * 1.2))
                } else {
                    dh = dm;
                    dj = dt;
                    break
                }
            }
            if (dr > dh) {
                return {
                    line: ds,
                    ch: dj
                }
            }
            dt = Math.floor(dj * 0.8);
            dm = dy(dt);
            if (dm < dr) {
                dw = dt;
                dv = dm
            }
            for (;;) {
                if (dj - dw <= 1) {
                    return {
                        line: ds,
                        ch: (dh - dr > dr - dv) ? dw : dj
                    }
                }
                var dA = Math.ceil((dw + dj) / 2),
                    dk = dy(dA);
                if (dk > dr) {
                    dj = dA;
                    dh = dk
                } else {
                    dw = dA;
                    dv = dk
                }
            }
        }

        function at(dj) {
            var dh = c8(dj, true),
                di = ao(bD);
            return {
                x: di.left + dh.x,
                y: di.top + dh.y,
                yBot: di.top + dh.yBot
            }
        }
        var a7, aD, b7;

        function b1() {
            if (b7 == null) {
                b7 = "<pre>";
                for (var di = 0; di < 49; ++di) {
                    b7 += "x<br/>"
                }
                b7 += "x</pre>"
            }
            var dh = av.clientHeight;
            if (dh == aD) {
                return a7
            }
            aD = dh;
            aA.innerHTML = b7;
            a7 = aA.firstChild.offsetHeight / 50 || 1;
            aA.innerHTML = "";
            return a7
        }
        var c9, bE = 0;

        function bp() {
            if (bs.clientWidth == bE) {
                return c9
            }
            bE = bs.clientWidth;
            return (c9 = cI("x"))
        }

        function cG() {
            return bD.offsetTop
        }

        function bc() {
            return bD.offsetLeft
        }

        function a9(dl, dk) {
            var dj = ao(bs, true),
                dh, dm;
            try {
                dh = dl.clientX;
                dm = dl.clientY
            } catch (dl) {
                return null
            }
            if (!dk && (dh - dj.left > bs.clientWidth || dm - dj.top > bs.clientHeight)) {
                return null
            }
            var di = ao(bD, true);
            return bS(dh - di.left, dm - di.top)
        }

        function a8(di) {
            var dn = a9(di),
                dm = aR.scrollTop;
            if (!dn || O) {
                return
            }
            if (ah(de.from, de.to) || ad(dn, de.from) || !ad(dn, de.to)) {
                aw(be)(dn.line, dn.ch)
            }
            var dl = bu.style.cssText;
            ca.style.position = "absolute";
            bu.style.cssText = "position: fixed; width: 30px; height: 30px; top: " + (di.clientY - 5) + "px; left: " + (di.clientX - 5) + "px; z-index: 1000; background: white; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
            bn = true;
            var dk = bu.value = cg();
            bL();
            a(bu);

            function dh() {
                var dp = C(bu.value).join("\n");
                if (dp != dk && !ce.readOnly) {
                    aw(bB)(dp, "end")
                }
                ca.style.position = "relative";
                bu.style.cssText = dl;
                if (D) {
                    aR.scrollTop = dm
                }
                bn = false;
                cS(true);
                aq()
            }
            if (R) {
                y(di);
                var dj = t(window, "mouseup", function() {
                    dj();
                    setTimeout(dh, 20)
                }, true)
            } else {
                setTimeout(dh, 50)
            }
        }

        function c3() {
            clearInterval(c6);
            var dh = true;
            bk.style.visibility = "";
            c6 = setInterval(function() {
                bk.style.visibility = (dh = !dh) ? "" : "hidden"
            }, 650)
        }
        var bx = {
            "(": ")>",
            ")": "(<",
            "[": "]>",
            "]": "[<",
            "{": "}>",
            "}": "{<"
        };

        function cs(dn) {
            var dh = de.inverted ? de.from : de.to,
                dq = cW(dh.line),
                di = dh.ch - 1;
            var dm = (di >= 0 && bx[dq.text.charAt(di)]) || bx[dq.text.charAt(++di)];
            if (!dm) {
                return
            }
            var dr = dm.charAt(0),
                dp = dm.charAt(1) == ">",
                dB = dp ? 1 : -1,
                dw = dq.styles;
            for (var dC = di + 1, dy = 0, dA = dw.length; dy < dA; dy += 2) {
                if ((dC -= dw[dy].length) <= 0) {
                    var dz = dw[dy + 1];
                    break
                }
            }
            var dk = [dq.text.charAt(di)],
                dv = /[(){}[\]]/;

            function dt(dO, dJ, dK) {
                if (!dO.text) {
                    return
                }
                var dN = dO.styles,
                    dI = dp ? 0 : dO.text.length - 1,
                    dL;
                for (var dF = dp ? 0 : dN.length - 2, dH = dp ? dN.length : -2; dF != dH; dF += 2 * dB) {
                    var dM = dN[dF];
                    if (dN[dF + 1] != dz) {
                        dI += dB * dM.length;
                        continue
                    }
                    for (var dE = dp ? 0 : dM.length - 1, dD = dp ? dM.length : -1; dE != dD; dE += dB, dI += dB) {
                        if (dI >= dJ && dI < dK && dv.test(dL = dM.charAt(dE))) {
                            var dG = bx[dL];
                            if (dG.charAt(1) == ">" == dp) {
                                dk.push(dL)
                            } else {
                                if (dk.pop() != dG.charAt(0)) {
                                    return {
                                        pos: dI,
                                        match: false
                                    }
                                } else {
                                    if (!dk.length) {
                                        return {
                                            pos: dI,
                                            match: true
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            for (var dy = dh.line, dA = dp ? Math.min(dy + 100, cO.size) : Math.max(-1, dy - 100); dy != dA; dy += dB) {
                var dq = cW(dy),
                    dl = dy == dh.line;
                var ds = dt(dq, dl && dp ? di + 1 : 0, dl && !dp ? di : dq.text.length);
                if (ds) {
                    break
                }
            }
            if (!ds) {
                ds = {
                    pos: null,
                    match: false
                }
            }
            var dz = ds.match ? "CodeMirror-matchingbracket" : "CodeMirror-nonmatchingbracket";
            var dx = bQ({
                    line: dh.line,
                    ch: di
                }, {
                    line: dh.line,
                    ch: di + 1
                }, dz),
                dj = ds.pos != null && bQ({
                    line: dy,
                    ch: ds.pos
                }, {
                    line: dy,
                    ch: ds.pos + 1
                }, dz);
            var du = aw(function() {
                dx.clear();
                dj && dj.clear()
            });
            if (dn) {
                setTimeout(du, 800)
            } else {
                cj = du
            }
        }

        function bf(dn) {
            var dm, dj;
            for (var di = dn, dk = dn - 40; di > dk; --di) {
                if (di == 0) {
                    return 0
                }
                var dh = cW(di - 1);
                if (dh.stateAfter) {
                    return di
                }
                var dl = dh.indentation(ce.tabSize);
                if (dj == null || dm > dl) {
                    dj = di - 1;
                    dm = dl
                }
            }
            return dj
        }

        function cJ(dj) {
            var di = bf(dj),
                dh = di && cW(di - 1).stateAfter;
            if (!dh) {
                dh = Z(cp)
            } else {
                dh = r(cp, dh)
            }
            cO.iter(di, dj, function(dk) {
                dk.highlight(cp, dh, ce.tabSize);
                dk.stateAfter = r(cp, dh)
            });
            if (di < dj) {
                aH.push({
                    from: di,
                    to: dj
                })
            }
            if (dj < cO.size && !cW(dj).stateAfter) {
                cv.push(dj)
            }
            return dh
        }

        function cY(dj, dh) {
            var di = cJ(dj);
            cO.iter(dj, dh, function(dk) {
                dk.highlight(cp, di, ce.tabSize);
                dk.stateAfter = r(cp, di)
            })
        }

        function b5() {
            var dn = +new Date + ce.workTime;
            var dr = cv.length;
            while (cv.length) {
                if (!cW(c7).stateAfter) {
                    var dk = c7
                } else {
                    var dk = cv.pop()
                }
                if (dk >= cO.size) {
                    continue
                }
                var di = bf(dk),
                    dh = di && cW(di - 1).stateAfter;
                if (dh) {
                    dh = r(cp, dh)
                } else {
                    dh = Z(cp)
                }
                var dm = 0,
                    dj = cp.compareStates,
                    dq = false,
                    dp = di,
                    dl = false;
                cO.iter(dp, cO.size, function(dt) {
                    var du = dt.stateAfter;
                    if (+new Date > dn) {
                        cv.push(dp);
                        bR(ce.workDelay);
                        if (dq) {
                            aH.push({
                                from: dk,
                                to: dp + 1
                            })
                        }
                        return (dl = true)
                    }
                    var dv = dt.highlight(cp, dh, ce.tabSize);
                    if (dv) {
                        dq = true
                    }
                    dt.stateAfter = r(cp, dh);
                    var ds = null;
                    if (dj) {
                        var dw = du && dj(du, dh);
                        if (dw != af) {
                            ds = !!dw
                        }
                    }
                    if (ds == null) {
                        if (dv !== false || !du) {
                            dm = 0
                        } else {
                            if (++dm > 3 && (!cp.indent || cp.indent(du, "") == cp.indent(dh, ""))) {
                                ds = true
                            }
                        }
                    }
                    if (ds) {
                        return true
                    }++dp
                });
                if (dl) {
                    return
                }
                if (dq) {
                    aH.push({
                        from: dk,
                        to: dp + 1
                    })
                }
            }
            if (dr && ce.onHighlightComplete) {
                ce.onHighlightComplete(cn)
            }
        }

        function bR(dh) {
            if (!cv.length) {
                return
            }
            aC.set(dh, aw(b5))
        }

        function aT() {
            cE = ck = c4 = null;
            aH = [];
            aV = false;
            cQ = []
        }

        function aE() {
            if (cU) {
                bH()
            }
            if (by && !ce.lineWrapping) {
                bd.style.left = cI(bP) + "px";
                by = false
            }
            var dk, dh;
            if (aV) {
                var dl = b3();
                dk = a5(dl.x, dl.y, dl.x, dl.yBot)
            }
            if (aH.length) {
                dh = cr(aH, true, (dk ? dk.scrollTop : null))
            } else {
                if (aV) {
                    dd()
                }
                if (aY) {
                    aQ()
                }
            }
            if (dk) {
                ct()
            }
            if (aV) {
                dg();
                c3()
            }
            if (cx && !bn && (cE === true || (cE !== false && aV))) {
                cS(ck)
            }
            if (aV && ce.matchBrackets) {
                setTimeout(aw(function() {
                    if (cj) {
                        cj();
                        cj = null
                    }
                    if (ah(de.from, de.to)) {
                        cs(false)
                    }
                }), 20)
            }
            var dm = aV,
                di = cQ;
            if (c4 && ce.onChange && cn) {
                ce.onChange(cn, c4)
            }
            if (dm && ce.onCursorActivity) {
                ce.onCursorActivity(cn)
            }
            for (var dj = 0; dj < di.length; ++dj) {
                di[dj](cn)
            }
            if (dh && ce.onUpdate) {
                ce.onUpdate(cn)
            }
        }
        var cF = 0;

        function aw(dh) {
            return function() {
                if (!cF++) {
                    aT()
                }
                try {
                    var di = dh.apply(this, arguments)
                } finally {
                    if (!--cF) {
                        aE()
                    }
                }
                return di
            }
        }

        function b0(dh) {
            bg.startCompound();
            try {
                return dh()
            } finally {
                bg.endCompound()
            }
        }
        for (var bU in ag) {
            if (ag.propertyIsEnumerable(bU) && !cn.propertyIsEnumerable(bU)) {
                cn[bU] = ag[bU]
            }
        }
        return cn
    }
    w.defaults = {
        value: "",
        mode: null,
        theme: "default",
        indentUnit: 2,
        indentWithTabs: false,
        smartIndent: true,
        tabSize: 4,
        keyMap: "default",
        extraKeys: null,
        electricChars: true,
        autoClearEmptyLines: false,
        onKeyEvent: null,
        onDragEvent: null,
        lineWrapping: false,
        lineNumbers: false,
        gutter: false,
        fixedGutter: false,
        firstLineNumber: 1,
        readOnly: false,
        dragDrop: true,
        onChange: null,
        onCursorActivity: null,
        onGutterClick: null,
        onHighlightComplete: null,
        onUpdate: null,
        onFocus: null,
        onBlur: null,
        onScroll: null,
        matchBrackets: false,
        workTime: 100,
        workDelay: 200,
        pollInterval: 100,
        undoDepth: 40,
        tabindex: null,
        autofocus: null
    };
    var u = /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent);
    var Q = u || /Mac/.test(navigator.platform);
    var Y = /Win/.test(navigator.platform);
    var an = w.modes = {},
        W = w.mimeModes = {};
    w.defineMode = function(aq, at) {
        if (!w.defaults.mode && aq != "null") {
            w.defaults.mode = aq
        }
        if (arguments.length > 2) {
            at.dependencies = [];
            for (var ar = 2; ar < arguments.length; ++ar) {
                at.dependencies.push(arguments[ar])
            }
        }
        an[aq] = at
    };
    w.defineMIME = function(ar, aq) {
        W[ar] = aq
    };
    w.resolveMode = function(aq) {
        if (typeof aq == "string" && W.hasOwnProperty(aq)) {
            aq = W[aq]
        } else {
            if (typeof aq == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(aq)) {
                return w.resolveMode("application/xml")
            }
        }
        if (typeof aq == "string") {
            return {
                name: aq
            }
        } else {
            return aq || {
                name: "null"
            }
        }
    };
    w.getMode = function(ar, aq) {
        var aq = w.resolveMode(aq);
        var at = an[aq.name];
        if (!at) {
            return w.getMode(ar, "text/plain")
        }
        return at(ar, aq)
    };
    w.listModes = function() {
        var ar = [];
        for (var aq in an) {
            if (an.propertyIsEnumerable(aq)) {
                ar.push(aq)
            }
        }
        return ar
    };
    w.listMIMEs = function() {
        var ar = [];
        for (var aq in W) {
            if (W.propertyIsEnumerable(aq)) {
                ar.push({
                    mime: aq,
                    mode: W[aq]
                })
            }
        }
        return ar
    };
    var ag = w.extensions = {};
    w.defineExtension = function(aq, ar) {
        ag[aq] = ar
    };
    var P = w.commands = {
        selectAll: function(aq) {
            aq.setSelection({
                line: 0,
                ch: 0
            }, {
                line: aq.lineCount() - 1
            })
        },
        killLine: function(aq) {
            var au = aq.getCursor(true),
                at = aq.getCursor(false),
                ar = !ah(au, at);
            if (!ar && aq.getLine(au.line).length == au.ch) {
                aq.replaceRange("", au, {
                    line: au.line + 1,
                    ch: 0
                })
            } else {
                aq.replaceRange("", au, ar ? at : {
                    line: au.line
                })
            }
        },
        deleteLine: function(aq) {
            var ar = aq.getCursor().line;
            aq.replaceRange("", {
                line: ar,
                ch: 0
            }, {
                line: ar
            })
        },
        undo: function(aq) {
            aq.undo()
        },
        redo: function(aq) {
            aq.redo()
        },
        goDocStart: function(aq) {
            aq.setCursor(0, 0, true)
        },
        goDocEnd: function(aq) {
            aq.setSelection({
                line: aq.lineCount() - 1
            }, null, true)
        },
        goLineStart: function(aq) {
            aq.setCursor(aq.getCursor().line, 0, true)
        },
        goLineStartSmart: function(aq) {
            var au = aq.getCursor();
            var at = aq.getLine(au.line),
                ar = Math.max(0, at.search(/\S/));
            aq.setCursor(au.line, au.ch <= ar && au.ch ? 0 : ar, true)
        },
        goLineEnd: function(aq) {
            aq.setSelection({
                line: aq.getCursor().line
            }, null, true)
        },
        goLineUp: function(aq) {
            aq.moveV(-1, "line")
        },
        goLineDown: function(aq) {
            aq.moveV(1, "line")
        },
        goPageUp: function(aq) {
            aq.moveV(-1, "page")
        },
        goPageDown: function(aq) {
            aq.moveV(1, "page")
        },
        goCharLeft: function(aq) {
            aq.moveH(-1, "char")
        },
        goCharRight: function(aq) {
            aq.moveH(1, "char")
        },
        goColumnLeft: function(aq) {
            aq.moveH(-1, "column")
        },
        goColumnRight: function(aq) {
            aq.moveH(1, "column")
        },
        goWordLeft: function(aq) {
            aq.moveH(-1, "word")
        },
        goWordRight: function(aq) {
            aq.moveH(1, "word")
        },
        delCharLeft: function(aq) {
            aq.deleteH(-1, "char")
        },
        delCharRight: function(aq) {
            aq.deleteH(1, "char")
        },
        delWordLeft: function(aq) {
            aq.deleteH(-1, "word")
        },
        delWordRight: function(aq) {
            aq.deleteH(1, "word")
        },
        indentAuto: function(aq) {
            aq.indentSelection("smart")
        },
        indentMore: function(aq) {
            aq.indentSelection("add")
        },
        indentLess: function(aq) {
            aq.indentSelection("subtract")
        },
        insertTab: function(aq) {
            aq.replaceSelection("\t", "end")
        },
        defaultTab: function(aq) {
            if (aq.somethingSelected()) {
                aq.indentSelection("add")
            } else {
                aq.replaceSelection("\t", "end")
            }
        },
        transposeChars: function(aq) {
            var at = aq.getCursor(),
                ar = aq.getLine(at.line);
            if (at.ch > 0 && at.ch < ar.length - 1) {
                aq.replaceRange(ar.charAt(at.ch) + ar.charAt(at.ch - 1), {
                    line: at.line,
                    ch: at.ch - 1
                }, {
                    line: at.line,
                    ch: at.ch + 1
                })
            }
        },
        newlineAndIndent: function(aq) {
            aq.replaceSelection("\n", "end");
            aq.indentLine(aq.getCursor().line)
        },
        toggleOverwrite: function(aq) {
            aq.toggleOverwrite()
        }
    };
    var x = w.keyMap = {};
    x.basic = {
        Left: "goCharLeft",
        Right: "goCharRight",
        Up: "goLineUp",
        Down: "goLineDown",
        End: "goLineEnd",
        Home: "goLineStartSmart",
        PageUp: "goPageUp",
        PageDown: "goPageDown",
        Delete: "delCharRight",
        Backspace: "delCharLeft",
        Tab: "defaultTab",
        "Shift-Tab": "indentAuto",
        Enter: "newlineAndIndent",
        Insert: "toggleOverwrite"
    };
    x.pcDefault = {
        "Ctrl-A": "selectAll",
        "Ctrl-D": "deleteLine",
        "Ctrl-Z": "undo",
        "Shift-Ctrl-Z": "redo",
        "Ctrl-Y": "redo",
        "Ctrl-Home": "goDocStart",
        "Alt-Up": "goDocStart",
        "Ctrl-End": "goDocEnd",
        "Ctrl-Down": "goDocEnd",
        "Ctrl-Left": "goWordLeft",
        "Ctrl-Right": "goWordRight",
        "Alt-Left": "goLineStart",
        "Alt-Right": "goLineEnd",
        "Ctrl-Backspace": "delWordLeft",
        "Ctrl-Delete": "delWordRight",
        "Ctrl-S": "save",
        "Ctrl-F": "find",
        "Ctrl-G": "findNext",
        "Shift-Ctrl-G": "findPrev",
        "Shift-Ctrl-F": "replace",
        "Shift-Ctrl-R": "replaceAll",
        "Ctrl-[": "indentLess",
        "Ctrl-]": "indentMore",
        fallthrough: "basic"
    };
    x.macDefault = {
        "Cmd-A": "selectAll",
        "Cmd-D": "deleteLine",
        "Cmd-Z": "undo",
        "Shift-Cmd-Z": "redo",
        "Cmd-Y": "redo",
        "Cmd-Up": "goDocStart",
        "Cmd-End": "goDocEnd",
        "Cmd-Down": "goDocEnd",
        "Alt-Left": "goWordLeft",
        "Alt-Right": "goWordRight",
        "Cmd-Left": "goLineStart",
        "Cmd-Right": "goLineEnd",
        "Alt-Backspace": "delWordLeft",
        "Ctrl-Alt-Backspace": "delWordRight",
        "Alt-Delete": "delWordRight",
        "Cmd-S": "save",
        "Cmd-F": "find",
        "Cmd-G": "findNext",
        "Shift-Cmd-G": "findPrev",
        "Cmd-Alt-F": "replace",
        "Shift-Cmd-Alt-F": "replaceAll",
        "Cmd-[": "indentLess",
        "Cmd-]": "indentMore",
        fallthrough: ["basic", "emacsy"]
    };
    x["default"] = Q ? x.macDefault : x.pcDefault;
    x.emacsy = {
        "Ctrl-F": "goCharRight",
        "Ctrl-B": "goCharLeft",
        "Ctrl-P": "goLineUp",
        "Ctrl-N": "goLineDown",
        "Alt-F": "goWordRight",
        "Alt-B": "goWordLeft",
        "Ctrl-A": "goLineStart",
        "Ctrl-E": "goLineEnd",
        "Ctrl-V": "goPageUp",
        "Shift-Ctrl-V": "goPageDown",
        "Ctrl-D": "delCharRight",
        "Ctrl-H": "delCharLeft",
        "Alt-D": "delWordRight",
        "Alt-Backspace": "delWordLeft",
        "Ctrl-K": "killLine",
        "Ctrl-T": "transposeChars"
    };

    function c(aq) {
        if (typeof aq == "string") {
            return x[aq]
        } else {
            return aq
        }
    }

    function n(ar, aq, aw, au, at) {
        function av(aB) {
            aB = c(aB);
            var az = aB[ar];
            if (az != null && au(az)) {
                return true
            }
            if (aB.nofallthrough) {
                if (at) {
                    at()
                }
                return true
            }
            var ay = aB.fallthrough;
            if (ay == null) {
                return false
            }
            if (Object.prototype.toString.call(ay) != "[object Array]") {
                return av(ay)
            }
            for (var ax = 0, aA = ay.length; ax < aA; ++ax) {
                if (av(ay[ax])) {
                    return true
                }
            }
            return false
        }
        if (aq && av(aq)) {
            return true
        }
        return av(aw)
    }

    function U(ar) {
        var aq = V[A(ar, "keyCode")];
        return aq == "Ctrl" || aq == "Alt" || aq == "Shift" || aq == "Mod"
    }
    w.fromTextArea = function(ar, au) {
        if (!au) {
            au = {}
        }
        au.value = ar.value;
        if (!au.tabindex && ar.tabindex) {
            au.tabindex = ar.tabindex
        }
        if (au.autofocus == null && ar.getAttribute("autofocus") != null) {
            au.autofocus = true
        }

        function aw() {
            ar.value = aq.getValue()
        }
        if (ar.form) {
            var av = t(ar.form, "submit", aw, true);
            if (typeof ar.form.submit == "function") {
                var at = ar.form.submit;

                function ax() {
                    aw();
                    ar.form.submit = at;
                    ar.form.submit();
                    ar.form.submit = ax
                }
                ar.form.submit = ax
            }
        }
        ar.style.display = "none";
        var aq = w(function(ay) {
            ar.parentNode.insertBefore(ay, ar.nextSibling)
        }, au);
        aq.save = aw;
        aq.getTextArea = function() {
            return ar
        };
        aq.toTextArea = function() {
            aw();
            ar.parentNode.removeChild(aq.getWrapperElement());
            ar.style.display = "";
            if (ar.form) {
                av();
                if (typeof ar.form.submit == "function") {
                    ar.form.submit = at
                }
            }
        };
        return aq
    };

    function r(au, aq) {
        if (aq === true) {
            return aq
        }
        if (au.copyState) {
            return au.copyState(aq)
        }
        var at = {};
        for (var av in aq) {
            var ar = aq[av];
            if (ar instanceof Array) {
                ar = ar.concat([])
            }
            at[av] = ar
        }
        return at
    }
    w.copyState = r;

    function Z(at, ar, aq) {
        return at.startState ? at.startState(ar, aq) : true
    }
    w.startState = Z;

    function b(aq, ar) {
        this.pos = this.start = 0;
        this.string = aq;
        this.tabSize = ar || 8
    }
    b.prototype = {
        eol: function() {
            return this.pos >= this.string.length
        },
        sol: function() {
            return this.pos == 0
        },
        peek: function() {
            return this.string.charAt(this.pos)
        },
        next: function() {
            if (this.pos < this.string.length) {
                return this.string.charAt(this.pos++)
            }
        },
        eat: function(aq) {
            var at = this.string.charAt(this.pos);
            if (typeof aq == "string") {
                var ar = at == aq
            } else {
                var ar = at && (aq.test ? aq.test(at) : aq(at))
            }
            if (ar) {
                ++this.pos;
                return at
            }
        },
        eatWhile: function(aq) {
            var ar = this.pos;
            while (this.eat(aq)) {}
            return this.pos > ar
        },
        eatSpace: function() {
            var aq = this.pos;
            while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) {
                ++this.pos
            }
            return this.pos > aq
        },
        skipToEnd: function() {
            this.pos = this.string.length
        },
        skipTo: function(aq) {
            var ar = this.string.indexOf(aq, this.pos);
            if (ar > -1) {
                this.pos = ar;
                return true
            }
        },
        backUp: function(aq) {
            this.pos -= aq
        },
        column: function() {
            return p(this.string, this.start, this.tabSize)
        },
        indentation: function() {
            return p(this.string, null, this.tabSize)
        },
        match: function(au, ar, aq) {
            if (typeof au == "string") {
                function av(aw) {
                    return aq ? aw.toLowerCase() : aw
                }
                if (av(this.string).indexOf(av(au), this.pos) == this.pos) {
                    if (ar !== false) {
                        this.pos += au.length
                    }
                    return true
                }
            } else {
                var at = this.string.slice(this.pos).match(au);
                if (at && ar !== false) {
                    this.pos += at[0].length
                }
                return at
            }
        },
        current: function() {
            return this.string.slice(this.start, this.pos)
        }
    };
    w.StringStream = b;

    function N(au, at, ar, aq) {
        this.from = au;
        this.to = at;
        this.style = ar;
        this.marker = aq
    }
    N.prototype = {
        attach: function(aq) {
            this.marker.set.push(aq)
        },
        detach: function(ar) {
            var aq = s(this.marker.set, ar);
            if (aq > -1) {
                this.marker.set.splice(aq, 1)
            }
        },
        split: function(au, aq) {
            if (this.to <= au && this.to != null) {
                return null
            }
            var at = this.from < au || this.from == null ? null : this.from - au + aq;
            var ar = this.to == null ? null : this.to - au + aq;
            return new N(at, ar, this.style, this.marker)
        },
        dup: function() {
            return new N(null, null, this.style, this.marker)
        },
        clipTo: function(ar, av, aq, au, at) {
            if (ar && au > this.from && (au < this.to || this.to == null)) {
                this.from = null
            } else {
                if (this.from != null && this.from >= av) {
                    this.from = Math.max(au, this.from) + at
                }
            }
            if (aq && (av < this.to || this.to == null) && (av > this.from || this.from == null)) {
                this.to = null
            } else {
                if (this.to != null && this.to > av) {
                    this.to = au < this.to ? this.to + at : av
                }
            }
        },
        isDead: function() {
            return this.from != null && this.to != null && this.from >= this.to
        },
        sameSet: function(aq) {
            return this.marker == aq.marker
        }
    };

    function J(aq) {
        this.from = aq;
        this.to = aq;
        this.line = null
    }
    J.prototype = {
        attach: function(aq) {
            this.line = aq
        },
        detach: function(aq) {
            if (this.line == aq) {
                this.line = null
            }
        },
        split: function(ar, aq) {
            if (ar < this.from) {
                this.from = this.to = (this.from - ar) + aq;
                return this
            }
        },
        isDead: function() {
            return this.from > this.to
        },
        clipTo: function(ar, av, aq, au, at) {
            if ((ar || av < this.from) && (aq || au > this.to)) {
                this.from = 0;
                this.to = -1
            } else {
                if (this.from > av) {
                    this.from = this.to = Math.max(au, this.from) + at
                }
            }
        },
        sameSet: function(aq) {
            return false
        },
        find: function() {
            if (!this.line || !this.line.parent) {
                return null
            }
            return {
                line: ac(this.line),
                ch: this.from
            }
        },
        clear: function() {
            if (this.line) {
                var aq = s(this.line.marked, this);
                if (aq != -1) {
                    this.line.marked.splice(aq, 1)
                }
                this.line = null
            }
        }
    };

    function e(ar, aq) {
        this.styles = aq || [ar, null];
        this.text = ar;
        this.height = 1;
        this.marked = this.gutterMarker = this.className = this.bgClassName = this.handlers = null;
        this.stateAfter = this.parent = this.hidden = null
    }
    e.inheritMarks = function(av, ay) {
        var au = new e(av),
            aq = ay && ay.marked;
        if (aq) {
            for (var at = 0; at < aq.length; ++at) {
                if (aq[at].to == null && aq[at].style) {
                    var ar = au.marked || (au.marked = []),
                        ax = aq[at];
                    var aw = ax.dup();
                    ar.push(aw);
                    aw.attach(au)
                }
            }
        }
        return au
    };
    e.prototype = {
        replace: function(av, au, ay) {
            var az = [],
                at = this.marked,
                aw = au == null ? this.text.length : au;
            ap(0, av, this.styles, az);
            if (ay) {
                az.push(ay, null)
            }
            ap(aw, this.text.length, this.styles, az);
            this.styles = az;
            this.text = this.text.slice(0, av) + ay + this.text.slice(aw);
            this.stateAfter = null;
            if (at) {
                var ax = ay.length - (aw - av);
                for (var ar = 0; ar < at.length; ++ar) {
                    var aq = at[ar];
                    aq.clipTo(av == null, av || 0, au == null, aw, ax);
                    if (aq.isDead()) {
                        aq.detach(this);
                        at.splice(ar--, 1)
                    }
                }
            }
        },
        split: function(ay, aw) {
            var au = [aw, null],
                ar = this.marked;
            ap(ay, this.text.length, this.styles, au);
            var at = new e(aw + this.text.slice(ay), au);
            if (ar) {
                for (var av = 0; av < ar.length; ++av) {
                    var ax = ar[av];
                    var aq = ax.split(ay, aw.length);
                    if (aq) {
                        if (!at.marked) {
                            at.marked = []
                        }
                        at.marked.push(aq);
                        aq.attach(at);
                        if (aq == ax) {
                            ar.splice(av--, 1)
                        }
                    }
                }
            }
            return at
        },
        append: function(ar) {
            var ax = this.text.length,
                aq = ar.marked,
                av = this.marked;
            this.text += ar.text;
            ap(0, ar.text.length, ar.styles, this.styles);
            if (av) {
                for (var aw = 0; aw < av.length; ++aw) {
                    if (av[aw].to == null) {
                        av[aw].to = ax
                    }
                }
            }
            if (aq && aq.length) {
                if (!av) {
                    this.marked = av = []
                }
                outer: for (var aw = 0; aw < aq.length; ++aw) {
                    var ay = aq[aw];
                    if (!ay.from) {
                        for (var au = 0; au < av.length; ++au) {
                            var at = av[au];
                            if (at.to == ax && at.sameSet(ay)) {
                                at.to = ay.to == null ? null : ay.to + ax;
                                if (at.isDead()) {
                                    at.detach(this);
                                    aq.splice(aw--, 1)
                                }
                                continue outer
                            }
                        }
                    }
                    av.push(ay);
                    ay.attach(this);
                    ay.from += ax;
                    if (ay.to != null) {
                        ay.to += ax
                    }
                }
            }
        },
        fixMarkEnds: function(ar) {
            var aq = this.marked,
                av = ar.marked;
            if (!aq) {
                return
            }
            for (var au = 0; au < aq.length; ++au) {
                var ax = aq[au],
                    aw = ax.to == null;
                if (aw && av) {
                    for (var at = 0; at < av.length; ++at) {
                        if (av[at].sameSet(ax)) {
                            aw = false;
                            break
                        }
                    }
                }
                if (aw) {
                    ax.to = this.text.length
                }
            }
        },
        fixMarkStarts: function() {
            var aq = this.marked;
            if (!aq) {
                return
            }
            for (var ar = 0; ar < aq.length; ++ar) {
                if (aq[ar].from == null) {
                    aq[ar].from = 0
                }
            }
        },
        addMark: function(aq) {
            aq.attach(this);
            if (this.marked == null) {
                this.marked = []
            }
            this.marked.push(aq);
            this.marked.sort(function(at, ar) {
                return (at.from || 0) - (ar.from || 0)
            })
        },
        highlight: function(aw, ar, ax) {
            var aA = new b(this.text, ax),
                aB = this.styles,
                ay = 0;
            var av = false,
                at = aB[0],
                az;
            if (this.text == "" && aw.blankLine) {
                aw.blankLine(ar)
            }
            while (!aA.eol()) {
                var aq = aw.token(aA, ar);
                var au = this.text.slice(aA.start, aA.pos);
                aA.start = aA.pos;
                if (ay && aB[ay - 1] == aq) {
                    aB[ay - 2] += au
                } else {
                    if (au) {
                        if (!av && (aB[ay + 1] != aq || (ay && aB[ay - 2] != az))) {
                            av = true
                        }
                        aB[ay++] = au;
                        aB[ay++] = aq;
                        az = at;
                        at = aB[ay]
                    }
                }
                if (aA.pos > 5000) {
                    aB[ay++] = this.text.slice(aA.pos);
                    aB[ay++] = null;
                    break
                }
            }
            if (aB.length != ay) {
                aB.length = ay;
                av = true
            }
            if (ay && aB[ay - 2] != az) {
                av = true
            }
            return av || (aB.length < 5 && this.text.length < 10 ? null : false)
        },
        getTokenAt: function(aw, au, at) {
            var aq = this.text,
                av = new b(aq);
            while (av.pos < at && !av.eol()) {
                av.start = av.pos;
                var ar = aw.token(av, au)
            }
            return {
                start: av.start,
                end: av.pos,
                string: av.current(),
                className: ar || null,
                state: au
            }
        },
        indentation: function(aq) {
            return p(this.text, null, aq)
        },
        getHTML: function(aQ, aq, at, av) {
            var aB = [],
                az = true,
                ax = 0;

            function aM(a2, a0) {
                if (!a2) {
                    return
                }
                if (az && L && a2.charAt(0) == " ") {
                    a2 = "\u00a0" + a2.slice(1)
                }
                az = false;
                if (a2.indexOf("\t") == -1) {
                    ax += a2.length;
                    var a1 = T(a2)
                } else {
                    var a1 = "";
                    for (var a3 = 0;;) {
                        var aY = a2.indexOf("\t", a3);
                        if (aY == -1) {
                            a1 += T(a2.slice(a3));
                            ax += a2.length - a3;
                            break
                        } else {
                            ax += aY - a3;
                            var aZ = aQ(ax);
                            a1 += T(a2.slice(a3, aY)) + aZ.html;
                            ax += aZ.width;
                            a3 = aY + 1
                        }
                    }
                }
                if (a0) {
                    aB.push('<span class="', a0, '">', a1, "</span>")
                } else {
                    aB.push(a1)
                }
            }
            var aP = aM;
            if (aq != null) {
                var aK = 0,
                    aF = '<span id="' + at + '">';
                aP = function(a1, aZ) {
                    var aY = a1.length;
                    if (aq >= aK && aq < aK + aY) {
                        if (aq > aK) {
                            aM(a1.slice(0, aq - aK), aZ);
                            if (av) {
                                aB.push("<wbr>")
                            }
                        }
                        aB.push(aF);
                        var a0 = aq - aK;
                        aM(O ? a1.slice(a0, a0 + 1) : a1.slice(a0), aZ);
                        aB.push("</span>");
                        if (O) {
                            aM(a1.slice(a0 + 1), aZ)
                        }
                        aq--;
                        aK += aY
                    } else {
                        aK += aY;
                        aM(a1, aZ);
                        if (aK == aq && aK == aU) {
                            aB.push(aF + " </span>")
                        } else {
                            if (aK > aq + 10 && /\s/.test(a1)) {
                                aP = function() {}
                            }
                        }
                    }
                }
            }
            var aJ = this.styles,
                aA = this.text,
                aG = this.marked;
            var aU = aA.length;

            function aw(aY) {
                if (!aY) {
                    return null
                }
                return "cm-" + aY.replace(/ +/g, " cm-")
            }
            if (!aA && aq == null) {
                aP(" ")
            } else {
                if (!aG || !aG.length) {
                    for (var aR = 0, aC = 0; aC < aU; aR += 2) {
                        var aI = aJ[aR],
                            aT = aJ[aR + 1],
                            aL = aI.length;
                        if (aC + aL > aU) {
                            aI = aI.slice(0, aU - aC)
                        }
                        aC += aL;
                        aP(aI, aw(aT))
                    }
                } else {
                    var ay = 0,
                        aR = 0,
                        aE = "",
                        aT, aX = 0;
                    var aW = aG[0].from || 0,
                        aO = [],
                        aV = 0;

                    function aS() {
                        var aY;
                        while (aV < aG.length && ((aY = aG[aV]).from == ay || aY.from == null)) {
                            if (aY.style != null) {
                                aO.push(aY)
                            }++aV
                        }
                        aW = aV < aG.length ? aG[aV].from : Infinity;
                        for (var aZ = 0; aZ < aO.length; ++aZ) {
                            var a0 = aO[aZ].to || Infinity;
                            if (a0 == ay) {
                                aO.splice(aZ--, 1)
                            } else {
                                aW = Math.min(a0, aW)
                            }
                        }
                    }
                    var aH = 0;
                    while (ay < aU) {
                        if (aW == ay) {
                            aS()
                        }
                        var aD = Math.min(aU, aW);
                        while (true) {
                            if (aE) {
                                var au = ay + aE.length;
                                var ar = aT;
                                for (var aN = 0; aN < aO.length; ++aN) {
                                    ar = (ar ? ar + " " : "") + aO[aN].style
                                }
                                aP(au > aD ? aE.slice(0, aD - ay) : aE, ar);
                                if (au >= aD) {
                                    aE = aE.slice(aD - ay);
                                    ay = aD;
                                    break
                                }
                                ay = au
                            }
                            aE = aJ[aR++];
                            aT = aw(aJ[aR++])
                        }
                    }
                }
            }
            return aB.join("")
        },
        cleanUp: function() {
            this.parent = null;
            if (this.marked) {
                for (var aq = 0, ar = this.marked.length; aq < ar; ++aq) {
                    this.marked[aq].detach(this)
                }
            }
        }
    };

    function ap(ax, ay, aq, az) {
        for (var av = 0, aw = 0, ar = 0; aw < ay; av += 2) {
            var at = aq[av],
                au = aw + at.length;
            if (ar == 0) {
                if (au > ax) {
                    az.push(at.slice(ax - aw, Math.min(at.length, ay - aw)), aq[av + 1])
                }
                if (au >= ax) {
                    ar = 1
                }
            } else {
                if (ar == 1) {
                    if (au > ay) {
                        az.push(at.slice(0, ay - aw), aq[av + 1])
                    } else {
                        az.push(at, aq[av + 1])
                    }
                }
            }
            aw = au
        }
    }

    function al(ar) {
        this.lines = ar;
        this.parent = null;
        for (var at = 0, au = ar.length, aq = 0; at < au; ++at) {
            ar[at].parent = this;
            aq += ar[at].height
        }
        this.height = aq
    }
    al.prototype = {
        chunkSize: function() {
            return this.lines.length
        },
        remove: function(aq, ay, aw) {
            for (var av = aq, ax = aq + ay; av < ax; ++av) {
                var ar = this.lines[av];
                this.height -= ar.height;
                ar.cleanUp();
                if (ar.handlers) {
                    for (var au = 0; au < ar.handlers.length; ++au) {
                        aw.push(ar.handlers[au])
                    }
                }
            }
            this.lines.splice(aq, ay)
        },
        collapse: function(aq) {
            aq.splice.apply(aq, [aq.length, 0].concat(this.lines))
        },
        insertHeight: function(ar, au, aq) {
            this.height += aq;
            this.lines = this.lines.slice(0, ar).concat(au).concat(this.lines.slice(ar));
            for (var av = 0, aw = au.length; av < aw; ++av) {
                au[av].parent = this
            }
        },
        iterN: function(aq, av, au) {
            for (var ar = aq + av; aq < ar; ++aq) {
                if (au(this.lines[aq])) {
                    return true
                }
            }
        }
    };

    function k(au) {
        this.children = au;
        var at = 0,
            aq = 0;
        for (var ar = 0, aw = au.length; ar < aw; ++ar) {
            var av = au[ar];
            at += av.chunkSize();
            aq += av.height;
            av.parent = this
        }
        this.size = at;
        this.height = aq;
        this.parent = null
    }
    k.prototype = {
        chunkSize: function() {
            return this.size
        },
        remove: function(au, ar, ax) {
            this.size -= ar;
            for (var av = 0; av < this.children.length; ++av) {
                var aq = this.children[av],
                    ay = aq.chunkSize();
                if (au < ay) {
                    var aw = Math.min(ar, ay - au),
                        az = aq.height;
                    aq.remove(au, aw, ax);
                    this.height -= az - aq.height;
                    if (ay == aw) {
                        this.children.splice(av--, 1);
                        aq.parent = null
                    }
                    if ((ar -= aw) == 0) {
                        break
                    }
                    au = 0
                } else {
                    au -= ay
                }
            }
            if (this.size - ar < 25) {
                var aA = [];
                this.collapse(aA);
                this.children = [new al(aA)];
                this.children[0].parent = this
            }
        },
        collapse: function(aq) {
            for (var ar = 0, at = this.children.length; ar < at; ++ar) {
                this.children[ar].collapse(aq)
            }
        },
        insert: function(ar, au) {
            var aq = 0;
            for (var av = 0, aw = au.length; av < aw; ++av) {
                aq += au[av].height
            }
            this.insertHeight(ar, au, aq)
        },
        insertHeight: function(ar, aA, az) {
            this.size += aA.length;
            this.height += az;
            for (var au = 0, aw = this.children.length; au < aw; ++au) {
                var aq = this.children[au],
                    ax = aq.chunkSize();
                if (ar <= ax) {
                    aq.insertHeight(ar, aA, az);
                    if (aq.lines && aq.lines.length > 50) {
                        while (aq.lines.length > 50) {
                            var av = aq.lines.splice(aq.lines.length - 25, 25);
                            var ay = new al(av);
                            aq.height -= ay.height;
                            this.children.splice(au + 1, 0, ay);
                            ay.parent = this
                        }
                        this.maybeSpill()
                    }
                    break
                }
                ar -= ax
            }
        },
        maybeSpill: function() {
            if (this.children.length <= 10) {
                return
            }
            var au = this;
            do {
                var ar = au.children.splice(au.children.length - 5, 5);
                var at = new k(ar);
                if (!au.parent) {
                    var av = new k(au.children);
                    av.parent = au;
                    au.children = [av, at];
                    au = av
                } else {
                    au.size -= at.size;
                    au.height -= at.height;
                    var aq = s(au.parent.children, au);
                    au.parent.children.splice(aq + 1, 0, at)
                }
                at.parent = au.parent
            } while (au.children.length > 10);
            au.parent.maybeSpill()
        },
        iter: function(at, ar, aq) {
            this.iterN(at, ar - at, aq)
        },
        iterN: function(aq, az, ay) {
            for (var ar = 0, aw = this.children.length; ar < aw; ++ar) {
                var ax = this.children[ar],
                    av = ax.chunkSize();
                if (aq < av) {
                    var au = Math.min(az, av - aq);
                    if (ax.iterN(aq, au, ay)) {
                        return true
                    }
                    if ((az -= au) == 0) {
                        break
                    }
                    aq = 0
                } else {
                    aq -= av
                }
            }
        }
    };

    function F(aq, av) {
        while (!aq.lines) {
            for (var ar = 0;; ++ar) {
                var au = aq.children[ar],
                    at = au.chunkSize();
                if (av < at) {
                    aq = au;
                    break
                }
                av -= at
            }
        }
        return aq.lines[av]
    }

    function ac(aq) {
        if (aq.parent == null) {
            return null
        }
        var aw = aq.parent,
            av = s(aw.lines, aq);
        for (var ar = aw.parent; ar; aw = ar, ar = ar.parent) {
            for (var at = 0, au = ar.children.length;; ++at) {
                if (ar.children[at] == aw) {
                    break
                }
                av += ar.children[at].chunkSize()
            }
        }
        return av
    }

    function ab(ax, av) {
        var at = 0;
        outer: do {
            for (var au = 0, aw = ax.children.length; au < aw; ++au) {
                var ar = ax.children[au],
                    aq = ar.height;
                if (av < aq) {
                    ax = ar;
                    continue outer
                }
                av -= aq;
                at += ar.chunkSize()
            }
            return at
        } while (!ax.lines);
        for (var au = 0, aw = ax.lines.length; au < aw; ++au) {
            var az = ax.lines[au],
                ay = az.height;
            if (av < ay) {
                break
            }
            av -= ay
        }
        return at + au
    }

    function h(aq, ax) {
        var at = 0;
        outer: do {
            for (var ar = 0, av = aq.children.length; ar < av; ++ar) {
                var aw = aq.children[ar],
                    au = aw.chunkSize();
                if (ax < au) {
                    aq = aw;
                    continue outer
                }
                ax -= au;
                at += aw.height
            }
            return at
        } while (!aq.lines);
        for (var ar = 0; ar < ax; ++ar) {
            at += aq.lines[ar].height
        }
        return at
    }

    function m() {
        this.time = 0;
        this.done = [];
        this.undone = [];
        this.compound = 0;
        this.closed = false
    }
    m.prototype = {
        addChange: function(aq, aw, ar) {
            this.undone.length = 0;
            var at = +new Date,
                ay = this.done[this.done.length - 1],
                az = ay && ay[ay.length - 1];
            var av = at - this.time;
            if (this.compound && ay && !this.closed) {
                ay.push({
                    start: aq,
                    added: aw,
                    old: ar
                })
            } else {
                if (av > 400 || !az || this.closed || az.start > aq + ar.length || az.start + az.added < aq) {
                    this.done.push([{
                        start: aq,
                        added: aw,
                        old: ar
                    }]);
                    this.closed = false
                } else {
                    var ax = Math.max(0, az.start - aq),
                        aA = Math.max(0, (aq + ar.length) - (az.start + az.added));
                    for (var au = ax; au > 0; --au) {
                        az.old.unshift(ar[au - 1])
                    }
                    for (var au = aA; au > 0; --au) {
                        az.old.push(ar[ar.length - au])
                    }
                    if (ax) {
                        az.start = aq
                    }
                    az.added += aw - (ar.length - ax - aA)
                }
            }
            this.time = at
        },
        startCompound: function() {
            if (!this.compound++) {
                this.closed = true
            }
        },
        endCompound: function() {
            if (!--this.compound) {
                this.closed = true
            }
        }
    };

    function M() {
        y(this)
    }

    function S(aq) {
        if (!aq.stop) {
            aq.stop = M
        }
        return aq
    }

    function X(aq) {
        if (aq.preventDefault) {
            aq.preventDefault()
        } else {
            aq.returnValue = false
        }
    }

    function G(aq) {
        if (aq.stopPropagation) {
            aq.stopPropagation()
        } else {
            aq.cancelBubble = true
        }
    }

    function y(aq) {
        X(aq);
        G(aq)
    }
    w.e_stop = y;
    w.e_preventDefault = X;
    w.e_stopPropagation = G;

    function l(aq) {
        return aq.target || aq.srcElement
    }

    function z(aq) {
        if (aq.which) {
            return aq.which
        } else {
            if (aq.button & 1) {
                return 1
            } else {
                if (aq.button & 2) {
                    return 3
                } else {
                    if (aq.button & 4) {
                        return 2
                    }
                }
            }
        }
    }

    function A(ar, at) {
        var aq = ar.override && ar.override.hasOwnProperty(at);
        return aq ? ar.override[at] : ar[at]
    }

    function t(au, at, ar, aq) {
        if (typeof au.addEventListener == "function") {
            au.addEventListener(at, ar, false);
            if (aq) {
                return function() {
                    au.removeEventListener(at, ar, false)
                }
            }
        } else {
            var av = function(aw) {
                ar(aw || window.event)
            };
            au.attachEvent("on" + at, av);
            if (aq) {
                return function() {
                    au.detachEvent("on" + at, av)
                }
            }
        }
    }
    w.connect = t;

    function B() {
        this.id = null
    }
    B.prototype = {
        set: function(aq, ar) {
            clearTimeout(this.id);
            this.id = setTimeout(ar, aq)
        }
    };
    var af = w.Pass = {
        toString: function() {
            return "CodeMirror.Pass"
        }
    };
    var R = /gecko\/\d{7}/i.test(navigator.userAgent);
    var L = /MSIE \d/.test(navigator.userAgent);
    var E = /MSIE [1-7]\b/.test(navigator.userAgent);
    var D = /MSIE [1-8]\b/.test(navigator.userAgent);
    var H = L && document.documentMode == 5;
    var g = /WebKit\//.test(navigator.userAgent);
    var aj = /Chrome\//.test(navigator.userAgent);
    var O = /Opera\//.test(navigator.userAgent);
    var j = /Apple Computer/.test(navigator.vendor);
    var o = /KHTML\//.test(navigator.userAgent);
    var f = /Mac OS X 10\D([7-9]|\d\d)\D/.test(navigator.userAgent);
    var I = function() {
        if (D) {
            return false
        }
        var aq = document.createElement("div");
        return "draggable" in aq || "dragDrop" in aq
    }();
    var d = function() {
        var aq = document.createElement("textarea");
        aq.value = "foo\nbar";
        if (aq.value.indexOf("\r") > -1) {
            return "\r\n"
        }
        return "\n"
    }();
    var q = /^$/;
    if (R) {
        q = /$'/
    } else {
        if (j) {
            q = /\-[^ \-?]|\?[^ !'\"\),.\-\/:;\?\]\}]/
        } else {
            if (aj) {
                q = /\-[^ \-\.?]|\?[^ \-\.?\]\}:;!'\"\),\/]|[\.!\"#&%\)*+,:;=>\]|\}~][\(\{\[<]|\$'/
            }
        }
    }

    function p(ar, aq, au) {
        if (aq == null) {
            aq = ar.search(/[^\s\u00a0]/);
            if (aq == -1) {
                aq = ar.length
            }
        }
        for (var at = 0, av = 0; at < aq; ++at) {
            if (ar.charAt(at) == "\t") {
                av += au - (av % au)
            } else {
                ++av
            }
        }
        return av
    }

    function v(aq) {
        if (aq.currentStyle) {
            return aq.currentStyle
        }
        return window.getComputedStyle(aq, null)
    }

    function ao(ar, aA) {
        var au = ar.ownerDocument.body;
        var az = 0,
            ay = 0,
            aw = false;
        for (var aq = ar; aq; aq = aq.offsetParent) {
            var ax = aq.offsetLeft,
                at = aq.offsetTop;
            if (aq == au) {
                az += Math.abs(ax);
                ay += Math.abs(at)
            } else {
                az += ax, ay += at
            }
            if (aA && v(aq).position == "fixed") {
                aw = true
            }
        }
        var av = aA && !aw ? null : au;
        for (var aq = ar.parentNode; aq != av; aq = aq.parentNode) {
            if (aq.scrollLeft != null) {
                az -= aq.scrollLeft;
                ay -= aq.scrollTop
            }
        }
        return {
            left: az,
            top: ay
        }
    }
    if (document.documentElement.getBoundingClientRect != null) {
        ao = function(au, aq) {
            try {
                var at = au.getBoundingClientRect();
                at = {
                    top: at.top,
                    left: at.left
                }
            } catch (av) {
                at = {
                    top: 0,
                    left: 0
                }
            }
            if (!aq) {
                if (window.pageYOffset == null) {
                    var ar = document.documentElement || document.body.parentNode;
                    if (ar.scrollTop == null) {
                        ar = document.body
                    }
                    at.top += ar.scrollTop;
                    at.left += ar.scrollLeft
                } else {
                    at.top += window.pageYOffset;
                    at.left += window.pageXOffset
                }
            }
            return at
        }
    }

    function K(aq) {
        return aq.textContent || aq.innerText || aq.nodeValue || ""
    }

    function a(aq) {
        if (u) {
            aq.selectionStart = 0;
            aq.selectionEnd = aq.value.length
        } else {
            aq.select()
        }
    }

    function ah(ar, aq) {
        return ar.line == aq.line && ar.ch == aq.ch
    }

    function ad(ar, aq) {
        return ar.line < aq.line || (ar.line == aq.line && ar.ch < aq.ch)
    }

    function ae(aq) {
        return {
            line: aq.line,
            ch: aq.ch
        }
    }
    var am = document.createElement("pre");

    function T(aq) {
        am.textContent = aq;
        return am.innerHTML
    }
    if (T("a") == "\na") {
        T = function(aq) {
            am.textContent = aq;
            return am.innerHTML.slice(1)
        }
    } else {
        if (T("\t") != "\t") {
            T = function(aq) {
                am.innerHTML = "";
                am.appendChild(document.createTextNode(aq));
                return am.innerHTML
            }
        }
    }
    w.htmlEscape = T;

    function aa(au, at) {
        if (!at) {
            return 0
        }
        if (!au) {
            return at.length
        }
        for (var ar = au.length, aq = at.length; ar >= 0 && aq >= 0; --ar, --aq) {
            if (au.charAt(ar) != at.charAt(aq)) {
                break
            }
        }
        return aq + 1
    }

    function s(au, aq) {
        if (au.indexOf) {
            return au.indexOf(aq)
        }
        for (var ar = 0, at = au.length; ar < at; ++ar) {
            if (au[ar] == aq) {
                return ar
            }
        }
        return -1
    }

    function ak(aq) {
        return /\w/.test(aq) || aq.toUpperCase() != aq.toLowerCase()
    }
    var C = "\n\nb".split(/\n/).length != 3 ? function(at) {
        var au = 0,
            ar, aq = [];
        while ((ar = at.indexOf("\n", au)) > -1) {
            aq.push(at.slice(au, at.charAt(ar - 1) == "\r" ? ar - 1 : ar));
            au = ar + 1
        }
        aq.push(at.slice(au));
        return aq
    } : function(aq) {
        return aq.split(/\r?\n/)
    };
    w.splitLines = C;
    var ai = window.getSelection ? function(ar) {
        try {
            return ar.selectionStart != ar.selectionEnd
        } catch (aq) {
            return false
        }
    } : function(at) {
        try {
            var aq = at.ownerDocument.selection.createRange()
        } catch (ar) {}
        if (!aq || aq.parentElement() != at) {
            return false
        }
        return aq.compareEndPoints("StartToEnd", aq) != 0
    };
    w.defineMode("null", function() {
        return {
            token: function(aq) {
                aq.skipToEnd()
            }
        }
    });
    w.defineMIME("text/plain", "null");
    var V = {
        3: "Enter",
        8: "Backspace",
        9: "Tab",
        13: "Enter",
        16: "Shift",
        17: "Ctrl",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Esc",
        32: "Space",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "Left",
        38: "Up",
        39: "Right",
        40: "Down",
        44: "PrintScrn",
        45: "Insert",
        46: "Delete",
        59: ";",
        91: "Mod",
        92: "Mod",
        93: "Mod",
        109: "-",
        107: "=",
        127: "Delete",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
        63276: "PageUp",
        63277: "PageDown",
        63275: "End",
        63273: "Home",
        63234: "Left",
        63232: "Up",
        63235: "Right",
        63233: "Down",
        63302: "Insert",
        63272: "Delete"
    };
    w.keyNames = V;
    (function() {
        for (var aq = 0; aq < 10; aq++) {
            V[aq + 48] = String(aq)
        }
        for (var aq = 65; aq <= 90; aq++) {
            V[aq] = String.fromCharCode(aq)
        }
        for (var aq = 1; aq <= 12; aq++) {
            V[aq + 111] = V[aq + 63235] = "F" + aq
        }
    })();
    return w
})();
CodeMirror.defineMode("javascript", function(J, N) {
    var w = J.indentUnit;
    var R = N.json;
    var b = function() {
        function X(aa) {
            return {
                type: aa,
                style: "keyword"
            }
        }
        var U = X("keyword a"),
            Z = X("keyword b"),
            Y = X("keyword c");
        var V = X("operator"),
            W = {
                type: "atom",
                style: "atom"
            };
        return {
            "if": U,
            "while": U,
            "with": U,
            "else": Z,
            "do": Z,
            "try": Z,
            "finally": Z,
            "return": Y,
            "break": Y,
            "continue": Y,
            "new": Y,
            "delete": Y,
            "throw": Y,
            "var": X("var"),
            "const": X("var"),
            let: X("var"),
            "function": X("function"),
            "catch": X("catch"),
            "for": X("for"),
            "switch": X("switch"),
            "case": X("case"),
            "default": X("default"),
            "in": V,
            "typeof": V,
            "instanceof": V,
            "true": W,
            "false": W,
            "null": W,
            "undefined": W,
            "NaN": W,
            "Infinity": W
        }
    }();
    var O = /[+\-*&%=<>!?|]/;

    function S(W, V, U) {
        V.tokenize = U;
        return U(W, V)
    }

    function h(X, U) {
        var W = false,
            V;
        while ((V = X.next()) != null) {
            if (V == U && !W) {
                return false
            }
            W = !W && V == "\\"
        }
        return W
    }
    var T, q;

    function C(W, V, U) {
        T = W;
        q = U;
        return V
    }

    function m(Y, W) {
        var U = Y.next();
        if (U == '"' || U == "'") {
            return S(Y, W, A(U))
        } else {
            if (/[\[\]{}\(\),;\:\.]/.test(U)) {
                return C(U)
            } else {
                if (U == "0" && Y.eat(/x/i)) {
                    Y.eatWhile(/[\da-f]/i);
                    return C("number", "number")
                } else {
                    if (/\d/.test(U) || U == "-" && Y.eat(/\d/)) {
                        Y.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/);
                        return C("number", "number")
                    } else {
                        if (U == "/") {
                            if (Y.eat("*")) {
                                return S(Y, W, f)
                            } else {
                                if (Y.eat("/")) {
                                    Y.skipToEnd();
                                    return C("comment", "comment")
                                } else {
                                    if (W.reAllowed) {
                                        h(Y, "/");
                                        Y.eatWhile(/[gimy]/);
                                        return C("regexp", "string-2")
                                    } else {
                                        Y.eatWhile(O);
                                        return C("operator", null, Y.current())
                                    }
                                }
                            }
                        } else {
                            if (U == "#") {
                                Y.skipToEnd();
                                return C("error", "error")
                            } else {
                                if (O.test(U)) {
                                    Y.eatWhile(O);
                                    return C("operator", null, Y.current())
                                } else {
                                    Y.eatWhile(/[\w\$_]/);
                                    var X = Y.current(),
                                        V = b.propertyIsEnumerable(X) && b[X];
                                    return (V && W.kwAllowed) ? C(V.type, V.style, X) : C("variable", "variable", X)
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    function A(U) {
        return function(W, V) {
            if (!h(W, U)) {
                V.tokenize = m
            }
            return C("string", "string")
        }
    }

    function f(X, W) {
        var U = false,
            V;
        while (V = X.next()) {
            if (V == "/" && U) {
                W.tokenize = m;
                break
            }
            U = (V == "*")
        }
        return C("comment", "comment")
    }
    var l = {
        atom: true,
        number: true,
        variable: true,
        string: true,
        regexp: true
    };

    function u(Z, V, U, Y, W, X) {
        this.indented = Z;
        this.column = V;
        this.type = U;
        this.prev = W;
        this.info = X;
        if (Y != null) {
            this.align = Y
        }
    }

    function x(W, V) {
        for (var U = W.localVars; U; U = U.next) {
            if (U.name == V) {
                return true
            }
        }
    }

    function F(Y, V, U, X, Z) {
        var aa = Y.cc;
        v.state = Y;
        v.stream = Z;
        v.marked = null, v.cc = aa;
        if (!Y.lexical.hasOwnProperty("align")) {
            Y.lexical.align = true
        }
        while (true) {
            var W = aa.length ? aa.pop() : R ? y : z;
            if (W(U, X)) {
                while (aa.length && aa[aa.length - 1].lex) {
                    aa.pop()()
                }
                if (v.marked) {
                    return v.marked
                }
                if (U == "variable" && x(Y, X)) {
                    return "variable-2"
                }
                return V
            }
        }
    }
    var v = {
        state: null,
        column: null,
        marked: null,
        cc: null
    };

    function a() {
        for (var U = arguments.length - 1; U >= 0; U--) {
            v.cc.push(arguments[U])
        }
    }

    function H() {
        a.apply(null, arguments);
        return true
    }

    function n(V) {
        var W = v.state;
        if (W.context) {
            v.marked = "def";
            for (var U = W.localVars; U; U = U.next) {
                if (U.name == V) {
                    return
                }
            }
            W.localVars = {
                name: V,
                next: W.localVars
            }
        }
    }
    var E = {
        name: "this",
        next: {
            name: "arguments"
        }
    };

    function t() {
        if (!v.state.context) {
            v.state.localVars = E
        }
        v.state.context = {
            prev: v.state.context,
            vars: v.state.localVars
        }
    }

    function s() {
        v.state.localVars = v.state.context.vars;
        v.state.context = v.state.context.prev
    }

    function k(V, W) {
        var U = function() {
            var X = v.state;
            X.lexical = new u(X.indented, v.stream.column(), V, null, X.lexical, W)
        };
        U.lex = true;
        return U
    }

    function G() {
        var U = v.state;
        if (U.lexical.prev) {
            if (U.lexical.type == ")") {
                U.indented = U.lexical.indented
            }
            U.lexical = U.lexical.prev
        }
    }
    G.lex = true;

    function c(V) {
        return function U(W) {
            if (W == V) {
                return H()
            } else {
                if (V == ";") {
                    return a()
                } else {
                    return H(arguments.callee)
                }
            }
        }
    }

    function z(U) {
        if (U == "var") {
            return H(k("vardef"), K, c(";"), G)
        }
        if (U == "keyword a") {
            return H(k("form"), y, z, G)
        }
        if (U == "keyword b") {
            return H(k("form"), z, G)
        }
        if (U == "{") {
            return H(k("}"), o, G)
        }
        if (U == ";") {
            return H()
        }
        if (U == "function") {
            return H(j)
        }
        if (U == "for") {
            return H(k("form"), c("("), k(")"), g, c(")"), G, z, G)
        }
        if (U == "variable") {
            return H(k("stat"), D)
        }
        if (U == "switch") {
            return H(k("form"), y, k("}", "switch"), c("{"), o, G, G)
        }
        if (U == "case") {
            return H(y, c(":"))
        }
        if (U == "default") {
            return H(c(":"))
        }
        if (U == "catch") {
            return H(k("form"), t, c("("), r, c(")"), z, G, s)
        }
        return a(k("stat"), y, c(";"), G)
    }

    function y(U) {
        if (l.hasOwnProperty(U)) {
            return H(M)
        }
        if (U == "function") {
            return H(j)
        }
        if (U == "keyword c") {
            return H(B)
        }
        if (U == "(") {
            return H(k(")"), B, c(")"), G, M)
        }
        if (U == "operator") {
            return H(y)
        }
        if (U == "[") {
            return H(k("]"), P(y, "]"), G, M)
        }
        if (U == "{") {
            return H(k("}"), P(p, "}"), G, M)
        }
        return H()
    }

    function B(U) {
        if (U.match(/[;\}\)\],]/)) {
            return a()
        }
        return a(y)
    }

    function M(U, V) {
        if (U == "operator" && /\+\+|--/.test(V)) {
            return H(M)
        }
        if (U == "operator" || U == ":") {
            return H(y)
        }
        if (U == ";") {
            return
        }
        if (U == "(") {
            return H(k(")"), P(y, ")"), G, M)
        }
        if (U == ".") {
            return H(Q, M)
        }
        if (U == "[") {
            return H(k("]"), y, c("]"), G, M)
        }
    }

    function D(U) {
        if (U == ":") {
            return H(G, z)
        }
        return a(M, c(";"), G)
    }

    function Q(U) {
        if (U == "variable") {
            v.marked = "property";
            return H()
        }
    }

    function p(U) {
        if (U == "variable") {
            v.marked = "property"
        }
        if (l.hasOwnProperty(U)) {
            return H(c(":"), y)
        }
    }

    function P(W, U) {
        function V(Y) {
            if (Y == ",") {
                return H(W, V)
            }
            if (Y == U) {
                return H()
            }
            return H(c(U))
        }
        return function X(Y) {
            if (Y == U) {
                return H()
            } else {
                return a(W, V)
            }
        }
    }

    function o(U) {
        if (U == "}") {
            return H()
        }
        return a(z, o)
    }

    function K(U, V) {
        if (U == "variable") {
            n(V);
            return H(I)
        }
        return H()
    }

    function I(U, V) {
        if (V == "=") {
            return H(y, I)
        }
        if (U == ",") {
            return H(K)
        }
    }

    function g(U) {
        if (U == "var") {
            return H(K, e)
        }
        if (U == ";") {
            return a(e)
        }
        if (U == "variable") {
            return H(L)
        }
        return a(e)
    }

    function L(U, V) {
        if (V == "in") {
            return H(y)
        }
        return H(M, e)
    }

    function e(U, V) {
        if (U == ";") {
            return H(d)
        }
        if (V == "in") {
            return H(y)
        }
        return H(y, c(";"), d)
    }

    function d(U) {
        if (U != ")") {
            H(y)
        }
    }

    function j(U, V) {
        if (U == "variable") {
            n(V);
            return H(j)
        }
        if (U == "(") {
            return H(k(")"), t, P(r, ")"), G, z, s)
        }
    }

    function r(U, V) {
        if (U == "variable") {
            n(V);
            return H()
        }
    }
    return {
        startState: function(U) {
            return {
                tokenize: m,
                reAllowed: true,
                kwAllowed: true,
                cc: [],
                lexical: new u((U || 0) - w, 0, "block", false),
                localVars: N.localVars,
                context: N.localVars && {
                    vars: N.localVars
                },
                indented: 0
            }
        },
        token: function(W, V) {
            if (W.sol()) {
                if (!V.lexical.hasOwnProperty("align")) {
                    V.lexical.align = false
                }
                V.indented = W.indentation()
            }
            if (W.eatSpace()) {
                return null
            }
            var U = V.tokenize(W, V);
            if (T == "comment") {
                return U
            }
            V.reAllowed = !!(T == "operator" || T == "keyword c" || T.match(/^[\[{}\(,;:]$/));
            V.kwAllowed = T != ".";
            return F(V, U, T, q, W)
        },
        indent: function(Z, U) {
            if (Z.tokenize != m) {
                return 0
            }
            var Y = U && U.charAt(0),
                W = Z.lexical;
            if (W.type == "stat" && Y == "}") {
                W = W.prev
            }
            var X = W.type,
                V = Y == X;
            if (X == "vardef") {
                return W.indented + 4
            } else {
                if (X == "form" && Y == "{") {
                    return W.indented
                } else {
                    if (X == "stat" || X == "form") {
                        return W.indented + w
                    } else {
                        if (W.info == "switch" && !V) {
                            return W.indented + (/^(?:case|default)\b/.test(U) ? w : 2 * w)
                        } else {
                            if (W.align) {
                                return W.column + (V ? 0 : 1)
                            } else {
                                return W.indented + (V ? 0 : w)
                            }
                        }
                    }
                }
            }
        },
        electricChars: ":{}"
    }
});
CodeMirror.defineMIME("text/javascript", "javascript");
CodeMirror.defineMIME("application/json", {
    name: "javascript",
    json: true
});
/*!
 * JSHint, by JSHint Community.
 *
 * Licensed under the same slightly modified MIT license that JSLint is.
 * It stops evil-doers everywhere.
 *
 * JSHint is a derivative work of JSLint:
 *
 *   Copyright (c) 2002 Douglas Crockford  (www.JSLint.com)
 *
 *   Permission is hereby granted, free of charge, to any person obtaining
 *   a copy of this software and associated documentation files (the "Software"),
 *   to deal in the Software without restriction, including without limitation
 *   the rights to use, copy, modify, merge, publish, distribute, sublicense,
 *   and/or sell copies of the Software, and to permit persons to whom
 *   the Software is furnished to do so, subject to the following conditions:
 *
 *   The above copyright notice and this permission notice shall be included
 *   in all copies or substantial portions of the Software.
 *
 *   The Software shall be used for Good, not Evil.
 *
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 *   FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 *   DEALINGS IN THE SOFTWARE.
 *
 * JSHint was forked from 2010-12-16 edition of JSLint.
 *
 */
var JSHINT = (function() {
    var aZ, u = {
            "<": true,
            "<=": true,
            "==": true,
            "===": true,
            "!==": true,
            "!=": true,
            ">": true,
            ">=": true,
            "+": true,
            "-": true,
            "*": true,
            "/": true,
            "%": true
        },
        p = {
            asi: true,
            bitwise: true,
            boss: true,
            browser: true,
            camelcase: true,
            couch: true,
            curly: true,
            debug: true,
            devel: true,
            dojo: true,
            eqeqeq: true,
            eqnull: true,
            es5: true,
            esnext: true,
            evil: true,
            expr: true,
            forin: true,
            funcscope: true,
            globalstrict: true,
            immed: true,
            iterator: true,
            jquery: true,
            lastsemic: true,
            latedef: true,
            laxbreak: true,
            laxcomma: true,
            loopfunc: true,
            mootools: true,
            multistr: true,
            newcap: true,
            noarg: true,
            node: true,
            noempty: true,
            nonew: true,
            nonstandard: true,
            nomen: true,
            onevar: true,
            onecase: true,
            passfail: true,
            plusplus: true,
            proto: true,
            prototypejs: true,
            regexdash: true,
            regexp: true,
            rhino: true,
            undef: true,
            scripturl: true,
            shadow: true,
            smarttabs: true,
            strict: true,
            sub: true,
            supernew: true,
            trailing: true,
            validthis: true,
            withstmt: true,
            white: true,
            worker: true,
            wsh: true
        },
        al = {
            maxlen: false,
            indent: false,
            maxerr: false,
            predef: false,
            quotmark: false
        },
        aH = {
            bitwise: true,
            forin: true,
            newcap: true,
            nomen: true,
            plusplus: true,
            regexp: true,
            undef: true,
            white: true,
            eqeqeq: true,
            onevar: true
        },
        t = {
            eqeq: "eqeqeq",
            vars: "onevar",
            windows: "wsh"
        },
        aV = {
            ArrayBuffer: false,
            ArrayBufferView: false,
            Audio: false,
            addEventListener: false,
            applicationCache: false,
            atob: false,
            blur: false,
            btoa: false,
            clearInterval: false,
            clearTimeout: false,
            close: false,
            closed: false,
            DataView: false,
            DOMParser: false,
            defaultStatus: false,
            document: false,
            event: false,
            FileReader: false,
            Float32Array: false,
            Float64Array: false,
            FormData: false,
            focus: false,
            frames: false,
            getComputedStyle: false,
            HTMLElement: false,
            HTMLAnchorElement: false,
            HTMLBaseElement: false,
            HTMLBlockquoteElement: false,
            HTMLBodyElement: false,
            HTMLBRElement: false,
            HTMLButtonElement: false,
            HTMLCanvasElement: false,
            HTMLDirectoryElement: false,
            HTMLDivElement: false,
            HTMLDListElement: false,
            HTMLFieldSetElement: false,
            HTMLFontElement: false,
            HTMLFormElement: false,
            HTMLFrameElement: false,
            HTMLFrameSetElement: false,
            HTMLHeadElement: false,
            HTMLHeadingElement: false,
            HTMLHRElement: false,
            HTMLHtmlElement: false,
            HTMLIFrameElement: false,
            HTMLImageElement: false,
            HTMLInputElement: false,
            HTMLIsIndexElement: false,
            HTMLLabelElement: false,
            HTMLLayerElement: false,
            HTMLLegendElement: false,
            HTMLLIElement: false,
            HTMLLinkElement: false,
            HTMLMapElement: false,
            HTMLMenuElement: false,
            HTMLMetaElement: false,
            HTMLModElement: false,
            HTMLObjectElement: false,
            HTMLOListElement: false,
            HTMLOptGroupElement: false,
            HTMLOptionElement: false,
            HTMLParagraphElement: false,
            HTMLParamElement: false,
            HTMLPreElement: false,
            HTMLQuoteElement: false,
            HTMLScriptElement: false,
            HTMLSelectElement: false,
            HTMLStyleElement: false,
            HTMLTableCaptionElement: false,
            HTMLTableCellElement: false,
            HTMLTableColElement: false,
            HTMLTableElement: false,
            HTMLTableRowElement: false,
            HTMLTableSectionElement: false,
            HTMLTextAreaElement: false,
            HTMLTitleElement: false,
            HTMLUListElement: false,
            HTMLVideoElement: false,
            history: false,
            Int16Array: false,
            Int32Array: false,
            Int8Array: false,
            Image: false,
            length: false,
            localStorage: false,
            location: false,
            MessageChannel: false,
            MessageEvent: false,
            MessagePort: false,
            moveBy: false,
            moveTo: false,
            MutationObserver: false,
            name: false,
            Node: false,
            NodeFilter: false,
            navigator: false,
            onbeforeunload: true,
            onblur: true,
            onerror: true,
            onfocus: true,
            onload: true,
            onresize: true,
            onunload: true,
            open: false,
            openDatabase: false,
            opener: false,
            Option: false,
            parent: false,
            print: false,
            removeEventListener: false,
            resizeBy: false,
            resizeTo: false,
            screen: false,
            scroll: false,
            scrollBy: false,
            scrollTo: false,
            sessionStorage: false,
            setInterval: false,
            setTimeout: false,
            SharedWorker: false,
            status: false,
            top: false,
            Uint16Array: false,
            Uint32Array: false,
            Uint8Array: false,
            WebSocket: false,
            window: false,
            Worker: false,
            XMLHttpRequest: false,
            XMLSerializer: false,
            XPathEvaluator: false,
            XPathException: false,
            XPathExpression: false,
            XPathNamespace: false,
            XPathNSResolver: false,
            XPathResult: false
        },
        a9 = {
            require: false,
            respond: false,
            getRow: false,
            emit: false,
            send: false,
            start: false,
            sum: false,
            log: false,
            exports: false,
            module: false,
            provides: false
        },
        v = {
            alert: false,
            confirm: false,
            console: false,
            Debug: false,
            opera: false,
            prompt: false
        },
        S = {
            dojo: false,
            dijit: false,
            dojox: false,
            define: false,
            require: false
        },
        H = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "/": "\\/",
            "\\": "\\\\"
        },
        aC, aN = ["closure", "exception", "global", "label", "outer", "unused", "var"],
        B, C, aT, aD, ap, l, bd = {
            "$": false,
            jQuery: false
        },
        a7, N, aI, aU, aX = {
            "$": false,
            "$$": false,
            Assets: false,
            Browser: false,
            Chain: false,
            Class: false,
            Color: false,
            Cookie: false,
            Core: false,
            Document: false,
            DomReady: false,
            DOMReady: false,
            Drag: false,
            Element: false,
            Elements: false,
            Event: false,
            Events: false,
            Fx: false,
            Group: false,
            Hash: false,
            HtmlTable: false,
            Iframe: false,
            IframeShim: false,
            InputValidator: false,
            instanceOf: false,
            Keyboard: false,
            Locale: false,
            Mask: false,
            MooTools: false,
            Native: false,
            Options: false,
            OverText: false,
            Request: false,
            Scroller: false,
            Slick: false,
            Slider: false,
            Sortables: false,
            Spinner: false,
            Swiff: false,
            Tips: false,
            Type: false,
            typeOf: false,
            URI: false,
            Window: false
        },
        m, ar = {
            __filename: false,
            __dirname: false,
            Buffer: false,
            console: false,
            exports: false,
            GLOBAL: false,
            global: false,
            module: false,
            process: false,
            require: false,
            setTimeout: false,
            clearTimeout: false,
            setInterval: false,
            clearInterval: false
        },
        E, W, a2, s, aP, d = {
            "$": false,
            "$$": false,
            "$A": false,
            "$F": false,
            "$H": false,
            "$R": false,
            "$break": false,
            "$continue": false,
            "$w": false,
            Abstract: false,
            Ajax: false,
            Class: false,
            Enumerable: false,
            Element: false,
            Event: false,
            Field: false,
            Form: false,
            Hash: false,
            Insertion: false,
            ObjectRange: false,
            PeriodicalExecuter: false,
            Position: false,
            Prototype: false,
            Selector: false,
            Template: false,
            Toggle: false,
            Try: false,
            Autocompleter: false,
            Builder: false,
            Control: false,
            Draggable: false,
            Draggables: false,
            Droppables: false,
            Effect: false,
            Sortable: false,
            SortableObserver: false,
            Sound: false,
            Scriptaculous: false
        },
        f, aa = {
            defineClass: false,
            deserialize: false,
            gc: false,
            help: false,
            importPackage: false,
            java: false,
            load: false,
            loadClass: false,
            print: false,
            quit: false,
            readFile: false,
            readUrl: false,
            runCommand: false,
            seal: false,
            serialize: false,
            spawn: false,
            sync: false,
            toint32: false,
            version: false
        },
        aF, ay, a6 = {
            Array: false,
            Boolean: false,
            Date: false,
            decodeURI: false,
            decodeURIComponent: false,
            encodeURI: false,
            encodeURIComponent: false,
            Error: false,
            "eval": false,
            EvalError: false,
            Function: false,
            hasOwnProperty: false,
            isFinite: false,
            isNaN: false,
            JSON: false,
            Math: false,
            Number: false,
            Object: false,
            parseInt: false,
            parseFloat: false,
            RangeError: false,
            ReferenceError: false,
            RegExp: false,
            String: false,
            SyntaxError: false,
            TypeError: false,
            URIError: false
        },
        aw = {
            escape: false,
            unescape: false
        },
        I = {
            E: true,
            LN2: true,
            LN10: true,
            LOG2E: true,
            LOG10E: true,
            MAX_VALUE: true,
            MIN_VALUE: true,
            NEGATIVE_INFINITY: true,
            PI: true,
            POSITIVE_INFINITY: true,
            SQRT1_2: true,
            SQRT2: true
        },
        aA, a = {},
        o, aE, V, P, A, K = {
            importScripts: true,
            postMessage: true,
            self: true
        },
        e = {
            ActiveXObject: true,
            Enumerator: true,
            GetObject: true,
            ScriptEngine: true,
            ScriptEngineBuildVersion: true,
            ScriptEngineMajorVersion: true,
            ScriptEngineMinorVersion: true,
            VBArray: true,
            WSH: true,
            WScript: true,
            XDomainRequest: true
        };
    var aq, M, ag, ab, ae, aY, O, x, aW;
    (function() {
        aq = /@cc|<\/?|script|\]\s*\]|<\s*!|&lt/i;
        M = /[\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/;
        ag = /^\s*([(){}\[.,:;'"~\?\]#@]|==?=?|\/(\*(jshint|jslint|members?|global)?|=|\/)?|\*[\/=]?|\+(?:=|\++)?|-(?:=|-+)?|%=?|&[&=]?|\|[|=]?|>>?>?=?|<([\/=!]|\!(\[|--)?|<=?)?|\^=?|\!=?=?|[a-zA-Z_$][a-zA-Z0-9_$]*|[0-9]+([xX][0-9a-fA-F]+|\.[0-9]*)?([eE][+\-]?[0-9]+)?)/;
        ab = /[\u0000-\u001f&<"\/\\\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/;
        ae = /[\u0000-\u001f&<"\/\\\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        aY = /\*\/|\/\*/;
        O = /^([a-zA-Z_$][a-zA-Z0-9_$]*)$/;
        x = /^(?:javascript|jscript|ecmascript|vbscript|mocha|livescript)\s*:/i;
        aW = /^\s*\/\*\s*falls\sthrough\s*\*\/\s*$/
    }());

    function au() {}

    function aS(ax, F) {
        return Object.prototype.hasOwnProperty.call(ax, F)
    }

    function a4(F, ax) {
        if (al[F] === undefined && p[F] === undefined) {
            an("Bad option: '" + F + "'.", ax)
        }
    }
    if (typeof Array.isArray !== "function") {
        Array.isArray = function(F) {
            return Object.prototype.toString.apply(F) === "[object Array]"
        }
    }
    if (typeof Object.create !== "function") {
        Object.create = function(F) {
            au.prototype = F;
            return new au()
        }
    }
    if (typeof Object.keys !== "function") {
        Object.keys = function(be) {
            var F = [],
                ax;
            for (ax in be) {
                if (aS(be, ax)) {
                    F.push(ax)
                }
            }
            return F
        }
    }
    if (typeof String.prototype.entityify !== "function") {
        String.prototype.entityify = function() {
            return this.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }
    }
    if (typeof String.prototype.isAlpha !== "function") {
        String.prototype.isAlpha = function() {
            return (this >= "a" && this <= "z\uffff") || (this >= "A" && this <= "Z\uffff")
        }
    }
    if (typeof String.prototype.isDigit !== "function") {
        String.prototype.isDigit = function() {
            return (this >= "0" && this <= "9")
        }
    }
    if (typeof String.prototype.supplant !== "function") {
        String.prototype.supplant = function(F) {
            return this.replace(/\{([^{}]*)\}/g, function(be, ax) {
                var bf = F[ax];
                return typeof bf === "string" || typeof bf === "number" ? bf : be
            })
        }
    }
    if (typeof String.prototype.name !== "function") {
        String.prototype.name = function() {
            if (O.test(this)) {
                return this
            }
            if (ab.test(this)) {
                return '"' + this.replace(ae, function(F) {
                    var ax = H[F];
                    if (ax) {
                        return ax
                    }
                    return "\\u" + ("0000" + F.charCodeAt().toString(16)).slice(-4)
                }) + '"'
            }
            return '"' + this + '"'
        }
    }

    function bb(F, ax) {
        var be;
        for (be in ax) {
            if (aS(ax, be)) {
                F[be] = ax[be]
            }
        }
    }

    function ai() {
        if (W.couch) {
            bb(a2, a9)
        }
        if (W.rhino) {
            bb(a2, aa)
        }
        if (W.prototypejs) {
            bb(a2, d)
        }
        if (W.node) {
            bb(a2, ar);
            W.globalstrict = true
        }
        if (W.devel) {
            bb(a2, v)
        }
        if (W.dojo) {
            bb(a2, S)
        }
        if (W.browser) {
            bb(a2, aV)
        }
        if (W.nonstandard) {
            bb(a2, aw)
        }
        if (W.jquery) {
            bb(a2, bd)
        }
        if (W.mootools) {
            bb(a2, aX)
        }
        if (W.worker) {
            bb(a2, K)
        }
        if (W.wsh) {
            bb(a2, e)
        }
        if (W.esnext) {
            P()
        }
        if (W.globalstrict && W.strict !== false) {
            W.strict = true
        }
    }

    function at(bf, ax, be) {
        var F = Math.floor((ax / a7.length) * 100);
        throw {
            name: "JSHintError",
            line: ax,
            character: be,
            message: bf + " (" + F + "% scanned).",
            raw: bf
        }
    }

    function c(bf, F, be, ax) {
        return JSHINT.undefs.push([bf, F, be, ax])
    }

    function an(ax, bk, bi, bh, bg, bf) {
        var F, be, bj;
        bk = bk || m;
        if (bk.id === "(end)") {
            bk = aE
        }
        be = bk.line || 0;
        F = bk.from || 0;
        bj = {
            id: "(error)",
            raw: ax,
            evidence: a7[be - 1] || "",
            line: be,
            character: F,
            a: bi,
            b: bh,
            c: bg,
            d: bf
        };
        bj.reason = ax.supplant(bj);
        JSHINT.errors.push(bj);
        if (W.passfail) {
            at("Stopping. ", be, F)
        }
        A += 1;
        if (A >= W.maxerr) {
            at("Too many errors.", be, F)
        }
        return bj
    }

    function ac(ax, bf, bg, be, F, bi, bh) {
        return an(ax, {
            line: bf,
            from: bg
        }, be, F, bi, bh)
    }

    function aJ(ax, bg, bf, F, bi, bh) {
        var be = an(ax, bg, bf, F, bi, bh)
    }

    function Y(ax, bf, bg, be, F, bi, bh) {
        return aJ(ax, {
            line: bf,
            from: bg
        }, be, F, bi, bh)
    }
    var am = (function am() {
        var bg, bh, F, be;

        function bf() {
            var bi, bj;
            if (F >= a7.length) {
                return false
            }
            bg = 1;
            be = a7[F];
            F += 1;
            if (W.smarttabs) {
                bi = be.search(/ \t/)
            } else {
                bi = be.search(/ \t|\t [^\*]/)
            }
            if (bi >= 0) {
                ac("Mixed spaces and tabs.", F, bi + 1)
            }
            be = be.replace(/\t/g, o);
            bi = be.search(M);
            if (bi >= 0) {
                ac("Unsafe character.", F, bi)
            }
            if (W.maxlen && W.maxlen < be.length) {
                ac("Line too long.", F, be.length)
            }
            bj = W.trailing && be.match(/^(.*?)\s+$/);
            if (bj && !/^\s+$/.test(be)) {
                ac("Trailing whitespace.", F, bj[1].length + 1)
            }
            return true
        }

        function ax(bk, bl) {
            var bj, bi;
            if (bk === "(color)" || bk === "(range)") {
                bi = {
                    type: bk
                }
            } else {
                if (bk === "(punctuator)" || (bk === "(identifier)" && aS(a, bl))) {
                    bi = a[bl] || a["(error)"]
                } else {
                    bi = a[bk]
                }
            }
            bi = Object.create(bi);
            if (bk === "(string)" || bk === "(range)") {
                if (!W.scripturl && x.test(bl)) {
                    ac("Script URL.", F, bh)
                }
            }
            if (bk === "(identifier)") {
                bi.identifier = true;
                if (bl === "__proto__" && !W.proto) {
                    ac("The '{a}' property is deprecated.", F, bh, bl)
                } else {
                    if (bl === "__iterator__" && !W.iterator) {
                        ac("'{a}' is only available in JavaScript 1.7.", F, bh, bl)
                    } else {
                        if (W.nomen && (bl.charAt(0) === "_" || bl.charAt(bl.length - 1) === "_")) {
                            if (!W.node || aE.id === "." || (bl !== "__dirname" && bl !== "__filename")) {
                                ac("Unexpected {a} in '{b}'.", F, bh, "dangling '_'", bl)
                            }
                        } else {
                            if (W.camelcase && bl.indexOf("_") > -1 && !bl.match(/^[A-Z0-9_]*$/)) {
                                ac("Identifier '{a}' is not in camel case.", F, bh, bl)
                            }
                        }
                    }
                }
            }
            bi.value = bl;
            bi.line = F;
            bi.character = bg;
            bi.from = bh;
            bj = bi.id;
            if (bj !== "(endline)") {
                s = bj && (("(,=:[!&|?{};".indexOf(bj.charAt(bj.length - 1)) >= 0) || bj === "return" || bj === "case")
            }
            return bi
        }
        return {
            init: function(bi) {
                if (typeof bi === "string") {
                    a7 = bi.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n")
                } else {
                    a7 = bi
                }
                if (a7[0] && a7[0].substr(0, 2) === "#!") {
                    a7[0] = ""
                }
                F = 0;
                bf();
                bh = 1
            },
            range: function(bj, bi) {
                var bl, bk = "";
                bh = bg;
                if (be.charAt(0) !== bj) {
                    Y("Expected '{a}' and instead saw '{b}'.", F, bg, bj, be.charAt(0))
                }
                for (;;) {
                    be = be.slice(1);
                    bg += 1;
                    bl = be.charAt(0);
                    switch (bl) {
                        case "":
                            Y("Missing '{a}'.", F, bg, bl);
                            break;
                        case bi:
                            be = be.slice(1);
                            bg += 1;
                            return ax("(range)", bk);
                        case "\\":
                            ac("Unexpected '{a}'.", F, bg, bl)
                    }
                    bk += bl
                }
            },
            token: function() {
                var bw, bv, bk, bt, bp, bo, bq, bm, bu, bj, bx, bi, bn, bl;

                function br(by) {
                    var bA = by.exec(be),
                        bz;
                    if (bA) {
                        bm = bA[0].length;
                        bz = bA[1];
                        bv = bz.charAt(0);
                        be = be.substr(bm);
                        bh = bg + bm - bz.length;
                        bg += bm;
                        return bz
                    }
                }

                function bs(by) {
                    var bF, bB, bC = "",
                        bE = false;
                    if (l && by !== '"') {
                        ac("Strings must use doublequote.", F, bg)
                    }
                    if (W.quotmark) {
                        if (W.quotmark === "single" && by !== "'") {
                            ac("Strings must use singlequote.", F, bg)
                        } else {
                            if (W.quotmark === "double" && by !== '"') {
                                ac("Strings must use doublequote.", F, bg)
                            } else {
                                if (W.quotmark === true) {
                                    f = f || by;
                                    if (f !== by) {
                                        ac("Mixed double and single quotes.", F, bg)
                                    }
                                }
                            }
                        }
                    }

                    function bA(bH) {
                        var bG = parseInt(be.substr(bB + 1, bH), 16);
                        bB += bH;
                        if (bG >= 32 && bG <= 126 && bG !== 34 && bG !== 92 && bG !== 39) {
                            ac("Unnecessary escapement.", F, bg)
                        }
                        bg += bH;
                        bF = String.fromCharCode(bG)
                    }
                    bB = 0;
                    unclosedString: for (;;) {
                        while (bB >= be.length) {
                            bB = 0;
                            var bz = F,
                                bD = bh;
                            if (!bf()) {
                                Y("Unclosed string.", bz, bD);
                                break unclosedString
                            }
                            if (bE) {
                                bE = false
                            } else {
                                ac("Unclosed string.", bz, bD)
                            }
                        }
                        bF = be.charAt(bB);
                        if (bF === by) {
                            bg += 1;
                            be = be.substr(bB + 1);
                            return ax("(string)", bC, by)
                        }
                        if (bF < " ") {
                            if (bF === "\n" || bF === "\r") {
                                break
                            }
                            ac("Control character in string: {a}.", F, bg + bB, be.slice(0, bB))
                        } else {
                            if (bF === "\\") {
                                bB += 1;
                                bg += 1;
                                bF = be.charAt(bB);
                                bl = be.charAt(bB + 1);
                                switch (bF) {
                                    case "\\":
                                    case '"':
                                    case "/":
                                        break;
                                    case "'":
                                        if (l) {
                                            ac("Avoid \\'.", F, bg)
                                        }
                                        break;
                                    case "b":
                                        bF = "\b";
                                        break;
                                    case "f":
                                        bF = "\f";
                                        break;
                                    case "n":
                                        bF = "\n";
                                        break;
                                    case "r":
                                        bF = "\r";
                                        break;
                                    case "t":
                                        bF = "\t";
                                        break;
                                    case "0":
                                        bF = "\0";
                                        if (bl >= 0 && bl <= 7 && aA["use strict"]) {
                                            ac("Octal literals are not allowed in strict mode.", F, bg)
                                        }
                                        break;
                                    case "u":
                                        bA(4);
                                        break;
                                    case "v":
                                        if (l) {
                                            ac("Avoid \\v.", F, bg)
                                        }
                                        bF = "\v";
                                        break;
                                    case "x":
                                        if (l) {
                                            ac("Avoid \\x-.", F, bg)
                                        }
                                        bA(2);
                                        break;
                                    case "":
                                        bE = true;
                                        if (W.multistr) {
                                            if (l) {
                                                ac("Avoid EOL escapement.", F, bg)
                                            }
                                            bF = "";
                                            bg -= 1;
                                            break
                                        }
                                        ac("Bad escapement of EOL. Use option multistr if needed.", F, bg);
                                        break;
                                    default:
                                        ac("Bad escapement.", F, bg)
                                }
                            }
                        }
                        bC += bF;
                        bg += 1;
                        bB += 1
                    }
                }
                for (;;) {
                    if (!be) {
                        return ax(bf() ? "(endline)" : "(end)", "")
                    }
                    bx = br(ag);
                    if (!bx) {
                        bx = "";
                        bv = "";
                        while (be && be < "!") {
                            be = be.substr(1)
                        }
                        if (be) {
                            Y("Unexpected '{a}'.", F, bg, be.substr(0, 1));
                            be = ""
                        }
                    } else {
                        if (bv.isAlpha() || bv === "_" || bv === "$") {
                            return ax("(identifier)", bx)
                        }
                        if (bv.isDigit()) {
                            if (!isFinite(Number(bx))) {
                                ac("Bad number '{a}'.", F, bg, bx)
                            }
                            if (be.substr(0, 1).isAlpha()) {
                                ac("Missing space after '{a}'.", F, bg, bx)
                            }
                            if (bv === "0") {
                                bt = bx.substr(1, 1);
                                if (bt.isDigit()) {
                                    if (aE.id !== ".") {
                                        ac("Don't use extra leading zeros '{a}'.", F, bg, bx)
                                    }
                                } else {
                                    if (l && (bt === "x" || bt === "X")) {
                                        ac("Avoid 0x-. '{a}'.", F, bg, bx)
                                    }
                                }
                            }
                            if (bx.substr(bx.length - 1) === ".") {
                                ac("A trailing decimal point can be confused with a dot '{a}'.", F, bg, bx)
                            }
                            return ax("(number)", bx)
                        }
                        switch (bx) {
                            case '"':
                            case "'":
                                return bs(bx);
                            case "//":
                                be = "";
                                aE.comment = true;
                                break;
                            case "/*":
                                for (;;) {
                                    bq = be.search(aY);
                                    if (bq >= 0) {
                                        break
                                    }
                                    if (!bf()) {
                                        Y("Unclosed comment.", F, bg)
                                    }
                                }
                                bg += bq + 2;
                                if (be.substr(bq, 1) === "/") {
                                    Y("Nested comment.", F, bg)
                                }
                                be = be.substr(bq + 2);
                                aE.comment = true;
                                break;
                            case "/*members":
                            case "/*member":
                            case "/*jshint":
                            case "/*jslint":
                            case "/*global":
                            case "*/":
                                return {
                                    value: bx,
                                    type: "special",
                                    line: F,
                                    character: bg,
                                    from: bh
                                };
                            case "":
                                break;
                            case "/":
                                if (aE.id === "/=") {
                                    Y("A regular expression literal can be confused with '/='.", F, bh)
                                }
                                if (s) {
                                    bp = 0;
                                    bk = 0;
                                    bm = 0;
                                    for (;;) {
                                        bw = true;
                                        bv = be.charAt(bm);
                                        bm += 1;
                                        switch (bv) {
                                            case "":
                                                Y("Unclosed regular expression.", F, bh);
                                                return at("Stopping.", F, bh);
                                            case "/":
                                                if (bp > 0) {
                                                    ac("{a} unterminated regular expression group(s).", F, bh + bm, bp)
                                                }
                                                bv = be.substr(0, bm - 1);
                                                bj = {
                                                    g: true,
                                                    i: true,
                                                    m: true
                                                };
                                                while (bj[be.charAt(bm)] === true) {
                                                    bj[be.charAt(bm)] = false;
                                                    bm += 1
                                                }
                                                bg += bm;
                                                be = be.substr(bm);
                                                bj = be.charAt(0);
                                                if (bj === "/" || bj === "*") {
                                                    Y("Confusing regular expression.", F, bh)
                                                }
                                                return ax("(regexp)", bv);
                                            case "\\":
                                                bv = be.charAt(bm);
                                                if (bv < " ") {
                                                    ac("Unexpected control character in regular expression.", F, bh + bm)
                                                } else {
                                                    if (bv === "<") {
                                                        ac("Unexpected escaped character '{a}' in regular expression.", F, bh + bm, bv)
                                                    }
                                                }
                                                bm += 1;
                                                break;
                                            case "(":
                                                bp += 1;
                                                bw = false;
                                                if (be.charAt(bm) === "?") {
                                                    bm += 1;
                                                    switch (be.charAt(bm)) {
                                                        case ":":
                                                        case "=":
                                                        case "!":
                                                            bm += 1;
                                                            break;
                                                        default:
                                                            ac("Expected '{a}' and instead saw '{b}'.", F, bh + bm, ":", be.charAt(bm))
                                                    }
                                                } else {
                                                    bk += 1
                                                }
                                                break;
                                            case "|":
                                                bw = false;
                                                break;
                                            case ")":
                                                if (bp === 0) {
                                                    ac("Unescaped '{a}'.", F, bh + bm, ")")
                                                } else {
                                                    bp -= 1
                                                }
                                                break;
                                            case " ":
                                                bj = 1;
                                                while (be.charAt(bm) === " ") {
                                                    bm += 1;
                                                    bj += 1
                                                }
                                                if (bj > 1) {
                                                    ac("Spaces are hard to count. Use {{a}}.", F, bh + bm, bj)
                                                }
                                                break;
                                            case "[":
                                                bv = be.charAt(bm);
                                                if (bv === "^") {
                                                    bm += 1;
                                                    if (W.regexp) {
                                                        ac("Insecure '{a}'.", F, bh + bm, bv)
                                                    } else {
                                                        if (be.charAt(bm) === "]") {
                                                            Y("Unescaped '{a}'.", F, bh + bm, "^")
                                                        }
                                                    }
                                                }
                                                if (bv === "]") {
                                                    ac("Empty class.", F, bh + bm - 1)
                                                }
                                                bi = false;
                                                bn = false;
                                                klass: do {
                                                    bv = be.charAt(bm);
                                                    bm += 1;
                                                    switch (bv) {
                                                        case "[":
                                                        case "^":
                                                            ac("Unescaped '{a}'.", F, bh + bm, bv);
                                                            if (bn) {
                                                                bn = false
                                                            } else {
                                                                bi = true
                                                            }
                                                            break;
                                                        case "-":
                                                            if (bi && !bn) {
                                                                bi = false;
                                                                bn = true
                                                            } else {
                                                                if (bn) {
                                                                    bn = false
                                                                } else {
                                                                    if (be.charAt(bm) === "]") {
                                                                        bn = true
                                                                    } else {
                                                                        if (W.regexdash !== (bm === 2 || (bm === 3 && be.charAt(1) === "^"))) {
                                                                            ac("Unescaped '{a}'.", F, bh + bm - 1, "-")
                                                                        }
                                                                        bi = true
                                                                    }
                                                                }
                                                            }
                                                            break;
                                                        case "]":
                                                            if (bn && !W.regexdash) {
                                                                ac("Unescaped '{a}'.", F, bh + bm - 1, "-")
                                                            }
                                                            break klass;
                                                        case "\\":
                                                            bv = be.charAt(bm);
                                                            if (bv < " ") {
                                                                ac("Unexpected control character in regular expression.", F, bh + bm)
                                                            } else {
                                                                if (bv === "<") {
                                                                    ac("Unexpected escaped character '{a}' in regular expression.", F, bh + bm, bv)
                                                                }
                                                            }
                                                            bm += 1;
                                                            if (/[wsd]/i.test(bv)) {
                                                                if (bn) {
                                                                    ac("Unescaped '{a}'.", F, bh + bm, "-");
                                                                    bn = false
                                                                }
                                                                bi = false
                                                            } else {
                                                                if (bn) {
                                                                    bn = false
                                                                } else {
                                                                    bi = true
                                                                }
                                                            }
                                                            break;
                                                        case "/":
                                                            ac("Unescaped '{a}'.", F, bh + bm - 1, "/");
                                                            if (bn) {
                                                                bn = false
                                                            } else {
                                                                bi = true
                                                            }
                                                            break;
                                                        case "<":
                                                            if (bn) {
                                                                bn = false
                                                            } else {
                                                                bi = true
                                                            }
                                                            break;
                                                        default:
                                                            if (bn) {
                                                                bn = false
                                                            } else {
                                                                bi = true
                                                            }
                                                    }
                                                } while (bv);
                                                break;
                                            case ".":
                                                if (W.regexp) {
                                                    ac("Insecure '{a}'.", F, bh + bm, bv)
                                                }
                                                break;
                                            case "]":
                                            case "?":
                                            case "{":
                                            case "}":
                                            case "+":
                                            case "*":
                                                ac("Unescaped '{a}'.", F, bh + bm, bv)
                                        }
                                        if (bw) {
                                            switch (be.charAt(bm)) {
                                                case "?":
                                                case "+":
                                                case "*":
                                                    bm += 1;
                                                    if (be.charAt(bm) === "?") {
                                                        bm += 1
                                                    }
                                                    break;
                                                case "{":
                                                    bm += 1;
                                                    bv = be.charAt(bm);
                                                    if (bv < "0" || bv > "9") {
                                                        ac("Expected a number and instead saw '{a}'.", F, bh + bm, bv)
                                                    }
                                                    bm += 1;
                                                    bu = +bv;
                                                    for (;;) {
                                                        bv = be.charAt(bm);
                                                        if (bv < "0" || bv > "9") {
                                                            break
                                                        }
                                                        bm += 1;
                                                        bu = +bv + (bu * 10)
                                                    }
                                                    bo = bu;
                                                    if (bv === ",") {
                                                        bm += 1;
                                                        bo = Infinity;
                                                        bv = be.charAt(bm);
                                                        if (bv >= "0" && bv <= "9") {
                                                            bm += 1;
                                                            bo = +bv;
                                                            for (;;) {
                                                                bv = be.charAt(bm);
                                                                if (bv < "0" || bv > "9") {
                                                                    break
                                                                }
                                                                bm += 1;
                                                                bo = +bv + (bo * 10)
                                                            }
                                                        }
                                                    }
                                                    if (be.charAt(bm) !== "}") {
                                                        ac("Expected '{a}' and instead saw '{b}'.", F, bh + bm, "}", bv)
                                                    } else {
                                                        bm += 1
                                                    }
                                                    if (be.charAt(bm) === "?") {
                                                        bm += 1
                                                    }
                                                    if (bu > bo) {
                                                        ac("'{a}' should not be greater than '{b}'.", F, bh + bm, bu, bo)
                                                    }
                                            }
                                        }
                                    }
                                    bv = be.substr(0, bm - 1);
                                    bg += bm;
                                    be = be.substr(bm);
                                    return ax("(regexp)", bv)
                                }
                                return ax("(punctuator)", bx);
                            case "#":
                                return ax("(punctuator)", bx);
                            default:
                                return ax("(punctuator)", bx)
                        }
                    }
                }
            }
        }
    }());

    function w(F, ax) {
        if (F === "hasOwnProperty") {
            an("'hasOwnProperty' is a really bad name.")
        }
        if (aS(aC, F) && !aC["(global)"]) {
            if (aC[F] === true) {
                if (W.latedef) {
                    an("'{a}' was used before it was defined.", m, F)
                }
            } else {
                if (!W.shadow && ax !== "exception") {
                    an("'{a}' is already defined.", m, F)
                }
            }
        }
        aC[F] = ax;
        if (aC["(global)"]) {
            C[F] = aC;
            if (aS(aT, F)) {
                if (W.latedef) {
                    an("'{a}' was used before it was defined.", m, F)
                }
                delete aT[F]
            }
        } else {
            aF[F] = aC
        }
    }

    function y() {
        var ax, bh, bg, bi = m.value,
            bf, F, be;
        switch (bi) {
            case "*/":
                aJ("Unbegun comment.");
                break;
            case "/*members":
            case "/*member":
                bi = "/*members";
                if (!aU) {
                    aU = {}
                }
                bh = aU;
                break;
            case "/*jshint":
            case "/*jslint":
                bh = W;
                bg = p;
                break;
            case "/*global":
                bh = a2;
                break;
            default:
                aJ("What?")
        }
        bf = am.token();
        loop: for (;;) {
            for (;;) {
                if (bf.type === "special" && bf.value === "*/") {
                    break loop
                }
                if (bf.id !== "(endline)" && bf.id !== ",") {
                    break
                }
                bf = am.token()
            }
            if (bf.type !== "(string)" && bf.type !== "(identifier)" && bi !== "/*members") {
                aJ("Bad option.", bf)
            }
            be = am.token();
            if (be.id === ":") {
                be = am.token();
                if (bh === aU) {
                    aJ("Expected '{a}' and instead saw '{b}'.", bf, "*/", ":")
                }
                if (bi === "/*jshint") {
                    a4(bf.value, bf)
                }
                if (bf.value === "indent" && (bi === "/*jshint" || bi === "/*jslint")) {
                    ax = +be.value;
                    if (typeof ax !== "number" || !isFinite(ax) || ax <= 0 || Math.floor(ax) !== ax) {
                        aJ("Expected a small integer and instead saw '{a}'.", be, be.value)
                    }
                    bh.white = true;
                    bh.indent = ax
                } else {
                    if (bf.value === "maxerr" && (bi === "/*jshint" || bi === "/*jslint")) {
                        ax = +be.value;
                        if (typeof ax !== "number" || !isFinite(ax) || ax <= 0 || Math.floor(ax) !== ax) {
                            aJ("Expected a small integer and instead saw '{a}'.", be, be.value)
                        }
                        bh.maxerr = ax
                    } else {
                        if (bf.value === "maxlen" && (bi === "/*jshint" || bi === "/*jslint")) {
                            ax = +be.value;
                            if (typeof ax !== "number" || !isFinite(ax) || ax <= 0 || Math.floor(ax) !== ax) {
                                aJ("Expected a small integer and instead saw '{a}'.", be, be.value)
                            }
                            bh.maxlen = ax
                        } else {
                            if (bf.value === "validthis") {
                                if (aC["(global)"]) {
                                    aJ("Option 'validthis' can't be used in a global scope.")
                                } else {
                                    if (be.value === "true" || be.value === "false") {
                                        bh[bf.value] = be.value === "true"
                                    } else {
                                        aJ("Bad option value.", be)
                                    }
                                }
                            } else {
                                if (be.value === "true" || be.value === "false") {
                                    if (bi === "/*jslint") {
                                        F = t[bf.value] || bf.value;
                                        bh[F] = be.value === "true";
                                        if (aH[F] !== undefined) {
                                            bh[F] = !bh[F]
                                        }
                                    } else {
                                        bh[bf.value] = be.value === "true"
                                    }
                                } else {
                                    aJ("Bad option value.", be)
                                }
                            }
                        }
                    }
                }
                bf = am.token()
            } else {
                if (bi === "/*jshint" || bi === "/*jslint") {
                    aJ("Missing option value.", bf)
                }
                bh[bf.value] = false;
                bf = be
            }
        }
        if (bg) {
            ai()
        }
    }

    function aQ(bf) {
        var be = bf || 0,
            F = 0,
            ax;
        while (F <= be) {
            ax = N[F];
            if (!ax) {
                ax = N[F] = am.token()
            }
            F += 1
        }
        return ax
    }

    function af(ax, F) {
        switch (aE.id) {
            case "(number)":
                if (m.id === ".") {
                    an("A dot following a number can be confused with a decimal point.", aE)
                }
                break;
            case "-":
                if (m.id === "-" || m.id === "--") {
                    an("Confusing minusses.")
                }
                break;
            case "+":
                if (m.id === "+" || m.id === "++") {
                    an("Confusing plusses.")
                }
                break
        }
        if (aE.type === "(string)" || aE.identifier) {
            aZ = aE.value
        }
        if (ax && m.id !== ax) {
            if (F) {
                if (m.id === "(end)") {
                    an("Unmatched '{a}'.", F, F.id)
                } else {
                    an("Expected '{a}' to match '{b}' from line {c} and instead saw '{d}'.", m, ax, F.id, F.line, m.value)
                }
            } else {
                if (m.type !== "(identifier)" || m.value !== ax) {
                    an("Expected '{a}' and instead saw '{b}'.", m, ax, m.value)
                }
            }
        }
        aP = aE;
        aE = m;
        for (;;) {
            m = N.shift() || am.token();
            if (m.id === "(end)" || m.id === "(error)") {
                return
            }
            if (m.type === "special") {
                y()
            } else {
                if (m.id !== "(endline)") {
                    break
                }
            }
        }
    }

    function aG(be, bf) {
        var bg, ax = false,
            F = false;
        if (m.id === "(end)") {
            aJ("Unexpected early end of program.", aE)
        }
        af();
        if (bf) {
            aZ = "anonymous";
            aC["(verb)"] = aE.value
        }
        if (bf === true && aE.fud) {
            bg = aE.fud()
        } else {
            if (aE.nud) {
                bg = aE.nud()
            } else {
                if (m.type === "(number)" && aE.id === ".") {
                    an("A leading decimal point can be confused with a dot: '.{a}'.", aE, m.value);
                    af();
                    return aE
                } else {
                    aJ("Expected an identifier and instead saw '{a}'.", aE, aE.id)
                }
            }
            while (be < m.lbp) {
                ax = aE.value === "Array";
                F = aE.value === "Object";
                if (bg && (bg.value || (bg.first && bg.first.value))) {
                    if (bg.value !== "new" || (bg.first && bg.first.value && bg.first.value === ".")) {
                        ax = false;
                        if (bg.value !== aE.value) {
                            F = false
                        }
                    }
                }
                af();
                if (ax && aE.id === "(" && m.id === ")") {
                    an("Use the array literal notation [].", aE)
                }
                if (F && aE.id === "(" && m.id === ")") {
                    an("Use the object literal notation {}.", aE)
                }
                if (aE.led) {
                    bg = aE.led(bg)
                } else {
                    aJ("Expected an operator and instead saw '{a}'.", aE, aE.id)
                }
            }
        }
        return bg
    }

    function av(ax, F) {
        ax = ax || aE;
        F = F || m;
        if (W.white) {
            if (ax.character !== F.from && ax.line === F.line) {
                ax.from += (ax.character - ax.from);
                an("Unexpected space after '{a}'.", ax, ax.value)
            }
        }
    }

    function aM(ax, F) {
        ax = ax || aE;
        F = F || m;
        if (W.white && (ax.character !== F.from || ax.line !== F.line)) {
            an("Unexpected space before '{a}'.", F, F.value)
        }
    }

    function U(ax, F) {
        ax = ax || aE;
        F = F || m;
        if (W.white && !ax.comment) {
            if (ax.line === F.line) {
                av(ax, F)
            }
        }
    }

    function T(ax, F) {
        if (W.white) {
            ax = ax || aE;
            F = F || m;
            if (ax.line === F.line && ax.character === F.from) {
                ax.from += (ax.character - ax.from);
                an("Missing space after '{a}'.", ax, ax.value)
            }
        }
    }

    function ak(ax, F) {
        ax = ax || aE;
        F = F || m;
        if (!W.laxbreak && ax.line !== F.line) {
            an("Bad line breaking before '{a}'.", F, F.id)
        } else {
            if (W.white) {
                ax = ax || aE;
                F = F || m;
                if (ax.character === F.from) {
                    ax.from += (ax.character - ax.from);
                    an("Missing space after '{a}'.", ax, ax.value)
                }
            }
        }
    }

    function b(F) {
        var ax;
        if (W.white && m.id !== "(end)") {
            ax = ap + (F || 0);
            if (m.from !== ax) {
                an("Expected '{a}' to have an indentation at {b} instead at {c}.", m, m.value, ax, m.from)
            }
        }
    }

    function ba(F) {
        F = F || aE;
        if (F.line !== m.line) {
            an("Line breaking error '{a}'.", F, F.value)
        }
    }

    function ao() {
        if (aE.line !== m.line) {
            if (!W.laxcomma) {
                if (ao.first) {
                    an("Comma warnings can be turned off with 'laxcomma'");
                    ao.first = false
                }
                an("Bad line breaking before '{a}'.", aE, m.id)
            }
        } else {
            if (!aE.comment && aE.character !== m.from && W.white) {
                aE.from += (aE.character - aE.from);
                an("Unexpected space after '{a}'.", aE, aE.value)
            }
        }
        af(",");
        T(aE, m)
    }

    function R(ax, be) {
        var F = a[ax];
        if (!F || typeof F !== "object") {
            a[ax] = F = {
                id: ax,
                lbp: be,
                value: ax
            }
        }
        return F
    }

    function aO(F) {
        return R(F, 0)
    }

    function h(ax, be) {
        var F = aO(ax);
        F.identifier = F.reserved = true;
        F.fud = be;
        return F
    }

    function a1(ax, be) {
        var F = h(ax, be);
        F.block = true;
        return F
    }

    function D(F) {
        var ax = F.id.charAt(0);
        if ((ax >= "a" && ax <= "z") || (ax >= "A" && ax <= "Z")) {
            F.identifier = F.reserved = true
        }
        return F
    }

    function aK(ax, be) {
        var F = R(ax, 150);
        D(F);
        F.nud = (typeof be === "function") ? be : function() {
            this.right = aG(150);
            this.arity = "unary";
            if (this.id === "++" || this.id === "--") {
                if (W.plusplus) {
                    an("Unexpected use of '{a}'.", this, this.id)
                } else {
                    if ((!this.right.identifier || this.right.reserved) && this.right.id !== "." && this.right.id !== "[") {
                        an("Bad operand.", this)
                    }
                }
            }
            return this
        };
        return F
    }

    function ad(ax, be) {
        var F = aO(ax);
        F.type = ax;
        F.nud = be;
        return F
    }

    function r(ax, be) {
        var F = ad(ax, be);
        F.identifier = F.reserved = true;
        return F
    }

    function X(ax, F) {
        return r(ax, function() {
            if (typeof F === "function") {
                F(this)
            }
            return this
        })
    }

    function z(be, bf, bg, ax) {
        var F = R(be, bg);
        D(F);
        F.led = function(bh) {
            if (!ax) {
                ak(aP, aE);
                T(aE, m)
            }
            if (be === "in" && bh.id === "!") {
                an("Confusing use of '{a}'.", bh, "!")
            }
            if (typeof bf === "function") {
                return bf(bh, this)
            } else {
                this.left = bh;
                this.right = aG(bg);
                return this
            }
        };
        return F
    }

    function a5(ax, be) {
        var F = R(ax, 100);
        F.led = function(bg) {
            ak(aP, aE);
            T(aE, m);
            var bf = aG(100);
            if ((bg && bg.id === "NaN") || (bf && bf.id === "NaN")) {
                an("Use the isNaN function to compare with NaN.", this)
            } else {
                if (be) {
                    be.apply(this, [bg, bf])
                }
            }
            if (bg.id === "!") {
                an("Confusing use of '{a}'.", bg, "!")
            }
            if (bf.id === "!") {
                an("Confusing use of '{a}'.", bf, "!")
            }
            this.left = bg;
            this.right = bf;
            return this
        };
        return F
    }

    function bc(F) {
        return F && ((F.type === "(number)" && +F.value === 0) || (F.type === "(string)" && F.value === "") || (F.type === "null" && !W.eqnull) || F.type === "true" || F.type === "false" || F.type === "undefined")
    }

    function aj(F, ax) {
        R(F, 20).exps = true;
        return z(F, function(bg, bf) {
            var be;
            bf.left = bg;
            if (a2[bg.value] === false && aF[bg.value]["(global)"] === true) {
                an("Read only.", bg)
            } else {
                if (bg["function"]) {
                    an("'{a}' is a function.", bg, bg.value)
                }
            }
            if (bg) {
                if (W.esnext && aC[bg.value] === "const") {
                    an("Attempting to override '{a}' which is a constant", bg, bg.value)
                }
                if (bg.id === "." || bg.id === "[") {
                    if (!bg.left || bg.left.value === "arguments") {
                        an("Bad assignment.", bf)
                    }
                    bf.right = aG(19);
                    return bf
                } else {
                    if (bg.identifier && !bg.reserved) {
                        if (aC[bg.value] === "exception") {
                            an("Do not assign to the exception parameter.", bg)
                        }
                        bf.right = aG(19);
                        return bf
                    }
                }
                if (bg === a["function"]) {
                    an("Expected an identifier in an assignment and instead saw a function invocation.", aE)
                }
            }
            aJ("Bad assignment.", bf)
        }, 20)
    }

    function aB(ax, be, bf) {
        var F = R(ax, bf);
        D(F);
        F.led = (typeof be === "function") ? be : function(bg) {
            if (W.bitwise) {
                an("Unexpected use of '{a}'.", this, this.id)
            }
            this.left = bg;
            this.right = aG(bf);
            return this
        };
        return F
    }

    function k(F) {
        R(F, 20).exps = true;
        return z(F, function(be, ax) {
            if (W.bitwise) {
                an("Unexpected use of '{a}'.", ax, ax.id)
            }
            T(aP, aE);
            T(aE, m);
            if (be) {
                if (be.id === "." || be.id === "[" || (be.identifier && !be.reserved)) {
                    aG(19);
                    return ax
                }
                if (be === a["function"]) {
                    an("Expected an identifier in an assignment, and instead saw a function invocation.", aE)
                }
                return ax
            }
            aJ("Bad assignment.", ax)
        }, 20)
    }

    function az(ax, be) {
        var F = R(ax, 150);
        F.led = function(bf) {
            if (W.plusplus) {
                an("Unexpected use of '{a}'.", this, this.id)
            } else {
                if ((!bf.identifier || bf.reserved) && bf.id !== "." && bf.id !== "[") {
                    an("Bad operand.", this)
                }
            }
            this.left = bf;
            return this
        };
        return F
    }

    function n(F) {
        if (m.identifier) {
            af();
            if (aE.reserved && !W.es5) {
                if (!F || aE.value !== "undefined") {
                    an("Expected an identifier and instead saw '{a}' (a reserved word).", aE, aE.id)
                }
            }
            return aE.value
        }
    }

    function ah(F) {
        var ax = n(F);
        if (ax) {
            return ax
        }
        if (aE.id === "function" && m.id === "(") {
            an("Missing name in function declaration.")
        } else {
            aJ("Expected an identifier and instead saw '{a}'.", m, m.value)
        }
    }

    function Z(be) {
        var ax = 0,
            F;
        if (m.id !== ";" || E) {
            return
        }
        for (;;) {
            F = aQ(ax);
            if (F.reach) {
                return
            }
            if (F.id !== "(endline)") {
                if (F.id === "function") {
                    if (!W.latedef) {
                        break
                    }
                    an("Inner functions should be listed at the top of the outer function.", F);
                    break
                }
                an("Unreachable '{a}' after '{b}'.", F, F.value, be);
                break
            }
            ax += 1
        }
    }

    function a8(bg) {
        var ax = ap,
            bf, be = aF,
            F = m;
        if (F.id === ";") {
            af(";");
            return
        }
        if (F.identifier && !F.reserved && aQ().id === ":") {
            af();
            af(":");
            aF = Object.create(be);
            w(F.value, "label");
            if (!m.labelled) {
                an("Label '{a}' on {b} statement.", m, F.value, m.value)
            }
            if (x.test(F.value + ":")) {
                an("Label '{a}' looks like a javascript url.", F, F.value)
            }
            m.label = F.value;
            F = m
        }
        if (!bg) {
            b()
        }
        bf = aG(0, true);
        if (!F.block) {
            if (!W.expr && (!bf || !bf.exps)) {
                an("Expected an assignment or function call and instead saw an expression.", aE)
            } else {
                if (W.nonew && bf.id === "(" && bf.left.id === "new") {
                    an("Do not use 'new' for side effects.")
                }
            }
            if (m.id === ",") {
                return ao()
            }
            if (m.id !== ";") {
                if (!W.asi) {
                    if (!W.lastsemic || m.id !== "}" || m.line !== aE.line) {
                        ac("Missing semicolon.", aE.line, aE.character)
                    }
                }
            } else {
                av(aE, m);
                af(";");
                T(aE, m)
            }
        }
        ap = ax;
        aF = be;
        return bf
    }

    function aL(bf) {
        var F = [],
            ax, be;
        while (!m.reach && m.id !== "(end)") {
            if (m.id === ";") {
                be = aQ();
                if (!be || be.id !== "(") {
                    an("Unnecessary semicolon.")
                }
                af(";")
            } else {
                F.push(a8(bf === m.line))
            }
        }
        return F
    }

    function a0() {
        var ax, be, F;
        for (;;) {
            if (m.id === "(string)") {
                be = aQ(0);
                if (be.id === "(endline)") {
                    ax = 1;
                    do {
                        F = aQ(ax);
                        ax = ax + 1
                    } while (F.id === "(endline)");
                    if (F.id !== ";") {
                        if (F.id !== "(string)" && F.id !== "(number)" && F.id !== "(regexp)" && F.identifier !== true && F.id !== "}") {
                            break
                        }
                        an("Missing semicolon.", m)
                    } else {
                        be = F
                    }
                } else {
                    if (be.id === "}") {
                        an("Missing semicolon.", be)
                    } else {
                        if (be.id !== ";") {
                            break
                        }
                    }
                }
                b();
                af();
                if (aA[aE.value]) {
                    an('Unnecessary directive "{a}".', aE, aE.value)
                }
                if (aE.value === "use strict") {
                    W.newcap = true;
                    W.undef = true
                }
                aA[aE.value] = true;
                if (be.id === ";") {
                    af(";")
                }
                continue
            }
            break
        }
    }

    function G(bj, ax, bf) {
        var bi, bh = aD,
            F = ap,
            be, bm = aF,
            bk, bl, bg;
        aD = bj;
        if (!bj || !W.funcscope) {
            aF = Object.create(aF)
        }
        T(aE, m);
        bk = m;
        if (m.id === "{") {
            af("{");
            bl = aE.line;
            if (m.id !== "}") {
                ap += W.indent;
                while (!bj && m.from > ap) {
                    ap += W.indent
                }
                if (bf) {
                    be = {};
                    for (bg in aA) {
                        if (aS(aA, bg)) {
                            be[bg] = aA[bg]
                        }
                    }
                    a0();
                    if (W.strict && aC["(context)"]["(global)"]) {
                        if (!be["use strict"] && !aA["use strict"]) {
                            an('Missing "use strict" statement.')
                        }
                    }
                }
                bi = aL(bl);
                if (bf) {
                    aA = be
                }
                ap -= W.indent;
                if (bl !== m.line) {
                    b()
                }
            } else {
                if (bl !== m.line) {
                    b()
                }
            }
            af("}", bk);
            ap = F
        } else {
            if (!bj) {
                aJ("Expected '{a}' and instead saw '{b}'.", m, "{", m.value)
            } else {
                if (!ax || W.curly) {
                    an("Expected '{a}' and instead saw '{b}'.", m, "{", m.value)
                }
                E = true;
                ap += W.indent;
                bi = [a8(m.line === aE.line)];
                ap -= W.indent;
                E = false
            }
        }
        aC["(verb)"] = null;
        if (!bj || !W.funcscope) {
            aF = bm
        }
        aD = bh;
        if (bj && W.noempty && (!bi || bi.length === 0)) {
            an("Empty block.")
        }
        return bi
    }

    function j(F) {
        if (aU && typeof aU[F] !== "boolean") {
            an("Unexpected /*member '{a}'.", aE, F)
        }
        if (typeof aI[F] === "number") {
            aI[F] += 1
        } else {
            aI[F] = 1
        }
    }

    function a3(bf) {
        var be = bf.value,
            ax = bf.line,
            F = aT[be];
        if (typeof F === "function") {
            F = false
        }
        if (!F) {
            F = [ax];
            aT[be] = F
        } else {
            if (F[F.length - 1] !== ax) {
                F.push(ax)
            }
        }
    }
    ad("(number)", function() {
        return this
    });
    ad("(string)", function() {
        return this
    });
    a["(identifier)"] = {
        type: "(identifier)",
        lbp: 0,
        identifier: true,
        nud: function() {
            var F = this.value,
                ax = aF[F],
                be;
            if (typeof ax === "function") {
                ax = undefined
            } else {
                if (typeof ax === "boolean") {
                    be = aC;
                    aC = B[0];
                    w(F, "var");
                    ax = aC;
                    aC = be
                }
            }
            if (aC === ax) {
                switch (aC[F]) {
                    case "unused":
                        aC[F] = "var";
                        break;
                    case "unction":
                        aC[F] = "function";
                        this["function"] = true;
                        break;
                    case "function":
                        this["function"] = true;
                        break;
                    case "label":
                        an("'{a}' is a statement label.", aE, F);
                        break
                }
            } else {
                if (aC["(global)"]) {
                    if (W.undef && typeof a2[F] !== "boolean") {
                        if (!(aZ === "typeof" || aZ === "delete") || (m && (m.value === "." || m.value === "["))) {
                            c(aC, "'{a}' is not defined.", aE, F)
                        }
                    }
                    a3(aE)
                } else {
                    switch (aC[F]) {
                        case "closure":
                        case "function":
                        case "var":
                        case "unused":
                            an("'{a}' used out of scope.", aE, F);
                            break;
                        case "label":
                            an("'{a}' is a statement label.", aE, F);
                            break;
                        case "outer":
                        case "global":
                            break;
                        default:
                            if (ax === true) {
                                aC[F] = true
                            } else {
                                if (ax === null) {
                                    an("'{a}' is not allowed.", aE, F);
                                    a3(aE)
                                } else {
                                    if (typeof ax !== "object") {
                                        if (W.undef) {
                                            if (!(aZ === "typeof" || aZ === "delete") || (m && (m.value === "." || m.value === "["))) {
                                                c(aC, "'{a}' is not defined.", aE, F)
                                            }
                                        }
                                        aC[F] = true;
                                        a3(aE)
                                    } else {
                                        switch (ax[F]) {
                                            case "function":
                                            case "unction":
                                                this["function"] = true;
                                                ax[F] = "closure";
                                                aC[F] = ax["(global)"] ? "global" : "outer";
                                                break;
                                            case "var":
                                            case "unused":
                                                ax[F] = "closure";
                                                aC[F] = ax["(global)"] ? "global" : "outer";
                                                break;
                                            case "closure":
                                            case "parameter":
                                                aC[F] = ax["(global)"] ? "global" : "outer";
                                                break;
                                            case "label":
                                                an("'{a}' is a statement label.", aE, F)
                                        }
                                    }
                                }
                            }
                    }
                }
            }
            return this
        },
        led: function() {
            aJ("Expected an operator and instead saw '{a}'.", m, m.value)
        }
    };
    ad("(regexp)", function() {
        return this
    });
    aO("(endline)");
    aO("(begin)");
    aO("(end)").reach = true;
    aO("</").reach = true;
    aO("<!");
    aO("<!--");
    aO("-->");
    aO("(error)").reach = true;
    aO("}").reach = true;
    aO(")");
    aO("]");
    aO('"').reach = true;
    aO("'").reach = true;
    aO(";");
    aO(":").reach = true;
    aO(",");
    aO("#");
    aO("@");
    r("else");
    r("case").reach = true;
    r("catch");
    r("default").reach = true;
    r("finally");
    X("arguments", function(F) {
        if (aA["use strict"] && aC["(global)"]) {
            an("Strict violation.", F)
        }
    });
    X("eval");
    X("false");
    X("Infinity");
    X("NaN");
    X("null");
    X("this", function(F) {
        if (aA["use strict"] && !W.validthis && ((aC["(statement)"] && aC["(name)"].charAt(0) > "Z") || aC["(global)"])) {
            an("Possible strict violation.", F)
        }
    });
    X("true");
    X("undefined");
    aj("=", "assign", 20);
    aj("+=", "assignadd", 20);
    aj("-=", "assignsub", 20);
    aj("*=", "assignmult", 20);
    aj("/=", "assigndiv", 20).nud = function() {
        aJ("A regular expression literal can be confused with '/='.")
    };
    aj("%=", "assignmod", 20);
    k("&=", "assignbitand", 20);
    k("|=", "assignbitor", 20);
    k("^=", "assignbitxor", 20);
    k("<<=", "assignshiftleft", 20);
    k(">>=", "assignshiftright", 20);
    k(">>>=", "assignshiftrightunsigned", 20);
    z("?", function(ax, F) {
        F.left = ax;
        F.right = aG(10);
        af(":");
        F["else"] = aG(10);
        return F
    }, 30);
    z("||", "or", 40);
    z("&&", "and", 50);
    aB("|", "bitor", 70);
    aB("^", "bitxor", 80);
    aB("&", "bitand", 90);
    a5("==", function(ax, F) {
        var be = W.eqnull && (ax.value === "null" || F.value === "null");
        if (!be && W.eqeqeq) {
            an("Expected '{a}' and instead saw '{b}'.", this, "===", "==")
        } else {
            if (bc(ax)) {
                an("Use '{a}' to compare with '{b}'.", this, "===", ax.value)
            } else {
                if (bc(F)) {
                    an("Use '{a}' to compare with '{b}'.", this, "===", F.value)
                }
            }
        }
        return this
    });
    a5("===");
    a5("!=", function(ax, F) {
        var be = W.eqnull && (ax.value === "null" || F.value === "null");
        if (!be && W.eqeqeq) {
            an("Expected '{a}' and instead saw '{b}'.", this, "!==", "!=")
        } else {
            if (bc(ax)) {
                an("Use '{a}' to compare with '{b}'.", this, "!==", ax.value)
            } else {
                if (bc(F)) {
                    an("Use '{a}' to compare with '{b}'.", this, "!==", F.value)
                }
            }
        }
        return this
    });
    a5("!==");
    a5("<");
    a5(">");
    a5("<=");
    a5(">=");
    aB("<<", "shiftleft", 120);
    aB(">>", "shiftright", 120);
    aB(">>>", "shiftrightunsigned", 120);
    z("in", "in", 120);
    z("instanceof", "instanceof", 120);
    z("+", function(be, ax) {
        var F = aG(130);
        if (be && F && be.id === "(string)" && F.id === "(string)") {
            be.value += F.value;
            be.character = F.character;
            if (!W.scripturl && x.test(be.value)) {
                an("JavaScript URL.", be)
            }
            return be
        }
        ax.left = be;
        ax.right = F;
        return ax
    }, 130);
    aK("+", "num");
    aK("+++", function() {
        an("Confusing pluses.");
        this.right = aG(150);
        this.arity = "unary";
        return this
    });
    z("+++", function(F) {
        an("Confusing pluses.");
        this.left = F;
        this.right = aG(130);
        return this
    }, 130);
    z("-", "sub", 130);
    aK("-", "neg");
    aK("---", function() {
        an("Confusing minuses.");
        this.right = aG(150);
        this.arity = "unary";
        return this
    });
    z("---", function(F) {
        an("Confusing minuses.");
        this.left = F;
        this.right = aG(130);
        return this
    }, 130);
    z("*", "mult", 140);
    z("/", "div", 140);
    z("%", "mod", 140);
    az("++", "postinc");
    aK("++", "preinc");
    a["++"].exps = true;
    az("--", "postdec");
    aK("--", "predec");
    a["--"].exps = true;
    aK("delete", function() {
        var F = aG(0);
        if (!F || (F.id !== "." && F.id !== "[")) {
            an("Variables should not be deleted.")
        }
        this.first = F;
        return this
    }).exps = true;
    aK("~", function() {
        if (W.bitwise) {
            an("Unexpected '{a}'.", this, "~")
        }
        aG(150);
        return this
    });
    aK("!", function() {
        this.right = aG(150);
        this.arity = "unary";
        if (u[this.right.id] === true) {
            an("Confusing use of '{a}'.", this, "!")
        }
        return this
    });
    aK("typeof", "typeof");
    aK("new", function() {
        var ax = aG(155),
            F;
        if (ax && ax.id !== "function") {
            if (ax.identifier) {
                ax["new"] = true;
                switch (ax.value) {
                    case "Number":
                    case "String":
                    case "Boolean":
                    case "Math":
                    case "JSON":
                        an("Do not use {a} as a constructor.", aE, ax.value);
                        break;
                    case "Function":
                        if (!W.evil) {
                            an("The Function constructor is eval.")
                        }
                        break;
                    case "Date":
                    case "RegExp":
                        break;
                    default:
                        if (ax.id !== "function") {
                            F = ax.value.substr(0, 1);
                            if (W.newcap && (F < "A" || F > "Z")) {
                                an("A constructor name should start with an uppercase letter.", aE)
                            }
                        }
                }
            } else {
                if (ax.id !== "." && ax.id !== "[" && ax.id !== "(") {
                    an("Bad constructor.", aE)
                }
            }
        } else {
            if (!W.supernew) {
                an("Weird construction. Delete 'new'.", this)
            }
        }
        av(aE, m);
        if (m.id !== "(" && !W.supernew) {
            an("Missing '()' invoking a constructor.")
        }
        this.first = ax;
        return this
    });
    a["new"].exps = true;
    aK("void").exps = true;
    z(".", function(be, ax) {
        av(aP, aE);
        aM();
        var F = ah();
        if (typeof F === "string") {
            j(F)
        }
        ax.left = be;
        ax.right = F;
        if (be && be.value === "arguments" && (F === "callee" || F === "caller")) {
            if (W.noarg) {
                an("Avoid arguments.{a}.", be, F)
            } else {
                if (aA["use strict"]) {
                    aJ("Strict violation.")
                }
            }
        } else {
            if (!W.evil && be && be.value === "document" && (F === "write" || F === "writeln")) {
                an("document.write can be a form of eval.", be)
            }
        }
        if (!W.evil && (F === "eval" || F === "execScript")) {
            an("eval is evil.")
        }
        return ax
    }, 160, true);
    z("(", function(be, F) {
        if (aP.id !== "}" && aP.id !== ")") {
            aM(aP, aE)
        }
        U();
        if (W.immed && !be.immed && be.id === "function") {
            an("Wrap an immediate function invocation in parentheses to assist the reader in understanding that the expression is the result of a function, and not the function itself.")
        }
        var bf = 0,
            ax = [];
        if (be) {
            if (be.type === "(identifier)") {
                if (be.value.match(/^[A-Z]([A-Z0-9_$]*[a-z][A-Za-z0-9_$]*)?$/)) {
                    if (be.value !== "Number" && be.value !== "String" && be.value !== "Boolean" && be.value !== "Date") {
                        if (be.value === "Math") {
                            an("Math is not a function.", be)
                        } else {
                            if (W.newcap) {
                                an("Missing 'new' prefix when invoking a constructor.", be)
                            }
                        }
                    }
                }
            }
        }
        if (m.id !== ")") {
            for (;;) {
                ax[ax.length] = aG(10);
                bf += 1;
                if (m.id !== ",") {
                    break
                }
                ao()
            }
        }
        af(")");
        U(aP, aE);
        if (typeof be === "object") {
            if (be.value === "parseInt" && bf === 1) {
                an("Missing radix parameter.", be)
            }
            if (!W.evil) {
                if (be.value === "eval" || be.value === "Function" || be.value === "execScript") {
                    an("eval is evil.", be)
                } else {
                    if (ax[0] && ax[0].id === "(string)" && (be.value === "setTimeout" || be.value === "setInterval")) {
                        an("Implied eval is evil. Pass a function instead of a string.", be)
                    }
                }
            }
            if (!be.identifier && be.id !== "." && be.id !== "[" && be.id !== "(" && be.id !== "&&" && be.id !== "||" && be.id !== "?") {
                an("Bad invocation.", be)
            }
        }
        F.left = be;
        return F
    }, 155, true).exps = true;
    aK("(", function() {
        U();
        if (m.id === "function") {
            m.immed = true
        }
        var F = aG(0);
        af(")", this);
        U(aP, aE);
        if (W.immed && F.id === "function") {
            if (m.id === "(" || (m.id === "." && (aQ().value === "call" || aQ().value === "apply"))) {
                an("Move the invocation into the parens that contain the function.", m)
            } else {
                an("Do not wrap function literals in parens unless they are to be immediately invoked.", this)
            }
        }
        return F
    });
    z("[", function(bf, ax) {
        aM(aP, aE);
        U();
        var be = aG(0),
            F;
        if (be && be.type === "(string)") {
            if (!W.evil && (be.value === "eval" || be.value === "execScript")) {
                an("eval is evil.", ax)
            }
            j(be.value);
            if (!W.sub && O.test(be.value)) {
                F = a[be.value];
                if (!F || !F.reserved) {
                    an("['{a}'] is better written in dot notation.", be, be.value)
                }
            }
        }
        af("]", ax);
        U(aP, aE);
        ax.left = bf;
        ax.right = be;
        return ax
    }, 160, true);
    aK("[", function() {
        var F = aE.line !== m.line;
        this.first = [];
        if (F) {
            ap += W.indent;
            if (m.from === ap + W.indent) {
                ap += W.indent
            }
        }
        while (m.id !== "(end)") {
            while (m.id === ",") {
                an("Extra comma.");
                af(",")
            }
            if (m.id === "]") {
                break
            }
            if (F && aE.line !== m.line) {
                b()
            }
            this.first.push(aG(10));
            if (m.id === ",") {
                ao();
                if (m.id === "]" && !W.es5) {
                    an("Extra comma.", aE);
                    break
                }
            } else {
                break
            }
        }
        if (F) {
            ap -= W.indent;
            b()
        }
        af("]", this);
        return this
    }, 160);

    function g() {
        var F = n(true);
        if (!F) {
            if (m.id === "(string)") {
                F = m.value;
                af()
            } else {
                if (m.id === "(number)") {
                    F = m.value.toString();
                    af()
                }
            }
        }
        return F
    }

    function Q() {
        var ax, F = m,
            be = [];
        af("(");
        U();
        if (m.id === ")") {
            af(")");
            return
        }
        for (;;) {
            ax = ah(true);
            be.push(ax);
            w(ax, "parameter");
            if (m.id === ",") {
                ao()
            } else {
                af(")", F);
                U(aP, aE);
                return be
            }
        }
    }

    function L(be, bf) {
        var bg, ax = W,
            F = aF;
        W = Object.create(W);
        aF = Object.create(aF);
        aC = {
            "(name)": be || '"' + aZ + '"',
            "(line)": m.line,
            "(character)": m.character,
            "(context)": aC,
            "(breakage)": 0,
            "(loopage)": 0,
            "(scope)": aF,
            "(statement)": bf
        };
        bg = aC;
        aE.funct = aC;
        B.push(aC);
        if (be) {
            w(be, "function")
        }
        aC["(params)"] = Q();
        G(false, false, true);
        aF = F;
        W = ax;
        aC["(last)"] = aE.line;
        aC["(lastcharacter)"] = aE.character;
        aC = aC["(context)"];
        return bg
    }(function(F) {
        F.nud = function() {
            var bm, bj, bi, bh, be, bn;
            var bl = {};

            function bf(bo, bp) {
                if (bl[bo] && aS(bl, bo)) {
                    an("Duplicate member '{a}'.", m, bi)
                } else {
                    bl[bo] = {}
                }
                bl[bo].basic = true;
                bl[bo].basicToken = bp
            }

            function bg(bo, bp) {
                if (bl[bo] && aS(bl, bo)) {
                    if (bl[bo].basic || bl[bo].setter) {
                        an("Duplicate member '{a}'.", m, bi)
                    }
                } else {
                    bl[bo] = {}
                }
                bl[bo].setter = true;
                bl[bo].setterToken = bp
            }

            function bk(bo) {
                if (bl[bo] && aS(bl, bo)) {
                    if (bl[bo].basic || bl[bo].getter) {
                        an("Duplicate member '{a}'.", m, bi)
                    }
                } else {
                    bl[bo] = {}
                }
                bl[bo].getter = true;
                bl[bo].getterToken = aE
            }
            bm = aE.line !== m.line;
            if (bm) {
                ap += W.indent;
                if (m.from === ap + W.indent) {
                    ap += W.indent
                }
            }
            for (;;) {
                if (m.id === "}") {
                    break
                }
                if (bm) {
                    b()
                }
                if (m.value === "get" && aQ().id !== ":") {
                    af("get");
                    if (!W.es5) {
                        aJ("get/set are ES5 features.")
                    }
                    bi = g();
                    if (!bi) {
                        aJ("Missing property name.")
                    }
                    bk(bi);
                    bn = m;
                    av(aE, m);
                    bj = L();
                    be = bj["(params)"];
                    if (be) {
                        an("Unexpected parameter '{a}' in get {b} function.", bn, be[0], bi)
                    }
                    av(aE, m)
                } else {
                    if (m.value === "set" && aQ().id !== ":") {
                        af("set");
                        if (!W.es5) {
                            aJ("get/set are ES5 features.")
                        }
                        bi = g();
                        if (!bi) {
                            aJ("Missing property name.")
                        }
                        bg(bi, m);
                        bn = m;
                        av(aE, m);
                        bj = L();
                        be = bj["(params)"];
                        if (!be || be.length !== 1) {
                            an("Expected a single parameter in set {a} function.", bn, bi)
                        }
                    } else {
                        bi = g();
                        bf(bi, m);
                        if (typeof bi !== "string") {
                            break
                        }
                        af(":");
                        T(aE, m);
                        aG(10)
                    }
                }
                j(bi);
                if (m.id === ",") {
                    ao();
                    if (m.id === ",") {
                        an("Extra comma.", aE)
                    } else {
                        if (m.id === "}" && !W.es5) {
                            an("Extra comma.", aE)
                        }
                    }
                } else {
                    break
                }
            }
            if (bm) {
                ap -= W.indent;
                b()
            }
            af("}", this);
            if (W.es5) {
                for (var ax in bl) {
                    if (aS(bl, ax) && bl[ax].setter && !bl[ax].getter) {
                        an("Setter is defined without getter.", bl[ax].setterToken)
                    }
                }
            }
            return this
        };
        F.fud = function() {
            aJ("Expected to see a statement and instead saw a block.", aE)
        }
    }(aO("{")));
    P = function() {
        var F = h("const", function(bf) {
            var bg, ax, be;
            this.first = [];
            for (;;) {
                T(aE, m);
                bg = ah();
                if (aC[bg] === "const") {
                    an("const '" + bg + "' has already been declared")
                }
                if (aC["(global)"] && a2[bg] === false) {
                    an("Redefinition of '{a}'.", aE, bg)
                }
                w(bg, "const");
                if (bf) {
                    break
                }
                ax = aE;
                this.first.push(aE);
                if (m.id !== "=") {
                    an("const '{a}' is initialized to 'undefined'.", aE, bg)
                }
                if (m.id === "=") {
                    T(aE, m);
                    af("=");
                    T(aE, m);
                    if (m.id === "undefined") {
                        an("It is not necessary to initialize '{a}' to 'undefined'.", aE, bg)
                    }
                    if (aQ(0).id === "=" && m.identifier) {
                        aJ("Constant {a} was not declared correctly.", m, m.value)
                    }
                    be = aG(0);
                    ax.first = be
                }
                if (m.id !== ",") {
                    break
                }
                ao()
            }
            return this
        });
        F.exps = true
    };
    var aR = h("var", function(be) {
        var bf, F, ax;
        if (aC["(onevar)"] && W.onevar) {
            an("Too many var statements.")
        } else {
            if (!aC["(global)"]) {
                aC["(onevar)"] = true
            }
        }
        this.first = [];
        for (;;) {
            T(aE, m);
            bf = ah();
            if (W.esnext && aC[bf] === "const") {
                an("const '" + bf + "' has already been declared")
            }
            if (aC["(global)"] && a2[bf] === false) {
                an("Redefinition of '{a}'.", aE, bf)
            }
            w(bf, "unused");
            if (be) {
                break
            }
            F = aE;
            this.first.push(aE);
            if (m.id === "=") {
                T(aE, m);
                af("=");
                T(aE, m);
                if (m.id === "undefined") {
                    an("It is not necessary to initialize '{a}' to 'undefined'.", aE, bf)
                }
                if (aQ(0).id === "=" && m.identifier) {
                    aJ("Variable {a} was not declared correctly.", m, m.value)
                }
                ax = aG(0);
                F.first = ax
            }
            if (m.id !== ",") {
                break
            }
            ao()
        }
        return this
    });
    aR.exps = true;
    a1("function", function() {
        if (aD) {
            an("Function declarations should not be placed in blocks. Use a function expression or move the statement to the top of the outer function.", aE)
        }
        var F = ah();
        if (W.esnext && aC[F] === "const") {
            an("const '" + F + "' has already been declared")
        }
        av(aE, m);
        w(F, "unction");
        L(F, true);
        if (m.id === "(" && m.line === aE.line) {
            aJ("Function declarations are not invocable. Wrap the whole function invocation in parens.")
        }
        return this
    });
    aK("function", function() {
        var F = n();
        if (F) {
            av(aE, m)
        } else {
            T(aE, m)
        }
        L(F);
        if (!W.loopfunc && aC["(loopage)"]) {
            an("Don't make functions within a loop.")
        }
        return this
    });
    a1("if", function() {
        var F = m;
        af("(");
        T(this, F);
        U();
        aG(20);
        if (m.id === "=") {
            if (!W.boss) {
                an("Expected a conditional expression and instead saw an assignment.")
            }
            af("=");
            aG(20)
        }
        af(")", F);
        U(aP, aE);
        G(true, true);
        if (m.id === "else") {
            T(aE, m);
            af("else");
            if (m.id === "if" || m.id === "switch") {
                a8(true)
            } else {
                G(true, true)
            }
        }
        return this
    });
    a1("try", function() {
        var F, be, ax;
        G(false);
        if (m.id === "catch") {
            af("catch");
            T(aE, m);
            af("(");
            ax = aF;
            aF = Object.create(ax);
            be = m.value;
            if (m.type !== "(identifier)") {
                an("Expected an identifier and instead saw '{a}'.", m, be)
            } else {
                w(be, "exception")
            }
            af();
            af(")");
            G(false);
            F = true;
            aF = ax
        }
        if (m.id === "finally") {
            af("finally");
            G(false);
            return
        } else {
            if (!F) {
                aJ("Expected '{a}' and instead saw '{b}'.", m, "catch", m.value)
            }
        }
        return this
    });
    a1("while", function() {
        var F = m;
        aC["(breakage)"] += 1;
        aC["(loopage)"] += 1;
        af("(");
        T(this, F);
        U();
        aG(20);
        if (m.id === "=") {
            if (!W.boss) {
                an("Expected a conditional expression and instead saw an assignment.")
            }
            af("=");
            aG(20)
        }
        af(")", F);
        U(aP, aE);
        G(true, true);
        aC["(breakage)"] -= 1;
        aC["(loopage)"] -= 1;
        return this
    }).labelled = true;
    a1("with", function() {
        var F = m;
        if (aA["use strict"]) {
            aJ("'with' is not allowed in strict mode.", aE)
        } else {
            if (!W.withstmt) {
                an("Don't use 'with'.", aE)
            }
        }
        af("(");
        T(this, F);
        U();
        aG(0);
        af(")", F);
        U(aP, aE);
        G(true, true);
        return this
    });
    a1("switch", function() {
        var F = m,
            ax = false;
        aC["(breakage)"] += 1;
        af("(");
        T(this, F);
        U();
        this.condition = aG(20);
        af(")", F);
        U(aP, aE);
        T(aE, m);
        F = m;
        af("{");
        T(aE, m);
        ap += W.indent;
        this.cases = [];
        for (;;) {
            switch (m.id) {
                case "case":
                    switch (aC["(verb)"]) {
                        case "break":
                        case "case":
                        case "continue":
                        case "return":
                        case "switch":
                        case "throw":
                            break;
                        default:
                            if (!aW.test(a7[m.line - 2])) {
                                an("Expected a 'break' statement before 'case'.", aE)
                            }
                    }
                    b(-W.indent);
                    af("case");
                    this.cases.push(aG(20));
                    ax = true;
                    af(":");
                    aC["(verb)"] = "case";
                    break;
                case "default":
                    switch (aC["(verb)"]) {
                        case "break":
                        case "continue":
                        case "return":
                        case "throw":
                            break;
                        default:
                            if (!aW.test(a7[m.line - 2])) {
                                an("Expected a 'break' statement before 'default'.", aE)
                            }
                    }
                    b(-W.indent);
                    af("default");
                    ax = true;
                    af(":");
                    break;
                case "}":
                    ap -= W.indent;
                    b();
                    af("}", F);
                    if (this.cases.length === 1 || this.condition.id === "true" || this.condition.id === "false") {
                        if (!W.onecase) {
                            an("This 'switch' should be an 'if'.", this)
                        }
                    }
                    aC["(breakage)"] -= 1;
                    aC["(verb)"] = undefined;
                    return;
                case "(end)":
                    aJ("Missing '{a}'.", m, "}");
                    return;
                default:
                    if (ax) {
                        switch (aE.id) {
                            case ",":
                                aJ("Each value should have its own case label.");
                                return;
                            case ":":
                                ax = false;
                                aL();
                                break;
                            default:
                                aJ("Missing ':' on a case clause.", aE);
                                return
                        }
                    } else {
                        if (aE.id === ":") {
                            af(":");
                            aJ("Unexpected '{a}'.", aE, ":");
                            aL()
                        } else {
                            aJ("Expected '{a}' and instead saw '{b}'.", m, "case", m.value);
                            return
                        }
                    }
            }
        }
    }).labelled = true;
    h("debugger", function() {
        if (!W.debug) {
            an("All 'debugger' statements should be removed.")
        }
        return this
    }).exps = true;
    (function() {
        var F = h("do", function() {
            aC["(breakage)"] += 1;
            aC["(loopage)"] += 1;
            this.first = G(true);
            af("while");
            var ax = m;
            T(aE, ax);
            af("(");
            U();
            aG(20);
            if (m.id === "=") {
                if (!W.boss) {
                    an("Expected a conditional expression and instead saw an assignment.")
                }
                af("=");
                aG(20)
            }
            af(")", ax);
            U(aP, aE);
            aC["(breakage)"] -= 1;
            aC["(loopage)"] -= 1;
            return this
        });
        F.labelled = true;
        F.exps = true
    }());
    a1("for", function() {
        var ax, F = m;
        aC["(breakage)"] += 1;
        aC["(loopage)"] += 1;
        af("(");
        T(this, F);
        U();
        if (aQ(m.id === "var" ? 1 : 0).id === "in") {
            if (m.id === "var") {
                af("var");
                aR.fud.call(aR, true)
            } else {
                switch (aC[m.value]) {
                    case "unused":
                        aC[m.value] = "var";
                        break;
                    case "var":
                        break;
                    default:
                        an("Bad for in variable '{a}'.", m, m.value)
                }
                af()
            }
            af("in");
            aG(20);
            af(")", F);
            ax = G(true, true);
            if (W.forin && ax && (ax.length > 1 || typeof ax[0] !== "object" || ax[0].value !== "if")) {
                an("The body of a for in should be wrapped in an if statement to filter unwanted properties from the prototype.", this)
            }
            aC["(breakage)"] -= 1;
            aC["(loopage)"] -= 1;
            return this
        } else {
            if (m.id !== ";") {
                if (m.id === "var") {
                    af("var");
                    aR.fud.call(aR)
                } else {
                    for (;;) {
                        aG(0, "for");
                        if (m.id !== ",") {
                            break
                        }
                        ao()
                    }
                }
            }
            ba(aE);
            af(";");
            if (m.id !== ";") {
                aG(20);
                if (m.id === "=") {
                    if (!W.boss) {
                        an("Expected a conditional expression and instead saw an assignment.")
                    }
                    af("=");
                    aG(20)
                }
            }
            ba(aE);
            af(";");
            if (m.id === ";") {
                aJ("Expected '{a}' and instead saw '{b}'.", m, ")", ";")
            }
            if (m.id !== ")") {
                for (;;) {
                    aG(0, "for");
                    if (m.id !== ",") {
                        break
                    }
                    ao()
                }
            }
            af(")", F);
            U(aP, aE);
            G(true, true);
            aC["(breakage)"] -= 1;
            aC["(loopage)"] -= 1;
            return this
        }
    }).labelled = true;
    h("break", function() {
        var F = m.value;
        if (aC["(breakage)"] === 0) {
            an("Unexpected '{a}'.", m, this.value)
        }
        if (!W.asi) {
            ba(this)
        }
        if (m.id !== ";") {
            if (aE.line === m.line) {
                if (aC[F] !== "label") {
                    an("'{a}' is not a statement label.", m, F)
                } else {
                    if (aF[F] !== aC) {
                        an("'{a}' is out of scope.", m, F)
                    }
                }
                this.first = m;
                af()
            }
        }
        Z("break");
        return this
    }).exps = true;
    h("continue", function() {
        var F = m.value;
        if (aC["(breakage)"] === 0) {
            an("Unexpected '{a}'.", m, this.value)
        }
        if (!W.asi) {
            ba(this)
        }
        if (m.id !== ";") {
            if (aE.line === m.line) {
                if (aC[F] !== "label") {
                    an("'{a}' is not a statement label.", m, F)
                } else {
                    if (aF[F] !== aC) {
                        an("'{a}' is out of scope.", m, F)
                    }
                }
                this.first = m;
                af()
            }
        } else {
            if (!aC["(loopage)"]) {
                an("Unexpected '{a}'.", m, this.value)
            }
        }
        Z("continue");
        return this
    }).exps = true;
    h("return", function() {
        if (this.line === m.line) {
            if (m.id === "(regexp)") {
                an("Wrap the /regexp/ literal in parens to disambiguate the slash operator.")
            }
            if (m.id !== ";" && !m.reach) {
                T(aE, m);
                if (aQ().value === "=" && !W.boss) {
                    ac("Did you mean to return a conditional instead of an assignment?", aE.line, aE.character + 1)
                }
                this.first = aG(0)
            }
        } else {
            if (!W.asi) {
                ba(this)
            }
        }
        Z("return");
        return this
    }).exps = true;
    h("throw", function() {
        ba(this);
        T(aE, m);
        this.first = aG(20);
        Z("throw");
        return this
    }).exps = true;
    r("class");
    r("const");
    r("enum");
    r("export");
    r("extends");
    r("import");
    r("super");
    r("let");
    r("yield");
    r("implements");
    r("interface");
    r("package");
    r("private");
    r("protected");
    r("public");
    r("static");

    function q() {
        function F() {
            var bf = {},
                be = m;
            af("{");
            if (m.id !== "}") {
                for (;;) {
                    if (m.id === "(end)") {
                        aJ("Missing '}' to match '{' from line {a}.", m, be.line)
                    } else {
                        if (m.id === "}") {
                            an("Unexpected comma.", aE);
                            break
                        } else {
                            if (m.id === ",") {
                                aJ("Unexpected comma.", m)
                            } else {
                                if (m.id !== "(string)") {
                                    an("Expected a string and instead saw {a}.", m, m.value)
                                }
                            }
                        }
                    }
                    if (bf[m.value] === true) {
                        an("Duplicate key '{a}'.", m, m.value)
                    } else {
                        if ((m.value === "__proto__" && !W.proto) || (m.value === "__iterator__" && !W.iterator)) {
                            an("The '{a}' key may produce unexpected results.", m, m.value)
                        } else {
                            bf[m.value] = true
                        }
                    }
                    af();
                    af(":");
                    q();
                    if (m.id !== ",") {
                        break
                    }
                    af(",")
                }
            }
            af("}")
        }

        function ax() {
            var be = m;
            af("[");
            if (m.id !== "]") {
                for (;;) {
                    if (m.id === "(end)") {
                        aJ("Missing ']' to match '[' from line {a}.", m, be.line)
                    } else {
                        if (m.id === "]") {
                            an("Unexpected comma.", aE);
                            break
                        } else {
                            if (m.id === ",") {
                                aJ("Unexpected comma.", m)
                            }
                        }
                    }
                    q();
                    if (m.id !== ",") {
                        break
                    }
                    af(",")
                }
            }
            af("]")
        }
        switch (m.id) {
            case "{":
                F();
                break;
            case "[":
                ax();
                break;
            case "true":
            case "false":
            case "null":
            case "(number)":
            case "(string)":
                af();
                break;
            case "-":
                af("-");
                if (aE.character !== m.from) {
                    an("Unexpected space after '-'.", aE)
                }
                av(aE, m);
                af("(number)");
                break;
            default:
                aJ("Expected a JSON value.", m)
        }
    }
    var J = function(bp, ax, bi) {
        var bm, bg, bf, bn, bo, be = {};
        JSHINT.errors = [];
        JSHINT.undefs = [];
        a2 = Object.create(a6);
        bb(a2, bi || {});
        if (ax) {
            bm = ax.predef;
            if (bm) {
                if (Array.isArray(bm)) {
                    for (bg = 0; bg < bm.length; bg += 1) {
                        a2[bm[bg]] = true
                    }
                } else {
                    if (typeof bm === "object") {
                        bf = Object.keys(bm);
                        for (bg = 0; bg < bf.length; bg += 1) {
                            a2[bf[bg]] = !!bm[bf[bg]]
                        }
                    }
                }
            }
            bo = Object.keys(ax);
            for (bn = 0; bn < bo.length; bn++) {
                be[bo[bn]] = ax[bo[bn]]
            }
        }
        W = be;
        W.indent = W.indent || 4;
        W.maxerr = W.maxerr || 50;
        o = "";
        for (bg = 0; bg < W.indent; bg += 1) {
            o += " "
        }
        ap = 1;
        C = Object.create(a2);
        aF = C;
        aC = {
            "(global)": true,
            "(name)": "(global)",
            "(scope)": aF,
            "(breakage)": 0,
            "(loopage)": 0
        };
        B = [aC];
        V = [];
        ay = null;
        aI = {};
        aU = null;
        aT = {};
        aD = false;
        N = [];
        l = false;
        A = 0;
        am.init(bp);
        s = true;
        aA = {};
        aP = aE = m = a["(begin)"];
        for (var F in ax) {
            if (aS(ax, F)) {
                a4(F, aE)
            }
        }
        ai();
        bb(a2, bi || {});
        ao.first = true;
        f = undefined;
        try {
            af();
            switch (m.id) {
                case "{":
                case "[":
                    W.laxbreak = true;
                    l = true;
                    q();
                    break;
                default:
                    a0();
                    if (aA["use strict"] && !W.globalstrict) {
                        an('Use the function form of "use strict".', aP)
                    }
                    aL()
            }
            af((m && m.value !== ".") ? "(end)" : undefined);
            var bh = function(bq, br) {
                do {
                    if (typeof br[bq] === "string") {
                        if (br[bq] === "unused") {
                            br[bq] = "var"
                        } else {
                            if (br[bq] === "unction") {
                                br[bq] = "closure"
                            }
                        }
                        return true
                    }
                    br = br["(context)"]
                } while (br);
                return false
            };
            var bl = function(br, bq) {
                if (!aT[br]) {
                    return
                }
                var bt = [];
                for (var bs = 0; bs < aT[br].length; bs += 1) {
                    if (aT[br][bs] !== bq) {
                        bt.push(aT[br][bs])
                    }
                }
                if (bt.length === 0) {
                    delete aT[br]
                } else {
                    aT[br] = bt
                }
            };
            for (bg = 0; bg < JSHINT.undefs.length; bg += 1) {
                bf = JSHINT.undefs[bg].slice(0);
                if (bh(bf[2].value, bf[0])) {
                    bl(bf[2].value, bf[2].line)
                } else {
                    an.apply(an, bf.slice(1))
                }
            }
        } catch (bj) {
            if (bj) {
                var bk = m || {};
                JSHINT.errors.push({
                    raw: bj.raw,
                    reason: bj.message,
                    line: bj.line || bk.line,
                    character: bj.character || bk.from
                }, null)
            }
        }
        return JSHINT.errors.length === 0
    };
    J.data = function() {
        var bh = {
                functions: [],
                options: W
            },
            bg, bi, bm = [],
            bk, bj, be, bf = [],
            F, ax = [],
            bl;
        if (J.errors.length) {
            bh.errors = J.errors
        }
        if (l) {
            bh.json = true
        }
        for (F in aT) {
            if (aS(aT, F)) {
                bm.push({
                    name: F,
                    line: aT[F]
                })
            }
        }
        if (bm.length > 0) {
            bh.implieds = bm
        }
        if (V.length > 0) {
            bh.urls = V
        }
        bi = Object.keys(aF);
        if (bi.length > 0) {
            bh.globals = bi
        }
        for (bj = 1; bj < B.length; bj += 1) {
            bk = B[bj];
            bg = {};
            for (be = 0; be < aN.length; be += 1) {
                bg[aN[be]] = []
            }
            for (F in bk) {
                if (aS(bk, F) && F.charAt(0) !== "(") {
                    bl = bk[F];
                    if (bl === "unction") {
                        bl = "unused"
                    }
                    if (Array.isArray(bg[bl])) {
                        bg[bl].push(F);
                        if (bl === "unused") {
                            ax.push({
                                name: F,
                                line: bk["(line)"],
                                "function": bk["(name)"]
                            })
                        }
                    }
                }
            }
            for (be = 0; be < aN.length; be += 1) {
                if (bg[aN[be]].length === 0) {
                    delete bg[aN[be]]
                }
            }
            bg.name = bk["(name)"];
            bg.param = bk["(params)"];
            bg.line = bk["(line)"];
            bg.character = bk["(character)"];
            bg.last = bk["(last)"];
            bg.lastcharacter = bk["(lastcharacter)"];
            bh.functions.push(bg)
        }
        if (ax.length > 0) {
            bh.unused = ax
        }
        bf = [];
        for (F in aI) {
            if (typeof aI[F] === "number") {
                bh.member = aI;
                break
            }
        }
        return bh
    };
    J.report = function(bk) {
        var bi = J.data();
        var bp = [],
            bo, bn, bh, bm, bj, bg, bf, be = "",
            ax, F = [],
            bq;

        function bl(bu, bv) {
            var br, bt, bs;
            if (bv) {
                F.push("<div><i>" + bu + "</i> ");
                bv = bv.sort();
                for (bt = 0; bt < bv.length; bt += 1) {
                    if (bv[bt] !== bs) {
                        bs = bv[bt];
                        F.push((br ? ", " : "") + bs);
                        br = true
                    }
                }
                F.push("</div>")
            }
        }
        if (bi.errors || bi.implieds || bi.unused) {
            bh = true;
            F.push("<div id=errors><i>Error:</i>");
            if (bi.errors) {
                for (bj = 0; bj < bi.errors.length; bj += 1) {
                    bo = bi.errors[bj];
                    if (bo) {
                        bn = bo.evidence || "";
                        F.push("<p>Problem" + (isFinite(bo.line) ? " at line " + bo.line + " character " + bo.character : "") + ": " + bo.reason.entityify() + "</p><p class=evidence>" + (bn && (bn.length > 80 ? bn.slice(0, 77) + "..." : bn).entityify()) + "</p>")
                    }
                }
            }
            if (bi.implieds) {
                bq = [];
                for (bj = 0; bj < bi.implieds.length; bj += 1) {
                    bq[bj] = "<code>" + bi.implieds[bj].name + "</code>&nbsp;<i>" + bi.implieds[bj].line + "</i>"
                }
                F.push("<p><i>Implied global:</i> " + bq.join(", ") + "</p>")
            }
            if (bi.unused) {
                bq = [];
                for (bj = 0; bj < bi.unused.length; bj += 1) {
                    bq[bj] = "<code><u>" + bi.unused[bj].name + "</u></code>&nbsp;<i>" + bi.unused[bj].line + "</i> <code>" + bi.unused[bj]["function"] + "</code>"
                }
                F.push("<p><i>Unused variable:</i> " + bq.join(", ") + "</p>")
            }
            if (bi.json) {
                F.push("<p>JSON: bad.</p>")
            }
            F.push("</div>")
        }
        if (!bk) {
            F.push("<br><div id=functions>");
            if (bi.urls) {
                bl("URLs<br>", bi.urls, "<br>")
            }
            if (bi.json && !bh) {
                F.push("<p>JSON: good.</p>")
            } else {
                if (bi.globals) {
                    F.push("<div><i>Global</i> " + bi.globals.sort().join(", ") + "</div>")
                } else {
                    F.push("<div><i>No new global variables introduced.</i></div>")
                }
            }
            for (bj = 0; bj < bi.functions.length; bj += 1) {
                bm = bi.functions[bj];
                F.push("<br><div class=function><i>" + bm.line + "-" + bm.last + "</i> " + (bm.name || "") + "(" + (bm.param ? bm.param.join(", ") : "") + ")</div>");
                bl("<big><b>Unused</b></big>", bm.unused);
                bl("Closure", bm.closure);
                bl("Variable", bm["var"]);
                bl("Exception", bm.exception);
                bl("Outer", bm.outer);
                bl("Global", bm.global);
                bl("Label", bm.label)
            }
            if (bi.member) {
                bp = Object.keys(bi.member);
                if (bp.length) {
                    bp = bp.sort();
                    be = "<br><pre id=members>/*members ";
                    bf = 10;
                    for (bj = 0; bj < bp.length; bj += 1) {
                        bg = bp[bj];
                        ax = bg.name();
                        if (bf + ax.length > 72) {
                            F.push(be + "<br>");
                            be = "    ";
                            bf = 1
                        }
                        bf += ax.length + 2;
                        if (bi.member[bg] === 1) {
                            ax = "<i>" + ax + "</i>"
                        }
                        if (bj < bp.length - 1) {
                            ax += ", "
                        }
                        be += ax
                    }
                    F.push(be + "<br>*/</pre>")
                }
                F.push("</div>")
            }
        }
        return F.join("")
    };
    J.jshint = J;
    return J
}());
if (typeof exports === "object" && exports) {
    exports.JSHINT = JSHINT
}
var lessons = [{
    message: "Hi, I'm Green Fox! (click on my words to see what's next)",
    code: "c.fillRect(20, 20, 50, 75);\n",
    lessonSection: "Getting Started",
    tutorImage: 1,
    hiddenCode: "var c = document.getElementById('pane').getContext('2d');\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n"
}, {
    message: "You're going to learn some programming! (click again)"
}, {
    message: "Below me, on the left, is Javascript code, on the right, what it does."
}, {
    message: "You can use fillRect() to draw a box. See the number 50?  Can you change that to 150?",
    code: "c.fillRect(20, 20, 50, 75);\n",
    youGotItCheck: "150",
}, {
    message: "That made the box wider. What do you think the other numbers do? Try changing them.",
    lessonSection: "Parameters and Drawing",
}, {
    message: "Did you figure it out?  The numbers are how far from the left side to draw the box, how far from the top, how wide to draw the box, and how tall. So, it's <span class=tutor-code>c.fillRect(<i>left, top, width, height</i>);</span>",
    tutorImage: 4,
}, {
    message: "Try changing all the numbers!  Play with it!",
    tutorImage: 5,
}, {
    message: "Two boxes. Can you change the numbers to make them bigger?",
    code: "c.fillRect(20, 20, 50, 75);\nc.fillRect(100, 100, 60, 80);\n",
    tutorImage: 3,
}, {
    message: "Can you change the numbers to move them around?",
}, {
    message: "How about something a little more challenging.  Can you change the numbers so that one box covers up the other?",
    tutorImage: 6,
}, {
    message: "Let's work with square boxes.  Square boxes have the same width and height.",
    code: "c.fillRect(30, 20, 80, 80);\n",
    tutorImage: 1,
}, {
    message: "Hey, look, this does the same thing!",
    code: "var size = 80;\nc.fillRect(30, 20, size, size);\n",
    lessonSection: "Variables",
    tutorImage: 2,
}, {
    message: "Why does that do the same thing?  Any ideas?",
    tutorImage: 4,
}, {
    message: "var means variable. What we did is create a variable, called it <span class=tutor-code>size</span>, set it equal to 80, and now we can use <span class=tutor-code>size</span> where we would have used 80. Do you know why we might want that?",
    code: "var size = 80;\nc.fillRect(30, 20, size, size);\n"
}, {
    message: "What happens if you change 80 to 220?",
    tutorImage: 1,
}, {
    message: "And look!  Wider and taller box, both at the same time!"
}, {
    message: "I'm going to make two boxes. Like this.",
    code: "var size = 80;\nc.fillRect(20, 20, size, size);\nc.fillRect(90, 90, size, size);\n",
    tutorImage: 6,
}, {
    message: "Both boxes are the same size squares because they are both using the variable named <span class=tutor-code>size</span> for width and height."
}, {
    message: "You can change what <span class=tutor-code>size</span> is equal to.  That will grow or shrink both boxes at once! Try changing 80 to 180!",
    tutorImage: 4,
}, {
    message: "Look, color!  That's fun, isn't it?",
    code: 'var size = 80;\n\nc.fillStyle = "blue";\nc.fillRect(20, 20, size, size);\n',
    lessonSection: "Color",
    tutorImage: 4,
}, {
    message: 'Many colors work.  Try "green" or "purple" or "gold"!',
    tutorImage: 2,
}, {
    message: "Here are two boxes that are the same color.  Now can you make the two boxes different colors?",
    code: 'var size = 80;\n\nc.fillStyle ="green";\nc.fillRect(20, 20, size, size);\n\nc.fillRect(90, 90, size, size);\n',
    tutorImage: 1,
}, {
    message: "Here is one version, red and blue.",
    code: 'var size = 80;\n\nc.fillStyle ="red";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="blue";\nc.fillRect(80, 80, size, size);\n'
}, {
    message: "Red, green, and blue.  That's nice.",
    code: 'var size = 80;\n\nc.fillStyle ="red";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="lime";\nc.fillRect(80, 80, size, size);\nc.fillStyle ="blue";\nc.fillRect(140, 140, size, size);\n'
}, {
    message: "Huh, this does the same thing?  What could rgb() be?",
    code: 'var size = 80;\n\nc.fillStyle ="rgb(255, 0, 0)";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="rgb(0, 255, 0)";\nc.fillRect(80, 80, size, size);\nc.fillStyle ="rgb(0, 0, 255)";\nc.fillRect(140, 140, size, size);\n',
    tutorImage: 4,
}, {
    message: "Try changing any of the zeroes to 200 or so.  And try changing any of the 255 to 0. What do the numbers seem to do?",
    code: 'var size = 80;\n\nc.fillStyle ="rgb(255, 0, 0)";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="rgb(0, 255, 0)";\nc.fillRect(80, 80, size, size);\nc.fillStyle ="rgb(0, 0, 255)";\nc.fillRect(140, 140, size, size);\n',
    tutorImage: 6,
}, {
    message: "Did you figure it out?  rgb() refers to red, green, and blue.  The numbers go from 0 to 255. So, <span class=tutor-code>rgb(0, 255, 0)</span> means no red or blue, but all the green you got!",
    tutorImage: 1,
}, {
    message: "You can make lots of colors this way if you change some of the numbers.  Try it!",
    tutorImage: 5,
}, {
    message: "Here is a fun game.  Can you make these two boxes the same color?",
    code: 'var size = 80;\n\nc.fillStyle ="rgb(0, 0, 0)";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="red";\nc.fillRect(80, 80, size, size);\n',
    lessonSection: "Quiz: Color",
    tutorImage: 2,
}, {
    message: "Can you make these both blue?",
    code: 'var size = 80;\n\nc.fillStyle ="rgb(0, 0, 0)";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="blue";\nc.fillRect(80, 80, size, size);\n'
}, {
    message: "Can you figure out what the rgb() numbers should be to make these both yellow?",
    code: 'var size = 80;\n\nc.fillStyle ="rgb(255, 0, 0)";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="yellow";\nc.fillRect(80, 80, size, size);\n',
    tutorImage: 4,
}, {
    message: "Okay, this one is really hard.  Can you make these two exactly match?  Can you figure out what the rgb() numbers should be to make these both crimson? Don't worry if you don't get it exactly, just see how close you can get!",
    code: 'var size = 80;\n\nc.fillStyle ="rgb(0, 0, 0)";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="crimson";\nc.fillRect(80, 80, size, size);\n',
    tutorImage: 2,
}, {
    message: "Whew, that's a hard one!  How close did you get?",
    code: 'var size = 80;\n\nc.fillStyle ="rgb(220, 20, 60)";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="crimson";\nc.fillRect(80, 80, size, size);\n',
    tutorImage: 3,
}, {
    message: "rgba() is a fun version of rgb(). See what this does?  It's got one more number at the end that's 0.5.  What is that last number doing? Try changing the 0.5 to 0.1.  Or to 0.8.  What does it do?",
    code: 'var size = 80;\n\nc.fillStyle ="rgba(255, 0, 0, 0.5)";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="rgba(0, 0, 255, 0.5)";\nc.fillRect(80, 80, size, size);\n',
    lessonSection: "Color and Transparency",
    tutorImage: 6,
}, {
    message: "The a in rgba means alpha (how transparent the box is) from 0.0 (invisible) to 1.0 (solid)",
    tutorImage: 1,
}, {
  message: "Let's go back to variables. Variables make it easier to change what our code does. Let's use <span class=tutor-code>offset</span> for how far the first box is from the left and top.  Can you replace the <span class=tutor-code>20</span> numbers with <span class=tutor-code>offset</span>?",
    code: 'var offset = 30;\nvar size = 80;\nc.fillStyle ="lime";\nc.fillRect(20, 20, size, size);\nc.fillRect(90, 90, size, size);\n',
    lessonSection: "Operators and Assignment",
    tutorImage: 1,
}, {
    message: "Now try changing what <span class=tutor-code>offset</span> is equal to from 30 to 50.  See how you can move the first box?",
    code: 'var offset = 30;\nvar size = 80;\nc.fillStyle ="lime";\nc.fillRect(offset, offset, size, size);\nc.fillRect(90, 90, size, size);\n'
}, {
    message: "Variables can be set to new values.  See how offset is set to 100 before being used by the second box?",
    code: 'var offset = 30;\nvar size = 80;\nc.fillStyle ="lime";\nc.fillRect(offset, offset, size, size);\noffset = 100;\nc.fillRect(offset, offset, size, size);\n',
    tutorImage: 6,
}, {
    message: "Try moving the second box.  Change the 100 to 50 or 150.",
}, {
    message: "Try moving the first box too.  Remember what do you have to change to move the first box?",
    tutorImage: 3,
}, {
    message: "Can you put the boxes on top of each other so they overlap and it looks like just one box?",
    tutorImage: 4,
}, {
    message: "You can also add numbers to a variable. See what this is doing? It changes offset with <span class=tutor-code>offset = offset + 50</span>",
    code: 'var offset = 30;\nvar size = 80;\nc.fillStyle ="lime";\nc.fillRect(offset, offset, size, size);\noffset = offset + 50;\nc.fillRect(offset, offset, size, size);\n',
    tutorImage: 1,
}, {
    message: "<span class=tutor-code>offset = offset + 50</span> means take offset, add 50 to it, then make offset equal that now.  In other words, make offset 50 more than it used to be."
}, {
    message: "How about you try it?  Can you replace both the 90 numbers used for the (left, top) of the second box with a variable? Hint: Either create a new variable or change offset and then use offset.",
    code: 'var offset = 30;\nvar size = 80;\nc.fillStyle ="lime";\nc.fillRect(offset, offset, size, size);\n\nc.fillRect(90, 90, size, size);\n',
    lessonSection: "Quiz: Variables and Operators",
    tutorImage: 2,
}, {
    message: "Here's one way. It adds 60 to whatever <span class=tutor-code>offset</span> was before, and makes that the new value of <span class=tutor-code>offset</span>. Okay, now try changing what <span class=tutor-code>offset</span> is equal to at the beginning from 30 to 80.  See what happens?",
    code: 'var offset = 30;\nvar size = 80;\nc.fillStyle ="lime";\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillRect(offset, offset, size, size);\n',
    tutorImage: 3,
}, {
    message: "You can move both boxes together!  Change the offset and move 'em around!",
    tutorImage: 5,
}, {
    message: "This looks the same, but it's a little different.  <span class=tutor-code>*</span> means multiply.  <span class=tutor-code>2 * 2</span> would be 4.  So, <span class=tutor-code>offset = offset * 3</span> means make offset three times bigger.",
    code: 'var offset = 30;\nvar size = 80;\nc.fillStyle ="lime";\nc.fillRect(offset, offset, size, size);\noffset = offset * 3;\nc.fillRect(offset, offset, size, size);\n',
    lessonSection: "More Operators",
    tutorImage: 3,
}, {
    message: "<span class=tutor-code>*</span> means multiply and <span class=tutor-code>/</span> means divide.  So, when we set size equal to <span class=tutor-code>20 * 6 / 2 + 50 - 10</span>, that's just a complicated way of saying make size equal to 100.  Does that make sense?",
    code: 'var size = 20 * 6 / 2 + 50 - 10;\nvar offset = 30;\nc.fillStyle ="lime";\nc.fillRect(offset, offset, size, size);\noffset = offset * 3;\nc.fillRect(offset, offset, size, size);\n'
}, {
    message: "We can also compare numbers.  See this code?  We will only draw a second box when <span class=tutor-code>size</span> is less than 80.",
    code: "var size = 50;\n\nc.fillRect(20, 20, size, size);\nif (size < 80) {\n  c.fillRect(100, 100, size, size);\n}\n",
    lessonSection: "If and Comparisons",
    tutorImage: 4,
}, {
    message: "Try changing size to 150.  See what happens? Try changing size to 79.  Then change it to 80. Neat, isn't it!",
    tutorImage: 3,
}, {
    message: "How to change the color of the square?",
    code: "var size = 80;\nvar number = 1;\n\nif (number === 1) {\n  c.fillStyle = \"red\";\n  c.fillRect(100, 100, size, size);\n}\nif (number !== 1) {\n  c.fillStyle = \"blue\";\n  c.fillRect(100, 100, size, size);\n}\n",
    lessonSection: "If and Comparisons",
}, {
    message: "Whats different now?",
    code: "var size = 80;\nvar number = 1;\n\nif (number === 1) {\n  c.fillStyle = \"red\";\n  c.fillRect(100, 100, size, size);\n} else {\n  c.fillStyle = \"blue\";\n  c.fillRect(100, 100, size, size);\n}\n",
    lessonSection: "If and Comparisons",
}, {
    message: "And now?",
    code: "var size = 80;\nvar number = 1;\n\nif (number === 1) {\n  c.fillStyle = \"red\";\n  c.fillRect(100, 100, size, size);\n} else if (number === 2) {\n  c.fillStyle = \"green\";\n  c.fillRect(100, 100, size, size);\n} else {\n  c.fillStyle = \"blue\";\n  c.fillRect(100, 100, size, size);\n}\n",
    lessonSection: "If and Comparisons",
}, {
    message: "Make a square! If the number is 0 it should be orange if not it should be silver",
    code: "var size = 80;\nvar number = 1;",
    lessonSection: "If and Comparisons",
}, {
    message: "You know, I really don't like writing code more than once.  Look at this program.  There is lots of the same code in this program.  See how the exact same thing, <span class=tutor-code>c.fillRect(offset, offset, size, size)</span>, appears on three different lines?  And how we add 40 to <span class=tutor-code>offset</span> every time before we draw another box?",
    code: 'var size = 80;\nvar offset = 20;\n\nc.fillStyle ="blue";\n\nc.fillRect(offset, offset, size, size);\noffset = offset + 40;\nc.fillRect(offset, offset, size, size);\noffset = offset + 40;\nc.fillRect(offset, offset, size, size);\n',
    lessonSection: "For Loops",
    tutorImage: 1,
}, {
    message: "Let me show you something.  This is called a <span class=tutor-code>for</span> loop.  It repeats code without writing it more than once.  Isn't that great?  Try changing the 3 to 5!",
    code: 'var size = 80;\nvar offset = 20;\n\nc.fillStyle ="blue";\nfor (var i = 0; i < 3; i = i + 1) {\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 40;\n}\n',
}, {
    message: "For loops have three parts, where to start (<span class=tutor-code>i = 0</span>), when to keep going (<span class=tutor-code>i < 5</span>), and how much to change each time (<span class=tutor-code>i = i + 1</span>). Can you make ten boxes?",
    code: 'var size = 80;\nvar offset = 20;\n\nc.fillStyle ="blue";\nfor (var i = 0; i < 5; i = i + 1) {\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 40;\n}\n',
}, {
    message: "Oh no!  They don't fit!  How can you make ten boxes fit?",
    code: 'var size = 80;\nvar offset = 20;\n\nc.fillStyle ="blue";\nfor (var i = 0; i < 10; i = i + 1) {\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 40;\n}\n',
    tutorImage: 4,
}, {
    message: "Here is one way!",
    code: 'var size = 80;\nvar offset = 20;\n\nc.fillStyle ="blue";\nfor (var i = 0; i < 10; i = i + 1) {\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 10;\n}\n',
    tutorImage: 2,
}, {
    message: "Smaller boxes also fit.  Try playing with size, offset, and changing the number of boxes!",
    code: 'var size = 20;\nvar offset = 20;\n\nc.fillStyle ="blue";\nfor (var i = 0; i < 10; i = i + 1) {\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 10;\n}\n',
}, {
    message: "Let's play with rgba() again! What's this doing?",
    code: 'var size = 50;\nvar offset = 20;\n\nfor (var i = 0; i < 10; i = i + 1) {\n  var b = i * 25;\n  var rgba = "rgba(0, 0, " + b + ", 0.5)";\n  c.fillStyle = rgba;\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 20;\n}\n',
    lessonSection: "Fun with For Loops",
    tutorImage: 6,
}, {
    message: "Complicated!  That means use 0 blue light for the first box, 25 for the second, then 50, 75, 100..."
}, {
    message: "Here is another one, this one changing alpha!  Isn't that fantastic?",
    code: 'var size = 50;\nvar offset = 20;\n\nfor (var i = 0.1; i < 0.5; i = i + 0.05) {\n  var rgba = "rgba(0, 0, 255, " + i + ")";\n  c.fillStyle = rgba;\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 20;\n}\n',
    tutorImage: 5,
}, {
    message: "Draw 5 boxes in a row.",
    code: "",
    lessonSection: "Quiz: Write Code Yourself",
    tutorImage: 2,
}, {
    message: "Can you make the third red?",
    tutorImage: 4,
}, {
    message: "Let's do something different now.  Let's play with lines.  This is the code you use to draw lines in Javascript.  What do you think moveTo() does? lineTo()?",
    code: "c.beginPath();\nc.moveTo(30, 20);\nc.lineTo(120, 40);\nc.stroke();\n",
    lessonSection: "Lines",
    tutorImage: 1,
}, {
    message: "Let's play with it.  Try changing 20 to 50. Try changing the other numbers too.  Can you figure out what moveTo() and lineTo() do?  How does this all work?",
    code: "c.beginPath();\nc.moveTo(30, 20);\nc.lineTo(120, 40);\nc.stroke();\n",
}, {
    message: "<span class=tutor-code>moveTo(<i>left, top</i>)</span> moves the pen to a spot without drawing.  <span class=tutor-code>lineTo(<i>left, top</i>)</span> draws a line from wherever the pen is to a spot.",
    tutorImage: 6,
}, {
    message: "Here is what happens if we do a second lineTo().  The second line starts from where the first ended.",
    code: "c.beginPath();\nc.moveTo(30, 20);\nc.lineTo(120, 40);\nc.lineTo(120, 150);\nc.stroke();\n",
    tutorImage: 3,
}, {
    message: "So, we're drawing a path, a trail of lines all connected together.  We start the path with beginPath() and draw everything with stroke().",
    tutorImage: 4,
}, {
    message: "If we put a moveTo() before the second lineTo(), we'll move the pen without drawing.  See?",
    code: "c.beginPath();\nc.moveTo(30, 20);\nc.lineTo(120, 40);\nc.moveTo(120, 60);\nc.lineTo(120, 150);\nc.stroke();\n",
    tutorImage: 6,
}, {
    message: "You try it!  Can you add another line?.  Put a second c.lineTo() after the first.  Make your second line go to (50, 115).",
    code: "c.beginPath();\nc.moveTo(100, 30);\nc.lineTo(150, 115);\n\nc.stroke();\n",
    tutorImage: 1,
}, {
    message: "Now can you make a triangle?",
    code: "c.beginPath();\nc.moveTo(100, 30);\nc.lineTo(150, 115);\nc.lineTo(50, 115);\n\nc.stroke();\n",
    tutorImage: 4,
}, {
    message: "Here is one way, a triangle!",
    code: "c.beginPath();\nc.moveTo(100, 30);\nc.lineTo(150, 115);\nc.lineTo(50, 115);\nc.lineTo(100, 30);\nc.stroke();\n",
    tutorImage: 2,
}, {
    message: "Huh, an orange triangle.  I think I'd like blue better.  Can you make it blue?",
    code: 'c.beginPath();\nc.strokeStyle = "orange";\nc.moveTo(100, 30);\nc.lineTo(150, 115);\nc.lineTo(50, 115);\nc.lineTo(100, 30);\nc.stroke();\n',
    tutorImage: 3,
}, {
    message: "Oh no, I was trying to make two triangles, but forgot a moveTo().  See what happened?",
    code: "c.beginPath();\nc.moveTo(100, 30);\nc.lineTo(150, 115);\nc.lineTo(50, 115);\nc.lineTo(100, 30);\n\nc.lineTo(250, 215);\nc.lineTo(150, 215);\nc.lineTo(200, 130);\nc.stroke();\n",
    tutorImage: 4,
}, {
    message: "That's not good.  Can you add <span class=tutor-code>c.moveTo(200, 130);</span> to make it two separate triangles?",
    tutorImage: 1,
}, {
    message: "I think I'm going to want a lot of triangles. This for loop draws two triangles.",
    code: "c.beginPath();\nfor (var i = 30; i <= 60; i = i + 30) {\n  c.moveTo(70 + i, i);\n  c.lineTo(120 + i, 85 + i);\n  c.lineTo(20 + i, 85 + i);\n  c.lineTo(70 + i, i);\n}\nc.stroke();\n",
    lessonSection: "Lines and Loops",
    tutorImage: 6,
}, {
    message: "This for loop starts at 30 and increases by 30 every time.  So, until it is told to stop, it counts 30, 60, 90, 120...  Right now, the for loop is told to stop at 60."
}, {
    message: "So, can you make this for loop draw three triangles? Five?",
    tutorImage: 4,
}, {
    message: "Can you make more triangles by changing how the for loop goes up?  What if it counted by 10 each time, so it would count 30, 40, 50, 60... Can you do try that?",
    tutorImage: 1,
}, {
    message: "Look at this!  Forty green triangles!",
    code: 'c.strokeStyle = "green";\nc.beginPath();\nfor (var i = 10; i <= 210; i = i + 5) {\n  c.moveTo(70 + i, i);\n  c.lineTo(120 + i, 85 + i);\n  c.lineTo(20 + i, 85 + i);\n  c.lineTo(70 + i, i);\n}\nc.stroke();\n',
    tutorImage: 5,
}, {
    message: "I just made a new function, strokeSquare().  It is just like strokeRect(), but draws squares.",
    code: "function strokeSquare(left, top, size) {\n  c.strokeRect(left, top, size, size);\n}\n\nstrokeSquare(30, 100, 50);\nstrokeSquare(10, 10, 200);\nstrokeSquare(50, 50, 10);\n",
    tutorImage: 6,
}, {
    message: "strokeSquare() uses strokeRect() to draw a rectangle with the same width and height. See how it works? strokeSquare() only takes a size, not both a width and height, and then tells strokeRect() that both the width and height are size.",
    tutorImage: 1,
}, {
    message: "So, the first square starts at (30, 100) and then has a height and width of 50.",
}, {
    message: "Can you add a fourth square below the others using strokeSquare()?",
    tutorImage: 4,
}, {
    message: "Let's talk about how this works in a little more detail.  <span class=tutor-code>function strokeSquare</span> creates a new function called strokeSquare. <span class=tutor-code>(left, top, size)</span> are the <i>parameters</i> to the function and act like variables inside the function.  The code inside the brackets (the <span class=tutor-code>{</span> and <span class=tutor-code>}</span>) is the <i>function body</i> contains all the code that is run every time you call the function.",
    tutorImage: 6,
}, {
    message: "<span class=tutor-code>strokeSquare(30, 100, 50);</span> calls the code in the function body of strokeSquare, with <span class=tutor-code>left</span> set equal to 30, <span class=tutor-code>top</span> to 100, and <span class=tutor-code>size</span> to 50.  That code uses c.strokeRect() to draw us a square.  See how that works?",
    code: "function strokeSquare(left, top, size) {\n  c.strokeRect(left, top, size, size);\n}\n\nstrokeSquare(30, 100, 50);\n",
}, {
    message: "Making your own functions is really useful.  It makes it easier to program.",
}, {
    message: "Could you make a function that draws a triangle?",
    code: ""
}, {
    message: "Now for something completely different.  A fox! I like that! Do you like foxes too? If you want, you can change some of the numbers and mess it up! Try it!",
    code: "c.beginPath();\nc.moveTo(50, 100);\nc.lineTo(70, 70);\nc.lineTo(80, 90);\nc.lineTo(90, 90);\nc.lineTo(100, 70);\nc.lineTo(120, 100);\nc.lineTo(85, 130);\nc.lineTo(50, 100);\nc.stroke();\n",
    lessonSection: "More Lines",
    tutorImage: 1,
}, {
    message: "Wait, foxes aren't purple. Can you make it green?",
    code: 'c.strokeStyle = "purple";\nc.beginPath();\nc.moveTo(50, 100);\nc.lineTo(70, 70);\nc.lineTo(80, 90);\nc.lineTo(90, 90);\nc.lineTo(100, 70);\nc.lineTo(120, 100);\nc.lineTo(85, 130);\nc.lineTo(50, 100);\nc.stroke();\n',
    tutorImage: 4,
}, {
    message: "A solid green fox! Did you know you can do that? What's different?  How did I make the fox solid?",
    code: 'c.fillStyle = "limegreen";\nc.beginPath();\nc.moveTo(50, 100);\nc.lineTo(70, 70);\nc.lineTo(80, 90);\nc.lineTo(90, 90);\nc.lineTo(100, 70);\nc.lineTo(120, 100);\nc.lineTo(85, 130);\nc.lineTo(50, 100);\nc.fill();\n',
    tutorImage: 5,
}, {
    message: "Just like <span class=tutor-code>c.stroke()</span> draws lines in whatever color <span class=tutor-code>c.strokeStyle</span> is set to, <span class=tutor-code>c.fill()</span> fills a shape with whatever color <span class=tutor-code>c.fillStyle</span> is. It's that fun?",
    tutorImage: 2,
}, {
    message: "Variables make it easy to change and add more foxes. Try changing <span class=tutor-code>x</span>, <span class=tutor-code>y</span>, and <span class=tutor-code>size</span> (or anything else)!",
    code: 'c.fillStyle = "limegreen";\n\nvar x = 50;\nvar y = 100;\nvar size = 100;\n\nc.beginPath();\n\nc.moveTo(x, y);\nc.lineTo(x+size/7*2, y-size/7*3);\nc.lineTo(x+size/7*3, y-size/7);\nc.lineTo(x+size/7*4, y-size/7);\nc.lineTo(x+size/7*5, y-size/7*3);\nc.lineTo(x+size, y);\nc.lineTo(x+size/2, y+size/7*3);\nc.lineTo(x, y);\nc.fill();',
    tutorImage: 1,
}, {
    message: "Here are two foxes, but look at all that code!  Most of it is the same too, just copied, repeating over and over. That doesn't seem like the best way to do two foxes. What can we do?",
    code: 'c.fillStyle = "limegreen";\n\nvar x = 50;\nvar y = 100;\nvar size = 100;\n\nc.beginPath();\nc.moveTo(x, y);\nc.lineTo(x+size/7*2, y-size/7*3);\nc.lineTo(x+size/7*3, y-size/7);\nc.lineTo(x+size/7*4, y-size/7);\nc.lineTo(x+size/7*5, y-size/7*3);\nc.lineTo(x+size, y);\nc.lineTo(x+size/2, y+size/7*3);\nc.lineTo(x, y);\nc.fill();\n\nx += 100;\ny += 50;\n\nc.beginPath();\nc.moveTo(x, y);\nc.lineTo(x+size/7*2, y-size/7*3);\nc.lineTo(x+size/7*3, y-size/7);\nc.lineTo(x+size/7*4, y-size/7);\nc.lineTo(x+size/7*5, y-size/7*3);\nc.lineTo(x+size, y);\nc.lineTo(x+size/2, y+size/7*3);\nc.lineTo(x, y);\nc.fill();\n',
    tutorImage: 4,
}, {
    message: "Functions! It's fillFox()! Can you add a third fox?",
    code: 'c.fillStyle = "limegreen";\nvar size = 100;\n\nfunction fillFox(x, y, s) {\n  c.beginPath();\n  c.moveTo(x, y);\n  c.lineTo(x+s/7*2, y-s/7*3);\n  c.lineTo(x+s/7*3, y-s/7);\n  c.lineTo(x+s/7*4, y-s/7);\n  c.lineTo(x+s/7*5, y-s/7*3);\n  c.lineTo(x+s, y);\n  c.lineTo(x+s/2, y+s/7*3);\n  c.lineTo(x, y);\n  c.fill();\n}\n\nfillFox(50, 100, size);\nfillFox(150, 150, size);\n    \n',
    lessonSection: "More Functions",
    tutorImage: 5,
}, {
    message: "Wow, four foxes in a row using functions and for loops!  See how this works?  Can you make it eight foxes?",
    code: 'c.fillStyle = "limegreen";\nvar size = 40;\n\nfunction fillFox(x, y, s) {\n  c.beginPath();\n  c.moveTo(x, y);\n  c.lineTo(x+s/7*2, y-s/7*3);\n  c.lineTo(x+s/7*3, y-s/7);\n  c.lineTo(x+s/7*4, y-s/7);\n  c.lineTo(x+s/7*5, y-s/7*3);\n  c.lineTo(x+s, y);\n  c.lineTo(x+s/2, y+s/7*3);\n  c.lineTo(x, y);\n  c.fill();\n}\n\nfor (var i = 0; i < 4; i = i + 1) {\n  fillFox(i * size, 50, size);\n}\n',
}, {
    message: "Two loops to make rows of foxes!  Try changing <span class=tutor-code>size</span> to make them bigger!",
    code: 'c.fillStyle = "limegreen";\nvar size = 40;\n\nfor (var i = 0; i < 5; i = i + 1) {\n  for (var j = 0; j < 3; j = j + 1) {\n    fillFox(i * size, j * size, size);\n  }\n}\n\nfunction fillFox(x, y, s) {\n  c.beginPath();\n  c.moveTo(x, y+s/7*3);\n  c.lineTo(x+s/7*2, y);\n  c.lineTo(x+s/7*3, y+s/7*2);\n  c.lineTo(x+s/7*4, y+s/7*2);\n  c.lineTo(x+s/7*5, y);\n  c.lineTo(x+s, y+s/7*3);\n  c.lineTo(x+s/2, y+s);\n  c.lineTo(x, y+s/7*3);\n  c.fill();\n}\n',
    lessonSection: "Nested Loops",
    tutorImage: 6,
}, {
    message: "Did you know you could do two loops like that, one inside the other?",
    tutorImage: 4,
}, {
    message: "Do you know how it works?",
}, {
    message: "Look at the inner loop.  <span class=tutor-code>j</span> will count 0, 1, 2.  The first time <span class=tutor-code>j</span> counts 0, 1, 2, <span class=tutor-code>i</span> will be 0.  The next time j counts 0, 1, 2, i will be 1.",
    tutorImage: 1,
}, {
    message: "So, for the first fox, i = 0 and j = 0.  On the second fox, i = 0 and j = 1.  Third, i = 0 and j = 2. Then, i = 1 and j = 0, i = 1 and j = 1, i = 1 and j = 2, and so on.",
}, {
    message: "Can you figure out what order it draws the foxes?  Which fox is drawn first?  Which fox is the second fox drawn?",
    tutorImage: 4,
}, {
    message: "The first fox will be the one at the top left.  The second drawn is the one below it.  Do you see why?",
    tutorImage: 6,
}, {
    message: "Wow!  Full of foxes! Try changing size!",
    code: 'c.fillStyle = "limegreen";\nvar size = 40;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar maxI = Math.floor(w / size);\nvar maxJ = Math.floor(h / size);\n\nfor (var i = 0; i < maxI; i = i + 1) {\n  for (var j = 0; j < maxJ; j = j + 1) {\n    fillFox(i * size, j * size, size);\n  }\n}\n\nfunction fillFox(x, y, s) {\n  c.beginPath();\n  c.moveTo(x, y+s/7*3);\n  c.lineTo(x+s/7*2, y);\n  c.lineTo(x+s/7*3, y+s/7*2);\n  c.lineTo(x+s/7*4, y+s/7*2);\n  c.lineTo(x+s/7*5, y);\n  c.lineTo(x+s, y+s/7*3);\n  c.lineTo(x+s/2, y+s);\n  c.lineTo(x, y+s/7*3);\n  c.fill();\n}\n',
    lessonSection: "Fun with Foxes",
    tutorImage: 5,
}, {
    message: "How does this program fill the drawing area with foxes?  How does it know how many foxes will fit?",
    tutorImage: 4,
}, {
    message: "<span class=tutor-code>c.canvas.width</span> is a way of getting the width of the drawing area.  <span class=tutor-code>size</span> is a width of a fox.  So, <span class=tutor-code>c.canvas.width / size</span> is how many foxes will fit across.",
    tutorImage: 1,
}, {
    message: "The code does something similar with the height to figure out how many foxes fit up-and-down.  The Math.floor() is just a way of rounding, it drops fractions off (so, for example. <span class=tutor-code>Math.floor(7.8)</span> is 7). Now do you see how it works?",
}, {
    message: "Wow!  Five foxes, randomly placed, changing every time. Can you have it draw fifty foxes? A hundred?  How about bigger foxes or smaller foxes?",
    code: 'c.fillStyle = "limegreen";\nvar n = 5;\nvar size = 20;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < n; i = i + 1) {\n  var x = (w - size) * Math.random();\n  var y = (h - size) * Math.random();\n  fillFox(x, y, size);\n}\n\nfunction fillFox(x, y, s) {\n  c.beginPath();\n  c.moveTo(x, y+s/7*3);\n  c.lineTo(x+s/7*2, y);\n  c.lineTo(x+s/7*3, y+s/7*2);\n  c.lineTo(x+s/7*4, y+s/7*2);\n  c.lineTo(x+s/7*5, y);\n  c.lineTo(x+s, y+s/7*3);\n  c.lineTo(x+s/2, y+s);\n  c.lineTo(x, y+s/7*3);\n  c.fill();\n}\n',
    tutorImage: 2,
}, {
    message: "So, how does this work?  <span class=tutor-code>n</span> is the number of foxes.  <span class=tutor-code>size</span> is the size of the foxes. <span class=tutor-code>c.fillStyle</span> is the color of the foxes.  But how does it place them randomly?",
    tutorImage: 4,
}, {
    message: "<span class=tutor-code>Math.random()</span> gives us a random number between 0.0 and 1.0, a different one each time we use it.",
    tutorImage: 1,
}, {
    message: "See the line <span class=tutor-code>var x = (w - size) * Math.random()</span>?  That figures out how far across to put the fox.  Can you figure out what exactly it is doing?",
}, {
    message: "It takes the width of the drawing area (which is <span class=tutor-code>c.canvas.width</span> and stored in the variable called <span class=tutor-code>w</span>), subtracts off the <span class=tutor-code>size</span> (so the fox will fit), and then multiplies by a random number between 0.0 and 1.0.  So, if the random number is 0.5, the fox will appear about halfway across.",
    tutorImage: 3,
}, {
    message: "The code does something similar with <span class=tutor-code>c.canvas.height</span> to determine where to put the fox vertically.  Does it make more sense now?",
}, {
    message: "OK, let's go back to lines.  Here are two separate lines. But see how much code is repeated? You know that isn't good. What can we do?",
    code: "// First line\nc.beginPath();\nc.moveTo(20, 20);\nc.lineTo(200, 20);\nc.stroke();\n// Second line\nc.beginPath();\nc.moveTo(20, 50);\nc.lineTo(200, 50);\nc.stroke();\n",
    lessonSection: "Even More Functions",
    tutorImage: 1,
}, {
    message: "Functions!  We need a drawLine() function so we can draw lines more easily.  Let me write that for you. Ta dah! Can you use this new function to draw one line from (20, 20) to (200, 20) and another from (20, 50) to (200, 50)?",
    code: "function drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n\n",
    tutorImage: 6,
}, {
    message: "Did you get it? Here is one version.  Can you add a third line below the other two?",
    code: "function drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n\ndrawLine(20, 20, 200, 20);\ndrawLine(20, 50, 200, 50);\n",
    tutorImage: 3,
}, {
    message: "Three vertical lines using for loop.  Can you make it ten lines?",
    code: "function drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n\nfor (var i = 0; i < 3; i = i + 1) {\n  var x = 20 + i * 30;\n  drawLine(x, 20, x, 200);\n}\n",
    lessonSection: "Fun with Lines",
    tutorImage: 1,
}, {
    message: "Ten lines coming to a point.  That's kind of cool, isn't it? Try moving the point!",
    code: "function drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n\nvar px = 200;\nvar py = 150;\nfor (var i = 0; i < 10; i = i + 1) {\n  var y = i * 30;\n  drawLine(0, y, px, py);\n}\n",
    tutorImage: 2,
}, {
    message: "Ready for something harder?  Now the lines fan to the right.  Can you also add in the ones we saw last, going to the left?",
    code: "function drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n\nvar px = 200;\nvar py = 150;\nfor (var i = 0; i < 10; i = i + 1) {\n  var y = i * 30;\n  drawLine(400, y, px, py);\n}\n",
    tutorImage: 3,
}, {
    message: "Did you get it?  There should be a second drawLine() and starting from the left means x1 in drawLine() should be 0.",
    tutorImage: 1,
}, {
    message: "This is one way to do it.  Try moving the point now!  Fun, isn't it?",
    code: "function drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n\nvar px = 200;\nvar py = 150;\nfor (var i = 0; i < 10; i = i + 1) {\n  var y = i * 30;\n  drawLine(0, y, px, py);\n  drawLine(400, y, px, py);\n}\n",
    tutorImage: 2,
}, {
    message: "Hey, look at this!  Isn't that cool?  It uses the drawing area width and height now to fit in as many lines as it can!  Try changing num, px, or py!",
    code: "var num = 20;\nvar px = 200;\nvar py = 150;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < num; i = i + 1) {\n  var y = i * h / (num - 1);\n  drawLine(w, y, px, py);\n  var x = y * w / h;\n  drawLine(x, h, px, py);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n",
    tutorImage: 5,
}, {
    message: "See how it works?  The first drawLine() draws lines from (w, y) to (px, py). <span class=tutor-code>w</span> is always the same and is the width of the drawing area.  <span class=tutor-code>y</span> starts at 0 and increases until it is the height of the drawing area. So, it draws all those lines that go to the right side.",
    tutorImage: 1,
}, {
    message: "The second drawLine() does something similar for all the lines going to the bottom, drawing from (x, h) to (px, py).",
}, {
    message: "Can you make lines from all sides?  You will need four drawLine() and your two new ones will use 0 instead of w and h.  Can you do it?",
    code: "var num = 20;\nvar px = 200;\nvar py = 150;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < num; i = i + 1) {\n  var y = i * h / (num - 1);\n  drawLine(w, y, px, py);\n  var x = y * w / h;\n  drawLine(x, h, px, py);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n",
    tutorImage: 4,
}, {
    message: "I like mine blue.  Play with it!",
    code: 'var num = 10;\nvar px = 200;\nvar py = 150;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.strokeStyle = "blue";\nfor (var i = 0; i < num; i = i + 1) {\n  var y = i * h / (num - 1);\n  drawLine(0, y, px, py);\n  drawLine(w, y, px, py);\n  var x = y * w / h;\n  drawLine(x, 0, px, py);\n  drawLine(x, h, px, py);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n',
    tutorImage: 2,
}, {
    message: "Sometimes, when I get bored in class, I draw these.  Do you like them too?  Can you make it so it is drawn with even more lines?",
    code: "var num = 10;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < num; i = i + 1) {\n  var x = i * w / (num - 1);\n  var y = i * h / (num - 1);\n  drawLine(0, y, x, h);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n",
    lessonSection: "More Fun with Lines",
    tutorImage: 7,
}, {
    message: "Can you add another curve at top right? You will need another drawLine() but use x, 0, w, y.",
    code: "var num = 10;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < num; i = i + 1) {\n  var x = i * w / (num - 1);\n  var y = i * h / (num - 1);\n  drawLine(0, y, x, h);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n",
    tutorImage: 1,
}, {
    message: "Pretty!  Try other colors and changing the number of lines!",
    code: 'var num = 30;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.strokeStyle = "gold";\nfor (var i = 0; i < num; i = i + 1) {\n  var x = i * w / (num - 1);\n  var y = i * h / (num - 1);\n  drawLine(0, y, x, h);\n  drawLine(x, 0, w, y);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n',
    tutorImage: 5,
}, {
    message: "Can you make it so the two curves are two different colors?",
    tutorImage: 1,
}, {
    message: "Here is one version.  Try changing the colors!",
    code: 'var num = 30;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < num; i = i + 1) {\n  var x = i * w / (num - 1);\n  var y = i * h / (num - 1);\n  c.strokeStyle = "gold";\n  drawLine(0, y, x, h);\n  c.strokeStyle = "red";\n  drawLine(x, 0, w, y);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n',
    tutorImage: 2,
}, {
    message: "Here is a crazy fun random colors changing version.  It's complicated, but take a look.  Can you guess how it works?",
    code: 'var num = 30;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < num; i = i + 1) {\n  var x = i * w / (num - 1);\n  var y = i * h / (num - 1);\n  c.strokeStyle = randomRGBA();\n  drawLine(0, y, x, h);\n  c.strokeStyle = randomRGBA();\n  drawLine(x, 0, w, y);\n}\n\nfunction randomRGBA() {\n  var r = randInt(255);\n  var g = randInt(255);\n  var b = randInt(255);\n  var a = Math.random();\n  var rgba = [r,g,b,a].join(",");\n  return "rgba(" + rgba + ")";\n}\nfunction randInt(limit) {\n  var x = Math.random() * limit;\n  return Math.floor(x);\n}\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n',
    tutorImage: 5,
}, {
    message: "Wow, it's great with thicker lines!  Play with it some more!  Try changing it so it draws the curves using more lines!",
    code: 'var num = 30;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.lineWidth = 5;\nfor (var i = 0; i < num; i = i + 1) {\n  var x = i * w / (num - 1);\n  var y = i * h / (num - 1);\n  c.strokeStyle = randomRGBA();\n  drawLine(0, y, x, h);\n  c.strokeStyle = randomRGBA();\n  drawLine(x, 0, w, y);\n}\n\nfunction randomRGBA() {\n  var r = randInt(255);\n  var g = randInt(255);\n  var b = randInt(255);\n  var a = Math.random();\n  var rgba = [r,g,b,a].join(",");\n  return "rgba(" + rgba + ")";\n}\nfunction randInt(limit) {\n  var x = Math.random() * limit;\n  return Math.floor(x);\n}\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n',
}, {
    message: "What this code does?",
    code: "var offsets = [10, 20, 30, 40, 50];\nfor (var i = 0; i < offsets.length; i = i + 1) {\n  var offset = offsets[i];\n  c.fillRect(offset, offset, 50, 50);\n}",
    lessonSection: "Arrays, and Objects"
}, {
    message: "Could you add one more box?"
}, {
    message: "What is the offset and the size of this box?",
    code: "var obj = {offset: 10, size: 50};\nc.fillRect(obj.offset, obj.offset, obj.size, obj.size);"
}, {
    message: "We can combine objects and arrays.",
    code: "var details = [\n  {offset: 20, size: 50},\n  {offset: 40, size: 60},\n  {offset: 60, size: 70}\n];\nfor (var i = 0; i < details.length; i = i + 1) {\n  var obj = details[i];\n  c.fillRect(obj.offset, obj.offset, obj.size, obj.size);\n}",
}, {
    message: "Look what is happening here!",
    code: "var pane = document.getElementById('pane');\n\npane.onmousemove = function(evt) {\n  var x = evt.clientX;\n  var y = evt.clientY;\n  c.fillRect(x, y, 40, 40);\n};\n",
    lessonSection: "Events"
}, {
    message: "How would you change the code to make it not leave a tail?",
}, {
    message: "Also could you center the box to the mouse?"
}, {
    code: "",
    message: "Great Job!"
}];
var predefForJSHint = {
    c: true,
    rgb: true,
    rgba: true,
};
var tutorImages = ["maven1-h250.png", "maven2-h250.png", "maven3-h250.png", "maven4-h250.png", "maven5-h250.png", "maven6-h250.png", "maven7-h250.png", ];
var previewUpdateDelay = 300;
var updatePreviewTimeout;
var hiddenCode = "";
var currentLesson = 0;
if ((!window.CanvasRenderingContext2D) || ($.browser.msie && parseInt($.browser.version, 10) <= 8)) {
    $("#old-browser-warning").modal({
        maxWidth: 500,
        overlayClose: true,
    })
}
var editorOptions = {
    mode: "javascript",
    tabSize: 2,
    lineNumbers: true,
    lineWrapping: true,
    onCursorActivity: function() {
        clearTimeout(updatePreviewTimeout);
        updatePreviewTimeout = setTimeout(updatePreview, previewUpdateDelay)
    }
};
var editor = CodeMirror.fromTextArea(document.getElementById("code"), editorOptions);
var previousErrorLine = null;

function updatePreview() {
    var b = editor.getValue();
    var d = JSHINT(b, {
        undef: true,
        browser: true,
        curly: true,
        smarttabs: true,
        predef: predefForJSHint
    });
    if (!d) {
        var a = 3000;
        var e = "Oops! Looks like there is a problem where you typed <i>";
        e += JSHINT.errors[0].evidence;
        e += "</i><br />If it helps, the error may be: <i>" + JSHINT.errors[0].reason + "</i>";
        var j = JSHINT.errors[0].line - 1;
        if (previousErrorLine != null) {
            a = 1;
            if (previousErrorLine != j) {
                for (var f = 1; f <= editor.lineCount(); f++) {
                    editor.setLineClass(f, null, null)
                }
            }
        }
        clearTimeout(updatePreviewTimeout);
        updatePreviewTimeout = setTimeout(function() {
            previousErrorLine = j;
            $("#code-errors").html(e).slideDown();
            editor.setLineClass(j, null, "errorLine")
        }, a);
        return
    } else {
        if (additionalSyntaxChecks(b)) {
            return
        } else {
            if (previousErrorLine != null) {
                $("#code-errors").slideUp();
                editor.setLineClass(previousErrorLine, null, null);
                editor.refresh();
                previousErrorLine = null
            }
        }
    }
    var l = lessons[currentLesson];
    if (l.youGotItCheck) {
        if (b.search(l.youGotItCheck) >= 0) {
            var n = $("#tutor-message").html();
            if (n.search(/you did it!\s*$/i) < 0) {
                changeTutorMessage(n + " Great, you did it!")
            }
        }
    }
    var g = $("#preview").height();
    var m = '<html><body style="margin: 0px;"><canvas id=pane width=400 height=' + g + "></canvas>";
    m += "<script>";
    m += hiddenCode;
    var h = instrumentCodeForInfiniteLoops(b);
    m += h;
    m += "<\/script></body></html>";
    var c = document.getElementById("preview");
    var k = c.contentDocument || c.contentWindow.document;
    if (k.stopAnimation) {
        k.stopAnimation()
    }
    if (k.stopExecutionMonitor) {
        k.stopExecutionMonitor()
    }
    k.open();
    k.write(m);
    k.close()
}

function additionalSyntaxChecks(b) {
    var a = new RegExp(/^\s*c\.\s*$/m);
    return a.test(b)
}

function instrumentCodeForInfiniteLoops(c) {
    var f = CodeMirror.getMode(editorOptions, editorOptions.mode);
    var b = CodeMirror.startState(f);
    var k = c.split(/[\r\n]/);
    var h = [];
    var g = 0;
    for (var e = 0; e < k.length; e++) {
        var j = new CodeMirror.StringStream(k[e]);
        while (!j.eol()) {
            var a = f.token(j, b);
            var d = j.string.slice(j.start, j.pos);
            if (d == "{") {
                if (b.lexical.info != "switch") {
                    if (b.lexical.prev.type == "block" || b.lexical.prev.type == "form") {
                        h.push(g + j.start + 1)
                    }
                }
            }
            j.start = j.pos
        }
        g += k[e].length + 1
    }
    for (var e = h.length - 1; e >= 0; e--) {
        c = c.slice(0, h[e]) + 'cmRunStepCount++; if (cmRunStepCount > 1000000) {throw Error("Execution limit exceeded. Infinite loop?");}' + c.slice(h[e])
    }
    c = "var cmRunStepCount = 0;\nvar cmExecMonId = setInterval(function() { cmRunStepCount = 0; }, 10000);\ndocument.stopExecutionMonitor = function() { clearInterval(cmExecMonId); }\n" + c;
    return c
}
setTimeout(updatePreview, previewUpdateDelay);
var currentLessonStorageName;
if (typeof currentLessonStorageNameOverride === "undefined") {
    currentLessonStorageName = "codeMavenCurrentLesson"
} else {
    congrats = currentLessonStorageNameOverride
}
if (window.localStorage && window.localStorage[currentLessonStorageName] != null) {
    data = window.localStorage[currentLessonStorageName];
    data = parseInt(data, 10);
    if (!isNaN(data) && data >= 0 && data < lessons.length) {
        currentLesson = data
    }
}
if (window.location.hash) {
    var jumpTo = window.location.hash.slice(1);
    for (var i = 0; i < lessons.length; i++) {
        var section = lessons[i].lessonSection;
        if (section && section.indexOf(jumpTo) == 0) {
            currentLesson = i;
            break
        }
    }
}
var data = "";
for (var i = 0; i < lessons.length; i++) {
    var nameUsed = {};
    var section = lessons[i].lessonSection;
    if (section) {
        if (nameUsed[section]) {
            console.log("Warning: Some lesson sections have the same name, that's a problem.")
        } else {
            var jsLambda = "$.modal.close(); jumpToLesson(" + i + "); return false;";
            data += '<li><a href="#' + section + '" onclick="' + jsLambda + '">' + section + "</a>";
            nameUsed[section] = 1
        }
    }
}
$("#lesson-sections-list").html(data);
initCode();
initLesson();

function initCode(b) {
    for (var a = currentLesson; a >= 0; a--) {
        if (lessons[a].code != null) {
            editor.setValue(lessons[a].code);
            break
        }
    }
    for (var a = currentLesson; a >= 0; a--) {
        if (lessons[a].hiddenCode != null) {
            hiddenCode = lessons[a].hiddenCode;
            break
        }
    }
    for (var a = currentLesson; a >= 0; a--) {
        if (lessons[a].lessonSection != null) {
            lessons[currentLesson].lessonSection = lessons[a].lessonSection;
            break
        }
    }
    for (var a = currentLesson; a >= 0; a--) {
        if (lessons[a].tutorImage != null) {
            lessons[currentLesson].tutorImage = lessons[a].tutorImage;
            break
        }
    }
}

function nextLesson() {
    currentLesson += 1;
    if (currentLesson >= lessons.length) {
        currentLesson = lessons.length - 1
    } else {
        if (currentLesson < 0) {
            currentLesson = 0
        }
    }
    initLesson()
}

function changeTutorMessage(a) {
    var b = $("#tutor-message");
    b.stop(true).fadeTo(50, 0.5, function() {
        b.html(a);
        b.fadeTo(250, 1)
    })
}

function changeLessonSection(b) {
    var a = $("#lesson-section");
    if (a.html() == b) {
        return
    }
    a.stop(true).fadeTo(50, 0.5, function() {
        a.html(b);
        a.fadeTo(250, 1)
    })
}

function changeTutorImage(b) {
    var a = $("#tutor-img");
    var e = imgToURL(b);
    if (a.attr("src") == e) {
        return
    }
    var d = new Image();
    var c = lessons[currentLesson].tutorImage;
    d.onload = function() {
        if (c != lessons[currentLesson].tutorImage) {
            return
        }
        a.stop(true, true).fadeTo(200, 0.7, function() {
            a.attr("src", e);
            a.fadeTo(200, 1)
        })
    };
    d.src = e
}

function initLesson() {
    var a = lessons[currentLesson];
    changeTutorMessage(a.message);
    if (a.lessonSection != null) {
        changeLessonSection(a.lessonSection)
    }
    if (a.tutorImage != null) {
        changeTutorImage(tutorImages[a.tutorImage - 1])
    }
    if (a.hiddenCode != null) {
        hiddenCode = a.hiddenCode
    }
    if (a.code != null) {
        editor.setValue(a.code);
        editor.scrollTo(null, 0)
    }
    updatePreview();
    if (window.localStorage) {
        window.localStorage[currentLessonStorageName] = currentLesson
    }
    var b = Math.floor((currentLesson + 1) * 100 / lessons.length);
    $("#lesson-progress").attr("value", b);
    $("#lesson-progress").attr("title", b + "% completed")
}
$("#tutor-talk").mousedown(function(a) {
    if ($(a.target).is("#tutor-message a")) {
        return true
    }
    nextLesson()
});
$("#tutor-avatar").mousedown(nextLesson);
$("#reset-button").click(function() {
    editor.setValue("");
    updatePreview();
    setTimeout(function() {
        initCode();
        updatePreview()
    }, 100)
});

function jumpToLesson(a) {
    if (a < 0) {
        a = 0
    } else {
        if (a >= lessons.length) {
            a = lessons.length - 1
        }
    }
    if (currentLesson != a) {
        currentLesson = a;
        initCode();
        initLesson();
        updatePreview()
    }
    var a = $("#lesson-number");
    a.stop(true).fadeOut(50, function() {
        a.html("Lesson " + (currentLesson + 1));
        a.fadeIn(100).fadeOut(700)
    })
}
$("#back-button").click(function() {
    jumpToLesson(currentLesson - 1)
});
$("#tutor-avatar img").bind("dragstart", function(a) {
    a.preventDefault()
});
$("#tutor").bind("selectstart", function(a) {
    a.preventDefault()
});
$(".info-link").click(function(a) {
    var b = $(a.target).html().toLowerCase().replace(/\s+/g, "-");
    b = "#" + b;
    $(b).modal({
        onOpen: function(c) {
            c.overlay.fadeIn(300);
            c.container.fadeIn(700);
            c.data.fadeIn(1000)
        },
        onClose: function(c) {
            c.data.fadeOut(200);
            c.container.fadeOut(200);
            c.overlay.fadeOut(400, $.modal.close)
        },
        maxWidth: 500,
        maxHeight: 700,
        autoResize: true,
        overlayClose: true,
    })
});

function imgToURL(a) {
    return "maven/" + a
}
for (var i = 0; i < tutorImages.length; i++) {
    (new Image()).src = imgToURL(tutorImages[i])
};
