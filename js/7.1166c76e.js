(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"8a8d":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("admin"),e("div",{staticClass:"top-mt left-layout-lg addgroup"},[e("div",{staticClass:"row justify-center margin-15"},[e("q-card",{staticClass:"my-card02 row",staticStyle:{width:"100%"}},[e("div",{staticClass:"col-3"},[e("q-list",{staticClass:"shadow-2 ",staticStyle:{width:"100%",height:"100%","border-radius":"50px 0 0 0"},attrs:{padding:""}},[e("q-item-label",{staticClass:"text-center",attrs:{header:""}},[t._v("已加入活動討論區")]),e("q-table",{ref:"table",staticClass:"overflow-hidden",attrs:{data:t.products,columns:t.columns,flat:"","hide-header":"","hide-bottom":""},scopedSlots:t._u([{key:"body",fn:function(a){return[!0===a.row.sell?e("q-tr",{staticClass:"row ",attrs:{props:a}},[e("q-td",{key:"category",staticClass:"col-12 row",attrs:{caption:"",props:a}},[e("div",{staticClass:"col-10 text-h6 text-weight-bolder"},[t._v(t._s(a.row.category))]),e("div",{staticClass:"col-2"},[e("q-btn",{attrs:{rounded:"",dense:"",color:"info",size:"md",label:"查看",to:"/Groupproduct/"+a.row._id}})],1)]),e("q-td",{key:"time",staticClass:"col-12 text-caption text-weight-thin",staticStyle:{"white-space":"pre-line",overflow:"hidden"},attrs:{props:a}},[t._v(t._s(a.row.time))]),e("q-td",{key:"name",staticClass:"col-12 ",staticStyle:{"white-space":"pre-line",overflow:"hidden"},attrs:{props:a}},[t._v(t._s(a.row.name))])],1):t._e()]}}])})],1)],1),e("div",{staticClass:"q-pa-md col-9 row justify-center"},[e("div",{staticStyle:{width:"100%","max-width":"800px",height:"600px"}},[e("q-chat-message",{attrs:{name:"me",avatar:"https://cdn.quasar.dev/img/avatar3.jpg",text:["欸欸欸 怎麼不能聊天阿"],stamp:"7 minutes ago",sent:"","bg-color":"amber-7"}}),e("q-chat-message",{attrs:{name:"Jane",avatar:"https://cdn.quasar.dev/img/avatar5.jpg",text:["你不知道?","功能待開發阿 哈哈哈哈哈"],stamp:"4 minutes ago","text-color":"white","bg-color":"negative"}}),e("q-chat-message",{attrs:{name:"Jane",avatar:"https://cdn.quasar.dev/img/avatar5.jpg",text:["我來不及做,不過可能也做不出來Q______Q"],stamp:"1 minutes ago","text-color":"white","bg-color":"negative"}}),e("q-chat-message",{attrs:{name:"me",avatar:"https://cdn.quasar.dev/img/avatar3.jpg",text:["好吧....那先這樣"],stamp:"1 minutes ago",sent:"","bg-color":"amber-7"}})],1),e("q-input",{staticStyle:{width:"100%"},attrs:{outlined:""},scopedSlots:t._u([{key:"after",fn:function(){return[e("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"send"}})]},proxy:!0}]),model:{value:t.text,callback:function(a){t.text=a},expression:"text"}})],1)])],1)])],1)},r=[],o=(e("ddb0"),e("f529")),i={components:{Admin:o["a"]},data(){return{text:"",products:[],columns:[{name:"name",field:"name",align:"left"},{name:"category",field:"category",align:"left"},{name:"time",field:"time",align:"left"}]}},methods:{async updateGroup(t,a){try{await this.api.patch("/users/me/addgroup",{product:this.products[t].product._id,quantity:a},{headers:{authorization:"Bearer "+this.$store.getters["user/user"].token}}),0===a&&(this.products.splice(t,1),this.$store.commit("user/updateGroup",this.user.addgroup-1))}catch(e){this.$q.notify({color:"positive",icon:"error",message:"錯誤XXX"})}}},async created(){try{const{data:t}=await this.api.get("/users/me/addgroup",{headers:{authorization:"Bearer "+this.$store.getters["user/user"].token}});console.log(t);for(const a of t.result)this.products.push(a.product)}catch(t){this.$q.notify({icon:"error",message:"參加活動失敗",color:"info "})}}},c=i,n=e("2877"),d=e("f09f"),l=e("1c1c"),p=e("0170"),u=e("eaac"),m=e("bd08"),h=e("db86"),g=e("9c40"),f=e("8169"),v=e("27f9"),w=e("eebe"),y=e.n(w),b=Object(n["a"])(c,s,r,!1,null,null,null);a["default"]=b.exports;y()(b,"components",{QCard:d["a"],QList:l["a"],QItemLabel:p["a"],QTable:u["a"],QTr:m["a"],QTd:h["a"],QBtn:g["a"],QChatMessage:f["a"],QInput:v["a"]})}}]);