(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{39:function(e,t,s){},62:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),r=s(31),i=s.n(r),c=s(9),o=s(2),l=(s(39),s(1));var u=function(e){return console.log(e),Object(l.jsxs)("div",{className:"about__container",children:[Object(l.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(l.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})},j=s(11),m=s.n(j),d=s(20),p=s(14),h=s(15),v=s(17),b=s(16),O=s(32),x=s.n(O),f=s(6),g=s.n(f);s(62);function y(e){var t=e.id,s=e.year,n=e.title,a=e.summary,r=e.poster,i=e.genres,o=e.url;return Object(l.jsx)(c.b,{to:{pathname:"/Movie/".concat(t),state:{title:n,year:s,summary:a,poster:r,genres:i,url:o}},children:Object(l.jsxs)("div",{className:"movies__movies",children:[Object(l.jsx)("div",{className:"movies__poster",children:Object(l.jsx)("img",{src:r,alt:n,title:n})}),Object(l.jsxs)("div",{className:"movies__data",children:[Object(l.jsx)("h3",{className:"movies__title",children:n}),Object(l.jsx)("h4",{className:"movies__year",children:s}),Object(l.jsx)("ul",{className:"genres",children:i.map((function(e,t){return Object(l.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(l.jsx)("p",{className:"movies__summary",children:a.slice(0,140)+"..."})]})]})})}y.propsTypes={id:g.a.number.isRequired,year:g.a.number.isRequired,title:g.a.string.isRequired,summary:g.a.string.isRequired,poster:g.a.string.isRequired,genres:g.a.arrayOf(g.a.string).isRequired};var _=y,N=(s(66),function(e){Object(v.a)(s,e);var t=Object(b.a)(s);function s(){var e;Object(p.a)(this,s);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(m.a.mark((function t(){var s,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,n=s.data.data.movies,console.log(n),e.setState({movies:n,isLoading:!1});case 6:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=Object(d.a)(m.a.mark((function e(){var t=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){t.setState({isLoading:!1})}),6e3),this.getMovies();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("section",{className:"container",children:t?Object(l.jsx)("div",{className:"loader__text",children:'"Loading..."'}):Object(l.jsx)("div",{className:"movies",children:s.map((function(e){return Object(l.jsx)(_,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres,url:e.url},e.id)}))})})})}}]),s}(a.a.Component)),w=N;s(67);var k=function(){return Object(l.jsxs)("div",{className:"Navigation",children:[Object(l.jsx)(c.b,{to:"/",children:"Home"}),Object(l.jsx)(c.b,{to:"/about",children:"About"})]})},q=function(e){Object(v.a)(s,e);var t=Object(b.a)(s);function s(){return Object(p.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,s=e.history;void 0===t.state&&s.push("/")}},{key:"render",value:function(){var e=this.props.location.state.title;return console.log(this.props),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"movies_movies",children:[Object(l.jsx)("div",{className:"dd"}),Object(l.jsx)("span",{children:e})]})})}}]),s}(a.a.Component),M=q;var R=function(){return Object(l.jsxs)(c.a,{children:[Object(l.jsx)(k,{}),Object(l.jsx)(o.a,{path:"/",exact:!0,component:w}),Object(l.jsx)(o.a,{path:"/about",component:u}),Object(l.jsx)(o.a,{path:"/movie/:id",component:M})]})};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(R,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.6d58d5ac.chunk.js.map