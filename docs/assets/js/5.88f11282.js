(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{249:function(t,n,s){},250:function(t,n,s){"use strict";var e=s(9),a={name:"IconTag",functional:!0,props:{name:{type:String,required:!0},icon:{type:String,required:!0},size:{type:String,default:"1x"}},render:(t,{props:{name:n,icon:s,size:a}})=>t("span",{class:"post-tag",attrs:{title:n}},[t(e.a,{class:"post-tag-icon",attrs:{name:s,size:a}}),t("span",{class:"post-tag-name"},[n])])},i=(s(251),s(3)),o=Object(i.a)(a,void 0,void 0,!1,null,null,null);n.a=o.exports},251:function(t,n,s){"use strict";s(249)},270:function(t,n,s){"use strict";s.r(n);var e={name:"Categories",components:{IconTag:s(250).a}},a=s(3),i=Object(a.a)(e,(function(){var t=this._self._c;return t("div",{staticClass:"categories"},[t("div",{staticClass:"main-div"},[t("h2",[this._v(this._s(this.$themeConfig.lang.categories))]),this._v(" "),this._l(this.$categories.list,(function(n){return t("RouterLink",{key:n.name,attrs:{to:n.path}},[t("IconTag",{attrs:{icon:"category",name:n.name}})],1)}))],2)])}),[],!1,null,null,null);n.default=i.exports}}]);