(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),o=n(4),i=n.n(o),s=(n(16),n(3)),u=n(5),d=n(6),b=n(10),l=n(9);n(17);var j=function(e){var t=e.good,n=e.neutral,a=e.bad,r=e.total,o=e.positivePercentage;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:["Good:",t]}),Object(c.jsxs)("li",{children:["Neutral:",n]}),Object(c.jsxs)("li",{children:["Bad:",a]})]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:["Total: ",r]}),Object(c.jsxs)("p",{children:["Positive feedback: ",o+"%"]})]})]})},h=n(7),O=n.n(h);function p(e){var t=e.massage;return Object(c.jsx)("p",{children:t})}p.porpTypes={massega:O.a.string.isRequired};var v=p,f=n(22),g=n(8),x=n.n(g);var k=function(e){var t=e.options,n=e.onLeaveFeedback,a=Object.keys(t);return Object(c.jsx)("div",{children:a.map((function(e){return Object(c.jsx)("button",{type:"button",className:x.a.button,onClick:function(){n(e)},children:e},Object(f.a)())}))})};var F=function(e){var t=e.title,n=e.children;return Object(c.jsxs)("section",{children:[Object(c.jsx)("h2",{children:t}),n]})},m=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.updateProp=function(t){e.setState((function(e){return Object(s.a)({},t,e[t]+1)}))},e.updateProp=function(t){e.setState((function(e){return Object(s.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){var t=e.state.good;return Math.round(t/e.countTotalFeedback()*100)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,r=this.countTotalFeedback();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(F,{title:"Please leave feedback",children:Object(c.jsx)(k,{options:this.state,onLeaveFeedback:this.updateProp})}),0===r?Object(c.jsx)(v,{massage:"No feedback given"}):Object(c.jsx)(F,{title:"Statistics",children:Object(c.jsx)(j,{good:t,neutral:n,bad:a,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),n}(a.Component),P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),P()},8:function(e,t,n){e.exports={button:"FeedbackOptions_button__2umdX"}}},[[20,1,2]]]);
//# sourceMappingURL=main.9d71e43d.chunk.js.map