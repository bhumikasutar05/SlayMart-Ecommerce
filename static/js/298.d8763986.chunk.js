"use strict";(self.webpackChunkecommerce=self.webpackChunkecommerce||[]).push([[298],{3245:(s,e,c)=>{c.d(e,{A:()=>l});var r=c(5043),t=c(9238),i=c(579);const l=s=>{let{title:e,apiUrl:c,category:l}=s;const[a,d]=(0,r.useState)([]),[o,h]=(0,r.useState)(15),[n,x]=(0,r.useState)(!1);(0,r.useEffect)((()=>{!async function(){try{x(!0);const s=await fetch(c,{method:"GET",headers:{"X-RapidAPI-Key":"6327be3afcmsh0f0de4b2e3264f3p18651fjsn1c61e8505d1e","X-RapidAPI-Host":"ecommerce-api3.p.rapidapi.com"}}),e=await s.json();d(e)}catch(s){console.log("Error fetching data:",s)}x(!1)}(),window.scrollTo(0,0)}),[c]);return(0,i.jsx)(i.Fragment,{children:n?(0,i.jsxs)("div",{className:"load",children:[(0,i.jsx)("div",{class:"loader",children:(0,i.jsxs)("div",{class:"truckWrapper",children:[(0,i.jsx)("div",{class:"truckBody",children:(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 198 93",class:"trucksvg",children:[(0,i.jsx)("path",{"stroke-width":"3",stroke:"#282828",fill:"#F83D3D",d:"M135 22.5H177.264C178.295 22.5 179.22 23.133 179.594 24.0939L192.33 56.8443C192.442 57.1332 192.5 57.4404 192.5 57.7504V89C192.5 90.3807 191.381 91.5 190 91.5H135C133.619 91.5 132.5 90.3807 132.5 89V25C132.5 23.6193 133.619 22.5 135 22.5Z"}),(0,i.jsx)("path",{"stroke-width":"3",stroke:"#282828",fill:"#7D7C7C",d:"M146 33.5H181.741C182.779 33.5 183.709 34.1415 184.078 35.112L190.538 52.112C191.16 53.748 189.951 55.5 188.201 55.5H146C144.619 55.5 143.5 54.3807 143.5 53V36C143.5 34.6193 144.619 33.5 146 33.5Z"}),(0,i.jsx)("path",{"stroke-width":"2",stroke:"#282828",fill:"#282828",d:"M150 65C150 65.39 149.763 65.8656 149.127 66.2893C148.499 66.7083 147.573 67 146.5 67C145.427 67 144.501 66.7083 143.873 66.2893C143.237 65.8656 143 65.39 143 65C143 64.61 143.237 64.1344 143.873 63.7107C144.501 63.2917 145.427 63 146.5 63C147.573 63 148.499 63.2917 149.127 63.7107C149.763 64.1344 150 64.61 150 65Z"}),(0,i.jsx)("rect",{"stroke-width":"2",stroke:"#282828",fill:"#FFFCAB",rx:"1",height:"7",width:"5",y:"63",x:"187"}),(0,i.jsx)("rect",{"stroke-width":"2",stroke:"#282828",fill:"#282828",rx:"1",height:"11",width:"4",y:"81",x:"193"}),(0,i.jsx)("rect",{"stroke-width":"3",stroke:"#282828",fill:"#DFDFDF",rx:"2.5",height:"90",width:"121",y:"1.5",x:"6.5"}),(0,i.jsx)("rect",{"stroke-width":"2",stroke:"#282828",fill:"#DFDFDF",rx:"2",height:"4",width:"6",y:"84",x:"1"})]})}),(0,i.jsxs)("div",{class:"truckTires",children:[(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 30 30",class:"tiresvg",children:[(0,i.jsx)("circle",{"stroke-width":"3",stroke:"#282828",fill:"#282828",r:"13.5",cy:"15",cx:"15"}),(0,i.jsx)("circle",{fill:"#DFDFDF",r:"7",cy:"15",cx:"15"})]}),(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 30 30",class:"tiresvg",children:[(0,i.jsx)("circle",{"stroke-width":"3",stroke:"#282828",fill:"#282828",r:"13.5",cy:"15",cx:"15"}),(0,i.jsx)("circle",{fill:"#DFDFDF",r:"7",cy:"15",cx:"15"})]})]}),(0,i.jsx)("div",{class:"road"}),(0,i.jsx)("svg",{viewBox:"0 0 453.459 453.459",xmlns:"http://www.w3.org/2000/svg",id:"Capa_1",version:"1.1",fill:"#000000",className:"lampPost",children:(0,i.jsx)("path",{d:"M252.882,0c-37.781,0-68.686,29.953-70.245,67.358h-6.917v8.954c-26.109,2.163-45.463,10.011-45.463,19.366h9.993\r\nc-1.65,5.146-2.507,10.54-2.507,16.017c0,28.956,23.558,52.514,52.514,52.514c28.956,0,52.514-23.558,52.514-52.514\r\nc0-5.478-0.856-10.872-2.506-16.017h9.992c0-9.354-19.352-17.204-45.463-19.366v-8.954h-6.149C200.189,38.779,223.924,16,252.882,16\r\nc29.952,0,54.32,24.368,54.32,54.32c0,28.774-11.078,37.009-25.105,47.437c-17.444,12.968-37.216,27.667-37.216,78.884v113.914\r\nh-0.797c-5.068,0-9.174,4.108-9.174,9.177c0,2.844,1.293,5.383,3.321,7.066c-3.432,27.933-26.851,95.744-8.226,115.459v11.202h45.75\r\nv-11.202c18.625-19.715-4.794-87.527-8.227-115.459c2.029-1.683,3.322-4.223,3.322-7.066c0-5.068-4.107-9.177-9.176-9.177h-0.795\r\nV196.641c0-43.174,14.942-54.283,30.762-66.043c14.793-10.997,31.559-23.461,31.559-60.277C323.202,31.545,291.656,0,252.882,0z\r\nM232.77,111.694c0,23.442-19.071,42.514-42.514,42.514c-23.442,0-42.514-19.072-42.514-42.514c0-5.531,1.078-10.957,3.141-16.017\r\nh78.747C231.693,100.736,232.77,106.162,232.77,111.694z"})})]})}),(0,i.jsx)("div",{className:"loading-text",children:"Loading..."})]}):(0,i.jsxs)("div",{className:"clothing-category-div",children:[(0,i.jsx)("div",{className:"product-container",children:a.slice(0,o).map((s=>(0,i.jsx)(t.A,{products:s,category:l},s["Unnamed: 0"])))}),(0,i.jsx)("div",{className:"load-more",children:(0,i.jsx)("button",{onClick:()=>{h((s=>s+15))},children:"Load More"})})]})})}},1298:(s,e,c)=>{c.r(e),c.d(e,{default:()=>i});c(5043);var r=c(3245),t=c(579);const i=()=>(0,t.jsx)("div",{children:(0,t.jsx)(r.A,{apiUrl:"https://ecommerce-api3.p.rapidapi.com/kidswear",category:"kidswear"})})}}]);
//# sourceMappingURL=298.d8763986.chunk.js.map