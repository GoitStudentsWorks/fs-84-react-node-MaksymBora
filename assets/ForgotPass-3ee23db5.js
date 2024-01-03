import{u as n,t as r,a as c,b as h,j as e,L as u,k as g}from"./index-a089e988.js";import{D as b,M as j,S as w,F as f,l as y,m as S,A as $,o as _,B as k,p as v,W as D,C as W,q as I,_ as P,a as F,b as t,c as M,d as L,e as T,f as B,g as C,h as q,i as A,j as E,k as R,I as G}from"./SignUpContent.styled-13dc0fad.js";import{b as N,L as O}from"./index-da0d5aa5.js";import"./index-387d7a00.js";import"./index.esm-af86d3df.js";const V=n.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 56px;
  @media screen and (min-width: 834px) {
    flex-direction: row;
    padding-top: 286px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 248px;
  }
`,z=n.label`
  // margin: auto;
  padding: 8px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 300px;
  border-radius: 12px;
  border: 1px solid ${r.color.primaryGreenLite};
  background: ${r.color.primaryBlack2};
  &.input-error {
    border-color: #e74a3b;
  }
  @media screen and (min-width: 834px) {
    width: 380px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    width: 212px;
    display: flex;
    flex-direction: row;
    align-items: center;
    // margin: auto;
  }
`,H=()=>{const o=c(),d=s=>{s.preventDefault();const x={email:s.currentTarget.elements.email.value};o(g(x))},{values:l,errors:a,touched:i,handleBlur:p,handleChange:m}=h({initialValues:{email:""},validationSchema:N});return e.jsx(e.Fragment,{children:e.jsxs(b,{children:[e.jsx(j,{children:"Forgot your password"}),e.jsx(w,{children:"We will send you an email with recovery instructions"}),e.jsxs(f,{onSubmit:d,children:[e.jsxs(y,{children:[e.jsx(z,{className:a.email&&i.email?"input-error":"",children:e.jsx(S,{onBlur:p,onChange:m,value:l.email,name:"email",placeholder:"E-mail",required:!0})}),a.email&&i.email&&e.jsx($,{children:a.email})]}),e.jsx(_,{children:e.jsx(k,{type:"submit",children:"Send"})})]}),e.jsxs(V,{children:[e.jsx(v,{children:"Do you already have an account?"}),e.jsx(O,{children:e.jsx(u,{to:"/signup",children:"Sign in"})})]})]})})},Z=()=>e.jsx(e.Fragment,{children:e.jsx(D,{children:e.jsx(W,{children:e.jsxs(I,{children:[e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${P} 1x, ${F} 2x`,type:"image/webp"}),e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${t} 1x, ${M} 2x`,type:"image/webp"}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`${L} 1x, ${T} 2x`,type:"image/webp"}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`${B} 1x, ${C} 2x`,type:"image/png"}),e.jsx("source",{media:"(max-width: 767px)",srcSet:`${q} 1x, ${A} 2x`,type:"image/webp"}),e.jsx("source",{media:"(max-width: 767px)",srcSet:`${E} 1x, ${R} 2x`,type:"image/png"}),e.jsx(G,{src:t,alt:"Responsive"})]}),e.jsx(H,{})]})})})});export{Z as default};
