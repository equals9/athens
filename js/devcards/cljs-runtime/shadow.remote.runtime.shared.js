goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__60548,p__60549){
var map__60550 = p__60548;
var map__60550__$1 = (((((!((map__60550 == null))))?(((((map__60550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60550):map__60550);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60550__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60551 = p__60549;
var map__60551__$1 = (((((!((map__60551 == null))))?(((((map__60551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60551):map__60551);
var msg = map__60551__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60551__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__60554,p__60555){
var map__60556 = p__60554;
var map__60556__$1 = (((((!((map__60556 == null))))?(((((map__60556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60556):map__60556);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60556__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60557 = p__60555;
var map__60557__$1 = (((((!((map__60557 == null))))?(((((map__60557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60557):map__60557);
var msg = map__60557__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60557__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__60560 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60562 = null;
var count__60563 = (0);
var i__60564 = (0);
while(true){
if((i__60564 < count__60563)){
var map__60570 = chunk__60562.cljs$core$IIndexed$_nth$arity$2(null,i__60564);
var map__60570__$1 = (((((!((map__60570 == null))))?(((((map__60570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60570):map__60570);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60570__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60617 = seq__60560;
var G__60618 = chunk__60562;
var G__60619 = count__60563;
var G__60620 = (i__60564 + (1));
seq__60560 = G__60617;
chunk__60562 = G__60618;
count__60563 = G__60619;
i__60564 = G__60620;
continue;
} else {
var G__60621 = seq__60560;
var G__60622 = chunk__60562;
var G__60623 = count__60563;
var G__60624 = (i__60564 + (1));
seq__60560 = G__60621;
chunk__60562 = G__60622;
count__60563 = G__60623;
i__60564 = G__60624;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60560);
if(temp__5735__auto__){
var seq__60560__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60560__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60560__$1);
var G__60625 = cljs.core.chunk_rest(seq__60560__$1);
var G__60626 = c__4609__auto__;
var G__60627 = cljs.core.count(c__4609__auto__);
var G__60628 = (0);
seq__60560 = G__60625;
chunk__60562 = G__60626;
count__60563 = G__60627;
i__60564 = G__60628;
continue;
} else {
var map__60572 = cljs.core.first(seq__60560__$1);
var map__60572__$1 = (((((!((map__60572 == null))))?(((((map__60572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60572):map__60572);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60572__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60629 = cljs.core.next(seq__60560__$1);
var G__60630 = null;
var G__60631 = (0);
var G__60632 = (0);
seq__60560 = G__60629;
chunk__60562 = G__60630;
count__60563 = G__60631;
i__60564 = G__60632;
continue;
} else {
var G__60633 = cljs.core.next(seq__60560__$1);
var G__60634 = null;
var G__60635 = (0);
var G__60636 = (0);
seq__60560 = G__60633;
chunk__60562 = G__60634;
count__60563 = G__60635;
i__60564 = G__60636;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__60574,msg){
var map__60575 = p__60574;
var map__60575__$1 = (((((!((map__60575 == null))))?(((((map__60575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60575):map__60575);
var runtime = map__60575__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60575__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__60577,key,p__60578){
var map__60579 = p__60577;
var map__60579__$1 = (((((!((map__60579 == null))))?(((((map__60579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60579):map__60579);
var state = map__60579__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60579__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__60580 = p__60578;
var map__60580__$1 = (((((!((map__60580 == null))))?(((((map__60580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60580):map__60580);
var spec = map__60580__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60580__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__60583,key,spec){
var map__60584 = p__60583;
var map__60584__$1 = (((((!((map__60584 == null))))?(((((map__60584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60584):map__60584);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60584__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__60591){
var map__60592 = p__60591;
var map__60592__$1 = (((((!((map__60592 == null))))?(((((map__60592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60592):map__60592);
var runtime = map__60592__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60592__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__60586_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__60586_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__60587_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__60587_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__60588_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__60588_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__60589_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__60589_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__60590_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__60590_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__60594,key){
var map__60595 = p__60594;
var map__60595__$1 = (((((!((map__60595 == null))))?(((((map__60595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60595):map__60595);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60595__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__60597,p__60598){
var map__60599 = p__60597;
var map__60599__$1 = (((((!((map__60599 == null))))?(((((map__60599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60599):map__60599);
var runtime = map__60599__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60599__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60600 = p__60598;
var map__60600__$1 = (((((!((map__60600 == null))))?(((((map__60600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60600):map__60600);
var msg = map__60600__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60600__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__60603 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60605 = null;
var count__60606 = (0);
var i__60607 = (0);
while(true){
if((i__60607 < count__60606)){
var map__60613 = chunk__60605.cljs$core$IIndexed$_nth$arity$2(null,i__60607);
var map__60613__$1 = (((((!((map__60613 == null))))?(((((map__60613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60613):map__60613);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60613__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60637 = seq__60603;
var G__60638 = chunk__60605;
var G__60639 = count__60606;
var G__60640 = (i__60607 + (1));
seq__60603 = G__60637;
chunk__60605 = G__60638;
count__60606 = G__60639;
i__60607 = G__60640;
continue;
} else {
var G__60641 = seq__60603;
var G__60642 = chunk__60605;
var G__60643 = count__60606;
var G__60644 = (i__60607 + (1));
seq__60603 = G__60641;
chunk__60605 = G__60642;
count__60606 = G__60643;
i__60607 = G__60644;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60603);
if(temp__5735__auto__){
var seq__60603__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60603__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60603__$1);
var G__60645 = cljs.core.chunk_rest(seq__60603__$1);
var G__60646 = c__4609__auto__;
var G__60647 = cljs.core.count(c__4609__auto__);
var G__60648 = (0);
seq__60603 = G__60645;
chunk__60605 = G__60646;
count__60606 = G__60647;
i__60607 = G__60648;
continue;
} else {
var map__60615 = cljs.core.first(seq__60603__$1);
var map__60615__$1 = (((((!((map__60615 == null))))?(((((map__60615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60615):map__60615);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60615__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60649 = cljs.core.next(seq__60603__$1);
var G__60650 = null;
var G__60651 = (0);
var G__60652 = (0);
seq__60603 = G__60649;
chunk__60605 = G__60650;
count__60606 = G__60651;
i__60607 = G__60652;
continue;
} else {
var G__60653 = cljs.core.next(seq__60603__$1);
var G__60654 = null;
var G__60655 = (0);
var G__60656 = (0);
seq__60603 = G__60653;
chunk__60605 = G__60654;
count__60606 = G__60655;
i__60607 = G__60656;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
