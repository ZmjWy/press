webpackJsonp([5], {
    0 : function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAdCAYAAAE7qLcXAAAAAXNSR0IArs4c6QAAAvZJREFUOBGNlctrE1EUxpPJo7HWRrsRAl0U6cKFhDyaCiI0LRQKIgguBNGFG3HZheKj1EcpKvoHuHOhG9GFuigUF27cpC2WBqOhDY2UVlBrXBhILE3j70xzL3cmTe2Fmfud833nzLnP8czOzg54zJbJZOpiW/KKRCLt0ntyuVyXDVq/7EAVbcschjvQQebz+QMOR71e97sjPDMzMz9Np5TYZYZZqVTKh3NTOb1KjqMCDtmjajhDXq/3l41FTvJv2sBRbKg88tkr2gB4caxRYESc/f39+iMOkTJItQmWsprETZFk/kvmoCluEgm5tLTUViqVqoItyxp1iBYWFvZXq9WykLQf1HhYgC2an58/uLGx8VsctFXI7m24/fZS8B9gB08BstckNabQAlvnsna4gMUojmxtbT1BdM3F2abF5F8ShOgh2W64RXaxEOfJ9FxIAsZZ3wkl1EPmE2fJ8rJB3KXoO4K1QAxEpxG9EcyETfb19Y05BA3RCKIpwXzuQZNACGr6QE0nBJvbSWwPkzetScuKOzIQ+R5yQITUcIwaPmmBmdbn8x1NJpN5EdoCyAyRKXH4/f7eRCJRECxNtuNHyJgYwWCwJxaLfRWsml+RoVCoOxqNripC9bIWF8LhcOdOpIhkTyzT96gIAq6yFo+VvZeeEVu3CLRvFwmgrEcklpN3fS8JRKOni/W8SIKnPO5FGGMDTO6WUCdRIpKdY92fYTtuHaq9zTDvKZ3ZNyVRJEM6Q+ALKgson/T4Jkg27vCZxk6YZKcIfEWyNpPHd59kN8XXshIzQPDc3NxwrVZ7DdxncizMsHsSTV7jYrEYYp5G3QmwS+y8L7tWwtfbCX7LUIZ0RgBDWWfDD7Gns+LfMQn/n45yuSwn86SIjPY9EAgMxuPxz4bPmYTLspPLchrBcVMEXuMZZL8suvy2aVeSzWYPVSqVd3gSpoiyV3jSHGI5Gi2bHM8pxjxiKghcZtbTHPIV098KyxFeVyTBi1wCaca8/cdSxH/6fwO9Tp0/ytKZAAAAAElFTkSuQmCC"
    },
    10 : function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = "undefined" != typeof window;
        i && (window.Swiper = n(15), n(11)),
        e.
    default = {
            name: "swiper",
            props: {
                options: {
                    type: Object,
                default:
                    function() {
                        return {
                            autoplay:
                            3500
                        }
                    }
                }
            },
            data: function() {
                return {
                    defaultSwiperClasses: {
                        wrapperClass: "swiper-wrapper"
                    }
                }
            },
            ready: function() { ! this.swiper && i && (this.swiper = new Swiper(this.$el, this.options))
            },
            mounted: function() {
                var t = this,
                e = function() {
                    if (!t.swiper && i) {
                        delete t.options.notNextTick;
                        var e = !1;
                        for (var n in t.defaultSwiperClasses) t.defaultSwiperClasses.hasOwnProperty(n) && t.options[n] && (e = !0, t.defaultSwiperClasses[n] = t.options[n]);
                        var s = function() {
                            t.swiper = new Swiper(t.$el, t.options)
                        };
                        e ? t.$nextTick(s) : s()
                    }
                };
                this.options.notNextTick ? e() : this.$nextTick(e)
            },
            updated: function() {
                this.swiper && this.swiper.update()
            },
            beforeDestroy: function() {
                this.swiper && (this.swiper.destroy(), delete this.swiper)
            }
        }
    },
    11 : function(t, e) {},
    12 : function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement;
                return (t._self._c || e)("div", {
                    class: t.slideClass
                },
                [t._t("default")], 2)
            },
            staticRenderFns: []
        }
    },
    124 : function(t, e, n) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                n = t._self._c || e;
                return n("div", {
                    class: {
                        "screen-height": t.show_modal
                    },
                    attrs: {
                        id: "app",
                        "data-own": "1"
                    }
                },
                [t.showNewText ? n("div", {
                    staticClass: "main",
                    style: {
                        height: t.main_height
                    }
                },
                [n("p", {
                    staticClass: "title"
                },
                [t._v("常见问题")]), t._v(" "), t._m(0), t._v(" "), n("p", {
                    staticClass: "title"
                },
                [t._v("提现问题")]), t._v(" "), t._m(1), t._v(" "), t._m(2), t._v(" "), n("div", {
                    staticStyle: {
                        height: "2rem"
                    }
                })]) : t._e(), t._v(" "), t.showNewText ? t._e() : n("div", {
                    staticClass: "main",
                    style: {
                        height: t.main_height
                    }
                },
                [n("p", {
                    staticClass: "title"
                },
                [t._v("常见问题")]), t._v(" "), t._m(3), t._v(" "), n("p", {
                    staticClass: "title"
                },
                [t._v("金币问题")]), t._v(" "), t._m(4), t._v(" "), n("p", {
                    staticClass: "title"
                },
                [t._v("提现问题")]), t._v(" "), t._m(5), t._v(" "), t._m(6), t._v(" "), n("div", {
                    staticStyle: {
                        height: "2rem"
                    }
                })]), t._v(" "), t.show_btn ? n("div", {
                    staticClass: "bottom-btn",
                    class: {
                        "iphonex-bottom-btn": t.isIphoneX()
                    },
                    on: {
                        click: t.showModal
                    }
                },
                [t._v("在线咨询")]) : t._e(), t._v(" "), n("copywx", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.show_modal,
                        expression: "show_modal"
                    }]
                })], 1)
            },
            staticRenderFns: [function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return i("ul", [i("li", {
                    attrs: {
                        "data-open": "0"
                    }
                },
                [i("p", [t._v("金币是什么？"), i("img", {
                    attrs: {
                        src: n(0),
                        alt: ""
                    }
                })]), t._v(" "), i("section", [i("div", [t._v("\n                        金币是花生头条中的奖励单位，您可以将金币收益兑换成零钱提现到微信、支付宝。\n                    ")])])]), t._v(" "), i("li", {
                    attrs: {
                        "data-open": "0"
                    }
                },
                [i("p", [t._v("如何获取更多的金币？"), i("img", {
                    attrs: {
                        src: n(0),
                        alt: ""
                    }
                })]), t._v(" "), i("section", [i("div", [t._v("\n                        首先是需要坚持完成每天的日常任务，其次是不断的邀请好友加入花生头条，好友通过您的链接注册后登陆并完成任务，您会得到更多金币。\n                        "), i("br"), t._v(" 更多获取金币的方式正在研发中，敬请期待吧！\n                    ")])])]), t._v(" "), i("li", {
                    attrs: {
                        "data-open": "0"
                    }
                },
                [i("p", [t._v("如何查看金币明细？"), i("img", {
                    attrs: {
                        src: n(0),
                        alt: ""
                    }
                })]), t._v(" "), i("section", [i("div", [t._v("\n                        点击个人中心可看到“今日金币”按钮，点击打开就能看到金币明细，最多可看100条。\n                    ")])])]), t._v(" "), i("li", {
                    attrs: {
                        "data-open": "0"
                    }
                },
                [i("p", [t._v("如何邀请好友?"), i("img", {
                    attrs: {
                        src: n(0),
                        alt: ""
                    }
                })]), t._v(" "), i("section", [i("div", [t._v("\n                       个人中心→每日任务→邀请好友，点击立即邀请，可以使用朋友圈、微信群、QQ群等方式，分享H5页面给好友，在分享页面中注册成为花生头条用户，下载安装花生头条APP并登录，即可成为您的好友。\n                    ")])])]), t._v(" "), i("li", {
                    attrs: {
                        "data-open": "0"
                    }
                } 
                )])
            },
            function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return i("ul", [i("li", {
                    attrs: {
                        "data-open": "0"
                    }
                },
                [i("p", [t._v("在哪提现？"), i("img", {
                    attrs: {
                        src: n(0),
                        alt: ""
                    }
                })]), t._v(" "), i("section", [i("div", [t._v("\n                        进入花生头条，个人中心里点击“提现兑换”按钮，目前支持的提现方式为微信、支付宝零钱提现。\n                    ")])])]), t._v(" "), i("li", {
                    attrs: {
                        "data-open": "0"
                    }
                },
                [i("p", [t._v("微信怎么提现？"), i("img", {
                    attrs: {
                        src: n(0),
                        alt: ""
                    }
                })]), t._v(" "), i("section", [i("div", [t._v("\n                        按页面提示操作跳转至微信进行绑定，微信绑定后返回至当前页面，选择可提现的金额进行提现。\n                    ")])])]), t._v(" "), i("li", {
                    attrs: {
                        "data-open": "0"
                    }
                },
                [i("p", [t._v("支付宝怎么提现？"), i("img", {
                    attrs: {
                        src: n(0),
                        alt: ""
                    }
                })]), t._v(" "), i("section", [i("div", [t._v("\n                        填写真实的姓名、您的身份证账号信息进行实名认证，按页面提示，绑定支付宝账号，绑定成功之后返回至当前页面，选择可提现的金额进行提现。\n                    ")])])]), t._v(" "), i("li", {
                    attrs: {
                        "data-open": "0"
                    }
                }),
                ])
            },
            function() {
                var t = this,
                e = t.$createElement,
                n = t._self._c || e;
                return n("div", {
                    staticClass: "footer"
                },
                [n("p", [t._v("温馨提示：")]), t._v(" "), n("p", [t._v("以上提现账户，一经绑定将无法自行修改。如出现账号问题，请联系微信客服：zzjk-888。")]), t._v(" "), n("p", {
                    staticStyle: {
                        color: "#d23741",
                        "margin-top": "0.3rem"
                    }
                },
                [t._v("微信提现的用户，记得要在花生米家族微信公众号中领取红包（24小时内有效），如过期未领取会返还至您的零钱余额~")])])
            },
            function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return i("ul", [i("li", {
                    attrs: {
                        "data-open": "0"
                    }
                },
                [i("p", [t._v("金币是什么？"), i("img", {
                    attrs: {
                        src: n(0),
                        alt: ""
                    }
                })]), t._v(" "), i("section", [i("div", [t._v("\n                       金币是花生头条中的奖励单位，您可以将金币收益兑换成零钱提现到微信、支付宝。\n                    ")])])]), t._v(" "), i("li", {
                    attrs: {
                        "data-open": "0"
                    }
                },
                [i("p", [t._v("如何获取更多的金币？"), i("img", {
                    attrs: {
                        src: n(0),
                        alt: ""
                    }
                })]), t._v(" "), i("section", [i("div", [t._v("\n                        首先是需要坚持完成每天的日常任务，其次是不断的邀请好友加入花生头条，好友通过您的链接注册后登陆并完成任务，您会得到更多金币。\n                        "), i("br"), t._v(" 更多获取金币的方式正在研发中，敬请期待吧！\n                    ")])])]), t._v(" "), i("li", {
                    attrs: {
                        "data-open": "0"
                    }
                },
                [i("p", [t._v("如何查看金币明细？"), i("img", {
                    attrs: {
                        src: n(0),
                        alt: ""
                    }
                })]), t._v(" "), i("section", [i("div", [t._v("\n                        点击个人中心可看到“今日金币”按钮，点击打开就能看到金币明细，最多可看100条。\n                    ")])])]), t._v(" "), i("li", {
                    attrs: {
                        "data-open": "0"
                    }
                },
                [i("p", [t._v("如何邀请好友?"), i("img", {
                    attrs: {
                        src: n(0),
                        alt: ""
                    }
                })]), t._v(" "), i("section", [i("div", [t._v("\n                        个人中心→每日任务→邀请好友，点击立即邀请，可以使用朋友圈、微信群、QQ群等方式，分享H5页面给好友，在分享页面中注册成为花生头条用户，下载安装花生头条APP并登录，即可成为您的好友。\n                    ")])])])])
            },
            function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return i("ul", [i("li", {
                    attrs: {
                        "data-open": "0"
                    }
                },
                [i("p", [t._v("什么是签到？"), i("img", {
                    attrs: {
                        src: n(0),
                        alt: ""
                    }
                })]), t._v(" "), i("section", [i("div", [t._v("\n                        点击新闻页面左上角签到图标，进入签到页面，点击签到，即可获得签到奖励；个人中心→头像右侧为签到按钮，点击今日签到页面，点击签到，即可获得签到奖励。连续一周签到，可累计获得奖励4300+金币，断签就只能从头累计咯。\n                    ")])])]), t._v(" "), i("li", {
                    attrs: {
                        "data-open": "0"
                    }
                },
                [i("p", [t._v("什么是时段奖励？"), i("img", {
                    attrs: {
                        src: n(0),
                        alt: ""
                    }
                })]), t._v(" "), i("section", [i("div", [t._v("\n                        花生头条首页左上角，会有固定时段奖励的展示位置。每日保持登录，每一小时都有时段奖励可以领取，打开即可获取奖励金币。\n                    ")])])]), t._v(" "), i("li", {
                    attrs: {
                        "data-open": "0"
                    }
                },
                [i("p", [t._v("看文章如何得金币？"), i("img", {
                    attrs: {
                        src: n(0),
                        alt: ""
                    }
                })]), t._v(" "), i("section", [i("div", [t._v("\n                        持续阅读一篇资讯每30秒，可以获得30金币，一篇文章最多奖励4次，封顶120金币，每日阅读和观看视频，累积时长满1小时，额外奖励550，每日限一次。\n                    ")])])]), t._v(" "), i("li", {
                    attrs: {
                        "data-open": "0"
                    }
                },
                [i("p", [t._v("每日阅读咨询奖励上限是多少？"), i("img", {
                    attrs: {
                        src: n(0),
                        alt: ""
                    }
                })]), t._v(" "), i("section", [i("div", [t._v("\n                        每日阅读30篇不同资讯，最多可获得3600金币。\n                    ")])])]), t._v(" "), i("li", {
                    attrs: {
                        "data-open": "0"
                    }
                },
                [i("p", [t._v("邀请好友怎么没金币？"), i("img", {
                    attrs: {
                        src: n(0),
                        alt: ""
                    }
                })]), t._v(" "), i("section", [i("div", [t._v("\n                        因为好友注册后，没有及时登入完成任务，未在有效的时间内激活成为有效好友，故无法获得该金币奖励。今后邀请好友注册后，务必让其尽快登入花生账户完成任务，及时激活账户，这样您就能及时获得邀请好友的奖励金币了。\n                    ")])])])])
            },
            function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return i("ul", [i("li", {
                    attrs: {
                        "data-open": "0"
                    }
                },
                [i("p", [t._v("在哪提现？"), i("img", {
                    attrs: {
                        src: n(0),
                        alt: ""
                    }
                })]), t._v(" "), i("section", [i("div", [t._v("\n                        进入花生头条，个人中心里点击“提现兑换”按钮，目前支持的提现方式为微信、支付宝零钱提现。\n                    ")])])]), t._v(" "), i("li", {
                    attrs: {
                        "data-open": "0"
                    }
                },
                [i("p", [t._v("微信怎么提现？"), i("img", {
                    attrs: {
                        src: n(0),
                        alt: ""
                    }
                })]), t._v(" "), i("section", [i("div", [t._v("\n                        按页面提示操作跳转至微信进行绑定，微信绑定成功后返回至当前页面，选择可提现的金额进行提现。\n                    ")])])]), t._v(" "), i("li", {
                    attrs: {
                        "data-open": "0"
                    }
                },
                [i("p", [t._v("支付宝怎么提现？"), i("img", {
                    attrs: {
                        src: n(0),
                        alt: ""
                    }
                })]), t._v(" "), i("section", [i("div", [t._v("\n                        填写真实的姓名、您的身份证账号信息进行实名认证，按页面提示，绑定支付宝账号，绑定成功之后返回至当前页面，选择可提现的金额进行提现。\n                    ")])])])])
            },
            function() {
                var t = this,
                e = t.$createElement,
                n = t._self._c || e;
                return n("div", {
                    staticClass: "footer"
                },
                [n("p", [t._v("温馨提示：")]), t._v(" "), n("p", [t._v("以上提现账户，一经绑定将无法自行修改。如出现账号问题，请联系微信客服：zzjk-888。")]), t._v(" "), n("p", {
                    staticStyle: {
                        color: "#d23741",
                        "margin-top": "0.3rem"
                    }
                },
                [t._v("微信提现的用户，记得要在花生米家族微信公众号中领取红包（24小时内有效），如过期未领取会返还至您的零钱余额~")])])
            }]
        }
    },
    13 : function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                n = t._self._c || e;
                return n("div", {
                    staticClass: "swiper-container"
                },
                [t._t("parallax-bg"), t._v(" "), n("div", {
                    class: t.defaultSwiperClasses.wrapperClass
                },
                [t._t("default")], 2), t._v(" "), t._t("pagination"), t._v(" "), t._t("button-prev"), t._v(" "), t._t("button-next"), t._v(" "), t._t("scrollbar")], 2)
            },
            staticRenderFns: []
        }
    },
    17 : function(t, e, n) {
        var i = n(1)(n(9), n(12), null, null);
        t.exports = i.exports
    },
    18 : function(t, e, n) {
        var i = n(1)(n(10), n(13), null, null);
        t.exports = i.exports
    },
    2 : function(t, e, n) {
        "use strict";
        var i = n(16),
        s = n.n(i),
        a = navigator.userAgent.toLocaleLowerCase();
        e.a = {
            formatDate: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy-MM-dd",
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                "number" == typeof t && (t = new Date(t));
                var i = {
                    "M+": t.getMonth() + 1,
                    "d+": t.getDate(),
                    "h+": n && t.getHours() > 12 ? t.getHours() - 12 : t.getHours(),
                    "m+": t.getMinutes(),
                    "s+": t.getSeconds(),
                    "q+": Math.floor((t.getMonth() + 3) / 3),
                    S: t.getMilliseconds()
                };
                /(y+)/.test(e) && (e = e.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length)));
                for (var s in i) new RegExp("(" + s + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? i[s] : ("00" + i[s]).substr(("" + i[s]).length)));
                return n && (e += t.getHours() > 12 ? " PM": " AM"),
                e
            },
            getQueryString: function(t) {
                var e = location.search,
                n = new Object;
                if ( - 1 != e.indexOf("?")) for (var i = e.substr(1), s = i.split("&"), a = 0; a < s.length; a++) n[s[a].split("=")[0]] = decodeURI(s[a].split("=")[1]);
                return null == n[t] ? "": n[t]
            },
            isZhwnl: function() {
                return /ecalendar/g.test(a)
            },
            isWeilitt: function() {
                return /weilitt/g.test(a)
            },
            isAndroid: function() {
                return /android/i.test(a)
            },
            isIOS: function() {
                return /iphone/i.test(a) || /ipad/i.test(a) || /ios/i.test(a)
            },
            getDeviceHeight: function() {
                return 7.5 * document.documentElement.clientHeight / document.documentElement.clientWidth
            },
            getResolution: function() {
                return window.screen.width + "*" + window.screen.height
            },
            getRandomString: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
                e = "",
                n = "0123456789abcdefghijklmhopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                n = n.split("");
                for (var i = 0; i < t; ++i) e += n[parseInt(62 * Math.random())].toString();
                return e
            },
            rem2Px: function(t) {
                var e = document.documentElement.attributes["data-percent"];
                return e ? (e = e.value, t * e) : t
            },
            px2Rem: function(t) {
                var e = document.documentElement.attributes["data-percent"];
                return e ? (e = e.value, t / e) : t
            },
            getAttr: function(t, e) {
                var n = t.attributes[e];
                return n ? n.value: ""
            },
            getVersion: function() {
                var t = "",
                e = a.indexOf("ssy={");
                if (e > -1) {
                    var n = a.substring(e + 5, a.length);
                    e = n.indexOf("}"),
                    e > -1 && (t = n.substring(0, e), t = t.split(";")[1])
                }
                return t
            },
            getUid: function() {
                var t = "",
                e = a.indexOf("suid=");
                if (e > -1) {
                    var n = a.substring(e + 5, a.length);
                    e = n.indexOf(";"),
                    e > -1 ? t = n.substring(0, e) : (e = n.indexOf("}")) > -1 && (t = n.substring(0, e))
                }
                return t
            },
            getDeviceId: function() {
                var t = "",
                e = a.indexOf("device_id=");
                if (e > -1) {
                    var n = a.substring(e + 10, a.length);
                    e = n.indexOf(";"),
                    e > -1 ? t = n.substring(0, e) : (e = n.indexOf("}")) > -1 && (t = n.substring(0, e))
                }
                return t
            },
            getAppSign: function(t, e, n) {
                return s()(t + "&" + e + "&" + n)
            },
            openWechat: function() {
                var t = document.createElement("iframe");
                document.body.appendChild(t),
                t.src = "weixin://"
            }
        }
    },
    20 : function(t, e) {},
    21 : function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(23),
        s = n.n(i),
        a = n(2);
        e.
    default = {
            mounted: function() {
                var t = new s.a(".submit");
                t.on("success",
                function(t) {
                    a.a.openWechat(),
                    t.clearSelection()
                }),
                t.on("error",
                function(t) {
                    a.a.openWechat()
                })
            },
            methods: {
                cancel: function() {
                    this.$parent.show_modal = !1
                }
            }
        }
    },
    24 : function(t, e) {},
    28 : function(t, e, n) {
        t.exports = n.p + "imgs/tanchuang.png"
    },
    29 : function(t, e, n) {
        n(24);
        var i = n(1)(n(21), n(32), "data-v-346a1258", null);
        t.exports = i.exports
    },
    3 : function(t, e) {},
    32 : function(t, e, n) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                n = t._self._c || e;
                return n("div", {
                    staticClass: "copy-wx"
                },
                [n("div", {
                    staticClass: "inner"
                },
                [t._m(0), t._v(" "), n("div", {
                    staticClass: "btns"
                },
                [n("div", {
                    staticClass: "cancel",
                    on: {
                        click: t.cancel
                    }
                },
                [t._v("取消")]), t._v(" "), n("div", {
                    staticClass: "submit",
                    attrs: {
                        id: "submit",
                        "data-clipboard-target": "#code"
                    }
                },
                [t._v("打开微信")])]), t._v(" "), n("div", {
                    attrs: {
                        id: "code"
                    }
                },
                [t._v("zzjk-888")])])])
            },
            staticRenderFns: [function() {
                var t = this,
                e = t.$createElement,
                i = t._self._c || e;
                return i("div", {
                    staticClass: "img-box"
                },
                [i("img", {
                    attrs: {
                        src: n(28)
                    }
                })])
            }]
        }
    },
    39 : function(t, e, n) {
        n(65);
        var i = n(1)(n(47), n(124), "data-v-50b29629", null);
        t.exports = i.exports
    },
    4 : function(t, e) {},
    47 : function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
        s = n(29),
        a = n.n(s);
        e.
    default = {
            components: {
                copywx: a.a
            },
            data: function() {
                return {
                    show_modal: !1,
                    main_height: "618px",
                    show_btn: !0
                }
            },
            mounted: function() {
                for (var t = document.getElementsByTagName("li"), e = 0, n = t.length; e < n; e++) t[e].onclick = function() {
                    "0" == this.getAttribute("data-open") ? (this.classList.add("open"), this.setAttribute("data-open", 1)) : (this.classList.remove("open"), this.setAttribute("data-open", 0))
                };
                /android/i.test(navigator.userAgent.toLocaleLowerCase()) && document.getElementById("app").classList.add("android"),
                /micromessenger/i.test(navigator.userAgent.toLocaleLowerCase()) ? (this.show_btn = !1, this.main_height = document.body.offsetHeight + "px") : this.mainHeight()
            },
            created: function() {
                this.showNewText && (document.title = "帮助&客服")
            },
            computed: {
                showNewText: function() {
                    return !! i.a.isWeilitt() || !!i.a.isZhwnl() && i.a.getVersion() > "v7.0.8"
                }
            },
            methods: {
                showModal: function() {
                    this.show_modal = !0
                },
                isIphoneX: function() {
                    return /iphone/gi.test(navigator.userAgent) && 812 == screen.height && 375 == screen.width
                },
                mainHeight: function() {
                    var t = void 0,
                    e = document.body.offsetHeight;
                    t = this.isIphoneX() ? i.a.rem2Px(1.26) : i.a.rem2Px(.98),
                    this.main_height = e - t + "px"
                }
            }
        }
    },
    52 : function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(5),
        s = n(39),
        a = n.n(s),
        r = n(6),
        o = n.n(r),
        c = n(8),
        l = n(7),
        v = n.n(l),
        d = n(4),
        u = (n.n(d), n(3));
        n.n(u);
        i.a.use(c.a),
        i.a.use(v.a),
        "addEventListener" in document && document.addEventListener("DOMContentLoaded",
        function() {
            o.a.attach(document.body)
        },
        !1),
        i.a.config.productionTip = !1,
        document.title = "帮助反馈",
        new i.a({
            el: "#app",
            template: "<App/>",
            components: {
                App: a.a
            }
        })
    },
    65 : function(t, e) {},
    9 : function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.
    default = {
            name: "swiper-slide",
            data: function() {
                return {
                    slideClass: "swiper-slide"
                }
            },
            ready: function() {
                this.update()
            },
            mounted: function() {
                this.update(),
                this.$parent.options.slideClass && (this.slideClass = this.$parent.options.slideClass)
            },
            updated: function() {
                this.update()
            },
            attached: function() {
                this.update()
            },
            methods: {
                update: function() {
                    this.$parent && this.$parent.swiper && this.$parent.swiper.update && (this.$parent.swiper.update(!0), this.$parent.options.loop && this.$parent.swiper.reLoop())
                }
            }
        }
    }
},
[52]);