(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02a1d03e"],{"40dc":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"event_warp"},[a("div",{staticClass:"analyseClass"},[t._m(0),a("div",{staticClass:"form",class:t.edit?"":"unclick"},[a("div",{staticClass:"item"},[a("p",{class:t.formData.remark?"active":""},[t._v(" 反馈说明 "),a("span",{staticClass:"require"},[t._v("*")])]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.remark,expression:"formData.remark"}],staticClass:"eh_line",attrs:{cols:"30",rows:"5",placeholder:"在此输入指令处置后的反馈说明"},domProps:{value:t.formData.remark},on:{input:function(a){a.target.composing||t.$set(t.formData,"remark",a.target.value)}}})]),a("div",{staticClass:"item",staticStyle:{display:"flex"}},[a("p",{class:t.formData.joinNum?"active":""},[t._v(" 后续处置 "),a("span",{staticClass:"require"},[t._v("*")])]),a("van-radio-group",{staticClass:"radio",staticStyle:{"margin-left":"20px"},on:{change:t.radioChange},model:{value:t.formData.status,callback:function(a){t.$set(t.formData,"status",a)},expression:"formData.status"}},[a("van-radio",{attrs:{name:"1"}},[t._v("关闭")]),a("van-radio",{attrs:{name:"2"}},[t._v("同步转应急事件")]),a("van-radio",{attrs:{name:"3"}},[t._v("同步转重大风险隐患库")])],1)],1)])]),a("div",{staticClass:"btn"},[a("span",{on:{click:function(a){return t.submitFn(1)}}},[t._v("取消")]),a("span",{on:{click:function(a){return t.submitFn(2)}}},[t._v("保存")])])])},i=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"header_icon"},[a("span",[t._v("反馈情况")])])}],r=s("c198"),n={name:"zeroReportDetail",data(){return{id:null,detail:{},edit:!0,formData:{status:"1",remark:null}}},async created(){this.id=this.$route.query.id,window.scrollTo(0,0),dd.disablePullToRefresh(),this.getDetail()},methods:{radioChange(t){this.formData.status=t,this.formData.remark=null,"2"===t&&(this.type="1")},submitFn(t){1!==t?this.formData.status?2!=this.formData.status||this.formData.remark?dd.confirm({title:"温馨提示",message:"是否确定提交？",buttonLabels:["取消","确定"]}).then(async t=>{if(1===t.buttonIndex){const t=await Object(r["y"])(this.formData);t.success&&dd.toast({icon:"success",text:"操作成功"}).then(t=>{this.$router.go(-1)})}}):this.$toast("请输入异常描述"):this.$toast("请选择零报情况"):this.$router.go(-1)},async getDetail(){const t=await Object(r["R"])({id:this.id});this.detail=t.data}}},o=n,c=(s("6e2b"),s("2877")),l=Object(c["a"])(o,e,i,!1,null,"9e08c7d2",null);a["default"]=l.exports},"4c77":function(t,a,s){},"6e2b":function(t,a,s){"use strict";s("4c77")}}]);