"use strict";(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[1634],{31634:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var a=n(67294),r=n(20749),i=n(37242),l=n(33754),s=n(36966),o=n(89725),m=n(64423).default.div.withConfig({displayName:"blogListstyle__BlogPageWrapper",componentId:"sc-9xipt1-0"})(["\n\t.blog-list-wrapper {\n\t\tmargin-bottom: 5rem;\n\t}\n\n\t.blog-lists{\n\t\tmargin-top: 5rem;\n\t\t\n\t}\n\t.post-block{\n\t\tbackground-color: ",";\n\t\twidth: 100%;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\t\n\t\t\n\t}\n\t.blog-lists{\n\t\tmargin-top: 5rem;\n\t}\n\t.post-thumb-block{\n\t\theight: 8rem;\n\t\twidth: 25%;\n\t\timg{\n\t\t\tpadding: 0px;\n\t\t\tmargin: 0px;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t}\n\t}\n\n\t.post-content-block{\n\t\theight: 8.5rem;\n\t\twidth: 75%;\n\t}\n\n\t.post-title{\n\t\tfont-size: 1.5rem;\n\t}\n\n\t.post-meta-block{\n\t\tflex-direction: row-reverse;\n\t\tp{\n\t\t\tfont-size: 1rem;\n\t\t\ttext-align: end;\n\t\t}\n\t\t.author{\n\t\t\tfont-size: 1rem;\n\t\t\ttext-align: start;\n\t\t\tmargin-bottom:0;\n\t\t}\n\t}\n\n\t@media screen and (max-width:1200px){\n\t\t.post-block{\n\t\t\theight: auto;\n\t\t}\n\t\t.post-thumb-block{\n\t\t\theight: 8rem;\n\t\n\t\t\timg{\n\t\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\t}\n\t\t}\n\t}\n\n\t@media screen and (max-width:992px){\n\t\t.post-block{\n\t\t\theight: 10rem;\n\t\t}\n\t\t.post-thumb-block{\n\t\t\theight: 15rem;\n\t\n\t\t\timg{\n\t\t\t\tmax-height:15rem;\n\t\t\t}\n\t\t}\n\t}\n\n\t@media screen and (max-width:500px){\n\t\t.post-block{\n\t\t\theight: 9rem;\n\t\t}\n\t\t.blog-list-wrapper{\n\t\t\tmargin: 0rem auto 5rem;\n\t\t}\n\t\t.blog-lists{\n\t\t\tmargin-top: 0rem;\n\t\t}\n\t\t.post-content-block{\n\t\t\theight: fit-content;\n\t\t}\n\t}\n\n\t@media only screen and (min-width: 575px) {\n    .tooltip-search {\n      margin-bottom: 0;\n    }\n  }\n  @media only screen and (min-width: 990px) {\n    .tooltip-search {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n    }\n  }\n"],(function(t){return t.theme.DarkTheme?"#212121":"#FFFFFF"})),c=n(91744),g=n(34945),h=n(60580),p=n(91988),d=function(t){var e=t.isListView,n=t.setListView,d=t.setGridView,u=t.pageContext,b=t.data,f=t.theme,w=(0,a.useState)(1),x=w[0],k=w[1],y=(0,a.useState)(10)[0],E=x*y,Z=E-y,v=b.allMdx,L=v.totalCount,P=v.nodes,C=(0,a.useState)(""),F=C[0],V=C[1],X=(0,p.Z)(P,V,F,["frontmatter","title"],"id"),z=X.queryResults,D=X.searchData,J=u.category?u.category:null,N=u.tag?u.tag:null,B=z.slice(Z,E);L=z.length;var S=N?L+" post"+(1===L?"":"s")+' tagged with "'+N+'"':J?L+" post"+(1===L?"":"s")+' categorized as "'+J+'"':"Blog",j=function(t){k(t)};return a.createElement(m,null,a.createElement(l.Z,{title:S,path:"Blog",img:c.Z,feedlink:"/blog/feed.xml"}),a.createElement("div",{className:"blog-list-wrapper"},a.createElement(i.W2,null,a.createElement(i.X2,null,a.createElement(i.JX,{sm:12,md:8},u.tag||u.category?a.createElement(h.Z,{searchQuery:F,searchData:D,paginate:j,currentPage:x}):a.createElement("div",{className:"tooltip-search"},a.createElement(r.Z,{isListView:e,setListView:n,setGridView:d}),a.createElement(h.Z,{searchQuery:F,searchData:D,paginate:j,currentPage:x})),a.createElement(i.X2,{className:"blog-lists"},B.length>0&&B.map((function(t){var e=t.id,n=t.frontmatter,r=t.fields;return a.createElement(i.JX,{xs:12,key:e},a.createElement(o.Z,{theme:f,frontmatter:n,fields:r}))})),a.createElement(i.JX,null,B.length>0&&a.createElement(g.Z,{postsPerPage:y,totalPosts:z.length,currentPage:x,paginate:j})))),a.createElement(i.JX,{sm:12,md:4},a.createElement(s.Z,{pageContext:u}))))))}}}]);
//# sourceMappingURL=1634-a5198747bf3f8d544d5e.js.map