(function(t){function e(e){for(var a,i,r=e[0],l=e[1],c=e[2],u=0,p=[];u<r.length;u++)i=r[u],o[i]&&p.push(o[i][0]),o[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},o={app:0},s=[];function i(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"56abedf8"}[t]+".js"}function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,a){n=o[t]=[e,a]});e.push(n[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=i(t),s=function(e){l.onerror=l.onload=null,clearTimeout(c);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+a+": "+s+")");i.type=a,i.request=s,n[1](i)}o[t]=void 0}};var c=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/cb/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),o=n("bb71");n("da64");a["a"].use(o["a"],{iconfont:"md"});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-toolbar",{attrs:{app:""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[t._v("\n      bike docks\n    ")]),n("v-spacer"),n("v-toolbar-items",[n("EditDocks",{attrs:{selected_docks:t.stids,station_info:t.station_info,station_list:t.station_list}})],1)],1),n("v-content",[n("BikeDocks",{attrs:{station_info:t.station_info}})],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[t.last_updated&&t.now?n("div",[n("span",[t._v("Updated "+t._s(t.now-t.last_updated)+" seconds ago")]),n("v-btn",{attrs:{flat:"",disabled:t.now-t.last_updated<t.ttl,icon:"",color:"green"},on:{click:t.fetchStationStatus}},[n("v-icon",[t._v("refresh")])],1)],1):t._e(),t.loaded?n("v-list",{attrs:{"two-line":""}},[t._l(t.station_ids,function(e){return[n("dock",{key:e,attrs:{stid:e,status:t.station_status.get(e),info:t.station_info.get(e)}})]})],2):t._e()],1)},l=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list-tile",[n("v-list-tile-title",[t.info?n("span",[t._v(t._s(t.info.name))]):t._e(),t._v(" ("+t._s(t.stid)+")\n  ")]),n("v-list-tile-content",[t.status?n("span",[t._v("\n            bikes: "+t._s(t.status.num_bikes_available)+"\n            ebikes: "+t._s(t.status.num_ebikes_available)+"\n            docks: "+t._s(t.status.num_docks_available)+"\n    ")]):n("span",[t._v("\n            No data\n    ")])])],1)},u=[],d={props:{status:Object,info:Object,stid:String}},p=d,f=n("2877"),_=n("6544"),h=n.n(_),v=n("ba95"),b=n("5d23"),m=Object(f["a"])(p,c,u,!1,null,null,null),k=m.exports;h()(m,{VListTile:v["a"],VListTileContent:b["a"],VListTileTitle:b["b"]});var g={data:()=>({last_updated:null,now:null,loaded:!1,station_status:new Map,ttl:null}),props:{station_info:Map},components:{Dock:k},computed:{station_ids(){return"stid"in this.$route.params?this.$route.params.stid.split("+"):[]}},watch:{station_ids(){this.fetchStationStatus()}},methods:{fetchStationStatus(){fetch("https://gbfs.citibikenyc.com/gbfs/en/station_status.json").then(t=>t.json()).then(t=>{for(var e of t.data.stations)this.station_ids.includes(e.station_id)&&this.station_status.set(e.station_id,e);this.last_updated=t.last_updated,this.loaded=!0,this.ttl=t.ttl})},updateNow(){const t=()=>{this.now=Date.now()/1e3|0};t(),setInterval(t,1e3)}},created(){this.updateNow(),this.fetchStationStatus()}},w=g,y=n("8336"),j=n("a523"),S=n("132d"),V=n("8860"),x=Object(f["a"])(w,r,l,!1,null,null,null),O=x.exports;h()(x,{VBtn:y["a"],VContainer:j["a"],VIcon:S["a"],VList:V["a"]});var T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{fullscreen:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({},a),[t._v("Edit Docks")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[t._v("Select Docks")]),n("v-card-text",[n("multiselect",{attrs:{"custom-label":t.info,options:t.station_list,multiple:!0,"allow-empty":!1},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),n("v-spacer"),n("v-card-actions",[n("v-btn",{attrs:{color:"primary"},on:{click:t.done}},[t._v("Done")])],1)],1)],1)},D=[],$=n("8e5f"),E=n.n($),C={data:()=>({dialog:!1,selected:[]}),props:["station_list","station_info","selected_docks"],watch:{selected_docks:function(){this.update_selected()}},components:{Multiselect:E.a},created(){this.update_selected()},methods:{info(t){const e=this.station_info.get(t);return e?e.name:""},update_selected:function(t){this.selected=this.selected_docks},done(){this.$router.push({name:"docks",params:{stid:this.selected.join("+")}}),this.dialog=!1}}},M=C,P=(n("60bc"),n("b0af")),I=n("99d9"),L=n("12b2"),B=n("169a"),A=n("9910"),N=Object(f["a"])(M,T,D,!1,null,null,null),J=N.exports;h()(N,{VBtn:y["a"],VCard:P["a"],VCardActions:I["a"],VCardText:I["b"],VCardTitle:L["a"],VDialog:B["a"],VSpacer:A["a"]});var q={name:"DockStatus",data:()=>({station_info:new Map,station_list:[]}),components:{BikeDocks:O,EditDocks:J},computed:{stids(){const t=this.$route.params.stid;return t?t.split("+"):[]}},methods:{fetchStationInfo(){fetch("https://gbfs.citibikenyc.com/gbfs/en/station_information.json").then(t=>t.json()).then(t=>{let e=[];for(var n of t.data.stations)this.station_info.set(n.station_id,{name:n.name}),e.push(n.station_id);this.station_list=e})}},created(){this.fetchStationInfo()}},U=q,z=n("7496"),F=n("549c"),G=n("71d9"),H=n("2a7f"),K=Object(f["a"])(U,s,i,!1,null,null,null),Q=K.exports;h()(K,{VApp:z["a"],VContent:F["a"],VSpacer:A["a"],VToolbar:G["a"],VToolbarItems:H["a"],VToolbarTitle:H["b"]});var R=n("8c4f"),W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("nope")])},X=[],Y={created(){this.$router.push({name:"docks",params:{stid:[]}})}},Z=Y,tt=Object(f["a"])(Z,W,X,!1,null,null,null),et=tt.exports;a["a"].use(R["a"]);var nt=new R["a"]({routes:[{path:"/",name:"home",component:et},{path:"/d/:stid",name:"docks",component:et},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]});a["a"].config.productionTip=!1,new a["a"]({router:nt,render:function(t){return t(Q)}}).$mount("#app")}});
//# sourceMappingURL=app.97ec1f2b.js.map