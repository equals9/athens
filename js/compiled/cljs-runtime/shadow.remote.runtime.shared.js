goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__68015,p__68016){
var map__68017 = p__68015;
var map__68017__$1 = (((((!((map__68017 == null))))?(((((map__68017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68017):map__68017);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68017__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__68018 = p__68016;
var map__68018__$1 = (((((!((map__68018 == null))))?(((((map__68018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68018):map__68018);
var msg = map__68018__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68018__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__68021,p__68022){
var map__68023 = p__68021;
var map__68023__$1 = (((((!((map__68023 == null))))?(((((map__68023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68023):map__68023);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68023__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__68024 = p__68022;
var map__68024__$1 = (((((!((map__68024 == null))))?(((((map__68024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68024):map__68024);
var msg = map__68024__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68024__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__68027 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__68029 = null;
var count__68030 = (0);
var i__68031 = (0);
while(true){
if((i__68031 < count__68030)){
var map__68037 = chunk__68029.cljs$core$IIndexed$_nth$arity$2(null,i__68031);
var map__68037__$1 = (((((!((map__68037 == null))))?(((((map__68037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68037):map__68037);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68037__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__68084 = seq__68027;
var G__68085 = chunk__68029;
var G__68086 = count__68030;
var G__68087 = (i__68031 + (1));
seq__68027 = G__68084;
chunk__68029 = G__68085;
count__68030 = G__68086;
i__68031 = G__68087;
continue;
} else {
var G__68088 = seq__68027;
var G__68089 = chunk__68029;
var G__68090 = count__68030;
var G__68091 = (i__68031 + (1));
seq__68027 = G__68088;
chunk__68029 = G__68089;
count__68030 = G__68090;
i__68031 = G__68091;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68027);
if(temp__5735__auto__){
var seq__68027__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68027__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68027__$1);
var G__68092 = cljs.core.chunk_rest(seq__68027__$1);
var G__68093 = c__4609__auto__;
var G__68094 = cljs.core.count(c__4609__auto__);
var G__68095 = (0);
seq__68027 = G__68092;
chunk__68029 = G__68093;
count__68030 = G__68094;
i__68031 = G__68095;
continue;
} else {
var map__68039 = cljs.core.first(seq__68027__$1);
var map__68039__$1 = (((((!((map__68039 == null))))?(((((map__68039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68039):map__68039);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68039__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__68096 = cljs.core.next(seq__68027__$1);
var G__68097 = null;
var G__68098 = (0);
var G__68099 = (0);
seq__68027 = G__68096;
chunk__68029 = G__68097;
count__68030 = G__68098;
i__68031 = G__68099;
continue;
} else {
var G__68100 = cljs.core.next(seq__68027__$1);
var G__68101 = null;
var G__68102 = (0);
var G__68103 = (0);
seq__68027 = G__68100;
chunk__68029 = G__68101;
count__68030 = G__68102;
i__68031 = G__68103;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__68041,msg){
var map__68042 = p__68041;
var map__68042__$1 = (((((!((map__68042 == null))))?(((((map__68042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68042):map__68042);
var runtime = map__68042__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68042__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__68044,key,p__68045){
var map__68046 = p__68044;
var map__68046__$1 = (((((!((map__68046 == null))))?(((((map__68046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68046):map__68046);
var state = map__68046__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68046__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__68047 = p__68045;
var map__68047__$1 = (((((!((map__68047 == null))))?(((((map__68047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68047):map__68047);
var spec = map__68047__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68047__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__68050,key,spec){
var map__68051 = p__68050;
var map__68051__$1 = (((((!((map__68051 == null))))?(((((map__68051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68051):map__68051);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68051__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__68058){
var map__68059 = p__68058;
var map__68059__$1 = (((((!((map__68059 == null))))?(((((map__68059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68059):map__68059);
var runtime = map__68059__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68059__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__68053_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__68053_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__68054_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__68054_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__68055_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__68055_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__68056_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__68056_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__68057_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__68057_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__68061,key){
var map__68062 = p__68061;
var map__68062__$1 = (((((!((map__68062 == null))))?(((((map__68062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68062):map__68062);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68062__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__68064,p__68065){
var map__68066 = p__68064;
var map__68066__$1 = (((((!((map__68066 == null))))?(((((map__68066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68066):map__68066);
var runtime = map__68066__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68066__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__68067 = p__68065;
var map__68067__$1 = (((((!((map__68067 == null))))?(((((map__68067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68067):map__68067);
var msg = map__68067__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68067__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__68070 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__68072 = null;
var count__68073 = (0);
var i__68074 = (0);
while(true){
if((i__68074 < count__68073)){
var map__68080 = chunk__68072.cljs$core$IIndexed$_nth$arity$2(null,i__68074);
var map__68080__$1 = (((((!((map__68080 == null))))?(((((map__68080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68080):map__68080);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68080__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__68104 = seq__68070;
var G__68105 = chunk__68072;
var G__68106 = count__68073;
var G__68107 = (i__68074 + (1));
seq__68070 = G__68104;
chunk__68072 = G__68105;
count__68073 = G__68106;
i__68074 = G__68107;
continue;
} else {
var G__68108 = seq__68070;
var G__68109 = chunk__68072;
var G__68110 = count__68073;
var G__68111 = (i__68074 + (1));
seq__68070 = G__68108;
chunk__68072 = G__68109;
count__68073 = G__68110;
i__68074 = G__68111;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68070);
if(temp__5735__auto__){
var seq__68070__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68070__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68070__$1);
var G__68112 = cljs.core.chunk_rest(seq__68070__$1);
var G__68113 = c__4609__auto__;
var G__68114 = cljs.core.count(c__4609__auto__);
var G__68115 = (0);
seq__68070 = G__68112;
chunk__68072 = G__68113;
count__68073 = G__68114;
i__68074 = G__68115;
continue;
} else {
var map__68082 = cljs.core.first(seq__68070__$1);
var map__68082__$1 = (((((!((map__68082 == null))))?(((((map__68082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68082):map__68082);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68082__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__68116 = cljs.core.next(seq__68070__$1);
var G__68117 = null;
var G__68118 = (0);
var G__68119 = (0);
seq__68070 = G__68116;
chunk__68072 = G__68117;
count__68073 = G__68118;
i__68074 = G__68119;
continue;
} else {
var G__68120 = cljs.core.next(seq__68070__$1);
var G__68121 = null;
var G__68122 = (0);
var G__68123 = (0);
seq__68070 = G__68120;
chunk__68072 = G__68121;
count__68073 = G__68122;
i__68074 = G__68123;
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
