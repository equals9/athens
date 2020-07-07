goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__60677,p__60678){
var map__60679 = p__60677;
var map__60679__$1 = (((((!((map__60679 == null))))?(((((map__60679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60679):map__60679);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60679__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60680 = p__60678;
var map__60680__$1 = (((((!((map__60680 == null))))?(((((map__60680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60680):map__60680);
var msg = map__60680__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60680__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__60683,p__60684){
var map__60685 = p__60683;
var map__60685__$1 = (((((!((map__60685 == null))))?(((((map__60685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60685):map__60685);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60685__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60686 = p__60684;
var map__60686__$1 = (((((!((map__60686 == null))))?(((((map__60686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60686):map__60686);
var msg = map__60686__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60686__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__60689 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60691 = null;
var count__60692 = (0);
var i__60693 = (0);
while(true){
if((i__60693 < count__60692)){
var map__60699 = chunk__60691.cljs$core$IIndexed$_nth$arity$2(null,i__60693);
var map__60699__$1 = (((((!((map__60699 == null))))?(((((map__60699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60699):map__60699);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60699__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60746 = seq__60689;
var G__60747 = chunk__60691;
var G__60748 = count__60692;
var G__60749 = (i__60693 + (1));
seq__60689 = G__60746;
chunk__60691 = G__60747;
count__60692 = G__60748;
i__60693 = G__60749;
continue;
} else {
var G__60750 = seq__60689;
var G__60751 = chunk__60691;
var G__60752 = count__60692;
var G__60753 = (i__60693 + (1));
seq__60689 = G__60750;
chunk__60691 = G__60751;
count__60692 = G__60752;
i__60693 = G__60753;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60689);
if(temp__5735__auto__){
var seq__60689__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60689__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60689__$1);
var G__60754 = cljs.core.chunk_rest(seq__60689__$1);
var G__60755 = c__4609__auto__;
var G__60756 = cljs.core.count(c__4609__auto__);
var G__60757 = (0);
seq__60689 = G__60754;
chunk__60691 = G__60755;
count__60692 = G__60756;
i__60693 = G__60757;
continue;
} else {
var map__60701 = cljs.core.first(seq__60689__$1);
var map__60701__$1 = (((((!((map__60701 == null))))?(((((map__60701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60701):map__60701);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60701__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60758 = cljs.core.next(seq__60689__$1);
var G__60759 = null;
var G__60760 = (0);
var G__60761 = (0);
seq__60689 = G__60758;
chunk__60691 = G__60759;
count__60692 = G__60760;
i__60693 = G__60761;
continue;
} else {
var G__60762 = cljs.core.next(seq__60689__$1);
var G__60763 = null;
var G__60764 = (0);
var G__60765 = (0);
seq__60689 = G__60762;
chunk__60691 = G__60763;
count__60692 = G__60764;
i__60693 = G__60765;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__60703,msg){
var map__60704 = p__60703;
var map__60704__$1 = (((((!((map__60704 == null))))?(((((map__60704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60704):map__60704);
var runtime = map__60704__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60704__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__60706,key,p__60707){
var map__60708 = p__60706;
var map__60708__$1 = (((((!((map__60708 == null))))?(((((map__60708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60708):map__60708);
var state = map__60708__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60708__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__60709 = p__60707;
var map__60709__$1 = (((((!((map__60709 == null))))?(((((map__60709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60709):map__60709);
var spec = map__60709__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60709__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__60712,key,spec){
var map__60713 = p__60712;
var map__60713__$1 = (((((!((map__60713 == null))))?(((((map__60713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60713):map__60713);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60713__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__60720){
var map__60721 = p__60720;
var map__60721__$1 = (((((!((map__60721 == null))))?(((((map__60721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60721):map__60721);
var runtime = map__60721__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60721__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__60715_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__60715_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__60716_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__60716_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__60717_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__60717_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__60718_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__60718_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__60719_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__60719_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__60723,key){
var map__60724 = p__60723;
var map__60724__$1 = (((((!((map__60724 == null))))?(((((map__60724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60724):map__60724);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60724__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__60726,p__60727){
var map__60728 = p__60726;
var map__60728__$1 = (((((!((map__60728 == null))))?(((((map__60728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60728):map__60728);
var runtime = map__60728__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60728__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60729 = p__60727;
var map__60729__$1 = (((((!((map__60729 == null))))?(((((map__60729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60729):map__60729);
var msg = map__60729__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60729__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__60732 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60734 = null;
var count__60735 = (0);
var i__60736 = (0);
while(true){
if((i__60736 < count__60735)){
var map__60742 = chunk__60734.cljs$core$IIndexed$_nth$arity$2(null,i__60736);
var map__60742__$1 = (((((!((map__60742 == null))))?(((((map__60742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60742):map__60742);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60742__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60766 = seq__60732;
var G__60767 = chunk__60734;
var G__60768 = count__60735;
var G__60769 = (i__60736 + (1));
seq__60732 = G__60766;
chunk__60734 = G__60767;
count__60735 = G__60768;
i__60736 = G__60769;
continue;
} else {
var G__60770 = seq__60732;
var G__60771 = chunk__60734;
var G__60772 = count__60735;
var G__60773 = (i__60736 + (1));
seq__60732 = G__60770;
chunk__60734 = G__60771;
count__60735 = G__60772;
i__60736 = G__60773;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60732);
if(temp__5735__auto__){
var seq__60732__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60732__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60732__$1);
var G__60774 = cljs.core.chunk_rest(seq__60732__$1);
var G__60775 = c__4609__auto__;
var G__60776 = cljs.core.count(c__4609__auto__);
var G__60777 = (0);
seq__60732 = G__60774;
chunk__60734 = G__60775;
count__60735 = G__60776;
i__60736 = G__60777;
continue;
} else {
var map__60744 = cljs.core.first(seq__60732__$1);
var map__60744__$1 = (((((!((map__60744 == null))))?(((((map__60744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60744):map__60744);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60744__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60778 = cljs.core.next(seq__60732__$1);
var G__60779 = null;
var G__60780 = (0);
var G__60781 = (0);
seq__60732 = G__60778;
chunk__60734 = G__60779;
count__60735 = G__60780;
i__60736 = G__60781;
continue;
} else {
var G__60782 = cljs.core.next(seq__60732__$1);
var G__60783 = null;
var G__60784 = (0);
var G__60785 = (0);
seq__60732 = G__60782;
chunk__60734 = G__60783;
count__60735 = G__60784;
i__60736 = G__60785;
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
