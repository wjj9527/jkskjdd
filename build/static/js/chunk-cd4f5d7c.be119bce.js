(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cd4f5d7c"],{"0659":function(t,i,e){"use strict";i["a"]={mobBackUrl:"https://pazht.ouhai.gov.cn:8000",corpId:"196729",agentId:"182928633",dingId:"yueqing",xx:""}},2534:function(t,i,e){"use strict";e("af72")},"8ac0":function(t,i,e){"use strict";var n=function(){var t=this,i=t._self._c;return i("div",{staticStyle:{height:"6vh",width:"100%",background:"#fff"}},[i("div",{staticClass:"tab_warp_h"},t._l(t.tabs,(function(e,n){return i("span",{directives:[{name:"show",rawName:"v-show",value:!e.hide,expression:"!v.hide"}],key:n,class:t.index===n+1?"active":"",on:{click:function(i){return t.checkTab(n)}}},[t._v(t._s(e.name))])})),0)])},a=[],s={props:["tabs","tabIndex"],data(){return{index:this.tabIndex}},mounted(){},methods:{checkTab(t){const i=this;i.index!==t+1&&(i.index=t+1,i.$emit("changeIndex",i.index))}}},d=s,c=(e("ea7e"),e("2877")),o=Object(c["a"])(d,n,a,!1,null,"7ee09acc",null);i["a"]=o.exports},"96ef":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t._self._c;return i("div",{staticStyle:{height:"100%"}},[i("NavHeader",{attrs:{tabs:t.tabs,tabIndex:t.tabIndex},on:{changeIndex:t.changeIndex}}),1==t.tabIndex?i("div",{staticClass:"listing"},[i("div",{staticClass:"content"},[i("div",{staticClass:"content_detail"},[i("div",[i("span",[t._v("异动内容：")]),i("span",[t._v(t._s(t.detail.petitionContent))])]),i("div",[i("span",[t._v("异动时间：")]),i("span",[t._v(t._s(t.detail.petitionTime))])]),i("div",[i("span",[t._v("户籍地址：")]),i("span",[t._v(t._s(t.detail.permanentAddress))])])])]),i("div",{staticClass:"instructions"},[i("div",{staticClass:"head"},[t._m(0),i("div",{staticClass:"right-side",on:{click:function(i){return t.handleAddClick()}}},[i("img",{attrs:{src:e("97ca")}}),i("span",[t._v("添加")])])]),i("div",{staticClass:"table handleClass"},[i("div",[t._m(1),0==t.detail.peoplePetitionRecordList.length?i("div",{staticClass:"list"},[i("span",{staticStyle:{width:"100%","text-align":"center"}},[t._v(" 暂无处置情况 ")])]):t._e(),t._l(t.detail.peoplePetitionRecordList,(function(e,n){return i("div",{key:n,staticClass:"list"},[i("span",{staticClass:"title_inline",staticStyle:{width:"20%"}},[t._v(" "+t._s(e.createName)+" ")]),i("span",{staticClass:"title_inline",staticStyle:{width:"45%"}},[t._v(" "+t._s(e.recordContent)+" ")]),i("span",{staticClass:"title_inline",staticStyle:{width:"35%"}},[t._v(" "+t._s(e.createTime)+" ")])])}))],2)])]),t._m(2)]):t._e(),2==t.tabIndex?i("div",{staticClass:"flowClass"},t._l(t.processHandles,(function(e,n){return i("div",{key:n,style:n+1==t.processHandles.length?"border:none":""},[i("span",{staticClass:"flowClass_icon"}),i("div",{staticClass:"flowClass_t"},[t._v(t._s(e.createTime))]),i("div",{staticClass:"flowClass_t"},[t._v(t._s(e.combineContent))])])})),0):t._e(),i("div",{staticStyle:{height:"10vh"}}),i("div",{staticClass:"btn"},[t.signOpdata&&1!=t.detail.isSign&&1!=t.type?i("span",{on:{click:function(i){return t.signClick()}}},[t._v(" 签到 ")]):t._e(),t.detail.warningOpdata&&t.signOpdata&&1==t.detail.isSign&&1!=t.detail.petitionStatus||t.detail.warningOpdata&&!t.signOpdata&&1!=t.detail.petitionStatus?i("span",{on:{click:function(i){return t.toEarlywarning(1)}}},[t._v(" 预警 ")]):t._e(),t.detail.urgOpdata&&t.signOpdata&&1==t.detail.isSign&&1!=t.type&&1!=t.detail.petitionStatus||t.detail.urgOpdata&&!t.signOpdata&&1!=t.type&&1!=t.detail.petitionStatus?i("span",{on:{click:function(i){return t.toEarlywarning(2)}}},[t._v(" 催办 ")]):t._e(),t.detail.endOpdata&&t.signOpdata&&1==t.detail.isSign&&1!=t.detail.petitionStatus&&1!=t.type||t.detail.endOpdata&&!t.signOpdata&&1!=t.detail.petitionStatus&&1!=t.type?i("span",{on:{click:function(i){return t.toEarlywarning(3)}}},[t._v(" 异动结束 ")]):t._e()])],1)},a=[function(){var t=this,i=t._self._c;return i("div",{staticClass:"left-side"},[i("img",{attrs:{src:e("fd6c")}}),i("span",[t._v("处置情况")])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"title"},[i("span",{staticClass:"title_inline",staticStyle:{width:"20%"}},[t._v("处置人")]),i("span",{staticClass:"title_inline",staticStyle:{width:"45%"}},[t._v("处置内容")]),i("span",{staticClass:"title_inline",staticStyle:{width:"35%"}},[t._v("处置时间")])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"bottom-box"},[i("p",{staticClass:"line"}),i("span",[t._v("已是最底部")]),i("p",{staticClass:"line"})])}],s=(e("14d9"),e("c198")),d=e("0659"),c=e("8ac0"),o={components:{NavHeader:c["a"]},data(){return{signOpdata:!1,processHandles:[],tabs:[{name:"异动详情"}],tabIndex:localStorage.getItem("SidePage_detail")/1||1,petitionId:"",petitionRecordId:"",detail:{peoplePetitionRecordList:[]},nums:1,latitude:"",longitude:"",address:"",type:""}},async created(){const t=this;t.getGeolocationFn();let i=t.$route.query;t.petitionId=i.petitionId,t.petitionRecordId=i.petitionRecordId,t.type=i.type,2==i.type||3==i.type?(t.getSignOpdataFn(),t.tabs=[{name:"异动详情"},{name:"处置进度"}]):t.tabs=[{name:"异动详情"}],t.getPetitionRecordListByIdFn(),t.getPeoplePetitionInfoByDingFn()},methods:{toEarlywarning(t){const i=this;1==t&&i.$router.push({path:"/ARuiAn/SidePage/earlyWarning",query:{petitionId:i.petitionId,recordType:202,type:i.type,peopleId:i.detail.peopleId}}),2==t&&i.$router.push({path:"/ARuiAn/SidePage/earlyWarning",query:{petitionId:i.petitionId,recordType:203,type:i.type}}),3==t&&dd.prompt({message:"",title:"异动结束内容",buttonLabels:["确定","取消"]}).then(async t=>{if(0==t.buttonIndex){let e=await Object(s["n"])({petitionId:i.petitionId,recordType:299,recordContent:t.value?t.value:""});e.success&&dd.toast({icon:"success",text:"操作成功"}).then(t=>{i.getPetitionRecordListByIdFn(),i.getPeoplePetitionInfoByDingFn()})}}).catch(t=>{})},async changeIndex(t){const i=this;i.tabIndex=t,localStorage.setItem("SidePage_detail",t)},async getPeoplePetitionInfoByDingFn(){const t=this,i=await Object(s["mb"])({id:t.petitionId,petitionRecordId:t.petitionRecordId});i.success&&(t.detail=i.data)},async getPetitionRecordListByIdFn(){const t=this,i=await Object(s["ob"])({pentitionId:t.petitionId});i.success&&(t.processHandles=i.data)},async signClick(){const t=this,i=await Object(s["dc"])({recordType:205,petitionId:t.petitionId,id:t.petitionRecordId,longitude:t.longitude,latitude:t.latitude,recordAddress:t.address});i.success&&(t.getPetitionRecordListByIdFn(),t.getPeoplePetitionInfoByDingFn(),dd.toast({icon:"success",text:"操作成功"}))},handleAddClick(){const t=this;t.$router.push({path:"/ARuiAn/SidePage/add",query:{id:t.petitionId}})},async getSignOpdataFn(){const t=this,i=await Object(s["Ab"])({pentitionId:t.petitionId});i.success&&(t.signOpdata=i.data)},async confirmRead_interface(){const t=this;await Object(s["s"])({recordType:204,petitionId:t.petitionId,id:t.petitionRecordId})},getGeolocationFn(){const t=this;dd.getGeolocation({targetAccuracy:200,coordinate:1,withReGeocode:!0,useCache:!1}).then(async i=>{t.latitude=i.latitude,t.longitude=i.longitude,t.address=i.address}).catch(t=>{})},async GC(){const t=this;let i="",e="";1==t.nums&&(i=await Object(s["A"])({dingId:d["a"].dingId}),e=i.data),2!=t.nums&&3!=t.nums||(i=await Object(s["fc"])({dingId:d["a"].dingId}),e=i.data),e&&dd.authConfig({ticket:e.jsticket,jsApiList:["locateOnMap","searchOnMap","getGeolocation","startGeolocation"]}).then(async t=>{}).catch(async i=>{t.nums+=1,t.GC()}),dd.getAuthCode().then(async i=>{let e={code:i.code,corpid:d["a"].corpId,dingId:d["a"].dingId};const n=await Object(s["B"])(e);if(n.success){const i=n.data;localStorage.setItem("rbacToken",i.rbacToken),localStorage.setItem("userInfo",JSON.stringify(i)),t.$store.commit("setToken",i.rbacToken)}})}}},l=o,p=(e("2534"),e("2877")),r=Object(p["a"])(l,n,a,!1,null,"5a61963d",null);i["default"]=r.exports},"97ca":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ1QTQ5OUNDOEQ4NjExRTlCRTg3RjgxRUQxMzc4MzBCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ1QTQ5OUNEOEQ4NjExRTlCRTg3RjgxRUQxMzc4MzBCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDVBNDk5Q0E4RDg2MTFFOUJFODdGODFFRDEzNzgzMEIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDVBNDk5Q0I4RDg2MTFFOUJFODdGODFFRDEzNzgzMEIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7TTWA3AAAAsklEQVR42uyYTQqAIBCFS9p1Ao8UXaFdXctdV6gb9XOB1pMLhRDEtL8J3oMHgyB8OOg8zIko4yyRMRcAr6pwF+pm+xRo6MvHTrDSno0rji1W2tJYcQSUnhq3GIAABCAAAcgQ0A5+irCrmL3egCECg/8teQMGpxbnMYCd9voi3KTdnkrURmNCi+nMieCZASAAAQhAAP4XcDnUK0dAGzC8gz9FxY2AKQEjnMHwRw3Aj7ULMACfUjCVFfuBjQAAAABJRU5ErkJggg=="},af72:function(t,i,e){},ea7e:function(t,i,e){"use strict";e("f5d4")},f5d4:function(t,i,e){},fd6c:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM3NkYwRURDOEQ4NjExRTk4MjA5QTRDMEY4MTNDRkIzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjM3NkYwRUREOEQ4NjExRTk4MjA5QTRDMEY4MTNDRkIzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Mzc2RjBFREE4RDg2MTFFOTgyMDlBNEMwRjgxM0NGQjMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Mzc2RjBFREI4RDg2MTFFOTgyMDlBNEMwRjgxM0NGQjMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4lh3SgAAAB70lEQVR42uyYu0oDQRSGE00s1cJYW1pYei8ELxEUQTRGixQWgoXgA0RFEO+9NhZWanpBBLUxioh4Sbw8ghBcoxE0waDoP3gWDsFdhezOLmEHPjI7M5CPM7Nnz667O/TqsnMrsvC/x0ECKGBMa5HHIrlJMMeuV0EpWLJDBKeY3Cd4of4imLBacBrMUj8LQqAVJGlsPleSb7EXVIMSk+QCIEz9DAiCHbruAPuggiSL1Cirgo1gG/gkRfKdbhC1xZikj6KcAivqFq9JknsAp6AcHIBaNhcH7exMhvkZrJEgJ9JJG/CDIyZZz9b0gDLqJ7igW5LcHRBPhi4QJZk90ASWwQKtF1EclZUHFdq6Wzb2RpK7oIVkPUyuE1zISDMKHf6bX+bSoJduBlUuRevPZORBhc7btca8SGfrdBZFeya5cxmJ+pHk4jpyEdDHxmbUbTVb8D9yW6A/Zzwro5pJklxMY95LcgEryi3D5YwUfCK5K52yTsgNWFGwmiZnhGCG5C415otJLmhVyR/9Qy6Sj5xRgqZEzkxBIbcJBq1+q0vzZya1SrABhozKXflUMyLf1YEGqunEb5XRj6V8BJvBcSG/uDuCjqAj6Ag6goUk+GEDly89wUMbyJ3oCQ67fr40WRHJezCi9QXCwxb57XgGvwUYADmDa9XGPYHLAAAAAElFTkSuQmCC"}}]);