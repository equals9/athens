goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__60234,p__60235){
var map__60236 = p__60234;
var map__60236__$1 = (((((!((map__60236 == null))))?(((((map__60236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60236):map__60236);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60236__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60237 = p__60235;
var map__60237__$1 = (((((!((map__60237 == null))))?(((((map__60237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60237):map__60237);
var msg = map__60237__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60237__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__60240,p__60241){
var map__60242 = p__60240;
var map__60242__$1 = (((((!((map__60242 == null))))?(((((map__60242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60242):map__60242);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60242__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60243 = p__60241;
var map__60243__$1 = (((((!((map__60243 == null))))?(((((map__60243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60243):map__60243);
var msg = map__60243__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60243__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__60246 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60248 = null;
var count__60249 = (0);
var i__60250 = (0);
while(true){
if((i__60250 < count__60249)){
var map__60256 = chunk__60248.cljs$core$IIndexed$_nth$arity$2(null,i__60250);
var map__60256__$1 = (((((!((map__60256 == null))))?(((((map__60256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60256):map__60256);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60256__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60303 = seq__60246;
var G__60304 = chunk__60248;
var G__60305 = count__60249;
var G__60306 = (i__60250 + (1));
seq__60246 = G__60303;
chunk__60248 = G__60304;
count__60249 = G__60305;
i__60250 = G__60306;
continue;
} else {
var G__60307 = seq__60246;
var G__60308 = chunk__60248;
var G__60309 = count__60249;
var G__60310 = (i__60250 + (1));
seq__60246 = G__60307;
chunk__60248 = G__60308;
count__60249 = G__60309;
i__60250 = G__60310;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60246);
if(temp__5735__auto__){
var seq__60246__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60246__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60246__$1);
var G__60311 = cljs.core.chunk_rest(seq__60246__$1);
var G__60312 = c__4609__auto__;
var G__60313 = cljs.core.count(c__4609__auto__);
var G__60314 = (0);
seq__60246 = G__60311;
chunk__60248 = G__60312;
count__60249 = G__60313;
i__60250 = G__60314;
continue;
} else {
var map__60258 = cljs.core.first(seq__60246__$1);
var map__60258__$1 = (((((!((map__60258 == null))))?(((((map__60258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60258):map__60258);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60258__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60315 = cljs.core.next(seq__60246__$1);
var G__60316 = null;
var G__60317 = (0);
var G__60318 = (0);
seq__60246 = G__60315;
chunk__60248 = G__60316;
count__60249 = G__60317;
i__60250 = G__60318;
continue;
} else {
var G__60319 = cljs.core.next(seq__60246__$1);
var G__60320 = null;
var G__60321 = (0);
var G__60322 = (0);
seq__60246 = G__60319;
chunk__60248 = G__60320;
count__60249 = G__60321;
i__60250 = G__60322;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__60260,msg){
var map__60261 = p__60260;
var map__60261__$1 = (((((!((map__60261 == null))))?(((((map__60261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60261):map__60261);
var runtime = map__60261__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60261__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__60263,key,p__60264){
var map__60265 = p__60263;
var map__60265__$1 = (((((!((map__60265 == null))))?(((((map__60265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60265):map__60265);
var state = map__60265__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60265__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__60266 = p__60264;
var map__60266__$1 = (((((!((map__60266 == null))))?(((((map__60266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60266):map__60266);
var spec = map__60266__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60266__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__60269,key,spec){
var map__60270 = p__60269;
var map__60270__$1 = (((((!((map__60270 == null))))?(((((map__60270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60270):map__60270);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60270__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__60277){
var map__60278 = p__60277;
var map__60278__$1 = (((((!((map__60278 == null))))?(((((map__60278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60278):map__60278);
var runtime = map__60278__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60278__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__60272_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__60272_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__60273_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__60273_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__60274_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__60274_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__60275_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__60275_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__60276_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__60276_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__60280,key){
var map__60281 = p__60280;
var map__60281__$1 = (((((!((map__60281 == null))))?(((((map__60281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60281):map__60281);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60281__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__60283,p__60284){
var map__60285 = p__60283;
var map__60285__$1 = (((((!((map__60285 == null))))?(((((map__60285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60285):map__60285);
var runtime = map__60285__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60285__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60286 = p__60284;
var map__60286__$1 = (((((!((map__60286 == null))))?(((((map__60286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60286):map__60286);
var msg = map__60286__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60286__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__60289 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60291 = null;
var count__60292 = (0);
var i__60293 = (0);
while(true){
if((i__60293 < count__60292)){
var map__60299 = chunk__60291.cljs$core$IIndexed$_nth$arity$2(null,i__60293);
var map__60299__$1 = (((((!((map__60299 == null))))?(((((map__60299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60299):map__60299);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60299__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60323 = seq__60289;
var G__60324 = chunk__60291;
var G__60325 = count__60292;
var G__60326 = (i__60293 + (1));
seq__60289 = G__60323;
chunk__60291 = G__60324;
count__60292 = G__60325;
i__60293 = G__60326;
continue;
} else {
var G__60327 = seq__60289;
var G__60328 = chunk__60291;
var G__60329 = count__60292;
var G__60330 = (i__60293 + (1));
seq__60289 = G__60327;
chunk__60291 = G__60328;
count__60292 = G__60329;
i__60293 = G__60330;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60289);
if(temp__5735__auto__){
var seq__60289__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60289__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60289__$1);
var G__60331 = cljs.core.chunk_rest(seq__60289__$1);
var G__60332 = c__4609__auto__;
var G__60333 = cljs.core.count(c__4609__auto__);
var G__60334 = (0);
seq__60289 = G__60331;
chunk__60291 = G__60332;
count__60292 = G__60333;
i__60293 = G__60334;
continue;
} else {
var map__60301 = cljs.core.first(seq__60289__$1);
var map__60301__$1 = (((((!((map__60301 == null))))?(((((map__60301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60301):map__60301);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60301__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60335 = cljs.core.next(seq__60289__$1);
var G__60336 = null;
var G__60337 = (0);
var G__60338 = (0);
seq__60289 = G__60335;
chunk__60291 = G__60336;
count__60292 = G__60337;
i__60293 = G__60338;
continue;
} else {
var G__60339 = cljs.core.next(seq__60289__$1);
var G__60340 = null;
var G__60341 = (0);
var G__60342 = (0);
seq__60289 = G__60339;
chunk__60291 = G__60340;
count__60292 = G__60341;
i__60293 = G__60342;
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
