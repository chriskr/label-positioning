(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(t,e,n){t.exports=n(34)},27:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(5),i=n.n(o),l=(n(27),n(4)),c=n(20),u=n(6),s=n(7),h=n(9),p=n(8),f=n(10),b=n(1),d=n(3),m=n(2),v=["Liam","Noah","William","James","Logan","Benjamin","Mason","Elijah","Oliver","Jacob","Lucas","Michael","Alexander","Ethan","Daniel","Matthew","Aiden","Henry","Joseph","Jackson","Samuel","Sebastian","David","Carter","Wyatt","Jayden","John","Owen","Dylan","Luke","Gabriel","Anthony","Isaac","Grayson","Jack","Julian","Levi","Christopher","Joshua","Andrew","Lincoln","Mateo","Ryan","Jaxon","Nathan","Aaron","Isaiah","Thomas","Charles","Caleb","Josiah","Christian","Hunter","Eli","Jonathan","Connor","Landon","Adrian","Asher","Cameron","Leo","Theodore","Jeremiah","Hudson","Robert","Easton","Nolan","Nicholas","Ezra","Colton","Angel","Brayden","Jordan","Dominic","Austin","Ian","Adam","Elias","Jaxson","Greyson","Jose","Ezekiel","Carson","Evan","Maverick","Bryson","Jace","Cooper","Xavier","Parker","Roman","Jason","Santiago","Chase","Sawyer","Gavin","Leonardo","Kayden","Ayden","Jameson","Kevin","Bentley","Zachary","Everett","Axel","Tyler","Micah","Vincent","Weston","Miles","Wesley","Nathaniel","Harrison","Brandon","Cole","Declan","Luis","Braxton","Damian","Silas","Tristan","Ryder","Bennett","George","Emmett","Justin","Kai","Max","Diego","Luca","Ryker","Carlos","Maxwell","Kingston","Ivan","Maddox","Juan","Ashton","Jayce","Rowan","Kaiden","Giovanni","Eric","Jesus","Calvin","Abel","King","Camden","Amir","Blake","Alex","Brody","Malachi","Emmanuel","Jonah","Beau","Jude","Antonio","Alan","Elliott","Elliot","Waylon","Xander","Timothy","Victor","Bryce","Finn","Brantley","Edward","Abraham","Patrick","Grant","Karter","Hayden","Richard","Miguel","Joel","Gael","Tucker","Rhett","Avery","Steven","Graham","Kaleb","Jasper","Jesse","Matteo","Dean","Zayden","Preston","August","Oscar","Jeremy","Alejandro","Marcus","Dawson","Lorenzo","Messiah","Zion","Maximus"],g=n(14),x=n(19),y=function(t,e,n){return{left:t.left+e,right:t.right+e,top:t.top+n,bottom:t.bottom+n}},M=function(t,e){var n=t.left,a=t.right,r=t.top,o=t.bottom,i=e.left,l=e.right;return{left:n-i,top:r-e.top,right:a+l,bottom:o+e.bottom}},O=function(t,e){var n=t.left,a=t.top,r=e.left,o=e.top;return Math.pow(Math.pow(n-r,2)+Math.pow(a-o,2),.5)},w=function(t){var e=t.left,n=t.right,a=t.top;return{left:e+=(n-e)/2,top:a+=(t.bottom-a)/2,right:e,bottom:a}},j=function(t,e){var n=t.left,a=t.right,r=t.top,o=t.bottom,i=e.left,l=e.right,c=e.top,u=e.bottom;return R(n,i,a,l,r,c,o,u)},E=function(t,e,n,a){for(var r=16,o=Object(l.a)({},t.rectWithMargin);e.some(function(t){return j(o,t.rectWithMargin)})&&r-- >0;)o=D({rect:o,layedOutRects:e,center:n,strategy:a});return o},C=function(t,e){var n=e.map(function(e){return{candidate:e,pysicalDistance:J(t,e),distance:O(t,w(e))}}).sort(function(t,e){return 0===t.pysicalDistance&&0===e.pysicalDistance?t.distance-e.distance:t.pysicalDistance-e.pysicalDistance});return Object(g.a)(n,1)[0].candidate},J=function(t,e){var n=t.left,a=t.top,r=e.left,o=e.top,i=e.right,l=e.bottom,c=r<=n&&i>=n?0:r>n?r-n:n-i,u=o<=a&&l>=a?0:o>a?o-a:a-l;return Math.pow(Math.pow(c,2)+Math.pow(u,2),.5)},D=function(t){var e=t.rect,n=t.layedOutRects,a=t.center,r=void 0===a?null:a,o=t.strategy,i=void 0===o?{}:o;return n.forEach(function(t){if(j(e,t.rectWithMargin)){var n=w(e),a=(r?n.left>r.left:i.moveRight)?t.rectWithMargin.right-e.left:t.rectWithMargin.left-e.right,o=(r?n.top>r.top:i.moveDown)?t.rectWithMargin.bottom-e.top:t.rectWithMargin.top-e.bottom;e=C(n,[y(e,a,0),y(e,0,o)])}}),e},R=function(t,e,n,a,r,o,i,l){return t<a&&e<n&&r<l&&o<i};function A(){var t=Object(b.a)(["\n  -webkit-appearance: none;\n  background: none;\n  border: 1px solid hsla(30, 56%, 20%, 0);\n  color: hsla(30, 56%, 20%, 0.7);\n  font: inherit;\n  height: 32px;\n  line-height: 1;\n  margin: 0;\n  padding: 0 8px;\n  text-align: center;\n  width: 2em;\n  &:hover {\n    background: white !important;\n    border-color: hsla(30, 56%, 20%, 0.3) !important;\n  }\n"]);return A=function(){return t},t}var k=function(){return null},B=m.b.input(A()),I=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(h.a)(this,Object(p.a)(e).call(this,t))).onInput=function(t){var e=t.target.value;return n.setState({value:e})},n.state={value:""},n.submit=function(){return n.props.onChange&&n.props.onChange(n.state.value)},n.onKeyDown=function(t){switch(t.key){case"Enter":n.submit()}},n.ref=r.a.createRef(),n.state={value:t.value},n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props,e=(t.onChange,t.placeholder);return r.a.createElement(B,{type:"text",value:this.state.value,placeholder:e,onInput:this.onInput,onChange:k,onKeyDown:this.onKeyDown})}}]),e}(r.a.Component);function W(){var t=Object(b.a)(["\n  background: none;\n  border: 1px solid hsla(30, 56%, 20%, 0.3);\n  font: inherit;\n  line-height: 34px;\n  padding: 0 16px;\n  margin: 0 20px;\n  border-radius: 16px;\n  color: hsla(30, 56%, 20%, 0.7);\n  height: 34px;\n  cursor: pointer;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  &:focus {\n    outline: none;\n  }\n"]);return W=function(){return t},t}function L(){var t=Object(b.a)(["\n  margin: 0 20px;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n"]);return L=function(){return t},t}function S(){var t=Object(b.a)(["\n  margin-top: 52px;\n  color: hsla(30, 56%, 20%, 0.7);\n"]);return S=function(){return t},t}function K(){var t=Object(b.a)(["\n  height: ","px;\n  width: ","px;\n  box-shadow: 0 0 0 12px hsl(30, 56%, 94%), 0 0 0 24px hsla(30, 56%, 20%, 0.15);\n  border-radius: 24px;\n  border: none;\n"]);return K=function(){return t},t}function G(){var t=Object(b.a)(["\n  cursor: pointer;\n  font-size: 10px;\n  font-weight: 300;\n  left: 0;\n  line-height: 1;\n  position: absolute;\n  text-align: center;\n  top: 0;\n  white-space: nowrap;\n"]);return G=function(){return t},t}function H(){var t=Object(b.a)(["\n        & circle {\n          opacity: 0.1;\n        }\n        & .label {\n          opacity: 0;\n        }\n      "]);return H=function(){return t},t}function T(){var t=Object(b.a)(["\n  position: relative;\n  width: ","px;\n  & circle,\n  & .label {\n    transition: opacity 0.25s;\n  }\n  ","\n"]);return T=function(){return t},t}function z(){var t=Object(b.a)(["\n  font-weight: 100;\n  margin: 0;\n\n  font-size: 1.5em;\n  color: hsla(30, 56%, 20%, 0.7);\n  padding: 16px 40px;\n  border-radius: 68px;\n  line-height: 1;\n  width: 858px;\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 12px;\n  font-stretch: expanded;\n  margin-bottom: 48px;\n"]);return z=function(){return t},t}function N(){var t=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n"]);return N=function(){return t},t}function _(){var t=Object(b.a)(["\n  stroke-width: 1;\n  stroke: hsla(0, 0%, 0%, 0.15);\n  cursor: pointer;\n"]);return _=function(){return t},t}var P=50,Z=function(t){return 10+(t-10)/40*14},V=m.b.circle(_()),X=m.b.div(N()),q=m.b.h1(z()),F=m.b.div(T(),800,function(t){return console.log(t.isHover),t.isHover&&Object(m.a)(H())}),U=m.b.div(G()),$=m.b.svg(K(),500,800),Q=m.b.div(S()),Y=m.b.label(L()),tt=m.b.button(W()),et=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50;return Object(d.range)(t).map(function(){return{radius:10+40*Math.random()|0,left:50+700*Math.random()|0,top:50+400*Math.random()|0,color:"hsla(".concat(360*Math.random()|0,", 100%, 50%, .3)"),label:{label:Object(d.range)(1+3*Math.random()|0).map(function(){return v[Math.random()*v.length|0]}).join(" "),left:0,top:0}}})},nt=function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(h.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(o)))).setExampleData=function(){var t=et(n.state.bubbleCount).sort(function(t,e){return e.radius-t.radius});n.setState({data:t,mode:0,hoverIndex:-1})},n.state={data:et(P).sort(function(t,e){return e.radius-t.radius}),mode:0,bubbleCount:P,hoverIndex:-1},n.svgRef=r.a.createRef(),n.containerRef=r.a.createRef(),n.hoverCircle=null,n._event=null,n.onMouseOver=function(t){n._event=t.nativeEvent,n.hanleMouseOver()},n.hanleMouseOver=Object(d.throttle)(function(){if(n._event){var t=n._event.target.closest("circle, .label");if(t!==n.hoverCircle){n.hoverCircle=t;var e=t?Array.from(t.parentElement.children).indexOf(t):-1;n.setState({hoverIndex:e})}n._event=null}},64),n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this,e={width:"$WIDTH}px",height:"".concat(500,"px")};return r.a.createElement(X,null,r.a.createElement(q,null,"Bubble Chart Labels"),r.a.createElement(F,{ref:this.containerRef,isHover:this.state.hoverIndex>-1,onMouseOver:this.onMouseOver},r.a.createElement($,{viewBox:"0 0 ".concat(800," ").concat(500),style:e,ref:this.svgRef},this.state.data.map(function(e,n){var a=e.radius,o=e.left,i=e.top,l=e.color,c=n===t.state.hoverIndex?{opacity:1}:{};return r.a.createElement(V,{r:a,cx:o,cy:i,fill:l,style:c})})),r.a.createElement("div",null,this.state.data.map(function(e,n){var a=e.label,o=a.label,i=a.top,l=a.left,c=e.radius,u={left:"".concat(l,"px"),top:"".concat(i,"px"),fontSize:"".concat(Z(c),"px")};return n===t.state.hoverIndex&&(u.opacity=1),r.a.createElement(U,{style:u,className:"label"},o)}))),r.a.createElement(Q,null,r.a.createElement(Y,null,"bubble count"),r.a.createElement(I,{value:this.state.bubbleCount,onChange:function(e){return t.setState({bubbleCount:e,data:et(e).sort(function(t,e){return e.radius-t.radius}),mode:0,hoverIndex:-1})}}),r.a.createElement(tt,{onClick:this.setExampleData},"Set example data")))}},{key:"positionLabels",value:function(){if(this.containerRef.current&&0===this.state.mode){var t=this.state.data,e=this.containerRef.current.getBoundingClientRect(),n=e.left,a=e.top,r=function(t,e,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{left:2,top:1,right:2,bottom:1},r=Object(d.sum)(t.map(function(t){var e=t.left;return e+(t.right-e)/2}))/t.length,o=Object(d.sum)(t.map(function(t){var e=t.top;return e+(t.bottom-e)/2}))/t.length,i={left:r,right:r,top:o,bottom:o},l=t.map(function(t,n){return{centerDistance:O(w(t),i),rect:t,rectWithMargin:M(t,a),index:n,bubble:e[n]}}).sort(function(t,e){return e.bubble.radius-t.bubble.radius}),c=Object(x.a)(n.map(function(t){return{rectWithMargin:t}}));l.forEach(function(t){var e=[[i,{}],[null,{moveRight:!1,moveDown:!1}],[null,{moveRight:!0,moveDown:!1}],[null,{moveRight:!1,moveDown:!0}],[null,{moveRight:!0,moveDown:!0}]].map(function(e){var n=Object(g.a)(e,2),a=n[0],r=n[1];return E(t,c,a,r)}),n={left:t.bubble.left,right:t.bubble.left,top:t.bubble.top,bottom:t.bubble.top},a=C(n,e);t.rectWithMargin=a,c.push(t)}),c=c.slice(n.length);var u={left:-a.left,right:-a.right,top:-a.top,bottom:-a.bottom};return c.sort(function(t,e){return t.index-e.index}).map(function(t){var e=t.rectWithMargin;return t.label,M(e,u)})}(Array.from(this.containerRef.current.querySelectorAll(".label")).map(function(e,r){var o=e.getBoundingClientRect(),i=t[r],l=i.left,c=i.top,u=l-n-(o.right-o.left)/2,s=c-a-(o.bottom-o.top)/2;return y(o,u,s)}),this.state.data.map(function(t){return{radius:t.radius,left:t.left,top:t.top}}),[{left:-20,right:0,top:-20,bottom:540},{left:800,right:820,top:-20,bottom:540},{left:0,right:800,top:-20,bottom:0},{left:0,right:800,top:500,bottom:520}]),o=this.state.data.map(function(t,e){var n=t.label.label,a=Object(c.a)(t,["label"]),o=r[e];return Object(l.a)({},a,{label:Object(l.a)({label:n},o)})});this.setState({data:o,mode:1,hoverIndex:-1})}}},{key:"componentDidMount",value:function(){this.positionLabels()}},{key:"componentDidUpdate",value:function(){this.positionLabels()}}]),e}(r.a.Component);i.a.render(r.a.createElement(nt,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.6d2ce8e2.chunk.js.map