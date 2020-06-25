goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__45939){
var map__45940 = p__45939;
var map__45940__$1 = (((((!((map__45940 == null))))?(((((map__45940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45940):map__45940);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45940__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45940__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45940__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45940__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4185__auto__ = child_of;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__45942_45969 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__45943_45970 = null;
var count__45944_45971 = (0);
var i__45945_45972 = (0);
while(true){
if((i__45945_45972 < count__45944_45971)){
var vec__45956_45973 = chunk__45943_45970.cljs$core$IIndexed$_nth$arity$2(null,i__45945_45972);
var k_45974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45956_45973,(0),null);
var cb_45975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45956_45973,(1),null);
try{var G__45960_45976 = cljs.core.deref(re_frame.trace.traces);
(cb_45975.cljs$core$IFn$_invoke$arity$1 ? cb_45975.cljs$core$IFn$_invoke$arity$1(G__45960_45976) : cb_45975.call(null,G__45960_45976));
}catch (e45959){var e_45977 = e45959;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_45974,"while storing",cljs.core.deref(re_frame.trace.traces),e_45977], 0));
}

var G__45978 = seq__45942_45969;
var G__45979 = chunk__45943_45970;
var G__45980 = count__45944_45971;
var G__45981 = (i__45945_45972 + (1));
seq__45942_45969 = G__45978;
chunk__45943_45970 = G__45979;
count__45944_45971 = G__45980;
i__45945_45972 = G__45981;
continue;
} else {
var temp__5735__auto___45982 = cljs.core.seq(seq__45942_45969);
if(temp__5735__auto___45982){
var seq__45942_45983__$1 = temp__5735__auto___45982;
if(cljs.core.chunked_seq_QMARK_(seq__45942_45983__$1)){
var c__4609__auto___45984 = cljs.core.chunk_first(seq__45942_45983__$1);
var G__45985 = cljs.core.chunk_rest(seq__45942_45983__$1);
var G__45986 = c__4609__auto___45984;
var G__45987 = cljs.core.count(c__4609__auto___45984);
var G__45988 = (0);
seq__45942_45969 = G__45985;
chunk__45943_45970 = G__45986;
count__45944_45971 = G__45987;
i__45945_45972 = G__45988;
continue;
} else {
var vec__45961_45989 = cljs.core.first(seq__45942_45983__$1);
var k_45990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45961_45989,(0),null);
var cb_45991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45961_45989,(1),null);
try{var G__45965_45992 = cljs.core.deref(re_frame.trace.traces);
(cb_45991.cljs$core$IFn$_invoke$arity$1 ? cb_45991.cljs$core$IFn$_invoke$arity$1(G__45965_45992) : cb_45991.call(null,G__45965_45992));
}catch (e45964){var e_45993 = e45964;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_45990,"while storing",cljs.core.deref(re_frame.trace.traces),e_45993], 0));
}

var G__45994 = cljs.core.next(seq__45942_45983__$1);
var G__45995 = null;
var G__45996 = (0);
var G__45997 = (0);
seq__45942_45969 = G__45994;
chunk__45943_45970 = G__45995;
count__45944_45971 = G__45996;
i__45945_45972 = G__45997;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
