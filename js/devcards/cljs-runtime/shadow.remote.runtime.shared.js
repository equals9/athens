goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__60712,p__60713){
var map__60714 = p__60712;
var map__60714__$1 = (((((!((map__60714 == null))))?(((((map__60714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60714):map__60714);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60714__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60715 = p__60713;
var map__60715__$1 = (((((!((map__60715 == null))))?(((((map__60715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60715):map__60715);
var msg = map__60715__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60715__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__60718,p__60719){
var map__60720 = p__60718;
var map__60720__$1 = (((((!((map__60720 == null))))?(((((map__60720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60720):map__60720);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60720__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60721 = p__60719;
var map__60721__$1 = (((((!((map__60721 == null))))?(((((map__60721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60721):map__60721);
var msg = map__60721__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60721__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__60724 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60726 = null;
var count__60727 = (0);
var i__60728 = (0);
while(true){
if((i__60728 < count__60727)){
var map__60734 = chunk__60726.cljs$core$IIndexed$_nth$arity$2(null,i__60728);
var map__60734__$1 = (((((!((map__60734 == null))))?(((((map__60734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60734):map__60734);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60734__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60781 = seq__60724;
var G__60782 = chunk__60726;
var G__60783 = count__60727;
var G__60784 = (i__60728 + (1));
seq__60724 = G__60781;
chunk__60726 = G__60782;
count__60727 = G__60783;
i__60728 = G__60784;
continue;
} else {
var G__60785 = seq__60724;
var G__60786 = chunk__60726;
var G__60787 = count__60727;
var G__60788 = (i__60728 + (1));
seq__60724 = G__60785;
chunk__60726 = G__60786;
count__60727 = G__60787;
i__60728 = G__60788;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60724);
if(temp__5735__auto__){
var seq__60724__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60724__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60724__$1);
var G__60789 = cljs.core.chunk_rest(seq__60724__$1);
var G__60790 = c__4609__auto__;
var G__60791 = cljs.core.count(c__4609__auto__);
var G__60792 = (0);
seq__60724 = G__60789;
chunk__60726 = G__60790;
count__60727 = G__60791;
i__60728 = G__60792;
continue;
} else {
var map__60736 = cljs.core.first(seq__60724__$1);
var map__60736__$1 = (((((!((map__60736 == null))))?(((((map__60736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60736):map__60736);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60736__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60793 = cljs.core.next(seq__60724__$1);
var G__60794 = null;
var G__60795 = (0);
var G__60796 = (0);
seq__60724 = G__60793;
chunk__60726 = G__60794;
count__60727 = G__60795;
i__60728 = G__60796;
continue;
} else {
var G__60797 = cljs.core.next(seq__60724__$1);
var G__60798 = null;
var G__60799 = (0);
var G__60800 = (0);
seq__60724 = G__60797;
chunk__60726 = G__60798;
count__60727 = G__60799;
i__60728 = G__60800;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__60738,msg){
var map__60739 = p__60738;
var map__60739__$1 = (((((!((map__60739 == null))))?(((((map__60739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60739):map__60739);
var runtime = map__60739__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60739__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__60741,key,p__60742){
var map__60743 = p__60741;
var map__60743__$1 = (((((!((map__60743 == null))))?(((((map__60743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60743):map__60743);
var state = map__60743__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60743__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__60744 = p__60742;
var map__60744__$1 = (((((!((map__60744 == null))))?(((((map__60744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60744):map__60744);
var spec = map__60744__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60744__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__60747,key,spec){
var map__60748 = p__60747;
var map__60748__$1 = (((((!((map__60748 == null))))?(((((map__60748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60748):map__60748);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60748__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__60755){
var map__60756 = p__60755;
var map__60756__$1 = (((((!((map__60756 == null))))?(((((map__60756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60756):map__60756);
var runtime = map__60756__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60756__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__60750_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__60750_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__60751_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__60751_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__60752_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__60752_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__60753_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__60753_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__60754_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__60754_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__60758,key){
var map__60759 = p__60758;
var map__60759__$1 = (((((!((map__60759 == null))))?(((((map__60759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60759):map__60759);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60759__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__60761,p__60762){
var map__60763 = p__60761;
var map__60763__$1 = (((((!((map__60763 == null))))?(((((map__60763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60763):map__60763);
var runtime = map__60763__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60763__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60764 = p__60762;
var map__60764__$1 = (((((!((map__60764 == null))))?(((((map__60764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60764):map__60764);
var msg = map__60764__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60764__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__60767 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60769 = null;
var count__60770 = (0);
var i__60771 = (0);
while(true){
if((i__60771 < count__60770)){
var map__60777 = chunk__60769.cljs$core$IIndexed$_nth$arity$2(null,i__60771);
var map__60777__$1 = (((((!((map__60777 == null))))?(((((map__60777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60777):map__60777);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60777__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60801 = seq__60767;
var G__60802 = chunk__60769;
var G__60803 = count__60770;
var G__60804 = (i__60771 + (1));
seq__60767 = G__60801;
chunk__60769 = G__60802;
count__60770 = G__60803;
i__60771 = G__60804;
continue;
} else {
var G__60805 = seq__60767;
var G__60806 = chunk__60769;
var G__60807 = count__60770;
var G__60808 = (i__60771 + (1));
seq__60767 = G__60805;
chunk__60769 = G__60806;
count__60770 = G__60807;
i__60771 = G__60808;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60767);
if(temp__5735__auto__){
var seq__60767__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60767__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60767__$1);
var G__60809 = cljs.core.chunk_rest(seq__60767__$1);
var G__60810 = c__4609__auto__;
var G__60811 = cljs.core.count(c__4609__auto__);
var G__60812 = (0);
seq__60767 = G__60809;
chunk__60769 = G__60810;
count__60770 = G__60811;
i__60771 = G__60812;
continue;
} else {
var map__60779 = cljs.core.first(seq__60767__$1);
var map__60779__$1 = (((((!((map__60779 == null))))?(((((map__60779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60779):map__60779);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60779__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60813 = cljs.core.next(seq__60767__$1);
var G__60814 = null;
var G__60815 = (0);
var G__60816 = (0);
seq__60767 = G__60813;
chunk__60769 = G__60814;
count__60770 = G__60815;
i__60771 = G__60816;
continue;
} else {
var G__60817 = cljs.core.next(seq__60767__$1);
var G__60818 = null;
var G__60819 = (0);
var G__60820 = (0);
seq__60767 = G__60817;
chunk__60769 = G__60818;
count__60770 = G__60819;
i__60771 = G__60820;
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
