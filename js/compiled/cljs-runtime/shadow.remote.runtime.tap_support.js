goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__68250,p__68251){
var map__68252 = p__68250;
var map__68252__$1 = (((((!((map__68252 == null))))?(((((map__68252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68252):map__68252);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68252__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__68253 = p__68251;
var map__68253__$1 = (((((!((map__68253 == null))))?(((((map__68253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68253):map__68253);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68253__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__68256,p__68257){
var map__68258 = p__68256;
var map__68258__$1 = (((((!((map__68258 == null))))?(((((map__68258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68258):map__68258);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68258__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__68259 = p__68257;
var map__68259__$1 = (((((!((map__68259 == null))))?(((((map__68259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68259):map__68259);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68259__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__68264,p__68265){
var map__68266 = p__68264;
var map__68266__$1 = (((((!((map__68266 == null))))?(((((map__68266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68266):map__68266);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68266__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68266__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__68267 = p__68265;
var map__68267__$1 = (((((!((map__68267 == null))))?(((((map__68267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68267):map__68267);
var msg = map__68267__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68267__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__68270 = obj_support;
var map__68270__$1 = (((((!((map__68270 == null))))?(((((map__68270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68270):map__68270);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68270__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__68263_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__68263_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__68262_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__68262_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__68272,tid){
var map__68273 = p__68272;
var map__68273__$1 = (((((!((map__68273 == null))))?(((((map__68273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68273):map__68273);
var svc = map__68273__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68273__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__68279 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__68280 = null;
var count__68281 = (0);
var i__68282 = (0);
while(true){
if((i__68282 < count__68281)){
var tid = chunk__68280.cljs$core$IIndexed$_nth$arity$2(null,i__68282);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68286 = seq__68279;
var G__68287 = chunk__68280;
var G__68288 = count__68281;
var G__68289 = (i__68282 + (1));
seq__68279 = G__68286;
chunk__68280 = G__68287;
count__68281 = G__68288;
i__68282 = G__68289;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68279);
if(temp__5735__auto__){
var seq__68279__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68279__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68279__$1);
var G__68290 = cljs.core.chunk_rest(seq__68279__$1);
var G__68291 = c__4609__auto__;
var G__68292 = cljs.core.count(c__4609__auto__);
var G__68293 = (0);
seq__68279 = G__68290;
chunk__68280 = G__68291;
count__68281 = G__68292;
i__68282 = G__68293;
continue;
} else {
var tid = cljs.core.first(seq__68279__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68294 = cljs.core.next(seq__68279__$1);
var G__68295 = null;
var G__68296 = (0);
var G__68297 = (0);
seq__68279 = G__68294;
chunk__68280 = G__68295;
count__68281 = G__68296;
i__68282 = G__68297;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__68275_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__68275_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__68276_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__68276_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__68277_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__68277_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__68278_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__68278_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__68283){
var map__68284 = p__68283;
var map__68284__$1 = (((((!((map__68284 == null))))?(((((map__68284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68284):map__68284);
var svc = map__68284__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68284__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68284__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
