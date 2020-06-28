goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__60243,p__60244){
var map__60245 = p__60243;
var map__60245__$1 = (((((!((map__60245 == null))))?(((((map__60245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60245):map__60245);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60245__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60246 = p__60244;
var map__60246__$1 = (((((!((map__60246 == null))))?(((((map__60246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60246):map__60246);
var msg = map__60246__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60246__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__60249,p__60250){
var map__60251 = p__60249;
var map__60251__$1 = (((((!((map__60251 == null))))?(((((map__60251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60251):map__60251);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60251__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60252 = p__60250;
var map__60252__$1 = (((((!((map__60252 == null))))?(((((map__60252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60252):map__60252);
var msg = map__60252__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60252__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__60255 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60257 = null;
var count__60258 = (0);
var i__60259 = (0);
while(true){
if((i__60259 < count__60258)){
var map__60265 = chunk__60257.cljs$core$IIndexed$_nth$arity$2(null,i__60259);
var map__60265__$1 = (((((!((map__60265 == null))))?(((((map__60265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60265):map__60265);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60265__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60312 = seq__60255;
var G__60313 = chunk__60257;
var G__60314 = count__60258;
var G__60315 = (i__60259 + (1));
seq__60255 = G__60312;
chunk__60257 = G__60313;
count__60258 = G__60314;
i__60259 = G__60315;
continue;
} else {
var G__60316 = seq__60255;
var G__60317 = chunk__60257;
var G__60318 = count__60258;
var G__60319 = (i__60259 + (1));
seq__60255 = G__60316;
chunk__60257 = G__60317;
count__60258 = G__60318;
i__60259 = G__60319;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60255);
if(temp__5735__auto__){
var seq__60255__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60255__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60255__$1);
var G__60320 = cljs.core.chunk_rest(seq__60255__$1);
var G__60321 = c__4609__auto__;
var G__60322 = cljs.core.count(c__4609__auto__);
var G__60323 = (0);
seq__60255 = G__60320;
chunk__60257 = G__60321;
count__60258 = G__60322;
i__60259 = G__60323;
continue;
} else {
var map__60267 = cljs.core.first(seq__60255__$1);
var map__60267__$1 = (((((!((map__60267 == null))))?(((((map__60267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60267):map__60267);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60267__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60324 = cljs.core.next(seq__60255__$1);
var G__60325 = null;
var G__60326 = (0);
var G__60327 = (0);
seq__60255 = G__60324;
chunk__60257 = G__60325;
count__60258 = G__60326;
i__60259 = G__60327;
continue;
} else {
var G__60328 = cljs.core.next(seq__60255__$1);
var G__60329 = null;
var G__60330 = (0);
var G__60331 = (0);
seq__60255 = G__60328;
chunk__60257 = G__60329;
count__60258 = G__60330;
i__60259 = G__60331;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__60269,msg){
var map__60270 = p__60269;
var map__60270__$1 = (((((!((map__60270 == null))))?(((((map__60270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60270):map__60270);
var runtime = map__60270__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60270__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__60272,key,p__60273){
var map__60274 = p__60272;
var map__60274__$1 = (((((!((map__60274 == null))))?(((((map__60274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60274):map__60274);
var state = map__60274__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60274__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__60275 = p__60273;
var map__60275__$1 = (((((!((map__60275 == null))))?(((((map__60275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60275):map__60275);
var spec = map__60275__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60275__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__60278,key,spec){
var map__60279 = p__60278;
var map__60279__$1 = (((((!((map__60279 == null))))?(((((map__60279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60279):map__60279);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60279__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__60286){
var map__60287 = p__60286;
var map__60287__$1 = (((((!((map__60287 == null))))?(((((map__60287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60287):map__60287);
var runtime = map__60287__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60287__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__60281_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__60281_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__60282_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__60282_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__60283_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__60283_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__60284_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__60284_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__60285_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__60285_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__60289,key){
var map__60290 = p__60289;
var map__60290__$1 = (((((!((map__60290 == null))))?(((((map__60290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60290):map__60290);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60290__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__60292,p__60293){
var map__60294 = p__60292;
var map__60294__$1 = (((((!((map__60294 == null))))?(((((map__60294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60294):map__60294);
var runtime = map__60294__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60294__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60295 = p__60293;
var map__60295__$1 = (((((!((map__60295 == null))))?(((((map__60295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60295):map__60295);
var msg = map__60295__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60295__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__60298 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60300 = null;
var count__60301 = (0);
var i__60302 = (0);
while(true){
if((i__60302 < count__60301)){
var map__60308 = chunk__60300.cljs$core$IIndexed$_nth$arity$2(null,i__60302);
var map__60308__$1 = (((((!((map__60308 == null))))?(((((map__60308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60308):map__60308);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60308__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60332 = seq__60298;
var G__60333 = chunk__60300;
var G__60334 = count__60301;
var G__60335 = (i__60302 + (1));
seq__60298 = G__60332;
chunk__60300 = G__60333;
count__60301 = G__60334;
i__60302 = G__60335;
continue;
} else {
var G__60336 = seq__60298;
var G__60337 = chunk__60300;
var G__60338 = count__60301;
var G__60339 = (i__60302 + (1));
seq__60298 = G__60336;
chunk__60300 = G__60337;
count__60301 = G__60338;
i__60302 = G__60339;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60298);
if(temp__5735__auto__){
var seq__60298__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60298__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60298__$1);
var G__60340 = cljs.core.chunk_rest(seq__60298__$1);
var G__60341 = c__4609__auto__;
var G__60342 = cljs.core.count(c__4609__auto__);
var G__60343 = (0);
seq__60298 = G__60340;
chunk__60300 = G__60341;
count__60301 = G__60342;
i__60302 = G__60343;
continue;
} else {
var map__60310 = cljs.core.first(seq__60298__$1);
var map__60310__$1 = (((((!((map__60310 == null))))?(((((map__60310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60310):map__60310);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60310__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60344 = cljs.core.next(seq__60298__$1);
var G__60345 = null;
var G__60346 = (0);
var G__60347 = (0);
seq__60298 = G__60344;
chunk__60300 = G__60345;
count__60301 = G__60346;
i__60302 = G__60347;
continue;
} else {
var G__60348 = cljs.core.next(seq__60298__$1);
var G__60349 = null;
var G__60350 = (0);
var G__60351 = (0);
seq__60298 = G__60348;
chunk__60300 = G__60349;
count__60301 = G__60350;
i__60302 = G__60351;
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
