goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__60224,p__60225){
var map__60226 = p__60224;
var map__60226__$1 = (((((!((map__60226 == null))))?(((((map__60226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60226):map__60226);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60226__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60227 = p__60225;
var map__60227__$1 = (((((!((map__60227 == null))))?(((((map__60227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60227):map__60227);
var msg = map__60227__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60227__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__60230,p__60231){
var map__60232 = p__60230;
var map__60232__$1 = (((((!((map__60232 == null))))?(((((map__60232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60232):map__60232);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60232__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60233 = p__60231;
var map__60233__$1 = (((((!((map__60233 == null))))?(((((map__60233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60233):map__60233);
var msg = map__60233__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60233__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__60236 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60238 = null;
var count__60239 = (0);
var i__60240 = (0);
while(true){
if((i__60240 < count__60239)){
var map__60246 = chunk__60238.cljs$core$IIndexed$_nth$arity$2(null,i__60240);
var map__60246__$1 = (((((!((map__60246 == null))))?(((((map__60246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60246):map__60246);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60246__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60293 = seq__60236;
var G__60294 = chunk__60238;
var G__60295 = count__60239;
var G__60296 = (i__60240 + (1));
seq__60236 = G__60293;
chunk__60238 = G__60294;
count__60239 = G__60295;
i__60240 = G__60296;
continue;
} else {
var G__60297 = seq__60236;
var G__60298 = chunk__60238;
var G__60299 = count__60239;
var G__60300 = (i__60240 + (1));
seq__60236 = G__60297;
chunk__60238 = G__60298;
count__60239 = G__60299;
i__60240 = G__60300;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60236);
if(temp__5735__auto__){
var seq__60236__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60236__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60236__$1);
var G__60301 = cljs.core.chunk_rest(seq__60236__$1);
var G__60302 = c__4609__auto__;
var G__60303 = cljs.core.count(c__4609__auto__);
var G__60304 = (0);
seq__60236 = G__60301;
chunk__60238 = G__60302;
count__60239 = G__60303;
i__60240 = G__60304;
continue;
} else {
var map__60248 = cljs.core.first(seq__60236__$1);
var map__60248__$1 = (((((!((map__60248 == null))))?(((((map__60248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60248):map__60248);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60248__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60305 = cljs.core.next(seq__60236__$1);
var G__60306 = null;
var G__60307 = (0);
var G__60308 = (0);
seq__60236 = G__60305;
chunk__60238 = G__60306;
count__60239 = G__60307;
i__60240 = G__60308;
continue;
} else {
var G__60309 = cljs.core.next(seq__60236__$1);
var G__60310 = null;
var G__60311 = (0);
var G__60312 = (0);
seq__60236 = G__60309;
chunk__60238 = G__60310;
count__60239 = G__60311;
i__60240 = G__60312;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__60250,msg){
var map__60251 = p__60250;
var map__60251__$1 = (((((!((map__60251 == null))))?(((((map__60251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60251):map__60251);
var runtime = map__60251__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60251__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__60253,key,p__60254){
var map__60255 = p__60253;
var map__60255__$1 = (((((!((map__60255 == null))))?(((((map__60255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60255):map__60255);
var state = map__60255__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60255__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__60256 = p__60254;
var map__60256__$1 = (((((!((map__60256 == null))))?(((((map__60256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60256):map__60256);
var spec = map__60256__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60256__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__60259,key,spec){
var map__60260 = p__60259;
var map__60260__$1 = (((((!((map__60260 == null))))?(((((map__60260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60260):map__60260);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60260__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__60267){
var map__60268 = p__60267;
var map__60268__$1 = (((((!((map__60268 == null))))?(((((map__60268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60268):map__60268);
var runtime = map__60268__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60268__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__60262_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__60262_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__60263_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__60263_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__60264_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__60264_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__60265_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__60265_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__60266_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__60266_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__60270,key){
var map__60271 = p__60270;
var map__60271__$1 = (((((!((map__60271 == null))))?(((((map__60271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60271):map__60271);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60271__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__60273,p__60274){
var map__60275 = p__60273;
var map__60275__$1 = (((((!((map__60275 == null))))?(((((map__60275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60275):map__60275);
var runtime = map__60275__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60275__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60276 = p__60274;
var map__60276__$1 = (((((!((map__60276 == null))))?(((((map__60276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60276):map__60276);
var msg = map__60276__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60276__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__60279 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60281 = null;
var count__60282 = (0);
var i__60283 = (0);
while(true){
if((i__60283 < count__60282)){
var map__60289 = chunk__60281.cljs$core$IIndexed$_nth$arity$2(null,i__60283);
var map__60289__$1 = (((((!((map__60289 == null))))?(((((map__60289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60289):map__60289);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60289__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60313 = seq__60279;
var G__60314 = chunk__60281;
var G__60315 = count__60282;
var G__60316 = (i__60283 + (1));
seq__60279 = G__60313;
chunk__60281 = G__60314;
count__60282 = G__60315;
i__60283 = G__60316;
continue;
} else {
var G__60317 = seq__60279;
var G__60318 = chunk__60281;
var G__60319 = count__60282;
var G__60320 = (i__60283 + (1));
seq__60279 = G__60317;
chunk__60281 = G__60318;
count__60282 = G__60319;
i__60283 = G__60320;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60279);
if(temp__5735__auto__){
var seq__60279__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60279__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60279__$1);
var G__60321 = cljs.core.chunk_rest(seq__60279__$1);
var G__60322 = c__4609__auto__;
var G__60323 = cljs.core.count(c__4609__auto__);
var G__60324 = (0);
seq__60279 = G__60321;
chunk__60281 = G__60322;
count__60282 = G__60323;
i__60283 = G__60324;
continue;
} else {
var map__60291 = cljs.core.first(seq__60279__$1);
var map__60291__$1 = (((((!((map__60291 == null))))?(((((map__60291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60291):map__60291);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60291__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60325 = cljs.core.next(seq__60279__$1);
var G__60326 = null;
var G__60327 = (0);
var G__60328 = (0);
seq__60279 = G__60325;
chunk__60281 = G__60326;
count__60282 = G__60327;
i__60283 = G__60328;
continue;
} else {
var G__60329 = cljs.core.next(seq__60279__$1);
var G__60330 = null;
var G__60331 = (0);
var G__60332 = (0);
seq__60279 = G__60329;
chunk__60281 = G__60330;
count__60282 = G__60331;
i__60283 = G__60332;
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
