(this["webpackJsonpreact-recipe-app"]=this["webpackJsonpreact-recipe-app"]||[]).push([[0],{105:function(e,n,t){"use strict";t.r(n);var a,r,i,c,o,s,d,l=t(0),b=t.n(l),p=t(12),u=t.n(p),m=t(64),j=t.n(m),h=t(70),x=t(14),g=t(16),f=t(17),O=t.p+"static/media/pexels-adonyi-g\xe1bor-1414651.dde0c21c.jpg",y=Object(f.a)(a||(a=Object(g.a)(["\n  * {\n    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    --green: #78B00D;\n    --yellow: #DDBF2F;\n    --tan: #B6A133;\n    --brown: #754A39;\n    --purple: #352F33;\n  }\n  body {\n    background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.25)),  url(",");\n    background-color: var(--green);\n    min-height: 100vh; \n    background-position: center;\n    background-repeat: no-repeat; \n    background-size: cover;\n    background-attachment: fixed;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  h1 {\n    font-family: 'Sacramento', cursive;\n  }\n"])),O),v=t(142),w=t(6),k=t(154),C=t(77),S=t.n(C),T=t(152),M=t(5),N=f.b.header(r||(r=Object(g.a)(["\n  text-align: center;\n  color: white;\n  padding: 1.5rem;\n  h1 {\n    font-size: 4.5rem;\n    color: var(--green);\n    text-shadow: 1px 1px 2px rgba(0,0,0,0.7);\n    &:hover {\n      cursor: pointer;\n    }\n  }\n"]))),F=Object(v.a)((function(){return{root:{margin:"2rem auto",padding:"0.25rem 0.5rem",display:"flex",alignItems:"center",maxWidth:"95%",width:500},iconButton:{padding:10,background:"rgba(0,0,0,0.5)",color:"var(--green)",marginLeft:"0.5rem"}}})),z=Object(w.a)({root:{background:"rgba(0,0,0,0.5)",borderRadius:"0.5rem",width:500,"& .MuiInputBase-root":{color:"white",fontFamily:"inherit",fontSize:"1.15rem"},"& .MuiFormLabel-root":{color:"var(--green)",fontFamily:"inherit"},"& label.Mui-focused":{color:"var(--green)"},"& .MuiOutlinedInput-root":{"& fieldset":{borderRadius:"0.5rem",borderColor:"var(--green)"},"&:hover fieldset":{borderColor:"var(--yellow)"},"&.Mui-focused fieldset":{borderColor:"var(--green)"}}}})(T.a),B=function(e){var n=e.setRecipes,t=e.setGenre,a=e.setQuery,r=e.setCurrent,i=e.setMore,c=Object(l.useState)(""),o=Object(x.a)(c,2),s=o[0],d=o[1],b=F();return Object(M.jsxs)(N,{children:[Object(M.jsx)("h1",{onClick:function(){r(0),i(!1),n(null)},children:"Recipe Roulette"}),Object(M.jsx)("p",{children:"A nifty recipe search for the hungry"}),Object(M.jsxs)("form",{className:b.root,noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),r(0),t(null),a(s),d("")},children:[Object(M.jsx)(z,{className:b.margin,label:"Search...",variant:"outlined",id:"custom-css-outlined-input",value:s,onChange:function(e){d(e.target.value)}}),Object(M.jsx)(k.a,{type:"submit",className:b.iconButton,"aria-label":"search",children:Object(M.jsx)(S.a,{})})]})]})},I=f.b.footer(i||(i=Object(g.a)(["\n  text-align: center;\n  padding: 2rem;\n  margin-top: 4rem;\n  color: white;\n  font-size: 1rem;\n  line-height: 1.5;\n  background: linear-gradient(transparent, rgba(0,0,0,0.5));\n"]))),R=function(){return Object(M.jsxs)(I,{children:[Object(M.jsx)("p",{children:"Built using the Edamam API"}),Object(M.jsx)("p",{children:"\xa9 2021 Brannon Lee"})]})},D=t(151),L=[{id:1,name:"Breakfast",type:"mealType"},{id:2,name:"Lunch",type:"mealType"},{id:3,name:"Dinner",type:"mealType"},{id:4,name:"Snack",type:"mealType"},{id:5,name:"Pancake",type:"mealType"},{id:6,name:"Omelet",type:"mealType"},{id:7,name:"vegan",type:"health"},{id:8,name:"vegetarian",type:"health"},{id:9,name:"gluten-free",type:"health"},{id:10,name:"low-sugar",type:"health"},{id:11,name:"Chinese",type:"cuisineType"},{id:12,name:"Caribbean",type:"cuisineType"},{id:13,name:"Mediterranean",type:"cuisineType"},{id:14,name:"Japanese",type:"cuisineType"},{id:15,name:"Indian",type:"cuisineType"},{id:16,name:"Mexican",type:"cuisineType"},{id:17,name:"French",type:"cuisineType"},{id:18,name:"Desserts",type:"dishType"},{id:19,name:"balanced",type:"diet"},{id:20,name:"high-fiber",type:"diet"},{id:21,name:"low-carb",type:"diet"},{id:22,name:"low-sodium",type:"diet"}],A=Object(f.b)(D.a.div)(c||(c=Object(g.a)(["\n  max-width: 90%;\n  width: 750px;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 1rem;\n"]))),G=Object(f.b)(D.a.button)(o||(o=Object(g.a)(["\n  background: var(--brown);\n  padding: 0.5rem 1rem;\n  font-size: 0.8rem;\n  font-family: inherit;\n  color: var(--tan);\n  border-radius: 0.25rem;\n  border: 1px solid var(--brown);\n  box-shadow: 0 2px 3px rgba(0,0,0,0.3);\n  &:hover {\n      background: rgba(0,0,0,0.3);\n      cursor: pointer;\n    }\n"]))),E={hidden:{opacity:0},visible:{opacity:1,transition:{delay:.2,duration:1}},exit:{opacity:0}},H=function(e){var n=e.setGenre,t=e.setCurrent;return Object(M.jsx)(A,{variants:E,initial:"hidden",animate:"visible",exit:"exit",children:L.map((function(e){return Object(M.jsx)(G,{onClick:function(){return a=e,t(0),void n("&".concat(a.type,"=").concat(a.name));var a},whileHover:{scale:1.1},whileTap:{scale:.9},children:e.name},e.id)}))})},_=t(23),J=t(4),P=t(145),U=t(146),W=t(147),Q=t(148),q=t(149),V=t(150),X=t(156),$=t(62),K=t(79),Y=t.n(K),Z=t(80),ee=t.n(Z),ne=t(78),te=t.n(ne),ae=function(e){var n=e.split("");return n[0].match(/^[a-z0-9]+$/i)?n[0].toUpperCase():"X"},re=t(153),ie=Object(v.a)((function(e){return{root:{maxWidth:345,background:"#f5f5f5",display:"flex",flexDirection:"column","& .MuiCardContent-root":{background:"#f5f5f5",padding:"16px 8px",width:"100%",flex:1},"& .MuiCardHeader-title":{color:"var(--purple)",fontFamily:"inherit",fontSize:"1.15rem"}},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:"var(--green)",fontFamily:"inherit"},list:{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"2px"},listItem:{fontSize:".75rem",border:"1px solid gray",borderRadius:"5px",padding:"0.25rem .5rem"},ingredients:{background:"red"},btn:{textAlign:"center",margin:"1rem 0"},bx:{padding:"1rem"}}})),ce=f.b.a(s||(s=Object(g.a)(["\n  color: white;\n  background: var(--brown);\n  margin: auto;\n  text-decoration: none;\n  padding: 0.5rem 1rem;\n  border-radius: 1rem;\n  transition: all 0.3s ease;\n  &:hover {\n    box-shadow: 0 3px 10px -3px rgba(0, 0, 0, 0.35);\n  }\n"])));function oe(e){var n=e.recipe,t=n.label,a=n.healthLabels,r=n.image,i=n.ingredientLines,c=n.url,o=ie(),s=Object(l.useState)(!1),d=Object(x.a)(s,2),b=d[0],p=d[1],u=Object(l.useState)("action"),m=Object(x.a)(u,2),j=m[0],h=m[1];return Object(M.jsxs)(P.a,{className:o.root,children:[Object(M.jsx)(U.a,{avatar:Object(M.jsx)(X.a,{"aria-label":"recipe",className:o.avatar,children:ae(t)}),action:Object(M.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",children:Object(M.jsx)(k.a,{"aria-label":"settings",children:Object(M.jsx)(te.a,{})})}),title:t}),Object(M.jsx)(W.a,{className:o.media,image:r,title:"Paella dish"}),Object(M.jsx)(Q.a,{children:Object(M.jsx)($.a,{className:o.list,variant:"body2",color:"textSecondary",component:"div",children:null===a||void 0===a?void 0:a.map((function(e,n){return Object(M.jsx)($.a,{className:o.listItem,variant:"body2",color:"textSecondary",component:"p",children:e},n)}))})}),Object(M.jsxs)(q.a,{disableSpacing:!0,children:[Object(M.jsx)(k.a,{"aria-label":"add to favorites",onClick:function(){h("action"===j?"secondary":"action")},children:Object(M.jsx)(Y.a,{color:j})}),Object(M.jsx)(k.a,{className:Object(J.a)(o.expand,Object(_.a)({},o.expandOpen,b)),onClick:function(){p(!b)},"aria-expanded":b,"aria-label":"show more",children:Object(M.jsx)(ee.a,{})})]}),Object(M.jsxs)(V.a,{in:b,timeout:"auto",unmountOnExit:!0,children:[Object(M.jsxs)(Q.a,{className:o.ingredients,children:[Object(M.jsx)($.a,{paragraph:!0,children:"Ingredients:"}),Object(M.jsx)(re.a,{className:o.bx,children:i.map((function(e,n){return Object(M.jsx)($.a,{paragraph:!0,children:e},n)}))})]}),Object(M.jsx)(Q.a,{className:o.btn,children:Object(M.jsx)(ce,{href:c,target:"_blank",rel:"noreferrer",children:"Get Recipe"})})]})]})}var se,de,le=Object(f.b)(D.a.div)(d||(d=Object(g.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  align-items: flex-start;\n  gap: 4rem 1rem;\n  margin: auto;\n  max-width: 90%;\n  justify-items: center;\n"]))),be={hidden:{opacity:0,y:"100vh"},visible:{opacity:1,y:0,transition:{delay:0,type:"tween",stiffness:110,mass:.5,damping:9,duration:1.25}}},pe=function(e){var n=e.recipes;return Object(M.jsx)(le,{variants:be,initial:"hidden",animate:"visible",exit:"hidden",children:n.map((function(e,n){return Object(M.jsx)(oe,{recipe:e.recipe},n)}))})},ue=t(155),me=f.b.div(se||(se=Object(g.a)(["\n  min-height: 100vh;\n  text-align: center;\n"]))),je=Object(f.b)(D.a.button)(de||(de=Object(g.a)(["\n  color: white;\n  font-size: 1.5rem;\n  font-family: inherit;\n  text-transform: uppercase;\n  background: var(--green);\n  margin: 2rem auto;\n  text-decoration: none;\n  padding: 0.5rem 1.5rem;\n  border-radius: 2rem;\n  box-shadow: 0 2px 3px rgba(0,0,0,0.5);\n  border: 2px solid var(--purple);\n  &:hover {\n    cursor: pointer;\n  }\n"])));var he=function(){var e=Object(l.useState)(null),n=Object(x.a)(e,2),t=n[0],a=n[1],r=Object(l.useState)(""),i=Object(x.a)(r,2),c=i[0],o=i[1],s=Object(l.useState)(null),d=Object(x.a)(s,2),b=d[0],p=d[1],u=Object(l.useState)(0),m=Object(x.a)(u,2),g=m[0],f=m[1],O=Object(l.useState)(!1),v=Object(x.a)(O,2),w=v[0],k=v[1];Object(l.useEffect)((function(){b&&C(),c&&C()}),[b,c]);var C=function(){var e=Object(h.a)(j.a.mark((function e(){var n,t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(c,"&app_id=").concat("db2f76d4","&app_key=").concat("47792d8c54c3377f7e5ffd4c37702ece","&from=").concat(g,"&to=").concat(g+10,"&").concat(b));case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,a(t.hits),k(t.more),f(t.to);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(y,{}),Object(M.jsx)(B,{setRecipes:a,setGenre:p,setQuery:o,setCurrent:f,setMore:k}),Object(M.jsxs)(me,{children:[Object(M.jsx)(ue.a,{children:!t&&Object(M.jsx)(H,{setGenre:p,setCurrent:f})}),Object(M.jsx)(ue.a,{children:t&&Object(M.jsx)(pe,{recipes:t})}),w&&Object(M.jsx)(je,{onClick:function(e){C()},whileHover:{scale:1.1},whileTap:{scale:.9},children:"load more"})]}),Object(M.jsx)(R,{})]})};u.a.render(Object(M.jsx)(b.a.StrictMode,{children:Object(M.jsx)(he,{})}),document.getElementById("root"))}},[[105,1,2]]]);
//# sourceMappingURL=main.e6466b37.chunk.js.map