(function() {
    var m, aa = this;

    function ba(a) {
        return void 0 !== a
    }

    function ca(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }

    function da(a) {
        return "array" == ca(a)
    }

    function ea(a) {
        var b = ca(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function ha(a) {
        return "string" == typeof a
    }

    function ia(a) {
        return "number" == typeof a
    }

    function ja(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function ka(a) {
        return a[la] || (a[la] = ++ma)
    }
    var la = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ma = 0;

    function na(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function oa(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function pa(a, b, c) {
        pa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? na : oa;
        return pa.apply(null, arguments)
    }

    function qa(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }
    var ra = Date.now || function() {
        return +new Date
    };

    function t(a, b) {
        var c = a.split("."),
            d = aa;
        c[0] in d || !d.execScript || d.execScript("var " + c[0]);
        for (var e; c.length && (e = c.shift());) !c.length && ba(b) ? d[e] = b : d[e] ? d = d[e] : d = d[e] = {}
    }

    function sa(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.hb = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Op = function(a, c, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[c].apply(a, g)
        }
    };

    function v(a, b) {
        a.prototype = Object.create(b.prototype);
        a.prototype.constructor = a
    }

    function ta() {}

    function x(a) {
        return a.gn || (a.gn = ++ua)
    }
    var ua = 0;

    function va(a) {
        this.message = "Assertion failed. See /doc/errors/#" + a + " for details.";
        this.code = a;
        this.name = "AssertionError"
    }
    v(va, Error);

    function wa(a, b) {
        if (!a) throw new va(b);
    };

    function xa(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }
    var ya = function() {
        var a;
        "cosh" in Math ? a = Math.cosh : a = function(a) {
            a = Math.exp(a);
            return (a + 1 / a) / 2
        };
        return a
    }();

    function za(a) {
        return a * Math.PI / 180
    }

    function Aa(a, b) {
        var c = a % b;
        return 0 > c * b ? c + b : c
    };

    function Ba(a) {
        return function(b) {
            if (b) return [xa(b[0], a[0], a[2]), xa(b[1], a[1], a[3])]
        }
    }

    function Ca(a) {
        return a
    };

    function Da(a, b, c) {
        this.center = a;
        this.resolution = b;
        this.rotation = c
    };
    var Ea = "function" === typeof Object.assign ? Object.assign : function(a, b) {
        if (!a || !a) throw new TypeError("Cannot convert undefined or null to object");
        for (var c = Object(a), d = 1, e = arguments.length; d < e; ++d) {
            var f = arguments[d];
            if (void 0 !== f && null !== f)
                for (var g in f) f.hasOwnProperty(g) && (c[g] = f[g])
        }
        return c
    };

    function Fa(a) {
        for (var b in a) delete a[b]
    }

    function Ga(a) {
        var b = [],
            c;
        for (c in a) b.push(a[c]);
        return b
    }

    function Ha(a) {
        for (var b in a) return !1;
        return !b
    };

    function Ia(a) {
        function b(b) {
            var d = a.listener,
                e = a.Kg || a.target;
            a.dc && Ja(a);
            return d.call(e, b)
        }
        return a.Lg = b
    }

    function Ka(a, b, c, d) {
        for (var e, f = 0, g = a.length; f < g; ++f)
            if (e = a[f], e.listener === b && e.Kg === c) return d && (e.deleteIndex = f), e
    }

    function La(a, b) {
        var c = a.jb;
        return c ? c[b] : void 0
    }

    function Ma(a) {
        var b = a.jb;
        b || (b = a.jb = {});
        return b
    }

    function Na(a, b) {
        var c = La(a, b);
        if (c) {
            for (var d = 0, e = c.length; d < e; ++d) a.removeEventListener(b, c[d].Lg), Fa(c[d]);
            c.length = 0;
            if (c = a.jb) delete c[b], 0 === Object.keys(c).length && delete a.jb
        }
    }

    function A(a, b, c, d, e) {
        var f = Ma(a),
            g = f[b];
        g || (g = f[b] = []);
        (f = Ka(g, c, d, !1)) ? e || (f.dc = !1): (f = {
            Kg: d,
            dc: !!e,
            listener: c,
            target: a,
            type: b
        }, a.addEventListener(b, Ia(f)), g.push(f));
        return f
    }

    function Oa(a, b, c, d) {
        (a = La(a, b)) && (c = Ka(a, c, d, !0)) && Ja(c)
    }

    function Ja(a) {
        if (a && a.target) {
            a.target.removeEventListener(a.type, a.Lg);
            var b = La(a.target, a.type);
            if (b) {
                var c = "deleteIndex" in a ? a.deleteIndex : b.indexOf(a); - 1 !== c && b.splice(c, 1);
                0 === b.length && Na(a.target, a.type)
            }
            Fa(a)
        }
    };

    function Pa() {}
    Pa.prototype.Pc = !1;
    Pa.prototype.Ma = function() {
        this.Pc || (this.Pc = !0, this.qa())
    };
    Pa.prototype.qa = ta;

    function Qa(a) {
        this.type = a;
        this.target = null
    }
    Qa.prototype.preventDefault = Qa.prototype.stopPropagation = function() {
        this.In = !0
    };

    function Ra(a) {
        a.stopPropagation()
    };

    function Sa() {
        this.sa = {};
        this.ga = {};
        this.O = {}
    }
    v(Sa, Pa);
    Sa.prototype.addEventListener = function(a, b) {
        var c = this.O[a];
        c || (c = this.O[a] = []); - 1 === c.indexOf(b) && c.push(b)
    };

    function B(a, b) {
        var c = "string" === typeof b ? new Qa(b) : b,
            d = c.type;
        c.target = a;
        var e = a.O[d],
            f;
        if (e) {
            d in a.ga || (a.ga[d] = 0, a.sa[d] = 0);
            ++a.ga[d];
            for (var g = 0, h = e.length; g < h; ++g)
                if (!1 === e[g].call(a, c) || c.In) {
                    f = !1;
                    break
                }--a.ga[d];
            if (0 === a.ga[d]) {
                c = a.sa[d];
                for (delete a.sa[d]; c--;) a.removeEventListener(d, ta);
                delete a.ga[d]
            }
            return f
        }
    }
    Sa.prototype.qa = function() {
        var a = Ma(this),
            b;
        for (b in a) Na(this, b)
    };

    function Ta(a, b) {
        return b ? b in a.O : 0 < Object.keys(a.O).length
    }
    Sa.prototype.removeEventListener = function(a, b) {
        var c = this.O[a];
        if (c) {
            var d = c.indexOf(b);
            console.assert(-1 != d, "listener not found");
            a in this.sa ? (c[d] = ta, ++this.sa[a]) : (c.splice(d, 1), 0 === c.length && delete this.O[a])
        }
    };

    function Ua() {
        Sa.call(this);
        this.j = 0
    }
    v(Ua, Sa);
    Ua.prototype.b = function() {
        ++this.j;
        B(this, "change")
    };
    Ua.prototype.on = function(a, b, c) {
        if (Array.isArray(a)) {
            for (var d = a.length, e = Array(d), f = 0; f < d; ++f) e[f] = A(this, a[f], b, c);
            return e
        }
        return A(this, a, b, c)
    };

    function Va(a, b, c) {
        if (Array.isArray(b))
            for (var d = b.length, e = Array(d), f = 0; f < d; ++f) e[f] = A(a, b[f], c, void 0, !0);
        else A(a, b, c, void 0, !0)
    };

    function Wa(a, b, c) {
        Qa.call(this, a);
        this.key = b;
        this.oldValue = c
    }
    v(Wa, Qa);

    function Xa(a) {
        Ua.call(this);
        x(this);
        this.V = {};
        void 0 !== a && this.Ga(a)
    }
    v(Xa, Ua);
    var Ya = {};

    function Za(a) {
        return Ya.hasOwnProperty(a) ? Ya[a] : Ya[a] = "change:" + a
    }
    m = Xa.prototype;
    m.get = function(a) {
        var b;
        this.V.hasOwnProperty(a) && (b = this.V[a]);
        return b
    };
    m.cb = function() {
        return Object.keys(this.V)
    };

    function ab(a) {
        return Ea({}, a.V)
    }
    m.notify = function(a, b) {
        var c;
        c = Za(a);
        B(this, new Wa(c, a, b));
        B(this, new Wa("propertychange", a, b))
    };
    m.set = function(a, b, c) {
        c ? this.V[a] = b : (c = this.V[a], this.V[a] = b, c !== b && this.notify(a, c))
    };
    m.Ga = function(a, b) {
        for (var c in a) this.set(c, a[c], b)
    };

    function bb(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function cb(a, b) {
        return 0 <= a.indexOf(b)
    }

    function db(a, b, c) {
        var d = a.length;
        if (a[0] <= b) return 0;
        if (!(b <= a[d - 1]))
            if (0 < c)
                for (c = 1; c < d; ++c) {
                    if (a[c] < b) return c - 1
                } else if (0 > c)
                    for (c = 1; c < d; ++c) {
                        if (a[c] <= b) return c
                    } else
                        for (c = 1; c < d; ++c) {
                            if (a[c] == b) return c;
                            if (a[c] < b) return a[c - 1] - b < b - a[c] ? c - 1 : c
                        }
        return d - 1
    }

    function eb(a, b) {
        var c, d = Array.isArray(b) ? b : [b],
            e = d.length;
        for (c = 0; c < e; c++) a[a.length] = d[c]
    }

    function fb(a, b) {
        var c = a.indexOf(b),
            d = -1 < c;
        d && a.splice(c, 1);
        return d
    }

    function gb(a, b) {
        for (var c = a.length >>> 0, d, e = 0; e < c; e++)
            if (d = a[e], b(d, e, a)) return d;
        return null
    }

    function hb(a, b) {
        var c = a.length;
        if (c !== b.length) return !1;
        for (var d = 0; d < c; d++)
            if (a[d] !== b[d]) return !1;
        return !0
    }

    function ib(a) {
        var b = jb,
            c = a.length,
            d = Array(a.length),
            e;
        for (e = 0; e < c; e++) d[e] = {
            index: e,
            value: a[e]
        };
        d.sort(function(a, c) {
            return b(a.value, c.value) || a.index - c.index
        });
        for (e = 0; e < a.length; e++) a[e] = d[e].value
    }

    function kb(a, b) {
        var c;
        return a.every(function(d, e) {
            c = e;
            return !b(d, e, a)
        }) ? -1 : c
    }

    function lb(a, b) {
        var c = b || bb;
        return a.every(function(b, e) {
            if (0 === e) return !0;
            var f = c(a[e - 1], b);
            return !(0 < f || 0 === f)
        })
    };

    function mb(a) {
        return function(b, c, d) {
            if (void 0 !== b) return b = db(a, b, d), b = xa(b + c, 0, a.length - 1), c = Math.floor(b), b != c && c < a.length - 1 ? a[c] / Math.pow(a[c] / a[c + 1], b - c) : a[c]
        }
    }

    function nb(a, b, c) {
        return function(d, e, f) {
            if (void 0 !== d) return d = Math.max(Math.floor(Math.log(b / d) / Math.log(a) + (-f / 2 + .5)) + e, 0), void 0 !== c && (d = Math.min(d, c)), b / Math.pow(a, d)
        }
    };

    function ob(a) {
        if (void 0 !== a) return 0
    }

    function pb(a, b) {
        if (void 0 !== a) return a + b
    }

    function qb(a) {
        var b = 2 * Math.PI / a;
        return function(a, d) {
            if (void 0 !== a) return a = Math.floor((a + d) / b + .5) * b
        }
    }

    function rb() {
        var a = za(5);
        return function(b, c) {
            if (void 0 !== b) return Math.abs(b + c) <= a ? 0 : b + c
        }
    };

    function sb(a, b, c) {
        a = void 0 !== c ? a.toFixed(c) : "" + a;
        c = a.indexOf(".");
        c = -1 === c ? a.length : c;
        return c > b ? a : Array(1 + b - c).join("0") + a
    };

    function tb(a, b) {
        a[0] += b[0];
        a[1] += b[1]
    }

    function ub(a, b) {
        var c = a[0],
            d = a[1],
            e = b[0],
            f = b[1],
            g = e[0],
            e = e[1],
            h = f[0],
            f = f[1],
            k = h - g,
            l = f - e,
            c = 0 === k && 0 === l ? 0 : (k * (c - g) + l * (d - e)) / (k * k + l * l || 0);
        0 >= c || (1 <= c ? (g = h, e = f) : (g += c * k, e += c * l));
        return [g, e]
    }

    function vb(a, b) {
        var c = Aa(a + 180, 360) - 180,
            d = Math.abs(3600 * c);
        return Math.floor(d / 3600) + "\u00b0 " + sb(Math.floor(d / 60 % 60), 2) + "\u2032 " + sb(d % 60, 2, 0) + "\u2033 " + b.charAt(0 > c ? 1 : 0)
    }

    function wb(a, b) {
        for (var c = !0, d = a.length - 1; 0 <= d; --d)
            if (a[d] != b[d]) {
                c = !1;
                break
            }
        return c
    }

    function yb(a, b) {
        var c = Math.cos(b),
            d = Math.sin(b),
            e = a[1] * c + a[0] * d;
        a[0] = a[0] * c - a[1] * d;
        a[1] = e
    }

    function zb(a, b) {
        var c = a[0] - b[0],
            d = a[1] - b[1];
        return c * c + d * d
    }

    function Ab(a) {
        return a ? vb(a[1], "NS") + " " + vb(a[0], "EW") : ""
    };

    function Bb(a) {
        for (var b = Cb(), c = 0, d = a.length; c < d; ++c) Db(b, a[c]);
        return b
    }

    function Eb(a, b, c) {
        return c ? (c[0] = a[0] - b, c[1] = a[1] - b, c[2] = a[2] + b, c[3] = a[3] + b, c) : [a[0] - b, a[1] - b, a[2] + b, a[3] + b]
    }

    function Fb(a, b) {
        return b ? (b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b) : a.slice()
    }

    function Gb(a, b) {
        return a[0] <= b[0] && b[2] <= a[2] && a[1] <= b[1] && b[3] <= a[3]
    }

    function Hb(a, b, c) {
        return a[0] <= b && b <= a[2] && a[1] <= c && c <= a[3]
    }

    function Ib(a, b) {
        var c = a[1],
            d = a[2],
            e = a[3],
            f = b[0],
            g = b[1],
            h = 0;
        f < a[0] ? h |= 16 : f > d && (h |= 4);
        g < c ? h |= 8 : g > e && (h |= 2);
        0 === h && (h = 1);
        return h
    }

    function Cb() {
        return [Infinity, Infinity, -Infinity, -Infinity]
    }

    function Jb(a, b, c, d, e) {
        return e ? (e[0] = a, e[1] = b, e[2] = c, e[3] = d, e) : [a, b, c, d]
    }

    function Kb(a) {
        return Jb(Infinity, Infinity, -Infinity, -Infinity, a)
    }

    function Lb(a, b) {
        var c = a[0],
            d = a[1];
        return Jb(c, d, c, d, b)
    }

    function Mb(a, b) {
        return a[0] == b[0] && a[2] == b[2] && a[1] == b[1] && a[3] == b[3]
    }

    function Nb(a, b) {
        b[0] < a[0] && (a[0] = b[0]);
        b[2] > a[2] && (a[2] = b[2]);
        b[1] < a[1] && (a[1] = b[1]);
        b[3] > a[3] && (a[3] = b[3]);
        return a
    }

    function Db(a, b) {
        b[0] < a[0] && (a[0] = b[0]);
        b[0] > a[2] && (a[2] = b[0]);
        b[1] < a[1] && (a[1] = b[1]);
        b[1] > a[3] && (a[3] = b[1])
    }

    function Ob(a, b, c, d, e) {
        for (; c < d; c += e) {
            var f = a,
                g = b[c],
                h = b[c + 1];
            f[0] = Math.min(f[0], g);
            f[1] = Math.min(f[1], h);
            f[2] = Math.max(f[2], g);
            f[3] = Math.max(f[3], h)
        }
        return a
    }

    function Pb(a, b, c) {
        var d;
        return (d = b.call(c, Qb(a))) || (d = b.call(c, [a[2], a[1]])) || (d = b.call(c, [a[2], a[3]])) ? d : (d = b.call(c, Rb(a))) ? d : !1
    }

    function Sb(a) {
        var b = 0;
        Tb(a) || (b = Ub(a) * Vb(a));
        return b
    }

    function Qb(a) {
        return [a[0], a[1]]
    }

    function Wb(a) {
        return [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2]
    }

    function Xb(a, b, c, d, e) {
        var f = b * d[0] / 2;
        d = b * d[1] / 2;
        b = Math.cos(c);
        var g = Math.sin(c);
        c = f * b;
        f *= g;
        b *= d;
        var h = d * g,
            k = a[0],
            l = a[1];
        a = k - c + h;
        d = k - c - h;
        g = k + c - h;
        c = k + c + h;
        var h = l - f - b,
            k = l - f + b,
            n = l + f + b,
            f = l + f - b;
        return Jb(Math.min(a, d, g, c), Math.min(h, k, n, f), Math.max(a, d, g, c), Math.max(h, k, n, f), e)
    }

    function Vb(a) {
        return a[3] - a[1]
    }

    function Yb(a, b) {
        var c = Cb();
        Zb(a, b) && (c[0] = a[0] > b[0] ? a[0] : b[0], c[1] = a[1] > b[1] ? a[1] : b[1], c[2] = a[2] < b[2] ? a[2] : b[2], c[3] = a[3] < b[3] ? a[3] : b[3]);
        return c
    }

    function Rb(a) {
        return [a[0], a[3]]
    }

    function Ub(a) {
        return a[2] - a[0]
    }

    function Zb(a, b) {
        return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1]
    }

    function Tb(a) {
        return a[2] < a[0] || a[3] < a[1]
    }

    function $b(a, b) {
        var c = [a[0], a[1], a[0], a[3], a[2], a[1], a[2], a[3]];
        b(c, c, 2);
        var d = [c[0], c[2], c[4], c[6]],
            e = [c[1], c[3], c[5], c[7]];
        console.assert(0 < d.length, "xs length should be larger than 0");
        console.assert(0 < e.length, "ys length should be larger than 0");
        var c = Math.min.apply(null, d),
            f = Math.min.apply(null, e),
            d = Math.max.apply(null, d),
            e = Math.max.apply(null, e);
        return Jb(c, f, d, e, void 0)
    };

    function ac() {
        return !0
    }

    function bc() {
        return !1
    };
    /*

     Latitude/longitude spherical geodesy formulae taken from
     http://www.movable-type.co.uk/scripts/latlong.html
     Licensed under CC-BY-3.0.
    */
    function cc(a) {
        this.radius = a
    }

    function dc(a, b, c) {
        var d = za(b[1]),
            e = za(c[1]),
            f = (e - d) / 2;
        b = za(c[0] - b[0]) / 2;
        d = Math.sin(f) * Math.sin(f) + Math.sin(b) * Math.sin(b) * Math.cos(d) * Math.cos(e);
        return 2 * a.radius * Math.atan2(Math.sqrt(d), Math.sqrt(1 - d))
    }
    cc.prototype.offset = function(a, b, c) {
        var d = za(a[1]);
        b /= this.radius;
        var e = Math.asin(Math.sin(d) * Math.cos(b) + Math.cos(d) * Math.sin(b) * Math.cos(c));
        return [180 * (za(a[0]) + Math.atan2(Math.sin(c) * Math.sin(b) * Math.cos(d), Math.cos(b) - Math.sin(d) * Math.sin(e))) / Math.PI, 180 * e / Math.PI]
    };
    var ec = new cc(6370997);
    var fc = {};
    fc.degrees = 2 * Math.PI * ec.radius / 360;
    fc.ft = .3048;
    fc.m = 1;
    fc["us-ft"] = 1200 / 3937;

    function gc(a) {
        this.b = a.code;
        this.i = a.units;
        this.o = void 0 !== a.extent ? a.extent : null;
        this.c = void 0 !== a.Qe ? a.Qe : "enu";
        this.j = void 0 !== a.global ? a.global : !1;
        this.f = !(!this.j || !this.o);
        this.D = void 0 !== a.gc ? a.gc : this.C;
        this.s = null;
        this.v = a.Ah;
        var b = hc,
            c = a.code;
        console.assert(void 0 !== c, 'Option "code" is required for constructing instance');
        var d = ic || window.proj4;
        if ("function" == typeof d && void 0 === b[c]) {
            var e = d.defs(c);
            if (void 0 !== e) {
                void 0 !== e.axis && void 0 === a.Qe && (this.c = e.axis);
                void 0 === a.Ah && (this.v = e.to_meter);
                void 0 === a.units && (this.i = e.units);
                var f, g;
                for (f in b)
                    if (a = d.defs(f), void 0 !== a)
                        if (b = jc(f), a === e) kc([b, this]);
                        else {
                            g = d(f, c);
                            a = g.forward;
                            g = g.inverse;
                            var b = jc(b),
                                h = jc(this);
                            lc(b, h, mc(a));
                            lc(h, b, mc(g))
                        }
            }
        }
    }
    gc.prototype.K = function() {
        return this.o
    };
    gc.prototype.g = function() {
        return this.i
    };

    function nc(a) {
        return a.v || fc[a.i]
    }

    function oc(a, b) {
        a.o = b;
        a.f = !(!a.j || !b)
    }
    gc.prototype.C = function(a, b) {
        if ("degrees" == this.g()) return a;
        var c = pc(this, jc("EPSG:4326")),
            d = [b[0] - a / 2, b[1], b[0] + a / 2, b[1], b[0], b[1] - a / 2, b[0], b[1] + a / 2],
            d = c(d, d, 2),
            c = dc(ec, d.slice(0, 2), d.slice(2, 4)),
            d = dc(ec, d.slice(4, 6), d.slice(6, 8)),
            d = (c + d) / 2,
            c = nc(this);
        void 0 !== c && (d /= c);
        return d
    };
    gc.prototype.gc = function(a, b) {
        return this.D(a, b)
    };
    var hc = {},
        qc = {},
        ic = null;

    function kc(a) {
        rc(a);
        a.forEach(function(b) {
            a.forEach(function(a) {
                b !== a && lc(b, a, sc)
            })
        })
    }

    function tc(a) {
        hc[a.b] = a;
        lc(a, a, sc)
    }

    function rc(a) {
        var b = [];
        a.forEach(function(a) {
            b.push(tc(a))
        })
    }

    function uc(a) {
        return a ? "string" === typeof a ? jc(a) : a : jc("EPSG:3857")
    }

    function lc(a, b, c) {
        a = a.b;
        b = b.b;
        a in qc || (qc[a] = {});
        qc[a][b] = c
    }

    function mc(a) {
        return function(b, c, d) {
            var e = b.length;
            d = void 0 !== d ? d : 2;
            c = void 0 !== c ? c : Array(e);
            var f, g;
            for (g = 0; g < e; g += d)
                for (f = a([b[g], b[g + 1]]), c[g] = f[0], c[g + 1] = f[1], f = d - 1; 2 <= f; --f) c[g + f] = b[g + f];
            return c
        }
    }

    function jc(a) {
        var b;
        if (a instanceof gc) b = a;
        else if ("string" === typeof a) {
            b = hc[a];
            var c = ic || window.proj4;
            void 0 === b && "function" == typeof c && void 0 !== c.defs(a) && (b = new gc({
                code: a
            }), tc(b))
        }
        return b || null
    }

    function vc(a, b) {
        if (a === b) return !0;
        var c = a.g() === b.g();
        return a.b === b.b ? c : pc(a, b) === sc && c
    }

    function wc(a, b) {
        var c = jc(a),
            d = jc(b);
        return pc(c, d)
    }

    function pc(a, b) {
        var c = a.b,
            d = b.b,
            e;
        c in qc && d in qc[c] && (e = qc[c][d]);
        void 0 === e && (console.assert(void 0 !== e, "transform should be defined"), e = xc);
        return e
    }

    function xc(a, b) {
        if (void 0 !== b && a !== b) {
            console.assert(!1, "This should not be used internally.");
            for (var c = 0, d = a.length; c < d; ++c) b[c] = a[c];
            a = b
        }
        return a
    }

    function sc(a, b) {
        var c;
        if (void 0 !== b) {
            c = 0;
            for (var d = a.length; c < d; ++c) b[c] = a[c];
            c = b
        } else c = a.slice();
        return c
    }

    function yc(a, b, c) {
        return wc(b, c)(a, void 0, a.length)
    }

    function zc(a, b, c) {
        b = wc(b, c);
        return $b(a, b)
    };

    function Ac() {
        Xa.call(this);
        this.v = Cb();
        this.D = -1;
        this.g = {};
        this.s = this.o = 0
    }
    v(Ac, Xa);
    Ac.prototype.N = function(a) {
        return this.oc(a[0], a[1])
    };
    Ac.prototype.oc = bc;
    Ac.prototype.K = function(a) {
        this.D != this.j && (this.v = this.Pd(this.v), this.D = this.j);
        var b = this.v;
        a ? (a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[3]) : a = b;
        return a
    };
    Ac.prototype.transform = function(a, b) {
        console.assert("tile-pixels" !== jc(a).g() && "tile-pixels" !== jc(b).g(), "cannot transform geometries with TILE_PIXELS units");
        this.Qc(wc(a, b));
        return this
    };

    function Bc(a, b, c, d, e, f) {
        for (var g = f ? f : [], h = 0; b < c; b += d) {
            var k = a[b],
                l = a[b + 1];
            g[h++] = e[0] * k + e[2] * l + e[4];
            g[h++] = e[1] * k + e[3] * l + e[5]
        }
        f && g.length != h && (g.length = h);
        return g
    };

    function Cc() {
        Ac.call(this);
        this.layout = "XY";
        this.J = 2;
        this.B = null
    }
    v(Cc, Ac);

    function Dc(a) {
        var b;
        "XY" == a ? b = 2 : "XYZ" == a || "XYM" == a ? b = 3 : "XYZM" == a && (b = 4);
        console.assert(b, "unsupported layout: " + a);
        return b
    }
    m = Cc.prototype;
    m.oc = bc;
    m.Pd = function(a) {
        var b = this.B,
            c = this.B.length,
            d = this.J;
        a = Kb(a);
        return Ob(a, b, 0, c, d)
    };

    function Ec(a) {
        return a.B.slice(a.B.length - a.J)
    }
    m.xf = function(a) {
        this.s != this.j && (Fa(this.g), this.o = 0, this.s = this.j);
        if (0 > a || 0 !== this.o && a <= this.o) return this;
        var b = a.toString();
        if (this.g.hasOwnProperty(b)) return this.g[b];
        var c = this.Dc(a);
        if (c.B.length < this.B.length) return this.g[b] = c;
        this.o = a;
        return this
    };
    m.Dc = function() {
        return this
    };

    function Fc(a, b, c) {
        a.J = Dc(b);
        a.layout = b;
        a.B = c
    }

    function Gc(a, b, c, d) {
        if (b) c = Dc(b);
        else {
            for (b = 0; b < d; ++b) {
                if (0 === c.length) {
                    a.layout = "XY";
                    a.J = 2;
                    return
                }
                c = c[0]
            }
            c = c.length;
            var e;
            2 == c ? e = "XY" : 3 == c ? e = "XYZ" : 4 == c && (e = "XYZM");
            console.assert(e, "unsupported stride: " + c);
            b = e
        }
        a.layout = b;
        a.J = c
    }
    m.Qc = function(a) {
        this.B && (a(this.B, this.B, this.J), this.b())
    };
    m.rotate = function(a, b) {
        var c = this.B;
        if (c) {
            for (var d = c.length, e = this.J, f = c ? c : [], g = Math.cos(a), h = Math.sin(a), k = b[0], l = b[1], n = 0, q = 0; q < d; q += e) {
                var p = c[q] - k,
                    r = c[q + 1] - l;
                f[n++] = k + p * g - r * h;
                f[n++] = l + p * h + r * g;
                for (p = q + 2; p < q + e; ++p) f[n++] = c[p]
            }
            c && f.length != n && (f.length = n);
            this.b()
        }
    };
    m.scale = function(a, b, c) {
        var d = b;
        void 0 === d && (d = a);
        var e = c;
        e || (e = Wb(this.K()));
        if (c = this.B) {
            b = c.length;
            for (var f = this.J, g = c ? c : [], h = e[0], e = e[1], k = 0, l = 0; l < b; l += f) {
                var n = c[l] - h,
                    q = c[l + 1] - e;
                g[k++] = h + a * n;
                g[k++] = e + d * q;
                for (n = l + 2; n < l + f; ++n) g[k++] = c[n]
            }
            c && g.length != k && (g.length = k);
            this.b()
        }
    };
    m.translate = function(a, b) {
        var c = this.B;
        if (c) {
            var d = c.length,
                e = this.J,
                f = c ? c : [],
                g = 0,
                h, k;
            for (h = 0; h < d; h += e)
                for (f[g++] = c[h] + a, f[g++] = c[h + 1] + b, k = h + 2; k < h + e; ++k) f[g++] = c[k];
            c && f.length != g && (f.length = g);
            this.b()
        }
    };

    function Hc(a, b, c) {
        var d = 0;
        console.assert(b.length == c, "length of the coordinate array should match stride");
        var e;
        c = 0;
        for (e = b.length; c < e; ++c) a[d++] = b[c];
        return d
    }

    function Ic(a, b, c, d) {
        var e, f;
        e = 0;
        for (f = c.length; e < f; ++e) {
            var g = c[e];
            console.assert(g.length == d, "length of coordinate array should match stride");
            var h;
            for (h = 0; h < d; ++h) a[b++] = g[h]
        }
        return b
    }

    function Jc(a, b, c, d, e) {
        e = e ? e : [];
        var f = 0,
            g, h;
        g = 0;
        for (h = c.length; g < h; ++g) b = Ic(a, b, c[g], d), e[f++] = b;
        e.length = f;
        return e
    };

    function Kc(a, b, c, d, e) {
        e = void 0 !== e ? e : [];
        for (var f = 0; b < c; b += d) e[f++] = a.slice(b, b + d);
        e.length = f;
        return e
    }

    function Lc(a, b, c, d, e) {
        e = void 0 !== e ? e : [];
        var f = 0,
            g, h;
        g = 0;
        for (h = c.length; g < h; ++g) {
            var k = c[g];
            e[f++] = Kc(a, b, k, d, e[f]);
            b = k
        }
        e.length = f;
        return e
    };

    function Mc(a, b, c, d, e, f, g) {
        var h = (c - b) / d;
        if (3 > h) {
            for (; b < c; b += d) f[g++] = a[b], f[g++] = a[b + 1];
            return g
        }
        var k = Array(h);
        k[0] = 1;
        k[h - 1] = 1;
        c = [b, c - d];
        for (var l = 0, n; 0 < c.length;) {
            var q = c.pop(),
                p = c.pop(),
                r = 0,
                u = a[p],
                z = a[p + 1],
                w = a[q],
                H = a[q + 1];
            for (n = p + d; n < q; n += d) {
                var F, I = a[n];
                F = a[n + 1];
                var N = u,
                    fa = z,
                    U = w - N,
                    y = H - fa;
                if (0 !== U || 0 !== y) {
                    var T = ((I - N) * U + (F - fa) * y) / (U * U + y * y);
                    1 < T ? (N = w, fa = H) : 0 < T && (N += U * T, fa += y * T)
                }
                I = N - I;
                F = fa - F;
                F = I * I + F * F;
                F > r && (l = n, r = F)
            }
            r > e && (k[(l - b) / d] = 1, p + d < l && c.push(p, l), l + d < q && c.push(l, q))
        }
        for (n = 0; n < h; ++n) k[n] &&
            (f[g++] = a[b + n * d], f[g++] = a[b + n * d + 1]);
        return g
    }

    function Nc(a, b, c, d, e, f, g, h) {
        var k, l;
        k = 0;
        for (l = c.length; k < l; ++k) {
            var n = c[k];
            a: {
                var q = a,
                    p = n,
                    r = d,
                    u = e,
                    z = f;
                if (b != p) {
                    var w = u * Math.round(q[b] / u),
                        H = u * Math.round(q[b + 1] / u);
                    b += r;
                    z[g++] = w;
                    z[g++] = H;
                    var F, I;
                    do
                        if (F = u * Math.round(q[b] / u), I = u * Math.round(q[b + 1] / u), b += r, b == p) {
                            z[g++] = F;
                            z[g++] = I;
                            break a
                        }
                    while (F == w && I == H);
                    for (; b < p;) {
                        var N, fa;
                        N = u * Math.round(q[b] / u);
                        fa = u * Math.round(q[b + 1] / u);
                        b += r;
                        if (N != F || fa != I) {
                            var U = F - w,
                                y = I - H,
                                T = N - w,
                                P = fa - H;
                            U * P == y * T && (0 > U && T < U || U == T || 0 < U && T > U) && (0 > y && P < y || y == P || 0 < y && P > y) || (z[g++] = F, z[g++] =
                                I, w = F, H = I);
                            F = N;
                            I = fa
                        }
                    }
                    z[g++] = F;
                    z[g++] = I
                }
            }
            h.push(g);
            b = n
        }
        return g
    };

    function Oc(a, b) {
        Cc.call(this);
        this.ba(a, b)
    }
    v(Oc, Cc);
    m = Oc.prototype;
    m.clone = function() {
        var a = new Oc(null);
        Pc(a, this.layout, this.B.slice());
        return a
    };
    m.M = function() {
        return Kc(this.B, 0, this.B.length, this.J)
    };
    m.Dc = function(a) {
        var b = [];
        b.length = Mc(this.B, 0, this.B.length, this.J, a, b, 0);
        a = new Oc(null);
        Pc(a, "XY", b);
        return a
    };
    m.T = function() {
        return "LinearRing"
    };
    m.ba = function(a, b) {
        a ? (Gc(this, b, a, 1), this.B || (this.B = []), this.B.length = Ic(this.B, 0, a, this.J), this.b()) : Pc(this, "XY", null)
    };

    function Pc(a, b, c) {
        Fc(a, b, c);
        a.b()
    };

    function Qc(a, b) {
        Cc.call(this);
        this.ba(a, b)
    }
    v(Qc, Cc);
    m = Qc.prototype;
    m.clone = function() {
        var a = new Qc(null);
        a.U(this.layout, this.B.slice());
        return a
    };
    m.M = function() {
        return this.B ? this.B.slice() : []
    };
    m.Pd = function(a) {
        return Lb(this.B, a)
    };
    m.T = function() {
        return "Point"
    };
    m.Gb = function(a) {
        return Hb(a, this.B[0], this.B[1])
    };
    m.ba = function(a, b) {
        a ? (Gc(this, b, a, 0), this.B || (this.B = []), this.B.length = Hc(this.B, a, this.J), this.b()) : this.U("XY", null)
    };
    m.U = function(a, b) {
        Fc(this, a, b);
        this.b()
    };

    function Rc(a, b, c, d, e) {
        return !Pb(e, function(e) {
            return !Sc(a, b, c, d, e[0], e[1])
        })
    }

    function Sc(a, b, c, d, e, f) {
        for (var g = !1, h = a[c - d], k = a[c - d + 1]; b < c; b += d) {
            var l = a[b],
                n = a[b + 1];
            k > f != n > f && e < (l - h) * (f - k) / (n - k) + h && (g = !g);
            h = l;
            k = n
        }
        return g
    }

    function Tc(a, b, c, d, e, f) {
        console.assert(0 < c.length, "ends should not be an empty array");
        if (0 === c.length || !Sc(a, b, c[0], d, e, f)) return !1;
        var g;
        b = 1;
        for (g = c.length; b < g; ++b)
            if (Sc(a, c[b - 1], c[b], d, e, f)) return !1;
        return !0
    };

    function Uc(a, b, c, d, e, f, g) {
        var h, k, l, n, q, p = e[f + 1],
            r = [],
            u = c[0];
        l = a[u - d];
        q = a[u - d + 1];
        for (h = b; h < u; h += d) {
            n = a[h];
            k = a[h + 1];
            if (p <= q && k <= p || q <= p && p <= k) l = (p - q) / (k - q) * (n - l) + l, r.push(l);
            l = n;
            q = k
        }
        u = NaN;
        q = -Infinity;
        r.sort(bb);
        l = r[0];
        h = 1;
        for (k = r.length; h < k; ++h) {
            n = r[h];
            var z = Math.abs(n - l);
            z > q && (l = (l + n) / 2, Tc(a, b, c, d, l, p) && (u = l, q = z));
            l = n
        }
        isNaN(u) && (u = e[f]);
        return g ? (g.push(u, p), g) : [u, p]
    };

    function Vc(a, b, c, d, e) {
        for (var f = [a[b], a[b + 1]], g = [], h; b + d < c; b += d) {
            g[0] = a[b + d];
            g[1] = a[b + d + 1];
            if (h = e.call(void 0, f, g)) return h;
            f[0] = g[0];
            f[1] = g[1]
        }
        return !1
    };

    function Wc(a, b, c, d, e) {
        var f = Ob(Cb(), a, b, c, d);
        return Zb(e, f) ? Gb(e, f) || f[0] >= e[0] && f[2] <= e[2] || f[1] >= e[1] && f[3] <= e[3] ? !0 : Vc(a, b, c, d, function(a, b) {
            var c = !1,
                d = Ib(e, a),
                f = Ib(e, b);
            if (1 === d || 1 === f) c = !0;
            else {
                var q = e[0],
                    p = e[1],
                    r = e[2],
                    u = e[3],
                    z = b[0],
                    w = b[1],
                    H = (w - a[1]) / (z - a[0]);
                f & 2 && !(d & 2) && (c = z - (w - u) / H, c = c >= q && c <= r);
                c || !(f & 4) || d & 4 || (c = w - (z - r) * H, c = c >= p && c <= u);
                c || !(f & 8) || d & 8 || (c = z - (w - p) / H, c = c >= q && c <= r);
                c || !(f & 16) || d & 16 || (c = w - (z - q) * H, c = c >= p && c <= u)
            }
            return c
        }) : !1
    }

    function Xc(a, b, c, d, e) {
        console.assert(0 < c.length, "ends should not be an empty array");
        var f = c[0];
        if (!(Wc(a, b, f, d, e) || Sc(a, b, f, d, e[0], e[1]) || Sc(a, b, f, d, e[0], e[3]) || Sc(a, b, f, d, e[2], e[1]) || Sc(a, b, f, d, e[2], e[3]))) return !1;
        if (1 === c.length) return !0;
        b = 1;
        for (f = c.length; b < f; ++b)
            if (Rc(a, c[b - 1], c[b], d, e)) return !1;
        return !0
    };

    function Yc(a, b, c, d) {
        for (var e = 0, f = a[c - d], g = a[c - d + 1]; b < c; b += d) var h = a[b],
            k = a[b + 1],
            e = e + (h - f) * (k + g),
            f = h,
            g = k;
        return 0 < e
    }

    function Zc(a, b, c, d) {
        var e = 0;
        d = void 0 !== d ? d : !1;
        var f, g;
        f = 0;
        for (g = b.length; f < g; ++f) {
            var h = b[f],
                e = Yc(a, e, h, c);
            if (0 === f) {
                if (d && e || !d && !e) return !1
            } else if (d && !e || !d && e) return !1;
            e = h
        }
        return !0
    }

    function $c(a, b, c, d, e) {
        e = void 0 !== e ? e : !1;
        var f, g;
        f = 0;
        for (g = c.length; f < g; ++f) {
            var h = c[f],
                k = Yc(a, b, h, d);
            if (0 === f ? e && k || !e && !k : e && !k || !e && k)
                for (var k = a, l = h, n = d; b < l - n;) {
                    var q;
                    for (q = 0; q < n; ++q) {
                        var p = k[b + q];
                        k[b + q] = k[l - n + q];
                        k[l - n + q] = p
                    }
                    b += n;
                    l -= n
                }
            b = h
        }
        return b
    }

    function ad(a, b, c, d) {
        var e = 0,
            f, g;
        f = 0;
        for (g = b.length; f < g; ++f) e = $c(a, e, b[f], c, d);
        return e
    };

    function bd(a, b) {
        Cc.call(this);
        this.f = [];
        this.C = -1;
        this.F = null;
        this.H = -1;
        this.i = null;
        this.ba(a, b)
    }
    v(bd, Cc);
    m = bd.prototype;
    m.clone = function() {
        var a = new bd(null);
        a.U(this.layout, this.B.slice(), this.f.slice());
        return a
    };
    m.oc = function(a, b) {
        return Tc(cd(this), 0, this.f, this.J, a, b)
    };
    m.M = function(a) {
        var b;
        void 0 !== a ? (b = cd(this).slice(), $c(b, 0, this.f, this.J, a)) : b = this.B;
        return Lc(b, 0, this.f, this.J)
    };
    m.nb = function() {
        return this.f
    };

    function dd(a) {
        if (a.C != a.j) {
            var b = Wb(a.K());
            a.F = Uc(cd(a), 0, a.f, a.J, b, 0);
            a.C = a.j
        }
        return a.F
    }

    function ed(a) {
        console.assert(0 < a.f.length, "index should be in between 0 and and length of this.ends_");
        if (0 >= a.f.length) return null;
        var b = new Oc(null);
        Pc(b, a.layout, a.B.slice(0, a.f[0]));
        return b
    }

    function fd(a) {
        var b = a.layout,
            c = a.B;
        a = a.f;
        var d = [],
            e = 0,
            f, g;
        f = 0;
        for (g = a.length; f < g; ++f) {
            var h = a[f],
                k = new Oc(null);
            Pc(k, b, c.slice(e, h));
            d.push(k);
            e = h
        }
        return d
    }

    function cd(a) {
        if (a.H != a.j) {
            var b = a.B;
            Zc(b, a.f, a.J) ? a.i = b : (a.i = b.slice(), a.i.length = $c(a.i, 0, a.f, a.J));
            a.H = a.j
        }
        return a.i
    }
    m.Dc = function(a) {
        var b = [],
            c = [];
        b.length = Nc(this.B, 0, this.f, this.J, Math.sqrt(a), b, 0, c);
        a = new bd(null);
        a.U("XY", b, c);
        return a
    };
    m.T = function() {
        return "Polygon"
    };
    m.Gb = function(a) {
        return Xc(cd(this), 0, this.f, this.J, a)
    };
    m.ba = function(a, b) {
        if (a) {
            Gc(this, b, a, 2);
            this.B || (this.B = []);
            var c = Jc(this.B, 0, a, this.J, this.f);
            this.B.length = 0 === c.length ? 0 : c[c.length - 1];
            this.b()
        } else this.U("XY", null, this.f)
    };
    m.U = function(a, b, c) {
        b ? 0 === c.length ? console.assert(0 === b.length, "flatCoordinates should be an empty array") : console.assert(b.length == c[c.length - 1], "the length of flatCoordinates should be the last entry of ends") : console.assert(c && 0 === c.length, "ends must be an empty array");
        Fc(this, a, b);
        this.f = c;
        this.b()
    };

    function gd(a, b) {
        for (var c = b ? b : 32, d = a.J, e = a.layout, f = new bd(null, e), c = d * (c + 1), d = Array(c), g = 0; g < c; g++) d[g] = 0;
        f.U(e, d, [d.length]);
        hd(f, id(a), Math.sqrt(jd(a)), void 0);
        return f
    }

    function hd(a, b, c, d) {
        var e = a.B,
            f = a.layout,
            g = a.J,
            h = a.nb();
        console.assert(1 === h.length, "only 1 ring is supported");
        var k = e.length / g - 1;
        d = d ? d : 0;
        for (var l, n, q = 0; q <= k; ++q) n = q * g, l = d + 2 * Aa(q, k) * Math.PI / k, e[n] = b[0] + c * Math.cos(l), e[n + 1] = b[1] + c * Math.sin(l);
        a.U(f, e, h)
    };

    function kd(a) {
        var b;
        Xa.call(this);
        a = a || {};
        this.f = [0, 0];
        var c = {};
        c[md] = void 0 !== a.center ? a.center : null;
        this.c = uc(a.projection);
        var d, e, f = void 0 !== a.va ? a.va : 0;
        b = void 0 !== a.ka ? a.ka : 28;
        var g = void 0 !== a.b ? a.b : 2;
        if (void 0 !== a.Fa) b = a.Fa, d = b[0], e = b[b.length - 1], b = mb(b);
        else {
            d = uc(a.projection);
            e = d.K();
            var h = (e ? Math.max(Ub(e), Vb(e)) : 360 * fc.degrees / nc(d)) / 256 / Math.pow(2, 0),
                k = h / Math.pow(2, 28);
            d = a.Ib;
            void 0 !== d ? f = 0 : d = h / Math.pow(g, f);
            e = a.Bb;
            void 0 === e && (e = void 0 !== a.ka ? void 0 !== a.Ib ? d / Math.pow(g, b) : h / Math.pow(g,
                b) : k);
            b = f + Math.floor(Math.log(d / e) / Math.log(g));
            e = d / Math.pow(g, b - f);
            b = nb(g, d, b - f)
        }
        this.o = d;
        this.v = e;
        this.D = g;
        this.i = a.Fa;
        this.s = f;
        f = void 0 !== a.extent ? Ba(a.extent) : Ca;
        g = nd(a);
        this.g = new Da(f, b, g);
        void 0 !== a.resolution ? c[od] = a.resolution : void 0 !== a.zoom && (c[od] = this.mb(this.o, a.zoom - this.s));
        c[pd] = void 0 !== a.rotation ? a.rotation : 0;
        this.Ga(c)
    }
    v(kd, Xa);
    kd.prototype.mb = function(a, b, c) {
        return this.g.resolution(a, b || 0, c || 0)
    };
    kd.prototype.We = function(a, b) {
        return this.g.rotation(a, b || 0)
    };

    function qd(a) {
        return a.get(md)
    }

    function rd(a, b) {
        return void 0 !== b ? (b[0] = a.f[0], b[1] = a.f[1], b) : a.f.slice()
    }

    function sd(a, b) {
        var c = qd(a);
        wa(c, 1);
        var d = td(a);
        wa(void 0 !== d, 2);
        var e = ud(a);
        wa(void 0 !== e, 3);
        return Xb(c, d, e, b)
    }

    function td(a) {
        return a.get(od)
    }

    function vd(a, b) {
        return Math.max(Ub(a) / b[0], Vb(a) / b[1])
    }

    function ud(a) {
        return a.get(pd)
    }
    kd.prototype.ia = function() {
        console.assert(wd(this), "the view was not defined (had no center and/or resolution)");
        var a = qd(this),
            b = this.c,
            c = td(this),
            d = ud(this);
        return {
            center: a.slice(),
            projection: void 0 !== b ? b : null,
            resolution: c,
            rotation: d
        }
    };

    function xd(a) {
        var b, c = td(a);
        if (void 0 !== c && c >= a.v && c <= a.o) {
            b = a.s || 0;
            var d;
            if (a.i) {
                var e = db(a.i, c, 1);
                b += e;
                if (e == a.i.length - 1) return b;
                d = a.i[e];
                a = d / a.i[e + 1]
            } else d = a.o, a = a.D;
            b += Math.log(d / c) / Math.log(a)
        }
        return b
    }

    function yd(a, b, c, d) {
        if (!(b instanceof Cc)) {
            wa(Array.isArray(b), 24);
            wa(!Tb(b), 25);
            var e = b[0],
                f = b[1],
                g = b[2],
                h = b[3],
                e = [e, f, e, h, g, h, g, f, e, f],
                f = new bd(null);
            f.U("XY", e, [e.length]);
            b = f
        }
        e = d || {};
        d = void 0 !== e.padding ? e.padding : [0, 0, 0, 0];
        var h = void 0 !== e.mb ? e.mb : !0,
            f = void 0 !== e.rm ? e.rm : !1,
            k;
        void 0 !== e.Bb ? k = e.Bb : void 0 !== e.ka ? k = a.mb(a.o, e.ka - a.s, 0) : k = 0;
        var l = b.B,
            g = ud(a);
        console.assert(void 0 !== g, "rotation was not defined");
        var e = Math.cos(-g),
            g = Math.sin(-g),
            n = Infinity,
            q = Infinity,
            p = -Infinity,
            r = -Infinity;
        b = b.J;
        for (var u = 0, z = l.length; u < z; u += b) var w = l[u] * e - l[u + 1] * g,
            H = l[u] * g + l[u + 1] * e,
            n = Math.min(n, w),
            q = Math.min(q, H),
            p = Math.max(p, w),
            r = Math.max(r, H);
        c = vd([n, q, p, r], [c[0] - d[1] - d[3], c[1] - d[0] - d[2]]);
        c = isNaN(c) ? k : Math.max(c, k);
        h && (k = a.mb(c, 0, 0), !f && k < c && (k = a.mb(k, -1, 0)), c = k);
        a.set(od, c);
        g = -g;
        k = (n + p) / 2 + (d[1] - d[3]) / 2 * c;
        c = (q + r) / 2 + (d[0] - d[2]) / 2 * c;
        zd(a, [k * e - c * g, c * e + k * g])
    }

    function wd(a) {
        return !!qd(a) && void 0 !== td(a)
    }
    kd.prototype.rotate = function(a, b) {
        if (void 0 !== b) {
            var c, d = qd(this);
            void 0 !== d && (c = [d[0] - b[0], d[1] - b[1]], yb(c, a - ud(this)), tb(c, b));
            zd(this, c)
        }
        this.set(pd, a)
    };

    function zd(a, b) {
        a.set(md, b)
    }

    function Ad(a, b) {
        console.assert(1 < a.f.length, "illegal hint (%s), must be between 0 and %s", 1, a.f.length);
        a.f[1] += b;
        console.assert(0 <= a.f[1], "Hint at %s must be positive, was %s", 1, a.f[1])
    }

    function Bd(a, b) {
        var c = a.mb(a.o, b - a.s, 0);
        a.set(od, c)
    }

    function nd(a) {
        if (void 0 !== a.pk ? a.pk : 1) {
            a = a.We;
            if (void 0 === a || !0 === a) return rb();
            if (!1 === a) return pb;
            if ("number" === typeof a) return qb(a);
            console.assert(!1, "illegal option for constrainRotation (%s)", a);
            return pb
        }
        return ob
    }
    var md = "center",
        od = "resolution",
        pd = "rotation";

    function Cd(a) {
        return 1 - Math.pow(1 - a, 3)
    }

    function Dd(a) {
        return 3 * a * a - 2 * a * a * a
    }

    function Ed(a) {
        return a
    };

    function Fd(a) {
        var b = a.source,
            c = a.start ? a.start : Date.now(),
            d = b[0],
            e = b[1],
            f = void 0 !== a.duration ? a.duration : 1E3,
            g = a.Na ? a.Na : Dd;
        return function(a, b) {
            if (b.time < c) return b.animate = !0, b.Ba[0] += 1, !0;
            if (b.time < c + f) {
                var l = 1 - g((b.time - c) / f),
                    n = d - b.da.center[0],
                    q = e - b.da.center[1];
                b.animate = !0;
                b.da.center[0] += l * n;
                b.da.center[1] += l * q;
                b.Ba[0] += 1;
                return !0
            }
            return !1
        }
    }

    function Gd(a) {
        var b = a.rotation ? a.rotation : 0,
            c = a.start ? a.start : Date.now(),
            d = void 0 !== a.duration ? a.duration : 1E3,
            e = a.Na ? a.Na : Dd,
            f = a.anchor ? a.anchor : null;
        return function(a, h) {
            if (h.time < c) return h.animate = !0, h.Ba[0] += 1, !0;
            if (h.time < c + d) {
                var k = 1 - e((h.time - c) / d),
                    k = (b - h.da.rotation) * k;
                h.animate = !0;
                h.da.rotation += k;
                if (f) {
                    var l = h.da.center;
                    l[0] -= f[0];
                    l[1] -= f[1];
                    yb(l, k);
                    tb(l, f)
                }
                h.Ba[0] += 1;
                return !0
            }
            return !1
        }
    }

    function Hd(a) {
        var b = a.resolution,
            c = a.start ? a.start : Date.now(),
            d = void 0 !== a.duration ? a.duration : 1E3,
            e = a.Na ? a.Na : Dd;
        return function(a, g) {
            if (g.time < c) return g.animate = !0, g.Ba[0] += 1, !0;
            if (g.time < c + d) {
                var h = 1 - e((g.time - c) / d),
                    k = b - g.da.resolution;
                g.animate = !0;
                g.da.resolution += h * k;
                g.Ba[0] += 1;
                return !0
            }
            return !1
        }
    };

    function Id(a, b, c, d) {
        this.W = a;
        this.Z = b;
        this.aa = c;
        this.ca = d
    }
    Id.prototype.contains = function(a) {
        return Jd(this, a[1], a[2])
    };

    function Jd(a, b, c) {
        return a.W <= b && b <= a.Z && a.aa <= c && c <= a.ca
    }
    Id.prototype.equals = function(a) {
        return this.W == a.W && this.aa == a.aa && this.Z == a.Z && this.ca == a.ca
    };
    Id.prototype.extend = function(a) {
        a.W < this.W && (this.W = a.W);
        a.Z > this.Z && (this.Z = a.Z);
        a.aa < this.aa && (this.aa = a.aa);
        a.ca > this.ca && (this.ca = a.ca)
    };

    function Kd(a, b) {
        return a.W <= b.Z && a.Z >= b.W && a.aa <= b.ca && a.ca >= b.aa
    };

    function Ld(a, b) {
        if (Array.isArray(a)) return a;
        void 0 === b ? b = [a, a] : b[0] = b[1] = a;
        return b
    };

    function Md(a, b, c, d) {
        return void 0 !== d ? (d[0] = a, d[1] = b, d[2] = c, d) : [a, b, c]
    }

    function Nd(a) {
        var b = a[0],
            c = Array(b),
            d = 1 << b - 1,
            e, f;
        for (e = 0; e < b; ++e) f = 48, a[1] & d && (f += 1), a[2] & d && (f += 2), c[e] = String.fromCharCode(f), d >>= 1;
        return c.join("")
    };

    function Od(a) {
        this.va = void 0 !== a.va ? a.va : 0;
        this.b = a.Fa;
        wa(lb(this.b, function(a, b) {
            return b - a
        }), 17);
        this.ka = this.b.length - 1;
        this.c = void 0 !== a.origin ? a.origin : null;
        this.f = null;
        void 0 !== a.le && (this.f = a.le, wa(this.f.length == this.b.length, 20));
        var b = a.extent;
        void 0 === b || this.c || this.f || (this.c = Rb(b));
        wa(!this.c && this.f || this.c && !this.f, 18);
        this.j = null;
        void 0 !== a.De && (this.j = a.De, wa(this.j.length == this.b.length, 19));
        this.o = void 0 !== a.tileSize ? a.tileSize : this.j ? null : 256;
        wa(!this.o && this.j || this.o && !this.j,
            22);
        this.v = void 0 !== b ? b : null;
        this.g = null;
        this.s = [0, 0];
        void 0 !== a.sizes ? (console.assert(a.sizes.length == this.b.length, "number of sizes and resolutions must be equal"), this.g = a.sizes.map(function(a) {
            console.assert(0 !== a[0], "width must not be 0");
            console.assert(0 !== a[1], "height must not be 0");
            return new Id(Math.min(0, a[0]), Math.max(a[0] - 1, -1), Math.min(0, a[1]), Math.max(a[1] - 1, -1))
        }, this)) : b && Pd(this, b)
    }
    var Qd = [0, 0, 0];

    function Rd(a, b, c, d, e) {
        e = Sd(a, b, e);
        for (b = b[0] - 1; b >= a.va;) {
            if (c.call(null, b, Td(a, e, b, d))) return !0;
            --b
        }
        return !1
    }
    Od.prototype.K = function() {
        return this.v
    };

    function Ud(a, b) {
        if (a.c) return a.c;
        console.assert(a.va <= b && b <= a.ka, "given z is not in allowed range (%s <= %s <= %s)", a.va, b, a.ka);
        return a.f[b]
    }

    function Vd(a, b) {
        console.assert(a.va <= b && b <= a.ka, "given z is not in allowed range (%s <= %s <= %s)", a.va, b, a.ka);
        return a.b[b]
    }

    function Wd(a, b, c, d) {
        return b[0] < a.ka ? (d = Sd(a, b, d), Td(a, d, b[0] + 1, c)) : null
    }

    function Xd(a, b, c, d) {
        Yd(a, b[0], b[1], c, !1, Qd);
        var e = Qd[1],
            f = Qd[2];
        Yd(a, b[2], b[3], c, !0, Qd);
        a = Qd[1];
        b = Qd[2];
        void 0 !== d ? (d.W = e, d.Z = a, d.aa = f, d.ca = b) : d = new Id(e, a, f, b);
        return d
    }

    function Td(a, b, c, d) {
        c = Vd(a, c);
        return Xd(a, b, c, d)
    }

    function Zd(a, b) {
        var c = Ud(a, b[0]),
            d = Vd(a, b[0]),
            e = Ld($d(a, b[0]), a.s);
        return [c[0] + (b[1] + .5) * e[0] * d, c[1] + (b[2] + .5) * e[1] * d]
    }

    function Sd(a, b, c) {
        var d = Ud(a, b[0]),
            e = Vd(a, b[0]);
        a = Ld($d(a, b[0]), a.s);
        var f = d[0] + b[1] * a[0] * e;
        b = d[1] + b[2] * a[1] * e;
        return Jb(f, b, f + a[0] * e, b + a[1] * e, c)
    }

    function Yd(a, b, c, d, e, f) {
        var g = ae(a, d),
            h = d / Vd(a, g),
            k = Ud(a, g);
        a = Ld($d(a, g), a.s);
        b = h * Math.floor((b - k[0]) / d + (e ? .5 : 0)) / a[0];
        c = h * Math.floor((c - k[1]) / d + (e ? 0 : .5)) / a[1];
        e ? (b = Math.ceil(b) - 1, c = Math.ceil(c) - 1) : (b = Math.floor(b), c = Math.floor(c));
        return Md(g, b, c, f)
    }

    function be(a, b, c, d) {
        c = Vd(a, c);
        return Yd(a, b[0], b[1], c, !1, d)
    }

    function $d(a, b) {
        if (a.o) return a.o;
        console.assert(a.va <= b && b <= a.ka, "z is not in allowed range (%s <= %s <= %s", a.va, b, a.ka);
        return a.j[b]
    }

    function ce(a, b) {
        return a.g ? (console.assert(a.va <= b && b <= a.ka, "z is not in allowed range (%s <= %s <= %s", a.va, b, a.ka), a.g[b]) : null
    }

    function ae(a, b, c) {
        return xa(db(a.b, b, c || 0), a.va, a.ka)
    }

    function Pd(a, b) {
        for (var c = a.b.length, d = Array(c), e = a.va; e < c; ++e) d[e] = Td(a, b, e);
        a.g = d
    };

    function de(a) {
        var b = a.s;
        if (!b) {
            var b = ee(a),
                c = fe(b, void 0, void 0),
                b = new Od({
                    extent: b,
                    origin: Rb(b),
                    Fa: c,
                    tileSize: void 0
                });
            a.s = b
        }
        return b
    }

    function ge(a) {
        var b = {};
        Ea(b, void 0 !== a ? a : {});
        void 0 === b.extent && (b.extent = jc("EPSG:3857").K());
        b.Fa = fe(b.extent, b.ka, b.tileSize);
        delete b.ka;
        return new Od(b)
    }

    function fe(a, b, c) {
        b = void 0 !== b ? b : 42;
        var d = Vb(a);
        a = Ub(a);
        c = Ld(void 0 !== c ? c : 256);
        c = Math.max(a / c[0], d / c[1]);
        b += 1;
        d = Array(b);
        for (a = 0; a < b; ++a) d[a] = c / Math.pow(2, a);
        return d
    }

    function ee(a) {
        a = jc(a);
        var b = a.K();
        b || (a = 180 * fc.degrees / nc(a), b = Jb(-a, -a, a, a));
        return b
    };

    function he(a) {
        this.c = a.html;
        this.b = a.yi ? a.yi : null
    };

    function ie(a) {
        Xa.call(this);
        this.c = a ? a : [];
        je(this)
    }
    v(ie, Xa);
    m = ie.prototype;
    m.clear = function() {
        for (; 0 < this.get(ke);) this.pop()
    };
    m.extend = function(a) {
        var b, c;
        b = 0;
        for (c = a.length; b < c; ++b) this.push(a[b]);
        return this
    };
    m.forEach = function(a, b) {
        this.c.forEach(a, b)
    };
    m.item = function(a) {
        return this.c[a]
    };

    function le(a, b, c) {
        a.c.splice(b, 0, c);
        je(a);
        B(a, new me(ne, c))
    }
    m.pop = function() {
        return oe(this, this.get(ke) - 1)
    };
    m.push = function(a) {
        var b = this.c.length;
        le(this, b, a);
        return b
    };
    m.remove = function(a) {
        var b = this.c,
            c, d;
        c = 0;
        for (d = b.length; c < d; ++c)
            if (b[c] === a) return oe(this, c)
    };

    function oe(a, b) {
        var c = a.c[b];
        a.c.splice(b, 1);
        je(a);
        B(a, new me(pe, c));
        return c
    }

    function je(a) {
        a.set(ke, a.c.length)
    }
    var ke = "length",
        ne = "add",
        pe = "remove";

    function me(a, b) {
        Qa.call(this, a);
        this.element = b
    }
    v(me, Qa);
    var qe = /^#(?:[0-9a-f]{3}){1,2}$/i,
        re = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i,
        se = /^(?:rgba)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|1|0\.\d{0,10})\)$/i,
        te = /^([a-z]*)$/i;

    function ue(a) {
        return Array.isArray(a) ? a : ve(a)
    }

    function we(a) {
        if ("string" !== typeof a) {
            var b = a[0];
            b != (b | 0) && (b = b + .5 | 0);
            var c = a[1];
            c != (c | 0) && (c = c + .5 | 0);
            var d = a[2];
            d != (d | 0) && (d = d + .5 | 0);
            a = "rgba(" + b + "," + c + "," + d + "," + (void 0 === a[3] ? 1 : a[3]) + ")"
        }
        return a
    }
    var ve = function() {
        var a = {},
            b = 0;
        return function(c) {
            var d;
            if (a.hasOwnProperty(c)) d = a[c];
            else {
                if (1024 <= b) {
                    d = 0;
                    for (var e in a) 0 === (d++ & 3) && (delete a[e], --b)
                }
                d = c;
                var f, g;
                te.exec(d) && (e = document.createElement("div"), e.style.color = d, document.body.appendChild(e), d = getComputedStyle(e).color, document.body.removeChild(e));
                qe.exec(d) ? (f = d.length - 1, wa(3 == f || 6 == f, 54), g = 3 == f ? 1 : 2, f = parseInt(d.substr(1 + 0 * g, g), 16), e = parseInt(d.substr(1 + 1 * g, g), 16), d = parseInt(d.substr(1 + 2 * g, g), 16), 1 == g && (f = (f << 4) + f, e = (e << 4) + e, d = (d <<
                    4) + d), f = [f, e, d, 1]) : (g = se.exec(d)) ? (f = Number(g[1]), e = Number(g[2]), d = Number(g[3]), g = Number(g[4]), f = xe([f, e, d, g])) : (g = re.exec(d)) ? (f = Number(g[1]), e = Number(g[2]), d = Number(g[3]), f = xe([f, e, d, 1])) : wa(!1, 14);
                d = f;
                a[c] = d;
                ++b
            }
            return d
        }
    }();

    function xe(a) {
        var b = [];
        b[0] = xa(a[0] + .5 | 0, 0, 255);
        b[1] = xa(a[1] + .5 | 0, 0, 255);
        b[2] = xa(a[2] + .5 | 0, 0, 255);
        b[3] = xa(a[3], 0, 1);
        return b
    };

    function ye(a) {
        return ze(a) ? a : we(a)
    }

    function ze(a) {
        return "string" === typeof a || a instanceof CanvasPattern || a instanceof CanvasGradient
    };

    function Ae(a, b) {
        var c = document.createElement("CANVAS");
        a && (c.width = a);
        b && (c.height = b);
        return c.getContext("2d")
    }

    function Be(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    };

    function Ce(a, b, c) {
        Qa.call(this, a);
        this.map = b;
        this.frameState = void 0 !== c ? c : null
    }
    v(Ce, Qa);

    function De(a) {
        Xa.call(this);
        this.element = a.element ? a.element : null;
        this.v = this.N = null;
        this.D = [];
        this.render = a.render ? a.render : ta;
        a.target && Ee(this, a.target)
    }
    v(De, Xa);
    De.prototype.qa = function() {
        Be(this.element);
        Xa.prototype.qa.call(this)
    };
    De.prototype.setMap = function(a) {
        this.v && Be(this.element);
        for (var b = 0, c = this.D.length; b < c; ++b) Ja(this.D[b]);
        this.D.length = 0;
        if (this.v = a)(this.N ? this.N : a.D).appendChild(this.element), this.render !== ta && this.D.push(A(a, "postrender", this.render, this)), a.render()
    };

    function Ee(a, b) {
        a.N = "string" === typeof b ? document.getElementById(b) : b
    };

    function Fe(a) {
        a = a ? a : {};
        this.H = document.createElement("UL");
        this.o = document.createElement("LI");
        this.H.appendChild(this.o);
        this.o.style.display = "none";
        this.g = void 0 !== a.collapsed ? a.collapsed : !0;
        this.C = void 0 !== a.Oj ? a.Oj : !0;
        this.C || (this.g = !1);
        var b = void 0 !== a.className ? a.className : "ol-attribution",
            c = void 0 !== a.mg ? a.mg : "Attributions",
            d = void 0 !== a.Nj ? a.Nj : "\u00bb";
        "string" === typeof d ? (this.i = document.createElement("span"), this.i.textContent = d) : this.i = d;
        d = void 0 !== a.label ? a.label : "i";
        "string" === typeof d ?
            (this.s = document.createElement("span"), this.s.textContent = d) : this.s = d;
        var e = this.C && !this.g ? this.i : this.s,
            d = document.createElement("button");
        d.setAttribute("type", "button");
        d.title = c;
        d.appendChild(e);
        A(d, "click", this.fa, this);
        c = document.createElement("div");
        c.className = b + " ol-unselectable ol-control" + (this.g && this.C ? " ol-collapsed" : "") + (this.C ? "" : " ol-uncollapsible");
        c.appendChild(this.H);
        c.appendChild(d);
        De.call(this, {
            element: c,
            render: a.render ? a.render : Ge,
            target: a.target
        });
        this.F = !0;
        this.f = {};
        this.c = {};
        this.R = {}
    }
    v(Fe, De);

    function Ge(a) {
        if (a = a.frameState) {
            var b, c, d, e, f, g, h, k, l, n, q, p = a.fe,
                r = Ea({}, a.la),
                u = {},
                z = a.da.projection;
            c = 0;
            for (b = p.length; c < b; c++)
                if (g = C(p[c].layer))
                    if (n = x(g).toString(), l = g.C)
                        for (d = 0, e = l.length; d < e; d++)
                            if (h = l[d], k = x(h).toString(), !(k in r)) {
                                if (f = a.qg[n]) {
                                    var w = g.Wb(z);
                                    a: {
                                        q = h;
                                        var H = z;
                                        if (q.b) {
                                            var F, I, N, fa = void 0;
                                            for (fa in f)
                                                if (fa in q.b) {
                                                    N = f[fa];
                                                    var U;
                                                    F = 0;
                                                    for (I = q.b[fa].length; F < I; ++F) {
                                                        U = q.b[fa][F];
                                                        if (Kd(U, N)) {
                                                            q = !0;
                                                            break a
                                                        }
                                                        var y = Td(w, ee(H), parseInt(fa, 10)),
                                                            T = y.Z - y.W + 1;
                                                        if (N.W < y.W || N.Z > y.Z)
                                                            if (Kd(U, new Id(Aa(N.W,
                                                                    T), Aa(N.Z, T), N.aa, N.ca)) || N.Z - N.W + 1 > T && Kd(U, y)) {
                                                                q = !0;
                                                                break a
                                                            }
                                                    }
                                                }
                                            q = !1
                                        } else q = !0
                                    }
                                } else q = !1;
                                q ? (k in u && delete u[k], r[k] = h) : u[k] = h
                            }
            b = [r, u];
            c = b[0];
            b = b[1];
            for (var P in this.f) P in c ? (this.c[P] || (this.f[P].style.display = "", this.c[P] = !0), delete c[P]) : P in b ? (this.c[P] && (this.f[P].style.display = "none", delete this.c[P]), delete b[P]) : (Be(this.f[P]), delete this.f[P], delete this.c[P]);
            for (P in c) d = document.createElement("LI"), d.innerHTML = c[P].c, this.H.appendChild(d), this.f[P] = d, this.c[P] = !0;
            for (P in b) d = document.createElement("LI"),
                d.innerHTML = b[P].c, d.style.display = "none", this.H.appendChild(d), this.f[P] = d;
            P = !Ha(this.c) || !Ha(a.Hc);
            this.F != P && (this.element.style.display = P ? "" : "none", this.F = P);
            P && Ha(this.c) ? this.element.classList.add("ol-logo-only") : this.element.classList.remove("ol-logo-only");
            var W;
            a = a.Hc;
            P = this.R;
            for (W in P) W in a || (Be(P[W]), delete P[W]);
            for (var K in a) b = a[K], b instanceof HTMLElement && (this.o.appendChild(b), P[K] = b), K in P || (W = new Image, W.src = K, "" === b ? c = W : (c = document.createElement("a"), c.href = b, c.appendChild(W)),
                this.o.appendChild(c), P[K] = c);
            this.o.style.display = Ha(a) ? "none" : ""
        } else this.F && (this.element.style.display = "none", this.F = !1)
    }
    Fe.prototype.fa = function(a) {
        a.preventDefault();
        this.element.classList.toggle("ol-collapsed");
        if (this.g) {
            a = this.s;
            var b = a.parentNode;
            b && b.replaceChild(this.i, a)
        } else a = this.i, (b = a.parentNode) && b.replaceChild(this.s, a);
        this.g = !this.g
    };

    function He(a) {
        a = a ? a : {};
        var b = void 0 !== a.className ? a.className : "ol-rotate",
            c = void 0 !== a.label ? a.label : "\u21e7";
        this.c = null;
        "string" === typeof c ? (this.c = document.createElement("span"), this.c.className = "ol-compass", this.c.textContent = c) : (this.c = c, this.c.classList.add("ol-compass"));
        var d = a.mg ? a.mg : "Reset rotation",
            c = document.createElement("button");
        c.className = b + "-reset";
        c.setAttribute("type", "button");
        c.title = d;
        c.appendChild(this.c);
        A(c, "click", He.prototype.s, this);
        d = document.createElement("div");
        d.className =
            b + " ol-unselectable ol-control";
        d.appendChild(c);
        b = a.render ? a.render : Ie;
        this.g = a.no ? a.no : void 0;
        De.call(this, {
            element: d,
            render: b,
            target: a.target
        });
        this.o = void 0 !== a.duration ? a.duration : 250;
        this.f = void 0 !== a.Ej ? a.Ej : !0;
        this.i = void 0;
        this.f && this.element.classList.add("ol-hidden")
    }
    v(He, De);
    He.prototype.s = function(a) {
        a.preventDefault();
        if (void 0 !== this.g) this.g();
        else {
            a = this.v;
            var b = D(a);
            if (b) {
                var c = ud(b);
                void 0 !== c && (0 < this.o && (c %= 2 * Math.PI, c < -Math.PI && (c += 2 * Math.PI), c > Math.PI && (c -= 2 * Math.PI), a.ab(Gd({
                    rotation: c,
                    duration: this.o,
                    Na: Cd
                }))), b.set(pd, 0))
            }
        }
    };

    function Ie(a) {
        if (a = a.frameState) {
            a = a.da.rotation;
            if (a != this.i) {
                var b = "rotate(" + a + "rad)";
                if (this.f) {
                    var c = this.element.classList.contains("ol-hidden");
                    c || 0 !== a ? c && 0 !== a && this.element.classList.remove("ol-hidden") : this.element.classList.add("ol-hidden")
                }
                this.c.style.msTransform = b;
                this.c.style.webkitTransform = b;
                this.c.style.transform = b
            }
            this.i = a
        }
    };

    function Je(a) {
        a = a ? a : {};
        var b = void 0 !== a.className ? a.className : "ol-zoom",
            c = void 0 !== a.ec ? a.ec : 1,
            d = void 0 !== a.pp ? a.pp : "+",
            e = void 0 !== a.rp ? a.rp : "\u2212",
            f = void 0 !== a.qp ? a.qp : "Zoom in",
            g = void 0 !== a.sp ? a.sp : "Zoom out",
            h = document.createElement("button");
        h.className = b + "-in";
        h.setAttribute("type", "button");
        h.title = f;
        h.appendChild("string" === typeof d ? document.createTextNode(d) : d);
        A(h, "click", Je.prototype.f.bind(this, c));
        d = document.createElement("button");
        d.className = b + "-out";
        d.setAttribute("type", "button");
        d.title = g;
        d.appendChild("string" === typeof e ? document.createTextNode(e) : e);
        A(d, "click", Je.prototype.f.bind(this, -c));
        c = document.createElement("div");
        c.className = b + " ol-unselectable ol-control";
        c.appendChild(h);
        c.appendChild(d);
        De.call(this, {
            element: c,
            target: a.target
        });
        this.c = void 0 !== a.duration ? a.duration : 250
    }
    v(Je, De);
    Je.prototype.f = function(a, b) {
        b.preventDefault();
        var c = this.v,
            d = D(c);
        if (d) {
            var e = td(d);
            e && (0 < this.c && c.ab(Hd({
                resolution: e,
                duration: this.c,
                Na: Cd
            })), c = d.mb(e, a), d.set(od, c))
        }
    };

    function Ke() {
        var a = {},
            b = new ie;
        (void 0 !== a.zoom ? a.zoom : 1) && b.push(new Je(a.qq));
        (void 0 !== a.rotate ? a.rotate : 1) && b.push(new He(a.gq));
        (void 0 !== a.attribution ? a.attribution : 1) && b.push(new Fe(a.Np));
        return b
    };
    var Le = "undefined" !== typeof navigator ? navigator.userAgent.toLowerCase() : "",
        Me = -1 !== Le.indexOf("firefox"),
        Ne = -1 !== Le.indexOf("safari") && -1 == Le.indexOf("chrom"),
        Oe = -1 !== Le.indexOf("webkit") && -1 == Le.indexOf("edge"),
        Pe = -1 !== Le.indexOf("macintosh"),
        Qe = window.devicePixelRatio || 1,
        Re = !1,
        Se = function() {
            if (!("HTMLCanvasElement" in window)) return !1;
            try {
                var a = document.createElement("CANVAS").getContext("2d");
                return a ? (void 0 !== a.setLineDash && (Re = !0), !0) : !1
            } catch (b) {
                return !1
            }
        }(),
        Te = "geolocation" in navigator,
        Ue =
        "ontouchstart" in window,
        Ve = "PointerEvent" in window,
        We = !!navigator.msPointerEnabled;

    function Xe(a, b) {
        this.b = a;
        this.g = b
    };

    function Ye(a) {
        Xe.call(this, a, {
            mousedown: this.an,
            mousemove: this.bn,
            mouseup: this.en,
            mouseover: this.dn,
            mouseout: this.cn
        });
        this.c = a.c;
        this.f = []
    }
    v(Ye, Xe);

    function Ze(a, b) {
        for (var c = a.f, d = b.clientX, e = b.clientY, f = 0, g = c.length, h; f < g && (h = c[f]); f++) {
            var k = Math.abs(e - h[1]);
            if (25 >= Math.abs(d - h[0]) && 25 >= k) return !0
        }
        return !1
    }

    function $e(a) {
        var b = af(a, a),
            c = b.preventDefault;
        b.preventDefault = function() {
            a.preventDefault();
            c()
        };
        b.pointerId = 1;
        b.isPrimary = !0;
        b.pointerType = "mouse";
        return b
    }
    m = Ye.prototype;
    m.an = function(a) {
        if (!Ze(this, a)) {
            (1).toString() in this.c && this.cancel(a);
            var b = $e(a);
            this.c[(1).toString()] = a;
            bf(this.b, "pointerdown", b, a)
        }
    };
    m.bn = function(a) {
        if (!Ze(this, a)) {
            var b = $e(a);
            this.b.move(b, a)
        }
    };
    m.en = function(a) {
        if (!Ze(this, a)) {
            var b = this.c[(1).toString()];
            b && b.button === a.button && (b = $e(a), bf(this.b, "pointerup", b, a), delete this.c[(1).toString()])
        }
    };
    m.dn = function(a) {
        if (!Ze(this, a)) {
            var b = $e(a);
            cf(this.b, b, a)
        }
    };
    m.cn = function(a) {
        if (!Ze(this, a)) {
            var b = $e(a);
            df(this.b, b, a)
        }
    };
    m.cancel = function(a) {
        var b = $e(a);
        this.b.cancel(b, a);
        delete this.c[(1).toString()]
    };

    function ef(a) {
        Xe.call(this, a, {
            MSPointerDown: this.mm,
            MSPointerMove: this.nm,
            MSPointerUp: this.qm,
            MSPointerOut: this.om,
            MSPointerOver: this.pm,
            MSPointerCancel: this.lm,
            MSGotPointerCapture: this.jm,
            MSLostPointerCapture: this.km
        });
        this.c = a.c;
        this.f = ["", "unavailable", "touch", "pen", "mouse"]
    }
    v(ef, Xe);

    function ff(a, b) {
        var c = b;
        "number" === typeof b.pointerType && (c = af(b, b), c.pointerType = a.f[b.pointerType]);
        return c
    }
    m = ef.prototype;
    m.mm = function(a) {
        this.c[a.pointerId.toString()] = a;
        var b = ff(this, a);
        bf(this.b, "pointerdown", b, a)
    };
    m.nm = function(a) {
        var b = ff(this, a);
        this.b.move(b, a)
    };
    m.qm = function(a) {
        var b = ff(this, a);
        bf(this.b, "pointerup", b, a);
        delete this.c[a.pointerId.toString()]
    };
    m.om = function(a) {
        var b = ff(this, a);
        df(this.b, b, a)
    };
    m.pm = function(a) {
        var b = ff(this, a);
        cf(this.b, b, a)
    };
    m.lm = function(a) {
        var b = ff(this, a);
        this.b.cancel(b, a);
        delete this.c[a.pointerId.toString()]
    };
    m.km = function(a) {
        B(this.b, new gf("lostpointercapture", a, a))
    };
    m.jm = function(a) {
        B(this.b, new gf("gotpointercapture", a, a))
    };

    function hf(a) {
        Xe.call(this, a, {
            pointerdown: this.yn,
            pointermove: this.zn,
            pointerup: this.Cn,
            pointerout: this.An,
            pointerover: this.Bn,
            pointercancel: this.xn,
            gotpointercapture: this.$k,
            lostpointercapture: this.dm
        })
    }
    v(hf, Xe);
    m = hf.prototype;
    m.yn = function(a) {
        jf(this.b, a)
    };
    m.zn = function(a) {
        jf(this.b, a)
    };
    m.Cn = function(a) {
        jf(this.b, a)
    };
    m.An = function(a) {
        jf(this.b, a)
    };
    m.Bn = function(a) {
        jf(this.b, a)
    };
    m.xn = function(a) {
        jf(this.b, a)
    };
    m.dm = function(a) {
        jf(this.b, a)
    };
    m.$k = function(a) {
        jf(this.b, a)
    };

    function gf(a, b, c) {
        Qa.call(this, a);
        this.b = b;
        a = c ? c : {};
        this.buttons = kf(a);
        this.pressure = lf(a, this.buttons);
        this.bubbles = "bubbles" in a ? a.bubbles : !1;
        this.cancelable = "cancelable" in a ? a.cancelable : !1;
        this.view = "view" in a ? a.view : null;
        this.detail = "detail" in a ? a.detail : null;
        this.screenX = "screenX" in a ? a.screenX : 0;
        this.screenY = "screenY" in a ? a.screenY : 0;
        this.clientX = "clientX" in a ? a.clientX : 0;
        this.clientY = "clientY" in a ? a.clientY : 0;
        this.button = "button" in a ? a.button : 0;
        this.relatedTarget = "relatedTarget" in a ? a.relatedTarget :
            null;
        this.pointerId = "pointerId" in a ? a.pointerId : 0;
        this.width = "width" in a ? a.width : 0;
        this.height = "height" in a ? a.height : 0;
        this.pointerType = "pointerType" in a ? a.pointerType : "";
        this.isPrimary = "isPrimary" in a ? a.isPrimary : !1;
        b.preventDefault && (this.preventDefault = function() {
            b.preventDefault()
        })
    }
    v(gf, Qa);

    function kf(a) {
        if (a.buttons || mf) a = a.buttons;
        else switch (a.which) {
            case 1:
                a = 1;
                break;
            case 2:
                a = 4;
                break;
            case 3:
                a = 2;
                break;
            default:
                a = 0
        }
        return a
    }

    function lf(a, b) {
        var c = 0;
        a.pressure ? c = a.pressure : c = b ? .5 : 0;
        return c
    }
    var mf = !1;
    try {
        mf = 1 === (new MouseEvent("click", {
            buttons: 1
        })).buttons
    } catch (a) {};

    function nf(a, b) {
        Xe.call(this, a, {
            touchstart: this.To,
            touchmove: this.So,
            touchend: this.Ro,
            touchcancel: this.Qo
        });
        this.c = a.c;
        this.i = b;
        this.f = void 0;
        this.o = 0;
        this.j = void 0
    }
    v(nf, Xe);
    m = nf.prototype;
    m.li = function() {
        this.o = 0;
        this.j = void 0
    };

    function of (a, b, c) {
        b = af(b, c);
        b.pointerId = c.identifier + 2;
        b.bubbles = !0;
        b.cancelable = !0;
        b.detail = a.o;
        b.button = 0;
        b.buttons = 1;
        b.width = c.webkitRadiusX || c.radiusX || 0;
        b.height = c.webkitRadiusY || c.radiusY || 0;
        b.pressure = c.webkitForce || c.force || .5;
        b.isPrimary = a.f === c.identifier;
        b.pointerType = "touch";
        b.clientX = c.clientX;
        b.clientY = c.clientY;
        b.screenX = c.screenX;
        b.screenY = c.screenY;
        return b
    }

    function pf(a, b, c) {
        function d() {
            b.preventDefault()
        }
        var e = Array.prototype.slice.call(b.changedTouches),
            f = e.length,
            g, h;
        for (g = 0; g < f; ++g) h = of (a, b, e[g]), h.preventDefault = d, c.call(a, b, h)
    }
    m.To = function(a) {
        var b = a.touches,
            c = Object.keys(this.c),
            d = c.length;
        if (d >= b.length) {
            var e = [],
                f, g, h;
            for (f = 0; f < d; ++f) {
                g = c[f];
                h = this.c[g];
                var k;
                if (!(k = 1 == g)) a: {
                    k = b.length;
                    for (var l, n = 0; n < k; n++)
                        if (l = b[n], l.identifier === g - 2) {
                            k = !0;
                            break a
                        }
                    k = !1
                }
                k || e.push(h.out)
            }
            for (f = 0; f < e.length; ++f) this.Re(a, e[f])
        }
        b = a.changedTouches[0];
        c = Object.keys(this.c).length;
        if (0 === c || 1 === c && (1).toString() in this.c) this.f = b.identifier, void 0 !== this.j && clearTimeout(this.j);
        qf(this, a);
        this.o++;
        pf(this, a, this.rn)
    };
    m.rn = function(a, b) {
        this.c[b.pointerId] = {
            target: b.target,
            out: b,
            Th: b.target
        };
        var c = this.b;
        b.bubbles = !0;
        bf(c, "pointerover", b, a);
        this.b.enter(b, a);
        bf(this.b, "pointerdown", b, a)
    };
    m.So = function(a) {
        a.preventDefault();
        pf(this, a, this.im)
    };
    m.im = function(a, b) {
        var c = this.c[b.pointerId];
        if (c) {
            var d = c.out,
                e = c.Th;
            this.b.move(b, a);
            d && e !== b.target && (d.relatedTarget = b.target, b.relatedTarget = e, d.target = e, b.target ? (df(this.b, d, a), cf(this.b, b, a)) : (b.target = e, b.relatedTarget = null, this.Re(a, b)));
            c.out = b;
            c.Th = b.target
        }
    };
    m.Ro = function(a) {
        qf(this, a);
        pf(this, a, this.ap)
    };
    m.ap = function(a, b) {
        bf(this.b, "pointerup", b, a);
        this.b.out(b, a);
        this.b.leave(b, a);
        delete this.c[b.pointerId];
        b.isPrimary && (this.f = void 0, this.j = setTimeout(this.li.bind(this), 200))
    };
    m.Qo = function(a) {
        pf(this, a, this.Re)
    };
    m.Re = function(a, b) {
        this.b.cancel(b, a);
        this.b.out(b, a);
        this.b.leave(b, a);
        delete this.c[b.pointerId];
        b.isPrimary && (this.f = void 0, this.j = setTimeout(this.li.bind(this), 200))
    };

    function qf(a, b) {
        var c = a.i.f,
            d = b.changedTouches[0];
        if (a.f === d.identifier) {
            var e = [d.clientX, d.clientY];
            c.push(e);
            setTimeout(function() {
                fb(c, e)
            }, 2500)
        }
    };

    function rf(a) {
        Sa.call(this);
        this.j = a;
        this.c = {};
        this.f = {};
        this.b = [];
        Ve ? sf(this, new hf(this)) : We ? sf(this, new ef(this)) : (a = new Ye(this), sf(this, a), Ue && sf(this, new nf(this, a)));
        a = this.b.length;
        for (var b, c = 0; c < a; c++) b = this.b[c], tf(this, Object.keys(b.g))
    }
    v(rf, Sa);

    function sf(a, b) {
        var c = Object.keys(b.g);
        c && (c.forEach(function(a) {
            var c = b.g[a];
            c && (this.f[a] = c.bind(b))
        }, a), a.b.push(b))
    }
    m = rf.prototype;
    m.Mh = function(a) {
        var b = this.f[a.type];
        b && b(a)
    };

    function tf(a, b) {
        b.forEach(function(a) {
            A(this.j, a, this.Mh, this)
        }, a)
    }

    function uf(a, b) {
        b.forEach(function(a) {
            Oa(this.j, a, this.Mh, this)
        }, a)
    }

    function af(a, b) {
        for (var c = {}, d, e = 0, f = vf.length; e < f; e++) d = vf[e][0], c[d] = a[d] || b[d] || vf[e][1];
        return c
    }
    m.move = function(a, b) {
        bf(this, "pointermove", a, b)
    };
    m.enter = function(a, b) {
        a.bubbles = !1;
        bf(this, "pointerenter", a, b)
    };
    m.leave = function(a, b) {
        a.bubbles = !1;
        bf(this, "pointerleave", a, b)
    };
    m.out = function(a, b) {
        a.bubbles = !0;
        bf(this, "pointerout", a, b)
    };
    m.cancel = function(a, b) {
        bf(this, "pointercancel", a, b)
    };

    function df(a, b, c) {
        a.out(b, c);
        var d = b.target,
            e = b.relatedTarget;
        d && e && d.contains(e) || a.leave(b, c)
    }

    function cf(a, b, c) {
        b.bubbles = !0;
        bf(a, "pointerover", b, c);
        var d = b.target,
            e = b.relatedTarget;
        d && e && d.contains(e) || a.enter(b, c)
    }

    function bf(a, b, c, d) {
        B(a, new gf(b, d, c))
    }

    function jf(a, b) {
        B(a, new gf(b.type, b, b))
    }
    m.qa = function() {
        for (var a = this.b.length, b, c = 0; c < a; c++) b = this.b[c], uf(this, Object.keys(b.g));
        Sa.prototype.qa.call(this)
    };
    var vf = [
        ["bubbles", !1],
        ["cancelable", !1],
        ["view", null],
        ["detail", null],
        ["screenX", 0],
        ["screenY", 0],
        ["clientX", 0],
        ["clientY", 0],
        ["ctrlKey", !1],
        ["altKey", !1],
        ["shiftKey", !1],
        ["metaKey", !1],
        ["button", 0],
        ["relatedTarget", null],
        ["buttons", 0],
        ["pointerId", 0],
        ["width", 0],
        ["height", 0],
        ["pressure", 0],
        ["tiltX", 0],
        ["tiltY", 0],
        ["pointerType", ""],
        ["hwTimestamp", 0],
        ["isPrimary", !1],
        ["type", ""],
        ["target", null],
        ["currentTarget", null],
        ["which", 0]
    ];

    function wf(a, b, c, d, e) {
        Ce.call(this, a, b, e);
        this.originalEvent = c;
        this.pixel = xf(b, c);
        this.coordinate = b.Ia(this.pixel);
        this.dragging = void 0 !== d ? d : !1
    }
    v(wf, Ce);
    wf.prototype.preventDefault = function() {
        Ce.prototype.preventDefault.call(this);
        this.originalEvent.preventDefault()
    };
    wf.prototype.stopPropagation = function() {
        Ce.prototype.stopPropagation.call(this);
        this.originalEvent.stopPropagation()
    };

    function yf(a, b, c, d, e) {
        wf.call(this, a, b, c.b, d, e);
        this.b = c
    }
    v(yf, wf);

    function zf(a) {
        Sa.call(this);
        this.f = a;
        this.o = 0;
        this.i = !1;
        this.j = [];
        this.b = null;
        a = this.f.c;
        this.s = 0;
        this.C = {};
        this.g = new rf(a);
        this.c = null;
        this.v = A(this.g, "pointerdown", this.zl, this);
        this.D = A(this.g, "pointermove", this.fo, this)
    }
    v(zf, Sa);

    function Af(a, b) {
        var c = new yf(Bf, a.f, b);
        B(a, c);
        0 !== a.o ? (clearTimeout(a.o), a.o = 0, c = new yf(Cf, a.f, b), B(a, c)) : a.o = setTimeout(function() {
            this.o = 0;
            var a = new yf(Df, this.f, b);
            B(this, a)
        }.bind(a), 250)
    }

    function Ef(a, b) {
        b.type == Ff || b.type == Gf ? delete a.C[b.pointerId] : b.type == Hf && (a.C[b.pointerId] = !0);
        a.s = Object.keys(a.C).length
    }
    m = zf.prototype;
    m.sh = function(a) {
        Ef(this, a);
        var b = new yf(Ff, this.f, a);
        B(this, b);
        this.i || 0 !== a.button || (console.assert(this.b, "this.down_ must be truthy"), Af(this, this.b));
        console.assert(0 <= this.s, "this.activePointers_ should be equal to or larger than 0");
        0 === this.s && (this.j.forEach(Ja), this.j.length = 0, this.i = !1, this.b = null, this.c.Ma(), this.c = null)
    };
    m.zl = function(a) {
        Ef(this, a);
        var b = new yf(Hf, this.f, a);
        B(this, b);
        this.b = a;
        0 === this.j.length && (this.c = new rf(document), this.j.push(A(this.c, If, this.Rm, this), A(this.c, Ff, this.sh, this), A(this.g, Gf, this.sh, this)))
    };
    m.Rm = function(a) {
        if (a.clientX != this.b.clientX || a.clientY != this.b.clientY) {
            this.i = !0;
            var b = new yf(Jf, this.f, a, this.i);
            B(this, b)
        }
        a.preventDefault()
    };
    m.fo = function(a) {
        B(this, new yf(a.type, this.f, a, !(!this.b || a.clientX == this.b.clientX && a.clientY == this.b.clientY)))
    };
    m.qa = function() {
        this.D && (Ja(this.D), this.D = null);
        this.v && (Ja(this.v), this.v = null);
        this.j.forEach(Ja);
        this.j.length = 0;
        this.c && (this.c.Ma(), this.c = null);
        this.g && (this.g.Ma(), this.g = null);
        Sa.prototype.qa.call(this)
    };
    var Df = "singleclick",
        Bf = "click",
        Cf = "dblclick",
        Jf = "pointerdrag",
        If = "pointermove",
        Hf = "pointerdown",
        Ff = "pointerup",
        Gf = "pointercancel",
        Kf = {
            Gp: Df,
            tp: Bf,
            up: Cf,
            yp: Jf,
            Bp: If,
            xp: Hf,
            Ep: Ff,
            Dp: "pointerover",
            Cp: "pointerout",
            zp: "pointerenter",
            Ap: "pointerleave",
            wp: Gf
        };

    function Lf(a, b) {
        Sa.call(this);
        this.Cb = a;
        this.state = b;
        this.b = null;
        this.key = ""
    }
    v(Lf, Sa);

    function Mf(a) {
        B(a, "change")
    }
    Lf.prototype.nc = function() {
        return this.key + "/" + this.Cb
    };

    function Nf(a) {
        if (!a.b) return a;
        var b = a.b;
        do {
            if (b.ia() == Of) return b;
            b = b.b
        } while (b);
        return a
    }
    Lf.prototype.ia = function() {
        return this.state
    };
    var Of = 2;

    function Pf(a, b) {
        this.v = a;
        this.o = b;
        this.b = [];
        this.f = [];
        this.c = {}
    }
    Pf.prototype.clear = function() {
        this.b.length = 0;
        this.f.length = 0;
        Fa(this.c)
    };
    Pf.prototype.i = function(a) {
        wa(!(this.o(a) in this.c), 31);
        var b = this.v(a);
        return Infinity != b ? (this.b.push(a), this.f.push(b), this.c[this.o(a)] = !0, Qf(this, 0, this.b.length - 1), !0) : !1
    };
    Pf.prototype.Fb = function() {
        return this.b.length
    };
    Pf.prototype.zb = function() {
        return 0 === this.b.length
    };

    function Rf(a, b) {
        for (var c = a.b, d = a.f, e = c.length, f = c[b], g = d[b], h = b; b < e >> 1;) {
            var k = 2 * b + 1,
                l = 2 * b + 2,
                k = l < e && d[l] < d[k] ? l : k;
            c[b] = c[k];
            d[b] = d[k];
            b = k
        }
        c[b] = f;
        d[b] = g;
        Qf(a, h, b)
    }

    function Qf(a, b, c) {
        var d = a.b;
        a = a.f;
        for (var e = d[c], f = a[c]; c > b;) {
            var g = c - 1 >> 1;
            if (a[g] > f) d[c] = d[g], a[c] = a[g], c = g;
            else break
        }
        d[c] = e;
        a[c] = f
    };

    function Sf(a, b) {
        Pf.call(this, function(b) {
            return a.apply(null, b)
        }, function(a) {
            return a[0].nc()
        });
        this.D = b;
        this.g = 0;
        this.j = {}
    }
    v(Sf, Pf);
    Sf.prototype.i = function(a) {
        var b = Pf.prototype.i.call(this, a);
        b && A(a[0], "change", this.s, this);
        return b
    };
    Sf.prototype.s = function(a) {
        a = a.target;
        var b = a.ia();
        if (b === Of || 3 === b || 4 === b || 5 === b) Oa(a, "change", this.s, this), a = a.nc(), a in this.j && (delete this.j[a], --this.g), this.D();
        console.assert(Object.keys(this.j).length === this.g)
    };

    function Tf(a, b, c) {
        this.j = a;
        this.f = b;
        this.o = c;
        this.b = [];
        this.c = this.g = 0
    }
    Tf.prototype.end = function() {
        if (6 > this.b.length) return !1;
        var a = Date.now() - this.o,
            b = this.b.length - 3;
        if (this.b[b + 2] < a) return !1;
        for (var c = b - 3; 0 < c && this.b[c + 2] > a;) c -= 3;
        var a = this.b[b + 2] - this.b[c + 2],
            d = this.b[b] - this.b[c],
            b = this.b[b + 1] - this.b[c + 1];
        this.g = Math.atan2(b, d);
        this.c = Math.sqrt(d * d + b * b) / a;
        return this.c > this.f
    };

    function Uf(a, b) {
        var c = a.j,
            d = a.c,
            e = a.f - d,
            f = Math.log(a.f / a.c) / a.j;
        return Fd({
            source: b,
            duration: f,
            Na: function(a) {
                return d * (Math.exp(c * a * f) - 1) / e
            }
        })
    };

    function Vf(a) {
        Xa.call(this);
        this.c = null;
        this.setActive(!0);
        this.handleEvent = a.handleEvent
    }
    v(Vf, Xa);
    Vf.prototype.getActive = function() {
        return this.get(Wf)
    };
    Vf.prototype.setActive = function(a) {
        this.set(Wf, a)
    };
    Vf.prototype.setMap = function(a) {
        this.c = a
    };

    function Xf(a, b, c, d, e) {
        if (void 0 !== c) {
            var f = ud(b),
                g = qd(b);
            void 0 !== f && g && e && 0 < e && (a.ab(Gd({
                rotation: f,
                duration: e,
                Na: Cd
            })), d && a.ab(Fd({
                source: g,
                duration: e,
                Na: Cd
            })));
            b.rotate(c, d)
        }
    }

    function Yf(a, b, c, d, e) {
        var f = td(b);
        c = b.mb(f, c, 0);
        Zf(a, b, c, d, e)
    }

    function Zf(a, b, c, d, e) {
        if (c) {
            var f = td(b),
                g = qd(b);
            void 0 !== f && g && c !== f && e && 0 < e && (a.ab(Hd({
                resolution: f,
                duration: e,
                Na: Cd
            })), d && a.ab(Fd({
                source: g,
                duration: e,
                Na: Cd
            })));
            if (d) {
                var h;
                a = qd(b);
                e = td(b);
                void 0 !== a && void 0 !== e && (h = [d[0] - c * (d[0] - a[0]) / e, d[1] - c * (d[1] - a[1]) / e]);
                zd(b, h)
            }
            b.set(od, c)
        }
    }
    var Wf = "active";

    function $f(a) {
        a = a ? a : {};
        this.f = a.ec ? a.ec : 1;
        Vf.call(this, {
            handleEvent: ag
        });
        this.g = void 0 !== a.duration ? a.duration : 250
    }
    v($f, Vf);

    function ag(a) {
        var b = !1,
            c = a.originalEvent;
        if (a.type == Cf) {
            var b = a.map,
                d = a.coordinate,
                c = c.shiftKey ? -this.f : this.f,
                e = D(b);
            Yf(b, e, c, d, this.g);
            a.preventDefault();
            b = !0
        }
        return !b
    };

    function bg(a) {
        a = a.originalEvent;
        return a.altKey && !(a.metaKey || a.ctrlKey) && a.shiftKey
    }

    function cg(a) {
        a = a.originalEvent;
        return 0 == a.button && !(Oe && Pe && a.ctrlKey)
    }

    function dg(a) {
        a = a.originalEvent;
        return !a.altKey && !(a.metaKey || a.ctrlKey) && !a.shiftKey
    }

    function eg(a) {
        a = a.originalEvent;
        return !a.altKey && (Pe ? a.metaKey : a.ctrlKey) && !a.shiftKey
    }

    function fg(a) {
        a = a.originalEvent;
        return !a.altKey && !(a.metaKey || a.ctrlKey) && a.shiftKey
    }

    function gg(a) {
        a = a.originalEvent.target.tagName;
        return "INPUT" !== a && "SELECT" !== a && "TEXTAREA" !== a
    }

    function hg(a) {
        wa(a.b, 56);
        return "mouse" == a.b.pointerType
    }

    function ig(a) {
        a = a.b;
        return a.isPrimary && 0 === a.button
    };

    function jg(a) {
        a = a ? a : {};
        Vf.call(this, {
            handleEvent: a.handleEvent ? a.handleEvent : kg
        });
        this.Ac = a.Va ? a.Va : bc;
        this.Ye = a.pb ? a.pb : ta;
        this.cf = a.Af ? a.Af : ta;
        this.ff = a.Wa ? a.Wa : bc;
        this.D = !1;
        this.fa = {};
        this.o = []
    }
    v(jg, Vf);

    function lg(a) {
        for (var b = a.length, c = 0, d = 0, e = 0; e < b; e++) c += a[e].clientX, d += a[e].clientY;
        return [c / b, d / b]
    }

    function kg(a) {
        if (!(a instanceof yf)) return !0;
        var b = !1,
            c = a.type;
        if (c === Hf || c === Jf || c === Ff) c = a.b, a.type == Ff ? delete this.fa[c.pointerId] : a.type == Hf ? this.fa[c.pointerId] = c : c.pointerId in this.fa && (this.fa[c.pointerId] = c), this.o = Ga(this.fa);
        this.D && (a.type == Jf ? this.Ye(a) : a.type == Ff && (this.D = this.ff(a)));
        a.type == Hf ? (this.D = a = this.Ac(a), b = this.sc(a)) : a.type == If && this.cf(a);
        return !b
    }
    jg.prototype.sc = function(a) {
        return a
    };

    function mg(a) {
        jg.call(this, {
            Va: ng,
            pb: og,
            Wa: pg
        });
        a = a ? a : {};
        this.f = a.Yl;
        this.g = this.i = null;
        this.v = a.ta ? a.ta : dg;
        this.s = !1
    }
    v(mg, jg);

    function og(a) {
        console.assert(1 <= this.o.length, "the length of this.targetPointers should be more than 1");
        var b = lg(this.o);
        this.f && this.f.b.push(b[0], b[1], Date.now());
        if (this.g) {
            var c = this.g[0] - b[0],
                d = b[1] - this.g[1];
            a = D(a.map);
            var e = a.ia(),
                d = c = [c, d],
                f = e.resolution;
            d[0] *= f;
            d[1] *= f;
            yb(c, e.rotation);
            tb(c, e.center);
            c = a.g.center(c);
            zd(a, c)
        }
        this.g = b
    }

    function pg(a) {
        var b = a.map;
        a = D(b);
        if (0 === this.o.length) {
            if (!this.s && this.f && this.f.end()) {
                var c;
                c = this.f;
                c = (c.f - c.c) / c.j;
                var d = this.f.g,
                    e = qd(a);
                this.i = Uf(this.f, e);
                b.ab(this.i);
                e = qg(b, e);
                b = b.Ia([e[0] - c * Math.cos(d), e[1] - c * Math.sin(d)]);
                b = a.g.center(b);
                zd(a, b)
            } else b.render();
            Ad(a, -1);
            return !1
        }
        this.g = null;
        return !0
    }

    function ng(a) {
        if (0 < this.o.length && this.v(a)) {
            var b = a.map,
                c = D(b);
            this.g = null;
            this.D || Ad(c, 1);
            this.i && fb(b.N, this.i) && (zd(c, a.frameState.da.center), this.i = null);
            this.f && (a = this.f, a.b.length = 0, a.g = 0, a.c = 0);
            this.s = 1 < this.o.length;
            return !0
        }
        return !1
    }
    mg.prototype.sc = bc;

    function rg(a) {
        a = a ? a : {};
        jg.call(this, {
            Va: sg,
            pb: tg,
            Wa: ug
        });
        this.g = a.ta ? a.ta : bg;
        this.f = void 0;
        this.i = void 0 !== a.duration ? a.duration : 250
    }
    v(rg, jg);

    function tg(a) {
        if (hg(a)) {
            var b = a.map,
                c = vg(b);
            a = a.pixel;
            c = Math.atan2(c[1] / 2 - a[1], a[0] - c[0] / 2);
            if (void 0 !== this.f) {
                a = c - this.f;
                var d = D(b),
                    e = ud(d);
                Xf(b, d, e - a)
            }
            this.f = c
        }
    }

    function ug(a) {
        if (!hg(a)) return !0;
        a = a.map;
        var b = D(a);
        Ad(b, -1);
        var c = ud(b),
            d = this.i,
            c = b.We(c, 0);
        Xf(a, b, c, void 0, d);
        return !1
    }

    function sg(a) {
        return hg(a) && cg(a) && this.g(a) ? (Ad(D(a.map), 1), this.f = void 0, !0) : !1
    }
    rg.prototype.sc = bc;

    function wg(a) {
        this.j = null;
        this.c = document.createElement("div");
        this.c.style.position = "absolute";
        this.c.className = "ol-box " + a;
        this.f = this.g = this.b = null
    }
    v(wg, Pa);
    wg.prototype.qa = function() {
        this.setMap(null)
    };

    function xg(a) {
        var b = a.g,
            c = a.f;
        a = a.c.style;
        a.left = Math.min(b[0], c[0]) + "px";
        a.top = Math.min(b[1], c[1]) + "px";
        a.width = Math.abs(c[0] - b[0]) + "px";
        a.height = Math.abs(c[1] - b[1]) + "px"
    }
    wg.prototype.setMap = function(a) {
        if (this.b) {
            this.b.C.removeChild(this.c);
            var b = this.c.style;
            b.left = b.top = b.width = b.height = "inherit"
        }(this.b = a) && this.b.C.appendChild(this.c)
    };

    function yg(a) {
        var b = a.g,
            c = a.f,
            b = [b, [b[0], c[1]], c, [c[0], b[1]]].map(a.b.Ia, a.b);
        b[4] = b[0].slice();
        a.j ? a.j.ba([b]) : a.j = new bd([b])
    }
    wg.prototype.G = function() {
        return this.j
    };

    function zg(a) {
        jg.call(this, {
            Va: Ag,
            pb: Bg,
            Wa: Cg
        });
        a = a ? a : {};
        this.f = new wg(a.className || "ol-dragbox");
        this.g = null;
        this.C = a.ta ? a.ta : ac;
        this.v = a.Hj ? a.Hj : Dg
    }
    v(zg, jg);

    function Dg(a, b, c) {
        a = c[0] - b[0];
        b = c[1] - b[1];
        return 64 <= a * a + b * b
    }

    function Bg(a) {
        if (hg(a)) {
            var b = this.f,
                c = a.pixel;
            b.g = this.g;
            b.f = c;
            yg(b);
            xg(b);
            B(this, new Eg(Fg, a.coordinate, a))
        }
    }
    zg.prototype.G = function() {
        return this.f.G()
    };
    zg.prototype.s = ta;

    function Cg(a) {
        if (!hg(a)) return !0;
        this.f.setMap(null);
        this.v(a, this.g, a.pixel) && (this.s(a), B(this, new Eg(Gg, a.coordinate, a)));
        return !1
    }

    function Ag(a) {
        if (hg(a) && cg(a) && this.C(a)) {
            this.g = a.pixel;
            this.f.setMap(a.map);
            var b = this.f,
                c = this.g;
            b.g = this.g;
            b.f = c;
            yg(b);
            xg(b);
            B(this, new Eg(Hg, a.coordinate, a));
            return !0
        }
        return !1
    }
    var Hg = "boxstart",
        Fg = "boxdrag",
        Gg = "boxend";

    function Eg(a, b, c) {
        Qa.call(this, a);
        this.coordinate = b;
        this.mapBrowserEvent = c
    }
    v(Eg, Qa);

    function Ig(a) {
        a = a ? a : {};
        var b = a.ta ? a.ta : fg;
        this.i = void 0 !== a.duration ? a.duration : 200;
        this.F = void 0 !== a.out ? a.out : !1;
        zg.call(this, {
            ta: b,
            className: a.className || "ol-dragzoom"
        })
    }
    v(Ig, zg);
    Ig.prototype.s = function() {
        var a = this.c,
            b = D(a),
            c = vg(a),
            d = this.G().K();
        if (this.F) {
            var e = sd(b, c),
                d = [qg(a, Qb(d)), qg(a, [d[2], d[3]])],
                f = Kb(void 0),
                g, h;
            g = 0;
            for (h = d.length; g < h; ++g) Db(f, d[g]);
            f = 1 / vd(f, c);
            d = (e[2] - e[0]) / 2 * (f - 1);
            f = (e[3] - e[1]) / 2 * (f - 1);
            e[0] -= d;
            e[2] += d;
            e[1] -= f;
            e[3] += f;
            d = e
        }
        c = b.mb(vd(d, c));
        e = td(b);
        f = qd(b);
        a.ab(Hd({
            resolution: e,
            duration: this.i,
            Na: Cd
        }));
        a.ab(Fd({
            source: f,
            duration: this.i,
            Na: Cd
        }));
        zd(b, Wb(d));
        b.set(od, c)
    };

    function Jg(a) {
        Vf.call(this, {
            handleEvent: Kg
        });
        a = a || {};
        this.f = function(a) {
            return dg(a) && gg(a)
        };
        this.g = void 0 !== a.ta ? a.ta : this.f;
        this.o = void 0 !== a.duration ? a.duration : 100;
        this.i = void 0 !== a.wn ? a.wn : 128
    }
    v(Jg, Vf);

    function Kg(a) {
        var b = !1;
        if ("keydown" == a.type) {
            var c = a.originalEvent.keyCode;
            if (this.g(a) && (40 == c || 37 == c || 39 == c || 38 == c)) {
                var d = a.map,
                    b = D(d),
                    e = td(b) * this.i,
                    f = 0,
                    g = 0;
                40 == c ? g = -e : 37 == c ? f = -e : 39 == c ? f = e : g = e;
                c = [f, g];
                yb(c, ud(b));
                e = this.o;
                if (f = qd(b)) e && 0 < e && d.ab(Fd({
                    source: f,
                    duration: e,
                    Na: Ed
                })), d = b.g.center([f[0] + c[0], f[1] + c[1]]), zd(b, d);
                a.preventDefault();
                b = !0
            }
        }
        return !b
    };

    function Lg(a) {
        Vf.call(this, {
            handleEvent: Mg
        });
        a = a ? a : {};
        this.g = a.ta ? a.ta : gg;
        this.f = a.ec ? a.ec : 1;
        this.o = void 0 !== a.duration ? a.duration : 100
    }
    v(Lg, Vf);

    function Mg(a) {
        var b = !1;
        if ("keydown" == a.type || "keypress" == a.type) {
            var c = a.originalEvent.charCode;
            if (this.g(a) && (43 == c || 45 == c)) {
                var b = a.map,
                    c = 43 == c ? this.f : -this.f,
                    d = D(b);
                Yf(b, d, c, void 0, this.o);
                a.preventDefault();
                b = !0
            }
        }
        return !b
    };

    function Ng(a) {
        Vf.call(this, {
            handleEvent: Og
        });
        a = a || {};
        this.f = 0;
        this.v = void 0 !== a.duration ? a.duration : 250;
        this.D = void 0 !== a.timeout ? a.timeout : 80;
        this.C = void 0 !== a.gp ? a.gp : !0;
        this.o = null;
        this.i = this.g = void 0
    }
    v(Ng, Vf);

    function Og(a) {
        var b = !1;
        if ("wheel" == a.type || "mousewheel" == a.type) {
            var b = a.map,
                c = a.originalEvent;
            this.C && (this.o = a.coordinate);
            var d;
            "wheel" == a.type ? (d = c.deltaY, Me && c.deltaMode === WheelEvent.DOM_DELTA_PIXEL && (d /= Qe), c.deltaMode === WheelEvent.DOM_DELTA_LINE && (d *= 40)) : "mousewheel" == a.type && (d = -c.wheelDeltaY, Ne && (d /= 3));
            this.f += d;
            void 0 === this.g && (this.g = Date.now());
            d = Math.max(this.D - (Date.now() - this.g), 0);
            clearTimeout(this.i);
            this.i = setTimeout(this.s.bind(this, b), d);
            a.preventDefault();
            b = !0
        }
        return !b
    }
    Ng.prototype.s = function(a) {
        var b = xa(this.f, -1, 1),
            c = D(a);
        Yf(a, c, -b, this.o, this.v);
        this.f = 0;
        this.o = null;
        this.i = this.g = void 0
    };

    function Pg(a) {
        jg.call(this, {
            Va: Qg,
            pb: Rg,
            Wa: Sg
        });
        a = a || {};
        this.g = null;
        this.i = void 0;
        this.f = !1;
        this.s = 0;
        this.C = void 0 !== a.threshold ? a.threshold : .3;
        this.v = void 0 !== a.duration ? a.duration : 250
    }
    v(Pg, jg);

    function Rg(a) {
        console.assert(2 <= this.o.length, "length of this.targetPointers should be greater than or equal to 2");
        var b = 0,
            c = this.o[0],
            d = this.o[1],
            c = Math.atan2(d.clientY - c.clientY, d.clientX - c.clientX);
        void 0 !== this.i && (b = c - this.i, this.s += b, !this.f && Math.abs(this.s) > this.C && (this.f = !0));
        this.i = c;
        a = a.map;
        c = a.c.getBoundingClientRect();
        d = lg(this.o);
        d[0] -= c.left;
        d[1] -= c.top;
        this.g = a.Ia(d);
        this.f && (c = D(a), d = ud(c), a.render(), Xf(a, c, d + b, this.g))
    }

    function Sg(a) {
        if (2 > this.o.length) {
            a = a.map;
            var b = D(a);
            Ad(b, -1);
            if (this.f) {
                var c = ud(b),
                    d = this.g,
                    e = this.v,
                    c = b.We(c, 0);
                Xf(a, b, c, d, e)
            }
            return !1
        }
        return !0
    }

    function Qg(a) {
        return 2 <= this.o.length ? (a = a.map, this.g = null, this.i = void 0, this.f = !1, this.s = 0, this.D || Ad(D(a), 1), a.render(), !0) : !1
    }
    Pg.prototype.sc = bc;

    function Tg(a) {
        jg.call(this, {
            Va: Ug,
            pb: Vg,
            Wa: Wg
        });
        a = a ? a : {};
        this.g = null;
        this.s = void 0 !== a.duration ? a.duration : 400;
        this.f = void 0;
        this.i = 1
    }
    v(Tg, jg);

    function Vg(a) {
        console.assert(2 <= this.o.length, "length of this.targetPointers should be 2 or more");
        var b = 1,
            c = this.o[0],
            d = this.o[1],
            e = c.clientX - d.clientX,
            c = c.clientY - d.clientY,
            e = Math.sqrt(e * e + c * c);
        void 0 !== this.f && (b = this.f / e);
        this.f = e;
        1 != b && (this.i = b);
        a = a.map;
        var e = D(a),
            c = td(e),
            d = a.c.getBoundingClientRect(),
            f = lg(this.o);
        f[0] -= d.left;
        f[1] -= d.top;
        this.g = a.Ia(f);
        a.render();
        Zf(a, e, c * b, this.g)
    }

    function Wg(a) {
        if (2 > this.o.length) {
            a = a.map;
            var b = D(a);
            Ad(b, -1);
            var c = td(b),
                d = this.g,
                e = this.s,
                c = b.mb(c, 0, this.i - 1);
            Zf(a, b, c, d, e);
            return !1
        }
        return !0
    }

    function Ug(a) {
        return 2 <= this.o.length ? (a = a.map, this.g = null, this.f = void 0, this.i = 1, this.D || Ad(D(a), 1), a.render(), !0) : !1
    }
    Tg.prototype.sc = bc;

    function Xg(a) {
        a = a ? a : {};
        var b = new ie,
            c = new Tf(-.005, .05, 100);
        (void 0 !== a.yj ? a.yj : 1) && b.push(new rg);
        (void 0 !== a.jk ? a.jk : 1) && b.push(new $f({
            ec: a.op,
            duration: a.Ie
        }));
        (void 0 !== a.mk ? a.mk : 1) && b.push(new mg({
            Yl: c
        }));
        (void 0 !== a.un ? a.un : 1) && b.push(new Pg);
        (void 0 !== a.vn ? a.vn : 1) && b.push(new Tg({
            duration: a.Ie
        }));
        if (void 0 !== a.Xl ? a.Xl : 1) b.push(new Jg), b.push(new Lg({
            ec: a.op,
            duration: a.Ie
        }));
        (void 0 !== a.Kf ? a.Kf : 1) && b.push(new Ng({
            duration: a.Ie
        }));
        (void 0 !== a.zo ? a.zo : 1) && b.push(new Ig({
            duration: a.Ie
        }));
        return b
    };

    function Yg(a) {
        Xa.call(this);
        var b = Ea({}, a);
        b.opacity = void 0 !== a.opacity ? a.opacity : 1;
        b.visible = void 0 !== a.visible ? a.visible : !0;
        b.zIndex = void 0 !== a.zIndex ? a.zIndex : 0;
        b.maxResolution = void 0 !== a.Ib ? a.Ib : Infinity;
        b.minResolution = void 0 !== a.Bb ? a.Bb : 0;
        this.Ga(b);
        this.f = {
            layer: this,
            If: !0
        }
    }
    v(Yg, Xa);

    function Zg(a) {
        a.f.opacity = xa($g(a), 0, 1);
        a.f.Go = a.yf();
        a.f.visible = ah(a);
        a.f.extent = a.K();
        a.f.zIndex = a.get("zIndex");
        a.f.Ib = a.get("maxResolution");
        a.f.Bb = Math.max(a.get("minResolution"), 0);
        return a.f
    }
    Yg.prototype.K = function() {
        return this.get("extent")
    };

    function $g(a) {
        return a.get("opacity")
    }

    function ah(a) {
        return a.get("visible")
    }

    function bh(a, b) {
        a.set("visible", b)
    };

    function ch(a) {
        var b = a || {};
        a = Ea({}, b);
        delete a.layers;
        b = b.layers;
        Yg.call(this, a);
        this.g = [];
        this.c = {};
        A(this, Za(dh), this.ql, this);
        b ? Array.isArray(b) ? b = new ie(b.slice()) : wa(b instanceof ie, 43) : b = new ie;
        this.set(dh, b)
    }
    v(ch, Yg);
    m = ch.prototype;
    m.be = function() {
        ah(this) && this.b()
    };
    m.ql = function() {
        this.g.forEach(Ja);
        this.g.length = 0;
        var a = eh(this);
        this.g.push(A(a, ne, this.ol, this), A(a, pe, this.rl, this));
        for (var b in this.c) this.c[b].forEach(Ja);
        Fa(this.c);
        var a = a.c,
            c, d;
        b = 0;
        for (c = a.length; b < c; b++) d = a[b], this.c[x(d).toString()] = [A(d, "propertychange", this.be, this), A(d, "change", this.be, this)];
        this.b()
    };
    m.ol = function(a) {
        a = a.element;
        var b = x(a).toString();
        console.assert(!(b in this.c), "listeners already registered");
        this.c[b] = [A(a, "propertychange", this.be, this), A(a, "change", this.be, this)];
        this.b()
    };
    m.rl = function(a) {
        a = x(a.element).toString();
        console.assert(a in this.c, "no listeners to unregister");
        this.c[a].forEach(Ja);
        delete this.c[a];
        this.b()
    };

    function eh(a) {
        return a.get(dh)
    }
    m.tf = function(a) {
        var b = void 0 !== a ? a : [],
            c = b.length;
        eh(this).forEach(function(a) {
            a.tf(b)
        });
        a = Zg(this);
        var d, e;
        for (d = b.length; c < d; c++) e = b[c], e.opacity *= a.opacity, e.visible = e.visible && a.visible, e.Ib = Math.min(e.Ib, a.Ib), e.Bb = Math.max(e.Bb, a.Bb), void 0 !== a.extent && (e.extent = void 0 !== e.extent ? Yb(e.extent, a.extent) : a.extent);
        return b
    };
    m.yf = function() {
        return "ready"
    };
    var dh = "layers";

    function fh(a) {
        gc.call(this, {
            code: a,
            units: "m",
            extent: gh,
            global: !0,
            ip: hh
        })
    }
    v(fh, gc);
    fh.prototype.gc = function(a, b) {
        return a / ya(b[1] / 6378137)
    };
    var ih = 6378137 * Math.PI,
        gh = [-ih, -ih, ih, ih],
        hh = [-180, -85, 180, 85],
        jh = "EPSG:3857 EPSG:102100 EPSG:102113 EPSG:900913 urn:ogc:def:crs:EPSG:6.18:3:3857 urn:ogc:def:crs:EPSG::3857 http://www.opengis.net/gml/srs/epsg.xml#3857".split(" ").map(function(a) {
            return new fh(a)
        });

    function kh(a, b, c) {
        var d = a.length;
        c = 1 < c ? c : 2;
        void 0 === b && (2 < c ? b = a.slice() : b = Array(d));
        console.assert(0 === b.length % c, "modulus of output.length with dimension should be 0");
        for (var e = 0; e < d; e += c) {
            b[e] = ih * a[e] / 180;
            var f = 6378137 * Math.log(Math.tan(Math.PI * (a[e + 1] + 90) / 360));
            f > ih ? f = ih : f < -ih && (f = -ih);
            b[e + 1] = f
        }
        return b
    }

    function lh(a, b, c) {
        var d = a.length;
        c = 1 < c ? c : 2;
        void 0 === b && (2 < c ? b = a.slice() : b = Array(d));
        console.assert(0 === b.length % c, "modulus of output.length with dimension should be 0");
        for (var e = 0; e < d; e += c) b[e] = 180 * a[e] / ih, b[e + 1] = 360 * Math.atan(Math.exp(a[e + 1] / 6378137)) / Math.PI - 90;
        return b
    };
    var mh = new cc(6378137);

    function nh(a, b) {
        gc.call(this, {
            code: a,
            units: "degrees",
            extent: oh,
            Qe: b,
            global: !0,
            Ah: ph,
            ip: oh
        })
    }
    v(nh, gc);
    nh.prototype.gc = function(a) {
        return a
    };
    var oh = [-180, -90, 180, 90],
        ph = Math.PI * mh.radius / 180,
        qh = [new nh("CRS:84"), new nh("EPSG:4326", "neu"), new nh("urn:ogc:def:crs:EPSG::4326", "neu"), new nh("urn:ogc:def:crs:EPSG:6.6:4326", "neu"), new nh("urn:ogc:def:crs:OGC:1.3:CRS84"), new nh("urn:ogc:def:crs:OGC:2:84"), new nh("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"), new nh("urn:x-ogc:def:crs:EPSG:4326", "neu")];

    function rh(a, b, c, d, e) {
        Qa.call(this, a);
        this.vectorContext = b;
        this.frameState = c;
        this.context = d;
        this.glContext = e
    }
    v(rh, Qa);

    function sh(a) {
        var b = Ea({}, a);
        delete b.source;
        Yg.call(this, b);
        this.o = this.g = this.c = null;
        a.map && this.setMap(a.map);
        A(this, Za("source"), this.Gl, this);
        this.set("source", a.source ? a.source : null)
    }
    v(sh, Yg);
    m = sh.prototype;
    m.tf = function(a) {
        a = a ? a : [];
        a.push(Zg(this));
        return a
    };

    function C(a) {
        return a.get("source") || null
    }
    m.yf = function() {
        var a = C(this);
        return a ? a.ia() : "undefined"
    };
    m.$m = function() {
        this.b()
    };
    m.Gl = function() {
        this.o && (Ja(this.o), this.o = null);
        var a = C(this);
        a && (this.o = A(a, "change", this.$m, this));
        this.b()
    };
    m.setMap = function(a) {
        this.c && (Ja(this.c), this.c = null);
        a || this.b();
        this.g && (Ja(this.g), this.g = null);
        a && (this.c = A(a, "precompose", function(a) {
            var c = Zg(this);
            c.If = !1;
            c.zIndex = Infinity;
            a.frameState.fe.push(c);
            a.frameState.ee[x(this)] = c
        }, this), this.g = A(this, "change", a.render, a), this.b())
    };

    function th() {
        this.b = {};
        this.c = 0
    }

    function uh(a, b, c) {
        console.assert(void 0 !== b, "argument crossOrigin must be defined");
        return b + ":" + a + ":" + (c ? we(c) : "null")
    }
    th.prototype.clear = function() {
        this.b = {};
        this.c = 0
    };
    th.prototype.expire = function() {
        if (32 < this.c) {
            var a = 0,
                b, c;
            for (b in this.b) c = this.b[b], 0 !== (a++ & 3) || Ta(c) || (delete this.b[b], --this.c)
        }
    };
    th.prototype.get = function(a, b, c) {
        a = uh(a, b, c);
        return a in this.b ? this.b[a] : null
    };
    th.prototype.set = function(a, b, c, d) {
        a = uh(a, b, c);
        this.b[a] = d;
        ++this.c
    };
    var vh = new th;
    var wh = Array(6);

    function xh() {
        return [1, 0, 0, 1, 0, 0]
    }

    function zh(a, b) {
        var c = a[0],
            d = a[1],
            e = a[2],
            f = a[3],
            g = a[4],
            h = a[5],
            k = b[0],
            l = b[1],
            n = b[2],
            q = b[3],
            p = b[4],
            r = b[5];
        a[0] = c * k + e * l;
        a[1] = d * k + f * l;
        a[2] = c * n + e * q;
        a[3] = d * n + f * q;
        a[4] = c * p + e * r + g;
        a[5] = d * p + f * r + h
    }

    function Ah(a, b, c, d, e) {
        a[0] = b;
        a[1] = 0;
        a[2] = 0;
        a[3] = c;
        a[4] = d;
        a[5] = e;
        return a
    }

    function Bh(a, b) {
        a[0] = b[0];
        a[1] = b[1];
        a[2] = b[2];
        a[3] = b[3];
        a[4] = b[4];
        a[5] = b[5];
        return a
    }

    function Ch(a, b) {
        var c = b[0],
            d = b[1];
        b[0] = a[0] * c + a[2] * d + a[4];
        b[1] = a[1] * c + a[3] * d + a[5];
        return b
    }

    function Dh(a, b, c, d, e, f, g, h) {
        var k = Math.sin(f);
        f = Math.cos(f);
        a[0] = d * f;
        a[1] = e * k;
        a[2] = -d * k;
        a[3] = e * f;
        a[4] = g * d * f - h * d * k + b;
        a[5] = g * e * k + h * e * f + c;
        return a
    };

    function Eh(a, b) {
        this.o = b;
        this.c = {};
        this.f = {}
    }
    v(Eh, Pa);
    m = Eh.prototype;
    m.qa = function() {
        for (var a in this.c) this.c[a].Ma()
    };

    function Fh() {
        vh.expire()
    }
    m.xb = function(a, b, c, d, e, f) {
        function g(a, e) {
            var f = x(a).toString(),
                g = b.ee[x(e)].If;
            if (!(f in b.kg) || g) return c.call(d, a, g ? e : null)
        }
        var h, k = b.da,
            l = k.resolution,
            n = k.projection,
            k = a;
        if (n.f) {
            var n = n.K(),
                q = Ub(n),
                p = a[0];
            if (p < n[0] || p > n[2]) k = [p + q * Math.ceil((n[0] - p) / q), a[1]]
        }
        n = b.fe;
        for (q = n.length - 1; 0 <= q; --q) {
            var r = n[q],
                p = r.layer;
            if (r.visible && l >= r.Bb && l < r.Ib && e.call(f, p) && (r = Gh(this, p), C(p) && (h = r.xb(C(p).F ? k : a, b, g, d)), h)) return h
        }
    };

    function Gh(a, b) {
        var c = x(b).toString();
        if (c in a.c) return a.c[c];
        var d = Hh(b);
        a.c[c] = d;
        a.f[c] = A(d, "change", a.nl, a);
        return d
    }
    m.nl = function() {
        this.o.render()
    };
    m.ki = ta;
    m.jo = function(a, b) {
        for (var c in this.c)
            if (!(b && c in b.ee)) {
                var d = c;
                console.assert(d in this.c, "given layerKey (%s) exists in layerRenderers", d);
                var e = this.c[d];
                delete this.c[d];
                console.assert(d in this.f, "given layerKey (%s) exists in layerRendererListeners", d);
                Ja(this.f[d]);
                delete this.f[d];
                e.Ma()
            }
    };

    function jb(a, b) {
        return a.zIndex - b.zIndex
    };

    function Ih(a) {
        sh.call(this, a ? a : {})
    }
    v(Ih, sh);

    function Jh(a) {
        a = a ? a : {};
        var b = Ea({}, a);
        delete b.ne;
        delete b.Ci;
        sh.call(this, b);
        this.set(Kh, void 0 !== a.ne ? a.ne : 0);
        this.set(Lh, void 0 !== a.Ci ? a.Ci : !0)
    }
    v(Jh, sh);
    var Kh = "preload",
        Lh = "useInterimTilesOnError";

    function Mh(a, b, c, d, e) {
        Sa.call(this);
        this.o = e;
        this.extent = a;
        this.j = c;
        this.resolution = b;
        this.state = d
    }
    v(Mh, Sa);

    function Nh(a) {
        B(a, "change")
    }
    Mh.prototype.K = function() {
        return this.extent
    };

    function Oh(a) {
        console.assert(void 0 !== a.resolution, "resolution not yet set");
        return a.resolution
    }
    Mh.prototype.ia = function() {
        return this.state
    };

    function Ph(a, b, c, d, e, f, g) {
        Mh.call(this, a, b, c, Qh, d);
        this.s = e;
        this.b = new Image;
        null !== f && (this.b.crossOrigin = f);
        this.f = {};
        this.c = null;
        this.state = Qh;
        this.i = g
    }
    v(Ph, Mh);
    Ph.prototype.g = function(a) {
        if (void 0 !== a) {
            var b;
            a = x(a);
            if (a in this.f) return this.f[a];
            Ha(this.f) ? b = this.b : b = this.b.cloneNode(!1);
            return this.f[a] = b
        }
        return this.b
    };
    Ph.prototype.v = function() {
        this.state = Rh;
        this.c.forEach(Ja);
        this.c = null;
        Nh(this)
    };
    Ph.prototype.D = function() {
        void 0 === this.resolution && (this.resolution = Vb(this.extent) / this.b.height);
        this.state = Sh;
        this.c.forEach(Ja);
        this.c = null;
        Nh(this)
    };
    Ph.prototype.load = function() {
        if (this.state == Qh || this.state == Rh) this.state = Th, Nh(this), console.assert(!this.c, "this.imageListenerKeys_ should be null"), this.c = [A(this.b, "error", this.v, this, !0), A(this.b, "load", this.D, this, !0)], this.i(this, this.s)
    };
    var Qh = 0,
        Th = 1,
        Sh = 2,
        Rh = 3;
    var Uh = [0, 0, 0, 1],
        Vh = [],
        Wh = [0, 0, 0, 1];

    function Xh(a, b, c, d) {
        0 !== b && (a.translate(c, d), a.rotate(b), a.translate(-c, -d))
    };

    function Yh(a) {
        this.g = a.opacity;
        this.F = a.ub;
        this.s = a.rotation;
        this.ga = a.scale;
        this.C = a.fb
    }
    Yh.prototype.Da = function() {
        return this.ga
    };

    function Zh(a) {
        a = a || {};
        this.D = a.Oe;
        this.i = this.j = this.o = null;
        this.c = void 0 !== a.fill ? a.fill : null;
        this.b = void 0 !== a.stroke ? a.stroke : null;
        this.f = a.radius;
        this.V = [0, 0];
        this.O = this.H = this.v = null;
        var b = this.D,
            c, d = null,
            e, f = 0;
        this.b && (e = ye(this.b.b), f = this.b.c, void 0 === f && (f = 1), d = this.b.f, Re || (d = null));
        var g = 2 * (this.f + f) + 1;
        e = {
            strokeStyle: e,
            strokeWidth: f,
            size: g,
            X: d
        };
        if (void 0 === b) b = Ae(g, g), this.j = b.canvas, c = g = this.j.width, this.Qh(e, b, 0, 0), this.c ? this.i = this.j : (b = Ae(e.size, e.size), this.i = b.canvas, this.Ph(e,
            b, 0, 0));
        else {
            g = Math.round(g);
            (d = !this.c) && (c = this.Ph.bind(this, e));
            var f = this.b ? ai(this.b) : "-",
                h = this.c ? bi(this.c) : "-";
            this.o && f == this.o[1] && h == this.o[2] && this.f == this.o[3] || (this.o = ["c" + f + h + (void 0 !== this.f ? this.f.toString() : "-"), f, h, this.f]);
            b = b.add(this.o[0], g, g, this.Qh.bind(this, e), c);
            console.assert(b, "circle radius is too large");
            this.j = b.image;
            this.V = [b.offsetX, b.offsetY];
            c = b.image.width;
            this.i = d ? b.b : this.j
        }
        this.v = [g / 2, g / 2];
        this.H = [g, g];
        this.O = [c, c];
        Yh.call(this, {
            opacity: 1,
            ub: !1,
            rotation: 0,
            scale: 1,
            fb: void 0 !== a.fb ? a.fb : !0
        })
    }
    v(Zh, Yh);
    m = Zh.prototype;
    m.clone = function() {
        var a = new Zh({
            fill: this.c ? this.c.clone() : void 0,
            stroke: this.b ? this.b.clone() : void 0,
            radius: this.f,
            fb: this.C,
            Oe: this.D
        });
        a.g = this.g;
        a.ga = this.Da();
        return a
    };
    m.Yc = function() {
        return this.v
    };
    m.Pf = function() {
        return this.i
    };
    m.gd = function() {
        return this.j
    };
    m.Kc = function() {
        return Sh
    };
    m.Ud = function() {
        return this.O
    };
    m.hd = function() {
        return this.V
    };
    m.Jb = function() {
        return this.H
    };
    m.Gf = ta;
    m.load = ta;
    m.pg = ta;
    m.Qh = function(a, b, c, d) {
        b.setTransform(1, 0, 0, 1, 0, 0);
        b.translate(c, d);
        b.beginPath();
        b.arc(a.size / 2, a.size / 2, this.f, 0, 2 * Math.PI, !0);
        this.c && (b.fillStyle = ye(this.c.b), b.fill());
        this.b && (b.strokeStyle = a.strokeStyle, b.lineWidth = a.strokeWidth, a.X && b.setLineDash(a.X), b.stroke());
        b.closePath()
    };
    m.Ph = function(a, b, c, d) {
        b.setTransform(1, 0, 0, 1, 0, 0);
        b.translate(c, d);
        b.beginPath();
        b.arc(a.size / 2, a.size / 2, this.f, 0, 2 * Math.PI, !0);
        b.fillStyle = we(Uh);
        b.fill();
        this.b && (b.strokeStyle = a.strokeStyle, b.lineWidth = a.strokeWidth, a.X && b.setLineDash(a.X), b.stroke());
        b.closePath()
    };

    function ci(a) {
        a = a || {};
        this.b = void 0 !== a.color ? a.color : null;
        this.c = void 0
    }
    ci.prototype.clone = function() {
        var a = this.b;
        return new ci({
            color: a && a.slice ? a.slice() : a || void 0
        })
    };
    ci.prototype.eg = function(a) {
        this.b = a;
        this.c = void 0
    };

    function bi(a) {
        void 0 === a.c && (a.c = a.b instanceof CanvasPattern || a.b instanceof CanvasGradient ? x(a.b).toString() : "f" + (a.b ? we(a.b) : "-"));
        return a.c
    };

    function di(a) {
        a = a || {};
        this.b = void 0 !== a.color ? a.color : null;
        this.g = a.lineCap;
        this.f = void 0 !== a.X ? a.X : null;
        this.o = a.lineJoin;
        this.i = a.miterLimit;
        this.c = a.width;
        this.j = void 0
    }
    di.prototype.clone = function() {
        var a = this.b;
        return new di({
            color: a && a.slice ? a.slice() : a || void 0,
            lineCap: this.g,
            X: this.f ? this.f.slice() : void 0,
            lineJoin: this.o,
            miterLimit: this.i,
            width: this.c
        })
    };
    di.prototype.eg = function(a) {
        this.b = a;
        this.j = void 0
    };
    di.prototype.setLineDash = function(a) {
        this.f = a;
        this.j = void 0
    };
    di.prototype.Be = function(a) {
        this.c = a;
        this.j = void 0
    };

    function ai(a) {
        void 0 === a.j && (a.j = "s", a.j = a.b ? "string" === typeof a.b ? a.j + a.b : a.j + x(a.b).toString() : a.j + "-", a.j += "," + (void 0 !== a.g ? a.g.toString() : "-") + "," + (a.f ? a.f.toString() : "-") + "," + (void 0 !== a.o ? a.o : "-") + "," + (void 0 !== a.i ? a.i.toString() : "-") + "," + (void 0 !== a.c ? a.c.toString() : "-"));
        return a.j
    };

    function ei(a) {
        a = a || {};
        this.o = null;
        this.g = fi;
        void 0 !== a.geometry && gi(this, a.geometry);
        this.j = void 0 !== a.fill ? a.fill : null;
        this.c = void 0 !== a.image ? a.image : null;
        this.f = void 0 !== a.stroke ? a.stroke : null;
        this.i = void 0 !== a.text ? a.text : null;
        this.b = a.zIndex
    }
    ei.prototype.clone = function() {
        var a = this.G();
        a && a.clone && (a = a.clone());
        return new ei({
            geometry: a,
            fill: this.j ? this.j.clone() : void 0,
            image: this.c ? this.c.clone() : void 0,
            stroke: this.f ? this.f.clone() : void 0,
            text: this.pa() ? this.pa().clone() : void 0,
            zIndex: this.b
        })
    };
    ei.prototype.G = function() {
        return this.o
    };
    ei.prototype.pa = function() {
        return this.i
    };

    function gi(a, b) {
        "function" === typeof b ? a.g = b : "string" === typeof b ? a.g = function(a) {
            return a.get(b)
        } : b ? b && (a.g = function() {
            return b
        }) : a.g = fi;
        a.o = b
    }

    function hi(a) {
        if ("function" !== typeof a) {
            var b;
            Array.isArray(a) ? b = a : (wa(a instanceof ei, 41), b = [a]);
            a = function() {
                return b
            }
        }
        return a
    }
    var ii = null;

    function ji() {
        if (!ii) {
            var a = new ci({
                    color: "rgba(255,255,255,0.4)"
                }),
                b = new di({
                    color: "#3399CC",
                    width: 1.25
                });
            ii = [new ei({
                image: new Zh({
                    fill: a,
                    stroke: b,
                    radius: 5
                }),
                fill: a,
                stroke: b
            })]
        }
        return ii
    }

    function ki() {
        var a = {},
            b = [255, 255, 255, 1],
            c = [0, 153, 255, 1];
        a.Polygon = [new ei({
            fill: new ci({
                color: [255, 255, 255, .5]
            })
        })];
        a.MultiPolygon = a.Polygon;
        a.LineString = [new ei({
            stroke: new di({
                color: b,
                width: 5
            })
        }), new ei({
            stroke: new di({
                color: c,
                width: 3
            })
        })];
        a.MultiLineString = a.LineString;
        a.Circle = a.Polygon.concat(a.LineString);
        a.Point = [new ei({
            image: new Zh({
                radius: 6,
                fill: new ci({
                    color: c
                }),
                stroke: new di({
                    color: b,
                    width: 1.5
                })
            }),
            zIndex: Infinity
        })];
        a.MultiPoint = a.Point;
        a.GeometryCollection = a.Polygon.concat(a.LineString,
            a.Point);
        return a
    }

    function fi(a) {
        return a.G()
    };

    function li(a) {
        a = a ? a : {};
        console.assert(void 0 === a.b || !a.b || "function" === typeof a.b, "renderOrder must be a comparator function");
        var b = Ea({}, a);
        delete b.style;
        delete b.ji;
        delete b.Ob;
        delete b.Pb;
        sh.call(this, b);
        this.v = void 0 !== a.ji ? a.ji : 100;
        this.s = null;
        this.i = void 0;
        this.setStyle(a.style);
        this.D = void 0 !== a.Ob ? a.Ob : !1;
        this.C = void 0 !== a.Pb ? a.Pb : !1
    }
    v(li, sh);
    li.prototype.hc = function() {
        return this.s
    };
    li.prototype.setStyle = function(a) {
        this.s = void 0 !== a ? a : ji;
        this.i = null === a ? void 0 : hi(this.s);
        this.b()
    };

    function mi() {};

    function ni(a, b, c, d, e) {
        this.j = a;
        this.O = b;
        this.i = c;
        this.V = d;
        this.Ac = e;
        this.g = this.b = this.c = this.na = this.jb = this.fa = null;
        this.ra = this.ja = this.C = this.N = this.H = this.ga = 0;
        this.Ca = !1;
        this.o = this.Pc = 0;
        this.La = !1;
        this.R = 0;
        this.f = "";
        this.$a = this.Ra = 0;
        this.Eb = !1;
        this.v = this.yc = 0;
        this.sa = this.D = this.s = null;
        this.F = [];
        this.zc = xh()
    }
    v(ni, mi);

    function oi(a, b, c) {
        if (a.g) {
            console.assert(!0, "offset should be 0");
            console.assert(c == b.length, "end should be equal to the length of flatCoordinates");
            b = Bc(b, 0, c, 2, a.V, a.F);
            c = a.j;
            var d = a.zc,
                e = c.globalAlpha;
            1 != a.C && (c.globalAlpha = e * a.C);
            var f = a.Pc;
            a.Ca && (f += a.Ac);
            var g, h;
            g = 0;
            for (h = b.length; g < h; g += 2) {
                var k = b[g] - a.ga,
                    l = b[g + 1] - a.H;
                a.La && (k = Math.round(k), l = Math.round(l));
                if (0 !== f || 1 != a.o) {
                    var n = k + a.ga,
                        q = l + a.H;
                    Dh(d, n, q, a.o, a.o, f, -n, -q);
                    c.setTransform.apply(c, d)
                }
                c.drawImage(a.g, a.ja, a.ra, a.R, a.N, k, l, a.R,
                    a.N)
            }
            0 === f && 1 == a.o || c.setTransform(1, 0, 0, 1, 0, 0);
            1 != a.C && (c.globalAlpha = e)
        }
    }

    function pi(a, b, c, d) {
        var e = 0;
        if (a.sa && "" !== a.f) {
            a.s && qi(a, a.s);
            a.D && ri(a, a.D);
            var f = a.sa,
                g = a.j,
                h = a.na;
            h ? (h.font != f.font && (h.font = g.font = f.font), h.textAlign != f.textAlign && (h.textAlign = g.textAlign = f.textAlign), h.textBaseline != f.textBaseline && (h.textBaseline = g.textBaseline = f.textBaseline)) : (g.font = f.font, g.textAlign = f.textAlign, g.textBaseline = f.textBaseline, a.na = {
                font: f.font,
                textAlign: f.textAlign,
                textBaseline: f.textBaseline
            });
            console.assert(0 === e, "offset should be 0");
            console.assert(c == b.length, "end should be equal to the length of flatCoordinates");
            b = Bc(b, e, c, d, a.V, a.F);
            f = a.j;
            g = a.yc;
            for (a.Eb && (g += a.Ac); e < c; e += d) {
                var h = b[e] + a.Ra,
                    k = b[e + 1] + a.$a;
                if (0 !== g || 1 != a.v) {
                    var l = Dh(a.zc, h, k, a.v, a.v, g, -h, -k);
                    f.setTransform.apply(f, l)
                }
                a.D && f.strokeText(a.f, h, k);
                a.s && f.fillText(a.f, h, k)
            }
            0 === g && 1 == a.v || f.setTransform(1, 0, 0, 1, 0, 0)
        }
    }

    function si(a, b, c, d, e, f) {
        var g = a.j;
        a = Bc(b, c, d, e, a.V, a.F);
        g.moveTo(a[0], a[1]);
        b = a.length;
        f && (b -= 2);
        for (c = 2; c < b; c += 2) g.lineTo(a[c], a[c + 1]);
        f && g.closePath();
        return d
    }

    function ti(a, b, c, d, e) {
        var f, g;
        f = 0;
        for (g = d.length; f < g; ++f) c = si(a, b, c, d[f], e, !0);
        return c
    }
    m = ni.prototype;
    m.Vg = function(a) {
        if (Zb(this.i, a.K())) {
            if (this.c || this.b) {
                this.c && qi(this, this.c);
                this.b && ri(this, this.b);
                var b;
                b = this.V;
                var c = this.F,
                    d = a.B;
                b = d ? Bc(d, 0, d.length, a.J, b, c) : null;
                c = b[2] - b[0];
                d = b[3] - b[1];
                c = Math.sqrt(c * c + d * d);
                d = this.j;
                d.beginPath();
                d.arc(b[0], b[1], c, 0, 2 * Math.PI);
                this.c && d.fill();
                this.b && d.stroke()
            }
            "" !== this.f && pi(this, id(a), 2, 2)
        }
    };
    m.setStyle = function(a) {
        this.$b(a.j, a.f);
        this.ye(a.c);
        this.Mb(a.pa())
    };
    m.drawPoint = function(a) {
        var b = a.B;
        a = a.J;
        this.g && oi(this, b, b.length);
        "" !== this.f && pi(this, b, b.length, a)
    };
    m.Yg = function(a) {
        var b = a.B;
        a = a.J;
        this.g && oi(this, b, b.length);
        "" !== this.f && pi(this, b, b.length, a)
    };
    m.Wg = function(a) {
        if (Zb(this.i, a.K())) {
            if (this.b) {
                ri(this, this.b);
                var b = this.j,
                    c = a.B;
                b.beginPath();
                si(this, c, 0, c.length, a.J, !1);
                b.stroke()
            }
            "" !== this.f && (a = vi(a), pi(this, a, 2, 2))
        }
    };
    m.Xg = function(a) {
        var b = a.K();
        if (Zb(this.i, b)) {
            if (this.b) {
                ri(this, this.b);
                var b = this.j,
                    c = a.B,
                    d = 0,
                    e = a.nb(),
                    f = a.J;
                b.beginPath();
                var g, h;
                g = 0;
                for (h = e.length; g < h; ++g) d = si(this, c, d, e[g], f, !1);
                b.stroke()
            }
            "" !== this.f && (a = wi(a), pi(this, a, a.length, 2))
        }
    };
    m.$g = function(a) {
        if (Zb(this.i, a.K())) {
            if (this.b || this.c) {
                this.c && qi(this, this.c);
                this.b && ri(this, this.b);
                var b = this.j;
                b.beginPath();
                ti(this, cd(a), 0, a.nb(), a.J);
                this.c && b.fill();
                this.b && b.stroke()
            }
            "" !== this.f && (a = dd(a), pi(this, a, 2, 2))
        }
    };
    m.Zg = function(a) {
        if (Zb(this.i, a.K())) {
            if (this.b || this.c) {
                this.c && qi(this, this.c);
                this.b && ri(this, this.b);
                var b = this.j,
                    c = xi(a),
                    d = 0,
                    e = a.f,
                    f = a.J,
                    g, h;
                b.beginPath();
                g = 0;
                for (h = e.length; g < h; ++g) d = ti(this, c, d, e[g], f);
                this.c && b.fill();
                this.b && b.stroke()
            }
            "" !== this.f && (a = yi(a), pi(this, a, a.length, 2))
        }
    };

    function qi(a, b) {
        var c = a.j,
            d = a.fa;
        d ? d.fillStyle != b.fillStyle && (d.fillStyle = c.fillStyle = b.fillStyle) : (c.fillStyle = b.fillStyle, a.fa = {
            fillStyle: b.fillStyle
        })
    }

    function ri(a, b) {
        var c = a.j,
            d = a.jb;
        d ? (d.lineCap != b.lineCap && (d.lineCap = c.lineCap = b.lineCap), Re && !hb(d.X, b.X) && c.setLineDash(d.X = b.X), d.lineJoin != b.lineJoin && (d.lineJoin = c.lineJoin = b.lineJoin), d.lineWidth != b.lineWidth && (d.lineWidth = c.lineWidth = b.lineWidth), d.miterLimit != b.miterLimit && (d.miterLimit = c.miterLimit = b.miterLimit), d.strokeStyle != b.strokeStyle && (d.strokeStyle = c.strokeStyle = b.strokeStyle)) : (c.lineCap = b.lineCap, Re && c.setLineDash(b.X), c.lineJoin = b.lineJoin, c.lineWidth = b.lineWidth, c.miterLimit =
            b.miterLimit, c.strokeStyle = b.strokeStyle, a.jb = {
                lineCap: b.lineCap,
                X: b.X,
                lineJoin: b.lineJoin,
                lineWidth: b.lineWidth,
                miterLimit: b.miterLimit,
                strokeStyle: b.strokeStyle
            })
    }
    m.$b = function(a, b) {
        if (a) {
            var c = a.b;
            this.c = {
                fillStyle: ye(c ? c : Uh)
            }
        } else this.c = null;
        if (b) {
            var c = b.b,
                d = b.g,
                e = b.f,
                f = b.o,
                g = b.c,
                h = b.i;
            this.b = {
                lineCap: void 0 !== d ? d : "round",
                X: e ? e : Vh,
                lineJoin: void 0 !== f ? f : "round",
                lineWidth: this.O * (void 0 !== g ? g : 1),
                miterLimit: void 0 !== h ? h : 10,
                strokeStyle: ye(c ? c : Wh)
            }
        } else this.b = null
    };
    m.ye = function(a) {
        if (a) {
            var b = a.Yc(),
                c = a.gd(1),
                d = a.hd(),
                e = a.Jb();
            console.assert(c, "imageImage must be truthy");
            this.ga = b[0];
            this.H = b[1];
            this.N = e[1];
            this.g = c;
            this.C = a.g;
            this.ja = d[0];
            this.ra = d[1];
            this.Ca = a.F;
            this.Pc = a.s;
            this.o = a.Da();
            this.La = a.C;
            this.R = e[0]
        } else this.g = null
    };
    m.Mb = function(a) {
        if (a) {
            var b = a.b;
            b ? (b = b.b, this.s = {
                fillStyle: ye(b ? b : Uh)
            }) : this.s = null;
            var c = a.f;
            if (c) {
                var b = c.b,
                    d = c.g,
                    e = c.f,
                    f = c.o,
                    g = c.c,
                    c = c.i;
                this.D = {
                    lineCap: void 0 !== d ? d : "round",
                    X: e ? e : Vh,
                    lineJoin: void 0 !== f ? f : "round",
                    lineWidth: void 0 !== g ? g : 1,
                    miterLimit: void 0 !== c ? c : 10,
                    strokeStyle: ye(b ? b : Wh)
                }
            } else this.D = null;
            var b = a.c,
                d = a.j,
                e = a.g,
                f = a.s,
                g = a.i,
                c = a.Da(),
                h = a.pa(),
                k = a.o;
            a = a.v;
            this.sa = {
                font: void 0 !== b ? b : "10px sans-serif",
                textAlign: void 0 !== k ? k : "center",
                textBaseline: void 0 !== a ? a : "middle"
            };
            this.f = void 0 !==
                h ? h : "";
            this.Ra = void 0 !== d ? this.O * d : 0;
            this.$a = void 0 !== e ? this.O * e : 0;
            this.Eb = void 0 !== f ? f : !1;
            this.yc = void 0 !== g ? g : 0;
            this.v = this.O * (void 0 !== c ? c : 1)
        } else this.f = ""
    };

    function zi(a) {
        Ua.call(this);
        this.N = a
    }
    v(zi, Ua);
    zi.prototype.xb = ta;

    function Ai(a, b, c) {
        return function(d, e) {
            return Bi(a, b, d, e, function(a) {
                c[d] || (c[d] = {});
                c[d][a.Cb.toString()] = a
            })
        }
    }
    zi.prototype.Pa = function() {
        return this.N
    };
    zi.prototype.R = function(a) {
        a.target.ia() === Sh && Ci(this)
    };

    function Ci(a) {
        var b = a.Pa();
        ah(b) && "ready" == b.yf() && a.b()
    }

    function Di(a, b) {
        if (b.Nh()) {
            var c = function(a, b, c) {
                b = x(a).toString();
                a.Cc(c.da.projection, c.qg[b])
            }.bind(null, b);
            a.me.push(c)
        }
    }

    function Ei(a, b) {
        if (b) {
            var c, d, e;
            d = 0;
            for (e = b.length; d < e; ++d) c = b[d], a[x(c).toString()] = c
        }
    }

    function Fi(a, b) {
        var c = b.N;
        void 0 !== c && ("string" === typeof c ? a.Hc[c] = "" : c && (wa("string" == typeof c.href, 44), wa("string" == typeof c.src, 45), a.Hc[c.src] = c.href))
    }

    function Gi(a, b, c, d) {
        b = x(b).toString();
        c = c.toString();
        b in a ? c in a[b] ? a[b][c].extend(d) : a[b][c] = d : (a[b] = {}, a[b][c] = d)
    }

    function Hi(a, b, c, d, e, f, g, h) {
        var k = x(b).toString();
        k in a.ud || (a.ud[k] = {});
        var l = a.ud[k];
        a = a.Mo;
        var n = c.va,
            q, p, r, u, z, w;
        for (w = g; w >= n; --w)
            for (p = Td(c, f, w, p), r = Vd(c, w), u = p.W; u <= p.Z; ++u)
                for (z = p.aa; z <= p.ca; ++z) g - w <= h ? (q = Ii(b, w, u, z, d, e), 0 == q.ia() && (l[q.nc()] = !0, q.nc() in a.c || a.i([q, k, Zd(c, q.Cb), r]))) : b.Di(w, u, z, e)
    };

    function Ji(a) {
        zi.call(this, a);
        this.fa = xh()
    }
    v(Ji, zi);

    function Ki(a, b, c) {
        var d = b.Ha,
            e = b.size[0] * d,
            f = b.size[1] * d,
            g = b.da.rotation,
            h = Rb(c),
            k = [c[2], c[3]],
            l = [c[2], c[1]];
        c = Qb(c);
        Ch(b.vb, h);
        Ch(b.vb, k);
        Ch(b.vb, l);
        Ch(b.vb, c);
        a.save();
        Xh(a, -g, e / 2, f / 2);
        a.beginPath();
        a.moveTo(h[0] * d, h[1] * d);
        a.lineTo(k[0] * d, k[1] * d);
        a.lineTo(l[0] * d, l[1] * d);
        a.lineTo(c[0] * d, c[1] * d);
        a.clip();
        Xh(a, g, e / 2, f / 2)
    }
    Ji.prototype.o = function(a, b, c) {
        Li(this, "precompose", c, a, void 0);
        var d = this.c ? this.c.g() : null;
        if (d) {
            var e = b.extent,
                f = void 0 !== e;
            f && Ki(c, a, e);
            var e = this.v,
                g = c.globalAlpha;
            c.globalAlpha = b.opacity;
            c.drawImage(d, 0, 0, +d.width, +d.height, Math.round(e[4]), Math.round(e[5]), Math.round(d.width * e[0]), Math.round(d.height * e[3]));
            c.globalAlpha = g;
            f && c.restore()
        }
        Li(this, "postcompose", c, a, void 0)
    };

    function Li(a, b, c, d, e) {
        var f = a.Pa();
        if (Ta(f, b)) {
            var g = d.size[0] * d.Ha,
                h = d.size[1] * d.Ha,
                k = d.da.rotation;
            Xh(c, -k, g / 2, h / 2);
            a = void 0 !== e ? e : Mi(a, d, 0);
            B(f, new rh(b, new ni(c, d.Ha, d.extent, a, d.da.rotation), d, c, null));
            Xh(c, k, g / 2, h / 2)
        }
    }

    function Mi(a, b, c) {
        var d = b.da,
            e = b.Ha,
            f = e / d.resolution;
        return Dh(a.fa, e * b.size[0] / 2, e * b.size[1] / 2, f, -f, -d.rotation, -d.center[0] + c, -d.center[1])
    };

    function Ni() {};

    function Oi(a, b, c, d) {
        this.tolerance = a;
        this.jb = b;
        this.Rf = d;
        this.j = 0;
        this.resolution = c;
        this.N = this.H = null;
        this.c = [];
        this.coordinates = [];
        this.ja = xh();
        this.b = [];
        this.na = [];
        this.Ca = xh();
        this.ra = xh()
    }
    v(Oi, mi);

    function Pi(a, b, c, d, e, f, g) {
        var h = a.coordinates.length,
            k = a.lf();
        g && (c += e);
        g = [b[c], b[c + 1]];
        var l = [NaN, NaN],
            n = !0,
            q, p, r;
        for (q = c + e; q < d; q += e) l[0] = b[q], l[1] = b[q + 1], r = Ib(k, l), r !== p ? (n && (a.coordinates[h++] = g[0], a.coordinates[h++] = g[1]), a.coordinates[h++] = l[0], a.coordinates[h++] = l[1], n = !1) : 1 === r ? (a.coordinates[h++] = l[0], a.coordinates[h++] = l[1], n = !1) : n = !0, g[0] = l[0], g[1] = l[1], p = r;
        if (f && n || q === c + e) a.coordinates[h++] = g[0], a.coordinates[h++] = g[1];
        return h
    }

    function Qi(a, b) {
        a.H = [0, b, 0];
        a.c.push(a.H);
        a.N = [0, b, 0];
        a.b.push(a.N)
    }

    function Ri(a, b, c) {
        if (a.fa) {
            var d = Ch(a.ja, a.fa.slice());
            b.translate(d[0], d[1]);
            b.rotate(c)
        }
        b.fill();
        a.fa && b.setTransform.apply(b, a.ra)
    }

    function Si(a, b, c, d, e, f, g, h, k) {
        var l;
        hb(d, a.ja) ? l = a.na : (l = Bc(a.coordinates, 0, a.coordinates.length, 2, d, a.na), Bh(a.ja, d), console.assert(l === a.na, "pixelCoordinates should be the same as this.pixelCoordinates_"));
        d = !Ha(f);
        for (var n = 0, q = g.length, p, r, u = a.Ca, z = a.ra, w, H, F, I, N = 0, fa = 0, U = a.c != g || a.Rf ? 0 : 200; n < q;) {
            var y = g[n],
                T, P, W, K;
            switch (y[0]) {
                case 0:
                    p = y[1];
                    d && f[x(p).toString()] || !p.G() ? n = y[2] : void 0 === k || Zb(k, p.G().K()) ? ++n : n = y[2] + 1;
                    break;
                case 1:
                    N > U && (Ri(a, b, e), N = 0);
                    fa > U && (b.stroke(), fa = 0);
                    N || fa || b.beginPath();
                    ++n;
                    break;
                case 2:
                    console.assert("number" === typeof y[1], "second instruction should be a number");
                    p = y[1];
                    r = l[p];
                    y = l[p + 1];
                    F = l[p + 2] - r;
                    p = l[p + 3] - y;
                    p = Math.sqrt(F * F + p * p);
                    b.moveTo(r + p, y);
                    b.arc(r, y, p, 0, 2 * Math.PI, !0);
                    ++n;
                    break;
                case 3:
                    b.closePath();
                    ++n;
                    break;
                case 4:
                    console.assert("number" === typeof y[1], "second instruction should be a number");
                    p = y[1];
                    console.assert("number" === typeof y[2], "third instruction should be a number");
                    r = y[2];
                    T = y[3];
                    P = y[4] * c;
                    W = y[5] * c;
                    var M = y[6],
                        O = y[7],
                        J = y[8],
                        ga = y[9];
                    K = y[10];
                    F = y[11];
                    I =
                        y[12];
                    var xb = y[13],
                        ld = y[14];
                    for (K && (F += e); p < r; p += 2) {
                        y = l[p] - P;
                        K = l[p + 1] - W;
                        xb && (y = Math.round(y), K = Math.round(K));
                        if (1 != I || 0 !== F) {
                            var $a = y + P,
                                yh = K + W;
                            Dh(u, $a, yh, I, I, F, -$a, -yh);
                            b.setTransform.apply(b, u)
                        }
                        $a = b.globalAlpha;
                        1 != O && (b.globalAlpha = $a * O);
                        var yh = ld + J > T.width ? T.width - J : ld,
                            bq = M + ga > T.height ? T.height - ga : M;
                        b.drawImage(T, J, ga, yh, bq, y, K, yh * c, bq * c);
                        1 != O && (b.globalAlpha = $a);
                        1 == I && 0 === F || b.setTransform.apply(b, z)
                    }++n;
                    break;
                case 5:
                    console.assert("number" === typeof y[1], "2nd instruction should be a number");
                    p = y[1];
                    console.assert("number" === typeof y[2], "3rd instruction should be a number");
                    r = y[2];
                    console.assert("string" === typeof y[3], "4th instruction should be a string");
                    W = y[3];
                    console.assert("number" === typeof y[4], "5th instruction should be a number");
                    M = y[4] * c;
                    console.assert("number" === typeof y[5], "6th instruction should be a number");
                    O = y[5] * c;
                    console.assert("number" === typeof y[6], "7th instruction should be a number");
                    F = y[6];
                    console.assert("number" === typeof y[7], "8th instruction should be a number");
                    I = y[7] * c;
                    console.assert("boolean" === typeof y[8], "9th instruction should be a boolean");
                    T = y[8];
                    console.assert("boolean" === typeof y[9], "10th instruction should be a boolean");
                    P = y[9];
                    for ((K = y[10]) && (F += e); p < r; p += 2) {
                        y = l[p] + M;
                        K = l[p + 1] + O;
                        if (1 != I || 0 !== F) Dh(u, y, K, I, I, F, -y, -K), b.setTransform.apply(b, u);
                        J = W.split("\n");
                        ga = J.length;
                        1 < ga ? (xb = Math.round(1.5 * b.measureText("M").width), K -= (ga - 1) / 2 * xb) : xb = 0;
                        for (ld = 0; ld < ga; ld++) $a = J[ld], P && b.strokeText($a, y, K), T && b.fillText($a, y, K), K += xb;
                        1 == I && 0 === F || b.setTransform.apply(b,
                            z)
                    }++n;
                    break;
                case 6:
                    if (void 0 !== h && (p = y[1], p = h(p))) return p;
                    ++n;
                    break;
                case 7:
                    U ? N++ : Ri(a, b, e);
                    ++n;
                    break;
                case 8:
                    console.assert("number" === typeof y[1], "2nd instruction should be a number");
                    p = y[1];
                    console.assert("number" === typeof y[2], "3rd instruction should be a number");
                    r = y[2];
                    y = l[p];
                    K = l[p + 1];
                    F = y + .5 | 0;
                    I = K + .5 | 0;
                    if (F !== w || I !== H) b.moveTo(y, K), w = F, H = I;
                    for (p += 2; p < r; p += 2)
                        if (y = l[p], K = l[p + 1], F = y + .5 | 0, I = K + .5 | 0, p == r - 2 || F !== w || I !== H) b.lineTo(y, K), w = F, H = I;
                    ++n;
                    break;
                case 9:
                    console.assert(ze(y[1]), "2nd instruction should be a string, CanvasPattern, or CanvasGradient");
                    a.fa = y[2];
                    N && (Ri(a, b, e), N = 0);
                    b.fillStyle = y[1];
                    ++n;
                    break;
                case 10:
                    console.assert(ze(y[1]), "2nd instruction should be a string, CanvasPattern, or CanvasGradient");
                    console.assert("number" === typeof y[2], "3rd instruction should be a number");
                    console.assert("string" === typeof y[3], "4rd instruction should be a string");
                    console.assert("string" === typeof y[4], "5th instruction should be a string");
                    console.assert("number" === typeof y[5], "6th instruction should be a number");
                    console.assert(y[6], "7th instruction should not be null");
                    w = void 0 !== y[7] ? y[7] : !0;
                    H = y[2];
                    fa && (b.stroke(), fa = 0);
                    b.strokeStyle = y[1];
                    b.lineWidth = w ? H * c : H;
                    b.lineCap = y[3];
                    b.lineJoin = y[4];
                    b.miterLimit = y[5];
                    Re && b.setLineDash(y[6]);
                    H = w = NaN;
                    ++n;
                    break;
                case 11:
                    console.assert("string" === typeof y[1], "2nd instruction should be a string");
                    console.assert("string" === typeof y[2], "3rd instruction should be a string");
                    console.assert("string" === typeof y[3], "4th instruction should be a string");
                    b.font = y[1];
                    b.textAlign = y[2];
                    b.textBaseline = y[3];
                    ++n;
                    break;
                case 12:
                    U ? fa++ : b.stroke();
                    ++n;
                    break;
                default:
                    console.assert(!1, "Unknown canvas render instruction"), ++n
            }
        }
        N && Ri(a, b, e);
        fa && b.stroke();
        console.assert(n == g.length, "all instructions should be consumed")
    }
    Oi.prototype.R = function(a, b, c, d, e) {
        Si(this, a, b, c, d, e, this.c, void 0, void 0)
    };

    function Ti(a) {
        var b = a.b;
        b.reverse();
        var c, d = b.length,
            e, f, g = -1;
        for (c = 0; c < d; ++c)
            if (e = b[c], f = e[0], 6 == f) console.assert(-1 == g, "begin should be -1"), g = c;
            else if (0 == f) {
            e[2] = c;
            console.assert(0 <= g, "begin should be larger than or equal to 0");
            e = a.b;
            f = c;
            console.assert(0 <= g, "Array begin index should be equal to or greater than 0");
            for (console.assert(f < e.length, "Array end index should be less than the array length"); g < f;) {
                var h = e[g];
                e[g] = e[f];
                e[f] = h;
                ++g;
                --f
            }
            g = -1
        }
    }

    function Ui(a, b) {
        console.assert(a.H, "this.beginGeometryInstruction1_ should not be null");
        a.H[2] = a.c.length;
        a.H = null;
        console.assert(a.N, "this.beginGeometryInstruction2_ should not be null");
        a.N[2] = a.b.length;
        a.N = null;
        var c = [6, b];
        a.c.push(c);
        a.b.push(c)
    }
    Oi.prototype.ke = ta;
    Oi.prototype.lf = function() {
        return this.jb
    };

    function Vi(a, b, c, d) {
        Oi.call(this, a, b, c, d);
        this.V = this.sa = null;
        this.O = this.ga = this.F = this.C = this.D = this.v = this.s = this.i = this.o = this.g = this.f = void 0
    }
    v(Vi, Oi);
    Vi.prototype.drawPoint = function(a, b) {
        if (this.V) {
            console.assert(void 0 !== this.f, "this.anchorX_ should be defined");
            console.assert(void 0 !== this.g, "this.anchorY_ should be defined");
            console.assert(void 0 !== this.o, "this.height_ should be defined");
            console.assert(void 0 !== this.i, "this.opacity_ should be defined");
            console.assert(void 0 !== this.s, "this.originX_ should be defined");
            console.assert(void 0 !== this.v, "this.originY_ should be defined");
            console.assert(void 0 !== this.D, "this.rotateWithView_ should be defined");
            console.assert(void 0 !== this.C, "this.rotation_ should be defined");
            console.assert(void 0 !== this.F, "this.scale_ should be defined");
            console.assert(void 0 !== this.O, "this.width_ should be defined");
            Qi(this, b);
            var c = a.B,
                d = this.coordinates.length,
                c = Pi(this, c, 0, c.length, a.J, !1, !1);
            this.c.push([4, d, c, this.V, this.f, this.g, this.o, this.i, this.s, this.v, this.D, this.C, this.F, this.ga, this.O]);
            this.b.push([4, d, c, this.sa, this.f, this.g, this.o, this.i, this.s, this.v, this.D, this.C, this.F, this.ga, this.O]);
            Ui(this, b)
        }
    };
    Vi.prototype.Yg = function(a, b) {
        if (this.V) {
            console.assert(void 0 !== this.f, "this.anchorX_ should be defined");
            console.assert(void 0 !== this.g, "this.anchorY_ should be defined");
            console.assert(void 0 !== this.o, "this.height_ should be defined");
            console.assert(void 0 !== this.i, "this.opacity_ should be defined");
            console.assert(void 0 !== this.s, "this.originX_ should be defined");
            console.assert(void 0 !== this.v, "this.originY_ should be defined");
            console.assert(void 0 !== this.D, "this.rotateWithView_ should be defined");
            console.assert(void 0 !== this.C, "this.rotation_ should be defined");
            console.assert(void 0 !== this.F, "this.scale_ should be defined");
            console.assert(void 0 !== this.O, "this.width_ should be defined");
            Qi(this, b);
            var c = a.B,
                d = this.coordinates.length,
                c = Pi(this, c, 0, c.length, a.J, !1, !1);
            this.c.push([4, d, c, this.V, this.f, this.g, this.o, this.i, this.s, this.v, this.D, this.C, this.F, this.ga, this.O]);
            this.b.push([4, d, c, this.sa, this.f, this.g, this.o, this.i, this.s, this.v, this.D, this.C, this.F, this.ga, this.O]);
            Ui(this, b)
        }
    };
    Vi.prototype.ke = function() {
        Ti(this);
        this.g = this.f = void 0;
        this.V = this.sa = null;
        this.O = this.ga = this.C = this.D = this.v = this.s = this.i = this.F = this.o = void 0
    };
    Vi.prototype.ye = function(a) {
        console.assert(a, "imageStyle should not be null");
        var b = a.Yc();
        console.assert(b, "anchor should not be null");
        var c = a.Jb();
        console.assert(c, "size should not be null");
        var d = a.Pf(1);
        console.assert(d, "hitDetectionImage should not be null");
        var e = a.gd(1);
        console.assert(e, "image should not be null");
        var f = a.hd();
        console.assert(f, "origin should not be null");
        this.f = b[0];
        this.g = b[1];
        this.sa = d;
        this.V = e;
        this.o = c[1];
        this.i = a.g;
        this.s = f[0];
        this.v = f[1];
        this.D = a.F;
        this.C = a.s;
        this.F =
            a.Da();
        this.ga = a.C;
        this.O = c[0]
    };

    function Wi(a, b, c, d) {
        Oi.call(this, a, b, c, d);
        this.g = null;
        this.f = {
            Wc: void 0,
            Rc: void 0,
            Sc: null,
            Tc: void 0,
            Uc: void 0,
            Vc: void 0,
            Ef: 0,
            strokeStyle: void 0,
            lineCap: void 0,
            X: null,
            lineJoin: void 0,
            lineWidth: void 0,
            miterLimit: void 0
        }
    }
    v(Wi, Oi);

    function Xi(a, b, c, d, e) {
        var f = a.coordinates.length;
        b = Pi(a, b, c, d, e, !1, !1);
        f = [8, f, b];
        a.c.push(f);
        a.b.push(f);
        return d
    }
    m = Wi.prototype;
    m.lf = function() {
        this.g || (this.g = Fb(this.jb), 0 < this.j && Eb(this.g, this.resolution * (this.j + 1) / 2, this.g));
        return this.g
    };

    function Yi(a) {
        var b = a.f,
            c = b.strokeStyle,
            d = b.lineCap,
            e = b.X,
            f = b.lineJoin,
            g = b.lineWidth,
            h = b.miterLimit;
        console.assert(void 0 !== c, "strokeStyle should be defined");
        console.assert(void 0 !== d, "lineCap should be defined");
        console.assert(e, "lineDash should not be null");
        console.assert(void 0 !== f, "lineJoin should be defined");
        console.assert(void 0 !== g, "lineWidth should be defined");
        console.assert(void 0 !== h, "miterLimit should be defined");
        b.Wc == c && b.Rc == d && hb(b.Sc, e) && b.Tc == f && b.Uc == g && b.Vc == h || (b.Ef != a.coordinates.length &&
            (a.c.push([12]), b.Ef = a.coordinates.length), a.c.push([10, c, g, d, f, h, e], [1]), b.Wc = c, b.Rc = d, b.Sc = e, b.Tc = f, b.Uc = g, b.Vc = h)
    }
    m.Wg = function(a, b) {
        var c = this.f;
        console.assert(c, "state should not be null");
        var d = c.lineWidth;
        void 0 !== c.strokeStyle && void 0 !== d && (Yi(this), Qi(this, b), this.b.push([10, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.X], [1]), c = a.B, Xi(this, c, 0, c.length, a.J), this.b.push([12]), Ui(this, b))
    };
    m.Xg = function(a, b) {
        var c = this.f;
        console.assert(c, "state should not be null");
        var d = c.lineWidth;
        if (void 0 !== c.strokeStyle && void 0 !== d) {
            Yi(this);
            Qi(this, b);
            this.b.push([10, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.X], [1]);
            var c = a.nb(),
                d = a.B,
                e = a.J,
                f = 0,
                g, h;
            g = 0;
            for (h = c.length; g < h; ++g) f = Xi(this, d, f, c[g], e);
            this.b.push([12]);
            Ui(this, b)
        }
    };
    m.ke = function() {
        var a = this.f;
        console.assert(a, "state should not be null");
        a.Ef != this.coordinates.length && this.c.push([12]);
        Ti(this);
        this.f = null
    };
    m.$b = function(a, b) {
        console.assert(this.f, "this.state_ should not be null");
        console.assert(!a, "fillStyle should be null");
        console.assert(b, "strokeStyle should not be null");
        var c = b.b;
        this.f.strokeStyle = ye(c ? c : Wh);
        c = b.g;
        this.f.lineCap = void 0 !== c ? c : "round";
        c = b.f;
        this.f.X = c ? c : Vh;
        c = b.o;
        this.f.lineJoin = void 0 !== c ? c : "round";
        c = b.c;
        this.f.lineWidth = void 0 !== c ? c : 1;
        c = b.i;
        this.f.miterLimit = void 0 !== c ? c : 10;
        this.f.lineWidth > this.j && (this.j = this.f.lineWidth, this.g = null)
    };

    function Zi(a, b, c, d) {
        Oi.call(this, a, b, c, d);
        this.g = null;
        this.f = {
            Rg: void 0,
            Wc: void 0,
            Rc: void 0,
            Sc: null,
            Tc: void 0,
            Uc: void 0,
            Vc: void 0,
            fillStyle: void 0,
            strokeStyle: void 0,
            lineCap: void 0,
            X: null,
            lineJoin: void 0,
            lineWidth: void 0,
            miterLimit: void 0
        }
    }
    v(Zi, Oi);

    function $i(a, b, c, d, e) {
        var f = a.f,
            g = void 0 !== f.fillStyle,
            h = void 0 != f.strokeStyle,
            k = d.length,
            l = [1];
        a.c.push(l);
        a.b.push(l);
        for (l = 0; l < k; ++l) {
            var n = d[l],
                q = a.coordinates.length;
            c = Pi(a, b, c, n, e, !0, !h);
            c = [8, q, c];
            a.c.push(c);
            a.b.push(c);
            h && (c = [3], a.c.push(c), a.b.push(c));
            c = n
        }
        b = [7];
        a.b.push(b);
        g && a.c.push(b);
        h && (console.assert(void 0 !== f.lineWidth, "state.lineWidth should be defined"), f = [12], a.c.push(f), a.b.push(f));
        return c
    }
    m = Zi.prototype;
    m.Vg = function(a, b) {
        var c = this.f;
        console.assert(c, "state should not be null");
        var d = c.strokeStyle;
        if (void 0 !== c.fillStyle || void 0 !== d) {
            void 0 !== d && console.assert(void 0 !== c.lineWidth, "state.lineWidth should be defined");
            aj(this, a);
            Qi(this, b);
            this.b.push([9, we(Uh)]);
            void 0 !== c.strokeStyle && this.b.push([10, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.X]);
            var e = a.B,
                d = this.coordinates.length;
            Pi(this, e, 0, e.length, a.J, !1, !1);
            e = [1];
            d = [2, d];
            this.c.push(e, d);
            this.b.push(e, d);
            d = [7];
            this.b.push(d);
            void 0 !== c.fillStyle && this.c.push(d);
            void 0 !== c.strokeStyle && (console.assert(void 0 !== c.lineWidth, "state.lineWidth should be defined"), c = [12], this.c.push(c), this.b.push(c));
            Ui(this, b)
        }
    };
    m.$g = function(a, b) {
        var c = this.f;
        console.assert(c, "state should not be null");
        var d = c.strokeStyle;
        console.assert(void 0 !== c.fillStyle || void 0 !== d, "fillStyle or strokeStyle should be defined");
        void 0 !== d && console.assert(void 0 !== c.lineWidth, "state.lineWidth should be defined");
        aj(this, a);
        Qi(this, b);
        this.b.push([9, we(Uh)]);
        void 0 !== c.strokeStyle && this.b.push([10, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.X]);
        c = a.nb();
        d = cd(a);
        $i(this, d, 0, c, a.J);
        Ui(this, b)
    };
    m.Zg = function(a, b) {
        var c = this.f;
        console.assert(c, "state should not be null");
        var d = c.strokeStyle;
        if (void 0 !== c.fillStyle || void 0 !== d) {
            void 0 !== d && console.assert(void 0 !== c.lineWidth, "state.lineWidth should be defined");
            aj(this, a);
            Qi(this, b);
            this.b.push([9, we(Uh)]);
            void 0 !== c.strokeStyle && this.b.push([10, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.X]);
            var c = a.f,
                d = xi(a),
                e = a.J,
                f = 0,
                g, h;
            g = 0;
            for (h = c.length; g < h; ++g) f = $i(this, d, f, c[g], e);
            Ui(this, b)
        }
    };
    m.ke = function() {
        console.assert(this.f, "this.state_ should not be null");
        Ti(this);
        this.f = null;
        var a = this.tolerance;
        if (0 !== a) {
            var b = this.coordinates,
                c, d;
            c = 0;
            for (d = b.length; c < d; ++c) b[c] = a * Math.round(b[c] / a)
        }
    };
    m.lf = function() {
        this.g || (this.g = Fb(this.jb), 0 < this.j && Eb(this.g, this.resolution * (this.j + 1) / 2, this.g));
        return this.g
    };
    m.$b = function(a, b) {
        console.assert(this.f, "this.state_ should not be null");
        console.assert(a || b, "fillStyle or strokeStyle should not be null");
        var c = this.f;
        if (a) {
            var d = a.b;
            c.fillStyle = ye(d ? d : Uh)
        } else c.fillStyle = void 0;
        b ? (d = b.b, c.strokeStyle = ye(d ? d : Wh), d = b.g, c.lineCap = void 0 !== d ? d : "round", d = b.f, c.X = d ? d.slice() : Vh, d = b.o, c.lineJoin = void 0 !== d ? d : "round", d = b.c, c.lineWidth = void 0 !== d ? d : 1, d = b.i, c.miterLimit = void 0 !== d ? d : 10, c.lineWidth > this.j && (this.j = c.lineWidth, this.g = null)) : (c.strokeStyle = void 0, c.lineCap =
            void 0, c.X = null, c.lineJoin = void 0, c.lineWidth = void 0, c.miterLimit = void 0)
    };

    function aj(a, b) {
        var c = a.f,
            d = c.fillStyle,
            e = c.strokeStyle,
            f = c.lineCap,
            g = c.X,
            h = c.lineJoin,
            k = c.lineWidth,
            l = c.miterLimit;
        if (void 0 !== d && ("string" !== typeof d || c.Rg != d)) {
            var n = [9, d];
            "string" !== typeof d && (d = b.K(), n.push([d[0], d[3]]));
            a.c.push(n);
            c.Rg = c.fillStyle
        }
        void 0 !== e && (console.assert(void 0 !== f, "lineCap should be defined"), console.assert(g, "lineDash should not be null"), console.assert(void 0 !== h, "lineJoin should be defined"), console.assert(void 0 !== k, "lineWidth should be defined"), console.assert(void 0 !==
            l, "miterLimit should be defined"), c.Wc != e || c.Rc != f || c.Sc != g || c.Tc != h || c.Uc != k || c.Vc != l) && (a.c.push([10, e, k, f, h, l, g]), c.Wc = e, c.Rc = f, c.Sc = g, c.Tc = h, c.Uc = k, c.Vc = l)
    };

    function bj(a, b, c, d) {
        Oi.call(this, a, b, c, d);
        this.ga = this.V = this.O = null;
        this.i = "";
        this.v = this.s = 0;
        this.D = void 0;
        this.F = this.C = 0;
        this.o = this.g = this.f = null
    }
    v(bj, Oi);
    bj.prototype.drawText = function(a, b, c, d, e, f) {
        if ("" !== this.i && this.o && (this.f || this.g)) {
            if (this.f) {
                e = this.f;
                var g = this.O;
                if (!g || g.fillStyle != e.fillStyle) {
                    var h = [9, e.fillStyle];
                    this.c.push(h);
                    this.b.push(h);
                    g ? g.fillStyle = e.fillStyle : this.O = {
                        fillStyle: e.fillStyle
                    }
                }
            }
            this.g && (e = this.g, g = this.V, g && g.lineCap == e.lineCap && g.X == e.X && g.lineJoin == e.lineJoin && g.lineWidth == e.lineWidth && g.miterLimit == e.miterLimit && g.strokeStyle == e.strokeStyle || (h = [10, e.strokeStyle, e.lineWidth, e.lineCap, e.lineJoin, e.miterLimit, e.X, !1], this.c.push(h), this.b.push(h), g ? (g.lineCap = e.lineCap, g.X = e.X, g.lineJoin = e.lineJoin, g.lineWidth = e.lineWidth, g.miterLimit = e.miterLimit, g.strokeStyle = e.strokeStyle) : this.V = {
                lineCap: e.lineCap,
                X: e.X,
                lineJoin: e.lineJoin,
                lineWidth: e.lineWidth,
                miterLimit: e.miterLimit,
                strokeStyle: e.strokeStyle
            }));
            e = this.o;
            g = this.ga;
            g && g.font == e.font && g.textAlign == e.textAlign && g.textBaseline == e.textBaseline || (h = [11, e.font, e.textAlign, e.textBaseline], this.c.push(h), this.b.push(h), g ? (g.font = e.font, g.textAlign = e.textAlign,
                g.textBaseline = e.textBaseline) : this.ga = {
                font: e.font,
                textAlign: e.textAlign,
                textBaseline: e.textBaseline
            });
            Qi(this, f);
            e = this.coordinates.length;
            a = Pi(this, a, b, c, d, !1, !1);
            a = [5, e, a, this.i, this.s, this.v, this.C, this.F, !!this.f, !!this.g, this.D];
            this.c.push(a);
            this.b.push(a);
            Ui(this, f)
        }
    };
    bj.prototype.Mb = function(a) {
        if (a) {
            var b = a.b;
            b ? (b = b.b, b = ye(b ? b : Uh), this.f ? this.f.fillStyle = b : this.f = {
                fillStyle: b
            }) : this.f = null;
            var c = a.f;
            if (c) {
                var b = c.b,
                    d = c.g,
                    e = c.f,
                    f = c.o,
                    g = c.c,
                    c = c.i,
                    d = void 0 !== d ? d : "round",
                    e = e ? e.slice() : Vh,
                    f = void 0 !== f ? f : "round",
                    g = void 0 !== g ? g : 1,
                    c = void 0 !== c ? c : 10,
                    b = ye(b ? b : Wh);
                if (this.g) {
                    var h = this.g;
                    h.lineCap = d;
                    h.X = e;
                    h.lineJoin = f;
                    h.lineWidth = g;
                    h.miterLimit = c;
                    h.strokeStyle = b
                } else this.g = {
                    lineCap: d,
                    X: e,
                    lineJoin: f,
                    lineWidth: g,
                    miterLimit: c,
                    strokeStyle: b
                }
            } else this.g = null;
            var k = a.c,
                b = a.j,
                d = a.g,
                e = a.s,
                g = a.i,
                c = a.Da(),
                f = a.pa(),
                h = a.o,
                l = a.v;
            a = void 0 !== k ? k : "10px sans-serif";
            h = void 0 !== h ? h : "center";
            l = void 0 !== l ? l : "middle";
            this.o ? (k = this.o, k.font = a, k.textAlign = h, k.textBaseline = l) : this.o = {
                font: a,
                textAlign: h,
                textBaseline: l
            };
            this.i = void 0 !== f ? f : "";
            this.s = void 0 !== b ? b : 0;
            this.v = void 0 !== d ? d : 0;
            this.D = void 0 !== e ? e : !1;
            this.C = void 0 !== g ? g : 0;
            this.F = void 0 !== c ? c : 1
        } else this.i = ""
    };
    var cj = ["Polygon", "LineString", "Image", "Text"];

    function dj(a, b, c, d, e) {
        this.s = a;
        this.c = b;
        this.o = d;
        this.i = c;
        this.f = e;
        this.b = {};
        this.j = Ae(1, 1);
        this.g = xh()
    }
    v(dj, Ni);

    function ej(a) {
        for (var b in a.b) {
            var c = a.b[b],
                d;
            for (d in c) c[d].ke()
        }
    }
    dj.prototype.xb = function(a, b, c, d, e) {
        var f = Dh(this.g, .5, .5, 1 / b, -1 / b, -c, -a[0], -a[1]),
            g = this.j;
        g.clearRect(0, 0, 1, 1);
        var h;
        void 0 !== this.f && (h = Cb(), Db(h, a), Eb(h, b * this.f, h));
        return fj(this, g, f, c, d, function(a) {
            if (0 < g.getImageData(0, 0, 1, 1).data[3]) {
                if (a = e(a)) return a;
                g.clearRect(0, 0, 1, 1)
            }
        }, h)
    };

    function gj(a, b, c) {
        var d = void 0 !== b ? b.toString() : "0";
        b = a.b[d];
        void 0 === b && (b = {}, a.b[d] = b);
        d = b[c];
        void 0 === d && (d = hj[c], console.assert(void 0 !== d, c + " constructor missing from ol.render.canvas.ReplayGroup.BATCH_CONSTRUCTORS_"), d = new d(a.s, a.c, a.i, a.o), b[c] = d);
        return d
    }
    dj.prototype.zb = function() {
        return Ha(this.b)
    };
    dj.prototype.R = function(a, b, c, d, e, f) {
        var g = Object.keys(this.b).map(Number);
        g.sort(bb);
        var h = this.c,
            k = h[0],
            l = h[1],
            n = h[2],
            h = h[3],
            k = [k, l, k, h, n, h, n, l];
        Bc(k, 0, 8, 2, c, k);
        a.save();
        a.beginPath();
        a.moveTo(k[0], k[1]);
        a.lineTo(k[2], k[3]);
        a.lineTo(k[4], k[5]);
        a.lineTo(k[6], k[7]);
        a.clip();
        f = f ? f : cj;
        for (var q, p, k = 0, l = g.length; k < l; ++k)
            for (q = this.b[g[k].toString()], n = 0, h = f.length; n < h; ++n) p = q[f[n]], void 0 !== p && p.R(a, b, c, d, e);
        a.restore()
    };

    function fj(a, b, c, d, e, f, g) {
        var h = Object.keys(a.b).map(Number);
        h.sort(function(a, b) {
            return b - a
        });
        var k, l, n, q, p;
        k = 0;
        for (l = h.length; k < l; ++k)
            for (q = a.b[h[k].toString()], n = cj.length - 1; 0 <= n; --n)
                if (p = q[cj[n]], void 0 !== p && (p = Si(p, b, 1, c, d, e, p.b, f, g))) return p
    }
    var hj = {
        Image: Vi,
        LineString: Wi,
        Polygon: Zi,
        Text: bj
    };

    function ij(a, b) {
        return x(a) - x(b)
    }

    function jj(a, b) {
        var c = .5 * a / b;
        return c * c
    }

    function kj(a, b, c, d, e, f) {
        var g = !1,
            h, k;
        if (h = c.c) k = h.Kc(), k == Sh || k == Rh ? h.pg(e, f) : (k == Qh && h.load(), k = h.Kc(), console.assert(k == Th, "imageState should be LOADING"), h.Gf(e, f), g = !0);
        if (e = (0, c.g)(b)) d = e.xf(d), (0, lj[d.T()])(a, d, c, b);
        return g
    }
    var lj = {
        Point: function(a, b, c, d) {
            var e = c.c;
            if (e) {
                if (e.Kc() != Sh) return;
                var f = gj(a, c.b, "Image");
                f.ye(e);
                f.drawPoint(b, d)
            }
            if (e = c.pa()) a = gj(a, c.b, "Text"), a.Mb(e), a.drawText(b.B, 0, 2, 2, b, d)
        },
        LineString: function(a, b, c, d) {
            var e = c.f;
            if (e) {
                var f = gj(a, c.b, "LineString");
                f.$b(null, e);
                f.Wg(b, d)
            }
            if (e = c.pa()) a = gj(a, c.b, "Text"), a.Mb(e), a.drawText(vi(b), 0, 2, 2, b, d)
        },
        Polygon: function(a, b, c, d) {
            var e = c.j,
                f = c.f;
            if (e || f) {
                var g = gj(a, c.b, "Polygon");
                g.$b(e, f);
                g.$g(b, d)
            }
            if (e = c.pa()) a = gj(a, c.b, "Text"), a.Mb(e), a.drawText(dd(b),
                0, 2, 2, b, d)
        },
        MultiPoint: function(a, b, c, d) {
            var e = c.c;
            if (e) {
                if (e.Kc() != Sh) return;
                var f = gj(a, c.b, "Image");
                f.ye(e);
                f.Yg(b, d)
            }
            if (e = c.pa()) a = gj(a, c.b, "Text"), a.Mb(e), c = b.B, a.drawText(c, 0, c.length, b.J, b, d)
        },
        MultiLineString: function(a, b, c, d) {
            var e = c.f;
            if (e) {
                var f = gj(a, c.b, "LineString");
                f.$b(null, e);
                f.Xg(b, d)
            }
            if (e = c.pa()) a = gj(a, c.b, "Text"), a.Mb(e), c = wi(b), a.drawText(c, 0, c.length, 2, b, d)
        },
        MultiPolygon: function(a, b, c, d) {
            var e = c.j,
                f = c.f;
            if (f || e) {
                var g = gj(a, c.b, "Polygon");
                g.$b(e, f);
                g.Zg(b, d)
            }
            if (e = c.pa()) a = gj(a,
                c.b, "Text"), a.Mb(e), c = yi(b), a.drawText(c, 0, c.length, 2, b, d)
        },
        GeometryCollection: function(a, b, c, d) {
            b = b.c;
            var e, f;
            e = 0;
            for (f = b.length; e < f; ++e)(0, lj[b[e].T()])(a, b[e], c, d)
        },
        Circle: function(a, b, c, d) {
            var e = c.j,
                f = c.f;
            if (e || f) {
                var g = gj(a, c.b, "Polygon");
                g.$b(e, f);
                g.Vg(b, d)
            }
            if (e = c.pa()) a = gj(a, c.b, "Text"), a.Mb(e), a.drawText(id(b), 0, 2, 2, b, d)
        }
    };
    var mj, nj = -1 < navigator.userAgent.indexOf("OPR"),
        oj = -1 < navigator.userAgent.indexOf("Edge");
    mj = !(!navigator.userAgent.match("CriOS") && "chrome" in window && "Google Inc." === navigator.vendor && 0 == nj && 0 == oj);

    function pj(a, b, c, d) {
        var e = yc(c, b, a);
        c = b.gc(d, c);
        b = nc(b);
        void 0 !== b && (c *= b);
        b = nc(a);
        void 0 !== b && (c /= b);
        a = a.gc(c, e) / c;
        isFinite(a) && 0 < a && (c /= a);
        return c
    }

    function qj(a, b, c, d) {
        a = c - a;
        b = d - b;
        var e = Math.sqrt(a * a + b * b);
        return [Math.round(c + a / e), Math.round(d + b / e)]
    }

    function rj(a, b, c, d, e, f, g, h, k, l, n) {
        var q = Ae(Math.round(c * a), Math.round(c * b));
        if (0 === k.length) return q.canvas;
        q.scale(c, c);
        var p = Cb();
        k.forEach(function(a) {
            Nb(p, a.extent)
        });
        var r = Ae(Math.round(c * Ub(p) / d), Math.round(c * Vb(p) / d)),
            u = c / d;
        k.forEach(function(a) {
            r.drawImage(a.image, l, l, a.image.width - 2 * l, a.image.height - 2 * l, (a.extent[0] - p[0]) * u, -(a.extent[3] - p[3]) * u, Ub(a.extent) * u, Vb(a.extent) * u)
        });
        var z = Rb(g);
        h.j.forEach(function(a) {
            var b = a.source,
                e = a.target,
                g = b[1][0],
                h = b[1][1],
                k = b[2][0],
                l = b[2][1];
            a = (e[0][0] -
                z[0]) / f;
            var n = -(e[0][1] - z[1]) / f,
                u = (e[1][0] - z[0]) / f,
                P = -(e[1][1] - z[1]) / f,
                W = (e[2][0] - z[0]) / f,
                K = -(e[2][1] - z[1]) / f,
                e = b[0][0],
                b = b[0][1],
                g = g - e,
                h = h - b,
                k = k - e,
                l = l - b;
            a: {
                g = [
                    [g, h, 0, 0, u - a],
                    [k, l, 0, 0, W - a],
                    [0, 0, g, h, P - n],
                    [0, 0, k, l, K - n]
                ];h = g.length;
                for (k = 0; k < h; k++) console.assert(g[k].length == h + 1, "every row should have correct number of columns");
                for (k = 0; k < h; k++) {
                    for (var l = k, M = Math.abs(g[k][k]), O = k + 1; O < h; O++) {
                        var J = Math.abs(g[O][k]);
                        J > M && (M = J, l = O)
                    }
                    if (0 === M) {
                        g = null;
                        break a
                    }
                    M = g[l];
                    g[l] = g[k];
                    g[k] = M;
                    for (l = k + 1; l < h; l++)
                        for (M = -g[l][k] / g[k][k], O = k; O < h + 1; O++) g[l][O] = k == O ? 0 : g[l][O] + M * g[k][O]
                }
                k = Array(h);
                for (l = h - 1; 0 <= l; l--)
                    for (k[l] = g[l][h] / g[l][l], M = l - 1; 0 <= M; M--) g[M][h] -= g[M][l] * k[l];g = k
            }
            g && (q.save(), q.beginPath(), mj ? (k = (a + u + W) / 3, l = (n + P + K) / 3, h = qj(k, l, a, n), u = qj(k, l, u, P), W = qj(k, l, W, K), q.moveTo(u[0], u[1]), q.lineTo(h[0], h[1]), q.lineTo(W[0], W[1])) : (q.moveTo(u, P), q.lineTo(a, n), q.lineTo(W, K)), q.clip(), q.transform(g[0], g[2], g[1], g[3], a, n), q.translate(p[0] - e, p[3] - b), q.scale(d / c, -d / c), q.drawImage(r.canvas, 0, 0), q.restore())
        });
        n && (q.save(),
            q.strokeStyle = "black", q.lineWidth = 1, h.j.forEach(function(a) {
                var b = a.target;
                a = (b[0][0] - z[0]) / f;
                var c = -(b[0][1] - z[1]) / f,
                    d = (b[1][0] - z[0]) / f,
                    e = -(b[1][1] - z[1]) / f,
                    g = (b[2][0] - z[0]) / f,
                    b = -(b[2][1] - z[1]) / f;
                q.beginPath();
                q.moveTo(d, e);
                q.lineTo(a, c);
                q.lineTo(g, b);
                q.closePath();
                q.stroke()
            }), q.restore());
        return q.canvas
    };

    function sj(a, b, c, d, e) {
        this.f = a;
        this.g = b;
        var f = {},
            g = wc(this.g, this.f);
        this.c = function(a) {
            var b = a[0] + "/" + a[1];
            f[b] || (f[b] = g(a));
            return f[b]
        };
        this.o = d;
        this.D = e * e;
        this.j = [];
        this.s = !1;
        this.v = this.f.f && !!d && !!this.f.K() && Ub(d) == Ub(this.f.K());
        this.b = this.f.K() ? Ub(this.f.K()) : null;
        this.i = this.g.K() ? Ub(this.g.K()) : null;
        a = Rb(c);
        b = [c[2], c[3]];
        d = [c[2], c[1]];
        c = Qb(c);
        e = this.c(a);
        var h = this.c(b),
            k = this.c(d),
            l = this.c(c);
        tj(this, a, b, d, c, e, h, k, l, 10);
        if (this.s) {
            console.assert(null !== this.b);
            var n = Infinity;
            this.j.forEach(function(a) {
                n =
                    Math.min(n, a.source[0][0], a.source[1][0], a.source[2][0])
            });
            this.j.forEach(function(a) {
                if (Math.max(a.source[0][0], a.source[1][0], a.source[2][0]) - n > this.b / 2) {
                    var b = [
                        [a.source[0][0], a.source[0][1]],
                        [a.source[1][0], a.source[1][1]],
                        [a.source[2][0], a.source[2][1]]
                    ];
                    b[0][0] - n > this.b / 2 && (b[0][0] -= this.b);
                    b[1][0] - n > this.b / 2 && (b[1][0] -= this.b);
                    b[2][0] - n > this.b / 2 && (b[2][0] -= this.b);
                    Math.max(b[0][0], b[1][0], b[2][0]) - Math.min(b[0][0], b[1][0], b[2][0]) < this.b / 2 && (a.source = b)
                }
            }, this)
        }
        f = {}
    }

    function tj(a, b, c, d, e, f, g, h, k, l) {
        var n = Bb([f, g, h, k]),
            q = a.b ? Ub(n) / a.b : null,
            p = a.b,
            r = a.f.f && .5 < q && 1 > q,
            u = !1;
        if (0 < l) {
            if (a.g.j && a.i) var z = Bb([b, c, d, e]),
                u = u | .25 < Ub(z) / a.i;
            !r && a.f.j && q && (u |= .25 < q)
        }
        if (u || !a.o || Zb(n, a.o)) {
            if (!(u || isFinite(f[0]) && isFinite(f[1]) && isFinite(g[0]) && isFinite(g[1]) && isFinite(h[0]) && isFinite(h[1]) && isFinite(k[0]) && isFinite(k[1])))
                if (0 < l) u = !0;
                else return;
            if (0 < l && (u || (n = a.c([(b[0] + d[0]) / 2, (b[1] + d[1]) / 2]), p = r ? (Aa(f[0], p) + Aa(h[0], p)) / 2 - Aa(n[0], p) : (f[0] + h[0]) / 2 - n[0], n = (f[1] + h[1]) / 2 - n[1],
                    u = p * p + n * n > a.D), u)) {
                Math.abs(b[0] - d[0]) <= Math.abs(b[1] - d[1]) ? (r = [(c[0] + d[0]) / 2, (c[1] + d[1]) / 2], p = a.c(r), n = [(e[0] + b[0]) / 2, (e[1] + b[1]) / 2], q = a.c(n), tj(a, b, c, r, n, f, g, p, q, l - 1), tj(a, n, r, d, e, q, p, h, k, l - 1)) : (r = [(b[0] + c[0]) / 2, (b[1] + c[1]) / 2], p = a.c(r), n = [(d[0] + e[0]) / 2, (d[1] + e[1]) / 2], q = a.c(n), tj(a, b, r, n, e, f, p, q, k, l - 1), tj(a, r, c, d, n, p, g, h, q, l - 1));
                return
            }
            if (r) {
                if (!a.v) return;
                a.s = !0
            }
            a.j.push({
                source: [f, h, k],
                target: [b, d, e]
            });
            a.j.push({
                source: [f, g, h],
                target: [b, c, d]
            })
        }
    }

    function uj(a) {
        var b = Cb();
        a.j.forEach(function(a) {
            a = a.source;
            Db(b, a[0]);
            Db(b, a[1]);
            Db(b, a[2])
        });
        return b
    };

    function vj(a, b, c, d, e, f) {
        this.C = b;
        this.D = a.K();
        var g = b.K(),
            h = g ? Yb(c, g) : c,
            g = pj(a, b, Wb(h), d);
        this.s = new sj(a, b, h, this.D, .5 * g);
        this.f = d;
        this.c = c;
        a = uj(this.s);
        this.v = (this.gb = f(a, g, e)) ? this.gb.j : 1;
        this.b = this.i = null;
        e = Sh;
        f = [];
        this.gb && (e = Qh, f = this.gb.o);
        Mh.call(this, c, d, this.v, e, f)
    }
    v(vj, Mh);
    vj.prototype.qa = function() {
        this.state == Th && wj(this);
        Mh.prototype.qa.call(this)
    };
    vj.prototype.g = function() {
        return this.i
    };
    vj.prototype.md = function() {
        var a = this.gb.ia();
        a == Sh && (this.i = rj(Ub(this.c) / this.f, Vb(this.c) / this.f, this.v, Oh(this.gb), 0, this.f, this.c, this.s, [{
            extent: this.gb.K(),
            image: this.gb.g()
        }], 0));
        this.state = a;
        Nh(this)
    };
    vj.prototype.load = function() {
        if (this.state == Qh) {
            this.state = Th;
            Nh(this);
            var a = this.gb.ia();
            a == Sh || a == Rh ? this.md() : (this.b = A(this.gb, "change", function() {
                var a = this.gb.ia();
                if (a == Sh || a == Rh) wj(this), this.md()
            }, this), this.gb.load())
        }
    };

    function wj(a) {
        console.assert(a.b, "this.sourceListenerKey_ should not be null");
        Ja(a.b);
        a.b = null
    };

    function xj(a) {
        Xa.call(this);
        this.f = jc(a.projection);
        this.C = yj(a.la);
        this.N = a.ua;
        this.na = void 0 !== a.state ? a.state : "ready";
        this.F = void 0 !== a.wrapX ? a.wrapX : !1
    }
    v(xj, Xa);

    function yj(a) {
        if ("string" === typeof a) return [new he({
            html: a
        })];
        if (a instanceof he) return [a];
        if (Array.isArray(a)) {
            for (var b = a.length, c = Array(b), d = 0; d < b; d++) {
                var e = a[d];
                c[d] = "string" === typeof e ? new he({
                    html: e
                }) : e
            }
            return c
        }
        return null
    }
    xj.prototype.xb = ta;
    xj.prototype.ia = function() {
        return this.na
    };
    xj.prototype.refresh = function() {
        this.b()
    };
    xj.prototype.Ae = function(a) {
        this.na = a;
        this.b()
    };

    function zj(a) {
        xj.call(this, {
            la: a.la,
            extent: a.extent,
            ua: a.ua,
            projection: a.projection,
            state: a.state
        });
        this.s = void 0 !== a.Fa ? a.Fa : null;
        console.assert(!this.s || lb(this.s, function(a, c) {
            return c - a
        }), "resolutions must be null or sorted in descending order");
        this.c = null;
        this.ja = 0
    }
    v(zj, xj);

    function Aj(a, b, c, d, e) {
        var f = a.f;
        if (f && e && !vc(f, e)) {
            if (a.c) {
                if (a.ja == a.j && vc(a.c.C, e) && Oh(a.c) == c && a.c.j == d && Mb(a.c.K(), b)) return a.c;
                a.c.Ma();
                a.c = null
            }
            a.c = new vj(f, e, b, c, d, function(a, b, c) {
                return Bj(this, a, b, c, f)
            }.bind(a));
            a.ja = a.j;
            return a.c
        }
        f && (e = f);
        return Bj(a, b, c, d, e)
    }
    zj.prototype.ra = function(a) {
        a = a.target;
        switch (a.ia()) {
            case Th:
                B(this, new Cj(Dj, a));
                break;
            case Sh:
                B(this, new Cj(Ej, a));
                break;
            case Rh:
                B(this, new Cj(Fj, a))
        }
    };

    function Gj(a, b) {
        a.g().src = b
    }

    function Cj(a, b) {
        Qa.call(this, a);
        this.image = b
    }
    v(Cj, Qa);
    var Dj = "imageloadstart",
        Ej = "imageloadend",
        Fj = "imageloaderror";

    function Hj(a) {
        Ji.call(this, a);
        this.c = null;
        this.v = xh()
    }
    v(Hj, Ji);
    Hj.prototype.xb = function(a, b, c, d) {
        var e = this.Pa();
        return C(e).xb(a, b.da.resolution, b.da.rotation, b.kg, function(a) {
            return c.call(d, a, e)
        })
    };
    Hj.prototype.i = function(a, b) {
        var c = a.Ha,
            d = a.da,
            e = d.center,
            f = d.resolution,
            g = C(this.Pa()),
            h = a.Ba,
            k = a.extent;
        void 0 !== b.extent && (k = Yb(k, b.extent));
        if (!h[0] && !h[1] && !Tb(k)) {
            if (h = d = Aj(g, k, f, c, d.projection)) h = d, k = h.ia(), k != Sh && k != Rh && (console.assert(k == Qh || k == Th, 'imageState is "idle" or "loading"'), A(h, "change", this.R, this)), k == Qh && (h.load(), k = h.ia(), console.assert(k == Th || k == Sh, 'imageState is "loading" or "loaded"')), h = k == Sh;
            h && (this.c = d)
        }
        if (this.c) {
            var d = this.c,
                h = d.K(),
                k = Oh(d),
                l = d.j,
                f = c * k / (f * l),
                n = Ah(this.v,
                    1, 1, 0, 0);
            zh(n, Ah(wh, 1, 1, c * a.size[0] / 2, c * a.size[1] / 2));
            zh(n, Ah(wh, f, f, 0, 0));
            zh(n, Ah(wh, 1, 1, l * (h[0] - e[0]) / k, l * (e[1] - h[3]) / k));
            Ei(a.la, d.o);
            Fi(a, g)
        }
        return !!this.c
    };

    function Ij(a) {
        Ji.call(this, a);
        this.s = Ae();
        this.f = [];
        this.g = Cb();
        this.C = [0, 0, 0];
        this.D = xh()
    }
    v(Ij, Ji);
    Ij.prototype.o = function(a, b, c) {
        var d = Mi(this, a, 0);
        Li(this, "precompose", c, a, d);
        var e = this.f;
        if (0 !== e.length) {
            var f = a.Ha,
                g = a.da,
                h = g.center,
                k = g.projection,
                l = g.rotation,
                n = a.size,
                q = Math.round(f * n[0] / 2),
                n = Math.round(f * n[1] / 2),
                g = f / g.resolution,
                p = this.Pa(),
                r = C(p),
                u = r.v * r.ih(k),
                z = r.Wb(k),
                p = Ta(p, "render"),
                w = c,
                H = 1,
                F, I, N;
            if (l || p) {
                w = this.s;
                F = w.canvas;
                var H = r.v / f,
                    fa = c.canvas.width * H;
                I = c.canvas.height * H;
                N = Math.round(Math.sqrt(fa * fa + I * I));
                F.width != N ? F.width = F.height = N : w.clearRect(0, 0, N, N);
                F = (N - fa) / 2 / H;
                I = (N - I) / 2 /
                    H;
                g *= H;
                q = Math.round(H * (q + F));
                n = Math.round(H * (n + I))
            }
            fa = w.globalAlpha;
            w.globalAlpha = b.opacity;
            var U, y = r.vf(k) && 1 == b.opacity;
            y || (e.reverse(), U = []);
            var T = b.extent;
            if (b = void 0 !== T) {
                var P = Rb(T),
                    W = [T[2], T[3]],
                    K = [T[2], T[1]],
                    T = Qb(T);
                Ch(a.vb, P);
                Ch(a.vb, W);
                Ch(a.vb, K);
                Ch(a.vb, T);
                var M = F || 0,
                    O = I || 0;
                w.save();
                var J = w.canvas.width / 2,
                    ga = w.canvas.height / 2;
                Xh(w, -l, J, ga);
                w.beginPath();
                w.moveTo(H * (P[0] * f + M), H * (P[1] * f + O));
                w.lineTo(H * (W[0] * f + M), H * (W[1] * f + O));
                w.lineTo(H * (K[0] * f + M), H * (K[1] * f + O));
                w.lineTo(H * (T[0] * f + M), H * (T[1] *
                    f + O));
                w.clip();
                Xh(w, l, J, ga)
            }
            f = 0;
            for (P = e.length; f < P; ++f) {
                W = e[f];
                K = W.Cb;
                O = Sd(z, K, this.g);
                J = K[0];
                ga = Qb(Sd(z, be(z, h, J, this.C)));
                K = Math.round(Ub(O) * g);
                T = Math.round(Vb(O) * g);
                M = Math.round((O[0] - ga[0]) * g / K) * K + q + Math.round((ga[0] - h[0]) * g);
                O = Math.round((ga[1] - O[3]) * g / T) * T + n + Math.round((h[1] - ga[1]) * g);
                if (!y) {
                    ga = [M, O, M + K, O + T];
                    w.save();
                    for (var xb = 0, ld = U.length; xb < ld; ++xb) {
                        var $a = U[xb];
                        Zb(ga, $a) && (w.beginPath(), w.moveTo(ga[0], ga[1]), w.lineTo(ga[0], ga[3]), w.lineTo(ga[2], ga[3]), w.lineTo(ga[2], ga[1]), w.moveTo($a[0],
                            $a[1]), w.lineTo($a[2], $a[1]), w.lineTo($a[2], $a[3]), w.lineTo($a[0], $a[3]), w.closePath(), w.clip())
                    }
                    U.push(ga)
                }
                ga = r;
                xb = J;
                ld = ga.Wb(k);
                J = ga.v;
                xb = Ld($d(ld, xb), ga.La);
                1 == J ? J = xb : (ga = ga.La, void 0 === ga && (ga = [0, 0]), ga[0] = xb[0] * J + .5 | 0, ga[1] = xb[1] * J + .5 | 0, J = ga);
                w.drawImage(W.je(), u, u, J[0], J[1], M, O, K, T);
                y || w.restore()
            }
            b && w.restore();
            p && (e = F - q / H + q, k = I - n / H + n, h = Dh(this.D, N / 2 - e, N / 2 - k, g, -g, -l, -h[0] + e / g, -h[1] - k / g), Li(this, "render", w, a, h));
            (l || p) && c.drawImage(w.canvas, -Math.round(F), -Math.round(I), N / H, N / H);
            w.globalAlpha =
                fa
        }
        Li(this, "postcompose", c, a, d)
    };
    Ij.prototype.i = function(a, b) {
        function c(a) {
            a = a.ia();
            return a == Of || 4 == a || 3 == a && !r
        }
        var d = a.Ha,
            e = a.da,
            f = e.projection,
            g = this.Pa(),
            h = C(g),
            k = h.Wb(f),
            e = ae(k, e.resolution, 0),
            l = Vd(k, e),
            n = a.extent;
        void 0 !== b.extent && (n = Yb(n, b.extent));
        if (Tb(n)) return !1;
        var l = Xd(k, n, l),
            q = {};
        q[e] = {};
        var p = Ai(h, f, q),
            r = g.get(Lh),
            u = this.g,
            z = new Id(0, 0, 0, 0),
            w, H, F, I;
        for (F = l.W; F <= l.Z; ++F)
            for (I = l.aa; I <= l.ca; ++I) w = Ii(h, e, F, I, d, f), c(w) || (w = Nf(w)), c(w) ? q[e][w.Cb.toString()] = w : (H = Rd(k, w.Cb, p, z, u), H || (w = Wd(k, w.Cb, z, u)) && p(e + 1, w));
        p = Object.keys(q).map(Number);
        p.sort(bb);
        u = this.f;
        u.length = 0;
        var N, z = 0;
        for (F = p.length; z < F; ++z)
            for (N in w = p[z], I = q[w], I) w = I[N], w.ia() == Of && u.push(w);
        Gi(a.qg, h, e, l);
        Hi(a, h, k, d, f, n, e, g.get(Kh));
        Di(a, h);
        Fi(a, h);
        return !0
    };

    function Jj(a) {
        Ji.call(this, a);
        this.f = !1;
        this.V = -1;
        this.F = NaN;
        this.D = Cb();
        this.g = this.C = null;
        this.s = Ae()
    }
    v(Jj, Ji);
    Jj.prototype.o = function(a, b, c) {
        var d = a.extent,
            e = a.Ha,
            f = b.If ? a.kg : {},
            g = a.da,
            h = g.projection,
            g = g.rotation,
            k = h.K(),
            l = C(this.Pa()),
            n = Mi(this, a, 0);
        Li(this, "precompose", c, a, n);
        var q = b.extent,
            p = void 0 !== q;
        p && Ki(c, a, q);
        if ((q = this.g) && !q.zb()) {
            var r = 0,
                u = 0,
                z;
            if (Ta(this.Pa(), "render")) {
                z = c.canvas.width;
                var w = c.canvas.height;
                if (g) {
                    var H = Math.round(Math.sqrt(z * z + w * w)),
                        r = (H - z) / 2,
                        u = (H - w) / 2;
                    z = w = H
                }
                this.s.canvas.width = z;
                this.s.canvas.height = w;
                z = this.s
            } else z = c;
            w = z.globalAlpha;
            z.globalAlpha = b.opacity;
            z != c && z.translate(r,
                u);
            b = a.size[0] * e;
            H = a.size[1] * e;
            Xh(z, -g, b / 2, H / 2);
            q.R(z, e, n, g, f);
            if (l.F && h.f && !Gb(k, d)) {
                for (var h = d[0], l = Ub(k), F = 0; h < k[0];) --F, n = l * F, n = Mi(this, a, n), q.R(z, e, n, g, f), h += l;
                F = 0;
                for (h = d[2]; h > k[2];) ++F, n = l * F, n = Mi(this, a, n), q.R(z, e, n, g, f), h -= l;
                n = Mi(this, a, 0)
            }
            Xh(z, g, b / 2, H / 2);
            z != c && (Li(this, "render", z, a, n), c.drawImage(z.canvas, -r, -u), z.translate(-r, -u));
            z.globalAlpha = w
        }
        p && c.restore();
        Li(this, "postcompose", c, a, n)
    };
    Jj.prototype.xb = function(a, b, c, d) {
        if (this.g) {
            var e = b.da.resolution;
            b = b.da.rotation;
            var f = this.Pa(),
                g = {};
            return this.g.xb(a, e, b, {}, function(a) {
                var b = x(a).toString();
                if (!(b in g)) return g[b] = !0, c.call(d, a, f)
            })
        }
    };
    Jj.prototype.H = function() {
        Ci(this)
    };
    Jj.prototype.i = function(a) {
        function b(a) {
            var b, d = a.f;
            d ? b = d.call(a, l) : (d = c.i) && (b = d(a, l));
            if (b) {
                if (b) {
                    d = !1;
                    if (Array.isArray(b))
                        for (var e = 0, f = b.length; e < f; ++e) d = kj(p, a, b[e], jj(l, n), this.H, this) || d;
                    else d = kj(p, a, b, jj(l, n), this.H, this) || d;
                    a = d
                } else a = !1;
                this.f = this.f || a
            }
        }
        var c = this.Pa(),
            d = C(c);
        Ei(a.la, d.C);
        Fi(a, d);
        var e = a.Ba[0],
            f = a.Ba[1],
            g = c.D,
            h = c.C;
        if (!this.f && !g && e || !h && f) return !0;
        var k = a.extent,
            h = a.da,
            e = h.projection,
            l = h.resolution,
            n = a.Ha,
            f = c.j,
            q = c.v,
            g = c.get("renderOrder");
        void 0 === g && (g = ij);
        k = Eb(k,
            q * l);
        q = h.projection.K();
        d.F && h.projection.f && !Gb(q, a.extent) && (a = Math.max(Ub(k) / 2, Ub(q)), k[0] = q[0] - a, k[2] = q[2] + a);
        if (!this.f && this.F == l && this.V == f && this.C == g && Gb(this.D, k)) return !0;
        this.g = null;
        this.f = !1;
        var p = new dj(.5 * l / n, k, l, d.ja, c.v);
        Kj(d, k, l, e);
        if (g) {
            var r = [];
            Lj(d, k, function(a) {
                r.push(a)
            }, this);
            r.sort(g);
            r.forEach(b, this)
        } else Lj(d, k, b, this);
        ej(p);
        this.F = l;
        this.V = f;
        this.C = g;
        this.D = k;
        this.g = p;
        return !0
    };

    function Mj(a, b) {
        Eh.call(this, 0, b);
        this.g = Ae();
        this.b = this.g.canvas;
        this.b.style.width = "100%";
        this.b.style.height = "100%";
        this.b.className = "ol-unselectable";
        a.insertBefore(this.b, a.childNodes[0] || null);
        this.j = !0;
        this.i = xh()
    }
    v(Mj, Eh);

    function Hh(a) {
        if (a instanceof Ih) return new Hj(a);
        if (a instanceof Jh) return new Ij(a);
        if (a instanceof li) return new Jj(a);
        console.assert(!1, "unexpected layer configuration");
        return null
    }

    function Nj(a, b, c) {
        var d = a.o,
            e = a.g;
        if (Ta(d, b)) {
            var f = c.extent,
                g = c.Ha,
                h = c.da.rotation,
                k = c.da,
                l = c.Ha / k.resolution;
            a = Dh(a.i, a.b.width / 2, a.b.height / 2, l, -l, -k.rotation, -k.center[0], -k.center[1]);
            B(d, new rh(b, new ni(e, g, f, a, h), c, e, null))
        }
    }
    Mj.prototype.T = function() {
        return "canvas"
    };
    Mj.prototype.ki = function(a) {
        if (a) {
            var b = this.g,
                c = a.Ha,
                d = Math.round(a.size[0] * c),
                c = Math.round(a.size[1] * c);
            this.b.width != d || this.b.height != c ? (this.b.width = d, this.b.height = c) : b.clearRect(0, 0, d, c);
            var e = a.da.rotation,
                f = a.da,
                g = a.vb,
                h = a.Vh;
            console.assert(g, "frameState has a coordinateToPixelTransform");
            Dh(g, a.size[0] / 2, a.size[1] / 2, 1 / f.resolution, -1 / f.resolution, -f.rotation, -f.center[0], -f.center[1]);
            f = Bh(h, g);
            g = f[0] * f[3] - f[1] * f[2];
            wa(0 !== g, 32);
            var h = f[0],
                k = f[1],
                l = f[2],
                n = f[3],
                q = f[4],
                p = f[5];
            f[0] = n / g;
            f[1] = -k / g;
            f[2] = -l / g;
            f[3] = h / g;
            f[4] = (l * p - n * q) / g;
            f[5] = -(h * p - k * q) / g;
            Nj(this, "precompose", a);
            f = a.fe;
            ib(f);
            Xh(b, e, d / 2, c / 2);
            g = a.da.resolution;
            h = 0;
            for (k = f.length; h < k; ++h) l = f[h], n = l.layer, n = Gh(this, n), l.visible && g >= l.Bb && g < l.Ib && "ready" == l.Go && n.i(a, l) && n.o(a, l, b);
            Xh(b, -e, d / 2, c / 2);
            Nj(this, "postcompose", a);
            this.j || (this.b.style.display = "", this.j = !0);
            for (var r in this.c)
                if (!(r in a.ee)) {
                    a.me.push(this.jo.bind(this));
                    break
                }
            a.me.push(Fh)
        } else this.j && (this.b.style.display = "none", this.j = !1)
    };

    function Oj() {
        this.j = 0;
        this.f = {};
        this.b = this.c = null
    }
    m = Oj.prototype;
    m.clear = function() {
        this.j = 0;
        this.f = {};
        this.b = this.c = null
    };
    m.forEach = function(a, b) {
        for (var c = this.c; c;) a.call(b, c.uc, c.Hb, this), c = c.sb
    };
    m.get = function(a) {
        a = this.f[a];
        wa(void 0 !== a, 15);
        if (a === this.b) return a.uc;
        a === this.c ? (this.c = this.c.sb, this.c.Yb = null) : (a.sb.Yb = a.Yb, a.Yb.sb = a.sb);
        a.sb = null;
        a.Yb = this.b;
        this.b = this.b.sb = a;
        return a.uc
    };
    m.Fb = function() {
        return this.j
    };
    m.cb = function() {
        var a = Array(this.j),
            b = 0,
            c;
        for (c = this.b; c; c = c.Yb) a[b++] = c.Hb;
        console.assert(b == this.j, "iterated correct number of times");
        return a
    };
    m.eb = function() {
        var a = Array(this.j),
            b = 0,
            c;
        for (c = this.b; c; c = c.Yb) a[b++] = c.uc;
        console.assert(b == this.j, "iterated correct number of times");
        return a
    };
    m.pop = function() {
        console.assert(this.c, "oldest must not be null");
        console.assert(this.b, "newest must not be null");
        var a = this.c;
        console.assert(a.Hb in this.f, "oldest is indexed in entries");
        delete this.f[a.Hb];
        a.sb && (a.sb.Yb = null);
        this.c = a.sb;
        this.c || (this.b = null);
        --this.j;
        return a.uc
    };
    m.replace = function(a, b) {
        this.get(a);
        this.f[a].uc = b
    };
    m.set = function(a, b) {
        console.assert(!(a in {}), 'key is not a standard property of objects (e.g. "__proto__")');
        wa(!(a in this.f), 16);
        var c = {
            Hb: a,
            sb: null,
            Yb: this.b,
            uc: b
        };
        this.b ? this.b.sb = c : this.c = c;
        this.b = c;
        this.f[a] = c;
        ++this.j
    };
    var Pj = ["canvas", "webgl"];

    function Qj(a) {
        Xa.call(this);
        var b = Rj(a);
        this.zc = void 0 !== a.$l ? a.$l : !1;
        this.Ac = void 0 !== a.am ? a.am : !1;
        this.cf = void 0 !== a.Ha ? a.Ha : Qe;
        this.Ye = b.Hc;
        this.ja = function() {
            this.i = void 0;
            this.ko.call(this, Date.now())
        }.bind(this);
        this.Eb = xh();
        this.ff = xh();
        this.yc = 0;
        this.f = null;
        this.$a = Cb();
        this.H = this.fa = null;
        this.c = document.createElement("DIV");
        this.c.className = "ol-viewport" + (Ue ? " ol-touch" : "");
        this.c.style.position = "relative";
        this.c.style.overflow = "hidden";
        this.c.style.width = "100%";
        this.c.style.height = "100%";
        this.c.style.msTouchAction = "none";
        this.c.style.touchAction = "none";
        this.C = document.createElement("DIV");
        this.C.className = "ol-overlaycontainer";
        this.c.appendChild(this.C);
        this.D = document.createElement("DIV");
        this.D.className = "ol-overlaycontainer-stopevent";
        a = ["click", "dblclick", "mousedown", "touchstart", "mspointerdown", Hf, "mousewheel", "wheel"];
        for (var c = 0, d = a.length; c < d; ++c) A(this.D, a[c], Ra);
        this.c.appendChild(this.D);
        this.Ca = new zf(this);
        for (var e in Kf) A(this.Ca, Kf[e], this.qh, this);
        this.ra = b.fd;
        this.v =
            null;
        A(this.c, "wheel", this.Ec, this);
        A(this.c, "mousewheel", this.Ec, this);
        this.F = b.controls;
        this.g = b.Xb;
        this.s = b.Lc;
        this.Uh = {};
        this.R = new b.lo(this.c, this);
        this.na = null;
        this.N = [];
        this.Ra = [];
        this.La = new Sf(this.Ok.bind(this), this.Il.bind(this));
        this.jf = {};
        A(this, Za(Sj), this.ml, this);
        A(this, Za(Tj), this.Jl, this);
        A(this, Za(Uj), this.Fl, this);
        A(this, Za(Vj), this.Hl, this);
        this.Ga(b.values);
        this.F.forEach(function(a) {
            a.setMap(this)
        }, this);
        A(this.F, ne, function(a) {
            a.element.setMap(this)
        }, this);
        A(this.F, pe, function(a) {
                a.element.setMap(null)
            },
            this);
        this.g.forEach(function(a) {
            a.setMap(this)
        }, this);
        A(this.g, ne, function(a) {
            a.element.setMap(this)
        }, this);
        A(this.g, pe, function(a) {
            a.element.setMap(null)
        }, this);
        this.s.forEach(this.Hg, this);
        A(this.s, ne, function(a) {
            this.Hg(a.element)
        }, this);
        A(this.s, pe, function(a) {
            var b = a.element.Ua();
            void 0 !== b && delete this.Uh[b.toString()];
            a.element.setMap(null)
        }, this)
    }
    v(Qj, Xa);

    function Wj(a, b) {
        a.g.push(b)
    }

    function Xj(a, b) {
        eh(Yj(a)).push(b)
    }
    m = Qj.prototype;
    m.Hg = function(a) {
        var b = a.Ua();
        void 0 !== b && (this.Uh[b.toString()] = a);
        a.setMap(this)
    };
    m.ab = function(a) {
        this.render();
        Array.prototype.push.apply(this.N, arguments)
    };
    m.qa = function() {
        this.Ca.Ma();
        this.R.Ma();
        Oa(this.c, "wheel", this.Ec, this);
        Oa(this.c, "mousewheel", this.Ec, this);
        void 0 !== this.o && (window.removeEventListener("resize", this.o, !1), this.o = void 0);
        this.i && (cancelAnimationFrame(this.i), this.i = void 0);
        this.set(Vj, null);
        Xa.prototype.qa.call(this)
    };

    function Zj(a, b, c, d, e, f) {
        if (a.f) return b = a.Ia(b), a.R.xb(b, a.f, c, void 0 !== d ? d : null, void 0 !== e ? e : ac, void 0 !== f ? f : null)
    }

    function ak(a, b, c, d) {
        if (!a.f) return !1;
        b = a.Ia(b);
        var e = a.R;
        return void 0 !== e.xb(b, a.f, ac, e, void 0 !== c ? c : ac, void 0 !== d ? d : null)
    }

    function xf(a, b) {
        var c = a.c.getBoundingClientRect(),
            d = b.changedTouches ? b.changedTouches[0] : b;
        return [d.clientX - c.left, d.clientY - c.top]
    }

    function bk(a) {
        a = a.get(Vj);
        return void 0 !== a ? "string" === typeof a ? document.getElementById(a) : a : null
    }
    m.Ia = function(a) {
        var b = this.f;
        return b ? Ch(b.Vh, a.slice()) : null
    };

    function Yj(a) {
        return a.get(Sj)
    }

    function qg(a, b) {
        var c = a.f;
        return c ? Ch(c.vb, b.slice(0, 2)) : null
    }

    function vg(a) {
        return a.get(Uj)
    }

    function D(a) {
        return a.get(Tj)
    }
    m.Ok = function(a, b, c, d) {
        var e = this.f;
        if (!(e && b in e.ud && e.ud[b][a.nc()])) return Infinity;
        a = c[0] - e.focus[0];
        c = c[1] - e.focus[1];
        return 65536 * Math.log(d) + Math.sqrt(a * a + c * c) / d
    };
    m.Ec = function(a, b) {
        var c = new wf(b || a.type, this, a);
        this.qh(c)
    };
    m.qh = function(a) {
        if (this.f) {
            this.na = a.coordinate;
            a.frameState = this.f;
            var b = this.g.c,
                c;
            if (!1 !== B(this, a))
                for (c = b.length - 1; 0 <= c; c--) {
                    var d = b[c];
                    if (d.getActive() && !d.handleEvent(a)) break
                }
        }
    };
    m.Cl = function() {
        var a = this.f,
            b = this.La;
        if (!b.zb()) {
            var c = 16,
                d = c;
            if (a) {
                var e = a.Ba;
                e[0] && (c = this.zc ? 8 : 0, d = 2);
                e[1] && (c = this.Ac ? 8 : 0, d = 2)
            }
            if (b.g < c) {
                var e = b.v,
                    f = b.b,
                    g = b.f,
                    h = 0,
                    k = f.length,
                    l, n, q;
                for (n = 0; n < k; ++n) l = f[n], q = e(l), Infinity == q ? delete b.c[b.o(l)] : (g[h] = q, f[h++] = l);
                f.length = h;
                g.length = h;
                for (e = (b.b.length >> 1) - 1; 0 <= e; e--) Rf(b, e);
                for (e = 0; b.g < c && e < d && 0 < b.Fb();) f = b, h = f.b, console.assert(0 < h.length, "must have elements in order to be able to dequeue"), k = f.f, g = h[0], 1 == h.length ? (h.length = 0, k.length = 0) : (h[0] =
                    h.pop(), k[0] = k.pop(), Rf(f, 0)), h = f.o(g), console.assert(h in f.c, "key %s is not listed as queued", h), delete f.c[h], f = g[0], g = f.nc(), 0 !== f.ia() || g in b.j || (b.j[g] = !0, ++b.g, ++e, f.load()), console.assert(Object.keys(b.j).length === b.g)
            }
        }
        b = this.Ra;
        d = 0;
        for (c = b.length; d < c; ++d) b[d](this, a);
        b.length = 0
    };
    m.Fl = function() {
        this.render()
    };
    m.Hl = function() {
        var a;
        this.get(Vj) && (a = bk(this), console.assert(null !== a, "expects a non-null value for targetElement"));
        if (this.v) {
            for (var b = 0, c = this.v.length; b < c; ++b) Ja(this.v[b]);
            this.v = null
        }
        a ? (a.appendChild(this.c), a = this.ra ? this.ra : a, this.v = [A(a, "keydown", this.Ec, this), A(a, "keypress", this.Ec, this)], this.o || (this.o = this.td.bind(this), window.addEventListener("resize", this.o, !1))) : (Be(this.c), void 0 !== this.o && (window.removeEventListener("resize", this.o, !1), this.o = void 0));
        this.td()
    };
    m.Il = function() {
        this.render()
    };
    m.Kl = function() {
        this.render()
    };
    m.Jl = function() {
        this.fa && (Ja(this.fa), this.fa = null);
        var a = D(this);
        a && (this.fa = A(a, "propertychange", this.Kl, this));
        this.render()
    };
    m.ml = function() {
        this.H && (this.H.forEach(Ja), this.H = null);
        var a = Yj(this);
        a && (this.H = [A(a, "propertychange", this.render, this), A(a, "change", this.render, this)]);
        this.render()
    };

    function ck(a) {
        a.i && cancelAnimationFrame(a.i);
        a.ja()
    }
    m.render = function() {
        void 0 === this.i && (this.i = requestAnimationFrame(this.ja))
    };
    m.ko = function(a) {
        var b, c, d, e = vg(this),
            f = D(this),
            g = Cb(),
            h = null;
        if (void 0 !== e && 0 < e[0] && 0 < e[1] && f && wd(f)) {
            var h = rd(f, this.f ? this.f.Ba : void 0),
                k = Yj(this).tf(),
                l = {};
            b = 0;
            for (c = k.length; b < c; ++b) l[x(k[b].layer)] = k[b];
            d = f.ia();
            h = {
                animate: !1,
                la: {},
                vb: this.Eb,
                extent: g,
                focus: this.na ? this.na : d.center,
                index: this.yc++,
                ee: l,
                fe: k,
                Hc: Ea({}, this.Ye),
                Ha: this.cf,
                Vh: this.ff,
                me: [],
                size: e,
                kg: this.jf,
                Mo: this.La,
                time: a,
                qg: {},
                da: d,
                Ba: h,
                ud: {}
            }
        }
        if (h) {
            a = this.N;
            b = e = 0;
            for (c = a.length; b < c; ++b) f = a[b], f(this, h) && (a[e++] = f);
            a.length =
                e;
            h.extent = Xb(d.center, d.resolution, d.rotation, h.size, g)
        }
        this.f = h;
        this.R.ki(h);
        h && (h.animate && this.render(), Array.prototype.push.apply(this.Ra, h.me), 0 !== this.N.length || h.Ba[0] || h.Ba[1] || Mb(h.extent, this.$a) || (B(this, new Ce("moveend", this, h)), Fb(h.extent, this.$a)));
        B(this, new Ce("postrender", this, h));
        setTimeout(this.Cl.bind(this), 0)
    };
    m.ze = function(a) {
        this.set(Uj, a)
    };
    m.td = function() {
        var a = bk(this);
        if (a) {
            var b = getComputedStyle(a);
            this.ze([a.offsetWidth - parseFloat(b.borderLeftWidth) - parseFloat(b.paddingLeft) - parseFloat(b.paddingRight) - parseFloat(b.borderRightWidth), a.offsetHeight - parseFloat(b.borderTopWidth) - parseFloat(b.paddingTop) - parseFloat(b.paddingBottom) - parseFloat(b.borderBottomWidth)])
        } else this.ze(void 0)
    };

    function Rj(a) {
        var b = null;
        void 0 !== a.fd && (b = "string" === typeof a.fd ? document.getElementById(a.fd) : a.fd);
        var c = {},
            d = {};
        if (void 0 === a.ua || "boolean" === typeof a.ua && a.ua) d["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAHGAAABxgEXwfpGAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAhNQTFRF////AP//AICAgP//AFVVQECA////K1VVSbbbYL/fJ05idsTYJFtbbcjbJllmZszWWMTOIFhoHlNiZszTa9DdUcHNHlNlV8XRIVdiasrUHlZjIVZjaMnVH1RlIFRkH1RkH1ZlasvYasvXVsPQH1VkacnVa8vWIVZjIFRjVMPQa8rXIVVkXsXRsNveIFVkIFZlIVVj3eDeh6GmbMvXH1ZkIFRka8rWbMvXIFVkIFVjIFVkbMvWH1VjbMvWIFVlbcvWIFVla8vVIFVkbMvWbMvVH1VkbMvWIFVlbcvWIFVkbcvVbMvWjNPbIFVkU8LPwMzNIFVkbczWIFVkbsvWbMvXIFVkRnB8bcvW2+TkW8XRIFVkIlZlJVloJlpoKlxrLl9tMmJwOWd0Omh1RXF8TneCT3iDUHiDU8LPVMLPVcLPVcPQVsPPVsPQV8PQWMTQWsTQW8TQXMXSXsXRX4SNX8bSYMfTYcfTYsfTY8jUZcfSZsnUaIqTacrVasrVa8jTa8rWbI2VbMvWbcvWdJObdcvUdszUd8vVeJaee87Yfc3WgJyjhqGnitDYjaarldPZnrK2oNbborW5o9bbo9fbpLa6q9ndrL3ArtndscDDutzfu8fJwN7gwt7gxc/QyuHhy+HizeHi0NfX0+Pj19zb1+Tj2uXk29/e3uLg3+Lh3+bl4uXj4ufl4+fl5Ofl5ufl5ujm5+jmySDnBAAAAFp0Uk5TAAECAgMEBAYHCA0NDg4UGRogIiMmKSssLzU7PkJJT1JTVFliY2hrdHZ3foSFhYeJjY2QkpugqbG1tre5w8zQ09XY3uXn6+zx8vT09vf4+Pj5+fr6/P39/f3+gz7SsAAAAVVJREFUOMtjYKA7EBDnwCPLrObS1BRiLoJLnte6CQy8FLHLCzs2QUG4FjZ5GbcmBDDjxJBXDWxCBrb8aM4zbkIDzpLYnAcE9VXlJSWlZRU13koIeW57mGx5XjoMZEUqwxWYQaQbSzLSkYGfKFSe0QMsX5WbjgY0YS4MBplemI4BdGBW+DQ11eZiymfqQuXZIjqwyadPNoSZ4L+0FVM6e+oGI6g8a9iKNT3o8kVzNkzRg5lgl7p4wyRUL9Yt2jAxVh6mQCogae6GmflI8p0r13VFWTHBQ0rWPW7ahgWVcPm+9cuLoyy4kCJDzCm6d8PSFoh0zvQNC5OjDJhQopPPJqph1doJBUD5tnkbZiUEqaCnB3bTqLTFG1bPn71kw4b+GFdpLElKIzRxxgYgWNYc5SCENVHKeUaltHdXx0dZ8uBI1hJ2UUDgq82CM2MwKeibqAvSO7MCABq0wXEPiqWEAAAAAElFTkSuQmCC"] =
            "https://openlayers.org/";
        else {
            var e = a.ua;
            "string" === typeof e ? d[e] = "" : e instanceof HTMLElement ? d[x(e).toString()] = e : e && (wa("string" == typeof e.href, 44), wa("string" == typeof e.src, 45), d[e.src] = e.href)
        }
        e = a.layers instanceof ch ? a.layers : new ch({
            layers: a.layers
        });
        c[Sj] = e;
        c[Vj] = a.target;
        c[Tj] = void 0 !== a.view ? a.view : new kd;
        var e = Eh,
            f;
        void 0 !== a.ve ? (Array.isArray(a.ve) ? f = a.ve : "string" === typeof a.ve ? f = [a.ve] : wa(!1, 46), 0 <= f.indexOf("dom") && (console.assert(!1, "The DOM render has been removed"), f = f.concat(Pj))) :
            f = Pj;
        var g, h;
        g = 0;
        for (h = f.length; g < h; ++g)
            if ("canvas" == f[g] && Se) {
                e = Mj;
                break
            }
        void 0 !== a.controls ? Array.isArray(a.controls) ? f = new ie(a.controls.slice()) : (wa(a.controls instanceof ie, 47), f = a.controls) : f = Ke();
        void 0 !== a.Xb ? Array.isArray(a.Xb) ? g = new ie(a.Xb.slice()) : (wa(a.Xb instanceof ie, 48), g = a.Xb) : g = Xg();
        void 0 !== a.Lc ? Array.isArray(a.Lc) ? a = new ie(a.Lc.slice()) : (wa(a.Lc instanceof ie, 49), a = a.Lc) : a = new ie;
        return {
            controls: f,
            Xb: g,
            fd: b,
            Hc: d,
            Lc: a,
            lo: e,
            values: c
        }
    }
    var Sj = "layergroup",
        Uj = "size",
        Vj = "target",
        Tj = "view";
    kc(jh);
    kc(qh);
    qh.forEach(function(a) {
        jh.forEach(function(b) {
            lc(a, b, kh);
            lc(b, a, lh)
        })
    });

    function dk(a) {
        Xa.call(this);
        this.v = a.id;
        this.s = void 0 !== a.Sl ? a.Sl : !0;
        this.D = void 0 !== a.ti ? a.ti : !0;
        this.f = document.createElement("DIV");
        this.f.className = "ol-overlay-container";
        this.f.style.position = "absolute";
        this.Pe = void 0 !== a.Pe ? a.Pe : !1;
        this.o = void 0 !== a.Fj ? a.Fj : {};
        this.i = void 0 !== a.Gj ? a.Gj : 20;
        this.c = {
            Md: "",
            ge: "",
            we: "",
            Ee: "",
            visible: !0
        };
        this.g = null;
        A(this, Za(ek), this.kl, this);
        A(this, Za(fk), this.sl, this);
        A(this, Za(gk), this.yl, this);
        A(this, Za(hk), this.Al, this);
        A(this, Za(ik), this.Bl, this);
        void 0 !==
            a.element && this.set(ek, a.element);
        this.set(gk, void 0 !== a.offset ? a.offset : [0, 0]);
        this.set(ik, void 0 !== a.Sf ? a.Sf : jk);
        void 0 !== a.position && this.setPosition(a.position)
    }
    v(dk, Xa);
    m = dk.prototype;
    m.Ua = function() {
        return this.v
    };
    m.kl = function() {
        for (var a = this.f; a.lastChild;) a.removeChild(a.lastChild);
        (a = this.get(ek)) && this.f.appendChild(a)
    };
    m.sl = function() {
        this.g && (Be(this.f), Ja(this.g), this.g = null);
        var a = this.get(fk);
        a && (this.g = A(a, "postrender", this.render, this), kk(this), a = this.D ? a.D : a.C, this.s ? a.insertBefore(this.f, a.childNodes[0] || null) : a.appendChild(this.f))
    };
    m.render = function() {
        kk(this)
    };
    m.yl = function() {
        kk(this)
    };
    m.Al = function() {
        kk(this);
        if (void 0 !== this.get(hk) && this.Pe) {
            var a = this.get(fk);
            if (void 0 !== a && bk(a)) {
                var b = lk(bk(a), vg(a)),
                    c = this.get(ek),
                    d = c.offsetWidth,
                    e = c.currentStyle || getComputedStyle(c),
                    d = d + (parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10)),
                    e = c.offsetHeight,
                    f = c.currentStyle || getComputedStyle(c),
                    e = e + (parseInt(f.marginTop, 10) + parseInt(f.marginBottom, 10)),
                    g = lk(c, [d, e]),
                    c = this.i;
                Gb(b, g) || (d = g[0] - b[0], e = b[2] - g[2], f = g[1] - b[1], g = b[3] - g[3], b = [0, 0], 0 > d ? b[0] = d - c : 0 > e && (b[0] = Math.abs(e) + c), 0 > f ? b[1] =
                    f - c : 0 > g && (b[1] = Math.abs(g) + c), 0 === b[0] && 0 === b[1]) || (c = qd(D(a)), d = qg(a, c), b = [d[0] + b[0], d[1] + b[1]], this.o && (this.o.source = c, a.ab(Fd(this.o))), zd(D(a), a.Ia(b)))
            }
        }
    };
    m.Bl = function() {
        kk(this)
    };
    m.setMap = function(a) {
        this.set(fk, a)
    };
    m.setPosition = function(a) {
        this.set(hk, a)
    };

    function lk(a, b) {
        var c = a.getBoundingClientRect(),
            d = c.left + window.pageXOffset,
            c = c.top + window.pageYOffset;
        return [d, c, d + b[0], c + b[1]]
    }

    function mk(a, b) {
        a.c.visible !== b && (a.f.style.display = b ? "" : "none", a.c.visible = b)
    }

    function kk(a) {
        var b = a.get(fk),
            c = a.get(hk);
        if (void 0 !== b && b.f && void 0 !== c) {
            var c = qg(b, c),
                d = vg(b),
                b = a.f.style,
                e = a.get(gk),
                f = a.get(ik);
            console.assert(void 0 !== f, "positioning should be defined");
            var g = e[0],
                e = e[1];
            if (f == nk || f == ok || f == pk) "" !== a.c.ge && (a.c.ge = b.left = ""), g = Math.round(d[0] - c[0] - g) + "px", a.c.we != g && (a.c.we = b.right = g);
            else {
                "" !== a.c.we && (a.c.we = b.right = "");
                if (f == qk || f == rk || f == sk) g -= a.f.offsetWidth / 2;
                g = Math.round(c[0] + g) + "px";
                a.c.ge != g && (a.c.ge = b.left = g)
            }
            if (f == tk || f == qk || f == nk) "" !== a.c.Ee && (a.c.Ee =
                b.top = ""), c = Math.round(d[1] - c[1] - e) + "px", a.c.Md != c && (a.c.Md = b.bottom = c);
            else {
                "" !== a.c.Md && (a.c.Md = b.bottom = "");
                if (f == uk || f == rk || f == ok) e -= a.f.offsetHeight / 2;
                c = Math.round(c[1] + e) + "px";
                a.c.Ee != c && (a.c.Ee = b.top = c)
            }
            mk(a, !0)
        } else mk(a, !1)
    }
    var tk = "bottom-left",
        qk = "bottom-center",
        nk = "bottom-right",
        uk = "center-left",
        rk = "center-center",
        ok = "center-right",
        jk = "top-left",
        sk = "top-center",
        pk = "top-right",
        ek = "element",
        fk = "map",
        gk = "offset",
        hk = "position",
        ik = "positioning";

    function vk(a) {
        a = a ? a : {};
        var b = void 0 !== a.className ? a.className : "ol-scale-line";
        this.o = document.createElement("DIV");
        this.o.className = b + "-inner";
        this.c = document.createElement("DIV");
        this.c.className = b + " ol-unselectable";
        this.c.appendChild(this.o);
        this.s = null;
        this.i = void 0 !== a.minWidth ? a.minWidth : 64;
        this.f = !1;
        this.F = void 0;
        this.C = "";
        De.call(this, {
            element: this.c,
            render: a.render ? a.render : wk,
            target: a.target
        });
        A(this, Za(xk), this.H, this);
        this.set(xk, a.units || yk)
    }
    v(vk, De);
    var zk = [1, 2, 5];
    vk.prototype.g = function() {
        return this.get(xk)
    };

    function wk(a) {
        (a = a.frameState) ? this.s = a.da: this.s = null;
        Ak(this)
    }
    vk.prototype.H = function() {
        Ak(this)
    };

    function Ak(a) {
        var b = a.s;
        if (b) {
            var c = b.projection,
                d = nc(c),
                b = c.gc(b.resolution, b.center) * d,
                d = a.i * b,
                c = "",
                e = a.g();
            e == Bk ? (c = fc.degrees, b /= c, d < c / 60 ? (c = "\u2033", b *= 3600) : d < c ? (c = "\u2032", b *= 60) : c = "\u00b0") : e == Ck ? .9144 > d ? (c = "in", b /= .0254) : 1609.344 > d ? (c = "ft", b /= .3048) : (c = "mi", b /= 1609.344) : e == Dk ? (b /= 1852, c = "nm") : e == yk ? 1 > d ? (c = "mm", b *= 1E3) : 1E3 > d ? c = "m" : (c = "km", b /= 1E3) : e == Ek ? .9144 > d ? (c = "in", b *= 39.37) : 1609.344 > d ? (c = "ft", b /= .30480061) : (c = "mi", b /= 1609.3472) : wa(!1, 33);
            for (var e = 3 * Math.floor(Math.log(a.i * b) / Math.log(10)),
                    f;;) {
                f = zk[(e % 3 + 3) % 3] * Math.pow(10, Math.floor(e / 3));
                d = Math.round(f / b);
                if (isNaN(d)) {
                    a.c.style.display = "none";
                    a.f = !1;
                    return
                }
                if (d >= a.i) break;
                ++e
            }
            b = f + " " + c;
            a.C != b && (a.o.innerHTML = b, a.C = b);
            a.F != d && (a.o.style.width = d + "px", a.F = d);
            a.f || (a.c.style.display = "", a.f = !0)
        } else a.f && (a.c.style.display = "none", a.f = !1)
    }
    var xk = "units",
        Bk = "degrees",
        Ck = "imperial",
        Dk = "nautical",
        yk = "metric",
        Ek = "us";

    function Fk(a) {
        Xa.call(this);
        this.o = void 0;
        this.c = "geometry";
        this.i = null;
        this.f = void 0;
        this.g = null;
        A(this, Za(this.c), this.ae, this);
        void 0 !== a && (a instanceof Ac || !a ? Gk(this, a) : this.Ga(a))
    }
    v(Fk, Xa);
    m = Fk.prototype;
    m.clone = function() {
        var a = new Fk(ab(this));
        Hk(a, this.c);
        var b = this.G();
        b && Gk(a, b.clone());
        (b = this.hc()) && a.setStyle(b);
        return a
    };
    m.G = function() {
        return this.get(this.c)
    };
    m.Ua = function() {
        return this.o
    };
    m.hc = function() {
        return this.i
    };
    m.Mm = function() {
        this.b()
    };
    m.ae = function() {
        this.g && (Ja(this.g), this.g = null);
        var a = this.G();
        a && (this.g = A(a, "change", this.Mm, this));
        this.b()
    };

    function Gk(a, b) {
        a.set(a.c, b)
    }
    m.setStyle = function(a) {
        this.f = (this.i = a) ? Ik(a) : void 0;
        this.b()
    };

    function Jk(a, b) {
        a.o = b;
        a.b()
    }

    function Hk(a, b) {
        Oa(a, Za(a.c), a.ae, a);
        a.c = b;
        A(a, Za(a.c), a.ae, a);
        a.ae()
    }

    function Ik(a) {
        if ("function" !== typeof a) {
            var b;
            Array.isArray(a) ? b = a : (wa(a instanceof ei, 41), b = [a]);
            a = function() {
                return b
            }
        }
        return a
    };
    var Kk = document.implementation.createDocument("", "", null);

    function Lk(a, b) {
        return Kk.createElementNS(a, b)
    }

    function Mk(a) {
        return Nk(a, !1, []).join("")
    }

    function Nk(a, b, c) {
        if (a.nodeType == Node.CDATA_SECTION_NODE || a.nodeType == Node.TEXT_NODE) b ? c.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : c.push(a.nodeValue);
        else
            for (a = a.firstChild; a; a = a.nextSibling) Nk(a, b, c);
        return c
    }

    function Ok(a) {
        return a instanceof Document
    }

    function Pk(a) {
        return a instanceof Node
    }

    function Qk(a) {
        return (new DOMParser).parseFromString(a, "application/xml")
    }

    function Rk(a, b) {
        return function(c, d) {
            var e = a.call(b, c, d);
            if (void 0 !== e) {
                console.assert(Array.isArray(e), "valueReader function is expected to return an array of values");
                var f = d[d.length - 1];
                console.assert(Array.isArray(f), "objectStack is supposed to be an array of arrays");
                eb(f, e)
            }
        }
    }

    function Sk(a, b) {
        return function(c, d) {
            var e = a.call(void 0 !== b ? b : this, c, d);
            if (void 0 !== e) {
                var f = d[d.length - 1];
                console.assert(Array.isArray(f), "objectStack is supposed to be an array of arrays");
                f.push(e)
            }
        }
    }

    function Tk(a, b) {
        return function(c, d) {
            var e = a.call(void 0 !== b ? b : this, c, d);
            void 0 !== e && (d[d.length - 1] = e)
        }
    }

    function Uk(a) {
        console.assert(void 0 !== a, "undefined valueReader, expected function(this: T, Node, Array.<*>)");
        return function(b, c) {
            var d = a.call(this, b, c);
            if (void 0 !== d) {
                var e = c[c.length - 1],
                    f = b.localName,
                    g;
                f in e ? g = e[f] : g = e[f] = [];
                g.push(d)
            }
        }
    }

    function E(a, b) {
        console.assert(void 0 !== a, "undefined valueReader, expected function(this: T, Node, Array.<*>)");
        return function(c, d) {
            var e = a.call(this, c, d);
            void 0 !== e && (d[d.length - 1][void 0 !== b ? b : c.localName] = e)
        }
    }

    function G(a, b) {
        return function(c, d, e) {
            a.call(void 0 !== b ? b : this, c, d, e);
            d = e[e.length - 1].node;
            console.assert(Pk(d) || Ok(d), "expected parentNode %s to be a Node or a Document", d);
            d.appendChild(c)
        }
    }

    function Vk(a) {
        var b, c;
        return function(d, e, f) {
            if (!b) {
                b = {};
                var g = {};
                g[d.localName] = a;
                b[d.namespaceURI] = g;
                c = Wk(d.localName)
            }
            Xk(b, c, e, f)
        }
    }

    function Wk(a, b) {
        return function(c, d, e) {
            c = d[d.length - 1].node;
            console.assert(Pk(c) || Ok(c), "expected node %s to be a Node or a Document", c);
            d = a;
            void 0 === d && (d = e);
            e = b;
            void 0 === b && (e = c.namespaceURI);
            console.assert(void 0 !== d, "nodeName was undefined");
            return Lk(e, d)
        }
    }
    var Yk = Wk();

    function Zk(a, b) {
        for (var c = b.length, d = Array(c), e = 0; e < c; ++e) d[e] = a[b[e]];
        return d
    }

    function L(a, b, c) {
        c = void 0 !== c ? c : {};
        var d, e;
        d = 0;
        for (e = a.length; d < e; ++d) c[a[d]] = b;
        return c
    }

    function $k(a, b, c, d) {
        for (b = b.firstElementChild; b; b = b.nextElementSibling) {
            var e = a[b.namespaceURI];
            void 0 !== e && (e = e[b.localName]) && e.call(d, b, c)
        }
    }

    function Q(a, b, c, d, e) {
        d.push(a);
        $k(b, c, d, e);
        return d.pop()
    }

    function Xk(a, b, c, d, e, f) {
        for (var g = (void 0 !== e ? e : c).length, h, k, l = 0; l < g; ++l) h = c[l], void 0 !== h && (k = b.call(f, h, d, void 0 !== e ? e[l] : void 0), void 0 !== k && a[k.namespaceURI][k.localName].call(f, k, h, d))
    }

    function al(a, b, c, d, e, f, g) {
        e.push(a);
        Xk(b, c, d, e, f, g);
        e.pop()
    };

    function bl(a, b, c) {
        return function(d, e, f) {
            var g = new XMLHttpRequest;
            g.open("GET", "function" === typeof a ? a(d, e, f) : a, !0);
            "arraybuffer" == b.T() && (g.responseType = "arraybuffer");
            g.onload = function() {
                if (!g.status || 200 <= g.status && 300 > g.status) {
                    var a = b.T(),
                        d;
                    "json" == a || "text" == a ? d = g.responseText : "xml" == a ? (d = g.responseXML) || (d = Qk(g.responseText)) : "arraybuffer" == a && (d = g.response);
                    d && c.call(this, b.readFeatures(d, {
                        Ta: f
                    }), b.se(d))
                }
            }.bind(this);
            g.send()
        }
    }

    function cl(a, b) {
        return bl(a, b, function(a) {
            dl(this, a)
        })
    };

    function el() {
        this.i = this.wb = null
    }

    function fl(a, b, c) {
        var d;
        c && (d = {
            Ub: c.Ub ? c.Ub : a.se(b),
            Ta: c.Ta
        });
        return gl(a, d)
    }

    function gl(a, b) {
        return Ea({
            Ub: a.wb,
            Ta: a.i
        }, b)
    }

    function hl(a, b, c) {
        var d = c ? jc(c.Ta) : null,
            e = c ? jc(c.Ub) : null,
            f;
        d && e && !vc(d, e) ? a instanceof Ac ? f = (b ? a.clone() : a).transform(b ? d : e, b ? e : d) : f = zc(b ? a.slice() : a, b ? d : e, b ? e : d) : f = a;
        if (b && c && c.decimals) {
            var g = Math.pow(10, c.decimals);
            a = function(a) {
                for (var b = 0, c = a.length; b < c; ++b) a[b] = Math.round(a[b] * g) / g;
                return a
            };
            Array.isArray(f) ? a(f) : f.Qc(a)
        }
        return f
    };

    function il() {
        el.call(this)
    }
    v(il, el);

    function jl(a) {
        return "string" === typeof a ? (a = JSON.parse(a)) ? a : null : null !== a ? a : null
    }
    m = il.prototype;
    m.T = function() {
        return "json"
    };
    m.readFeature = function(a, b) {
        return kl(this, jl(a), fl(this, a, b))
    };
    m.readFeatures = function(a, b) {
        var c = jl(a),
            d = fl(this, a, b),
            e;
        if ("FeatureCollection" === c.type) {
            e = [];
            var c = c.features,
                f, g;
            f = 0;
            for (g = c.length; f < g; ++f) e.push(kl(this, c[f], d))
        } else e = [kl(this, c, d)];
        return e
    };
    m.readGeometry = function(a, b) {
        var c = jl(a),
            d = fl(this, a, b);
        return ll(c, d)
    };
    m.se = function(a) {
        a = jl(a).crs;
        var b;
        a ? "name" == a.type ? b = jc(a.properties.name) : "EPSG" == a.type ? b = jc("EPSG:" + a.properties.code) : wa(!1, 36) : b = this.wb;
        return b
    };
    m.writeFeature = function(a, b) {
        return JSON.stringify(ml(this, a, b))
    };
    m.writeFeatures = function(a, b) {
        return JSON.stringify(nl(this, a, b))
    };
    m.writeGeometry = function(a, b) {
        return JSON.stringify(ol(a, gl(this, b)))
    };

    function pl(a, b, c, d, e) {
        console.assert(!0, "fraction should be in between 0 and 1");
        var f = NaN,
            g = NaN,
            h = (c - b) / d;
        if (0 === h) console.assert(!1, "n cannot be 0");
        else if (1 == h) f = a[b], g = a[b + 1];
        else if (2 == h) f = .5 * a[b] + .5 * a[b + d], g = .5 * a[b + 1] + .5 * a[b + d + 1];
        else {
            var g = a[b],
                h = a[b + 1],
                k = 0,
                f = [0],
                l;
            for (l = b + d; l < c; l += d) {
                var n = a[l],
                    q = a[l + 1],
                    k = k + Math.sqrt((n - g) * (n - g) + (q - h) * (q - h));
                f.push(k);
                g = n;
                h = q
            }
            c = .5 * k;
            k = 0;
            l = f.length;
            for (n = !1; k < l;) g = k + (l - k >> 1), h = +bb(f[g], c), 0 > h ? k = g + 1 : (l = g, n = !h);
            g = n ? k : ~k;
            0 > g ? (c = (c - f[-g - 2]) / (f[-g - 1] - f[-g - 2]),
                b += (-g - 2) * d, f = a[b], f += c * (a[b + d] - f), g = a[b + 1], g += c * (a[b + d + 1] - g)) : (f = a[b + g * d], g = a[b + g * d + 1])
        }
        return e ? (e[0] = f, e[1] = g, e) : [f, g]
    };

    function ql(a, b, c) {
        var d = a[0],
            e = a[1],
            f = 0,
            g;
        for (g = 0 + c; g < b; g += c) var h = a[g],
            k = a[g + 1],
            f = f + Math.sqrt((h - d) * (h - d) + (k - e) * (k - e)),
            d = h,
            e = k;
        return f
    };

    function rl(a, b) {
        Cc.call(this);
        this.f = null;
        this.i = -1;
        this.ba(a, b)
    }
    v(rl, Cc);
    m = rl.prototype;
    m.clone = function() {
        var a = new rl(null);
        a.U(this.layout, this.B.slice());
        return a
    };
    m.M = function() {
        return Kc(this.B, 0, this.B.length, this.J)
    };

    function sl(a, b) {
        return pl(a.B, 0, a.B.length, a.J, b)
    }

    function vi(a) {
        a.i != a.j && (a.f = sl(a, a.f), a.i = a.j);
        return a.f
    }
    m.Dc = function(a) {
        var b = [];
        b.length = Mc(this.B, 0, this.B.length, this.J, a, b, 0);
        a = new rl(null);
        a.U("XY", b);
        return a
    };
    m.T = function() {
        return "LineString"
    };
    m.Gb = function(a) {
        return Wc(this.B, 0, this.B.length, this.J, a)
    };
    m.ba = function(a, b) {
        a ? (Gc(this, b, a, 1), this.B || (this.B = []), this.B.length = Ic(this.B, 0, a, this.J), this.b()) : this.U("XY", null)
    };
    m.U = function(a, b) {
        Fc(this, a, b);
        this.b()
    };

    function tl(a, b) {
        Cc.call(this);
        this.f = [];
        this.ba(a, b)
    }
    v(tl, Cc);
    m = tl.prototype;
    m.clone = function() {
        var a = new tl(null);
        a.U(this.layout, this.B.slice(), this.f.slice());
        return a
    };
    m.M = function() {
        return Lc(this.B, 0, this.f, this.J)
    };
    m.nb = function() {
        return this.f
    };

    function ul(a) {
        var b = a.B,
            c = a.f;
        a = a.layout;
        var d = [],
            e = 0,
            f, g;
        f = 0;
        for (g = c.length; f < g; ++f) {
            var h = c[f],
                k = new rl(null);
            k.U(a, b.slice(e, h));
            d.push(k);
            e = h
        }
        return d
    }

    function wi(a) {
        var b = [],
            c = a.B,
            d = 0,
            e = a.f;
        a = a.J;
        var f, g;
        f = 0;
        for (g = e.length; f < g; ++f) {
            var h = e[f],
                d = pl(c, d, h, a);
            eb(b, d);
            d = h
        }
        return b
    }
    m.Dc = function(a) {
        var b = [],
            c = [],
            d = this.B,
            e = this.f,
            f = this.J,
            g = 0,
            h = 0,
            k, l;
        k = 0;
        for (l = e.length; k < l; ++k) {
            var n = e[k],
                h = Mc(d, g, n, f, a, b, h);
            c.push(h);
            g = n
        }
        b.length = h;
        a = new tl(null);
        a.U("XY", b, c);
        return a
    };
    m.T = function() {
        return "MultiLineString"
    };
    m.Gb = function(a) {
        a: {
            var b = this.B,
                c = this.f,
                d = this.J,
                e = 0,
                f, g;f = 0;
            for (g = c.length; f < g; ++f) {
                if (Wc(b, e, c[f], d, a)) {
                    a = !0;
                    break a
                }
                e = c[f]
            }
            a = !1
        }
        return a
    };
    m.ba = function(a, b) {
        if (a) {
            Gc(this, b, a, 2);
            this.B || (this.B = []);
            var c = Jc(this.B, 0, a, this.J, this.f);
            this.B.length = 0 === c.length ? 0 : c[c.length - 1];
            this.b()
        } else this.U("XY", null, this.f)
    };
    m.U = function(a, b, c) {
        b ? 0 === c.length ? console.assert(0 === b.length, "flatCoordinates should be an empty array") : console.assert(b.length == c[c.length - 1], "length of flatCoordinates array should match the last value of ends") : console.assert(c && 0 === c.length, "ends must be truthy and ends.length should be 0");
        Fc(this, a, b);
        this.f = c;
        this.b()
    };

    function vl(a, b) {
        var c = a.layout,
            d = [],
            e = [],
            f, g;
        f = 0;
        for (g = b.length; f < g; ++f) {
            var h = b[f];
            0 === f ? c = h.layout : console.assert(h.layout == c, "layout of lineString should match layout");
            eb(d, h.B);
            e.push(d.length)
        }
        a.U(c, d, e)
    };

    function wl(a, b) {
        Cc.call(this);
        this.ba(a, b)
    }
    v(wl, Cc);
    m = wl.prototype;
    m.clone = function() {
        var a = new wl(null);
        a.U(this.layout, this.B.slice());
        return a
    };
    m.M = function() {
        return Kc(this.B, 0, this.B.length, this.J)
    };

    function xl(a) {
        var b = a.B,
            c = a.layout;
        a = a.J;
        var d = [],
            e, f;
        e = 0;
        for (f = b.length; e < f; e += a) {
            var g = new Qc(null);
            g.U(c, b.slice(e, e + a));
            d.push(g)
        }
        return d
    }
    m.T = function() {
        return "MultiPoint"
    };
    m.Gb = function(a) {
        var b = this.B,
            c = this.J,
            d, e, f, g;
        d = 0;
        for (e = b.length; d < e; d += c)
            if (f = b[d], g = b[d + 1], Hb(a, f, g)) return !0;
        return !1
    };
    m.ba = function(a, b) {
        a ? (Gc(this, b, a, 1), this.B || (this.B = []), this.B.length = Ic(this.B, 0, a, this.J), this.b()) : this.U("XY", null)
    };
    m.U = function(a, b) {
        Fc(this, a, b);
        this.b()
    };

    function yl(a, b) {
        Cc.call(this);
        this.f = [];
        this.C = -1;
        this.F = null;
        this.H = -1;
        this.i = null;
        this.ba(a, b)
    }
    v(yl, Cc);
    m = yl.prototype;
    m.clone = function() {
        for (var a = new yl(null), b = this.f.length, c = Array(b), d = 0; d < b; ++d) c[d] = this.f[d].slice();
        zl(a, this.layout, this.B.slice(), c);
        return a
    };
    m.oc = function(a, b) {
        var c;
        a: {
            c = xi(this);
            var d = this.f,
                e = this.J,
                f = 0;console.assert(0 < d.length, "endss should not be an empty array");
            if (0 !== d.length) {
                var g, h;
                g = 0;
                for (h = d.length; g < h; ++g) {
                    var k = d[g];
                    if (Tc(c, f, k, e, a, b)) {
                        c = !0;
                        break a
                    }
                    f = k[k.length - 1]
                }
            }
            c = !1
        }
        return c
    };
    m.M = function(a) {
        var b;
        void 0 !== a ? (b = xi(this).slice(), ad(b, this.f, this.J, a)) : b = this.B;
        a = b;
        b = this.f;
        var c = this.J,
            d = 0,
            e = [],
            f = 0,
            g, h;
        g = 0;
        for (h = b.length; g < h; ++g) {
            var k = b[g];
            e[f++] = Lc(a, d, k, c, e[f]);
            d = k[k.length - 1]
        }
        e.length = f;
        return e
    };

    function yi(a) {
        if (a.C != a.j) {
            var b = a.B,
                c = a.f,
                d = a.J,
                e = 0,
                f = [],
                g, h, k;
            g = 0;
            for (h = c.length; g < h; ++g) {
                var l = c[g];
                k = b;
                var n = l[0],
                    q = d,
                    p = Kb(void 0);
                k = Ob(p, k, e, n, q);
                f.push((k[0] + k[2]) / 2, (k[1] + k[3]) / 2);
                e = l[l.length - 1]
            }
            b = xi(a);
            c = a.f;
            d = a.J;
            g = 0;
            console.assert(2 * c.length == f.length, "endss.length times 2 should be flatCenters.length");
            h = [];
            l = 0;
            for (k = c.length; l < k; ++l) e = c[l], h = Uc(b, g, e, d, f, 2 * l, h), g = e[e.length - 1];
            a.F = h;
            a.C = a.j
        }
        return a.F
    }

    function xi(a) {
        if (a.H != a.j) {
            var b = a.B,
                c;
            a: {
                c = a.f;
                var d, e;d = 0;
                for (e = c.length; d < e; ++d)
                    if (!Zc(b, c[d], a.J, void 0)) {
                        c = !1;
                        break a
                    }
                c = !0
            }
            c ? a.i = b : (a.i = b.slice(), a.i.length = ad(a.i, a.f, a.J));
            a.H = a.j
        }
        return a.i
    }
    m.Dc = function(a) {
        var b = [],
            c = [],
            d = this.B,
            e = this.f,
            f = this.J;
        a = Math.sqrt(a);
        var g = 0,
            h = 0,
            k, l;
        k = 0;
        for (l = e.length; k < l; ++k) {
            var n = e[k],
                q = [],
                h = Nc(d, g, n, f, a, b, h, q);
            c.push(q);
            g = n[n.length - 1]
        }
        b.length = h;
        d = new yl(null);
        zl(d, "XY", b, c);
        return d
    };

    function Al(a) {
        var b = a.layout,
            c = a.B;
        a = a.f;
        var d = [],
            e = 0,
            f, g, h, k;
        f = 0;
        for (g = a.length; f < g; ++f) {
            var l = a[f].slice(),
                n = l[l.length - 1];
            if (0 !== e)
                for (h = 0, k = l.length; h < k; ++h) l[h] -= e;
            h = new bd(null);
            h.U(b, c.slice(e, n), l);
            d.push(h);
            e = n
        }
        return d
    }
    m.T = function() {
        return "MultiPolygon"
    };
    m.Gb = function(a) {
        a: {
            var b = xi(this),
                c = this.f,
                d = this.J,
                e = 0;console.assert(0 < c.length, "endss should not be an empty array");
            var f, g;f = 0;
            for (g = c.length; f < g; ++f) {
                var h = c[f];
                if (Xc(b, e, h, d, a)) {
                    a = !0;
                    break a
                }
                e = h[h.length - 1]
            }
            a = !1
        }
        return a
    };
    m.ba = function(a, b) {
        if (a) {
            Gc(this, b, a, 3);
            this.B || (this.B = []);
            var c = this.B,
                d = this.J,
                e = this.f,
                f = 0,
                e = e ? e : [],
                g = 0,
                h, k;
            h = 0;
            for (k = a.length; h < k; ++h) f = Jc(c, f, a[h], d, e[g]), e[g++] = f, f = f[f.length - 1];
            e.length = g;
            0 === e.length ? this.B.length = 0 : (c = e[e.length - 1], this.B.length = 0 === c.length ? 0 : c[c.length - 1]);
            this.b()
        } else zl(this, "XY", null, this.f)
    };

    function zl(a, b, c, d) {
        console.assert(d, "endss must be truthy");
        if (c && 0 !== c.length) {
            console.assert(0 < d.length, "endss cannot be an empty array");
            var e = d[d.length - 1];
            console.assert(c.length == e[e.length - 1], "the length of flatCoordinates should be the last value of ends")
        } else console.assert(0 === d.length, "the length of endss should be 0");
        Fc(a, b, c);
        a.f = d;
        a.b()
    }

    function Bl(a, b) {
        var c = a.layout,
            d = [],
            e = [],
            f, g, h;
        f = 0;
        for (g = b.length; f < g; ++f) {
            var k = b[f];
            0 === f ? c = k.layout : console.assert(k.layout == c, "layout of polygon should be layout");
            var l = d.length;
            h = k.nb();
            var n, q;
            n = 0;
            for (q = h.length; n < q; ++n) h[n] += l;
            eb(d, k.B);
            e.push(h)
        }
        zl(a, c, d, e)
    };

    function Cl(a) {
        this.ac = a
    };

    function Dl(a) {
        this.ac = a
    }
    v(Dl, Cl);

    function El(a, b, c) {
        this.ac = a;
        this.b = b;
        this.c = c
    }
    v(El, Dl);

    function Fl(a, b) {
        El.call(this, "And", a, b)
    }
    v(Fl, El);

    function Gl(a, b, c) {
        this.ac = "BBOX";
        this.geometryName = a;
        this.extent = b;
        this.xa = c
    }
    v(Gl, Cl);

    function Hl(a, b) {
        this.ac = a;
        this.b = b
    }
    v(Hl, Cl);

    function Il(a, b, c, d) {
        Hl.call(this, a, b);
        this.f = c;
        this.c = d
    }
    v(Il, Hl);

    function Jl(a, b, c) {
        Il.call(this, "PropertyIsEqualTo", a, b, c)
    }
    v(Jl, Il);

    function Kl(a, b) {
        El.call(this, "Or", a, b)
    }
    v(Kl, El);

    function Ll(a, b) {
        return new Fl(a, b)
    }

    function Ml(a, b) {
        return new Kl(a, b)
    };

    function Nl(a) {
        Ac.call(this);
        this.c = a ? a : null;
        Ol(this)
    }
    v(Nl, Ac);

    function Pl(a) {
        var b = [],
            c, d;
        c = 0;
        for (d = a.length; c < d; ++c) b.push(a[c].clone());
        return b
    }

    function Ql(a) {
        var b, c;
        if (a.c)
            for (b = 0, c = a.c.length; b < c; ++b) Oa(a.c[b], "change", a.b, a)
    }

    function Ol(a) {
        var b, c;
        if (a.c)
            for (b = 0, c = a.c.length; b < c; ++b) A(a.c[b], "change", a.b, a)
    }
    m = Nl.prototype;
    m.clone = function() {
        var a = new Nl(null),
            b = Pl(this.c);
        Ql(a);
        a.c = b;
        Ol(a);
        a.b();
        return a
    };
    m.oc = function(a, b) {
        var c = this.c,
            d, e;
        d = 0;
        for (e = c.length; d < e; ++d)
            if (c[d].oc(a, b)) return !0;
        return !1
    };
    m.Pd = function(a) {
        Kb(a);
        for (var b = this.c, c = 0, d = b.length; c < d; ++c) Nb(a, b[c].K());
        return a
    };
    m.xf = function(a) {
        this.s != this.j && (Fa(this.g), this.o = 0, this.s = this.j);
        if (0 > a || 0 !== this.o && a < this.o) return this;
        var b = a.toString();
        if (this.g.hasOwnProperty(b)) return this.g[b];
        var c = [],
            d = this.c,
            e = !1,
            f, g;
        f = 0;
        for (g = d.length; f < g; ++f) {
            var h = d[f],
                k = h.xf(a);
            c.push(k);
            k !== h && (e = !0)
        }
        if (e) return a = new Nl(null), Ql(a), a.c = c, Ol(a), a.b(), this.g[b] = a;
        this.o = a;
        return this
    };
    m.T = function() {
        return "GeometryCollection"
    };
    m.Gb = function(a) {
        var b = this.c,
            c, d;
        c = 0;
        for (d = b.length; c < d; ++c)
            if (b[c].Gb(a)) return !0;
        return !1
    };
    m.zb = function() {
        return 0 === this.c.length
    };
    m.rotate = function(a, b) {
        for (var c = this.c, d = 0, e = c.length; d < e; ++d) c[d].rotate(a, b);
        this.b()
    };
    m.scale = function(a, b, c) {
        c || (c = Wb(this.K()));
        for (var d = this.c, e = 0, f = d.length; e < f; ++e) d[e].scale(a, b, c);
        this.b()
    };
    m.Qc = function(a) {
        var b = this.c,
            c, d;
        c = 0;
        for (d = b.length; c < d; ++c) b[c].Qc(a);
        this.b()
    };
    m.translate = function(a, b) {
        var c = this.c,
            d, e;
        d = 0;
        for (e = c.length; d < e; ++d) c[d].translate(a, b);
        this.b()
    };
    m.qa = function() {
        Ql(this);
        Ac.prototype.qa.call(this)
    };

    function Rl(a) {
        a = a ? a : {};
        el.call(this);
        this.wb = jc(a.wb ? a.wb : "EPSG:4326");
        a.Ta && (this.i = jc(a.Ta));
        this.b = a.geometryName
    }
    v(Rl, il);

    function ll(a, b) {
        return a ? hl((0, Sl[a.type])(a), !1, b) : null
    }

    function ol(a, b) {
        return (0, Tl[a.T()])(hl(a, !0, b), b)
    }
    var Sl = {
            Point: function(a) {
                console.assert("Point" == a.type, "object.type should be Point");
                return new Qc(a.coordinates)
            },
            LineString: function(a) {
                console.assert("LineString" == a.type, "object.type should be LineString");
                return new rl(a.coordinates)
            },
            Polygon: function(a) {
                console.assert("Polygon" == a.type, "object.type should be Polygon");
                return new bd(a.coordinates)
            },
            MultiPoint: function(a) {
                console.assert("MultiPoint" == a.type, "object.type should be MultiPoint");
                return new wl(a.coordinates)
            },
            MultiLineString: function(a) {
                console.assert("MultiLineString" ==
                    a.type, "object.type should be MultiLineString");
                return new tl(a.coordinates)
            },
            MultiPolygon: function(a) {
                console.assert("MultiPolygon" == a.type, "object.type should be MultiPolygon");
                return new yl(a.coordinates)
            },
            GeometryCollection: function(a, b) {
                console.assert("GeometryCollection" == a.type, "object.type should be GeometryCollection");
                var c = a.geometries.map(function(a) {
                    return ll(a, b)
                });
                return new Nl(c)
            }
        },
        Tl = {
            Point: function(a) {
                return {
                    type: "Point",
                    coordinates: a.M()
                }
            },
            LineString: function(a) {
                return {
                    type: "LineString",
                    coordinates: a.M()
                }
            },
            Polygon: function(a, b) {
                var c;
                b && (c = b.so);
                return {
                    type: "Polygon",
                    coordinates: a.M(c)
                }
            },
            MultiPoint: function(a) {
                return {
                    type: "MultiPoint",
                    coordinates: a.M()
                }
            },
            MultiLineString: function(a) {
                return {
                    type: "MultiLineString",
                    coordinates: a.M()
                }
            },
            MultiPolygon: function(a, b) {
                var c;
                b && (c = b.so);
                return {
                    type: "MultiPolygon",
                    coordinates: a.M(c)
                }
            },
            GeometryCollection: function(a, b) {
                return {
                    type: "GeometryCollection",
                    geometries: a.c.map(function(a) {
                        var d = Ea({}, b);
                        delete d.Ta;
                        return ol(a, d)
                    })
                }
            },
            Circle: function() {
                return {
                    type: "GeometryCollection",
                    geometries: []
                }
            }
        };

    function kl(a, b, c) {
        console.assert("FeatureCollection" !== b.type, "Expected a Feature or geometry");
        b = "Feature" === b.type ? b : {
            type: "Feature",
            geometry: b
        };
        c = ll(b.geometry, c);
        var d = new Fk;
        a.b && Hk(d, a.b);
        Gk(d, c);
        void 0 !== b.id && Jk(d, b.id);
        b.properties && d.Ga(b.properties);
        return d
    }

    function ml(a, b, c) {
        c = gl(a, c);
        a = {
            type: "Feature"
        };
        var d = b.Ua();
        void 0 !== d && (a.id = d);
        (d = b.G()) ? a.geometry = ol(d, c): a.geometry = null;
        c = ab(b);
        delete c[b.c];
        Ha(c) ? a.properties = null : a.properties = c;
        return a
    }

    function nl(a, b, c) {
        c = gl(a, c);
        var d = [],
            e, f;
        e = 0;
        for (f = b.length; e < f; ++e) d.push(ml(a, b[e], c));
        return {
            type: "FeatureCollection",
            features: d
        }
    };

    function Ul() {
        this.j = new XMLSerializer;
        el.call(this)
    }
    v(Ul, el);
    m = Ul.prototype;
    m.T = function() {
        return "xml"
    };
    m.readFeature = function(a, b) {
        if (Ok(a)) return Vl(this, a, b);
        if (Pk(a)) return this.$h(a, b);
        if ("string" === typeof a) {
            var c = Qk(a);
            return Vl(this, c, b)
        }
        return null
    };

    function Vl(a, b, c) {
        a = Wl(a, b, c);
        return 0 < a.length ? a[0] : null
    }
    m.readFeatures = function(a, b) {
        if (Ok(a)) return Wl(this, a, b);
        if (Pk(a)) return this.pc(a, b);
        if ("string" === typeof a) {
            var c = Qk(a);
            return Wl(this, c, b)
        }
        return []
    };

    function Wl(a, b, c) {
        var d = [];
        for (b = b.firstChild; b; b = b.nextSibling) b.nodeType == Node.ELEMENT_NODE && eb(d, a.pc(b, c));
        return d
    }
    m.readGeometry = function(a, b) {
        if (Ok(a)) return this.C(a, b);
        if (Pk(a)) {
            var c = this.pe(a, [fl(this, a, b ? b : {})]);
            return c ? c : null
        }
        return "string" === typeof a ? (c = Qk(a), this.C(c, b)) : null
    };
    m.se = function(a) {
        return Ok(a) ? this.Yf(a) : Pk(a) ? this.te(a) : "string" === typeof a ? (a = Qk(a), this.Yf(a)) : null
    };
    m.Yf = function() {
        return this.wb
    };
    m.te = function() {
        return this.wb
    };
    m.writeFeature = function(a, b) {
        var c = this.V(a, b);
        console.assert(c.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        return this.j.serializeToString(c)
    };
    m.writeFeatures = function(a, b) {
        var c = this.f(a, b);
        console.assert(c.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        return this.j.serializeToString(c)
    };
    m.writeGeometry = function(a, b) {
        var c;
        c = gl(this, b);
        var d = Lk("http://www.opengis.net/gml", "geom"),
            e = {
                node: d,
                xa: this.xa,
                curve: this.o,
                Ce: this.D,
                Mf: this.v,
                Lf: this.s
            };
        c && Ea(e, c);
        this.vd(d, a, [e]);
        console.assert(d.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        return this.j.serializeToString(d)
    };

    function Xl(a) {
        a = a ? a : {};
        this.featureType = a.featureType;
        this.featureNS = a.featureNS;
        this.xa = a.xa;
        this.Lb = "";
        this.b = {};
        this.b["http://www.opengis.net/gml"] = {
            featureMember: Tk(Xl.prototype.ld),
            featureMembers: Tk(Xl.prototype.ld)
        };
        Ul.call(this)
    }
    v(Xl, Ul);
    var Yl = /^[\s\xa0]*$/;
    m = Xl.prototype;
    m.ld = function(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        var c = a.localName,
            d = null;
        if ("FeatureCollection" == c) "http://www.opengis.net/wfs" === a.namespaceURI ? d = Q([], this.b, a, b, this) : d = Q(null, this.b, a, b, this);
        else if ("featureMembers" == c || "featureMember" == c) {
            var e = b[0],
                f = e.featureType,
                g = e.featureNS,
                h, k;
            if (!f && a.childNodes) {
                f = [];
                g = {};
                h = 0;
                for (k = a.childNodes.length; h < k; ++h) {
                    var l = a.childNodes[h];
                    if (1 === l.nodeType) {
                        var n = l.nodeName.split(":").pop();
                        if (-1 === f.indexOf(n)) {
                            var q =
                                "",
                                p = 0,
                                l = l.namespaceURI,
                                r;
                            for (r in g) {
                                if (g[r] === l) {
                                    q = r;
                                    break
                                }++p
                            }
                            q || (q = "p" + p, g[q] = l);
                            f.push(q + ":" + n)
                        }
                    }
                }
                "featureMember" != c && (e.featureType = f, e.featureNS = g)
            }
            "string" === typeof g && (h = g, g = {}, g.p0 = h);
            var e = {},
                f = Array.isArray(f) ? f : [f],
                u;
            for (u in g) {
                n = {};
                h = 0;
                for (k = f.length; h < k; ++h)(-1 === f[h].indexOf(":") ? "p0" : f[h].split(":")[0]) === u && (n[f[h].split(":").pop()] = "featureMembers" == c ? Sk(this.Uf, this) : Tk(this.Uf, this));
                e[g[u]] = n
            }
            "featureMember" == c ? d = Q(void 0, e, a, b) : d = Q([], e, a, b)
        }
        null === d && (d = []);
        return d
    };
    m.pe = function(a, b) {
        var c = b[0];
        c.srsName = a.firstElementChild.getAttribute("srsName");
        var d = Q(null, this.ug, a, b, this);
        if (d) return hl(d, !1, c)
    };
    m.Uf = function(a, b) {
        var c, d;
        (d = a.getAttribute("fid")) || (d = a.getAttributeNS("http://www.opengis.net/gml", "id") || "");
        var e = {},
            f;
        for (c = a.firstElementChild; c; c = c.nextElementSibling) {
            var g = c.localName;
            if (0 === c.childNodes.length || 1 === c.childNodes.length && (3 === c.firstChild.nodeType || 4 === c.firstChild.nodeType)) {
                var h = Mk(c);
                Yl.test(h) && (h = void 0);
                e[g] = h
            } else "boundedBy" !== g && (f = g), e[g] = this.pe(c, b)
        }
        c = new Fk(e);
        f && Hk(c, f);
        d && Jk(c, d);
        return c
    };
    m.fi = function(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("Point" == a.localName, "localName should be Point");
        var c = this.oe(a, b);
        if (c) {
            var d = new Qc(null);
            console.assert(3 == c.length, "flatCoordinates should have a length of 3");
            d.U("XYZ", c);
            return d
        }
    };
    m.di = function(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("MultiPoint" == a.localName, "localName should be MultiPoint");
        var c = Q([], this.Ui, a, b, this);
        if (c) return new wl(c)
    };
    m.ci = function(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("MultiLineString" == a.localName, "localName should be MultiLineString");
        var c = Q([], this.Ti, a, b, this);
        if (c) {
            var d = new tl(null);
            vl(d, c);
            return d
        }
    };
    m.ei = function(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("MultiPolygon" == a.localName, "localName should be MultiPolygon");
        var c = Q([], this.Vi, a, b, this);
        if (c) {
            var d = new yl(null);
            Bl(d, c);
            return d
        }
    };
    m.Wh = function(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("pointMember" == a.localName || "pointMembers" == a.localName, "localName should be pointMember or pointMembers");
        $k(this.Yi, a, b, this)
    };
    m.xh = function(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("lineStringMember" == a.localName || "lineStringMembers" == a.localName, "localName should be LineStringMember or LineStringMembers");
        $k(this.Ri, a, b, this)
    };
    m.Xh = function(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("polygonMember" == a.localName || "polygonMembers" == a.localName, "localName should be polygonMember or polygonMembers");
        $k(this.Zi, a, b, this)
    };
    m.qe = function(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("LineString" == a.localName, "localName should be LineString");
        var c = this.oe(a, b);
        if (c) {
            var d = new rl(null);
            d.U("XYZ", c);
            return d
        }
    };
    m.Sn = function(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("LinearRing" == a.localName, "localName should be LinearRing");
        var c = Q(null, this.xd, a, b, this);
        if (c) return c
    };
    m.bi = function(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("LinearRing" == a.localName, "localName should be LinearRing");
        var c = this.oe(a, b);
        if (c) {
            var d = new Oc(null);
            Pc(d, "XYZ", c);
            return d
        }
    };
    m.re = function(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("Polygon" == a.localName, "localName should be Polygon");
        var c = Q([null], this.Je, a, b, this);
        if (c && c[0]) {
            var d = new bd(null),
                e = c[0],
                f = [e.length],
                g, h;
            g = 1;
            for (h = c.length; g < h; ++g) eb(e, c[g]), f.push(e.length);
            d.U("XYZ", e, f);
            return d
        }
    };
    m.oe = function(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        return Q(null, this.xd, a, b, this)
    };
    m.Ui = {
        "http://www.opengis.net/gml": {
            pointMember: Sk(Xl.prototype.Wh),
            pointMembers: Sk(Xl.prototype.Wh)
        }
    };
    m.Ti = {
        "http://www.opengis.net/gml": {
            lineStringMember: Sk(Xl.prototype.xh),
            lineStringMembers: Sk(Xl.prototype.xh)
        }
    };
    m.Vi = {
        "http://www.opengis.net/gml": {
            polygonMember: Sk(Xl.prototype.Xh),
            polygonMembers: Sk(Xl.prototype.Xh)
        }
    };
    m.Yi = {
        "http://www.opengis.net/gml": {
            Point: Sk(Xl.prototype.oe)
        }
    };
    m.Ri = {
        "http://www.opengis.net/gml": {
            LineString: Sk(Xl.prototype.qe)
        }
    };
    m.Zi = {
        "http://www.opengis.net/gml": {
            Polygon: Sk(Xl.prototype.re)
        }
    };
    m.yd = {
        "http://www.opengis.net/gml": {
            LinearRing: Tk(Xl.prototype.Sn)
        }
    };
    m.pc = function(a, b) {
        var c = {
            featureType: this.featureType,
            featureNS: this.featureNS
        };
        b && Ea(c, fl(this, a, b));
        return this.ld(a, [c]) || []
    };
    m.te = function(a) {
        return jc(this.xa ? this.xa : a.firstElementChild.getAttribute("srsName"))
    };

    function Zl(a) {
        a = Mk(a);
        return $l(a)
    }

    function $l(a) {
        if (a = /^\s*(true|1)|(false|0)\s*$/.exec(a)) return void 0 !== a[1] || !1
    }

    function am(a) {
        a = Mk(a);
        a = Date.parse(a);
        return isNaN(a) ? void 0 : a / 1E3
    }

    function bm(a) {
        a = Mk(a);
        return cm(a)
    }

    function cm(a) {
        if (a = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(a)) return parseFloat(a[1])
    }

    function dm(a) {
        a = Mk(a);
        return em(a)
    }

    function em(a) {
        if (a = /^\s*(\d+)\s*$/.exec(a)) return parseInt(a[1], 10)
    }

    function R(a) {
        return Mk(a).trim()
    }

    function fm(a, b) {
        gm(a, b ? "1" : "0")
    }

    function hm(a, b) {
        a.appendChild(Kk.createTextNode(b.toPrecision()))
    }

    function im(a, b) {
        console.assert(0 <= b, "value should be more than 0");
        console.assert(b == (b | 0), "value should be an integer value");
        a.appendChild(Kk.createTextNode(b.toString()))
    }

    function gm(a, b) {
        a.appendChild(Kk.createTextNode(b))
    };

    function S(a) {
        a = a ? a : {};
        Xl.call(this, a);
        this.D = void 0 !== a.Ce ? a.Ce : !1;
        this.o = void 0 !== a.curve ? a.curve : !1;
        this.s = void 0 !== a.Lf ? a.Lf : !0;
        this.v = void 0 !== a.Mf ? a.Mf : !0;
        this.Lb = a.Lb ? a.Lb : "http://www.opengis.net/gml http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd"
    }
    v(S, Xl);
    m = S.prototype;
    m.Wn = function(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("MultiCurve" == a.localName, "localName should be MultiCurve");
        var c = Q([], this.Si, a, b, this);
        if (c) {
            var d = new tl(null);
            vl(d, c);
            return d
        }
    };
    m.Xn = function(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("MultiSurface" == a.localName, "localName should be MultiSurface");
        var c = Q([], this.Wi, a, b, this);
        if (c) {
            var d = new yl(null);
            Bl(d, c);
            return d
        }
    };
    m.Sg = function(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("curveMember" == a.localName || "curveMembers" == a.localName, "localName should be curveMember or curveMembers");
        $k(this.Oi, a, b, this)
    };
    m.xi = function(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("surfaceMember" == a.localName || "surfaceMembers" == a.localName, "localName should be surfaceMember or surfaceMembers");
        $k(this.dj, a, b, this)
    };
    m.Yn = function(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("patches" == a.localName, "localName should be patches");
        return Q([null], this.Xi, a, b, this)
    };
    m.$n = function(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("segments" == a.localName, "localName should be segments");
        return Q([null], this.bj, a, b, this)
    };
    m.Zn = function(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "npde.nodeType should be ELEMENT");
        console.assert("PolygonPatch" == a.localName, "localName should be PolygonPatch");
        return Q([null], this.Je, a, b, this)
    };
    m.Vn = function(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("LineStringSegment" == a.localName, "localName should be LineStringSegment");
        return Q([null], this.xd, a, b, this)
    };
    m.Ul = function(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("interior" == a.localName, "localName should be interior");
        var c = Q(void 0, this.yd, a, b, this);
        if (c) {
            var d = b[b.length - 1];
            console.assert(Array.isArray(d), "flatLinearRings should be an array");
            console.assert(0 < d.length, "flatLinearRings should have an array length of 1 or more");
            d.push(c)
        }
    };
    m.qk = function(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("exterior" == a.localName, "localName should be exterior");
        var c = Q(void 0, this.yd, a, b, this);
        if (c) {
            var d = b[b.length - 1];
            console.assert(Array.isArray(d), "flatLinearRings should be an array");
            console.assert(0 < d.length, "flatLinearRings should have an array length of 1 or more");
            d[0] = c
        }
    };
    m.gi = function(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("Surface" == a.localName, "localName should be Surface");
        var c = Q([null], this.ej, a, b, this);
        if (c && c[0]) {
            var d = new bd(null),
                e = c[0],
                f = [e.length],
                g, h;
            g = 1;
            for (h = c.length; g < h; ++g) eb(e, c[g]), f.push(e.length);
            d.U("XYZ", e, f);
            return d
        }
    };
    m.Zh = function(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("Curve" == a.localName, "localName should be Curve");
        var c = Q([null], this.Pi, a, b, this);
        if (c) {
            var d = new rl(null);
            d.U("XYZ", c);
            return d
        }
    };
    m.Rn = function(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("Envelope" == a.localName, "localName should be Envelope");
        var c = Q([null], this.Qi, a, b, this);
        return Jb(c[1][0], c[1][1], c[2][0], c[2][1])
    };
    m.Tn = function(a, b) {
        for (var c = Mk(a), d = /^\s*([+\-]?\d*\.?\d+(?:[eE][+\-]?\d+)?)\s*/, e = [], f; f = d.exec(c);) e.push(parseFloat(f[1])), c = c.substr(f[0].length);
        if ("" === c) {
            c = b[0].srsName;
            d = "enu";
            c && (d = jc(c).c);
            if ("neu" === d)
                for (c = 0, d = e.length; c < d; c += 3) f = e[c], e[c] = e[c + 1], e[c + 1] = f;
            c = e.length;
            2 == c && e.push(0);
            return 0 === c ? void 0 : e
        }
    };
    m.Wf = function(a, b) {
        var c = Mk(a).replace(/^\s*|\s*$/g, ""),
            d = b[0].srsName,
            e = a.parentNode.getAttribute("srsDimension"),
            f = "enu";
        d && (f = jc(d).c);
        c = c.split(/\s+/);
        d = 2;
        a.getAttribute("srsDimension") ? d = em(a.getAttribute("srsDimension")) : a.getAttribute("dimension") ? d = em(a.getAttribute("dimension")) : e && (d = em(e));
        for (var g, h, k = [], l = 0, n = c.length; l < n; l += d) e = parseFloat(c[l]), g = parseFloat(c[l + 1]), h = 3 === d ? parseFloat(c[l + 2]) : 0, "en" === f.substr(0, 2) ? k.push(e, g, h) : k.push(g, e, h);
        return k
    };
    m.xd = {
        "http://www.opengis.net/gml": {
            pos: Tk(S.prototype.Tn),
            posList: Tk(S.prototype.Wf)
        }
    };
    m.Je = {
        "http://www.opengis.net/gml": {
            interior: S.prototype.Ul,
            exterior: S.prototype.qk
        }
    };
    m.ug = {
        "http://www.opengis.net/gml": {
            Point: Tk(Xl.prototype.fi),
            MultiPoint: Tk(Xl.prototype.di),
            LineString: Tk(Xl.prototype.qe),
            MultiLineString: Tk(Xl.prototype.ci),
            LinearRing: Tk(Xl.prototype.bi),
            Polygon: Tk(Xl.prototype.re),
            MultiPolygon: Tk(Xl.prototype.ei),
            Surface: Tk(S.prototype.gi),
            MultiSurface: Tk(S.prototype.Xn),
            Curve: Tk(S.prototype.Zh),
            MultiCurve: Tk(S.prototype.Wn),
            Envelope: Tk(S.prototype.Rn)
        }
    };
    m.Si = {
        "http://www.opengis.net/gml": {
            curveMember: Sk(S.prototype.Sg),
            curveMembers: Sk(S.prototype.Sg)
        }
    };
    m.Wi = {
        "http://www.opengis.net/gml": {
            surfaceMember: Sk(S.prototype.xi),
            surfaceMembers: Sk(S.prototype.xi)
        }
    };
    m.Oi = {
        "http://www.opengis.net/gml": {
            LineString: Sk(Xl.prototype.qe),
            Curve: Sk(S.prototype.Zh)
        }
    };
    m.dj = {
        "http://www.opengis.net/gml": {
            Polygon: Sk(Xl.prototype.re),
            Surface: Sk(S.prototype.gi)
        }
    };
    m.ej = {
        "http://www.opengis.net/gml": {
            patches: Tk(S.prototype.Yn)
        }
    };
    m.Pi = {
        "http://www.opengis.net/gml": {
            segments: Tk(S.prototype.$n)
        }
    };
    m.Qi = {
        "http://www.opengis.net/gml": {
            lowerCorner: Sk(S.prototype.Wf),
            upperCorner: Sk(S.prototype.Wf)
        }
    };
    m.Xi = {
        "http://www.opengis.net/gml": {
            PolygonPatch: Tk(S.prototype.Zn)
        }
    };
    m.bj = {
        "http://www.opengis.net/gml": {
            LineStringSegment: Tk(S.prototype.Vn)
        }
    };

    function jm(a, b, c) {
        c = c[c.length - 1].srsName;
        b = b.M();
        for (var d = b.length, e = Array(d), f, g = 0; g < d; ++g) {
            f = b[g];
            var h = g,
                k = "enu";
            c && (k = jc(c).c);
            e[h] = "en" === k.substr(0, 2) ? f[0] + " " + f[1] : f[1] + " " + f[0]
        }
        gm(a, e.join(" "))
    }
    m.Ki = function(a, b, c) {
        var d = c[c.length - 1].srsName;
        d && a.setAttribute("srsName", d);
        d = Lk(a.namespaceURI, "pos");
        a.appendChild(d);
        c = c[c.length - 1].srsName;
        a = "enu";
        c && (a = jc(c).c);
        b = b.M();
        gm(d, "en" === a.substr(0, 2) ? b[0] + " " + b[1] : b[1] + " " + b[0])
    };
    var km = {
        "http://www.opengis.net/gml": {
            lowerCorner: G(gm),
            upperCorner: G(gm)
        }
    };
    m = S.prototype;
    m.jp = function(a, b, c) {
        console.assert(4 == b.length, "extent should have 4 items");
        var d = c[c.length - 1].srsName;
        d && a.setAttribute("srsName", d);
        al({
            node: a
        }, km, Yk, [b[0] + " " + b[1], b[2] + " " + b[3]], c, ["lowerCorner", "upperCorner"], this)
    };
    m.Hi = function(a, b, c) {
        var d = c[c.length - 1].srsName;
        d && a.setAttribute("srsName", d);
        d = Lk(a.namespaceURI, "posList");
        a.appendChild(d);
        jm(d, b, c)
    };
    m.aj = function(a, b) {
        var c = b[b.length - 1],
            d = c.node,
            e = c.exteriorWritten;
        void 0 === e && (c.exteriorWritten = !0);
        return Lk(d.namespaceURI, void 0 !== e ? "interior" : "exterior")
    };
    m.He = function(a, b, c) {
        var d = c[c.length - 1].srsName;
        "PolygonPatch" !== a.nodeName && d && a.setAttribute("srsName", d);
        "Polygon" === a.nodeName || "PolygonPatch" === a.nodeName ? (b = fd(b), al({
            node: a,
            xa: d
        }, lm, this.aj, b, c, void 0, this)) : "Surface" === a.nodeName && (d = Lk(a.namespaceURI, "patches"), a.appendChild(d), a = Lk(d.namespaceURI, "PolygonPatch"), d.appendChild(a), this.He(a, b, c))
    };
    m.Ge = function(a, b, c) {
        var d = c[c.length - 1].srsName;
        "LineStringSegment" !== a.nodeName && d && a.setAttribute("srsName", d);
        "LineString" === a.nodeName || "LineStringSegment" === a.nodeName ? (d = Lk(a.namespaceURI, "posList"), a.appendChild(d), jm(d, b, c)) : "Curve" === a.nodeName && (d = Lk(a.namespaceURI, "segments"), a.appendChild(d), a = Lk(d.namespaceURI, "LineStringSegment"), d.appendChild(a), this.Ge(a, b, c))
    };
    m.Ji = function(a, b, c) {
        var d = c[c.length - 1],
            e = d.srsName,
            d = d.surface;
        e && a.setAttribute("srsName", e);
        b = Al(b);
        al({
            node: a,
            xa: e,
            Ce: d
        }, mm, this.g, b, c, void 0, this)
    };
    m.lp = function(a, b, c) {
        var d = c[c.length - 1].srsName;
        d && a.setAttribute("srsName", d);
        b = xl(b);
        al({
            node: a,
            xa: d
        }, nm, Wk("pointMember"), b, c, void 0, this)
    };
    m.Ii = function(a, b, c) {
        var d = c[c.length - 1],
            e = d.srsName,
            d = d.curve;
        e && a.setAttribute("srsName", e);
        b = ul(b);
        al({
            node: a,
            xa: e,
            curve: d
        }, om, this.g, b, c, void 0, this)
    };
    m.Li = function(a, b, c) {
        var d = Lk(a.namespaceURI, "LinearRing");
        a.appendChild(d);
        this.Hi(d, b, c)
    };
    m.Mi = function(a, b, c) {
        var d = this.c(b, c);
        d && (a.appendChild(d), this.He(d, b, c))
    };
    m.mp = function(a, b, c) {
        var d = Lk(a.namespaceURI, "Point");
        a.appendChild(d);
        this.Ki(d, b, c)
    };
    m.Gi = function(a, b, c) {
        var d = this.c(b, c);
        d && (a.appendChild(d), this.Ge(d, b, c))
    };
    m.vd = function(a, b, c) {
        var d = c[c.length - 1],
            e = Ea({}, d);
        e.node = a;
        var f;
        Array.isArray(b) ? d.Ub ? f = zc(b, d.Ta, d.Ub) : f = b : f = hl(b, !0, d);
        al(e, pm, this.c, [f], c, void 0, this)
    };
    m.kp = function(a, b, c) {
        var d = b.Ua();
        d && a.setAttribute("fid", d);
        var d = c[c.length - 1],
            e = d.featureNS,
            f = b.c;
        d.rc || (d.rc = {}, d.rc[e] = {});
        var g = ab(b);
        b = [];
        var h = [],
            k;
        for (k in g) {
            var l = g[k];
            null !== l && (b.push(k), h.push(l), k == f || l instanceof Ac ? k in d.rc[e] || (d.rc[e][k] = G(this.vd, this)) : k in d.rc[e] || (d.rc[e][k] = G(gm)))
        }
        k = Ea({}, d);
        k.node = a;
        al(k, d.rc, Wk(void 0, e), h, c, b)
    };
    var mm = {
            "http://www.opengis.net/gml": {
                surfaceMember: G(S.prototype.Mi),
                polygonMember: G(S.prototype.Mi)
            }
        },
        nm = {
            "http://www.opengis.net/gml": {
                pointMember: G(S.prototype.mp)
            }
        },
        om = {
            "http://www.opengis.net/gml": {
                lineStringMember: G(S.prototype.Gi),
                curveMember: G(S.prototype.Gi)
            }
        },
        lm = {
            "http://www.opengis.net/gml": {
                exterior: G(S.prototype.Li),
                interior: G(S.prototype.Li)
            }
        },
        pm = {
            "http://www.opengis.net/gml": {
                Curve: G(S.prototype.Ge),
                MultiCurve: G(S.prototype.Ii),
                Point: G(S.prototype.Ki),
                MultiPoint: G(S.prototype.lp),
                LineString: G(S.prototype.Ge),
                MultiLineString: G(S.prototype.Ii),
                LinearRing: G(S.prototype.Hi),
                Polygon: G(S.prototype.He),
                MultiPolygon: G(S.prototype.Ji),
                Surface: G(S.prototype.He),
                MultiSurface: G(S.prototype.Ji),
                Envelope: G(S.prototype.jp)
            }
        },
        qm = {
            MultiLineString: "lineStringMember",
            MultiCurve: "curveMember",
            MultiPolygon: "polygonMember",
            MultiSurface: "surfaceMember"
        };
    S.prototype.g = function(a, b) {
        var c = b[b.length - 1].node;
        console.assert(Pk(c), "parentNode should be a node");
        return Lk("http://www.opengis.net/gml", qm[c.nodeName])
    };
    S.prototype.c = function(a, b) {
        var c = b[b.length - 1],
            d = c.multiSurface,
            e = c.surface,
            f = c.curve,
            c = c.multiCurve;
        console.assert(Pk(b[b.length - 1].node), "parentNode should be a node");
        var g;
        Array.isArray(a) ? g = "Envelope" : (g = a.T(), "MultiPolygon" === g && !0 === d ? g = "MultiSurface" : "Polygon" === g && !0 === e ? g = "Surface" : "LineString" === g && !0 === f ? g = "Curve" : "MultiLineString" === g && !0 === c && (g = "MultiCurve"));
        return Lk("http://www.opengis.net/gml", g)
    };
    S.prototype.f = function(a, b) {
        b = gl(this, b);
        var c = Lk("http://www.opengis.net/gml", "featureMembers");
        c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.Lb);
        var d = {
            xa: this.xa,
            curve: this.o,
            Ce: this.D,
            Mf: this.v,
            Lf: this.s,
            featureNS: this.featureNS,
            featureType: this.featureType
        };
        b && Ea(d, b);
        var d = [d],
            e = d[d.length - 1],
            f = e.featureType,
            g = e.featureNS,
            h = {};
        h[g] = {};
        h[g][f] = G(this.kp, this);
        e = Ea({}, e);
        e.node = c;
        al(e, h, Wk(f, g), a, d);
        return c
    };

    function rm(a) {
        a = a ? a : {};
        Xl.call(this, a);
        this.b["http://www.opengis.net/gml"].featureMember = Sk(Xl.prototype.ld);
        this.Lb = a.Lb ? a.Lb : "http://www.opengis.net/gml http://schemas.opengis.net/gml/2.1.2/feature.xsd"
    }
    v(rm, Xl);
    m = rm.prototype;
    m.ai = function(a, b) {
        var c = Mk(a).replace(/^\s*|\s*$/g, ""),
            d = b[0].srsName,
            e = a.parentNode.getAttribute("srsDimension"),
            f = "enu";
        d && (d = jc(d)) && (f = d.c);
        c = c.split(/[\s,]+/);
        d = 2;
        a.getAttribute("srsDimension") ? d = em(a.getAttribute("srsDimension")) : a.getAttribute("dimension") ? d = em(a.getAttribute("dimension")) : e && (d = em(e));
        for (var g, h, k = [], l = 0, n = c.length; l < n; l += d) e = parseFloat(c[l]), g = parseFloat(c[l + 1]), h = 3 === d ? parseFloat(c[l + 2]) : 0, "en" === f.substr(0, 2) ? k.push(e, g, h) : k.push(g, e, h);
        return k
    };
    m.Pn = function(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("Box" == a.localName, "localName should be Box");
        var c = Q([null], this.Ni, a, b, this);
        return Jb(c[1][0], c[1][1], c[1][3], c[1][4])
    };
    m.Rl = function(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("innerBoundaryIs" == a.localName, "localName should be innerBoundaryIs");
        var c = Q(void 0, this.yd, a, b, this);
        if (c) {
            var d = b[b.length - 1];
            console.assert(Array.isArray(d), "flatLinearRings should be an array");
            console.assert(0 < d.length, "flatLinearRings should have an array length larger than 0");
            d.push(c)
        }
    };
    m.qn = function(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("outerBoundaryIs" == a.localName, "localName should be outerBoundaryIs");
        var c = Q(void 0, this.yd, a, b, this);
        if (c) {
            var d = b[b.length - 1];
            console.assert(Array.isArray(d), "flatLinearRings should be an array");
            console.assert(0 < d.length, "flatLinearRings should have an array length larger than 0");
            d[0] = c
        }
    };
    m.xd = {
        "http://www.opengis.net/gml": {
            coordinates: Tk(rm.prototype.ai)
        }
    };
    m.Je = {
        "http://www.opengis.net/gml": {
            innerBoundaryIs: rm.prototype.Rl,
            outerBoundaryIs: rm.prototype.qn
        }
    };
    m.Ni = {
        "http://www.opengis.net/gml": {
            coordinates: Sk(rm.prototype.ai)
        }
    };
    m.ug = {
        "http://www.opengis.net/gml": {
            Point: Tk(Xl.prototype.fi),
            MultiPoint: Tk(Xl.prototype.di),
            LineString: Tk(Xl.prototype.qe),
            MultiLineString: Tk(Xl.prototype.ci),
            LinearRing: Tk(Xl.prototype.bi),
            Polygon: Tk(Xl.prototype.re),
            MultiPolygon: Tk(Xl.prototype.ei),
            Box: Tk(rm.prototype.Pn)
        }
    };

    function sm(a) {
        a = a ? a : {};
        Ul.call(this);
        this.wb = jc("EPSG:4326");
        this.b = a.fq
    }
    v(sm, Ul);
    var tm = [null, "http://www.topografix.com/GPX/1/0", "http://www.topografix.com/GPX/1/1"];

    function um(a, b, c) {
        console.assert(b.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        a.push(parseFloat(b.getAttribute("lon")), parseFloat(b.getAttribute("lat")));
        "ele" in c ? (a.push(c.ele), delete c.ele) : a.push(0);
        "time" in c ? (a.push(c.time), delete c.time) : a.push(0);
        return a
    }

    function vm(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("link" == a.localName, "localName should be link");
        var c = b[b.length - 1],
            d = a.getAttribute("href");
        null !== d && (c.link = d);
        $k(wm, a, b)
    }

    function xm(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("extensions" == a.localName, "localName should be extensions");
        b[b.length - 1].extensionsNode_ = a
    }

    function ym(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("rte" == a.localName, "localName should be rte");
        var c = b[0],
            d = Q({
                flatCoordinates: []
            }, zm, a, b);
        if (d) {
            var e = d.flatCoordinates;
            delete d.flatCoordinates;
            var f = new rl(null);
            f.U("XYZM", e);
            hl(f, !1, c);
            c = new Fk(f);
            c.Ga(d);
            return c
        }
    }

    function Am(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("trk" == a.localName, "localName should be trk");
        var c = b[0],
            d = Q({
                flatCoordinates: [],
                ends: []
            }, Bm, a, b);
        if (d) {
            var e = d.flatCoordinates;
            delete d.flatCoordinates;
            var f = d.ends;
            delete d.ends;
            var g = new tl(null);
            g.U("XYZM", e, f);
            hl(g, !1, c);
            c = new Fk(g);
            c.Ga(d);
            return c
        }
    }

    function Cm(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("wpt" == a.localName, "localName should be wpt");
        var c = b[0],
            d = Q({}, Dm, a, b);
        if (d) {
            var e = um([], a, d),
                e = new Qc(e, "XYZM");
            hl(e, !1, c);
            c = new Fk(e);
            c.Ga(d);
            return c
        }
    }
    var Em = {
            rte: ym,
            trk: Am,
            wpt: Cm
        },
        Fm = L(tm, {
            rte: Sk(ym),
            trk: Sk(Am),
            wpt: Sk(Cm)
        }),
        wm = L(tm, {
            text: E(R, "linkText"),
            type: E(R, "linkType")
        }),
        zm = L(tm, {
            name: E(R),
            cmt: E(R),
            desc: E(R),
            src: E(R),
            link: vm,
            number: E(dm),
            extensions: xm,
            type: E(R),
            rtept: function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("rtept" == a.localName, "localName should be rtept");
                var c = Q({}, Gm, a, b);
                c && um(b[b.length - 1].flatCoordinates, a, c)
            }
        }),
        Gm = L(tm, {
            ele: E(bm),
            time: E(am)
        }),
        Bm = L(tm, {
            name: E(R),
            cmt: E(R),
            desc: E(R),
            src: E(R),
            link: vm,
            number: E(dm),
            type: E(R),
            extensions: xm,
            trkseg: function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("trkseg" == a.localName, "localName should be trkseg");
                var c = b[b.length - 1];
                $k(Hm, a, b);
                c.ends.push(c.flatCoordinates.length)
            }
        }),
        Hm = L(tm, {
            trkpt: function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("trkpt" == a.localName, "localName should be trkpt");
                var c = Q({}, Im, a, b);
                c && um(b[b.length -
                    1].flatCoordinates, a, c)
            }
        }),
        Im = L(tm, {
            ele: E(bm),
            time: E(am)
        }),
        Dm = L(tm, {
            ele: E(bm),
            time: E(am),
            magvar: E(bm),
            geoidheight: E(bm),
            name: E(R),
            cmt: E(R),
            desc: E(R),
            src: E(R),
            link: vm,
            sym: E(R),
            type: E(R),
            fix: E(R),
            sat: E(dm),
            hdop: E(bm),
            vdop: E(bm),
            pdop: E(bm),
            ageofdgpsdata: E(bm),
            dgpsid: E(dm),
            extensions: xm
        });

    function Jm(a, b) {
        b || (b = []);
        for (var c = 0, d = b.length; c < d; ++c) {
            var e = b[c];
            if (a.b) {
                var f = e.get("extensionsNode_") || null;
                a.b(e, f)
            }
            e.set("extensionsNode_", void 0)
        }
    }
    sm.prototype.$h = function(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        if (!cb(tm, a.namespaceURI)) return null;
        var c = Em[a.localName];
        if (!c) return null;
        c = c(a, [fl(this, a, b)]);
        if (!c) return null;
        Jm(this, [c]);
        return c
    };
    sm.prototype.pc = function(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        if (!cb(tm, a.namespaceURI)) return [];
        if ("gpx" == a.localName) {
            var c = Q([], Fm, a, [fl(this, a, b)]);
            if (c) return Jm(this, c), c
        }
        return []
    };

    function Km(a, b, c) {
        a.setAttribute("href", b);
        b = c[c.length - 1].properties;
        al({
            node: a
        }, Lm, Yk, [b.linkText, b.linkType], c, Mm)
    }

    function Nm(a, b, c) {
        var d = c[c.length - 1],
            e = d.node;
        console.assert(Pk(e), "parentNode should be an XML node");
        var f = e.namespaceURI,
            e = d.properties;
        a.setAttributeNS(null, "lat", b[1]);
        a.setAttributeNS(null, "lon", b[0]);
        switch (d.geometryLayout) {
            case "XYZM":
                0 !== b[3] && (e.time = b[3]);
            case "XYZ":
                0 !== b[2] && (e.ele = b[2]);
                break;
            case "XYM":
                0 !== b[2] && (e.time = b[2])
        }
        b = "rtept" == a.nodeName ? Om[f] : Pm[f];
        d = Zk(e, b);
        al({
            node: a,
            properties: e
        }, Qm, Yk, d, c, b)
    }
    var Mm = ["text", "type"],
        Lm = L(tm, {
            text: G(gm),
            type: G(gm)
        }),
        Rm = L(tm, "name cmt desc src link number type rtept".split(" ")),
        Sm = L(tm, {
            name: G(gm),
            cmt: G(gm),
            desc: G(gm),
            src: G(gm),
            link: G(Km),
            number: G(im),
            type: G(gm),
            rtept: Vk(G(Nm))
        }),
        Om = L(tm, ["ele", "time"]),
        Tm = L(tm, "name cmt desc src link number type trkseg".split(" ")),
        Wm = L(tm, {
            name: G(gm),
            cmt: G(gm),
            desc: G(gm),
            src: G(gm),
            link: G(Km),
            number: G(im),
            type: G(gm),
            trkseg: Vk(G(function(a, b, c) {
                al({
                    node: a,
                    geometryLayout: b.layout,
                    properties: {}
                }, Um, Vm, b.M(), c)
            }))
        }),
        Vm = Wk("trkpt"),
        Um = L(tm, {
            trkpt: G(Nm)
        }),
        Pm = L(tm, "ele time magvar geoidheight name cmt desc src link sym type fix sat hdop vdop pdop ageofdgpsdata dgpsid".split(" ")),
        Qm = L(tm, {
            ele: G(hm),
            time: G(function(a, b) {
                var c = new Date(1E3 * b);
                a.appendChild(Kk.createTextNode(c.getUTCFullYear() + "-" + sb(c.getUTCMonth() + 1, 2) + "-" + sb(c.getUTCDate(), 2) + "T" + sb(c.getUTCHours(), 2) + ":" + sb(c.getUTCMinutes(), 2) + ":" + sb(c.getUTCSeconds(), 2) + "Z"))
            }),
            magvar: G(hm),
            geoidheight: G(hm),
            name: G(gm),
            cmt: G(gm),
            desc: G(gm),
            src: G(gm),
            link: G(Km),
            sym: G(gm),
            type: G(gm),
            fix: G(gm),
            sat: G(im),
            hdop: G(hm),
            vdop: G(hm),
            pdop: G(hm),
            ageofdgpsdata: G(hm),
            dgpsid: G(im)
        }),
        Xm = {
            Point: "wpt",
            LineString: "rte",
            MultiLineString: "trk"
        };

    function Ym(a, b) {
        var c = a.G();
        if (c && (c = Xm[c.T()])) {
            var d = b[b.length - 1].node;
            console.assert(Pk(d), "parentNode should be an XML node");
            return Lk(d.namespaceURI, c)
        }
    }
    var Zm = L(tm, {
        rte: G(function(a, b, c) {
            var d = c[0],
                e = ab(b);
            a = {
                node: a,
                properties: e
            };
            if (b = b.G()) b = hl(b, !0, d), a.geometryLayout = b.layout, e.rtept = b.M();
            d = Rm[c[c.length - 1].node.namespaceURI];
            e = Zk(e, d);
            al(a, Sm, Yk, e, c, d)
        }),
        trk: G(function(a, b, c) {
            var d = c[0],
                e = ab(b);
            a = {
                node: a,
                properties: e
            };
            if (b = b.G()) b = hl(b, !0, d), e.trkseg = ul(b);
            d = Tm[c[c.length - 1].node.namespaceURI];
            e = Zk(e, d);
            al(a, Wm, Yk, e, c, d)
        }),
        wpt: G(function(a, b, c) {
            var d = c[0],
                e = c[c.length - 1];
            e.properties = ab(b);
            if (b = b.G()) b = hl(b, !0, d), e.geometryLayout = b.layout, Nm(a,
                b.M(), c)
        })
    });
    sm.prototype.f = function(a, b) {
        b = gl(this, b);
        var c = Lk("http://www.topografix.com/GPX/1/1", "gpx");
        c.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
        c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", "http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd");
        c.setAttribute("version", "1.1");
        c.setAttribute("creator", "OpenLayers 3");
        al({
            node: c
        }, Zm, Ym, a, [b]);
        return c
    };

    function $m() {
        el.call(this)
    }
    v($m, el);

    function an(a) {
        return "string" === typeof a ? a : ""
    }
    m = $m.prototype;
    m.T = function() {
        return "text"
    };
    m.readFeature = function(a, b) {
        return bn(this, an(a), gl(this, b))
    };
    m.readFeatures = function(a, b) {
        var c = an(a);
        gl(this, b);
        for (var d = [], c = c.substring(1); 0 < c.length;) {
            var e = c.indexOf(")"),
                f = bn(this, c.substring(0, e + 1));
            d.push(f);
            c = c.substring(e + 1)
        }
        return d
    };
    m.readGeometry = function(a, b) {
        return cn(this, an(a), gl(this, b))
    };
    m.se = function() {
        return this.wb
    };
    m.writeFeature = function(a, b) {
        return dn(this, a, gl(this, b))
    };
    m.writeFeatures = function(a, b) {
        var c = gl(this, b),
            d = [];
        if (0 < a.length) {
            d.push("F");
            for (var e = 0, f = a.length; e < f; ++e) d.push(dn(this, a[e], c))
        }
        return d.join("")
    };
    m.writeGeometry = function(a, b) {
        return en(this, a, gl(this, b))
    };

    function fn(a, b, c, d, e, f) {
        Sa.call(this);
        this.s = null;
        this.b = a ? a : new Image;
        null !== d && (this.b.crossOrigin = d);
        this.g = f ? document.createElement("CANVAS") : null;
        this.i = f;
        this.j = null;
        this.f = e;
        this.c = c;
        this.o = b;
        this.v = !1;
        this.f == Sh && gn(this)
    }
    v(fn, Sa);

    function gn(a) {
        var b = Ae(1, 1);
        try {
            b.drawImage(a.b, 0, 0), b.getImageData(0, 0, 1, 1)
        } catch (c) {
            a.v = !0
        }
    }
    fn.prototype.D = function() {
        this.f = Rh;
        this.j.forEach(Ja);
        this.j = null;
        B(this, "change")
    };
    fn.prototype.C = function() {
        this.f = Sh;
        this.c && (this.b.width = this.c[0], this.b.height = this.c[1]);
        this.c = [this.b.width, this.b.height];
        this.j.forEach(Ja);
        this.j = null;
        gn(this);
        if (!this.v && null !== this.i) {
            this.g.width = this.b.width;
            this.g.height = this.b.height;
            var a = this.g.getContext("2d");
            a.drawImage(this.b, 0, 0);
            for (var b = a.getImageData(0, 0, this.b.width, this.b.height), c = b.data, d = this.i[0] / 255, e = this.i[1] / 255, f = this.i[2] / 255, g = 0, h = c.length; g < h; g += 4) c[g] *= d, c[g + 1] *= e, c[g + 2] *= f;
            a.putImageData(b, 0, 0)
        }
        B(this, "change")
    };
    fn.prototype.load = function() {
        if (this.f == Qh) {
            console.assert(void 0 !== this.o, "this.src_ must not be undefined");
            console.assert(!this.j, "no listener keys existing");
            this.f = Th;
            this.j = [A(this.b, "error", this.D, this, !0), A(this.b, "load", this.C, this, !0)];
            try {
                this.b.src = this.o
            } catch (a) {
                this.D()
            }
        }
    };

    function hn(a) {
        a = a || {};
        this.j = void 0 !== a.anchor ? a.anchor : [.5, .5];
        this.i = null;
        this.c = void 0 !== a.Jd ? a.Jd : jn;
        this.O = void 0 !== a.Kd ? a.Kd : kn;
        this.V = void 0 !== a.Ld ? a.Ld : kn;
        this.N = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        var b = void 0 !== a.uh ? a.uh : null,
            c = void 0 !== a.vh ? a.vh : null,
            d = a.src;
        wa(!(void 0 !== d && b), 4);
        wa(!b || b && c, 5);
        void 0 !== d && 0 !== d.length || !b || (d = b.src || x(b).toString());
        wa(void 0 !== d && 0 < d.length, 6);
        var e = void 0 !== a.src ? Qh : Sh;
        this.o = void 0 !== a.color ? ue(a.color) : null;
        var f = this.N,
            g = this.o,
            h = vh.get(d,
                f, g);
        h || (h = new fn(b, d, c, f, e, g), vh.set(d, f, g, h));
        this.b = h;
        this.H = void 0 !== a.offset ? a.offset : [0, 0];
        this.f = void 0 !== a.Nf ? a.Nf : jn;
        this.v = null;
        this.D = void 0 !== a.size ? a.size : null;
        Yh.call(this, {
            opacity: void 0 !== a.opacity ? a.opacity : 1,
            rotation: void 0 !== a.rotation ? a.rotation : 0,
            scale: void 0 !== a.scale ? a.scale : 1,
            fb: void 0 !== a.fb ? a.fb : !0,
            ub: void 0 !== a.ub ? a.ub : !1
        })
    }
    v(hn, Yh);
    m = hn.prototype;
    m.clone = function() {
        var a = this.gd(1),
            b;
        if (this.b.f === Sh)
            if ("IMG" === a.tagName.toUpperCase()) b = a.cloneNode(!0);
            else {
                b = document.createElement("canvas");
                var c = b.getContext("2d");
                b.width = a.width;
                b.height = a.height;
                c.drawImage(a, 0, 0)
            }
        return new hn({
            anchor: this.j.slice(),
            Jd: this.c,
            Kd: this.O,
            Ld: this.V,
            crossOrigin: this.N,
            color: this.o && this.o.slice ? this.o.slice() : this.o || void 0,
            uh: b ? b : void 0,
            vh: b ? this.b.c.slice() : void 0,
            src: b ? void 0 : this.b.o,
            offset: this.H.slice(),
            Nf: this.f,
            size: null !== this.D ? this.D.slice() : void 0,
            opacity: this.g,
            scale: this.Da(),
            fb: this.C,
            rotation: this.s,
            ub: this.F
        })
    };
    m.Yc = function() {
        if (this.i) return this.i;
        var a = this.j,
            b = this.Jb();
        if (this.O == kn || this.V == kn) {
            if (!b) return null;
            a = this.j.slice();
            this.O == kn && (a[0] *= b[0]);
            this.V == kn && (a[1] *= b[1])
        }
        if (this.c != jn) {
            if (!b) return null;
            a === this.j && (a = this.j.slice());
            if (this.c == ln || this.c == mn) a[0] = -a[0] + b[0];
            if (this.c == nn || this.c == mn) a[1] = -a[1] + b[1]
        }
        return this.i = a
    };
    m.gd = function() {
        var a = this.b;
        return a.g ? a.g : a.b
    };
    m.Ud = function() {
        return this.b.c
    };
    m.Kc = function() {
        return this.b.f
    };
    m.Pf = function() {
        var a = this.b;
        if (!a.s)
            if (a.v) {
                var b = a.c[0],
                    c = a.c[1],
                    d = Ae(b, c);
                d.fillRect(0, 0, b, c);
                a.s = d.canvas
            } else a.s = a.b;
        return a.s
    };
    m.hd = function() {
        if (this.v) return this.v;
        var a = this.H;
        if (this.f != jn) {
            var b = this.Jb(),
                c = this.b.c;
            if (!b || !c) return null;
            a = a.slice();
            if (this.f == ln || this.f == mn) a[0] = c[0] - b[0] - a[0];
            if (this.f == nn || this.f == mn) a[1] = c[1] - b[1] - a[1]
        }
        return this.v = a
    };
    m.Jb = function() {
        return this.D ? this.D : this.b.c
    };
    m.Gf = function(a, b) {
        return A(this.b, "change", a, b)
    };
    m.load = function() {
        this.b.load()
    };
    m.pg = function(a, b) {
        Oa(this.b, "change", a, b)
    };
    var kn = "fraction",
        nn = "bottom-left",
        mn = "bottom-right",
        jn = "top-left",
        ln = "top-right";

    function on(a) {
        a = a || {};
        this.c = a.font;
        this.i = a.rotation;
        this.s = a.ub;
        this.D = a.scale;
        this.C = a.text;
        this.o = a.textAlign;
        this.v = a.textBaseline;
        this.b = void 0 !== a.fill ? a.fill : new ci({
            color: "#333"
        });
        this.f = void 0 !== a.stroke ? a.stroke : null;
        this.j = void 0 !== a.offsetX ? a.offsetX : 0;
        this.g = void 0 !== a.offsetY ? a.offsetY : 0
    }
    on.prototype.clone = function() {
        return new on({
            font: this.c,
            rotation: this.i,
            ub: this.s,
            scale: this.Da(),
            text: this.pa(),
            textAlign: this.o,
            textBaseline: this.v,
            fill: this.b ? this.b.clone() : void 0,
            stroke: this.f ? this.f.clone() : void 0,
            offsetX: this.j,
            offsetY: this.g
        })
    };
    on.prototype.Da = function() {
        return this.D
    };
    on.prototype.pa = function() {
        return this.C
    };

    function pn(a) {
        a = a ? a : {};
        Ul.call(this);
        this.wb = jc("EPSG:4326");
        var b;
        a.fk ? b = a.fk : (b = qn) || (rn = [255, 255, 255, 1], sn = new ci({
            color: rn
        }), tn = [20, 2], un = vn = "pixels", wn = [64, 64], xn = "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png", yn = .5, zn = new hn({
            anchor: tn,
            Jd: nn,
            Kd: vn,
            Ld: un,
            crossOrigin: "anonymous",
            rotation: 0,
            scale: yn,
            size: wn,
            src: xn
        }), An = "NO_IMAGE", Bn = new di({
            color: rn,
            width: 1
        }), Cn = new di({
            color: [51, 51, 51, 1],
            width: 2
        }), Dn = new on({
            font: "bold 16px Helvetica",
            fill: sn,
            stroke: Cn,
            scale: .8
        }), En = new ei({
            fill: sn,
            image: zn,
            text: Dn,
            stroke: Bn,
            zIndex: 0
        }), b = qn = [En]);
        this.c = b;
        this.g = void 0 !== a.rk ? a.rk : !0;
        this.O = void 0 !== a.np ? a.np : !0;
        this.b = {};
        this.F = void 0 !== a.Bo ? a.Bo : !0
    }
    var qn, rn, sn, tn, vn, un, wn, xn, yn, zn, An, Bn, Cn, Dn, En;
    v(pn, Ul);
    var Fn = ["http://www.google.com/kml/ext/2.2"],
        Gn = [null, "http://earth.google.com/kml/2.0", "http://earth.google.com/kml/2.1", "http://earth.google.com/kml/2.2", "http://www.opengis.net/kml/2.2"],
        Hn = {
            fraction: kn,
            pixels: "pixels"
        };

    function In(a, b) {
        var c, d = [0, 0],
            e = "start";
        if (a.c) {
            c = a.c.Ud();
            null === c && (c = wn);
            var f = a.c.Da();
            isNaN(f) && (f = yn);
            2 == c.length && (d[0] = f * c[0] / 2, d[1] = -f * c[1] / 2, e = "left")
        }
        null !== a.pa() ? (f = a.pa(), c = f.clone(), c.c = f.c || Dn.c, c.D = f.Da() || Dn.Da(), c.b = f.b || Dn.b, c.f = f.f || Cn) : c = Dn.clone();
        c.C = b;
        c.j = d[0];
        c.g = d[1];
        c.o = e;
        return new ei({
            text: c
        })
    }

    function Jn(a, b, c, d, e) {
        return function() {
            var f = e,
                g = "";
            f && this.G() && (f = "Point" === this.G().T());
            f && (g = this.get("name"), f = f && g);
            if (a) return f ? (f = In(a[0], g), a.concat(f)) : a;
            if (b) {
                var h = Kn(b, c, d);
                return f ? (f = In(h[0], g), h.concat(f)) : h
            }
            return f ? (f = In(c[0], g), c.concat(f)) : c
        }
    }

    function Kn(a, b, c) {
        return Array.isArray(a) ? a : "string" === typeof a ? (!(a in c) && "#" + a in c && (a = "#" + a), Kn(c[a], b, c)) : b
    }

    function Ln(a) {
        a = Mk(a);
        if (a = /^\s*#?\s*([0-9A-Fa-f]{8})\s*$/.exec(a)) return a = a[1], [parseInt(a.substr(6, 2), 16), parseInt(a.substr(4, 2), 16), parseInt(a.substr(2, 2), 16), parseInt(a.substr(0, 2), 16) / 255]
    }

    function Mn(a) {
        a = Mk(a);
        for (var b = [], c = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)(?:\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?))?\s*/i, d; d = c.exec(a);) b.push(parseFloat(d[1]), parseFloat(d[2]), d[3] ? parseFloat(d[3]) : 0), a = a.substr(d[0].length);
        return "" !== a ? void 0 : b
    }

    function Nn(a) {
        var b = Mk(a).trim();
        return a.baseURI ? (new URL(b, a.baseURI)).href : b
    }

    function On(a) {
        return bm(a)
    }

    function Pn(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("LinearRing" == a.localName, "localName should be LinearRing");
        return Q(null, Qn, a, b)
    }

    function Rn(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert(cb(Fn, a.namespaceURI), "namespaceURI of the node should be known to the KML parser");
        console.assert("Track" == a.localName, "localName should be Track");
        var c = Q({
            B: [],
            Fi: []
        }, Sn, a, b);
        if (c) {
            var d = c.B,
                c = c.Fi;
            console.assert(d.length / 4 == c.length, "the length of the flatCoordinates array divided by 4 should be the length of the whens array");
            var e, f;
            e = 0;
            for (f = Math.min(d.length, c.length); e < f; ++e) d[4 *
                e + 3] = c[e];
            c = new rl(null);
            c.U("XYZM", d);
            return c
        }
    }

    function Tn(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        return Q(null, Un, a, b)
    }

    function Vn(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("LineString" == a.localName, "localName should be LineString");
        var c = Q({}, Wn, a, b),
            d = Tn(a, b);
        if (d) {
            var e = new rl(null);
            e.U("XYZ", d);
            e.Ga(c);
            return e
        }
    }

    function Xn(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("LinearRing" == a.localName, "localName should be LinearRing");
        var c = Q({}, Wn, a, b),
            d = Tn(a, b);
        if (d) {
            var e = new bd(null);
            e.U("XYZ", d, [d.length]);
            e.Ga(c);
            return e
        }
    }

    function Yn(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("MultiGeometry" == a.localName, "localName should be MultiGeometry");
        var c = Q([], Zn, a, b);
        if (!c) return null;
        if (0 === c.length) return new Nl(c);
        var d, e = !0,
            f = c[0].T(),
            g, h, k;
        h = 1;
        for (k = c.length; h < k; ++h)
            if (g = c[h], g.T() != f) {
                e = !1;
                break
            }
        if (e)
            if ("Point" == f) {
                d = c[0];
                e = d.layout;
                f = d.B;
                h = 1;
                for (k = c.length; h < k; ++h) g = c[h], console.assert(g.layout == e, "geometry layout should be consistent"), eb(f, g.B);
                d = new wl(null);
                d.U(e, f);
                $n(d, c)
            } else "LineString" == f ? (d = new tl(null), vl(d, c), $n(d, c)) : "Polygon" == f ? (d = new yl(null), Bl(d, c), $n(d, c)) : "GeometryCollection" == f ? d = new Nl(c) : wa(!1, 37);
        else d = new Nl(c);
        return d
    }

    function ao(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("Point" == a.localName, "localName should be Point");
        var c = Q({}, Wn, a, b),
            d = Tn(a, b);
        if (d) {
            var e = new Qc(null);
            console.assert(3 == d.length, "flatCoordinates should have a length of 3");
            e.U("XYZ", d);
            e.Ga(c);
            return e
        }
    }

    function bo(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("Polygon" == a.localName, "localName should be Polygon");
        var c = Q({}, Wn, a, b),
            d = Q([null], co, a, b);
        if (d && d[0]) {
            var e = new bd(null),
                f = d[0],
                g = [f.length],
                h, k;
            h = 1;
            for (k = d.length; h < k; ++h) eb(f, d[h]), g.push(f.length);
            e.U("XYZ", f, g);
            e.Ga(c);
            return e
        }
    }

    function eo(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("Style" == a.localName, "localName should be Style");
        var c = Q({}, fo, a, b);
        if (!c) return null;
        var d = "fillStyle" in c ? c.fillStyle : sn,
            e = c.fill;
        void 0 === e || e || (d = null);
        e = "imageStyle" in c ? c.imageStyle : zn;
        e == An && (e = void 0);
        var f = "textStyle" in c ? c.textStyle : Dn,
            g = "strokeStyle" in c ? c.strokeStyle : Bn,
            c = c.outline;
        void 0 === c || c || (g = null);
        return [new ei({
            fill: d,
            image: e,
            stroke: g,
            text: f,
            zIndex: void 0
        })]
    }

    function $n(a, b) {
        var c = b.length,
            d = Array(b.length),
            e = Array(b.length),
            f, g, h, k;
        h = k = !1;
        for (g = 0; g < c; ++g) f = b[g], d[g] = f.get("extrude"), e[g] = f.get("altitudeMode"), h = h || void 0 !== d[g], k = k || e[g];
        h && a.set("extrude", d);
        k && a.set("altitudeMode", e)
    }

    function go(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("ExtendedData" == a.localName, "localName should be ExtendedData");
        $k(ho, a, b)
    }
    var io = L(Gn, {
            value: Tk(R)
        }),
        ho = L(Gn, {
            Data: function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("Data" == a.localName, "localName should be Data");
                var c = a.getAttribute("name");
                if (null !== c) {
                    var d = Q(void 0, io, a, b);
                    d && (b[b.length - 1][c] = d)
                }
            },
            SchemaData: function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("SchemaData" == a.localName, "localName should be SchemaData");
                $k(jo, a, b)
            }
        }),
        Wn = L(Gn, {
            extrude: E(Zl),
            altitudeMode: E(R)
        }),
        Qn = L(Gn, {
            coordinates: Tk(Mn)
        }),
        co = L(Gn, {
            innerBoundaryIs: function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("innerBoundaryIs" == a.localName, "localName should be innerBoundaryIs");
                var c = Q(void 0, ko, a, b);
                if (c) {
                    var d = b[b.length - 1];
                    console.assert(Array.isArray(d), "flatLinearRings should be an array");
                    console.assert(0 < d.length, "flatLinearRings array should not be empty");
                    d.push(c)
                }
            },
            outerBoundaryIs: function(a, b) {
                console.assert(a.nodeType ==
                    Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("outerBoundaryIs" == a.localName, "localName should be outerBoundaryIs");
                var c = Q(void 0, lo, a, b);
                if (c) {
                    var d = b[b.length - 1];
                    console.assert(Array.isArray(d), "flatLinearRings should be an array");
                    console.assert(0 < d.length, "flatLinearRings array should not be empty");
                    d[0] = c
                }
            }
        }),
        Sn = L(Gn, {
            when: function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("when" == a.localName, "localName should be when");
                var c = b[b.length - 1].Fi,
                    d = Mk(a),
                    d = Date.parse(d);
                c.push(isNaN(d) ? 0 : d)
            }
        }, L(Fn, {
            coord: function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert(cb(Fn, a.namespaceURI), "namespaceURI of the node should be known to the KML parser");
                console.assert("coord" == a.localName, "localName should be coord");
                var c = b[b.length - 1].B,
                    d = Mk(a);
                (d = /^\s*([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s*$/i.exec(d)) ?
                c.push(parseFloat(d[1]), parseFloat(d[2]), parseFloat(d[3]), 0): c.push(0, 0, 0, 0)
            }
        })),
        Un = L(Gn, {
            coordinates: Tk(Mn)
        }),
        mo = L(Gn, {
            href: E(Nn)
        }, L(Fn, {
            x: E(bm),
            y: E(bm),
            w: E(bm),
            h: E(bm)
        })),
        no = L(Gn, {
            Icon: E(function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("Icon" == a.localName, "localName should be Icon");
                var c = Q({}, mo, a, b);
                return c ? c : null
            }),
            heading: E(bm),
            hotSpot: E(function(a) {
                var b = a.getAttribute("xunits"),
                    c = a.getAttribute("yunits");
                return {
                    x: parseFloat(a.getAttribute("x")),
                    sg: Hn[b],
                    y: parseFloat(a.getAttribute("y")),
                    tg: Hn[c]
                }
            }),
            scale: E(On)
        }),
        ko = L(Gn, {
            LinearRing: Tk(Pn)
        }),
        oo = L(Gn, {
            color: E(Ln),
            scale: E(On)
        }),
        po = L(Gn, {
            color: E(Ln),
            width: E(bm)
        }),
        Zn = L(Gn, {
            LineString: Sk(Vn),
            LinearRing: Sk(Xn),
            MultiGeometry: Sk(Yn),
            Point: Sk(ao),
            Polygon: Sk(bo)
        }),
        qo = L(Fn, {
            Track: Sk(Rn)
        });
    L(Gn, {
        ExtendedData: go,
        Link: function(a, b) {
            console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
            console.assert("Link" == a.localName, "localName should be Link");
            $k(ro, a, b)
        },
        address: E(R),
        description: E(R),
        name: E(R),
        open: E(Zl),
        phoneNumber: E(R),
        visibility: E(Zl)
    });
    var ro = L(Gn, {
            href: E(Nn)
        }),
        lo = L(Gn, {
            LinearRing: Tk(Pn)
        }),
        so = L(Gn, {
            Style: E(eo),
            key: E(R),
            styleUrl: E(Nn)
        }),
        uo = L(Gn, {
            ExtendedData: go,
            MultiGeometry: E(Yn, "geometry"),
            LineString: E(Vn, "geometry"),
            LinearRing: E(Xn, "geometry"),
            Point: E(ao, "geometry"),
            Polygon: E(bo, "geometry"),
            Style: E(eo),
            StyleMap: function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("StyleMap" == a.localName, "localName should be StyleMap");
                var c = Q(void 0, to, a, b);
                if (c) {
                    var d = b[b.length - 1];
                    Array.isArray(c) ?
                        d.Style = c : "string" === typeof c ? d.styleUrl = c : wa(!1, 38)
                }
            },
            address: E(R),
            description: E(R),
            name: E(R),
            open: E(Zl),
            phoneNumber: E(R),
            styleUrl: E(Nn),
            visibility: E(Zl)
        }, L(Fn, {
            MultiTrack: E(function(a, b) {
                    console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                    console.assert(cb(Fn, a.namespaceURI), "namespaceURI of the node should be known to the KML parser");
                    console.assert("MultiTrack" == a.localName, "localName should be MultiTrack");
                    var c = Q([], qo, a, b);
                    if (c) {
                        var d = new tl(null);
                        vl(d, c);
                        return d
                    }
                },
                "geometry"),
            Track: E(Rn, "geometry")
        })),
        vo = L(Gn, {
            color: E(Ln),
            fill: E(Zl),
            outline: E(Zl)
        }),
        jo = L(Gn, {
            SimpleData: function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("SimpleData" == a.localName, "localName should be SimpleData");
                var c = a.getAttribute("name");
                if (null !== c) {
                    var d = R(a);
                    b[b.length - 1][c] = d
                }
            }
        }),
        fo = L(Gn, {
            IconStyle: function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be an ELEMENT");
                console.assert("IconStyle" == a.localName,
                    "localName should be IconStyle");
                var c = Q({}, no, a, b);
                if (c) {
                    var d = b[b.length - 1],
                        e = "Icon" in c ? c.Icon : {},
                        f = !("Icon" in c) || 0 < Object.keys(e).length,
                        g, h = e.href;
                    h ? g = h : f && (g = xn);
                    var k, l, n;
                    (h = c.hotSpot) ? (k = [h.x, h.y], l = h.sg, n = h.tg) : g === xn ? (k = tn, l = vn, n = un) : /^http:\/\/maps\.(?:google|gstatic)\.com\//.test(g) && (k = [.5, 0], n = l = kn);
                    var q, h = e.x,
                        p = e.y;
                    void 0 !== h && void 0 !== p && (q = [h, p]);
                    var r, h = e.w,
                        e = e.h;
                    void 0 !== h && void 0 !== e && (r = [h, e]);
                    var u, e = c.heading;
                    void 0 !== e && (u = za(e));
                    c = c.scale;
                    c = isNaN(c) || void 0 === c ? yn : c * yn;
                    f ? (g == xn && (r = wn, void 0 === c && (c = yn)), f = new hn({
                        anchor: k,
                        Jd: nn,
                        Kd: l,
                        Ld: n,
                        crossOrigin: "anonymous",
                        offset: q,
                        Nf: nn,
                        rotation: u,
                        scale: c,
                        size: r,
                        src: g
                    }), d.imageStyle = f) : d.imageStyle = An
                }
            },
            LabelStyle: function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("LabelStyle" == a.localName, "localName should be LabelStyle");
                var c = Q({}, oo, a, b);
                c && (b[b.length - 1].textStyle = new on({
                    fill: new ci({
                        color: "color" in c ? c.color : rn
                    }),
                    scale: c.scale
                }))
            },
            LineStyle: function(a, b) {
                console.assert(a.nodeType ==
                    Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("LineStyle" == a.localName, "localName should be LineStyle");
                var c = Q({}, po, a, b);
                c && (b[b.length - 1].strokeStyle = new di({
                    color: "color" in c ? c.color : rn,
                    width: "width" in c ? c.width : 1
                }))
            },
            PolyStyle: function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("PolyStyle" == a.localName, "localName should be PolyStyle");
                var c = Q({}, vo, a, b);
                if (c) {
                    var d = b[b.length - 1];
                    d.fillStyle = new ci({
                        color: "color" in
                            c ? c.color : rn
                    });
                    var e = c.fill;
                    void 0 !== e && (d.fill = e);
                    c = c.outline;
                    void 0 !== c && (d.outline = c)
                }
            }
        }),
        to = L(Gn, {
            Pair: function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("Pair" == a.localName, "localName should be Pair");
                var c = Q({}, so, a, b);
                if (c) {
                    var d = c.key;
                    d && "normal" == d && ((d = c.styleUrl) && (b[b.length - 1] = d), (c = c.Style) && (b[b.length - 1] = c))
                }
            }
        });
    m = pn.prototype;
    m.Tf = function(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        var c = a.localName;
        console.assert("Document" == c || "Folder" == c, "localName should be Document or Folder");
        c = L(Gn, {
            Document: Rk(this.Tf, this),
            Folder: Rk(this.Tf, this),
            Placemark: Sk(this.Xf, this),
            Style: this.bo.bind(this),
            StyleMap: this.ao.bind(this)
        });
        if (c = Q([], c, a, b, this)) return c
    };
    m.Xf = function(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("Placemark" == a.localName, "localName should be Placemark");
        var c = Q({
            geometry: null
        }, uo, a, b);
        if (c) {
            var d = new Fk,
                e = a.getAttribute("id");
            null !== e && Jk(d, e);
            var e = b[0],
                f = c.geometry;
            f && hl(f, !1, e);
            Gk(d, f);
            delete c.geometry;
            this.g && d.setStyle(Jn(c.Style, c.styleUrl, this.c, this.b, this.F));
            delete c.Style;
            d.Ga(c);
            return d
        }
    };
    m.bo = function(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("Style" == a.localName, "localName should be Style");
        var c = a.getAttribute("id");
        if (null !== c) {
            var d = eo(a, b);
            d && (c = a.baseURI ? (new URL("#" + c, a.baseURI)).href : "#" + c, this.b[c] = d)
        }
    };
    m.ao = function(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("StyleMap" == a.localName, "localName should be StyleMap");
        var c = a.getAttribute("id");
        if (null !== c) {
            var d = Q(void 0, to, a, b);
            d && (c = a.baseURI ? (new URL("#" + c, a.baseURI)).href : "#" + c, this.b[c] = d)
        }
    };
    m.$h = function(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        if (!cb(Gn, a.namespaceURI)) return null;
        console.assert("Placemark" == a.localName, "localName should be Placemark");
        var c = this.Xf(a, [fl(this, a, b)]);
        return c ? c : null
    };
    m.pc = function(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        if (!cb(Gn, a.namespaceURI)) return [];
        var c;
        c = a.localName;
        if ("Document" == c || "Folder" == c) return (c = this.Tf(a, [fl(this, a, b)])) ? c : [];
        if ("Placemark" == c) return (c = this.Xf(a, [fl(this, a, b)])) ? [c] : [];
        if ("kml" == c) {
            c = [];
            var d;
            for (d = a.firstElementChild; d; d = d.nextElementSibling) {
                var e = this.pc(d, b);
                e && eb(c, e)
            }
            return c
        }
        return []
    };

    function wo(a, b) {
        var c = ue(b),
            c = [255 * (4 == c.length ? c[3] : 1), c[2], c[1], c[0]],
            d;
        for (d = 0; 4 > d; ++d) {
            var e = parseInt(c[d], 10).toString(16);
            c[d] = 1 == e.length ? "0" + e : e
        }
        gm(a, c.join(""))
    }

    function xo(a, b, c) {
        a = {
            node: a
        };
        var d = b.T(),
            e, f;
        "GeometryCollection" == d ? (e = Pl(b.c), f = yo) : "MultiPoint" == d ? (e = xl(b), f = zo) : "MultiLineString" == d ? (e = ul(b), f = Ao) : "MultiPolygon" == d ? (e = Al(b), f = Bo) : wa(!1, 39);
        al(a, Co, f, e, c)
    }

    function Do(a, b, c) {
        al({
            node: a
        }, Eo, Fo, [b], c)
    }

    function Go(a, b, c) {
        var d = {
            node: a
        };
        b.Ua() && a.setAttribute("id", b.Ua());
        a = ab(b);
        var e = b.f;
        e && (e = e.call(b, 0)) && (e = Array.isArray(e) ? e[0] : e, this.O && (a.Style = e), (e = e.pa()) && (a.name = e.pa()));
        e = Ho[c[c.length - 1].node.namespaceURI];
        a = Zk(a, e);
        al(d, Io, Yk, a, c, e);
        a = c[0];
        (b = b.G()) && (b = hl(b, !0, a));
        al(d, Io, yo, [b], c)
    }

    function Jo(a, b, c) {
        console.assert(b instanceof Qc || b instanceof rl || b instanceof Oc, "geometry should be one of ol.geom.Point, ol.geom.LineString or ol.geom.LinearRing");
        var d = b.B;
        a = {
            node: a
        };
        a.layout = b.layout;
        a.stride = b.J;
        al(a, Ko, Lo, [d], c)
    }

    function Mo(a, b, c) {
        b = fd(b);
        console.assert(0 < b.length, "linearRings should not be empty");
        var d = b.shift();
        a = {
            node: a
        };
        al(a, No, Oo, b, c);
        al(a, No, Po, [d], c)
    }

    function Qo(a, b) {
        hm(a, Math.round(b * b * 1E6) / 1E6)
    }
    var Ro = L(Gn, ["Document", "Placemark"]),
        Uo = L(Gn, {
            Document: G(function(a, b, c) {
                al({
                    node: a
                }, So, To, b, c, void 0, this)
            }),
            Placemark: G(Go)
        }),
        So = L(Gn, {
            Placemark: G(Go)
        }),
        Vo = {
            Point: "Point",
            LineString: "LineString",
            LinearRing: "LinearRing",
            Polygon: "Polygon",
            MultiPoint: "MultiGeometry",
            MultiLineString: "MultiGeometry",
            MultiPolygon: "MultiGeometry",
            GeometryCollection: "MultiGeometry"
        },
        Wo = L(Gn, ["href"], L(Fn, ["x", "y", "w", "h"])),
        Xo = L(Gn, {
            href: G(gm)
        }, L(Fn, {
            x: G(hm),
            y: G(hm),
            w: G(hm),
            h: G(hm)
        })),
        Yo = L(Gn, ["scale", "heading", "Icon",
            "hotSpot"
        ]),
        $o = L(Gn, {
            Icon: G(function(a, b, c) {
                a = {
                    node: a
                };
                var d = Wo[c[c.length - 1].node.namespaceURI],
                    e = Zk(b, d);
                al(a, Xo, Yk, e, c, d);
                d = Wo[Fn[0]];
                e = Zk(b, d);
                al(a, Xo, Zo, e, c, d)
            }),
            heading: G(hm),
            hotSpot: G(function(a, b) {
                a.setAttribute("x", b.x);
                a.setAttribute("y", b.y);
                a.setAttribute("xunits", b.sg);
                a.setAttribute("yunits", b.tg)
            }),
            scale: G(Qo)
        }),
        ap = L(Gn, ["color", "scale"]),
        bp = L(Gn, {
            color: G(wo),
            scale: G(Qo)
        }),
        cp = L(Gn, ["color", "width"]),
        dp = L(Gn, {
            color: G(wo),
            width: G(hm)
        }),
        Eo = L(Gn, {
            LinearRing: G(Jo)
        }),
        Co = L(Gn, {
            LineString: G(Jo),
            Point: G(Jo),
            Polygon: G(Mo),
            GeometryCollection: G(xo)
        }),
        Ho = L(Gn, "name open visibility address phoneNumber description styleUrl Style".split(" ")),
        Io = L(Gn, {
            MultiGeometry: G(xo),
            LineString: G(Jo),
            LinearRing: G(Jo),
            Point: G(Jo),
            Polygon: G(Mo),
            Style: G(function(a, b, c) {
                a = {
                    node: a
                };
                var d = {},
                    e = b.j,
                    f = b.f,
                    g = b.c;
                b = b.pa();
                g instanceof hn && (d.IconStyle = g);
                b && (d.LabelStyle = b);
                f && (d.LineStyle = f);
                e && (d.PolyStyle = e);
                b = ep[c[c.length - 1].node.namespaceURI];
                d = Zk(d, b);
                al(a, fp, Yk, d, c, b)
            }),
            address: G(gm),
            description: G(gm),
            name: G(gm),
            open: G(fm),
            phoneNumber: G(gm),
            styleUrl: G(gm),
            visibility: G(fm)
        }),
        Ko = L(Gn, {
            coordinates: G(function(a, b, c) {
                c = c[c.length - 1];
                var d = c.layout;
                c = c.stride;
                var e;
                "XY" == d || "XYM" == d ? e = 2 : "XYZ" == d || "XYZM" == d ? e = 3 : wa(!1, 34);
                var f, g = b.length,
                    h = "";
                if (0 < g) {
                    h += b[0];
                    for (d = 1; d < e; ++d) h += "," + b[d];
                    for (f = c; f < g; f += c)
                        for (h += " " + b[f], d = 1; d < e; ++d) h += "," + b[f + d]
                }
                gm(a, h)
            })
        }),
        No = L(Gn, {
            outerBoundaryIs: G(Do),
            innerBoundaryIs: G(Do)
        }),
        gp = L(Gn, {
            color: G(wo)
        }),
        ep = L(Gn, ["IconStyle", "LabelStyle", "LineStyle", "PolyStyle"]),
        fp = L(Gn, {
            IconStyle: G(function(a,
                b, c) {
                a = {
                    node: a
                };
                var d = {},
                    e = b.Jb(),
                    f = b.Ud(),
                    g = {
                        href: b.b.o
                    };
                if (e) {
                    g.w = e[0];
                    g.h = e[1];
                    var h = b.Yc(),
                        k = b.hd();
                    k && f && 0 !== k[0] && k[1] !== e[1] && (g.x = k[0], g.y = f[1] - (k[1] + e[1]));
                    h && 0 !== h[0] && h[1] !== e[1] && (d.hotSpot = {
                        x: h[0],
                        sg: "pixels",
                        y: e[1] - h[1],
                        tg: "pixels"
                    })
                }
                d.Icon = g;
                e = b.Da();
                1 !== e && (d.scale = e);
                b = b.s;
                0 !== b && (d.heading = b);
                b = Yo[c[c.length - 1].node.namespaceURI];
                d = Zk(d, b);
                al(a, $o, Yk, d, c, b)
            }),
            LabelStyle: G(function(a, b, c) {
                a = {
                    node: a
                };
                var d = {},
                    e = b.b;
                e && (d.color = e.b);
                (b = b.Da()) && 1 !== b && (d.scale = b);
                b = ap[c[c.length - 1].node.namespaceURI];
                d = Zk(d, b);
                al(a, bp, Yk, d, c, b)
            }),
            LineStyle: G(function(a, b, c) {
                a = {
                    node: a
                };
                var d = cp[c[c.length - 1].node.namespaceURI];
                b = Zk({
                    color: b.b,
                    width: b.c
                }, d);
                al(a, dp, Yk, b, c, d)
            }),
            PolyStyle: G(function(a, b, c) {
                al({
                    node: a
                }, gp, hp, [b.b], c)
            })
        });

    function Zo(a, b, c) {
        return Lk(Fn[0], "gx:" + c)
    }

    function To(a, b) {
        var c = b[b.length - 1].node;
        console.assert(Pk(c), "parentNode should be an XML node");
        return Lk(c.namespaceURI, "Placemark")
    }

    function yo(a, b) {
        if (a) {
            var c = b[b.length - 1].node;
            console.assert(Pk(c), "parentNode should be an XML node");
            return Lk(c.namespaceURI, Vo[a.T()])
        }
    }
    var hp = Wk("color"),
        Lo = Wk("coordinates"),
        Oo = Wk("innerBoundaryIs"),
        zo = Wk("Point"),
        Ao = Wk("LineString"),
        Fo = Wk("LinearRing"),
        Bo = Wk("Polygon"),
        Po = Wk("outerBoundaryIs");
    pn.prototype.f = function(a, b) {
        b = gl(this, b);
        var c = Lk(Gn[4], "kml");
        c.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:gx", Fn[0]);
        c.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
        c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", "http://www.opengis.net/kml/2.2 https://developers.google.com/kml/schema/kml22gx.xsd");
        var d = {
                node: c
            },
            e = {};
        1 < a.length ? e.Document = a : 1 == a.length && (e.Placemark = a[0]);
        var f = Ro[c.namespaceURI],
            e = Zk(e, f);
        al(d, Uo, Yk, e, [b], f, this);
        return c
    };
    var ip;
    (function() {
        var a = {},
            b = {
                ea: a
            };
        (function(c) {
            if ("object" === typeof a && "undefined" !== typeof b) b.ea = c();
            else {
                var d;
                "undefined" !== typeof window ? d = window : "undefined" !== typeof global ? d = global : "undefined" !== typeof self ? d = self : d = this;
                d.aq = c()
            }
        })(function() {
            return function d(a, b, g) {
                function h(l, q) {
                    if (!b[l]) {
                        if (!a[l]) {
                            var p = "function" == typeof require && require;
                            if (!q && p) return p(l, !0);
                            if (k) return k(l, !0);
                            p = Error("Cannot find module '" + l + "'");
                            throw p.code = "MODULE_NOT_FOUND", p;
                        }
                        p = b[l] = {
                            ea: {}
                        };
                        a[l][0].call(p.ea, function(b) {
                            var d =
                                a[l][1][b];
                            return h(d ? d : b)
                        }, p, p.ea, d, a, b, g)
                    }
                    return b[l].ea
                }
                for (var k = "function" == typeof require && require, l = 0; l < g.length; l++) h(g[l]);
                return h
            }({
                1: [function(a, b) {
                    function f(a) {
                        this.Sb = ArrayBuffer.isView(a) ? a : new Uint8Array(a || 0);
                        this.type = this.Y = 0;
                        this.length = this.Sb.length
                    }

                    function g(a, b, d) {
                        var e = d.Sb,
                            f, g;
                        g = e[d.Y++];
                        f = (g & 112) >> 4;
                        if (128 > g) return h(a, f, b);
                        g = e[d.Y++];
                        f |= (g & 127) << 3;
                        if (128 > g) return h(a, f, b);
                        g = e[d.Y++];
                        f |= (g & 127) << 10;
                        if (128 > g) return h(a, f, b);
                        g = e[d.Y++];
                        f |= (g & 127) << 17;
                        if (128 > g) return h(a,
                            f, b);
                        g = e[d.Y++];
                        f |= (g & 127) << 24;
                        if (128 > g) return h(a, f, b);
                        g = e[d.Y++];
                        if (128 > g) return h(a, f | (g & 1) << 31, b);
                        throw Error("Expected varint not more than 10 bytes");
                    }

                    function h(a, b, d) {
                        return d ? 4294967296 * b + (a >>> 0) : 4294967296 * (b >>> 0) + (a >>> 0)
                    }
                    b.ea = f;
                    var k = a("ieee754");
                    f.j = 0;
                    f.f = 1;
                    f.b = 2;
                    f.c = 5;
                    f.prototype = {
                        destroy: function() {
                            this.Sb = null
                        },
                        Vf: function(a, b, d) {
                            for (d = d || this.length; this.Y < d;) {
                                var e = this.wa(),
                                    f = e >> 3,
                                    g = this.Y;
                                this.type = e & 7;
                                a(f, b, this);
                                this.Y === g && this.Eo(e)
                            }
                            return b
                        },
                        Un: function() {
                            var a = k.read(this.Sb,
                                this.Y, !0, 23, 4);
                            this.Y += 4;
                            return a
                        },
                        Qn: function() {
                            var a = k.read(this.Sb, this.Y, !0, 52, 8);
                            this.Y += 8;
                            return a
                        },
                        wa: function(a) {
                            var b = this.Sb,
                                d, e;
                            e = b[this.Y++];
                            d = e & 127;
                            if (128 > e) return d;
                            e = b[this.Y++];
                            d |= (e & 127) << 7;
                            if (128 > e) return d;
                            e = b[this.Y++];
                            d |= (e & 127) << 14;
                            if (128 > e) return d;
                            e = b[this.Y++];
                            d |= (e & 127) << 21;
                            if (128 > e) return d;
                            e = b[this.Y];
                            return g(d | (e & 15) << 28, a, this)
                        },
                        co: function() {
                            return this.wa(!0)
                        },
                        Zf: function() {
                            var a = this.wa();
                            return 1 === a % 2 ? (a + 1) / -2 : a / 2
                        },
                        On: function() {
                            return !!this.wa()
                        },
                        $f: function() {
                            for (var a =
                                    this.wa() + this.Y, b = this.Sb, d = "", e = this.Y; e < a;) {
                                var f = b[e],
                                    g = null,
                                    h = 239 < f ? 4 : 223 < f ? 3 : 191 < f ? 2 : 1;
                                if (e + h > a) break;
                                var k, H, F;
                                if (1 === h) 128 > f && (g = f);
                                else if (2 === h) k = b[e + 1], 128 === (k & 192) && (g = (f & 31) << 6 | k & 63, 127 >= g && (g = null));
                                else if (3 === h) {
                                    if (k = b[e + 1], H = b[e + 2], 128 === (k & 192) && 128 === (H & 192) && (g = (f & 15) << 12 | (k & 63) << 6 | H & 63, 2047 >= g || 55296 <= g && 57343 >= g)) g = null
                                } else 4 === h && (k = b[e + 1], H = b[e + 2], F = b[e + 3], 128 === (k & 192) && 128 === (H & 192) && 128 === (F & 192) && (g = (f & 15) << 18 | (k & 63) << 12 | (H & 63) << 6 | F & 63, 65535 >= g || 1114112 <= g)) && (g = null);
                                null === g ? (g = 65533, h = 1) : 65535 < g && (g -= 65536, d += String.fromCharCode(g >>> 10 & 1023 | 55296), g = 56320 | g & 1023);
                                d += String.fromCharCode(g);
                                e += h
                            }
                            this.Y = a;
                            return d
                        },
                        Eo: function(a) {
                            a &= 7;
                            if (a === f.j)
                                for (; 127 < this.Sb[this.Y++];);
                            else if (a === f.b) this.Y = this.wa() + this.Y;
                            else if (a === f.c) this.Y += 4;
                            else if (a === f.f) this.Y += 8;
                            else throw Error("Unimplemented type: " + a);
                        }
                    }
                }, {
                    ieee754: 2
                }],
                2: [function(a, b, f) {
                    f.read = function(a, b, d, e, f) {
                        var q;
                        q = 8 * f - e - 1;
                        var p = (1 << q) - 1,
                            r = p >> 1,
                            u = -7;
                        f = d ? f - 1 : 0;
                        var z = d ? -1 : 1,
                            w = a[b + f];
                        f += z;
                        d = w & (1 << -u) - 1;
                        w >>= -u;
                        for (u += q; 0 < u; d = 256 * d + a[b + f], f += z, u -= 8);
                        q = d & (1 << -u) - 1;
                        d >>= -u;
                        for (u += e; 0 < u; q = 256 * q + a[b + f], f += z, u -= 8);
                        if (0 === d) d = 1 - r;
                        else {
                            if (d === p) return q ? NaN : Infinity * (w ? -1 : 1);
                            q += Math.pow(2, e);
                            d -= r
                        }
                        return (w ? -1 : 1) * q * Math.pow(2, d - e)
                    };
                    f.write = function(a, b, d, e, f, q) {
                        var p, r = 8 * q - f - 1,
                            u = (1 << r) - 1,
                            z = u >> 1,
                            w = 23 === f ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                        q = e ? 0 : q - 1;
                        var H = e ? 1 : -1,
                            F = 0 > b || 0 === b && 0 > 1 / b ? 1 : 0;
                        b = Math.abs(b);
                        isNaN(b) || Infinity === b ? (b = isNaN(b) ? 1 : 0, e = u) : (e = Math.floor(Math.log(b) / Math.LN2), 1 > b * (p = Math.pow(2, -e)) && (e--, p *=
                            2), b = 1 <= e + z ? b + w / p : b + w * Math.pow(2, 1 - z), 2 <= b * p && (e++, p /= 2), e + z >= u ? (b = 0, e = u) : 1 <= e + z ? (b = (b * p - 1) * Math.pow(2, f), e += z) : (b = b * Math.pow(2, z - 1) * Math.pow(2, f), e = 0));
                        for (; 8 <= f; a[d + q] = b & 255, q += H, b /= 256, f -= 8);
                        e = e << f | b;
                        for (r += f; 0 < r; a[d + q] = e & 255, q += H, e /= 256, r -= 8);
                        a[d + q - H] |= 128 * F
                    }
                }, {}]
            }, {}, [1])(1)
        })
    })();
    (function() {
        var a = {},
            b = {
                ea: a
            };
        (function(c) {
            if ("object" === typeof a && "undefined" !== typeof b) b.ea = c();
            else {
                var d;
                "undefined" !== typeof window ? d = window : "undefined" !== typeof global ? d = global : "undefined" !== typeof self ? d = self : d = this;
                d.mq = c()
            }
        })(function() {
            return function d(a, b, g) {
                function h(l, q) {
                    if (!b[l]) {
                        if (!a[l]) {
                            var p = "function" == typeof require && require;
                            if (!q && p) return p(l, !0);
                            if (k) return k(l, !0);
                            p = Error("Cannot find module '" + l + "'");
                            throw p.code = "MODULE_NOT_FOUND", p;
                        }
                        p = b[l] = {
                            ea: {}
                        };
                        a[l][0].call(p.ea, function(b) {
                            var d =
                                a[l][1][b];
                            return h(d ? d : b)
                        }, p, p.ea, d, a, b, g)
                    }
                    return b[l].ea
                }
                for (var k = "function" == typeof require && require, l = 0; l < g.length; l++) h(g[l]);
                return h
            }({
                1: [function(a, b) {
                    b.ea.Ip = a("./lib/vectortile.js");
                    b.ea.Jp = a("./lib/vectortilefeature.js");
                    b.ea.Kp = a("./lib/vectortilelayer.js")
                }, {
                    "./lib/vectortile.js": 2,
                    "./lib/vectortilefeature.js": 3,
                    "./lib/vectortilelayer.js": 4
                }],
                2: [function(a, b) {
                    function f(a, b, d) {
                        3 === a && (a = new g(d, d.wa() + d.Y), a.length && (b[a.name] = a))
                    }
                    var g = a("./vectortilelayer");
                    b.ea = function(a, b) {
                        this.layers =
                            a.Vf(f, {}, b)
                    }
                }, {
                    "./vectortilelayer": 4
                }],
                3: [function(a, b) {
                    function f(a, b, d, e, f) {
                        this.properties = {};
                        this.extent = d;
                        this.type = 0;
                        this.xc = a;
                        this.yg = -1;
                        this.Cd = e;
                        this.Ed = f;
                        a.Vf(g, this, b)
                    }

                    function g(a, b, d) {
                        if (1 == a) b.id = d.wa();
                        else if (2 == a)
                            for (a = d.wa() + d.Y; d.Y < a;) {
                                var e = b.Cd[d.wa()],
                                    f = b.Ed[d.wa()];
                                b.properties[e] = f
                            } else 3 == a ? b.type = d.wa() : 4 == a && (b.yg = d.Y)
                    }
                    a("point-geometry");
                    b.ea = f;
                    f.types = ["Unknown", "Point", "LineString", "Polygon"];
                    f.prototype.bbox = function() {
                        var a = this.xc;
                        a.Y = this.yg;
                        for (var b = a.wa() + a.Y,
                                d = 1, e = 0, f = 0, g = 0, r = Infinity, u = -Infinity, z = Infinity, w = -Infinity; a.Y < b;)
                            if (e || (e = a.wa(), d = e & 7, e >>= 3), e--, 1 === d || 2 === d) f += a.Zf(), g += a.Zf(), f < r && (r = f), f > u && (u = f), g < z && (z = g), g > w && (w = g);
                            else if (7 !== d) throw Error("unknown command " + d);
                        return [r, z, u, w]
                    }
                }, {
                    "point-geometry": 5
                }],
                4: [function(a, b) {
                        function f(a, b) {
                            this.version = 1;
                            this.name = null;
                            this.extent = 4096;
                            this.length = 0;
                            this.xc = a;
                            this.Cd = [];
                            this.Ed = [];
                            this.Bd = [];
                            a.Vf(g, this, b);
                            this.length = this.Bd.length
                        }

                        function g(a, b, d) {
                            15 === a ? b.version = d.wa() : 1 === a ? b.name =
                                d.$f() : 5 === a ? b.extent = d.wa() : 2 === a ? b.Bd.push(d.Y) : 3 === a ? b.Cd.push(d.$f()) : 4 === a && b.Ed.push(h(d))
                        }

                        function h(a) {
                            for (var b = null, d = a.wa() + a.Y; a.Y < d;) b = a.wa() >> 3, b = 1 === b ? a.$f() : 2 === b ? a.Un() : 3 === b ? a.Qn() : 4 === b ? a.co() : 5 === b ? a.wa() : 6 === b ? a.Zf() : 7 === b ? a.On() : null;
                            return b
                        }
                        var k = a("./vectortilefeature.js");
                        b.ea = f;
                        f.prototype.feature = function(a) {
                            if (0 > a || a >= this.Bd.length) throw Error("feature index out of bounds");
                            this.xc.Y = this.Bd[a];
                            a = this.xc.wa() + this.xc.Y;
                            return new k(this.xc, a, this.extent, this.Cd, this.Ed)
                        }
                    },
                    {
                        "./vectortilefeature.js": 3
                    }
                ],
                5: [function(a, b) {
                    function f(a, b) {
                        this.x = a;
                        this.y = b
                    }
                    b.ea = f;
                    f.prototype = {
                        clone: function() {
                            return new f(this.x, this.y)
                        },
                        add: function(a) {
                            return this.clone().fj(a)
                        },
                        rotate: function(a) {
                            return this.clone().qj(a)
                        },
                        unit: function() {
                            return this.clone().tj()
                        },
                        round: function() {
                            return this.clone().rj()
                        },
                        em: function() {
                            return Math.sqrt(this.x * this.x + this.y * this.y)
                        },
                        equals: function(a) {
                            return this.x === a.x && this.y === a.y
                        },
                        dist: function(a) {
                            return Math.sqrt(this.ik(a))
                        },
                        ik: function(a) {
                            var b =
                                a.x - this.x;
                            a = a.y - this.y;
                            return b * b + a * a
                        },
                        angle: function() {
                            return Math.atan2(this.y, this.x)
                        },
                        fj: function(a) {
                            this.x += a.x;
                            this.y += a.y;
                            return this
                        },
                        nj: function(a) {
                            this.x /= a;
                            this.y /= a;
                            return this
                        },
                        tj: function() {
                            this.nj(this.em());
                            return this
                        },
                        qj: function(a) {
                            var b = Math.cos(a);
                            a = Math.sin(a);
                            var d = a * this.x + b * this.y;
                            this.x = b * this.x - a * this.y;
                            this.y = d;
                            return this
                        },
                        rj: function() {
                            this.x = Math.round(this.x);
                            this.y = Math.round(this.y);
                            return this
                        }
                    };
                    f.b = function(a) {
                        return a instanceof f ? a : Array.isArray(a) ? new f(a[0],
                            a[1]) : a
                    }
                }, {}]
            }, {}, [1])(1)
        })
    })();

    function jp(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("tag" == a.localName, "localName should be tag");
        b[b.length - 1].pd[a.getAttribute("k")] = a.getAttribute("v")
    }
    var kp = [null],
        lp = L(kp, {
            nd: function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("nd" == a.localName, "localName should be nd");
                b[b.length - 1].Ic.push(a.getAttribute("ref"))
            },
            tag: jp
        });
    L(kp, {
        node: function(a, b) {
            console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
            console.assert("node" == a.localName, "localName should be node");
            var c = b[0],
                d = b[b.length - 1],
                e = a.getAttribute("id"),
                f = [parseFloat(a.getAttribute("lon")), parseFloat(a.getAttribute("lat"))];
            d.nodes[e] = f;
            var g = Q({
                pd: {}
            }, mp, a, b);
            Ha(g.pd) || (f = new Qc(f), hl(f, !1, c), c = new Fk(f), Jk(c, e), c.Ga(g.pd), d.features.push(c))
        },
        way: function(a, b) {
            console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
            console.assert("way" == a.localName, "localName should be way");
            for (var c = b[0], d = a.getAttribute("id"), e = Q({
                    Ic: [],
                    pd: {}
                }, lp, a, b), f = b[b.length - 1], g = [], h = 0, k = e.Ic.length; h < k; h++) eb(g, f.nodes[e.Ic[h]]);
            e.Ic[0] == e.Ic[e.Ic.length - 1] ? (h = new bd(null), h.U("XY", g, [g.length])) : (h = new rl(null), h.U("XY", g));
            hl(h, !1, c);
            c = new Fk(h);
            Jk(c, d);
            c.Ga(e.pd);
            f.features.push(c)
        }
    });
    var mp = L(kp, {
        tag: jp
    });

    function np(a) {
        return a.getAttributeNS("http://www.w3.org/1999/xlink", "href")
    };

    function op() {}
    op.prototype.read = function(a) {
        return Ok(a) ? this.c(a) : Pk(a) ? this.b(a) : "string" === typeof a ? (a = Qk(a), this.c(a)) : null
    };

    function pp() {}
    v(pp, op);
    pp.prototype.c = function(a) {
        console.assert(a.nodeType == Node.DOCUMENT_NODE, "doc.nodeType should be DOCUMENT");
        for (a = a.firstChild; a; a = a.nextSibling)
            if (a.nodeType == Node.ELEMENT_NODE) return this.b(a);
        return null
    };
    pp.prototype.b = function(a) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        return (a = Q({}, qp, a, [])) ? a : null
    };
    var rp = [null, "http://www.opengis.net/ows/1.1"],
        qp = L(rp, {
            ServiceIdentification: E(function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("ServiceIdentification" == a.localName, "localName should be ServiceIdentification");
                return Q({}, sp, a, b)
            }),
            ServiceProvider: E(function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("ServiceProvider" == a.localName, "localName should be ServiceProvider");
                return Q({},
                    tp, a, b)
            }),
            OperationsMetadata: E(function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("OperationsMetadata" == a.localName, "localName should be OperationsMetadata");
                return Q({}, up, a, b)
            })
        }),
        vp = L(rp, {
            DeliveryPoint: E(R),
            City: E(R),
            AdministrativeArea: E(R),
            PostalCode: E(R),
            Country: E(R),
            ElectronicMailAddress: E(R)
        }),
        wp = L(rp, {
            Value: Uk(function(a) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("Value" == a.localName,
                    "localName should be Value");
                return R(a)
            })
        }),
        xp = L(rp, {
            AllowedValues: E(function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("AllowedValues" == a.localName, "localName should be AllowedValues");
                return Q({}, wp, a, b)
            })
        }),
        zp = L(rp, {
            Phone: E(function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("Phone" == a.localName, "localName should be Phone");
                return Q({}, yp, a, b)
            }),
            Address: E(function(a, b) {
                console.assert(a.nodeType ==
                    Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("Address" == a.localName, "localName should be Address");
                return Q({}, vp, a, b)
            })
        }),
        Bp = L(rp, {
            HTTP: E(function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("HTTP" == a.localName, "localName should be HTTP");
                return Q({}, Ap, a, b)
            })
        }),
        Ap = L(rp, {
            Get: Uk(function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("Get" == a.localName, "localName should be Get");
                var c = np(a);
                return c ? Q({
                    href: c
                }, Cp, a, b) : void 0
            }),
            Post: void 0
        }),
        Dp = L(rp, {
            DCP: E(function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("DCP" == a.localName, "localName should be DCP");
                return Q({}, Bp, a, b)
            })
        }),
        up = L(rp, {
            Operation: function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("Operation" == a.localName, "localName should be Operation");
                var c = a.getAttribute("name"),
                    d = Q({}, Dp, a, b);
                d && (b[b.length -
                    1][c] = d)
            }
        }),
        yp = L(rp, {
            Voice: E(R),
            Facsimile: E(R)
        }),
        Cp = L(rp, {
            Constraint: Uk(function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("Constraint" == a.localName, "localName should be Constraint");
                var c = a.getAttribute("name");
                return c ? Q({
                    name: c
                }, xp, a, b) : void 0
            })
        }),
        Ep = L(rp, {
            IndividualName: E(R),
            PositionName: E(R),
            ContactInfo: E(function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("ContactInfo" == a.localName,
                    "localName should be ContactInfo");
                return Q({}, zp, a, b)
            })
        }),
        sp = L(rp, {
            Title: E(R),
            ServiceTypeVersion: E(R),
            ServiceType: E(R)
        }),
        tp = L(rp, {
            ProviderName: E(R),
            ProviderSite: E(np),
            ServiceContact: E(function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("ServiceContact" == a.localName, "localName should be ServiceContact");
                return Q({}, Ep, a, b)
            })
        });

    function Fp(a) {
        a = a ? a : {};
        this.g = a.featureType;
        this.c = a.featureNS;
        this.b = a.Uk ? a.Uk : new S;
        this.F = a.Lb ? a.Lb : "http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.1.0/wfs.xsd";
        Ul.call(this)
    }
    v(Fp, Ul);
    Fp.prototype.pc = function(a, b) {
        var c = {
            featureType: this.g,
            featureNS: this.c
        };
        Ea(c, fl(this, a, b ? b : {}));
        c = [c];
        this.b.b["http://www.opengis.net/gml"].featureMember = Sk(Xl.prototype.ld);
        (c = Q([], this.b.b, a, c, this.b)) || (c = []);
        return c
    };

    function Gp(a, b) {
        console.assert(b.nodeType == Node.DOCUMENT_NODE, "doc.nodeType should be DOCUMENT");
        for (var c = b.firstChild; c; c = c.nextSibling)
            if (c.nodeType == Node.ELEMENT_NODE) return Hp(a, c)
    }
    var Ip = {
        "http://www.opengis.net/gml": {
            boundedBy: E(Xl.prototype.pe, "bounds")
        }
    };

    function Hp(a, b) {
        console.assert(b.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("FeatureCollection" == b.localName, "localName should be FeatureCollection");
        var c = {},
            d = em(b.getAttribute("numberOfFeatures"));
        c.numberOfFeatures = d;
        return Q(c, Ip, b, [], a.b)
    }
    var Jp = {
            "http://www.opengis.net/wfs": {
                totalInserted: E(dm),
                totalUpdated: E(dm),
                totalDeleted: E(dm)
            }
        },
        Kp = {
            "http://www.opengis.net/ogc": {
                FeatureId: Sk(function(a) {
                    return a.getAttribute("fid")
                })
            }
        },
        Lp = {
            "http://www.opengis.net/wfs": {
                Feature: function(a, b) {
                    $k(Kp, a, b)
                }
            }
        };
    E(function(a, b) {
        return Q({}, Jp, a, b)
    }, "transactionSummary");
    E(function(a, b) {
        return Q([], Lp, a, b)
    }, "insertIds");
    var Mp = {
        "http://www.opengis.net/wfs": {
            PropertyName: G(gm)
        }
    };

    function Np(a, b, c) {
        a = {
            node: a
        };
        var d = b.b;
        al(a, Op, Wk(d.ac), [d], c);
        b = b.c;
        al(a, Op, Wk(b.ac), [b], c)
    }

    function Pp(a, b) {
        void 0 !== b.c && a.setAttribute("matchCase", b.c.toString());
        Qp(a, b.b);
        Rp(a, "" + b.f)
    }

    function Sp(a, b, c) {
        a = Lk("http://www.opengis.net/ogc", a);
        gm(a, c);
        b.appendChild(a)
    }

    function Qp(a, b) {
        Sp("PropertyName", a, b)
    }

    function Rp(a, b) {
        Sp("Literal", a, b)
    }
    var Op = {
        "http://www.opengis.net/wfs": {
            Query: G(function(a, b, c) {
                var d = c[c.length - 1],
                    e = d.featurePrefix,
                    f = d.featureNS,
                    g = d.propertyNames,
                    h = d.srsName;
                a.setAttribute("typeName", (e ? e + ":" : "") + b);
                h && a.setAttribute("srsName", h);
                f && a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:" + e, f);
                b = Ea({}, d);
                b.node = a;
                al(b, Mp, Wk("PropertyName"), g, c);
                if (d = d.filter) g = Lk("http://www.opengis.net/ogc", "Filter"), a.appendChild(g), al({
                    node: g
                }, Op, Wk(d.ac), [d], c)
            })
        },
        "http://www.opengis.net/ogc": {
            And: G(Np),
            Or: G(Np),
            Not: G(function(a,
                b, c) {
                b = b.ta;
                al({
                    node: a
                }, Op, Wk(b.ac), [b], c)
            }),
            BBOX: G(function(a, b, c) {
                c[c.length - 1].srsName = b.xa;
                Qp(a, b.geometryName);
                S.prototype.vd(a, b.extent, c)
            }),
            Intersects: G(function(a, b, c) {
                c[c.length - 1].srsName = b.xa;
                Qp(a, b.geometryName);
                S.prototype.vd(a, b.geometry, c)
            }),
            Within: G(function(a, b, c) {
                c[c.length - 1].srsName = b.xa;
                Qp(a, b.geometryName);
                S.prototype.vd(a, b.geometry, c)
            }),
            PropertyIsEqualTo: G(Pp),
            PropertyIsNotEqualTo: G(Pp),
            PropertyIsLessThan: G(Pp),
            PropertyIsLessThanOrEqualTo: G(Pp),
            PropertyIsGreaterThan: G(Pp),
            PropertyIsGreaterThanOrEqualTo: G(Pp),
            PropertyIsNull: G(function(a, b) {
                Qp(a, b.b)
            }),
            PropertyIsBetween: G(function(a, b) {
                Qp(a, b.b);
                var c = Lk("http://www.opengis.net/ogc", "LowerBoundary");
                a.appendChild(c);
                Rp(c, "" + b.c);
                c = Lk("http://www.opengis.net/ogc", "UpperBoundary");
                a.appendChild(c);
                Rp(c, "" + b.f)
            }),
            PropertyIsLike: G(function(a, b) {
                a.setAttribute("wildCard", b.o);
                a.setAttribute("singleChar", b.g);
                a.setAttribute("escapeChar", b.f);
                void 0 !== b.c && a.setAttribute("matchCase", b.c.toString());
                Qp(a, b.b);
                Rp(a, "" + b.j)
            })
        }
    };

    function Tp(a, b) {
        var c = Lk("http://www.opengis.net/wfs", "GetFeature");
        c.setAttribute("service", "WFS");
        c.setAttribute("version", "1.1.0");
        var d;
        if (b && (b.handle && c.setAttribute("handle", b.handle), b.Qf && c.setAttribute("outputFormat", b.Qf), void 0 !== b.maxFeatures && c.setAttribute("maxFeatures", b.maxFeatures), b.resultType && c.setAttribute("resultType", b.resultType), void 0 !== b.Io && c.setAttribute("startIndex", b.Io), void 0 !== b.count && c.setAttribute("count", b.count), d = b.filter, b.bbox)) {
            wa(b.geometryName, 12);
            var e =
                new Gl(b.geometryName, b.bbox, b.xa);
            d ? d = Ll(d, e) : d = e
        }
        c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", a.F);
        e = {
            node: c,
            srsName: b.xa,
            featureNS: b.featureNS ? b.featureNS : a.c,
            featurePrefix: b.featurePrefix,
            geometryName: b.geometryName,
            filter: d,
            propertyNames: b.Kn ? b.Kn : []
        };
        wa(Array.isArray(b.gf), 11);
        d = b.gf;
        var e = [e],
            f = Ea({}, e[e.length - 1]);
        f.node = c;
        al(f, Op, Wk("Query"), d, e);
        return c
    }
    Fp.prototype.Yf = function(a) {
        console.assert(a.nodeType == Node.DOCUMENT_NODE, "doc.nodeType should be a DOCUMENT");
        for (a = a.firstChild; a; a = a.nextSibling)
            if (a.nodeType == Node.ELEMENT_NODE) return this.te(a);
        return null
    };
    Fp.prototype.te = function(a) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("FeatureCollection" == a.localName, "localName should be FeatureCollection");
        if (a.firstElementChild && a.firstElementChild.firstElementChild)
            for (a = a.firstElementChild.firstElementChild, a = a.firstElementChild; a; a = a.nextElementSibling)
                if (0 !== a.childNodes.length && (1 !== a.childNodes.length || 3 !== a.firstChild.nodeType)) {
                    var b = [{}];
                    this.b.pe(a, b);
                    return jc(b.pop().xa)
                }
        return null
    };

    function Up(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        return Q({}, Vp, a, b)
    }

    function Wp(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        return Q({}, Xp, a, b)
    }

    function Yp(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        var c = Up(a, b);
        if (c) {
            var d = [em(a.getAttribute("width")), em(a.getAttribute("height"))];
            c.size = d;
            return c
        }
    }

    function Zp(a, b) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("KeywordList" == a.localName, "localName should be KeywordList");
        return Q([], $p, a, b)
    }
    var aq = [null, "http://www.opengis.net/wms"];
    L(aq, {
        Service: E(function(a, b) {
            console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
            console.assert("Service" == a.localName, "localName should be Service");
            return Q({}, cq, a, b)
        }),
        Capability: E(function(a, b) {
            console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
            console.assert("Capability" == a.localName, "localName should be Capability");
            return Q({}, dq, a, b)
        })
    });
    var dq = L(aq, {
            Request: E(function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("Request" == a.localName, "localName should be Request");
                return Q({}, eq, a, b)
            }),
            Exception: E(function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("Exception" == a.localName, "localName should be Exception");
                return Q([], fq, a, b)
            }),
            Layer: E(function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("Layer" == a.localName, "localName should be Layer");
                return Q({}, gq, a, b)
            })
        }),
        cq = L(aq, {
            Name: E(R),
            Title: E(R),
            Abstract: E(R),
            KeywordList: E(Zp),
            OnlineResource: E(np),
            ContactInformation: E(function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType shpuld be ELEMENT");
                console.assert("ContactInformation" == a.localName, "localName should be ContactInformation");
                return Q({}, hq, a, b)
            }),
            Fees: E(R),
            AccessConstraints: E(R),
            LayerLimit: E(dm),
            MaxWidth: E(dm),
            MaxHeight: E(dm)
        }),
        hq = L(aq, {
            ContactPersonPrimary: E(function(a,
                b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("ContactPersonPrimary" == a.localName, "localName should be ContactPersonPrimary");
                return Q({}, iq, a, b)
            }),
            ContactPosition: E(R),
            ContactAddress: E(function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("ContactAddress" == a.localName, "localName should be ContactAddress");
                return Q({}, jq, a, b)
            }),
            ContactVoiceTelephone: E(R),
            ContactFacsimileTelephone: E(R),
            ContactElectronicMailAddress: E(R)
        }),
        iq = L(aq, {
            ContactPerson: E(R),
            ContactOrganization: E(R)
        }),
        jq = L(aq, {
            AddressType: E(R),
            Address: E(R),
            City: E(R),
            StateOrProvince: E(R),
            PostCode: E(R),
            Country: E(R)
        }),
        fq = L(aq, {
            Format: Sk(R)
        }),
        gq = L(aq, {
            Name: E(R),
            Title: E(R),
            Abstract: E(R),
            KeywordList: E(Zp),
            CRS: Uk(R),
            EX_GeographicBoundingBox: E(function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("EX_GeographicBoundingBox" == a.localName, "localName should be EX_GeographicBoundingBox");
                var c = Q({}, kq, a, b);
                if (c) {
                    var d =
                        c.westBoundLongitude,
                        e = c.southBoundLatitude,
                        f = c.eastBoundLongitude,
                        c = c.northBoundLatitude;
                    return void 0 === d || void 0 === e || void 0 === f || void 0 === c ? void 0 : [d, e, f, c]
                }
            }),
            BoundingBox: Uk(function(a) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("BoundingBox" == a.localName, "localName should be BoundingBox");
                var b = [cm(a.getAttribute("minx")), cm(a.getAttribute("miny")), cm(a.getAttribute("maxx")), cm(a.getAttribute("maxy"))],
                    c = [cm(a.getAttribute("resx")), cm(a.getAttribute("resy"))];
                return {
                    crs: a.getAttribute("CRS"),
                    extent: b,
                    res: c
                }
            }),
            Dimension: Uk(function(a) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("Dimension" == a.localName, "localName should be Dimension");
                return {
                    name: a.getAttribute("name"),
                    units: a.getAttribute("units"),
                    unitSymbol: a.getAttribute("unitSymbol"),
                    "default": a.getAttribute("default"),
                    multipleValues: $l(a.getAttribute("multipleValues")),
                    nearestValue: $l(a.getAttribute("nearestValue")),
                    current: $l(a.getAttribute("current")),
                    values: R(a)
                }
            }),
            Attribution: E(function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("Attribution" == a.localName, "localName should be Attribution");
                return Q({}, lq, a, b)
            }),
            AuthorityURL: Uk(function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("AuthorityURL" == a.localName, "localName should be AuthorityURL");
                var c = Up(a, b);
                if (c) return c.name = a.getAttribute("name"), c
            }),
            Identifier: Uk(R),
            MetadataURL: Uk(function(a,
                b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("MetadataURL" == a.localName, "localName should be MetadataURL");
                var c = Up(a, b);
                if (c) return c.type = a.getAttribute("type"), c
            }),
            DataURL: Uk(Up),
            FeatureListURL: Uk(Up),
            Style: Uk(function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("Style" == a.localName, "localName should be Style");
                return Q({}, mq, a, b)
            }),
            MinScaleDenominator: E(bm),
            MaxScaleDenominator: E(bm),
            Layer: Uk(function(a,
                b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("Layer" == a.localName, "localName should be Layer");
                var c = b[b.length - 1],
                    d = Q({}, gq, a, b);
                if (d) {
                    var e = $l(a.getAttribute("queryable"));
                    void 0 === e && (e = c.queryable);
                    d.queryable = void 0 !== e ? e : !1;
                    e = em(a.getAttribute("cascaded"));
                    void 0 === e && (e = c.cascaded);
                    d.cascaded = e;
                    e = $l(a.getAttribute("opaque"));
                    void 0 === e && (e = c.opaque);
                    d.opaque = void 0 !== e ? e : !1;
                    e = $l(a.getAttribute("noSubsets"));
                    void 0 === e && (e = c.noSubsets);
                    d.noSubsets =
                        void 0 !== e ? e : !1;
                    (e = cm(a.getAttribute("fixedWidth"))) || (e = c.fixedWidth);
                    d.fixedWidth = e;
                    (e = cm(a.getAttribute("fixedHeight"))) || (e = c.fixedHeight);
                    d.fixedHeight = e;
                    ["Style", "CRS", "AuthorityURL"].forEach(function(a) {
                        a in c && (d[a] = (d[a] || []).concat(c[a]))
                    });
                    "EX_GeographicBoundingBox BoundingBox Dimension Attribution MinScaleDenominator MaxScaleDenominator".split(" ").forEach(function(a) {
                        a in d || (d[a] = c[a])
                    });
                    return d
                }
            })
        }),
        lq = L(aq, {
            Title: E(R),
            OnlineResource: E(np),
            LogoURL: E(Yp)
        }),
        kq = L(aq, {
            westBoundLongitude: E(bm),
            eastBoundLongitude: E(bm),
            southBoundLatitude: E(bm),
            northBoundLatitude: E(bm)
        }),
        eq = L(aq, {
            GetCapabilities: E(Wp),
            GetMap: E(Wp),
            GetFeatureInfo: E(Wp)
        }),
        Xp = L(aq, {
            Format: Uk(R),
            DCPType: Uk(function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("DCPType" == a.localName, "localName should be DCPType");
                return Q({}, nq, a, b)
            })
        }),
        nq = L(aq, {
            HTTP: E(function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("HTTP" == a.localName,
                    "localName should be HTTP");
                return Q({}, oq, a, b)
            })
        }),
        oq = L(aq, {
            Get: E(Up),
            Post: E(Up)
        }),
        mq = L(aq, {
            Name: E(R),
            Title: E(R),
            Abstract: E(R),
            LegendURL: Uk(Yp),
            StyleSheetURL: E(Up),
            StyleURL: E(Up)
        }),
        Vp = L(aq, {
            Format: E(R),
            OnlineResource: E(np)
        }),
        $p = L(aq, {
            Keyword: Sk(R)
        });

    function pq(a) {
        a = a ? a : {};
        this.c = "http://mapserver.gis.umn.edu/mapserver";
        this.b = new rm;
        this.g = a.layers ? a.layers : null;
        Ul.call(this)
    }
    v(pq, Ul);
    pq.prototype.pc = function(a, b) {
        var c = {};
        b && Ea(c, fl(this, a, b));
        var d = [c];
        a.setAttribute("namespaceURI", this.c);
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        var e = a.localName,
            c = [];
        if (0 !== a.childNodes.length) {
            if ("msGMLOutput" == e)
                for (var f = 0, g = a.childNodes.length; f < g; f++) {
                    var h = a.childNodes[f];
                    if (h.nodeType === Node.ELEMENT_NODE) {
                        var k = d[0];
                        console.assert(0 <= h.localName.indexOf("_layer"), "localName of layer node should match layerIdentifier");
                        var l = h.localName.replace("_layer",
                            "");
                        if (!this.g || cb(this.g, l)) {
                            l += "_feature";
                            k.featureType = l;
                            k.featureNS = this.c;
                            var n = {};
                            n[l] = Sk(this.b.Uf, this.b);
                            k = L([k.featureNS, null], n);
                            h.setAttribute("namespaceURI", this.c);
                            (h = Q([], k, h, d, this.b)) && eb(c, h)
                        }
                    }
                }
            "FeatureCollection" == e && (d = Q([], this.b.b, a, [{}], this.b)) && (c = d)
        }
        return c
    };

    function qq() {
        this.f = new pp
    }
    v(qq, op);
    qq.prototype.c = function(a) {
        console.assert(a.nodeType == Node.DOCUMENT_NODE, "doc.nodeType should be DOCUMENT");
        for (a = a.firstChild; a; a = a.nextSibling)
            if (a.nodeType == Node.ELEMENT_NODE) return this.b(a);
        return null
    };
    qq.prototype.b = function(a) {
        console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
        console.assert("Capabilities" == a.localName, "localName should be Capabilities");
        var b = a.getAttribute("version").trim(),
            c = this.f.b(a);
        if (!c) return null;
        c.version = b;
        return (c = Q(c, rq, a, [])) ? c : null
    };

    function sq(a) {
        var b = R(a).split(" ");
        if (b && 2 == b.length) return a = +b[0], b = +b[1], isNaN(a) || isNaN(b) ? void 0 : [a, b]
    }
    var tq = [null, "http://www.opengis.net/wmts/1.0"],
        uq = [null, "http://www.opengis.net/ows/1.1"],
        rq = L(tq, {
            Contents: E(function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("Contents" == a.localName, "localName should be Contents");
                return Q({}, vq, a, b)
            })
        }),
        vq = L(tq, {
            Layer: Uk(function(a, b) {
                console.assert(a.nodeType == Node.ELEMENT_NODE, "node.nodeType should be ELEMENT");
                console.assert("Layer" == a.localName, "localName should be Layer");
                return Q({}, wq, a, b)
            }),
            TileMatrixSet: Uk(function(a,
                b) {
                return Q({}, xq, a, b)
            })
        }),
        wq = L(tq, {
            Style: Uk(function(a, b) {
                var c = Q({}, yq, a, b);
                if (c) {
                    var d = "true" === a.getAttribute("isDefault");
                    c.isDefault = d;
                    return c
                }
            }),
            Format: Uk(R),
            TileMatrixSetLink: Uk(function(a, b) {
                return Q({}, zq, a, b)
            }),
            Dimension: Uk(function(a, b) {
                return Q({}, Aq, a, b)
            }),
            ResourceURL: Uk(function(a) {
                var b = a.getAttribute("format"),
                    c = a.getAttribute("template");
                a = a.getAttribute("resourceType");
                var d = {};
                b && (d.format = b);
                c && (d.template = c);
                a && (d.resourceType = a);
                return d
            })
        }, L(uq, {
            Title: E(R),
            Abstract: E(R),
            WGS84BoundingBox: E(function(a,
                b) {
                var c = Q([], Bq, a, b);
                return 2 != c.length ? void 0 : Bb(c)
            }),
            Identifier: E(R)
        })),
        yq = L(tq, {
            LegendURL: Uk(function(a) {
                var b = {};
                b.format = a.getAttribute("format");
                b.href = np(a);
                return b
            })
        }, L(uq, {
            Title: E(R),
            Identifier: E(R)
        })),
        zq = L(tq, {
            TileMatrixSet: E(R)
        }),
        Aq = L(tq, {
            Default: E(R),
            Value: Uk(R)
        }, L(uq, {
            Identifier: E(R)
        })),
        Bq = L(uq, {
            LowerCorner: Sk(sq),
            UpperCorner: Sk(sq)
        }),
        xq = L(tq, {
            WellKnownScaleSet: E(R),
            TileMatrix: Uk(function(a, b) {
                return Q({}, Cq, a, b)
            })
        }, L(uq, {
            SupportedCRS: E(R),
            Identifier: E(R)
        })),
        Cq = L(tq, {
            TopLeftCorner: E(sq),
            ScaleDenominator: E(bm),
            TileWidth: E(dm),
            TileHeight: E(dm),
            MatrixWidth: E(dm),
            MatrixHeight: E(dm)
        }, L(uq, {
            Identifier: E(R)
        }));

    function Dq(a) {
        Xa.call(this);
        a = a || {};
        this.c = null;
        this.g = xc;
        this.f = void 0;
        A(this, Za(Eq), this.Nm, this);
        A(this, Za(Fq), this.Om, this);
        void 0 !== a.projection && this.jg(jc(a.projection));
        void 0 !== a.Vo && this.set(Gq, a.Vo);
        this.set(Fq, void 0 !== a.Uo ? a.Uo : !1)
    }
    v(Dq, Xa);
    m = Dq.prototype;
    m.qa = function() {
        this.set(Fq, !1);
        Xa.prototype.qa.call(this)
    };
    m.Nm = function() {
        var a = this.get(Eq);
        a && (this.g = pc(jc("EPSG:4326"), a), this.c && this.set(Hq, this.g(this.c)))
    };
    m.Om = function() {
        if (Te) {
            var a = this.get(Fq);
            a && void 0 === this.f ? this.f = navigator.geolocation.watchPosition(this.Dn.bind(this), this.En.bind(this), this.get(Gq)) : a || void 0 === this.f || (navigator.geolocation.clearWatch(this.f), this.f = void 0)
        }
    };
    m.Dn = function(a) {
        var b = a.coords;
        this.set(Iq, b.accuracy);
        this.set(Jq, null === b.altitude ? void 0 : b.altitude);
        this.set(Kq, null === b.altitudeAccuracy ? void 0 : b.altitudeAccuracy);
        this.set(Lq, null === b.heading ? void 0 : za(b.heading));
        this.c ? (this.c[0] = b.longitude, this.c[1] = b.latitude) : this.c = [b.longitude, b.latitude];
        a = this.g(this.c);
        this.set(Hq, a);
        this.set(Mq, null === b.speed ? void 0 : b.speed);
        a = this.c;
        var c = b.accuracy,
            b = [],
            d;
        for (d = 0; 32 > d; ++d) eb(b, mh.offset(a, c, 2 * Math.PI * d / 32));
        b.push(b[0], b[1]);
        a = new bd(null);
        a.U("XY",
            b, [b.length]);
        a.Qc(this.g);
        this.set(Nq, a);
        this.b()
    };
    m.En = function(a) {
        a.type = "error";
        this.set(Fq, !1);
        B(this, a)
    };
    m.jg = function(a) {
        this.set(Eq, a)
    };
    var Iq = "accuracy",
        Nq = "accuracyGeometry",
        Jq = "altitude",
        Kq = "altitudeAccuracy",
        Lq = "heading",
        Hq = "position",
        Eq = "projection",
        Mq = "speed",
        Fq = "tracking",
        Gq = "trackingOptions";

    function Oq(a, b, c) {
        Cc.call(this);
        Pq(this, a, b ? b : 0, c)
    }
    v(Oq, Cc);
    m = Oq.prototype;
    m.clone = function() {
        var a = new Oq(null),
            b = this.B.slice();
        Fc(a, this.layout, b);
        a.b();
        return a
    };
    m.oc = function(a, b) {
        var c = this.B,
            d = a - c[0],
            c = b - c[1];
        return d * d + c * c <= jd(this)
    };

    function id(a) {
        return a.B.slice(0, a.J)
    }
    m.Pd = function(a) {
        var b = this.B,
            c = b[this.J] - b[0];
        return Jb(b[0] - c, b[1] - c, b[0] + c, b[1] + c, a)
    };

    function jd(a) {
        var b = a.B[a.J] - a.B[0];
        a = a.B[a.J + 1] - a.B[1];
        return b * b + a * a
    }
    m.T = function() {
        return "Circle"
    };
    m.Gb = function(a) {
        var b = this.K();
        return Zb(a, b) ? (b = id(this), a[0] <= b[0] && a[2] >= b[0] || a[1] <= b[1] && a[3] >= b[1] ? !0 : Pb(a, this.N, this)) : !1
    };

    function Pq(a, b, c, d) {
        if (b) {
            Gc(a, d, b, 0);
            a.B || (a.B = []);
            d = a.B;
            b = Hc(d, b, a.J);
            d[b++] = d[0] + c;
            var e;
            c = 1;
            for (e = a.J; c < e; ++c) d[b++] = d[c];
            d.length = b
        } else Fc(a, "XY", null);
        a.b()
    };

    function Qq(a, b, c, d, e) {
        Lf.call(this, a, b);
        this.j = c;
        this.c = new Image;
        null !== d && (this.c.crossOrigin = d);
        this.f = null;
        this.g = e
    }
    v(Qq, Lf);
    m = Qq.prototype;
    m.qa = function() {
        1 == this.state && Rq(this);
        this.b && this.b.Ma();
        this.state = 5;
        Mf(this);
        Lf.prototype.qa.call(this)
    };
    m.je = function() {
        return this.c
    };
    m.nc = function() {
        return this.j
    };
    m.Pm = function() {
        this.state = 3;
        Rq(this);
        Mf(this)
    };
    m.Qm = function() {
        this.state = this.c.naturalWidth && this.c.naturalHeight ? Of : 4;
        Rq(this);
        Mf(this)
    };
    m.load = function() {
        if (0 == this.state || 3 == this.state) this.state = 1, Mf(this), console.assert(!this.f, "this.imageListenerKeys_ should be null"), this.f = [A(this.c, "error", this.Pm, this, !0), A(this.c, "load", this.Qm, this, !0)], this.g(this, this.j)
    };

    function Rq(a) {
        a.f.forEach(Ja);
        a.f = null
    };

    function Sq(a) {
        a = a ? a : {};
        Vf.call(this, {
            handleEvent: ac
        });
        this.g = a.dh ? a.dh : [];
        this.i = a.projection ? jc(a.projection) : null;
        this.f = null;
        this.target = a.target ? a.target : null
    }
    v(Sq, Vf);

    function Tq(a) {
        a = a.dataTransfer.files;
        var b, c, d;
        b = 0;
        for (c = a.length; b < c; ++b) {
            d = a.item(b);
            var e = new FileReader;
            e.addEventListener("load", this.o.bind(this, d));
            e.readAsText(d)
        }
    }

    function Uq(a) {
        a.stopPropagation();
        a.preventDefault();
        a.dataTransfer.dropEffect = "copy"
    }
    Sq.prototype.o = function(a, b) {
        var c = b.target.result,
            d = this.c,
            e = this.i;
        e || (e = D(d).c, console.assert(void 0 !== e, "projection should be defined"));
        var d = this.g,
            f = [],
            g, h;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var k = new d[g];
            var l = {
                Ta: e
            };
            try {
                f = k.readFeatures(c, l)
            } catch (n) {
                f = null
            }
            if (f && 0 < f.length) break
        }
        B(this, new Vq(Wq, a, f, e))
    };
    Sq.prototype.setMap = function(a) {
        this.f && (this.f.forEach(Ja), this.f = null);
        Vf.prototype.setMap.call(this, a);
        a && (a = this.target ? this.target : a.c, this.f = [A(a, "drop", Tq, this), A(a, "dragenter", Uq, this), A(a, "dragover", Uq, this), A(a, "drop", Uq, this)])
    };
    var Wq = "addfeatures";

    function Vq(a, b, c, d) {
        Qa.call(this, a);
        this.features = c;
        this.file = b;
        this.projection = d
    }
    v(Vq, Qa);

    function Xq() {
        return [
            [-Infinity, -Infinity, Infinity, Infinity]
        ]
    };
    (function() {
        var a = {},
            b = {
                ea: a
            };
        (function(c) {
            if ("object" === typeof a && "undefined" !== typeof b) b.ea = c();
            else {
                var d;
                "undefined" !== typeof window ? d = window : "undefined" !== typeof global ? d = global : "undefined" !== typeof self ? d = self : d = this;
                d.cq = c()
            }
        })(function() {
            return function d(a, b, g) {
                function h(l, q) {
                    if (!b[l]) {
                        if (!a[l]) {
                            var p = "function" == typeof require && require;
                            if (!q && p) return p(l, !0);
                            if (k) return k(l, !0);
                            p = Error("Cannot find module '" + l + "'");
                            throw p.code = "MODULE_NOT_FOUND", p;
                        }
                        p = b[l] = {
                            ea: {}
                        };
                        a[l][0].call(p.ea, function(b) {
                            var d =
                                a[l][1][b];
                            return h(d ? d : b)
                        }, p, p.ea, d, a, b, g)
                    }
                    return b[l].ea
                }
                for (var k = "function" == typeof require && require, l = 0; l < g.length; l++) h(g[l]);
                return h
            }({
                1: [function(a, b) {
                    function f(a, b) {
                        if (!(this instanceof f)) return new f(a, b);
                        this.Ne = Math.max(4, a || 9);
                        this.Ag = Math.max(2, Math.ceil(.4 * this.Ne));
                        b && this.oj(b);
                        this.clear()
                    }

                    function g(a, b) {
                        h(a, 0, a.children.length, b, a)
                    }

                    function h(a, b, d, e, f) {
                        f || (f = z(null));
                        f.W = Infinity;
                        f.aa = Infinity;
                        f.Z = -Infinity;
                        f.ca = -Infinity;
                        for (var g; b < d; b++) g = a.children[b], k(f, a.Qa ? e(g) : g);
                        return f
                    }

                    function k(a, b) {
                        a.W = Math.min(a.W, b.W);
                        a.aa = Math.min(a.aa, b.aa);
                        a.Z = Math.max(a.Z, b.Z);
                        a.ca = Math.max(a.ca, b.ca)
                    }

                    function l(a, b) {
                        return a.W - b.W
                    }

                    function n(a, b) {
                        return a.aa - b.aa
                    }

                    function q(a) {
                        return (a.Z - a.W) * (a.ca - a.aa)
                    }

                    function p(a) {
                        return a.Z - a.W + (a.ca - a.aa)
                    }

                    function r(a, b) {
                        return a.W <= b.W && a.aa <= b.aa && b.Z <= a.Z && b.ca <= a.ca
                    }

                    function u(a, b) {
                        return b.W <= a.Z && b.aa <= a.ca && b.Z >= a.W && b.ca >= a.aa
                    }

                    function z(a) {
                        return {
                            children: a,
                            height: 1,
                            Qa: !0,
                            W: Infinity,
                            aa: Infinity,
                            Z: -Infinity,
                            ca: -Infinity
                        }
                    }

                    function w(a,
                        b, d, e, f) {
                        for (var g = [b, d], h; g.length;) d = g.pop(), b = g.pop(), d - b <= e || (h = b + Math.ceil((d - b) / e / 2) * e, H(a, h, b, d, f), g.push(b, h, h, d))
                    }
                    b.ea = f;
                    var H = a("quickselect");
                    f.prototype = {
                        all: function() {
                            return this.vg(this.data, [])
                        },
                        search: function(a) {
                            var b = this.data,
                                d = [],
                                e = this.Ya;
                            if (!u(a, b)) return d;
                            for (var f = [], g, h, k, l; b;) {
                                g = 0;
                                for (h = b.children.length; g < h; g++) k = b.children[g], l = b.Qa ? e(k) : k, u(a, l) && (b.Qa ? d.push(k) : r(a, l) ? this.vg(k, d) : f.push(k));
                                b = f.pop()
                            }
                            return d
                        },
                        load: function(a) {
                            if (!a || !a.length) return this;
                            if (a.length <
                                this.Ag) {
                                for (var b = 0, d = a.length; b < d; b++) this.insert(a[b]);
                                return this
                            }
                            a = this.xg(a.slice(), 0, a.length - 1, 0);
                            this.data.children.length ? this.data.height === a.height ? this.Dg(this.data, a) : (this.data.height < a.height && (b = this.data, this.data = a, a = b), this.zg(a, this.data.height - a.height - 1, !0)) : this.data = a;
                            return this
                        },
                        insert: function(a) {
                            a && this.zg(a, this.data.height - 1);
                            return this
                        },
                        clear: function() {
                            this.data = z([]);
                            return this
                        },
                        remove: function(a, b) {
                            if (!a) return this;
                            for (var d = this.data, e = this.Ya(a), f = [], g = [], h,
                                    k, l, n; d || f.length;) {
                                d || (d = f.pop(), k = f[f.length - 1], h = g.pop(), n = !0);
                                if (d.Qa) {
                                    a: {
                                        l = a;
                                        var q = d.children,
                                            p = b;
                                        if (p) {
                                            for (var u = 0; u < q.length; u++)
                                                if (p(l, q[u])) {
                                                    l = u;
                                                    break a
                                                }
                                            l = -1
                                        } else l = q.indexOf(l)
                                    }
                                    if (-1 !== l) {
                                        d.children.splice(l, 1);
                                        f.push(d);
                                        this.kj(f);
                                        break
                                    }
                                }
                                n || d.Qa || !r(d, e) ? k ? (h++, d = k.children[h], n = !1) : d = null : (f.push(d), g.push(h), h = 0, k = d, d = d.children[0])
                            }
                            return this
                        },
                        Ya: function(a) {
                            return a
                        },
                        Ue: l,
                        Ve: n,
                        toJSON: function() {
                            return this.data
                        },
                        vg: function(a, b) {
                            for (var d = []; a;) a.Qa ? b.push.apply(b, a.children) : d.push.apply(d,
                                a.children), a = d.pop();
                            return b
                        },
                        xg: function(a, b, d, e) {
                            var f = d - b + 1,
                                h = this.Ne,
                                k;
                            if (f <= h) return k = z(a.slice(b, d + 1)), g(k, this.Ya), k;
                            e || (e = Math.ceil(Math.log(f) / Math.log(h)), h = Math.ceil(f / Math.pow(h, e - 1)));
                            k = z([]);
                            k.Qa = !1;
                            k.height = e;
                            var f = Math.ceil(f / h),
                                h = f * Math.ceil(Math.sqrt(h)),
                                l, n, q;
                            for (w(a, b, d, h, this.Ue); b <= d; b += h)
                                for (n = Math.min(b + h - 1, d), w(a, b, n, f, this.Ve), l = b; l <= n; l += f) q = Math.min(l + f - 1, n), k.children.push(this.xg(a, l, q, e - 1));
                            g(k, this.Ya);
                            return k
                        },
                        jj: function(a, b, d, e) {
                            for (var f, g, h, k, l, n, p, r;;) {
                                e.push(b);
                                if (b.Qa || e.length - 1 === d) break;
                                p = r = Infinity;
                                f = 0;
                                for (g = b.children.length; f < g; f++) h = b.children[f], l = q(h), n = (Math.max(h.Z, a.Z) - Math.min(h.W, a.W)) * (Math.max(h.ca, a.ca) - Math.min(h.aa, a.aa)) - l, n < r ? (r = n, p = l < p ? l : p, k = h) : n === r && l < p && (p = l, k = h);
                                b = k || b.children[0]
                            }
                            return b
                        },
                        zg: function(a, b, d) {
                            var e = this.Ya;
                            d = d ? a : e(a);
                            var e = [],
                                f = this.jj(d, this.data, b, e);
                            f.children.push(a);
                            for (k(f, d); 0 <= b;)
                                if (e[b].children.length > this.Ne) this.sj(e, b), b--;
                                else break;
                            this.gj(d, e, b)
                        },
                        sj: function(a, b) {
                            var d = a[b],
                                e = d.children.length,
                                f = this.Ag;
                            this.hj(d, f, e);
                            e = this.ij(d, f, e);
                            e = z(d.children.splice(e, d.children.length - e));
                            e.height = d.height;
                            e.Qa = d.Qa;
                            g(d, this.Ya);
                            g(e, this.Ya);
                            b ? a[b - 1].children.push(e) : this.Dg(d, e)
                        },
                        Dg: function(a, b) {
                            this.data = z([a, b]);
                            this.data.height = a.height + 1;
                            this.data.Qa = !1;
                            g(this.data, this.Ya)
                        },
                        ij: function(a, b, d) {
                            var e, f, g, k, l, n, p;
                            l = n = Infinity;
                            for (e = b; e <= d - b; e++) f = h(a, 0, e, this.Ya), g = h(a, e, d, this.Ya), k = Math.max(0, Math.min(f.Z, g.Z) - Math.max(f.W, g.W)) * Math.max(0, Math.min(f.ca, g.ca) - Math.max(f.aa, g.aa)), f = q(f) + q(g),
                                k < l ? (l = k, p = e, n = f < n ? f : n) : k === l && f < n && (n = f, p = e);
                            return p
                        },
                        hj: function(a, b, d) {
                            var e = a.Qa ? this.Ue : l,
                                f = a.Qa ? this.Ve : n,
                                g = this.wg(a, b, d, e);
                            b = this.wg(a, b, d, f);
                            g < b && a.children.sort(e)
                        },
                        wg: function(a, b, d, e) {
                            a.children.sort(e);
                            e = this.Ya;
                            var f = h(a, 0, b, e),
                                g = h(a, d - b, d, e),
                                l = p(f) + p(g),
                                n, q;
                            for (n = b; n < d - b; n++) q = a.children[n], k(f, a.Qa ? e(q) : q), l += p(f);
                            for (n = d - b - 1; n >= b; n--) q = a.children[n], k(g, a.Qa ? e(q) : q), l += p(g);
                            return l
                        },
                        gj: function(a, b, d) {
                            for (; 0 <= d; d--) k(b[d], a)
                        },
                        kj: function(a) {
                            for (var b = a.length - 1, d; 0 <= b; b--) 0 === a[b].children.length ?
                                0 < b ? (d = a[b - 1].children, d.splice(d.indexOf(a[b]), 1)) : this.clear() : g(a[b], this.Ya)
                        },
                        oj: function(a) {
                            var b = ["return a", " - b", ";"];
                            this.Ue = new Function("a", "b", b.join(a[0]));
                            this.Ve = new Function("a", "b", b.join(a[1]));
                            this.Ya = new Function("a", "return {minX: a" + a[0] + ", minY: a" + a[1] + ", maxX: a" + a[2] + ", maxY: a" + a[3] + "};")
                        }
                    }
                }, {
                    quickselect: 2
                }],
                2: [function(a, b) {
                    function f(a, b, d, e, p) {
                        d = d || 0;
                        e = e || a.length - 1;
                        for (p = p || h; e > d;) {
                            if (600 < e - d) {
                                var r = e - d + 1,
                                    u = b - d + 1,
                                    z = Math.log(r),
                                    w = .5 * Math.exp(2 * z / 3),
                                    z = .5 * Math.sqrt(z *
                                        w * (r - w) / r) * (0 > u - r / 2 ? -1 : 1);
                                f(a, b, Math.max(d, Math.floor(b - u * w / r + z)), Math.min(e, Math.floor(b + (r - u) * w / r + z)), p)
                            }
                            r = a[b];
                            u = d;
                            w = e;
                            g(a, d, b);
                            for (0 < p(a[e], r) && g(a, d, e); u < w;) {
                                g(a, u, w);
                                u++;
                                for (w--; 0 > p(a[u], r);) u++;
                                for (; 0 < p(a[w], r);) w--
                            }
                            0 === p(a[d], r) ? g(a, d, w) : (w++, g(a, w, e));
                            w <= b && (d = w + 1);
                            b <= w && (e = w - 1)
                        }
                    }

                    function g(a, b, d) {
                        var e = a[b];
                        a[b] = a[d];
                        a[d] = e
                    }

                    function h(a, b) {
                        return a < b ? -1 : a > b ? 1 : 0
                    }
                    b.ea = f
                }, {}]
            }, {}, [1])(1)
        });
        ip = b.ea
    })();

    function Yq(a) {
        this.c = ip(a);
        this.Ja = {};
        this.b = 0
    }
    m = Yq.prototype;
    m.insert = function(a, b) {
        if (this.b) throw Error("Can not insert value while reading");
        var c = {
            W: a[0],
            aa: a[1],
            Z: a[2],
            ca: a[3],
            value: b
        };
        this.c.insert(c);
        console.assert(!(x(b) in this.Ja), "uid (%s) of value (%s) already exists", x(b), b);
        this.Ja[x(b)] = c
    };
    m.load = function(a, b) {
        if (this.b) throw Error("Can not insert values while reading");
        console.assert(a.length === b.length, "extens and values must have same length (%s === %s)", a.length, b.length);
        for (var c = Array(b.length), d = 0, e = b.length; d < e; d++) {
            var f = a[d],
                g = b[d],
                f = {
                    W: f[0],
                    aa: f[1],
                    Z: f[2],
                    ca: f[3],
                    value: g
                };
            c[d] = f;
            console.assert(!(x(g) in this.Ja), "uid (%s) of value (%s) already exists", x(g), g);
            this.Ja[x(g)] = f
        }
        this.c.load(c)
    };
    m.remove = function(a) {
        if (this.b) throw Error("Can not remove value while reading");
        var b = x(a);
        console.assert(b in this.Ja, "uid (%s) of value (%s) does not exist", b, a);
        a = this.Ja[b];
        delete this.Ja[b];
        return null !== this.c.remove(a)
    };

    function Zq(a, b, c) {
        console.assert(x(c) in a.Ja, "uid (%s) of value (%s) does not exist", x(c), c);
        var d = a.Ja[x(c)];
        if (!Mb([d.W, d.aa, d.Z, d.ca], b)) {
            if (a.b) throw Error("Can not update extent while reading");
            a.remove(c);
            a.insert(b, c)
        }
    }
    m.getAll = function() {
        return this.c.all().map(function(a) {
            return a.value
        })
    };

    function $q(a, b) {
        return a.c.search({
            W: b[0],
            aa: b[1],
            Z: b[2],
            ca: b[3]
        }).map(function(a) {
            return a.value
        })
    }
    m.forEach = function(a, b) {
        ++this.b;
        try {
            return ar(this.getAll(), a, b)
        } finally {
            --this.b
        }
    };

    function br(a, b, c, d) {
        ++a.b;
        try {
            return ar($q(a, b), c, d)
        } finally {
            --a.b
        }
    }

    function ar(a, b, c) {
        for (var d, e = 0, f = a.length; e < f && !(d = b.call(c, a[e])); e++);
        return d
    }
    m.zb = function() {
        return Ha(this.Ja)
    };
    m.clear = function() {
        this.c.clear();
        this.Ja = {}
    };
    m.K = function() {
        var a = this.c.data;
        return [a.W, a.aa, a.Z, a.ca]
    };

    function cr(a) {
        a = a || {};
        xj.call(this, {
            la: a.la,
            ua: a.ua,
            projection: void 0,
            state: "ready",
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        });
        this.D = ta;
        this.R = a.format;
        this.ja = void 0 == a.Rf ? !0 : a.Rf;
        this.fa = a.url;
        void 0 !== a.bm ? this.D = a.bm : void 0 !== this.fa && (wa(this.R, 7), this.D = cl(this.fa, this.R));
        this.ra = void 0 !== a.Jo ? a.Jo : Xq;
        var b = void 0 !== a.Qb ? a.Qb : !0;
        this.c = b ? new Yq : null;
        this.H = new Yq;
        this.g = {};
        this.o = {};
        this.s = {};
        this.v = {};
        this.i = null;
        var c, d;
        a.features instanceof ie ? (c = a.features, d = c.c) : Array.isArray(a.features) &&
            (d = a.features);
        b || void 0 !== c || (c = new ie(d));
        void 0 !== d && dr(this, d);
        void 0 !== c && er(this, c)
    }
    v(cr, xj);
    m = cr.prototype;
    m.ya = function(a) {
        var b = x(a).toString();
        if (fr(this, b, a)) {
            gr(this, b, a);
            var c = a.G();
            c ? (b = c.K(), this.c && this.c.insert(b, a)) : this.g[b] = a;
            B(this, new hr(ir, a))
        }
        this.b()
    };

    function gr(a, b, c) {
        console.assert(!(b in a.v), "key (%s) not yet registered in featureChangeKey", b);
        a.v[b] = [A(c, "change", a.Oh, a), A(c, "propertychange", a.Oh, a)]
    }

    function fr(a, b, c) {
        var d = !0,
            e = c.Ua();
        void 0 !== e ? e.toString() in a.o ? d = !1 : a.o[e.toString()] = c : (wa(!(b in a.s), 30), a.s[b] = c);
        return d
    }

    function dl(a, b) {
        dr(a, b);
        a.b()
    }

    function dr(a, b) {
        var c, d, e, f, g = [],
            h = [],
            k = [];
        d = 0;
        for (e = b.length; d < e; d++) f = b[d], c = x(f).toString(), fr(a, c, f) && h.push(f);
        d = 0;
        for (e = h.length; d < e; d++) {
            f = h[d];
            c = x(f).toString();
            gr(a, c, f);
            var l = f.G();
            l ? (c = l.K(), g.push(c), k.push(f)) : a.g[c] = f
        }
        a.c && a.c.load(g, k);
        d = 0;
        for (e = h.length; d < e; d++) B(a, new hr(ir, h[d]))
    }

    function er(a, b) {
        console.assert(!a.i, "bindFeaturesCollection can only be called once");
        var c = !1;
        A(a, ir, function(a) {
            c || (c = !0, b.push(a.feature), c = !1)
        });
        A(a, jr, function(a) {
            c || (c = !0, b.remove(a.feature), c = !1)
        });
        A(b, ne, function(a) {
            c || (c = !0, this.ya(a.element), c = !1)
        }, a);
        A(b, pe, function(a) {
            c || (c = !0, this.Ea(a.element), c = !1)
        }, a);
        a.i = b
    }
    m.clear = function(a) {
        if (a) {
            for (var b in this.v) this.v[b].forEach(Ja);
            this.i || (this.v = {}, this.o = {}, this.s = {})
        } else if (this.c) {
            this.c.forEach(this.ag, this);
            for (var c in this.g) this.ag(this.g[c])
        }
        this.i && this.i.clear();
        console.assert(Ha(this.v), "featureChangeKeys is an empty object now");
        console.assert(Ha(this.o), "idIndex is an empty object now");
        console.assert(Ha(this.s), "undefIdIndex is an empty object now");
        this.c && this.c.clear();
        this.H.clear();
        this.g = {};
        B(this, new hr(kr));
        this.b()
    };

    function Lj(a, b, c, d) {
        a.c ? br(a.c, b, c, d) : a.i && a.i.forEach(c, d)
    }

    function lr(a) {
        var b;
        a.i ? b = a.i.c : a.c && (b = a.c.getAll(), Ha(a.g) || eb(b, Ga(a.g)));
        return b
    }
    m.K = function() {
        console.assert(this.c, "getExtent does not work when useSpatialIndex is set to false");
        return this.c.K()
    };
    m.Oh = function(a) {
        a = a.target;
        var b = x(a).toString(),
            c = a.G();
        c ? (c = c.K(), b in this.g ? (delete this.g[b], this.c && this.c.insert(c, a)) : this.c && Zq(this.c, c, a)) : b in this.g || (this.c && this.c.remove(a), this.g[b] = a);
        c = a.Ua();
        if (void 0 !== c) {
            var d = c.toString();
            b in this.s ? (delete this.s[b], this.o[d] = a) : this.o[d] !== a && (c = mr(this, a), console.assert(c, "Expected feature to be removed from index"), this.o[d] = a)
        } else b in this.s ? console.assert(this.s[b] === a, "feature keyed under %s in undefIdKeys", b) : (c = mr(this, a), console.assert(c,
            "Expected feature to be removed from index"), this.s[b] = a);
        this.b();
        B(this, new hr(nr, a))
    };
    m.zb = function() {
        return this.c.zb() && Ha(this.g)
    };

    function Kj(a, b, c, d) {
        var e = a.H;
        b = a.ra(b, c);
        var f, g;
        f = 0;
        for (g = b.length; f < g; ++f) {
            var h = b[f];
            br(e, h, function(a) {
                return Gb(a.extent, h)
            }) || (a.D.call(a, h, c, d), e.insert(h, {
                extent: h.slice()
            }))
        }
    }
    m.Ea = function(a) {
        var b = x(a).toString();
        b in this.g ? delete this.g[b] : this.c && this.c.remove(a);
        this.ag(a);
        this.b()
    };
    m.ag = function(a) {
        var b = x(a).toString();
        console.assert(b in this.v, "featureKey exists in featureChangeKeys");
        this.v[b].forEach(Ja);
        delete this.v[b];
        var c = a.Ua();
        void 0 !== c ? delete this.o[c.toString()] : delete this.s[b];
        B(this, new hr(jr, a))
    };

    function mr(a, b) {
        var c = !1,
            d;
        for (d in a.o)
            if (a.o[d] === b) {
                delete a.o[d];
                c = !0;
                break
            }
        return c
    }

    function hr(a, b) {
        Qa.call(this, a);
        this.feature = b
    }
    v(hr, Qa);
    var ir = "addfeature",
        nr = "changefeature",
        kr = "clear",
        jr = "removefeature";

    function or(a) {
        jg.call(this, {
            Va: pr,
            handleEvent: qr,
            Wa: rr
        });
        this.na = null;
        this.v = !1;
        this.$a = a.source ? a.source : null;
        this.Ca = a.features ? a.features : null;
        this.al = a.Fo ? a.Fo : 12;
        this.R = a.type;
        this.g = sr(this.R);
        this.Ra = a.minPoints ? a.minPoints : this.g === tr ? 3 : 2;
        this.ra = a.zh ? a.zh : Infinity;
        this.yc = a.sk ? a.sk : ac;
        var b = a.vk;
        if (!b)
            if ("Circle" === this.R) b = function(a, b) {
                var c = b ? b : new Oq([NaN, NaN]);
                Pq(c, a[0], Math.sqrt(zb(a[0], a[1])));
                return c
            };
            else {
                var c, d = this.g;
                d === ur ? c = Qc : d === vr ? c = rl : d === tr && (c = bd);
                b = function(a, b) {
                    var g =
                        b;
                    g ? d === tr ? g.ba([a[0].concat([a[0][0]])]) : g.ba(a) : g = new c(a);
                    return g
                }
            }
        this.H = b;
        this.N = this.F = this.f = this.C = this.i = this.s = null;
        this.Eb = a.Og ? a.Og * a.Og : 36;
        this.ja = new li({
            source: new cr({
                Qb: !1,
                wrapX: a.wrapX ? a.wrapX : !1
            }),
            style: a.style ? a.style : wr()
        });
        this.La = a.geometryName;
        this.jf = a.ta ? a.ta : dg;
        this.zc = a.Vp ? ac : a.tk ? a.tk : fg;
        A(this, Za(Wf), this.Jh, this)
    }
    v(or, jg);

    function wr() {
        var a = ki();
        return function(b) {
            return a[b.G().T()]
        }
    }
    m = or.prototype;
    m.setMap = function(a) {
        jg.prototype.setMap.call(this, a);
        this.Jh()
    };

    function qr(a) {
        this.v = this.g !== ur && this.zc(a);
        var b = !this.v;
        this.v && a.type === Jf && null !== this.i ? (xr(this, a), b = !1) : a.type === If ? b = yr(this, a) : a.type === Cf && (b = !1);
        return kg.call(this, a) && b
    }

    function pr(a) {
        return this.v ? (this.na = a.pixel, this.s || zr(this, a), !0) : this.jf(a) ? (this.na = a.pixel, !0) : !1
    }

    function rr(a) {
        var b = this.na,
            c = a.pixel,
            d = b[0] - c[0],
            b = b[1] - c[1],
            d = d * d + b * b,
            b = !0;
        if (this.v ? d > this.Eb : d <= this.Eb) yr(this, a), this.s ? this.v || this.g === Ar ? this.Vb() : Br(this, a) ? this.yc(a) && this.Vb() : xr(this, a) : (zr(this, a), this.g === ur && this.Vb()), b = !1;
        return b
    }

    function yr(a, b) {
        if (a.s) {
            var c = b.coordinate,
                d = a.i.G(),
                e;
            a.g === ur ? e = a.f : a.g === tr ? (e = a.f[0], e = e[e.length - 1], Br(a, b) && (c = a.s.slice())) : (e = a.f, e = e[e.length - 1]);
            e[0] = c[0];
            e[1] = c[1];
            console.assert(a.f, "sketchCoords_ expected");
            a.H(a.f, d);
            a.C && a.C.G().ba(c);
            d instanceof bd && a.g !== tr ? (a.F || (a.F = new Fk(new rl(null))), d = ed(d), c = a.F.G(), c.U(d.layout, d.B)) : a.N && (c = a.F.G(), c.ba(a.N));
            Cr(a)
        } else c = b.coordinate.slice(), a.C ? a.C.G().ba(c) : (a.C = new Fk(new Qc(c)), Cr(a));
        return !0
    }

    function Br(a, b) {
        var c = !1;
        if (a.i) {
            var d = !1,
                e = [a.s];
            a.g === vr ? d = a.f.length > a.Ra : a.g === tr && (d = a.f[0].length > a.Ra, e = [a.f[0][0], a.f[0][a.f[0].length - 2]]);
            if (d)
                for (var d = b.map, f = 0, g = e.length; f < g; f++) {
                    var h = e[f],
                        k = qg(d, h),
                        l = b.pixel,
                        c = l[0] - k[0],
                        k = l[1] - k[1];
                    if (c = Math.sqrt(c * c + k * k) <= (a.v ? 1 : a.al)) {
                        a.s = h;
                        break
                    }
                }
        }
        return c
    }

    function zr(a, b) {
        var c = b.coordinate;
        a.s = c;
        a.g === ur ? a.f = c.slice() : a.g === tr ? (a.f = [
            [c.slice(), c.slice()]
        ], a.N = a.f[0]) : (a.f = [c.slice(), c.slice()], a.g === Ar && (a.N = a.f));
        a.N && (a.F = new Fk(new rl(a.N)));
        c = a.H(a.f);
        console.assert(void 0 !== c, "geometry should be defined");
        a.i = new Fk;
        a.La && Hk(a.i, a.La);
        Gk(a.i, c);
        Cr(a);
        B(a, new Dr(Er, a.i))
    }

    function xr(a, b) {
        var c = b.coordinate,
            d = a.i.G(),
            e, f;
        a.g === vr ? (a.s = c.slice(), f = a.f, f.length >= a.ra && (a.v ? f.pop() : e = !0), f.push(c.slice()), a.H(f, d)) : a.g === tr && (f = a.f[0], f.length >= a.ra && (a.v ? f.pop() : e = !0), f.push(c.slice()), e && (a.s = f[0]), a.H(a.f, d));
        Cr(a);
        e && a.Vb()
    }
    m.Vb = function() {
        var a = Fr(this),
            b = this.f,
            c = a.G();
        this.g === vr ? (b.pop(), this.H(b, c)) : this.g === tr && (b[0].pop(), this.H(b, c), b = c.M());
        "MultiPoint" === this.R ? Gk(a, new wl([b])) : "MultiLineString" === this.R ? Gk(a, new tl([b])) : "MultiPolygon" === this.R && Gk(a, new yl([b]));
        B(this, new Dr(Gr, a));
        this.Ca && this.Ca.push(a);
        this.$a && this.$a.ya(a)
    };

    function Fr(a) {
        a.s = null;
        var b = a.i;
        b && (a.i = null, a.C = null, a.F = null, C(a.ja).clear(!0));
        return b
    }
    m.extend = function(a) {
        var b = a.G();
        console.assert(this.g == vr, 'interaction mode must be "line"');
        console.assert("LineString" == b.T(), "feature geometry must be a line string");
        this.i = a;
        this.f = b.M();
        a = this.f[this.f.length - 1];
        this.s = a.slice();
        this.f.push(a.slice());
        Cr(this);
        B(this, new Dr(Er, this.i))
    };
    m.sc = bc;

    function Cr(a) {
        var b = [];
        a.i && b.push(a.i);
        a.F && b.push(a.F);
        a.C && b.push(a.C);
        a = C(a.ja);
        a.clear(!0);
        dl(a, b)
    }
    m.Jh = function() {
        var a = this.c,
            b = this.getActive();
        a && b || Fr(this);
        this.ja.setMap(b ? a : null)
    };

    function sr(a) {
        var b;
        "Point" === a || "MultiPoint" === a ? b = ur : "LineString" === a || "MultiLineString" === a ? b = vr : "Polygon" === a || "MultiPolygon" === a ? b = tr : "Circle" === a && (b = Ar);
        return b
    }
    var ur = "Point",
        vr = "LineString",
        tr = "Polygon",
        Ar = "Circle";

    function Dr(a, b) {
        Qa.call(this, a);
        this.feature = b
    }
    v(Dr, Qa);
    var Er = "drawstart",
        Gr = "drawend";

    function Hr(a) {
        jg.call(this, {
            Va: Ir,
            pb: Jr,
            handleEvent: Kr,
            Wa: Lr
        });
        this.$a = a.ta ? a.ta : ig;
        this.La = function(a) {
            return dg(a) && a.type == Df
        };
        this.Ra = a.Tg ? a.Tg : this.La;
        this.Ca = this.f = null;
        this.ja = [0, 0];
        this.C = this.N = !1;
        this.g = new Yq;
        this.H = void 0 !== a.Kb ? a.Kb : 10;
        this.s = this.ra = !1;
        this.i = [];
        this.F = new li({
            source: new cr({
                Qb: !1,
                wrapX: !!a.wrapX
            }),
            style: a.style ? a.style : Mr(),
            Ob: !0,
            Pb: !0
        });
        this.na = {
            Point: this.Ym,
            LineString: this.Lh,
            LinearRing: this.Lh,
            Polygon: this.Zm,
            MultiPoint: this.Wm,
            MultiLineString: this.Vm,
            MultiPolygon: this.Xm,
            GeometryCollection: this.Um
        };
        this.v = a.features;
        this.v.forEach(this.Of, this);
        A(this.v, ne, this.Sm, this);
        A(this.v, pe, this.Tm, this);
        this.R = null
    }
    v(Hr, jg);
    m = Hr.prototype;
    m.Of = function(a) {
        var b = a.G();
        b && b.T() in this.na && this.na[b.T()].call(this, a, b);
        (b = this.c) && Nr(this, this.ja, b);
        A(a, "change", this.Kh, this)
    };

    function Or(a, b) {
        a.C || (a.C = !0, B(a, new Pr(Qr, a.v, b)))
    }

    function Rr(a, b) {
        Sr(a, b);
        a.f && 0 === a.v.get(ke) && (C(a.F).Ea(a.f), a.f = null);
        Oa(b, "change", a.Kh, a)
    }

    function Sr(a, b) {
        var c = a.g,
            d = [];
        c.forEach(function(a) {
            b === a.feature && d.push(a)
        });
        for (var e = d.length - 1; 0 <= e; --e) c.remove(d[e])
    }
    m.setActive = function(a) {
        this.f && !a && (C(this.F).Ea(this.f), this.f = null);
        jg.prototype.setActive.call(this, a)
    };
    m.setMap = function(a) {
        this.F.setMap(a);
        jg.prototype.setMap.call(this, a)
    };
    m.Sm = function(a) {
        this.Of(a.element)
    };
    m.Kh = function(a) {
        this.s || (a = a.target, Rr(this, a), this.Of(a))
    };
    m.Tm = function(a) {
        Rr(this, a.element)
    };
    m.Ym = function(a, b) {
        var c = b.M(),
            c = {
                feature: a,
                geometry: b,
                ma: [c, c]
            };
        this.g.insert(b.K(), c)
    };
    m.Wm = function(a, b) {
        var c = b.M(),
            d, e, f;
        e = 0;
        for (f = c.length; e < f; ++e) d = c[e], d = {
            feature: a,
            geometry: b,
            depth: [e],
            index: e,
            ma: [d, d]
        }, this.g.insert(b.K(), d)
    };
    m.Lh = function(a, b) {
        var c = b.M(),
            d, e, f, g;
        d = 0;
        for (e = c.length - 1; d < e; ++d) f = c.slice(d, d + 2), g = {
            feature: a,
            geometry: b,
            index: d,
            ma: f
        }, this.g.insert(Bb(f), g)
    };
    m.Vm = function(a, b) {
        var c = b.M(),
            d, e, f, g, h, k, l;
        g = 0;
        for (h = c.length; g < h; ++g)
            for (d = c[g], e = 0, f = d.length - 1; e < f; ++e) k = d.slice(e, e + 2), l = {
                feature: a,
                geometry: b,
                depth: [g],
                index: e,
                ma: k
            }, this.g.insert(Bb(k), l)
    };
    m.Zm = function(a, b) {
        var c = b.M(),
            d, e, f, g, h, k, l;
        g = 0;
        for (h = c.length; g < h; ++g)
            for (d = c[g], e = 0, f = d.length - 1; e < f; ++e) k = d.slice(e, e + 2), l = {
                feature: a,
                geometry: b,
                depth: [g],
                index: e,
                ma: k
            }, this.g.insert(Bb(k), l)
    };
    m.Xm = function(a, b) {
        var c = b.M(),
            d, e, f, g, h, k, l, n, q, p;
        k = 0;
        for (l = c.length; k < l; ++k)
            for (n = c[k], g = 0, h = n.length; g < h; ++g)
                for (d = n[g], e = 0, f = d.length - 1; e < f; ++e) q = d.slice(e, e + 2), p = {
                    feature: a,
                    geometry: b,
                    depth: [g, k],
                    index: e,
                    ma: q
                }, this.g.insert(Bb(q), p)
    };
    m.Um = function(a, b) {
        var c, d = b.c;
        for (c = 0; c < d.length; ++c) this.na[d[c].T()].call(this, a, d[c])
    };

    function Tr(a, b) {
        var c = a.f;
        c ? c.G().ba(b) : (c = new Fk(new Qc(b)), a.f = c, C(a.F).ya(c))
    }

    function Ur(a, b) {
        return a.index - b.index
    }

    function Ir(a) {
        if (!this.$a(a)) return !1;
        Nr(this, a.pixel, a.map);
        this.i.length = 0;
        this.C = !1;
        var b = this.f;
        if (b) {
            var c = [],
                b = b.G().M(),
                d = Bb([b]),
                d = $q(this.g, d),
                e = {};
            d.sort(Ur);
            for (var f = 0, g = d.length; f < g; ++f) {
                var h = d[f],
                    k = h.ma,
                    l = x(h.feature),
                    n = h.depth;
                n && (l += "-" + n.join("-"));
                e[l] || (e[l] = Array(2));
                if (wb(k[0], b) && !e[l][0]) this.i.push([h, 0]), e[l][0] = h;
                else if (wb(k[1], b) && !e[l][1]) {
                    if ("LineString" !== h.geometry.T() && "MultiLineString" !== h.geometry.T() || !e[l][0] || 0 !== e[l][0].index) this.i.push([h, 1]), e[l][1] = h
                } else x(k) in
                    this.Ca && !e[l][0] && !e[l][1] && c.push([h, b])
            }
            c.length && Or(this, a);
            for (a = c.length - 1; 0 <= a; --a) this.Tl.apply(this, c[a])
        }
        return !!this.f
    }

    function Jr(a) {
        this.N = !1;
        Or(this, a);
        a = a.coordinate;
        for (var b = 0, c = this.i.length; b < c; ++b) {
            for (var d = this.i[b], e = d[0], f = e.depth, g = e.geometry, h = g.M(), k = e.ma, d = d[1]; a.length < g.J;) a.push(0);
            switch (g.T()) {
                case "Point":
                    h = a;
                    k[0] = k[1] = a;
                    break;
                case "MultiPoint":
                    h[e.index] = a;
                    k[0] = k[1] = a;
                    break;
                case "LineString":
                    h[e.index + d] = a;
                    k[d] = a;
                    break;
                case "MultiLineString":
                    h[f[0]][e.index + d] = a;
                    k[d] = a;
                    break;
                case "Polygon":
                    h[f[0]][e.index + d] = a;
                    k[d] = a;
                    break;
                case "MultiPolygon":
                    h[f[1]][f[0]][e.index + d] = a, k[d] = a
            }
            e = g;
            this.s = !0;
            e.ba(h);
            this.s = !1
        }
        Tr(this, a)
    }

    function Lr(a) {
        for (var b, c = this.i.length - 1; 0 <= c; --c) b = this.i[c][0], Zq(this.g, Bb(b.ma), b);
        this.C && (B(this, new Pr(Vr, this.v, a)), this.C = !1);
        return !1
    }

    function Kr(a) {
        if (!(a instanceof yf)) return !0;
        this.R = a;
        var b;
        rd(D(a.map))[1] || a.type != If || this.D || (this.ja = a.pixel, Nr(this, a.pixel, a.map));
        if (this.f && this.Ra(a)) {
            var c;
            if (a.type == Df && this.N) c = !0;
            else {
                var d = !1;
                if (this.R && this.R.type != Jf) {
                    b = this.R;
                    Or(this, b);
                    var e = this.i,
                        d = {},
                        f = !1,
                        g, h, k, l, n, q, p;
                    for (l = e.length - 1; 0 <= l; --l) k = e[l], p = k[0], c = x(p.feature), p.depth && (c += "-" + p.depth.join("-")), c in d || (d[c] = {}), 0 === k[1] ? (d[c].right = p, d[c].index = p.index) : 1 == k[1] && (d[c].left = p, d[c].index = p.index + 1);
                    for (c in d) {
                        q =
                            d[c].right;
                        l = d[c].left;
                        k = d[c].index;
                        n = k - 1;
                        p = void 0 !== l ? l : q;
                        0 > n && (n = 0);
                        e = p.geometry;
                        g = h = e.M();
                        f = !1;
                        switch (e.T()) {
                            case "MultiLineString":
                                2 < h[p.depth[0]].length && (h[p.depth[0]].splice(k, 1), f = !0);
                                break;
                            case "LineString":
                                2 < h.length && (h.splice(k, 1), f = !0);
                                break;
                            case "MultiPolygon":
                                g = g[p.depth[1]];
                            case "Polygon":
                                g = g[p.depth[0]], 4 < g.length && (k == g.length - 1 && (k = 0), g.splice(k, 1), f = !0, 0 === k && (g.pop(), g.push(g[0]), n = g.length - 1))
                        }
                        f && (g = e, this.s = !0, g.ba(h), this.s = !1, h = [], void 0 !== l && (this.g.remove(l), h.push(l.ma[0])),
                            void 0 !== q && (this.g.remove(q), h.push(q.ma[1])), void 0 !== l && void 0 !== q && (console.assert(0 <= n, "newIndex should be larger than 0"), l = {
                                depth: p.depth,
                                feature: p.feature,
                                geometry: p.geometry,
                                index: n,
                                ma: h
                            }, this.g.insert(Bb(l.ma), l)), Wr(this, e, k, p.depth, -1), this.f && (C(this.F).Ea(this.f), this.f = null))
                    }
                    d = f;
                    B(this, new Pr(Vr, this.v, b));
                    this.C = !1
                }
                c = d
            }
            b = c
        }
        a.type == Df && (this.N = !1);
        return kg.call(this, a) && !b
    }

    function Nr(a, b, c) {
        function d(a, b) {
            return zb(e, ub(e, a.ma)) - zb(e, ub(e, b.ma))
        }
        var e = c.Ia(b),
            f = c.Ia([b[0] - a.H, b[1] + a.H]),
            g = c.Ia([b[0] + a.H, b[1] - a.H]),
            f = Bb([f, g]),
            f = $q(a.g, f);
        if (0 < f.length) {
            f.sort(d);
            var g = f[0].ma,
                h = ub(e, g),
                k = qg(c, h);
            if (Math.sqrt(zb(b, k)) <= a.H) {
                b = qg(c, g[0]);
                c = qg(c, g[1]);
                b = zb(k, b);
                c = zb(k, c);
                a.ra = Math.sqrt(Math.min(b, c)) <= a.H;
                a.ra && (h = b > c ? g[1] : g[0]);
                Tr(a, h);
                c = {};
                c[x(g)] = !0;
                b = 1;
                for (k = f.length; b < k; ++b)
                    if (h = f[b].ma, wb(g[0], h[0]) && wb(g[1], h[1]) || wb(g[0], h[1]) && wb(g[1], h[0])) c[x(h)] = !0;
                    else break;
                a.Ca = c;
                return
            }
        }
        a.f && (C(a.F).Ea(a.f), a.f = null)
    }
    m.Tl = function(a, b) {
        for (var c = a.ma, d = a.feature, e = a.geometry, f = a.depth, g = a.index, h; b.length < e.J;) b.push(0);
        switch (e.T()) {
            case "MultiLineString":
                h = e.M();
                h[f[0]].splice(g + 1, 0, b);
                break;
            case "Polygon":
                h = e.M();
                h[f[0]].splice(g + 1, 0, b);
                break;
            case "MultiPolygon":
                h = e.M();
                h[f[1]][f[0]].splice(g + 1, 0, b);
                break;
            case "LineString":
                h = e.M();
                h.splice(g + 1, 0, b);
                break;
            default:
                return
        }
        this.s = !0;
        e.ba(h);
        this.s = !1;
        h = this.g;
        h.remove(a);
        Wr(this, e, g, f, 1);
        var k = {
            ma: [c[0], b],
            feature: d,
            geometry: e,
            depth: f,
            index: g
        };
        h.insert(Bb(k.ma),
            k);
        this.i.push([k, 1]);
        c = {
            ma: [b, c[1]],
            feature: d,
            geometry: e,
            depth: f,
            index: g + 1
        };
        h.insert(Bb(c.ma), c);
        this.i.push([c, 0]);
        this.N = !0
    };

    function Wr(a, b, c, d, e) {
        br(a.g, b.K(), function(a) {
            a.geometry === b && (void 0 === d || void 0 === a.depth || hb(a.depth, d)) && a.index > c && (a.index += e)
        })
    }

    function Mr() {
        var a = ki();
        return function() {
            return a.Point
        }
    }

    function Pr(a, b, c) {
        Qa.call(this, a);
        this.features = b;
        this.mapBrowserEvent = c
    }
    v(Pr, Qa);
    var Qr = "modifystart",
        Vr = "modifyend";

    function Xr(a) {
        jg.call(this, {
            Va: Yr,
            pb: Zr,
            Af: $r,
            Wa: as
        });
        this.H = void 0;
        this.g = null;
        this.i = void 0 !== a.features ? a.features : null;
        if (a.layers)
            if ("function" === typeof a.layers) a = a.layers;
            else {
                var b = a.layers;
                a = function(a) {
                    return cb(b, a)
                }
            }
        else a = ac;
        this.ja = a;
        this.s = null
    }
    v(Xr, jg);

    function Yr(a) {
        this.s = bs(this, a.pixel, a.map);
        return !this.g && this.s ? (this.g = a.coordinate, $r.call(this, a), B(this, new cs(ds, this.i, a.coordinate)), !0) : !1
    }

    function as(a) {
        return this.g ? (this.g = null, $r.call(this, a), B(this, new cs(es, this.i, a.coordinate)), !0) : !1
    }

    function Zr(a) {
        if (this.g) {
            a = a.coordinate;
            var b = a[0] - this.g[0],
                c = a[1] - this.g[1];
            if (this.i) this.i.forEach(function(a) {
                var d = a.G();
                d.translate(b, c);
                Gk(a, d)
            });
            else if (this.s) {
                var d = this.s.G();
                d.translate(b, c);
                Gk(this.s, d)
            }
            this.g = a;
            B(this, new cs(fs, this.i, a))
        }
    }

    function $r(a) {
        var b = bk(a.map);
        bs(this, a.pixel, a.map) ? (this.H = b.style.cursor, b.style.cursor = this.g ? "-webkit-grabbing" : "-webkit-grab", b.style.cursor = this.g ? "grabbing" : "grab") : (b.style.cursor = void 0 !== this.H ? this.H : "", this.H = void 0)
    }

    function bs(a, b, c) {
        var d = null;
        b = Zj(c, b, function(a) {
            return a
        }, a, a.ja);
        a.i && cb(a.i.c, b) && (d = b);
        return d
    }

    function cs(a, b, c) {
        Qa.call(this, a);
        this.features = b;
        this.coordinate = c
    }
    v(cs, Qa);
    var ds = "translatestart",
        fs = "translating",
        es = "translateend";

    function gs(a, b) {
        function c() {
            delete window[e];
            d.parentNode.removeChild(d)
        }
        var d = document.createElement("script"),
            e = "olc_" + x(b);
        d.async = !0;
        d.src = a + (-1 == a.indexOf("?") ? "?" : "&") + "jsonp=" + e;
        var f = setTimeout(function() {
            c()
        }, 1E4);
        window[e] = function(a) {
            clearTimeout(f);
            c();
            b(a)
        };
        document.getElementsByTagName("head")[0].appendChild(d)
    };

    function hs(a, b, c, d, e, f, g, h, k, l, n) {
        Lf.call(this, e, 0);
        this.C = void 0 !== n ? n : !1;
        this.D = g;
        this.v = h;
        this.s = null;
        this.f = b;
        this.g = d;
        this.o = f ? f : e;
        this.c = [];
        this.tc = null;
        this.j = 0;
        f = Sd(d, this.o);
        h = this.g.K();
        e = this.f.K();
        f = h ? Yb(f, h) : f;
        if (0 === Sb(f)) this.state = 4;
        else if ((h = a.K()) && (e ? e = Yb(e, h) : e = h), d = Vd(d, this.o[0]), d = pj(a, c, Wb(f), d), !isFinite(d) || 0 >= d) this.state = 4;
        else if (this.i = new sj(a, c, f, e, d * (void 0 !== l ? l : .5)), 0 === this.i.j.length) this.state = 4;
        else if (this.j = ae(b, d), c = uj(this.i), e && (a.f ? (c[1] = xa(c[1], e[1],
                e[3]), c[3] = xa(c[3], e[1], e[3])) : c = Yb(c, e)), Sb(c))
            if (a = Td(b, c, this.j), 100 > (a.Z - a.W + 1) * (a.ca - a.aa + 1)) {
                for (b = a.W; b <= a.Z; b++)
                    for (c = a.aa; c <= a.ca; c++)(l = k(this.j, b, c, g)) && this.c.push(l);
                0 === this.c.length && (this.state = 4)
            } else console.assert(!1, "reasonable number of tiles is required"), this.state = 3;
        else this.state = 4
    }
    v(hs, Lf);
    hs.prototype.qa = function() {
        1 == this.state && (this.tc.forEach(Ja), this.tc = null);
        Lf.prototype.qa.call(this)
    };
    hs.prototype.je = function() {
        return this.s
    };
    hs.prototype.md = function() {
        var a = [];
        this.c.forEach(function(b) {
            b && b.ia() == Of && a.push({
                extent: Sd(this.f, b.Cb),
                image: b.je()
            })
        }, this);
        this.c.length = 0;
        if (0 === a.length) this.state = 3;
        else {
            var b = this.o[0],
                c = $d(this.g, b),
                d = "number" === typeof c ? c : c[0],
                c = "number" === typeof c ? c : c[1],
                b = Vd(this.g, b),
                e = Vd(this.f, this.j),
                f = Sd(this.g, this.o);
            this.s = rj(d, c, this.D, e, this.f.K(), b, f, this.i, a, this.v, this.C);
            this.state = Of
        }
        Mf(this)
    };
    hs.prototype.load = function() {
        if (0 == this.state) {
            this.state = 1;
            Mf(this);
            var a = 0;
            console.assert(!this.tc, "this.sourcesListenerKeys_ should be null");
            this.tc = [];
            this.c.forEach(function(b) {
                var c = b.ia();
                if (0 == c || 1 == c) {
                    a++;
                    var d;
                    d = A(b, "change", function() {
                        var c = b.ia();
                        if (c == Of || 3 == c || 4 == c) Ja(d), a--, console.assert(0 <= a, "leftToLoad should not be negative"), 0 === a && (this.tc.forEach(Ja), this.tc = null, this.md())
                    }, this);
                    this.tc.push(d)
                }
            }, this);
            this.c.forEach(function(a) {
                0 == a.ia() && a.load()
            });
            0 === a && setTimeout(this.md.bind(this),
                0)
        }
    };

    function is(a, b) {
        var c = /\{z\}/g,
            d = /\{x\}/g,
            e = /\{y\}/g,
            f = /\{-y\}/g;
        return function(g) {
            if (g) return a.replace(c, g[0].toString()).replace(d, g[1].toString()).replace(e, function() {
                return (-g[2] - 1).toString()
            }).replace(f, function() {
                var a = ce(b, g[0]);
                wa(a, 55);
                return (a.ca - a.aa + 1 + g[2]).toString()
            })
        }
    }

    function js(a, b) {
        for (var c = a.length, d = Array(c), e = 0; e < c; ++e) d[e] = is(a[e], b);
        return ks(d)
    }

    function ks(a) {
        console.assert(0 < a.length, "Length of tile url functions should be greater than 0");
        return 1 === a.length ? a[0] : function(b, c, d) {
            if (b) return a[Aa((b[1] << b[0]) + b[2], a.length)](b, c, d)
        }
    }

    function ls() {}

    function ms(a) {
        var b = [],
            c = /\{([a-z])-([a-z])\}/.exec(a);
        if (c) {
            var d = c[2].charCodeAt(0),
                e;
            for (e = c[1].charCodeAt(0); e <= d; ++e) b.push(a.replace(c[0], String.fromCharCode(e)));
            return b
        }
        if (c = c = /\{(\d+)-(\d+)\}/.exec(a)) {
            d = parseInt(c[2], 10);
            for (e = parseInt(c[1], 10); e <= d; e++) b.push(a.replace(c[0], e.toString()));
            return b
        }
        b.push(a);
        return b
    };

    function ns(a) {
        Oj.call(this);
        this.g = void 0 !== a ? a : 2048
    }
    v(ns, Oj);

    function os(a) {
        return a.Fb() > a.g
    }
    ns.prototype.Cc = function(a) {
        for (var b, c; os(this) && !(console.assert(this.c, "oldest must not be null"), b = this.c.uc, c = b.Cb[0].toString(), c in a && a[c].contains(b.Cb));) this.pop().Ma()
    };

    function ps(a) {
        xj.call(this, {
            la: a.la,
            extent: a.extent,
            ua: a.ua,
            projection: a.projection,
            state: a.state,
            wrapX: a.wrapX
        });
        this.$a = void 0 !== a.tb ? a.tb : !1;
        this.v = void 0 !== a.Nb ? a.Nb : 1;
        this.oa = void 0 !== a.oa ? a.oa : null;
        this.c = new ns(a.bb);
        this.La = [0, 0];
        this.Hb = ""
    }
    v(ps, xj);
    m = ps.prototype;
    m.Nh = function() {
        return os(this.c)
    };
    m.Cc = function(a, b) {
        var c = this.bd(a);
        c && c.Cc(b)
    };

    function Bi(a, b, c, d, e) {
        b = a.bd(b);
        if (!b) return !1;
        for (var f = !0, g, h, k = d.W; k <= d.Z; ++k)
            for (var l = d.aa; l <= d.ca; ++l) g = a.Vd(c, k, l), h = !1, b.f.hasOwnProperty(g) && (g = b.get(g), (h = g.ia() === Of) && (h = !1 !== e(g))), h || (f = !1);
        return f
    }
    m.ih = function() {
        return 0
    };

    function qs(a, b) {
        a.Hb !== b && (a.Hb = b, a.b())
    }
    m.Vd = function(a, b, c) {
        return a + "/" + b + "/" + c
    };
    m.vf = function() {
        return this.$a
    };
    m.Wb = function(a) {
        return this.oa ? this.oa : de(a)
    };
    m.bd = function(a) {
        var b = this.f;
        return b && !vc(b, a) ? null : this.c
    };

    function rs(a, b, c) {
        var d = void 0 !== c ? c : a.f;
        c = a.Wb(d);
        if (a.F && d.j) {
            var e = b;
            b = e[0];
            a = Zd(c, e);
            d = ee(d);
            Hb(d, a[0], a[1]) ? b = e : (e = Ub(d), a[0] += e * Math.ceil((d[0] - a[0]) / e), b = be(c, a, b))
        }
        e = b[0];
        d = b[1];
        a = b[2];
        if (c.va > e || e > c.ka) c = !1;
        else {
            var f = c.K();
            c = (c = f ? Td(c, f, e) : ce(c, e)) ? Jd(c, d, a) : !0
        }
        return c ? b : null
    }
    m.refresh = function() {
        this.c.clear();
        this.b()
    };
    m.Di = ta;

    function ts(a, b) {
        Qa.call(this, a);
        this.tile = b
    }
    v(ts, Qa);

    function us(a) {
        ps.call(this, {
            la: a.la,
            bb: a.bb,
            extent: a.extent,
            ua: a.ua,
            tb: a.tb,
            projection: a.projection,
            state: a.state,
            oa: a.oa,
            Nb: a.Nb,
            wrapX: a.wrapX
        });
        this.Xa = a.Xa;
        this.Db = this.s ? this.s.bind(this) : ls;
        this.Za = null;
        if (a.Za) {
            var b = a.Za;
            this.Za = b;
            var c = b.join("\n");
            vs(this, this.s ? this.s.bind(this) : js(b, this.oa), c)
        } else a.url && this.od(a.url);
        a.Db && vs(this, a.Db)
    }
    v(us, ps);
    us.prototype.Ra = function(a) {
        a = a.target;
        switch (a.ia()) {
            case 1:
                B(this, new ts("tileloadstart", a));
                break;
            case Of:
                B(this, new ts("tileloadend", a));
                break;
            case 3:
                B(this, new ts("tileloaderror", a))
        }
    };

    function vs(a, b, c) {
        a.Db = b;
        "undefined" !== typeof c ? qs(a, c) : a.b()
    }
    us.prototype.od = function(a) {
        var b = this.Za = ms(a);
        vs(this, this.s ? this.s.bind(this) : js(b, this.oa), a)
    };
    us.prototype.Di = function(a, b, c) {
        a = this.Vd(a, b, c);
        this.c.f.hasOwnProperty(a) && this.c.get(a)
    };

    function ws(a) {
        us.call(this, {
            la: a.la,
            bb: a.bb,
            extent: a.extent,
            ua: a.ua,
            tb: a.tb,
            projection: a.projection,
            state: a.state,
            oa: a.oa,
            Xa: a.Xa ? a.Xa : xs,
            Nb: a.Nb,
            Db: a.Db,
            url: a.url,
            Za: a.Za,
            wrapX: a.wrapX
        });
        this.crossOrigin = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        this.qd = void 0 !== a.qd ? a.qd : Qq;
        this.i = {};
        this.D = {};
        this.Eb = a.Zb
    }
    v(ws, us);
    m = ws.prototype;
    m.Nh = function() {
        if (os(this.c)) return !0;
        for (var a in this.i)
            if (os(this.i[a])) return !0;
        return !1
    };
    m.Cc = function(a, b) {
        var c = this.bd(a);
        this.c.Cc(this.c == c ? b : {});
        for (var d in this.i) {
            var e = this.i[d];
            e.Cc(e == c ? b : {})
        }
    };
    m.ih = function(a) {
        return this.f && a && vc(this.f, a), 0
    };
    m.vf = function(a) {
        return this.f && a && !vc(this.f, a) ? !1 : us.prototype.vf.call(this, a)
    };
    m.Wb = function(a) {
        var b = this.f;
        return !this.oa || b && !vc(b, a) ? (b = x(a).toString(), b in this.D || (this.D[b] = de(a)), this.D[b]) : this.oa
    };
    m.bd = function(a) {
        var b = this.f;
        if (!b || vc(b, a)) return this.c;
        a = x(a).toString();
        a in this.i || (this.i[a] = new ns);
        return this.i[a]
    };

    function ys(a, b, c, d, e, f, g) {
        b = [b, c, d];
        e = (c = rs(a, b, f)) ? a.Db(c, e, f) : void 0;
        e = new a.qd(b, void 0 !== e ? 0 : 4, void 0 !== e ? e : "", a.crossOrigin, a.Xa);
        e.key = g;
        A(e, "change", a.Ra, a);
        return e
    }

    function Ii(a, b, c, d, e, f) {
        if (a.f && f && !vc(a.f, f)) {
            e = a.bd(f);
            d = [b, c, d];
            var g;
            b = a.Vd.apply(a, d);
            e.f.hasOwnProperty(b) && (g = e.get(b));
            c = a.Hb;
            if (g && g.key == c) return g;
            var h = a.f,
                k = a.Wb(h),
                l = a.Wb(f),
                n = rs(a, d, f);
            a = new hs(h, k, f, l, d, n, a.v, 0, function(a, b, c, d) {
                return zs(this, a, b, c, d, h)
            }.bind(a), a.Eb, !1);
            a.key = c;
            g ? (a.b = g, e.replace(b, a)) : e.set(b, a);
            return a
        }
        return zs(a, b, c, d, e, f)
    }

    function zs(a, b, c, d, e, f) {
        var g, h = a.Vd(b, c, d),
            k = a.Hb;
        if (a.c.f.hasOwnProperty(h)) {
            if (g = a.c.get(h), g.key != k) {
                var l = g;
                g = ys(a, b, c, d, e, f, k);
                0 == l.ia() ? g.b = l.b : g.b = l;
                if (g.b) {
                    b = g.b;
                    c = g;
                    do {
                        if (b.ia() == Of) {
                            b.b = null;
                            break
                        } else 1 == b.ia() ? c = b : 0 == b.ia() ? c.b = b.b : c = b;
                        b = c.b
                    } while (b)
                }
                a.c.replace(h, g)
            }
        } else g = ys(a, b, c, d, e, f, k), a.c.set(h, g);
        return g
    }

    function xs(a, b) {
        a.je().src = b
    };

    function As(a) {
        ws.call(this, {
            bb: a.bb,
            crossOrigin: "anonymous",
            tb: !0,
            projection: jc("EPSG:3857"),
            Zb: a.Zb,
            state: "loading",
            Xa: a.Xa,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        });
        this.R = void 0 !== a.dk ? a.dk : "en-us";
        this.o = void 0 !== a.ka ? a.ka : -1;
        this.H = a.key;
        this.ja = a.Ql;
        gs("https://dev.virtualearth.net/REST/v1/Imagery/Metadata/" + this.ja + "?uriScheme=https&include=ImageryProviders&key=" + this.H, this.fa.bind(this))
    }
    v(As, ws);
    var Bs = new he({
        html: '<a class="ol-attribution-bing-tos" href="http://www.microsoft.com/maps/product/terms.html">Terms of Use</a>'
    });
    As.prototype.fa = function(a) {
        if (200 != a.statusCode || "OK" != a.statusDescription || "ValidCredentials" != a.authenticationResultCode || 1 != a.resourceSets.length || 1 != a.resourceSets[0].resources.length) this.Ae("error");
        else {
            var b = a.brandLogoUri; - 1 == b.indexOf("https") && (b = b.replace("http", "https"));
            var c = a.resourceSets[0].resources[0];
            console.assert(c.imageWidth == c.imageHeight, "resource has imageWidth equal to imageHeight, i.e. is square");
            var d = -1 == this.o ? c.zoomMax : this.o,
                e = this.f;
            a = ee(e);
            var f = ge({
                extent: a,
                va: c.zoomMin,
                ka: d,
                tileSize: c.imageWidth == c.imageHeight ? c.imageWidth : [c.imageWidth, c.imageHeight]
            });
            this.oa = f;
            var g = this.R;
            this.Db = ks(c.imageUrlSubdomains.map(function(a) {
                var b = [0, 0, 0],
                    d = c.imageUrl.replace("{subdomain}", a).replace("{culture}", g);
                return function(a, c, f) {
                    console.assert(vc(f, e), "projections are equivalent");
                    if (a) return Md(a[0], a[1], -a[2] - 1, b), d.replace("{quadkey}", Nd(b))
                }
            }));
            if (c.imageryProviders) {
                var h = pc(jc("EPSG:4326"), this.f);
                a = c.imageryProviders.map(function(a) {
                    var b = a.attribution,
                        c = {};
                    a.coverageAreas.forEach(function(a) {
                        var b =
                            a.zoomMin,
                            e = Math.min(a.zoomMax, d);
                        a = a.bbox;
                        a = $b([a[1], a[0], a[3], a[2]], h);
                        var g, k;
                        for (g = b; g <= e; ++g) k = g.toString(), b = Td(f, a, g), k in c ? c[k].push(b) : c[k] = [b]
                    });
                    return new he({
                        html: b,
                        yi: c
                    })
                });
                a.push(Bs);
                this.C = yj(a);
                this.b()
            }
            this.N = b;
            this.Ae("ready")
        }
    };

    function Cs(a) {
        a = a || {};
        var b = void 0 !== a.projection ? a.projection : "EPSG:3857",
            c = void 0 !== a.oa ? a.oa : ge({
                extent: ee(b),
                ka: a.ka,
                va: a.va,
                tileSize: a.tileSize
            });
        ws.call(this, {
            la: a.la,
            bb: a.bb,
            crossOrigin: a.crossOrigin,
            ua: a.ua,
            tb: a.tb,
            projection: b,
            Zb: a.Zb,
            oa: c,
            Xa: a.Xa,
            Nb: a.Nb,
            Db: a.Db,
            url: a.url,
            Za: a.Za,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        })
    }
    v(Cs, ws);

    function Ds(a, b) {
        var c = [];
        Object.keys(b).forEach(function(a) {
            null !== b[a] && void 0 !== b[a] && c.push(a + "=" + encodeURIComponent(b[a]))
        });
        var d = c.join("&");
        a = a.replace(/[?&]$/, "");
        a = -1 === a.indexOf("?") ? a + "?" : a + "&";
        return a + d
    };

    function Es(a) {
        a = a || {};
        zj.call(this, {
            la: a.la,
            ua: a.ua,
            projection: a.projection,
            Fa: a.Fa
        });
        this.Ca = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        this.o = a.url;
        this.Ra = void 0 !== a.Pl ? a.Pl : Gj;
        this.g = a.params || {};
        this.D = !0;
        Fs(this);
        this.fa = a.serverType;
        this.La = void 0 !== a.Ml ? a.Ml : !0;
        this.i = null;
        this.H = [0, 0];
        this.R = 0;
        this.v = void 0 !== a.ratio ? a.ratio : 1.5
    }
    v(Es, zj);
    var Gs = [101, 101];

    function Hs(a, b, c, d, e) {
        console.assert(!("VERSION" in e), "key VERSION is not allowed in params");
        if (void 0 !== a.o) {
            var f = Xb(b, c, 0, Gs),
                g = {
                    SERVICE: "WMS",
                    VERSION: "1.3.0",
                    REQUEST: "GetFeatureInfo",
                    FORMAT: "image/png",
                    TRANSPARENT: !0,
                    QUERY_LAYERS: a.g.LAYERS
                };
            Ea(g, a.g, e);
            e = Math.floor((f[3] - b[1]) / c);
            g[a.D ? "I" : "X"] = Math.floor((b[0] - f[0]) / c);
            g[a.D ? "J" : "Y"] = e;
            return Is(a, f, Gs, 1, jc(d), g)
        }
    }

    function Bj(a, b, c, d, e) {
        if (void 0 === a.o) return null;
        a.s && (c = a.s[db(a.s, c, 0)]);
        1 == d || a.La && void 0 !== a.fa || (d = 1);
        b = b.slice();
        var f = (b[0] + b[2]) / 2,
            g = (b[1] + b[3]) / 2,
            h = c / d,
            k = Ub(b) / h,
            h = Vb(b) / h,
            l = a.i;
        if (l && a.R == a.j && Oh(l) == c && l.j == d && Gb(l.K(), b)) return l;
        if (1 != a.v) {
            var l = a.v * Ub(b) / 2,
                n = a.v * Vb(b) / 2;
            b[0] = f - l;
            b[1] = g - n;
            b[2] = f + l;
            b[3] = g + n
        }
        f = {
            SERVICE: "WMS",
            VERSION: "1.3.0",
            REQUEST: "GetMap",
            FORMAT: "image/png",
            TRANSPARENT: !0
        };
        Ea(f, a.g);
        a.H[0] = Math.ceil(k * a.v);
        a.H[1] = Math.ceil(h * a.v);
        e = Is(a, b, a.H, d, e, f);
        a.i = new Ph(b, c,
            d, a.C, e, a.Ca, a.Ra);
        a.R = a.j;
        A(a.i, "change", a.ra, a);
        return a.i
    }

    function Is(a, b, c, d, e, f) {
        wa(void 0 !== a.o, 9);
        f[a.D ? "CRS" : "SRS"] = e.b;
        "STYLES" in a.g || (f.STYLES = "");
        if (1 != d) switch (a.fa) {
            case "geoserver":
                d = 90 * d + .5 | 0;
                f.FORMAT_OPTIONS = "FORMAT_OPTIONS" in f ? f.FORMAT_OPTIONS + (";dpi:" + d) : "dpi:" + d;
                break;
            case "mapserver":
                f.MAP_RESOLUTION = 90 * d;
                break;
            case "carmentaserver":
            case "qgis":
                f.DPI = 90 * d;
                break;
            default:
                wa(!1, 8)
        }
        f.WIDTH = c[0];
        f.HEIGHT = c[1];
        c = e.c;
        var g;
        a.D && "ne" == c.substr(0, 2) ? g = [b[1], b[0], b[3], b[2]] : g = b;
        f.BBOX = g.join(",");
        return Ds(a.o, f)
    }
    Es.prototype.od = function(a) {
        a != this.o && (this.o = a, this.i = null, this.b())
    };
    Es.prototype.updateParams = function(a) {
        Ea(this.g, a);
        Fs(this);
        this.i = null;
        this.b()
    };

    function Fs(a) {
        var b;
        a: {
            b = ("" + (a.g.VERSION || "1.3.0")).split(".");
            for (var c = ["1", "3"], d = 0; d < Math.max(b.length, c.length); d++) {
                var e = parseInt(b[d] || "0", 10),
                    f = parseInt(c[d] || "0", 10);
                if (e > f) {
                    b = 1;
                    break a
                }
                if (f > e) {
                    b = -1;
                    break a
                }
            }
            b = 0
        }
        a.D = 0 <= b
    };

    function Js(a) {
        a = a || {};
        var b;
        void 0 !== a.la ? b = a.la : b = [Ks];
        Cs.call(this, {
            la: b,
            bb: a.bb,
            crossOrigin: void 0 !== a.crossOrigin ? a.crossOrigin : "anonymous",
            tb: void 0 !== a.tb ? a.tb : !0,
            ka: void 0 !== a.ka ? a.ka : 19,
            Zb: a.Zb,
            Xa: a.Xa,
            url: void 0 !== a.url ? a.url : "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            wrapX: a.wrapX
        })
    }
    v(Js, Cs);
    var Ks = new he({
        html: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.'
    });
    (function() {
        var a = {},
            b = {
                ea: a
            };
        (function(c) {
            if ("object" === typeof a && "undefined" !== typeof b) b.ea = c();
            else {
                var d;
                "undefined" !== typeof window ? d = window : "undefined" !== typeof global ? d = global : "undefined" !== typeof self ? d = self : d = this;
                d.bq = c()
            }
        })(function() {
            return function d(a, b, g) {
                function h(l, q) {
                    if (!b[l]) {
                        if (!a[l]) {
                            var p = "function" == typeof require && require;
                            if (!q && p) return p(l, !0);
                            if (k) return k(l, !0);
                            p = Error("Cannot find module '" + l + "'");
                            throw p.code = "MODULE_NOT_FOUND", p;
                        }
                        p = b[l] = {
                            ea: {}
                        };
                        a[l][0].call(p.ea, function(b) {
                            var d =
                                a[l][1][b];
                            return h(d ? d : b)
                        }, p, p.ea, d, a, b, g)
                    }
                    return b[l].ea
                }
                for (var k = "function" == typeof require && require, l = 0; l < g.length; l++) h(g[l]);
                return h
            }({
                1: [function(a, b, f) {
                    a = a("./processor");
                    f.Fp = a
                }, {
                    "./processor": 2
                }],
                2: [function(a, b) {
                    function f(a) {
                        var b = !0;
                        try {
                            new ImageData(10, 10)
                        } catch (d) {
                            b = !1
                        }
                        return function(d) {
                            var e = d.buffers,
                                f = d.meta,
                                g = d.width,
                                h = d.height,
                                k = e.length,
                                l = e[0].byteLength;
                            if (d.imageOps) {
                                l = Array(k);
                                for (d = 0; d < k; ++d) {
                                    var I = l,
                                        N = d,
                                        fa;
                                    fa = new Uint8ClampedArray(e[d]);
                                    var U = g,
                                        y = h;
                                    fa = b ? new ImageData(fa,
                                        U, y) : {
                                        data: fa,
                                        width: U,
                                        height: y
                                    };
                                    I[N] = fa
                                }
                                g = a(l, f).data
                            } else {
                                g = new Uint8ClampedArray(l);
                                h = Array(k);
                                I = Array(k);
                                for (d = 0; d < k; ++d) h[d] = new Uint8ClampedArray(e[d]), I[d] = [0, 0, 0, 0];
                                for (e = 0; e < l; e += 4) {
                                    for (d = 0; d < k; ++d) N = h[d], I[d][0] = N[e], I[d][1] = N[e + 1], I[d][2] = N[e + 2], I[d][3] = N[e + 3];
                                    d = a(I, f);
                                    g[e] = d[0];
                                    g[e + 1] = d[1];
                                    g[e + 2] = d[2];
                                    g[e + 3] = d[3]
                                }
                            }
                            return g.buffer
                        }
                    }

                    function g(a, b) {
                        var d = Object.keys(a.Zl || {}).map(function(b) {
                                return "var " + b + " = " + a.Zl[b].toString() + ";"
                            }).concat(["var __minion__ = (" + f.toString() + ")(", a.pn.toString(),
                                ");", 'self.addEventListener("message", function(event) {', "  var buffer = __minion__(event.data);", "  self.postMessage({buffer: buffer, meta: event.data.meta}, [buffer]);", "});"
                            ]),
                            d = URL.createObjectURL(new Blob(d, {
                                type: "text/javascript"
                            })),
                            d = new Worker(d);
                        d.addEventListener("message", b);
                        return d
                    }

                    function h(a, b) {
                        var d = f(a.pn);
                        return {
                            postMessage: function(a) {
                                setTimeout(function() {
                                    b({
                                        data: {
                                            buffer: d(a),
                                            meta: a.meta
                                        }
                                    })
                                }, 0)
                            }
                        }
                    }

                    function k(a) {
                        this.Le = !!a.Zp;
                        var b;
                        0 === a.Lo ? b = 0 : this.Le ? b = 1 : b = a.Lo || 1;
                        var d = [];
                        if (b)
                            for (var e = 0; e < b; ++e) d[e] = g(a, this.Bg.bind(this, e));
                        else d[0] = h(a, this.Bg.bind(this, 0));
                        this.Fd = d;
                        this.Cg = [];
                        this.Dd = 0;
                        this.wc = {};
                        this.Me = null
                    }
                    var l = a("./util").sm;
                    k.prototype.destroy = function() {
                        for (var a in this) this[a] = null;
                        this.lj = !0
                    };
                    k.prototype.mj = function() {
                        if (0 === this.Dd && 0 < this.Cg.length) {
                            var a = this.Me = this.Cg.shift(),
                                b = a.Fc[0].width,
                                d = a.Fc[0].height,
                                e = a.Fc.map(function(a) {
                                    return a.data.buffer
                                }),
                                f = this.Fd.length;
                            this.Dd = f;
                            if (1 === f) this.Fd[0].postMessage({
                                buffers: e,
                                meta: a.gm,
                                imageOps: this.Le,
                                width: b,
                                height: d
                            }, e);
                            else
                                for (var g = 4 * Math.ceil(a.Fc[0].data.length / 4 / f), h = 0; h < f; ++h) {
                                    for (var k = h * g, l = [], I = 0, N = e.length; I < N; ++I) l.push(e[h].slice(k, k + g));
                                    this.Fd[h].postMessage({
                                        buffers: l,
                                        meta: a.gm,
                                        imageOps: this.Le,
                                        width: b,
                                        height: d
                                    }, l)
                                }
                        }
                    };
                    k.prototype.Bg = function(a, b) {
                        this.lj || (this.wc[a] = b.data, --this.Dd, 0 === this.Dd && this.pj())
                    };
                    k.prototype.pj = function() {
                        var a = this.Me,
                            b = this.Fd.length,
                            d, e;
                        if (1 === b) d = new Uint8ClampedArray(this.wc[0].buffer), e = this.wc[0].meta;
                        else {
                            var f = a.Fc[0].data.length;
                            d = new Uint8ClampedArray(f);
                            e = Array(f);
                            for (var f = 4 * Math.ceil(f / 4 / b), g = 0; g < b; ++g) {
                                var h = g * f;
                                d.set(new Uint8ClampedArray(this.wc[g].buffer), h);
                                e[g] = this.wc[g].meta
                            }
                        }
                        this.Me = null;
                        this.wc = {};
                        a.callback(null, l(d, a.Fc[0].width, a.Fc[0].height), e);
                        this.mj()
                    };
                    b.ea = k
                }, {
                    "./util": 3
                }],
                3: [function(a, b, f) {
                    var g = !0;
                    try {
                        new ImageData(10, 10)
                    } catch (k) {
                        g = !1
                    }
                    var h = document.createElement("canvas").getContext("2d");
                    f.sm = function(a, b, d) {
                        if (g) return new ImageData(a, b, d);
                        b = h.createImageData(b, d);
                        b.data.set(a);
                        return b
                    }
                }, {}]
            }, {}, [1])(1)
        })
    })();

    function Ls(a) {
        console.assert(a.Fa.length == a.lc.length, "options resolutions and matrixIds must have equal length (%s == %s)", a.Fa.length, a.lc.length);
        this.i = a.lc;
        Od.call(this, {
            extent: a.extent,
            origin: a.origin,
            le: a.le,
            Fa: a.Fa,
            tileSize: a.tileSize,
            De: a.De,
            sizes: a.sizes
        })
    }
    v(Ls, Od);

    function Ms(a, b) {
        console.assert(0 <= b && b < a.i.length, "attempted to retrieve matrixId for illegal z (%s)", b);
        return a.i[b]
    }

    function Ns(a, b) {
        var c = [],
            d = [],
            e = [],
            f = [],
            g = [],
            h;
        h = jc(a.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3"));
        var k = nc(h),
            l = "ne" == h.c.substr(0, 2);
        a.TileMatrix.sort(function(a, b) {
            return b.ScaleDenominator - a.ScaleDenominator
        });
        a.TileMatrix.forEach(function(a) {
            d.push(a.Identifier);
            var b = 2.8E-4 * a.ScaleDenominator / k,
                h = a.TileWidth,
                r = a.TileHeight;
            l ? e.push([a.TopLeftCorner[1], a.TopLeftCorner[0]]) : e.push(a.TopLeftCorner);
            c.push(b);
            f.push(h == r ? h : [h, r]);
            g.push([a.MatrixWidth, -a.MatrixHeight])
        });
        return new Ls({
            extent: b,
            le: e,
            Fa: c,
            lc: d,
            De: f,
            sizes: g
        })
    };

    function Os(a) {
        function b(a) {
            a = d == Ps ? Ds(a, f) : a.replace(/\{(\w+?)\}/g, function(a, b) {
                return b.toLowerCase() in f ? f[b.toLowerCase()] : a
            });
            return function(b) {
                if (b) {
                    var c = {
                        TileMatrix: Ms(e, b[0]),
                        TileCol: b[1],
                        TileRow: -b[2] - 1
                    };
                    Ea(c, g);
                    b = a;
                    return b = d == Ps ? Ds(b, c) : b.replace(/\{(\w+?)\}/g, function(a, b) {
                        return c[b]
                    })
                }
            }
        }
        this.ra = void 0 !== a.version ? a.version : "1.0.0";
        this.R = void 0 !== a.format ? a.format : "image/jpeg";
        this.o = void 0 !== a.dimensions ? a.dimensions : {};
        this.fa = a.layer;
        this.H = a.matrixSet;
        this.ja = a.style;
        var c = a.Za;
        void 0 === c && void 0 !== a.url && (c = ms(a.url));
        var d = this.Ca = void 0 !== a.requestEncoding ? a.requestEncoding : Ps,
            e = a.oa,
            f = {
                layer: this.fa,
                style: this.ja,
                tilematrixset: this.H
            };
        d == Ps && Ea(f, {
            Service: "WMTS",
            Request: "GetTile",
            Version: this.ra,
            Format: this.R
        });
        var g = this.o,
            h = c && 0 < c.length ? ks(c.map(b)) : ls;
        ws.call(this, {
            la: a.la,
            bb: a.bb,
            crossOrigin: a.crossOrigin,
            ua: a.ua,
            projection: a.projection,
            Zb: a.Zb,
            qd: a.qd,
            oa: e,
            Xa: a.Xa,
            Nb: a.Nb,
            Db: h,
            Za: c,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !1
        });
        qs(this, Qs(this))
    }
    v(Os, ws);
    Os.prototype.Pa = function() {
        return this.fa
    };
    Os.prototype.hc = function() {
        return this.ja
    };

    function Qs(a) {
        var b = 0,
            c = [],
            d;
        for (d in a.o) c[b++] = d + "-" + a.o[d];
        return c.join("/")
    }
    Os.prototype.Fe = function(a) {
        Ea(this.o, a);
        qs(this, Qs(this))
    };

    function Rs(a, b) {
        console.assert(b.layer, 'config "layer" must not be null');
        var c = gb(a.Contents.Layer, function(a) {
            return a.Identifier == b.layer
        });
        console.assert(c, "found a matching layer in Contents/Layer");
        console.assert(0 < c.TileMatrixSetLink.length, "layer has TileMatrixSetLink");
        var d = a.Contents.TileMatrixSet,
            e, f;
        e = 1 < c.TileMatrixSetLink.length ? "projection" in b ? kb(c.TileMatrixSetLink, function(a) {
            return gb(d, function(b) {
                return b.Identifier == a.TileMatrixSet
            }).SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/,
                "$1:$3") == b.projection
        }) : kb(c.TileMatrixSetLink, function(a) {
            return a.TileMatrixSet == b.matrixSet
        }) : 0;
        0 > e && (e = 0);
        f = c.TileMatrixSetLink[e].TileMatrixSet;
        console.assert(f, "TileMatrixSet must not be null");
        var g = c.Format[0];
        "format" in b && (g = b.format);
        e = kb(c.Style, function(a) {
            return "style" in b ? a.Title == b.style : a.isDefault
        });
        0 > e && (e = 0);
        e = c.Style[e].Identifier;
        var h = {};
        "Dimension" in c && c.Dimension.forEach(function(a) {
            var b = a.Identifier,
                c = a.Default;
            void 0 !== c ? console.assert(cb(a.Value, c), "default value contained in values") :
                c = a.Value[0];
            console.assert(void 0 !== c, "value could be found");
            h[b] = c
        });
        var k = gb(a.Contents.TileMatrixSet, function(a) {
            return a.Identifier == f
        });
        console.assert(k, "found matrixSet in Contents/TileMatrixSet");
        var l;
        l = "projection" in b ? jc(b.projection) : jc(k.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3"));
        var n = c.WGS84BoundingBox,
            q, p;
        void 0 !== n && (p = jc("EPSG:4326").K(), p = n[0] == p[0] && n[2] == p[2], q = zc(n, "EPSG:4326", l), (n = l.K()) && (Gb(n, q) || (q = void 0)));
        var k = Ns(k, q),
            r = [];
        q = b.requestEncoding;
        q = void 0 !== q ? q : "";
        console.assert(cb(["REST", "RESTful", "KVP", ""], q), 'requestEncoding (%s) is one of "REST", "RESTful", "KVP" or ""', q);
        if ("OperationsMetadata" in a && "GetTile" in a.OperationsMetadata) {
            n = a.OperationsMetadata.GetTile.DCP.HTTP.Get;
            console.assert(1 <= n.length);
            for (var u = 0, z = n.length; u < z; ++u) {
                var w = gb(n[u].Constraint, function(a) {
                    return "GetEncoding" == a.name
                }).AllowedValues.Value;
                console.assert(1 <= w.length);
                "" === q && (q = w[0]);
                if (q === Ps) cb(w, Ps) && r.push(n[u].href);
                else break
            }
        }
        0 === r.length && (q = Ss,
            c.ResourceURL.forEach(function(a) {
                "tile" === a.resourceType && (g = a.format, r.push(a.template))
            }));
        console.assert(0 < r.length, "At least one URL found");
        return {
            Za: r,
            layer: b.layer,
            matrixSet: f,
            format: g,
            projection: l,
            requestEncoding: q,
            oa: k,
            style: e,
            dimensions: h,
            wrapX: p
        }
    }
    var Ps = "KVP",
        Ss = "REST";

    function Ts(a) {
        console.assert(void 0 !== a.radius || void 0 !== a.Nn, 'must provide either "radius" or "radius1"');
        this.O = this.D = this.o = null;
        this.i = void 0 !== a.fill ? a.fill : null;
        this.R = [0, 0];
        this.b = a.points;
        this.f = void 0 !== a.radius ? a.radius : a.Nn;
        this.j = void 0 !== a.Yh ? a.Yh : this.f;
        this.v = void 0 !== a.angle ? a.angle : 0;
        this.c = void 0 !== a.stroke ? a.stroke : null;
        this.N = this.sa = this.V = null;
        var b = this.H = a.Oe,
            c = "",
            d = "",
            e = 0,
            f = null,
            g, h = 0;
        this.c && (g = ye(this.c.b), h = this.c.c, void 0 === h && (h = 1), f = this.c.f, Re || (f = null), d = this.c.o,
            void 0 === d && (d = "round"), c = this.c.g, void 0 === c && (c = "round"), e = this.c.i, void 0 === e && (e = 10));
        var k = 2 * (this.f + h) + 1,
            c = {
                strokeStyle: g,
                strokeWidth: h,
                size: k,
                lineCap: c,
                X: f,
                lineJoin: d,
                miterLimit: e
            };
        if (void 0 === b) {
            var l = Ae(k, k);
            this.D = l.canvas;
            b = k = this.D.width;
            this.Sh(c, l, 0, 0);
            this.i ? this.O = this.D : (l = Ae(c.size, c.size), this.O = l.canvas, this.Rh(c, l, 0, 0))
        } else k = Math.round(k), (d = !this.i) && (l = this.Rh.bind(this, c)), e = this.c ? ai(this.c) : "-", f = this.i ? bi(this.i) : "-", this.o && e == this.o[1] && f == this.o[2] && this.f == this.o[3] &&
            this.j == this.o[4] && this.v == this.o[5] && this.b == this.o[6] || (this.o = ["r" + e + f + (void 0 !== this.f ? this.f.toString() : "-") + (void 0 !== this.j ? this.j.toString() : "-") + (void 0 !== this.v ? this.v.toString() : "-") + (void 0 !== this.b ? this.b.toString() : "-"), e, f, this.f, this.j, this.v, this.b]), l = b.add(this.o[0], k, k, this.Sh.bind(this, c), l), console.assert(l, "shape size is too large"), this.D = l.image, this.R = [l.offsetX, l.offsetY], b = l.image.width, this.O = d ? l.b : this.D;
        this.V = [k / 2, k / 2];
        this.sa = [k, k];
        this.N = [b, b];
        Yh.call(this, {
            opacity: 1,
            ub: void 0 !== a.ub ? a.ub : !1,
            rotation: void 0 !== a.rotation ? a.rotation : 0,
            scale: 1,
            fb: void 0 !== a.fb ? a.fb : !0
        })
    }
    v(Ts, Yh);
    m = Ts.prototype;
    m.clone = function() {
        var a = new Ts({
            fill: this.i ? this.i.clone() : void 0,
            points: this.j !== this.f ? this.b / 2 : this.b,
            radius: this.f,
            Yh: this.j,
            angle: this.v,
            fb: this.C,
            stroke: this.c ? this.c.clone() : void 0,
            rotation: this.s,
            ub: this.F,
            Oe: this.H
        });
        a.g = this.g;
        a.ga = this.Da();
        return a
    };
    m.Yc = function() {
        return this.V
    };
    m.Pf = function() {
        return this.O
    };
    m.gd = function() {
        return this.D
    };
    m.Ud = function() {
        return this.N
    };
    m.Kc = function() {
        return Sh
    };
    m.hd = function() {
        return this.R
    };
    m.Jb = function() {
        return this.sa
    };
    m.Gf = ta;
    m.load = ta;
    m.pg = ta;
    m.Sh = function(a, b, c, d) {
        var e;
        b.setTransform(1, 0, 0, 1, 0, 0);
        b.translate(c, d);
        b.beginPath();
        this.j !== this.f && (this.b *= 2);
        for (c = 0; c <= this.b; c++) d = 2 * c * Math.PI / this.b - Math.PI / 2 + this.v, e = 0 === c % 2 ? this.f : this.j, b.lineTo(a.size / 2 + e * Math.cos(d), a.size / 2 + e * Math.sin(d));
        this.i && (b.fillStyle = ye(this.i.b), b.fill());
        this.c && (b.strokeStyle = a.strokeStyle, b.lineWidth = a.strokeWidth, a.X && b.setLineDash(a.X), b.lineCap = a.lineCap, b.lineJoin = a.lineJoin, b.miterLimit = a.miterLimit, b.stroke());
        b.closePath()
    };
    m.Rh = function(a, b, c, d) {
        b.setTransform(1, 0, 0, 1, 0, 0);
        b.translate(c, d);
        b.beginPath();
        this.j !== this.f && (this.b *= 2);
        var e;
        for (c = 0; c <= this.b; c++) e = 2 * c * Math.PI / this.b - Math.PI / 2 + this.v, d = 0 === c % 2 ? this.f : this.j, b.lineTo(a.size / 2 + d * Math.cos(e), a.size / 2 + d * Math.sin(e));
        b.fillStyle = Uh;
        b.fill();
        this.c && (b.strokeStyle = a.strokeStyle, b.lineWidth = a.strokeWidth, a.X && b.setLineDash(a.X), b.stroke());
        b.closePath()
    };

    function Us(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }

    function Vs(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }

    function Ws(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    }

    function Xs(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    }
    var Ys = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Zs(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Ys.length; f++) c = Ys[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };

    function $s(a) {
        function b(a) {
            a.each(function(a) {
                function e() {
                    var a = d3.mouse(this)[0],
                        a = I.invert(a);
                    b.highlight(a)
                }

                function f() {
                    b.Ng()
                }
                d3.select(this).selectAll("svg").remove();
                if (void 0 !== a) {
                    T = Math.max(this.clientWidth - d.right - d.left, 0);
                    I = d3.scale.linear().range([0, T]);
                    y = Math.max(this.clientHeight - d.top - d.bottom, 0);
                    N = d3.scale.linear().range([y, 0]);
                    var l = d3.svg.axis().scale(I).orient("bottom"),
                        n = d3.svg.axis().scale(N).orient("left"),
                        p;
                    1 === k && (p = d3.svg.area().x(function(a) {
                        return I(g(a))
                    }).y0(y).y1(function(a) {
                        var b =
                            Object.keys(h)[0];
                        return N(h[b].zExtractor(a))
                    }));
                    F = d3.select(this).selectAll("svg").data([a]);
                    var r = F.enter().append("svg");
                    void 0 !== q && r.append("defs").append("style").attr("type", "text/css").text(q);
                    r = r.append("g");
                    b.si([]);
                    r.style("font", "11px Arial");
                    1 === k && r.append("path").attr("class", "area").style("fill", "rgba(222, 222, 222, 0.5)");
                    r.insert("g", ":first-child").attr("class", "grid-y");
                    c || (r.append("g").attr("class", "x axis").attr("transform", "translate(0," + y + ")"), r.append("text").attr("class",
                        "x label").attr("text-anchor", "end").attr("x", T - 4).attr("y", y - 4), r.append("g").attr("class", "y axis"), r.append("text").attr("class", "y label").attr("text-anchor", "end").attr("y", 6).attr("dy", ".75em").attr("transform", "rotate(-90)").style("fill", "grey").text(z + " [m]"), r.append("g").attr("class", "metas").attr("transform", "translate(" + (T + 3) + ", 0)"));
                    r.append("g").attr("class", "pois");
                    var M = r.append("g").attr("class", "x grid-hover");
                    M.append("svg:line").attr("stroke-dasharray", "5,5");
                    M.append("text");
                    r.append("rect").attr("class", "overlay").attr("width", T).attr("height", y).style("fill", "none").style("pointer-events", "all");
                    F.attr("width", T + d.left + d.right).attr("height", y + d.top + d.bottom);
                    U = F.select("g").attr("transform", "translate(" + d.left + "," + d.top + ")");
                    K = d3.extent(a, function(a) {
                        return g(a)
                    });
                    I.domain(K);
                    M = function() {
                        var b = [],
                            c, d;
                        for (d in h) c = d3.extent(a, function(a) {
                            return h[d].zExtractor(a)
                        }), b = b.concat(c);
                        return [Math.min.apply(null, b), Math.max.apply(null, b)]
                    }();
                    N.domain(M);
                    if (void 0 !== fa) fa(I,
                        N, T, y);
                    else {
                        var ss = .1 * (M[1] - M[0]);
                        N.domain([M[0] - ss, M[1] + ss])
                    }
                    1 === k && U.select(".area").transition().attr("d", p);
                    for (var $h in h) r.append("path").attr("class", "line " + $h).style("stroke", h[$h].color || "#F00").style("fill", "none"), p = r.append("g").attr("class", "y grid-hover " + $h), p.append("svg:line").attr("stroke-dasharray", "5,5"), p.append("text"), p = d3.svg.line().x(function(a) {
                        return I(g(a))
                    }).y(function(a) {
                        return N(h[$h].zExtractor(a))
                    }), U.select(".line." + $h).transition().attr("d", p);
                    2E3 < K[1] ? (P = 1E3,
                        W = "km") : (P = 1, W = "m");
                    c || (l.tickFormat(function(a) {
                        return w.xtick(a / P, W)
                    }), H && l.tickValues([0, I.domain()[1]]), n.tickFormat(function(a) {
                        return w.ytick(a, "m")
                    }), U.select(".x.axis").transition().call(l), U.select(".x.label").text(u + " [" + W + "]").style("fill", "grey").style("shape-rendering", "crispEdges"), 10 > y / 15 && n.ticks(y / 15), U.select(".y.axis").transition().call(n));
                    U.select(".grid-y").transition().call(n.tickSize(-T, 0).tickFormat("")).selectAll(".tick line").style("stroke", "#ccc").style("opacity", .7);
                    U.selectAll(".axis").selectAll("path, line").style("fill",
                        "none").style("stroke", "#000").style("shape-rendering", "crispEdges");
                    U.selectAll(".grid-hover line").style("stroke", "#222").style("opacity", .8);
                    U.select(".overlay").on("mouseout", f).on("mousemove", e)
                }
            })
        }
        var c = void 0 !== a.light ? a.light : !1,
            d = c ? {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            } : {
                top: 10,
                right: 20,
                bottom: 30,
                left: 40
            },
            e = void 0 !== a.hoverCallback ? a.hoverCallback : ta,
            f = void 0 !== a.outCallback ? a.outCallback : ta,
            g = a.distanceExtractor,
            h = a.linesConfiguration,
            k = Object.keys(h).length,
            l = d3.bisector(function(a) {
                return g(a)
            }).left,
            n = a.poiExtractor,
            q = a.styleDefs,
            p = void 0 !== a.poiLabelAngle ? a.poiLabelAngle : -60,
            r = a.i18n || {},
            u = r.xAxis || "Distance",
            z = r.yAxis || "Elevation",
            w = {
                xhover: function(a, b) {
                    return parseFloat(a.toPrecision(3)) + " " + b
                },
                yhover: function(a) {
                    return Math.round(a) + " m"
                },
                xtick: function(a) {
                    return a
                },
                ytick: function(a) {
                    return a
                }
            };
        void 0 !== a.formatter && Zs(w, a.formatter);
        var H = void 0 !== a.lightXAxis ? a.lightXAxis : !1,
            F, I, N, fa = a.scaleModifier,
            U, y, T, P, W, K;
        b.Ng = function() {
            U.selectAll(".grid-hover").style("display", "none");
            f.call(null)
        };
        b.highlight = function(a) {
            var b = F.datum();
            a = l(b, a);
            if (!(a >= b.length)) {
                b = b[a];
                a = g(b);
                var c, d = [],
                    f = {},
                    n;
                for (n in h) c = h[n].zExtractor(b), d.push(c), f[n] = c, U.select(".y.grid-hover." + n).style("display", "inline").select("line").attr("x1", I(0)).attr("y1", N(c)).attr("x2", T).attr("y2", N(c));
                U.select(".x.grid-hover").style("display", "inline").select("line").attr("x1", I(a)).attr("y1", y).attr("x2", I(a)).attr("y2", N(Math.max.apply(null, d)));
                n = a > K[1] / 2;
                c = I(a);
                c += n ? -10 : 10;
                U.select(".x.grid-hover text").text(w.xhover(a /
                    P, W)).style("text-anchor", n ? "end" : "start").attr("transform", "translate(" + c + "," + (y - 10) + ")");
                1 === k && U.select(".y.grid-hover text").text(w.yhover(d[0], "m")).style("text-anchor", n ? "end" : "start").attr("transform", "translate(" + c + "," + (N(d[0]) - 10) + ")");
                e.call(null, b, a / P, W, f, "m")
            }
        };
        b.si = function(a) {
            a = void 0 !== a ? a : [];
            var b = F.select("g"),
                d = F.datum();
            a = b.select(".pois").selectAll(".poi").data(a, function(a) {
                var b = l(d, Math.round(10 * n.dist(a)) / 10, 1);
                if (b = d[b]) {
                    var c, e = [];
                    for (c in h) e.push(h[c].zExtractor(b));
                    c =
                        Math.max.apply(null, e);
                    n.z(a, c)
                }
                return n.id(a)
            });
            b = a.enter().append("g").attr("class", "poi");
            b.append("text").attr("x", c ? 0 : 9).attr("dy", ".35em").attr("text-anchor", c ? "middle" : "start");
            b.append("line").style("shape-rendering", "crispEdges");
            a.style("opacity", 0).transition().duration(1E3).delay(100).style("opacity", 1);
            a.selectAll("text").attr("transform", function(a) {
                return c ? ["translate(", I(n.dist(a)), ",", N(n.z(a)) - 10, ")"].join("") : ["translate(", I(n.dist(a)), ",", N(n.z(a)) - 20, ") rotate(", p, ")"].join("")
            }).text(function(a) {
                return n.sort(a) +
                    (c ? "" : " - " + n.title(a))
            });
            a.selectAll("line").style("stroke", "grey").attr("x1", function(a) {
                return I(n.dist(a))
            }).attr("y1", function() {
                return N(N.domain()[0])
            }).attr("x2", function(a) {
                return I(n.dist(a))
            }).attr("y2", function(a) {
                return N(n.z(a))
            });
            a.exit().remove()
        };
        return b
    }
    t("ngeo.profile", $s);
    var V = angular.module("ngeo", ["gettext", "ui.date", "floatThead"]);
    t("ngeo.FeatureProperties", {
        ANGLE: "a",
        COLOR: "c",
        IS_CIRCLE: "l",
        IS_RECTANGLE: "r",
        IS_TEXT: "t",
        NAME: "n",
        OPACITY: "o",
        AZIMUT: "z",
        SHOW_MEASURE: "m",
        SIZE: "s",
        STROKE: "k"
    });
    t("ngeo.GeometryType", {
        CIRCLE: "Circle",
        LINE_STRING: "LineString",
        MULTI_LINE_STRING: "MultiLineString",
        MULTI_POINT: "MultiPoint",
        MULTI_POLYGON: "MultiPolygon",
        POINT: "Point",
        POLYGON: "Polygon",
        RECTANGLE: "Rectangle",
        TEXT: "Text"
    });
    var at;
    var bt = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    };

    function ct(a) {
        if (!dt.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(et, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(ft, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(gt, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(ht, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(it, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(jt, "&#0;"));
        return a
    }
    var et = /&/g,
        ft = /</g,
        gt = />/g,
        ht = /"/g,
        it = /'/g,
        jt = /\x00/g,
        dt = /[\x00&<>"']/;

    function kt(a, b) {
        return -1 != a.indexOf(b)
    }

    function lt(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function mt(a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    }

    function nt(a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    }

    function ot(a, b) {
        return Array.prototype.map.call(a, b, void 0)
    }

    function pt(a, b) {
        return 0 <= Array.prototype.indexOf.call(a, b, void 0)
    }

    function qt(a) {
        return Array.prototype.concat.apply(Array.prototype, arguments)
    }

    function rt(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function st(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    var tt;
    a: {
        var ut = aa.navigator;
        if (ut) {
            var vt = ut.userAgent;
            if (vt) {
                tt = vt;
                break a
            }
        }
        tt = ""
    };
    var wt = kt(tt, "Opera"),
        xt = kt(tt, "Trident") || kt(tt, "MSIE"),
        yt = kt(tt, "Edge"),
        zt = kt(tt, "Gecko") && !(kt(tt.toLowerCase(), "webkit") && !kt(tt, "Edge")) && !(kt(tt, "Trident") || kt(tt, "MSIE")) && !kt(tt, "Edge"),
        At = kt(tt.toLowerCase(), "webkit") && !kt(tt, "Edge"),
        Bt = kt(tt, "Macintosh");

    function Ct() {
        var a = aa.document;
        return a ? a.documentMode : void 0
    }
    var Dt;
    a: {
        var Et = "",
            Ft = function() {
                var a = tt;
                if (zt) return /rv\:([^\);]+)(\)|;)/.exec(a);
                if (yt) return /Edge\/([\d\.]+)/.exec(a);
                if (xt) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (At) return /WebKit\/(\S+)/.exec(a);
                if (wt) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Ft && (Et = Ft ? Ft[1] : "");
        if (xt) {
            var Gt = Ct();
            if (null != Gt && Gt > parseFloat(Et)) {
                Dt = String(Gt);
                break a
            }
        }
        Dt = Et
    }
    var Ht = {};

    function It(a) {
        var b;
        if (!(b = Ht[a])) {
            b = 0;
            for (var c = bt(String(Dt)).split("."), d = bt(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var g = c[f] || "",
                    h = d[f] || "",
                    k = RegExp("(\\d*)(\\D*)", "g"),
                    l = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var n = k.exec(g) || ["", "", ""],
                        q = l.exec(h) || ["", "", ""];
                    if (0 == n[0].length && 0 == q[0].length) break;
                    b = lt(0 == n[1].length ? 0 : parseInt(n[1], 10), 0 == q[1].length ? 0 : parseInt(q[1], 10)) || lt(0 == n[2].length, 0 == q[2].length) || lt(n[2], q[2])
                } while (0 == b)
            }
            b = Ht[a] = 0 <= b
        }
        return b
    }
    var Jt = aa.document,
        Kt = Jt && xt ? Ct() || ("CSS1Compat" == Jt.compatMode ? parseInt(Dt, 10) : 5) : void 0;
    var Lt = !xt || 9 <= Number(Kt),
        Mt = !xt || 9 <= Number(Kt),
        Nt = xt && !It("9");
    !At || It("528");
    zt && It("1.9b") || xt && It("8") || wt && It("9.5") || At && It("528");
    zt && !It("8") || xt && It("9");

    function Ot() {
        0 != Pt && (Qt[ka(this)] = this);
        this.s = this.s;
        this.o = this.o
    }
    var Pt = 0,
        Qt = {};
    Ot.prototype.s = !1;
    Ot.prototype.Ma = function() {
        if (!this.s && (this.s = !0, this.ob(), 0 != Pt)) {
            var a = ka(this);
            delete Qt[a]
        }
    };
    Ot.prototype.ob = function() {
        if (this.o)
            for (; this.o.length;) this.o.shift()()
    };

    function Rt(a) {
        a && "function" == typeof a.Ma && a.Ma()
    };

    function St(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.c = !1;
        this.mi = !0
    }
    St.prototype.stopPropagation = function() {
        this.c = !0
    };
    St.prototype.preventDefault = function() {
        this.defaultPrevented = !0;
        this.mi = !1
    };

    function Tt(a) {
        Tt[" "](a);
        return a
    }
    Tt[" "] = function() {};

    function Ut(a, b) {
        St.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.f = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.j = !1;
        this.b = this.state = null;
        a && this.init(a, b)
    }
    sa(Ut, St);
    var Vt = [1, 4, 2];
    Ut.prototype.init = function(a, b) {
        var c = this.type = a.type,
            d = a.changedTouches ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var e = a.relatedTarget;
        if (e) {
            if (zt) {
                var f;
                a: {
                    try {
                        Tt(e.nodeName);
                        f = !0;
                        break a
                    } catch (g) {}
                    f = !1
                }
                f || (e = null)
            }
        } else "mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
        this.relatedTarget = e;
        null === d ? (this.offsetX = At || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = At || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX :
            a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);
        this.button = a.button;
        this.f = a.keyCode || 0;
        this.j = a.ctrlKey;
        this.state = a.state;
        this.b = a;
        a.defaultPrevented && this.preventDefault()
    };
    Ut.prototype.stopPropagation = function() {
        Ut.hb.stopPropagation.call(this);
        this.b.stopPropagation ? this.b.stopPropagation() : this.b.cancelBubble = !0
    };
    Ut.prototype.preventDefault = function() {
        Ut.hb.preventDefault.call(this);
        var a = this.b;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, Nt) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var Wt = "closure_listenable_" + (1E6 * Math.random() | 0),
        Xt = 0;

    function Yt(a, b, c, d, e) {
        this.listener = a;
        this.b = null;
        this.src = b;
        this.type = c;
        this.Od = !!d;
        this.de = e;
        this.key = ++Xt;
        this.Mc = this.dc = !1
    }

    function Zt(a) {
        a.Mc = !0;
        a.listener = null;
        a.b = null;
        a.src = null;
        a.de = null
    };

    function $t(a) {
        this.src = a;
        this.listeners = {};
        this.b = 0
    }
    $t.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.listeners[f];
        a || (a = this.listeners[f] = [], this.b++);
        var g = au(a, b, d, e); - 1 < g ? (b = a[g], c || (b.dc = !1)) : (b = new Yt(b, this.src, f, !!d, e), b.dc = c, a.push(b));
        return b
    };
    $t.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.listeners)) return !1;
        var e = this.listeners[a];
        b = au(e, b, c, d);
        return -1 < b ? (Zt(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.listeners[a], this.b--), !0) : !1
    };

    function bu(a, b) {
        var c = b.type;
        if (c in a.listeners) {
            var d = a.listeners[c],
                e = Array.prototype.indexOf.call(d, b, void 0),
                f;
            (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
            f && (Zt(b), 0 == a.listeners[c].length && (delete a.listeners[c], a.b--))
        }
    }

    function cu(a, b, c, d, e) {
        a = a.listeners[b.toString()];
        b = -1;
        a && (b = au(a, c, d, e));
        return -1 < b ? a[b] : null
    }

    function au(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.Mc && f.listener == b && f.Od == !!c && f.de == d) return e
        }
        return -1
    };
    var du = "closure_lm_" + (1E6 * Math.random() | 0),
        eu = {},
        fu = 0;

    function gu(a, b, c, d, e) {
        if (da(b)) {
            for (var f = 0; f < b.length; f++) gu(a, b[f], c, d, e);
            return null
        }
        c = hu(c);
        if (a && a[Wt]) a = a.listen(b, c, d, e);
        else {
            if (!b) throw Error("Invalid event type");
            var f = !!d,
                g = iu(a);
            g || (a[du] = g = new $t(a));
            c = g.add(b, c, !1, d, e);
            if (!c.b) {
                d = ju();
                c.b = d;
                d.src = a;
                d.listener = c;
                if (a.addEventListener) a.addEventListener(b.toString(), d, f);
                else if (a.attachEvent) a.attachEvent(ku(b.toString()), d);
                else throw Error("addEventListener and attachEvent are unavailable.");
                fu++
            }
            a = c
        }
        return a
    }

    function ju() {
        var a = lu,
            b = Mt ? function(c) {
                return a.call(b.src, b.listener, c)
            } : function(c) {
                c = a.call(b.src, b.listener, c);
                if (!c) return c
            };
        return b
    }

    function mu(a, b, c, d, e) {
        if (da(b))
            for (var f = 0; f < b.length; f++) mu(a, b[f], c, d, e);
        else c = hu(c), a && a[Wt] ? a.Oc(b, c, d, e) : a && (a = iu(a)) && (b = cu(a, b, c, !!d, e)) && nu(b)
    }

    function nu(a) {
        if (!ia(a) && a && !a.Mc) {
            var b = a.src;
            if (b && b[Wt]) bu(b.j, a);
            else {
                var c = a.type,
                    d = a.b;
                b.removeEventListener ? b.removeEventListener(c, d, a.Od) : b.detachEvent && b.detachEvent(ku(c), d);
                fu--;
                (c = iu(b)) ? (bu(c, a), 0 == c.b && (c.src = null, b[du] = null)) : Zt(a)
            }
        }
    }

    function ku(a) {
        return a in eu ? eu[a] : eu[a] = "on" + a
    }

    function ou(a, b, c, d) {
        var e = !0;
        if (a = iu(a))
            if (b = a.listeners[b.toString()])
                for (b = b.concat(), a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.Od == c && !f.Mc && (f = pu(f, d), e = e && !1 !== f)
                }
        return e
    }

    function pu(a, b) {
        var c = a.listener,
            d = a.de || a.src;
        a.dc && nu(a);
        return c.call(d, b)
    }

    function lu(a, b) {
        if (a.Mc) return !0;
        if (!Mt) {
            var c;
            if (!(c = b)) a: {
                c = ["window", "event"];
                for (var d = aa, e; e = c.shift();)
                    if (null != d[e]) d = d[e];
                    else {
                        c = null;
                        break a
                    }
                c = d
            }
            e = c;
            c = new Ut(e, this);
            d = !0;
            if (!(0 > e.keyCode || void 0 != e.returnValue)) {
                a: {
                    var f = !1;
                    if (0 == e.keyCode) try {
                        e.keyCode = -1;
                        break a
                    } catch (k) {
                        f = !0
                    }
                    if (f || void 0 == e.returnValue) e.returnValue = !0
                }
                e = [];
                for (f = c.currentTarget; f; f = f.parentNode) e.push(f);
                for (var f = a.type, g = e.length - 1; !c.c && 0 <= g; g--) {
                    c.currentTarget = e[g];
                    var h = ou(e[g], f, !0, c),
                        d = d && h
                }
                for (g = 0; !c.c && g <
                    e.length; g++) c.currentTarget = e[g],
                h = ou(e[g], f, !1, c),
                d = d && h
            }
            return d
        }
        return pu(a, new Ut(b, this))
    }

    function iu(a) {
        a = a[du];
        return a instanceof $t ? a : null
    }
    var qu = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function hu(a) {
        if ("function" == ca(a)) return a;
        a[qu] || (a[qu] = function(b) {
            return a.handleEvent(b)
        });
        return a[qu]
    };

    function ru() {
        this.b = {}
    }
    ru.prototype.Hd = function(a, b, c) {
        this.b[a] || su(this, a);
        (void 0 !== c ? c : 1) ? this.b[a].ie.push(b): this.b[a].$d.push(b)
    };
    ru.prototype.addListenerKey = ru.prototype.Hd;
    ru.prototype.Te = function(a) {
        su(this, a)
    };
    ru.prototype.clearListenerKey = ru.prototype.Te;

    function su(a, b) {
        a.b[b] ? (a.b[b].$d.length && (a.b[b].$d.forEach(function(a) {
            nu(a)
        }, a), a.b[b].$d.length = 0), a.b[b].ie.length && (a.b[b].ie.forEach(function(a) {
            Ja(a)
        }, a), a.b[b].ie.length = 0)) : a.b[b] = {
            $d: [],
            ie: []
        }
    }
    V.service("ngeoEventHelper", ru);
    V.directive("ngeoAttributes", function() {
        return {
            controller: "ngeoAttributesController",
            scope: !0,
            bindToController: {
                attributes: "=ngeoAttributesAttributes",
                disabled: "<ngeoAttributesDisabled",
                feature: "=ngeoAttributesFeature"
            },
            controllerAs: "attrCtrl",
            templateUrl: "ngeo/attributes.html"
        }
    });

    function tu(a, b) {
        this.disabled = !0 === this.disabled;
        this.properties = ab(this.feature);
        this.j = a;
        this.c = b;
        this.dateOptions = {
            changeMonth: !0,
            changeYear: !0
        };
        var c = x(this);
        this.c.Hd(c, A(this.feature, "propertychange", this.f, this), !0);
        this.b = !1;
        a.$on("$destroy", this.g.bind(this))
    }
    tu.$inject = ["$scope", "ngeoEventHelper"];
    tu.prototype.ll = function(a) {
        this.b = !0;
        this.feature.set(a, this.properties[a]);
        this.b = !1
    };
    tu.prototype.handleInputChange = tu.prototype.ll;
    tu.prototype.g = function() {
        var a = x(this);
        this.c.Te(a)
    };
    tu.prototype.f = function(a) {
        this.b || (this.properties[a.key] = a.target.get(a.key), this.j.$apply())
    };
    V.controller("ngeoAttributesController", tu);
    var uu = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;

    function vu(a) {
        return a ? decodeURIComponent(a) : a
    }

    function wu(a) {
        var b = a.indexOf("#");
        return 0 > b ? null : a.substr(b + 1)
    }

    function xu(a, b) {
        if (a)
            for (var c = a.split("&"), d = 0; d < c.length; d++) {
                var e = c[d].indexOf("="),
                    f, g = null;
                0 <= e ? (f = c[d].substring(0, e), g = c[d].substring(e + 1)) : f = c[d];
                b(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
            }
    }

    function yu(a, b, c, d) {
        for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
            var f = a.charCodeAt(b - 1);
            if (38 == f || 63 == f)
                if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
            b += e + 1
        }
        return -1
    }
    var zu = /#|$/,
        Au = /[?&]($|#)/;

    function Bu(a, b, c) {
        for (var d = a.search(zu), e = 0, f, g = []; 0 <= (f = yu(a, e, b, d));) g.push(a.substring(e, f)), e = Math.min(a.indexOf("&", f) + 1 || d, d);
        g.push(a.substr(e));
        a = [g.join("").replace(Au, "$1"), "&", b];
        null != c && a.push("=", encodeURIComponent(String(c)));
        a[1] && (c = a[0], b = c.indexOf("#"), 0 <= b && (a.push(c.substr(b)), a[0] = c = c.substr(0, b)), b = c.indexOf("?"), 0 > b ? a[1] = "?" : b == c.length - 1 && (a[1] = void 0));
        return a.join("")
    };

    function Cu(a, b) {
        this.b = a;
        this.ib = b
    }
    Cu.$inject = ["$q", "$http"];
    Cu.prototype.Uj = function(a, b, c, d, e) {
        b = {
            LAYERS: b
        };
        var f;
        d && (b.TIME = d);
        c && (b.SERVERTYPE = c, f = c.replace("qgisserver", "qgis"));
        a = new Es({
            url: a,
            params: b,
            serverType: f
        });
        e && a.updateParams(e);
        return new Ih({
            source: a
        })
    };
    Cu.prototype.createBasicWMSLayer = Cu.prototype.Uj;
    Cu.prototype.ck = function(a, b, c) {
        var d = new qq,
            e = new Jh({
                ne: Infinity
            }),
            f = this.b;
        return this.ib.get(a).then(function(g) {
            var h;
            g.data && (h = d.read(g.data));
            return h ? (g = Rs(h, {
                layer: b
            }), g = new Os(g), c && g.Fe(c), e.set("source", g), h = gb(h.Contents.Layer, function(a) {
                return a.Identifier == b
            }), e.set("capabilitiesStyles", h.Style), f.resolve(e)) : f.reject("Failed to get WMTS capabilities from " + a)
        })
    };
    Cu.prototype.createWMTSLayerFromCapabilitites = Cu.prototype.ck;
    Cu.prototype.Pg = function(a) {
        var b = new ch;
        a && b.set(dh, a);
        return b
    };
    Cu.prototype.createBasicGroup = Cu.prototype.Pg;
    Cu.prototype.Bk = function(a, b) {
        var c;
        eh(Yj(a)).c.some(function(a) {
            return a.get("groupName") === b ? (c = a, !0) : !1
        });
        c || (c = this.Pg(), c.set("groupName", b), Xj(a, c));
        return c
    };
    Cu.prototype.getGroupFromMap = Cu.prototype.Bk;
    Cu.prototype.rf = function(a) {
        return Du(this, a, [])
    };
    Cu.prototype.getFlatLayers = Cu.prototype.rf;

    function Du(a, b, c) {
        b instanceof ch ? eh(b).forEach(function(a) {
            Du(this, a, c)
        }, a) : 0 > c.indexOf(b) && c.push(b);
        return c
    }
    Cu.prototype.kh = function(a, b) {
        var c = null;
        b.some(function(b) {
            b instanceof ch ? (b = eh(b).c, c = this.kh(a, b)) : b.get("layerNodeName") === a && (c = b);
            return !!c
        }, this);
        return c
    };
    Cu.prototype.getLayerByName = Cu.prototype.kh;
    Cu.prototype.Tk = function(a) {
        var b;
        a = a.get("capabilitiesStyles");
        void 0 !== a && (a = a[0].legendURL, void 0 !== a && (b = a[0].href));
        return b
    };
    Cu.prototype.getWMTSLegendURL = Cu.prototype.Tk;
    Cu.prototype.Sk = function(a, b, c, d) {
        if (a) return a = Bu(a, "FORMAT", "image/png"), a = Bu(a, "TRANSPARENT", !0), a = Bu(a, "SERVICE", "WMS"), a = Bu(a, "VERSION", "1.1.1"), a = Bu(a, "REQUEST", "GetLegendGraphic"), a = Bu(a, "LAYER", b), void 0 !== c && (a = Bu(a, "SCALE", c)), void 0 !== d && (a = Bu(a, "RULE", d)), a
    };
    Cu.prototype.getWMSLegendURL = Cu.prototype.Sk;

    function Eu(a, b) {
        if (!ah(a)) return !1;
        var c = td(D(b));
        return c > a.get("minResolution") && c < a.get("maxResolution")
    }
    Cu.prototype.fp = function(a, b, c) {
        0 >= b.length ? bh(a, !1) : (bh(a, !0), a = C(a), c ? a.updateParams({
            LAYERS: b,
            TIME: c
        }) : a.updateParams({
            LAYERS: b
        }))
    };
    Cu.prototype.updateWMSLayerState = Cu.prototype.fp;
    V.service("ngeoLayerHelper", Cu);
    V.value("ngeoQueryResult", {
        sources: [],
        total: 0,
        pending: !1
    });

    function Fu(a, b, c, d, e) {
        d = void 0 !== d ? d : {};
        this.dimensions = {};
        this.Ff = void 0 !== d.limit ? d.limit : 50;
        this.v = void 0 !== d.queryCountFirst ? d.queryCountFirst : !1;
        this.D = void 0 !== d.sourceIdsProperty ? d.sourceIdsProperty : "querySourceIds";
        this.C = void 0 !== d.tolerance ? d.tolerance : 3;
        this.f = void 0 !== d.featureNS ? d.featureNS : "http://mapserver.gis.umn.edu/mapserver";
        this.g = void 0 !== d.featurePrefix ? d.featurePrefix : "feature";
        this.i = void 0 !== d.geometryName ? d.geometryName : "the_geom";
        this.s = e;
        this.ib = a;
        this.o = b;
        this.Ka = c;
        this.j = [];
        this.b = {};
        this.c = []
    }
    Fu.$inject = ["$http", "$q", "ngeoQueryResult", "ngeoQueryOptions", "ngeoLayerHelper"];
    Fu.prototype.Ig = function(a) {
        var b = a.id;
        if (!a.wmsSource)
            if (a.layer && (a.layer instanceof Ih || a.layer instanceof Jh)) {
                var c = C(a.layer);
                c && c instanceof Es && (a.wmsSource = c)
            } else a.wmsSource = new Es({
                url: a.url,
                params: a.params
            });
        a.format ? !a.infoFormat && a.format instanceof pq && (a.infoFormat = "application/vnd.ogc.gml") : (a.infoFormat || (a.infoFormat = "application/vnd.ogc.gml"), c = a.wmsSource.g.LAYERS.split(","), "application/vnd.ogc.gml" === a.infoFormat && (a.format = new pq({
            layers: c
        })));
        this.j.push(a);
        c = {
            features: [],
            id: b,
            identifierAttributeField: void 0 !== a.identifierAttributeField ? a.identifierAttributeField : b,
            label: void 0 !== a.label ? a.label : b,
            pending: !1,
            queried: !1
        };
        this.Ka.sources.push(c);
        this.b[b] = {
            source: a,
            resultSource: c
        }
    };
    Fu.prototype.addSource = Fu.prototype.Ig;
    Fu.prototype.wj = function(a) {
        a.forEach(this.Ig, this)
    };
    Fu.prototype.addSources = Fu.prototype.wj;
    Fu.prototype.clear = function() {
        Gu(this)
    };
    Fu.prototype.clear = Fu.prototype.clear;
    Fu.prototype.ho = function() {
        this.Ka.sources.length = 0;
        this.j.length = 0;
        this.b = {}
    };
    Fu.prototype.removeAllSources = Fu.prototype.ho;
    Fu.prototype.ed = function(a, b) {
        Hu(this);
        Gu(this);
        if (2 === b.length) {
            var c = Iu(this, a, !1);
            Ju(this, c.hp, b, a);
            var c = c.Ei,
                d = D(a),
                d = this.C * td(d),
                d = Eb(Lb(b), d);
            Ku(this, c, d, a)
        } else c = Iu(this, a, !0), Ku(this, c.Ei, b, a);
        Lu(this)
    };
    Fu.prototype.issue = Fu.prototype.ed;

    function Iu(a, b, c) {
        var d = {},
            e = {};
        a.s.rf(Yj(b)).forEach(function(a) {
            if (Eu(a, b)) {
                var g = (a.get(this.D) || []).slice();
                if (0 !== g.length)
                    for (var h, k, l = 0, n = g.length; l < n; l++)
                        if (k = this.b[g[l]]) {
                            if (k.source.validateLayerParams) {
                                var q = C(a).g.LAYERS.split(",");
                                if (!k.source.layers.split(",").some(function(a) {
                                        return -1 < q.indexOf(a)
                                    })) continue
                            }
                            k.source.wfsQuery ? (h = k.source.lq || k.source.wmsSource.o, e[h] || (e[h] = []), Mu(k, e[h])) : c || (h = k.source.infoFormat, "application/vnd.ogc.gml" === h && (h = k.source.wmsSource.o, d[h] || (d[h] = []), Mu(k, d[h])))
                        }
            }
        }, a);
        return {
            hp: d,
            Ei: e
        }
    }

    function Mu(a, b) {
        0 > b.indexOf(a) && b.push(a)
    }

    function Ju(a, b, c, d) {
        d = D(d);
        var e = d.c.b,
            f = td(d);
        angular.forEach(b, function(a) {
            a.forEach(function(a) {
                a.resultSource.pending = !0;
                a.resultSource.queried = !0
            });
            var b = Hs(a[0].source.wmsSource, c, f, e, {
                    INFO_FORMAT: a[0].source.infoFormat,
                    FEATURE_COUNT: this.Ff
                }),
                d = Nu(a).join(","),
                b = Bu(b, "LAYERS", d),
                b = Bu(b, "QUERY_LAYERS", d);
            if (d = a[0].source.dimensions)
                for (var l in d) {
                    var n = this.dimensions[l];
                    void 0 === n && (n = d[l]);
                    void 0 !== n && (b = Bu(b, l, n))
                }
            l = Ou(this);
            this.ib.get(b, {
                timeout: l.promise
            }).then(function(a, b) {
                a.forEach(function(a) {
                    a.resultSource.pending = !1;
                    var c = a.source.format.readFeatures(b.data);
                    Pu(c, a.source.id);
                    a.resultSource.features = c;
                    this.Ka.total += c.length
                }, this);
                Lu(this)
            }.bind(this, a))
        }, a)
    }

    function Ku(a, b, c, d) {
        var e = D(d).c.b,
            f = new Fp,
            g = new XMLSerializer;
        angular.forEach(b, function(a, b) {
            a.forEach(function(a) {
                var d = Qu(a);
                if (0 != d.length && "" !== d[0]) {
                    a.resultSource.pending = !0;
                    a.resultSource.queried = !0;
                    var h = {
                            xa: e,
                            featureNS: this.f,
                            featurePrefix: this.g,
                            gf: d,
                            Qf: "GML3",
                            bbox: c,
                            geometryName: this.i
                        },
                        p = new Fp({
                            featureType: d,
                            featureNS: this.f
                        }),
                        r = function() {
                            var c = Ea({
                                    maxFeatures: this.Ff
                                }, h),
                                c = Tp(f, c),
                                c = g.serializeToString(c),
                                d = Ou(this);
                            this.ib.post(b, c, {
                                timeout: d.promise
                            }).then(function(b) {
                                a.resultSource.pending = !1;
                                b = p.readFeatures(b.data);
                                Pu(b, a.source.id);
                                a.resultSource.features = b;
                                this.Ka.total += b.length;
                                Lu(this)
                            }.bind(this))
                        }.bind(this);
                    if (this.v) {
                        var d = Ea({
                                resultType: "hits"
                            }, h),
                            d = Tp(f, d),
                            d = g.serializeToString(d),
                            u = Ou(this);
                        this.ib.post(b, d, {
                            timeout: u.promise
                        }).then(function(b) {
                            b = b.data;
                            Ok(b) ? b = Gp(p, b) : Pk(b) ? b = Hp(p, b) : "string" === typeof b ? (b = Qk(b), b = Gp(p, b)) : b = void 0;
                            b.numberOfFeatures > this.Ff ? (a.resultSource.pending = !1, a.resultSource.features = [], a.resultSource.tooManyResults = !0, a.resultSource.totalFeatureCount =
                                b.numberOfFeatures, Lu(this)) : r()
                        }.bind(this))
                    } else r()
                }
            }.bind(this))
        }.bind(a))
    }

    function Gu(a) {
        a.Ka.total = 0;
        a.Ka.sources.forEach(function(a) {
            a.features.length = 0;
            a.pending = !1;
            a.queried = !1;
            a.tooManyResults = !1;
            a.totalFeatureCount = void 0
        }, a);
        a.Ka.pending = !1
    }

    function Qu(a) {
        return a.source.wmsSource.g.LAYERS.split(",")
    }

    function Nu(a) {
        for (var b = Qu(a[0]), c = 1, d = a.length; c < d; c++) b = b.concat(Qu(a[c]));
        return b
    }

    function Pu(a, b) {
        a.forEach(function(a) {
            void 0 !== a.Ua() && Jk(a, b + "_" + a.Ua())
        })
    }

    function Ou(a) {
        var b = a.o.defer();
        a.c.push(b);
        return b
    }

    function Hu(a) {
        a.c.forEach(function(a) {
            a.resolve()
        });
        a.c.length = 0
    }

    function Lu(a) {
        var b = 0;
        a.Ka.sources.forEach(function(a) {
            a.pending && b++
        });
        a.Ka.pending = 0 < b
    }
    V.service("ngeoQuery", Fu);

    function Ru(a) {
        return {
            restrict: "A",
            scope: !1,
            link: function(b, c, d) {
                var e = b.$eval(d.ngeoBboxQueryMap),
                    f = new zg({
                        ta: eg
                    });
                f.on("boxend", function() {
                    var b = f.G().K();
                    a.ed(e, b)
                });
                b.$watch(d.ngeoBboxQueryActive, function(c) {
                    c ? Wj(e, f) : (e.g.remove(f), !1 !== b.$eval(d.ngeoBboxQueryAutoclear) && a.clear())
                })
            }
        }
    }
    Ru.$inject = ["ngeoQuery"];
    V.directive("ngeoBboxQuery", Ru);

    function Su(a) {
        return {
            restrict: "A",
            controller: "ngeoBtnGroupController",
            link: function(b, c, d, e) {
                var f = a(d.ngeoBtnGroupActive).assign;
                f && b.$watch(function() {
                    return e.Nd.some(function(a) {
                        return !0 === a(b)
                    })
                }, function(a) {
                    f(b, a)
                })
            }
        }
    }
    Su.$inject = ["$parse"];
    V.directive("ngeoBtnGroup", Su);

    function Tu(a) {
        this.Nd = [];
        this.b = a
    }
    Tu.$inject = ["$scope"];

    function Uu(a, b) {
        a.Nd.forEach(function(a, d) {
            d != b && a.assign(this.b, !1)
        }, a)
    }

    function Vu(a, b) {
        a.Nd.push(b);
        return a.Nd.length - 1
    }
    V.controller("ngeoBtnGroupController", Tu);

    function Wu(a) {
        return {
            require: ["?^ngeoBtnGroup", "ngModel"],
            restrict: "A",
            link: function(b, c, d, e) {
                var f = e[0],
                    g = e[1],
                    h = -1;
                d = a(d.ngModel);
                e = d.assign;
                void 0 === d(b) && e(b, !1);
                f && (h = Vu(f, d));
                c.bind("click", function() {
                    b.$apply(function() {
                        g.$setViewValue(!g.$viewValue);
                        g.$render()
                    })
                });
                g.$render = function() {
                    g.$viewValue && f && Uu(f, h);
                    c.toggleClass("active", g.$viewValue)
                }
            }
        }
    }
    Wu.$inject = ["$parse"];
    V.directive("ngeoBtn", Wu);
    V.value("ngeoColorpickerTemplateUrl", function(a, b) {
        var c = b.ngeoColorpickerTemplateurl;
        return void 0 !== c ? c : "ngeo/colorpicker.html"
    });

    function Xu(a) {
        return {
            restrict: "A",
            scope: {
                colors: "<?ngeoColorpicker",
                color: "=?ngeoColorpickerColor"
            },
            controller: "NgeoColorpickerController",
            controllerAs: "ctrl",
            bindToController: !0,
            templateUrl: a
        }
    }
    Xu.$inject = ["ngeoColorpickerTemplateUrl"];
    V.directive("ngeoColorpicker", Xu);
    var Yu = ["#F4EB37 #CDDC39 #62AF44 #009D57 #0BA9CC #4186F0 #3F5BA9 #7C3592 #A61B4A #DB4436 #F8971B #F4B400 #795046".split(" "), "#F9F7A6 #E6EEA3 #B7DBAB #7CCFA9 #93D7E8 #9FC3FF #A7B5D7 #C6A4CF #D698AD #EE9C96 #FAD199 #FFDD5E #B29189".split(" "), ["#ffffff", "#CCCCCC", "#777", "#000000"]];

    function Zu() {
        this.colors = Yu
    }
    t("ngeo.ColorpickerController", Zu);
    Zu.$inject = ["$scope", "$element", "$attrs"];
    Zu.prototype.eg = function(a) {
        this.color = a
    };
    Zu.prototype.setColor = Zu.prototype.eg;
    V.controller("NgeoColorpickerController", Zu);
    V.directive("ngeoControl", function() {
        return {
            restrict: "A",
            link: function(a, b, c) {
                var d = a.$eval(c.ngeoControl);
                a = a.$eval(c.ngeoControlMap);
                Ee(d, b[0]);
                a.F.push(d)
            }
        }
    });

    function $u(a) {
        var b = a("number");
        return function(a) {
            return (a = b(a, 0)) ? "1\u00a0:\u00a0" + a : ""
        }
    }
    $u.$inject = ["$filter"];
    V.filter("ngeoScalify", $u);

    function av(a) {
        var b = a.NUMBER_FORMATS;
        return function(a, d) {
            var e = b.GROUP_SEP,
                f = b.DECIMAL_SEP;
            void 0 === d && (d = 3);
            if (Infinity === a) return "\u221e";
            if (-Infinity === a) return "-\u221e";
            if (0 === a) return "0";
            var g = 0 > a;
            a = Math.abs(a);
            var h = d - Math.floor(Math.log(a) / Math.log(10)) - 1,
                k = Math.pow(10, h);
            a = Math.round(a * k);
            var l = "",
                k = Math.floor(a / k);
            if (0 < h) {
                for (l = a + ""; l.length < h;) l = "0" + l;
                for (l = l.substring(l.length - h);
                    "0" === l[l.length - 1];) l = l.substring(0, l.length - 1)
            }
            h = [];
            for (k += ""; 3 < k.length;) {
                var n = k.length - 3;
                h.unshift(k.substring(n));
                k = k.substring(0, n)
            }
            h.unshift(k);
            return (g ? "-" : "") + h.join(e) + (0 === l.length ? "" : f + l)
        }
    }
    av.$inject = ["$locale"];
    V.filter("ngeoNumber", av);

    function bv(a) {
        var b = a("ngeoNumber"),
            c = " k M G T P".split(" "),
            d = " Ki Mi Gi Ti Pi".split(" ");
        return function(a, f, g, h) {
            void 0 === f && (f = "");
            var k = 1E3,
                l = c;
            "square" === g ? k = 1E6 : "binary" === g && (k = 1024, l = d);
            g = 0;
            for (var n = l.length - 1; a >= k && g < n;) a /= k, g++;
            f = l[g] + f;
            k = 0 == f.length ? "" : "\u00a0";
            return b(a, h) + k + f
        }
    }
    bv.$inject = ["$filter"];
    V.filter("ngeoUnitPrefix", bv);

    function cv(a) {
        return function(b, c, d) {
            d = d ? d : "{x} {y}";
            var e = b[0];
            b = b[1];
            c = parseInt(c, 10) | 0;
            e = a("number")(e, c);
            b = a("number")(b, c);
            return d.replace("{x}", e).replace("{y}", b)
        }
    }
    cv.$inject = ["$filter"];
    V.filter("ngeoNumberCoordinates", cv);
    V.filter("ngeoDMSCoordinates", function() {
        function a(a, c, d) {
            a = Aa(a + 180, 360) - 180;
            var e = Math.abs(3600 * a);
            return Math.floor(e / 3600) + "\u00b0 " + sb(Math.floor(e / 60 % 60), 2) + "\u2032 " + sb(e % 60, 2, d) + "\u2033 " + c.charAt(0 > a ? 1 : 0)
        }
        return function(b, c, d) {
            c = parseInt(c, 10) | 0;
            var e = a(b[0], "EW", c);
            return (d ? d : "{x} {y}").replace("{x}", a(b[1], "NS", c)).replace("{y}", e)
        }
    });

    function dv(a) {
        return function(b) {
            return void 0 !== b && null !== b ? a.trustAsHtml("" + b) : a.trustAsHtml("&nbsp;")
        }
    }
    dv.$inject = ["$sce"];
    V.filter("ngeoTrustHtml", dv);
    var ev = !xt || 9 <= Number(Kt),
        fv = !zt && !xt || xt && 9 <= Number(Kt) || zt && It("1.9.1");
    xt && It("9");

    function gv(a, b) {
        this.x = ba(a) ? a : 0;
        this.y = ba(b) ? b : 0
    }
    m = gv.prototype;
    m.clone = function() {
        return new gv(this.x, this.y)
    };
    m.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    m.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    m.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    m.translate = function(a, b) {
        a instanceof gv ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), ia(b) && (this.y += b));
        return this
    };
    m.scale = function(a, b) {
        var c = ia(b) ? b : a;
        this.x *= a;
        this.y *= c;
        return this
    };

    function hv(a, b) {
        this.width = a;
        this.height = b
    }
    m = hv.prototype;
    m.clone = function() {
        return new hv(this.width, this.height)
    };
    m.area = function() {
        return this.width * this.height
    };
    m.zb = function() {
        return !this.area()
    };
    m.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    m.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    m.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    m.scale = function(a, b) {
        var c = ia(b) ? b : a;
        this.width *= a;
        this.height *= c;
        return this
    };

    function iv(a) {
        return a ? new jv(kv(a)) : at || (at = new jv)
    }

    function lv(a, b) {
        var c, d, e, f;
        c = document;
        c = b || c;
        if (c.querySelectorAll && c.querySelector && a) return c.querySelectorAll("" + (a ? "." + a : ""));
        if (a && c.getElementsByClassName) {
            var g = c.getElementsByClassName(a);
            return g
        }
        g = c.getElementsByTagName("*");
        if (a) {
            f = {};
            for (d = e = 0; c = g[d]; d++) {
                var h = c.className;
                "function" == typeof h.split && pt(h.split(/\s+/), a) && (f[e++] = c)
            }
            f.length = e;
            return f
        }
        return g
    }

    function mv(a, b) {
        Us(b, function(b, d) {
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : nv.hasOwnProperty(d) ? a.setAttribute(nv[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
        })
    }
    var nv = {
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

    function ov(a) {
        var b = a.scrollingElement ? a.scrollingElement : At || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = a.parentWindow || a.defaultView;
        return xt && It("10") && a.pageYOffset != b.scrollTop ? new gv(b.scrollLeft, b.scrollTop) : new gv(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function pv(a, b, c) {
        var d = arguments,
            e = document,
            f = String(d[0]),
            g = d[1];
        if (!ev && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', ct(g.name), '"');
            if (g.type) {
                f.push(' type="', ct(g.type), '"');
                var h = {};
                Zs(h, g);
                delete h.type;
                g = h
            }
            f.push(">");
            f = f.join("")
        }
        f = e.createElement(f);
        g && (ha(g) ? f.className = g : da(g) ? f.className = g.join(" ") : mv(f, g));
        2 < d.length && qv(e, f, d, 2);
        return f
    }

    function qv(a, b, c, d) {
        function e(c) {
            c && b.appendChild(ha(c) ? a.createTextNode(c) : c)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            !ea(f) || ja(f) && 0 < f.nodeType ? e(f) : mt(rv(f) ? rt(f) : f, e)
        }
    }

    function sv(a) {
        return fv && a.children ? a.children : nt(a.childNodes, function(a) {
            return 1 == a.nodeType
        })
    }

    function tv(a) {
        if (ba(a.nextElementSibling)) a = a.nextElementSibling;
        else
            for (a = a.nextSibling; a && 1 != a.nodeType;) a = a.nextSibling;
        return a
    }

    function kv(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function rv(a) {
        if (a && "number" == typeof a.length) {
            if (ja(a)) return "function" == typeof a.item || "string" == typeof a.item;
            if ("function" == ca(a)) return "function" == typeof a.item
        }
        return !1
    }

    function jv(a) {
        this.b = a || aa.document || document
    }
    m = jv.prototype;
    m.fg = function(a) {
        this.b = a
    };
    m.Ga = mv;
    m.appendChild = function(a, b) {
        a.appendChild(b)
    };
    m.append = function(a, b) {
        qv(kv(a), a, arguments, 1)
    };
    m.isElement = function(a) {
        return ja(a) && 1 == a.nodeType
    };
    m.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };

    function uv(a) {
        if (a.classList) return a.classList;
        a = a.className;
        return ha(a) && a.match(/\S+/g) || []
    }

    function vv(a, b) {
        return a.classList ? a.classList.contains(b) : pt(uv(a), b)
    }

    function wv(a, b) {
        a.classList ? a.classList.add(b) : vv(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    }

    function xv(a, b) {
        if (a.classList) mt(b, function(b) {
            wv(a, b)
        });
        else {
            var c = {};
            mt(uv(a), function(a) {
                c[a] = !0
            });
            mt(b, function(a) {
                c[a] = !0
            });
            a.className = "";
            for (var d in c) a.className += 0 < a.className.length ? " " + d : d
        }
    }

    function yv(a, b) {
        a.classList ? a.classList.remove(b) : vv(a, b) && (a.className = nt(uv(a), function(a) {
            return a != b
        }).join(" "))
    }

    function zv(a, b) {
        a.classList ? mt(b, function(b) {
            yv(a, b)
        }) : a.className = nt(uv(a), function(a) {
            return !pt(b, a)
        }).join(" ")
    };

    function Av(a, b) {
        Qa.call(this, a);
        this.feature = b
    }
    v(Av, Qa);

    function Bv(a) {
        a = void 0 !== a ? a : {};
        Vf.call(this, {
            handleEvent: Cv
        });
        this.continueMsg = this.i = this.mc = this.Ab = this.v = this.o = null;
        this.decimals = void 0 !== a.decimals ? a.decimals : null;
        this.D = void 0 !== a.bf ? a.bf : !0;
        this.startMsg = void 0 !== a.startMsg ? a.startMsg : pv("SPAN", {}, "Click to start drawing.");
        this.C = null;
        var b = void 0 !== a.style ? a.style : [new ei({
            fill: new ci({
                color: "rgba(255, 255, 255, 0.2)"
            })
        }), new ei({
            stroke: new di({
                color: "white",
                width: 5
            })
        }), new ei({
            stroke: new di({
                color: "#ffcc33",
                width: 3
            })
        })];
        this.f = new li({
            source: new cr,
            style: b
        });
        this.g = this.s(a.sketchStyle, C(this.f));
        this.F = !0;
        A(this.g, Za(Wf), this.H, this);
        A(this.g, Er, this.jn, this);
        A(this.g, Gr, this.hn, this);
        A(this, Za(Wf), this.tm, this)
    }
    v(Bv, Vf);

    function Dv(a, b, c, d) {
        a = ed(a.clone().transform(b, "EPSG:4326")).M();
        b = 0;
        c = a.length;
        for (var e = a[c - 1][0], f = a[c - 1][1], g = 0; g < c; g++) {
            var h = a[g][0],
                k = a[g][1];
            b += za(h - e) * (2 + Math.sin(za(f)) + Math.sin(za(k)));
            e = h;
            f = k
        }
        return d(Math.abs(b * mh.radius * mh.radius / 2), "m\u00b2", "square")
    }
    t("ngeo.interaction.Measure.getFormattedArea", Dv);
    t("ngeo.interaction.Measure.getFormattedCircleArea", function(a, b, c) {
        return c(Math.PI * Math.pow(Math.sqrt(jd(a)), 2), "m\u00b2", "square")
    });

    function Ev(a, b, c, d) {
        c = 0;
        a = a.M();
        for (var e = 0, f = a.length - 1; e < f; ++e) {
            var g = yc(a[e], b, "EPSG:4326"),
                h = yc(a[e + 1], b, "EPSG:4326");
            c += dc(mh, g, h)
        }
        return d(c, "m")
    }
    t("ngeo.interaction.Measure.getFormattedLength", Ev);

    function Fv(a, b) {
        var c = a.M(),
            d = c[0],
            c = c[1];
        b = null !== b ? b : 0;
        d = sb(d, 0, b);
        c = sb(c, 0, b);
        return ["X: ", d, ", Y: ", c].join("")
    }

    function Cv(a) {
        if (a.type != If || a.dragging) return !0;
        var b = this.startMsg;
        null !== this.i && (b = this.continueMsg);
        if (this.D) {
            for (var c = this.o; c.lastChild;) c.removeChild(c.lastChild);
            this.o.appendChild(b);
            this.v.setPosition(a.coordinate)
        }
        return !0
    }
    Bv.prototype.wk = function() {
        return this.g
    };
    Bv.prototype.getDrawInteraction = Bv.prototype.wk;
    m = Bv.prototype;
    m.setMap = function(a) {
        Vf.prototype.setMap.call(this, a);
        this.f.setMap(a);
        var b = this.g.c;
        null !== b && b.g.remove(this.g);
        null !== a && Wj(a, this.g)
    };
    m.jn = function(a) {
        this.i = a.feature;
        C(this.f).clear(!0);
        Gv(this);
        a = this.i.G();
        this.C = A(a, "change", function() {
            this.ce(function(a, c) {
                null !== c && (this.Ab.innerHTML = a, this.mc.setPosition(c))
            }.bind(this))
        }, this)
    };
    m.hn = function() {
        wv(this.Ab, "ngeo-tooltip-static");
        this.mc.set(gk, [0, -7]);
        B(this, new Av("measureend", this.i));
        this.i = null;
        null !== this.C && Ja(this.C)
    };

    function Hv(a) {
        a.D && (a.c.s.remove(a.v), null !== a.o && a.o.parentNode.removeChild(a.o), a.o = null, a.v = null)
    }

    function Gv(a) {
        Iv(a);
        a.Ab = pv("DIV");
        xv(a.Ab, ["tooltip", "ngeo-tooltip-measure"]);
        a.mc = new dk({
            element: a.Ab,
            offset: [0, -15],
            Sf: "bottom-center",
            ti: !1
        });
        a.c.s.push(a.mc)
    }

    function Iv(a) {
        null !== a.Ab && (a.Ab.parentNode.removeChild(a.Ab), a.Ab = null, a.mc = null)
    }
    m.tm = function() {
        var a = this.getActive();
        this.F = !1;
        this.g.setActive(a);
        this.F = !0;
        this.c && (a ? this.mc || (Gv(this), Hv(this), this.D && (this.o = pv("DIV"), wv(this.o, "tooltip"), this.v = new dk({
            element: this.o,
            offset: [15, 0],
            Sf: "center-left"
        }), this.c.s.push(this.v))) : (C(this.f).clear(!0), this.c.s.remove(this.mc), Iv(this), Hv(this)))
    };
    m.Pk = function() {
        return this.Ab
    };
    Bv.prototype.getTooltipElement = Bv.prototype.Pk;
    Bv.prototype.H = function() {
        this.F && this.setActive(this.g.getActive())
    };

    function Jv(a, b) {
        var c = void 0 !== b ? b : {};
        Bv.call(this, c);
        this.continueMsg = void 0 !== c.continueMsg ? c.continueMsg : pv("SPAN", {}, "Click to continue drawing the polygon.", pv("BR"), "Double-click or click starting point to finish.");
        this.format = a
    }
    v(Jv, Bv);
    t("ngeo.interaction.MeasureArea", Jv);
    Jv.prototype.s = function(a, b) {
        return new or({
            type: "Polygon",
            source: b,
            style: a
        })
    };
    Jv.prototype.ce = function(a) {
        var b = this.i.G(),
            c = D(this.c).c,
            c = Dv(b, c, 0, this.format),
            d = null;
        2 < b.M()[0].length && (d = (new Qc(dd(b))).M());
        a(c, d)
    };

    function Kv(a, b) {
        var c = void 0 !== b ? b : {};
        Bv.call(this, c);
        this.continueMsg = void 0 !== c.continueMsg ? c.continueMsg : pv("SPAN", {}, "Click to continue drawing the line.", pv("BR"), "Double-click or click last point to finish.");
        this.format = a
    }
    v(Kv, Bv);
    t("ngeo.interaction.MeasureLength", Kv);
    Kv.prototype.s = function(a, b) {
        return new or({
            type: "LineString",
            source: b,
            style: a
        })
    };
    Kv.prototype.ce = function(a) {
        var b = this.i.G(),
            c = D(this.c).c,
            c = Ev(b, c, 0, this.format),
            b = Ec(b);
        a(c, b)
    };
    V.directive("ngeoCreatefeature", function() {
        return {
            controller: "ngeoCreatefeatureController",
            bindToController: !0,
            scope: {
                active: "=ngeoCreatefeatureActive",
                features: "=ngeoCreatefeatureFeatures",
                geomType: "=ngeoCreatefeatureGeomType",
                map: "=ngeoCreatefeatureMap"
            },
            controllerAs: "cfCtrl"
        }
    });

    function Lv(a, b, c, d, e, f) {
        this.active = !0 === this.active;
        this.f = e;
        this.c = f;
        var g;
        if ("Point" === this.geomType || "MultiPoint" === this.geomType) g = new or({
            type: "Point"
        });
        else if ("LineString" === this.geomType || "MultiLineString" === this.geomType) g = a("Click to start drawing length"), a = a("Click to continue drawing<br/>Double-click or click last point to finish"), g = new Kv(c("ngeoUnitPrefix"), {
            style: new ei,
            startMsg: b("<div translate>" + g + "</div>")(d)[0],
            continueMsg: b("<div translate>" + a + "</div>")(d)[0]
        });
        else if ("Polygon" ===
            this.geomType || "MultiPolygon" === this.geomType) g = a("Click to start drawing area"), a = a("Click to continue drawing<br/>Double-click or click starting point to finish"), g = new Jv(c("ngeoUnitPrefix"), {
            style: new ei,
            startMsg: b("<div translate>" + g + "</div>")(d)[0],
            continueMsg: b("<div translate>" + a + "</div>")(d)[0]
        });
        g.setActive(this.active);
        Wj(this.map, g);
        this.b = g;
        d.$watch(function() {
            return this.active
        }.bind(this), function(a) {
            this.b.setActive(a)
        }.bind(this));
        b = x(this);
        g instanceof or ? this.c.Hd(b, A(g, Gr, this.kc,
            this), !0) : (g instanceof Kv || g instanceof Jv) && this.c.Hd(b, A(g, "measureend", this.kc, this), !0);
        d.$on("$destroy", this.j.bind(this))
    }
    Lv.$inject = "gettext $compile $filter $scope $timeout ngeoEventHelper".split(" ");
    Lv.prototype.kc = function(a) {
        a = a.feature.G();
        var b = a.T();
        if (this.geomType.indexOf("Multi") != b.indexOf("Multi")) {
            var c = a;
            if (c instanceof Qc) b = a = new wl([]), console.assert(c.layout == b.layout, "the layout of point should match layout"), b.B ? eb(b.B, c.B) : b.B = c.B.slice(), b.b();
            else if (c instanceof rl) b = a = new tl([]), console.assert(c.layout == b.layout, "layout of lineString should match the layout"), b.B ? eb(b.B, c.B.slice()) : b.B = c.B.slice(), b.f.push(b.B.length), b.b();
            else if (c instanceof bd) {
                b = a = new yl([]);
                console.assert(c.layout ==
                    b.layout, "layout of polygon should match layout");
                if (b.B) {
                    var d = b.B.length;
                    eb(b.B, c.B);
                    var c = c.nb().slice(),
                        e, f;
                    e = 0;
                    for (f = c.length; e < f; ++e) c[e] += d
                } else b.B = c.B.slice(), c = c.nb().slice(), b.f.push();
                b.f.push(c);
                b.b()
            } else a = c
        }
        a = new Fk(a);
        this.features instanceof ie ? this.features.push(a) : this.features.ya(a)
    };
    Lv.prototype.handleDrawEnd_ = Lv.prototype.kc;
    Lv.prototype.j = function() {
        this.f(function() {
            var a = x(this);
            this.c.Te(a);
            this.b.setActive(!1);
            this.map.g.remove(this.b)
        }.bind(this), 0)
    };
    V.controller("ngeoCreatefeatureController", Lv);

    function Mv(a) {
        this.o = void 0 !== a.angle ? a.angle : 0;
        this.i = a.radius;
        this.s = void 0 !== a.sides ? a.sides : 3;
        this.f = [];
        Vf.call(this, {
            handleEvent: ac
        })
    }
    v(Mv, Vf);
    t("ngeo.interaction.DrawRegularPolygonFromClick", Mv);
    Mv.prototype.setActive = function(a) {
        Vf.prototype.setActive.call(this, a);
        this.c && (a ? Nv(this) : (this.f.forEach(Ja, this), this.f.length = 0))
    };
    Mv.prototype.setActive = Mv.prototype.setActive;
    Mv.prototype.setMap = function(a) {
        var b = this.getActive();
        this.c && b && (this.f.forEach(Ja, this), this.f.length = 0);
        Vf.prototype.setMap.call(this, a);
        a && b && Nv(this)
    };

    function Nv(a) {
        a.f.push(A(a.c, Bf, a.g, a))
    }
    Mv.prototype.g = function(a) {
        a = a.coordinate;
        var b = gd(new Oq(a), this.s);
        hd(b, a, this.i, this.o);
        B(this, new Dr(Gr, new Fk(b)))
    };
    V.directive("ngeoCreateregularpolygonfromclick", function() {
        return {
            controller: "ngeoCreateregularpolygonfromclickController",
            bindToController: !0,
            scope: {
                active: "=ngeoCreateregularpolygonfromclickActive",
                angle: "<?ngeoCreateregularpolygonfromclickAngle",
                features: "=ngeoCreateregularpolygonfromclickFeatures",
                map: "=ngeoCreateregularpolygonfromclickMap",
                radius: "<ngeoCreateregularpolygonfromclickRadius",
                sides: "<?ngeoCreateregularpolygonfromclickSides"
            },
            controllerAs: "crpfcCtrl"
        }
    });

    function Ov(a) {
        this.active = !0 === this.active;
        a.$watch(function() {
            return this.active
        }.bind(this), function(a) {
            this.b.setActive(a)
        }.bind(this));
        this.b = new Mv({
            angle: this.angle,
            radius: this.radius,
            sides: this.sides
        });
        this.b.setActive(this.active);
        Wj(this.map, this.b);
        this.c = A(this.b, Gr, this.kc, this);
        a.$on("$destroy", this.f.bind(this))
    }
    Ov.$inject = ["$scope"];
    Ov.prototype.kc = function(a) {
        a = new Fk(a.feature.G());
        this.features.push(a)
    };
    Ov.prototype.f = function() {
        Ja(this.c);
        this.b.setActive(!1);
        this.map.g.remove(this.b)
    };
    V.controller("ngeoCreateregularpolygonfromclickController", Ov);

    function Pv() {}
    Pv.prototype.nh = function(a) {
        var b = new Date(a.minValue),
            c = new Date(a.maxValue),
            d = a.minDefValue ? new Date(a.minDefValue) : b,
            e = a.maxDefValue ? new Date(a.maxDefValue) : c;
        return {
            hm: b.getTime(),
            fm: c.getTime(),
            values: "range" === a.mode ? [d.getTime(), e.getTime()] : d.getTime()
        }
    };
    Pv.prototype.getOptions = Pv.prototype.nh;
    Pv.prototype.getUTCDate = function(a) {
        return new Date(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate())
    };
    Pv.prototype.getUTCDate = Pv.prototype.getUTCDate;
    V.service("ngeoTime", Pv);
    V.value("ngeoDatePickerTemplateUrl", function(a, b) {
        var c = b.ngeoDatePickerTemplateUrl;
        return void 0 !== c ? c : "ngeo/datepicker.html"
    });

    function Qv(a, b) {
        return {
            scope: {
                onDateSelected: "&",
                time: "="
            },
            bindToController: !0,
            controller: "ngeoDatePickerController",
            controllerAs: "datepickerCtrl",
            restrict: "AE",
            templateUrl: a,
            link: function(a, d, e, f) {
                a = f.S.getCurrentLanguage();
                $.datepicker.setDefaults($.datepicker.regional[a]);
                f.sdateOptions = angular.extend({}, f.sdateOptions, {
                    onClose: function(a) {
                        a && $(d[0]).find('input[name="edate"]').datepicker("option", "minDate", a)
                    }
                });
                f.edateOptions = angular.extend({}, f.edateOptions, {
                    onClose: function(a) {
                        a && $(d[0]).find('input[name="sdate"]').datepicker("option",
                            "maxDate", a)
                    }
                });
                angular.element("body").on("hidden.bs.popover", function() {
                    var a = angular.element("#ui-datepicker-div");
                    a && "block" === a.css("display") && $(d[0]).find('input[name$="date"]').datepicker("hide")
                });
                b(function() {
                    angular.element("#ui-datepicker-div").on("mousedown", function(a) {
                        a.stopPropagation()
                    })
                })
            }
        }
    }
    Qv.$inject = ["ngeoDatePickerTemplateUrl", "$timeout"];
    V.directive("ngeoDatePicker", Qv);

    function Rv(a, b, c) {
        this.f = c;
        c = this.f.nh(this.time);
        this.S = b.get("gettextCatalog");
        this.isModeRange = "range" === this.time.mode;
        this.c = new Date(c.hm);
        this.b = new Date(c.fm);
        this.edateOptions = {
            minDate: this.c,
            maxDate: this.b,
            changeMonth: !0,
            changeYear: !0
        };
        this.sdateOptions = {
            minDate: this.c,
            maxDate: this.b,
            changeMonth: !0,
            changeYear: !0
        };
        this.isModeRange ? (this.sdate = new Date(c.values[0]), this.edate = new Date(c.values[1])) : this.sdate = new Date(c.values);
        a.$watchGroup(["datepickerCtrl.sdate", "datepickerCtrl.edate"],
            function(a) {
                var b = a[0];
                a = a[1];
                if (angular.isDate(b) && (!this.isModeRange || angular.isDate(a))) this.onDateSelected({
                    time: {
                        start: b.getTime(),
                        end: a ? a.getTime() : null
                    }
                })
            }.bind(this))
    }
    t("ngeo.DatePickerController", Rv);
    Rv.$inject = ["$scope", "$injector", "ngeoTime"];
    V.controller("ngeoDatePickerController", Rv);

    function Sv(a) {
        Object.defineProperty(a, "tracking", {
            get: function() {
                return a.get(Fq)
            },
            set: function(b) {
                a.set(Fq, b)
            }
        })
    }
    Sv.$inject = ["geolocation"];
    V.value("ngeoDecorateGeolocation", Sv);

    function Tv() {
        this.c = {};
        this.b = [];
        this.f = new cr({
            Qb: !1
        });
        this.j = new li({
            source: this.f,
            style: this.g.bind(this),
            Ob: !0,
            Pb: !0
        })
    }
    Tv.prototype.ya = function(a, b) {
        var c = x(a).toString();
        this.c[c] = b;
        this.b[b].features[c] = a;
        this.f.ya(a)
    };
    Tv.prototype.Ea = function(a, b) {
        var c = x(a).toString();
        delete this.c[c];
        delete this.b[b].features[c];
        this.f.Ea(a)
    };
    Tv.prototype.clear = function(a) {
        var b = this.b[a],
            c;
        for (c in b.features) this.Ea(b.features[c], a)
    };
    Tv.prototype.Pa = function() {
        return this.j
    };
    Tv.prototype.getLayer = Tv.prototype.Pa;
    Tv.prototype.qf = function() {
        var a = this.b.length;
        this.b.push({
            vi: ji,
            features: {}
        });
        return new Uv(this, a)
    };
    Tv.prototype.getFeatureOverlay = Tv.prototype.qf;
    Tv.prototype.init = function(a) {
        this.j.setMap(a)
    };
    Tv.prototype.init = Tv.prototype.init;
    Tv.prototype.setStyle = function(a, b) {
        this.b[b].vi = null === a ? ji : hi(a)
    };
    Tv.prototype.g = function(a, b) {
        var c = x(a).toString();
        return this.b[this.c[c]].vi(a, b)
    };

    function Uv(a, b) {
        this.c = a;
        this.b = null;
        this.f = b
    }
    Uv.prototype.ya = function(a) {
        this.c.ya(a, this.f)
    };
    Uv.prototype.addFeature = Uv.prototype.ya;
    Uv.prototype.Ea = function(a) {
        this.c.Ea(a, this.f)
    };
    Uv.prototype.removeFeature = Uv.prototype.Ea;
    Uv.prototype.clear = function() {
        this.c.clear(this.f)
    };
    Uv.prototype.clear = Uv.prototype.clear;
    Uv.prototype.xo = function(a) {
        null !== this.b && (this.b.clear(), Oa(this.b, ne, this.j, this), Oa(this.b, pe, this.g, this));
        null !== a && (a.forEach(function(a) {
            this.ya(a)
        }, this), A(a, ne, this.j, this), A(a, pe, this.g, this));
        this.b = a
    };
    Uv.prototype.setFeatures = Uv.prototype.xo;
    Uv.prototype.setStyle = function(a) {
        this.c.setStyle(a, this.f)
    };
    Uv.prototype.setStyle = Uv.prototype.setStyle;
    Uv.prototype.j = function(a) {
        this.ya(a.element)
    };
    Uv.prototype.g = function(a) {
        this.Ea(a.element)
    };
    V.service("ngeoFeatureOverlayMgr", Tv);
    t("ngeo.MessageType", {
        ERROR: "error",
        INFORMATION: "information",
        SUCCESS: "success",
        WARNING: "warning"
    });

    function Vv() {}
    Vv.prototype.show = function(a) {
        Wv(this, a).forEach(this.f, this)
    };
    Vv.prototype.show = Vv.prototype.show;
    Vv.prototype.error = function(a) {
        this.show(Wv(this, a, "error"))
    };
    Vv.prototype.error = Vv.prototype.error;
    Vv.prototype.info = function(a) {
        this.show(Wv(this, a, "information"))
    };
    Vv.prototype.info = Vv.prototype.info;
    Vv.prototype.success = function(a) {
        this.show(Wv(this, a, "success"))
    };
    Vv.prototype.success = Vv.prototype.success;
    Vv.prototype.warn = function(a) {
        this.show(Wv(this, a, "warning"))
    };
    Vv.prototype.warn = Vv.prototype.warn;

    function Wv(a, b, c) {
        var d = [],
            e = null;
        "string" === typeof b ? d.push({
            msg: b,
            type: void 0 !== c ? c : "information"
        }) : Array.isArray(b) ? b.forEach(function(a) {
            "string" === typeof b ? e = {
                msg: a,
                type: void 0 !== c ? c : "information"
            } : (e = a, void 0 !== c && (e.type = c));
            d.push(e)
        }, a) : (e = b, void 0 !== c && (e.type = c), void 0 === e.type && (e.type = "information"), d.push(e));
        return d
    };

    function Xv(a) {
        this.c = a;
        a = angular.element('<div class="ngeo-notification"></div>');
        angular.element(document.body).append(a);
        this.j = a;
        this.b = {}
    }
    v(Xv, Vv);
    Xv.$inject = ["$timeout"];
    Xv.prototype.notify = function(a) {
        this.show(a)
    };
    Xv.prototype.notify = Xv.prototype.notify;
    Xv.prototype.clear = function() {
        for (var a in this.b) {
            var b = this.b[parseInt(a, 10)],
                c = b.df,
                b = b.promise,
                d = x(c);
            c.alert("close");
            this.c.cancel(b);
            delete this.b[d]
        }
    };
    Xv.prototype.clear = Xv.prototype.clear;
    Xv.prototype.f = function(a) {
        var b = ["alert", "fade"];
        switch (a.type) {
            case "error":
                b.push("alert-danger");
                break;
            case "information":
                b.push("alert-info");
                break;
            case "success":
                b.push("alert-success");
                break;
            case "warning":
                b.push("alert-warning")
        }
        var c = angular.element('<div class="' + b.join(" ") + '"></div>'),
            d;
        a.target ? d = angular.element(a.target) : d = this.j;
        d.append(c);
        c.html(a.msg).addClass("in");
        a = void 0 !== a.delay ? a.delay : 7E3;
        var b = {
                df: c
            },
            e = x(c);
        b.promise = this.c(function() {
                c.alert("close");
                delete this.b[e]
            }.bind(this),
            a);
        this.b[e] = b
    };
    V.service("ngeoNotification", Xv);
    t("ngeo.DesktopGeolocationEventType", {
        ERROR: "desktop-geolocation-error"
    });
    V.directive("ngeoDesktopGeolocation", function() {
        return {
            restrict: "A",
            scope: {
                getDesktopMapFn: "&ngeoDesktopGeolocationMap",
                getDesktopGeolocationOptionsFn: "&ngeoDesktopGeolocationOptions"
            },
            controller: "NgeoDesktopGeolocationController",
            controllerAs: "ctrl"
        }
    });

    function Yv(a, b, c, d, e) {
        b.on("click", this.toggle.bind(this));
        this.c = b = a.getDesktopMapFn();
        var f = a.getDesktopGeolocationOptionsFn() || {};
        this.Jc = e;
        this.he = d.qf();
        this.za = new Dq({
            projection: D(b).c
        });
        this.za.on("error", function(b) {
            this.he.clear();
            this.Gd = !1;
            this.Jc.clear();
            this.Jc.error(b.message);
            a.$emit("desktop-geolocation-error", b)
        }, this);
        this.b = new Fk;
        f.positionFeatureStyle && this.b.setStyle(f.positionFeatureStyle);
        this.cc = new Fk;
        f.accuracyFeatureStyle && this.cc.setStyle(f.accuracyFeatureStyle);
        this.f =
            f.zoom;
        this.Gd = !1;
        A(this.za, Za(Nq), function() {
            Gk(this.cc, this.za.get(Nq) || null)
        }, this);
        A(this.za, Za(Hq), function(a) {
            this.ig(a)
        }, this);
        c(this.za)
    }
    t("ngeo.DesktopGeolocationController", Yv);
    Yv.$inject = ["$scope", "$element", "ngeoDecorateGeolocation", "ngeoFeatureOverlayMgr", "ngeoNotification"];
    Yv.prototype.toggle = function() {
        this.Gd ? (this.he.clear(), this.Gd = !1, this.Jc.clear()) : (this.he.ya(this.b), this.he.ya(this.cc), this.za.set(Fq, !0), this.Gd = !0)
    };
    Yv.prototype.toggle = Yv.prototype.toggle;
    Yv.prototype.ig = function() {
        var a = this.za.get(Hq),
            b = new Qc(a);
        Gk(this.b, b);
        zd(D(this.c), a);
        void 0 !== this.f && Bd(D(this.c), this.f);
        this.za.set(Fq, !1)
    };
    V.controller("NgeoDesktopGeolocationController", Yv);
    V.value("ngeoDecorateInteraction", function(a) {
        Object.defineProperty(a, "active", {
            get: function() {
                return a.getActive()
            },
            set: function(b) {
                a.setActive(b)
            }
        })
    });

    function Zv(a, b) {
        var c = void 0 !== b ? b : {};
        Bv.call(this, c);
        this.continueMsg = void 0 !== c.continueMsg ? c.continueMsg : pv("SPAN", {}, "Click to finish.");
        this.format = a
    }
    v(Zv, Bv);
    t("ngeo.interaction.MeasureAzimut", Zv);
    Zv.prototype.s = function(a, b) {
        return new $v({
            source: b,
            style: a
        })
    };
    Zv.prototype.ce = function(a) {
        var b = Pl(this.i.G().c)[0],
            c = aw(b, D(this.c).c, this.format);
        a(c, Ec(b))
    };

    function aw(a, b, c) {
        var d = bw(a) + "\u00b0";
        return d += ", " + Ev(a, b, 0, c)
    }

    function bw(a) {
        var b = a.M();
        a = b[1][0] - b[0][0];
        b = b[1][1] - b[0][1];
        return Math.round((0 < a ? 1 : -1) * Math.acos(b / Math.sqrt(a * a + b * b)) * 180 / Math.PI) % 360
    }

    function $v(a) {
        jg.call(this, {
            Va: cw,
            handleEvent: dw,
            Wa: ew
        });
        this.v = null;
        this.C = void 0 !== a.source ? a.source : null;
        this.i = !1;
        this.g = this.f = null;
        this.s = new li({
            source: new cr({
                Qb: !1,
                wrapX: !1
            }),
            style: void 0 !== a.style ? a.style : wr()
        });
        A(this, Za(Wf), this.F, this)
    }
    v($v, jg);
    t("ngeo.interaction.DrawAzimut", $v);

    function cw(a) {
        this.v = a.pixel;
        return !0
    }

    function ew(a) {
        var b = this.v,
            c = a.pixel,
            d = b[0] - c[0],
            b = b[1] - c[1],
            c = !0;
        4 >= d * d + b * b && (fw(this, a), this.i ? (a = gw(this), null !== this.C && this.C.ya(a), B(this, new Dr(Gr, a))) : (d = a.coordinate, this.i = !0, a = new rl([d.slice(), d.slice()]), d = new Oq(d, 0), a = new Nl([a, d]), this.f = new Fk, Gk(this.f, a), hw(this), B(this, new Dr(Er, this.f))), c = !1);
        return c
    }

    function dw(a) {
        var b = !0;
        a.type === If ? b = fw(this, a) : a.type === Cf && (b = !1);
        return kg.call(this, a) && b
    }

    function fw(a, b) {
        if (a.i) {
            var c = b.coordinate,
                d = a.f.G().c,
                e = d[0],
                f, g;
            f = e.M();
            a.g.G().ba(c);
            g = f[f.length - 1];
            g[0] = c[0];
            g[1] = c[1];
            e.ba(f);
            c = d[1];
            c.B[c.J] = c.B[0] + ql(e.B, e.B.length, e.J);
            c.b();
            hw(a)
        } else e = b.coordinate.slice(), null === a.g ? (a.g = new Fk(new Qc(e)), hw(a)) : a.g.G().ba(e);
        return !0
    }

    function hw(a) {
        var b = [];
        null !== a.f && b.push(a.f);
        null !== a.g && b.push(a.g);
        a = C(a.s);
        a.clear(!0);
        dl(a, b)
    }

    function gw(a) {
        a.i = !1;
        var b = a.f;
        null !== b && (a.f = null, a.g = null, C(a.s).clear(!0));
        return b
    }
    $v.prototype.sc = bc;
    $v.prototype.F = function() {
        var a = this.c,
            b = this.getActive();
        null !== a && b || gw(this);
        this.s.setMap(b ? a : null)
    };
    $v.prototype.setMap = function(a) {
        jg.prototype.setMap.call(this, a);
        this.F()
    };
    V.factory("ngeoDownload", function() {
        return function(a, b, c) {
            saveAs(new Blob([a], {
                type: void 0 === c || -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome") ? "text/plain;charset=utf-8" : c
            }), b)
        }
    });

    function X(a, b) {
        this.o = b;
        this.j = null;
        a.has("ngeoMeasureDecimals") && (this.j = a.get("ngeoMeasureDecimals"));
        this.c = a.get("$filter")("ngeoUnitPrefix");
        this.f = null;
        this.g = [];
        if (a.has("ngeoPointfilter")) {
            var c = a.get("ngeoPointfilter").split(":"),
                d = c.shift();
            this.f = this.o(d);
            this.g = c
        } else this.f = null;
        this.i = a.get("ngeoDownload")
    }
    X.$inject = ["$injector", "$filter"];
    X.prototype.jg = function(a) {
        this.b = a
    };
    X.prototype.setProjection = X.prototype.jg;
    X.prototype.setStyle = function(a, b) {
        var c = this.hc(a);
        if (b) {
            var d = this.T(a);
            cb(["LineString", "Polygon", "Rectangle"], d) && c.push(this.zf());
            c.unshift(iw(this, a))
        }
        a.setStyle(c)
    };
    X.prototype.setStyle = X.prototype.setStyle;
    X.prototype.hc = function(a) {
        var b;
        switch (this.T(a)) {
            case "LineString":
                var c = this.Zd(a);
                b = this.Yd(a);
                var d = this.$c(a),
                    c = {
                        stroke: new di({
                            color: d,
                            width: c
                        })
                    };
                b && (c.text = jw({
                    text: this.Wd(a)
                }));
                b = new ei(c);
                break;
            case "Point":
                b = this.ad(a);
                c = this.$c(a);
                c = {
                    image: new Zh({
                        radius: b,
                        fill: new ci({
                            color: c
                        })
                    })
                };
                this.Yd(a) && (c.text = jw({
                    text: this.Wd(a),
                    offsetY: -(b + 9)
                }));
                b = new ei(c);
                break;
            case "Circle":
            case "Polygon":
            case "Rectangle":
                b = this.Zd(a);
                var e = this.lh(a),
                    c = this.$c(a),
                    f = this.Yd(a),
                    d = c.slice();
                d[3] = e;
                var e = a.get("z"),
                    g = [new ei({
                        fill: new ci({
                            color: d
                        }),
                        stroke: new di({
                            color: c,
                            width: b
                        })
                    })];
                f && (void 0 !== e ? (a = kw(a, e), f = Ev(a, this.b, 0, this.c), g.push(new ei({
                    geometry: a,
                    fill: new ci({
                        color: d
                    }),
                    stroke: new di({
                        color: c,
                        width: b
                    }),
                    text: jw({
                        text: f,
                        angle: (e % 180 + 180) % 180 - 90
                    })
                })), g.push(new ei({
                    geometry: new Qc(Ec(a)),
                    text: jw({
                        text: e + "\u00b0",
                        size: 10,
                        offsetX: 20 * Math.cos((e - 90) * Math.PI / 180),
                        offsetY: 20 * Math.sin((e - 90) * Math.PI / 180)
                    })
                }))) : g.push(new ei({
                    text: jw({
                        text: this.Wd(a)
                    })
                })));
                b = g;
                break;
            case "Text":
                b = new ei({
                    text: jw({
                        text: this.uf(a),
                        size: this.ad(a),
                        angle: this.kf(a),
                        color: this.$c(a)
                    })
                })
        }
        var h;
        b.constructor === Array ? h = b : h = [b];
        return h
    };
    X.prototype.getStyle = X.prototype.hc;
    X.prototype.Vj = function(a) {
        var b = [255, 255, 255, 1],
            c = [0, 153, 255, 1],
            d = [];
        a = a.G();
        console.assert(a);
        a = a.T();
        "Point" === a ? d.push(new ei({
            image: new Zh({
                radius: 6,
                fill: new ci({
                    color: c
                }),
                stroke: new di({
                    color: b,
                    width: 1.5
                })
            }),
            zIndex: Infinity
        })) : ("LineString" === a ? (d.push(new ei({
            stroke: new di({
                color: b,
                width: 5
            })
        })), d.push(new ei({
            stroke: new di({
                color: c,
                width: 3
            })
        }))) : d.push(new ei({
            stroke: new di({
                color: c,
                width: 1.5
            }),
            fill: new ci({
                color: [255, 255, 255, .5]
            })
        })), d.push(this.zf(!0)));
        return d
    };
    X.prototype.createEditingStyles = X.prototype.Vj;
    X.prototype.zf = function(a) {
        a = void 0 !== a ? a : !0;
        var b = {
            image: new Ts({
                radius: 6,
                points: 4,
                angle: Math.PI / 4,
                fill: new ci({
                    color: [255, 255, 255, .5]
                }),
                stroke: new di({
                    color: [0, 0, 0, 1]
                })
            })
        };
        a && (b.geometry = function(a) {
            a = a.G();
            if ("Point" != a.T()) {
                var b, e = [],
                    f = [],
                    g, h;
                a instanceof rl ? f = a.M() : a instanceof tl ? e = a.M() : a instanceof bd ? f = a.M()[0] : a instanceof yl && (b = a.M());
                if (b)
                    for (g = 0, h = b.length; g < h; g++) e = e.concat(b[g]);
                g = 0;
                for (h = e.length; g < h; g++) f = f.concat(e[g]);
                return f.length ? new wl(f) : a
            }
        });
        return new ei(b)
    };
    X.prototype.getVertexStyle = X.prototype.zf;

    function iw(a, b) {
        var c;
        switch (a.T(b)) {
            case "Point":
                c = a.ad(b);
                c = new ei({
                    image: new Zh({
                        radius: c + 3,
                        fill: new ci({
                            color: [255, 255, 255, 1]
                        })
                    })
                });
                break;
            case "LineString":
            case "Circle":
            case "Polygon":
            case "Rectangle":
                c = a.Zd(b);
                c = new ei({
                    stroke: new di({
                        color: [255, 255, 255, 1],
                        width: c + 6
                    })
                });
                break;
            case "Text":
                c = new ei({
                    text: jw({
                        text: a.uf(b),
                        size: a.ad(b),
                        angle: a.kf(b),
                        width: 9
                    })
                })
        }
        return c
    }
    X.prototype.xk = function(a) {
        var b = ab(a);
        delete b.boundedBy;
        delete b[a.c];
        return b
    };
    X.prototype.getFilteredFeatureValues = X.prototype.xk;
    X.prototype.kf = function(a) {
        return +a.get("a")
    };
    X.prototype.getAngleProperty = X.prototype.kf;
    X.prototype.fh = function(a) {
        return a.get("c")
    };
    X.prototype.getColorProperty = X.prototype.fh;
    X.prototype.$c = function(a) {
        return ve(this.fh(a))
    };
    X.prototype.getRGBAColorProperty = X.prototype.$c;
    X.prototype.uf = function(a) {
        return a.get("n")
    };
    X.prototype.getNameProperty = X.prototype.uf;
    X.prototype.lh = function(a) {
        a = a.get("o");
        return void 0 !== a ? +a : 1
    };
    X.prototype.getOpacityProperty = X.prototype.lh;
    X.prototype.Yd = function(a) {
        a = a.get("m");
        void 0 === a ? a = !1 : "string" === typeof a && (a = "true" === a ? !0 : !1);
        return a
    };
    X.prototype.getShowMeasureProperty = X.prototype.Yd;
    X.prototype.ad = function(a) {
        return +a.get("s")
    };
    X.prototype.getSizeProperty = X.prototype.ad;
    X.prototype.Zd = function(a) {
        return +a.get("k")
    };
    X.prototype.getStrokeProperty = X.prototype.Zd;
    X.prototype.ef = function(a, b) {
        switch (b) {
            case lw:
                this.ah(a);
                break;
            case mw:
                this.bh(a)
        }
    };
    X.prototype["export"] = X.prototype.ef;
    X.prototype.ah = function(a) {
        var b = new sm;
        nw(this, a, b, "export.gpx", "application/gpx+xml")
    };
    X.prototype.exportGPX = X.prototype.ah;
    X.prototype.bh = function(a) {
        var b = new pn;
        nw(this, a, b, "export.kml", "application/vnd.google-earth.kml+xml")
    };
    X.prototype.exportKML = X.prototype.bh;

    function nw(a, b, c, d, e) {
        e = void 0 !== e ? e : "text/plain";
        var f = [],
            g;
        b.forEach(function(a) {
            g = new Fk(ab(a));
            this.setStyle(g, !1);
            f.push(g)
        }, a);
        b = c.writeFeatures(f, a.b ? {
            Ub: "EPSG:4326",
            Ta: a.b
        } : {});
        a.i(b, d, e + ";charset=utf-8")
    }

    function jw(a) {
        a.angle && (a.rotation = (void 0 !== a.angle ? a.angle : 0) * Math.PI / 180, delete a.angle);
        a.font = ["normal", (a.size || 10) + "pt", "Arial"].join(" ");
        a.color && (a.fill = new ci({
            color: a.color || [0, 0, 0, 1]
        }), delete a.color);
        a.stroke = new di({
            color: [255, 255, 255, 1],
            width: a.width || 3
        });
        delete a.width;
        return new on(a)
    }
    X.prototype.Wd = function(a) {
        var b = a.G(),
            c = "";
        b instanceof bd ? "Circle" === this.T(a) ? (b = a.get("z"), a = kw(a, b), c = aw(a, this.b, this.c)) : c = Dv(b, this.b, 0, this.c) : b instanceof rl ? c = Ev(b, this.b, 0, this.c) : b instanceof Qc && (null === this.f ? c = Fv(b, this.j) : (a = b.M(), b = this.g.slice(0), b.unshift(a), c = this.f.apply(this, b)));
        return c
    };
    X.prototype.getMeasure = X.prototype.Wd;
    X.prototype.T = function(a) {
        var b = a.G(),
            c;
        b instanceof Qc ? c = a.get("t") ? "Text" : "Point" : b instanceof wl ? c = "MultiPoint" : b instanceof bd ? c = a.get("l") ? "Circle" : a.get("r") ? "Rectangle" : "Polygon" : b instanceof yl ? c = "MultiPolygon" : b instanceof rl ? c = "LineString" : b instanceof tl && (c = "MultiLineString");
        return c
    };
    X.prototype.getType = X.prototype.T;
    X.prototype.tn = function(a, b, c) {
        c = void 0 !== c ? c : 250;
        var d = vg(b),
            e = D(b),
            d = sd(e, d);
        a = a.G();
        a.Gb(d) || (e = qd(e), b.ab(Fd({
            source: e,
            duration: c
        })), c = a instanceof rl ? sl(a) : a instanceof bd ? (new Qc(dd(a))).M() : a instanceof Qc ? a.M() : Wb(a.K()), zd(D(b), c))
    };
    X.prototype.panMapToFeature = X.prototype.tn;

    function kw(a, b) {
        var c = a.G(),
            d = c.K(),
            d = (d[3] - d[1]) / 2,
            c = Wb(c.K());
        return new rl([c, [Math.cos((b - 90) * Math.PI / 180) * d + c[0], -Math.sin((b - 90) * Math.PI / 180) * d + c[1]]])
    }
    V.service("ngeoFeatureHelper", X);
    var lw = "GPX",
        mw = "KML";
    t("ngeo.FeatureHelper.FormatType", {
        GPX: lw,
        KML: mw
    });
    V.directive("ngeoDrawpoint", function() {
        return {
            restrict: "A",
            require: "^^ngeoDrawfeature",
            link: function(a, b, c, d) {
                a = new or({
                    type: "Point"
                });
                d.qc(a);
                d.drawPoint = a;
                A(a, Gr, d.jc.bind(d, "Point"), d);
                A(a, Za(Wf), d.ic, d)
            }
        }
    });
    V.directive("ngeoDrawrectangle", function() {
        return {
            restrict: "A",
            require: "^^ngeoDrawfeature",
            link: function(a, b, c, d) {
                a = new or({
                    type: "LineString",
                    vk: function(a, b) {
                        b || (b = new bd(null));
                        var c = a[0],
                            d = a[1];
                        b.ba([
                            [c, [c[0], d[1]], d, [d[0], c[1]], c]
                        ]);
                        return b
                    },
                    zh: 2
                });
                d.qc(a);
                d.drawRectangle = a;
                A(a, Gr, d.jc.bind(d, "Rectangle"), d);
                A(a, Za(Wf), d.ic, d)
            }
        }
    });
    V.directive("ngeoDrawtext", function() {
        return {
            restrict: "A",
            require: "^^ngeoDrawfeature",
            link: function(a, b, c, d) {
                a = new or({
                    type: "Point"
                });
                d.qc(a);
                d.drawText = a;
                A(a, Gr, d.jc.bind(d, "Text"), d);
                A(a, Za(Wf), d.ic, d)
            }
        }
    });

    function ow(a, b, c) {
        return {
            restrict: "A",
            require: "^^ngeoDrawfeature",
            link: function(d, e, f, g) {
                e = b("Click to start drawing polygon");
                f = b("Click to continue drawing<br/>Double-click or click starting point to finish");
                d = new Jv(c("ngeoUnitPrefix"), {
                    style: new ei,
                    startMsg: a("<div translate>" + e + "</div>")(d)[0],
                    continueMsg: a("<div translate>" + f + "</div>")(d)[0]
                });
                g.qc(d);
                g.measureArea = d;
                A(d, "measureend", g.jc.bind(g, "Polygon"), g);
                A(d, Za(Wf), g.ic, g)
            }
        }
    }
    ow.$inject = ["$compile", "gettext", "$filter"];
    V.directive("ngeoMeasurearea", ow);

    function pw(a, b, c) {
        return {
            restrict: "A",
            require: "^^ngeoDrawfeature",
            link: function(d, e, f, g) {
                e = b("Click to start drawing circle");
                f = b("Click to finish");
                d = new Zv(c("ngeoUnitPrefix"), {
                    style: new ei,
                    startMsg: a("<div translate>" + e + "</div>")(d)[0],
                    continueMsg: a("<div translate>" + f + "</div>")(d)[0]
                });
                g.qc(d);
                g.measureAzimut = d;
                A(d, "measureend", function(a) {
                    var b = a.feature.G(),
                        c = Pl(b.c)[1],
                        c = gd(c, 64);
                    a.feature = new Fk(c);
                    b = bw(Pl(b.c)[0]);
                    a.feature.set("azimut", b);
                    g.jc("Circle", a)
                }, g);
                A(d, Za(Wf), g.ic, g)
            }
        }
    }
    pw.$inject = ["$compile", "gettext", "$filter"];
    V.directive("ngeoMeasureazimut", pw);

    function qw(a, b, c) {
        return {
            restrict: "A",
            require: "^^ngeoDrawfeature",
            link: function(d, e, f, g) {
                e = b("Click to start drawing line");
                f = b("Click to continue drawing<br/>Double-click or click last point to finish");
                d = new Kv(c("ngeoUnitPrefix"), {
                    style: new ei,
                    startMsg: a("<div translate>" + e + "</div>")(d)[0],
                    continueMsg: a("<div translate>" + f + "</div>")(d)[0]
                });
                g.qc(d);
                g.measureLength = d;
                A(d, "measureend", g.jc.bind(g, "LineString"), g);
                A(d, Za(Wf), g.ic, g)
            }
        }
    }
    qw.$inject = ["$compile", "gettext", "$filter"];
    V.directive("ngeoMeasurelength", qw);
    V.directive("ngeoDrawfeature", function() {
        return {
            controller: "ngeoDrawfeatureController",
            scope: !0,
            bindToController: {
                active: "=ngeoDrawfeatureActive",
                map: "=ngeoDrawfeatureMap"
            },
            controllerAs: "dfCtrl"
        }
    });

    function rw(a, b, c, d, e, f, g, h) {
        void 0 === this.active && (this.active = !1);
        this.S = e;
        this.f = f;
        this.j = g;
        this.c = h;
        this.b = [];
        a.$watch(function() {
            return this.active
        }.bind(this), function(a) {
            !1 === a && this.b.forEach(function(a) {
                a.setActive(!1)
            }, this)
        }.bind(this))
    }
    rw.$inject = "$scope $compile $sce gettext gettextCatalog ngeoDecorateInteraction ngeoFeatureHelper ngeoFeatures".split(" ");
    rw.prototype.qc = function(a) {
        this.b.push(a);
        a.setActive(!1);
        this.f(a);
        Wj(this.map, a)
    };
    rw.prototype.registerInteraction = rw.prototype.qc;
    rw.prototype.ic = function() {
        this.active = this.b.some(function(a) {
            return a.getActive()
        }, this)
    };
    rw.prototype.handleActiveChange = rw.prototype.ic;
    rw.prototype.jc = function(a, b) {
        var c = new Fk(b.feature.G());
        switch (a) {
            case "Circle":
                c.set("l", !0);
                void 0 !== b.feature.get("azimut") && c.set("z", b.feature.get("azimut"));
                break;
            case "Text":
                c.set("t", !0);
                break;
            case "Rectangle":
                c.set("r", !0)
        }
        var d = this.S.getString(a);
        c.set("n", d + " " + (this.c.get(ke) + 1));
        c.set("c", "Text" !== a ? "#DB4436" : "#000000");
        c.set("a", 0);
        c.set("o", .2);
        c.set("m", !1);
        c.set("s", 10);
        c.set("k", 1);
        this.j.setStyle(c);
        this.c.push(c)
    };
    rw.prototype.handleDrawEnd = rw.prototype.jc;
    V.controller("ngeoDrawfeatureController", rw);
    V.directive("ngeoExportfeatures", function() {
        return {
            controller: "ngeoExportfeaturesController",
            scope: !0,
            bindToController: {
                features: "=ngeoExportfeaturesFeatures"
            },
            controllerAs: "efCtrl"
        }
    });

    function sw(a, b, c, d) {
        this.g = a;
        var e = ["ngeo-exportfeature", x(this)].join("-");
        this.o = e;
        this.f = d;
        var f;
        b.has("ngeoExportFeatureFormats") ? f = b.get("ngeoExportFeatureFormats") : f = [mw];
        this.b = null;
        this.Ja = [];
        if (1 < f.length) {
            a.attr("id", e);
            var g = $("<ul />", {
                "class": "dropdown-menu",
                "aria-labelledby": e
            }).appendTo(a.parent()[0]);
            this.b = g;
            var h;
            f.forEach(function(a) {
                h = $("<li />").appendTo(g).append($("<a />", {
                    href: "#",
                    text: a
                }).on(["click", e].join("."), this.wl.bind(this, a)));
                this.Ja.push(h)
            }, this)
        }
        this.c = f;
        a.on(["click",
            e
        ].join("."), this.j.bind(this));
        c.$on("$destroy", this.i.bind(this))
    }
    sw.$inject = ["$element", "$injector", "$scope", "ngeoFeatureHelper"];
    sw.prototype.j = function() {
        var a = this.features.c;
        if (1 === this.c.length) this.f.ef(a, this.c[0]);
        else if (1 === a.length) {
            var b = a[0].G(),
                c;
            this.c.forEach(function(a, e) {
                c = this.Ja[e];
                a === lw && (b instanceof Qc || b instanceof rl ? c.removeClass("disabled") : c.addClass("disabled"))
            }, this)
        }
    };
    sw.prototype.wl = function(a, b) {
        $(b.target.parentElement).hasClass("disabled") || this.f.ef(this.features.c, a)
    };
    sw.prototype.i = function() {
        var a = this.o;
        this.g.off(["click", a].join("."));
        this.b && (this.b.remove(), this.Ja.forEach(function(b) {
            b.off(["click", a].join("."))
        }, this), this.Ja.length = 0, this.b = null)
    };
    V.controller("ngeoExportfeaturesController", sw);

    function tw(a) {
        return {
            restrict: "A",
            scope: {
                fileContent: "=ngeoFilereader",
                supported: "=?ngeoFilereaderSupported"
            },
            link: function(b, c) {
                var d = "FileReader" in a;
                (b.supported = d) && c.bind("change", function(c) {
                    var d = new a.FileReader;
                    d.onload = function(a) {
                        b.$apply(function() {
                            b.fileContent = a.target.result
                        })
                    };
                    d.readAsText(c.target.files[0])
                })
            }
        }
    }
    tw.$inject = ["$window"];
    V.directive("ngeoFilereader", tw);
    V.value("ngeoGridTemplateUrl", function(a, b) {
        var c = b.ngeoGridTemplateurl;
        return void 0 !== c ? c : "ngeo/grid.html"
    });

    function uw(a, b) {
        this.data = a;
        this.columnDefs = b;
        this.selectedRows = {}
    }
    t("ngeo.GridConfig", uw);

    function vw(a) {
        return "" + x(a)
    }
    uw.getRowUid = vw;
    uw.prototype.Gc = function(a) {
        return !!this.selectedRows[vw(a)]
    };
    uw.prototype.isRowSelected = uw.prototype.Gc;
    uw.prototype.Jk = function() {
        return Object.keys(this.selectedRows).length
    };
    uw.prototype.getSelectedCount = uw.prototype.Jk;
    uw.prototype.Kk = function() {
        return this.data.filter(function(a) {
            return this.Gc(a)
        }.bind(this))
    };
    uw.prototype.getSelectedRows = uw.prototype.Kk;

    function ww(a, b) {
        var c = vw(b);
        a.selectedRows[c] = b
    }

    function xw(a, b) {
        var c = vw(b);
        a.Gc(b) ? delete a.selectedRows[c] : a.selectedRows[c] = b
    }
    uw.prototype.selectAll = function() {
        this.data.forEach(function(a) {
            ww(this, a)
        }.bind(this))
    };
    uw.prototype.selectAll = uw.prototype.selectAll;
    uw.prototype.Bi = function() {
        for (var a in this.selectedRows) delete this.selectedRows[a]
    };
    uw.prototype.unselectAll = uw.prototype.Bi;
    uw.prototype.Vl = function() {
        this.data.forEach(function(a) {
            xw(this, a)
        }.bind(this))
    };
    uw.prototype.invertSelection = uw.prototype.Vl;

    function yw(a) {
        return {
            bindToController: !0,
            controller: "ngeoGridController",
            controllerAs: "ctrl",
            restrict: "E",
            scope: {
                configuration: "=ngeoGridConfiguration"
            },
            templateUrl: a
        }
    }
    yw.$inject = ["ngeoGridTemplateUrl"];
    V.directive("ngeoGrid", yw);

    function zw() {
        this.selectedRows = this.configuration.selectedRows;
        this.sortAscending = !0;
        this.floatTheadConfig = {
            scrollContainer: function(a) {
                return a.closest(".ngeo-grid-table-container")
            }
        }
    }
    zw.$inject = ["$scope"];
    zw.prototype.sort = function(a) {
        this.sortAscending = this.sortedBy === a ? !this.sortAscending : !0;
        this.sortedBy = a;
        var b = this.sortAscending ? 1 : -1;
        this.configuration.data.sort(function(c, d) {
            return c[a] ? d[a] ? c[a] > d[a] ? b : -b : -1 : 1
        })
    };
    zw.prototype.sort = zw.prototype.sort;
    zw.prototype.Mj = function(a, b) {
        var c = !b.altKey && !(b.metaKey || b.ctrlKey) && b.shiftKey,
            d = !b.altKey && (Pe ? b.metaKey : b.ctrlKey) && !b.shiftKey;
        if (c && !d) {
            var e = vw(a),
                c = this.configuration.data;
            if (!this.configuration.Gc(a)) {
                for (var d = void 0, f = [], g = 0; g < c.length; g++) {
                    var h = c[g],
                        k = vw(h);
                    e === k ? d = g : this.configuration.Gc(h) && f.push(g)
                }
                0 == f.length && ww(this.configuration, a);
                g = Infinity;
                e = f[0];
                for (h = 0; h < f.length; h++) {
                    var k = f[h],
                        l = Math.abs(k - d);
                    g > l && (g = l, e = k)
                }
                f = d > e ? d : e;
                for (d = d < e ? d : e; d <= f; d++) ww(this.configuration, c[d])
            }
        } else !c &&
            d ? xw(this.configuration, a) : (c = this.configuration.Gc(a), this.configuration.Bi(), c || ww(this.configuration, a))
    };
    zw.prototype.clickRow = zw.prototype.Mj;
    zw.prototype.Fn = function(a) {
        var b = !a.altKey && (Pe ? a.metaKey : a.ctrlKey) && !a.shiftKey;
        (!a.altKey && !a.metaKey && !a.ctrlKey && a.shiftKey || b) && a.preventDefault()
    };
    zw.prototype.preventTextSelection = zw.prototype.Fn;
    V.controller("ngeoGridController", zw);
    V.value("ngeoDecorateLayer", function(a) {
        Object.defineProperty(a, "visible", {
            configurable: !0,
            get: function() {
                return ah(a)
            },
            set: function(b) {
                bh(a, b)
            }
        });
        Object.defineProperty(a, "opacity", {
            configurable: !0,
            get: function() {
                return Math.round(100 * $g(a)) / 100 + ""
            },
            set: function(b) {
                a.set("opacity", +b)
            }
        })
    });
    V.value("ngeoDecorateLayerLoading", function(a, b) {
        function c(a) {
            var b = a.get("load_count"),
                d = a.get("parent_group");
            a.set("load_count", ++b, !0);
            d && c(d)
        }

        function d(a) {
            var b = a.get("load_count"),
                c = a.get("parent_group");
            a.set("load_count", --b, !0);
            c && d(c)
        }
        var e, f = null,
            g = null;
        a.set("load_count", 0, !0);
        if (a instanceof ch) eh(a).on("add", function(b) {
            b.element.set("parent_group", a)
        });
        if (a instanceof sh) {
            e = C(a);
            if (null === e) return;
            e instanceof ps ? (f = ["tileloadstart"], g = ["tileloadend", "tileloaderror"]) : e instanceof
            zj && (f = ["imageloadstart"], g = ["imageloadend", "imageloaderror"]);
            e.on(f, function() {
                c(a);
                b.$applyAsync()
            });
            e.on(g, function() {
                d(a);
                b.$applyAsync()
            })
        }
        Object.defineProperty(a, "loading", {
            configurable: !0,
            get: function() {
                return 0 < a.get("load_count")
            }
        })
    });
    V.value("ngeoLayertreeTemplateUrl", function(a, b) {
        var c = b.ngeoLayertreeTemplateurl;
        return void 0 !== c ? c : "ngeo/layertree.html"
    });

    function Aw(a, b) {
        return {
            restrict: "A",
            scope: !0,
            templateUrl: b,
            controller: "NgeoLayertreeController"
        }
    }
    Aw.$inject = ["$compile", "ngeoLayertreeTemplateUrl"];
    V.directive("ngeoLayertree", Aw);

    function Bw(a, b, c, d, e) {
        var f = void 0 === c.ngeoLayertreeNotroot;
        this.isRoot = f;
        var g = c.ngeoLayertree;
        this.xe = b;
        this.properties = {};
        this.b = "off";
        this.node = void 0;
        f ? a.$watch(g, function(a) {
            this.node = a
        }.bind(this)) : this.node = a.$eval(g);
        b = a.$eval(c.ngeoLayertreeMap);
        this.parent = a.$parent.layertreeCtrl;
        this.children = [];
        this.parent && this.parent.children.push(this);
        a.$on("$destroy", function() {
            this.parent && this.parent.children.splice(this.parent.children.indexOf(this), 1)
        }.bind(this));
        this.uid = x(this);
        this.depth =
            f ? 0 : this.parent.depth + 1;
        a.uid = this.uid;
        a.depth = this.depth;
        this.map = b;
        b = c.ngeoLayertreeNodelayer;
        void 0 === b && (b = a.$eval(c.ngeoLayertreeNodelayerexpr));
        this.nodelayerExpr = b;
        if (this.layer = f ? null : a.$eval(b, {
                treeCtrl: this
            })) e(this.layer, a), d(this.layer), A(this.layer, Za("opacity"), function() {
            this.xe.$broadcast("ngeo-layertree-opacity", this)
        }, this);
        d = c.ngeoLayertreeListeners;
        void 0 === d && (d = a.$eval(c.ngeoLayertreeListenersexpr));
        (this.listenersExpr = d) && a.$eval(d, {
            treeScope: a,
            treeCtrl: this
        });
        a.layertreeCtrl =
            this
    }
    t("ngeo.LayertreeController", Bw);
    Bw.$inject = ["$scope", "$rootScope", "$attrs", "ngeoDecorateLayer", "ngeoDecorateLayerLoading"];
    Bw.prototype.ia = function() {
        return this.b
    };
    Bw.prototype.getState = Bw.prototype.ia;
    Bw.prototype.Ae = function(a, b) {
        if (a !== this.b) {
            Cw(this, a);
            this.parent && Dw(this.parent);
            var c = this.isRoot ? this.children : [Ew(this)];
            (void 0 === b || b) && c.forEach(function(a) {
                this.xe.$broadcast("ngeo-layertree-state", this, a)
            }.bind(this))
        }
    };
    Bw.prototype.setState = Bw.prototype.Ae;

    function Cw(a, b) {
        a.b = "on" === b ? "on" : "off";
        a.children.forEach(function(a) {
            Cw(a, this.b)
        }, a)
    }

    function Dw(a) {
        var b = a.mf();
        a.b !== b && (a.b = b, a.parent && Dw(a.parent))
    }
    Bw.prototype.mf = function() {
        if (void 0 === this.node.children) return this.b;
        var a, b;
        this.children.some(function(c) {
            a = c.mf();
            if (b && b !== a) return a = "indeterminate";
            b = a
        });
        return a
    };
    Bw.prototype.getCalculateState = Bw.prototype.mf;
    Bw.prototype.Lk = function(a) {
        var b = this.layer,
            c = this.map;
        if (b)
            if (void 0 !== a) a ? Xj(c, b) : eh(Yj(c)).remove(b);
            else return 0 <= eh(Yj(c)).c.indexOf(b)
    };
    Bw.prototype.getSetActive = Bw.prototype.Lk;

    function Ew(a) {
        for (; !a.parent.isRoot;) a = a.parent;
        return a
    }
    Bw.prototype.Ai = function(a) {
        switch (a(this) || "DESCEND") {
            case "STOP":
                return !0;
            case "SKIP":
                return !1;
            case "DESCEND":
                for (var b = 0; b < this.children.length; ++b)
                    if (this.children[b].Ai(a)) return !0;
                return !1
        }
    };
    Bw.prototype.traverseDepthFirst = Bw.prototype.Ai;
    V.controller("NgeoLayertreeController", Bw);
    V.directive("ngeoMap", function() {
        return {
            restrict: "A",
            link: function(a, b, c) {
                a.$eval(c.ngeoMap).set(Vj, b[0])
            }
        }
    });

    function Fw(a) {
        return {
            restrict: "A",
            scope: !1,
            link: function(b, c, d) {
                function e(b) {
                    a.ed(f, b.coordinate)
                }
                var f = b.$eval(d.ngeoMapQueryMap),
                    g = null;
                b.$watch(d.ngeoMapQueryActive, function(c) {
                    c ? g = A(f, "click", e) : (null !== g && (Ja(g), g = null), !1 !== b.$eval(d.ngeoMapQueryAutoclear) && a.clear())
                })
            }
        }
    }
    Fw.$inject = ["ngeoQuery"];
    V.directive("ngeoMapQuery", Fw);
    t("ngeo.MobileGeolocationEventType", {
        ERROR: "mobile-geolocation-error"
    });
    V.directive("ngeoMobileGeolocation", function() {
        return {
            restrict: "A",
            scope: {
                getMobileMapFn: "&ngeoMobileGeolocationMap",
                getMobileGeolocationOptionsFn: "&ngeoMobileGeolocationOptions"
            },
            controller: "NgeoMobileGeolocationController",
            controllerAs: "ctrl"
        }
    });

    function Gw(a, b, c, d, e) {
        b.on("click", this.zi.bind(this));
        b = a.getMobileMapFn();
        this.s = a;
        this.f = b;
        var f = a.getMobileGeolocationOptionsFn() || {};
        this.Jc = e;
        this.c = d.qf();
        this.za = new Dq({
            projection: D(b).c
        });
        this.za.on("error", function(b) {
            Hw(this);
            this.Jc.error(b.message);
            a.$emit("mobile-geolocation-error", b)
        }, this);
        this.j = new Fk;
        f.positionFeatureStyle && this.j.setStyle(f.positionFeatureStyle);
        this.cc = new Fk;
        f.accuracyFeatureStyle && this.cc.setStyle(f.accuracyFeatureStyle);
        this.i = f.zoom;
        this.o = this.b = !1;
        A(this.za,
            Za(Nq),
            function() {
                Gk(this.cc, this.za.get(Nq) || null)
            }, this);
        A(this.za, Za(Hq), function(a) {
            this.ig(a)
        }, this);
        d = D(b);
        A(d, Za(md), this.g, this);
        A(d, Za(od), this.g, this);
        A(d, Za(pd), this.g, this);
        c(this.za)
    }
    t("ngeo.MobileGeolocationController", Gw);
    Gw.$inject = ["$scope", "$element", "ngeoDecorateGeolocation", "ngeoFeatureOverlayMgr", "ngeoNotification"];
    Gw.prototype.zi = function() {
        if (this.za.get(Fq)) {
            var a = this.za.get(Hq);
            if (void 0 === a) Hw(this), this.s.$emit("mobile-geolocation-error", null);
            else {
                var b = qd(D(this.f));
                a[0] === b[0] && a[1] === b[1] ? Hw(this) : (Hw(this), Iw(this))
            }
        } else Iw(this)
    };
    Gw.prototype.toggleTracking = Gw.prototype.zi;

    function Iw(a) {
        a.c.ya(a.j);
        a.c.ya(a.cc);
        a.b = !0;
        a.za.set(Fq, !0)
    }

    function Hw(a) {
        a.c.clear();
        a.b = !1;
        a.za.set(Fq, !1);
        a.Jc.clear()
    }
    Gw.prototype.ig = function() {
        var a = this.za.get(Hq),
            b = new Qc(a);
        Gk(this.j, b);
        this.b && (this.o = !0, zd(D(this.f), a), void 0 !== this.i && Bd(D(this.f), this.i), this.o = !1)
    };
    Gw.prototype.g = function() {
        this.b && !this.o && (this.b = !1)
    };
    V.controller("NgeoMobileGeolocationController", Gw);

    function Jw() {
        return {
            template: '<div class="modal fade" tabindex="-1" role="dialog"><div class="modal-dialog"><div class="modal-content"></div></div></div>',
            restrict: "E",
            require: "ngModel",
            transclude: !0,
            link: function(a, b, c, d, e) {
                function f() {
                    k = a.$new();
                    e(k, function(a) {
                        h.find(".modal-content").append(a)
                    })
                }

                function g() {
                    k.$destroy();
                    h.find(".modal-content").empty()
                }
                var h = b.children();
                b = "true" === c.ngeoModalDestroyContentOnHide;
                var k = a.$new();
                angular.element(document.body).append(h);
                d.$render = function() {
                    h.modal(d.$viewValue ?
                        "show" : "hide")
                };
                h.on("shown.bs.modal hidden.bs.modal", function(b) {
                    var c = b.type;
                    a.$apply(function() {
                        d.$setViewValue("shown" == c)
                    })
                });
                b ? (h.on("hide.bs.modal", g), h.on("show.bs.modal", f)) : h.find(".modal-content").append(e())
            }
        }
    }
    Jw.$inject = ["$parse"];
    V.directive("ngeoModal", Jw);

    function Kw(a) {
        function b(a) {
            this.anchorElm[0] !== a.target && this.bodyElm.parent()[0] !== a.target & 0 === this.bodyElm.parent().find(a.target).length && this.shown && this.af()
        }
        this.shown = !1;
        this.bodyElm = this.anchorElm = void 0;
        angular.element("body").on("mousedown", b.bind(this));
        a.$on("$destroy", function() {
            angular.element("body").off("mousedown", b)
        })
    }
    t("ngeo.PopoverController", Kw);
    Kw.$inject = ["$scope"];
    Kw.prototype.af = function() {
        this.shown = !1;
        this.anchorElm.popover("hide")
    };
    Kw.prototype.dismissPopover = Kw.prototype.af;
    V.controller("NgeoPopoverController", Kw);
    V.directive("ngeoPopover", function() {
        return {
            restrict: "A",
            scope: !0,
            controller: "NgeoPopoverController",
            controllerAs: "popoverCtrl",
            link: function(a, b, c, d) {
                d.anchorElm.on("hidden.bs.popover", function() {
                    d.anchorElm.data("bs.popover").inState.click = !1
                });
                d.anchorElm.on("inserted.bs.popover", function() {
                    d.bodyElm.show();
                    d.shown = !0
                });
                d.anchorElm.popover({
                    container: "body",
                    html: !0,
                    content: d.bodyElm,
                    placement: c.ngeoPopoverPlacement || "right"
                });
                if (c.ngeoPopoverDismiss) $(c.ngeoPopoverDismiss).on("scroll", function() {
                    d.af()
                });
                a.$on("$destroy", function() {
                    d.anchorElm.popover("destroy");
                    d.anchorElm.unbind("inserted.bs.popover");
                    d.anchorElm.unbind("hidden.bs.popover")
                })
            }
        }
    });
    V.directive("ngeoPopoverAnchor", function() {
        return {
            restrict: "A",
            require: "^^ngeoPopover",
            link: function(a, b, c, d) {
                d.anchorElm = b
            }
        }
    });
    V.directive("ngeoPopoverContent", function() {
        return {
            restrict: "A",
            require: "^^ngeoPopover",
            link: function(a, b, c, d) {
                d.bodyElm = b;
                b.hide()
            }
        }
    });
    V.value("ngeoPopupTemplateUrl", function(a, b) {
        var c = b.ngeoPopupTemplateurl;
        return void 0 !== c ? c : "ngeo/popup.html"
    });

    function Lw(a) {
        return {
            restrict: "A",
            templateUrl: a,
            link: function(a, c) {
                c.addClass("popover");
                a.close = function(a) {
                    a && (a.stopPropagation(), a.preventDefault());
                    c.addClass("hidden")
                };
                a.$watch("open", function(a) {
                    c.css("display", a ? "block" : "none")
                })
            }
        }
    }
    Lw.$inject = ["ngeoPopupTemplateUrl"];
    V.directive("ngeoPopup", Lw);

    function Mw(a) {
        return function(b, c, d) {
            var e = null;
            return function() {
                var f = this,
                    g = arguments;
                null !== e && a.cancel(e);
                e = a(function() {
                    e = null;
                    b.apply(f, g)
                }, c, d)
            }
        }
    }
    Mw.$inject = ["$timeout"];
    V.factory("ngeoDebounce", Mw);

    function Nw(a) {
        return {
            restrict: "A",
            link: function(b, c, d) {
                function e() {
                    void 0 !== h && (g.datum(k).call(h), void 0 !== k && h.si(l))
                }
                var f = d.ngeoProfileOptions,
                    g = d3.select(c[0]),
                    h, k, l;
                b.$watchCollection(f, function(a) {
                    if (a = Xs(a)) {
                        if (void 0 !== a.hoverCallback) {
                            var c = a.hoverCallback;
                            a.hoverCallback = function() {
                                c.apply(null, arguments);
                                b.$applyAsync()
                            }
                        }
                        if (void 0 !== a.outCallback) {
                            var d = a.outCallback;
                            a.outCallback = function() {
                                d();
                                b.$applyAsync()
                            }
                        }
                        h = $s(a);
                        e()
                    }
                });
                b.$watch(d.ngeoProfile, function(a) {
                    k = a;
                    e()
                });
                b.$watch(d.ngeoProfilePois,
                    function(a) {
                        l = a;
                        e()
                    });
                b.$watch(d.ngeoProfileHighlight, function(a) {
                    void 0 !== a && (0 < a ? h.highlight(a) : h.Ng())
                });
                gu(window, "resize", a(e, 50, !0), !1, this)
            }
        }
    }
    Nw.$inject = ["ngeoDebounce"];
    V.directive("ngeoProfile", Nw);
    V.directive("ngeoRecenter", function() {
        return {
            restrict: "A",
            link: function(a, b, c) {
                function d(b) {
                    var c = b.attr("ngeo-extent");
                    if (void 0 !== c) {
                        var d = vg(e);
                        yd(D(e), a.$eval(c), d)
                    }
                    b = b.attr("ngeo-zoom");
                    void 0 !== b && Bd(D(e), a.$eval(b))
                }
                var e = a.$eval(c.ngeoRecenterMap);
                b.on("click", "*", function() {
                    d(angular.element($(this)))
                });
                b.on("change", function(a) {
                    d(angular.element(a.target.options[a.target.selectedIndex]))
                })
            }
        }
    });

    function Ow(a) {
        var b;
        b = b || 0;
        return function() {
            return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
        }
    };

    function Pw(a, b, c) {
        Ot.call(this);
        this.b = null;
        this.j = !1;
        this.v = a;
        this.i = c;
        this.c = b || window;
        this.f = pa(this.g, this)
    }
    sa(Pw, Ot);
    Pw.prototype.start = function() {
        Qw(this);
        this.j = !1;
        var a = Rw(this),
            b = Sw(this);
        a && !b && this.c.mozRequestAnimationFrame ? (this.b = gu(this.c, "MozBeforePaint", this.f), this.c.mozRequestAnimationFrame(null), this.j = !0) : this.b = a && b ? a.call(this.c, this.f) : this.c.setTimeout(Ow(this.f), 20)
    };

    function Qw(a) {
        if (null != a.b) {
            var b = Rw(a),
                c = Sw(a);
            b && !c && a.c.mozRequestAnimationFrame ? nu(a.b) : b && c ? c.call(a.c, a.b) : a.c.clearTimeout(a.b)
        }
        a.b = null
    }
    Pw.prototype.g = function() {
        this.j && this.b && nu(this.b);
        this.b = null;
        this.v.call(this.i, ra())
    };
    Pw.prototype.ob = function() {
        Qw(this);
        Pw.hb.ob.call(this)
    };

    function Rw(a) {
        a = a.c;
        return a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || null
    }

    function Sw(a) {
        a = a.c;
        return a.cancelAnimationFrame || a.cancelRequestAnimationFrame || a.webkitCancelRequestAnimationFrame || a.mozCancelRequestAnimationFrame || a.oCancelRequestAnimationFrame || a.msCancelRequestAnimationFrame || null
    };

    function Tw(a) {
        return {
            restrict: "A",
            link: function(b, c, d) {
                var e = b.$eval(d.ngeoResizemap);
                d = d.ngeoResizemapState;
                var f, g = new Pw(function() {
                    e.td();
                    ck(e);
                    1E3 > Date.now() - f && g.start()
                }, a);
                c.bind("transitionend", function() {
                    e.td();
                    ck(e)
                });
                b.$watch(d, function(a, b) {
                    a != b && (f = Date.now(), Qw(g), g.start())
                })
            }
        }
    }
    Tw.$inject = ["$window"];
    V.directive("ngeoResizemap", Tw);
    V.value("ngeoScaleselectorTemplateUrl", function(a, b) {
        var c = b.ngeoScaleselectorTemplateurl;
        return void 0 !== c ? c : "ngeo/scaleselector.html"
    });

    function Uw(a) {
        return {
            restrict: "A",
            scope: !0,
            controller: "NgeoScaleselectorController",
            templateUrl: a
        }
    }
    Uw.$inject = ["ngeoScaleselectorTemplateUrl"];
    V.directive("ngeoScaleselector", Uw);

    function Vw(a, b, c) {
        this.scales = a.$eval(c.ngeoScaleselector);
        a.$watch(function() {
            return Object.keys(this.scales).length
        }.bind(this), function() {
            this.zoomLevels = Object.keys(this.scales).map(Number);
            this.zoomLevels.sort(bb)
        }.bind(this));
        this.b = a.$eval(c.ngeoScaleselectorMap);
        b = a.$eval(c.ngeoScaleselectorOptions);
        this.options = Ww(b);
        this.j = a;
        this.c = null;
        this.currentScale = void 0;
        null !== D(this.b) && (b = xd(D(this.b)), void 0 !== b && (this.currentScale = this.Da(b)));
        A(this.b, Za("view"), this.g, this);
        Xw(this);
        a.scaleselectorCtrl =
            this
    }
    t("ngeo.ScaleselectorController", Vw);
    Vw.$inject = ["$scope", "$element", "$attrs"];

    function Ww(a) {
        void 0 === a ? a = {
            dropup: !1
        } : void 0 === a.dropup && (a.dropup = !1);
        return a
    }
    Vw.prototype.Da = function(a) {
        return this.scales[a]
    };
    Vw.prototype.getScale = Vw.prototype.Da;
    Vw.prototype.Kj = function(a) {
        Bd(D(this.b), a)
    };
    Vw.prototype.changeZoom = Vw.prototype.Kj;
    Vw.prototype.f = function() {
        var a = D(this.b),
            b = this.scales[xd(a)];
        this.j.$applyAsync(function() {
            this.currentScale = b
        }.bind(this))
    };
    Vw.prototype.g = function() {
        Xw(this);
        this.f()
    };

    function Xw(a) {
        null !== a.c && Ja(a.c);
        var b = D(a.b);
        a.c = A(b, Za("resolution"), a.f, a)
    }
    V.controller("NgeoScaleselectorController", Vw);

    function Yw() {
        return {
            restrict: "A",
            link: function(a, b, c) {
                var d = a.$eval(c.ngeoSearch),
                    e = a.$eval(c.ngeoSearchDatasets).slice();
                e.unshift(d);
                b.typeahead.apply(b, e);
                c = a.$eval(c.ngeoSearchListeners);
                var f = Yw.b(c);
                b.on("typeahead:open", function() {
                    a.$apply(function() {
                        f.open()
                    })
                });
                b.on("typeahead:close", function() {
                    a.$apply(function() {
                        f.close()
                    })
                });
                b.on("typeahead:cursorchange", function(b, c, d) {
                    a.$apply(function() {
                        f.cursorchange(b, c, d)
                    })
                });
                b.on("typeahead:select", function(b, c, d) {
                    a.$apply(function() {
                        f.select(b,
                            c, d)
                    })
                });
                b.on("typeahead:autocomplete", function(b, c, d) {
                    a.$apply(function() {
                        f.autocomplete(b, c, d)
                    })
                })
            }
        }
    }
    Yw.b = function(a) {
        var b;
        a ? b = {
            open: void 0 !== a.open ? a.open : ta,
            close: void 0 !== a.close ? a.close : ta,
            cursorchange: void 0 !== a.cursorchange ? a.cursorchange : ta,
            select: void 0 !== a.select ? a.select : ta,
            autocomplete: void 0 !== a.autocomplete ? a.autocomplete : ta
        } : b = {
            open: ta,
            close: ta,
            cursorchange: ta,
            select: ta,
            autocomplete: ta
        };
        return b
    };
    V.directive("ngeoSearch", Yw);

    function Zw(a) {
        Ot.call(this);
        this.c = a;
        this.b = {}
    }
    sa(Zw, Ot);
    var $w = [];
    Zw.prototype.listen = function(a, b, c, d) {
        da(b) || (b && ($w[0] = b.toString()), b = $w);
        for (var e = 0; e < b.length; e++) {
            var f = gu(a, b[e], c || this.handleEvent, d || !1, this.c || this);
            if (!f) break;
            this.b[f.key] = f
        }
        return this
    };
    Zw.prototype.Oc = function(a, b, c, d, e) {
        if (da(b))
            for (var f = 0; f < b.length; f++) this.Oc(a, b[f], c, d, e);
        else c = c || this.handleEvent, e = e || this.c || this, c = hu(c), d = !!d, b = a && a[Wt] ? cu(a.j, String(b), c, d, e) : a ? (a = iu(a)) ? cu(a, b, c, d, e) : null : null, b && (nu(b), delete this.b[b.key]);
        return this
    };

    function ax(a) {
        Us(a.b, function(a, c) {
            this.b.hasOwnProperty(c) && nu(a)
        }, a);
        a.b = {}
    }
    Zw.prototype.ob = function() {
        Zw.hb.ob.call(this);
        ax(this)
    };
    Zw.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };

    function bx() {
        Ot.call(this);
        this.j = new $t(this);
        this.fa = this;
        this.V = null
    }
    sa(bx, Ot);
    bx.prototype[Wt] = !0;
    bx.prototype.removeEventListener = function(a, b, c, d) {
        mu(this, a, b, c, d)
    };

    function cx(a, b) {
        var c, d = a.V;
        if (d)
            for (c = []; d; d = d.V) c.push(d);
        var d = a.fa,
            e = b,
            f = e.type || e;
        if (ha(e)) e = new St(e, d);
        else if (e instanceof St) e.target = e.target || d;
        else {
            var g = e,
                e = new St(f, d);
            Zs(e, g)
        }
        var g = !0,
            h;
        if (c)
            for (var k = c.length - 1; !e.c && 0 <= k; k--) h = e.currentTarget = c[k], g = dx(h, f, !0, e) && g;
        e.c || (h = e.currentTarget = d, g = dx(h, f, !0, e) && g, e.c || (g = dx(h, f, !1, e) && g));
        if (c)
            for (k = 0; !e.c && k < c.length; k++) h = e.currentTarget = c[k], g = dx(h, f, !1, e) && g;
        return g
    }
    bx.prototype.ob = function() {
        bx.hb.ob.call(this);
        if (this.j) {
            var a = this.j,
                b = 0,
                c;
            for (c in a.listeners) {
                for (var d = a.listeners[c], e = 0; e < d.length; e++) ++b, Zt(d[e]);
                delete a.listeners[c];
                a.b--
            }
        }
        this.V = null
    };
    bx.prototype.listen = function(a, b, c, d) {
        return this.j.add(String(a), b, !1, c, d)
    };
    bx.prototype.Oc = function(a, b, c, d) {
        return this.j.remove(String(a), b, c, d)
    };

    function dx(a, b, c, d) {
        b = a.j.listeners[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.Mc && g.Od == c) {
                var h = g.listener,
                    k = g.de || g.src;
                g.dc && bu(a.j, g);
                e = !1 !== h.call(k, d) && e
            }
        }
        return e && 0 != d.mi
    };

    function ex(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }
    m = ex.prototype;
    m.clone = function() {
        return new ex(this.left, this.top, this.width, this.height)
    };
    m.contains = function(a) {
        return a instanceof gv ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    m.distance = function(a) {
        var b = a.x < this.left ? this.left - a.x : Math.max(a.x - (this.left + this.width), 0);
        a = a.y < this.top ? this.top - a.y : Math.max(a.y - (this.top + this.height), 0);
        return Math.sqrt(b * b + a * a)
    };
    m.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    m.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    m.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    m.translate = function(a, b) {
        a instanceof gv ? (this.left += a.x, this.top += a.y) : (this.left += a, ia(b) && (this.top += b));
        return this
    };
    m.scale = function(a, b) {
        var c = ia(b) ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= c;
        this.height *= c;
        return this
    };

    function fx(a) {
        var b;
        try {
            b = a.getBoundingClientRect()
        } catch (c) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        xt && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }

    function gx(a) {
        var b = kv(a),
            c = new gv(0, 0),
            d;
        d = b ? kv(b) : document;
        d = !xt || 9 <= Number(Kt) || "CSS1Compat" == iv(d).b.compatMode ? d.documentElement : d.body;
        if (a == d) return c;
        a = fx(a);
        b = ov(iv(b).b);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function hx(a) {
        "number" == typeof a && (a += "px");
        return a
    }

    function ix(a) {
        var b = jx,
            c;
        a: {
            c = kv(a);
            if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null))) {
                c = c.display || c.getPropertyValue("display") || "";
                break a
            }
            c = ""
        }
        if ("none" != (c || (a.currentStyle ? a.currentStyle.display : null) || a.style && a.style.display)) return b(a);
        c = a.style;
        var d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }

    function jx(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = At && !b && !c;
        return ba(b) && !d || !a.getBoundingClientRect ? new hv(b, c) : (a = fx(a), new hv(a.right - a.left, a.bottom - a.top))
    }

    function kx(a) {
        var b = gx(a);
        a = ix(a);
        return new ex(b.x, b.y, a.width, a.height)
    };

    function lx(a, b, c) {
        bx.call(this);
        this.target = a;
        this.handle = b || a;
        this.C = c || new ex(NaN, NaN, NaN, NaN);
        this.i = kv(a);
        this.b = new Zw(this);
        a = qa(Rt, this.b);
        this.s ? a.call(void 0) : (this.o || (this.o = []), this.o.push(ba(void 0) ? pa(a, void 0) : a));
        this.g = this.f = this.O = this.F = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.c = !1;
        this.v = 0;
        gu(this.handle, ["touchstart", "mousedown"], this.lg, !1, this)
    }
    sa(lx, bx);
    var mx = aa.document && aa.document.documentElement && !!aa.document.documentElement.setCapture;
    m = lx.prototype;
    m.ob = function() {
        lx.hb.ob.call(this);
        mu(this.handle, ["touchstart", "mousedown"], this.lg, !1, this);
        ax(this.b);
        mx && this.i.releaseCapture();
        this.handle = this.target = null
    };
    m.lg = function(a) {
        var b = "mousedown" == a.type;
        if (this.c || b && (!(Lt ? 0 == a.b.button : "click" == a.type || a.b.button & Vt[0]) || At && Bt && a.j)) cx(this, "earlycancel");
        else {
            if (0 == this.v)
                if (cx(this, new nx("start", this, a.clientX, a.clientY))) this.c = !0, b && a.preventDefault();
                else return;
            else b && a.preventDefault();
            var b = this.i,
                c = b.documentElement,
                d = !mx;
            this.b.listen(b, ["touchmove", "mousemove"], this.Zk, d);
            this.b.listen(b, ["touchend", "mouseup"], this.Qd, d);
            mx ? (c.setCapture(!1), this.b.listen(c, "losecapture", this.Qd)) : this.b.listen(b ?
                b.parentWindow || b.defaultView : window, "blur", this.Qd);
            this.ga && this.b.listen(this.ga, "scroll", this.mn, d);
            this.clientX = this.F = a.clientX;
            this.clientY = this.O = a.clientY;
            this.screenX = a.screenX;
            this.screenY = a.screenY;
            this.f = this.target.offsetLeft;
            this.g = this.target.offsetTop;
            this.D = ov(iv(this.i).b)
        }
    };
    m.Qd = function(a) {
        ax(this.b);
        mx && this.i.releaseCapture();
        this.c ? (this.c = !1, cx(this, new nx("end", this, a.clientX, a.clientY, 0, ox(this, this.f), px(this, this.g)))) : cx(this, "earlycancel")
    };
    m.Zk = function(a) {
        var b = 1 * (a.clientX - this.clientX),
            c = a.clientY - this.clientY;
        this.clientX = a.clientX;
        this.clientY = a.clientY;
        this.screenX = a.screenX;
        this.screenY = a.screenY;
        if (!this.c) {
            var d = this.F - this.clientX,
                e = this.O - this.clientY;
            if (d * d + e * e > this.v)
                if (cx(this, new nx("start", this, a.clientX, a.clientY))) this.c = !0;
                else {
                    this.s || this.Qd(a);
                    return
                }
        }
        c = qx(this, b, c);
        b = c.x;
        c = c.y;
        this.c && cx(this, new nx("beforedrag", this, a.clientX, a.clientY, 0, b, c)) && (rx(this, a, b, c), a.preventDefault())
    };

    function qx(a, b, c) {
        var d = ov(iv(a.i).b);
        b += d.x - a.D.x;
        c += d.y - a.D.y;
        a.D = d;
        a.f += b;
        a.g += c;
        return new gv(ox(a, a.f), px(a, a.g))
    }
    m.mn = function(a) {
        var b = qx(this, 0, 0);
        a.clientX = this.clientX;
        a.clientY = this.clientY;
        rx(this, a, b.x, b.y)
    };

    function rx(a, b, c, d) {
        a.target.style.left = c + "px";
        a.target.style.top = d + "px";
        cx(a, new nx("drag", a, b.clientX, b.clientY, 0, c, d))
    }

    function ox(a, b) {
        var c = a.C,
            d = isNaN(c.left) ? null : c.left,
            c = isNaN(c.width) ? 0 : c.width;
        return Math.min(null != d ? d + c : Infinity, Math.max(null != d ? d : -Infinity, b))
    }

    function px(a, b) {
        var c = a.C,
            d = isNaN(c.top) ? null : c.top,
            c = isNaN(c.height) ? 0 : c.height;
        return Math.min(null != d ? d + c : Infinity, Math.max(null != d ? d : -Infinity, b))
    }

    function nx(a, b, c, d, e, f, g) {
        St.call(this, a);
        this.clientX = c;
        this.clientY = d;
        this.left = ba(f) ? f : b.f;
        this.top = ba(g) ? g : b.g
    }
    sa(nx, St);

    function sx() {
        bx.call(this);
        this.f = [];
        this.i = [];
        this.F = {};
        this.v = new Zw(this);
        this.R = !1
    }
    sa(sx, bx);

    function tx(a, b) {
        b.c = 0;
        b.b = void 0;
        a.f.push(b)
    }

    function ux(a, b) {
        a.jh = b
    }
    m = sx.prototype;
    m.wo = function(a) {
        this.D = st(arguments, 0)
    };
    m.init = function() {
        if (!this.R) {
            for (var a = 0, b = this.f.length; a < b; a++)
                for (var c = sv(this.f[a]), d = 0, e = c.length; d < e; ++d) {
                    var f = c[d],
                        g = this.jh(f),
                        h = ka(g);
                    this.F[h] = f;
                    this.H && (this.v.listen(f, "mouseover", this.fl), this.v.listen(f, "mouseout", this.el));
                    this.ga && (this.v.listen(g, "mouseover", this.dl), this.v.listen(g, "mouseout", this.cl));
                    this.i.push(f);
                    this.v.listen(g, ["mousedown", "touchstart"], this.Dl)
                }
            this.R = !0
        }
    };
    m.ob = function() {
        this.v.Ma();
        for (var a = 0, b = this.f.length; a < b; a++) {
            var c = this.f[a];
            c.c = void 0;
            c.b = void 0
        }
        this.f.length = 0;
        this.i.length = 0;
        this.F = null;
        vx(this);
        sx.hb.ob.call(this)
    };

    function wx(a, b) {
        for (var c = 0, d = a.f.length; c < d; c++) {
            var e = a.f[c];
            e.Bc = kx(e)
        }
        c = 0;
        for (d = a.i.length; c < d; c++) e = a.i[c], e != b && (e.Bc = kx(e))
    }
    m.Dl = function(a) {
        var b = ka(a.currentTarget);
        this.b = this.F[b];
        a: {
            for (var b = this.b, c = b.cloneNode(!0), d = b.getElementsByTagName("TEXTAREA"), e = c.getElementsByTagName("TEXTAREA"), f = 0; f < d.length; f++) e[f].value = d[f].value;
            switch (b.tagName) {
                case "TR":
                    b = pv("TABLE", null, pv("TBODY", null, c));
                    break a;
                case "TD":
                case "TH":
                    b = pv("TABLE", null, pv("TBODY", null, pv("TR", null, c)));
                    break a;
                case "TEXTAREA":
                    c.value = b.value;
                default:
                    b = c
            }
        }
        this.c = b;
        this.N && xv(this.c, this.N || []);
        this.c.style.margin = "0";
        this.c.style.position = "absolute";
        this.c.style.visibility = "hidden";
        kv(this.b).body.appendChild(this.c);
        var c = gx(this.b),
            b = this.c,
            d = c,
            g, c = gx(b);
        d instanceof gv && (g = d.y, d = d.x);
        e = b.offsetLeft + (d - c.x);
        e instanceof gv ? (d = e.x, g = e.y) : (d = e, g = b.offsetTop + (Number(g) - c.y));
        b.style.left = hx(d);
        b.style.top = hx(g);
        this.g = new lx(this.c);
        this.g.v = Math.pow(0, 2);
        gu(this.g, "start", this.hl, !1, this);
        gu(this.g, "end", this.bl, !1, this);
        gu(this.g, "earlycancel", this.Se, !1, this);
        this.g.lg(a)
    };
    m.hl = function(a) {
        cx(this, new xx("beforedragstart", 0, 0, this.b, null)) ? (this.O = this.b.parentNode, this.sa = tv(this.b), this.C = this.O, this.D ? xv(this.b, this.D || []) : this.b.style.visibility = "hidden", a = ix(this.c), this.c.g = a.width / 2, this.c.f = a.height / 2, this.c.style.visibility = "", this.b.style.display = "none", wx(this, this.b), this.b.style.display = "", gu(this.g, "drag", this.gl, !1, this), cx(this, new xx("dragstart", 0, 0, this.b, this.c))) : (a.preventDefault(), this.Se())
    };
    m.gl = function() {
        var a = gx(this.c),
            a = new gv(a.x + this.c.g, a.y + this.c.f),
            b;
        a: {
            b = null;
            if ("none" != this.b.style.display) {
                b = this.b.parentNode;
                var c = kx(b);
                if (yx(a, c)) break a
            }
            for (var c = 0, d = this.f.length; c < d; c++) {
                var e = this.f[c];
                if (e != b && yx(a, e.Bc)) {
                    b = e;
                    break a
                }
            }
            b = null
        }
        var f;
        if (b) {
            if (!b) throw Error("getHoverNextItem_ called with null hoverList.");
            var g, h, c = !1,
                d = void 0;
            switch (b.c) {
                case 0:
                    f = a.y;
                    g = zx;
                    h = Ax;
                    break;
                case 4:
                    c = !0;
                case 2:
                    f = a.x;
                    g = Bx;
                    h = Ax;
                    break;
                case 5:
                    c = !0;
                case 3:
                    f = a.x, g = Cx, h = Dx
            }
            for (var e = null, k, l = sv(b),
                    n = 0, q = l.length; n < q; n++) {
                var p = l[n];
                if (p != this.b) {
                    var r = g(p.Bc);
                    if (c) {
                        var u = Ex(p, a);
                        ba(d) || (d = u);
                        h(f, r) && (void 0 == k || u < d || u == d && (h(r, k) || r == k)) && (e = p, k = r);
                        u < d && (d = u)
                    } else h(f, r) && (void 0 == k || h(r, k)) && (e = p, k = r)
                }
            }
            f = null !== e && Ex(e, a) > d ? null : e
        } else f = null;
        if (!cx(this, new xx("beforedragmove", 0, 0, this.b, this.c, 0, 0, b, f))) return !1;
        if (b) this.b.parentNode == b && tv(this.b) == f || b.insertBefore(this.b, f), this.b.style.display = "", b.b && wv(b, b.b);
        else
            for (this.b.style.display = "none", g = 0, h = this.f.length; g < h; g++) k = this.f[g],
                k.b && yv(k, k.b);
        b != this.C && (this.C = b, wx(this, this.b));
        cx(this, new xx("dragmove", 0, 0, this.b, this.c, 0, 0, b, f));
        return !1
    };
    m.Se = function() {
        vx(this);
        this.g = this.c = this.sa = this.O = this.C = this.b = null;
        for (var a = 0, b = this.f.length; a < b; a++) this.f[a].Bc = null;
        a = 0;
        for (b = this.i.length; a < b; a++) this.i[a].Bc = null
    };
    m.bl = function() {
        if (!cx(this, new xx("beforedragend", 0, 0, this.b, this.c))) return !1;
        vx(this);
        cx(this, new xx("dragend", 0, 0, this.b, this.c));
        this.Se();
        return !0
    };

    function vx(a) {
        Rt(a.g);
        if (a.c) {
            var b = a.c;
            b && b.parentNode && b.parentNode.removeChild(b)
        }
        a.b && "none" == a.b.style.display && (a.O.insertBefore(a.b, a.sa), a.b.style.display = "");
        a.D && a.b ? zv(a.b, a.D || []) : a.b && (a.b.style.visibility = "");
        for (var b = 0, c = a.f.length; b < c; b++) {
            var d = a.f[b];
            d.b && yv(d, d.b)
        }
    }
    m.jh = function(a) {
        return a
    };
    m.fl = function(a) {
        xv(a.currentTarget, this.H || [])
    };
    m.el = function(a) {
        zv(a.currentTarget, this.H || [])
    };
    m.dl = function(a) {
        xv(a.currentTarget, this.ga || [])
    };
    m.cl = function(a) {
        zv(a.currentTarget, this.ga || [])
    };

    function yx(a, b) {
        return a.x > b.left && a.x < b.left + b.width && a.y > b.top && a.y < b.top + b.height
    }

    function Ex(a, b) {
        var c = a.Bc;
        return Math.abs(b.y - (c.top + (c.height - 1) / 2))
    }

    function zx(a) {
        return a.top + a.height - 1
    }

    function Bx(a) {
        return a.left + a.width - 1
    }

    function Cx(a) {
        return a.left || 0
    }

    function Ax(a, b) {
        return a < b
    }

    function Dx(a, b) {
        return a > b
    }

    function xx(a, b, c, d, e, f, g, h, k) {
        St.call(this, a);
        this.Qg = d;
        this.nk = e;
        this.Nl = h;
        this.Ol = k
    }
    sa(xx, St);

    function Fx(a) {
        return {
            restrict: "A",
            link: function(b, c, d) {
                function e() {
                    for (var a = c.contents(), d = c.children(), e = 0; e < d.length; ++e) angular.element(d[e]).data("idx", e);
                    null !== l && l.Ma();
                    l = new sx;
                    tx(l, c[0]);
                    ux(l, function(a) {
                        var b = g.handleClassName,
                            c = a || document,
                            d = null;
                        c.getElementsByClassName ? d = c.getElementsByClassName(b)[0] : c.querySelectorAll && c.querySelector ? d = c.querySelector("." + b) : d = lv(b, a)[0];
                        return d || null
                    });
                    void 0 !== g.draggerClassName && (l.N = bt(g.draggerClassName).split(" "));
                    void 0 !== g.currDragItemClassName &&
                        l.wo(g.currDragItemClassName);
                    var r = -1,
                        u = null;
                    gu(l, "dragstart", function(a) {
                        r = -1;
                        u = null;
                        angular.element(a.nk).css("width", a.Qg.offsetWidth)
                    });
                    gu(l, "dragmove", function(a) {
                        var b = a.Ol;
                        r = null === b ? -1 : angular.element(b).data("idx");
                        u = a.Nl
                    });
                    gu(l, "dragend", function(d) {
                        var e = angular.element(d.Qg).data("idx");
                        null === u || r == e + 1 || -1 == r && e == c.children().length - 1 ? c.append(a) : -1 != r ? r != e && (r > e && r--, b.$apply(function() {
                            f.splice(r, 0, f.splice(e, 1)[0])
                        })) : b.$apply(function() {
                            f.push(f.splice(e, 1)[0])
                        });
                        h instanceof Function &&
                            h.apply(k, [c, f])
                    });
                    l.init()
                }
                var f = b.$eval(d.ngeoSortable) || [],
                    g = function(a) {
                        void 0 === a ? a = {
                            handleClassName: "ngeo-sortable-handle"
                        } : void 0 === a.handleClassName && (a.handleClassName = "ngeo-sortable-handle");
                        return a
                    }(b.$eval(d.ngeoSortableOptions)),
                    h = b.$eval(d.ngeoSortableCallback),
                    k = b.$eval(d.ngeoSortableCallbackCtx),
                    l = null;
                b.$watchCollection(function() {
                    return f
                }, function() {
                    f.length && a(e, 0)
                })
            }
        }
    }
    Fx.$inject = ["$timeout"];
    V.directive("ngeoSortable", Fx);

    function Gx(a, b, c) {
        a = Number(a);
        b = Number(b);
        c = Number(c);
        if (a != (a & 255) || b != (b & 255) || c != (c & 255)) throw Error('"(' + a + "," + b + "," + c + '") is not a valid RGB color');
        a = Hx(a.toString(16));
        b = Hx(b.toString(16));
        c = Hx(c.toString(16));
        return "#" + a + b + c
    }

    function Ix(a) {
        return Gx(a[0], a[1], a[2])
    }

    function Jx(a, b, c) {
        0 > c ? c += 1 : 1 < c && --c;
        return 1 > 6 * c ? a + 6 * (b - a) * c : 1 > 2 * c ? b : 2 > 3 * c ? a + (b - a) * (2 / 3 - c) * 6 : a
    }

    function Hx(a) {
        return 1 == a.length ? "0" + a : a
    };
    var Kx = {
            LineString: "LineString",
            Point: "Point",
            Polygon: "Polygon",
            MultiLineString: "LineString",
            MultiPoint: "Point",
            MultiPolygon: "Polygon"
        },
        Lx = {};

    function Mx(a) {
        el.call(this);
        a = void 0 !== a ? a : {};
        this.f = void 0 !== a.accuracy ? a.accuracy : 1;
        this.g = void 0 !== a.encodeStyles ? a.encodeStyles : !0;
        this.o = void 0 !== a.properties ? a.properties : Nx;
        this.j = void 0 !== a.setStyle ? a.setStyle : !0;
        this.c = this.b = 0;
        Lx = void 0 !== a.Jn && a.Jn
    }
    v(Mx, $m);
    t("ngeo.format.FeatureHash", Mx);

    function Nx(a) {
        return ab(a)
    }

    function Ox(a) {
        var b = a << 1;
        0 > a && (b = ~b);
        a = b;
        for (b = ""; 32 <= a;) b += ".-_!*ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghjkmnpqrstuvwxyz".charAt(32 | a & 31), a >>= 5;
        return b += ".-_!*ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghjkmnpqrstuvwxyz".charAt(a)
    }

    function Px(a, b, c) {
        b = Kx[b];
        for (var d = 0; d < a.length; ++d) {
            var e = a[d],
                f = e.j,
                g = e.c,
                h = e.f,
                e = e.pa();
            "Polygon" == b ? null !== f && (g = h, h = c, Qx(f, h), null !== g && Rx(g, h)) : "LineString" == b ? null !== h && Rx(h, c) : "Point" == b && null !== g && (f = c, g instanceof Zh && (h = g.f, 0 < f.length && f.push("'"), f.push(encodeURIComponent("pointRadius*" + h)), h = g.c, null !== h && Qx(h, f), g = g.b, null !== g && Rx(g, f)));
            null !== e && (f = e, e = c, g = f.c, void 0 !== g && (g = g.split(" "), 3 <= g.length && (0 < e.length && e.push("'"), e.push(encodeURIComponent("fontSize*" + g[1])))), f = f.b, null !==
                f && Qx(f, e, "fontColor"))
        }
    }

    function Qx(a, b, c) {
        c = void 0 !== c ? c : "fillColor";
        a = a.b;
        null !== a && (a = ue(a), a = Ix(a), 0 < b.length && b.push("'"), b.push(encodeURIComponent(c + "*" + a)))
    }

    function Rx(a, b) {
        var c = a.b;
        null !== c && (c = ue(c), c = Ix(c), 0 < b.length && b.push("'"), b.push(encodeURIComponent("strokeColor*" + c)));
        c = a.c;
        void 0 !== c && (0 < b.length && b.push("'"), b.push(encodeURIComponent("strokeWidth*" + c)))
    }

    function Sx(a, b) {
        var c = "l r t m isCircle isRectangle isLabel showMeasure".split(" ");
        return cb("a o s k pointRadius strokeWidth".split(" "), a) ? +b : cb(c, a) ? "true" === b ? !0 : !1 : b
    }

    function Tx(a) {
        a = a.split("'");
        for (var b = {}, c = 0; c < a.length; ++c) {
            var d = decodeURIComponent(a[c]).split("*"),
                e = d[0];
            b[e] = Sx(e, d[1])
        }
        return b
    }

    function Ux(a, b, c, d, e) {
        for (var f = d.length, g = 0; g < f; ++g) c = Vx(this, a, b, c, d[g] - b), 0 !== g && e.push("'"), e.push(c), c = d[g];
        return c
    }
    var Xx = {
            P: function(a) {
                a = a.substring(2, a.length - 1);
                a = Wx(this, a);
                var b = new wl(null);
                b.U("XY", a);
                return b
            },
            L: function(a) {
                a = a.substring(2, a.length - 1);
                var b = [],
                    c = [];
                a = a.split("'");
                for (var d = 0, e = a.length; d < e; ++d) b = Wx(this, a[d], b), c[d] = b.length;
                a = new tl(null);
                a.U("XY", b, c);
                return a
            },
            A: function(a) {
                a = a.substring(2, a.length - 1);
                var b = [],
                    c = [];
                a = a.split(")(");
                for (var d = 0, e = a.length; d < e; ++d)
                    for (var f = a[d].split("'"), g = c[d] = [], h = 0, k = f.length; h < k; ++h) {
                        var b = Wx(this, f[h], b),
                            l = b.length;
                        0 === h ? (b[l++] = b[0], b[l++] = b[1]) :
                            (b[l++] = b[g[h - 1]], b[l++] = b[g[h - 1] + 1]);
                        g[h] = l
                    }
                a = new yl(null);
                zl(a, "XY", b, c);
                return a
            },
            l: function(a) {
                a = a.substring(2, a.length - 1);
                a = Wx(this, a);
                var b = new rl(null);
                b.U("XY", a);
                return b
            },
            p: function(a) {
                a = a.substring(2, a.length - 1);
                a = Wx(this, a);
                var b = new Qc(null);
                b.U("XY", a);
                return b
            },
            a: function(a) {
                a = a.substring(2, a.length - 1);
                var b = [],
                    c = [];
                a = a.split("'");
                for (var d = 0, e = a.length; d < e; ++d) {
                    var b = Wx(this, a[d], b),
                        f = b.length;
                    0 === d ? (b[f++] = b[0], b[f++] = b[1]) : (b[f++] = b[c[d - 1]], b[f++] = b[c[d - 1] + 1]);
                    c[d] = f
                }
                a = new bd(null);
                a.U("XY", b, c);
                return a
            }
        },
        Yx = {
            MultiLineString: function(a) {
                var b = a.nb(),
                    c = b.length,
                    d = a.B;
                a = a.J;
                for (var e = 0, f = ["L("], g = 0; g < c; ++g) {
                    var h = b[g],
                        e = Vx(this, d, a, e, h);
                    0 !== g && f.push("'");
                    f.push(e);
                    e = h
                }
                f.push(")");
                return f.join("")
            },
            MultiPoint: function(a) {
                var b = a.B;
                return "P(" + Vx(this, b, a.J, 0, b.length) + ")"
            },
            MultiPolygon: function(a) {
                var b = a.B,
                    c = a.J;
                a = a.f;
                for (var d = a.length, e = 0, f = ["A"], g = 0; g < d; ++g) {
                    var h = a[g];
                    f.push("(");
                    e = Ux.call(this, b, c, e, h, f);
                    f.push(")")
                }
                return f.join("")
            },
            LineString: function(a) {
                var b = a.B;
                return "l(" +
                    Vx(this, b, a.J, 0, b.length) + ")"
            },
            Point: function(a) {
                var b = a.B;
                return "p(" + Vx(this, b, a.J, 0, b.length) + ")"
            },
            Polygon: function(a) {
                var b = ["a("];
                Ux.call(this, a.B, a.J, 0, a.nb(), b);
                b.push(")");
                return b.join("")
            }
        };

    function Wx(a, b, c) {
        var d = b.length,
            e = 0;
        c = void 0 !== c ? c : [];
        for (var f = c.length; e < d;) {
            var g, h = 0,
                k = 0;
            do g = ".-_!*ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghjkmnpqrstuvwxyz".indexOf(b.charAt(e++)), k |= (g & 31) << h, h += 5; while (32 <= g);
            a.b += k & 1 ? ~(k >> 1) : k >> 1;
            k = h = 0;
            do g = ".-_!*ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghjkmnpqrstuvwxyz".indexOf(b.charAt(e++)), k |= (g & 31) << h, h += 5; while (32 <= g);
            a.c += k & 1 ? ~(k >> 1) : k >> 1;
            c[f++] = a.b * a.f;
            c[f++] = a.c * a.f
        }
        return c
    }

    function Vx(a, b, c, d, e) {
        for (var f = ""; d < e; d += c) {
            var g = b[d],
                h = b[d + 1],
                g = Math.floor(g / a.f),
                h = Math.floor(h / a.f),
                k = g - a.b,
                l = h - a.c;
            a.b = g;
            a.c = h;
            f += Ox(k) + Ox(l)
        }
        return f
    }

    function bn(a, b) {
        var c = b.indexOf("~"),
            d = cn(a, 0 <= c ? b.substring(0, c) + ")" : b),
            d = new Fk(d);
        if (0 <= c) {
            var e = b.substring(c + 1, b.length - 1),
                c = e.indexOf("~"),
                f = 0 <= c ? e.substring(0, c) : e;
            if ("" != f)
                for (var f = f.split("'"), g = 0; g < f.length; ++g) {
                    var h = decodeURIComponent(f[g]).split("*"),
                        k = h[0],
                        h = h[1];
                    !a.j && Lx[k] && (k = Lx[k]);
                    d.set(k, Sx(k, h))
                }
            if (0 <= c)
                if (c = e.substring(c + 1), a.j) {
                    if ("" != c) {
                        var l, f = Tx(c),
                            k = f.fillColor;
                        l = f.fontSize;
                        c = f.fontColor;
                        e = f.pointRadius;
                        g = f.strokeColor;
                        h = f.strokeWidth;
                        f = null;
                        void 0 !== k && (f = new ci({
                            color: k
                        }));
                        k = null;
                        void 0 !== g && void 0 !== h && (k = new di({
                            color: g,
                            width: h
                        }));
                        g = null;
                        void 0 !== e && (g = new Zh({
                            radius: e,
                            fill: f,
                            stroke: k
                        }), f = k = null);
                        e = null;
                        void 0 !== l && void 0 !== c && (e = new on({
                            font: l + " sans-serif",
                            fill: new ci({
                                color: c
                            })
                        }));
                        d.setStyle(new ei({
                            fill: f,
                            image: g,
                            stroke: k,
                            text: e
                        }))
                    }
                } else {
                    c = Tx(c);
                    e = d.G();
                    e instanceof Qc ? c.isLabel || c.t ? (delete c.strokeColor, delete c.fillColor) : (delete c.fontColor, delete c.fontSize) : (delete c.fontColor, e instanceof rl && (delete c.fillColor, delete c.fillOpacity));
                    c.fontSize && (e = parseFloat(c.fontSize), -1 !== c.fontSize.indexOf("px") && (e = Math.round(e / 1.333333)), c.fontSize = e);
                    e = {};
                    for (l in c) f = c[l], Lx[l] ? e[Lx[l]] = f : e[l] = f;
                    d.Ga(e)
                }
        }
        return d
    }

    function cn(a, b) {
        var c = Xx[b[0]];
        a.b = 0;
        a.c = 0;
        return c.call(a, b)
    }

    function dn(a, b, c) {
        var d = [],
            e = "",
            f = b.G();
        f && (e = en(a, f, c));
        0 < e.length && (e = e.substring(0, e.length - 1), d.push(e));
        var g = [];
        Us(a.o(b), function(a, c) {
            if (void 0 !== a && null !== a && c !== b.c) {
                0 !== g.length && g.push("'");
                var d = encodeURIComponent(c.replace(/[()'*]/g, "_") + "*" + a.toString().replace(/[()'*]/g, "_"));
                g.push(d)
            }
        });
        0 < g.length && (d.push("~"), Array.prototype.push.apply(d, g));
        a.g && (a = b.f, void 0 !== a && (a = a.call(b, 0), null !== a && (c = [], a = Array.isArray(a) ? a : [a], Px(a, f.T(), c), 0 < c.length && (d.push("~"), Array.prototype.push.apply(d,
            c)))));
        d.push(")");
        return d.join("")
    }

    function en(a, b, c) {
        var d = Yx[b.T()];
        b = hl(b, !0, c);
        a.b = 0;
        a.c = 0;
        return d.call(a, b)
    };

    function Zx() {}
    v(Zx, op);
    t("ngeo.format.XSDAttribute", Zx);
    Zx.prototype.read = function(a) {
        return op.prototype.read.call(this, a)
    };
    Zx.prototype.c = function(a) {
        for (a = a.firstChild; a; a = a.nextSibling)
            if (a.nodeType == Node.ELEMENT_NODE) return this.b(a);
        return null
    };
    Zx.prototype.b = function(a) {
        var b = a.getElementsByTagName("element");
        b.length || (b = a.getElementsByTagName("xsd:element"));
        a = [];
        for (var c, d = 0, e = b.length; d < e; d++) {
            a: {
                var f = b[d];c = f.getAttribute("name");
                var g = f.getAttribute("nillable");c = {
                    name: c,
                    required: !(!0 === g || "true" === g)
                };
                if (g = f.getAttribute("type"))
                    if (/gml:((Multi)?(Point|Line|Polygon|Curve|Surface|Geometry)).*/.exec(g)) c.type = $x, /^gml:Point/.exec(g) ? c.geomType = "Point" : /^gml:LineString/.exec(g) ? c.geomType = "LineString" : /^gml:Polygon/.exec(g) ? c.geomType =
                        "Polygon" : /^gml:MultiPoint/.exec(g) ? c.geomType = "MultiPoint" : /^gml:MultiLineString/.exec(g) ? c.geomType = "MultiLineString" : /^gml:MultiPolygon/.exec(g) && (c.geomType = "MultiPolygon");
                    else if ("xsd:string" === g) c.type = ay;
                else if ("xsd:date" === g) c.type = by;
                else if ("xsd:dateTime" === g) c.type = cy;
                else {
                    c = null;
                    break a
                } else if (g = f.getElementsByTagName("enumeration"), g.length || (g = f.getElementsByTagName("xsd:enumeration")), g.length) {
                    c.type = dy;
                    for (var f = [], h = 0, k = g.length; h < k; h++) f.push(g[h].getAttribute("value"));
                    c.choices =
                        f
                } else {
                    c = null;
                    break a
                }
            }
            c && a.push(c)
        }
        return a
    };
    Zx.getGeometryAttribute = function(a) {
        for (var b = null, c = 0, d = a.length; c < d; c++)
            if (a[c].type === $x) {
                b = a[c];
                break
            }
        return b
    };
    var by = "date",
        cy = "datetime",
        $x = "geometry",
        dy = "select",
        ay = "text";

    function ey(a) {
        Vf.call(this, {
            handleEvent: ac
        });
        this.s = null;
        this.o = a.type;
        this.F = a.minPoints ? a.minPoints : "Polygon" === this.o ? 3 : 2;
        this.f = null;
        this.i = [];
        this.g = null;
        this.v = new li({
            source: new cr({
                Qb: !1,
                wrapX: a.wrapX ? a.wrapX : !1
            }),
            style: a.style ? a.style : wr(),
            Ob: !0,
            Pb: !0
        });
        A(this, Za(Wf), this.D, this);
        this.set("dirty", !1);
        this.set("drawing", !1);
        this.set("valid", !1)
    }
    v(ey, Vf);
    t("ngeo.interaction.MobileDraw", ey);
    ey.prototype.setMap = function(a) {
        this.c && this.s && Ja(this.s);
        Vf.prototype.setMap.call(this, a);
        a && (this.s = A(D(a), Za(md), this.C, this));
        this.D()
    };
    ey.prototype.nf = function() {
        return this.get("dirty")
    };
    ey.prototype.getDirty = ey.prototype.nf;
    ey.prototype.Sd = function() {
        return this.get("drawing")
    };
    ey.prototype.getDrawing = ey.prototype.Sd;
    ey.prototype.oh = function() {
        return this.get("valid")
    };
    ey.prototype.getValid = ey.prototype.oh;
    ey.prototype.getFeature = function() {
        return this.f
    };
    ey.prototype.getFeature = ey.prototype.getFeature;
    ey.prototype.Id = function() {
        var a = this.getActive(),
            b = this.Sd();
        if (a && b) {
            var b = this.g.G().M(),
                c;
            "Point" === this.o ? (this.f || (this.f = new Fk(new Qc(b)), B(this, new Dr(Er, this.f))), a = this.f.G(), a.ba(b)) : ("LineString" === this.o && (this.i.push(this.g), this.f ? (a = this.f.G(), c = a.M(), c.push(b.slice()), a.ba(c)) : (c = [b.slice(), b.slice()], this.f = new Fk(new rl(c)), B(this, new Dr(Er, this.f)))), this.nf() && this.set("dirty", !1), a = this.oh(), "LineString" === this.o && (c.length >= this.F ? a || this.set("valid", !0) : a && this.set("valid", !1)), this.g = null, fy(this))
        }
    };
    ey.prototype.addToDrawing = ey.prototype.Id;
    ey.prototype.Lj = function() {
        this.setActive(!1);
        this.setActive(!0)
    };
    ey.prototype.clearDrawing = ey.prototype.Lj;
    ey.prototype.Vb = function() {
        var a = this.getActive(),
            b = this.Sd();
        a && b && (this.g && this.Id(), this.set("drawing", !1), B(this, new Dr(Gr, this.f)))
    };
    ey.prototype.finishDrawing = ey.prototype.Vb;
    ey.prototype.D = function() {
        var a = this.c,
            b = this.getActive();
        if (a && b) this.set("drawing", !0), gy(this), fy(this), "Point" === this.o && this.Id();
        else {
            if (this.f || 0 < this.i.length) this.g = this.f = null, C(this.v).clear(!0);
            this.i = [];
            this.set("dirty", !1);
            this.set("drawing", !1);
            this.set("valid", !1)
        }
        this.v.setMap(b ? a : null)
    };
    ey.prototype.C = function() {
        var a = this.getActive(),
            b = this.Sd();
        if (a && b)
            if (gy(this), "Point" === this.o) this.Id();
            else {
                if (this.f) {
                    a = qd(D(this.c));
                    if ("LineString" === this.o) {
                        var b = this.f.G(),
                            c = b.M();
                        c.pop();
                        c.push(a);
                        b.ba(c)
                    }
                    this.nf() || this.set("dirty", !0)
                }
                fy(this)
            }
    };

    function gy(a) {
        var b = qd(D(a.c));
        a.g ? a.g.G().ba(b) : a.g = new Fk(new Qc(b))
    }

    function fy(a) {
        var b = [];
        a.f && b.push(a.f);
        a.g && b.push(a.g);
        var c = C(a.v);
        c.clear(!0);
        dl(c, b);
        dl(c, a.i)
    };

    function hy(a, b) {
        var c = void 0 !== b ? b : {};
        Zs(c, {
            bf: !1
        });
        Kv.call(this, a, c)
    }
    v(hy, Kv);
    t("ngeo.interaction.MeasureLengthMobile", hy);
    hy.prototype.s = function(a, b) {
        return new ey({
            type: "LineString",
            style: a,
            source: b
        })
    };

    function iy(a) {
        a = void 0 !== a ? a : {};
        Zs(a, {
            bf: !1
        });
        Bv.call(this, a)
    }
    v(iy, Bv);
    t("ngeo.interaction.MeasurePointMobile", iy);
    iy.prototype.s = function(a, b) {
        return new ey({
            type: "Point",
            style: a,
            source: b
        })
    };
    iy.prototype.ce = function(a) {
        var b = this.i.G();
        D(this.c);
        var c = Fv(b, this.decimals),
            b = Ec(b);
        a(c, b)
    };

    function jy(a) {
        jg.call(this, {
            Va: ky,
            pb: ly,
            handleEvent: my,
            Wa: ny
        });
        this.f = null;
        this.H = [0, 0];
        this.v = !1;
        this.C = new Yq;
        this.s = void 0 !== a.Kb ? a.Kb : 10;
        this.N = !1;
        this.i = null;
        this.F = new li({
            source: new cr({
                Qb: !1,
                wrapX: !!a.wrapX
            }),
            style: a.style ? a.style : oy(),
            Ob: !0,
            Pb: !0
        });
        this.g = a.features;
        this.g.forEach(this.R, this);
        A(this.g, ne, this.na, this);
        A(this.g, pe, this.ja, this)
    }
    v(jy, jg);
    t("ngeo.interaction.ModifyCircle", jy);
    jy.prototype.R = function(a) {
        if ("Polygon" === a.G().T() && a.get("l")) {
            var b = a.G();
            py(this, a, b);
            (a = this.c) && qy(this, this.H, a)
        }
    };

    function ry(a, b) {
        var c = a.C,
            d = [];
        c.forEach(function(a) {
            b === a.feature && d.push(a)
        });
        for (var e = d.length - 1; 0 <= e; --e) c.remove(d[e])
    }
    jy.prototype.setMap = function(a) {
        this.F.setMap(a);
        jg.prototype.setMap.call(this, a)
    };
    jy.prototype.na = function(a) {
        this.R(a.element)
    };
    jy.prototype.ja = function(a) {
        ry(this, a.element);
        this.f && 0 === this.g.get(ke) && (C(this.F).Ea(this.f), this.f = null)
    };

    function py(a, b, c) {
        var d = c.M(),
            e, f, g, h, k, l, n;
        h = 0;
        for (k = d.length; h < k; ++h)
            for (e = d[h], f = 0, g = e.length - 1; f < g; ++f) l = e.slice(f, f + 2), n = {
                feature: b,
                geometry: c,
                depth: [h],
                index: f,
                ma: l
            }, a.C.insert(Bb(l), n)
    }

    function sy(a, b) {
        var c = a.f;
        c ? c.G().ba(b) : (c = new Fk(new Qc(b)), a.f = c, C(a.F).ya(c))
    }

    function ty(a, b) {
        return a.index - b.index
    }

    function ky(a) {
        qy(this, a.pixel, a.map);
        this.i = [];
        this.v = !1;
        if (a = this.f) {
            a = a.G().M();
            var b = Bb([a]),
                b = $q(this.C, b),
                c = {};
            b.sort(ty);
            for (var d = 0, e = b.length; d < e; ++d) {
                var f = b[d],
                    g = f.ma,
                    h = x(f.feature),
                    k = f.depth;
                k && (h += "-" + k.join("-"));
                c[h] || (c[h] = Array(2));
                wb(g[0], a) && !c[h][0] ? (this.i.push([f, 0]), c[h][0] = f) : wb(g[1], a) && !c[h][1] && (this.i.push([f, 1]), c[h][1] = f)
            }
        }
        return !!this.f
    }

    function ly(a) {
        this.v || (this.v = !0, B(this, new Pr(Qr, this.g, a)));
        a = a.coordinate;
        var b = this.i[0][0].geometry,
            c = Wb(b.K()),
            d = new rl([c, a]),
            c = new Oq(c, ql(d.B, d.B.length, d.J)),
            c = gd(c, 64).M();
        b.ba(c);
        b = bw(d);
        this.g.c[0].set("z", b);
        sy(this, a)
    }

    function ny(a) {
        this.C.clear();
        py(this, this.i[0][0].feature, this.i[0][0].geometry);
        this.v && (B(this, new Pr(Vr, this.g, a)), this.v = !1);
        return !1
    }

    function my(a) {
        if (!(a instanceof yf)) return !0;
        rd(D(a.map))[1] || a.type != If || this.D || (this.H = a.pixel, qy(this, a.pixel, a.map));
        return kg.call(this, a) && !0
    }

    function qy(a, b, c) {
        function d(a, b) {
            return zb(e, ub(e, a.ma)) - zb(e, ub(e, b.ma))
        }
        var e = c.Ia(b),
            f = c.Ia([b[0] - a.s, b[1] + a.s]),
            g = c.Ia([b[0] + a.s, b[1] - a.s]),
            f = Bb([f, g]),
            f = $q(a.C, f);
        if (0 < f.length) {
            f.sort(d);
            var g = f[0].ma,
                h = ub(e, g),
                h = qg(c, h);
            if (Math.sqrt(zb(b, h)) <= a.s && (b = qg(c, g[0]), c = qg(c, g[1]), b = zb(h, b), c = zb(h, c), a.N = Math.sqrt(Math.min(b, c)) <= a.s, a.N)) {
                h = b > c ? g[1] : g[0];
                sy(a, h);
                x(g);
                c = 1;
                for (b = f.length; c < b; ++c)
                    if (a = f[c].ma, wb(g[0], a[0]) && wb(g[1], a[1]) || wb(g[0], a[1]) && wb(g[1], a[0])) x(a);
                    else break;
                return
            }
        }
        a.f &&
            (C(a.F).Ea(a.f), a.f = null)
    }

    function oy() {
        var a = ki();
        return function() {
            return a.Point
        }
    };

    function uy(a) {
        jg.call(this, {
            Va: this.um,
            Af: this.ym,
            pb: this.vm,
            Wa: this.zm
        });
        this.s = !1;
        var b = a.style ? a.style : Mr();
        this.f = new li({
            source: new cr({
                wrapX: !!a.wrapX
            }),
            style: b,
            Ob: !0,
            Pb: !0
        });
        this.g = a.features;
        this.v = this.C = null;
        this.i = {};
        A(this.g, ne, this.wm, this);
        A(this.g, pe, this.xm, this);
        this.g.forEach(this.Ch, this)
    }
    v(uy, jg);
    t("ngeo.interaction.ModifyRectangle", uy);
    m = uy.prototype;
    m.Ch = function(a) {
        var b = a.G();
        if (b instanceof bd) {
            var c = x(a),
                d = this.i[c];
            if (!d) {
                for (var e = C(this.f), b = b.M()[0]; 4 < b.length;) b[0][0] < b[1][0] && b[0][1] <= b[1][1] ? b.pop() : b.shift();
                var f = [],
                    g, h;
                b.forEach(function(b) {
                    g = new Qc(b);
                    h = new Fk({
                        corner: !0,
                        geometry: g,
                        siblingX: null,
                        siblingY: null,
                        boxFeature: a
                    });
                    f.push(h)
                }, this);
                d = {
                    Rj: f
                };
                this.i[c] = d;
                var k, l;
                f.forEach(function(a, b) {
                    (k = f[b - 1]) || (k = f[f.length - 1]);
                    (l = f[b + 1]) || (l = f[0]);
                    0 === b % 2 ? (a.set("siblingX", l), a.set("siblingY", k)) : (a.set("siblingX", k), a.set("siblingY",
                        l))
                }, this);
                dl(e, f)
            }
        }
    };
    m.setMap = function(a) {
        this.f.setMap(a);
        bh(this.f, !1);
        jg.prototype.setMap.call(this, a)
    };
    m.wm = function(a) {
        this.Ch(a.element)
    };
    m.xm = function(a) {
        a = x(a.element);
        for (var b = this.i[a].Rj, c = 0; c < b.length; c++) C(this.f).Ea(b[c]);
        this.C = null;
        b.length = 0;
        delete this.i[a]
    };
    m.ym = function(a) {
        a = ak(a.map, a.pixel);
        ah(this.f) != a && this.f.b();
        bh(this.f, a)
    };
    m.um = function(a) {
        var b = Zj(a.map, a.pixel, function(a) {
            return a
        }, void 0);
        return b && b.G() instanceof Qc && b.get("siblingX") && b.get("siblingY") ? (this.v = a.coordinate, this.C = b, bh(this.f, !0), !0) : !1
    };
    m.vm = function(a) {
        this.s || (this.s = !0, B(this, new Pr(Qr, this.g, a)));
        var b = this.C,
            c = b.G();
        if (c instanceof Qc) {
            bh(this.f, !0);
            c.ba(a.coordinate);
            var c = a.pixel,
                d = b.get("siblingX").G(),
                e = d.M(),
                f = qg(this.c, e),
                g = b.get("siblingY"),
                e = g.G(),
                h = e.M(),
                h = qg(this.c, h),
                k = g.get("siblingY");
            x(b) == x(k) && (k = g.get("siblingX"));
            g = k.G().M();
            k = qg(this.c, g);
            f = this.c.Ia(vy(k, c, f));
            d.ba(f);
            c = this.c.Ia(vy(k, c, h));
            e.ba(c);
            b.get("boxFeature").G().ba([
                [a.coordinate, f, g, c, a.coordinate]
            ]);
            this.v[0] = a.coordinate[0];
            this.v[1] = a.coordinate[1]
        }
    };

    function vy(a, b, c) {
        b = [b[0] - a[0], b[1] - a[1]];
        c = [c[0] - a[0], c[1] - a[1]];
        b = b[0] * c[0] + b[1] * c[1];
        var d = Math.pow(c[0], 2) + Math.pow(c[1], 2);
        c = [c[0] * b / d, c[1] * b / d];
        return [c[0] + a[0], c[1] + a[1]]
    }
    m.zm = function(a) {
        this.s && (B(this, new Pr(Vr, this.g, a)), this.s = !1);
        return !1
    };

    function wy(a) {
        this.g = a.features;
        this.v = [];
        this.f = [];
        this.i = new ie;
        this.f.push(new Hr({
            features: this.i,
            Kb: a.Kb,
            style: a.style,
            wrapX: a.wrapX
        }));
        this.o = new ie;
        this.f.push(new jy({
            features: this.o,
            Kb: a.Kb,
            style: a.style,
            wrapX: a.wrapX
        }));
        this.s = new ie;
        this.f.push(new uy({
            features: this.s,
            Kb: a.Kb,
            style: a.style,
            wrapX: a.wrapX
        }));
        Vf.call(this, {
            handleEvent: ac
        })
    }
    v(wy, Vf);
    t("ngeo.interaction.Modify", wy);
    wy.prototype.setActive = function(a) {
        Vf.prototype.setActive.call(this, a);
        xy(this)
    };
    wy.prototype.setActive = wy.prototype.setActive;
    m = wy.prototype;
    m.setMap = function(a) {
        var b = this.f,
            c = this.c;
        c && b.forEach(function(a) {
            c.g.remove(a)
        }, this);
        Vf.prototype.setMap.call(this, a);
        a && b.forEach(function(b) {
            Wj(a, b)
        }, this);
        xy(this)
    };

    function xy(a) {
        var b = a.c,
            c = a.getActive(),
            d = a.v;
        a.f.forEach(function(a) {
            a.setActive(c && !!b)
        }, a);
        c && b ? (a.g.forEach(a.Dh, a), d.push(A(a.g, ne, a.Am, a)), d.push(A(a.g, pe, a.Bm, a))) : (d.forEach(function(a) {
            Ja(a)
        }, a), a.g.forEach(a.Eh, a))
    }
    m.Am = function(a) {
        this.Dh(a.element)
    };
    m.Bm = function(a) {
        this.Eh(a.element)
    };
    m.Dh = function(a) {
        yy(this, a).push(a)
    };
    m.Eh = function(a) {
        yy(this, a).remove(a)
    };

    function yy(a, b) {
        var c = b.get("l"),
            d = b.get("r");
        return !0 === c || "true" === c ? a.o : !0 === d || "true" === d ? a.s : a.i
    };

    function zy(a, b) {
        Qa.call(this, a);
        this.feature = b
    }
    v(zy, Qa);

    function Ay(a) {
        this.H = [];
        this.C = !1;
        this.v = null;
        this.f = a.features;
        this.F = this.g = this.i = null;
        var b = a.style ? a.style : Mr();
        this.N = new li({
            source: new cr({
                Qb: !1,
                wrapX: !!a.wrapX
            }),
            style: b,
            Ob: !0,
            Pb: !0
        });
        this.s = {};
        jg.call(this, {
            Va: this.Cm,
            pb: this.Dm,
            Wa: this.Hm
        })
    }
    v(Ay, jg);
    t("ngeo.interaction.Rotate", Ay);
    Ay.prototype.setActive = function(a) {
        this.v && (nu(this.v), this.v = null);
        jg.prototype.setActive.call(this, a);
        a ? (this.v = gu(document, "keyup", this.Gm, !1, this), this.f.forEach(this.Fh, this), this.H.push(A(this.f, ne, this.Em, this)), this.H.push(A(this.f, pe, this.Fm, this))) : (this.H.forEach(function(a) {
            Ja(a)
        }, this), this.f.forEach(this.Gh, this))
    };
    Ay.prototype.setActive = Ay.prototype.setActive;
    m = Ay.prototype;
    m.Fh = function(a) {
        var b = a.G();
        a.set("angle", 0);
        a = x(a);
        b = new Qc(By(b));
        b = new Fk(b);
        this.s[a] = b;
        C(this.N).ya(b)
    };
    m.Gh = function(a) {
        this.i = null;
        a && (a = x(a), this.s[a] && (C(this.N).Ea(this.s[a]), delete this.s[a]))
    };
    m.setMap = function(a) {
        this.N.setMap(a);
        jg.prototype.setMap.call(this, a)
    };
    m.Em = function(a) {
        this.Fh(a.element)
    };
    m.Fm = function(a) {
        this.Gh(a.element)
    };
    m.Cm = function(a) {
        var b = Zj(a.map, a.pixel, function(a) {
            return a
        }, void 0);
        if (b) {
            var c = !1;
            this.f.forEach(function(a) {
                x(a) == x(b) && (c = !0)
            });
            c || (b = null)
        }
        return b ? (this.g = a.coordinate, this.i = b, a = this.i.G(), void 0 !== a && (this.F = By(a)), !0) : !1
    };

    function By(a) {
        a instanceof rl ? a = vi(a) : a instanceof bd ? a = dd(a) : (a = a.K(), a = Wb(a));
        return a
    }
    m.Dm = function(a) {
        this.C || (this.C = !0, B(this, new Pr(Qr, this.f, a)));
        var b = this.i.G(),
            c = this.F[0],
            d = this.F[1],
            e = this.g[0] - c,
            f = this.g[1] - d,
            g = a.coordinate[0] - c,
            h = a.coordinate[1] - d;
        this.g[0] = a.coordinate[0];
        this.g[1] = a.coordinate[1];
        b.rotate(-(Math.atan2(f, e) - Math.atan2(h, g)), [c, d])
    };
    m.Hm = function() {
        this.C && (B(this, new zy("rotateend", this.i)), this.C = !1, this.setActive(!1));
        return !1
    };
    m.Gm = function(a) {
        27 === a.f && this.setActive(!1)
    };

    function Cy(a) {
        this.na = [];
        this.v = {};
        this.F = null;
        this.R = void 0 !== a.features ? a.features : null;
        this.N = new cr({
            Qb: !1
        });
        this.f = new li({
            source: this.N,
            style: a.style,
            Ob: !0,
            Pb: !0
        });
        this.C = {};
        Xr.call(this, a)
    }
    v(Cy, Xr);
    t("ngeo.interaction.Translate", Cy);
    Cy.prototype.setActive = function(a) {
        this.F && (nu(this.F), this.F = null);
        Xr.prototype.setActive.call(this, a);
        a && (this.F = gu(document, "keyup", this.Lm, !1, this));
        Dy(this)
    };
    Cy.prototype.setActive = Cy.prototype.setActive;
    m = Cy.prototype;
    m.setMap = function(a) {
        this.c && this.f.setMap(null);
        Xr.prototype.setMap.call(this, a);
        a && this.f.setMap(a);
        Dy(this)
    };

    function Dy(a) {
        var b = a.c,
            c = a.getActive(),
            d = a.R,
            e = a.na;
        b && c && d ? (d.forEach(a.Hh, a), e.push(A(d, ne, a.Im, a)), e.push(A(d, pe, a.Jm, a))) : (b && (bk(b).style.cursor = "default"), e.forEach(function(a) {
            Ja(a)
        }, a), d.forEach(a.Ih, a))
    }
    m.Im = function(a) {
        this.Hh(a.element)
    };
    m.Jm = function(a) {
        this.Ih(a.element)
    };
    m.Hh = function(a) {
        var b = x(a),
            c = a.G();
        this.v[b] = A(c, "change", this.Km.bind(this, a), this);
        a = Ey(c);
        a = new Fk(a);
        this.C[b] = a;
        this.N.ya(a)
    };
    m.Ih = function(a) {
        a = x(a);
        this.v[a] && (Ja(this.v[a]), delete this.v[a], this.N.Ea(this.C[a]), delete this.C[a])
    };
    m.Km = function(a, b) {
        var c = Ey(b.target),
            d = x(a);
        Gk(this.C[d], c)
    };

    function Ey(a) {
        var b, c;
        a instanceof bd ? c = new Qc(dd(a)) : a instanceof rl ? b = sl(a) : (a = a.K(), b = Wb(a));
        !c && b && (c = new Qc(b));
        return c
    }
    m.Lm = function(a) {
        27 === a.f && this.setActive(!1)
    };
    "function" == typeof proj4 && (proj4.defs("EPSG:2056", "+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 +x_0=2600000 +y_0=1200000 +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs"), oc(jc("EPSG:2056"), [242E4, 103E4, 29E5, 135E4]));
    "function" == typeof proj4 && (proj4.defs("EPSG:21781", "+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 +x_0=600000 +y_0=200000 +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs"), oc(jc("EPSG:21781"), [42E4, 3E4, 9E5, 35E4]));
    if ("function" == typeof proj4) {
        var Fy = [166021.44, 0, 534994.66, 9329005.18];
        proj4.defs("epsg:32631", "+proj=utm +zone=31 +ellps=WGS84 +datum=WGS84 +units=m +no_defs");
        proj4.defs("EPSG:32631", "+proj=utm +zone=31 +ellps=WGS84 +datum=WGS84 +units=m +no_defs");
        oc(jc("epsg:32631"), Fy);
        oc(jc("EPSG:32631"), Fy)
    };

    function Gy() {}
    Gy.prototype.Ko = function(a) {
        var b = a.match(/([\d\.']+)[\s,]+([\d\.']+)/);
        return !b || (a = parseFloat(b[1].replace("'", "")), b = parseFloat(b[2].replace("'", "")), isNaN(a) || isNaN(b)) ? null : [a, b]
    };
    Gy.prototype.stringToCoordinates = Gy.prototype.Ko;
    Gy.prototype.Hk = function(a) {
        var b, c, d = [];
        a.forEach(function(a) {
            b = a.toUpperCase();
            "EPSG:" != b.substr(0, 5) && (b = "EPSG:" + b);
            c = jc(b);
            null !== c ? d.push(c) : console.error("The projection " + b + " is not defined in ol.proj.")
        });
        return d
    };
    Gy.prototype.getProjectionList = Gy.prototype.Hk;
    Gy.prototype.og = function(a, b, c, d) {
        var e;
        void 0 === d && (d = [c]);
        d.some(function(d) {
            e = yc(a, d, c);
            if (Hb(b, e[0], e[1])) return !0;
            e = null
        });
        return e
    };
    Gy.prototype.tryProjections = Gy.prototype.og;
    Gy.prototype.Wo = function(a, b, c, d) {
        var e = this.og(a, b, c, d);
        null === e && (e = this.og(a.reverse(), b, c, d));
        return e
    };
    Gy.prototype.tryProjectionsWithInversion = Gy.prototype.Wo;
    V.service("ngeoAutoProjection", Gy);

    function Hy(a, b) {
        Qa.call(this, a);
        this.previous = b
    }
    v(Hy, Qa);

    function Iy() {
        Ua.call(this);
        this.c = {}
    }
    v(Iy, Ua);
    Iy.prototype.get = function(a) {
        return x(a).toString() in this.c ? eh(Yj(a)).item(0) : null
    };
    Iy.prototype.get = Iy.prototype.get;
    Iy.prototype.set = function(a, b) {
        var c = x(a).toString(),
            d = this.get(a);
        if (null !== d)
            if (null !== b) {
                var c = eh(Yj(a)),
                    e = c.get(ke);
                if (0 < e) e = c.c[0], c.c[0] = b, B(c, new me(pe, e)), B(c, new me(ne, b));
                else {
                    for (; 0 > e; ++e) le(c, e, void 0);
                    le(c, 0, b)
                }
            } else oe(eh(Yj(a)), 0), delete this.c[c];
        else null !== b && (le(eh(Yj(a)), 0, b), this.c[c] = !0);
        B(this, new Hy("change", d));
        return d
    };
    Iy.prototype.set = Iy.prototype.set;
    Iy.prototype.Fe = function(a, b) {
        var c = this.get(a);
        if (c) {
            var d = [c];
            c instanceof ch && (d = eh(c).c);
            d.forEach(function(a) {
                if (a) {
                    var c = !1,
                        d = {},
                        h;
                    for (h in a.get("dimensions")) {
                        var k = b[h];
                        void 0 !== k && (d[h] = k, c = !0)
                    }
                    c && (a = C(a), a instanceof Os ? (a.Fe(d), a.refresh()) : a instanceof Es && (a.updateParams(d), a.refresh()))
                }
            })
        }
    };
    Iy.prototype.updateDimensions = Iy.prototype.Fe;
    V.service("ngeoBackgroundLayerMgr", Iy);
    V.value("ngeoCreateGeoJSONBloodhound", function(a, b, c, d, e, f) {
        var g = new Rl;
        a = {
            remote: {
                url: a,
                prepare: function(a, b) {
                    b.url = b.url.replace("%QUERY", a);
                    return b
                },
                transform: function(a) {
                    void 0 !== b && (a = {
                        type: "FeatureCollection",
                        features: a.features.filter(b)
                    });
                    return g.readFeatures(a, {
                        Ta: c,
                        Ub: d
                    })
                }
            },
            datumTokenizer: ta,
            queryTokenizer: Bloodhound.tokenizers.whitespace
        };
        e = Xs(e || {});
        f = Xs(f || {});
        e.remote && (Zs(f, e.remote), delete e.remote);
        Zs(a, e);
        Zs(a.remote, f);
        return new Bloodhound(a)
    });

    function Jy(a, b) {
        this.S = b;
        this.c = a.has("ngeoCsvEncoding") ? a.get("ngeoCsvEncoding") : "utf-8";
        a.has("ngeoCsvExtension") && a.get("ngeoCsvExtension");
        this.f = a.has("ngeoCsvIncludeHeader") ? a.get("ngeoCsvIncludeHeader") : !0;
        this.b = a.has("ngeoCsvQuote") ? a.get("ngeoCsvQuote") : '"';
        this.g = a.has("ngeoCsvSeparator") ? a.get("ngeoCsvSeparator") : ",";
        this.j = a.get("ngeoDownload")
    }
    Jy.$inject = ["$injector", "gettextCatalog"];
    Jy.prototype.eh = function(a, b) {
        if (0 == a.length || 0 == b.length) return "";
        var c = b.map(function(a) {
                return this.S.getString(a.name)
            }.bind(this)),
            c = Ky(this, c),
            d = a.map(function(a) {
                var c = b.map(function(b) {
                    return a[b.name]
                });
                return Ky(this, c)
            }.bind(this));
        return this.f ? c + d.join("") : d.join("")
    };
    Jy.prototype.generateCsv = Jy.prototype.eh;

    function Ky(a, b) {
        var c = new RegExp(a.b, "g"),
            d = a.b + a.b;
        return b.map(function(a) {
            return void 0 !== a && null !== a ? this.b + ("" + a).replace(c, d) + this.b : ""
        }.bind(a)).join(a.g) + "\n"
    }
    Jy.prototype.Ho = function(a, b, c) {
        a = this.eh(a, b);
        this.j(a, c, "attachment/csv;charset=" + this.c)
    };
    Jy.prototype.startDownload = Jy.prototype.Ho;
    V.service("ngeoCsvDownload", Jy);

    function Ly(a, b, c, d) {
        this.scope = b.$new(!0);
        this.scope.$watch(function() {
            return this.scope.open
        }.bind(this), function(a) {
            !a && this.f && this.j(function() {
                this.destroy()
            }.bind(this))
        }.bind(this));
        this.c = c;
        this.j = d;
        this.b = angular.element("<div ngeo-popup></div>");
        this.f = !1;
        a(this.b)(this.scope);
        angular.element(document.body).append(this.b)
    }
    Ly.prototype.mh = function() {
        return this.scope.open
    };
    Ly.prototype.getOpen = Ly.prototype.mh;
    Ly.prototype.hg = function(a) {
        this.scope.open = a
    };
    Ly.prototype.setOpen = Ly.prototype.hg;
    Ly.prototype.destroy = function() {
        this.scope.$destroy();
        this.b.remove()
    };
    Ly.prototype.destroy = Ly.prototype.destroy;
    Ly.prototype.pi = function(a) {
        a = this.c.trustAsHtml(a);
        this.scope.title = a
    };
    Ly.prototype.setTitle = Ly.prototype.pi;
    Ly.prototype.setContent = function(a, b) {
        this.scope.content = b ? this.c.trustAsHtml(a) : a
    };
    Ly.prototype.setContent = Ly.prototype.setContent;
    Ly.prototype.od = function(a) {
        a = this.c.trustAsHtml('<iframe src="' + a + '" width="100%" height="100%"></iframe>');
        this.setContent(a)
    };
    Ly.prototype.setUrl = Ly.prototype.od;
    Ly.prototype.Be = function(a) {
        this.b.width(a)
    };
    Ly.prototype.setWidth = Ly.prototype.Be;
    Ly.prototype.gg = function(a) {
        this.b.height(a)
    };
    Ly.prototype.setHeight = Ly.prototype.gg;
    Ly.prototype.ze = function(a, b) {
        this.Be(a);
        this.gg(b)
    };
    Ly.prototype.setSize = Ly.prototype.ze;
    Ly.prototype.ni = function(a) {
        this.f = a
    };
    Ly.prototype.setAutoDestroy = Ly.prototype.ni;
    Ly.prototype.addClass = function(a) {
        this.b.addClass(a)
    };
    Ly.prototype.addClass = Ly.prototype.addClass;
    Ly.prototype.open = function(a) {
        a.url ? this.od(a.url) : a.content && this.setContent(a.content);
        void 0 !== a.autoDestroy && this.ni(a.autoDestroy);
        void 0 !== a.cls && this.addClass(a.cls);
        void 0 !== a.height && this.gg(a.height);
        void 0 !== a.title && this.pi(a.title);
        void 0 !== a.width && this.Be(a.width);
        this.hg(!0)
    };
    Ly.prototype.open = Ly.prototype.open;

    function My(a, b, c, d) {
        return function() {
            return new Ly(a, b, c, d)
        }
    }
    My.$inject = ["$compile", "$rootScope", "$sce", "$timeout"];
    V.factory("ngeoCreatePopup", My);

    function Ny(a, b, c) {
        this.o = a;
        this.S = b;
        this.j = c;
        a = angular.element('<div class="ngeo-disclaimer"></div>');
        angular.element(document.body).append(a);
        this.g = a;
        this.b = {}
    }
    v(Ny, Vv);
    Ny.$inject = ["$sce", "gettextCatalog", "ngeoCreatePopup"];
    Ny.prototype.alert = function(a) {
        this.show(a)
    };
    Ny.prototype.alert = Ny.prototype.alert;
    Ny.prototype.close = function(a) {
        Wv(this, a).forEach(this.c, this)
    };
    Ny.prototype.close = Ny.prototype.close;
    Ny.prototype.f = function(a) {
        var b = a.type,
            c = a.msg + "-" + a.type;
        if (void 0 === this.b[c])
            if (!0 === a.popup) {
                var d = this.j(),
                    b = this.o.trustAsHtml(a.msg);
                d.open({
                    autoDestroy: !0,
                    content: b,
                    title: "&nbsp;"
                });
                d.scope.$watch("open", function(b) {
                    b || this.c(a)
                }.bind(this));
                this.b[c] = d
            } else {
                var e = ["alert", "fade", "alert-dismissible"];
                switch (b) {
                    case "error":
                        e.push("alert-danger");
                        break;
                    case "information":
                        e.push("alert-info");
                        break;
                    case "success":
                        e.push("alert-success");
                        break;
                    case "warning":
                        e.push("alert-warning")
                }
                var b = angular.element('<div role="alert" class="' +
                        e.join(" ") + '"></div>'),
                    e = angular.element('<button type="button" class="close" data-dismiss="alert" aria-label="' + this.S.getString("Close") + '"><span aria-hidden="true" class="fa fa-times"></span></button>'),
                    f = angular.element("<span />").html(a.msg);
                b.append(e).append(f);
                a.target ? d = angular.element(a.target) : d = this.g;
                d.append(b);
                b.addClass("in");
                b.on("closed.bs.alert", function() {
                    this.c(a)
                }.bind(this));
                this.b[c] = b
            }
    };
    Ny.prototype.c = function(a) {
        a = a.msg + "-" + a.type;
        var b = this.b[a];
        void 0 !== b && (b instanceof Ly ? b.mh() && b.hg(!1) : b.hasClass("in") && b.alert("close"), delete this.b[a])
    };
    V.service("ngeoDisclaimer", Ny);
    V.value("ngeoFeatures", new ie);

    function Oy(a) {
        return function(b) {
            var c = a.navigator,
                c = c.languages || c.language || c.browserLanguage || c.systemLanguage || c.userLanguage;
            Array.isArray(c) || (c = [c]);
            c = c.map(function(a) {
                return a.substring(0, 2)
            });
            c = c.filter(function(a, b, c) {
                return c.indexOf(a) == b
            });
            return c.filter(function(a) {
                return -1 != b.indexOf(a)
            })[0]
        }
    }
    Oy.$inject = ["$window"];
    V.factory("ngeoGetBrowserLanguage", Oy);

    function Py(a) {
        if (a.eb && "function" == typeof a.eb) return a.eb();
        if (ha(a)) return a.split("");
        if (ea(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        return Vs(a)
    }

    function Qy(a, b, c) {
        if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
        else if (ea(a) || ha(a)) mt(a, b, c);
        else {
            var d;
            if (a.cb && "function" == typeof a.cb) d = a.cb();
            else if (a.eb && "function" == typeof a.eb) d = void 0;
            else if (ea(a) || ha(a)) {
                d = [];
                for (var e = a.length, f = 0; f < e; f++) d.push(f)
            } else d = Ws(a);
            for (var e = Py(a), f = e.length, g = 0; g < f; g++) b.call(c, e[g], d && d[g], a)
        }
    };
    var Ry = "StopIteration" in aa ? aa.StopIteration : {
        message: "StopIteration",
        stack: ""
    };

    function Sy() {}
    Sy.prototype.b = function() {
        throw Ry;
    };
    Sy.prototype.vc = function() {
        return this
    };

    function Ty(a) {
        if (a instanceof Sy) return a;
        if ("function" == typeof a.vc) return a.vc(!1);
        if (ea(a)) {
            var b = 0,
                c = new Sy;
            c.b = function() {
                for (;;) {
                    if (b >= a.length) throw Ry;
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    }

    function Uy(a, b) {
        if (ea(a)) try {
            mt(a, b, void 0)
        } catch (c) {
            if (c !== Ry) throw c;
        } else {
            a = Ty(a);
            try {
                for (;;) b.call(void 0, a.b(), void 0, a)
            } catch (c) {
                if (c !== Ry) throw c;
            }
        }
    }

    function Vy(a) {
        if (ea(a)) return rt(a);
        a = Ty(a);
        var b = [];
        Uy(a, function(a) {
            b.push(a)
        });
        return b
    };

    function Wy(a, b) {
        this.c = {};
        this.b = [];
        this.j = this.f = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a) {
            a instanceof Wy ? (c = a.cb(), d = a.eb()) : (c = Ws(a), d = Vs(a));
            for (var e = 0; e < c.length; e++) this.set(c[e], d[e])
        }
    }
    m = Wy.prototype;
    m.Fb = function() {
        return this.f
    };
    m.eb = function() {
        Xy(this);
        for (var a = [], b = 0; b < this.b.length; b++) a.push(this.c[this.b[b]]);
        return a
    };
    m.cb = function() {
        Xy(this);
        return this.b.concat()
    };
    m.equals = function(a, b) {
        if (this === a) return !0;
        if (this.f != a.Fb()) return !1;
        var c = b || Yy;
        Xy(this);
        for (var d, e = 0; d = this.b[e]; e++)
            if (!c(this.get(d), a.get(d))) return !1;
        return !0
    };

    function Yy(a, b) {
        return a === b
    }
    m.zb = function() {
        return 0 == this.f
    };
    m.clear = function() {
        this.c = {};
        this.j = this.f = this.b.length = 0
    };
    m.remove = function(a) {
        return Zy(this.c, a) ? (delete this.c[a], this.f--, this.j++, this.b.length > 2 * this.f && Xy(this), !0) : !1
    };

    function Xy(a) {
        if (a.f != a.b.length) {
            for (var b = 0, c = 0; b < a.b.length;) {
                var d = a.b[b];
                Zy(a.c, d) && (a.b[c++] = d);
                b++
            }
            a.b.length = c
        }
        if (a.f != a.b.length) {
            for (var e = {}, c = b = 0; b < a.b.length;) d = a.b[b], Zy(e, d) || (a.b[c++] = d, e[d] = 1), b++;
            a.b.length = c
        }
    }
    m.get = function(a, b) {
        return Zy(this.c, a) ? this.c[a] : b
    };
    m.set = function(a, b) {
        Zy(this.c, a) || (this.f++, this.b.push(a), this.j++);
        this.c[a] = b
    };
    m.forEach = function(a, b) {
        for (var c = this.cb(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    m.clone = function() {
        return new Wy(this)
    };
    m.transpose = function() {
        for (var a = new Wy, b = 0; b < this.b.length; b++) {
            var c = this.b[b];
            a.set(this.c[c], c)
        }
        return a
    };
    m.vc = function(a) {
        Xy(this);
        var b = 0,
            c = this.j,
            d = this,
            e = new Sy;
        e.b = function() {
            if (c != d.j) throw Error("The map has changed since the iterator was created");
            if (b >= d.b.length) throw Ry;
            var e = d.b[b++];
            return a ? e : d.c[e]
        };
        return e
    };

    function Zy(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };

    function $y(a, b) {
        this.c = this.o = this.j = "";
        this.i = null;
        this.f = this.s = "";
        this.g = !1;
        var c;
        a instanceof $y ? (this.g = ba(b) ? b : a.g, az(this, a.j), this.o = a.o, this.c = a.c, bz(this, a.i), this.Nc(a.yb()), cz(this, a.b.clone()), this.f = a.f) : a && (c = String(a).match(uu)) ? (this.g = !!b, az(this, c[1] || "", !0), this.o = dz(c[2] || ""), this.c = dz(c[3] || "", !0), bz(this, c[4]), this.Nc(c[5] || "", !0), cz(this, c[6] || "", !0), this.f = dz(c[7] || "")) : (this.g = !!b, this.b = new ez(null, 0, this.g))
    }
    m = $y.prototype;
    m.toString = function() {
        var a = [],
            b = this.j;
        b && a.push(fz(b, gz, !0), ":");
        var c = this.c;
        if (c || "file" == b) a.push("//"), (b = this.o) && a.push(fz(b, gz, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.i, null != c && a.push(":", String(c));
        if (c = this.yb()) this.c && "/" != c.charAt(0) && a.push("/"), a.push(fz(c, "/" == c.charAt(0) ? hz : iz, !0));
        (c = this.b.toString()) && a.push("?", c);
        (c = this.f) && a.push("#", fz(c, jz));
        return a.join("")
    };
    m.resolve = function(a) {
        var b = this.clone(),
            c = !!a.j;
        c ? az(b, a.j) : c = !!a.o;
        c ? b.o = a.o : c = !!a.c;
        c ? b.c = a.c : c = null != a.i;
        var d = a.yb();
        if (c) bz(b, a.i);
        else if (c = !!a.s) {
            if ("/" != d.charAt(0))
                if (this.c && !this.s) d = "/" + d;
                else {
                    var e = b.yb().lastIndexOf("/"); - 1 != e && (d = b.yb().substr(0, e + 1) + d)
                }
            e = d;
            if (".." == e || "." == e) d = "";
            else if (kt(e, "./") || kt(e, "/.")) {
                for (var d = 0 == e.lastIndexOf("/", 0), e = e.split("/"), f = [], g = 0; g < e.length;) {
                    var h = e[g++];
                    "." == h ? d && g == e.length && f.push("") : ".." == h ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(),
                        d && g == e.length && f.push("")) : (f.push(h), d = !0)
                }
                d = f.join("/")
            } else d = e
        }
        c ? b.Nc(d) : c = "" !== a.b.toString();
        c ? cz(b, dz(a.b.toString())) : c = !!a.f;
        c && (b.f = a.f);
        return b
    };
    m.clone = function() {
        return new $y(this)
    };

    function az(a, b, c) {
        a.j = c ? dz(b, !0) : b;
        a.j && (a.j = a.j.replace(/:$/, ""))
    }

    function bz(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
            a.i = b
        } else a.i = null
    }
    m.yb = function() {
        return this.s
    };
    m.Nc = function(a, b) {
        this.s = b ? dz(a, !0) : a;
        return this
    };

    function cz(a, b, c) {
        b instanceof ez ? (a.b = b, kz(a.b, a.g)) : (c || (b = fz(b, lz)), a.b = new ez(b, 0, a.g))
    }

    function dz(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }

    function fz(a, b, c) {
        return ha(a) ? (a = encodeURI(a).replace(b, mz), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    }

    function mz(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
    var gz = /[#\/\?@]/g,
        iz = /[\#\?:]/g,
        hz = /[\#\?]/g,
        lz = /[\#\?@]/g,
        jz = /#/g;

    function ez(a, b, c) {
        this.c = this.b = null;
        this.f = a || null;
        this.j = !!c
    }

    function nz(a) {
        a.b || (a.b = new Wy, a.c = 0, a.f && xu(a.f, function(b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
        }))
    }
    m = ez.prototype;
    m.Fb = function() {
        nz(this);
        return this.c
    };
    m.add = function(a, b) {
        nz(this);
        this.f = null;
        a = oz(this, a);
        var c = this.b.get(a);
        c || this.b.set(a, c = []);
        c.push(b);
        this.c = this.c + 1;
        return this
    };
    m.remove = function(a) {
        nz(this);
        a = oz(this, a);
        return Zy(this.b.c, a) ? (this.f = null, this.c = this.c - this.b.get(a).length, this.b.remove(a)) : !1
    };
    m.clear = function() {
        this.b = this.f = null;
        this.c = 0
    };
    m.zb = function() {
        nz(this);
        return 0 == this.c
    };

    function pz(a, b) {
        nz(a);
        b = oz(a, b);
        return Zy(a.b.c, b)
    }
    m.cb = function() {
        nz(this);
        for (var a = this.b.eb(), b = this.b.cb(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    m.eb = function(a) {
        nz(this);
        var b = [];
        if (ha(a)) pz(this, a) && (b = qt(b, this.b.get(oz(this, a))));
        else {
            a = this.b.eb();
            for (var c = 0; c < a.length; c++) b = qt(b, a[c])
        }
        return b
    };
    m.set = function(a, b) {
        nz(this);
        this.f = null;
        a = oz(this, a);
        pz(this, a) && (this.c = this.c - this.b.get(a).length);
        this.b.set(a, [b]);
        this.c = this.c + 1;
        return this
    };
    m.get = function(a, b) {
        var c = a ? this.eb(a) : [];
        return 0 < c.length ? String(c[0]) : b
    };
    m.toString = function() {
        if (this.f) return this.f;
        if (!this.b) return "";
        for (var a = [], b = this.b.cb(), c = 0; c < b.length; c++)
            for (var d = b[c], e = encodeURIComponent(String(d)), d = this.eb(d), f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        return this.f = a.join("&")
    };
    m.clone = function() {
        var a = new ez;
        a.f = this.f;
        this.b && (a.b = this.b.clone(), a.c = this.c);
        return a
    };

    function oz(a, b) {
        var c = String(b);
        a.j && (c = c.toLowerCase());
        return c
    }

    function kz(a, b) {
        b && !a.j && (nz(a), a.f = null, a.b.forEach(function(a, b) {
            var e = b.toLowerCase();
            b != e && (this.remove(b), this.remove(e), 0 < a.length && (this.f = null, this.b.set(oz(this, e), rt(a)), this.c = this.c + a.length))
        }, a));
        a.j = b
    }
    m.extend = function(a) {
        for (var b = 0; b < arguments.length; b++) Qy(arguments[b], function(a, b) {
            this.add(b, a)
        }, this)
    };

    function Y(a, b) {
        this.c = b;
        this.b = a instanceof $y ? a.clone() : new $y(a, void 0)
    }
    Y.prototype.Qk = function() {
        return this.b
    };
    Y.prototype.getUri = Y.prototype.Qk;
    Y.prototype.yb = function() {
        return this.b.yb()
    };
    Y.prototype.getPath = Y.prototype.yb;
    Y.prototype.cd = function(a) {
        var b;
        void 0 !== a ? (b = this.b.clone(), b.b.extend(a)) : b = this.b;
        return b.toString()
    };
    Y.prototype.getUriString = Y.prototype.cd;
    Y.prototype.Cf = function(a) {
        return pz(this.b.b, a)
    };
    Y.prototype.hasParam = Y.prototype.Cf;
    Y.prototype.qb = function(a) {
        return pz(qz(this).b, a)
    };
    Y.prototype.hasFragmentParam = Y.prototype.qb;
    Y.prototype.Xd = function(a) {
        return this.b.b.get(a)
    };
    Y.prototype.getParam = Y.prototype.Xd;
    Y.prototype.Oa = function(a) {
        a = qz(this).b.get(a);
        return void 0 !== a ? decodeURIComponent(a.replace(/\+/g, " ")) : void 0
    };
    Y.prototype.getFragmentParam = Y.prototype.Oa;
    Y.prototype.Fk = function(a) {
        a = this.Xd(a);
        if (void 0 !== a) return a = parseInt(a, 10), isNaN(a) ? void 0 : a
    };
    Y.prototype.getParamAsInt = Y.prototype.Fk;
    Y.prototype.Td = function(a) {
        a = this.Oa(a);
        if (void 0 !== a) return a = parseInt(a, 10), isNaN(a) ? void 0 : a
    };
    Y.prototype.getFragmentParamAsInt = Y.prototype.Td;
    Y.prototype.wf = function() {
        return this.b.b.cb()
    };
    Y.prototype.getParamKeys = Y.prototype.wf;
    Y.prototype.sf = function() {
        return qz(this).b.cb()
    };
    Y.prototype.getFragmentParamKeys = Y.prototype.sf;
    Y.prototype.Gk = function(a) {
        return this.wf().filter(function(b) {
            return 0 == b.indexOf(a)
        })
    };
    Y.prototype.getParamKeysWithPrefix = Y.prototype.Gk;
    Y.prototype.yk = function(a) {
        return this.sf().filter(function(b) {
            return 0 == b.indexOf(a)
        })
    };
    Y.prototype.getFragmentParamKeysWithPrefix = Y.prototype.yk;
    Y.prototype.updateParams = function(a) {
        var b = this.b.b;
        Us(a, function(a, d) {
            b.set(d, a)
        })
    };
    Y.prototype.updateParams = Y.prototype.updateParams;
    Y.prototype.bc = function(a) {
        var b = qz(this),
            c = b.b;
        Us(a, function(a, b) {
            a = void 0 !== a ? encodeURIComponent(String(a)) : void 0;
            c.set(b, a)
        });
        rz(this, b)
    };
    Y.prototype.updateFragmentParams = Y.prototype.bc;
    Y.prototype.Xc = function(a) {
        this.b.b.remove(a)
    };
    Y.prototype.deleteParam = Y.prototype.Xc;
    Y.prototype.Sa = function(a) {
        var b = qz(this);
        b.b.remove(a);
        rz(this, b)
    };
    Y.prototype.deleteFragmentParam = Y.prototype.Sa;
    Y.prototype.refresh = function() {
        this.c.replaceState(null, "", this.cd())
    };
    Y.prototype.refresh = Y.prototype.refresh;
    Y.prototype.Nc = function(a) {
        this.b.Nc(a)
    };
    Y.prototype.setPath = Y.prototype.Nc;

    function qz(a) {
        a = a.b.f;
        var b = new $y(null);
        cz(b, a);
        return b
    }

    function rz(a, b) {
        var c = dz(b.b.toString());
        a.b.f = c
    }

    function sz(a, b) {
        var c = b.history,
            d = new Y(b.location, b.history),
            e = d.cd();
        a.$watch(function() {
            var b = d.cd();
            e !== b && a.$evalAsync(function() {
                e = b;
                c && c.replaceState && c.replaceState(null, "", b);
                a.$broadcast("ngeoLocationChange")
            })
        });
        return d
    }
    sz.$inject = ["$rootScope", "$window"];
    V.factory("ngeoLocation", sz);

    function tz(a) {
        var b = {};
        a = String(a);
        var c = "#" == a.charAt(0) ? a : "#" + a;
        if (uz.test(c)) return b.Df = vz(c), b.type = "hex", b;
        var d;
        a: {
            var e = a.match(wz);
            if (e) {
                var c = Number(e[1]),
                    f = Number(e[2]);
                d = Number(e[3]);
                e = Number(e[4]);
                if (0 <= c && 255 >= c && 0 <= f && 255 >= f && 0 <= d && 255 >= d && 0 <= e && 1 >= e) {
                    d = [c, f, d, e];
                    break a
                }
            }
            d = []
        }
        if (d.length) {
            a = d[0];
            c = d[1];
            f = d[2];
            d = d[3];
            e = Math.floor(255 * d);
            if (isNaN(e) || 0 > e || 255 < e) throw Error('"(' + a + "," + c + "," + f + "," + d + '") is not a valid RGBA color');
            d = Hx(e.toString(16));
            a = Gx(a, c, f) + d;
            b.Df = a;
            b.type = "rgba";
            return b
        }
        a: {
            if (e = a.match(xz))
                if (c = Number(e[1]), f = Number(e[2]), d = Number(e[3]), e = Number(e[4]), 0 <= c && 360 >= c && 0 <= f && 100 >= f && 0 <= d && 100 >= d && 0 <= e && 1 >= e) {
                    e = [c, f, d, e];
                    break a
                }
            e = []
        }
        if (e.length) {
            c = e[0];
            d = e[1];
            f = e[2];
            a = e[3];
            e = Math.floor(255 * a);
            if (isNaN(e) || 0 > e || 255 < e) throw Error('"(' + c + "," + d + "," + f + "," + a + '") is not a valid HSLA color');
            a = Hx(e.toString(16));
            d /= 100;
            f /= 100;
            c /= 360;
            if (0 == d) f = d = c = 255 * f;
            else {
                var g, e = .5 > f ? f * (1 + d) : f + d - d * f;
                g = 2 * f - e;
                f = 255 * Jx(g, e, c + 1 / 3);
                d = 255 * Jx(g, e, c);
                c = 255 * Jx(g, e, c - 1 / 3)
            }
            a = Ix([Math.round(f),
                Math.round(d), Math.round(c)
            ]) + a;
            b.Df = a;
            b.type = "hsla";
            return b
        }
        throw Error(a + " is not a valid color string");
    }
    var yz = /#(.)(.)(.)(.)/;

    function vz(a) {
        if (!uz.test(a)) throw Error("'" + a + "' is not a valid alpha hex color");
        5 == a.length && (a = a.replace(yz, "#$1$1$2$2$3$3$4$4"));
        return a.toLowerCase()
    }
    var uz = /^#(?:[0-9a-f]{4}){1,2}$/i,
        wz = /^(?:rgba)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|1|0\.\d{0,10})\)$/i,
        xz = /^(?:hsla)\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\%,\s?(0|[1-9]\d{0,2})\%,\s?(0|1|0\.\d{0,10})\)$/i;
    var zz = {
        LineString: "LineString",
        Point: "Point",
        Polygon: "Polygon",
        MultiLineString: "LineString",
        MultiPoint: "Point",
        MultiPolygon: "Polygon"
    };

    function Az(a, b, c) {
        this.b = a;
        this.ib = b;
        this.c = c
    }
    Az.prototype.cancel = function(a, b) {
        return this.ib["delete"](this.b + "/cancel/" + a, void 0 !== b ? b : {})
    };
    Az.prototype.cancel = Az.prototype.cancel;
    Az.prototype.ak = function(a, b, c, d, e, f) {
        c = {
            dpi: c,
            rotation: f.rotation
        };
        Bz(this, a, b, c);
        a = {
            map: c
        };
        Zs(a, f);
        return {
            attributes: a,
            format: e,
            layout: d
        }
    };
    Az.prototype.createSpec = Az.prototype.ak;

    function Bz(a, b, c, d) {
        var e = D(b),
            f = qd(e),
            g = e.c,
            h = td(e),
            e = d.rotation || 180 * ud(e) / Math.PI;
        d.center = f;
        d.projection = g.b;
        d.rotation = e;
        d.scale = c;
        d.layers = [];
        b = Yj(b);
        b = a.c.rf(b);
        b = b.slice().reverse();
        b.forEach(function(a) {
            if (ah(a)) {
                var b = d.layers;
                if (a instanceof Ih) {
                    if (C(a) instanceof Es) {
                        var c = C(a),
                            e = c.o;
                        if (void 0 !== e) {
                            a = $g(a);
                            var c = c.g,
                                f = {
                                    TRANSPARENT: !0
                                };
                            Zs(f, c);
                            delete f.LAYERS;
                            delete f.FORMAT;
                            delete f.SERVERTYPE;
                            delete f.VERSION;
                            a = {
                                baseURL: Cz(e),
                                imageFormat: "FORMAT" in c ? c.FORMAT : "image/png",
                                layers: c.LAYERS.split(","),
                                customParams: f,
                                serverType: c.SERVERTYPE,
                                type: "wms",
                                opacity: a,
                                version: c.VERSION
                            };
                            b.push(a)
                        }
                    }
                } else if (a instanceof Jh) {
                    if (C(a) instanceof Os) {
                        for (var e = C(a), f = e.f, g = e.oa, u = g.i, c = [], z = 0, w = u.length; z < w; ++z) {
                            var H = ce(g, z);
                            c.push({
                                identifier: u[z],
                                scaleDenominator: Vd(g, z) * nc(f) / 2.8E-4,
                                tileSize: Ld($d(g, z)),
                                topLeftCorner: Ud(g, z),
                                matrixSize: [H.Z - H.W, H.ca - H.aa]
                            })
                        }
                        f = e.o;
                        g = Object.keys(f);
                        u = e.Za[0];
                        z = e.Pa();
                        0 <= u.indexOf("{Layer}") && (u = u.replace("{Layer}", z));
                        a = {
                            baseURL: Cz(u),
                            dimensions: g,
                            dimensionParams: f,
                            imageFormat: e.R,
                            layer: e.Pa(),
                            matrices: c,
                            matrixSet: e.H,
                            opacity: $g(a),
                            requestEncoding: e.Ca,
                            style: e.hc(),
                            type: "WMTS",
                            version: e.ra
                        };
                        b.push(a)
                    }
                } else if (a instanceof li) {
                    e = lr(C(a));
                    c = new Rl;
                    f = [];
                    g = {
                        version: 2
                    };
                    u = 0;
                    for (z = e.length; u < z; ++u) {
                        var w = e[u],
                            F = null,
                            H = w.f;
                        void 0 !== H ? F = H.call(w, h) : (H = a.i, void 0 !== H && (F = H.call(a, w, h)));
                        H = ml(c, w);
                        if ((F = null === F || Array.isArray(F) ? F : [F]) && 0 < F.length)
                            for (var I = !1, N = 0, fa = F.length; N < fa; ++N) {
                                var U = F[N],
                                    y = x(U).toString(),
                                    T = U.G(),
                                    P;
                                if (T) {
                                    var W = w.clone();
                                    Gk(W, T);
                                    P = ml(c, W);
                                    T = W.G();
                                    f.push(P)
                                } else {
                                    P =
                                        H;
                                    T = w.G();
                                    if (!T) continue;
                                    I || (f.push(P), I = !0)
                                }
                                var K = T.T();
                                null === P.properties && (P.properties = {});
                                T = "_ngeo_style_" + N;
                                W = U;
                                if (K in zz) {
                                    var M = zz[K],
                                        K = "[" + T + " = '" + y + "']";
                                    if (!(K in g)) {
                                        U = {
                                            symbolizers: []
                                        };
                                        g[K] = U;
                                        var K = W.j,
                                            O = W.c,
                                            J = W.f,
                                            W = W.pa();
                                        if ("Polygon" == M) null !== K && (M = U.symbolizers, O = {
                                            type: "polygon"
                                        }, Dz(O, K), null !== J && Ez(O, J), M.push(O));
                                        else if ("LineString" == M) null !== J && (K = U.symbolizers, M = {
                                            type: "line"
                                        }, Ez(M, J), K.push(M));
                                        else if ("Point" == M && null !== O) {
                                            K = U.symbolizers;
                                            M = O;
                                            J = void 0;
                                            if (M instanceof Zh) J = {
                                                type: "point"
                                            }, J.pointRadius = M.f, O = M.c, null !== O && Dz(J, O), M = M.b, null !== M && Ez(J, M);
                                            else if (M instanceof hn) {
                                                if (O = M.b.o, void 0 !== O) {
                                                    J = {
                                                        type: "point",
                                                        externalGraphic: O
                                                    };
                                                    O = M.g;
                                                    null !== O && (J.graphicOpacity = O);
                                                    O = M.Jb();
                                                    if (null !== O) {
                                                        var ga = M.Da();
                                                        isNaN(ga) && (ga = 1);
                                                        J.graphicWidth = O[0] * ga;
                                                        J.graphicHeight = O[1] * ga
                                                    }
                                                    M = M.s;
                                                    isNaN(M) && (M = 0);
                                                    J.rotation = 180 * M / Math.PI
                                                }
                                            } else M instanceof Ts && (O = M.b, null !== O && (J = {
                                                    type: "point"
                                                }, 4 === O ? J.graphicName = "square" : 3 === O ? J.graphicName = "triangle" : 5 === O ? J.graphicName = "star" : 8 === O &&
                                                (J.graphicName = "cross"), O = M.Jb(), null !== O && (J.graphicWidth = O[0], J.graphicHeight = O[1]), O = M.s, isNaN(O) || 0 === O || (J.rotation = 180 * O / Math.PI), O = M.g, null !== O && (J.graphicOpacity = O), O = M.c, null !== O && Ez(J, O), M = M.i, null !== M && Dz(J, M)));
                                            void 0 !== J && K.push(J)
                                        }
                                        null !== W && (U = U.symbolizers, K = {
                                            type: "Text"
                                        }, J = W.pa(), void 0 !== J && (K.label = J, J = W.o, void 0 !== J && (K.labelAlign = J), J = W.i, void 0 !== J && (K.labelRotation = (180 * J / Math.PI).toString(), K.labelAlign = "cm"), J = W.c, void 0 !== J && (J = J.split(" "), 3 <= J.length && (K.fontWeight = J[0],
                                            K.fontSize = J[1], K.fontFamily = J.splice(2).join(" "))), J = W.f, null !== J && (M = ue(J.b), K.haloColor = Ix(M), K.haloOpacity = M[3], J = J.c, void 0 !== J && (K.haloRadius = J)), J = W.b, null !== J && (J = ue(J.b), K.fontColor = Ix(J)), void 0 !== K.labelAlign && (K.labelXOffset = W.j, K.labelYOffset = -W.g), U.push(K)))
                                    }
                                }
                                P.properties[T] = y
                            }
                    }
                    0 < f.length && (a = {
                        geoJson: {
                            type: "FeatureCollection",
                            features: f
                        },
                        opacity: $g(a),
                        style: g,
                        type: "geojson"
                    }, b.push(a))
                }
            }
        }, a)
    }

    function Cz(a) {
        var b = document.createElement("a");
        b.href = encodeURI(a);
        return decodeURI(b.href)
    }

    function Dz(a, b) {
        var c = b.b;
        null !== c && ("string" === typeof c && (c = tz(c).Df, c = vz(c), c = [parseInt(c.substr(1, 2), 16), parseInt(c.substr(3, 2), 16), parseInt(c.substr(5, 2), 16), parseInt(c.substr(7, 2), 16) / 255]), a.fillColor = Ix(c), a.fillOpacity = c[3])
    }

    function Ez(a, b) {
        var c = b.b;
        null !== c && (c = ue(c), a.strokeColor = Ix(c), a.strokeOpacity = c[3]);
        c = b.f;
        null !== c && (a.strokeDashstyle = c.join(" "));
        c = b.c;
        void 0 !== c && (a.strokeWidth = c)
    }
    Az.prototype.$j = function(a, b) {
        var c = this.b + "/report." + (a.format || "pdf"),
            d = {
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            };
        Zs(d, void 0 !== b ? b : {});
        return this.ib.post(c, a, d)
    };
    Az.prototype.createReport = Az.prototype.$j;
    Az.prototype.Mk = function(a, b) {
        return this.ib.get(this.b + "/status/" + a + ".json", void 0 !== b ? b : {})
    };
    Az.prototype.getStatus = Az.prototype.Mk;
    Az.prototype.Ik = function(a) {
        return this.b + "/report/" + a
    };
    Az.prototype.getReportUrl = Az.prototype.Ik;

    function Fz(a, b) {
        return function(c) {
            return new Az(c, a, b)
        }
    }
    Fz.$inject = ["$http", "ngeoLayerHelper"];
    V.factory("ngeoCreatePrint", Fz);

    function Gz() {}
    Gz.prototype.Zj = function(a, b, c) {
        var d = this;
        return function(e) {
            var f = e.context,
                g = e.frameState,
                h = g.da.resolution,
                k = g.size[0] * g.Ha,
                l = g.size[1] * g.Ha;
            e = [k / 2, l / 2];
            var n = a(),
                q = n[1] * Qe,
                p = n[0] * Qe,
                g = b(g),
                p = p / 72 / 39.37 * g / h / 2;
            d.b = n[0] / 72 / 39.37 * g / 2;
            h = q / 72 / 39.37 * g / h / 2;
            d.c = n[1] / 72 / 39.37 * g / 2;
            f.beginPath();
            f.moveTo(0, 0);
            f.lineTo(k, 0);
            f.lineTo(k, l);
            f.lineTo(0, l);
            f.lineTo(0, 0);
            f.closePath();
            if (c) {
                var n = za(c()),
                    k = Math.sqrt(Math.pow(p, 2) + Math.pow(h, 2)),
                    l = Math.atan(h / p) - n,
                    r = Math.atan(p / h) - n,
                    p = e[0] - Math.cos(l) * k,
                    h = e[1] +
                    Math.sin(l) * k,
                    n = e[0] + Math.sin(r) * k,
                    q = e[1] + Math.cos(r) * k,
                    g = e[0] + Math.cos(l) * k,
                    l = e[1] - Math.sin(l) * k,
                    u = e[0] - Math.sin(r) * k;
                e = e[1] - Math.cos(r) * k;
                f.moveTo(p, h);
                f.lineTo(n, q);
                f.lineTo(g, l);
                f.lineTo(u, e);
                f.lineTo(p, h)
            } else k = e[0] - p, l = e[1] - h, p = e[0] + p, e = e[1] + h, f.moveTo(k, l), f.lineTo(k, e), f.lineTo(p, e), f.lineTo(p, l), f.lineTo(k, l);
            f.closePath();
            f.fillStyle = "rgba(0, 5, 25, 0.5)";
            f.fill()
        }
    };
    Gz.prototype.createPrintMaskPostcompose = Gz.prototype.Zj;
    Gz.prototype.Ek = function(a, b, c, d) {
        a = Math.min(a[0] * b * 2834.64 / c[0], a[1] * b * 2834.64 / c[1]);
        b = -1;
        c = 0;
        for (var e = d.length; c < e; ++c) a > d[c] && (b = d[c]);
        return b
    };
    Gz.prototype.getOptimalScale = Gz.prototype.Ek;
    Gz.prototype.Dk = function(a, b, c) {
        return Math.max(b[0] * c / (2834.64 * a[0]), b[1] * c / (2834.64 * a[1]))
    };
    Gz.prototype.getOptimalResolution = Gz.prototype.Dk;
    V.service("ngeoPrintUtils", Gz);

    function Hz() {};

    function Iz() {}
    sa(Iz, Hz);
    Iz.prototype.Fb = function() {
        var a = 0;
        Uy(this.vc(!0), function() {
            a++
        });
        return a
    };
    Iz.prototype.clear = function() {
        var a = Vy(this.vc(!0)),
            b = this;
        mt(a, function(a) {
            b.remove(a)
        })
    };

    function Jz(a) {
        this.b = a
    }
    sa(Jz, Iz);

    function Kz(a) {
        if (!a.b) return !1;
        try {
            return a.b.setItem("__sak", "1"), a.b.removeItem("__sak"), !0
        } catch (b) {
            return !1
        }
    }
    m = Jz.prototype;
    m.set = function(a, b) {
        try {
            this.b.setItem(a, b)
        } catch (c) {
            if (0 == this.b.length) throw "Storage mechanism: Storage disabled";
            throw "Storage mechanism: Quota exceeded";
        }
    };
    m.get = function(a) {
        a = this.b.getItem(a);
        if (!ha(a) && null !== a) throw "Storage mechanism: Invalid value was encountered";
        return a
    };
    m.remove = function(a) {
        this.b.removeItem(a)
    };
    m.Fb = function() {
        return this.b.length
    };
    m.vc = function(a) {
        var b = 0,
            c = this.b,
            d = new Sy;
        d.b = function() {
            if (b >= c.length) throw Ry;
            var d = c.key(b++);
            if (a) return d;
            d = c.getItem(d);
            if (!ha(d)) throw "Storage mechanism: Invalid value was encountered";
            return d
        };
        return d
    };
    m.clear = function() {
        this.b.clear()
    };
    m.key = function(a) {
        return this.b.key(a)
    };

    function Lz() {
        var a = null;
        try {
            a = window.localStorage || null
        } catch (b) {}
        this.b = a
    }
    sa(Lz, Jz);
    V.value("ngeoUsedKeyRegexp", [/.*/]);

    function Mz(a, b) {
        this.c = {};
        this.f = a;
        this.b = new Lz;
        this.j = b;
        this.g = ["theme"];
        var c = a.wf(),
            d = new RegExp(/\/theme\/([^\?\/]*)/),
            e = a.yb(),
            f = {};
        if (0 === c.length || 1 === c.length && "debug" == c[0]) {
            if (Kz(this.b)) {
                d = this.b.Fb();
                for (c = 0; c < d; ++c) {
                    var g = this.b.key(c);
                    this.j.some(function(a) {
                        if (g.match(a)) return a = Nz(this, g), this.c[g] = a, 0 > this.g.indexOf(g) && (f[g] = this.c[g]), !0
                    }, this)
                }
                this.f.updateParams(f)
            }
        } else c.forEach(function(a) {
            this.j.some(function(b) {
                if (a.match(b) && (b = Nz(this, a), null !== b)) return this.c[a] = b, !0
            }, this)
        }, this), (c = e.match(d)) && (this.c.theme = c[1])
    }
    Mz.$inject = ["ngeoLocation", "ngeoUsedKeyRegexp"];

    function Nz(a, b) {
        var c = a.b.get(b);
        try {
            return angular.fromJson(c)
        } catch (d) {
            return c
        }
    }
    Mz.prototype.Xc = function(a) {
        this.f.Xc(a);
        Kz(this.b) && this.b.remove(a)
    };
    V.service("ngeoStateManager", Mz);
    V.value("ngeoSyncArrays", function(a, b, c, d, e) {
        var f = d.$watchCollection(function() {
                return a
            }, function() {
                var d, f, g;
                if (c)
                    for (d = a.length - 1, g = 0; 0 <= d; --d) e(a[d]) && (b[g++] = a[d]);
                else
                    for (d = 0, f = a.length, g = 0; d < f; ++d) e(a[d]) && (b[g++] = a[d]);
                b.length = g
            }),
            g = d.$watchCollection(function() {
                return b
            }, function() {
                var d, f, g;
                if (c)
                    for (d = 0, f = a.length, g = b.length - 1; d < f; ++d) e(a[d]) && (a[d] = b[g--]);
                else
                    for (d = 0, f = a.length, g = 0; d < f; ++d) e(a[d]) && (a[d] = b[g++])
            });
        return function() {
            f();
            g()
        }
    });

    function Oz(a, b) {
        this.getActive = function() {
            return a[b]
        };
        this.setActive = function(c) {
            a[b] = c
        }
    }
    t("ngeo.ToolActivate", Oz);
    V.value("ngeoToolActivate", Oz);

    function Pz(a) {
        this.b = {};
        this.c = a
    }
    Pz.$inject = ["$rootScope"];
    Pz.prototype.eo = function(a, b, c) {
        var d = this.b[a];
        d || (d = this.b[a] = []);
        var e = this.c.$watch(b.getActive, function(c, d) {
            if (c !== d)
                if (c)
                    for (var e = this.b[a], k = 0; k < e.length; k++) b != e[k].rd && e[k].rd.setActive(!1);
                else {
                    for (var e = this.b[a], k = null, l = !1, n = 0; n < e.length; n++) l = l || e[n].rd.getActive(), e[n].gk && (k = e[n].rd);
                    l || null === k || k.setActive(!0)
                }
        }.bind(this));
        d.push({
            rd: b,
            gk: c || !1,
            Oc: e
        })
    };
    Pz.prototype.registerTool = Pz.prototype.eo;
    Pz.prototype.$o = function(a, b) {
        var c = this.b[a];
        if (c)
            for (var d = 0; d < c.length; d++)
                if (c[d].rd == b) {
                    c[d].Oc();
                    c.splice(d, 1);
                    break
                }
    };
    Pz.prototype.unregisterTool = Pz.prototype.$o;
    Pz.prototype.Zo = function(a) {
        var b = this.b[a];
        if (b) {
            for (var c = 0; c < b.length; c++) b[c].Oc();
            delete this.b[a]
        }
    };
    Pz.prototype.unregisterGroup = Pz.prototype.Zo;
    Pz.prototype.uj = function(a) {
        a.setActive(!0)
    };
    Pz.prototype.activateTool = Pz.prototype.uj;
    Pz.prototype.ek = function(a) {
        a.setActive(!1)
    };
    Pz.prototype.deactivateTool = Pz.prototype.ek;
    V.service("ngeoToolActivateMgr", Pz);
    V.value("ngeoWfsPermalinkOptions", {
        url: "",
        wfsTypes: [],
        defaultFeatureNS: "",
        defaultFeaturePrefix: ""
    });

    function Qz(a, b, c) {
        this.g = c.url;
        this.j = void 0 !== c.maxFeatures ? c.maxFeatures : 50;
        this.b = {};
        c.wfsTypes.forEach(function(a) {
            this.b[a.featureType] = a
        }.bind(this));
        this.c = c.defaultFeatureNS;
        this.f = c.defaultFeaturePrefix;
        this.o = c.pointRecenterZoom;
        this.ib = a;
        this.Ka = b
    }
    Qz.$inject = ["$http", "ngeoQueryResult", "ngeoWfsPermalinkOptions"];
    Qz.prototype.clear = function() {
        Rz(this)
    };
    Qz.prototype.clear = Qz.prototype.clear;
    Qz.prototype.ed = function(a, b) {
        Rz(this);
        var c = a.oq;
        if (this.b.hasOwnProperty(c)) {
            var c = this.b[c],
                d = Sz(a.Up);
            null !== d && Tz(this, c, d, b, a.iq)
        }
    };
    Qz.prototype.issue = Qz.prototype.ed;

    function Tz(a, b, c, d, e) {
        var f = new Fp;
        c = Tp(f, {
            xa: D(d).c.b,
            featureNS: void 0 !== b.featureNS ? b.featureNS : a.c,
            featurePrefix: void 0 !== b.featurePrefix ? b.featurePrefix : a.f,
            gf: [b.featureType],
            Qf: "GML3",
            filter: c,
            maxFeatures: a.j
        });
        c = (new XMLSerializer).serializeToString(c);
        a.ib.post(a.g, c).then(function(a) {
            a = f.readFeatures(a.data);
            if (0 != a.length) {
                var c = vg(d);
                void 0 !== c && yd(D(d), Uz(a), c, {
                    ka: this.o,
                    padding: [10, 10, 10, 10]
                });
                e && (this.Ka.sources.push({
                    features: a,
                    id: b.featureType,
                    identifierAttributeField: b.label,
                    label: b.featureType,
                    pending: !1
                }), this.Ka.total = a.length)
            }
        }.bind(a))
    }

    function Uz(a) {
        return a.reduce(function(a, c) {
            return Nb(a, c.G().K())
        }, Cb())
    }

    function Sz(a) {
        return 0 == a.length ? null : Vz(a.map(function(a) {
            a = a.filters.map(function(a) {
                var b = a.ta;
                return Array.isArray(b) ? Vz(b.map(function(b) {
                    return new Jl(a.property, b, void 0)
                }), Ml) : new Jl(a.property, a.ta, void 0)
            });
            return Vz(a, Ll)
        }), Ml)
    }

    function Vz(a, b) {
        return a.reduce(function(a, d) {
            return null === a ? d : b(a, d)
        }, null)
    }

    function Rz(a) {
        a.Ka.total = 0;
        a.Ka.sources.forEach(function(a) {
            a.features.length = 0
        }, a)
    }
    V.service("ngeoWfsPermalink", Qz);
    var Wz = [4E3, 3750, 3500, 3250, 3E3, 2750, 2500, 2250, 2E3, 1750, 1500, 1250, 1E3, 750, 650, 500, 250, 100, 50, 20, 10, 5, 2.5, 2, 1.5, 1, .5],
        Xz = new Ls({
            extent: [42E4, 3E4, 9E5, 35E4],
            Fa: Wz,
            lc: Wz.map(function(a, b) {
                return String(b)
            })
        });

    function Yz(a) {
        Os.call(this, {
            la: [Zz],
            url: "https://ows{1-4}.asitvd.ch/wmts/1.0.0/{Layer}/default/default/0/21781/{TileMatrix}/{TileRow}/{TileCol}.png",
            projection: "EPSG:21781",
            requestEncoding: "REST",
            layer: a.layer,
            style: "default",
            matrixSet: "21781",
            format: "image/png",
            oa: Xz
        })
    }
    v(Yz, Os);
    t("ngeo.source.AsitVD", Yz);
    var Zz = new he({
        html: "g\u00e9odonn\u00e9es &copy; Etat de Vaud & &copy; contributeurs OpenStreetMap"
    });
    var $z = [4E3, 3750, 3500, 3250, 3E3, 2750, 2500, 2250, 2E3, 1750, 1500, 1250, 1E3, 750, 650, 500, 250, 100, 50, 20, 10, 5, 2.5, 2, 1.5, 1, .5, .25, .1];

    function aA() {
        for (var a = Array(27), b = 0; 27 >= b; ++b) a[b] = String(b);
        return a
    }
    var bA = {
        "EPSG:2056": new Ls({
            extent: [242E4, 103E4, 29E5, 135E4],
            Fa: $z.slice(0, 28),
            lc: aA()
        }),
        "EPSG:21781": new Ls({
            extent: [42E4, 3E4, 9E5, 35E4],
            Fa: $z.slice(0, 28),
            lc: aA()
        })
    };

    function cA(a, b) {
        if ("EPSG:2056" === a) return "https://wmts{10-14}.geo.admin.ch/1.0.0/{Layer}/default/{Time}/2056/{TileMatrix}/{TileCol}/{TileRow}." + b;
        if ("EPSG:21781" === a) return "https://wmts{5-9}.geo.admin.ch/1.0.0/{Layer}/default/{Time}/21781/{TileMatrix}/{TileRow}/{TileCol}." + b
    }

    function dA(a) {
        var b = a.format || "image/png",
            c = a.projection,
            d = bA[c],
            e = c.split(":")[1];
        Os.call(this, {
            la: [eA],
            url: cA(c, b.split("/")[1]),
            dimensions: {
                Time: a.timestamp
            },
            projection: c,
            requestEncoding: "REST",
            layer: a.layer,
            style: "default",
            matrixSet: e,
            format: b,
            oa: d
        })
    }
    v(dA, Os);
    t("ngeo.source.Swisstopo", dA);
    var eA = new he({
        html: '&copy; <a href="http://www.swisstopo.admin.ch">swisstopo</a>'
    });
    angular.module("ui.date", []);
    angular.module("floatThead", []);
    var Z = angular.module("app", [V.name, "gettext", "ngMessages", "ngCookies", "ui.bootstrap", "angularMoment", "ngFileUpload", "slug", "vcRecaptcha", "infinite-scroll", "ngSanitize"]);

    function fA(a) {
        this.I = [];
        this.S = a
    }
    fA.prototype.gettext = function(a) {
        return a
    };
    fA.prototype.add = function(a) {
        var b = a.timeout || 0;
        gA(b);
        var c = a.msg,
            c = c instanceof Object ? hA(this, c) : iA(this, c);
        this.I.push({
            type: a.type || "warning",
            msg: c,
            timeout: b
        })
    };
    fA.prototype.add = fA.prototype.add;
    fA.prototype.lb = function(a) {
        this.add({
            type: "success",
            msg: a,
            timeout: 5E3
        })
    };
    fA.prototype.addSuccess = fA.prototype.lb;
    fA.prototype.kb = function(a) {
        this.add({
            type: "danger",
            msg: a,
            timeout: 5E3
        })
    };
    fA.prototype.addError = fA.prototype.kb;
    fA.prototype.ha = function(a, b) {
        var c = iA(this, a) + "<br>" + hA(this, b);
        gA(5E3);
        this.I.push({
            type: "danger",
            msg: c,
            timeout: 5E3
        })
    };
    fA.prototype.addErrorWithMsg = fA.prototype.ha;
    fA.prototype.get = function() {
        return this.I
    };
    fA.prototype.get = fA.prototype.get;

    function gA(a) {
        $("main, aside, .page-header").addClass("loading");
        setTimeout(function() {
            $("main, aside, .page-header").removeClass("loading")
        }, a)
    }

    function hA(a, b) {
        if (!("data" in b && b.data && "errors" in b.data && b.data.errors)) return a.S.getString("Unknown error");
        var c = b.data.errors,
            d = c.length;
        if (1 < d) {
            for (var e = "<ul>", f = 0; f < d; f++) e += "<li>" + iA(a, c[f].name) + " : " + iA(a, c[f].description) + "</li>";
            return e + "</ul>"
        }
        return iA(a, c[0].name) + " : " + iA(a, c[0].description)
    }

    function iA(a, b) {
        b = ct(b);
        return a.S.getString(b)
    }

    function jA(a) {
        return new fA(a)
    }
    jA.$inject = ["gettextCatalog"];
    Z.factory("appAlerts", jA);

    function kA(a, b, c, d, e) {
        this.f = a;
        this.I = c;
        this.c = d;
        b.Aa() ? lA(this.c).then(function(b) {
            this.b = b.data;
            a.account = angular.copy(this.b)
        }.bind(this)) : mA(e)
    }
    kA.$inject = ["$scope", "appAuthentication", "appAlerts", "appApi", "authUrl"];
    kA.prototype.save = function() {
        var a = this.f.account,
            b = {},
            c;
        for (c in a) c in this.b && a[c] === this.b[c] || (b[c] = a[c]);
        var d = this.I;
        nA(this.c, b).then(function() {
            var a = d.gettext("Update success");
            d.lb(a)
        })
    };
    kA.prototype.save = kA.prototype.save;
    Z.controller("appAccountController", kA);
    Z.directive("appActivityFilter", function() {
        return {
            restrict: "E",
            controller: "appActivityFilterController",
            controllerAs: "afilterCtrl",
            bindToController: {
                activities: "<",
                documents: "<"
            },
            templateUrl: "/static/partials/activityfilter.html"
        }
    });

    function oA() {
        this.selectedActivities = []
    }
    oA.prototype.toggle = function(a) {
        if (-1 != this.activities.indexOf(a)) {
            var b = this.selectedActivities.indexOf(a); - 1 == b ? this.selectedActivities.push(a) : this.selectedActivities.splice(b, 1)
        }
    };
    oA.prototype.toggle = oA.prototype.toggle;
    oA.prototype.b = function(a) {
        return this.selectedActivities.length ? a.activities.some(function(a) {
            return -1 != this.selectedActivities.indexOf(a)
        }.bind(this)) : !0
    };
    oA.prototype.filter = function(a) {
        return a.filter(this.b.bind(this))
    };
    oA.prototype.filter = oA.prototype.filter;
    Z.controller("appActivityFilterController", oA);

    function pA(a, b, c, d, e, f) {
        this.c = a;
        this.g = b;
        this.b = c;
        this.j = e;
        this.I = d;
        this.f = f
    }
    pA.$inject = "apiUrl imageBackendUrl $http appAlerts $q appAuthentication".split(" ");

    function qA(a, b, c) {
        return a.b.post(a.c + b, c, {
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                Accept: "application/json"
            }
        })
    }

    function rA(a, b, c) {
        return a.b["delete"](a.c + b, {
            data: c,
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                Accept: "application/json"
            }
        })
    }

    function sA(a, b, c) {
        var d = {
            headers: {
                Accept: "application/json"
            }
        };
        c && (d.timeout = c);
        return a.b.get(a.c + b, d)
    }

    function tA(a, b, c) {
        b = qA(a, "/associations", {
            parent_document_id: b,
            child_document_id: c
        });
        b["catch"](function(a) {
            var b = this.I.gettext("Failed to associate document:");
            this.I.ha(b, a)
        }.bind(a));
        return b
    }

    function uA(a, b, c) {
        b = rA(a, "/associations", {
            parent_document_id: b,
            child_document_id: c
        });
        b["catch"](function(a) {
            var b = this.I.gettext("Failed to unassociate document:");
            this.I.ha(b, a)
        }.bind(a));
        return b
    }

    function vA(a) {
        a = qA(a, "/users/logout", {
            discourse: !0
        });
        a["catch"](function(a) {
            var c = this.I.gettext("Logout failed:");
            this.I.ha(c, a)
        });
        return a
    }

    function wA(a, b, c) {
        b = qA(a, "/" + b, c);
        b["catch"](a.Rd.bind(a));
        return b
    }

    function xA(a, b, c, d, e) {
        var f = a.I;
        e = "undefined" === typeof e ? !1 : e;
        b = "/{module}/{id}?l={lang}{editing}".replace("{module}", b).replace("{id}", String(c)).replace("{lang}", d).replace("{editing}", e ? "&e=1" : "");
        a = sA(a, b);
        a["catch"](function(a) {
            f.kb(a)
        });
        return a
    }

    function yA(a, b, c, d) {
        b = "/{module}/{id}".replace("{module}", b).replace("{id}", String(c));
        d = a.b.put(a.c + b, d, {
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                Accept: "application/json"
            }
        });
        d["catch"](a.Rd.bind(a));
        return d
    }

    function zA(a, b, c, d) {
        b = "/{module}{qmark}{qstr}".replace("{module}", b).replace("{qmark}", c ? "?" : "").replace("{qstr}", c);
        var e = a.I;
        a = sA(a, b, d);
        a["catch"](function(a) {
            -1 !== a.status && e.kb(a)
        });
        return a
    }
    pA.prototype.pf = function(a, b, c) {
        var d = this.I;
        a = sA(this, "/search?q=" + a + "&t=" + b + "&pl=" + c);
        a["catch"](function(a) {
            d.kb(a)
        });
        return a
    };
    pA.prototype.getDocumentByIdAndDoctype = pA.prototype.pf;
    m = pA.prototype;
    m.Rd = function(a) {
        var b;
        a.data instanceof Object && "errors" in a.data ? b = a : b = 403 === a.status ? "You have no permission to modify this document" : "Failed saving the changes";
        this.I.kb(b)
    };
    m.register = function(a) {
        a = qA(this, "/users/register", a);
        a["catch"](function(a) {
            var c = this.I.gettext("Registration failed:");
            this.I.ha(c, a)
        }.bind(this));
        return a
    };

    function AA(a, b) {
        var c = qA(a, "/users/validate_register_email/" + b, {});
        c["catch"](function(a) {
            var b = this.I.gettext("Your account could not be activated:");
            this.I.ha(b, a)
        }.bind(a));
        return c
    }

    function BA(a, b) {
        var c = qA(a, "/users/validate_change_email/" + b, {});
        c["catch"](function(a) {
            var b = this.I.gettext("Your new email could not be activated:");
            this.I.ha(b, a)
        }.bind(a));
        return c
    }
    m.bg = function(a) {
        a = qA(this, "/users/request_password_change", {
            email: a
        });
        a["catch"](function(a) {
            var c = this.I.gettext("No email could be sent:");
            this.I.ha(c, a)
        }.bind(this));
        return a
    };
    m.rg = function(a, b) {
        var c = qA(this, "/users/validate_new_password/" + a, {
            password: b
        });
        c["catch"](function(a) {
            var b = this.I.gettext("Password could not be changed:");
            this.I.ha(b, a)
        }.bind(this));
        return c
    };
    m.Hf = function(a) {
        a = qA(this, "/users/login", a);
        a["catch"](function(a) {
            var c = this.I.gettext("Login failed:");
            this.I.ha(c, a)
        }.bind(this));
        return a
    };

    function CA(a, b) {
        qA(a, "/users/update_preferred_language", {
            lang: b
        })["catch"](function(a) {
            this.I.kb(a)
        }.bind(a))
    }

    function DA(a, b, c, d, e) {
        c = {
            pl: c
        };
        b && (c.token = b);
        d ? (b = "/profile-feed", c.u = d) : b = a.f.Aa() && e ? "/personal-feed" : "/feed";
        d = sA(a, b + "?" + $.param(c));
        d["catch"](function(a) {
            var b = this.I.gettext("Getting feed data failed:");
            this.I.ha(b, a)
        }.bind(a));
        return d
    }

    function EA(a, b, c) {
        var d = {};
        b && (d.token = b);
        c && (d.u = c);
        b = sA(a, "/documents/changes?" + $.param(d));
        b["catch"](function(a) {
            var b = this.I.gettext("Getting feed data failed:");
            this.I.ha(b, a)
        }.bind(a));
        return b
    }

    function lA(a) {
        var b = sA(a, "/users/account");
        b["catch"](function(a) {
            var b = this.I.gettext("Getting account data failed:");
            this.I.ha(b, a)
        }.bind(a));
        return b
    }

    function nA(a, b) {
        var c = qA(a, "/users/account", b);
        c["catch"](function(a) {
            var b = this.I.gettext("Updating account failed:");
            this.I.ha(b, a)
        }.bind(a));
        return c
    }

    function FA(a) {
        var b = sA(a, "/users/preferences");
        b["catch"](function(a) {
            var b = this.I.gettext("Getting preferences failed:");
            this.I.ha(b, a)
        }.bind(a));
        return b
    }

    function GA(a, b) {
        qA(a, "/users/preferences", b)["catch"](function(a) {
            var b = this.I.gettext("Updating preferences failed:");
            this.I.ha(b, a)
        }.bind(a))
    }

    function HA(a) {
        var b = sA(a, "/users/mailinglists");
        b["catch"](function(a) {
            var b = this.I.gettext("Getting mailing lists failed:");
            this.I.ha(b, a)
        }.bind(a));
        return b
    }

    function IA(a, b) {
        qA(a, "/users/mailinglists", b)["catch"](function(a) {
            var b = this.I.gettext("Updating mailing lists failed:");
            this.I.ha(b, a)
        }.bind(a))
    }

    function JA(a, b, c, d) {
        var e = new FormData;
        e.append("file", b);
        return a.b.post(a.g + "/upload", e, {
            headers: {
                "Content-Type": void 0
            },
            timeout: c,
            uploadEventHandlers: {
                progress: d
            }
        })
    }

    function KA(a, b, c) {
        var d = LA(c.type),
            e = {};
        e[d] = [{
            document_id: c.document_id
        }];
        for (var d = [], f = 0; f < b.length; f++) {
            var g = b[f],
                h = g.metadata;
            h.file_size = g.size;
            h.associations = e;
            h.locales = [{
                lang: c.lang,
                title: h.title
            }];
            d.push(h)
        }
        b = qA(a, "/images/list", {
            images: d
        });
        b["catch"](a.Rd.bind(a));
        b.images = d;
        return b
    }
    m.Xe = function(a, b) {
        return qA(this, "/forum/topics", {
            document_id: a,
            lang: b
        })["catch"](function(a) {
            this.Rd(a);
            return this.j.reject(a)
        }.bind(this))
    };

    function MA(a, b) {
        var c = qA(a, "/users/follow", {
            user_id: b
        });
        c["catch"](function(a) {
            var b = this.I.gettext("Following user failed:");
            this.I.ha(b, a)
        }.bind(a));
        return c
    }

    function NA(a, b) {
        var c = qA(a, "/users/unfollow", {
            user_id: b
        });
        c["catch"](function(a) {
            var b = this.I.gettext("Unfollowing user failed:");
            this.I.ha(b, a)
        }.bind(a));
        return c
    }

    function OA(a, b) {
        var c = sA(a, "/users/following-user/" + b);
        c["catch"](function(a) {
            var b = this.I.gettext("Checking if following user failed:");
            this.I.ha(b, a)
        }.bind(a));
        return c
    }

    function PA(a) {
        var b = sA(a, "/users/following");
        b["catch"](function(a) {
            var b = this.I.gettext("Getting followed list failed:");
            this.I.ha(b, a)
        }.bind(a));
        return b
    }

    function QA(a, b) {
        var c = sA(a, "/users/blocked/" + b);
        c["catch"](function(a) {
            var b = this.I.gettext("Checking if user is blocked failed:");
            this.I.ha(b, a)
        }.bind(a));
        return c
    }

    function RA(a, b) {
        var c = qA(a, "/users/block", {
            user_id: b
        });
        c["catch"](function(a) {
            var b = this.I.gettext("Blocking user failed:");
            this.I.ha(b, a)
        }.bind(a));
        return c
    }

    function SA(a, b) {
        var c = qA(a, "/users/unblock", {
            user_id: b
        });
        c["catch"](function(a) {
            var b = this.I.gettext("Unblocking user failed:");
            this.I.ha(b, a)
        }.bind(a));
        return c
    }

    function TA(a, b) {
        var c = qA(a, "/documents/protect", {
            document_id: b
        });
        c["catch"](function(a) {
            var b = this.I.gettext("Protecting document failed:");
            this.I.ha(b, a)
        }.bind(a));
        return c
    }

    function UA(a, b) {
        var c = qA(a, "/documents/unprotect", {
            document_id: b
        });
        c["catch"](function(a) {
            var b = this.I.gettext("Unprotecting document failed:");
            this.I.ha(b, a)
        }.bind(a));
        return c
    }
    m.Jf = function(a, b) {
        var c = qA(this, "/documents/merge", {
            source_document_id: a,
            target_document_id: b
        });
        c["catch"](function(a) {
            var b = this.I.gettext("Merging documents failed:");
            this.I.ha(b, a)
        }.bind(this));
        return c
    };
    m.Ze = function(a) {
        a = rA(this, "/documents/delete/" + String(a), {});
        a["catch"](function(a) {
            var c = this.I.gettext("Deleting document failed:");
            this.I.ha(c, a)
        }.bind(this));
        return a
    };
    m.$e = function(a, b) {
        var c = rA(this, "/documents/delete/" + String(a) + "/" + b, {});
        c["catch"](function(a) {
            var b = this.I.gettext("Deleting locale failed:");
            this.I.ha(b, a)
        }.bind(this));
        return c
    };

    function VA(a, b, c, d) {
        b = qA(a, "/documents/revert", {
            document_id: b,
            lang: c,
            version_id: d
        });
        b["catch"](function(a) {
            var b = this.I.gettext("Reverting document failed:");
            this.I.ha(b, a)
        }.bind(a));
        return b
    }
    Z.service("appApi", pA);

    function WA(a, b) {
        this.xe = b;
        this.document = {
            associations: {
                waypoints: [],
                waypoint_children: [],
                routes: [],
                all_routes: {
                    total: 0,
                    documents: []
                },
                users: [],
                recent_outings: {
                    total: 0,
                    documents: []
                },
                outings: [],
                articles: [],
                books: [],
                xreports: [],
                images: [],
                areas: []
            },
            locales: [{
                title: "",
                lang: ""
            }],
            type: "",
            activities: [],
            document_id: 0,
            quality: ""
        };
        this.b = {
            routes: [],
            waypoints: [],
            images: [],
            users: [],
            areas: [],
            articles: [],
            outings: [],
            books: [],
            xreports: []
        }
    }
    WA.$inject = ["appAuthentication", "$rootScope"];
    WA.prototype.fg = function(a) {
        for (var b in a) "associations" === b ? this.dg(a.associations) : this.document[b] = a[b]
    };
    WA.prototype.setDocument = WA.prototype.fg;
    WA.prototype.dg = function(a) {
        for (var b in a) b in this.document.associations && (this.document.associations[b] = a[b])
    };
    WA.prototype.setAssociations = WA.prototype.dg;
    WA.prototype.th = function(a, b) {
        if (!this.b[a].length && (this.b[a] = [], this.document.associations[a]))
            for (var c = 0; c < this.document.associations[a].length; c++) this.b[a].push(this.document.associations[a][c].document_id);
        return -1 < this.b[a].indexOf(b)
    };
    WA.prototype.hasAssociation = WA.prototype.th;
    WA.prototype.kd = function(a, b, c, d) {
        var e = this.document.associations;
        b = b || LA(a.type);
        c = "undefined" !== typeof c ? c : !1;
        a["new"] = !0;
        e[b].push(a);
        d && 1 === e.waypoints.length && (this.document.main_waypoint_id = a.document_id);
        c && "routes" === b && !this.document.locales[0].title && 1 === this.document.associations.routes.length && (b = "title_prefix" in a.locales[0] && a.locales[0].title_prefix ? a.locales[0].title_prefix + " : " : "", b += a.locales[0].title, this.document.locales[0].title = b)
    };
    WA.prototype.pushToAssociations = WA.prototype.kd;
    WA.prototype.ii = function(a, b, c, d) {
        var e = this.document.associations[b];
        c.currentTarget.closest(".list-item").className += " remove-item";
        setTimeout(function() {
            for (var c = 0; c < e.length; c++)
                if (e[c].document_id === a) {
                    e.splice(c, 1);
                    d && "waypoints" === b && 1 === e.length && (this.document.main_waypoint_id = e[0].document_id);
                    this.xe.$apply();
                    break
                }
        }.bind(this), 500)
    };
    WA.prototype.removeAssociation = WA.prototype.ii;
    WA.prototype.wh = function(a) {
        switch (a) {
            case "waypoints":
            case "routes":
            case "books":
                return !0;
            case "outings":
            case "users":
            case "xreports":
                return !1;
            case "images":
                return "collaborative" === this.document.image_type;
            case "articles":
                return "collab" === this.document.article_type;
            default:
                return !1
        }
    };
    WA.prototype.isCollaborative = WA.prototype.wh;
    Z.service("appDocument", WA);

    function LA(a) {
        switch (a) {
            case "w":
                return "waypoints";
            case "r":
                return "routes";
            case "o":
                return "outings";
            case "u":
                return "users";
            case "c":
                return "articles";
            case "i":
                return "images";
            case "a":
                return "areas";
            case "b":
                return "books";
            case "x":
                return "xreports";
            default:
                return ""
        }
    }

    function XA(a) {
        var b;
        $(window).on("scroll", function() {
            a.setActive(!1);
            b && clearInterval(b);
            b = setTimeout(function() {
                a.setActive(!0)
            }, 1E3)
        })
    }

    function YA(a, b, c, d) {
        d = $(d.currentTarget).find("input") || null;
        if ("boolean" === typeof c) return a[b] = c, d.prop("checked", !0), !0;
        a[b] || (a[b] = []);
        if (-1 === a[b].indexOf(c)) return a[b].push(c), d.prop("checked", !0), !0;
        a[b].splice(a[b].indexOf(c), 1);
        d.prop("checked", !1);
        return !1
    }
    t("app.utils.pushToArray", YA);

    function ZA(a) {
        $(a.target).hasClass("closed") && 0 === $(a.target).parent().find(".collapsing").length ? $(a.target).removeClass("closed") : $(a.target).addClass("closed");
        var b = $(a.target).find(".glyphicon-menu-down");
        a = $(a.target).find(".glyphicon-menu-right");
        0 < b.length ? b.toggleClass("rotate-arrow-up") : 0 < a.length && a.toggleClass("rotate-arrow-down")
    }
    t("app.utils.animateHeaderIcon", ZA);

    function $A(a) {
        var b = new FileReader;
        b.onload = function(b) {
            return a.src = b.target.result
        };
        b.readAsDataURL(a)
    }
    t("app.utils.getImageFileBase64Source", $A);

    function aB(a, b) {
        var c = bB(a.filename, "SI"),
            d = bB(a.filename, "BI");
        return '<figure id="' + a.image_id + '">' + ('<a href="' + b + d + '" data-info-id="' + a.image_id + '-slide" title="' + a.locales[0].title + '">') + ('<img src="' + b + c + '"></a>') + "<app-slide-info></app-slide-info></figure>"
    }
    t("app.utils.createImageSlide", aB);

    function cB(a, b, c) {
        b = $(c + b + "-slide");
        return '<div class="photoswipe-image-container"><img src="' + a + '">' + b.html() + "</div>"
    }
    t("app.utils.createPhotoswipeSlideHTML", cB);

    function bB(a, b) {
        if (a) {
            var c = a.lastIndexOf("."),
                d = a.slice(0, c),
                c = a.slice(c);
            return d + b + (b && ".svg" == c ? ".jpg" : c)
        }
    }
    t("app.utils.createImageUrl", bB);

    function dB(a) {
        return -1 < a.indexOf("topoguide") || -1 < a.indexOf("waypoints") || -1 < a.indexOf("routes") || -1 < a.indexOf("images") || -1 < a.indexOf("areas") || -1 < a.indexOf("books")
    }
    t("app.utils.isTopoguide", dB);

    function eB(a, b, c) {
        if (a.length > b) {
            for (var d = b; 0 < d && " " !== a[d] && "-" !== a[d];) d--;
            if (0 < d) return ("-" === a.substring(d, d + 1) ? a.substring(0, d + 1) : a.substring(0, d)) + c + eB(a.substring(d + 1), b, c)
        }
        return a
    }

    function fB(a) {
        for (var b = ["w", "r", "a", "u"], c = 0, d = b.length; c < d; c++)
            if (a.qb(b[c])) return !0;
        return !1
    }

    function mA(a) {
        var b = window.location,
            c = b.pathname + b.search + b.hash;
        "/auth" === b.pathname && (c = "/");
       // b.href = "{login}#to={current}".replace("{login}", a).replace("{current}", encodeURIComponent(c))
    }

    function gB(a, b, c, d) {
        a = Number(a) + Number(b) / 60 + parseFloat(c) / 3600;
        if ("S" === d || "W" === d) a *= -1;
        return a
    }

    function hB(a) {
        var b = $(a.boxBoundEl),
            c = $(a.menu).next();
        c.css("opacity", 0);
        setTimeout(function() {
            var d = b[0].getBoundingClientRect(),
                e = c[0].getBoundingClientRect();
            e.right > d.right && c.css("left", -Math.abs(e.right - d.right + 10));
            a.checkBottom && e.bottom > d.bottom && b.animate({
                scrollTop: b.height()
            }, "slow");
            c.css("opacity", 1)
        }, 50)
    }

    function iB(a) {
        return a.G() instanceof rl || a.G() instanceof tl
    }

    function jB(a, b) {
        return a ? b.some(function(b) {
            return -1 < $.inArray(b, a.activities)
        }) : !1
    };

    function kB(a) {
        a.defaults.modes.custom = {
            replacement: "-",
            symbols: !1,
            remove: null,
            lower: !0,
            charmap: angular.extend({
                "'": " "
            }, a.defaults.charmap),
            multicharmap: a.defaults.multicharmap
        };
        a.defaults.mode = "custom";
        this.b = a
    }
    kB.$inject = ["slug"];

    function lB(a, b, c, d) {
        var e;
        e = e || d.lang;
        if ("profiles" === b || "users" === b) return "/profiles/{id}/{lang}".replace("{id}", String(c)).replace("{lang}", e);
        var f = "";
        d && "routes" === b && d.title_prefix && (f = d.title_prefix + " ");
        f += d.title;
        return "/{type}/{id}/{lang}/{slug}".replace("{type}", b).replace("{id}", String(c)).replace("{lang}", e).replace("{slug}", a.b(f) || "-")
    }
    Z.service("appUrl", kB);
    Z.directive("appSimpleSearch", function() {
        return {
            restrict: "E",
            controller: "AppSimpleSearchController",
            bindToController: {
                selectHandler: "&appSelect",
                isStandardSearch: "<appSimpleSearchStandard",
                skipAssociationFilter: "<",
                ignoreDocumentId: "<",
                dataset: "@"
            },
            controllerAs: "searchCtrl",
            templateUrl: "/static/partials/simplesearch.html",
            link: function(a, b) {
                var c = mB.zd.Ad;
                $(".page-header").find("input").on("focus blur", function() {
                    $(this).typeahead("val", "")
                });
                $(window).resize(function() {
                    $(window).width() > c && ($(".show-search").removeClass("show-search"),
                        $(".logo.header, .menu-open-close.header").removeClass("no-opacity"))
                });
                b.on("click", function(a) {
                    $("app-simple-search .header").is(a.target) && $(a.target).siblings(".tt-suggestion").slideToggle();
                    window.innerWidth < c && $(".page-header .search-icon").is(a.target) && ($(".page-header").find(".quick-search").toggleClass("show-search"), $(".page-header").find(".search").focus(), $(".logo.header, .menu-open-close.header").toggleClass("no-opacity"))
                });
                $("main").click(function() {
                    window.innerWidth < c && ($(".show-search").removeClass("show-search"),
                        $(".logo.header, .menu-open-close.header").removeClass("no-opacity"))
                });
                b.on("typeahead:asyncrequest", function() {
                    b.find("input").addClass("loading-gif-typehead")
                });
                b.on("typeahead:asynccancel typeahead:asyncreceive", function() {
                    b.find("input").removeClass("loading-gif-typehead")
                })
            }
        }
    });

    function nB(a, b, c, d, e, f, g, h, k) {
        this.i = a;
        this.c = c;
        d.appSelect || (this.selectHandler = void 0);
        this.j = h;
        this.g = g;
        this.o = e;
        this.b = b;
        this.S = f;
        this.s = k;
        this.options = {
            highlight: !0,
            hint: !0,
            minLength: 3
        };
        this.datasets = [];
        for (a = 0; a < this.dataset.length; a++) switch (this.dataset[a]) {
            case "u":
                this.datasets.push(oB(this, "users"));
                break;
            case "o":
                this.datasets.push(oB(this, "outings"));
                break;
            case "w":
                this.datasets.push(oB(this, "waypoints"));
                break;
            case "r":
                this.datasets.push(oB(this, "routes"));
                break;
            case "a":
                this.datasets.push(oB(this,
                    "areas"));
                break;
            case "c":
                this.datasets.push(oB(this, "articles"));
                break;
            case "b":
                this.datasets.push(oB(this, "books"));
                break;
            case "x":
                this.datasets.push(oB(this, "xreports"));
                break;
            case "i":
                this.datasets.push(oB(this, "images"))
        }
        this.listeners = {
            select: pB.bind(this)
        };
        this.f = {}
    }
    nB.$inject = "appDocument $scope $compile $attrs apiUrl gettextCatalog $templateCache appAuthentication appUrl".split(" ");

    function oB(a, b) {
        var c = qB(a, b);
        return {
            contents: b,
            source: c.ttAdapter(),
            display: function(a) {
                if (a) return a.label
            },
            limit: 20,
            templates: {
                header: function() {
                    return '<div class="header" dataset="' + b + '">' + this.S.getString(b.charAt(0).toUpperCase() + b.substr(1)) + "</div>"
                }.bind(a),
                footer: function(a) {
                    return this.isStandardSearch ? (a = '<p class="suggestion-more"><a href="/' + b + "#q=" + encodeURI(a.query) + '" class="green-text" translate>' + this.S.getString("see more results") + "</a></p>", this.c(a)(this.b)) : 7 < this.f[b] ? (a =
                        this.g.get("/static/partials/suggestions/toomany.html"), this.c(a)(this.b)) : ""
                }.bind(a),
                suggestion: function(a) {
                    return a ? (this.b.doc = a, this.c('<app-suggestion class="tt-suggestion"></app-suggestion>')(this.b)) : '<div class="ng-hide"></div>'
                }.bind(a),
                empty: function() {
                    if (0 === $(".header.empty").length) {
                        var a = this.g.get("/static/partials/suggestions/" + (this.isStandardSearch ? "create" : "empty") + ".html");
                        return this.c(a)(this.b)
                    }
                }.bind(a)
            }
        }
    }

    function qB(a, b) {
        var c = a.o + "/search?q=%QUERY",
            c = new Bloodhound({
                limit: 7,
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace("label"),
                remote: {
                    url: c,
                    wildcard: "%QUERY",
                    rateLimitWait: 300,
                    prepare: function(a, b) {
                        this.f = {};
                        var c = b.url + "&pl=" + this.S.currentLanguage,
                            c = c + "&limit=7";
                        this.dataset && (-1 < this.dataset.indexOf("u") && this.j.Aa() && (b.headers = {
                            Authorization: 'JWT token="' + this.j.userData.token + '"'
                        }), c = c + "&t=" + this.dataset.split("").join(","));
                        b.url = c.replace("%QUERY",
                            encodeURIComponent(a));
                        return b
                    }.bind(a),
                    filter: function(a) {
                        if (a = a[b]) return this.f[b] = a.total, a = a.documents, a = a.map(function(a) {
                            if (void 0 !== this.ignoreDocumentId && this.ignoreDocumentId === a.document_id) return null;
                            var c;
                            c = a.locales[0];
                            var d = "";
                            "u" === a.type ? c = a.name : ("r" === a.type && c.title_prefix && (d = c.title_prefix + " : "), d += c.title, this.S.currentLanguage !== c.lang && (d += " (" + c.lang + ")"), c = d);
                            a.label = c;
                            a.documentType = b;
                            return this.isStandardSearch || this.skipAssociationFilter || !this.i.th(b, a.document_id) ?
                                a : null
                        }.bind(this)), a.filter(function(a) {
                            return null !== a
                        })
                    }.bind(a)
                }
            });
        c.initialize();
        return c
    }

    function pB(a, b) {
        this.selectHandler ? this.selectHandler({
            doc: b
        }) : window.location.href = lB(this.s, b.documentType, b.document_id, b.locales[0])
    }
    Z.controller("AppSimpleSearchController", nB);

    function rB(a) {
        return {
            restrict: "E",
            controller: "AppAddAssociationController",
            controllerAs: "addCtrl",
            bindToController: {
                parentId: "=",
                parentDoctype: "@"
            },
            link: function(b, c, d) {
                c.html('<app-simple-search app-select="addCtrl.associate(doc)" ignore-document-id="addCtrl.parentId" dataset="' + d.dataset + '"></app-simple-search>');
                a(c.contents())(b)
            }
        }
    }
    rB.$inject = ["$compile"];
    Z.directive("appAddAssociation", rB);

    function sB(a, b) {
        this.c = a;
        this.b = b
    }
    sB.$inject = ["appApi", "appDocument"];
    sB.prototype.Dj = function(a) {
        var b, c, d = this.parentDoctype;
        "routes" === d && "w" === a.type || "outings" === d && ("r" === a.type || "u" === a.type) || "images" === d || "articles" === d && ("w" === a.type || "o" === a.type || "r" === a.type || "b" === a.type) || "routes" === d && "b" === a.type || "waypoints" === d && "b" === a.type || "xreports" === d && ("r" === a.type || "o" === a.type || "w" === a.type) || "articles" === d && ("w" === a.type || "c" === a.type || "b" === a.type) ? (c = this.parentId, b = a.document_id) : (c = a.document_id, b = this.parentId);
        tA(this.c, b, c).then(function() {
            "waypoints" ===
            d && "w" === a.type ? this.b.kd(a, "waypoint_children") : this.b.kd(a)
        }.bind(this))
    };
    sB.prototype.associate = sB.prototype.Dj;
    Z.controller("AppAddAssociationController", sB);

    function tB(a) {
        return function(b) {
            return a.trustAsHtml(b)
        }
    }
    tB.$inject = ["$sce"];
    Z.filter("appTrustAsHtml", tB);
    Z.filter("capitalize", function() {
        return function(a) {
            return a.charAt(0).toUpperCase() + a.slice(1)
        }
    });
    Z.filter("coordinate", function() {
        return function(a) {
            return a ? (a = a.split("/"), Ab(yc([parseInt(a[0], 10), parseInt(a[1], 10)], "EPSG:3857", "EPSG:4326"))) : ""
        }
    });
    Z.directive("appAlerts", function() {
        return {
            restrict: "E",
            controller: "AppAlertsController",
            controllerAs: "alertsCtrl",
            bindToController: !0,
            templateUrl: "/static/partials/alerts.html"
        }
    });

    function uB(a) {
        this.alerts = a.get()
    }
    uB.$inject = ["appAlerts"];
    uB.prototype.close = function(a) {
        this.alerts.splice(a, 1);
        $(".loading").removeClass("loading")
    };
    uB.prototype.close = uB.prototype.close;
    Z.controller("AppAlertsController", uB);
    Z.directive("appAlert", function() {
        return {
            restrict: "E",
            controller: "AppAlertController",
            controllerAs: "alertCtrl",
            bindToController: !0,
            templateUrl: "/static/partials/alert.html",
            scope: {
                type: "@",
                close: "&",
                timeout: "@",
                msg: "@"
            },
            link: function() {
                $("body").click(function(a) {
                    0 < $(".alert").length && 0 === $(a.target).closest(".alert").length && ($(".loading").removeClass("loading"), $(".alert").hide())
                })
            }
        }
    });

    function vB(a) {
        if (this.timeout && this.close) {
            var b = parseInt(this.timeout, 10);
            b && a(function() {
                this.close()
            }.bind(this), b)
        }
    }
    t("app.AlertController", vB);
    vB.$inject = ["$timeout"];
    Z.controller("AppAlertController", vB);

    function wB(a, b) {
        this.c = a;
        this.userData = this.f = this.b = null;
        var c = window.sessionStorage.getItem("userData") || window.localStorage.getItem("userData");
        c && (this.userData = xB(c));
        window.addEventListener("storage", function(a) {
            "userData" === a.key && (this.userData = xB(a.newValue), b.$$phase || b.$apply())
        }.bind(this))
    }
    wB.prototype.Aa = function() {
        return !!this.userData && !yB(this)
    };
    wB.prototype.isAuthenticated = wB.prototype.Aa;
    wB.prototype.rb = function() {
        return this.userData ? -1 < this.userData.roles.indexOf("moderator") : !1
    };
    wB.prototype.isModerator = wB.prototype.rb;
    wB.prototype.dd = function(a, b) {
        return this.Aa() ? this.rb() ? !0 : "outings" === a ? -1 !== b.users.indexOf(this.userData.id) : "images" === a ? "collaborative" === b.imageType ? !0 : this.userData.id === b.imageCreator : "profiles" === a ? this.userData.id === b.user_id : "articles" === a ? "collab" === b.articleType ? !0 : this.userData.id === parseInt(b.authorId, 10) : "xreports" === a ? this.userData.id === parseInt(b.authorId, 10) ? !0 : -1 !== b.users.indexOf(this.userData.id) : !0 : !1
    };
    wB.prototype.hasEditRights = wB.prototype.dd;

    function zB(a, b) {
        try {
            var c = JSON.stringify(b);
            a.userData = xB(c);
            a.f.sd(a.userData.lang, !1);
            (b.remember ? window.localStorage : window.sessionStorage).setItem("userData", c)
        } catch (d) {}
    }
    wB.prototype.ue = function() {
        try {
            window.localStorage.removeItem("userData"), window.sessionStorage.removeItem("userData")
        } catch (a) {}
        this.userData = null
    };
    wB.prototype.removeUserData = wB.prototype.ue;

    function xB(a) {
        return a ? (a = JSON.parse(a), Object.freeze(a), Object.freeze(a.roles), a) : null
    }

    function yB(a) {
        var b = Date.now() / 1E3,
            c = a.userData.expire;
        if (b > c) return a.ue(), !0;
        b > c - 604800 && AB(a, b);
        return !1
    }

    function AB(a, b) {
        var c = window.localStorage,
            d = parseInt(c.getItem("last_renewal") || 0, 10);
        if (a.b && b > d + 15) {
            try {
                c.setItem("last_renewal", b.toString())
            } catch (e) {
                return
            }
            a.b.post(a.c + "/users/renew", {}).then(function(a) {
                zB(this, a.data)
            }.bind(a), function() {})
        }
    }
    wB.prototype.Gg = function(a, b) {
        var c = this.userData ? this.userData.token : null;
        return c && !yB(this) ? (b.Authorization = 'JWT token="' + c + '"', !0) : !1
    };
    wB.prototype.addAuthorizationToHeaders = wB.prototype.Gg;
    wB.prototype.Bh = function(a, b) {
        return -1 === b.indexOf(this.c) ? -1 === b.indexOf("/profiles/data") && -1 === b.indexOf("/xreports/data") || !this.Aa() ? !1 : !0 : -1 !== b.indexOf("/users/login") || -1 !== b.indexOf("/users/register") ? !1 : -1 !== b.indexOf("/users/account") || -1 !== b.indexOf("/users/preferences") || -1 !== b.indexOf("/users/mailinglists") || -1 !== b.indexOf("/users/following") || -1 !== b.indexOf("/users/block") || -1 !== b.indexOf("/users/unblock") || -1 !== b.indexOf("/profiles") || -1 !== b.indexOf("/personal-feed") || -1 !== b.indexOf("/xreports/") ||
            -1 !== b.indexOf("/profile-feed") && this.Aa() ? !0 : pt(["POST", "PUT", "DELETE"], a)
    };
    wB.prototype.needAuthorization = wB.prototype.Bh;

    function BB(a, b) {
        return new wB(a, b)
    }
    BB.$inject = ["apiUrl", "$rootScope"];
    Z.factory("appAuthentication", BB);

    function CB(a, b, c) {
        a.b = b;
        a.f = c
    }
    CB.$inject = ["appAuthentication", "$http", "appLang"];
    Z.run(CB);

    function DB(a, b, c, d, e, f, g, h, k) {
        this.b = a;
        this.S = b;
        this.s = c;
        this.c = d;
        this.f = e;
        this.o = k;
        this.j = f;
        this.g = g;
        this.i = h;
        this.sd(this.b.get("interface_lang") || this.s(this.c) || "fr")
    }
    DB.$inject = "$cookies gettextCatalog ngeoGetBrowserLanguage langs amMoment appApi appAuthentication langUrlTemplate langMomentPath".split(" ");
    DB.prototype.Ck = function() {
        return this.S.currentLanguage
    };
    DB.prototype.getLang = DB.prototype.Ck;
    DB.prototype.translate = function(a) {
        return this.S.getString(a)
    };
    DB.prototype.translate = DB.prototype.translate;
    DB.prototype.sd = function(a, b) {
        this.S.setCurrentLanguage(a);
        this.S.loadRemote(this.i.replace("__lang__", a));
        var c = new Date;
        c.setFullYear(c.getFullYear() + 1);
        this.b.put("interface_lang", a, {
            path: "/",
            expires: c
        });
        b && this.g.Aa() && CA(this.j, a);
        "en" === a && (a = "en-gb");
        $.get(this.o + "/" + a + ".js", function() {
            this.f.changeLocale(a)
        }.bind(this))
    };
    Z.service("appLang", DB);
    Z.directive("appAuth", function() {
        return {
            restrict: "A",
            scope: !0,
            controller: "appAuthController",
            controllerAs: "authCtrl",
            bindToController: !0
        }
    });

    function EB(a, b, c, d, e, f, g, h, k) {
        function l(a) {
            return d.Oa(a).replace(/[^0-9a-z_]/gi, "")
        }
        this.D = k;
        this.g = g;
        this.f = a;
        this.f.login = {
            remember: !0
        };
        this.c = b;
        this.i = c;
        this.b = d;
        this.I = e;
        this.s = h;
        this.uiStates = {
            showLoginForm: !0
        };
        this.b.qb("validate_register_email") ? (a = l("validate_register_email"), b = this.j.bind(this, !0), AA(this.c, a).then(b), this.uiStates = {}) : this.b.qb("validate_change_email") ? (a = l("validate_change_email"), BA(this.c, a).then(function() {
                this.o()
            }.bind(this)), this.uiStates = {}) : this.b.qb("change_password") &&
            (this.v = l("change_password"), this.uiStates = {
                showChangePasswordForm: !0
            })
    }
    EB.$inject = "$scope appApi appAuthentication ngeoLocation appAlerts gettextCatalog $q appLang vcRecaptchaService".split(" ");
    EB.prototype.Hf = function() {
        var a = this.f.login,
            b = !!a.remember;
        a.discourse = !0;
        this.b.Cf("sso") && (a.sso = this.b.Xd("sso"), a.sig = this.b.Xd("sig"));
        this.c.Hf(a).then(this.j.bind(this, b))
    };
    EB.prototype.login = EB.prototype.Hf;

    function FB(a, b) {
        var c = a.g.defer(),
            d = window.setTimeout(function() {
                c.reject()
            }, 1E4);
        $("<iframe>", {
            src: b,
            id: "discourse_auth_frame",
            style: "display: none",
            sandbox: "allow-same-origin"
        }).appendTo("body").on("load", function() {
            window.clearTimeout(d);
            c.resolve()
        });
        return c.promise
    }
    EB.prototype.o = function(a) {
        a || (a = (a = this.b.Oa("to")) ? decodeURIComponent(a) : "/", a = window.location.protocol + "//" + window.location.host + a);
        window.location.href = a
    };
    EB.prototype.j = function(a, b) {
        var c = b.data;
        c.remember = a;
        zB(this.i, c);
        var d = c.redirect_internal;
        (d ? FB(this, d) : this.g.when(!0))["finally"](this.o.bind(this, c.redirect))
    };
    EB.prototype.register = function() {
        var a = this.I,
            b = this.f.register;
        b.lang = this.s.S.currentLanguage;
        this.c.register(b).then(function() {
            var b = a.gettext("Thank you for your registration! We sent you an email, please click on the link to activate your account.");
            a.lb(b)
        }, function() {
            this.hi()
        }.bind(this))
    };
    EB.prototype.register = EB.prototype.register;
    EB.prototype.bg = function() {
        var a = this.I;
        this.c.bg(this.f.requestChangePassword.email).then(function() {
            var b = a.gettext("We sent you an email, please click on the link to reset password.");
            a.lb(b)
        })
    };
    EB.prototype.requestPasswordChange = EB.prototype.bg;
    EB.prototype.rg = function() {
        var a = this.j.bind(this, !0);
        this.c.rg(this.v, this.f.changePassword.password).then(a)
    };
    EB.prototype.validateNewPassword = EB.prototype.rg;
    EB.prototype.hi = function() {
        this.D.reload()
    };
    EB.prototype.reloadCaptcha = EB.prototype.hi;
    Z.controller("appAuthController", EB);

    function GB(a, b) {
        return {
            request: function(a) {
                b.Bh(a.method, a.url) && (a.headers = a.headers || {}, b.Gg(0, a.headers));
                return a
            }
        }
    }
    GB.$inject = ["apiUrl", "appAuthentication"];
    Z.factory("appHttpAuthenticationInterceptor", GB);

    function HB(a) {
        a.interceptors.push("appHttpAuthenticationInterceptor")
    }
    HB.$inject = ["$httpProvider"];
    Z.config(HB);
    Z.directive("appBlockAccount", function() {
        return {
            restrict: "A",
            controller: "appBlockAccountController",
            controllerAs: "blockCtrl",
            bindToController: {
                userId: "=appUserId"
            },
            templateUrl: "/static/partials/blockaccount.html"
        }
    });

    function IB(a, b) {
        this.b = b;
        this.c = a;
        this.accountBlocked = !1;
        this.c.rb() && QA(this.b, this.userId).then(function(a) {
            this.accountBlocked = a.data.blocked
        }.bind(this))
    }
    IB.$inject = ["appAuthentication", "appApi"];
    IB.prototype.block = function() {
        RA(this.b, this.userId).then(function() {
            this.accountBlocked = !0
        }.bind(this))
    };
    IB.prototype.block = IB.prototype.block;
    IB.prototype.Xo = function() {
        SA(this.b, this.userId).then(function() {
            this.accountBlocked = !1
        }.bind(this))
    };
    IB.prototype.unblock = IB.prototype.Xo;
    Z.controller("appBlockAccountController", IB);

    function JB(a, b) {
        function c(c) {
            if (void 0 !== d[c]) return d[c];
            var f = b.get("/static/partials/cards/" + c + ".html"),
                f = angular.element(f);
            d[c] = a(f);
            return d[c]
        }
        var d = {};
        return {
            restrict: "E",
            controller: "AppCardController",
            controllerAs: "cardCtrl",
            bindToController: !0,
            scope: {
                doc: "<appCardDoc"
            },
            link: function(a, b, d, h) {
                c(h.type)(a, function(a) {
                    b.append(a)
                })
            }
        }
    }
    JB.$inject = ["$compile", "$templateCache"];
    Z.directive("appCard", JB);

    function KB(a, b, c) {
        this.S = a;
        this.c = b;
        this.b = c;
        this.lang = a.currentLanguage;
        this.remainingActivities = !1;
        this.type = LA(this.doc.type);
        this.locale = this.doc.locales[0];
        a = 0;
        for (b = this.doc.locales.length; a < b; a++)
            if (c = this.doc.locales[a], c.lang === this.lang) {
                this.locale = c;
                break
            }
    }
    KB.$inject = ["gettextCatalog", "appUrl", "imageUrl"];
    KB.prototype.translate = function(a) {
        return this.S.getString(a)
    };
    KB.prototype.translate = KB.prototype.translate;
    KB.prototype.Ao = function(a) {
        if (a) {
            for (var b = {
                    range: [],
                    admin_limits: [],
                    country: []
                }, c, d = 0; d < a.length; d++) c = a[d].area_type, b[c].push(a[d].locales[0].title);
            for (var e in b)
                if (b[e].length) return b[e].join(" - ")
        }
        return null
    };
    KB.prototype.showArea = KB.prototype.Ao;
    KB.prototype.bk = function() {
        var a = window.location.pathname;
        if (-1 === a.indexOf("/edit/") && -1 === a.indexOf("/add")) return lB(this.c, this.type, this.doc.document_id, this.doc.locales[0])
    };
    KB.prototype.createURL = KB.prototype.bk;
    KB.prototype.Xj = function() {
        return this.b + bB(this.doc.filename, "MI")
    };
    KB.prototype.createImg = KB.prototype.Xj;
    KB.prototype.Ak = function() {
        var a = this.doc,
            b = {};
        a.activities.forEach(function(c) {
            "rock_climbing" === c || "mountain_climbing" === c || "snow_ice_mixed" === c ? b.global_rating = a.global_rating : "via_ferrata" === c ? b.via_ferrata_rating = a.via_ferrata_rating : "snowshoeing" === c ? b.snowshoe_rating = a.snowshoe_rating : "hiking" === c ? b.hiking_rating = a.hiking_rating : "ice_climbing" === c ? b.ice_rating = LB(a.ice_rating, a.engagement_rating) : "skitouring" === c ? (b.labande_global_rating = LB(a.ski_rating, a.ski_exposition), b.labande_global_rating +=
                a.labande_global_rating ? a.labande_global_rating : "") : "mountain_biking" === c && (b.biking_rating = LB(a.mtb_down_rating, a.hiking_mtb_exposition))
        }.bind(this));
        return b[Object.keys(b)[0]] ? b : null
    };
    KB.prototype.getGlobalRatings = KB.prototype.Ak;
    KB.prototype.zk = function() {
        var a = this.doc,
            b = {},
            c = {},
            d;
        for (d in a)
            if (a.hasOwnProperty(d) && -1 < d.indexOf("rating") && "rock_free_rating" !== d && "rock_required_rating" !== d && "ski_rating" !== d && "labande_global_rating" !== d && "labande_ski_rating" !== d) b[d] = a[d];
            else if ("hiking_mtb_exposition" === d) b.hiking_mtb_exposition = a.hiking_mtb_exposition;
        else if ("ski_rating" === d || "ski_exposition" === d) b.ski_rating = LB(a.ski_rating, a.ski_exposition);
        else if ("labande_global_rating" === d || "labande_ski_rating" === d) b.labande_rating =
            LB(a.labande_global_rating, a.labande_ski_rating);
        else if ("rock_required_rating" === d || "rock_free_rating" === d)
            if (b.rock_rating = a.rock_free_rating, a.rock_required_rating && a.rock_free_rating) {
                var e = ("P1" === a.equipment_rating || "P1+" === a.equipment_rating) && !a.aid_rating;
                b.rock_rating += ">" + a.rock_required_rating;
                b.rock_rating += e ? "[A0]" : ""
            }
        mB.uk.forEach(function(a) {
            a in b && b[a] && (c[a] = b[a])
        });
        return c[Object.keys(c)[0]] ? c : null
    };
    KB.prototype.getFullRatings = KB.prototype.zk;

    function LB(a, b) {
        return (a || "") + (a && b ? "/" : "") + (b || "")
    }
    KB.prototype.Bf = function(a) {
        return "routes" === this.type ? jB(this.doc, a) : !1
    };
    KB.prototype.hasActivity = KB.prototype.Bf;
    Z.controller("AppCardController", KB);
    Z.constant("constants", mB);
    var mB = {
        zd: {
            Ad: 768,
            Hp: 1099,
            vp: 1400
        },
        cj: {
            climbing_outdoor: 3,
            climbing_indoor: 3,
            hut: 3,
            gite: 3,
            shelter: 3,
            access: 3,
            camp_site: 3,
            local_product: 3,
            paragliding_takeoff: 3,
            paragliding_landing: 3,
            weather_station: 3,
            webcam: 3,
            slackline_spot: 3
        },
        $i: {
            waypoints: "title lang waypoint_type elevation longitude latitude url".split(" "),
            articles: ["title", "activities", "categories", "article_type"],
            books: ["title", "activities", "book_types"],
            routes: ["title", "lang", "activities", "waypoints"],
            outings: ["title", "lang", "date_start", "routes",
                "activities"
            ],
            images: ["image_type"],
            profiles: [],
            xreports: "title lang activities event_type longitude latitude".split(" "),
            areas: ["title", "area_type"]
        },
        fc: {
            Ke: "EPSG:4326",
            wd: "EPSG:3857"
        },
        uk: "global_rating rock_rating aid_rating ice_rating mixed_rating via_ferrata_rating engagement_rating risk_rating equipment_rating exposition_rock_rating ski_rating labande_rating hiking_rating snowshoe_rating mtb_up_rating mtb_down_rating hiking_mtb_exposition".split(" ")
    };

    function MB(a, b, c) {
        return {
            restrict: "A",
            link: function(d, e, f) {
                e.append(' <span class="glyphicon glyphicon-info-sign context-help-sign">');
                e.on("click", function() {
                    a.open({
                        controller: "AppContextHelpModalController",
                        controllerAs: "contextHelpModalCtrl",
                        templateUrl: "/static/partials/contexthelpmodal.html",
                        windowClass: "context-help-modal",
                        resolve: {
                            content: function() {
                                var a = f.contextHelpContentUrl;
                                return a ? (a = b.get(a), a = c(a)(d), angular.element("<div></div>").append(a).html()) : f.contextHelpContent
                            },
                            title: function() {
                                return f.contextHelpTitle
                            }
                        }
                    })
                })
            }
        }
    }
    MB.$inject = ["$uibModal", "$templateCache", "$compile"];
    Z.directive("appContextHelp", MB);

    function NB(a, b, c) {
        this.content = b;
        this.title = c;
        this.b = a
    }
    NB.$inject = ["$uibModalInstance", "content", "title"];
    NB.prototype.close = function() {
        this.b.close()
    };
    Z.controller("AppContextHelpModalController", NB);
    Z.directive("appCotometer", function() {
        return {
            restrict: "E",
            controller: "AppCotometerController",
            controllerAs: "cotmetCtrl",
            templateUrl: "/static/partials/cotometer.html",
            bindToController: {
                module: "<",
                lang: "@"
            }
        }
    });

    function OB(a, b) {
        this.S = a;
        this.b = b
    }
    OB.$inject = ["gettextCatalog", "$uibModalStack"];
    OB.prototype.Sj = function() {
        this.errorSlope = isNaN(this.slope) || 0 > this.slope || 80 < this.slope;
        this.errorElevation = isNaN(this.elevation) || 50 > this.elevation || 3E3 < this.elevation;
        if (this.errorSlope || this.errorElevation) return !1;
        var a = Math.tan(Math.PI * this.slope / 180) + .1 * Math.log(this.elevation),
            a = a + this.skiability * (a - 1),
            b = (1 + this.skiability) * this.elevation;
        this.rating = 17 >= this.slope && 400 > b ? "1.1" : 23 >= this.slope && 650 > b ? "1.2" : 30 > this.slope && 800 > b ? "1.3" : 35 > this.slope && 800 > b || 23 > this.slope && 800 < b ? "2.1" : 35 > this.slope &&
            950 >= b ? "2.2" : 35 > this.slope && 950 < b ? "2.3" : 35 <= this.slope && 40 >= this.slope && 650 > b ? "3.1" : 35 <= this.slope && 40 >= this.slope && 900 >= b ? "3.2" : 35 <= this.slope && 40 >= this.slope && 900 < b ? "3.3" : .98 > a ? "1.1" : .98 <= a && 1.02 > a ? "1.2" : 1.03 <= a && 1.09 > a ? "+1.3" : 1.09 <= a && 1.18 > a ? "+2.1" : 1.18 <= a && 1.24 > a ? "2.2" : 1.24 <= a && 1.3 > a ? "2.3" : 1.3 <= a && 1.34 > a ? "3.1" : 1.34 <= a && 1.39 > a ? "3.2" : 1.39 <= a && 1.42 > a ? "3.3" : 1.42 <= a && 1.46 > a ? "4.1" : 1.46 <= a && 1.52 > a ? "4.2" : 1.52 <= a && 1.575 > a ? "4.3" : 1.575 <= a && 1.67 > a ? "5.1" : 1.67 <= a && 1.745 > a ? "5.2" : 1.745 <= a && 1.81 > a ? "5.3" : 1.81 <=
            a && 1.95 > a ? "5.4" : 1.95 <= a && 2.09 > a ? "5.5" : 2.09 <= a && 2.25 > a ? "5.6" : 2.25 <= a && 2.4 > a ? "5.7" : "5.8"
    };
    OB.prototype.cotometerTechnicalGrade = OB.prototype.Sj;
    OB.prototype.yo = function() {
        this.b.dismissAll()
    };
    OB.prototype.setResult = OB.prototype.yo;
    OB.prototype.Tb = function() {
        this.b.dismissAll()
    };
    OB.prototype.closeDialog = OB.prototype.Tb;
    Z.controller("AppCotometerController", OB);
    Z.directive("appDeleteAssociation", function() {
        return {
            restrict: "E",
            controller: "AppDeleteAssociationController",
            controllerAs: "unassociateCtrl",
            bindToController: {
                parentId: "=",
                childId: "=",
                childDoctype: "@"
            },
            link: function(a, b, c, d) {
                $(b).on("click", function(a) {
                    PB(d).result.then(function(b) {
                        b && QB(d, a)
                    })
                })
            },
            template: '<span class="glyphicon glyphicon-trash"></span>'
        }
    });

    function RB(a, b, c, d, e, f) {
        this.c = c;
        this.g = b;
        this.j = d;
        this.b = e;
        this.f = f
    }
    RB.$inject = "$rootScope $scope $compile $uibModal appApi appDocument".split(" ");

    function PB(a) {
        var b = $("#delete-association-modal").clone();
        return a.j.open({
            animation: !0,
            size: "sm",
            template: a.c(b)(a.g),
            controller: "AppDeleteAssociationModalController",
            controllerAs: "delModalCtrl"
        })
    }

    function QB(a, b) {
        uA(a.b, a.parentId, a.childId).then(function() {
            this.f.ii(this.childId, this.childDoctype, b)
        }.bind(a))
    }
    Z.controller("AppDeleteAssociationController", RB);

    function SB(a) {
        this.b = a
    }
    SB.$inject = ["$uibModalInstance"];
    SB.prototype.close = function(a) {
        this.b.close(a)
    };
    SB.prototype.close = SB.prototype.close;
    SB.prototype.dismiss = function() {
        this.b.close()
    };
    SB.prototype.dismiss = SB.prototype.dismiss;
    Z.controller("AppDeleteAssociationModalController", SB);
    Z.directive("appDeleteDocument", function() {
        return {
            restrict: "E",
            controller: "AppDeleteDocumentController",
            controllerAs: "deldocCtrl",
            templateUrl: "/static/partials/deletedocument.html",
            bindToController: {
                module: "<",
                lang: "@"
            }
        }
    });

    function TB(a, b, c, d, e) {
        this.documentData = a;
        this.c = b;
        this.b = c;
        this.S = d;
        this.f = e
    }
    TB.$inject = ["documentData", "appApi", "appAlerts", "gettextCatalog", "$uibModalStack"];
    TB.prototype.Ze = function() {
        this.c.Ze(this.documentData.document_id).then(function() {
            this.Tb();
            this.b.lb(this.S.getString("Document successfully deleted"))
        }.bind(this))
    };
    TB.prototype.deleteDocument = TB.prototype.Ze;
    TB.prototype.$e = function() {
        this.c.$e(this.documentData.document_id, this.lang).then(function() {
            this.Tb();
            this.b.lb(this.S.getString("Locale successfully deleted"))
        }.bind(this))
    };
    TB.prototype.deleteLocale = TB.prototype.$e;
    TB.prototype.Tb = function() {
        this.f.dismissAll()
    };
    TB.prototype.closeDialog = TB.prototype.Tb;
    Z.controller("AppDeleteDocumentController", TB);
    Z.directive("appDoctypeSelector", function() {
        return {
            restrict: "E",
            bindToController: {
                defaultType: "@appDoctype"
            },
            controller: "appDoctypeSelectorController",
            controllerAs: "doctypeCtrl",
            templateUrl: "/static/partials/doctypeselector.html"
        }
    });

    function UB(a) {
        this.c = a;
        this.doctypes = [{
            id: "routes",
            name: "Routes"
        }, {
            id: "waypoints",
            name: "Waypoints"
        }, {
            id: "outings",
            name: "Outings"
        }, {
            id: "images",
            name: "Images"
        }, {
            id: "books",
            name: "Books"
        }, {
            id: "areas",
            name: "Areas"
        }];
        this.doctypes.forEach(function(a) {
            a.id === this.defaultType && (this.selected = a)
        }.bind(this));
        this.b = []
    }
    UB.$inject = ["ngeoLocation"];
    UB.prototype.redirect = function() {
        switch (this.selected.id) {
            case "outings":
            case "routes":
            case "images":
                VB(this);
                WB(this);
                XB(this);
                break;
            case "waypoints":
                VB(this);
                WB(this);
                break;
            case "books":
                XB(this)
        }
        var a = "/" + this.selected.id;
        this.b.length && (a += "#" + this.b.join("&"));
        window.location = a
    };
    UB.prototype.redirect = UB.prototype.redirect;

    function VB(a) {
        var b = a.c.Oa("bbox");
        b && a.b.push("bbox=" + b)
    }

    function WB(a) {
        var b = a.c.Oa("a");
        b && a.b.push("a=" + b)
    }

    function XB(a) {
        var b = a.c.Oa("act");
        b && a.b.push("act=" + b)
    }
    Z.controller("appDoctypeSelectorController", UB);
    Z.directive("appDocumentEditing", function() {
        return {
            restrict: "A",
            scope: !0,
            controller: "@",
            name: "appDocumentEditingControllerName",
            controllerAs: "editCtrl",
            bindToController: !0
        }
    });

    function YB(a, b, c, d, e, f, g, h, k, l, n, q, p, r) {
        this.documentService = p;
        this.O = q;
        this.auth = h;
        this.c = c.appDocumentEditing;
        this.b = c.appDocumentEditingModel;
        this.id = c.appDocumentEditingId;
        this.j = c.appDocumentEditingLang;
        this.scope = a;
        this.f = new Rl;
        this.F = this.o = !1;
        this.alerts = l;
        this.s = n;
        this.C = r;
        this.V = d;
        this.v = e;
        this.compile = f;
        this.scope[this.b] = this.documentService.document;
        this.auth.Aa() ? (this.id && this.j ? xA(this.s, this.c, this.id, this.j, !0).then(this.D.bind(this)) : this.id || (this.scope[this.b].locales[0].lang =
            g.S.currentLanguage), this.scope.$root.$on("mapFeaturesChange", function(a, b) {
            var c = this.scope[this.b];
            c.geometry = c.geometry || {};
            if (0 == b.length) c.geometry.geom = null, c.geometry.geom_detail = null, ZB(this) && (c.lonlat = null);
            else {
                var d = b[0].G();
                if (d instanceof Qc) c.geometry.geom = this.f.writeGeometry(d), d = $B(d.clone()), c.lonlat = {
                    longitude: d[0],
                    latitude: d[1]
                }, this.scope.$apply();
                else {
                    var e;
                    d instanceof rl ? e = sl(d) : d instanceof tl ? (console.assert(0 < d.f.length, "index should be in between 0 and length of the this.ends_ array"),
                        0 >= d.f.length ? e = null : (e = new rl(null), e.U(d.layout, d.B.slice(0, d.f[0]))), e = sl(e)) : e = Wb(d.K());
                    e = new Qc(e);
                    c.geometry.geom = this.f.writeGeometry(e);
                    c.geometry.geom_detail = this.f.writeGeometry(d)
                }
            }
            this.o = !0
        }.bind(this)), this.scope.$root.$on("mapFeaturesReset", function(a, b) {
            var c = this.scope[this.b];
            c.geometry = b;
            this.o = !1;
            aC(this, c);
            this.scope.$root.$emit("documentDataChange", c)
        }.bind(this))) : mA(this.O)
    }
    YB.$inject = "$scope $element $attrs $http $uibModal $compile appLang appAuthentication ngeoLocation appAlerts appApi authUrl appDocument appUrl imageUrl".split(" ");
    YB.prototype.g = function(a) {
        return a
    };
    YB.prototype.D = function(a) {
        a = a.data;
        this.documentService.dg(a.associations);
        a = this.g(a);
        aC(this, a);
        a.locales.length || (a.locales.push({
            lang: this.j
        }), this.F = !0);
        this.scope[this.b] = this.scope.document = this.documentService.document = a;
        this.scope.$root.$emit("documentDataChange", a)
    };

    function aC(a, b) {
        if ("geometry" in b && b.geometry) {
            var c = b.geometry;
            ZB(a) && !("geom_detail" in c && c.geom_detail) && "geom" in c && c.geom && (c = a.f.readGeometry(c.geom), c = $B(c), b.lonlat = {
                longitude: c[0],
                latitude: c[1]
            }, b.read_lonlat = angular.copy(b.lonlat))
        }
    }

    function ZB(a) {
        return -1 === $.inArray(a.b, ["outing", "route", "area"])
    }
    YB.prototype.wi = function(a) {
        if (a)
            //if (this.auth.Aa()) {
            if(true) {
                var b = angular.copy(this.scope[this.b]);
                da(b.locales) || (b.locales = [b.locales[0]]);
                if ("lonlat" in b && b.lonlat) {
                    a = b.lonlat;
                    if ("longitude" in a && "latitude" in a) {
                        var c = new Qc([a.longitude, a.latitude]);
                        c.transform(mB.fc.Ke, mB.fc.wd);
                        b.geometry = b.geometry || {};
                        var d = !0;
                        b.read_lonlat && (d = b.read_lonlat.longitude !== a.longitude || b.read_lonlat.latitude !== a.latitude);
                        d ? b.geometry.geom = this.f.writeGeometry(c) : delete b.geometry
                    }
                    delete b.lonlat;
                    delete b.read_lonlat
                }
                    
                /*
                this.id ?
                    (this.o || delete b.geometry, "available_langs" in b && delete b.available_langs, a = "", "message" in b && (a = b.message, delete b.message), b = this.i(b), b = {
                        message: a,
                        document: b
                    }, yA(this.s, this.c, this.id, b).then(function() {alert("call back 1");
                        window.location.href = lB(this.C, this.c, this.id, this.documentService.document.locales[0])
                    }.bind(this))) : (this.j = b.locales[0].lang, b = this.i(b), wA(this.s, this.c, b).then(function(a) {
                        this.id = a.data.document_id;
                        window.location.href = lB(this.C, this.c, this.id, b.locales[0])
                    alert("call back 2");
                    }.bind(this)))
                */
                console.log(b);
                console.log(jQuery);
                jQuery.post("http://127.0.0.1", b, function(data) { console.log("test");  console.log(data); })
                alert("on poste");
            } else this.alerts.kb("You must log in to edit this document.");
        else this.alerts.kb("Form is not valid")
    };
    YB.prototype.submitForm = YB.prototype.wi;
    YB.prototype.i = function(a) {
        return a
    };
    YB.prototype.cancel = function(a, b) {
        window.location.href = !a || this.F ? b : a
    };
    YB.prototype.cancel = YB.prototype.cancel;
    YB.prototype.cp = function() {
        var a = this.scope[this.b];
        if ("lonlat" in a && a.lonlat) {
            var b = a.lonlat;
            "longitude" in b && "latitude" in b && (b = new Qc([b.longitude, b.latitude]), b.transform(mB.fc.Ke, mB.fc.wd), a.geometry = a.geometry || {}, a.geometry.geom = this.f.writeGeometry(b), this.o = !0, this.scope.$root.$emit("documentDataChange", a))
        }
    };
    YB.prototype.updateMap = YB.prototype.cp;

    function $B(a) {
        a.transform(mB.fc.wd, mB.fc.Ke);
        a = a.M();
        return ot(a, function(a) {
            return Math.round(1E6 * a) / 1E6
        })
    }
    YB.prototype.Ll = function(a, b) {
        var c = a.type ? LA(a.type) : this.c,
            c = mB.$i[c] || null;
        if (!c) return !1;
        for (var d = {
                data: {
                    errors: []
                }
            }, e, f, g = 0; g < c.length; g++) {
            f = c[g];
            e = !1;
            if ("title" === f || "lang" === f) e = !a.locales || !a.locales[0][f];
            else if ("activities" === f) e = !a.activities || 0 === a.activities.length;
            else if ("routes" === f || "waypoints" === f) e = !a.associations || 0 === a.associations[f].length;
            else if ("latitude" === f || "longitude" === f) e = !a.lonlat || null === a.lonlat[f] || void 0 === a.lonlat[f];
            else if ("date_start" === f) e = null === a.date_start ||
                void 0 === a.date_start;
            else if ("elevation" === f && "climbing_indoor" === a.waypoint_type) continue;
            else if ("url" === f)
                if ("weather_station" === a.waypoint_type || "webcam" === a.waypoint_type) e = !a.url;
                else continue;
            else e = !a[f] || null === a[f] || void 0 === a[f];
            if (e)
                if (b) {
                    if ("routes" === f || "waypoints" === f) f = "no associated " + f;
                    d.data.errors.push({
                        description: "Missing field",
                        name: f
                    })
                } else return !0
        }
        0 < d.data.errors.length && this.alerts.kb(d);
        return e
    };
    YB.prototype.hasMissingProps = YB.prototype.Ll;
    YB.prototype.Mn = function(a, b, c, d) {
        YA(a, b, c, d)
    };
    YB.prototype.pushToArray = YB.prototype.Mn;
    YB.prototype.ng = function(a, b, c) {
        YA(b, "orientations", a, c)
    };
    YB.prototype.toggleOrientation = YB.prototype.ng;
    YB.prototype.Gn = function() {
        var a = "/" + this.c + "/preview",
            b = angular.copy(this.scope[this.b]),
            b = {
                document: this.i(b)
            };
        this.V.post(a, b, {
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                Accept: "application/json"
            }
        })["catch"](function() {
            this.alerts.kb("A server error prevented creating the preview")
        }.bind(this)).then(function(a) {
            var b = angular.element("#preview-container").clone();
            b.find("#preview-container-content").append(a.data);
            this.v.open({
                animation: !0,
                template: this.compile(b)(this.scope),
                controller: "appPreviewModalController",
                controllerAs: "previewModalCtrl",
                size: "xl"
            })
        }.bind(this))
    };
    YB.prototype.preview = YB.prototype.Gn;
    YB.prototype.Pj = function(a) {
        var b = angular.element("#save-confirmation-modal").clone();
        this.v.open({
            animation: !0,
            template: this.compile(b)(this.scope),
            controller: "appConfirmSaveModalController as saveCtrl"
        }).result.then(function(b) {
            b && (this.scope[this.b].message = b.message, this.scope[this.b].quality = b.quality, this.wi(a))
        }.bind(this))
    };
    YB.prototype.confirmSave = YB.prototype.Pj;
    Z.controller("appDocumentEditingController", YB);

    function bC(a, b, c) {
        this.langService = c;
        this.b = a;
        this.message = b.document.message;
        this.quality = b.document.quality
    }
    bC.$inject = ["$uibModalInstance", "appDocument", "appLang"];
    bC.prototype.close = function(a) {
        this.b.close(a)
    };
    bC.prototype.close = bC.prototype.close;
    Z.controller("appConfirmSaveModalController", bC);

    function cC(a) {
        this.b = a
    }
    cC.$inject = ["$uibModalInstance"];
    cC.prototype.close = function() {
        this.b.close()
    };
    cC.prototype.close = cC.prototype.close;
    Z.controller("appPreviewModalController", cC);

    function dC(a, b, c, d, e, f, g, h, k, l, n, q, p, r) {
        YB.call(this, a, 0, c, d, e, f, g, h, 0, l, n, q, p, r);
        this.initialArticleType = null
    }
    sa(dC, YB);
    dC.$inject = "$scope $element $attrs $http $uibModal $compile appLang appAuthentication ngeoLocation appAlerts appApi authUrl appDocument appUrl imageUrl".split(" ");
    dC.prototype.g = function(a) {
        this.initialArticleType = a.article_type;
        return a
    };
    Z.controller("appArticleEditingController", dC);

    function eC(a, b, c, d, e, f, g, h, k, l, n, q, p, r, u) {
        YB.call(this, a, 0, c, d, e, f, g, h, 0, l, n, q, p, r);
        this.today = new Date;
        this.ga = u;
        this.exposureError = !1;
        this.initialImageType = null
    }
    sa(eC, YB);
    eC.$inject = "$scope $element $attrs $http $uibModal $compile appLang appAuthentication ngeoLocation appAlerts appApi authUrl appDocument appUrl imageUrl".split(" ");
    eC.prototype.g = function(a) {
        a.date_time = new Date(a.date_time);
        this.initialImageType = a.image_type;
        return a
    };
    eC.prototype.Qj = function(a) {
        var b;
        0 === a ? (this.exposureError = !0, this.scope.image.exposure_time_converted = "") : (1 > a && a ? b = "1/" + Math.round(1 / a) + " s" : 1 <= a ? b = a + " s" : a || (b = ""), this.exposureError = !1, this.scope.image.exposure_time_converted = b)
    };
    eC.prototype.convertExposureTime = eC.prototype.Qj;
    eC.prototype.Yj = function(a) {
        return this.ga + bB(a, "BI")
    };
    eC.prototype.createImgUrl = eC.prototype.Yj;
    eC.prototype.hf = function(a) {
        return a.filter(function(a) {
            return "copyright" !== a
        })
    };
    eC.prototype.filterImageTypes = eC.prototype.hf;
    Z.controller("appImageEditingController", eC);

    function fC(a, b, c, d, e, f, g, h, k, l, n, q, p, r) {
        YB.call(this, a, 0, c, d, e, f, g, h, 0, l, n, q, p, r);
        this.dateMaxStart = new Date;
        this.today = new Date;
        this.dateMaxEnd = new Date;
        this.auth.Aa() && (k.qb("r") && (a = parseInt(k.Oa("r"), 10), n.pf(a, "r", g.S.currentLanguage).then(function(a) {
            this.documentService.kd(a.data.routes.documents[0], "routes", !0)
        }.bind(this))), this.scope[this.b].associations.users.push({
            document_id: this.auth.userData.id,
            name: this.auth.userData.name
        }), this.id || gC(this))
    }
    sa(fC, YB);
    fC.$inject = "$scope $element $attrs $http $uibModal $compile appLang appAuthentication ngeoLocation appAlerts appApi authUrl appDocument appUrl imageUrl".split(" ");
    fC.prototype.D = function(a) {
        fC.hb.D.call(this, a);
        a = this.scope[this.b];
        var b = [];
        a.associations.users.forEach(function(a) {
            b.push(a.document_id)
        });
        this.auth.dd("outings", {
            users: b
        }) ? (a = hC(this, a), (this.differentDates = 0 !== window.moment(a.date_start).diff(a.date_end)) || (a.date_end = void 0), a.length_total /= 1E3) : (this.alerts.kb("You have no rights to edit this document."), setTimeout(function() {
            window.location = window.location.href.replace("/edit", "")
        }, 3E3))
    };
    fC.prototype.i = function(a) {
        hC(this, a, !0);
        a.length_total *= 1E3;
        return a
    };

    function hC(a, b, c) {
        c ? ("string" !== typeof b.locales[0].conditions_levels && (b.locales[0].conditions_levels = JSON.stringify(b.locales[0].conditions_levels)), b.date_start instanceof Date && (b.date_start = window.moment(b.date_start).format("YYYY-MM-DD")), !b.date_end && b.date_start ? b.date_end = b.date_start : b.date_end instanceof Date && (b.date_end = window.moment(b.date_end).format("YYYY-MM-DD")), b.avalanche_signs && null === b.avalanche_signs[0] && (1 === b.avalanche_signs.length ? delete b.avalanche_signs : b.avalanche_signs.splice(0,
            1))) : (b.date_end && "string" === typeof b.date_end && (b.date_end = window.moment(b.date_end).toDate()), b.date_start && "string" === typeof b.date_start && (b.date_start = window.moment(b.date_start).toDate()), b.date_start.toDateString() === b.date_end.toDateString() ? a.dateMaxStart = new Date : (a.dateMinEnd = b.date_start, a.dateMaxStart = b.date_end), (c = b.locales[0].conditions_levels) && "string" === typeof c ? (c = JSON.parse(c), a.scope[a.b].locales[0].conditions_levels = c) : gC(a));
        return b
    }

    function gC(a) {
        a.scope.outing.locales[0].conditions_levels = [{
            level_snow_height_soft: "",
            level_snow_height_total: "",
            level_comment: "",
            level_place: ""
        }]
    }
    Z.controller("appOutingEditingController", fC);
    Z.directive("appLengthConverter", function() {
        return {
            require: "ngModel",
            link: function(a, b, c, d) {
                d.$parsers.push(function(a) {
                    return 1E3 * a
                });
                d.$formatters.push(function(a) {
                    return a / 1E3
                })
            }
        }
    });

    function iC(a, b, c, d, e, f, g, h, k, l, n, q, p, r) {
        YB.call(this, a, 0, c, d, e, f, g, h, 0, l, n, q, p, r);
        this.auth.Aa() && k.qb("w") && (a = parseInt(k.Oa("w"), 10), n.pf(a, "w", g.S.currentLanguage).then(function(a) {
            this.documentService.kd(a.data.waypoints.documents[0], "waypoints", !1, !0)
        }.bind(this)))
    }
    sa(iC, YB);
    iC.$inject = "$scope $element $attrs $http $uibModal $compile appLang appAuthentication ngeoLocation appAlerts appApi authUrl appDocument appUrl imageUrl".split(" ");
    iC.prototype.Bf = function(a) {
        return jB(this.scope.route, a)
    };
    iC.prototype.hasActivity = iC.prototype.Bf;
    iC.prototype.jd = function(a, b) {
        var c = $(a).clone();
        null === b && (b = "lg");
        this.v.open({
            animation: !0,
            size: b,
            template: this.compile(c)(this.scope)
        })
    };
    iC.prototype.openModal = iC.prototype.jd;
    iC.prototype.Co = function() {
        var a = this.scope.route.activities;
        return 0 === a.length ? !1 : 1 < a.length ? !0 : "slacklining" !== a[0]
    };
    iC.prototype.showRatings = iC.prototype.Co;
    Z.controller("appRouteEditingController", iC);

    function jC(a, b, c, d, e, f, g, h, k, l, n, q, p, r) {
        YB.call(this, a, 0, c, d, e, f, g, h, 0, l, n, q, p, r);
        this.dateMaxStart = new Date;
        this.today = new Date;
        this.auth.Aa() && this.scope[this.b].associations.users.push({
            document_id: this.auth.userData.id,
            name: this.auth.userData.name,
            locales: [{
                lang: this.auth.userData.lang
            }]
        })
    }
    sa(jC, YB);
    jC.$inject = "$scope $element $attrs $http $uibModal $compile appLang appAuthentication ngeoLocation appAlerts appApi authUrl appDocument appUrl imageUrl".split(" ");
    jC.prototype.g = function(a) {
        a.date = new Date(a.date);
        return a
    };
    Z.controller("appXreportEditingController", jC);
    Z.directive("appFeed", function() {
        return {
            restrict: "E",
            controller: "appFeedController as feedCtrl",
            bindToController: {
                userId: "=appFeedProfile"
            },
            templateUrl: "/static/partials/feed.html"
        }
    });

    function kC(a, b, c, d, e) {
        this.c = b;
        this.g = c;
        this.j = d;
        this.documents = [];
        this.busy = !0;
        this.feedEnd = this.noFeed = this.end = this.error = !1;
        this.isPersonal = !this.userId;
        this.f = e;
        this.Zc()
    }
    kC.$inject = ["appAuthentication", "appApi", "appLang", "imageUrl", "ngeoLocation"];
    kC.prototype.Zc = function() {
        this.busy = !0;
        DA(this.c, this.b, this.g.S.currentLanguage, this.userId, this.isPersonal).then(function(a) {
            lC(this, a)
        }.bind(this), function() {
            this.busy = !1;
            this.error = !0
        }.bind(this))
    };
    kC.prototype.getDocumentsFromFeed = kC.prototype.Zc;

    function lC(a, b) {
        a.error = !1;
        a.busy = !1;
        var c = b.data.feed,
            d = b.data.pagination_token;
        a.b = d;
        for (var e = 0; e < c.length; e++) a.documents.push(c[e]);
        d && 0 === c.length || !d && 0 < a.documents.length ? a.feedEnd = !0 : 0 === c.length && (a.noFeed = !0)
    }
    kC.prototype.Tj = function(a) {
        var b = "";
        switch (a.change_type) {
            case "created":
                b += "has created a new ";
                break;
            case "updated":
                b += "has updated the ";
                break;
            case "added_photos":
                b += "has added images to "
        }
        return b + this.hh(a.document.type)
    };
    kC.prototype.createActionLine = kC.prototype.Tj;
    kC.prototype.Oo = function() {
        this.isPersonal = !this.isPersonal;
        this.b = void 0;
        this.documents = [];
        this.Zc();
        window.scrollTo(0, 0)
    };
    kC.prototype.toggleFilters = kC.prototype.Oo;
    kC.prototype.Wj = function(a, b) {
        return this.j + bB(a, b)
    };
    kC.prototype.createImageUrl = kC.prototype.Wj;
    kC.prototype.hh = function(a) {
        return LA(a).slice(0, -1)
    };
    kC.prototype.getDocumentType = kC.prototype.hh;
    Z.controller("appFeedController", kC);
    Z.directive("appFollow", function() {
        return {
            restrict: "E",
            controller: "appFollowController",
            controllerAs: "followCtrl",
            bindToController: {
                docId: "=appFollowId"
            },
            templateUrl: "/static/partials/follow.html"
        }
    });

    function mC(a, b) {
        this.b = b;
        this.c = a;
        this.followed = !1;
        this.Mg() && OA(this.b, this.docId).then(function(a) {
            this.followed = a.data.is_following
        }.bind(this))
    }
    mC.$inject = ["appAuthentication", "appApi"];
    mC.prototype.Mg = function() {
        return this.c.Aa() && this.c.userData.id !== this.docId
    };
    mC.prototype.canFollow = mC.prototype.Mg;
    mC.prototype.toggle = function() {
        this.followed ? NA(this.b, this.docId).then(function() {
            this.followed = !1
        }.bind(this)) : MA(this.b, this.docId).then(function() {
            this.followed = !0
        }.bind(this))
    };
    mC.prototype.toggle = mC.prototype.toggle;
    Z.controller("appFollowController", mC);
    Z.directive("appFollowing", function() {
        return {
            restrict: "A",
            controller: "appFollowingController",
            controllerAs: "flCtrl"
        }
    });

    function nC(a, b, c) {
        this.c = b;
        this.f = a;
        this.following = null;
        this.followingIds = [];
        this.b = [];
        this.f.Aa() ? PA(this.c).then(function(a) {
            this.following = a.data.following;
            this.followingIds = this.following.map(function(a) {
                return a.document_id
            })
        }.bind(this)) : mA(c)
    }
    nC.$inject = ["appAuthentication", "appApi", "authUrl"];
    nC.prototype.toggle = function(a) {
        var b = this.followingIds.indexOf(a); - 1 < b ? NA(this.c, a).then(function() {
            this.followingIds.splice(b, 1);
            this.b.push(a)
        }.bind(this)) : MA(this.c, a).then(function() {
            this.followingIds.push(a);
            var b = this.b.indexOf(a); - 1 < b && this.b.splice(b, 1)
        }.bind(this))
    };
    nC.prototype.toggle = nC.prototype.toggle;
    nC.prototype.xj = function(a) {
        var b = a.document_id; - 1 < this.followingIds.indexOf(b) || this.f.userData.id === b || MA(this.c, b).then(function() {
            this.followingIds.push(b);
            var c = this.b.indexOf(b); - 1 < c ? this.b.splice(c, 1) : this.following.push(a)
        }.bind(this))
    };
    nC.prototype.addUser = nC.prototype.xj;
    Z.controller("appFollowingController", nC);
    Z.directive("appGeomDownload", function() {
        return {
            restrict: "E",
            controller: "AppGeomDownloadController",
            controllerAs: "dlCtrl",
            templateUrl: "/static/partials/geomdownload.html"
        }
    });

    function oC(a, b) {
        this.b = a;
        this.c = b
    }
    oC.$inject = ["ngeoDownload", "mapFeatureCollection"];

    function pC(a, b, c, d) {
        var e = (new Rl).readFeatures(a.c);
        if (e.length) {
            var e = e[0],
                f = ab(e);
            "title" in f && f.title && e.set("name", f.title);
            c = e.get("documentId") + c;
            b = b.writeFeatures([e], {
                Ta: "EPSG:3857"
            });
            a.b(b, c, d + ";charset=utf-8")
        }
    }
    oC.prototype.kk = function(a) {
        a.stopPropagation();
        pC(this, new sm, ".gpx", "application/gpx+xml")
    };
    oC.prototype.downloadGpx = oC.prototype.kk;
    oC.prototype.lk = function(a) {
        a.stopPropagation();
        pC(this, new pn, ".kml", "application/vnd.google-earth.kml+xml")
    };
    oC.prototype.downloadKml = oC.prototype.lk;
    Z.controller("AppGeomDownloadController", oC);
    Z.directive("appGpxUpload", function() {
        return {
            restrict: "E",
            controller: "AppGpxUploadController",
            controllerAs: "gpxCtrl",
            bindToController: !0,
            templateUrl: "/static/partials/gpxupload.html"
        }
    });

    function qC(a) {
        this.b = a;
        this.fileReaderSupported = void 0;
        this.fileContent = "";
        a.$watch(function() {
            return this.fileContent
        }.bind(this), this.c.bind(this))
    }
    qC.$inject = ["$scope"];
    qC.prototype.c = function(a) {
        a = (new sm).readFeatures(a, {
            Ta: "EPSG:3857"
        });
        a.length && this.b.$root.$emit("featuresUpload", a)
    };
    Z.controller("AppGpxUploadController", qC);
    Z.directive("appImageUploader", function() {
        return {
            restrict: "A",
            controller: "AppImageUploaderController",
            controllerAs: "uplCtrl",
            bindToController: {
                activities: "=",
                categories: "=",
                types: "="
            },
            templateUrl: "/static/partials/imageuploader.html",
            link: function(a, b) {
                b.on("click", ".dropdown-toggle", function() {
                    hB({
                        menu: this,
                        boxBoundEl: ".images-container",
                        checkBottom: !0
                    })
                })
            }
        }
    });

    function rC(a, b, c, d, e, f, g, h, k, l) {
        this.documentService = g;
        this.i = b;
        this.c = f;
        this.g = l;
        this.o = h;
        this.I = e;
        this.f = c;
        this.j = d;
        this.files = [];
        this.b = a;
        this.s = this.documentService.document.activities || [];
        this.v = sC(this);
        this.resizeOptions = {
            width: 2048,
            height: 2048,
            quality: .9
        };
        this.saving = !1;
        this.b.activities = this.activities;
        this.b.types = this.types;
        this.b.categories = this.categories;
        this.b.$watch(function() {
            return this.files
        }.bind(this), function() {
            if (this.files.length) {
                this.areAllUploaded = !1;
                for (var a, b = 0; b < this.files.length; b++) a =
                    this.files[b], a.metadata || (angular.extend(a, {
                        src: $A(a),
                        queued: !0,
                        progress: 0,
                        processed: !1,
                        metadata: {
                            id: a.name + "-" + (new Date).toISOString(),
                            activities: angular.copy(this.s),
                            categories: [],
                            image_type: this.v,
                            elevation: null,
                            geometry: null
                        }
                    }), tC(this, a));
                uC(this)
            }
        }.bind(this));
        this.areAllUploaded = !1
    }
    rC.$inject = "$scope $uibModal $compile $q appAlerts appApi appDocument imageUrl appUrl appAuthentication".split(" ");

    function uC(a) {
        for (var b, c = 0; c < a.files.length; c++) {
            b = a.files[c];
            if (!b.queued && !b.processed && !b.failed) return;
            if (b.queued) {
                vC(a, b).then(function() {
                    uC(this)
                }.bind(a));
                return
            }
        }
        wC(a)
    }

    function vC(a, b) {
        var c = a.j.defer(),
            d = JA(a.c, b, c.promise, function(a, b) {
                a.progress = b.loaded / b.total * 100
            }.bind(a, b));
        b.queued = !1;
        b.uploading = d;
        b.canceller = c;
        return d.then(function(a) {
            (new Image).src = b.src;
            b.metadata.filename = a.data.filename;
            b.processed = !0
        }.bind(a), function(a) {
            b.manuallyAborted || (b.failed = -1 === a.status ? "Timeout" : a.statusText, b.progress = 0)
        }.bind(a))
    }

    function wC(a) {
        for (var b, c = 0; c < a.files.length; c++)
            if (b = a.files[c], !b.processed) {
                a.areAllUploaded = !1;
                return
            }
        a.areAllUploaded = 0 < a.files.length
    }
    rC.prototype.save = function() {
        var a = this.j.defer();
        KA(this.c, this.files, this.documentService.document).then(function(b) {
                var c = b.config.data.images,
                    d = b.data.images;
                $(".img-container").each(function(a) {
                    var b = d[a].document_id;
                    c[a].image_id = "image-" + b;
                    var g = aB(c[a], this.o);
                    $(".photos").slick("slickAdd", g, !0);
                    g = this.b.$new(!0);
                    g.photo = c[a];
                    g.photo.image_id = "image-" + b;
                    this.documentService.document.associations.images.push(g.photo);
                    this.f($("#image-" + b).contents())(g)
                }.bind(this));
                a.resolve()
            }.bind(this),
            function() {
                a.reject()
            });
        return a.promise
    };
    rC.prototype.save = rC.prototype.save;

    function sC(a) {
        var b = LA(a.documentService.document.type);
        return a.documentService.wh(b) ? "collaborative" : "personal"
    }
    rC.prototype.qo = function(a) {
        a.failed = !1;
        a.queued = !0;
        uC(this)
    };
    rC.prototype.retryFileUpload = rC.prototype.qo;
    rC.prototype.Fg = function(a) {
        a.queued || a.failed || (a.manuallyAborted = !0, a.canceller.resolve());
        this.Ug(this.files.indexOf(a));
        wC(this)
    };
    rC.prototype.abortFileUpload = rC.prototype.Fg;
    rC.prototype.Eg = function() {
        this.files.forEach(function(a) {
            this.Fg(a)
        }.bind(this))
    };
    rC.prototype.abortAllUploads = rC.prototype.Eg;
    rC.prototype.Ug = function(a) {
        this.files.splice(a, 1);
        0 === this.files.length && (this.areAllUploaded = !1)
    };
    rC.prototype.deleteImage = rC.prototype.Ug;

    function tC(a, b) {
        window.loadImage.parseMetaData(b, function(a) {
            if (a = a.exif) {
                b.exif = a.getAll();
                a = b.exif;
                var d = b.metadata,
                    e = xC(a, "DateTimeOriginal");
                null === e && (e = xC(a, "DateTime"));
                d.date_time = e;
                d.exposure_time = a.ExposureTime;
                d.iso_speed = a.PhotographicSensitivity;
                d.focal_length = a.FocalLengthIn35mmFilm;
                d.fnumber = a.FNumber;
                d.camera_name = a.Make && a.Model ? a.Make + " " + a.Model : null;
                b.exif.GPSLatitude && (a = b.exif.GPSLatitude.split(","), d = b.exif.GPSLongitude.split(","), a = gB(a[0], a[1], a[2], b.exif.GPSLatitudeRef),
                    d = gB(d[0], d[1], d[2], b.exif.GPSLongitudeRef), e = jc("EPSG:4326").K(), isNaN(a) || isNaN(d) || !Hb(e, d, a) || (e = {
                        coordinates: yc([d, a], "EPSG:4326", "EPSG:3857"),
                        type: "Point"
                    }, b.metadata.geometry = {
                        geom: JSON.stringify(e)
                    }, b.exif.geo_label = Ab([d, a])), a = parseFloat(b.exif.GPSAltitude), isNaN(a) || (b.metadata.elevation = a))
            }
        }.bind(a))
    }

    function xC(a, b) {
        if (!a[b]) return null;
        var c = window.moment(a[b], "YYYY:MM:DD HH:mm:ss");
        return c.isValid() ? c.format() : null
    }
    rC.prototype.jd = function() {
        var a = $("#image-uploader").clone();
        this.i.open({
            animation: !0,
            template: this.f(a)(this.b),
            controller: "AppImageUploaderModalController as imageModalCtrl",
            size: "xl"
        })
    };
    rC.prototype.openModal = rC.prototype.jd;
    rC.prototype.cg = function(a, b, c, d) {
        d.stopPropagation();
        YA(a, b, c, d)
    };
    rC.prototype.selectOption = rC.prototype.cg;
    rC.prototype.oo = function(a) {
        return "image/jpeg" === a.type || "image/png" === a.type ? 2097152 < a.size : !1
    };
    rC.prototype.resizeIf = rC.prototype.oo;
    rC.prototype.hf = function(a) {
        return this.g.rb() ? a : a.filter(function(a) {
            return "copyright" !== a
        })
    };
    rC.prototype.filterImageTypes = rC.prototype.hf;
    Z.controller("AppImageUploaderController", rC);

    function yC(a, b) {
        this.b = a;
        this.c = b;
        a.$on("modal.closing", function() {
            this.b.uplCtrl.Eg()
        }.bind(this))
    }
    yC.$inject = ["$scope", "$uibModalInstance"];
    yC.prototype.close = function() {
        this.b.uplCtrl.saving || this.c.close()
    };
    yC.prototype.close = yC.prototype.close;
    yC.prototype.save = function() {
        var a = this.b.uplCtrl;
        a.saving || (a.saving = !0, a.save().then(function() {
            a.saving = !1;
            this.c.close()
        }.bind(this)))
    };
    yC.prototype.save = yC.prototype.save;
    Z.controller("AppImageUploaderModalController", yC);
    Z.directive("appLang", function() {
        return {
            restrict: "E",
            controller: "AppLangController",
            controllerAs: "langCtrl",
            bindToController: !0,
            template: '<div class="dropdown">  <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">    <span class="selected-lang">{{langCtrl.lang}}</span>    <span class="glyphicon glyphicon-option-vertical"></span>  </button>  <ul class="dropdown-menu dropdown-menu-right">    <li ng-repeat="lang in langCtrl.langs" ng-click="langCtrl.updateLang(lang)"><a>{{lang | translate}}</a></li>  </ul></div>'
        }
    });

    function zC(a) {
        this.b = a;
        this.langs = a.c;
        this.lang = a.S.currentLanguage
    }
    zC.$inject = ["appLang"];
    zC.prototype.sd = function(a) {
        -1 < this.langs.indexOf(a) && (this.lang = a, this.b.sd(a, !0))
    };
    zC.prototype.updateLang = zC.prototype.sd;
    Z.controller("AppLangController", zC);
    Z.directive("appListSwitch", function() {
        return {
            restrict: "E",
            controller: "appListSwitchController",
            controllerAs: "switchCtrl",
            link: function(a, b, c) {
                a.type = c.type
            },
            templateUrl: "/static/partials/listswitch.html"
        }
    });

    function AC() {
        this.showList = JSON.parse(window.localStorage.getItem("showList") || "false")
    }
    AC.prototype.toggle = function() {
        this.showList = !this.showList;
        window.localStorage.setItem("showList", JSON.stringify(this.showList))
    };
    AC.prototype.toggle = AC.prototype.toggle;
    Z.controller("appListSwitchController", AC);

    function BC(a) {
        return {
            restrict: "A",
            scope: !0,
            link: function(b, c) {
                b.$watch(function() {
                    return a.pendingRequests.length
                }, function() {
                    0 < a.pendingRequests.length ? ($(".loading-gif").show(), c.addClass("loading")) : ($(".loading-gif").hide(), c.removeClass("loading"))
                })
            }
        }
    }
    BC.$inject = ["$http"];
    Z.directive("appLoading", BC);
    Z.directive("appLoadPreferences", function() {
        return {
            restrict: "A",
            controller: "AppLoadPreferencesController",
            controllerAs: "lpCtrl",
            bindToController: {
                module: "@appLoadPreferences",
                url: "@appLoadPreferencesUrl"
            },
            link: function(a, b, c, d) {
                b.click(function() {
                    d.Jg()
                })
            }
        }
    });

    function CC(a, b, c) {
        this.j = a;
        this.c = b;
        this.f = c
    }
    CC.$inject = ["$scope", "ngeoLocation", "appApi"];
    CC.prototype.Jg = function() {
        this.b ? DC(this) : FA(this.f).then(function(a) {
            this.b = a.data;
            DC(this)
        }.bind(this))
    };
    CC.prototype.applyPreferences = CC.prototype.Jg;

    function DC(a) {
        var b = {},
            c, d;
        switch (a.module) {
            case "outings":
            case "routes":
            case "images":
            case "xreports":
                c = EC(a);
                d = a.b.activities.join(",");
                break;
            case "waypoints":
                c = EC(a);
                break;
            case "books":
            case "articles":
                d = a.b.activities.join(",")
        }
        c && (b.a = c);
        d && (b.act = d);
        if (a.url) {
            c = [];
            for (var e in b) c.push(e + "=" + b[e]);
            window.location = a.url + "#" + c.join("&")
        } else a.c.Sa("offset"), "a" in b && a.c.Sa("bbox"), a.c.bc(b), a.j.$root.$emit("searchFilterChange", !0)
    }

    function EC(a) {
        a = a.b.areas;
        for (var b = [], c = 0, d = a.length; c < d; c++) b.push(a[c].document_id);
        return b.join(",")
    }
    Z.controller("AppLoadPreferencesController", CC);
    Z.directive("appMailinglists", function() {
        return {
            restrict: "A",
            controller: "appMailinglistsController",
            controllerAs: "mlCtrl"
        }
    });

    function FC(a, b, c) {
        this.b = b;
        this.mailinglists = null;
        a.Aa() ? HA(this.b).then(function(a) {
            this.mailinglists = a.data
        }.bind(this)) : mA(c)
    }
    FC.$inject = ["appAuthentication", "appApi", "authUrl"];
    FC.prototype.toggle = function(a) {
        var b = {};
        b[a] = !this.mailinglists[a];
        IA(this.b, b)
    };
    FC.prototype.toggle = FC.prototype.toggle;
    Z.controller("appMailinglistsController", FC);

    function GC(a, b, c) {
        this.b = a;
        this.S = b;
        this.appApi = c
    }
    GC.$inject = ["$scope", "gettextCatalog", "appApi", "appAuthentication", "authUrl"];
    GC.prototype.translate = function(a) {
        return this.S.getString(a)
    };
    GC.prototype.translate = GC.prototype.translate;
    GC.prototype.sn = function(a) {
        return this.translate(a) + " - Camptocamp.org"
    };
    GC.prototype.page_title = GC.prototype.sn;
    Z.controller("MainController", GC);
    GC.prototype.Wl = function(a) {
        var b = window.location.pathname;
        return a === b ? "home" : "topoguide" === a ? dB(b.substring(1)) : -1 < b.indexOf(a)
    };
    GC.prototype.isPath = GC.prototype.Wl;
    GC.prototype.zj = function(a) {
        ZA(a)
    };
    GC.prototype.animateHeaderIcon = GC.prototype.zj;
    GC.prototype.po = function() {
        this.b.$root.$emit("resizeMap")
    };
    GC.prototype.resizeMap = GC.prototype.po;
    Z.directive("appXreport", function() {
        return {
            restrict: "A",
            scope: {
                xreportId: "@appXreport",
                lang: "@appXreportLang"
            },
            controller: "appXreportController",
            controllerAs: "xrCtrl",
            bindToController: !0
        }
    });

    function HC(a, b, c, d) {
        this.I = d;
        d = "/xreports/data/{id}/{lang}".replace("{id}", this.xreportId.toString()).replace("{lang}", this.lang);
        b = b.get(d);
        b["catch"](function(a) {
            this.I.ha(this.I.gettext("An error occured while loading this xreport private data"), a)
        }.bind(this));
        b.then(function(b) {
            var d = angular.element("#xreport-data");
            d.html(b.data);
            c(d.contents())(a.$parent)
        }.bind(this))
    }
    t("app.XreportController", HC);
    HC.$inject = ["$scope", "$http", "$compile", "appAlerts"];
    Z.controller("appXreportController", HC);
    Z.directive("appSearchFilters", function() {
        return {
            restrict: "A",
            controller: "@",
            name: "appSearchFiltersControllerName",
            bindToController: !0,
            scope: !0,
            controllerAs: "filtersCtrl",
            link: function(a, b) {
                b.on("click", ".dropdown-toggle", function() {
                    hB({
                        menu: this,
                        boxBoundEl: ".filters .simple-filters"
                    })
                });
                window.innerWidth < mB.zd.Ad && $(".more-filters-btn, .search-filters-btn, .less-filters-btn").click(function() {
                    $(".filters").toggleClass("filters-phone")
                })
            }
        }
    });

    function IC(a, b, c, d) {
        this.c = a;
        this.location = b;
        this.config = d;
        this.filtersNb = 0;
        this.orientations = [];
        this.j = !0;
        this.b = {};
        JC(this);
        this.c.$watch(function() {
            return this.filters
        }.bind(this), c(this.i.bind(this), 500, !0), !0);
        this.c.$watch(function() {
            return this.b
        }.bind(this), c(this.o.bind(this), 700, !0), !0);
        this.c.$root.$on("searchFilterChange", function(a, b) {
            b && (this.j = !0, JC(this))
        }.bind(this))
    }
    IC.$inject = ["$scope", "ngeoLocation", "ngeoDebounce", "advancedSearchFilters"];
    var KC = ["bbox", "offset", "limit"];

    function JC(a) {
        a.filters = {};
        for (var b = a.location.sf().filter(function(a) {
                return -1 === KC.indexOf(a)
            }), c = 0, d = b.length; c < d; c++) a.f(b[c])
    }
    IC.prototype.f = function(a) {
        var b = this.location.Oa(a);
        if ("" !== b)
            if ("qa" === a) this.filters[a] = b.split(",");
            else if (a in this.config) switch (this.config[a].type) {
            case "list":
                this.filters[a] = b.split(",");
                break;
            case "range":
                this.filters[a] = b.split(",").map(function(a) {
                    return parseInt(a, 10)
                });
                break;
            case "orientations":
                this.filters[a] = b.split(","), this.orientations = this.filters[a]
        } else this.filters[a] = b
    };
    IC.prototype.i = function() {
        this.j ? this.j = !1 : (this.location.bc(this.filters), this.location.Sa("offset"), this.c.$root.$emit("searchFilterChange"));
        for (var a in this.filters) a in this.config && "list" === this.config[a].type && (this.b[a] = this.filters[a]);
        this.filtersNb = Object.keys(this.filters).length
    };
    IC.prototype.o = function() {
        for (var a in this.b) this.b[a].length ? this.filters[a] = this.b[a] : (delete this.filters[a], this.location.Sa(a))
    };
    IC.prototype.cg = function(a, b, c) {
        c.stopPropagation();
        YA(this.b, a, b, c)
    };
    IC.prototype.selectOption = IC.prototype.cg;
    IC.prototype.clear = function() {
        for (var a in this.filters) this.location.Sa(a);
        this.filters = {};
        this.b = {};
        this.orientations = [];
        this.c.$root.$emit("searchFilterClear")
    };
    IC.prototype.clear = IC.prototype.clear;
    IC.prototype.ng = function(a, b, c, d) {
        -1 === this.orientations.indexOf(a) ? this.orientations.push(a) : this.orientations = this.orientations.filter(function(b) {
            return b !== a
        });
        this.orientations.length ? this.filters[d] = this.orientations : (delete this.filters[d], this.location.Sa(d))
    };
    IC.prototype.toggleOrientation = IC.prototype.ng;
    IC.prototype.No = function(a) {
        a in this.filters ? (delete this.filters[a], this.location.Sa(a)) : this.filters[a] = !0
    };
    IC.prototype.toggleCheckbox = IC.prototype.No;
    Z.controller("appSearchFiltersController", IC);

    function LC(a, b, c, d) {
        IC.call(this, a, b, c, d);
        this.dates = [];
        this.dateMaxStart = new Date;
        this.dateMaxEnd = new Date;
        this.dateMinEnd = null
    }
    sa(LC, IC);
    LC.$inject = ["$scope", "ngeoLocation", "ngeoDebounce", "advancedSearchFilters"];
    LC.prototype.f = function(a) {
        if (a in this.config && "date" === this.config[a].type) {
            var b = this.location.Oa(a);
            "" !== b && (b = b.split(","), b.forEach(function(a) {
                this.dates.push(window.moment(a).toDate())
            }.bind(this)), this.filters[a] = b, MC(this))
        } else LC.hb.f.call(this, a)
    };
    LC.prototype.clear = function() {
        NC(this);
        LC.hb.clear.call(this)
    };
    LC.prototype.clear = LC.prototype.clear;
    LC.prototype.setDate = function(a) {
        this.dates = this.dates.filter(function(a) {
            return null !== a
        });
        this.dates.length ? (MC(this), this.filters[a] = this.dates.map(this.g)) : (NC(this), delete this.filters[a], this.location.Xc(a))
    };
    LC.prototype.setDate = LC.prototype.setDate;
    LC.prototype.g = function(a) {
        return window.moment(a).format("YYYY-MM-DD")
    };

    function MC(a) {
        var b = a.dates.length;
        0 < b ? (a.dateMaxStart = 1 < b ? a.dates[1] : a.dateMaxStart, a.dateMinEnd = a.dates[0]) : NC(a)
    }

    function NC(a) {
        a.dates = [];
        a.dateMaxStart = new Date;
        a.dateMaxEnd = new Date;
        a.dateMinEnd = null
    }
    Z.controller("appOutingFiltersController", LC);

    function OC(a, b, c, d) {
        IC.call(this, a, b, c, d);
        this.dates = [];
        this.dateMaxStart = new Date;
        this.dateMaxEnd = new Date;
        this.dateMinEnd = null
    }
    sa(OC, IC);
    OC.$inject = ["$scope", "ngeoLocation", "ngeoDebounce", "advancedSearchFilters"];
    OC.prototype.f = function(a) {
        if (a in this.config && "date" === this.config[a].type) {
            var b = this.location.Oa(a);
            "" !== b && (b = b.split(","), b.forEach(function(a) {
                this.dates.push(window.moment(a).toDate())
            }.bind(this)), this.filters[a] = b, PC(this))
        } else OC.hb.f.call(this, a)
    };
    OC.prototype.clear = function() {
        QC(this);
        OC.hb.clear.call(this)
    };
    OC.prototype.clear = OC.prototype.clear;
    OC.prototype.setDate = function(a) {
        this.dates = this.dates.filter(function(a) {
            return null !== a
        });
        this.dates.length ? (PC(this), this.filters[a] = this.dates.map(this.g)) : (QC(this), delete this.filters[a], this.location.Xc(a))
    };
    OC.prototype.setDate = OC.prototype.setDate;
    OC.prototype.g = function(a) {
        return window.moment(a).format("YYYY-MM-DD")
    };

    function PC(a) {
        var b = a.dates.length;
        0 < b ? (a.dateMaxStart = 1 < b ? a.dates[1] : a.dateMaxStart, a.dateMinEnd = a.dates[0]) : QC(a)
    }

    function QC(a) {
        a.dates = [];
        a.dateMaxStart = new Date;
        a.dateMaxEnd = new Date;
        a.dateMinEnd = null
    }
    Z.controller("appXreportFiltersController", OC);

    function RC(a, b, c, d, e) {
        for (var f = d, g, h = b + 1; h < c; h++) {
            var k;
            k = a[h];
            var l = a[b],
                n = a[c],
                q = l[0],
                l = l[1],
                p = n[0] - q,
                r = n[1] - l;
            if (0 !== p || 0 !== r) {
                var u = ((k[0] - q) * p + (k[1] - l) * r) / (p * p + r * r);
                1 < u ? (q = n[0], l = n[1]) : 0 < u && (q += p * u, l += r * u)
            }
            p = k[0] - q;
            r = k[1] - l;
            k = p * p + r * r;
            k > f && (g = h, f = k)
        }
        f > d && (1 < g - b && RC(a, b, g, d, e), e.push(a[g]), 1 < c - g && RC(a, g, c, d, e))
    }

    function SC(a) {
        if (2 >= a.length) return a;
        var b = a.length - 1,
            c = [a[0]];
        RC(a, 0, b, 400, c);
        c.push(a[b]);
        return c
    }

    function TC(a) {
        if (a instanceof rl) {
            var b = a.M();
            a.ba(SC(b))
        } else a instanceof tl && (b = a.M().map(function(a) {
            return SC(a)
        }), a.ba(b));
        return a
    };
    Z.directive("appMap", function() {
        return {
            restrict: "E",
            scope: {
                edit: "=appMapEdit",
                drawType: "@appMapDrawType",
                disableWheel: "=appMapDisableWheel",
                advancedSearch: "=appMapAdvancedSearch",
                zoom: "@appMapZoom",
                defaultMapFilter: "=appMapDefaultMapFilter",
                featureCollection: "=appMapFeatureCollection",
                showRecenterTools: "=appMapShowRecenterTools"
            },
            controller: "AppMapController as mapCtrl",
            bindToController: !0,
            templateUrl: "/static/partials/map/map.html"
        }
    });

    function UC(a, b, c, d, e, f) {
        this.b = a;
        this.H = f;
        this.f = null;
        this.V = {};
        this.F = {};
        this.s = [];
        this.enableMapFilter = !!this.defaultMapFilter;
        this.c = c;
        this.O = new Rl;
        this.D = null;
        this.i = void 0;
        this.C = !1;
        this.o = null;
        this.v = !1;
        this.ga = e;
        this.map = new Qj({
            Xb: Xg({
                Kf: !1
            }),
            controls: Ke().extend([new vk]),
            view: new kd({
                center: Wb(VC),
                zoom: 4
            })
        });
        this.j = D(this.map);
        this.edit && (this.b.$root.$on("documentDataChange", this.jl.bind(this)), this.b.$root.$on("featuresUpload", this.ph.bind(this)), WC(this));
        this.advancedSearch && (this.b.$root.$on("resizeMap",
            d(this.N.bind(this), 300, !0)), this.c.qb("bbox") ? (this.enableMapFilter = !0, a = this.c.Oa("bbox").split(","), 4 == a.length && (this.D = a.map(function(a) {
            return parseInt(a, 10)
        }))) : this.v = fB(this.c), this.b.$root.$on("searchFeaturesChange", this.Aj.bind(this)), this.b.$root.$on("searchFilterClear", this.El.bind(this)), this.b.$root.$on("cardEnter", function(a, b) {
            XC(this, b, !0)
        }.bind(this)), this.b.$root.$on("cardLeave", function(a, b) {
            XC(this, b, !1)
        }.bind(this)), this.j.on("propertychange", d(this.rh.bind(this), 500, !0)), this.b.$watch(function() {
                return this.enableMapFilter
            }.bind(this),
            this.vl.bind(this)));
        this.disableWheel || (d = new Ng, Wj(this.map, d), XA(d));
        if (this.featureCollection || b) this.s = this.O.readFeatures(this.featureCollection || b);
        if (0 < this.s.length || this.advancedSearch) YC(this).setStyle(ZC(this)), this.map.on("click", this.tl.bind(this)), this.map.on("pointermove", this.ul.bind(this));
        if (this.edit && this.drawType) {
            var g = C(YC(this));
            this.g = new or({
                source: g,
                type: this.drawType
            });
            this.g.on("drawstart", this.il.bind(this));
            this.g.on("drawend", this.kc.bind(this));
            Wj(this.map, this.g);
            Va(this.map, "postrender", function() {
                var a = new Hr({
                    features: g.i,
                    Tg: function(a) {
                        return fg(a) && a.type == Df
                    }
                });
                a.on("modifyend", this.xl.bind(this));
                Wj(this.map, a)
            }.bind(this))
        }
        Va(this.map, "change:size", function() {
            0 < this.s.length ? $C(this, this.s, !0) : aD(this, this.D || VC)
        }.bind(this))
    }
    UC.$inject = "$scope mapFeatureCollection ngeoLocation ngeoDebounce appUrl imgPath".split(" ");
    var VC = [-4E5, 52E5, 12E5, 6E6];

    function aD(a, b, c) {
        var d = vg(a.map);
        d && Ub(b) && Vb(b) ? (c = c || {}, yd(a.j, b, d, c)) : (zd(a.j, Wb(b)), Bd(a.j, a.zoom || 12))
    }

    function YC(a) {
        if (!a.f) {
            var b = new ie;
            a.f = new li({
                source: new cr({
                    features: b
                })
            });
            a.f.setMap(a.map)
        }
        return a.f
    }

    function ZC(a) {
        return function(a) {
            switch (a.get("module")) {
                case "waypoints":
                case "images":
                case "profiles":
                case "xreports":
                    return bD(this, a);
                case "routes":
                case "outings":
                    return this.advancedSearch ? bD(this, a) : cD(this, a);
                case "areas":
                    return cD(this, a);
                default:
                    return null
            }
        }.bind(a)
    }

    function bD(a, b) {
        var c = b.get("module"),
            d, e = b.get("module");
        "waypoints" === e && b.get("type") && (e = b.get("type"));
        var f = b.get("documentId"),
            g = !!b.get("highlight"),
            h = g ? .55 : .4;
        d = g ? 22 : 16;
        switch (c) {
            case "waypoints":
                c = "/documents/waypoints/" + e + ".svg";
                break;
            case "images":
                d = 0;
                c = "/documents/images.svg";
                break;
            case "profiles":
                c = "/documents/profile.svg";
                break;
            default:
                c = "/documents/" + e + ".svg"
        }
        var k = e + h + "_" + f,
            l = a.F[k];
        if (!l) {
            l = e + h;
            "outings" === e && (l += "_" + f);
            f = a.V[l];
            if (!f) {
                var n;
                if ("outings" === b.get("module")) switch (b.get("condition_rating")) {
                    case "excellent":
                        n =
                            "#008000";
                        break;
                    case "good":
                        n = "#9ACD32";
                        break;
                    case "average":
                        n = "#FFFF00";
                        break;
                    case "poor":
                        n = "#FF0000";
                        break;
                    case "awful":
                        n = "#8B0000";
                        break;
                    default:
                        n = "#FFAA45"
                }
                f = new hn({
                    scale: h,
                    color: n,
                    src: a.H + c
                });
                a.V[l] = f
            }
            l = [new ei({
                image: new Zh({
                    radius: d,
                    fill: new ci({
                        color: "rgba(255, 255, 255, 0.5)"
                    }),
                    stroke: new di({
                        color: "#ddd",
                        width: 2
                    })
                })
            }), new ei({
                image: f,
                text: dD(b, e, g)
            })];
            a.F[k] = l
        }
        return l
    }

    function cD(a, b) {
        var c = b.get("module"),
            d = b.get("highlight"),
            e = b.get("documentId"),
            e = "lines" + (d ? " _highlight" : "") + "_" + e,
            f = a.F[e];
        f || (f = new di({
            color: d ? "red" : "yellow",
            width: 3
        }), f = new ei({
            text: dD(b, c, d),
            stroke: f
        }), a.F[e] = f);
        return f
    }

    function dD(a, b, c) {
        var d;
        c && (c = "", "routes" === b && a.get("title_prefix") && (c = a.get("title_prefix") + " : "), c += a.get("title"), d = new on({
            text: eB(c, 30, "\n"),
            textAlign: "left",
            offsetX: 20,
            font: "12px verdana,sans-serif",
            stroke: new di({
                color: "white",
                width: 3
            }),
            fill: new ci({
                color: "black"
            }),
            textBaseline: "middle"
        }));
        return d
    }

    function $C(a, b, c) {
        var d = C(YC(a));
        d.clear();
        b.length ? (b.forEach(function(a) {
            var b = ab(a);
            b.documentId && Jk(a, b.documentId)
        }), dl(d, b), c && aD(a, d.K(), {
            padding: [10, 10, 10, 10]
        })) : c && aD(a, VC)
    }
    m = UC.prototype;
    m.jl = function(a, b) {
        void 0 === this.i && (this.i = b.geometry ? angular.copy(b.geometry) : null);
        if ("geometry" in b && b.geometry) {
            var c = b.geometry["Point" == this.drawType ? "geom" : "geom_detail"];
            c ? (c = this.O.readGeometry(c), c = [new Fk(c)], $C(this, c, !0)) : "Point" != this.drawType && (c = b.geometry.geom, c = this.O.readGeometry(c), zd(this.j, c.M()), Bd(this.j, this.zoom || 12))
        }
    };
    m.ph = function(a, b) {
        for (var c = b = b.filter(iB), d = 0; d < c.length; d++) {
            var e = c[d].G();
            if (e instanceof tl) {
                for (var e = ul(e), f = 0; f < e.length; f++) 1 === e[f].M().length && e.splice(f, 1);
                f = new tl([]);
                vl(f, e);
                Gk(c[d], f)
            }
        }
        b = c;
        b.forEach(this.Do);
        $C(this, b, !0);
        this.b.$root.$emit("mapFeaturesChange", b)
    };
    m.il = function(a) {
        this.C = !0;
        var b = a.feature,
            c = C(YC(this));
        lr(c).forEach(function(a) {
            a !== b && c.Ea(a)
        })
    };
    m.kc = function(a) {
        this.C = !1;
        this.b.$root.$emit("mapFeaturesChange", [a.feature]);
        this.b.$applyAsync()
    };
    m.xl = function(a) {
        this.b.$root.$emit("mapFeaturesChange", a.features.c)
    };
    m.Aj = function(a, b, c, d) {
        d = (this.v = d) || !this.enableMapFilter;
        $C(this, b, d)
    };
    m.El = function() {
        if (!this.c.qb("bbox")) {
            var a = vg(this.map);
            a && (a = sd(this.j, a), a = a.map(Math.floor), this.c.bc({
                bbox: a.join(",")
            }))
        }
    };

    function XC(a, b, c) {
        var d;
        d = C(YC(a)).o[b.toString()];
        if (d = void 0 !== d ? d : null) a.o = c ? b : null, d.set("highlight", c)
    }
    m.rh = function() {
        if (this.enableMapFilter)
            if (this.D) this.D = null, this.b.$root.$emit("searchFilterChange");
            else {
                var a = vg(this.map);
                a && (this.v ? this.v = !1 : (a = sd(this.j, a), a = a.map(Math.floor), this.c.bc({
                    bbox: a.join(",")
                }), this.c.Sa("offset"), this.b.$root.$emit("searchFilterChange")))
            }
    };
    m.tl = function(a) {
        if (a = Zj(this.map, a.pixel, function(a) {
                return a
            }, this, function(a) {
                return a === YC(this)
            }, this)) {
            var b = a.get("module"),
                c = a.get("documentId"),
                d = {
                    lang: a.get("lang"),
                    title: a.get("title")
                };
            "routes" === b && a.get("title_prefix") && (d.title_prefix = a.get("title_prefix"));
            window.location.href = lB(this.ga, b, c, d)
        }
    };
    m.ul = function(a) {
        if (!a.dragging) {
            a = xf(this.map, a.originalEvent);
            var b = ak(this.map, a, function(a) {
                return a === YC(this)
            }, this);
            this.map.get(Vj).style.cursor = b ? "pointer" : "";
            b ? (a = Zj(this.map, a, function(a) {
                return a
            }, this, function(a) {
                return a === YC(this)
            }, this), this.o && XC(this, this.o, !1), a = a.Ua(), XC(this, a, !0), this.b.$root.$emit("mapFeatureHover", a)) : this.o && (XC(this, this.o, !1), this.b.$root.$emit("mapFeatureHover", null))
        }
    };
    m.vl = function(a, b) {
        a === b ? a || this.b.$root.$emit("searchFilterChange") : a ? this.rh() : (this.c.Sa("bbox"), this.c.Sa("offset"), this.b.$root.$emit("searchFilterChange"))
    };

    function WC(a) {
        var b = new Sq({
            dh: [sm]
        });
        b.on("addfeatures", function(a) {
            a = a.features;
            a.length && this.ph(0, a)
        }.bind(a));
        Wj(a.map, b)
    }
    m.Do = function(a) {
        var b = a.G(),
            b = TC(b);
        Gk(a, b);
        return a
    };
    m.Jj = function() {
        return this.edit
    };
    UC.prototype.canReset = UC.prototype.Jj;
    UC.prototype.mo = function() {
        this.C && this.g.Vb();
        C(YC(this)).clear();
        this.b.$root.$emit("mapFeaturesReset", angular.copy(this.i))
    };
    UC.prototype.resetFeature = UC.prototype.mo;
    UC.prototype.Ij = function() {
        return this.edit && 0 < lr(C(YC(this))).length && this.i && this.i.geom
    };
    UC.prototype.canDelete = UC.prototype.Ij;
    UC.prototype.hk = function() {
        this.C && this.g.Vb();
        C(YC(this)).clear();
        this.b.$root.$emit("mapFeaturesChange", [])
    };
    UC.prototype.deleteFeature = UC.prototype.hk;
    UC.prototype.N = function() {
        ck(this.map);
        this.map.td()
    };
    Z.controller("AppMapController", UC);
    Z.directive("appAdvancedSearch", function() {
        return {
            restrict: "E",
            controller: "AppAdvancedSearchController",
            controllerAs: "searchCtrl",
            bindToController: {
                doctype: "@documentType",
                useMap: "="
            },
            scope: !0,
            templateUrl: "/static/partials/advancedsearch.html"
        }
    });

    function eD(a, b, c, d, e) {
        this.b = a;
        this.g = e;
        this.o = b;
        this.j = c;
        this.S = d;
        this.total = 0;
        this.documents = [];
        this.noResults = !1;
        this.f = this.highlightId = null;
        this.c = !this.j.qb("bbox") && fB(this.j);
        this.b.$root.$on("searchFilterChange", function(a, b) {
            this.c = b || this.c;
            fD(this)
        }.bind(this));
        this.useMap && !this.c || fD(this);
        this.useMap && this.b.$root.$on("mapFeatureHover", function(a, b) {
            this.highlightId = b;
            this.b.$apply()
        }.bind(this))
    }
    eD.$inject = ["$scope", "appApi", "ngeoLocation", "gettextCatalog", "$q"];

    function fD(a) {
        null !== a.f && a.f.resolve();
        var b = a.j.cd(),
            b = vu(wu(b)) || "",
            b = b + ("&pl=" + a.S.currentLanguage);
        a.f = a.g.defer();
        zA(a.o, a.doctype, b, a.f.promise).then(function(a) {
            this.f = null;
            "data" in a && (a = a.data, this.documents = a.documents, this.total = a.total, this.noResults = 0 === this.documents.length, this.b.$root.resCounter = this.total, this.b.$root.$emit("searchFeaturesChange", gD(this), this.total, this.c), this.c = !1)
        }.bind(a))
    }

    function gD(a) {
        for (var b = [], c = new Rl, d = 0, e = a.documents.length; d < e; d++) {
            var f = a.documents[d];
            if ("geometry" in f && f.geometry && f.geometry.geom) {
                var g;
                g = a;
                var h = f,
                    k = h.locales[0],
                    l = {
                        module: g.doctype,
                        documentId: h.document_id,
                        lang: k.lang,
                        title: k.title
                    };
                "waypoints" === g.doctype ? l.type = h.waypoint_type : "routes" === g.doctype ? l.title_prefix = k.title_prefix : "outings" === g.doctype && (l.condition_rating = h.condition_rating);
                g = l;
                g.geometry = c.readGeometry(f.geometry.geom);
                b.push(new Fk(g))
            }
        }
        return b
    }
    eD.prototype.kn = function(a) {
        this.b.$root.$emit("cardEnter", a)
    };
    eD.prototype.onMouseEnter = eD.prototype.kn;
    eD.prototype.ln = function(a) {
        this.b.$root.$emit("cardLeave", a)
    };
    eD.prototype.onMouseLeave = eD.prototype.ln;
    Z.controller("AppAdvancedSearchController", eD);
    Z.directive("appBaselayerSelector", function() {
        return {
            restrict: "E",
            controller: "AppBaselayerSelectorController",
            controllerAs: "bglayerCtrl",
            bindToController: !0,
            scope: {
                map: "=appBaselayerSelectorMap"
            },
            templateUrl: "/static/partials/map/baselayerselector.html"
        }
    });

    function hD(a, b, c, d, e) {
        this.c = b;
        this.j = c.ign;
        this.f = c.bing;
        this.I = d;
        this.b = {};
        this.bgLayerSpecs = iD.filter(function(a) {
            return e.Aa() || !a.auth
        });
        this.oi(this.bgLayerSpecs[0])
    }
    hD.$inject = ["$http", "ngeoBackgroundLayerMgr", "mapApiKeys", "appAlerts", "appAuthentication"];
    var iD = [{
        name: "esri"
    }, {
        name: "osm"
    }, {
        name: "bing"
    }, {
        name: "ign maps"
    }, {
        name: "ign ortho"
    }, {
        name: "swisstopo",
        auth: !0
    }];
    hD.prototype.oi = function(a) {
        this.currentBgLayerSpec = a;
        a = a.name;
        if (a in this.b) a = this.b[a];
        else {
            var b;
            switch (a) {
                case "esri":
                    b = new Cs({
                        la: [new he({
                            html: '<a href="https://www.arcgis.com/home/item.html?id=30e5fe3149c34df1ba922e6f5bbf808f" target="_blank">Esri</a>'
                        })],
                        url: "https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/WMTS?layer=World_Topo_Map&style=default&tilematrixset=GoogleMapsCompatible&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image%2Fjpeg&TileMatrix={z}&TileCol={x}&TileRow={y}"
                    });
                    break;
                case "bing":
                    b = new As({
                        key: this.f,
                        Ql: "AerialWithLabels"
                    });
                    break;
                case "ign maps":
                    b = jD(this, "GEOGRAPHICALGRIDSYSTEMS.MAPS");
                    break;
                case "ign ortho":
                    b = jD(this, "ORTHOIMAGERY.ORTHOPHOTOS");
                    break;
                case "swisstopo":
                    b = kD();
                    break;
                default:
                    b = new Js
            }
            b = new Jh({
                source: b
            });
            a = this.b[a] = b
        }
        a && this.c.set(this.map, a)
    };
    hD.prototype.setLayer = hD.prototype.oi;

    function jD(a, b) {
        for (var c = [], d = [], e = jc("EPSG:3857"), e = Ub(e.K()) / 256, f = 0; 18 > f; f++) d[f] = f.toString(), c[f] = e / Math.pow(2, f);
        c = new Ls({
            origin: [-20037508, 20037508],
            Fa: c,
            lc: d
        });
        return new Os({
            url: "//wxs.ign.fr/" + a.j + "/wmts",
            layer: b,
            matrixSet: "PM",
            format: "image/jpeg",
            projection: "EPSG:3857",
            oa: c,
            style: "normal",
            la: [new he({
                html: '<a href="http://www.geoportail.fr/" target="_blank"><img src="//api.ign.fr/geoportail/api/js/latest/theme/geoportal/img/logo_gp.gif"></a>'
            })]
        })
    }

    function kD() {
        return new Cs({
            la: [new he({
                html: '<a target="_blank" href="http://www.swisstopo.admin.ch/internet/swisstopo/en/home.html">swisstopo</a>'
            })],
            Za: ["10", "11", "12", "13", "14"].map(function(a) {
                return "https://wmts" + a + ".geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/{z}/{x}/{y}.jpeg"
            }),
            ka: 17
        })
    }
    Z.controller("AppBaselayerSelectorController", hD);
    Z.directive("appDiffMap", function() {
        return {
            restrict: "E",
            scope: {},
            controller: "AppDiffMapController",
            controllerAs: "diffMapCtrl",
            bindToController: !0,
            templateUrl: "/static/partials/map/diffmap.html"
        }
    });

    function lD(a) {
        this.b = [];
        a && (this.b = (new Rl).readFeatures(a));
        this.map = new Qj({
            Xb: Xg({
                Kf: !1
            }),
            view: new kd({
                center: Wb(VC),
                zoom: 4
            })
        });
        a = new Ng;
        Wj(this.map, a);
        XA(a);
        if (0 != this.b.length) this.map.on("change:target", pa(function() {
            var a = this.b,
                c = mD(this);
            dl(C(c), a);
            (a = vg(this.map)) && yd(D(this.map), C(c).K(), a, {
                padding: [10, 10, 10, 10],
                ka: 12
            })
        }, this))
    }
    lD.$inject = ["mapFeatureCollection"];

    function mD(a) {
        if (!a.f) {
            var b = new ci({
                    color: "rgba(237, 41, 39, 0.6)"
                }),
                c = new di({
                    color: "rgba(237, 41, 39, 1)",
                    width: 3
                }),
                d = new ei({
                    image: new Zh({
                        fill: b,
                        stroke: c,
                        radius: 10
                    }),
                    fill: b,
                    stroke: c
                }),
                b = new ci({
                    color: "rgba(31, 157, 61, 0.9)"
                }),
                c = new di({
                    color: "rgba(31, 157, 61, 1)",
                    width: 2
                }),
                e = new ei({
                    image: new Zh({
                        fill: b,
                        stroke: c,
                        radius: 5
                    }),
                    fill: b,
                    stroke: c
                });
            a.f = new li({
                source: new cr,
                style: function(a) {
                    return "v1" === a.get("type") ? d : e
                }
            });
            a.f.setMap(a.map)
        }
        return a.f
    }
    Z.controller("AppDiffMapController", lD);
    Z.directive("appWhatsnewFeed", function() {
        return {
            restrict: "E",
            controller: "appWhatsnewFeedController as wfeedCtrl",
            templateUrl: "/static/partials/whatsnew.html"
        }
    });

    function nD(a, b, c, d, e, f) {
        kC.call(this, 0, c, d, e, f);
        this.currentLang = d.S.currentLanguage
    }
    sa(nD, kC);
    nD.$inject = "$scope appAuthentication appApi appLang imageUrl ngeoLocation".split(" ");
    nD.prototype.Zc = function() {
        this.busy = !0;
        this.f.qb("u") && (this.userId = parseInt(this.f.Oa("u"), 10));
        EA(this.c, this.b, this.userId).then(function(a) {
            lC(this, a)
        }.bind(this), function() {
            this.busy = !1;
            this.error = !0
        }.bind(this))
    };
    nD.prototype.getDocumentsFromFeed = nD.prototype.Zc;
    nD.prototype.Rk = function(a) {
        return "/{module}/{id}/{lang}/{version}".replace("{module}", LA(a.document.type)).replace("{id}", String(a.document.document_id)).replace("{lang}", a.lang).replace("{version}", String(a.version_id))
    };
    nD.prototype.getVersionUrl = nD.prototype.Rk;
    Z.controller("appWhatsnewFeedController", nD);
    Z.directive("appGeolocation", function() {
        return {
            restrict: "E",
            controller: "AppGeolocationController",
            controllerAs: "geoCtrl",
            bindToController: !0,
            scope: {
                map: "=appGeolocationMap"
            },
            templateUrl: "/static/partials/map/geolocation.html"
        }
    });
    Z.controller("AppGeolocationController", function() {
        this.mobileGeolocationOptions = {
            positionFeatureStyle: new ei({
                image: new Zh({
                    radius: 6,
                    fill: new ci({
                        color: "rgba(230, 100, 100, 1)"
                    }),
                    stroke: new di({
                        color: "rgba(230, 40, 40, 1)",
                        width: 2
                    })
                })
            }),
            accuracyFeatureStyle: new ei({
                fill: new ci({
                    color: "rgba(100, 100, 230, 0.3)"
                }),
                stroke: new di({
                    color: "rgba(40, 40, 230, 1)",
                    width: 2
                })
            }),
            zoom: 14
        }
    });
    Z.directive("appMapSwitch", function() {
        return {
            restrict: "E",
            controller: "appMapSwitchController",
            controllerAs: "MapswitchCtrl",
            templateUrl: "/static/partials/mapswitch.html"
        }
    });

    function oD() {
        this.hideMap = JSON.parse(window.localStorage.getItem("hideMap") || "false")
    }
    oD.prototype.toggle = function() {
        this.hideMap = !this.hideMap;
        window.localStorage.setItem("hideMap", JSON.stringify(this.hideMap))
    };
    oD.prototype.toggle = oD.prototype.toggle;
    Z.controller("appMapSwitchController", oD);
    Z.directive("appMapSearch", function() {
        return {
            restrict: "E",
            scope: {
                map: "=appMapSearchMap"
            },
            controller: "AppMapSearchController",
            bindToController: !0,
            controllerAs: "searchCtrl",
            templateUrl: "/static/partials/map/search.html",
            link: function(a, b) {
                b.find("input").on("focus blur", function() {
                    $(this).val("")
                })
            }
        }
    });

    function pD(a, b, c) {
        this.S = c;
        a = qD(this);
        this.b = new Rl({
            Ta: mB.fc.wd
        });
        this.options = {
            highlight: !0,
            hint: void 0,
            minLength: void 0
        };
        this.datasets = [{
            source: a.ttAdapter(),
            display: function(a) {
                return a.get("name")
            },
            limit: Infinity,
            identify: function(a) {
                return a.get("osm_id")
            },
            templates: {
                suggestion: function(a) {
                    return "<p>" + a.get("name") + "</p>"
                },
                notFound: function() {
                    return '<p class="no-result">' + this.S.getString("No result") + "</p>"
                }.bind(this),
                pending: '<p class="results-loading"></p>'
            }
        }];
        this.listeners = {
            select: rD.bind(this)
        }
    }
    pD.$inject = ["$rootScope", "$compile", "gettextCatalog"];

    function qD(a) {
        a = new Bloodhound({
            limit: 10,
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace("label"),
            remote: {
                url: "https://photon.komoot.de/api/?q=%QUERY",
                wildcard: "%QUERY",
                rateLimitWait: 50,
                prepare: function(a, c) {
                    var d = c.url + "&lang=" + this.S.currentLanguage,
                        e = qd(D(this.map));
                    void 0 !== e && (e = yc(e, "EPSG:3857", "EPSG:4326"), d += "&lon=" + e[0] + "&lat=" + e[1]);
                    c.url = d.replace("%QUERY", encodeURIComponent(a));
                    return c
                }.bind(a),
                filter: function(a) {
                    a = this.b.readFeatures(a);
                    a.forEach(function(a) {
                        var b = [];
                        a.get("city") && b.push(a.get("city"));
                        a.get("state") && b.push(a.get("state"));
                        a.get("country") && b.push(a.get("country"));
                        0 < b.length && (b = a.get("name") + " (" + b.join(", ") + ")", a.set("name", b))
                    });
                    return a
                }.bind(a)
            }
        });
        a.initialize();
        return a
    }

    function rD(a, b) {
        var c = this.map,
            d;
        b.get("extent") ? (d = b.get("extent"), d = zc(d, "EPSG:4326", "EPSG:3857")) : d = b.G();
        var e = vg(c);
        yd(D(c), d, e, {
            ka: 12
        })
    }
    Z.controller("AppMapSearchController", pD);
    Z.directive("appMarkdownEditor", ["$rootScope", "$compile", "gettextCatalog", "textFormatingUrl", function(a, b, c, d) {
        var e = {
            Bold: "Bold",
            Italic: "Italic",
            Heading: "Heading",
            "URL/Link": "URL/Link",
            Image: "Image",
            List: "List",
            Preview: "Preview",
            "strong text": "strong text",
            "emphasized text": "emphasized text",
            "heading text": "heading text",
            "enter link description here": "enter link description here",
            "Insert Hyperlink": "Insert Hyperlink",
            "enter image description here": "enter image description here",
            "Insert Image Hyperlink": "Insert Image Hyperlink",
            "enter image title here": "enter image title here",
            "list text here": "list text here"
        };
        angular.forEach(e, function(a, b) {
            e[b] = "{{'" + a + "'|translate}}"
        });
        $.fn.markdown.messages.angular = e;
        var f = [
            [{
                name: "groupFont",
                data: [{
                    name: "cmdH3",
                    title: "Heading",
                    hotkey: "Ctrl+H",
                    icon: "glyphicon glyphicon-header",
                    callback: function(a) {
                        return function(b) {
                            var c, d;
                            d = b.getSelection();
                            var e = b.getContent(),
                                f, p;
                            0 === d.length ? c = b.__localize("heading text") : c = d.text + "\n";
                            (f = a.length + 1, e.substr(d.start - f, f) === a + " ") || (f = a.length,
                                e.substr(d.start - f, f) === a) ? (b.setSelection(d.start - f, d.end), b.replaceSelection(c), d = d.start - f) : 0 < d.start && (p = e.substr(d.start - 1, 1), p && "\n" != p) ? (b.replaceSelection("\n\n" + a + " " + c), d = d.start + a.length + 3) : (b.replaceSelection(a + " " + c), d = d.start + a.length + 1);
                            b.setSelection(d, d + c.length)
                        }
                    }("##")
                }]
            }, {
                name: "groupHelp",
                data: [{
                    name: "cmdHelp",
                    title: "Help",
                    icon: "glyphicon glyphicon-question-sign",
                    callback: function() {
                        window.open(d)
                    }
                }]
            }]
        ];
        return {
            restrict: "A",
            require: "ngModel",
            link: function(d, e, k, l) {
                e.hasClass("processed") ||
                    (e.addClass("processed"), k = d.$eval(k.appMarkdownEditor) || {}, k.hiddenButtons = (k.hiddenButtons || []).concat(["cmdHeading", "cmdImage", "cmdPreview"]), e.markdown($.extend({
                        additionalButtons: f,
                        language: "angular",
                        onChange: function(a) {
                            l.$setViewValue(a.getContent())
                        },
                        onShow: function(b) {
                            a.yh = a.yh || {};
                            a.yh[l.$name] = b;
                            b.__localize = function(a) {
                                return c.getString(a)
                            }
                        }
                    }, k)), b(e.siblings(".md-header"))(d))
            }
        }
    }]);
    Z.directive("appMergeDocuments", function() {
        return {
            restrict: "E",
            controller: "AppMergeDocumentsController",
            controllerAs: "mergeCtrl",
            templateUrl: "/static/partials/mergedocuments.html",
            bindToController: {
                module: "<"
            }
        }
    });

    function sD(a, b, c, d, e) {
        this.sourceDocument = a;
        this.f = b;
        this.c = c;
        this.S = d;
        this.b = e
    }
    sD.$inject = ["documentData", "appApi", "appAlerts", "gettextCatalog", "$uibModalStack"];
    Z.controller("AppMergeDocumentsController", sD);
    sD.prototype.vo = function(a) {
        this.targetDocument = a
    };
    sD.prototype.selectTargetDocument = sD.prototype.vo;
    sD.prototype.Jf = function() {
        if (this.targetDocument) {
            var a = this.S.getString("Are you sure you want to merge?");
            window.confirm(a) && this.f.Jf(this.sourceDocument.document_id, this.targetDocument.document_id).then(function() {
                this.Tb();
                this.c.lb(this.S.getString("Documents successfully merged"))
            }.bind(this))
        }
    };
    sD.prototype.mergeDocuments = sD.prototype.Jf;
    sD.prototype.Tb = function() {
        this.b.dismissAll()
    };
    sD.prototype.closeDialog = sD.prototype.Tb;
    sD.prototype.Nk = function() {
        if (!this.targetDocument) return null;
        var a = this.targetDocument.locales[0],
            b = a.title_prefix ? a.title_prefix + " : " : "";
        return b += a.title
    };
    sD.prototype.getTargetTitle = sD.prototype.Nk;
    Z.directive("appPagination", function() {
        return {
            restrict: "E",
            controller: "AppPaginationController",
            controllerAs: "pageCtrl",
            bindToController: !0,
            templateUrl: "/static/partials/pagination.html"
        }
    });

    function tD(a, b) {
        this.c = a;
        this.b = b;
        this.total = 0;
        this.showGoToLastPage = !0;
        this.offset = b.Td("offset") || 0;
        this.limit = b.Td("limit") || 30;
        this.c.$root.$on("searchFeaturesChange", this.f.bind(this))
    }
    tD.$inject = ["$scope", "ngeoLocation"];
    tD.prototype.f = function(a, b, c) {
        this.total = c;
        this.offset = this.b.Td("offset") || 0;
        this.showGoToLastPage = 1E4 >= this.total
    };
    tD.prototype.Vk = function() {
        this.b.Sa("offset");
        this.c.$root.$emit("searchFilterChange");
        uD()
    };
    tD.prototype.goToFirst = tD.prototype.Vk;
    tD.prototype.Yk = function() {
        var a = this.offset - this.limit;
        0 < a ? this.b.bc({
            offset: a
        }) : this.b.Sa("offset");
        this.c.$root.$emit("searchFilterChange");
        uD()
    };
    tD.prototype.goToPrev = tD.prototype.Yk;
    tD.prototype.Xk = function() {
        this.b.bc({
            offset: this.offset + this.limit
        });
        this.c.$root.$emit("searchFilterChange");
        uD()
    };
    tD.prototype.goToNext = tD.prototype.Xk;
    tD.prototype.Wk = function() {
        this.b.bc({
            offset: this.total - this.total % this.limit
        });
        this.c.$root.$emit("searchFilterChange");
        uD()
    };
    tD.prototype.goToLast = tD.prototype.Wk;

    function uD() {
        document.querySelector(".documents-list-section").scrollTop = 0
    }
    Z.controller("AppPaginationController", tD);
    Z.directive("appPreferences", function() {
        return {
            restrict: "A",
            controller: "appPreferencesController",
            controllerAs: "prefCtrl"
        }
    });

    function vD(a, b, c, d) {
        this.c = a;
        this.b = c;
        this.activities = [];
        this.areas = [];
        this.followed_only = !1;
        b.Aa() ? FA(this.b).then(function(a) {
            a = a.data;
            this.activities = a.activities;
            this.areas = a.areas;
            this.followed_only = a.followed_only;
            this.c.$watch(function() {
                return this.followed_only
            }.bind(this), function(a, b) {
                a !== b && wD(this)
            }.bind(this))
        }.bind(this)) : mA(d)
    }
    vD.$inject = ["$scope", "appAuthentication", "appApi", "authUrl"];
    vD.prototype.bp = function(a) {
        -1 < this.activities.indexOf(a) ? this.activities = this.activities.filter(function(b) {
            return b !== a
        }) : this.activities.push(a);
        wD(this)
    };
    vD.prototype.updateActivities = vD.prototype.bp;
    vD.prototype.vj = function(a) {
        this.areas.some(function(b) {
            return b.document_id === a.document_id
        }) || (this.areas.push(a), wD(this))
    };
    vD.prototype.addArea = vD.prototype.vj;
    vD.prototype.io = function(a) {
        this.areas = this.areas.filter(function(b) {
            return b.document_id !== a
        });
        wD(this)
    };
    vD.prototype.removeArea = vD.prototype.io;

    function wD(a) {
        GA(a.b, {
            activities: a.activities,
            areas: a.areas,
            followed_only: a.followed_only
        })
    }
    Z.controller("appPreferencesController", vD);
    Z.directive("appProgressBar", function() {
        return {
            restrict: "E",
            controller: "appProgressBarController as progressBarCtrl"
        }
    });

    function xD(a) {
        this.b = a;
        this.nextStep = 2;
        this.currentStep = 1;
        this.previousStep = 0
    }
    xD.$inject = ["$interval"];
    xD.prototype.step = function(a, b, c) {
        switch (a) {
            case 1:
                $(".create-edit-document .editing").animate({
                    left: "0"
                });
                yD(this, a, c);
                this.previousStep = 0;
                this.currentStep = 1;
                this.nextStep = 2;
                break;
            case 2:
                $(".create-edit-document .editing").animate({
                    left: "-115%"
                });
                yD(this, a, c);
                this.previousStep = 1;
                this.currentStep = 2;
                this.nextStep = 3;
                break;
            case 3:
                $(".create-edit-document .editing").animate({
                    left: "-229%"
                });
                yD(this, a, c);
                this.previousStep = 2;
                this.currentStep = 3;
                this.nextStep = 4;
                break;
            case 4:
                $(".create-edit-document .editing").animate({
                        left: "-343%"
                    }),
                    yD(this, a, c), this.previousStep = 3, this.currentStep = 4, this.nextStep = 5
        }
    };
    xD.prototype.step = xD.prototype.step;

    function yD(a, b, c) {
        var d = 100 / a.maxSteps,
            e, f, g;
        $(".nav-step-selected").removeClass("nav-step-selected");
        $(".nav-step-" + b).addClass("nav-step-selected");
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        "forwards" === c ? (e = d * (b - 1) - 10, f = d * b - 10) : (e = d * b - 10, f = d * (b + 1) - 10, g = e);
        var h = a.b(function() {
            "forwards" === c ? b === this.maxSteps ? 120 <= e ? this.b.cancel(h) : e++ : e >= f ? this.b.cancel(h) : e++ : e >= g ? (f--, e = f) : this.b.cancel(h);
            $(".progress-bar-edit").css({
                "background-image": "-webkit-linear-gradient(left, #A9D361 0,#A9D361 " +
                    e + "%,#B4B4B4 " + (e + 7) + "%,#B4B4B4 0%)"
            }).css({
                "background-image": "-o-linear-gradient(left, #A9D361 0,#A9D361 " + e + "%,#B4B4B4 " + (e + 7) + "%,#B4B4B4 0%)"
            }).css({
                "background-image": "-moz-linear-gradient(left, #A9D361 0,#A9D361 " + e + "%,#B4B4B4 " + (e + 7) + "%,#B4B4B4 0%)"
            }).css({
                "background-image": "-ms-linear-gradient(left, #A9D361 0,#A9D361 " + e + "%,#B4B4B4 " + (e + 7) + "%,#B4B4B4 0%)"
            }).css({
                "background-image": "linear-gradient(left, #A9D361 0,#A9D361 " + e + "%,#B4B4B4 " + (e + 7) + "%,#B4B4B4 0%)"
            })
        }.bind(a), 10)
    }
    xD.prototype.ep = function(a) {
        this.maxSteps = mB.cj[a] || 2
    };
    xD.prototype.updateMaxSteps = xD.prototype.ep;
    Z.controller("appProgressBarController", xD);
    Z.directive("appProtectDocument", function() {
        return {
            restrict: "A",
            controller: "appProtectDocumentController",
            controllerAs: "protectCtrl",
            templateUrl: "/static/partials/protectdocument.html"
        }
    });

    function zD(a, b, c, d, e) {
        this.b = b;
        this.f = a;
        this.c = c;
        this.S = d;
        this.documentData = e
    }
    zD.$inject = ["appAuthentication", "appApi", "appAlerts", "gettextCatalog", "documentData"];
    zD.prototype.Ln = function() {
        this.f.rb() && TA(this.b, this.documentData.document_id).then(function() {
            this.documentData["protected"] = !0;
            this.c.lb(this.S.getString("Document is now protected"))
        }.bind(this))
    };
    zD.prototype.protect = zD.prototype.Ln;
    zD.prototype.Yo = function() {
        this.f.rb() && UA(this.b, this.documentData.document_id).then(function() {
            this.documentData["protected"] = !1;
            this.c.lb(this.S.getString("Document is no longer protected"))
        }.bind(this))
    };
    zD.prototype.unprotect = zD.prototype.Yo;
    Z.controller("appProtectDocumentController", zD);
    Z.directive("protectedUrlBtn", function() {
        return {
            restrict: "A",
            controller: "AppProtectedUrlBtnController",
            scope: {
                url: "@"
            },
            link: function(a, b, c, d) {
                b.click(function() {
                    var b = a.url;
                    d.Cj.Aa() ? window.location.href = b : window.location.href = "{authUrl}#to={redirect}".replace("{authUrl}", d.Bj).replace("{redirect}", encodeURIComponent(b))
                })
            }
        }
    });

    function AD(a, b) {
        this.Cj = a;
        this.Bj = b
    }
    AD.$inject = ["appAuthentication", "authUrl"];
    Z.controller("AppProtectedUrlBtnController", AD);
    Z.directive("appRevertDocument", function() {
        return {
            restrict: "A",
            controller: "appRevertDocumentController",
            controllerAs: "revertCtrl"
        }
    });

    function BD(a, b, c, d) {
        this.f = a;
        this.c = b;
        this.b = c;
        this.S = d
    }
    BD.$inject = ["appAuthentication", "appApi", "appAlerts", "gettextCatalog"];
    BD.prototype.ro = function(a, b, c) {
        var d = this.S;
        this.f.rb() && window.confirm(d.getString("Are you sure you want to revert to this version of the document?")) && VA(this.c, a, b, c).then(function() {
            this.b.lb(d.getString("Revert succeeded"))
        }.bind(this))
    };
    BD.prototype.revert = BD.prototype.ro;
    Z.controller("appRevertDocumentController", BD);
    t("app.sidemenu", function() {
        var a = $("body"),
            b = $(".page-content");
        $(".menu-open-close").on("click", function() {
            a.toggleClass("menu-toggled");
            a.hasClass("menu-toggled") ? b.prepend('<div id="content-toggled">') : $("#content-toggled").remove()
        });
        $(window).resize(function() {
            1100 <= window.innerWidth && a.hasClass("menu-toggled") && (a.toggleClass("menu-toggled", !1), $("#content-toggled").remove())
        });
        b.on("click", "#content-toggled", function() {
            a.toggleClass("menu-toggled", !1);
            $("#content-toggled").remove()
        })
    });

    function CD(a) {
        return {
            restrict: "E",
            controller: "AppSlideInfoController as slideCtrl",
            bindToController: !0,
            scope: !0,
            templateUrl: "/static/partials/slideinfo.html",
            link: function(b, c) {
                angular.extend(b, b.$parent.photo);
                a(c.contents())(b)
            }
        }
    }
    CD.$inject = ["$compile"];
    Z.directive("appSlideInfo", CD);

    function DD() {}
    DD.$inject = ["appApi", "$scope"];
    Z.controller("AppSlideInfoController", DD);
    Z.directive("appSlider", function() {
        return {
            restrict: "E",
            controller: "AppSliderController",
            controllerAs: "sliderCtrl",
            bindToController: !0,
            scope: {
                filter: "@",
                filtersList: "=",
                valuesList: "="
            },
            template: '<input type="range" class="range-between" data-slider-tooltip="hide"><span class="slider-min-max"><p class="min-value">{{sliderCtrl.dispMin | translate}} {{sliderCtrl.unit | translate}}</p><p class="max-value">{{sliderCtrl.dispMax | translate}} {{sliderCtrl.unit | translate}}</p></span>',
            link: function(a, b,
                c, d) {
                b.find(".range-between").slider({
                    min: d.Rb[0],
                    max: d.Rb[1],
                    value: [d.min, d.max],
                    step: d.step
                })
            }
        }
    });

    function ED(a, b, c, d) {
        this.b = a;
        this.j = b;
        this.g = d;
        (this.c = void 0 !== this.valuesList && 0 < this.valuesList.length) ? (this.Rb = [0, this.valuesList.length - 1], this.step = 1) : (this.Rb = [parseInt(c.min, 10) || 0, parseInt(c.max, 10) || 9999], this.step = parseInt(c.step, 10) || 100);
        this.min = this.Rb[0];
        this.max = this.Rb[1];
        this.unit = "unit" in c ? c.unit : "m";
        this.f = !0;
        this.dispMin = FD(this, this.min);
        this.dispMax = FD(this, this.max);
        GD(this);
        this.j.on("slide", function(a) {
            HD(this, a.value);
            this.b.$apply()
        }.bind(this));
        this.j.on("slideStop",
            this.i.bind(this));
        this.b.$root.$on("searchFilterClear", this.o.bind(this))
    }
    ED.$inject = ["$scope", "$element", "$attrs", "ngeoLocation"];

    function GD(a) {
        var b = a.filter ? a.g.Oa(a.filter) : "";
        if (b) {
            var c = b.split(",");
            2 == c.length && (a.c ? (b = a.valuesList.indexOf(c[0]), c = a.valuesList.indexOf(c[1]), -1 !== b && -1 !== c && HD(a, [b, c])) : (c = c.map(function(a) {
                return parseInt(a, 10)
            }), HD(a, c)))
        }
    }
    ED.prototype.i = function() {
        this.filter && (this.f && (this.min === this.Rb[0] && this.max === this.Rb[1] ? (delete this.filtersList[this.filter], this.g.Sa(this.filter)) : this.filtersList[this.filter] = [this.dispMin, this.dispMax], this.b.$apply()), this.f = !this.f)
    };
    ED.prototype.o = function() {
        HD(this, this.Rb)
    };

    function HD(a, b) {
        a.min = b[0];
        a.max = b[1];
        a.dispMin = FD(a, a.min);
        a.dispMax = FD(a, a.max)
    }

    function FD(a, b) {
        return a.c ? a.valuesList[b] : b
    }
    Z.controller("AppSliderController", ED);
    Z.directive("appStickyFilters", function() {
        return {
            restrict: "A",
            controller: "AppStickyFiltersController as stickyCtrl",
            link: function() {
                $(".show-documents-filters-phone").click(function() {
                    $("form[app-search-filters]").toggleClass("show");
                    $(".map-right").removeClass("show")
                });
                $(".toggle-map").click(function() {
                    $(".map-right").toggleClass("show")
                });
                $(".orange-btn.more-filters-btn").click(function() {
                    window.innerWidth < mB.zd.Ad && $(".documents-list-section").scrollTop(0)
                });
                $(".documents-list-section").scroll(function() {
                    var a =
                        $(".simple-filters").height() + 30,
                        b = $(".documents-list-section").scrollTop();
                    b > a && 0 === $(".sticky-filters-btn-container").length && 0 === $('#moreFilters[aria-expanded="true"]').length && ($(".more-filters-btn-container").addClass("sticky-filters-btn-container"), $("#moreFilters").addClass("sticky-filters-moreFilters"), ID());
                    0 === b && 0 < $(".sticky-filters-btn-container").length && ($(".more-filters-btn-container").removeClass("sticky-filters-btn-container"), $("#moreFilters").removeClass("overflow-scroll sticky-filters-moreFilters"),
                        ID())
                });
                $(window).resize(function() {
                    ID()
                })
            }
        }
    });

    function ID() {
        var a = $(".documents-list-section").width();
        $("#moreFilters").hasClass("sticky-filters-moreFilters") ? $("#moreFilters, .more-filters-btn-container").css("width", parseInt(a, 10)) : $("#moreFilters, .more-filters-btn-container").css("width", parseInt($(".filters").width(), 10))
    }
    Z.controller("AppStickyFiltersController", function() {});

    function JD(a, b, c) {
        function d(b) {
            if (void 0 !== e[b]) return e[b];
            var d = c.get("/static/partials/suggestions/" + b + ".html"),
                d = angular.element(d);
            e[b] = a(d);
            return e[b]
        }
        var e = {};
        return {
            restrict: "E",
            scope: !0,
            link: function(a, c) {
                a.highlight = function(a, c) {
                    return c ? b.trustAsHtml(a.replace(new RegExp(c, "ig"), '<span class="tt-highlight">$&</span>')) : b.trustAsHtml(a)
                };
                var e = a.$parent.doc;
                angular.extend(a, e);
                if (e.activities) {
                    for (var k = e.activities, l = "", n = 0; n < k.length; n++) l += '<span class="icon-' + k[n] + '"></span>';
                    a.$parent.activitiesHtml =
                        b.trustAsHtml(l)
                }
                d(e.documentType)(a, function(a) {
                    c.append(a)
                });
                a.$apply()
            }
        }
    }
    JD.$inject = ["$compile", "$sce", "$templateCache"];
    Z.directive("appSuggestion", JD);
    Z.directive("appUser", function() {
        return {
            restrict: "E",
            controller: "AppUserController",
            controllerAs: "userCtrl",
            bindToController: !0,
            templateUrl: "/static/partials/user.html"
        }
    });

    function KD(a, b, c, d, e, f) {
        this.auth = a;
        this.c = d;
        this.f = e;
        this.b = b;
        this.I = c;
        this.gettext = f;
        this.b.Cf("logout") && this.auth.ue()
    }
    KD.$inject = "appAuthentication ngeoLocation appAlerts appApi authUrl gettext".split(" ");
    KD.prototype.ri = function() {
        mA(this.f)
    };
    KD.prototype.showLogin = KD.prototype.ri;
    KD.prototype.cm = function() {
        vA(this.c).then(function() {
            this.I.lb(this.gettext("You have been disconnected"))
        }.bind(this))["finally"](function() {
            this.auth.ue();
            var a = this.b.yb(); - 1 === a.indexOf("/edit/") && -1 === a.indexOf("/account") || this.ri()
        }.bind(this))
    };
    KD.prototype.logout = KD.prototype.cm;
    KD.prototype.dd = function(a, b, c) {
        return c && !this.rb() ? !1 : this.auth.dd(a, b)
    };
    KD.prototype.hasEditRights = KD.prototype.dd;
    KD.prototype.rb = function() {
        return this.auth.rb()
    };
    KD.prototype.isModerator = KD.prototype.rb;
    Z.controller("AppUserController", KD);
    Z.directive("appUserProfile", function() {
        return {
            restrict: "A",
            scope: {
                userId: "@appUserProfile",
                lang: "@appUserProfileLang"
            },
            controller: "appUserProfileController",
            controllerAs: "upCtrl",
            bindToController: !0
        }
    });

    function LD(a, b, c, d) {
        this.I = d;
        d = "/profiles/data/{id}/{lang}".replace("{id}", this.userId.toString()).replace("{lang}", this.lang);
        b = b.get(d);
        b["catch"](function(a) {
            this.I.ha(this.I.gettext("An error occured while loading this profile"), a)
        }.bind(this));
        b.then(function(b) {
            var d = angular.element("#user-profile-data");
            d.html(b.data);
            c(d.contents())(a.$parent)
        }.bind(this))
    }
    LD.$inject = ["$scope", "$http", "$compile", "appAlerts"];
    Z.controller("appUserProfileController", LD);
    Z.directive("appVersions", function() {
        return {
            restrict: "A",
            scope: !0,
            controller: "appVersionsController",
            controllerAs: "versionsCtrl",
            bindToController: {
                documentType: "@",
                documentId: "@",
                lang: "@"
            }
        }
    });

    function MD(a) {
        this.b = a
    }
    MD.$inject = ["$scope"];
    MD.prototype.compare = function() {
        var a = "/{documentType}/diff/{id}/{lang}/{v1}/{v2}".replace("{documentType}", this.documentType).replace("{id}", this.documentId).replace("{lang}", this.lang).replace("{v1}", this.b.from).replace("{v2}", this.b.to);
        window.location.href = a
    };
    MD.prototype.compare = MD.prototype.compare;
    Z.controller("appVersionsController", MD);
    Z.directive("appViewDetails", function() {
        return {
            restrict: "A",
            controller: "AppViewDetailsController",
            controllerAs: "detailsCtrl",
            bindToController: !0,
            link: function(a, b, c, d) {
                ND(d, function() {
                    $(".photos").slick({});
                    OD(d)
                });
                PD(d);
                $(".pswp").on("click touchend", ".pswp__button--info", function(a) {
                    $(".image-infos, .photoswipe-image-container img").toggleClass("showing-info");
                    QD(d, $(a.target).attr("data-img-id"))
                });
                $(".pswp__button--arrow--left, .pswp__button--arrow--right").click(function() {
                    $(".showing-info").removeClass("showing-info")
                })
            }
        }
    });

    function RD(a, b, c, d, e, f, g, h, k, l) {
        this.documentService = e;
        this.documentService.fg(f);
        this.o = c;
        this.b = b;
        this.j = d;
        this.g = g;
        this.lang = l;
        this.f = h;
        this.c = a
    }
    RD.$inject = "$scope $compile $uibModal appApi appDocument documentData imageUrl discourseUrl appUrl appLang".split(" ");
    RD.prototype.jd = function(a, b) {
        var c = $(a).clone();
        null === b && (b = "lg");
        this.o.open({
            animation: !0,
            size: b,
            template: this.b(c)(this.c)
        })
    };
    RD.prototype.openModal = RD.prototype.jd;
    RD.prototype.uo = function() {
        $("html, body").animate({
            scrollTop: $("#discourse-comments").offset().top
        }, 1E3)
    };
    RD.prototype.scrollToComments = RD.prototype.uo;
    RD.prototype.Po = function(a) {
        window.innerWidth < mB.zd.Ad && a.target && ($(a.target).closest(".name-icon-value").find(".glyphicon-menu-right").toggleClass("rotate-arrow-down"), $(a.target).closest(".name-icon-value").find(".accordion").slideToggle())
    };
    RD.prototype.toggleTab = RD.prototype.Po;

    function OD(a) {
        (function(a) {
            function c(a) {
                a = a || window.event;
                a.preventDefault ? a.preventDefault() : a.returnValue = !1;
                if (a = e(a.target || a.srcElement, function(a) {
                        return a.tagName && "FIGURE" === a.tagName.toUpperCase()
                    })) {
                    for (var b = a.parentNode, c = a.parentNode.childNodes, d = c.length, g = 0, h, u = 0; u < d; u++)
                        if (1 === c[u].nodeType) {
                            if (c[u] === a) {
                                h = g;
                                break
                            }
                            g++
                        }
                    0 <= h && f(h, b);
                    return !1
                }
            }
            var d = function(a) {
                    a = a.childNodes;
                    for (var b = [], c, d, e, f, g = 0; g < a.length; g++) {
                        c = a[g];
                        d = c.children[0];
                        e = d.getAttribute("data-info-id");
                        f = d.getAttribute("title");
                        var h = new Image;
                        h.src = d.getAttribute("href");
                        e = {
                            html: cB(h.src, e.split("-")[1], "#image-"),
                            id: e.split("-")[1],
                            title: f
                        };
                        0 < d.children.length && (e.$p = d.children[0].getAttribute("src"));
                        e.df = c;
                        b.push(e)
                    }
                    return b
                }.bind(this),
                e = function l(a, b) {
                    return a && (b(a) ? a : l(a.parentNode, b))
                },
                f = function(a, b) {
                    var c = document.querySelectorAll(".pswp")[0],
                        e, f = d(b);
                    e = {
                        index: parseInt(a, 10),
                        Pp: 1,
                        jq: !0,
                        kq: !0,
                        Qp: !1,
                        Rp: !1,
                        Wp: !0,
                        Tp: !0,
                        Mp: !0,
                        ne: [3, 3],
                        pq: !1,
                        Sp: !1,
                        hq: !1,
                        Lp: !0,
                        Xp: b.getAttribute("data-pswp-uid"),
                        Yp: function(a) {
                            var b =
                                window.pageYOffset || document.documentElement.scrollTop;
                            a = f[a].df.getElementsByTagName("img")[0].getBoundingClientRect();
                            return {
                                x: a.left,
                                y: a.top + b,
                                nq: a.width
                            }
                        },
                        history: !1
                    };
                    if (!isNaN(e.index)) {
                        var g = new window.PhotoSwipe(c, window.PhotoSwipeUI_Default, f, e),
                            h = this.lang.S.currentLanguage;
                        g.listen("beforeChange", function() {
                            var a = g.currItem.id;
                            $(".pswp__button--info").attr("data-img-id", a);
                            $(".pswp__button--open").attr("href", "/images/" + a + "/" + h);
                            $(".pswp__button--edit").attr("href", "/images/edit/" + a + "/" +
                                h)
                        });
                        g.init();
                        $(".showing-info").removeClass("showing-info")
                    }
                }.bind(this);
            a = document.querySelectorAll(a);
            for (var g = 0, h = a.length; g < h; g++) a[g].setAttribute("data-pswp-uid", g + 1), a[g].onclick = c
        }).call(a, ".photos")
    }
    RD.prototype.gh = function() {
        var a = this.documentService.document.topic_id;
        if (null !== a) {
            var b = document.createElement("script");
            window.DiscourseEmbed = {
                discourseUrl: this.f,
                topicId: a
            };
            b.src = this.f + "javascripts/embed.js";
            document.getElementsByTagName("body")[0].appendChild(b)
        }
    };
    RD.prototype.getComments = RD.prototype.gh;
    RD.prototype.Xe = function() {
        var a = this.documentService.document,
            b = a.document_id,
            c = a.lang;
        this.j.Xe(b, c).then(function(a) {
            window.location = this.f + "t/" + b + "_" + c + "/" + a.data.topic_id
        }.bind(this), function(a) {
            400 == a.status && (a = a.data.errors[0].topic_id, void 0 !== a && (this.documentService.document.topic_id = a, this.gh()))
        }.bind(this))
    };
    RD.prototype.createTopic = RD.prototype.Xe;

    function ND(a, b) {
        var c = a.documentService.document.associations.images,
            d;
        for (d in c) {
            var e = a.c.$new(!0),
                f = "image-" + c[d].document_id;
            c[d].image_id = f;
            e.photo = c[d];
            var g = aB(c[d], a.g);
            $(".photos").append(g);
            a.b($("#" + f).contents())(e)
        }
        $('[class^="embedded_"]').each(function(a, b) {
            $(b).append("<app-slide-info></app-slide-info>");
            var c = $(b).find("img")[0].getAttribute("img-id"),
                d = $(b).find("figcaption")[0] ? $(b).find("figcaption")[0].textContent : "",
                e = this.c.$new(!0);
            e.image_id = "embedded-" + c;
            e.locales = [{
                title: d
            }];
            this.b($(b).contents())(e)
        }.bind(a));
        b()
    }
    RD.prototype.nn = function(a, b) {
        $(".showing-info").removeClass("showing-info");
        a = a.slice(0, -2) + "BI";
        for (var c = $(".embedded-image"), d = document.querySelectorAll(".pswp")[0], e = [], f, g = 0; g < c.length; g++) {
            var h = c[g].src.slice(0, -2) + "BI",
                k = parseInt($(c[g]).attr("img-id"), 10),
                l = void 0,
                n = c[g].nextSibling;
            "FIGCAPTION" === n.tagName && (l = n.textContent);
            h !== a ? (h = {
                html: cB(h, k, "#embedded-"),
                id: k,
                title: l
            }, e.push(h)) : (f = {
                html: cB(a, b, "#embedded-"),
                id: b,
                title: l
            }, e.push(f), f = g)
        }
        var q = new window.PhotoSwipe(d, window.PhotoSwipeUI_Default,
                e, {
                    index: f
                }),
            p = this.lang.S.currentLanguage;
        q.listen("beforeChange", function() {
            var a = q.currItem.id;
            $(".pswp__button--info").attr("data-img-id", a);
            $(".pswp__button--open").attr("href", "/images/" + a + "/" + p);
            $(".pswp__button--edit").attr("href", "/images/edit/" + a + "/" + p)
        });
        q.init()
    };
    RD.prototype.openEmbeddedImage = RD.prototype.nn;

    function QD(a, b) {
        0 < $(".showing-info").length && ($(".loading-infos").show(), $(".images-infos-container").hide(), xA(a.j, "images", b, a.lang.S.currentLanguage).then(function(a) {
            a = a.data;
            var b = this.c.$new(!0);
            angular.extend(b, a);
            this.b($(".image-infos"))(b);
            $(".loading-infos").hide();
            $(".images-infos-container").show()
        }.bind(a)))
    }

    function PD(a) {
        var b = $(".pswp__container")[0];
        b && (new MutationObserver(function() {
            $(".showing-info").removeClass("showing-info")
        }.bind(a))).observe(b, {
            attributes: !0,
            attributeFilter: ["style"]
        })
    }
    RD.prototype.Hn = function() {
        window.print()
    };
    RD.prototype.printPage = RD.prototype.Hn;
    Z.controller("AppViewDetailsController", RD);
    (function() {
        function a(a) {
            a.put("/static/partials/feed.html", '<div class="feed-title flex flexend-align" ng-show="!feedCtrl.busy && !feedCtrl.error && !feedCtrl.noFeed"> <span class=icon-news></span> <h3 translate>Activity feed</h3> </div> <h4 class="text-center text-danger" translate ng-show=feedCtrl.error>Sorry, there was an error while getting the feed.</h4> <h4 class="text-success text-center" translate ng-show=feedCtrl.busy>Loading feed, please wait...</h4> <h4 class="text-success text-center" translate ng-show=feedCtrl.noFeed>This user has no recent activity.</h4> <div class=feed-list ng-show="feedCtrl.documents.length > 0" infinite-scroll=feedCtrl.getDocumentsFromFeed() infinite-scroll-immediate-check=false infinite-scroll-distance=0.7 infinite-scroll-disabled="feedCtrl.busy || feedCtrl.error || feedCtrl.feedEnd || feedCtrl.noFeed"> <article class=feed-list-item ng-if=!feedCtrl.userId> <div class="timeline-bullet icon-outings" uib-tooltip="{{\'outing\'| translate}}" tooltip-placement=left></div> <div class="list-item vertical-align"> <button class="orange-btn btn" protected-url-btn url=/outings/add translate>add an outing</button> <button class="green-btn btn" ng-if=userCtrl.auth.isAuthenticated() app-loading app-load-preferences=outings app-load-preferences-url=/outings translate>See outings according to my preferences</button> <a href=/outings ng-if=!userCtrl.auth.isAuthenticated()> <button class="green-btn btn" translate>See outings</button> </a> </div> </article> <article class=feed-list-item ng-if=feedCtrl.userId> <div class="timeline-bullet icon-outings" uib-tooltip="{{\'outing\'| translate}}" tooltip-placement=left></div> <div class="list-item vertical-align"> <a ng-href=/outings#u={{feedCtrl.userId}}> <button class="orange-btn btn" translate>Show this user\'s outings</button> </a> </div> </article> <article class="feed-list-item flex" ng-repeat="doc in feedCtrl.documents track by doc.id" ng-init="type = feedCtrl.getDocumentType(doc.document.type);"> <div class="timeline-bullet icon-{{::type}}s" uib-tooltip="{{::type | translate}}" tooltip-placement=left></div> <p class=action-line> <span class=action ng-cloak> <b><a ng-href="/profiles/{{::doc[\'user\'][\'document_id\']}}/{{::doc[\'user\'][\'locales\'][0][\'lang\']}}">{{::doc[\'user\'][\'name\']}}</a></b> {{feedCtrl.createActionLine(doc) | translate}} </span> <span class="action date"> <span class=" glyphicon glyphicon-time"></span> <span>{{::doc.time | amUtc | amLocal | amTimeAgo }}</span> </span> </p> <div class="details flex wrap-row"> <div ng-if=::doc.image1 class="images flex"> <a class="thumbnail flex" ng-href=/images/{{::doc.image1.document_id}}/{{::doc.image1.locales[0].lang}} ng-style="(!doc.image2 && !doc.image3) && {\'width\': \'100%\'}"> <span class=image style="background-image: url({{feedCtrl.createImageUrl(doc.image1.filename, \'MI\')}})"></span> </a> <a class="thumbnail flex" ng-href=/images/{{::doc.image2.document_id}}/{{::doc.image2.locales[0].lang}} ng-if=::doc.image2> <span class=image style="background-image: url({{feedCtrl.createImageUrl(doc.image2.filename, \'MI\')}})"></span> </a> <a class="thumbnail flex" ng-href=/images/{{::doc.image3.document_id}}/{{::doc.image3.locales[0].lang}} ng-if=::doc.image3> <span class=image style="background-image: url({{feedCtrl.createImageUrl(doc.image3.filename, \'MI\')}})"></span> </a> </div> <div class="list-item {{::type}}s" ng-init="feed = true"> <app-card app-card-doc="::doc[\'document\']"></app-card> </div> </div> </article> <h4 class="text-center text-danger" translate ng-show=feedCtrl.error>Sorry, there was an error while getting the feed.</h4> <h4 class="text-success text-center" translate ng-show=feedCtrl.busy>Loading feed, please wait...</h4> <h4 class="text-success text-center" translate ng-show=feedCtrl.feedEnd>No more feed to load.</h4> </div> ');
            a.put("/static/partials/cotometer.html", '<div class=modal-body> <div class="content cotometer"> <div class=text translate> This tool estimates the technical difficulty of a ski route (ski rating). </div> <div class=full ng-init="cotmetCtrl.skiability = 0"> <label translate>Skiability</label> <div class=checkbox><label><input type=radio ng-model=cotmetCtrl.skiability ng-value=0 ng-change=cotmetCtrl.cotometerTechnicalGrade()> <span translate>Wide and constant</span></label></div> <div class=checkbox><label><input type=radio ng-model=cotmetCtrl.skiability ng-value=0.1 ng-change=cotmetCtrl.cotometerTechnicalGrade()> <span translate>1 or 2 complications (steeper or narrow section...)</span></label></div> <div class=checkbox><label><input type=radio ng-model=cotmetCtrl.skiability ng-value=0.2 ng-change=cotmetCtrl.cotometerTechnicalGrade()> <span translate>Very complex (steps, narrow sections, ridges...)</span></label></div> </div> <div id=average-slope class=full> <label translate>Average slope (degrees)</label> <input ng-model=cotmetCtrl.slope class=form-control placeholder="{{\'Average slope in degree\' | translate}}" type=number ng-change=cotmetCtrl.cotometerTechnicalGrade()> </div> <div class="alert alert-danger" ng-if=cotmetCtrl.errorSlope translate>The slope must be between 0 and 80 deg</div> <div id=elevation class=full> <label translate>height_diff</label> <input name=message ng-model=cotmetCtrl.elevation class=form-control type=number ng-change=cotmetCtrl.cotometerTechnicalGrade()> </div> <div class="alert alert-danger" ng-if=cotmetCtrl.errorElevation translate>The slope must be between 50 and 3000m high</div> <div class="text-center result" ng-if="cotmetCtrl.rating != undefined"> <span translate>Suggested rating</span> {{ cotmetCtrl.rating }} </div> </div> </div> <div class=modal-footer> <p> <button class="btn btn-success" type=button ng-click=cotmetCtrl.setResult() translate>Ok</button> <button class="btn btn-default" type=button ng-click=cotmetCtrl.closeDialog() translate>Cancel</button> <p> </div> ');
            a.put("/static/partials/contexthelp/xreport-modifications.html", "<p translate>Has this incident affected the way you will do things in the future?</p> <p translate>If yes, in what way? For example: apprehension, better preparation, not doing the activity anymore, changing your partner(s).</p> ");
            a.put("/static/partials/map/map.html", '<div class=map ngeo-map=::mapCtrl.map> <div class=map-upper-controls> <div class=map-recenter-tools ng-show=::mapCtrl.showRecenterTools> <app-geolocation app-geolocation-map=::mapCtrl.map></app-geolocation> <app-map-search app-map-search-map=::mapCtrl.map></app-map-search> </div> <div class=map-filter-switch ng-show=::mapCtrl.advancedSearch> <label> <input type=checkbox ng-model=mapCtrl.enableMapFilter> <p translate class=text>Filter on map extent</p> </label> </div> </div> <button type=button ng-show=mapCtrl.canReset() ng-click=mapCtrl.resetFeature() class="btn btn-primary btn-xs map-reset-feature" title="{{ \'Reset geometry\' | translate }}" translate>Reset geometry</button> <button type=button ng-show=mapCtrl.canDelete() ng-click=mapCtrl.deleteFeature() class="btn btn-primary btn-xs map-unset-feature" title="{{ \'Delete geometry\' | translate }}" translate>Delete geometry</button> <app-baselayer-selector app-baselayer-selector-map=::mapCtrl.map></app-baselayer-selector> </div> ');
            a.put("/static/partials/protectdocument.html", '<a ng-if="!protectCtrl.documentData[\'protected\']" ng-click=protectCtrl.protect()><span class="glyphicon glyphicon-lock"></span> <translate>Protect document</translate></a> <a ng-if="protectCtrl.documentData[\'protected\']" ng-click=protectCtrl.unprotect()><span class="glyphicon glyphicon-lock"></span> <translate>Unprotect document</translate></a> ');
            a.put("/static/partials/suggestions/articles.html", ' <span class=suggestion-text> <span class=suggestion-title> <span ng-bind-html="highlight(label, _query)"></span> </span><br> </span> <span class=icon-container><span ng-bind-html=::activitiesHtml></span></span>');
            a.put("/static/partials/cards/books.html", '<a ng-href={{cardCtrl.createURL()}} ng-init="doc = cardCtrl.doc; locale = cardCtrl.locale;"> <div class=list-item-info> <div class=list-item-title-lang> <span class=list-item-title>{{::locale.title}}</span> <span class=list-item-lang ng-if="cardCtrl.lang != locale.lang">({{::locale.lang}})</span> </div> <div class=article-categories> <span ng-repeat="book_type in ::doc[\'book_types\']" class="value book-type">{{book_type | translate}}{{$last ? \'\' : \', \'}}</span> </div> <div class="activities flex wrap-row margin-t-sm"> <span ng-repeat="activity in ::doc.activities | limitTo: 4" class="activity icon-{{::activity}}" uib-tooltip={{cardCtrl.translate(activity)}} tooltip-append-to-body=true></span> <span class="flex flexend-align show-more-activities" ng-if="doc.activities.length > 4 && !cardCtrl.remainingActivities" ng-click="$event.preventDefault(); cardCtrl.remainingActivities = true"> ...(+ {{::doc.activities.length - 4}}) </span> <span ng-if=cardCtrl.remainingActivities ng-repeat="activity in ::doc.activities | limitTo: (4 - doc.activities.length)" class="activity icon-{{::activity}}" uib-tooltip={{cardCtrl.translate(activity)}} tooltip-append-to-body=true> </span> </div> <div class=quality ng-if="::doc[\'quality\']" uib-tooltip="{{\'quality\'| translate}} : {{doc[\'quality\'] | translate}}" tooltip-append-to-body=true> <span class="quality-{{::doc[\'quality\']}}"></span> </div> <div class="author margin-t-sm" ng-if="::doc[\'author\']"> <span class="glyphicon glyphicon-pencil"></span> <span ng-if="::doc[\'author\']" class=value>{{::doc[\'author\']}}</span> </div> </div> </a> ');
            a.put("/static/partials/contexthelp/xreport-motivations.html", "<p translate>Describe why you select this outing and why you decide to engage.</p> <p translate>Consider the factors affecting your decision. For example: limited holidays, long journey, hut/hotel reservations, time already spent in preparation, scarceness of opportunity.</p>");
            a.put("/static/partials/advancedsearch.html", '<div class="list advanced-search" app-loading> <div id=card{{doc.document_id}} class=list-item ng-class="[searchCtrl.doctype, {\'highlight\': doc.document_id === searchCtrl.highlightId}]" ng-repeat="doc in searchCtrl.documents track by doc.document_id"> <app-card app-card-doc=::doc ng-mouseenter=searchCtrl.onMouseEnter(doc.document_id) ng-mouseleave=searchCtrl.onMouseLeave(doc.document_id)></app-card> </div> <div class=list-item ng-repeat="n in [].constructor(5) track by $index"></div> </div> <p translate class="text-warning text-center no-results" ng-class="{\'show\': searchCtrl.noResults}">No results</p> ');
            a.put("/static/partials/contexthelp/xreport-reduce_impact.html", "<p translate>If relevant, describe the factors which prevented the incident from being more serious:</p> <ul> <li><span translate>ability to avoid problems</span></li> <li><span translate>expertise in rescue techniques</span></li> <li><span translate>having foreseen plenty of spare time for the outing</span></li> <li><span translate>having the appropriate equipment</span></li> <li>etc.</li> </ul> ");
            a.put("/static/partials/contexthelp/xreport-conditions.html",
                "<p translate>Describe the information gathered before the outing and how these evolved once on route.</p> <p translate>This concerns the weather forecast, the avalanche risk reports, the amount of refreezing, the condition of the snow/ice/rock, reports from the previous days, etc.</p>");
            a.put("/static/partials/contexthelp/xreport-training.html", "<p translate>At the time of the incident, describe your technical level, your physical condition, how tired you had become just prior to the incident, and, if at altitude, how well you were acclimatized, etc.</p> ");
            a.put("/static/partials/cards/users.html", '<a ng-href={{cardCtrl.createURL()}} ng-init="doc = cardCtrl.doc; locale = cardCtrl.locale;"> <div class="list-item-info text-center"> <span class="icon-user margin-b-sm"></span> <span class=list-item-title>{{::doc.name}}</span> </div> </a> ');
            a.put("/static/partials/map/baselayerselector.html", '<div class=dropup> <button type=button class="btn btn-primary btn-xs" data-toggle=dropdown> {{bglayerCtrl.currentBgLayerSpec.name | translate}} <span class=caret></span> </button> <ul class=dropdown-menu role=menu> <li ng-repeat="layer in ::bglayerCtrl.bgLayerSpecs"> <a href ng-click=bglayerCtrl.setLayer(layer)>{{layer.name | translate}}</a> </li> </ul> </div> ');
            a.put("/static/partials/mapswitch.html", '<button class="btn btn-primary no-map-btn hidden-xs" ng-click=MapswitchCtrl.toggle() ng-if="!noList && !MapswitchCtrl.hideMap"> <span class="glyphicon glyphicon-globe"></span> <span translate>Hide map</span> </button> <button class="btn orange-btn btn-default no-list-btn hidden-xs" ng-if=MapswitchCtrl.hideMap ng-click="noList = false; mainCtrl.resizeMap(); MapswitchCtrl.toggle();"> <span class="glyphicon glyphicon-globe"></span> <span translate>Show map</span> </button> ');
            a.put("/static/partials/contexthelp/route-equipment_rating.html", '<p translate>This fields details the presence and quality of fixed anchors (bolts, pitons, spits) as protection points for rock or ice climbing.</p> <p><strong translate>P1 well bolted:</strong></p> <ul> <li translate>Sport climbing bolted with 10 or 12mm expansion bolts, chemical bolts, etc. The route may not be equiped for abseil.</li> <li translate>Required gear: 12 to 14 clippers, some of them lengthy, 1 to 2 slings to complete equipment in grade II pitches.</li> </ul> <p><strong translate>P2 partially bolted:</strong></p> <ul> <li translate>Classic route with abundant equipment of good quality, essentially pegs and a few expansion bolts. Nevertheless, it may be necessary to complete or strengthen the equipment in place.</li> <li translate>Classic or modern bolted route with expansion bolts or pegs only in the difficult unprotectable sections and at belays.</li> <li translate>Sport route on 8mm expansion bolts or other aging equipment.</li> <li translate>Required gear: It depends on the route. For a grade D or higher route, at least 8 nuts, 5 cams, 4 slings, long draws.</li> </ul> <p><strong translate>P3 some bolts:</strong></p> <ul> <li translate>Less classic route with little equipment (most protection must be placed and most belays must be built) and/or of very bad quality.</li> <li translate>Required gear: It depends on the route. For a grade D or higher route, at least a complete set of nuts and friends from Cams ranging from Camalot #0.3 to Camalot #3 - #4, 2 hammers, 6 pegs of various shapes.</li> </ul> <p><strong translate>P4 not bolted:</strong></p> <ul> <li translate>Route with no bolts or a few spurious points.</li> <li translate>Required gear: It depends on the route. For a grade D or higher route, at least that of the "some bolts" category.</li> </ul>');
            a.put("/static/partials/suggestions/routes.html", ' <span class=suggestion-text> <span class=suggestion-title> <span ng-bind-html="highlight(label, _query)"></span> </span><br> <div class="suggestion-info flex"> <div uib-tooltip="{{\'elevation_max\' | translate}}" ng-if=::elevation_max class=elevation_max> <span class="glyphicon glyphicon-sort-by-attributes rotate-180"></span> <span>{{::elevation_max}}&nbsp;m</span> </div> <span ng-if=::height_diff_up uib-tooltip="{{\'height_diff_up\'| translate}}"> <span class=icon-height_diff></span> <span>{{::height_diff_up}}&nbsp;m</span> </span> </div> </span> <span class=icon-container ng-bind-html=::activitiesHtml></span>');
            a.put("/static/partials/geomdownload.html", '<button class="btn green-btn btn-xs" ng-click=dlCtrl.downloadGpx($event)>GPX</button> <button class="btn green-btn btn-xs" ng-click=dlCtrl.downloadKml($event)>KML</button> ');
            a.put("/static/partials/contexthelp/xreport-avalanche_level.html", '<p translate>Avalanche danger level coming from the avalanche bulletin at the place and time of the event (the avalanche bulletin may indicate a different level depending on the altitude, orientation and time).</p> <p translate>If there are no avalanche bulletin or does not mention an avalanche danger level, select "unavailable".</p>');
            a.put("/static/partials/suggestions/users.html", ' <span class=suggestion-text> <span class=suggestion-title> <span class=icon-user></span> <span ng-bind-html="highlight(name, _query)"></span> </span><br> </span> ');
            a.put("/static/partials/contexthelp/activities.html", "<p translate>A document can be associated to one or more activities:</p> <ul> <li><strong translate>skitouring</strong> : <span translate>ski-touring and ski-mountaineering, snowboard-touring</span></li> <li><strong translate>snowshoeing</strong> : <span translate>snowshoeing</span></li> <li><strong translate>snow_ice_mixed</strong> : <span translate>alpinism with snow, ice or mixed climbing (in high mountain terrain)</span></li> <li><strong translate>mountain_climbing</strong> : <span translate>alpinism on rock, big-wall climbs in the moutain (bolted or not)</span></li> <li><strong translate>rock_climbing</strong> : <span translate>bouldering, single or multi-pitch climbing (bolted or not) on lowland cliffs and crags</span></li> <li><strong translate>ice_climbing</strong> : <span translate>lowland ice-falls, dry-tooling crags</span></li> <li><strong translate>hiking</strong> : <span translate>scrambling, hiking and trekking in the mountains (not in the lowlands), on or away from marked tracks and trails</span></li> <li><strong translate>paragliding</strong> : <span translate>descent with a paraglider</span></li> <li><strong translate>mountain_biking</strong> : <span translate>mountain_biking</span></li> <li><strong translate>via_ferrata</strong> : <span translate>via_ferrata</span></li> </ul> <p translate>The difference between rock climbing and alpine rock climbing is mainly based on the altitude of the summit, not on the type of equipment. In the Alps, the following rules apply:</p> <ul> <li translate>Altitude lower than 2100m: rock climbing</li> <li translate>Altitude between 2100m and 2400m: rock climbing or alpine rock climbing, but generally the former</li> <li translate>Altitude between 2400m and 2700m: rock climbing or alpine rock climbing, but generally the latter</li> <li translate>Altitude greater than 2700m: alpine rock climbing</li> <li translate>For altitudes between 2100m and 2700m, both activities can be selected in case of doubt.</li> </ul> ");
            a.put("/static/partials/contexthelp/xreport-event_type.html", '<p translate>Type of the occurred or potentially resulting event.</p> <p translate>More than one type may be selected.</p> <p translate>"fall while roped" must be used to clarify "avalanche", "fall of a person or roped party" and "fall in a crevasse", but can\'t be selected alone.</p>');
            a.put("/static/partials/blockaccount.html", '<a ng-if=!blockCtrl.accountBlocked ng-click=blockCtrl.block()><span class="glyphicon glyphicon-lock"></span> <translate>Block account</translate></a> <a ng-if=blockCtrl.accountBlocked ng-click=blockCtrl.unblock()><span class="glyphicon glyphicon-lock"></span> <translate>Unblock account</translate></a> ');
            a.put("/static/partials/alert.html", "<div class=alert ng-class=\"['alert-' + alertCtrl.type, 'alert-dismissible', 'fade', 'in']\" role=alert> <button type=button class=close ng-click=\"alertCtrl.close({$event: $event})\"> <span aria-hidden=true>&times;</span> <span class=sr-only>Close</span> </button> <h4 x-translate ng-show=alertCtrl.title>{{alertCtrl.title}}</h4> <div ng-bind-html=\"alertCtrl.msg | appTrustAsHtml\" class=alert-text translate></div> </div> ");
            a.put("/static/partials/suggestions/waypoints.html",
                ' <span class=suggestion-text> <span class=suggestion-title> <span ng-bind-html="highlight(label, _query)"></span> </span><br> <div class="suggestion-info flex" ng-if=::elevation> <div uib-tooltip="{{\'elevation\' | translate}}"> <span class="glyphicon glyphicon-sort-by-attributes rotate-180"></span> <span>{{::elevation}}m</span> </div> </div> </span> <span class=icon-container> <span class=icon-{{::waypoint_type}}></span> </span>');
            a.put("/static/partials/whatsnew.html", "<div ng-show=\"wfeedCtrl.documents.length > 0\" infinite-scroll=wfeedCtrl.getDocumentsFromFeed() infinite-scroll-immediate-check=false infinite-scroll-distance=0.7 infinite-scroll-disabled=\"wfeedCtrl.busy || wfeedCtrl.error || wfeedCtrl.feedEnd || wfeedCtrl.noFeed\"> <p class=\"text-success text-center\" ng-if=wfeedCtrl.userId> <span translate>Feed for user:</span> {{::wfeedCtrl.userId}} </p> <div class=table-responsive> <table class=\"text-center feedtable table table-condensed table-striped table-hover\"> <tr> <th class=text-center translate>title</th> <th class=text-center translate>type</th> <th class=text-center translate>written_at</th> <th class=text-center translate>quality</th> <th class=text-center translate>author</th> <th class=text-center translate>comment</th> </tr> <tr class=feed-list ng-repeat=\"doc in wfeedCtrl.documents track by doc.version_id\" ng-init=\"type = wfeedCtrl.getDocumentType(doc.document.type);\"> <td class=text-left> <a ng-href={{wfeedCtrl.getVersionUrl(doc)}}> <span ng-if=\"doc['document']['title']\">{{::doc['document']['title']}}</span> <span ng-if=\"!doc['document']['title']\" translate>Untitled</span> </a> <span ng-if=\"doc['lang'] != wfeedCtrl.currentLang\">({{::doc['lang']}})</span> </td> <td> <label class=\"badge {{type}}\"> <span class=\"glyphicon glyphicon-arrow-right\"></span>&nbsp;<span>{{type | translate}}</span> </label> </td> <td> {{::doc['written_at'] | amUtc | amLocal | amDateFormat:'L LTS'}} </td> <td ng-if=\"::doc['document']['quality']\" class=\"quality-{{::doc['document']['quality']}}\" tooltip-append-to-body=true uib-tooltip=\"{{'quality'| translate}} : {{::doc['document']['quality'] | translate}}\"> </td> <td data-container=body tooltip-append-to-body=true tooltip-placement=top> <a ng-href=\"/profiles/{{::doc['user']['user_id']}}/{{::doc['user']['lang']}}\">{{::doc['user']['name']}}</a> </td> <td>{{::doc['comment']}}</td> </tr> </table> </div> </div> <h4 class=\"text-center text-danger\" translate ng-show=wfeedCtrl.error>Sorry, there was an error while getting the feed.</h4> <h4 class=\"text-success text-center\" translate ng-show=wfeedCtrl.busy>Loading feed, please wait...</h4> <h4 class=\"text-success text-center\" translate ng-show=wfeedCtrl.feedEnd>No more feed to load.</h4> </div> ");
            a.put("/static/partials/mergedocuments.html", '<div class=modal-body> <div class="alert alert-warning"> <p class=text-center><strong translate>Warning: This action cannot be undone!</strong></p> </div> <p translate>Merging a source document with a target document transfers all associations of the source document to the target document, and sets up a redirection from the source to the target document.</p> <p><strong translate>Note that comments have to be transferred manually in Discourse before merging.</strong></p> <div class=document-to-merge> <p> <label translate>Source:</label> {{ mergeCtrl.sourceDocument.title }} <span ng-if="mergeCtrl.module === \'outings\' && mergeCtrl.sourceDocument.date_end"> {{::mergeCtrl.sourceDocument.date_end | date: \'dd/MM/yyyy\'}} </span> (<a ng-href="/{{ mergeCtrl.module }}/{{ mergeCtrl.sourceDocument.document_id }}" target=_blank>{{ mergeCtrl.sourceDocument.document_id }}</a>) </p> <p> <label translate>Target:</label> <span ng-if=!mergeCtrl.targetDocument class=merge-hint translate>Search for a target document (document id or title).</span> <span ng-if=mergeCtrl.targetDocument> {{ mergeCtrl.getTargetTitle() }} <span ng-if="mergeCtrl.module === \'outings\' && mergeCtrl.targetDocument.date_end"> {{::mergeCtrl.targetDocument.date_end | date: \'dd/MM/yyyy\'}} </span> (<a ng-href="/{{ mergeCtrl.module }}/{{ mergeCtrl.targetDocument.document_id }}" target=_blank>{{ mergeCtrl.targetDocument.document_id }}</a>) </span> </p> <app-simple-search app-select=mergeCtrl.selectTargetDocument(doc) app-simple-search-standard=false skip-association-filter=true ignore-document-id=mergeCtrl.sourceDocument.document_id dataset="{{ mergeCtrl.sourceDocument.type }}"></app-simple-search> </div> </div> <div class=modal-footer> <p> <button type=button ng-disabled=!mergeCtrl.targetDocument ng-click=mergeCtrl.mergeDocuments() class="btn btn-warning" translate>Merge documents</button> <button type=button ng-click=mergeCtrl.closeDialog() class="btn btn-default" translate>Cancel</button> </p> </div> ');
            a.put("/static/partials/suggestions/images.html", ' <span class=suggestion-text> <span class=suggestion-title> <span ng-bind-html="highlight(label, _query)"></span> </span><br> </span> ');
            a.put("/static/partials/contexthelp/xreport-avalanche_slope.html", '<p translate>Avalanche danger level coming from the avalanche bulletin at the place and time of the event (the avalanche bulletin may indicate a different level depending on the altitude, orientation and time).</p> <p translate>If there are no avalanche bulletin or does not mention an avalanche danger level, select "unavailable".</p>');
            a.put("/static/partials/contexthelp/xreport-increase_impact.html", "<p translate>If relevant, describe the factors which might have made the situation worse:</p> <ul> <li><span translate>remoteness</span></li> <li><span translate>level of commitment of the route</span></li> <li><span translate>not being prepared for an incident</span></li> <li><span translate>lack of experience of what to do in an incident/accident</span></li> <li><span translate>lack of equipment</span></li> <li>etc.</li> </ul> ");
            a.put("/static/partials/activityfilter.html", '<div class=activity-filter ng-if="afilterCtrl.activities.length > 1 && afilterCtrl.documents.length > 3"> <span translate>You may filter the list by selecting activities:</span> <div class="route-activities flex wrap-row"> <div ng-repeat="activity in afilterCtrl.activities" class=activity> <div> <div class=icon-{{activity}} class=icon- ng-click=afilterCtrl.toggle(activity) uib-tooltip="{{activity | translate}}" tooltip-append-to-body=true ng-class="{\'activity-selected\' : afilterCtrl.selectedActivities.indexOf(activity) > -1}"> </div> </div> </div> </div> </div> ');
            a.put("/static/partials/contexthelp/xreport-time_management.html", "<p translate>Time management:</p> <ul> <li translate>Had a timetable for the route been foreseen ?</li> <li translate>Did you maintain the schedule ?</li> <li translate>Was time a factor in causing the incident ?</li> </ul>");
            a.put("/static/partials/suggestions/xreports.html", " <span class=suggestion-text> <span class=suggestion-title> <span ng-bind-html=\"highlight(label, _query)\"></span> <span ng-if=::date>&nbsp;({{::date | date: 'dd/MM/yyyy'}})</span> </span><br> </span> ");
            a.put("/static/partials/slideinfo.html", '<div id={{image_id}}-slide> <div class=image-infos> <h3 translate>Infos</h3> <p class="loading-infos loading-gif-typehead"></p> <div class=images-infos-container> <p ng-show=date_time class=date> <span class="glyphicon glyphicon-calendar"></span> <span ng-bind="date_time | amUtc | amLocal | amDateFormat:\'L LTS\'"></span> </p> <p ng-show=locales[0].title class=title><span class="glyphicon glyphicon-tag"></span><span ng-bind=locales[0].title></span></p> <p ng-show=locales[0].description class=description ng-bind=locales[0].description></p> <p ng-show=image_type class=image-type><span class="glyphicon glyphicon-copyright-mark"></span><label x-translate ng-bind=image_type></label></p> <div ng-show="iso_speed || focal_length || exposure_time || camera_name" class=settings> <label translate>Settings</label> <ul> <li ng-show=camera_name><span ng-bind=camera_name></span></li> <li ng-show=exposure_time uib-tooltip="{{\'exposure_time\'| translate}}"><span ng-bind="exposure_time + \'s\'"></span></li> <li ng-show=fnumber uib-tooltip="{{\'fnumber\'| translate}}"><span ng-bind=" \'f/\' + fnumber"></span></li> <li ng-show=focal_length uib-tooltip="{{\'focal_length\'| translate}}"><span ng-bind="focal_length + \' mm\'"></span></li> <li ng-show=iso_speed uib-tooltip="{{\'iso_speed\'| translate}}"><span ng-bind="iso_speed + \' ISO\'"></span></li> <li ng-show="width && height" uib-tooltip="{{\'resolution\'| translate}}"><span ng-bind=height></span> x <span ng-bind=width></span> <span translate>pixels</span></li> </ul> </div> </div> </div> </div> ');
            a.put("/static/partials/cards/outings.html", '<a ng-href={{cardCtrl.createURL()}} ng-init="doc = cardCtrl.doc; locale = cardCtrl.locale;" class=flex> <div class="flex column date-outing-item-infos"> <div class="flex wrap-row nowrap grow outing-item-infos"> <div class=date-icon> <span class=day>{{ ::doc[\'date_end\'] | date: \'dd\' }}</span> <span class=month>{{ ::doc[\'date_end\'] | amDateFormat: \'MMM\' }}</span> <span class=year>{{ ::doc[\'date_end\'] | date: \'yyyy\'}}</span> </div> <div class=list-item-info> <div class=list-item-title-lang> <span class=list-item-title><p>{{::locale.title}}</p></span> <span class=list-item-lang ng-if="cardCtrl.lang != locale.lang">({{::locale.lang}})</span> </div> <div class="center-items-align location" ng-if="::doc[\'areas\']"> <span class=value>{{::cardCtrl.showArea(doc[\'areas\'])}}</span> </div> <div class="flex center-items-align"> <span class=elevation ng-if=::doc.elevation_max uib-tooltip="{{\'elevation_max\' | translate}}"> <span class="value-title glyphicon glyphicon-sort-by-attributes rotate-180"></span> <span class=value>{{::doc[\'elevation_max\']}}&nbsp;m</span> </span> </div> </div> </div> <div class=activity-author> <div class="activities flex wrap-row"> <span ng-repeat="activity in ::doc.activities | limitTo: 3" class="activity icon-{{::activity}}" uib-tooltip={{cardCtrl.translate(activity)}} tooltip-append-to-body=true></span> <span class="flex flexend-align show-more-activities" ng-if="doc.activities.length > 3 && !cardCtrl.remainingActivities" ng-click="$event.preventDefault(); cardCtrl.remainingActivities = true"> ...(+ {{::doc.activities.length - 3}}) </span> <span ng-if=cardCtrl.remainingActivities ng-repeat="activity in ::doc.activities | limitTo: (3 - doc.activities.length)" class="activity icon-{{::activity}}" uib-tooltip={{cardCtrl.translate(activity)}} tooltip-append-to-body=true> </span> </div> <div class=condition-rating ng-class="::doc[\'condition_rating\']" uib-tooltip="{{\'condition_rating\' | translate}} : {{doc[\'condition_rating\'] | translate}}" tooltip-append-to-body=true> </div> <div class="outing-author flex baseline-align" ng-if=!feed> <span class=author-name>{{::doc[\'author\'][\'name\']}}</span> </div> </div> </div> <div class=quality ng-if="::doc[\'quality\']" uib-tooltip="{{\'quality\' | translate}} : {{doc[\'quality\'] | translate}}" tooltip-append-to-body=true> <span class="quality-{{::doc[\'quality\']}}"></span> </div> </a> ');
            a.put("/static/partials/contexthelp/xreport-description.html", "<p translate>Details of the actual outing and the incident.</p> <p translate>Describes what happened during the outing.</p> <p translate>If you have already written up your outing, you only need to describe the incident, then link it to your outing report (after first uploading it).</p>");
            a.put("/static/partials/simplesearch.html", '<span class="glyphicon glyphicon-search search-icon"></span> <input class="search form-control" type=search placeholder="{{\'Search ...\'  | translate}}" ngeo-search=searchCtrl.options ngeo-search-datasets=searchCtrl.datasets ngeo-search-listeners=searchCtrl.listeners> ');
            a.put("/static/partials/map/search.html", "<input type=search placeholder=\"{{'Recenter on...' | translate}}\" class=form-control ngeo-search=searchCtrl.options ngeo-search-datasets=searchCtrl.datasets ngeo-search-listeners=searchCtrl.listeners>");
            a.put("/static/partials/suggestions/outings.html", ' <span class=suggestion-text> <span class=suggestion-title> <span ng-bind-html="highlight(label, _query)"></span> <span ng-if=::date_end>&nbsp;({{::date_end}})</span> </span><br> <div class="suggestion-info flex"> <div uib-tooltip="{{\'elevation_max\' | translate}}" ng-if=::elevation_max> <span class="glyphicon glyphicon-sort-by-attributes rotate-180"></span> <span>{{::elevation_max}}&nbsp;m</span> </div> </div> </span> <span class=icon-container ng-bind-html=::activitiesHtml></span>');
            a.put("/static/partials/contexthelp/xreport-author_status.html", "<p translate>If the number of people affected is 0, consider your involvement if the incident had taken place.</p> <p translate>If it is impossible to know whether you would have been affected or not, leave the field empty.</p>");
            a.put("/static/partials/suggestions/areas.html", ' <span class=suggestion-text> <span class=suggestion-title> <span ng-bind-html="highlight(label, _query)"></span> </span><br> <span class=suggestion-info> <span>{{::area_type | translate}}</span> </span> </span> ');
            a.put("/static/partials/cards/xreports.html", '<a ng-href={{cardCtrl.createURL()}} ng-init="doc = cardCtrl.doc; locale = cardCtrl.locale;"> <div class=list-item-info> <div class=list-item-title-lang> <span class=list-item-title>{{::locale.title}}</span> <span class=list-item-lang ng-if="cardCtrl.lang != locale.lang">({{::locale.lang}})</span> </div> <div class="categories margin-t-sm margin-b-sm"> <span class="glyphicon glyphicon-warning-sign"></span> <b class=value ng-repeat="type in doc[\'event_type\']">{{type | translate}}{{$last ? \'\' : \', \'}}</b> </div> <div class="flex wrap-row"> <span class=elevation> <span class="value-title glyphicon glyphicon-sort-by-attributes rotate-180"></span> <span class=value ng-if="::doc[\'elevation\']">{{::doc[\'elevation\']}}&nbsp;m</span> </span> <span class=date> <span class="value-title glyphicon glyphicon-time"></span> <span class=value ng-if="::doc[\'date\']">{{::doc[\'date\'] | date: \'dd/MM/yyyy\'}}</span> </span> </div> <div class="activities flex wrap-row margin-t-sm"> <span ng-repeat="activity in ::doc.activities | limitTo: 4" class="activity icon-{{::activity}}" uib-tooltip="{{ cardCtrl.translate(activity)}}"></span> <span class="flex flexend-align show-more-activities" ng-if="doc.activities.length > 4 && !cardCtrl.remainingActivities" ng-click="$event.preventDefault(); cardCtrl.remainingActivities = true"> ...(+ {{::doc.activities.length - 4}}) </span> <span ng-if=cardCtrl.remainingActivities ng-repeat="activity in ::doc.activities | limitTo: (4 - doc.activities.length)" class="activity icon-{{::activity}}" uib-tooltip={{cardCtrl.translate(activity)}}> </span> </div> <div class=quality ng-if="::doc[\'quality\']" uib-tooltip="{{\'quality\'| translate}} : {{doc[\'quality\'] | translate}}" tooltip-placement=left> <span class="quality-{{::doc[\'quality\']}}"></span> </div> </div> </a> ');
            a.put("/static/partials/contexthelp/route-exposition_rock_rating.html", "<p translate>The Runout grade based on the consequence of a fall. The climber will not be hurt in the first three levels, therefore, the difference between E1, E2 and E3 is the length of the fall (or the distance between pro). For the higher levels (E4, E5, E6) the climber will get hurt and the levels represent the increasing severity of the consequences, from a broken ankle to death. The Ex for the french word exposition, which can mean danger.</p> <ul> <li><strong>E1</strong>: <span translate>Over protected with bolts/pitons or good, solid protections minimum every meter ground up. No obligatory move.</span></li> <li><strong>E2</strong>: <span translate>Well protected with bolts/pitons or good, solid protections ground up.</span></li> <li><strong>E3</strong>: <span translate>Falls will be long but will not cause injury. Bolts or protection will be widely spaced.</span></li> <li><strong>E4</strong>: <span translate>The fall could cause slight injuries even if bolts or protections are not widely spaced.</span></li> <li><strong>E5</strong>: <span translate>The fall will cause serious injuries. An E5 might suggest widely-spaced bolts, just enough lousy protections or a small grounder.</span></li> <li><strong>E6</strong>: <span translate>The same as E5 but consider yourself lucky if you plummet off an E6 without dying, even when properly protected.</span></li> </ul> <p translate>See also help on <a href=/articles/133323#exposition>runout grade</a></p>");
            a.put("/static/partials/imageuploader.html", ' <div ng-if="uplCtrl.files.length === 0" ngf-drop ngf-select ng-model=uplCtrl.files class=drop-box ngf-drag-over-class="\'dragover\'" ngf-multiple=true ngf-keep="\'distinct\'" ngf-fix-orientation=true ngf-allow-dir=true ngf-resize-if="uplCtrl.resizeIf($file, $width, $height)" ngf-resize=uplCtrl.resizeOptions accept=image/* ngf-pattern="\'image/*\'"> <span translate>Drop images here or click to upload</span> </div> <div ng-show="uplCtrl.files.length > 0" class=images-container> <div ng-repeat="file in uplCtrl.files track by $index" class="uploaded-image {{$index}}" ng-show=file> <div class=img-container style="background-image: url({{file.src}})"> <div class=exif> <p ng-if=file.metadata.date_time> <span class="glyphicon glyphicon-calendar"></span> <span>{{file.metadata.date_time | amUtc | amLocal | amDateFormat:\'L LTS\'}}</span> </p> <p><span class="glyphicon glyphicon-certificate"></span><span>f/{{file.metadata.fnumber}}</span>&nbsp; <span ng-if=file.metadata.exposure_time>1/{{1/file.metadata.exposure_time}}&nbsp;s</span> &nbsp; <span ng-if=file.metadata.focal_length>{{file.metadata.focal_length}}&nbsp;mm</span> &nbsp; <span ng-if=file.metadata.iso_speed>{{file.metadata.iso_speed}}&nbsp;ISO</span> </p> <p ng-if=file.metadata.geometry> <span class="glyphicon glyphicon-map-marker"></span><b>{{file.exif.geo_label}}</b> </p> </div> </div> <div class=img-data> <input type=text class=form-control ng-model=file.metadata.title placeholder="{{\'title\' | translate}}" ng-change="uplCtrl.rename(file, file.metadata.title)"> <div class="image-attributes btn-group" ng-show="file[\'processed\']"> <div class=btn-group> <button class="btn btn-default dropdown-toggle" ng-class="{\'btn-success\': file.metadata.activities.length > 0}" type=button data-toggle=dropdown> <label translate>activities</label> <span class="glyphicon glyphicon-menu-down"></span> </button> <ul class="dropdown-menu multiselect-box type"> <li ng-repeat="activity in activities"> <a ng-click="uplCtrl.selectOption(file.metadata, \'activities\', activity, $event)"> <input type=checkbox ng-checked="file.metadata.activities.indexOf(activity) > -1"> <span class=activity>{{activity| translate}}</span> </a> </li> </ul> </div> <div class=btn-group> <button class="btn btn-default dropdown-toggle" ng-class="{\'btn-success\': file.metadata.categories.length > 0}" type=button data-toggle=dropdown> <label translate>categories</label> <span class="glyphicon glyphicon-menu-down"></span> </button> <ul class="dropdown-menu multiselect-box type"> <li ng-repeat="category in categories"> <a ng-click="uplCtrl.selectOption(file.metadata, \'categories\', category, $event)"> <input type=checkbox> <span class=category>{{category| translate}}</span> </a> </li> </ul> </div> <div class=btn-group> <button class="btn btn-default dropdown-toggle" ng-class="{\'btn-success\': file.metadata.image_type}" type=button data-toggle=dropdown> <label translate>type</label> <span class="glyphicon glyphicon-menu-down"></span> </button> <ul class=dropdown-menu> <li ng-repeat="type in uplCtrl.filterImageTypes(types)"> <div class=radio> <label><input type=radio ng-model=file.metadata.image_type ng-value=type>{{type | translate}}</label> </div> </li> </ul> </div> <div class=btn-group> <button class="btn btn-default remove-image-btn" ng-click=uplCtrl.deleteImage($index) type=button class="btn btn-danger"> <span class="glyphicon glyphicon-trash"></span> </button> </div> </div> </div> <div class=progress ng-show="!file[\'processed\'] && !file[\'failed\']"> <div class="progress-bar progress-bar-striped active" role=progressbar style=width:{{file.progress}}%;> <span ng-show="file.progress < 100">{{file.progress | number : 0}}%</span> <span ng-show="file.progress >= 100" translate>Processing</span> </div> </div> <div class=text-danger ng-show="file[\'failed\']"> <span translate>Error while uploading the image:</span> {{file[\'failed\']}}</span> </div> <button class="btn btn-danger" type=button ng-click=uplCtrl.abortFileUpload(file) ng-show="!file[\'processed\'] && !file[\'failed\']" translate>Abort</button> <button class="btn btn-primary" type=button ng-click=uplCtrl.retryFileUpload(file) ng-show="file[\'failed\']" translate>Retry</button> <button class="btn btn-danger" type=button ng-click=uplCtrl.abortFileUpload(file) ng-show="file[\'failed\']" translate>Cancel</button> </div> <div class="upload-file uploaded-image drop-box" ngf-drop ngf-select multiple ng-model=uplCtrl.files class=drop-box ngf-drag-over-class="\'dragover\'" ngf-multiple=true ngf-keep="\'distinct\'" ngf-fix-orientation=true ngf-allow-dir=true ngf-resize-if="uplCtrl.resizeIf($file, $width, $height)" ngf-resize=uplCtrl.resizeOptions accept=image/* ngf-pattern="\'image/*\'"> <button class="orange-btn btn" type=button translate>Add images</button> </div> </div> <button class="btn btn-warning" type=button ng-click=imageModalCtrl.close() ng-class="{disabled: uplCtrl.saving}" translate>Close</button> <button class="btn btn-primary" type=button ng-click=imageModalCtrl.save() ng-class="{disabled: uplCtrl.saving}" ng-show=uplCtrl.areAllUploaded translate>Save</button> ');
            a.put("/static/partials/suggestions/books.html", ' <span class=suggestion-text> <span class=suggestion-title> <span ng-bind-html="highlight(label, _query)"></span> </span><br> </span>');
            a.put("/static/partials/contexthelpmodal.html", '<div class=modal-header> <button class="btn gray-btn glyphicon glyphicon-remove" type=button ng-click=contextHelpModalCtrl.close()></button> <h3 class=modal-title id=modal-title>{{::contextHelpModalCtrl.title}}</h3> </div> <div class=modal-body id=modal-body> <div ng-bind-html=::contextHelpModalCtrl.content></div> </div> <div class=modal-footer> <button class="btn gray-btn" type=button ng-click=contextHelpModalCtrl.close()><span translate>Close</span></button> </div> ');
            a.put("/static/partials/suggestions/create.html", '<div class="header empty" translate>No match?</div> <p class=tt-suggestion protected-url-btn url=/waypoints/add><span class=suggestion-text translate>Create a new waypoint</span><span class="glyphicon glyphicon-plus-sign text-right"></span></p> <p class=tt-suggestion protected-url-btn url=/routes/add><span class=suggestion-text translate>Create a new route</span><span class="glyphicon glyphicon-plus-sign text-right"></span></p> <p class=tt-suggestion protected-url-btn url=/articles/add><span class=suggestion-text translate>Create a new article</span><span class="glyphicon glyphicon-plus-sign text-right"></span></p> <p class=tt-suggestion protected-url-btn url=/books/add><span class=suggestion-text translate>Create a new book</span><span class="glyphicon glyphicon-plus-sign text-right"></span></p> ');
            a.put("/static/partials/contexthelp/xreport-safety.html", "<p translate>Types of belay and protection used, verifications between climbers, snowpack stability tests, testing of avalanche transceivers, etc.</p>");
            a.put("/static/partials/deletedocument.html", '<div class=modal-body> <div class="alert alert-warning"> <p class=text-center><strong translate>Warning: This action cannot be undone!</strong></p> </div> <p ng-if=!deldocCtrl.lang translate class=text-center>Are you sure you want to delete this document?</p> <p ng-if=deldocCtrl.lang translate class=text-center>Are you sure you want to delete this locale?</p> <p class=text-center> <strong> {{ deldocCtrl.documentData.title }} <span ng-if="deldocCtrl.module === \'outings\' && deldocCtrl.documentData.date_end"> {{::deldocCtrl.documentData.date_end | date: \'dd/MM/yyyy\'}} </span> </strong> </p> </div> <div class=modal-footer> <p> <button class="btn btn-warning" type=button ng-click=deldocCtrl.deleteDocument() ng-if=!deldocCtrl.lang translate>yes</button> <button class="btn btn-warning" type=button ng-click=deldocCtrl.deleteLocale() ng-if=deldocCtrl.lang translate>yes</button> <button class="btn btn-default" type=button ng-click=deldocCtrl.closeDialog() translate>Cancel</button> <p> </div> ');
            a.put("/static/partials/contexthelp/xreport-place.html", "<p translate>Information on the location of the incident.</p> <p translate>Mark the location on the map above, even if you cannot do very accurately, (in which case give more details here).</p> <p translate>After completing the report, you can associate it to a route, a climbing site or an outing.</p>");
            a.put("/static/partials/cards/waypoints.html", '<a ng-href={{cardCtrl.createURL()}} ng-init="doc = cardCtrl.doc; locale = cardCtrl.locale;"> <div class="waypoint-items-infos flex wrap-row center-items-align"> <span class="{{\'icon-\' + doc[\'waypoint_type\']}} waypoint-type" uib-tooltip="{{doc[\'waypoint_type\'] | translate}}" tooltip-append-to-body=true> </span> <div class=list-item-info> <div class=list-item-title-lang> <span class=list-item-title><p>{{::locale.title}}</p></span> <span class=list-item-lang ng-if="cardCtrl.lang != locale.lang">({{::locale.lang}})</span> </div> <div class=waypoint-infos> <span class="waypoint-elevation margin-r-sm margin-b-sm" uib-tooltip="{{\'elevation_max\'| translate}}" tooltip-append-to-body=true> <span class="value-title glyphicon glyphicon-sort-by-attributes rotate-180" ng-if="::doc[\'elevation\']"></span> <span class=value ng-if="::doc[\'elevation\']">{{::doc[\'elevation\']}}&nbsp;m</span> </span> <span class=location ng-if="::doc[\'areas\']"> <span class=value>{{::cardCtrl.showArea(doc[\'areas\'])}}</span> </span> </div> <div class=flex ng-if="::doc[\'slackline_types\']"> <span class="value slackline-type" ng-repeat="type in ::doc.slackline_types"> {{::type | translate}}{{$last ? \'\' : \',&nbsp;\'}} </span> </div> <div class=quality ng-if="::doc[\'quality\']" uib-tooltip="{{\'quality\'| translate}} : {{doc[\'quality\']| translate}}" tooltip-append-to-body=true> <span class="quality-{{::doc[\'quality\']}}"></span> </div> </div> </div> </a> ');
            a.put("/static/partials/cards/articles.html", '<a ng-href={{cardCtrl.createURL()}} ng-init="doc = cardCtrl.doc; locale = cardCtrl.locale;"> <div class="article-item-infos list-item-info"> <div class=list-item-title-lang> <span class=list-item-title>{{::locale.title}}</span> <span class=list-item-lang ng-if="cardCtrl.lang != locale.lang">({{::locale.lang}})</span> </div> <b class="article-type margin-t-sm margin-b-sm"><span class="green-text glyphicon glyphicon-tag margin-r-sm"></span>{{doc[\'article_type\'] | translate}}</b> <div class=article-categories> <b ng-repeat="category in ::doc.categories" class=value>{{category | translate }}{{$last ? \'\' : \', \'}}</b> </div> <div class="activities flex wrap-row margin-t-sm"> <span ng-repeat="activity in ::doc.activities | limitTo: 4" class="activity icon-{{::activity}}" uib-tooltip={{cardCtrl.translate(activity)}} tooltip-append-to-body=true></span> <span class="flex flexend-align show-more-activities" ng-if="doc.activities.length > 4 && !cardCtrl.remainingActivities" ng-click="$event.preventDefault(); cardCtrl.remainingActivities = true"> ...(+ {{::doc.activities.length - 4}}) </span> <span ng-if=cardCtrl.remainingActivities ng-repeat="activity in ::doc.activities | limitTo: (4 - doc.activities.length)" class="activity icon-{{::activity}}" uib-tooltip={{cardCtrl.translate(activity)}} tooltip-append-to-body=true> </span> </div> <div class=quality ng-if="::doc[\'quality\']" uib-tooltip="{{\'quality\'| translate}} : {{doc[\'quality\'] | translate}}" tooltip-append-to-body=true> <span class="quality-{{::doc[\'quality\']}}"></span> </div> </div> </a> ');
            a.put("/static/partials/contexthelp/xreport-risk.html", "<p translate>Level of awareness and (re) evaluation of the risks:</p> <ul> <li translate>Have you (re) evaluated the risks at each change in the situation?</li> <li translate>What factors might have affected your awareness, such as tiredness, stress, relaxing having passed the main difficulties or on the descent, on a section reputed to be easy, presence of footprints or other people, complete confidence in the group, etc.</li> </ul>");
            a.put("/static/partials/gpxupload.html",
                '<div class=upload-file> <button class="orange-btn btn" type=button> <span translate>Upload a GPS track</span> <span class="glyphicon glyphicon-upload"></span> </button> <input type=file ngeo-filereader=gpxCtrl.fileContent ngeo-filereader-supported=gpxCtrl.fileReaderSupported> </div> ');
            a.put("/static/partials/suggestions/empty.html", "<div class=empty translate>No results</div> ");
            a.put("/static/partials/pagination.html", '<div ng-if="pageCtrl.total > pageCtrl.limit" class=pagination-block> <span class=page-numbers>{{pageCtrl.offset + 1}} - {{(pageCtrl.offset + pageCtrl.limit < pageCtrl.total) ? pageCtrl.offset + pageCtrl.limit : pageCtrl.total}}/{{pageCtrl.total}}</span> <ul> <li ng-if="pageCtrl.offset > 0"><a class=btn ng-click=pageCtrl.goToFirst();><span class="glyphicon glyphicon-step-backward"></span></a></li> <li ng-if="pageCtrl.offset > 0"><a class=btn ng-click=pageCtrl.goToPrev();><span class="glyphicon glyphicon-menu-left"></span></a></li> <li ng-if="pageCtrl.offset + pageCtrl.limit < pageCtrl.total"><a class=btn ng-click=pageCtrl.goToNext();><span class="glyphicon glyphicon-menu-right"></span></a></li> <li ng-if="pageCtrl.showGoToLastPage && pageCtrl.offset + pageCtrl.limit < pageCtrl.total"> <a class=btn ng-click=pageCtrl.goToLast();><span class="glyphicon glyphicon-step-forward"></span></a> </li> </ul> </div> ');
            a.put("/static/partials/follow.html", '<div ng-if=followCtrl.canFollow()> <div ng-show=followCtrl.followed ng-click=followCtrl.toggle() class="float-button float-followed" tooltip-placement=left uib-tooltip="{{\'Stop following this contributor\' | translate}}"> <span class="glyphicon glyphicon-star"></span> <p class=float-button-text translate>Unfollow</p> </div> <div ng-hide=followCtrl.followed ng-click=followCtrl.toggle() class="float-button float-notfollowed" tooltip-placement=left uib-tooltip="{{\'See the activity of this contributor in your feed\' | translate}}"> <span class="glyphicon glyphicon-star-empty"></span> <p class=float-button-text translate>Follow</p> </div> </div> ');
            a.put("/static/partials/map/geolocation.html", '<button class="btn btn-primary btn-xs" ngeo-mobile-geolocation ngeo-mobile-geolocation-map=::geoCtrl.map ngeo-mobile-geolocation-options=::geoCtrl.mobileGeolocationOptions tooltip-placement=bottom uib-tooltip="{{\'Recenter on your current position\' | translate}}"><span class="glyphicon glyphicon-screenshot"></span> </button> ');
            a.put("/static/partials/doctypeselector.html", '<select class="form-control select-document" ng-model=doctypeCtrl.selected ng-options="type as mainCtrl.translate(type.name) for type in doctypeCtrl.doctypes track by type.id" ng-change=doctypeCtrl.redirect()></select> ');
            a.put("/static/partials/user.html", '<div class=btn-group id=user-menu> <button type=button class="btn btn-primary dropdown-toggle" data-toggle=dropdown aria-haspopup=true aria-expanded=false ng-if=!userCtrl.auth.isAuthenticated() ng-click=userCtrl.showLogin()> <span class=login-text translate>Login</span> <span class="glyphicon glyphicon-log-in"></span> </button> <button type=button class="btn btn-primary dropdown-toggle" data-toggle=dropdown aria-haspopup=true aria-expanded=false ng-if=userCtrl.auth.isAuthenticated()> <span class=user-info ng-show=userCtrl.auth.userData.username>{{userCtrl.auth.userData.username}}</span> <span class=icon-user ng-show=userCtrl.auth.userData.username></span> <span class=caret></span> </button> <ul class=dropdown-menu ng-show=userCtrl.auth.isAuthenticated()> <li><a translate ng-href=/profiles/{{userCtrl.auth.userData.id}}>My profile</a></li> <li><a translate href=/account>My account</a></li> <li><a translate href=/preferences>My preferences</a></li> <li><a translate ng-href=/outings#u={{userCtrl.auth.userData.id}}>My outings</a></li> <li><a translate href=/following>My followed users</a></li> <li><a translate href=/mailinglists>My mailing lists</a></li> <li><a translate ng-click=userCtrl.logout() class=logout>Logout</a></li> </ul> </div> ');
            a.put("/static/partials/cards/images.html", "<a ng-href={{cardCtrl.createURL()}} ng-init=\"doc = cardCtrl.doc; locale = cardCtrl.locale;\"> <div class=\"image margin-b-sm\" style=\"background-image: url({{cardCtrl.createImg()}});\" ng-style=\"{'height': !locale.title ? '100%' : '150px'}\"></div> <div class=list-item-info> <div class=list-item-title-lang ng-if=locale.title> <span class=list-item-title><p>{{::locale.title}}</p></span> <span class=list-item-lang ng-if=\"cardCtrl.lang != locale.lang\">({{::locale.lang}})</span> </div> <div class=outing-date>{{ ::doc['date_time'] | date: 'dd/MM/yyyy'}}</div> <div ng-if=\"doc['author']\"><span class=value-title translate>author</span>: <span class=value>{{::doc['author']}}</span></div> </div> </a> ");
            a.put("/static/partials/suggestions/toomany.html", "<p class=tt-suggestion translate>Too many results: please refine your search.</p> ");
            a.put("/static/partials/cards/areas.html", "<a ng-href={{cardCtrl.createURL()}} ng-init=\"doc = cardCtrl.doc; locale = cardCtrl.locale;\"> <div class=list-item-info> <div class=list-item-title-lang> <span class=list-item-title>{{::locale.title}}</span> <span class=list-item-lang ng-if=\"cardCtrl.lang != locale.lang\">({{::locale.lang}})</span> </div> <div class=quality ng-if=\"::doc['quality']\" uib-tooltip=\"{{'quality' | translate}} : {{doc['quality'] | translate}}\" tooltip-append-to-body=true> <span class=\"quality-{{::doc['quality']}}\"></span> </div> <span class=area-type>{{doc['area_type'] | translate}}</span> </div> </a> ");
            a.put("/static/partials/listswitch.html", "<button ng-if=\"type != 'short'\" class=\"btn orange-btn btn-default no-list-btn hidden-xs card-list\" ng-click=switchCtrl.toggle()> <span class=\"glyphicon glyphicon-globe\"></span> <span translate ng-show=!switchCtrl.showList>List Format</span> <span translate ng-show=switchCtrl.showList>Card Format</span> </button> <button ng-if=\"type == 'short'\" class=\"btn btn-default hidden-xs\" ng-click=switchCtrl.toggle() ng-attr-title=\"{{switchCtrl.showList ? 'List Format' : 'Card Format' | translate}}\"> <span ng-class=\"['glyphicon', {'glyphicon-th-list': !switchCtrl.showList, 'glyphicon-th-large': switchCtrl.showList}]\"></span> </button> ");
            a.put("/static/partials/map/diffmap.html", "<div class=map ngeo-map=diffMapCtrl.map> <app-baselayer-selector app-baselayer-selector-map=::diffMapCtrl.map></app-baselayer-selector> </div> ");
            a.put("/static/partials/cards/routes.html", '<a ng-href={{cardCtrl.createURL()}} ng-init="doc = cardCtrl.doc; locale = cardCtrl.locale;"> <div class="flex column route-item-infos"> <div class="flex wrap-row nowrap center-items-align grow"> <div class=list-item-info> <div class=list-item-title-lang> <span class=list-item-title><p><span ng-if=::locale.title_prefix>{{::locale.title_prefix}}&nbsp;: </span>{{::locale.title}}</p></span> <span class=list-item-lang ng-if="cardCtrl.lang != locale.lang">({{::locale.lang}})</span> </div> <div class="flex location" ng-if="::doc[\'areas\']"> <span class=value>{{::cardCtrl.showArea(doc[\'areas\'])}}</span> </div> <div class="flex wrap-row route-infos"> <span class=elevation uib-tooltip="{{\'elevation_max\'| translate}}" tooltip-append-to-body=true> <span class="glyphicon glyphicon-sort-by-attributes rotate-180" ng-if="::doc[\'elevation_max\']"></span> <span class=value ng-if="::doc[\'elevation_max\']">{{::doc[\'elevation_max\']}}&nbsp;m</span> </span> <span class=height-diff uib-tooltip="{{\'height_diff_up\'| translate}}"> <span class=icon-height_diff ng-if="::doc[\'height_diff_up\']"></span> <span class=value ng-if="::doc[\'height_diff_up\']">{{::doc[\'height_diff_up\']}}&nbsp;m</span> </span> <span class=height-diff-difficulties uib-tooltip="{{\'height_diff_difficulties\'| translate}}" tooltip-append-to-body=true> <span class="glyphicon glyphicon-resize-vertical" ng-if="::doc[\'height_diff_difficulties\']"></span> <span class=value ng-if="::doc[\'height_diff_difficulties\']">{{::doc[\'height_diff_difficulties\']}}&nbsp;m</span> </span> <span class=slackline-length ng-if="::doc[\'route_length\'] && cardCtrl.hasActivity([\'slacklining\'])" uib-tooltip="{{\'length\'| translate}}" tooltip-append-to-body=true> <span class="glyphicon glyphicon-resize-horizontal"></span> <span class=value>{{::doc[\'route_length\']}}&nbsp;m</span> </span> <span class=slackline-height ng-if="::doc[\'slackline_height\']" uib-tooltip="{{\'height\'| translate}}" tooltip-append-to-body=true> <span class="glyphicon glyphicon-resize-vertical"></span> <span class=value>{{::doc[\'slackline_height\']}}&nbsp;m</span> </span> <div class=orientations uib-tooltip="{{\'orientations\'| translate}}" tooltip-append-to-body=true> <span class="glyphicon glyphicon-fullscreen" ng-if="::doc[\'orientations\']"></span> <span ng-if="::doc[\'orientations\']" ng-repeat="o in ::doc[\'orientations\']">{{o}}{{$last ? \'\' : \', \'}}</span> </div> <div class="full-rating flex" ng-init="fullRatings = cardCtrl.getFullRatings()"> <span class=icon-rating ng-if=::fullRatings></span> <div ng-if=::fullRatings ng-repeat="(attr, val) in ::fullRatings" class=rating uib-tooltip="{{attr | translate}}" tooltip-append-to-body=true> <span class=value>{{::val}}</span> </div> </div> </div> <div class=flex ng-if="::doc[\'slackline_type\'] && cardCtrl.hasActivity([\'slacklining\'])"> <span class="value slackline-type">{{::doc[\'slackline_type\'] | translate}}</span> </div> </div> </div> <div class=activities> <span ng-repeat="activity in ::doc.activities" class="activity icon-{{::activity}}" uib-tooltip="{{activity | translate}}" tooltip-append-to-body=true> </span> </div> </div> <div class=quality ng-if="::doc[\'quality\']" uib-tooltip="{{\'quality\' | translate}} : {{doc[\'quality\'] | translate}}" tooltip-append-to-body=true> <span class="quality-{{::doc[\'quality\']}}"></span> </div> </a> ');
            a.put("/static/partials/alerts.html", '<app-alert ng-repeat="alert in alertsCtrl.alerts" type={{alert.type}} close=alertsCtrl.close($index) timeout={{alert.timeout}} msg={{alert.msg}}></app-alert> ');
            a.put("/static/partials/contexthelp/xreport-route_study.html", "<ptranslate>Knowledge of the route:</p> <ul> <li translate>Maps, guidebooks and reports from previous outing used.</li> <li translate>Re evaluation of the route during the outing.</li> </ul>")
        }
        a.$inject = ["$templateCache"];
        angular.module("app").run(a)
    })();
}).call(window);