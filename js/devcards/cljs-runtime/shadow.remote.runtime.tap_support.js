goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__60574,p__60575){
var map__60576 = p__60574;
var map__60576__$1 = (((((!((map__60576 == null))))?(((((map__60576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60576):map__60576);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60576__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60577 = p__60575;
var map__60577__$1 = (((((!((map__60577 == null))))?(((((map__60577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60577):map__60577);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60577__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__60580,p__60581){
var map__60582 = p__60580;
var map__60582__$1 = (((((!((map__60582 == null))))?(((((map__60582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60582):map__60582);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60582__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60583 = p__60581;
var map__60583__$1 = (((((!((map__60583 == null))))?(((((map__60583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60583):map__60583);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60583__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__60588,p__60589){
var map__60590 = p__60588;
var map__60590__$1 = (((((!((map__60590 == null))))?(((((map__60590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60590):map__60590);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60590__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60590__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__60591 = p__60589;
var map__60591__$1 = (((((!((map__60591 == null))))?(((((map__60591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60591):map__60591);
var msg = map__60591__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60591__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__60594 = obj_support;
var map__60594__$1 = (((((!((map__60594 == null))))?(((((map__60594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60594):map__60594);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60594__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__60587_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60587_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60586_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60586_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__60596,tid){
var map__60597 = p__60596;
var map__60597__$1 = (((((!((map__60597 == null))))?(((((map__60597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60597):map__60597);
var svc = map__60597__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60597__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__60603 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__60604 = null;
var count__60605 = (0);
var i__60606 = (0);
while(true){
if((i__60606 < count__60605)){
var tid = chunk__60604.cljs$core$IIndexed$_nth$arity$2(null,i__60606);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60610 = seq__60603;
var G__60611 = chunk__60604;
var G__60612 = count__60605;
var G__60613 = (i__60606 + (1));
seq__60603 = G__60610;
chunk__60604 = G__60611;
count__60605 = G__60612;
i__60606 = G__60613;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60603);
if(temp__5735__auto__){
var seq__60603__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60603__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60603__$1);
var G__60614 = cljs.core.chunk_rest(seq__60603__$1);
var G__60615 = c__4609__auto__;
var G__60616 = cljs.core.count(c__4609__auto__);
var G__60617 = (0);
seq__60603 = G__60614;
chunk__60604 = G__60615;
count__60605 = G__60616;
i__60606 = G__60617;
continue;
} else {
var tid = cljs.core.first(seq__60603__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60618 = cljs.core.next(seq__60603__$1);
var G__60619 = null;
var G__60620 = (0);
var G__60621 = (0);
seq__60603 = G__60618;
chunk__60604 = G__60619;
count__60605 = G__60620;
i__60606 = G__60621;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__60599_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__60599_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__60600_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__60600_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__60601_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__60601_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__60602_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__60602_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__60607){
var map__60608 = p__60607;
var map__60608__$1 = (((((!((map__60608 == null))))?(((((map__60608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60608):map__60608);
var svc = map__60608__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60608__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60608__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
