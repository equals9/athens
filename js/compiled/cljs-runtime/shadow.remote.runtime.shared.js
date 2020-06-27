goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__67691,p__67692){
var map__67693 = p__67691;
var map__67693__$1 = (((((!((map__67693 == null))))?(((((map__67693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67693):map__67693);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67693__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67694 = p__67692;
var map__67694__$1 = (((((!((map__67694 == null))))?(((((map__67694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67694):map__67694);
var msg = map__67694__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67694__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__67697,p__67698){
var map__67699 = p__67697;
var map__67699__$1 = (((((!((map__67699 == null))))?(((((map__67699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67699):map__67699);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67699__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67700 = p__67698;
var map__67700__$1 = (((((!((map__67700 == null))))?(((((map__67700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67700):map__67700);
var msg = map__67700__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67700__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__67703 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__67705 = null;
var count__67706 = (0);
var i__67707 = (0);
while(true){
if((i__67707 < count__67706)){
var map__67713 = chunk__67705.cljs$core$IIndexed$_nth$arity$2(null,i__67707);
var map__67713__$1 = (((((!((map__67713 == null))))?(((((map__67713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67713):map__67713);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67713__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__67760 = seq__67703;
var G__67761 = chunk__67705;
var G__67762 = count__67706;
var G__67763 = (i__67707 + (1));
seq__67703 = G__67760;
chunk__67705 = G__67761;
count__67706 = G__67762;
i__67707 = G__67763;
continue;
} else {
var G__67764 = seq__67703;
var G__67765 = chunk__67705;
var G__67766 = count__67706;
var G__67767 = (i__67707 + (1));
seq__67703 = G__67764;
chunk__67705 = G__67765;
count__67706 = G__67766;
i__67707 = G__67767;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67703);
if(temp__5735__auto__){
var seq__67703__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67703__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__67703__$1);
var G__67768 = cljs.core.chunk_rest(seq__67703__$1);
var G__67769 = c__4609__auto__;
var G__67770 = cljs.core.count(c__4609__auto__);
var G__67771 = (0);
seq__67703 = G__67768;
chunk__67705 = G__67769;
count__67706 = G__67770;
i__67707 = G__67771;
continue;
} else {
var map__67715 = cljs.core.first(seq__67703__$1);
var map__67715__$1 = (((((!((map__67715 == null))))?(((((map__67715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67715):map__67715);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67715__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__67772 = cljs.core.next(seq__67703__$1);
var G__67773 = null;
var G__67774 = (0);
var G__67775 = (0);
seq__67703 = G__67772;
chunk__67705 = G__67773;
count__67706 = G__67774;
i__67707 = G__67775;
continue;
} else {
var G__67776 = cljs.core.next(seq__67703__$1);
var G__67777 = null;
var G__67778 = (0);
var G__67779 = (0);
seq__67703 = G__67776;
chunk__67705 = G__67777;
count__67706 = G__67778;
i__67707 = G__67779;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__67717,msg){
var map__67718 = p__67717;
var map__67718__$1 = (((((!((map__67718 == null))))?(((((map__67718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67718):map__67718);
var runtime = map__67718__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67718__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__67720,key,p__67721){
var map__67722 = p__67720;
var map__67722__$1 = (((((!((map__67722 == null))))?(((((map__67722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67722):map__67722);
var state = map__67722__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67722__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__67723 = p__67721;
var map__67723__$1 = (((((!((map__67723 == null))))?(((((map__67723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67723):map__67723);
var spec = map__67723__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67723__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__67726,key,spec){
var map__67727 = p__67726;
var map__67727__$1 = (((((!((map__67727 == null))))?(((((map__67727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67727):map__67727);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67727__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__67734){
var map__67735 = p__67734;
var map__67735__$1 = (((((!((map__67735 == null))))?(((((map__67735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67735):map__67735);
var runtime = map__67735__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67735__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__67729_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__67729_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__67730_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__67730_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__67731_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__67731_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__67732_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__67732_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__67733_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__67733_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__67737,key){
var map__67738 = p__67737;
var map__67738__$1 = (((((!((map__67738 == null))))?(((((map__67738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67738):map__67738);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67738__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__67740,p__67741){
var map__67742 = p__67740;
var map__67742__$1 = (((((!((map__67742 == null))))?(((((map__67742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67742):map__67742);
var runtime = map__67742__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67742__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67743 = p__67741;
var map__67743__$1 = (((((!((map__67743 == null))))?(((((map__67743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67743):map__67743);
var msg = map__67743__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67743__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__67746 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__67748 = null;
var count__67749 = (0);
var i__67750 = (0);
while(true){
if((i__67750 < count__67749)){
var map__67756 = chunk__67748.cljs$core$IIndexed$_nth$arity$2(null,i__67750);
var map__67756__$1 = (((((!((map__67756 == null))))?(((((map__67756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67756):map__67756);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67756__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__67780 = seq__67746;
var G__67781 = chunk__67748;
var G__67782 = count__67749;
var G__67783 = (i__67750 + (1));
seq__67746 = G__67780;
chunk__67748 = G__67781;
count__67749 = G__67782;
i__67750 = G__67783;
continue;
} else {
var G__67784 = seq__67746;
var G__67785 = chunk__67748;
var G__67786 = count__67749;
var G__67787 = (i__67750 + (1));
seq__67746 = G__67784;
chunk__67748 = G__67785;
count__67749 = G__67786;
i__67750 = G__67787;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67746);
if(temp__5735__auto__){
var seq__67746__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67746__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__67746__$1);
var G__67788 = cljs.core.chunk_rest(seq__67746__$1);
var G__67789 = c__4609__auto__;
var G__67790 = cljs.core.count(c__4609__auto__);
var G__67791 = (0);
seq__67746 = G__67788;
chunk__67748 = G__67789;
count__67749 = G__67790;
i__67750 = G__67791;
continue;
} else {
var map__67758 = cljs.core.first(seq__67746__$1);
var map__67758__$1 = (((((!((map__67758 == null))))?(((((map__67758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67758):map__67758);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67758__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__67792 = cljs.core.next(seq__67746__$1);
var G__67793 = null;
var G__67794 = (0);
var G__67795 = (0);
seq__67746 = G__67792;
chunk__67748 = G__67793;
count__67749 = G__67794;
i__67750 = G__67795;
continue;
} else {
var G__67796 = cljs.core.next(seq__67746__$1);
var G__67797 = null;
var G__67798 = (0);
var G__67799 = (0);
seq__67746 = G__67796;
chunk__67748 = G__67797;
count__67749 = G__67798;
i__67750 = G__67799;
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
