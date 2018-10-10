/*!
 * VERSION: 0.2.0
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * CustomWiggle is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
        "use strict";
        _gsScope._gsDefine("easing.CustomWiggle", ["easing.CustomEase", "easing.Ease"], function (t, r) {
            var e, c = {
                    easeOut: new t("", "M0,1,C0.7,1,0.6,0,1,0")
                    , easeInOut: new t("", "M0,0,C0.104,0,0.242,1,0.444,1,0.644,1,0.608,0,1,0")
                    , anticipate: new t("", "M0,0,C0,0.222,0.024,0.386,0.06,0.402,0.181,0.455,0.647,0.646,0.7,0.67,0.9,0.76,1,0.846,1,1")
                    , uniform: new t("", "M0,0,C0,0.95,0.01,1,0.01,1,0.01,1,1,1,1,1,1,1,1,0.01,1,0")
                }
                , S = new t
                , l = function (o, e) {
                    return (o = o.getRatio ? o : r.map[o] || new t("", o)).rawBezier || !e ? o : {
                        getRatio: function (e) {
                            return 1 - o.getRatio(e)
                        }
                    }
                }
                , n = "CustomWiggle"
                , i = String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109)
                , a = String.fromCharCode(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47)
                , g = function (e) {
                    for (var o = -1 !== (window ? window.location.href : "").indexOf(String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107)) && -1 !== e.indexOf(String.fromCharCode(108, 111, 99, 97, 108, 104, 111, 115, 116)), t = [i, String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 112, 108, 117, 109, 98, 105, 110, 103), String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), String.fromCharCode(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), String.fromCharCode(99, 100, 112, 110, 46, 105, 111), String.fromCharCode(103, 97, 110, 110, 111, 110, 46, 116, 118), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), String.fromCharCode(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), String.fromCharCode(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), String.fromCharCode(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), String.fromCharCode(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), String.fromCharCode(116, 119, 101, 101, 110, 108, 105, 116, 101, 46, 99, 111, 109), String.fromCharCode(112, 108, 110, 107, 114, 46, 99, 111), String.fromCharCode(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), String.fromCharCode(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109), String.fromCharCode(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103), String.fromCharCode(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111), String.fromCharCode(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 105, 101, 114, 46, 105, 111), String.fromCharCode(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)], r = t.length; - 1 < --r;)
                        if (-1 !== e.indexOf(t[r])) return !0;
                    return o && window && window.console && console.log(String.fromCharCode(87, 65, 82, 78, 73, 78, 71, 58, 32, 97, 32, 115, 112, 101, 99, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + n + String.fromCharCode(32, 105, 115, 32, 114, 117, 110, 110, 105, 110, 103, 32, 108, 111, 99, 97, 108, 108, 121, 44, 32, 98, 117, 116, 32, 105, 116, 32, 119, 105, 108, 108, 32, 110, 111, 116, 32, 119, 111, 114, 107, 32, 111, 110, 32, 97, 32, 108, 105, 118, 101, 32, 100, 111, 109, 97, 105, 110, 32, 98, 101, 99, 97, 117, 115, 101, 32, 105, 116, 32, 105, 115, 32, 97, 32, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 32, 98, 101, 110, 101, 102, 105, 116, 32, 111, 102, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 46, 32, 80, 108, 101, 97, 115, 101, 32, 115, 105, 103, 110, 32, 117, 112, 32, 97, 116, 32, 104, 116, 116, 112, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98, 47, 32, 97, 110, 100, 32, 116, 104, 101, 110, 32, 100, 111, 119, 110, 108, 111, 97, 100, 32, 116, 104, 101, 32, 39, 114, 101, 97, 108, 39, 32, 118, 101, 114, 115, 105, 111, 110, 32, 102, 114, 111, 109, 32, 121, 111, 117, 114, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 97, 99, 99, 111, 117, 110, 116, 32, 119, 104, 105, 99, 104, 32, 104, 97, 115, 32, 110, 111, 32, 115, 117, 99, 104, 32, 108, 105, 109, 105, 116, 97, 116, 105, 111, 110, 115, 46, 32, 84, 104, 101, 32, 102, 105, 108, 101, 32, 121, 111, 117, 39, 114, 101, 32, 117, 115, 105, 110, 103, 32, 119, 97, 115, 32, 108, 105, 107, 101, 108, 121, 32, 100, 111, 119, 110, 108, 111, 97, 100, 101, 100, 32, 102, 114, 111, 109, 32, 101, 108, 115, 101, 119, 104, 101, 114, 101, 32, 111, 110, 32, 116, 104, 101, 32, 119, 101, 98, 32, 97, 110, 100, 32, 105, 115, 32, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 116, 111, 32, 108, 111, 99, 97, 108, 32, 117, 115, 101, 32, 111, 114, 32, 111, 110, 32, 115, 105, 116, 101, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 46)), o
                }(window ? window.location.host : "")
                , s = function (e, o) {
                    //console.log(this.update(this.vars))
                    t.call(this, e), this.update(this.vars)
                    if (this.vars = o || {}, !g) return window.location.href = window.location.href, !1;
                    //console.log(t.call(this, e), this.update(this.vars))
                };
            return s.prototype = e = new t, e.constructor = s, e.update = function (e) {
                console.log(e)
                var o, t, r, n, i, a, g, s, C, f = 0 | ((e = e || this.vars).wiggles || 10)
                    , u = 1 / f
                    , d = u / 2
                    , h = "anticipate" === e.type
                    , m = c[e.type] || c.easeOut
                    , p = S;
                if (h && (p = m, m = c.easeOut), e.timingEase && (p = l(e.timingEase)), e.amplitudeEase && (m = l(e.amplitudeEase, !0)), s = [0, 0, (a = p.getRatio(d)) / 4, 0, a / 2, g = h ? -m.getRatio(d) : m.getRatio(d), a, g], "random" === e.type) {
                    for (s.length = 4, o = p.getRatio(u), t = 2 * Math.random() - 1, C = 2; C < f; C++) d = o, g = t, o = p.getRatio(u * C), t = 2 * Math.random() - 1, r = Math.atan2(t - s[s.length - 3], o - s[s.length - 4]), n = Math.cos(r) * u, i = Math.sin(r) * u, s.push(d - n, g - i, d, g, d + n, g + i);
                    s.push(o, 0, 1, 0)
                }
                else {
                    for (C = 1; C < f; C++) s.push(p.getRatio(d + u / 2), g), d += u, g = (0 < g ? -1 : 1) * m.getRatio(C * u), a = p.getRatio(d), s.push(p.getRatio(d - u / 2), g, a, g);
                    s.push(p.getRatio(d + u / 4), g, p.getRatio(d + u / 4), 0, 1, 0)
                }
                for (C = s.length; - 1 < --C;) s[C] = (1e3 * s[C] | 0) / 1e3;
                s[2] = "C" + s[2], this.setData("M" + s.join(","))
            }, s.create = function (e, o) {
                return new s(e, o)
            }, s.version = "0.2.0", s.eases = c, s
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()()
    , function (e) {
        "use strict";
        var o = function () {
            console.log((_gsScope.GreenSockGlobals || _gsScope).CustomWiggle)
            return (_gsScope.GreenSockGlobals || _gsScope).CustomWiggle
        };
        "function" == typeof define && define.amd ? define(["TweenLite", "CustomEase"], o) : "undefined" != typeof module && module.exports && (require("./CustomEase.js"), require("../TweenLite.js"), module.exports = o())
    }();