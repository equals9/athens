goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__67703,p__67704){
var map__67705 = p__67703;
var map__67705__$1 = (((((!((map__67705 == null))))?(((((map__67705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67705):map__67705);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67705__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67706 = p__67704;
var map__67706__$1 = (((((!((map__67706 == null))))?(((((map__67706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67706):map__67706);
var msg = map__67706__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67706__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__67709,p__67710){
var map__67711 = p__67709;
var map__67711__$1 = (((((!((map__67711 == null))))?(((((map__67711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67711):map__67711);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67711__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67712 = p__67710;
var map__67712__$1 = (((((!((map__67712 == null))))?(((((map__67712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67712):map__67712);
var msg = map__67712__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67712__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__67715 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__67717 = null;
var count__67718 = (0);
var i__67719 = (0);
while(true){
if((i__67719 < count__67718)){
var map__67725 = chunk__67717.cljs$core$IIndexed$_nth$arity$2(null,i__67719);
var map__67725__$1 = (((((!((map__67725 == null))))?(((((map__67725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67725):map__67725);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67725__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__67772 = seq__67715;
var G__67773 = chunk__67717;
var G__67774 = count__67718;
var G__67775 = (i__67719 + (1));
seq__67715 = G__67772;
chunk__67717 = G__67773;
count__67718 = G__67774;
i__67719 = G__67775;
continue;
} else {
var G__67776 = seq__67715;
var G__67777 = chunk__67717;
var G__67778 = count__67718;
var G__67779 = (i__67719 + (1));
seq__67715 = G__67776;
chunk__67717 = G__67777;
count__67718 = G__67778;
i__67719 = G__67779;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67715);
if(temp__5735__auto__){
var seq__67715__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67715__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__67715__$1);
var G__67780 = cljs.core.chunk_rest(seq__67715__$1);
var G__67781 = c__4609__auto__;
var G__67782 = cljs.core.count(c__4609__auto__);
var G__67783 = (0);
seq__67715 = G__67780;
chunk__67717 = G__67781;
count__67718 = G__67782;
i__67719 = G__67783;
continue;
} else {
var map__67727 = cljs.core.first(seq__67715__$1);
var map__67727__$1 = (((((!((map__67727 == null))))?(((((map__67727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67727):map__67727);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67727__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__67784 = cljs.core.next(seq__67715__$1);
var G__67785 = null;
var G__67786 = (0);
var G__67787 = (0);
seq__67715 = G__67784;
chunk__67717 = G__67785;
count__67718 = G__67786;
i__67719 = G__67787;
continue;
} else {
var G__67788 = cljs.core.next(seq__67715__$1);
var G__67789 = null;
var G__67790 = (0);
var G__67791 = (0);
seq__67715 = G__67788;
chunk__67717 = G__67789;
count__67718 = G__67790;
i__67719 = G__67791;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__67729,msg){
var map__67730 = p__67729;
var map__67730__$1 = (((((!((map__67730 == null))))?(((((map__67730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67730):map__67730);
var runtime = map__67730__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67730__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__67732,key,p__67733){
var map__67734 = p__67732;
var map__67734__$1 = (((((!((map__67734 == null))))?(((((map__67734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67734):map__67734);
var state = map__67734__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67734__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__67735 = p__67733;
var map__67735__$1 = (((((!((map__67735 == null))))?(((((map__67735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67735):map__67735);
var spec = map__67735__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67735__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__67738,key,spec){
var map__67739 = p__67738;
var map__67739__$1 = (((((!((map__67739 == null))))?(((((map__67739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67739):map__67739);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67739__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__67746){
var map__67747 = p__67746;
var map__67747__$1 = (((((!((map__67747 == null))))?(((((map__67747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67747):map__67747);
var runtime = map__67747__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67747__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__67741_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__67741_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__67742_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__67742_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__67743_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__67743_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__67744_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__67744_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__67745_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__67745_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__67749,key){
var map__67750 = p__67749;
var map__67750__$1 = (((((!((map__67750 == null))))?(((((map__67750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67750):map__67750);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67750__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__67752,p__67753){
var map__67754 = p__67752;
var map__67754__$1 = (((((!((map__67754 == null))))?(((((map__67754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67754):map__67754);
var runtime = map__67754__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67754__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67755 = p__67753;
var map__67755__$1 = (((((!((map__67755 == null))))?(((((map__67755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67755):map__67755);
var msg = map__67755__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67755__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__67758 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__67760 = null;
var count__67761 = (0);
var i__67762 = (0);
while(true){
if((i__67762 < count__67761)){
var map__67768 = chunk__67760.cljs$core$IIndexed$_nth$arity$2(null,i__67762);
var map__67768__$1 = (((((!((map__67768 == null))))?(((((map__67768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67768):map__67768);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67768__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__67792 = seq__67758;
var G__67793 = chunk__67760;
var G__67794 = count__67761;
var G__67795 = (i__67762 + (1));
seq__67758 = G__67792;
chunk__67760 = G__67793;
count__67761 = G__67794;
i__67762 = G__67795;
continue;
} else {
var G__67796 = seq__67758;
var G__67797 = chunk__67760;
var G__67798 = count__67761;
var G__67799 = (i__67762 + (1));
seq__67758 = G__67796;
chunk__67760 = G__67797;
count__67761 = G__67798;
i__67762 = G__67799;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67758);
if(temp__5735__auto__){
var seq__67758__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67758__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__67758__$1);
var G__67800 = cljs.core.chunk_rest(seq__67758__$1);
var G__67801 = c__4609__auto__;
var G__67802 = cljs.core.count(c__4609__auto__);
var G__67803 = (0);
seq__67758 = G__67800;
chunk__67760 = G__67801;
count__67761 = G__67802;
i__67762 = G__67803;
continue;
} else {
var map__67770 = cljs.core.first(seq__67758__$1);
var map__67770__$1 = (((((!((map__67770 == null))))?(((((map__67770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67770):map__67770);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67770__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__67804 = cljs.core.next(seq__67758__$1);
var G__67805 = null;
var G__67806 = (0);
var G__67807 = (0);
seq__67758 = G__67804;
chunk__67760 = G__67805;
count__67761 = G__67806;
i__67762 = G__67807;
continue;
} else {
var G__67808 = cljs.core.next(seq__67758__$1);
var G__67809 = null;
var G__67810 = (0);
var G__67811 = (0);
seq__67758 = G__67808;
chunk__67760 = G__67809;
count__67761 = G__67810;
i__67762 = G__67811;
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
