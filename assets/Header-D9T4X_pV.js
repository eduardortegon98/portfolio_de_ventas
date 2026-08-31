import{u,a as f,r as t,j as r,L as n}from"./index-DPaPN4cp.js";import{c as i}from"./createLucideIcon-DoGQk0SA.js";const g=[["path",{d:"M16 2v2",key:"scm5qe"}],["path",{d:"M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",key:"1waht3"}],["path",{d:"M8 2v2",key:"pbkmx"}],["circle",{cx:"12",cy:"11",r:"3",key:"itu57m"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",key:"12vinp"}]],b=i("contact",g);const y=[["path",{d:"m10 17 5-5-5-5",key:"1bsop3"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}]],k=i("log-in",y),j="/assets/Soluciones_Tecnologicas_Ortegon-B9Kg2oqi.png",l=[{label:"Login",href:"/login",image:k},{label:"Contacto",href:"/contacto",image:b}],E=()=>{const{theme:d,setTheme:m}=u(),{pathname:s}=f(),[c,a]=t.useState(!1),[x,p]=t.useState(!1);t.useEffect(()=>{const e=o=>{o.key==="Escape"&&a(!1)};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[]),t.useEffect(()=>{a(!1)},[s]),t.useEffect(()=>{const e=()=>{const o=document.getElementById("products");if(!o)return;const v=o.getBoundingClientRect().top;p(v<=0)};return window.addEventListener("scroll",e),e(),()=>{window.removeEventListener("scroll",e)}},[]);const h=()=>{m(e=>e==="dark"?"corporate":"dark")};return r.jsx("header",{className:`fixed bg-black top-0 left-0 right-0 z-50 transition-all duration-500 ${x?"translate-y-0 opacity-100":"-translate-y-full opacity-0 pointer-events-none"}`,children:r.jsxs("div",{className:` \r
        `,children:[r.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6",children:r.jsxs("div",{className:"flex h-20 items-center justify-between",children:[r.jsxs(n,{to:"/",className:"flex items-center gap-3",children:[r.jsx("img",{src:j,alt:"Soluciones Tecnológicas Ortegón",className:`\r
                  h-12 w-12 \r
                  border-2 border-[var(--color-primary)]\r
                  object-contain shadow-md\r
                `}),r.jsxs("div",{className:"hidden sm:block text-[var(--color-text)]",children:[r.jsx("p",{className:"text-lg font-extrabold tracking-tight",children:"Soluciones Tecnológicas Ortegón"}),r.jsx("p",{className:"text-sm text-[var(--color-primary)]",children:"Ingeniería, software e IA para tu negocio."})]})]}),r.jsxs("div",{className:"hidden items-center gap-6 md:flex",children:[r.jsx("nav",{className:"flex items-center gap-4",children:l.map(e=>{const o=s===e.href;return r.jsxs(n,{to:e.href,className:["relative px-3 py-2 font-medium transition-all duration-200",o?"text-[var(--color-primary)] underline decoration-[var(--color-primary)] underline-offset-4":"text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"].join(" "),children:[r.jsx(e.image,{size:18,className:"inline-block mr-1"}),e.label]},e.href)})}),r.jsx(n,{to:"/cotizar",className:`\r
                  rounded-full\r
                  bg-[var(--color-primary)]\r
                  px-5 py-2.5\r
                  text-sm font-bold text-black\r
                  shadow-lg transition\r
                  hover:bg-[var(--color-primary-hover)]\r
                  focus:outline-none\r
                  focus-visible:ring-2\r
                  focus-visible:ring-[var(--color-primary)]\r
                `,children:"Cotizar"})]}),r.jsx("button",{type:"button",onClick:()=>a(e=>!e),className:`\r
                text-2xl\r
                text-[var(--color-text)]\r
                focus:outline-none\r
                md:hidden\r
              `,children:c?"✕":"☰"})]})}),c&&r.jsx("div",{className:`\r
              border-t border-[var(--color-border-strong)]\r
              bg-[var(--color-surface)]\r
              backdrop-blur-lg\r
              md:hidden\r
            `,children:r.jsxs("nav",{className:"flex flex-col gap-2 px-4 py-4",children:[l.map(e=>{const o=s===e.href;return r.jsxs(n,{to:e.href,className:["block  px-3 py-2 text-sm font-semibold transition",o?"bg-[var(--color-primary)]/20 text-[var(--color-primary)]":"text-[var(--color-text-muted)] hover:bg-white/10 hover:text-[var(--color-text)]"].join(" "),children:[r.jsx(e.image,{size:18,className:"inline-block mr-1"}),e.label]},e.href)}),r.jsx(n,{to:"/cotizar",className:`\r
                  mt-2 block \r
                  bg-[var(--color-primary)]\r
                  px-4 py-3 text-center\r
                  text-sm font-bold text-black\r
                  transition\r
                  hover:bg-[var(--color-primary-hover)]\r
                `,children:"Cotizar"}),r.jsx("button",{onClick:()=>{h(),a(!1)},className:`\r
                  mt-2 \r
                  bg-[var(--color-primary)]\r
                  px-4 py-3\r
                  text-sm font-bold text-black\r
                  transition\r
                  hover:bg-[var(--color-primary-hover)]\r
                `,children:d==="dark"?"Modo corporativo":"Modo oscuro"})]})})]})})};export{E as default};
