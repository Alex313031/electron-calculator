(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    'use strict';
    var h, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ba(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var da = ba(this);

    function ea(a, b) {
        if (b) a: {
            var c = da;a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                if (!(e in c)) break a;
                c = c[e]
            }
            a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && aa(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    ea("Array.prototype.flat", function(a) {
        return a ? a : function(b) {
            b = void 0 === b ? 1 : b;
            for (var c = [], d = 0; d < this.length; d++) {
                var e = this[d];
                Array.isArray(e) && 0 < b ? (e = Array.prototype.flat.call(e, b - 1), c.push.apply(c, e)) : c.push(e)
            }
            return c
        }
    });
    var fa = fa || {},
        l = this || self;

    function ha(a, b) {
        a = a.split(".");
        var c = l;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function ia() {}

    function ja(a) {
        var b = typeof a;
        b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function ka(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function la(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ma(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function na(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? na = la : na = ma;
        return na.apply(null, arguments)
    }

    function oa(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Ab = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.fg = function(d, e, f) {
            for (var g = Array(arguments.length - 2), k = 2; k < arguments.length; k++) g[k - 2] = arguments[k];
            return b.prototype[e].apply(d, g)
        }
    }

    function pa(a) {
        return a
    };

    function m(a, b, c, d) {
        var e = arguments.length,
            f = 3 > e ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d,
            g;
        if ("object" === typeof Reflect && Reflect && "function" === typeof Reflect.decorate) f = Reflect.decorate(a, b, c, d);
        else
            for (var k = a.length - 1; 0 <= k; k--)
                if (g = a[k]) f = (3 > e ? g(f) : 3 < e ? g(b, c, f) : g(b, c)) || f;
        return 3 < e && f && Object.defineProperty(b, c, f), f
    }

    function p(a, b) {
        if ("object" === typeof Reflect && Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(a, b)
    }

    function v(a, b) {
        var c = void 0;
        return new(c || (c = Promise))(function(d, e) {
            function f(n) {
                try {
                    k(b.next(n))
                } catch (q) {
                    e(q)
                }
            }

            function g(n) {
                try {
                    k(b["throw"](n))
                } catch (q) {
                    e(q)
                }
            }

            function k(n) {
                n.done ? d(n.value) : (new c(function(q) {
                    q(n.value)
                })).then(f, g)
            }
            k((b = b.apply(a, void 0)).next())
        })
    };
    var qa = window;

    function ra(a) {
        qa.chrome = {
            runtime: {
                id: "something"
            },
            i18n: {
                getMessage(b) {
                    var c;
                    return (null === (c = a[b]) || void 0 === c ? void 0 : c.message) || ""
                },
                getAcceptLanguages() {
                    return navigator.languages
                }
            }
        }
    };
    var sa;
    const ta = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (let c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        ua = Array.prototype.forEach ? function(a, b) {
            Array.prototype.forEach.call(a, b, void 0)
        } : function(a, b) {
            const c = a.length,
                d = "string" === typeof a ? a.split("") : a;
            for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
        };

    function va(a, b) {
        b = ta(a, b);
        let c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function wa(a) {
        const b = a.length;
        if (0 < b) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };

    function xa() {
        this.g = Date.now()
    }
    var ya = null;
    xa.prototype.set = function(a) {
        this.g = a
    };
    xa.prototype.reset = function() {
        this.set(Date.now())
    };
    xa.prototype.get = function() {
        return this.g
    };

    function za(a, b) {
        for (const c in a) b.call(void 0, a[c], c, a)
    }

    function Aa(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    }
    const Ba = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Ca(a, b) {
        let c, d;
        for (let e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (let f = 0; f < Ba.length; f++) c = Ba[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var Da;

    function Ea() {
        if (void 0 === Da) {
            var a = null,
                b = l.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: pa,
                        createScript: pa,
                        createScriptURL: pa
                    })
                } catch (c) {
                    l.console && l.console.error(c.message)
                }
                Da = a
            } else Da = a
        }
        return Da
    };

    function Fa(a, b) {
        this.g = a === Ga && b || "";
        this.h = Ha
    }
    Fa.prototype.na = !0;
    Fa.prototype.ga = function() {
        return this.g
    };

    function Ia(a) {
        return a instanceof Fa && a.constructor === Fa && a.h === Ha ? a.g : "type_error:Const"
    }
    var Ha = {},
        Ga = {};
    const Ja = {};
    class Ka {
        constructor(a, b) {
            this.g = b === Ja ? a : "";
            this.na = !0
        }
        ga() {
            return this.g.toString()
        }
    }
    Ka.prototype.toString = function() {
        return this.g.toString()
    };
    var Ma = class {
        constructor(a, b) {
            this.g = b === La ? a : ""
        }
    };
    h = Ma.prototype;
    h.na = !0;
    h.ga = function() {
        return this.g.toString()
    };
    h.Zb = !0;
    h.Ub = function() {
        return 1
    };
    h.toString = function() {
        return this.g + ""
    };

    function Na(a) {
        return a instanceof Ma && a.constructor === Ma ? a.g : "type_error:TrustedResourceUrl"
    }

    function Oa(a) {
        var b = Ia(new Fa(Ga, "translations/translations__%{locale}.js"));
        if (!Pa.test(b)) throw Error("Invalid TrustedResourceUrl format: " + b);
        var c = b.replace(Qa, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(a, e)) throw Error('Found marker, "' + e + '", in format string, "' + b + '", but no valid label mapping found in args: ' + JSON.stringify(a));
            d = a[e];
            return d instanceof Fa ? Ia(d) : encodeURIComponent(String(d))
        });
        return Ra(c)
    }
    var Qa = /%{(\w+)}/g,
        Pa = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
        La = {};

    function Ra(a) {
        const b = Ea();
        a = b ? b.createScriptURL(a) : a;
        return new Ma(a, La)
    };

    function Sa(a) {
        return /^[\s\xa0]*$/.test(a)
    }
    var Ta = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        Ua = /&/g,
        Va = /</g,
        Wa = />/g,
        Xa = /"/g,
        Za = /'/g,
        $a = /\x00/g,
        ab = /[\x00&<>"']/;

    function bb(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var db = class {
        constructor(a, b) {
            this.g = b === cb ? a : ""
        }
    };
    h = db.prototype;
    h.na = !0;
    h.ga = function() {
        return this.g.toString()
    };
    h.Zb = !0;
    h.Ub = function() {
        return 1
    };
    h.toString = function() {
        return this.g.toString()
    };
    var cb = {};
    const eb = {};
    class fb {
        constructor(a, b) {
            this.g = b === eb ? a : "";
            this.na = !0
        }
        ga() {
            return this.g
        }
        toString() {
            return this.g.toString()
        }
    };
    const gb = {};
    class hb {
        constructor(a, b) {
            this.g = b === gb ? a : "";
            this.na = !0
        }
        ga() {
            return this.g
        }
    }
    hb.prototype.toString = function() {
        return this.g.toString()
    };
    var ib = new hb("", gb);
    var jb;
    a: {
        const a = l.navigator;
        if (a) {
            const b = a.userAgent;
            if (b) {
                jb = b;
                break a
            }
        }
        jb = ""
    }
    let y = jb;

    function z(a) {
        return -1 != y.indexOf(a)
    };

    function kb() {
        return z("Firefox") || z("FxiOS")
    }

    function lb() {
        return (z("Chrome") || z("CriOS")) && !z("Edge")
    };
    const mb = {};

    function nb(a) {
        return a instanceof ob && a.constructor === ob ? a.g : "type_error:SafeHtml"
    }
    class ob {
        constructor(a, b, c) {
            this.g = c === mb ? a : "";
            this.h = b;
            this.na = this.Zb = !0
        }
        Ub() {
            return this.h
        }
        ga() {
            return this.g.toString()
        }
        toString() {
            return this.g.toString()
        }
    };

    function pb(a) {
        qb || (qb = new rb);
        var b = qb;
        const c = b.g;
        if (c[0]) {
            var d = b.h;
            b = b.j ? d : -1;
            do b = (b + 1) % 0, a(c[b]); while (b !== d)
        }
    }
    var rb = class {
            constructor() {
                this.clear()
            }
            clear() {
                this.g = [];
                this.h = -1;
                this.j = !1
            }
        },
        qb;

    function sb(a) {
        this.g = a || "";
        ya || (ya = new xa);
        this.h = ya
    }

    function tb(a) {
        return 10 > a ? "0" + a : String(a)
    }

    function ub(a) {
        sb.call(this, a)
    }
    oa(ub, sb);

    function vb() {
        const a = new ub,
            b = [];
        pb(c => {
            var d = b.push,
                e = [];
            e.push(a.g, " ");
            var f = new Date(c.g());
            e.push("[", tb(f.getFullYear() - 2E3) + tb(f.getMonth() + 1) + tb(f.getDate()) + " " + tb(f.getHours()) + ":" + tb(f.getMinutes()) + ":" + tb(f.getSeconds()) + "." + tb(Math.floor(f.getMilliseconds() / 10)), "] ");
            f = e.push;
            var g = a.h.get();
            g = (c.g() - g) / 1E3;
            var k = g.toFixed(3),
                n = 0;
            if (1 > g) n = 2;
            else
                for (; 100 > g;) n++, g *= 10;
            for (; 0 < n--;) k = " " + k;
            f.call(e, "[", k, "s] ");
            e.push("[", c.h(), "] ");
            e.push(c.getMessage());
            e.push("\n");
            d.call(b, e.join(""))
        });
        return b
    };

    function wb(a, b = `unexpected value ${a}!`) {
        throw Error(b);
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var xb = class {};
    class yb extends xb {
        constructor(a) {
            super();
            this.g = a
        }
        toString() {
            return this.g
        }
    }
    var zb = new yb("about:invalid#zTSz");
    class Ab {
        constructor(a) {
            this.Se = a
        }
    }

    function Bb(a) {
        return new Ab(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const Cb = [Bb("data"), Bb("http"), Bb("https"), Bb("mailto"), Bb("ftp"), new Ab(a => /^[^:]*([/?#]|$)/.test(a))];

    function Db(a, b = Cb) {
        for (let c = 0; c < b.length; ++c) {
            const d = b[c];
            if (d instanceof Ab && d.Se(a)) return new yb(a)
        }
    };

    function Eb(a) {
        if (a instanceof xb)
            if (a instanceof yb) a = a.g;
            else throw Error("");
        else a = a instanceof db && a.constructor === db ? a.g : "type_error:SafeUrl";
        return a
    };

    function Fb(a, b) {
        a.src = Na(b);
        var c;
        b = (a.ownerDocument && a.ownerDocument.defaultView || window).document;
        const d = null === (c = b.querySelector) || void 0 === c ? void 0 : c.call(b, "script[nonce]");
        (c = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c)
    };

    function Gb() {
        return z("iPhone") && !z("iPod") && !z("iPad")
    }

    function Hb() {
        return Gb() || z("iPad") || z("iPod")
    }

    function Ib() {
        var a = "";
        z("Windows") ? (a = /Windows (?:NT|Phone) ([0-9.]+)/, a = (a = a.exec(y)) ? a[1] : "0.0") : Hb() ? (a = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, a = (a = a.exec(y)) && a[1].replace(/_/g, ".")) : z("Macintosh") ? (a = /Mac OS X ([0-9_.]+)/, a = (a = a.exec(y)) ? a[1].replace(/_/g, ".") : "10") : -1 != y.toLowerCase().indexOf("kaios") ? (a = /(?:KaiOS)\/(\S+)/i, a = (a = a.exec(y)) && a[1]) : z("Android") ? (a = /Android\s+([^\);]+)(\)|;)/, a = (a = a.exec(y)) && a[1]) : z("CrOS") && (a = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, a = (a = a.exec(y)) && a[1]);
        return a || ""
    };

    function Jb(a) {
        Jb[" "](a);
        return a
    }
    Jb[" "] = ia;

    function Kb(a) {
        var b = Lb;
        return Object.prototype.hasOwnProperty.call(b, 9) ? b[9] : b[9] = a(9)
    };
    var Mb = z("Opera"),
        Nb = z("Trident") || z("MSIE"),
        Ob = z("Edge"),
        Pb = z("Gecko") && !(-1 != y.toLowerCase().indexOf("webkit") && !z("Edge")) && !(z("Trident") || z("MSIE")) && !z("Edge"),
        Qb = -1 != y.toLowerCase().indexOf("webkit") && !z("Edge"),
        Rb;
    a: {
        var Sb = "",
            Tb = function() {
                if (Pb) return /rv:([^\);]+)(\)|;)/.exec(y);
                if (Ob) return /Edge\/([\d\.]+)/.exec(y);
                if (Nb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(y);
                if (Qb) return /WebKit\/(\S+)/.exec(y);
                if (Mb) return /(?:Version)[ \/]?(\S+)/.exec(y)
            }();Tb && (Sb = Tb ? Tb[1] : "");
        if (Nb) {
            var Ub, Vb = l.document;
            Ub = Vb ? Vb.documentMode : void 0;
            if (null != Ub && Ub > parseFloat(Sb)) {
                Rb = String(Ub);
                break a
            }
        }
        Rb = Sb
    }
    var Wb = Rb,
        Lb = {};

    function Xb() {
        return Kb(function() {
            let a = 0;
            const b = Ta(String(Wb)).split("."),
                c = Ta("9").split("."),
                d = Math.max(b.length, c.length);
            for (let g = 0; 0 == a && g < d; g++) {
                var e = b[g] || "",
                    f = c[g] || "";
                do {
                    e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    if (0 == e[0].length && 0 == f[0].length) break;
                    a = bb(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || bb(0 == e[2].length, 0 == f[2].length) || bb(e[2], f[2]);
                    e = e[3];
                    f = f[3]
                } while (0 == a)
            }
            return 0 <= a
        })
    };
    var Yb = /^[\w+/_-]+[=]{0,2}$/;

    function Zb(a, b) {
        b = (b || l).document;
        return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && Yb.test(a) ? a : "" : ""
    };

    function $b(a, b) {
        const c = a.split("%s");
        let d = "";
        const e = Array.prototype.slice.call(arguments, 1);
        for (; e.length && 1 < c.length;) d += c.shift() + e.shift()
    }

    function ac(a) {
        return null == a ? "" : String(a)
    }

    function bc(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };

    function cc(a, b) {
        za(b, function(c, d) {
            c && "object" == typeof c && c.na && (c = c.ga());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : dc.hasOwnProperty(d) ? a.setAttribute(dc[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    }
    var dc = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function ec(a, b, c, d) {
        function e(k) {
            k && b.appendChild("string" === typeof k ? a.createTextNode(k) : k)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            if (!ja(f) || ka(f) && 0 < f.nodeType) e(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (ka(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                ua(g ? wa(f) : f, e)
            }
        }
    }

    function fc(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function gc(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function hc(a) {
        this.g = a || l.document || document
    }

    function ic(a, b) {
        a = a.g;
        b = b && "*" != b ? String(b).toUpperCase() : "";
        a.querySelectorAll && a.querySelector && b ? b = a.querySelectorAll(b) : b = a.getElementsByTagName(b || "*");
        return b
    }
    h = hc.prototype;
    h.Wc = function(a, b, c) {
        var d = this.g,
            e = arguments,
            f = e[1],
            g = fc(d, String(e[0]));
        f && ("string" === typeof f ? g.className = f : Array.isArray(f) ? g.className = f.join(" ") : cc(g, f));
        2 < e.length && ec(d, g, e, 2);
        return g
    };
    h.createElement = function(a) {
        return fc(this.g, a)
    };
    h.appendChild = function(a, b) {
        a.appendChild(b)
    };
    h.append = function(a, b) {
        ec(gc(a), a, arguments, 1)
    };
    h.removeNode = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    h.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };

    function jc(a, b, c) {
        a.timeOfStartCall = (new Date).getTime();
        var d = c || l,
            e = d.document,
            f = a.nonce || Zb("script[nonce]", d);
        f && !a.nonce && (a.nonce = f);
        if ("help" == a.flow) {
            a: {
                var g = ["document", "location", "href"];
                for (var k = d || l, n = 0; n < g.length; n++)
                    if (k = k[g[n]], null == k) {
                        g = null;
                        break a
                    }
                g = k
            }!a.helpCenterContext && g && (a.helpCenterContext = g.substring(0, 1200));g = !0;b && JSON && JSON.stringify && (k = JSON.stringify(b), (g = 1200 >= k.length) && (a.psdJson = k));g || (b = {
                invalidPsd: !0
            })
        }
        b = [a, b, c];
        d.GOOGLE_FEEDBACK_START_ARGUMENTS = b;
        c = a.serverUri ||
            "//www.google.com/tools/feedback";
        if (g = d.GOOGLE_FEEDBACK_START) g.apply(d, b);
        else {
            d = c + "/load.js?";
            for (var q in a) b = a[q], null == b || ka(b) || (d += encodeURIComponent(q) + "=" + encodeURIComponent(b) + "&");
            a = (e ? new hc(gc(e)) : sa || (sa = new hc)).createElement("SCRIPT");
            f && a.setAttribute("nonce", f);
            f = Ra(d);
            Fb(a, f);
            e.body.appendChild(a)
        }
    }
    ha("userfeedback.api.startFeedback", jc);
    var kc = () => ({
        sf: () => {
            const a = {};
            try {
                a.logs = vb().join("\n")
            } catch (b) {
                if (b instanceof Error && b.message.includes("goog.debug.LogBuffer.CAPACITY")) throw b;
            } finally {
                jc({
                    productId: 5250301,
                    productVersion: "chrome-apps-calculator_20211007_RC00_prod",
                    locale: navigator.language
                }, a)
            }
        }
    });
    var lc = "am ar bg bn ca cs da de el en en_gb es es_419 et fa fi fil fr gu hi hr hu id it iw ja kn ko lt lv ml mr ms nl no pl pt_br pt_pt ro ru sk sl sr sv sw ta te th tr uk vi zh_cn zh_tw".split(" ");
    let mc;

    function nc(a, b = () => {}, c = () => {}) {
        if (mc) throw Error("Trying to initialize error_collector twice.");
        mc = {
            $c: b,
            fc: c,
            Ke: a
        };
        self.addEventListener("error", oc);
        self.addEventListener("unhandledrejection", pc)
    }

    function qc(a) {
        const b = new Set;
        return JSON.stringify(a, function(c, d) {
            if ("object" === typeof d && null !== d) {
                if (b.has(d)) return "Maybe Circular";
                b.add(d)
            }
            return d
        })
    }

    function rc(a) {
        if (!mc) throw Error("error_collector not initialized");
        if (null === a || void 0 === a) mc.fc(a);
        else {
            var b = null,
                c = 0,
                d = 0;
            if (a instanceof Error) {
                b = a;
                var e = b.message
            } else if (a instanceof ErrorEvent) {
                d = d || a.colno;
                c = c || a.lineno;
                e = [];
                a.type && e.push(`ErrorEvent type: "${a.type}"`);
                a.message && e.push(`Message: "${a.message}"`);
                a.filename && e.push(`File: "${a.filename}"`);
                if (a.error instanceof Error) {
                    var f = a.error;
                    e.push(`Error: "${f.message}"`)
                } else a.error ? (a = JSON.stringify(a.error), e.push(`Error: ${a}`)) :
                    f = null === a.error ? null : void 0;
                e = a = e.join("\n");
                if (!e && !f) {
                    mc.fc(f);
                    return
                }
                b = null !== f && void 0 !== f ? f : null
            } else if ("string" === typeof a) e = a;
            else try {
                e = JSON.stringify(a)
            } catch (g) {
                e = qc(a)
            }
            e = e.replace(/https?:\/\/[\w\.\-=_?#&$%\/]+/gi, "<url>");
            e = e.replace(/[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}/gi, "<uuid>");
            e = e.replace(/\w{30,}/g, "<long-word>");
            e = e.replace(/-?\b\d+\.\d+/g, "<NN>");
            e = e.replace(/-?\b\d{2,}/g, "<NN>");
            if (b && b.message !== e) try {
                b.message = e
            } catch (g) {}
            try {
                mc.Ke.kc(e, self.location.href,
                    c, d, b)
            } catch (g) {
                mc.$c(g)
            }
        }
    }

    function oc(a) {
        rc(a)
    }

    function pc(a) {
        rc(a.reason)
    };
    /*

     Copyright 2018 Google LLC

     Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

     The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    */
    var sc = class {
        constructor() {
            this.promise = new Promise(a => {
                this.g = a
            })
        }
    };

    function tc(a) {
        a.then(() => {})
    };
    var uc = class {
        constructor(a, b) {
            this.type = a;
            Object.assign(this, b)
        }
    };
    var vc = class {
        constructor() {
            this.l = new Map
        }
        addEventListener(a, b) {
            this.o(a).add(b)
        }
        removeEventListener(a, b) {
            this.o(a).delete(b)
        }
        dispatchEvent(a) {
            a.target = this;
            const b = this.o(a.type);
            for (const c of b) c(a)
        }
        o(a) {
            this.l.has(a) || this.l.set(a, new Set);
            return this.l.get(a)
        }
    };

    function wc(a) {
        const b = location.href;
        return (new URL(a, b)).href === (new URL("/nan", b)).href
    };
    var xc = class extends vc {
        constructor() {
            super();
            this.K = {};
            this.V = 0;
            this.B = new sc;
            this.m = new sc;
            this.A = new sc;
            this.T = 0;
            this.v = new Set;
            this.G = () => {
                const a = this.h,
                    b = a.installing;
                0 < this.V || !wc(b.scriptURL) || performance.now() > this.T + 6E4 ? (this.la = b, a.removeEventListener("updatefound", this.G)) : (this.g = b, this.v.add(b), this.B.g(b));
                ++this.V;
                b.addEventListener("statechange", this.F)
            };
            this.F = a => {
                const b = this.h,
                    c = a.target,
                    d = c.state,
                    e = c === this.la,
                    f = {
                        uc: c,
                        Pe: e,
                        Dd: a
                    };
                !e && this.D && (f.Re = !0);
                this.dispatchEvent(new uc(d,
                    f));
                "installed" === d ? this.Jb = self.setTimeout(() => {
                    "installed" === d && b.waiting === c && this.dispatchEvent(new uc("waiting", f))
                }, 200) : "activating" === d && (clearTimeout(this.Jb), e || this.m.g(c))
            };
            this.va = a => {
                const b = this.g,
                    c = b !== navigator.serviceWorker.controller;
                this.dispatchEvent(new uc("controlling", {
                    Pe: c,
                    Dd: a,
                    uc: b,
                    Re: this.D
                }));
                c || this.A.g(b)
            };
            this.kb = a => v(this, function*() {
                const b = a.data,
                    c = a.source;
                yield void 0 !== this.g ? Promise.resolve(this.g) : this.B.promise;
                this.v.has(c) && this.dispatchEvent(new uc("message", {
                    data: b,
                    uc: c,
                    Dd: a
                }))
            });
            this.$f = "/nan";
            this.K = {};
            navigator.serviceWorker.addEventListener("message", this.kb)
        }
        register({
            rg: a = !1
        } = {}) {
            return v(this, function*() {
                a || "complete" === document.readyState || (yield new Promise(c => window.addEventListener("load", c)));
                this.D = !!navigator.serviceWorker.controller;
                this.j = this.ua();
                this.h = yield this.Ib();
                this.j && (this.g = this.j, this.m.g(this.j), this.A.g(this.j), this.j.addEventListener("statechange", this.F, {
                    once: !0
                }));
                const b = this.h.waiting;
                b && wc(b.scriptURL) && (this.g =
                    b, tc(Promise.resolve().then(() => {
                        this.dispatchEvent(new uc("waiting", {
                            uc: b,
                            xg: !0
                        }))
                    })));
                this.g && (this.B.g(this.g), this.v.add(this.g));
                this.h.addEventListener("updatefound", this.G);
                navigator.serviceWorker.addEventListener("controllerchange", this.va, {
                    once: !0
                });
                return this.h
            })
        }
        update() {
            return v(this, function*() {
                this.h && (yield this.h.update())
            })
        }
        get active() {
            return this.m.promise
        }
        ua() {
            const a = navigator.serviceWorker.controller;
            if (a && wc(a.scriptURL)) return a
        }
        Ib() {
            return v(this, function*() {
                try {
                    const a = nan
                    this.T = performance.now();
                    return a
                } catch (a) {
                    throw a;
                }
            })
        }
    };

    function yc(a = window) {
        var b = Number(a.localStorage.getItem("loads-started-Y2FsY3VsYXRvcg") || 0);
        b = isNaN(b) ? 0 : b;
        a.localStorage.setItem("loads-started-Y2FsY3VsYXRvcg", String(b + 1));
        return b
    }

    function zc(a = window) {
        a.localStorage.removeItem("loads-started-Y2FsY3VsYXRvcg")
    }

    function Ac() {
        var a = window;
        return v(this, function*() {
            var b = Bc(a);
            if (2 <= yc(a) && (b = yield b) && b.active)
                for (yield b.update(); b.installing;) yield new Promise(c => void setTimeout(c, 100));
            a.addEventListener("beforeunload", () => void zc(a));
            setTimeout(() => void zc(a), 3E4)
        })
    }

    function Bc(a = window) {
        return v(this, function*() {
            if ("serviceWorker" in a.navigator) {
                var b = new xc;
                try {
                    var c = yield b.register()
                } catch (f) {
                    b = f;
                    a: {
                        if ("object" === typeof b && null !== b) {
                            if ("name" in b && "string" === typeof b.name) {
                                var d = b.name;
                                break a
                            }
                            if ("constructor" in b && "function" === typeof b.constructor) {
                                d = b.constructor.name;
                                break a
                            }
                        }
                        d = "Error"
                    }
                    var e = "";
                    if ("object" === typeof b && null !== b && "message" in b) e = String(b.message);
                    else if ("string" === typeof b) e = b;
                    else if ("object" === typeof b && null !== b && "cause" in b) e = `[${b.type}] ${b.cause}`;
                    else try {
                        e = JSON.stringify(b)
                    } catch (g) {
                        e = String(b)
                    }
                    e = Error(`${"Service Worker registration failed"}: ${""}${e}`);
                    e.name = d;
                    b instanceof Error && b.stack && (e.stack += "\n" + b.stack);
                    b = e;
                    mc ? rc(b) : (console.error(b), console.error(Error("errorCollector.report() invoked without a Spy")), d = new ErrorEvent("unhandledrejection"), d.reason = b, self.dispatchEvent(d))
                }
                return c
            }
        })
    };

    function Cc() {
        window.LOCALE_TRANSLATIONS || (window.LOCALE_TRANSLATIONS = new Map);
        return window.LOCALE_TRANSLATIONS
    }

    function Dc(a) {
        return Cc().get(a)
    };
    var Ec = class {
            constructor() {
                this.MSG_OVERFLOW_MENU = "More options";
                this.MSG_ABOUT = "About";
                this.MSG_ABOUT_APP = "ReadMe";
                this.MSG_LICENSES = "Licenses";
                this.MSG_GITHUB = "GitHub"
            }
        },
        Fc = "en".replace("-", "_").toLowerCase(),
        Gc = new Ec;
    Cc().set(Fc, Gc);
    var Hc = "af am ar az be bg bn bs ca cs da de el en en_gb es es_419 et eu fa fi fil fr fr_ca gl gu hi hr hu hy id is it iw ja ka kk km kn ko ky lo lt lv mk ml mn mr ms my ne nl no pa pl pt_br pt_pt ro ru si sk sl sq sr sv sw ta te th tk tr uk ur uz vi zh_cn zh_hk zh_tw zu en_xa ar_xb".split(" ");

    function Ic(a, b = Hc) {
        a = a.replace("-", "_").toLowerCase();
        if (b.includes(a)) return a;
        a = (a = a.match(/^\w{2,3}([-_]|$)/)) ? a[0].replace(/[_-]/g, "") : "";
        return b.includes(a) ? a : null
    }

    function Jc(a, b, c = Hc) {
        a = new URLSearchParams(a);
        return (a = a.has("hl") ? Ic(a.get("hl"), c) : null) ? a : (b = Ic(b, c)) ? b : "en"
    }

    function Kc(a = Hc) {
        var b, c, d = null === (b = self.document) || void 0 === b ? void 0 : b.documentElement.lang;
        d = d ? d : navigator.language;
        d = "he" === d ? "iw" : d;
        const e = void 0 !== (null === (c = self.location) || void 0 === c ? void 0 : c.search) ? self.location.search : "";
        return Jc(e, "nb" === d ? "no" : d, a)
    };
    const Lc = new Map;

    function Mc(a) {
        return v(this, function*() {
            const b = Na(a).toString();
            var c = Lc.get(b);
            if (c) return c;
            c = Nc(a);
            Lc.set(b, c);
            return c
        })
    }

    function Nc(a) {
        return v(this, function*() {
            const b = document.createElement("script");
            Fb(b, a);
            const c = new Promise((e, f) => {
                    b.onerror = f;
                    b.onload = () => {
                        e()
                    }
                }),
                d = window.WebComponents;
            d && d.waitFor && d.waitFor(c);
            document.head.appendChild(b);
            try {
                yield c
            } finally {
                document.head.removeChild(b)
            }
        })
    };

    function Oc() {
        var a = Kc();
        return v(this, function*() {
            let b = Dc(a);
            if (b) return b;
            const c = Oa({
                locale: a
            });
            try {
                return yield Mc(c), b = Dc(a), void 0 === b && console.error(`File ${Na(c).toString()} did not register translations for locale ${a}`), b
            } catch (d) {
                d instanceof Event && !0 === d.isTrusted && "type" in d && "error" === d.type ? console.error(`Failed to load ${Na(c).toString()} in cachingSafeLoad()`) : console.error(d.message)
            }
        })
    }

    function Pc() {
        var a = Qc;
        return v(this, function*() {
            const b = yield Oc();
            return b ? b : a
        })
    };
    let Qc = new Ec;

    function Rc() {
        return v(this, function*() {
            Qc = yield Pc()
        })
    };
    /*

     Copyright 2017 Google LLC
     SPDX-License-Identifier: BSD-3-Clause
    */
    var Sc = ({
        Ya: a,
        za: b
    }) => (c, d) => {
        var e;
        if (void 0 !== d) {
            const f = c.constructor;
            void 0 !== b && Object.defineProperty(c, d, b(d));
            null === a || void 0 === a ? void 0 : a(f, d)
        } else {
            const f = null !== (e = c.$e) && void 0 !== e ? e : c.key;
            c = void 0 != b ? {
                kind: "method",
                bf: "prototype",
                key: f,
                za: b(c.key)
            } : Object.assign(Object.assign({}, c), {
                key: f
            });
            void 0 != a && (c.Ya = function(g) {
                a(g, f)
            });
            return c
        }
    };
    const Tc = (a, b) => ({
        kind: b.kind,
        elements: b.elements,
        Ya(c) {
            window.customElements.define(a, c)
        }
    });
    var D = a => b => {
        "function" === typeof b ? window.customElements.define(a, b) : b = Tc(a, b);
        return b
    };

    function Uc() {
        var a = {
            passive: !0
        };
        return Sc({
            Ya: (b, c) => {
                Object.assign(b.prototype[c], a)
            }
        })
    };
    const Wc = (a, b) => "method" !== b.kind || !b.za || "value" in b.za ? {
        kind: "field",
        key: Symbol(),
        bf: "own",
        za: {},
        $e: b.key,
        rd() {
            "function" === typeof b.rd && (this[b.key] = b.rd.call(this))
        },
        Ya(c) {
            Vc(c, b.key, a)
        }
    } : Object.assign(Object.assign({}, b), {
        Ya(c) {
            Vc(c, b.key, a)
        }
    });

    function E(a) {
        return (b, c) => {
            void 0 !== c ? (Vc(b.constructor, c, a), b = void 0) : b = Wc(a, b);
            return b
        }
    };
    const Xc = Element.prototype,
        Yc = Xc.msMatchesSelector || Xc.webkitMatchesSelector;

    function Zc(a = "") {
        return Sc({
            za: () => ({
                get() {
                    var b, c;
                    let d = null === (c = null === (b = this.Ea) || void 0 === b ? void 0 : b.querySelector("slot:not([name])")) || void 0 === c ? void 0 : c.assignedNodes({
                        flatten: !0
                    });
                    d && a && (d = d.filter(e => e.nodeType === Node.ELEMENT_NODE && (e.matches ? e.matches(a) : Yc.call(e, a))));
                    return d
                },
                enumerable: !0,
                configurable: !0
            })
        })
    };

    function $c() {
        return Sc({
            za: () => ({
                get() {
                    var a;
                    return v(this, function*() {
                        yield this.Ra;
                        return null === (a = this.Ea) || void 0 === a ? void 0 : a.querySelector("mwc-ripple")
                    })
                },
                enumerable: !0,
                configurable: !0
            })
        })
    };

    function F(a, b) {
        return Sc({
            za: c => {
                const d = {
                    get() {
                        var e, f;
                        return null !== (f = null === (e = this.Ea) || void 0 === e ? void 0 : e.querySelector(a)) && void 0 !== f ? f : null
                    },
                    enumerable: !0,
                    configurable: !0
                };
                if (b) {
                    const e = "symbol" === typeof c ? Symbol() : `__${c}`;
                    d.get = function() {
                        var f, g;
                        void 0 === this[e] && (this[e] = null !== (g = null === (f = this.Ea) || void 0 === f ? void 0 : f.querySelector(a)) && void 0 !== g ? g : null);
                        return this[e]
                    }
                }
                return d
            }
        })
    };

    function G() {
        return E(Object.assign(Object.assign({}, void 0), {
            state: !0
        }))
    };
    var ad, bd;
    const cd = new Set,
        dd = new Map;
    null !== (ad = (bd = window).litHtmlPlatformSupport) && void 0 !== ad ? ad : bd.litHtmlPlatformSupport = (a, b) => {
        const c = window;
        if (void 0 !== c.ShadyCSS && (!c.ShadyCSS.nativeShadow || c.ShadyCSS.ApplyShim)) {
            var d = t => t,
                e = t => void 0 !== t && !cd.has(t),
                f = t => {
                    let w = dd.get(t);
                    void 0 === w && dd.set(t, w = []);
                    return w
                },
                g = (t, w) => {
                    const A = f(t),
                        B = 0 !== A.length;
                    if (B) {
                        const x = document.createElement("style");
                        x.textContent = A.join("\n");
                        w.content.appendChild(x)
                    }
                    cd.add(t);
                    dd.delete(t);
                    c.ShadyCSS.prepareTemplateStyles(w, t);
                    B && c.ShadyCSS.nativeShadow &&
                        (t = w.content.querySelector("style"), null !== t && w.content.appendChild(t))
                },
                k = new Map,
                n = a.createElement;
            a.createElement = function(t, w) {
                t = n.call(a, t, w);
                w = null === w || void 0 === w ? void 0 : w.scope;
                void 0 !== w && (c.ShadyCSS.nativeShadow || c.ShadyCSS.prepareTemplateDom(t, w), e(w) && f(w).push(...Array.from(t.content.querySelectorAll("style")).map(A => {
                    var B;
                    null === (B = A.parentNode) || void 0 === B ? void 0 : B.removeChild(A);
                    return A.textContent
                })));
                return t
            };
            var q = document.createDocumentFragment(),
                r = document.createComment("");
            b = b.prototype;
            var u = b.ha;
            b.ha = function(t, w = this) {
                var A, B, x;
                const C = d(this.Y).parentNode;
                var ca = null === (A = this.options) || void 0 === A ? void 0 : A.scope;
                if ((C instanceof ShadowRoot || C === (null === (B = this.options) || void 0 === B ? void 0 : B.vg)) && e(ca)) {
                    const H = this.Y,
                        Ya = this.ca;
                    q.appendChild(r);
                    this.Y = r;
                    this.ca = null;
                    u.call(this, t, w);
                    t = (null === t || void 0 === t ? 0 : t._$litType$) ? this.H.Lb.Ma : document.createElement("template");
                    g(ca, t);
                    q.removeChild(r);
                    if (null === (x = c.ShadyCSS) || void 0 === x ? 0 : x.nativeShadow) ca = t.content.querySelector("style"),
                        null !== ca && q.appendChild(ca.cloneNode(!0));
                    C.insertBefore(q, Ya);
                    this.Y = H;
                    this.ca = Ya
                } else u.call(this, t, w)
            };
            b.Oc = function(t) {
                var w, A = null === (w = this.options) || void 0 === w ? void 0 : w.scope;
                let B = k.get(A);
                void 0 === B && k.set(A, B = new Map);
                A = B.get(t.L);
                void 0 === A && B.set(t.L, A = new a(t, this.options));
                return A
            }
        }
    };
    let ed = "";
    if (window.Symbol) {
        const a = Symbol();
        "symbol" !== typeof a && (ed = Object.keys(a)[0])
    }
    const fd = "" !== ed;
    var gd = fd ? a => null != a && void 0 !== a[ed] : () => !1;
    if (fd && !window.Symbol.for) {
        const a = new Map;
        window.Symbol.for = b => {
            a.has(b) || a.set(b, Symbol(b));
            return a.get(b)
        }
    };
    var hd, id;
    null !== (hd = (id = window).reactiveElementPlatformSupport) && void 0 !== hd ? hd : id.reactiveElementPlatformSupport = a => {
        const b = window;
        if (void 0 !== b.ShadyCSS && (!b.ShadyCSS.nativeShadow || b.ShadyCSS.ApplyShim)) {
            a = a.ReactiveElement.prototype;
            b.ShadyDOM && b.ShadyDOM.inUse && !0 === b.ShadyDOM.noPatch && b.ShadyDOM.patchElementProto(a);
            var c = a.ya;
            a.ya = function() {
                var f, g, k;
                const n = this.localName;
                if (b.ShadyCSS.nativeShadow) return c.call(this);
                if (!this.constructor.hasOwnProperty("__scoped")) {
                    this.constructor.__scoped = !0;
                    const q =
                        this.constructor.Sb.map(r => r instanceof CSSStyleSheet ? Array.from(r.cssRules).reduce((u, t) => u + t.cssText, "") : r.cssText);
                    null === (g = null === (f = b.ShadyCSS) || void 0 === f ? void 0 : f.ScopingShim) || void 0 === g ? void 0 : g.prepareAdoptedCssText(q, n);
                    void 0 === this.constructor.oe && b.ShadyCSS.prepareTemplateStyles(document.createElement("template"), n)
                }
                return null !== (k = this.shadowRoot) && void 0 !== k ? k : this.attachShadow(this.constructor.Kd)
            };
            var d = a.connectedCallback;
            a.connectedCallback = function() {
                d.call(this);
                this.ub && b.ShadyCSS.styleElement(this)
            };
            var e = a.Kb;
            a.Kb = function(f) {
                this.ub || b.ShadyCSS.styleElement(this);
                e.call(this, f)
            }
        }
    };
    var jd, kd;
    null !== (jd = (kd = window).litElementPlatformSupport) && void 0 !== jd ? jd : kd.litElementPlatformSupport = a => {
        a = a.LitElement;
        const b = window;
        if (void 0 !== b.ShadyCSS && (!b.ShadyCSS.nativeShadow || b.ShadyCSS.ApplyShim)) {
            a.oe = !0;
            a = a.prototype;
            var c = a.ya;
            a.ya = function() {
                this.jc.scope = this.localName;
                return c.call(this)
            }
        }
    };
    /*

     Copyright 2019 Google LLC
     SPDX-License-Identifier: BSD-3-Clause
    */
    /*

     Copyright 2018 Google LLC
     SPDX-License-Identifier: BSD-3-Clause
    */
    function ld(a) {
        return a && a.na ? a.ga() : a
    }
    const md = {
        CONSTANT: {
            Da(a) {
                return a instanceof Fa
            },
            Ga: Ia
        },
        JAVASCRIPT: {
            Da(a) {
                return a instanceof Ka || !1
            },
            Ga: function(a) {
                a = a instanceof Ka && a.constructor === Ka ? a.g : "type_error:SafeScript";
                return a
            }
        },
        HTML: {
            Da(a) {
                return a instanceof ob || !1
            },
            Ga: function(a) {
                return nb(a)
            }
        },
        RESOURCE_URL: {
            Da(a) {
                return a instanceof Ma || !1
            },
            Ga: function(a) {
                return Na(a)
            }
        },
        STRING: {
            Da(a) {
                return a instanceof Object
            },
            Ga: ld
        },
        STYLE: {
            Da(a) {
                return a instanceof fb || !1
            },
            Ga: function(a) {
                a = a instanceof fb && a.constructor === fb ? a.g : "type_error:SafeStyle";
                return a
            }
        },
        URL: {
            Da(a) {
                return a instanceof db || a instanceof xb
            },
            Ga: Eb
        }
    };

    function nd(a, b) {
        return b
    }
    const od = {
        CONSTANT: nd,
        JAVASCRIPT: nd,
        HTML: a => {
            if (a instanceof ob) var b = a;
            else {
                var c = "object" == typeof a;
                b = null;
                c && a.Zb && (b = a.Ub());
                a = c && a.na ? a.ga() : String(a);
                ab.test(a) && (-1 != a.indexOf("&") && (a = a.replace(Ua, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(Va, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(Wa, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(Xa, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(Za, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace($a, "&#0;")));
                a = (c = Ea()) ? c.createHTML(a) : a;
                b = new ob(a, b, mb)
            }
            return nb(b)
        },
        RESOURCE_URL: nd,
        STRING: String,
        STYLE: nd,
        URL: (a, b) => {
            a = Db(a);
            return void 0 === a ? b : a.toString()
        }
    };

    function pd(a, b, c) {
        if (Object.hasOwnProperty.call(qd, a) && (a = qd[a], Object.hasOwnProperty.call(a, b) && (a = a[b], a instanceof Array))) {
            let e = null,
                f = !1;
            for (let g = 0, k = a.length; g < k; ++g) {
                const n = a[g];
                var d = n.P;
                if (!d) return n.C;
                null === e && (e = {});
                d = Object.hasOwnProperty.call(e, d) ? e[d] : e[d] = c(d);
                if (d === n.S) return n.C;
                null == d && (f = !0)
            }
            if (f) return null
        }
        b = rd[b];
        return "number" === typeof b ? b : null
    }
    const rd = {
            align: 1,
            alt: 1,
            "aria-activedescendant": 10,
            "aria-atomic": 1,
            "aria-autocomplete": 1,
            "aria-busy": 1,
            "aria-checked": 1,
            "aria-controls": 10,
            "aria-disabled": 1,
            "aria-dropeffect": 1,
            "aria-expanded": 1,
            "aria-haspopup": 1,
            "aria-hidden": 1,
            "aria-invalid": 1,
            "aria-label": 1,
            "aria-labelledby": 10,
            "aria-level": 1,
            "aria-live": 1,
            "aria-multiline": 1,
            "aria-multiselectable": 1,
            "aria-orientation": 1,
            "aria-owns": 10,
            "aria-posinset": 1,
            "aria-pressed": 1,
            "aria-readonly": 1,
            "aria-relevant": 1,
            "aria-required": 1,
            "aria-selected": 1,
            "aria-setsize": 1,
            "aria-sort": 1,
            "aria-valuemax": 1,
            "aria-valuemin": 1,
            "aria-valuenow": 1,
            "aria-valuetext": 1,
            async: 8,
            autocapitalize: 1,
            autocomplete: 1,
            autocorrect: 1,
            autofocus: 1,
            autoplay: 1,
            bgcolor: 1,
            border: 1,
            cellpadding: 1,
            cellspacing: 1,
            checked: 1,
            cite: 3,
            "class": 1,
            color: 1,
            cols: 1,
            colspan: 1,
            contenteditable: 1,
            controls: 1,
            datetime: 1,
            dir: 8,
            disabled: 1,
            download: 1,
            draggable: 1,
            enctype: 1,
            face: 1,
            "for": 10,
            formenctype: 1,
            frameborder: 1,
            height: 1,
            hidden: 1,
            href: 4,
            hreflang: 1,
            id: 10,
            ismap: 1,
            itemid: 1,
            itemprop: 1,
            itemref: 1,
            itemscope: 1,
            itemtype: 1,
            label: 1,
            lang: 1,
            list: 10,
            loading: 8,
            loop: 1,
            max: 1,
            maxlength: 1,
            media: 1,
            min: 1,
            minlength: 1,
            multiple: 1,
            muted: 1,
            name: 10,
            nonce: 1,
            open: 1,
            placeholder: 1,
            poster: 3,
            preload: 1,
            rel: 1,
            required: 1,
            reversed: 1,
            role: 1,
            rows: 1,
            rowspan: 1,
            selected: 1,
            shape: 1,
            size: 1,
            sizes: 1,
            slot: 1,
            span: 1,
            spellcheck: 1,
            src: 4,
            srcset: 11,
            start: 1,
            step: 1,
            style: 5,
            summary: 1,
            tabindex: 1,
            target: 8,
            title: 1,
            translate: 1,
            type: 1,
            valign: 1,
            value: 1,
            width: 1,
            wrap: 1
        },
        qd = {
            a: {
                href: [{
                    C: 3
                }]
            },
            area: {
                href: [{
                    C: 3
                }]
            },
            audio: {
                src: [{
                    C: 3
                }]
            },
            button: {
                formaction: [{
                    C: 3
                }],
                formmethod: [{
                    C: 1
                }]
            },
            form: {
                action: [{
                    C: 3
                }],
                method: [{
                    C: 1
                }]
            },
            iframe: {
                srcdoc: [{
                    C: 2
                }]
            },
            img: {
                src: [{
                    C: 3
                }]
            },
            input: {
                accept: [{
                    C: 1
                }],
                formaction: [{
                    C: 3
                }],
                formmethod: [{
                    C: 1
                }],
                pattern: [{
                    C: 1
                }],
                readonly: [{
                    C: 1
                }],
                src: [{
                    C: 3
                }]
            },
            link: {
                href: [{
                        C: 3,
                        P: "rel",
                        S: "alternate"
                    }, {
                        C: 3,
                        P: "rel",
                        S: "author"
                    }, {
                        C: 3,
                        P: "rel",
                        S: "bookmark"
                    }, {
                        C: 3,
                        P: "rel",
                        S: "canonical"
                    }, {
                        C: 3,
                        P: "rel",
                        S: "cite"
                    }, {
                        C: 3,
                        P: "rel",
                        S: "help"
                    }, {
                        C: 3,
                        P: "rel",
                        S: "icon"
                    }, {
                        C: 3,
                        P: "rel",
                        S: "license"
                    }, {
                        C: 3,
                        P: "rel",
                        S: "next"
                    }, {
                        C: 3,
                        P: "rel",
                        S: "prefetch"
                    }, {
                        C: 3,
                        P: "rel",
                        S: "dns-prefetch"
                    }, {
                        C: 3,
                        P: "rel",
                        S: "prerender"
                    },
                    {
                        C: 3,
                        P: "rel",
                        S: "preconnect"
                    }, {
                        C: 3,
                        P: "rel",
                        S: "preload"
                    }, {
                        C: 3,
                        P: "rel",
                        S: "prev"
                    }, {
                        C: 3,
                        P: "rel",
                        S: "search"
                    }, {
                        C: 3,
                        P: "rel",
                        S: "subresource"
                    }
                ]
            },
            script: {
                defer: [{
                    C: 1
                }]
            },
            source: {
                src: [{
                    C: 3
                }]
            },
            textarea: {
                readonly: [{
                    C: 1
                }]
            },
            video: {
                src: [{
                    C: 3
                }]
            }
        },
        sd = {
            a: 1,
            abbr: 1,
            address: 1,
            applet: 4,
            area: 5,
            article: 1,
            aside: 1,
            audio: 1,
            b: 1,
            base: 4,
            bdi: 1,
            bdo: 1,
            blockquote: 1,
            body: 1,
            br: 5,
            button: 1,
            canvas: 1,
            caption: 1,
            center: 1,
            cite: 1,
            code: 1,
            col: 5,
            colgroup: 1,
            command: 1,
            data: 1,
            datalist: 1,
            dd: 1,
            del: 1,
            details: 1,
            dfn: 1,
            dialog: 1,
            div: 1,
            dl: 1,
            dt: 1,
            em: 1,
            embed: 4,
            fieldset: 1,
            figcaption: 1,
            figure: 1,
            font: 1,
            footer: 1,
            form: 1,
            frame: 1,
            frameset: 1,
            h1: 1,
            h2: 1,
            h3: 1,
            h4: 1,
            h5: 1,
            h6: 1,
            head: 1,
            header: 1,
            hr: 5,
            html: 1,
            i: 1,
            iframe: 1,
            img: 5,
            input: 5,
            ins: 1,
            kbd: 1,
            label: 1,
            legend: 1,
            lh: 1,
            li: 1,
            link: 5,
            main: 1,
            map: 1,
            mark: 1,
            math: 4,
            menu: 1,
            meta: 4,
            meter: 1,
            nav: 1,
            noscript: 1,
            object: 4,
            ol: 1,
            optgroup: 1,
            option: 1,
            output: 1,
            p: 1,
            param: 5,
            picture: 1,
            pre: 1,
            progress: 1,
            q: 1,
            rb: 1,
            rp: 1,
            rt: 1,
            rtc: 1,
            ruby: 1,
            s: 1,
            samp: 1,
            script: 3,
            section: 1,
            select: 1,
            slot: 1,
            small: 1,
            source: 5,
            span: 1,
            strong: 1,
            style: 2,
            sub: 1,
            summary: 1,
            sup: 1,
            svg: 4,
            table: 1,
            tbody: 1,
            td: 1,
            template: 4,
            textarea: 6,
            tfoot: 1,
            th: 1,
            thead: 1,
            time: 1,
            title: 6,
            tr: 1,
            track: 5,
            u: 1,
            ul: 1,
            "var": 1,
            video: 1,
            wbr: 5
        },
        td = [{
            auto: !0,
            ltr: !0,
            rtl: !0
        }, {
            async: !0
        }, {
            eager: !0,
            lazy: !0
        }, {
            _self: !0,
            _blank: !0
        }],
        ud = {
            "*": {
                async: 1,
                dir: 0,
                loading: 2,
                target: 3
            }
        };

    function vd(a) {
        var b = wd;
        if (!b) {
            b = xd();
            const d = {};
            for (var c in b) d[b[c]] = c;
            b = wd = d
        }
        c = b[a];
        return "string" === typeof c ? c : String(a).replace(/([A-Z])/g, "-$1").toLowerCase()
    }

    function yd(a) {
        a = String(a).toLowerCase();
        const b = xd()[a];
        return "string" === typeof b ? b : bc(a)
    }

    function zd(a) {
        a = a.toLowerCase();
        a = xd()[a];
        return "string" === typeof a ? a : null
    }

    function xd() {
        if (!Ad) {
            const a = Object.assign({}, Bd);
            for (const b of Cd) a[b.toLowerCase()] = b;
            Ad = a
        }
        return Ad
    }
    const Cd = "aLink accessKey allowFullscreen bgColor cellPadding cellSpacing codeBase codeType contentEditable crossOrigin dateTime dirName formAction formEnctype formMethod formNoValidate formTarget frameBorder innerHTML innerText inputMode isMap longDesc marginHeight marginWidth maxLength mediaGroup minLength noHref noResize noShade noValidate noWrap nodeValue outerHTML outerText readOnly tabIndex textContent trueSpeed useMap vAlign vLink valueAsDate valueAsNumber valueType".split(" "),
        Bd = {
            accept_charset: "acceptCharset",
            "char": "ch",
            charoff: "chOff",
            checked: "defaultChecked",
            "class": "className",
            "for": "htmlFor",
            http_equiv: "httpEquiv",
            muted: "defaultMuted",
            selected: "defaultSelected",
            value: "defaultValue"
        };
    let Ad = null,
        wd = null;
    /*

     Copyright 2017 Google LLC
     SPDX-License-Identifier: BSD-3-Clause

    */
    const Dd = {},
        Ed = RegExp("^(?!(?:annotation-xml|color-profile|font-face|font-face(?:-(?:src|uri|format|name))?|missing-glyph)$)[a-z][a-z.0-9_\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u200c\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\udfff\uf900-\ufdcf\ufdf0-\ufffd]*-[\\-a-z.0-9_\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u200c\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\udfff\uf900-\ufdcf\ufdf0-\ufffd]*$");

    function Fd(a, b) {
        const c = window.customElements;
        return c && c.get(a) || !0 === Dd[a] ? 2 : "HTMLUnknownElement" === b.name ? 1 : "HTMLElement" === b.name && Ed.test(a) ? 3 : 0
    };
    /*

     Copyright 2020 Google LLC
     SPDX-License-Identifier: BSD-3-Clause
    */
    function Gd(a, b) {
        var c, d;
        switch (b) {
            case "innerHTML":
                return 1 === Hd(a) ? 2 : null;
            case "textContent":
                return a = Hd(a), 1 === a || 6 === a ? 1 : null;
            default:
                return null !== (d = null === (c = Id[a.localName]) || void 0 === c ? void 0 : c[b]) && void 0 !== d ? d : null
        }
    }

    function Hd(a) {
        const b = a.localName,
            c = Fd(b, a.constructor);
        switch (c) {
            case 0:
            case 1:
                return Jd(b, a);
            case 3:
            case 2:
                return 1;
            default:
                wb(c, "got an unknown element classification")
        }
    }

    function Jd(a, b) {
        var c = Object.hasOwnProperty.call(sd, a) ? sd[a] : null;
        return null !== c ? c : Object.hasOwnProperty.call(Kd, a) && b instanceof SVGElement ? Kd[a] : null
    }
    const Kd = {
            text: 1
        },
        Id = {
            audio: {
                currentTime: 1,
                srcObject: 1
            },
            video: {
                currentTime: 1,
                srcObject: 1
            }
        };
    const Ld = /(?!,)([^\t\n\f\r ]+)(?:[\t\n\f\r ]+([.0-9+\-]+[a-z]?))?/gi,
        Md = /[\t\n\f\r ]+/,
        Nd = /[\t\n\f\r ,]+/g;

    function Od(a) {
        return (a = a.split(Md, 2)) ? {
            url: a[0],
            metadata: a[1]
        } : null
    }

    function Pd(a) {
        let b = String(a.url).replace(Nd, encodeURIComponent);
        if (a = a.metadata) {
            Nd.lastIndex = 0;
            if (Nd.test(a)) return null;
            b += " " + a
        }
        return b
    }
    const Qd = (a, b, c) => c,
        Rd = {};

    function Sd(a, b, c) {
        const d = [, {
            ea(e, f, g) {
                return g
            },
            fa: void 0,
            ia: void 0,
            ja: void 0
        }, {
            ea: void 0,
            fa: void 0,
            ia: void 0,
            ja: "HTML"
        }];
        d[3] = {
            ea: void 0,
            fa: void 0,
            ia: Td,
            ja: "URL"
        };
        d[4] = {
            ea: void 0,
            fa: void 0,
            ia: Td,
            ja: "RESOURCE_URL"
        };
        d[5] = {
            ea: void 0,
            fa: void 0,
            ia: Ud,
            ja: "STYLE"
        };
        d[7] = {
            ea: void 0,
            fa: void 0,
            ia: Vd,
            ja: "JAVASCRIPT"
        };
        d[8] = {
            ea: void 0,
            fa(e, f, g) {
                g = String(g).toLowerCase();
                a: {
                    let k = null;
                    (e = ud[e]) && (k = e[f]);
                    if ("number" !== typeof k && ((e = ud["*"]) && (k = e[f]), "number" !== typeof k)) {
                        f = !1;
                        break a
                    }
                    f = !0 === td[k][String(g).toLowerCase()]
                }
                return f ?
                    g : Ud
            },
            ia: Ud,
            ja: void 0
        };
        d[9] = {
            ea: void 0,
            fa: void 0,
            ia: Ud,
            ja: "CONSTANT"
        };
        d[10] = {
            ea: void 0,
            fa(e, f, g) {
                return a.test(g) ? g : Ud
            },
            ia: Ud,
            ja: "CONSTANT"
        };
        d[11] = {
            ea(e, f, g, k) {
                if ("string" === typeof g) var n = (n = g.match(Ld)) ? n.map(Od).filter(Boolean) : [];
                else if (Array.isArray(g)) n = g;
                else return Td;
                var q = n;
                n = [];
                var r = [];
                const u = {};
                if (Array.isArray(q))
                    for (let t = 0, w = q.length; t < w; ++t) {
                        const A = q[t],
                            B = A && A.url;
                        if (B) {
                            const x = b(B, "URL", u);
                            if (x) {
                                const C = x !== u;
                                (C ? n : r).push({
                                    url: C ? x : B,
                                    metadata: A.metadata
                                })
                            }
                        }
                    } else r.push(q);
                q = r.length ?
                    JSON.stringify(r) : null;
                r = Rd;
                if (n.length) {
                    if (!Array.isArray(n)) throw Error();
                    r = n.map(Pd).filter(Boolean).join(" , ") || Rd
                }
                q && c && c(!0, `Failed to sanitize attribute value of <${e}>: <${e} ${f}="${g}">: ${q}`, k);
                return r === Rd ? Td : r
            },
            fa: void 0,
            ia: void 0,
            ja: void 0
        };
        return d
    }
    const {
        Wd: Ud,
        Vd,
        Xd: Td
    } = (() => {
        var a = (() => {
            const d = {
                createHTML: () => "zClosurez",
                createScript: () => " /*zClosurez*/ ",
                createScriptURL: () => "about:invalid#zClosurez"
            };
            return "undefined" !== typeof trustedTypes ? trustedTypes.createPolicy("polymer_resin", d) : d
        })();
        const b = a.createHTML(""),
            c = a.createScript("");
        a = a.createScriptURL("");
        return {
            Wd: b,
            Vd: c,
            Xd: a
        }
    })();
    var Wd = function(a) {
        function b(n) {
            const q = n.localName;
            if (!n.getAttribute("is") && 2 === Fd(q, n.constructor)) return k;
            (n = g[q]) || (n = g[q] = document.createElement(q));
            return n
        }
        let c = a.reportHandler || void 0;
        const d = a.safeTypesBridge || Qd;
        let e = /^$/;
        if (a = a.allowedIdentifierPrefixes)
            for (const n of a) e = new RegExp(e.source + "|^" + String(n).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"));
        c && c(!1, "initResin", null);
        const f = Sd(e, d, c),
            g = {},
            k = document.createElement("polyresinuncustomized");
        return function(n,
            q, r) {
            var u = n.nodeType;
            if (u !== Node.ELEMENT_NODE) {
                if (u === Node.TEXT_NODE) {
                    q = n.parentElement;
                    r = !q;
                    if (q && q.nodeType === Node.ELEMENT_NODE) {
                        u = q.localName;
                        var t = Fd(u, q.constructor);
                        switch (t) {
                            case 0:
                            case 1:
                                q = Jd(u, q);
                                r = 1 === q || 6 === q;
                                break;
                            case 3:
                            case 2:
                                r = !0;
                                break;
                            default:
                                wb(t, "got an unknown element classification")
                        }
                    }
                    if (r) return x => "" + d(x, "STRING", x)
                }
                return x => {
                    if (!x && x !== document.all) return x;
                    c && c(!0, `Failed to sanitize ${n.parentElement&&n.parentElement.nodeName} #text node to value ${x}`, n.parentElement);
                    return Ud
                }
            }
            const w = n.localName;
            u = b(n);
            let A = null;
            switch (r) {
                case "attribute":
                    if (yd(q) in u) break;
                    return x => x;
                case "property":
                    if (q in u) {
                        A = Gd(u, q);
                        break
                    }
                    if ((t = zd(q)) && t in u) break;
                    return x => x;
                default:
                    wb(r, "got an unknown resin type, expected either 'property' or 'attribute'")
            }
            const B = "attribute" === r ? q.toLowerCase() : vd(q);
            A || (A = pd(w, B, x => {
                const C = n.getAttribute(x);
                return !C || /[\[\{]/.test(x) ? null : C
            }));
            return x => {
                var C = Rd;
                let ca = null;
                if (!x && x !== document.all) return x;
                if (null != A) {
                    const H = f[A],
                        Ya = H.ja;
                    ca =
                        H.ia;
                    Ya && (C = d(x, Ya, Rd));
                    C === Rd && (H.fa ? (C = String(d(x, "STRING", x)), C = H.fa(w, B, C)) : H.ea && (C = H.ea(w, B, x, n)), C === ca && (C = Rd))
                }
                C === Rd && (C = ca || Ud, c && (x = void 0 !== x.ga ? x.ga() : x, c(!0, `Failed to sanitize attribute of <${w}>: <${w} ${B}="${x}">`, n)));
                return C
            }
        }
    }({
        allowedIdentifierPrefixes: [""],
        reportHandler: function() {},
        safeTypesBridge: (a, b, c) => {
            var d = md[b];
            return d.Da(a) && (d = d.Ga(a, c), d !== c) ? d : (0, od[b])(String(ld(a)), c)
        }
    });
    /*

     Copyright 2021 Google LLC
     SPDX-License-Identifier: BSD-3-Clause
    */
    var Xd, Yd, Zd, $d;
    const ae = window.trustedTypes,
        be = ae ? ae.createPolicy("lit-html", {
            createHTML: a => a
        }) : void 0,
        ce = a => a,
        de = () => ce,
        ee = `lit$${String(Math.random()).slice(9)}$`,
        fe = "?" + ee,
        ge = `<${fe}>`,
        he = document,
        ie = a => null === a || "object" != typeof a && "function" != typeof a || gd(a),
        je = Array.isArray,
        ke = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
        le = /--\x3e/g,
        me = />/g,
        ne = RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)", "g"),
        oe = /'/g,
        pe = /"/g,
        qe = /^(?:script|style|textarea)$/i;
    var I = (a, ...b) => ({
            ["_$litType$"]: 1,
            L: a,
            values: b
        }),
        re = Symbol.for("lit-noChange"),
        J = Symbol.for("lit-nothing");
    const se = new WeakMap,
        te = he.createTreeWalker(he, 129, null, !1);
    var ue = class {
        constructor({
            L: a,
            ["_$litType$"]: b
        }, c) {
            this.g = [];
            let d = 0,
                e = 0;
            const f = a.length - 1,
                g = this.g;
            const k = a.length - 1;
            var n = [];
            let q = 2 === b ? "<svg>" : "",
                r, u = ke;
            for (let B = 0; B < k; B++) {
                const x = a[B];
                let C = -1,
                    ca;
                var t = 0;
                let H;
                for (; t < x.length;) {
                    u.lastIndex = t;
                    H = u.exec(x);
                    if (null === H) break;
                    t = u.lastIndex;
                    u === ke ? "!--" === H[1] ? u = le : void 0 !== H[1] ? u = me : void 0 !== H[2] ? (qe.test(H[2]) && (r = new RegExp(`</${H[2]}`, "g")), u = ne) : void 0 !== H[3] && (u = ne) : u === ne ? ">" === H[0] ? (u = null !== r && void 0 !== r ? r : ke, C = -1) : void 0 === H[1] ? C = -2 :
                        (C = u.lastIndex - H[2].length, ca = H[1], u = void 0 === H[3] ? ne : '"' === H[3] ? pe : oe) : u === pe || u === oe ? u = ne : u === le || u === me ? u = ke : (u = ne, r = void 0)
                }
                t = u === ne && a[B + 1].startsWith("/>") ? " " : "";
                q += u === ke ? x + ge : 0 <= C ? (n.push(ca), x.slice(0, C) + "$lit$" + x.slice(C)) + ee + t : x + ee + (-2 === C ? (n.push(void 0), B) : t)
            }
            a = q + (a[k] || "<?>") + (2 === b ? "</svg>" : "");
            n = [void 0 !== be ? be.createHTML(a) : a, n];
            const [w, A] = n;
            this.Ma = ue.createElement(w, c);
            te.currentNode = this.Ma.content;
            2 === b && (b = this.Ma.content, c = b.firstChild, c.remove(), b.append(...c.childNodes));
            for (; null !== (b = te.nextNode()) && g.length < f;) {
                if (1 === b.nodeType) {
                    if (b.hasAttributes()) {
                        c = [];
                        for (const B of b.getAttributeNames())
                            if (B.endsWith("$lit$") || B.startsWith(ee)) a = A[e++], c.push(B), void 0 !== a ? (n = b.getAttribute(a.toLowerCase() + "$lit$").split(ee), a = /([.?@])?(.*)/.exec(a), g.push({
                                type: 1,
                                index: d,
                                name: a[2],
                                L: n,
                                Ee: "." === a[1] ? ve : "?" === a[1] ? we : "@" === a[1] ? xe : ye
                            })) : g.push({
                                type: 6,
                                index: d
                            });
                        for (const B of c) b.removeAttribute(B)
                    }
                    if (qe.test(b.tagName) && (c = b.textContent.split(ee), n = c.length - 1, 0 < n)) {
                        b.textContent =
                            ae ? ae.emptyScript : "";
                        for (a = 0; a < n; a++) b.append(c[a], he.createComment("")), te.nextNode(), g.push({
                            type: 2,
                            index: ++d
                        });
                        b.append(c[n], he.createComment(""))
                    }
                } else if (8 === b.nodeType)
                    if (b.data === fe) g.push({
                        type: 2,
                        index: d
                    });
                    else
                        for (c = -1; - 1 !== (c = b.data.indexOf(ee, c + 1));) g.push({
                            type: 7,
                            index: d
                        }), c += ee.length - 1;
                d++
            }
        }
        static createElement(a) {
            const b = he.createElement("template");
            b.innerHTML = a;
            return b
        }
    };

    function ze(a, b, c = a, d) {
        var e, f, g;
        if (b === re) return b;
        let k = void 0 !== d ? null === (e = c.h) || void 0 === e ? void 0 : e[d] : c.D;
        const n = ie(b) ? void 0 : b._$litDirective$;
        (null === k || void 0 === k ? void 0 : k.constructor) !== n && (null === (f = null === k || void 0 === k ? void 0 : k._$notifyDirectiveConnectionChanged) || void 0 === f ? void 0 : f.call(k, !1), void 0 === n ? k = void 0 : (k = new n(a), k.pe(a, c, d)), void 0 !== d ? (null !== (g = c.h) && void 0 !== g ? g : c.h = [])[d] = k : c.D = k);
        void 0 !== k && (b = ze(a, k.qe(a, b.values), k, d));
        return b
    }
    class Ae {
        constructor(a, b) {
            this.h = [];
            this.l = void 0;
            this.Lb = a;
            this.g = b
        }
        get da() {
            return this.g.da
        }
        m(a) {
            var b;
            const {
                Ma: {
                    content: c
                },
                g: d
            } = this.Lb, e = (null !== (b = null === a || void 0 === a ? void 0 : a.hg) && void 0 !== b ? b : he).importNode(c, !0);
            te.currentNode = e;
            let f = te.nextNode(),
                g = 0,
                k = 0,
                n = d[0];
            for (; void 0 !== n;) {
                if (g === n.index) {
                    let q;
                    2 === n.type ? q = new Be(f, f.nextSibling, this, a) : 1 === n.type ? q = new n.Ee(f, n.name, n.L, this, a) : 6 === n.type && (q = new Ce(f, this, a));
                    this.h.push(q);
                    n = d[++k]
                }
                g !== (null === n || void 0 === n ? void 0 : n.index) &&
                    (f = te.nextNode(), g++)
            }
            return e
        }
        j(a) {
            let b = 0;
            for (const c of this.h) void 0 !== c && (void 0 !== c.L ? (c.ha(a, c, b), b += c.L.length - 2) : c.ha(a[b])), b++
        }
    }

    function De(a, b) {
        var c;
        void 0 === a.g && (a.B = b, null === (c = a.m) || void 0 === c ? void 0 : c.call(a, b))
    }
    var Be = class {
            constructor(a, b, c, d) {
                this.type = 2;
                this.B = !0;
                this.l = void 0;
                this.Y = a;
                this.ca = b;
                this.g = c;
                this.options = d;
                this.h = void 0
            }
            get da() {
                var a, b;
                return null !== (b = null === (a = this.g) || void 0 === a ? void 0 : a.da) && void 0 !== b ? b : this.B
            }
            get parentNode() {
                return this.Y.parentNode
            }
            ha(a, b = this) {
                a = ze(this, a, b);
                ie(a) ? a === J || null == a || "" === a ? (this.H !== J && this.j(), this.H = J) : a !== this.H && a !== re && this.A(a) : void 0 !== a._$litType$ ? this.G(a) : void 0 !== a.nodeType ? this.o(a) : je(a) || "function" === typeof(null === a || void 0 === a ? void 0 :
                    a[Symbol.iterator]) ? this.F(a) : this.A(a)
            }
            v(a, b = this.ca) {
                return this.Y.parentNode.insertBefore(a, b)
            }
            o(a) {
                var b;
                if (this.H !== a) {
                    this.j();
                    if (Wd !== de) {
                        const c = null === (b = this.Y.parentNode) || void 0 === b ? void 0 : b.nodeName;
                        if ("STYLE" === c || "SCRIPT" === c) throw Error("Forbidden");
                    }
                    this.H = this.v(a)
                }
            }
            A(a) {
                var b = this.Y.nextSibling;
                null !== b && 3 === b.nodeType && (null === this.ca ? null === b.nextSibling : b === this.ca.previousSibling) ? (void 0 === this.h && (this.h = Wd(b, "data", "property")), a = this.h(a), b.data = a) : (b = document.createTextNode(""),
                    this.o(b), void 0 === this.h && (this.h = Wd(b, "data", "property")), a = this.h(a), b.data = a);
                this.H = a
            }
            G(a) {
                var b;
                const {
                    values: c,
                    ["_$litType$"]: d
                } = a;
                a = "number" === typeof d ? this.Oc(a) : (void 0 === d.Ma && (d.Ma = ue.createElement(d.kg, this.options)), d);
                if ((null === (b = this.H) || void 0 === b ? void 0 : b.Lb) === a) this.H.j(c);
                else {
                    a = new Ae(a, this);
                    const e = a.m(this.options);
                    a.j(c);
                    this.o(e);
                    this.H = a
                }
            }
            Oc(a) {
                let b = se.get(a.L);
                void 0 === b && se.set(a.L, b = new ue(a));
                return b
            }
            F(a) {
                je(this.H) || (this.H = [], this.j());
                const b = this.H;
                let c = 0,
                    d;
                for (const e of a) c === b.length ? b.push(d = new Be(this.v(he.createComment("")), this.v(he.createComment("")), this, this.options)) : d = b[c], d.ha(e), c++;
                c < b.length && (this.j(d && d.ca.nextSibling, c), b.length = c)
            }
            j(a = this.Y.nextSibling, b) {
                var c;
                for (null === (c = this.m) || void 0 === c ? void 0 : c.call(this, !1, !0, b); a && a !== this.ca;) b = a.nextSibling, a.remove(), a = b
            }
        },
        ye = class {
            constructor(a, b, c, d, e) {
                this.type = 1;
                this.H = J;
                this.l = void 0;
                this.element = a;
                this.name = b;
                this.g = d;
                this.options = e;
                2 < c.length || "" !== c[0] || "" !== c[1] ? (this.H =
                    Array(c.length - 1).fill(J), this.L = c) : this.H = J;
                this.La = void 0
            }
            get tagName() {
                return this.element.tagName
            }
            get da() {
                return this.g.da
            }
            ha(a, b = this, c, d) {
                const e = this.L;
                let f = !1;
                if (void 0 === e) {
                    if (a = ze(this, a, b, 0), f = !ie(a) || a !== this.H && a !== re) this.H = a
                } else {
                    const g = a;
                    a = e[0];
                    let k, n;
                    for (k = 0; k < e.length - 1; k++) n = ze(this, g[c + k], b, k), n === re && (n = this.H[k]), f || (f = !ie(n) || n !== this.H[k]), n === J ? a = J : a !== J && (a += (null !== n && void 0 !== n ? n : "") + e[k + 1]), this.H[k] = n
                }
                f && !d && this.Pb(a)
            }
            Pb(a) {
                a === J ? this.element.removeAttribute(this.name) :
                    (void 0 === this.La && (this.La = Wd(this.element, this.name, "attribute")), a = this.La(null !== a && void 0 !== a ? a : ""), this.element.setAttribute(this.name, null !== a && void 0 !== a ? a : ""))
            }
        },
        ve = class extends ye {
            constructor() {
                super(...arguments);
                this.type = 3
            }
            Pb(a) {
                void 0 === this.La && (this.La = Wd(this.element, this.name, "property"));
                a = this.La(a);
                this.element[this.name] = a === J ? void 0 : a
            }
        };
    const Ee = ae ? ae.emptyScript : "";
    var we = class extends ye {
            constructor() {
                super(...arguments);
                this.type = 4
            }
            Pb(a) {
                a && a !== J ? this.element.setAttribute(this.name, Ee) : this.element.removeAttribute(this.name)
            }
        },
        xe = class extends ye {
            constructor() {
                super(...arguments);
                this.type = 5
            }
            ha(a, b = this) {
                var c;
                a = null !== (c = ze(this, a, b, 0)) && void 0 !== c ? c : J;
                if (a !== re) {
                    b = this.H;
                    var d = a === J && b !== J || a.capture !== b.capture || a.once !== b.once || a.passive !== b.passive,
                        e = a !== J && (b === J || d);
                    d && this.element.removeEventListener(this.name, this, b);
                    e && this.element.addEventListener(this.name,
                        this, a);
                    this.H = a
                }
            }
            handleEvent(a) {
                var b, c;
                "function" === typeof this.H ? this.H.call(null !== (c = null === (b = this.options) || void 0 === b ? void 0 : b.host) && void 0 !== c ? c : this.element, a) : this.H.handleEvent(a)
            }
        },
        Ce = class {
            constructor(a, b, c) {
                this.element = a;
                this.type = 6;
                this.l = void 0;
                this.g = b;
                this.options = c
            }
            get da() {
                return this.g.da
            }
            ha(a) {
                ze(this, a)
            }
        },
        Fe = Be;
    null === (Yd = (Xd = window).litHtmlPlatformSupport) || void 0 === Yd ? void 0 : Yd.call(Xd, ue, Be);
    (null !== (Zd = ($d = window).litHtmlVersions) && void 0 !== Zd ? Zd : $d.litHtmlVersions = []).push("2.0.0-rc.3");
    const Ge = window;
    var He = window.ShadowRoot && (void 0 === Ge.ShadyCSS || Ge.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
    const Ie = Symbol(),
        Je = new Map;
    var Ke = class {
            constructor(a) {
                this._$cssResult$ = !0;
                if (Ie !== Ie) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                this.cssText = a
            }
            get g() {
                let a = Je.get(this.cssText);
                He && void 0 === a && (Je.set(this.cssText, a = new CSSStyleSheet), a.replaceSync(this.cssText));
                return a
            }
            toString() {
                return this.cssText
            }
        },
        K = (a, ...b) => {
            b = 1 === a.length ? a[0] : b.reduce((c, d, e) => {
                if (!0 === d._$cssResult$) d = d.cssText;
                else if ("number" !== typeof d) throw Error("Value passed to 'css' function must be a 'css' function result: " +
                    `${d}. Use 'unsafeCSS' to pass non-literal values, but take care ` + "to ensure page security.");
                return c + d + a[e + 1]
            }, a[0]);
            return new Ke(b)
        },
        Le = (a, b) => {
            He ? a.adoptedStyleSheets = b.map(c => c instanceof CSSStyleSheet ? c : c.g) : b.forEach(c => {
                const d = document.createElement("style");
                d.textContent = c.cssText;
                a.appendChild(d)
            })
        },
        Me = He ? a => a : a => {
            if (a instanceof CSSStyleSheet) {
                let b = "";
                for (const c of a.cssRules) b += c.cssText;
                a = new Ke("string" === typeof b ? b : String(b))
            }
            return a
        };
    "localName" in HTMLElement.prototype || (HTMLElement.prototype.__defineGetter__ ? HTMLElement.prototype.__defineGetter__("localName", function() {
        return this.tagName.toLowerCase()
    }) : Object.defineProperty(HTMLElement.prototype, "localName", {
        writable: !1,
        configurable: !1,
        enumerable: !1,
        get() {
            return this.tagName.toLowerCase()
        }
    }));
    try {
        Object.setPrototypeOf({}, null)
    } catch (a) {}
    try {
        document.createEvent("CustomEvent")
    } catch (a) {
        window.CustomEvent = (b, c) => {
            c = c || {};
            const d = document.createEvent("Event");
            d.initEvent(b, !!c.bubbles, !!c.cancelable);
            d.detail = c.detail;
            return d
        }, window.CustomEvent.prototype = window.Event.prototype
    };
    var Ne = !/^\s*class\s*\{\s*\}\s*$/.test(class {}.toString());
    /*

     Copyright 2016 Google LLC
     SPDX-License-Identifier: BSD-3-Clause
    */
    (function() {
        if (Ne && !HTMLElement.es5Shimmed && void 0 !== window.Reflect && void 0 !== window.customElements && !window.customElements.polyfillWrapFlushCallback) {
            var a = HTMLElement;
            window.HTMLElement = function() {
                return Reflect.construct(a, [], this.constructor)
            };
            HTMLElement.prototype = a.prototype;
            HTMLElement.prototype.constructor = HTMLElement;
            HTMLElement.es5Shimmed = !0;
            Object.setPrototypeOf(HTMLElement, a)
        }
    })();
    var Oe, Pe, Qe, Re;
    const Se = window.trustedTypes;
    var Te = {
            Od(a, b) {
                switch (b) {
                    case Boolean:
                        a = a ? "" : null;
                        break;
                    case Object:
                    case Array:
                        a = null == a ? a : JSON.stringify(a)
                }
                return a
            },
            cd(a, b) {
                let c = a;
                switch (b) {
                    case Boolean:
                        c = null !== a;
                        break;
                    case Number:
                        c = null === a ? null : Number(a);
                        break;
                    case Object:
                    case Array:
                        try {
                            c = JSON.parse(a)
                        } catch (d) {
                            c = null
                        }
                }
                return c
            }
        },
        Ue = (a, b) => b !== a && (b === b || a === a);
    const Ve = {
        M: !0,
        type: String,
        Vc: Te,
        I: !1,
        Me: Ue
    };

    function Vc(a, b, c = Ve) {
        c.state && (c.M = !1);
        We(a);
        a.ra.set(b, c);
        c.ug || a.prototype.hasOwnProperty(b) || (c = Xe(b, "symbol" === typeof b ? Symbol() : `__${b}`, c), void 0 !== c && Object.defineProperty(a.prototype, b, c))
    }

    function We(a) {
        if (!a.hasOwnProperty("finalized")) {
            a.finalized = !0;
            var b = Object.getPrototypeOf(a);
            We(b);
            a.ra = new Map(b.ra);
            a.Qc = new Map;
            if (a.hasOwnProperty("df")) {
                b = a.df;
                const d = [...Object.getOwnPropertyNames(b), ...Object.getOwnPropertySymbols(b)];
                for (var c of d) Vc(a, c, b[c])
            }
            b = a.N;
            c = [];
            if (Array.isArray(b)) {
                b = new Set(b.flat(Infinity).reverse());
                for (const d of b) c.unshift(Me(d))
            } else void 0 !== b && c.push(Me(b));
            a.Sb = c
        }
    }

    function Xe(a, b, c) {
        return {
            get() {
                return this[b]
            },
            set(d) {
                const e = this[a];
                this[b] = d;
                Ye(this, a, e, c)
            },
            configurable: !0,
            enumerable: !0
        }
    }

    function Ye(a, b, c, d) {
        let e = !0;
        void 0 !== b && (d = d || a.constructor.ra.get(b) || Ve, (d.Me || Ue)(a[b], c) ? (a.lb.has(b) || a.lb.set(b, c), !0 === d.I && a.Ia !== b && (void 0 === a.Va && (a.Va = new Map), a.Va.set(b, d))) : e = !1);
        !a.ab && e && (a.Ob = a.re())
    }

    function Ze(a) {
        var b;
        if (a.ab) {
            a.Ta && (a.Ta.forEach((e, f) => a[f] = e), a.Ta = void 0);
            var c = !1,
                d = a.lb;
            try {
                (c = a.fb(d)) ? (null === (b = a.Mb) || void 0 === b ? void 0 : b.forEach(e => {
                    var f;
                    return null === (f = e.ng) || void 0 === f ? void 0 : f.call(e)
                }), a.update(d)) : a.Nb()
            } catch (e) {
                throw c = !1, a.Nb(), e;
            }
            c && a.Kb(d)
        }
    }
    var $e = class extends HTMLElement {
        constructor() {
            super();
            this.Ta = new Map;
            this.ub = this.ab = !1;
            this.Ia = null;
            this.ue()
        }
        static get observedAttributes() {
            We(this);
            const a = [];
            this.ra.forEach((b, c) => {
                b = this.Pc(c, b);
                void 0 !== b && (this.Qc.set(b, c), a.push(b))
            });
            return a
        }
        static Pc(a, b) {
            b = b.M;
            return !1 === b ? void 0 : "string" === typeof b ? b : "string" === typeof a ? a.toLowerCase() : void 0
        }
        ue() {
            var a;
            this.Ob = new Promise(b => this.Zc = b);
            this.lb = new Map;
            this.te();
            Ye(this);
            null === (a = this.constructor.eg) || void 0 === a ? void 0 : a.forEach(b =>
                b(this))
        }
        te() {
            this.Rc ? (this.Ta = this.Rc, this.Rc = void 0) : this.constructor.ra.forEach((a, b) => {
                this.hasOwnProperty(b) && (this.Ta.set(b, this[b]), delete this[b])
            })
        }
        ya() {
            var a;
            const b = null !== (a = this.shadowRoot) && void 0 !== a ? a : this.attachShadow(this.constructor.Kd);
            Le(b, this.constructor.Sb);
            return b
        }
        connectedCallback() {
            var a;
            void 0 === this.Ea && (this.Ea = this.ya());
            this.Zc(!0);
            null === (a = this.Mb) || void 0 === a ? void 0 : a.forEach(b => {
                var c;
                return null === (c = b.lg) || void 0 === c ? void 0 : c.call(b)
            })
        }
        Zc() {}
        disconnectedCallback() {
            var a;
            null === (a = this.Mb) || void 0 === a ? void 0 : a.forEach(b => {
                var c;
                return null === (c = b.mg) || void 0 === c ? void 0 : c.call(b)
            })
        }
        attributeChangedCallback(a, b, c) {
            this.ne(a, c)
        }
        se(a, b, c = Ve) {
            var d, e;
            const f = this.constructor.Pc(a, c);
            if (void 0 !== f && !0 === c.I) {
                let g = (null !== (e = null === (d = c.Vc) || void 0 === d ? void 0 : d.Od) && void 0 !== e ? e : Te.Od)(b, c.type);
                this.Ia = a;
                null == g ? this.removeAttribute(f) : ("" === g && f.startsWith("on") && Se && (g = Se.emptyScript), this.setAttribute(f, g));
                this.Ia = null
            }
        }
        ne(a, b) {
            var c, d, e, f = this.constructor;
            a = f.Qc.get(a);
            if (void 0 !== a && this.Ia !== a) {
                f = f.ra.get(a) || Ve;
                const g = f.Vc,
                    k = null !== (e = null !== (d = null === (c = g) || void 0 === c ? void 0 : c.cd) && void 0 !== d ? d : "function" === typeof g ? g : null) && void 0 !== e ? e : Te.cd;
                this.Ia = a;
                this[a] = k(b, f.type);
                this.Ia = null
            }
        }
        re() {
            return v(this, function*() {
                this.ab = !0;
                try {
                    yield this.Ob
                } catch (b) {
                    this.nf || Promise.reject(b)
                }
                const a = Ze(this);
                null != a && (yield a);
                return !this.ab
            })
        }
        Kb(a) {
            var b;
            null === (b = this.Mb) || void 0 === b ? void 0 : b.forEach(c => {
                var d;
                return null === (d = c.og) || void 0 === d ? void 0 : d.call(c)
            });
            this.ub ||
                (this.ub = !0, this.O(a));
            this.qa(a)
        }
        Nb() {
            this.lb = new Map;
            this.ab = !1
        }
        get Ra() {
            return this.ma()
        }
        ma() {
            return this.Ob
        }
        fb() {
            return !0
        }
        update() {
            void 0 !== this.Va && (this.Va.forEach((a, b) => this.se(b, this[b], a)), this.Va = void 0);
            this.Nb()
        }
        qa() {}
        O() {}
    };
    $e.finalized = !0;
    $e.ra = new Map;
    $e.Sb = [];
    $e.Kd = {
        mode: "open"
    };
    null === (Pe = (Oe = window).reactiveElementPlatformSupport) || void 0 === Pe ? void 0 : Pe.call(Oe, {
        ReactiveElement: $e
    });
    (null !== (Qe = (Re = window).reactiveElementVersions) && void 0 !== Qe ? Qe : Re.reactiveElementVersions = []).push("1.0.0-rc.2");
    var af, bf, cf, df, ef, ff;
    (null !== (af = (ff = window).litElementVersions) && void 0 !== af ? af : ff.litElementVersions = []).push("3.0.0-rc.2");
    var L = class extends $e {
        constructor() {
            super(...arguments);
            this.jc = {
                host: this
            };
            this.B = void 0
        }
        ya() {
            var a, b;
            const c = super.ya();
            null !== (a = (b = this.jc).ic) && void 0 !== a ? a : b.ic = c.firstChild;
            return c
        }
        update(a) {
            const b = this.j();
            super.update(a);
            a = this.Ea;
            var c = this.jc,
                d, e;
            const f = null !== (d = null === c || void 0 === c ? void 0 : c.ic) && void 0 !== d ? d : a;
            d = f._$litPart$;
            void 0 === d && (d = null !== (e = null === c || void 0 === c ? void 0 : c.ic) && void 0 !== e ? e : null, f._$litPart$ = d = new Be(a.insertBefore(he.createComment(""), d), d, void 0, null !== c &&
                void 0 !== c ? c : {}));
            d.ha(b);
            this.B = d
        }
        connectedCallback() {
            var a;
            super.connectedCallback();
            null === (a = this.B) || void 0 === a ? void 0 : De(a, !0)
        }
        disconnectedCallback() {
            var a;
            super.disconnectedCallback();
            null === (a = this.B) || void 0 === a ? void 0 : De(a, !1)
        }
        j() {
            return re
        }
    };
    L.finalized = !0;
    L._$litElement$ = !0;
    null === (cf = (bf = window).litElementHydrateSupport) || void 0 === cf ? void 0 : cf.call(bf, {
        Xf: L
    });
    null === (ef = (df = window).litElementPlatformSupport) || void 0 === ef ? void 0 : ef.call(df, {
        LitElement: L
    });
    K `var(--cros-bg-color)`;
    K `var(--cros-bg-color-elevation-1)`;
    K `var(--cros-bg-color-elevation-2)`;
    K `var(--cros-bg-color-elevation-3)`;
    K `var(--cros-bg-color-elevation-4)`;
    K `var(--cros-bg-color-elevation-5)`;
    K `var(--cros-text-color-primary)`;
    K `var(--cros-text-color-secondary)`;
    K `var(--cros-text-color-alert)`;
    K `var(--cros-text-color-warning)`;
    K `var(--cros-text-color-positive)`;
    K `var(--cros-text-color-prominent)`;
    K `var(--cros-text-color-selection)`;
    K `var(--cros-icon-color-primary)`;
    K `var(--cros-icon-color-secondary)`;
    K `var(--cros-icon-color-disabled)`;
    K `var(--cros-icon-color-alert)`;
    K `var(--cros-icon-color-warning)`;
    K `var(--cros-icon-color-positive)`;
    K `var(--cros-icon-color-prominent)`;
    K `var(--cros-icon-color-selection)`;
    K `var(--cros-highlight-color)`;
    K `var(--cros-dark-ink-ripple-color)`;
    K `var(--cros-light-ink-ripple-color)`;
    K `var(--cros-ink-ripple-color)`;
    K `var(--cros-focus-ring-color)`;
    K `var(--cros-toolbar-search-bg-color)`;
    K `var(--cros-menu-item-bg-color-focus)`;
    K `var(--cros-menu-item-ripple-color)`;
    K `var(--cros-toggle-color)`;
    K `var(--cros-toggle-bg-color-inactive)`;
    K `var(--cros-toggle-button-color-inactive)`;
    K `var(--cros-toggle-ripple-color)`;
    K `var(--cros-toggle-ripple-color-inactive)`;
    K `var(--cros-radio-button-color)`;
    K `var(--cros-radio-button-ripple-color)`;
    K `var(--cros-radio-button-color-unchecked)`;
    K `var(--cros-radio-button-ripple-color-unchecked)`;
    K `var(--cros-separator-color)`;
    K `var(--cros-link-color)`;
    K `var(--cros-button-focus-ring-color)`;
    K `var(--cros-button-background-color-primary)`;
    K `var(--cros-button-label-color-primary)`;
    K `var(--cros-button-ripple-color-primary)`;
    K `var(--cros-button-background-color-primary-hover-overlay)`;
    K `var(--cros-button-active-shadow-color-ambient-primary)`;
    K `var(--cros-button-active-shadow-color-key-primary)`;
    K `var(--cros-button-background-color-primary-disabled)`;
    K `var(--cros-button-label-color-primary-disabled)`;
    K `var(--cros-button-label-color-secondary)`;
    K `var(--cros-button-stroke-color-secondary)`;
    K `var(--cros-button-ripple-color-secondary)`;
    K `var(--cros-button-stroke-color-secondary-hover)`;
    K `var(--cros-button-background-color-secondary-hover)`;
    K `var(--cros-button-active-shadow-color-ambient-secondary)`;
    K `var(--cros-button-active-shadow-color-key-secondary)`;
    K `var(--cros-button-label-color-secondary-disabled)`;
    K `var(--cros-button-stroke-color-secondary-disabled)`;
    K `var(--cros-button-icon-color-primary)`;
    K `var(--cros-button-icon-color-primary-disabled)`;
    K `var(--cros-button-icon-color-secondary)`;
    K `var(--cros-button-icon-color-secondary-disabled)`;
    K `var(--cros-icon-button-background-color)`;
    K `var(--cros-menu-label-color)`;
    K `var(--cros-menu-icon-color)`;
    K `var(--cros-menu-shortcut-color)`;
    K `var(--cros-menu-item-background-hover)`;
    K `var(--cros-tab-label-color-active)`;
    K `var(--cros-tab-label-color-inactive)`;
    K `var(--cros-tab-icon-color-active)`;
    K `var(--cros-tab-icon-color-inactive)`;
    K `var(--cros-textfield-background-color)`;
    K `var(--cros-textfield-label-color)`;
    K `var(--cros-textfield-input-color)`;
    K `var(--cros-textfield-label-color-focus)`;
    K `var(--cros-textfield-label-color-error)`;
    K `var(--cros-textfield-background-color-disabled)`;
    K `var(--cros-textfield-label-color-disabled)`;
    K `var(--cros-textfield-input-color-disabled)`;
    K `var(--cros-tooltip-background-color)`;
    K `var(--cros-tooltip-label-color)`;
    K `var(--google-blue-50)`;
    K `var(--google-blue-100)`;
    K `var(--google-blue-200)`;
    K `var(--google-blue-300)`;
    K `var(--google-blue-400)`;
    K `var(--google-blue-500)`;
    K `var(--google-blue-600)`;
    K `var(--google-blue-700)`;
    K `var(--google-blue-800)`;
    K `var(--google-blue-900)`;
    K `var(--google-green-50)`;
    K `var(--google-green-100)`;
    K `var(--google-green-200)`;
    K `var(--google-green-300)`;
    K `var(--google-green-400)`;
    K `var(--google-green-500)`;
    K `var(--google-green-600)`;
    K `var(--google-green-700)`;
    K `var(--google-green-800)`;
    K `var(--google-green-900)`;
    K `var(--google-grey-50)`;
    K `var(--google-grey-100)`;
    K `var(--google-grey-200)`;
    K `var(--google-grey-300)`;
    K `var(--google-grey-400)`;
    K `var(--google-grey-500)`;
    K `var(--google-grey-600)`;
    K `var(--google-grey-700)`;
    K `var(--google-grey-800)`;
    K `var(--google-grey-900)`;
    K `var(--google-red-50)`;
    K `var(--google-red-100)`;
    K `var(--google-red-200)`;
    K `var(--google-red-300)`;
    K `var(--google-red-400)`;
    K `var(--google-red-500)`;
    K `var(--google-red-600)`;
    K `var(--google-red-700)`;
    K `var(--google-red-800)`;
    K `var(--google-red-900)`;
    K `var(--google-yellow-50)`;
    K `var(--google-yellow-100)`;
    K `var(--google-yellow-200)`;
    K `var(--google-yellow-300)`;
    K `var(--google-yellow-400)`;
    K `var(--google-yellow-500)`;
    K `var(--google-yellow-600)`;
    K `var(--google-yellow-700)`;
    K `var(--google-yellow-800)`;
    K `var(--google-yellow-900)`;
    K `var(--cros-dropped-elevation-bg-color-1)`;
    K `var(--cros-dropped-elevation-bg-color-2)`;
    K `var(--cros-prominent-ripple-color)`;
    K `var(--cros-prominent-ripple-highlight-color)`;
    K `var(--cros-prominent-ripple-ink-drop-color)`;
    K `var(--cros-ripple-color)`;
    K `var(--cros-ripple-highlight-color)`;
    K `var(--cros-ripple-ink-drop-color)`;
    K `var(--cros-textfield-suffixes-color)`;
    K `var(--cros-textfield-hint-text-color)`;
    K `var(--cros-textfield-underline-color-focus)`;
    K `var(--cros-textfield-cursor-color-focus)`;
    K `var(--cros-textfield-underline-color-error)`;
    K `var(--cros-textfield-cursor-color-error)`;
    K `var(--cros-textfield-hint-text-color-error)`;
    K `var(--cros-menu-bg-color)`;
    K `var(--ea-slider-color-active)`;
    K `var(--ea-slider-track-color-active)`;
    K `var(--ea-slider-color-inactive)`;
    K `var(--ea-slider-track-color-inactive)`;
    K `var(--cros-disabled-opacity)`;
    K `var(--cros-button-primary-ripple-opacity)`;
    K `var(--cros-button-secondary-ripple-opacity)`;
    K `var(--cros-disabled-color-opacity)`;
    K `var(--cros-ripple-highlight-opacity)`;
    K `var(--cros-ripple-ink-drop-opacity)`;
    K `var(--cros-ripple-opacity)`;
    K `var(--cros-prominent-ripple-highlight-opacity)`;
    K `var(--cros-prominent-ripple-ink-drop-opacity)`;
    K `var(--ea-second-tone-opacity)`;
    var M = a => null !== a && void 0 !== a ? a : J;
    /*

     Copyright 2021 Google LLC
     SPDX-License-Identifier: Apache-2.0
    */
    function gf(a, b, c) {
        const d = a.constructor;
        if (!c && (c = Xe(b, `__${b}`), !c)) throw Error("@ariaProperty must be used after a @property decorator");
        const e = c;
        let f = "";
        if (!e.set) throw Error(`@ariaProperty requires a setter for ${b}`);
        a = {
            configurable: !0,
            enumerable: !0,
            set(g) {
                "" === f && (f = (d.ra.get(b) || Ve).M);
                this.hasAttribute(f) && this.removeAttribute(f);
                e.set.call(this, g)
            }
        };
        e.get && (a.get = function() {
            return e.get.call(this)
        });
        return a
    }

    function hf(a, b, c) {
        if (void 0 !== b) return gf(a, b, c);
        throw Error("@ariaProperty only supports TypeScript Decorators");
    };
    var jf = a => (...b) => ({
            ["_$litDirective$"]: a,
            values: b
        }),
        kf = class {
            get da() {
                return this.g.da
            }
            pe(a, b, c) {
                this.o = a;
                this.g = b;
                this.l = c
            }
            qe(a, b) {
                return this.update(a, b)
            }
            update(a, b) {
                return this.j(...b)
            }
        };
    var lf = jf(class extends kf {
        constructor(a) {
            var b;
            super();
            if (1 !== a.type || "class" !== a.name || 2 < (null === (b = a.L) || void 0 === b ? void 0 : b.length)) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
        }
        j(a) {
            return Object.keys(a).filter(b => a[b]).join(" ")
        }
        update(a, [b]) {
            if (void 0 === this.h) {
                this.h = new Set;
                for (const d in b) b[d] && this.h.add(d);
                return this.j(b)
            }
            const c = a.element.classList;
            this.h.forEach(d => {
                d in b || (c.remove(d), this.h.delete(d))
            });
            for (const d in b) a = !!b[d], a !== this.h.has(d) && (a ? (c.add(d), this.h.add(d)) : (c.remove(d), this.h.delete(d)));
            return re
        }
    });
    var mf = jf(class extends kf {
        constructor(a) {
            var b;
            super();
            if (1 !== a.type || "style" !== a.name || 2 < (null === (b = a.L) || void 0 === b ? void 0 : b.length)) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
        }
        j(a) {
            return Object.keys(a).reduce((b, c) => {
                const d = a[c];
                if (null == d) return b;
                c = c.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase();
                return b + `${c}:${d};`
            }, "")
        }
        update(a, [b]) {
            const c = a.element.style;
            void 0 === this.h && (this.h = new Set);
            this.h.forEach(d => {
                null == b[d] && (this.h.delete(d), d.includes("-") ? c.removeProperty(d) : c[d] = "")
            });
            for (const d in b) a = b[d], null != a && (this.h.add(d), d.includes("-") ? c.setProperty(d, a) : c[d] = a);
            return re
        }
    });
    /*

     Copyright 2018 Google Inc.

     Permission is hereby granted, free of charge, to any person obtaining a copy
     of this software and associated documentation files (the "Software"), to deal
     in the Software without restriction, including without limitation the rights
     to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     copies of the Software, and to permit persons to whom the Software is
     furnished to do so, subject to the following conditions:

     The above copyright notice and this permission notice shall be included in
     all copies or substantial portions of the Software.

     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     THE SOFTWARE.
    */
    /*

     Copyright 2016 Google Inc.

     Permission is hereby granted, free of charge, to any person obtaining a copy
     of this software and associated documentation files (the "Software"), to deal
     in the Software without restriction, including without limitation the rights
     to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     copies of the Software, and to permit persons to whom the Software is
     furnished to do so, subject to the following conditions:

     The above copyright notice and this permission notice shall be included in
     all copies or substantial portions of the Software.

     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     THE SOFTWARE.
    */
    var nf = class {
        constructor(a = {}) {
            this.g = a
        }
        static get g() {
            return {}
        }
        static get L() {
            return {}
        }
        static get h() {
            return {}
        }
        static get j() {
            return {}
        }
        init() {}
        v() {}
    };
    var of = {
        Ec: "mdc-ripple-upgraded--background-focused",
        Bb: "mdc-ripple-upgraded--foreground-activation",
        Cb: "mdc-ripple-upgraded--foreground-deactivation",
        Sa: "mdc-ripple-upgraded",
        Nc: "mdc-ripple-upgraded--unbounded"
    }, pf = {
        he: "--mdc-ripple-fg-scale",
        ie: "--mdc-ripple-fg-size",
        je: "--mdc-ripple-fg-translate-end",
        ke: "--mdc-ripple-fg-translate-start",
        le: "--mdc-ripple-left",
        me: "--mdc-ripple-top"
    }, qf = {
        Sd: 225,
        Td: 150,
        Ud: .6,
        ce: 10,
        ee: 300
    };
    const rf = ["touchstart", "pointerdown", "mousedown", "keydown"],
        sf = ["touchend", "pointerup", "mouseup", "contextmenu"];
    let tf = [];

    function uf() {
        return {
            Qb: void 0,
            qd: !1,
            wb: !1,
            $b: !1,
            zc: !1,
            Ha: !1
        }
    }

    function vf(a) {
        const b = N.g.Cb,
            c = a.j.wb;
        !a.j.qd && c || !a.A || (wf(a), a.g.Z(b), a.o = setTimeout(() => {
            a.g.R(b)
        }, qf.Td))
    }

    function xf() {
        for (const a of rf);
    }

    function yf(a) {
        a.h = a.g.Wa();
        var b = Math.max(a.h.height, a.h.width);
        a.G = a.g.Oa() ? b : Math.sqrt(Math.pow(a.h.width, 2) + Math.pow(a.h.height, 2)) + N.h.ce;
        b = Math.floor(b * N.h.Ud);
        a.m = a.g.Oa() && 0 !== b % 2 ? b - 1 : b;
        a.F = `${a.G/a.m}`;
        b = N.L.le;
        const c = N.L.me,
            d = N.L.he;
        a.g.ta(N.L.ie, `${a.m}px`);
        a.g.ta(d, a.F);
        a.g.Oa() && (a.D = {
            left: Math.round(a.h.width / 2 - a.m / 2),
            top: Math.round(a.h.height / 2 - a.m / 2)
        }, a.g.ta(b, `${a.D.left}px`), a.g.ta(c, `${a.D.top}px`))
    }

    function zf(a) {
        const b = N.L;
        Object.keys(b).forEach(c => {
            0 === c.indexOf("VAR_") && a.g.ta(b[c], null)
        })
    }

    function Af() {
        for (const a of rf);
    }

    function Bf() {
        for (const a of sf);
    }

    function Cf(a, b) {
        if (!a.g.xd()) {
            var c = a.j;
            if (!c.wb) {
                var d = a.K;
                d && void 0 !== b && d.type !== b.type || (c.wb = !0, c.$b = void 0 === b, c.Qb = b, c.zc = c.$b ? !1 : void 0 !== b && ("mousedown" === b.type || "touchstart" === b.type || "pointerdown" === b.type), void 0 !== b && 0 < tf.length && tf.some(() => !0) ? Df(a) : (void 0 !== b && (tf.push(b.target), Ef(b)), c.Ha = void 0 !== b && "keydown" === b.type ? a.g.bc() : !0, c.Ha && Ff(a), requestAnimationFrame(() => {
                    tf = [];
                    c.Ha || void 0 === b || " " !== b.key && 32 !== b.keyCode || (c.Ha = void 0 !== b && "keydown" === b.type ? a.g.bc() : !0, c.Ha &&
                        Ff(a));
                    c.Ha || (a.j = uf())
                })))
            }
        }
    }

    function Gf(a) {
        const b = a.j;
        if (b.wb) {
            var c = Object.assign({}, b);
            b.$b ? (requestAnimationFrame(() => {
                Hf(a, c)
            }), Df(a)) : (Bf(), requestAnimationFrame(() => {
                a.j.qd = !0;
                Hf(a, c);
                Df(a)
            }))
        }
    }

    function If(a) {
        requestAnimationFrame(() => a.g.Z(N.g.Ec))
    }

    function Jf(a) {
        requestAnimationFrame(() => a.g.R(N.g.Ec))
    }

    function Ef(a) {
        if ("keydown" !== a.type)
            for (const b of sf);
    }

    function Df(a) {
        a.K = a.j.Qb;
        a.j = uf();
        setTimeout(() => a.K = void 0, N.h.ee)
    }

    function Ff(a) {
        const b = N.L.ke,
            c = N.L.je,
            d = N.g.Cb,
            e = N.g.Bb,
            f = N.h.Sd;
        yf(a);
        let g = "",
            k = "";
        if (!a.g.Oa()) {
            const {
                pf: n,
                Je: q
            } = Kf(a);
            g = `${n.x}px, ${n.y}px`;
            k = `${q.x}px, ${q.y}px`
        }
        a.g.ta(b, g);
        a.g.ta(c, k);
        clearTimeout(a.l);
        clearTimeout(a.o);
        wf(a);
        a.g.R(d);
        a.g.Wa();
        a.g.Z(e);
        a.l = setTimeout(() => {
            a.T()
        }, f)
    }

    function Kf(a) {
        var b = a.j.Qb;
        if (a.j.zc) {
            var c = a.g.od(),
                d = a.g.Wa();
            if (b) {
                var e = c.x + d.left;
                c = c.y + d.top;
                "touchstart" === b.type ? (e = b.changedTouches[0].pageX - e, b = b.changedTouches[0].pageY - c) : (e = b.pageX - e, b = b.pageY - c);
                b = {
                    x: e,
                    y: b
                }
            } else b = {
                x: 0,
                y: 0
            }
        } else b = {
            x: a.h.width / 2,
            y: a.h.height / 2
        };
        b = {
            x: b.x - a.m / 2,
            y: b.y - a.m / 2
        };
        return {
            pf: b,
            Je: {
                x: a.h.width / 2 - a.m / 2,
                y: a.h.height / 2 - a.m / 2
            }
        }
    }

    function wf(a) {
        a.g.R(N.g.Bb);
        a.A = !1;
        a.g.Wa()
    }

    function Hf(a, {
        zc: b,
        Ha: c
    }) {
        (b || c) && vf(a)
    }
    var N = class extends nf {
        constructor(a) {
            super(Object.assign(Object.assign({}, N.j), a));
            this.A = !1;
            this.o = this.l = 0;
            this.F = "0";
            this.h = {
                width: 0,
                height: 0
            };
            this.G = this.B = this.m = 0;
            this.D = {
                left: 0,
                top: 0
            };
            this.j = uf();
            this.T = () => {
                this.A = !0;
                vf(this)
            }
        }
        static get g() {
            return of
        }
        static get L() {
            return pf
        }
        static get h() {
            return qf
        }
        static get j() {
            return {
                Z: () => {},
                ze: () => !0,
                Wa: () => ({
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    width: 0,
                    height: 0
                }),
                Ce: () => !0,
                Fe: () => {},
                Ge: () => {},
                He: () => {},
                od: () => ({
                    x: 0,
                    y: 0
                }),
                bc: () => !0,
                xd: () => !0,
                Oa: () => !0,
                ef: () => {},
                ff: () => {},
                gf: () => {},
                R: () => {},
                ta: () => {}
            }
        }
        init() {
            xf();
            const a = N.g.Sa,
                b = N.g.Nc;
            requestAnimationFrame(() => {
                this.g.Z(a);
                this.g.Oa() && (this.g.Z(b), yf(this))
            })
        }
        v() {
            this.l && (clearTimeout(this.l), this.l = 0, this.g.R(N.g.Bb));
            this.o && (clearTimeout(this.o), this.o = 0, this.g.R(N.g.Cb));
            const a = N.g.Sa,
                b = N.g.Nc;
            requestAnimationFrame(() => {
                this.g.R(a);
                this.g.R(b);
                zf(this)
            });
            Af();
            Bf()
        }
        oa() {
            this.B && cancelAnimationFrame(this.B);
            this.B = requestAnimationFrame(() => {
                yf(this);
                this.B = 0
            })
        }
    };
    /*

     Copyright 2018 Google LLC
     SPDX-License-Identifier: Apache-2.0
    */
    function Lf(a) {
        return {
            Z: b => {
                a.classList.add(b)
            },
            R: b => {
                a.classList.remove(b)
            },
            Yb: b => a.classList.contains(b)
        }
    }
    const Mf = () => {};
    document.addEventListener("x", Mf, {
        get passive() {
            return !1
        }
    });
    document.removeEventListener("x", Mf);
    var Nf = () => {
            let a = window.document.activeElement;
            const b = [];
            if (!a) return b;
            for (; a;)
                if (b.push(a), a.shadowRoot) a = a.shadowRoot.activeElement;
                else break;
            return b
        },
        Of = a => {
            var b = Nf();
            if (!b.length) return !1;
            b = b[b.length - 1];
            const c = new Event("check-if-focused", {
                bubbles: !0,
                composed: !0
            });
            let d = [];
            const e = f => {
                d = f.composedPath()
            };
            document.body.addEventListener("check-if-focused", e);
            b.dispatchEvent(c);
            document.body.removeEventListener("check-if-focused", e);
            return -1 !== d.indexOf(a)
        };
    var Pf = class extends L {
        click() {
            this.J ? (this.J.focus(), this.J.click()) : super.click()
        }
        O() {
            void 0 !== this.g && this.g.v();
            this.o && (this.g = new this.o(this.v()), this.g.init())
        }
    };

    function Qf(a, b) {
        a.g ? b() : a.Ra.then(b)
    }
    var O = class extends Pf {
        constructor() {
            super(...arguments);
            this.sb = this.qb = this.mb = this.vb = this.internalUseStateLayerCustomProperties = this.selected = this.activated = this.disabled = this.unbounded = this.accent = this.primary = !1;
            this.vc = this.cc = this.wc = this.xc = this.Tb = this.Eb = "";
            this.o = N
        }
        get h() {
            var a = this.parentElement || this;
            return (a.matches || a.webkitMatchesSelector || a.msMatchesSelector).call(a, ":active")
        }
        v() {
            return {
                ze: () => !0,
                Oa: () => this.unbounded,
                bc: () => this.h,
                xd: () => this.disabled,
                Z: a => {
                    switch (a) {
                        case "mdc-ripple-upgraded--background-focused":
                            this.mb = !0;
                            break;
                        case "mdc-ripple-upgraded--foreground-activation":
                            this.qb = !0;
                            break;
                        case "mdc-ripple-upgraded--foreground-deactivation":
                            this.sb = !0
                    }
                },
                R: a => {
                    switch (a) {
                        case "mdc-ripple-upgraded--background-focused":
                            this.mb = !1;
                            break;
                        case "mdc-ripple-upgraded--foreground-activation":
                            this.qb = !1;
                            break;
                        case "mdc-ripple-upgraded--foreground-deactivation":
                            this.sb = !1
                    }
                },
                Ce: () => !0,
                ff: () => {},
                Ge: () => {},
                ef: () => {},
                Fe: () => {},
                gf: () => {},
                He: () => {},
                ta: (a, b) => {
                    switch (a) {
                        case "--mdc-ripple-fg-scale":
                            this.Eb = b;
                            break;
                        case "--mdc-ripple-fg-size":
                            this.Tb =
                                b;
                            break;
                        case "--mdc-ripple-fg-translate-end":
                            this.wc = b;
                            break;
                        case "--mdc-ripple-fg-translate-start":
                            this.xc = b;
                            break;
                        case "--mdc-ripple-left":
                            this.cc = b;
                            break;
                        case "--mdc-ripple-top":
                            this.vc = b
                    }
                },
                Wa: () => (this.parentElement || this).getBoundingClientRect(),
                od: () => ({
                    x: window.pageXOffset,
                    y: window.pageYOffset
                })
            }
        }
        sa(a) {
            Qf(this, () => {
                Cf(this.g, a)
            })
        }
        Ba() {
            Qf(this, () => {
                Gf(this.g)
            })
        }
        Fa() {
            Qf(this, () => {
                If(this.g)
            })
        }
        Aa() {
            Qf(this, () => {
                Jf(this.g)
            })
        }
        ka() {
            this.vb = !0
        }
        U() {
            this.vb = !1
        }
        update(a) {
            a.has("disabled") && this.disabled &&
                this.U();
            super.update(a)
        }
        j() {
            return I `
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${lf({"mdc-ripple-surface--accent":this.accent,"mdc-ripple-surface--primary--activated":this.activated&&(this.primary||!this.accent),"mdc-ripple-surface--accent--activated":this.accent&&this.activated,"mdc-ripple-surface--primary--selected":this.selected&&(this.primary||!this.accent),"mdc-ripple-surface--accent--selected":this.accent&&this.selected,"mdc-ripple-surface--disabled":this.disabled,"mdc-ripple-surface--hover":this.vb,"mdc-ripple-surface--primary":this.primary,
"mdc-ripple-surface--selected":this.selected,"mdc-ripple-upgraded--background-focused":this.mb,"mdc-ripple-upgraded--foreground-activation":this.qb,"mdc-ripple-upgraded--foreground-deactivation":this.sb,"mdc-ripple-upgraded--unbounded":this.unbounded,"mdc-ripple-surface--internal-use-state-layer-custom-properties":this.internalUseStateLayerCustomProperties})}"
          style="${mf({"--mdc-ripple-fg-scale":this.Eb,"--mdc-ripple-fg-size":this.Tb,"--mdc-ripple-fg-translate-end":this.wc,"--mdc-ripple-fg-translate-start":this.xc,"--mdc-ripple-left":this.cc,"--mdc-ripple-top":this.vc})}"></div>`
        }
    };
    m([F(".mdc-ripple-surface"), p("design:type", HTMLElement)], O.prototype, "J", void 0);
    m([E({
        type: Boolean
    }), p("design:type", Object)], O.prototype, "primary", void 0);
    m([E({
        type: Boolean
    }), p("design:type", Object)], O.prototype, "accent", void 0);
    m([E({
        type: Boolean
    }), p("design:type", Object)], O.prototype, "unbounded", void 0);
    m([E({
        type: Boolean
    }), p("design:type", Object)], O.prototype, "disabled", void 0);
    m([E({
        type: Boolean
    }), p("design:type", Object)], O.prototype, "activated", void 0);
    m([E({
        type: Boolean
    }), p("design:type", Object)], O.prototype, "selected", void 0);
    m([E({
        type: Boolean
    }), p("design:type", Object)], O.prototype, "internalUseStateLayerCustomProperties", void 0);
    m([G(), p("design:type", Object)], O.prototype, "vb", void 0);
    m([G(), p("design:type", Object)], O.prototype, "mb", void 0);
    m([G(), p("design:type", Object)], O.prototype, "qb", void 0);
    m([G(), p("design:type", Object)], O.prototype, "sb", void 0);
    m([G(), p("design:type", Object)], O.prototype, "Eb", void 0);
    m([G(), p("design:type", Object)], O.prototype, "Tb", void 0);
    m([G(), p("design:type", Object)], O.prototype, "xc", void 0);
    m([G(), p("design:type", Object)], O.prototype, "wc", void 0);
    m([G(), p("design:type", Object)], O.prototype, "cc", void 0);
    m([G(), p("design:type", Object)], O.prototype, "vc", void 0);
    var Rf = K(['/**\n * @license\n * Copyright 2020 Google LLC\n * SPDX-License-Identifier: Apache-2.0\n */\n/**\n * @license\n * Copyright 2018 Google LLC\n * SPDX-License-Identifier: Apache-2.0\n */\n.mdc-ripple-surface {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  will-change: transform, opacity;\n  position: relative;\n  outline: none;\n  overflow: hidden;\n}\n.mdc-ripple-surface::before, .mdc-ripple-surface::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: "";\n}\n.mdc-ripple-surface::before {\n  transition: opacity 15ms linear, background-color 15ms linear;\n  z-index: 1;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 1);\n}\n.mdc-ripple-surface::after {\n  z-index: 0;\n  /* @alternate */\n  z-index: var(--mdc-ripple-z-index, 0);\n}\n.mdc-ripple-surface.mdc-ripple-upgraded::before {\n  transform: scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-ripple-surface.mdc-ripple-upgraded::after {\n  top: 0;\n  /* @noflip */\n  /*rtl:ignore*/\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after {\n  top: var(--mdc-ripple-top, 0);\n  /* @noflip */\n  /*rtl:ignore*/\n  left: var(--mdc-ripple-left, 0);\n}\n.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after {\n  animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n}\n.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after {\n  animation: mdc-ripple-fg-opacity-out 150ms;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-ripple-surface::before, .mdc-ripple-surface::after {\n  top: calc(50% - 100%);\n  /* @noflip */\n  /*rtl:ignore*/\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n.mdc-ripple-surface.mdc-ripple-upgraded::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n\n.mdc-ripple-surface[data-mdc-ripple-is-unbounded],\n.mdc-ripple-upgraded--unbounded {\n  overflow: visible;\n}\n.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before, .mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,\n.mdc-ripple-upgraded--unbounded::before,\n.mdc-ripple-upgraded--unbounded::after {\n  top: calc(50% - 50%);\n  /* @noflip */\n  /*rtl:ignore*/\n  left: calc(50% - 50%);\n  width: 100%;\n  height: 100%;\n}\n.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before, .mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,\n.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,\n.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after {\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  /* @noflip */\n  /*rtl:ignore*/\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,\n.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n\n.mdc-ripple-surface::before, .mdc-ripple-surface::after {\n  background-color: #000;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, #000);\n}\n.mdc-ripple-surface:hover::before, .mdc-ripple-surface.mdc-ripple-surface--hover::before {\n  opacity: 0.04;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.04);\n}\n.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before, .mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.12);\n}\n.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n.mdc-ripple-surface.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n}\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0);\n  }\n  to {\n    opacity: 0;\n  }\n}\n:host {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  display: block;\n}\n:host .mdc-ripple-surface {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  will-change: unset;\n}\n\n.mdc-ripple-surface--primary::before, .mdc-ripple-surface--primary::after {\n  background-color: #6200ee;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee));\n}\n.mdc-ripple-surface--primary:hover::before, .mdc-ripple-surface--primary.mdc-ripple-surface--hover::before {\n  opacity: 0.04;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.04);\n}\n.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before, .mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.12);\n}\n.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n.mdc-ripple-surface--primary.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n.mdc-ripple-surface--primary--activated::before {\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-activated-opacity, 0.12);\n}\n.mdc-ripple-surface--primary--activated::before, .mdc-ripple-surface--primary--activated::after {\n  background-color: #6200ee;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee));\n}\n.mdc-ripple-surface--primary--activated:hover::before, .mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before {\n  opacity: 0.16;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.16);\n}\n.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before, .mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before {\n  transition-duration: 75ms;\n  opacity: 0.24;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.24);\n}\n.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.24;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.24);\n}\n.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24);\n}\n.mdc-ripple-surface--primary--selected::before {\n  opacity: 0.08;\n  /* @alternate */\n  opacity: var(--mdc-ripple-selected-opacity, 0.08);\n}\n.mdc-ripple-surface--primary--selected::before, .mdc-ripple-surface--primary--selected::after {\n  background-color: #6200ee;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee));\n}\n.mdc-ripple-surface--primary--selected:hover::before, .mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before {\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.12);\n}\n.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before, .mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before {\n  transition-duration: 75ms;\n  opacity: 0.2;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.2);\n}\n.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.2;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.2);\n}\n.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.2);\n}\n\n.mdc-ripple-surface--accent::before, .mdc-ripple-surface--accent::after {\n  background-color: #018786;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786));\n}\n.mdc-ripple-surface--accent:hover::before, .mdc-ripple-surface--accent.mdc-ripple-surface--hover::before {\n  opacity: 0.04;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.04);\n}\n.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before, .mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.12);\n}\n.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n.mdc-ripple-surface--accent.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12);\n}\n.mdc-ripple-surface--accent--activated::before {\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-activated-opacity, 0.12);\n}\n.mdc-ripple-surface--accent--activated::before, .mdc-ripple-surface--accent--activated::after {\n  background-color: #018786;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786));\n}\n.mdc-ripple-surface--accent--activated:hover::before, .mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before {\n  opacity: 0.16;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.16);\n}\n.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before, .mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before {\n  transition-duration: 75ms;\n  opacity: 0.24;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.24);\n}\n.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.24;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.24);\n}\n.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24);\n}\n.mdc-ripple-surface--accent--selected::before {\n  opacity: 0.08;\n  /* @alternate */\n  opacity: var(--mdc-ripple-selected-opacity, 0.08);\n}\n.mdc-ripple-surface--accent--selected::before, .mdc-ripple-surface--accent--selected::after {\n  background-color: #018786;\n  /* @alternate */\n  background-color: var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786));\n}\n.mdc-ripple-surface--accent--selected:hover::before, .mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before {\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-opacity, 0.12);\n}\n.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before, .mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before {\n  transition-duration: 75ms;\n  opacity: 0.2;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-opacity, 0.2);\n}\n.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.2;\n  /* @alternate */\n  opacity: var(--mdc-ripple-press-opacity, 0.2);\n}\n.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.2);\n}\n\n.mdc-ripple-surface--disabled {\n  opacity: 0;\n}\n\n.mdc-ripple-surface--internal-use-state-layer-custom-properties::before, .mdc-ripple-surface--internal-use-state-layer-custom-properties::after {\n  background-color: #000;\n  /* @alternate */\n  background-color: var(--mdc-ripple-hover-state-layer-color, #000);\n}\n.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before, .mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before {\n  opacity: 0.04;\n  /* @alternate */\n  opacity: var(--mdc-ripple-hover-state-layer-opacity, 0.04);\n}\n.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before, .mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-focus-state-layer-opacity, 0.12);\n}\n.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.12;\n  /* @alternate */\n  opacity: var(--mdc-ripple-pressed-state-layer-opacity, 0.12);\n}\n.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: var(--mdc-ripple-pressed-state-layer-opacity, 0.12);\n}\n']);
    var Sf = class extends O {};
    Sf.N = [Rf];
    Sf = m([D("mwc-ripple")], Sf);
    /*

     Copyright 2020 Google LLC
     SPDX-License-Identifier: Apache-2.0
    */
    var Tf = class {
        constructor(a) {
            this.sa = b => {
                a().then(c => {
                    c && c.sa(b)
                })
            };
            this.Ba = () => {
                a().then(b => {
                    b && b.Ba()
                })
            };
            this.Fa = () => {
                a().then(b => {
                    b && b.Fa()
                })
            };
            this.Aa = () => {
                a().then(b => {
                    b && b.Aa()
                })
            };
            this.ka = () => {
                a().then(b => {
                    b && b.ka()
                })
            };
            this.U = () => {
                a().then(b => {
                    b && b.U()
                })
            }
        }
    };
    var Uf = class extends L {
        constructor() {
            super(...arguments);
            this.disabled = !1;
            this.icon = "";
            this.Fb = !1;
            this.g = new Tf(() => {
                this.Fb = !0;
                return this.Yd
            })
        }
        focus() {
            const a = this.Uc;
            a && (this.g.Fa(), a.focus())
        }
        blur() {
            const a = this.Uc;
            a && (this.g.Aa(), a.blur())
        }
        j() {
            return I `<button
        class="mdc-icon-button mdc-icon-button--display-flex"
        aria-label="${this.ariaLabel||this.icon}"
        aria-haspopup="${M(this.ariaHasPopup)}"
        ?disabled="${this.disabled}"
        @focus="${this.v}"
        @blur="${this.o}"
        @mousedown="${this.Fc}"
        @mouseenter="${this.A}"
        @mouseleave="${this.D}"
        @touchstart="${this.Gc}"
        @touchend="${this.l}"
        @touchcancel="${this.l}"
    >${this.Fb?I`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>`:""}
    <i class="material-icons">${this.icon}</i>
    <span
      ><slot></slot
    ></span>
  </button>`
        }
        Fc(a) {
            const b = () => {
                window.removeEventListener("mouseup", b);
                this.l()
            };
            window.addEventListener("mouseup", b);
            this.g.sa(a)
        }
        Gc(a) {
            this.g.sa(a)
        }
        l() {
            this.g.Ba()
        }
        A() {
            this.g.ka()
        }
        D() {
            this.g.U()
        }
        v() {
            this.g.Fa()
        }
        o() {
            this.g.Aa()
        }
    };
    m([E({
        type: Boolean,
        I: !0
    }), p("design:type", Object)], Uf.prototype, "disabled", void 0);
    m([E({
        type: String
    }), p("design:type", Object)], Uf.prototype, "icon", void 0);
    m([hf, E({
        type: String,
        M: "aria-label"
    }), p("design:type", String)], Uf.prototype, "ariaLabel", void 0);
    m([hf, E({
        type: String,
        M: "aria-haspopup"
    }), p("design:type", String)], Uf.prototype, "ariaHasPopup", void 0);
    m([F("button"), p("design:type", HTMLElement)], Uf.prototype, "Uc", void 0);
    m([$c(), p("design:type", Promise)], Uf.prototype, "Yd", void 0);
    m([G(), p("design:type", Object)], Uf.prototype, "Fb", void 0);
    m([Uc(), p("design:type", Function), p("design:paramtypes", [Event]), p("design:returntype", void 0)], Uf.prototype, "Fc", null);
    m([Uc(), p("design:type", Function), p("design:paramtypes", [Event]), p("design:returntype", void 0)], Uf.prototype, "Gc", null);
    var Vf = K(['/**\n * @license\n * Copyright 2018 Google LLC\n * SPDX-License-Identifier: Apache-2.0\n */\n.material-icons {\n  font-family: var(--mdc-icon-font, "Material Icons");\n  font-weight: normal;\n  font-style: normal;\n  font-size: var(--mdc-icon-size, 24px);\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n  /* Support for IE. */\n  font-feature-settings: "liga";\n}\n\n/**\n * @license\n * Copyright 2021 Google LLC\n * SPDX-License-Identifier: Apache-2.0\n */\n/**\n * @license\n * Copyright 2018 Google LLC\n * SPDX-License-Identifier: Apache-2.0\n */\n.mdc-icon-button {\n  font-size: 24px;\n  width: 48px;\n  height: 48px;\n  padding: 12px;\n}\n.mdc-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple {\n  width: 40px;\n  height: 40px;\n  margin-top: 4px;\n  margin-bottom: 4px;\n  margin-right: 4px;\n  margin-left: 4px;\n}\n.mdc-icon-button .mdc-icon-button__touch {\n  position: absolute;\n  top: 50%;\n  height: 48px;\n  /* @noflip */\n  /*rtl:ignore*/\n  left: 50%;\n  width: 48px;\n  transform: translate(-50%, -50%);\n}\n.mdc-icon-button:disabled {\n  color: rgba(0, 0, 0, 0.38);\n  /* @alternate */\n  color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38));\n}\n.mdc-icon-button svg,\n.mdc-icon-button img {\n  width: 24px;\n  height: 24px;\n}\n\n.mdc-icon-button {\n  display: inline-block;\n  position: relative;\n  box-sizing: border-box;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  fill: currentColor;\n  color: inherit;\n  text-decoration: none;\n  cursor: pointer;\n  user-select: none;\n  z-index: 0;\n  overflow: visible;\n}\n.mdc-icon-button .mdc-icon-button__touch {\n  position: absolute;\n  top: 50%;\n  height: 48px;\n  /* @noflip */\n  /*rtl:ignore*/\n  left: 50%;\n  width: 48px;\n  transform: translate(-50%, -50%);\n}\n.mdc-icon-button:disabled {\n  cursor: default;\n  pointer-events: none;\n}\n\n.mdc-icon-button--display-flex {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n}\n\n.mdc-icon-button__icon {\n  display: inline-block;\n}\n.mdc-icon-button__icon.mdc-icon-button__icon--on {\n  display: none;\n}\n\n.mdc-icon-button--on .mdc-icon-button__icon {\n  display: none;\n}\n.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on {\n  display: inline-block;\n}\n\n.mdc-icon-button {\n  display: inline-block;\n  position: relative;\n  box-sizing: border-box;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  fill: currentColor;\n  color: inherit;\n  text-decoration: none;\n  cursor: pointer;\n  user-select: none;\n  z-index: 0;\n  overflow: visible;\n}\n.mdc-icon-button .mdc-icon-button__touch {\n  position: absolute;\n  top: 50%;\n  height: 48px;\n  /* @noflip */\n  /*rtl:ignore*/\n  left: 50%;\n  width: 48px;\n  transform: translate(-50%, -50%);\n}\n.mdc-icon-button:disabled {\n  cursor: default;\n  pointer-events: none;\n}\n\n.mdc-icon-button--display-flex {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n}\n\n.mdc-icon-button__icon {\n  display: inline-block;\n}\n.mdc-icon-button__icon.mdc-icon-button__icon--on {\n  display: none;\n}\n\n.mdc-icon-button--on .mdc-icon-button__icon {\n  display: none;\n}\n.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on {\n  display: inline-block;\n}\n\n:host {\n  display: inline-block;\n  outline: none;\n}\n\n:host([disabled]) {\n  pointer-events: none;\n}\n\n.mdc-icon-button i,\n.mdc-icon-button svg,\n.mdc-icon-button img,\n.mdc-icon-button ::slotted(*) {\n  display: block;\n}\n\n:host {\n  --mdc-ripple-color: currentcolor;\n  -webkit-tap-highlight-color: transparent;\n}\n\n:host,\n.mdc-icon-button {\n  /**\n   * Any vertical-align other than the default of "baseline" will work here (and\n   * "top" is the shortest).\n   *\n   * In general, when an inline-block element has vertical-align: baseline and\n   * also a fixed height, extra space may "appear" below it. This is because the\n   * baseline it is aligned to is not the very bottom of the line, it\'s the line\n   * above the "descenders" (e.g. the tail of a "y" or "j"). This means the\n   * container must grow to accomodate both the fixed height inline-element, and\n   * the descender height below it.\n   *\n   * For unknown reasons, in this particular case, this only causes incorrect\n   * alignment in IE.\n   *\n   * IE needs the vertical-align on both the button and the host element.\n   */\n  vertical-align: top;\n}\n\n.mdc-icon-button {\n  width: var(--mdc-icon-button-size, 48px);\n  height: var(--mdc-icon-button-size, 48px);\n  padding: calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 );\n}\n.mdc-icon-button i,\n.mdc-icon-button svg,\n.mdc-icon-button img,\n.mdc-icon-button ::slotted(*) {\n  display: block;\n  width: var(--mdc-icon-size, 24px);\n  height: var(--mdc-icon-size, 24px);\n}\n']);
    var Wf = class extends Uf {};
    Wf.N = [Vf];
    Wf = m([D("mwc-icon-button")], Wf);
    var Xf = Wf;

    function Yf(a) {
        a = a.composedPath()[0];
        return a instanceof HTMLElement && a.classList.contains("extended-tap-target")
    }

    function Zf(a) {
        var b;
        if (null === a.template) throw Error("<ea-icon-button> must be provided with a icon");
        null === (b = a.h) || void 0 === b ? void 0 : b.remove();
        a.h = document.importNode(a.template.content, !0).children[0];
        a.h.setAttribute("slot", "");
        a.appendChild(a.h)
    }

    function $f(a) {
        void 0 === a.ariaExpanded ? (a.hb.removeAttribute("aria-haspopup"), a.hb.removeAttribute("aria-expanded")) : (a.hb.setAttribute("aria-haspopup", "true"), a.hb.setAttribute("aria-expanded", a.ariaExpanded))
    }
    var ag = class extends Xf {
        constructor() {
            super(...arguments);
            this.nf = !0;
            this.template = null;
            this.rtlFlip = !1;
            this.sizing = "dense";
            this.ink = "default";
            this.ariaExpanded = void 0;
            this.h = null
        }
        static get N() {
            return [K `
      :host {
        --icon-fill: var(--cros-icon-color-primary);
        --ripple-color: var(--cros-ripple-color);
        --mdc-ripple-color: var(--ripple-color);
        --mdc-ripple-focus-opacity: 0;
        --mdc-ripple-hover-opacity: var(--cros-ripple-opacity);
        color: var(--ripple-color);
        flex: none;
        white-space: nowrap;
      }

      :host([sizing='dense']) {
        --tap-target-size: 48px;
        --mdc-icon-button-size: 36px;
        --mdc-icon-size: 20px;
      }

      :host([sizing='touch']) {
        --tap-target-size: 56px;
        --mdc-icon-button-size: 48px;
        --mdc-icon-size: 24px;
      }

      :host([disabled]) {
        opacity: var(--cros-disabled-color-opacity);
      }

      :host([ink='blue']) {
        --icon-fill: var(--cros-icon-color-prominent);
        --ripple-color: var(--cros-prominent-ripple-color);
      }

      :host(:is(:hover, .hover)) {
        /* In mwc-ripple focus overtakes hover opacity. */
        --mdc-ripple-focus-opacity: var(--cros-ripple-opacity);
      }

      .extended-tap-target {
        height: var(--tap-target-size);
        width: var(--tap-target-size);
        display: grid;
        place-items: center;
      }

      .extended-tap-target > * {
        grid-area: 1/1/1/1;
      }

      ::slotted(svg) {
        pointer-events: none;
        fill: var(--icon-fill);
        stroke: var(--icon-fill);
        stroke-width: 0;
      }

      :host([dir="rtl"][rtlflip]) {
        transform: scaleX(-1);
      }

      :host button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      :host button:focus-visible:before {
        border: 2px solid var(--cros-focus-ring-color);
        border-radius: 50%;
        content: "";
        height: 100%;
        pointer-events: none;
        position: absolute;
        width: 100%;
      }
    `, ...Xf.N]
        }
        O(a) {
            super.O(a);
            this.addEventListener("mousedown", () => {
                this.h && this.h.animate({
                    transform: ["scale(1)", "scale(0.8)", "scale(1)"]
                }, {
                    duration: 200
                })
            });
            this.ad.addEventListener("mousedown", b => {
                Yf(b) && this.g.sa()
            });
            this.ad.addEventListener("mouseup", b => {
                Yf(b) && this.g.Ba()
            });
            Zf(this);
            $f(this)
        }
        fb(a) {
            a.has("disabled") && this.disabled && (this.g.Ba(), this.g.U());
            return super.fb(a)
        }
        qa(a) {
            super.qa(a);
            a.has("template") && Zf(this);
            a.has("ariaExpanded") && $f(this)
        }
        ka() {
            this.classList.add("hover");
            this.g.ka()
        }
        U() {
            this.classList.remove("hover");
            this.g.U()
        }
        j() {
            this.setAttribute("dir", document.dir);
            return I `
      <div class="extended-tap-target">
        ${super.j()}
      </div>
    `
        }
    };
    m([E({
        M: !1
    }), p("design:type", Object)], ag.prototype, "template", void 0);
    m([E({
        type: Boolean,
        I: !0
    }), p("design:type", Object)], ag.prototype, "rtlFlip", void 0);
    m([E({
        type: String,
        I: !0
    }), p("design:type", String)], ag.prototype, "sizing", void 0);
    m([E({
        type: String,
        I: !0
    }), p("design:type", String)], ag.prototype, "ink", void 0);
    m([E({
        type: String,
        M: "aria-expanded"
    }), p("design:type", Object)], ag.prototype, "ariaExpanded", void 0);
    m([F(".extended-tap-target"), p("design:type", HTMLDivElement)], ag.prototype, "ad", void 0);
    m([F("button"), p("design:type", HTMLButtonElement)], ag.prototype, "hb", void 0);
    ag = m([D("ea-icon-button")], ag);

    function bg() {
        return "rtl" === document.dir ? "rtl" : "ltr"
    };
    var cg, dg;
    const eg = window,
        fg = (null === (cg = eg.ShadyDOM) || void 0 === cg ? 0 : cg.inUse) && !0 === (null === (dg = eg.ShadyDOM) || void 0 === dg ? void 0 : dg.noPatch) ? eg.ShadyDOM.wrap : a => a;
    var gg = (a, b, c) => {
            var d, e = fg(a.Y).parentNode;
            b = void 0 === b ? a.ca : b.Y;
            if (void 0 === c) c = fg(e).insertBefore(document.createComment(""), b), e = fg(e).insertBefore(document.createComment(""), b), c = new Fe(c, e, a, a.options);
            else {
                const g = fg(c.ca).nextSibling,
                    k = c.g,
                    n = k !== a;
                if (n) {
                    null === (d = c.K) || void 0 === d ? void 0 : d.call(c, a);
                    c.g = a;
                    var f;
                    void 0 !== c.m && (f = a.da) !== k.da && c.m(f)
                }
                if (g !== b || n)
                    for (a = c.Y; a !== g;) f = fg(a).nextSibling, fg(e).insertBefore(a, b), a = f
            }
            return c
        },
        hg = (a, b, c = a) => {
            a.ha(b, c);
            return a
        };
    const ig = {};
    var jg = (a, b = ig) => {
            a.H = b
        },
        kg = a => {
            var b;
            null === (b = a.m) || void 0 === b ? void 0 : b.call(a, !1, !0);
            let c = a.Y;
            for (a = fg(a.ca).nextSibling; c !== a;) {
                const d = fg(c).nextSibling;
                fg(c).remove();
                c = d
            }
        };
    class lg extends kf {
        constructor(a) {
            super();
            this.h = void 0;
            if (2 !== a.type) throw Error("contents can only be used in text bindings");
        }
        j(a) {
            if (a === this.h) return re;
            this.h = a;
            return document.importNode(a.content, !0)
        }
    }
    var mg = jf(lg);
    document.createElement("template");
    var ng = class extends L {
        constructor() {
            super(...arguments);
            this.template = null;
            this.rtlFlip = !1;
            this.ariaHidden = "true"
        }
        static get N() {
            return K `
      :host {
        --icon-color: currentColor;
        --icon-size: var(--ea-icon-size, 24px);
        display: block;
        height: var(--icon-size);
        width: var(--icon-size);
      }

      svg {
        width: var(--icon-size);
        height: var(--icon-size);
        fill: var(--icon-color);
      }

      :host([dir="rtl"][rtlflip]) {
        transform: scaleX(-1);
      }
    `
        }
        j() {
            if (null === this.template) throw Error("<ea-icon> must be provided with a icon");
            this.setAttribute("dir", document.dir);
            return I `${mg(this.template)}`
        }
    };
    m([E({
        M: !1
    }), p("design:type", Object)], ng.prototype, "template", void 0);
    m([E({
        type: Boolean,
        I: !0
    }), p("design:type", Object)], ng.prototype, "rtlFlip", void 0);
    m([E({
        type: String,
        I: !0,
        M: "aria-hidden"
    }), p("design:type", Object)], ng.prototype, "ariaHidden", void 0);
    ng = m([D("ea-icon")], ng);
    let og;
    var pg;
    if (void 0 === og) {
        var qg = document.createElement("template");
        qg.innerHTML = '<svg height="24" id="arrow_drop_down_24px" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5H7z"></path></svg>\n';
        og = qg
    }
    pg = og;
    let rg;
    var sg;
    if (void 0 === rg) {
        var tg = document.createElement("template");
        tg.innerHTML = '<svg height="24" id="more_horiz_24px" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>\n';
        rg = tg
    }
    sg = rg;
    var ug = K `'Google Sans', 'Roboto', sans-serif`,
        vg = K `'Roboto', 'Noto', sans-serif`;
    K `
  * {
    font-family: ${vg};
  }
`;
    K `
  ${12}px/${18}px
  ${vg}
`;
    var wg = K `${14}px/${20}px ${vg}`,
        xg = K `${13}px/${20}px ${vg}`;
    K `
  ${500}
  ${14}px/${20}px
  ${vg}
`;
    var yg = K `
  ${500}
  ${13}px/${20}px
  ${vg}
`,
        zg = K `
  ${500}
  ${24}px/${32}px
  ${ug}
`;
    K `
  ${500}
  ${22}px/${28}px
  ${ug}
`;
    K `
  ${500}
  ${15}px/${22}px
  ${ug}
`;
    K `
  ${500}
  ${15}px/${22}px
  ${vg}
`;
    K `
  ${500} ${16}px/${24}px
  ${ug}
`;
    K `
  ${500} ${16}px/${24}px
  ${vg}
`;

    function Ag(a) {
        if (a.onlyShowIcon) return I `
        <div class="icon-container icon-only">
          <slot name="icon">
            <span class="ellipsis-icon">
              <ea-icon .template=${sg}></ea-icon>
            </span>
          </slot>
        </div>
      `;
        const b = 2 !== a.expandedState ? I `<ea-icon .template=${pg}></ea-icon>` : "";
        return I `
      <div
          class="icon-container expand-icon"
          dir=${bg()}
          @click=${a.l}>
        ${b}
      </div>
      <slot class="primary-icon" name="icon"></slot>
      <span dir=${M(a.overrideTextDirection)}>${a.text}</span>
    `
    }
    var Cg = class extends L {
        constructor() {
            super(...arguments);
            this.expandedState = 2;
            this.selectedState = 0;
            this.onlyShowIcon = !1;
            this.text = "";
            this.overrideTextDirection = void 0;
            this.tabIndex = -1
        }
        focus() {
            this.button.focus()
        }
        get h() {
            return 1 === this.expandedState ? this.Zd.assignedElements().filter(Bg) : []
        }
        get g() {
            const a = this.parentElement;
            return a ? a.closest("ea-navigation-tree-item") : null
        }
        O() {
            this.addEventListener("blur", () => {
                this.removeAttribute("style")
            });
            let a = 0,
                b = this;
            for (; b;) b = b.g, a++;
            this.setAttribute("level", String(a));
            this.button.setAttribute("aria-level", String(a))
        }
        static get N() {
            return K `
      :host {
        --navigation-tree-item-background-color-hover: var(--cros-ink-ripple-color);
        --navigation-tree-item-background-color-selected: var(--cros-highlight-color);
        --navigation-tree-item-border-color-focus: var(--cros-focus-ring-color);
        --navigation-tree-item-color-default: var(--cros-text-color-primary);
        --navigation-tree-item-color-selected: var(--cros-text-color-selection);
        color: var(--navigation-tree-item-color-default);
        font: ${yg};
        width: 100%;
      }

      .button-container {
        align-items: center;
        display: flex;
        height: 40px;
        width: 100%;
      }

      .button-container:hover .button-content {
        background-color: var(--navigation-tree-item-background-color-hover);
      }

      .button-container .button-content[aria-selected="true"] {
        background-color: var(--navigation-tree-item-background-color-selected);
      }

      .button-content {
        align-items: center;
        background-color: inherit;
        border: none;
        box-sizing: border-box;
        color: inherit;
        cursor: pointer;
        display: flex;
        font: inherit;
        height: 32px;
        margin: 0;
        padding: 0;
        padding-inline-end: 20px;
        padding-inline-start: var(--navigation-tree-item-padding-start, 0);
        position: relative;
        text-align: inherit;
        width: 100%;
      }

      .button-content:not([aria-level="1"]) {
        font: ${xg};
      }

      .button-content:is([aria-selected="true"], .child-selected) {
        color: var(--navigation-tree-item-color-selected);
        font: ${yg};
      }

      .button-content:is([aria-selected="true"], .child-selected) slot[name="icon"]::slotted(*) {
        color: var(--cros-icon-color-selection);
      }

      .button-content[dir="ltr"] {
        border-bottom-right-radius: 30px;
        border-top-right-radius: 30px;
      }

      .button-content[dir="rtl"] {
        border-bottom-left-radius: 30px;
        border-top-left-radius: 30px;
      }

      .button-content:focus {
        border: 1px solid var(--navigation-tree-item-border-color-focus);
        outline: none;
      }

      .button-content[dir="ltr"]:focus {
        border-left: none;
      }

      .button-content[dir="rtl"]:focus {
        border-right: none;
      }

      .expand-icon {
        margin: 0 2px 0 6px;
      }

      .expand-icon[dir="ltr"] {
        transform: rotate(-90deg);
      }

      .expand-icon[dir="rtl"] {
        transform: rotate(90deg);
      }

      .button-content[aria-expanded="true"] .expand-icon {
        transform: rotate(0);
      }

      .icon-container {
        height: 20px;
        min-width: 20px;
        width: 20px;
      }

      .icon-only {
        margin-inline-start: 16px;
        margin-inline-end: 0;
      }

      ea-icon {
        --ea-icon-size: 20px;
      }

      slot[name="icon"]::slotted(*) {
        color: var(--cros-text-color-primary);
        height: 20px;
        pointer-events: none;
        width: 20px;
      }

      slot[name="icon"].primary-icon::slotted(*) {
        margin-inline-end: 16px;
      }

      span {
        color: inherit;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    `
        }
        j() {
            const a = 1 === this.expandedState ? I `<slot></slot>` : "";
            var b = lf({
                    "button-content": !0,
                    "child-selected": 2 === this.selectedState
                }),
                c = bg();
            a: {
                switch (this.expandedState) {
                    case 1:
                        var d = !0;
                        break a;
                    case 0:
                        d = !1;
                        break a
                }
                d = void 0
            }
            return I `
      <div
          class="button-container"
          @pointerdown=${()=>{this.setAttribute("style","--navigation-tree-item-border-color-focus: transparent")}}>
        <button
            class=${b}
            dir=${c}
            id="nav-button"
            role="treeitem"
            aria-selected=${1===this.selectedState}
            aria-expanded=${M(d)}
            aria-label=${this.text}
            title=${this.text}
            tabindex=${this.tabIndex}>
          ${Ag(this)}
        </button>
      </div>
      <div class="expanded-container">
        ${a}
      </div>
    `
        }
        l(a) {
            1 === this.expandedState ? this.expandedState = 0 : 0 === this.expandedState && (this.expandedState = 1);
            a.stopPropagation()
        }
    };
    m([E({
        M: !1
    }), p("design:type", Number)], Cg.prototype, "expandedState", void 0);
    m([E({
        M: !1
    }), p("design:type", Number)], Cg.prototype, "selectedState", void 0);
    m([E({
        M: !1
    }), p("design:type", Object)], Cg.prototype, "onlyShowIcon", void 0);
    m([E({
        M: !1
    }), p("design:type", Object)], Cg.prototype, "text", void 0);
    m([E({
        M: !1
    }), p("design:type", Object)], Cg.prototype, "overrideTextDirection", void 0);
    m([E({
        M: !1
    }), p("design:type", Number)], Cg.prototype, "tabIndex", void 0);
    m([F("button"), p("design:type", HTMLElement)], Cg.prototype, "button", void 0);
    m([F("slot:not([name]"), p("design:type", HTMLSlotElement)], Cg.prototype, "Zd", void 0);
    m([F('slot[name="icon"]'), p("design:type", HTMLSlotElement)], Cg.prototype, "qg", void 0);
    Cg = m([D("ea-navigation-tree-item")], Cg);

    function Bg(a) {
        return a instanceof Cg
    };

    function Dg(a, b) {
        a = [...a.querySelectorAll("ea-navigation-tree-item")];
        for (const c of a) c.selectedState = 0;
        b.selectedState = 1;
        for (b = b.g; b;) b.selectedState = 2, b = b.g
    }

    function Eg(a) {
        for (a = a.nextElementSibling; a && !Bg(a);) a = a.nextElementSibling;
        return a
    }

    function Fg(a, b) {
        if (1 !== b.expandedState) return b;
        const c = b.h;
        return 0 === c.length ? b : Fg(a, c[c.length - 1])
    }
    var Gg = class extends L {
        constructor() {
            super();
            this.g = null;
            this.setAttribute("role", "tree");
            this.addEventListener("focusin", a => {
                if (a = a.target.closest("ea-navigation-tree-item")) this.g && (this.g.tabIndex = -1), this.g = a, this.g.tabIndex = 0
            });
            this.addEventListener("keydown", a => {
                a: if (0 !== this.h.length) {
                    var b = null;
                    switch (a.key) {
                        case "Home":
                            a.preventDefault();
                            b = this.h[0];
                            break;
                        case "End":
                            a.preventDefault();
                            b = Fg(this, this.h[this.h.length - 1]);
                            break;
                        case "ArrowLeft":
                        case "ArrowRight":
                            a.preventDefault();
                            if (!this.g) break a;
                            b: {
                                b = a.key;
                                var c = this.g;
                                if (c)
                                    if (a = "rtl" === bg() ? "ArrowLeft" : "ArrowRight", b === a) 0 === c.expandedState && (c.expandedState = 1);
                                    else if (1 === c.expandedState) 1 === c.expandedState && (c.expandedState = 0);
                                else if (c.g) {
                                    b = c.g;
                                    break b
                                }
                                b = null
                            }
                            break;
                        case "ArrowDown":
                            a.preventDefault();
                            if (!this.g) break a;
                            if (1 === this.g.expandedState && 0 < this.g.h.length) b = this.g.h[0];
                            else if (b = Eg(this.g), !b)
                                for (a = this.g.g; a;) {
                                    if (c = Eg(a)) {
                                        b = c;
                                        break
                                    }
                                    a = a.g
                                }
                            break;
                        case "ArrowUp":
                            a.preventDefault();
                            if (!this.g) break a;
                            for (b = this.g.previousElementSibling; b &&
                                !Bg(b);) b = b.previousElementSibling;
                            b = b ? Fg(this, b) : this.g.g
                    }
                    null === b || void 0 === b ? void 0 : b.focus()
                }
            });
            this.addEventListener("click", a => {
                (a = a.target.closest("ea-navigation-tree-item")) && Dg(this, a)
            })
        }
        static get N() {
            return K `
      :host {
        display: block;
      }
    `
        }
        j() {
            return I `<slot></slot>`
        }
        O() {
            if (0 !== this.h.length) {
                this.setAttribute("aria-setsize", `${this.h.length}`);
                var a = null,
                    b = [...this.querySelectorAll("ea-navigation-tree-item")];
                for (const c of b)
                    if (c.tabIndex = -1, 1 === c.selectedState) {
                        a = c;
                        break
                    }
                a || (a = this.h[0], a.selectedState = 1);
                Dg(this, a);
                this.g = a;
                this.g.tabIndex = 0
            }
        }
        get h() {
            return this.$d.assignedElements().filter(Bg)
        }
    };
    m([F("slot"), p("design:type", HTMLSlotElement)], Gg.prototype, "$d", void 0);
    Gg = m([D("ea-navigation-tree"), p("design:paramtypes", [])], Gg);
    const Hg = (a, b, c) => {
        const d = new Map;
        for (; b <= c; b++) d.set(a[b], b);
        return d
    };
    var Ig = jf(class extends kf {
        constructor(a) {
            super();
            if (2 !== a.type) throw Error("repeat() can only be used in text expressions");
        }
        m(a, b, c) {
            let d;
            void 0 === c ? c = b : void 0 !== b && (d = b);
            b = [];
            const e = [];
            let f = 0;
            for (const g of a) b[f] = d ? d(g, f) : f, e[f] = c(g, f), f++;
            return {
                values: e,
                keys: b
            }
        }
        j(a, b, c) {
            return this.m(a, b, c).values
        }
        update(a, [b, c, d]) {
            var e;
            const f = a.H,
                {
                    values: g,
                    keys: k
                } = this.m(b, c, d);
            if (!f) return this.h = k, g;
            const n = null !== (e = this.h) && void 0 !== e ? e : this.h = [];
            b = [];
            let q;
            c = 0;
            d = f.length - 1;
            let r = 0,
                u = g.length - 1;
            for (; c <=
                d && r <= u;)
                if (null === f[c]) c++;
                else if (null === f[d]) d--;
            else if (n[c] === k[r]) b[r] = hg(f[c], g[r]), c++, r++;
            else if (n[d] === k[u]) b[u] = hg(f[d], g[u]), d--, u--;
            else if (n[c] === k[u]) b[u] = hg(f[c], g[u]), gg(a, b[u + 1], f[c]), c++, u--;
            else if (n[d] === k[r]) b[r] = hg(f[d], g[r]), gg(a, f[c], f[d]), d--, r++;
            else {
                if (void 0 === t) {
                    var t = Hg(k, r, u);
                    q = Hg(n, c, d)
                }
                if (t.has(n[c]))
                    if (t.has(n[d])) {
                        var w = q.get(k[r]);
                        const A = void 0 !== w ? f[w] : null;
                        null === A ? (w = gg(a, f[c]), hg(w, g[r]), b[r] = w) : (b[r] = hg(A, g[r]), gg(a, f[c], A), f[w] = null);
                        r++
                    } else kg(f[d]),
                        d--;
                else kg(f[c]), c++
            }
            for (; r <= u;) t = gg(a, b[u + 1]), hg(t, g[r]), b[r++] = t;
            for (; c <= d;) t = f[c++], null !== t && kg(t);
            this.h = k;
            jg(a, b);
            return re
        }
    });
    var Jg = class extends L {
        load() {
            return v(this, function*() {
                !this.bb && this.src && (this.bb = yield(yield fetch(this.src)).json())
            })
        }
        g(a) {
            a = a.target;
            if (Bg(a)) {
                if (a = a.text) this.selected = a;
                this.De.scrollTop = 0
            }
        }
        j() {
            if (!this.bb) return I ``;
            const a = Object.keys(this.bb);
            a.sort();
            const b = this.selected || a[0],
                c = this.bb[b];
            return I `
      <ea-navigation-tree id="notices">
        ${Ig(a,d=>d,d=>I`
              <ea-navigation-tree-item
                  ?selected=${b===d}
                  @click=${this.g}
                  .text=${d}>
              </ea-navigation-tree-item>
            `)}
      </ea-navigation-tree>
      <div id="content-container">
        <div id="content">
          <h1>${b}</h1>
          <p id="body">${c.trim()}</p>
        </div>
      </div>
    `
        }
    };
    Jg.N = K `
    :host {
      display: grid;
      grid-template-areas:
          "sidebar content";
      grid-template-columns: auto 1fr;
    }
    #body {
      font: ${xg};
      margin-top: 36px;
      white-space: pre-line;
    }
    #content-container {
      grid-area: content;
      margin-inline-start: 40px;
      overflow-y: auto;
      padding-bottom: 32px;
      padding-inline-end: 32px;
    }
    #content {
      color: var(--cros-text-color-primary);
      user-select: text;
      word-break: break-word;
    }
    ea-navigation-tree {
      grid-area: sidebar;
      overflow-y: auto;
      padding-right: 8px;
      width: 160px;
    }
    h1 {
      font: ${zg};
      margin: 0;
    }
    @media all and (min-width: 600px) {
      #content {
        max-width: 352px;
        min-width: 240px;
      }
    }
    @media all and (min-width: 768px) {
      #content {
        max-width: 352px;
        min-width: 352px;
      }
      ea-navigation-tree {
        width: 192px;
      }
    }
    @media all and (min-width: 960px) {
      #content {
        max-width: 448px;
        min-width: 448px;
      }
      #content-container {
        margin-inline-start: 64px;
      }
    }
  `;
    m([E({
        type: String
    }), p("design:type", String)], Jg.prototype, "src", void 0);
    m([G(), p("design:type", Object)], Jg.prototype, "bb", void 0);
    m([G(), p("design:type", String)], Jg.prototype, "selected", void 0);
    m([F("#content-container"), p("design:type", HTMLElement)], Jg.prototype, "De", void 0);
    Jg = m([D("ea-oss-notices")], Jg);
    var Kg = class extends L {
        O() {
            this.af.load()
        }
        j() {
            return I `
      <ea-oss-notices src="./notices.json"></ea-oss-notices>
    `
        }
    };
    Kg.N = K `
    ea-oss-notices {
      background: white;
      height: 100vh;
      width: 100vw;
    }
  `;
    m([F("ea-oss-notices"), p("design:type", Jg)], Kg.prototype, "af", void 0);
    Kg = m([D("calculator-licenses-popup")], Kg);
    var P = a => (b, c) => {
        if (!b.constructor.Ka) {
            b.constructor.Ka = new Map;
            const d = b.qa;
            b.qa = function(e) {
                d.call(this, e);
                e.forEach((f, g) => {
                    const k = this.constructor.Ka.get(g);
                    void 0 !== k && k.call(this, this[g], f)
                })
            }
        } else if (!b.constructor.hasOwnProperty("_observers")) {
            const d = b.constructor.Ka;
            b.constructor.Ka = new Map;
            d.forEach((e, f) => b.constructor.Ka.set(f, e))
        }
        b.constructor.Ka.set(c, a)
    };

    function Lg(a, b, c) {
        const d = () => {
            window.removeEventListener(b, d);
            a.g.Ba()
        };
        window.addEventListener(b, d);
        a.g.sa(c)
    }

    function Mg(a, b, c) {
        a.noninteractive || (b = new CustomEvent("request-selected", {
            bubbles: !0,
            composed: !0,
            detail: {
                source: c,
                selected: b
            }
        }), a.dispatchEvent(b))
    }
    var Q = class extends L {
        constructor() {
            super(...arguments);
            this.value = "";
            this.group = null;
            this.tabindex = -1;
            this.activated = this.twoline = this.disabled = !1;
            this.graphic = null;
            this.Gb = this.selected = this.noninteractive = this.hasMeta = this.multipleGraphics = !1;
            this.Ja = null;
            this.l = !0;
            this.o = !1;
            this.g = new Tf(() => {
                this.Gb = !0;
                return this.ae
            });
            this.h = [{
                target: this,
                Ca: ["click"],
                xa: () => {
                    Mg(this, !this.selected, "interaction")
                }
            }, {
                target: this,
                Ca: ["mouseenter"],
                xa: this.g.ka
            }, {
                target: this,
                Ca: ["mouseleave"],
                xa: this.g.U
            }, {
                target: this,
                Ca: ["focus"],
                xa: this.g.Fa
            }, {
                target: this,
                Ca: ["blur"],
                xa: this.g.Aa
            }, {
                target: this,
                Ca: ["mousedown", "touchstart"],
                xa: a => {
                    Lg(this, "mousedown" === a.type ? "mouseup" : "touchend", a)
                }
            }]
        }
        get text() {
            const a = this.textContent;
            return a ? a.trim() : ""
        }
        j() {
            const a = I `
      <span class="mdc-deprecated-list-item__text">
        ${this.twoline?I`
      <span class="mdc-deprecated-list-item__primary-text">
        <slot></slot>
      </span>
      <span class="mdc-deprecated-list-item__secondary-text">
        <slot name="secondary"></slot>
      </span>
    `:I`<slot></slot>`}
      </span>`;
            return I `
      ${this.Gb?I`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>`:this.activated?I`<div class="fake-activated-ripple"></div>`:""}
      ${this.graphic?I`
      <span class="mdc-deprecated-list-item__graphic material-icons ${lf({multi:this.multipleGraphics})}">
        <slot name="graphic"></slot>
      </span>`:I``}
      ${a}
      ${this.hasMeta?I`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`:I``}`
        }
        connectedCallback() {
            super.connectedCallback();
            this.noninteractive || this.setAttribute("mwc-list-item", "");
            for (const a of this.h)
                for (const b of a.Ca) a.target.addEventListener(b, a.xa, {
                    passive: !0
                })
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            for (const a of this.h)
                for (const b of a.Ca) a.target.removeEventListener(b, a.xa);
            this.Ja && (this.Ja.Yc ? this.Ja.Yc(!0) : this.Ja.oa(!0))
        }
        O() {
            const a = new Event("list-item-rendered", {
                bubbles: !0,
                composed: !0
            });
            this.dispatchEvent(a)
        }
    };
    m([F("slot"), p("design:type", Object)], Q.prototype, "Rf", void 0);
    m([$c(), p("design:type", Promise)], Q.prototype, "ae", void 0);
    m([E({
        type: String
    }), p("design:type", Object)], Q.prototype, "value", void 0);
    m([E({
        type: String,
        I: !0
    }), p("design:type", Object)], Q.prototype, "group", void 0);
    m([E({
        type: Number,
        I: !0
    }), p("design:type", Object)], Q.prototype, "tabindex", void 0);
    m([E({
        type: Boolean,
        I: !0
    }), P(function(a) {
        a ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false")
    }), p("design:type", Object)], Q.prototype, "disabled", void 0);
    m([E({
        type: Boolean,
        I: !0
    }), p("design:type", Object)], Q.prototype, "twoline", void 0);
    m([E({
        type: Boolean,
        I: !0
    }), p("design:type", Object)], Q.prototype, "activated", void 0);
    m([E({
        type: String,
        I: !0
    }), p("design:type", Object)], Q.prototype, "graphic", void 0);
    m([E({
        type: Boolean
    }), p("design:type", Object)], Q.prototype, "multipleGraphics", void 0);
    m([E({
        type: Boolean
    }), p("design:type", Object)], Q.prototype, "hasMeta", void 0);
    m([E({
        type: Boolean,
        I: !0
    }), P(function(a) {
        a ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.activated = this.selected = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "")
    }), p("design:type", Object)], Q.prototype, "noninteractive", void 0);
    m([E({
        type: Boolean,
        I: !0
    }), P(function(a) {
        var b = this.getAttribute("role");
        (b = "gridcell" === b || "option" === b || "row" === b || "tab" === b) && a ? this.setAttribute("aria-selected", "true") : b && this.setAttribute("aria-selected", "false");
        this.l ? this.l = !1 : Mg(this, a, "property")
    }), p("design:type", Object)], Q.prototype, "selected", void 0);
    m([G(), p("design:type", Object)], Q.prototype, "Gb", void 0);
    m([G(), p("design:type", Object)], Q.prototype, "Ja", void 0);
    var Ng = K([':host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}\n']);
    var Og = class extends Q {};
    Og.N = [Ng];
    Og = m([D("mwc-list-item")], Og);
    var Pg = class extends Og {
        constructor() {
            super(...arguments);
            this.role = "menuitem"
        }
        static get N() {
            const a = K `
      .mdc-deprecated-list-item__meta {
        margin-left: 0;
        margin-right: 0;
        margin-inline-start: auto;
        margin-inline-end: 0;
      }
      :host([graphic="icon"]) .mdc-deprecated-list-item__graphic {
        margin-inline-end: 16px;
      }
    `;
            return [...Og.N, a]
        }
    };
    m([E({
        I: !0,
        M: !0
    }), p("design:type", Object)], Pg.prototype, "role", void 0);
    Pg = m([D("ea-menu-list-item")], Pg);

    function Qg(a) {
        return a.$ || a.anchor || null
    };
    /*

     Copyright 2020 Google Inc.

     Permission is hereby granted, free of charge, to any person obtaining a copy
     of this software and associated documentation files (the "Software"), to deal
     in the Software without restriction, including without limitation the rights
     to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     copies of the Software, and to permit persons to whom the Software is
     furnished to do so, subject to the following conditions:

     The above copyright notice and this permission notice shall be included in
     all copies or substantial portions of the Software.

     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     THE SOFTWARE.
    */
    const R = new Set;
    R.add("Backspace");
    R.add("Enter");
    R.add("Spacebar");
    R.add("PageUp");
    R.add("PageDown");
    R.add("End");
    R.add("Home");
    R.add("ArrowLeft");
    R.add("ArrowUp");
    R.add("ArrowRight");
    R.add("ArrowDown");
    R.add("Delete");
    R.add("Escape");
    R.add("Tab");
    const S = new Map;
    S.set(8, "Backspace");
    S.set(13, "Enter");
    S.set(32, "Spacebar");
    S.set(33, "PageUp");
    S.set(34, "PageDown");
    S.set(35, "End");
    S.set(36, "Home");
    S.set(37, "ArrowLeft");
    S.set(38, "ArrowUp");
    S.set(39, "ArrowRight");
    S.set(40, "ArrowDown");
    S.set(46, "Delete");
    S.set(27, "Escape");
    S.set(9, "Tab");
    const Rg = new Set;
    Rg.add("PageUp");
    Rg.add("PageDown");
    Rg.add("End");
    Rg.add("Home");
    Rg.add("ArrowLeft");
    Rg.add("ArrowUp");
    Rg.add("ArrowRight");
    Rg.add("ArrowDown");

    function Sg(a) {
        const b = a.key;
        return R.has(b) ? b : (a = S.get(a.keyCode)) ? a : "Unknown"
    };
    var Tg = {
            ["mdc-list-item--activated"]: "mdc-deprecated-list-item--activated",
            ["mdc-list-item"]: "mdc-deprecated-list-item",
            ["mdc-list-item--disabled"]: "mdc-deprecated-list-item--disabled",
            ["mdc-list-item--selected"]: "mdc-deprecated-list-item--selected",
            ["mdc-list-item__text"]: "mdc-deprecated-list-item__text",
            ["mdc-list-item__primary-text"]: "mdc-deprecated-list-item__primary-text",
            ["mdc-list"]: "mdc-deprecated-list"
        },
        Ug = {
            vf: "MDCList:action",
            xf: "aria-checked",
            yf: '[role="checkbox"][aria-checked="true"]',
            zf: '[role="radio"][aria-checked="true"]',
            Dc: "aria-current",
            Af: "aria-disabled",
            Ef: "aria-orientation",
            Ff: "horizontal",
            Gf: '[role="checkbox"]',
            Qd: "aria-selected",
            Cf: '[role="listbox"], [role="menu"]',
            Df: '[aria-multiselectable="true"]',
            Hf: 'input[type="checkbox"], input[type="radio"]',
            Rd: 'input[type="checkbox"]',
            If: `
    .${"mdc-list-item"} button:not(:disabled),
    .${"mdc-list-item"} a,
    .${Tg["mdc-list-item"]} button:not(:disabled),
    .${Tg["mdc-list-item"]} a
  `,
            Lf: ".mdc-deprecated-list",
            Of: `
    .${"mdc-list-item"} button:not(:disabled),
    .${"mdc-list-item"} a,
    .${"mdc-list-item"} input[type="radio"]:not(:disabled),
    .${"mdc-list-item"} input[type="checkbox"]:not(:disabled),
    .${Tg["mdc-list-item"]} button:not(:disabled),
    .${Tg["mdc-list-item"]} a,
    .${Tg["mdc-list-item"]} input[type="radio"]:not(:disabled),
    .${Tg["mdc-list-item"]} input[type="checkbox"]:not(:disabled)
  `,
            ag: 'input[type="radio"]',
            cg: '[aria-selected="true"], [aria-current="true"]'
        },
        T = {
            W: -1,
            dg: 300
        };
    const Vg = (a, b) => a - b,
        Wg = ["input", "button", "textarea", "select"];

    function Xg(a) {
        return a instanceof Set
    }
    var Yg = a => {
        a = a === T.W ? new Set : a;
        return Xg(a) ? new Set(a) : new Set([a])
    };

    function Zg(a, b) {
        a.m = b;
        const c = a.h;
        b ? Xg(c) || (a.h = c === T.W ? new Set : new Set([c])) : Xg(c) && (a.h = c.size ? Array.from(c).sort(Vg)[0] : T.W)
    }

    function $g(a, b) {
        if (b instanceof Set) {
            if (!a.m) throw Error("MDCListFoundation: Array of index is only supported for checkbox based list");
            if (0 === b.size) return !0;
            let c = !1;
            for (const d of b)
                if (c = ah(a, d)) break;
            return c
        }
        if ("number" === typeof b) {
            if (a.m) throw Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + b);
            return b === T.W || ah(a, b)
        }
        return !1
    }

    function bh(a, b, c = !0) {
        var d = Array.from(Yg(a.h)),
            e = Array.from(b);
        const f = {
            Rb: [],
            pa: []
        };
        d = d.sort(Vg);
        e = e.sort(Vg);
        let g = 0,
            k = 0;
        for (; g < d.length || k < e.length;) {
            const n = d[g],
                q = e[k];
            n === q ? (g++, k++) : void 0 !== n && (void 0 === q || n < q) ? (f.pa.push(n), g++) : void 0 !== q && (void 0 === n || q < n) && (f.Rb.push(q), k++)
        }
        if (f.pa.length || f.Rb.length) {
            for (const n of f.pa) c && a.g.eb(n, !1), a.l && a.g.cb(n, !1);
            for (const n of f.Rb) c && a.g.eb(n, !0), a.l && a.g.cb(n, !0);
            a.h = b;
            a.g.Pa(b, f)
        }
    }

    function ch(a, b, c = !0) {
        if (a.h !== b) {
            a.h !== T.W && (a.g.eb(a.h, !1), a.l && a.g.cb(a.h, !1));
            c && a.g.eb(b, !0);
            a.l && a.g.cb(b, !0);
            a.h === T.W && (a.o = a.g.fd(b, Ug.Dc));
            const d = (c = null !== a.o) ? Ug.Dc : Ug.Qd;
            a.h !== T.W && a.g.lc(a.h, d, "false");
            a.g.lc(b, d, c ? a.o : "true");
            a.h = b;
            a.g.Pa(b)
        }
    }

    function dh(a, b) {
        $g(a, b) && (a.m ? bh(a, Yg(b)) : ch(a, b))
    }

    function eh(a, b) {
        0 <= b && a.g.Qa(b, -1);
        setTimeout(() => {
            if (!a.g.sd()) {
                let c = 0;
                "number" === typeof a.h && a.h !== T.W ? c = a.h : Xg(a.h) && 0 < a.h.size && (c = Math.min(...a.h));
                fh(a, c)
            }
        }, 0)
    }

    function gh(a) {
        const b = a.g.Za() - 1;
        a.g.aa(b);
        return b
    }

    function hh(a) {
        a.g.aa(0);
        return 0
    }

    function ih(a) {
        -1 === Wg.indexOf(`${a.target.tagName}`.toLowerCase()) && a.preventDefault()
    }

    function jh(a, b, c, d) {
        if (!a.g.jd(b)) {
            var e = b;
            a.m && (e = new Set([b]));
            $g(a, e) && (a.m ? kh(a, b, d, c) : c || d ? ch(a, b, c) : a.h === b && ch(a, T.W), c && a.g.Ad(b))
        }
    }

    function fh(a, b) {
        a.j === T.W && 0 !== b ? a.g.Qa(0, -1) : 0 <= a.j && a.j !== b && a.g.Qa(a.j, -1);
        a.g.Qa(b, 0)
    }

    function ah(a, b) {
        a = a.g.Za();
        return 0 <= b && b < a
    }

    function kh(a, b, c, d = !0) {
        const e = Yg(a.h);
        (void 0 === c ? !a.g.md(b) : c) ? e.add(b): e.delete(b);
        bh(a, e, d)
    }
    var lh = class extends nf {
        constructor(a) {
            super(Object.assign(Object.assign({}, lh.j), a));
            this.B = this.m = !1;
            this.j = this.h = T.W;
            this.l = !1;
            this.o = null
        }
        static get L() {
            return Ug
        }
        static get h() {
            return T
        }
        static get j() {
            return {
                aa: () => {},
                kd: () => 0,
                Za: () => 0,
                sd: () => !1,
                vd: () => !1,
                Ad: () => {},
                Pa: () => {},
                md: () => !1,
                kf: () => {},
                jd: () => !1,
                eb: () => {},
                cb: () => {},
                Qa: () => {},
                lc: () => {},
                fd: () => null
            }
        }
    };
    var mh = {
            Lc: "mdc-menu-item--selected",
            Yf: "mdc-menu__selection-group",
            Sa: "mdc-menu"
        },
        nh = {
            Cc: "aria-checked",
            Bf: "aria-disabled",
            Rd: 'input[type="checkbox"]',
            Wf: ".mdc-list,.mdc-deprecated-list",
            bg: "MDCMenu:selected",
            de: "data-menu-item-skip-restore-focus"
        },
        oh = {
            Qf: -1
        },
        ph = {
            NONE: 0,
            Vf: 1,
            Mf: 2,
            Uf: 3,
            0: "NONE",
            1: "LIST_ROOT",
            2: "FIRST_ITEM",
            3: "LAST_ITEM"
        };
    var qh = {
            wf: "mdc-menu-surface--anchor",
            Ac: "mdc-menu-surface--animating-closed",
            Bc: "mdc-menu-surface--animating-open",
            Nf: "mdc-menu-surface--fixed",
            Db: "mdc-menu-surface--is-open-below",
            OPEN: "mdc-menu-surface--open",
            Sa: "mdc-menu-surface"
        },
        rh = {
            Jf: "MDCMenuSurface:closed",
            Kf: "MDCMenuSurface:closing",
            Zf: "MDCMenuSurface:opened",
            Pf: 'button:not(:disabled), [href]:not([aria-disabled="true"]), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'
        },
        sh = {
            ge: 120,
            Mc: 75,
            Kc: 32,
            Pd: .67,
            fe: 30
        };

    function th(a, b) {
        a.h.top = b.top || 0;
        a.h.right = b.right || 0;
        a.h.bottom = b.bottom || 0;
        a.h.left = b.left || 0
    }

    function uh(a) {
        var b = a.g.ed(),
            c = a.g.hd(),
            d = a.g.nd(),
            e = a.g.pd();
        b || (b = {
            top: a.position.y,
            right: a.position.x,
            bottom: a.position.y,
            left: a.position.x,
            width: 0,
            height: 0
        });
        a.j = {
            wa: b,
            ye: c,
            Md: a.V,
            yc: {
                top: b.top,
                right: d.width - b.right,
                bottom: d.height - b.bottom,
                left: b.left
            },
            tf: d,
            uf: e
        };
        b = a.K;
        var f = a.j.yc,
            g = a.j.wa;
        c = a.j.Md;
        e = U.h.Kc;
        a.m & 1 ? (d = f.top - e + a.h.bottom, e = f.bottom - e - a.h.bottom) : (d = f.top - e + a.h.top, e = f.bottom - e + g.height - a.h.top);
        !(0 < e - c.height) && d > e && (b |= 1);
        d = a.g.wd();
        var k = !!(a.m & 8);
        e = !!(a.m & 4) || !!(b & 4);
        k = d &&
            k ? !e : e;
        if (k) {
            var n = f.left + g.width + a.h.right;
            f = f.right - a.h.right
        } else n = f.left + a.h.left, f = f.right + g.width - a.h.left;
        g = 0 < n - c.width;
        c = 0 < f - c.width;
        const q = !!(b & 8) && !!(b & 4);
        if (c && q && d || !g && q) b ^= 4;
        else if (g && k && d || g && !k && e || !c && n >= f) b |= 4;
        0 < a.A ? c = a.A : (d = a.j.yc, c = !!(a.m & 1), e = U.h.Kc, b & 1 ? (d = d.top + a.h.top - e, c || (d += a.j.wa.height)) : (d = d.bottom - a.h.bottom + a.j.wa.height - e, c && (d -= a.j.wa.height)), c = d);
        d = b & 1 ? "bottom" : "top";
        e = b & 4 ? "right" : "left";
        f = a.j.wa;
        g = !!(a.m & 4);
        b & 4 ? (f = g ? f.width - a.h.left : a.h.right, f = a.D || a.o ? f - (a.j.tf.width -
            a.j.ye.width) : f) : f = g ? f.width - a.h.right : a.h.left;
        g = a.j.wa;
        k = !!(a.m & 1);
        f = {
            [e]: f,
            [d]: b & 1 ? k ? g.height - a.h.top : -a.h.bottom : k ? g.height + a.h.bottom : a.h.top
        };
        a.j.wa.width / a.j.Md.width > sh.Pd && (e = "center");
        if (a.D || a.o) {
            g = a.j.uf;
            k = a.j.yc;
            n = Object.keys(f);
            for (const r of n) n = f[r] || 0, n += k[r], a.o || (n = "top" === r ? n + g.y : "bottom" === r ? n - g.y : "left" === r ? n + g.x : n - g.x), f[r] = n
        }
        a.g.Jd(`${e} ${d}`);
        a.g.setPosition(f);
        a.g.oc(c ? c + "px" : "");
        b & 1 || a.g.Z(U.g.Db)
    }

    function vh(a) {
        const b = a.g.ud(),
            c = document.activeElement && !1;
        (b || c) && setTimeout(() => {
            a.g.Gd()
        }, sh.fe)
    }
    var U = class extends nf {
        constructor(a) {
            super(Object.assign(Object.assign({}, U.j), a));
            this.o = this.D = this.F = this.l = !1;
            this.T = this.B = this.G = this.A = 0;
            this.K = this.m = 8;
            this.h = {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            };
            this.position = {
                x: 0,
                y: 0
            }
        }
        static get g() {
            return qh
        }
        static get L() {
            return rh
        }
        static get h() {
            return sh
        }
        static get j() {
            return {
                Z: () => {},
                R: () => {},
                Yb: () => !1,
                Le: () => !1,
                Oe: () => !1,
                ud: () => !1,
                wd: () => !1,
                Wb: () => ({
                    height: 0,
                    width: 0
                }),
                ed: () => null,
                nd: () => ({
                    height: 0,
                    width: 0
                }),
                hd: () => ({
                    height: 0,
                    width: 0
                }),
                pd: () => ({
                    x: 0,
                    y: 0
                }),
                setPosition: () => {},
                oc: () => {},
                Jd: () => {},
                Hd: () => {},
                Gd: () => {},
                dc: () => {},
                ec: () => {},
                Bd: () => {}
            }
        }
        init() {
            const a = U.g.Sa,
                b = U.g.OPEN;
            if (!this.g.Yb(a)) throw Error(`${a} class required in root element.`);
            this.g.Yb(b) && (this.l = !0)
        }
        v() {
            clearTimeout(this.G);
            clearTimeout(this.B);
            cancelAnimationFrame(this.T)
        }
        oc(a) {
            this.A = a
        }
        open() {
            this.l || (this.g.Hd(), this.F ? (this.l = !0, this.g.Z(U.g.OPEN), this.V = this.g.Wb(), uh(this), this.g.ec()) : (this.g.Z(U.g.Bc), this.T = requestAnimationFrame(() => {
                this.V = this.g.Wb();
                uh(this);
                this.g.Z(U.g.OPEN);
                this.G = setTimeout(() => {
                    this.G = 0;
                    this.g.R(U.g.Bc);
                    this.g.ec()
                }, sh.ge)
            }), this.l = !0))
        }
        close(a = !1) {
            this.l && (this.g.Bd(), this.F ? (this.l = !1, a || vh(this), this.g.R(U.g.OPEN), this.g.R(U.g.Db), this.g.dc()) : (this.g.Z(U.g.Ac), requestAnimationFrame(() => {
                this.g.R(U.g.OPEN);
                this.g.R(U.g.Db);
                this.B = setTimeout(() => {
                    this.B = 0;
                    this.g.R(U.g.Ac);
                    this.g.dc()
                }, sh.Mc)
            }), this.l = !1, a || vh(this)))
        }
        isFinite(a) {
            return "number" === typeof a && isFinite(a)
        }
    };

    function wh(a, b) {
        var c = a.g.Vb(b);
        0 > c || (a.g.Pa({
            index: c
        }), c = "true" === a.g.gd(c, nh.de), a.g.pb(c), a.h = setTimeout(() => {
            const d = a.g.Vb(b);
            if (0 <= d && a.g.ac(d)) {
                var e = a.g.Xb();
                if (!(0 <= d && d < e)) throw Error("MDCMenuFoundation: No list item at specified index.");
                if (!a.g.ac(d)) throw Error("MDCMenuFoundation: No selection group at specified index.");
                e = a.g.ld(d);
                0 <= e && (a.g.Ed(e, nh.Cc), a.g.Fd(e, mh.Lc));
                a.g.Tc(d, mh.Lc);
                a.g.Sc(d, nh.Cc, "true")
            }
        }, U.h.Mc))
    }
    var xh = class extends nf {
        constructor(a) {
            super(Object.assign(Object.assign({}, xh.j), a));
            this.h = 0;
            this.j = 1
        }
        static get g() {
            return mh
        }
        static get L() {
            return nh
        }
        static get h() {
            return oh
        }
        static get j() {
            return {
                Tc: () => {},
                Fd: () => {},
                Sc: () => {},
                Ed: () => {},
                gd: () => null,
                Ie: () => !1,
                pb: () => {},
                Vb: () => -1,
                Pa: () => {},
                Xb: () => 0,
                aa: () => {},
                bd: () => {},
                ld: () => -1,
                ac: () => !1
            }
        }
        v() {
            this.h && clearTimeout(this.h);
            this.g.pb()
        }
    };

    function yh(a) {
        let b;
        return function(c = !0) {
            clearTimeout(b);
            b = setTimeout(() => {
                a(c)
            }, 50)
        }
    }

    function zh() {
        const a = this.A;
        this.F = new Promise(b => this.A = b);
        a()
    }

    function Ah(a) {
        var b, c = null !== (b = a.Hc) && void 0 !== b ? b : [];
        const d = [];
        for (const f of c) f.hasAttribute("mwc-list-item") && (d.push(f), f.Ja = a), f.hasAttribute("divider") && !f.hasAttribute("role") && f.setAttribute("role", "separator");
        a.D = d;
        const e = new Set;
        a.D.forEach((f, g) => {
            a.itemRoles ? f.setAttribute("role", a.itemRoles) : f.removeAttribute("role");
            f.selected && e.add(g)
        });
        a.multi ? a.g && dh(a.g, e) : (c = e.size ? e.entries().next().value[1] : -1, a.g && dh(a.g, c));
        c = new Event("items-updated", {
            bubbles: !0,
            composed: !0
        });
        a.dispatchEvent(c)
    }

    function Bh(a, b) {
        a = a.h;
        b = b.composedPath();
        for (const c of b)
            if (b = -1, c.nodeType === Node.ELEMENT_NODE && c.hasAttribute("mwc-list-item") && (b = a.indexOf(c)), -1 !== b) return b;
        return -1
    }
    var Ch = class extends Pf {
        constructor() {
            super();
            this.G = null;
            this.o = lh;
            this.wrapFocus = this.multi = this.activatable = !1;
            this.innerAriaLabel = this.innerRole = this.itemRoles = null;
            this.rootTabbable = !1;
            this.l = null;
            this.noninteractive = !1;
            this.A = () => {};
            this.F = Promise.resolve([]);
            this.D = [];
            const a = yh(this.oa.bind(this));
            this.Yc = (b = !0) => {
                zh.call(this);
                a(b)
            }
        }
        ma() {
            const a = Object.create(null, {
                ma: {
                    get: () => super.ma
                }
            });
            return v(this, function*() {
                const b = yield a.ma.call(this);
                yield this.F;
                return b
            })
        }
        get h() {
            return this.D
        }
        get selected() {
            const a =
                this.index;
            if (!Xg(a)) return -1 === a ? null : this.h[a];
            const b = [];
            for (const c of a) b.push(this.h[c]);
            return b
        }
        get index() {
            return this.g ? this.g.h : -1
        }
        j() {
            var a;
            const b = null !== (a = this.Hc) && void 0 !== a ? a : [];
            return I `
      <!-- @ts-ignore -->
      <ul
          tabindex=${this.rootTabbable?"0":"-1"}
          role="${M(null===this.innerRole?void 0:this.innerRole)}"
          aria-label="${M(null===this.innerAriaLabel?void 0:this.innerAriaLabel)}"
          class="mdc-deprecated-list"
          @keydown=${this.T}
          @focusin=${this.V}
          @focusout=${this.la}
          @request-selected=${this.va}
          @list-item-rendered=${this.ua}>
        <slot></slot>
        ${void 0!==this.emptyMessage&&0===b.length?I`
        <mwc-list-item noninteractive>${this.emptyMessage}</mwc-list-item>
      `:null}
      </ul>
    `
        }
        O() {
            super.O();
            this.h.length || (Zg(this.g, this.multi), this.oa())
        }
        V(a) {
            this.g && this.J && (a = Bh(this, a), 0 <= a && this.g.g.Qa(a, 0))
        }
        la(a) {
            this.g && this.J && (a = Bh(this, a), eh(this.g, a))
        }
        T(a) {
            if (this.g && this.J) {
                var b = Bh(this, a);
                a: {
                    var c = this.g,
                        d = a.target.hasAttribute("mwc-list-item"),
                        e = b;Sg(a);
                    const g = "ArrowUp" === Sg(a);Sg(a);
                    const k = "ArrowDown" === Sg(a),
                        n = "Home" === Sg(a),
                        q = "End" === Sg(a),
                        r = "Enter" === Sg(a),
                        u = "Spacebar" === Sg(a);
                    if (c.g.vd())
                        if (g || q) a.preventDefault(), gh(c);
                        else {
                            if (k || n) a.preventDefault(), hh(c)
                        }
                    else {
                        b =
                            c.g.kd();
                        if (-1 === b && (b = e, 0 > b)) break a;
                        if (k) b: {
                            ih(a),
                            a = b + 1;
                            if (a >= c.g.Za())
                                if (c.B) a = 0;
                                else {
                                    var f = b;
                                    break b
                                }
                            c.g.aa(a);f = a
                        }
                        else if (g) b: {
                            ih(a),
                            a = b - 1;
                            if (0 > a)
                                if (c.B) a = c.g.Za() - 1;
                                else {
                                    f = b;
                                    break b
                                }
                            c.g.aa(a);f = a
                        }
                        else if (n) ih(a), f = hh(c);
                        else if (q) ih(a), f = gh(c);
                        else if ((r || u) && d) {
                            if ((d = a.target) && "A" === d.tagName && r) break a;
                            ih(a);
                            jh(c, b, !0)
                        }
                        c.j = b;
                        void 0 !== f && (fh(c, f), c.j = f)
                    }
                }
            }
        }
        va(a) {
            if (this.g) {
                var b = Bh(this, a);
                if (-1 === b && (this.oa(), b = Bh(this, a), -1 === b)) return;
                if (!this.h[b].disabled) {
                    var c = this.g;
                    b !== T.W && (jh(c,
                        b, "interaction" === a.detail.source, a.detail.selected), fh(c, b), c.j = b);
                    a.stopPropagation()
                }
            }
        }
        v() {
            return this.G = {
                Za: () => this.J ? this.h.length : 0,
                kd: this.K,
                fd: (a, b) => this.J ? (a = this.h[a]) ? a.getAttribute(b) : "" : "",
                lc: (a, b, c) => {
                    this.J && (a = this.h[a]) && a.setAttribute(b, c)
                },
                aa: a => {
                    (a = this.h[a]) && a.focus()
                },
                Qa: (a, b) => {
                    if (a = this.h[a]) a.tabindex = b
                },
                Ad: a => {
                    const b = {
                        bubbles: !0,
                        composed: !0
                    };
                    b.detail = {
                        index: a
                    };
                    a = new CustomEvent("action", b);
                    this.dispatchEvent(a)
                },
                Pa: (a, b) => {
                    const c = {
                        bubbles: !0,
                        composed: !0
                    };
                    c.detail = {
                        index: a,
                        ig: b
                    };
                    a = new CustomEvent("selected", c);
                    this.dispatchEvent(a)
                },
                sd: () => Of(this),
                vd: () => {
                    const a = this.J;
                    return a.getRootNode().activeElement === a
                },
                kf: (a, b) => {
                    if (a = this.h[a]) a.disabled = b
                },
                jd: a => (a = this.h[a]) ? a.disabled : !1,
                eb: (a, b) => {
                    if (a = this.h[a]) a.selected = b
                },
                md: a => (a = this.h[a]) ? a.selected : !1,
                cb: (a, b) => {
                    if (a = this.h[a]) a.activated = b
                }
            }
        }
        ua(a) {
            this.oa(-1 === this.h.indexOf(a.target))
        }
        oa(a = !0) {
            a && Ah(this);
            a = this.h[0];
            for (const b of this.h) b.tabindex = -1;
            a && (this.noninteractive ? this.l || (this.l = a) : a.tabindex = 0);
            this.A()
        }
        K() {
            if (!this.J || !this.h.length) return -1;
            const a = Nf();
            if (!a.length) return -1;
            for (let b = a.length - 1; 0 <= b; b--) {
                const c = a[b];
                if (c.hasAttribute("mwc-list-item")) return this.h.indexOf(c)
            }
            return -1
        }
        aa(a) {
            for (const b of this.h)
                if (0 === b.tabindex) {
                    b.tabindex = -1;
                    break
                }
            this.h[a].tabindex = 0;
            this.h[a].focus()
        }
        focus() {
            const a = this.J;
            a && a.focus()
        }
        blur() {
            const a = this.J;
            a && a.blur()
        }
    };
    m([E({
        type: String
    }), p("design:type", Object)], Ch.prototype, "emptyMessage", void 0);
    m([F(".mdc-deprecated-list"), p("design:type", HTMLElement)], Ch.prototype, "J", void 0);
    m([Zc("*"), p("design:type", Object)], Ch.prototype, "Hc", void 0);
    m([Zc('[tabindex="0"]'), p("design:type", Object)], Ch.prototype, "rf", void 0);
    m([E({
        type: Boolean
    }), P(function(a) {
        this.g && (this.g.l = a)
    }), p("design:type", Object)], Ch.prototype, "activatable", void 0);
    m([E({
        type: Boolean
    }), P(function(a, b) {
        this.g && Zg(this.g, a);
        void 0 !== b && this.oa()
    }), p("design:type", Object)], Ch.prototype, "multi", void 0);
    m([E({
        type: Boolean
    }), P(function(a) {
        this.g && (this.g.B = a)
    }), p("design:type", Object)], Ch.prototype, "wrapFocus", void 0);
    m([E({
        type: String
    }), P(function(a, b) {
        void 0 !== b && Ah(this)
    }), p("design:type", Object)], Ch.prototype, "itemRoles", void 0);
    m([E({
        type: String
    }), p("design:type", Object)], Ch.prototype, "innerRole", void 0);
    m([E({
        type: String
    }), p("design:type", Object)], Ch.prototype, "innerAriaLabel", void 0);
    m([E({
        type: Boolean
    }), p("design:type", Object)], Ch.prototype, "rootTabbable", void 0);
    m([E({
        type: Boolean,
        I: !0
    }), P(function(a) {
        var b, c;
        a ? (this.l = a = null !== (c = null === (b = this.rf) || void 0 === b ? void 0 : b[0]) && void 0 !== c ? c : null) && a.setAttribute("tabindex", "-1") : !a && this.l && (this.l.setAttribute("tabindex", "0"), this.l = null)
    }), p("design:type", Object)], Ch.prototype, "noninteractive", void 0);
    var Dh = K(['@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-deprecated-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-deprecated-list:focus{outline:none}.mdc-deprecated-list-item{height:48px}.mdc-deprecated-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-deprecated-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0, 0, 0, 0.12)}.mdc-deprecated-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-deprecated-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc( 100% - var(--mdc-list-inset-margin, 72px) )}[dir=rtl] .mdc-deprecated-list ::slotted([divider][inset]),.mdc-deprecated-list ::slotted([divider][inset][dir=rtl]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-deprecated-list ::slotted([divider][inset][padded]){width:calc( 100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px) )}.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-deprecated-list--two-line.mdc-deprecated-list--dense ::slotted([mwc-list-item]),.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}\n']);
    var Eh = class extends Ch {};
    Eh.N = [Dh];
    Eh = m([D("mwc-list")], Eh);
    const Fh = {
        TOP_LEFT: 0,
        TOP_RIGHT: 4,
        BOTTOM_LEFT: 1,
        BOTTOM_RIGHT: 5,
        TOP_START: 8,
        TOP_END: 12,
        BOTTOM_START: 9,
        BOTTOM_END: 13
    };
    var V = class extends Pf {
        constructor() {
            super(...arguments);
            this.o = U;
            this.fixed = this.fullwidth = this.absolute = !1;
            this.y = this.x = null;
            this.stayOpenOnBodyClick = this.open = this.quick = !1;
            this.nb = 8;
            this.A = null;
            this.menuCorner = "START";
            this.corner = "TOP_START";
            this.tc = this.zb = this.pc = this.rc = this.qc = this.sc = "";
            this.h = this.anchor = null;
            this.l = () => {}
        }
        j() {
            const a = {
                top: this.sc,
                left: this.qc,
                right: this.rc,
                bottom: this.pc,
                "max-height": this.zb,
                "transform-origin": this.tc
            };
            return I `
      <div
          class="mdc-menu-surface ${lf({"mdc-menu-surface--fixed":this.fixed,"mdc-menu-surface--fullwidth":this.fullwidth})}"
          style="${mf(a)}"
          @keydown=${this.D}
          @opened=${this.K}
          @closed=${this.F}>
        <slot></slot>
      </div>`
        }
        v() {
            return Object.assign(Object.assign({}, Lf(this.J)), {
                Le: () => !!this.anchor,
                dc: () => {
                    const a = new CustomEvent("closed", {
                        bubbles: !0,
                        composed: !0
                    });
                    this.open = !1;
                    this.J.dispatchEvent(a)
                },
                Bd: () => {
                    const a = new CustomEvent("closing", {
                        bubbles: !0,
                        composed: !0
                    });
                    this.J.dispatchEvent(a)
                },
                ec: () => {
                    const a = new CustomEvent("opened", {
                        bubbles: !0,
                        composed: !0
                    });
                    this.open = !0;
                    this.J.dispatchEvent(a)
                },
                Oe: () => !1,
                wd: () => this.J ? "rtl" === getComputedStyle(this.J).direction : !1,
                Jd: a => {
                    this.J && (this.tc = a)
                },
                ud: () => Of(this),
                Hd: () => {
                    const a = Nf(),
                        b = a.length;
                    b || (this.h = null);
                    this.h = a[b - 1]
                },
                Gd: () => {
                    this.h && "focus" in this.h && this.h.focus()
                },
                Wb: () => {
                    const a = this.J;
                    return a ? {
                        width: a.offsetWidth,
                        height: a.offsetHeight
                    } : {
                        width: 0,
                        height: 0
                    }
                },
                ed: () => {
                    const a = this.anchor;
                    return a ? a.getBoundingClientRect() : null
                },
                hd: () => ({
                    width: document.body.clientWidth,
                    height: document.body.clientHeight
                }),
                nd: () => ({
                    width: window.innerWidth,
                    height: window.innerHeight
                }),
                pd: () => ({
                    x: window.pageXOffset,
                    y: window.pageYOffset
                }),
                setPosition: a => {
                    this.J && (this.qc =
                        "left" in a ? `${a.left}px` : "", this.rc = "right" in a ? `${a.right}px` : "", this.sc = "top" in a ? `${a.top}px` : "", this.pc = "bottom" in a ? `${a.bottom}px` : "")
                },
                oc: a => v(this, function*() {
                    this.J && (this.zb = a, yield this.Ra, this.zb = `var(--mdc-menu-max-height, ${a})`)
                })
            })
        }
        D(a) {
            if (this.g) {
                const b = a.keyCode;
                "Escape" !== a.key && 27 !== b || this.g.close()
            }
        }
        G(a) {
            this.stayOpenOnBodyClick || -1 === a.composedPath().indexOf(this) && this.close()
        }
        K() {
            this.l = this.G.bind(this);
            document.body.addEventListener("click", this.l, {
                passive: !0,
                capture: !0
            })
        }
        F() {
            document.body.removeEventListener("click",
                this.l, {
                    capture: !0
                })
        }
        close() {
            this.open = !1
        }
    };
    m([F(".mdc-menu-surface"), p("design:type", HTMLDivElement)], V.prototype, "J", void 0);
    m([F("slot"), p("design:type", Object)], V.prototype, "Sf", void 0);
    m([E({
        type: Boolean
    }), P(function(a) {
        this.g && !this.fixed && (this.g.D = a)
    }), p("design:type", Object)], V.prototype, "absolute", void 0);
    m([E({
        type: Boolean
    }), p("design:type", Object)], V.prototype, "fullwidth", void 0);
    m([E({
        type: Boolean
    }), P(function(a) {
        this.g && !this.absolute && (this.g.o = a)
    }), p("design:type", Object)], V.prototype, "fixed", void 0);
    m([E({
        type: Number
    }), P(function(a) {
        if (this.g && null !== this.y && null !== a) {
            var b = this.g,
                c = this.y;
            b.position.x = b.isFinite(a) ? a : 0;
            b.position.y = b.isFinite(c) ? c : 0;
            th(this.g, {
                left: a,
                top: this.y,
                right: -a,
                bottom: this.y
            })
        }
    }), p("design:type", Object)], V.prototype, "x", void 0);
    m([E({
        type: Number
    }), P(function(a) {
        if (this.g && null !== this.x && null !== a) {
            var b = this.g,
                c = this.x;
            b.position.x = b.isFinite(c) ? c : 0;
            b.position.y = b.isFinite(a) ? a : 0;
            th(this.g, {
                left: this.x,
                top: a,
                right: -this.x,
                bottom: a
            })
        }
    }), p("design:type", Object)], V.prototype, "y", void 0);
    m([E({
        type: Boolean
    }), P(function(a) {
        this.g && (this.g.F = a)
    }), p("design:type", Object)], V.prototype, "quick", void 0);
    m([E({
        type: Boolean,
        I: !0
    }), P(function(a, b) {
        this.g && (a ? this.g.open() : void 0 !== b && this.g.close())
    }), p("design:type", Object)], V.prototype, "open", void 0);
    m([E({
        type: Boolean
    }), p("design:type", Boolean)], V.prototype, "stayOpenOnBodyClick", void 0);
    m([G(), P(function(a) {
        this.g && (this.g.m = a ? a : a)
    }), p("design:type", Number)], V.prototype, "nb", void 0);
    m([E({
        type: String
    }), P(function(a) {
        if (this.g) {
            var b = null === this.A,
                c = !b && a !== this.A;
            b = b && "END" === a;
            "START" !== a && "END" !== a || !c && !b || (this.nb ^= 4, c = this.g, c.K ^= 4, this.A = a)
        }
    }), p("design:type", String)], V.prototype, "menuCorner", void 0);
    m([E({
        type: String
    }), P(function(a) {
        this.g && a && (a = Fh[a], "END" === this.menuCorner && (a ^= 4), this.nb = a)
    }), p("design:type", String)], V.prototype, "corner", void 0);
    m([G(), p("design:type", Object)], V.prototype, "sc", void 0);
    m([G(), p("design:type", Object)], V.prototype, "qc", void 0);
    m([G(), p("design:type", Object)], V.prototype, "rc", void 0);
    m([G(), p("design:type", Object)], V.prototype, "pc", void 0);
    m([G(), p("design:type", Object)], V.prototype, "zb", void 0);
    m([G(), p("design:type", Object)], V.prototype, "tc", void 0);
    var Gh = K([".mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1),height 250ms cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}:host(:not([open])){display:none}.mdc-menu-surface{z-index:8;z-index:var(--mdc-menu-z-index, 8);min-width:112px;min-width:var(--mdc-menu-min-width, 112px)}/*# sourceMappingURL=mwc-menu-surface.css.map */\n"]);
    var Hh = class extends V {};
    Hh.N = [Gh];
    Hh = m([D("mwc-menu-surface")], Hh);
    var W = class extends Pf {
        constructor() {
            super(...arguments);
            this.o = xh;
            this.anchor = this.A = null;
            this.wrapFocus = this.quick = this.open = !1;
            this.innerRole = "menu";
            this.innerAriaLabel = null;
            this.corner = "TOP_START";
            this.y = this.x = null;
            this.fullwidth = this.forceGroupSelection = this.fixed = this.activatable = this.multi = this.absolute = !1;
            this.menuCorner = "START";
            this.stayOpenOnBodyClick = !1;
            this.defaultFocus = "LIST_ROOT";
            this.l = null
        }
        get h() {
            this.A || (this.A = this.Ea.querySelector("mwc-list"));
            return this.A
        }
        get index() {
            const a =
                this.h;
            return a ? a.index : -1
        }
        get selected() {
            const a = this.h;
            return a ? a.selected : null
        }
        j() {
            return I `
      <mwc-menu-surface
          ?hidden=${!this.open}
          .anchor=${this.anchor}
          .open=${this.open}
          .quick=${this.quick}
          .corner=${this.corner}
          .x=${this.x}
          .y=${this.y}
          .absolute=${this.absolute}
          .fixed=${this.fixed}
          .fullwidth=${this.fullwidth}
          .menuCorner=${this.menuCorner}
          ?stayOpenOnBodyClick=${this.stayOpenOnBodyClick}
          class="mdc-menu mdc-menu-surface"
          @closed=${this.G}
          @opened=${this.K}
          @keydown=${this.D}>
        <mwc-list
          rootTabbable
          .innerAriaLabel=${this.innerAriaLabel}
          .innerRole=${this.innerRole}
          .multi=${this.multi}
          class="mdc-deprecated-list"
          .itemRoles=${"menu"===this.innerRole?"menuitem":"option"}
          .wrapFocus=${this.wrapFocus}
          .activatable=${this.activatable}
          @action=${this.F}>
        <slot></slot>
      </mwc-list>
    </mwc-menu-surface>`
        }
        v() {
            return {
                Tc: (a, b) => {
                    const c = this.h;
                    if (c) {
                        var d = c.h[a];
                        d && ("mdc-menu-item--selected" === b ? this.forceGroupSelection && !d.selected && c.multi && kh(c.g, a, !0) : d.classList.add(b))
                    }
                },
                Fd: (a, b) => {
                    const c = this.h;
                    if (c) {
                        var d = c.h[a];
                        d && ("mdc-menu-item--selected" === b ? d.selected && c.multi && kh(c.g, a, !1) : d.classList.remove(b))
                    }
                },
                Sc: (a, b, c) => {
                    const d = this.h;
                    d && (a = d.h[a]) && a.setAttribute(b, c)
                },
                Ed: (a, b) => {
                    const c = this.h;
                    c && (a = c.h[a]) && a.removeAttribute(b)
                },
                gd: (a, b) => {
                    const c = this.h;
                    return c ? (a =
                        c.h[a]) ? a.getAttribute(b) : null : null
                },
                Ie: (a, b) => a.classList.contains(b),
                pb: () => {
                    this.open = !1
                },
                Vb: a => {
                    const b = this.h;
                    return b ? b.h.indexOf(a) : -1
                },
                Pa: () => {},
                Xb: () => {
                    const a = this.h;
                    return a ? a.h.length : 0
                },
                aa: a => {
                    const b = this.h;
                    b && (a = b.h[a]) && a.focus()
                },
                bd: () => {
                    this.h && this.h.focus()
                },
                ld: a => {
                    const b = this.h;
                    if (!b) return -1;
                    const c = b.h[a];
                    if (!c || !c.group) return -1;
                    for (let d = 0; d < b.h.length; d++) {
                        if (d === a) continue;
                        const e = b.h[d];
                        if (e.selected && e.group === c.group) return d
                    }
                    return -1
                },
                ac: a => {
                    const b = this.h;
                    return b ?
                        (a = b.h[a]) ? a.hasAttribute("group") : !1 : !1
                }
            }
        }
        D(a) {
            if (this.g) {
                const b = a.keyCode;
                "Tab" !== a.key && 9 !== b || this.g.g.pb(!0)
            }
        }
        F(a) {
            const b = this.h;
            this.g && b && (a = b.h[a.detail.index]) && wh(this.g, a)
        }
        K() {
            this.open = !0;
            if (this.g) {
                var a = this.g;
                switch (a.j) {
                    case 2:
                        a.g.aa(0);
                        break;
                    case 3:
                        a.g.aa(a.g.Xb() - 1);
                        break;
                    case 0:
                        break;
                    default:
                        a.g.bd()
                }
            }
        }
        G() {
            this.open = !1
        }
        ma() {
            const a = Object.create(null, {
                ma: {
                    get: () => super.ma
                }
            });
            return v(this, function*() {
                yield this.l;
                return yield a.ma.call(this)
            })
        }
        O() {
            const a = Object.create(null, {
                O: {
                    get: () =>
                        super.O
                }
            });
            return v(this, function*() {
                a.O.call(this);
                const b = this.h;
                b && (this.l = b.Ra, yield this.l)
            })
        }
        close() {
            this.open = !1
        }
        aa(a) {
            const b = this.h;
            b && b.aa(a)
        }
        oa(a = !0) {
            const b = this.h;
            b && b.oa(a)
        }
    };
    m([F(".mdc-menu"), p("design:type", Hh)], W.prototype, "J", void 0);
    m([F("slot"), p("design:type", Object)], W.prototype, "Tf", void 0);
    m([E({
        type: Object
    }), p("design:type", Object)], W.prototype, "anchor", void 0);
    m([E({
        type: Boolean,
        I: !0
    }), p("design:type", Object)], W.prototype, "open", void 0);
    m([E({
        type: Boolean
    }), p("design:type", Object)], W.prototype, "quick", void 0);
    m([E({
        type: Boolean
    }), p("design:type", Object)], W.prototype, "wrapFocus", void 0);
    m([E({
        type: String
    }), p("design:type", String)], W.prototype, "innerRole", void 0);
    m([E({
        type: String
    }), p("design:type", Object)], W.prototype, "innerAriaLabel", void 0);
    m([E({
        type: String
    }), p("design:type", String)], W.prototype, "corner", void 0);
    m([E({
        type: Number
    }), p("design:type", Object)], W.prototype, "x", void 0);
    m([E({
        type: Number
    }), p("design:type", Object)], W.prototype, "y", void 0);
    m([E({
        type: Boolean
    }), p("design:type", Object)], W.prototype, "absolute", void 0);
    m([E({
        type: Boolean
    }), p("design:type", Object)], W.prototype, "multi", void 0);
    m([E({
        type: Boolean
    }), p("design:type", Object)], W.prototype, "activatable", void 0);
    m([E({
        type: Boolean
    }), p("design:type", Object)], W.prototype, "fixed", void 0);
    m([E({
        type: Boolean
    }), p("design:type", Object)], W.prototype, "forceGroupSelection", void 0);
    m([E({
        type: Boolean
    }), p("design:type", Object)], W.prototype, "fullwidth", void 0);
    m([E({
        type: String
    }), p("design:type", String)], W.prototype, "menuCorner", void 0);
    m([E({
        type: Boolean
    }), p("design:type", Boolean)], W.prototype, "stayOpenOnBodyClick", void 0);
    m([E({
        type: String
    }), P(function(a) {
        this.g && (this.g.j = ph[a])
    }), p("design:type", String)], W.prototype, "defaultFocus", void 0);
    var Ih = K(["mwc-list ::slotted([mwc-list-item]:not([twoline])),mwc-list ::slotted([noninteractive]:not([twoline])){height:var(--mdc-menu-item-height, 48px)}/*# sourceMappingURL=mwc-menu.css.map */\n"]);
    var Jh = class extends W {};
    Jh.N = [Ih];
    Jh = m([D("mwc-menu")], Jh);
    const Kh = new Set;

    function Lh(a, b) {
        const [c, d, e, f] = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
        let g = d,
            k = c,
            n = "ltr" === a ? e : f,
            q = "ltr" === a ? f : e;
        b && (g = "ltr" === a ? f : e, k = "ltr" === a ? e : f, n = c, q = d);
        return {
            Xe: g,
            cf: k,
            Be: n,
            Ze: q
        }
    }

    function Mh(a, b) {
        v(a, function*() {
            var c = this.model.entries;
            b >= c.length || 0 > b || (c = this.shadowRoot.getElementById(c[b].$a), this.g = b, c.focus())
        })
    }

    function Nh(a, b = "root") {
        Ye(a);
        a.Ra.then(() => {
            var c;
            a.ba && (a.ba.open = !0, null === (c = a.l()) || void 0 === c ? void 0 : c.setAttribute("aria-expanded", "true"))
        });
        a.addEventListener("opened", () => {
            var c;
            "root" === b ? null === (c = a.Ve) || void 0 === c ? void 0 : c.focus() : Mh(a, "first" === b ? 0 : a.model.entries.length - 1)
        }, {
            once: !0
        })
    }

    function Oh(a, b) {
        var c;
        const d = new Ph(a, b.$a, null !== (c = b.ariaLabel) && void 0 !== c ? c : b.label, a.h());
        d.model = b.We;
        a = Qh(a, b, {
            Ne: !0
        });
        return {
            qf: d,
            Ue: a
        }
    }

    function Rh(a, b, c = () => {}) {
        const d = [],
            e = [];
        for (const f of b)
            if (1 === f.entryType) {
                const {
                    Ue: g,
                    qf: k
                } = Oh(a, f);
                e.push(g);
                d.push(k)
            } else 0 === f.entryType && e.push(Qh(a, f, {
                hc: Sh(a, f, c),
                activated: !!f.activated
            }));
        return {
            zd: e,
            Ld: d
        }
    }

    function Qh(a, b, c = {}) {
        var d, e, f, g, k, n, q;
        const r = c.hc || (() => {}),
            u = A => {
                "Enter" !== A.key && " " !== A.key || r(A)
            };
        if (b.pg) return I `
        <ea-icon-button
            id=${b.$a}
            aria-label=${null!==(d=b.ariaLabel)&&void 0!==d?d:b.label}
            title=${null!==(e=b.ariaLabel)&&void 0!==e?e:b.label}
            @click=${r}
            @keydown=${u}
            ?hidden=${null!==(g=null===(f=b.hidden)||void 0===f?void 0:f.call(b))&&void 0!==g?g:!1}
            .template=${null!==(k=b.icon)&&void 0!==k?k:null}>
        </ea-icon-button>`;
        const t = b.icon ? I `<ea-icon slot="graphic" .template=${b.icon}></ea-icon>` : null;
        var w = 0 === b.entryType && "string" === typeof b.gb ? I `<label slot="meta">${b.gb}</label>` : b.gb ? I `<div part="meta" slot="meta">${b.gb}</div>` : void 0;
        return I `
        <ea-menu-list-item
            id=${b.$a}
            aria-label=${M(b.ariaLabel)}
            aria-haspopup=${!!c.Ne}
            @click=${r}
            @keydown=${u}
            ?hidden=${null!==(q=null===(n=b.hidden)||void 0===n?void 0:n.call(b))&&void 0!==q?q:!1}
            ?hasMeta=${!!w}
            .graphic=${t?"icon":null}
            ?activated=${!!c.activated}
            role=${"menu"===a.innerRole?"menuitem":"option"}>
          <span>${b.bold?I`<b>${b.label}</b>`:b.label}</span>
          ${t}
          ${w}
        </ea-menu-list-item>
    `
    }

    function Sh(a, b, c) {
        return d => {
            b.hc(d);
            !1 !== b.gg && (a.close(), c())
        }
    }
    class Th extends L {
        constructor() {
            super();
            this.o = null;
            this.D = a => {
                if (this.ba && 0 === a.button) {
                    a = a.composedPath();
                    var b = this.l();
                    b = b && a.includes(b);
                    a = a.includes(this);
                    b || a || this.ba.close()
                }
            };
            this.g = -1;
            this.dir = "ltr";
            this.innerRole = "menu";
            this.addEventListener("keydown", a => {
                if (this.ba) {
                    var b = (this.g + 1) % this.model.entries.length,
                        c = this.g - 1;
                    0 > c && (c = this.model.entries.length - 1);
                    var {
                        Xe: d,
                        cf: e,
                        Be: f
                    } = Lh(this.dir, this.h());
                    a.key === d ? (Mh(this, b), a.stopPropagation()) : a.key === e ? (Mh(this, c), a.stopPropagation()) :
                        "Tab" === a.key ? this.close() : this instanceof Ph && a.key === f && this.close()
                }
            })
        }
        get model() {
            return this.o || this.F()
        }
        set model(a) {
            var b;
            const c = this.o;
            this.g = -1;
            this.o = a;
            this.toggleAttribute("horizontal", null !== (b = this.h()) && void 0 !== b ? b : !1);
            Ye(this, "model", c)
        }
        get open() {
            var a;
            return (null === (a = this.ba) || void 0 === a ? void 0 : a.open) || !1
        }
        set open(a) {
            this.Ra.then(() => {
                var b;
                if (this.ba) {
                    var c = (null === (b = this.ba) || void 0 === b ? void 0 : b.open) || !1;
                    this.ba.open = a;
                    Ye(this.ba, "open", c)
                }
            })
        }
        close() {
            var a, b;
            const c = this.shadowRoot.querySelectorAll("ea-submenu");
            for (const d of c) d.close();
            null === (a = this.ba) || void 0 === a ? void 0 : a.close();
            null === (b = this.l()) || void 0 === b ? void 0 : b.setAttribute("aria-expanded", "false");
            this.g = -1
        }
        static get N() {
            return K `
      :host {
        --mdc-list-item-graphic-size: var(--ea-menu-icon-size, 20px);
        --mdc-list-item-meta-size: var(--ea-menu-icon-size, 20px);
        --mdc-list-item-graphic-margin: 0;
        --mdc-menu-item-height: ${36}px;
        --mdc-menu-min-width: var(--ea-menu-entry-width, var(--menu-min-width));
        --mdc-ripple-color: var(--cros-ripple-color);
        --mdc-shape-medium: 4px;
        --mdc-theme-on-surface: var(--cros-menu-label-color);
        --mdc-theme-surface: var(--cros-menu-bg-color);
        --mdc-typography-caption-font-size: ${14}px;
        --mdc-typography-caption-line-height: ${20}px;
        --menu-min-width: ${112}px;
        pointer-events: all;
      }

      mwc-menu {
        display: flex;
      }

      :host([horizontal]) mwc-menu {
        --mdc-list-vertical-padding: 0;
      }

      #entries-container {
        display: block;
        overflow: hidden;
        padding: 0;
      }

      #entries-container:focus {
        outline: none;
      }

      :host([horizontal]) #entries-container {
        display: flex;
        padding: 0 ${8}px;
        position: relative;
      }

      /** TODO(b/169361791): Confirm styling for icon-only, vertical menu. */
      ea-icon-button {
        height: var(--tap-target-size);
        width: var(--tap-target-size);
        display: block;
      }

      [mwc-list-item] {
        box-sizing: border-box;
        color: var(--cros-menu-label-color);
        display: flex;
        font: ${wg};
        height: var(--mdc-menu-item-height);
        letter-spacing: 0;
        line-height: var(--mdc-menu-item-height);
        padding-inline-end: 12px;
        padding-inline-start: 16px;
        width: var(--ea-menu-entry-width);
      }

      [mwc-list-item] > span {
        padding-inline-end: 48px;
      }

      :host([horizontal]) [mwc-list-item] > span {
        padding-inline-end: 0px;
      }

      label[slot="meta"] {
        align-items: center;
        color: var(--cros-menu-shortcut-color);
        cursor: inherit;
        display: flex;
        inset-block-start: 0;
        inset-inline-end: 16px;
        position: absolute;
        white-space: nowrap;
        width: fit-content;
      }

      :host([horizontal]) [mwc-list-item] {
        text-align: center;
      }

      [mwc-list-item][hidden] {
        display: none;
      }

      ea-icon {
        --icon-size: var(--ea-menu-icon-size, 20px);
        color: var(--cros-menu-icon-color);
      }

      [mwc-list-item][disabled] ea-icon {
        color: rgba(var(--cros-menu-icon-color-rgb), var(--cros-disabled-opacity));
      }

      [mwc-list-item][disabled] label[slot="meta"] {
        color: rgba(var(--cros-menu-shortcut-color-rgb), var(--cros-disabled-opacity));
      }
    `
        }
        connectedCallback() {
            super.connectedCallback();
            document.body.addEventListener("pointerup", this.D)
        }
        disconnectedCallback() {
            document.body.removeEventListener("pointerup", this.D);
            super.disconnectedCallback()
        }
    }
    m([F("mwc-menu"), p("design:type", Jh)], Th.prototype, "ba", void 0);
    m([F("#entries-container"), p("design:type", HTMLDivElement)], Th.prototype, "Ve", void 0);
    m([E({
        M: !0,
        I: !0
    }), p("design:type", String)], Th.prototype, "dir", void 0);
    m([E({
        M: !0,
        I: !0
    }), p("design:type", String)], Th.prototype, "innerRole", void 0);
    m([E({
        M: !1
    }), p("design:type", Object), p("design:paramtypes", [Object])], Th.prototype, "model", null);
    m([E({
        I: !0,
        type: Boolean
    }), p("design:type", Boolean), p("design:paramtypes", [Boolean])], Th.prototype, "open", null);
    let Ph = class extends Th {
        constructor(a, b, c, d) {
            super();
            this.G = a;
            this.K = b;
            this.label = c;
            this.Na = d;
            this.anchor = null;
            this.v = e => {
                const {
                    Ze: f
                } = Lh(this.dir, this.h());
                ["Enter", " ", f].includes(e.key) && Nh(this, "first")
            };
            this.A = e => {
                0 === e.button && (this.open ? this.close() : Nh(this, "root"))
            }
        }
        O(a) {
            super.O(a);
            this.anchor = this.G.shadowRoot.getElementById(this.K);
            this.ba.anchor = this.anchor;
            this.anchor.addEventListener("keydown", this.v);
            this.anchor.addEventListener("pointerup", this.A);
            this.anchor.setAttribute("aria-expanded",
                "false")
        }
        j() {
            var a;
            this.dir = bg();
            const {
                zd: b,
                Ld: c
            } = Rh(this, this.model.entries, () => void this.G.close()), d = this.Na ? "BOTTOM_START" : "TOP_END";
            return I `
      <mwc-menu
        stayopenonbodyclick
        fixed
        quick
        corner=${null!==(a=this.model.corner)&&void 0!==a?a:d}
        defaultfocus="NONE"
        menucorner=${M(this.model.menuCorner)}
        x=0
        y=${this.Na?0:-8}
        @closed=${this.close}>
        <div
          aria-label=${M(this.label)}
          role="menu"
          aria-orientation=${this.Na?"horizontal":"vertical"}
          id="entries-container"
          tabindex="0">
          ${b}
        </div>
      </mwc-menu>
      ${c}
    `
        }
        disconnectedCallback() {
            var a, b;
            null === (a = this.anchor) || void 0 === a ? void 0 : a.removeEventListener("keydown", this.v);
            null === (b = this.anchor) || void 0 === b ? void 0 : b.removeEventListener("pointerup", this.A);
            super.disconnectedCallback()
        }
        F() {
            return {
                entries: []
            }
        }
        l() {
            return this.anchor
        }
        h() {
            return this.Na
        }
    };
    Ph = m([D("ea-submenu"), p("design:paramtypes", [Object, String, Object, Boolean])], Ph);

    function Uh(a) {
        var b, c, d, e, f;
        null === (b = a.$) || void 0 === b ? void 0 : b.removeEventListener("keydown", a.v);
        null === (c = a.$) || void 0 === c ? void 0 : c.removeEventListener("pointerup", a.A);
        a.$ = Qg(a.model);
        null === (d = a.$) || void 0 === d ? void 0 : d.addEventListener("keydown", a.v);
        null === (e = a.$) || void 0 === e ? void 0 : e.addEventListener("pointerup", a.A);
        null === (f = a.$) || void 0 === f ? void 0 : f.setAttribute("aria-expanded", a.open.toString())
    }
    var Vh = class extends Th {
        constructor() {
            super(...arguments);
            this.v = a => {
                switch (a.key) {
                    case "Enter":
                    case " ":
                    case "ArrowDown":
                        Nh(this, "first");
                        break;
                    case "ArrowUp":
                        Nh(this, "last")
                }
            };
            this.A = a => {
                0 === a.button && (this.open ? this.close() : Nh(this, "root"))
            };
            this.$ = null
        }
        j() {
            var a;
            this.dir = bg();
            const {
                zd: b,
                Ld: c
            } = Rh(this, this.model.entries);
            return I `
        <mwc-menu
          stayopenonbodyclick
          quick
          .anchor=${null!==(a=this.model.anchor)&&void 0!==a?a:null}
          corner=${M(this.model.corner)}
          defaultfocus="NONE"
          menucorner=${M(this.model.menuCorner)}
          y=${M(this.model.xe)}
          x=${M(this.model.we)}
          ?absolute=${!!this.model.absolute}
          innerRole=${this.innerRole}
          @closed=${this.close}
          ?activatable=${!!this.model.activatable}>
          <div
            aria-label=${M(this.model.label)}
            aria-orientation=${this.model.Na?"horizontal":"vertical"}
            role=${this.innerRole}
            id="entries-container"
            tabindex="0">
            ${b}
          </div>
        </mwc-menu>
        ${c}
    `
        }
        connectedCallback() {
            super.connectedCallback();
            Kh.add(this);
            Uh(this)
        }
        disconnectedCallback() {
            var a, b;
            Kh.delete(this);
            null === (a = this.$) || void 0 === a ? void 0 : a.removeEventListener("keydown", this.v);
            null === (b = this.$) || void 0 === b ? void 0 : b.removeEventListener("pointerup", this.A);
            this.$ = null;
            super.disconnectedCallback()
        }
        qa(a) {
            super.qa(a);
            this.$ !== Qg(this.model) && Uh(this)
        }
        F() {
            return {
                entries: []
            }
        }
        l() {
            return this.$
        }
        h() {
            var a;
            return null !== (a = this.model.Na) && void 0 !== a ? a : !1
        }
    };
    m([F("#entries-container"), p("design:type", Object)], Vh.prototype, "jg", void 0);
    Vh = m([D("ea-menu")], Vh);
    /*

     Copyright 2019 Google LLC
     SPDX-License-Identifier: Apache-2.0
    */
    var Wh = class extends L {
        constructor() {
            super(...arguments);
            this.disabled = !1;
            this.offIcon = this.onIcon = "";
            this.Hb = this.on = !1;
            this.g = new Tf(() => {
                this.Hb = !0;
                return this.be
            })
        }
        o() {
            this.on = !this.on;
            this.dispatchEvent(new CustomEvent("icon-button-toggle-change", {
                detail: {
                    sg: this.on
                },
                bubbles: !0
            }))
        }
        click() {
            this.ib.focus();
            this.ib.click()
        }
        focus() {
            this.g.Fa();
            this.ib.focus()
        }
        blur() {
            this.g.Aa();
            this.ib.blur()
        }
        j() {
            var a = void 0 !== this.ariaLabelOn && void 0 !== this.ariaLabelOff;
            const b = a ? void 0 : this.on;
            a = a ? this.on ? this.ariaLabelOn :
                this.ariaLabelOff : this.ariaLabel;
            return I `<button
          class="mdc-icon-button mdc-icon-button--display-flex ${lf({"mdc-icon-button--on":this.on})}"
          aria-pressed="${M(b)}"
          aria-label="${M(a)}"
          @click="${this.o}"
          ?disabled="${this.disabled}"
          @focus="${this.A}"
          @blur="${this.v}"
          @mousedown="${this.Ic}"
          @mouseenter="${this.D}"
          @mouseleave="${this.F}"
          @touchstart="${this.Jc}"
          @touchend="${this.l}"
          @touchcancel="${this.l}"
        >${this.Hb?I`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>`:""}
        <span class="mdc-icon-button__icon"
          ><slot name="offIcon"
            ><i class="material-icons">${this.offIcon}</i
          ></slot
        ></span>
        <span class="mdc-icon-button__icon mdc-icon-button__icon--on"
          ><slot name="onIcon"
            ><i class="material-icons">${this.onIcon}</i
          ></slot
        ></span>
      </button>`
        }
        Ic(a) {
            const b = () => {
                window.removeEventListener("mouseup", b);
                this.l()
            };
            window.addEventListener("mouseup", b);
            this.g.sa(a)
        }
        Jc(a) {
            this.g.sa(a)
        }
        l() {
            this.g.Ba()
        }
        D() {
            this.g.ka()
        }
        F() {
            this.g.U()
        }
        A() {
            this.g.Fa()
        }
        v() {
            this.g.Aa()
        }
    };
    m([F(".mdc-icon-button"), p("design:type", HTMLElement)], Wh.prototype, "ib", void 0);
    m([hf, E({
        type: String,
        M: "aria-label"
    }), p("design:type", String)], Wh.prototype, "ariaLabel", void 0);
    m([E({
        type: Boolean,
        I: !0
    }), p("design:type", Object)], Wh.prototype, "disabled", void 0);
    m([E({
        type: String
    }), p("design:type", Object)], Wh.prototype, "onIcon", void 0);
    m([E({
        type: String
    }), p("design:type", Object)], Wh.prototype, "offIcon", void 0);
    m([E({
        type: String
    }), p("design:type", String)], Wh.prototype, "ariaLabelOn", void 0);
    m([E({
        type: String
    }), p("design:type", String)], Wh.prototype, "ariaLabelOff", void 0);
    m([E({
        type: Boolean,
        I: !0
    }), p("design:type", Object)], Wh.prototype, "on", void 0);
    m([$c(), p("design:type", Promise)], Wh.prototype, "be", void 0);
    m([G(), p("design:type", Object)], Wh.prototype, "Hb", void 0);
    m([Uc(), p("design:type", Function), p("design:paramtypes", [Event]), p("design:returntype", void 0)], Wh.prototype, "Ic", null);
    m([Uc(), p("design:type", Function), p("design:paramtypes", [Event]), p("design:returntype", void 0)], Wh.prototype, "Jc", null);
    var Xh = class extends Wh {};
    Xh.N = [Vf];
    Xh = m([D("mwc-icon-button-toggle")], Xh);
    var Yh = Xh;

    function Zh(a) {
        var b;
        if (null === a.icon) throw Error("<ea-toggleable-icon-button> must be provided with a icon");
        null === (b = a.h) || void 0 === b ? void 0 : b.remove();
        a.h = document.importNode(a.icon.content, !0).children[0];
        a.h.setAttribute("slot", a.on ? "onIcon" : "offIcon");
        a.appendChild(a.h)
    }

    function $h(a) {
        void 0 === a.ariaExpanded ? (a.jb.removeAttribute("aria-haspopup"), a.jb.removeAttribute("aria-expanded")) : (a.jb.setAttribute("aria-haspopup", "true"), a.jb.setAttribute("aria-expanded", a.ariaExpanded))
    }
    var ai = class extends Yh {
        constructor() {
            super();
            this.dark = !1;
            this.icon = null;
            this.ink = "default";
            this.ariaExpanded = void 0;
            this.h = null;
            const a = this.g.U;
            this.g.U = () => {
                this.on || a.call(this.g)
            }
        }
        o() {}
        static get N() {
            return [K `
      :host {
        --icon-off-fill: var(--google-grey-700);
        --icon-on-fill: var(--google-grey-700);
        --mdc-icon-button-size: 36px;
        --mdc-icon-size: 20px;
        --mdc-ripple-color: #000;
        --mdc-ripple-focus-opacity: 0;
        --mdc-ripple-hover-opacity: var(--ripple-opacity);
        --ripple-opacity: 0.06;
        --tap-target-size: 48px;
        --focus-ring-color: var(--google-blue-600);
        flex: none;
        white-space: nowrap;
      }

      :host([ink='blue']) {
        --mdc-ripple-color: var(--google-blue-600);
        --icon-on-fill: var(--google-blue-600);
      }

      :host([disabled]) {
        --icon-off-fill: rgba(var(--google-grey-700-rgb), 0.38);
        --icon-on-fill: rgba(var(--google-grey-700-rgb), 0.38);
      }

      :host([dark]) {
        --icon-off-fill: var(--google-grey-200);
        --icon-on-fill: var(--google-grey-200);
        --focus-ring-color: var(--google-blue-300);
        --mdc-ripple-color: #fff;
        --ripple-opacity: 0.08;
      }

      :host([dark][ink='blue']) {
        --icon-on-fill: var(--google-blue-300);
        --mdc-ripple-color: var(--google-blue-300);
      }

      :host([dark][disabled]) {
        --icon-off-fill: rgba(var(--google-grey-200-rgb), 0.38);
        --icon-on-fill: rgba(var(--google-grey-200-rgb), 0.38);
      }

      :host {
        --icon-fill: var(--icon-off-fill);
      }

      :host([on]) {
        --icon-fill: var(--icon-on-fill);
      }

      :host(:is(:hover, .hover, [on])) {
        /* In mwc-ripple focus overtakes hover opacity. */
        --mdc-ripple-focus-opacity: var(--ripple-opacity);
      }

      :host([on]:is(:hover, .hover)) {
        --mdc-ripple-hover-opacity: calc(var(--ripple-opacity) * 2);
        /* In mwc-ripple focus overtakes hover opacity. */
        --mdc-ripple-focus-opacity: calc(var(--ripple-opacity) * 2);
      }

      .extended-tap-target {
        height: var(--tap-target-size);
        width: var(--tap-target-size);
        display: grid;
        place-items: center;
      }

      .extended-tap-target > * {
        grid-area: 1/1/1/1;
      }

      ::slotted(svg) {
        pointer-events: none;
        fill: var(--icon-fill);
        stroke: var(--icon-fill);
        stroke-width: 0;
      }

      :host button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      :host button:focus-visible:before {
        border: 2px solid var(--focus-ring-color);
        border-radius: 50%;
        content: "";
        height: 100%;
        pointer-events: none;
        position: absolute;
        width: 100%;
      }
    `, ...Yh.N]
        }
        O(a) {
            super.O(a);
            this.addEventListener("mousedown", () => {
                this.h && this.h.animate({
                    transform: ["scale(1)", "scale(0.8)", "scale(1)"]
                }, {
                    duration: 200
                })
            });
            Zh(this);
            $h(this)
        }
        fb(a) {
            a.has("on") && (this.on ? this.g.ka() : this.g.U());
            return super.fb(a)
        }
        qa(a) {
            var b;
            super.qa(a);
            a.has("icon") && Zh(this);
            a.has("ariaExpanded") && $h(this);
            a.has("on") && (null === (b = this.h) || void 0 === b ? void 0 : b.setAttribute("slot", this.on ? "onIcon" : "offIcon"))
        }
        attributeChangedCallback(a, b, c) {
            super.attributeChangedCallback(a, b, c);
            "aria-expanded" === a && void 0 !== this.ariaExpanded && (this.on = "true" === this.ariaExpanded)
        }
        ka() {
            this.classList.add("hover");
            this.g.ka()
        }
        U() {
            this.classList.remove("hover");
            this.g.U()
        }
        j() {
            return I `
      <div class="extended-tap-target">
        ${super.j()}
      </div>
    `
        }
    };
    m([E({
        type: Boolean,
        I: !0,
        M: !0
    }), p("design:type", Boolean)], ai.prototype, "dark", void 0);
    m([E({
        M: !1
    }), p("design:type", Object)], ai.prototype, "icon", void 0);
    m([E({
        type: String,
        I: !0
    }), p("design:type", String)], ai.prototype, "ink", void 0);
    m([E({
        type: String,
        M: "aria-expanded"
    }), p("design:type", Object)], ai.prototype, "ariaExpanded", void 0);
    m([F("button", !0), p("design:type", HTMLButtonElement)], ai.prototype, "jb", void 0);
    ai = m([D("ea-toggleable-icon-button"), p("design:paramtypes", [])], ai);
    let bi;
    var ci;
    if (void 0 === bi) {
        var di = document.createElement("template");
        di.innerHTML = '<svg height="20" id="ic_chevron_right" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">\n<path clip-rule="evenodd" d="M6.66669 13.825L10.7872 10L6.66669 6.175L7.93524 5L13.3334 10L7.93524 15L6.66669 13.825Z" fill-rule="evenodd"></path>\n</svg>\n';
        bi = di
    }
    ci = bi;
    let ei;
    var fi;
    if (void 0 === ei) {
        var gi = document.createElement("template");
        gi.innerHTML = '<svg height="20" id="ic_launch_in_new_page" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">\n<path clip-rule="evenodd" d="M15 15H5V5H9V3H5C4 3 3 4 3 5C3 6 3 15 3 15C3 16 4 17 5 17H15C16 17 17 16 17 15V11H15V15ZM11 3V5H13.5L7 11.5L8.5 13L15 6.5V9H17V3H11Z" fill-rule="evenodd"></path>\n</svg>\n';
        ei = gi
    }
    fi = ei;
    let hi;
    var ii;
    if (void 0 === hi) {
        var ji = document.createElement("template");
        ji.innerHTML = '<svg height="20" id="ic_more-options" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n<defs>\n<path d="M14,10 C14,8.896 14.896,8 16,8 C17.105,8 18,8.896 18,10 C18,11.105 17.105,12 16,12 C14.896,12 14,11.105 14,10 Z M12,10 C12,11.105 11.105,12 10,12 C8.896,12 8,11.105 8,10 C8,8.896 8.896,8 10,8 C11.105,8 12,8.896 12,10 Z M6,10 C6,11.105 5.105,12 4,12 C2.896,12 2,11.105 2,10 C2,8.896 2.896,8 4,8 C5.105,8 6,8.896 6,10 Z" id="ic_more-options-a"></path>\n</defs>\n<use fill-rule="evenodd" transform="rotate(90 10 10)" xlink:href="#ic_more-options-a"></use>\n</svg>\n';
        hi =
            ji
    }
    ii = hi;

    function ki(a, b, c, d) {
        return {
            entryType: 0,
            $a: a,
            label: b,
            hc: c,
            gb: d ? I `
      <ea-icon .template=${d}></ea-icon>` : void 0
        }
    }
    var li = class extends L {
        static get N() {
            return K `
      :host {
        position: absolute;
        right: 0;
        top: 4px;
        z-index: 2;
      }
    `
        }
        O() {
            const {
                MSG_ABOUT: a,
                MSG_ABOUT_APP: b,
                MSG_LICENSES: c,
                MSG_GITHUB: d
            } = Qc;
            this.Te.model = {
                entries: [{
                    entryType: 1,
                    $a: "about",
                    label: a,
                    gb: I `
        <ea-icon rtlflip .template=${ci}></ea-icon>
      `,
                    We: {
                        corner: "TOP_START",
                        menuCorner: "END",
                        entries: [ki("aboutapp", b, () => {
                            var f = `https://github.com/Alex313031/electron-calculator#readme`;
                            f = Db(f, Cb) || zb;
                            window.open(Eb(f), "aboutapp", "width=900,height=700")
                        },fi), ki("licenses", c, () => {
                            var f = Db("#licenses", Cb) || zb;
                            window.open(Eb(f), "licenses", "width=700,height=700")
                        }, fi), ki("github", d, () => {
                            var f = `https://github.com/Alex313031/electron-calculator-app`;
                            f = Db(f, Cb) || zb;
                            window.open(Eb(f), "github", "width=900,height=700")
                        }, fi)]
                    }
                }],
                $: this.button,
                anchor: this.button,
                corner: "BOTTOM_END",
                menuCorner: "END",
                we: -6,
                xe: 0
            }
        }
        j() {
            const {
                MSG_OVERFLOW_MENU: a
            } =
            Qc;
            return I `
      <ea-toggleable-icon-button
        id="more-options-button"
        aria-label=${a}
        .icon=${ii}
        title=${a}>
      </ea-toggleable-icon-button>
      <ea-menu></ea-menu>
    `
        }
    };
    m([F("ea-menu"), p("design:type", Vh)], li.prototype, "Te", void 0);
    m([F("ea-toggleable-icon-button"), p("design:type", ai)], li.prototype, "button", void 0);
    li = m([D("calculator-overflow-menu")], li);
    const mi = class {
        constructor(a) {
            this.j = a;
            this.m = "empty";
            this.g = null;
            this.h = {}
        }
        yb(a) {
            this.m = a;
            return this
        }
        mc(a) {
            this.g = a;
            return this
        }
        nc(a) {
            this.h = Aa(a);
            return this
        }
    };

    function ni() {}

    function oi(a, b, c) {
        if (null == b) c.push("null");
        else {
            if ("object" == typeof b) {
                if (Array.isArray(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    var e = "";
                    for (var f = 0; f < b; f++) c.push(e), oi(a, d[f], c), e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                else {
                    c.push("{");
                    e = "";
                    for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), pi(d, c), c.push(":"), oi(a, f, c), e = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
                case "string":
                    pi(b, c);
                    break;
                case "number":
                    c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                    break;
                case "boolean":
                    c.push(String(b));
                    break;
                case "function":
                    c.push("null");
                    break;
                default:
                    throw Error("Unknown type: " + typeof b);
            }
        }
    }
    var qi = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        ri = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

    function pi(a, b) {
        b.push('"', a.replace(ri, function(c) {
            let d = qi[c];
            d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), qi[c] = d);
            return d
        }), '"')
    };
    var si = "StopIteration" in l ? l.StopIteration : {
        message: "StopIteration",
        stack: ""
    };

    function ti() {}
    ti.prototype.xb = function() {
        throw si;
    };
    ti.prototype.next = function() {
        return ui
    };
    var ui = {
        done: !0,
        value: void 0
    };
    ti.prototype.Ua = function() {
        return this
    };

    function vi(a) {
        if (a instanceof wi || a instanceof xi || a instanceof yi) return a;
        if ("function" == typeof a.xb) return new wi(() => zi(a));
        if ("function" == typeof a[Symbol.iterator]) return new wi(() => a[Symbol.iterator]());
        if ("function" == typeof a.Ua) return new wi(() => zi(a.Ua()));
        throw Error("Not an iterator or iterable.");
    }
    const zi = a => {
        if (!(a instanceof ti)) return a;
        let b = !1;
        return {
            next() {
                let c;
                for (; !b;) try {
                    c = a.xb();
                    break
                } catch (d) {
                    if (d !== si) throw d;
                    b = !0
                }
                return {
                    value: c,
                    done: b
                }
            }
        }
    };
    class wi {
        constructor(a) {
            this.g = a
        }
        Ua() {
            return new xi(this.g())
        }[Symbol.iterator]() {
            return new yi(this.g())
        }
        h() {
            return new yi(this.g())
        }
    }
    class xi extends ti {
        constructor(a) {
            super();
            this.g = a
        }
        xb() {
            const a = this.g.next();
            if (a.done) throw si;
            return a.value
        }[Symbol.iterator]() {
            return new yi(this.g)
        }
        h() {
            return new yi(this.g)
        }
    }
    class yi extends wi {
        constructor(a) {
            super(() => a);
            this.j = a
        }
        next() {
            return this.j.next()
        }
    };

    function Ai() {};

    function Bi() {}
    oa(Bi, Ai);
    Bi.prototype[Symbol.iterator] = function() {
        return vi(this.Ua(!0)).h()
    };
    Bi.prototype.clear = function() {
        const a = Array.from(this);
        for (const b of a) this.g.removeItem(b)
    };

    function Ci(a) {
        this.g = a
    }
    oa(Ci, Bi);
    h = Ci.prototype;
    h.set = function(a, b) {
        try {
            this.g.setItem(a, b)
        } catch (c) {
            if (0 == this.g.length) throw "Storage mechanism: Storage disabled";
            throw "Storage mechanism: Quota exceeded";
        }
    };
    h.get = function(a) {
        a = this.g.getItem(a);
        if ("string" !== typeof a && null !== a) throw "Storage mechanism: Invalid value was encountered";
        return a
    };
    h.Ua = function(a) {
        var b = 0,
            c = this.g,
            d = new ti;
        d.xb = function() {
            if (b >= c.length) throw si;
            var e = c.key(b++);
            if (a) return e;
            e = c.getItem(e);
            if ("string" !== typeof e) throw "Storage mechanism: Invalid value was encountered";
            return e
        };
        return d
    };
    h.clear = function() {
        this.g.clear()
    };
    h.key = function(a) {
        return this.g.key(a)
    };

    function Di() {
        var a = null;
        try {
            a = window.localStorage || null
        } catch (b) {}
        this.g = a
    }
    oa(Di, Ci);

    function Ei(a) {
        var b;
        if (b = null != a.h)
            if (a = a.h, a.g) try {
                a.g.setItem("__sak", "1"), a.g.removeItem("__sak"), b = !0
            } catch (c) {
                b = !1
            } else b = !1;
        return b
    }

    function Fi(a) {
        if (Ei(a)) try {
            var b = a.h,
                c = b.set;
            const d = [];
            oi(new ni, a.g, d);
            c.call(b, "__webmonitoring_RateThrottler_history_hourlyRate", d.join(""))
        } catch (d) {}
    }
    const Hi = class {
        constructor(a, b) {
            this.j = a;
            this.g = [];
            null === Gi && (Gi = null);
            this.h = null;
            b && (this.h = new Di);
            if (Ei(this) && (a = this.h.get("__webmonitoring_RateThrottler_history_hourlyRate"), null != a)) try {
                this.g = JSON.parse(a) || []
            } catch (c) {}
            a = !1;
            Array.isArray(this.g) || (this.g = [], a = !0);
            for (; this.g.length > this.j;) this.g.shift(), a = !0;
            a && Fi(this)
        }
    };
    var Gi = null;

    function Ii() {
        this.l = this.l;
        this.A = this.A
    }
    Ii.prototype.l = !1;
    Ii.prototype.Xa = function() {
        if (this.A)
            for (; this.A.length;) this.A.shift()()
    };

    function Ji(a) {
        Ii.call(this);
        this.g = a;
        this.K = !1
    }
    oa(Ji, Ii);

    function Ki(a, b) {
        this.type = a;
        this.g = this.target = b;
        this.defaultPrevented = !1
    }
    Ki.prototype.h = function() {
        this.defaultPrevented = !0
    };
    var Li = function() {
        if (!l.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
        try {
            l.addEventListener("test", ia, b), l.removeEventListener("test", ia, b)
        } catch (c) {}
        return a
    }();

    function Mi(a, b) {
        Ki.call(this, a ? a.type : "");
        this.relatedTarget = this.g = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.j = null;
        a && this.init(a, b)
    }
    oa(Mi, Ki);
    var Ni = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    Mi.prototype.init = function(a, b) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.g = b;
        if (b = a.relatedTarget) {
            if (Pb) {
                a: {
                    try {
                        Jb(b.nodeName);
                        var e = !0;
                        break a
                    } catch (f) {}
                    e = !1
                }
                e || (b = null)
            }
        } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY ||
            0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Ni[a.pointerType] || "";
        this.state = a.state;
        this.j = a;
        a.defaultPrevented && Mi.Ab.h.call(this)
    };
    Mi.prototype.h = function() {
        Mi.Ab.h.call(this);
        var a = this.j;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    var Oi = "closure_listenable_" + (1E6 * Math.random() | 0);
    var Pi = 0;

    function Qi(a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.tb = e;
        this.key = ++Pi;
        this.pa = this.ob = !1
    }

    function Ri(a) {
        a.pa = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.tb = null
    };

    function Si(a) {
        this.src = a;
        this.g = {};
        this.h = 0
    }
    Si.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.g[f];
        a || (a = this.g[f] = [], this.h++);
        var g = Ti(a, b, d, e); - 1 < g ? (b = a[g], c || (b.ob = !1)) : (b = new Qi(b, this.src, f, !!d, e), b.ob = c, a.push(b));
        return b
    };

    function Ui(a, b) {
        var c = b.type;
        c in a.g && va(a.g[c], b) && (Ri(b), 0 == a.g[c].length && (delete a.g[c], a.h--))
    }

    function Ti(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.pa && f.listener == b && f.capture == !!c && f.tb == d) return e
        }
        return -1
    };
    var Vi = "closure_lm_" + (1E6 * Math.random() | 0),
        Wi = {},
        Xi = 0;

    function Yi(a, b, c, d, e) {
        if (d && d.once) Zi(a, b, c, d, e);
        else if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) Yi(a, b[f], c, d, e);
        else c = $i(c), a && a[Oi] ? a.m.add(String(b), c, !1, ka(d) ? !!d.capture : !!d, e) : aj(a, b, c, !1, d, e)
    }

    function aj(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var g = ka(e) ? !!e.capture : !!e,
            k = bj(a);
        k || (a[Vi] = k = new Si(a));
        c = k.add(b, c, d, g, f);
        if (!c.proxy) {
            d = cj();
            c.proxy = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) Li || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
            else if (a.attachEvent) a.attachEvent(dj(b.toString()), d);
            else if (a.addListener && a.removeListener) a.addListener(d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            Xi++
        }
    }

    function cj() {
        function a(c) {
            return b.call(a.src, a.listener, c)
        }
        const b = ej;
        return a
    }

    function Zi(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) Zi(a, b[f], c, d, e);
        else c = $i(c), a && a[Oi] ? a.m.add(String(b), c, !0, ka(d) ? !!d.capture : !!d, e) : aj(a, b, c, !0, d, e)
    }

    function fj(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) fj(a, b[f], c, d, e);
        else(d = ka(d) ? !!d.capture : !!d, c = $i(c), a && a[Oi]) ? (a = a.m, b = String(b).toString(), b in a.g && (f = a.g[b], c = Ti(f, c, d, e), -1 < c && (Ri(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.g[b], a.h--)))) : a && (a = bj(a)) && (b = a.g[b.toString()], a = -1, b && (a = Ti(b, c, d, e)), (c = -1 < a ? b[a] : null) && gj(c))
    }

    function gj(a) {
        if ("number" !== typeof a && a && !a.pa) {
            var b = a.src;
            if (b && b[Oi]) Ui(b.m, a);
            else {
                var c = a.type,
                    d = a.proxy;
                b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(dj(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                Xi--;
                (c = bj(b)) ? (Ui(c, a), 0 == c.h && (c.src = null, b[Vi] = null)) : Ri(a)
            }
        }
    }

    function dj(a) {
        return a in Wi ? Wi[a] : Wi[a] = "on" + a
    }

    function ej(a, b) {
        if (a.pa) a = !0;
        else {
            b = new Mi(b, this);
            var c = a.listener,
                d = a.tb || a.src;
            a.ob && gj(a);
            a = c.call(d, b)
        }
        return a
    }

    function bj(a) {
        a = a[Vi];
        return a instanceof Si ? a : null
    }
    var hj = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function $i(a) {
        if ("function" === typeof a) return a;
        a[hj] || (a[hj] = function(b) {
            return a.handleEvent(b)
        });
        return a[hj]
    };

    function ij() {
        Ii.call(this);
        this.m = new Si(this);
        this.Ib = this;
        this.la = null
    }
    oa(ij, Ii);
    ij.prototype[Oi] = !0;
    ij.prototype.addEventListener = function(a, b, c, d) {
        Yi(this, a, b, c, d)
    };
    ij.prototype.removeEventListener = function(a, b, c, d) {
        fj(this, a, b, c, d)
    };
    ij.prototype.dispatchEvent = function(a) {
        var b, c = this.la;
        if (c)
            for (b = []; c; c = c.la) b.push(c);
        c = this.Ib;
        var d = a.type || a;
        if ("string" === typeof a) a = new Ki(a, c);
        else if (a instanceof Ki) a.target = a.target || c;
        else {
            var e = a;
            a = new Ki(d, c);
            Ca(a, e)
        }
        e = !0;
        if (b)
            for (var f = b.length - 1; 0 <= f; f--) {
                var g = a.g = b[f];
                e = jj(g, d, !0, a) && e
            }
        g = a.g = c;
        e = jj(g, d, !0, a) && e;
        e = jj(g, d, !1, a) && e;
        if (b)
            for (f = 0; f < b.length; f++) g = a.g = b[f], e = jj(g, d, !1, a) && e;
        return e
    };
    ij.prototype.Xa = function() {
        ij.Ab.Xa.call(this);
        if (this.m) {
            var a = this.m,
                b = 0,
                c;
            for (c in a.g) {
                for (var d = a.g[c], e = 0; e < d.length; e++) ++b, Ri(d[e]);
                delete a.g[c];
                a.h--
            }
        }
        this.la = null
    };

    function jj(a, b, c, d) {
        b = a.m.g[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.pa && g.capture == c) {
                var k = g.listener,
                    n = g.tb || g.src;
                g.ob && Ui(a.m, g);
                e = !1 !== k.call(n, d) && e
            }
        }
        return e && !d.defaultPrevented
    };

    function kj() {}
    kj.prototype.g = null;

    function lj(a) {
        var b;
        (b = a.g) || (b = {}, mj(a) && (b[0] = !0, b[1] = !0), b = a.g = b);
        return b
    };
    var nj;

    function oj() {}
    oa(oj, kj);

    function pj(a) {
        return (a = mj(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    }

    function mj(a) {
        if (!a.h && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            const b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
            for (let c = 0; c < b.length; c++) {
                const d = b[c];
                try {
                    return new ActiveXObject(d), a.h = d
                } catch (e) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.h
    }
    nj = new oj;

    function qj(a, b, c) {
        if ("function" === typeof a) c && (a = na(a, c));
        else if (a && "function" == typeof a.handleEvent) a = na(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : l.setTimeout(a, b || 0)
    };
    var rj = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function sj(a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("="),
                    e = null;
                if (0 <= d) {
                    var f = a[c].substring(0, d);
                    e = a[c].substring(d + 1)
                } else f = a[c];
                b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
            }
        }
    };

    function tj(a) {
        ij.call(this);
        this.headers = new Map;
        this.G = a || null;
        this.h = !1;
        this.F = this.g = null;
        this.B = this.Jb = this.V = "";
        this.j = this.T = this.v = this.K = !1;
        this.o = 0;
        this.D = null;
        this.kb = "";
        this.ua = this.va = !1
    }
    oa(tj, ij);
    var uj = /^https?$/i,
        vj = ["POST", "PUT"],
        wj = [];
    h = tj.prototype;
    h.Ae = function() {
        this.l || (this.l = !0, this.Xa());
        va(wj, this)
    };

    function xj(a, b, c, d) {
        if (a.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + a.V + "; newUri=" + b);
        a.V = b;
        a.B = "";
        a.Jb = "POST";
        a.K = !1;
        a.h = !0;
        a.g = a.G ? pj(a.G) : pj(nj);
        a.F = a.G ? lj(a.G) : lj(nj);
        a.g.onreadystatechange = na(a.Cd, a);
        try {
            a.T = !0, a.g.open("POST", String(b), !0), a.T = !1
        } catch (f) {
            yj(a, f);
            return
        }
        b = c || "";
        c = new Map(a.headers);
        if (d)
            if (Object.getPrototypeOf(d) === Object.prototype)
                for (var e in d) c.set(e, d[e]);
            else if ("function" === typeof d.keys && "function" === typeof d.get)
            for (const f of d.keys()) c.set(f,
                d.get(f));
        else throw Error("Unknown input type for opt_headers: " + String(d));
        d = Array.from(c.keys()).find(f => "content-type" == f.toLowerCase());
        e = l.FormData && b instanceof l.FormData;
        !(0 <= ta(vj, "POST")) || d || e || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        for (const [f, g] of c) a.g.setRequestHeader(f, g);
        a.kb && (a.g.responseType = a.kb);
        "withCredentials" in a.g && a.g.withCredentials !== a.va && (a.g.withCredentials = a.va);
        try {
            zj(a), 0 < a.o && (a.ua = Aj(a.g), a.ua ? (a.g.timeout = a.o, a.g.ontimeout =
                na(a.Nd, a)) : a.D = qj(a.Nd, a.o, a)), a.v = !0, a.g.send(b), a.v = !1
        } catch (f) {
            yj(a, f)
        }
    }

    function Aj(a) {
        return Nb && Xb() && "number" === typeof a.timeout && void 0 !== a.ontimeout
    }
    h.Nd = function() {
        "undefined" != typeof fa && this.g && (this.B = "Timed out after " + this.o + "ms, aborting", this.dispatchEvent("timeout"), this.abort(8))
    };

    function yj(a, b) {
        a.h = !1;
        a.g && (a.j = !0, a.g.abort(), a.j = !1);
        a.B = b;
        Bj(a);
        Cj(a)
    }

    function Bj(a) {
        a.K || (a.K = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
    }
    h.abort = function() {
        this.g && this.h && (this.h = !1, this.j = !0, this.g.abort(), this.j = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Cj(this))
    };
    h.Xa = function() {
        this.g && (this.h && (this.h = !1, this.j = !0, this.g.abort(), this.j = !1), Cj(this, !0));
        tj.Ab.Xa.call(this)
    };
    h.Cd = function() {
        this.l || (this.T || this.v || this.j ? Dj(this) : this.Ye())
    };
    h.Ye = function() {
        Dj(this)
    };

    function Dj(a) {
        if (a.h && "undefined" != typeof fa && (!a.F[1] || 4 != Ej(a) || 2 != Fj(a)))
            if (a.v && 4 == Ej(a)) qj(a.Cd, 0, a);
            else if (a.dispatchEvent("readystatechange"), 4 == Ej(a)) {
            a.h = !1;
            try {
                if (Gj(a)) a.dispatchEvent("complete"), a.dispatchEvent("success");
                else {
                    try {
                        var b = 2 < Ej(a) ? a.g.statusText : ""
                    } catch (c) {
                        b = ""
                    }
                    a.B = b + " [" + Fj(a) + "]";
                    Bj(a)
                }
            } finally {
                Cj(a)
            }
        }
    }

    function Cj(a, b) {
        if (a.g) {
            zj(a);
            const c = a.g,
                d = a.F[0] ? ia : null;
            a.g = null;
            a.F = null;
            b || a.dispatchEvent("ready");
            try {
                c.onreadystatechange = d
            } catch (e) {}
        }
    }

    function zj(a) {
        a.g && a.ua && (a.g.ontimeout = null);
        a.D && (l.clearTimeout(a.D), a.D = null)
    }

    function Gj(a) {
        var b = Fj(a);
        a: switch (b) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                var c = !0;
                break a;
            default:
                c = !1
        }
        if (!c) {
            if (b = 0 === b) a = String(a.V).match(rj)[1] || null, !a && l.self && l.self.location && (a = l.self.location.protocol, a = a.substr(0, a.length - 1)), b = !uj.test(a ? a.toLowerCase() : "");
            c = b
        }
        return c
    }

    function Ej(a) {
        return a.g ? a.g.readyState : 0
    }

    function Fj(a) {
        try {
            return 2 < Ej(a) ? a.g.status : -1
        } catch (b) {
            return -1
        }
    };

    function Hj(a, b) {
        this.m = this.B = this.j = "";
        this.v = null;
        this.o = this.g = "";
        this.h = !1;
        if (a instanceof Hj) {
            this.h = void 0 !== b ? b : a.h;
            Ij(this, a.j);
            this.B = a.B;
            this.m = a.m;
            Jj(this, a.v);
            this.g = a.g;
            b = a.l;
            var c = new Kj;
            c.j = b.j;
            b.g && (c.g = new Map(b.g), c.h = b.h);
            Lj(this, c);
            this.o = a.o
        } else a && (c = String(a).match(rj)) ? (this.h = !!b, Ij(this, c[1] || "", !0), this.B = Mj(c[2] || ""), this.m = Mj(c[3] || "", !0), Jj(this, c[4]), this.g = Mj(c[5] || "", !0), Lj(this, c[6] || "", !0), this.o = Mj(c[7] || "")) : (this.h = !!b, this.l = new Kj(null, this.h))
    }
    Hj.prototype.toString = function() {
        var a = [],
            b = this.j;
        b && a.push(Nj(b, Oj, !0), ":");
        var c = this.m;
        if (c || "file" == b) a.push("//"), (b = this.B) && a.push(Nj(b, Oj, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.v, null != c && a.push(":", String(c));
        if (c = this.g) this.m && "/" != c.charAt(0) && a.push("/"), a.push(Nj(c, "/" == c.charAt(0) ? Pj : Qj, !0));
        (c = this.l.toString()) && a.push("?", c);
        (c = this.o) && a.push("#", Nj(c, Rj));
        return a.join("")
    };

    function Ij(a, b, c) {
        a.j = c ? Mj(b, !0) : b;
        a.j && (a.j = a.j.replace(/:$/, ""))
    }

    function Jj(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
            a.v = b
        } else a.v = null
    }

    function Lj(a, b, c) {
        b instanceof Kj ? (a.l = b, Sj(a.l, a.h)) : (c || (b = Nj(b, Tj)), a.l = new Kj(b, a.h))
    }

    function Mj(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }

    function Nj(a, b, c) {
        return "string" === typeof a ? (a = encodeURI(a).replace(b, Uj), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    }

    function Uj(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
    var Oj = /[#\/\?@]/g,
        Qj = /[#\?:]/g,
        Pj = /[#\?]/g,
        Tj = /[#\?@]/g,
        Rj = /#/g;

    function Kj(a, b) {
        this.h = this.g = null;
        this.j = a || null;
        this.m = !!b
    }

    function Vj(a) {
        a.g || (a.g = new Map, a.h = 0, a.j && sj(a.j, function(b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
        }))
    }
    h = Kj.prototype;
    h.add = function(a, b) {
        Vj(this);
        this.j = null;
        a = Wj(this, a);
        var c = this.g.get(a);
        c || this.g.set(a, c = []);
        c.push(b);
        this.h += 1;
        return this
    };

    function Xj(a, b) {
        Vj(a);
        b = Wj(a, b);
        a.g.has(b) && (a.j = null, a.h -= a.g.get(b).length, a.g.delete(b))
    }
    h.clear = function() {
        this.g = this.j = null;
        this.h = 0
    };

    function Yj(a, b) {
        Vj(a);
        b = Wj(a, b);
        return a.g.has(b)
    }
    h.forEach = function(a, b) {
        Vj(this);
        this.g.forEach(function(c, d) {
            c.forEach(function(e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    };

    function Zj(a, b) {
        Vj(a);
        let c = [];
        if ("string" === typeof b) Yj(a, b) && (c = c.concat(a.g.get(Wj(a, b))));
        else
            for (a = Array.from(a.g.values()), b = 0; b < a.length; b++) c = c.concat(a[b]);
        return c
    }
    h.set = function(a, b) {
        Vj(this);
        this.j = null;
        a = Wj(this, a);
        Yj(this, a) && (this.h -= this.g.get(a).length);
        this.g.set(a, [b]);
        this.h += 1;
        return this
    };
    h.get = function(a, b) {
        if (!a) return b;
        a = Zj(this, a);
        return 0 < a.length ? String(a[0]) : b
    };
    h.toString = function() {
        if (this.j) return this.j;
        if (!this.g) return "";
        const a = [],
            b = Array.from(this.g.keys());
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            const f = encodeURIComponent(String(d)),
                g = Zj(this, d);
            for (d = 0; d < g.length; d++) {
                var e = f;
                "" !== g[d] && (e += "=" + encodeURIComponent(String(g[d])));
                a.push(e)
            }
        }
        return this.j = a.join("&")
    };

    function Wj(a, b) {
        b = String(b);
        a.m && (b = b.toLowerCase());
        return b
    }

    function Sj(a, b) {
        b && !a.m && (Vj(a), a.j = null, a.g.forEach(function(c, d) {
            var e = d.toLowerCase();
            d != e && (Xj(this, d), Xj(this, e), 0 < c.length && (this.j = null, this.g.set(Wj(this, e), wa(c)), this.h += c.length))
        }, a));
        a.m = b
    };
    var ak = kb(),
        bk = Gb() || z("iPod"),
        ck = z("iPad"),
        dk = z("Android") && !(lb() || kb() || z("Opera") || z("Silk")),
        ek = lb(),
        fk = z("Safari") && !(lb() || z("Coast") || z("Opera") || z("Edge") || z("Edg/") || z("OPR") || kb() || z("Silk") || z("Android")) && !Hb();

    function gk(a) {
        return (a = a.exec(y)) ? a[1] : ""
    }
    var hk = function() {
        if (ak) return gk(/Firefox\/([0-9.]+)/);
        if (Nb || Ob || Mb) return Wb;
        if (ek) {
            if (Hb() || z("Macintosh")) {
                var a = gk(/CriOS\/([0-9.]+)/);
                if (a) return a
            }
            return gk(/Chrome\/([0-9.]+)/)
        }
        if (fk && !Hb()) return gk(/Version\/([0-9.]+)/);
        if (bk || ck) {
            if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(y)) return a[1] + "." + a[2]
        } else if (dk) return (a = gk(/Android\s+([0-9.]+)/)) ? a : gk(/Version\/([0-9.]+)/);
        return ""
    }();

    function ik() {
        var a = "Other";
        Mb ? a = "Opera" : Nb ? a = "Internet Explorer" : ak ? a = "Firefox" : ek ? a = "Chrome" : fk && (a = "Safari");
        return a
    }

    function jk(a, b, c, d, e, f, g) {
        const k = Aa(a.g.h);
        d.forEach((n, q) => {
            k[q] = n
        });
        k.url = b.g;
        k.type = "JavascriptError";
        k.error_message = c;
        k.browser = ik();
        k.browser_version = hk;
        k.os = z("CrOS") ? "Chrome OS" : z("Linux") ? "Linux" : z("Windows") ? "Windows" : z("Android") ? "Android" : Gb() ? "iPhone" : z("iPad") ? "iPad" : z("iPod") ? "iPod" : z("Macintosh") ? "Mac" : "Unknown";
        k.os_version = Ib();
        b = a.g.g;
        null !== b && (k.channel = b);
        Sa(a.m) || (k.guid = a.m);
        null !== e && (k.src = e);
        null !== f && (k.line = f.toString());
        null !== g && (k.column = g.toString());
        return k
    }

    function kk(a, b, c, d) {
        d = d || "";
        c = b + c;
        a = a.V.bind(a, b);
        b = Sa(d) ? {} : {
            "Content-Type": "text/plain"
        };
        const e = new tj;
        wj.push(e);
        a && e.m.add("complete", a, !1, void 0, void 0);
        e.m.add("ready", e.Ae, !0, void 0, void 0);
        e.o = 6E4;
        e.va = !0;
        xj(e, c, d, b)
    }

    function lk(a) {
        var b = "",
            c;
        for (c in a) b += Sa(b) ? "?" : "&", b += c + "=" + encodeURIComponent(a[c]);
        return b
    }
    const Y = class extends Ji {
        constructor(a) {
            super(a);
            this.G = 100;
            this.D = {};
            this.j = null;
            this.m = "";
            this.T = !0;
            this.v = 10;
            this.h = null;
            this.o = !1;
            this.F = "https://clients2.google.com/cr/staging_report"
        }
        mf(a) {
            this.T = a;
            return this
        }
        lf(a) {
            this.v = Math.min(a, 100);
            return this
        }
        Id(a) {
            this.G = a;
            return this
        }
        ve(a, b) {
            this.D[a] = b;
            return this
        }
        hf(a) {
            this.j = a;
            return this
        }
        jf(a) {
            this.m = a;
            return this
        }
        enable() {
            if (this.K) return !1;
            this.B = window.onerror;
            window.onerror = this.la.bind(this);
            return this.K = !0
        }
        kc(a, b, c, d, e, f = new Map) {
            var g =
                window.location.href;
            g = g instanceof Hj ? new Hj(g) : new Hj(g, void 0);
            a = null != e && null != e.message ? e.message : a;
            $b('The following error:" %s" occurred at URL: %s', a, g.g);
            if (("function" !== typeof this.j || this.j(g.g, a, b, c, d, e)) && this.o) {
                for (var k = Object.keys(this.D), n = 100, q = 0; q < k.length; ++q) {
                    var r = k[q];
                    (new RegExp(r)).test(a) && (n = this.D[r])
                }
                if (!((100 * Math.random()).toFixed(6) >= this.G * n / 100)) {
                    0 <= this.v && null === this.h && (this.h = new Hi(this.v, this.T));
                    if (null === this.h) k = !1;
                    else {
                        a: {
                            k = this.h;n = Date.now();
                            if (k.g.length ==
                                k.j)
                                if (k.g[0] < n - 36E5) k.g.shift();
                                else {
                                    k = !1;
                                    break a
                                }
                            k.g.push(n);Fi(k);k = !0
                        }
                        k = !k
                    }!k && this.o && (e = e || null, c = jk(this, g, a, f, b, c, void 0 !== d ? d : null), c.prod = this.g.j, c.ver = this.g.m, d = null !== e ? ac(e.stack) : "", b = this.F, c = lk(c), Sa(a) || (f = d.split("\n"), -1 < f[0].indexOf(a) && (f.splice(0, 1), d = f.join("\n"))), kk(this, b, c, d), g = {
                        product: this.g.j,
                        url: g.g,
                        js_errors_count: "1"
                    }, a = ac(this.g.g), Sa(a) || (g.version = a), kk(this, "https://clients2.google.com/cr/staging_perf", lk(g)))
                }
            }
        }
        la(a, b, c, d, e) {
            this.kc(a, b, c, d, e);
            null != this.B &&
                "function" === typeof this.B && this.B(a, b, c, d, e)
        }
        V(a, b) {
            Gj(b.target)
        }
    };
    Y.prototype.reportError = Y.prototype.kc;
    Y.prototype.enable = Y.prototype.enable;
    Y.prototype.setClientId = Y.prototype.jf;
    Y.prototype.setCallback = Y.prototype.hf;
    Y.prototype.addPerErrorMessageSampling = Y.prototype.ve;
    Y.prototype.setGlobalSampling = Y.prototype.Id;
    Y.prototype.setMaxErrorsPerHour = Y.prototype.lf;
    Y.prototype.setUseLocalStorage = Y.prototype.mf;

    function Z(a) {
        Ii.call(this);
        this.g = new mi(a);
        this.h = {}
    }
    oa(Z, Ii);
    ha("webmonitoring.Monitoring", Z);
    Z.prototype.yb = function(a) {
        this.g.yb(a);
        return this
    };
    Z.prototype.setVersion = Z.prototype.yb;
    Z.prototype.mc = function(a) {
        this.g.mc(a);
        return this
    };
    Z.prototype.setChannel = Z.prototype.mc;
    Z.prototype.nc = function(a) {
        this.g.nc(a);
        return this
    };
    Z.prototype.setContext = Z.prototype.nc;
    Z.prototype.Xc = function() {
        null == this.h[2] && (this.h[2] = new Y(this.g));
        return this.h[2]
    };
    Z.prototype.createJsErrorsReporter = Z.prototype.Xc;

    function mk(a, b, {
        $c: c = () => {},
        fc: d = () => {},
        Qe: e = !1,
        wg: f = 100,
        tg: g = k => new Z(k)
    } = {}) {
        a = g(a);
        a.yb(b);
        b = a.Xc();
        e && (b.F = "https://github.com/Alex313031/electron-calculator/issues");
        b.o = !0;
        b.Id(f);
        nc(b, c, d)
    };

    function nk(a, b) {
        b = b instanceof hb && b.constructor === hb ? b.g : "type_error:SafeStyleSheet";
        if (Nb && void 0 !== a.cssText) a.cssText = b;
        else if (l.trustedTypes)
            if ("textContent" in a) a.textContent = b;
            else if (3 == a.nodeType) a.data = String(b);
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
            a.firstChild.data = String(b)
        } else {
            for (var c; c = a.firstChild;) a.removeChild(c);
            a.appendChild(gc(a).createTextNode(String(b)))
        } else a.innerHTML = b
    };
    let ok = null,
        pk = null;

    function qk() {
        var a = {
            yd: "light"
        };
        a = "light" === (null === a || void 0 === a ? void 0 : a.yd) ? new Fa(Ga, "\nhtml:not(body) {\n  --cros-bg-color-rgb: 255, 255, 255;\n  --cros-bg-color: rgb(var(--cros-bg-color-rgb));\n\n  --cros-bg-color-elevation-1-rgb: 255, 255, 255;\n  --cros-bg-color-elevation-1: rgb(var(--cros-bg-color-elevation-1-rgb));\n\n  --cros-bg-color-elevation-2-rgb: 255, 255, 255;\n  --cros-bg-color-elevation-2: rgb(var(--cros-bg-color-elevation-2-rgb));\n\n  --cros-bg-color-elevation-3-rgb: 255, 255, 255;\n  --cros-bg-color-elevation-3: rgb(var(--cros-bg-color-elevation-3-rgb));\n\n  --cros-bg-color-elevation-4-rgb: 255, 255, 255;\n  --cros-bg-color-elevation-4: rgb(var(--cros-bg-color-elevation-4-rgb));\n\n  --cros-bg-color-elevation-5-rgb: 255, 255, 255;\n  --cros-bg-color-elevation-5: rgb(var(--cros-bg-color-elevation-5-rgb));\n\n  --cros-text-color-primary-rgb: var(--google-grey-900-rgb);\n  --cros-text-color-primary: var(--google-grey-900);\n\n  --cros-text-color-secondary-rgb: var(--google-grey-700-rgb);\n  --cros-text-color-secondary: var(--google-grey-700);\n\n  --cros-text-color-alert-rgb: var(--google-red-600-rgb);\n  --cros-text-color-alert: var(--google-red-600);\n\n  --cros-text-color-warning-rgb: var(--google-yellow-600-rgb);\n  --cros-text-color-warning: var(--google-yellow-600);\n\n  --cros-text-color-positive-rgb: var(--google-green-600-rgb);\n  --cros-text-color-positive: var(--google-green-600);\n\n  --cros-text-color-prominent-rgb: var(--cros-icon-color-prominent-rgb);\n  --cros-text-color-prominent: var(--cros-icon-color-prominent);\n\n  --cros-text-color-selection-rgb: var(--google-blue-700-rgb);\n  --cros-text-color-selection: var(--google-blue-700);\n\n  --cros-icon-color-primary-rgb: var(--google-grey-900-rgb);\n  --cros-icon-color-primary: var(--google-grey-900);\n\n  --cros-icon-color-secondary-rgb: var(--google-grey-500-rgb);\n  --cros-icon-color-secondary: var(--google-grey-500);\n\n  --cros-icon-color-disabled-rgb: var(--google-grey-700-rgb);\n  --cros-icon-color-disabled: rgba(var(--cros-icon-color-disabled-rgb), var(--cros-disabled-opacity));\n\n  --cros-icon-color-alert-rgb: var(--google-red-600-rgb);\n  --cros-icon-color-alert: var(--google-red-600);\n\n  --cros-icon-color-warning-rgb: var(--google-yellow-600-rgb);\n  --cros-icon-color-warning: var(--google-yellow-600);\n\n  --cros-icon-color-positive-rgb: var(--google-green-600-rgb);\n  --cros-icon-color-positive: var(--google-green-600);\n\n  --cros-icon-color-prominent-rgb: var(--google-blue-600-rgb);\n  --cros-icon-color-prominent: var(--google-blue-600);\n\n  --cros-icon-color-selection-rgb: var(--google-blue-700-rgb);\n  --cros-icon-color-selection: var(--google-blue-700);\n\n  --cros-highlight-color-rgb: var(--google-blue-50-rgb);\n  --cros-highlight-color: var(--google-blue-50);\n\n  --cros-dark-ink-ripple-color-rgb: 0, 0, 0;\n  --cros-dark-ink-ripple-color: rgba(var(--cros-dark-ink-ripple-color-rgb), 0.06);\n\n  --cros-light-ink-ripple-color-rgb: 255, 255, 255;\n  --cros-light-ink-ripple-color: rgba(var(--cros-light-ink-ripple-color-rgb), 0.08);\n\n  --cros-ink-ripple-color-rgb: var(--cros-dark-ink-ripple-color-rgb);\n  --cros-ink-ripple-color: var(--cros-dark-ink-ripple-color);\n\n  --cros-focus-ring-color-rgb: var(--cros-icon-color-prominent-rgb);\n  --cros-focus-ring-color: var(--cros-icon-color-prominent);\n\n  --cros-toolbar-search-bg-color-rgb: var(--google-grey-100-rgb);\n  --cros-toolbar-search-bg-color: var(--google-grey-100);\n\n  --cros-menu-item-bg-color-focus-rgb: 0, 0, 0;\n  --cros-menu-item-bg-color-focus: rgba(var(--cros-menu-item-bg-color-focus-rgb), 0.06);\n\n  --cros-menu-item-ripple-color-rgb: 0, 0, 0;\n  --cros-menu-item-ripple-color: rgba(var(--cros-menu-item-ripple-color-rgb), 0.06);\n\n  --cros-toggle-color-rgb: var(--cros-icon-color-prominent-rgb);\n  --cros-toggle-color: var(--cros-icon-color-prominent);\n\n  --cros-toggle-bg-color-inactive-rgb: var(--google-grey-400-rgb);\n  --cros-toggle-bg-color-inactive: var(--google-grey-400);\n\n  --cros-toggle-button-color-inactive-rgb: 255, 255, 255;\n  --cros-toggle-button-color-inactive: rgb(var(--cros-toggle-button-color-inactive-rgb));\n\n  --cros-toggle-ripple-color-rgb: var(--cros-toggle-color-rgb);\n  --cros-toggle-ripple-color: rgba(var(--cros-toggle-ripple-color-rgb), 0.2);\n\n  --cros-toggle-ripple-color-inactive-rgb: var(--google-grey-600-rgb);\n  --cros-toggle-ripple-color-inactive: rgba(var(--cros-toggle-ripple-color-inactive-rgb), 0.15);\n\n  --cros-radio-button-color-rgb: var(--cros-icon-color-prominent-rgb);\n  --cros-radio-button-color: var(--cros-icon-color-prominent);\n\n  --cros-radio-button-ripple-color-rgb: var(--cros-radio-button-color-rgb);\n  --cros-radio-button-ripple-color: rgba(var(--cros-radio-button-ripple-color-rgb), 0.2);\n\n  --cros-radio-button-color-unchecked-rgb: var(--google-grey-700-rgb);\n  --cros-radio-button-color-unchecked: var(--google-grey-700);\n\n  --cros-radio-button-ripple-color-unchecked-rgb: var(--google-grey-600-rgb);\n  --cros-radio-button-ripple-color-unchecked: rgba(var(--cros-radio-button-ripple-color-unchecked-rgb), 0.15);\n\n  --cros-separator-color-rgb: 0, 0, 0;\n  --cros-separator-color: rgba(var(--cros-separator-color-rgb), 0.14);\n\n  --cros-link-color-rgb: var(--google-blue-700-rgb);\n  --cros-link-color: var(--google-blue-700);\n\n  --cros-button-focus-ring-color-rgb: var(--cros-icon-color-prominent-rgb);\n  --cros-button-focus-ring-color: var(--cros-icon-color-prominent);\n\n  --cros-button-background-color-primary-rgb: var(--cros-icon-color-prominent-rgb);\n  --cros-button-background-color-primary: var(--cros-icon-color-prominent);\n\n  --cros-button-label-color-primary-rgb: var(--google-grey-200-rgb);\n  --cros-button-label-color-primary: var(--google-grey-200);\n\n  --cros-button-ripple-color-primary-rgb: 255, 255, 255;\n  --cros-button-ripple-color-primary: rgb(var(--cros-button-ripple-color-primary-rgb));\n\n  --cros-button-background-color-primary-hover-overlay-rgb: 0, 0, 0;\n  --cros-button-background-color-primary-hover-overlay: rgba(var(--cros-button-background-color-primary-hover-overlay-rgb), 0.08);\n\n  --cros-button-active-shadow-color-ambient-primary-rgb: var(--google-blue-500-rgb);\n  --cros-button-active-shadow-color-ambient-primary: rgba(var(--cros-button-active-shadow-color-ambient-primary-rgb), 0.15);\n\n  --cros-button-active-shadow-color-key-primary-rgb: var(--google-blue-500-rgb);\n  --cros-button-active-shadow-color-key-primary: rgba(var(--cros-button-active-shadow-color-key-primary-rgb), 0.3);\n\n  --cros-button-background-color-primary-disabled-rgb: var(--google-grey-100-rgb);\n  --cros-button-background-color-primary-disabled: var(--google-grey-100);\n\n  --cros-button-label-color-primary-disabled-rgb: var(--google-grey-600-rgb);\n  --cros-button-label-color-primary-disabled: var(--google-grey-600);\n\n  --cros-button-label-color-secondary-rgb: var(--cros-icon-color-prominent-rgb);\n  --cros-button-label-color-secondary: var(--cros-icon-color-prominent);\n\n  --cros-button-stroke-color-secondary-rgb: var(--google-grey-300-rgb);\n  --cros-button-stroke-color-secondary: var(--google-grey-300);\n\n  --cros-button-ripple-color-secondary-rgb: var(--cros-icon-color-prominent-rgb);\n  --cros-button-ripple-color-secondary: var(--cros-icon-color-prominent);\n\n  --cros-button-stroke-color-secondary-hover-rgb: var(--google-blue-100-rgb);\n  --cros-button-stroke-color-secondary-hover: var(--google-blue-100);\n\n  --cros-button-background-color-secondary-hover-rgb: var(--google-blue-500-rgb);\n  --cros-button-background-color-secondary-hover: rgba(var(--cros-button-background-color-secondary-hover-rgb), 0.04);\n\n  --cros-button-active-shadow-color-ambient-secondary-rgb: var(--google-grey-500-rgb);\n  --cros-button-active-shadow-color-ambient-secondary: rgba(var(--cros-button-active-shadow-color-ambient-secondary-rgb), 0.15);\n\n  --cros-button-active-shadow-color-key-secondary-rgb: var(--google-grey-500-rgb);\n  --cros-button-active-shadow-color-key-secondary: rgba(var(--cros-button-active-shadow-color-key-secondary-rgb), 0.3);\n\n  --cros-button-label-color-secondary-disabled-rgb: var(--google-grey-600-rgb);\n  --cros-button-label-color-secondary-disabled: var(--google-grey-600);\n\n  --cros-button-stroke-color-secondary-disabled-rgb: var(--google-grey-100-rgb);\n  --cros-button-stroke-color-secondary-disabled: var(--google-grey-100);\n\n  --cros-button-icon-color-primary-rgb: var(--google-grey-200-rgb);\n  --cros-button-icon-color-primary: var(--google-grey-200);\n\n  --cros-button-icon-color-primary-disabled-rgb: var(--google-grey-600-rgb);\n  --cros-button-icon-color-primary-disabled: var(--google-grey-600);\n\n  --cros-button-icon-color-secondary-rgb: var(--google-blue-600-rgb);\n  --cros-button-icon-color-secondary: var(--google-blue-600);\n\n  --cros-button-icon-color-secondary-disabled-rgb: var(--google-grey-200-rgb);\n  --cros-button-icon-color-secondary-disabled: var(--google-grey-200);\n\n  --cros-icon-button-background-color-rgb: 0, 0, 0;\n  --cros-icon-button-background-color: rgba(var(--cros-icon-button-background-color-rgb), 0.05);\n\n  --cros-menu-label-color-rgb: var(--google-grey-900-rgb);\n  --cros-menu-label-color: var(--google-grey-900);\n\n  --cros-menu-icon-color-rgb: var(--google-grey-900-rgb);\n  --cros-menu-icon-color: var(--google-grey-900);\n\n  --cros-menu-shortcut-color-rgb: var(--google-grey-700-rgb);\n  --cros-menu-shortcut-color: var(--google-grey-700);\n\n  --cros-menu-item-background-hover-rgb: var(--cros-ink-ripple-color-rgb);\n  --cros-menu-item-background-hover: var(--cros-ink-ripple-color);\n\n  --cros-tab-label-color-active-rgb: var(--google-blue-600-rgb);\n  --cros-tab-label-color-active: var(--google-blue-600);\n\n  --cros-tab-label-color-inactive-rgb: var(--google-grey-600-rgb);\n  --cros-tab-label-color-inactive: var(--google-grey-600);\n\n  --cros-tab-icon-color-active-rgb: var(--google-blue-600-rgb);\n  --cros-tab-icon-color-active: var(--google-blue-600);\n\n  --cros-tab-icon-color-inactive-rgb: var(--google-grey-600-rgb);\n  --cros-tab-icon-color-inactive: var(--google-grey-600);\n\n  --cros-textfield-background-color-rgb: var(--google-grey-100-rgb);\n  --cros-textfield-background-color: var(--google-grey-100);\n\n  --cros-textfield-label-color-rgb: var(--google-grey-700-rgb);\n  --cros-textfield-label-color: var(--google-grey-700);\n\n  --cros-textfield-input-color-rgb: var(--google-grey-900-rgb);\n  --cros-textfield-input-color: var(--google-grey-900);\n\n  --cros-textfield-label-color-focus-rgb: var(--cros-icon-color-prominent-rgb);\n  --cros-textfield-label-color-focus: var(--cros-icon-color-prominent);\n\n  --cros-textfield-label-color-error-rgb: var(--google-red-600-rgb);\n  --cros-textfield-label-color-error: var(--google-red-600);\n\n  --cros-textfield-background-color-disabled-rgb: var(--google-grey-100-rgb);\n  --cros-textfield-background-color-disabled: rgba(var(--cros-textfield-background-color-disabled-rgb), 0.38);\n\n  --cros-textfield-label-color-disabled-rgb: var(--google-grey-700-rgb);\n  --cros-textfield-label-color-disabled: rgba(var(--cros-textfield-label-color-disabled-rgb), 0.38);\n\n  --cros-textfield-input-color-disabled-rgb: var(--google-grey-900-rgb);\n  --cros-textfield-input-color-disabled: rgba(var(--cros-textfield-input-color-disabled-rgb), 0.38);\n\n  --cros-tooltip-background-color-rgb: var(--google-grey-900-rgb);\n  --cros-tooltip-background-color: rgba(var(--cros-tooltip-background-color-rgb), 0.8);\n\n  --cros-tooltip-label-color-rgb: var(--google-grey-100-rgb);\n  --cros-tooltip-label-color: var(--google-grey-100);\n\n  --google-blue-50-rgb: 232, 240, 254;\n  --google-blue-50: rgb(var(--google-blue-50-rgb));\n\n  --google-blue-100-rgb: 210, 227, 252;\n  --google-blue-100: rgb(var(--google-blue-100-rgb));\n\n  --google-blue-200-rgb: 174, 203, 250;\n  --google-blue-200: rgb(var(--google-blue-200-rgb));\n\n  --google-blue-300-rgb: 138, 180, 248;\n  --google-blue-300: rgb(var(--google-blue-300-rgb));\n\n  --google-blue-400-rgb: 102, 157, 246;\n  --google-blue-400: rgb(var(--google-blue-400-rgb));\n\n  --google-blue-500-rgb: 66, 133, 244;\n  --google-blue-500: rgb(var(--google-blue-500-rgb));\n\n  --google-blue-600-rgb: 26, 115, 232;\n  --google-blue-600: rgb(var(--google-blue-600-rgb));\n\n  --google-blue-700-rgb: 25, 103, 210;\n  --google-blue-700: rgb(var(--google-blue-700-rgb));\n\n  --google-blue-800-rgb: 24, 90, 188;\n  --google-blue-800: rgb(var(--google-blue-800-rgb));\n\n  --google-blue-900-rgb: 23, 78, 166;\n  --google-blue-900: rgb(var(--google-blue-900-rgb));\n\n  --google-green-50-rgb: 230, 244, 234;\n  --google-green-50: rgb(var(--google-green-50-rgb));\n\n  --google-green-100-rgb: 206, 234, 214;\n  --google-green-100: rgb(var(--google-green-100-rgb));\n\n  --google-green-200-rgb: 168, 218, 181;\n  --google-green-200: rgb(var(--google-green-200-rgb));\n\n  --google-green-300-rgb: 129, 201, 149;\n  --google-green-300: rgb(var(--google-green-300-rgb));\n\n  --google-green-400-rgb: 91, 185, 116;\n  --google-green-400: rgb(var(--google-green-400-rgb));\n\n  --google-green-500-rgb: 52, 168, 83;\n  --google-green-500: rgb(var(--google-green-500-rgb));\n\n  --google-green-600-rgb: 30, 142, 62;\n  --google-green-600: rgb(var(--google-green-600-rgb));\n\n  --google-green-700-rgb: 24, 128, 56;\n  --google-green-700: rgb(var(--google-green-700-rgb));\n\n  --google-green-800-rgb: 19, 115, 51;\n  --google-green-800: rgb(var(--google-green-800-rgb));\n\n  --google-green-900-rgb: 13, 101, 45;\n  --google-green-900: rgb(var(--google-green-900-rgb));\n\n  --google-grey-50-rgb: 248, 249, 250;\n  --google-grey-50: rgb(var(--google-grey-50-rgb));\n\n  --google-grey-100-rgb: 241, 243, 244;\n  --google-grey-100: rgb(var(--google-grey-100-rgb));\n\n  --google-grey-200-rgb: 232, 234, 237;\n  --google-grey-200: rgb(var(--google-grey-200-rgb));\n\n  --google-grey-300-rgb: 218, 220, 224;\n  --google-grey-300: rgb(var(--google-grey-300-rgb));\n\n  --google-grey-400-rgb: 189, 193, 198;\n  --google-grey-400: rgb(var(--google-grey-400-rgb));\n\n  --google-grey-500-rgb: 154, 160, 166;\n  --google-grey-500: rgb(var(--google-grey-500-rgb));\n\n  --google-grey-600-rgb: 128, 134, 139;\n  --google-grey-600: rgb(var(--google-grey-600-rgb));\n\n  --google-grey-700-rgb: 95, 99, 104;\n  --google-grey-700: rgb(var(--google-grey-700-rgb));\n\n  --google-grey-800-rgb: 60, 64, 67;\n  --google-grey-800: rgb(var(--google-grey-800-rgb));\n\n  --google-grey-900-rgb: 32, 33, 36;\n  --google-grey-900: rgb(var(--google-grey-900-rgb));\n\n  --google-red-50-rgb: 252, 232, 230;\n  --google-red-50: rgb(var(--google-red-50-rgb));\n\n  --google-red-100-rgb: 250, 210, 207;\n  --google-red-100: rgb(var(--google-red-100-rgb));\n\n  --google-red-200-rgb: 246, 174, 169;\n  --google-red-200: rgb(var(--google-red-200-rgb));\n\n  --google-red-300-rgb: 242, 139, 130;\n  --google-red-300: rgb(var(--google-red-300-rgb));\n\n  --google-red-400-rgb: 238, 103, 92;\n  --google-red-400: rgb(var(--google-red-400-rgb));\n\n  --google-red-500-rgb: 234, 67, 53;\n  --google-red-500: rgb(var(--google-red-500-rgb));\n\n  --google-red-600-rgb: 217, 48, 37;\n  --google-red-600: rgb(var(--google-red-600-rgb));\n\n  --google-red-700-rgb: 197, 34, 31;\n  --google-red-700: rgb(var(--google-red-700-rgb));\n\n  --google-red-800-rgb: 179, 20, 18;\n  --google-red-800: rgb(var(--google-red-800-rgb));\n\n  --google-red-900-rgb: 165, 14, 14;\n  --google-red-900: rgb(var(--google-red-900-rgb));\n\n  --google-yellow-50-rgb: 254, 247, 224;\n  --google-yellow-50: rgb(var(--google-yellow-50-rgb));\n\n  --google-yellow-100-rgb: 254, 239, 195;\n  --google-yellow-100: rgb(var(--google-yellow-100-rgb));\n\n  --google-yellow-200-rgb: 253, 226, 147;\n  --google-yellow-200: rgb(var(--google-yellow-200-rgb));\n\n  --google-yellow-300-rgb: 253, 214, 99;\n  --google-yellow-300: rgb(var(--google-yellow-300-rgb));\n\n  --google-yellow-400-rgb: 252, 201, 52;\n  --google-yellow-400: rgb(var(--google-yellow-400-rgb));\n\n  --google-yellow-500-rgb: 251, 188, 4;\n  --google-yellow-500: rgb(var(--google-yellow-500-rgb));\n\n  --google-yellow-600-rgb: 249, 171, 0;\n  --google-yellow-600: rgb(var(--google-yellow-600-rgb));\n\n  --google-yellow-700-rgb: 242, 153, 0;\n  --google-yellow-700: rgb(var(--google-yellow-700-rgb));\n\n  --google-yellow-800-rgb: 234, 134, 0;\n  --google-yellow-800: rgb(var(--google-yellow-800-rgb));\n\n  --google-yellow-900-rgb: 227, 116, 0;\n  --google-yellow-900: rgb(var(--google-yellow-900-rgb));\n\n  --cros-dropped-elevation-bg-color-1-rgb: var(--google-grey-50-rgb);\n  --cros-dropped-elevation-bg-color-1: var(--google-grey-50);\n\n  --cros-dropped-elevation-bg-color-2-rgb: var(--google-grey-200-rgb);\n  --cros-dropped-elevation-bg-color-2: var(--google-grey-200);\n\n  --cros-prominent-ripple-color-rgb: var(--google-blue-600-rgb);\n  --cros-prominent-ripple-color: var(--google-blue-600);\n\n  --cros-prominent-ripple-highlight-color-rgb: var(--cros-prominent-ripple-color-rgb);\n  --cros-prominent-ripple-highlight-color: var(--cros-prominent-ripple-color);\n\n  --cros-prominent-ripple-ink-drop-color-rgb: var(--cros-prominent-ripple-color-rgb);\n  --cros-prominent-ripple-ink-drop-color: var(--cros-prominent-ripple-color);\n\n  --cros-ripple-color-rgb: 0, 0, 0;\n  --cros-ripple-color: rgb(var(--cros-ripple-color-rgb));\n\n  --cros-ripple-highlight-color-rgb: var(--cros-ripple-color-rgb);\n  --cros-ripple-highlight-color: var(--cros-ripple-color);\n\n  --cros-ripple-ink-drop-color-rgb: var(--cros-ripple-color-rgb);\n  --cros-ripple-ink-drop-color: var(--cros-ripple-color);\n\n  --cros-textfield-suffixes-color-rgb: var(--google-grey-700-rgb);\n  --cros-textfield-suffixes-color: var(--google-grey-700);\n\n  --cros-textfield-hint-text-color-rgb: var(--google-grey-700-rgb);\n  --cros-textfield-hint-text-color: var(--google-grey-700);\n\n  --cros-textfield-underline-color-focus-rgb: var(--google-blue-600-rgb);\n  --cros-textfield-underline-color-focus: var(--google-blue-600);\n\n  --cros-textfield-cursor-color-focus-rgb: var(--google-blue-600-rgb);\n  --cros-textfield-cursor-color-focus: var(--google-blue-600);\n\n  --cros-textfield-underline-color-error-rgb: var(--google-red-600-rgb);\n  --cros-textfield-underline-color-error: var(--google-red-600);\n\n  --cros-textfield-cursor-color-error-rgb: var(--google-red-600-rgb);\n  --cros-textfield-cursor-color-error: var(--google-red-600);\n\n  --cros-textfield-hint-text-color-error-rgb: var(--google-red-600-rgb);\n  --cros-textfield-hint-text-color-error: var(--google-red-600);\n\n  --cros-menu-bg-color-rgb: var(--cros-bg-color-elevation-2-rgb);\n  --cros-menu-bg-color: var(--cros-bg-color-elevation-2);\n\n  --ea-slider-color-active-rgb: var(--google-blue-600-rgb);\n  --ea-slider-color-active: var(--google-blue-600);\n\n  --ea-slider-track-color-active-rgb: var(--ea-slider-color-active-rgb);\n  --ea-slider-track-color-active: rgba(var(--ea-slider-track-color-active-rgb), var(--ea-second-tone-opacity));\n\n  --ea-slider-color-inactive-rgb: var(--google-grey-700-rgb);\n  --ea-slider-color-inactive: var(--google-grey-700);\n\n  --ea-slider-track-color-inactive-rgb: var(--ea-slider-color-inactive-rgb);\n  --ea-slider-track-color-inactive: rgba(var(--ea-slider-track-color-inactive-rgb), var(--ea-second-tone-opacity));\n\n  --cros-disabled-opacity: 0.38;\n\n  --cros-button-primary-ripple-opacity: 0.32;\n\n  --cros-button-secondary-ripple-opacity: 0.1;\n\n  --cros-disabled-color-opacity: 0.38;\n\n  --cros-ripple-highlight-opacity: var(--cros-ripple-opacity);\n\n  --cros-ripple-ink-drop-opacity: var(--cros-ripple-opacity);\n\n  --cros-ripple-opacity: 0.06;\n\n  --cros-prominent-ripple-highlight-opacity: var(--cros-ripple-opacity);\n\n  --cros-prominent-ripple-ink-drop-opacity: var(--cros-ripple-opacity);\n\n  --ea-second-tone-opacity: 0.3;\n}\n") : "dark" ===
            (null === a || void 0 === a ? void 0 : a.yd) ? new Fa(Ga, "\n      \nhtml:not(body) {\n  --cros-bg-color-rgb: 255, 255, 255;\n  --cros-bg-color: rgb(var(--cros-bg-color-rgb));\n\n  --cros-bg-color-elevation-1-rgb: 255, 255, 255;\n  --cros-bg-color-elevation-1: rgb(var(--cros-bg-color-elevation-1-rgb));\n\n  --cros-bg-color-elevation-2-rgb: 255, 255, 255;\n  --cros-bg-color-elevation-2: rgb(var(--cros-bg-color-elevation-2-rgb));\n\n  --cros-bg-color-elevation-3-rgb: 255, 255, 255;\n  --cros-bg-color-elevation-3: rgb(var(--cros-bg-color-elevation-3-rgb));\n\n  --cros-bg-color-elevation-4-rgb: 255, 255, 255;\n  --cros-bg-color-elevation-4: rgb(var(--cros-bg-color-elevation-4-rgb));\n\n  --cros-bg-color-elevation-5-rgb: 255, 255, 255;\n  --cros-bg-color-elevation-5: rgb(var(--cros-bg-color-elevation-5-rgb));\n\n  --cros-text-color-primary-rgb: var(--google-grey-900-rgb);\n  --cros-text-color-primary: var(--google-grey-900);\n\n  --cros-text-color-secondary-rgb: var(--google-grey-700-rgb);\n  --cros-text-color-secondary: var(--google-grey-700);\n\n  --cros-text-color-alert-rgb: var(--google-red-600-rgb);\n  --cros-text-color-alert: var(--google-red-600);\n\n  --cros-text-color-warning-rgb: var(--google-yellow-600-rgb);\n  --cros-text-color-warning: var(--google-yellow-600);\n\n  --cros-text-color-positive-rgb: var(--google-green-600-rgb);\n  --cros-text-color-positive: var(--google-green-600);\n\n  --cros-text-color-prominent-rgb: var(--cros-icon-color-prominent-rgb);\n  --cros-text-color-prominent: var(--cros-icon-color-prominent);\n\n  --cros-text-color-selection-rgb: var(--google-blue-700-rgb);\n  --cros-text-color-selection: var(--google-blue-700);\n\n  --cros-icon-color-primary-rgb: var(--google-grey-900-rgb);\n  --cros-icon-color-primary: var(--google-grey-900);\n\n  --cros-icon-color-secondary-rgb: var(--google-grey-500-rgb);\n  --cros-icon-color-secondary: var(--google-grey-500);\n\n  --cros-icon-color-disabled-rgb: var(--google-grey-700-rgb);\n  --cros-icon-color-disabled: rgba(var(--cros-icon-color-disabled-rgb), var(--cros-disabled-opacity));\n\n  --cros-icon-color-alert-rgb: var(--google-red-600-rgb);\n  --cros-icon-color-alert: var(--google-red-600);\n\n  --cros-icon-color-warning-rgb: var(--google-yellow-600-rgb);\n  --cros-icon-color-warning: var(--google-yellow-600);\n\n  --cros-icon-color-positive-rgb: var(--google-green-600-rgb);\n  --cros-icon-color-positive: var(--google-green-600);\n\n  --cros-icon-color-prominent-rgb: var(--google-blue-600-rgb);\n  --cros-icon-color-prominent: var(--google-blue-600);\n\n  --cros-icon-color-selection-rgb: var(--google-blue-700-rgb);\n  --cros-icon-color-selection: var(--google-blue-700);\n\n  --cros-highlight-color-rgb: var(--google-blue-50-rgb);\n  --cros-highlight-color: var(--google-blue-50);\n\n  --cros-dark-ink-ripple-color-rgb: 0, 0, 0;\n  --cros-dark-ink-ripple-color: rgba(var(--cros-dark-ink-ripple-color-rgb), 0.06);\n\n  --cros-light-ink-ripple-color-rgb: 255, 255, 255;\n  --cros-light-ink-ripple-color: rgba(var(--cros-light-ink-ripple-color-rgb), 0.08);\n\n  --cros-ink-ripple-color-rgb: var(--cros-dark-ink-ripple-color-rgb);\n  --cros-ink-ripple-color: var(--cros-dark-ink-ripple-color);\n\n  --cros-focus-ring-color-rgb: var(--cros-icon-color-prominent-rgb);\n  --cros-focus-ring-color: var(--cros-icon-color-prominent);\n\n  --cros-toolbar-search-bg-color-rgb: var(--google-grey-100-rgb);\n  --cros-toolbar-search-bg-color: var(--google-grey-100);\n\n  --cros-menu-item-bg-color-focus-rgb: 0, 0, 0;\n  --cros-menu-item-bg-color-focus: rgba(var(--cros-menu-item-bg-color-focus-rgb), 0.06);\n\n  --cros-menu-item-ripple-color-rgb: 0, 0, 0;\n  --cros-menu-item-ripple-color: rgba(var(--cros-menu-item-ripple-color-rgb), 0.06);\n\n  --cros-toggle-color-rgb: var(--cros-icon-color-prominent-rgb);\n  --cros-toggle-color: var(--cros-icon-color-prominent);\n\n  --cros-toggle-bg-color-inactive-rgb: var(--google-grey-400-rgb);\n  --cros-toggle-bg-color-inactive: var(--google-grey-400);\n\n  --cros-toggle-button-color-inactive-rgb: 255, 255, 255;\n  --cros-toggle-button-color-inactive: rgb(var(--cros-toggle-button-color-inactive-rgb));\n\n  --cros-toggle-ripple-color-rgb: var(--cros-toggle-color-rgb);\n  --cros-toggle-ripple-color: rgba(var(--cros-toggle-ripple-color-rgb), 0.2);\n\n  --cros-toggle-ripple-color-inactive-rgb: var(--google-grey-600-rgb);\n  --cros-toggle-ripple-color-inactive: rgba(var(--cros-toggle-ripple-color-inactive-rgb), 0.15);\n\n  --cros-radio-button-color-rgb: var(--cros-icon-color-prominent-rgb);\n  --cros-radio-button-color: var(--cros-icon-color-prominent);\n\n  --cros-radio-button-ripple-color-rgb: var(--cros-radio-button-color-rgb);\n  --cros-radio-button-ripple-color: rgba(var(--cros-radio-button-ripple-color-rgb), 0.2);\n\n  --cros-radio-button-color-unchecked-rgb: var(--google-grey-700-rgb);\n  --cros-radio-button-color-unchecked: var(--google-grey-700);\n\n  --cros-radio-button-ripple-color-unchecked-rgb: var(--google-grey-600-rgb);\n  --cros-radio-button-ripple-color-unchecked: rgba(var(--cros-radio-button-ripple-color-unchecked-rgb), 0.15);\n\n  --cros-separator-color-rgb: 0, 0, 0;\n  --cros-separator-color: rgba(var(--cros-separator-color-rgb), 0.14);\n\n  --cros-link-color-rgb: var(--google-blue-700-rgb);\n  --cros-link-color: var(--google-blue-700);\n\n  --cros-button-focus-ring-color-rgb: var(--cros-icon-color-prominent-rgb);\n  --cros-button-focus-ring-color: var(--cros-icon-color-prominent);\n\n  --cros-button-background-color-primary-rgb: var(--cros-icon-color-prominent-rgb);\n  --cros-button-background-color-primary: var(--cros-icon-color-prominent);\n\n  --cros-button-label-color-primary-rgb: var(--google-grey-200-rgb);\n  --cros-button-label-color-primary: var(--google-grey-200);\n\n  --cros-button-ripple-color-primary-rgb: 255, 255, 255;\n  --cros-button-ripple-color-primary: rgb(var(--cros-button-ripple-color-primary-rgb));\n\n  --cros-button-background-color-primary-hover-overlay-rgb: 0, 0, 0;\n  --cros-button-background-color-primary-hover-overlay: rgba(var(--cros-button-background-color-primary-hover-overlay-rgb), 0.08);\n\n  --cros-button-active-shadow-color-ambient-primary-rgb: var(--google-blue-500-rgb);\n  --cros-button-active-shadow-color-ambient-primary: rgba(var(--cros-button-active-shadow-color-ambient-primary-rgb), 0.15);\n\n  --cros-button-active-shadow-color-key-primary-rgb: var(--google-blue-500-rgb);\n  --cros-button-active-shadow-color-key-primary: rgba(var(--cros-button-active-shadow-color-key-primary-rgb), 0.3);\n\n  --cros-button-background-color-primary-disabled-rgb: var(--google-grey-100-rgb);\n  --cros-button-background-color-primary-disabled: var(--google-grey-100);\n\n  --cros-button-label-color-primary-disabled-rgb: var(--google-grey-600-rgb);\n  --cros-button-label-color-primary-disabled: var(--google-grey-600);\n\n  --cros-button-label-color-secondary-rgb: var(--cros-icon-color-prominent-rgb);\n  --cros-button-label-color-secondary: var(--cros-icon-color-prominent);\n\n  --cros-button-stroke-color-secondary-rgb: var(--google-grey-300-rgb);\n  --cros-button-stroke-color-secondary: var(--google-grey-300);\n\n  --cros-button-ripple-color-secondary-rgb: var(--cros-icon-color-prominent-rgb);\n  --cros-button-ripple-color-secondary: var(--cros-icon-color-prominent);\n\n  --cros-button-stroke-color-secondary-hover-rgb: var(--google-blue-100-rgb);\n  --cros-button-stroke-color-secondary-hover: var(--google-blue-100);\n\n  --cros-button-background-color-secondary-hover-rgb: var(--google-blue-500-rgb);\n  --cros-button-background-color-secondary-hover: rgba(var(--cros-button-background-color-secondary-hover-rgb), 0.04);\n\n  --cros-button-active-shadow-color-ambient-secondary-rgb: var(--google-grey-500-rgb);\n  --cros-button-active-shadow-color-ambient-secondary: rgba(var(--cros-button-active-shadow-color-ambient-secondary-rgb), 0.15);\n\n  --cros-button-active-shadow-color-key-secondary-rgb: var(--google-grey-500-rgb);\n  --cros-button-active-shadow-color-key-secondary: rgba(var(--cros-button-active-shadow-color-key-secondary-rgb), 0.3);\n\n  --cros-button-label-color-secondary-disabled-rgb: var(--google-grey-600-rgb);\n  --cros-button-label-color-secondary-disabled: var(--google-grey-600);\n\n  --cros-button-stroke-color-secondary-disabled-rgb: var(--google-grey-100-rgb);\n  --cros-button-stroke-color-secondary-disabled: var(--google-grey-100);\n\n  --cros-button-icon-color-primary-rgb: var(--google-grey-200-rgb);\n  --cros-button-icon-color-primary: var(--google-grey-200);\n\n  --cros-button-icon-color-primary-disabled-rgb: var(--google-grey-600-rgb);\n  --cros-button-icon-color-primary-disabled: var(--google-grey-600);\n\n  --cros-button-icon-color-secondary-rgb: var(--google-blue-600-rgb);\n  --cros-button-icon-color-secondary: var(--google-blue-600);\n\n  --cros-button-icon-color-secondary-disabled-rgb: var(--google-grey-200-rgb);\n  --cros-button-icon-color-secondary-disabled: var(--google-grey-200);\n\n  --cros-icon-button-background-color-rgb: 0, 0, 0;\n  --cros-icon-button-background-color: rgba(var(--cros-icon-button-background-color-rgb), 0.05);\n\n  --cros-menu-label-color-rgb: var(--google-grey-900-rgb);\n  --cros-menu-label-color: var(--google-grey-900);\n\n  --cros-menu-icon-color-rgb: var(--google-grey-900-rgb);\n  --cros-menu-icon-color: var(--google-grey-900);\n\n  --cros-menu-shortcut-color-rgb: var(--google-grey-700-rgb);\n  --cros-menu-shortcut-color: var(--google-grey-700);\n\n  --cros-menu-item-background-hover-rgb: var(--cros-ink-ripple-color-rgb);\n  --cros-menu-item-background-hover: var(--cros-ink-ripple-color);\n\n  --cros-tab-label-color-active-rgb: var(--google-blue-600-rgb);\n  --cros-tab-label-color-active: var(--google-blue-600);\n\n  --cros-tab-label-color-inactive-rgb: var(--google-grey-600-rgb);\n  --cros-tab-label-color-inactive: var(--google-grey-600);\n\n  --cros-tab-icon-color-active-rgb: var(--google-blue-600-rgb);\n  --cros-tab-icon-color-active: var(--google-blue-600);\n\n  --cros-tab-icon-color-inactive-rgb: var(--google-grey-600-rgb);\n  --cros-tab-icon-color-inactive: var(--google-grey-600);\n\n  --cros-textfield-background-color-rgb: var(--google-grey-100-rgb);\n  --cros-textfield-background-color: var(--google-grey-100);\n\n  --cros-textfield-label-color-rgb: var(--google-grey-700-rgb);\n  --cros-textfield-label-color: var(--google-grey-700);\n\n  --cros-textfield-input-color-rgb: var(--google-grey-900-rgb);\n  --cros-textfield-input-color: var(--google-grey-900);\n\n  --cros-textfield-label-color-focus-rgb: var(--cros-icon-color-prominent-rgb);\n  --cros-textfield-label-color-focus: var(--cros-icon-color-prominent);\n\n  --cros-textfield-label-color-error-rgb: var(--google-red-600-rgb);\n  --cros-textfield-label-color-error: var(--google-red-600);\n\n  --cros-textfield-background-color-disabled-rgb: var(--google-grey-100-rgb);\n  --cros-textfield-background-color-disabled: rgba(var(--cros-textfield-background-color-disabled-rgb), 0.38);\n\n  --cros-textfield-label-color-disabled-rgb: var(--google-grey-700-rgb);\n  --cros-textfield-label-color-disabled: rgba(var(--cros-textfield-label-color-disabled-rgb), 0.38);\n\n  --cros-textfield-input-color-disabled-rgb: var(--google-grey-900-rgb);\n  --cros-textfield-input-color-disabled: rgba(var(--cros-textfield-input-color-disabled-rgb), 0.38);\n\n  --cros-tooltip-background-color-rgb: var(--google-grey-900-rgb);\n  --cros-tooltip-background-color: rgba(var(--cros-tooltip-background-color-rgb), 0.8);\n\n  --cros-tooltip-label-color-rgb: var(--google-grey-100-rgb);\n  --cros-tooltip-label-color: var(--google-grey-100);\n\n  --google-blue-50-rgb: 232, 240, 254;\n  --google-blue-50: rgb(var(--google-blue-50-rgb));\n\n  --google-blue-100-rgb: 210, 227, 252;\n  --google-blue-100: rgb(var(--google-blue-100-rgb));\n\n  --google-blue-200-rgb: 174, 203, 250;\n  --google-blue-200: rgb(var(--google-blue-200-rgb));\n\n  --google-blue-300-rgb: 138, 180, 248;\n  --google-blue-300: rgb(var(--google-blue-300-rgb));\n\n  --google-blue-400-rgb: 102, 157, 246;\n  --google-blue-400: rgb(var(--google-blue-400-rgb));\n\n  --google-blue-500-rgb: 66, 133, 244;\n  --google-blue-500: rgb(var(--google-blue-500-rgb));\n\n  --google-blue-600-rgb: 26, 115, 232;\n  --google-blue-600: rgb(var(--google-blue-600-rgb));\n\n  --google-blue-700-rgb: 25, 103, 210;\n  --google-blue-700: rgb(var(--google-blue-700-rgb));\n\n  --google-blue-800-rgb: 24, 90, 188;\n  --google-blue-800: rgb(var(--google-blue-800-rgb));\n\n  --google-blue-900-rgb: 23, 78, 166;\n  --google-blue-900: rgb(var(--google-blue-900-rgb));\n\n  --google-green-50-rgb: 230, 244, 234;\n  --google-green-50: rgb(var(--google-green-50-rgb));\n\n  --google-green-100-rgb: 206, 234, 214;\n  --google-green-100: rgb(var(--google-green-100-rgb));\n\n  --google-green-200-rgb: 168, 218, 181;\n  --google-green-200: rgb(var(--google-green-200-rgb));\n\n  --google-green-300-rgb: 129, 201, 149;\n  --google-green-300: rgb(var(--google-green-300-rgb));\n\n  --google-green-400-rgb: 91, 185, 116;\n  --google-green-400: rgb(var(--google-green-400-rgb));\n\n  --google-green-500-rgb: 52, 168, 83;\n  --google-green-500: rgb(var(--google-green-500-rgb));\n\n  --google-green-600-rgb: 30, 142, 62;\n  --google-green-600: rgb(var(--google-green-600-rgb));\n\n  --google-green-700-rgb: 24, 128, 56;\n  --google-green-700: rgb(var(--google-green-700-rgb));\n\n  --google-green-800-rgb: 19, 115, 51;\n  --google-green-800: rgb(var(--google-green-800-rgb));\n\n  --google-green-900-rgb: 13, 101, 45;\n  --google-green-900: rgb(var(--google-green-900-rgb));\n\n  --google-grey-50-rgb: 248, 249, 250;\n  --google-grey-50: rgb(var(--google-grey-50-rgb));\n\n  --google-grey-100-rgb: 241, 243, 244;\n  --google-grey-100: rgb(var(--google-grey-100-rgb));\n\n  --google-grey-200-rgb: 232, 234, 237;\n  --google-grey-200: rgb(var(--google-grey-200-rgb));\n\n  --google-grey-300-rgb: 218, 220, 224;\n  --google-grey-300: rgb(var(--google-grey-300-rgb));\n\n  --google-grey-400-rgb: 189, 193, 198;\n  --google-grey-400: rgb(var(--google-grey-400-rgb));\n\n  --google-grey-500-rgb: 154, 160, 166;\n  --google-grey-500: rgb(var(--google-grey-500-rgb));\n\n  --google-grey-600-rgb: 128, 134, 139;\n  --google-grey-600: rgb(var(--google-grey-600-rgb));\n\n  --google-grey-700-rgb: 95, 99, 104;\n  --google-grey-700: rgb(var(--google-grey-700-rgb));\n\n  --google-grey-800-rgb: 60, 64, 67;\n  --google-grey-800: rgb(var(--google-grey-800-rgb));\n\n  --google-grey-900-rgb: 32, 33, 36;\n  --google-grey-900: rgb(var(--google-grey-900-rgb));\n\n  --google-red-50-rgb: 252, 232, 230;\n  --google-red-50: rgb(var(--google-red-50-rgb));\n\n  --google-red-100-rgb: 250, 210, 207;\n  --google-red-100: rgb(var(--google-red-100-rgb));\n\n  --google-red-200-rgb: 246, 174, 169;\n  --google-red-200: rgb(var(--google-red-200-rgb));\n\n  --google-red-300-rgb: 242, 139, 130;\n  --google-red-300: rgb(var(--google-red-300-rgb));\n\n  --google-red-400-rgb: 238, 103, 92;\n  --google-red-400: rgb(var(--google-red-400-rgb));\n\n  --google-red-500-rgb: 234, 67, 53;\n  --google-red-500: rgb(var(--google-red-500-rgb));\n\n  --google-red-600-rgb: 217, 48, 37;\n  --google-red-600: rgb(var(--google-red-600-rgb));\n\n  --google-red-700-rgb: 197, 34, 31;\n  --google-red-700: rgb(var(--google-red-700-rgb));\n\n  --google-red-800-rgb: 179, 20, 18;\n  --google-red-800: rgb(var(--google-red-800-rgb));\n\n  --google-red-900-rgb: 165, 14, 14;\n  --google-red-900: rgb(var(--google-red-900-rgb));\n\n  --google-yellow-50-rgb: 254, 247, 224;\n  --google-yellow-50: rgb(var(--google-yellow-50-rgb));\n\n  --google-yellow-100-rgb: 254, 239, 195;\n  --google-yellow-100: rgb(var(--google-yellow-100-rgb));\n\n  --google-yellow-200-rgb: 253, 226, 147;\n  --google-yellow-200: rgb(var(--google-yellow-200-rgb));\n\n  --google-yellow-300-rgb: 253, 214, 99;\n  --google-yellow-300: rgb(var(--google-yellow-300-rgb));\n\n  --google-yellow-400-rgb: 252, 201, 52;\n  --google-yellow-400: rgb(var(--google-yellow-400-rgb));\n\n  --google-yellow-500-rgb: 251, 188, 4;\n  --google-yellow-500: rgb(var(--google-yellow-500-rgb));\n\n  --google-yellow-600-rgb: 249, 171, 0;\n  --google-yellow-600: rgb(var(--google-yellow-600-rgb));\n\n  --google-yellow-700-rgb: 242, 153, 0;\n  --google-yellow-700: rgb(var(--google-yellow-700-rgb));\n\n  --google-yellow-800-rgb: 234, 134, 0;\n  --google-yellow-800: rgb(var(--google-yellow-800-rgb));\n\n  --google-yellow-900-rgb: 227, 116, 0;\n  --google-yellow-900: rgb(var(--google-yellow-900-rgb));\n\n  --cros-dropped-elevation-bg-color-1-rgb: var(--google-grey-50-rgb);\n  --cros-dropped-elevation-bg-color-1: var(--google-grey-50);\n\n  --cros-dropped-elevation-bg-color-2-rgb: var(--google-grey-200-rgb);\n  --cros-dropped-elevation-bg-color-2: var(--google-grey-200);\n\n  --cros-prominent-ripple-color-rgb: var(--google-blue-600-rgb);\n  --cros-prominent-ripple-color: var(--google-blue-600);\n\n  --cros-prominent-ripple-highlight-color-rgb: var(--cros-prominent-ripple-color-rgb);\n  --cros-prominent-ripple-highlight-color: var(--cros-prominent-ripple-color);\n\n  --cros-prominent-ripple-ink-drop-color-rgb: var(--cros-prominent-ripple-color-rgb);\n  --cros-prominent-ripple-ink-drop-color: var(--cros-prominent-ripple-color);\n\n  --cros-ripple-color-rgb: 0, 0, 0;\n  --cros-ripple-color: rgb(var(--cros-ripple-color-rgb));\n\n  --cros-ripple-highlight-color-rgb: var(--cros-ripple-color-rgb);\n  --cros-ripple-highlight-color: var(--cros-ripple-color);\n\n  --cros-ripple-ink-drop-color-rgb: var(--cros-ripple-color-rgb);\n  --cros-ripple-ink-drop-color: var(--cros-ripple-color);\n\n  --cros-textfield-suffixes-color-rgb: var(--google-grey-700-rgb);\n  --cros-textfield-suffixes-color: var(--google-grey-700);\n\n  --cros-textfield-hint-text-color-rgb: var(--google-grey-700-rgb);\n  --cros-textfield-hint-text-color: var(--google-grey-700);\n\n  --cros-textfield-underline-color-focus-rgb: var(--google-blue-600-rgb);\n  --cros-textfield-underline-color-focus: var(--google-blue-600);\n\n  --cros-textfield-cursor-color-focus-rgb: var(--google-blue-600-rgb);\n  --cros-textfield-cursor-color-focus: var(--google-blue-600);\n\n  --cros-textfield-underline-color-error-rgb: var(--google-red-600-rgb);\n  --cros-textfield-underline-color-error: var(--google-red-600);\n\n  --cros-textfield-cursor-color-error-rgb: var(--google-red-600-rgb);\n  --cros-textfield-cursor-color-error: var(--google-red-600);\n\n  --cros-textfield-hint-text-color-error-rgb: var(--google-red-600-rgb);\n  --cros-textfield-hint-text-color-error: var(--google-red-600);\n\n  --cros-menu-bg-color-rgb: var(--cros-bg-color-elevation-2-rgb);\n  --cros-menu-bg-color: var(--cros-bg-color-elevation-2);\n\n  --ea-slider-color-active-rgb: var(--google-blue-600-rgb);\n  --ea-slider-color-active: var(--google-blue-600);\n\n  --ea-slider-track-color-active-rgb: var(--ea-slider-color-active-rgb);\n  --ea-slider-track-color-active: rgba(var(--ea-slider-track-color-active-rgb), var(--ea-second-tone-opacity));\n\n  --ea-slider-color-inactive-rgb: var(--google-grey-700-rgb);\n  --ea-slider-color-inactive: var(--google-grey-700);\n\n  --ea-slider-track-color-inactive-rgb: var(--ea-slider-color-inactive-rgb);\n  --ea-slider-track-color-inactive: rgba(var(--ea-slider-track-color-inactive-rgb), var(--ea-second-tone-opacity));\n\n  --cros-disabled-opacity: 0.38;\n\n  --cros-button-primary-ripple-opacity: 0.32;\n\n  --cros-button-secondary-ripple-opacity: 0.1;\n\n  --cros-disabled-color-opacity: 0.38;\n\n  --cros-ripple-highlight-opacity: var(--cros-ripple-opacity);\n\n  --cros-ripple-ink-drop-opacity: var(--cros-ripple-opacity);\n\n  --cros-ripple-opacity: 0.06;\n\n  --cros-prominent-ripple-highlight-opacity: var(--cros-ripple-opacity);\n\n  --cros-prominent-ripple-ink-drop-opacity: var(--cros-ripple-opacity);\n\n  --ea-second-tone-opacity: 0.3;\n}\n\n      \nhtml:not(body) {\n  --cros-bg-color-rgb: var(--google-grey-900-rgb);\n  --cros-bg-color: var(--google-grey-900);\n\n  --cros-bg-color-elevation-1-rgb: 42, 42, 45;\n  --cros-bg-color-elevation-1: rgb(var(--cros-bg-color-elevation-1-rgb));\n\n  --cros-bg-color-elevation-2-rgb: 46, 46, 49;\n  --cros-bg-color-elevation-2: rgb(var(--cros-bg-color-elevation-2-rgb));\n\n  --cros-bg-color-elevation-3-rgb: 51, 51, 54;\n  --cros-bg-color-elevation-3: rgb(var(--cros-bg-color-elevation-3-rgb));\n\n  --cros-bg-color-elevation-4-rgb: 55, 55, 58;\n  --cros-bg-color-elevation-4: rgb(var(--cros-bg-color-elevation-4-rgb));\n\n  --cros-bg-color-elevation-5-rgb: 60, 60, 62;\n  --cros-bg-color-elevation-5: rgb(var(--cros-bg-color-elevation-5-rgb));\n\n  --cros-text-color-primary-rgb: var(--google-grey-200-rgb);\n  --cros-text-color-primary: var(--google-grey-200);\n\n  --cros-text-color-secondary-rgb: var(--google-grey-400-rgb);\n  --cros-text-color-secondary: var(--google-grey-400);\n\n  --cros-text-color-alert-rgb: var(--google-red-300-rgb);\n  --cros-text-color-alert: var(--google-red-300);\n\n  --cros-text-color-warning-rgb: var(--google-yellow-300-rgb);\n  --cros-text-color-warning: var(--google-yellow-300);\n\n  --cros-text-color-positive-rgb: var(--google-green-300-rgb);\n  --cros-text-color-positive: var(--google-green-300);\n\n  --cros-text-color-selection-rgb: var(--google-blue-200-rgb);\n  --cros-text-color-selection: var(--google-blue-200);\n\n  --cros-icon-color-primary-rgb: var(--google-grey-200-rgb);\n  --cros-icon-color-primary: var(--google-grey-200);\n\n  --cros-icon-color-secondary-rgb: var(--google-grey-500-rgb);\n  --cros-icon-color-secondary: var(--google-grey-500);\n\n  --cros-icon-color-disabled-rgb: var(--google-grey-200-rgb);\n  --cros-icon-color-disabled: rgba(var(--cros-icon-color-disabled-rgb), var(--cros-disabled-opacity));\n\n  --cros-icon-color-alert-rgb: var(--google-red-300-rgb);\n  --cros-icon-color-alert: var(--google-red-300);\n\n  --cros-icon-color-warning-rgb: var(--google-yellow-300-rgb);\n  --cros-icon-color-warning: var(--google-yellow-300);\n\n  --cros-icon-color-positive-rgb: var(--google-green-300-rgb);\n  --cros-icon-color-positive: var(--google-green-300);\n\n  --cros-icon-color-prominent-rgb: var(--google-blue-300-rgb);\n  --cros-icon-color-prominent: var(--google-blue-300);\n\n  --cros-icon-color-selection-rgb: var(--google-blue-200-rgb);\n  --cros-icon-color-selection: var(--google-blue-200);\n\n  --cros-highlight-color-rgb: var(--google-blue-300-rgb);\n  --cros-highlight-color: rgba(var(--cros-highlight-color-rgb), 0.3);\n\n  --cros-ink-ripple-color-rgb: var(--cros-light-ink-ripple-color-rgb);\n  --cros-ink-ripple-color: var(--cros-light-ink-ripple-color);\n\n  --cros-toolbar-search-bg-color-rgb: 255, 255, 255;\n  --cros-toolbar-search-bg-color: rgba(var(--cros-toolbar-search-bg-color-rgb), 0.1);\n\n  --cros-menu-item-bg-color-focus-rgb: 255, 255, 255;\n  --cros-menu-item-bg-color-focus: rgba(var(--cros-menu-item-bg-color-focus-rgb), 0.08);\n\n  --cros-menu-item-ripple-color-rgb: 255, 255, 255;\n  --cros-menu-item-ripple-color: rgba(var(--cros-menu-item-ripple-color-rgb), 0.08);\n\n  --cros-separator-color-rgb: 255, 255, 255;\n  --cros-separator-color: rgba(var(--cros-separator-color-rgb), 0.14);\n\n  --cros-link-color-rgb: var(--google-blue-300-rgb);\n  --cros-link-color: var(--google-blue-300);\n\n  --cros-button-label-color-primary-rgb: var(--google-grey-900-rgb);\n  --cros-button-label-color-primary: var(--google-grey-900);\n\n  --cros-button-ripple-color-primary-rgb: 0, 0, 0;\n  --cros-button-ripple-color-primary: rgb(var(--cros-button-ripple-color-primary-rgb));\n\n  --cros-button-background-color-primary-hover-overlay-rgb: 255, 255, 255;\n  --cros-button-background-color-primary-hover-overlay: rgba(var(--cros-button-background-color-primary-hover-overlay-rgb), 0.08);\n\n  --cros-button-active-shadow-color-ambient-primary-rgb: var(--google-blue-400-rgb);\n  --cros-button-active-shadow-color-ambient-primary: rgba(var(--cros-button-active-shadow-color-ambient-primary-rgb), 0.15);\n\n  --cros-button-active-shadow-color-key-primary-rgb: var(--google-blue-400-rgb);\n  --cros-button-active-shadow-color-key-primary: rgba(var(--cros-button-active-shadow-color-key-primary-rgb), 0.3);\n\n  --cros-button-background-color-primary-disabled-rgb: var(--google-grey-800-rgb);\n  --cros-button-background-color-primary-disabled: var(--google-grey-800);\n\n  --cros-button-label-color-primary-disabled-rgb: var(--google-grey-500-rgb);\n  --cros-button-label-color-primary-disabled: var(--google-grey-500);\n\n  --cros-button-stroke-color-secondary-rgb: var(--google-grey-700-rgb);\n  --cros-button-stroke-color-secondary: var(--google-grey-700);\n\n  --cros-button-stroke-color-secondary-hover-rgb: var(--google-blue-300-rgb);\n  --cros-button-stroke-color-secondary-hover: rgba(var(--cros-button-stroke-color-secondary-hover-rgb), 0.32);\n\n  --cros-button-background-color-secondary-hover-rgb: var(--google-blue-300-rgb);\n  --cros-button-background-color-secondary-hover: rgba(var(--cros-button-background-color-secondary-hover-rgb), 0.08);\n\n  --cros-button-active-shadow-color-ambient-secondary-rgb: var(--google-grey-600-rgb);\n  --cros-button-active-shadow-color-ambient-secondary: rgba(var(--cros-button-active-shadow-color-ambient-secondary-rgb), 0.15);\n\n  --cros-button-active-shadow-color-key-secondary-rgb: var(--google-grey-600-rgb);\n  --cros-button-active-shadow-color-key-secondary: rgba(var(--cros-button-active-shadow-color-key-secondary-rgb), 0.3);\n\n  --cros-button-label-color-secondary-disabled-rgb: var(--google-grey-500-rgb);\n  --cros-button-label-color-secondary-disabled: var(--google-grey-500);\n\n  --cros-button-stroke-color-secondary-disabled-rgb: var(--google-grey-800-rgb);\n  --cros-button-stroke-color-secondary-disabled: var(--google-grey-800);\n\n  --cros-button-icon-color-primary-rgb: var(--google-grey-900-rgb);\n  --cros-button-icon-color-primary: var(--google-grey-900);\n\n  --cros-button-icon-color-primary-disabled-rgb: var(--google-grey-500-rgb);\n  --cros-button-icon-color-primary-disabled: var(--google-grey-500);\n\n  --cros-button-icon-color-secondary-rgb: var(--google-blue-300-rgb);\n  --cros-button-icon-color-secondary: var(--google-blue-300);\n\n  --cros-button-icon-color-secondary-disabled-rgb: var(--google-grey-900-rgb);\n  --cros-button-icon-color-secondary-disabled: var(--google-grey-900);\n\n  --cros-icon-button-background-color-rgb: 255, 255, 255;\n  --cros-icon-button-background-color: rgba(var(--cros-icon-button-background-color-rgb), 0.1);\n\n  --cros-menu-label-color-rgb: var(--google-grey-200-rgb);\n  --cros-menu-label-color: var(--google-grey-200);\n\n  --cros-menu-icon-color-rgb: var(--google-grey-200-rgb);\n  --cros-menu-icon-color: var(--google-grey-200);\n\n  --cros-menu-shortcut-color-rgb: var(--google-grey-500-rgb);\n  --cros-menu-shortcut-color: var(--google-grey-500);\n\n  --cros-tab-label-color-active-rgb: var(--google-blue-300-rgb);\n  --cros-tab-label-color-active: var(--google-blue-300);\n\n  --cros-tab-label-color-inactive-rgb: var(--google-grey-500-rgb);\n  --cros-tab-label-color-inactive: var(--google-grey-500);\n\n  --cros-tab-icon-color-active-rgb: var(--google-blue-300-rgb);\n  --cros-tab-icon-color-active: var(--google-blue-300);\n\n  --cros-tab-icon-color-inactive-rgb: var(--google-grey-500-rgb);\n  --cros-tab-icon-color-inactive: var(--google-grey-500);\n\n  --cros-textfield-background-color-rgb: 0, 0, 0;\n  --cros-textfield-background-color: rgba(var(--cros-textfield-background-color-rgb), 0.3);\n\n  --cros-textfield-label-color-rgb: 255, 255, 255;\n  --cros-textfield-label-color: rgba(var(--cros-textfield-label-color-rgb), 0.6);\n\n  --cros-textfield-input-color-rgb: 255, 255, 255;\n  --cros-textfield-input-color: rgba(var(--cros-textfield-input-color-rgb), 0.87);\n\n  --cros-textfield-label-color-error-rgb: var(--google-red-300-rgb);\n  --cros-textfield-label-color-error: var(--google-red-300);\n\n  --cros-textfield-background-color-disabled-rgb: 0, 0, 0;\n  --cros-textfield-background-color-disabled: rgba(var(--cros-textfield-background-color-disabled-rgb), 0.11);\n\n  --cros-textfield-label-color-disabled-rgb: 0, 0, 0;\n  --cros-textfield-label-color-disabled: rgba(var(--cros-textfield-label-color-disabled-rgb), 0.23);\n\n  --cros-textfield-input-color-disabled-rgb: 255, 255, 255;\n  --cros-textfield-input-color-disabled: rgba(var(--cros-textfield-input-color-disabled-rgb), 0.33);\n\n  --cros-tooltip-background-color-rgb: 255, 255, 255;\n  --cros-tooltip-background-color: rgba(var(--cros-tooltip-background-color-rgb), 0.8);\n\n  --cros-tooltip-label-color-rgb: var(--google-grey-900-rgb);\n  --cros-tooltip-label-color: var(--google-grey-900);\n\n  --cros-dropped-elevation-bg-color-1-rgb: 26, 26, 29;\n  --cros-dropped-elevation-bg-color-1: rgb(var(--cros-dropped-elevation-bg-color-1-rgb));\n\n  --cros-dropped-elevation-bg-color-2-rgb: 0, 0, 0;\n  --cros-dropped-elevation-bg-color-2: rgb(var(--cros-dropped-elevation-bg-color-2-rgb));\n\n  --cros-prominent-ripple-color-rgb: var(--google-blue-300-rgb);\n  --cros-prominent-ripple-color: var(--google-blue-300);\n\n  --cros-ripple-color-rgb: 255, 255, 255;\n  --cros-ripple-color: rgb(var(--cros-ripple-color-rgb));\n\n  --cros-textfield-suffixes-color-rgb: var(--google-grey-500-rgb);\n  --cros-textfield-suffixes-color: var(--google-grey-500);\n\n  --cros-textfield-hint-text-color-rgb: var(--google-grey-500-rgb);\n  --cros-textfield-hint-text-color: var(--google-grey-500);\n\n  --cros-textfield-underline-color-focus-rgb: var(--google-blue-300-rgb);\n  --cros-textfield-underline-color-focus: var(--google-blue-300);\n\n  --cros-textfield-cursor-color-focus-rgb: var(--google-blue-300-rgb);\n  --cros-textfield-cursor-color-focus: var(--google-blue-300);\n\n  --cros-textfield-underline-color-error-rgb: var(--google-red-300-rgb);\n  --cros-textfield-underline-color-error: var(--google-red-300);\n\n  --cros-textfield-cursor-color-error-rgb: var(--google-red-300-rgb);\n  --cros-textfield-cursor-color-error: var(--google-red-300);\n\n  --cros-textfield-hint-text-color-error-rgb: var(--google-red-300-rgb);\n  --cros-textfield-hint-text-color-error: var(--google-red-300);\n\n  --ea-slider-color-active-rgb: var(--google-blue-300-rgb);\n  --ea-slider-color-active: var(--google-blue-300);\n\n  --ea-slider-color-inactive-rgb: var(--google-grey-200-rgb);\n  --ea-slider-color-inactive: var(--google-grey-200);\n\n  --cros-button-primary-ripple-opacity: 0.16;\n\n  --cros-button-secondary-ripple-opacity: 0.16;\n\n  --cros-ripple-opacity: 0.08;\n}\n\n    ") :
            new Fa(Ga, "\n      \nhtml:not(body) {\n  --cros-bg-color-rgb: 255, 255, 255;\n  --cros-bg-color: rgb(var(--cros-bg-color-rgb));\n\n  --cros-bg-color-elevation-1-rgb: 255, 255, 255;\n  --cros-bg-color-elevation-1: rgb(var(--cros-bg-color-elevation-1-rgb));\n\n  --cros-bg-color-elevation-2-rgb: 255, 255, 255;\n  --cros-bg-color-elevation-2: rgb(var(--cros-bg-color-elevation-2-rgb));\n\n  --cros-bg-color-elevation-3-rgb: 255, 255, 255;\n  --cros-bg-color-elevation-3: rgb(var(--cros-bg-color-elevation-3-rgb));\n\n  --cros-bg-color-elevation-4-rgb: 255, 255, 255;\n  --cros-bg-color-elevation-4: rgb(var(--cros-bg-color-elevation-4-rgb));\n\n  --cros-bg-color-elevation-5-rgb: 255, 255, 255;\n  --cros-bg-color-elevation-5: rgb(var(--cros-bg-color-elevation-5-rgb));\n\n  --cros-text-color-primary-rgb: var(--google-grey-900-rgb);\n  --cros-text-color-primary: var(--google-grey-900);\n\n  --cros-text-color-secondary-rgb: var(--google-grey-700-rgb);\n  --cros-text-color-secondary: var(--google-grey-700);\n\n  --cros-text-color-alert-rgb: var(--google-red-600-rgb);\n  --cros-text-color-alert: var(--google-red-600);\n\n  --cros-text-color-warning-rgb: var(--google-yellow-600-rgb);\n  --cros-text-color-warning: var(--google-yellow-600);\n\n  --cros-text-color-positive-rgb: var(--google-green-600-rgb);\n  --cros-text-color-positive: var(--google-green-600);\n\n  --cros-text-color-prominent-rgb: var(--cros-icon-color-prominent-rgb);\n  --cros-text-color-prominent: var(--cros-icon-color-prominent);\n\n  --cros-text-color-selection-rgb: var(--google-blue-700-rgb);\n  --cros-text-color-selection: var(--google-blue-700);\n\n  --cros-icon-color-primary-rgb: var(--google-grey-900-rgb);\n  --cros-icon-color-primary: var(--google-grey-900);\n\n  --cros-icon-color-secondary-rgb: var(--google-grey-500-rgb);\n  --cros-icon-color-secondary: var(--google-grey-500);\n\n  --cros-icon-color-disabled-rgb: var(--google-grey-700-rgb);\n  --cros-icon-color-disabled: rgba(var(--cros-icon-color-disabled-rgb), var(--cros-disabled-opacity));\n\n  --cros-icon-color-alert-rgb: var(--google-red-600-rgb);\n  --cros-icon-color-alert: var(--google-red-600);\n\n  --cros-icon-color-warning-rgb: var(--google-yellow-600-rgb);\n  --cros-icon-color-warning: var(--google-yellow-600);\n\n  --cros-icon-color-positive-rgb: var(--google-green-600-rgb);\n  --cros-icon-color-positive: var(--google-green-600);\n\n  --cros-icon-color-prominent-rgb: var(--google-blue-600-rgb);\n  --cros-icon-color-prominent: var(--google-blue-600);\n\n  --cros-icon-color-selection-rgb: var(--google-blue-700-rgb);\n  --cros-icon-color-selection: var(--google-blue-700);\n\n  --cros-highlight-color-rgb: var(--google-blue-50-rgb);\n  --cros-highlight-color: var(--google-blue-50);\n\n  --cros-dark-ink-ripple-color-rgb: 0, 0, 0;\n  --cros-dark-ink-ripple-color: rgba(var(--cros-dark-ink-ripple-color-rgb), 0.06);\n\n  --cros-light-ink-ripple-color-rgb: 255, 255, 255;\n  --cros-light-ink-ripple-color: rgba(var(--cros-light-ink-ripple-color-rgb), 0.08);\n\n  --cros-ink-ripple-color-rgb: var(--cros-dark-ink-ripple-color-rgb);\n  --cros-ink-ripple-color: var(--cros-dark-ink-ripple-color);\n\n  --cros-focus-ring-color-rgb: var(--cros-icon-color-prominent-rgb);\n  --cros-focus-ring-color: var(--cros-icon-color-prominent);\n\n  --cros-toolbar-search-bg-color-rgb: var(--google-grey-100-rgb);\n  --cros-toolbar-search-bg-color: var(--google-grey-100);\n\n  --cros-menu-item-bg-color-focus-rgb: 0, 0, 0;\n  --cros-menu-item-bg-color-focus: rgba(var(--cros-menu-item-bg-color-focus-rgb), 0.06);\n\n  --cros-menu-item-ripple-color-rgb: 0, 0, 0;\n  --cros-menu-item-ripple-color: rgba(var(--cros-menu-item-ripple-color-rgb), 0.06);\n\n  --cros-toggle-color-rgb: var(--cros-icon-color-prominent-rgb);\n  --cros-toggle-color: var(--cros-icon-color-prominent);\n\n  --cros-toggle-bg-color-inactive-rgb: var(--google-grey-400-rgb);\n  --cros-toggle-bg-color-inactive: var(--google-grey-400);\n\n  --cros-toggle-button-color-inactive-rgb: 255, 255, 255;\n  --cros-toggle-button-color-inactive: rgb(var(--cros-toggle-button-color-inactive-rgb));\n\n  --cros-toggle-ripple-color-rgb: var(--cros-toggle-color-rgb);\n  --cros-toggle-ripple-color: rgba(var(--cros-toggle-ripple-color-rgb), 0.2);\n\n  --cros-toggle-ripple-color-inactive-rgb: var(--google-grey-600-rgb);\n  --cros-toggle-ripple-color-inactive: rgba(var(--cros-toggle-ripple-color-inactive-rgb), 0.15);\n\n  --cros-radio-button-color-rgb: var(--cros-icon-color-prominent-rgb);\n  --cros-radio-button-color: var(--cros-icon-color-prominent);\n\n  --cros-radio-button-ripple-color-rgb: var(--cros-radio-button-color-rgb);\n  --cros-radio-button-ripple-color: rgba(var(--cros-radio-button-ripple-color-rgb), 0.2);\n\n  --cros-radio-button-color-unchecked-rgb: var(--google-grey-700-rgb);\n  --cros-radio-button-color-unchecked: var(--google-grey-700);\n\n  --cros-radio-button-ripple-color-unchecked-rgb: var(--google-grey-600-rgb);\n  --cros-radio-button-ripple-color-unchecked: rgba(var(--cros-radio-button-ripple-color-unchecked-rgb), 0.15);\n\n  --cros-separator-color-rgb: 0, 0, 0;\n  --cros-separator-color: rgba(var(--cros-separator-color-rgb), 0.14);\n\n  --cros-link-color-rgb: var(--google-blue-700-rgb);\n  --cros-link-color: var(--google-blue-700);\n\n  --cros-button-focus-ring-color-rgb: var(--cros-icon-color-prominent-rgb);\n  --cros-button-focus-ring-color: var(--cros-icon-color-prominent);\n\n  --cros-button-background-color-primary-rgb: var(--cros-icon-color-prominent-rgb);\n  --cros-button-background-color-primary: var(--cros-icon-color-prominent);\n\n  --cros-button-label-color-primary-rgb: var(--google-grey-200-rgb);\n  --cros-button-label-color-primary: var(--google-grey-200);\n\n  --cros-button-ripple-color-primary-rgb: 255, 255, 255;\n  --cros-button-ripple-color-primary: rgb(var(--cros-button-ripple-color-primary-rgb));\n\n  --cros-button-background-color-primary-hover-overlay-rgb: 0, 0, 0;\n  --cros-button-background-color-primary-hover-overlay: rgba(var(--cros-button-background-color-primary-hover-overlay-rgb), 0.08);\n\n  --cros-button-active-shadow-color-ambient-primary-rgb: var(--google-blue-500-rgb);\n  --cros-button-active-shadow-color-ambient-primary: rgba(var(--cros-button-active-shadow-color-ambient-primary-rgb), 0.15);\n\n  --cros-button-active-shadow-color-key-primary-rgb: var(--google-blue-500-rgb);\n  --cros-button-active-shadow-color-key-primary: rgba(var(--cros-button-active-shadow-color-key-primary-rgb), 0.3);\n\n  --cros-button-background-color-primary-disabled-rgb: var(--google-grey-100-rgb);\n  --cros-button-background-color-primary-disabled: var(--google-grey-100);\n\n  --cros-button-label-color-primary-disabled-rgb: var(--google-grey-600-rgb);\n  --cros-button-label-color-primary-disabled: var(--google-grey-600);\n\n  --cros-button-label-color-secondary-rgb: var(--cros-icon-color-prominent-rgb);\n  --cros-button-label-color-secondary: var(--cros-icon-color-prominent);\n\n  --cros-button-stroke-color-secondary-rgb: var(--google-grey-300-rgb);\n  --cros-button-stroke-color-secondary: var(--google-grey-300);\n\n  --cros-button-ripple-color-secondary-rgb: var(--cros-icon-color-prominent-rgb);\n  --cros-button-ripple-color-secondary: var(--cros-icon-color-prominent);\n\n  --cros-button-stroke-color-secondary-hover-rgb: var(--google-blue-100-rgb);\n  --cros-button-stroke-color-secondary-hover: var(--google-blue-100);\n\n  --cros-button-background-color-secondary-hover-rgb: var(--google-blue-500-rgb);\n  --cros-button-background-color-secondary-hover: rgba(var(--cros-button-background-color-secondary-hover-rgb), 0.04);\n\n  --cros-button-active-shadow-color-ambient-secondary-rgb: var(--google-grey-500-rgb);\n  --cros-button-active-shadow-color-ambient-secondary: rgba(var(--cros-button-active-shadow-color-ambient-secondary-rgb), 0.15);\n\n  --cros-button-active-shadow-color-key-secondary-rgb: var(--google-grey-500-rgb);\n  --cros-button-active-shadow-color-key-secondary: rgba(var(--cros-button-active-shadow-color-key-secondary-rgb), 0.3);\n\n  --cros-button-label-color-secondary-disabled-rgb: var(--google-grey-600-rgb);\n  --cros-button-label-color-secondary-disabled: var(--google-grey-600);\n\n  --cros-button-stroke-color-secondary-disabled-rgb: var(--google-grey-100-rgb);\n  --cros-button-stroke-color-secondary-disabled: var(--google-grey-100);\n\n  --cros-button-icon-color-primary-rgb: var(--google-grey-200-rgb);\n  --cros-button-icon-color-primary: var(--google-grey-200);\n\n  --cros-button-icon-color-primary-disabled-rgb: var(--google-grey-600-rgb);\n  --cros-button-icon-color-primary-disabled: var(--google-grey-600);\n\n  --cros-button-icon-color-secondary-rgb: var(--google-blue-600-rgb);\n  --cros-button-icon-color-secondary: var(--google-blue-600);\n\n  --cros-button-icon-color-secondary-disabled-rgb: var(--google-grey-200-rgb);\n  --cros-button-icon-color-secondary-disabled: var(--google-grey-200);\n\n  --cros-icon-button-background-color-rgb: 0, 0, 0;\n  --cros-icon-button-background-color: rgba(var(--cros-icon-button-background-color-rgb), 0.05);\n\n  --cros-menu-label-color-rgb: var(--google-grey-900-rgb);\n  --cros-menu-label-color: var(--google-grey-900);\n\n  --cros-menu-icon-color-rgb: var(--google-grey-900-rgb);\n  --cros-menu-icon-color: var(--google-grey-900);\n\n  --cros-menu-shortcut-color-rgb: var(--google-grey-700-rgb);\n  --cros-menu-shortcut-color: var(--google-grey-700);\n\n  --cros-menu-item-background-hover-rgb: var(--cros-ink-ripple-color-rgb);\n  --cros-menu-item-background-hover: var(--cros-ink-ripple-color);\n\n  --cros-tab-label-color-active-rgb: var(--google-blue-600-rgb);\n  --cros-tab-label-color-active: var(--google-blue-600);\n\n  --cros-tab-label-color-inactive-rgb: var(--google-grey-600-rgb);\n  --cros-tab-label-color-inactive: var(--google-grey-600);\n\n  --cros-tab-icon-color-active-rgb: var(--google-blue-600-rgb);\n  --cros-tab-icon-color-active: var(--google-blue-600);\n\n  --cros-tab-icon-color-inactive-rgb: var(--google-grey-600-rgb);\n  --cros-tab-icon-color-inactive: var(--google-grey-600);\n\n  --cros-textfield-background-color-rgb: var(--google-grey-100-rgb);\n  --cros-textfield-background-color: var(--google-grey-100);\n\n  --cros-textfield-label-color-rgb: var(--google-grey-700-rgb);\n  --cros-textfield-label-color: var(--google-grey-700);\n\n  --cros-textfield-input-color-rgb: var(--google-grey-900-rgb);\n  --cros-textfield-input-color: var(--google-grey-900);\n\n  --cros-textfield-label-color-focus-rgb: var(--cros-icon-color-prominent-rgb);\n  --cros-textfield-label-color-focus: var(--cros-icon-color-prominent);\n\n  --cros-textfield-label-color-error-rgb: var(--google-red-600-rgb);\n  --cros-textfield-label-color-error: var(--google-red-600);\n\n  --cros-textfield-background-color-disabled-rgb: var(--google-grey-100-rgb);\n  --cros-textfield-background-color-disabled: rgba(var(--cros-textfield-background-color-disabled-rgb), 0.38);\n\n  --cros-textfield-label-color-disabled-rgb: var(--google-grey-700-rgb);\n  --cros-textfield-label-color-disabled: rgba(var(--cros-textfield-label-color-disabled-rgb), 0.38);\n\n  --cros-textfield-input-color-disabled-rgb: var(--google-grey-900-rgb);\n  --cros-textfield-input-color-disabled: rgba(var(--cros-textfield-input-color-disabled-rgb), 0.38);\n\n  --cros-tooltip-background-color-rgb: var(--google-grey-900-rgb);\n  --cros-tooltip-background-color: rgba(var(--cros-tooltip-background-color-rgb), 0.8);\n\n  --cros-tooltip-label-color-rgb: var(--google-grey-100-rgb);\n  --cros-tooltip-label-color: var(--google-grey-100);\n\n  --google-blue-50-rgb: 232, 240, 254;\n  --google-blue-50: rgb(var(--google-blue-50-rgb));\n\n  --google-blue-100-rgb: 210, 227, 252;\n  --google-blue-100: rgb(var(--google-blue-100-rgb));\n\n  --google-blue-200-rgb: 174, 203, 250;\n  --google-blue-200: rgb(var(--google-blue-200-rgb));\n\n  --google-blue-300-rgb: 138, 180, 248;\n  --google-blue-300: rgb(var(--google-blue-300-rgb));\n\n  --google-blue-400-rgb: 102, 157, 246;\n  --google-blue-400: rgb(var(--google-blue-400-rgb));\n\n  --google-blue-500-rgb: 66, 133, 244;\n  --google-blue-500: rgb(var(--google-blue-500-rgb));\n\n  --google-blue-600-rgb: 26, 115, 232;\n  --google-blue-600: rgb(var(--google-blue-600-rgb));\n\n  --google-blue-700-rgb: 25, 103, 210;\n  --google-blue-700: rgb(var(--google-blue-700-rgb));\n\n  --google-blue-800-rgb: 24, 90, 188;\n  --google-blue-800: rgb(var(--google-blue-800-rgb));\n\n  --google-blue-900-rgb: 23, 78, 166;\n  --google-blue-900: rgb(var(--google-blue-900-rgb));\n\n  --google-green-50-rgb: 230, 244, 234;\n  --google-green-50: rgb(var(--google-green-50-rgb));\n\n  --google-green-100-rgb: 206, 234, 214;\n  --google-green-100: rgb(var(--google-green-100-rgb));\n\n  --google-green-200-rgb: 168, 218, 181;\n  --google-green-200: rgb(var(--google-green-200-rgb));\n\n  --google-green-300-rgb: 129, 201, 149;\n  --google-green-300: rgb(var(--google-green-300-rgb));\n\n  --google-green-400-rgb: 91, 185, 116;\n  --google-green-400: rgb(var(--google-green-400-rgb));\n\n  --google-green-500-rgb: 52, 168, 83;\n  --google-green-500: rgb(var(--google-green-500-rgb));\n\n  --google-green-600-rgb: 30, 142, 62;\n  --google-green-600: rgb(var(--google-green-600-rgb));\n\n  --google-green-700-rgb: 24, 128, 56;\n  --google-green-700: rgb(var(--google-green-700-rgb));\n\n  --google-green-800-rgb: 19, 115, 51;\n  --google-green-800: rgb(var(--google-green-800-rgb));\n\n  --google-green-900-rgb: 13, 101, 45;\n  --google-green-900: rgb(var(--google-green-900-rgb));\n\n  --google-grey-50-rgb: 248, 249, 250;\n  --google-grey-50: rgb(var(--google-grey-50-rgb));\n\n  --google-grey-100-rgb: 241, 243, 244;\n  --google-grey-100: rgb(var(--google-grey-100-rgb));\n\n  --google-grey-200-rgb: 232, 234, 237;\n  --google-grey-200: rgb(var(--google-grey-200-rgb));\n\n  --google-grey-300-rgb: 218, 220, 224;\n  --google-grey-300: rgb(var(--google-grey-300-rgb));\n\n  --google-grey-400-rgb: 189, 193, 198;\n  --google-grey-400: rgb(var(--google-grey-400-rgb));\n\n  --google-grey-500-rgb: 154, 160, 166;\n  --google-grey-500: rgb(var(--google-grey-500-rgb));\n\n  --google-grey-600-rgb: 128, 134, 139;\n  --google-grey-600: rgb(var(--google-grey-600-rgb));\n\n  --google-grey-700-rgb: 95, 99, 104;\n  --google-grey-700: rgb(var(--google-grey-700-rgb));\n\n  --google-grey-800-rgb: 60, 64, 67;\n  --google-grey-800: rgb(var(--google-grey-800-rgb));\n\n  --google-grey-900-rgb: 32, 33, 36;\n  --google-grey-900: rgb(var(--google-grey-900-rgb));\n\n  --google-red-50-rgb: 252, 232, 230;\n  --google-red-50: rgb(var(--google-red-50-rgb));\n\n  --google-red-100-rgb: 250, 210, 207;\n  --google-red-100: rgb(var(--google-red-100-rgb));\n\n  --google-red-200-rgb: 246, 174, 169;\n  --google-red-200: rgb(var(--google-red-200-rgb));\n\n  --google-red-300-rgb: 242, 139, 130;\n  --google-red-300: rgb(var(--google-red-300-rgb));\n\n  --google-red-400-rgb: 238, 103, 92;\n  --google-red-400: rgb(var(--google-red-400-rgb));\n\n  --google-red-500-rgb: 234, 67, 53;\n  --google-red-500: rgb(var(--google-red-500-rgb));\n\n  --google-red-600-rgb: 217, 48, 37;\n  --google-red-600: rgb(var(--google-red-600-rgb));\n\n  --google-red-700-rgb: 197, 34, 31;\n  --google-red-700: rgb(var(--google-red-700-rgb));\n\n  --google-red-800-rgb: 179, 20, 18;\n  --google-red-800: rgb(var(--google-red-800-rgb));\n\n  --google-red-900-rgb: 165, 14, 14;\n  --google-red-900: rgb(var(--google-red-900-rgb));\n\n  --google-yellow-50-rgb: 254, 247, 224;\n  --google-yellow-50: rgb(var(--google-yellow-50-rgb));\n\n  --google-yellow-100-rgb: 254, 239, 195;\n  --google-yellow-100: rgb(var(--google-yellow-100-rgb));\n\n  --google-yellow-200-rgb: 253, 226, 147;\n  --google-yellow-200: rgb(var(--google-yellow-200-rgb));\n\n  --google-yellow-300-rgb: 253, 214, 99;\n  --google-yellow-300: rgb(var(--google-yellow-300-rgb));\n\n  --google-yellow-400-rgb: 252, 201, 52;\n  --google-yellow-400: rgb(var(--google-yellow-400-rgb));\n\n  --google-yellow-500-rgb: 251, 188, 4;\n  --google-yellow-500: rgb(var(--google-yellow-500-rgb));\n\n  --google-yellow-600-rgb: 249, 171, 0;\n  --google-yellow-600: rgb(var(--google-yellow-600-rgb));\n\n  --google-yellow-700-rgb: 242, 153, 0;\n  --google-yellow-700: rgb(var(--google-yellow-700-rgb));\n\n  --google-yellow-800-rgb: 234, 134, 0;\n  --google-yellow-800: rgb(var(--google-yellow-800-rgb));\n\n  --google-yellow-900-rgb: 227, 116, 0;\n  --google-yellow-900: rgb(var(--google-yellow-900-rgb));\n\n  --cros-dropped-elevation-bg-color-1-rgb: var(--google-grey-50-rgb);\n  --cros-dropped-elevation-bg-color-1: var(--google-grey-50);\n\n  --cros-dropped-elevation-bg-color-2-rgb: var(--google-grey-200-rgb);\n  --cros-dropped-elevation-bg-color-2: var(--google-grey-200);\n\n  --cros-prominent-ripple-color-rgb: var(--google-blue-600-rgb);\n  --cros-prominent-ripple-color: var(--google-blue-600);\n\n  --cros-prominent-ripple-highlight-color-rgb: var(--cros-prominent-ripple-color-rgb);\n  --cros-prominent-ripple-highlight-color: var(--cros-prominent-ripple-color);\n\n  --cros-prominent-ripple-ink-drop-color-rgb: var(--cros-prominent-ripple-color-rgb);\n  --cros-prominent-ripple-ink-drop-color: var(--cros-prominent-ripple-color);\n\n  --cros-ripple-color-rgb: 0, 0, 0;\n  --cros-ripple-color: rgb(var(--cros-ripple-color-rgb));\n\n  --cros-ripple-highlight-color-rgb: var(--cros-ripple-color-rgb);\n  --cros-ripple-highlight-color: var(--cros-ripple-color);\n\n  --cros-ripple-ink-drop-color-rgb: var(--cros-ripple-color-rgb);\n  --cros-ripple-ink-drop-color: var(--cros-ripple-color);\n\n  --cros-textfield-suffixes-color-rgb: var(--google-grey-700-rgb);\n  --cros-textfield-suffixes-color: var(--google-grey-700);\n\n  --cros-textfield-hint-text-color-rgb: var(--google-grey-700-rgb);\n  --cros-textfield-hint-text-color: var(--google-grey-700);\n\n  --cros-textfield-underline-color-focus-rgb: var(--google-blue-600-rgb);\n  --cros-textfield-underline-color-focus: var(--google-blue-600);\n\n  --cros-textfield-cursor-color-focus-rgb: var(--google-blue-600-rgb);\n  --cros-textfield-cursor-color-focus: var(--google-blue-600);\n\n  --cros-textfield-underline-color-error-rgb: var(--google-red-600-rgb);\n  --cros-textfield-underline-color-error: var(--google-red-600);\n\n  --cros-textfield-cursor-color-error-rgb: var(--google-red-600-rgb);\n  --cros-textfield-cursor-color-error: var(--google-red-600);\n\n  --cros-textfield-hint-text-color-error-rgb: var(--google-red-600-rgb);\n  --cros-textfield-hint-text-color-error: var(--google-red-600);\n\n  --cros-menu-bg-color-rgb: var(--cros-bg-color-elevation-2-rgb);\n  --cros-menu-bg-color: var(--cros-bg-color-elevation-2);\n\n  --ea-slider-color-active-rgb: var(--google-blue-600-rgb);\n  --ea-slider-color-active: var(--google-blue-600);\n\n  --ea-slider-track-color-active-rgb: var(--ea-slider-color-active-rgb);\n  --ea-slider-track-color-active: rgba(var(--ea-slider-track-color-active-rgb), var(--ea-second-tone-opacity));\n\n  --ea-slider-color-inactive-rgb: var(--google-grey-700-rgb);\n  --ea-slider-color-inactive: var(--google-grey-700);\n\n  --ea-slider-track-color-inactive-rgb: var(--ea-slider-color-inactive-rgb);\n  --ea-slider-track-color-inactive: rgba(var(--ea-slider-track-color-inactive-rgb), var(--ea-second-tone-opacity));\n\n  --cros-disabled-opacity: 0.38;\n\n  --cros-button-primary-ripple-opacity: 0.32;\n\n  --cros-button-secondary-ripple-opacity: 0.1;\n\n  --cros-disabled-color-opacity: 0.38;\n\n  --cros-ripple-highlight-opacity: var(--cros-ripple-opacity);\n\n  --cros-ripple-ink-drop-opacity: var(--cros-ripple-opacity);\n\n  --cros-ripple-opacity: 0.06;\n\n  --cros-prominent-ripple-highlight-opacity: var(--cros-ripple-opacity);\n\n  --cros-prominent-ripple-ink-drop-opacity: var(--cros-ripple-opacity);\n\n  --ea-second-tone-opacity: 0.3;\n}\n\n\n      @media (prefers-color-scheme: dark) {\n        \nhtml:not(body) {\n  --cros-bg-color-rgb: var(--google-grey-900-rgb);\n  --cros-bg-color: var(--google-grey-900);\n\n  --cros-bg-color-elevation-1-rgb: 42, 42, 45;\n  --cros-bg-color-elevation-1: rgb(var(--cros-bg-color-elevation-1-rgb));\n\n  --cros-bg-color-elevation-2-rgb: 46, 46, 49;\n  --cros-bg-color-elevation-2: rgb(var(--cros-bg-color-elevation-2-rgb));\n\n  --cros-bg-color-elevation-3-rgb: 51, 51, 54;\n  --cros-bg-color-elevation-3: rgb(var(--cros-bg-color-elevation-3-rgb));\n\n  --cros-bg-color-elevation-4-rgb: 55, 55, 58;\n  --cros-bg-color-elevation-4: rgb(var(--cros-bg-color-elevation-4-rgb));\n\n  --cros-bg-color-elevation-5-rgb: 60, 60, 62;\n  --cros-bg-color-elevation-5: rgb(var(--cros-bg-color-elevation-5-rgb));\n\n  --cros-text-color-primary-rgb: var(--google-grey-200-rgb);\n  --cros-text-color-primary: var(--google-grey-200);\n\n  --cros-text-color-secondary-rgb: var(--google-grey-400-rgb);\n  --cros-text-color-secondary: var(--google-grey-400);\n\n  --cros-text-color-alert-rgb: var(--google-red-300-rgb);\n  --cros-text-color-alert: var(--google-red-300);\n\n  --cros-text-color-warning-rgb: var(--google-yellow-300-rgb);\n  --cros-text-color-warning: var(--google-yellow-300);\n\n  --cros-text-color-positive-rgb: var(--google-green-300-rgb);\n  --cros-text-color-positive: var(--google-green-300);\n\n  --cros-text-color-selection-rgb: var(--google-blue-200-rgb);\n  --cros-text-color-selection: var(--google-blue-200);\n\n  --cros-icon-color-primary-rgb: var(--google-grey-200-rgb);\n  --cros-icon-color-primary: var(--google-grey-200);\n\n  --cros-icon-color-secondary-rgb: var(--google-grey-500-rgb);\n  --cros-icon-color-secondary: var(--google-grey-500);\n\n  --cros-icon-color-disabled-rgb: var(--google-grey-200-rgb);\n  --cros-icon-color-disabled: rgba(var(--cros-icon-color-disabled-rgb), var(--cros-disabled-opacity));\n\n  --cros-icon-color-alert-rgb: var(--google-red-300-rgb);\n  --cros-icon-color-alert: var(--google-red-300);\n\n  --cros-icon-color-warning-rgb: var(--google-yellow-300-rgb);\n  --cros-icon-color-warning: var(--google-yellow-300);\n\n  --cros-icon-color-positive-rgb: var(--google-green-300-rgb);\n  --cros-icon-color-positive: var(--google-green-300);\n\n  --cros-icon-color-prominent-rgb: var(--google-blue-300-rgb);\n  --cros-icon-color-prominent: var(--google-blue-300);\n\n  --cros-icon-color-selection-rgb: var(--google-blue-200-rgb);\n  --cros-icon-color-selection: var(--google-blue-200);\n\n  --cros-highlight-color-rgb: var(--google-blue-300-rgb);\n  --cros-highlight-color: rgba(var(--cros-highlight-color-rgb), 0.3);\n\n  --cros-ink-ripple-color-rgb: var(--cros-light-ink-ripple-color-rgb);\n  --cros-ink-ripple-color: var(--cros-light-ink-ripple-color);\n\n  --cros-toolbar-search-bg-color-rgb: 255, 255, 255;\n  --cros-toolbar-search-bg-color: rgba(var(--cros-toolbar-search-bg-color-rgb), 0.1);\n\n  --cros-menu-item-bg-color-focus-rgb: 255, 255, 255;\n  --cros-menu-item-bg-color-focus: rgba(var(--cros-menu-item-bg-color-focus-rgb), 0.08);\n\n  --cros-menu-item-ripple-color-rgb: 255, 255, 255;\n  --cros-menu-item-ripple-color: rgba(var(--cros-menu-item-ripple-color-rgb), 0.08);\n\n  --cros-separator-color-rgb: 255, 255, 255;\n  --cros-separator-color: rgba(var(--cros-separator-color-rgb), 0.14);\n\n  --cros-link-color-rgb: var(--google-blue-300-rgb);\n  --cros-link-color: var(--google-blue-300);\n\n  --cros-button-label-color-primary-rgb: var(--google-grey-900-rgb);\n  --cros-button-label-color-primary: var(--google-grey-900);\n\n  --cros-button-ripple-color-primary-rgb: 0, 0, 0;\n  --cros-button-ripple-color-primary: rgb(var(--cros-button-ripple-color-primary-rgb));\n\n  --cros-button-background-color-primary-hover-overlay-rgb: 255, 255, 255;\n  --cros-button-background-color-primary-hover-overlay: rgba(var(--cros-button-background-color-primary-hover-overlay-rgb), 0.08);\n\n  --cros-button-active-shadow-color-ambient-primary-rgb: var(--google-blue-400-rgb);\n  --cros-button-active-shadow-color-ambient-primary: rgba(var(--cros-button-active-shadow-color-ambient-primary-rgb), 0.15);\n\n  --cros-button-active-shadow-color-key-primary-rgb: var(--google-blue-400-rgb);\n  --cros-button-active-shadow-color-key-primary: rgba(var(--cros-button-active-shadow-color-key-primary-rgb), 0.3);\n\n  --cros-button-background-color-primary-disabled-rgb: var(--google-grey-800-rgb);\n  --cros-button-background-color-primary-disabled: var(--google-grey-800);\n\n  --cros-button-label-color-primary-disabled-rgb: var(--google-grey-500-rgb);\n  --cros-button-label-color-primary-disabled: var(--google-grey-500);\n\n  --cros-button-stroke-color-secondary-rgb: var(--google-grey-700-rgb);\n  --cros-button-stroke-color-secondary: var(--google-grey-700);\n\n  --cros-button-stroke-color-secondary-hover-rgb: var(--google-blue-300-rgb);\n  --cros-button-stroke-color-secondary-hover: rgba(var(--cros-button-stroke-color-secondary-hover-rgb), 0.32);\n\n  --cros-button-background-color-secondary-hover-rgb: var(--google-blue-300-rgb);\n  --cros-button-background-color-secondary-hover: rgba(var(--cros-button-background-color-secondary-hover-rgb), 0.08);\n\n  --cros-button-active-shadow-color-ambient-secondary-rgb: var(--google-grey-600-rgb);\n  --cros-button-active-shadow-color-ambient-secondary: rgba(var(--cros-button-active-shadow-color-ambient-secondary-rgb), 0.15);\n\n  --cros-button-active-shadow-color-key-secondary-rgb: var(--google-grey-600-rgb);\n  --cros-button-active-shadow-color-key-secondary: rgba(var(--cros-button-active-shadow-color-key-secondary-rgb), 0.3);\n\n  --cros-button-label-color-secondary-disabled-rgb: var(--google-grey-500-rgb);\n  --cros-button-label-color-secondary-disabled: var(--google-grey-500);\n\n  --cros-button-stroke-color-secondary-disabled-rgb: var(--google-grey-800-rgb);\n  --cros-button-stroke-color-secondary-disabled: var(--google-grey-800);\n\n  --cros-button-icon-color-primary-rgb: var(--google-grey-900-rgb);\n  --cros-button-icon-color-primary: var(--google-grey-900);\n\n  --cros-button-icon-color-primary-disabled-rgb: var(--google-grey-500-rgb);\n  --cros-button-icon-color-primary-disabled: var(--google-grey-500);\n\n  --cros-button-icon-color-secondary-rgb: var(--google-blue-300-rgb);\n  --cros-button-icon-color-secondary: var(--google-blue-300);\n\n  --cros-button-icon-color-secondary-disabled-rgb: var(--google-grey-900-rgb);\n  --cros-button-icon-color-secondary-disabled: var(--google-grey-900);\n\n  --cros-icon-button-background-color-rgb: 255, 255, 255;\n  --cros-icon-button-background-color: rgba(var(--cros-icon-button-background-color-rgb), 0.1);\n\n  --cros-menu-label-color-rgb: var(--google-grey-200-rgb);\n  --cros-menu-label-color: var(--google-grey-200);\n\n  --cros-menu-icon-color-rgb: var(--google-grey-200-rgb);\n  --cros-menu-icon-color: var(--google-grey-200);\n\n  --cros-menu-shortcut-color-rgb: var(--google-grey-500-rgb);\n  --cros-menu-shortcut-color: var(--google-grey-500);\n\n  --cros-tab-label-color-active-rgb: var(--google-blue-300-rgb);\n  --cros-tab-label-color-active: var(--google-blue-300);\n\n  --cros-tab-label-color-inactive-rgb: var(--google-grey-500-rgb);\n  --cros-tab-label-color-inactive: var(--google-grey-500);\n\n  --cros-tab-icon-color-active-rgb: var(--google-blue-300-rgb);\n  --cros-tab-icon-color-active: var(--google-blue-300);\n\n  --cros-tab-icon-color-inactive-rgb: var(--google-grey-500-rgb);\n  --cros-tab-icon-color-inactive: var(--google-grey-500);\n\n  --cros-textfield-background-color-rgb: 0, 0, 0;\n  --cros-textfield-background-color: rgba(var(--cros-textfield-background-color-rgb), 0.3);\n\n  --cros-textfield-label-color-rgb: 255, 255, 255;\n  --cros-textfield-label-color: rgba(var(--cros-textfield-label-color-rgb), 0.6);\n\n  --cros-textfield-input-color-rgb: 255, 255, 255;\n  --cros-textfield-input-color: rgba(var(--cros-textfield-input-color-rgb), 0.87);\n\n  --cros-textfield-label-color-error-rgb: var(--google-red-300-rgb);\n  --cros-textfield-label-color-error: var(--google-red-300);\n\n  --cros-textfield-background-color-disabled-rgb: 0, 0, 0;\n  --cros-textfield-background-color-disabled: rgba(var(--cros-textfield-background-color-disabled-rgb), 0.11);\n\n  --cros-textfield-label-color-disabled-rgb: 0, 0, 0;\n  --cros-textfield-label-color-disabled: rgba(var(--cros-textfield-label-color-disabled-rgb), 0.23);\n\n  --cros-textfield-input-color-disabled-rgb: 255, 255, 255;\n  --cros-textfield-input-color-disabled: rgba(var(--cros-textfield-input-color-disabled-rgb), 0.33);\n\n  --cros-tooltip-background-color-rgb: 255, 255, 255;\n  --cros-tooltip-background-color: rgba(var(--cros-tooltip-background-color-rgb), 0.8);\n\n  --cros-tooltip-label-color-rgb: var(--google-grey-900-rgb);\n  --cros-tooltip-label-color: var(--google-grey-900);\n\n  --cros-dropped-elevation-bg-color-1-rgb: 26, 26, 29;\n  --cros-dropped-elevation-bg-color-1: rgb(var(--cros-dropped-elevation-bg-color-1-rgb));\n\n  --cros-dropped-elevation-bg-color-2-rgb: 0, 0, 0;\n  --cros-dropped-elevation-bg-color-2: rgb(var(--cros-dropped-elevation-bg-color-2-rgb));\n\n  --cros-prominent-ripple-color-rgb: var(--google-blue-300-rgb);\n  --cros-prominent-ripple-color: var(--google-blue-300);\n\n  --cros-ripple-color-rgb: 255, 255, 255;\n  --cros-ripple-color: rgb(var(--cros-ripple-color-rgb));\n\n  --cros-textfield-suffixes-color-rgb: var(--google-grey-500-rgb);\n  --cros-textfield-suffixes-color: var(--google-grey-500);\n\n  --cros-textfield-hint-text-color-rgb: var(--google-grey-500-rgb);\n  --cros-textfield-hint-text-color: var(--google-grey-500);\n\n  --cros-textfield-underline-color-focus-rgb: var(--google-blue-300-rgb);\n  --cros-textfield-underline-color-focus: var(--google-blue-300);\n\n  --cros-textfield-cursor-color-focus-rgb: var(--google-blue-300-rgb);\n  --cros-textfield-cursor-color-focus: var(--google-blue-300);\n\n  --cros-textfield-underline-color-error-rgb: var(--google-red-300-rgb);\n  --cros-textfield-underline-color-error: var(--google-red-300);\n\n  --cros-textfield-cursor-color-error-rgb: var(--google-red-300-rgb);\n  --cros-textfield-cursor-color-error: var(--google-red-300);\n\n  --cros-textfield-hint-text-color-error-rgb: var(--google-red-300-rgb);\n  --cros-textfield-hint-text-color-error: var(--google-red-300);\n\n  --ea-slider-color-active-rgb: var(--google-blue-300-rgb);\n  --ea-slider-color-active: var(--google-blue-300);\n\n  --ea-slider-color-inactive-rgb: var(--google-grey-200-rgb);\n  --ea-slider-color-inactive: var(--google-grey-200);\n\n  --cros-button-primary-ripple-opacity: 0.16;\n\n  --cros-button-secondary-ripple-opacity: 0.16;\n\n  --cros-ripple-opacity: 0.08;\n}\n\n      }\n    ");
        pk && ((document.adoptedStyleSheets || []).includes(pk) || (pk = null));
        ok && (document.head.contains(ok) || (ok = null));
        if (ok || pk) throw Error("Colors have already been installed in this context, use uninstallColors to remove the previous colors before appending new ones.");
        if (document.adoptedStyleSheets) {
            var b = new CSSStyleSheet;
            b.replaceSync(Ia(a));
            document.adoptedStyleSheets = [...document.adoptedStyleSheets, b];
            pk = b
        } else {
            a = Ia(a);
            a = 0 === a.length ? ib : new hb(a, gb);
            b = sa || (sa = new hc);
            var c = b.g;
            if (Nb && c.createStyleSheet) b =
                c.createStyleSheet(), nk(b, a), a = b;
            else {
                c = ic(b, "HEAD")[0];
                if (!c) {
                    var d = ic(b, "BODY")[0];
                    c = b.Wc("HEAD");
                    d.parentNode.insertBefore(c, d)
                }
                d = b.Wc("STYLE");
                var e = Zb('style[nonce],link[rel="stylesheet"][nonce]', void 0);
                e && d.setAttribute("nonce", e);
                nk(d, a);
                b.appendChild(c, d);
                a = d
            }
            ok = a
        }
    };
    (function() {
        return v(this, function*() {
            "true" !== window.localStorage.getItem("has-launched-before") && (window.resizeTo(350, 450), window.localStorage.setItem("has-launched-before", "true"));
            let a = !1;
            window.addEventListener("load", () => a = !0);
            yield Ac();
            var b = Kc(lc).replace(/_.*/, c => c.toUpperCase());
            b = yield(yield fetch(`locales/${b}/messages.json`)).json();
            ra(b);
            qk();
            yield Rc();
            mk("ChromeOS_Calculator", "chrome-apps-calculator_20211007_RC00_prod", {
                Qe: !0
            });
            "#licenses" === location.hash ? document.body.append(new Kg) :
                (document.body.prepend(new li), document.addEventListener("trigger-feedback", () => void kc().sf()), yield Mc(Ra(Ia(new Fa(Ga, "foam.js")))), a && DOM.init(X))
        })
    })();
    /*

     Copyright 2019 Google Inc.

     Permission is hereby granted, free of charge, to any person obtaining a copy
     of this software and associated documentation files (the "Software"), to deal
     in the Software without restriction, including without limitation the rights
     to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     copies of the Software, and to permit persons to whom the Software is
     furnished to do so, subject to the following conditions:

     The above copyright notice and this permission notice shall be included in
     all copies or substantial portions of the Software.

     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     THE SOFTWARE.
    */
}).call(this);
