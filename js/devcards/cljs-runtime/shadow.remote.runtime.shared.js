goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__60745,p__60746){
var map__60747 = p__60745;
var map__60747__$1 = (((((!((map__60747 == null))))?(((((map__60747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60747):map__60747);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60747__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60748 = p__60746;
var map__60748__$1 = (((((!((map__60748 == null))))?(((((map__60748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60748):map__60748);
var msg = map__60748__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60748__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__60751,p__60752){
var map__60753 = p__60751;
var map__60753__$1 = (((((!((map__60753 == null))))?(((((map__60753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60753):map__60753);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60753__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60754 = p__60752;
var map__60754__$1 = (((((!((map__60754 == null))))?(((((map__60754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60754):map__60754);
var msg = map__60754__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60754__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__60757 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60759 = null;
var count__60760 = (0);
var i__60761 = (0);
while(true){
if((i__60761 < count__60760)){
var map__60767 = chunk__60759.cljs$core$IIndexed$_nth$arity$2(null,i__60761);
var map__60767__$1 = (((((!((map__60767 == null))))?(((((map__60767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60767):map__60767);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60767__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60814 = seq__60757;
var G__60815 = chunk__60759;
var G__60816 = count__60760;
var G__60817 = (i__60761 + (1));
seq__60757 = G__60814;
chunk__60759 = G__60815;
count__60760 = G__60816;
i__60761 = G__60817;
continue;
} else {
var G__60818 = seq__60757;
var G__60819 = chunk__60759;
var G__60820 = count__60760;
var G__60821 = (i__60761 + (1));
seq__60757 = G__60818;
chunk__60759 = G__60819;
count__60760 = G__60820;
i__60761 = G__60821;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60757);
if(temp__5735__auto__){
var seq__60757__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60757__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60757__$1);
var G__60822 = cljs.core.chunk_rest(seq__60757__$1);
var G__60823 = c__4609__auto__;
var G__60824 = cljs.core.count(c__4609__auto__);
var G__60825 = (0);
seq__60757 = G__60822;
chunk__60759 = G__60823;
count__60760 = G__60824;
i__60761 = G__60825;
continue;
} else {
var map__60769 = cljs.core.first(seq__60757__$1);
var map__60769__$1 = (((((!((map__60769 == null))))?(((((map__60769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60769):map__60769);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60769__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60826 = cljs.core.next(seq__60757__$1);
var G__60827 = null;
var G__60828 = (0);
var G__60829 = (0);
seq__60757 = G__60826;
chunk__60759 = G__60827;
count__60760 = G__60828;
i__60761 = G__60829;
continue;
} else {
var G__60830 = cljs.core.next(seq__60757__$1);
var G__60831 = null;
var G__60832 = (0);
var G__60833 = (0);
seq__60757 = G__60830;
chunk__60759 = G__60831;
count__60760 = G__60832;
i__60761 = G__60833;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__60771,msg){
var map__60772 = p__60771;
var map__60772__$1 = (((((!((map__60772 == null))))?(((((map__60772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60772):map__60772);
var runtime = map__60772__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60772__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__60774,key,p__60775){
var map__60776 = p__60774;
var map__60776__$1 = (((((!((map__60776 == null))))?(((((map__60776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60776):map__60776);
var state = map__60776__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60776__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__60777 = p__60775;
var map__60777__$1 = (((((!((map__60777 == null))))?(((((map__60777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60777):map__60777);
var spec = map__60777__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60777__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__60780,key,spec){
var map__60781 = p__60780;
var map__60781__$1 = (((((!((map__60781 == null))))?(((((map__60781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60781):map__60781);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60781__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__60788){
var map__60789 = p__60788;
var map__60789__$1 = (((((!((map__60789 == null))))?(((((map__60789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60789):map__60789);
var runtime = map__60789__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60789__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__60783_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__60783_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__60784_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__60784_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__60785_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__60785_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__60786_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__60786_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__60787_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__60787_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__60791,key){
var map__60792 = p__60791;
var map__60792__$1 = (((((!((map__60792 == null))))?(((((map__60792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60792):map__60792);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60792__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__60794,p__60795){
var map__60796 = p__60794;
var map__60796__$1 = (((((!((map__60796 == null))))?(((((map__60796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60796):map__60796);
var runtime = map__60796__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60796__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60797 = p__60795;
var map__60797__$1 = (((((!((map__60797 == null))))?(((((map__60797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60797):map__60797);
var msg = map__60797__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60797__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__60800 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60802 = null;
var count__60803 = (0);
var i__60804 = (0);
while(true){
if((i__60804 < count__60803)){
var map__60810 = chunk__60802.cljs$core$IIndexed$_nth$arity$2(null,i__60804);
var map__60810__$1 = (((((!((map__60810 == null))))?(((((map__60810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60810):map__60810);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60810__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60834 = seq__60800;
var G__60835 = chunk__60802;
var G__60836 = count__60803;
var G__60837 = (i__60804 + (1));
seq__60800 = G__60834;
chunk__60802 = G__60835;
count__60803 = G__60836;
i__60804 = G__60837;
continue;
} else {
var G__60838 = seq__60800;
var G__60839 = chunk__60802;
var G__60840 = count__60803;
var G__60841 = (i__60804 + (1));
seq__60800 = G__60838;
chunk__60802 = G__60839;
count__60803 = G__60840;
i__60804 = G__60841;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60800);
if(temp__5735__auto__){
var seq__60800__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60800__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60800__$1);
var G__60842 = cljs.core.chunk_rest(seq__60800__$1);
var G__60843 = c__4609__auto__;
var G__60844 = cljs.core.count(c__4609__auto__);
var G__60845 = (0);
seq__60800 = G__60842;
chunk__60802 = G__60843;
count__60803 = G__60844;
i__60804 = G__60845;
continue;
} else {
var map__60812 = cljs.core.first(seq__60800__$1);
var map__60812__$1 = (((((!((map__60812 == null))))?(((((map__60812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60812):map__60812);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60812__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60846 = cljs.core.next(seq__60800__$1);
var G__60847 = null;
var G__60848 = (0);
var G__60849 = (0);
seq__60800 = G__60846;
chunk__60802 = G__60847;
count__60803 = G__60848;
i__60804 = G__60849;
continue;
} else {
var G__60850 = cljs.core.next(seq__60800__$1);
var G__60851 = null;
var G__60852 = (0);
var G__60853 = (0);
seq__60800 = G__60850;
chunk__60802 = G__60851;
count__60803 = G__60852;
i__60804 = G__60853;
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
