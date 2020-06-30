goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__60266,p__60267){
var map__60268 = p__60266;
var map__60268__$1 = (((((!((map__60268 == null))))?(((((map__60268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60268):map__60268);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60268__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60269 = p__60267;
var map__60269__$1 = (((((!((map__60269 == null))))?(((((map__60269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60269):map__60269);
var msg = map__60269__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60269__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__60272,p__60273){
var map__60274 = p__60272;
var map__60274__$1 = (((((!((map__60274 == null))))?(((((map__60274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60274):map__60274);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60274__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60275 = p__60273;
var map__60275__$1 = (((((!((map__60275 == null))))?(((((map__60275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60275):map__60275);
var msg = map__60275__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60275__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__60278 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60280 = null;
var count__60281 = (0);
var i__60282 = (0);
while(true){
if((i__60282 < count__60281)){
var map__60288 = chunk__60280.cljs$core$IIndexed$_nth$arity$2(null,i__60282);
var map__60288__$1 = (((((!((map__60288 == null))))?(((((map__60288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60288):map__60288);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60288__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60335 = seq__60278;
var G__60336 = chunk__60280;
var G__60337 = count__60281;
var G__60338 = (i__60282 + (1));
seq__60278 = G__60335;
chunk__60280 = G__60336;
count__60281 = G__60337;
i__60282 = G__60338;
continue;
} else {
var G__60339 = seq__60278;
var G__60340 = chunk__60280;
var G__60341 = count__60281;
var G__60342 = (i__60282 + (1));
seq__60278 = G__60339;
chunk__60280 = G__60340;
count__60281 = G__60341;
i__60282 = G__60342;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60278);
if(temp__5735__auto__){
var seq__60278__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60278__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60278__$1);
var G__60343 = cljs.core.chunk_rest(seq__60278__$1);
var G__60344 = c__4609__auto__;
var G__60345 = cljs.core.count(c__4609__auto__);
var G__60346 = (0);
seq__60278 = G__60343;
chunk__60280 = G__60344;
count__60281 = G__60345;
i__60282 = G__60346;
continue;
} else {
var map__60290 = cljs.core.first(seq__60278__$1);
var map__60290__$1 = (((((!((map__60290 == null))))?(((((map__60290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60290):map__60290);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60290__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60347 = cljs.core.next(seq__60278__$1);
var G__60348 = null;
var G__60349 = (0);
var G__60350 = (0);
seq__60278 = G__60347;
chunk__60280 = G__60348;
count__60281 = G__60349;
i__60282 = G__60350;
continue;
} else {
var G__60351 = cljs.core.next(seq__60278__$1);
var G__60352 = null;
var G__60353 = (0);
var G__60354 = (0);
seq__60278 = G__60351;
chunk__60280 = G__60352;
count__60281 = G__60353;
i__60282 = G__60354;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__60292,msg){
var map__60293 = p__60292;
var map__60293__$1 = (((((!((map__60293 == null))))?(((((map__60293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60293):map__60293);
var runtime = map__60293__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60293__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__60295,key,p__60296){
var map__60297 = p__60295;
var map__60297__$1 = (((((!((map__60297 == null))))?(((((map__60297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60297):map__60297);
var state = map__60297__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60297__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__60298 = p__60296;
var map__60298__$1 = (((((!((map__60298 == null))))?(((((map__60298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60298):map__60298);
var spec = map__60298__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60298__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__60301,key,spec){
var map__60302 = p__60301;
var map__60302__$1 = (((((!((map__60302 == null))))?(((((map__60302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60302):map__60302);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60302__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__60309){
var map__60310 = p__60309;
var map__60310__$1 = (((((!((map__60310 == null))))?(((((map__60310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60310):map__60310);
var runtime = map__60310__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60310__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__60304_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__60304_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__60305_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__60305_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__60306_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__60306_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__60307_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__60307_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__60308_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__60308_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__60312,key){
var map__60313 = p__60312;
var map__60313__$1 = (((((!((map__60313 == null))))?(((((map__60313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60313):map__60313);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60313__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__60315,p__60316){
var map__60317 = p__60315;
var map__60317__$1 = (((((!((map__60317 == null))))?(((((map__60317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60317):map__60317);
var runtime = map__60317__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60317__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60318 = p__60316;
var map__60318__$1 = (((((!((map__60318 == null))))?(((((map__60318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60318):map__60318);
var msg = map__60318__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60318__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__60321 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60323 = null;
var count__60324 = (0);
var i__60325 = (0);
while(true){
if((i__60325 < count__60324)){
var map__60331 = chunk__60323.cljs$core$IIndexed$_nth$arity$2(null,i__60325);
var map__60331__$1 = (((((!((map__60331 == null))))?(((((map__60331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60331):map__60331);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60331__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60355 = seq__60321;
var G__60356 = chunk__60323;
var G__60357 = count__60324;
var G__60358 = (i__60325 + (1));
seq__60321 = G__60355;
chunk__60323 = G__60356;
count__60324 = G__60357;
i__60325 = G__60358;
continue;
} else {
var G__60359 = seq__60321;
var G__60360 = chunk__60323;
var G__60361 = count__60324;
var G__60362 = (i__60325 + (1));
seq__60321 = G__60359;
chunk__60323 = G__60360;
count__60324 = G__60361;
i__60325 = G__60362;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60321);
if(temp__5735__auto__){
var seq__60321__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60321__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60321__$1);
var G__60363 = cljs.core.chunk_rest(seq__60321__$1);
var G__60364 = c__4609__auto__;
var G__60365 = cljs.core.count(c__4609__auto__);
var G__60366 = (0);
seq__60321 = G__60363;
chunk__60323 = G__60364;
count__60324 = G__60365;
i__60325 = G__60366;
continue;
} else {
var map__60333 = cljs.core.first(seq__60321__$1);
var map__60333__$1 = (((((!((map__60333 == null))))?(((((map__60333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60333):map__60333);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60333__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60367 = cljs.core.next(seq__60321__$1);
var G__60368 = null;
var G__60369 = (0);
var G__60370 = (0);
seq__60321 = G__60367;
chunk__60323 = G__60368;
count__60324 = G__60369;
i__60325 = G__60370;
continue;
} else {
var G__60371 = cljs.core.next(seq__60321__$1);
var G__60372 = null;
var G__60373 = (0);
var G__60374 = (0);
seq__60321 = G__60371;
chunk__60323 = G__60372;
count__60324 = G__60373;
i__60325 = G__60374;
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
