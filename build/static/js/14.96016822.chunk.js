(this["webpackJsonpgoose-frontend"]=this["webpackJsonpgoose-frontend"]||[]).push([[14],{698:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return pe}));var c,a,r,i,s,o,u,j,b,l,O,f,p,d,x,m=n(61),h=n(0),g=n(3),v=n(50),w=n(664),k=n(175),S=n(4),y=n.n(S),z=n(14),E=n(26),C=n(67),B=n(12),R=n.n(B),D=n(676),F=n(15),A=n(34),N=n(38),T=n(74),P=n(675),G=n(128),M=function(){var e=Object(h.useState)([]),t=Object(E.a)(e,2),n=t[0],c=t[1],a=Object(C.m)().account,r=Object(G.a)().fastRefresh;return Object(h.useEffect)((function(){a&&function(){var e=Object(z.a)(y.a.mark((function e(){var t,n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=P.a.map((function(e){return{address:Object(N.e)(),name:"pendingEgg",params:[e.pid,a]}})),e.next=3,Object(A.a)(T,t);case 3:n=e.sent,r=P.a.map((function(e,t){return Object(F.a)(Object(F.a)({},e),{},{balance:new R.a(n[t])})})),c(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,r]),n},Q=n(684),H=n(16),J=function(e){var t=e.value,n=e.decimals,c=e.fontSize,a=void 0===c?"40px":c,r=e.prefix,i=Object(Q.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),s=i.countUp,o=i.update,u=Object(h.useRef)(o);return Object(h.useEffect)((function(){u.current(t)}),[t,u]),Object(H.jsxs)(v.v,{bold:!0,fontSize:a,children:[r,s]})},L=function(e){var t=e.earningsSum,n=Object(w.a)();return Object(C.m)().account?Object(H.jsx)(J,{value:t}):Object(H.jsx)(v.v,{color:"textDisabled",style:{lineHeight:"60px"},children:n(298,"Locked")})},U=function(e){var t=e.cakeBalance,n=Object(w.a)();return Object(C.m)().account?Object(H.jsx)(J,{value:t,fontSize:"24px"}):Object(H.jsx)(v.v,{color:"textDisabled",style:{lineHeight:"36px"},children:n(298,"Locked")})},W=n(92),Y=n(179),_=n(85),q=n(672),I=function(e){var t=Object(h.useState)(new R.a(0)),n=Object(E.a)(t,2),c=n[0],a=n[1],r=Object(C.m)(),i=r.account,s=r.ethereum,o=Object(G.a)().fastRefresh;return Object(h.useEffect)((function(){i&&s&&function(){var t=Object(z.a)(y.a.mark((function t(){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(q.b)(s,e,i);case 2:n=t.sent,a(new R.a(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[i,s,e,o]),c},K=function(){var e=Object(h.useState)([]),t=Object(E.a)(e,2),n=t[0],c=t[1],a=Object(C.m)().account,r=Object(G.a)().fastRefresh;return Object(h.useEffect)((function(){a&&function(){var e=Object(z.a)(y.a.mark((function e(){var t,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=P.a.map((function(e){return{address:Object(N.e)(),name:"pendingEgg",params:[e.pid,a]}})),e.next=3,Object(A.a)(T,t);case 3:n=e.sent,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,r]),n},V=n(665),X=Object(g.e)(v.e)(c||(c=Object(m.a)(["\n  background-image: url('/images/egg/2a.png');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]))),Z=g.e.div(a||(a=Object(m.a)(["\n  margin-bottom: 25px;\n"]))),$=g.e.img(r||(r=Object(m.a)(["\n  margin-bottom: 10px;\n"]))),ee=g.e.div(i||(i=Object(m.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),te=(g.e.div(s||(s=Object(m.a)(["\n  margin-top: 24px;\n"]))),function(){var e=Object(h.useState)(!1),t=Object(E.a)(e,2),n=(t[0],t[1]),c=(Object(C.m)().account,Object(w.a)()),a=M(),r=Object(V.a)(I(Object(N.a)())),i=Object(V.a)(I(Object(N.b)())),s=(Object(W.f)().toNumber(),K().reduce((function(e,t){return e+new R.a(t).div(new R.a(10).pow(18)).toNumber()}),0)),o=a.filter((function(e){return e.balance.toNumber()>0})),u=Object(D.a)(o.map((function(e){return e.pid}))).onReward;Object(h.useCallback)(Object(z.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),e.prev=1,e.next=4,u();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,n(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[u]);return Object(H.jsx)(X,{children:Object(H.jsxs)(v.f,{children:[Object(H.jsx)(v.i,{size:"xl",mb:"24px",children:c(549876543222," Balances ")}),Object(H.jsx)($,{src:"/images/egg/2.png",alt:"cake logo",width:64,height:64}),Object(H.jsxs)(Z,{children:[Object(H.jsx)(ee,{children:c(5987651234543244," Earned Flock")}),Object(H.jsx)(L,{earningsSum:s})]}),Object(H.jsxs)(Z,{children:[Object(H.jsx)(ee,{children:c(598765446,"Goose Wallet ")}),Object(H.jsx)(U,{cakeBalance:i}),Object(H.jsx)(ee,{children:c(598765446,"Flock Wallet ")}),Object(H.jsx)(U,{cakeBalance:r})]})]})})}),ne=n(673),ce=Object(g.e)(v.e)(o||(o=Object(m.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),ae=g.e.div(u||(u=Object(m.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),re=function(){var e=Object(w.a)(),t=function(){var e=Object(G.a)().slowRefresh,t=Object(h.useState)(),n=Object(E.a)(t,2),c=n[0],a=n[1];return Object(h.useEffect)((function(){function e(){return(e=Object(z.a)(y.a.mark((function e(){var t,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(_.a)(Y,Object(N.a)()),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,a(new R.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),c}(),n=function(e){var t=Object(h.useState)(new R.a(0)),n=Object(E.a)(t,2),c=n[0],a=n[1],r=Object(G.a)().slowRefresh;return Object(h.useEffect)((function(){!function(){var e=Object(z.a)(y.a.mark((function e(){var t,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(_.a)(Y,Object(N.a)()),e.next=3,t.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:n=e.sent,a(new R.a(n));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[e,r]),c}(Object(N.a)()),c=Object(W.c)(),a=Object(W.f)(),r=t?t.minus(n):new ne.a(0),i=Object(V.a)(r);a.times(r);c&&c[0]&&c[0].eggPerBlock&&new ne.a(c[0].eggPerBlock).div(new ne.a(10).pow(18)).toNumber();var s=Object(g.e)(v.l)(j||(j=Object(m.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary}));return Object(H.jsx)(ce,{children:Object(H.jsxs)(v.f,{children:[Object(H.jsx)(v.i,{size:"xl",mb:"24px",children:e(53498765643124,"Flock Stats ")}),Object(H.jsx)(ae,{children:Object(H.jsx)(s,{href:"https://bscscan.com/token/0xF38D4b3C5CC42eDF9b8a49CACd90E3C9c75D1978",children:" Contract Address "})}),Object(H.jsxs)(ae,{children:[Object(H.jsx)(v.v,{fontSize:"14px",children:e(536,"Total Minted")}),t&&Object(H.jsx)(J,{fontSize:"14px",value:Object(V.a)(t),decimals:0})]}),Object(H.jsxs)(ae,{children:[Object(H.jsx)(v.v,{fontSize:"14px",children:e(538,"Total Burned")}),Object(H.jsx)(J,{fontSize:"14px",value:Object(V.a)(n),decimals:0})]}),Object(H.jsxs)(ae,{children:[Object(H.jsx)(v.v,{fontSize:"14px",children:e(10004,"Circulating Supply")}),i&&Object(H.jsx)(J,{fontSize:"14px",value:i,decimals:0})]})]})})},ie=Object(g.e)(v.l)(b||(b=Object(m.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary})),se=Object(g.e)(v.e)(l||(l=Object(m.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),oe=g.e.div(O||(O=Object(m.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),ue=function(){var e=Object(w.a)(),t=function(){var e=Object(G.a)().slowRefresh,t=Object(h.useState)(),n=Object(E.a)(t,2),c=n[0],a=n[1];return Object(h.useEffect)((function(){function e(){return(e=Object(z.a)(y.a.mark((function e(){var t,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(_.a)(Y,Object(N.b)()),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,a(new R.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),c}(),n=function(e){var t=Object(h.useState)(new R.a(0)),n=Object(E.a)(t,2),c=n[0],a=n[1],r=Object(G.a)().slowRefresh;return Object(h.useEffect)((function(){!function(){var e=Object(z.a)(y.a.mark((function e(){var t,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(_.a)(Y,Object(N.b)()),e.next=3,t.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:n=e.sent,a(new R.a(n));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[e,r]),c}(Object(N.b)()),c=Object(W.c)(),a=Object(W.f)(),r=t?t.minus(n):new ne.a(0),i=Object(V.a)(r);a.times(r);return c&&c[0]&&c[0].eggPerBlock&&new ne.a(c[0].eggPerBlock).div(new ne.a(10).pow(18)).toNumber(),Object(H.jsx)(se,{children:Object(H.jsxs)(v.f,{children:[Object(H.jsx)(v.i,{size:"xl",mb:"24px",children:e(53498765643124,"Goose Stats ")}),Object(H.jsx)(oe,{children:Object(H.jsx)(ie,{href:"https://bscscan.com/token/0x19020C5130793d97E9Acc85c7701262A9b774Fec",children:" Contract Address "})}),Object(H.jsxs)(oe,{children:[Object(H.jsx)(v.v,{fontSize:"14px",children:e(536,"Total Minted")}),t&&Object(H.jsx)(J,{fontSize:"14px",value:Object(V.a)(t),decimals:0})]}),Object(H.jsxs)(oe,{children:[Object(H.jsx)(v.v,{fontSize:"14px",children:e(538,"Total Burned")}),Object(H.jsx)(J,{fontSize:"14px",value:Object(V.a)(n),decimals:0})]}),Object(H.jsxs)(oe,{children:[Object(H.jsx)(v.v,{fontSize:"14px",children:e(10004,"Circulating Supply")}),i&&Object(H.jsx)(J,{fontSize:"14px",value:i,decimals:0})]})]})})},je=n(695),be=Object(g.e)(v.e)(f||(f=Object(m.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),le=(g.e.div(p||(p=Object(m.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),function(){var e=Object(w.a)();return Object(H.jsx)(be,{children:Object(H.jsxs)(v.f,{children:[Object(H.jsx)(v.i,{size:"xl",mb:"24px",children:e(10003,"Announcements")}),Object(H.jsx)(je.a,{dataSource:{sourceType:"profile",screenName:"Goose_Swap"},options:{height:"600",chrome:"noheader, nofooter",width:"400"}})]})})}),Oe=g.e.div(d||(d=Object(m.a)(["\n  align-items: center;\n  background-image: url('/images/egg/3.png');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n\n  "," {\n    background-image: url('/images/egg/3.png'), url('/images/egg/3b.png');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),fe=Object(g.e)(v.b)(x||(x=Object(m.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 48px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),pe=function(){var e=Object(w.a)();return Object(H.jsxs)(k.a,{children:[Object(H.jsxs)(Oe,{children:[Object(H.jsx)(v.i,{as:"h1",size:"xl",mb:"15px",color:"secondary",children:e(5775612443600,"Yield Farm and DeFi development platform")}),Object(H.jsx)(v.v,{children:e(57876543800,"Multi asset yield farm in development.")})]}),Object(H.jsx)("div",{children:Object(H.jsxs)(fe,{children:[Object(H.jsx)(ue,{}),Object(H.jsx)(re,{}),Object(H.jsx)(te,{}),Object(H.jsx)(le,{})]})})]})}}}]);
//# sourceMappingURL=14.96016822.chunk.js.map