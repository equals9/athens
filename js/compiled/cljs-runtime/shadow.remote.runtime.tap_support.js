goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__68026,p__68027){
var map__68028 = p__68026;
var map__68028__$1 = (((((!((map__68028 == null))))?(((((map__68028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68028):map__68028);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68028__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__68029 = p__68027;
var map__68029__$1 = (((((!((map__68029 == null))))?(((((map__68029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68029):map__68029);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68029__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__68032,p__68033){
var map__68034 = p__68032;
var map__68034__$1 = (((((!((map__68034 == null))))?(((((map__68034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68034):map__68034);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68034__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__68035 = p__68033;
var map__68035__$1 = (((((!((map__68035 == null))))?(((((map__68035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68035):map__68035);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68035__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__68040,p__68041){
var map__68042 = p__68040;
var map__68042__$1 = (((((!((map__68042 == null))))?(((((map__68042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68042):map__68042);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68042__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68042__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__68043 = p__68041;
var map__68043__$1 = (((((!((map__68043 == null))))?(((((map__68043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68043):map__68043);
var msg = map__68043__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68043__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__68046 = obj_support;
var map__68046__$1 = (((((!((map__68046 == null))))?(((((map__68046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68046):map__68046);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68046__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__68039_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__68039_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__68038_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__68038_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__68048,tid){
var map__68049 = p__68048;
var map__68049__$1 = (((((!((map__68049 == null))))?(((((map__68049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68049):map__68049);
var svc = map__68049__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68049__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__68055 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__68056 = null;
var count__68057 = (0);
var i__68058 = (0);
while(true){
if((i__68058 < count__68057)){
var tid = chunk__68056.cljs$core$IIndexed$_nth$arity$2(null,i__68058);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68062 = seq__68055;
var G__68063 = chunk__68056;
var G__68064 = count__68057;
var G__68065 = (i__68058 + (1));
seq__68055 = G__68062;
chunk__68056 = G__68063;
count__68057 = G__68064;
i__68058 = G__68065;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68055);
if(temp__5735__auto__){
var seq__68055__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68055__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68055__$1);
var G__68066 = cljs.core.chunk_rest(seq__68055__$1);
var G__68067 = c__4609__auto__;
var G__68068 = cljs.core.count(c__4609__auto__);
var G__68069 = (0);
seq__68055 = G__68066;
chunk__68056 = G__68067;
count__68057 = G__68068;
i__68058 = G__68069;
continue;
} else {
var tid = cljs.core.first(seq__68055__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68070 = cljs.core.next(seq__68055__$1);
var G__68071 = null;
var G__68072 = (0);
var G__68073 = (0);
seq__68055 = G__68070;
chunk__68056 = G__68071;
count__68057 = G__68072;
i__68058 = G__68073;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__68051_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__68051_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__68052_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__68052_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__68053_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__68053_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__68054_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__68054_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__68059){
var map__68060 = p__68059;
var map__68060__$1 = (((((!((map__68060 == null))))?(((((map__68060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68060):map__68060);
var svc = map__68060__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68060__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68060__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
