(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[15],{37:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(9);function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},81:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var r=a(9),n=a(37),c=a(33),l=a.n(c),s=a(34),o=a(38),i=a(0),m=a.n(i),u=(a(41),a(35)),p=a(31),d=a(32);a(3),a(42);function b(e){var t=Object(i.useState)({content:""}),a=Object(o.a)(t,2),c=a[0],b=a[1],f=function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.getTabRelatedList({type:"AboutFooterMessage"});case 3:t=e.sent,b(t.resultList[0]),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error...",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){f()}),[]);var v=function(){var e=Object(s.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,a={operation:"Update",type:"AboutFooterMessage",title:"",image:"",date:"",content:c.content,link:"",id:c.id,link_id:"",image_id:""},e.next=5,u.a.addUpdateFormContent(a);case 5:e.sent,alert("Update Successfully"),f(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log("Error...",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return m.a.createElement(i.Fragment,null,m.a.createElement(p.a,null),m.a.createElement(d.a,null),m.a.createElement("div",{className:"sidebar-overlay",id:"sidebar-overlay"}),m.a.createElement("div",{className:"sidebar-mobile-menu-handle",id:"sidebar-mobile-menu-handle"}),m.a.createElement("div",{className:"mobile-menu-handle"}),m.a.createElement("article",{className:"content responsive-tables-page"},m.a.createElement("div",{className:"title-block"},m.a.createElement("h3",{className:"title"}," About Footer Message "),m.a.createElement("p",{className:"title-description"})),m.a.createElement("section",{className:"section"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-12"},m.a.createElement("div",{className:"card-title-block"},m.a.createElement("h3",{className:"title"})),m.a.createElement("section",{className:"example"},m.a.createElement("div",{className:"table-responsive"},m.a.createElement("form",{onSubmit:v},m.a.createElement("div",{className:"card card-block"},m.a.createElement("div",{className:"form-group row"},m.a.createElement("label",{className:"col-sm-2 form-control-label text-xs-right"}," Message Content*  "),m.a.createElement("div",{className:"col-sm-10"},m.a.createElement("textarea",{id:"content",className:"form-control boxed",value:c.content,rows:"5",type:"text",name:"content",required:!0,onChange:function(e){"content"===e.target.name&&e.target.value.length<=150&&b(Object(n.a)(Object(n.a)({},c),{},Object(r.a)({},e.target.name,e.target.value)))}}),m.a.createElement("p",{style:{float:"right",color:"red",paddingRight:"15px"}},"Character limit: "+(150-c.content.length)))),m.a.createElement("div",{className:"form-group row"},m.a.createElement("div",{className:"col-sm-10 col-sm-offset-2"},m.a.createElement("button",{type:"submit",className:"btn btn-primary"}," Update "))))))))))))}}}]);
//# sourceMappingURL=15.ddbef371.chunk.js.map