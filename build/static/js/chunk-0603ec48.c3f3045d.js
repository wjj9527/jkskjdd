(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0603ec48"],{"04b9":function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"multiSelectOdd"},[e("van-popup",{staticStyle:{height:"50%"},attrs:{round:"",position:"bottom"},on:{closed:t.multiSelectOddReturn_},model:{value:t.multiSelect_show,callback:function(e){t.multiSelect_show=e},expression:"multiSelect_show"}},[e("div",{staticClass:"multiSelectOdd_content"},[e("div",{staticClass:"multiSelectOdd_content_div"},[e("p",{staticClass:"multiSelectOdd_content_line0"},[t._v("请选择")]),t._l(t.list,(function(a){return e("p",{key:a.name,staticClass:"multiSelectOdd_content_line",on:{click:function(e){return t.multiSelectOddReturn(a)}}},[t._v(t._s(a.name))])}))],2),e("div",{staticClass:"close"},[e("div",{staticStyle:{height:"10px",background:"#e6e6e6","margin-bottom":"15px"}}),e("div",{on:{click:t.multiSelectOddReturn_}},[t._v("取消")])])])])],1)},n=[],s={props:["multiSelectOddData","name"],data(){return{multiSelect_show:!0,list:this.multiSelectOddData,name:this.name?this.name:"选择所属街道？",multiSelectOddObj:{status:!1,id:"",name:""}}},created(){},mounted(){},methods:{multiSelectOddReturn_(){let t=this;t.$emit("multiSelectOddReturn",{status:!1})},multiSelectOddReturn(t){let e=this;e.multiSelectOddObj.name=t.name,e.multiSelectOddObj.id=t.id,e.$emit("multiSelectOddReturn",e.multiSelectOddObj)}}},o=s,r=(a("67f9"),a("2877")),l=Object(r["a"])(o,i,n,!1,null,"4493de27",null);e["a"]=l.exports},"0ea3":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"reportedAdd_warp multiSelectClass mapClass"},[e("div",{staticClass:"form",class:t.edit?"":"unclick"},[e("div",{staticClass:"item"},[e("p",{class:t.formData.title?"active":""},[t._v("事件名称")]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.formData.title,expression:"formData.title",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"在此输入事件名称"},domProps:{value:t.formData.title},on:{input:function(e){e.target.composing||t.$set(t.formData,"title",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),e("div",{staticClass:"item"},[e("p",{class:t.formData.earlyWarningLevel?"active":""},[t._v("事件等级")]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.formData.earlyWarningLevelName,expression:"formData.earlyWarningLevelName",modifiers:{trim:!0}}],attrs:{type:"text",readonly:"",placeholder:"点击选择事件等级"},domProps:{value:t.formData.earlyWarningLevelName},on:{click:t.selectWarningLevel,input:function(e){e.target.composing||t.$set(t.formData,"earlyWarningLevelName",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),e("div",{staticClass:"item"},[e("p",{class:t.formData.roadName?"active":""},[t._v("所属街道")]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.roadName,expression:"formData.roadName"}],attrs:{readonly:"",type:"text",placeholder:"点击选择所属街道"},domProps:{value:t.formData.roadName},on:{click:t.selectStreet,input:function(e){e.target.composing||t.$set(t.formData,"roadName",e.target.value)}}})])]),e("div",{staticClass:"item"},[e("p",{class:t.formData.actionName?"active":""},[t._v("现实行为")]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.actionName,expression:"formData.actionName"}],attrs:{readonly:"",type:"text",placeholder:"点击选择现实行为"},domProps:{value:t.formData.actionName},on:{click:t.selectBehave,input:function(e){e.target.composing||t.$set(t.formData,"actionName",e.target.value)}}})])]),e("div",{staticClass:"item"},[e("p",{class:t.formData.incidentTime?"active":""},[t._v("事发时间")]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.incidentTime,expression:"formData.incidentTime"}],attrs:{readonly:"",type:"text",placeholder:"事发时间"},domProps:{value:t.formData.incidentTime},on:{click:t.selectTime,input:function(e){e.target.composing||t.$set(t.formData,"incidentTime",e.target.value)}}})])]),e("div",{staticClass:"item"},[e("p",{class:t.formData.eventName&&t.formData.eventName.length?"active":""},[t._v("事件类别")]),e("div",[e("input",{attrs:{readonly:"",type:"text",placeholder:"点击选择事件类别"},domProps:{value:t.formData.eventName&&t.formData.eventName.join(",")},on:{click:function(e){return t.selectEventType()}}}),t.multiSelectShow?e("multiSelect",{attrs:{multiSelectData:{data:t.eventList,value:t.formData.eventTypes}},on:{multiSelectClose:t.multiSelectComponent}}):t._e()],1)]),e("div",{staticClass:"item"},[e("p",{class:t.formData.incidentAddress?"active":""},[t._v("所属地点")]),e("div",{staticClass:"address"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.incidentAddress,expression:"formData.incidentAddress"}],attrs:{type:"text",placeholder:"点击选择所属地点"},domProps:{value:t.formData.incidentAddress},on:{input:function(e){e.target.composing||t.$set(t.formData,"incidentAddress",e.target.value)}}}),e("i",{staticClass:"iconfont icon-location",on:{click:t.selectAddress}})])]),e("div",{staticClass:"item incidentContent"},[e("p",{class:t.formData.incidentContent?"active":""},[t._v("事件描述")]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.formData.incidentContent,expression:"formData.incidentContent",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"在此输入事件描述"},domProps:{value:t.formData.incidentContent},on:{input:function(e){e.target.composing||t.$set(t.formData,"incidentContent",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),t.id?t._e():e("div",{staticClass:"item"},[e("p",{class:t.formData.aaa?"active":""},[t._v("附件上传")]),e("ul",{staticClass:"file"},t._l(t.files,(function(a,i){return e("li",{key:i},[e("span",[t._v(t._s(a.fileName))]),e("i",{staticClass:"iconfont icon-cha2",on:{click:function(e){return t.delFile(i)}}})])})),0),e("button",[t._v(" 上传 "),e("input",{attrs:{multiple:"",type:"file",name:"",id:""},on:{change:t.fileChange}})])])]),e("div",[e("van-dialog",{attrs:{width:"90%","show-confirm-button":!1},model:{value:t.mapStatus,callback:function(e){t.mapStatus=e},expression:"mapStatus"}},[e("mapComponents",{on:{map_return:t.map_return}})],1)],1),e("div",[t.multiSelectOddShow?e("multiSelectOdd",{attrs:{multiSelectOddData:t.streetList},on:{multiSelectOddReturn:t.multiSelectOddReturn}}):t._e()],1),e("div",{staticClass:"endHolder"}),e("div",{staticClass:"btn"},[t.id?t._e():e("span",{on:{click:function(e){return t.handClick(1)}}},[t._v("上报")]),e("i",{directives:[{name:"show",rawName:"v-show",value:!t.edit&&t.id,expression:"!edit&&id"}],on:{click:function(e){return t.del()}}},[t._v("删除")]),e("b",{directives:[{name:"show",rawName:"v-show",value:!t.edit&&t.id,expression:"!edit&&id"}],on:{click:function(e){t.edit=!0}}},[t._v("编辑")]),e("i",{directives:[{name:"show",rawName:"v-show",value:t.edit&&t.id,expression:"edit&&id"}],on:{click:t.cancel}},[t._v("取消")]),e("b",{directives:[{name:"show",rawName:"v-show",value:t.edit&&t.id,expression:"edit&&id"}],on:{click:function(e){return t.handClick(1)}}},[t._v("保存")])])])},n=[],s=(a("14d9"),a("6e53")),o=a("ccb6"),r=a("04b9"),l=a("c198"),c={name:"reportedAdd",components:{multiSelect:s["a"],mapComponents:o["a"],multiSelectOdd:r["a"]},data(){return{multiSelectOddShow:!1,mapStatus:!1,multiSelectShow:!1,id:this.$route.query.id,index:[],edit:!0,warningLevel:["一般","黄色","橙色","红色"],formData:{handType:0,isTeamWork:1,sourceType:113,authName:"stabilityEvent:roleList",parentAuthName:"stabilityEvent:roleList",reportId:localStorage.getItem("userId"),title:"",eventName:"",eventTypes:"",actionName:"",actionType:"",roadName:"",roadId:"",incidentAddress:"",incidentContent:"",incidentTime:"",earlyWarningLevel:"",earlyWarningLevelName:"",handleFilesListStr:""},files:[],typeSelectOption:[]}},computed:{streetList(){return this.$store.state.common.streetList},streetOption(){return this.$store.state.common.streetList.map(t=>t.name)},actionList(){return this.$store.state.common.actionList},actionOption(){return this.$store.state.common.actionList.map(t=>t.name)},eventList(){return this.$store.state.common.eventList},eventOption(){return this.$store.state.common.eventList.map(t=>t.name)}},async created(){if(dd.disablePullToRefresh().then(t=>{}).catch(t=>{}),this.id){document.title="事件详情";const t=await Object(l["bb"])(this.$route.query);t.success&&(this.formData=t.data.sourceData,this.formData.authName="eventManagement:edit",this.formData.parentAuthName="stabilityEvent:eventManagement",this.formData.earlyWarningLevelName="number"===typeof this.formData.earlyWarningLevel&&this.warningLevel[this.formData.earlyWarningLevel])}},methods:{multiSelectComponent(t){let e=this;e.formData.eventTypes=t.data.length>0?t.data.join(","):"",e.multiSelectShow=t.status;let a=[];e.eventList.length>0&&t.data.length>0&&e.eventList.map((e,i)=>{t.data.map((t,i)=>{e.id==t&&a.push(e.name)})}),e.formData.eventName=a},selectEventType(){const t=this;t.formData.eventTypes=t.formData.eventTypes?t.formData.eventTypes.split(",").map(Number):[],setTimeout(()=>{t.multiSelectShow=!0},100)},selectBehave(){const t=this;dd.device.notification.actionSheet({title:"选择现实行为？",cancelButton:"取消",otherButtons:t.actionOption,onSuccess:function(e){-1!==e.buttonIndex&&(t.formData.actionType=t.actionList[e.buttonIndex].id,t.formData.actionName=t.actionList[e.buttonIndex].name)},onFail:function(t){}})},multiSelectOddReturn(t){let e=this;e.multiSelectOddShow=t.status,t.id&&(e.formData.roadId=t.id,e.formData.roadName=t.name)},selectStreet(){const t=this;t.multiSelectOddShow=!0},map_return(t){let e=this;e.mapStatus=t.status,1==t.v&&(e.formData.incidentAddress=t.address,e.formData.x=t.x,e.formData.y=t.y)},selectAddress(){const t=this;t.mapStatus=!0},selectTime(){const t=this;dd.showDatePicker({format:"yyyy-MM-dd",value:t.formData.incidentTime}).then(e=>{t.formData.incidentTime=e.value}).catch(t=>{})},selectWarningLevel(){const t=this;dd.device.notification.actionSheet({title:"选择事件等级？",cancelButton:"取消",otherButtons:this.warningLevel,onSuccess:function(e){-1!==e.buttonIndex&&(t.formData.earlyWarningLevel=e.buttonIndex,t.formData.earlyWarningLevelName=["一般","黄色","橙色","红色"][e.buttonIndex])},onFail:function(t){}})},del(){},cancel(){this.$router.go(-1)},save(){},handClick(t){if(!this.formData.title)return void this.alert("请输入事件名称");if(!this.formData.roadId)return void this.alert("请选择请选择所属街道");if(!this.formData.incidentTime)return void this.alert("请选择事发时间");if(!this.formData.eventTypes.length)return void this.alert("请选择事件类别");if(!this.formData.incidentAddress)return void this.alert("请输入所属地点");if(!this.formData.incidentContent)return void this.alert("请输入事件描述");this.formData.handleFilesListStr=JSON.stringify(this.files);const e=this;dd.device.notification.confirm({message:e.id?"确定修改？":"确定上报？",title:"提示",buttonLabels:["取消","确定"],async onSuccess(t){t.buttonIndex&&dd.device.notification.showPreloader({text:"提交中..",showIcon:!0,async onSuccess(t){const a=await Object(l["i"])(e.formData);dd.device.notification.hidePreloader({onSuccess:function(t){},onFail:function(t){}}),a.success&&dd.alert({message:a.message?a.message:"操作成功",title:"提示",button:"收到"}).then(t=>{e.$router.replace("/stability")}).catch(t=>{})},onFail:function(t){}})},onFail:function(t){}})},async fileChange(t){let e=new FormData;const a=[...t.target.files];if(a&&a.length){dd.device.notification.showPreloader({text:"文件上传中..",showIcon:!0,onSuccess(t){}}),a.forEach(t=>{e.append("file",t)}),e.append("rbacToken",localStorage.getItem("rbacToken"));const t=await Object(l["gc"])(e);dd.device.notification.hidePreloader({onSuccess:function(t){},onFail:function(t){}}),t.success&&t.data&&t.data.length&&t.data.forEach((t,e)=>{var i={};i.fileType=a[e].type,i.fileName=a[e].name,i.fileId=t,this.files.push(i)})}},delFile(t){this.files.splice(t,1)},alert(t){dd.device.notification.alert({message:t,title:"提示",buttonName:"确定"})}}},d=c,m=(a("6eca"),a("2877")),u=Object(m["a"])(d,i,n,!1,null,"d7e79dac",null);e["default"]=u.exports},"2e6f":function(t,e,a){},"5d2a":function(t,e,a){"use strict";a("2e6f")},"67f9":function(t,e,a){"use strict";a("f9eb")},"6e53":function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"multiSelect"},[e("van-popup",{staticStyle:{height:"50%"},attrs:{closeable:"",round:"",position:"bottom"},on:{closed:t.multiSelectClose},model:{value:t.multiSelect_show,callback:function(e){t.multiSelect_show=e},expression:"multiSelect_show"}},[e("van-checkbox-group",{attrs:{"icon-size":"20px"},model:{value:t.multiSelect_value,callback:function(e){t.multiSelect_value=e},expression:"multiSelect_value"}},t._l(t.multiSelect_Data,(function(a){return e("van-checkbox",{key:a.id,attrs:{name:a.id}},[t._v(t._s(a.name))])})),1)],1)],1)},n=[],s=(a("14d9"),{props:["multiSelectData"],data(){return{multiSelect_show:!0,multiSelect_Data:this.multiSelectData.data.length>0?this.multiSelectData.data:[],multiSelect_value:this.multiSelectData.value}},created(){},mounted(){},methods:{multiSelectClose(){let t=this,e=[];t.multiSelect_Data&&t.multiSelect_Data.length>0&&t.multiSelect_value&&t.multiSelect_value.length>0&&t.multiSelect_Data.map((a,i)=>{t.multiSelect_value.map((t,i)=>{a.id==t&&e.push(a.name)})}),t.$emit("multiSelectClose",{data:t.multiSelect_value,status:!1,nameArr:e})}}}),o=s,r=a("2877"),l=Object(r["a"])(o,i,n,!1,null,"7855c86c",null);e["a"]=l.exports},"6eca":function(t,e,a){"use strict";a("96d5")},"96d5":function(t,e,a){},b893:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));const i={PI:3.141592653589793,x_pi:52.35987755982988,delta:function(t,e){var a=6378245,i=.006693421622965943,n=this.transformLat(e-105,t-35),s=this.transformLon(e-105,t-35),o=t/180*this.PI,r=Math.sin(o);r=1-i*r*r;var l=Math.sqrt(r);return n=180*n/(a*(1-i)/(r*l)*this.PI),s=180*s/(a/l*Math.cos(o)*this.PI),{lat:n,lon:s}},gcj_encrypt:function(t,e){if(this.outOfChina(t,e))return{lat:t,lon:e};var a=this.delta(t,e);return{lat:t+a.lat,lon:e+a.lon}},gcj_decrypt:function(t,e){if(this.outOfChina(t,e))return{lat:t,lon:e};var a=this.delta(t,e);return{lat:t-a.lat,lon:e-a.lon}},gcj_decrypt_exact:function(t,e){var a,i,n=.01,s=1e-9,o=n,r=n,l=t-o,c=e-r,d=t+o,m=e+r,u=0;while(1){a=(l+d)/2,i=(c+m)/2;var h=this.gcj_encrypt(a,i);if(o=h.lat-t,r=h.lon-e,Math.abs(o)<s&&Math.abs(r)<s)break;if(o>0?d=a:l=a,r>0?m=i:c=i,++u>1e4)break}return{lat:a,lon:i}},bd_encrypt:function(t,e){var a=e,i=t,n=Math.sqrt(a*a+i*i)+2e-5*Math.sin(i*this.x_pi),s=Math.atan2(i,a)+3e-6*Math.cos(a*this.x_pi);return bdLon=n*Math.cos(s)+.0065,bdLat=n*Math.sin(s)+.006,{lat:bdLat,lon:bdLon}},bd_decrypt:function(t,e){var a=e-.0065,i=t-.006,n=Math.sqrt(a*a+i*i)-2e-5*Math.sin(i*this.x_pi),s=Math.atan2(i,a)-3e-6*Math.cos(a*this.x_pi),o=n*Math.cos(s),r=n*Math.sin(s);return{lat:r,lon:o}},mercator_encrypt:function(t,e){var a=20037508.34*e/180,i=Math.log(Math.tan((90+t)*this.PI/360))/(this.PI/180);return i=20037508.34*i/180,{lat:i,lon:a}},mercator_decrypt:function(t,e){var a=e/20037508.34*180,i=t/20037508.34*180;return i=180/this.PI*(2*Math.atan(Math.exp(i*this.PI/180))-this.PI/2),{lat:i,lon:a}},distance:function(t,e,a,i){var n=6371e3,s=Math.cos(t*this.PI/180)*Math.cos(a*this.PI/180)*Math.cos((e-i)*this.PI/180),o=Math.sin(t*this.PI/180)*Math.sin(a*this.PI/180),r=s+o;r>1&&(r=1),r<-1&&(r=-1);var l=Math.acos(r),c=l*n;return c},outOfChina:function(t,e){return e<72.004||e>137.8347||(t<.8293||t>55.8271)},transformLat:function(t,e){var a=2*t-100+3*e+.2*e*e+.1*t*e+.2*Math.sqrt(Math.abs(t));return a+=2*(20*Math.sin(6*t*this.PI)+20*Math.sin(2*t*this.PI))/3,a+=2*(20*Math.sin(e*this.PI)+40*Math.sin(e/3*this.PI))/3,a+=2*(160*Math.sin(e/12*this.PI)+320*Math.sin(e*this.PI/30))/3,a},transformLon:function(t,e){var a=300+t+2*e+.1*t*t+.1*t*e+.1*Math.sqrt(Math.abs(t));return a+=2*(20*Math.sin(6*t*this.PI)+20*Math.sin(2*t*this.PI))/3,a+=2*(20*Math.sin(t*this.PI)+40*Math.sin(t/3*this.PI))/3,a+=2*(150*Math.sin(t/12*this.PI)+300*Math.sin(t/30*this.PI))/3,a}}},ccb6:function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mapC",staticStyle:{height:"100%"}},[e("iframe",{attrs:{id:"mapPage",width:"100%",height:"100%",frameborder:"0",src:"https://apis.map.qq.com/tools/locpicker?search=1&type=1&key=ZZDBZ-7KQ36-S5ESB-MIUYS-AHQAO-ZGFOQ&referer=myapp"}}),e("div",{staticClass:"map_footer"},[e("div",{on:{click:function(e){return t.map_return(0)}}},[t._v("取消")]),e("div",{on:{click:function(e){return t.map_return(1)}}},[t._v("确定")])])])},n=[],s=a("b893"),o={props:[],data(){return{mapData:{v:0,address:"",x:"",y:"",status:!1}}},created(){this.mapCreated()},mounted(){},methods:{map_return(t){let e=this;e.mapData.v=t,setTimeout(()=>{e.$emit("map_return",e.mapData)},500)},mapCreated(){let t=this;window.addEventListener("message",(function(e){var a=e.data;if(a&&"locationPicker"==a.module){t.mapData.address=a.poiaddress,"我的位置"==a.poiname&&(t.mapData.address="当前位置");var i=s["a"].gcj_decrypt(a.latlng.lat,a.latlng.lng);t.mapData.x=i.lon,t.mapData.y=i.lat}}))}}},r=o,l=(a("5d2a"),a("2877")),c=Object(l["a"])(r,i,n,!1,null,"8b92f470",null);e["a"]=c.exports},f9eb:function(t,e,a){}}]);