(this.webpackJsonpjobboard=this.webpackJsonpjobboard||[]).push([[4],{48:function(e,t,o){"use strict";o.r(t);var n=o(2),r=o(1),a=o.n(r),l=o(49),s=o(51),c=o(50),i=o(52),m=o(8);const u=Object.entries(m.a);let p=[];t.default=function({zoom:e=3}){const t=Object(r.useState)([]),o=Object(n.a)(t,2),h=o[0],g=o[1];Object(r.useEffect)(()=>{let e=!0;return e&&fetch("https://restcountries.eu/rest/v2/all").then(e=>e.json()).then(t=>{e&&g(t)}).catch(e=>console.error(e)),()=>{e=!1}},[]);let b=h.map(({name:e,latlng:t})=>({name:e,latlng:t}));const f={country:"United Kingdom",latlng:[54,-2],numberOfDevs:m.a["United Kingdom"]};let d=[];!function(){for(let e=0;e<u.length;e++)for(let t=0;t<b.length;t++)u[e][0].toLowerCase()===b[t].name.toLowerCase()&&d.push({country:u[e][0],latlng:b[t].latlng,numberOfDevs:u[e][1]});d.push(f)}();const v=d.map(({country:e,latlng:t,numberOfDevs:o})=>a.a.createElement(l.a,{key:e,position:[t[0],t[1]],color:"royalblue",title:1===o?o+" Developer from "+e:o+" Developers from "+e,text:o},a.a.createElement(s.a,null,1===o?o+" Developer from "+e:o+" Developers from "+e))),y=p.length>0?[p[0].lat,p[0].lng]:[55.378052,-3.435973];return a.a.createElement("div",{style:{height:"90vh",width:"100%",margin:0}},a.a.createElement(c.a,{center:y,zoom:e,minZoom:1,maxZoom:10,attributionControl:!0,zoomControl:!0,doubleClickZoom:!0,scrollWheelZoom:!0,dragging:!0,animate:!0,easeLinearity:.35},a.a.createElement(i.a,{attribution:'&copy <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),v))}}}]);
//# sourceMappingURL=4.758601e7.chunk.js.map