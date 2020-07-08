goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__60939,p__60940){
var map__60941 = p__60939;
var map__60941__$1 = (((((!((map__60941 == null))))?(((((map__60941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60941):map__60941);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60941__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60942 = p__60940;
var map__60942__$1 = (((((!((map__60942 == null))))?(((((map__60942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60942):map__60942);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60942__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__60945,p__60946){
var map__60947 = p__60945;
var map__60947__$1 = (((((!((map__60947 == null))))?(((((map__60947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60947):map__60947);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60947__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60948 = p__60946;
var map__60948__$1 = (((((!((map__60948 == null))))?(((((map__60948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60948):map__60948);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60948__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__60953,p__60954){
var map__60955 = p__60953;
var map__60955__$1 = (((((!((map__60955 == null))))?(((((map__60955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60955):map__60955);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60955__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60955__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__60956 = p__60954;
var map__60956__$1 = (((((!((map__60956 == null))))?(((((map__60956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60956):map__60956);
var msg = map__60956__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60956__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__60959 = obj_support;
var map__60959__$1 = (((((!((map__60959 == null))))?(((((map__60959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60959):map__60959);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60959__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__60952_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60952_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60951_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60951_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__60961,tid){
var map__60962 = p__60961;
var map__60962__$1 = (((((!((map__60962 == null))))?(((((map__60962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60962):map__60962);
var svc = map__60962__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60962__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__60968 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__60969 = null;
var count__60970 = (0);
var i__60971 = (0);
while(true){
if((i__60971 < count__60970)){
var tid = chunk__60969.cljs$core$IIndexed$_nth$arity$2(null,i__60971);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60975 = seq__60968;
var G__60976 = chunk__60969;
var G__60977 = count__60970;
var G__60978 = (i__60971 + (1));
seq__60968 = G__60975;
chunk__60969 = G__60976;
count__60970 = G__60977;
i__60971 = G__60978;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60968);
if(temp__5735__auto__){
var seq__60968__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60968__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60968__$1);
var G__60979 = cljs.core.chunk_rest(seq__60968__$1);
var G__60980 = c__4609__auto__;
var G__60981 = cljs.core.count(c__4609__auto__);
var G__60982 = (0);
seq__60968 = G__60979;
chunk__60969 = G__60980;
count__60970 = G__60981;
i__60971 = G__60982;
continue;
} else {
var tid = cljs.core.first(seq__60968__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60983 = cljs.core.next(seq__60968__$1);
var G__60984 = null;
var G__60985 = (0);
var G__60986 = (0);
seq__60968 = G__60983;
chunk__60969 = G__60984;
count__60970 = G__60985;
i__60971 = G__60986;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__60964_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__60964_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__60965_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__60965_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__60966_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__60966_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__60967_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__60967_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__60972){
var map__60973 = p__60972;
var map__60973__$1 = (((((!((map__60973 == null))))?(((((map__60973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60973):map__60973);
var svc = map__60973__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60973__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60973__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
