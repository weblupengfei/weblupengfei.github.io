webpackJsonp([4],{"342p":function(e,t){},nwNo:function(e,t){var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function r(e){this.message=e}r.prototype=new Error,r.prototype.name="InvalidCharacterError",e.exports="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new r("'atob' failed: The string to be decoded is not correctly encoded.");for(var o,i,a=0,s=0,u="";i=t.charAt(s++);~i&&(o=a%4?64*o+i:i,a++%4)?u+=String.fromCharCode(255&o>>(-2*a&6)):0)i=n.indexOf(i);return u}},ozX0:function(e,t,n){var r=n("nwNo");e.exports=function(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(r(e).replace(/(.)/g,function(e,t){var n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n}))}(t)}catch(e){return r(t)}}},tcoL:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("ytdl");var r={data:function(){return{uname:"",upwd:"",submit:!0}},methods:{buttonDis:function(){this.submit=!(/^[a-z\d]{3,10}$/i.test(this.uname)&&""!==this.upwd)},regist:function(){var e=this,t=this.qs.stringify({uname:this.uname,upwd:this.upwd});this.axios.post("http://127.0.0.1:3000/register",t).then(function(t){console.log(t),e.$message({showClose:!0,type:"success",message:t.data.msg})})}},updated:function(){this.buttonDis()}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("div",{attrs:{id:"body"}},[n("form",{attrs:{action:"",id:"loginform"}},[n("p",[e._v("Welcome")]),e._v(" "),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.uname,expression:"uname"}],attrs:{type:"text",id:"txtName",name:"uname",placeholder:"Username"},domProps:{value:e.uname},on:{input:function(t){t.target.composing||(e.uname=t.target.value)}}})]),e._v(" "),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.upwd,expression:"upwd"}],attrs:{type:"password",id:"txtPwd",name:"upwd",placeholder:"Password"},domProps:{value:e.upwd},on:{input:function(t){t.target.composing||(e.upwd=t.target.value)}}})]),e._v(" "),n("p",[n("input",{attrs:{type:"button",id:"btn",value:"Login",disabled:e.submit},on:{click:e.regist}})])])]),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"box"},[n("ul",[n("li"),e._v(" "),n("li"),e._v(" "),n("li"),e._v(" "),n("li"),e._v(" "),n("li"),e._v(" "),n("li"),e._v(" "),n("li"),e._v(" "),n("li"),e._v(" "),n("li"),e._v(" "),n("li")])])}]};var i=n("VU/8")(r,o,!1,function(e){n("342p")},null,null);t.default=i.exports},ytdl:function(e,t,n){"use strict";var r=n("ozX0");function o(e){this.message=e}o.prototype=new Error,o.prototype.name="InvalidTokenError",e.exports=function(e,t){if("string"!=typeof e)throw new o("Invalid token specified");var n=!0===(t=t||{}).header?0:1;try{return JSON.parse(r(e.split(".")[n]))}catch(e){throw new o("Invalid token specified: "+e.message)}},e.exports.InvalidTokenError=o}});
//# sourceMappingURL=4.2274b7e6dcc43718131d.js.map