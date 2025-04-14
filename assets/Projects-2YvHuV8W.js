import{j as i,d as e,m as t}from"./vendor-BmeWDuoR.js";import{t as a}from"./index-DObWURvj.js";const n=e("section",{target:"e1xs9p468"})("min-height:100vh;display:flex;flex-direction:column;justify-content:center;position:relative;padding:",a.spacing.lg," 0;@media (min-width: ",a.breakpoints.md,"){padding:",a.spacing.xl," 0;}"),o=e(t.h2,{target:"e1xs9p467"})("text-align:center;font-size:clamp(2rem, 4vw, 2.5rem);margin-bottom:calc(",a.spacing.xl," * 1.5);color:",a.colors.textLight,";position:relative;&::after{content:'';position:absolute;bottom:-",a.spacing.md,";left:50%;transform:translateX(-50%);width:60px;height:4px;background-color:",a.colors.accent,";border-radius:2px;}@media (min-width: ",a.breakpoints.md,"){margin-bottom:calc(",a.spacing.xl," * 2);}"),r=e("div",{target:"e1xs9p466"})("display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 280px), 1fr));gap:",a.spacing.lg,";width:100%;margin-top:",a.spacing.lg,";@media (min-width: ",a.breakpoints.md,"){gap:",a.spacing.xl,";margin-top:",a.spacing.xl,";}"),s=e(t.div,{target:"e1xs9p465"})("background:",a.colors.glass.background,";backdrop-filter:blur(8px);border-radius:12px;overflow:hidden;color:",a.colors.textLight,";transition:all ",a.transitions.default,";height:100%;display:flex;flex-direction:column;&:hover{transform:translateY(-5px);box-shadow:0 8px 30px rgba(246, 177, 122, 0.15);}"),l=e("div",{target:"e1xs9p464"})("padding:",a.spacing.md,";flex:1;display:flex;flex-direction:column;@media (min-width: ",a.breakpoints.md,"){padding:",a.spacing.lg,";}"),c=e("h3",{target:"e1xs9p463"})("font-size:clamp(1.25rem, 3vw, 1.5rem);margin-bottom:",a.spacing.sm,";color:",a.colors.light,";font-weight:600;"),d=e("p",{target:"e1xs9p462"})("color:",a.colors.textLight,";margin-bottom:",a.spacing.lg,";font-size:clamp(0.9rem, 2vw, 1rem);line-height:1.6;flex:1;opacity:0.9;"),p=e("div",{target:"e1xs9p461"})("display:flex;flex-wrap:wrap;gap:",a.spacing.xs,";margin-bottom:",a.spacing.md,";@media (min-width: ",a.breakpoints.md,"){gap:",a.spacing.sm,";margin-bottom:",a.spacing.lg,";}"),m=e("span",{target:"e1xs9p460"})("background:",a.colors.glass.card,";color:",a.colors.accent,";padding:4px 10px;border-radius:20px;font-size:clamp(0.75rem, 2vw, 0.85rem);font-weight:500;transition:all ",a.transitions.default,";@media (min-width: ",a.breakpoints.md,"){padding:6px 12px;}&:hover{background:",a.colors.gradient.accent,";color:",a.colors.textDark,";transform:translateY(-1px);box-shadow:0 4px 12px rgba(246, 177, 122, 0.2);}"),g=[{id:1,title:"Tier 1 Banking Client",description:"A electronic trading system for Forex Trading with real-time features and modern UI/UX design.",image:"https://via.placeholder.com/400x200",techStack:["React","SpringBoot","Redux","Typescript","MongoDB","JavaScript","Socket.IO"]},{id:2,title:"Tier 1 Financial Client",description:"A Loan Management System with a focus on security and performance.",image:"https://via.placeholder.com/400x200",techStack:["Next.js","TypeScript","Tailwind"],githubUrl:"https://github.com",liveUrl:"https://example.com"},{id:3,title:"Oracle",description:"Architected, developed, and implemented programs using technologies like OJET, Knockout JS, JavaScript, HTML, CSS, and Ajax to meet business requirements. Leveraged GIT/Hudson for version control and build automation, and integrated with various systems to facilitate data flow to downstream applications. ",image:"https://via.placeholder.com/400x200",techStack:["React","TypeScript","Tailwind"],githubUrl:"https://github.com",liveUrl:"https://example.com"},{id:3,title:"Infosys",description:"Coordinated multi-channel marketing collateral to ensure consistent branding and messaging. Involved in the design and technical development of SAP MM solutions, including screen creation using SAP-ABAP and performance improvements, while communicating with clients on issue resolution and updates. ",image:"https://via.placeholder.com/400x200",techStack:["SAP-ABAP"],githubUrl:"https://github.com",liveUrl:"https://example.com"}],h=()=>{const e={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};return i.jsx(n,{id:"projects",role:"region","aria-label":"Featured Projects",children:i.jsxs("div",{className:"container",children:[i.jsx(o,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},role:"heading","aria-level":2,children:"Featured Projects"}),i.jsx(t.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},initial:"hidden",whileInView:"visible",viewport:{once:!0},children:i.jsx(r,{role:"list",children:g.map((t=>i.jsx(s,{variants:e,role:"listitem","aria-labelledby":`project-title-${t.id}`,children:i.jsxs(l,{children:[i.jsx(c,{id:`project-title-${t.id}`,children:t.title}),i.jsx(d,{children:t.description}),i.jsx(p,{role:"list","aria-label":`Technologies used in ${t.title}`,children:t.techStack.map((e=>i.jsx(m,{role:"listitem",children:e},e)))})]})},t.id)))})})]})})};export{h as default};
