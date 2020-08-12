goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__59710,p__59711){
var map__59712 = p__59710;
var map__59712__$1 = (((((!((map__59712 == null))))?(((((map__59712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59712):map__59712);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59712__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59713 = p__59711;
var map__59713__$1 = (((((!((map__59713 == null))))?(((((map__59713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59713):map__59713);
var msg = map__59713__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59713__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__59716,p__59717){
var map__59718 = p__59716;
var map__59718__$1 = (((((!((map__59718 == null))))?(((((map__59718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59718):map__59718);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59718__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59719 = p__59717;
var map__59719__$1 = (((((!((map__59719 == null))))?(((((map__59719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59719):map__59719);
var msg = map__59719__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59719__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__59722 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__59724 = null;
var count__59725 = (0);
var i__59726 = (0);
while(true){
if((i__59726 < count__59725)){
var map__59732 = chunk__59724.cljs$core$IIndexed$_nth$arity$2(null,i__59726);
var map__59732__$1 = (((((!((map__59732 == null))))?(((((map__59732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59732):map__59732);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59732__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__59779 = seq__59722;
var G__59780 = chunk__59724;
var G__59781 = count__59725;
var G__59782 = (i__59726 + (1));
seq__59722 = G__59779;
chunk__59724 = G__59780;
count__59725 = G__59781;
i__59726 = G__59782;
continue;
} else {
var G__59783 = seq__59722;
var G__59784 = chunk__59724;
var G__59785 = count__59725;
var G__59786 = (i__59726 + (1));
seq__59722 = G__59783;
chunk__59724 = G__59784;
count__59725 = G__59785;
i__59726 = G__59786;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59722);
if(temp__5735__auto__){
var seq__59722__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59722__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59722__$1);
var G__59787 = cljs.core.chunk_rest(seq__59722__$1);
var G__59788 = c__4556__auto__;
var G__59789 = cljs.core.count(c__4556__auto__);
var G__59790 = (0);
seq__59722 = G__59787;
chunk__59724 = G__59788;
count__59725 = G__59789;
i__59726 = G__59790;
continue;
} else {
var map__59734 = cljs.core.first(seq__59722__$1);
var map__59734__$1 = (((((!((map__59734 == null))))?(((((map__59734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59734):map__59734);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59734__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__59791 = cljs.core.next(seq__59722__$1);
var G__59792 = null;
var G__59793 = (0);
var G__59794 = (0);
seq__59722 = G__59791;
chunk__59724 = G__59792;
count__59725 = G__59793;
i__59726 = G__59794;
continue;
} else {
var G__59795 = cljs.core.next(seq__59722__$1);
var G__59796 = null;
var G__59797 = (0);
var G__59798 = (0);
seq__59722 = G__59795;
chunk__59724 = G__59796;
count__59725 = G__59797;
i__59726 = G__59798;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__59736,msg){
var map__59737 = p__59736;
var map__59737__$1 = (((((!((map__59737 == null))))?(((((map__59737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59737):map__59737);
var runtime = map__59737__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59737__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__59739,key,p__59740){
var map__59741 = p__59739;
var map__59741__$1 = (((((!((map__59741 == null))))?(((((map__59741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59741):map__59741);
var state = map__59741__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59741__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__59742 = p__59740;
var map__59742__$1 = (((((!((map__59742 == null))))?(((((map__59742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59742):map__59742);
var spec = map__59742__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59742__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__59745,key,spec){
var map__59746 = p__59745;
var map__59746__$1 = (((((!((map__59746 == null))))?(((((map__59746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59746):map__59746);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59746__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__59753){
var map__59754 = p__59753;
var map__59754__$1 = (((((!((map__59754 == null))))?(((((map__59754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59754):map__59754);
var runtime = map__59754__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59754__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__59748_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__59748_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__59749_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__59749_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__59750_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__59750_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__59751_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__59751_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__59752_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__59752_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__59756,key){
var map__59757 = p__59756;
var map__59757__$1 = (((((!((map__59757 == null))))?(((((map__59757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59757):map__59757);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59757__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__59759,p__59760){
var map__59761 = p__59759;
var map__59761__$1 = (((((!((map__59761 == null))))?(((((map__59761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59761):map__59761);
var runtime = map__59761__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59761__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59762 = p__59760;
var map__59762__$1 = (((((!((map__59762 == null))))?(((((map__59762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59762):map__59762);
var msg = map__59762__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59762__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__59765 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__59767 = null;
var count__59768 = (0);
var i__59769 = (0);
while(true){
if((i__59769 < count__59768)){
var map__59775 = chunk__59767.cljs$core$IIndexed$_nth$arity$2(null,i__59769);
var map__59775__$1 = (((((!((map__59775 == null))))?(((((map__59775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59775):map__59775);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59775__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__59799 = seq__59765;
var G__59800 = chunk__59767;
var G__59801 = count__59768;
var G__59802 = (i__59769 + (1));
seq__59765 = G__59799;
chunk__59767 = G__59800;
count__59768 = G__59801;
i__59769 = G__59802;
continue;
} else {
var G__59803 = seq__59765;
var G__59804 = chunk__59767;
var G__59805 = count__59768;
var G__59806 = (i__59769 + (1));
seq__59765 = G__59803;
chunk__59767 = G__59804;
count__59768 = G__59805;
i__59769 = G__59806;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59765);
if(temp__5735__auto__){
var seq__59765__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59765__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59765__$1);
var G__59807 = cljs.core.chunk_rest(seq__59765__$1);
var G__59808 = c__4556__auto__;
var G__59809 = cljs.core.count(c__4556__auto__);
var G__59810 = (0);
seq__59765 = G__59807;
chunk__59767 = G__59808;
count__59768 = G__59809;
i__59769 = G__59810;
continue;
} else {
var map__59777 = cljs.core.first(seq__59765__$1);
var map__59777__$1 = (((((!((map__59777 == null))))?(((((map__59777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59777):map__59777);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59777__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__59811 = cljs.core.next(seq__59765__$1);
var G__59812 = null;
var G__59813 = (0);
var G__59814 = (0);
seq__59765 = G__59811;
chunk__59767 = G__59812;
count__59768 = G__59813;
i__59769 = G__59814;
continue;
} else {
var G__59815 = cljs.core.next(seq__59765__$1);
var G__59816 = null;
var G__59817 = (0);
var G__59818 = (0);
seq__59765 = G__59815;
chunk__59767 = G__59816;
count__59768 = G__59817;
i__59769 = G__59818;
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
