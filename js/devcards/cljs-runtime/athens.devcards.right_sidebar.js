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
var uids = cljs.core.reduce_kv((function (m,_,p__60823){
var vec__60824 = p__60823;
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60824,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60824,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,uid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),false,new cljs.core.Keyword(null,"title","title",636505583),title], null));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.vec(cljs.core.deref((function (){var G__60827 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null)], null);
var G__60828 = athens.db.dsdb;
var G__60829 = athens.devcards.right_sidebar.uids;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__60827,G__60828,G__60829) : posh.reagent.q.call(null,G__60827,G__60828,G__60829));
})())));
var s = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uids","uids",-934670066),uids], null));
return (function (state__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(state__$1))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.right_sidebar.right_sidebar_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.right_sidebar.content_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$right_sidebar$right_sidebar_el_$_iter__60830(s__60831){
return (new cljs.core.LazySeq(null,(function (){
var s__60831__$1 = s__60831;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60831__$1);
if(temp__5735__auto__){
var s__60831__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60831__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60831__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60833 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60832 = (0);
while(true){
if((i__60832 < size__4581__auto__)){
var vec__60834 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60832);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60834,(0),null);
var map__60837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60834,(1),null);
var map__60837__$1 = (((((!((map__60837 == null))))?(((((map__60837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60837):map__60837);
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60837__$1,new cljs.core.Keyword(null,"open","open",-1763596448));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60837__$1,new cljs.core.Keyword(null,"title","title",636505583));
cljs.core.chunk_append(b__60833,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.right_sidebar.toggle_page_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60832,vec__60834,uid,map__60837,map__60837__$1,open,title,c__4580__auto__,size__4581__auto__,b__60833,s__60831__$2,temp__5735__auto__,uids,s){
return (function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(s,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uids","uids",-934670066),uid,new cljs.core.Keyword(null,"open","open",-1763596448)], null),cljs.core.not);
});})(i__60832,vec__60834,uid,map__60837,map__60837__$1,open,title,c__4580__auto__,size__4581__auto__,b__60833,s__60831__$2,temp__5735__auto__,uids,s))
], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.KeyboardArrowDown], null)], null),(cljs.core.truth_(open)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),title], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)));

var G__60853 = (i__60832 + (1));
i__60832 = G__60853;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60833),athens$devcards$right_sidebar$right_sidebar_el_$_iter__60830(cljs.core.chunk_rest(s__60831__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60833),null);
}
} else {
var vec__60839 = cljs.core.first(s__60831__$2);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60839,(0),null);
var map__60842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60839,(1),null);
var map__60842__$1 = (((((!((map__60842 == null))))?(((((map__60842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60842):map__60842);
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60842__$1,new cljs.core.Keyword(null,"open","open",-1763596448));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60842__$1,new cljs.core.Keyword(null,"title","title",636505583));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.right_sidebar.toggle_page_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__60839,uid,map__60842,map__60842__$1,open,title,s__60831__$2,temp__5735__auto__,uids,s){
return (function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(s,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uids","uids",-934670066),uid,new cljs.core.Keyword(null,"open","open",-1763596448)], null),cljs.core.not);
});})(vec__60839,uid,map__60842,map__60842__$1,open,title,s__60831__$2,temp__5735__auto__,uids,s))
], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.KeyboardArrowDown], null)], null),(cljs.core.truth_(open)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),title], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)),athens$devcards$right_sidebar$right_sidebar_el_$_iter__60830(cljs.core.rest(s__60831__$2)));
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
var G__60844 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-right-sidebar","toggle-right-sidebar",-1502056686)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__60844) : re_frame.core.dispatch.call(null,G__60844));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Close], null)], null)], null);
} else {
return null;
}
});
});
athens.devcards.right_sidebar.right_sidebar_component = (function athens$devcards$right_sidebar$right_sidebar_component(){
var state = cljs.core.deref((function (){var G__60845 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right-sidebar","right-sidebar",-603234618)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__60845) : re_frame.core.subscribe.call(null,G__60845));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.right_sidebar.right_sidebar_el,state], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.right_sidebar","athens.devcards.right_sidebar",-251367266),new cljs.core.Keyword(null,"Toggle","Toggle",-1755095056)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Toggle",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.right_sidebar !== 'undefined') && (typeof athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60846 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60846 = (function (meta60847){
this.meta60847 = meta60847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60848,meta60847__$1){
var self__ = this;
var _60848__$1 = this;
return (new athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60846(meta60847__$1));
}));

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60848){
var self__ = this;
var _60848__$1 = this;
return self__.meta60847;
}));

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60846.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60846.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38815__auto__,devcard_opts__38816__auto__){
var self__ = this;
var this__38815__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__38816__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__38834__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Toggle",new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
var G__60849 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-right-sidebar","toggle-right-sidebar",-1502056686)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__60849) : re_frame.core.dispatch.call(null,G__60849));
})], null)], null);
if(cljs.core.fn_QMARK_(v__38834__auto__)){
return (function (data_atom__38835__auto__,owner__38836__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__38834__auto__,data_atom__38835__auto__,owner__38836__auto__], null));
});
} else {
return reagent.core.as_element(v__38834__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__38816__auto__))], 0))], 0));
}));

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60846.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60847","meta60847",-471631663,null)], null);
}));

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60846.cljs$lang$type = true);

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60846.cljs$lang$ctorStr = "athens.devcards.right-sidebar/t_athens$devcards$right_sidebar60846");

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60846.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.right-sidebar/t_athens$devcards$right_sidebar60846");
}));

/**
 * Positional factory function for athens.devcards.right-sidebar/t_athens$devcards$right_sidebar60846.
 */
athens.devcards.right_sidebar.__GT_t_athens$devcards$right_sidebar60846 = (function athens$devcards$right_sidebar$__GT_t_athens$devcards$right_sidebar60846(meta60847){
return (new athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60846(meta60847));
});

}

return (new athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60846(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.right_sidebar","athens.devcards.right_sidebar",-251367266),new cljs.core.Keyword(null,"Right-Sidebar","Right-Sidebar",-1012062233)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Right-Sidebar",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.right_sidebar !== 'undefined') && (typeof athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60850 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60850 = (function (meta60851){
this.meta60851 = meta60851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60852,meta60851__$1){
var self__ = this;
var _60852__$1 = this;
return (new athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60850(meta60851__$1));
}));

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60852){
var self__ = this;
var _60852__$1 = this;
return self__.meta60851;
}));

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60850.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60850.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38815__auto__,devcard_opts__38816__auto__){
var self__ = this;
var this__38815__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__38816__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__38834__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"height","height",1025178622),"60vh",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-end"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.right_sidebar.right_sidebar_component], null)], null);
if(cljs.core.fn_QMARK_(v__38834__auto__)){
return (function (data_atom__38835__auto__,owner__38836__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__38834__auto__,data_atom__38835__auto__,owner__38836__auto__], null));
});
} else {
return reagent.core.as_element(v__38834__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__38816__auto__))], 0))], 0));
}));

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60850.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60851","meta60851",-942476575,null)], null);
}));

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60850.cljs$lang$type = true);

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60850.cljs$lang$ctorStr = "athens.devcards.right-sidebar/t_athens$devcards$right_sidebar60850");

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60850.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.right-sidebar/t_athens$devcards$right_sidebar60850");
}));

/**
 * Positional factory function for athens.devcards.right-sidebar/t_athens$devcards$right_sidebar60850.
 */
athens.devcards.right_sidebar.__GT_t_athens$devcards$right_sidebar60850 = (function athens$devcards$right_sidebar$__GT_t_athens$devcards$right_sidebar60850(meta60851){
return (new athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60850(meta60851));
});

}

return (new athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60850(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),false], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.right_sidebar.js.map
