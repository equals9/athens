goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__68254,p__68255){
var map__68256 = p__68254;
var map__68256__$1 = (((((!((map__68256 == null))))?(((((map__68256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68256):map__68256);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68256__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__68257 = p__68255;
var map__68257__$1 = (((((!((map__68257 == null))))?(((((map__68257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68257):map__68257);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68257__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__68260,p__68261){
var map__68262 = p__68260;
var map__68262__$1 = (((((!((map__68262 == null))))?(((((map__68262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68262):map__68262);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68262__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__68263 = p__68261;
var map__68263__$1 = (((((!((map__68263 == null))))?(((((map__68263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68263):map__68263);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68263__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__68268,p__68269){
var map__68270 = p__68268;
var map__68270__$1 = (((((!((map__68270 == null))))?(((((map__68270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68270):map__68270);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68270__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68270__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__68271 = p__68269;
var map__68271__$1 = (((((!((map__68271 == null))))?(((((map__68271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68271):map__68271);
var msg = map__68271__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68271__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__68274 = obj_support;
var map__68274__$1 = (((((!((map__68274 == null))))?(((((map__68274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68274):map__68274);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68274__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__68267_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__68267_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__68266_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__68266_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__68276,tid){
var map__68277 = p__68276;
var map__68277__$1 = (((((!((map__68277 == null))))?(((((map__68277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68277):map__68277);
var svc = map__68277__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68277__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__68283 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__68284 = null;
var count__68285 = (0);
var i__68286 = (0);
while(true){
if((i__68286 < count__68285)){
var tid = chunk__68284.cljs$core$IIndexed$_nth$arity$2(null,i__68286);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68290 = seq__68283;
var G__68291 = chunk__68284;
var G__68292 = count__68285;
var G__68293 = (i__68286 + (1));
seq__68283 = G__68290;
chunk__68284 = G__68291;
count__68285 = G__68292;
i__68286 = G__68293;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68283);
if(temp__5735__auto__){
var seq__68283__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68283__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68283__$1);
var G__68294 = cljs.core.chunk_rest(seq__68283__$1);
var G__68295 = c__4609__auto__;
var G__68296 = cljs.core.count(c__4609__auto__);
var G__68297 = (0);
seq__68283 = G__68294;
chunk__68284 = G__68295;
count__68285 = G__68296;
i__68286 = G__68297;
continue;
} else {
var tid = cljs.core.first(seq__68283__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68298 = cljs.core.next(seq__68283__$1);
var G__68299 = null;
var G__68300 = (0);
var G__68301 = (0);
seq__68283 = G__68298;
chunk__68284 = G__68299;
count__68285 = G__68300;
i__68286 = G__68301;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__68279_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__68279_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__68280_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__68280_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__68281_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__68281_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__68282_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__68282_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__68287){
var map__68288 = p__68287;
var map__68288__$1 = (((((!((map__68288 == null))))?(((((map__68288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68288):map__68288);
var svc = map__68288__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68288__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68288__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
