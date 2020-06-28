goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__67727,p__67728){
var map__67729 = p__67727;
var map__67729__$1 = (((((!((map__67729 == null))))?(((((map__67729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67729):map__67729);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67729__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67730 = p__67728;
var map__67730__$1 = (((((!((map__67730 == null))))?(((((map__67730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67730):map__67730);
var msg = map__67730__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67730__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__67733,p__67734){
var map__67735 = p__67733;
var map__67735__$1 = (((((!((map__67735 == null))))?(((((map__67735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67735):map__67735);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67735__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67736 = p__67734;
var map__67736__$1 = (((((!((map__67736 == null))))?(((((map__67736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67736):map__67736);
var msg = map__67736__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67736__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__67739 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__67741 = null;
var count__67742 = (0);
var i__67743 = (0);
while(true){
if((i__67743 < count__67742)){
var map__67749 = chunk__67741.cljs$core$IIndexed$_nth$arity$2(null,i__67743);
var map__67749__$1 = (((((!((map__67749 == null))))?(((((map__67749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67749):map__67749);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67749__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__67796 = seq__67739;
var G__67797 = chunk__67741;
var G__67798 = count__67742;
var G__67799 = (i__67743 + (1));
seq__67739 = G__67796;
chunk__67741 = G__67797;
count__67742 = G__67798;
i__67743 = G__67799;
continue;
} else {
var G__67800 = seq__67739;
var G__67801 = chunk__67741;
var G__67802 = count__67742;
var G__67803 = (i__67743 + (1));
seq__67739 = G__67800;
chunk__67741 = G__67801;
count__67742 = G__67802;
i__67743 = G__67803;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67739);
if(temp__5735__auto__){
var seq__67739__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67739__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__67739__$1);
var G__67804 = cljs.core.chunk_rest(seq__67739__$1);
var G__67805 = c__4609__auto__;
var G__67806 = cljs.core.count(c__4609__auto__);
var G__67807 = (0);
seq__67739 = G__67804;
chunk__67741 = G__67805;
count__67742 = G__67806;
i__67743 = G__67807;
continue;
} else {
var map__67751 = cljs.core.first(seq__67739__$1);
var map__67751__$1 = (((((!((map__67751 == null))))?(((((map__67751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67751):map__67751);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67751__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__67808 = cljs.core.next(seq__67739__$1);
var G__67809 = null;
var G__67810 = (0);
var G__67811 = (0);
seq__67739 = G__67808;
chunk__67741 = G__67809;
count__67742 = G__67810;
i__67743 = G__67811;
continue;
} else {
var G__67812 = cljs.core.next(seq__67739__$1);
var G__67813 = null;
var G__67814 = (0);
var G__67815 = (0);
seq__67739 = G__67812;
chunk__67741 = G__67813;
count__67742 = G__67814;
i__67743 = G__67815;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__67753,msg){
var map__67754 = p__67753;
var map__67754__$1 = (((((!((map__67754 == null))))?(((((map__67754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67754):map__67754);
var runtime = map__67754__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67754__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__67756,key,p__67757){
var map__67758 = p__67756;
var map__67758__$1 = (((((!((map__67758 == null))))?(((((map__67758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67758):map__67758);
var state = map__67758__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67758__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__67759 = p__67757;
var map__67759__$1 = (((((!((map__67759 == null))))?(((((map__67759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67759):map__67759);
var spec = map__67759__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67759__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__67762,key,spec){
var map__67763 = p__67762;
var map__67763__$1 = (((((!((map__67763 == null))))?(((((map__67763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67763):map__67763);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67763__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__67770){
var map__67771 = p__67770;
var map__67771__$1 = (((((!((map__67771 == null))))?(((((map__67771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67771):map__67771);
var runtime = map__67771__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67771__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__67765_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__67765_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__67766_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__67766_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__67767_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__67767_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__67768_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__67768_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__67769_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__67769_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__67773,key){
var map__67774 = p__67773;
var map__67774__$1 = (((((!((map__67774 == null))))?(((((map__67774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67774):map__67774);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67774__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__67776,p__67777){
var map__67778 = p__67776;
var map__67778__$1 = (((((!((map__67778 == null))))?(((((map__67778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67778):map__67778);
var runtime = map__67778__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67778__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67779 = p__67777;
var map__67779__$1 = (((((!((map__67779 == null))))?(((((map__67779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67779):map__67779);
var msg = map__67779__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67779__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__67782 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__67784 = null;
var count__67785 = (0);
var i__67786 = (0);
while(true){
if((i__67786 < count__67785)){
var map__67792 = chunk__67784.cljs$core$IIndexed$_nth$arity$2(null,i__67786);
var map__67792__$1 = (((((!((map__67792 == null))))?(((((map__67792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67792):map__67792);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67792__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__67816 = seq__67782;
var G__67817 = chunk__67784;
var G__67818 = count__67785;
var G__67819 = (i__67786 + (1));
seq__67782 = G__67816;
chunk__67784 = G__67817;
count__67785 = G__67818;
i__67786 = G__67819;
continue;
} else {
var G__67820 = seq__67782;
var G__67821 = chunk__67784;
var G__67822 = count__67785;
var G__67823 = (i__67786 + (1));
seq__67782 = G__67820;
chunk__67784 = G__67821;
count__67785 = G__67822;
i__67786 = G__67823;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67782);
if(temp__5735__auto__){
var seq__67782__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67782__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__67782__$1);
var G__67824 = cljs.core.chunk_rest(seq__67782__$1);
var G__67825 = c__4609__auto__;
var G__67826 = cljs.core.count(c__4609__auto__);
var G__67827 = (0);
seq__67782 = G__67824;
chunk__67784 = G__67825;
count__67785 = G__67826;
i__67786 = G__67827;
continue;
} else {
var map__67794 = cljs.core.first(seq__67782__$1);
var map__67794__$1 = (((((!((map__67794 == null))))?(((((map__67794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67794):map__67794);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67794__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__67828 = cljs.core.next(seq__67782__$1);
var G__67829 = null;
var G__67830 = (0);
var G__67831 = (0);
seq__67782 = G__67828;
chunk__67784 = G__67829;
count__67785 = G__67830;
i__67786 = G__67831;
continue;
} else {
var G__67832 = cljs.core.next(seq__67782__$1);
var G__67833 = null;
var G__67834 = (0);
var G__67835 = (0);
seq__67782 = G__67832;
chunk__67784 = G__67833;
count__67785 = G__67834;
i__67786 = G__67835;
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
