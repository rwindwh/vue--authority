webpackJsonp([13],{313:function(e,t,l){var a=l(2)(l(534),l(827),null,null,null);e.exports=a.exports},339:function(e,t,l){"use strict";function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"记录",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"永久删除";return new i.a(function(a,n){r.MessageBox.confirm("此操作将"+t+e+", 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a()}).catch(function(){l.i(r.Message)({type:"info",message:"已取消此操作"})})})}t.a=a;var n=l(27),i=l.n(n),r=l(28);l.n(r)},359:function(e,t,l){"use strict";function a(e){return/^[a-z0-9](?:[-_.+]?[a-z0-9]+)*@([a-z0-9]+)\.com$/i.test(e.trim())}function n(e){return/^\d{11}$/i.test(e.trim())}t.a=a,t.b=n},534:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(121),n=l.n(a),i=l(339),r=l(359);t.default={data:function(){return{tableQuery:{limit:10,currentPage:1,name:null,phone:null,email:null},createdRules:{email:[{required:!1,trigger:"blur",validator:function(e,t,a){l.i(r.a)(t)?a():a(new Error("请输入正确的合法邮箱"))}}],phone:[{required:!1,trigger:"blur",validator:function(e,t,a){l.i(r.b)(t)?a():a(new Error("请输入正确的手机号码"))}}]},total:null,tableData:[],statusArr:[{label:"正常",value:0},{label:"停用",value:1}],tableLoading:!0,formTitle:null,formVisible:!1,formSubmiting:!1,createdItem:{id:null,name:null,phone:null,email:null,roles:[],status:null},deletedForm:{id:null},roleList:[]}},filters:{statusFilter:function(e){return{0:"primary",1:"danger"}[e]},statusMap:function(e){return{0:"正常",1:"停用"}[e]},roleNameMap:function(e){var t={};this.roleList.forEach(function(e){t.push()})}},mounted:function(){this.getRoleList(),this.getUserList()},methods:{getUserList:function(){var e=this;this.tableLoading=!0,this.$api.system.user.list({data:this.tableQuery}).then(function(t){e.total=t.data.total,e.tableData=t.data.list,e.tableLoading=!1}).catch(function(t){e.tableLoading=!1,console.log(t)})},getRoleList:function(){var e=this;this.$api.system.role.all({data:{}}).then(function(t){var l=t.data;e.roleList=n()(l).map(function(e){return{value:l[e].id,label:l[e].name}}),console.log(e.roleList)}).catch(function(e){console.log(e)})},handleFilter:function(){this.getUserList()},handleReset:function(){this.tableQuery.limit=10,this.tableQuery.currentPage=1,this.tableQuery.name=null,this.tableQuery.phone=null,this.tableQuery.email=null,this.tableQuery.status=null,this.formSubmiting=!1,this.formVisible=!1,this.getUserList()},handleSizeChange:function(e){this.tableQuery.limit=e,this.getUserList()},handleCurrentChange:function(e){this.tableQuery.currentPage=e,this.getUserList()},clearDialog:function(){this.createdItem.id=null,this.createdItem.name=null,this.createdItem.phone=null,this.createdItem.email=null,this.createdItem.status=null,this.createdItem.roles=[]},showDialog:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.formVisible=!0,this.clearDialog(),"create"==e?this.formTitle="新建用户":(this.formTitle="修改用户",this.createdItem.id=t.id,this.createdItem.name=t.name,this.createdItem.phone=t.phone,this.createdItem.status=t.status,this.createdItem.email=t.email,this.createdItem.roles=n()(t.roles).map(function(e){return parseInt(e)}))},commitForm:function(){var e=this;this.formSubmiting=!0,this.$api.system.user.save({data:this.createdItem}).then(function(t){e.formSubmiting=!1,e.formVisible=!1,e.$notify({title:"成功",message:"保存成功",type:"success",duration:1500}),e.handleFilter(),console.log(t)}).catch(function(t){e.formSubmiting=!1,e.$notify({title:"错误",message:t,type:"error",duration:3e3}),console.log(t)})},deleteRecord:function(e){var t=this;l.i(i.a)("用户").then(function(){t.deletedForm.id=e,t.$api.system.user.delete({data:t.deletedForm}).then(function(e){t.$notify({title:"成功",message:"删除成功",type:"success",duration:1500}),t.handleFilter(),console.log(e)}).catch(function(e){t.formSubmiting=!1,t.$notify({title:"错误",message:e,type:"error",duration:3e3}),console.log(e)})})},handleResetPwd:function(e){var t=this;l.i(i.a)("用户密码","重置").then(function(){t.$api.system.user.resetPwd({data:{id:e}}).then(function(e){t.$notify({title:"成功",message:"重置用户密码成功",type:"success",duration:1500}),console.log(e)}).catch(function(e){t.formSubmiting=!1,t.$notify({title:"错误",message:"重置用户密码失败",type:"error",duration:3e3}),console.log(e)})})}}}},827:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"components-container"},[l("div",{staticClass:"filter-container"},[l("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"用户名"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.tableQuery.name,callback:function(t){e.$set(e.tableQuery,"name",t)},expression:"tableQuery.name"}}),e._v(" "),l("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"手机号"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.tableQuery.phone,callback:function(t){e.$set(e.tableQuery,"phone",t)},expression:"tableQuery.phone"}}),e._v(" "),l("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"邮箱"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.tableQuery.email,callback:function(t){e.$set(e.tableQuery,"email",t)},expression:"tableQuery.email"}}),e._v(" "),l("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.handleFilter}},[l("i",{staticClass:"el-icon-search"})]),e._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:e.handleReset}},[l("i",{staticClass:"el-icon-refresh"})]),e._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:function(t){e.showDialog("create")}}},[l("i",{staticClass:"el-icon-plus"}),e._v(" 新增用户")])],1),e._v(" "),l("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.tableLoading,expression:"tableLoading",modifiers:{body:!0}}],staticStyle:{width:"100%"},attrs:{data:e.tableData,"element-loading-text":"拼命加载中",stripe:"",border:"",fit:"","highlight-current-row":""}},[l("el-table-column",{attrs:{label:"ID",prop:"id",align:"center",width:"100px"}}),e._v(" "),l("el-table-column",{attrs:{label:"用户名",prop:"name",align:"center",width:"160px"}}),e._v(" "),l("el-table-column",{attrs:{label:"手机号",prop:"phone",align:"center",width:"160px"}}),e._v(" "),l("el-table-column",{attrs:{label:"邮箱",prop:"email",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{label:"角色",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.roles,function(t,a){return l("span",{key:a},[l("el-tag",{attrs:{type:"gray"}},[e._v(" "+e._s(t)+" ")])],1)})}}])}),e._v(" "),l("el-table-column",{attrs:{label:"用户状态",align:"center",width:"100px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-tag",{attrs:{type:e._f("statusFilter")(t.row.status)}},[e._v(e._s(e._f("statusMap")(t.row.status)))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"操作",align:"center",width:"250px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{size:"small",type:"success"},on:{click:function(l){e.handleResetPwd(t.row.id)}}},[l("i",{staticClass:"el-icon-refresh"}),e._v("重置密码")]),e._v(" "),l("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(l){e.showDialog("update",t.row)}}},[l("i",{staticClass:"el-icon-edit"})]),e._v(" "),l("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(l){e.deleteRecord(t.row.id)}}},[l("i",{staticClass:"el-icon-delete"})])]}}])})],1),e._v(" "),l("div",{staticClass:"pagination-container"},[l("el-pagination",{attrs:{"current-page":e.tableQuery.currentPage,"page-sizes":[10,20,50],"page-size":e.tableQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.tableQuery,"currentPage",t)}}})],1),e._v(" "),l("el-dialog",{attrs:{title:e.formTitle,visible:e.formVisible},on:{"update:visible":function(t){e.formVisible=t}}},[l("el-form",{staticClass:"small-space",staticStyle:{width:"60%","margin-left":"0px"},attrs:{model:e.createdItem,rules:e.createdRules,"label-position":"left","label-width":"70px"}},[l("el-form-item",{attrs:{label:"用户名"}},[l("el-input",{attrs:{placeholder:"请填写用户名",value:"2ewqdwq"},model:{value:e.createdItem.name,callback:function(t){e.$set(e.createdItem,"name",t)},expression:"createdItem.name"}},[e._v("qwdwed{{}}")])],1),e._v(" "),l("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[l("el-input",{attrs:{name:"phone",autoComplete:"on",placeholder:"请填写手机号"},model:{value:e.createdItem.phone,callback:function(t){e.$set(e.createdItem,"phone",t)},expression:"createdItem.phone"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[l("el-input",{attrs:{name:"email",autoComplete:"on",placeholder:"请填写邮箱"},model:{value:e.createdItem.email,callback:function(t){e.$set(e.createdItem,"email",t)},expression:"createdItem.email"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"用户角色"}},[l("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",placeholder:"请选择用户角色"},model:{value:e.createdItem.roles,callback:function(t){e.$set(e.createdItem,"roles",t)},expression:"createdItem.roles"}},e._l(e.roleList,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),l("el-form-item",{attrs:{label:"用户状态"}},[l("el-select",{attrs:{clearable:"",placeholder:"请选择用户状态"},model:{value:e.createdItem.status,callback:function(t){e.$set(e.createdItem,"status",t)},expression:"createdItem.status"}},e._l(e.statusArr,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1),e._v(" "),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.formVisible=!1}}},[e._v("取 消")]),e._v(" "),l("el-button",{attrs:{type:"primary",loading:e.formSubmiting},on:{click:e.commitForm}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=13.a565e051d638370613d8.js.map