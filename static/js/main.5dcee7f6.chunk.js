(this.webpackJsonploginpage=this.webpackJsonploginpage||[]).push([[0],{2:function(e,t,a){},20:function(e,t,a){e.exports=a(36)},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(19),c=a.n(i),l=a(15),r=(a(2),a(38)),o=a(6),m=a(7),p=a(9),u=a(8),d=a(1);function f(e){var t=null;return t="signIn"===e.type?s.a.createElement(d.a,{className:"icons"}):s.a.createElement(d.b,{className:"icons"}),s.a.createElement("div",{onClick:e.onChange,className:"signIn"===e.type?"signIn":"signUp"},s.a.createElement("div",{className:"center"},t,s.a.createElement("p",null,"signIn"===e.type?"SIGN IN":"SIGN UP")))}var g=a(3);function h(e){return s.a.createElement("div",{className:"Input"},s.a.createElement("input",{id:e.name,autoComplete:"false",required:!0,type:e.type,placeholder:e.placeholder}))}function E(e){return s.a.createElement("div",{className:"submitButton"},s.a.createElement("button",{className:"signIn"===e.type?"submitSignIn":"submitSignUp"},s.a.createElement(d.c,null)))}var C=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).isFinished=function(){n.setState({animIsFinished:!0})},n.state={flexState:!1,animIsFinished:!1},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.setState({flexState:!this.state.flexState})}},{key:"render",value:function(){var e=this;return s.a.createElement(g.Motion,{style:{flexVal:Object(g.spring)(this.state.flexState?8:1)},onRest:this.isFinished},(function(t){var a=t.flexVal;return s.a.createElement("div",{className:"signIn"===e.props.type?"signInExpanded":"signUpExpanded",style:{flexGrow:"".concat(a)}},s.a.createElement(g.Motion,{style:{opacity:Object(g.spring)(e.state.flexState?1:0,{stiffness:300,damping:17}),y:Object(g.spring)(e.state.flexState?0:50,{stiffness:100,damping:17})}},(function(t){var a=t.opacity,n=t.y;return s.a.createElement("form",{className:"logForm",style:{WebkitTransform:"translate3d(0, ".concat(n,"px, 0)"),transform:"translate3d(0, ".concat(n,"px, 0)"),opacity:"".concat(a)}},s.a.createElement("h2",null,"signIn"===e.props.type?"SIGN IN":"SIGN UP"),s.a.createElement(h,{id:"login",type:"text",placeholder:"LOGIN"}),s.a.createElement(h,{id:"password",type:"password",placeholder:"PASSWORD"}),s.a.createElement(E,{type:e.props.type}),s.a.createElement("a",{href:"url",className:"forgotPass"},"signIn"===e.props.type?"Forgot password?":""))})))}))}}]),a}(n.Component);function k(e){var t=null;return t="signIn"===e.type?s.a.createElement(d.a,{className:"iconsCollapsed"}):s.a.createElement(d.b,{className:"iconsCollapsed"}),s.a.createElement("div",{onClick:e.onChange,className:"signIn"===e.type?"signInCollapsed":"signUpCollapsed"},t)}var y=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onReset=function(){n.setState({wasClickedLeft:!1,wasClickedRight:!1})},n.onClickLeft=function(){n.setState({wasClickedLeft:!n.state.wasClickedLeft},(function(){!0===this.state.wasClickedRight&&!0===this.state.wasClickedLeft&&this.setState({wasClickedRight:!1})}))},n.onClickRight=function(){n.setState({wasClickedRight:!n.state.wasClickedRight},(function(){!0===this.state.wasClickedRight&&!0===this.state.wasClickedLeft&&this.setState({wasClickedLeft:!1})}))},n.state={wasClickedLeft:!1,wasClickedRight:!1},n}return Object(m.a)(a,[{key:"render",value:function(){var e=null;return!1===this.state.wasClickedLeft&&!1===this.state.wasClickedRight?e=s.a.createElement("div",{className:"Modal"},s.a.createElement(f,{type:"signIn",onChange:this.onClickLeft}),s.a.createElement(f,{type:"signUp",onChange:this.onClickRight})):!1===this.state.wasClickedLeft&&!0===this.state.wasClickedRight?e=s.a.createElement("div",{className:"Modal"},s.a.createElement(k,{type:"signIn",onChange:this.onClickLeft}),s.a.createElement(C,{type:"signUp"})):!0===this.state.wasClickedLeft&&!1===this.state.wasClickedRight&&(e=s.a.createElement("div",{className:"Modal"},s.a.createElement(C,{type:"signIn"}),s.a.createElement(k,{type:"signUp",onChange:this.onClickRight}))),s.a.createElement("div",{className:"Modal"},e)}}]),a}(n.Component);function v(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(s.a.createElement("div",null)),o=Object(l.a)(c,1)[0];Object(n.useEffect)((function(){return i(!0)}),[a]);var m=function(){i(!1)};return a&&(o=s.a.createElement("div",{className:"Loginup"},s.a.createElement(y,{onSubmit:function(){return m}}))),s.a.createElement("div",{className:"Login"},s.a.createElement(r.a,{transitioname:"loginpagetransition",transitionentertimeout:500,transitionleavetimeout:300},o))}a(35);c.a.render(s.a.createElement(v,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.5dcee7f6.chunk.js.map