(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"6PW0":function(e,t,s){"use strict";var a=s("q1tI"),n=s("jYz7"),r=s("Obii"),o=s("kDLi"),i=s("Csm0"),l=s("Hi79"),c=s("lcF4"),d=s("vF1F"),h=s("nKUr");const u=e=>d.css`
  margin: 0;
  margin-left: ${e.spacing.md};
  font-size: ${e.typography.size.sm};
  color: ${e.colors.textWeak};
`,p=({children:e})=>{const t=Object(o.useStyles)(u);return Object(h.jsx)("p",{className:t,children:e})};function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e}).apply(this,arguments)}const f=({options:e,onOptionsChange:t,panel:s,data:a,dataFrames:n,transformId:i,transformationOptions:d,selectedDataFrame:u,onDataFrameChange:f,downloadForExcel:b,toggleDownloadForExcel:g})=>{var j;const O=Object(l.a)(),x=null==s?void 0:s.getTransformations(),v=Boolean(null==x?void 0:x.length)&&"join by time"!==i,y=s&&!(null!==(j=s.plugin)&&void 0!==j&&j.fieldConfigRegistry.isEmpty());let w=n;u===r.DataTransformerID.seriesToColumns&&(w=a);const D=[...d,...w.map((e,t)=>({value:t,label:`${Object(r.getFrameDisplayName)(e)} (${t})`}))];return Object(h.jsx)("div",{className:O.dataDisplayOptions,children:Object(h.jsx)(c.a,{id:"Data options",index:0,title:"Data options",headerElement:Object(h.jsx)(p,{children:function(){if(!a)return"";const t=[];return u===r.DataTransformerID.seriesToColumns?t.push("Series joined by time"):a.length>1&&t.push(Object(r.getFrameDisplayName)(a[u])),(e.withTransforms||e.withFieldConfig)&&(e.withTransforms&&t.push("Panel transforms"),e.withTransforms&&e.withFieldConfig,e.withFieldConfig&&t.push("Formatted data")),b&&t.push("Excel header"),t.join(", ")}()}),isOpen:!1,children:Object(h.jsx)("div",{className:O.options,"data-testid":"dataOptions",children:Object(h.jsxs)(o.VerticalGroup,{spacing:"none",children:[a.length>1&&Object(h.jsx)(o.Field,{label:"Show data frame",children:Object(h.jsx)(o.Select,{menuShouldPortal:!0,options:D,value:u,onChange:f,width:30,"aria-label":"Select dataframe"})}),Object(h.jsxs)(o.HorizontalGroup,{children:[v&&t&&Object(h.jsx)(o.Field,{label:"Apply panel transformations",description:"Table data is displayed with transformations defined in the panel Transform tab.",children:Object(h.jsx)(o.Switch,{value:!!e.withTransforms,onChange:()=>t(m({},e,{withTransforms:!e.withTransforms}))})}),y&&t&&Object(h.jsx)(o.Field,{label:"Formatted data",description:"Table data is formatted with options defined in the Field and Override tabs.",children:Object(h.jsx)(o.Switch,{value:!!e.withFieldConfig,onChange:()=>t(m({},e,{withFieldConfig:!e.withFieldConfig}))})}),Object(h.jsx)(o.Field,{label:"Download for Excel",description:"Adds header to CSV for use with Excel",children:Object(h.jsx)(o.Switch,{value:b,onChange:g})})]})]})})})})};var b,g,j=s("ZFWI"),O=s("Iab2"),x=s("QJHg");function v(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}s.d(t,"a",(function(){return y}));class y extends a.PureComponent{constructor(e){var t;super(e),v(this,"exportCsv",(e,t={})=>{const{panel:s}=this.props,{transformId:a}=this.state,n=Object(r.toCSV)([e],t),o=new Blob([String.fromCharCode(65279),n],{type:"text/csv;charset=utf-8"}),i=`${s?s.getDisplayTitle():"Explore"}-data${a!==r.DataTransformerID.noop?"-as-"+a.toLocaleLowerCase():""}-${Object(r.dateTimeFormat)(new Date)}.csv`;Object(O.saveAs)(o,i)}),v(this,"exportLogsAsTxt",()=>{var e;const{data:t,panel:s}=this.props,a=Object(x.b)(t||[],void 0);let n="";null===(e=a.meta)||void 0===e||e.forEach(e=>{const t=`${e.label}: ${JSON.stringify(e.value)}\n`;n+=t}),n+="\n\n",a.rows.forEach(e=>{const t=Object(r.dateTimeFormatISO)(e.timeEpochMs)+"\t"+e.entry+"\n";n+=t});const o=new Blob([n],{type:"text/plain;charset=utf-8"}),i=`${s?s.getDisplayTitle():"Explore"}-logs-${Object(r.dateTimeFormat)(new Date)}.txt`;Object(O.saveAs)(o,i)}),v(this,"onDataFrameChange",e=>{this.setState({transformId:e.value===r.DataTransformerID.seriesToColumns?r.DataTransformerID.seriesToColumns:r.DataTransformerID.noop,dataFrameIndex:"number"==typeof e.value?e.value:0,selectedDataFrame:e.value})}),v(this,"toggleDownloadForExcel",()=>{this.setState(e=>({downloadForExcel:!e.downloadForExcel}))}),this.state={selectedDataFrame:0,dataFrameIndex:0,transformId:r.DataTransformerID.noop,transformationOptions:w(),transformedData:null!==(t=e.data)&&void 0!==t?t:[],downloadForExcel:!1}}componentDidUpdate(e,t){if(this.props.data)if(this.props.options.withTransforms)this.setState({transformedData:this.props.data});else if(e.data===this.props.data&&t.transformId===this.state.transformId);else{const e=this.state.transformationOptions.find(e=>e.value===this.state.transformId);if(e&&e.transformer.id!==r.DataTransformerID.noop){const t=this.state.selectedDataFrame,s=this.state.dataFrameIndex,a=Object(r.transformDataFrame)([e.transformer],this.props.data).subscribe(e=>{this.setState({transformedData:e,selectedDataFrame:t,dataFrameIndex:s},()=>a.unsubscribe())});return}this.setState({transformedData:this.props.data})}else this.setState({transformedData:[]})}getProcessedData(){const{options:e,panel:t}=this.props,s=this.state.transformedData;return e.withFieldConfig&&t?Object(r.applyFieldOverrides)({data:s,theme:j.a.theme2,fieldConfig:t.fieldConfig,replaceVariables:e=>e}):Object(r.applyRawFieldOverrides)(s)}render(){const{isLoading:e,options:t,data:s,panel:a,onOptionsChange:r}=this.props,{dataFrameIndex:c,transformId:u,transformationOptions:p,selectedDataFrame:m,downloadForExcel:j}=this.state,O=Object(l.a)();if(e)return b||(b=Object(h.jsxs)("div",{children:[Object(h.jsx)(o.Spinner,{inline:!0})," Loading"]}));const x=this.getProcessedData();if(!x||!x.length)return g||(g=Object(h.jsx)("div",{children:"No Data"}));const v=x[c]?c:0,y=x[v],w=x.some(e=>{var t;return"logs"===(null==e||null===(t=e.meta)||void 0===t?void 0:t.preferredVisualisationType)});return Object(h.jsxs)("div",{className:O.dataTabContent,"aria-label":i.a.components.PanelInspector.Data.content,children:[Object(h.jsxs)("div",{className:O.actionsWrapper,children:[Object(h.jsx)(f,{data:s,panel:a,options:t,dataFrames:x,transformId:u,transformationOptions:p,selectedDataFrame:m,downloadForExcel:j,onOptionsChange:r,onDataFrameChange:this.onDataFrameChange,toggleDownloadForExcel:this.toggleDownloadForExcel}),Object(h.jsx)(o.Button,{variant:"primary",onClick:()=>this.exportCsv(x[c],{useExcelHeader:this.state.downloadForExcel}),className:d.css`
              margin-bottom: 10px;
            `,children:"Download CSV"}),w&&Object(h.jsx)(o.Button,{variant:"primary",onClick:this.exportLogsAsTxt,className:d.css`
                margin-bottom: 10px;
                margin-left: 10px;
              `,children:"Download logs"})]}),Object(h.jsx)(o.Container,{grow:1,children:Object(h.jsx)(n.a,{children:({width:e,height:t})=>0===e?null:Object(h.jsx)("div",{style:{width:e,height:t},children:Object(h.jsx)(o.Table,{width:e,height:t,data:y})})})})]})}}function w(){return[{value:r.DataTransformerID.seriesToColumns,label:"Series joined by time",transformer:{id:r.DataTransformerID.seriesToColumns,options:{byField:"Time"}}}]}},"6y2Z":function(e,t,s){"use strict";var a=s("q1tI");t.a=function(e){var t=Object(a.useState)(e),s=t[0],n=t[1];return[s,Object(a.useCallback)((function(e){n("boolean"==typeof e?e:function(e){return!e})}),[n])]}},HgkN:function(e,t,s){"use strict";s.d(t,"a",(function(){return g}));var a=s("q1tI"),n=s("LvDl"),r=s("Obii"),o=s("kDLi"),i=s("jYz7"),l=s("Csm0"),c=s("HJRA"),d=s("Hi79"),h=s("nKUr");const u=["table","fields"];function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e}).apply(this,arguments)}function m(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var f;!function(e){e.PanelJSON="panel",e.DataJSON="data",e.DataStructure="structure"}(f||(f={}));const b=[{label:"Panel JSON",description:"The model saved in the dashboard JSON that configures how everything works.",value:f.PanelJSON},{label:"Data",description:"The raw model passed to the panel visualization",value:f.DataJSON},{label:"DataFrame structure",description:"Response info without any values",value:f.DataStructure}];class g extends a.PureComponent{constructor(e){super(e),m(this,"hasPanelJSON",void 0),m(this,"onSelectChanged",e=>{const t=j(this.getJSONObject(e.value));this.setState({text:t,show:e.value})}),m(this,"onTextChanged",e=>{this.setState({text:e})}),m(this,"onApplyPanelModel",()=>{const{panel:e,dashboard:t,onClose:s}=this.props;if(this.hasPanelJSON){try{if(t.meta.canEdit){const s=JSON.parse(this.state.text);t.shouldUpdateDashboardPanelFromJSON(s,e),e.restoreModel(s),e.refresh(),c.a.emit(r.AppEvents.alertSuccess,["Panel model updated"])}else c.a.emit(r.AppEvents.alertError,["Unable to apply"])}catch(e){console.error("Error applying updates",e),c.a.emit(r.AppEvents.alertError,["Invalid JSON text"])}s()}}),this.hasPanelJSON=!(!e.panel||!e.dashboard),this.state={show:this.hasPanelJSON?f.PanelJSON:f.DataJSON,text:this.hasPanelJSON?j(e.panel.getSaveModel()):j(e.data)}}getJSONObject(e){const{data:t,panel:s}=this.props;if(e===f.DataJSON)return t;if(e===f.DataStructure){return(null==t?void 0:t.series)?t.series.map(e=>p({},function(e,t){if(null==e)return{};var s,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)s=r[a],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,u),{fields:e.fields.map(e=>Object(n.chain)(e).omit("values").omit("state").omit("display").value())})):{note:"Missing Response Data"}}return this.hasPanelJSON&&e===f.PanelJSON?s.getSaveModel():{note:"Unknown Object: "+e}}render(){const{dashboard:e}=this.props,{show:t,text:s}=this.state,a=this.hasPanelJSON?b:b.slice(1,b.length),n=b.find(e=>e.value===t),r=t===f.PanelJSON,c=e&&e.meta.canEdit,u=Object(d.a)();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:u.toolbar,"aria-label":l.a.components.PanelInspector.Json.content,children:[Object(h.jsx)(o.Field,{label:"Select source",className:"flex-grow-1",children:Object(h.jsx)(o.Select,{menuShouldPortal:!0,options:a,value:n,onChange:this.onSelectChanged})}),this.hasPanelJSON&&r&&c&&Object(h.jsx)(o.Button,{className:u.toolbarItem,onClick:this.onApplyPanelModel,children:"Apply"})]}),Object(h.jsx)("div",{className:u.content,children:Object(h.jsx)(i.a,{disableWidth:!0,children:({height:e})=>Object(h.jsx)(o.CodeEditor,{width:"100%",height:e,language:"json",showLineNumbers:!0,showMiniMap:(s&&s.length)>100,value:s||"",readOnly:!r,onBlur:this.onTextChanged})})})]})}}function j(e){return JSON.stringify(e,null,2)}},Hi79:function(e,t,s){"use strict";s.d(t,"a",(function(){return o}));var a=s("vF1F"),n=s("ZFWI"),r=s("kDLi");const o=Object(r.stylesFactory)(()=>({wrap:a.css`
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      flex: 1 1 0;
    `,toolbar:a.css`
      display: flex;
      width: 100%;
      flex-grow: 0;
      align-items: center;
      justify-content: flex-end;
      margin-bottom: ${n.a.theme.spacing.sm};
    `,toolbarItem:a.css`
      margin-left: ${n.a.theme.spacing.md};
    `,content:a.css`
      flex-grow: 1;
      height: 100%;
      padding-bottom: 16px;
    `,contentQueryInspector:a.css`
      flex-grow: 1;
      padding: ${n.a.theme.spacing.md} 0;
    `,editor:a.css`
      font-family: monospace;
      height: 100%;
      flex-grow: 1;
    `,viewer:a.css`
      overflow: scroll;
    `,dataFrameSelect:a.css`
      flex-grow: 2;
    `,tabContent:a.css`
      height: 100%;
      display: flex;
      flex-direction: column;
    `,dataTabContent:a.css`
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
    `,actionsWrapper:a.css`
      display: flex;
    `,leftActions:a.css`
      display: flex;
      flex-grow: 1;

      max-width: 85%;
      @media (max-width: 1345px) {
        max-width: 75%;
      }
    `,options:a.css`
      padding-top: ${n.a.theme.spacing.sm};
    `,dataDisplayOptions:a.css`
      flex-grow: 1;
      min-width: 300px;
      margin-right: ${n.a.theme.spacing.sm};
    `,selects:a.css`
      display: flex;
      > * {
        margin-right: ${n.a.theme.spacing.sm};
      }
    `}))},LInY:function(e,t,s){"use strict";s.d(t,"a",(function(){return S}));var a,n,r,o,i,l,c=s("q1tI"),d=s("kDLi"),h=s("Csm0"),u=s("Obii"),p=s("Xmxp"),m=s("ttS0"),f=s("Hi79"),b=s("sCrc"),g=s("t8hP"),j=s("vF1F"),O=s("pugT"),x=s("NXk7"),v=s("xAj+"),y=s("nKUr");function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e}).apply(this,arguments)}function D(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class S extends c.PureComponent{constructor(e){super(e),D(this,"formattedJson",void 0),D(this,"subs",new O.a),D(this,"onPanelRefresh",()=>{this.setState(e=>w({},e,{dsQuery:{isLoading:!0,response:{}}}))}),D(this,"setFormattedJson",e=>{this.formattedJson=e}),D(this,"getTextForClipboard",()=>JSON.stringify(this.formattedJson,null,2)),D(this,"onClipboardSuccess",()=>{p.b.emit(u.AppEvents.alertSuccess,["Content copied to clipboard"])}),D(this,"onToggleExpand",()=>{this.setState(e=>w({},e,{allNodesExpanded:!this.state.allNodesExpanded}))}),D(this,"onToggleMocking",()=>{this.setState(e=>w({},e,{isMocking:!this.state.isMocking}))}),D(this,"getNrOfOpenNodes",()=>null===this.state.allNodesExpanded?3:this.state.allNodesExpanded?20:1),D(this,"setMockedResponse",e=>{const t=e.target.value;this.setState(e=>w({},e,{mockedResponse:t}))}),this.state={executedQueries:[],allNodesExpanded:null,isMocking:!1,mockedResponse:"",dsQuery:{isLoading:!1,response:{}}}}componentDidMount(){const{panel:e}=this.props;this.subs.add(x.b.getInspectorStream().subscribe({next:e=>this.onDataSourceResponse(e)})),e&&(this.subs.add(e.events.subscribe(v.RefreshEvent,this.onPanelRefresh)),this.updateQueryList())}componentDidUpdate(e){this.props.data!==e.data&&this.updateQueryList()}updateQueryList(){const{data:e}=this.props,t=[];if(null!=e&&e.length){let s=void 0;e.forEach((e,a)=>{var n;const r=null===(n=e.meta)||void 0===n?void 0:n.executedQueryString;if(r){var o;const a=e.refId||"?";(null===(o=s)||void 0===o?void 0:o.refId)===a?(s.frames++,s.rows+=e.length):(s={refId:a,frames:0,rows:e.length,query:r},t.push(s))}})}this.setState({executedQueries:t})}componentWillUnmount(){this.subs.unsubscribe()}onDataSourceResponse(e){var t;null!==(t=e.config)&&void 0!==t&&t.hideFromInspector||((e=w({},e)).headers&&delete e.headers,e.config&&(e.request=e.config,delete e.config,delete e.request.transformRequest,delete e.request.transformResponse,delete e.request.paramSerializer,delete e.request.jsonpCallbackParam,delete e.request.headers,delete e.request.requestId,delete e.request.inspect,delete e.request.retry,delete e.request.timeout),e.data&&(e.response=e.data,delete e.config,delete e.data,delete e.status,delete e.statusText,delete e.ok,delete e.url,delete e.redirected,delete e.type,delete e.$$config),this.setState(t=>w({},t,{dsQuery:{isLoading:!1,response:e}})))}renderExecutedQueries(e){if(!e.length)return null;const t={refId:j.css`
        font-weight: ${g.config.theme.typography.weight.semibold};
        color: ${g.config.theme.colors.textBlue};
        margin-right: 8px;
      `};return Object(y.jsx)("div",{children:e.map(e=>Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{children:[Object(y.jsxs)("span",{className:t.refId,children:[e.refId,":"]}),e.frames>1&&Object(y.jsxs)("span",{children:[e.frames," frames, "]}),Object(y.jsxs)("span",{children:[e.rows," rows"]})]}),Object(y.jsx)("pre",{children:e.query})]},e.refId))})}render(){const{allNodesExpanded:e,executedQueries:t}=this.state,{panel:s,onRefreshQuery:c}=this.props,{response:u,isLoading:p}=this.state.dsQuery,g=this.getNrOfOpenNodes(),j=Object(f.a)(),O=Object.keys(u).length>0;return s&&!Object(b.c)(s.plugin)?null:Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{"aria-label":h.a.components.PanelInspector.Query.content,children:[a||(a=Object(y.jsx)("h3",{className:"section-heading",children:"Query inspector"})),n||(n=Object(y.jsx)("p",{className:"small muted",children:"Query inspector allows you to view raw request and response. To collect this data Grafana needs to issue a new query. Click refresh button below to trigger a new query."}))]}),this.renderExecutedQueries(t),Object(y.jsxs)("div",{className:j.toolbar,children:[Object(y.jsx)(d.Button,{icon:"sync",onClick:c,"aria-label":h.a.components.PanelInspector.Query.refreshButton,children:"Refresh"}),O&&e&&Object(y.jsx)(d.Button,{icon:"minus",variant:"secondary",className:j.toolbarItem,onClick:this.onToggleExpand,children:"Collapse all"}),O&&!e&&Object(y.jsx)(d.Button,{icon:"plus",variant:"secondary",className:j.toolbarItem,onClick:this.onToggleExpand,children:"Expand all"}),O&&Object(y.jsx)(m.a,{text:this.getTextForClipboard,onSuccess:this.onClipboardSuccess,elType:"div",className:j.toolbarItem,children:r||(r=Object(y.jsx)(d.Button,{icon:"copy",variant:"secondary",children:"Copy to clipboard"}))}),o||(o=Object(y.jsx)("div",{className:"flex-grow-1"}))]}),Object(y.jsxs)("div",{className:j.contentQueryInspector,children:[p&&(i||(i=Object(y.jsx)(d.LoadingPlaceholder,{text:"Loading query inspector..."}))),!p&&O&&Object(y.jsx)(d.JSONFormatter,{json:u,open:g,onDidRender:this.setFormattedJson}),!p&&!O&&(l||(l=Object(y.jsx)("p",{className:"muted",children:"No request and response collected yet. Hit refresh button"})))]})]})}}},SVrL:function(e,t,s){"use strict";var a=s("Csm0"),n=(s("q1tI"),s("Obii")),r=s("kDLi"),o=s("vF1F"),i=s("nKUr");const l=({timeZone:e,name:t,stats:s})=>{const a=Object(r.useTheme2)(),n=d(a);return s&&s.length?Object(i.jsxs)("div",{className:n.wrapper,children:[Object(i.jsx)("div",{className:"section-heading",children:t}),Object(i.jsx)("table",{className:"filter-table width-30",children:Object(i.jsx)("tbody",{children:s.map((t,s)=>Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:t.displayName}),Object(i.jsx)("td",{className:n.cell,children:c(t,e,a)})]},`${t.displayName}-${s}`))})})]}):null};function c(e,t,s){const a=Object(n.getDisplayProcessor)({field:{type:n.FieldType.number,config:e},theme:s,timeZone:t});return Object(n.formattedValueToString)(a(e.value))}const d=Object(r.stylesFactory)(e=>({wrapper:o.css`
      padding-bottom: ${e.spacing(2)};
    `,cell:o.css`
      text-align: right;
    `}));s.d(t,"a",(function(){return h}));const h=({data:e,timeZone:t})=>{var s;if(!e.request)return null;let n=[];const r=e.request.endTime?e.request.endTime-e.request.startTime:-1,o=(null===(s=e.timings)||void 0===s?void 0:s.dataProcessingTime)||-1;let c=0;for(const t of e.series)c+=t.length;r>0&&n.push({displayName:"Total request time",value:r,unit:"ms"}),o>0&&n.push({displayName:"Data processing time",value:o,unit:"ms"}),n.push({displayName:"Number of queries",value:e.request.targets.length}),n.push({displayName:"Total number rows",value:c});let d=[];for(const t of e.series)t.meta&&t.meta.stats&&(d=d.concat(t.meta.stats));return Object(i.jsxs)("div",{"aria-label":a.a.components.PanelInspector.Stats.content,children:[Object(i.jsx)(l,{timeZone:t,name:"Stats",stats:n}),Object(i.jsx)(l,{timeZone:t,name:"Data source stats",stats:d})]})}},qGIo:function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));s("q1tI");var a=s("kDLi"),n=s("nKUr");const r=({error:e})=>e?e.data?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h3",{children:e.data.message}),Object(n.jsx)(a.JSONFormatter,{json:e,open:2})]}):Object(n.jsx)("div",{children:e.message}):null},sCrc:function(e,t,s){"use strict";s.d(t,"a",(function(){return i})),s.d(t,"c",(function(){return l})),s.d(t,"d",(function(){return c})),s.d(t,"b",(function(){return d}));var a=s("LvDl"),n=s("eLz+"),r=s("eXZ6");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e}).apply(this,arguments)}function i(e,t,s,a){if(e===n.a.Fill)return{width:t,height:s};const o=(window.innerWidth-60-4*r.f)/r.g*a.gridPos.w,i=r.e*a.gridPos.h+48,l=Math.min(t/o,s/i);return o<=t&&i<=s?{width:o,height:i}:{width:o*l,height:i*l}}function l(e){return!1===(null==e?void 0:e.meta.skipDataQuery)}const c=(e,t,s,n)=>{let r=o({},e.defaults);const i=null==s||""===s;return n?r.custom?r.custom=i?Object(a.omit)(r.custom,t):d(r.custom,t,s):i||(r.custom=d(r.custom,t,s)):r=i?Object(a.omit)(r,t):d(r,t,s),o({},e,{defaults:r})};function d(e,t,s){const a=Array.isArray(t)?t:t.split("."),n=a.shift();if(!a.length)return o({},e,{[n]:s});let r=e[n];return null!=r&&"object"==typeof r||(r={}),o({},e,{[n]:d(r,a,s)})}}}]);
//# sourceMappingURL=default~DashboardPage~explore.77c130bd0edeb5f6b6e6.js.map