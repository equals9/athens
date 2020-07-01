goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__60512,p__60513){
var map__60514 = p__60512;
var map__60514__$1 = (((((!((map__60514 == null))))?(((((map__60514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60514):map__60514);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60514__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60515 = p__60513;
var map__60515__$1 = (((((!((map__60515 == null))))?(((((map__60515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60515):map__60515);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60515__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__60518,p__60519){
var map__60520 = p__60518;
var map__60520__$1 = (((((!((map__60520 == null))))?(((((map__60520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60520):map__60520);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60520__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60521 = p__60519;
var map__60521__$1 = (((((!((map__60521 == null))))?(((((map__60521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60521):map__60521);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60521__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__60526,p__60527){
var map__60528 = p__60526;
var map__60528__$1 = (((((!((map__60528 == null))))?(((((map__60528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60528):map__60528);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60528__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60528__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__60529 = p__60527;
var map__60529__$1 = (((((!((map__60529 == null))))?(((((map__60529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60529):map__60529);
var msg = map__60529__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60529__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__60532 = obj_support;
var map__60532__$1 = (((((!((map__60532 == null))))?(((((map__60532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60532):map__60532);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60532__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__60525_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60525_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60524_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60524_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__60534,tid){
var map__60535 = p__60534;
var map__60535__$1 = (((((!((map__60535 == null))))?(((((map__60535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60535):map__60535);
var svc = map__60535__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60535__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__60541 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__60542 = null;
var count__60543 = (0);
var i__60544 = (0);
while(true){
if((i__60544 < count__60543)){
var tid = chunk__60542.cljs$core$IIndexed$_nth$arity$2(null,i__60544);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60548 = seq__60541;
var G__60549 = chunk__60542;
var G__60550 = count__60543;
var G__60551 = (i__60544 + (1));
seq__60541 = G__60548;
chunk__60542 = G__60549;
count__60543 = G__60550;
i__60544 = G__60551;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60541);
if(temp__5735__auto__){
var seq__60541__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60541__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60541__$1);
var G__60552 = cljs.core.chunk_rest(seq__60541__$1);
var G__60553 = c__4609__auto__;
var G__60554 = cljs.core.count(c__4609__auto__);
var G__60555 = (0);
seq__60541 = G__60552;
chunk__60542 = G__60553;
count__60543 = G__60554;
i__60544 = G__60555;
continue;
} else {
var tid = cljs.core.first(seq__60541__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60556 = cljs.core.next(seq__60541__$1);
var G__60557 = null;
var G__60558 = (0);
var G__60559 = (0);
seq__60541 = G__60556;
chunk__60542 = G__60557;
count__60543 = G__60558;
i__60544 = G__60559;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__60537_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__60537_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__60538_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__60538_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__60539_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__60539_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__60540_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__60540_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__60545){
var map__60546 = p__60545;
var map__60546__$1 = (((((!((map__60546 == null))))?(((((map__60546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60546):map__60546);
var svc = map__60546__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60546__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60546__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
