webpackJsonp([13],{NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("7+uW"),a={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var r=t("VU/8")({name:"App"},a,!1,function(e){t("ufWc")},null,null).exports,u=t("/ocq");o.default.use(u.a);var i=new u.a({routes:[{path:"/",component:function(){return t.e(3).then(t.bind(null,"VZrM"))},children:[{path:"/",component:function(){return t.e(1).then(t.bind(null,"j7e0"))}},{path:"/home",component:function(){return t.e(1).then(t.bind(null,"j7e0"))}},{path:"/user",component:function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,"i/Eh"))}},{path:"/role",component:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"8pc/"))}},{path:"/right",component:function(){return t.e(8).then(t.bind(null,"zFsy"))}},{path:"/customer",component:function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"HkCU"))}},{path:"/callRecords",component:function(){return t.e(11).then(t.bind(null,"5h9N"))}},{path:"/msgRecords",component:function(){return t.e(10).then(t.bind(null,"gCp4"))}},{path:"/wxRecord",component:function(){return t.e(9).then(t.bind(null,"7Qi/"))}}]},{path:"/login",component:function(){return t.e(6).then(t.bind(null,"lmfZ"))}},{path:"/register",component:function(){return t.e(5).then(t.bind(null,"tcoL"))}}]});i.beforeEach(function(e,n,t){var o=!!localStorage.accessToken;"/login"==e.path||"/register"==e.path?t():o?t():t("/login")});var s=i,c=t("mvHQ"),l=t.n(c),p=t("NYxO");o.default.use(p.a);var h={tabList:JSON.parse(localStorage.getItem("tabs"))||[{path:"/",name:"home",label:"首页",icon:"s-home"}],currentTab:null,isCollapse:!1,menu:[],userImage:"../assets/images/head.jpg",deptList:[],roleList:[],selectDept:"",pageSize:20,page:1},f={addTab:function(e,n){"home"!=n.name&&n.path&&(-1===e.tabList.findIndex(function(e){return e.name===n.name})&&e.tabList.push(n));localStorage.setItem("tabs",l()(e.tabList))},closeTab:function(e,n){var t=e.tabList.findIndex(function(e){return e.name===n.name});e.tabList.splice(t,1)},isCollapse:function(e){e.isCollapse=!e.isCollapse},getImage:function(e,n){e.userImage=n},setDept:function(e,n){e.deptList=n},saveDept:function(e,n){e.selectDept=n},changePage:function(e,n){e.page=n},changePageSize:function(e,n){e.pageSize=n}},m=new p.a.Store({state:h,mutations:f,actions:{}}),d=(t("ulDn"),t("q8sh"),t("zL8q")),g=t.n(d),b=(t("tvR6"),t("mw3O")),v=t.n(b),L=t("//Fk"),S=t.n(L),k=t("mtWM"),w=t.n(k);w.a.interceptors.request.use(function(e){return localStorage.accessToken&&(e.headers.Authorization=localStorage.accessToken),console.log("请求拦截"+e.headers.Authorization),e}),w.a.interceptors.response.use(function(e){return e},function(e){return console.log(e.response),401==e.response.status&&(d.Message.error("token失效，请重新登录"),localStorage.removeItem("accessToken"),s.push("/login")),S.a.reject(e)});var I=w.a;o.default.config.productionTip=!1,o.default.use(g.a),o.default.prototype.qs=v.a,I.defaults.withCredentials=!0,o.default.prototype.axios=I;var T=u.a.prototype.push;u.a.prototype.push=function(e){return T.call(this,e).catch(function(e){return e})},new o.default({el:"#app",router:s,store:m,components:{App:r},template:"<App/>"})},q8sh:function(e,n){},tvR6:function(e,n){},ufWc:function(e,n){},ulDn:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.f188666b38c6b288e810.js.map