(this["webpackJsonpreact_people-table"]=this["webpackJsonpreact_people-table"]||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},25:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(17),c=n.n(r),u=n(9),m=n(1),o=(n(25),function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Home Page"))}),p=function(){return l.a.createElement("nav",null,l.a.createElement("div",null,l.a.createElement(u.b,{to:"/"},"Home"),l.a.createElement(u.b,{to:"/people"},"People Page")))},i=n(7),E=n.n(i),s=n(10),f=n(19),h=n(14);function d(){return b.apply(this,arguments)}function b(){return(b=Object(s.a)(E.a.mark((function e(){var t,n,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_people-table/api/people.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,a=n.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{mother:n.find((function(t){return e.motherName===t.name}))||"-",father:n.find((function(t){return e.fatherName===t.name}))||"-"})})),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=function(e){var t=e.person;return l.a.createElement("tr",{className:"Person",key:t.slug},l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.sex),l.a.createElement("td",null,t.born),l.a.createElement("td",null,t.died),l.a.createElement("td",null,t.mother.name),l.a.createElement("td",null,t.father.name))},g=function(e){var t=e.people;return l.a.createElement("table",{className:"PeopleTable"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Sex"),l.a.createElement("th",null,"Born"),l.a.createElement("th",null,"Died"),l.a.createElement("th",null,"Mother"),l.a.createElement("th",null,"Father"))),l.a.createElement("tbody",null,t.map((function(e){return l.a.createElement(v,{person:e})}))))},j=function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(s.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),l.a.createElement("div",null,l.a.createElement("p",null,"People page"),n.length?l.a.createElement(g,{people:n}):l.a.createElement("p",null,"Loading..."))},x=function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Not Found Page"))},P=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"People table"),l.a.createElement(p,null),l.a.createElement(m.d,null,l.a.createElement(m.b,{path:"/",exact:!0},l.a.createElement(o,null)),l.a.createElement(m.b,{path:"/people"},l.a.createElement(j,null)),l.a.createElement(m.a,{path:"/home",to:"/"}),l.a.createElement(x,null)))};c.a.render(l.a.createElement(u.a,null,l.a.createElement(P,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.cdf29654.chunk.js.map