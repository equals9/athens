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
var note_refs = (function (){var G__58189 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"daily-notes","daily-notes",302751021)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58189) : re_frame.core.subscribe.call(null,G__58189));
})();
if(cljs.core.empty_QMARK_(cljs.core.deref(note_refs))){
var G__58190_58206 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-daily-note","next-daily-note",557965411),athens.util.get_day.cljs$core$IFn$_invoke$arity$0()], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58190_58206) : re_frame.core.dispatch.call(null,G__58190_58206));
} else {
}

return (function (){
var notes = (function (){var G__58191 = athens.db.dsdb;
var G__58192 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__58193 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),x], null);
}),cljs.core.deref(note_refs));
return (posh.reagent.pull_many.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull_many.cljs$core$IFn$_invoke$arity$3(G__58191,G__58192,G__58193) : posh.reagent.pull_many.call(null,G__58191,G__58192,G__58193));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 0 auto",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)),(function (){var iter__4582__auto__ = (function athens$devcards$daily_notes$daily_notes_component_$_iter__58194(s__58195){
return (new cljs.core.LazySeq(null,(function (){
var s__58195__$1 = s__58195;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58195__$1);
if(temp__5735__auto__){
var s__58195__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58195__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58195__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58197 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58196 = (0);
while(true){
if((i__58196 < size__4581__auto__)){
var map__58198 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58196);
var map__58198__$1 = (((((!((map__58198 == null))))?(((((map__58198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58198):map__58198);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58198__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58198__$1,new cljs.core.Keyword("node","title","node/title",628940777));
cljs.core.chunk_append(b__58197,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"550px"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),title], null))], null)], null));

var G__58207 = (i__58196 + (1));
i__58196 = G__58207;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58197),athens$devcards$daily_notes$daily_notes_component_$_iter__58194(cljs.core.chunk_rest(s__58195__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58197),null);
}
} else {
var map__58200 = cljs.core.first(s__58195__$2);
var map__58200__$1 = (((((!((map__58200 == null))))?(((((map__58200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58200):map__58200);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58200__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58200__$1,new cljs.core.Keyword("node","title","node/title",628940777));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"550px"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),title], null))], null)], null),athens$devcards$daily_notes$daily_notes_component_$_iter__58194(cljs.core.rest(s__58195__$2)));
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
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.daily_notes","athens.devcards.daily_notes",1209821049),new cljs.core.Keyword(null,"Daily-Notes","Daily-Notes",1573091207)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Daily-Notes",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.daily_notes !== 'undefined') && (typeof athens.devcards.daily_notes.t_athens$devcards$daily_notes58202 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.daily_notes.t_athens$devcards$daily_notes58202 = (function (meta58203){
this.meta58203 = meta58203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.daily_notes.t_athens$devcards$daily_notes58202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58204,meta58203__$1){
var self__ = this;
var _58204__$1 = this;
return (new athens.devcards.daily_notes.t_athens$devcards$daily_notes58202(meta58203__$1));
}));

(athens.devcards.daily_notes.t_athens$devcards$daily_notes58202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58204){
var self__ = this;
var _58204__$1 = this;
return self__.meta58203;
}));

(athens.devcards.daily_notes.t_athens$devcards$daily_notes58202.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.daily_notes.t_athens$devcards$daily_notes58202.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__41676__auto__,devcard_opts__41677__auto__){
var self__ = this;
var this__41676__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__41677__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__41695__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.daily_notes.daily_notes_component], null);
if(cljs.core.fn_QMARK_(v__41695__auto__)){
return (function (data_atom__41696__auto__,owner__41697__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__41695__auto__,data_atom__41696__auto__,owner__41697__auto__], null));
});
} else {
return reagent.core.as_element(v__41695__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__41677__auto__))], 0))], 0));
}));

(athens.devcards.daily_notes.t_athens$devcards$daily_notes58202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58203","meta58203",-1377567540,null)], null);
}));

(athens.devcards.daily_notes.t_athens$devcards$daily_notes58202.cljs$lang$type = true);

(athens.devcards.daily_notes.t_athens$devcards$daily_notes58202.cljs$lang$ctorStr = "athens.devcards.daily-notes/t_athens$devcards$daily_notes58202");

(athens.devcards.daily_notes.t_athens$devcards$daily_notes58202.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.daily-notes/t_athens$devcards$daily_notes58202");
}));

/**
 * Positional factory function for athens.devcards.daily-notes/t_athens$devcards$daily_notes58202.
 */
athens.devcards.daily_notes.__GT_t_athens$devcards$daily_notes58202 = (function athens$devcards$daily_notes$__GT_t_athens$devcards$daily_notes58202(meta58203){
return (new athens.devcards.daily_notes.t_athens$devcards$daily_notes58202(meta58203));
});

}

return (new athens.devcards.daily_notes.t_athens$devcards$daily_notes58202(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.daily_notes.js.map
