import{P as f}from"./ProductService-c3f21ab6.js";import{r as n,o as S,b as a,c as y,d as V,e,f as t,g as l,t as r,n as k,i as w}from"./index-0ac055c8.js";class I{getImages(){return fetch("demo/data/photos.json").then(o=>o.json()).then(o=>o.data)}}const B={class:"grid p-fluid"},C={class:"col-12"},O={class:"card"},j=e("h5",null,"Carousel",-1),G={class:"border-round m-2 text-center p-2",style:{border:"1px solid var(--surface-d)"}},N={class:"my-5"},M=["src","alt"],P={class:"mb-1"},R={class:"mt-0 mb-3"},z={class:"my-5"},D={class:"col-12"},E={class:"card"},L=e("h5",null,"Galleria",-1),T=["src","alt"],$=["src","alt"],q={class:"col-12"},A={class:"card"},F=e("h5",null,"Image",-1),H={class:"flex justify-content-center"},U={__name:"Media",setup(m){const o=n([]),d=n([]),u=n([{breakpoint:"1024px",numVisible:5},{breakpoint:"960px",numVisible:4},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}]),p=n([{breakpoint:"1024px",numVisible:3,numScroll:3},{breakpoint:"768px",numVisible:2,numScroll:2},{breakpoint:"560px",numVisible:1,numScroll:1}]),_=new f,h=new I;return S(()=>{_.getProductsSmall().then(i=>o.value=i),h.getImages().then(i=>d.value=i)}),(i,J)=>{const v=a("Badge"),c=a("Button"),b=a("Carousel"),g=a("Galleria"),x=a("Image");return y(),V("div",B,[e("div",C,[e("div",O,[j,t(b,{value:o.value,numVisible:3,numScroll:3,circular:!1,responsiveOptions:p.value},{item:l(s=>[e("div",G,[e("div",N,[e("img",{src:"demo/images/product/"+s.data.image,alt:s.data.name,class:"product-image"},null,8,M)]),e("div",null,[e("h5",P,r(s.data.name),1),e("h6",R,"$"+r(s.data.price),1),t(v,{class:k("product-badge status-"+s.data.inventoryStatus.toLowerCase())},{default:l(()=>[w(r(s.data.inventoryStatus),1)]),_:2},1032,["class"]),e("div",z,[t(c,{icon:"pi pi-search",class:"mr-2 p-button-rounded"}),t(c,{icon:"pi pi-star-fill",class:"mr-2 p-button-rounded p-button-success"}),t(c,{icon:"pi pi-cog",class:"p-button-rounded p-button-info"})])])])]),_:1},8,["value","responsiveOptions"])])]),e("div",D,[e("div",E,[L,t(g,{value:d.value,responsiveOptions:u.value,numVisible:7,circular:!0,containerStyle:"max-width: 800px; margin: auto"},{item:l(s=>[e("img",{src:s.item.itemImageSrc,alt:s.item.alt,style:{width:"100%",display:"block"}},null,8,T)]),thumbnail:l(s=>[e("img",{src:s.item.thumbnailImageSrc,alt:s.item.alt,tyle:"width: 100%; display: block;"},null,8,$)]),_:1},8,["value","responsiveOptions"])])]),e("div",q,[e("div",A,[F,e("div",H,[t(x,{src:"demo/images/galleria/galleria11.jpg",alt:"Image",width:"250",preview:""},null,8,["src"])])])])])}}};export{U as default};
