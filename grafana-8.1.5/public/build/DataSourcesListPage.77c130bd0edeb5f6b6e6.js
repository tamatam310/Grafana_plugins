(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"0jq5":function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a("q1tI"),s=a("EKT6"),n=a("kDLi"),o=a("nKUr");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}class u extends r.PureComponent{render(){const{searchQuery:e,linkButton:t,setSearchQuery:a,target:r,placeholder:u="Search by name or type"}=this.props,i={href:null==t?void 0:t.href};return r&&(i.target=r),Object(o.jsxs)("div",{className:"page-action-bar",children:[Object(o.jsx)("div",{className:"gf-form gf-form--grow",children:Object(o.jsx)(s.a,{value:e,onChange:a,placeholder:u})}),t&&Object(o.jsx)(n.LinkButton,c({},i,{children:t.title}))]})}}},"3/ef":function(e,t,a){"use strict";a("q1tI");var r,s=a("kDLi"),n=a("vF1F"),o=a("nKUr");t.a=({dataSources:e,layoutMode:t})=>{const a=Object(s.useStyles)(c);return Object(o.jsx)("ul",{className:a.list,children:e.map((e,t)=>Object(o.jsx)("li",{children:Object(o.jsxs)(s.Card,{heading:e.name,href:"datasources/edit/"+e.uid,children:[Object(o.jsx)(s.Card.Figure,{children:Object(o.jsx)("img",{src:e.typeLogoUrl,alt:e.name})}),Object(o.jsx)(s.Card.Meta,{children:[e.typeName,e.url,e.isDefault&&(r||(r=Object(o.jsx)(s.Tag,{name:"default",colorIndex:1},"default-tag")))]})]})},e.id))})};const c=()=>({list:n.css`
      list-style: none;
    `})},rouV:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"DataSourcesListPage",(function(){return O}));var r=a("q1tI"),s=a("/MKj"),n=a("0cfB"),o=a("ZGyg"),c=a("0jq5"),u=a("QQVG"),i=a("3/ef"),d=a("5BCB"),l=a("lzJ5"),h=a("frIo"),j=a("FFN/"),b=a("nKUr");function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}const f={title:"No data sources defined",buttonIcon:"database",buttonLink:"datasources/new",buttonTitle:"Add data source",proTip:"You can also define data sources through configuration files.",proTipLink:"http://docs.grafana.org/administration/provisioning/#datasources?utm_source=grafana_ds_list",proTipLinkTitle:"Learn more",proTipTarget:"_blank"};class O extends r.PureComponent{componentDidMount(){this.props.loadDataSources()}render(){const{dataSources:e,dataSourcesCount:t,navModel:a,layoutMode:r,searchQuery:s,setDataSourcesSearchQuery:n,hasFetched:d}=this.props;return Object(b.jsx)(o.b,{navModel:a,children:Object(b.jsx)(o.b.Contents,{isLoading:!d,children:Object(b.jsxs)(b.Fragment,{children:[d&&0===t&&Object(b.jsx)(u.a,p({},f)),d&&t>0&&[Object(b.jsx)(c.a,{searchQuery:s,setSearchQuery:e=>n(e),linkButton:{href:"datasources/new",title:"Add data source"}},"action-bar"),Object(b.jsx)(i.a,{dataSources:e,layoutMode:r},"list")]]})})})}}const g={loadDataSources:d.f,setDataSourcesSearchQuery:j.l,setDataSourcesLayoutMode:j.k};t.default=Object(n.hot)(e)(Object(s.connect)((function(e){return{navModel:Object(l.a)(e.navIndex,"datasources"),dataSources:Object(h.d)(e.dataSources),layoutMode:Object(h.f)(e.dataSources),dataSourcesCount:Object(h.e)(e.dataSources),searchQuery:Object(h.g)(e.dataSources),hasFetched:e.dataSources.hasFetched}}),g)(O))}.call(this,a("3UD+")(e))}}]);
//# sourceMappingURL=DataSourcesListPage.77c130bd0edeb5f6b6e6.js.map