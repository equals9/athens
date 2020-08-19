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
var _STAR_current_trace_STAR__orig_val__51184 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__51185 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__51185);

try{try{var seq__51186 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__51187 = null;
var count__51188 = (0);
var i__51189 = (0);
while(true){
if((i__51189 < count__51188)){
var vec__51200 = chunk__51187.cljs$core$IIndexed$_nth$arity$2(null,i__51189);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51200,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51200,(1),null);
var temp__5733__auto___51242 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___51242)){
var effect_fn_51243 = temp__5733__auto___51242;
(effect_fn_51243.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51243.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51243.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51244 = seq__51186;
var G__51245 = chunk__51187;
var G__51246 = count__51188;
var G__51247 = (i__51189 + (1));
seq__51186 = G__51244;
chunk__51187 = G__51245;
count__51188 = G__51246;
i__51189 = G__51247;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51186);
if(temp__5735__auto__){
var seq__51186__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51186__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51186__$1);
var G__51248 = cljs.core.chunk_rest(seq__51186__$1);
var G__51249 = c__4556__auto__;
var G__51250 = cljs.core.count(c__4556__auto__);
var G__51251 = (0);
seq__51186 = G__51248;
chunk__51187 = G__51249;
count__51188 = G__51250;
i__51189 = G__51251;
continue;
} else {
var vec__51203 = cljs.core.first(seq__51186__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51203,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51203,(1),null);
var temp__5733__auto___51252 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___51252)){
var effect_fn_51253 = temp__5733__auto___51252;
(effect_fn_51253.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51253.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51253.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51254 = cljs.core.next(seq__51186__$1);
var G__51255 = null;
var G__51256 = (0);
var G__51257 = (0);
seq__51186 = G__51254;
chunk__51187 = G__51255;
count__51188 = G__51256;
i__51189 = G__51257;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__50291__auto___51258 = re_frame.interop.now();
var duration__50292__auto___51259 = (end__50291__auto___51258 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__50292__auto___51259,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__50291__auto___51258);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__51184);
}} else {
var seq__51206 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__51207 = null;
var count__51208 = (0);
var i__51209 = (0);
while(true){
if((i__51209 < count__51208)){
var vec__51216 = chunk__51207.cljs$core$IIndexed$_nth$arity$2(null,i__51209);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51216,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51216,(1),null);
var temp__5733__auto___51260 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___51260)){
var effect_fn_51261 = temp__5733__auto___51260;
(effect_fn_51261.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51261.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51261.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51262 = seq__51206;
var G__51263 = chunk__51207;
var G__51264 = count__51208;
var G__51265 = (i__51209 + (1));
seq__51206 = G__51262;
chunk__51207 = G__51263;
count__51208 = G__51264;
i__51209 = G__51265;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51206);
if(temp__5735__auto__){
var seq__51206__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51206__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51206__$1);
var G__51267 = cljs.core.chunk_rest(seq__51206__$1);
var G__51268 = c__4556__auto__;
var G__51269 = cljs.core.count(c__4556__auto__);
var G__51270 = (0);
seq__51206 = G__51267;
chunk__51207 = G__51268;
count__51208 = G__51269;
i__51209 = G__51270;
continue;
} else {
var vec__51219 = cljs.core.first(seq__51206__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51219,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51219,(1),null);
var temp__5733__auto___51272 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___51272)){
var effect_fn_51273 = temp__5733__auto___51272;
(effect_fn_51273.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51273.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51273.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51274 = cljs.core.next(seq__51206__$1);
var G__51275 = null;
var G__51276 = (0);
var G__51277 = (0);
seq__51206 = G__51274;
chunk__51207 = G__51275;
count__51208 = G__51276;
i__51209 = G__51277;
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
var seq__51222 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__51223 = null;
var count__51224 = (0);
var i__51225 = (0);
while(true){
if((i__51225 < count__51224)){
var map__51230 = chunk__51223.cljs$core$IIndexed$_nth$arity$2(null,i__51225);
var map__51230__$1 = (((((!((map__51230 == null))))?(((((map__51230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51230):map__51230);
var effect = map__51230__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51230__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51230__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__51222,chunk__51223,count__51224,i__51225,map__51230,map__51230__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__51222,chunk__51223,count__51224,i__51225,map__51230,map__51230__$1,effect,ms,dispatch))
,ms);
}


var G__51278 = seq__51222;
var G__51279 = chunk__51223;
var G__51280 = count__51224;
var G__51281 = (i__51225 + (1));
seq__51222 = G__51278;
chunk__51223 = G__51279;
count__51224 = G__51280;
i__51225 = G__51281;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51222);
if(temp__5735__auto__){
var seq__51222__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51222__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51222__$1);
var G__51282 = cljs.core.chunk_rest(seq__51222__$1);
var G__51283 = c__4556__auto__;
var G__51284 = cljs.core.count(c__4556__auto__);
var G__51285 = (0);
seq__51222 = G__51282;
chunk__51223 = G__51283;
count__51224 = G__51284;
i__51225 = G__51285;
continue;
} else {
var map__51232 = cljs.core.first(seq__51222__$1);
var map__51232__$1 = (((((!((map__51232 == null))))?(((((map__51232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51232):map__51232);
var effect = map__51232__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51232__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51232__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__51222,chunk__51223,count__51224,i__51225,map__51232,map__51232__$1,effect,ms,dispatch,seq__51222__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__51222,chunk__51223,count__51224,i__51225,map__51232,map__51232__$1,effect,ms,dispatch,seq__51222__$1,temp__5735__auto__))
,ms);
}


var G__51287 = cljs.core.next(seq__51222__$1);
var G__51288 = null;
var G__51289 = (0);
var G__51290 = (0);
seq__51222 = G__51287;
chunk__51223 = G__51288;
count__51224 = G__51289;
i__51225 = G__51290;
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
var seq__51234 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__51235 = null;
var count__51236 = (0);
var i__51237 = (0);
while(true){
if((i__51237 < count__51236)){
var event = chunk__51235.cljs$core$IIndexed$_nth$arity$2(null,i__51237);
re_frame.router.dispatch(event);


var G__51291 = seq__51234;
var G__51292 = chunk__51235;
var G__51293 = count__51236;
var G__51294 = (i__51237 + (1));
seq__51234 = G__51291;
chunk__51235 = G__51292;
count__51236 = G__51293;
i__51237 = G__51294;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51234);
if(temp__5735__auto__){
var seq__51234__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51234__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51234__$1);
var G__51295 = cljs.core.chunk_rest(seq__51234__$1);
var G__51296 = c__4556__auto__;
var G__51297 = cljs.core.count(c__4556__auto__);
var G__51298 = (0);
seq__51234 = G__51295;
chunk__51235 = G__51296;
count__51236 = G__51297;
i__51237 = G__51298;
continue;
} else {
var event = cljs.core.first(seq__51234__$1);
re_frame.router.dispatch(event);


var G__51299 = cljs.core.next(seq__51234__$1);
var G__51300 = null;
var G__51301 = (0);
var G__51302 = (0);
seq__51234 = G__51299;
chunk__51235 = G__51300;
count__51236 = G__51301;
i__51237 = G__51302;
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
var seq__51238 = cljs.core.seq(value);
var chunk__51239 = null;
var count__51240 = (0);
var i__51241 = (0);
while(true){
if((i__51241 < count__51240)){
var event = chunk__51239.cljs$core$IIndexed$_nth$arity$2(null,i__51241);
clear_event(event);


var G__51303 = seq__51238;
var G__51304 = chunk__51239;
var G__51305 = count__51240;
var G__51306 = (i__51241 + (1));
seq__51238 = G__51303;
chunk__51239 = G__51304;
count__51240 = G__51305;
i__51241 = G__51306;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51238);
if(temp__5735__auto__){
var seq__51238__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51238__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51238__$1);
var G__51307 = cljs.core.chunk_rest(seq__51238__$1);
var G__51308 = c__4556__auto__;
var G__51309 = cljs.core.count(c__4556__auto__);
var G__51310 = (0);
seq__51238 = G__51307;
chunk__51239 = G__51308;
count__51240 = G__51309;
i__51241 = G__51310;
continue;
} else {
var event = cljs.core.first(seq__51238__$1);
clear_event(event);


var G__51311 = cljs.core.next(seq__51238__$1);
var G__51312 = null;
var G__51313 = (0);
var G__51314 = (0);
seq__51238 = G__51311;
chunk__51239 = G__51312;
count__51240 = G__51313;
i__51241 = G__51314;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
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
