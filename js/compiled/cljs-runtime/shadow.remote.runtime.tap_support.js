goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__68245,p__68246){
var map__68247 = p__68245;
var map__68247__$1 = (((((!((map__68247 == null))))?(((((map__68247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68247):map__68247);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68247__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__68248 = p__68246;
var map__68248__$1 = (((((!((map__68248 == null))))?(((((map__68248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68248):map__68248);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68248__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__68251,p__68252){
var map__68253 = p__68251;
var map__68253__$1 = (((((!((map__68253 == null))))?(((((map__68253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68253):map__68253);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68253__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__68254 = p__68252;
var map__68254__$1 = (((((!((map__68254 == null))))?(((((map__68254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68254):map__68254);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68254__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__68259,p__68260){
var map__68261 = p__68259;
var map__68261__$1 = (((((!((map__68261 == null))))?(((((map__68261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68261):map__68261);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68261__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68261__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__68262 = p__68260;
var map__68262__$1 = (((((!((map__68262 == null))))?(((((map__68262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68262):map__68262);
var msg = map__68262__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68262__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__68265 = obj_support;
var map__68265__$1 = (((((!((map__68265 == null))))?(((((map__68265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68265):map__68265);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68265__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__68258_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__68258_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__68257_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__68257_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__68267,tid){
var map__68268 = p__68267;
var map__68268__$1 = (((((!((map__68268 == null))))?(((((map__68268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68268):map__68268);
var svc = map__68268__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68268__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__68274 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__68275 = null;
var count__68276 = (0);
var i__68277 = (0);
while(true){
if((i__68277 < count__68276)){
var tid = chunk__68275.cljs$core$IIndexed$_nth$arity$2(null,i__68277);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68281 = seq__68274;
var G__68282 = chunk__68275;
var G__68283 = count__68276;
var G__68284 = (i__68277 + (1));
seq__68274 = G__68281;
chunk__68275 = G__68282;
count__68276 = G__68283;
i__68277 = G__68284;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68274);
if(temp__5735__auto__){
var seq__68274__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68274__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68274__$1);
var G__68285 = cljs.core.chunk_rest(seq__68274__$1);
var G__68286 = c__4609__auto__;
var G__68287 = cljs.core.count(c__4609__auto__);
var G__68288 = (0);
seq__68274 = G__68285;
chunk__68275 = G__68286;
count__68276 = G__68287;
i__68277 = G__68288;
continue;
} else {
var tid = cljs.core.first(seq__68274__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68289 = cljs.core.next(seq__68274__$1);
var G__68290 = null;
var G__68291 = (0);
var G__68292 = (0);
seq__68274 = G__68289;
chunk__68275 = G__68290;
count__68276 = G__68291;
i__68277 = G__68292;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__68270_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__68270_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__68271_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__68271_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__68272_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__68272_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__68273_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__68273_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__68278){
var map__68279 = p__68278;
var map__68279__$1 = (((((!((map__68279 == null))))?(((((map__68279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68279):map__68279);
var svc = map__68279__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68279__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68279__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
