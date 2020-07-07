goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__60665,p__60666){
var map__60667 = p__60665;
var map__60667__$1 = (((((!((map__60667 == null))))?(((((map__60667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60667):map__60667);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60667__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60668 = p__60666;
var map__60668__$1 = (((((!((map__60668 == null))))?(((((map__60668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60668):map__60668);
var msg = map__60668__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60668__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__60671,p__60672){
var map__60673 = p__60671;
var map__60673__$1 = (((((!((map__60673 == null))))?(((((map__60673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60673):map__60673);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60673__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60674 = p__60672;
var map__60674__$1 = (((((!((map__60674 == null))))?(((((map__60674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60674):map__60674);
var msg = map__60674__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60674__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__60677 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60679 = null;
var count__60680 = (0);
var i__60681 = (0);
while(true){
if((i__60681 < count__60680)){
var map__60687 = chunk__60679.cljs$core$IIndexed$_nth$arity$2(null,i__60681);
var map__60687__$1 = (((((!((map__60687 == null))))?(((((map__60687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60687):map__60687);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60687__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60734 = seq__60677;
var G__60735 = chunk__60679;
var G__60736 = count__60680;
var G__60737 = (i__60681 + (1));
seq__60677 = G__60734;
chunk__60679 = G__60735;
count__60680 = G__60736;
i__60681 = G__60737;
continue;
} else {
var G__60738 = seq__60677;
var G__60739 = chunk__60679;
var G__60740 = count__60680;
var G__60741 = (i__60681 + (1));
seq__60677 = G__60738;
chunk__60679 = G__60739;
count__60680 = G__60740;
i__60681 = G__60741;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60677);
if(temp__5735__auto__){
var seq__60677__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60677__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60677__$1);
var G__60742 = cljs.core.chunk_rest(seq__60677__$1);
var G__60743 = c__4609__auto__;
var G__60744 = cljs.core.count(c__4609__auto__);
var G__60745 = (0);
seq__60677 = G__60742;
chunk__60679 = G__60743;
count__60680 = G__60744;
i__60681 = G__60745;
continue;
} else {
var map__60689 = cljs.core.first(seq__60677__$1);
var map__60689__$1 = (((((!((map__60689 == null))))?(((((map__60689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60689):map__60689);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60689__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60746 = cljs.core.next(seq__60677__$1);
var G__60747 = null;
var G__60748 = (0);
var G__60749 = (0);
seq__60677 = G__60746;
chunk__60679 = G__60747;
count__60680 = G__60748;
i__60681 = G__60749;
continue;
} else {
var G__60750 = cljs.core.next(seq__60677__$1);
var G__60751 = null;
var G__60752 = (0);
var G__60753 = (0);
seq__60677 = G__60750;
chunk__60679 = G__60751;
count__60680 = G__60752;
i__60681 = G__60753;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__60691,msg){
var map__60692 = p__60691;
var map__60692__$1 = (((((!((map__60692 == null))))?(((((map__60692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60692):map__60692);
var runtime = map__60692__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60692__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__60694,key,p__60695){
var map__60696 = p__60694;
var map__60696__$1 = (((((!((map__60696 == null))))?(((((map__60696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60696):map__60696);
var state = map__60696__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60696__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__60697 = p__60695;
var map__60697__$1 = (((((!((map__60697 == null))))?(((((map__60697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60697):map__60697);
var spec = map__60697__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60697__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__60700,key,spec){
var map__60701 = p__60700;
var map__60701__$1 = (((((!((map__60701 == null))))?(((((map__60701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60701):map__60701);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60701__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__60708){
var map__60709 = p__60708;
var map__60709__$1 = (((((!((map__60709 == null))))?(((((map__60709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60709):map__60709);
var runtime = map__60709__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60709__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__60703_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__60703_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__60704_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__60704_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__60705_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__60705_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__60706_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__60706_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__60707_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__60707_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__60711,key){
var map__60712 = p__60711;
var map__60712__$1 = (((((!((map__60712 == null))))?(((((map__60712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60712):map__60712);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60712__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__60714,p__60715){
var map__60716 = p__60714;
var map__60716__$1 = (((((!((map__60716 == null))))?(((((map__60716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60716):map__60716);
var runtime = map__60716__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60716__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60717 = p__60715;
var map__60717__$1 = (((((!((map__60717 == null))))?(((((map__60717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60717):map__60717);
var msg = map__60717__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60717__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__60720 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60722 = null;
var count__60723 = (0);
var i__60724 = (0);
while(true){
if((i__60724 < count__60723)){
var map__60730 = chunk__60722.cljs$core$IIndexed$_nth$arity$2(null,i__60724);
var map__60730__$1 = (((((!((map__60730 == null))))?(((((map__60730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60730):map__60730);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60730__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60754 = seq__60720;
var G__60755 = chunk__60722;
var G__60756 = count__60723;
var G__60757 = (i__60724 + (1));
seq__60720 = G__60754;
chunk__60722 = G__60755;
count__60723 = G__60756;
i__60724 = G__60757;
continue;
} else {
var G__60758 = seq__60720;
var G__60759 = chunk__60722;
var G__60760 = count__60723;
var G__60761 = (i__60724 + (1));
seq__60720 = G__60758;
chunk__60722 = G__60759;
count__60723 = G__60760;
i__60724 = G__60761;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60720);
if(temp__5735__auto__){
var seq__60720__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60720__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60720__$1);
var G__60762 = cljs.core.chunk_rest(seq__60720__$1);
var G__60763 = c__4609__auto__;
var G__60764 = cljs.core.count(c__4609__auto__);
var G__60765 = (0);
seq__60720 = G__60762;
chunk__60722 = G__60763;
count__60723 = G__60764;
i__60724 = G__60765;
continue;
} else {
var map__60732 = cljs.core.first(seq__60720__$1);
var map__60732__$1 = (((((!((map__60732 == null))))?(((((map__60732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60732):map__60732);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60732__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60766 = cljs.core.next(seq__60720__$1);
var G__60767 = null;
var G__60768 = (0);
var G__60769 = (0);
seq__60720 = G__60766;
chunk__60722 = G__60767;
count__60723 = G__60768;
i__60724 = G__60769;
continue;
} else {
var G__60770 = cljs.core.next(seq__60720__$1);
var G__60771 = null;
var G__60772 = (0);
var G__60773 = (0);
seq__60720 = G__60770;
chunk__60722 = G__60771;
count__60723 = G__60772;
i__60724 = G__60773;
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
