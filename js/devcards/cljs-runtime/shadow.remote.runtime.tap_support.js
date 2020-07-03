goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__60716,p__60717){
var map__60718 = p__60716;
var map__60718__$1 = (((((!((map__60718 == null))))?(((((map__60718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60718):map__60718);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60718__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60719 = p__60717;
var map__60719__$1 = (((((!((map__60719 == null))))?(((((map__60719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60719):map__60719);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60719__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__60722,p__60723){
var map__60724 = p__60722;
var map__60724__$1 = (((((!((map__60724 == null))))?(((((map__60724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60724):map__60724);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60724__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60725 = p__60723;
var map__60725__$1 = (((((!((map__60725 == null))))?(((((map__60725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60725):map__60725);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60725__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__60730,p__60731){
var map__60732 = p__60730;
var map__60732__$1 = (((((!((map__60732 == null))))?(((((map__60732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60732):map__60732);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60732__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60732__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__60733 = p__60731;
var map__60733__$1 = (((((!((map__60733 == null))))?(((((map__60733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60733):map__60733);
var msg = map__60733__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60733__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__60736 = obj_support;
var map__60736__$1 = (((((!((map__60736 == null))))?(((((map__60736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60736):map__60736);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60736__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__60729_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60729_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60728_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60728_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__60738,tid){
var map__60739 = p__60738;
var map__60739__$1 = (((((!((map__60739 == null))))?(((((map__60739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60739):map__60739);
var svc = map__60739__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60739__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__60745 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__60746 = null;
var count__60747 = (0);
var i__60748 = (0);
while(true){
if((i__60748 < count__60747)){
var tid = chunk__60746.cljs$core$IIndexed$_nth$arity$2(null,i__60748);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60752 = seq__60745;
var G__60753 = chunk__60746;
var G__60754 = count__60747;
var G__60755 = (i__60748 + (1));
seq__60745 = G__60752;
chunk__60746 = G__60753;
count__60747 = G__60754;
i__60748 = G__60755;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60745);
if(temp__5735__auto__){
var seq__60745__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60745__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60745__$1);
var G__60756 = cljs.core.chunk_rest(seq__60745__$1);
var G__60757 = c__4609__auto__;
var G__60758 = cljs.core.count(c__4609__auto__);
var G__60759 = (0);
seq__60745 = G__60756;
chunk__60746 = G__60757;
count__60747 = G__60758;
i__60748 = G__60759;
continue;
} else {
var tid = cljs.core.first(seq__60745__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60760 = cljs.core.next(seq__60745__$1);
var G__60761 = null;
var G__60762 = (0);
var G__60763 = (0);
seq__60745 = G__60760;
chunk__60746 = G__60761;
count__60747 = G__60762;
i__60748 = G__60763;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__60741_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__60741_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__60742_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__60742_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__60743_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__60743_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__60744_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__60744_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__60749){
var map__60750 = p__60749;
var map__60750__$1 = (((((!((map__60750 == null))))?(((((map__60750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60750):map__60750);
var svc = map__60750__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60750__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60750__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
