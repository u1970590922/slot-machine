import{E as u,r as c,F as f,G as v,H as d,I as l,e as i,J as h,K as p}from"./entry.Y-WUHRID.js";function I(t,a={}){const e=a.head||u();if(e)return e.ssr?e.push(t,a):m(e,t,a)}function m(t,a,e={}){const s=c(!1),n=c({});f(()=>{n.value=s.value?{}:v(a)});const r=t.push(n.value,e);return d(n,o=>{r.patch(o)}),l()&&(i(()=>{r.dispose()}),h(()=>{s.value=!0}),p(()=>{s.value=!1})),r}const U=(t,a)=>{const e=t.__vccOpts||t;for(const[s,n]of a)e[s]=n;return e};export{U as _,I as u};