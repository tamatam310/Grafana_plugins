(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"4kIt":function(e,t,n){"use strict";n("q1tI");var a,i=n("kDLi"),o=n("nKUr");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}t.a=({onSubmit:e,orgName:t})=>Object(o.jsx)(i.Form,{defaultValues:{orgName:t},onSubmit:({orgName:t})=>e(t),children:({register:e})=>Object(o.jsxs)(i.FieldSet,{label:"Organization profile",children:[Object(o.jsx)(i.Field,{label:"Organization name",children:Object(o.jsx)(i.Input,r({type:"text"},e("orgName",{required:!0})))}),a||(a=Object(o.jsx)(i.Button,{type:"submit",children:"Update organization name"}))]})})},e5mm:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"OrgDetailsPage",(function(){return g}));var a,i=n("q1tI"),o=n("0cfB"),r=n("/MKj"),s=n("ZGyg"),c=n("4kIt"),d=n("mHLn"),l=n("vl1P"),h=n("lzJ5"),b=n("fZn8"),u=n("kDLi"),m=n("nKUr");class g extends i.PureComponent{constructor(...e){var t,n,a;super(...e),a=e=>{this.props.setOrganizationName(e),this.props.updateOrganization()},(n="onUpdateOrganization")in(t=this)?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a}async componentDidMount(){await this.props.loadOrganization()}render(){const{navModel:e,organization:t}=this.props,n=0===Object.keys(t).length;return Object(m.jsx)(s.b,{navModel:e,children:Object(m.jsx)(s.b.Contents,{isLoading:n,children:!n&&Object(m.jsxs)(u.VerticalGroup,{spacing:"lg",children:[Object(m.jsx)(c.a,{onSubmit:this.onUpdateOrganization,orgName:t.name}),a||(a=Object(m.jsx)(d.b,{resourceUri:"org"}))]})})})}}const j={loadOrganization:l.a,setOrganizationName:b.c,updateOrganization:l.b};t.default=Object(o.hot)(e)(Object(r.connect)((function(e){return{navModel:Object(h.a)(e.navIndex,"org-settings"),organization:e.organization.organization}}),j)(g))}.call(this,n("3UD+")(e))},mHLn:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a,i,o=n("q1tI"),r=n("vF1F"),s=n("kDLi"),c=n("Csm0"),d=n("NXk7"),l=n("oeIY"),h=n("nKUr");function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const u=[{value:"",label:"Default"},{value:"dark",label:"Dark"},{value:"light",label:"Light"}];class m extends o.PureComponent{constructor(e){super(e),b(this,"service",void 0),b(this,"onSubmitForm",async()=>{const{homeDashboardId:e,theme:t,timezone:n}=this.state;await this.service.update({homeDashboardId:e,theme:t,timezone:n}),window.location.reload()}),b(this,"onThemeChanged",e=>{this.setState({theme:e})}),b(this,"onTimeZoneChanged",e=>{e&&this.setState({timezone:e})}),b(this,"onHomeDashboardChanged",e=>{this.setState({homeDashboardId:e})}),b(this,"getFullDashName",e=>void 0===e.folderTitle||""===e.folderTitle?e.title:e.folderTitle+" / "+e.title),this.service=new l.a(e.resourceUri),this.state={homeDashboardId:0,theme:"",timezone:"",dashboards:[]}}async componentDidMount(){const e=await this.service.load(),t=await d.b.search({starred:!0});if(e.homeDashboardId>0&&!t.find(t=>t.id===e.homeDashboardId)){const n=await d.b.search({dashboardIds:[e.homeDashboardId]});n&&n.length>0&&t.push(n[0])}this.setState({homeDashboardId:e.homeDashboardId,theme:e.theme,timezone:e.timezone,dashboards:[{id:0,title:"Default",tags:[],type:"",uid:"",uri:"",url:"",folderId:0,folderTitle:"",folderUid:"",folderUrl:"",isStarred:!1,slug:"",items:[]},...t]})}render(){const{theme:e,timezone:t,homeDashboardId:n,dashboards:o}=this.state,r=g();return Object(h.jsx)(s.Form,{onSubmit:this.onSubmitForm,children:()=>{var d;return Object(h.jsxs)(s.FieldSet,{label:"Preferences",children:[Object(h.jsx)(s.Field,{label:"UI Theme",children:Object(h.jsx)(s.RadioButtonGroup,{options:u,value:null===(d=u.find(t=>t.value===e))||void 0===d?void 0:d.value,onChange:this.onThemeChanged})}),Object(h.jsx)(s.Field,{label:Object(h.jsxs)(s.Label,{children:[Object(h.jsx)("span",{className:r.labelText,children:"Home Dashboard"}),a||(a=Object(h.jsx)(s.Tooltip,{content:"Not finding dashboard you want? Star it first, then it should appear in this select box.",children:Object(h.jsx)(s.Icon,{name:"info-circle"})}))]}),"aria-label":"User preferences home dashboard drop down",children:Object(h.jsx)(s.Select,{menuShouldPortal:!0,value:o.find(e=>e.id===n),getOptionValue:e=>e.id,getOptionLabel:this.getFullDashName,onChange:e=>this.onHomeDashboardChanged(e.id),options:o,placeholder:"Choose default dashboard"})}),Object(h.jsx)(s.Field,{label:"Timezone","aria-label":c.a.components.TimeZonePicker.container,children:Object(h.jsx)(s.TimeZonePicker,{includeInternal:!0,value:t,onChange:this.onTimeZoneChanged})}),i||(i=Object(h.jsx)("div",{className:"gf-form-button-row",children:Object(h.jsx)(s.Button,{variant:"primary","aria-label":"User preferences save button",children:"Save"})}))]})}})}}t.b=m;const g=Object(s.stylesFactory)(()=>({labelText:r.css`
      margin-right: 6px;
    `}))},vl1P:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s}));var a=n("t8hP"),i=n("fZn8"),o=n("3SGO");function r(e={getBackendSrv:a.getBackendSrv}){return async t=>{const n=await e.getBackendSrv().get("/api/org");return t(Object(i.b)(n)),n}}function s(e={getBackendSrv:a.getBackendSrv}){return async(t,n)=>{const a=n().organization.organization;await e.getBackendSrv().put("/api/org",{name:a.name}),t(Object(o.c)(a.name)),t(r(e))}}}}]);
//# sourceMappingURL=OrgDetailsPage.77c130bd0edeb5f6b6e6.js.map