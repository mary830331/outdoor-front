(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{4020:function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("admin"),e("div",{staticClass:"top-mt left-layout-lg "},[e("div",{staticClass:"justify-center margin-15"},[e("q-card",{staticClass:"my-card02 row"},[e("img-inputer",{staticClass:"col-md-6 q-mx-xl q-mt-xl col-xs-10",staticStyle:{height:"400px"},attrs:{accept:"image/*",theme:"light",size:"normal","bottom-text":"點選或拖拽圖片以修改","hover-text":"點選或拖拽圖片以修改",placeholder:"點選或拖拽選擇圖片","max-size":1024,"exceed-size-text":"檔案大小不能超過"},model:{value:t.form.image,callback:function(s){t.$set(t.form,"image",s)},expression:"form.image"}}),e("q-card-section",{staticClass:"col-md-4 q-mt-xl col-xs-12"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("q-item-label",{staticClass:"text-h5 float-left"},[e("q-input",{staticStyle:{width:"280px"},attrs:{maxlength:"7",borderless:"",label:"修改暱稱"},model:{value:t.form.name,callback:function(s){t.$set(t.form,"name",s)},expression:"form.name"}}),e("q-input",{staticStyle:{width:"280px"},attrs:{borderless:"",label:"修改年齡",type:"number"},model:{value:t.form.age,callback:function(s){t.$set(t.form,"age",s)},expression:"form.age"}}),e("q-input",{staticStyle:{width:"280px"},attrs:{borderless:"",label:"修改訊息"},model:{value:t.form.news,callback:function(s){t.$set(t.form,"news",s)},expression:"form.news"}})],1)],1),e("div",{staticClass:"cursor-pointer shadow-3 q-pa-md ",staticStyle:{height:"200px",width:"300px"}},[t._v("\n            "+t._s(t.form.description)+"\n            "),e("q-popup-edit",{attrs:{"auto-save":""},scopedSlots:t._u([{key:"default",fn:function(s){return[e("q-input",{attrs:{autofocus:"",dense:"",counter:"",hint:"請輸入內容",type:"textarea",rules:[function(t){return t.length>0||"請輸入暱稱"}]},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:s.set.apply(null,arguments)}},model:{value:s.value,callback:function(e){t.$set(s,"value",e)},expression:"scope.value"}})]}}]),model:{value:t.form.description,callback:function(s){t.$set(t.form,"description",s)},expression:"form.description"}})],1)])]),e("q-card-section",{staticClass:"q-px-xl col-12"},[e("q-chip",{attrs:{dense:"",color:"secondary","text-color":"white",icon:"done"}},[t._v("\n          "+t._s(t.form.category01)+"\n        ")]),e("q-chip",{attrs:{dense:"",color:"positive","text-color":"white",icon:"done"}},[t._v("\n          "+t._s(t.form.category02)+"\n        ")]),e("q-chip",{attrs:{dense:"",color:"negative","text-color":"white",icon:"done"}},[t._v("\n          "+t._s(t.form.category03)+"\n        ")]),e("div",{staticClass:"row"},[e("q-select",{staticClass:"col-4",attrs:{borderless:"",options:t.form.options,label:"請選擇你最喜歡的三個活動"},model:{value:t.form.category01,callback:function(s){t.$set(t.form,"category01",s)},expression:"form.category01"}}),e("q-select",{staticClass:"col-4",attrs:{borderless:"",options:t.form.options,label:"請選擇你最喜歡的三個活動"},model:{value:t.form.category02,callback:function(s){t.$set(t.form,"category02",s)},expression:"form.category02"}}),e("q-select",{staticClass:"col-4",attrs:{borderless:"",options:t.form.options,label:"請選擇你最喜歡的三個活動"},model:{value:t.form.category03,callback:function(s){t.$set(t.form,"category03",s)},expression:"form.category03"}})],1)],1),e("div",{staticClass:"col-12 q-px-xl"},[e("q-separator",{attrs:{size:"1px"}})],1),e("div",{staticClass:"q-pl-xl col-6 q-py-md row"},[e("img",{staticClass:"col-2 q-pr-sm q-pb-sm",attrs:{src:"https://picsum.photos/id/50/80/80",alt:""}}),e("img",{staticClass:"col-2 q-pr-sm q-pb-sm",attrs:{src:"https://picsum.photos/id/50/80/80",alt:""}}),e("img",{staticClass:"col-2 q-pr-sm q-pb-sm",attrs:{src:"https://picsum.photos/id/50/80/80",alt:""}}),e("img",{staticClass:"col-2 q-pr-sm q-pb-sm",attrs:{src:"https://picsum.photos/id/50/80/80",alt:""}}),e("img",{staticClass:"col-2 q-pr-sm q-pb-sm",attrs:{src:"https://picsum.photos/id/50/80/80",alt:""}}),e("img",{staticClass:"col-2 q-pr-sm q-pb-sm",attrs:{src:"https://picsum.photos/id/50/80/80",alt:""}})]),e("div",{staticClass:"col-5 row"},[e("div",{staticClass:" col-10 text-h6 text-center text-weight-bolder"},[t._v("接下來尚有 "+t._s(t.user.addgroup.length)+" 個活動\n        ")]),e("q-btn",{staticClass:"col-2",staticStyle:{height:"50px"},attrs:{color:"info"},on:{click:t.dispatch}},[t._v("送出")])],1)],1)],1)]),e("div",{staticClass:"content-bg"})],1)},a=[],r=(e("e01a"),e("f529")),i={components:{Admin:r["a"]},data(){return{users:[],productsname:"",form:{name:"",age:null,news:"",image:null,options:["百岳","中級山","郊山","探勘","秘境","露營","野溪溫泉","溯溪","水肺潛水","自由潛水","SUP","衝浪","其他"],category01:"",category02:"",category03:"",description:""}}},methods:{async dispatch(){const t=new FormData;for(const e in this.form)"_id"!==e&&t.append(e,this.form[e]);try{const{data:s}=await this.api.patch("users/userinfo/"+this.user._id,t,{headers:{authorization:"Bearer "+this.$store.getters["user/user"].token}});this.user[this.user.index]={...this.user,image:s.result.image},this.$q.notify({color:"positive",icon:"check_circle",message:"上傳成功"})}catch(s){console.log(s),this.$q.notify({color:"info",icon:"error",message:`錯誤 ${s.response.data.message}`})}}},computed:{user(){return this.$store.state.user}},async created(){try{const{data:t}=await this.api.get("/users/me",{headers:{authorization:"Bearer "+this.$store.getters["user/user"].token}});this.form.name=t.result.name,this.form.age=t.result.age,this.form.news=t.result.news,this.form.image=t.result.image,this.form.category01=t.result.category01,this.form.category02=t.result.category02,this.form.category03=t.result.category03,this.form.description=t.result.description}catch(t){console.log(t),this.$q.notify({color:"positive",icon:"error",message:"取得資料失敗"})}}},c=i,l=e("2877"),n=e("f09f"),m=e("a370"),p=e("0170"),d=e("27f9"),u=e("42a1"),f=e("b047"),h=e("ddd8"),g=e("eb85"),y=e("9c40"),x=e("eebe"),b=e.n(x),q=Object(l["a"])(c,o,a,!1,null,null,null);s["default"]=q.exports;b()(q,"components",{QCard:n["a"],QCardSection:m["a"],QItemLabel:p["a"],QInput:d["a"],QPopupEdit:u["a"],QChip:f["a"],QSelect:h["a"],QSeparator:g["a"],QBtn:y["a"]})}}]);