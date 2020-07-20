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
var _STAR_current_trace_STAR__orig_val__47034 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__47035 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__47035);

try{try{var seq__47036 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__47037 = null;
var count__47038 = (0);
var i__47039 = (0);
while(true){
if((i__47039 < count__47038)){
var vec__47046 = chunk__47037.cljs$core$IIndexed$_nth$arity$2(null,i__47039);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47046,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47046,(1),null);
var temp__5733__auto___47091 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47091)){
var effect_fn_47092 = temp__5733__auto___47091;
(effect_fn_47092.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47092.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47092.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47093 = seq__47036;
var G__47094 = chunk__47037;
var G__47095 = count__47038;
var G__47096 = (i__47039 + (1));
seq__47036 = G__47093;
chunk__47037 = G__47094;
count__47038 = G__47095;
i__47039 = G__47096;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47036);
if(temp__5735__auto__){
var seq__47036__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47036__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47036__$1);
var G__47097 = cljs.core.chunk_rest(seq__47036__$1);
var G__47098 = c__4609__auto__;
var G__47099 = cljs.core.count(c__4609__auto__);
var G__47100 = (0);
seq__47036 = G__47097;
chunk__47037 = G__47098;
count__47038 = G__47099;
i__47039 = G__47100;
continue;
} else {
var vec__47051 = cljs.core.first(seq__47036__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47051,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47051,(1),null);
var temp__5733__auto___47101 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47101)){
var effect_fn_47102 = temp__5733__auto___47101;
(effect_fn_47102.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47102.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47102.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47103 = cljs.core.next(seq__47036__$1);
var G__47104 = null;
var G__47105 = (0);
var G__47106 = (0);
seq__47036 = G__47103;
chunk__47037 = G__47104;
count__47038 = G__47105;
i__47039 = G__47106;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__46200__auto___47107 = re_frame.interop.now();
var duration__46201__auto___47108 = (end__46200__auto___47107 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__46201__auto___47108,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__46200__auto___47107);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__47034);
}} else {
var seq__47054 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__47055 = null;
var count__47056 = (0);
var i__47057 = (0);
while(true){
if((i__47057 < count__47056)){
var vec__47064 = chunk__47055.cljs$core$IIndexed$_nth$arity$2(null,i__47057);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47064,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47064,(1),null);
var temp__5733__auto___47112 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47112)){
var effect_fn_47113 = temp__5733__auto___47112;
(effect_fn_47113.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47113.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47113.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47114 = seq__47054;
var G__47115 = chunk__47055;
var G__47116 = count__47056;
var G__47117 = (i__47057 + (1));
seq__47054 = G__47114;
chunk__47055 = G__47115;
count__47056 = G__47116;
i__47057 = G__47117;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47054);
if(temp__5735__auto__){
var seq__47054__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47054__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47054__$1);
var G__47118 = cljs.core.chunk_rest(seq__47054__$1);
var G__47119 = c__4609__auto__;
var G__47120 = cljs.core.count(c__4609__auto__);
var G__47121 = (0);
seq__47054 = G__47118;
chunk__47055 = G__47119;
count__47056 = G__47120;
i__47057 = G__47121;
continue;
} else {
var vec__47068 = cljs.core.first(seq__47054__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47068,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47068,(1),null);
var temp__5733__auto___47122 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47122)){
var effect_fn_47123 = temp__5733__auto___47122;
(effect_fn_47123.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47123.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47123.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47124 = cljs.core.next(seq__47054__$1);
var G__47125 = null;
var G__47126 = (0);
var G__47127 = (0);
seq__47054 = G__47124;
chunk__47055 = G__47125;
count__47056 = G__47126;
i__47057 = G__47127;
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
var seq__47071 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__47072 = null;
var count__47073 = (0);
var i__47074 = (0);
while(true){
if((i__47074 < count__47073)){
var map__47079 = chunk__47072.cljs$core$IIndexed$_nth$arity$2(null,i__47074);
var map__47079__$1 = (((((!((map__47079 == null))))?(((((map__47079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47079):map__47079);
var effect = map__47079__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47079__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47079__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__47071,chunk__47072,count__47073,i__47074,map__47079,map__47079__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__47071,chunk__47072,count__47073,i__47074,map__47079,map__47079__$1,effect,ms,dispatch))
,ms);
}


var G__47132 = seq__47071;
var G__47133 = chunk__47072;
var G__47134 = count__47073;
var G__47135 = (i__47074 + (1));
seq__47071 = G__47132;
chunk__47072 = G__47133;
count__47073 = G__47134;
i__47074 = G__47135;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47071);
if(temp__5735__auto__){
var seq__47071__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47071__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47071__$1);
var G__47138 = cljs.core.chunk_rest(seq__47071__$1);
var G__47139 = c__4609__auto__;
var G__47140 = cljs.core.count(c__4609__auto__);
var G__47141 = (0);
seq__47071 = G__47138;
chunk__47072 = G__47139;
count__47073 = G__47140;
i__47074 = G__47141;
continue;
} else {
var map__47081 = cljs.core.first(seq__47071__$1);
var map__47081__$1 = (((((!((map__47081 == null))))?(((((map__47081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47081):map__47081);
var effect = map__47081__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47081__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47081__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__47071,chunk__47072,count__47073,i__47074,map__47081,map__47081__$1,effect,ms,dispatch,seq__47071__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__47071,chunk__47072,count__47073,i__47074,map__47081,map__47081__$1,effect,ms,dispatch,seq__47071__$1,temp__5735__auto__))
,ms);
}


var G__47144 = cljs.core.next(seq__47071__$1);
var G__47145 = null;
var G__47146 = (0);
var G__47147 = (0);
seq__47071 = G__47144;
chunk__47072 = G__47145;
count__47073 = G__47146;
i__47074 = G__47147;
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
var seq__47083 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__47084 = null;
var count__47085 = (0);
var i__47086 = (0);
while(true){
if((i__47086 < count__47085)){
var event = chunk__47084.cljs$core$IIndexed$_nth$arity$2(null,i__47086);
re_frame.router.dispatch(event);


var G__47150 = seq__47083;
var G__47151 = chunk__47084;
var G__47152 = count__47085;
var G__47153 = (i__47086 + (1));
seq__47083 = G__47150;
chunk__47084 = G__47151;
count__47085 = G__47152;
i__47086 = G__47153;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47083);
if(temp__5735__auto__){
var seq__47083__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47083__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47083__$1);
var G__47156 = cljs.core.chunk_rest(seq__47083__$1);
var G__47157 = c__4609__auto__;
var G__47158 = cljs.core.count(c__4609__auto__);
var G__47159 = (0);
seq__47083 = G__47156;
chunk__47084 = G__47157;
count__47085 = G__47158;
i__47086 = G__47159;
continue;
} else {
var event = cljs.core.first(seq__47083__$1);
re_frame.router.dispatch(event);


var G__47160 = cljs.core.next(seq__47083__$1);
var G__47161 = null;
var G__47162 = (0);
var G__47163 = (0);
seq__47083 = G__47160;
chunk__47084 = G__47161;
count__47085 = G__47162;
i__47086 = G__47163;
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
var seq__47087 = cljs.core.seq(value);
var chunk__47088 = null;
var count__47089 = (0);
var i__47090 = (0);
while(true){
if((i__47090 < count__47089)){
var event = chunk__47088.cljs$core$IIndexed$_nth$arity$2(null,i__47090);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__47164 = seq__47087;
var G__47165 = chunk__47088;
var G__47166 = count__47089;
var G__47167 = (i__47090 + (1));
seq__47087 = G__47164;
chunk__47088 = G__47165;
count__47089 = G__47166;
i__47090 = G__47167;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47087);
if(temp__5735__auto__){
var seq__47087__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47087__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47087__$1);
var G__47170 = cljs.core.chunk_rest(seq__47087__$1);
var G__47171 = c__4609__auto__;
var G__47172 = cljs.core.count(c__4609__auto__);
var G__47173 = (0);
seq__47087 = G__47170;
chunk__47088 = G__47171;
count__47089 = G__47172;
i__47090 = G__47173;
continue;
} else {
var event = cljs.core.first(seq__47087__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__47174 = cljs.core.next(seq__47087__$1);
var G__47175 = null;
var G__47176 = (0);
var G__47177 = (0);
seq__47087 = G__47174;
chunk__47088 = G__47175;
count__47089 = G__47176;
i__47090 = G__47177;
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
