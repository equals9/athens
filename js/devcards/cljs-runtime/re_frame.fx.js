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
var _STAR_current_trace_STAR__orig_val__46787 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__46788 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__46788);

try{try{var seq__46789 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__46790 = null;
var count__46791 = (0);
var i__46792 = (0);
while(true){
if((i__46792 < count__46791)){
var vec__46799 = chunk__46790.cljs$core$IIndexed$_nth$arity$2(null,i__46792);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46799,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46799,(1),null);
var temp__5733__auto___46844 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46844)){
var effect_fn_46845 = temp__5733__auto___46844;
(effect_fn_46845.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46845.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46845.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46846 = seq__46789;
var G__46847 = chunk__46790;
var G__46848 = count__46791;
var G__46849 = (i__46792 + (1));
seq__46789 = G__46846;
chunk__46790 = G__46847;
count__46791 = G__46848;
i__46792 = G__46849;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46789);
if(temp__5735__auto__){
var seq__46789__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46789__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46789__$1);
var G__46850 = cljs.core.chunk_rest(seq__46789__$1);
var G__46851 = c__4609__auto__;
var G__46852 = cljs.core.count(c__4609__auto__);
var G__46853 = (0);
seq__46789 = G__46850;
chunk__46790 = G__46851;
count__46791 = G__46852;
i__46792 = G__46853;
continue;
} else {
var vec__46802 = cljs.core.first(seq__46789__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46802,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46802,(1),null);
var temp__5733__auto___46854 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46854)){
var effect_fn_46855 = temp__5733__auto___46854;
(effect_fn_46855.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46855.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46855.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46856 = cljs.core.next(seq__46789__$1);
var G__46857 = null;
var G__46858 = (0);
var G__46859 = (0);
seq__46789 = G__46856;
chunk__46790 = G__46857;
count__46791 = G__46858;
i__46792 = G__46859;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__45953__auto___46860 = re_frame.interop.now();
var duration__45954__auto___46861 = (end__45953__auto___46860 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__45954__auto___46861,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__45953__auto___46860);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__46787);
}} else {
var seq__46805 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__46806 = null;
var count__46807 = (0);
var i__46808 = (0);
while(true){
if((i__46808 < count__46807)){
var vec__46815 = chunk__46806.cljs$core$IIndexed$_nth$arity$2(null,i__46808);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46815,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46815,(1),null);
var temp__5733__auto___46862 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46862)){
var effect_fn_46863 = temp__5733__auto___46862;
(effect_fn_46863.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46863.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46863.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46864 = seq__46805;
var G__46865 = chunk__46806;
var G__46866 = count__46807;
var G__46867 = (i__46808 + (1));
seq__46805 = G__46864;
chunk__46806 = G__46865;
count__46807 = G__46866;
i__46808 = G__46867;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46805);
if(temp__5735__auto__){
var seq__46805__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46805__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46805__$1);
var G__46868 = cljs.core.chunk_rest(seq__46805__$1);
var G__46869 = c__4609__auto__;
var G__46870 = cljs.core.count(c__4609__auto__);
var G__46871 = (0);
seq__46805 = G__46868;
chunk__46806 = G__46869;
count__46807 = G__46870;
i__46808 = G__46871;
continue;
} else {
var vec__46818 = cljs.core.first(seq__46805__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46818,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46818,(1),null);
var temp__5733__auto___46872 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46872)){
var effect_fn_46873 = temp__5733__auto___46872;
(effect_fn_46873.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46873.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46873.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46874 = cljs.core.next(seq__46805__$1);
var G__46875 = null;
var G__46876 = (0);
var G__46877 = (0);
seq__46805 = G__46874;
chunk__46806 = G__46875;
count__46807 = G__46876;
i__46808 = G__46877;
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
var seq__46822 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__46823 = null;
var count__46824 = (0);
var i__46825 = (0);
while(true){
if((i__46825 < count__46824)){
var map__46831 = chunk__46823.cljs$core$IIndexed$_nth$arity$2(null,i__46825);
var map__46831__$1 = (((((!((map__46831 == null))))?(((((map__46831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46831):map__46831);
var effect = map__46831__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46831__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46831__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__46822,chunk__46823,count__46824,i__46825,map__46831,map__46831__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__46822,chunk__46823,count__46824,i__46825,map__46831,map__46831__$1,effect,ms,dispatch))
,ms);
}


var G__46878 = seq__46822;
var G__46879 = chunk__46823;
var G__46880 = count__46824;
var G__46881 = (i__46825 + (1));
seq__46822 = G__46878;
chunk__46823 = G__46879;
count__46824 = G__46880;
i__46825 = G__46881;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46822);
if(temp__5735__auto__){
var seq__46822__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46822__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46822__$1);
var G__46882 = cljs.core.chunk_rest(seq__46822__$1);
var G__46883 = c__4609__auto__;
var G__46884 = cljs.core.count(c__4609__auto__);
var G__46885 = (0);
seq__46822 = G__46882;
chunk__46823 = G__46883;
count__46824 = G__46884;
i__46825 = G__46885;
continue;
} else {
var map__46834 = cljs.core.first(seq__46822__$1);
var map__46834__$1 = (((((!((map__46834 == null))))?(((((map__46834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46834):map__46834);
var effect = map__46834__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46834__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46834__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__46822,chunk__46823,count__46824,i__46825,map__46834,map__46834__$1,effect,ms,dispatch,seq__46822__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__46822,chunk__46823,count__46824,i__46825,map__46834,map__46834__$1,effect,ms,dispatch,seq__46822__$1,temp__5735__auto__))
,ms);
}


var G__46886 = cljs.core.next(seq__46822__$1);
var G__46887 = null;
var G__46888 = (0);
var G__46889 = (0);
seq__46822 = G__46886;
chunk__46823 = G__46887;
count__46824 = G__46888;
i__46825 = G__46889;
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
var seq__46836 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__46837 = null;
var count__46838 = (0);
var i__46839 = (0);
while(true){
if((i__46839 < count__46838)){
var event = chunk__46837.cljs$core$IIndexed$_nth$arity$2(null,i__46839);
re_frame.router.dispatch(event);


var G__46890 = seq__46836;
var G__46891 = chunk__46837;
var G__46892 = count__46838;
var G__46893 = (i__46839 + (1));
seq__46836 = G__46890;
chunk__46837 = G__46891;
count__46838 = G__46892;
i__46839 = G__46893;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46836);
if(temp__5735__auto__){
var seq__46836__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46836__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46836__$1);
var G__46894 = cljs.core.chunk_rest(seq__46836__$1);
var G__46895 = c__4609__auto__;
var G__46896 = cljs.core.count(c__4609__auto__);
var G__46897 = (0);
seq__46836 = G__46894;
chunk__46837 = G__46895;
count__46838 = G__46896;
i__46839 = G__46897;
continue;
} else {
var event = cljs.core.first(seq__46836__$1);
re_frame.router.dispatch(event);


var G__46898 = cljs.core.next(seq__46836__$1);
var G__46899 = null;
var G__46900 = (0);
var G__46901 = (0);
seq__46836 = G__46898;
chunk__46837 = G__46899;
count__46838 = G__46900;
i__46839 = G__46901;
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
var seq__46840 = cljs.core.seq(value);
var chunk__46841 = null;
var count__46842 = (0);
var i__46843 = (0);
while(true){
if((i__46843 < count__46842)){
var event = chunk__46841.cljs$core$IIndexed$_nth$arity$2(null,i__46843);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__46905 = seq__46840;
var G__46906 = chunk__46841;
var G__46907 = count__46842;
var G__46908 = (i__46843 + (1));
seq__46840 = G__46905;
chunk__46841 = G__46906;
count__46842 = G__46907;
i__46843 = G__46908;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46840);
if(temp__5735__auto__){
var seq__46840__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46840__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46840__$1);
var G__46909 = cljs.core.chunk_rest(seq__46840__$1);
var G__46910 = c__4609__auto__;
var G__46911 = cljs.core.count(c__4609__auto__);
var G__46912 = (0);
seq__46840 = G__46909;
chunk__46841 = G__46910;
count__46842 = G__46911;
i__46843 = G__46912;
continue;
} else {
var event = cljs.core.first(seq__46840__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__46913 = cljs.core.next(seq__46840__$1);
var G__46914 = null;
var G__46915 = (0);
var G__46916 = (0);
seq__46840 = G__46913;
chunk__46841 = G__46914;
count__46842 = G__46915;
i__46843 = G__46916;
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
