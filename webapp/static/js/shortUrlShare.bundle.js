!
function(e) {
    function t(t) {
        for (var r, i, l = t[0], u = t[1], s = t[2], f = 0, p = []; f < l.length; f++) i = l[f],
        o[i] && p.push(o[i][0]),
        o[i] = 0;
        for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r]);
        for (c && c(t); p.length;) p.shift()();
        return a.push.apply(a, s || []),
        n()
    }
    function n() {
        for (var e, t = 0; t < a.length; t++) {
            for (var n = a[t], r = !0, l = 1; l < n.length; l++) {
                var u = n[l];
                0 !== o[u] && (r = !1)
            }
            r && (a.splice(t--, 1), e = i(i.s = n[0]))
        }
        return e
    }
    var r = {},
    o = {
        2 : 0
    },
    a = [];
    function i(t) {
        if (r[t]) return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, i),
        n.l = !0,
        n.exports
    }
    i.m = e,
    i.c = r,
    i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    },
    i.r = function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    },
    i.n = function(e) {
        var t = e && e.__esModule ?
        function() {
            return e.
        default
        }:
        function() {
            return e
        };
        return i.d(t, "a", t),
        t
    },
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    i.p = "";
    var l = window.webpackJsonp = window.webpackJsonp || [],
    u = l.push.bind(l);
    l.push = t,
    l = l.slice();
    for (var s = 0; s < l.length; s++) t(l[s]);
    var c = u;
    a.push([365, 0]),
    n()
} ({
    357 : function(e, t, n) {
        e.exports = "imgs/title2-2i-VC1.png"
    },
    358 : function(e, t, n) {
        e.exports = "imgs/title-3ZONA8.png"
    },
    365 : function(e, t, n) {
        "use strict";
        var r = v(n(95)),
        o = v(n(47)),
        a = Object.assign ||
        function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        } ();
        n(89),
        n(46);
        var l = n(0),
        u = v(l),
        s = n(14),
        c = n(113),
        f = (n(364), v(n(734))),
        p = v(n(168)),
        h = n(111),
        d = v(n(358));
        v(n(357));
        function v(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        var g = function(e) {
            function t(e) { !
                function(e, t) {
                    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                } (this, t);
                var n = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return ! t || "object" != typeof t && "function" != typeof t ? e: t
                } (this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {
                    isHowToInviteVisible: !1,
                    master_nick: "这个人很懒，还没设置昵称",
                    invite_code: "",
                    register: !1
                },
                n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            } (t, l.PureComponent),
            i(t, [{
                key: "componentDidMount",
                value: function() {
                    this.getMsgData()
                }
            },
            {
                key: "getMsgData",
                value: function() {
                    var e, t = (e = regeneratorRuntime.mark(function e() {
                        var t;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                (0, h.getData)();
                            case 2:
                                1e3 === (t = e.sent).status && this.setState(a({},
                                this.state, t.data)),
                                console.log(t);
                            case 5:
                            case "end":
                                return e.stop()
                            }
                        },
                        e, this)
                    }),
                    function() {
                        var t = e.apply(this, arguments);
                        return new Promise(function(e, n) {
                            return function r(o, a) {
                                try {
                                    var i = t[o](a),
                                    l = i.value
                                } catch(e) {
                                    return void n(e)
                                }
                                if (!i.done) return Promise.resolve(l).then(function(e) {
                                    r("next", e)
                                },
                                function(e) {
                                    r("throw", e)
                                });
                                e(l)
                            } ("next")
                        })
                    });
                    return function() {
                        return t.apply(this, arguments)
                    }
                } ()
            },
            {
                key: "triggerHowToInvite",
                value: function() {
                    this.setState({
                        isHowToInviteVisible: !this.state.isHowToInviteVisible
                    })
                }
            },
            {
                key: "render",
                value: function() {
                    var e = this,
                    t = this.state,
                    n = t.isHowToInviteVisible,
                    a = t.master_nick,
                    i = t.invite_code,
                    l = t.register;
                    return u.
                default.createElement("div", {
                        className: f.
                    default.shortUrlShare
                    },
                    u.
                default.createElement("h1", null, a || "这个人很懒，还没设置昵称"), u.
                default.createElement("h3", null, "邀您"), u.
                default.createElement("img", {
                        src: d.
                    default,
                        alt: "",
                        className: f.
                    default.titleImg
                    }), u.
                default.createElement("h2", null, "看看文章就赚钱，微信", u.
                default.createElement("span", null, "1元"), "可提现"), u.
                default.createElement("div", {
                        className: f.
                    default.inviteCode
                    },
                    u.
                default.createElement(c.CopyToClipboard, {
                        onCopy: function(e) {
                            o.
                        default.success("复制成功", 2)
                        },
                        text: i
                    },
                    u.
                default.createElement("span", null, i)), u.
                default.createElement("a", {
                        className: f.
                    default.howToInvite,
                        onClick: this.triggerHowToInvite.bind(this)
                    })), u.
                default.createElement("button", {
                        className: f.
                    default.btn,
                        onClick: function() { (0, h.downloadAndOpen)()
                        }
                    },
                    l ? "打开app加好友": "立刻下载"), u.
                default.createElement("h4", null, "输入好友邀请码，", u.
                default.createElement("span", null, "您和好友都可"), u.
                default.createElement("br", null), u.
                default.createElement("span", null, "获得1-3元奖励"), "，就要一起赚"), u.
                default.createElement(r.
                default, {
                        transparent: !0,
                        visible: n,
                        onClose: this.triggerHowToInvite.bind(this),
                        footer: [{
                            text: "知道了",
                            onPress: function() {
                                e.triggerHowToInvite()
                            }
                        }]
                    },
                    u.
                default.createElement(p.
                default, null)))
                }
            }]),
            t
        } (); (0, s.render)(u.
    default.createElement(g, null), document.getElementById("root"))
    },
    734 : function(e, t) {
        e.exports = {
            shortUrlShare: "src-pages-shortUrlShare__shortUrlShare--dQnbNQ",
            titleImg: "src-pages-shortUrlShare__titleImg--1kDXkQ",
            inviteCode: "src-pages-shortUrlShare__inviteCode--lxstzR",
            howToInvite: "src-pages-shortUrlShare__howToInvite--1v-gJo",
            btn: "src-pages-shortUrlShare__btn--3hqXJL"
        }
    }
});