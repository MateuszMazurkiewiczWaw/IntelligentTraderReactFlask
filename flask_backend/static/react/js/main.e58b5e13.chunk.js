(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{173:function(e,a){},174:function(e,a,t){"use strict";(function(e){var n=t(3),r=t(4),c=t(6),l=t(5),i=t(7),o=t(0),s=t.n(o),u=t(192),m=t(25),d=t(368),b=(t(205),t(206),t(193)),p=t(194),h=t(191),E=function(e){function a(){var e;return Object(n.a)(this,a),(e=Object(c.a)(this,Object(l.a)(a).call(this))).state={loading:!0,loaded:!1},e}return Object(i.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("load",function(){e.setState({loading:!1}),setTimeout(function(){return e.setState({loaded:!0})},500)})}},{key:"render",value:function(){var e=this.state,a=e.loaded,t=e.loading;return s.a.createElement(m.a,{store:p.a},s.a.createElement(d.a,null,s.a.createElement(h.a,null,s.a.createElement(o.Fragment,null,!a&&s.a.createElement("div",{className:"load".concat(t?"":" loaded")},s.a.createElement("div",{className:"load__icon-wrap"},s.a.createElement("svg",{className:"load__icon"},s.a.createElement("path",{fill:"#4ce1b6",d:"M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"})))),s.a.createElement("div",null,s.a.createElement(b.a,null))))))}}]),a}(o.Component);a.a=Object(u.hot)(e)(E)}).call(this,t(88)(e))},191:function(e,a,t){"use strict";var n=t(3),r=t(4),c=t(6),l=t(5),i=t(7),o=t(0),s=t(369),u=function(e){function a(){return Object(n.a)(this,a),Object(c.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(r.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),a}(o.PureComponent);a.a=Object(s.a)(u)},193:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(382),l=t(180),i=t(3),o=t(4),s=t(6),u=t(5),m=t(7),d=t(369),b=t(25),p=t(12),h=t.n(p),E=t(122),f="".concat("/static/react","/img/burger.svg"),g=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.changeMobileSidebarVisibility,t=e.changeSidebarVisibility;return r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"topbar__button topbar__button--desktop",onClick:t},r.a.createElement("img",{src:f,alt:"",className:"topbar__button-icon"})),r.a.createElement("button",{type:"button",className:"topbar__button topbar__button--mobile",onClick:a},r.a.createElement("img",{src:f,alt:"",className:"topbar__button-icon"})))}}]),a}(n.PureComponent),_=t(176),v=t.n(_),y=t(381),k=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.title,t=e.icon,n=e.path;return r.a.createElement(E.a,{className:"topbar__link",to:n},r.a.createElement("span",{className:"topbar__link-icon lnr lnr-".concat(t)}),r.a.createElement("p",{className:"topbar__link-title"},a))}}]),a}(n.PureComponent),j="".concat("/static/react","/img/ava.png"),N=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(s.a)(this,Object(u.a)(a).call(this))).toggle=function(){e.setState(function(e){return{collapse:!e.collapse}})},e.state={collapse:!1},e}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.state.collapse;return r.a.createElement("div",{className:"topbar__profile"},r.a.createElement("button",{type:"button",className:"topbar__avatar",onClick:this.toggle},r.a.createElement("img",{className:"topbar__avatar-img",src:j,alt:"avatar"}),r.a.createElement("p",{className:"topbar__avatar-name"},"Trader walutowy"),r.a.createElement(v.a,{className:"topbar__icon"})),e&&r.a.createElement("button",{type:"button",className:"topbar__back",onClick:this.toggle}),r.a.createElement(y.a,{isOpen:e,className:"topbar__menu-wrap"},r.a.createElement("div",{className:"topbar__menu"},r.a.createElement(k,{title:"Wykres liniowy",icon:"list",path:"/pages/lineChart"}),r.a.createElement(k,{title:"Wykres obszarowy",icon:"inbox",path:"/pages/polarAreaChart"}),r.a.createElement(k,{title:"Wykres kolowy",icon:"inbox",path:"/pages/doughnutChart"}),r.a.createElement("div",{className:"topbar__menu-divider"}),r.a.createElement(k,{title:"Wyloguj",icon:"exit",path:"/"}))))}}]),a}(n.PureComponent),O=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.changeMobileSidebarVisibility,t=e.changeSidebarVisibility;return r.a.createElement("div",{className:"topbar"},r.a.createElement("div",{className:"topbar__wrapper"},r.a.createElement("div",{className:"topbar__left"},r.a.createElement(g,{changeMobileSidebarVisibility:a,changeSidebarVisibility:t}),r.a.createElement(E.a,{className:"topbar__logo",to:"/dashboard_default"})),r.a.createElement("div",{className:"topbar__right"},r.a.createElement(N,null))))}}]),a}(n.PureComponent),w=t(178),C=t.n(w),D=t(372),S=t(371),T=function(e){var a=e.title,t=e.icon,n=e.newLink,c=e.route,l=e.onClick;return r.a.createElement(S.a,{to:c,onClick:l,activeClassName:"sidebar__link-active"},r.a.createElement("li",{className:"sidebar__link"},t?r.a.createElement("span",{className:"sidebar__link-icon lnr lnr-".concat(t)}):"",r.a.createElement("p",{className:"sidebar__link-title"},a,n?r.a.createElement(D.a,{className:"sidebar__link-badge"},r.a.createElement("span",null,"Nowy")):"")))};T.defaultProps={icon:"",newLink:!1,route:"/",onClick:function(){}};var P=T,x=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(s.a)(this,Object(u.a)(a).call(this))).toggle=function(){e.setState(function(e){return{collapse:!e.collapse}})},e.state={collapse:!1},e}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.title,t=e.icon,n=e.isNew,c=e.children,l=this.state.collapse,i=h()({"sidebar__category-wrap":!0,"sidebar__category-wrap--open":l});return r.a.createElement("div",{className:i},r.a.createElement("button",{type:"button",className:"sidebar__link sidebar__category",onClick:this.toggle},t?r.a.createElement("span",{className:"sidebar__link-icon lnr lnr-".concat(t)}):"",r.a.createElement("p",{className:"sidebar__link-title"},a,n&&r.a.createElement("span",{className:"sidebar__category-new"})),r.a.createElement("span",{className:"sidebar__category-icon lnr lnr-chevron-right"})),r.a.createElement(y.a,{isOpen:l,className:"sidebar__submenu-wrap"},r.a.createElement("ul",{className:"sidebar__submenu"},r.a.createElement("div",null,c))))}}]),a}(n.Component);x.defaultProps={icon:"",isNew:!1};var I=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).hideSidebar=function(){(0,t.props.onClick)()},t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.changeToDark,t=e.changeToLight;return r.a.createElement("div",{className:"sidebar__content"},r.a.createElement("ul",{className:"sidebar__block"},r.a.createElement(P,{title:"Wyloguj",icon:"exit",route:"/log_in",onClick:this.hideSidebar}),r.a.createElement(x,{title:"Wybierz layout",icon:"layers"},r.a.createElement("button",{type:"button",className:"sidebar__link",onClick:t},r.a.createElement("p",{className:"sidebar__link-title"},"Tryb standardowy")),r.a.createElement("button",{type:"button",className:"sidebar__link",onClick:a},r.a.createElement("p",{className:"sidebar__link-title"},"Tryb Dracula")))),r.a.createElement("ul",{className:"sidebar__block"},r.a.createElement(x,{title:"Wybierz wykres",icon:"diamond"},r.a.createElement(P,{title:"Wykres liniowy",route:"/pages/lineChart",onClick:this.hideSidebar}),r.a.createElement(P,{title:"Wykres obszarowy",route:"/pages/polarAreaChart",onClick:this.hideSidebar}),r.a.createElement(P,{title:"Wykres kolowy",route:"/pages/doughnutChart",onClick:this.hideSidebar}))),r.a.createElement("ul",{className:"sidebar__block"},r.a.createElement(x,{title:"Importuj dane",icon:"diamond"},r.a.createElement(P,{title:"Importuj plik CSV",route:"/pages/upload_csv",onClick:this.hideSidebar}))))}}]),a}(n.Component),L=t(1),z=t.n(L),V=z.a.string,U=z.a.shape,M=(U({show:z.a.bool,collapse:z.a.bool}),U({className:V}),U({direction:V}),function(e){var a=e.changeToDark,t=e.changeToLight,n=e.changeMobileSidebarVisibility,c=e.sidebar,l=h()({sidebar:!0,"sidebar--show":c.show,"sidebar--collapse":c.collapse});return r.a.createElement("div",{className:l},r.a.createElement("button",{type:"button",className:"sidebar__back",onClick:n}),r.a.createElement(C.a,{className:"sidebar__scroll scroll"},r.a.createElement("div",{className:"sidebar__wrapper sidebar__wrapper--desktop"},r.a.createElement(I,{onClick:function(){},changeToDark:a,changeToLight:t})),r.a.createElement("div",{className:"sidebar__wrapper sidebar__wrapper--mobile"},r.a.createElement(I,{onClick:n,changeToDark:a,changeToLight:t}))))}),A=t(51),R=t(52),W=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).changeSidebarVisibility=function(){(0,t.props.dispatch)(Object(R.d)())},t.changeMobileSidebarVisibility=function(){(0,t.props.dispatch)(Object(R.c)())},t.changeToDark=function(){(0,t.props.dispatch)(Object(A.c)())},t.changeToLight=function(){(0,t.props.dispatch)(Object(A.d)())},t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.sidebar,a=h()({layout:!0,"layout--collapse":e.collapse});return r.a.createElement("div",{className:a},r.a.createElement(O,{changeMobileSidebarVisibility:this.changeMobileSidebarVisibility,changeSidebarVisibility:this.changeSidebarVisibility}),r.a.createElement(M,{sidebar:e,changeToDark:this.changeToDark,changeToLight:this.changeToLight,changeMobileSidebarVisibility:this.changeMobileSidebarVisibility}))}}]),a}(n.Component),H=Object(d.a)(Object(b.b)(function(e){return{sidebar:e.sidebar}})(W)),K=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.theme,t=e.children,n=e.rtl,c="/"===e.location.pathname?"ltr":n.direction;return r.a.createElement("div",{className:"".concat(a.className," ").concat(c,"-support"),dir:c},r.a.createElement("div",{className:"wrapper"},t))}}]),a}(n.PureComponent),B=Object(d.a)(Object(b.b)(function(e){return{theme:e.theme,rtl:e.rtl}})(K)),F=t(379),G=t(378),Z=t(183),J=t.n(Z),Y=t(184),q=t.n(Y),Q=t(185),X=t.n(Q),$=t(123),ee=t.n($),ae=t(186),te=t.n(ae),ne=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.onChange)(e.defaultChecked)}},{key:"render",value:function(){var e=this.props,a=e.disabled,t=e.className,n=e.name,c=e.value,l=e.onChange,i=e.label,o=e.color,s=h()({"checkbox-btn":!0,disabled:a});return r.a.createElement("label",{className:"".concat(s," ").concat(t?" checkbox-btn--".concat(t):""),htmlFor:n},r.a.createElement("input",{className:"checkbox-btn__checkbox",type:"checkbox",id:n,name:n,onChange:l,checked:c,disabled:a}),r.a.createElement("span",{className:"checkbox-btn__checkbox-custom",style:o?{background:o,borderColor:o}:{}},r.a.createElement(ee.a,null)),"button"===t?r.a.createElement("span",{className:"checkbox-btn__label-svg"},r.a.createElement(ee.a,{className:"checkbox-btn__label-check"}),r.a.createElement(te.a,{className:"checkbox-btn__label-uncheck"})):"",r.a.createElement("span",{className:"checkbox-btn__label"},i))}}]),a}(n.PureComponent);ne.defaultProps={label:"",defaultChecked:!1,disabled:!1,className:"",color:""};var re=function(e){var a=e.input,t=e.label,n=e.defaultChecked,c=e.disabled,l=e.className,i=e.color;return r.a.createElement(ne,Object.assign({},a,{label:t,defaultChecked:n,disabled:c,className:l,color:i}))};re.defaultProps={label:"",defaultChecked:!1,disabled:!1,className:"",color:""};var ce=re,le=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(s.a)(this,Object(u.a)(a).call(this))).showPassword=function(a){a.preventDefault(),e.setState(function(e){return{showPassword:!e.showPassword}})},e.state={showPassword:!1},e}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this,a=this.props.handleSubmit,t=this.state.showPassword;return r.a.createElement("form",{className:"form",onSubmit:a},r.a.createElement("div",{className:"form__form-group"},r.a.createElement("span",{className:"form__form-group-label"},"Nazwa u\u017cytkownika"),r.a.createElement("div",{className:"form__form-group-field"},r.a.createElement("div",{className:"form__form-group-icon"},r.a.createElement(X.a,null)),r.a.createElement(F.a,{name:"name",component:"input",type:"text",placeholder:"Nazwa u\u017cytkownika"}))),r.a.createElement("div",{className:"form__form-group"},r.a.createElement("span",{className:"form__form-group-label"},"Has\u0142o"),r.a.createElement("div",{className:"form__form-group-field"},r.a.createElement("div",{className:"form__form-group-icon"},r.a.createElement(q.a,null)),r.a.createElement(F.a,{name:"password",component:"input",type:t?"text":"password",placeholder:"Has\u0142o"}),r.a.createElement("button",{className:"form__form-group-button".concat(t?" active":""),onClick:function(a){return e.showPassword(a)},type:"button"},r.a.createElement(J.a,null))),r.a.createElement("div",{className:"account__forgot-password"},r.a.createElement("a",{href:"/"},"Zapomniales has\u0142a?"))),r.a.createElement("div",{className:"form__form-group"},r.a.createElement("div",{className:"form__form-group-field"},r.a.createElement(F.a,{name:"remember_me",component:ce,label:"Zapami\u0119taj mnie"}))),r.a.createElement(E.a,{className:"btn btn-primary account__btn account__btn--small",to:"/pages/lineChart"},"Zaloguj si\u0119"))}}]),a}(n.PureComponent),ie=Object(G.a)({form:"log_in_form"})(le),oe=function(){return r.a.createElement("div",{className:"account"},r.a.createElement("div",{className:"account__wrapper"},r.a.createElement("div",{className:"account__card"},r.a.createElement("div",{className:"account__head"},r.a.createElement("h3",{className:"account__title"},"Witaj w systemie",r.a.createElement("span",{className:"account__logo"}," Intelligent",r.a.createElement("span",{className:"account__logo-accent"},"Trader"))),r.a.createElement("h4",{className:"account__subhead subhead"},"Systemie prognozowania kurs\xf3w par walutowych")),r.a.createElement(ie,{onSubmit:!0}))))},se=t(49),ue=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).state={chartData:e.chartData},t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"chart"},r.a.createElement(se.b,{data:this.state.chartData,options:{responsive:!0,title:{display:this.props.displayTitle,text:"Kurs pary walutowej "+this.props.currencyPair,fontSize:25},legend:{display:this.props.displayLegend,position:this.props.legendPosition}}}))}}]),a}(n.Component);ue.defaultProps={displayTitle:!0,displayLegend:!0,legendPosition:"center"};var me=ue,de=t(376),be=t(377),pe=t(373),he=t(374),Ee=t(375),fe=function(){return r.a.createElement(pe.a,{md:12},r.a.createElement(he.a,null,r.a.createElement(Ee.a,null,r.a.createElement("div",{className:"card__title"},r.a.createElement("h3",{className:"bold-text"},'Silnik predykcji "Intelligent Trader"'),r.a.createElement("h3",{className:"subhead"},"Prognozy kursu pary walutowej EUR/USD LineChart")))))},ge=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).state={chartData:{}},t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"componentWillMount",value:function(){this.getChartData()}},{key:"getChartData",value:function(){this.setState({chartData:{labels:["20:19","20:20","20:21","20:22","20:23","20:24","20:25","20:26","20:27","20:28","20:29","20:30","20:31","20:32","20:33","20:34","20:35","20:36","20:37","20:38","20:39","20:40","20:41","20:42","20:43","20:44","20:45","20:46","20:47","20:48","20:49","20:50","20:51","20:52","20:53","20:54","20:55","20:56","20:57","20:58","20:59","21:00","21:01","21:02","21:03","21:04","21:05","21:06","21:07","21:08","21:09","21:10","21:11","21:12","21:13","21:14","21:15","21:16","21:17","21:18","21:19","21:20","21:21","21:22","21:23","21:24","21:25","21:26","21:27","21:28","21:29","21:30","21:31","21:32","21:33","21:34","21:35","21:36","21:37","21:38","21:39","21:40","21:41","21:42","21:43","21:44","21:45","21:46","21:47","21:48","21:49","21:50","21:51","21:52","21:53","21:54","21:55","21:56","21:57","21:58"],datasets:[{label:"Kurs rzeczywisty 18.01.2019",data:[1.136345,1.13634,1.13628,1.13624,1.13627,1.136245,1.13625,1.136235,1.136245,1.13632,1.136335,1.136255,1.13626,1.136235,1.136235,1.13622,1.136235,1.13623,1.13628,1.13632,1.13631,1.13635,1.136355,1.13632,1.136345,1.13637,1.13637,1.13637,1.136375,1.13636,1.13629,1.13622,1.136265,1.13628,1.13632,1.1363,1.136335,1.13629,1.136355,1.13638,1.13637,1.13639,1.13639,1.136405,1.13638,1.13637,1.13637,1.136405,1.13647,1.13648,1.136475,1.136495,1.13651,1.136485,1.136455,1.13648,1.136495,1.136485,1.136475,1.136485,1.13651,1.136525,1.136505,1.136485,1.136485,1.13648,1.136485,1.13643,1.136405,1.13639,1.13644,1.136435,1.136445,1.13646,1.13646,1.13647,1.13642,1.13641,1.136435,1.13643,1.136395,1.13639,1.136415,1.136415,1.13644,1.13639,1.13633,1.136395,1.13641,1.136435,1.13642,1.13643,1.136375,1.136385,1.13633,1.136285,1.13629,1.135975,1.136105,1.136],borderColor:"#3cba9f",backgroundColor:"#cd0316",pointHoverBorderWidth:2,fill:!1},{label:"Kurs prognozowany 18.01.2019",data:[1.137045,1.13714,1.1369,1.1368,1.1369,1.137,1.13699,1.136235,1.136268,1.13688,1.136347,1.136288,1.13626,1.136265,1.136275,1.13635,1.136255,1.13677,1.1368,1.13682,1.1369,1.137,1.1369,1.137,1.1366,1.1365,1.13637,1.1367,1.1366,1.13636,1.13628,1.13622,1.136265,1.1367,1.137,1.1363,1.1364,1.13629,1.136355,1.1369,1.13637,1.13639,1.1365,1.136405,1.13638,1.1364,1.13637,1.1365,1.1365,1.13688,1.136775,1.136495,1.13651,1.136485,1.136455,1.13668,1.136495,1.136485,1.136475,1.136485,1.13651,1.136525,1.136705,1.136885,1.136485,1.13648,1.136485,1.13643,1.136405,1.13639,1.13644,1.136435,1.136445,1.13656,1.13649,1.13647,1.13642,1.13651,1.1368435,1.13643,1.136395,1.13659,1.136415,1.136415,1.13644,1.13669,1.13633,1.136395,1.13641,1.136435,1.13642,1.13673,1.136375,1.136385,1.13645,1.136285,1.13659,1.136975,1.136505,1.1366],borderColor:"#63ba0f",backgroundColor:"#0f4dcd",pointHoverBorderWidth:2,fill:!1}]}})}},{key:"render",value:function(){return r.a.createElement(de.a,{className:"dashboard"},r.a.createElement(be.a,null,r.a.createElement(pe.a,{md:12},r.a.createElement("h3",{className:"page-title"},"Kurs pary walutowej EUR/USD - wykres LineChart"))),r.a.createElement(be.a,null,r.a.createElement(fe,null)),r.a.createElement("div",null,r.a.createElement(me,{chartData:this.state.chartData,currencyPair:"EUR/USD",legendPosition:"bottom"})))}}]),a}(n.Component),_e=t(126),ve=t.n(_e),ye=t(190),ke=t(26),je=t(120),Ne=t.n(je),Oe=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).state={chartData:e.chartData},t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"chart"},r.a.createElement(se.c,{data:this.state.chartData,options:{responsive:!0,title:{display:this.props.displayTitle,text:"Kurs pary walutowej "+this.props.currencyPair,fontSize:25},legend:{display:this.props.displayLegend,position:this.props.legendPosition},plugins:{datasource:{url:"data.csv"}}}}))}}]),a}(n.Component);Oe.defaultProps={displayTitle:!0,displayLegend:!0,legendPosition:"center"};var we=Oe,Ce=function(){return r.a.createElement(pe.a,{md:12},r.a.createElement(he.a,null,r.a.createElement(Ee.a,null,r.a.createElement("div",{className:"card__title"},r.a.createElement("h3",{className:"bold-text"},'Silnik predykcji "Intelligent Trader"'),r.a.createElement("h3",{className:"subhead"},"Prognozy kursu pary walutowej EUR/USD PolarArea")))))},De=t(66),Se=t.n(De),Te=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).state={data:[],chartData:{}},t.getData=t.getData.bind(Object(ke.a)(Object(ke.a)(t))),t.updateData=t.updateData.bind(Object(ke.a)(Object(ke.a)(t))),t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"getCsvData",value:function(){var e=Object(ye.a)(ve.a.mark(function e(){var a;return ve.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchCsv();case 2:a=e.sent,Se.a.parse(a,{preview:1,complete:this.getData});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"fetchCsv",value:function(){return fetch("../../../data.csv").then(function(e){var a=e.body.getReader(),t=new TextDecoder("utf-8");return a.read().then(function(e){return t.decode(e.value)})})}},{key:"getData",value:function(e){this.setState({data:e.data})}},{key:"componentWillMount",value:function(){this.getChartData(),Se.a.parse("../../../data.csv",{header:!0,download:!0,skipEmptyLines:!0,complete:this.updateData})}},{key:"updateData",value:function(e){var a=e.data;this.setState({data:a}),console.log(this.state.data)}},{key:"getChartData",value:function(){this.setState({chartData:{labels:["21:43","21:44","21:45","21:46","21:47","21:48","21:49","21:50","21:51","21:52","21:53","21:54","21:55","21:56","21:57","21:58"],datasets:[{label:"Kurs rzeczywisty 18.01.2019",data:[1.13644,1.13639,1.13633,1.136395,1.13641,1.136435,1.13642,1.13643,1.136375,1.136385,1.13633,1.136285,1.13629,1.135975,1.136105,1.136],borderColor:"#3cba9f",backgroundColor:["rgba(255, 99, 132, 0.6)","rgba(54, 162, 235, 0.6)","rgba(255, 206, 86, 0.6)","rgba(75, 192, 192, 0.6)","rgba(153, 102, 255, 0.6)","rgba(255, 159, 64, 0.6)","rgba(255,184,42,0.6)","rgba(77,235,152,0.6)","rgba(18,255,33,0.6)","rgba(170,139,192,0.6)","rgba(255,0,198,0.6)","rgba(255, 159, 64, 0.6)","rgba(220,255,37,0.6)","rgba(192,30,28,0.6)","rgba(255,0,198,0.6)","rgba(251,255,227,0.6)"],hoverBorderColor:"#ba4f45",fill:!1}]}})}},{key:"render",value:function(){return r.a.createElement(de.a,{className:"dashboard"},r.a.createElement(be.a,null,r.a.createElement(pe.a,{md:12},r.a.createElement("h3",{className:"page-title"},"Kurs pary walutowej EUR/USD - wykres PolarAreaChart"))),r.a.createElement(be.a,null,r.a.createElement(Ce,null)),r.a.createElement("div",null,r.a.createElement(we,{chartData:this.state.chartData,currencyPair:"EUR/USD",legendPosition:"bottom",plugins:[Ne.a],options:{plugins:{datasource:{url:"data.csv",rowMapping:"index"}}}})),r.a.createElement("div",null,r.a.createElement("p",null,this.props.data)))}}]),a}(n.Component),Pe=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).state={chartData:e.chartData},t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"chart"},r.a.createElement(se.a,{data:this.state.chartData,options:{responsive:!0,title:{display:this.props.displayTitle,text:"Kurs pary walutowej "+this.props.currencyPair,fontSize:25},legend:{display:this.props.displayLegend,position:this.props.legendPosition}}}))}}]),a}(n.Component);Pe.defaultProps={displayTitle:!0,displayLegend:!0,legendPosition:"center"};var xe=Pe,Ie=function(){return r.a.createElement(pe.a,{md:12},r.a.createElement(he.a,null,r.a.createElement(Ee.a,null,r.a.createElement("div",{className:"card__title"},r.a.createElement("h3",{className:"bold-text"},'Silnik predykcji "Intelligent Trader"'),r.a.createElement("h3",{className:"subhead"},"Prognozy kursu pary walutowej EUR/USD Doughnut Chart")))))},Le=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).state={chartData:{}},t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"componentWillMount",value:function(){this.getChartData()}},{key:"getChartData",value:function(){this.setState({chartData:{labels:["21:54","21:55","21:56","21:57","21:58"],datasets:[{label:"Kurs rzeczywisty 18.01.2019",data:[1.13633,1.136285,1.13629,1.135975,1.136105,1.136],borderColor:"#3cba9f",backgroundColor:["rgba(255, 99, 132, 0.6)","rgba(54, 162, 235, 0.6)","rgba(255, 206, 86, 0.6)","rgba(75, 192, 192, 0.6)","rgba(153, 102, 255, 0.6)","rgba(255, 159, 64, 0.6)"],hoverBorderColor:"#ba4f45",fill:!1}]}})}},{key:"render",value:function(){return r.a.createElement(de.a,{className:"dashboard"},r.a.createElement(be.a,null,r.a.createElement(pe.a,{md:12},r.a.createElement("h3",{className:"page-title"},"Kurs pary walutowej EUR/USD - wykres Doughnut"))),r.a.createElement(be.a,null,r.a.createElement(Ie,null)),r.a.createElement("div",null,r.a.createElement(xe,{chartData:this.state.chartData,currencyPair:"EUR/USD",legendPosition:"bottom"})))}}]),a}(n.Component),ze=function(){return r.a.createElement(pe.a,{md:12},r.a.createElement(he.a,null,r.a.createElement(Ee.a,null,r.a.createElement("div",{className:"card__title"},r.a.createElement("h3",{className:"bold-text"},'Silnik predykcji "Intelligent Trader"'),r.a.createElement("h3",{className:"subhead"},"Zaimportuj gotowy plik CSV na potrzeby predykcji")))))},Ve=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).handleChange=function(e){t.setState({csvfile:e.target.files[0]})},t.importCSV=function(){var e=t.state.csvfile;Se.a.parse(e,{complete:t.updateData,header:!0})},t.state={csvfile:void 0},t.updateData=t.updateData.bind(Object(ke.a)(Object(ke.a)(t))),t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"updateData",value:function(e){var a=e.data;console.log(a)}},{key:"render",value:function(){var e=this;return r.a.createElement(de.a,{className:"dashboard"},r.a.createElement(be.a,null,r.a.createElement(pe.a,{md:12},r.a.createElement("h3",{className:"page-title"},"Importowanie danych"))),r.a.createElement(be.a,null,r.a.createElement(ze,null)),r.a.createElement("div",null,r.a.createElement("form",{method:"post",encType:"multipart/form-data"},r.a.createElement("input",{className:"csv-input",type:"file",ref:function(a){e.filesInput=a},name:"file",placeholder:null,onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"Upload"}),r.a.createElement("p",null),r.a.createElement("button",{onClick:this.importCSV,style:{fontSize:"2em",fontFamily:"sens-serif",fontWeight:"bold",backgroundColor:"#646643",color:"#FFFFFF"}},"Zaimportuj plik"))))}}]),a}(n.Component),Ue=function(){return r.a.createElement(c.a,null,r.a.createElement(l.a,{path:"/pages/lineChart",component:ge}),r.a.createElement(l.a,{path:"/pages/polarAreaChart",component:Te}),r.a.createElement(l.a,{path:"/pages/doughnutChart",component:Le}),r.a.createElement(l.a,{path:"/pages/upload_csv",component:Ve}))},Me=function(){return r.a.createElement("div",null,r.a.createElement(H,null),r.a.createElement("div",{className:"container__wrap"},r.a.createElement(l.a,{path:"/pages",component:Ue})))};a.a=function(){return r.a.createElement(B,null,r.a.createElement("main",null,r.a.createElement(c.a,null,r.a.createElement(l.a,{exact:!0,path:"/",component:oe}),r.a.createElement(l.a,{exact:!0,path:"/log_in",component:oe}),r.a.createElement(l.a,{path:"/",component:Me}))))}},194:function(e,a,t){"use strict";var n=t(15),r=t(380),c=t(51),l={className:"theme-light"},i=t(127),o=t(52),s={show:!1,collapse:!1},u="CHANGE_DIRECTION_TO_LTR",m="CHANGE_DIRECTION_TO_RTL";var d={direction:"ltr"},b=Object(n.b)({form:r.a,theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;switch((arguments.length>1?arguments[1]:void 0).type){case c.a:return{className:"theme-dark"};case c.b:return{className:"theme-light"};default:return e}},sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;switch((arguments.length>1?arguments[1]:void 0).type){case o.b:return Object(i.a)({},e,{collapse:!e.collapse});case o.a:return Object(i.a)({},e,{show:!e.show});default:return e}},rtl:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;switch((arguments.length>1?arguments[1]:void 0).type){case u:return{direction:"ltr"};case m:return{direction:"rtl"};default:return e}}}),p=Object(n.c)(b);a.a=p},196:function(e,a,t){e.exports=t(197)},197:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(81),l=t(174);Object(c.render)(r.a.createElement(l.a,null),document.getElementById("root"))},206:function(e,a,t){},364:function(e,a){},365:function(e,a){},51:function(e,a,t){"use strict";t.d(a,"a",function(){return n}),t.d(a,"b",function(){return r}),t.d(a,"c",function(){return c}),t.d(a,"d",function(){return l});var n="CHANGE_THEME_TO_DARK",r="CHANGE_THEME_TO_LIGHT";function c(){return{type:n}}function l(){return{type:r}}},52:function(e,a,t){"use strict";t.d(a,"b",function(){return n}),t.d(a,"a",function(){return r}),t.d(a,"d",function(){return c}),t.d(a,"c",function(){return l});var n="CHANGE_SIDEBAR_VISIBILITY",r="CHANGE_MOBILE_SIDEBAR_VISIBILITY";function c(){return{type:n}}function l(){return{type:r}}}},[[196,1,2]]]);
//# sourceMappingURL=main.e58b5e13.chunk.js.map