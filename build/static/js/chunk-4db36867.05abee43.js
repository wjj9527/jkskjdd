(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4db36867"],{"36f5":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"clues_warp"},[t("div",{staticClass:"cluesMsg"},[e._m(0),t("div",{staticClass:"form",class:e.edit?"":"unclick"},[t("div",{staticClass:"item"},[t("p",{class:e.formData.address?"active":""},[e._v("事件地址")]),t("div",{staticClass:"relativeC"},[t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.formData.address,expression:"formData.address",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"点击输入地址，也可地图进行定位",readonly:e.disabled},domProps:{value:e.formData.address},on:{input:function(t){t.target.composing||e.$set(e.formData,"address",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),t("i",{staticClass:"iconfont icon-location",on:{click:function(t){return e.addressFn()}}})])]),t("div",{staticClass:"item"},[t("p",{class:e.formData.description?"active":""},[e._v("线索描述")]),t("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:e.formData.description,expression:"formData.description",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"在此输入事件描述",readonly:e.disabled,rows:"4"},domProps:{value:e.formData.description},on:{input:function(t){t.target.composing||e.$set(e.formData,"description",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),t("div",{staticClass:"item"},[t("p",{class:e.formData.clueType?"active":""},[e._v("线索类型")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.formData.clueTypeName,expression:"formData.clueTypeName",modifiers:{trim:!0}}],attrs:{type:"text",readonly:"",placeholder:"在此输入线索类型"},domProps:{value:e.formData.clueTypeName},on:{click:function(t){!e.disabled&&e.cluesTypeFn()},input:function(t){t.target.composing||e.$set(e.formData,"clueTypeName",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),t("div",{staticClass:"item"},[t("p",{class:e.formData.happenDate?"active":""},[e._v("事件时间")]),t("input",{attrs:{type:"text",placeholder:"在此输入时间",readonly:""},domProps:{value:e.formData.happenDate},on:{click:function(t){!e.disabled&&e.timeFn()}}})])])]),t("div",{staticClass:"analyseClass"},[e._m(1),e._l(e.clueEventPeopleList,(function(i,s){return t("div",{key:s,staticClass:"form"},[t("div",{staticClass:"form_people"},[e._v(" 人员"+e._s(s+1)+" "),e.edit?t("div",{staticClass:"add_btn",on:{click:function(t){return e.personRetrieve()}}},[t("img",{attrs:{src:a("f628"),alt:""}})]):e._e()]),t("div",{staticClass:"item"},[t("p",{class:i.name?"active":""},[e._v("人物姓名")]),t("input",{directives:[{name:"model",rawName:"v-model",value:i.name,expression:"item.name"}],attrs:{type:"text",placeholder:"输入人物姓名"},domProps:{value:i.name},on:{input:function(t){t.target.composing||e.$set(i,"name",t.target.value)}}})]),t("div",{staticClass:"item"},[t("p",{class:i.cardid?"active":""},[e._v("身份证号")]),t("input",{directives:[{name:"model",rawName:"v-model",value:i.cardid,expression:"item.cardid"}],attrs:{type:"text",placeholder:"输入身份证号"},domProps:{value:i.cardid},on:{input:function(t){t.target.composing||e.$set(i,"cardid",t.target.value)}}})]),t("div",{staticClass:"item"},[t("p",{class:i.districtsId?"active":""},[e._v("所属街道")]),t("input",{directives:[{name:"model",rawName:"v-model",value:i.districtsName,expression:"item.districtsName"}],attrs:{type:"text",placeholder:"输入所属街道",readonly:""},domProps:{value:i.districtsName},on:{click:function(t){!e.disabled&&e.roadFn(i)},input:function(t){t.target.composing||e.$set(i,"districtsName",t.target.value)}}})]),t("div",{staticClass:"item"},[t("p",{class:i.communityId?"active":""},[e._v("所属社区")]),t("input",{directives:[{name:"model",rawName:"v-model",value:i.communityName,expression:"item.communityName"}],attrs:{type:"text",placeholder:"输入所属社区",readonly:""},domProps:{value:i.communityName},on:{click:function(t){!e.disabled&&e.communityFn(i)},input:function(t){t.target.composing||e.$set(i,"communityName",t.target.value)}}})]),e.clueEventPeopleList.length>=2?t("div",{staticClass:"del_btn",on:{click:function(t){return e.delPeople(s)}}},[t("img",{attrs:{src:a("d5b6"),alt:""}})]):e._e()])}))],2),t("div",{staticClass:"btn"},[e.edit?e._e():t("span",{on:{click:function(t){return e.reEdit()}}},[e._v("重新编辑")]),e.edit?t("span",{staticClass:"report",on:{click:function(t){return e.report()}}},[e._v("上报")]):e._e()])])},s=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"header_icon"},[t("span",[e._v("线索信息")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"header_icon"},[t("span",[e._v("人员信息")])])}],c=(a("14d9"),a("c198")),r=a("9fdc"),o={components:{Nav:r["a"]},data(){return{disabled:!1,edit:!1,tabs:[],tabIndex:localStorage.getItem("cluesDetailTabIndex")/1||1,formData:{address:"",districtsId:"",roadName:"",description:"",clueType:"",clueTypeName:"",happenDate:"",peoples:[{id:"",name:"",sex:"",birthday:"",phone:"",cardId:"",characterLabels:""},{id:"",name:""},{id:"",name:""}],longitude:"",latitude:""},cluesTypeData:[],sexData:[],characterLabelsData:[],clueEventId:"",peopleData:[],associateStatus:"",clueEventPeopleList:[{name:"",cardid:"",districtsId:"",districtsName:"",communityId:"",communityName:""}],roadData1:[]}},async created(){const e=this;window.scrollTo(0,0),dd.disablePullToRefresh().then(e=>{}).catch(e=>{}),e.getData();let t=this.$store.state;e.cluesTypeData=t.cluesTypeData,e.roadData1=t.roadData1,e.characterLabelsData=t.characterLabelsData},computed:{},methods:{async getData(){const e=this;let t=e.$route.query;e.associateStatus=t.associateStatus,e.edit=t.edit;const a=await Object(c["H"])({id:t.id});if(a.success){let t=a.data;if(e.formData.address=t.address,e.formData.description=t.description,e.formData.clueType=t.clueType,e.formData.clueTypeName=t.clueTypeName,e.formData.happenDate=t.happenDate,e.clueEventId=t.id,e.formData.peoples=t.peopleList,e.clueEventPeopleList=t.clueEventPeopleList,null!=e.formData.peoples){let t=[];e.formData.peoples.map((e,a)=>{a+=1,t.push({name:"人员"+a})}),e.tabs=t}}if(t&&t.listData){let a=[];a.push(t.listData);var i=JSON.parse(localStorage.getItem("b"));let s=[];s=i?a.concat(i):a,e.formData.peoples=s,localStorage.setItem("b",JSON.stringify(s));let c=[];e.formData.peoples.map((e,t)=>{t+=1,c.push({name:"人员"+t})}),e.tabs=c}},addressFn(){const e=this;dd.locateOnMap({longitude:e.formData.longitude?e.formData.longitude:"",latitude:e.formData.latitude?e.formData.latitude:""}).then(t=>{let a=t.province+t.city+t.adName+t.title;e.formData.address=a,e.formData.longitude=t.longitude,e.formData.latitude=t.latitude}).catch(e=>{})},changeIndex(e){const t=this;t.tabIndex=e,localStorage.setItem("cluesDetailTabIndex",e),this.$forceUpdate()},reEdit(){this.edit=!0},cluesTypeFn(){const e=this;dd.showSelect({source:e.cluesTypeData}).then(t=>{e.formData.clueType=t.value,e.formData.clueTypeName=t.key}).catch(e=>{})},personRetrieve(){const e=this;let t={name:"",cardid:"",districtsId:""};e.clueEventPeopleList.push(t)},validateFn(){const e=this;if(!e.formData.address)return e.alert("请输入地址"),!1;if(!e.formData.description)return e.alert("请输入事件描述"),!1;if(!e.formData.clueType)return e.alert("请输入线索类型"),!1;if(!e.formData.happenDate)return e.alert("请输入时间"),!1;for(var t=0;t<e.clueEventPeopleList.length;t++){if(!e.clueEventPeopleList[t].name)return e.alert("请输入姓名"),!1;if(!e.clueEventPeopleList[t].cardid)return e.alert("请输入身份证号"),!1;if(!e.clueEventPeopleList[t].districtsId)return e.alert("请输入所属街道"),!1;if(!e.clueEventPeopleList[t].communityId)return e.alert("请输入所属村社"),!1}return!0},alert(e){dd.alert({message:e,title:"提示",button:"收到"}).then(e=>{}).catch(e=>{})},report(){const e=this;let t=e.$route.query;const a=e.validateFn();a&&dd.confirm({title:"温馨提示",message:"确定提交？",buttonLabels:["取消","确定"]}).then(async a=>{if(1==a.buttonIndex){let a=[];e.clueEventPeopleList.map((e,t)=>{a.push({name:e.name,cardid:e.cardid,districtsId:e.districtsId,communityId:e.communityId})});const i=await Object(c["d"])({id:t.id,description:e.formData.description,address:e.formData.address,districtsId:e.formData.districtsId,clueType:e.formData.clueType,longitude:e.formData.longitude,latitude:e.formData.latitude,commitType:1,happenDate:e.formData.happenDate,clueEventPeopleList:a});i.success&&(dd.toast({icon:"success",text:"操作成功"}).then(e=>{}).catch(e=>{}),e.$router.push("/zhezheng/cluesReport/cluesList"))}}).catch(e=>{})},remove(e){const t=this;dd.confirm({title:"温馨提示",message:"是否移除关联?",buttonLabels:["取消","确定"]}).then(async a=>{1==a.buttonIndex&&(t.formData.peoples.splice(e,1),t.tabs.splice(e,1),this.$forceUpdate())}).catch(e=>{})},selectLabel(e){const t=this;let a=t.characterLabelsData.map((e,t)=>e.name);dd.showMultiSelect({options:a,selectOption:t.formData.peoples[e].characterLabelNameList}).then(a=>{let i=[],s=[];a.map((e,a)=>{i.push(t.characterLabelsData[e].name),s.push(t.characterLabelsData[e].id)}),t.formData.peoples[e].characterLabelNameList=i,t.formData.peoples[e].characterLabel=s.join(","),this.$forceUpdate()})},roadFn(e){const t=this;dd.showSelect({source:t.roadData1}).then(a=>{e.districtsId=a.value,e.districtsName=a.key,t.$forceUpdate()}).catch(e=>{})},async communityFn(e){const t=this,a=await Object(c["J"])({roadId:e.districtsId});let i=a.data.map((e,t)=>({key:e.name,value:e.id}));dd.showSelect({source:i}).then(a=>{e.communityId=a.value,e.communityName=a.key,t.$forceUpdate()}).catch(e=>{})},timeFn(){const e=this;dd.showDateTimePicker({format:"yyyy-MM-dd HH:mm:ss",value:e.formData.happenDate}).then(t=>{e.formData.happenDate=t.value})},delPeople(e){this.clueEventPeopleList.splice(e,1)}}},n=o,l=(a("870f"),a("2877")),d=Object(l["a"])(n,i,s,!1,null,"6a888f6f",null);t["default"]=d.exports},"870f":function(e,t,a){"use strict";a("a9cf")},"9fdc":function(e,t,a){"use strict";var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tab_warp"},e._l(e.tabs,(function(a,i){return t("span",{directives:[{name:"show",rawName:"v-show",value:!a.hide,expression:"!v.hide"}],key:i,class:e.index===i+1?"active":"",on:{click:function(t){return e.checkTab(i)}}},[e._v(e._s(a.name))])})),0)},s=[],c={props:["tabs","tabIndex"],data(){return{index:this.tabIndex}},mounted(){},methods:{checkTab(e){this.index!==e+1&&(this.index=e+1,this.$emit("changeIndex",this.index))}}},r=c,o=(a("e9e9"),a("2877")),n=Object(o["a"])(r,i,s,!1,null,"d765f7f0",null);t["a"]=n.exports},a9cf:function(e,t,a){},d5b6:function(e,t,a){e.exports=a.p+"static/img/iconDel.2817f271.png"},e4d4:function(e,t,a){},e9e9:function(e,t,a){"use strict";a("e4d4")},f628:function(e,t){e.exports="data:image/svg+xml;base64,aW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2wuanMiOwppbXBvcnQgc3ByaXRlIGZyb20gIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9ydW50aW1lL2Jyb3dzZXItc3ByaXRlLmJ1aWxkLmpzIjsKdmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woewogICJpZCI6ICJpY29uLWljb25BZGQiLAogICJ1c2UiOiAiaWNvbi1pY29uQWRkLXVzYWdlIiwKICAidmlld0JveCI6ICIwIDAgMTAyNCAxMDI0IiwKICAiY29udGVudCI6ICI8c3ltYm9sIGNsYXNzPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIGlkPVwiaWNvbi1pY29uQWRkXCI+PGRlZnM+PHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9XCJNNTEyIDkwOS4wNjEyMjRjLTIxOC45MDYxMjIgMC0zOTcuMDYxMjI0LTE3OC4xNTUxMDItMzk3LjA2MTIyNC0zOTcuMDYxMjI0czE3OC4xNTUxMDItMzk3LjA2MTIyNCAzOTcuMDYxMjI0LTM5Ny4wNjEyMjQgMzk3LjA2MTIyNCAxNzguMTU1MTAyIDM5Ny4wNjEyMjQgMzk3LjA2MTIyNC0xNzguMTU1MTAyIDM5Ny4wNjEyMjQtMzk3LjA2MTIyNCAzOTcuMDYxMjI0elwiIGZpbGw9XCIjMTZDNEFGXCIgcC1pZD1cIjI4MjNcIiAvPjxwYXRoIGQ9XCJNNjYwLjg5Nzk1OSA1MzEuODUzMDYxaC0yOTcuNzk1OTE4Yy0xMC45NzE0MjkgMC0xOS44NTMwNjEtOC44ODE2MzMtMTkuODUzMDYxLTE5Ljg1MzA2MXM4Ljg4MTYzMy0xOS44NTMwNjEgMTkuODUzMDYxLTE5Ljg1MzA2MWgyOTcuNzk1OTE4YzEwLjk3MTQyOSAwIDE5Ljg1MzA2MSA4Ljg4MTYzMyAxOS44NTMwNjEgMTkuODUzMDYxcy04Ljg4MTYzMyAxOS44NTMwNjEtMTkuODUzMDYxIDE5Ljg1MzA2MXpcIiBmaWxsPVwiI0RDRkZGQVwiIHAtaWQ9XCIyODI0XCIgLz48cGF0aCBkPVwiTTUxMiA2ODAuNzUxMDJjLTEwLjk3MTQyOSAwLTE5Ljg1MzA2MS04Ljg4MTYzMy0xOS44NTMwNjEtMTkuODUzMDYxdi0yOTcuNzk1OTE4YzAtMTAuOTcxNDI5IDguODgxNjMzLTE5Ljg1MzA2MSAxOS44NTMwNjEtMTkuODUzMDYxczE5Ljg1MzA2MSA4Ljg4MTYzMyAxOS44NTMwNjEgMTkuODUzMDYxdjI5Ny43OTU5MThjMCAxMC45NzE0MjktOC44ODE2MzMgMTkuODUzMDYxLTE5Ljg1MzA2MSAxOS44NTMwNjF6XCIgZmlsbD1cIiNEQ0ZGRkFcIiBwLWlkPVwiMjgyNVwiIC8+PC9zeW1ib2w+Igp9KTsKdmFyIHJlc3VsdCA9IHNwcml0ZS5hZGQoc3ltYm9sKTsKZXhwb3J0IGRlZmF1bHQgc3ltYm9s"}}]);