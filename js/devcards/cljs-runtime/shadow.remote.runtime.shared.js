goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__60324,p__60325){
var map__60326 = p__60324;
var map__60326__$1 = (((((!((map__60326 == null))))?(((((map__60326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60326):map__60326);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60326__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60327 = p__60325;
var map__60327__$1 = (((((!((map__60327 == null))))?(((((map__60327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60327):map__60327);
var msg = map__60327__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60327__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__60330,p__60331){
var map__60332 = p__60330;
var map__60332__$1 = (((((!((map__60332 == null))))?(((((map__60332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60332):map__60332);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60332__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60333 = p__60331;
var map__60333__$1 = (((((!((map__60333 == null))))?(((((map__60333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60333):map__60333);
var msg = map__60333__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60333__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__60336 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60338 = null;
var count__60339 = (0);
var i__60340 = (0);
while(true){
if((i__60340 < count__60339)){
var map__60346 = chunk__60338.cljs$core$IIndexed$_nth$arity$2(null,i__60340);
var map__60346__$1 = (((((!((map__60346 == null))))?(((((map__60346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60346):map__60346);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60346__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60393 = seq__60336;
var G__60394 = chunk__60338;
var G__60395 = count__60339;
var G__60396 = (i__60340 + (1));
seq__60336 = G__60393;
chunk__60338 = G__60394;
count__60339 = G__60395;
i__60340 = G__60396;
continue;
} else {
var G__60397 = seq__60336;
var G__60398 = chunk__60338;
var G__60399 = count__60339;
var G__60400 = (i__60340 + (1));
seq__60336 = G__60397;
chunk__60338 = G__60398;
count__60339 = G__60399;
i__60340 = G__60400;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60336);
if(temp__5735__auto__){
var seq__60336__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60336__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60336__$1);
var G__60401 = cljs.core.chunk_rest(seq__60336__$1);
var G__60402 = c__4609__auto__;
var G__60403 = cljs.core.count(c__4609__auto__);
var G__60404 = (0);
seq__60336 = G__60401;
chunk__60338 = G__60402;
count__60339 = G__60403;
i__60340 = G__60404;
continue;
} else {
var map__60348 = cljs.core.first(seq__60336__$1);
var map__60348__$1 = (((((!((map__60348 == null))))?(((((map__60348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60348):map__60348);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60348__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60405 = cljs.core.next(seq__60336__$1);
var G__60406 = null;
var G__60407 = (0);
var G__60408 = (0);
seq__60336 = G__60405;
chunk__60338 = G__60406;
count__60339 = G__60407;
i__60340 = G__60408;
continue;
} else {
var G__60409 = cljs.core.next(seq__60336__$1);
var G__60410 = null;
var G__60411 = (0);
var G__60412 = (0);
seq__60336 = G__60409;
chunk__60338 = G__60410;
count__60339 = G__60411;
i__60340 = G__60412;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__60350,msg){
var map__60351 = p__60350;
var map__60351__$1 = (((((!((map__60351 == null))))?(((((map__60351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60351):map__60351);
var runtime = map__60351__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60351__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__60353,key,p__60354){
var map__60355 = p__60353;
var map__60355__$1 = (((((!((map__60355 == null))))?(((((map__60355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60355):map__60355);
var state = map__60355__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60355__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__60356 = p__60354;
var map__60356__$1 = (((((!((map__60356 == null))))?(((((map__60356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60356):map__60356);
var spec = map__60356__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60356__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__60359,key,spec){
var map__60360 = p__60359;
var map__60360__$1 = (((((!((map__60360 == null))))?(((((map__60360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60360):map__60360);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60360__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__60367){
var map__60368 = p__60367;
var map__60368__$1 = (((((!((map__60368 == null))))?(((((map__60368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60368):map__60368);
var runtime = map__60368__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60368__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__60362_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__60362_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__60363_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__60363_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__60364_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__60364_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__60365_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__60365_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__60366_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__60366_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__60370,key){
var map__60371 = p__60370;
var map__60371__$1 = (((((!((map__60371 == null))))?(((((map__60371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60371):map__60371);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60371__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__60373,p__60374){
var map__60375 = p__60373;
var map__60375__$1 = (((((!((map__60375 == null))))?(((((map__60375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60375):map__60375);
var runtime = map__60375__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60375__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60376 = p__60374;
var map__60376__$1 = (((((!((map__60376 == null))))?(((((map__60376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60376):map__60376);
var msg = map__60376__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60376__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__60379 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60381 = null;
var count__60382 = (0);
var i__60383 = (0);
while(true){
if((i__60383 < count__60382)){
var map__60389 = chunk__60381.cljs$core$IIndexed$_nth$arity$2(null,i__60383);
var map__60389__$1 = (((((!((map__60389 == null))))?(((((map__60389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60389):map__60389);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60389__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60413 = seq__60379;
var G__60414 = chunk__60381;
var G__60415 = count__60382;
var G__60416 = (i__60383 + (1));
seq__60379 = G__60413;
chunk__60381 = G__60414;
count__60382 = G__60415;
i__60383 = G__60416;
continue;
} else {
var G__60417 = seq__60379;
var G__60418 = chunk__60381;
var G__60419 = count__60382;
var G__60420 = (i__60383 + (1));
seq__60379 = G__60417;
chunk__60381 = G__60418;
count__60382 = G__60419;
i__60383 = G__60420;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60379);
if(temp__5735__auto__){
var seq__60379__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60379__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60379__$1);
var G__60421 = cljs.core.chunk_rest(seq__60379__$1);
var G__60422 = c__4609__auto__;
var G__60423 = cljs.core.count(c__4609__auto__);
var G__60424 = (0);
seq__60379 = G__60421;
chunk__60381 = G__60422;
count__60382 = G__60423;
i__60383 = G__60424;
continue;
} else {
var map__60391 = cljs.core.first(seq__60379__$1);
var map__60391__$1 = (((((!((map__60391 == null))))?(((((map__60391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60391):map__60391);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60391__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60425 = cljs.core.next(seq__60379__$1);
var G__60426 = null;
var G__60427 = (0);
var G__60428 = (0);
seq__60379 = G__60425;
chunk__60381 = G__60426;
count__60382 = G__60427;
i__60383 = G__60428;
continue;
} else {
var G__60429 = cljs.core.next(seq__60379__$1);
var G__60430 = null;
var G__60431 = (0);
var G__60432 = (0);
seq__60379 = G__60429;
chunk__60381 = G__60430;
count__60382 = G__60431;
i__60383 = G__60432;
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
