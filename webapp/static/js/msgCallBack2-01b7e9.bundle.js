!function(e){function t(t){for(var n,s,c=t[0],i=t[1],o=t[2],f=0,m=[];f<c.length;f++)s=c[f],r[s]&&m.push(r[s][0]),r[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(u&&u(t);m.length;)m.shift()();return l.push.apply(l,o||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],n=!0,c=1;c<a.length;c++){var i=a[c];0!==r[i]&&(n=!1)}n&&(l.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={4:0},l=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var o=0;o<c.length;o++)t(c[o]);var u=i;l.push([367,0]),a()}({367:function(e,t,a){"use strict";var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(0),l=u(r),s=a(14),c=u(a(736)),i=a(111),o=a(165);function u(e){return e&&e.__esModule?e:{default:e}}for(var f=new Set;f.size<20;){var m=Math.floor(49*Math.random());f.add(m)}var d=o.msgCallBackData.filter(function(e,t){return f.has(t)}),p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={renderAry:d.splice(0,6)},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.PureComponent),n(t,[{key:"componentDidMount",value:function(){var e=this;document.title="微鲤头条",this.clockMark=setInterval(function(){e.clockFunc()},2e3)}},{key:"clockFunc",value:function(){if(d.length){var e=d.splice(0,1)[0],t="<div class="+c.default.itemFirst+">\n      <div class="+c.default.itemLeft+">\n        <img src="+e.avatar+' alt=""/>\n        <div>'+e.name+"</div>\n      </div>\n      <div class="+(e.item_name.indexOf("微信")>=0?c.default.green:c.default.blue)+">"+e.item_name+"</div>\n    </div>";document.getElementById("items").insertAdjacentHTML("afterbegin",t)}else clearInterval(this.clockMark)}},{key:"render",value:function(){var e=this.state.renderAry;return l.default.createElement("div",{className:c.default.msgCallBack},l.default.createElement("div",{className:c.default.pr},l.default.createElement("img",{className:c.default.bg,src:"http://static.etouch.cn/imgs/upload/1525237540.551.png",alt:""}),l.default.createElement("div",{className:c.default.btns},l.default.createElement("div",{onClick:function(){(0,i.downloadAndOpen)()},className:c.default.btn1},"下载领取"),l.default.createElement("div",{onClick:function(){(0,i.downloadAndOpen)()},className:c.default.btn2},"已安装提现"))),l.default.createElement("div",{id:"items",className:c.default.list},e.map(function(e,t){return l.default.createElement("div",{className:c.default.item,key:"item"+t},l.default.createElement("div",{className:c.default.itemLeft},l.default.createElement("img",{src:e.avatar,alt:""}),l.default.createElement("div",null,e.name)),l.default.createElement("div",{className:e.item_name.indexOf("微信")>=0?c.default.green:c.default.blue},e.item_name))})))}}]),t}();(0,s.render)(l.default.createElement(p,null),document.getElementById("root"))},736:function(e,t){e.exports={pr:"src-pages-msgCallBack2__pr--3quqvb",fs22:"src-pages-msgCallBack2__fs22--1l8-kJ",fs15:"src-pages-msgCallBack2__fs15--ntDEmr",fs17:"src-pages-msgCallBack2__fs17--1MgWU2",tc:"src-pages-msgCallBack2__tc--1dyRg0",msgCallBack:"src-pages-msgCallBack2__msgCallBack--3FIV5w",bg:"src-pages-msgCallBack2__bg--2uRFzb",btns:"src-pages-msgCallBack2__btns--nJ4pHn",btn:"src-pages-msgCallBack2__btn--3A6FJm",btn1:"src-pages-msgCallBack2__btn1--11AMok",btn2:"src-pages-msgCallBack2__btn2--IASXPh",list:"src-pages-msgCallBack2__list--1n-s3V",item:"src-pages-msgCallBack2__item--18LjRR",itemFirst:"src-pages-msgCallBack2__itemFirst--2IEtSK",trans1:"src-pages-msgCallBack2__trans1--kO9NCc",itemLeft:"src-pages-msgCallBack2__itemLeft--1aEcSD",blue:"src-pages-msgCallBack2__blue--204UOv",green:"src-pages-msgCallBack2__green--3IC5ni"}}});
//# sourceMappingURL=msgCallBack2-01b7e9.bundle.js.map