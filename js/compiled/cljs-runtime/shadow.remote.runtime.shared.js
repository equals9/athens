goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__67772,p__67773){
var map__67774 = p__67772;
var map__67774__$1 = (((((!((map__67774 == null))))?(((((map__67774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67774):map__67774);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67774__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67775 = p__67773;
var map__67775__$1 = (((((!((map__67775 == null))))?(((((map__67775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67775):map__67775);
var msg = map__67775__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67775__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__67778,p__67779){
var map__67780 = p__67778;
var map__67780__$1 = (((((!((map__67780 == null))))?(((((map__67780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67780):map__67780);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67780__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67781 = p__67779;
var map__67781__$1 = (((((!((map__67781 == null))))?(((((map__67781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67781):map__67781);
var msg = map__67781__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67781__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__67784 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__67786 = null;
var count__67787 = (0);
var i__67788 = (0);
while(true){
if((i__67788 < count__67787)){
var map__67794 = chunk__67786.cljs$core$IIndexed$_nth$arity$2(null,i__67788);
var map__67794__$1 = (((((!((map__67794 == null))))?(((((map__67794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67794):map__67794);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67794__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__67841 = seq__67784;
var G__67842 = chunk__67786;
var G__67843 = count__67787;
var G__67844 = (i__67788 + (1));
seq__67784 = G__67841;
chunk__67786 = G__67842;
count__67787 = G__67843;
i__67788 = G__67844;
continue;
} else {
var G__67845 = seq__67784;
var G__67846 = chunk__67786;
var G__67847 = count__67787;
var G__67848 = (i__67788 + (1));
seq__67784 = G__67845;
chunk__67786 = G__67846;
count__67787 = G__67847;
i__67788 = G__67848;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67784);
if(temp__5735__auto__){
var seq__67784__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67784__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__67784__$1);
var G__67849 = cljs.core.chunk_rest(seq__67784__$1);
var G__67850 = c__4609__auto__;
var G__67851 = cljs.core.count(c__4609__auto__);
var G__67852 = (0);
seq__67784 = G__67849;
chunk__67786 = G__67850;
count__67787 = G__67851;
i__67788 = G__67852;
continue;
} else {
var map__67796 = cljs.core.first(seq__67784__$1);
var map__67796__$1 = (((((!((map__67796 == null))))?(((((map__67796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67796):map__67796);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67796__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__67853 = cljs.core.next(seq__67784__$1);
var G__67854 = null;
var G__67855 = (0);
var G__67856 = (0);
seq__67784 = G__67853;
chunk__67786 = G__67854;
count__67787 = G__67855;
i__67788 = G__67856;
continue;
} else {
var G__67857 = cljs.core.next(seq__67784__$1);
var G__67858 = null;
var G__67859 = (0);
var G__67860 = (0);
seq__67784 = G__67857;
chunk__67786 = G__67858;
count__67787 = G__67859;
i__67788 = G__67860;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__67798,msg){
var map__67799 = p__67798;
var map__67799__$1 = (((((!((map__67799 == null))))?(((((map__67799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67799):map__67799);
var runtime = map__67799__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67799__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__67801,key,p__67802){
var map__67803 = p__67801;
var map__67803__$1 = (((((!((map__67803 == null))))?(((((map__67803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67803):map__67803);
var state = map__67803__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67803__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__67804 = p__67802;
var map__67804__$1 = (((((!((map__67804 == null))))?(((((map__67804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67804):map__67804);
var spec = map__67804__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67804__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__67807,key,spec){
var map__67808 = p__67807;
var map__67808__$1 = (((((!((map__67808 == null))))?(((((map__67808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67808):map__67808);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67808__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__67815){
var map__67816 = p__67815;
var map__67816__$1 = (((((!((map__67816 == null))))?(((((map__67816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67816):map__67816);
var runtime = map__67816__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67816__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__67810_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__67810_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__67811_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__67811_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__67812_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__67812_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__67813_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__67813_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__67814_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__67814_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__67818,key){
var map__67819 = p__67818;
var map__67819__$1 = (((((!((map__67819 == null))))?(((((map__67819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67819):map__67819);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67819__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__67821,p__67822){
var map__67823 = p__67821;
var map__67823__$1 = (((((!((map__67823 == null))))?(((((map__67823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67823):map__67823);
var runtime = map__67823__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67823__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67824 = p__67822;
var map__67824__$1 = (((((!((map__67824 == null))))?(((((map__67824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67824):map__67824);
var msg = map__67824__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67824__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__67827 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__67829 = null;
var count__67830 = (0);
var i__67831 = (0);
while(true){
if((i__67831 < count__67830)){
var map__67837 = chunk__67829.cljs$core$IIndexed$_nth$arity$2(null,i__67831);
var map__67837__$1 = (((((!((map__67837 == null))))?(((((map__67837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67837):map__67837);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67837__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__67861 = seq__67827;
var G__67862 = chunk__67829;
var G__67863 = count__67830;
var G__67864 = (i__67831 + (1));
seq__67827 = G__67861;
chunk__67829 = G__67862;
count__67830 = G__67863;
i__67831 = G__67864;
continue;
} else {
var G__67865 = seq__67827;
var G__67866 = chunk__67829;
var G__67867 = count__67830;
var G__67868 = (i__67831 + (1));
seq__67827 = G__67865;
chunk__67829 = G__67866;
count__67830 = G__67867;
i__67831 = G__67868;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67827);
if(temp__5735__auto__){
var seq__67827__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67827__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__67827__$1);
var G__67869 = cljs.core.chunk_rest(seq__67827__$1);
var G__67870 = c__4609__auto__;
var G__67871 = cljs.core.count(c__4609__auto__);
var G__67872 = (0);
seq__67827 = G__67869;
chunk__67829 = G__67870;
count__67830 = G__67871;
i__67831 = G__67872;
continue;
} else {
var map__67839 = cljs.core.first(seq__67827__$1);
var map__67839__$1 = (((((!((map__67839 == null))))?(((((map__67839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67839):map__67839);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67839__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__67873 = cljs.core.next(seq__67827__$1);
var G__67874 = null;
var G__67875 = (0);
var G__67876 = (0);
seq__67827 = G__67873;
chunk__67829 = G__67874;
count__67830 = G__67875;
i__67831 = G__67876;
continue;
} else {
var G__67877 = cljs.core.next(seq__67827__$1);
var G__67878 = null;
var G__67879 = (0);
var G__67880 = (0);
seq__67827 = G__67877;
chunk__67829 = G__67878;
count__67830 = G__67879;
i__67831 = G__67880;
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
