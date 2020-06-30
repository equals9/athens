goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__67706,p__67707){
var map__67708 = p__67706;
var map__67708__$1 = (((((!((map__67708 == null))))?(((((map__67708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67708):map__67708);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67708__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67709 = p__67707;
var map__67709__$1 = (((((!((map__67709 == null))))?(((((map__67709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67709):map__67709);
var msg = map__67709__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67709__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__67712,p__67713){
var map__67714 = p__67712;
var map__67714__$1 = (((((!((map__67714 == null))))?(((((map__67714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67714):map__67714);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67714__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67715 = p__67713;
var map__67715__$1 = (((((!((map__67715 == null))))?(((((map__67715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67715):map__67715);
var msg = map__67715__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67715__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__67718 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__67720 = null;
var count__67721 = (0);
var i__67722 = (0);
while(true){
if((i__67722 < count__67721)){
var map__67728 = chunk__67720.cljs$core$IIndexed$_nth$arity$2(null,i__67722);
var map__67728__$1 = (((((!((map__67728 == null))))?(((((map__67728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67728):map__67728);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67728__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__67775 = seq__67718;
var G__67776 = chunk__67720;
var G__67777 = count__67721;
var G__67778 = (i__67722 + (1));
seq__67718 = G__67775;
chunk__67720 = G__67776;
count__67721 = G__67777;
i__67722 = G__67778;
continue;
} else {
var G__67779 = seq__67718;
var G__67780 = chunk__67720;
var G__67781 = count__67721;
var G__67782 = (i__67722 + (1));
seq__67718 = G__67779;
chunk__67720 = G__67780;
count__67721 = G__67781;
i__67722 = G__67782;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67718);
if(temp__5735__auto__){
var seq__67718__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67718__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__67718__$1);
var G__67783 = cljs.core.chunk_rest(seq__67718__$1);
var G__67784 = c__4609__auto__;
var G__67785 = cljs.core.count(c__4609__auto__);
var G__67786 = (0);
seq__67718 = G__67783;
chunk__67720 = G__67784;
count__67721 = G__67785;
i__67722 = G__67786;
continue;
} else {
var map__67730 = cljs.core.first(seq__67718__$1);
var map__67730__$1 = (((((!((map__67730 == null))))?(((((map__67730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67730):map__67730);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67730__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__67787 = cljs.core.next(seq__67718__$1);
var G__67788 = null;
var G__67789 = (0);
var G__67790 = (0);
seq__67718 = G__67787;
chunk__67720 = G__67788;
count__67721 = G__67789;
i__67722 = G__67790;
continue;
} else {
var G__67791 = cljs.core.next(seq__67718__$1);
var G__67792 = null;
var G__67793 = (0);
var G__67794 = (0);
seq__67718 = G__67791;
chunk__67720 = G__67792;
count__67721 = G__67793;
i__67722 = G__67794;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__67732,msg){
var map__67733 = p__67732;
var map__67733__$1 = (((((!((map__67733 == null))))?(((((map__67733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67733):map__67733);
var runtime = map__67733__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67733__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__67735,key,p__67736){
var map__67737 = p__67735;
var map__67737__$1 = (((((!((map__67737 == null))))?(((((map__67737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67737):map__67737);
var state = map__67737__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67737__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__67738 = p__67736;
var map__67738__$1 = (((((!((map__67738 == null))))?(((((map__67738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67738):map__67738);
var spec = map__67738__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67738__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__67741,key,spec){
var map__67742 = p__67741;
var map__67742__$1 = (((((!((map__67742 == null))))?(((((map__67742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67742):map__67742);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67742__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__67749){
var map__67750 = p__67749;
var map__67750__$1 = (((((!((map__67750 == null))))?(((((map__67750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67750):map__67750);
var runtime = map__67750__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67750__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__67744_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__67744_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__67745_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__67745_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__67746_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__67746_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__67747_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__67747_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__67748_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__67748_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__67752,key){
var map__67753 = p__67752;
var map__67753__$1 = (((((!((map__67753 == null))))?(((((map__67753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67753):map__67753);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67753__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__67755,p__67756){
var map__67757 = p__67755;
var map__67757__$1 = (((((!((map__67757 == null))))?(((((map__67757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67757):map__67757);
var runtime = map__67757__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67757__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67758 = p__67756;
var map__67758__$1 = (((((!((map__67758 == null))))?(((((map__67758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67758):map__67758);
var msg = map__67758__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67758__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__67761 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__67763 = null;
var count__67764 = (0);
var i__67765 = (0);
while(true){
if((i__67765 < count__67764)){
var map__67771 = chunk__67763.cljs$core$IIndexed$_nth$arity$2(null,i__67765);
var map__67771__$1 = (((((!((map__67771 == null))))?(((((map__67771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67771):map__67771);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67771__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__67795 = seq__67761;
var G__67796 = chunk__67763;
var G__67797 = count__67764;
var G__67798 = (i__67765 + (1));
seq__67761 = G__67795;
chunk__67763 = G__67796;
count__67764 = G__67797;
i__67765 = G__67798;
continue;
} else {
var G__67799 = seq__67761;
var G__67800 = chunk__67763;
var G__67801 = count__67764;
var G__67802 = (i__67765 + (1));
seq__67761 = G__67799;
chunk__67763 = G__67800;
count__67764 = G__67801;
i__67765 = G__67802;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67761);
if(temp__5735__auto__){
var seq__67761__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67761__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__67761__$1);
var G__67803 = cljs.core.chunk_rest(seq__67761__$1);
var G__67804 = c__4609__auto__;
var G__67805 = cljs.core.count(c__4609__auto__);
var G__67806 = (0);
seq__67761 = G__67803;
chunk__67763 = G__67804;
count__67764 = G__67805;
i__67765 = G__67806;
continue;
} else {
var map__67773 = cljs.core.first(seq__67761__$1);
var map__67773__$1 = (((((!((map__67773 == null))))?(((((map__67773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67773):map__67773);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67773__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__67807 = cljs.core.next(seq__67761__$1);
var G__67808 = null;
var G__67809 = (0);
var G__67810 = (0);
seq__67761 = G__67807;
chunk__67763 = G__67808;
count__67764 = G__67809;
i__67765 = G__67810;
continue;
} else {
var G__67811 = cljs.core.next(seq__67761__$1);
var G__67812 = null;
var G__67813 = (0);
var G__67814 = (0);
seq__67761 = G__67811;
chunk__67763 = G__67812;
count__67764 = G__67813;
i__67765 = G__67814;
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
