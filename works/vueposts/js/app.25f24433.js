(function(t){function e(e){for(var r,a,o=e[0],u=e[1],l=e[2],p=0,f=[];p<o.length;p++)a=o[p],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&f.push(n[a][0]),n[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],r=!0,o=1;o<s.length;o++){var u=s[o];0!==n[u]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=s[0]))}return t}var r={},n={app:0},i=[];function a(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=r,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(s,r,function(e){return t[e]}.bind(null,r));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var c=u;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"157a":function(t,e,s){},"199c":function(t,e){},"206d":function(t,e,s){"use strict";var r=s("4413"),n=s.n(r);n.a},"23be":function(t,e,s){"use strict";var r=s("199c"),n=s.n(r);e["default"]=n.a},"2ebb":function(t,e,s){"use strict";var r=s("157a"),n=s.n(r);n.a},"30f6":function(t,e,s){"use strict";var r=s("b28e"),n=s.n(r);n.a},3661:function(t,e,s){"use strict";var r=s("37cd"),n=s.n(r);n.a},"37cd":function(t,e,s){},"3dfd":function(t,e,s){"use strict";var r=s("5a34"),n=s("23be"),i=(s("5c0b"),s("2877")),a=Object(i["a"])(n["default"],r["a"],r["b"],!1,null,null,null);e["default"]=a.exports},4413:function(t,e,s){},4811:function(t,e,s){"use strict";var r=s("5cf1"),n=s.n(r);n.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),n=s("3dfd"),i=s("8c4f"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{staticClass:"form",attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("h1",{staticClass:"title"},[t._v("Login to my app")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{required:"",type:"text",name:"user",placeholder:"Your Email..."},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),s("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Log In")]),s("p",{staticClass:"error"},[t._v(t._s(this.error))])])},o=[],u=s("5530"),l=(s("96cf"),s("1da1")),c=s("2f62"),p={name:"Login",data:function(){return{error:"",email:"",user:null,users:null,isLoged:!1}},mounted:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.GET_USERS();case 2:return e.next=4,t.CHANGE_LOGED(t.isLoged);case 4:case"end":return e.stop()}}),e)})))()},computed:Object(c["c"])(["ALL_USERS","IS_LOGED"]),methods:Object(u["a"])(Object(u["a"])({},Object(c["b"])(["GET_USERS","CHANGE_LOGED","SET_USER_INFO"])),{},{submit:function(){for(var t=this.users=this.ALL_USERS,e=this.user=this.email,s=0;s<t.length;s++)e===t[s].email?(this.isLoged=!0,this.CHANGE_LOGED(this.isLoged),this.SET_USER_INFO(s),this.$router.push({name:"home"})):(this.error="Try this email: Sincere@april.biz",this.email="")}})},f=p,_=(s("206d"),s("2877")),d=Object(_["a"])(f,a,o,!1,null,null,null),m=d.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Nav"),s("PostsList",{attrs:{posts:t.ALL_POSTS}})],1)},v=[],S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"nav"},[s("ul",{staticClass:"nav-list"},[s("li",{staticClass:"nav-list-item"},[s("router-link",{staticClass:"link",attrs:{to:{name:"home"}}},[t._v("Home")])],1),s("li",{staticClass:"nav-list-item"},[s("router-link",{staticClass:"link",attrs:{to:{name:"user",params:{id:1}}}},[t._v("User")])],1),s("li",{staticClass:"nav-list-item"},[s("router-link",{staticClass:"link",attrs:{to:{name:"login"}}},[t._v("Logout")])],1)])])},E=[],L={name:"Nav"},O=L,g=(s("4811"),Object(_["a"])(O,S,E,!1,null,"ef5dda12",null)),b=g.exports,U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"list"},[s("li",{staticClass:"search"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.filterPost,expression:"filterPost"}],staticClass:"input",attrs:{type:"text",placeholder:"Search post..."},domProps:{value:t.filterPost},on:{input:function(e){e.target.composing||(t.filterPost=e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.filterUser,expression:"filterUser"}],staticClass:"input",attrs:{type:"text",placeholder:"User id: 1..."},domProps:{value:t.filterUser},on:{input:function(e){e.target.composing||(t.filterUser=e.target.value)}}})]),s("li",{staticClass:"counter"},[s("strong",[t._v("Count of Posts:")]),t._v(" "+t._s(t.resultArray.length))]),t._l(t.paginatedPosts,(function(t){return s("PostsListItem",{key:t.id,attrs:{post:t}})})),s("li",{staticClass:"pagination"},t._l(t.pages,(function(e){return s("div",{staticClass:"page",class:{"page selected":e===t.pageNumber},on:{click:function(s){return t.pageClick(e)}}},[t._v(t._s(e))])})),0)],2)},P=[],A=(s("4de4"),s("caad"),s("fb6a"),s("2532"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"list-item"},[s("router-link",{staticClass:"list-item__title",attrs:{to:{name:"post",params:{id:t.post.id}}}},[t._v(t._s(t.post.title))]),s("p",{staticClass:"list-item__body"},[t._v(t._s(t.post.body))]),s("router-link",{attrs:{to:{name:"userdetail",params:{id:t.post.userId}}}},[t._v("User Info")])],1)}),y=[],T={name:"PostsListItem",props:{post:{type:Object}}},C=T,G=(s("2ebb"),Object(_["a"])(C,A,y,!1,null,"654757cf",null)),I=G.exports,N={name:"PostsList",components:{PostsListItem:I},props:{posts:{type:Array}},methods:{pageClick:function(t){this.pageNumber=t}},data:function(){return{filterPost:"",filterUser:"",postsPerPage:10,pageNumber:1,currentArray:null}},computed:{filteredPosts:function(){var t=this;return this.currentArray.filter((function(e){return e.title.toLowerCase().includes(t.filterPost.toLowerCase())}))},filteredUsers:function(){var t=this;return this.currentArray.filter((function(e){return e.userId===+t.filterUser}))},resultArray:function(){var t;return""!==this.filterPost?(this.currentArray=this.posts,t=this.currentArray=this.filteredPosts,""!==this.filterUser&&(t=this.currentArray=this.filteredUsers)):""===this.filterPost&&""===this.filterUser&&(t=this.posts),""!==this.filterUser?(this.currentArray=this.posts,t=this.currentArray=this.filteredUsers,""!==this.filterPost&&(t=this.currentArray=this.filteredPosts)):""===this.filterPost&&""===this.filterUser&&(t=this.posts),t},pages:function(){return Math.ceil(this.resultArray.length/10)},paginatedPosts:function(){var t=(this.pageNumber-1)*this.postsPerPage,e=t+this.postsPerPage;return this.resultArray.slice(t,e)}}},D=N,R=(s("3661"),Object(_["a"])(D,U,P,!1,null,"42d0bfa2",null)),j=R.exports,w={name:"Home",components:{Nav:b,PostsList:j},computed:Object(c["c"])(["IS_LOGED","ALL_POSTS"]),methods:Object(c["b"])(["GET_POSTS"]),mounted:function(){!1===this.IS_LOGED?this.$router.push({name:"login"}):this.GET_POSTS()}},x=w,k=Object(_["a"])(x,h,v,!1,null,"34af5aa1",null),$=k.exports,F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Nav"),t.IS_LOGED?s("div",{staticClass:"info"},[s("p",{staticClass:"info__id"},[t._v("Post: "+t._s(t.ALL_POSTS[this.id-1].id))]),s("p",{staticClass:"info__title"},[t._v(t._s(t.ALL_POSTS[this.id-1].title))]),s("p",{staticClass:"info__body"},[t._v(t._s(t.ALL_POSTS[this.id-1].body))])]):t._e()],1)},H=[],M={name:"PostDetail",components:{Nav:b},data:function(){return{render:null}},props:["id"],computed:Object(c["c"])(["ALL_POSTS","IS_LOGED"]),mounted:function(){!1===this.IS_LOGED&&this.$router.push({name:"login"})}},J=M,q=(s("6be9"),Object(_["a"])(J,F,H,!1,null,"51cc6a08",null)),z=q.exports,Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.IS_LOGED?s("div",{staticClass:"user-info"},[s("Nav"),s("h3",[t._v("My Info")]),s("p",[s("strong",[t._v("User ID: ")]),t._v(" "+t._s(t.ALL_USERS[t.GET_USER_INFO].id))]),s("p",[s("strong",[t._v("User Name: ")]),t._v(t._s(t.ALL_USERS[t.GET_USER_INFO].name))]),s("p",[s("strong",[t._v("User Username: ")]),t._v(t._s(t.ALL_USERS[t.GET_USER_INFO].username))]),s("p",[s("strong",[t._v("User Email: ")]),t._v(t._s(t.ALL_USERS[t.GET_USER_INFO].email))]),s("p",[s("strong",[t._v("User Address: ")]),t._v(t._s(t.ALL_USERS[t.GET_USER_INFO].address.street))])],1):t._e()},B=[],K={name:"User",components:{Nav:b},computed:Object(c["c"])(["GET_USER_INFO","ALL_USERS","IS_LOGED"]),mounted:function(){!1===this.IS_LOGED&&this.$router.push({name:"login"})}},Q=K,V=(s("bf50"),Object(_["a"])(Q,Y,B,!1,null,"5078ff91",null)),W=V.exports,X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.IS_LOGED?s("div",{staticClass:"wrapper"},[s("Nav"),s("h3",[t._v("Info about user who left that post")]),s("p",[s("strong",[t._v("User Id: ")]),t._v(t._s(t.ALL_USERS[this.id-1].id))]),s("p",[s("strong",[t._v("User Name: ")]),t._v(t._s(t.ALL_USERS[this.id-1].name))]),s("p",[s("strong",[t._v("User UserName: ")]),t._v(t._s(t.ALL_USERS[this.id-1].username))]),s("p",[s("strong",[t._v("User Email: ")]),t._v(t._s(t.ALL_USERS[this.id-1].email))]),s("p",[s("strong",[t._v("User Address: ")]),t._v(t._s(t.ALL_USERS[this.id-1].address.street))]),s("ul",{staticClass:"post-list"},[s("label",{staticClass:"post-list__title"},[t._v("All User POSTS")]),t._l(this.arrayUserPosts,(function(e){return s("li",{staticClass:"post-list-item"},[s("h4",{staticClass:"post-list-item__title"},[t._v(t._s(e.title))]),s("p",{staticClass:"post-list-item__body"},[t._v(t._s(e.body))])])}))],2)],1):t._e()},Z=[],tt={name:"UserDetail",components:{Nav:b},data:function(){return{arrayUserPosts:[]}},props:["id"],computed:Object(c["c"])(["ALL_USERS","ALL_POSTS","IS_LOGED"]),mounted:function(){if(!1===this.IS_LOGED)this.$router.push({name:"login"});else for(var t=0;t<this.ALL_POSTS.length;t++)this.ALL_POSTS[t].userId===this.id&&this.arrayUserPosts.push(this.ALL_POSTS[t])}},et=tt,st=(s("30f6"),Object(_["a"])(et,X,Z,!1,null,"6ad54371",null)),rt=st.exports;r["a"].use(i["a"]);var nt=[{path:"/postsapp",name:"home",component:$},{path:"/postsapp/post/:id",name:"post",component:z,props:!0},{path:"/postsapp/user/:id",name:"user",component:W,props:!0},{path:"/postsapp/userinfo/:id",name:"userdetail",component:rt,props:!0},{path:"/",redirect:{name:"login"}},{path:"*",redirect:{name:"login"}},{path:"/postsapp/login",name:"login",component:m}],it=new i["a"]({mode:"history",base:"/",routes:nt}),at=it,ot=s("bc3a"),ut=s.n(ot),lt={state:{posts:[]},mutations:{UPDATE_POSTS:function(t,e){return t.posts=e}},actions:{GET_POSTS:function(t){var e=t.commit;return ut.a.get("https://jsonplaceholder.typicode.com/posts",{method:"GET"}).then((function(t){e("UPDATE_POSTS",t.data)}))}},getters:{ALL_POSTS:function(t){return t.posts}}},ct={state:{users:[],userLoged:{isLOGED:!1},loginedUser:{userId:null}},mutations:{UPDATE_USERS:function(t,e){return t.users=e},UPDATE_LOGED:function(t,e){return t.userLoged.isLOGED=e},UPDATE_USER_INFO:function(t,e){return t.loginedUser.userId=e}},actions:{GET_USERS:function(t){var e=t.commit;ut.a.get("https://jsonplaceholder.typicode.com/users",{method:"GET"}).then((function(t){e("UPDATE_USERS",t.data)}))},CHANGE_LOGED:function(t,e){var s=t.commit;s("UPDATE_LOGED",e)},SET_USER_INFO:function(t,e){var s=t.commit;s("UPDATE_USER_INFO",e)}},getters:{ALL_USERS:function(t){return t.users},IS_LOGED:function(t){return t.userLoged.isLOGED},GET_USER_INFO:function(t){return t.loginedUser.userId}}};r["a"].use(c["a"]);var pt=new c["a"].Store({modules:{posts:lt,users:ct}});r["a"].config.productionTip=!1,new r["a"]({router:at,store:pt,render:function(t){return t(n["default"])}}).$mount("#app")},"5a34":function(t,e,s){"use strict";s.d(e,"a",(function(){return r})),s.d(e,"b",(function(){return n}));var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container",attrs:{id:"app"}},[s("router-view")],1)},n=[]},"5c0b":function(t,e,s){"use strict";var r=s("9c0c"),n=s.n(r);n.a},"5cf1":function(t,e,s){},"6be9":function(t,e,s){"use strict";var r=s("f405"),n=s.n(r);n.a},"8f13":function(t,e,s){},"9c0c":function(t,e,s){},b28e:function(t,e,s){},bf50:function(t,e,s){"use strict";var r=s("8f13"),n=s.n(r);n.a},f405:function(t,e,s){}});
//# sourceMappingURL=app.25f24433.js.map