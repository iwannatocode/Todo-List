(function(){"use strict";var t={7103:function(t,e,n){var o=n(144),r=function(){var t=this,e=t._self._c;return e("v-app",{attrs:{id:"inspire"}},[e("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e("v-system-bar"),e("v-list",[e("v-list-item",{staticClass:"d-flex justify-center"},[e("v-list-item-avatar",[e("v-img",{attrs:{src:"images/user-icon.png",alt:"ERR"}})],1)],1),e("v-list-item",[e("v-list-item-content",[e("v-list-item-title",{staticClass:"text-h6 d-flex justify-center"},[t._v(t._s(t.newUser))])],1)],1)],1),e("v-divider"),e("v-list",{attrs:{nav:"",dense:""}},[e("v-list-item-group",{attrs:{color:"primary"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},t._l(t.items,(function(n,o){return e("v-list-item",{key:o,attrs:{to:n.path}},[e("v-list-item-icon",[e("v-icon",{domProps:{textContent:t._s(n.icon)}})],1),e("v-list-item-content",[e("v-list-item-title",{domProps:{textContent:t._s(n.text)}})],1)],1)})),1)],1)],1),e("v-app-bar",{staticClass:"app-bar",attrs:{app:"",absolute:"",color:"primary",dark:"","shrink-on-scroll":"",src:"https://picsum.photos/1920/1080?random","scroll-target":"#scrolling-techniques-2"},scopedSlots:t._u([{key:"img",fn:function({props:n}){return[e("v-img",t._b({attrs:{gradient:"to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"}},"v-img",n,!1))]}}])},[e("v-container",[e("v-row",{},[e("v-col",{staticClass:"d-flex justify-start"},[e("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}},[e("v-icon",{staticClass:"iconDrawer"},[t._v("mdi-menu")])],1)],1),e("v-col",{staticClass:"d-flex justify-end"},[e("v-btn",{attrs:{icon:""}},[e("v-icon",{on:{click:t.todoSearch}},[t._v("mdi-magnify")])],1)],1)],1)],1),e("v-col",[e("v-app-bar-title",{staticClass:"bar-title d-flex justify-center"},[t._v("Todo APP")])],1)],1),e("v-main",[e("v-sheet",{staticClass:"overflow-y-auto",attrs:{id:"scrolling-techniques-2","max-height":"100vh"}},[e("v-container",[e("router-view")],1)],1)],1)],1)},i=[],a=n(629),s={data:()=>({drawer:!1,newUser:"User Name",selectedItem:0,items:[{text:"My List",icon:"mdi-format-list-checks",path:"/"},{text:"About",icon:"mdi-help-box",path:"/about"}]}),computed:{...(0,a.rn)(["todoData"])},methods:{...(0,a.nv)(["actualizationTodoData"]),todoSearch(){}},mounted(){let t=localStorage.getItem("todoRegistred");null!==t&&this.actualizationTodoData()}},u=s,c=n(1001),l=n(3453),d=n.n(l),f=n(998),m=n(6843),p=n(5550),v=n(6312),h=n(6570),g=n(266),b=n(2150),y=n(9223),w=n(4324),Z=n(5495),C=n(5808),k=n(4525),I=n(523),V=n(7816),L=n(982),x=n(4611),_=n(3059),T=n(6975),D=n(1713),P=n(7423),S=n(7823),j=(0,c.Z)(u,r,i,!1,null,null,null),A=j.exports;d()(j,{VApp:f.Z,VAppBar:m.Z,VAppBarNavIcon:p.Z,VAppBarTitle:v.Z,VBtn:h.Z,VCol:g.Z,VContainer:b.Z,VDivider:y.Z,VIcon:w.Z,VImg:Z.Z,VList:C.Z,VListItem:k.Z,VListItemAvatar:I.Z,VListItemContent:V.km,VListItemGroup:L.Z,VListItemIcon:x.Z,VListItemTitle:V.V9,VMain:_.Z,VNavigationDrawer:T.Z,VRow:D.Z,VSheet:P.Z,VSystemBar:S.Z});var O=n(8345);o.ZP.use(O.Z);const N=[{path:"/",name:"home",component:()=>n.e(177).then(n.bind(n,181))},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,1461))}],E=new O.Z({mode:"history",base:"/Todo-List/",routes:N});var B=E;o.ZP.use(a.ZP);var z=new a.ZP.Store({state:{todoData:[]},getters:{todoList(t){return t.todoData}},mutations:{actualizationTodoData(t,e){t.todoData=[...e]},putNewListItem(t,e){t.todoData.push(e)},deleteListItem(t,e){t.todoData=t.todoData.filter((t=>t.id!=e))}},actions:{actualizationTodoData({commit:t}){let e=localStorage.getItem("todoData");e=JSON.parse(e),t("actualizationTodoData",e)},putNewListItem({commit:t},e){t("putNewListItem",e)},deleteListItem({commit:t},e){t("deleteListItem",e)}},modules:{}}),M=n(6560);o.ZP.use(M.Z);var q=new M.Z({});o.ZP.config.productionTip=!1,new o.ZP({router:B,store:z,vuetify:q,render:t=>t(A)}).$mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,i){if(!o){var a=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],i=t[l][2];for(var s=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[u])}))?o.splice(u--,1):(s=!1,i<a&&(a=i));if(s){t.splice(l--,1);var c=r();void 0!==c&&(e=c)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[o,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+{177:"home",443:"about"}[t]+"."+{177:"3c1f7164",443:"95cf7fc6"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+{177:"home",443:"about"}[t]+"."+{177:"c7eede6e",443:"8184dac1"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="vuetify-app:";n.l=function(o,r,i,a){if(t[o])t[o].push(r);else{var s,u;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==e+i){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+i),s.src=o),t[o]=[r];var f=function(e,n){s.onerror=s.onload=null,clearTimeout(m);var r=t[o];if(delete t[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/Todo-List/"}(),function(){var t=function(t,e,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=s,r.parentNode.removeChild(r),o(u)}};return r.onerror=r.onload=i,r.href=e,document.head.appendChild(r),r},e=function(t,e){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===t||i===e))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===t||i===e)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),s=n.p+a;if(e(a,s))return r();t(o,s,r,i)}))},r={143:0};n.f.miniCss=function(t,e){var n={177:1,443:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=o(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,o){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=t[e]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(e),s=new Error,u=function(o){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,r[1](s)}};n.l(a,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,a=o[0],s=o[1],u=o[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(u)var l=u(n)}for(e&&e(o);c<a.length;c++)i=a[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},o=self["webpackChunkvuetify_app"]=self["webpackChunkvuetify_app"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7103)}));o=n.O(o)})();
//# sourceMappingURL=app.46d384f6.js.map