(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{77341:function(e,n,r){Promise.resolve().then(r.bind(r,10912)),Promise.resolve().then(r.bind(r,61481)),Promise.resolve().then(r.t.bind(r,53054,23)),Promise.resolve().then(r.bind(r,82650)),Promise.resolve().then(r.bind(r,12179))},82650:function(e,n,r){"use strict";r.d(n,{Providers:function(){return i}});var s=r(57437),l=r(29039),a=r(57168),t=r(63874);function i(e){let{children:n}=e;return(0,s.jsx)(l.J$,{value:{revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1,shouldRetryOnError:!1,refreshInterval:0,onError:e=>alert(e.message),fetcher:async e=>{let[n,r]=e,s={Accept:"application/json",...(null==r?void 0:r.headers)||{}},l=new FormData,a=null,t=n;if((null==r?void 0:r.method)==="GET"&&(null==r?void 0:r.body)){let e=new URLSearchParams(r.body);t="".concat(n,"?").concat(e.toString())}if(null==r?void 0:r.body){let e=!1;for(let[n,s]of Object.entries(r.body))s instanceof File&&(e=!0),l.append(n,s);e?a=l:(a=JSON.stringify(r.body),s["Content-Type"]="application/json")}let i=(null==r?void 0:r.method)==="GET"?await fetch("https://be-internship.onrender.com"+t):await fetch("https://be-internship.onrender.com"+t,{method:(null==r?void 0:r.method)||"POST",body:a,headers:s});if(!i.ok){let e=await i.text();throw Error("Error: ".concat(i.status," - ").concat(e))}return await i.json()}},children:(0,s.jsx)(a.w,{children:(0,s.jsx)(t.w,{children:n})})})}},12098:function(e,n,r){"use strict";r.r(n);var s=r(99480),l=r(85168);let a=(0,s.b)(l.A,{variants:{variant:{black:"border-black",light:"border-black"},color:{light:"bg-white text-dark",gray:"bg-gray text-dark",black:"bg-dark text-white"}},defaultVariants:{color:"default",size:"md"}});n.default=a},59120:function(e,n,r){"use strict";r.d(n,{Z:function(){return t}});var s=r(57437),l=r(2265),a=r(12098);function t(e){var n;let{title:r="ApplyNow",renderHeader:t,children:i,header:o,tags:d=[],isLiked:c}=e,[m,x]=l.useState(!1),u=l.useRef(null);return(0,s.jsxs)("div",{className:"flex flex-col bg-white p-5 lg:p-6 rounded-xl lg:rounded-3xl",children:[(0,s.jsxs)("div",{className:"flex flex-col lg:flex-row lg:items-center justify-between",children:[t||(0,s.jsxs)("div",{className:"flex flex-col lg:items-center lg:flex-row gap-3",children:[(0,s.jsx)("img",{className:"hidden lg:block w-[80px] h-[80px] rounded-[32px] object-center object-cover",src:o.logo,alt:o.name}),(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsx)("img",{className:"hidden sm:block w-[80px] h-[80px] lg:hidden rounded-[32px] object-center object-cover",src:o.logo,alt:o.name}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("div",{className:"text-primary font-bold text-lg lg:text-2xl",children:o.name}),(0,s.jsx)("div",{className:"text-sm lg:text-base font-bold",children:o.company})]})]}),(0,s.jsx)(a.default,{radius:"sm",className:"lg:hidden w-[100px]",variant:m?"bordered":"solid",color:m?"default":"primary",size:"md",onClick:()=>x(!m),children:m?"Less Details":r})]}),(0,s.jsxs)("div",{className:"flex lg:hidden xl:flex gap-4 flex-wrap",children:[(0,s.jsxs)("div",{className:"flex items-center rounded-md md:rounded-xl px-3 py-2 md:p-3 font-medium bg-gray text-sm md:text-md",children:[(0,s.jsx)("i",{className:"fa-solid fa-location-dot mr-2"}),o.city]}),(0,s.jsx)("div",{className:"flex items-center rounded-md md:rounded-xl px-3 py-2 md:p-3 font-medium bg-gray text-sm md:text-md",children:o.salary}),(0,s.jsx)("div",{className:"flex items-center rounded-md md:rounded-xl px-3 py-2 md:p-3 font-medium bg-gray text-sm md:text-md",children:o.jobType})]})]}),(0,s.jsx)(a.default,{className:"hidden lg:block",variant:m?"bordered":"solid",color:m?"default":"primary",size:"lg",style:{width:130},onClick:()=>x(!m),children:m?"Less Details":r})]}),(0,s.jsxs)("div",{className:"hidden lg:flex gap-4 mt-4 xl:hidden flex-wrap",children:[(0,s.jsxs)("div",{className:"flex items-center rounded-md md:rounded-xl px-3 py-2 md:p-3 font-medium bg-gray text-sm md:text-md",children:[(0,s.jsx)("i",{className:"fa-solid fa-location-dot mr-2"}),o.city]}),(0,s.jsx)("div",{className:"flex items-center rounded-md md:rounded-xl px-3 py-2 md:p-3 font-medium bg-gray text-sm md:text-md",children:o.salary}),(0,s.jsx)("div",{className:"flex items-center rounded-md md:rounded-xl px-3 py-2 md:p-3 font-medium bg-gray text-sm md:text-md",children:o.jobType})]}),(0,s.jsxs)("div",{ref:u,style:{maxHeight:m?null===(n=u.current)||void 0===n?void 0:n.scrollHeight:0},className:"transition-[max-height] duration-300 overflow-hidden",children:[(0,s.jsx)("div",{className:"py-2",children:i}),(0,s.jsx)("div",{className:"border-b border-light-gray"}),(0,s.jsxs)("div",{className:"flex flex-col md:flex-row justify-between pt-4 gap-4",children:[(0,s.jsx)("div",{className:"hidden lg:flex gap-2 md:gap-4 flex-wrap",children:d.map((e,n)=>(0,s.jsx)("div",{className:"font-medium rounded-md text-sm md:text-md md:rounded-xl p-2 md:p-3 bg-gray",children:e},n))}),(0,s.jsxs)("div",{className:"flex gap-4 justify-between flex-1 lg:flex-none",children:[(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsx)(a.default,{color:"gray",size:"lg",isIconOnly:!0,children:c?(0,s.jsx)("i",{className:"fa-solid fa-heart"}):(0,s.jsx)("i",{className:"fa-regular fa-heart"})}),(0,s.jsx)(a.default,{color:"gray",size:"lg",isIconOnly:!0,children:(0,s.jsx)("i",{className:"fa-solid fa-share-nodes"})})]}),(0,s.jsx)(a.default,{className:"w-[130px]",color:"primary",size:"lg",children:r})]})]})]})]})}},12179:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return R}});var s=r(57437),l=r(2265),a=r(76208),t=r(83662),i=r(2429),o=r(95256),d=r(81887),c=r(47971),m=r(28199),x=r(34191),u=r(57805),f=r(53891),h=r(74744),p=r(86425),g=r(59594),j=r(98319),b=r(949),v=r(11829),y=r(2428),N=r(34057),w=r(73155),k=r(10771),O=r(44510),I=r(68826),C=r(16463),S=r(10059),P=r(79593),z=r(63874);r(43034);let q=[{name:"Home",link:"/"},{name:"Postings",link:"/postings",children:[{name:"Company",link:"/postings/company",description:"Create or update your company profile to start posting job."},{name:"Job",link:"/postings/job",description:"Fill out the details below to create a job posting."}]},{name:"Services",link:"/services"},{name:"Careers",link:"/careers"},{name:"Contact Us",link:"/contact"}];function R(e){let{children:n}=e,r=(0,C.usePathname)(),R=(0,a.q)(),E=(0,a.q)(),{setUser:F,user:T,logout:A}=(0,z.q)(),{mutate:D,isLoading:U}=(0,P.il)("/auth/signin","POST",void 0,{onSuccess:e=>{let n={token:e.token,name:e.user.name,email:e.user.email};F(n),(0,P.D9)("user",n),R.onClose()}}),{mutate:L,isLoading:W}=(0,P.il)("/auth/signup","POST",void 0,{onSuccess:e=>{let n={token:e.token,name:e.user.name,email:e.user.email};F(n),(0,P.D9)("user",n),R.onClose()}}),_=l.useCallback(e=>{e.preventDefault(),D(Object.fromEntries(new FormData(e.target)))},[]),J=l.useCallback(e=>{e.preventDefault(),L(Object.fromEntries(new FormData(e.target)))},[]),G=l.useCallback(e=>{e.preventDefault()},[]);return(0,s.jsxs)(s.Fragment,{children:[E.isOpen&&(0,s.jsx)(t.R,{isOpen:E.isOpen,onOpenChange:E.onOpenChange,placement:"center",classNames:{closeButton:"z-50"},size:"lg",children:(0,s.jsx)(i.A,{children:(0,s.jsxs)("form",{name:"profile",onSubmit:G,children:[(0,s.jsx)(o.k,{children:"Profile"}),(0,s.jsxs)(d.I,{children:[(0,s.jsx)(S.II,{required:!0,isRequired:!0,variant:"default",name:"name",label:"Name",defaultValue:null==T?void 0:T.name}),(0,s.jsx)(S.II,{disabled:!0,isDisabled:!0,variant:"default",name:"email",label:"Email",defaultValue:null==T?void 0:T.email}),(0,s.jsx)(S.II,{required:!0,isRequired:!0,variant:"default",name:"password",type:"password",label:"Password"}),(0,s.jsx)(S.II,{required:!0,isRequired:!0,variant:"default",type:"password",label:"Confirm Password"})]}),(0,s.jsxs)(c.R,{children:[(0,s.jsx)(S.zx,{className:"border-1 font-general-sans",color:"primary",variant:"bordered",onPress:E.onClose,children:"Close"}),(0,s.jsx)(S.zx,{className:"font-general-sans",color:"primary",type:"submit",children:"Update"})]})]})})}),R.isOpen&&(0,s.jsx)(t.R,{isOpen:R.isOpen,onOpenChange:R.onOpenChange,placement:"center",classNames:{closeButton:"z-50"},size:"lg",children:(0,s.jsx)(i.A,{children:e=>(0,s.jsxs)(m.n,{"aria-label":"Tabs",variant:"underlined",classNames:{tabList:"gap-6 w-full relative rounded-none p-0 border-b border-divider",cursor:"w-full bg-primary",tab:"max-w-fit py-7 px-8 text-sm font-medium	font-open-sans !outline-0",tabContent:"group-data-[selected=true]:text-primary"},children:[(0,s.jsx)(x.r,{title:"Sign In",children:(0,s.jsxs)("form",{name:"signin",onSubmit:_,children:[(0,s.jsxs)(d.I,{children:[(0,s.jsx)(S.II,{required:!0,isRequired:!0,variant:"default",name:"email",label:"Email"}),(0,s.jsx)(S.II,{required:!0,isRequired:!0,variant:"default",type:"password",name:"password",label:"Password"})]}),(0,s.jsxs)(c.R,{children:[(0,s.jsx)(S.zx,{className:"border-1 font-general-sans",color:"primary",variant:"bordered",onPress:e,children:"Close"}),(0,s.jsx)(S.zx,{className:"font-general-sans",color:"primary",type:"submit",isLoading:U,children:"Sign In"})]})]})},"signin"),(0,s.jsx)(x.r,{title:"Sign Up",children:(0,s.jsxs)("form",{name:"signup",onSubmit:J,children:[(0,s.jsxs)(d.I,{children:[(0,s.jsx)(S.II,{required:!0,isRequired:!0,variant:"default",name:"name",label:"Name"}),(0,s.jsx)(S.II,{required:!0,isRequired:!0,variant:"default",name:"email",label:"Email"}),(0,s.jsx)(S.II,{required:!0,isRequired:!0,variant:"default",name:"password",type:"password",label:"Password"}),(0,s.jsx)(S.II,{required:!0,isRequired:!0,variant:"default",type:"password",label:"Confirm Password"})]}),(0,s.jsxs)(c.R,{children:[(0,s.jsx)(S.zx,{className:"border-1 font-general-sans",color:"primary",variant:"bordered",onPress:e,children:"Close"}),(0,s.jsx)(S.zx,{className:"font-general-sans",color:"primary",type:"submit",isLoading:W,children:"Sign Up"})]})]})},"signup")]})})}),(0,s.jsxs)(u.R,{maxWidth:"xl",className:"dark bg-primary",height:"80px",children:[(0,s.jsx)(f.U,{className:"md:hidden !grow-0",justify:"start",children:(0,s.jsx)(h.L,{className:"text-white",icon:()=>(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{fill:"currentColor",d:"M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"})})})}),(0,s.jsx)(f.U,{className:"pr-3",justify:"start",children:(0,s.jsx)(p.H,{children:(0,s.jsx)("div",{className:"font-extrabold text-2xl lg:text-4xl text-foreground",children:"Fair Computers"})})}),(0,s.jsx)(f.U,{className:"hidden md:flex gap-6 lg:gap-12",justify:"end",children:q.map((e,n)=>(null==e?void 0:e.children)&&e.children.length?(0,s.jsxs)(g.F,{children:[(0,s.jsx)(j.k,{children:(0,s.jsx)(b.S,{children:(0,s.jsx)(S.zx,{disableRipple:!0,className:"p-0 bg-transparent data-[hover=true]:bg-transparent font-general-sans font-semibold text-sm ".concat(e.children.map(e=>e.link).indexOf(r)>-1?"text-powerful-gray":""),children:e.name})})}),(0,s.jsx)(v.a,{"aria-label":e.name,className:"w-[340px]",hideSelectedIcon:!0,itemClasses:{base:"gap-4",title:"font-general-sans font-semibold text-sm"},selectedKeys:e.children.map((e,n)=>e.link===r?n:"").toString(),selectionMode:"single",children:e.children.map((e,n)=>(0,s.jsx)(y.W,{href:e.link,description:e.description,children:e.name},n))})]},n):(0,s.jsx)(j.k,{children:(0,s.jsx)(N.O,{className:"font-general-sans font-semibold text-sm ".concat(e.link===r?"text-powerful-gray":""),title:e.name,color:"foreground",href:e.link,children:e.name})},n))}),(0,s.jsx)(f.U,{justify:"end",className:"!grow-0 lg:pl-8",children:(0,s.jsx)(j.k,{children:T?(0,s.jsxs)(g.F,{placement:"bottom-end",children:[(0,s.jsx)(b.S,{children:(0,s.jsx)(S.zx,{type:"button",color:"light",radius:"full",variant:"bordered",children:T.name})}),(0,s.jsxs)(v.a,{"aria-label":"Profile Actions",variant:"flat",children:[(0,s.jsx)(y.W,{onPress:E.onOpen,children:"Profile"},"profile"),(0,s.jsx)(y.W,{color:"danger",onPress:A,children:"Sign Out"},"logout")]})]}):(0,s.jsx)(S.zx,{className:"font-semibold border font-general-sans p-6",type:"button",color:"light",radius:"full",variant:"bordered",onPress:R.onOpen,children:"SIGN IN/UP"})})}),(0,s.jsx)(w.$,{children:q.map((e,n)=>(null==e?void 0:e.children)&&e.children.length?(0,s.jsx)(k.d,{variant:"splitted",className:"p-0",defaultExpandedKeys:e.children.map(e=>e.link).indexOf(r)>-1?"0":"",children:(0,s.jsx)(O.G,{"aria-label":e.name,title:e.name,classNames:{base:"p-0 rounded-none shadow-none bg-transparent",trigger:"p-0",titleWrapper:"flex-none",indicator:"rotate-[270deg] data-[open=true]:-rotate-[-90deg]"},children:e.children.map((n,l)=>(0,s.jsx)(N.O,{className:"w-full text-large no-underline hover:opacity-80 ml-3 ".concat(l===e.children.length-1?"":"mb-2"," ").concat(n.link===r?"text-primary":""),title:n.name,color:"foreground",href:n.link,children:n.name},l))},0)},n):(0,s.jsx)(I.h,{children:(0,s.jsx)(N.O,{title:e.name,className:"w-full ".concat(e.link===r?"text-primary":""),color:"foreground",href:e.link,size:"lg",children:e.name})},n))})]}),(0,s.jsx)("main",{className:"",children:n}),(0,s.jsx)("footer",{className:"dark bg-dark text-white w-full py-20",children:(0,s.jsxs)("div",{className:"container max-w-[1280px] mx-auto px-6",children:[(0,s.jsx)("div",{className:"flex flex-col lg:flex-row justify-between gap-10 mb-10",children:(0,s.jsxs)("div",{className:"flex flex-col lg:flex-row w-full justify-between items-start gap-10 lg:gap-16",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-8 w-full lg:min-w-[500px]",children:[(0,s.jsx)("h2",{className:"text-4xl font-extrabold",children:"Fair Computers"}),(0,s.jsx)("div",{className:"text-sm font-general-sans",children:"Join our mailing list to stay up to date on offers and services."}),(0,s.jsxs)("form",{className:"inline-flex gap-4 items-center w-full",name:"subscribe",method:"POST",children:[(0,s.jsx)(S.II,{type:"email",variant:"underlined",placeholder:"Enter your email",className:"flex-grow"}),(0,s.jsx)(S.zx,{className:"font-semibold font-general-sans py-3 px-6",type:"submit",color:"light",radius:"full",children:"Subscribe"})]}),(0,s.jsx)("div",{className:"text-sm font-general-sans leading-6",children:"By subscribing, you agree to our Privacy Policy and consent to receive updates from our company."})]}),(0,s.jsxs)("div",{className:"flex justify-between w-full",children:[(0,s.jsxs)("div",{className:"flex flex-col flex-1 gap-4",children:[(0,s.jsx)("h3",{className:"text-xs font-semibold font-general-sans",children:"Explore More"}),(0,s.jsx)(N.O,{href:"#",title:"About",className:"text-sm font-general-sans hover:underline",color:"foreground",children:"About"}),(0,s.jsx)(N.O,{href:"#",title:"Services",className:"text-sm font-general-sans hover:underline",color:"foreground",children:"Services"}),(0,s.jsx)(N.O,{href:"#",title:"Contact Us",className:"text-sm font-general-sans hover:underline",color:"foreground",children:"Contact Us"}),(0,s.jsx)(N.O,{href:"#",title:"Careers",className:"text-sm font-general-sans hover:underline",color:"foreground",children:"Careers"}),(0,s.jsx)(N.O,{href:"#",title:"FAQs",className:"text-sm font-general-sans hover:underline",color:"foreground",children:"FAQs"})]}),(0,s.jsxs)("div",{className:"flex flex-col flex-1 gap-4",children:[(0,s.jsx)("h3",{className:"text-xs font-semibold font-general-sans",children:"Follow Us"}),(0,s.jsx)(N.O,{href:"#",title:"Facebook",className:"text-sm font-general-sans hover:underline",color:"foreground",children:"Facebook"}),(0,s.jsx)(N.O,{href:"#",title:"Instagram",className:"text-sm font-general-sans hover:underline",color:"foreground",children:"Instagram"}),(0,s.jsx)(N.O,{href:"#",title:"X",className:"text-sm font-general-sans hover:underline",color:"foreground",children:"X"}),(0,s.jsx)(N.O,{href:"#",title:"LinkedIn",className:"text-sm font-general-sans hover:underline",color:"foreground",children:"LinkedIn"}),(0,s.jsx)(N.O,{href:"#",title:"YouTube",className:"text-sm font-general-sans hover:underline",color:"foreground",children:"YouTube"})]})]})]})}),(0,s.jsxs)("div",{className:"flex flex-col lg:flex-row justify-between items-center gap-2",children:[(0,s.jsx)("div",{className:"text-sm font-general-sans text-white",children:"\xa9 2024 Fair Computers. All rights reserved."}),(0,s.jsxs)("div",{className:"flex gap-8",children:[(0,s.jsx)(N.O,{href:"#",title:"Privacy Policy",className:"text-sm font-general-sans underline hover:no-underline",color:"foreground",children:"Privacy Policy"}),(0,s.jsx)(N.O,{href:"#",title:"Terms of Service",className:"text-sm font-general-sans underline hover:no-underline",color:"foreground",children:"Terms of Service"}),(0,s.jsx)(N.O,{href:"#",title:"Cookies Settings",className:"text-sm font-general-sans underline hover:no-underline",color:"foreground",children:"Cookies Settings"})]})]})]})})]})}},10059:function(e,n,r){"use strict";r.d(n,{zx:function(){return s.default},II:function(){return t},u_:function(){return h},gx:function(){return g}});var s=r(12098),l=r(99480),a=r(74356),t=(0,l.b)(a.Y,{variants:{variant:{default:{input:"font-open-sans placeholder:text-powerful-gray",label:"text-xs !text-primary font-open-sans font-open-sans"},rectangle:{inputWrapper:"rounded-none border-1 border-powerful-gray",input:"font-open-sans placeholder:text-powerful-gray",label:"text-xs !text-primary font-open-sans"}}}}),i=r(57437),o=r(2265),d=r(76208),c=r(83662),m=r(2429),x=r(95256),u=r(81887),f=r(47971),h=e=>{let{open:n=!1,text:r,okText:l="Ok",closeText:a="Close",closable:t=!0,content:h,onChange:p}=e,{isOpen:g,onOpen:j,onClose:b,onOpenChange:v}=(0,d.q)({onChange:p});return o.useEffect(()=>{n?j():b()},[n]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(c.R,{backdrop:"opaque",isOpen:g,onOpenChange:v,placement:"center",classNames:{header:"font-open-sans",body:"font-open-sans",backdrop:"bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"},children:(0,i.jsxs)(m.A,{children:[(0,i.jsx)(x.k,{className:"flex flex-col gap-1"}),(0,i.jsx)(u.I,{children:h||(0,i.jsx)("p",{children:r})}),(0,i.jsxs)(f.R,{children:[t?(0,i.jsx)(s.default,{color:"primary",variant:"bordered",onPress:b,children:a}):null,(0,i.jsx)(s.default,{className:"font-general-sans",color:"primary",onPress:b,children:l})]})]})})})},p=r(28043),g=(0,l.b)(p.Y,{variants:{variant:{rectangle:{inputWrapper:"rounded-none border-1 border-powerful-gray",textarea:"font-open-sans placeholder:text-powerful-gray",label:"text-xs !text-primary font-open-sans"}}}});r(59120)},79593:function(e,n,r){"use strict";r.d(n,{D9:function(){return t},St:function(){return i},il:function(){return a}});var s=r(2265),l=r(29039);function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3?arguments[3]:void 0,t=(0,s.useRef)(!0),[i,o]=(0,s.useState)(r),{mutate:d,...c}=(0,l.ZP)([e,{method:n,body:i}],null,{revalidateOnFocus:!1,revalidateOnMount:!1,revalidateOnReconnect:!1,refreshWhenOffline:!1,refreshWhenHidden:!1,refreshInterval:0,revalidate:!1,...a}),m=(0,s.useCallback)(e=>{!0===t.current&&(t.current=!1),o(n=>({...n,...e,t:new Date().getTime()})),t||d()},[]);return{...c,mutate:m}}let t=(e,n)=>{let r=JSON.stringify(n);window.sessionStorage.setItem(e,r)},i=e=>{let n=null;return(n=window.sessionStorage.getItem(e))?JSON.parse(n):null}},63874:function(e,n,r){"use strict";r.d(n,{q:function(){return i},w:function(){return o}});var s=r(57437),l=r(2265),a=r(79593);let t=(0,l.createContext)(void 0),i=()=>{let e=(0,l.useContext)(t);if(void 0===e)throw Error("useApp must be used within a AppProvider");return e},o=e=>{let{children:n}=e,[r,i]=(0,l.useState)((0,a.St)("user")),o=l.useCallback(()=>{i(null),(0,a.D9)("user",null)},[]);return(0,s.jsx)(t.Provider,{value:{user:r,logout:o,setUser:i},children:n})}},53054:function(){}},function(e){e.O(0,[141,342,920,916,652,427,492,39,700,494,241,971,23,744],function(){return e(e.s=77341)}),_N_E=e.O()}]);