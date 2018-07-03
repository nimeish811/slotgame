! function(n) {
    var t = {};

    function e(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return n[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
    }
    e.m = n, e.c = t, e.d = function(n, t, r) {
        e.o(n, t) || Object.defineProperty(n, t, {
            enumerable: !0,
            get: r
        })
    }, e.r = function(n) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(n, "__esModule", {
            value: !0
        })
    }, e.t = function(n, t) {
        if (1 & t && (n = e(n)), 8 & t) return n;
        if (4 & t && "object" == typeof n && n && n.__esModule) return n;
        var r = Object.create(null);
        if (e.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: n
            }), 2 & t && "string" != typeof n)
            for (var o in n) e.d(r, o, function(t) {
                return n[t]
            }.bind(null, o));
        return r
    }, e.n = function(n) {
        var t = n && n.__esModule ? function() {
            return n.default
        } : function() {
            return n
        };
        return e.d(t, "a", t), t
    }, e.o = function(n, t) {
        return Object.prototype.hasOwnProperty.call(n, t)
    }, e.p = "", e(e.s = 22)
}([function(n, t, e) {
    "use strict";

    function r(n, t) {
        for (var e = 0; e < t.length; e++) {
            var r = t[e];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var o = {},
        a = function() {
            function n() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n.random();
                ! function(n, t) {
                    if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.name = t, o[t] ? this.img = o[t].cloneNode() : (this.img = new Image, this.img.src = e(18)("./".concat(t, ".svg")), o[t] = this.img)
            }
            return function(n, t, e) {
                t && r(n.prototype, t), e && r(n, e)
            }(n, null, [{
                key: "preload",
                value: function() {
                    n.symbols.forEach(function(t) {
                        return new n(t)
                    })
                }
            }, {
                key: "random",
                value: function() {
                    return this.symbols[Math.floor(Math.random() * this.symbols.length)]
                }
            }, {
                key: "symbols",
                get: function() {
                    return ["at_at", "c3po", "darth_vader", "death_star", "falcon", "r2d2", "stormtrooper", "tie_ln", "yoda"]
                }
            }]), n
        }();
    t.default = a
}, function(n, t) {
    n.exports = function(n) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!n || "string" != typeof n) return n;
        var e = t.protocol + "//" + t.host,
            r = e + t.pathname.replace(/\/[^\/]*$/, "/");
        return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(n, t) {
            var o, a = t.trim().replace(/^"(.*)"$/, function(n, t) {
                return t
            }).replace(/^'(.*)'$/, function(n, t) {
                return t
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a) ? n : (o = 0 === a.indexOf("//") ? a : 0 === a.indexOf("/") ? e + a : r + a.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")")
        })
    }
}, function(n, t, e) {
    var r = {},
        o = function(n) {
            var t;
            return function() {
                return void 0 === t && (t = n.apply(this, arguments)), t
            }
        }(function() {
            return window && document && document.all && !window.atob
        }),
        a = function(n) {
            var t = {};
            return function(n) {
                if ("function" == typeof n) return n();
                if (void 0 === t[n]) {
                    var e = function(n) {
                        return document.querySelector(n)
                    }.call(this, n);
                    if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement) try {
                        e = e.contentDocument.head
                    } catch (n) {
                        e = null
                    }
                    t[n] = e
                }
                return t[n]
            }
        }(),
        i = null,
        s = 0,
        l = [],
        c = e(1);

    function d(n, t) {
        for (var e = 0; e < n.length; e++) {
            var o = n[e],
                a = r[o.id];
            if (a) {
                a.refs++;
                for (var i = 0; i < a.parts.length; i++) a.parts[i](o.parts[i]);
                for (; i < o.parts.length; i++) a.parts.push(b(o.parts[i], t))
            } else {
                var s = [];
                for (i = 0; i < o.parts.length; i++) s.push(b(o.parts[i], t));
                r[o.id] = {
                    id: o.id,
                    refs: 1,
                    parts: s
                }
            }
        }
    }

    function u(n, t) {
        for (var e = [], r = {}, o = 0; o < n.length; o++) {
            var a = n[o],
                i = t.base ? a[0] + t.base : a[0],
                s = {
                    css: a[1],
                    media: a[2],
                    sourceMap: a[3]
                };
            r[i] ? r[i].parts.push(s) : e.push(r[i] = {
                id: i,
                parts: [s]
            })
        }
        return e
    }

    function f(n, t) {
        var e = a(n.insertInto);
        if (!e) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var r = l[l.length - 1];
        if ("top" === n.insertAt) r ? r.nextSibling ? e.insertBefore(t, r.nextSibling) : e.appendChild(t) : e.insertBefore(t, e.firstChild), l.push(t);
        else if ("bottom" === n.insertAt) e.appendChild(t);
        else {
            if ("object" != typeof n.insertAt || !n.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var o = a(n.insertInto + " " + n.insertAt.before);
            e.insertBefore(t, o)
        }
    }

    function p(n) {
        if (null === n.parentNode) return !1;
        n.parentNode.removeChild(n);
        var t = l.indexOf(n);
        t >= 0 && l.splice(t, 1)
    }

    function h(n) {
        var t = document.createElement("style");
        return void 0 === n.attrs.type && (n.attrs.type = "text/css"), m(t, n.attrs), f(n, t), t
    }

    function m(n, t) {
        Object.keys(t).forEach(function(e) {
            n.setAttribute(e, t[e])
        })
    }

    function b(n, t) {
        var e, r, o, a;
        if (t.transform && n.css) {
            if (!(a = t.transform(n.css))) return function() {};
            n.css = a
        }
        if (t.singleton) {
            var l = s++;
            e = i || (i = h(t)), r = g.bind(null, e, l, !1), o = g.bind(null, e, l, !0)
        } else n.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (e = function(n) {
            var t = document.createElement("link");
            return void 0 === n.attrs.type && (n.attrs.type = "text/css"), n.attrs.rel = "stylesheet", m(t, n.attrs), f(n, t), t
        }(t), r = function(n, t, e) {
            var r = e.css,
                o = e.sourceMap,
                a = void 0 === t.convertToAbsoluteUrls && o;
            (t.convertToAbsoluteUrls || a) && (r = c(r));
            o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
            var i = new Blob([r], {
                    type: "text/css"
                }),
                s = n.href;
            n.href = URL.createObjectURL(i), s && URL.revokeObjectURL(s)
        }.bind(null, e, t), o = function() {
            p(e), e.href && URL.revokeObjectURL(e.href)
        }) : (e = h(t), r = function(n, t) {
            var e = t.css,
                r = t.media;
            r && n.setAttribute("media", r);
            if (n.styleSheet) n.styleSheet.cssText = e;
            else {
                for (; n.firstChild;) n.removeChild(n.firstChild);
                n.appendChild(document.createTextNode(e))
            }
        }.bind(null, e), o = function() {
            p(e)
        });
        return r(n),
            function(t) {
                if (t) {
                    if (t.css === n.css && t.media === n.media && t.sourceMap === n.sourceMap) return;
                    r(n = t)
                } else o()
            }
    }
    n.exports = function(n, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = o()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
        var e = u(n, t);
        return d(e, t),
            function(n) {
                for (var o = [], a = 0; a < e.length; a++) {
                    var i = e[a];
                    (s = r[i.id]).refs--, o.push(s)
                }
                n && d(u(n, t), t);
                for (a = 0; a < o.length; a++) {
                    var s;
                    if (0 === (s = o[a]).refs) {
                        for (var l = 0; l < s.parts.length; l++) s.parts[l]();
                        delete r[s.id]
                    }
                }
            }
    };
    var v = function() {
        var n = [];
        return function(t, e) {
            return n[t] = e, n.filter(Boolean).join("\n")
        }
    }();

    function g(n, t, e, r) {
        var o = e ? "" : r.css;
        if (n.styleSheet) n.styleSheet.cssText = v(t, o);
        else {
            var a = document.createTextNode(o),
                i = n.childNodes;
            i[t] && n.removeChild(i[t]), i.length ? n.insertBefore(a, i[t]) : n.appendChild(a)
        }
    }
}, function(n, t, e) {
    n.exports = e.p + "84bf14f7acca42db7819ed9d5bbce05f.jpg"
}, function(n, t, e) {
    n.exports = e.p + "24eea004fcb9b61a247944cf5d2702b9.jpg"
}, function(n, t) {
    n.exports = function(n) {
        var t = [];
        return t.toString = function() {
            return this.map(function(t) {
                var e = function(n, t) {
                    var e = n[1] || "",
                        r = n[3];
                    if (!r) return e;
                    if (t && "function" == typeof btoa) {
                        var o = function(n) {
                                return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"
                            }(r),
                            a = r.sources.map(function(n) {
                                return "/*# sourceURL=" + r.sourceRoot + n + " */"
                            });
                        return [e].concat(a).concat([o]).join("\n")
                    }
                    return [e].join("\n")
                }(t, n);
                return t[2] ? "@media " + t[2] + "{" + e + "}" : e
            }).join("")
        }, t.i = function(n, e) {
            "string" == typeof n && (n = [
                [null, n, ""]
            ]);
            for (var r = {}, o = 0; o < this.length; o++) {
                var a = this[o][0];
                "number" == typeof a && (r[a] = !0)
            }
            for (o = 0; o < n.length; o++) {
                var i = n[o];
                "number" == typeof i[0] && r[i[0]] || (e && !i[2] ? i[2] = e : e && (i[2] = "(" + i[2] + ") and (" + e + ")"), t.push(i))
            }
        }, t
    }
}, function(n, t) {
    n.exports = function(n) {
        return "string" != typeof n ? n : (/^['"].*['"]$/.test(n) && (n = n.slice(1, -1)), /["'() \t\n]/.test(n) ? '"' + n.replace(/"/g, '\\"').replace(/\n/g, "\\n") + '"' : n)
    }
}, function(n, t, e) {
    var r = e(6);
    (n.exports = e(5)(!1)).push([n.i, "body {\n  width: 100vw;\n  height: 100vh;\n  padding: 1rem;\n  background-image: url(" + r(e(4)) + ");\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  font-family: 'Roboto Condensed', sans-serif;\n}\n\n@media only screen and (max-width: 1200px) {\n  body {\n    background-image: url(" + r(e(3)) + ');\n  }\n}\n\n#reels {\n  display: flex;\n  width: 100vw;\n  height: calc((3 / 5) * 100vw);\n  max-height: calc(90vh - 50px);\n  max-width: calc((5 / 3) * (90vh - 50px));\n}\n\n.reel {\n  overflow: hidden;\n  width: 20%;\n  height: 100%;\n}\n\n.reel > .icons > img {\n  width: calc(100% + 6px);\n  margin: -3px 0 0 -3px;\n  height: auto;\n}\n\n#controls {\n  background-color: #73b3d5;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 30px;\n}\n\n#controls label {\n  display: flex;\n  align-items: center;\n  margin: 0;\n}\n\n#controls label input {\n  margin-right: 5px;\n}\n\ninput[type="checkbox"] {\n  width: 40px;\n  height: 40px;\n}\n\n#jackpot {\n  color: #D5AD6D;\n  font-size: 40px;\n  text-align: center;\n}\n\n/*#info {\n  color: #D5AD6D;\n  font-size: 40px;\n  text-align: center;\n}*/\n\n/* The Modal (background) */\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 20%;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n/* Modal Content/Box */\r\n.modal-content {\r\n    background-color: #fefefe;\r\n    margin: 15% auto; /* 15% from the top and centered */\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 80%; /* Could be more or less, depending on screen size */\r\n}\r\n\r\n/* The Close Button */\r\n.close {\r\n    color: white;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n    color: black;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\n\n\n/* Modal Header */\r\n.modal-header {\r\n    padding: 2px 16px;\r\n    background-color: #72b3d5;\r\n    color: white;\r\n    text-align:center;\r\n}\r\n\r\n/* Modal Body */\r\n.modal-body {\r\n    padding: 2px 16px;\r\n    background-color: #f2f2f2;\r\n}\r\n\r\n/* Modal Footer */\r\n.modal-footer {\r\n    padding: 2px 16px;\r\n    background-color: #72b3d5;\r\n    color: white;\r\n    text-align:center;\r\n}\r\n\r\n/* Modal Content */\r\n.modal-content {\r\n    position: relative;\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 0;\r\n    border: 1px solid #888;\r\n    width: 80%;\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n    animation-name: animatetop;\r\n    animation-duration: 0.4s\r\n}\r\n\r\n/* Add Animation */\r\n@keyframes animatetop {\r\n    from {top: -300px; opacity: 0}\r\n    to {top: 0; opacity: 1}\r\n}\n\n\n\n\n\ninput[type=text], select {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n}\r\n\r\ninput[type=submit] {\r\n    width: 100%;\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n}\r\n\r\ninput[type=submit]:hover {\r\n    background-color: #45a049;\r\n}', ""])
}, function(n, t, e) {
    var r = e(7);
    "string" == typeof r && (r = [
        [n.i, r, ""]
    ]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    e(2)(r, o);
    r.locals && (n.exports = r.locals)
}, function(n, t, e) {
    n.exports = e.p + "713766286583a9d640a00ba67557e89d.svg"
}, function(n, t, e) {
    n.exports = e.p + "0cd9d2ccc971ed0ee0507d9aa4bc098f.svg"
}, function(n, t, e) {
    n.exports = e.p + "5727ded717073f51ffd07e172c1dd458.svg"
}, function(n, t, e) {
    n.exports = e.p + "64b6cd51c5894d52a1c91ed214e86b0b.svg"
}, function(n, t, e) {
    n.exports = e.p + "c74e68dd795b5bae452ac881aafe760e.svg"
}, function(n, t, e) {
    n.exports = e.p + "1d7a0915ada9f0c7ca36df128858229c.svg"
}, function(n, t, e) {
    n.exports = e.p + "7b2ba9e5846a989966b9084c89268b28.svg"
}, function(n, t, e) {
    n.exports = e.p + "002c00ad7e5311f2e9f95e3891a1902e.svg"
}, function(n, t, e) {
    n.exports = e.p + "5a7072ffb34182479de014c2fcc14e58.svg"
}, function(n, t, e) {
    var r = {
        "./at_at.svg": 17,
        "./c3po.svg": 16,
        "./darth_vader.svg": 15,
        "./death_star.svg": 14,
        "./falcon.svg": 13,
        "./r2d2.svg": 12,
        "./stormtrooper.svg": 11,
        "./tie_ln.svg": 10,
        "./yoda.svg": 9
    };

    function o(n) {
        var t = a(n);
        return e(t)
    }

    function a(n) {
        var t = r[n];
        if (!(t + 1)) {
            var e = new Error("Cannot find module '" + n + "'");
            throw e.code = "MODULE_NOT_FOUND", e
        }
        return t
    }
    o.keys = function() {
        return Object.keys(r)
    }, o.resolve = a, n.exports = o, o.id = 18
}, function(n, t, e) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r = function(n) {
        return n && n.__esModule ? n : {
            default: n
        }
    }(e(0));

    function o(n, t) {
        for (var e = 0; e < t.length; e++) {
            var r = t[e];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r)
        }
    }
    var a = function() {
        function n(t, e, o) {
            var a = this;
            ! function(n, t) {
                if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, n), this.reelContainer = t, this.idx = e, this.symbolContainer = document.createElement("div"), this.symbolContainer.classList.add("icons"), this.reelContainer.appendChild(this.symbolContainer), this.animation = this.symbolContainer.animate([{
                transform: "none",
                filter: "blur(0)"
            }, {
                filter: "blur(2px)",
                offset: .5
            }, {
                transform: "translateY(-".concat(10 * Math.floor(this.factor) / (3 + 10 * Math.floor(this.factor)) * 100, "%)"),
                filter: "blur(0)"
            }], {
                duration: 1e3 * this.factor,
                easing: "ease-in-out"
            }), this.animation.cancel(), o.forEach(function(n) {
                return a.symbolContainer.appendChild(new r.default(n).img)
            })
        }
        return function(n, t, e) {
            t && o(n.prototype, t), e && o(n, e)
        }(n, [{
            key: "renderSymbols",
            value: function(n, t) {
                for (var e = document.createDocumentFragment(), o = 3; o < 3 + 10 * Math.floor(this.factor); o++) {
                    var a = new r.default(o >= 10 * Math.floor(this.factor) - 2 ? t[o - 10 * Math.floor(this.factor)] : void 0);
                    e.appendChild(a.img)
                }
                this.symbolContainer.appendChild(e)
            }
        }, {
            key: "spin",
            value: function() {
                var n = this,
                    t = new Promise(function(t) {
                        return n.animation.onfinish = t
                    }),
                    e = new Promise(function(t) {
                        return setTimeout(t, 1e3 * n.factor)
                    });
                return this.animation.play(), Promise.race([t, e]).then(function() {
                    "finished" !== n.animation.playState && n.animation.finish();
                    for (var t = n.symbolContainer.children.length - 3, e = 0; e < t; e++) n.symbolContainer.firstChild.remove()
                })
            }
        }, {
            key: "factor",
            get: function() {
                return 1 + Math.pow(this.idx / 2, 2)
            }
        }]), n
    }();
    t.default = a
}, function(n, t, e) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r = a(e(19)),
        o = a(e(0));

    function a(n) {
        return n && n.__esModule ? n : {
            default: n
        }
    }

    function i(n, t) {
        for (var e = 0; e < t.length; e++) {
            var r = t[e];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r)
        }
    }
    var s = function() {
        function n(t) {
            var e = this;
            ! function(n, t) {
                if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, n), o.default.preload(), this.currentSymbols = [
                ["death_star", "death_star", "death_star"],
                ["death_star", "death_star", "death_star"],
                ["death_star", "death_star", "death_star"],
                ["death_star", "death_star", "death_star"],
                ["death_star", "death_star", "death_star"]
            ], this.nextSymbols = [
                ["death_star", "death_star", "death_star"],
                ["death_star", "death_star", "death_star"],
                ["death_star", "death_star", "death_star"],
                ["death_star", "death_star", "death_star"],
                ["death_star", "death_star", "death_star"]
            ], this.container = t, this.reels = Array.from(this.container.getElementsByClassName("reel")).map(function(n, t) {
                return new r.default(n, t, e.currentSymbols[t])
            }), this.spinButton = document.getElementById("spin"), this.spinButton.addEventListener("click", function() {
                return e.spin()
            })
        }
        return function(n, t, e) {
            t && i(n.prototype, t), e && i(n, e)
        }(n, [{
            key: "spin",
            value: function() {
                var n = this;
                return this.onSpinStart(), this.currentSymbols = this.nextSymbols, this.nextSymbols = [
                    [o.default.random(), o.default.random(), o.default.random()],
                    [o.default.random(), o.default.random(), o.default.random()],
                    [o.default.random(), o.default.random(), o.default.random()],
                    [o.default.random(), o.default.random(), o.default.random()],
                    [o.default.random(), o.default.random(), o.default.random()]
                ], Promise.all(this.reels.map(function(t) {
                    return t.renderSymbols(n.currentSymbols[t.idx], n.nextSymbols[t.idx]), t.spin()
                })).then(function() {
                    return n.onSpinEnd()
                })
            }
        }, {
            key: "onSpinStart",
            value: function() {
                this.spinButton.disabled = !0, console.log("SPIN START"), window.isDisplayed && (window.points = window.points - 5, document.getElementById("pcts").style.display = "inline", document.getElementById("cn").textContent = window.points,call_spin_start())
            }
        }, {
            key: "onSpinEnd",
            value: function() {
                var n = 0;
                this.spinButton.disabled = !1, console.log(this.nextSymbols), console.log("SPIN END");
                for (var t = [], e = 0; e < 3; e++) {
                    for (var r = [], o = 0; o < this.nextSymbols.length; o++) r.push(this.nextSymbols[o][e]);
                    t.push(r);
                    for (var a = {}, i = 0; i < r.length; i++) a[r[i]] ? a[r[i]] = a[r[i]] + 1 : a[r[i]] = 1;
                    var s = 1;
                    for (var l in a) a[l] > s && (s = a[l]);
                    s >= 3 && (n += 20)
                }(document.getElementById("sc").textContent = n, window.isDisplayed,call_after_spin())
            }
        }]), n
    }();
    t.default = s
}, function(n, t, e) {
    "use strict";
    new(function(n) {
        return n && n.__esModule ? n : {
            default: n
        }
    }(e(20)).default)(document.getElementById("slot"))
}, function(n, t, e) {
    e(21), n.exports = e(8)
}]);