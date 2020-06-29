goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__67704,p__67705){
var map__67706 = p__67704;
var map__67706__$1 = (((((!((map__67706 == null))))?(((((map__67706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67706):map__67706);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67706__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67707 = p__67705;
var map__67707__$1 = (((((!((map__67707 == null))))?(((((map__67707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67707):map__67707);
var msg = map__67707__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67707__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__67710,p__67711){
var map__67712 = p__67710;
var map__67712__$1 = (((((!((map__67712 == null))))?(((((map__67712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67712):map__67712);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67712__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67713 = p__67711;
var map__67713__$1 = (((((!((map__67713 == null))))?(((((map__67713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67713):map__67713);
var msg = map__67713__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67713__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__67716 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__67718 = null;
var count__67719 = (0);
var i__67720 = (0);
while(true){
if((i__67720 < count__67719)){
var map__67726 = chunk__67718.cljs$core$IIndexed$_nth$arity$2(null,i__67720);
var map__67726__$1 = (((((!((map__67726 == null))))?(((((map__67726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67726):map__67726);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67726__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__67773 = seq__67716;
var G__67774 = chunk__67718;
var G__67775 = count__67719;
var G__67776 = (i__67720 + (1));
seq__67716 = G__67773;
chunk__67718 = G__67774;
count__67719 = G__67775;
i__67720 = G__67776;
continue;
} else {
var G__67777 = seq__67716;
var G__67778 = chunk__67718;
var G__67779 = count__67719;
var G__67780 = (i__67720 + (1));
seq__67716 = G__67777;
chunk__67718 = G__67778;
count__67719 = G__67779;
i__67720 = G__67780;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67716);
if(temp__5735__auto__){
var seq__67716__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67716__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__67716__$1);
var G__67781 = cljs.core.chunk_rest(seq__67716__$1);
var G__67782 = c__4609__auto__;
var G__67783 = cljs.core.count(c__4609__auto__);
var G__67784 = (0);
seq__67716 = G__67781;
chunk__67718 = G__67782;
count__67719 = G__67783;
i__67720 = G__67784;
continue;
} else {
var map__67728 = cljs.core.first(seq__67716__$1);
var map__67728__$1 = (((((!((map__67728 == null))))?(((((map__67728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67728):map__67728);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67728__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__67785 = cljs.core.next(seq__67716__$1);
var G__67786 = null;
var G__67787 = (0);
var G__67788 = (0);
seq__67716 = G__67785;
chunk__67718 = G__67786;
count__67719 = G__67787;
i__67720 = G__67788;
continue;
} else {
var G__67789 = cljs.core.next(seq__67716__$1);
var G__67790 = null;
var G__67791 = (0);
var G__67792 = (0);
seq__67716 = G__67789;
chunk__67718 = G__67790;
count__67719 = G__67791;
i__67720 = G__67792;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__67730,msg){
var map__67731 = p__67730;
var map__67731__$1 = (((((!((map__67731 == null))))?(((((map__67731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67731):map__67731);
var runtime = map__67731__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67731__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__67733,key,p__67734){
var map__67735 = p__67733;
var map__67735__$1 = (((((!((map__67735 == null))))?(((((map__67735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67735):map__67735);
var state = map__67735__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67735__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__67736 = p__67734;
var map__67736__$1 = (((((!((map__67736 == null))))?(((((map__67736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67736):map__67736);
var spec = map__67736__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67736__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__67739,key,spec){
var map__67740 = p__67739;
var map__67740__$1 = (((((!((map__67740 == null))))?(((((map__67740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67740):map__67740);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67740__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__67747){
var map__67748 = p__67747;
var map__67748__$1 = (((((!((map__67748 == null))))?(((((map__67748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67748):map__67748);
var runtime = map__67748__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67748__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__67742_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__67742_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__67743_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__67743_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__67744_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__67744_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__67745_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__67745_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__67746_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__67746_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__67750,key){
var map__67751 = p__67750;
var map__67751__$1 = (((((!((map__67751 == null))))?(((((map__67751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67751):map__67751);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67751__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__67753,p__67754){
var map__67755 = p__67753;
var map__67755__$1 = (((((!((map__67755 == null))))?(((((map__67755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67755):map__67755);
var runtime = map__67755__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67755__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67756 = p__67754;
var map__67756__$1 = (((((!((map__67756 == null))))?(((((map__67756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67756):map__67756);
var msg = map__67756__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67756__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__67759 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__67761 = null;
var count__67762 = (0);
var i__67763 = (0);
while(true){
if((i__67763 < count__67762)){
var map__67769 = chunk__67761.cljs$core$IIndexed$_nth$arity$2(null,i__67763);
var map__67769__$1 = (((((!((map__67769 == null))))?(((((map__67769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67769):map__67769);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67769__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__67793 = seq__67759;
var G__67794 = chunk__67761;
var G__67795 = count__67762;
var G__67796 = (i__67763 + (1));
seq__67759 = G__67793;
chunk__67761 = G__67794;
count__67762 = G__67795;
i__67763 = G__67796;
continue;
} else {
var G__67797 = seq__67759;
var G__67798 = chunk__67761;
var G__67799 = count__67762;
var G__67800 = (i__67763 + (1));
seq__67759 = G__67797;
chunk__67761 = G__67798;
count__67762 = G__67799;
i__67763 = G__67800;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67759);
if(temp__5735__auto__){
var seq__67759__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67759__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__67759__$1);
var G__67801 = cljs.core.chunk_rest(seq__67759__$1);
var G__67802 = c__4609__auto__;
var G__67803 = cljs.core.count(c__4609__auto__);
var G__67804 = (0);
seq__67759 = G__67801;
chunk__67761 = G__67802;
count__67762 = G__67803;
i__67763 = G__67804;
continue;
} else {
var map__67771 = cljs.core.first(seq__67759__$1);
var map__67771__$1 = (((((!((map__67771 == null))))?(((((map__67771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67771):map__67771);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67771__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__67805 = cljs.core.next(seq__67759__$1);
var G__67806 = null;
var G__67807 = (0);
var G__67808 = (0);
seq__67759 = G__67805;
chunk__67761 = G__67806;
count__67762 = G__67807;
i__67763 = G__67808;
continue;
} else {
var G__67809 = cljs.core.next(seq__67759__$1);
var G__67810 = null;
var G__67811 = (0);
var G__67812 = (0);
seq__67759 = G__67809;
chunk__67761 = G__67810;
count__67762 = G__67811;
i__67763 = G__67812;
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
