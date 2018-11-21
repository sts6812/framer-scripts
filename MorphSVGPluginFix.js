/*!
 * VERSION: 0.9.0
 * DATE: 2018-11-14
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * MorphSVGPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        var E = Math.PI / 180,
            A = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            w = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            a = /(^[#\.][a-z]|[a-y][a-z])/gi,
            S = /[achlmqstvz]/gi,
            y = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
            u = _gsScope._gsDefine.globals.TweenLite,
            M = "MorphSVGPlugin",
            x = String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
            N = String.fromCharCode(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47),
            _ = function(e) {
                for (var t = -1 !== (window ? "http://codepen.io/GreenSock/pen/OPqpRJ/" : "").indexOf(String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107)) && -1 !== e.indexOf(String.fromCharCode(108, 111, 99, 97, 108, 104, 111, 115, 116)), r = [x, String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 112, 108, 117, 109, 98, 105, 110, 103), String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), String.fromCharCode(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), String.fromCharCode(99, 100, 112, 110, 46, 105, 111), String.fromCharCode(103, 97, 110, 110, 111, 110, 46, 116, 118), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), String.fromCharCode(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), String.fromCharCode(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), String.fromCharCode(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), String.fromCharCode(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), String.fromCharCode(116, 119, 101, 101, 110, 108, 105, 116, 101, 46, 99, 111, 109), String.fromCharCode(112, 108, 110, 107, 114, 46, 99, 111), String.fromCharCode(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), String.fromCharCode(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109), String.fromCharCode(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103), String.fromCharCode(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111), String.fromCharCode(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 105, 101, 114, 46, 105, 111), String.fromCharCode(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)], n = r.length; - 1 < --n;)
                    if (-1 !== e.indexOf(r[n])) return !0;
                return t && window && window.console && console.log(String.fromCharCode(87, 65, 82, 78, 73, 78, 71, 58, 32, 97, 32, 115, 112, 101, 99, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + M + String.fromCharCode(32, 105, 115, 32, 114, 117, 110, 110, 105, 110, 103, 32, 108, 111, 99, 97, 108, 108, 121, 44, 32, 98, 117, 116, 32, 105, 116, 32, 119, 105, 108, 108, 32, 110, 111, 116, 32, 119, 111, 114, 107, 32, 111, 110, 32, 97, 32, 108, 105, 118, 101, 32, 100, 111, 109, 97, 105, 110, 32, 98, 101, 99, 97, 117, 115, 101, 32, 105, 116, 32, 105, 115, 32, 97, 32, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 32, 98, 101, 110, 101, 102, 105, 116, 32, 111, 102, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 46, 32, 80, 108, 101, 97, 115, 101, 32, 115, 105, 103, 110, 32, 117, 112, 32, 97, 116, 32, 104, 116, 116, 112, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98, 47, 32, 97, 110, 100, 32, 116, 104, 101, 110, 32, 100, 111, 119, 110, 108, 111, 97, 100, 32, 116, 104, 101, 32, 39, 114, 101, 97, 108, 39, 32, 118, 101, 114, 115, 105, 111, 110, 32, 102, 114, 111, 109, 32, 121, 111, 117, 114, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 97, 99, 99, 111, 117, 110, 116, 32, 119, 104, 105, 99, 104, 32, 104, 97, 115, 32, 110, 111, 32, 115, 117, 99, 104, 32, 108, 105, 109, 105, 116, 97, 116, 105, 111, 110, 115, 46, 32, 84, 104, 101, 32, 102, 105, 108, 101, 32, 121, 111, 117, 39, 114, 101, 32, 117, 115, 105, 110, 103, 32, 119, 97, 115, 32, 108, 105, 107, 101, 108, 121, 32, 100, 111, 119, 110, 108, 111, 97, 100, 101, 100, 32, 102, 114, 111, 109, 32, 101, 108, 115, 101, 119, 104, 101, 114, 101, 32, 111, 110, 32, 116, 104, 101, 32, 119, 101, 98, 32, 97, 110, 100, 32, 105, 115, 32, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 116, 111, 32, 108, 111, 99, 97, 108, 32, 117, 115, 101, 32, 111, 114, 32, 111, 110, 32, 115, 105, 116, 101, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 46)), t
            }(window ? "codepen.io" : ""),
            z = function(e) {
                _gsScope.console && console.log(e)
            },
            P = function(e, t, r, n, o, i, a, h, s) {
                if (e !== h || t !== s) {
                    r = Math.abs(r), n = Math.abs(n);
                    var l = Math.sqrt,
                        f = Math.cos,
                        g = Math.sin,
                        u = 2 * Math.PI,
                        c = o % 360 * E,
                        p = f(c),
                        d = g(c),
                        m = (e - h) / 2,
                        C = (t - s) / 2,
                        v = p * m + d * C,
                        b = -d * m + p * C,
                        S = v * v,
                        M = b * b,
                        A = S / (r * r) + M / (n * n);
                    1 < A && (r = l(A) * r, n = l(A) * n);
                    var y = r * r,
                        x = n * n,
                        w = (y * x - y * M - x * S) / (y * M + x * S);
                    w < 0 && (w = 0);
                    var N = (i === a ? -1 : 1) * l(w),
                        _ = N * (r * b / n),
                        z = N * (-n * v / r),
                        P = (e + h) / 2 + (p * _ - d * z),
                        T = (t + s) / 2 + (d * _ + p * z),
                        L = (v - _) / r,
                        G = (b - z) / n,
                        I = (-v - _) / r,
                        Y = (-b - z) / n,
                        q = L * L + G * G,
                        B = (G < 0 ? -1 : 1) * Math.acos(L / l(q)),
                        V = (L * Y - G * I < 0 ? -1 : 1) * Math.acos((L * I + G * Y) / l(q * (I * I + Y * Y)));
                    !a && 0 < V ? V -= u : a && V < 0 && (V += u), B %= u, V %= u;
                    var X, O = Math.ceil(Math.abs(V) / (u / 4)),
                        R = [],
                        j = V / O,
                        F = 4 / 3 * g(j / 2) / (1 + f(j / 2)),
                        H = p * r,
                        D = d * r,
                        Q = d * -n,
                        U = p * n;
                    for (X = 0; X < O; X++) v = f(o = B + X * j), b = g(o), L = f(o += j), G = g(o), R.push(v - F * b, b + F * v, L + F * G, G - F * L, L, G);
                    for (X = 0; X < R.length; X += 2) v = R[X], b = R[X + 1], R[X] = v * H + b * Q + P, R[X + 1] = v * D + b * U + T;
                    return R[X - 2] = h, R[X - 1] = s, R
                }
            },
            T = function(e) {
                var t, r, n, o, i, a, h, s, l, f, g, u, c, p = (e + "").replace(y, function(e) {
                        var t = +e;
                        return t < 1e-4 && -1e-4 < t ? 0 : t
                    }).match(A) || [],
                    d = [],
                    m = 0,
                    C = 0,
                    v = p.length,
                    b = 0,
                    S = "ERROR: malformed path: " + e,
                    M = function(e, t, r, n) {
                        f = (r - e) / 3, g = (n - t) / 3, h.push(e + f, t + g, r - f, n - g, r, n)
                    };
                if (!e || !isNaN(p[0]) || isNaN(p[1])) return console.log(S), d;
                for (t = 0; t < v; t++)
                    if (c = i, isNaN(p[t]) ? a = (i = p[t].toUpperCase()) !== p[t] : t--, n = +p[t + 1], o = +p[t + 2], a && (n += m, o += C), t || (s = n, l = o), "M" === i) h && (h.length < 8 ? d.length -= 1 : b += h.length), m = s = n, C = l = o, h = [n, o], d.push(h), t += 2, i = "L";
                    else if ("C" === i) h || (h = [0, 0]), a || (m = C = 0), h.push(n, o, m + 1 * p[t + 3], C + 1 * p[t + 4], m += 1 * p[t + 5], C += 1 * p[t + 6]), t += 6;
                else if ("S" === i) f = m, g = C, "C" !== c && "S" !== c || (f += m - h[h.length - 4], g += C - h[h.length - 3]), a || (m = C = 0), h.push(f, g, n, o, m += 1 * p[t + 3], C += 1 * p[t + 4]), t += 4;
                else if ("Q" === i) f = m + 2 / 3 * (n - m), g = C + 2 / 3 * (o - C), a || (m = C = 0), m += 1 * p[t + 3], C += 1 * p[t + 4], h.push(f, g, m + 2 / 3 * (n - m), C + 2 / 3 * (o - C), m, C), t += 4;
                else if ("T" === i) f = m - h[h.length - 4], g = C - h[h.length - 3], h.push(m + f, C + g, n + 2 / 3 * (m + 1.5 * f - n), o + 2 / 3 * (C + 1.5 * g - o), m = n, C = o), t += 2;
                else if ("H" === i) M(m, C, m = n, C), t += 1;
                else if ("V" === i) M(m, C, m, C = n + (a ? C - m : 0)), t += 1;
                else if ("L" === i || "Z" === i) "Z" === i && (n = s, o = l, h.closed = !0), ("L" === i || .5 < Math.abs(m - n) || .5 < Math.abs(C - o)) && (M(m, C, n, o), "L" === i && (t += 2)), m = n, C = o;
                else if ("A" === i) {
                    if (u = P(m, C, +p[t + 1], +p[t + 2], +p[t + 3], +p[t + 4], +p[t + 5], (a ? m : 0) + 1 * p[t + 6], (a ? C : 0) + 1 * p[t + 7]))
                        for (r = 0; r < u.length; r++) h.push(u[r]);
                    m = h[h.length - 2], C = h[h.length - 1], t += 7
                } else console.log(S);
                return t = h.length, h[0] === h[t - 2] && h[1] === h[t - 1] && (h.closed = !0), d.totalPoints = b + t, d
            },
            L = function(e, t) {
                var r, n, o, i, a, h, s, l, f, g, u, c, p, d, m = 0,
                    C = e.length,
                    v = t / ((C - 2) / 6);
                for (p = 2; p < C; p += 6)
                    for (m += v; .999999 < m;) r = e[p - 2], n = e[p - 1], o = e[p], i = e[p + 1], a = e[p + 2], h = e[p + 3], s = e[p + 4], l = e[p + 5], f = r + (o - r) * (d = 1 / (Math.floor(m) + 1)), f += ((u = o + (a - o) * d) - f) * d, u += (a + (s - a) * d - u) * d, g = n + (i - n) * d, g += ((c = i + (h - i) * d) - g) * d, c += (h + (l - h) * d - c) * d, e.splice(p, 4, r + (o - r) * d, n + (i - n) * d, f, g, f + (u - f) * d, g + (c - g) * d, u, c, a + (s - a) * d, h + (l - h) * d), p += 6, C += 6, m--;
                return e
            },
            G = function(e) {
                var t, r, n, o, i = "",
                    a = e.length,
                    h = 100;
                for (r = 0; r < a; r++) {
                    for (i += "M" + (o = e[r])[0] + "," + o[1] + " C", t = o.length, n = 2; n < t; n++) i += (o[n++] * h | 0) / h + "," + (o[n++] * h | 0) / h + " " + (o[n++] * h | 0) / h + "," + (o[n++] * h | 0) / h + " " + (o[n++] * h | 0) / h + "," + (o[n] * h | 0) / h + " ";
                    o.closed && (i += "z")
                }
                return i
            },
            I = function(e) {
                for (var t = [], r = e.length - 1, n = 0; - 1 < --r;) t[n++] = e[r], t[n++] = e[r + 1], r--;
                for (r = 0; r < n; r++) e[r] = t[r];
                e.reversed = !e.reversed
            },
            c = function(e) {
                var t, r = e.length,
                    n = 0,
                    o = 0;
                for (t = 0; t < r; t++) n += e[t++], o += e[t];
                return [n / (r / 2), o / (r / 2)]
            },
            Y = function(e) {
                var t, r, n, o = e.length,
                    i = e[0],
                    a = i,
                    h = e[1],
                    s = h;
                for (n = 6; n < o; n += 6) i < (t = e[n]) ? i = t : t < a && (a = t), h < (r = e[n + 1]) ? h = r : r < s && (s = r);
                return e.centerX = (i + a) / 2, e.centerY = (h + s) / 2, e.size = (i - a) * (h - s)
            },
            q = function(e) {
                for (var t, r, n, o, i, a = e.length, h = e[0][0], s = h, l = e[0][1], f = l; - 1 < --a;)
                    for (t = (i = e[a]).length, o = 6; o < t; o += 6) h < (r = i[o]) ? h = r : r < s && (s = r), l < (n = i[o + 1]) ? l = n : n < f && (f = n);
                return e.centerX = (h + s) / 2, e.centerY = (l + f) / 2, e.size = (h - s) * (l - f)
            },
            B = function(e, t) {
                return t.length - e.length
            },
            V = function(e, t) {
                var r = e.size || Y(e),
                    n = t.size || Y(t);
                return Math.abs(n - r) < (r + n) / 20 ? t.centerX - e.centerX || t.centerY - e.centerY : n - r
            },
            X = function(e, t) {
                var r, n, o = e.slice(0),
                    i = e.length,
                    a = i - 2;
                for (t |= 0, r = 0; r < i; r++) n = (r + t) % a, e[r++] = o[n], e[r] = o[n + 1]
            },
            p = function(e, t, r, n, o) {
                var i, a, h, s, l = e.length,
                    f = 0,
                    g = l - 2;
                for (r *= 6, a = 0; a < l; a += 6) s = e[i = (a + r) % g] - (t[a] - n), h = e[i + 1] - (t[a + 1] - o), f += Math.sqrt(h * h + s * s);
                return f
            },
            O = function(e, t, r) {
                var n, o, i, a = e.length,
                    h = c(e),
                    s = c(t),
                    l = s[0] - h[0],
                    f = s[1] - h[1],
                    g = p(e, t, 0, l, f),
                    u = 0;
                for (i = 6; i < a; i += 6)(o = p(e, t, i / 6, l, f)) < g && (g = o, u = i);
                if (r)
                    for (n = e.slice(0), I(n), i = 6; i < a; i += 6)(o = p(n, t, i / 6, l, f)) < g && (g = o, u = -i);
                return u / 6
            },
            R = function(e, t, r) {
                for (var n, o, i, a, h, s, l = e.length, f = 99999999999, g = 0, u = 0; - 1 < --l;)
                    for (s = (n = e[l]).length, h = 0; h < s; h += 6) o = n[h] - t, i = n[h + 1] - r, (a = Math.sqrt(o * o + i * i)) < f && (f = a, g = n[h], u = n[h + 1]);
                return [g, u]
            },
            j = function(e, t, r, n, o, i) {
                var a, h, s, l, f = t.length,
                    g = 0,
                    u = Math.min(e.size || Y(e), t[r].size || Y(t[r])) * n,
                    c = 999999999999,
                    p = e.centerX + o,
                    d = e.centerY + i;
                for (a = r; a < f && !((t[a].size || Y(t[a])) < u); a++) h = t[a].centerX - p, s = t[a].centerY - d, (l = Math.sqrt(h * h + s * s)) < c && (g = a, c = l);
                return l = t[g], t.splice(g, 1), l
            },
            F = function(e, t, r, n) {
                var o, i, a, h, s, l, f, g = t.length - e.length,
                    u = 0 < g ? t : e,
                    c = 0 < g ? e : t,
                    p = 0,
                    d = "complexity" === n ? B : V,
                    m = "position" === n ? 0 : "number" == typeof n ? n : .8,
                    C = c.length,
                    v = "object" == typeof r && r.push ? r.slice(0) : [r],
                    b = "reverse" === v[0] || v[0] < 0,
                    S = "log" === r;
                if (c[0]) {
                    if (1 < u.length && (e.sort(d), t.sort(d), u.size || q(u), c.size || q(c), l = u.centerX - c.centerX, f = u.centerY - c.centerY, d === V))
                        for (C = 0; C < c.length; C++) u.splice(C, 0, j(c[C], u, C, m, l, f));
                    if (g)
                        for (g < 0 && (g = -g), u[0].length > c[0].length && L(c[0], (u[0].length - c[0].length) / 6 | 0), C = c.length; p < g;) u[C].size || Y(u[C]), h = (a = R(c, u[C].centerX, u[C].centerY))[0], s = a[1], c[C++] = [h, s, h, s, h, s, h, s], c.totalPoints += 8, p++;
                    for (C = 0; C < e.length; C++) o = t[C], i = e[C], (g = o.length - i.length) < 0 ? L(o, -g / 6 | 0) : 0 < g && L(i, g / 6 | 0), b && !i.reversed && I(i), (r = v[C] || 0 === v[C] ? v[C] : "auto") && (i.closed || Math.abs(i[0] - i[i.length - 2]) < .5 && Math.abs(i[1] - i[i.length - 1]) < .5 ? "auto" === r || "log" === r ? (v[C] = r = O(i, o, 0 === C), r < 0 && (b = !0, I(i), r = -r), X(i, 6 * r)) : "reverse" !== r && (C && r < 0 && I(i), X(i, 6 * (r < 0 ? -r : r))) : !b && ("auto" === r && Math.abs(o[0] - i[0]) + Math.abs(o[1] - i[1]) + Math.abs(o[o.length - 2] - i[i.length - 2]) + Math.abs(o[o.length - 1] - i[i.length - 1]) > Math.abs(o[0] - i[i.length - 2]) + Math.abs(o[1] - i[i.length - 1]) + Math.abs(o[o.length - 2] - i[0]) + Math.abs(o[o.length - 1] - i[1]) || r % 2) ? (I(i), v[C] = -1, b = !0) : "auto" === r ? v[C] = 0 : "reverse" === r && (v[C] = -1), i.closed !== o.closed && (i.closed = o.closed = !1));
                    return S && z("shapeIndex:[" + v.join(",") + "]"), v
                }
            },
            H = function(e, t, r, n) {
                var o = T(e[0]),
                    i = T(e[1]);
                F(o, i, t || 0 === t ? t : "auto", r) && (e[0] = G(o), e[1] = G(i), "log" !== n && !0 !== n || z('precompile:["' + e[0] + '","' + e[1] + '"]'))
            },
            o = function(e, t) {
                var r, n, o, i, a, h, s, l = 0,
                    f = parseFloat(e[0]),
                    g = parseFloat(e[1]),
                    u = f + "," + g + " ";
                for (r = .5 * t / (.5 * (o = e.length) - 1), n = 0; n < o - 2; n += 2) {
                    if (l += r, h = parseFloat(e[n + 2]), s = parseFloat(e[n + 3]), .999999 < l)
                        for (a = 1 / (Math.floor(l) + 1), i = 1; .999999 < l;) u += (f + (h - f) * a * i).toFixed(2) + "," + (g + (s - g) * a * i).toFixed(2) + " ", l--, i++;
                    u += h + "," + s + " ", f = h, g = s
                }
                return u
            },
            r = function(e) {
                var t = e[0].match(w) || [],
                    r = e[1].match(w) || [],
                    n = r.length - t.length;
                0 < n ? e[0] = o(t, n) : e[1] = o(r, -n)
            },
            D = function(t) {
                return isNaN(t) ? r : function(e) {
                    r(e), e[1] = function(e, t) {
                        if (!t) return e;
                        var r, n, o, i = e.match(w) || [],
                            a = i.length,
                            h = "";
                        for ("reverse" === t ? (n = a - 1, r = -2) : (n = (2 * (parseInt(t, 10) || 0) + 1 + 100 * a) % a, r = 2), o = 0; o < a; o += 2) h += i[n - 1] + "," + i[n] + " ", n = (n + r) % a;
                        return h
                    }(e[1], parseInt(t, 10))
                }
            },
            h = function(e, t) {
                var r, n, o, i, a, h, s, l, f, g, u, c, p, d, m, C, v, b, S, M, A, y = e.tagName.toLowerCase(),
                    x = .552284749831;
                return "path" !== y && e.getBBox ? (h = function(e, t) {
                    var r, n = _gsScope.document.createElementNS("http://www.w3.org/2000/svg", "path"),
                        o = Array.prototype.slice.call(e.attributes),
                        i = o.length;
                    for (t = "," + t + ","; - 1 < --i;) r = o[i].nodeName.toLowerCase(), -1 === t.indexOf("," + r + ",") && n.setAttributeNS(null, r, o[i].nodeValue);
                    return n
                }(e, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), "rect" === y ? (i = +e.getAttribute("rx") || 0, a = +e.getAttribute("ry") || 0, n = +e.getAttribute("x") || 0, o = +e.getAttribute("y") || 0, g = (+e.getAttribute("width") || 0) - 2 * i, u = (+e.getAttribute("height") || 0) - 2 * a, r = i || a ? "M" + (C = (d = (p = n + i) + g) + i) + "," + (b = o + a) + " V" + (S = b + u) + " C" + [C, M = S + a * x, m = d + i * x, A = S + a, d, A, d - (d - p) / 3, A, p + (d - p) / 3, A, p, A, c = n + i * (1 - x), A, n, M, n, S, n, S - (S - b) / 3, n, b + (S - b) / 3, n, b, n, v = o + a * (1 - x), c, o, p, o, p + (d - p) / 3, o, d - (d - p) / 3, o, d, o, m, o, C, v, C, b].join(",") + "z" : "M" + (n + g) + "," + o + " v" + u + " h" + -g + " v" + -u + " h" + g + "z") : "circle" === y || "ellipse" === y ? ("circle" === y ? l = (i = a = +e.getAttribute("r") || 0) * x : (i = +e.getAttribute("rx") || 0, l = (a = +e.getAttribute("ry") || 0) * x), r = "M" + ((n = +e.getAttribute("cx") || 0) + i) + "," + (o = +e.getAttribute("cy") || 0) + " C" + [n + i, o + l, n + (s = i * x), o + a, n, o + a, n - s, o + a, n - i, o + l, n - i, o, n - i, o - l, n - s, o - a, n, o - a, n + s, o - a, n + i, o - l, n + i, o].join(",") + "z") : "line" === y ? r = G(T("M" + (e.getAttribute("x1") || 0) + "," + (e.getAttribute("y1") || 0) + " L" + (e.getAttribute("x2") || 0) + "," + (e.getAttribute("y2") || 0))) : "polyline" !== y && "polygon" !== y || (r = "M" + (n = (f = (e.getAttribute("points") + "").match(w) || []).shift()) + "," + (o = f.shift()) + " L" + f.join(","), "polygon" === y && (r += "," + n + "," + o + "z")), h.setAttribute("d", r), t && e.parentNode && (e.parentNode.insertBefore(h, e), e.parentNode.removeChild(e)), h) : e
            },
            Q = function(e, t, r) {
                var n, o, i = "string" == typeof e;
                return (!i || a.test(e) || (e.match(w) || []).length < 3) && ((n = i ? u.selector(e) : e && e[0] ? e : [e]) && n[0] ? (o = (n = n[0]).nodeName.toUpperCase(), t && "PATH" !== o && (n = h(n, !1), o = "PATH"), e = n.getAttribute("PATH" === o ? "d" : "points") || "", n === r && (e = n.getAttributeNS(null, "data-original") || e)) : (z("WARNING: invalid morph to: " + e), e = !1)), e
            },
            U = function(e) {
                for (var t, r, n, o, i, a = e.length; - 1 < --a;)
                    for (i = (t = e[a]).length - 2, o = 0; o < i; o += 6) r = t[o + 2] - t[o], n = t[o + 3] - t[o + 1], t[o + 2] = Math.atan2(n, r), t[o + 3] = Math.sqrt(r * r + n * n), r = t[o + 6] - t[o + 4], n = t[o + 7] - t[o + 5], t[o + 4] = Math.atan2(n, r), t[o + 5] = Math.sqrt(r * r + n * n);
                return e
            },
            W = "Use MorphSVGPlugin.convertToPath(elementOrSelectorText) to convert to a path before morphing.",
            Z = _gsScope._gsDefine.plugin({
                propName: "morphSVG",
                API: 2,
                global: !0,
                version: "0.9.0",
                init: function(e, t, r, n) {
                    var o, i, a, h, s, l, f, g, u, c;
                    if ("function" != typeof e.setAttribute) return !1;
                    if ("function" == typeof t && (t = t(n, e)), !_) return window.location.href = "http://" + x + N + "?plugin=" + M + "&source=codepen", !1;
                    if (s = "POLYLINE" === (o = e.nodeName.toUpperCase()) || "POLYGON" === o, "PATH" !== o && !s) return z("WARNING: cannot morph a <" + o + "> SVG element. " + W), !1;
                    if (i = "PATH" === o ? "d" : "points", ("string" == typeof t || t.getBBox || t[0]) && (t = {
                            shape: t
                        }), h = Q(t.shape || t.d || t.points || "", "d" === i, e), s && S.test(h)) return z("WARNING: a <" + o + "> cannot accept path data. " + W), !1;
                    if (l = t.shapeIndex || 0 === t.shapeIndex ? t.shapeIndex : "auto", f = t.map || Z.defaultMap, h) {
                        if ((this._target = e).getAttributeNS(null, "data-original") || e.setAttributeNS(null, "data-original", e.getAttribute(i)), t.smooth) {
                            var p, d, m, C, v = T(e.getAttribute(i)),
                                b = T(h);
                            if (!F(v, b, l, f)) return !1;
                            for (v = U(v), b = U(b), d = v.length; - 1 < --d;)
                                for (m = v[d], C = b[d], p = 0; p < m.length; p++) m[p] !== C[p] && (a = this._addTween(m, p, m[p], C[p]));
                            this._smooth = v
                        } else a = this._addTween(e, "setAttribute", e.getAttribute(i) + "", h + "", "morphSVG", !1, i, "object" == typeof t.precompile ? function(e) {
                            e[0] = t.precompile[0], e[1] = t.precompile[1]
                        } : "d" === i ? (g = l, u = f, c = t.precompile, u || c || g || 0 === g ? function(e) {
                            H(e, g, u, c)
                        } : H) : D(l));
                        a && (this._overwriteProps.push("morphSVG"), a.end = h, a.endProp = i)
                    }
                    return !0
                },
                set: function(e) {
                    var t;
                    if (this._super.setRatio.call(this, e), 1 === e)
                        for (t = this._firstPT; t;) t.end && this._target.setAttribute(t.endProp, t.end), t = t._next;
                    else if (this._smooth) {
                        var r, n, o, i, a, h, s, l, f, g, u = this._smooth,
                            c = 100,
                            p = "";
                        for (g = 0; g < u.length; g++)
                            for (n = (r = u[g]).length - 2, p += "M" + r[0] + " " + r[1] + " C", f = 2; f < n; f += 6) o = r[f], a = r[f + 1], i = r[f + 2], h = r[f + 3], s = r[f + 4], l = r[f + 5], p += ((r[f - 2] + Math.cos(o) * a) * c | 0) / c + " " + ((r[f - 1] + Math.sin(o) * a) * c | 0) / c + " " + ((s - Math.cos(i) * h) * c | 0) / c + " " + ((l - Math.sin(i) * h) * c | 0) / c + " " + s + " " + l + " ";
                        this._target.setAttribute("d", p)
                    }
                }
            });
        Z.pathFilter = H, Z.pointsFilter = r, Z.subdivideRawBezier = L, Z.defaultMap = "size", Z.pathDataToRawBezier = function(e) {
            return T(Q(e, !0))
        }, Z.equalizeSegmentQuantity = F, Z.convertToPath = function(e, t) {
            "string" == typeof e && (e = u.selector(e));
            for (var r = e && 0 !== e.length ? e.length && e[0] && e[0].nodeType ? Array.prototype.slice.call(e, 0) : [e] : [], n = r.length; - 1 < --n;) r[n] = h(r[n], !1 !== t);
            return r
        }, Z.pathDataToBezier = function(e, t) {
            var r, n, o, i, a, h, s, l, f = T(Q(e, !0))[0] || [],
                g = 0;
            if (l = (t = t || {}).align || t.relative, i = t.matrix || [1, 0, 0, 1, 0, 0], a = t.offsetX || 0, h = t.offsetY || 0, "relative" === l || !0 === l ? (a -= f[0] * i[0] + f[1] * i[2], h -= f[0] * i[1] + f[1] * i[3], g = "+=") : (a += i[4], h += i[5], l && (l = "string" == typeof l ? u.selector(l) : l && l[0] ? l : [l]) && l[0] && (a -= (s = l[0].getBBox() || {
                    x: 0,
                    y: 0
                }).x, h -= s.y)), r = [], o = f.length, i && "1,0,0,1,0,0" !== i.join(","))
                for (n = 0; n < o; n += 2) r.push({
                    x: g + (f[n] * i[0] + f[n + 1] * i[2] + a),
                    y: g + (f[n] * i[1] + f[n + 1] * i[3] + h)
                });
            else
                for (n = 0; n < o; n += 2) r.push({
                    x: g + (f[n] + a),
                    y: g + (f[n + 1] + h)
                });
            return r
        }
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(e) {
        "use strict";
        var t = function() {
            return (_gsScope.GreenSockGlobals || _gsScope).MorphSVGPlugin
        };
        "undefined" != typeof module && module.exports ? (require("../TweenLite.js"), module.exports = t()) : "function" == typeof define && define.amd && define(["TweenLite"], t)
    }();