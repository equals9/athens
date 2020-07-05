goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__68294,p__68295){
var map__68296 = p__68294;
var map__68296__$1 = (((((!((map__68296 == null))))?(((((map__68296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68296):map__68296);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68296__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__68297 = p__68295;
var map__68297__$1 = (((((!((map__68297 == null))))?(((((map__68297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68297):map__68297);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68297__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__68300,p__68301){
var map__68302 = p__68300;
var map__68302__$1 = (((((!((map__68302 == null))))?(((((map__68302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68302):map__68302);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68302__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__68303 = p__68301;
var map__68303__$1 = (((((!((map__68303 == null))))?(((((map__68303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68303):map__68303);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68303__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__68308,p__68309){
var map__68310 = p__68308;
var map__68310__$1 = (((((!((map__68310 == null))))?(((((map__68310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68310):map__68310);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68310__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68310__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__68311 = p__68309;
var map__68311__$1 = (((((!((map__68311 == null))))?(((((map__68311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68311):map__68311);
var msg = map__68311__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68311__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__68314 = obj_support;
var map__68314__$1 = (((((!((map__68314 == null))))?(((((map__68314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68314):map__68314);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68314__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__68307_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__68307_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__68306_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__68306_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__68316,tid){
var map__68317 = p__68316;
var map__68317__$1 = (((((!((map__68317 == null))))?(((((map__68317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68317):map__68317);
var svc = map__68317__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68317__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__68323 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__68324 = null;
var count__68325 = (0);
var i__68326 = (0);
while(true){
if((i__68326 < count__68325)){
var tid = chunk__68324.cljs$core$IIndexed$_nth$arity$2(null,i__68326);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68330 = seq__68323;
var G__68331 = chunk__68324;
var G__68332 = count__68325;
var G__68333 = (i__68326 + (1));
seq__68323 = G__68330;
chunk__68324 = G__68331;
count__68325 = G__68332;
i__68326 = G__68333;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68323);
if(temp__5735__auto__){
var seq__68323__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68323__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68323__$1);
var G__68334 = cljs.core.chunk_rest(seq__68323__$1);
var G__68335 = c__4609__auto__;
var G__68336 = cljs.core.count(c__4609__auto__);
var G__68337 = (0);
seq__68323 = G__68334;
chunk__68324 = G__68335;
count__68325 = G__68336;
i__68326 = G__68337;
continue;
} else {
var tid = cljs.core.first(seq__68323__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68338 = cljs.core.next(seq__68323__$1);
var G__68339 = null;
var G__68340 = (0);
var G__68341 = (0);
seq__68323 = G__68338;
chunk__68324 = G__68339;
count__68325 = G__68340;
i__68326 = G__68341;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__68319_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__68319_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__68320_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__68320_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__68321_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__68321_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__68322_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__68322_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__68327){
var map__68328 = p__68327;
var map__68328__$1 = (((((!((map__68328 == null))))?(((((map__68328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68328):map__68328);
var svc = map__68328__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68328__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68328__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
