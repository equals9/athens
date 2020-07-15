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
var _STAR_current_trace_STAR__orig_val__47036 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__47037 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__47037);

try{try{var seq__47038 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__47039 = null;
var count__47040 = (0);
var i__47041 = (0);
while(true){
if((i__47041 < count__47040)){
var vec__47050 = chunk__47039.cljs$core$IIndexed$_nth$arity$2(null,i__47041);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47050,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47050,(1),null);
var temp__5733__auto___47093 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47093)){
var effect_fn_47094 = temp__5733__auto___47093;
(effect_fn_47094.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47094.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47094.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47095 = seq__47038;
var G__47096 = chunk__47039;
var G__47097 = count__47040;
var G__47098 = (i__47041 + (1));
seq__47038 = G__47095;
chunk__47039 = G__47096;
count__47040 = G__47097;
i__47041 = G__47098;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47038);
if(temp__5735__auto__){
var seq__47038__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47038__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47038__$1);
var G__47099 = cljs.core.chunk_rest(seq__47038__$1);
var G__47100 = c__4609__auto__;
var G__47101 = cljs.core.count(c__4609__auto__);
var G__47102 = (0);
seq__47038 = G__47099;
chunk__47039 = G__47100;
count__47040 = G__47101;
i__47041 = G__47102;
continue;
} else {
var vec__47053 = cljs.core.first(seq__47038__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47053,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47053,(1),null);
var temp__5733__auto___47103 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47103)){
var effect_fn_47104 = temp__5733__auto___47103;
(effect_fn_47104.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47104.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47104.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47105 = cljs.core.next(seq__47038__$1);
var G__47106 = null;
var G__47107 = (0);
var G__47108 = (0);
seq__47038 = G__47105;
chunk__47039 = G__47106;
count__47040 = G__47107;
i__47041 = G__47108;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__46202__auto___47109 = re_frame.interop.now();
var duration__46203__auto___47110 = (end__46202__auto___47109 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__46203__auto___47110,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__46202__auto___47109);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__47036);
}} else {
var seq__47056 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__47057 = null;
var count__47058 = (0);
var i__47059 = (0);
while(true){
if((i__47059 < count__47058)){
var vec__47067 = chunk__47057.cljs$core$IIndexed$_nth$arity$2(null,i__47059);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47067,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47067,(1),null);
var temp__5733__auto___47111 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47111)){
var effect_fn_47112 = temp__5733__auto___47111;
(effect_fn_47112.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47112.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47112.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47113 = seq__47056;
var G__47114 = chunk__47057;
var G__47115 = count__47058;
var G__47116 = (i__47059 + (1));
seq__47056 = G__47113;
chunk__47057 = G__47114;
count__47058 = G__47115;
i__47059 = G__47116;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47056);
if(temp__5735__auto__){
var seq__47056__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47056__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47056__$1);
var G__47120 = cljs.core.chunk_rest(seq__47056__$1);
var G__47121 = c__4609__auto__;
var G__47122 = cljs.core.count(c__4609__auto__);
var G__47123 = (0);
seq__47056 = G__47120;
chunk__47057 = G__47121;
count__47058 = G__47122;
i__47059 = G__47123;
continue;
} else {
var vec__47070 = cljs.core.first(seq__47056__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47070,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47070,(1),null);
var temp__5733__auto___47124 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47124)){
var effect_fn_47125 = temp__5733__auto___47124;
(effect_fn_47125.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47125.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47125.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47126 = cljs.core.next(seq__47056__$1);
var G__47127 = null;
var G__47128 = (0);
var G__47129 = (0);
seq__47056 = G__47126;
chunk__47057 = G__47127;
count__47058 = G__47128;
i__47059 = G__47129;
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
var seq__47073 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__47074 = null;
var count__47075 = (0);
var i__47076 = (0);
while(true){
if((i__47076 < count__47075)){
var map__47081 = chunk__47074.cljs$core$IIndexed$_nth$arity$2(null,i__47076);
var map__47081__$1 = (((((!((map__47081 == null))))?(((((map__47081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47081):map__47081);
var effect = map__47081__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47081__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47081__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__47073,chunk__47074,count__47075,i__47076,map__47081,map__47081__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__47073,chunk__47074,count__47075,i__47076,map__47081,map__47081__$1,effect,ms,dispatch))
,ms);
}


var G__47130 = seq__47073;
var G__47131 = chunk__47074;
var G__47132 = count__47075;
var G__47133 = (i__47076 + (1));
seq__47073 = G__47130;
chunk__47074 = G__47131;
count__47075 = G__47132;
i__47076 = G__47133;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47073);
if(temp__5735__auto__){
var seq__47073__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47073__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47073__$1);
var G__47136 = cljs.core.chunk_rest(seq__47073__$1);
var G__47137 = c__4609__auto__;
var G__47138 = cljs.core.count(c__4609__auto__);
var G__47139 = (0);
seq__47073 = G__47136;
chunk__47074 = G__47137;
count__47075 = G__47138;
i__47076 = G__47139;
continue;
} else {
var map__47083 = cljs.core.first(seq__47073__$1);
var map__47083__$1 = (((((!((map__47083 == null))))?(((((map__47083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47083):map__47083);
var effect = map__47083__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47083__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47083__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__47073,chunk__47074,count__47075,i__47076,map__47083,map__47083__$1,effect,ms,dispatch,seq__47073__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__47073,chunk__47074,count__47075,i__47076,map__47083,map__47083__$1,effect,ms,dispatch,seq__47073__$1,temp__5735__auto__))
,ms);
}


var G__47144 = cljs.core.next(seq__47073__$1);
var G__47145 = null;
var G__47146 = (0);
var G__47147 = (0);
seq__47073 = G__47144;
chunk__47074 = G__47145;
count__47075 = G__47146;
i__47076 = G__47147;
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
var seq__47085 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__47086 = null;
var count__47087 = (0);
var i__47088 = (0);
while(true){
if((i__47088 < count__47087)){
var event = chunk__47086.cljs$core$IIndexed$_nth$arity$2(null,i__47088);
re_frame.router.dispatch(event);


var G__47148 = seq__47085;
var G__47149 = chunk__47086;
var G__47150 = count__47087;
var G__47151 = (i__47088 + (1));
seq__47085 = G__47148;
chunk__47086 = G__47149;
count__47087 = G__47150;
i__47088 = G__47151;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47085);
if(temp__5735__auto__){
var seq__47085__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47085__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47085__$1);
var G__47152 = cljs.core.chunk_rest(seq__47085__$1);
var G__47153 = c__4609__auto__;
var G__47154 = cljs.core.count(c__4609__auto__);
var G__47155 = (0);
seq__47085 = G__47152;
chunk__47086 = G__47153;
count__47087 = G__47154;
i__47088 = G__47155;
continue;
} else {
var event = cljs.core.first(seq__47085__$1);
re_frame.router.dispatch(event);


var G__47158 = cljs.core.next(seq__47085__$1);
var G__47159 = null;
var G__47160 = (0);
var G__47161 = (0);
seq__47085 = G__47158;
chunk__47086 = G__47159;
count__47087 = G__47160;
i__47088 = G__47161;
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
var seq__47089 = cljs.core.seq(value);
var chunk__47090 = null;
var count__47091 = (0);
var i__47092 = (0);
while(true){
if((i__47092 < count__47091)){
var event = chunk__47090.cljs$core$IIndexed$_nth$arity$2(null,i__47092);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__47164 = seq__47089;
var G__47165 = chunk__47090;
var G__47166 = count__47091;
var G__47167 = (i__47092 + (1));
seq__47089 = G__47164;
chunk__47090 = G__47165;
count__47091 = G__47166;
i__47092 = G__47167;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47089);
if(temp__5735__auto__){
var seq__47089__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47089__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47089__$1);
var G__47169 = cljs.core.chunk_rest(seq__47089__$1);
var G__47170 = c__4609__auto__;
var G__47171 = cljs.core.count(c__4609__auto__);
var G__47172 = (0);
seq__47089 = G__47169;
chunk__47090 = G__47170;
count__47091 = G__47171;
i__47092 = G__47172;
continue;
} else {
var event = cljs.core.first(seq__47089__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__47174 = cljs.core.next(seq__47089__$1);
var G__47175 = null;
var G__47176 = (0);
var G__47177 = (0);
seq__47089 = G__47174;
chunk__47090 = G__47175;
count__47091 = G__47176;
i__47092 = G__47177;
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
