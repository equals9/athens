goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__46759 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__46760 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__46760);

try{try{var seq__46761 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__46762 = null;
var count__46763 = (0);
var i__46764 = (0);
while(true){
if((i__46764 < count__46763)){
var vec__46773 = chunk__46762.cljs$core$IIndexed$_nth$arity$2(null,i__46764);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46773,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46773,(1),null);
var temp__5733__auto___46819 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46819)){
var effect_fn_46820 = temp__5733__auto___46819;
(effect_fn_46820.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46820.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46820.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46821 = seq__46761;
var G__46822 = chunk__46762;
var G__46823 = count__46763;
var G__46824 = (i__46764 + (1));
seq__46761 = G__46821;
chunk__46762 = G__46822;
count__46763 = G__46823;
i__46764 = G__46824;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46761);
if(temp__5735__auto__){
var seq__46761__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46761__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46761__$1);
var G__46827 = cljs.core.chunk_rest(seq__46761__$1);
var G__46828 = c__4609__auto__;
var G__46829 = cljs.core.count(c__4609__auto__);
var G__46830 = (0);
seq__46761 = G__46827;
chunk__46762 = G__46828;
count__46763 = G__46829;
i__46764 = G__46830;
continue;
} else {
var vec__46776 = cljs.core.first(seq__46761__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46776,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46776,(1),null);
var temp__5733__auto___46833 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46833)){
var effect_fn_46834 = temp__5733__auto___46833;
(effect_fn_46834.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46834.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46834.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46835 = cljs.core.next(seq__46761__$1);
var G__46836 = null;
var G__46837 = (0);
var G__46838 = (0);
seq__46761 = G__46835;
chunk__46762 = G__46836;
count__46763 = G__46837;
i__46764 = G__46838;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__45925__auto___46841 = re_frame.interop.now();
var duration__45926__auto___46842 = (end__45925__auto___46841 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__45926__auto___46842,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__45925__auto___46841);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__46759);
}} else {
var seq__46779 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__46780 = null;
var count__46781 = (0);
var i__46782 = (0);
while(true){
if((i__46782 < count__46781)){
var vec__46790 = chunk__46780.cljs$core$IIndexed$_nth$arity$2(null,i__46782);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46790,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46790,(1),null);
var temp__5733__auto___46843 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46843)){
var effect_fn_46846 = temp__5733__auto___46843;
(effect_fn_46846.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46846.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46846.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46847 = seq__46779;
var G__46848 = chunk__46780;
var G__46849 = count__46781;
var G__46850 = (i__46782 + (1));
seq__46779 = G__46847;
chunk__46780 = G__46848;
count__46781 = G__46849;
i__46782 = G__46850;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46779);
if(temp__5735__auto__){
var seq__46779__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46779__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46779__$1);
var G__46853 = cljs.core.chunk_rest(seq__46779__$1);
var G__46854 = c__4609__auto__;
var G__46855 = cljs.core.count(c__4609__auto__);
var G__46856 = (0);
seq__46779 = G__46853;
chunk__46780 = G__46854;
count__46781 = G__46855;
i__46782 = G__46856;
continue;
} else {
var vec__46793 = cljs.core.first(seq__46779__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46793,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46793,(1),null);
var temp__5733__auto___46859 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46859)){
var effect_fn_46860 = temp__5733__auto___46859;
(effect_fn_46860.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46860.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46860.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46861 = cljs.core.next(seq__46779__$1);
var G__46862 = null;
var G__46863 = (0);
var G__46864 = (0);
seq__46779 = G__46861;
chunk__46780 = G__46862;
count__46781 = G__46863;
i__46782 = G__46864;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__46796 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__46797 = null;
var count__46798 = (0);
var i__46799 = (0);
while(true){
if((i__46799 < count__46798)){
var map__46804 = chunk__46797.cljs$core$IIndexed$_nth$arity$2(null,i__46799);
var map__46804__$1 = (((((!((map__46804 == null))))?(((((map__46804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46804):map__46804);
var effect = map__46804__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46804__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46804__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__46796,chunk__46797,count__46798,i__46799,map__46804,map__46804__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__46796,chunk__46797,count__46798,i__46799,map__46804,map__46804__$1,effect,ms,dispatch))
,ms);
}


var G__46867 = seq__46796;
var G__46868 = chunk__46797;
var G__46869 = count__46798;
var G__46870 = (i__46799 + (1));
seq__46796 = G__46867;
chunk__46797 = G__46868;
count__46798 = G__46869;
i__46799 = G__46870;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46796);
if(temp__5735__auto__){
var seq__46796__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46796__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46796__$1);
var G__46871 = cljs.core.chunk_rest(seq__46796__$1);
var G__46872 = c__4609__auto__;
var G__46873 = cljs.core.count(c__4609__auto__);
var G__46874 = (0);
seq__46796 = G__46871;
chunk__46797 = G__46872;
count__46798 = G__46873;
i__46799 = G__46874;
continue;
} else {
var map__46806 = cljs.core.first(seq__46796__$1);
var map__46806__$1 = (((((!((map__46806 == null))))?(((((map__46806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46806):map__46806);
var effect = map__46806__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46806__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46806__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__46796,chunk__46797,count__46798,i__46799,map__46806,map__46806__$1,effect,ms,dispatch,seq__46796__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__46796,chunk__46797,count__46798,i__46799,map__46806,map__46806__$1,effect,ms,dispatch,seq__46796__$1,temp__5735__auto__))
,ms);
}


var G__46876 = cljs.core.next(seq__46796__$1);
var G__46877 = null;
var G__46878 = (0);
var G__46879 = (0);
seq__46796 = G__46876;
chunk__46797 = G__46877;
count__46798 = G__46878;
i__46799 = G__46879;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__46808 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__46809 = null;
var count__46810 = (0);
var i__46811 = (0);
while(true){
if((i__46811 < count__46810)){
var event = chunk__46809.cljs$core$IIndexed$_nth$arity$2(null,i__46811);
re_frame.router.dispatch(event);


var G__46880 = seq__46808;
var G__46881 = chunk__46809;
var G__46882 = count__46810;
var G__46883 = (i__46811 + (1));
seq__46808 = G__46880;
chunk__46809 = G__46881;
count__46810 = G__46882;
i__46811 = G__46883;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46808);
if(temp__5735__auto__){
var seq__46808__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46808__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46808__$1);
var G__46884 = cljs.core.chunk_rest(seq__46808__$1);
var G__46885 = c__4609__auto__;
var G__46886 = cljs.core.count(c__4609__auto__);
var G__46887 = (0);
seq__46808 = G__46884;
chunk__46809 = G__46885;
count__46810 = G__46886;
i__46811 = G__46887;
continue;
} else {
var event = cljs.core.first(seq__46808__$1);
re_frame.router.dispatch(event);


var G__46888 = cljs.core.next(seq__46808__$1);
var G__46889 = null;
var G__46890 = (0);
var G__46891 = (0);
seq__46808 = G__46888;
chunk__46809 = G__46889;
count__46810 = G__46890;
i__46811 = G__46891;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__46812 = cljs.core.seq(value);
var chunk__46813 = null;
var count__46814 = (0);
var i__46815 = (0);
while(true){
if((i__46815 < count__46814)){
var event = chunk__46813.cljs$core$IIndexed$_nth$arity$2(null,i__46815);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__46892 = seq__46812;
var G__46893 = chunk__46813;
var G__46894 = count__46814;
var G__46895 = (i__46815 + (1));
seq__46812 = G__46892;
chunk__46813 = G__46893;
count__46814 = G__46894;
i__46815 = G__46895;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46812);
if(temp__5735__auto__){
var seq__46812__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46812__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46812__$1);
var G__46896 = cljs.core.chunk_rest(seq__46812__$1);
var G__46897 = c__4609__auto__;
var G__46898 = cljs.core.count(c__4609__auto__);
var G__46899 = (0);
seq__46812 = G__46896;
chunk__46813 = G__46897;
count__46814 = G__46898;
i__46815 = G__46899;
continue;
} else {
var event = cljs.core.first(seq__46812__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__46900 = cljs.core.next(seq__46812__$1);
var G__46901 = null;
var G__46902 = (0);
var G__46903 = (0);
seq__46812 = G__46900;
chunk__46813 = G__46901;
count__46814 = G__46902;
i__46815 = G__46903;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
