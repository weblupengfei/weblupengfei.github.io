webpackJsonp([2],{HkCU:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Xxa5"),a=n.n(r),o=n("exGp"),i=n.n(o),c=n("woOf"),l=n.n(c),s=n("Lk4z"),u=n("WNPb"),f={components:{Table:s.a,Form:u.a},data:function(){return{tableLabel:[{prop:"id",label:"客户ID"},{prop:"name",label:"客户姓名"},{prop:"phone",label:"电话号码"},{prop:"belognTo",label:"所属人"},{prop:"cTime",label:"创建时间"},{prop:"uTime",label:"更新时间"}],tableData:[],formLabel:[{model:"id",label:"客户ID",type:"input"},{model:"name",label:"客户姓名",type:"input"},{model:"phone",label:"电话号码",type:"input"},{model:"belognTo",label:"所属人",type:"input"},{model:"cTime",label:"创建时间",type:"input"},{model:"uTime",label:"更新时间",type:"input"}],formData:{id:"",name:"",phone:"",belognTo:"",cTime:"",uTime:""},seachForm:{id:"",name:"",phone:"",belognTo:"",cTime:"",uTime:""},config:{page:1,pageSize:20,total:20,loading:!1,type:"跟进"},drawer:!1,activeName:"first"}},created:function(){this.getCustomer()},methods:{edit:function(t){this.drawer=!0,this.formData=l()({},t)},handleClick:function(){},close:function(){this.drawer=!1},getCustomer:function(){var t=this;return i()(a.a.mark(function e(){var n,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.config.loading=!0,n="http://127.0.0.1:3000/customerList",e.next=4,t.axios.get(n);case 4:r=e.sent,console.log(r.data.data),t.tableData=r.data.data.data,t.config.total=r.data.data.total,console.log(t.tabelData),t.config.loading=!1;case 10:case"end":return e.stop()}},e,t)}))()}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Form",{attrs:{formLabel:t.formLabel,seachForm:t.seachForm}},[n("el-button",{attrs:{size:"small",type:"primary"}},[t._v("搜索")])],1),t._v(" "),n("div",{staticClass:"button"},[n("el-button",{attrs:{size:"small",type:"primary"}},[t._v("+新建")]),t._v(" "),n("el-button",{attrs:{size:"small",type:"danger"}},[t._v("删除")])],1),t._v(" "),n("Table",{attrs:{tableLabel:t.tableLabel,config:t.config,tableData:t.tableData},on:{edit:t.edit}}),t._v(" "),n("el-drawer",{attrs:{withHeader:!1,visible:t.drawer,size:"60%"},on:{"update:visible":function(e){t.drawer=e}}},[n("div",{staticClass:"desc"},[n("div",{staticClass:"d-flex"},[n("div",{staticClass:"image"},[n("i",{staticClass:"el-icon-s-custom",staticStyle:{"font-size":"300%"}})]),t._v(" "),n("div",{staticClass:"info"},[n("div",[t._v("姓名")]),t._v(" "),n("div",[n("span",[t._v("15221501410")]),t._v(" "),n("i",{staticClass:"el-icon-phone-outline"}),t._v(" "),n("i",{staticClass:"el-icon-s-promotion"})])])]),t._v(" "),n("div",{staticClass:"close"},[n("i",{staticClass:"el-icon-close",on:{click:t.close}})])]),t._v(" "),n("div",{staticClass:"input"},[n("textarea",{attrs:{placeholder:"添加动态"}}),t._v(" "),n("el-button",{attrs:{size:"small",type:"primary"}},[t._v("提交")])],1),t._v(" "),[n("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"编辑信息",name:"first"}},[n("Form",{attrs:{formLabel:t.formLabel,seachForm:t.formData}}),t._v(" "),n("div",{staticClass:"demo-drawer__footer"},[n("el-button",{attrs:{type:"primary",size:"small"}},[t._v("提交")])],1)],1),t._v(" "),n("el-tab-pane",{attrs:{label:"最近动态",name:"second"}},[t._v("最近动态")]),t._v(" "),n("el-tab-pane",{attrs:{label:"电话记录",name:"third"}},[t._v("电话记录")]),t._v(" "),n("el-tab-pane",{attrs:{label:"短信记录",name:"fourth"}},[t._v("短信记录")])],1)]],2)],1)},staticRenderFns:[]};var p=n("VU/8")(f,h,!1,function(t){n("RsTw")},null,null);e.default=p.exports},Lk4z:function(t,e,n){"use strict";var r={props:{tableData:Array,tableLabel:Array,config:Object},data:function(){return{pageSize:null}},methods:{handleEdit:function(t){this.$emit("edit",t)},handleDelete:function(t){this.$emit("del",t)},sizeChange:function(t){this.$store.commit("changePageSize",t),this.$emit("changeSizePage")},prev:function(t){this.$store.commit("changePage",t),this.$emit("changePage")},next:function(t){this.$store.commit("changePage",t),this.$emit("changePage")},change:function(t){this.$store.commit("changePage",t),this.$emit("changePage")},changeState:function(t){this.$emit("changState",t)},selectRows:function(t){this.$emit("selectRow",t)}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"common-table"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.config.loading,expression:"config.loading"}],staticClass:"tableClass",attrs:{data:t.tableData,border:"",height:"380",stripe:""},on:{"selection-change":t.selectRows}},[n("el-table-column",{attrs:{prop:"date",label:"序号",width:"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticStyle:{"margin-left":"10px",padding:"0"}},[t._v(t._s(e.$index+1))])]}}])}),t._v(" "),n("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),t._l(t.tableLabel,function(e){return n("el-table-column",{key:e.prop,attrs:{label:e.label,width:"180","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(r){return[n("el-tooltip",{attrs:{content:r.row.ustate?"已启用":"已禁用",placement:"right"}},["state"==e.prop?n("el-switch",{attrs:{"active-value":!0,"inactive-value":!1},on:{change:function(e){return t.changeState(r.row)}},model:{value:r.row.ustate,callback:function(e){t.$set(r.row,"ustate",e)},expression:"scope.row.ustate"}}):t._e()],1),t._v(" "),n("span",{staticStyle:{"margin-left":"10px","font-size":"12px"}},[t._v("\n                    "+t._s(r.row[e.prop])+"\n                    "),"phone"==e.prop?n("i",{staticClass:"el-icon-phone-outline"}):t._e(),t._v(" "),"phone"==e.prop?n("i",{staticClass:"el-icon-s-promotion"}):t._e()])]}}],null,!0)})}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"150",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){return t.handleEdit(e.row)}}},[t._v(t._s(t.config.type))]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return t.handleDelete(e.row)}}},[t._v("删除")])]}}])})],2),t._v(" "),n("el-pagination",{attrs:{"current-page":t.config.page,"page-sizes":[20,50,200,500],"page-size":t.config.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.config.total},on:{"size-change":t.sizeChange,"prev-click":t.prev,"next-click":t.next,"current-change":t.change,"update:currentPage":function(e){return t.$set(t.config,"page",e)},"update:current-page":function(e){return t.$set(t.config,"page",e)},"update:pageSize":function(e){return t.$set(t.config,"pageSize",e)},"update:page-size":function(e){return t.$set(t.config,"pageSize",e)}}})],1)},staticRenderFns:[]};var o=n("VU/8")(r,a,!1,function(t){n("hD2J")},null,null);e.a=o.exports},RsTw:function(t,e){},SldL:function(t,e){!function(e){"use strict";var n,r=Object.prototype,a=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag",s="object"==typeof t,u=e.regeneratorRuntime;if(u)s&&(t.exports=u);else{(u=e.regeneratorRuntime=s?t.exports:{}).wrap=w;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",v={},g={};g[i]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(F([])));y&&y!==r&&a.call(y,i)&&(g=y);var b=z.prototype=x.prototype=Object.create(g);L.prototype=b.constructor=z,z.constructor=L,z[l]=L.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,z):(t.__proto__=z,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(b),t},u.awrap=function(t){return{__await:t}},k(E.prototype),E.prototype[c]=function(){return this},u.AsyncIterator=E,u.async=function(t,e,n,r){var a=new E(w(t,e,n,r));return u.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},k(b),b[l]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},u.values=F,$.prototype={constructor:$,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,a){return c.type="throw",c.arg=t,e.next=r,a&&(e.method="next",e.arg=n),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var l=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;T(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:F(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function w(t,e,n,r){var a=e&&e.prototype instanceof x?e:x,o=Object.create(a.prototype),i=new $(r||[]);return o._invoke=function(t,e,n){var r=f;return function(a,o){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===a)throw o;return P()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=S(i,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var l=_(t,e,n);if("normal"===l.type){if(r=n.done?d:h,l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=d,n.method="throw",n.arg=l.arg)}}}(t,n,i),o}function _(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function x(){}function L(){}function z(){}function k(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function E(t){var e;this._invoke=function(n,r){function o(){return new Promise(function(e,o){!function e(n,r,o,i){var c=_(t[n],t,r);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==typeof s&&a.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,o,i)},function(t){e("throw",t,o,i)}):Promise.resolve(s).then(function(t){l.value=t,o(l)},i)}i(c.arg)}(n,r,e,o)})}return e=e?e.then(o,o):o()}}function S(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,S(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=_(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,v;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function $(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function F(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},Xxa5:function(t,e,n){t.exports=n("jyFz")},exGp:function(t,e,n){"use strict";e.__esModule=!0;var r,a=n("//Fk"),o=(r=a)&&r.__esModule?r:{default:r};e.default=function(t){return function(){var e=t.apply(this,arguments);return new o.default(function(t,n){return function r(a,i){try{var c=e[a](i),l=c.value}catch(t){return void n(t)}if(!c.done)return o.default.resolve(l).then(function(t){r("next",t)},function(t){r("throw",t)});t(l)}("next")})}}},hD2J:function(t,e){},jyFz:function(t,e,n){var r=function(){return this}()||Function("return this")(),a=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=a&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("SldL"),a)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}}});
//# sourceMappingURL=2.5f347deeac4c2aab5b07.js.map