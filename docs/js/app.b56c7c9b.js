(function(t){function n(n){for(var s,r,i=n[0],l=n[1],p=n[2],u=0,f=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);c&&c(n);while(f.length)f.shift()();return o.push.apply(o,p||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],s=!0,i=1;i<e.length;i++){var l=e[i];0!==a[l]&&(s=!1)}s&&(o.splice(n--,1),t=r(r.s=e[0]))}return t}var s={},a={app:0},o=[];function r(n){if(s[n])return s[n].exports;var e=s[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=s,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var s in t)r.d(e,s,function(n){return t[n]}.bind(null,s));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/vue-project/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var p=0;p<i.length;p++)n(i[p]);var c=l;o.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";e("85ec")},"14f3":function(t,n,e){t.exports=e.p+"img/itoxi.4042b403.jpg"},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),a=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{attrs:{id:"app"}},[s("Body",{attrs:{Postings:t.Postings}}),s("Footer"),s("transition-group",{attrs:{name:"fade"}},[t.show?s("div",{key:t.Postings[t.trans].name,staticClass:"modal_background",on:{click:function(n){t.show=!t.show}}}):t._e()]),s("transition-group",{attrs:{name:"slide-down"}},[t.show?s("div",{key:t.Postings[t.trans].lan,staticClass:"modal_content"},[s("h2",{staticClass:"modal_contenttitle"},[t._v(t._s(t.Postings[t.trans].name))]),s("div",{staticClass:"modal_contentimg",style:{"background-image":"url("+e("b5a1")("./"+t.Postings[t.trans].image+".jpg")+")"}}),s("div",{staticClass:"modal_textwrap"},[s("p",{staticClass:"modal_text"},[t._v("사용언어 : "+t._s(t.Postings[t.trans].lan))]),s("p",{staticClass:"modal_text"},[t._v("사용플러그인 : "+t._s(t.Postings[t.trans].plugin))]),s("p",{staticClass:"modal_text"},[t._v("완성시기 : "+t._s(t.Postings[t.trans].date))]),s("p",{staticClass:"modal_text"},[t._v("설명 : "+t._s(t.Postings[t.trans].explan))]),t.Postings[t.trans].url?s("a",{staticClass:"modal_link",attrs:{href:t.Postings[t.trans].url,target:"_blank"}},[t._v("사이트 이동")]):t._e()])]):t._e()])],1)},o=[],r=[{name:"포트폴리오",url:"",date:"2020.11",plugin:"없음",lan:"VUE / javascript",image:"portfolio",explan:"vue를 사용할줄 안다는 기본 포트폴리오 입니다. 아직 모르는게 많아 더 배워야 할거 같지만 만드는동안 잼있었습니다."},{name:"디스코드 봇",url:"https://discord.gg/mZKV2ART5d",date:"2021.03",plugin:"없음",lan:"javascript / discord API / node.js",image:"discord",explan:"디스코드 게임 채널에서 봇기능이 필요해 만들기 시작했습니다. 제작기간은 1주일쯤 걸린거 같은데 그후 많은 기능들을 추가했습니다. 주요 기능으로는 해당 게임의 API를 받아와 전적을 보여주는 전적 검색과 google 이미지 검색을 통해 검색된 이미지중 랜덤하게 하나 보여주는 기능, 특정 채널에있는 여러사람들을 랜덤하게 팀을 나눠주고 팀에 맡게 채널에 이동시켜주는 기능등 입니다. 제대로된 FE작업을 한거 같아 뿌듯했습니다."},{name:"포레스트한방병원",url:"http://foresthospital.co.kr/",date:"2021.05",plugin:"Swiper, Fullpage, 그누보드",lan:"HTML / CSS / javascript / JQuery / PHP / PHP MySQL",image:"forest",explan:"퍼블리싱 및 스크립트, 게시판등 작업의 95%이상 혼자 도맡아 진행한 프로젝트 입니다. 서브페이지에 중복되는 메뉴나 배너들을 스크립트 처리해 간편하게 수정할 수 있도록 만들었고 중복되는 페이지들은 비동기로 불러와 처리했습니다.(다수의 페이지가 해시태그 사용을 위해 비동기에서 일반 페이지로 전환됐습니다.) 게시판은 그누보드 기반으로 처리했습니다. 후반부에 작업일정이 촉박해 클레스로 퍼블리싱 한 점이 많이 아쉽습니다."},{name:"시너지팜",url:"http://175.126.176.77/~pham/main",date:"2021.04",plugin:"Swiper, Smooth Scrollbar",lan:"javascript / JQuery",image:"pham",explan:"부드러운 스크롤 효과와 페럴렉스 효과를 같이 사용해야 하는데 플러그인 호환이 안돼 페럴렉스는 스크립트로 직접 만들어 적용했습니다. "},{name:"아이랑 놀이랑",url:"http://175.126.176.77/~irang/main/index.html",date:"2020.08",plugin:"Swiper, 그누보드",lan:"HTML / CSS / javascript / JQuery / PHP / PHP MySQL",image:"irang",explan:"그누보드 관리자 페이지에서 유튜브 주소를 데이터베이스에 저장 후 AJAX로 불러와 서브페이지를 구성했습니다. 유튜브 썸네일로 슬라이드를 만들었고 클릭 시 모달창을 띄우며 동영상을 가져와 페이지 로딩을 줄였습니다. 데이터 저장 방법이나 불러오는 방법 문서에 뿌리는 방법 등 여러 가지로 많은 도움이 됐던 프로젝트였습니다."},{name:"유어폰",url:"http://175.126.176.77/~youp/en/main/",date:"2020.04",plugin:"없음",lan:"HTML / CSS / javascript / JQuery",image:"youp",explan:"웹 경험이 부족했던 때 진행했던 프로젝트입니다. 따로 기획이 없어 기본 디자인만 가지고 직접 효과들을 만들어 넣었습니다. 한국어 튜토리얼 사이트를 만들었는데 반응이 좋아 마이크로소프트 본사에서 직접 발주해 완성했습니다. 지금 보면 지저분한 코드지만 그땐 나름 자신감을 가질 수 있던 계기가 됐습니다."}],i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"body"},[e("div",{staticClass:"jh_full"},[e("div",{staticClass:"jh_wrap"},[e("ul",{staticClass:"post_list"},t._l(t.Postings,(function(n,s){return e("Post",{key:s,attrs:{Postings:t.Postings[s]},nativeOn:{click:function(n){return t.postNum(s)}}})})),1)])])])},l=[],p=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("li",{staticClass:"post",on:{click:t.show}},[s("div",{staticClass:"post_title"},[s("h2",[t._v(t._s(t.Postings.name))])]),s("div",{staticClass:"post_imgwrap"},[s("img",{attrs:{src:e("b5a1")("./"+t.Postings.image+".jpg")}})])])},c=[],u=new s["a"],f={props:{Postings:Object},methods:{show:function(){u.$emit("show",!0)}}},d=f,g=e("2877"),m=Object(g["a"])(d,p,c,!1,null,null,null),_=m.exports,v={props:{Postings:Array},components:{Post:_},methods:{postNum:function(t){u.$emit("num",t)}}},h=v,j=Object(g["a"])(h,i,l,!1,null,null,null),b=j.exports,P=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"jh_full"},[e("div",{staticClass:"jh_wrap"},[e("div",{staticClass:"jh_ft_box"},[e("div",{staticClass:"jh_ft_name"},[t._v("PARK JUNG HO")]),e("div",{staticClass:"jh_ft_explan"},[t._v("Frontend Dev")])])])])])}],y={},w=Object(g["a"])(y,P,x,!1,null,null,null),C=w.exports,O={name:"App",data:function(){return{Postings:r,trans:0,show:!1}},components:{Footer:C,Body:b},methods:{closeModal:function(){this.trans=0}},mounted:function(){var t=this;u.$on("num",(function(n){t.trans=n})),u.$on("show",(function(n){t.show=n}))}},S=O,k=(e("034f"),Object(g["a"])(S,a,o,!1,null,null,null)),M=k.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(M)}}).$mount("#app")},"5ab8":function(t,n,e){t.exports=e.p+"img/youp.7185de93.jpg"},"7c4f":function(t,n,e){t.exports=e.p+"img/portfolio.e3726977.jpg"},8491:function(t,n,e){t.exports=e.p+"img/forest.807a281f.jpg"},"85ec":function(t,n,e){},9654:function(t,n,e){t.exports=e.p+"img/foten.40dbe1ba.jpg"},b5a1:function(t,n,e){var s={"./discord.jpg":"e19a","./forest.jpg":"8491","./foten.jpg":"9654","./irang.jpg":"ca4d","./itoxi.jpg":"14f3","./pham.jpg":"bf2f","./portfolio.jpg":"7c4f","./seedg.jpg":"df94","./youp.jpg":"5ab8"};function a(t){var n=o(t);return e(n)}function o(t){if(!e.o(s,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return s[t]}a.keys=function(){return Object.keys(s)},a.resolve=o,t.exports=a,a.id="b5a1"},bf2f:function(t,n,e){t.exports=e.p+"img/pham.2260ead3.jpg"},ca4d:function(t,n,e){t.exports=e.p+"img/irang.38ebae85.jpg"},df94:function(t,n,e){t.exports=e.p+"img/seedg.cfc046ae.jpg"},e19a:function(t,n,e){t.exports=e.p+"img/discord.1a9a1518.jpg"}});
//# sourceMappingURL=app.b56c7c9b.js.map