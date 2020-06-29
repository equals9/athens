goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__67711,p__67712){
var map__67713 = p__67711;
var map__67713__$1 = (((((!((map__67713 == null))))?(((((map__67713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67713):map__67713);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67713__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67714 = p__67712;
var map__67714__$1 = (((((!((map__67714 == null))))?(((((map__67714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67714):map__67714);
var msg = map__67714__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67714__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__67717,p__67718){
var map__67719 = p__67717;
var map__67719__$1 = (((((!((map__67719 == null))))?(((((map__67719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67719):map__67719);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67719__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67720 = p__67718;
var map__67720__$1 = (((((!((map__67720 == null))))?(((((map__67720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67720):map__67720);
var msg = map__67720__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67720__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__67723 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__67725 = null;
var count__67726 = (0);
var i__67727 = (0);
while(true){
if((i__67727 < count__67726)){
var map__67733 = chunk__67725.cljs$core$IIndexed$_nth$arity$2(null,i__67727);
var map__67733__$1 = (((((!((map__67733 == null))))?(((((map__67733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67733):map__67733);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67733__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__67780 = seq__67723;
var G__67781 = chunk__67725;
var G__67782 = count__67726;
var G__67783 = (i__67727 + (1));
seq__67723 = G__67780;
chunk__67725 = G__67781;
count__67726 = G__67782;
i__67727 = G__67783;
continue;
} else {
var G__67784 = seq__67723;
var G__67785 = chunk__67725;
var G__67786 = count__67726;
var G__67787 = (i__67727 + (1));
seq__67723 = G__67784;
chunk__67725 = G__67785;
count__67726 = G__67786;
i__67727 = G__67787;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67723);
if(temp__5735__auto__){
var seq__67723__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67723__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__67723__$1);
var G__67788 = cljs.core.chunk_rest(seq__67723__$1);
var G__67789 = c__4609__auto__;
var G__67790 = cljs.core.count(c__4609__auto__);
var G__67791 = (0);
seq__67723 = G__67788;
chunk__67725 = G__67789;
count__67726 = G__67790;
i__67727 = G__67791;
continue;
} else {
var map__67735 = cljs.core.first(seq__67723__$1);
var map__67735__$1 = (((((!((map__67735 == null))))?(((((map__67735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67735):map__67735);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67735__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__67792 = cljs.core.next(seq__67723__$1);
var G__67793 = null;
var G__67794 = (0);
var G__67795 = (0);
seq__67723 = G__67792;
chunk__67725 = G__67793;
count__67726 = G__67794;
i__67727 = G__67795;
continue;
} else {
var G__67796 = cljs.core.next(seq__67723__$1);
var G__67797 = null;
var G__67798 = (0);
var G__67799 = (0);
seq__67723 = G__67796;
chunk__67725 = G__67797;
count__67726 = G__67798;
i__67727 = G__67799;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__67737,msg){
var map__67738 = p__67737;
var map__67738__$1 = (((((!((map__67738 == null))))?(((((map__67738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67738):map__67738);
var runtime = map__67738__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67738__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__67740,key,p__67741){
var map__67742 = p__67740;
var map__67742__$1 = (((((!((map__67742 == null))))?(((((map__67742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67742):map__67742);
var state = map__67742__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67742__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__67743 = p__67741;
var map__67743__$1 = (((((!((map__67743 == null))))?(((((map__67743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67743):map__67743);
var spec = map__67743__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67743__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__67746,key,spec){
var map__67747 = p__67746;
var map__67747__$1 = (((((!((map__67747 == null))))?(((((map__67747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67747):map__67747);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67747__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__67754){
var map__67755 = p__67754;
var map__67755__$1 = (((((!((map__67755 == null))))?(((((map__67755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67755):map__67755);
var runtime = map__67755__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67755__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__67749_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__67749_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__67750_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__67750_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__67751_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__67751_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__67752_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__67752_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__67753_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__67753_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__67757,key){
var map__67758 = p__67757;
var map__67758__$1 = (((((!((map__67758 == null))))?(((((map__67758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67758):map__67758);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67758__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__67760,p__67761){
var map__67762 = p__67760;
var map__67762__$1 = (((((!((map__67762 == null))))?(((((map__67762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67762):map__67762);
var runtime = map__67762__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67762__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67763 = p__67761;
var map__67763__$1 = (((((!((map__67763 == null))))?(((((map__67763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67763):map__67763);
var msg = map__67763__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67763__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__67766 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__67768 = null;
var count__67769 = (0);
var i__67770 = (0);
while(true){
if((i__67770 < count__67769)){
var map__67776 = chunk__67768.cljs$core$IIndexed$_nth$arity$2(null,i__67770);
var map__67776__$1 = (((((!((map__67776 == null))))?(((((map__67776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67776):map__67776);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67776__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__67800 = seq__67766;
var G__67801 = chunk__67768;
var G__67802 = count__67769;
var G__67803 = (i__67770 + (1));
seq__67766 = G__67800;
chunk__67768 = G__67801;
count__67769 = G__67802;
i__67770 = G__67803;
continue;
} else {
var G__67804 = seq__67766;
var G__67805 = chunk__67768;
var G__67806 = count__67769;
var G__67807 = (i__67770 + (1));
seq__67766 = G__67804;
chunk__67768 = G__67805;
count__67769 = G__67806;
i__67770 = G__67807;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67766);
if(temp__5735__auto__){
var seq__67766__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67766__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__67766__$1);
var G__67808 = cljs.core.chunk_rest(seq__67766__$1);
var G__67809 = c__4609__auto__;
var G__67810 = cljs.core.count(c__4609__auto__);
var G__67811 = (0);
seq__67766 = G__67808;
chunk__67768 = G__67809;
count__67769 = G__67810;
i__67770 = G__67811;
continue;
} else {
var map__67778 = cljs.core.first(seq__67766__$1);
var map__67778__$1 = (((((!((map__67778 == null))))?(((((map__67778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67778):map__67778);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67778__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__67812 = cljs.core.next(seq__67766__$1);
var G__67813 = null;
var G__67814 = (0);
var G__67815 = (0);
seq__67766 = G__67812;
chunk__67768 = G__67813;
count__67769 = G__67814;
i__67770 = G__67815;
continue;
} else {
var G__67816 = cljs.core.next(seq__67766__$1);
var G__67817 = null;
var G__67818 = (0);
var G__67819 = (0);
seq__67766 = G__67816;
chunk__67768 = G__67817;
count__67769 = G__67818;
i__67770 = G__67819;
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
