goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__60295,p__60296){
var map__60297 = p__60295;
var map__60297__$1 = (((((!((map__60297 == null))))?(((((map__60297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60297):map__60297);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60297__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60298 = p__60296;
var map__60298__$1 = (((((!((map__60298 == null))))?(((((map__60298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60298):map__60298);
var msg = map__60298__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60298__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__60301,p__60302){
var map__60303 = p__60301;
var map__60303__$1 = (((((!((map__60303 == null))))?(((((map__60303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60303):map__60303);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60303__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60304 = p__60302;
var map__60304__$1 = (((((!((map__60304 == null))))?(((((map__60304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60304):map__60304);
var msg = map__60304__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60304__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__60307 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60309 = null;
var count__60310 = (0);
var i__60311 = (0);
while(true){
if((i__60311 < count__60310)){
var map__60317 = chunk__60309.cljs$core$IIndexed$_nth$arity$2(null,i__60311);
var map__60317__$1 = (((((!((map__60317 == null))))?(((((map__60317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60317):map__60317);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60317__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60364 = seq__60307;
var G__60365 = chunk__60309;
var G__60366 = count__60310;
var G__60367 = (i__60311 + (1));
seq__60307 = G__60364;
chunk__60309 = G__60365;
count__60310 = G__60366;
i__60311 = G__60367;
continue;
} else {
var G__60368 = seq__60307;
var G__60369 = chunk__60309;
var G__60370 = count__60310;
var G__60371 = (i__60311 + (1));
seq__60307 = G__60368;
chunk__60309 = G__60369;
count__60310 = G__60370;
i__60311 = G__60371;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60307);
if(temp__5735__auto__){
var seq__60307__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60307__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60307__$1);
var G__60372 = cljs.core.chunk_rest(seq__60307__$1);
var G__60373 = c__4609__auto__;
var G__60374 = cljs.core.count(c__4609__auto__);
var G__60375 = (0);
seq__60307 = G__60372;
chunk__60309 = G__60373;
count__60310 = G__60374;
i__60311 = G__60375;
continue;
} else {
var map__60319 = cljs.core.first(seq__60307__$1);
var map__60319__$1 = (((((!((map__60319 == null))))?(((((map__60319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60319):map__60319);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60319__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60376 = cljs.core.next(seq__60307__$1);
var G__60377 = null;
var G__60378 = (0);
var G__60379 = (0);
seq__60307 = G__60376;
chunk__60309 = G__60377;
count__60310 = G__60378;
i__60311 = G__60379;
continue;
} else {
var G__60380 = cljs.core.next(seq__60307__$1);
var G__60381 = null;
var G__60382 = (0);
var G__60383 = (0);
seq__60307 = G__60380;
chunk__60309 = G__60381;
count__60310 = G__60382;
i__60311 = G__60383;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__60321,msg){
var map__60322 = p__60321;
var map__60322__$1 = (((((!((map__60322 == null))))?(((((map__60322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60322):map__60322);
var runtime = map__60322__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60322__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__60324,key,p__60325){
var map__60326 = p__60324;
var map__60326__$1 = (((((!((map__60326 == null))))?(((((map__60326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60326):map__60326);
var state = map__60326__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60326__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__60327 = p__60325;
var map__60327__$1 = (((((!((map__60327 == null))))?(((((map__60327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60327):map__60327);
var spec = map__60327__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60327__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__60330,key,spec){
var map__60331 = p__60330;
var map__60331__$1 = (((((!((map__60331 == null))))?(((((map__60331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60331):map__60331);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60331__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__60338){
var map__60339 = p__60338;
var map__60339__$1 = (((((!((map__60339 == null))))?(((((map__60339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60339):map__60339);
var runtime = map__60339__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60339__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__60333_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__60333_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__60334_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__60334_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__60335_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__60335_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__60336_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__60336_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__60337_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__60337_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__60341,key){
var map__60342 = p__60341;
var map__60342__$1 = (((((!((map__60342 == null))))?(((((map__60342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60342):map__60342);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60342__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__60344,p__60345){
var map__60346 = p__60344;
var map__60346__$1 = (((((!((map__60346 == null))))?(((((map__60346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60346):map__60346);
var runtime = map__60346__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60346__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60347 = p__60345;
var map__60347__$1 = (((((!((map__60347 == null))))?(((((map__60347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60347):map__60347);
var msg = map__60347__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60347__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__60350 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60352 = null;
var count__60353 = (0);
var i__60354 = (0);
while(true){
if((i__60354 < count__60353)){
var map__60360 = chunk__60352.cljs$core$IIndexed$_nth$arity$2(null,i__60354);
var map__60360__$1 = (((((!((map__60360 == null))))?(((((map__60360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60360):map__60360);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60360__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60384 = seq__60350;
var G__60385 = chunk__60352;
var G__60386 = count__60353;
var G__60387 = (i__60354 + (1));
seq__60350 = G__60384;
chunk__60352 = G__60385;
count__60353 = G__60386;
i__60354 = G__60387;
continue;
} else {
var G__60388 = seq__60350;
var G__60389 = chunk__60352;
var G__60390 = count__60353;
var G__60391 = (i__60354 + (1));
seq__60350 = G__60388;
chunk__60352 = G__60389;
count__60353 = G__60390;
i__60354 = G__60391;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60350);
if(temp__5735__auto__){
var seq__60350__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60350__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60350__$1);
var G__60392 = cljs.core.chunk_rest(seq__60350__$1);
var G__60393 = c__4609__auto__;
var G__60394 = cljs.core.count(c__4609__auto__);
var G__60395 = (0);
seq__60350 = G__60392;
chunk__60352 = G__60393;
count__60353 = G__60394;
i__60354 = G__60395;
continue;
} else {
var map__60362 = cljs.core.first(seq__60350__$1);
var map__60362__$1 = (((((!((map__60362 == null))))?(((((map__60362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60362):map__60362);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60362__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60396 = cljs.core.next(seq__60350__$1);
var G__60397 = null;
var G__60398 = (0);
var G__60399 = (0);
seq__60350 = G__60396;
chunk__60352 = G__60397;
count__60353 = G__60398;
i__60354 = G__60399;
continue;
} else {
var G__60400 = cljs.core.next(seq__60350__$1);
var G__60401 = null;
var G__60402 = (0);
var G__60403 = (0);
seq__60350 = G__60400;
chunk__60352 = G__60401;
count__60353 = G__60402;
i__60354 = G__60403;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
