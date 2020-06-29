goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__60235,p__60236){
var map__60237 = p__60235;
var map__60237__$1 = (((((!((map__60237 == null))))?(((((map__60237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60237):map__60237);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60237__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60238 = p__60236;
var map__60238__$1 = (((((!((map__60238 == null))))?(((((map__60238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60238):map__60238);
var msg = map__60238__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60238__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__60241,p__60242){
var map__60243 = p__60241;
var map__60243__$1 = (((((!((map__60243 == null))))?(((((map__60243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60243):map__60243);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60243__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60244 = p__60242;
var map__60244__$1 = (((((!((map__60244 == null))))?(((((map__60244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60244):map__60244);
var msg = map__60244__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60244__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__60247 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60249 = null;
var count__60250 = (0);
var i__60251 = (0);
while(true){
if((i__60251 < count__60250)){
var map__60257 = chunk__60249.cljs$core$IIndexed$_nth$arity$2(null,i__60251);
var map__60257__$1 = (((((!((map__60257 == null))))?(((((map__60257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60257):map__60257);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60257__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60304 = seq__60247;
var G__60305 = chunk__60249;
var G__60306 = count__60250;
var G__60307 = (i__60251 + (1));
seq__60247 = G__60304;
chunk__60249 = G__60305;
count__60250 = G__60306;
i__60251 = G__60307;
continue;
} else {
var G__60308 = seq__60247;
var G__60309 = chunk__60249;
var G__60310 = count__60250;
var G__60311 = (i__60251 + (1));
seq__60247 = G__60308;
chunk__60249 = G__60309;
count__60250 = G__60310;
i__60251 = G__60311;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60247);
if(temp__5735__auto__){
var seq__60247__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60247__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60247__$1);
var G__60312 = cljs.core.chunk_rest(seq__60247__$1);
var G__60313 = c__4609__auto__;
var G__60314 = cljs.core.count(c__4609__auto__);
var G__60315 = (0);
seq__60247 = G__60312;
chunk__60249 = G__60313;
count__60250 = G__60314;
i__60251 = G__60315;
continue;
} else {
var map__60259 = cljs.core.first(seq__60247__$1);
var map__60259__$1 = (((((!((map__60259 == null))))?(((((map__60259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60259):map__60259);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60259__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60316 = cljs.core.next(seq__60247__$1);
var G__60317 = null;
var G__60318 = (0);
var G__60319 = (0);
seq__60247 = G__60316;
chunk__60249 = G__60317;
count__60250 = G__60318;
i__60251 = G__60319;
continue;
} else {
var G__60320 = cljs.core.next(seq__60247__$1);
var G__60321 = null;
var G__60322 = (0);
var G__60323 = (0);
seq__60247 = G__60320;
chunk__60249 = G__60321;
count__60250 = G__60322;
i__60251 = G__60323;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__60261,msg){
var map__60262 = p__60261;
var map__60262__$1 = (((((!((map__60262 == null))))?(((((map__60262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60262):map__60262);
var runtime = map__60262__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60262__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__60264,key,p__60265){
var map__60266 = p__60264;
var map__60266__$1 = (((((!((map__60266 == null))))?(((((map__60266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60266):map__60266);
var state = map__60266__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60266__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__60267 = p__60265;
var map__60267__$1 = (((((!((map__60267 == null))))?(((((map__60267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60267):map__60267);
var spec = map__60267__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60267__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__60270,key,spec){
var map__60271 = p__60270;
var map__60271__$1 = (((((!((map__60271 == null))))?(((((map__60271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60271):map__60271);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60271__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__60278){
var map__60279 = p__60278;
var map__60279__$1 = (((((!((map__60279 == null))))?(((((map__60279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60279):map__60279);
var runtime = map__60279__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60279__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__60273_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__60273_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__60274_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__60274_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__60275_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__60275_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__60276_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__60276_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__60277_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__60277_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__60281,key){
var map__60282 = p__60281;
var map__60282__$1 = (((((!((map__60282 == null))))?(((((map__60282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60282):map__60282);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60282__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__60284,p__60285){
var map__60286 = p__60284;
var map__60286__$1 = (((((!((map__60286 == null))))?(((((map__60286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60286):map__60286);
var runtime = map__60286__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60286__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60287 = p__60285;
var map__60287__$1 = (((((!((map__60287 == null))))?(((((map__60287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60287):map__60287);
var msg = map__60287__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60287__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__60290 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60292 = null;
var count__60293 = (0);
var i__60294 = (0);
while(true){
if((i__60294 < count__60293)){
var map__60300 = chunk__60292.cljs$core$IIndexed$_nth$arity$2(null,i__60294);
var map__60300__$1 = (((((!((map__60300 == null))))?(((((map__60300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60300):map__60300);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60300__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60324 = seq__60290;
var G__60325 = chunk__60292;
var G__60326 = count__60293;
var G__60327 = (i__60294 + (1));
seq__60290 = G__60324;
chunk__60292 = G__60325;
count__60293 = G__60326;
i__60294 = G__60327;
continue;
} else {
var G__60328 = seq__60290;
var G__60329 = chunk__60292;
var G__60330 = count__60293;
var G__60331 = (i__60294 + (1));
seq__60290 = G__60328;
chunk__60292 = G__60329;
count__60293 = G__60330;
i__60294 = G__60331;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60290);
if(temp__5735__auto__){
var seq__60290__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60290__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60290__$1);
var G__60332 = cljs.core.chunk_rest(seq__60290__$1);
var G__60333 = c__4609__auto__;
var G__60334 = cljs.core.count(c__4609__auto__);
var G__60335 = (0);
seq__60290 = G__60332;
chunk__60292 = G__60333;
count__60293 = G__60334;
i__60294 = G__60335;
continue;
} else {
var map__60302 = cljs.core.first(seq__60290__$1);
var map__60302__$1 = (((((!((map__60302 == null))))?(((((map__60302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60302):map__60302);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60302__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60336 = cljs.core.next(seq__60290__$1);
var G__60337 = null;
var G__60338 = (0);
var G__60339 = (0);
seq__60290 = G__60336;
chunk__60292 = G__60337;
count__60293 = G__60338;
i__60294 = G__60339;
continue;
} else {
var G__60340 = cljs.core.next(seq__60290__$1);
var G__60341 = null;
var G__60342 = (0);
var G__60343 = (0);
seq__60290 = G__60340;
chunk__60292 = G__60341;
count__60293 = G__60342;
i__60294 = G__60343;
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
