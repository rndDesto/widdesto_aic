(this.webpackJsonpreactappstarter=this.webpackJsonpreactappstarter||[]).push([[5],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var a=n(116),r=n(0),c=n.n(r),i=n(91),u=n(94),o=n(76),l=n(29),s=n(175),f=n(168),m=n(169),p=n(170),d=n(171),v=n(172),E=n(95),b=n(90),g=n(93),h=n.n(g),k=Object(o.a)((function(e){return{postercontainer:{backgroundColor:"#fafafa",display:"flex",justifyContent:"center",marginBottom:e.spacing(2)},posterTitle:{marginBottom:e.spacing(2)}}})),O=function(){var e=k(),t=Object(r.useState)([]),n=Object(a.a)(t,2),o=n[0],g=n[1],O=Object(r.useState)({}),j=Object(a.a)(O,2),y=j[0],x=j[1],w=Object(r.useState)(!1),I=Object(a.a)(w,2),P=I[0],S=I[1];Object(r.useEffect)((function(){var e=Object(i.a)();e&&g(JSON.parse(e))}),[]);var C=function(e){Object(b.a)(e).then((function(e){S(!0),x(e)})).catch((function(e){alert(e.message)}))},D=function(){S(!1)},T=function(e){var t=JSON.parse(Object(i.a)()),n=t.findIndex((function(t){return t.imdbID===e.imdbID}));t.splice(n,1),Object(i.b)(JSON.stringify(t)),g(t)},J=[{heading:"Title",value:function(e){return function(e){return c.a.createElement(l.a,{onClick:function(){return C(e.imdbID)}},e.Title)}(e)}},{heading:"Year",value:"Year"},{heading:"ID",value:"imdbID"},{heading:"",value:function(e){return function(e){return c.a.createElement(s.a,{title:"remove favorite"},c.a.createElement(f.a,{id:"konfirmasi-".concat(e.imdbID),onClick:function(){return T(e)}},c.a.createElement("img",{alt:h.a,src:h.a})))}(e)}}],N=[];return 0!==Object.keys(y).length&&["Year","Released","Director","Actors","Plot","Awards"].forEach((function(e,t){var n=c.a.createElement(r.Fragment,{key:t},c.a.createElement(m.a,{item:!0,xs:2},c.a.createElement(l.a,null,e)),c.a.createElement(m.a,{item:!0,xs:10},y[e]));N.push(n)})),c.a.createElement("div",null,0!==o.length?c.a.createElement(u.a,{column:J,data:o}):c.a.createElement(p.a,null,c.a.createElement(l.a,null,"Anda tidak memiliki Favorite")),c.a.createElement(E.a,{inputProps:{open:P,onClose:D}},c.a.createElement(d.a,null,c.a.createElement(m.a,{container:!0},c.a.createElement(m.a,{item:!0,xs:12},c.a.createElement("div",{className:e.postercontainer},c.a.createElement("img",{alt:y.Title,src:y.Poster}))),c.a.createElement(m.a,{item:!0,xs:12},c.a.createElement(l.a,{className:e.posterTitle,variant:"h5"},y.Title),c.a.createElement(m.a,{container:!0,spacing:2},N)))),c.a.createElement(v.a,null,c.a.createElement(f.a,{color:"primary",onClick:D},"Close"))))}},90:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return f}));var a=n(100),r=n.n(a),c=n(101),i=n(102),u=n.n(i),o="http://www.omdbapi.com",l=function(e,t,n,a){return new Promise((function(r,c){u.a[t](e,n,a).then((function(e){return r(e.data)})).catch((function(e){var t={code:500,status:"error",message:"Failed to fetch data. Please contact developer."};e.response&&e.response.data?c(e.response.data):c(t)}))}))},s=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("".concat(o,"/?s=").concat(t,"&plot=full&apikey=761befef"),"get");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("".concat(o,"/?i=").concat(t,"&apikey=761befef"),"get");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},91:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));function a(e){localStorage.setItem("fav_novie",e)}function r(){return localStorage.getItem("fav_novie")}},93:function(e,t,n){e.exports=n.p+"static/media/star-24px.555f59ec.svg"},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(0),r=n.n(a),c=n(160),i=n(59),u=n(161),o=n(162),l=n(163),s=n(164),f=n(165),m=function(e){var t=e.column,n=e.data;return r.a.createElement(c.a,{component:i.a},r.a.createElement(u.a,null,r.a.createElement(o.a,null,r.a.createElement(l.a,null,t.map((function(e,t){return r.a.createElement(s.a,{key:"".concat(t)},e.heading)})))),r.a.createElement(f.a,null,n.map((function(e,n){return r.a.createElement(l.a,{key:"".concat(n)},t.map((function(t,n){var a=t.value,c="function"===typeof a?a(e):e[a];return r.a.createElement(s.a,{key:n},c||"-")})))})))))};m.defaultProps={column:[],data:[]};var p=m},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(0),r=n.n(a),c=n(176),i=function(e){var t=e.children,n=e.inputProps;return r.a.createElement(c.a,n,t)};i.defaultProps={children:null,inputProps:{}};var u=i}}]);
//# sourceMappingURL=5.e716bbb0.chunk.js.map