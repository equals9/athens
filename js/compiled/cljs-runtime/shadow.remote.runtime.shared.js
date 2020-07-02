goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__67808,p__67809){
var map__67810 = p__67808;
var map__67810__$1 = (((((!((map__67810 == null))))?(((((map__67810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67810):map__67810);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67810__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67811 = p__67809;
var map__67811__$1 = (((((!((map__67811 == null))))?(((((map__67811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67811):map__67811);
var msg = map__67811__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67811__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__67814,p__67815){
var map__67816 = p__67814;
var map__67816__$1 = (((((!((map__67816 == null))))?(((((map__67816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67816):map__67816);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67816__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67817 = p__67815;
var map__67817__$1 = (((((!((map__67817 == null))))?(((((map__67817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67817):map__67817);
var msg = map__67817__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67817__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__67820 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__67822 = null;
var count__67823 = (0);
var i__67824 = (0);
while(true){
if((i__67824 < count__67823)){
var map__67830 = chunk__67822.cljs$core$IIndexed$_nth$arity$2(null,i__67824);
var map__67830__$1 = (((((!((map__67830 == null))))?(((((map__67830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67830):map__67830);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67830__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__67877 = seq__67820;
var G__67878 = chunk__67822;
var G__67879 = count__67823;
var G__67880 = (i__67824 + (1));
seq__67820 = G__67877;
chunk__67822 = G__67878;
count__67823 = G__67879;
i__67824 = G__67880;
continue;
} else {
var G__67881 = seq__67820;
var G__67882 = chunk__67822;
var G__67883 = count__67823;
var G__67884 = (i__67824 + (1));
seq__67820 = G__67881;
chunk__67822 = G__67882;
count__67823 = G__67883;
i__67824 = G__67884;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67820);
if(temp__5735__auto__){
var seq__67820__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67820__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__67820__$1);
var G__67885 = cljs.core.chunk_rest(seq__67820__$1);
var G__67886 = c__4609__auto__;
var G__67887 = cljs.core.count(c__4609__auto__);
var G__67888 = (0);
seq__67820 = G__67885;
chunk__67822 = G__67886;
count__67823 = G__67887;
i__67824 = G__67888;
continue;
} else {
var map__67832 = cljs.core.first(seq__67820__$1);
var map__67832__$1 = (((((!((map__67832 == null))))?(((((map__67832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67832):map__67832);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67832__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__67889 = cljs.core.next(seq__67820__$1);
var G__67890 = null;
var G__67891 = (0);
var G__67892 = (0);
seq__67820 = G__67889;
chunk__67822 = G__67890;
count__67823 = G__67891;
i__67824 = G__67892;
continue;
} else {
var G__67893 = cljs.core.next(seq__67820__$1);
var G__67894 = null;
var G__67895 = (0);
var G__67896 = (0);
seq__67820 = G__67893;
chunk__67822 = G__67894;
count__67823 = G__67895;
i__67824 = G__67896;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__67834,msg){
var map__67835 = p__67834;
var map__67835__$1 = (((((!((map__67835 == null))))?(((((map__67835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67835):map__67835);
var runtime = map__67835__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67835__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__67837,key,p__67838){
var map__67839 = p__67837;
var map__67839__$1 = (((((!((map__67839 == null))))?(((((map__67839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67839):map__67839);
var state = map__67839__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67839__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__67840 = p__67838;
var map__67840__$1 = (((((!((map__67840 == null))))?(((((map__67840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67840):map__67840);
var spec = map__67840__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67840__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__67843,key,spec){
var map__67844 = p__67843;
var map__67844__$1 = (((((!((map__67844 == null))))?(((((map__67844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67844):map__67844);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67844__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__67851){
var map__67852 = p__67851;
var map__67852__$1 = (((((!((map__67852 == null))))?(((((map__67852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67852):map__67852);
var runtime = map__67852__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67852__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__67846_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__67846_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__67847_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__67847_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__67848_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__67848_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__67849_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__67849_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__67850_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__67850_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__67854,key){
var map__67855 = p__67854;
var map__67855__$1 = (((((!((map__67855 == null))))?(((((map__67855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67855):map__67855);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67855__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__67857,p__67858){
var map__67859 = p__67857;
var map__67859__$1 = (((((!((map__67859 == null))))?(((((map__67859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67859):map__67859);
var runtime = map__67859__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67859__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67860 = p__67858;
var map__67860__$1 = (((((!((map__67860 == null))))?(((((map__67860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67860):map__67860);
var msg = map__67860__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67860__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__67863 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__67865 = null;
var count__67866 = (0);
var i__67867 = (0);
while(true){
if((i__67867 < count__67866)){
var map__67873 = chunk__67865.cljs$core$IIndexed$_nth$arity$2(null,i__67867);
var map__67873__$1 = (((((!((map__67873 == null))))?(((((map__67873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67873):map__67873);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67873__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__67897 = seq__67863;
var G__67898 = chunk__67865;
var G__67899 = count__67866;
var G__67900 = (i__67867 + (1));
seq__67863 = G__67897;
chunk__67865 = G__67898;
count__67866 = G__67899;
i__67867 = G__67900;
continue;
} else {
var G__67901 = seq__67863;
var G__67902 = chunk__67865;
var G__67903 = count__67866;
var G__67904 = (i__67867 + (1));
seq__67863 = G__67901;
chunk__67865 = G__67902;
count__67866 = G__67903;
i__67867 = G__67904;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67863);
if(temp__5735__auto__){
var seq__67863__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67863__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__67863__$1);
var G__67905 = cljs.core.chunk_rest(seq__67863__$1);
var G__67906 = c__4609__auto__;
var G__67907 = cljs.core.count(c__4609__auto__);
var G__67908 = (0);
seq__67863 = G__67905;
chunk__67865 = G__67906;
count__67866 = G__67907;
i__67867 = G__67908;
continue;
} else {
var map__67875 = cljs.core.first(seq__67863__$1);
var map__67875__$1 = (((((!((map__67875 == null))))?(((((map__67875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67875):map__67875);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67875__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__67909 = cljs.core.next(seq__67863__$1);
var G__67910 = null;
var G__67911 = (0);
var G__67912 = (0);
seq__67863 = G__67909;
chunk__67865 = G__67910;
count__67866 = G__67911;
i__67867 = G__67912;
continue;
} else {
var G__67913 = cljs.core.next(seq__67863__$1);
var G__67914 = null;
var G__67915 = (0);
var G__67916 = (0);
seq__67863 = G__67913;
chunk__67865 = G__67914;
count__67866 = G__67915;
i__67867 = G__67916;
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
