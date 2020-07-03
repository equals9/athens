goog.provide('athens.devcards.daily_notes');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.util');
goog.require('athens.db');
goog.require('athens.devcards.node_page');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('devcards.core');
goog.require('garden.selectors');
goog.require('posh.reagent');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('stylefy.core');
athens.devcards.daily_notes.daily_notes_component = (function athens$devcards$daily_notes$daily_notes_component(){
var note_refs = (function (){var G__65919 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily-notes","daily-notes",302751021)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__65919) : re_frame.core.subscribe.call(null,G__65919));
})();
if(cljs.core.empty_QMARK_(cljs.core.deref(note_refs))){
var G__65920_65932 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-daily-note","next-daily-note",557965411),athens.util.get_day.cljs$core$IFn$_invoke$arity$0()], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__65920_65932) : re_frame.core.dispatch.call(null,G__65920_65932));
} else {
}

return (function (){
var notes = (function (){var G__65921 = athens.db.dsdb;
var G__65922 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__65923 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),x], null);
}),cljs.core.deref(note_refs));
return (posh.reagent.pull_many.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull_many.cljs$core$IFn$_invoke$arity$3(G__65921,G__65922,G__65923) : posh.reagent.pull_many.call(null,G__65921,G__65922,G__65923));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 0 auto",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)),(function (){var iter__4582__auto__ = (function athens$devcards$daily_notes$daily_notes_component_$_iter__65924(s__65925){
return (new cljs.core.LazySeq(null,(function (){
var s__65925__$1 = s__65925;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65925__$1);
if(temp__5735__auto__){
var s__65925__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65925__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65925__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65927 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65926 = (0);
while(true){
if((i__65926 < size__4581__auto__)){
var map__65928 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65926);
var map__65928__$1 = (((((!((map__65928 == null))))?(((((map__65928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65928):map__65928);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65928__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65928__$1,new cljs.core.Keyword("node","title","node/title",628940777));
cljs.core.chunk_append(b__65927,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"550px"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),title], null))], null)], null));

var G__65934 = (i__65926 + (1));
i__65926 = G__65934;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65927),athens$devcards$daily_notes$daily_notes_component_$_iter__65924(cljs.core.chunk_rest(s__65925__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65927),null);
}
} else {
var map__65930 = cljs.core.first(s__65925__$2);
var map__65930__$1 = (((((!((map__65930 == null))))?(((((map__65930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65930):map__65930);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65930__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65930__$1,new cljs.core.Keyword("node","title","node/title",628940777));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"550px"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),title], null))], null)], null),athens$devcards$daily_notes$daily_notes_component_$_iter__65924(cljs.core.rest(s__65925__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.deref(notes));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null)),"Preview"], null)], null)], null);
});
});

//# sourceMappingURL=athens.devcards.daily_notes.js.map
