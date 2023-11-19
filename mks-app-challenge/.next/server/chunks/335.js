"use strict";exports.id=335,exports.ids=[335],exports.modules={684:(t,e,i)=>{i.d(e,{Z:()=>p,j:()=>a});var n=i(997),o=i(6689);let r=(0,o.createContext)(void 0),d=(t,e)=>{switch(e.type){case"ADD_TO_CART":let i=t.items.find(t=>t.id===e.payload.id);return{...t,items:i?t.items.map(t=>t.id===e.payload.id?{...t,quantity:t.quantity+1}:t):[...t.items,{...e.payload,quantity:1}]};case"REMOVE_FROM_CART":return{...t,items:t.items.filter(t=>t.id!==e.payload)};case"DECREASE_QUANTITY":let n={...t,items:t.items.map(t=>t.id===e.payload?{...t,quantity:t.quantity-1}:t)};return n;case"TOGGLE_CART":return{...t,isOpen:!t.isOpen};default:return t}},p=({children:t})=>{let[e,i]=(0,o.useReducer)(d,{items:[],isOpen:!1});return n.jsx(r.Provider,{value:{state:e,dispatch:i},children:t})},a=()=>{let t=(0,o.useContext)(r);if(!t)throw Error("useCart deve ser usado dentro de um CartProvider");return t}},8423:(t,e,i)=>{i.d(e,{Z:()=>a});var n=i(6022),o=i(684);let r=t=>({type:"ADD_TO_CART",payload:t}),d=t=>({type:"REMOVE_FROM_CART",payload:t}),p=()=>({type:"TOGGLE_CART"}),a=()=>{let{state:t,dispatch:e}=(0,o.j)(),i=(0,n.useDispatch)(),a=(0,n.useSelector)(t=>t.cart);return{contextState:t,reduxState:a,addToCartCombined:t=>{e({type:"ADD_TO_CART",payload:t}),i(r(t))},removeFromCartCombined:t=>{e({type:"REMOVE_FROM_CART",payload:t}),i(d(t))},toggleCartCombined:()=>{e({type:"TOGGLE_CART"}),i(p())}}}},5335:(t,e,i)=>{i.r(e),i.d(e,{default:()=>tt});var n=i(997),o=i(7518),r=i.n(o),d=i(1175);let p={colors:{background:{header:"#0F52BA",cartHeader:"#FFF;",home:"#F9F9F9",productCard:"#FFFFFF",buyBox:"#0F52BA",priceBox:"#373737",footer:"#EEEEEE",boxCart:"#FFFFFF",finalOrder:"#000000"},text:{primary:"#FFFFFF",secondary:"#2C2C2C",tertiary:"#000000"},fonts:{primary:"Montserrat, sans-serif"},breakpoints:{xs:"(min-width: 425px)",sm:"(min-width: 640px)",md:"(min-width: 768px)",lg:"(min-width: 1024px)",xl:"(min-width: 1280px)"}}};i(9652),i(6020),i(7294),i(6762),i(9766);let a=o.createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

body {
    font-family: "Montserrat", sans-serif;
}



`;var s=i(931);let l=r().header.withConfig({componentId:"sc-dc1fd5d0-0"})`
display: flex;
width: 100%;
height: 101px;
background-color: ${({theme:t})=>t.colors.background.header};
font-size: 30px;
justify-content: space-between;

`,x=r().div.withConfig({componentId:"sc-dc1fd5d0-1"})`
display: flex;
align-items: center;
gap: 10px;
margin: 29px 28px 29px;

`,c=r().span.withConfig({componentId:"sc-dc1fd5d0-2"})`
color: ${({theme:t})=>t.colors.text.primary};

font-family: ${({theme:t})=>t.colors.fonts.primary};
font-size: 40px;
font-style: normal;
font-weight: 600;
line-height: 19px;


`,h=r().span.withConfig({componentId:"sc-dc1fd5d0-3"})`
color: ${({theme:t})=>t.colors.text.primary};

font-family: ${({theme:t})=>t.colors.fonts.primary};
font-size: 20px;
font-style: normal;
font-weight: 300;
line-height: 19px;

`,g=r().div.withConfig({componentId:"sc-dc1fd5d0-4"})`

display: flex;
align-items: center;
justify-content: center;
gap: 10px;

background-color: ${({theme:t})=>t.colors.background.cartHeader};

width: 90px;
height: 45px;

border-radius: 8px;

margin: 29px 88px 27px;

transition: background-color 0.3s ease;
cursor: pointer;

&:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 1);
}


`,m=r().span.withConfig({componentId:"sc-dc1fd5d0-5"})`
color: #000;

font-family: ${({theme:t})=>t.colors.fonts.primary};
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;

 `,f={src:"/_next/static/media/Vector.33147375.png",height:18,width:19,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAb0lEQVR42i3Brw4BARwA4A83zXkETyLpkk32BMo1hTeQnO4ZxNuMIig2krH5EwVB/92F+z4Wch3deiqY+7l7eng5C0b+ttW9wkfQc3FydHVT0Ah2DjbWVgY0g4mZrDoMtIK+XGpsKSEJMt9g6q1dAsetJGdhBh15AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8};var w=i(5675),y=i.n(w);i(6689);var u=i(8423),b=i(684);let F=()=>{let{contextState:t}=(0,u.Z)(),e=t.items.reduce((t,e)=>t+e.quantity,0),{dispatch:i}=(0,b.j)();return(0,n.jsxs)(l,{children:[(0,n.jsxs)(x,{children:[n.jsx(c,{children:"MKS"}),n.jsx(h,{children:"Sistemas"})]}),(0,n.jsxs)(g,{onClick:()=>{i({type:"TOGGLE_CART"})},children:[n.jsx(y(),{src:f,width:"19.008",height:"18",alt:"CartImage"}),n.jsx(m,{children:e})]})]})},C=r().footer.withConfig({componentId:"sc-e8826af-0"})`
display: flex;
width: 100%;
height: 34px;
background-color: ${({theme:t})=>t.colors.background.footer};
justify-content: center;
align-items: center;

color: ${({theme:t})=>t.colors.text.tertiary};
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;

`,j=()=>n.jsx(C,{children:"MKS sistemas \xa9 Todos os direitos reservados"}),A=r().div.withConfig({componentId:"sc-1d0980c2-0"})`
display: ${({isOpen:t})=>t?"flex":"none"};
position: fixed;
flex-direction: column;
width: 486px;
height: 100%;
background-color: #0F52BA;
box-shadow: rgba(0, 0, 0, 0.13) -5px 0px 6px;
top: 0px;
right: 0px;
z-index: 1;

@media (max-width: 600px) {
    width: 330px;
}

`,I=r().div.withConfig({componentId:"sc-1d0980c2-1"})`
display: flex;
align-items: center;
width: 100%;
max-height: 56px;

margin-left: 47px;
margin-right: 22px;

gap: 200px;

margin-top: 36px;

@media (max-width: 600px) {
    gap: 45px;
}


`,k=r().h1.withConfig({componentId:"sc-1d0980c2-2"})`

width: 180px;
height: 56px;
flex-shrink: 0;

color: #FFF;
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: normal;


`,v=r().button.withConfig({componentId:"sc-1d0980c2-3"})`
width: 38px;
height: 38px;
color: #FFF;
font-size: 28px;
font-style: normal;
font-weight: 400;
line-height: 15px;
background-color: #000;
border-radius: 50%;
border: none;
cursor: pointer;

@media (max-width: 600px) {
    color: #0F52BA;
    
}

`,E=r().ul.withConfig({componentId:"sc-1d0980c2-4"})`

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
gap: 21px;

margin-top: 61px;
width: 100%;
padding: 10px 46px 10px 34px;
flex: 2 1 0%;
overflow-y: scroll;

&::-webkit-scrollbar {
    width: 6px;
}

&::-webkit-scrollbar-thumb {
    background-color: #FFF;
    border-radius: 10px;

}

@media(max-width: 600px) {
    padding: 0;
}

`,T=r().li.withConfig({componentId:"sc-1d0980c2-5"})`
display: flex;
width: 379px;
height: 95px;

padding: 22.38px 23px 21.45px 16px;

align-items: center;
position: relative;
background-color: #FFF;
box-shadow: 0px 2px 8px ;
border-radius: 8px;
gap: 21px;

@media (max-width: 600px) {
    width: 250px;
    height: 220px;
    flex-direction: column;
}

`,R=r()(y()).withConfig({componentId:"sc-1d0980c2-6"})`

@media(max-width: 600px) {
    width: 80px;
height: 95.105px;
}



`,z=r().span.withConfig({componentId:"sc-1d0980c2-7"})`
width: 113px;
height: 33px;
color: #2C2C2C;

font-family: "Montserrat";
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 17px;

@media(max-width: 600px) {
display: flex;
justify-content: center;
align-items: center;
width: 211px;
height: 21.445px;
flex-shrink: 0;
color: #2C2C2C;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 19px;
}

`,O=r().div.withConfig({componentId:"sc-1d0980c2-8"})`
display: flex;
justify-content: center;
align-content: center;
align-items: center;
width: 50px;
height: 19px;
flex-wrap: wrap;
flex: 2 1 0%;
position: relative;
background:  #FFF;


border-radius: 4px;
border: 0.3px solid #BFBFBF;

@media(max-width: 600px ) {
    display: none;
}

`,_=r().div.withConfig({componentId:"sc-1d0980c2-9"})`
display: none;
align-content: center;
align-items: center;
width: 100%;
height: 19px;
flex: 2 1 0%;
position: relative;
background:  #FFF;
gap: 20px;


@media(max-width: 600px) {
display: flex;
}

`,B=r().div.withConfig({componentId:"sc-1d0980c2-10"})`
display: none;
width: 50%;
height: 34.50px;
justify-content: center;
align-items: center;

border-radius: 4px;
border: 0.3px solid #BFBFBF;

@media(max-width: 600px) {
display: flex;
}


`,M=r().small.withConfig({componentId:"sc-1d0980c2-11"})`
display: block;
position: absolute;
top: -11px;
left: 0px;
width: 100%;
font-size: 6px;
color: #000;
`,q=r().button.withConfig({componentId:"sc-1d0980c2-12"})`
display: flex;
justify-content: center;
align-items: center;
width: 33%;
height: 100%;

border: none;
border-right: 0.3px solid #BFBFBF;


background: #FFF;

color: #000;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
cursor: pointer;

@media(max-width: 600px) {
    height: 90%;
    font-size: 24px;
}

`,G=r().span.withConfig({componentId:"sc-1d0980c2-13"})`
display: flex;
justify-content: center;
align-items: center;
width:33% ;
font-size: 10px;

@media(max-width: 600px) {
    
    font-size: 20px;
}



`,$=r().button.withConfig({componentId:"sc-1d0980c2-14"})`
display: flex;
justify-content: center;
align-items: center;

width:33% ;
height: 100%;

border: none;
border-left: 0.3px solid #BFBFBF;

background: #FFF;

color: #000;

font-family: "Montserrat";
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
cursor: pointer;

@media(max-width: 600px) {
    height: 90%;
    font-size: 24px;
}



`,D=r().h4.withConfig({componentId:"sc-1d0980c2-15"})`
display: flex;
color: #000;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 17px;

@media(max-width: 600px) {
    display: none;
}

`,S=r().h4.withConfig({componentId:"sc-1d0980c2-16"})`
display: none;
justify-content: center;
align-items: center;
color: #000;
width: 50%;
height: 23.265px;

color: #FFF;

font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: 15px;

border-radius: 5px;
background: #373737;

padding: 8px 17px;

@media(max-width: 600px) {
    display: flex;
}

`,Q=r().button.withConfig({componentId:"sc-1d0980c2-17"})`
position: absolute;
width: 18px;
height: 18px;
color: #FFF;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 15px;
background-color: #000;
border-radius: 50%;
border: none;
top: -8px;
right: -8px;
cursor: pointer;

@media(max-width: 600px)  {
    color: #000;
    font-size: 42px;
    background-color: transparent;
    top: 24px;
    right: 28px;
}

`,V=r().div.withConfig({componentId:"sc-1d0980c2-18"})`

display: flex;
align-items: center;
width: 100%;
max-height: 56px;

margin-left: 47px;
margin-right: 22px;

gap: 90px;

margin-top: 36px;

@media(max-width: 600px) {
    gap: 1px;
    margin-left: 10px;
}


`,L=r().h1.withConfig({componentId:"sc-1d0980c2-19"})`

width: 180px;
height: 56px;
flex-shrink: 0;

color: #FFF;
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: normal;

`,N=r().h1.withConfig({componentId:"sc-1d0980c2-20"})`

width: 180px;
height: 56px;
flex-shrink: 0;

color: #FFF;
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: normal;

`,U=r().div.withConfig({componentId:"sc-1d0980c2-21"})`
display: flex;
justify-content: center;
align-items: center;
width: 486px;
height: 97px;
flex-shrink: 0;

background: #000;

cursor: pointer;

transition: background-color 0.3s ease;

&:hover {
    background-color: rgba(128, 128, 128, 0.7);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
    
}

@media(max-width: 600px) {
width: 330px;
height: 65.864px;
flex-shrink: 0;



}

`,Y=r().h1.withConfig({componentId:"sc-1d0980c2-22"})`
color: #FFF;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: 15px;



@media(max-width: 600px) {
color: #FFF;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 15px;
}

`,Z=()=>{let{contextState:t,addToCartCombined:e}=(0,u.Z)(),i=t.items.reduce((t,e)=>t+parseFloat(e.price)*e.quantity,0),{state:o,dispatch:r}=(0,b.j)(),d=t=>{e(t)},p=e=>{let i=t.items.find(t=>t.id===e);i&&(i.quantity>1?r({type:"DECREASE_QUANTITY",payload:e}):r({type:"REMOVE_FROM_CART",payload:e}))},a=t=>{r({type:"REMOVE_FROM_CART",payload:t})};return(0,n.jsxs)(A,{isOpen:o.isOpen,children:[(0,n.jsxs)(I,{children:[n.jsx(k,{children:"Carinnho de Compras"}),n.jsx(v,{onClick:()=>{r({type:"TOGGLE_CART"})},children:"X"})]}),n.jsx(E,{children:Array.isArray(t.items)&&t.items.length>0&&t.items.map(t=>(0,n.jsxs)(T,{children:[n.jsx(R,{src:t.photo,alt:t.name,width:46,height:57}),n.jsx(z,{children:t.name}),(0,n.jsxs)(O,{children:[n.jsx(M,{children:"Qntd:"}),n.jsx(q,{onClick:()=>p(t.id),children:"-"}),n.jsx(G,{children:t.quantity}),n.jsx($,{onClick:()=>d(t),children:"+"})]}),(0,n.jsxs)(_,{children:[(0,n.jsxs)(B,{children:[n.jsx(q,{onClick:()=>p(t.id),children:"-"}),n.jsx(G,{children:t.quantity}),n.jsx($,{onClick:()=>d(t),children:"+"})]}),(0,n.jsxs)(S,{children:["R$",t.quantity*parseInt(t.price,10)]})]}),(0,n.jsxs)(D,{children:["R$",t.quantity*parseInt(t.price,10)]}),n.jsx(Q,{onClick:()=>a(t.id),children:"X"})]},t.id))}),(0,n.jsxs)(V,{children:[n.jsx(L,{children:"Total:"}),n.jsx(N,{children:`R$ ${i}`})]}),n.jsx(U,{children:n.jsx(Y,{children:"Finalizar Compra"})})]})};var K=i(6022),H=i(6695);let P={items:[],isOpen:!1},W=(0,H.combineReducers)({cart:(t=P,e)=>{switch(e.type){case"ADD_TO_CART":let i=t.items.find(t=>t.id===e.payload.id);return{...t,items:i?t.items.map(t=>t.id===e.payload.id?{...t,quantity:t.quantity+1}:t):[...t.items,{...e.payload,quantity:1}]};case"REMOVE_FROM_CART":return{...t,items:t.items.filter(t=>t.id!==e.payload)};case"TOGGLE_CART":return{...t,isOpen:!t.isOpen};case"INCREASE_QUANTITY":return{...t,items:t.items.map(t=>t.id===e.payload?{...t,quantity:t.quantity+1}:t)};case"DECREASE_QUANTITY":let n={...t,items:t.items.map(t=>t.id===e.payload?{...t,quantity:t.quantity-1}:t)};return n;default:return t}}}),J=(0,H.createStore)(W),X=new d.QueryClient,tt=({Component:t,pageProps:e})=>n.jsx(n.Fragment,{children:n.jsx(d.QueryClientProvider,{client:X,children:n.jsx(K.Provider,{store:J,children:(0,n.jsxs)(o.ThemeProvider,{theme:p,children:[n.jsx(a,{}),(0,n.jsxs)(b.Z,{children:[n.jsx(Z,{}),n.jsx(F,{}),n.jsx(s.J4,{children:n.jsx(t,{...e})}),n.jsx(j,{})]})]})})})})},931:(t,e,i)=>{i.d(e,{FK:()=>c,J4:()=>r,W6:()=>s,YL:()=>p,fe:()=>a,jF:()=>x,lo:()=>g,nN:()=>m,qU:()=>d,vI:()=>h,ww:()=>l});var n=i(7518),o=i.n(n);let r=o().main.withConfig({componentId:"sc-26eb0b2-0"})`
display: flex;
flex-direction: column;
min-height: calc(100vh - ${101}px - ${34}px);

background: #F9F9F9;
font-family: "Montserrat";
font-size: 30px;
`,d=o().main.withConfig({componentId:"sc-26eb0b2-1"})`

display: flex;
justify-content: center;
flex-wrap: wrap;
max-width: 1115px;


gap: 10px;

margin: 40px auto;

@media (max-width: 600px) {
 max-width: 50%;
 gap: 10px;

margin: 20px auto;
}

`,p=o().main.withConfig({componentId:"sc-26eb0b2-2"})`
display: flex;
flex-direction: column;

width: 218px;
height: 285px;
justify-content: center;
align-items: center;
gap: 10px;

border-radius: 8px;
background: #FFF;
box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);

white-space: pre-line;



`,a=o().div.withConfig({componentId:"sc-26eb0b2-3"})`
position: absolute;
margin: 18px 54px 129px 53px;
`,s=o().div.withConfig({componentId:"sc-26eb0b2-4"})`
display: flex;

flex-direction: column;
margin-top: 120px;
margin-left: 10px;
margin-right: 10px;
gap: 4px;


`,l=o().span.withConfig({componentId:"sc-26eb0b2-5"})`
width: 124px;
height: 38px;

color: #2C2C2C;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 19px;

overflow: hidden;
white-space: wrap;
text-overflow: ellipsis;
padding: 0px 0px 0px 10px ;


  

`,x=o().div.withConfig({componentId:"sc-26eb0b2-6"})`
text-align: center;
padding: 4px 7px;
width: 41%;
height: 20px;
color: #FFF;
font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: 15px;

border-radius: 5px;
background: #373737;
padding: 3px 3px 3px 3px;
margin-right: 10px;





`,c=o().div.withConfig({componentId:"sc-26eb0b2-7"})`
display: flex;



`,h=o().div.withConfig({componentId:"sc-26eb0b2-8"})`

width: 192px;
height: 25px;
overflow: hidden;
white-space: wrap;
text-overflow: ellipsis;

color: #2C2C2C;
font-size: 10px;
font-style: normal;
font-weight: 300;
line-height: 12px;

margin-left: 14px;
margin-right: 11.56px;

 
  

`,g=o().button.withConfig({componentId:"sc-26eb0b2-9"})`
position: absolute;
display: flex;
justify-content: center;
gap: 14px;
align-items: center;
width: 218px;
height: 31.907px;

border-radius: 0px 0px 8px 8px;
background: #0F52BA;
border: none;
margin-top: 253px;

font-family: "Montserrat";
color: #FFF;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 18px; 
cursor: pointer;

transition: background-color 0.3s ease;

&:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
    
}

`,m=o().div.withConfig({componentId:"sc-26eb0b2-10"})`
display: flex;
justify-content: center;
flex-wrap: wrap;
max-width: 1115px;


gap: 10px;

margin: 40px auto;

`}};