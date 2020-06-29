goog.provide('athens.devcards.block_page');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.db');
goog.require('athens.devcards.blocks');
goog.require('athens.router');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('devcards.core');
goog.require('komponentit.autosize');
goog.require('posh.reagent');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('stylefy.core');
athens.devcards.block_page.block_page_el = (function athens$devcards$block_page$block_page_el(p__65661,parents,editing_uid){
var map__65662 = p__65661;
var map__65662__$1 = (((((!((map__65662 == null))))?(((((map__65662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65662):map__65662);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65662__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65662__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65662__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null)], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,">")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.ChevronRight),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null))], null);
} else {
return x;
}
}),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(">",(function (){var iter__4582__auto__ = (function athens$devcards$block_page$block_page_el_$_iter__65664(s__65665){
return (new cljs.core.LazySeq(null,(function (){
var s__65665__$1 = s__65665;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65665__$1);
if(temp__5735__auto__){
var s__65665__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65665__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65665__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65667 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65666 = (0);
while(true){
if((i__65666 < size__4581__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65666);
var map__65668 = p;
var map__65668__$1 = (((((!((map__65668 == null))))?(((((map__65668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65668):map__65668);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65668__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65668__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var string__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65668__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
cljs.core.chunk_append(b__65667,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65666,map__65668,map__65668__$1,title,uid__$1,string__$1,p,c__4580__auto__,size__4581__auto__,b__65667,s__65665__$2,temp__5735__auto__,map__65662,map__65662__$1,string,children,uid){
return (function (){
return athens.router.navigate_uid(uid__$1);
});})(i__65666,map__65668,map__65668__$1,title,uid__$1,string__$1,p,c__4580__auto__,size__4581__auto__,b__65667,s__65665__$2,temp__5735__auto__,map__65662,map__65662__$1,string,children,uid))
], null),(function (){var or__4185__auto__ = string__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return title;
}
})()], null));

var G__65685 = (i__65666 + (1));
i__65666 = G__65685;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65667),athens$devcards$block_page$block_page_el_$_iter__65664(cljs.core.chunk_rest(s__65665__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65667),null);
}
} else {
var p = cljs.core.first(s__65665__$2);
var map__65670 = p;
var map__65670__$1 = (((((!((map__65670 == null))))?(((((map__65670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65670):map__65670);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65670__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65670__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var string__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65670__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__65670,map__65670__$1,title,uid__$1,string__$1,p,s__65665__$2,temp__5735__auto__,map__65662,map__65662__$1,string,children,uid){
return (function (){
return athens.router.navigate_uid(uid__$1);
});})(map__65670,map__65670__$1,title,uid__$1,string__$1,p,s__65665__$2,temp__5735__auto__,map__65662,map__65662__$1,string,children,uid))
], null),(function (){var or__4185__auto__ = string__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return title;
}
})()], null),athens$devcards$block_page$block_page_el_$_iter__65664(cljs.core.rest(s__65665__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(parents);
})())),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"block-header"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(uid,editing_uid))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),string,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__65672 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact-event","transact-event",1188240621),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("block","string","block/string",-2066596447),e.target.value], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__65672) : re_frame.core.dispatch.call(null,G__65672));
})], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),["\u2022 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(string)].join('')], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$devcards$block_page$block_page_el_$_iter__65673(s__65674){
return (new cljs.core.LazySeq(null,(function (){
var s__65674__$1 = s__65674;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65674__$1);
if(temp__5735__auto__){
var s__65674__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65674__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65674__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65676 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65675 = (0);
while(true){
if((i__65675 < size__4581__auto__)){
var child = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65675);
cljs.core.chunk_append(b__65676,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(child)], null)));

var G__65686 = (i__65675 + (1));
i__65675 = G__65686;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65676),athens$devcards$block_page$block_page_el_$_iter__65673(cljs.core.chunk_rest(s__65674__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65676),null);
}
} else {
var child = cljs.core.first(s__65674__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(child)], null)),athens$devcards$block_page$block_page_el_$_iter__65673(cljs.core.rest(s__65674__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null)], null);
});
athens.devcards.block_page.block_page_component = (function athens$devcards$block_page$block_page_component(id){
var block = cljs.core.deref((function (){var G__65677 = athens.db.dsdb;
var G__65678 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Keyword("block","open","block/open",-1875254829),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
var G__65679 = id;
return (posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(G__65677,G__65678,G__65679) : posh.reagent.pull.call(null,G__65677,G__65678,G__65679));
})());
var parents = athens.db.shape_parent_query(cljs.core.deref((function (){var G__65680 = athens.db.dsdb;
var G__65681 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","_children","block/_children",1128070632),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
var G__65682 = id;
return (posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(G__65680,G__65681,G__65682) : posh.reagent.pull.call(null,G__65680,G__65681,G__65682));
})()));
var editing_uid = cljs.core.deref((function (){var G__65684 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__65684) : re_frame.core.subscribe.call(null,G__65684));
})());
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.block_page.block_page_el,block,parents,editing_uid], null);
});

//# sourceMappingURL=athens.devcards.block_page.js.map
