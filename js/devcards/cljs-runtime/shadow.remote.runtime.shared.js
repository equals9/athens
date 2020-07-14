goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__60833,p__60834){
var map__60835 = p__60833;
var map__60835__$1 = (((((!((map__60835 == null))))?(((((map__60835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60835):map__60835);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60835__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60836 = p__60834;
var map__60836__$1 = (((((!((map__60836 == null))))?(((((map__60836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60836):map__60836);
var msg = map__60836__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60836__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__60839,p__60840){
var map__60841 = p__60839;
var map__60841__$1 = (((((!((map__60841 == null))))?(((((map__60841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60841):map__60841);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60841__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60842 = p__60840;
var map__60842__$1 = (((((!((map__60842 == null))))?(((((map__60842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60842):map__60842);
var msg = map__60842__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60842__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__60845 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60847 = null;
var count__60848 = (0);
var i__60849 = (0);
while(true){
if((i__60849 < count__60848)){
var map__60855 = chunk__60847.cljs$core$IIndexed$_nth$arity$2(null,i__60849);
var map__60855__$1 = (((((!((map__60855 == null))))?(((((map__60855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60855):map__60855);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60855__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60902 = seq__60845;
var G__60903 = chunk__60847;
var G__60904 = count__60848;
var G__60905 = (i__60849 + (1));
seq__60845 = G__60902;
chunk__60847 = G__60903;
count__60848 = G__60904;
i__60849 = G__60905;
continue;
} else {
var G__60906 = seq__60845;
var G__60907 = chunk__60847;
var G__60908 = count__60848;
var G__60909 = (i__60849 + (1));
seq__60845 = G__60906;
chunk__60847 = G__60907;
count__60848 = G__60908;
i__60849 = G__60909;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60845);
if(temp__5735__auto__){
var seq__60845__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60845__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60845__$1);
var G__60910 = cljs.core.chunk_rest(seq__60845__$1);
var G__60911 = c__4609__auto__;
var G__60912 = cljs.core.count(c__4609__auto__);
var G__60913 = (0);
seq__60845 = G__60910;
chunk__60847 = G__60911;
count__60848 = G__60912;
i__60849 = G__60913;
continue;
} else {
var map__60857 = cljs.core.first(seq__60845__$1);
var map__60857__$1 = (((((!((map__60857 == null))))?(((((map__60857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60857):map__60857);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60857__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60914 = cljs.core.next(seq__60845__$1);
var G__60915 = null;
var G__60916 = (0);
var G__60917 = (0);
seq__60845 = G__60914;
chunk__60847 = G__60915;
count__60848 = G__60916;
i__60849 = G__60917;
continue;
} else {
var G__60918 = cljs.core.next(seq__60845__$1);
var G__60919 = null;
var G__60920 = (0);
var G__60921 = (0);
seq__60845 = G__60918;
chunk__60847 = G__60919;
count__60848 = G__60920;
i__60849 = G__60921;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__60859,msg){
var map__60860 = p__60859;
var map__60860__$1 = (((((!((map__60860 == null))))?(((((map__60860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60860):map__60860);
var runtime = map__60860__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60860__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__60862,key,p__60863){
var map__60864 = p__60862;
var map__60864__$1 = (((((!((map__60864 == null))))?(((((map__60864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60864):map__60864);
var state = map__60864__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60864__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__60865 = p__60863;
var map__60865__$1 = (((((!((map__60865 == null))))?(((((map__60865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60865):map__60865);
var spec = map__60865__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60865__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__60868,key,spec){
var map__60869 = p__60868;
var map__60869__$1 = (((((!((map__60869 == null))))?(((((map__60869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60869):map__60869);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60869__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__60876){
var map__60877 = p__60876;
var map__60877__$1 = (((((!((map__60877 == null))))?(((((map__60877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60877):map__60877);
var runtime = map__60877__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60877__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__60871_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__60871_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__60872_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__60872_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__60873_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__60873_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__60874_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__60874_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__60875_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__60875_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__60879,key){
var map__60880 = p__60879;
var map__60880__$1 = (((((!((map__60880 == null))))?(((((map__60880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60880):map__60880);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60880__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__60882,p__60883){
var map__60884 = p__60882;
var map__60884__$1 = (((((!((map__60884 == null))))?(((((map__60884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60884):map__60884);
var runtime = map__60884__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60884__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60885 = p__60883;
var map__60885__$1 = (((((!((map__60885 == null))))?(((((map__60885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60885):map__60885);
var msg = map__60885__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60885__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__60888 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60890 = null;
var count__60891 = (0);
var i__60892 = (0);
while(true){
if((i__60892 < count__60891)){
var map__60898 = chunk__60890.cljs$core$IIndexed$_nth$arity$2(null,i__60892);
var map__60898__$1 = (((((!((map__60898 == null))))?(((((map__60898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60898):map__60898);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60898__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60922 = seq__60888;
var G__60923 = chunk__60890;
var G__60924 = count__60891;
var G__60925 = (i__60892 + (1));
seq__60888 = G__60922;
chunk__60890 = G__60923;
count__60891 = G__60924;
i__60892 = G__60925;
continue;
} else {
var G__60926 = seq__60888;
var G__60927 = chunk__60890;
var G__60928 = count__60891;
var G__60929 = (i__60892 + (1));
seq__60888 = G__60926;
chunk__60890 = G__60927;
count__60891 = G__60928;
i__60892 = G__60929;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60888);
if(temp__5735__auto__){
var seq__60888__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60888__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60888__$1);
var G__60930 = cljs.core.chunk_rest(seq__60888__$1);
var G__60931 = c__4609__auto__;
var G__60932 = cljs.core.count(c__4609__auto__);
var G__60933 = (0);
seq__60888 = G__60930;
chunk__60890 = G__60931;
count__60891 = G__60932;
i__60892 = G__60933;
continue;
} else {
var map__60900 = cljs.core.first(seq__60888__$1);
var map__60900__$1 = (((((!((map__60900 == null))))?(((((map__60900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60900):map__60900);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60900__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60934 = cljs.core.next(seq__60888__$1);
var G__60935 = null;
var G__60936 = (0);
var G__60937 = (0);
seq__60888 = G__60934;
chunk__60890 = G__60935;
count__60891 = G__60936;
i__60892 = G__60937;
continue;
} else {
var G__60938 = cljs.core.next(seq__60888__$1);
var G__60939 = null;
var G__60940 = (0);
var G__60941 = (0);
seq__60888 = G__60938;
chunk__60890 = G__60939;
count__60891 = G__60940;
i__60892 = G__60941;
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
