(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f76de0a0"],{"9b8a":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"event_warp"},[t("div",{staticClass:"tab"},[t("Nav",{attrs:{tabs:e.tabs,tabIndex:e.tabIndex},on:{changeIndex:e.changeIndex}})],1),t("div",{staticClass:"topHolder"}),t("div",{staticClass:"subTab"}),t("div",{directives:[{name:"show",rawName:"v-show",value:1===e.tabIndex,expression:"tabIndex === 1"}],staticClass:"detailMsg"},[t("ul",{staticClass:"ul"},[e.checkRight("handleManagement:eventName","eventManagement:eventName","distributionManagement:eventName")?t("li",{staticClass:"li"},[t("span",[e._v("事件名称")]),t("div",[e._v(e._s(e.detail.title))])]):e._e(),e.checkRight("handleManagement:location","eventManagement:location","distributionManagement:location")?t("li",[t("span",[e._v("事发地址")]),t("div",[e._v(e._s(e.detail.incidentAddress))])]):e._e(),e.checkRight("handleManagement:eventDescription","eventManagement:eventDescription","distributionManagement:eventDescription")?t("li",[t("span",[e._v("事件描述")]),t("div",[e._v(e._s(e.detail.incidentContent))])]):e._e(),e.checkRight("handleManagement:eventCategory","eventManagement:eventCategory","distributionManagement:eventCategory")?t("li",[t("span",[e._v("事件类别")]),t("div",[e._v(" "+e._s(e.detail.eventName&&e.detail.eventName.length&&e.detail.eventName.join())+" ")])]):e._e(),e.checkRight("handleManagement:eventSource","eventManagement:eventSource","distributionManagement:eventSource")?t("li",[t("span",[e._v("事件来源")]),t("div",[e._v("涉稳事件录入")])]):e._e(),e.checkRight("handleManagement:area","eventManagement:area","distributionManagement:area")?t("li",[t("span",[e._v("所属区域")]),t("div",[e._v("瓯海区")])]):e._e(),e.checkRight("handleManagement:affiliatedStreet","eventManagement:affiliatedStreet","distributionManagement:affiliatedStreet")?t("li",[t("span",[e._v("所属街道")]),t("div",[e._v(e._s(e.detail.roadName))])]):e._e(),t("li",[t("span",[e._v("事发时间")]),t("div",[e._v(e._s(e.detail.incidentTime))])]),t("li",[t("span",[e._v("截止时间")]),t("div",[e._v(" "+e._s(e.detail.cutOffTime?e.detail.cutOffTime.split(" ")[0]:"")+" ")])]),t("li",[t("span",[e._v("最新处置时间")]),t("div",[e._v(e._s(e.detail.updateTime))])])])]),2===e.tabIndex?t("div",{staticClass:"schedule"},[t("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.loadMore,expression:"loadMore"}],staticClass:"list",attrs:{"infinite-scroll-disabled":e.loading&&2===e.tabIndex,"infinite-scroll-distance":"10"}},e._l(e.handleList,(function(i,n){return t("li",{key:n},[t("div",[t("div",{staticClass:"title"},[e._v(e._s(n+1))]),t("i",[e._v(e._s(i.createTime))])]),t("div",[t("span",[e._v("处理阶段")]),t("div",[e._v(e._s(i.step))])]),t("div",[t("span",[e._v("创建人")]),t("div",[e._v(e._s(i.userName))])]),t("div",[t("span",[e._v("签收时间")]),t("div",[e._v(e._s(i.signTime))])])])})),0)]):e._e(),3===e.tabIndex?t("div",{staticClass:"accessory"},[t("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.loadMore,expression:"loadMore"}],staticClass:"list",attrs:{"infinite-scroll-disabled":e.loading&&3===e.tabIndex,"infinite-scroll-distance":"10"}},e._l(e.fileList,(function(i,n){return t("li",{key:n},[t("div",[t("div",{staticClass:"title"},[e._v(e._s(n+1))]),t("i",[e._v(e._s(i.createTime))])]),t("div",[t("span",[e._v("附件信息")]),t("div",[t("p",{on:{click:function(t){return e.preview(i)}}},[e._v(e._s(i.fileName))])])]),t("div",[t("span",[e._v("上传人")]),t("div",[e._v(e._s(i.createUserName))])])])})),0)]):e._e(),4===e.tabIndex?t("div",{staticClass:"disposition"},[t("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.loadMore,expression:"loadMore"}],staticClass:"list",attrs:{"infinite-scroll-disabled":e.loading&&4===e.tabIndex,"infinite-scroll-distance":"10"}},e._l(e.supplementHandleList,(function(i,n){return t("li",{key:n},[t("div",[t("div",{staticClass:"title"},[e._v(e._s(n+1))]),t("i",[e._v(e._s(i.createTime))])]),t("div",[t("span",[e._v("处置情况")]),t("div",[e._v(e._s(i.remark))])]),t("div",[t("span",[e._v("上传人")]),t("div",[e._v(e._s(i.userName))])])])})),0)]):e._e(),5===e.tabIndex?t("div",{staticClass:"instructions"},[t("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.loadMore,expression:"loadMore"}],staticClass:"list",attrs:{"infinite-scroll-disabled":e.loading&&5===e.tabIndex,"infinite-scroll-distance":"10"}},e._l(e.leaderHandleList,(function(i,n){return t("li",{key:n},[t("div",[t("div",{staticClass:"title"},[e._v(e._s(n+1))]),t("i",[e._v(e._s(i.createTime))])]),t("div",[t("span",[e._v("领导批示")]),t("div",[e._v(e._s(i.remark||"无"))])]),t("div",[t("span",[e._v("姓名")]),t("div",[e._v(e._s(i.optUserName))])])])})),0)]):e._e(),t("div",{directives:[{name:"show",rawName:"v-show",value:e.showImg,expression:"showImg"}],staticClass:"preview",on:{click:function(t){e.showImg=!1}}},[t("img",{attrs:{src:e.previewUrl,alt:""}})]),t("div",{staticClass:"endHolder"}),7==e.type?t("div",{staticClass:"btn"},[e.checkRight("handleManagement:disposalSituation")?t("span",{on:{click:function(t){return e.handClick(1)}}},[e._v("处置情况")]):e._e(),e.checkRight("handleManagement:applyForKnot")?t("span",{on:{click:function(t){return e.handClick(2)}}},[e._v("申请办结")]):e._e()]):e._e(),8==e.type?t("div",{staticClass:"btn assist"},[e.checkRight("handleManagement:disposalSituation")?t("span",{on:{click:function(t){return e.handClick(1)}}},[e._v("处置情况")]):e._e()]):e._e(),9==e.type?t("div",{staticClass:"btn"},[e.checkRight("eventManagement:edit")?t("span",{on:{click:function(t){return e.handClick(3)}}},[e._v("编辑")]):e._e(),e.checkRight("eventManagement:withdraw")?t("span",{on:{click:function(t){return e.handClick(4)}}},[e._v("撤回")]):e._e(),e.checkRight("eventManagement:edit")?t("span",{on:{click:function(t){return e.handClick(8)}}},[e._v("新增处置")]):e._e(),e.checkRight("eventManagement:supplementaryExplanation")?t("span",{on:{click:function(t){return e.handClick(1)}}},[e._v("处置情况")]):e._e()]):e._e(),10==e.type?t("div",{staticClass:"btn"},[e.checkRight("eventManagement:edit")?t("span",{on:{click:function(t){return e.handClick(3)}}},[e._v("编辑")]):e._e(),e.checkRight("eventManagement:repliedWithdraw")?t("span",{on:{click:function(t){return e.handClick(5)}}},[e._v("退回")]):e._e(),e.checkRight("eventManagement:supplementaryExplanation")?t("span",{on:{click:function(t){return e.handClick(1)}}},[e._v("处置情况")]):e._e(),e.checkRight("eventManagement:repliedSetUp")?t("span",{on:{click:function(t){return e.handClick(9)}}},[e._v("办结")]):e._e()]):e._e(),12==e.type?t("div",{staticClass:"btn"},[e.checkRight("distributionManagement:assign")?t("span",{on:{click:function(t){return e.handClick(6)}}},[e._v("指派")]):e._e(),e.checkRight("distributionManagement:edit")?t("span",{on:{click:function(t){return e.handClick(3)}}},[e._v("编辑")]):e._e(),e.checkRight("distributionManagement:delete")?t("span",{on:{click:function(t){return e.handClick(7)}}},[e._v("删除")]):e._e()]):e._e()])},a=[],s=(i("14d9"),i("9fdc")),c=i("c198"),d={name:"detail",components:{Nav:s["a"]},data(){return{showImg:!1,previewUrl:"",baseUrl:Object({NODE_ENV:"production",VUE_APP_ENV:"production",BASE_URL:""}).baseUrl,loading:!1,noMore:[!1,!1,!1,!1,!1,!1],tabs:[],tabIndex:1,type:this.$route.query.type,id:this.$route.query.id,supplementHandleList:[],detail:{},right:"",handleList:[],fileList:[],leaderHandleList:[],signData:{}}},async created(){const e=this;dd.enablePullToRefresh().then(t=>{e.getDetail(),e.getMore(),e.getHandleRole()}).catch(e=>{dd.stopPullDownRefresh()}),this.getDetail(),this.getMore(),this.getHandleRole()},methods:{preview(e){e.fileType.indexOf("image")>=0?(this.showImg=!0,this.previewUrl=`${this.baseUrl}rbac/file/downloadRb/${e.fileId}?rbacToken=${localStorage.getItem("rbacToken")}`):dd.biz.util.openLink({url:`${this.baseUrl}rbac/file/downloadRb/${e.fileId}?rbacToken=${localStorage.getItem("rbacToken")}`,onSuccess:function(e){},onFail:function(e){}})},async getHandleRole(){if("7"===this.type||"8"===this.type||"10"===this.type){const e=await Object(c["db"])({eventId:this.id,isSign:0,eventType:1});if(e.success)if(e.data.length>0&&20!=e.data[0].operationType){if(this.signData=e.data[0],0==this.signData.isSign){const e=await Object(c["Vb"])({id:this.signData.id});e.success}}else this.signData={isSign:1}}},async getDetail(){const e=await Object(c["bb"])(this.$route.query);if(e.success){this.detail=e.data.sourceData;const t=[...e.data.barRight||[],...e.data.bottomRight||[],...e.data.filedRight||[]];if(t.length&&t.forEach(e=>{this.right+=e.name}),7==this.type||8==this.type||11==this.type)return void(this.tabs=[{name:"详细信息"},{name:"事件进度",hide:!this.checkRight("handleManagement:processing")},{name:"附件信息",hide:!this.checkRight("handleManagement:extInfo")},{name:"处置情况",hide:!this.checkRight("handleManagement:resultInfo")},{name:"领导批示",hide:!this.checkRight("handleManagement:leadershipInstructions")}]);if(9==this.type||10==this.type)return void(this.tabs=[{name:"详细信息"},{name:"事件进度",hide:!this.checkRight("eventManagement:processing")},{name:"附件信息",hide:!this.checkRight("eventManagement:extInfo")},{name:"处置情况",hide:!this.checkRight("eventManagement:resultInfo")},{name:"领导批示",hide:!this.checkRight("eventManagement:leadershipInstructions")}]);this.tabs=[{name:"详细信息"},{name:"事件进度",hide:!this.checkRight("distributionManagement:processing")},{name:"附件信息",hide:!this.checkRight("distributionManagement:extInfo")},{name:"处置情况",hide:1},{name:"领导批示",hide:!this.checkRight("distributionManagement:leadershipInstructions")}]}},async getMore(){const e={eventId:this.id},[t,i,n,a]=await Promise.all([Object(c["cb"])(e),Object(c["ac"])(e),Object(c["fb"])({eventId:this.id,operationType:21}),Object(c["Cb"])({eventType:-1,orderType:1,eventId:this.id})]);if(t.success){this.fileList=i.data,this.leaderHandleList=n.data,this.supplementHandleList=a.data;const e=t.data;this.handleList=[],e.length&&e.forEach(e=>{var t="";switch(e.editDepartment&&(t+=e.editDepartment),t+=e.userName,e.operationType){case 0:e.step=t+"将事件转入协同处置系统";break;case 1:e.step=t+"将事件批转给"+e.department;break;case 2:e.step=t+"将"+e.department+"加入协办";break;case 3:e.step=t+"将事件指派给"+e.department;break;case 4:e.step=e.editDepartment+"添加补充说明";break;case 5:e.step=t+"办结了该事件";break;case 6:e.step=t+"上报该事件到协同处置系统";break;case 7:e.step=t+"上报区级";break;case 8:e.step=t+"申请办结";break;case 9:e.step=t+"将事件撤回";break;case 10:e.step=t+"将事件退回给"+e.department;break;case 22:e.step=t+"将事件抄送给"+e.department;break}this.handleList.push(e),5!=e.operationType&&e.recordList&&e.recordList.forEach(t=>{var i={};i.step=e.department+"处理人员:"+t.userName,i.createTime=e.createTime,i.userName=e.userName,i.isSign=t.isSign,i.signTime=t.signTime,this.handleList.push(i)})}),dd.stopPullDownRefresh()}},changeIndex(e){this.tabIndex!==e&&(window.scrollTo(0,0),this.tabIndex=e)},loadMore(){},handClick(e){if(1!==e&&2!==e&&9!==e)if(3!==e)if(10!==e)if(4!==e)if(5!==e)if(6!==e)if(8!==e)if(7!==e);else{const e=this;dd.device.notification.confirm({message:"是否确定删除此事件?",title:"提示",buttonLabels:["取消","确定"],onSuccess(t){1===t.buttonIndex&&dd.device.notification.showPreloader({text:"删除中..",showIcon:!0,async onSuccess(t){const i=await Object(c["v"])({id:e.id});dd.device.notification.hidePreloader({onSuccess:function(e){},onFail:function(e){}}),i.success&&dd.alert({message:i.message?i.message:"操作成功",title:"提示",button:"收到"}).then(t=>{e.$router.go(-1)}).catch(e=>{})},onFail:function(e){}})},onFail:function(e){}})}else this.$router.push(`confirm?i=${e}&id=${this.id}&handleDepartmentId=${this.detail.handleDepartmentId}&firstDepartmentId=${this.detail.firstDepartmentId}`);else this.$router.push(`confirm?i=${e}&id=${this.id}&handleDepartmentId=${this.detail.handleDepartmentId}`);else{const e={eventId:this.detail.id,operationType:10,editDepartmentId:this.detail.firstDepartmentId},t=this;dd.device.notification.prompt({message:"处理意见",title:"退回",buttonLabels:["取消","确认"],async onSuccess(i){if(!i.buttonIndex)return;e.remark=i.value;const n=await Object(c["l"])(e);n.success&&dd.alert({message:n.message?n.message:"操作成功",title:"提示",button:"收到"}).then(e=>{t.$router.go(-1)}).catch(e=>{})},onFail:function(e){}})}else{const e={eventId:this.detail.id,operationType:9,editDepartmentId:this.detail.firstDepartmentId,departmentId:this.detail.handleDepartmentId},t=this;dd.device.notification.confirm({message:"是否确定撤回此事件?",title:"提示",buttonLabels:["取消","确定"],onSuccess(i){1===i.buttonIndex&&dd.device.notification.showPreloader({text:"处理中..",showIcon:!0,async onSuccess(i){const n=await Object(c["l"])(e);dd.device.notification.hidePreloader({onSuccess:function(e){},onFail:function(e){}}),n.success&&dd.alert({message:n.message?n.message:"操作成功",title:"提示",button:"收到"}).then(e=>{t.$router.go(-1)}).catch(e=>{})},onFail:function(e){}})},onFail:function(e){}})}else{const e=this;dd.device.notification.confirm({message:"是否确定签收?",title:"提示",buttonLabels:["取消","确定"],onSuccess(t){1===t.buttonIndex&&dd.device.notification.showPreloader({text:"处理中..",showIcon:!0,async onSuccess(t){const i=await Object(c["Vb"])({id:e.signData.id});dd.device.notification.hidePreloader({onSuccess:function(e){},onFail:function(e){}}),i.success&&dd.alert({message:i.message?i.message:"操作成功",title:"提示",button:"收到"}).then(t=>{e.getDetail(),e.getMore(),e.getHandleRole()}).catch(e=>{})},onFail:function(e){}})},onFail:function(e){}})}else this.$router.push(`add?id=${this.id}&type=${this.type}`);else this.$router.push(`confirm?i=${e}&id=${this.id}&handleType=${this.detail.handleType}&handleDepartmentId=${this.detail.handleDepartmentId}`)},checkRight(e,t,i){return this.right.includes(e)||t&&this.right.includes(t)||i&&this.right.includes(i)}}},l=d,o=(i("d0aa"),i("2877")),r=Object(o["a"])(l,n,a,!1,null,"0f4491b9",null);t["default"]=r.exports},"9fdc":function(e,t,i){"use strict";var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tab_warp"},e._l(e.tabs,(function(i,n){return t("span",{directives:[{name:"show",rawName:"v-show",value:!i.hide,expression:"!v.hide"}],key:n,class:e.index===n+1?"active":"",on:{click:function(t){return e.checkTab(n)}}},[e._v(e._s(i.name))])})),0)},a=[],s={props:["tabs","tabIndex"],data(){return{index:this.tabIndex}},mounted(){},methods:{checkTab(e){this.index!==e+1&&(this.index=e+1,this.$emit("changeIndex",this.index))}}},c=s,d=(i("e9e9"),i("2877")),l=Object(d["a"])(c,n,a,!1,null,"d765f7f0",null);t["a"]=l.exports},d0aa:function(e,t,i){"use strict";i("f5d1")},e4d4:function(e,t,i){},e9e9:function(e,t,i){"use strict";i("e4d4")},f5d1:function(e,t,i){}}]);