goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__67979,p__67980){
var map__67981 = p__67979;
var map__67981__$1 = (((((!((map__67981 == null))))?(((((map__67981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67981):map__67981);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67981__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__67982 = p__67980;
var map__67982__$1 = (((((!((map__67982 == null))))?(((((map__67982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67982):map__67982);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67982__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__67985,p__67986){
var map__67987 = p__67985;
var map__67987__$1 = (((((!((map__67987 == null))))?(((((map__67987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67987):map__67987);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67987__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__67988 = p__67986;
var map__67988__$1 = (((((!((map__67988 == null))))?(((((map__67988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67988):map__67988);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67988__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__67993,p__67994){
var map__67995 = p__67993;
var map__67995__$1 = (((((!((map__67995 == null))))?(((((map__67995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67995):map__67995);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67995__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67995__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__67996 = p__67994;
var map__67996__$1 = (((((!((map__67996 == null))))?(((((map__67996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67996):map__67996);
var msg = map__67996__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67996__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__67999 = obj_support;
var map__67999__$1 = (((((!((map__67999 == null))))?(((((map__67999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67999):map__67999);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67999__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__67992_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__67992_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__67991_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__67991_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__68001,tid){
var map__68002 = p__68001;
var map__68002__$1 = (((((!((map__68002 == null))))?(((((map__68002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68002):map__68002);
var svc = map__68002__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68002__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__68008 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__68009 = null;
var count__68010 = (0);
var i__68011 = (0);
while(true){
if((i__68011 < count__68010)){
var tid = chunk__68009.cljs$core$IIndexed$_nth$arity$2(null,i__68011);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68015 = seq__68008;
var G__68016 = chunk__68009;
var G__68017 = count__68010;
var G__68018 = (i__68011 + (1));
seq__68008 = G__68015;
chunk__68009 = G__68016;
count__68010 = G__68017;
i__68011 = G__68018;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68008);
if(temp__5735__auto__){
var seq__68008__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68008__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68008__$1);
var G__68019 = cljs.core.chunk_rest(seq__68008__$1);
var G__68020 = c__4609__auto__;
var G__68021 = cljs.core.count(c__4609__auto__);
var G__68022 = (0);
seq__68008 = G__68019;
chunk__68009 = G__68020;
count__68010 = G__68021;
i__68011 = G__68022;
continue;
} else {
var tid = cljs.core.first(seq__68008__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68023 = cljs.core.next(seq__68008__$1);
var G__68024 = null;
var G__68025 = (0);
var G__68026 = (0);
seq__68008 = G__68023;
chunk__68009 = G__68024;
count__68010 = G__68025;
i__68011 = G__68026;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__68004_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__68004_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__68005_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__68005_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__68006_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__68006_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__68007_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__68007_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__68012){
var map__68013 = p__68012;
var map__68013__$1 = (((((!((map__68013 == null))))?(((((map__68013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68013):map__68013);
var svc = map__68013__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68013__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68013__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
