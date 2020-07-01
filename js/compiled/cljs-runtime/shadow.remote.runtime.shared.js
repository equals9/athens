goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__67764,p__67765){
var map__67766 = p__67764;
var map__67766__$1 = (((((!((map__67766 == null))))?(((((map__67766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67766):map__67766);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67766__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67767 = p__67765;
var map__67767__$1 = (((((!((map__67767 == null))))?(((((map__67767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67767):map__67767);
var msg = map__67767__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67767__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__67770,p__67771){
var map__67772 = p__67770;
var map__67772__$1 = (((((!((map__67772 == null))))?(((((map__67772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67772):map__67772);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67772__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67773 = p__67771;
var map__67773__$1 = (((((!((map__67773 == null))))?(((((map__67773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67773):map__67773);
var msg = map__67773__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67773__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__67776 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__67778 = null;
var count__67779 = (0);
var i__67780 = (0);
while(true){
if((i__67780 < count__67779)){
var map__67786 = chunk__67778.cljs$core$IIndexed$_nth$arity$2(null,i__67780);
var map__67786__$1 = (((((!((map__67786 == null))))?(((((map__67786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67786):map__67786);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67786__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__67833 = seq__67776;
var G__67834 = chunk__67778;
var G__67835 = count__67779;
var G__67836 = (i__67780 + (1));
seq__67776 = G__67833;
chunk__67778 = G__67834;
count__67779 = G__67835;
i__67780 = G__67836;
continue;
} else {
var G__67837 = seq__67776;
var G__67838 = chunk__67778;
var G__67839 = count__67779;
var G__67840 = (i__67780 + (1));
seq__67776 = G__67837;
chunk__67778 = G__67838;
count__67779 = G__67839;
i__67780 = G__67840;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67776);
if(temp__5735__auto__){
var seq__67776__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67776__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__67776__$1);
var G__67841 = cljs.core.chunk_rest(seq__67776__$1);
var G__67842 = c__4609__auto__;
var G__67843 = cljs.core.count(c__4609__auto__);
var G__67844 = (0);
seq__67776 = G__67841;
chunk__67778 = G__67842;
count__67779 = G__67843;
i__67780 = G__67844;
continue;
} else {
var map__67788 = cljs.core.first(seq__67776__$1);
var map__67788__$1 = (((((!((map__67788 == null))))?(((((map__67788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67788):map__67788);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67788__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__67845 = cljs.core.next(seq__67776__$1);
var G__67846 = null;
var G__67847 = (0);
var G__67848 = (0);
seq__67776 = G__67845;
chunk__67778 = G__67846;
count__67779 = G__67847;
i__67780 = G__67848;
continue;
} else {
var G__67849 = cljs.core.next(seq__67776__$1);
var G__67850 = null;
var G__67851 = (0);
var G__67852 = (0);
seq__67776 = G__67849;
chunk__67778 = G__67850;
count__67779 = G__67851;
i__67780 = G__67852;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__67790,msg){
var map__67791 = p__67790;
var map__67791__$1 = (((((!((map__67791 == null))))?(((((map__67791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67791):map__67791);
var runtime = map__67791__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67791__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__67793,key,p__67794){
var map__67795 = p__67793;
var map__67795__$1 = (((((!((map__67795 == null))))?(((((map__67795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67795):map__67795);
var state = map__67795__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67795__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__67796 = p__67794;
var map__67796__$1 = (((((!((map__67796 == null))))?(((((map__67796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67796):map__67796);
var spec = map__67796__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67796__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__67799,key,spec){
var map__67800 = p__67799;
var map__67800__$1 = (((((!((map__67800 == null))))?(((((map__67800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67800):map__67800);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67800__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__67807){
var map__67808 = p__67807;
var map__67808__$1 = (((((!((map__67808 == null))))?(((((map__67808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67808):map__67808);
var runtime = map__67808__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67808__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__67802_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__67802_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__67803_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__67803_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__67804_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__67804_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__67805_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__67805_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__67806_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__67806_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__67810,key){
var map__67811 = p__67810;
var map__67811__$1 = (((((!((map__67811 == null))))?(((((map__67811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67811):map__67811);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67811__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__67813,p__67814){
var map__67815 = p__67813;
var map__67815__$1 = (((((!((map__67815 == null))))?(((((map__67815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67815):map__67815);
var runtime = map__67815__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67815__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67816 = p__67814;
var map__67816__$1 = (((((!((map__67816 == null))))?(((((map__67816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67816):map__67816);
var msg = map__67816__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67816__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__67819 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__67821 = null;
var count__67822 = (0);
var i__67823 = (0);
while(true){
if((i__67823 < count__67822)){
var map__67829 = chunk__67821.cljs$core$IIndexed$_nth$arity$2(null,i__67823);
var map__67829__$1 = (((((!((map__67829 == null))))?(((((map__67829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67829):map__67829);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67829__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__67853 = seq__67819;
var G__67854 = chunk__67821;
var G__67855 = count__67822;
var G__67856 = (i__67823 + (1));
seq__67819 = G__67853;
chunk__67821 = G__67854;
count__67822 = G__67855;
i__67823 = G__67856;
continue;
} else {
var G__67857 = seq__67819;
var G__67858 = chunk__67821;
var G__67859 = count__67822;
var G__67860 = (i__67823 + (1));
seq__67819 = G__67857;
chunk__67821 = G__67858;
count__67822 = G__67859;
i__67823 = G__67860;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67819);
if(temp__5735__auto__){
var seq__67819__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67819__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__67819__$1);
var G__67861 = cljs.core.chunk_rest(seq__67819__$1);
var G__67862 = c__4609__auto__;
var G__67863 = cljs.core.count(c__4609__auto__);
var G__67864 = (0);
seq__67819 = G__67861;
chunk__67821 = G__67862;
count__67822 = G__67863;
i__67823 = G__67864;
continue;
} else {
var map__67831 = cljs.core.first(seq__67819__$1);
var map__67831__$1 = (((((!((map__67831 == null))))?(((((map__67831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67831):map__67831);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67831__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__67865 = cljs.core.next(seq__67819__$1);
var G__67866 = null;
var G__67867 = (0);
var G__67868 = (0);
seq__67819 = G__67865;
chunk__67821 = G__67866;
count__67822 = G__67867;
i__67823 = G__67868;
continue;
} else {
var G__67869 = cljs.core.next(seq__67819__$1);
var G__67870 = null;
var G__67871 = (0);
var G__67872 = (0);
seq__67819 = G__67869;
chunk__67821 = G__67870;
count__67822 = G__67871;
i__67823 = G__67872;
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
