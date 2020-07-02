goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__68058,p__68059){
var map__68060 = p__68058;
var map__68060__$1 = (((((!((map__68060 == null))))?(((((map__68060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68060):map__68060);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68060__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__68061 = p__68059;
var map__68061__$1 = (((((!((map__68061 == null))))?(((((map__68061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68061):map__68061);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68061__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__68064,p__68065){
var map__68066 = p__68064;
var map__68066__$1 = (((((!((map__68066 == null))))?(((((map__68066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68066):map__68066);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68066__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__68067 = p__68065;
var map__68067__$1 = (((((!((map__68067 == null))))?(((((map__68067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68067):map__68067);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68067__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__68072,p__68073){
var map__68074 = p__68072;
var map__68074__$1 = (((((!((map__68074 == null))))?(((((map__68074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68074):map__68074);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68074__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68074__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__68075 = p__68073;
var map__68075__$1 = (((((!((map__68075 == null))))?(((((map__68075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68075):map__68075);
var msg = map__68075__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68075__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__68078 = obj_support;
var map__68078__$1 = (((((!((map__68078 == null))))?(((((map__68078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68078):map__68078);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68078__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__68071_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__68071_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__68070_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__68070_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__68080,tid){
var map__68081 = p__68080;
var map__68081__$1 = (((((!((map__68081 == null))))?(((((map__68081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68081):map__68081);
var svc = map__68081__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68081__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__68087 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__68088 = null;
var count__68089 = (0);
var i__68090 = (0);
while(true){
if((i__68090 < count__68089)){
var tid = chunk__68088.cljs$core$IIndexed$_nth$arity$2(null,i__68090);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68094 = seq__68087;
var G__68095 = chunk__68088;
var G__68096 = count__68089;
var G__68097 = (i__68090 + (1));
seq__68087 = G__68094;
chunk__68088 = G__68095;
count__68089 = G__68096;
i__68090 = G__68097;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68087);
if(temp__5735__auto__){
var seq__68087__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68087__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68087__$1);
var G__68098 = cljs.core.chunk_rest(seq__68087__$1);
var G__68099 = c__4609__auto__;
var G__68100 = cljs.core.count(c__4609__auto__);
var G__68101 = (0);
seq__68087 = G__68098;
chunk__68088 = G__68099;
count__68089 = G__68100;
i__68090 = G__68101;
continue;
} else {
var tid = cljs.core.first(seq__68087__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68102 = cljs.core.next(seq__68087__$1);
var G__68103 = null;
var G__68104 = (0);
var G__68105 = (0);
seq__68087 = G__68102;
chunk__68088 = G__68103;
count__68089 = G__68104;
i__68090 = G__68105;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__68083_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__68083_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__68084_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__68084_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__68085_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__68085_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__68086_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__68086_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__68091){
var map__68092 = p__68091;
var map__68092__$1 = (((((!((map__68092 == null))))?(((((map__68092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68092):map__68092);
var svc = map__68092__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68092__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68092__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map