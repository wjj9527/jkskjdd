(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-687ea860"],{3802:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"Teamwork_add"},[e("div",{staticClass:"form",class:t.edit?"":"unclick"},[e("div",{staticClass:"form_item"},[e("p",{class:t.formData.title?"active":""},[t._v("事件名称")]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.formData.title,expression:"formData.title",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"在此输入事件名称"},domProps:{value:t.formData.title},on:{input:function(e){e.target.composing||t.$set(t.formData,"title",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),e("div",{staticClass:"form_item"},[e("p",{class:t.formData.time?"active":""},[t._v("时间")]),e("input",{attrs:{type:"text",readonly:"",placeholder:"在此输入时间"},domProps:{value:t.formData.time},on:{click:function(e){return t.timeFn()}}})]),e("div",{staticClass:"form_item"},[e("p",{class:t.formData.incidentAddress?"active":""},[t._v("地点")]),e("div",{staticClass:"relativeC"},[e("input",{attrs:{type:"text",readonly:"",placeholder:"点击选择地点"},domProps:{value:t.formData.incidentAddress},on:{click:function(e){return t.addressFn()}}}),e("i",{staticClass:"iconfont icon-location",on:{click:function(e){return t.addressFn()}}})])]),t.edit?t._e():e("div",{staticClass:"form_item"},[e("p",{class:t.formData.a?"active":""},[t._v("上报部门")]),e("div",{staticClass:"relativeC"},[e("input",{attrs:{type:"text",readonly:"",placeholder:"无"},domProps:{value:t.formData.a}})])]),t.edit?t._e():e("div",{staticClass:"form_item"},[e("p",{class:t.formData.b?"active":""},[t._v("上报人")]),e("div",{staticClass:"relativeC"},[e("input",{attrs:{type:"text",readonly:"",placeholder:"无"},domProps:{value:t.formData.b}})])]),t.edit?t._e():e("div",{staticClass:"form_item"},[e("p",{class:t.formData.c?"active":""},[t._v("事件等级")]),e("div",{staticClass:"relativeC"},[e("input",{attrs:{type:"text",readonly:"",placeholder:"无"},domProps:{value:t.formData.c}})])]),e("div",{staticClass:"form_item"},[e("p",{class:t.formData.incidentRemark?"active":""},[t._v("描述")]),e("div",[e("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.formData.incidentRemark,expression:"formData.incidentRemark",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"在此输入描述",rows:"5"},domProps:{value:t.formData.incidentRemark},on:{input:function(e){e.target.composing||t.$set(t.formData,"incidentRemark",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),e("div",{staticClass:"form_item"},[e("p",{class:t.files.length>0?"active":""},[t._v("照片")]),e("div",{staticClass:"item_main"},[t._l(t.files,(function(a,i){return e("span",{key:i,on:{click:function(e){return t.previewDoc(a,i)}}},[e("img",{attrs:{src:t.url_+"rbac/file/downloadRb/"+a.fileId+"?rbacToken="+t.rbacToken_}}),e("i",{staticClass:"iconfont icon-cha2",on:{click:function(e){return t.delFile(i)}}})])})),t.files.length<5?e("span",[e("button",[t._v(" 上传 "),e("input",{attrs:{multiple:"",type:"file",name:"",id:""},on:{change:t.fileChange}})])]):t._e()],2)]),t.edit?t._e():e("div",{staticClass:"detailMsg"},[t._m(0),t._m(1)]),t.edit?t._e():e("div",{staticClass:"form_item"},[e("p",{class:t.formData.incidentRemark?"active":""},[t._v("处置反馈")]),e("div",[e("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.formData.incidentRemark,expression:"formData.incidentRemark",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"无",rows:"5"},domProps:{value:t.formData.incidentRemark},on:{input:function(e){e.target.composing||t.$set(t.formData,"incidentRemark",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])])]),e("div",{staticClass:"btn"},[t.edit?e("span",[t._v("保存")]):t._e(),t.edit?t._e():e("span",[t._v("继续跟踪")]),t.edit?t._e():e("span",[t._v("处置完毕")])])])},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"header_icon"},[e("span",[t._v("流转信息")])])},function(){var t=this,e=t._self._c;return e("ul",{staticClass:"ul"},[e("li",{staticClass:"li"},[e("span",[t._v("截止时间：")]),e("div",[t._v(" 上报人员上报人员上报人员上报人员上报人员上报人员上报人员上报人员上报人员上报人员上报人员上报人员 ")])]),e("li",{staticClass:"li"},[e("span",[t._v("处置要求：")]),e("div",[t._v("上报人员")])]),e("li",{staticClass:"li"},[e("span",[t._v("流转系统：")]),e("div",[t._v("上报人员")])])])}],r=(a("14d9"),a("c198")),n={data(){return{url_:"",rbacToken_:"823c854064d64961833ddc67a8618ac5",edit:!0,files:[],formData:{title:"",incidentAddress:"",trends:"",trends:""}}},created(){let t=this.$route.query;this.url_=Object({NODE_ENV:"production",VUE_APP_ENV:"production",BASE_URL:""}).baseUrl,this.rbacToken_=localStorage.getItem("rbacToken"),t.id&&(this.edit=!1)},methods:{previewDoc(t,e){let a=[];this.files.map((t,e)=>{a.push(this.url_+"rbac/file/downloadRb/"+t.fileId+"?rbacToken="+this.rbacToken_)}),dd.previewImage({current:a[e],urls:a}).then(t=>{}).catch(t=>{})},timeFn(){dd.showTimePicker({format:"yyyy-MM-dd HH:mm:ss",value:"2015-04-17 10:10:10"}).then(t=>{}).catch(t=>{})},addressFn(){dd.locateOnMap({}).then(t=>{}).catch(t=>{})},async fileChange(t){const e=this;let a=new FormData,i=[...t.target.files];if(e.showLoadingFn(),i&&i.length){i.forEach(t=>{a.append("file",t)}),a.append("rbacToken",localStorage.getItem("rbacToken"));const t=await Object(r["gc"])(a);t.success&&(t.data&&t.data.length&&t.data.forEach((t,a)=>{var s={};s.fileType=i[a].type,s.fileName=i[a].name,s.fileId=t,e.files.push(s)}),e.hideLoadingFn())}},showLoadingFn(){dd.showLoading({text:"加载中"}).then(t=>{}).catch(t=>{})},hideLoadingFn(){dd.hideLoading({}).then(t=>{}).catch(t=>{})},delFile(t){},alert(t){dd.alert({message:t,title:"提示",button:"收到"}).then(t=>{}).catch(t=>{})}}},c=n,o=(a("9f2c"),a("2877")),l=Object(o["a"])(c,i,s,!1,null,"c39905f2",null);e["default"]=l.exports},"9f2c":function(t,e,a){"use strict";a("c351")},c351:function(t,e,a){}}]);