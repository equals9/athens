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
athens.devcards.node_page.node_page_el = (function athens$devcards$node_page$node_page_el(p__68203,editing_uid,linked_refs,unlinked_refs){
var map__68204 = p__68203;
var map__68204__$1 = (((((!((map__68204 == null))))?(((((map__68204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68204):map__68204);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68204__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68204__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68204__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(uid,editing_uid))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),title,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact-event","transact-event",1188240621),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),e.target.value], null)], null)], null);
})], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),title], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__68206(s__68207){
return (new cljs.core.LazySeq(null,(function (){
var s__68207__$1 = s__68207;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__68207__$1);
if(temp__5735__auto__){
var s__68207__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68207__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__68207__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__68209 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__68208 = (0);
while(true){
if((i__68208 < size__4581__auto__)){
var child = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__68208);
cljs.core.chunk_append(b__68209,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(child)], null)));

var G__68225 = (i__68208 + (1));
i__68208 = G__68225;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68209),athens$devcards$node_page$node_page_el_$_iter__68206(cljs.core.chunk_rest(s__68207__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68209),null);
}
} else {
var child = cljs.core.first(s__68207__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(child)], null)),athens$devcards$node_page$node_page_el_$_iter__68206(cljs.core.rest(s__68207__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Linked References"], null),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__68210(s__68211){
return (new cljs.core.LazySeq(null,(function (){
var s__68211__$1 = s__68211;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__68211__$1);
if(temp__5735__auto__){
var s__68211__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68211__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__68211__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__68213 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__68212 = (0);
while(true){
if((i__68212 < size__4581__auto__)){
var ref = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__68212);
cljs.core.chunk_append(b__68213,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),ref], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ref], null)));

var G__68226 = (i__68212 + (1));
i__68212 = G__68226;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68213),athens$devcards$node_page$node_page_el_$_iter__68210(cljs.core.chunk_rest(s__68211__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68213),null);
}
} else {
var ref = cljs.core.first(s__68211__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),ref], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ref], null)),athens$devcards$node_page$node_page_el_$_iter__68210(cljs.core.rest(s__68211__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(linked_refs);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Unlinked References"], null),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__68214(s__68215){
return (new cljs.core.LazySeq(null,(function (){
var s__68215__$1 = s__68215;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__68215__$1);
if(temp__5735__auto__){
var s__68215__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68215__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__68215__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__68217 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__68216 = (0);
while(true){
if((i__68216 < size__4581__auto__)){
var ref = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__68216);
cljs.core.chunk_append(b__68217,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),ref], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ref], null)));

var G__68227 = (i__68216 + (1));
i__68216 = G__68227;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68217),athens$devcards$node_page$node_page_el_$_iter__68214(cljs.core.chunk_rest(s__68215__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68217),null);
}
} else {
var ref = cljs.core.first(s__68215__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),ref], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ref], null)),athens$devcards$node_page$node_page_el_$_iter__68214(cljs.core.rest(s__68215__$2)));
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
var editing_uid = cljs.core.deref((function (){var G__68218 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__68218) : re_frame.core.subscribe.call(null,G__68218));
})());
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var linked_ref_entids = cljs.core.deref((function (){var G__68219 = athens.db.q_refs;
var G__68220 = athens.db.dsdb;
var G__68221 = athens.patterns.linked(title);
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__68219,G__68220,G__68221) : posh.reagent.q.call(null,G__68219,G__68220,G__68221));
})());
var unlinked_ref_entids = cljs.core.deref((function (){var G__68222 = athens.db.q_refs;
var G__68223 = athens.db.dsdb;
var G__68224 = athens.patterns.unlinked(title);
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__68222,G__68223,G__68224) : posh.reagent.q.call(null,G__68222,G__68223,G__68224));
})());
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_el,node,editing_uid,linked_ref_entids,unlinked_ref_entids], null);
}
});

//# sourceMappingURL=athens.devcards.node_page.js.map