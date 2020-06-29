goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__60485,p__60486){
var map__60487 = p__60485;
var map__60487__$1 = (((((!((map__60487 == null))))?(((((map__60487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60487):map__60487);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60487__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60488 = p__60486;
var map__60488__$1 = (((((!((map__60488 == null))))?(((((map__60488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60488):map__60488);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60488__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__60491,p__60492){
var map__60493 = p__60491;
var map__60493__$1 = (((((!((map__60493 == null))))?(((((map__60493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60493):map__60493);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60493__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60494 = p__60492;
var map__60494__$1 = (((((!((map__60494 == null))))?(((((map__60494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60494):map__60494);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60494__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__60499,p__60500){
var map__60501 = p__60499;
var map__60501__$1 = (((((!((map__60501 == null))))?(((((map__60501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60501):map__60501);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60501__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60501__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__60502 = p__60500;
var map__60502__$1 = (((((!((map__60502 == null))))?(((((map__60502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60502):map__60502);
var msg = map__60502__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60502__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__60505 = obj_support;
var map__60505__$1 = (((((!((map__60505 == null))))?(((((map__60505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60505):map__60505);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60505__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__60498_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60498_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60497_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60497_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__60507,tid){
var map__60508 = p__60507;
var map__60508__$1 = (((((!((map__60508 == null))))?(((((map__60508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60508):map__60508);
var svc = map__60508__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60508__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__60514 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__60515 = null;
var count__60516 = (0);
var i__60517 = (0);
while(true){
if((i__60517 < count__60516)){
var tid = chunk__60515.cljs$core$IIndexed$_nth$arity$2(null,i__60517);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60521 = seq__60514;
var G__60522 = chunk__60515;
var G__60523 = count__60516;
var G__60524 = (i__60517 + (1));
seq__60514 = G__60521;
chunk__60515 = G__60522;
count__60516 = G__60523;
i__60517 = G__60524;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60514);
if(temp__5735__auto__){
var seq__60514__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60514__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60514__$1);
var G__60525 = cljs.core.chunk_rest(seq__60514__$1);
var G__60526 = c__4609__auto__;
var G__60527 = cljs.core.count(c__4609__auto__);
var G__60528 = (0);
seq__60514 = G__60525;
chunk__60515 = G__60526;
count__60516 = G__60527;
i__60517 = G__60528;
continue;
} else {
var tid = cljs.core.first(seq__60514__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60529 = cljs.core.next(seq__60514__$1);
var G__60530 = null;
var G__60531 = (0);
var G__60532 = (0);
seq__60514 = G__60529;
chunk__60515 = G__60530;
count__60516 = G__60531;
i__60517 = G__60532;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__60510_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__60510_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__60511_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__60511_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__60512_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__60512_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__60513_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__60513_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__60518){
var map__60519 = p__60518;
var map__60519__$1 = (((((!((map__60519 == null))))?(((((map__60519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60519):map__60519);
var svc = map__60519__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60519__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60519__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
