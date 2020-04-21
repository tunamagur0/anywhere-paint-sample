(this["webpackJsonpanywhere-paint-sample"]=this["webpackJsonpanywhere-paint-sample"]||[]).push([[0],{62:function(e,t,a){e.exports=a(87)},67:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(9),c=a.n(r),s=(a(67),a(11)),o=a(12),l=a(13),u=a(14),h=a(116),m=Object(n.createContext)({awPaint:null}),p=a(129),d=a(4),v=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).div=void 0,n.div=i.a.createRef(),n}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(){return this.props.isInitialized&&this.context.awPaint.createColorCircle(this.div.current),!0}},{key:"render",value:function(){return i.a.createElement(h.a,{item:!0,className:this.props.classes.container,xs:this.props.ratio,ref:this.div})}}]),a}(i.a.Component);v.contextType=m;var f=Object(d.a)((function(e){return Object(p.a)({container:{"& div":{background:"white",borderRadius:"10px"}}})}))(v),b=a(130),g=a(127),y=a(128),w=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).pencils=void 0,n.state={Pencil:"Pencil"},n.pencils=["Pencil","Eraser"],n}return Object(o.a)(a,[{key:"handleChange",value:function(e){var t=e.target.value;this.setState({Pencil:t}),this.context.awPaint.changeMode(t)}},{key:"render",value:function(){var e=this,t=this.pencils.map((function(t){return i.a.createElement(h.a,{key:t},i.a.createElement(b.a,{value:t,control:i.a.createElement(g.a,null),label:t,checked:t===e.state.Pencil,key:t,labelPlacement:"bottom"}))}));return i.a.createElement(h.a,{container:!0,item:!0,xs:this.props.ratio,className:this.props.classes.container,alignItems:"center",justify:"space-around"},i.a.createElement(y.a,{row:!0,onChange:function(t){return e.handleChange(t)}},t))}}]),a}(i.a.Component);w.contextType=m;var j=Object(d.a)((function(e){return Object(p.a)({container:{"& div":{background:"white",borderRadius:"10px"}}})}))(w),E=a(120),O=a(121),k=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).sizes=[1,2,3,4,5,7,9,11,13,15,17,20],n.state={size:1},n}return Object(o.a)(a,[{key:"handleChange",value:function(e){var t=parseInt(e.target.value,10);this.setState({size:t}),this.context.awPaint.setLineWidth(t)}},{key:"render",value:function(){var e=this,t=this.sizes.map((function(e){return i.a.createElement(E.a,{key:e},i.a.createElement(b.a,{value:e,label:"".concat(e,"px"),labelPlacement:"bottom",control:i.a.createElement(g.a,{color:"primary"}),key:e}))}));return i.a.createElement(h.a,{item:!0,xs:this.props.ratio},i.a.createElement(O.a,{style:{height:"80%"},className:this.props.classes.container},i.a.createElement(y.a,{row:!0,style:{width:"100%"},value:this.state.size,onChange:function(t){return e.handleChange(t)}},t)))}}]),a}(i.a.Component);k.contextType=m;var x=Object(d.a)((function(e){return Object(p.a)({container:{background:"white",borderRadius:"10px"}})}))(k),C=a(54),P=a(52),N=a(125),I=a(122),z=a(123),L=a(124),D=a(126),S=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"handleChange",value:function(e){var t=e.target.value;this.props.onChange(t)}},{key:"render",value:function(){var e=this;return i.a.createElement(I.a,{onClick:function(){return e.props.onClick()},className:this.props.classes.root,style:{border:"solid 1px ".concat(this.props.isSelected?"red":"black")}},i.a.createElement(z.a,{className:this.props.classes.media,image:this.props.image}),i.a.createElement("div",{className:this.props.classes.name},i.a.createElement(L.a,{className:this.props.classes.content},i.a.createElement(D.a,{variant:"outlined",value:this.props.name,onChange:function(t){return e.handleChange(t)}}))))}}]),a}(i.a.Component),R=Object(d.a)((function(e){return Object(p.a)({root:{display:"flex"},media:{width:"75%"},content:{display:"flex"}})}))(S),T=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).id=-1,n.state={images:null,names:null,current:0},n}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(){var e=this;return this.props.isInitialized&&-1===this.id&&(this.id=window.setInterval((function(){e.getNewData()}),1e3)),!0}},{key:"getNewData",value:function(){var e=this.context.awPaint.getLayerImages(),t=this.context.awPaint.getLayerNames();this.setState({images:e,names:t,current:this.context.awPaint.current})}},{key:"render",value:function(){var e=this,t=[];if(this.state.names){var a,n=Object(P.a)(this.state.names);try{var r=function(){var n,r=Object(C.a)(a.value,2),c=r[0],s=r[1],o=null===(n=e.state.images)||void 0===n?void 0:n.get(c);o&&t.unshift(i.a.createElement(E.a,{key:c},i.a.createElement(R,{layerNum:c,name:s,image:o,onClick:function(){e.context.awPaint.selectLayer(c),e.getNewData()},onChange:function(t){e.context.awPaint.renameLayer(c,t),e.getNewData()},isSelected:c===e.context.awPaint.selectingLayer,key:c})))};for(n.s();!(a=n.n()).done;)r()}catch(c){n.e(c)}finally{n.f()}}return i.a.createElement(h.a,{container:!0,item:!0,xs:this.props.ratio},i.a.createElement(h.a,{container:!0,item:!0},i.a.createElement(h.a,{container:!0,item:!0,justify:"space-around",xs:12,className:this.props.classes.buttons},i.a.createElement(h.a,{item:!0},i.a.createElement(N.a,{variant:"contained",onClick:function(){var t=e.context.awPaint.addLayer();e.context.awPaint.selectLayer(t),e.getNewData()}},"+")),i.a.createElement(h.a,null,i.a.createElement(N.a,{variant:"contained",onClick:function(){e.context.awPaint.removeLayer(e.context.awPaint.selectingLayer),e.getNewData()}},"-"))),i.a.createElement(h.a,{item:!0,xs:12},i.a.createElement(O.a,{cols:1,className:this.props.classes.layers},t))))}}]),a}(i.a.Component);T.contextType=m;var M=Object(d.a)((function(e){return Object(p.a)({buttons:{height:"10vh"},layers:{height:"80vh"}})}))(T),U=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"handleClick",value:function(e){e?this.context.awPaint.undo():this.context.awPaint.redo()}},{key:"render",value:function(){var e=this;return i.a.createElement(h.a,{container:!0,item:!0,className:this.props.classes.container,xs:this.props.ratio,alignItems:"center",justify:"space-around"},i.a.createElement(h.a,null,i.a.createElement(N.a,{onClick:function(){return e.handleClick(!0)}},"Undo")),i.a.createElement(h.a,null,i.a.createElement(N.a,{onClick:function(){return e.handleClick(!1)}},"Redo")))}}]),a}(i.a.Component);U.contextType=m;var W=Object(d.a)((function(e){return Object(p.a)({container:{"& button":{background:"white"}}})}))(U),B=a(53),J=a.n(B),$=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).container=void 0,n.container=i.a.createRef(),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.intialize(new J.a(this.container.current,this.props.width,this.props.height))}},{key:"render",value:function(){return i.a.createElement(h.a,{container:!0,item:!0,alignItems:"center",justify:"center",className:this.props.classes.canvasContainer},i.a.createElement(h.a,{item:!0,style:{width:this.props.width,height:this.props.height,border:"solid 1px black"},ref:this.container}))}}]),a}(i.a.Component);$.contextType=m;var q=Object(d.a)((function(e){return Object(p.a)({canvasContainer:{"& div":{background:"white"}}})}))($),A=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={awPaint:null,width:1200,height:800,isInitialized:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:this.props.classes.root},i.a.createElement(m.Provider,{value:{awPaint:this.state.awPaint}},i.a.createElement(h.a,{container:!0,className:this.props.classes.container},i.a.createElement(h.a,{container:!0,item:!0,xs:2,alignItems:"stretch",justify:"space-around"},i.a.createElement(f,{ratio:12,isInitialized:this.state.isInitialized}),i.a.createElement(x,{ratio:12})),i.a.createElement(h.a,{container:!0,item:!0,xs:8,direction:"column",alignItems:"stretch",justify:"space-around"},i.a.createElement(h.a,{container:!0,item:!0,justify:"center"},i.a.createElement(W,{ratio:4}),i.a.createElement(h.a,{item:!0,xs:4}),i.a.createElement(j,{ratio:4})),i.a.createElement(q,{width:this.state.width,height:this.state.height,intialize:function(t){e.setState({awPaint:t,isInitialized:!0})}}),i.a.createElement(h.a,{item:!0})),i.a.createElement(M,{ratio:2,isInitialized:this.state.isInitialized}))))}}]),a}(i.a.Component),F=Object(d.a)((function(e){return Object(p.a)({root:{width:"100vw",height:"100vh",background:"#818ea3",margin:0},container:{width:"100vw",height:"100vh",padding:"2.5vh 2.5vw 2.5vh 2.5vw"}})}))(A);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.d4f4219a.chunk.js.map