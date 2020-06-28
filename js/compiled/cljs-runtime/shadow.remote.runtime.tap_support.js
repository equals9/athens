goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__67954,p__67955){
var map__67956 = p__67954;
var map__67956__$1 = (((((!((map__67956 == null))))?(((((map__67956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67956):map__67956);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67956__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__67957 = p__67955;
var map__67957__$1 = (((((!((map__67957 == null))))?(((((map__67957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67957):map__67957);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67957__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__67960,p__67961){
var map__67962 = p__67960;
var map__67962__$1 = (((((!((map__67962 == null))))?(((((map__67962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67962):map__67962);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67962__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__67963 = p__67961;
var map__67963__$1 = (((((!((map__67963 == null))))?(((((map__67963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67963):map__67963);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67963__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__67968,p__67969){
var map__67970 = p__67968;
var map__67970__$1 = (((((!((map__67970 == null))))?(((((map__67970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67970):map__67970);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67970__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67970__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__67971 = p__67969;
var map__67971__$1 = (((((!((map__67971 == null))))?(((((map__67971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67971):map__67971);
var msg = map__67971__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67971__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__67974 = obj_support;
var map__67974__$1 = (((((!((map__67974 == null))))?(((((map__67974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67974):map__67974);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67974__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__67967_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__67967_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__67966_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__67966_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__67976,tid){
var map__67977 = p__67976;
var map__67977__$1 = (((((!((map__67977 == null))))?(((((map__67977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67977):map__67977);
var svc = map__67977__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67977__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__67983 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__67984 = null;
var count__67985 = (0);
var i__67986 = (0);
while(true){
if((i__67986 < count__67985)){
var tid = chunk__67984.cljs$core$IIndexed$_nth$arity$2(null,i__67986);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__67990 = seq__67983;
var G__67991 = chunk__67984;
var G__67992 = count__67985;
var G__67993 = (i__67986 + (1));
seq__67983 = G__67990;
chunk__67984 = G__67991;
count__67985 = G__67992;
i__67986 = G__67993;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67983);
if(temp__5735__auto__){
var seq__67983__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67983__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__67983__$1);
var G__67994 = cljs.core.chunk_rest(seq__67983__$1);
var G__67995 = c__4609__auto__;
var G__67996 = cljs.core.count(c__4609__auto__);
var G__67997 = (0);
seq__67983 = G__67994;
chunk__67984 = G__67995;
count__67985 = G__67996;
i__67986 = G__67997;
continue;
} else {
var tid = cljs.core.first(seq__67983__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__67998 = cljs.core.next(seq__67983__$1);
var G__67999 = null;
var G__68000 = (0);
var G__68001 = (0);
seq__67983 = G__67998;
chunk__67984 = G__67999;
count__67985 = G__68000;
i__67986 = G__68001;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__67979_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__67979_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__67980_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__67980_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__67981_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__67981_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__67982_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__67982_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__67987){
var map__67988 = p__67987;
var map__67988__$1 = (((((!((map__67988 == null))))?(((((map__67988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67988):map__67988);
var svc = map__67988__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67988__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67988__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
