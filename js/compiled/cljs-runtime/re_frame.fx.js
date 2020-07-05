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
var _STAR_current_trace_STAR__orig_val__33069 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__33070 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__33070);

try{try{var seq__33071 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__33072 = null;
var count__33073 = (0);
var i__33074 = (0);
while(true){
if((i__33074 < count__33073)){
var vec__33083 = chunk__33072.cljs$core$IIndexed$_nth$arity$2(null,i__33074);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33083,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33083,(1),null);
var temp__5733__auto___33130 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___33130)){
var effect_fn_33134 = temp__5733__auto___33130;
(effect_fn_33134.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33134.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33134.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33135 = seq__33071;
var G__33136 = chunk__33072;
var G__33137 = count__33073;
var G__33138 = (i__33074 + (1));
seq__33071 = G__33135;
chunk__33072 = G__33136;
count__33073 = G__33137;
i__33074 = G__33138;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33071);
if(temp__5735__auto__){
var seq__33071__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33071__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33071__$1);
var G__33142 = cljs.core.chunk_rest(seq__33071__$1);
var G__33143 = c__4609__auto__;
var G__33144 = cljs.core.count(c__4609__auto__);
var G__33145 = (0);
seq__33071 = G__33142;
chunk__33072 = G__33143;
count__33073 = G__33144;
i__33074 = G__33145;
continue;
} else {
var vec__33086 = cljs.core.first(seq__33071__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33086,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33086,(1),null);
var temp__5733__auto___33146 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___33146)){
var effect_fn_33147 = temp__5733__auto___33146;
(effect_fn_33147.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33147.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33147.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33152 = cljs.core.next(seq__33071__$1);
var G__33153 = null;
var G__33154 = (0);
var G__33155 = (0);
seq__33071 = G__33152;
chunk__33072 = G__33153;
count__33073 = G__33154;
i__33074 = G__33155;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__32788__auto___33156 = re_frame.interop.now();
var duration__32789__auto___33157 = (end__32788__auto___33156 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32789__auto___33157,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__32788__auto___33156);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__33069);
}} else {
var seq__33089 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__33090 = null;
var count__33091 = (0);
var i__33092 = (0);
while(true){
if((i__33092 < count__33091)){
var vec__33100 = chunk__33090.cljs$core$IIndexed$_nth$arity$2(null,i__33092);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33100,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33100,(1),null);
var temp__5733__auto___33164 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___33164)){
var effect_fn_33165 = temp__5733__auto___33164;
(effect_fn_33165.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33165.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33165.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33166 = seq__33089;
var G__33167 = chunk__33090;
var G__33168 = count__33091;
var G__33169 = (i__33092 + (1));
seq__33089 = G__33166;
chunk__33090 = G__33167;
count__33091 = G__33168;
i__33092 = G__33169;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33089);
if(temp__5735__auto__){
var seq__33089__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33089__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33089__$1);
var G__33170 = cljs.core.chunk_rest(seq__33089__$1);
var G__33171 = c__4609__auto__;
var G__33172 = cljs.core.count(c__4609__auto__);
var G__33173 = (0);
seq__33089 = G__33170;
chunk__33090 = G__33171;
count__33091 = G__33172;
i__33092 = G__33173;
continue;
} else {
var vec__33103 = cljs.core.first(seq__33089__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33103,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33103,(1),null);
var temp__5733__auto___33175 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___33175)){
var effect_fn_33176 = temp__5733__auto___33175;
(effect_fn_33176.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33176.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33176.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33177 = cljs.core.next(seq__33089__$1);
var G__33178 = null;
var G__33179 = (0);
var G__33180 = (0);
seq__33089 = G__33177;
chunk__33090 = G__33178;
count__33091 = G__33179;
i__33092 = G__33180;
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
var seq__33106 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__33107 = null;
var count__33108 = (0);
var i__33109 = (0);
while(true){
if((i__33109 < count__33108)){
var map__33114 = chunk__33107.cljs$core$IIndexed$_nth$arity$2(null,i__33109);
var map__33114__$1 = (((((!((map__33114 == null))))?(((((map__33114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33114):map__33114);
var effect = map__33114__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33114__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33114__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__33106,chunk__33107,count__33108,i__33109,map__33114,map__33114__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__33106,chunk__33107,count__33108,i__33109,map__33114,map__33114__$1,effect,ms,dispatch))
,ms);
}


var G__33182 = seq__33106;
var G__33183 = chunk__33107;
var G__33184 = count__33108;
var G__33185 = (i__33109 + (1));
seq__33106 = G__33182;
chunk__33107 = G__33183;
count__33108 = G__33184;
i__33109 = G__33185;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33106);
if(temp__5735__auto__){
var seq__33106__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33106__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33106__$1);
var G__33186 = cljs.core.chunk_rest(seq__33106__$1);
var G__33187 = c__4609__auto__;
var G__33188 = cljs.core.count(c__4609__auto__);
var G__33189 = (0);
seq__33106 = G__33186;
chunk__33107 = G__33187;
count__33108 = G__33188;
i__33109 = G__33189;
continue;
} else {
var map__33116 = cljs.core.first(seq__33106__$1);
var map__33116__$1 = (((((!((map__33116 == null))))?(((((map__33116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33116):map__33116);
var effect = map__33116__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33116__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33116__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__33106,chunk__33107,count__33108,i__33109,map__33116,map__33116__$1,effect,ms,dispatch,seq__33106__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__33106,chunk__33107,count__33108,i__33109,map__33116,map__33116__$1,effect,ms,dispatch,seq__33106__$1,temp__5735__auto__))
,ms);
}


var G__33190 = cljs.core.next(seq__33106__$1);
var G__33191 = null;
var G__33192 = (0);
var G__33193 = (0);
seq__33106 = G__33190;
chunk__33107 = G__33191;
count__33108 = G__33192;
i__33109 = G__33193;
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
var seq__33118 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__33119 = null;
var count__33120 = (0);
var i__33121 = (0);
while(true){
if((i__33121 < count__33120)){
var event = chunk__33119.cljs$core$IIndexed$_nth$arity$2(null,i__33121);
re_frame.router.dispatch(event);


var G__33194 = seq__33118;
var G__33195 = chunk__33119;
var G__33196 = count__33120;
var G__33197 = (i__33121 + (1));
seq__33118 = G__33194;
chunk__33119 = G__33195;
count__33120 = G__33196;
i__33121 = G__33197;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33118);
if(temp__5735__auto__){
var seq__33118__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33118__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33118__$1);
var G__33198 = cljs.core.chunk_rest(seq__33118__$1);
var G__33199 = c__4609__auto__;
var G__33200 = cljs.core.count(c__4609__auto__);
var G__33201 = (0);
seq__33118 = G__33198;
chunk__33119 = G__33199;
count__33120 = G__33200;
i__33121 = G__33201;
continue;
} else {
var event = cljs.core.first(seq__33118__$1);
re_frame.router.dispatch(event);


var G__33202 = cljs.core.next(seq__33118__$1);
var G__33203 = null;
var G__33204 = (0);
var G__33205 = (0);
seq__33118 = G__33202;
chunk__33119 = G__33203;
count__33120 = G__33204;
i__33121 = G__33205;
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
var seq__33122 = cljs.core.seq(value);
var chunk__33123 = null;
var count__33124 = (0);
var i__33125 = (0);
while(true){
if((i__33125 < count__33124)){
var event = chunk__33123.cljs$core$IIndexed$_nth$arity$2(null,i__33125);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__33206 = seq__33122;
var G__33207 = chunk__33123;
var G__33208 = count__33124;
var G__33209 = (i__33125 + (1));
seq__33122 = G__33206;
chunk__33123 = G__33207;
count__33124 = G__33208;
i__33125 = G__33209;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33122);
if(temp__5735__auto__){
var seq__33122__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33122__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33122__$1);
var G__33210 = cljs.core.chunk_rest(seq__33122__$1);
var G__33211 = c__4609__auto__;
var G__33212 = cljs.core.count(c__4609__auto__);
var G__33213 = (0);
seq__33122 = G__33210;
chunk__33123 = G__33211;
count__33124 = G__33212;
i__33125 = G__33213;
continue;
} else {
var event = cljs.core.first(seq__33122__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__33214 = cljs.core.next(seq__33122__$1);
var G__33215 = null;
var G__33216 = (0);
var G__33217 = (0);
seq__33122 = G__33214;
chunk__33123 = G__33215;
count__33124 = G__33216;
i__33125 = G__33217;
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
