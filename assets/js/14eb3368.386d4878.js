"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[817],{6110:(e,t,r)=>{r.d(t,{Z:()=>_});var a=r(7294),n=r(6010),i=r(3631),l=r(9492),o=r(3044),c=r(9130),s=r(3084),m=r(5026),d=Object.defineProperty,u=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,v=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function f(e){return a.createElement("svg",((e,t)=>{for(var r in t||(t={}))b.call(t,r)&&v(e,r,t[r]);if(u)for(var r of u(t))p.call(t,r)&&v(e,r,t[r]);return e})({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const h="breadcrumbHomeIcon_YNFT";function g(){const e=(0,m.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(c.Z,{"aria-label":(0,s.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},a.createElement(f,{className:h})))}const E="breadcrumbsContainer_Z_bl";var y=Object.defineProperty,O=Object.defineProperties,N=Object.getOwnPropertyDescriptors,Z=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,P=(e,t,r)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function k({children:e,href:t,isLast:r}){const n="breadcrumbs__link";return r?a.createElement("span",{className:n,itemProp:"name"},e):t?a.createElement(c.Z,{className:n,href:t,itemProp:"item"},a.createElement("span",{itemProp:"name"},e)):a.createElement("span",{className:n},e)}function L({children:e,active:t,index:r,addMicrodata:i}){return a.createElement("li",(l=((e,t)=>{for(var r in t||(t={}))w.call(t,r)&&P(e,r,t[r]);if(Z)for(var r of Z(t))j.call(t,r)&&P(e,r,t[r]);return e})({},i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"}),o={className:(0,n.Z)("breadcrumbs__item",{"breadcrumbs__item--active":t})},O(l,N(o))),e,a.createElement("meta",{itemProp:"position",content:String(r+1)}));var l,o}function _(){const e=(0,l.s1)(),t=(0,o.Ns)();return e?a.createElement("nav",{className:(0,n.Z)(i.k.docs.docBreadcrumbs,E),"aria-label":(0,s.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(g,null),e.map(((t,r)=>{const n=r===e.length-1;return a.createElement(L,{key:r,active:n,index:r,addMicrodata:!!t.href},a.createElement(k,{href:t.href,isLast:n},t.label))})))):null}},3946:(e,t,r)=>{r.r(t),r.d(t,{default:()=>H});var a=r(7294),n=r(3537),i=r(9492),l=r(5026),o=r(6010),c=r(9130),s=r(5096),m=r(3084);const d="cardContainer_fWXF",u="cardTitle_rnsV",b="cardDescription_PWke";function p({href:e,children:t}){return a.createElement(c.Z,{href:e,className:(0,o.Z)("card padding--lg",d)},t)}function v({href:e,icon:t,title:r,description:n}){return a.createElement(p,{href:e},a.createElement("h2",{className:(0,o.Z)("text--truncate",u),title:r},t," ",r),n&&a.createElement("p",{className:(0,o.Z)("text--truncate",b),title:n},n))}function f({item:e}){const t=(0,i.Wl)(e);return t?a.createElement(v,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:(0,m.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function h({item:e}){var t;const r=(0,s.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,i.xz)(null!=(t=e.docId)?t:void 0);return a.createElement(v,{href:e.href,icon:r,title:e.label,description:null==n?void 0:n.description})}function g({item:e}){switch(e.type){case"link":return a.createElement(h,{item:e});case"category":return a.createElement(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var E=Object.defineProperty,y=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,Z=(e,t,r)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function w({className:e}){const t=(0,i.jA)();return a.createElement(j,{items:t.items,className:e})}function j(e){const{items:t,className:r}=e;if(!t)return a.createElement(w,((e,t)=>{for(var r in t||(t={}))O.call(t,r)&&Z(e,r,t[r]);if(y)for(var r of y(t))N.call(t,r)&&Z(e,r,t[r]);return e})({},e));const n=(0,i.MN)(t);return a.createElement("section",{className:(0,o.Z)("row",r)},n.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(g,{item:e})))))}var P=r(2695),k=r(1168),L=r(3560),_=r(6110),T=r(5199);const I="generatedIndexPage_vN6x",x="list_eTzJ",S="title_kItE";var V=Object.defineProperty,A=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,M=(e,t,r)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,B=(e,t)=>{for(var r in t||(t={}))C.call(t,r)&&M(e,r,t[r]);if(A)for(var r of A(t))D.call(t,r)&&M(e,r,t[r]);return e};function W({categoryGeneratedIndex:e}){return a.createElement(n.d,{title:e.title,description:e.description,keywords:e.keywords,image:(0,l.Z)(e.image)})}function F({categoryGeneratedIndex:e}){const t=(0,i.jA)();return a.createElement("div",{className:I},a.createElement(k.Z,null),a.createElement(_.Z,null),a.createElement(L.Z,null),a.createElement("header",null,a.createElement(T.Z,{as:"h1",className:S},e.title),e.description&&a.createElement("p",null,e.description)),a.createElement("article",{className:"margin-top--lg"},a.createElement(j,{items:t.items,className:x})),a.createElement("footer",{className:"margin-top--lg"},a.createElement(P.Z,{previous:e.navigation.previous,next:e.navigation.next})))}function H(e){return a.createElement(a.Fragment,null,a.createElement(W,B({},e)),a.createElement(F,B({},e)))}},2695:(e,t,r)=>{r.d(t,{Z:()=>v});var a=r(7294),n=r(3084),i=r(1961),l=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&u(e,r,t[r]);if(s)for(var r of s(t))d.call(t,r)&&u(e,r,t[r]);return e},p=(e,t)=>o(e,c(t));function v(e){const{previous:t,next:r}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,n.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(i.Z,p(b({},t),{subLabel:a.createElement(n.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),r&&a.createElement(i.Z,p(b({},r),{subLabel:a.createElement(n.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},3560:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(7294),n=r(6010),i=r(3084),l=r(3631),o=r(2879);function c({className:e}){const t=(0,o.E)();return t.badge?a.createElement("span",{className:(0,n.Z)(e,l.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label}},"Version: {versionLabel}")):null}},1168:(e,t,r)=>{r.d(t,{Z:()=>O});var a=r(7294),n=r(6010),i=r(1368),l=r(9130),o=r(3084),c=r(2686),s=r(3631),m=r(4742),d=r(2879),u=Object.defineProperty,b=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const h={unreleased:function({siteTitle:e,versionMetadata:t}){return a.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:a.createElement("b",null,t.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function({siteTitle:e,versionMetadata:t}){return a.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:a.createElement("b",null,t.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function g(e){const t=h[e.versionMetadata.banner];return a.createElement(t,((e,t)=>{for(var r in t||(t={}))p.call(t,r)&&f(e,r,t[r]);if(b)for(var r of b(t))v.call(t,r)&&f(e,r,t[r]);return e})({},e))}function E({versionLabel:e,to:t,onClick:r}){return a.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:e,latestVersionLink:a.createElement("b",null,a.createElement(l.Z,{to:t,onClick:r},a.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function y({className:e,versionMetadata:t}){const{siteConfig:{title:r}}=(0,i.Z)(),{pluginId:l}=(0,c.gA)({failfast:!0}),{savePreferredVersionName:o}=(0,m.J)(l),{latestDocSuggestion:d,latestVersionSuggestion:u}=(0,c.Jo)(l),b=null!=d?d:(p=u).docs.find((e=>e.id===p.mainDocId));var p;return a.createElement("div",{className:(0,n.Z)(e,s.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(g,{siteTitle:r,versionMetadata:t})),a.createElement("div",{className:"margin-top--md"},a.createElement(E,{versionLabel:u.label,to:b.path,onClick:()=>o(u.name)})))}function O({className:e}){const t=(0,d.E)();return t.banner?a.createElement(y,{className:e,versionMetadata:t}):null}},5199:(e,t,r)=>{r.d(t,{Z:()=>E});var a=r(7294),n=r(6010),i=r(3084),l=r(7343),o=r(9130);const c="anchorWithStickyNavbar_LWe7",s="anchorWithHideOnScrollNavbar_WYt5";var m=Object.defineProperty,d=Object.defineProperties,u=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&f(e,r,t[r]);if(b)for(var r of b(t))v.call(t,r)&&f(e,r,t[r]);return e},g=(e,t)=>d(e,u(t));function E(e){var t=e,{as:r,id:m}=t,d=((e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&b)for(var a of b(e))t.indexOf(a)<0&&v.call(e,a)&&(r[a]=e[a]);return r})(t,["as","id"]);const{navbar:{hideOnScroll:u}}=(0,l.L)();if("h1"===r||!m)return a.createElement(r,g(h({},d),{id:void 0}));const f=(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof d.children?d.children:m});return a.createElement(r,g(h({},d),{className:(0,n.Z)("anchor",u?s:c,d.className),id:m}),d.children,a.createElement(o.Z,{className:"hash-link",to:`#${m}`,"aria-label":f,title:f},"\u200b"))}},1961:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7294),n=r(6010),i=r(9130);function l(e){const{permalink:t,title:r,subLabel:l,isNext:o}=e;return a.createElement(i.Z,{className:(0,n.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&a.createElement("div",{className:"pagination-nav__sublabel"},l),a.createElement("div",{className:"pagination-nav__label"},r))}}}]);