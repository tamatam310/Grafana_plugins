(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{O6qV:function(e,r,t){"use strict";t.d(r,"a",(function(){return o}));var n=t("q1tI"),s=t("Jzaf"),a=t("IpGs"),c=t("w+lj");function o(e){const r=Object(c.a)(e=>e.promRules),t=Object(c.a)(e=>e.rulerRules),o=Object(n.useRef)({}),u=Object(n.useMemo)(()=>{if(e){const r=Object(s.h)(e);if(!r)throw new Error("Unknown rules source: "+e);return[r]}return Object(s.e)()},[e]);return Object(n.useMemo)(()=>u.map(e=>{var n,c;const u=Object(s.j)(e)?e.name:e,i=null===(n=r[u])||void 0===n?void 0:n.result,p=null===(c=t[u])||void 0===c?void 0:c.result,j=o.current[u];if(j&&j.promRules===i&&j.rulerRules===p)return j.result;const b={};Object.entries(p||{}).forEach(([r,t])=>{const n={rulesSource:e,name:r,groups:[]};b[r]=n,function(e,r){e.groups=r.map(r=>{const t={name:r.name,rules:[]};return t.rules=r.rules.map(r=>function(e,r,t){return Object(a.g)(e)?{name:e.alert,query:e.expr,labels:e.labels||{},annotations:e.annotations||{},rulerRule:e,namespace:r,group:t}:Object(a.m)(e)?{name:e.record,query:e.expr,labels:e.labels||{},annotations:{},rulerRule:e,namespace:r,group:t}:{name:e.grafana_alert.title,query:"",labels:e.labels||{},annotations:e.annotations||{},rulerRule:e,namespace:r,group:t}}(r,e,t)),t})}(n,t)}),null==i||i.forEach(({name:r,groups:t})=>{!function(e,r){r.forEach(r=>{var t;let n=e.groups.find(e=>e.name===r.name);n||(n={name:r.name,rules:[]},e.groups.push(n)),(null!==(t=r.rules)&&void 0!==t?t:[]).forEach(r=>{const t=function(e,r,t){var n;if(Object(s.k)(t))return r.rules.find(r=>r.name===e.name);return null!==(n=r.rules.find(r=>!r.promRule&&l(r,e,!0)))&&void 0!==n?n:r.rules.find(r=>!r.promRule&&l(r,e,!1))}(r,n,e.rulesSource);t?t.promRule=r:n.rules.push(function(e,r,t){return{name:e.name,query:e.query,labels:e.labels||{},annotations:Object(a.f)(e)&&e.annotations||{},promRule:e,namespace:r,group:t}}(r,e,n))})})}(b[r]=b[r]||{rulesSource:e,name:r,groups:[]},t)});const d=Object.values(b);return Object(s.k)(e)&&d.forEach(e=>{e.groups=[{name:"default",rules:e.groups.flatMap(e=>e.rules).sort((e,r)=>e.name.localeCompare(r.name))}]}),o.current[u]={promRules:i,rulerRules:p,result:d},d}).flat(),[r,t,u])}function l(e,r,t=!0){return e.name===r.name&&JSON.stringify([t?u(e.query):"",e.labels,e.annotations])===JSON.stringify([t?u(r.query):"",r.labels||{},Object(a.f)(r)&&r.annotations||{}])}function u(e){return e.length>1&&"("===e[0]&&")"===e[e.length-1]&&(e=e.substr(1,e.length-2)),(e=e.replace(/\s|\n/g,"")).split("").sort().join("")}},Ojp9:function(e,r,t){"use strict";t.r(r),t.d(r,"RedirectToRuleViewer",(function(){return O}));t("q1tI");var n,s,a,c,o=t("Ty5D"),l=t("vF1F"),u=t("kDLi"),i=t("gg9e"),p=t("8qpb"),j=t("Jzaf"),b=t("rBL+"),d=t("CBrm"),f=t("nKUr");const m="Alerting / Find rule";function O(e){const{name:r,sourceName:t}=e.match.params,l=Object(u.useStyles2)(g),{error:O,loading:h,result:x,dispatched:v}=Object(i.b)(r,t);if(O)return Object(f.jsx)(b.a,{title:m,children:Object(f.jsx)(u.Alert,{title:"Failed to load rules from "+t,children:Object(f.jsxs)("details",{className:l.errorMessage,children:[O.message,n||(n=Object(f.jsx)("br",{})),!(null==O||!O.stack)&&O.stack]})})});if(h||!v||!Array.isArray(x))return s||(s=Object(f.jsx)(b.a,{title:m,children:Object(f.jsx)(u.LoadingPlaceholder,{text:"Loading rule..."})}));if(!r||!t)return a||(a=Object(f.jsx)(o.c,{to:"/notfound"}));const y=Object(j.h)(t);if(!y)return Object(f.jsx)(b.a,{title:m,children:Object(f.jsx)(u.Alert,{title:"Could not view rule",children:Object(f.jsx)("details",{className:l.errorMessage,children:`Could not find data source with name: ${t}.`})})});if(1===x.length){const[e]=x;return Object(f.jsx)(o.c,{to:Object(p.c)(y,e,"/alerting/list")})}return Object(f.jsxs)(b.a,{title:m,children:[Object(f.jsxs)("div",{children:["Several rules in ",Object(f.jsx)("span",{className:l.param,children:t})," matched the name"," ",Object(f.jsx)("span",{className:l.param,children:r}),", please select the rule you want to view."]}),Object(f.jsx)("div",{className:l.rules,children:x.map((e,r)=>Object(f.jsxs)(u.Card,{heading:e.name,href:Object(p.c)(y,e,"/alerting/list"),children:[Object(f.jsxs)(u.Card.Meta,{separator:"",children:[c||(c=Object(f.jsx)(u.Icon,{name:"folder"})),Object(f.jsx)("span",{className:l.namespace,children:`${e.namespace.name} / ${e.group.name}`})]}),Object(f.jsx)(u.Card.Tags,{children:Object(f.jsx)(d.a,{labels:e.labels})})]},`${e.name}-${r}`))})]})}function g(e){return{param:l.css`
      font-style: italic;
      color: ${e.colors.text.secondary};
    `,rules:l.css`
      margin-top: ${e.spacing(2)};
    `,namespace:l.css`
      margin-left: ${e.spacing(1)};
    `,errorMessage:l.css`
      white-space: pre-wrap;
    `}}r.default=Object(u.withErrorBoundary)(O,{style:"page"})},gg9e:function(e,r,t){"use strict";t.d(r,"a",(function(){return j})),t.d(r,"b",(function(){return b}));var n=t("q1tI"),s=t("/MKj"),a=t("fXZ9"),c=t("O6qV"),o=t("w+lj"),l=t("4Yfp"),u=t("K3Xr"),i=t("IpGs");function p(){return(p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function j(e,r){const t=d(r),s=Object(c.a)(r);return p({},t,{result:Object(n.useMemo)(()=>{if(e&&r&&0!==s.length)for(const t of s)for(const n of t.groups)for(const t of n.rules){const n=u.b(r,t);if(u.a(n,e))return t}},[e,r,s])})}function b(e,r){const t=d(r),s=Object(c.a)(r);return p({},t,{result:Object(n.useMemo)(()=>{if(!e||!r||0===s.length)return[];const t=[];for(const r of s)for(const n of r.groups)for(const r of n.rules)r.name===e&&t.push(r);return t},[e,r,s])})}function d(e){var r;const t=Object(s.useDispatch)(),a=Object(o.a)(e=>e.promRules),c=f(e,a),u=Object(o.a)(e=>e.rulerRules),p=f(e,u);return Object(n.useEffect)(()=>{e&&(t(Object(l.q)(e)),t(Object(l.r)(e)))},[t,e]),{loading:c.loading||p.loading,error:(null!==(r=c.error)&&void 0!==r?r:Object(i.n)(p))?void 0:p.error,dispatched:c.dispatched&&p.dispatched}}function f(e,r){if(!e)return a.c;const t=r[e];return t||a.c}},"rBL+":function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return i}));t("q1tI");var n=t("vF1F"),s=t("t8hP"),a=t("kDLi"),c=t("ZGyg"),o=t("nKUr");function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function u(e){const{wrapInContent:r=!0,children:t,title:n}=e,u=Object(a.useStyles2)(p);return Object(o.jsxs)(c.a,{children:[Object(o.jsx)(a.PageToolbar,{title:n,pageIcon:"bell",onGoBack:()=>s.locationService.push("/alerting/list")}),Object(o.jsx)("div",{className:u.content,children:r?Object(o.jsx)(i,l({},e)):t})]})}function i({children:e,padding:r=2}){const t=Object(a.useStyles2)(j(r));return Object(o.jsx)("div",{className:t.wrapper,children:e})}const p=e=>({content:n.css`
      margin: ${e.spacing(0,2,2)};
      max-width: ${e.breakpoints.values.xxl}px;
    `}),j=e=>r=>({wrapper:n.css`
      background: ${r.colors.background.primary};
      border: 1px solid ${r.colors.border.weak};
      border-radius: ${r.shape.borderRadius()};
      padding: ${r.spacing(e)};
    `})}}]);
//# sourceMappingURL=AlertingRedirectToRule.77c130bd0edeb5f6b6e6.js.map