(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"0jq5":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("q1tI"),s=n("EKT6"),r=n("kDLi"),i=n("nKUr");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}class l extends a.PureComponent{render(){const{searchQuery:e,linkButton:t,setSearchQuery:n,target:a,placeholder:l="Search by name or type"}=this.props,o={href:null==t?void 0:t.href};return a&&(o.target=a),Object(i.jsxs)("div",{className:"page-action-bar",children:[Object(i.jsx)("div",{className:"gf-form gf-form--grow",children:Object(i.jsx)(s.a,{value:e,onChange:n,placeholder:l})}),t&&Object(i.jsx)(r.LinkButton,c({},o,{children:t.title}))]})}}},KFLF:function(e,t,n){"use strict";n("q1tI");var a,s=n("kDLi"),r=n("Csm0"),i=n("nKUr");var c=e=>{const{plugin:t}=e;return Object(i.jsx)("li",{className:"card-item-wrapper","aria-label":r.a.pages.PluginsList.listItem,children:Object(i.jsxs)("a",{className:"card-item",href:`plugins/${t.id}/`,children:[Object(i.jsxs)("div",{className:"card-item-header",children:[Object(i.jsx)("div",{className:"card-item-type",children:t.type}),Object(i.jsx)("div",{className:"card-item-badge",children:Object(i.jsx)(s.PluginSignatureBadge,{status:t.signature})}),t.hasUpdate&&(a||(a=Object(i.jsx)("div",{className:"card-item-notice",children:Object(i.jsx)("span",{"bs-tooltip":"plugin.latestVersion",children:"Update available!"})})))]}),Object(i.jsxs)("div",{className:"card-item-body",children:[Object(i.jsx)("figure",{className:"card-item-figure",children:Object(i.jsx)("img",{src:t.info.logos.small})}),Object(i.jsxs)("div",{className:"card-item-details",children:[Object(i.jsx)("div",{className:"card-item-name",children:t.name}),Object(i.jsx)("div",{className:"card-item-sub-name",children:"By "+t.info.author.name})]})]})]})})};t.a=e=>{const{plugins:t}=e;return Object(i.jsx)("section",{className:"card-section card-list-layout-list",children:Object(i.jsx)("ol",{className:"card-list","aria-label":r.a.pages.PluginsList.list,children:t.map((e,t)=>Object(i.jsx)(c,{plugin:e},`${e.name}-${t}`))})})}},SzYE:function(e,t,n){"use strict";var a=n("t8hP");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}async function r(e,t){try{return await Object(a.getBackendSrv)().get("/api/gnet/plugins/"+e)}catch(e){return void(e.isHandled=!!t)}}async function i(e){try{return(await Object(a.getBackendSrv)().get(`/api/gnet/plugins/${e}/versions`)).items}catch(e){return[]}}async function c(){return await Object(a.getBackendSrv)().get("/api/plugins",{embedded:0})}n.d(t,"a",(function(){return l}));const l={getRemotePlugins:async function(){return(await Object(a.getBackendSrv)().get("/api/gnet/plugins")).items},getPlugin:async function(e){const t=await c(),n=null==t?void 0:t.find(t=>t.id===e),[a,s]=await Promise.all([r(e,n),i(e)]);return{remote:a,remoteVersions:s,local:n}},getInstalledPlugins:c,getOrg:async function(e){return s({},await Object(a.getBackendSrv)().get("/api/gnet/orgs/"+e),{avatarUrl:`/api/gnet/orgs/${e}/avatar`})},installPlugin:async function(e,t){return await Object(a.getBackendSrv)().post(`/api/plugins/${e}/install`,{version:t})},uninstallPlugin:async function(e){return await Object(a.getBackendSrv)().post(`/api/plugins/${e}/uninstall`)}}},WEfi:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("q1tI");var a=n("nKUr");function s({alt:e,className:t,src:n,height:s}){return Object(a.jsx)("img",{src:n,className:t,alt:e,loading:"lazy",height:s})}},huTc:function(e,t,n){"use strict";n.r(t);var a,s,r=n("q1tI"),i=n("vF1F"),c=n("Obii"),l=n("kDLi"),o=n("Ty5D"),u=n("t8hP"),d=n("WEfi"),g=n("nKUr");function j({plugin:e}){return e.isEnterprise?Object(g.jsx)(p,{id:e.id}):Object(g.jsxs)(l.HorizontalGroup,{children:[Object(g.jsx)(l.PluginSignatureBadge,{status:e.signature}),e.isInstalled&&(a||(a=Object(g.jsx)(b,{})))]})}function p({id:e}){var t;const n=Object(l.useStyles2)(m);return null!==(t=u.config.licenseInfo)&&void 0!==t&&t.hasValidLicense?s||(s=Object(g.jsx)(l.Badge,{text:"Enterprise",color:"blue"})):Object(g.jsxs)(l.HorizontalGroup,{children:[Object(g.jsx)(l.Badge,{icon:"lock","aria-label":"lock icon",text:"Enterprise",color:"blue",className:n}),Object(g.jsx)(l.Button,{size:"sm",fill:"text",icon:"external-link-alt",onClick:t=>{t.preventDefault(),window.open(`https://grafana.com/grafana/plugins/${e}?utm_source=grafana_catalog_learn_more`,"_blank","noopener,noreferrer")},children:"Learn more"})]})}function b(){const e=Object(l.useStyles2)(m);return Object(g.jsx)(l.Badge,{text:"Installed",color:"orange",className:e})}const m=e=>i.css`
  background: ${e.colors.background.primary};
  border-color: ${e.colors.border.strong};
  color: ${e.colors.text.secondary};
`;var h;function O({plugin:e,pathName:t}){const{name:n,id:a,orgName:s,type:r}=e,i=Object(l.useStyles2)(f);return Object(g.jsx)(l.CardContainer,{href:`${t}/${a}`,className:i.cardContainer,children:Object(g.jsxs)(l.VerticalGroup,{spacing:"md",children:[Object(g.jsxs)("div",{className:i.headerWrap,children:[Object(g.jsx)(d.a,{src:e.info.logos.small,alt:e.name+" logo",className:i.image,height:"48px"}),Object(g.jsx)("h3",{className:i.name,children:n}),r&&Object(g.jsx)("div",{className:i.icon,children:Object(g.jsx)(l.Icon,{name:h[r],"aria-label":r+" plugin icon"})})]}),Object(g.jsxs)("p",{className:i.orgName,children:["By ",s]}),Object(g.jsx)(j,{plugin:e})]})})}!function(e){e.app="apps",e.datasource="database",e.panel="credit-card",e.renderer="pen"}(h||(h={}));const f=e=>({cardContainer:i.css`
    margin-bottom: 0;
    padding: ${e.spacing()};
  `,headerWrap:i.css`
    align-items: center;
    display: grid;
    grid-template-columns: ${"48px"} 1fr ${e.spacing(3)};
    grid-gap: ${e.spacing(2)};
    width: 100%;
  `,name:i.css`
    color: ${e.colors.text.primary};
    flex-grow: 1;
    font-size: ${e.typography.h4.fontSize};
    margin-bottom: 0;
  `,image:i.css`
    object-fit: contain;
    max-width: 100%;
  `,icon:i.css`
    align-self: flex-start;
    color: ${e.colors.text.secondary};
  `,orgName:i.css`
    color: ${e.colors.text.secondary};
    margin-bottom: 0;
  `}),v=({plugins:e})=>{const t=Object(l.useStyles2)(y),n=Object(o.l)();return Object(g.jsx)("div",{className:t,"data-testid":"plugin-list",children:e.map(e=>Object(g.jsx)(O,{plugin:e,pathName:n.pathname},e.id))})},y=e=>i.css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
  grid-gap: ${e.spacing(3)};
`;var x=n("rYwU"),S=n("EKT6");const w=({value:e,onSearch:t})=>{const[n,a]=Object(r.useState)(e);return((e,t=0,n=[])=>{const a=Object(r.useRef)(!0),s=[...n,a];Object(x.a)(()=>{if(!a.current)return e();a.current=!1},t,s)})(()=>t(null!=n?n:""),500,[n]),Object(g.jsx)(S.a,{value:n,onKeyDown:e=>{"Enter"!==e.key&&13!==e.keyCode||t(e.currentTarget.value)},placeholder:"Search Grafana plugins",onChange:e=>{a(e)},width:46})};var B=n("9IGr"),N=n("xzGB");const P=({children:e,wrap:t,className:n})=>{const a=Object(l.useTheme2)(),s=k(a,t);return Object(g.jsx)("div",{className:Object(i.cx)(s.container,n),children:e})},k=(e,t)=>({container:i.css`
    display: flex;
    flex-direction: row;
    flex-wrap: ${t?"wrap":"no-wrap"};
    & > * {
      margin-bottom: ${e.spacing()};
      margin-right: ${e.spacing()};
    }
    & > *:last-child {
      margin-right: 0;
    }
  `});var $=n("ZGyg"),L=n("Y8YH"),C=n("SzYE"),I=n("L0JJ");const T={filterBy:I.c,filterByType:I.e,searchBy:I.i},q=e=>{const{loading:t,error:n,plugins:a}=function(){const{loading:e,value:t,error:n}=Object(L.a)(async()=>({remote:await C.a.getRemotePlugins(),installed:await C.a.getInstalledPlugins()}),[]);return{loading:e,error:n,plugins:Object(r.useMemo)(()=>{const e=(null==t?void 0:t.installed)||[],n=(null==t?void 0:t.remote)||[],a={};for(const t of e)a[t.id]=Object(I.f)(t);for(const t of n)"renderer"!==t.typeCode&&Boolean(t.versionSignatureType)&&(a[t.slug]?a[t.slug]=Object(I.h)(e.find(e=>e.id===t.slug),t):a[t.slug]=Object(I.g)(t));return Object.values(a)},[null==t?void 0:t.installed,null==t?void 0:t.remote])}}();return{isLoading:t,error:n,plugins:a.filter(t=>Object.keys(e).every(n=>"function"!=typeof T[n]||T[n](t,e[n])))}};var E=n("/MKj"),G=n("lzJ5");function F({route:e}){var t,n,a,s;const r=Object(o.l)(),c=Object(u.locationSearchToObject)(r.search),d=z(e.routeName),j=Object(E.useSelector)(e=>Object(G.a)(e.navIndex,d)),p=Object(l.useStyles2)(K),b=null!==(t=c.q)&&void 0!==t?t:"",m=null!==(n=c.filterBy)&&void 0!==n?n:"installed",h=null!==(a=c.filterByType)&&void 0!==a?a:"all",O=null!==(s=c.sortBy)&&void 0!==s?s:"nameAsc",{plugins:f,isLoading:y,error:x}=q({searchBy:b,filterBy:m,filterByType:h}),S=f.sort(A[O]),B={push:({query:e})=>{Object(u.getLocationSrv)().update({partial:!0,replace:!1,query:e})}};return x?(console.error(x.message),null):Object(g.jsx)($.a,{navModel:j,children:Object(g.jsx)($.a.Contents,{children:Object(g.jsxs)(N.a,{children:[Object(g.jsxs)(P,{wrap:!0,children:[Object(g.jsx)(w,{value:b,onSearch:e=>{B.push({query:{filterBy:"all",filterByType:"all",q:e}})}}),Object(g.jsxs)(P,{wrap:!0,className:p.actionBar,children:[Object(g.jsx)("div",{children:Object(g.jsx)(l.RadioButtonGroup,{value:h,onChange:e=>{B.push({query:{filterByType:e}})},options:[{value:"all",label:"All"},{value:"datasource",label:"Data sources"},{value:"panel",label:"Panels"},{value:"app",label:"Applications"}]})}),Object(g.jsx)("div",{children:Object(g.jsx)(l.RadioButtonGroup,{value:m,onChange:e=>{B.push({query:{filterBy:e}})},options:[{value:"all",label:"All"},{value:"installed",label:"Installed"}]})}),Object(g.jsx)("div",{children:Object(g.jsx)(l.Select,{menuShouldPortal:!0,width:24,value:O,onChange:e=>{B.push({query:{sortBy:e.value}})},options:[{value:"nameAsc",label:"Sort by name (A-Z)"},{value:"nameDesc",label:"Sort by name (Z-A)"},{value:"updated",label:"Sort by updated date"},{value:"published",label:"Sort by published date"},{value:"downloads",label:"Sort by downloads"}]})})]})]}),Object(g.jsx)("div",{className:p.listWrap,children:y?Object(g.jsx)(l.LoadingPlaceholder,{className:i.css`
                  margin-bottom: 0;
                `,text:"Loading results"}):Object(g.jsx)(v,{plugins:S})})]})})})}n.d(t,"default",(function(){return F}));const K=e=>({actionBar:i.css`
    ${e.breakpoints.up("xl")} {
      margin-left: auto;
    }
  `,listWrap:i.css`
    margin-top: ${e.spacing(2)};
  `}),z=e=>e===B.b.HomeAdmin||e===B.b.BrowseAdmin?"admin-plugins":"plugins",A={nameAsc:(e,t)=>e.name.localeCompare(t.name),nameDesc:(e,t)=>t.name.localeCompare(e.name),updated:(e,t)=>Object(c.dateTimeParse)(t.updatedAt).valueOf()-Object(c.dateTimeParse)(e.updatedAt).valueOf(),published:(e,t)=>Object(c.dateTimeParse)(t.publishedAt).valueOf()-Object(c.dateTimeParse)(e.publishedAt).valueOf(),downloads:(e,t)=>t.downloads-e.downloads}},mGjS:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"PluginListPage",(function(){return f}));n("q1tI");var a,s=n("0cfB"),r=n("/MKj"),i=n("ZGyg"),c=n("0jq5"),l=n("KFLF"),o=n("jGYO"),u=n("lzJ5"),d=n("y6t6"),g=n("y6L2"),j=n("Y8YH"),p=n("Csm0"),b=n("xLfX"),m=n("nKUr");const h=e=>({navModel:Object(u.a)(e.navIndex,"plugins"),plugins:Object(d.b)(e.plugins),searchQuery:Object(d.c)(e.plugins),hasFetched:e.plugins.hasFetched}),O={loadPlugins:o.c,setPluginsSearchQuery:g.g},f=(Object(r.connect)(h,O),({hasFetched:e,navModel:t,plugins:n,setPluginsSearchQuery:s,searchQuery:r,loadPlugins:o})=>{Object(j.a)(async()=>{o()},[o]);return Object(m.jsx)(i.b,{navModel:t,"aria-label":p.a.pages.PluginsList.page,children:Object(m.jsx)(i.b.Contents,{isLoading:!e,children:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(c.a,{searchQuery:r,setSearchQuery:e=>s(e),linkButton:{href:"https://grafana.com/plugins?utm_source=grafana_plugin_list",title:"Find more plugins on Grafana.com"},placeholder:"Search by name, author, description or type",target:"_blank"}),a||(a=Object(m.jsx)(b.a,{})),e&&n&&Object(m.jsx)(l.a,{plugins:n})]})})})});t.default=Object(s.hot)(e)(Object(r.connect)(h,O)(f))}.call(this,n("3UD+")(e))},xLfX:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return h}));n("q1tI");var a,s=n("Csm0"),r=n("kDLi"),i=n("y6t6"),c=n("jGYO"),l=n("aBYM"),o=n.n(l),u=n("/MKj"),d=n("0cfB"),g=n("Obii"),j=n("vF1F"),p=n("nKUr");const b=e=>({errors:Object(i.a)(e.plugins)}),m={loadPluginsErrors:c.d},h=(Object(u.connect)(b,m),Object(d.hot)(e)(Object(u.connect)(b,m)(({loadPluginsErrors:e,errors:t,children:n})=>{const i=Object(r.useTheme)(),{loading:l}=o()(async()=>{await e()},[c.c]);return l||0===t.length?null:Object(p.jsx)(r.InfoBox,{"aria-label":s.a.pages.PluginsList.signatureErrorNotice,severity:"warning",urlTitle:"Read more about plugin signing",url:"https://grafana.com/docs/grafana/latest/plugins/plugin-signatures/",children:Object(p.jsxs)("div",{children:[a||(a=Object(p.jsx)("p",{children:"Unsigned plugins were found during plugin initialization. Grafana Labs cannot guarantee the integrity of these plugins. We recommend only using signed plugins."})),"The following plugins are disabled and not shown in the list below:",Object(p.jsx)(r.List,{items:t,className:j.css`
            list-style-type: circle;
          `,renderItem:e=>Object(p.jsx)("div",{className:j.css`
                margin-top: ${i.spacing.sm};
              `,children:Object(p.jsxs)(r.HorizontalGroup,{spacing:"sm",justify:"flex-start",align:"center",children:[Object(p.jsx)("strong",{children:e.pluginId}),Object(p.jsx)(r.PluginSignatureBadge,{status:O(e.errorCode),className:j.css`
                    margin-top: 0;
                  `})]})})}),n]})})})));function O(e){switch(e){case g.PluginErrorCode.invalidSignature:return g.PluginSignatureStatus.invalid;case g.PluginErrorCode.missingSignature:return g.PluginSignatureStatus.missing;case g.PluginErrorCode.modifiedSignature:return g.PluginSignatureStatus.modified;default:return g.PluginSignatureStatus.missing}}}).call(this,n("3UD+")(e))},xzGB:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("q1tI");var a=n("vF1F"),s=n("kDLi"),r=n("nKUr");const i=({children:e})=>{const t=Object(s.useStyles2)(c);return Object(r.jsx)("div",{className:"page-container",children:Object(r.jsx)("div",{className:t,children:e})})},c=e=>a.css`
    margin-bottom: ${e.spacing(3)};
  `},y6t6:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return r}));const a=e=>{const t=new RegExp(e.searchQuery,"i");return e.plugins.filter(e=>t.test(e.name)||t.test(e.info.author.name)||t.test(e.type)||t.test(e.info.description))},s=e=>e.errors,r=e=>e.searchQuery}}]);
//# sourceMappingURL=PluginListPage.77c130bd0edeb5f6b6e6.js.map