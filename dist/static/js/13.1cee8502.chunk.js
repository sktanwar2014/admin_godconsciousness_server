(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[13],{38:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(0),r=t.n(n),c=t(2);function l(e){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header-block header-block-collapse d-lg-none d-xl-none"},r.a.createElement("button",{className:"collapse-btn",id:"sidebar-collapse-btn"},r.a.createElement("i",{className:"fa fa-bars"}))),r.a.createElement("div",{className:"header-block header-block-search"}),r.a.createElement("div",{className:"header-block header-block-nav"},r.a.createElement("ul",{className:"nav-profile"},r.a.createElement("li",{className:"notifications new"}),r.a.createElement("li",{className:"profile dropdown"},r.a.createElement("a",{"data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"},r.a.createElement("span",{className:"name"},r.a.createElement("button",{onClick:function(){c.c.remove(),e.history.push("/login")},type:"button",class:"btn btn-default btn-sm"},r.a.createElement("i",{class:"fa fa-sign-out"}," ",r.a.createElement("span",null," Log out")))))))))}},39:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(0),r=t.n(n);function c(){return r.a.createElement("aside",{className:"sidebar"},r.a.createElement("div",{className:"sidebar-container"},r.a.createElement("div",{className:"sidebar-header"},r.a.createElement("div",{className:"brand"},r.a.createElement("div",{className:"logo"},r.a.createElement("span",null))," God Consciousness")),r.a.createElement("nav",{className:"menu"},r.a.createElement("ul",{className:"sidebar-menu metismenu",id:"sidebar-menu"},r.a.createElement("li",null,r.a.createElement("a",{href:"/"}," ",r.a.createElement("i",{className:"fa fa-home"})," Dashboard ")),r.a.createElement("li",null,r.a.createElement("a",{href:"/Events"}," ",r.a.createElement("i",{className:"fa fa-th-large"})," Events ")),r.a.createElement("li",null,r.a.createElement("a",{href:"/Miracles"},r.a.createElement("i",{className:"fa fa-area-chart"})," Miracles")),r.a.createElement("li",null,r.a.createElement("a",{href:"/Directions"},r.a.createElement("i",{className:"fa fa-pencil-square-o"}),"Direction's ")),r.a.createElement("li",null,r.a.createElement("a",{href:"/OBEs"},r.a.createElement("i",{className:"fa fa-desktop"})," OBE'S")),r.a.createElement("li",null,r.a.createElement("a",{href:"/Prayers"},r.a.createElement("i",{className:"fa fa-flask"})," Prayer's")),r.a.createElement("li",null,r.a.createElement("a",{href:"/Contact"},r.a.createElement("i",{className:"fa fa-file-text-o"})," Contact Us")),r.a.createElement("li",null,r.a.createElement("a",{href:""},r.a.createElement("i",{class:"fa fa-github-alt"})," About ",r.a.createElement("i",{class:"fa arrow"})),r.a.createElement("ul",{class:"sidebar-nav"},r.a.createElement("li",null,r.a.createElement("a",{href:"/Aboutgc"}," Home About GC ")),r.a.createElement("li",null,r.a.createElement("a",{href:"/Introduction"}," Introduction ")),r.a.createElement("li",null,r.a.createElement("a",{href:"/DimpleAnil"}," Dimple Anil "))))))))}},40:function(e,a,t){"use strict";var n=t(36),r=t.n(n),c=t(37),l=t(41),s=t.n(l),i=t(2);function o(e){(e||401===e.response.status)&&(i.c.remove(),document.location.reload())}var u=function(e){var a=e.methodType;return{method:void 0===a?"GET":a,headers:{Authorization:"Basic ".concat(sessionStorage.token),"content-type":"application/json"}}};a.a={updateBannerProduct:function(){var e=Object(c.a)(r.a.mark((function e(a){var t,n,c,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object.assign({},a),n="".concat(i.a,"/api/updateBannerProduct"),e.prev=2,e.next=5,s()(n,Object.assign({},u({methodType:"POST"}),{data:t}));case 5:return c=e.sent,l=c.data,e.abrupt("return",l);case 10:throw e.prev=10,e.t0=e.catch(2),o(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}(),login:function(){var e=Object(c.a)(r.a.mark((function e(a){var t,n,c,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object.assign({},a),n="".concat(i.a,"/api/login"),e.prev=2,e.next=5,s()(n,Object.assign({},u({methodType:"POST"}),{data:t}));case 5:return c=e.sent,l=c.data,e.abrupt("return",l);case 10:throw e.prev=10,e.t0=e.catch(2),o(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}(),addUpdateFormContent:function(){var e=Object(c.a)(r.a.mark((function e(a){var t,n,c,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object.assign({},a),n="".concat(i.a,"/api/addUpdateFormContent"),e.prev=2,e.next=5,s()(n,Object.assign({},u({methodType:"POST"}),{data:t.formData}));case 5:return c=e.sent,l=c.data,e.abrupt("return",l);case 10:throw e.prev=10,e.t0=e.catch(2),o(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}(),getTabRelatedList:function(){var e=Object(c.a)(r.a.mark((function e(a){var t,n,c,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object.assign({},a),n="".concat(i.a,"/api/getTabRelatedList"),e.prev=2,e.next=5,s()(n,Object.assign({},u({methodType:"POST"}),{data:t}));case 5:return c=e.sent,l=c.data,e.abrupt("return",l);case 10:throw e.prev=10,e.t0=e.catch(2),o(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}(),getPrevBannerImage:function(){var e=Object(c.a)(r.a.mark((function e(a){var t,n,c,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object.assign({},a),n="".concat(i.a,"/api/getPrevBannerImage"),e.prev=2,e.next=5,s()(n,Object.assign({},u({methodType:"POST"}),{data:t}));case 5:return c=e.sent,l=c.data,e.abrupt("return",l);case 10:throw e.prev=10,e.t0=e.catch(2),o(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}(),getContactList:function(){var e=Object(c.a)(r.a.mark((function e(a){var t,n,c,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object.assign({},a),n="".concat(i.a,"/api/getContactList"),e.prev=2,e.next=5,s()(n,Object.assign({},u({methodType:"GET"}),{data:t}));case 5:return c=e.sent,l=c.data,e.abrupt("return",l);case 10:throw e.prev=10,e.t0=e.catch(2),o(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}(),changeState:function(){var e=Object(c.a)(r.a.mark((function e(a){var t,n,c,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object.assign({},a),n="".concat(i.a,"/api/changeState"),e.prev=2,e.next=5,s()(n,Object.assign({},u({methodType:"POST"}),{data:t}));case 5:return c=e.sent,l=c.data,e.abrupt("return",l);case 10:throw e.prev=10,e.t0=e.catch(2),o(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}()}},76:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return p}));var n=t(36),r=t.n(n),c=t(37),l=t(43),s=t(0),i=t.n(s),o=t(38),u=t(39),m=t(12),d=t(40);function p(e){var a=Object(s.useState)([]),t=Object(l.a)(a,2),n=t[0],p=t[1],f=function(){var e=Object(c.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.getTabRelatedList({type:"Directions"});case 3:a=e.sent,p(a.resultList),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error...",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){f()}),[]);var b=function(){var e=Object(c.a)(r.a.mark((function e(a){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("handleActiveDeactive",a),e.prev=1,e.next=4,d.a.changeState({type:"Directions",id:a.id,is_active:a.is_active});case 4:t=e.sent,p(t.resultList),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("Error...",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}();return i.a.createElement("div",null,i.a.createElement(o.a,e),i.a.createElement(u.a,null),i.a.createElement("div",{className:"sidebar-overlay",id:"sidebar-overlay"}),i.a.createElement("div",{className:"sidebar-mobile-menu-handle",id:"sidebar-mobile-menu-handle"}),i.a.createElement("div",{className:"mobile-menu-handle"}),i.a.createElement("article",{className:"content responsive-tables-page"},i.a.createElement("div",{className:"title-block"},i.a.createElement("h1",{className:"title"},"Direction's",i.a.createElement(m.b,{to:{pathname:"/editor",state:{type:"Directions",operation:"add"}}},i.a.createElement("button",{type:"button",style:{float:"right"},className:"btn btn-success-outline"},"Add")),i.a.createElement(m.b,{to:{pathname:"/images",state:{type:"Direction",operation:"add"}}},i.a.createElement("button",{type:"button",style:{float:"right",marginRight:"20px"},className:"btn btn-success-outline"},"Banner Image"))),i.a.createElement("p",{className:"title-description"})),i.a.createElement("section",{className:"section"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-block"},i.a.createElement("div",{className:"card-title-block"},i.a.createElement("h3",{className:"title"})),i.a.createElement("section",{className:"example"},i.a.createElement("div",{className:"table-responsive"},i.a.createElement("table",{className:"table table-striped table-bordered table-hover"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"S No."),i.a.createElement("th",null,"Direction's "),i.a.createElement("th",null," Update"),i.a.createElement("th",null," Delete"))),i.a.createElement("tbody",null,n.map((function(e,a){return i.a.createElement("tr",null,i.a.createElement("td",null,a+1),i.a.createElement("td",null,e.title),i.a.createElement("td",null,i.a.createElement(m.b,{to:{pathname:"/editor",state:{type:"Directions",operation:"update",data:e}}},i.a.createElement("button",{type:"button",className:"btn btn-success-outline"},"Update"))),i.a.createElement("td",null,i.a.createElement("button",{type:"button",className:"btn btn-danger-outline",onClick:function(){b(e)}},1===e.is_active?"Deactive":"Active")))}))))))))))),i.a.createElement("div",{className:"ref",id:"ref"},i.a.createElement("div",{className:"color-primary"}),i.a.createElement("div",{className:"chart"},i.a.createElement("div",{className:"color-primary"}),i.a.createElement("div",{className:"color-secondary"})))))}}}]);
//# sourceMappingURL=13.1cee8502.chunk.js.map