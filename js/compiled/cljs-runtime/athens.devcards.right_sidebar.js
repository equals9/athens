goog.provide('athens.devcards.right_sidebar');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.db');
goog.require('athens.devcards.buttons');
goog.require('athens.devcards.node_page');
goog.require('athens.style');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('devcards.core');
goog.require('posh.reagent');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('stylefy.core');
athens.devcards.right_sidebar.right_sidebar_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"600px",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid lightgray",new cljs.core.Keyword(null,"background-color","background-color",570434026),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971)),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"padding","padding",1660304693),"30px"], null);
athens.devcards.right_sidebar.content_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto"], null);
athens.devcards.right_sidebar.toggle_page_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"30px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null);
athens.devcards.right_sidebar.uids = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["OaSVyM_nr","p1Xv2crs3"], null);
athens.devcards.right_sidebar.right_sidebar_el = (function athens$devcards$right_sidebar$right_sidebar_el(state){
var uids = cljs.core.reduce_kv((function (m,_,p__68228){
var vec__68229 = p__68228;
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68229,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68229,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,uid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),false,new cljs.core.Keyword(null,"title","title",636505583),title], null));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.vec(cljs.core.deref((function (){var G__68232 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null)], null);
var G__68233 = athens.db.dsdb;
var G__68234 = athens.devcards.right_sidebar.uids;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__68232,G__68233,G__68234) : posh.reagent.q.call(null,G__68232,G__68233,G__68234));
})())));
var s = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uids","uids",-934670066),uids], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.right_sidebar.right_sidebar_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.right_sidebar.content_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$right_sidebar$right_sidebar_el_$_iter__68235(s__68236){
return (new cljs.core.LazySeq(null,(function (){
var s__68236__$1 = s__68236;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__68236__$1);
if(temp__5735__auto__){
var s__68236__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68236__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__68236__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__68238 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__68237 = (0);
while(true){
if((i__68237 < size__4581__auto__)){
var vec__68239 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__68237);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68239,(0),null);
var map__68242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68239,(1),null);
var map__68242__$1 = (((((!((map__68242 == null))))?(((((map__68242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68242):map__68242);
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68242__$1,new cljs.core.Keyword(null,"open","open",-1763596448));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68242__$1,new cljs.core.Keyword(null,"title","title",636505583));
cljs.core.chunk_append(b__68238,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.right_sidebar.toggle_page_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__68237,vec__68239,uid,map__68242,map__68242__$1,open,title,c__4580__auto__,size__4581__auto__,b__68238,s__68236__$2,temp__5735__auto__,uids,s){
return (function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(s,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uids","uids",-934670066),uid,new cljs.core.Keyword(null,"open","open",-1763596448)], null),cljs.core.not);
});})(i__68237,vec__68239,uid,map__68242,map__68242__$1,open,title,c__4580__auto__,size__4581__auto__,b__68238,s__68236__$2,temp__5735__auto__,uids,s))
], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.KeyboardArrowDown], null)], null),(cljs.core.truth_(open)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),title], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)));

var G__68251 = (i__68237 + (1));
i__68237 = G__68251;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68238),athens$devcards$right_sidebar$right_sidebar_el_$_iter__68235(cljs.core.chunk_rest(s__68236__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68238),null);
}
} else {
var vec__68244 = cljs.core.first(s__68236__$2);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68244,(0),null);
var map__68247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68244,(1),null);
var map__68247__$1 = (((((!((map__68247 == null))))?(((((map__68247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68247):map__68247);
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68247__$1,new cljs.core.Keyword(null,"open","open",-1763596448));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68247__$1,new cljs.core.Keyword(null,"title","title",636505583));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.right_sidebar.toggle_page_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__68244,uid,map__68247,map__68247__$1,open,title,s__68236__$2,temp__5735__auto__,uids,s){
return (function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(s,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uids","uids",-934670066),uid,new cljs.core.Keyword(null,"open","open",-1763596448)], null),cljs.core.not);
});})(vec__68244,uid,map__68247,map__68247__$1,open,title,s__68236__$2,temp__5735__auto__,uids,s))
], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.KeyboardArrowDown], null)], null),(cljs.core.truth_(open)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),title], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)),athens$devcards$right_sidebar$right_sidebar_el_$_iter__68235(cljs.core.rest(s__68236__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.Keyword(null,"uids","uids",-934670066).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(s)));
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
var G__68249 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-right-sidebar","toggle-right-sidebar",-1502056686)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__68249) : re_frame.core.dispatch.call(null,G__68249));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Close], null)], null)], null);
} else {
return null;
}
});
athens.devcards.right_sidebar.right_sidebar_component = (function athens$devcards$right_sidebar$right_sidebar_component(){
var state = cljs.core.deref((function (){var G__68250 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right-sidebar","right-sidebar",-603234618)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__68250) : re_frame.core.subscribe.call(null,G__68250));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.right_sidebar.right_sidebar_el,state], null);
});

//# sourceMappingURL=athens.devcards.right_sidebar.js.map
