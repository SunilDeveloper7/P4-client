(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{256:function(e,t,n){"use strict";n.r(t);var a=n(94),s=n.n(a);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(0),c=n(45),o=n(21),i=n(273),l=(n(239),n(19)),j=n(50),u=n(211),b=n(3),d={user:null};if(localStorage.getItem("jwtToken")){var m=Object(u.a)(localStorage.getItem("jwtToken"));1e3*m.exp<Date.now()?localStorage.removeItem("jwtToken"):d.user=m}var O=Object(r.createContext)({user:null,login:function(e){},logout:function(){}});function h(e,t){switch(t.type){case"LOGIN":return Object(j.a)(Object(j.a)({},e),{},{user:t.payload});case"LOGOUT":return Object(j.a)(Object(j.a)({},e),{},{user:null});default:return e}}function p(e){var t=Object(r.useReducer)(h,d),n=Object(l.a)(t,2),a=n[0],s=n[1];return Object(b.jsx)(O.Provider,Object(j.a)({value:{user:a.user,login:function(e){localStorage.setItem("jwtToken",e.token),s({type:"LOGIN",payload:e})},logout:function(){localStorage.removeItem("jwtToken"),s({type:"LOGOUT"})}}},e))}var x=n(212);var g=function(e){var t=e.component,n=Object(x.a)(e,["component"]),a=Object(r.useContext)(O).user;return Object(b.jsx)(o.b,Object(j.a)(Object(j.a)({},n),{},{render:function(e){return a?Object(b.jsx)(o.a,{to:"/"}):Object(b.jsx)(t,Object(j.a)({},e))}}))};var v=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Chat with other users. This is your chat page"})})},f=n(272),C=n(282),y=n(277),w=n(279),I=n(222),k=n(280),P=n(125),S=n(169),$=n(131),N=n.n($),A=n(36),D=n(20),L=n(274);var M,E=function(e){var t=e.content,n=e.children;return Object(b.jsx)(L.a,{inverted:!0,content:t,trigger:n})};var Q,T,R,U=Object(D.a)(M||(M=Object(A.a)(["\n    mutation likePost($postId: ID!) {\n        likePost(postId: $postId) {\n        id\n        likes {\n            id\n            username\n        }\n        likeCount\n        }\n    }\n    "]))),q=function(e){var t=e.user,n=e.post,a=n.id,s=n.likeCount,o=n.likes,i=Object(r.useState)(!1),j=Object(l.a)(i,2),u=j[0],d=j[1];Object(r.useEffect)((function(){t&&o.find((function(e){return e.username===t.username}))?d(!0):d(!1)}),[t,o]);var m=Object(f.useMutation)(U,{variables:{postId:a}}),O=Object(l.a)(m,1)[0],h=t?u?Object(b.jsx)(k.a,{color:"teal",children:Object(b.jsx)(P.a,{name:"heart"})}):Object(b.jsx)(k.a,{color:"teal",basic:!0,children:Object(b.jsx)(P.a,{name:"heart"})}):Object(b.jsx)(k.a,{as:c.b,to:"/login",color:"yellow",basic:!0,children:Object(b.jsx)(P.a,{name:"heart"})});return Object(b.jsxs)(k.a,{as:"div",labelPosition:"right",onClick:O,children:[Object(b.jsx)(E,{content:u?"Unlike":"Like",children:h}),Object(b.jsx)(S.a,{basic:!0,color:"teal",pointing:"left",children:s})]})},z=n(278),B=Object(D.a)(Q||(Q=Object(A.a)(["\n    {\n        getPosts {\n        id\n        body\n        createdAt\n        username\n        likeCount\n        likes {\n            username\n        }\n        commentCount\n        comments {\n            id\n            username\n            createdAt\n            body\n        }\n        }\n    }\n    "])));var G=Object(D.a)(T||(T=Object(A.a)(["\n    mutation deletePost($postId: ID!) {\n        deletePost(postId: $postId)\n    }\n    "]))),F=Object(D.a)(R||(R=Object(A.a)(["\n    mutation deleteComment($postId: ID!, $commentId: ID!) {\n        deleteComment(postId: $postId, commentId: $commentId) {\n        id\n        comments {\n            id\n            username\n            createdAt\n            body\n        }\n        commentCount\n        }\n    }\n    "]))),H=function(e){var t=e.postId,n=e.commentId,a=e.callback,s=Object(r.useState)(!1),c=Object(l.a)(s,2),o=c[0],i=c[1],j=n?F:G,u=Object(f.useMutation)(j,{update:function(e){if(i(!1),!n){var s=e.readQuery({query:B});s.getPosts=s.getPosts.filter((function(e){return e.id!==t})),e.writeQuery({query:B,data:s})}a&&a()},variables:{postId:t,commentId:n}}),d=Object(l.a)(u,1)[0];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(E,{content:n?"Delete comment":"Delete post",children:Object(b.jsx)(k.a,{as:"div",color:"red",floated:"right",onClick:function(){return i(!0)},children:Object(b.jsx)(P.a,{name:"trash",style:{margin:0}})})}),Object(b.jsx)(z.a,{open:o,onCancel:function(){return i(!1)},onConfirm:d})]})};var J,V=function(e){var t=e.post,n=t.body,a=t.createdAt,s=t.id,o=t.username,i=t.likeCount,l=t.commentCount,j=t.likes,u=Object(r.useContext)(O).user;return Object(b.jsxs)(w.a,{fluid:!0,children:[Object(b.jsxs)(w.a.Content,{children:[Object(b.jsx)(I.a,{floated:"right",size:"mini",src:"https://react.semantic-ui.com/images/avatar/large/molly.png"}),Object(b.jsx)(w.a.Header,{children:o}),Object(b.jsx)(w.a.Meta,{as:c.b,to:"/posts/".concat(s),children:N()(a).fromNow(!0)}),Object(b.jsx)(w.a.Description,{children:n})]}),Object(b.jsxs)(w.a.Content,{extra:!0,children:[Object(b.jsx)(q,{user:u,post:{id:s,likes:j,likeCount:i}}),Object(b.jsx)(E,{content:"Comment on post",children:Object(b.jsxs)(k.a,{labelPosition:"right",as:c.b,to:"/posts/".concat(s),children:[Object(b.jsx)(k.a,{color:"blue",basic:!0,children:Object(b.jsx)(P.a,{name:"comments"})}),Object(b.jsx)(S.a,{basic:!0,color:"blue",pointing:"left",children:l})]})}),u&&u.username===o&&Object(b.jsx)(H,{postId:s})]})]})},W=n(224),K=n(275),X=n(145),Y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(r.useState)(t),a=Object(l.a)(n,2),s=a[0],c=a[1],o=function(e){c(Object(j.a)(Object(j.a)({},s),{},Object(X.a)({},e.target.name,e.target.value)))},i=function(t){t.preventDefault(),e()};return{onChange:o,onSubmit:i,values:s}};var Z=Object(D.a)(J||(J=Object(A.a)(["\n    mutation createPost($body: String!) {\n        createPost(body: $body) {\n        id\n        body\n        createdAt\n        username\n        likes {\n            id\n            username\n            createdAt\n        }\n        likeCount\n        comments {\n            id\n            body\n            username\n            createdAt\n        }\n        commentCounts\n        }\n    }\n    "]))),_=function(){var e=Y((function(){c()}),{body:""}),t=e.values,n=e.onChange,a=e.onSubmit,s=Object(f.useMutation)(Z,{variables:t,update:function(e,n){var a=e.readQuery({query:B});a.getPosts=[n.data.createPost].concat(Object(W.a)(a.getPosts)),e.writeQuery({query:B,data:a}),t.body=""}}),r=Object(l.a)(s,2),c=r[0],o=r[1].error;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(K.a,{onSubmit:a,children:[Object(b.jsx)("h2",{children:"Create a post:"}),Object(b.jsxs)(K.a.Field,{children:[Object(b.jsx)(K.a.Input,{placeholder:"Kurakani!",name:"body",onChange:n,value:t.body,error:!!o}),Object(b.jsx)(k.a,{type:"submit",color:"blue",children:"Submit"})]})]}),o&&Object(b.jsx)("div",{className:"ui error message",style:{marginBottom:15},children:Object(b.jsx)("ul",{className:"list",children:Object(b.jsx)("li",{children:o.graphQLErrors[0].message})})})]})};var ee,te=function(){var e=Object(r.useContext)(O).user,t=Object(f.useQuery)(B),n=t.loading,a=(t.error,t.data.getPosts);return Object(b.jsxs)(C.a,{columns:3,children:[Object(b.jsx)(C.a.Row,{className:"page-title",children:Object(b.jsx)("h1",{children:"Recent Posts"})}),Object(b.jsxs)(C.a.Row,{children:[e&&Object(b.jsx)(C.a.Column,{children:Object(b.jsx)(_,{})}),n?Object(b.jsx)("h1",{children:"Loading posts.."}):Object(b.jsx)(y.a.Group,{children:a&&a.map((function(e){return Object(b.jsx)(C.a.Column,{style:{marginBottom:15},children:Object(b.jsx)(V,{post:e})},e.id)}))})]})]})};var ne,ae=Object(D.a)(ee||(ee=Object(A.a)(["\n    mutation login($username: String!, $password: String!) {\n        login(username: $username, password: $password) {\n        id\n        email\n        username\n        createdAt\n        token\n        }\n    }\n    "]))),se=function(e){var t=Object(r.useContext)(O),n=Object(r.useState)({}),a=Object(l.a)(n,2),s=a[0],c=a[1],o=Y((function(){h()}),{username:"",password:""}),i=o.onChange,j=o.onSubmit,u=o.values,d=Object(f.useMutation)(ae,{update:function(n,a){var s=a.data.login;t.login(s),e.history.push("/")},onError:function(e){c(e.graphQLErrors[0].extensions.exception.errors)},variables:u}),m=Object(l.a)(d,2),h=m[0],p=m[1].loading;return Object(b.jsxs)("div",{className:"form-container",children:[Object(b.jsxs)(K.a,{onSubmit:j,noValidate:!0,className:p?"loading":"",children:[Object(b.jsx)("h1",{children:"Login"}),Object(b.jsx)(K.a.Input,{label:"Username",placeholder:"Username..",name:"username",type:"text",value:u.username,error:!!s.username,onChange:i}),Object(b.jsx)(K.a.Input,{label:"Password",placeholder:"Password..",name:"password",type:"password",value:u.password,error:!!s.password,onChange:i}),Object(b.jsx)(k.a,{type:"submit",primary:!0,children:"Login"})]}),Object.keys(s).length>0&&Object(b.jsx)("div",{className:"ui error message",children:Object(b.jsx)("ul",{className:"list",children:Object.values(s).map((function(e){return Object(b.jsx)("li",{children:e},e)}))})})]})};var re=Object(D.a)(ne||(ne=Object(A.a)(["\n    mutation register(\n        $username: String!\n        $email: String!\n        $password: String!\n        $confirmPassword: String!\n    ) {\n        register(\n        registerInput: {\n            username: $username\n            email: $email\n            password: $password\n            confirmPassword: $confirmPassword\n        }\n        ) {\n        id\n        email\n        username\n        createdAt\n        token\n        }\n    }\n    "]))),ce=function(e){var t=Object(r.useContext)(O),n=Object(r.useState)({}),a=Object(l.a)(n,2),s=a[0],c=a[1],o=Y((function(){h()}),{username:"",email:"",password:"",confirmPassword:""}),i=o.onChange,j=o.onSubmit,u=o.values,d=Object(f.useMutation)(re,{update:function(n,a){var s=a.data.register;t.login(s),e.history.push("/")},onError:function(e){c(e.graphQLErrors[0].extensions.exception.errors)},variables:u}),m=Object(l.a)(d,2),h=m[0],p=m[1].loading;return Object(b.jsxs)("div",{className:"form-container",children:[Object(b.jsxs)(K.a,{onSubmit:j,noValidate:!0,className:p?"loading":"",children:[Object(b.jsx)("h1",{children:"Register"}),Object(b.jsx)(K.a.Input,{label:"Username",placeholder:"Username..",name:"username",type:"text",value:u.username,error:!!s.username,onChange:i}),Object(b.jsx)(K.a.Input,{label:"Email",placeholder:"Email..",name:"email",type:"email",value:u.email,error:!!s.email,onChange:i}),Object(b.jsx)(K.a.Input,{label:"Password",placeholder:"Password..",name:"password",type:"password",value:u.password,error:!!s.password,onChange:i}),Object(b.jsx)(K.a.Input,{label:"Confirm Password",placeholder:"Confirm Password..",name:"confirmPassword",type:"password",value:u.confirmPassword,error:!!s.confirmPassword,onChange:i}),Object(b.jsx)(k.a,{type:"submit",primary:!0,children:"Register"})]}),Object.keys(s).length>0&&Object(b.jsx)("div",{className:"ui error message",children:Object(b.jsx)("ul",{className:"list",children:Object.values(s).map((function(e){return Object(b.jsx)("li",{children:e},e)}))})})]})},oe=n(276);var ie,le,je=function(){var e=Object(r.useContext)(O),t=e.user,n=e.logout,a=window.location.pathname,s="/"===a?"home":a.substr(1),o=Object(r.useState)(s),i=Object(l.a)(o,2),j=i[0],u=i[1],d=function(e,t){var n=t.name;return u(n)};return t?Object(b.jsxs)(oe.a,{pointing:!0,secondary:!0,size:"massive",color:"pink",children:[Object(b.jsx)(oe.a.Item,{name:t.username,active:!0,as:c.b,to:"/"}),Object(b.jsx)(oe.a.Menu,{position:"right",children:Object(b.jsx)(oe.a.Item,{name:"logout",onClick:n})})]}):Object(b.jsxs)(oe.a,{pointing:!0,secondary:!0,size:"massive",color:"green",children:[Object(b.jsx)(oe.a.Item,{name:"home",active:"home"===j,onClick:d,as:c.b,to:"/"}),Object(b.jsxs)(oe.a.Menu,{position:"right",children:[Object(b.jsx)(oe.a.Item,{name:"login",active:"login"===j,onClick:d,as:c.b,to:"/login"}),Object(b.jsx)(oe.a.Item,{name:"register",active:"register"===j,onClick:d,as:c.b,to:"/register"}),Object(b.jsx)(oe.a.Item,{name:"chat",active:"chat"===j,onClick:d,as:c.b,to:"/chat"})]})]})};var ue=Object(D.a)(ie||(ie=Object(A.a)(["\n    mutation($postId: String!, $body: String!) {\n        createComment(postId: $postId, body: $body) {\n        id\n        comments {\n            id\n            body\n            createdAt\n            username\n        }\n        commentCount\n        }\n    }\n    "]))),be=Object(D.a)(le||(le=Object(A.a)(["\n    query($postId: ID!) {\n        getPost(postId: $postId) {\n        id\n        body\n        createdAt\n        username\n        likeCount\n        likes {\n            username\n        }\n        commentCount\n        comments {\n            id\n            username\n            createdAt\n            body\n        }\n        }\n    }\n    "]))),de=function(e){var t,n=e.match.params.postId,a=Object(r.useContext)(O).user,s=Object(r.useRef)(null),c=Object(r.useState)(""),o=Object(l.a)(c,2),i=o[0],j=o[1],u=Object(f.useQuery)(be,{variables:{postId:n}}).data.getPost,d=Object(f.useMutation)(ue,{update:function(){j(""),s.current.blur()},variables:{postId:n,body:i}}),m=Object(l.a)(d,1)[0];if(u){var h=u.id,p=u.body,x=u.createdAt,g=u.username,v=u.comments,y=u.likes,$=u.likeCount,A=u.commentCount;t=Object(b.jsx)(C.a,{children:Object(b.jsxs)(C.a.Row,{children:[Object(b.jsx)(C.a.Column,{width:2,children:Object(b.jsx)(I.a,{src:"https://react.semantic-ui.com/images/avatar/large/molly.png",size:"small",float:"right"})}),Object(b.jsxs)(C.a.Column,{width:10,children:[Object(b.jsxs)(w.a,{fluid:!0,children:[Object(b.jsxs)(w.a.Content,{children:[Object(b.jsx)(w.a.Header,{children:g}),Object(b.jsx)(w.a.Meta,{children:N()(x).fromNow()}),Object(b.jsx)(w.a.Description,{children:p})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)(w.a.Content,{extra:!0,children:[Object(b.jsx)(q,{user:a,post:{id:h,likeCount:$,likes:y}}),Object(b.jsx)(E,{content:"Comment on post",children:Object(b.jsxs)(k.a,{as:"div",labelPosition:"right",onClick:function(){return console.log("Comment on post")},children:[Object(b.jsx)(k.a,{basic:!0,color:"blue",children:Object(b.jsx)(P.a,{name:"comments"})}),Object(b.jsx)(S.a,{basic:!0,color:"blue",pointing:"left",children:A})]})}),a&&a.username===g&&Object(b.jsx)(H,{postId:h,callback:function(){e.history.push("/")}})]})]}),a&&Object(b.jsx)(w.a,{fluid:!0,children:Object(b.jsxs)(w.a.Content,{children:[Object(b.jsx)("p",{children:"Post a comment"}),Object(b.jsx)(K.a,{children:Object(b.jsxs)("div",{className:"ui action input fluid",children:[Object(b.jsx)("input",{type:"text",placeholder:"Comment..",name:"comment",value:i,onChange:function(e){return j(e.target.value)},ref:s}),Object(b.jsx)("button",{type:"submit",className:"ui button teal",disabled:""===i.trim(),onClick:m,children:"Submit"})]})})]})}),v.map((function(e){return Object(b.jsx)(w.a,{fluid:!0,children:Object(b.jsxs)(w.a.Content,{children:[a&&a.username===e.username&&Object(b.jsx)(H,{postId:h,commentId:e.id}),Object(b.jsx)(w.a.Header,{children:e.username}),Object(b.jsx)(w.a.Meta,{children:N()(e.createdAt).fromNow()}),Object(b.jsx)(w.a.Description,{children:e.body})]})},e.id)}))]})]})})}else t=Object(b.jsx)("p",{children:"Loading post.."});return t};var me=function(){return Object(b.jsx)(p,{children:Object(b.jsx)(c.a,{children:Object(b.jsxs)(i.a,{children:[Object(b.jsx)(je,{}),Object(b.jsx)(o.b,{exact:!0,path:"/",component:te}),Object(b.jsx)(g,{exact:!0,path:"/login",component:se}),Object(b.jsx)(g,{exact:!0,path:"/register",component:ce}),Object(b.jsx)(g,{exact:!0,path:"/chat",component:v}),Object(b.jsx)(o.b,{exact:!0,path:"/posts/:postId",component:de})]})})})},Oe=n(219),he=n(223),pe=n(225),xe=n(226),ge=Object(pe.a)({uri:"http://localhost:4000"}),ve=Object(xe.a)((function(){var e=localStorage.getItem("jwtToken");return{headers:{Authorization:e?"Bearer ".concat(e):""}}})),fe=new Oe.a({link:ve.concat(ge),cache:new he.a}),Ce=Object(b.jsx)(f.ApolloProvider,{client:fe,children:Object(b.jsx)(me,{})});s.a.render(Ce,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[256,1,2]]]);
//# sourceMappingURL=main.ed021383.chunk.js.map