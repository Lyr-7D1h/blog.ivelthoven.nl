(this["webpackJsonpblog.ivelthoven.nl"]=this["webpackJsonpblog.ivelthoven.nl"]||[]).push([[0],{143:function(e,t,a){e.exports=a(291)},148:function(e,t,a){},149:function(e,t,a){},291:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),o=a.n(l),c=(a(148),a(149),a(150),a(24)),s=a(36),i=a(57),m=a(73),u=function(e,t,a){return new Promise(function(n,r){var l=new XMLHttpRequest;if(l.addEventListener("load",function(){if(200===l.status&&l.responseText)try{var e=JSON.parse(l.responseText);n(e)}catch(t){r(t)}r(new Error("Request failed with Code: ".concat(l.status," and with Body: ").concat(l.statusText)))}),l.open(e,m.a+t),"POST"===e){l.setRequestHeader("Content-Type","application/json"),l.setRequestHeader("Authorization","Basic "+btoa("".concat("admin",":").concat("d53!HR@&JjZ4WvVx%1"))),l.send(JSON.stringify(a))}else l.send()})},p=a(298),E={error:function(e,t){p.a.error({message:e,description:t})},success:function(e,t){p.a.success({message:e,description:t})}},d=a(295),f=a(293),y=a(7),h=d.a.SubMenu,b=f.a.Sider,g=function(){return r.a.createElement(b,{width:200,style:{background:"#fff"}},r.a.createElement(d.a,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%",borderRight:0}},r.a.createElement(h,{key:"sub1",title:r.a.createElement("span",null,r.a.createElement(y.a,{type:"snippets"}),"2019")},r.a.createElement(d.a.Item,{key:"1"},"August"),r.a.createElement(d.a.Item,{key:"2"},"option2"),r.a.createElement(d.a.Item,{key:"3"},"option3"),r.a.createElement(d.a.Item,{key:"4"},"option4")),r.a.createElement(h,{key:"sub2",title:r.a.createElement("span",null,r.a.createElement(y.a,{type:"snippets"}),"2018")},r.a.createElement(d.a.Item,{key:"5"},"option5"),r.a.createElement(d.a.Item,{key:"6"},"option6"),r.a.createElement(d.a.Item,{key:"7"},"option7"),r.a.createElement(d.a.Item,{key:"8"},"option8")),r.a.createElement(h,{key:"sub3",title:r.a.createElement("span",null,r.a.createElement(y.a,{type:"snippets"}),"2017")},r.a.createElement(d.a.Item,{key:"9"},"option9"),r.a.createElement(d.a.Item,{key:"10"},"option10"),r.a.createElement(d.a.Item,{key:"11"},"option11"),r.a.createElement(d.a.Item,{key:"12"},"option12"))))},k=f.a.Header,v=function(e){var t=e.selected;return r.a.createElement(k,null,r.a.createElement("div",{className:"logo"}),r.a.createElement(d.a,{mode:"horizontal",defaultSelectedKeys:[t],style:{lineHeight:"64px",float:"left"},theme:"dark"},r.a.createElement(d.a.Item,{disabled:!0},r.a.createElement("b",null,"BLOG.IVELTHOVEN.NL")),r.a.createElement(d.a.Item,{key:"1"},r.a.createElement(c.b,{to:"/"},"Blog")),r.a.createElement(d.a.Item,{key:"2"},r.a.createElement(c.b,{to:"/projects"},"Projects")),r.a.createElement(d.a.Item,{key:"3"},r.a.createElement(c.b,{to:"/learning"},"Learning Tree"))))},I=f.a.Content,w=function(e){var t=e.blog.name;return r.a.createElement(I,{style:{background:"#fff",padding:24,margin:0,minHeight:280}}," ",t," ")},x=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)([]),s=Object(i.a)(o,2),m=(s[0],s[1]);Object(n.useEffect)(function(){u("GET","blog/category").then(function(e){m(e)}).catch(function(e){E.err("Could not fetch Blogs",e.message)}),u("GET","blog").then(function(e){l(e)}).catch(function(e){E.err("Could not fetch Blogs",e.message)})},[]),console.log(a);var p=r.a.createElement(d.a,{mode:"horizontal",defaultSelectedKeys:"0",style:{lineHeight:"64px",float:"center",display:"inline",paddingLeft:"20px"},theme:"light"},r.a.createElement(d.a.Item,{key:"1"},r.a.createElement(c.b,{to:"/"},"Web")),r.a.createElement(d.a.Item,{key:"2"},r.a.createElement(c.b,{to:"/projects"},"Assembly")),r.a.createElement(d.a.Item,{key:"3"},r.a.createElement(c.b,{to:"/learning"},"Learning Tree")));return r.a.createElement(f.a,null,r.a.createElement(v,{selected:"1"}),r.a.createElement(f.a,null,r.a.createElement(g,null),r.a.createElement(f.a,null,p,r.a.createElement("div",{style:{padding:"24px 24px 24px"}},"CONTENT",a&&a.map(function(e,t){return r.a.createElement(w,{blog:e,key:t})})))))},O=function(){return r.a.createElement(f.a,null,r.a.createElement(v,{selected:"2"}))},S=a(296),T=a(294),j=a(297),N=a(37),H=T.a.create({name:"normal_login"})(function(e){var t=e.form.getFieldDecorator;return r.a.createElement(T.a,{onSubmit:function(t){t.preventDefault(),e.form.validateFields(function(t,a){t||e.onSubmit(a)})},className:"login-form"},r.a.createElement(T.a.Item,null,t("username",{rules:[{required:!0,message:"username pls"}]})(r.a.createElement(j.a,{prefix:r.a.createElement(y.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),r.a.createElement(T.a.Item,null,t("password",{rules:[{required:!0,message:"pass pls"}]})(r.a.createElement(j.a,{prefix:r.a.createElement(y.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),r.a.createElement(T.a.Item,null,r.a.createElement(N.a,{type:"primary",htmlType:"submit",className:"login-form-button",block:!0},"Log in")))}),L=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement(f.a,null,r.a.createElement(v,{selected:"-1"}),r.a.createElement(f.a,null,r.a.createElement(S.a,{title:"LOGIN",visible:a,onCancel:function(){l(!1)},okButtonProps:{className:"hidden"},cancelButtonProps:{className:"hidden"}},r.a.createElement(H,{onSubmit:function(e){if(e.username&&e.password){var t=new XMLHttpRequest;t.addEventListener("load",function(){200===t.status?l(!1):E.error("Request failed","".concat(t.statusText))}),t.open("POST",m.a+"auth"),t.setRequestHeader("Content-Type","application/json"),t.setRequestHeader("Authorization","Basic "+btoa("".concat(e.username,":").concat(e.password))),t.send()}}})),a||r.a.createElement(s.a,{to:"/"})))},B="pushState"in window.history;var R=function(){return r.a.createElement(c.a,{forceRefresh:!B},r.a.createElement(s.b,{exact:!0,path:"/",component:x}),r.a.createElement(s.b,{exact:!0,path:"/projects",component:O}),r.a.createElement(s.b,{exact:!0,path:"/admin"},r.a.createElement(L,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},73:function(e){e.exports=JSON.parse('{"a":"https://ivelthoven-api.herokuapp.com/"}')}},[[143,1,2]]]);
//# sourceMappingURL=main.14d8e616.chunk.js.map