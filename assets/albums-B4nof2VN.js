import{d as m,o as a,c as i,w as c,g as u,f as s,t as f,W as Y,b as r,F as b,m as L,O as C,J as k,T as x,X as A,Y as w,E as B,M as F,q as n,Z as P,$ as V,a0 as E,s as T}from"./app-8utA_4PA.js";import{o as W}from"./index-Ctwd9WGS.js";import{_ as D}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-CZrU7yOH.js";import"./animation-AZ-73RI4.js";const I=["title"],N=["src","alt","on-error"],O={class:"yun-album-caption yun-title-effects text-$va-c-text inline-flex"},R=m({__name:"YunAlbum",props:{album:{}},setup(_){return(t,e)=>{const o=Y;return a(),i(o,{class:"yun-album-list-item",to:t.album.url},{default:c(()=>[u("figure",{class:"m-10",flex:"~ col",title:t.album.desc},[u("img",{loading:"lazy",class:"yun-album-list-cover",src:t.album.cover,alt:t.album.caption,"on-error":s(W)},null,40,N),u("figcaption",O,f(t.album.caption),1)],8,I)]),_:1},8,["to"])}}}),S={class:"yun-album-list mb-4"},q=m({__name:"YunAlbumList",props:{albums:{}},setup(_){return(t,e)=>{const o=R;return a(),r("div",S,[(a(!0),r(b,null,L(t.albums,l=>(a(),i(o,{key:l.url,album:l},null,8,["album"]))),128))])}}}),z={text:"center",class:"yun-text-light",p:"2"},G=m({__name:"albums",setup(_){const{t}=C(),e=k(),o=x(e);A([w({"@type":"CollectionPage"})]);const l=B(()=>e.value.albums||[]);return(H,J)=>{const d=V,g=D,y=q,p=F("RouterView"),h=E,$=T;return a(),r(b,null,[n(h,null,{default:c(()=>[n(d),n(p,null,{default:c(({Component:v})=>[(a(),i(P(v),null,{"main-header":c(()=>[n(g,{title:s(o)||s(t)("title.album"),icon:s(e).icon||"i-ri-gallery-line",color:s(e).color,"page-title-class":s(e).pageTitleClass},null,8,["title","icon","color","page-title-class"])]),"main-content":c(()=>[u("div",z,f(s(t)("counter.albums",l.value.length)),1),n(y,{albums:l.value},null,8,["albums"]),n(p)]),_:2},1024))]),_:1})]),_:1}),n($)],64)}}});export{G as default};
