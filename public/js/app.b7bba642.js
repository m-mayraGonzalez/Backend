(function(t){function e(e){for(var a,i,r=e[0],l=e[1],c=e[2],u=0,d=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);v&&v(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var r=n[i];0!==s[r]&&(a=!1)}a&&(o.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},i={app:0},s={app:0},o=[];function r(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-07709945":"2b7e053f","chunk-05df075b":"e54dc49f","chunk-2d0a3389":"6b2cc7c3","chunk-2d0ac190":"15c355b0","chunk-2d0aeedd":"b3889ec3","chunk-2d0d6393":"cbc940bd","chunk-2d225db2":"aff55b25","chunk-2d22901b":"e0fbc08a","chunk-2d22c2ef":"2f3c7926","chunk-7bc02fc4":"03a2d78c","chunk-2d22d746":"7ac405a8","chunk-2d216214":"4700c1d8","chunk-2d216257":"256ee085","chunk-461b141f":"1bf54f36"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={"chunk-07709945":1,"chunk-05df075b":1,"chunk-7bc02fc4":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-07709945":"d4481170","chunk-05df075b":"0d2553c4","chunk-2d0a3389":"31d6cfe0","chunk-2d0ac190":"31d6cfe0","chunk-2d0aeedd":"31d6cfe0","chunk-2d0d6393":"31d6cfe0","chunk-2d225db2":"31d6cfe0","chunk-2d22901b":"31d6cfe0","chunk-2d22c2ef":"31d6cfe0","chunk-7bc02fc4":"20a33931","chunk-2d22d746":"31d6cfe0","chunk-2d216214":"31d6cfe0","chunk-2d216257":"31d6cfe0","chunk-461b141f":"31d6cfe0"}[t]+".css",s=l.p+a,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var c=o[r],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===s))return e()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){c=d[r],u=c.getAttribute("data-href");if(u===a||u===s)return e()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=e,v.onerror=function(e){var a=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete i[t],v.parentNode.removeChild(v),n(o)},v.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(v)})).then((function(){i[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=r(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(v);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}s[t]=void 0}};var v=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var v=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[null!=t.token?n("Navbar"):t._e(),n("v-content",[n("router-view")],1)],1)},s=[],o=n("5530"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:null!=t.token||""!=t.token||void 0!=t.token,expression:"token != null || token != '' || token != undefined"}]},[n("v-app-bar",{attrs:{color:"teal accent-3",dark:"",app:"","clipped-left":""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-toolbar-title",{staticClass:"text-uppercase"},[n("span",{staticClass:"font-weight-light"},[t._v("Sistema")])]),n("v-spacer"),n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({attrs:{text:""}},a))]}}])},[n("v-list",{attrs:{flat:""}},t._l(t.links,(function(e){return n("v-list-item",{key:e.text,attrs:{router:"",to:e.route,"active-class":"border"}},[n("v-list-item-title",[t._v(t._s(e.text))])],1)})),1)],1),n("v-btn",{attrs:{color:"teal accent-8"},on:{click:function(e){return t.salir()}}},[t._v(" Salir ")])],1),n("v-navigation-drawer",{staticClass:"teal accent-3 col-md-6 col-12",attrs:{app:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-divider"),n("v-list",{attrs:{nav:"",dense:""}},["ADMIN_ROL"==this.$store.state.rol?[n("v-list-item-group",{attrs:{color:"primary"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},[n("menu-item",{attrs:{icon:"mdi-home",title:"Inicio",to:"/"}}),n("v-list-group",{attrs:{value:!1,"prepend-icon":"mdi-cog-outline","no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-title",[t._v("Almacén")])]},proxy:!0}],null,!1,2886825058)},[n("menu-item",{attrs:{icon:"mdi-account-group",title:"Categoría",pos:"2",to:"/categorias"}}),n("menu-item",{attrs:{icon:"mdi-account-multiple",title:"Artículos",pos:"2",to:"/articulos"}})],1),n("v-list-item-group",{attrs:{color:"primary"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},[n("v-list-group",{attrs:{value:!1,"prepend-icon":"mdi-cog-outline","no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-title",[t._v("Accesos")])]},proxy:!0}],null,!1,1624196108)},[n("menu-item",{attrs:{icon:"mdi-account-group",title:"Usuario",pos:"2",to:"/usuario"}})],1)],1)],1)]:t._e(),"ALMACENISTA_ROL"==this.$store.state.rol||"ADMIN_ROL"==this.$store.state.rol?[n("v-list-item-group",{attrs:{color:"primary"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},[n("v-list-group",{attrs:{value:!1,"prepend-icon":"mdi-cog-outline","no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-title",[t._v("Compras")])]},proxy:!0}],null,!1,3368140342)},[n("menu-item",{attrs:{icon:"mdi-account-group",title:"Ingresos",pos:"2",to:"/ingresos"}}),n("menu-item",{attrs:{icon:"mdi-account-multiple",title:"Proveedores",pos:"2",to:"/proveedores"}})],1)],1)]:t._e(),"VENDEDOR_ROL"==this.$store.state.rol?[n("v-list-item-group",{attrs:{color:"primary"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},[n("v-list-group",{attrs:{value:!1,"prepend-icon":"mdi-cog-outline","no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-title",[t._v("Ventas")])]},proxy:!0}],null,!1,3170377020)},[n("menu-item",{attrs:{icon:"mdi-account-group",title:"Ventas",pos:"2",to:"/ventas"}}),n("menu-item",{attrs:{icon:"mdi-account-multiple",title:"Clientes",pos:"2",to:"/clientes"}})],1)],1)]:t._e(),n("v-list-item-group",{attrs:{color:"primary"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},[n("v-list-group",{attrs:{value:!1,"prepend-icon":"mdi-cog-outline","no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-title",[t._v("Consultas")])]},proxy:!0}])},[n("menu-item",{attrs:{icon:"mdi-account-group",title:"Consultas Compras",pos:"5",to:"/consultasCompras"}}),n("menu-item",{attrs:{icon:"mdi-account-multiple",title:"Consultas Ventas",pos:"5",to:"/consultasVentas"}})],1)],1)],2)],1)],1)},l=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list-item",{attrs:{to:t.to}},["1"===t.pos?n("v-list-item-icon",[n("v-icon",[t._v(t._s(t.icon))])],1):t._e(),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.title))])],1),"2"===t.pos?n("v-list-item-icon",[n("v-icon",[t._v(t._s(t.icon))])],1):t._e()],1)},u=[],d={name:"menu-item",props:{icon:String,title:String,pos:{type:String,default:"1"},to:String}},v=d,m=n("2877"),p=n("6544"),f=n.n(p),h=n("132d"),b=n("da13"),k=n("5d23"),g=n("34c3"),y=Object(m["a"])(v,c,u,!1,null,null,null),_=y.exports;f()(y,{VIcon:h["a"],VListItem:b["a"],VListItemContent:k["a"],VListItemIcon:g["a"],VListItemTitle:k["c"]});var C={components:{MenuItem:_},data:function(){return{selectedItem:0,drawer:!0}},methods:{salir:function(){this.$store.dispatch("setToken",""),console.log(this.$store.state.token),this.$router.push("/login")}}},x=C,w=n("40dc"),V=n("5bc1"),I=n("8336"),S=n("ce7e"),L=n("8860"),P=n("56b0"),O=n("1baa"),A=n("e449"),j=n("f774"),E=n("2fa4"),D=n("2a7f"),T=Object(m["a"])(x,r,l,!1,null,null,null),$=T.exports;f()(T,{VAppBar:w["a"],VAppBarNavIcon:V["a"],VBtn:I["a"],VDivider:S["a"],VList:L["a"],VListGroup:P["a"],VListItem:b["a"],VListItemGroup:O["a"],VListItemTitle:k["c"],VMenu:A["a"],VNavigationDrawer:j["a"],VSpacer:E["a"],VToolbarTitle:D["a"]});var M=n("2f62"),N={name:"App",components:{Navbar:$},computed:Object(o["a"])({},Object(M["b"])(["token"])),data:function(){return{}}},B=N,R=n("7496"),U=n("a75b"),F=Object(m["a"])(B,i,s,!1,null,null,null),z=F.exports;f()(F,{VApp:R["a"],VContent:U["a"]});n("d3b7"),n("3ca3"),n("ddb0");var J=n("8c4f");a["a"].use(M["a"]);var H=new M["a"].Store({state:{token:null,usuario:null,rol:""},mutations:{setToken:function(t,e){t.token=e},setUsuario:function(t,e){t.usuario=e},setRol:function(t,e){t.rol=e}},actions:{setToken:function(t,e){t.commit("setToken",e.token),t.commit("setUsuario",e.usuario)},setRol:function(t,e){t.commit("setRol",e)}},modules:{},getters:{header:function(t){return{headers:{token:t.token}}}}}),W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{style:{background:t.$vuetify.theme.themes.light.background}},[n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{md3:""}},[n("v-app",{style:{background:t.$vuetify.theme.themes.light.background}},[n("v-container",[n("v-flex",[n("v-card",{staticClass:"ma-5 text-center mt-10",attrs:{shaped:"",elevation:"10"}},[n("v-card-title",{staticClass:"layout justify-center"},[t._v("Besw")]),n("v-card-subtitle",{staticClass:"layout justify-center"},[t._v("24 Articulos")]),n("v-list",[n("v-list-item",[n("v-list-item-title",{staticClass:"cyan--text text--darken-1"},[t._v("Producto")]),n("v-list-item-title",{staticClass:"cyan--text text--darken-1"},[t._v("Tamaño")]),n("v-list-item-title",{staticClass:"cyan--text text--darken-1"},[t._v("Peso")])],1),n("v-list-item",{staticClass:"mt-n5"},[n("v-list-item-subtitle",[t._v("Lacteos")]),n("v-list-item-subtitle",[t._v("170 cm")]),n("v-list-item-subtitle",[t._v("1 Kg")])],1)],1)],1)],1),n("v-flex",[n("v-list",{staticClass:"text-center",attrs:{color:"transparent"}},[n("v-list-item",[n("v-list-item-title",{staticClass:"cyan--text text--darken-1"},[t._v("Productos")]),n("v-list-item-subtitle",[t._v("32 Productos")])],1)],1)],1),n("v-flex",[n("v-card",{staticClass:"ma-5",attrs:{shaped:"",elevation:"10"}},[n("v-list",[n("v-list-item",[n("v-list-item-avatar",{attrs:{size:"10",color:"cyan darken-1"}}),n("v-list-item-title",{staticClass:"ml-n2"},[t._v("Peras")]),n("v-list-item-subtitle",[t._v("10 ")])],1),n("v-list-item",[n("v-list-item-title",{staticClass:"cyan--text text--darken-1"},[t._v("Unidad")]),n("v-list-item-title",{staticClass:"cyan--text text--darken-1"},[t._v("Docena")]),n("v-list-item-title",{staticClass:"cyan--text text--darken-1"},[t._v("Precio")])],1),n("v-list-item",{staticClass:"mt-n5"},[n("v-list-item-subtitle",[t._v("Nombre del Cliente")])],1),n("v-divider")],1),n("v-list",{attrs:{"two-line":"",subheader:""}},[n("v-list-item",[n("v-list-item-content",{staticClass:"ml-5"},[n("v-list-item-title"),n("v-list-item-subtitle",[t._v("Super Mercado Besw")])],1)],1)],1),n("v-list",{staticClass:"mt-n5",attrs:{"two-line":"",subheader:""}},[n("v-list-item",[n("v-list-item-content",{staticClass:"ml-5"},[n("v-list-item-title",[t._v("Mejor Calidad")]),n("v-list-item-subtitle",[t._v("Santander-Aratoca")])],1)],1)],1),n("v-list",{staticClass:"mt-n8",attrs:{"two-line":"",subheader:""}},[n("v-list-item",{staticClass:"ml-5"},[n("v-list-item-title",{staticClass:"cyan--text text--darken-1"},[t._v("Datos")])],1),n("v-list-item",{staticClass:"ml-5"},[n("v-list-item-title",[t._v("21 de mayo 2021")])],1)],1)],1)],1),n("v-flex",[n("v-card",{staticClass:"ma-5 text-center mt-12",attrs:{shaped:"",elevation:"10"}},[n("v-list-item",{attrs:{"three-line":""}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"headline mb-1"},[n("v-list-item-title",[t._v("Código de Barras")])],1),n("v-list-item-subtitle",[t._v("2346457865")])],1),n("v-list-item-avatar",{attrs:{size:"60",color:"cyan darken-1"}},[n("v-icon",{attrs:{color:"white"}},[t._v("fas fa-plus")])],1)],1)],1)],1)],1)],1)],1),n("v-flex",{attrs:{md9:""}},[n("v-app",{staticClass:"rounded",style:{background:t.$vuetify.theme.themes.dark.background}},[n("v-container",[n("v-flex",[n("v-list",{staticClass:"mt-5"},[n("v-list-item",[n("v-list-item-title",{staticClass:"cyan--text text--darken-1"},[t._v("Fechas a Entregar")])],1)],1)],1),n("v-flex",[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"2"}},[n("v-card",{attrs:{height:"80px",width:"10px",color:"green"}})],1),n("v-col",{attrs:{cols:"12",md:"10"}},[n("v-list",{staticClass:"ml-n8",attrs:{"two-line":"",subheader:""}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-subtitle",[t._v("21 mayo, 2021")]),n("v-list-item-title",[t._v("Docena Manzanas")]),n("v-list-item-subtitle",[t._v("Supermercado Besw")])],1)],1)],1)],1)],1)],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"2"}},[n("v-card",{attrs:{height:"80px",width:"10px",color:"red"}})],1),n("v-col",{attrs:{cols:"12",md:"10"}},[n("v-list",{staticClass:"ml-n8",attrs:{"two-line":"",subheader:""}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-subtitle",[t._v("10 Junio, 2021")]),n("v-list-item-title",[t._v("Unidad Piña")]),n("v-list-item-subtitle",[t._v("Supermercado Besw")])],1)],1)],1)],1)],1)],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"2"}},[n("v-card",{attrs:{height:"80px",width:"10px",color:"grey"}})],1),n("v-col",{attrs:{cols:"12",md:"10"}},[n("v-list",{staticClass:"ml-n8",attrs:{"two-line":"",subheader:""}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-subtitle",[t._v("22 Junio, 2021")]),n("v-list-item-title",[t._v("Unidad de Duraznos")]),n("v-list-item-subtitle",[t._v("Supermercado Besw")])],1)],1)],1)],1)],1)],1)],1)],1),n("v-flex",[n("v-list",{staticClass:"mt-5"},[n("v-list-item",[n("v-list-item-title",{staticClass:"cyan--text text--darken-1"},[t._v("Health Curve")]),n("v-item-content",[n("v-btn",{staticClass:"mr-1",attrs:{outlined:"",color:"cyan darken-1"}},[t._v("D")])],1),n("v-item-content",[n("v-btn",{staticClass:"mr-1",attrs:{outlined:"",color:"cyan darken-1"}},[t._v("W")])],1),n("v-item-content",[n("v-btn",{staticClass:"mr-1",attrs:{outlined:"",color:"cyan darken-1"}},[t._v("M")])],1),n("v-item-content",[n("v-btn",{attrs:{outlined:"",color:"cyan darken-1"}},[t._v("Y")])],1)],1)],1)],1),n("v-flex",[n("v-sparkline",{attrs:{value:t.value,gradient:t.medium,smooth:t.radius||!1,padding:t.padding,"line-width":t.width,"stroke-linecap":t.lineCap,"gradient-direction":t.gradientDirection,fill:t.fill,type:t.type,"auto-line-width":t.autoLineWidth,"auto-draw":""}})],1),n("v-flex",{staticClass:"mt-5"},[n("v-list",{staticClass:"ml-5"},[n("v-list-item",[n("v-list-item-avatar",{attrs:{color:"cyan darken-1",size:"20px"}}),n("v-list-item-title",[t._v("Calendario Del Supermercado")])],1)],1)],1),n("v-flex",[n("v-list",{staticClass:"center-ml-4"},[n("v-list-item",[n("v-list-item-title",{staticClass:"cyan--text text--darken-1"},[t._v("Tratamiento más cercano")])],1)],1)],1),n("v-flex",{staticClass:"ml-12"},[n("v-row",[n("div",[n("v-date-picker",{attrs:{"event-color":function(t){return t[9]%2?"red":"yellow"},events:t.functionEvents},model:{value:t.date2,callback:function(e){t.date2=e},expression:"date2"}})],1)])],1)],1)],1)],1)],1)],1)},q=[],G=n("3835"),K=n("2909"),Y=(n("d81d"),n("ac1f"),n("1276"),n("caad"),[["#222"],["#42b3f4"],["red","orange","yellow"],["purple","violet"],["#00c6ff","#F0F","#FF0"],["#f72047","#ffd200","#1feaea"]]),Q={data:function(){return{width:2,radius:10,padding:8,lineCap:"round",gradient:Y[5],value:[0,2,5,9,5,10,3,5,0,0,1,8,2,9,0],gradientDirection:"top",gradients:Y,fill:!1,type:"trend",autoLineWidth:!1,arrayEvents:null,date2:(new Date).toISOString().substr(0,10)}},created:function(){console.log("Hola este es mi rol "+this.$store.state.rol)},computed:{theme:function(){return this.$vuetify.theme.dark?"dark":"light"}},mounted:function(){this.arrayEvents=Object(K["a"])(Array(6)).map((function(){var t=Math.floor(30*Math.random()),e=new Date;return e.setDate(t),e.toISOString().substr(0,10)}))},methods:{functionEvents:function(t){var e=t.split("-"),n=Object(G["a"])(e,3),a=n[2];return!![12,17,28].includes(parseInt(a,10))||!![1,19,22].includes(parseInt(a,10))&&["red","#00f"]}}},X=Q,Z=(n("f4b2"),n("b0af")),tt=n("99d9"),et=n("62ad"),nt=n("a523"),at=n("2e4b"),it=n("0e8f"),st=n("a722"),ot=n("8270"),rt=n("0fd9"),lt=n("7f2e"),ct=Object(m["a"])(X,W,q,!1,null,"4f19a054",null),ut=ct.exports;f()(ct,{VApp:R["a"],VBtn:I["a"],VCard:Z["a"],VCardSubtitle:tt["b"],VCardTitle:tt["d"],VCol:et["a"],VContainer:nt["a"],VDatePicker:at["a"],VDivider:S["a"],VFlex:it["a"],VIcon:h["a"],VLayout:st["a"],VList:L["a"],VListItem:b["a"],VListItemAvatar:ot["a"],VListItemContent:k["a"],VListItemSubtitle:k["b"],VListItemTitle:k["c"],VRow:rt["a"],VSparkline:lt["a"]}),a["a"].use(J["a"]);var dt=[{path:"/",name:"home",component:ut},{path:"/about",name:"about",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/login",name:"Login",component:function(){return Promise.all([n.e("chunk-07709945"),n.e("chunk-7bc02fc4")]).then(n.bind(null,"a55b"))}},{path:"/categorias",name:"Categorias",component:function(){return Promise.all([n.e("chunk-07709945"),n.e("chunk-05df075b"),n.e("chunk-2d22c2ef")]).then(n.bind(null,"f1c1"))}},{path:"/articulos",name:"Articulos",component:function(){return Promise.all([n.e("chunk-07709945"),n.e("chunk-05df075b"),n.e("chunk-2d0ac190")]).then(n.bind(null,"17a5"))}},{path:"/ingresos",name:"Ingresos",component:function(){return Promise.all([n.e("chunk-07709945"),n.e("chunk-05df075b"),n.e("chunk-2d0aeedd")]).then(n.bind(null,"0bc8"))}},{path:"/proveedores",name:"Proveedores",component:function(){return Promise.all([n.e("chunk-07709945"),n.e("chunk-05df075b"),n.e("chunk-2d225db2")]).then(n.bind(null,"e5d0"))}},{path:"/ventas",name:"Ventas",component:function(){return Promise.all([n.e("chunk-07709945"),n.e("chunk-05df075b"),n.e("chunk-2d22901b")]).then(n.bind(null,"dc39"))}},{path:"/clientes",name:"Clientes",component:function(){return Promise.all([n.e("chunk-07709945"),n.e("chunk-05df075b"),n.e("chunk-2d0d6393")]).then(n.bind(null,"7246"))}},{path:"/usuario",name:"Usuarios",component:function(){return Promise.all([n.e("chunk-07709945"),n.e("chunk-05df075b"),n.e("chunk-2d0a3389")]).then(n.bind(null,"00f9"))}}],vt=new J["a"]({mode:"history",base:"/",routes:dt});vt.beforeEach((function(t,e,n){H.state.token||"/login"==t.path?n():n({name:"Login"})}));var mt=vt,pt=n("bc3a"),ft=n.n(pt),ht=n("3d20"),bt=n.n(ht),kt=(n("5363"),n("d1e78"),n("f309")),gt=n("cb43"),yt=n("fcf4");a["a"].use(gt["default"]),a["a"].use(kt["a"]);var _t=new kt["a"]({icons:{iconfont:"md"},theme:{themes:{light:{background:yt["a"].grey.lighten2},dark:{background:yt["a"].shades.white}}}});ft.a.defaults.baseURL="https://fullstack-proyecto.herokuapp.com/api/",a["a"].config.productionTip=!1,new a["a"]({router:mt,store:H,vuetify:_t,Swal:bt.a,render:function(t){return t(z)}}).$mount("#app")},"9b2c":function(t,e,n){},f4b2:function(t,e,n){"use strict";n("9b2c")}});
//# sourceMappingURL=app.b7bba642.js.map