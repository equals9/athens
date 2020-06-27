goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.events');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.subs');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.cofx');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.std_interceptors');
goog.require('clojure.set');
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch;
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch_sync = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch_sync;
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.subs.reg_sub;
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.subscribe = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.subs.subscribe;
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.clear_sub = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.subs.kind);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.clear_subscription_cache_BANG_ = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.subs.clear_subscription_cache_BANG_;
/**
 * This is a low level, advanced function.  You should probably be
 *   using reg-sub instead.
 *   Docs in https://github.com/day8/re-frame/blob/master/docs/SubscriptionFlow.md
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub_raw = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$core$reg_sub_raw(query_id,handler_fn){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.subs.kind,query_id,handler_fn);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx;
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.clear_fx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_cofx = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.cofx.reg_cofx;
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.inject_cofx = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.cofx.inject_cofx;
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.clear_cofx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.cofx.kind);
/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (db event) -> db
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of this
 * chain.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_event_db = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$core$reg_event_db(var_args){
var G__28311 = arguments.length;
switch (G__28311) {
case 2:
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.cofx.inject_db,day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.do_fx,interceptors,day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.std_interceptors.db_handler__GT_interceptor(handler)], null));
}));

(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_event_db.cljs$lang$maxFixedArity = 3);

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (coeffects-map event-vector) -> effects-map
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of the
 * interceptor chain.  These interceptors inject the value of app-db into coeffects,
 * and, later, action effects.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_event_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$core$reg_event_fx(var_args){
var G__28315 = arguments.length;
switch (G__28315) {
case 2:
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.cofx.inject_db,day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.do_fx,interceptors,day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.std_interceptors.fx_handler__GT_interceptor(handler)], null));
}));

(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_event_fx.cljs$lang$maxFixedArity = 3);

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (context-map event-vector) -> context-map
 * 
 *   This form of registration is almost never used. 
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_event_ctx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$core$reg_event_ctx(var_args){
var G__28318 = arguments.length;
switch (G__28318) {
case 2:
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.cofx.inject_db,day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.do_fx,interceptors,day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.std_interceptors.ctx_handler__GT_interceptor(handler)], null));
}));

(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_event_ctx.cljs$lang$maxFixedArity = 3);

day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.events.kind);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.debug = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.std_interceptors.debug;
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.path = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.std_interceptors.path;
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.enrich = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.std_interceptors.enrich;
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.trim_v = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.std_interceptors.trim_v;
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.after = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.std_interceptors.after;
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.on_changes = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.std_interceptors.on_changes;
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.__GT_interceptor = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.__GT_interceptor;
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.get_coeffect = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.get_coeffect;
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.assoc_coeffect = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.assoc_coeffect;
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.get_effect = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.get_effect;
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.assoc_effect = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.assoc_effect;
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.enqueue = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.enqueue;
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.set_loggers_BANG_ = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.set_loggers_BANG_;
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.console = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console;
/**
 * Checkpoints the state of re-frame and returns a function which, when
 *   later called, will restore re-frame to that checkpointed state.
 * 
 *   Checkpoint includes app-db, all registered handlers and all subscriptions.
 *   
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.make_restore_fn = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$core$make_restore_fn(){
var handlers = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kind__GT_id__GT_handler);
var app_db = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db.app_db);
var subs_cache = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.subs.query__GT_reaction);
return (function (){
var original_subs_28349 = cljs.core.set(cljs.core.vals(subs_cache));
var current_subs_28350 = cljs.core.set(cljs.core.vals(cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.subs.query__GT_reaction)));
var seq__28325_28353 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(current_subs_28350,original_subs_28349));
var chunk__28326_28354 = null;
var count__28327_28355 = (0);
var i__28328_28356 = (0);
while(true){
if((i__28328_28356 < count__28327_28355)){
var sub_28357 = chunk__28326_28354.cljs$core$IIndexed$_nth$arity$2(null,i__28328_28356);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.dispose_BANG_(sub_28357);


var G__28358 = seq__28325_28353;
var G__28359 = chunk__28326_28354;
var G__28360 = count__28327_28355;
var G__28361 = (i__28328_28356 + (1));
seq__28325_28353 = G__28358;
chunk__28326_28354 = G__28359;
count__28327_28355 = G__28360;
i__28328_28356 = G__28361;
continue;
} else {
var temp__5735__auto___28362 = cljs.core.seq(seq__28325_28353);
if(temp__5735__auto___28362){
var seq__28325_28363__$1 = temp__5735__auto___28362;
if(cljs.core.chunked_seq_QMARK_(seq__28325_28363__$1)){
var c__4609__auto___28364 = cljs.core.chunk_first(seq__28325_28363__$1);
var G__28365 = cljs.core.chunk_rest(seq__28325_28363__$1);
var G__28366 = c__4609__auto___28364;
var G__28367 = cljs.core.count(c__4609__auto___28364);
var G__28368 = (0);
seq__28325_28353 = G__28365;
chunk__28326_28354 = G__28366;
count__28327_28355 = G__28367;
i__28328_28356 = G__28368;
continue;
} else {
var sub_28369 = cljs.core.first(seq__28325_28363__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.dispose_BANG_(sub_28369);


var G__28371 = cljs.core.next(seq__28325_28363__$1);
var G__28372 = null;
var G__28373 = (0);
var G__28374 = (0);
seq__28325_28353 = G__28371;
chunk__28326_28354 = G__28372;
count__28327_28355 = G__28373;
i__28328_28356 = G__28374;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kind__GT_id__GT_handler,handlers);

cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db.app_db,app_db);

return null;
});
});
/**
 * Remove all events queued for processing
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.purge_event_queue = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$core$purge_event_queue(){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.event_queue.day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$router$IEventQueue$purge$arity$1(null);
});
/**
 * Registers a function `f` to be called after each event is processed
 * `f` will be called with two arguments:
 *  - `event`: a vector. The event just processed.
 *  - `queue`: a PersistentQueue, possibly empty, of events yet to be processed.
 * 
 * This is useful in advanced cases like:
 *   - you are implementing a complex bootstrap pipeline
 *   - you want to create your own handling infrastructure, with perhaps multiple
 *     handlers for the one event, etc.  Hook in here.
 *   - libraries providing 'isomorphic javascript' rendering on  Nodejs or Nashorn.
 * 
 *   'id' is typically a keyword. Supplied at "add time" so it can subsequently
 *   be used at "remove time" to get rid of the right callback.
 *   
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.add_post_event_callback = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$core$add_post_event_callback(var_args){
var G__28333 = arguments.length;
switch (G__28333) {
case 1:
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1 = (function (f){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2(f,f);
}));

(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2 = (function (id,f){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.event_queue.day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$router$IEventQueue$add_post_event_callback$arity$3(null,id,f);
}));

(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.add_post_event_callback.cljs$lang$maxFixedArity = 2);

day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.remove_post_event_callback = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$core$remove_post_event_callback(id){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.event_queue.day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$router$IEventQueue$remove_post_event_callback$arity$2(null,id);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.register_handler = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$core$register_handler(var_args){
var args__4795__auto__ = [];
var len__4789__auto___28379 = arguments.length;
var i__4790__auto___28380 = (0);
while(true){
if((i__4790__auto___28380 < len__4789__auto___28379)){
args__4795__auto__.push((arguments[i__4790__auto___28380]));

var G__28381 = (i__4790__auto___28380 + (1));
i__4790__auto___28380 = G__28381;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__28335_28383 = new cljs.core.Keyword(null,"warn","warn",-436710552);
var G__28336_28384 = "re-frame:  \"register-handler\" has been renamed \"reg-event-db\" (look for registration of";
var G__28337_28385 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args));
var G__28338_28386 = ")";
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.console.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.console.cljs$core$IFn$_invoke$arity$4(G__28335_28383,G__28336_28384,G__28337_28385,G__28338_28386) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.console.call(null,G__28335_28383,G__28336_28384,G__28337_28385,G__28338_28386));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_event_db,args);
}));

(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.register_handler.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.register_handler.cljs$lang$applyTo = (function (seq28334){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28334));
}));

day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.register_sub = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$core$register_sub(var_args){
var args__4795__auto__ = [];
var len__4789__auto___28387 = arguments.length;
var i__4790__auto___28389 = (0);
while(true){
if((i__4790__auto___28389 < len__4789__auto___28387)){
args__4795__auto__.push((arguments[i__4790__auto___28389]));

var G__28392 = (i__4790__auto___28389 + (1));
i__4790__auto___28389 = G__28392;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__28340_28393 = new cljs.core.Keyword(null,"warn","warn",-436710552);
var G__28341_28394 = "re-frame:  \"register-sub\" is deprecated. Use \"reg-sub-raw\" (look for registration of";
var G__28342_28395 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args));
var G__28343_28396 = ")";
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.console.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.console.cljs$core$IFn$_invoke$arity$4(G__28340_28393,G__28341_28394,G__28342_28395,G__28343_28396) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.console.call(null,G__28340_28393,G__28341_28394,G__28342_28395,G__28343_28396));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub_raw,args);
}));

(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.register_sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.register_sub.cljs$lang$applyTo = (function (seq28339){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28339));
}));


//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.js.map
