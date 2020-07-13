goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__61005,p__61006){
var map__61007 = p__61005;
var map__61007__$1 = (((((!((map__61007 == null))))?(((((map__61007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61007):map__61007);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61007__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__61008 = p__61006;
var map__61008__$1 = (((((!((map__61008 == null))))?(((((map__61008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61008):map__61008);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61008__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__61011,p__61012){
var map__61013 = p__61011;
var map__61013__$1 = (((((!((map__61013 == null))))?(((((map__61013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61013):map__61013);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61013__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__61014 = p__61012;
var map__61014__$1 = (((((!((map__61014 == null))))?(((((map__61014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61014):map__61014);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61014__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__61019,p__61020){
var map__61021 = p__61019;
var map__61021__$1 = (((((!((map__61021 == null))))?(((((map__61021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61021):map__61021);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61021__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61021__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__61022 = p__61020;
var map__61022__$1 = (((((!((map__61022 == null))))?(((((map__61022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61022):map__61022);
var msg = map__61022__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61022__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__61025 = obj_support;
var map__61025__$1 = (((((!((map__61025 == null))))?(((((map__61025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61025):map__61025);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61025__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__61018_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__61018_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__61017_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__61017_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__61027,tid){
var map__61028 = p__61027;
var map__61028__$1 = (((((!((map__61028 == null))))?(((((map__61028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61028):map__61028);
var svc = map__61028__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61028__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__61034 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__61035 = null;
var count__61036 = (0);
var i__61037 = (0);
while(true){
if((i__61037 < count__61036)){
var tid = chunk__61035.cljs$core$IIndexed$_nth$arity$2(null,i__61037);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61041 = seq__61034;
var G__61042 = chunk__61035;
var G__61043 = count__61036;
var G__61044 = (i__61037 + (1));
seq__61034 = G__61041;
chunk__61035 = G__61042;
count__61036 = G__61043;
i__61037 = G__61044;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61034);
if(temp__5735__auto__){
var seq__61034__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61034__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61034__$1);
var G__61045 = cljs.core.chunk_rest(seq__61034__$1);
var G__61046 = c__4609__auto__;
var G__61047 = cljs.core.count(c__4609__auto__);
var G__61048 = (0);
seq__61034 = G__61045;
chunk__61035 = G__61046;
count__61036 = G__61047;
i__61037 = G__61048;
continue;
} else {
var tid = cljs.core.first(seq__61034__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61049 = cljs.core.next(seq__61034__$1);
var G__61050 = null;
var G__61051 = (0);
var G__61052 = (0);
seq__61034 = G__61049;
chunk__61035 = G__61050;
count__61036 = G__61051;
i__61037 = G__61052;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__61030_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__61030_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__61031_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__61031_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__61032_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__61032_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__61033_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__61033_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__61038){
var map__61039 = p__61038;
var map__61039__$1 = (((((!((map__61039 == null))))?(((((map__61039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61039):map__61039);
var svc = map__61039__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61039__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61039__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
