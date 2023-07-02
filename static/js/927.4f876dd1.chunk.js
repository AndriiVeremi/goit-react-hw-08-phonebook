"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[927],{927:function(n,e,t){t.r(e),t.d(e,{default:function(){return V}});var r,i,o,a=t(2791),s=t(9434),d=function(n){return n.contacts.items},c=function(n){return n.filter.value},l=function(n){return n.contacts.isLoading},u=function(n){return n.contacts.error},x=t(2012),p=t(1413),f=t(5264),m=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},h=t(4281),b=t(2134),g=t(168),j=t(225),v=j.Z.form(r||(r=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #7b9e7d;\n  padding: 30px;\n  width: 360px;\n  background-color: #d6e8d7;\n  border-radius: 20px;\n  margin-bottom: 50px;\n"]))),Z=j.Z.input(i||(i=(0,g.Z)(["\n  margin-left: auto;\n  width: 270px;\n  height: 30px;\n  border-radius: 10px;\n  border: 1px solid #7b9e7d;\n  font-size: 20px;\n  padding-left: 10px;\n  color: #1976d2;\n"]))),y=j.Z.label(o||(o=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 35px;\n  color: #1976d2;\n"]))),w=t(3329);var C,k,z,F,A,I,L,P,_,N=function(){var n=(0,s.I0)(),e=(0,s.v9)(d),t=m(),r=m();return(0,w.jsxs)(v,{autoComplete:"off",onSubmit:function(t){t.preventDefault();var r=t.target,i=r.elements.name.value,o=r.elements.number.value,a=e.find((function(n){return n.name.toLowerCase()===i.toLowerCase()}));if(a)return n((0,x.Tk)((0,p.Z)((0,p.Z)({},a),{},{number:o}))),void f.Notify.failure("".concat(i," this contact already exists."));n((0,x.uK)({name:i,number:o})),f.Notify.success("".concat(i," added to your list.")),r.reset()},children:[(0,w.jsxs)(y,{children:[(0,w.jsx)(b.nf1,{}),"Name :"," ",(0,w.jsx)(Z,{type:"text",id:t,name:"name",pattern:"^[A-Za-z\\u0080-\\uFFFF ']+$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,w.jsxs)(y,{children:[(0,w.jsx)(b.XO0,{}),"Phone :",(0,w.jsx)(Z,{type:"tel",id:r,name:"number",pattern:"^(\\+?[0-9.\\(\\)\\-\\s]*)$",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,w.jsx)(h.Z,{type:"submit",variant:"contained",endIcon:(0,w.jsx)(b.vM4,{}),children:"Add contact"})]})},S=t(6334),T=j.Z.input(C||(C=(0,g.Z)(["\n  border: 1px solid #7b9e7d;\n  width: 300px;\n  height: 35px;\n  margin-top: 10px;\n  margin-bottom: 30px;\n  border-radius: 7px;\n  color: #1976d2;\n  font-size: 20px;\n  padding-left: 10px;\n"]))),q=j.Z.div(k||(k=(0,g.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  gap: 10px;\n"]))),B=function(){var n=(0,s.I0)();return(0,w.jsx)(q,{children:(0,w.jsx)(T,{type:"text",onChange:function(e){var t;t=e.currentTarget.value,n((0,S.T)(t))}})})},D=t(9439),K=j.Z.div(z||(z=(0,g.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),M=j.Z.div(F||(F=(0,g.Z)(["\n font-size: 20px;\n color: #1976d2;\n"]))),U=function(n){var e=n.id,t=n.name,r=n.number,i=(0,s.v9)(u),o=(0,s.I0)(),d=(0,a.useState)(!1),c=(0,D.Z)(d,2),l=c[0],p=c[1];return(0,w.jsxs)(K,{children:[(0,w.jsxs)(M,{children:[t,": ",r]}),l&&!i?(0,w.jsx)(h.Z,{style:{marginLeft:25,height:36},variant:"contained"}):(0,w.jsx)(h.Z,{type:"button",variant:"contained",size:"small",endIcon:(0,w.jsx)(b.Psi,{}),onClick:function(){o((0,x.GK)(e)),p(!0)},children:"Delete"})]})},$=j.Z.ul(A||(A=(0,g.Z)(["\n  list-style: none;\n  min-width: 360px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  border-radius: 20px;\n  padding: 20px;\n  background-color: #d6e8d7;\n  margin: 0;\n  border: 1px solid #7b9e7d;\n"]))),E=j.Z.p(I||(I=(0,g.Z)(["\n  color: #1976d2;\n  font-size: 20px;\n"]))),G=function(){var n=(0,s.v9)(d),e=(0,s.v9)(c),t=n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));return(0,w.jsx)(w.Fragment,{children:t.length>0?(0,w.jsx)($,{children:t.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,w.jsx)(U,{id:e,name:t,number:r},e)}))}):(0,w.jsxs)(E,{children:["There are no contacts in your Phonebook. ",(0,w.jsx)("br",{})," You can add one!"]})})},J=j.Z.div(L||(L=(0,g.Z)(["\n  display: flex;\n  gap: 100px;\n"]))),O=j.Z.h1(P||(P=(0,g.Z)(["\n  font-weight: 600;\n  font-size: 36px;\n  text-align: center;\n  margin-bottom: 40px;\n  color: #1976d2;\n"]))),R=j.Z.h2(_||(_=(0,g.Z)(["\n  font-weight: 500;\n  font-size: 24px;\n  margin-bottom: 10px;\n  color: #258fa7;\n"])));function V(){var n=(0,s.I0)(),e=(0,s.v9)(l),t=(0,s.v9)(u);return(0,a.useEffect)((function(){n((0,x.yF)())}),[n]),(0,w.jsxs)("div",{children:[(0,w.jsx)(O,{children:"Phone Book"}),(0,w.jsxs)(J,{children:[(0,w.jsxs)("div",{children:[(0,w.jsx)(R,{children:"Add new contact"}),(0,w.jsx)(N,{}),(0,w.jsx)(R,{children:"Find contacts"}),(0,w.jsx)(B,{})]}),(0,w.jsxs)("div",{children:[(0,w.jsx)(R,{children:"Contacts list"}),e&&!t&&(0,w.jsx)("b",{children:"in progress..."}),(0,w.jsx)(G,{})]})]})]})}}}]);
//# sourceMappingURL=927.4f876dd1.chunk.js.map