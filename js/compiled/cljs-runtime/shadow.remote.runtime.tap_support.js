goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__67991,p__67992){
var map__67993 = p__67991;
var map__67993__$1 = (((((!((map__67993 == null))))?(((((map__67993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67993):map__67993);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67993__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__67994 = p__67992;
var map__67994__$1 = (((((!((map__67994 == null))))?(((((map__67994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67994):map__67994);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67994__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__67997,p__67998){
var map__67999 = p__67997;
var map__67999__$1 = (((((!((map__67999 == null))))?(((((map__67999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67999):map__67999);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67999__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__68000 = p__67998;
var map__68000__$1 = (((((!((map__68000 == null))))?(((((map__68000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68000):map__68000);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68000__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__68005,p__68006){
var map__68007 = p__68005;
var map__68007__$1 = (((((!((map__68007 == null))))?(((((map__68007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68007):map__68007);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68007__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68007__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__68008 = p__68006;
var map__68008__$1 = (((((!((map__68008 == null))))?(((((map__68008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68008):map__68008);
var msg = map__68008__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68008__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__68011 = obj_support;
var map__68011__$1 = (((((!((map__68011 == null))))?(((((map__68011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68011):map__68011);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68011__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__68004_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__68004_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__68003_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__68003_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__68013,tid){
var map__68014 = p__68013;
var map__68014__$1 = (((((!((map__68014 == null))))?(((((map__68014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68014):map__68014);
var svc = map__68014__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68014__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__68020 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__68021 = null;
var count__68022 = (0);
var i__68023 = (0);
while(true){
if((i__68023 < count__68022)){
var tid = chunk__68021.cljs$core$IIndexed$_nth$arity$2(null,i__68023);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68027 = seq__68020;
var G__68028 = chunk__68021;
var G__68029 = count__68022;
var G__68030 = (i__68023 + (1));
seq__68020 = G__68027;
chunk__68021 = G__68028;
count__68022 = G__68029;
i__68023 = G__68030;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68020);
if(temp__5735__auto__){
var seq__68020__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68020__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68020__$1);
var G__68031 = cljs.core.chunk_rest(seq__68020__$1);
var G__68032 = c__4609__auto__;
var G__68033 = cljs.core.count(c__4609__auto__);
var G__68034 = (0);
seq__68020 = G__68031;
chunk__68021 = G__68032;
count__68022 = G__68033;
i__68023 = G__68034;
continue;
} else {
var tid = cljs.core.first(seq__68020__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68035 = cljs.core.next(seq__68020__$1);
var G__68036 = null;
var G__68037 = (0);
var G__68038 = (0);
seq__68020 = G__68035;
chunk__68021 = G__68036;
count__68022 = G__68037;
i__68023 = G__68038;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__68016_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__68016_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__68017_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__68017_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__68018_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__68018_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__68019_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__68019_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__68024){
var map__68025 = p__68024;
var map__68025__$1 = (((((!((map__68025 == null))))?(((((map__68025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68025):map__68025);
var svc = map__68025__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68025__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68025__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
