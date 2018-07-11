!
function(e) {
    function t(t) {
        for (var a, l, i = t[0], s = t[1], u = t[2], f = 0, d = []; f < i.length; f++) l = i[f],
        r[l] && d.push(r[l][0]),
        r[l] = 0;
        for (a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]);
        for (c && c(t); d.length;) d.shift()();
        return o.push.apply(o, u || []),
        n()
    }
    function n() {
        for (var e, t = 0; t < o.length; t++) {
            for (var n = o[t], a = !0, i = 1; i < n.length; i++) {
                var s = n[i];
                0 !== r[s] && (a = !1)
            }
            a && (o.splice(t--, 1), e = l(l.s = n[0]))
        }
        return e
    }
    var a = {},
    r = {
        10 : 0
    },
    o = [];
    function l(t) {
        if (a[t]) return a[t].exports;
        var n = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, l),
        n.l = !0,
        n.exports
    }
    l.m = e,
    l.c = a,
    l.d = function(e, t, n) {
        l.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    },
    l.r = function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    },
    l.n = function(e) {
        var t = e && e.__esModule ?
        function() {
            return e.
        default
        }:
        function() {
            return e
        };
        return l.d(t, "a", t),
        t
    },
    l.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    l.p = "";
    var i = window.webpackJsonp = window.webpackJsonp || [],
    s = i.push.bind(i);
    i.push = t,
    i = i.slice();
    for (var u = 0; u < i.length; u++) t(i[u]);
    var c = s;
    o.push([515, 0]),
    n()
} ({
    427 : function(e, t, n) {
        e.exports = "imgs/emptyDaySign-2ayC5J.jpg"
    },
    428 : function(e, t, n) {
        e.exports = "imgs/liTips-uoP8dv.png"
    },
    429 : function(e, t, n) {
        e.exports = "imgs/noCampaign-2oTXKN.png"
    },
    430 : function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = c(n(52)),
        r = function() {
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
        n(51);
        var o = n(0),
        l = c(o),
        i = c(n(777)),
        s = c(n(429)),
        u = c(n(428));
        function c(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        var f = function(e) {
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
            } (t, o.PureComponent),
            r(t, [{
                key: "render",
                value: function() {
                    return l.
                default.createElement("div", {
                        className: [i.
                    default.Campaign, this.props.className].join(" ")
                    },
                    l.
                default.createElement("img", {
                        src: s.
                    default,
                        alt: "",
                        className: i.
                    default.bannerImg
                    }), l.
                default.createElement("h1", null, "更快赚钱！", l.
                default.createElement("br", null), " 成功1人立赚10元"), l.
                default.createElement("p", {
                        className: i.
                    default.info1
                    },
                    "好友使用微鲤头条，输入您的邀请码，你即可坐享收益"), l.
                default.createElement("ul", null, l.
                default.createElement("li", null, l.
                default.createElement("img", {
                        src: u.
                    default,
                        alt: ""
                    }), " 好友登录，奖励", l.
                default.createElement("span", null, "3"), "元"), l.
                default.createElement("li", null, l.
                default.createElement("img", {
                        src: u.
                    default,
                        alt: ""
                    }), "好友阅读，坐享", l.
                default.createElement("span", null, "30%"), "分成"), l.
                default.createElement("li", null, l.
                default.createElement("img", {
                        src: u.
                    default,
                        alt: ""
                    }), "好友搜索，你也拿金币")), l.
                default.createElement("div", {
                        className: i.
                    default.info2
                    },
                    l.
                default.createElement("span", {
                        className: i.
                    default.label
                    },
                    "小贴士："), l.
                default.createElement("span", {
                        className: i.
                    default.content
                    },
                    "80%的用户邀请2个活跃的好友后，每天都轻松提现")), l.
                default.createElement(a.
                default, {
                        className: i.
                    default.joinBtn,
                        href: "./inviteFriend.html"
                    },
                    "邀请好友"))
                }
            }]),
            t
        } ();
        t.
    default = f
    },
    431 : function(e, t, n) {
        e.exports = "imgs/banner-2uLVYa.png"
    },
    432 : function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = u(n(52)),
        r = function() {
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
        n(51);
        var o = n(0),
        l = u(o),
        i = u(n(779)),
        s = u(n(431));
        function u(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        var c = function(e) {
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
            } (t, o.PureComponent),
            r(t, [{
                key: "render",
                value: function() {
                    return l.
                default.createElement("div", {
                        className: [i.
                    default.Campaign, this.props.className].join(" ")
                    },
                    l.
                default.createElement("img", {
                        src: s.
                    default,
                        alt: "",
                        className: i.
                    default.bannerImg
                    }), l.
                default.createElement("h1", null, "成功邀请好友额外奖励30元！"), l.
                default.createElement("p", null, "活动时间：5月4日14:00-5月9日24:00"), l.
                default.createElement("h2", null, "活动奖励不与正常收徒分成冲突，额外奖励规则"), l.
                default.createElement("table", {
                        border: "0"
                    },
                    l.
                default.createElement("thead", null, l.
                default.createElement("tr", null, l.
                default.createElement("th", null, "邀请人数"), l.
                default.createElement("th", null, l.
                default.createElement("span", null, "2")), l.
                default.createElement("th", null, l.
                default.createElement("span", null, "5")), l.
                default.createElement("th", null, l.
                default.createElement("span", null, "10")))), l.
                default.createElement("tbody", null, l.
                default.createElement("tr", null, l.
                default.createElement("td", null, "奖励金额"), l.
                default.createElement("td", null, l.
                default.createElement("span", null, "3"), "元"), l.
                default.createElement("td", null, l.
                default.createElement("span", null, "10"), "元"), l.
                default.createElement("td", null, l.
                default.createElement("span", null, "30"), "元")))), l.
                default.createElement("h2", null, "超级简单，人人有份，快来参与吧"), l.
                default.createElement(a.
                default, {
                        className: i.
                    default.joinBtn,
                        href: "./inviteFriend.html"
                    },
                    "立刻参与"))
                }
            }]),
            t
        } ();
        t.
    default = c
    },
    433 : function(e, t, n) {
        e.exports = imgs / icon_friend - 3ju9Wz.png "},434:function(e,t,n){"use strict ";Object.defineProperty(t,"__esModule ",{value:!0});var a=c(n(52)),r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value "in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n(51);var o=n(0),l=c(o),i=c(n(781)),s=n(115),u=(n(45),c(n(433)));function c(e){return e&&e.__esModule?e:{default:e}}var f=[{date:1,desc:"50 ",status:"wait "},{date:2,desc:"100 ",status:"wait "},{date:3,desc:"100 ",status:"wait "},{date:4,desc:"888 ",status:"wait "},{date:5,desc:"150 ",status:"wait "},{date:6,desc:"200 ",status:"wait "},{date:7,desc:"2888 ",status:"wait "}],d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a
        function ")}(this,t);var n,a=function(e,t){if(!e)throw new ReferenceError("this hasn 't been initialised - super() hasn't been called ");return!t||"object "!=typeof t&&"
        function "!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),r=a.props.checkInfo.continue_days;return a.props.checkInfo.continue_days<=0&&(r=0),a.props.checkInfo.continue_days>=7&&(r=7),n=f[r?r-1:0].desc,a.state={golds:n},a}return function(e,t){if("
        function "!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a
        function,
        not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.PureComponent),r(t,[{key:"componentDidMount ",value:function(){console.log(this.props)}},{key:"canvasAddImgText ",value:function(e){var t=document.createElement("canvas ");t.width=750,t.height=1103;var n=t.getContext("2d ");return n.drawImage(e,0,0,750,1103),n.font="40px Arial ",n.fillStyle="#fff ",n.shadowBlur=4,n.shadowOffsetX=2,n.shadowOffsetY=2,n.shadowColor="rgba(0, 0, 0, 0.5)",n.fillText(this.props.popupData.img_text,42,835),t.toDataURL("image / jpeg ")}},{key:"saveImg ",value:function(){(0,s.saveImage)(this.canvasAddImgText(this.props.daySignCanvas)),_hmt.push(["_trackEvent ","share ","saveImage "])}},{key:"shareImg ",value:function(){(0,s.share)(this.props.popupData.share_text+encodeURIComponent(this.props.popupData.guide_url),this.canvasAddImgText(this.props.daySignCanvas)),_hmt.push(["_trackEvent ","share ","shareImage "])}},{key:"render ",value:function(){var e=this.props,t=e.popupData,n=e.imgSrc,r=(e.checkInfo,this.state.golds);return l.default.createElement("div ",{className:[i.default.Popup,this.props.className].join(""),style:{backgroundImage:"url("+n+")"}},l.default.createElement("div ",{className:i.default.bottomBar},l.default.createElement("div ",{className:i.default.imgText},l.default.createElement("p ",null,t.img_text),l.default.createElement("p ",null,"请收下您今天的"+r+"金币签到奖励")),l.default.createElement("div ",{className:i.default.bottomBtn},l.default.createElement(a.default,{id:"shareImage ",onClick:this.shareImg.bind(this),className:i.default.shareBtn},l.default.createElement("img ",{src:u.default}),"每日首次分享 + 100 "),l.default.createElement("a ",{id:"saveImage ",onClick:this.saveImg.bind(this)},"保存稍后分享"))))}}]),t}();t.default=d},515:function(e,t,n){"use strict ";var a=b(n(95)),r=b(n(52)),o=b(n(117)),l=b(n(47)),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value "in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n(89),n(51),n(116),n(46);var u=n(0),c=b(u),f=n(14),d=b(n(2)),p=b(n(176)),m=b(n(783)),h=n(115),g=b(n(434)),y=b(n(432)),v=b(n(430)),_=n(45);b(n(427));function b(e){return e&&e.__esModule?e:{default:e}}function w(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function E(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function a(r,o){try{var l=t[r](o),i=l.value}catch(e){return void n(e)}if(!l.done)return Promise.resolve(i).then(function(e){a("next ",e)},function(e){a("
        throw ",e)});e(i)}("next ")})}}var S=b(n(21)).default.isIOS(),x=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a
        function ")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn 't been initialised - super() hasn't been called ");return!t||"object "!=typeof t&&"
        function "!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return d.default.locale("zh - cn "),n.state={hasCampaign:!0,imgSrc:"",popupData:"",popupImageLoaded:!1,daySignCanvas:"",checkInfo:{amount:"000 ",checked:"",continue_days:"",date:""},stepList:[{date:1,desc:"50 ",status:"wait "},{date:2,desc:"100 ",status:"wait "},{date:3,desc:"100 ",status:"wait "},{date:4,desc:"888 ",status:"wait "},{date:5,desc:"150 ",status:"wait "},{date:6,desc:"200 ",status:"wait "},{date:7,desc:"2888 ",status:"wait "}],isPopupModalShow:!1},n}return function(e,t){if("
        function "!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a
        function,
        not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.PureComponent),s(t,[{key:"componentDidMount ",value:function(){this.getCheckInInfo();try{this.getPopup()}catch(e){console.error(e)}}},{key:"getCheckInInfo ",value:function(){var e=E(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.checkinInfo)();case 2:t=e.sent,console.log("checkinInfo ",t),(n=[].concat(w(this.state.stepList))).map(function(e,n){n<t.continue_days?e.status="finish ":e.status="wait "}),!t.checked&&t.continue_days<7&&(n[t.continue_days].status="process "),this.setState({checkInfo:t,stepList:n});case 8:case"end ":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"checkIn ",value:function(){var e=E(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.toSign)();case 2:t=e.sent,console.log("checkIn ",t),1e3===t.status?(location.href="wl: // sign?result=1",this.getCheckInInfo()):location.href="wl://sign?result=0";case
        