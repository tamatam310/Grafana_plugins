(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"+nK6":function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"TeamList",(function(){return w}));var r,s,a,i,c,d=n("q1tI"),o=n("0cfB"),u=n("ZGyg"),m=n("kDLi"),l=n("QQVG"),b=n("GQ3c"),h=n("gxTa"),j=n("8uRs"),f=n("lzJ5"),p=n("EKT6"),g=n("ZFWI"),O=n("umNM"),x=n("hBny"),y=n("BPIC"),v=n("nKUr");function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class w extends d.PureComponent{constructor(...e){super(...e),k(this,"deleteTeam",e=>{this.props.deleteTeam(e.id)}),k(this,"onSearchQueryChange",e=>{this.props.setSearchQuery(e)})}componentDidMount(){this.fetchTeams()}async fetchTeams(){await this.props.loadTeams()}renderTeam(e){const{editorsCanAdmin:t,signedInUser:n}=this.props,r=e.permission,s="org/teams/edit/"+e.id,a=Object(j.h)({permission:r,editorsCanAdmin:t,signedInUser:n});return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{className:"width-4 text-center link-td",children:Object(v.jsx)("a",{href:s,children:Object(v.jsx)("img",{className:"filter-table__avatar",src:e.avatarUrl})})}),Object(v.jsx)("td",{className:"link-td",children:Object(v.jsx)("a",{href:s,children:e.name})}),Object(v.jsx)("td",{className:"link-td",children:Object(v.jsx)("a",{href:s,children:e.email})}),Object(v.jsx)("td",{className:"link-td",children:Object(v.jsx)("a",{href:s,children:e.memberCount})}),Object(v.jsx)("td",{className:"text-right",children:Object(v.jsx)(m.DeleteButton,{size:"sm",disabled:!a,onConfirm:()=>this.deleteTeam(e)})})]},e.id)}renderEmptyList(){return r||(r=Object(v.jsx)(l.a,{title:"You haven't created any teams yet.",buttonIcon:"users-alt",buttonLink:"org/teams/new",buttonTitle:" New team",proTip:"Assign folder and dashboard permissions to teams instead of users to ease administration.",proTipLink:"",proTipLinkTitle:"",proTipTarget:"_blank"}))}renderTeamList(){const{teams:e,searchQuery:t,editorsCanAdmin:n,signedInUser:r}=this.props,d=n&&r.orgRole===b.i.Viewer,o=d?" disabled":"",u=d?"#":"org/teams/new";return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"page-action-bar",children:[Object(v.jsx)("div",{className:"gf-form gf-form--grow",children:Object(v.jsx)(p.a,{placeholder:"Search teams",value:t,onChange:this.onSearchQueryChange})}),Object(v.jsx)(m.LinkButton,{className:o,href:u,children:"New Team"})]}),Object(v.jsx)("div",{className:"admin-list-table",children:Object(v.jsxs)("table",{className:"filter-table filter-table--hover form-inline",children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[s||(s=Object(v.jsx)("th",{})),a||(a=Object(v.jsx)("th",{children:"Name"})),i||(i=Object(v.jsx)("th",{children:"Email"})),c||(c=Object(v.jsx)("th",{children:"Members"})),Object(v.jsx)("th",{style:{width:"1%"}})]})}),Object(v.jsx)("tbody",{children:e.map(e=>this.renderTeam(e))})]})})]})}renderList(){const{teamsCount:e,hasFetched:t}=this.props;return t?e>0?this.renderTeamList():this.renderEmptyList():null}render(){const{hasFetched:e,navModel:t}=this.props;return Object(v.jsx)(u.b,{navModel:t,children:Object(v.jsx)(u.b.Contents,{isLoading:!e,children:this.renderList()})})}}const T={loadTeams:h.g,deleteTeam:h.c,setSearchQuery:y.c};t.default=Object(o.hot)(e)(Object(x.a)((function(e){return{navModel:Object(f.a)(e.navIndex,"teams"),teams:Object(j.f)(e.teams),searchQuery:Object(j.b)(e.teams),teamsCount:Object(j.g)(e.teams),hasFetched:e.teams.hasFetched,editorsCanAdmin:g.a.editorsCanAdmin,signedInUser:O.a.user}}),T,e=>e.teams)(w))}.call(this,n("3UD+")(e))},"8uRs":function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"g",(function(){return c})),n.d(t,"c",(function(){return d})),n.d(t,"f",(function(){return o})),n.d(t,"e",(function(){return u})),n.d(t,"i",(function(){return m})),n.d(t,"h",(function(){return l}));var r=n("GQ3c");const s=e=>e.searchQuery,a=e=>e.searchMemberQuery,i=e=>e.groups,c=e=>e.teams.length,d=(e,t)=>e.team.id===parseInt(t,10)?e.team:null,o=e=>{const t=RegExp(e.searchQuery,"i");return e.teams.filter(e=>t.test(e.name))},u=e=>{const t=RegExp(e.searchMemberQuery,"i");return e.members.filter(e=>t.test(e.login)||t.test(e.email)||t.test(e.name))},m=e=>{const{members:t,signedInUser:n,editorsCanAdmin:s}=e,a=t.find(e=>e.userId===n.id),i=a?a.permission:r.k.Member;return l({permission:i,signedInUser:n,editorsCanAdmin:s})},l=e=>{const{permission:t,signedInUser:n,editorsCanAdmin:s}=e,a=n.isGrafanaAdmin||n.orgRole===r.i.Admin,i=t===r.k.Admin;return a||i||!s}},gxTa:function(e,t,n){"use strict";n.d(t,"g",(function(){return c})),n.d(t,"d",(function(){return d})),n.d(t,"f",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"i",(function(){return m})),n.d(t,"j",(function(){return l})),n.d(t,"e",(function(){return b})),n.d(t,"a",(function(){return h})),n.d(t,"h",(function(){return j})),n.d(t,"c",(function(){return f})),n.d(t,"k",(function(){return p}));var r=n("t8hP"),s=n("3SGO"),a=n("zsYB"),i=n("BPIC");function c(){return async e=>{const t=await Object(r.getBackendSrv)().get("/api/teams/search",{perpage:1e3,page:1});e(Object(i.g)(t.teams))}}function d(e){return async t=>{const n=await Object(r.getBackendSrv)().get("/api/teams/"+e);t(Object(i.e)(n)),t(Object(s.d)(Object(a.a)(n)))}}function o(){return async(e,t)=>{const n=t().team.team,s=await Object(r.getBackendSrv)().get(`/api/teams/${n.id}/members`);e(Object(i.f)(s))}}function u(e){return async(t,n)=>{const s=n().team.team;await Object(r.getBackendSrv)().post(`/api/teams/${s.id}/members`,{userId:e}),t(o())}}function m(e){return async(t,n)=>{const s=n().team.team;await Object(r.getBackendSrv)().delete(`/api/teams/${s.id}/members/${e}`),t(o())}}function l(e,t){return async(n,s)=>{const a=s().team.team;await Object(r.getBackendSrv)().put("/api/teams/"+a.id,{name:e,email:t}),n(d(a.id))}}function b(){return async(e,t)=>{const n=t().team.team,s=await Object(r.getBackendSrv)().get(`/api/teams/${n.id}/groups`);e(Object(i.d)(s))}}function h(e){return async(t,n)=>{const s=n().team.team;await Object(r.getBackendSrv)().post(`/api/teams/${s.id}/groups`,{groupId:e}),t(b())}}function j(e){return async(t,n)=>{const s=n().team.team;await Object(r.getBackendSrv)().delete(`/api/teams/${s.id}/groups/${encodeURIComponent(e)}`),t(b())}}function f(e){return async t=>{await Object(r.getBackendSrv)().delete("/api/teams/"+e),t(c())}}function p(e){return async t=>{await Object(r.getBackendSrv)().put(`/api/teams/${e.teamId}/members/${e.userId}`,{permission:e.permission}),t(o())}}},hBny:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("/MKj"),s=n("zVNn"),a=n("q1tI"),i=n("2mql"),c=n.n(i),d=n("nKUr");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const u=(e,t,n)=>i=>{const u=Object(r.connect)(e,t)(i),m=e=>{const t=Object(r.useDispatch)();return Object(a.useEffect)(()=>function(){t(Object(s.a)({stateSelector:n}))},[t]),Object(d.jsx)(u,o({},e))};return m.displayName=`ConnectWithCleanUp(${u.displayName})`,c()(m,i),m}},zsYB:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var r=n("GQ3c"),s=n("ZFWI");function a(e){const t={img:e.avatarUrl,id:"team-"+e.id,subTitle:"Manage members and settings",url:"",text:e.name,breadcrumbs:[{title:"Teams",url:"org/teams"}],children:[{active:!1,icon:"users-alt",id:"team-members-"+e.id,text:"Members",url:`org/teams/edit/${e.id}/members`},{active:!1,icon:"sliders-v-alt",id:"team-settings-"+e.id,text:"Settings",url:`org/teams/edit/${e.id}/settings`}]};return s.b.licenseInfo.hasLicense&&t.children.push({active:!1,icon:"sync",id:"team-groupsync-"+e.id,text:"External group sync",url:`org/teams/edit/${e.id}/groupsync`}),t}function i(e){const t=a({avatarUrl:"public/img/user_profile.png",id:1,name:"Loading",email:"loading",memberCount:0,permission:r.k.Member});let n;for(const r of t.children)if(r.id.indexOf(e)>0){r.active=!0,n=r;break}return{main:t,node:n}}}}]);
//# sourceMappingURL=TeamList.77c130bd0edeb5f6b6e6.js.map