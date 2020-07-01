goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__60285,p__60286){
var map__60287 = p__60285;
var map__60287__$1 = (((((!((map__60287 == null))))?(((((map__60287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60287):map__60287);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60287__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60288 = p__60286;
var map__60288__$1 = (((((!((map__60288 == null))))?(((((map__60288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60288):map__60288);
var msg = map__60288__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60288__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__60291,p__60292){
var map__60293 = p__60291;
var map__60293__$1 = (((((!((map__60293 == null))))?(((((map__60293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60293):map__60293);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60293__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60294 = p__60292;
var map__60294__$1 = (((((!((map__60294 == null))))?(((((map__60294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60294):map__60294);
var msg = map__60294__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60294__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__60297 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60299 = null;
var count__60300 = (0);
var i__60301 = (0);
while(true){
if((i__60301 < count__60300)){
var map__60307 = chunk__60299.cljs$core$IIndexed$_nth$arity$2(null,i__60301);
var map__60307__$1 = (((((!((map__60307 == null))))?(((((map__60307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60307):map__60307);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60307__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60354 = seq__60297;
var G__60355 = chunk__60299;
var G__60356 = count__60300;
var G__60357 = (i__60301 + (1));
seq__60297 = G__60354;
chunk__60299 = G__60355;
count__60300 = G__60356;
i__60301 = G__60357;
continue;
} else {
var G__60358 = seq__60297;
var G__60359 = chunk__60299;
var G__60360 = count__60300;
var G__60361 = (i__60301 + (1));
seq__60297 = G__60358;
chunk__60299 = G__60359;
count__60300 = G__60360;
i__60301 = G__60361;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60297);
if(temp__5735__auto__){
var seq__60297__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60297__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60297__$1);
var G__60362 = cljs.core.chunk_rest(seq__60297__$1);
var G__60363 = c__4609__auto__;
var G__60364 = cljs.core.count(c__4609__auto__);
var G__60365 = (0);
seq__60297 = G__60362;
chunk__60299 = G__60363;
count__60300 = G__60364;
i__60301 = G__60365;
continue;
} else {
var map__60309 = cljs.core.first(seq__60297__$1);
var map__60309__$1 = (((((!((map__60309 == null))))?(((((map__60309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60309):map__60309);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60309__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60366 = cljs.core.next(seq__60297__$1);
var G__60367 = null;
var G__60368 = (0);
var G__60369 = (0);
seq__60297 = G__60366;
chunk__60299 = G__60367;
count__60300 = G__60368;
i__60301 = G__60369;
continue;
} else {
var G__60370 = cljs.core.next(seq__60297__$1);
var G__60371 = null;
var G__60372 = (0);
var G__60373 = (0);
seq__60297 = G__60370;
chunk__60299 = G__60371;
count__60300 = G__60372;
i__60301 = G__60373;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__60311,msg){
var map__60312 = p__60311;
var map__60312__$1 = (((((!((map__60312 == null))))?(((((map__60312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60312):map__60312);
var runtime = map__60312__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60312__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__60314,key,p__60315){
var map__60316 = p__60314;
var map__60316__$1 = (((((!((map__60316 == null))))?(((((map__60316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60316):map__60316);
var state = map__60316__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60316__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__60317 = p__60315;
var map__60317__$1 = (((((!((map__60317 == null))))?(((((map__60317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60317):map__60317);
var spec = map__60317__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60317__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__60320,key,spec){
var map__60321 = p__60320;
var map__60321__$1 = (((((!((map__60321 == null))))?(((((map__60321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60321):map__60321);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60321__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__60328){
var map__60329 = p__60328;
var map__60329__$1 = (((((!((map__60329 == null))))?(((((map__60329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60329):map__60329);
var runtime = map__60329__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60329__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__60323_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__60323_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__60324_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__60324_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__60325_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__60325_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__60326_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__60326_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__60327_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__60327_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__60331,key){
var map__60332 = p__60331;
var map__60332__$1 = (((((!((map__60332 == null))))?(((((map__60332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60332):map__60332);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60332__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__60334,p__60335){
var map__60336 = p__60334;
var map__60336__$1 = (((((!((map__60336 == null))))?(((((map__60336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60336):map__60336);
var runtime = map__60336__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60336__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60337 = p__60335;
var map__60337__$1 = (((((!((map__60337 == null))))?(((((map__60337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60337):map__60337);
var msg = map__60337__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60337__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__60340 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60342 = null;
var count__60343 = (0);
var i__60344 = (0);
while(true){
if((i__60344 < count__60343)){
var map__60350 = chunk__60342.cljs$core$IIndexed$_nth$arity$2(null,i__60344);
var map__60350__$1 = (((((!((map__60350 == null))))?(((((map__60350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60350):map__60350);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60350__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60374 = seq__60340;
var G__60375 = chunk__60342;
var G__60376 = count__60343;
var G__60377 = (i__60344 + (1));
seq__60340 = G__60374;
chunk__60342 = G__60375;
count__60343 = G__60376;
i__60344 = G__60377;
continue;
} else {
var G__60378 = seq__60340;
var G__60379 = chunk__60342;
var G__60380 = count__60343;
var G__60381 = (i__60344 + (1));
seq__60340 = G__60378;
chunk__60342 = G__60379;
count__60343 = G__60380;
i__60344 = G__60381;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60340);
if(temp__5735__auto__){
var seq__60340__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60340__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60340__$1);
var G__60382 = cljs.core.chunk_rest(seq__60340__$1);
var G__60383 = c__4609__auto__;
var G__60384 = cljs.core.count(c__4609__auto__);
var G__60385 = (0);
seq__60340 = G__60382;
chunk__60342 = G__60383;
count__60343 = G__60384;
i__60344 = G__60385;
continue;
} else {
var map__60352 = cljs.core.first(seq__60340__$1);
var map__60352__$1 = (((((!((map__60352 == null))))?(((((map__60352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60352):map__60352);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60352__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60386 = cljs.core.next(seq__60340__$1);
var G__60387 = null;
var G__60388 = (0);
var G__60389 = (0);
seq__60340 = G__60386;
chunk__60342 = G__60387;
count__60343 = G__60388;
i__60344 = G__60389;
continue;
} else {
var G__60390 = cljs.core.next(seq__60340__$1);
var G__60391 = null;
var G__60392 = (0);
var G__60393 = (0);
seq__60340 = G__60390;
chunk__60342 = G__60391;
count__60343 = G__60392;
i__60344 = G__60393;
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
