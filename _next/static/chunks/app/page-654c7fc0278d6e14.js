(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9760:function(t,s,i){Promise.resolve().then(i.bind(i,8024))},8024:function(t,s,i){"use strict";i.r(s),i.d(s,{default:function(){return a}});var r=i(7437),n=i(2265);class e{remove(t){this.nd[this.nd[t].l].r=this.nd[t].r,this.nd[this.nd[t].r].l=this.nd[t].l;for(let s=this.nd[t].d;s!==t;s=this.nd[s].d)for(let t=this.nd[s].l;t!==s;t=this.nd[t].l)this.nd[this.nd[t].d].u=this.nd[t].u,this.nd[this.nd[t].u].d=this.nd[t].d,this.siz[this.col[t]]--}recover(t){this.nd[this.nd[t].l].r=t,this.nd[this.nd[t].r].l=t;for(let s=this.nd[t].d;s!==t;s=this.nd[s].d)for(let t=this.nd[s].l;t!==s;t=this.nd[t].l)this.nd[this.nd[t].d].u=t,this.nd[this.nd[t].u].d=t,this.siz[this.col[t]]++}_insert(t,s){this.col[++this.cnt]=s,this.row[this.cnt]=t,this.siz[s]++,this.nd[this.cnt].d=this.nd[s].d,this.nd[this.nd[s].d].u=this.cnt,this.nd[s].d=this.cnt,this.nd[this.cnt].u=s,this.first[t]?(this.nd[this.cnt].r=this.nd[this.first[t]].r,this.nd[this.nd[this.first[t]].r].l=this.cnt,this.nd[this.cnt].l=this.first[t],this.nd[this.first[t]].r=this.cnt):this.first[t]=this.nd[this.cnt].l=this.nd[this.cnt].r=this.cnt}build(t){for(let t=0;t<=e.Max;t++)this.nd[t]={u:0,d:0,l:0,r:0},this.first[t]=0,this.siz[t]=0;for(let t=0;t<=e.c;++t)this.nd[t]={u:t,d:t,l:t-1,r:t+1};this.nd[0].l=e.c,this.nd[this.cnt=e.c].r=0;for(let s=0;s<9;++s)for(let i=0;i<9;++i)if(t[s][i])this.insert(s,i,t[s][i]);else for(let t=1;t<=9;++t)this.insert(s,i,t)}insert(t,s,i){let r=81*t+9*s+i;this._insert(r,9*t+i),this._insert(r,81+9*s+i),this._insert(r,162+27*Math.floor(t/3)+9*Math.floor(s/3)+i),this._insert(r,243+9*t+s+1)}solve(t){let s,i=this.nd[0].l,r=i;if(!i){for(let s=1;s<t;++s)this.ans[Math.floor((this.stk[s]-1)/81)][Math.floor((this.stk[s]-1)/9)%9]=(this.stk[s]-1)%9+1;return!0}for(;i;)this.siz[r]>this.siz[i]&&(r=i),i=this.nd[i].l;for(this.remove(r),i=this.nd[r].d;i!==r;i=this.nd[i].d){for(this.stk[t]=this.row[i],s=this.nd[i].l;s!==i;s=this.nd[s].l)this.remove(this.col[s]);if(this.solve(t+1))return!0;for(s=this.nd[i].l;s!==i;s=this.nd[s].l)this.recover(this.col[s])}return this.recover(r),!1}constructor(t){this.nd=Array(e.Max),this.first=Array(e.Max),this.siz=Array(e.Max),this.col=Array(e.Max),this.cnt=0,this.row=Array(e.Max),this.stk=Array(e.ansMax),this.ans=t}}e.Max=3600,e.ansMax=87,e.r=729,e.c=324;let h={x:8,y:8};var l=Array(9).fill(0).map(()=>Array(9).fill(0));let d=new e(l);var o=0;function a(){let[t,s]=(0,n.useState)(Array(9).fill(0).map(()=>Array(9).fill(0))),[i,e]=(0,n.useState)(Array(9).fill(0).map(()=>Array(9).fill(0))),[a,f]=(0,n.useState)({x:0,y:0}),c=(t,s)=>{t<0||t>h.x||s<0||s>h.y||f({x:t,y:s})};function u(t){let{map:s}=t;return s.map((t,s)=>(0,r.jsx)("div",{children:t.map((t,i)=>{let n=s===a.x&&i===a.y?"bg-red-500":"";return(0,r.jsx)("span",{onClick:()=>c(s,i),className:"text-center content-center border text-3xl w-14 h-12 inline-grid "+n,children:0===t?(0,r.jsx)(r.Fragment,{children:"\xa0"}):t},i)})},s))}return(0,n.useEffect)(()=>{let i=i=>{let{x:r,y:n}=a;"ArrowUp"===i.key&&c(r-1,n),"ArrowDown"===i.key&&c(r+1,n),"ArrowLeft"===i.key&&c(r,n-1),"ArrowRight"===i.key&&c(r,n+1),"0"<=i.key&&i.key<="9"&&s(t.map((t,s)=>t.map((t,e)=>s===r&&e===n?Number(i.key):t)))};return window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)}},[a]),(0,n.useEffect)(function(){if(o<1){++o;return}for(let s=0;s<9;s++)for(let i=0;i<9;i++)l[s][i]=t[s][i];d.build(t),d.solve(0),e(Array.from(l))},[t]),(0,r.jsxs)("div",{className:"mt-4 ml-8 select-none",children:[(0,r.jsx)("button",{className:"text-2xl mr-4",onClick:()=>s(Array(9).fill(Array(9).fill(void 0))),children:"Clean"}),(0,r.jsx)(u,{map:t}),(0,r.jsx)(u,{map:i})]})}},622:function(t,s,i){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=i(2265),n=Symbol.for("react.element"),e=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(t,s,i){var r,e={},o=null,a=null;for(r in void 0!==i&&(o=""+i),void 0!==s.key&&(o=""+s.key),void 0!==s.ref&&(a=s.ref),s)h.call(s,r)&&!d.hasOwnProperty(r)&&(e[r]=s[r]);if(t&&t.defaultProps)for(r in s=t.defaultProps)void 0===e[r]&&(e[r]=s[r]);return{$$typeof:n,type:t,key:o,ref:a,props:e,_owner:l.current}}s.Fragment=e,s.jsx=o,s.jsxs=o},7437:function(t,s,i){"use strict";t.exports=i(622)}},function(t){t.O(0,[971,596,744],function(){return t(t.s=9760)}),_N_E=t.O()}]);