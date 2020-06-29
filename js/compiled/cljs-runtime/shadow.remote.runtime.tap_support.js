goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__67961,p__67962){
var map__67963 = p__67961;
var map__67963__$1 = (((((!((map__67963 == null))))?(((((map__67963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67963):map__67963);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67963__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__67964 = p__67962;
var map__67964__$1 = (((((!((map__67964 == null))))?(((((map__67964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67964):map__67964);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67964__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__67967,p__67968){
var map__67969 = p__67967;
var map__67969__$1 = (((((!((map__67969 == null))))?(((((map__67969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67969):map__67969);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67969__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__67970 = p__67968;
var map__67970__$1 = (((((!((map__67970 == null))))?(((((map__67970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67970):map__67970);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67970__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__67975,p__67976){
var map__67977 = p__67975;
var map__67977__$1 = (((((!((map__67977 == null))))?(((((map__67977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67977):map__67977);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67977__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67977__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__67978 = p__67976;
var map__67978__$1 = (((((!((map__67978 == null))))?(((((map__67978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67978):map__67978);
var msg = map__67978__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67978__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__67981 = obj_support;
var map__67981__$1 = (((((!((map__67981 == null))))?(((((map__67981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67981):map__67981);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67981__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__67974_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__67974_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__67973_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__67973_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__67983,tid){
var map__67984 = p__67983;
var map__67984__$1 = (((((!((map__67984 == null))))?(((((map__67984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67984):map__67984);
var svc = map__67984__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67984__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__67990 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__67991 = null;
var count__67992 = (0);
var i__67993 = (0);
while(true){
if((i__67993 < count__67992)){
var tid = chunk__67991.cljs$core$IIndexed$_nth$arity$2(null,i__67993);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__67997 = seq__67990;
var G__67998 = chunk__67991;
var G__67999 = count__67992;
var G__68000 = (i__67993 + (1));
seq__67990 = G__67997;
chunk__67991 = G__67998;
count__67992 = G__67999;
i__67993 = G__68000;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67990);
if(temp__5735__auto__){
var seq__67990__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67990__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__67990__$1);
var G__68001 = cljs.core.chunk_rest(seq__67990__$1);
var G__68002 = c__4609__auto__;
var G__68003 = cljs.core.count(c__4609__auto__);
var G__68004 = (0);
seq__67990 = G__68001;
chunk__67991 = G__68002;
count__67992 = G__68003;
i__67993 = G__68004;
continue;
} else {
var tid = cljs.core.first(seq__67990__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68005 = cljs.core.next(seq__67990__$1);
var G__68006 = null;
var G__68007 = (0);
var G__68008 = (0);
seq__67990 = G__68005;
chunk__67991 = G__68006;
count__67992 = G__68007;
i__67993 = G__68008;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__67986_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__67986_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__67987_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__67987_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__67988_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__67988_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__67989_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__67989_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__67994){
var map__67995 = p__67994;
var map__67995__$1 = (((((!((map__67995 == null))))?(((((map__67995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67995):map__67995);
var svc = map__67995__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67995__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67995__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
