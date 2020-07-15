goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__61110,p__61111){
var map__61112 = p__61110;
var map__61112__$1 = (((((!((map__61112 == null))))?(((((map__61112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61112):map__61112);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61112__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61113 = p__61111;
var map__61113__$1 = (((((!((map__61113 == null))))?(((((map__61113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61113):map__61113);
var msg = map__61113__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61113__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__61116,p__61117){
var map__61118 = p__61116;
var map__61118__$1 = (((((!((map__61118 == null))))?(((((map__61118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61118):map__61118);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61118__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61119 = p__61117;
var map__61119__$1 = (((((!((map__61119 == null))))?(((((map__61119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61119):map__61119);
var msg = map__61119__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61119__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__61122 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__61124 = null;
var count__61125 = (0);
var i__61126 = (0);
while(true){
if((i__61126 < count__61125)){
var map__61132 = chunk__61124.cljs$core$IIndexed$_nth$arity$2(null,i__61126);
var map__61132__$1 = (((((!((map__61132 == null))))?(((((map__61132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61132):map__61132);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61132__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__61179 = seq__61122;
var G__61180 = chunk__61124;
var G__61181 = count__61125;
var G__61182 = (i__61126 + (1));
seq__61122 = G__61179;
chunk__61124 = G__61180;
count__61125 = G__61181;
i__61126 = G__61182;
continue;
} else {
var G__61183 = seq__61122;
var G__61184 = chunk__61124;
var G__61185 = count__61125;
var G__61186 = (i__61126 + (1));
seq__61122 = G__61183;
chunk__61124 = G__61184;
count__61125 = G__61185;
i__61126 = G__61186;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61122);
if(temp__5735__auto__){
var seq__61122__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61122__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61122__$1);
var G__61187 = cljs.core.chunk_rest(seq__61122__$1);
var G__61188 = c__4609__auto__;
var G__61189 = cljs.core.count(c__4609__auto__);
var G__61190 = (0);
seq__61122 = G__61187;
chunk__61124 = G__61188;
count__61125 = G__61189;
i__61126 = G__61190;
continue;
} else {
var map__61134 = cljs.core.first(seq__61122__$1);
var map__61134__$1 = (((((!((map__61134 == null))))?(((((map__61134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61134):map__61134);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61134__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__61191 = cljs.core.next(seq__61122__$1);
var G__61192 = null;
var G__61193 = (0);
var G__61194 = (0);
seq__61122 = G__61191;
chunk__61124 = G__61192;
count__61125 = G__61193;
i__61126 = G__61194;
continue;
} else {
var G__61195 = cljs.core.next(seq__61122__$1);
var G__61196 = null;
var G__61197 = (0);
var G__61198 = (0);
seq__61122 = G__61195;
chunk__61124 = G__61196;
count__61125 = G__61197;
i__61126 = G__61198;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__61136,msg){
var map__61137 = p__61136;
var map__61137__$1 = (((((!((map__61137 == null))))?(((((map__61137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61137):map__61137);
var runtime = map__61137__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61137__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__61139,key,p__61140){
var map__61141 = p__61139;
var map__61141__$1 = (((((!((map__61141 == null))))?(((((map__61141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61141):map__61141);
var state = map__61141__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61141__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__61142 = p__61140;
var map__61142__$1 = (((((!((map__61142 == null))))?(((((map__61142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61142):map__61142);
var spec = map__61142__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61142__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__61145,key,spec){
var map__61146 = p__61145;
var map__61146__$1 = (((((!((map__61146 == null))))?(((((map__61146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61146):map__61146);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61146__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__61153){
var map__61154 = p__61153;
var map__61154__$1 = (((((!((map__61154 == null))))?(((((map__61154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61154):map__61154);
var runtime = map__61154__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61154__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__61148_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__61148_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__61149_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__61149_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__61150_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__61150_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__61151_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__61151_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__61152_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__61152_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__61156,key){
var map__61157 = p__61156;
var map__61157__$1 = (((((!((map__61157 == null))))?(((((map__61157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61157):map__61157);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61157__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__61159,p__61160){
var map__61161 = p__61159;
var map__61161__$1 = (((((!((map__61161 == null))))?(((((map__61161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61161):map__61161);
var runtime = map__61161__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61161__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61162 = p__61160;
var map__61162__$1 = (((((!((map__61162 == null))))?(((((map__61162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61162):map__61162);
var msg = map__61162__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61162__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__61165 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__61167 = null;
var count__61168 = (0);
var i__61169 = (0);
while(true){
if((i__61169 < count__61168)){
var map__61175 = chunk__61167.cljs$core$IIndexed$_nth$arity$2(null,i__61169);
var map__61175__$1 = (((((!((map__61175 == null))))?(((((map__61175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61175):map__61175);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61175__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61199 = seq__61165;
var G__61200 = chunk__61167;
var G__61201 = count__61168;
var G__61202 = (i__61169 + (1));
seq__61165 = G__61199;
chunk__61167 = G__61200;
count__61168 = G__61201;
i__61169 = G__61202;
continue;
} else {
var G__61203 = seq__61165;
var G__61204 = chunk__61167;
var G__61205 = count__61168;
var G__61206 = (i__61169 + (1));
seq__61165 = G__61203;
chunk__61167 = G__61204;
count__61168 = G__61205;
i__61169 = G__61206;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61165);
if(temp__5735__auto__){
var seq__61165__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61165__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61165__$1);
var G__61207 = cljs.core.chunk_rest(seq__61165__$1);
var G__61208 = c__4609__auto__;
var G__61209 = cljs.core.count(c__4609__auto__);
var G__61210 = (0);
seq__61165 = G__61207;
chunk__61167 = G__61208;
count__61168 = G__61209;
i__61169 = G__61210;
continue;
} else {
var map__61177 = cljs.core.first(seq__61165__$1);
var map__61177__$1 = (((((!((map__61177 == null))))?(((((map__61177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61177):map__61177);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61177__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61211 = cljs.core.next(seq__61165__$1);
var G__61212 = null;
var G__61213 = (0);
var G__61214 = (0);
seq__61165 = G__61211;
chunk__61167 = G__61212;
count__61168 = G__61213;
i__61169 = G__61214;
continue;
} else {
var G__61215 = cljs.core.next(seq__61165__$1);
var G__61216 = null;
var G__61217 = (0);
var G__61218 = (0);
seq__61165 = G__61215;
chunk__61167 = G__61216;
count__61168 = G__61217;
i__61169 = G__61218;
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
