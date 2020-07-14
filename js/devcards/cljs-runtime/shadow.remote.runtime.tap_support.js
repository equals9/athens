goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__61060,p__61061){
var map__61062 = p__61060;
var map__61062__$1 = (((((!((map__61062 == null))))?(((((map__61062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61062):map__61062);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61062__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__61063 = p__61061;
var map__61063__$1 = (((((!((map__61063 == null))))?(((((map__61063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61063):map__61063);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61063__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__61066,p__61067){
var map__61068 = p__61066;
var map__61068__$1 = (((((!((map__61068 == null))))?(((((map__61068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61068):map__61068);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61068__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__61069 = p__61067;
var map__61069__$1 = (((((!((map__61069 == null))))?(((((map__61069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61069):map__61069);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61069__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__61074,p__61075){
var map__61076 = p__61074;
var map__61076__$1 = (((((!((map__61076 == null))))?(((((map__61076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61076):map__61076);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61076__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61076__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__61077 = p__61075;
var map__61077__$1 = (((((!((map__61077 == null))))?(((((map__61077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61077):map__61077);
var msg = map__61077__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61077__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__61080 = obj_support;
var map__61080__$1 = (((((!((map__61080 == null))))?(((((map__61080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61080):map__61080);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61080__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__61073_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__61073_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__61072_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__61072_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__61082,tid){
var map__61083 = p__61082;
var map__61083__$1 = (((((!((map__61083 == null))))?(((((map__61083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61083):map__61083);
var svc = map__61083__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61083__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__61089 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__61090 = null;
var count__61091 = (0);
var i__61092 = (0);
while(true){
if((i__61092 < count__61091)){
var tid = chunk__61090.cljs$core$IIndexed$_nth$arity$2(null,i__61092);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61096 = seq__61089;
var G__61097 = chunk__61090;
var G__61098 = count__61091;
var G__61099 = (i__61092 + (1));
seq__61089 = G__61096;
chunk__61090 = G__61097;
count__61091 = G__61098;
i__61092 = G__61099;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61089);
if(temp__5735__auto__){
var seq__61089__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61089__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61089__$1);
var G__61100 = cljs.core.chunk_rest(seq__61089__$1);
var G__61101 = c__4609__auto__;
var G__61102 = cljs.core.count(c__4609__auto__);
var G__61103 = (0);
seq__61089 = G__61100;
chunk__61090 = G__61101;
count__61091 = G__61102;
i__61092 = G__61103;
continue;
} else {
var tid = cljs.core.first(seq__61089__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61104 = cljs.core.next(seq__61089__$1);
var G__61105 = null;
var G__61106 = (0);
var G__61107 = (0);
seq__61089 = G__61104;
chunk__61090 = G__61105;
count__61091 = G__61106;
i__61092 = G__61107;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__61085_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__61085_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__61086_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__61086_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__61087_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__61087_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__61088_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__61088_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__61093){
var map__61094 = p__61093;
var map__61094__$1 = (((((!((map__61094 == null))))?(((((map__61094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61094):map__61094);
var svc = map__61094__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61094__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61094__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
