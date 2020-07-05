goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__60762,p__60763){
var map__60764 = p__60762;
var map__60764__$1 = (((((!((map__60764 == null))))?(((((map__60764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60764):map__60764);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60764__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60765 = p__60763;
var map__60765__$1 = (((((!((map__60765 == null))))?(((((map__60765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60765):map__60765);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60765__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__60768,p__60769){
var map__60770 = p__60768;
var map__60770__$1 = (((((!((map__60770 == null))))?(((((map__60770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60770):map__60770);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60770__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60771 = p__60769;
var map__60771__$1 = (((((!((map__60771 == null))))?(((((map__60771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60771):map__60771);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60771__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__60776,p__60777){
var map__60778 = p__60776;
var map__60778__$1 = (((((!((map__60778 == null))))?(((((map__60778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60778):map__60778);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60778__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60778__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__60779 = p__60777;
var map__60779__$1 = (((((!((map__60779 == null))))?(((((map__60779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60779):map__60779);
var msg = map__60779__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60779__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__60782 = obj_support;
var map__60782__$1 = (((((!((map__60782 == null))))?(((((map__60782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60782):map__60782);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60782__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__60775_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60775_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60774_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60774_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__60784,tid){
var map__60785 = p__60784;
var map__60785__$1 = (((((!((map__60785 == null))))?(((((map__60785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60785):map__60785);
var svc = map__60785__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60785__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__60791 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__60792 = null;
var count__60793 = (0);
var i__60794 = (0);
while(true){
if((i__60794 < count__60793)){
var tid = chunk__60792.cljs$core$IIndexed$_nth$arity$2(null,i__60794);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60798 = seq__60791;
var G__60799 = chunk__60792;
var G__60800 = count__60793;
var G__60801 = (i__60794 + (1));
seq__60791 = G__60798;
chunk__60792 = G__60799;
count__60793 = G__60800;
i__60794 = G__60801;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60791);
if(temp__5735__auto__){
var seq__60791__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60791__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60791__$1);
var G__60802 = cljs.core.chunk_rest(seq__60791__$1);
var G__60803 = c__4609__auto__;
var G__60804 = cljs.core.count(c__4609__auto__);
var G__60805 = (0);
seq__60791 = G__60802;
chunk__60792 = G__60803;
count__60793 = G__60804;
i__60794 = G__60805;
continue;
} else {
var tid = cljs.core.first(seq__60791__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60806 = cljs.core.next(seq__60791__$1);
var G__60807 = null;
var G__60808 = (0);
var G__60809 = (0);
seq__60791 = G__60806;
chunk__60792 = G__60807;
count__60793 = G__60808;
i__60794 = G__60809;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__60787_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__60787_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__60788_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__60788_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__60789_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__60789_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__60790_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__60790_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__60795){
var map__60796 = p__60795;
var map__60796__$1 = (((((!((map__60796 == null))))?(((((map__60796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60796):map__60796);
var svc = map__60796__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60796__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60796__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
