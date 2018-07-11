!
function(e) {
    function t(t) {
        for (var a, i, u = t[0], o = t[1], s = t[2], f = 0, d = []; f < u.length; f++) i = u[f],
        l[i] && d.push(l[i][0]),
        l[i] = 0;
        for (a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
        for (c && c(t); d.length;) d.shift()();
        return r.push.apply(r, s || []),
        n()
    }
    function n() {
        for (var e, t = 0; t < r.length; t++) {
            for (var n = r[t], a = !0, u = 1; u < n.length; u++) {
                var o = n[u];
                0 !== l[o] && (a = !1)
            }
            a && (r.splice(t--, 1), e = i(i.s = n[0]))
        }
        return e
    }
    var a = {},
    l = {
        7 : 0
    },
    r = [];
    function i(t) {
        if (a[t]) return a[t].exports;
        var n = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, i),
        n.l = !0,
        n.exports
    }
    i.m = e,
    i.c = a,
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
    var u = window.webpackJsonp = window.webpackJsonp || [],
    o = u.push.bind(u);
    u.push = t,
    u = u.slice();
    for (var s = 0; s < u.length; s++) t(u[s]);
    var c = o;
    r.push([406, 0]),
    n()
} ({
    370 : function(e, t, n) {
        e.exports = "../imgs/how_three-13cvJi.png"
    },
    371 : function(e, t, n) {
        e.exports = "../imgs/how_two-guE2BR.png"
    },
    372 : function(e, t, n) {
        e.exports = "../imgs/how_one-3cL-xN.png"
    },
    373 : function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } (),
        l = n(0),
        r = c(l),
        i = c(n(742)),
        u = c(n(372)),
        o = c(n(371)),
        s = c(n(370));
        function c(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        var f = function(e) {
            function t() {
                return function(e, t) {
                    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                } (this, t),
                function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return ! t || "object" != typeof t && "function" != typeof t ? e: t
                } (this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
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
            a(t, [{
                key: "render",
                value: function() {
                    return r.
                default.createElement("div", {
                        className: i.
                    default.HowToInvite
                    },
                    r.
                default.createElement("h1", null, "邀请码是什么？"), r.
                default.createElement("p", null, "邀请码是您在微鲤头条的身份的标识"), r.
                default.createElement("img", {
                        src: u.
                    default,
                        alt: ""
                    }), r.
                default.createElement("h1", null, "邀请码怎么用？"), r.
                default.createElement("p", null, "分享邀请码给短信好友或微信好友，安装后输入你的邀请码完成邀请"), r.
                default.createElement("img", {
                        src: o.
                    default,
                        alt: ""
                    }), r.
                default.createElement("p", null, "若你的好友是通过手机应用商店搜索“微鲤头条”安装注册的，需登陆后输入你的邀请码后才能成为你的好友"), r.
                default.createElement("img", {
                        src: s.
                    default,
                        alt: ""
                    }))
                }
            }]),
            t
        } ();
        t.
    default = f
    },
    374 : function(e, t, n) {
        e.exports = "../imgs/no_friends-2oR5IH.png"
    },
    375 : function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } (),
        l = n(0),
        r = o(l),
        i = o(n(744)),
        u = o(n(374));
        function o(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        var s = function(e) {
            function t(e) {
                return function(e, t) {
                    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                } (this, t),
                function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return ! t || "object" != typeof t && "function" != typeof t ? e: t
                } (this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
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
            a(t, [{
                key: "render",
                value: function() {
                    return r.
                default.createElement("div", {
                        className: [i.
                    default.FriendListEmpty, this.props.className].join(" ")
                    },
                    r.
                default.createElement("img", {
                        src: u.
                    default,
                        alt: ""
                    }), r.
                default.createElement("p", null, "您还未参与活动"))
                }
            }]),
            t
        } ();
        t.
    default = s
    },
    376 : function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = h(n(52)),
        l = h(n(47)),
        r = Object.assign ||
        function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        },
        i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } ();
        n(51),
        n(46);
        var u = n(0),
        o = h(u),
        s = h(n(746)),
        c = n(80),
        f = n(45),
        d = h(n(167)),
        p = h(n(112)),
        m = h(n(21)),
        v = h(n(375));
        function h(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        function E(e) {
            if (Array.isArray(e)) {
                for (var t = 0,
                n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }
        function _(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    return function a(l, r) {
                        try {
                            var i = t[l](r),
                            u = i.value
                        } catch(e) {
                            return void n(e)
                        }
                        if (!i.done) return Promise.resolve(u).then(function(e) {
                            a("next", e)
                        },
                        function(e) {
                            a("throw", e)
                        });
                        e(u)
                    } ("next")
                })
            }
        }
        var y = m.
    default.isWeilitt() ? "wltt": m.
    default.isZhwnl() ? "zhwnl": "error",
        g = function(e) {
            function t(e) { !
                function(e, t) {
                    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                } (this, t);
                var n = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return ! t || "object" != typeof t && "function" != typeof t ? e: t
                } (this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {
                    page: 1,
                    size: 10,
                    count: 0,
                    list: [],
                    more_reward_contacts: [],
                    use_wnl_contacts: [],
                    activityUserList: []
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
            } (t, u.PureComponent),
            i(t, [{
                key: "componentDidMount",
                value: function() {
                    this.getFriendList({
                        page: this.state.page,
                        size: this.state.size
                    })
                }
            },
            {
                key: "getFriendList",
                value: function() {
                    var e = _(regeneratorRuntime.mark(function e(t) {
                        var n, a;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                (0, c.getApprentice)(t);
                            case 2:
                                n = e.sent,
                                a = n.data,
                                console.log("friendList", a),
                                this.setState(r({},
                                this.state, a, {
                                    list: [].concat(E(this.state.list), E(a.list))
                                }));
                            case 6:
                            case "end":
                                return e.stop()
                            }
                        },
                        e, this)
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                } ()
            },
            {
                key: "loadMoreFriend",
                value: function() {
                    var e = this;
                    this.setState({
                        page: this.state.page + 1
                    },
                    function() {
                        e.getFriendList({
                            page: e.state.page,
                            size: e.state.size
                        })
                    })
                }
            },
            {
                key: "render",
                value: function() {
                    var e = this,
                    t = this.props,
                    n = t.hasCampaign,
                    r = t.activityUserList,
                    i = t.upload_contact,
                    u = t.invite_user_count,
                    m = t.apprentice_income,
                    h = this.state,
                    E = h.list,
                    g = (h.page, h.size, h.count),
                    b = h.more_reward_contacts,
                    w = h.use_wnl_contacts;
                    return console.log("activityUserList", r),
                    o.
                default.createElement("div", {
                        id: "MyFriends",
                        className: [s.
                    default.MyFriends, this.props.className].join(" ")
                    },
                    n ? o.
                default.createElement("div", {
                        className: s.
                    default.activitySuccessInvite
                    },
                    o.
                default.createElement("h1", null, "活动邀请的好友"), r.list.length > 0 ? o.
                default.createElement("div", null, o.
                default.createElement("table", null, o.
                default.createElement("thead", null, o.
                default.createElement("tr", {
                        className: s.
                    default.tableHead
                    },
                    o.
                default.createElement("th", {
                        align: "left"
                    },
                    "昵称"), o.
                default.createElement("th", null, "累计贡献"), o.
                default.createElement("th", null, "是否达标"), o.
                default.createElement("th", null, "提醒好友"))), o.
                default.createElement("tbody", null, r.list.map(function(t) {
                        return o.
                    default.createElement("tr", {
                            key: t.uid
                        },
                        o.
                    default.createElement("td", {
                            style: {
                                textAlign: "left"
                            }
                        },
                        t.nickname), o.
                    default.createElement("td", null, t.income), o.
                    default.createElement("td", null, t.qualified ? "是": "否"), o.
                    default.createElement("td", {
                            width: "100"
                        },
                        "wltt" === y ? o.
                    default.createElement(a.
                    default, {
                            className: s.
                        default.btn,
                            activeClassName: s.
                        default.btnActive,
                            type: "ghost",
                            size: "small",
                            onClick: _(regeneratorRuntime.mark(function n() {
                                var a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2,
                                        (0, c.remindFriend)(t.servant_uid, 1);
                                    case 2:
                                        1e3 === (a = e.sent).status ? l.
                                    default.success("提醒成功"):
                                        l.
                                    default.fail(a.desc);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                    }
                                },
                                n, e)
                            }))
                        },
                        "提醒好友") : t.install_wltt_app ? o.
                    default.createElement("span", {
                            className: s.
                        default.success
                        },
                        "已安装") : o.
                    default.createElement(a.
                    default, {
                            className: s.
                        default.btn,
                            activeClassName: s.
                        default.btnActive,
                            type: "ghost",
                            size: "small",
                            onClick: _(regeneratorRuntime.mark(function n() {
                                var a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2,
                                        (0, c.remindFriend)(t.servant_uid, 2);
                                    case 2:
                                        1e3 === (a = e.sent).status ? l.
                                    default.success("提醒成功"):
                                        l.
                                    default.fail(a.desc);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                    }
                                },
                                n, e)
                            }))
                        },
                        "安装+500")))
                    }))), o.
                default.createElement("div", {
                        className: s.
                    default.inviteMoreFriend
                    },
                    "活动期间，好友阅读文章赚取300金币，即为达标")) : o.
                default.createElement(v.
                default, null)) : null, E && E.length > 0 ? o.
                default.createElement("div", {
                        className: s.
                    default.successInvite
                    },
                    o.
                default.createElement("h1", null, "已邀请", o.
                default.createElement("span", null, u), "位好友, 累计贡献", o.
                default.createElement("span", null, m), "金币"), o.
                default.createElement("table", null, o.
                default.createElement("thead", null, o.
                default.createElement("tr", {
                        className: s.
                    default.tableHead
                    },
                    o.
                default.createElement("th", {
                        align: "left"
                    },
                    "昵称"), o.
                default.createElement("th", null, "今日贡献"), o.
                default.createElement("th", null, "累计贡献"), o.
                default.createElement("th", null, "提醒好友"))), o.
                default.createElement("tbody", null, E.map(function(t) {
                        return o.
                    default.createElement("tr", {
                            key: t.servant_uid
                        },
                        o.
                    default.createElement("td", {
                            style: {
                                textAlign: "left"
                            }
                        },
                        t.servant_name), o.
                    default.createElement("td", null, t.today_profit), o.
                    default.createElement("td", null, t.profit), o.
                    default.createElement("td", {
                            width: "100"
                        },
                        "wltt" === y ? o.
                    default.createElement(a.
                    default, {
                            className: s.
                        default.btn,
                            activeClassName: s.
                        default.btnActive,
                            type: "ghost",
                            size: "small",
                            onClick: _(regeneratorRuntime.mark(function n() {
                                var a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2,
                                        (0, c.remindFriend)(t.servant_uid, 1);
                                    case 2:
                                        1e3 === (a = e.sent).status ? l.
                                    default.success("提醒成功"):
                                        l.
                                    default.fail(a.desc);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                    }
                                },
                                n, e)
                            }))
                        },
                        "提醒好友") : t.install_wltt_app ? o.
                    default.createElement("span", {
                            className: s.
                        default.success
                        },
                        "已安装") : o.
                    default.createElement(a.
                    default, {
                            className: s.
                        default.btn,
                            activeClassName: s.
                        default.btnActive,
                            type: "ghost",
                            size: "small",
                            onClick: _(regeneratorRuntime.mark(function n() {
                                var a;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2,
                                        (0, c.remindFriend)(t.servant_uid, 2);
                                    case 2:
                                        1e3 === (a = e.sent).status ? l.
                                    default.success("提醒成功"):
                                        l.
                                    default.fail(a.desc);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                    }
                                },
                                n, e)
                            }))
                        },
                        "安装+500")))
                    }))), E.length < g ? o.
                default.createElement(a.
                default, {
                        onClick: this.loadMoreFriend.bind(this)
                    },
                    "查看更多") : o.
                default.createElement("p", {
                        className: s.
                    default.allFriendLoaded
                    },
                    "全部加载完毕")) : null, b && b.length > 0 || w && w.length > 0 ? o.
                default.createElement("div", {
                        className: s.
                    default.inviteMoreFriend
                    },
                    "成功邀请以下好友，即可赚百元零花钱") : null, w && w.length > 0 ? o.
                default.createElement("div", {
                        className: s.
                    default.canGetHighIncome
                    },
                    o.
                default.createElement("h1", null, "正在使用微鲤头条"), o.
                default.createElement("table", null, o.
                default.createElement("tbody", null, w.map(function(e) {
                        return o.
                    default.createElement("tr", {
                            key: e.servant_uid
                        },
                        o.
                    default.createElement("td", {
                            style: {
                                textAlign: "left"
                            }
                        },
                        e.servant_name), o.
                    default.createElement("td", null, e.invite_reward_desc), o.
                    default.createElement("td", {
                            width: "100"
                        },
                        o.
                    default.createElement(a.
                    default, {
                            className: s.
                        default.btn,
                            activeClassName: s.
                        default.btnActive,
                            type: "ghost",
                            size: "small",
                            onClick: function() { (0, c.sendMessage)(e.phone, e.invite_short_msg)
                            }
                        },
                        "立刻邀请")))
                    })))) : null, b && b.length > 0 ? o.
                default.createElement("div", {
                        className: s.
                    default.useZhwll
                    },
                    o.
                default.createElement("h1", null, "可得超高收益"), o.
                default.createElement("table", null, o.
                default.createElement("tbody", null, b.map(function(e) {
                        return o.
                    default.createElement("tr", {
                            key: e.servant_uid
                        },
                        o.
                    default.createElement("td", {
                            style: {
                                textAlign: "left"
                            }
                        },
                        e.servant_name), o.
                    default.createElement("td", null, e.invite_reward_desc), o.
                    default.createElement("td", {
                            width: "100"
                        },
                        o.
                    default.createElement(a.
                    default, {
                            className: s.
                        default.btn,
                            activeClassName: s.
                        default.btnActive,
                            type: "ghost",
                            size: "small",
                            onClick: function() { (0, c.sendMessage)(e.phone, e.invite_short_msg)
                            }
                        },
                        "立刻邀请")))
                    })))) : null, (!b || b.length <= 0) && (!w || w.length <= 0) ? o.
                default.createElement("div", {
                        className: s.
                    default.bottomBanner
                    },
                    o.
                default.createElement("a", {
                        onClick: function() { (0, f.readAddressBook)(i)
                        }
                    },
                    o.
                default.createElement("img", {
                        src: d.
                    default,
                        alt: ""
                    }))) : o.
                default.createElement("a", {
                        className: s.
                    default.showAllFriend,
                        href: "wl://contacts?hascontacts=1"
                    },
                    "查看全部好友", o.
                default.createElement("img", {
                        src: p.
                    default
                    })))
                }
            }]),
            t
        } ();
        t.
    default = g
    },
    377 : function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } (),
        l = n(0),
        r = o(l),
        i = o(n(748)),
        u = o(n(21));
        function o(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        var s = u.
    default.isZhwnl() ? "中华万年历": (u.
    default.isWeilitt(), "微鲤头条"),
        c = function(e) {
            function t(e) {
                return function(e, t) {
                    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                } (this, t),
                function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return ! t || "object" != typeof t && "function" != typeof t ? e: t
                } (this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
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
            a(t, [{
                key: "render",
                value: function() {
                    var e = this.props.hasCampaign;
                    return r.
                default.createElement("div", {
                        className: [i.
                    default.RewardNote, this.props.className].join(" ")
                    },
                    e ? r.
                default.createElement("div", null, r.
                default.createElement("h1", null, "邀请的好处"), r.
                default.createElement("h2", null, "0l.邀请奖励"), r.
                default.createElement("p", null, "好友（未下载使用", s, "）下载APP并输入您的", r.
                default.createElement("span", null, "邀请码"), "之后，您可获得", r.
                default.createElement("span", null, "30000金币"), "。该金币分", r.
                default.createElement("span", null, "多次"), "发放，", r.
                default.createElement("span", null, "首次"), "邀请可额外获得", r.
                default.createElement("span", null, "10000金币"), "奖励。"), r.
                default.createElement("h2", null, "02.提成奖励规则"), r.
                default.createElement("p", null, "好友每获得", r.
                default.createElement("span", null, "100金币"), "的阅读收益，您将额外获得", r.
                default.createElement("span", null, "30金币"), "的贡献；"), r.
                default.createElement("p", null, "好友完成搜索任务，您还将额外获得金币贡献：", r.
                default.createElement("span", null, "10次奖励100"), "、", r.
                default.createElement("span", null, "20次奖励150"), "、", r.
                default.createElement("span", null, "30次奖励250")), r.
                default.createElement("h2", null, "03.邀请奖励规则"), r.
                default.createElement("div", {
                        className: i.
                    default.rule
                    },
                    r.
                default.createElement("ul", null, r.
                default.createElement("li", null, "次数"), r.
                default.createElement("li", null, "第一次"), r.
                default.createElement("li", null, "第二次"), r.
                default.createElement("li", null, "第三次"), r.
                default.createElement("li", null, "第四次"), r.
                default.createElement("li", null, "第五次"), r.
                default.createElement("li", null, "第六次"), r.
                default.createElement("li", null, "第七次")), r.
                default.createElement("ul", null, r.
                default.createElement("li", null, "奖励金币"), r.
                default.createElement("li", null, "5000"), r.
                default.createElement("li", null, "4000"), r.
                default.createElement("li", null, "3000"), r.
                default.createElement("li", null, "3000"), r.
                default.createElement("li", null, "3000"), r.
                default.createElement("li", null, "4000"), r.
                default.createElement("li", null, "5000")), r.
                default.createElement("div", {
                        className: i.
                    default.ruleInfo
                    },
                    r.
                default.createElement("p", null, "每成功邀请1个好友（未下载使用", s, "），即可获得", r.
                default.createElement("span", null, "30000金币"), "。当好友填写您的邀请码，您和好友均可", r.
                default.createElement("span", null, "立即"), "获得", r.
                default.createElement("span", null, "3000金币"), "奖励。您余下", r.
                default.createElement("span", null, "27000金币"), "奖励将分", r.
                default.createElement("span", null, "7次"), "发放（自邀请成功的", r.
                default.createElement("span", null, "第二天"), "起），只需您的好友单日获得", r.
                default.createElement("span", null, "200金币"), "以上的", r.
                default.createElement("span", null, "阅读"), "奖励，您即可得到1次奖励。每位好友每天至多发放", r.
                default.createElement("span", null, "1次"), "，该奖励自邀请成功之日起", r.
                default.createElement("span", null, "30日"), "内有效。")), r.
                default.createElement("ul", null, r.
                default.createElement("li", null, "次数"), r.
                default.createElement("li", null, "第一次"), r.
                default.createElement("li", null, "第二次"), r.
                default.createElement("li", null, "第三次"), r.
                default.createElement("li", null, "第四次"), r.
                default.createElement("li", null, "第五次"), r.
                default.createElement("li", null, "第六次"), r.
                default.createElement("li", null, "第七次")), r.
                default.createElement("ul", null, r.
                default.createElement("li", null, "奖励金币"), r.
                default.createElement("li", null, "500"), r.
                default.createElement("li", null, "400"), r.
                default.createElement("li", null, "300"), r.
                default.createElement("li", null, "300"), r.
                default.createElement("li", null, "300"), r.
                default.createElement("li", null, "400"), r.
                default.createElement("li", null, "500")), r.
                default.createElement("div", {
                        className: i.
                    default.ruleInfo
                    },
                    r.
                default.createElement("p", null, "每成功邀请1个好友（已下载使用", s, "）输入您的邀请码之后，您可获得", r.
                default.createElement("span", null, "2700金币"), "。该奖励将分7次发放（自邀请成功的", r.
                default.createElement("span", null, "第二天"), "起），只需您的好友单日获得", r.
                default.createElement("span", null, "200金币"), "以上的", r.
                default.createElement("span", null, "阅读"), "奖励，您即可得到1次奖励。每位好友每天至多发放", r.
                default.createElement("span", null, "1次"), "，该奖励自邀请成功之日起", r.
                default.createElement("span", null, "30日"), "内有效。"), r.
                default.createElement("p", null, "如有作弊嫌疑，将不会获得金币奖励。"))))
                }
            }]),
            t
        } ();
        t.
    default = c
    },
    378 : function(e, t, n) {
        e.exports = "imgs/icon_share_faceqr-3kw8X1.png"
    },
    379 : function(e, t, n) {
        e.exports = "imgs/icon_share_qzone-B-Fbl-.png"
    },
    380 : function(e, t, n) {
        e.exports = "imgs/icon_share_qq-2LI6AW.png"
    },
    381 : function(e, t, n) {
        e.exports = "imgs/icon_share_pengyouquan-2nnlXV.png"
    },
    382 : function(e, t, n) {
        e.exports = "imgs/icon_share_weixin-2okrwn.png"
    },
    383 : function(e, t, n) {
        e.exports = "imgs/icon_message-1DMEXf.png"
    },
    388 : function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = m(n(387)),
        l = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } ();
        n(386);
        var r = n(0),
        i = m(r),
        u = (n(45), m(n(750))),
        o = m(n(383)),
        s = m(n(382)),
        c = m(n(381)),
        f = m(n(380)),
        d = m(n(379)),
        p = m(n(378));
        function m(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        var v = function(e) {
            function t(e) {
                return function(e, t) {
                    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                } (this, t),
                function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return ! t || "object" != typeof t && "function" != typeof t ? e: t
                } (this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
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
            } (t, r.PureComponent),
            l(t, [{
                key: "render",
                value: function() {
                    var e = this.props,
                    t = e.apprentice_income,
                    n = e.upload_contact;
                    return i.
                default.createElement("ul", {
                        className: [u.
                    default.ShareList, this.props.className].join(" ")
                    },
                    i.
                default.createElement("li", null, i.
                default.createElement(a.
                default, {
                        text: "推荐",
                        size: "small"
                    },
                    i.
                default.createElement("a", {
                        href: "wl://contacts?hascontacts=" + (n ? 1 : 0)
                    },
                    i.
                default.createElement("img", {
                        src: o.
                    default,
                        alt: ""
                    }), i.
                default.createElement("p", null, "短信")))), i.
                default.createElement("li", null, i.
                default.createElement(a.
                default, {
                        text: "推荐",
                        size: "small"
                    },
                    i.
                default.createElement("a", {
                        href: "wl://coin/share?type=wx&yue=" + t
                    },
                    i.
                default.createElement("img", {
                        src: s.
                    default,
                        alt: ""
                    }), i.
                default.createElement("p", null, "微信")))), i.
                default.createElement("li", null, i.
                default.createElement("a", {
                        href: "wl://coin/share?type=pyq&yue=" + t
                    },
                    i.
                default.createElement("img", {
                        src: c.
                    default,
                        alt: ""
                    }), i.
                default.createElement("p", null, "朋友圈"))), i.
                default.createElement("li", null, i.
                default.createElement("a", {
                        href: "wl://coin/share?type=qzone&yue=" + t
                    },
                    i.
                default.createElement("img", {
                        src: d.
                    default,
                        alt: ""
                    }), i.
                default.createElement("p", null, "QQ空间"))), i.
                default.createElement("li", null, i.
                default.createElement("a", {
                        href: "wl://coin/share?type=qq&yue=" + t
                    },
                    i.
                default.createElement("img", {
                        src: f.
                    default,
                        alt: ""
                    }), i.
                default.createElement("p", null, "QQ好友"))), i.
                default.createElement("li", null, i.
                default.createElement("a", {
                        href: "wl://coin/share?type=f2f&yue=" + t
                    },
                    i.
                default.createElement("img", {
                        src: p.
                    default,
                        alt: ""
                    }), i.
                default.createElement("p", null, "面对面扫码"))))
                }
            }]),
            t
        } ();
        t.
    default = v
    },
    389 : function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign ||
        function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        },
        l = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } (),
        r = n(0),
        i = s(r),
        u = s(n(752)),
        o = s(n(21));
        function s(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        var c = function(e) {
            function t(e) { !
                function(e, t) {
                    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                } (this, t);
                var n = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return ! t || "object" != typeof t && "function" != typeof t ? e: t
                } (this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {
                    inviteProgress: [{
                        title: "邀请人数",
                        desc: "奖励金额",
                        status: "wait",
                        num: 0
                    },
                    {
                        title: "2",
                        desc: "3元",
                        status: "wait",
                        num: 2
                    },
                    {
                        title: "5",
                        desc: "10元",
                        status: "wait",
                        num: 5
                    },
                    {
                        title: "10",
                        desc: "30元",
                        status: "wait",
                        num: 10
                    }]
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
            } (t, r.PureComponent),
            l(t, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    this.state.inviteProgress.map(function(t, n) {
                        t.num < e.activityUserNum && (t.status = "finish"),
                        t.num === e.activityUserNum ? t.status = "finish": t.num > e.activityUserNum && (t.status = "process")
                    }),
                    this.setState(a({},
                    e, {
                        inviteProgress: this.state.inviteProgress
                    }))
                }
            },
            {
                key: "render",
                value: function() {
                    for (var e = this,
                    t = this.state.inviteProgress,
                    n = this.props.activityUserNum,
                    a = -1,
                    l = -1,
                    r = 0; r < t.length; r += 1)"finish" === t[r].status && t[r + 1] && (a = t[r + 1].num - n, l = t[r + 1].desc);
                    return i.
                default.createElement("div", {
                        className: [u.
                    default.InviteProcess, this.props.className].join(" ")
                    },
                    i.
                default.createElement("h1", null, "当前我已成功邀请", i.
                default.createElement("span", null, n), "人", i.
                default.createElement("a", {
                        onClick: function() {
                            e.props.changeTab(1);
                            var t = document.getElementById("MyFriends");
                            window.scrollTo(0, o.
                        default.getAbsPoint(t).y - 43)
                        }
                    },
                    "查看明细")), i.
                default.createElement("ul", {
                        className: u.
                    default.processWrap
                    },
                    t.map(function(e) {
                        return i.
                    default.createElement("li", {
                            className: [u.
                        default.processItem, u.
                        default[e.status]].join(" "),
                            key: e.title
                        },
                        i.
                    default.createElement("div", {
                            className: u.
                        default.title
                        },
                        e.title), i.
                    default.createElement("div", {
                            className: u.
                        default.node
                        }), i.
                    default.createElement("div", {
                            className: u.
                        default.desc
                        },
                        e.desc))
                    })), a <= 0 ? i.
                default.createElement("h1", null, "已经超过", t[t.length - 1].num, "人啦") : i.
                default.createElement("h1", null, "再邀请", i.
                default.createElement("span", null, a), "人，可得", i.
                default.createElement("span", null, l)))
                }
            }]),
            t
        } ();
        t.
    default = c
    },
    395 : function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = s(n(394)),
        l = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } ();
        n(392);
        var r = n(0),
        i = s(r),
        u = s(n(754)),
        o = n(80);
        function s(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        var c = function(e) {
            function t(e) { !
                function(e, t) {
                    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                } (this, t);
                var n = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return ! t || "object" != typeof t && "function" != typeof t ? e: t
                } (this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {
                    list: [],
                    selectedIndex: 0
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
            } (t, r.PureComponent),
            l(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    this.getNoteList(),
                    setTimeout(function() {
                        e.setSelectedIndex(1)
                    },
                    1e3)
                }
            },
            {
                key: "setSelectedIndex",
                value: function(e) {
                    this.setState({
                        selectedIndex: e
                    })
                }
            },
            {
                key: "getNoteList",
                value: function() {
                    var e, t = (e = regeneratorRuntime.mark(function e() {
                        var t;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                (0, o.getActivityAll)();
                            case 2:
                                t = e.sent,
                                this.setState({
                                    list: t
                                });
                            case 4:
                            case "end":
                                return e.stop()
                            }
                        },
                        e, this)
                    }),
                    function() {
                        var t = e.apply(this, arguments);
                        return new Promise(function(e, n) {
                            return function a(l, r) {
                                try {
                                    var i = t[l](r),
                                    u = i.value
                                } catch(e) {
                                    return void n(e)
                                }
                                if (!i.done) return Promise.resolve(u).then(function(e) {
                                    a("next", e)
                                },
                                function(e) {
                                    a("throw", e)
                                });
                                e(u)
                            } ("next")
                        })
                    });
                    return function() {
                        return t.apply(this, arguments)
                    }
                } ()
            },
            {
                key: "render",
                value: function() {
                    var e = this.state,
                    t = e.list,
                    n = e.selectedIndex,
                    l = [];
                    return t && (l = t),
                    i.
                default.createElement("div", {
                        className: [u.
                    default.TopNoteBar, this.props.className, l.length ? null: u.
                    default.empty].join(" ")
                    },
                    i.
                default.createElement(a.
                default, {
                        dots: !1,
                        dragging: !1,
                        swiping: !1,
                        selectedIndex: n,
                        autoplay: !0,
                        infinite: !0,
                        autoplayInterval: 3e3
                    },
                    l.map(function(e) {
                        return i.
                    default.createElement("div", {
                            key: e,
                            className: u.
                        default.item
                        },
                        "恭喜", e, "成功邀请10个好友，获得30元额外奖励")
                    })))
                }
            }]),
            t
        } ();
        t.
    default = c
    },
    406 : function(e, t, n) {
        "use strict";
        var a = F(n(95)),
        l = F(n(52)),
        r = F(n(405)),
        i = F(n(47)),
        u = Object.assign ||
        function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        },
        o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } ();
        n(89),
        n(51),
        n(398),
        n(46);
        var s = n(0),
        c = F(s),
        f = n(14),
        d = n(113),
        p = F(n(759)),
        m = F(n(395)),
        v = F(n(389)),
        h = F(n(388)),
        E = F(n(377)),
        _ = F(n(376)),
        y = F(n(373)),
        g = n(45),
        b = n(80),
        w = F(n(21));
        function F(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        function C(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    return function a(l, r) {
                        try {
                            var i = t[l](r),
                            u = i.value
                        } catch(e) {
                            return void n(e)
                        }
                        if (!i.done) return Promise.resolve(u).then(function(e) {
                            a("next", e)
                        },
                        function(e) {
                            a("throw", e)
                        });
                        e(u)
                    } ("next")
                })
            }
        }
        var I = function(e) {
            function t(e) { !
                function(e, t) {
                    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                } (this, t);
                var n = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return ! t || "object" != typeof t && "function" != typeof t ? e: t
                } (this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {
                    activeTab: parseInt(w.
                default.getQueryString("tab"), 10),
                    inputInviteCode: !1,
                    inviteCodeFromFriend: "",
                    apprentice_income: "------",
                    have_master: !0,
                    invite_code: "------",
                    invite_user_count: 0,
                    new_comer: !0,
                    total_income: "------",
                    upload_contact: !0,
                    hasCampaign: !0,
                    isShareModalShow: !1,
                    isHasMaster: !1,
                    isInputInviteCodeModalShow: !1,
                    isHowToInviteVisible: !1,
                    activityUserList: {
                        list: [],
                        total: 0
                    }
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
            } (t, s.PureComponent),
            o(t, [{
                key: "triggerShareModalVisible",
                value: function() {
                    this.setState({
                        isShareModalShow: !this.state.isShareModalShow
                    })
                }
            },
            {
                key: "triggerHowToInviteModalVisible",
                value: function() {
                    this.setState({
                        isHowToInviteVisible: !this.state.isHowToInviteVisible
                    })
                }
            },
            {
                key: "changeTab",
                value: function(e) {
                    this.setState({
                        activeTab: e
                    })
                }
            },
            {
                key: "triggerInputInviteModal",
                value: function() {
                    this.setState({
                        inputInviteCode: !this.state.inputInviteCode
                    })
                }
            },
            {
                key: "componentDidMount",
                value: function() {
                    if (this.getInviteCodeFromService(), this.state.hasCampaign && this.getCampaignUser(), 1 === this.state.activeTab) {
                        var e = document.getElementById("MyFriends");
                        setTimeout(function() {
                            console.log(w.
                        default.getAbsPoint(e)),
                            window.scrollTo(0, w.
                        default.getAbsPoint(e).y - 43)
                        },
                        500)
                    }
                }
            },
            {
                key: "getCampaignUser",
                value: function() {
                    var e = C(regeneratorRuntime.mark(function e() {
                        var t, n, a;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                (0, b.getActivityUser)();
                            case 2:
                                t = e.sent,
                                n = t.list,
                                a = t.total,
                                this.setState(u({},
                                this.state, {
                                    activityUserList: {
                                        list: n || [],
                                        total: a
                                    }
                                }));
                            case 6:
                            case "end":
                                return e.stop()
                            }
                        },
                        e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                } ()
            },
            {
                key: "getInviteCodeFromService",
                value: function() {
                    var e = C(regeneratorRuntime.mark(function e() {
                        var t, n;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                (0, g.getInviteCode)();
                            case 2:
                                t = e.sent,
                                n = t.data,
                                console.log(n),
                                this.setState(u({},
                                this.state, n, {
                                    inputInviteCode: !n.have_master && "1" === w.
                                default.getQueryString("input_code")
                                }));
                            case 6:
                            case "end":
                                return e.stop()
                            }
                        },
                        e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                } ()
            },
            {
                key: "handleInviteCodeChange",
                value: function(e) {
                    this.setState({
                        inviteCodeFromFriend: e
                    })
                }
            },
            {
                key: "sendInviteCode",
                value: function() {
                    var e = C(regeneratorRuntime.mark(function e() {
                        var t;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                            case 0:
                                return console.log(this.state.inviteCodeFromFriend),
                                e.next = 3,
                                (0, g.sendInvite)(this.state.inviteCodeFromFriend);
                            case 3:
                                (t = e.sent) && 1e3 === t.status ? (i.
                            default.success("绑定成功！"), this.setState({
                                    have_master: !0
                                })) : i.
                            default.fail("绑定失败！" + (t.desc || ""));
                            case 5:
                            case "end":
                                return e.stop()
                            }
                        },
                        e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                } ()
            },
            {
                key: "render",
                value: function() {
                    var e = this,
                    t = this.state,
                    n = t.invite_code,
                    o = t.inputInviteCode,
                    s = t.inviteCodeFromFriend,
                    f = t.hasCampaign,
                    g = t.isShareModalShow,
                    b = t.isHowToInviteVisible,
                    w = t.activeTab,
                    F = t.have_master,
                    C = t.activityUserList,
                    I = (t.apprentice_income, n.toString());
                    return c.
                default.createElement("div", {
                        className: p.
                    default.inviteFriend
                    },
                    f ? c.
                default.createElement(m.
                default, {
                        className: p.
                    default.marqueeMessage
                    }):
                    null, c.
                default.createElement("div", {
                        className: [p.
                    default.bigSlogen, f ? p.
                    default.hasCampaign:
                        ""].join(" ")
                    },
                    f ? c.
                default.createElement("div", null, c.
                default.createElement("h1", {
                        style: {
                            fontWeight: 800,
                            paddingTop: "40px",
                            marginBottom: "0px",
                            textShadow: "0 10px 20px #AE0017"
                        }
                    },
                    "零门槛!"), c.
                default.createElement("h2", {
                        style: {
                            fontWeight: 800,
                            fontSize: "22px",
                            textShadow: "0 10px 20px #AE0017"
                        }
                    },
                    "成功邀请好友额外奖励30元！"), c.
                default.createElement("h3", {
                        style: {
                            fontSize: "16px",
                            marginTop: "30px",
                            color: "#fff",
                            fontWeight: "normal"
                        }
                    },
                    "活动时间：5月4日14:00-5月9日24:00")) : c.
                default.createElement("div", null, c.
                default.createElement("h1", {
                        style: {
                            fontWeight: 800,
                            paddingTop: "30px",
                            marginBottom: "4px"
                        }
                    },
                    "邀请好友"), c.
                default.createElement("h2", {
                        style: {
                            fontWeight: 800,
                            marginBottom: "12px"
                        }
                    },
                    "使用微鲤头条"), c.
                default.createElement("h3", null, "成功可获10w金币/人", c.
                default.createElement("br", null), "好友阅读、搜索，您均可获得分成"))), c.
                default.createElement("div", {
                        className: [p.
                    default.inviteCodeWrap, f ? p.
                    default.hasCampaign:
                        ""].join(" ")
                    },
                    c.
                default.createElement(d.CopyToClipboard, {
                        onCopy: function(e) {
                            i.
                        default.success("复制成功", 2)
                        },
                        text: n
                    },
                    c.
                default.createElement("div", null, c.
                default.createElement("h1", null, "我的邀请码 ", c.
                default.createElement("span", null, "点击可复制")), c.
                default.createElement("div", {
                        className: p.
                    default.inviteCode
                    },
                    c.
                default.createElement("span", null, I.length >= 6 ? I.substr(0, I.length - 3) + " " + I.substr(I.length - 3) : I)))), c.
                default.createElement("div", {
                        className: p.
                    default.howToUse,
                        onClick: this.triggerHowToInviteModalVisible.bind(this)
                    },
                    "如何使用", c.
                default.createElement("i", {
                        className: "iconfont icon-help"
                    }))), f ? c.
                default.createElement(v.
                default, {
                        className: p.
                    default.inviteProcess,
                        changeTab: this.changeTab.bind(this),
                        activityUserNum: C.total
                    }) : c.
                default.createElement(h.
                default, u({
                        className: p.
                    default.shareList
                    },
                    this.state)), c.
                default.createElement(r.
                default, {
                        tabs: [{
                            title: "奖励说明"
                        },
                        {
                            title: "我的好友"
                        }],
                        tabBarUnderlineStyle: {
                            borderColor: "red",
                            width: "12%",
                            transform: "translate(160%, 0)"
                        },
                        renderTabBar: function(e) {
                            return c.
                        default.createElement(r.
                        default.DefaultTabBar, e)
                        },
                        tabBarActiveTextColor: "red",
                        page: w,
                        swipeable: !1,
                        onTabClick: function(t, n) {
                            e.changeTab(n)
                        }
                    },
                    c.
                default.createElement(E.
                default, this.state), c.
                default.createElement(_.
                default, this.state)), c.
                default.createElement("div", {
                        className: p.
                    default.inputCodeAndInviteWrap
                    },
                    F ? null: c.
                default.createElement(l.
                default, {
                        className: p.
                    default.showInputModalBtn,
                        inline: !0,
                        onClick: this.triggerInputInviteModal.bind(this)
                    },
                    "填写邀请码"), c.
                default.createElement(l.
                default, {
                        className: p.
                    default.showShareModalBtn,
                        inline: !0,
                        type: "primary",
                        onClick: this.triggerShareModalVisible.bind(this)
                    },
                    "立刻邀请好友")), c.
                default.createElement(a.
                default, {
                        className: p.
                    default.shareModal,
                        wrapClassName: p.
                    default.shareModalWrap,
                        popup: !0,
                        animationType: "slide-up",
                        visible: g,
                        onClose: this.triggerShareModalVisible.bind(this)
                    },
                    c.
                default.createElement(h.
                default, this.state)), c.
                default.createElement(a.
                default, {
                        wrapClassName: p.
                    default.HowToInviteModalWrap,
                        className: p.
                    default.HowToInviteModal,
                        transparent: !0,
                        maskClosable: !0,
                        visible: b,
                        onClose: this.triggerHowToInviteModalVisible.bind(this)
                    },
                    c.
                default.createElement("h1", {
                        className: p.
                    default.modalTitle
                    },
                    "如何使用"), c.
                default.createElement("div", {
                        className: p.
                    default.modalContent
                    },
                    c.
                default.createElement(y.
                default, null)), c.
                default.createElement(l.
                default, {
                        className: p.
                    default.HowToInviteModalOKBtn,
                        onClick: this.triggerHowToInviteModalVisible.bind(this)
                    },
                    "知道了")), c.
                default.createElement(a.
                default, {
                        visible: o,
                        transparent: !0,
                        maskClosable: !0,
                        onClose: this.triggerInputInviteModal.bind(this),
                        title: "输入好友的邀请码",
                        footer: [{
                            text: "取消",
                            onPress: this.triggerInputInviteModal.bind(this)
                        },
                        {
                            text: "确定",
                            onPress: function() {
                                e.triggerInputInviteModal(),
                                e.sendInviteCode()
                            }
                        }]
                    },
                    c.
                default.createElement("input", {
                        type: "text",
                        value: s,
                        onChange: function(t) {
                            e.handleInviteCodeChange(t.target.value)
                        }
                    })))
                }
            }]),
            t
        } (); (0, f.render)(c.
    default.createElement(I, null), document.getElementById("root"))
    },
    742 : function(e, t) {
        e.exports = {
            HowToInvite: "src-components-HowToInviteWltt-HowToInvite__HowToInvite--3XiOBe"
        }
    },
    744 : function(e, t) {
        e.exports = {
            FriendListEmpty: "src-components-inviteFriend-FriendListEmpty__FriendListEmpty--25PIn8"
        }
    },
    746 : function(e, t) {
        e.exports = {
            MyFriends: "src-components-inviteFriend-MyFriends__MyFriends--1BnKpt",
            inviteMoreFriend: "src-components-inviteFriend-MyFriends__inviteMoreFriend--N7S0iD",
            activitySuccessInvite: "src-components-inviteFriend-MyFriends__activitySuccessInvite--2LXogp",
            successInvite: "src-components-inviteFriend-MyFriends__successInvite--3Q7zea",
            canGetHighIncome: "src-components-inviteFriend-MyFriends__canGetHighIncome--3Rbqhl",
            useZhwll: "src-components-inviteFriend-MyFriends__useZhwll--15HPCy",
            btn: "src-components-inviteFriend-MyFriends__btn--1UFo2s",
            btnActive: "src-components-inviteFriend-MyFriends__btnActive--JP9nsO",
            success: "src-components-inviteFriend-MyFriends__success--19PUe0",
            allFriendLoaded: "src-components-inviteFriend-MyFriends__allFriendLoaded--2Me8f0",
            bottomBanner: "src-components-inviteFriend-MyFriends__bottomBanner--3zOmWj",
            showAllFriend: "src-components-inviteFriend-MyFriends__showAllFriend--36VITH"
        }
    },
    748 : function(e, t) {
        e.exports = {
            RewardNote: "src-components-inviteFriend-RewardNote__RewardNote--PuMgmr",
            note: "src-components-inviteFriend-RewardNote__note--2kqjgk",
            rule: "src-components-inviteFriend-RewardNote__rule---h8eC0",
            ruleInfo: "src-components-inviteFriend-RewardNote__ruleInfo--1FsZbH"
        }
    },
    750 : function(e, t) {
        e.exports = {
            ShareList: "src-components-inviteFriend-ShareList__ShareList--3_9wBb"
        }
    },
    752 : function(e, t) {
        e.exports = {
            InviteProcess: "src-components-inviteFriend-InviteProcess__InviteProcess--1ef4nD",
            processWrap: "src-components-inviteFriend-InviteProcess__processWrap--1fAAK6",
            processItem: "src-components-inviteFriend-InviteProcess__processItem--2HwNn4",
            finish: "src-components-inviteFriend-InviteProcess__finish--2_vnRT",
            title: "src-components-inviteFriend-InviteProcess__title--2KuGrx",
            node: "src-components-inviteFriend-InviteProcess__node--3MJdCG",
            desc: "src-components-inviteFriend-InviteProcess__desc--3ZQibv",
            process: "src-components-inviteFriend-InviteProcess__process--2vCRVM"
        }
    },
    754 : function(e, t) {
        e.exports = {
            TopNoteBar: "src-components-inviteFriend-TopNoteBar__TopNoteBar--28TgxW",
            empty: "src-components-inviteFriend-TopNoteBar__empty--2gEgHq",
            item: "src-components-inviteFriend-TopNoteBar__item--1_sMz4"
        }
    },
    759 : function(e, t) {
        e.exports = {
            inviteFriend: "src-pages-inviteFriend__inviteFriend--1dRiBy",
            pageTitle: "src-pages-inviteFriend__pageTitle--i5KDBm",
            marqueeMessage: "src-pages-inviteFriend__marqueeMessage--2Im1SY",
            bigSlogen: "src-pages-inviteFriend__bigSlogen--1hGOPQ",
            hasCampaign: "src-pages-inviteFriend__hasCampaign--3ZEujK",
            inviteCodeWrap: "src-pages-inviteFriend__inviteCodeWrap--2qJtf7",
            inviteCode: "src-pages-inviteFriend__inviteCode--R2ZrEp",
            howToUse: "src-pages-inviteFriend__howToUse--3XaUu_",
            shareBtn: "src-pages-inviteFriend__shareBtn--32nUit",
            inviteProcess: "src-pages-inviteFriend__inviteProcess--rUoABC",
            shareList: "src-pages-inviteFriend__shareList--3h_Am7",
            inputCodeAndInviteWrap: "src-pages-inviteFriend__inputCodeAndInviteWrap--3QDV8N",
            showInputModalBtn: "src-pages-inviteFriend__showInputModalBtn--1qRcRF",
            showShareModalBtn: "src-pages-inviteFriend__showShareModalBtn--3qeqqA",
            shareModalWrap: "src-pages-inviteFriend__shareModalWrap--Up-TCv",
            shareModal: "src-pages-inviteFriend__shareModal--2zCKIe",
            HowToInviteModalWrap: "src-pages-inviteFriend__HowToInviteModalWrap--2hCcv-",
            HowToInviteModal: "src-pages-inviteFriend__HowToInviteModal--390gwS",
            modalTitle: "src-pages-inviteFriend__modalTitle--2_3bfE",
            modalContent: "src-pages-inviteFriend__modalContent--2whjnQ",
            HowToInviteModalOKBtn: "src-pages-inviteFriend__HowToInviteModalOKBtn--NEUQCB"
        }
    }
});