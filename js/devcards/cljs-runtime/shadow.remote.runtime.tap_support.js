goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__60474,p__60475){
var map__60476 = p__60474;
var map__60476__$1 = (((((!((map__60476 == null))))?(((((map__60476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60476):map__60476);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60476__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60477 = p__60475;
var map__60477__$1 = (((((!((map__60477 == null))))?(((((map__60477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60477):map__60477);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60477__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__60480,p__60481){
var map__60482 = p__60480;
var map__60482__$1 = (((((!((map__60482 == null))))?(((((map__60482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60482):map__60482);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60482__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60483 = p__60481;
var map__60483__$1 = (((((!((map__60483 == null))))?(((((map__60483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60483):map__60483);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60483__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__60488,p__60489){
var map__60490 = p__60488;
var map__60490__$1 = (((((!((map__60490 == null))))?(((((map__60490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60490):map__60490);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60490__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60490__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__60491 = p__60489;
var map__60491__$1 = (((((!((map__60491 == null))))?(((((map__60491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60491):map__60491);
var msg = map__60491__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60491__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__60494 = obj_support;
var map__60494__$1 = (((((!((map__60494 == null))))?(((((map__60494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60494):map__60494);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60494__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__60487_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60487_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60486_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60486_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__60496,tid){
var map__60497 = p__60496;
var map__60497__$1 = (((((!((map__60497 == null))))?(((((map__60497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60497):map__60497);
var svc = map__60497__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60497__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__60503 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__60504 = null;
var count__60505 = (0);
var i__60506 = (0);
while(true){
if((i__60506 < count__60505)){
var tid = chunk__60504.cljs$core$IIndexed$_nth$arity$2(null,i__60506);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60510 = seq__60503;
var G__60511 = chunk__60504;
var G__60512 = count__60505;
var G__60513 = (i__60506 + (1));
seq__60503 = G__60510;
chunk__60504 = G__60511;
count__60505 = G__60512;
i__60506 = G__60513;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60503);
if(temp__5735__auto__){
var seq__60503__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60503__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60503__$1);
var G__60514 = cljs.core.chunk_rest(seq__60503__$1);
var G__60515 = c__4609__auto__;
var G__60516 = cljs.core.count(c__4609__auto__);
var G__60517 = (0);
seq__60503 = G__60514;
chunk__60504 = G__60515;
count__60505 = G__60516;
i__60506 = G__60517;
continue;
} else {
var tid = cljs.core.first(seq__60503__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60518 = cljs.core.next(seq__60503__$1);
var G__60519 = null;
var G__60520 = (0);
var G__60521 = (0);
seq__60503 = G__60518;
chunk__60504 = G__60519;
count__60505 = G__60520;
i__60506 = G__60521;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__60499_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__60499_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__60500_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__60500_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__60501_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__60501_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__60502_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__60502_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__60507){
var map__60508 = p__60507;
var map__60508__$1 = (((((!((map__60508 == null))))?(((((map__60508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60508):map__60508);
var svc = map__60508__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60508__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60508__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
