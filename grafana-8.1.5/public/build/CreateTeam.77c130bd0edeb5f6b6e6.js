(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"9i9D":function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"CreateTeam",(function(){return p}));var r,a,c=n("q1tI"),i=n("ZGyg"),s=n("0cfB"),l=n("kDLi"),o=n("t8hP"),d=n("/MKj"),j=n("lzJ5"),b=n("nKUr");function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}class p extends c.PureComponent{constructor(...e){var t,n,r;super(...e),r=async e=>{const t=await Object(o.getBackendSrv)().post("/api/teams",e);t.teamId&&o.locationService.push("/org/teams/edit/"+t.teamId)},(n="create")in(t=this)?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}render(){const{navModel:e}=this.props;return Object(b.jsx)(i.b,{navModel:e,children:Object(b.jsx)(i.b.Contents,{children:Object(b.jsx)(l.Form,{onSubmit:this.create,children:({register:e})=>Object(b.jsxs)(l.FieldSet,{label:"New Team",children:[Object(b.jsx)(l.Field,{label:"Name",children:Object(b.jsx)(l.Input,u({},e("name",{required:!0}),{width:60}))}),Object(b.jsx)(l.Field,{label:Object(b.jsxs)(l.Label,{children:[r||(r=Object(b.jsx)("span",{children:"Email"})),Object(b.jsx)(l.Tooltip,{content:"This is optional and is primarily used for allowing custom team avatars.",children:Object(b.jsx)(l.Icon,{name:"info-circle",style:{marginLeft:6}})})]}),children:Object(b.jsx)(l.Input,u({},e("email"),{type:"email",placeholder:"email@test.com",width:60}))}),a||(a=Object(b.jsx)("div",{className:"gf-form-button-row",children:Object(b.jsx)(l.Button,{type:"submit",variant:"primary",children:"Create"})}))]})})})})}}t.default=Object(s.hot)(e)(Object(d.connect)((function(e){return{navModel:Object(j.a)(e.navIndex,"teams")}}))(p))}.call(this,n("3UD+")(e))}}]);
//# sourceMappingURL=CreateTeam.77c130bd0edeb5f6b6e6.js.map