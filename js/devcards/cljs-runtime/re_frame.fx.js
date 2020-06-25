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
var _STAR_current_trace_STAR__orig_val__46753 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__46754 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__46754);

try{try{var seq__46755 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__46756 = null;
var count__46757 = (0);
var i__46758 = (0);
while(true){
if((i__46758 < count__46757)){
var vec__46765 = chunk__46756.cljs$core$IIndexed$_nth$arity$2(null,i__46758);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46765,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46765,(1),null);
var temp__5733__auto___46810 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46810)){
var effect_fn_46811 = temp__5733__auto___46810;
(effect_fn_46811.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46811.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46811.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46812 = seq__46755;
var G__46813 = chunk__46756;
var G__46814 = count__46757;
var G__46815 = (i__46758 + (1));
seq__46755 = G__46812;
chunk__46756 = G__46813;
count__46757 = G__46814;
i__46758 = G__46815;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46755);
if(temp__5735__auto__){
var seq__46755__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46755__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46755__$1);
var G__46816 = cljs.core.chunk_rest(seq__46755__$1);
var G__46817 = c__4609__auto__;
var G__46818 = cljs.core.count(c__4609__auto__);
var G__46819 = (0);
seq__46755 = G__46816;
chunk__46756 = G__46817;
count__46757 = G__46818;
i__46758 = G__46819;
continue;
} else {
var vec__46768 = cljs.core.first(seq__46755__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46768,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46768,(1),null);
var temp__5733__auto___46820 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46820)){
var effect_fn_46821 = temp__5733__auto___46820;
(effect_fn_46821.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46821.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46821.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46822 = cljs.core.next(seq__46755__$1);
var G__46823 = null;
var G__46824 = (0);
var G__46825 = (0);
seq__46755 = G__46822;
chunk__46756 = G__46823;
count__46757 = G__46824;
i__46758 = G__46825;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__45919__auto___46826 = re_frame.interop.now();
var duration__45920__auto___46827 = (end__45919__auto___46826 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__45920__auto___46827,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__45919__auto___46826);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__46753);
}} else {
var seq__46771 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__46772 = null;
var count__46773 = (0);
var i__46774 = (0);
while(true){
if((i__46774 < count__46773)){
var vec__46781 = chunk__46772.cljs$core$IIndexed$_nth$arity$2(null,i__46774);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46781,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46781,(1),null);
var temp__5733__auto___46828 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46828)){
var effect_fn_46829 = temp__5733__auto___46828;
(effect_fn_46829.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46829.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46829.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46830 = seq__46771;
var G__46831 = chunk__46772;
var G__46832 = count__46773;
var G__46833 = (i__46774 + (1));
seq__46771 = G__46830;
chunk__46772 = G__46831;
count__46773 = G__46832;
i__46774 = G__46833;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46771);
if(temp__5735__auto__){
var seq__46771__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46771__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46771__$1);
var G__46834 = cljs.core.chunk_rest(seq__46771__$1);
var G__46835 = c__4609__auto__;
var G__46836 = cljs.core.count(c__4609__auto__);
var G__46837 = (0);
seq__46771 = G__46834;
chunk__46772 = G__46835;
count__46773 = G__46836;
i__46774 = G__46837;
continue;
} else {
var vec__46784 = cljs.core.first(seq__46771__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46784,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46784,(1),null);
var temp__5733__auto___46838 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46838)){
var effect_fn_46839 = temp__5733__auto___46838;
(effect_fn_46839.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46839.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46839.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46840 = cljs.core.next(seq__46771__$1);
var G__46841 = null;
var G__46842 = (0);
var G__46843 = (0);
seq__46771 = G__46840;
chunk__46772 = G__46841;
count__46773 = G__46842;
i__46774 = G__46843;
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
var seq__46787 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__46788 = null;
var count__46789 = (0);
var i__46790 = (0);
while(true){
if((i__46790 < count__46789)){
var map__46797 = chunk__46788.cljs$core$IIndexed$_nth$arity$2(null,i__46790);
var map__46797__$1 = (((((!((map__46797 == null))))?(((((map__46797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46797):map__46797);
var effect = map__46797__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46797__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46797__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__46787,chunk__46788,count__46789,i__46790,map__46797,map__46797__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__46787,chunk__46788,count__46789,i__46790,map__46797,map__46797__$1,effect,ms,dispatch))
,ms);
}


var G__46844 = seq__46787;
var G__46845 = chunk__46788;
var G__46846 = count__46789;
var G__46847 = (i__46790 + (1));
seq__46787 = G__46844;
chunk__46788 = G__46845;
count__46789 = G__46846;
i__46790 = G__46847;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46787);
if(temp__5735__auto__){
var seq__46787__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46787__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46787__$1);
var G__46848 = cljs.core.chunk_rest(seq__46787__$1);
var G__46849 = c__4609__auto__;
var G__46850 = cljs.core.count(c__4609__auto__);
var G__46851 = (0);
seq__46787 = G__46848;
chunk__46788 = G__46849;
count__46789 = G__46850;
i__46790 = G__46851;
continue;
} else {
var map__46799 = cljs.core.first(seq__46787__$1);
var map__46799__$1 = (((((!((map__46799 == null))))?(((((map__46799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46799):map__46799);
var effect = map__46799__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46799__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46799__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__46787,chunk__46788,count__46789,i__46790,map__46799,map__46799__$1,effect,ms,dispatch,seq__46787__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__46787,chunk__46788,count__46789,i__46790,map__46799,map__46799__$1,effect,ms,dispatch,seq__46787__$1,temp__5735__auto__))
,ms);
}


var G__46852 = cljs.core.next(seq__46787__$1);
var G__46853 = null;
var G__46854 = (0);
var G__46855 = (0);
seq__46787 = G__46852;
chunk__46788 = G__46853;
count__46789 = G__46854;
i__46790 = G__46855;
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
var seq__46802 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__46803 = null;
var count__46804 = (0);
var i__46805 = (0);
while(true){
if((i__46805 < count__46804)){
var event = chunk__46803.cljs$core$IIndexed$_nth$arity$2(null,i__46805);
re_frame.router.dispatch(event);


var G__46856 = seq__46802;
var G__46857 = chunk__46803;
var G__46858 = count__46804;
var G__46859 = (i__46805 + (1));
seq__46802 = G__46856;
chunk__46803 = G__46857;
count__46804 = G__46858;
i__46805 = G__46859;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46802);
if(temp__5735__auto__){
var seq__46802__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46802__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46802__$1);
var G__46860 = cljs.core.chunk_rest(seq__46802__$1);
var G__46861 = c__4609__auto__;
var G__46862 = cljs.core.count(c__4609__auto__);
var G__46863 = (0);
seq__46802 = G__46860;
chunk__46803 = G__46861;
count__46804 = G__46862;
i__46805 = G__46863;
continue;
} else {
var event = cljs.core.first(seq__46802__$1);
re_frame.router.dispatch(event);


var G__46864 = cljs.core.next(seq__46802__$1);
var G__46865 = null;
var G__46866 = (0);
var G__46867 = (0);
seq__46802 = G__46864;
chunk__46803 = G__46865;
count__46804 = G__46866;
i__46805 = G__46867;
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
var seq__46806 = cljs.core.seq(value);
var chunk__46807 = null;
var count__46808 = (0);
var i__46809 = (0);
while(true){
if((i__46809 < count__46808)){
var event = chunk__46807.cljs$core$IIndexed$_nth$arity$2(null,i__46809);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__46868 = seq__46806;
var G__46869 = chunk__46807;
var G__46870 = count__46808;
var G__46871 = (i__46809 + (1));
seq__46806 = G__46868;
chunk__46807 = G__46869;
count__46808 = G__46870;
i__46809 = G__46871;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46806);
if(temp__5735__auto__){
var seq__46806__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46806__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46806__$1);
var G__46872 = cljs.core.chunk_rest(seq__46806__$1);
var G__46873 = c__4609__auto__;
var G__46874 = cljs.core.count(c__4609__auto__);
var G__46875 = (0);
seq__46806 = G__46872;
chunk__46807 = G__46873;
count__46808 = G__46874;
i__46809 = G__46875;
continue;
} else {
var event = cljs.core.first(seq__46806__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__46876 = cljs.core.next(seq__46806__$1);
var G__46877 = null;
var G__46878 = (0);
var G__46879 = (0);
seq__46806 = G__46876;
chunk__46807 = G__46877;
count__46808 = G__46878;
i__46809 = G__46879;
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
