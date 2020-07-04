goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__60721,p__60722){
var map__60723 = p__60721;
var map__60723__$1 = (((((!((map__60723 == null))))?(((((map__60723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60723):map__60723);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60723__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60724 = p__60722;
var map__60724__$1 = (((((!((map__60724 == null))))?(((((map__60724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60724):map__60724);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60724__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__60727,p__60728){
var map__60729 = p__60727;
var map__60729__$1 = (((((!((map__60729 == null))))?(((((map__60729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60729):map__60729);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60729__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60730 = p__60728;
var map__60730__$1 = (((((!((map__60730 == null))))?(((((map__60730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60730):map__60730);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60730__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__60735,p__60736){
var map__60737 = p__60735;
var map__60737__$1 = (((((!((map__60737 == null))))?(((((map__60737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60737):map__60737);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60737__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60737__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__60738 = p__60736;
var map__60738__$1 = (((((!((map__60738 == null))))?(((((map__60738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60738):map__60738);
var msg = map__60738__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60738__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__60741 = obj_support;
var map__60741__$1 = (((((!((map__60741 == null))))?(((((map__60741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60741):map__60741);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60741__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__60734_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60734_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60733_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60733_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__60743,tid){
var map__60744 = p__60743;
var map__60744__$1 = (((((!((map__60744 == null))))?(((((map__60744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60744):map__60744);
var svc = map__60744__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60744__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__60750 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__60751 = null;
var count__60752 = (0);
var i__60753 = (0);
while(true){
if((i__60753 < count__60752)){
var tid = chunk__60751.cljs$core$IIndexed$_nth$arity$2(null,i__60753);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60757 = seq__60750;
var G__60758 = chunk__60751;
var G__60759 = count__60752;
var G__60760 = (i__60753 + (1));
seq__60750 = G__60757;
chunk__60751 = G__60758;
count__60752 = G__60759;
i__60753 = G__60760;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60750);
if(temp__5735__auto__){
var seq__60750__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60750__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60750__$1);
var G__60761 = cljs.core.chunk_rest(seq__60750__$1);
var G__60762 = c__4609__auto__;
var G__60763 = cljs.core.count(c__4609__auto__);
var G__60764 = (0);
seq__60750 = G__60761;
chunk__60751 = G__60762;
count__60752 = G__60763;
i__60753 = G__60764;
continue;
} else {
var tid = cljs.core.first(seq__60750__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60765 = cljs.core.next(seq__60750__$1);
var G__60766 = null;
var G__60767 = (0);
var G__60768 = (0);
seq__60750 = G__60765;
chunk__60751 = G__60766;
count__60752 = G__60767;
i__60753 = G__60768;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__60746_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__60746_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__60747_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__60747_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__60748_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__60748_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__60749_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__60749_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__60754){
var map__60755 = p__60754;
var map__60755__$1 = (((((!((map__60755 == null))))?(((((map__60755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60755):map__60755);
var svc = map__60755__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60755__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60755__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
