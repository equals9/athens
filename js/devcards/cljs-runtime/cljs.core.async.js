goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__34325 = arguments.length;
switch (G__34325) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34326 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34326 = (function (f,blockable,meta34327){
this.f = f;
this.blockable = blockable;
this.meta34327 = meta34327;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34328,meta34327__$1){
var self__ = this;
var _34328__$1 = this;
return (new cljs.core.async.t_cljs$core$async34326(self__.f,self__.blockable,meta34327__$1));
}));

(cljs.core.async.t_cljs$core$async34326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34328){
var self__ = this;
var _34328__$1 = this;
return self__.meta34327;
}));

(cljs.core.async.t_cljs$core$async34326.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34326.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34326.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async34326.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async34326.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34327","meta34327",-813329371,null)], null);
}));

(cljs.core.async.t_cljs$core$async34326.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34326.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34326");

(cljs.core.async.t_cljs$core$async34326.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34326");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34326.
 */
cljs.core.async.__GT_t_cljs$core$async34326 = (function cljs$core$async$__GT_t_cljs$core$async34326(f__$1,blockable__$1,meta34327){
return (new cljs.core.async.t_cljs$core$async34326(f__$1,blockable__$1,meta34327));
});

}

return (new cljs.core.async.t_cljs$core$async34326(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__34333 = arguments.length;
switch (G__34333) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__34335 = arguments.length;
switch (G__34335) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__34337 = arguments.length;
switch (G__34337) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_36858 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36858) : fn1.call(null,val_36858));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36858) : fn1.call(null,val_36858));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__34339 = arguments.length;
switch (G__34339) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___36864 = n;
var x_36865 = (0);
while(true){
if((x_36865 < n__4666__auto___36864)){
(a[x_36865] = x_36865);

var G__36866 = (x_36865 + (1));
x_36865 = G__36866;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34341 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34341 = (function (flag,meta34342){
this.flag = flag;
this.meta34342 = meta34342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34343,meta34342__$1){
var self__ = this;
var _34343__$1 = this;
return (new cljs.core.async.t_cljs$core$async34341(self__.flag,meta34342__$1));
}));

(cljs.core.async.t_cljs$core$async34341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34343){
var self__ = this;
var _34343__$1 = this;
return self__.meta34342;
}));

(cljs.core.async.t_cljs$core$async34341.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34341.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34341.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34341.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async34341.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34342","meta34342",817471502,null)], null);
}));

(cljs.core.async.t_cljs$core$async34341.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34341.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34341");

(cljs.core.async.t_cljs$core$async34341.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34341");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34341.
 */
cljs.core.async.__GT_t_cljs$core$async34341 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34341(flag__$1,meta34342){
return (new cljs.core.async.t_cljs$core$async34341(flag__$1,meta34342));
});

}

return (new cljs.core.async.t_cljs$core$async34341(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34352 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34352 = (function (flag,cb,meta34353){
this.flag = flag;
this.cb = cb;
this.meta34353 = meta34353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34354,meta34353__$1){
var self__ = this;
var _34354__$1 = this;
return (new cljs.core.async.t_cljs$core$async34352(self__.flag,self__.cb,meta34353__$1));
}));

(cljs.core.async.t_cljs$core$async34352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34354){
var self__ = this;
var _34354__$1 = this;
return self__.meta34353;
}));

(cljs.core.async.t_cljs$core$async34352.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34352.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34352.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34352.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34353","meta34353",-42975121,null)], null);
}));

(cljs.core.async.t_cljs$core$async34352.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34352");

(cljs.core.async.t_cljs$core$async34352.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34352");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34352.
 */
cljs.core.async.__GT_t_cljs$core$async34352 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34352(flag__$1,cb__$1,meta34353){
return (new cljs.core.async.t_cljs$core$async34352(flag__$1,cb__$1,meta34353));
});

}

return (new cljs.core.async.t_cljs$core$async34352(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34355_SHARP_){
var G__34363 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34355_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34363) : fret.call(null,G__34363));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34356_SHARP_){
var G__34364 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34356_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34364) : fret.call(null,G__34364));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36875 = (i + (1));
i = G__36875;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36877 = arguments.length;
var i__4790__auto___36878 = (0);
while(true){
if((i__4790__auto___36878 < len__4789__auto___36877)){
args__4795__auto__.push((arguments[i__4790__auto___36878]));

var G__36879 = (i__4790__auto___36878 + (1));
i__4790__auto___36878 = G__36879;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34373){
var map__34374 = p__34373;
var map__34374__$1 = (((((!((map__34374 == null))))?(((((map__34374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34374):map__34374);
var opts = map__34374__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34371){
var G__34372 = cljs.core.first(seq34371);
var seq34371__$1 = cljs.core.next(seq34371);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34372,seq34371__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__34380 = arguments.length;
switch (G__34380) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__34267__auto___36884 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34416){
var state_val_34417 = (state_34416[(1)]);
if((state_val_34417 === (7))){
var inst_34412 = (state_34416[(2)]);
var state_34416__$1 = state_34416;
var statearr_34418_36886 = state_34416__$1;
(statearr_34418_36886[(2)] = inst_34412);

(statearr_34418_36886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (1))){
var state_34416__$1 = state_34416;
var statearr_34419_36887 = state_34416__$1;
(statearr_34419_36887[(2)] = null);

(statearr_34419_36887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (4))){
var inst_34395 = (state_34416[(7)]);
var inst_34395__$1 = (state_34416[(2)]);
var inst_34396 = (inst_34395__$1 == null);
var state_34416__$1 = (function (){var statearr_34420 = state_34416;
(statearr_34420[(7)] = inst_34395__$1);

return statearr_34420;
})();
if(cljs.core.truth_(inst_34396)){
var statearr_34421_36889 = state_34416__$1;
(statearr_34421_36889[(1)] = (5));

} else {
var statearr_34422_36890 = state_34416__$1;
(statearr_34422_36890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (13))){
var state_34416__$1 = state_34416;
var statearr_34423_36891 = state_34416__$1;
(statearr_34423_36891[(2)] = null);

(statearr_34423_36891[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (6))){
var inst_34395 = (state_34416[(7)]);
var state_34416__$1 = state_34416;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34416__$1,(11),to,inst_34395);
} else {
if((state_val_34417 === (3))){
var inst_34414 = (state_34416[(2)]);
var state_34416__$1 = state_34416;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34416__$1,inst_34414);
} else {
if((state_val_34417 === (12))){
var state_34416__$1 = state_34416;
var statearr_34424_36893 = state_34416__$1;
(statearr_34424_36893[(2)] = null);

(statearr_34424_36893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (2))){
var state_34416__$1 = state_34416;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34416__$1,(4),from);
} else {
if((state_val_34417 === (11))){
var inst_34405 = (state_34416[(2)]);
var state_34416__$1 = state_34416;
if(cljs.core.truth_(inst_34405)){
var statearr_34429_36895 = state_34416__$1;
(statearr_34429_36895[(1)] = (12));

} else {
var statearr_34430_36896 = state_34416__$1;
(statearr_34430_36896[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (9))){
var state_34416__$1 = state_34416;
var statearr_34431_36897 = state_34416__$1;
(statearr_34431_36897[(2)] = null);

(statearr_34431_36897[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (5))){
var state_34416__$1 = state_34416;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34432_36899 = state_34416__$1;
(statearr_34432_36899[(1)] = (8));

} else {
var statearr_34433_36900 = state_34416__$1;
(statearr_34433_36900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (14))){
var inst_34410 = (state_34416[(2)]);
var state_34416__$1 = state_34416;
var statearr_34435_36901 = state_34416__$1;
(statearr_34435_36901[(2)] = inst_34410);

(statearr_34435_36901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (10))){
var inst_34402 = (state_34416[(2)]);
var state_34416__$1 = state_34416;
var statearr_34436_36903 = state_34416__$1;
(statearr_34436_36903[(2)] = inst_34402);

(statearr_34436_36903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (8))){
var inst_34399 = cljs.core.async.close_BANG_(to);
var state_34416__$1 = state_34416;
var statearr_34437_36904 = state_34416__$1;
(statearr_34437_36904[(2)] = inst_34399);

(statearr_34437_36904[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34200__auto__ = null;
var cljs$core$async$state_machine__34200__auto____0 = (function (){
var statearr_34438 = [null,null,null,null,null,null,null,null];
(statearr_34438[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_34438[(1)] = (1));

return statearr_34438;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_34416){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34416);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34439){if((e34439 instanceof Object)){
var ex__34203__auto__ = e34439;
var statearr_34440_36906 = state_34416;
(statearr_34440_36906[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34439;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36908 = state_34416;
state_34416 = G__36908;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_34416){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_34416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34441 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34441[(6)] = c__34267__auto___36884);

return statearr_34441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__34445){
var vec__34446 = p__34445;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34446,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34446,(1),null);
var job = vec__34446;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34267__auto___36910 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34453){
var state_val_34454 = (state_34453[(1)]);
if((state_val_34454 === (1))){
var state_34453__$1 = state_34453;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34453__$1,(2),res,v);
} else {
if((state_val_34454 === (2))){
var inst_34450 = (state_34453[(2)]);
var inst_34451 = cljs.core.async.close_BANG_(res);
var state_34453__$1 = (function (){var statearr_34460 = state_34453;
(statearr_34460[(7)] = inst_34450);

return statearr_34460;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34453__$1,inst_34451);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_34463 = [null,null,null,null,null,null,null,null];
(statearr_34463[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34463[(1)] = (1));

return statearr_34463;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34453){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34453);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34464){if((e34464 instanceof Object)){
var ex__34203__auto__ = e34464;
var statearr_34465_36913 = state_34453;
(statearr_34465_36913[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34464;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36915 = state_34453;
state_34453 = G__36915;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34453){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34466 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34466[(6)] = c__34267__auto___36910);

return statearr_34466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34467){
var vec__34468 = p__34467;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34468,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34468,(1),null);
var job = vec__34468;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___36917 = n;
var __36918 = (0);
while(true){
if((__36918 < n__4666__auto___36917)){
var G__34472_36920 = type;
var G__34472_36921__$1 = (((G__34472_36920 instanceof cljs.core.Keyword))?G__34472_36920.fqn:null);
switch (G__34472_36921__$1) {
case "compute":
var c__34267__auto___36923 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36918,c__34267__auto___36923,G__34472_36920,G__34472_36921__$1,n__4666__auto___36917,jobs,results,process,async){
return (function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = ((function (__36918,c__34267__auto___36923,G__34472_36920,G__34472_36921__$1,n__4666__auto___36917,jobs,results,process,async){
return (function (state_34485){
var state_val_34486 = (state_34485[(1)]);
if((state_val_34486 === (1))){
var state_34485__$1 = state_34485;
var statearr_34491_36925 = state_34485__$1;
(statearr_34491_36925[(2)] = null);

(statearr_34491_36925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (2))){
var state_34485__$1 = state_34485;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34485__$1,(4),jobs);
} else {
if((state_val_34486 === (3))){
var inst_34483 = (state_34485[(2)]);
var state_34485__$1 = state_34485;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34485__$1,inst_34483);
} else {
if((state_val_34486 === (4))){
var inst_34475 = (state_34485[(2)]);
var inst_34476 = process(inst_34475);
var state_34485__$1 = state_34485;
if(cljs.core.truth_(inst_34476)){
var statearr_34495_36927 = state_34485__$1;
(statearr_34495_36927[(1)] = (5));

} else {
var statearr_34496_36928 = state_34485__$1;
(statearr_34496_36928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (5))){
var state_34485__$1 = state_34485;
var statearr_34497_36929 = state_34485__$1;
(statearr_34497_36929[(2)] = null);

(statearr_34497_36929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (6))){
var state_34485__$1 = state_34485;
var statearr_34498_36930 = state_34485__$1;
(statearr_34498_36930[(2)] = null);

(statearr_34498_36930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (7))){
var inst_34481 = (state_34485[(2)]);
var state_34485__$1 = state_34485;
var statearr_34499_36932 = state_34485__$1;
(statearr_34499_36932[(2)] = inst_34481);

(statearr_34499_36932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36918,c__34267__auto___36923,G__34472_36920,G__34472_36921__$1,n__4666__auto___36917,jobs,results,process,async))
;
return ((function (__36918,switch__34199__auto__,c__34267__auto___36923,G__34472_36920,G__34472_36921__$1,n__4666__auto___36917,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_34500 = [null,null,null,null,null,null,null];
(statearr_34500[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34500[(1)] = (1));

return statearr_34500;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34485){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34485);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34501){if((e34501 instanceof Object)){
var ex__34203__auto__ = e34501;
var statearr_34502_36933 = state_34485;
(statearr_34502_36933[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34501;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36935 = state_34485;
state_34485 = G__36935;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34485){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
;})(__36918,switch__34199__auto__,c__34267__auto___36923,G__34472_36920,G__34472_36921__$1,n__4666__auto___36917,jobs,results,process,async))
})();
var state__34269__auto__ = (function (){var statearr_34503 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34503[(6)] = c__34267__auto___36923);

return statearr_34503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
});})(__36918,c__34267__auto___36923,G__34472_36920,G__34472_36921__$1,n__4666__auto___36917,jobs,results,process,async))
);


break;
case "async":
var c__34267__auto___36942 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36918,c__34267__auto___36942,G__34472_36920,G__34472_36921__$1,n__4666__auto___36917,jobs,results,process,async){
return (function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = ((function (__36918,c__34267__auto___36942,G__34472_36920,G__34472_36921__$1,n__4666__auto___36917,jobs,results,process,async){
return (function (state_34516){
var state_val_34517 = (state_34516[(1)]);
if((state_val_34517 === (1))){
var state_34516__$1 = state_34516;
var statearr_34521_36943 = state_34516__$1;
(statearr_34521_36943[(2)] = null);

(statearr_34521_36943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (2))){
var state_34516__$1 = state_34516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34516__$1,(4),jobs);
} else {
if((state_val_34517 === (3))){
var inst_34514 = (state_34516[(2)]);
var state_34516__$1 = state_34516;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34516__$1,inst_34514);
} else {
if((state_val_34517 === (4))){
var inst_34506 = (state_34516[(2)]);
var inst_34507 = async(inst_34506);
var state_34516__$1 = state_34516;
if(cljs.core.truth_(inst_34507)){
var statearr_34522_36945 = state_34516__$1;
(statearr_34522_36945[(1)] = (5));

} else {
var statearr_34523_36946 = state_34516__$1;
(statearr_34523_36946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (5))){
var state_34516__$1 = state_34516;
var statearr_34524_36947 = state_34516__$1;
(statearr_34524_36947[(2)] = null);

(statearr_34524_36947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (6))){
var state_34516__$1 = state_34516;
var statearr_34525_36949 = state_34516__$1;
(statearr_34525_36949[(2)] = null);

(statearr_34525_36949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (7))){
var inst_34512 = (state_34516[(2)]);
var state_34516__$1 = state_34516;
var statearr_34526_36953 = state_34516__$1;
(statearr_34526_36953[(2)] = inst_34512);

(statearr_34526_36953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36918,c__34267__auto___36942,G__34472_36920,G__34472_36921__$1,n__4666__auto___36917,jobs,results,process,async))
;
return ((function (__36918,switch__34199__auto__,c__34267__auto___36942,G__34472_36920,G__34472_36921__$1,n__4666__auto___36917,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_34527 = [null,null,null,null,null,null,null];
(statearr_34527[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34527[(1)] = (1));

return statearr_34527;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34516){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34516);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34528){if((e34528 instanceof Object)){
var ex__34203__auto__ = e34528;
var statearr_34529_36954 = state_34516;
(statearr_34529_36954[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34528;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36955 = state_34516;
state_34516 = G__36955;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34516){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
;})(__36918,switch__34199__auto__,c__34267__auto___36942,G__34472_36920,G__34472_36921__$1,n__4666__auto___36917,jobs,results,process,async))
})();
var state__34269__auto__ = (function (){var statearr_34530 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34530[(6)] = c__34267__auto___36942);

return statearr_34530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
});})(__36918,c__34267__auto___36942,G__34472_36920,G__34472_36921__$1,n__4666__auto___36917,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34472_36921__$1)].join('')));

}

var G__36957 = (__36918 + (1));
__36918 = G__36957;
continue;
} else {
}
break;
}

var c__34267__auto___36958 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34552){
var state_val_34553 = (state_34552[(1)]);
if((state_val_34553 === (7))){
var inst_34548 = (state_34552[(2)]);
var state_34552__$1 = state_34552;
var statearr_34554_36959 = state_34552__$1;
(statearr_34554_36959[(2)] = inst_34548);

(statearr_34554_36959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34553 === (1))){
var state_34552__$1 = state_34552;
var statearr_34555_36960 = state_34552__$1;
(statearr_34555_36960[(2)] = null);

(statearr_34555_36960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34553 === (4))){
var inst_34533 = (state_34552[(7)]);
var inst_34533__$1 = (state_34552[(2)]);
var inst_34534 = (inst_34533__$1 == null);
var state_34552__$1 = (function (){var statearr_34556 = state_34552;
(statearr_34556[(7)] = inst_34533__$1);

return statearr_34556;
})();
if(cljs.core.truth_(inst_34534)){
var statearr_34557_36961 = state_34552__$1;
(statearr_34557_36961[(1)] = (5));

} else {
var statearr_34558_36962 = state_34552__$1;
(statearr_34558_36962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34553 === (6))){
var inst_34538 = (state_34552[(8)]);
var inst_34533 = (state_34552[(7)]);
var inst_34538__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34539 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34540 = [inst_34533,inst_34538__$1];
var inst_34541 = (new cljs.core.PersistentVector(null,2,(5),inst_34539,inst_34540,null));
var state_34552__$1 = (function (){var statearr_34559 = state_34552;
(statearr_34559[(8)] = inst_34538__$1);

return statearr_34559;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34552__$1,(8),jobs,inst_34541);
} else {
if((state_val_34553 === (3))){
var inst_34550 = (state_34552[(2)]);
var state_34552__$1 = state_34552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34552__$1,inst_34550);
} else {
if((state_val_34553 === (2))){
var state_34552__$1 = state_34552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34552__$1,(4),from);
} else {
if((state_val_34553 === (9))){
var inst_34545 = (state_34552[(2)]);
var state_34552__$1 = (function (){var statearr_34560 = state_34552;
(statearr_34560[(9)] = inst_34545);

return statearr_34560;
})();
var statearr_34561_36963 = state_34552__$1;
(statearr_34561_36963[(2)] = null);

(statearr_34561_36963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34553 === (5))){
var inst_34536 = cljs.core.async.close_BANG_(jobs);
var state_34552__$1 = state_34552;
var statearr_34562_36964 = state_34552__$1;
(statearr_34562_36964[(2)] = inst_34536);

(statearr_34562_36964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34553 === (8))){
var inst_34538 = (state_34552[(8)]);
var inst_34543 = (state_34552[(2)]);
var state_34552__$1 = (function (){var statearr_34563 = state_34552;
(statearr_34563[(10)] = inst_34543);

return statearr_34563;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34552__$1,(9),results,inst_34538);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_34564 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34564[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34564[(1)] = (1));

return statearr_34564;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34552){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34552);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34565){if((e34565 instanceof Object)){
var ex__34203__auto__ = e34565;
var statearr_34566_36965 = state_34552;
(statearr_34566_36965[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34565;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36966 = state_34552;
state_34552 = G__36966;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34552){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34567 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34567[(6)] = c__34267__auto___36958);

return statearr_34567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


var c__34267__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34605){
var state_val_34606 = (state_34605[(1)]);
if((state_val_34606 === (7))){
var inst_34601 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34607_36967 = state_34605__$1;
(statearr_34607_36967[(2)] = inst_34601);

(statearr_34607_36967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (20))){
var state_34605__$1 = state_34605;
var statearr_34608_36970 = state_34605__$1;
(statearr_34608_36970[(2)] = null);

(statearr_34608_36970[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (1))){
var state_34605__$1 = state_34605;
var statearr_34609_36972 = state_34605__$1;
(statearr_34609_36972[(2)] = null);

(statearr_34609_36972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (4))){
var inst_34570 = (state_34605[(7)]);
var inst_34570__$1 = (state_34605[(2)]);
var inst_34571 = (inst_34570__$1 == null);
var state_34605__$1 = (function (){var statearr_34610 = state_34605;
(statearr_34610[(7)] = inst_34570__$1);

return statearr_34610;
})();
if(cljs.core.truth_(inst_34571)){
var statearr_34611_36976 = state_34605__$1;
(statearr_34611_36976[(1)] = (5));

} else {
var statearr_34612_36977 = state_34605__$1;
(statearr_34612_36977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (15))){
var inst_34583 = (state_34605[(8)]);
var state_34605__$1 = state_34605;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34605__$1,(18),to,inst_34583);
} else {
if((state_val_34606 === (21))){
var inst_34596 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34613_36978 = state_34605__$1;
(statearr_34613_36978[(2)] = inst_34596);

(statearr_34613_36978[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (13))){
var inst_34598 = (state_34605[(2)]);
var state_34605__$1 = (function (){var statearr_34614 = state_34605;
(statearr_34614[(9)] = inst_34598);

return statearr_34614;
})();
var statearr_34615_36979 = state_34605__$1;
(statearr_34615_36979[(2)] = null);

(statearr_34615_36979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (6))){
var inst_34570 = (state_34605[(7)]);
var state_34605__$1 = state_34605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34605__$1,(11),inst_34570);
} else {
if((state_val_34606 === (17))){
var inst_34591 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
if(cljs.core.truth_(inst_34591)){
var statearr_34616_36980 = state_34605__$1;
(statearr_34616_36980[(1)] = (19));

} else {
var statearr_34617_36981 = state_34605__$1;
(statearr_34617_36981[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (3))){
var inst_34603 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34605__$1,inst_34603);
} else {
if((state_val_34606 === (12))){
var inst_34580 = (state_34605[(10)]);
var state_34605__$1 = state_34605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34605__$1,(14),inst_34580);
} else {
if((state_val_34606 === (2))){
var state_34605__$1 = state_34605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34605__$1,(4),results);
} else {
if((state_val_34606 === (19))){
var state_34605__$1 = state_34605;
var statearr_34618_36982 = state_34605__$1;
(statearr_34618_36982[(2)] = null);

(statearr_34618_36982[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (11))){
var inst_34580 = (state_34605[(2)]);
var state_34605__$1 = (function (){var statearr_34619 = state_34605;
(statearr_34619[(10)] = inst_34580);

return statearr_34619;
})();
var statearr_34620_36983 = state_34605__$1;
(statearr_34620_36983[(2)] = null);

(statearr_34620_36983[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (9))){
var state_34605__$1 = state_34605;
var statearr_34621_36984 = state_34605__$1;
(statearr_34621_36984[(2)] = null);

(statearr_34621_36984[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (5))){
var state_34605__$1 = state_34605;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34622_36985 = state_34605__$1;
(statearr_34622_36985[(1)] = (8));

} else {
var statearr_34623_36986 = state_34605__$1;
(statearr_34623_36986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (14))){
var inst_34583 = (state_34605[(8)]);
var inst_34583__$1 = (state_34605[(2)]);
var inst_34584 = (inst_34583__$1 == null);
var inst_34585 = cljs.core.not(inst_34584);
var state_34605__$1 = (function (){var statearr_34627 = state_34605;
(statearr_34627[(8)] = inst_34583__$1);

return statearr_34627;
})();
if(inst_34585){
var statearr_34628_36987 = state_34605__$1;
(statearr_34628_36987[(1)] = (15));

} else {
var statearr_34629_36988 = state_34605__$1;
(statearr_34629_36988[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (16))){
var state_34605__$1 = state_34605;
var statearr_34630_36989 = state_34605__$1;
(statearr_34630_36989[(2)] = false);

(statearr_34630_36989[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (10))){
var inst_34577 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34631_36992 = state_34605__$1;
(statearr_34631_36992[(2)] = inst_34577);

(statearr_34631_36992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (18))){
var inst_34588 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34635_36995 = state_34605__$1;
(statearr_34635_36995[(2)] = inst_34588);

(statearr_34635_36995[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (8))){
var inst_34574 = cljs.core.async.close_BANG_(to);
var state_34605__$1 = state_34605;
var statearr_34636_36998 = state_34605__$1;
(statearr_34636_36998[(2)] = inst_34574);

(statearr_34636_36998[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_34639 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34639[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34639[(1)] = (1));

return statearr_34639;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34605){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34605);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34641){if((e34641 instanceof Object)){
var ex__34203__auto__ = e34641;
var statearr_34642_36999 = state_34605;
(statearr_34642_36999[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34641;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37003 = state_34605;
state_34605 = G__37003;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34605){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34643 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34643[(6)] = c__34267__auto__);

return statearr_34643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));

return c__34267__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34647 = arguments.length;
switch (G__34647) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__34650 = arguments.length;
switch (G__34650) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34658 = arguments.length;
switch (G__34658) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__34267__auto___37031 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34685){
var state_val_34686 = (state_34685[(1)]);
if((state_val_34686 === (7))){
var inst_34681 = (state_34685[(2)]);
var state_34685__$1 = state_34685;
var statearr_34687_37032 = state_34685__$1;
(statearr_34687_37032[(2)] = inst_34681);

(statearr_34687_37032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34686 === (1))){
var state_34685__$1 = state_34685;
var statearr_34688_37033 = state_34685__$1;
(statearr_34688_37033[(2)] = null);

(statearr_34688_37033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34686 === (4))){
var inst_34661 = (state_34685[(7)]);
var inst_34661__$1 = (state_34685[(2)]);
var inst_34662 = (inst_34661__$1 == null);
var state_34685__$1 = (function (){var statearr_34689 = state_34685;
(statearr_34689[(7)] = inst_34661__$1);

return statearr_34689;
})();
if(cljs.core.truth_(inst_34662)){
var statearr_34690_37034 = state_34685__$1;
(statearr_34690_37034[(1)] = (5));

} else {
var statearr_34694_37035 = state_34685__$1;
(statearr_34694_37035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34686 === (13))){
var state_34685__$1 = state_34685;
var statearr_34695_37036 = state_34685__$1;
(statearr_34695_37036[(2)] = null);

(statearr_34695_37036[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34686 === (6))){
var inst_34661 = (state_34685[(7)]);
var inst_34668 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34661) : p.call(null,inst_34661));
var state_34685__$1 = state_34685;
if(cljs.core.truth_(inst_34668)){
var statearr_34696_37038 = state_34685__$1;
(statearr_34696_37038[(1)] = (9));

} else {
var statearr_34697_37041 = state_34685__$1;
(statearr_34697_37041[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34686 === (3))){
var inst_34683 = (state_34685[(2)]);
var state_34685__$1 = state_34685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34685__$1,inst_34683);
} else {
if((state_val_34686 === (12))){
var state_34685__$1 = state_34685;
var statearr_34701_37046 = state_34685__$1;
(statearr_34701_37046[(2)] = null);

(statearr_34701_37046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34686 === (2))){
var state_34685__$1 = state_34685;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34685__$1,(4),ch);
} else {
if((state_val_34686 === (11))){
var inst_34661 = (state_34685[(7)]);
var inst_34672 = (state_34685[(2)]);
var state_34685__$1 = state_34685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34685__$1,(8),inst_34672,inst_34661);
} else {
if((state_val_34686 === (9))){
var state_34685__$1 = state_34685;
var statearr_34702_37050 = state_34685__$1;
(statearr_34702_37050[(2)] = tc);

(statearr_34702_37050[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34686 === (5))){
var inst_34665 = cljs.core.async.close_BANG_(tc);
var inst_34666 = cljs.core.async.close_BANG_(fc);
var state_34685__$1 = (function (){var statearr_34703 = state_34685;
(statearr_34703[(8)] = inst_34665);

return statearr_34703;
})();
var statearr_34704_37053 = state_34685__$1;
(statearr_34704_37053[(2)] = inst_34666);

(statearr_34704_37053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34686 === (14))){
var inst_34679 = (state_34685[(2)]);
var state_34685__$1 = state_34685;
var statearr_34705_37056 = state_34685__$1;
(statearr_34705_37056[(2)] = inst_34679);

(statearr_34705_37056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34686 === (10))){
var state_34685__$1 = state_34685;
var statearr_34709_37061 = state_34685__$1;
(statearr_34709_37061[(2)] = fc);

(statearr_34709_37061[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34686 === (8))){
var inst_34674 = (state_34685[(2)]);
var state_34685__$1 = state_34685;
if(cljs.core.truth_(inst_34674)){
var statearr_34710_37066 = state_34685__$1;
(statearr_34710_37066[(1)] = (12));

} else {
var statearr_34711_37067 = state_34685__$1;
(statearr_34711_37067[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34200__auto__ = null;
var cljs$core$async$state_machine__34200__auto____0 = (function (){
var statearr_34712 = [null,null,null,null,null,null,null,null,null];
(statearr_34712[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_34712[(1)] = (1));

return statearr_34712;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_34685){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34685);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34713){if((e34713 instanceof Object)){
var ex__34203__auto__ = e34713;
var statearr_34714_37072 = state_34685;
(statearr_34714_37072[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34713;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37074 = state_34685;
state_34685 = G__37074;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_34685){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_34685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34715 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34715[(6)] = c__34267__auto___37031);

return statearr_34715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__34267__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34736){
var state_val_34737 = (state_34736[(1)]);
if((state_val_34737 === (7))){
var inst_34732 = (state_34736[(2)]);
var state_34736__$1 = state_34736;
var statearr_34738_37078 = state_34736__$1;
(statearr_34738_37078[(2)] = inst_34732);

(statearr_34738_37078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34737 === (1))){
var inst_34716 = init;
var state_34736__$1 = (function (){var statearr_34739 = state_34736;
(statearr_34739[(7)] = inst_34716);

return statearr_34739;
})();
var statearr_34740_37082 = state_34736__$1;
(statearr_34740_37082[(2)] = null);

(statearr_34740_37082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34737 === (4))){
var inst_34719 = (state_34736[(8)]);
var inst_34719__$1 = (state_34736[(2)]);
var inst_34720 = (inst_34719__$1 == null);
var state_34736__$1 = (function (){var statearr_34741 = state_34736;
(statearr_34741[(8)] = inst_34719__$1);

return statearr_34741;
})();
if(cljs.core.truth_(inst_34720)){
var statearr_34742_37088 = state_34736__$1;
(statearr_34742_37088[(1)] = (5));

} else {
var statearr_34743_37089 = state_34736__$1;
(statearr_34743_37089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34737 === (6))){
var inst_34716 = (state_34736[(7)]);
var inst_34719 = (state_34736[(8)]);
var inst_34723 = (state_34736[(9)]);
var inst_34723__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34716,inst_34719) : f.call(null,inst_34716,inst_34719));
var inst_34724 = cljs.core.reduced_QMARK_(inst_34723__$1);
var state_34736__$1 = (function (){var statearr_34744 = state_34736;
(statearr_34744[(9)] = inst_34723__$1);

return statearr_34744;
})();
if(inst_34724){
var statearr_34745_37090 = state_34736__$1;
(statearr_34745_37090[(1)] = (8));

} else {
var statearr_34749_37091 = state_34736__$1;
(statearr_34749_37091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34737 === (3))){
var inst_34734 = (state_34736[(2)]);
var state_34736__$1 = state_34736;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34736__$1,inst_34734);
} else {
if((state_val_34737 === (2))){
var state_34736__$1 = state_34736;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34736__$1,(4),ch);
} else {
if((state_val_34737 === (9))){
var inst_34723 = (state_34736[(9)]);
var inst_34716 = inst_34723;
var state_34736__$1 = (function (){var statearr_34753 = state_34736;
(statearr_34753[(7)] = inst_34716);

return statearr_34753;
})();
var statearr_34754_37100 = state_34736__$1;
(statearr_34754_37100[(2)] = null);

(statearr_34754_37100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34737 === (5))){
var inst_34716 = (state_34736[(7)]);
var state_34736__$1 = state_34736;
var statearr_34756_37101 = state_34736__$1;
(statearr_34756_37101[(2)] = inst_34716);

(statearr_34756_37101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34737 === (10))){
var inst_34730 = (state_34736[(2)]);
var state_34736__$1 = state_34736;
var statearr_34757_37102 = state_34736__$1;
(statearr_34757_37102[(2)] = inst_34730);

(statearr_34757_37102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34737 === (8))){
var inst_34723 = (state_34736[(9)]);
var inst_34726 = cljs.core.deref(inst_34723);
var state_34736__$1 = state_34736;
var statearr_34758_37105 = state_34736__$1;
(statearr_34758_37105[(2)] = inst_34726);

(statearr_34758_37105[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__34200__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34200__auto____0 = (function (){
var statearr_34759 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34759[(0)] = cljs$core$async$reduce_$_state_machine__34200__auto__);

(statearr_34759[(1)] = (1));

return statearr_34759;
});
var cljs$core$async$reduce_$_state_machine__34200__auto____1 = (function (state_34736){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34736);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34760){if((e34760 instanceof Object)){
var ex__34203__auto__ = e34760;
var statearr_34761_37107 = state_34736;
(statearr_34761_37107[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37111 = state_34736;
state_34736 = G__37111;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34200__auto__ = function(state_34736){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34200__auto____1.call(this,state_34736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34200__auto____0;
cljs$core$async$reduce_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34200__auto____1;
return cljs$core$async$reduce_$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34763 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34763[(6)] = c__34267__auto__);

return statearr_34763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));

return c__34267__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__34267__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34774){
var state_val_34775 = (state_34774[(1)]);
if((state_val_34775 === (1))){
var inst_34769 = cljs.core.async.reduce(f__$1,init,ch);
var state_34774__$1 = state_34774;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34774__$1,(2),inst_34769);
} else {
if((state_val_34775 === (2))){
var inst_34771 = (state_34774[(2)]);
var inst_34772 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34771) : f__$1.call(null,inst_34771));
var state_34774__$1 = state_34774;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34774__$1,inst_34772);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34200__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34200__auto____0 = (function (){
var statearr_34776 = [null,null,null,null,null,null,null];
(statearr_34776[(0)] = cljs$core$async$transduce_$_state_machine__34200__auto__);

(statearr_34776[(1)] = (1));

return statearr_34776;
});
var cljs$core$async$transduce_$_state_machine__34200__auto____1 = (function (state_34774){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34774);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34777){if((e34777 instanceof Object)){
var ex__34203__auto__ = e34777;
var statearr_34778_37123 = state_34774;
(statearr_34778_37123[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34777;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37124 = state_34774;
state_34774 = G__37124;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34200__auto__ = function(state_34774){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34200__auto____1.call(this,state_34774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34200__auto____0;
cljs$core$async$transduce_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34200__auto____1;
return cljs$core$async$transduce_$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34779 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34779[(6)] = c__34267__auto__);

return statearr_34779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));

return c__34267__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34784 = arguments.length;
switch (G__34784) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__34267__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34812){
var state_val_34813 = (state_34812[(1)]);
if((state_val_34813 === (7))){
var inst_34794 = (state_34812[(2)]);
var state_34812__$1 = state_34812;
var statearr_34814_37130 = state_34812__$1;
(statearr_34814_37130[(2)] = inst_34794);

(statearr_34814_37130[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (1))){
var inst_34788 = cljs.core.seq(coll);
var inst_34789 = inst_34788;
var state_34812__$1 = (function (){var statearr_34815 = state_34812;
(statearr_34815[(7)] = inst_34789);

return statearr_34815;
})();
var statearr_34816_37134 = state_34812__$1;
(statearr_34816_37134[(2)] = null);

(statearr_34816_37134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (4))){
var inst_34789 = (state_34812[(7)]);
var inst_34792 = cljs.core.first(inst_34789);
var state_34812__$1 = state_34812;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34812__$1,(7),ch,inst_34792);
} else {
if((state_val_34813 === (13))){
var inst_34806 = (state_34812[(2)]);
var state_34812__$1 = state_34812;
var statearr_34817_37139 = state_34812__$1;
(statearr_34817_37139[(2)] = inst_34806);

(statearr_34817_37139[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (6))){
var inst_34797 = (state_34812[(2)]);
var state_34812__$1 = state_34812;
if(cljs.core.truth_(inst_34797)){
var statearr_34818_37142 = state_34812__$1;
(statearr_34818_37142[(1)] = (8));

} else {
var statearr_34819_37143 = state_34812__$1;
(statearr_34819_37143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (3))){
var inst_34810 = (state_34812[(2)]);
var state_34812__$1 = state_34812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34812__$1,inst_34810);
} else {
if((state_val_34813 === (12))){
var state_34812__$1 = state_34812;
var statearr_34820_37144 = state_34812__$1;
(statearr_34820_37144[(2)] = null);

(statearr_34820_37144[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (2))){
var inst_34789 = (state_34812[(7)]);
var state_34812__$1 = state_34812;
if(cljs.core.truth_(inst_34789)){
var statearr_34821_37147 = state_34812__$1;
(statearr_34821_37147[(1)] = (4));

} else {
var statearr_34822_37148 = state_34812__$1;
(statearr_34822_37148[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (11))){
var inst_34803 = cljs.core.async.close_BANG_(ch);
var state_34812__$1 = state_34812;
var statearr_34823_37149 = state_34812__$1;
(statearr_34823_37149[(2)] = inst_34803);

(statearr_34823_37149[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (9))){
var state_34812__$1 = state_34812;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34824_37151 = state_34812__$1;
(statearr_34824_37151[(1)] = (11));

} else {
var statearr_34825_37152 = state_34812__$1;
(statearr_34825_37152[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (5))){
var inst_34789 = (state_34812[(7)]);
var state_34812__$1 = state_34812;
var statearr_34826_37155 = state_34812__$1;
(statearr_34826_37155[(2)] = inst_34789);

(statearr_34826_37155[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (10))){
var inst_34808 = (state_34812[(2)]);
var state_34812__$1 = state_34812;
var statearr_34827_37159 = state_34812__$1;
(statearr_34827_37159[(2)] = inst_34808);

(statearr_34827_37159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (8))){
var inst_34789 = (state_34812[(7)]);
var inst_34799 = cljs.core.next(inst_34789);
var inst_34789__$1 = inst_34799;
var state_34812__$1 = (function (){var statearr_34828 = state_34812;
(statearr_34828[(7)] = inst_34789__$1);

return statearr_34828;
})();
var statearr_34829_37165 = state_34812__$1;
(statearr_34829_37165[(2)] = null);

(statearr_34829_37165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34200__auto__ = null;
var cljs$core$async$state_machine__34200__auto____0 = (function (){
var statearr_34830 = [null,null,null,null,null,null,null,null];
(statearr_34830[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_34830[(1)] = (1));

return statearr_34830;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_34812){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34812);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34831){if((e34831 instanceof Object)){
var ex__34203__auto__ = e34831;
var statearr_34832_37166 = state_34812;
(statearr_34832_37166[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34831;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37167 = state_34812;
state_34812 = G__37167;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_34812){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_34812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34833 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34833[(6)] = c__34267__auto__);

return statearr_34833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));

return c__34267__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34840 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34840 = (function (ch,cs,meta34841){
this.ch = ch;
this.cs = cs;
this.meta34841 = meta34841;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34842,meta34841__$1){
var self__ = this;
var _34842__$1 = this;
return (new cljs.core.async.t_cljs$core$async34840(self__.ch,self__.cs,meta34841__$1));
}));

(cljs.core.async.t_cljs$core$async34840.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34842){
var self__ = this;
var _34842__$1 = this;
return self__.meta34841;
}));

(cljs.core.async.t_cljs$core$async34840.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34840.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34840.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34840.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34840.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34840.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34840.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34841","meta34841",-1987362317,null)], null);
}));

(cljs.core.async.t_cljs$core$async34840.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34840.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34840");

(cljs.core.async.t_cljs$core$async34840.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34840");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34840.
 */
cljs.core.async.__GT_t_cljs$core$async34840 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34840(ch__$1,cs__$1,meta34841){
return (new cljs.core.async.t_cljs$core$async34840(ch__$1,cs__$1,meta34841));
});

}

return (new cljs.core.async.t_cljs$core$async34840(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__34267__auto___37219 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_35024){
var state_val_35040 = (state_35024[(1)]);
if((state_val_35040 === (7))){
var inst_35012 = (state_35024[(2)]);
var state_35024__$1 = state_35024;
var statearr_35052_37220 = state_35024__$1;
(statearr_35052_37220[(2)] = inst_35012);

(statearr_35052_37220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (20))){
var inst_34886 = (state_35024[(7)]);
var inst_34900 = cljs.core.first(inst_34886);
var inst_34901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34900,(0),null);
var inst_34902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34900,(1),null);
var state_35024__$1 = (function (){var statearr_35059 = state_35024;
(statearr_35059[(8)] = inst_34901);

return statearr_35059;
})();
if(cljs.core.truth_(inst_34902)){
var statearr_35061_37226 = state_35024__$1;
(statearr_35061_37226[(1)] = (22));

} else {
var statearr_35064_37228 = state_35024__$1;
(statearr_35064_37228[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (27))){
var inst_34933 = (state_35024[(9)]);
var inst_34851 = (state_35024[(10)]);
var inst_34942 = (state_35024[(11)]);
var inst_34935 = (state_35024[(12)]);
var inst_34942__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34933,inst_34935);
var inst_34944 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34942__$1,inst_34851,done);
var state_35024__$1 = (function (){var statearr_35073 = state_35024;
(statearr_35073[(11)] = inst_34942__$1);

return statearr_35073;
})();
if(cljs.core.truth_(inst_34944)){
var statearr_35076_37230 = state_35024__$1;
(statearr_35076_37230[(1)] = (30));

} else {
var statearr_35078_37231 = state_35024__$1;
(statearr_35078_37231[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (1))){
var state_35024__$1 = state_35024;
var statearr_35083_37232 = state_35024__$1;
(statearr_35083_37232[(2)] = null);

(statearr_35083_37232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (24))){
var inst_34886 = (state_35024[(7)]);
var inst_34907 = (state_35024[(2)]);
var inst_34908 = cljs.core.next(inst_34886);
var inst_34860 = inst_34908;
var inst_34861 = null;
var inst_34862 = (0);
var inst_34863 = (0);
var state_35024__$1 = (function (){var statearr_35092 = state_35024;
(statearr_35092[(13)] = inst_34863);

(statearr_35092[(14)] = inst_34862);

(statearr_35092[(15)] = inst_34907);

(statearr_35092[(16)] = inst_34861);

(statearr_35092[(17)] = inst_34860);

return statearr_35092;
})();
var statearr_35096_37238 = state_35024__$1;
(statearr_35096_37238[(2)] = null);

(statearr_35096_37238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (39))){
var state_35024__$1 = state_35024;
var statearr_35111_37239 = state_35024__$1;
(statearr_35111_37239[(2)] = null);

(statearr_35111_37239[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (4))){
var inst_34851 = (state_35024[(10)]);
var inst_34851__$1 = (state_35024[(2)]);
var inst_34852 = (inst_34851__$1 == null);
var state_35024__$1 = (function (){var statearr_35112 = state_35024;
(statearr_35112[(10)] = inst_34851__$1);

return statearr_35112;
})();
if(cljs.core.truth_(inst_34852)){
var statearr_35113_37244 = state_35024__$1;
(statearr_35113_37244[(1)] = (5));

} else {
var statearr_35114_37246 = state_35024__$1;
(statearr_35114_37246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (15))){
var inst_34863 = (state_35024[(13)]);
var inst_34862 = (state_35024[(14)]);
var inst_34861 = (state_35024[(16)]);
var inst_34860 = (state_35024[(17)]);
var inst_34881 = (state_35024[(2)]);
var inst_34882 = (inst_34863 + (1));
var tmp35102 = inst_34862;
var tmp35103 = inst_34861;
var tmp35104 = inst_34860;
var inst_34860__$1 = tmp35104;
var inst_34861__$1 = tmp35103;
var inst_34862__$1 = tmp35102;
var inst_34863__$1 = inst_34882;
var state_35024__$1 = (function (){var statearr_35115 = state_35024;
(statearr_35115[(13)] = inst_34863__$1);

(statearr_35115[(14)] = inst_34862__$1);

(statearr_35115[(18)] = inst_34881);

(statearr_35115[(16)] = inst_34861__$1);

(statearr_35115[(17)] = inst_34860__$1);

return statearr_35115;
})();
var statearr_35117_37254 = state_35024__$1;
(statearr_35117_37254[(2)] = null);

(statearr_35117_37254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (21))){
var inst_34912 = (state_35024[(2)]);
var state_35024__$1 = state_35024;
var statearr_35122_37257 = state_35024__$1;
(statearr_35122_37257[(2)] = inst_34912);

(statearr_35122_37257[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (31))){
var inst_34942 = (state_35024[(11)]);
var inst_34947 = done(null);
var inst_34949 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34942);
var state_35024__$1 = (function (){var statearr_35123 = state_35024;
(statearr_35123[(19)] = inst_34947);

return statearr_35123;
})();
var statearr_35126_37261 = state_35024__$1;
(statearr_35126_37261[(2)] = inst_34949);

(statearr_35126_37261[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (32))){
var inst_34934 = (state_35024[(20)]);
var inst_34933 = (state_35024[(9)]);
var inst_34935 = (state_35024[(12)]);
var inst_34932 = (state_35024[(21)]);
var inst_34952 = (state_35024[(2)]);
var inst_34954 = (inst_34935 + (1));
var tmp35119 = inst_34934;
var tmp35120 = inst_34933;
var tmp35121 = inst_34932;
var inst_34932__$1 = tmp35121;
var inst_34933__$1 = tmp35120;
var inst_34934__$1 = tmp35119;
var inst_34935__$1 = inst_34954;
var state_35024__$1 = (function (){var statearr_35150 = state_35024;
(statearr_35150[(22)] = inst_34952);

(statearr_35150[(20)] = inst_34934__$1);

(statearr_35150[(9)] = inst_34933__$1);

(statearr_35150[(12)] = inst_34935__$1);

(statearr_35150[(21)] = inst_34932__$1);

return statearr_35150;
})();
var statearr_35153_37269 = state_35024__$1;
(statearr_35153_37269[(2)] = null);

(statearr_35153_37269[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (40))){
var inst_34979 = (state_35024[(23)]);
var inst_34984 = done(null);
var inst_34985 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34979);
var state_35024__$1 = (function (){var statearr_35156 = state_35024;
(statearr_35156[(24)] = inst_34984);

return statearr_35156;
})();
var statearr_35157_37274 = state_35024__$1;
(statearr_35157_37274[(2)] = inst_34985);

(statearr_35157_37274[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (33))){
var inst_34958 = (state_35024[(25)]);
var inst_34960 = cljs.core.chunked_seq_QMARK_(inst_34958);
var state_35024__$1 = state_35024;
if(inst_34960){
var statearr_35159_37275 = state_35024__$1;
(statearr_35159_37275[(1)] = (36));

} else {
var statearr_35163_37276 = state_35024__$1;
(statearr_35163_37276[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (13))){
var inst_34874 = (state_35024[(26)]);
var inst_34878 = cljs.core.async.close_BANG_(inst_34874);
var state_35024__$1 = state_35024;
var statearr_35169_37277 = state_35024__$1;
(statearr_35169_37277[(2)] = inst_34878);

(statearr_35169_37277[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (22))){
var inst_34901 = (state_35024[(8)]);
var inst_34904 = cljs.core.async.close_BANG_(inst_34901);
var state_35024__$1 = state_35024;
var statearr_35175_37282 = state_35024__$1;
(statearr_35175_37282[(2)] = inst_34904);

(statearr_35175_37282[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (36))){
var inst_34958 = (state_35024[(25)]);
var inst_34962 = cljs.core.chunk_first(inst_34958);
var inst_34963 = cljs.core.chunk_rest(inst_34958);
var inst_34964 = cljs.core.count(inst_34962);
var inst_34932 = inst_34963;
var inst_34933 = inst_34962;
var inst_34934 = inst_34964;
var inst_34935 = (0);
var state_35024__$1 = (function (){var statearr_35184 = state_35024;
(statearr_35184[(20)] = inst_34934);

(statearr_35184[(9)] = inst_34933);

(statearr_35184[(12)] = inst_34935);

(statearr_35184[(21)] = inst_34932);

return statearr_35184;
})();
var statearr_35191_37287 = state_35024__$1;
(statearr_35191_37287[(2)] = null);

(statearr_35191_37287[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (41))){
var inst_34958 = (state_35024[(25)]);
var inst_34988 = (state_35024[(2)]);
var inst_34990 = cljs.core.next(inst_34958);
var inst_34932 = inst_34990;
var inst_34933 = null;
var inst_34934 = (0);
var inst_34935 = (0);
var state_35024__$1 = (function (){var statearr_35197 = state_35024;
(statearr_35197[(27)] = inst_34988);

(statearr_35197[(20)] = inst_34934);

(statearr_35197[(9)] = inst_34933);

(statearr_35197[(12)] = inst_34935);

(statearr_35197[(21)] = inst_34932);

return statearr_35197;
})();
var statearr_35201_37292 = state_35024__$1;
(statearr_35201_37292[(2)] = null);

(statearr_35201_37292[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (43))){
var state_35024__$1 = state_35024;
var statearr_35206_37293 = state_35024__$1;
(statearr_35206_37293[(2)] = null);

(statearr_35206_37293[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (29))){
var inst_34998 = (state_35024[(2)]);
var state_35024__$1 = state_35024;
var statearr_35213_37294 = state_35024__$1;
(statearr_35213_37294[(2)] = inst_34998);

(statearr_35213_37294[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (44))){
var inst_35009 = (state_35024[(2)]);
var state_35024__$1 = (function (){var statearr_35216 = state_35024;
(statearr_35216[(28)] = inst_35009);

return statearr_35216;
})();
var statearr_35219_37298 = state_35024__$1;
(statearr_35219_37298[(2)] = null);

(statearr_35219_37298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (6))){
var inst_34923 = (state_35024[(29)]);
var inst_34922 = cljs.core.deref(cs);
var inst_34923__$1 = cljs.core.keys(inst_34922);
var inst_34924 = cljs.core.count(inst_34923__$1);
var inst_34925 = cljs.core.reset_BANG_(dctr,inst_34924);
var inst_34931 = cljs.core.seq(inst_34923__$1);
var inst_34932 = inst_34931;
var inst_34933 = null;
var inst_34934 = (0);
var inst_34935 = (0);
var state_35024__$1 = (function (){var statearr_35227 = state_35024;
(statearr_35227[(20)] = inst_34934);

(statearr_35227[(29)] = inst_34923__$1);

(statearr_35227[(30)] = inst_34925);

(statearr_35227[(9)] = inst_34933);

(statearr_35227[(12)] = inst_34935);

(statearr_35227[(21)] = inst_34932);

return statearr_35227;
})();
var statearr_35233_37302 = state_35024__$1;
(statearr_35233_37302[(2)] = null);

(statearr_35233_37302[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (28))){
var inst_34958 = (state_35024[(25)]);
var inst_34932 = (state_35024[(21)]);
var inst_34958__$1 = cljs.core.seq(inst_34932);
var state_35024__$1 = (function (){var statearr_35240 = state_35024;
(statearr_35240[(25)] = inst_34958__$1);

return statearr_35240;
})();
if(inst_34958__$1){
var statearr_35243_37303 = state_35024__$1;
(statearr_35243_37303[(1)] = (33));

} else {
var statearr_35244_37304 = state_35024__$1;
(statearr_35244_37304[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (25))){
var inst_34934 = (state_35024[(20)]);
var inst_34935 = (state_35024[(12)]);
var inst_34938 = (inst_34935 < inst_34934);
var inst_34939 = inst_34938;
var state_35024__$1 = state_35024;
if(cljs.core.truth_(inst_34939)){
var statearr_35250_37308 = state_35024__$1;
(statearr_35250_37308[(1)] = (27));

} else {
var statearr_35252_37310 = state_35024__$1;
(statearr_35252_37310[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (34))){
var state_35024__$1 = state_35024;
var statearr_35268_37311 = state_35024__$1;
(statearr_35268_37311[(2)] = null);

(statearr_35268_37311[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (17))){
var state_35024__$1 = state_35024;
var statearr_35271_37317 = state_35024__$1;
(statearr_35271_37317[(2)] = null);

(statearr_35271_37317[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (3))){
var inst_35014 = (state_35024[(2)]);
var state_35024__$1 = state_35024;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35024__$1,inst_35014);
} else {
if((state_val_35040 === (12))){
var inst_34918 = (state_35024[(2)]);
var state_35024__$1 = state_35024;
var statearr_35277_37320 = state_35024__$1;
(statearr_35277_37320[(2)] = inst_34918);

(statearr_35277_37320[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (2))){
var state_35024__$1 = state_35024;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35024__$1,(4),ch);
} else {
if((state_val_35040 === (23))){
var state_35024__$1 = state_35024;
var statearr_35287_37323 = state_35024__$1;
(statearr_35287_37323[(2)] = null);

(statearr_35287_37323[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (35))){
var inst_34996 = (state_35024[(2)]);
var state_35024__$1 = state_35024;
var statearr_35293_37325 = state_35024__$1;
(statearr_35293_37325[(2)] = inst_34996);

(statearr_35293_37325[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (19))){
var inst_34886 = (state_35024[(7)]);
var inst_34892 = cljs.core.chunk_first(inst_34886);
var inst_34893 = cljs.core.chunk_rest(inst_34886);
var inst_34894 = cljs.core.count(inst_34892);
var inst_34860 = inst_34893;
var inst_34861 = inst_34892;
var inst_34862 = inst_34894;
var inst_34863 = (0);
var state_35024__$1 = (function (){var statearr_35302 = state_35024;
(statearr_35302[(13)] = inst_34863);

(statearr_35302[(14)] = inst_34862);

(statearr_35302[(16)] = inst_34861);

(statearr_35302[(17)] = inst_34860);

return statearr_35302;
})();
var statearr_35304_37338 = state_35024__$1;
(statearr_35304_37338[(2)] = null);

(statearr_35304_37338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (11))){
var inst_34886 = (state_35024[(7)]);
var inst_34860 = (state_35024[(17)]);
var inst_34886__$1 = cljs.core.seq(inst_34860);
var state_35024__$1 = (function (){var statearr_35316 = state_35024;
(statearr_35316[(7)] = inst_34886__$1);

return statearr_35316;
})();
if(inst_34886__$1){
var statearr_35318_37341 = state_35024__$1;
(statearr_35318_37341[(1)] = (16));

} else {
var statearr_35321_37342 = state_35024__$1;
(statearr_35321_37342[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (9))){
var inst_34920 = (state_35024[(2)]);
var state_35024__$1 = state_35024;
var statearr_35325_37345 = state_35024__$1;
(statearr_35325_37345[(2)] = inst_34920);

(statearr_35325_37345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (5))){
var inst_34858 = cljs.core.deref(cs);
var inst_34859 = cljs.core.seq(inst_34858);
var inst_34860 = inst_34859;
var inst_34861 = null;
var inst_34862 = (0);
var inst_34863 = (0);
var state_35024__$1 = (function (){var statearr_35326 = state_35024;
(statearr_35326[(13)] = inst_34863);

(statearr_35326[(14)] = inst_34862);

(statearr_35326[(16)] = inst_34861);

(statearr_35326[(17)] = inst_34860);

return statearr_35326;
})();
var statearr_35327_37352 = state_35024__$1;
(statearr_35327_37352[(2)] = null);

(statearr_35327_37352[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (14))){
var state_35024__$1 = state_35024;
var statearr_35328_37355 = state_35024__$1;
(statearr_35328_37355[(2)] = null);

(statearr_35328_37355[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (45))){
var inst_35006 = (state_35024[(2)]);
var state_35024__$1 = state_35024;
var statearr_35329_37358 = state_35024__$1;
(statearr_35329_37358[(2)] = inst_35006);

(statearr_35329_37358[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (26))){
var inst_34923 = (state_35024[(29)]);
var inst_35000 = (state_35024[(2)]);
var inst_35003 = cljs.core.seq(inst_34923);
var state_35024__$1 = (function (){var statearr_35330 = state_35024;
(statearr_35330[(31)] = inst_35000);

return statearr_35330;
})();
if(inst_35003){
var statearr_35331_37365 = state_35024__$1;
(statearr_35331_37365[(1)] = (42));

} else {
var statearr_35332_37369 = state_35024__$1;
(statearr_35332_37369[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (16))){
var inst_34886 = (state_35024[(7)]);
var inst_34890 = cljs.core.chunked_seq_QMARK_(inst_34886);
var state_35024__$1 = state_35024;
if(inst_34890){
var statearr_35335_37373 = state_35024__$1;
(statearr_35335_37373[(1)] = (19));

} else {
var statearr_35336_37374 = state_35024__$1;
(statearr_35336_37374[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (38))){
var inst_34993 = (state_35024[(2)]);
var state_35024__$1 = state_35024;
var statearr_35337_37375 = state_35024__$1;
(statearr_35337_37375[(2)] = inst_34993);

(statearr_35337_37375[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (30))){
var state_35024__$1 = state_35024;
var statearr_35338_37378 = state_35024__$1;
(statearr_35338_37378[(2)] = null);

(statearr_35338_37378[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (10))){
var inst_34863 = (state_35024[(13)]);
var inst_34861 = (state_35024[(16)]);
var inst_34871 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34861,inst_34863);
var inst_34874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34871,(0),null);
var inst_34875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34871,(1),null);
var state_35024__$1 = (function (){var statearr_35341 = state_35024;
(statearr_35341[(26)] = inst_34874);

return statearr_35341;
})();
if(cljs.core.truth_(inst_34875)){
var statearr_35342_37382 = state_35024__$1;
(statearr_35342_37382[(1)] = (13));

} else {
var statearr_35346_37384 = state_35024__$1;
(statearr_35346_37384[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (18))){
var inst_34916 = (state_35024[(2)]);
var state_35024__$1 = state_35024;
var statearr_35349_37385 = state_35024__$1;
(statearr_35349_37385[(2)] = inst_34916);

(statearr_35349_37385[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (42))){
var state_35024__$1 = state_35024;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35024__$1,(45),dchan);
} else {
if((state_val_35040 === (37))){
var inst_34958 = (state_35024[(25)]);
var inst_34979 = (state_35024[(23)]);
var inst_34851 = (state_35024[(10)]);
var inst_34979__$1 = cljs.core.first(inst_34958);
var inst_34980 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34979__$1,inst_34851,done);
var state_35024__$1 = (function (){var statearr_35354 = state_35024;
(statearr_35354[(23)] = inst_34979__$1);

return statearr_35354;
})();
if(cljs.core.truth_(inst_34980)){
var statearr_35355_37392 = state_35024__$1;
(statearr_35355_37392[(1)] = (39));

} else {
var statearr_35356_37394 = state_35024__$1;
(statearr_35356_37394[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (8))){
var inst_34863 = (state_35024[(13)]);
var inst_34862 = (state_35024[(14)]);
var inst_34865 = (inst_34863 < inst_34862);
var inst_34866 = inst_34865;
var state_35024__$1 = state_35024;
if(cljs.core.truth_(inst_34866)){
var statearr_35359_37400 = state_35024__$1;
(statearr_35359_37400[(1)] = (10));

} else {
var statearr_35363_37402 = state_35024__$1;
(statearr_35363_37402[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__34200__auto__ = null;
var cljs$core$async$mult_$_state_machine__34200__auto____0 = (function (){
var statearr_35375 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35375[(0)] = cljs$core$async$mult_$_state_machine__34200__auto__);

(statearr_35375[(1)] = (1));

return statearr_35375;
});
var cljs$core$async$mult_$_state_machine__34200__auto____1 = (function (state_35024){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_35024);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e35377){if((e35377 instanceof Object)){
var ex__34203__auto__ = e35377;
var statearr_35378_37407 = state_35024;
(statearr_35378_37407[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35377;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37409 = state_35024;
state_35024 = G__37409;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34200__auto__ = function(state_35024){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34200__auto____1.call(this,state_35024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34200__auto____0;
cljs$core$async$mult_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34200__auto____1;
return cljs$core$async$mult_$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_35381 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_35381[(6)] = c__34267__auto___37219);

return statearr_35381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__35390 = arguments.length;
switch (G__35390) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37440 = arguments.length;
var i__4790__auto___37441 = (0);
while(true){
if((i__4790__auto___37441 < len__4789__auto___37440)){
args__4795__auto__.push((arguments[i__4790__auto___37441]));

var G__37442 = (i__4790__auto___37441 + (1));
i__4790__auto___37441 = G__37442;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35500){
var map__35502 = p__35500;
var map__35502__$1 = (((((!((map__35502 == null))))?(((((map__35502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35502):map__35502);
var opts = map__35502__$1;
var statearr_35510_37448 = state;
(statearr_35510_37448[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35516_37449 = state;
(statearr_35516_37449[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35528_37452 = state;
(statearr_35528_37452[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35483){
var G__35484 = cljs.core.first(seq35483);
var seq35483__$1 = cljs.core.next(seq35483);
var G__35485 = cljs.core.first(seq35483__$1);
var seq35483__$2 = cljs.core.next(seq35483__$1);
var G__35486 = cljs.core.first(seq35483__$2);
var seq35483__$3 = cljs.core.next(seq35483__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35484,G__35485,G__35486,seq35483__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35562 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35562 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35563){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35563 = meta35563;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35564,meta35563__$1){
var self__ = this;
var _35564__$1 = this;
return (new cljs.core.async.t_cljs$core$async35562(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35563__$1));
}));

(cljs.core.async.t_cljs$core$async35562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35564){
var self__ = this;
var _35564__$1 = this;
return self__.meta35563;
}));

(cljs.core.async.t_cljs$core$async35562.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35562.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35562.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35562.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35562.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35562.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35562.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35562.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35562.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35563","meta35563",-1486850583,null)], null);
}));

(cljs.core.async.t_cljs$core$async35562.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35562.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35562");

(cljs.core.async.t_cljs$core$async35562.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35562");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35562.
 */
cljs.core.async.__GT_t_cljs$core$async35562 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35562(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35563){
return (new cljs.core.async.t_cljs$core$async35562(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35563));
});

}

return (new cljs.core.async.t_cljs$core$async35562(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34267__auto___37509 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_35687){
var state_val_35688 = (state_35687[(1)]);
if((state_val_35688 === (7))){
var inst_35593 = (state_35687[(2)]);
var state_35687__$1 = state_35687;
var statearr_35690_37512 = state_35687__$1;
(statearr_35690_37512[(2)] = inst_35593);

(statearr_35690_37512[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (20))){
var inst_35605 = (state_35687[(7)]);
var state_35687__$1 = state_35687;
var statearr_35692_37517 = state_35687__$1;
(statearr_35692_37517[(2)] = inst_35605);

(statearr_35692_37517[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (27))){
var state_35687__$1 = state_35687;
var statearr_35693_37519 = state_35687__$1;
(statearr_35693_37519[(2)] = null);

(statearr_35693_37519[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (1))){
var inst_35579 = (state_35687[(8)]);
var inst_35579__$1 = calc_state();
var inst_35581 = (inst_35579__$1 == null);
var inst_35582 = cljs.core.not(inst_35581);
var state_35687__$1 = (function (){var statearr_35695 = state_35687;
(statearr_35695[(8)] = inst_35579__$1);

return statearr_35695;
})();
if(inst_35582){
var statearr_35696_37523 = state_35687__$1;
(statearr_35696_37523[(1)] = (2));

} else {
var statearr_35697_37527 = state_35687__$1;
(statearr_35697_37527[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (24))){
var inst_35629 = (state_35687[(9)]);
var inst_35638 = (state_35687[(10)]);
var inst_35658 = (state_35687[(11)]);
var inst_35658__$1 = (inst_35629.cljs$core$IFn$_invoke$arity$1 ? inst_35629.cljs$core$IFn$_invoke$arity$1(inst_35638) : inst_35629.call(null,inst_35638));
var state_35687__$1 = (function (){var statearr_35698 = state_35687;
(statearr_35698[(11)] = inst_35658__$1);

return statearr_35698;
})();
if(cljs.core.truth_(inst_35658__$1)){
var statearr_35700_37531 = state_35687__$1;
(statearr_35700_37531[(1)] = (29));

} else {
var statearr_35701_37532 = state_35687__$1;
(statearr_35701_37532[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (4))){
var inst_35596 = (state_35687[(2)]);
var state_35687__$1 = state_35687;
if(cljs.core.truth_(inst_35596)){
var statearr_35703_37535 = state_35687__$1;
(statearr_35703_37535[(1)] = (8));

} else {
var statearr_35704_37538 = state_35687__$1;
(statearr_35704_37538[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (15))){
var inst_35623 = (state_35687[(2)]);
var state_35687__$1 = state_35687;
if(cljs.core.truth_(inst_35623)){
var statearr_35705_37541 = state_35687__$1;
(statearr_35705_37541[(1)] = (19));

} else {
var statearr_35707_37543 = state_35687__$1;
(statearr_35707_37543[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (21))){
var inst_35628 = (state_35687[(12)]);
var inst_35628__$1 = (state_35687[(2)]);
var inst_35629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35628__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35628__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35628__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35687__$1 = (function (){var statearr_35711 = state_35687;
(statearr_35711[(9)] = inst_35629);

(statearr_35711[(13)] = inst_35630);

(statearr_35711[(12)] = inst_35628__$1);

return statearr_35711;
})();
return cljs.core.async.ioc_alts_BANG_(state_35687__$1,(22),inst_35631);
} else {
if((state_val_35688 === (31))){
var inst_35668 = (state_35687[(2)]);
var state_35687__$1 = state_35687;
if(cljs.core.truth_(inst_35668)){
var statearr_35714_37554 = state_35687__$1;
(statearr_35714_37554[(1)] = (32));

} else {
var statearr_35715_37556 = state_35687__$1;
(statearr_35715_37556[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (32))){
var inst_35637 = (state_35687[(14)]);
var state_35687__$1 = state_35687;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35687__$1,(35),out,inst_35637);
} else {
if((state_val_35688 === (33))){
var inst_35628 = (state_35687[(12)]);
var inst_35605 = inst_35628;
var state_35687__$1 = (function (){var statearr_35720 = state_35687;
(statearr_35720[(7)] = inst_35605);

return statearr_35720;
})();
var statearr_35721_37560 = state_35687__$1;
(statearr_35721_37560[(2)] = null);

(statearr_35721_37560[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (13))){
var inst_35605 = (state_35687[(7)]);
var inst_35612 = inst_35605.cljs$lang$protocol_mask$partition0$;
var inst_35613 = (inst_35612 & (64));
var inst_35614 = inst_35605.cljs$core$ISeq$;
var inst_35615 = (cljs.core.PROTOCOL_SENTINEL === inst_35614);
var inst_35616 = ((inst_35613) || (inst_35615));
var state_35687__$1 = state_35687;
if(cljs.core.truth_(inst_35616)){
var statearr_35728_37568 = state_35687__$1;
(statearr_35728_37568[(1)] = (16));

} else {
var statearr_35730_37570 = state_35687__$1;
(statearr_35730_37570[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (22))){
var inst_35638 = (state_35687[(10)]);
var inst_35637 = (state_35687[(14)]);
var inst_35636 = (state_35687[(2)]);
var inst_35637__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35636,(0),null);
var inst_35638__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35636,(1),null);
var inst_35640 = (inst_35637__$1 == null);
var inst_35641 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35638__$1,change);
var inst_35642 = ((inst_35640) || (inst_35641));
var state_35687__$1 = (function (){var statearr_35738 = state_35687;
(statearr_35738[(10)] = inst_35638__$1);

(statearr_35738[(14)] = inst_35637__$1);

return statearr_35738;
})();
if(cljs.core.truth_(inst_35642)){
var statearr_35743_37581 = state_35687__$1;
(statearr_35743_37581[(1)] = (23));

} else {
var statearr_35745_37582 = state_35687__$1;
(statearr_35745_37582[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (36))){
var inst_35628 = (state_35687[(12)]);
var inst_35605 = inst_35628;
var state_35687__$1 = (function (){var statearr_35746 = state_35687;
(statearr_35746[(7)] = inst_35605);

return statearr_35746;
})();
var statearr_35747_37585 = state_35687__$1;
(statearr_35747_37585[(2)] = null);

(statearr_35747_37585[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (29))){
var inst_35658 = (state_35687[(11)]);
var state_35687__$1 = state_35687;
var statearr_35750_37588 = state_35687__$1;
(statearr_35750_37588[(2)] = inst_35658);

(statearr_35750_37588[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (6))){
var state_35687__$1 = state_35687;
var statearr_35751_37590 = state_35687__$1;
(statearr_35751_37590[(2)] = false);

(statearr_35751_37590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (28))){
var inst_35652 = (state_35687[(2)]);
var inst_35655 = calc_state();
var inst_35605 = inst_35655;
var state_35687__$1 = (function (){var statearr_35754 = state_35687;
(statearr_35754[(7)] = inst_35605);

(statearr_35754[(15)] = inst_35652);

return statearr_35754;
})();
var statearr_35756_37598 = state_35687__$1;
(statearr_35756_37598[(2)] = null);

(statearr_35756_37598[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (25))){
var inst_35682 = (state_35687[(2)]);
var state_35687__$1 = state_35687;
var statearr_35757_37600 = state_35687__$1;
(statearr_35757_37600[(2)] = inst_35682);

(statearr_35757_37600[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (34))){
var inst_35680 = (state_35687[(2)]);
var state_35687__$1 = state_35687;
var statearr_35759_37603 = state_35687__$1;
(statearr_35759_37603[(2)] = inst_35680);

(statearr_35759_37603[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (17))){
var state_35687__$1 = state_35687;
var statearr_35762_37611 = state_35687__$1;
(statearr_35762_37611[(2)] = false);

(statearr_35762_37611[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (3))){
var state_35687__$1 = state_35687;
var statearr_35763_37614 = state_35687__$1;
(statearr_35763_37614[(2)] = false);

(statearr_35763_37614[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (12))){
var inst_35684 = (state_35687[(2)]);
var state_35687__$1 = state_35687;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35687__$1,inst_35684);
} else {
if((state_val_35688 === (2))){
var inst_35579 = (state_35687[(8)]);
var inst_35585 = inst_35579.cljs$lang$protocol_mask$partition0$;
var inst_35586 = (inst_35585 & (64));
var inst_35587 = inst_35579.cljs$core$ISeq$;
var inst_35588 = (cljs.core.PROTOCOL_SENTINEL === inst_35587);
var inst_35589 = ((inst_35586) || (inst_35588));
var state_35687__$1 = state_35687;
if(cljs.core.truth_(inst_35589)){
var statearr_35767_37621 = state_35687__$1;
(statearr_35767_37621[(1)] = (5));

} else {
var statearr_35768_37624 = state_35687__$1;
(statearr_35768_37624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (23))){
var inst_35637 = (state_35687[(14)]);
var inst_35644 = (inst_35637 == null);
var state_35687__$1 = state_35687;
if(cljs.core.truth_(inst_35644)){
var statearr_35770_37627 = state_35687__$1;
(statearr_35770_37627[(1)] = (26));

} else {
var statearr_35771_37629 = state_35687__$1;
(statearr_35771_37629[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (35))){
var inst_35671 = (state_35687[(2)]);
var state_35687__$1 = state_35687;
if(cljs.core.truth_(inst_35671)){
var statearr_35772_37630 = state_35687__$1;
(statearr_35772_37630[(1)] = (36));

} else {
var statearr_35773_37631 = state_35687__$1;
(statearr_35773_37631[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (19))){
var inst_35605 = (state_35687[(7)]);
var inst_35625 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35605);
var state_35687__$1 = state_35687;
var statearr_35775_37643 = state_35687__$1;
(statearr_35775_37643[(2)] = inst_35625);

(statearr_35775_37643[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (11))){
var inst_35605 = (state_35687[(7)]);
var inst_35609 = (inst_35605 == null);
var inst_35610 = cljs.core.not(inst_35609);
var state_35687__$1 = state_35687;
if(inst_35610){
var statearr_35776_37645 = state_35687__$1;
(statearr_35776_37645[(1)] = (13));

} else {
var statearr_35777_37647 = state_35687__$1;
(statearr_35777_37647[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (9))){
var inst_35579 = (state_35687[(8)]);
var state_35687__$1 = state_35687;
var statearr_35779_37651 = state_35687__$1;
(statearr_35779_37651[(2)] = inst_35579);

(statearr_35779_37651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (5))){
var state_35687__$1 = state_35687;
var statearr_35782_37656 = state_35687__$1;
(statearr_35782_37656[(2)] = true);

(statearr_35782_37656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (14))){
var state_35687__$1 = state_35687;
var statearr_35785_37658 = state_35687__$1;
(statearr_35785_37658[(2)] = false);

(statearr_35785_37658[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (26))){
var inst_35638 = (state_35687[(10)]);
var inst_35649 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35638);
var state_35687__$1 = state_35687;
var statearr_35787_37660 = state_35687__$1;
(statearr_35787_37660[(2)] = inst_35649);

(statearr_35787_37660[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (16))){
var state_35687__$1 = state_35687;
var statearr_35790_37666 = state_35687__$1;
(statearr_35790_37666[(2)] = true);

(statearr_35790_37666[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (38))){
var inst_35676 = (state_35687[(2)]);
var state_35687__$1 = state_35687;
var statearr_35792_37673 = state_35687__$1;
(statearr_35792_37673[(2)] = inst_35676);

(statearr_35792_37673[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (30))){
var inst_35629 = (state_35687[(9)]);
var inst_35638 = (state_35687[(10)]);
var inst_35630 = (state_35687[(13)]);
var inst_35663 = cljs.core.empty_QMARK_(inst_35629);
var inst_35664 = (inst_35630.cljs$core$IFn$_invoke$arity$1 ? inst_35630.cljs$core$IFn$_invoke$arity$1(inst_35638) : inst_35630.call(null,inst_35638));
var inst_35665 = cljs.core.not(inst_35664);
var inst_35666 = ((inst_35663) && (inst_35665));
var state_35687__$1 = state_35687;
var statearr_35798_37676 = state_35687__$1;
(statearr_35798_37676[(2)] = inst_35666);

(statearr_35798_37676[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (10))){
var inst_35579 = (state_35687[(8)]);
var inst_35601 = (state_35687[(2)]);
var inst_35602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35601,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35601,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35601,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35605 = inst_35579;
var state_35687__$1 = (function (){var statearr_35803 = state_35687;
(statearr_35803[(7)] = inst_35605);

(statearr_35803[(16)] = inst_35602);

(statearr_35803[(17)] = inst_35603);

(statearr_35803[(18)] = inst_35604);

return statearr_35803;
})();
var statearr_35804_37686 = state_35687__$1;
(statearr_35804_37686[(2)] = null);

(statearr_35804_37686[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (18))){
var inst_35620 = (state_35687[(2)]);
var state_35687__$1 = state_35687;
var statearr_35807_37687 = state_35687__$1;
(statearr_35807_37687[(2)] = inst_35620);

(statearr_35807_37687[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (37))){
var state_35687__$1 = state_35687;
var statearr_35809_37693 = state_35687__$1;
(statearr_35809_37693[(2)] = null);

(statearr_35809_37693[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35688 === (8))){
var inst_35579 = (state_35687[(8)]);
var inst_35598 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35579);
var state_35687__$1 = state_35687;
var statearr_35810_37696 = state_35687__$1;
(statearr_35810_37696[(2)] = inst_35598);

(statearr_35810_37696[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__34200__auto__ = null;
var cljs$core$async$mix_$_state_machine__34200__auto____0 = (function (){
var statearr_35815 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35815[(0)] = cljs$core$async$mix_$_state_machine__34200__auto__);

(statearr_35815[(1)] = (1));

return statearr_35815;
});
var cljs$core$async$mix_$_state_machine__34200__auto____1 = (function (state_35687){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_35687);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e35816){if((e35816 instanceof Object)){
var ex__34203__auto__ = e35816;
var statearr_35819_37701 = state_35687;
(statearr_35819_37701[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35816;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37702 = state_35687;
state_35687 = G__37702;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34200__auto__ = function(state_35687){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34200__auto____1.call(this,state_35687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34200__auto____0;
cljs$core$async$mix_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34200__auto____1;
return cljs$core$async$mix_$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_35822 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_35822[(6)] = c__34267__auto___37509);

return statearr_35822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35853 = arguments.length;
switch (G__35853) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__35870 = arguments.length;
switch (G__35870) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35864_SHARP_){
if(cljs.core.truth_((p1__35864_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35864_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35864_SHARP_.call(null,topic)))){
return p1__35864_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35864_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35878 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35878 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35879){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35879 = meta35879;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35880,meta35879__$1){
var self__ = this;
var _35880__$1 = this;
return (new cljs.core.async.t_cljs$core$async35878(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35879__$1));
}));

(cljs.core.async.t_cljs$core$async35878.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35880){
var self__ = this;
var _35880__$1 = this;
return self__.meta35879;
}));

(cljs.core.async.t_cljs$core$async35878.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35878.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35878.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35878.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35878.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async35878.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35878.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35878.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35879","meta35879",1378413376,null)], null);
}));

(cljs.core.async.t_cljs$core$async35878.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35878.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35878");

(cljs.core.async.t_cljs$core$async35878.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35878");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35878.
 */
cljs.core.async.__GT_t_cljs$core$async35878 = (function cljs$core$async$__GT_t_cljs$core$async35878(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35879){
return (new cljs.core.async.t_cljs$core$async35878(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35879));
});

}

return (new cljs.core.async.t_cljs$core$async35878(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34267__auto___37755 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_35991){
var state_val_35993 = (state_35991[(1)]);
if((state_val_35993 === (7))){
var inst_35982 = (state_35991[(2)]);
var state_35991__$1 = state_35991;
var statearr_35997_37762 = state_35991__$1;
(statearr_35997_37762[(2)] = inst_35982);

(statearr_35997_37762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35993 === (20))){
var state_35991__$1 = state_35991;
var statearr_35999_37764 = state_35991__$1;
(statearr_35999_37764[(2)] = null);

(statearr_35999_37764[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35993 === (1))){
var state_35991__$1 = state_35991;
var statearr_36000_37766 = state_35991__$1;
(statearr_36000_37766[(2)] = null);

(statearr_36000_37766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35993 === (24))){
var inst_35965 = (state_35991[(7)]);
var inst_35974 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35965);
var state_35991__$1 = state_35991;
var statearr_36001_37769 = state_35991__$1;
(statearr_36001_37769[(2)] = inst_35974);

(statearr_36001_37769[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35993 === (4))){
var inst_35913 = (state_35991[(8)]);
var inst_35913__$1 = (state_35991[(2)]);
var inst_35914 = (inst_35913__$1 == null);
var state_35991__$1 = (function (){var statearr_36002 = state_35991;
(statearr_36002[(8)] = inst_35913__$1);

return statearr_36002;
})();
if(cljs.core.truth_(inst_35914)){
var statearr_36003_37776 = state_35991__$1;
(statearr_36003_37776[(1)] = (5));

} else {
var statearr_36004_37778 = state_35991__$1;
(statearr_36004_37778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35993 === (15))){
var inst_35959 = (state_35991[(2)]);
var state_35991__$1 = state_35991;
var statearr_36005_37780 = state_35991__$1;
(statearr_36005_37780[(2)] = inst_35959);

(statearr_36005_37780[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35993 === (21))){
var inst_35979 = (state_35991[(2)]);
var state_35991__$1 = (function (){var statearr_36006 = state_35991;
(statearr_36006[(9)] = inst_35979);

return statearr_36006;
})();
var statearr_36007_37781 = state_35991__$1;
(statearr_36007_37781[(2)] = null);

(statearr_36007_37781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35993 === (13))){
var inst_35941 = (state_35991[(10)]);
var inst_35943 = cljs.core.chunked_seq_QMARK_(inst_35941);
var state_35991__$1 = state_35991;
if(inst_35943){
var statearr_36008_37783 = state_35991__$1;
(statearr_36008_37783[(1)] = (16));

} else {
var statearr_36009_37786 = state_35991__$1;
(statearr_36009_37786[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35993 === (22))){
var inst_35971 = (state_35991[(2)]);
var state_35991__$1 = state_35991;
if(cljs.core.truth_(inst_35971)){
var statearr_36010_37790 = state_35991__$1;
(statearr_36010_37790[(1)] = (23));

} else {
var statearr_36011_37794 = state_35991__$1;
(statearr_36011_37794[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35993 === (6))){
var inst_35965 = (state_35991[(7)]);
var inst_35967 = (state_35991[(11)]);
var inst_35913 = (state_35991[(8)]);
var inst_35965__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35913) : topic_fn.call(null,inst_35913));
var inst_35966 = cljs.core.deref(mults);
var inst_35967__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35966,inst_35965__$1);
var state_35991__$1 = (function (){var statearr_36012 = state_35991;
(statearr_36012[(7)] = inst_35965__$1);

(statearr_36012[(11)] = inst_35967__$1);

return statearr_36012;
})();
if(cljs.core.truth_(inst_35967__$1)){
var statearr_36013_37797 = state_35991__$1;
(statearr_36013_37797[(1)] = (19));

} else {
var statearr_36014_37798 = state_35991__$1;
(statearr_36014_37798[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35993 === (25))){
var inst_35976 = (state_35991[(2)]);
var state_35991__$1 = state_35991;
var statearr_36015_37800 = state_35991__$1;
(statearr_36015_37800[(2)] = inst_35976);

(statearr_36015_37800[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35993 === (17))){
var inst_35941 = (state_35991[(10)]);
var inst_35950 = cljs.core.first(inst_35941);
var inst_35951 = cljs.core.async.muxch_STAR_(inst_35950);
var inst_35952 = cljs.core.async.close_BANG_(inst_35951);
var inst_35953 = cljs.core.next(inst_35941);
var inst_35924 = inst_35953;
var inst_35925 = null;
var inst_35926 = (0);
var inst_35927 = (0);
var state_35991__$1 = (function (){var statearr_36017 = state_35991;
(statearr_36017[(12)] = inst_35926);

(statearr_36017[(13)] = inst_35952);

(statearr_36017[(14)] = inst_35925);

(statearr_36017[(15)] = inst_35924);

(statearr_36017[(16)] = inst_35927);

return statearr_36017;
})();
var statearr_36018_37808 = state_35991__$1;
(statearr_36018_37808[(2)] = null);

(statearr_36018_37808[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35993 === (3))){
var inst_35984 = (state_35991[(2)]);
var state_35991__$1 = state_35991;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35991__$1,inst_35984);
} else {
if((state_val_35993 === (12))){
var inst_35961 = (state_35991[(2)]);
var state_35991__$1 = state_35991;
var statearr_36020_37811 = state_35991__$1;
(statearr_36020_37811[(2)] = inst_35961);

(statearr_36020_37811[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35993 === (2))){
var state_35991__$1 = state_35991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35991__$1,(4),ch);
} else {
if((state_val_35993 === (23))){
var state_35991__$1 = state_35991;
var statearr_36025_37817 = state_35991__$1;
(statearr_36025_37817[(2)] = null);

(statearr_36025_37817[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35993 === (19))){
var inst_35967 = (state_35991[(11)]);
var inst_35913 = (state_35991[(8)]);
var inst_35969 = cljs.core.async.muxch_STAR_(inst_35967);
var state_35991__$1 = state_35991;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35991__$1,(22),inst_35969,inst_35913);
} else {
if((state_val_35993 === (11))){
var inst_35941 = (state_35991[(10)]);
var inst_35924 = (state_35991[(15)]);
var inst_35941__$1 = cljs.core.seq(inst_35924);
var state_35991__$1 = (function (){var statearr_36029 = state_35991;
(statearr_36029[(10)] = inst_35941__$1);

return statearr_36029;
})();
if(inst_35941__$1){
var statearr_36030_37821 = state_35991__$1;
(statearr_36030_37821[(1)] = (13));

} else {
var statearr_36031_37823 = state_35991__$1;
(statearr_36031_37823[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35993 === (9))){
var inst_35963 = (state_35991[(2)]);
var state_35991__$1 = state_35991;
var statearr_36033_37824 = state_35991__$1;
(statearr_36033_37824[(2)] = inst_35963);

(statearr_36033_37824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35993 === (5))){
var inst_35921 = cljs.core.deref(mults);
var inst_35922 = cljs.core.vals(inst_35921);
var inst_35923 = cljs.core.seq(inst_35922);
var inst_35924 = inst_35923;
var inst_35925 = null;
var inst_35926 = (0);
var inst_35927 = (0);
var state_35991__$1 = (function (){var statearr_36034 = state_35991;
(statearr_36034[(12)] = inst_35926);

(statearr_36034[(14)] = inst_35925);

(statearr_36034[(15)] = inst_35924);

(statearr_36034[(16)] = inst_35927);

return statearr_36034;
})();
var statearr_36035_37829 = state_35991__$1;
(statearr_36035_37829[(2)] = null);

(statearr_36035_37829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35993 === (14))){
var state_35991__$1 = state_35991;
var statearr_36040_37832 = state_35991__$1;
(statearr_36040_37832[(2)] = null);

(statearr_36040_37832[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35993 === (16))){
var inst_35941 = (state_35991[(10)]);
var inst_35945 = cljs.core.chunk_first(inst_35941);
var inst_35946 = cljs.core.chunk_rest(inst_35941);
var inst_35947 = cljs.core.count(inst_35945);
var inst_35924 = inst_35946;
var inst_35925 = inst_35945;
var inst_35926 = inst_35947;
var inst_35927 = (0);
var state_35991__$1 = (function (){var statearr_36043 = state_35991;
(statearr_36043[(12)] = inst_35926);

(statearr_36043[(14)] = inst_35925);

(statearr_36043[(15)] = inst_35924);

(statearr_36043[(16)] = inst_35927);

return statearr_36043;
})();
var statearr_36046_37839 = state_35991__$1;
(statearr_36046_37839[(2)] = null);

(statearr_36046_37839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35993 === (10))){
var inst_35926 = (state_35991[(12)]);
var inst_35925 = (state_35991[(14)]);
var inst_35924 = (state_35991[(15)]);
var inst_35927 = (state_35991[(16)]);
var inst_35935 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35925,inst_35927);
var inst_35936 = cljs.core.async.muxch_STAR_(inst_35935);
var inst_35937 = cljs.core.async.close_BANG_(inst_35936);
var inst_35938 = (inst_35927 + (1));
var tmp36036 = inst_35926;
var tmp36037 = inst_35925;
var tmp36038 = inst_35924;
var inst_35924__$1 = tmp36038;
var inst_35925__$1 = tmp36037;
var inst_35926__$1 = tmp36036;
var inst_35927__$1 = inst_35938;
var state_35991__$1 = (function (){var statearr_36050 = state_35991;
(statearr_36050[(12)] = inst_35926__$1);

(statearr_36050[(14)] = inst_35925__$1);

(statearr_36050[(17)] = inst_35937);

(statearr_36050[(15)] = inst_35924__$1);

(statearr_36050[(16)] = inst_35927__$1);

return statearr_36050;
})();
var statearr_36051_37844 = state_35991__$1;
(statearr_36051_37844[(2)] = null);

(statearr_36051_37844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35993 === (18))){
var inst_35956 = (state_35991[(2)]);
var state_35991__$1 = state_35991;
var statearr_36052_37850 = state_35991__$1;
(statearr_36052_37850[(2)] = inst_35956);

(statearr_36052_37850[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35993 === (8))){
var inst_35926 = (state_35991[(12)]);
var inst_35927 = (state_35991[(16)]);
var inst_35931 = (inst_35927 < inst_35926);
var inst_35932 = inst_35931;
var state_35991__$1 = state_35991;
if(cljs.core.truth_(inst_35932)){
var statearr_36053_37853 = state_35991__$1;
(statearr_36053_37853[(1)] = (10));

} else {
var statearr_36054_37854 = state_35991__$1;
(statearr_36054_37854[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34200__auto__ = null;
var cljs$core$async$state_machine__34200__auto____0 = (function (){
var statearr_36058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36058[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36058[(1)] = (1));

return statearr_36058;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_35991){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_35991);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36061){if((e36061 instanceof Object)){
var ex__34203__auto__ = e36061;
var statearr_36062_37862 = state_35991;
(statearr_36062_37862[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36061;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37864 = state_35991;
state_35991 = G__37864;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_35991){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_35991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36063 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36063[(6)] = c__34267__auto___37755);

return statearr_36063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__36065 = arguments.length;
switch (G__36065) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__36072 = arguments.length;
switch (G__36072) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__36081 = arguments.length;
switch (G__36081) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__34267__auto___37892 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36127){
var state_val_36128 = (state_36127[(1)]);
if((state_val_36128 === (7))){
var state_36127__$1 = state_36127;
var statearr_36136_37895 = state_36127__$1;
(statearr_36136_37895[(2)] = null);

(statearr_36136_37895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (1))){
var state_36127__$1 = state_36127;
var statearr_36137_37897 = state_36127__$1;
(statearr_36137_37897[(2)] = null);

(statearr_36137_37897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (4))){
var inst_36086 = (state_36127[(7)]);
var inst_36090 = (inst_36086 < cnt);
var state_36127__$1 = state_36127;
if(cljs.core.truth_(inst_36090)){
var statearr_36138_37902 = state_36127__$1;
(statearr_36138_37902[(1)] = (6));

} else {
var statearr_36140_37903 = state_36127__$1;
(statearr_36140_37903[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (15))){
var inst_36120 = (state_36127[(2)]);
var state_36127__$1 = state_36127;
var statearr_36145_37905 = state_36127__$1;
(statearr_36145_37905[(2)] = inst_36120);

(statearr_36145_37905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (13))){
var inst_36113 = cljs.core.async.close_BANG_(out);
var state_36127__$1 = state_36127;
var statearr_36152_37910 = state_36127__$1;
(statearr_36152_37910[(2)] = inst_36113);

(statearr_36152_37910[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (6))){
var state_36127__$1 = state_36127;
var statearr_36153_37911 = state_36127__$1;
(statearr_36153_37911[(2)] = null);

(statearr_36153_37911[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (3))){
var inst_36122 = (state_36127[(2)]);
var state_36127__$1 = state_36127;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36127__$1,inst_36122);
} else {
if((state_val_36128 === (12))){
var inst_36110 = (state_36127[(8)]);
var inst_36110__$1 = (state_36127[(2)]);
var inst_36111 = cljs.core.some(cljs.core.nil_QMARK_,inst_36110__$1);
var state_36127__$1 = (function (){var statearr_36161 = state_36127;
(statearr_36161[(8)] = inst_36110__$1);

return statearr_36161;
})();
if(cljs.core.truth_(inst_36111)){
var statearr_36162_37917 = state_36127__$1;
(statearr_36162_37917[(1)] = (13));

} else {
var statearr_36163_37918 = state_36127__$1;
(statearr_36163_37918[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (2))){
var inst_36085 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36086 = (0);
var state_36127__$1 = (function (){var statearr_36164 = state_36127;
(statearr_36164[(7)] = inst_36086);

(statearr_36164[(9)] = inst_36085);

return statearr_36164;
})();
var statearr_36165_37924 = state_36127__$1;
(statearr_36165_37924[(2)] = null);

(statearr_36165_37924[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (11))){
var inst_36086 = (state_36127[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36127,(10),Object,null,(9));
var inst_36097 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36086) : chs__$1.call(null,inst_36086));
var inst_36098 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36086) : done.call(null,inst_36086));
var inst_36099 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36097,inst_36098);
var state_36127__$1 = state_36127;
var statearr_36168_37934 = state_36127__$1;
(statearr_36168_37934[(2)] = inst_36099);


cljs.core.async.impl.ioc_helpers.process_exception(state_36127__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (9))){
var inst_36086 = (state_36127[(7)]);
var inst_36101 = (state_36127[(2)]);
var inst_36102 = (inst_36086 + (1));
var inst_36086__$1 = inst_36102;
var state_36127__$1 = (function (){var statearr_36169 = state_36127;
(statearr_36169[(10)] = inst_36101);

(statearr_36169[(7)] = inst_36086__$1);

return statearr_36169;
})();
var statearr_36170_37939 = state_36127__$1;
(statearr_36170_37939[(2)] = null);

(statearr_36170_37939[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (5))){
var inst_36108 = (state_36127[(2)]);
var state_36127__$1 = (function (){var statearr_36172 = state_36127;
(statearr_36172[(11)] = inst_36108);

return statearr_36172;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36127__$1,(12),dchan);
} else {
if((state_val_36128 === (14))){
var inst_36110 = (state_36127[(8)]);
var inst_36115 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36110);
var state_36127__$1 = state_36127;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36127__$1,(16),out,inst_36115);
} else {
if((state_val_36128 === (16))){
var inst_36117 = (state_36127[(2)]);
var state_36127__$1 = (function (){var statearr_36176 = state_36127;
(statearr_36176[(12)] = inst_36117);

return statearr_36176;
})();
var statearr_36177_37945 = state_36127__$1;
(statearr_36177_37945[(2)] = null);

(statearr_36177_37945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (10))){
var inst_36092 = (state_36127[(2)]);
var inst_36093 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36127__$1 = (function (){var statearr_36178 = state_36127;
(statearr_36178[(13)] = inst_36092);

return statearr_36178;
})();
var statearr_36179_37947 = state_36127__$1;
(statearr_36179_37947[(2)] = inst_36093);


cljs.core.async.impl.ioc_helpers.process_exception(state_36127__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (8))){
var inst_36106 = (state_36127[(2)]);
var state_36127__$1 = state_36127;
var statearr_36187_37949 = state_36127__$1;
(statearr_36187_37949[(2)] = inst_36106);

(statearr_36187_37949[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34200__auto__ = null;
var cljs$core$async$state_machine__34200__auto____0 = (function (){
var statearr_36189 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36189[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36189[(1)] = (1));

return statearr_36189;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36127){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36127);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36190){if((e36190 instanceof Object)){
var ex__34203__auto__ = e36190;
var statearr_36192_37954 = state_36127;
(statearr_36192_37954[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36190;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37962 = state_36127;
state_36127 = G__37962;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36127){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36194 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36194[(6)] = c__34267__auto___37892);

return statearr_36194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__36209 = arguments.length;
switch (G__36209) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34267__auto___37969 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36251){
var state_val_36252 = (state_36251[(1)]);
if((state_val_36252 === (7))){
var inst_36229 = (state_36251[(7)]);
var inst_36228 = (state_36251[(8)]);
var inst_36228__$1 = (state_36251[(2)]);
var inst_36229__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36228__$1,(0),null);
var inst_36230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36228__$1,(1),null);
var inst_36232 = (inst_36229__$1 == null);
var state_36251__$1 = (function (){var statearr_36256 = state_36251;
(statearr_36256[(7)] = inst_36229__$1);

(statearr_36256[(8)] = inst_36228__$1);

(statearr_36256[(9)] = inst_36230);

return statearr_36256;
})();
if(cljs.core.truth_(inst_36232)){
var statearr_36258_37973 = state_36251__$1;
(statearr_36258_37973[(1)] = (8));

} else {
var statearr_36259_37974 = state_36251__$1;
(statearr_36259_37974[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36252 === (1))){
var inst_36218 = cljs.core.vec(chs);
var inst_36219 = inst_36218;
var state_36251__$1 = (function (){var statearr_36260 = state_36251;
(statearr_36260[(10)] = inst_36219);

return statearr_36260;
})();
var statearr_36261_37975 = state_36251__$1;
(statearr_36261_37975[(2)] = null);

(statearr_36261_37975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36252 === (4))){
var inst_36219 = (state_36251[(10)]);
var state_36251__$1 = state_36251;
return cljs.core.async.ioc_alts_BANG_(state_36251__$1,(7),inst_36219);
} else {
if((state_val_36252 === (6))){
var inst_36247 = (state_36251[(2)]);
var state_36251__$1 = state_36251;
var statearr_36266_37980 = state_36251__$1;
(statearr_36266_37980[(2)] = inst_36247);

(statearr_36266_37980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36252 === (3))){
var inst_36249 = (state_36251[(2)]);
var state_36251__$1 = state_36251;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36251__$1,inst_36249);
} else {
if((state_val_36252 === (2))){
var inst_36219 = (state_36251[(10)]);
var inst_36221 = cljs.core.count(inst_36219);
var inst_36222 = (inst_36221 > (0));
var state_36251__$1 = state_36251;
if(cljs.core.truth_(inst_36222)){
var statearr_36274_37981 = state_36251__$1;
(statearr_36274_37981[(1)] = (4));

} else {
var statearr_36276_37982 = state_36251__$1;
(statearr_36276_37982[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36252 === (11))){
var inst_36219 = (state_36251[(10)]);
var inst_36240 = (state_36251[(2)]);
var tmp36267 = inst_36219;
var inst_36219__$1 = tmp36267;
var state_36251__$1 = (function (){var statearr_36277 = state_36251;
(statearr_36277[(11)] = inst_36240);

(statearr_36277[(10)] = inst_36219__$1);

return statearr_36277;
})();
var statearr_36278_37983 = state_36251__$1;
(statearr_36278_37983[(2)] = null);

(statearr_36278_37983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36252 === (9))){
var inst_36229 = (state_36251[(7)]);
var state_36251__$1 = state_36251;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36251__$1,(11),out,inst_36229);
} else {
if((state_val_36252 === (5))){
var inst_36245 = cljs.core.async.close_BANG_(out);
var state_36251__$1 = state_36251;
var statearr_36283_37985 = state_36251__$1;
(statearr_36283_37985[(2)] = inst_36245);

(statearr_36283_37985[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36252 === (10))){
var inst_36243 = (state_36251[(2)]);
var state_36251__$1 = state_36251;
var statearr_36285_37986 = state_36251__$1;
(statearr_36285_37986[(2)] = inst_36243);

(statearr_36285_37986[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36252 === (8))){
var inst_36229 = (state_36251[(7)]);
var inst_36228 = (state_36251[(8)]);
var inst_36230 = (state_36251[(9)]);
var inst_36219 = (state_36251[(10)]);
var inst_36234 = (function (){var cs = inst_36219;
var vec__36224 = inst_36228;
var v = inst_36229;
var c = inst_36230;
return (function (p1__36197_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36197_SHARP_);
});
})();
var inst_36236 = cljs.core.filterv(inst_36234,inst_36219);
var inst_36219__$1 = inst_36236;
var state_36251__$1 = (function (){var statearr_36287 = state_36251;
(statearr_36287[(10)] = inst_36219__$1);

return statearr_36287;
})();
var statearr_36288_37991 = state_36251__$1;
(statearr_36288_37991[(2)] = null);

(statearr_36288_37991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34200__auto__ = null;
var cljs$core$async$state_machine__34200__auto____0 = (function (){
var statearr_36290 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36290[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36290[(1)] = (1));

return statearr_36290;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36251){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36251);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36291){if((e36291 instanceof Object)){
var ex__34203__auto__ = e36291;
var statearr_36292_37992 = state_36251;
(statearr_36292_37992[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36291;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37993 = state_36251;
state_36251 = G__37993;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36251){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36294 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36294[(6)] = c__34267__auto___37969);

return statearr_36294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__36301 = arguments.length;
switch (G__36301) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34267__auto___37999 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36334){
var state_val_36335 = (state_36334[(1)]);
if((state_val_36335 === (7))){
var inst_36310 = (state_36334[(7)]);
var inst_36310__$1 = (state_36334[(2)]);
var inst_36311 = (inst_36310__$1 == null);
var inst_36312 = cljs.core.not(inst_36311);
var state_36334__$1 = (function (){var statearr_36338 = state_36334;
(statearr_36338[(7)] = inst_36310__$1);

return statearr_36338;
})();
if(inst_36312){
var statearr_36339_38003 = state_36334__$1;
(statearr_36339_38003[(1)] = (8));

} else {
var statearr_36340_38004 = state_36334__$1;
(statearr_36340_38004[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36335 === (1))){
var inst_36304 = (0);
var state_36334__$1 = (function (){var statearr_36342 = state_36334;
(statearr_36342[(8)] = inst_36304);

return statearr_36342;
})();
var statearr_36345_38005 = state_36334__$1;
(statearr_36345_38005[(2)] = null);

(statearr_36345_38005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36335 === (4))){
var state_36334__$1 = state_36334;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36334__$1,(7),ch);
} else {
if((state_val_36335 === (6))){
var inst_36324 = (state_36334[(2)]);
var state_36334__$1 = state_36334;
var statearr_36346_38006 = state_36334__$1;
(statearr_36346_38006[(2)] = inst_36324);

(statearr_36346_38006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36335 === (3))){
var inst_36326 = (state_36334[(2)]);
var inst_36327 = cljs.core.async.close_BANG_(out);
var state_36334__$1 = (function (){var statearr_36348 = state_36334;
(statearr_36348[(9)] = inst_36326);

return statearr_36348;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36334__$1,inst_36327);
} else {
if((state_val_36335 === (2))){
var inst_36304 = (state_36334[(8)]);
var inst_36306 = (inst_36304 < n);
var state_36334__$1 = state_36334;
if(cljs.core.truth_(inst_36306)){
var statearr_36351_38010 = state_36334__$1;
(statearr_36351_38010[(1)] = (4));

} else {
var statearr_36352_38011 = state_36334__$1;
(statearr_36352_38011[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36335 === (11))){
var inst_36304 = (state_36334[(8)]);
var inst_36315 = (state_36334[(2)]);
var inst_36317 = (inst_36304 + (1));
var inst_36304__$1 = inst_36317;
var state_36334__$1 = (function (){var statearr_36353 = state_36334;
(statearr_36353[(8)] = inst_36304__$1);

(statearr_36353[(10)] = inst_36315);

return statearr_36353;
})();
var statearr_36354_38016 = state_36334__$1;
(statearr_36354_38016[(2)] = null);

(statearr_36354_38016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36335 === (9))){
var state_36334__$1 = state_36334;
var statearr_36357_38017 = state_36334__$1;
(statearr_36357_38017[(2)] = null);

(statearr_36357_38017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36335 === (5))){
var state_36334__$1 = state_36334;
var statearr_36359_38018 = state_36334__$1;
(statearr_36359_38018[(2)] = null);

(statearr_36359_38018[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36335 === (10))){
var inst_36321 = (state_36334[(2)]);
var state_36334__$1 = state_36334;
var statearr_36362_38020 = state_36334__$1;
(statearr_36362_38020[(2)] = inst_36321);

(statearr_36362_38020[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36335 === (8))){
var inst_36310 = (state_36334[(7)]);
var state_36334__$1 = state_36334;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36334__$1,(11),out,inst_36310);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34200__auto__ = null;
var cljs$core$async$state_machine__34200__auto____0 = (function (){
var statearr_36370 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36370[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36370[(1)] = (1));

return statearr_36370;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36334){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36334);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36371){if((e36371 instanceof Object)){
var ex__34203__auto__ = e36371;
var statearr_36372_38025 = state_36334;
(statearr_36372_38025[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36371;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38026 = state_36334;
state_36334 = G__38026;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36334){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36374 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36374[(6)] = c__34267__auto___37999);

return statearr_36374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36380 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36380 = (function (f,ch,meta36381){
this.f = f;
this.ch = ch;
this.meta36381 = meta36381;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36382,meta36381__$1){
var self__ = this;
var _36382__$1 = this;
return (new cljs.core.async.t_cljs$core$async36380(self__.f,self__.ch,meta36381__$1));
}));

(cljs.core.async.t_cljs$core$async36380.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36382){
var self__ = this;
var _36382__$1 = this;
return self__.meta36381;
}));

(cljs.core.async.t_cljs$core$async36380.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36380.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36380.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36380.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36380.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36398 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36398 = (function (f,ch,meta36381,_,fn1,meta36399){
this.f = f;
this.ch = ch;
this.meta36381 = meta36381;
this._ = _;
this.fn1 = fn1;
this.meta36399 = meta36399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36400,meta36399__$1){
var self__ = this;
var _36400__$1 = this;
return (new cljs.core.async.t_cljs$core$async36398(self__.f,self__.ch,self__.meta36381,self__._,self__.fn1,meta36399__$1));
}));

(cljs.core.async.t_cljs$core$async36398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36400){
var self__ = this;
var _36400__$1 = this;
return self__.meta36399;
}));

(cljs.core.async.t_cljs$core$async36398.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36398.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36398.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36398.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36379_SHARP_){
var G__36405 = (((p1__36379_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36379_SHARP_) : self__.f.call(null,p1__36379_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36405) : f1.call(null,G__36405));
});
}));

(cljs.core.async.t_cljs$core$async36398.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36381","meta36381",291682591,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36380","cljs.core.async/t_cljs$core$async36380",234846039,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36399","meta36399",-1020333910,null)], null);
}));

(cljs.core.async.t_cljs$core$async36398.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36398.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36398");

(cljs.core.async.t_cljs$core$async36398.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36398");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36398.
 */
cljs.core.async.__GT_t_cljs$core$async36398 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36398(f__$1,ch__$1,meta36381__$1,___$2,fn1__$1,meta36399){
return (new cljs.core.async.t_cljs$core$async36398(f__$1,ch__$1,meta36381__$1,___$2,fn1__$1,meta36399));
});

}

return (new cljs.core.async.t_cljs$core$async36398(self__.f,self__.ch,self__.meta36381,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36411 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36411) : self__.f.call(null,G__36411));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36380.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36380.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36380.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36381","meta36381",291682591,null)], null);
}));

(cljs.core.async.t_cljs$core$async36380.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36380.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36380");

(cljs.core.async.t_cljs$core$async36380.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36380");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36380.
 */
cljs.core.async.__GT_t_cljs$core$async36380 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36380(f__$1,ch__$1,meta36381){
return (new cljs.core.async.t_cljs$core$async36380(f__$1,ch__$1,meta36381));
});

}

return (new cljs.core.async.t_cljs$core$async36380(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36416 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36416 = (function (f,ch,meta36417){
this.f = f;
this.ch = ch;
this.meta36417 = meta36417;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36418,meta36417__$1){
var self__ = this;
var _36418__$1 = this;
return (new cljs.core.async.t_cljs$core$async36416(self__.f,self__.ch,meta36417__$1));
}));

(cljs.core.async.t_cljs$core$async36416.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36418){
var self__ = this;
var _36418__$1 = this;
return self__.meta36417;
}));

(cljs.core.async.t_cljs$core$async36416.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36416.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36416.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36416.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36416.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36416.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36416.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36417","meta36417",-2081266497,null)], null);
}));

(cljs.core.async.t_cljs$core$async36416.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36416.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36416");

(cljs.core.async.t_cljs$core$async36416.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36416");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36416.
 */
cljs.core.async.__GT_t_cljs$core$async36416 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36416(f__$1,ch__$1,meta36417){
return (new cljs.core.async.t_cljs$core$async36416(f__$1,ch__$1,meta36417));
});

}

return (new cljs.core.async.t_cljs$core$async36416(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36427 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36427 = (function (p,ch,meta36428){
this.p = p;
this.ch = ch;
this.meta36428 = meta36428;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36429,meta36428__$1){
var self__ = this;
var _36429__$1 = this;
return (new cljs.core.async.t_cljs$core$async36427(self__.p,self__.ch,meta36428__$1));
}));

(cljs.core.async.t_cljs$core$async36427.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36429){
var self__ = this;
var _36429__$1 = this;
return self__.meta36428;
}));

(cljs.core.async.t_cljs$core$async36427.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36427.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36427.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36427.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36427.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36427.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36427.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36427.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36428","meta36428",292341908,null)], null);
}));

(cljs.core.async.t_cljs$core$async36427.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36427.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36427");

(cljs.core.async.t_cljs$core$async36427.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36427");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36427.
 */
cljs.core.async.__GT_t_cljs$core$async36427 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36427(p__$1,ch__$1,meta36428){
return (new cljs.core.async.t_cljs$core$async36427(p__$1,ch__$1,meta36428));
});

}

return (new cljs.core.async.t_cljs$core$async36427(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__36438 = arguments.length;
switch (G__36438) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34267__auto___38054 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36464){
var state_val_36465 = (state_36464[(1)]);
if((state_val_36465 === (7))){
var inst_36460 = (state_36464[(2)]);
var state_36464__$1 = state_36464;
var statearr_36468_38055 = state_36464__$1;
(statearr_36468_38055[(2)] = inst_36460);

(statearr_36468_38055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36465 === (1))){
var state_36464__$1 = state_36464;
var statearr_36469_38058 = state_36464__$1;
(statearr_36469_38058[(2)] = null);

(statearr_36469_38058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36465 === (4))){
var inst_36443 = (state_36464[(7)]);
var inst_36443__$1 = (state_36464[(2)]);
var inst_36444 = (inst_36443__$1 == null);
var state_36464__$1 = (function (){var statearr_36471 = state_36464;
(statearr_36471[(7)] = inst_36443__$1);

return statearr_36471;
})();
if(cljs.core.truth_(inst_36444)){
var statearr_36472_38060 = state_36464__$1;
(statearr_36472_38060[(1)] = (5));

} else {
var statearr_36473_38061 = state_36464__$1;
(statearr_36473_38061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36465 === (6))){
var inst_36443 = (state_36464[(7)]);
var inst_36448 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36443) : p.call(null,inst_36443));
var state_36464__$1 = state_36464;
if(cljs.core.truth_(inst_36448)){
var statearr_36474_38063 = state_36464__$1;
(statearr_36474_38063[(1)] = (8));

} else {
var statearr_36476_38064 = state_36464__$1;
(statearr_36476_38064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36465 === (3))){
var inst_36462 = (state_36464[(2)]);
var state_36464__$1 = state_36464;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36464__$1,inst_36462);
} else {
if((state_val_36465 === (2))){
var state_36464__$1 = state_36464;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36464__$1,(4),ch);
} else {
if((state_val_36465 === (11))){
var inst_36453 = (state_36464[(2)]);
var state_36464__$1 = state_36464;
var statearr_36478_38067 = state_36464__$1;
(statearr_36478_38067[(2)] = inst_36453);

(statearr_36478_38067[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36465 === (9))){
var state_36464__$1 = state_36464;
var statearr_36479_38068 = state_36464__$1;
(statearr_36479_38068[(2)] = null);

(statearr_36479_38068[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36465 === (5))){
var inst_36446 = cljs.core.async.close_BANG_(out);
var state_36464__$1 = state_36464;
var statearr_36483_38070 = state_36464__$1;
(statearr_36483_38070[(2)] = inst_36446);

(statearr_36483_38070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36465 === (10))){
var inst_36456 = (state_36464[(2)]);
var state_36464__$1 = (function (){var statearr_36485 = state_36464;
(statearr_36485[(8)] = inst_36456);

return statearr_36485;
})();
var statearr_36486_38073 = state_36464__$1;
(statearr_36486_38073[(2)] = null);

(statearr_36486_38073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36465 === (8))){
var inst_36443 = (state_36464[(7)]);
var state_36464__$1 = state_36464;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36464__$1,(11),out,inst_36443);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34200__auto__ = null;
var cljs$core$async$state_machine__34200__auto____0 = (function (){
var statearr_36488 = [null,null,null,null,null,null,null,null,null];
(statearr_36488[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36488[(1)] = (1));

return statearr_36488;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36464){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36464);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36489){if((e36489 instanceof Object)){
var ex__34203__auto__ = e36489;
var statearr_36490_38076 = state_36464;
(statearr_36490_38076[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36489;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38078 = state_36464;
state_36464 = G__38078;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36464){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36492 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36492[(6)] = c__34267__auto___38054);

return statearr_36492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36495 = arguments.length;
switch (G__36495) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__34267__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36563){
var state_val_36564 = (state_36563[(1)]);
if((state_val_36564 === (7))){
var inst_36558 = (state_36563[(2)]);
var state_36563__$1 = state_36563;
var statearr_36567_38084 = state_36563__$1;
(statearr_36567_38084[(2)] = inst_36558);

(statearr_36567_38084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36564 === (20))){
var inst_36527 = (state_36563[(7)]);
var inst_36539 = (state_36563[(2)]);
var inst_36540 = cljs.core.next(inst_36527);
var inst_36513 = inst_36540;
var inst_36514 = null;
var inst_36515 = (0);
var inst_36516 = (0);
var state_36563__$1 = (function (){var statearr_36569 = state_36563;
(statearr_36569[(8)] = inst_36516);

(statearr_36569[(9)] = inst_36539);

(statearr_36569[(10)] = inst_36515);

(statearr_36569[(11)] = inst_36514);

(statearr_36569[(12)] = inst_36513);

return statearr_36569;
})();
var statearr_36570_38087 = state_36563__$1;
(statearr_36570_38087[(2)] = null);

(statearr_36570_38087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36564 === (1))){
var state_36563__$1 = state_36563;
var statearr_36572_38088 = state_36563__$1;
(statearr_36572_38088[(2)] = null);

(statearr_36572_38088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36564 === (4))){
var inst_36502 = (state_36563[(13)]);
var inst_36502__$1 = (state_36563[(2)]);
var inst_36503 = (inst_36502__$1 == null);
var state_36563__$1 = (function (){var statearr_36573 = state_36563;
(statearr_36573[(13)] = inst_36502__$1);

return statearr_36573;
})();
if(cljs.core.truth_(inst_36503)){
var statearr_36574_38092 = state_36563__$1;
(statearr_36574_38092[(1)] = (5));

} else {
var statearr_36575_38093 = state_36563__$1;
(statearr_36575_38093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36564 === (15))){
var state_36563__$1 = state_36563;
var statearr_36580_38094 = state_36563__$1;
(statearr_36580_38094[(2)] = null);

(statearr_36580_38094[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36564 === (21))){
var state_36563__$1 = state_36563;
var statearr_36581_38095 = state_36563__$1;
(statearr_36581_38095[(2)] = null);

(statearr_36581_38095[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36564 === (13))){
var inst_36516 = (state_36563[(8)]);
var inst_36515 = (state_36563[(10)]);
var inst_36514 = (state_36563[(11)]);
var inst_36513 = (state_36563[(12)]);
var inst_36523 = (state_36563[(2)]);
var inst_36524 = (inst_36516 + (1));
var tmp36576 = inst_36515;
var tmp36577 = inst_36514;
var tmp36578 = inst_36513;
var inst_36513__$1 = tmp36578;
var inst_36514__$1 = tmp36577;
var inst_36515__$1 = tmp36576;
var inst_36516__$1 = inst_36524;
var state_36563__$1 = (function (){var statearr_36583 = state_36563;
(statearr_36583[(8)] = inst_36516__$1);

(statearr_36583[(10)] = inst_36515__$1);

(statearr_36583[(11)] = inst_36514__$1);

(statearr_36583[(14)] = inst_36523);

(statearr_36583[(12)] = inst_36513__$1);

return statearr_36583;
})();
var statearr_36584_38099 = state_36563__$1;
(statearr_36584_38099[(2)] = null);

(statearr_36584_38099[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36564 === (22))){
var state_36563__$1 = state_36563;
var statearr_36585_38101 = state_36563__$1;
(statearr_36585_38101[(2)] = null);

(statearr_36585_38101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36564 === (6))){
var inst_36502 = (state_36563[(13)]);
var inst_36511 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36502) : f.call(null,inst_36502));
var inst_36512 = cljs.core.seq(inst_36511);
var inst_36513 = inst_36512;
var inst_36514 = null;
var inst_36515 = (0);
var inst_36516 = (0);
var state_36563__$1 = (function (){var statearr_36587 = state_36563;
(statearr_36587[(8)] = inst_36516);

(statearr_36587[(10)] = inst_36515);

(statearr_36587[(11)] = inst_36514);

(statearr_36587[(12)] = inst_36513);

return statearr_36587;
})();
var statearr_36588_38104 = state_36563__$1;
(statearr_36588_38104[(2)] = null);

(statearr_36588_38104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36564 === (17))){
var inst_36527 = (state_36563[(7)]);
var inst_36532 = cljs.core.chunk_first(inst_36527);
var inst_36533 = cljs.core.chunk_rest(inst_36527);
var inst_36534 = cljs.core.count(inst_36532);
var inst_36513 = inst_36533;
var inst_36514 = inst_36532;
var inst_36515 = inst_36534;
var inst_36516 = (0);
var state_36563__$1 = (function (){var statearr_36590 = state_36563;
(statearr_36590[(8)] = inst_36516);

(statearr_36590[(10)] = inst_36515);

(statearr_36590[(11)] = inst_36514);

(statearr_36590[(12)] = inst_36513);

return statearr_36590;
})();
var statearr_36591_38108 = state_36563__$1;
(statearr_36591_38108[(2)] = null);

(statearr_36591_38108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36564 === (3))){
var inst_36560 = (state_36563[(2)]);
var state_36563__$1 = state_36563;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36563__$1,inst_36560);
} else {
if((state_val_36564 === (12))){
var inst_36548 = (state_36563[(2)]);
var state_36563__$1 = state_36563;
var statearr_36593_38109 = state_36563__$1;
(statearr_36593_38109[(2)] = inst_36548);

(statearr_36593_38109[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36564 === (2))){
var state_36563__$1 = state_36563;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36563__$1,(4),in$);
} else {
if((state_val_36564 === (23))){
var inst_36556 = (state_36563[(2)]);
var state_36563__$1 = state_36563;
var statearr_36594_38111 = state_36563__$1;
(statearr_36594_38111[(2)] = inst_36556);

(statearr_36594_38111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36564 === (19))){
var inst_36543 = (state_36563[(2)]);
var state_36563__$1 = state_36563;
var statearr_36596_38114 = state_36563__$1;
(statearr_36596_38114[(2)] = inst_36543);

(statearr_36596_38114[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36564 === (11))){
var inst_36527 = (state_36563[(7)]);
var inst_36513 = (state_36563[(12)]);
var inst_36527__$1 = cljs.core.seq(inst_36513);
var state_36563__$1 = (function (){var statearr_36597 = state_36563;
(statearr_36597[(7)] = inst_36527__$1);

return statearr_36597;
})();
if(inst_36527__$1){
var statearr_36598_38115 = state_36563__$1;
(statearr_36598_38115[(1)] = (14));

} else {
var statearr_36600_38116 = state_36563__$1;
(statearr_36600_38116[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36564 === (9))){
var inst_36550 = (state_36563[(2)]);
var inst_36551 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36563__$1 = (function (){var statearr_36601 = state_36563;
(statearr_36601[(15)] = inst_36550);

return statearr_36601;
})();
if(cljs.core.truth_(inst_36551)){
var statearr_36602_38119 = state_36563__$1;
(statearr_36602_38119[(1)] = (21));

} else {
var statearr_36603_38121 = state_36563__$1;
(statearr_36603_38121[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36564 === (5))){
var inst_36505 = cljs.core.async.close_BANG_(out);
var state_36563__$1 = state_36563;
var statearr_36605_38122 = state_36563__$1;
(statearr_36605_38122[(2)] = inst_36505);

(statearr_36605_38122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36564 === (14))){
var inst_36527 = (state_36563[(7)]);
var inst_36530 = cljs.core.chunked_seq_QMARK_(inst_36527);
var state_36563__$1 = state_36563;
if(inst_36530){
var statearr_36606_38123 = state_36563__$1;
(statearr_36606_38123[(1)] = (17));

} else {
var statearr_36607_38124 = state_36563__$1;
(statearr_36607_38124[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36564 === (16))){
var inst_36546 = (state_36563[(2)]);
var state_36563__$1 = state_36563;
var statearr_36609_38127 = state_36563__$1;
(statearr_36609_38127[(2)] = inst_36546);

(statearr_36609_38127[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36564 === (10))){
var inst_36516 = (state_36563[(8)]);
var inst_36514 = (state_36563[(11)]);
var inst_36521 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36514,inst_36516);
var state_36563__$1 = state_36563;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36563__$1,(13),out,inst_36521);
} else {
if((state_val_36564 === (18))){
var inst_36527 = (state_36563[(7)]);
var inst_36537 = cljs.core.first(inst_36527);
var state_36563__$1 = state_36563;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36563__$1,(20),out,inst_36537);
} else {
if((state_val_36564 === (8))){
var inst_36516 = (state_36563[(8)]);
var inst_36515 = (state_36563[(10)]);
var inst_36518 = (inst_36516 < inst_36515);
var inst_36519 = inst_36518;
var state_36563__$1 = state_36563;
if(cljs.core.truth_(inst_36519)){
var statearr_36610_38129 = state_36563__$1;
(statearr_36610_38129[(1)] = (10));

} else {
var statearr_36611_38130 = state_36563__$1;
(statearr_36611_38130[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_36613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36613[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__);

(statearr_36613[(1)] = (1));

return statearr_36613;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____1 = (function (state_36563){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36563);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36615){if((e36615 instanceof Object)){
var ex__34203__auto__ = e36615;
var statearr_36616_38134 = state_36563;
(statearr_36616_38134[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36615;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38135 = state_36563;
state_36563 = G__38135;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__ = function(state_36563){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____1.call(this,state_36563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36617 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36617[(6)] = c__34267__auto__);

return statearr_36617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));

return c__34267__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36620 = arguments.length;
switch (G__36620) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__36624 = arguments.length;
switch (G__36624) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__36629 = arguments.length;
switch (G__36629) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34267__auto___38143 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36655){
var state_val_36656 = (state_36655[(1)]);
if((state_val_36656 === (7))){
var inst_36649 = (state_36655[(2)]);
var state_36655__$1 = state_36655;
var statearr_36658_38145 = state_36655__$1;
(statearr_36658_38145[(2)] = inst_36649);

(statearr_36658_38145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36656 === (1))){
var inst_36631 = null;
var state_36655__$1 = (function (){var statearr_36659 = state_36655;
(statearr_36659[(7)] = inst_36631);

return statearr_36659;
})();
var statearr_36660_38150 = state_36655__$1;
(statearr_36660_38150[(2)] = null);

(statearr_36660_38150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36656 === (4))){
var inst_36634 = (state_36655[(8)]);
var inst_36634__$1 = (state_36655[(2)]);
var inst_36635 = (inst_36634__$1 == null);
var inst_36636 = cljs.core.not(inst_36635);
var state_36655__$1 = (function (){var statearr_36661 = state_36655;
(statearr_36661[(8)] = inst_36634__$1);

return statearr_36661;
})();
if(inst_36636){
var statearr_36662_38154 = state_36655__$1;
(statearr_36662_38154[(1)] = (5));

} else {
var statearr_36663_38155 = state_36655__$1;
(statearr_36663_38155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36656 === (6))){
var state_36655__$1 = state_36655;
var statearr_36665_38156 = state_36655__$1;
(statearr_36665_38156[(2)] = null);

(statearr_36665_38156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36656 === (3))){
var inst_36651 = (state_36655[(2)]);
var inst_36652 = cljs.core.async.close_BANG_(out);
var state_36655__$1 = (function (){var statearr_36666 = state_36655;
(statearr_36666[(9)] = inst_36651);

return statearr_36666;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36655__$1,inst_36652);
} else {
if((state_val_36656 === (2))){
var state_36655__$1 = state_36655;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36655__$1,(4),ch);
} else {
if((state_val_36656 === (11))){
var inst_36634 = (state_36655[(8)]);
var inst_36643 = (state_36655[(2)]);
var inst_36631 = inst_36634;
var state_36655__$1 = (function (){var statearr_36668 = state_36655;
(statearr_36668[(10)] = inst_36643);

(statearr_36668[(7)] = inst_36631);

return statearr_36668;
})();
var statearr_36669_38161 = state_36655__$1;
(statearr_36669_38161[(2)] = null);

(statearr_36669_38161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36656 === (9))){
var inst_36634 = (state_36655[(8)]);
var state_36655__$1 = state_36655;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36655__$1,(11),out,inst_36634);
} else {
if((state_val_36656 === (5))){
var inst_36631 = (state_36655[(7)]);
var inst_36634 = (state_36655[(8)]);
var inst_36638 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36634,inst_36631);
var state_36655__$1 = state_36655;
if(inst_36638){
var statearr_36672_38164 = state_36655__$1;
(statearr_36672_38164[(1)] = (8));

} else {
var statearr_36673_38165 = state_36655__$1;
(statearr_36673_38165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36656 === (10))){
var inst_36646 = (state_36655[(2)]);
var state_36655__$1 = state_36655;
var statearr_36674_38166 = state_36655__$1;
(statearr_36674_38166[(2)] = inst_36646);

(statearr_36674_38166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36656 === (8))){
var inst_36631 = (state_36655[(7)]);
var tmp36671 = inst_36631;
var inst_36631__$1 = tmp36671;
var state_36655__$1 = (function (){var statearr_36676 = state_36655;
(statearr_36676[(7)] = inst_36631__$1);

return statearr_36676;
})();
var statearr_36677_38168 = state_36655__$1;
(statearr_36677_38168[(2)] = null);

(statearr_36677_38168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34200__auto__ = null;
var cljs$core$async$state_machine__34200__auto____0 = (function (){
var statearr_36679 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36679[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36679[(1)] = (1));

return statearr_36679;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36655){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36655);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36680){if((e36680 instanceof Object)){
var ex__34203__auto__ = e36680;
var statearr_36681_38171 = state_36655;
(statearr_36681_38171[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36680;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38172 = state_36655;
state_36655 = G__38172;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36655){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36683 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36683[(6)] = c__34267__auto___38143);

return statearr_36683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36686 = arguments.length;
switch (G__36686) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34267__auto___38177 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36726){
var state_val_36727 = (state_36726[(1)]);
if((state_val_36727 === (7))){
var inst_36722 = (state_36726[(2)]);
var state_36726__$1 = state_36726;
var statearr_36729_38179 = state_36726__$1;
(statearr_36729_38179[(2)] = inst_36722);

(statearr_36729_38179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (1))){
var inst_36689 = (new Array(n));
var inst_36690 = inst_36689;
var inst_36691 = (0);
var state_36726__$1 = (function (){var statearr_36730 = state_36726;
(statearr_36730[(7)] = inst_36691);

(statearr_36730[(8)] = inst_36690);

return statearr_36730;
})();
var statearr_36732_38182 = state_36726__$1;
(statearr_36732_38182[(2)] = null);

(statearr_36732_38182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (4))){
var inst_36694 = (state_36726[(9)]);
var inst_36694__$1 = (state_36726[(2)]);
var inst_36695 = (inst_36694__$1 == null);
var inst_36696 = cljs.core.not(inst_36695);
var state_36726__$1 = (function (){var statearr_36733 = state_36726;
(statearr_36733[(9)] = inst_36694__$1);

return statearr_36733;
})();
if(inst_36696){
var statearr_36734_38187 = state_36726__$1;
(statearr_36734_38187[(1)] = (5));

} else {
var statearr_36735_38188 = state_36726__$1;
(statearr_36735_38188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (15))){
var inst_36716 = (state_36726[(2)]);
var state_36726__$1 = state_36726;
var statearr_36737_38192 = state_36726__$1;
(statearr_36737_38192[(2)] = inst_36716);

(statearr_36737_38192[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (13))){
var state_36726__$1 = state_36726;
var statearr_36738_38193 = state_36726__$1;
(statearr_36738_38193[(2)] = null);

(statearr_36738_38193[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (6))){
var inst_36691 = (state_36726[(7)]);
var inst_36712 = (inst_36691 > (0));
var state_36726__$1 = state_36726;
if(cljs.core.truth_(inst_36712)){
var statearr_36740_38194 = state_36726__$1;
(statearr_36740_38194[(1)] = (12));

} else {
var statearr_36741_38195 = state_36726__$1;
(statearr_36741_38195[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (3))){
var inst_36724 = (state_36726[(2)]);
var state_36726__$1 = state_36726;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36726__$1,inst_36724);
} else {
if((state_val_36727 === (12))){
var inst_36690 = (state_36726[(8)]);
var inst_36714 = cljs.core.vec(inst_36690);
var state_36726__$1 = state_36726;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36726__$1,(15),out,inst_36714);
} else {
if((state_val_36727 === (2))){
var state_36726__$1 = state_36726;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36726__$1,(4),ch);
} else {
if((state_val_36727 === (11))){
var inst_36706 = (state_36726[(2)]);
var inst_36707 = (new Array(n));
var inst_36690 = inst_36707;
var inst_36691 = (0);
var state_36726__$1 = (function (){var statearr_36743 = state_36726;
(statearr_36743[(7)] = inst_36691);

(statearr_36743[(10)] = inst_36706);

(statearr_36743[(8)] = inst_36690);

return statearr_36743;
})();
var statearr_36744_38199 = state_36726__$1;
(statearr_36744_38199[(2)] = null);

(statearr_36744_38199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (9))){
var inst_36690 = (state_36726[(8)]);
var inst_36704 = cljs.core.vec(inst_36690);
var state_36726__$1 = state_36726;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36726__$1,(11),out,inst_36704);
} else {
if((state_val_36727 === (5))){
var inst_36691 = (state_36726[(7)]);
var inst_36694 = (state_36726[(9)]);
var inst_36699 = (state_36726[(11)]);
var inst_36690 = (state_36726[(8)]);
var inst_36698 = (inst_36690[inst_36691] = inst_36694);
var inst_36699__$1 = (inst_36691 + (1));
var inst_36700 = (inst_36699__$1 < n);
var state_36726__$1 = (function (){var statearr_36747 = state_36726;
(statearr_36747[(12)] = inst_36698);

(statearr_36747[(11)] = inst_36699__$1);

return statearr_36747;
})();
if(cljs.core.truth_(inst_36700)){
var statearr_36748_38201 = state_36726__$1;
(statearr_36748_38201[(1)] = (8));

} else {
var statearr_36749_38202 = state_36726__$1;
(statearr_36749_38202[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (14))){
var inst_36719 = (state_36726[(2)]);
var inst_36720 = cljs.core.async.close_BANG_(out);
var state_36726__$1 = (function (){var statearr_36751 = state_36726;
(statearr_36751[(13)] = inst_36719);

return statearr_36751;
})();
var statearr_36753_38206 = state_36726__$1;
(statearr_36753_38206[(2)] = inst_36720);

(statearr_36753_38206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (10))){
var inst_36710 = (state_36726[(2)]);
var state_36726__$1 = state_36726;
var statearr_36754_38207 = state_36726__$1;
(statearr_36754_38207[(2)] = inst_36710);

(statearr_36754_38207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36727 === (8))){
var inst_36699 = (state_36726[(11)]);
var inst_36690 = (state_36726[(8)]);
var tmp36750 = inst_36690;
var inst_36690__$1 = tmp36750;
var inst_36691 = inst_36699;
var state_36726__$1 = (function (){var statearr_36755 = state_36726;
(statearr_36755[(7)] = inst_36691);

(statearr_36755[(8)] = inst_36690__$1);

return statearr_36755;
})();
var statearr_36757_38208 = state_36726__$1;
(statearr_36757_38208[(2)] = null);

(statearr_36757_38208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34200__auto__ = null;
var cljs$core$async$state_machine__34200__auto____0 = (function (){
var statearr_36758 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36758[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36758[(1)] = (1));

return statearr_36758;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36726){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36726);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36760){if((e36760 instanceof Object)){
var ex__34203__auto__ = e36760;
var statearr_36761_38210 = state_36726;
(statearr_36761_38210[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38211 = state_36726;
state_36726 = G__38211;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36726){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36762 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36762[(6)] = c__34267__auto___38177);

return statearr_36762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36764 = arguments.length;
switch (G__36764) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34267__auto___38216 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36806){
var state_val_36807 = (state_36806[(1)]);
if((state_val_36807 === (7))){
var inst_36802 = (state_36806[(2)]);
var state_36806__$1 = state_36806;
var statearr_36809_38219 = state_36806__$1;
(statearr_36809_38219[(2)] = inst_36802);

(statearr_36809_38219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36807 === (1))){
var inst_36765 = [];
var inst_36766 = inst_36765;
var inst_36767 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36806__$1 = (function (){var statearr_36810 = state_36806;
(statearr_36810[(7)] = inst_36766);

(statearr_36810[(8)] = inst_36767);

return statearr_36810;
})();
var statearr_36811_38221 = state_36806__$1;
(statearr_36811_38221[(2)] = null);

(statearr_36811_38221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36807 === (4))){
var inst_36770 = (state_36806[(9)]);
var inst_36770__$1 = (state_36806[(2)]);
var inst_36771 = (inst_36770__$1 == null);
var inst_36772 = cljs.core.not(inst_36771);
var state_36806__$1 = (function (){var statearr_36813 = state_36806;
(statearr_36813[(9)] = inst_36770__$1);

return statearr_36813;
})();
if(inst_36772){
var statearr_36814_38222 = state_36806__$1;
(statearr_36814_38222[(1)] = (5));

} else {
var statearr_36815_38223 = state_36806__$1;
(statearr_36815_38223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36807 === (15))){
var inst_36796 = (state_36806[(2)]);
var state_36806__$1 = state_36806;
var statearr_36816_38224 = state_36806__$1;
(statearr_36816_38224[(2)] = inst_36796);

(statearr_36816_38224[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36807 === (13))){
var state_36806__$1 = state_36806;
var statearr_36818_38225 = state_36806__$1;
(statearr_36818_38225[(2)] = null);

(statearr_36818_38225[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36807 === (6))){
var inst_36766 = (state_36806[(7)]);
var inst_36791 = inst_36766.length;
var inst_36792 = (inst_36791 > (0));
var state_36806__$1 = state_36806;
if(cljs.core.truth_(inst_36792)){
var statearr_36820_38227 = state_36806__$1;
(statearr_36820_38227[(1)] = (12));

} else {
var statearr_36821_38228 = state_36806__$1;
(statearr_36821_38228[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36807 === (3))){
var inst_36804 = (state_36806[(2)]);
var state_36806__$1 = state_36806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36806__$1,inst_36804);
} else {
if((state_val_36807 === (12))){
var inst_36766 = (state_36806[(7)]);
var inst_36794 = cljs.core.vec(inst_36766);
var state_36806__$1 = state_36806;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36806__$1,(15),out,inst_36794);
} else {
if((state_val_36807 === (2))){
var state_36806__$1 = state_36806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36806__$1,(4),ch);
} else {
if((state_val_36807 === (11))){
var inst_36774 = (state_36806[(10)]);
var inst_36770 = (state_36806[(9)]);
var inst_36784 = (state_36806[(2)]);
var inst_36785 = [];
var inst_36786 = inst_36785.push(inst_36770);
var inst_36766 = inst_36785;
var inst_36767 = inst_36774;
var state_36806__$1 = (function (){var statearr_36824 = state_36806;
(statearr_36824[(11)] = inst_36786);

(statearr_36824[(12)] = inst_36784);

(statearr_36824[(7)] = inst_36766);

(statearr_36824[(8)] = inst_36767);

return statearr_36824;
})();
var statearr_36825_38230 = state_36806__$1;
(statearr_36825_38230[(2)] = null);

(statearr_36825_38230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36807 === (9))){
var inst_36766 = (state_36806[(7)]);
var inst_36782 = cljs.core.vec(inst_36766);
var state_36806__$1 = state_36806;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36806__$1,(11),out,inst_36782);
} else {
if((state_val_36807 === (5))){
var inst_36774 = (state_36806[(10)]);
var inst_36770 = (state_36806[(9)]);
var inst_36767 = (state_36806[(8)]);
var inst_36774__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36770) : f.call(null,inst_36770));
var inst_36775 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36774__$1,inst_36767);
var inst_36776 = cljs.core.keyword_identical_QMARK_(inst_36767,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36777 = ((inst_36775) || (inst_36776));
var state_36806__$1 = (function (){var statearr_36827 = state_36806;
(statearr_36827[(10)] = inst_36774__$1);

return statearr_36827;
})();
if(cljs.core.truth_(inst_36777)){
var statearr_36829_38232 = state_36806__$1;
(statearr_36829_38232[(1)] = (8));

} else {
var statearr_36830_38233 = state_36806__$1;
(statearr_36830_38233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36807 === (14))){
var inst_36799 = (state_36806[(2)]);
var inst_36800 = cljs.core.async.close_BANG_(out);
var state_36806__$1 = (function (){var statearr_36832 = state_36806;
(statearr_36832[(13)] = inst_36799);

return statearr_36832;
})();
var statearr_36833_38235 = state_36806__$1;
(statearr_36833_38235[(2)] = inst_36800);

(statearr_36833_38235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36807 === (10))){
var inst_36789 = (state_36806[(2)]);
var state_36806__$1 = state_36806;
var statearr_36835_38236 = state_36806__$1;
(statearr_36835_38236[(2)] = inst_36789);

(statearr_36835_38236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36807 === (8))){
var inst_36774 = (state_36806[(10)]);
var inst_36770 = (state_36806[(9)]);
var inst_36766 = (state_36806[(7)]);
var inst_36779 = inst_36766.push(inst_36770);
var tmp36831 = inst_36766;
var inst_36766__$1 = tmp36831;
var inst_36767 = inst_36774;
var state_36806__$1 = (function (){var statearr_36836 = state_36806;
(statearr_36836[(14)] = inst_36779);

(statearr_36836[(7)] = inst_36766__$1);

(statearr_36836[(8)] = inst_36767);

return statearr_36836;
})();
var statearr_36838_38237 = state_36806__$1;
(statearr_36838_38237[(2)] = null);

(statearr_36838_38237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34200__auto__ = null;
var cljs$core$async$state_machine__34200__auto____0 = (function (){
var statearr_36839 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36839[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36839[(1)] = (1));

return statearr_36839;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36806){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36806);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36841){if((e36841 instanceof Object)){
var ex__34203__auto__ = e36841;
var statearr_36842_38240 = state_36806;
(statearr_36842_38240[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36841;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38241 = state_36806;
state_36806 = G__38241;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36844 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36844[(6)] = c__34267__auto___38216);

return statearr_36844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
