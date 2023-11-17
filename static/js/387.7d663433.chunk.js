"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{6899:function(n,e,t){t.r(e),t.d(e,{default:function(){return X}});var r,a,o,i=t(2791),d=t(9434),s=function(n){return n.contacts.items},c=function(n){return n.filter.value},l=function(n){return n.contacts.isLoading},u=function(n){return n.contacts.error},p=t(2012),x=t(1413),f=t(5264),m=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},h=t(4281),g=t(2134),b=t(168),j=t(225),v=j.Z.form(r||(r=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #828e6d;\n  padding: 30px;\n  width: 360px;\n  background-color: #c5cbba;\n  border-radius: 20px;\n  margin-bottom: 50px;\n"]))),Z=j.Z.input(a||(a=(0,b.Z)(["\n  margin-left: auto;\n  width: 270px;\n  height: 30px;\n  border-radius: 10px;\n  border: 1px solid #828e6d;\n  font-size: 20px;\n  padding-left: 10px;\n  color: #8e6d8a;\n"]))),y=j.Z.label(o||(o=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 35px;\n  color: #8e6d8a;\n"]))),w=t(3329);var k,C,z,F,A,I,L,N,P,T=function(){var n=(0,d.I0)(),e=(0,d.v9)(s),t=m(),r=m();return(0,w.jsxs)(v,{autoComplete:"off",onSubmit:function(t){t.preventDefault();var r=t.target,a=r.elements.name.value,o=r.elements.number.value,i=e.find((function(n){return n.name.toLowerCase()===a.toLowerCase()}));if(i)return n((0,p.Tk)((0,x.Z)((0,x.Z)({},i),{},{number:o}))),void f.Notify.failure("".concat(a," this contact already exists."));n((0,p.uK)({name:a,number:o})),f.Notify.success("".concat(a," added to your list.")),r.reset()},children:[(0,w.jsxs)(y,{children:[(0,w.jsx)(g.nf1,{}),"Name :"," ",(0,w.jsx)(Z,{type:"text",id:t,name:"name",pattern:"^[A-Za-z\\u0080-\\uFFFF ']+$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,w.jsxs)(y,{children:[(0,w.jsx)(g.XO0,{}),"Phone :",(0,w.jsx)(Z,{type:"tel",id:r,name:"number",pattern:"^(\\+?[0-9.\\(\\)\\-\\s]*)$",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,w.jsx)(h.Z,{type:"submit",style:{backgroundColor:"#8e6d8a",marginTop:30},variant:"contained",endIcon:(0,w.jsx)(g.vM4,{}),children:"Add contact"})]})},_=t(6334),S=j.Z.input(k||(k=(0,b.Z)(["\n  border: 1px solid #828e6d;\n  width: 300px;\n  height: 35px;\n  margin-top: 10px;\n  margin-bottom: 30px;\n  border-radius: 7px;\n  color: #8e6d8a;\n  font-size: 20px;\n  padding-left: 10px;\n"]))),q=j.Z.div(C||(C=(0,b.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  gap: 10px;\n"]))),D=function(){var n=(0,d.I0)();return(0,w.jsx)(q,{children:(0,w.jsx)(S,{type:"text",onChange:function(e){var t;t=e.currentTarget.value,n((0,_.T)(t))}})})},K=t(9439),M=j.Z.div(z||(z=(0,b.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),U=j.Z.div(F||(F=(0,b.Z)(["\n  font-size: 20px;\n  color: #8e6d8a;\n"]))),$=function(n){var e=n.id,t=n.name,r=n.number,a=(0,d.v9)(u),o=(0,d.I0)(),s=(0,i.useState)(!1),c=(0,K.Z)(s,2),l=c[0],x=c[1];return(0,w.jsxs)(M,{children:[(0,w.jsxs)(U,{children:[t,": ",r]}),l&&!a?(0,w.jsx)(h.Z,{style:{backgroundColor:"#8e6d8a",marginLeft:25,height:36},variant:"contained"}):(0,w.jsx)(h.Z,{type:"button",variant:"contained",size:"small",style:{backgroundColor:"#8e6d8a"},endIcon:(0,w.jsx)(g.Psi,{}),onClick:function(){o((0,p.GK)(e)),x(!0)},children:"Delete"})]})},B=j.Z.ul(A||(A=(0,b.Z)(["\n  list-style: none;\n  min-width: 360px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  border-radius: 20px;\n  padding: 20px;\n  background-color: #c5cbba;\n  margin: 0;\n  border: 1px solid #828e6d;\n"]))),E=j.Z.p(I||(I=(0,b.Z)(["\n  color: #8e6d8a;\n  font-size: 20px;\n"]))),G=function(){var n=(0,d.v9)(s),e=(0,d.v9)(c),t=n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));return(0,w.jsx)(w.Fragment,{children:t.length>0?(0,w.jsx)(B,{children:t.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,w.jsx)($,{id:e,name:t,number:r},e)}))}):(0,w.jsxs)(E,{children:["There are no contacts in your Phonebook. ",(0,w.jsx)("br",{})," You can add one!"]})})},J=t.p+"static/media/b.5b4d192751961f53475e.jpg",O=j.Z.div(L||(L=(0,b.Z)(["\n  display: flex;\n  gap: 30px;\n  border: 2px dotted #828e6d;\n  border-radius: 25px;\n  background-image: url(",");\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 930px;\n  padding: 50px;\n"])),J),R=j.Z.h1(N||(N=(0,b.Z)(["\n  font-weight: 700;\n  font-size: 36px;\n  text-align: center;\n  margin: 40px;\n  color: #828e6d;\n"]))),V=j.Z.h2(P||(P=(0,b.Z)(["\n  font-weight: 700;\n  font-size: 26px;\n  margin-bottom: 15px;\n  color: #8e6d8a;\n"])));function X(){var n=(0,d.I0)(),e=(0,d.v9)(l),t=(0,d.v9)(u);return(0,i.useEffect)((function(){n((0,p.yF)())}),[n]),(0,w.jsxs)("div",{children:[(0,w.jsx)(R,{children:"Name & Phone"}),(0,w.jsxs)(O,{children:[(0,w.jsxs)("div",{children:[(0,w.jsx)(V,{children:"Add new contact"}),(0,w.jsx)(T,{}),(0,w.jsx)(V,{children:"Find contacts"}),(0,w.jsx)(D,{})]}),(0,w.jsxs)("div",{children:[(0,w.jsx)(V,{children:"Contacts list"}),e&&!t&&(0,w.jsx)("b",{children:"in progress..."}),(0,w.jsx)(G,{})]})]})]})}}}]);
//# sourceMappingURL=387.7d663433.chunk.js.map