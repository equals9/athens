goog.provide('athens.devcards.node_page');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.devcards.blocks');
goog.require('athens.patterns');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('devcards.core');
goog.require('komponentit.autosize');
goog.require('posh.reagent');
goog.require('re_frame.core');
athens.devcards.node_page.node_page_el = (function athens$devcards$node_page$node_page_el(p__65679,editing_uid,linked_refs,unlinked_refs){
var map__65680 = p__65679;
var map__65680__$1 = (((((!((map__65680 == null))))?(((((map__65680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65680):map__65680);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65680__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65680__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65680__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(uid,editing_uid))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),title,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact-event","transact-event",1188240621),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),e.target.value], null)], null)], null);
})], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),title], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__65683(s__65684){
return (new cljs.core.LazySeq(null,(function (){
var s__65684__$1 = s__65684;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65684__$1);
if(temp__5735__auto__){
var s__65684__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65684__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65684__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65686 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65685 = (0);
while(true){
if((i__65685 < size__4581__auto__)){
var child = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65685);
cljs.core.chunk_append(b__65686,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(child)], null)));

var G__65702 = (i__65685 + (1));
i__65685 = G__65702;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65686),athens$devcards$node_page$node_page_el_$_iter__65683(cljs.core.chunk_rest(s__65684__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65686),null);
}
} else {
var child = cljs.core.first(s__65684__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(child)], null)),athens$devcards$node_page$node_page_el_$_iter__65683(cljs.core.rest(s__65684__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Linked References"], null),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__65687(s__65688){
return (new cljs.core.LazySeq(null,(function (){
var s__65688__$1 = s__65688;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65688__$1);
if(temp__5735__auto__){
var s__65688__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65688__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65688__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65690 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65689 = (0);
while(true){
if((i__65689 < size__4581__auto__)){
var ref = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65689);
cljs.core.chunk_append(b__65690,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),ref], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ref], null)));

var G__65703 = (i__65689 + (1));
i__65689 = G__65703;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65690),athens$devcards$node_page$node_page_el_$_iter__65687(cljs.core.chunk_rest(s__65688__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65690),null);
}
} else {
var ref = cljs.core.first(s__65688__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),ref], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ref], null)),athens$devcards$node_page$node_page_el_$_iter__65687(cljs.core.rest(s__65688__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(linked_refs);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Unlinked References"], null),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__65691(s__65692){
return (new cljs.core.LazySeq(null,(function (){
var s__65692__$1 = s__65692;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65692__$1);
if(temp__5735__auto__){
var s__65692__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65692__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65692__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65694 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65693 = (0);
while(true){
if((i__65693 < size__4581__auto__)){
var ref = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65693);
cljs.core.chunk_append(b__65694,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),ref], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ref], null)));

var G__65704 = (i__65693 + (1));
i__65693 = G__65704;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65694),athens$devcards$node_page$node_page_el_$_iter__65691(cljs.core.chunk_rest(s__65692__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65694),null);
}
} else {
var ref = cljs.core.first(s__65692__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),ref], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ref], null)),athens$devcards$node_page$node_page_el_$_iter__65691(cljs.core.rest(s__65692__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(unlinked_refs);
})()], null)], null);
});
/**
 * One diff between datascript and posh: we don't have pull in q for posh
 *   https://github.com/mpdairy/posh/issues/21
 */
athens.devcards.node_page.node_page_component = (function athens$devcards$node_page$node_page_component(ident){
var node = athens.db.sort_block(cljs.core.deref((posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(athens.db.dsdb,athens.db.node_pull_pattern,ident) : posh.reagent.pull.call(null,athens.db.dsdb,athens.db.node_pull_pattern,ident))));
var title = new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(node);
var editing_uid = cljs.core.deref((function (){var G__65695 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__65695) : re_frame.core.subscribe.call(null,G__65695));
})());
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var linked_ref_entids = cljs.core.deref((function (){var G__65696 = athens.db.q_refs;
var G__65697 = athens.db.dsdb;
var G__65698 = athens.patterns.linked(title);
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__65696,G__65697,G__65698) : posh.reagent.q.call(null,G__65696,G__65697,G__65698));
})());
var unlinked_ref_entids = cljs.core.deref((function (){var G__65699 = athens.db.q_refs;
var G__65700 = athens.db.dsdb;
var G__65701 = athens.patterns.unlinked(title);
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__65699,G__65700,G__65701) : posh.reagent.q.call(null,G__65699,G__65700,G__65701));
})());
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_el,node,editing_uid,linked_ref_entids,unlinked_ref_entids], null);
}
});

//# sourceMappingURL=athens.devcards.node_page.js.map
