(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22901b"],{dc39:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",{attrs:{id:"inspire"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.ventas,"sort-by":"nombre"},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[t._v("Ventas")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"mb-2",attrs:{color:"teal accent-3",dark:""},on:{click:function(e){t.editedItem={},t.x=0}}},"v-btn",i,!1),o),[t._v(" Nuevo ")]),a("v-btn",{staticClass:"mb-2",attrs:{color:"teal accent-3",dark:""},on:{click:function(e){return t.crearPDF()}}},[t._v("Imprimir")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.titulo))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Usuario"},model:{value:t.editedItem.usuario,callback:function(e){t.$set(t.editedItem,"usuario",e)},expression:"editedItem.usuario"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Persona"},model:{value:t.editedItem.persona,callback:function(e){t.$set(t.editedItem,"persona",e)},expression:"editedItem.persona"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Tipo Comprobante"},model:{value:t.editedItem.tipoComprobante,callback:function(e){t.$set(t.editedItem,"tipoComprobante",e)},expression:"editedItem.tipoComprobante"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Serie Comprobante"},model:{value:t.editedItem.serieComprobante,callback:function(e){t.$set(t.editedItem,"serieComprobante",e)},expression:"editedItem.serieComprobante"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Número Comprobante"},model:{value:t.editedItem.numComprobante,callback:function(e){t.$set(t.editedItem,"numComprobante",e)},expression:"editedItem.numComprobante"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Impuesto"},model:{value:t.editedItem.impuesto,callback:function(e){t.$set(t.editedItem,"impuesto",e)},expression:"editedItem.impuesto"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Total"},model:{value:t.editedItem.total,callback:function(e){t.$set(t.editedItem,"total",e)},expression:"editedItem.total"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Estado"},model:{value:t.editedItem.state,callback:function(e){t.$set(t.editedItem,"state",e)},expression:"editedItem.state"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Cancelar ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.guardar}},[t._v(" Guardar ")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"300px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Are you sure you want to delete this item?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("Cancelar")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.deleteItemConfirm}},[t._v("Guardar")]),a("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.opciones",fn:function(e){var o=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{color:"teal accent-3",small:""},on:{click:function(e){return t.editar(o)}}},[t._v(" mdi-pencil ")]),o.estado?[a("v-icon",{attrs:{small:""},on:{click:function(e){return t.activarDesactivarMostrar(2,o)}}},[t._v(" mdi-block-helper ")])]:[a("v-icon",{attrs:{small:""},on:{click:function(e){return t.activarDesactivarMostrar(1,o)}}},[t._v(" mdi-check ")])]]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v(" Reset ")])]},proxy:!0}],null,!0)})],1)],1)},i=[],s=(a("d81d"),a("bc3a")),n=a.n(s),r=a("8baf"),l=(a("0da4"),{data:function(){return{x:0,ventas:[],dialog:!1,headers:[{align:"start",sortable:!1,value:"nombre"},{text:"Usuario",value:"usuario.nombre"},{text:"Persona",value:"persona.nombre"},{text:"Tipo Comprobante",value:"tipoComprobante"},{text:"Serie Comprobante",value:"serieComprobante"},{text:"Número Comprobante",value:"numComprobante"},{text:"Impuesto",value:"impuesto"},{text:"Total",value:"total"},{text:"Estado",value:"state"},{text:"Opciones",value:"opciones",sortable:!1}],editedItem:{usuario:0,persona:0,tipoComprobante:0,serieComprobante:0,numComprobante:0,impuesto:0,total:0,state:0}}},computed:{titulo:function(){return 0==this.x?"Nuevo":"Editar"}},created:function(){this.listar()},methods:{listar:function(){var t=this;n.a.get("ventas",t.$store.getters.header).then((function(e){t.ventas=e.data.ventas})).catch()},guardar:function(){var t=this;if(0==this.x){console.log("Estoy guardando"+this.x);var e={headers:{token:this.$store.state.token}},a=this;n.a.post("ventas",{usuario:this.editedItem.usuario,persona:this.editedItem.persona,tipoComprobante:this.editedItem.tipoComprobante,serieComprobante:this.editedItem.serieComprobante,numComprobante:this.editedItem.numComprobante,impuesto:this.editedItem.impuesto,total:this.editedItem.total,state:this.editedItem.state},e).then((function(e){console.log(e),a.listar(),t.dialog=!1})).catch((function(t){console.log(t.response)}))}else{var o={headers:{token:this.$store.state.token}},i=this;n.a.put("ventas/".concat(i.id),{usuario:i.editedItem.usuario,persona:i.editedItem.persona,tipoComprobante:i.editedItem.tipoComprobante,serieComprobante:i.editedItem.serieComprobante,numComprobante:i.editedItem.numComprobante,impuesto:i.editedItem.impuesto,total:i.editedItem.total,state:i.editedItem.state},o).then((function(){i.listar(),i.dialog=!1})).catch((function(t){console.log(t)}))}},editar:function(t){this.x=1,console.log(t),this.id=t._id,this.editedItem=Object.assign({},t),this.dialog=!0},crearPDF:function(){var t=[{title:"usuario",dataKey:"usuario"},{title:"persona",dataKey:"persona"},{title:"tipoComprobante",dataKey:"tipoComprobante"},{title:"serieComprobante",dataKey:"serieComprobante"},{title:"numComprobante",dataKey:"numComprobante"},{title:"impuesto",dataKey:"impuesto"},{title:"total",dataKey:"total"},{title:"state",dataKey:"state"}],e=[];this.ventas.map((function(t){e.push({usuario:t.usuario,persona:t.persona,tipoComprobante:t.tipoComprobante,serieComprobante:t.serieComprobante,numComprobante:t.numComprobante,impuesto:t.impuesto,total:t.total,state:t.state})}));var a=new r["default"]("p","pt");a.autoTable(t,e,{margin:{top:60},addPageContent:function(){a.text("Lista de ventas",40,30)}}),a.save("Articulos.pdf")},activarDesactivarMostrar:function(t,e){var a=e._id;if(console.log(t),2==t){console.log(a);var o=this,i={headers:{token:this.$store.state.token}};n.a.put("ventas/desactivar/".concat(a),{estado:0},i).then((function(){o.listar(),console.log("Hola")})).catch((function(t){console.log(t)}))}else if(1==t){console.log(a);var s=this,r={headers:{token:this.$store.state.token}};n.a.put("ventas/activar/".concat(a),{estado:1},r).then((function(){s.listar(),console.log("Bienvenido")})).catch((function(t){console.log(t)}))}}}}),d=l,c=a("2877"),m=a("6544"),u=a.n(m),p=a("7496"),v=a("8336"),b=a("b0af"),f=a("99d9"),C=a("62ad"),h=a("a523"),x=a("8fea"),I=a("169a"),k=a("ce7e"),g=a("132d"),_=a("0fd9"),y=a("2fa4"),V=a("8654"),$=a("71d9"),w=a("2a7f"),D=Object(c["a"])(d,o,i,!1,null,null,null);e["default"]=D.exports;u()(D,{VApp:p["a"],VBtn:v["a"],VCard:b["a"],VCardActions:f["a"],VCardText:f["c"],VCardTitle:f["d"],VCol:C["a"],VContainer:h["a"],VDataTable:x["a"],VDialog:I["a"],VDivider:k["a"],VIcon:g["a"],VRow:_["a"],VSpacer:y["a"],VTextField:V["a"],VToolbar:$["a"],VToolbarTitle:w["a"]})}}]);
//# sourceMappingURL=chunk-2d22901b.e0fbc08a.js.map