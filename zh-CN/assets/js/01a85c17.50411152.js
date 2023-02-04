"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[13],{7911:(e,t,a)=>{a.d(t,{Z:()=>Z});var r=a(7294),l=a(6010),n=a(9045),s=a(9078),c=a(9130),i=a(3084);const m="sidebar_re4s",o="sidebarItemTitle_pO2u",u="sidebarItemList_Yudw",p="sidebarItem__DBe",b="sidebarItemLink_mo7H",g="sidebarItemLinkActive_I1ZP";function d({sidebar:e}){return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,l.Z)(m,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},e.title),r.createElement("ul",{className:(0,l.Z)(u,"clean-list")},e.items.map((e=>r.createElement("li",{key:e.permalink,className:p},r.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:b,activeClassName:g},e.title)))))))}var E=a(5043);function f({sidebar:e}){return r.createElement("ul",{className:"menu__list"},e.items.map((e=>r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function v(e){return r.createElement(E.Zo,{component:f,props:e})}function h({sidebar:e}){const t=(0,s.i)();return(null==e?void 0:e.items.length)?"mobile"===t?r.createElement(v,{sidebar:e}):r.createElement(d,{sidebar:e}):null}var k=Object.defineProperty,N=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,O=(e,t,a)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function Z(e){const t=e,{sidebar:a,toc:s,children:c}=t,i=((e,t)=>{var a={};for(var r in e)y.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&N)for(var r of N(e))t.indexOf(r)<0&&_.call(e,r)&&(a[r]=e[r]);return a})(t,["sidebar","toc","children"]),m=a&&a.items.length>0;return r.createElement(n.Z,((e,t)=>{for(var a in t||(t={}))y.call(t,a)&&O(e,a,t[a]);if(N)for(var a of N(t))_.call(t,a)&&O(e,a,t[a]);return e})({},i),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(h,{sidebar:a}),r.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},c),s&&r.createElement("div",{className:"col col--2"},s))))}},9734:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var r=a(7294),l=a(6010),n=a(3084);var s=a(3537),c=a(3631),i=a(7911),m=a(5221);const o="tag_Nnez";var u=Object.defineProperty,p=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function E({letterEntry:e}){return r.createElement("article",null,r.createElement("h2",null,e.letter),r.createElement("ul",{className:"padding--none"},e.tags.map((e=>r.createElement("li",{key:e.permalink,className:o},r.createElement(m.Z,((e,t)=>{for(var a in t||(t={}))b.call(t,a)&&d(e,a,t[a]);if(p)for(var a of p(t))g.call(t,a)&&d(e,a,t[a]);return e})({},e)))))),r.createElement("hr",null))}function f({tags:e}){const t=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort((([e],[t])=>e.localeCompare(t))).map((([e,t])=>({letter:e,tags:t.sort(((e,t)=>e.label.localeCompare(t.label)))})))}(e);return r.createElement("section",{className:"margin-vert--lg"},t.map((e=>r.createElement(E,{key:e.letter,letterEntry:e}))))}var v=a(3773);function h({tags:e,sidebar:t}){const a=(0,n.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});return r.createElement(s.FG,{className:(0,l.Z)(c.k.wrapper.blogPages,c.k.page.blogTagsListPage)},r.createElement(s.d,{title:a}),r.createElement(v.Z,{tag:"blog_tags_list"}),r.createElement(i.Z,{sidebar:t},r.createElement("h1",null,a),r.createElement(f,{tags:e})))}},5221:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(7294),l=a(6010),n=a(9130);const s="tag_zVej",c="tagRegular_sFm0",i="tagWithCount_h2kH";function m({permalink:e,label:t,count:a}){return r.createElement(n.Z,{href:e,className:(0,l.Z)(s,a?i:c)},t,a&&r.createElement("span",null,a))}}}]);