(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{20:function(e,t,c){"use strict";var n=c(21),s=c.n(n),o=c(2);t.a=function(){return Object(o.jsxs)("div",{className:s.a.noquotes,children:[Object(o.jsx)("p",{children:"No quotes found!"}),Object(o.jsx)("a",{className:"btn",children:"Add a Quote"})]})}},21:function(e,t,c){e.exports={noquotes:"NoQuotesFound_noquotes__3DIYb"}},30:function(e,t,c){e.exports={comments:"Comments_comments__iZX-v"}},31:function(e,t,c){e.exports={form:"NewCommentForm_form__2Te8b",loading:"NewCommentForm_loading__2veC2",control:"NewCommentForm_control__3NVeP",actions:"NewCommentForm_actions__2fwWP"}},32:function(e,t,c){e.exports={item:"CommentItem_item__24mbD"}},33:function(e,t,c){e.exports={comments:"CommentsList_comments__valp0"}},34:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__nE9T6"}},38:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),o=c(6),a=c(4),r=c(18),m=c(30),d=c.n(m),j=c(19),i=c(8),u=c(31),l=c.n(u),b=c(2),x=function(e){var t=Object(n.useRef)(),c=Object(r.a)(j.a),s=c.sendRequest,o=c.status,a=c.error,m=e.onAddedComment;Object(n.useEffect)((function(){"completed"!==o||a||m()}),[a,o,m]);var d=function(c){c.preventDefault();var n=t.current.value;s({commentData:{text:n},quoteId:e.quoteId})};return Object(b.jsxs)("form",{className:l.a.form,onSubmit:d,children:["pending"===o&&Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(i.a,{})}),Object(b.jsxs)("div",{className:l.a.control,onSubmit:d,children:[Object(b.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(b.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(b.jsx)("div",{className:l.a.actions,children:Object(b.jsx)("button",{className:"btn",children:"Add Comment"})})]})},O=c(32),f=c.n(O),h=function(e){return Object(b.jsx)("li",{className:f.a.item,children:Object(b.jsx)("p",{children:e.text})})},p=c(33),_=c.n(p),N=function(e){return Object(b.jsx)("ul",{className:_.a.comments,children:e.comments.map((function(e){return Object(b.jsx)(h,{text:e.text},e.id)}))})},v=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],o=t[1],m=Object(s.h)(),u=Object(r.a)(j.c),l=u.sendRequest,O=u.status,f=u.data;Object(n.useEffect)((function(){l(m.quoteId)}),[m.quoteId,l]);var h,p=Object(n.useCallback)((function(){l(m.quoteId)}),[l,m.quoteId]);return"pending"===O&&(h=Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(i.a,{})})),"completed"===O&&f&&(h=Object(b.jsx)(N,{comments:f})),"completed"!==O||f&&0!==f.length||(h=Object(b.jsx)("div",{children:"no comment were added yet"})),Object(b.jsxs)("section",{className:d.a.comments,children:[Object(b.jsx)("h2",{children:"User Comments"}),!c&&Object(b.jsx)("button",{className:"btn",onClick:function(){o(!0)},children:"Add a Comment"}),c&&Object(b.jsx)(x,{quoteId:m.quoteId,onAddedComment:p}),h]})},q=c(34),C=c.n(q),g=function(e){return Object(b.jsxs)("figure",{className:C.a.quote,children:[Object(b.jsx)("p",{children:e.text}),Object(b.jsx)("figcaption",{children:e.author})]})},I=c(20);t.default=function(){var e=Object(s.f)(),t=Object(s.h)();console.log(e);var c=t.quoteId,a=Object(r.a)(j.e,!0),m=a.sendRequest,d=a.status,u=a.data,l=a.error;return Object(n.useEffect)((function(){m(c)}),[m,c]),"pending"===d?Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(i.a,{})}):l?Object(b.jsx)("div",{className:"centered focused",children:l}):"completed"!==d||u&&0!==u.length?u?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g,{text:u.text,author:u.author}),Object(b.jsxs)(s.d,{children:[Object(b.jsx)(s.b,{path:"*",exact:!0,element:Object(b.jsx)("div",{className:"centered",children:Object(b.jsxs)(o.b,{className:"btn--flat",to:"comments",children:[" ","Load Comments"]})})}),Object(b.jsx)(s.b,{path:"comments",element:Object(b.jsx)(v,{})})]})]}):Object(b.jsx)("p",{children:"No quote found !"}):Object(b.jsx)(I.a,{})}}}]);
//# sourceMappingURL=4.c1daed4c.chunk.js.map