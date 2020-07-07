goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__60904,p__60905){
var map__60906 = p__60904;
var map__60906__$1 = (((((!((map__60906 == null))))?(((((map__60906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60906):map__60906);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60906__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60907 = p__60905;
var map__60907__$1 = (((((!((map__60907 == null))))?(((((map__60907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60907):map__60907);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60907__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__60910,p__60911){
var map__60912 = p__60910;
var map__60912__$1 = (((((!((map__60912 == null))))?(((((map__60912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60912):map__60912);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60912__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60913 = p__60911;
var map__60913__$1 = (((((!((map__60913 == null))))?(((((map__60913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60913):map__60913);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60913__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__60918,p__60919){
var map__60920 = p__60918;
var map__60920__$1 = (((((!((map__60920 == null))))?(((((map__60920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60920):map__60920);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60920__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60920__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__60921 = p__60919;
var map__60921__$1 = (((((!((map__60921 == null))))?(((((map__60921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60921):map__60921);
var msg = map__60921__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60921__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__60924 = obj_support;
var map__60924__$1 = (((((!((map__60924 == null))))?(((((map__60924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60924):map__60924);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60924__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__60917_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60917_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60916_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60916_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__60926,tid){
var map__60927 = p__60926;
var map__60927__$1 = (((((!((map__60927 == null))))?(((((map__60927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60927):map__60927);
var svc = map__60927__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60927__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__60933 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__60934 = null;
var count__60935 = (0);
var i__60936 = (0);
while(true){
if((i__60936 < count__60935)){
var tid = chunk__60934.cljs$core$IIndexed$_nth$arity$2(null,i__60936);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60940 = seq__60933;
var G__60941 = chunk__60934;
var G__60942 = count__60935;
var G__60943 = (i__60936 + (1));
seq__60933 = G__60940;
chunk__60934 = G__60941;
count__60935 = G__60942;
i__60936 = G__60943;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60933);
if(temp__5735__auto__){
var seq__60933__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60933__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60933__$1);
var G__60944 = cljs.core.chunk_rest(seq__60933__$1);
var G__60945 = c__4609__auto__;
var G__60946 = cljs.core.count(c__4609__auto__);
var G__60947 = (0);
seq__60933 = G__60944;
chunk__60934 = G__60945;
count__60935 = G__60946;
i__60936 = G__60947;
continue;
} else {
var tid = cljs.core.first(seq__60933__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60948 = cljs.core.next(seq__60933__$1);
var G__60949 = null;
var G__60950 = (0);
var G__60951 = (0);
seq__60933 = G__60948;
chunk__60934 = G__60949;
count__60935 = G__60950;
i__60936 = G__60951;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__60929_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__60929_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__60930_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__60930_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__60931_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__60931_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__60932_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__60932_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__60937){
var map__60938 = p__60937;
var map__60938__$1 = (((((!((map__60938 == null))))?(((((map__60938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60938):map__60938);
var svc = map__60938__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60938__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60938__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
