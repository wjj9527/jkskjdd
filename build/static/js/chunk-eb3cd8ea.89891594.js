(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eb3cd8ea","chunk-083acd57","chunk-25d7235c","chunk-34b6f381","chunk-8a4f25f4","chunk-7dc9a0f0","chunk-23c58fcc","chunk-41279b9c","chunk-69ce9ff9"],{"0fb2":function(e,t,a){},"124c":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"eventHand"},[e._m(0),t("div",{staticClass:"eh_line"},[t("p",[t("span",[e._v(e._s(e.missionDetail.missionRemark))])])])]),t("div",{staticClass:"eventHand"},[e._m(1),t("div",{staticClass:"eh_line"},[t("p",{staticClass:"inline"},[t("span",{class:"rect "+["green","yellow","red"][e.missionDetail.missionSuperviseLevel]}),t("span",[e._v(e._s(e.missionDetail.missionSuperviseLevelStr))])])])]),t("div",{staticClass:"eventHand"},[e._m(2),t("div",{staticClass:"eh_line"},[t("p",[e._v(e._s(e.missionDetail.missionTimeLimitDescriptionRow1))]),t("p",[e._v(e._s(e.missionDetail.missionTimeLimitDescriptionRow2))])])])])},s=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"header_icon"},[t("span",[e._v("任务明细")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"header_icon"},[t("span",[e._v("督办等级")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"header_icon"},[t("span",[e._v("时间限定")])])}],i={props:["missionDetail"],data(){return{}},created(){},methods:{}},c=i,r=(a("ab80"),a("2877")),l=Object(r["a"])(c,n,s,!1,null,"38b1c238",null);t["default"]=l.exports},"15fc":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"event_warp"},[t("div",{staticClass:"tabClass"},[t("Nav",{attrs:{tabs:e.tabs,tabIndex:e.tabIndex},on:{changeIndex:e.changeIndex}})],1),t("div",[1==e.tabIndex?t("QuestionInventory",{attrs:{detailData:e.detailData,emergencyDetail:e.emergencyDetail,missionDetail:e.missionDetail,eventHandleList:e.eventHandleList}}):e._e(),2==e.tabIndex?t("TaskInventory",{attrs:{missionDetail:e.missionDetail}}):e._e(),3==e.tabIndex?t("DutyInventory",{attrs:{dutyDetail:e.dutyDetail}}):e._e(),4==e.tabIndex?t("BaHandle",{attrs:{missionDetail:e.missionDetail}}):e._e(),5==e.tabIndex?t("DbFeedback",{attrs:{missionDetail:e.eventProgressList}}):e._e(),6==e.tabIndex?t("HandlePs",{attrs:{baseInstructionVOList:e.baseInstructionVOList}}):e._e()],1),t("div",{staticClass:"btn"},[2==e.missionDetail.monitorPermission||3==e.missionDetail.monitorPermission?t("span",{on:{click:function(t){return e.feedback(2)}}},[e._v(" 提交反馈 ")]):e._e(),2==e.missionDetail.monitorPermission?t("span",{on:{click:function(t){return e.handFn("103")}}},[e._v(" 办结申请 ")]):e._e(),4==e.missionDetail.monitorPermission?t("span",{on:{click:function(t){return e.feedback(1)}}},[e._v(" 新增批示 ")]):e._e(),5==e.missionDetail.monitorPermission?t("span",{on:{click:function(t){return e.handFn("105")}}},[e._v(" 同意 ")]):e._e(),5==e.missionDetail.monitorPermission?t("span",{on:{click:function(t){return e.feedback(3)}}},[e._v(" 驳回 ")]):e._e(),t("span",{on:{click:function(t){return e.review()}}},[e._v(" 申请化解销号 ")])]),t("Dialog",{attrs:{show:e.show,type:e.dialogType},on:{onDialog:e.onDialog}})],1)},s=[],i=a("8a39"),c=a("e2f8"),r=a("124c"),l=a("88de"),o=a("f984"),d=a("4d95"),u=a("26a3"),v=a("6b7b"),_=a("c198"),f={components:{Nav:i["default"],QuestionInventory:c["default"],TaskInventory:r["default"],DutyInventory:l["default"],BaHandle:o["default"],DbFeedback:d["default"],HandlePs:u["default"],Dialog:v["default"]},data(){return{dialogType:2,tabIndex:1,tabs:[{name:"事件信息"},{name:"任务清单"},{name:"责任清单"},{name:"包案处置"},{name:"督办反馈"},{name:"领导批示"}],type:1,query:{},emergencyId:"",dutyDetail:{},baseInstructionVOList:[],show:!1,detailData:{},emergencyDetail:{},missionDetail:{},eventHandleList:[],eventProgressList:[]}},async created(){const e=this;window.scrollTo(0,0),e.query=e.$route.query,e.getDetail()},methods:{async onDialog(e){const t=this;if(1==e.show)return t.show=!1,!1;let a;a=1==t.dialogType?await Object(_["b"])("socialGovernance/missionProcessInstructions/saveOrUpInstructions",{monitorId:t.query.monitorId,instructionsContent:e.data.dealContent,fileList:e.data.fileIdList},"post"):await Object(_["t"])({id:t.query.monitorId,dealContent:e.data.dealContent,stateCode:2==t.dialogType?"102":"104"}),a.success&&(t.show=!1,t.getDetail(),dd.toast({icon:"success",text:"操作成功"}))},async handFn(e){const t=this;dd.confirm({title:"温馨提示",message:"确定提交？",buttonLabels:["取消","确定"]}).then(async a=>{if(1==a.buttonIndex){const a=await Object(_["t"])({id:t.query.monitorId,dealContent:"",stateCode:e});a.success&&(dd.toast({icon:"success",text:"操作成功"}),t.getDetail())}})},review(){dd.confirm({title:"申请化解销号",message:"提交办结审核后，将无法提交反馈。请确认已在反馈中上传销号单照片，否则会被退回。",buttonLabels:["取消","确定"]}).then(async e=>{if(1==e.buttonIndex){const e=await Object(_["t"])({id:this.query.monitorId});e.success&&(dd.toast({icon:"success",text:"操作成功"}),that.getDetail())}})},feedback(e){this.show=!0,this.dialogType=e},async getDetail(){const e=this;let t={id:e.query.id};const a=await Object(_["b"])("emergency/securityEvent/getEventDetail",t,"get");a.success&&(e.detailData=a.data.eventInfo||{},e.emergencyDetail=a.data.emergencyDetail||{},e.missionDetail=a.data.eventAssignInfo||{},e.dutyDetail=a.data.eventAssignInfo||{},e.baseInstructionVOList=a.data.leaderCommentList||[],this.eventProgressList=a.data.eventProgressList)},changeIndex(e){const t=this;t.tabIndex=e,window.scrollTo(0,0)},alert(e){dd.alert({message:e,title:"提示",button:"收到"}).then(e=>{}).catch(e=>{})}}},m=f,b=(a("71e6"),a("2877")),h=Object(b["a"])(m,n,s,!1,null,"c56fc74c",null);t["default"]=h.exports},"23d4":function(e,t,a){},"26a3":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("div",[e.baseInstructionVOList?t("div",{staticClass:"eventHand"},e._l(e.baseInstructionVOList,(function(a,n){return t("div",{key:n,staticClass:"eh_line"},[t("p",{staticClass:"eh_line_p"},[t("span",[e._v(e._s(a.createTime))]),t("span",[e._v(" "+e._s(a.createUserName)+" ")])]),t("p",[e._v(e._s(a.handlingDescription))]),a.attachFileIdList&&a.attachFileIdList.length?t("div",{staticClass:"eh_line_div"},e._l(a.fileList,(function(a,n){return a?t("img",{key:n,attrs:{src:e.baseUrl+"/emergency/sysFile/download/?fileId="+a+"&rbacToken="+e.rbacToken_,alt:""},on:{click:function(t){return e.preview(a,n)}}}):e._e()})),0):e._e()])})),0):e._e()])},s=[],i=(a("14d9"),{props:["baseInstructionVOList"],data(){return{baseUrl:Object({NODE_ENV:"production",VUE_APP_ENV:"production",BASE_URL:""}).baseUrl,rbacToken_:localStorage.getItem("rbacToken")||""}},created(){},methods:{preview(e,t){const a=this;let n=this.baseInstructionVOList[t].fileList;if(e.fileType.indexOf("image")>=0){let t=[];n.map((e,n)=>{t.push(a.baseUrl+"rbac/file/downloadRb/"+e.fileId+"?rbacToken="+a.rbacToken_)}),dd.previewImage({current:a.baseUrl+"rbac/file/downloadRb/"+e.fileId+"?rbacToken="+a.rbacToken_,urls:t}).then(e=>{}).catch(e=>{})}}}}),c=i,r=(a("4635"),a("2877")),l=Object(r["a"])(c,n,s,!1,null,"fad14ada",null);t["default"]=l.exports},"2e22":function(e,t,a){},3904:function(e,t,a){"use strict";a("5a21")},"3b0e":function(e,t,a){},4094:function(e,t,a){"use strict";a("0fb2")},4635:function(e,t,a){"use strict";a("6128")},"4d95":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"eventHand"},[e._m(0),e._l(e.missionDetail,(function(a,n){return t("div",{key:n,staticClass:"eh_line"},[t("p",{staticClass:"eh_line_p"},[t("span",[e._v(e._s(a.createTime))]),t("span",[e._v(" "+e._s(a.createUserDepartmentName)+" ")])]),t("p",[e._v(e._s(a.description))]),a.fileList&&a.fileList.length?t("div",{staticClass:"eh_line_div"},e._l(a.fileList,(function(a,n){return t("img",{key:n,attrs:{src:e.baseUrl+"rbac/file/downloadRb/"+a.fileId+"?rbacToken="+e.rbacToken_,alt:""},on:{click:function(t){return e.preview(a,n)}}})})),0):e._e()])}))],2)])},s=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"header_icon"},[t("span",[e._v("反馈记录")])])}],i=(a("14d9"),{props:["missionDetail"],data(){return{rbacToken_:localStorage.getItem("rbacToken")||""}},created(){},methods:{preview(e,t){const a=this,n=this.baseInstructionVOList[t].fileList;if(e.fileType.indexOf("image")>=0){const t=[];n.map((e,n)=>{t.push(a.baseUrl+"rbac/file/downloadRb/"+e.fileId+"?rbacToken="+a.rbacToken_)}),dd.previewImage({current:a.baseUrl+"rbac/file/downloadRb/"+e.fileId+"?rbacToken="+a.rbacToken_,urls:t}).then().catch()}}}}),c=i,r=(a("c8b6"),a("5a68"),a("2877")),l=Object(r["a"])(c,n,s,!1,null,"4b6e8b0a",null);t["default"]=l.exports},"5a21":function(e,t,a){},"5a68":function(e,t,a){"use strict";a("a7d4")},6128:function(e,t,a){},"6b5b":function(e,t,a){},"6b7b":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("div",[t("van-overlay",{attrs:{show:e.show}},[t("div",{staticClass:"wrapper"},[t("div",{staticClass:"block",style:{height:1!=e.type?"45%":"70%"}},[t("div",{staticClass:"header"},[t("span",[e._v(e._s(e.title||"标题"))]),t("span",{on:{click:function(t){return e.onClick(1)}}},[e._v("x")])]),t("div",{staticClass:"main"},[t("div",{staticClass:"content"},[t("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:e.dealContent,expression:"dealContent",modifiers:{trim:!0}}],staticStyle:{width:"100%",background:"#fafafa"},attrs:{type:"text",placeholder:"在此输入内容",rows:"5"},domProps:{value:e.dealContent},on:{input:function(t){t.target.composing||(e.dealContent=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),1==e.type?t("div",{staticClass:"VPM_upload"},[t("div",{on:{click:function(t){return e.uploadFn()}}},[t("span",[e._v("+")])]),t("input",{staticStyle:{display:"none"},attrs:{multiple:"",type:"file",name:"",id:"aa"},on:{change:e.fileChange}}),e._l(e.fileIdList,(function(a,n){return t("img",{key:n,attrs:{src:e.baseUrl+"rbac/file/downloadRb/"+a.fileId+"?rbacToken="+e.rbacToken,alt:""}})}))],2):e._e()]),t("div",{staticClass:"footer"},[t("span",{on:{click:function(t){return e.onClick(1)}}},[e._v("取消")]),t("span",{on:{click:function(t){return e.onClick(2)}}},[e._v("确认")])])])])])],1)},s=[],i=(a("14d9"),a("c198")),c={props:["show","title","type"],data(){return{dealContent:"",baseUrl:Object({NODE_ENV:"production",VUE_APP_ENV:"production",BASE_URL:""}).baseUrl,rbacToken:localStorage.getItem("rbacToken")||"",fileIdList:[]}},mounted(){},created(){},methods:{uploadFn(){document.getElementById("aa").click()},async fileChange(e){let t=new FormData;const a=[...e.target.files];if(this.fileIdList.length+a.length>5)return dd.alert({message:"最多只能上传9张",title:"提示",button:"收到"}),!1;if(a&&a.length){dd.showLoading({text:"文件上传中.."}),a.forEach(e=>{t.append("file",e)}),t.append("rbacToken",localStorage.getItem("rbacToken"));const e=await Object(i["gc"])(t);dd.hideLoading({}),e.success&&e.data&&e.data.length&&e.data.forEach((e,t)=>{var n={};n.fileType=a[t].type,n.fileName=a[t].name,n.fileId=e,this.fileIdList.push(n)})}},previewFn(e,t,a){let n=this.baseUrl+"rbac/file/downloadRb/"+e+"?rbacToken="+this.rbacToken,s=[];2==a?t.map((e,t)=>{s.push(this.baseUrl+"rbac/file/downloadRb/"+e+"?rbacToken="+this.rbacToken)}):t.map((e,t)=>{s.push(this.baseUrl+"rbac/file/downloadRb/"+e.fileId+"?rbacToken="+this.rbacToken)}),this.previewImageFn(n,s)},onClick(e){this.$emit("onDialog",{show:e,data:{dealContent:this.dealContent,fileIdList:this.fileIdList}})}},watch:{show(e,t){this.dealContent="",this.fileIdList=[]}}},r=c,l=(a("4094"),a("2877")),o=Object(l["a"])(r,n,s,!1,null,"7a7593cf",null);t["default"]=o.exports},"71e6":function(e,t,a){"use strict";a("b5fd")},"88de":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"eventHand"},[e._m(0),t("div",{staticClass:"eh_line"},[t("p",[e._v(e._s(e.dutyDetail.hostUserDepartment.departmentName)+"-"+e._s(e.dutyDetail.hostUserDepartment.userName))])])]),t("div",{staticClass:"eventHand"},[e._m(1),t("div",{staticClass:"eh_line"},e._l(e.dutyDetail.mateUserDepartmentList,(function(a,n){return t("p",{key:n},[e._v(" "+e._s(a.departmentName)+" - "+e._s(a.userName)+" ")])})),0)]),t("div",{staticClass:"eventHand"},[e._m(2),t("div",{staticClass:"eh_line"},e._l(e.dutyDetail.responsibleUserDepartmentNameList,(function(a,n){return t("p",{key:n},[e._v(" "+e._s(a)+" ")])})),0)])])},s=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"header_icon"},[t("span",[e._v("牵头单位")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"header_icon"},[t("span",[e._v("协同单位")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"header_icon"},[t("span",[e._v("责任单位")])])}],i={props:["dutyDetail"],data(){return{}},created(){},methods:{}},c=i,r=(a("c8dd"),a("2877")),l=Object(r["a"])(c,n,s,!1,null,"d49b5a80",null);t["default"]=l.exports},"8a39":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tab_warp"},e._l(e.tabs,(function(a,n){return t("span",{directives:[{name:"show",rawName:"v-show",value:!a.hide,expression:"!v.hide"}],key:n,class:e.index===n+1?"active":"",style:{width:e.tabs.length>3?"27%":"33%"},on:{click:function(t){return e.checkTab(n)}}},[e._v(" "+e._s(a.name)+" ")])})),0)},s=[],i={props:["tabs","tabIndex"],data(){return{index:this.tabIndex}},mounted(){},created(){},methods:{checkTab(e){this.index!==e+1&&(this.index=e+1,this.$emit("changeIndex",this.index))}}},c=i,r=(a("ccf2"),a("2877")),l=Object(r["a"])(c,n,s,!1,null,"0cdfb4c9",null);t["default"]=l.exports},a119:function(e,t,a){},a7d4:function(e,t,a){},ab80:function(e,t,a){"use strict";a("6b5b")},b5fd:function(e,t,a){},c8b6:function(e,t,a){"use strict";a("23d4")},c8dd:function(e,t,a){"use strict";a("2e22")},ccf2:function(e,t,a){"use strict";a("3b0e")},dada:function(e,t,a){},e2f8:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"detailMsg"},[e._m(0),t("ul",{staticClass:"ul"},[e._l(e.eventInfoList,(function(a,n){return t("li",{key:n,staticClass:"li"},[t("span",[e._v(e._s(a.name))]),t("div",[e._v(" "+e._s(e.detailData[a.value])+" ")])])})),t("li",[t("span",[e._v("上报附件")]),e.detailData.attachFileIdList.length?t("div",{staticClass:"li_fileList"},e._l(e.detailData.attachFileIdList,(function(a){return t("img",{attrs:{src:e.baseUrl+"/emergency/sysFile/download/?fileId="+a+"&rbacToken="+e.rbacToken_,alt:""},on:{click:function(t){return e.preview(a,e.detailData.fileList)}}})})),0):e._e()])],2)]),e.emergencyDetail.eventProcess?t("div",{staticClass:"eventHand"},[e._m(1),e._l(e.emergencyDetail.eventProcess,(function(a,n){return t("div",{key:n,staticClass:"eh_line"},[t("p",{staticClass:"eh_line_p"},[t("span",[e._v(e._s(a.dealTime))]),t("span",[e._v(" "+e._s(a.dealDepartment?a.dealDepartment+"-":"")+e._s(a.dealPeople)+" ")])]),t("p",[e._v(e._s(a.dealDetail))])])}))],2):e._e(),e.emergencyDetail.processName?t("div",{staticClass:"eventHand"},[e._m(2),t("div",{staticClass:"eh_line eh_line_1"},[t("span",[e._v("预案名称")]),t("div",[e._v(e._s(e.emergencyDetail.processName))])]),e.emergencyDetail.planProcess?t("div",{staticClass:"eh_line eh_line_1"},[t("span",[e._v("预案流程")]),t("div",e._l(e.emergencyDetail.planProcess,(function(a,n){return t("p",{key:n},[t("span",[e._v(e._s(a.name))]),t("span",[e._v(e._s(a.createTime))])])})),0)]):e._e()]):e._e()])},s=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"header_icon"},[t("span",[e._v("事件信息")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"header_icon"},[t("span",[e._v("事件处置进程")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"header_icon"},[t("span",[e._v("预案流程")])])}],i=(a("14d9"),{props:["detailData","emergencyDetail","missionDetail","eventHandleList"],data(){return{baseUrl:"//192.168.1.234:9101",rbacToken_:localStorage.getItem("rbacToken"),eventInfoList:[{name:"事件名称",value:"eventTitle"},{name:"事发时间",value:"eventTime"},{name:"事件类别",value:"eventTypeStr"},{name:"事件等级",value:"eventLevelStr"},{name:"现实行为",value:"eventBehaviorStr"},{name:"所属镇街",value:"roadName"},{name:"事发地点",value:"eventPlace"},{name:"参与人数",value:"involvedPersonCount"},{name:"事件描述",value:"eventContent"},{name:"事件来源",value:"eventSourceStr"}]}},created(){const e=this;e.rbacToken_=e.$store.getters.rbacToken||localStorage.getItem("rbacToken")},methods:{preview(e,t){const a=this;if(e.fileType.indexOf("image")>=0){let n=[];t.map((e,t)=>{n.push(a.baseUrl+"rbac/file/downloadRb/"+e.fileId+"?rbacToken="+a.rbacToken_)}),dd.previewImage({current:a.baseUrl+"rbac/file/downloadRb/"+e.fileId+"?rbacToken="+a.rbacToken_,urls:n}).then(e=>{}).catch(e=>{})}}}}),c=i,r=(a("fa52"),a("2877")),l=Object(r["a"])(c,n,s,!1,null,"4b1ea7be",null);t["default"]=l.exports},f984:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"eventHand"},[e._m(0),t("div",{staticClass:"eh_line"},[t("p",[e._v(e._s(e.missionDetail.isImportantEventDescription))])])]),t("div",{staticClass:"eventHand"},[e._m(1),t("div",{staticClass:"eh_line"},e._l(e.missionDetail.caseLeaderNameList,(function(a){return t("p",[e._v(e._s(a))])})),0)])])},s=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"header_icon"},[t("span",[e._v("包案类型")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"header_icon"},[t("span",[e._v("包案领导")])])}],i={props:["missionDetail"],data(){return{radio:1}},created(){},methods:{radioChange(){}}},c=i,r=(a("ff7b"),a("3904"),a("2877")),l=Object(r["a"])(c,n,s,!1,null,"6f3bbd27",null);t["default"]=l.exports},fa52:function(e,t,a){"use strict";a("dada")},ff7b:function(e,t,a){"use strict";a("a119")}}]);