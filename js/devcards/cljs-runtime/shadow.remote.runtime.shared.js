goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__61082,p__61083){
var map__61084 = p__61082;
var map__61084__$1 = (((((!((map__61084 == null))))?(((((map__61084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61084):map__61084);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61084__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61085 = p__61083;
var map__61085__$1 = (((((!((map__61085 == null))))?(((((map__61085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61085):map__61085);
var msg = map__61085__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61085__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__61088,p__61089){
var map__61090 = p__61088;
var map__61090__$1 = (((((!((map__61090 == null))))?(((((map__61090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61090):map__61090);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61090__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61091 = p__61089;
var map__61091__$1 = (((((!((map__61091 == null))))?(((((map__61091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61091):map__61091);
var msg = map__61091__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61091__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__61094 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__61096 = null;
var count__61097 = (0);
var i__61098 = (0);
while(true){
if((i__61098 < count__61097)){
var map__61104 = chunk__61096.cljs$core$IIndexed$_nth$arity$2(null,i__61098);
var map__61104__$1 = (((((!((map__61104 == null))))?(((((map__61104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61104):map__61104);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61104__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__61151 = seq__61094;
var G__61152 = chunk__61096;
var G__61153 = count__61097;
var G__61154 = (i__61098 + (1));
seq__61094 = G__61151;
chunk__61096 = G__61152;
count__61097 = G__61153;
i__61098 = G__61154;
continue;
} else {
var G__61155 = seq__61094;
var G__61156 = chunk__61096;
var G__61157 = count__61097;
var G__61158 = (i__61098 + (1));
seq__61094 = G__61155;
chunk__61096 = G__61156;
count__61097 = G__61157;
i__61098 = G__61158;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61094);
if(temp__5735__auto__){
var seq__61094__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61094__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61094__$1);
var G__61159 = cljs.core.chunk_rest(seq__61094__$1);
var G__61160 = c__4609__auto__;
var G__61161 = cljs.core.count(c__4609__auto__);
var G__61162 = (0);
seq__61094 = G__61159;
chunk__61096 = G__61160;
count__61097 = G__61161;
i__61098 = G__61162;
continue;
} else {
var map__61106 = cljs.core.first(seq__61094__$1);
var map__61106__$1 = (((((!((map__61106 == null))))?(((((map__61106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61106):map__61106);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61106__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__61163 = cljs.core.next(seq__61094__$1);
var G__61164 = null;
var G__61165 = (0);
var G__61166 = (0);
seq__61094 = G__61163;
chunk__61096 = G__61164;
count__61097 = G__61165;
i__61098 = G__61166;
continue;
} else {
var G__61167 = cljs.core.next(seq__61094__$1);
var G__61168 = null;
var G__61169 = (0);
var G__61170 = (0);
seq__61094 = G__61167;
chunk__61096 = G__61168;
count__61097 = G__61169;
i__61098 = G__61170;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__61108,msg){
var map__61109 = p__61108;
var map__61109__$1 = (((((!((map__61109 == null))))?(((((map__61109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61109):map__61109);
var runtime = map__61109__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61109__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__61111,key,p__61112){
var map__61113 = p__61111;
var map__61113__$1 = (((((!((map__61113 == null))))?(((((map__61113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61113):map__61113);
var state = map__61113__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61113__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__61114 = p__61112;
var map__61114__$1 = (((((!((map__61114 == null))))?(((((map__61114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61114):map__61114);
var spec = map__61114__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61114__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__61117,key,spec){
var map__61118 = p__61117;
var map__61118__$1 = (((((!((map__61118 == null))))?(((((map__61118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61118):map__61118);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61118__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__61125){
var map__61126 = p__61125;
var map__61126__$1 = (((((!((map__61126 == null))))?(((((map__61126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61126):map__61126);
var runtime = map__61126__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61126__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__61120_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__61120_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__61121_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__61121_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__61122_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__61122_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__61123_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__61123_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__61124_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__61124_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__61128,key){
var map__61129 = p__61128;
var map__61129__$1 = (((((!((map__61129 == null))))?(((((map__61129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61129):map__61129);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61129__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__61131,p__61132){
var map__61133 = p__61131;
var map__61133__$1 = (((((!((map__61133 == null))))?(((((map__61133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61133):map__61133);
var runtime = map__61133__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61133__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61134 = p__61132;
var map__61134__$1 = (((((!((map__61134 == null))))?(((((map__61134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61134):map__61134);
var msg = map__61134__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61134__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__61137 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__61139 = null;
var count__61140 = (0);
var i__61141 = (0);
while(true){
if((i__61141 < count__61140)){
var map__61147 = chunk__61139.cljs$core$IIndexed$_nth$arity$2(null,i__61141);
var map__61147__$1 = (((((!((map__61147 == null))))?(((((map__61147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61147):map__61147);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61147__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61171 = seq__61137;
var G__61172 = chunk__61139;
var G__61173 = count__61140;
var G__61174 = (i__61141 + (1));
seq__61137 = G__61171;
chunk__61139 = G__61172;
count__61140 = G__61173;
i__61141 = G__61174;
continue;
} else {
var G__61175 = seq__61137;
var G__61176 = chunk__61139;
var G__61177 = count__61140;
var G__61178 = (i__61141 + (1));
seq__61137 = G__61175;
chunk__61139 = G__61176;
count__61140 = G__61177;
i__61141 = G__61178;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61137);
if(temp__5735__auto__){
var seq__61137__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61137__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61137__$1);
var G__61179 = cljs.core.chunk_rest(seq__61137__$1);
var G__61180 = c__4609__auto__;
var G__61181 = cljs.core.count(c__4609__auto__);
var G__61182 = (0);
seq__61137 = G__61179;
chunk__61139 = G__61180;
count__61140 = G__61181;
i__61141 = G__61182;
continue;
} else {
var map__61149 = cljs.core.first(seq__61137__$1);
var map__61149__$1 = (((((!((map__61149 == null))))?(((((map__61149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61149):map__61149);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61149__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61183 = cljs.core.next(seq__61137__$1);
var G__61184 = null;
var G__61185 = (0);
var G__61186 = (0);
seq__61137 = G__61183;
chunk__61139 = G__61184;
count__61140 = G__61185;
i__61141 = G__61186;
continue;
} else {
var G__61187 = cljs.core.next(seq__61137__$1);
var G__61188 = null;
var G__61189 = (0);
var G__61190 = (0);
seq__61137 = G__61187;
chunk__61139 = G__61188;
count__61140 = G__61189;
i__61141 = G__61190;
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
