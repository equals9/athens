goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__60524,p__60525){
var map__60526 = p__60524;
var map__60526__$1 = (((((!((map__60526 == null))))?(((((map__60526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60526):map__60526);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60526__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60527 = p__60525;
var map__60527__$1 = (((((!((map__60527 == null))))?(((((map__60527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60527):map__60527);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60527__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__60530,p__60531){
var map__60532 = p__60530;
var map__60532__$1 = (((((!((map__60532 == null))))?(((((map__60532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60532):map__60532);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60532__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60533 = p__60531;
var map__60533__$1 = (((((!((map__60533 == null))))?(((((map__60533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60533):map__60533);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60533__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__60538,p__60539){
var map__60540 = p__60538;
var map__60540__$1 = (((((!((map__60540 == null))))?(((((map__60540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60540):map__60540);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60540__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60540__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__60541 = p__60539;
var map__60541__$1 = (((((!((map__60541 == null))))?(((((map__60541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60541):map__60541);
var msg = map__60541__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60541__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__60544 = obj_support;
var map__60544__$1 = (((((!((map__60544 == null))))?(((((map__60544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60544):map__60544);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60544__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__60537_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60537_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60536_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60536_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__60546,tid){
var map__60547 = p__60546;
var map__60547__$1 = (((((!((map__60547 == null))))?(((((map__60547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60547):map__60547);
var svc = map__60547__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60547__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__60553 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__60554 = null;
var count__60555 = (0);
var i__60556 = (0);
while(true){
if((i__60556 < count__60555)){
var tid = chunk__60554.cljs$core$IIndexed$_nth$arity$2(null,i__60556);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60560 = seq__60553;
var G__60561 = chunk__60554;
var G__60562 = count__60555;
var G__60563 = (i__60556 + (1));
seq__60553 = G__60560;
chunk__60554 = G__60561;
count__60555 = G__60562;
i__60556 = G__60563;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60553);
if(temp__5735__auto__){
var seq__60553__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60553__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60553__$1);
var G__60564 = cljs.core.chunk_rest(seq__60553__$1);
var G__60565 = c__4609__auto__;
var G__60566 = cljs.core.count(c__4609__auto__);
var G__60567 = (0);
seq__60553 = G__60564;
chunk__60554 = G__60565;
count__60555 = G__60566;
i__60556 = G__60567;
continue;
} else {
var tid = cljs.core.first(seq__60553__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60568 = cljs.core.next(seq__60553__$1);
var G__60569 = null;
var G__60570 = (0);
var G__60571 = (0);
seq__60553 = G__60568;
chunk__60554 = G__60569;
count__60555 = G__60570;
i__60556 = G__60571;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__60549_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__60549_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__60550_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__60550_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__60551_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__60551_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__60552_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__60552_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__60557){
var map__60558 = p__60557;
var map__60558__$1 = (((((!((map__60558 == null))))?(((((map__60558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60558):map__60558);
var svc = map__60558__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60558__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60558__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
