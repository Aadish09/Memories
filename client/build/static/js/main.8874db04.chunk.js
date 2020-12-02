(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{126:function(e,t,s){"use strict";s.r(t);var r=s(1),n=s(0),c=s.n(n),a=s(16),o=s.n(a),i=(s(98),s(99),s(8)),d=s(27),l=s.n(d),j=s(44),u=s(101).create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).RURL}),b=function(e){return{type:"SIGN_IN",payload:e}},O=function(e){return function(t){t({type:"ERROR_AUTH",payload:e})}},h=function(){return function(){var e=Object(j.a)(l.a.mark((function e(t){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/auth/current_user");case 2:(s=e.sent).data?t({type:"FETCH_USER",payload:s.data}):t({type:"FETCH_USER_FAILED"});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},m=s(12),g=s(7),p=s(9),x=s(178),f=s(161),v=Object(p.b)((function(e){return{error:e.userReducer.error}}),(function(e){return{login:function(t){return e(b(t))},setLoginerror:function(t){return e(O(t))}}}))((function(e){var t=Object(n.useState)({email:"",password:""}),s=Object(i.a)(t,2),c=s[0],a=s[1],o=function(t){e.setLoginerror(void 0),a(Object(g.a)(Object(g.a)({},c),{},Object(m.a)({},t.target.name,t.target.value)))};return Object(r.jsxs)("div",{className:"Login",children:[void 0!==e.error&&Object(r.jsx)(x.a,{severity:"error",children:Object(r.jsx)(f.a,{children:e.error})}),Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault(),u.post("/auth/login",c).then((function(t){t.data?(e.login(t.data),a({email:"",password:""}),e.setLoginerror(void 0)):(console.log("Invalid"),e.setLoginerror("Invalid credentials"))})).catch((function(t){e.setLoginerror("Invalid credentials")}))},className:"form",children:[Object(r.jsx)("input",{type:"email",value:c.email,name:"email",required:!0,onChange:o,placeholder:"Email"}),Object(r.jsx)("input",{type:"password",value:c.password,name:"password",required:!0,onChange:o,placeholder:"Password"}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:"custombutton",type:"submit",children:"Login"})})]}),Object(r.jsxs)("p",{children:["New here ? ",Object(r.jsx)("a",{onClick:function(){return e.setOpen(!1)},children:"Signup"})," "]})]})})),A=Object(p.b)((function(e){return{error:e.userReducer.error}}),(function(e){return{SignUp:function(t){return e(function(e){return{type:"SIGN_UP",payload:e}}(t))},setSignuperror:function(t){return e(O(t))}}}))((function(e){var t,s=Object(n.useState)({email:"",password:"",name:""}),c=Object(i.a)(s,2),a=c[0],o=c[1],d=function(t){e.setSignuperror(void 0),o(Object(g.a)(Object(g.a)({},a),{},Object(m.a)({},t.target.name,t.target.value)))};return Object(r.jsxs)("div",{className:"SignUp",children:[void 0!==e.error&&Object(r.jsx)(x.a,{severity:"error",children:Object(r.jsx)(f.a,{children:e.error})}),Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault(),u.post("/auth/signup",a).then((function(t){e.SignUp(t.data),o({email:"",password:"",name:""})}))},className:"form",children:[Object(r.jsx)("input",{type:"email",value:a.email,name:"email",required:!0,onBlur:(t=a.email,void u.get("/auth/email/".concat(t)).then((function(t){console.log(t),null!==t.data.err&&e.setSignuperror(t.data.err)}))),onChange:d,placeholder:"Email"}),Object(r.jsx)("input",{type:"text",value:a.name,name:"name",required:!0,onChange:d,placeholder:"Username"}),Object(r.jsx)("input",{type:"password",value:a.password,id:"password",name:"password",required:!0,onChange:d,placeholder:"Password"}),Object(r.jsx)("input",{type:"password",name:"confirmPassword",id:"confirmPassword",required:!0,onChange:function(t){t.target.value!==a.password?t.target.setCustomValidity("Password don't match"):(t.target.setCustomValidity(""),e.setSignuperror(void 0))},placeholder:"Confirm Password"}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:"custombutton",type:"submit",children:"SignUp"})})]}),Object(r.jsxs)("p",{children:["Already a user ? ",Object(r.jsx)("a",{href:"#",onClick:function(){return e.setOpen(!0)},children:"Login"})]})]})})),N=s(127),y=s(162),w="data:image/png;base64,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",D=Object(p.b)(null,(function(e){return{login:function(t){return e(b(t))}}}))((function(e){var t=Object(n.useState)(!0),s=Object(i.a)(t,2),c=s[0],a=s[1];return Object(r.jsxs)("div",{className:"Auth",children:[Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:w,alt:"logo",className:"memories"})}),Object(r.jsx)("h1",{children:"Welcome to Memories"}),Object(r.jsx)(N.a,{elevation:3,className:"Paper",children:Object(r.jsxs)(y.a,{container:!0,className:"container",children:[Object(r.jsx)(y.a,{item:!0,xs:12,md:8,children:c?Object(r.jsx)(v,{setOpen:a}):Object(r.jsx)(A,{setOpen:a})}),Object(r.jsx)("div",{className:"vl-outer",children:Object(r.jsx)("div",{className:"vl",children:Object(r.jsx)("span",{className:"vl-innertext",children:"or"})})}),Object(r.jsx)(y.a,{item:!0,xs:12,md:4,className:"right",children:Object(r.jsxs)("a",{href:"/auth/google",className:"google-btn",children:[Object(r.jsx)("div",{className:"google-icon-wrapper",children:Object(r.jsx)("img",{alt:"google",className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"})}),Object(r.jsx)("p",{className:"btn-text",children:Object(r.jsx)("b",{children:"Sign in with google"})})]})})]})})]})})),S=s(21),C=s(164),L=s(179),R=s(165),k=s(163),I=s(166),P=s(76),E=s.n(P),H=s(74),M=s.n(H),T=s(75),B=s.n(T),F=Object(p.b)((function(e){return{isLoggedIn:e.userReducer.isLogged,user:e.userReducer.user}}),(function(e){return{logout:function(){return e(function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOGOUT"}),e.next=3,u.get("/auth/logout");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))((function(e){var t=Object(n.useState)(!1),s=Object(i.a)(t,2),c=s[0],a=s[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"Navbar-wrapper",children:Object(r.jsxs)("div",{className:"Navbar",children:[Object(r.jsxs)("div",{className:"Navbar-left",children:[Object(r.jsx)("img",{alt:"logo",src:w}),Object(r.jsx)("h2",{children:Object(r.jsx)(S.b,{to:"/dashboard",children:"Memories "})})]}),e.isLoggedIn&&Object(r.jsxs)("div",{className:"Navbar-center",children:[Object(r.jsx)(S.b,{to:"/newPost",children:"NewPost"},"1"),Object(r.jsx)(S.b,{to:"/myposts",children:"MyPosts"},"2"),Object(r.jsx)(S.b,{to:"/saved",children:"SavedPosts"},"3")]}),Object(r.jsxs)("div",{className:"Navbar-right",children:[Object(r.jsx)("h2",{children:e.isLoggedIn&&e.user.name}),e.isLoggedIn&&Object(r.jsx)("button",{className:"logout",onClick:e.logout,children:"Logout"})]})]})}),Object(r.jsxs)("div",{className:"Navbar-res",children:[Object(r.jsxs)("div",{className:"Navbar-res-left",children:[Object(r.jsx)("img",{alt:"logo",src:w}),Object(r.jsx)("h2",{children:Object(r.jsx)(S.b,{to:"/dashboard",children:"Memories "})})]}),e.isLoggedIn&&Object(r.jsx)("div",{className:"Navbar-res-right",children:Object(r.jsx)(k.a,{onClick:function(){return a(!c)}})})]}),c&&Object(r.jsxs)(C.a,{className:"collapse-nav",component:"nav",children:[Object(r.jsx)(L.a,{button:!0,children:Object(r.jsxs)(S.b,{to:"/newPost",children:[Object(r.jsx)(M.a,{}),"NewPost"]},"1")}),Object(r.jsx)(R.a,{light:!0}),Object(r.jsx)(L.a,{button:!0,children:Object(r.jsxs)(S.b,{to:"/myposts",children:[Object(r.jsx)(B.a,{}),"MyPosts"]},"2")}),Object(r.jsx)(R.a,{light:!0}),Object(r.jsx)(L.a,{button:!0,children:Object(r.jsxs)(S.b,{to:"/saved",children:[Object(r.jsx)(I.a,{}),"SavedPosts"]},"3")}),Object(r.jsx)(R.a,{light:!0}),Object(r.jsx)(L.a,{divider:!0,children:e.isLoggedIn&&Object(r.jsxs)("div",{className:"Username",children:[Object(r.jsx)(E.a,{}),e.user.name]})}),Object(r.jsx)(R.a,{light:!0}),e.isLoggedIn&&Object(r.jsx)(L.a,{button:!0,onClick:e.logout,children:"Logout"})]})]})})),X=s(167),U=s(5),G=s(168),W=s(169),Q=s(170),J=s(171),Z=s(172),z=s(174),K=s(180),q=s(160),V=s(46),Y=s(52),_=s(79),$=s.n(_),ee=s(173),te=s(80),se=s.n(te),re=s(77),ne=s.n(re),ce=function(){return function(e){e({type:"LOADING"}),u.get("/posts").then((function(t){null!==t.data.err?e({type:"ERROR_POST",payload:t.data.err}):e({type:"FETCH_POSTS",payload:t.data.posts})}))}},ae=function(e){return function(t){t({type:"ERROR_POST",payload:e})}},oe=s(177),ie=Object(X.a)((function(e){return{media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:Y.a[500]}}}));var de=Object(p.b)((function(e){return{user:e.userReducer.user}}),(function(e){return{like:function(t){return e(function(e){return function(t){!1===e.post.Likes.includes(e.user._id)&&u.post("/posts/like",e).then((function(e){console.log("Liked ")}))}}(t))},delete:function(t){return e(function(e){return function(t){t({type:"DELETE",payload:e}),u.delete("/posts",{data:e}).then((function(t){console.log("Deleted ",e)}))}}(t))},fetchallpost:function(){return e(ce())}}}))((function(e){var t=ie(),s=Object(n.useState)(!1),c=Object(i.a)(s,2),a=c[0],o=c[1],d=Object(n.useState)(""),l=Object(i.a)(d,2),j=l[0],b=l[1],O=Object(n.useState)(""),h=Object(i.a)(O,2),g=h[0],p=h[1];return Object(n.useEffect)((function(){e.user.bookmarks.includes(e.post._id)&&b("Bookmarked"),e.post.Likes.includes(e.user._id)&&p("Liked")}),[e]),Object(r.jsxs)(G.a,{className:t.root,children:[Object(r.jsx)(W.a,{avatar:Object(r.jsx)(K.a,{"aria-label":"avatar",className:t.avatar,children:e.user.name.charAt(0)}),title:e.post.title.slice(0,50),subheader:ne()(Number(e.post.createdOn)).format("MMM DD h:mm A")}),Object(r.jsx)(Q.a,{className:t.media,image:e.post.image.base64,title:e.post.title.substring(0,5)}),Object(r.jsx)(J.a,{children:Object(r.jsx)(V.a,{variant:"body2",color:"textSecondary",component:"p",children:e.post.body.slice(0,100)+" ..."})}),Object(r.jsxs)(Z.a,{disableSpacing:!0,children:[Object(r.jsx)("div",{onClick:function(){p("Liked"),!e.post.Likes.includes(e.user._id)&&e.like({post:e.post,user:e.user})},children:Object(r.jsx)(oe.a,{title:"Like",children:Object(r.jsx)(q.a,{className:g,"aria-label":"add to favorites",children:Object(r.jsx)($.a,{})})})}),Object(r.jsx)("div",{onClick:function(){return e.delete(e.post)},children:Object(r.jsx)(oe.a,{title:"Delete",children:Object(r.jsx)(q.a,{"aria-label":"delete",children:Object(r.jsx)(ee.a,{})})})}),Object(r.jsx)("div",{onClick:function(){b("Bookmarked"),function(){if(!e.user.bookmarks.includes(e.post._id)){var t={userId:e.user._id,postId:e.post._id};u.post("/posts/bookmark",t).then((function(e){console.log("Bookmarked",t)}))}}()},children:Object(r.jsx)(oe.a,{title:"Bookmark",children:Object(r.jsx)(q.a,{className:j,"aria-label":"bookmark",children:Object(r.jsx)(I.a,{})})})}),Object(r.jsx)(q.a,{className:Object(U.a)(t.expand,Object(m.a)({},t.expandOpen,a)),onClick:function(){o(!a)},"aria-expanded":a,"aria-label":"show more",children:Object(r.jsx)(se.a,{})})]}),Object(r.jsx)(z.a,{in:a,timeout:"auto",unmountOnExit:!0,children:Object(r.jsx)(J.a,{children:Object(r.jsx)(V.a,{paragraph:!0,children:e.post.body})})})]})})),le=s(175),je=s(81),ue=function(e){var t=e.title;return Object(r.jsx)(je.a,{children:Object(r.jsx)("title",{children:t||"\u269b\ufe0f app"})})},be=Object(p.b)((function(e){return{loading:e.postReducer.loading,err:e.postReducer.err}}),(function(e){return{fetchallpost:function(){return e(ce())}}}))((function(e){return Object(n.useEffect)((function(){e.fetchallpost()}),[]),Object(r.jsxs)("div",{children:[void 0!==e.err&&Object(r.jsx)(x.a,{className:"err-box",severity:"error",children:Object(r.jsx)(f.a,{children:e.err})}),Object(r.jsx)(ue,{title:e.loading?"Loading...":"Memories - A place to store moments"}),Object(r.jsx)(y.a,{container:!0,className:"container",children:Object(r.jsx)(y.a,{item:!0,xs:12,md:12,className:"post-grid",children:e.loading?Object(r.jsx)(le.a,{className:"loader"}):Object(r.jsx)(c.a.Fragment,{children:e.posts.map((function(e){return Object(r.jsx)(y.a,{className:"post-grid-item",item:!0,xs:12,sm:6,md:4,children:Object(r.jsx)(de,{post:e},e._id)},e._id)}))})})})]})})),Oe=s(11),he=Object(p.b)((function(e){return{user:e.userReducer.user,posts:e.postReducer.posts,loading:e.postReducer.loading,err:e.postReducer.err}}),(function(e){return{seterror:function(t){return e(ae(t))}}}))((function(e){var t=Object(n.useState)(null),s=Object(i.a)(t,2),a=s[0],o=s[1];return e.seterror(void 0),Object(n.useEffect)(Object(j.a)(l.a.mark((function t(){var s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/user/".concat(e.user._id,"/posts"));case 2:s=t.sent,o(s.data);case 4:case"end":return t.stop()}}),t)}))),[e.user]),Object(r.jsxs)("div",{children:[null!==a&&0===a.length&&Object(r.jsx)(x.a,{className:"err-box",severity:"error",children:Object(r.jsx)(f.a,{children:"No posts found"})}),Object(r.jsx)(ue,{title:null===a?"Loading...":"Memories - A place to store moments"}),Object(r.jsx)(y.a,{container:!0,className:"container",children:Object(r.jsx)(y.a,{item:!0,xs:12,md:12,className:"post-grid",alignItems:"stretch",children:null===a?Object(r.jsx)(le.a,{className:"loader"}):Object(r.jsx)(c.a.Fragment,{children:a.map((function(e){return Object(r.jsx)(y.a,{className:"post-grid-item",item:!0,xs:12,sm:6,md:4,children:Object(r.jsx)(de,{post:e},e._id)})}))})})})]})})),me=Object(p.b)((function(e){return{user:e.userReducer.user,posts:e.postReducer.posts,loading:e.postReducer.loading,err:e.postReducer.err}}),(function(e){return{fetchuser:function(){return e(h())}}}))((function(e){var t=Object(n.useState)(null),s=Object(i.a)(t,2),a=s[0],o=s[1];return Object(n.useEffect)((function(){e.fetchuser();var t=e.posts.filter((function(t){return e.user.bookmarks.includes(t._id)}));o(t)}),[e]),Object(r.jsxs)("div",{children:[e.user&&0===e.user.bookmarks.length&&Object(r.jsx)(x.a,{className:"err-box",severity:"error",children:Object(r.jsx)(f.a,{children:"No posts found"})}),Object(r.jsx)(ue,{title:null===a?"Loading...":"Memories - A place to store moments"}),Object(r.jsx)(y.a,{container:!0,className:"container",children:Object(r.jsx)(y.a,{item:!0,xs:12,md:12,className:"post-grid",alignItems:"stretch",children:null===a?Object(r.jsx)(le.a,{className:"loader"}):Object(r.jsx)(c.a.Fragment,{children:a.map((function(e){return Object(r.jsx)(y.a,{className:"post-grid-item",item:!0,xs:12,sm:6,md:4,children:Object(r.jsx)(de,{post:e},e._id)})}))})})})]})})),ge=s(84),pe=s.n(ge),xe=s(176),fe=Object(p.b)((function(e){return{isLoggedIn:e.userReducer.isLogged,user:e.userReducer.user,err:e.postReducer.err}}),(function(e){return{newpost:function(t){return e(function(e){return function(t){t({type:"NEW_POST",payload:e})}}(t))},seterror:function(t){return e(ae(t))}}}))((function(e){var t=Object(Oe.g)();e.seterror(void 0);var s=Object(n.useState)(void 0),c=Object(i.a)(s,2),a=c[0],o=c[1],d=Object(n.useState)(0),l=Object(i.a)(d,2),j=l[0],b=l[1],O=Object(n.useState)({title:"",author:e.user._id,body:"",image:""}),h=Object(i.a)(O,2),p=h[0],v=h[1],A=function(e){v(Object(g.a)(Object(g.a)({},p),{},Object(m.a)({},e.target.name,e.target.value))),o(void 0)},N=function(e){return e.split(" ").length};return Object(r.jsxs)("div",{className:"Form",children:[Object(r.jsx)(xe.a,{variant:"determinate",value:j}),Object(r.jsx)("h1",{children:"Share memory !"}),void 0!==a&&Object(r.jsx)(x.a,{severity:"error",children:Object(r.jsx)(f.a,{children:a})}),Object(r.jsxs)("form",{onSubmit:function(s){if(s.preventDefault(),b(20),""===p.title||N(p.title)<3)o("Enter the title of min 3 words");else{if(!(""===p.body||N(p.body)<10))return""===p.image?(o("Choose a file to upload"),void console.log(e.err)):(b(50),void u.post("/posts/new",p).then((function(s){b(70),void 0!==s.data.success?(b(100),t.push("/dashboard"),e.newpost(s.data.post),v({title:"",author:"",body:"",image:""})):e.seterror(s.data.error)})));o("Enter the description of min 10 words")}},className:"form",children:[Object(r.jsx)("input",{type:"text",value:p.title,name:"title",placeholder:"Title",onChange:A}),Object(r.jsx)("textarea",{type:"text",value:p.body,name:"body",placeholder:"Description",onChange:A,maxLength:300}),Object(r.jsx)(pe.a,{placeholder:"File upload",onDone:function(e){o(void 0),v(Object(g.a)(Object(g.a)({},p),{},{image:e}))},className:"fileupload",name:"image",children:"File"}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:"custombutton",type:"submit",children:"Post"})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:"custombutton-red",type:"submit",onClick:function(){v({title:"",author:"",body:"",image:""})},children:"Clear"})})]})]})})),ve=s.p+"static/media/post.befe095e.jpg",Ae=function(){return Object(r.jsx)("div",{className:"Post",children:Object(r.jsx)(N.a,{elevation:3,children:Object(r.jsxs)(y.a,{container:!0,className:"Post-container",children:[Object(r.jsx)(y.a,{item:!0,className:"grid-image",md:6,lg:6,children:Object(r.jsx)("img",{src:ve,alt:"new-post"})}),Object(r.jsx)(y.a,{item:!0,xs:12,sm:12,md:6,className:"Post-form-paper",children:Object(r.jsx)(fe,{})})]})})})};var Ne=Object(p.b)((function(e){return{posts:e.postReducer.posts,loggedIn:e.userReducer.isLogged,loaduser:e.userReducer.loaduser}}),(function(e){return{fetchuser:function(){return e(h())}}}))((function(e){return Object(n.useEffect)((function(){e.fetchuser()}),[e]),Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(S.a,{children:Object(r.jsx)("div",{children:e.loaduser?Object(r.jsx)(le.a,{className:"loader"}):Object(r.jsxs)(Oe.d,{children:[Object(r.jsxs)(Oe.b,{path:"/",exact:!0,children:[" ",e.oggedIn?Object(r.jsx)(Oe.a,{to:"/dashboard",exact:!0}):Object(r.jsx)(Oe.a,{to:"/Auth"})]}),Object(r.jsx)(Oe.b,{path:"/dashboard",exact:!0,children:e.loggedIn?Object(r.jsxs)(c.a.Fragment,{children:[Object(r.jsx)(F,{}),Object(r.jsx)(be,{posts:e.posts})]}):Object(r.jsx)(Oe.a,{to:"/Auth",exact:!0})}),Object(r.jsx)(Oe.b,{path:"/newPost",exact:!0,children:e.loggedIn?Object(r.jsxs)(c.a.Fragment,{children:[Object(r.jsx)(F,{}),Object(r.jsx)(Ae,{})]}):Object(r.jsx)(Oe.a,{to:"/Auth",exact:!0})}),Object(r.jsx)(Oe.b,{path:"/myposts",exact:!0,children:e.loggedIn?Object(r.jsxs)(c.a.Fragment,{children:[Object(r.jsx)(F,{}),Object(r.jsx)(he,{posts:e.posts})]}):Object(r.jsx)(Oe.a,{to:"/Auth",exact:!0})}),Object(r.jsx)(Oe.b,{path:"/saved",exact:!0,children:e.loggedIn?Object(r.jsxs)(c.a.Fragment,{children:[Object(r.jsx)(F,{}),Object(r.jsx)(me,{posts:e.posts})]}):Object(r.jsx)(Oe.a,{to:"/Auth",exact:!0})}),Object(r.jsx)(Oe.b,{path:"/Auth",exact:!0,children:e.loggedIn?Object(r.jsx)(Oe.a,{to:"/dashboard",exact:!0}):Object(r.jsx)(D,{})})]})})})})})),ye=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,181)).then((function(t){var s=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,a=t.getTTFB;s(e),r(e),n(e),c(e),a(e)}))},we=s(29),De=s(85),Se={isLogged:!1,user:null,error:void 0,msg:"",loaduser:!0},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0,s=t.type,r=t.payload;switch(s){case"FETCH_USER":case"SIGN_IN":case"SIGN_UP":return Object(g.a)(Object(g.a)({},e),{},{isLogged:!0,loaduser:!1,user:r,error:void 0});case"LOGOUT":return Object(g.a)(Object(g.a)({},e),{},{isLogged:!1,loaduser:!1,user:null,error:void 0});case"ERROR_AUTH":return Object(g.a)(Object(g.a)({},e),{},{error:r,loaduser:!1});case"SUCCESS":return Object(g.a)(Object(g.a)({},e),{},{msg:r,loaduser:!1});case"FETCH_USER_FAILED":return Object(g.a)(Object(g.a)({},e),{},{loaduser:!1});default:return e}},Le=s(24),Re={posts:[],err:void 0,loading:!1},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0,s=t.type,r=t.payload;switch(s){case"NEW_POST":return Object(g.a)(Object(g.a)({},e),{},{posts:[r].concat(Object(Le.a)(e.posts)),loading:!1});case"FETCH_POSTS":return Object(g.a)(Object(g.a)({},e),{},{posts:r,loading:!1});case"LOADING":return Object(g.a)(Object(g.a)({},e),{},{loading:!0});case"LIKE":r.post.Likes.push(r.user._id);var n=e.posts.filter((function(e){return e._id!==r.post._id}));return Object(g.a)(Object(g.a)({},e),{},{posts:[].concat(Object(Le.a)(n),[r.post])});case"ERROR_POST":return Object(g.a)(Object(g.a)({},e),{},{err:r,loading:!1});case"DELETE":var c=e.posts.filter((function(e){return e._id!==r._id||e.author._id!==r.author._id}));return Object(g.a)(Object(g.a)({},e),{},{posts:Object(Le.a)(c)});default:return e}},Ie=Object(we.c)({userReducer:Ce,postReducer:ke}),Pe=Object(we.d)(Ie,Object(we.a)(De.a));o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(p.a,{store:Pe,children:Object(r.jsx)(Ne,{})})}),document.getElementById("root")),window.addEventListener("resize",(function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))})),ye(console.log())},98:function(e,t,s){},99:function(e,t,s){}},[[126,1,2]]]);
//# sourceMappingURL=main.8874db04.chunk.js.map