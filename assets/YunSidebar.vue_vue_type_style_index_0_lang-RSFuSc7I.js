import{d as m,o as a,b as u,q as l,a5 as w,a6 as Y,a7 as k,F as g,m as $,c as h,w as _,g as n,S as d,n as S,f as o,W as x,H as L,O,G as z,a4 as B,a8 as N,M as V,t as b,a9 as A,N as y,a3 as H,aa as T,i as D,r as F}from"./app-8utA_4PA.js";const I=m({__name:"YunConfig",setup(p){return(s,t)=>{const i=w,e=Y;return a(),u("div",null,[l(i),l(e)])}}}),R={class:"links flex-center"},q=m({__name:"YunSidebarLinks",setup(p){const s=k();return(t,i)=>{const e=x;return a(),u("div",R,[(a(!0),u(g,null,$(o(s).pages,(c,f)=>(a(),h(e,{key:f,class:"link-item yun-icon-btn","inline-flex":"",to:c.url,title:c.name,style:S(`color:${c.color}`)},{default:_(()=>[n("div",{class:d([c.icon,"icon w-8 h-8"])},null,2)]),_:2},1032,["to","title","style"]))),128))])}}}),E={class:"links-of-author"},G=["href","title"],M=m({__name:"YunSocialLinks",setup(p){const s=L();return(t,i)=>(a(),u("div",E,[(a(!0),u(g,null,$(o(s).social,(e,c)=>(a(),u("a",{key:c,class:"links-of-author-item yun-icon-btn",rel:"noopener",href:e.link,title:e.name,target:"_blank",style:S(`color:${e.color}`)},[n("div",{class:d(["icon",e.icon])},null,2)],12,G))),128))]))}}),W={class:"site-nav","text-xl":"","mt-6":""},j={class:"count"},J={class:"count"},K={class:"count"},P=m({__name:"YunSidebarNav",setup(p){const{t:s}=O(),t=z(),i=k(),e=B(),c=N();return(f,r)=>{const v=V("RouterLink"),C=x;return a(),u("nav",W,[l(v,{class:"site-link-item yun-icon-btn",to:"/",title:o(s)("menu.home")},{default:_(()=>r[0]||(r[0]=[n("div",{"i-ri-home-4-line":""},null,-1)])),_:1},8,["title"]),l(v,{class:"site-link-item",to:"/archives/",title:o(s)("menu.archives")},{default:_(()=>[r[1]||(r[1]=n("div",{class:"icon","i-ri-archive-line":""},null,-1)),n("span",j,b(o(t).postList.length),1)]),_:1},8,["title"]),l(v,{class:"site-link-item",to:"/categories/",title:o(s)("menu.categories")},{default:_(()=>[r[2]||(r[2]=n("div",{class:"icon","i-ri-folder-2-line":""},null,-1)),n("span",J,b(Array.from(o(e).children).length),1)]),_:1},8,["title"]),l(v,{class:"site-link-item",to:"/tags/",title:o(s)("menu.tags")},{default:_(()=>[r[3]||(r[3]=n("div",{class:"icon","i-ri-price-tag-3-line":""},null,-1)),n("span",K,b(Array.from(o(c)).length),1)]),_:1},8,["title"]),l(C,{class:"site-link-item yun-icon-btn",to:o(i).menu.custom.url,title:o(s)(o(i).menu.custom.title)},{default:_(()=>[n("div",{class:d(o(i).menu.custom.icon)},null,2)]),_:1},8,["to","title"])])}}}),Q={class:"sidebar-panel",p:"2"},U=m({__name:"YunOverview",setup(p){return(s,t)=>{const i=A,e=P,c=M,f=q,r=I;return a(),u(g,null,[n("div",Q,[l(i),l(e),t[0]||(t[0]=n("hr",{m:"t-4 b-2",op:"20"},null,-1)),l(c),t[1]||(t[1]=n("hr",{m:"y-2",op:"20"},null,-1)),l(f),t[2]||(t[2]=n("br",null,null,-1))]),l(r)],64)}}}),X={key:0,class:"va-overlay"},Z=m({__name:"ValaxyOverlay",props:{show:{type:Boolean,default:!1}},setup(p){return(s,t)=>(a(),h(H,{name:"fade"},{default:_(()=>[s.show?(a(),u("div",X)):y("v-if",!0)]),_:1}))}}),ee={key:0,class:"sidebar-nav",m:"t-6"},ne={key:2},se=m({__name:"YunSidebar",props:{showHamburger:{type:Boolean}},setup(p){const s=T(),t=D(!1);return(i,e)=>{const c=Z,f=U;return a(),u(g,null,[l(c,{class:"md:hidden",show:o(s).leftSidebar.isOpen,onClick:e[0]||(e[0]=r=>o(s).leftSidebar.toggle())},null,8,["show"]),y(` <ValaxyHamburger
    :active="yunStore.leftSidebar.isOpen"
    class="menu-btn sidebar-toggle yun-icon-btn leading-4 fixed left-0.8rem top-0.6rem"
    inline-flex cursor="pointer" z="$yun-z-menu-btn"
    :class="showHamburger ? '' : 'md:hidden'"
    @click="yunStore.leftSidebar.toggle()"
  /> `),n("aside",{class:d(["va-card transition sidebar fixed inset-y-0 left-0 overflow-y-auto",{open:o(s).leftSidebar.isOpen,"md:translate-x-0":!i.showHamburger}]),text:"center",bg:"$yun-sidebar-bg-color contain no-repeat",z:"$yun-z-sidebar"},[i.$slots.default?(a(),u("div",ee,[n("button",{m:"x-4",class:d(["sidebar-nav-item yun-icon-btn",t.value&&"active"]),onClick:e[1]||(e[1]=r=>t.value=!0)},e[3]||(e[3]=[n("div",{"i-ri-passport-line":""},null,-1)]),2),n("button",{m:"x-4",class:d(["sidebar-nav-item yun-icon-btn",!t.value&&"active"]),onClick:e[2]||(e[2]=r=>t.value=!1)},e[4]||(e[4]=[n("div",{"i-ri-list-ordered":""},null,-1)]),2)])):y("v-if",!0),t.value||!i.$slots.default?(a(),u("div",{key:1,class:d(i.$slots.default&&"-mt-4")},[l(f)],2)):(a(),u("div",ne,[F(i.$slots,"default")]))],2)],64)}}});export{se as _};
