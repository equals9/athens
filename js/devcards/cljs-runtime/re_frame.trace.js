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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__45973){
var map__45974 = p__45973;
var map__45974__$1 = (((((!((map__45974 == null))))?(((((map__45974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45974):map__45974);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45974__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45974__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45974__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45974__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__45976_46003 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__45977_46004 = null;
var count__45978_46005 = (0);
var i__45979_46006 = (0);
while(true){
if((i__45979_46006 < count__45978_46005)){
var vec__45990_46007 = chunk__45977_46004.cljs$core$IIndexed$_nth$arity$2(null,i__45979_46006);
var k_46008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45990_46007,(0),null);
var cb_46009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45990_46007,(1),null);
try{var G__45994_46010 = cljs.core.deref(re_frame.trace.traces);
(cb_46009.cljs$core$IFn$_invoke$arity$1 ? cb_46009.cljs$core$IFn$_invoke$arity$1(G__45994_46010) : cb_46009.call(null,G__45994_46010));
}catch (e45993){var e_46011 = e45993;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_46008,"while storing",cljs.core.deref(re_frame.trace.traces),e_46011], 0));
}

var G__46012 = seq__45976_46003;
var G__46013 = chunk__45977_46004;
var G__46014 = count__45978_46005;
var G__46015 = (i__45979_46006 + (1));
seq__45976_46003 = G__46012;
chunk__45977_46004 = G__46013;
count__45978_46005 = G__46014;
i__45979_46006 = G__46015;
continue;
} else {
var temp__5735__auto___46016 = cljs.core.seq(seq__45976_46003);
if(temp__5735__auto___46016){
var seq__45976_46017__$1 = temp__5735__auto___46016;
if(cljs.core.chunked_seq_QMARK_(seq__45976_46017__$1)){
var c__4609__auto___46018 = cljs.core.chunk_first(seq__45976_46017__$1);
var G__46019 = cljs.core.chunk_rest(seq__45976_46017__$1);
var G__46020 = c__4609__auto___46018;
var G__46021 = cljs.core.count(c__4609__auto___46018);
var G__46022 = (0);
seq__45976_46003 = G__46019;
chunk__45977_46004 = G__46020;
count__45978_46005 = G__46021;
i__45979_46006 = G__46022;
continue;
} else {
var vec__45995_46023 = cljs.core.first(seq__45976_46017__$1);
var k_46024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45995_46023,(0),null);
var cb_46025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45995_46023,(1),null);
try{var G__45999_46026 = cljs.core.deref(re_frame.trace.traces);
(cb_46025.cljs$core$IFn$_invoke$arity$1 ? cb_46025.cljs$core$IFn$_invoke$arity$1(G__45999_46026) : cb_46025.call(null,G__45999_46026));
}catch (e45998){var e_46027 = e45998;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_46024,"while storing",cljs.core.deref(re_frame.trace.traces),e_46027], 0));
}

var G__46028 = cljs.core.next(seq__45976_46017__$1);
var G__46029 = null;
var G__46030 = (0);
var G__46031 = (0);
seq__45976_46003 = G__46028;
chunk__45977_46004 = G__46029;
count__45978_46005 = G__46030;
i__45979_46006 = G__46031;
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
