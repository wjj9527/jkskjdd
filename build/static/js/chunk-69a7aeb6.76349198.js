(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69a7aeb6"],{6732:function(t,e,s){"use strict";s("7825")},7825:function(t,e,s){},"8d41":function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"rollMaxbox",style:{height:t.maxheight},on:{scroll:function(e){return t.roll(e)}}},[t._t("default")],2)},i=[],n={data(){return{timeOut:null}},props:{maxheight:{type:String,default:"200px"}},methods:{roll(t){clearTimeout(this.timeOut),this.timeOut=setTimeout(()=>{t.srcElement.scrollTop+t.srcElement.offsetHeight>=t.srcElement.scrollHeight-2&&this.sendInfo()},200)},sendInfo(){this.$emit("scrollTop",null)}}},o=n,r=(s("6732"),s("2877")),l=Object(r["a"])(o,a,i,!1,null,null,null);e["a"]=l.exports},c597:function(t,e,s){},c78f:function(t,e,s){t.exports=s.p+"static/img/search.18ae76d0.png"},d5db:function(t,e,s){"use strict";s.r(e);s("14d9");var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"Maxbox"},[e("div",{staticClass:"headInfoBox"},[e("div",{staticClass:"infoHead"},[e("span",[t._v(t._s(t.GroupInfo.name))]),e("span",[t._v("组别："+t._s(t.GroupInfo.groupName))])]),e("div",{staticClass:"infoContent"},t._l(1==t.useType?t.infoArrys1:t.infoArrys2,(function(s,a){return e("div",{key:a,staticClass:"infoItem"},[t._v(" "+t._s(s.title+"：")+" "+t._s(null==t.hiddenDangerStatistics?0:t.hiddenDangerStatistics[s.key])+" ")])})),0)]),2==t.useType?e("div",{staticClass:"MyRepresentations"},[e("div",{on:{click:function(e){t.$store.commit("StoreData",{key:"RequestName",value:"申述列表"}),t.$push("/SecretVisit/ListRepresentations/ListRepresentations",{pageType:1})}}},[t._v("我的申诉")]),e("div",{on:{click:function(e){t.$store.commit("StoreData",{key:"RequestName",value:"延期申请"}),t.$push("/SecretVisit/ListRepresentations/ListRepresentations",{pageType:2})}}},[t._v("延期申请")])]):t._e(),e("div",{staticClass:"searchBox",on:{click:function(e){return t.$router.push("/SecretVisit/SearchPage/searchPage")}}},[t._m(0),e("span",[t._v(t._s(""==t.searchVal?"搜索点位关键字":t.searchVal))])]),e("div",{staticClass:"tabBox"},t._l(t.tabItems,(function(s,a){return e("div",{key:a,staticClass:"tabItem",class:t.tabIdx==a?"tabClick":"",on:{click:function(e){return t.tabClick(a,s)}}},[t._v(" "+t._s(s.name)+" ")])})),0),e("scrollBox",{attrs:{maxheight:"59vh"},on:{scrollTop:t.onScroller}},[e("div",{staticClass:"detailBigBox"},t._l(t.pointList,(function(s,a){return e("div",{key:a,staticClass:"detailBox",on:{click:function(e){t.$store.commit("StoreData",{key:"pointRouteName",value:"点位详情"}),t.$push("/SecretVisit/HiddenDangerReported/HiddenDangerReported",{type:"detail",eventID:s.id,eventState:s.eventState})}}},[e("div",{staticClass:"detail_address"},[t._v(" "+t._s(s.pointName.length>20?s.pointName.substring(0,20)+"......":s.pointName)+" ")]),e("div",{staticClass:"detail_line between",staticStyle:{margin:"9px 0px"}},[e("span",[t._v(" 所属街镇："+t._s(s.orgRoadName)+" ")]),e("span",[t._v(" "+t._s(s.reportTime)+" ")])]),e("div",{staticClass:"detail_line"},[t._v(" 地址："+t._s(s.locationAddress)+" ")]),e("div",{staticClass:"posBox",style:5==s.eventState||6==s.eventState?{backgroundColor:"#a1b7d0"}:""},[t._v(" "+t._s(s.eventStateName)+" ")])])})),0)]),1==t.useType?e("div",{staticClass:"btuBox"},[e("van-button",{staticClass:"butStyle",staticStyle:{color:"white"},attrs:{type:"primary"},on:{click:function(e){t.$store.commit("StoreData",{key:"pointRouteName",value:"点位上报"}),t.$push("/SecretVisit/HiddenDangerReported/HiddenDangerReported",{type:"add"})}}},[t._v("点位上报")])],1):t._e()],1)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"imgBox"},[e("img",{attrs:{src:s("c78f")}})])}],n=s("8d41"),o=s("f564"),r={components:{scrollBox:n["a"]},data(){return{infoArrys1:[{title:"累计上报点位数",key:"totalPointEventCount"},{title:"累计上报隐患数",key:"totalHiddenTroubleCount"}],infoArrys2:[{title:"进行中的隐患数",key:"handlingHiddenTroubleCount"},{title:"已完成隐患处置数",key:"handledHiddenTroubleCount"}],tabItems:[{name:"全部",key:""},{name:"初查",key:"1"},{name:"进行中",key:"2"},{name:"审核中",key:"3"},{name:"复查",key:"4"},{name:"办结",key:"5"},{name:"撤销",key:"6"}],tabIdx:0,tabkey:"",pageNo:1,pgaeToatal:0,useType:1,timeOut:null,searchVal:"",hiddenDangerStatistics:null,loadMore:!0,GroupInfo:{name:"",groupName:"",groupId:"",groupType:""},pointList:[]}},watch:{useType(t){2==this.useType&&this.tabItems.splice(1,1)}},mounted(){this.$store.commit("StoreData",{key:"includeArry",value:[]}),this.getPointEventList(),this.getUserGroupInfo()},created(){this.UpdateData()},methods:{onScroller(){0!=this.pgaeToatal&&(this.pointList.length>=this.pgaeToatal?Object(o["a"])({type:"danger",message:"无更多数据"}):(this.pageNo+=1,this.getPointEventList()))},clertRecord(){this.pointList=[],this.pageNo=1},tabClick(t,e){this.tabIdx=t,this.tabkey=e.key,this.clertRecord(),this.getPointEventList()},UpdateData(){this.searchVal=this.$store.state.searchHistory,0!=Object.keys(this.$store.state.HiddenDangerInfo).length&&this.$store.commit("StoreData",{key:"HiddenDangerInfo",value:[]})},getPointEventList(){this.Load.showLoad(),this.$httpapi.getPointEventList({pageSize:20,pageNo:this.pageNo,keyword:this.searchVal,eventState:this.tabkey}).then(t=>{this.Load.hideLoad(),1==t.success?(this.pointList=[...this.pointList,...t.data.data],this.pgaeToatal=t.data.total):Object(o["a"])({type:"danger",message:t.message})})},getUserGroupInfo(){this.$httpapi.getUserGroupInfo({}).then(t=>{const e=this;if(1==t.success){this.GroupInfo=t.data;let s=t.data.groupType;e.useType=1==s||5==s?1:2,this.$store.commit("StoreData",{key:"groupType",value:t.data.groupType})}else Object(o["a"])({type:"danger",message:t.message})}),this.$httpapi.getHiddenTroubleStatistic({}).then(t=>{1==t.success?this.hiddenDangerStatistics=t.data:Object(o["a"])({type:"danger",message:t.message})})}}},l=r,c=(s("ef7f"),s("2877")),d=Object(c["a"])(l,a,i,!1,null,"2bf1f545",null);e["default"]=d.exports},ef7f:function(t,e,s){"use strict";s("c597")}}]);