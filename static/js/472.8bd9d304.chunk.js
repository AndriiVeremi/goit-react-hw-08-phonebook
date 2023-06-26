"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[472],{3472:function(n,e,t){t.r(e),t.d(e,{default:function(){return $}});var r,i,a,o=t(2791),s=t(9434),d=function(n){return n.contacts.items},c=function(n){return n.filter.value},l=function(n){return n.contacts.isLoading},x=function(n){return n.contacts.error},u=t(2012),p=t(1413),f=t(5984),m=t(4281),h=t(2134),b=t(168),g=t(225),j=g.Z.form(r||(r=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #3d9be8;\n  padding: 30px;\n  width: 360px;\n  background-color: #f4f6fc;\n  border-radius: 20px;\n  margin-bottom: 50px;\n"]))),Z=g.Z.input(i||(i=(0,b.Z)(["\n  margin-left: auto;\n  width: 270px;\n  height: 30px;\n  border-radius: 10px;\n  border: 1px solid #7b9e7d;\n  font-size: 20px;\n  padding-left: 10px;\n  color: #1976d2;\n"]))),v=g.Z.label(a||(a=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 35px;\n"]))),y=t(3329);var w,k,z,C,A,I,P,F,L,T=function(){var n=(0,s.I0)(),e=(0,s.v9)(d),t=(0,f.x0)(),r=(0,f.x0)();return(0,y.jsxs)(j,{autoComplete:"off",onSubmit:function(t){t.preventDefault();var r=t.target,i=r.elements.name.value,a=r.elements.number.value,o=e.find((function(n){return n.name===i}));o?n((0,u.Tk)((0,p.Z)((0,p.Z)({},o),{},{number:a}))):(n((0,u.uK)({name:i,number:a})),r.reset())},children:[(0,y.jsxs)(v,{children:[(0,y.jsx)(h.nf1,{}),"Name :"," ",(0,y.jsx)(Z,{type:"text",id:t,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,y.jsxs)(v,{children:[(0,y.jsx)(h.XO0,{}),"Phone :",(0,y.jsx)(Z,{type:"tel",id:r,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,y.jsx)(m.Z,{type:"submit",variant:"contained",endIcon:(0,y.jsx)(h.vM4,{}),children:"Add contact"})]})},_=g.Z.input(w||(w=(0,b.Z)(["\n  border: 1px solid #7b9e7d;\n  width: 300px;\n  height: 35px;\n  margin-top: 10px;\n  margin-bottom: 30px;\n  border-radius: 7px;\n  color: #1976d2;\n  font-size: 20px;\n  padding-left: 10px;\n"]))),q=g.Z.div(k||(k=(0,b.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  gap: 10px;\n"]))),B=t(6334),D=function(){var n=(0,s.I0)();return(0,y.jsx)(q,{children:(0,y.jsx)(_,{type:"text",onChange:function(e){var t;t=e.currentTarget.value,n((0,B.T)(t))}})})},K=t(9439),M=g.Z.div(z||(z=(0,b.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),N=g.Z.div(C||(C=(0,b.Z)(["\n font-size: 20px;\n"]))),S=function(n){var e=n.id,t=n.name,r=n.number,i=(0,s.v9)(x),a=(0,s.I0)(),d=(0,o.useState)(!1),c=(0,K.Z)(d,2),l=c[0],p=c[1];return(0,y.jsxs)(M,{children:[(0,y.jsxs)(N,{children:[t,": ",r]}),l&&!i?(0,y.jsx)(m.Z,{style:{marginLeft:25,height:36},variant:"contained"}):(0,y.jsx)(m.Z,{type:"button",variant:"contained",size:"small",endIcon:(0,y.jsx)(h.Psi,{}),onClick:function(){a((0,u.GK)(e)),p(!0)},children:"Delete"})]})},E=g.Z.ul(A||(A=(0,b.Z)(["\n  list-style: none;\n  min-width: 360px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  border-radius: 20px;\n  padding: 20px;\n  background-color: #d6e8d7;\n  margin: 0;\n  border: 1px solid #7b9e7d;\n"]))),G=g.Z.p(I||(I=(0,b.Z)(["\n  color: #1976d2;\n  font-size: 20px;\n"]))),J=function(){var n=(0,s.v9)(d),e=(0,s.v9)(c),t=n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));return(0,y.jsx)(y.Fragment,{children:t.length>0?(0,y.jsx)(E,{children:t.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,y.jsx)(S,{id:e,name:t,number:r},e)}))}):(0,y.jsxs)(G,{children:["There are no contacts in your Phonebook. ",(0,y.jsx)("br",{})," You can add one!"]})})},O=g.Z.div(P||(P=(0,b.Z)(["\n  display: flex;\n  gap: 100px;\n"]))),X=g.Z.h1(F||(F=(0,b.Z)(["\n  font-weight: 600;\n  font-size: 36px;\n  text-align: center;\n  margin-bottom: 40px;\n  color: #1976d2;\n"]))),Y=g.Z.h2(L||(L=(0,b.Z)(["\n  font-weight: 500;\n  font-size: 24px;\n  margin-bottom: 10px;\n  color: #258fa7;\n"])));function $(){var n=(0,s.I0)(),e=(0,s.v9)(l),t=(0,s.v9)(x);return(0,o.useEffect)((function(){n((0,u.yF)())}),[n]),(0,y.jsxs)("div",{children:[(0,y.jsx)(X,{children:"Phone Book"}),(0,y.jsxs)(O,{children:[(0,y.jsxs)("div",{children:[(0,y.jsx)(Y,{children:"Add new contact"}),(0,y.jsx)(T,{}),(0,y.jsx)(Y,{children:"Find contacts"}),(0,y.jsx)(D,{})]}),(0,y.jsxs)("div",{children:[(0,y.jsx)(Y,{children:"Contacts list"}),e&&!t&&(0,y.jsx)("b",{children:"in progress..."}),(0,y.jsx)(J,{})]})]})]})}}}]);
//# sourceMappingURL=472.8bd9d304.chunk.js.map