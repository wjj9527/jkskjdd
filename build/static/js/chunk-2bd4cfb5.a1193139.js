(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bd4cfb5"],{"0711":function(e,t,a){},"0981":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"health_warp"},[t("form",{staticClass:"search",attrs:{action:"."}},[t("input",{staticStyle:{display:"none"},attrs:{type:"text"}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.keyword,expression:"keyword"}],ref:"input",attrs:{type:"search",placeholder:"请输入搜索关键字，标题或内容"},domProps:{value:e.keyword},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search.apply(null,arguments)},input:function(t){t.target.composing||(e.keyword=t.target.value)}}}),t("i",{staticClass:"iconfont icon-sousuo"})]),t("div",{staticClass:"tab"},[t("Nav",{attrs:{tabs:e.tabs,tabIndex:e.tabIndex},on:{changeIndex:e.changeIndex}})],1),t("div",{directives:[{name:"show",rawName:"v-show",value:1===e.tabIndex,expression:"tabIndex===1"}],staticClass:"subTab"},[t("span",{directives:[{name:"show",rawName:"v-show",value:e.right.includes("healthEvent:handleManagement"),expression:"right.includes('healthEvent:handleManagement')"}],class:1===e.subTabIndex?"active":"",on:{click:function(t){return e.checkSubTab(0)}}},[e._v("主办")]),t("span",{directives:[{name:"show",rawName:"v-show",value:e.right.includes("healthEvent:handleManagement"),expression:"right.includes('healthEvent:handleManagement')"}],class:2===e.subTabIndex?"active":"",on:{click:function(t){return e.checkSubTab(1)}}},[e._v("协办")]),t("span",{directives:[{name:"show",rawName:"v-show",value:e.right.includes("healthEvent:eventManagement"),expression:"right.includes('healthEvent:eventManagement')"}],class:3===e.subTabIndex?"active":"",on:{click:function(t){return e.checkSubTab(2)}}},[e._v("已发")]),t("span",{directives:[{name:"show",rawName:"v-show",value:e.right.includes("healthEvent:eventManagement"),expression:"right.includes('healthEvent:eventManagement')"}],class:4===e.subTabIndex?"active":"",on:{click:function(t){return e.checkSubTab(3)}}},[e._v("已回复")])]),t("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.loadMore,expression:"loadMore"}],staticClass:"list",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"10"}},e._l(e.list,(function(a,s){return t("li",{key:s,on:{click:function(t){return e.toDetail(a.id)}}},[t("h4",[e._v(e._s(a.title))]),t("p",[e._v(e._s(a.incidentContent))]),t("div",[t("span",[e._v(e._s(a.roadName))]),t("i",[t("b",{staticClass:"iconfont icon-time"}),t("s",[e._v(e._s(a.teamWorkTime))])])])])})),0),e.right.includes("healthEvent:add")?t("div",{staticClass:"report",on:{click:e.add}},[t("i",{staticClass:"iconfont icon-daohanglan"}),t("p",[e._v("上报")])]):e._e()])},n=[],i=(a("14d9"),a("9fdc")),h=a("c198"),r={name:"health",components:{Nav:i["a"]},data(){return{right:[],keyword:"",pageSize:10,loading:!1,noMore:!1,tabs:[{name:"待办事件"},{name:"已办事件"},{name:"草稿箱",hide:!1}],subTabs:["主办","协办","已发","已回复"],tabIndex:localStorage.getItem("healthTabIndex")/1||1,subTabIndex:localStorage.getItem("healthSubIndex")/1||1,list:[],total:0,params:{status:1,pageNo:1,teamworkType:5,eventHandleType:1}}},computed:{streetList(){return this.$store.state.common.streetList}},async created(){const e=this;dd.enablePullToRefresh().then(t=>{e.getData()}).catch(e=>{dd.stopPullDownRefresh()});const{data:t}=await Object(h["sb"])({parentId:"healthManage0101",screen:0});t&&t.length&&(this.right=t.map(e=>e.name)),this.tabs[2].hide=!this.right.includes("healthEvent:distributionManagement"),this.right.includes("healthEvent:handleManagement")||(this.right.includes("healthEvent:eventManagement")?(this.tabIndex=localStorage.getItem("healthTabIndex")/1||1,this.subTabIndex=localStorage.getItem("healthSubIndex")/1||3):this.tabIndex=localStorage.getItem("healthTabIndex")/1||2),this.getData()},methods:{async getData(){this.params.pageSize=this.pageSize,this.params.keyword=this.keyword,1===this.tabIndex&&1===this.subTabIndex?(this.params.dataType=1,this.params.type=27):1===this.tabIndex&&2===this.subTabIndex?(this.params.dataType=2,this.params.type=26):1===this.tabIndex&&3===this.subTabIndex?(this.params.dataType=3,this.params.type=25):1===this.tabIndex&&4===this.subTabIndex?(this.params.dataType=5,this.params.type=24):2===this.tabIndex?(this.params.dataType=4,this.params.type=28):3===this.tabIndex&&(this.params.dataType=0,this.params.type=23);const e=await Object(h["Z"])(this.params);e.success&&(this.list=e.data.list,this.total=e.data.total,dd.stopPullDownRefresh())},search(){this.getData(),this.$refs.input.blur()},changeIndex(e){this.tabIndex=e,localStorage.setItem("healthTabIndex",e),this.pageSize=10,this.keyword="",this.getData()},checkSubTab(e){this.subTabIndex!==e+1&&(this.subTabIndex=e+1,localStorage.setItem("healthSubIndex",e+1),this.pageSize=10,this.keyword="",this.getData())},loadMore(){this.list.length!==this.total&&(this.pageSize+=10,this.getData())},toDetail(e){this.$router.push(`health/detail?id=${e}&type=${this.params.type}`)},add(){this.$router.push("health/add")}}},d=r,l=(a("2d59"),a("2877")),c=Object(l["a"])(d,s,n,!1,null,"d253953c",null);t["default"]=c.exports},"2d59":function(e,t,a){"use strict";a("0711")},"9fdc":function(e,t,a){"use strict";var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tab_warp"},e._l(e.tabs,(function(a,s){return t("span",{directives:[{name:"show",rawName:"v-show",value:!a.hide,expression:"!v.hide"}],key:s,class:e.index===s+1?"active":"",on:{click:function(t){return e.checkTab(s)}}},[e._v(e._s(a.name))])})),0)},n=[],i={props:["tabs","tabIndex"],data(){return{index:this.tabIndex}},mounted(){},methods:{checkTab(e){this.index!==e+1&&(this.index=e+1,this.$emit("changeIndex",this.index))}}},h=i,r=(a("e9e9"),a("2877")),d=Object(r["a"])(h,s,n,!1,null,"d765f7f0",null);t["a"]=d.exports},e4d4:function(e,t,a){},e9e9:function(e,t,a){"use strict";a("e4d4")}}]);