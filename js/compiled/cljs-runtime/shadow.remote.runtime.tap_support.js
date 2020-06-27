goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__67918,p__67919){
var map__67920 = p__67918;
var map__67920__$1 = (((((!((map__67920 == null))))?(((((map__67920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67920):map__67920);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67920__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__67921 = p__67919;
var map__67921__$1 = (((((!((map__67921 == null))))?(((((map__67921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67921):map__67921);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67921__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__67924,p__67925){
var map__67926 = p__67924;
var map__67926__$1 = (((((!((map__67926 == null))))?(((((map__67926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67926):map__67926);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67926__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__67927 = p__67925;
var map__67927__$1 = (((((!((map__67927 == null))))?(((((map__67927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67927):map__67927);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67927__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__67932,p__67933){
var map__67934 = p__67932;
var map__67934__$1 = (((((!((map__67934 == null))))?(((((map__67934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67934):map__67934);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67934__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67934__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__67935 = p__67933;
var map__67935__$1 = (((((!((map__67935 == null))))?(((((map__67935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67935):map__67935);
var msg = map__67935__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67935__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__67938 = obj_support;
var map__67938__$1 = (((((!((map__67938 == null))))?(((((map__67938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67938):map__67938);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67938__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__67931_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__67931_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__67930_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__67930_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__67940,tid){
var map__67941 = p__67940;
var map__67941__$1 = (((((!((map__67941 == null))))?(((((map__67941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67941):map__67941);
var svc = map__67941__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67941__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__67947 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__67948 = null;
var count__67949 = (0);
var i__67950 = (0);
while(true){
if((i__67950 < count__67949)){
var tid = chunk__67948.cljs$core$IIndexed$_nth$arity$2(null,i__67950);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__67954 = seq__67947;
var G__67955 = chunk__67948;
var G__67956 = count__67949;
var G__67957 = (i__67950 + (1));
seq__67947 = G__67954;
chunk__67948 = G__67955;
count__67949 = G__67956;
i__67950 = G__67957;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67947);
if(temp__5735__auto__){
var seq__67947__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67947__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__67947__$1);
var G__67958 = cljs.core.chunk_rest(seq__67947__$1);
var G__67959 = c__4609__auto__;
var G__67960 = cljs.core.count(c__4609__auto__);
var G__67961 = (0);
seq__67947 = G__67958;
chunk__67948 = G__67959;
count__67949 = G__67960;
i__67950 = G__67961;
continue;
} else {
var tid = cljs.core.first(seq__67947__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__67962 = cljs.core.next(seq__67947__$1);
var G__67963 = null;
var G__67964 = (0);
var G__67965 = (0);
seq__67947 = G__67962;
chunk__67948 = G__67963;
count__67949 = G__67964;
i__67950 = G__67965;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__67943_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__67943_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__67944_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__67944_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__67945_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__67945_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__67946_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__67946_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__67951){
var map__67952 = p__67951;
var map__67952__$1 = (((((!((map__67952 == null))))?(((((map__67952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67952):map__67952);
var svc = map__67952__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67952__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67952__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
