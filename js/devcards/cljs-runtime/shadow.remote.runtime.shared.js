goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__60770,p__60771){
var map__60772 = p__60770;
var map__60772__$1 = (((((!((map__60772 == null))))?(((((map__60772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60772):map__60772);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60772__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60773 = p__60771;
var map__60773__$1 = (((((!((map__60773 == null))))?(((((map__60773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60773):map__60773);
var msg = map__60773__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60773__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__60776,p__60777){
var map__60778 = p__60776;
var map__60778__$1 = (((((!((map__60778 == null))))?(((((map__60778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60778):map__60778);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60778__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60779 = p__60777;
var map__60779__$1 = (((((!((map__60779 == null))))?(((((map__60779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60779):map__60779);
var msg = map__60779__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60779__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__60782 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60784 = null;
var count__60785 = (0);
var i__60786 = (0);
while(true){
if((i__60786 < count__60785)){
var map__60792 = chunk__60784.cljs$core$IIndexed$_nth$arity$2(null,i__60786);
var map__60792__$1 = (((((!((map__60792 == null))))?(((((map__60792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60792):map__60792);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60792__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60839 = seq__60782;
var G__60840 = chunk__60784;
var G__60841 = count__60785;
var G__60842 = (i__60786 + (1));
seq__60782 = G__60839;
chunk__60784 = G__60840;
count__60785 = G__60841;
i__60786 = G__60842;
continue;
} else {
var G__60843 = seq__60782;
var G__60844 = chunk__60784;
var G__60845 = count__60785;
var G__60846 = (i__60786 + (1));
seq__60782 = G__60843;
chunk__60784 = G__60844;
count__60785 = G__60845;
i__60786 = G__60846;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60782);
if(temp__5735__auto__){
var seq__60782__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60782__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60782__$1);
var G__60847 = cljs.core.chunk_rest(seq__60782__$1);
var G__60848 = c__4609__auto__;
var G__60849 = cljs.core.count(c__4609__auto__);
var G__60850 = (0);
seq__60782 = G__60847;
chunk__60784 = G__60848;
count__60785 = G__60849;
i__60786 = G__60850;
continue;
} else {
var map__60794 = cljs.core.first(seq__60782__$1);
var map__60794__$1 = (((((!((map__60794 == null))))?(((((map__60794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60794):map__60794);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60794__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60851 = cljs.core.next(seq__60782__$1);
var G__60852 = null;
var G__60853 = (0);
var G__60854 = (0);
seq__60782 = G__60851;
chunk__60784 = G__60852;
count__60785 = G__60853;
i__60786 = G__60854;
continue;
} else {
var G__60855 = cljs.core.next(seq__60782__$1);
var G__60856 = null;
var G__60857 = (0);
var G__60858 = (0);
seq__60782 = G__60855;
chunk__60784 = G__60856;
count__60785 = G__60857;
i__60786 = G__60858;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__60796,msg){
var map__60797 = p__60796;
var map__60797__$1 = (((((!((map__60797 == null))))?(((((map__60797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60797):map__60797);
var runtime = map__60797__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60797__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__60799,key,p__60800){
var map__60801 = p__60799;
var map__60801__$1 = (((((!((map__60801 == null))))?(((((map__60801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60801):map__60801);
var state = map__60801__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60801__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__60802 = p__60800;
var map__60802__$1 = (((((!((map__60802 == null))))?(((((map__60802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60802):map__60802);
var spec = map__60802__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60802__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__60805,key,spec){
var map__60806 = p__60805;
var map__60806__$1 = (((((!((map__60806 == null))))?(((((map__60806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60806):map__60806);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60806__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__60813){
var map__60814 = p__60813;
var map__60814__$1 = (((((!((map__60814 == null))))?(((((map__60814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60814):map__60814);
var runtime = map__60814__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60814__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__60808_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__60808_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__60809_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__60809_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__60810_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__60810_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__60811_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__60811_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__60812_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__60812_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__60816,key){
var map__60817 = p__60816;
var map__60817__$1 = (((((!((map__60817 == null))))?(((((map__60817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60817):map__60817);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60817__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__60819,p__60820){
var map__60821 = p__60819;
var map__60821__$1 = (((((!((map__60821 == null))))?(((((map__60821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60821):map__60821);
var runtime = map__60821__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60821__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60822 = p__60820;
var map__60822__$1 = (((((!((map__60822 == null))))?(((((map__60822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60822):map__60822);
var msg = map__60822__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60822__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__60825 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60827 = null;
var count__60828 = (0);
var i__60829 = (0);
while(true){
if((i__60829 < count__60828)){
var map__60835 = chunk__60827.cljs$core$IIndexed$_nth$arity$2(null,i__60829);
var map__60835__$1 = (((((!((map__60835 == null))))?(((((map__60835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60835):map__60835);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60835__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60859 = seq__60825;
var G__60860 = chunk__60827;
var G__60861 = count__60828;
var G__60862 = (i__60829 + (1));
seq__60825 = G__60859;
chunk__60827 = G__60860;
count__60828 = G__60861;
i__60829 = G__60862;
continue;
} else {
var G__60863 = seq__60825;
var G__60864 = chunk__60827;
var G__60865 = count__60828;
var G__60866 = (i__60829 + (1));
seq__60825 = G__60863;
chunk__60827 = G__60864;
count__60828 = G__60865;
i__60829 = G__60866;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60825);
if(temp__5735__auto__){
var seq__60825__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60825__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60825__$1);
var G__60867 = cljs.core.chunk_rest(seq__60825__$1);
var G__60868 = c__4609__auto__;
var G__60869 = cljs.core.count(c__4609__auto__);
var G__60870 = (0);
seq__60825 = G__60867;
chunk__60827 = G__60868;
count__60828 = G__60869;
i__60829 = G__60870;
continue;
} else {
var map__60837 = cljs.core.first(seq__60825__$1);
var map__60837__$1 = (((((!((map__60837 == null))))?(((((map__60837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60837):map__60837);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60837__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60871 = cljs.core.next(seq__60825__$1);
var G__60872 = null;
var G__60873 = (0);
var G__60874 = (0);
seq__60825 = G__60871;
chunk__60827 = G__60872;
count__60828 = G__60873;
i__60829 = G__60874;
continue;
} else {
var G__60875 = cljs.core.next(seq__60825__$1);
var G__60876 = null;
var G__60877 = (0);
var G__60878 = (0);
seq__60825 = G__60875;
chunk__60827 = G__60876;
count__60828 = G__60877;
i__60829 = G__60878;
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
