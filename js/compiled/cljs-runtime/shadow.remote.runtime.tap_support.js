goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__68197,p__68198){
var map__68199 = p__68197;
var map__68199__$1 = (((((!((map__68199 == null))))?(((((map__68199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68199):map__68199);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68199__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__68200 = p__68198;
var map__68200__$1 = (((((!((map__68200 == null))))?(((((map__68200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68200):map__68200);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68200__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__68215,p__68216){
var map__68217 = p__68215;
var map__68217__$1 = (((((!((map__68217 == null))))?(((((map__68217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68217):map__68217);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68217__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__68218 = p__68216;
var map__68218__$1 = (((((!((map__68218 == null))))?(((((map__68218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68218):map__68218);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68218__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__68231,p__68232){
var map__68233 = p__68231;
var map__68233__$1 = (((((!((map__68233 == null))))?(((((map__68233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68233):map__68233);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68233__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68233__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__68234 = p__68232;
var map__68234__$1 = (((((!((map__68234 == null))))?(((((map__68234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68234):map__68234);
var msg = map__68234__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68234__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__68237 = obj_support;
var map__68237__$1 = (((((!((map__68237 == null))))?(((((map__68237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68237):map__68237);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68237__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__68230_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__68230_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__68229_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__68229_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__68239,tid){
var map__68240 = p__68239;
var map__68240__$1 = (((((!((map__68240 == null))))?(((((map__68240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68240):map__68240);
var svc = map__68240__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68240__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__68246 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__68247 = null;
var count__68248 = (0);
var i__68249 = (0);
while(true){
if((i__68249 < count__68248)){
var tid = chunk__68247.cljs$core$IIndexed$_nth$arity$2(null,i__68249);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68256 = seq__68246;
var G__68257 = chunk__68247;
var G__68258 = count__68248;
var G__68259 = (i__68249 + (1));
seq__68246 = G__68256;
chunk__68247 = G__68257;
count__68248 = G__68258;
i__68249 = G__68259;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68246);
if(temp__5735__auto__){
var seq__68246__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68246__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68246__$1);
var G__68260 = cljs.core.chunk_rest(seq__68246__$1);
var G__68261 = c__4609__auto__;
var G__68262 = cljs.core.count(c__4609__auto__);
var G__68263 = (0);
seq__68246 = G__68260;
chunk__68247 = G__68261;
count__68248 = G__68262;
i__68249 = G__68263;
continue;
} else {
var tid = cljs.core.first(seq__68246__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68264 = cljs.core.next(seq__68246__$1);
var G__68265 = null;
var G__68266 = (0);
var G__68267 = (0);
seq__68246 = G__68264;
chunk__68247 = G__68265;
count__68248 = G__68266;
i__68249 = G__68267;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__68242_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__68242_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__68243_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__68243_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__68244_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__68244_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__68245_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__68245_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__68253){
var map__68254 = p__68253;
var map__68254__$1 = (((((!((map__68254 == null))))?(((((map__68254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68254):map__68254);
var svc = map__68254__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68254__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68254__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
