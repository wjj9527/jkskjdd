(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-535090f0"],{"24fd":function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t._self._c;return i("div",{staticClass:"confirm_warp"},[i("h4",[t._v(t._s(t.title))]),i("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.opinion,expression:"opinion",modifiers:{trim:!0}}],attrs:{name:"",id:"",placeholder:t.placeHolder},domProps:{value:t.opinion},on:{input:function(i){i.target.composing||(t.opinion=i.target.value.trim())},blur:function(i){return t.$forceUpdate()}}}),t._m(0),i("div",{staticClass:"btn"},[i("span",[t._v(t._s(t.btnTxt))])])])},s=[function(){var t=this,i=t._self._c;return i("div",{staticClass:"accessory"},[i("span",[t._v("附件")]),i("div",[i("p",[t._v("1")]),i("p",[t._v("1")]),i("p",[t._v("1")])]),i("b",[i("i",{staticClass:"iconfont icon-fujian"})])])}],a={data(){return{id:0,placeHolder:"",title:"",btnTxt:"",opinion:""}},mounted(){this.id=this.$route.params.id,this.title=1==this.id?"处置情况":"申请办结",this.btnTxt=1==this.id?"确认":"申请办结",this.placeHolder=1==this.id?"请输入处置意见":"请输入处理意见",document.title=this.title},methods:{}},o=a,r=(n("551f8"),n("2877")),c=Object(r["a"])(o,e,s,!1,null,"aeca82fe",null);i["default"]=c.exports},"3a2f":function(t,i,n){},"551f8":function(t,i,n){"use strict";n("3a2f")}}]);