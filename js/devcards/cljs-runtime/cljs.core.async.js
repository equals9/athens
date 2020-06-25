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
var G__34331 = arguments.length;
switch (G__34331) {
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
var G__34333 = arguments.length;
switch (G__34333) {
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
var val_36780 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36780) : fn1.call(null,val_36780));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36780) : fn1.call(null,val_36780));
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
var n__4666__auto___36788 = n;
var x_36789 = (0);
while(true){
if((x_36789 < n__4666__auto___36788)){
(a[x_36789] = x_36789);

var G__36790 = (x_36789 + (1));
x_36789 = G__36790;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34340 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34340 = (function (flag,meta34341){
this.flag = flag;
this.meta34341 = meta34341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34342,meta34341__$1){
var self__ = this;
var _34342__$1 = this;
return (new cljs.core.async.t_cljs$core$async34340(self__.flag,meta34341__$1));
}));

(cljs.core.async.t_cljs$core$async34340.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34342){
var self__ = this;
var _34342__$1 = this;
return self__.meta34341;
}));

(cljs.core.async.t_cljs$core$async34340.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34340.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34340.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34340.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async34340.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34341","meta34341",1249706960,null)], null);
}));

(cljs.core.async.t_cljs$core$async34340.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34340.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34340");

(cljs.core.async.t_cljs$core$async34340.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34340");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34340.
 */
cljs.core.async.__GT_t_cljs$core$async34340 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34340(flag__$1,meta34341){
return (new cljs.core.async.t_cljs$core$async34340(flag__$1,meta34341));
});

}

return (new cljs.core.async.t_cljs$core$async34340(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34343 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34343 = (function (flag,cb,meta34344){
this.flag = flag;
this.cb = cb;
this.meta34344 = meta34344;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34345,meta34344__$1){
var self__ = this;
var _34345__$1 = this;
return (new cljs.core.async.t_cljs$core$async34343(self__.flag,self__.cb,meta34344__$1));
}));

(cljs.core.async.t_cljs$core$async34343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34345){
var self__ = this;
var _34345__$1 = this;
return self__.meta34344;
}));

(cljs.core.async.t_cljs$core$async34343.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34343.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34343.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34343.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34343.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34344","meta34344",-506745894,null)], null);
}));

(cljs.core.async.t_cljs$core$async34343.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34343.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34343");

(cljs.core.async.t_cljs$core$async34343.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34343");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34343.
 */
cljs.core.async.__GT_t_cljs$core$async34343 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34343(flag__$1,cb__$1,meta34344){
return (new cljs.core.async.t_cljs$core$async34343(flag__$1,cb__$1,meta34344));
});

}

return (new cljs.core.async.t_cljs$core$async34343(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34346_SHARP_){
var G__34348 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34346_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34348) : fret.call(null,G__34348));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34347_SHARP_){
var G__34349 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34347_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34349) : fret.call(null,G__34349));
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
var G__36801 = (i + (1));
i = G__36801;
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
var len__4789__auto___36804 = arguments.length;
var i__4790__auto___36805 = (0);
while(true){
if((i__4790__auto___36805 < len__4789__auto___36804)){
args__4795__auto__.push((arguments[i__4790__auto___36805]));

var G__36806 = (i__4790__auto___36805 + (1));
i__4790__auto___36805 = G__36806;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34352){
var map__34353 = p__34352;
var map__34353__$1 = (((((!((map__34353 == null))))?(((((map__34353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34353):map__34353);
var opts = map__34353__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34350){
var G__34351 = cljs.core.first(seq34350);
var seq34350__$1 = cljs.core.next(seq34350);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34351,seq34350__$1);
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
var G__34357 = arguments.length;
switch (G__34357) {
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
var c__34265__auto___36813 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34266__auto__ = (function (){var switch__34199__auto__ = (function (state_34389){
var state_val_34390 = (state_34389[(1)]);
if((state_val_34390 === (7))){
var inst_34385 = (state_34389[(2)]);
var state_34389__$1 = state_34389;
var statearr_34397_36815 = state_34389__$1;
(statearr_34397_36815[(2)] = inst_34385);

(statearr_34397_36815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34390 === (1))){
var state_34389__$1 = state_34389;
var statearr_34401_36816 = state_34389__$1;
(statearr_34401_36816[(2)] = null);

(statearr_34401_36816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34390 === (4))){
var inst_34368 = (state_34389[(7)]);
var inst_34368__$1 = (state_34389[(2)]);
var inst_34369 = (inst_34368__$1 == null);
var state_34389__$1 = (function (){var statearr_34402 = state_34389;
(statearr_34402[(7)] = inst_34368__$1);

return statearr_34402;
})();
if(cljs.core.truth_(inst_34369)){
var statearr_34403_36818 = state_34389__$1;
(statearr_34403_36818[(1)] = (5));

} else {
var statearr_34404_36819 = state_34389__$1;
(statearr_34404_36819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34390 === (13))){
var state_34389__$1 = state_34389;
var statearr_34407_36821 = state_34389__$1;
(statearr_34407_36821[(2)] = null);

(statearr_34407_36821[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34390 === (6))){
var inst_34368 = (state_34389[(7)]);
var state_34389__$1 = state_34389;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34389__$1,(11),to,inst_34368);
} else {
if((state_val_34390 === (3))){
var inst_34387 = (state_34389[(2)]);
var state_34389__$1 = state_34389;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34389__$1,inst_34387);
} else {
if((state_val_34390 === (12))){
var state_34389__$1 = state_34389;
var statearr_34409_36823 = state_34389__$1;
(statearr_34409_36823[(2)] = null);

(statearr_34409_36823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34390 === (2))){
var state_34389__$1 = state_34389;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34389__$1,(4),from);
} else {
if((state_val_34390 === (11))){
var inst_34378 = (state_34389[(2)]);
var state_34389__$1 = state_34389;
if(cljs.core.truth_(inst_34378)){
var statearr_34410_36825 = state_34389__$1;
(statearr_34410_36825[(1)] = (12));

} else {
var statearr_34411_36826 = state_34389__$1;
(statearr_34411_36826[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34390 === (9))){
var state_34389__$1 = state_34389;
var statearr_34412_36827 = state_34389__$1;
(statearr_34412_36827[(2)] = null);

(statearr_34412_36827[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34390 === (5))){
var state_34389__$1 = state_34389;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34413_36829 = state_34389__$1;
(statearr_34413_36829[(1)] = (8));

} else {
var statearr_34414_36830 = state_34389__$1;
(statearr_34414_36830[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34390 === (14))){
var inst_34383 = (state_34389[(2)]);
var state_34389__$1 = state_34389;
var statearr_34415_36831 = state_34389__$1;
(statearr_34415_36831[(2)] = inst_34383);

(statearr_34415_36831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34390 === (10))){
var inst_34375 = (state_34389[(2)]);
var state_34389__$1 = state_34389;
var statearr_34416_36833 = state_34389__$1;
(statearr_34416_36833[(2)] = inst_34375);

(statearr_34416_36833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34390 === (8))){
var inst_34372 = cljs.core.async.close_BANG_(to);
var state_34389__$1 = state_34389;
var statearr_34417_36835 = state_34389__$1;
(statearr_34417_36835[(2)] = inst_34372);

(statearr_34417_36835[(1)] = (10));


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
var statearr_34421 = [null,null,null,null,null,null,null,null];
(statearr_34421[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_34421[(1)] = (1));

return statearr_34421;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_34389){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34389);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34422){if((e34422 instanceof Object)){
var ex__34203__auto__ = e34422;
var statearr_34423_36838 = state_34389;
(statearr_34423_36838[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34422;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36839 = state_34389;
state_34389 = G__36839;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_34389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_34389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34267__auto__ = (function (){var statearr_34424 = (f__34266__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34266__auto__.cljs$core$IFn$_invoke$arity$0() : f__34266__auto__.call(null));
(statearr_34424[(6)] = c__34265__auto___36813);

return statearr_34424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34267__auto__);
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
var process = (function (p__34425){
var vec__34426 = p__34425;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34426,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34426,(1),null);
var job = vec__34426;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34265__auto___36843 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34266__auto__ = (function (){var switch__34199__auto__ = (function (state_34433){
var state_val_34434 = (state_34433[(1)]);
if((state_val_34434 === (1))){
var state_34433__$1 = state_34433;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34433__$1,(2),res,v);
} else {
if((state_val_34434 === (2))){
var inst_34430 = (state_34433[(2)]);
var inst_34431 = cljs.core.async.close_BANG_(res);
var state_34433__$1 = (function (){var statearr_34435 = state_34433;
(statearr_34435[(7)] = inst_34430);

return statearr_34435;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34433__$1,inst_34431);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_34436 = [null,null,null,null,null,null,null,null];
(statearr_34436[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34436[(1)] = (1));

return statearr_34436;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34433){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34433);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34437){if((e34437 instanceof Object)){
var ex__34203__auto__ = e34437;
var statearr_34438_36847 = state_34433;
(statearr_34438_36847[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34437;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36848 = state_34433;
state_34433 = G__36848;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34433){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
})();
var state__34267__auto__ = (function (){var statearr_34442 = (f__34266__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34266__auto__.cljs$core$IFn$_invoke$arity$0() : f__34266__auto__.call(null));
(statearr_34442[(6)] = c__34265__auto___36843);

return statearr_34442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34267__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34446){
var vec__34447 = p__34446;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34447,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34447,(1),null);
var job = vec__34447;
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
var n__4666__auto___36852 = n;
var __36853 = (0);
while(true){
if((__36853 < n__4666__auto___36852)){
var G__34456_36854 = type;
var G__34456_36855__$1 = (((G__34456_36854 instanceof cljs.core.Keyword))?G__34456_36854.fqn:null);
switch (G__34456_36855__$1) {
case "compute":
var c__34265__auto___36857 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36853,c__34265__auto___36857,G__34456_36854,G__34456_36855__$1,n__4666__auto___36852,jobs,results,process,async){
return (function (){
var f__34266__auto__ = (function (){var switch__34199__auto__ = ((function (__36853,c__34265__auto___36857,G__34456_36854,G__34456_36855__$1,n__4666__auto___36852,jobs,results,process,async){
return (function (state_34469){
var state_val_34470 = (state_34469[(1)]);
if((state_val_34470 === (1))){
var state_34469__$1 = state_34469;
var statearr_34471_36859 = state_34469__$1;
(statearr_34471_36859[(2)] = null);

(statearr_34471_36859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34470 === (2))){
var state_34469__$1 = state_34469;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34469__$1,(4),jobs);
} else {
if((state_val_34470 === (3))){
var inst_34467 = (state_34469[(2)]);
var state_34469__$1 = state_34469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34469__$1,inst_34467);
} else {
if((state_val_34470 === (4))){
var inst_34459 = (state_34469[(2)]);
var inst_34460 = process(inst_34459);
var state_34469__$1 = state_34469;
if(cljs.core.truth_(inst_34460)){
var statearr_34472_36862 = state_34469__$1;
(statearr_34472_36862[(1)] = (5));

} else {
var statearr_34473_36863 = state_34469__$1;
(statearr_34473_36863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34470 === (5))){
var state_34469__$1 = state_34469;
var statearr_34474_36864 = state_34469__$1;
(statearr_34474_36864[(2)] = null);

(statearr_34474_36864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34470 === (6))){
var state_34469__$1 = state_34469;
var statearr_34475_36866 = state_34469__$1;
(statearr_34475_36866[(2)] = null);

(statearr_34475_36866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34470 === (7))){
var inst_34465 = (state_34469[(2)]);
var state_34469__$1 = state_34469;
var statearr_34476_36867 = state_34469__$1;
(statearr_34476_36867[(2)] = inst_34465);

(statearr_34476_36867[(1)] = (3));


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
});})(__36853,c__34265__auto___36857,G__34456_36854,G__34456_36855__$1,n__4666__auto___36852,jobs,results,process,async))
;
return ((function (__36853,switch__34199__auto__,c__34265__auto___36857,G__34456_36854,G__34456_36855__$1,n__4666__auto___36852,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_34477 = [null,null,null,null,null,null,null];
(statearr_34477[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34477[(1)] = (1));

return statearr_34477;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34469){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34469);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34478){if((e34478 instanceof Object)){
var ex__34203__auto__ = e34478;
var statearr_34479_36870 = state_34469;
(statearr_34479_36870[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34478;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36872 = state_34469;
state_34469 = G__36872;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34469){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
;})(__36853,switch__34199__auto__,c__34265__auto___36857,G__34456_36854,G__34456_36855__$1,n__4666__auto___36852,jobs,results,process,async))
})();
var state__34267__auto__ = (function (){var statearr_34480 = (f__34266__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34266__auto__.cljs$core$IFn$_invoke$arity$0() : f__34266__auto__.call(null));
(statearr_34480[(6)] = c__34265__auto___36857);

return statearr_34480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34267__auto__);
});})(__36853,c__34265__auto___36857,G__34456_36854,G__34456_36855__$1,n__4666__auto___36852,jobs,results,process,async))
);


break;
case "async":
var c__34265__auto___36874 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36853,c__34265__auto___36874,G__34456_36854,G__34456_36855__$1,n__4666__auto___36852,jobs,results,process,async){
return (function (){
var f__34266__auto__ = (function (){var switch__34199__auto__ = ((function (__36853,c__34265__auto___36874,G__34456_36854,G__34456_36855__$1,n__4666__auto___36852,jobs,results,process,async){
return (function (state_34493){
var state_val_34494 = (state_34493[(1)]);
if((state_val_34494 === (1))){
var state_34493__$1 = state_34493;
var statearr_34495_36876 = state_34493__$1;
(statearr_34495_36876[(2)] = null);

(statearr_34495_36876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34494 === (2))){
var state_34493__$1 = state_34493;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34493__$1,(4),jobs);
} else {
if((state_val_34494 === (3))){
var inst_34491 = (state_34493[(2)]);
var state_34493__$1 = state_34493;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34493__$1,inst_34491);
} else {
if((state_val_34494 === (4))){
var inst_34483 = (state_34493[(2)]);
var inst_34484 = async(inst_34483);
var state_34493__$1 = state_34493;
if(cljs.core.truth_(inst_34484)){
var statearr_34496_36878 = state_34493__$1;
(statearr_34496_36878[(1)] = (5));

} else {
var statearr_34497_36880 = state_34493__$1;
(statearr_34497_36880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34494 === (5))){
var state_34493__$1 = state_34493;
var statearr_34498_36881 = state_34493__$1;
(statearr_34498_36881[(2)] = null);

(statearr_34498_36881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34494 === (6))){
var state_34493__$1 = state_34493;
var statearr_34499_36883 = state_34493__$1;
(statearr_34499_36883[(2)] = null);

(statearr_34499_36883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34494 === (7))){
var inst_34489 = (state_34493[(2)]);
var state_34493__$1 = state_34493;
var statearr_34500_36884 = state_34493__$1;
(statearr_34500_36884[(2)] = inst_34489);

(statearr_34500_36884[(1)] = (3));


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
});})(__36853,c__34265__auto___36874,G__34456_36854,G__34456_36855__$1,n__4666__auto___36852,jobs,results,process,async))
;
return ((function (__36853,switch__34199__auto__,c__34265__auto___36874,G__34456_36854,G__34456_36855__$1,n__4666__auto___36852,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_34501 = [null,null,null,null,null,null,null];
(statearr_34501[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34501[(1)] = (1));

return statearr_34501;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34493){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34493);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34502){if((e34502 instanceof Object)){
var ex__34203__auto__ = e34502;
var statearr_34503_36887 = state_34493;
(statearr_34503_36887[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34502;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36889 = state_34493;
state_34493 = G__36889;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34493){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
;})(__36853,switch__34199__auto__,c__34265__auto___36874,G__34456_36854,G__34456_36855__$1,n__4666__auto___36852,jobs,results,process,async))
})();
var state__34267__auto__ = (function (){var statearr_34504 = (f__34266__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34266__auto__.cljs$core$IFn$_invoke$arity$0() : f__34266__auto__.call(null));
(statearr_34504[(6)] = c__34265__auto___36874);

return statearr_34504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34267__auto__);
});})(__36853,c__34265__auto___36874,G__34456_36854,G__34456_36855__$1,n__4666__auto___36852,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34456_36855__$1)].join('')));

}

var G__36891 = (__36853 + (1));
__36853 = G__36891;
continue;
} else {
}
break;
}

var c__34265__auto___36892 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34266__auto__ = (function (){var switch__34199__auto__ = (function (state_34526){
var state_val_34527 = (state_34526[(1)]);
if((state_val_34527 === (7))){
var inst_34522 = (state_34526[(2)]);
var state_34526__$1 = state_34526;
var statearr_34528_36894 = state_34526__$1;
(statearr_34528_36894[(2)] = inst_34522);

(statearr_34528_36894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (1))){
var state_34526__$1 = state_34526;
var statearr_34529_36895 = state_34526__$1;
(statearr_34529_36895[(2)] = null);

(statearr_34529_36895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (4))){
var inst_34507 = (state_34526[(7)]);
var inst_34507__$1 = (state_34526[(2)]);
var inst_34508 = (inst_34507__$1 == null);
var state_34526__$1 = (function (){var statearr_34530 = state_34526;
(statearr_34530[(7)] = inst_34507__$1);

return statearr_34530;
})();
if(cljs.core.truth_(inst_34508)){
var statearr_34531_36897 = state_34526__$1;
(statearr_34531_36897[(1)] = (5));

} else {
var statearr_34532_36899 = state_34526__$1;
(statearr_34532_36899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (6))){
var inst_34507 = (state_34526[(7)]);
var inst_34512 = (state_34526[(8)]);
var inst_34512__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34513 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34514 = [inst_34507,inst_34512__$1];
var inst_34515 = (new cljs.core.PersistentVector(null,2,(5),inst_34513,inst_34514,null));
var state_34526__$1 = (function (){var statearr_34534 = state_34526;
(statearr_34534[(8)] = inst_34512__$1);

return statearr_34534;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34526__$1,(8),jobs,inst_34515);
} else {
if((state_val_34527 === (3))){
var inst_34524 = (state_34526[(2)]);
var state_34526__$1 = state_34526;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34526__$1,inst_34524);
} else {
if((state_val_34527 === (2))){
var state_34526__$1 = state_34526;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34526__$1,(4),from);
} else {
if((state_val_34527 === (9))){
var inst_34519 = (state_34526[(2)]);
var state_34526__$1 = (function (){var statearr_34538 = state_34526;
(statearr_34538[(9)] = inst_34519);

return statearr_34538;
})();
var statearr_34539_36902 = state_34526__$1;
(statearr_34539_36902[(2)] = null);

(statearr_34539_36902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (5))){
var inst_34510 = cljs.core.async.close_BANG_(jobs);
var state_34526__$1 = state_34526;
var statearr_34540_36904 = state_34526__$1;
(statearr_34540_36904[(2)] = inst_34510);

(statearr_34540_36904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (8))){
var inst_34512 = (state_34526[(8)]);
var inst_34517 = (state_34526[(2)]);
var state_34526__$1 = (function (){var statearr_34541 = state_34526;
(statearr_34541[(10)] = inst_34517);

return statearr_34541;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34526__$1,(9),results,inst_34512);
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
var statearr_34542 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34542[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34542[(1)] = (1));

return statearr_34542;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34526){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34526);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34544){if((e34544 instanceof Object)){
var ex__34203__auto__ = e34544;
var statearr_34545_36907 = state_34526;
(statearr_34545_36907[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34544;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36909 = state_34526;
state_34526 = G__36909;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34526){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
})();
var state__34267__auto__ = (function (){var statearr_34546 = (f__34266__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34266__auto__.cljs$core$IFn$_invoke$arity$0() : f__34266__auto__.call(null));
(statearr_34546[(6)] = c__34265__auto___36892);

return statearr_34546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34267__auto__);
}));


var c__34265__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34266__auto__ = (function (){var switch__34199__auto__ = (function (state_34585){
var state_val_34586 = (state_34585[(1)]);
if((state_val_34586 === (7))){
var inst_34580 = (state_34585[(2)]);
var state_34585__$1 = state_34585;
var statearr_34588_36911 = state_34585__$1;
(statearr_34588_36911[(2)] = inst_34580);

(statearr_34588_36911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34586 === (20))){
var state_34585__$1 = state_34585;
var statearr_34589_36913 = state_34585__$1;
(statearr_34589_36913[(2)] = null);

(statearr_34589_36913[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34586 === (1))){
var state_34585__$1 = state_34585;
var statearr_34590_36914 = state_34585__$1;
(statearr_34590_36914[(2)] = null);

(statearr_34590_36914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34586 === (4))){
var inst_34549 = (state_34585[(7)]);
var inst_34549__$1 = (state_34585[(2)]);
var inst_34550 = (inst_34549__$1 == null);
var state_34585__$1 = (function (){var statearr_34591 = state_34585;
(statearr_34591[(7)] = inst_34549__$1);

return statearr_34591;
})();
if(cljs.core.truth_(inst_34550)){
var statearr_34592_36916 = state_34585__$1;
(statearr_34592_36916[(1)] = (5));

} else {
var statearr_34593_36918 = state_34585__$1;
(statearr_34593_36918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34586 === (15))){
var inst_34562 = (state_34585[(8)]);
var state_34585__$1 = state_34585;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34585__$1,(18),to,inst_34562);
} else {
if((state_val_34586 === (21))){
var inst_34575 = (state_34585[(2)]);
var state_34585__$1 = state_34585;
var statearr_34595_36920 = state_34585__$1;
(statearr_34595_36920[(2)] = inst_34575);

(statearr_34595_36920[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34586 === (13))){
var inst_34577 = (state_34585[(2)]);
var state_34585__$1 = (function (){var statearr_34596 = state_34585;
(statearr_34596[(9)] = inst_34577);

return statearr_34596;
})();
var statearr_34597_36921 = state_34585__$1;
(statearr_34597_36921[(2)] = null);

(statearr_34597_36921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34586 === (6))){
var inst_34549 = (state_34585[(7)]);
var state_34585__$1 = state_34585;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34585__$1,(11),inst_34549);
} else {
if((state_val_34586 === (17))){
var inst_34570 = (state_34585[(2)]);
var state_34585__$1 = state_34585;
if(cljs.core.truth_(inst_34570)){
var statearr_34598_36924 = state_34585__$1;
(statearr_34598_36924[(1)] = (19));

} else {
var statearr_34599_36925 = state_34585__$1;
(statearr_34599_36925[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34586 === (3))){
var inst_34582 = (state_34585[(2)]);
var state_34585__$1 = state_34585;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34585__$1,inst_34582);
} else {
if((state_val_34586 === (12))){
var inst_34559 = (state_34585[(10)]);
var state_34585__$1 = state_34585;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34585__$1,(14),inst_34559);
} else {
if((state_val_34586 === (2))){
var state_34585__$1 = state_34585;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34585__$1,(4),results);
} else {
if((state_val_34586 === (19))){
var state_34585__$1 = state_34585;
var statearr_34605_36927 = state_34585__$1;
(statearr_34605_36927[(2)] = null);

(statearr_34605_36927[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34586 === (11))){
var inst_34559 = (state_34585[(2)]);
var state_34585__$1 = (function (){var statearr_34608 = state_34585;
(statearr_34608[(10)] = inst_34559);

return statearr_34608;
})();
var statearr_34609_36929 = state_34585__$1;
(statearr_34609_36929[(2)] = null);

(statearr_34609_36929[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34586 === (9))){
var state_34585__$1 = state_34585;
var statearr_34610_36930 = state_34585__$1;
(statearr_34610_36930[(2)] = null);

(statearr_34610_36930[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34586 === (5))){
var state_34585__$1 = state_34585;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34611_36932 = state_34585__$1;
(statearr_34611_36932[(1)] = (8));

} else {
var statearr_34612_36933 = state_34585__$1;
(statearr_34612_36933[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34586 === (14))){
var inst_34562 = (state_34585[(8)]);
var inst_34562__$1 = (state_34585[(2)]);
var inst_34563 = (inst_34562__$1 == null);
var inst_34564 = cljs.core.not(inst_34563);
var state_34585__$1 = (function (){var statearr_34613 = state_34585;
(statearr_34613[(8)] = inst_34562__$1);

return statearr_34613;
})();
if(inst_34564){
var statearr_34614_36935 = state_34585__$1;
(statearr_34614_36935[(1)] = (15));

} else {
var statearr_34615_36936 = state_34585__$1;
(statearr_34615_36936[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34586 === (16))){
var state_34585__$1 = state_34585;
var statearr_34616_36938 = state_34585__$1;
(statearr_34616_36938[(2)] = false);

(statearr_34616_36938[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34586 === (10))){
var inst_34556 = (state_34585[(2)]);
var state_34585__$1 = state_34585;
var statearr_34617_36939 = state_34585__$1;
(statearr_34617_36939[(2)] = inst_34556);

(statearr_34617_36939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34586 === (18))){
var inst_34567 = (state_34585[(2)]);
var state_34585__$1 = state_34585;
var statearr_34618_36941 = state_34585__$1;
(statearr_34618_36941[(2)] = inst_34567);

(statearr_34618_36941[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34586 === (8))){
var inst_34553 = cljs.core.async.close_BANG_(to);
var state_34585__$1 = state_34585;
var statearr_34619_36943 = state_34585__$1;
(statearr_34619_36943[(2)] = inst_34553);

(statearr_34619_36943[(1)] = (10));


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
var statearr_34621 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34621[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34621[(1)] = (1));

return statearr_34621;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34585){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34585);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34622){if((e34622 instanceof Object)){
var ex__34203__auto__ = e34622;
var statearr_34623_36945 = state_34585;
(statearr_34623_36945[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34622;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36947 = state_34585;
state_34585 = G__36947;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34585){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
})();
var state__34267__auto__ = (function (){var statearr_34624 = (f__34266__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34266__auto__.cljs$core$IFn$_invoke$arity$0() : f__34266__auto__.call(null));
(statearr_34624[(6)] = c__34265__auto__);

return statearr_34624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34267__auto__);
}));

return c__34265__auto__;
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
var G__34626 = arguments.length;
switch (G__34626) {
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
var G__34635 = arguments.length;
switch (G__34635) {
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
var G__34637 = arguments.length;
switch (G__34637) {
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
var c__34265__auto___36958 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34266__auto__ = (function (){var switch__34199__auto__ = (function (state_34666){
var state_val_34667 = (state_34666[(1)]);
if((state_val_34667 === (7))){
var inst_34661 = (state_34666[(2)]);
var state_34666__$1 = state_34666;
var statearr_34668_36960 = state_34666__$1;
(statearr_34668_36960[(2)] = inst_34661);

(statearr_34668_36960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (1))){
var state_34666__$1 = state_34666;
var statearr_34669_36962 = state_34666__$1;
(statearr_34669_36962[(2)] = null);

(statearr_34669_36962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (4))){
var inst_34640 = (state_34666[(7)]);
var inst_34640__$1 = (state_34666[(2)]);
var inst_34641 = (inst_34640__$1 == null);
var state_34666__$1 = (function (){var statearr_34670 = state_34666;
(statearr_34670[(7)] = inst_34640__$1);

return statearr_34670;
})();
if(cljs.core.truth_(inst_34641)){
var statearr_34671_36964 = state_34666__$1;
(statearr_34671_36964[(1)] = (5));

} else {
var statearr_34672_36965 = state_34666__$1;
(statearr_34672_36965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (13))){
var state_34666__$1 = state_34666;
var statearr_34673_36966 = state_34666__$1;
(statearr_34673_36966[(2)] = null);

(statearr_34673_36966[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (6))){
var inst_34640 = (state_34666[(7)]);
var inst_34648 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34640) : p.call(null,inst_34640));
var state_34666__$1 = state_34666;
if(cljs.core.truth_(inst_34648)){
var statearr_34674_36968 = state_34666__$1;
(statearr_34674_36968[(1)] = (9));

} else {
var statearr_34675_36970 = state_34666__$1;
(statearr_34675_36970[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (3))){
var inst_34663 = (state_34666[(2)]);
var state_34666__$1 = state_34666;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34666__$1,inst_34663);
} else {
if((state_val_34667 === (12))){
var state_34666__$1 = state_34666;
var statearr_34676_36971 = state_34666__$1;
(statearr_34676_36971[(2)] = null);

(statearr_34676_36971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (2))){
var state_34666__$1 = state_34666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34666__$1,(4),ch);
} else {
if((state_val_34667 === (11))){
var inst_34640 = (state_34666[(7)]);
var inst_34652 = (state_34666[(2)]);
var state_34666__$1 = state_34666;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34666__$1,(8),inst_34652,inst_34640);
} else {
if((state_val_34667 === (9))){
var state_34666__$1 = state_34666;
var statearr_34677_36974 = state_34666__$1;
(statearr_34677_36974[(2)] = tc);

(statearr_34677_36974[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (5))){
var inst_34643 = cljs.core.async.close_BANG_(tc);
var inst_34645 = cljs.core.async.close_BANG_(fc);
var state_34666__$1 = (function (){var statearr_34678 = state_34666;
(statearr_34678[(8)] = inst_34643);

return statearr_34678;
})();
var statearr_34679_36976 = state_34666__$1;
(statearr_34679_36976[(2)] = inst_34645);

(statearr_34679_36976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (14))){
var inst_34659 = (state_34666[(2)]);
var state_34666__$1 = state_34666;
var statearr_34680_36977 = state_34666__$1;
(statearr_34680_36977[(2)] = inst_34659);

(statearr_34680_36977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (10))){
var state_34666__$1 = state_34666;
var statearr_34681_36979 = state_34666__$1;
(statearr_34681_36979[(2)] = fc);

(statearr_34681_36979[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (8))){
var inst_34654 = (state_34666[(2)]);
var state_34666__$1 = state_34666;
if(cljs.core.truth_(inst_34654)){
var statearr_34682_36980 = state_34666__$1;
(statearr_34682_36980[(1)] = (12));

} else {
var statearr_34683_36982 = state_34666__$1;
(statearr_34683_36982[(1)] = (13));

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
var statearr_34684 = [null,null,null,null,null,null,null,null,null];
(statearr_34684[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_34684[(1)] = (1));

return statearr_34684;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_34666){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34666);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34685){if((e34685 instanceof Object)){
var ex__34203__auto__ = e34685;
var statearr_34686_36984 = state_34666;
(statearr_34686_36984[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34685;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36986 = state_34666;
state_34666 = G__36986;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_34666){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_34666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34267__auto__ = (function (){var statearr_34687 = (f__34266__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34266__auto__.cljs$core$IFn$_invoke$arity$0() : f__34266__auto__.call(null));
(statearr_34687[(6)] = c__34265__auto___36958);

return statearr_34687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34267__auto__);
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
var c__34265__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34266__auto__ = (function (){var switch__34199__auto__ = (function (state_34708){
var state_val_34709 = (state_34708[(1)]);
if((state_val_34709 === (7))){
var inst_34704 = (state_34708[(2)]);
var state_34708__$1 = state_34708;
var statearr_34710_36989 = state_34708__$1;
(statearr_34710_36989[(2)] = inst_34704);

(statearr_34710_36989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (1))){
var inst_34688 = init;
var state_34708__$1 = (function (){var statearr_34711 = state_34708;
(statearr_34711[(7)] = inst_34688);

return statearr_34711;
})();
var statearr_34712_36991 = state_34708__$1;
(statearr_34712_36991[(2)] = null);

(statearr_34712_36991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (4))){
var inst_34691 = (state_34708[(8)]);
var inst_34691__$1 = (state_34708[(2)]);
var inst_34692 = (inst_34691__$1 == null);
var state_34708__$1 = (function (){var statearr_34713 = state_34708;
(statearr_34713[(8)] = inst_34691__$1);

return statearr_34713;
})();
if(cljs.core.truth_(inst_34692)){
var statearr_34714_36993 = state_34708__$1;
(statearr_34714_36993[(1)] = (5));

} else {
var statearr_34715_36994 = state_34708__$1;
(statearr_34715_36994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (6))){
var inst_34695 = (state_34708[(9)]);
var inst_34691 = (state_34708[(8)]);
var inst_34688 = (state_34708[(7)]);
var inst_34695__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34688,inst_34691) : f.call(null,inst_34688,inst_34691));
var inst_34696 = cljs.core.reduced_QMARK_(inst_34695__$1);
var state_34708__$1 = (function (){var statearr_34716 = state_34708;
(statearr_34716[(9)] = inst_34695__$1);

return statearr_34716;
})();
if(inst_34696){
var statearr_34717_36996 = state_34708__$1;
(statearr_34717_36996[(1)] = (8));

} else {
var statearr_34718_36997 = state_34708__$1;
(statearr_34718_36997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (3))){
var inst_34706 = (state_34708[(2)]);
var state_34708__$1 = state_34708;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34708__$1,inst_34706);
} else {
if((state_val_34709 === (2))){
var state_34708__$1 = state_34708;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34708__$1,(4),ch);
} else {
if((state_val_34709 === (9))){
var inst_34695 = (state_34708[(9)]);
var inst_34688 = inst_34695;
var state_34708__$1 = (function (){var statearr_34719 = state_34708;
(statearr_34719[(7)] = inst_34688);

return statearr_34719;
})();
var statearr_34720_36999 = state_34708__$1;
(statearr_34720_36999[(2)] = null);

(statearr_34720_36999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (5))){
var inst_34688 = (state_34708[(7)]);
var state_34708__$1 = state_34708;
var statearr_34721_37001 = state_34708__$1;
(statearr_34721_37001[(2)] = inst_34688);

(statearr_34721_37001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (10))){
var inst_34702 = (state_34708[(2)]);
var state_34708__$1 = state_34708;
var statearr_34722_37002 = state_34708__$1;
(statearr_34722_37002[(2)] = inst_34702);

(statearr_34722_37002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (8))){
var inst_34695 = (state_34708[(9)]);
var inst_34698 = cljs.core.deref(inst_34695);
var state_34708__$1 = state_34708;
var statearr_34723_37004 = state_34708__$1;
(statearr_34723_37004[(2)] = inst_34698);

(statearr_34723_37004[(1)] = (10));


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
var statearr_34724 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34724[(0)] = cljs$core$async$reduce_$_state_machine__34200__auto__);

(statearr_34724[(1)] = (1));

return statearr_34724;
});
var cljs$core$async$reduce_$_state_machine__34200__auto____1 = (function (state_34708){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34708);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34725){if((e34725 instanceof Object)){
var ex__34203__auto__ = e34725;
var statearr_34726_37006 = state_34708;
(statearr_34726_37006[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34725;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37007 = state_34708;
state_34708 = G__37007;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34200__auto__ = function(state_34708){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34200__auto____1.call(this,state_34708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34200__auto____0;
cljs$core$async$reduce_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34200__auto____1;
return cljs$core$async$reduce_$_state_machine__34200__auto__;
})()
})();
var state__34267__auto__ = (function (){var statearr_34727 = (f__34266__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34266__auto__.cljs$core$IFn$_invoke$arity$0() : f__34266__auto__.call(null));
(statearr_34727[(6)] = c__34265__auto__);

return statearr_34727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34267__auto__);
}));

return c__34265__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__34265__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34266__auto__ = (function (){var switch__34199__auto__ = (function (state_34733){
var state_val_34734 = (state_34733[(1)]);
if((state_val_34734 === (1))){
var inst_34728 = cljs.core.async.reduce(f__$1,init,ch);
var state_34733__$1 = state_34733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34733__$1,(2),inst_34728);
} else {
if((state_val_34734 === (2))){
var inst_34730 = (state_34733[(2)]);
var inst_34731 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34730) : f__$1.call(null,inst_34730));
var state_34733__$1 = state_34733;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34733__$1,inst_34731);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34200__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34200__auto____0 = (function (){
var statearr_34735 = [null,null,null,null,null,null,null];
(statearr_34735[(0)] = cljs$core$async$transduce_$_state_machine__34200__auto__);

(statearr_34735[(1)] = (1));

return statearr_34735;
});
var cljs$core$async$transduce_$_state_machine__34200__auto____1 = (function (state_34733){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34733);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34736){if((e34736 instanceof Object)){
var ex__34203__auto__ = e34736;
var statearr_34737_37020 = state_34733;
(statearr_34737_37020[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34736;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37021 = state_34733;
state_34733 = G__37021;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34200__auto__ = function(state_34733){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34200__auto____1.call(this,state_34733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34200__auto____0;
cljs$core$async$transduce_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34200__auto____1;
return cljs$core$async$transduce_$_state_machine__34200__auto__;
})()
})();
var state__34267__auto__ = (function (){var statearr_34738 = (f__34266__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34266__auto__.cljs$core$IFn$_invoke$arity$0() : f__34266__auto__.call(null));
(statearr_34738[(6)] = c__34265__auto__);

return statearr_34738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34267__auto__);
}));

return c__34265__auto__;
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
var G__34740 = arguments.length;
switch (G__34740) {
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
var c__34265__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34266__auto__ = (function (){var switch__34199__auto__ = (function (state_34765){
var state_val_34766 = (state_34765[(1)]);
if((state_val_34766 === (7))){
var inst_34747 = (state_34765[(2)]);
var state_34765__$1 = state_34765;
var statearr_34767_37030 = state_34765__$1;
(statearr_34767_37030[(2)] = inst_34747);

(statearr_34767_37030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34766 === (1))){
var inst_34741 = cljs.core.seq(coll);
var inst_34742 = inst_34741;
var state_34765__$1 = (function (){var statearr_34768 = state_34765;
(statearr_34768[(7)] = inst_34742);

return statearr_34768;
})();
var statearr_34769_37031 = state_34765__$1;
(statearr_34769_37031[(2)] = null);

(statearr_34769_37031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34766 === (4))){
var inst_34742 = (state_34765[(7)]);
var inst_34745 = cljs.core.first(inst_34742);
var state_34765__$1 = state_34765;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34765__$1,(7),ch,inst_34745);
} else {
if((state_val_34766 === (13))){
var inst_34759 = (state_34765[(2)]);
var state_34765__$1 = state_34765;
var statearr_34770_37032 = state_34765__$1;
(statearr_34770_37032[(2)] = inst_34759);

(statearr_34770_37032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34766 === (6))){
var inst_34750 = (state_34765[(2)]);
var state_34765__$1 = state_34765;
if(cljs.core.truth_(inst_34750)){
var statearr_34771_37036 = state_34765__$1;
(statearr_34771_37036[(1)] = (8));

} else {
var statearr_34772_37038 = state_34765__$1;
(statearr_34772_37038[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34766 === (3))){
var inst_34763 = (state_34765[(2)]);
var state_34765__$1 = state_34765;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34765__$1,inst_34763);
} else {
if((state_val_34766 === (12))){
var state_34765__$1 = state_34765;
var statearr_34776_37041 = state_34765__$1;
(statearr_34776_37041[(2)] = null);

(statearr_34776_37041[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34766 === (2))){
var inst_34742 = (state_34765[(7)]);
var state_34765__$1 = state_34765;
if(cljs.core.truth_(inst_34742)){
var statearr_34777_37042 = state_34765__$1;
(statearr_34777_37042[(1)] = (4));

} else {
var statearr_34778_37043 = state_34765__$1;
(statearr_34778_37043[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34766 === (11))){
var inst_34756 = cljs.core.async.close_BANG_(ch);
var state_34765__$1 = state_34765;
var statearr_34779_37047 = state_34765__$1;
(statearr_34779_37047[(2)] = inst_34756);

(statearr_34779_37047[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34766 === (9))){
var state_34765__$1 = state_34765;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34780_37049 = state_34765__$1;
(statearr_34780_37049[(1)] = (11));

} else {
var statearr_34781_37050 = state_34765__$1;
(statearr_34781_37050[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34766 === (5))){
var inst_34742 = (state_34765[(7)]);
var state_34765__$1 = state_34765;
var statearr_34785_37056 = state_34765__$1;
(statearr_34785_37056[(2)] = inst_34742);

(statearr_34785_37056[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34766 === (10))){
var inst_34761 = (state_34765[(2)]);
var state_34765__$1 = state_34765;
var statearr_34786_37059 = state_34765__$1;
(statearr_34786_37059[(2)] = inst_34761);

(statearr_34786_37059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34766 === (8))){
var inst_34742 = (state_34765[(7)]);
var inst_34752 = cljs.core.next(inst_34742);
var inst_34742__$1 = inst_34752;
var state_34765__$1 = (function (){var statearr_34789 = state_34765;
(statearr_34789[(7)] = inst_34742__$1);

return statearr_34789;
})();
var statearr_34790_37063 = state_34765__$1;
(statearr_34790_37063[(2)] = null);

(statearr_34790_37063[(1)] = (2));


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
var statearr_34791 = [null,null,null,null,null,null,null,null];
(statearr_34791[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_34791[(1)] = (1));

return statearr_34791;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_34765){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34765);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34793){if((e34793 instanceof Object)){
var ex__34203__auto__ = e34793;
var statearr_34794_37076 = state_34765;
(statearr_34794_37076[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34793;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37077 = state_34765;
state_34765 = G__37077;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_34765){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_34765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34267__auto__ = (function (){var statearr_34795 = (f__34266__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34266__auto__.cljs$core$IFn$_invoke$arity$0() : f__34266__auto__.call(null));
(statearr_34795[(6)] = c__34265__auto__);

return statearr_34795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34267__auto__);
}));

return c__34265__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34805 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34805 = (function (ch,cs,meta34806){
this.ch = ch;
this.cs = cs;
this.meta34806 = meta34806;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34807,meta34806__$1){
var self__ = this;
var _34807__$1 = this;
return (new cljs.core.async.t_cljs$core$async34805(self__.ch,self__.cs,meta34806__$1));
}));

(cljs.core.async.t_cljs$core$async34805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34807){
var self__ = this;
var _34807__$1 = this;
return self__.meta34806;
}));

(cljs.core.async.t_cljs$core$async34805.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34805.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34805.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34805.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34805.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34805.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34805.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34806","meta34806",-1970969599,null)], null);
}));

(cljs.core.async.t_cljs$core$async34805.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34805.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34805");

(cljs.core.async.t_cljs$core$async34805.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34805");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34805.
 */
cljs.core.async.__GT_t_cljs$core$async34805 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34805(ch__$1,cs__$1,meta34806){
return (new cljs.core.async.t_cljs$core$async34805(ch__$1,cs__$1,meta34806));
});

}

return (new cljs.core.async.t_cljs$core$async34805(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34265__auto___37135 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34266__auto__ = (function (){var switch__34199__auto__ = (function (state_34952){
var state_val_34953 = (state_34952[(1)]);
if((state_val_34953 === (7))){
var inst_34948 = (state_34952[(2)]);
var state_34952__$1 = state_34952;
var statearr_34954_37136 = state_34952__$1;
(statearr_34954_37136[(2)] = inst_34948);

(statearr_34954_37136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (20))){
var inst_34848 = (state_34952[(7)]);
var inst_34863 = cljs.core.first(inst_34848);
var inst_34864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34863,(0),null);
var inst_34865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34863,(1),null);
var state_34952__$1 = (function (){var statearr_34958 = state_34952;
(statearr_34958[(8)] = inst_34864);

return statearr_34958;
})();
if(cljs.core.truth_(inst_34865)){
var statearr_34959_37145 = state_34952__$1;
(statearr_34959_37145[(1)] = (22));

} else {
var statearr_34960_37146 = state_34952__$1;
(statearr_34960_37146[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (27))){
var inst_34895 = (state_34952[(9)]);
var inst_34900 = (state_34952[(10)]);
var inst_34814 = (state_34952[(11)]);
var inst_34893 = (state_34952[(12)]);
var inst_34900__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34893,inst_34895);
var inst_34901 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34900__$1,inst_34814,done);
var state_34952__$1 = (function (){var statearr_34961 = state_34952;
(statearr_34961[(10)] = inst_34900__$1);

return statearr_34961;
})();
if(cljs.core.truth_(inst_34901)){
var statearr_34962_37150 = state_34952__$1;
(statearr_34962_37150[(1)] = (30));

} else {
var statearr_34963_37151 = state_34952__$1;
(statearr_34963_37151[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (1))){
var state_34952__$1 = state_34952;
var statearr_34964_37155 = state_34952__$1;
(statearr_34964_37155[(2)] = null);

(statearr_34964_37155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (24))){
var inst_34848 = (state_34952[(7)]);
var inst_34870 = (state_34952[(2)]);
var inst_34871 = cljs.core.next(inst_34848);
var inst_34823 = inst_34871;
var inst_34824 = null;
var inst_34825 = (0);
var inst_34826 = (0);
var state_34952__$1 = (function (){var statearr_34968 = state_34952;
(statearr_34968[(13)] = inst_34826);

(statearr_34968[(14)] = inst_34870);

(statearr_34968[(15)] = inst_34824);

(statearr_34968[(16)] = inst_34823);

(statearr_34968[(17)] = inst_34825);

return statearr_34968;
})();
var statearr_34970_37162 = state_34952__$1;
(statearr_34970_37162[(2)] = null);

(statearr_34970_37162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (39))){
var state_34952__$1 = state_34952;
var statearr_34974_37163 = state_34952__$1;
(statearr_34974_37163[(2)] = null);

(statearr_34974_37163[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (4))){
var inst_34814 = (state_34952[(11)]);
var inst_34814__$1 = (state_34952[(2)]);
var inst_34815 = (inst_34814__$1 == null);
var state_34952__$1 = (function (){var statearr_34975 = state_34952;
(statearr_34975[(11)] = inst_34814__$1);

return statearr_34975;
})();
if(cljs.core.truth_(inst_34815)){
var statearr_34976_37166 = state_34952__$1;
(statearr_34976_37166[(1)] = (5));

} else {
var statearr_34977_37167 = state_34952__$1;
(statearr_34977_37167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (15))){
var inst_34826 = (state_34952[(13)]);
var inst_34824 = (state_34952[(15)]);
var inst_34823 = (state_34952[(16)]);
var inst_34825 = (state_34952[(17)]);
var inst_34844 = (state_34952[(2)]);
var inst_34845 = (inst_34826 + (1));
var tmp34971 = inst_34824;
var tmp34972 = inst_34823;
var tmp34973 = inst_34825;
var inst_34823__$1 = tmp34972;
var inst_34824__$1 = tmp34971;
var inst_34825__$1 = tmp34973;
var inst_34826__$1 = inst_34845;
var state_34952__$1 = (function (){var statearr_34978 = state_34952;
(statearr_34978[(13)] = inst_34826__$1);

(statearr_34978[(18)] = inst_34844);

(statearr_34978[(15)] = inst_34824__$1);

(statearr_34978[(16)] = inst_34823__$1);

(statearr_34978[(17)] = inst_34825__$1);

return statearr_34978;
})();
var statearr_34979_37179 = state_34952__$1;
(statearr_34979_37179[(2)] = null);

(statearr_34979_37179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (21))){
var inst_34874 = (state_34952[(2)]);
var state_34952__$1 = state_34952;
var statearr_34984_37180 = state_34952__$1;
(statearr_34984_37180[(2)] = inst_34874);

(statearr_34984_37180[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (31))){
var inst_34900 = (state_34952[(10)]);
var inst_34904 = done(null);
var inst_34905 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34900);
var state_34952__$1 = (function (){var statearr_34986 = state_34952;
(statearr_34986[(19)] = inst_34904);

return statearr_34986;
})();
var statearr_34987_37181 = state_34952__$1;
(statearr_34987_37181[(2)] = inst_34905);

(statearr_34987_37181[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (32))){
var inst_34895 = (state_34952[(9)]);
var inst_34892 = (state_34952[(20)]);
var inst_34893 = (state_34952[(12)]);
var inst_34894 = (state_34952[(21)]);
var inst_34907 = (state_34952[(2)]);
var inst_34908 = (inst_34895 + (1));
var tmp34981 = inst_34892;
var tmp34982 = inst_34893;
var tmp34983 = inst_34894;
var inst_34892__$1 = tmp34981;
var inst_34893__$1 = tmp34982;
var inst_34894__$1 = tmp34983;
var inst_34895__$1 = inst_34908;
var state_34952__$1 = (function (){var statearr_34992 = state_34952;
(statearr_34992[(9)] = inst_34895__$1);

(statearr_34992[(20)] = inst_34892__$1);

(statearr_34992[(22)] = inst_34907);

(statearr_34992[(12)] = inst_34893__$1);

(statearr_34992[(21)] = inst_34894__$1);

return statearr_34992;
})();
var statearr_34993_37192 = state_34952__$1;
(statearr_34993_37192[(2)] = null);

(statearr_34993_37192[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (40))){
var inst_34920 = (state_34952[(23)]);
var inst_34924 = done(null);
var inst_34925 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34920);
var state_34952__$1 = (function (){var statearr_34994 = state_34952;
(statearr_34994[(24)] = inst_34924);

return statearr_34994;
})();
var statearr_34995_37197 = state_34952__$1;
(statearr_34995_37197[(2)] = inst_34925);

(statearr_34995_37197[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (33))){
var inst_34911 = (state_34952[(25)]);
var inst_34913 = cljs.core.chunked_seq_QMARK_(inst_34911);
var state_34952__$1 = state_34952;
if(inst_34913){
var statearr_34996_37204 = state_34952__$1;
(statearr_34996_37204[(1)] = (36));

} else {
var statearr_34997_37205 = state_34952__$1;
(statearr_34997_37205[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (13))){
var inst_34838 = (state_34952[(26)]);
var inst_34841 = cljs.core.async.close_BANG_(inst_34838);
var state_34952__$1 = state_34952;
var statearr_34998_37207 = state_34952__$1;
(statearr_34998_37207[(2)] = inst_34841);

(statearr_34998_37207[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (22))){
var inst_34864 = (state_34952[(8)]);
var inst_34867 = cljs.core.async.close_BANG_(inst_34864);
var state_34952__$1 = state_34952;
var statearr_34999_37211 = state_34952__$1;
(statearr_34999_37211[(2)] = inst_34867);

(statearr_34999_37211[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (36))){
var inst_34911 = (state_34952[(25)]);
var inst_34915 = cljs.core.chunk_first(inst_34911);
var inst_34916 = cljs.core.chunk_rest(inst_34911);
var inst_34917 = cljs.core.count(inst_34915);
var inst_34892 = inst_34916;
var inst_34893 = inst_34915;
var inst_34894 = inst_34917;
var inst_34895 = (0);
var state_34952__$1 = (function (){var statearr_35000 = state_34952;
(statearr_35000[(9)] = inst_34895);

(statearr_35000[(20)] = inst_34892);

(statearr_35000[(12)] = inst_34893);

(statearr_35000[(21)] = inst_34894);

return statearr_35000;
})();
var statearr_35001_37221 = state_34952__$1;
(statearr_35001_37221[(2)] = null);

(statearr_35001_37221[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (41))){
var inst_34911 = (state_34952[(25)]);
var inst_34927 = (state_34952[(2)]);
var inst_34928 = cljs.core.next(inst_34911);
var inst_34892 = inst_34928;
var inst_34893 = null;
var inst_34894 = (0);
var inst_34895 = (0);
var state_34952__$1 = (function (){var statearr_35005 = state_34952;
(statearr_35005[(27)] = inst_34927);

(statearr_35005[(9)] = inst_34895);

(statearr_35005[(20)] = inst_34892);

(statearr_35005[(12)] = inst_34893);

(statearr_35005[(21)] = inst_34894);

return statearr_35005;
})();
var statearr_35006_37232 = state_34952__$1;
(statearr_35006_37232[(2)] = null);

(statearr_35006_37232[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (43))){
var state_34952__$1 = state_34952;
var statearr_35007_37236 = state_34952__$1;
(statearr_35007_37236[(2)] = null);

(statearr_35007_37236[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (29))){
var inst_34936 = (state_34952[(2)]);
var state_34952__$1 = state_34952;
var statearr_35011_37237 = state_34952__$1;
(statearr_35011_37237[(2)] = inst_34936);

(statearr_35011_37237[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (44))){
var inst_34945 = (state_34952[(2)]);
var state_34952__$1 = (function (){var statearr_35012 = state_34952;
(statearr_35012[(28)] = inst_34945);

return statearr_35012;
})();
var statearr_35013_37242 = state_34952__$1;
(statearr_35013_37242[(2)] = null);

(statearr_35013_37242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (6))){
var inst_34884 = (state_34952[(29)]);
var inst_34883 = cljs.core.deref(cs);
var inst_34884__$1 = cljs.core.keys(inst_34883);
var inst_34885 = cljs.core.count(inst_34884__$1);
var inst_34886 = cljs.core.reset_BANG_(dctr,inst_34885);
var inst_34891 = cljs.core.seq(inst_34884__$1);
var inst_34892 = inst_34891;
var inst_34893 = null;
var inst_34894 = (0);
var inst_34895 = (0);
var state_34952__$1 = (function (){var statearr_35014 = state_34952;
(statearr_35014[(9)] = inst_34895);

(statearr_35014[(30)] = inst_34886);

(statearr_35014[(20)] = inst_34892);

(statearr_35014[(12)] = inst_34893);

(statearr_35014[(29)] = inst_34884__$1);

(statearr_35014[(21)] = inst_34894);

return statearr_35014;
})();
var statearr_35015_37245 = state_34952__$1;
(statearr_35015_37245[(2)] = null);

(statearr_35015_37245[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (28))){
var inst_34892 = (state_34952[(20)]);
var inst_34911 = (state_34952[(25)]);
var inst_34911__$1 = cljs.core.seq(inst_34892);
var state_34952__$1 = (function (){var statearr_35016 = state_34952;
(statearr_35016[(25)] = inst_34911__$1);

return statearr_35016;
})();
if(inst_34911__$1){
var statearr_35017_37251 = state_34952__$1;
(statearr_35017_37251[(1)] = (33));

} else {
var statearr_35018_37252 = state_34952__$1;
(statearr_35018_37252[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (25))){
var inst_34895 = (state_34952[(9)]);
var inst_34894 = (state_34952[(21)]);
var inst_34897 = (inst_34895 < inst_34894);
var inst_34898 = inst_34897;
var state_34952__$1 = state_34952;
if(cljs.core.truth_(inst_34898)){
var statearr_35019_37254 = state_34952__$1;
(statearr_35019_37254[(1)] = (27));

} else {
var statearr_35020_37255 = state_34952__$1;
(statearr_35020_37255[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (34))){
var state_34952__$1 = state_34952;
var statearr_35021_37259 = state_34952__$1;
(statearr_35021_37259[(2)] = null);

(statearr_35021_37259[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (17))){
var state_34952__$1 = state_34952;
var statearr_35022_37261 = state_34952__$1;
(statearr_35022_37261[(2)] = null);

(statearr_35022_37261[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (3))){
var inst_34950 = (state_34952[(2)]);
var state_34952__$1 = state_34952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34952__$1,inst_34950);
} else {
if((state_val_34953 === (12))){
var inst_34879 = (state_34952[(2)]);
var state_34952__$1 = state_34952;
var statearr_35023_37263 = state_34952__$1;
(statearr_35023_37263[(2)] = inst_34879);

(statearr_35023_37263[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (2))){
var state_34952__$1 = state_34952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34952__$1,(4),ch);
} else {
if((state_val_34953 === (23))){
var state_34952__$1 = state_34952;
var statearr_35024_37268 = state_34952__$1;
(statearr_35024_37268[(2)] = null);

(statearr_35024_37268[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (35))){
var inst_34934 = (state_34952[(2)]);
var state_34952__$1 = state_34952;
var statearr_35025_37273 = state_34952__$1;
(statearr_35025_37273[(2)] = inst_34934);

(statearr_35025_37273[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (19))){
var inst_34848 = (state_34952[(7)]);
var inst_34852 = cljs.core.chunk_first(inst_34848);
var inst_34853 = cljs.core.chunk_rest(inst_34848);
var inst_34854 = cljs.core.count(inst_34852);
var inst_34823 = inst_34853;
var inst_34824 = inst_34852;
var inst_34825 = inst_34854;
var inst_34826 = (0);
var state_34952__$1 = (function (){var statearr_35026 = state_34952;
(statearr_35026[(13)] = inst_34826);

(statearr_35026[(15)] = inst_34824);

(statearr_35026[(16)] = inst_34823);

(statearr_35026[(17)] = inst_34825);

return statearr_35026;
})();
var statearr_35027_37282 = state_34952__$1;
(statearr_35027_37282[(2)] = null);

(statearr_35027_37282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (11))){
var inst_34848 = (state_34952[(7)]);
var inst_34823 = (state_34952[(16)]);
var inst_34848__$1 = cljs.core.seq(inst_34823);
var state_34952__$1 = (function (){var statearr_35028 = state_34952;
(statearr_35028[(7)] = inst_34848__$1);

return statearr_35028;
})();
if(inst_34848__$1){
var statearr_35029_37287 = state_34952__$1;
(statearr_35029_37287[(1)] = (16));

} else {
var statearr_35030_37288 = state_34952__$1;
(statearr_35030_37288[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (9))){
var inst_34881 = (state_34952[(2)]);
var state_34952__$1 = state_34952;
var statearr_35031_37293 = state_34952__$1;
(statearr_35031_37293[(2)] = inst_34881);

(statearr_35031_37293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (5))){
var inst_34821 = cljs.core.deref(cs);
var inst_34822 = cljs.core.seq(inst_34821);
var inst_34823 = inst_34822;
var inst_34824 = null;
var inst_34825 = (0);
var inst_34826 = (0);
var state_34952__$1 = (function (){var statearr_35032 = state_34952;
(statearr_35032[(13)] = inst_34826);

(statearr_35032[(15)] = inst_34824);

(statearr_35032[(16)] = inst_34823);

(statearr_35032[(17)] = inst_34825);

return statearr_35032;
})();
var statearr_35033_37299 = state_34952__$1;
(statearr_35033_37299[(2)] = null);

(statearr_35033_37299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (14))){
var state_34952__$1 = state_34952;
var statearr_35034_37303 = state_34952__$1;
(statearr_35034_37303[(2)] = null);

(statearr_35034_37303[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (45))){
var inst_34942 = (state_34952[(2)]);
var state_34952__$1 = state_34952;
var statearr_35035_37308 = state_34952__$1;
(statearr_35035_37308[(2)] = inst_34942);

(statearr_35035_37308[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (26))){
var inst_34884 = (state_34952[(29)]);
var inst_34938 = (state_34952[(2)]);
var inst_34939 = cljs.core.seq(inst_34884);
var state_34952__$1 = (function (){var statearr_35036 = state_34952;
(statearr_35036[(31)] = inst_34938);

return statearr_35036;
})();
if(inst_34939){
var statearr_35037_37313 = state_34952__$1;
(statearr_35037_37313[(1)] = (42));

} else {
var statearr_35038_37314 = state_34952__$1;
(statearr_35038_37314[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (16))){
var inst_34848 = (state_34952[(7)]);
var inst_34850 = cljs.core.chunked_seq_QMARK_(inst_34848);
var state_34952__$1 = state_34952;
if(inst_34850){
var statearr_35039_37315 = state_34952__$1;
(statearr_35039_37315[(1)] = (19));

} else {
var statearr_35040_37316 = state_34952__$1;
(statearr_35040_37316[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (38))){
var inst_34931 = (state_34952[(2)]);
var state_34952__$1 = state_34952;
var statearr_35041_37317 = state_34952__$1;
(statearr_35041_37317[(2)] = inst_34931);

(statearr_35041_37317[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (30))){
var state_34952__$1 = state_34952;
var statearr_35042_37320 = state_34952__$1;
(statearr_35042_37320[(2)] = null);

(statearr_35042_37320[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (10))){
var inst_34826 = (state_34952[(13)]);
var inst_34824 = (state_34952[(15)]);
var inst_34837 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34824,inst_34826);
var inst_34838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34837,(0),null);
var inst_34839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34837,(1),null);
var state_34952__$1 = (function (){var statearr_35043 = state_34952;
(statearr_35043[(26)] = inst_34838);

return statearr_35043;
})();
if(cljs.core.truth_(inst_34839)){
var statearr_35044_37325 = state_34952__$1;
(statearr_35044_37325[(1)] = (13));

} else {
var statearr_35045_37326 = state_34952__$1;
(statearr_35045_37326[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (18))){
var inst_34877 = (state_34952[(2)]);
var state_34952__$1 = state_34952;
var statearr_35046_37327 = state_34952__$1;
(statearr_35046_37327[(2)] = inst_34877);

(statearr_35046_37327[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (42))){
var state_34952__$1 = state_34952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34952__$1,(45),dchan);
} else {
if((state_val_34953 === (37))){
var inst_34920 = (state_34952[(23)]);
var inst_34814 = (state_34952[(11)]);
var inst_34911 = (state_34952[(25)]);
var inst_34920__$1 = cljs.core.first(inst_34911);
var inst_34921 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34920__$1,inst_34814,done);
var state_34952__$1 = (function (){var statearr_35047 = state_34952;
(statearr_35047[(23)] = inst_34920__$1);

return statearr_35047;
})();
if(cljs.core.truth_(inst_34921)){
var statearr_35048_37334 = state_34952__$1;
(statearr_35048_37334[(1)] = (39));

} else {
var statearr_35049_37338 = state_34952__$1;
(statearr_35049_37338[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34953 === (8))){
var inst_34826 = (state_34952[(13)]);
var inst_34825 = (state_34952[(17)]);
var inst_34828 = (inst_34826 < inst_34825);
var inst_34829 = inst_34828;
var state_34952__$1 = state_34952;
if(cljs.core.truth_(inst_34829)){
var statearr_35050_37341 = state_34952__$1;
(statearr_35050_37341[(1)] = (10));

} else {
var statearr_35051_37344 = state_34952__$1;
(statearr_35051_37344[(1)] = (11));

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
var statearr_35052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35052[(0)] = cljs$core$async$mult_$_state_machine__34200__auto__);

(statearr_35052[(1)] = (1));

return statearr_35052;
});
var cljs$core$async$mult_$_state_machine__34200__auto____1 = (function (state_34952){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34952);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e35053){if((e35053 instanceof Object)){
var ex__34203__auto__ = e35053;
var statearr_35054_37358 = state_34952;
(statearr_35054_37358[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35053;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37359 = state_34952;
state_34952 = G__37359;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34200__auto__ = function(state_34952){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34200__auto____1.call(this,state_34952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34200__auto____0;
cljs$core$async$mult_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34200__auto____1;
return cljs$core$async$mult_$_state_machine__34200__auto__;
})()
})();
var state__34267__auto__ = (function (){var statearr_35055 = (f__34266__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34266__auto__.cljs$core$IFn$_invoke$arity$0() : f__34266__auto__.call(null));
(statearr_35055[(6)] = c__34265__auto___37135);

return statearr_35055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34267__auto__);
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
var G__35057 = arguments.length;
switch (G__35057) {
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
var len__4789__auto___37410 = arguments.length;
var i__4790__auto___37411 = (0);
while(true){
if((i__4790__auto___37411 < len__4789__auto___37410)){
args__4795__auto__.push((arguments[i__4790__auto___37411]));

var G__37412 = (i__4790__auto___37411 + (1));
i__4790__auto___37411 = G__37412;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35077){
var map__35078 = p__35077;
var map__35078__$1 = (((((!((map__35078 == null))))?(((((map__35078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35078):map__35078);
var opts = map__35078__$1;
var statearr_35082_37417 = state;
(statearr_35082_37417[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35084_37420 = state;
(statearr_35084_37420[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35085_37425 = state;
(statearr_35085_37425[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35070){
var G__35071 = cljs.core.first(seq35070);
var seq35070__$1 = cljs.core.next(seq35070);
var G__35072 = cljs.core.first(seq35070__$1);
var seq35070__$2 = cljs.core.next(seq35070__$1);
var G__35073 = cljs.core.first(seq35070__$2);
var seq35070__$3 = cljs.core.next(seq35070__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35071,G__35072,G__35073,seq35070__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35095 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35095 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35096){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35096 = meta35096;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35097,meta35096__$1){
var self__ = this;
var _35097__$1 = this;
return (new cljs.core.async.t_cljs$core$async35095(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35096__$1));
}));

(cljs.core.async.t_cljs$core$async35095.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35097){
var self__ = this;
var _35097__$1 = this;
return self__.meta35096;
}));

(cljs.core.async.t_cljs$core$async35095.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35095.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35095.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35095.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35095.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35095.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35095.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35095.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35095.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35096","meta35096",-867121923,null)], null);
}));

(cljs.core.async.t_cljs$core$async35095.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35095.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35095");

(cljs.core.async.t_cljs$core$async35095.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35095");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35095.
 */
cljs.core.async.__GT_t_cljs$core$async35095 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35095(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35096){
return (new cljs.core.async.t_cljs$core$async35095(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35096));
});

}

return (new cljs.core.async.t_cljs$core$async35095(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34265__auto___37465 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34266__auto__ = (function (){var switch__34199__auto__ = (function (state_35291){
var state_val_35292 = (state_35291[(1)]);
if((state_val_35292 === (7))){
var inst_35166 = (state_35291[(2)]);
var state_35291__$1 = state_35291;
var statearr_35299_37468 = state_35291__$1;
(statearr_35299_37468[(2)] = inst_35166);

(statearr_35299_37468[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (20))){
var inst_35179 = (state_35291[(7)]);
var state_35291__$1 = state_35291;
var statearr_35300_37477 = state_35291__$1;
(statearr_35300_37477[(2)] = inst_35179);

(statearr_35300_37477[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (27))){
var state_35291__$1 = state_35291;
var statearr_35301_37480 = state_35291__$1;
(statearr_35301_37480[(2)] = null);

(statearr_35301_37480[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (1))){
var inst_35148 = (state_35291[(8)]);
var inst_35148__$1 = calc_state();
var inst_35151 = (inst_35148__$1 == null);
var inst_35152 = cljs.core.not(inst_35151);
var state_35291__$1 = (function (){var statearr_35302 = state_35291;
(statearr_35302[(8)] = inst_35148__$1);

return statearr_35302;
})();
if(inst_35152){
var statearr_35303_37483 = state_35291__$1;
(statearr_35303_37483[(1)] = (2));

} else {
var statearr_35306_37484 = state_35291__$1;
(statearr_35306_37484[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (24))){
var inst_35211 = (state_35291[(9)]);
var inst_35255 = (state_35291[(10)]);
var inst_35224 = (state_35291[(11)]);
var inst_35255__$1 = (inst_35211.cljs$core$IFn$_invoke$arity$1 ? inst_35211.cljs$core$IFn$_invoke$arity$1(inst_35224) : inst_35211.call(null,inst_35224));
var state_35291__$1 = (function (){var statearr_35307 = state_35291;
(statearr_35307[(10)] = inst_35255__$1);

return statearr_35307;
})();
if(cljs.core.truth_(inst_35255__$1)){
var statearr_35308_37492 = state_35291__$1;
(statearr_35308_37492[(1)] = (29));

} else {
var statearr_35309_37496 = state_35291__$1;
(statearr_35309_37496[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (4))){
var inst_35169 = (state_35291[(2)]);
var state_35291__$1 = state_35291;
if(cljs.core.truth_(inst_35169)){
var statearr_35312_37499 = state_35291__$1;
(statearr_35312_37499[(1)] = (8));

} else {
var statearr_35323_37501 = state_35291__$1;
(statearr_35323_37501[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (15))){
var inst_35203 = (state_35291[(2)]);
var state_35291__$1 = state_35291;
if(cljs.core.truth_(inst_35203)){
var statearr_35337_37503 = state_35291__$1;
(statearr_35337_37503[(1)] = (19));

} else {
var statearr_35338_37504 = state_35291__$1;
(statearr_35338_37504[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (21))){
var inst_35210 = (state_35291[(12)]);
var inst_35210__$1 = (state_35291[(2)]);
var inst_35211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35210__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35210__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35213 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35210__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35291__$1 = (function (){var statearr_35341 = state_35291;
(statearr_35341[(13)] = inst_35212);

(statearr_35341[(9)] = inst_35211);

(statearr_35341[(12)] = inst_35210__$1);

return statearr_35341;
})();
return cljs.core.async.ioc_alts_BANG_(state_35291__$1,(22),inst_35213);
} else {
if((state_val_35292 === (31))){
var inst_35265 = (state_35291[(2)]);
var state_35291__$1 = state_35291;
if(cljs.core.truth_(inst_35265)){
var statearr_35344_37513 = state_35291__$1;
(statearr_35344_37513[(1)] = (32));

} else {
var statearr_35345_37516 = state_35291__$1;
(statearr_35345_37516[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (32))){
var inst_35223 = (state_35291[(14)]);
var state_35291__$1 = state_35291;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35291__$1,(35),out,inst_35223);
} else {
if((state_val_35292 === (33))){
var inst_35210 = (state_35291[(12)]);
var inst_35179 = inst_35210;
var state_35291__$1 = (function (){var statearr_35347 = state_35291;
(statearr_35347[(7)] = inst_35179);

return statearr_35347;
})();
var statearr_35348_37522 = state_35291__$1;
(statearr_35348_37522[(2)] = null);

(statearr_35348_37522[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (13))){
var inst_35179 = (state_35291[(7)]);
var inst_35191 = inst_35179.cljs$lang$protocol_mask$partition0$;
var inst_35192 = (inst_35191 & (64));
var inst_35193 = inst_35179.cljs$core$ISeq$;
var inst_35194 = (cljs.core.PROTOCOL_SENTINEL === inst_35193);
var inst_35196 = ((inst_35192) || (inst_35194));
var state_35291__$1 = state_35291;
if(cljs.core.truth_(inst_35196)){
var statearr_35356_37529 = state_35291__$1;
(statearr_35356_37529[(1)] = (16));

} else {
var statearr_35358_37531 = state_35291__$1;
(statearr_35358_37531[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (22))){
var inst_35224 = (state_35291[(11)]);
var inst_35223 = (state_35291[(14)]);
var inst_35222 = (state_35291[(2)]);
var inst_35223__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35222,(0),null);
var inst_35224__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35222,(1),null);
var inst_35226 = (inst_35223__$1 == null);
var inst_35228 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35224__$1,change);
var inst_35229 = ((inst_35226) || (inst_35228));
var state_35291__$1 = (function (){var statearr_35365 = state_35291;
(statearr_35365[(11)] = inst_35224__$1);

(statearr_35365[(14)] = inst_35223__$1);

return statearr_35365;
})();
if(cljs.core.truth_(inst_35229)){
var statearr_35371_37539 = state_35291__$1;
(statearr_35371_37539[(1)] = (23));

} else {
var statearr_35373_37541 = state_35291__$1;
(statearr_35373_37541[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (36))){
var inst_35210 = (state_35291[(12)]);
var inst_35179 = inst_35210;
var state_35291__$1 = (function (){var statearr_35380 = state_35291;
(statearr_35380[(7)] = inst_35179);

return statearr_35380;
})();
var statearr_35382_37543 = state_35291__$1;
(statearr_35382_37543[(2)] = null);

(statearr_35382_37543[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (29))){
var inst_35255 = (state_35291[(10)]);
var state_35291__$1 = state_35291;
var statearr_35384_37545 = state_35291__$1;
(statearr_35384_37545[(2)] = inst_35255);

(statearr_35384_37545[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (6))){
var state_35291__$1 = state_35291;
var statearr_35391_37551 = state_35291__$1;
(statearr_35391_37551[(2)] = false);

(statearr_35391_37551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (28))){
var inst_35248 = (state_35291[(2)]);
var inst_35249 = calc_state();
var inst_35179 = inst_35249;
var state_35291__$1 = (function (){var statearr_35396 = state_35291;
(statearr_35396[(7)] = inst_35179);

(statearr_35396[(15)] = inst_35248);

return statearr_35396;
})();
var statearr_35402_37555 = state_35291__$1;
(statearr_35402_37555[(2)] = null);

(statearr_35402_37555[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (25))){
var inst_35282 = (state_35291[(2)]);
var state_35291__$1 = state_35291;
var statearr_35411_37556 = state_35291__$1;
(statearr_35411_37556[(2)] = inst_35282);

(statearr_35411_37556[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (34))){
var inst_35280 = (state_35291[(2)]);
var state_35291__$1 = state_35291;
var statearr_35418_37566 = state_35291__$1;
(statearr_35418_37566[(2)] = inst_35280);

(statearr_35418_37566[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (17))){
var state_35291__$1 = state_35291;
var statearr_35423_37569 = state_35291__$1;
(statearr_35423_37569[(2)] = false);

(statearr_35423_37569[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (3))){
var state_35291__$1 = state_35291;
var statearr_35431_37571 = state_35291__$1;
(statearr_35431_37571[(2)] = false);

(statearr_35431_37571[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (12))){
var inst_35284 = (state_35291[(2)]);
var state_35291__$1 = state_35291;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35291__$1,inst_35284);
} else {
if((state_val_35292 === (2))){
var inst_35148 = (state_35291[(8)]);
var inst_35157 = inst_35148.cljs$lang$protocol_mask$partition0$;
var inst_35158 = (inst_35157 & (64));
var inst_35159 = inst_35148.cljs$core$ISeq$;
var inst_35160 = (cljs.core.PROTOCOL_SENTINEL === inst_35159);
var inst_35161 = ((inst_35158) || (inst_35160));
var state_35291__$1 = state_35291;
if(cljs.core.truth_(inst_35161)){
var statearr_35444_37580 = state_35291__$1;
(statearr_35444_37580[(1)] = (5));

} else {
var statearr_35445_37582 = state_35291__$1;
(statearr_35445_37582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (23))){
var inst_35223 = (state_35291[(14)]);
var inst_35233 = (inst_35223 == null);
var state_35291__$1 = state_35291;
if(cljs.core.truth_(inst_35233)){
var statearr_35451_37584 = state_35291__$1;
(statearr_35451_37584[(1)] = (26));

} else {
var statearr_35453_37585 = state_35291__$1;
(statearr_35453_37585[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (35))){
var inst_35269 = (state_35291[(2)]);
var state_35291__$1 = state_35291;
if(cljs.core.truth_(inst_35269)){
var statearr_35459_37591 = state_35291__$1;
(statearr_35459_37591[(1)] = (36));

} else {
var statearr_35461_37596 = state_35291__$1;
(statearr_35461_37596[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (19))){
var inst_35179 = (state_35291[(7)]);
var inst_35207 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35179);
var state_35291__$1 = state_35291;
var statearr_35467_37599 = state_35291__$1;
(statearr_35467_37599[(2)] = inst_35207);

(statearr_35467_37599[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (11))){
var inst_35179 = (state_35291[(7)]);
var inst_35186 = (inst_35179 == null);
var inst_35187 = cljs.core.not(inst_35186);
var state_35291__$1 = state_35291;
if(inst_35187){
var statearr_35473_37602 = state_35291__$1;
(statearr_35473_37602[(1)] = (13));

} else {
var statearr_35475_37603 = state_35291__$1;
(statearr_35475_37603[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (9))){
var inst_35148 = (state_35291[(8)]);
var state_35291__$1 = state_35291;
var statearr_35482_37609 = state_35291__$1;
(statearr_35482_37609[(2)] = inst_35148);

(statearr_35482_37609[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (5))){
var state_35291__$1 = state_35291;
var statearr_35486_37613 = state_35291__$1;
(statearr_35486_37613[(2)] = true);

(statearr_35486_37613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (14))){
var state_35291__$1 = state_35291;
var statearr_35488_37615 = state_35291__$1;
(statearr_35488_37615[(2)] = false);

(statearr_35488_37615[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (26))){
var inst_35224 = (state_35291[(11)]);
var inst_35245 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35224);
var state_35291__$1 = state_35291;
var statearr_35500_37621 = state_35291__$1;
(statearr_35500_37621[(2)] = inst_35245);

(statearr_35500_37621[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (16))){
var state_35291__$1 = state_35291;
var statearr_35507_37628 = state_35291__$1;
(statearr_35507_37628[(2)] = true);

(statearr_35507_37628[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (38))){
var inst_35276 = (state_35291[(2)]);
var state_35291__$1 = state_35291;
var statearr_35515_37630 = state_35291__$1;
(statearr_35515_37630[(2)] = inst_35276);

(statearr_35515_37630[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (30))){
var inst_35212 = (state_35291[(13)]);
var inst_35211 = (state_35291[(9)]);
var inst_35224 = (state_35291[(11)]);
var inst_35260 = cljs.core.empty_QMARK_(inst_35211);
var inst_35261 = (inst_35212.cljs$core$IFn$_invoke$arity$1 ? inst_35212.cljs$core$IFn$_invoke$arity$1(inst_35224) : inst_35212.call(null,inst_35224));
var inst_35262 = cljs.core.not(inst_35261);
var inst_35263 = ((inst_35260) && (inst_35262));
var state_35291__$1 = state_35291;
var statearr_35516_37638 = state_35291__$1;
(statearr_35516_37638[(2)] = inst_35263);

(statearr_35516_37638[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (10))){
var inst_35148 = (state_35291[(8)]);
var inst_35174 = (state_35291[(2)]);
var inst_35175 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35174,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35174,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35178 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35174,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35179 = inst_35148;
var state_35291__$1 = (function (){var statearr_35517 = state_35291;
(statearr_35517[(16)] = inst_35177);

(statearr_35517[(7)] = inst_35179);

(statearr_35517[(17)] = inst_35175);

(statearr_35517[(18)] = inst_35178);

return statearr_35517;
})();
var statearr_35518_37647 = state_35291__$1;
(statearr_35518_37647[(2)] = null);

(statearr_35518_37647[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (18))){
var inst_35200 = (state_35291[(2)]);
var state_35291__$1 = state_35291;
var statearr_35519_37654 = state_35291__$1;
(statearr_35519_37654[(2)] = inst_35200);

(statearr_35519_37654[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (37))){
var state_35291__$1 = state_35291;
var statearr_35520_37655 = state_35291__$1;
(statearr_35520_37655[(2)] = null);

(statearr_35520_37655[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (8))){
var inst_35148 = (state_35291[(8)]);
var inst_35171 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35148);
var state_35291__$1 = state_35291;
var statearr_35521_37658 = state_35291__$1;
(statearr_35521_37658[(2)] = inst_35171);

(statearr_35521_37658[(1)] = (10));


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
var statearr_35524 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35524[(0)] = cljs$core$async$mix_$_state_machine__34200__auto__);

(statearr_35524[(1)] = (1));

return statearr_35524;
});
var cljs$core$async$mix_$_state_machine__34200__auto____1 = (function (state_35291){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_35291);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e35525){if((e35525 instanceof Object)){
var ex__34203__auto__ = e35525;
var statearr_35526_37668 = state_35291;
(statearr_35526_37668[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35525;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37674 = state_35291;
state_35291 = G__37674;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34200__auto__ = function(state_35291){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34200__auto____1.call(this,state_35291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34200__auto____0;
cljs$core$async$mix_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34200__auto____1;
return cljs$core$async$mix_$_state_machine__34200__auto__;
})()
})();
var state__34267__auto__ = (function (){var statearr_35527 = (f__34266__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34266__auto__.cljs$core$IFn$_invoke$arity$0() : f__34266__auto__.call(null));
(statearr_35527[(6)] = c__34265__auto___37465);

return statearr_35527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34267__auto__);
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
var G__35573 = arguments.length;
switch (G__35573) {
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
var G__35615 = arguments.length;
switch (G__35615) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35609_SHARP_){
if(cljs.core.truth_((p1__35609_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35609_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35609_SHARP_.call(null,topic)))){
return p1__35609_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35609_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35632 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35632 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35633){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35633 = meta35633;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35634,meta35633__$1){
var self__ = this;
var _35634__$1 = this;
return (new cljs.core.async.t_cljs$core$async35632(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35633__$1));
}));

(cljs.core.async.t_cljs$core$async35632.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35634){
var self__ = this;
var _35634__$1 = this;
return self__.meta35633;
}));

(cljs.core.async.t_cljs$core$async35632.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35632.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35632.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35632.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35632.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35632.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35632.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35632.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35633","meta35633",32709540,null)], null);
}));

(cljs.core.async.t_cljs$core$async35632.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35632.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35632");

(cljs.core.async.t_cljs$core$async35632.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35632");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35632.
 */
cljs.core.async.__GT_t_cljs$core$async35632 = (function cljs$core$async$__GT_t_cljs$core$async35632(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35633){
return (new cljs.core.async.t_cljs$core$async35632(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35633));
});

}

return (new cljs.core.async.t_cljs$core$async35632(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34265__auto___37731 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34266__auto__ = (function (){var switch__34199__auto__ = (function (state_35807){
var state_val_35808 = (state_35807[(1)]);
if((state_val_35808 === (7))){
var inst_35803 = (state_35807[(2)]);
var state_35807__$1 = state_35807;
var statearr_35809_37735 = state_35807__$1;
(statearr_35809_37735[(2)] = inst_35803);

(statearr_35809_37735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (20))){
var state_35807__$1 = state_35807;
var statearr_35812_37737 = state_35807__$1;
(statearr_35812_37737[(2)] = null);

(statearr_35812_37737[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (1))){
var state_35807__$1 = state_35807;
var statearr_35813_37739 = state_35807__$1;
(statearr_35813_37739[(2)] = null);

(statearr_35813_37739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (24))){
var inst_35786 = (state_35807[(7)]);
var inst_35795 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35786);
var state_35807__$1 = state_35807;
var statearr_35814_37745 = state_35807__$1;
(statearr_35814_37745[(2)] = inst_35795);

(statearr_35814_37745[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (4))){
var inst_35736 = (state_35807[(8)]);
var inst_35736__$1 = (state_35807[(2)]);
var inst_35737 = (inst_35736__$1 == null);
var state_35807__$1 = (function (){var statearr_35815 = state_35807;
(statearr_35815[(8)] = inst_35736__$1);

return statearr_35815;
})();
if(cljs.core.truth_(inst_35737)){
var statearr_35818_37751 = state_35807__$1;
(statearr_35818_37751[(1)] = (5));

} else {
var statearr_35819_37752 = state_35807__$1;
(statearr_35819_37752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (15))){
var inst_35780 = (state_35807[(2)]);
var state_35807__$1 = state_35807;
var statearr_35821_37754 = state_35807__$1;
(statearr_35821_37754[(2)] = inst_35780);

(statearr_35821_37754[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (21))){
var inst_35800 = (state_35807[(2)]);
var state_35807__$1 = (function (){var statearr_35823 = state_35807;
(statearr_35823[(9)] = inst_35800);

return statearr_35823;
})();
var statearr_35824_37762 = state_35807__$1;
(statearr_35824_37762[(2)] = null);

(statearr_35824_37762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (13))){
var inst_35760 = (state_35807[(10)]);
var inst_35764 = cljs.core.chunked_seq_QMARK_(inst_35760);
var state_35807__$1 = state_35807;
if(inst_35764){
var statearr_35827_37764 = state_35807__$1;
(statearr_35827_37764[(1)] = (16));

} else {
var statearr_35829_37765 = state_35807__$1;
(statearr_35829_37765[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (22))){
var inst_35792 = (state_35807[(2)]);
var state_35807__$1 = state_35807;
if(cljs.core.truth_(inst_35792)){
var statearr_35831_37772 = state_35807__$1;
(statearr_35831_37772[(1)] = (23));

} else {
var statearr_35832_37774 = state_35807__$1;
(statearr_35832_37774[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (6))){
var inst_35736 = (state_35807[(8)]);
var inst_35788 = (state_35807[(11)]);
var inst_35786 = (state_35807[(7)]);
var inst_35786__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35736) : topic_fn.call(null,inst_35736));
var inst_35787 = cljs.core.deref(mults);
var inst_35788__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35787,inst_35786__$1);
var state_35807__$1 = (function (){var statearr_35833 = state_35807;
(statearr_35833[(11)] = inst_35788__$1);

(statearr_35833[(7)] = inst_35786__$1);

return statearr_35833;
})();
if(cljs.core.truth_(inst_35788__$1)){
var statearr_35834_37781 = state_35807__$1;
(statearr_35834_37781[(1)] = (19));

} else {
var statearr_35835_37782 = state_35807__$1;
(statearr_35835_37782[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (25))){
var inst_35797 = (state_35807[(2)]);
var state_35807__$1 = state_35807;
var statearr_35837_37786 = state_35807__$1;
(statearr_35837_37786[(2)] = inst_35797);

(statearr_35837_37786[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (17))){
var inst_35760 = (state_35807[(10)]);
var inst_35771 = cljs.core.first(inst_35760);
var inst_35772 = cljs.core.async.muxch_STAR_(inst_35771);
var inst_35773 = cljs.core.async.close_BANG_(inst_35772);
var inst_35774 = cljs.core.next(inst_35760);
var inst_35746 = inst_35774;
var inst_35747 = null;
var inst_35748 = (0);
var inst_35749 = (0);
var state_35807__$1 = (function (){var statearr_35841 = state_35807;
(statearr_35841[(12)] = inst_35749);

(statearr_35841[(13)] = inst_35773);

(statearr_35841[(14)] = inst_35746);

(statearr_35841[(15)] = inst_35747);

(statearr_35841[(16)] = inst_35748);

return statearr_35841;
})();
var statearr_35842_37790 = state_35807__$1;
(statearr_35842_37790[(2)] = null);

(statearr_35842_37790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (3))){
var inst_35805 = (state_35807[(2)]);
var state_35807__$1 = state_35807;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35807__$1,inst_35805);
} else {
if((state_val_35808 === (12))){
var inst_35782 = (state_35807[(2)]);
var state_35807__$1 = state_35807;
var statearr_35847_37799 = state_35807__$1;
(statearr_35847_37799[(2)] = inst_35782);

(statearr_35847_37799[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (2))){
var state_35807__$1 = state_35807;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35807__$1,(4),ch);
} else {
if((state_val_35808 === (23))){
var state_35807__$1 = state_35807;
var statearr_35849_37801 = state_35807__$1;
(statearr_35849_37801[(2)] = null);

(statearr_35849_37801[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (19))){
var inst_35736 = (state_35807[(8)]);
var inst_35788 = (state_35807[(11)]);
var inst_35790 = cljs.core.async.muxch_STAR_(inst_35788);
var state_35807__$1 = state_35807;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35807__$1,(22),inst_35790,inst_35736);
} else {
if((state_val_35808 === (11))){
var inst_35760 = (state_35807[(10)]);
var inst_35746 = (state_35807[(14)]);
var inst_35760__$1 = cljs.core.seq(inst_35746);
var state_35807__$1 = (function (){var statearr_35851 = state_35807;
(statearr_35851[(10)] = inst_35760__$1);

return statearr_35851;
})();
if(inst_35760__$1){
var statearr_35852_37809 = state_35807__$1;
(statearr_35852_37809[(1)] = (13));

} else {
var statearr_35853_37810 = state_35807__$1;
(statearr_35853_37810[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (9))){
var inst_35784 = (state_35807[(2)]);
var state_35807__$1 = state_35807;
var statearr_35855_37813 = state_35807__$1;
(statearr_35855_37813[(2)] = inst_35784);

(statearr_35855_37813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (5))){
var inst_35743 = cljs.core.deref(mults);
var inst_35744 = cljs.core.vals(inst_35743);
var inst_35745 = cljs.core.seq(inst_35744);
var inst_35746 = inst_35745;
var inst_35747 = null;
var inst_35748 = (0);
var inst_35749 = (0);
var state_35807__$1 = (function (){var statearr_35856 = state_35807;
(statearr_35856[(12)] = inst_35749);

(statearr_35856[(14)] = inst_35746);

(statearr_35856[(15)] = inst_35747);

(statearr_35856[(16)] = inst_35748);

return statearr_35856;
})();
var statearr_35858_37816 = state_35807__$1;
(statearr_35858_37816[(2)] = null);

(statearr_35858_37816[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (14))){
var state_35807__$1 = state_35807;
var statearr_35862_37821 = state_35807__$1;
(statearr_35862_37821[(2)] = null);

(statearr_35862_37821[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (16))){
var inst_35760 = (state_35807[(10)]);
var inst_35766 = cljs.core.chunk_first(inst_35760);
var inst_35767 = cljs.core.chunk_rest(inst_35760);
var inst_35768 = cljs.core.count(inst_35766);
var inst_35746 = inst_35767;
var inst_35747 = inst_35766;
var inst_35748 = inst_35768;
var inst_35749 = (0);
var state_35807__$1 = (function (){var statearr_35864 = state_35807;
(statearr_35864[(12)] = inst_35749);

(statearr_35864[(14)] = inst_35746);

(statearr_35864[(15)] = inst_35747);

(statearr_35864[(16)] = inst_35748);

return statearr_35864;
})();
var statearr_35865_37826 = state_35807__$1;
(statearr_35865_37826[(2)] = null);

(statearr_35865_37826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (10))){
var inst_35749 = (state_35807[(12)]);
var inst_35746 = (state_35807[(14)]);
var inst_35747 = (state_35807[(15)]);
var inst_35748 = (state_35807[(16)]);
var inst_35754 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35747,inst_35749);
var inst_35755 = cljs.core.async.muxch_STAR_(inst_35754);
var inst_35756 = cljs.core.async.close_BANG_(inst_35755);
var inst_35757 = (inst_35749 + (1));
var tmp35859 = inst_35746;
var tmp35860 = inst_35747;
var tmp35861 = inst_35748;
var inst_35746__$1 = tmp35859;
var inst_35747__$1 = tmp35860;
var inst_35748__$1 = tmp35861;
var inst_35749__$1 = inst_35757;
var state_35807__$1 = (function (){var statearr_35867 = state_35807;
(statearr_35867[(12)] = inst_35749__$1);

(statearr_35867[(17)] = inst_35756);

(statearr_35867[(14)] = inst_35746__$1);

(statearr_35867[(15)] = inst_35747__$1);

(statearr_35867[(16)] = inst_35748__$1);

return statearr_35867;
})();
var statearr_35869_37835 = state_35807__$1;
(statearr_35869_37835[(2)] = null);

(statearr_35869_37835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (18))){
var inst_35777 = (state_35807[(2)]);
var state_35807__$1 = state_35807;
var statearr_35875_37837 = state_35807__$1;
(statearr_35875_37837[(2)] = inst_35777);

(statearr_35875_37837[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (8))){
var inst_35749 = (state_35807[(12)]);
var inst_35748 = (state_35807[(16)]);
var inst_35751 = (inst_35749 < inst_35748);
var inst_35752 = inst_35751;
var state_35807__$1 = state_35807;
if(cljs.core.truth_(inst_35752)){
var statearr_35876_37842 = state_35807__$1;
(statearr_35876_37842[(1)] = (10));

} else {
var statearr_35879_37844 = state_35807__$1;
(statearr_35879_37844[(1)] = (11));

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
var statearr_35882 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35882[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_35882[(1)] = (1));

return statearr_35882;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_35807){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_35807);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e35884){if((e35884 instanceof Object)){
var ex__34203__auto__ = e35884;
var statearr_35886_37850 = state_35807;
(statearr_35886_37850[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35884;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37855 = state_35807;
state_35807 = G__37855;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_35807){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_35807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34267__auto__ = (function (){var statearr_35898 = (f__34266__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34266__auto__.cljs$core$IFn$_invoke$arity$0() : f__34266__auto__.call(null));
(statearr_35898[(6)] = c__34265__auto___37731);

return statearr_35898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34267__auto__);
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
var G__35906 = arguments.length;
switch (G__35906) {
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
var G__35913 = arguments.length;
switch (G__35913) {
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
var G__35916 = arguments.length;
switch (G__35916) {
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
var c__34265__auto___37888 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34266__auto__ = (function (){var switch__34199__auto__ = (function (state_35962){
var state_val_35963 = (state_35962[(1)]);
if((state_val_35963 === (7))){
var state_35962__$1 = state_35962;
var statearr_35964_37889 = state_35962__$1;
(statearr_35964_37889[(2)] = null);

(statearr_35964_37889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35963 === (1))){
var state_35962__$1 = state_35962;
var statearr_35965_37891 = state_35962__$1;
(statearr_35965_37891[(2)] = null);

(statearr_35965_37891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35963 === (4))){
var inst_35925 = (state_35962[(7)]);
var inst_35927 = (inst_35925 < cnt);
var state_35962__$1 = state_35962;
if(cljs.core.truth_(inst_35927)){
var statearr_35966_37893 = state_35962__$1;
(statearr_35966_37893[(1)] = (6));

} else {
var statearr_35968_37896 = state_35962__$1;
(statearr_35968_37896[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35963 === (15))){
var inst_35958 = (state_35962[(2)]);
var state_35962__$1 = state_35962;
var statearr_35971_37899 = state_35962__$1;
(statearr_35971_37899[(2)] = inst_35958);

(statearr_35971_37899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35963 === (13))){
var inst_35951 = cljs.core.async.close_BANG_(out);
var state_35962__$1 = state_35962;
var statearr_35975_37901 = state_35962__$1;
(statearr_35975_37901[(2)] = inst_35951);

(statearr_35975_37901[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35963 === (6))){
var state_35962__$1 = state_35962;
var statearr_35976_37904 = state_35962__$1;
(statearr_35976_37904[(2)] = null);

(statearr_35976_37904[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35963 === (3))){
var inst_35960 = (state_35962[(2)]);
var state_35962__$1 = state_35962;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35962__$1,inst_35960);
} else {
if((state_val_35963 === (12))){
var inst_35948 = (state_35962[(8)]);
var inst_35948__$1 = (state_35962[(2)]);
var inst_35949 = cljs.core.some(cljs.core.nil_QMARK_,inst_35948__$1);
var state_35962__$1 = (function (){var statearr_35989 = state_35962;
(statearr_35989[(8)] = inst_35948__$1);

return statearr_35989;
})();
if(cljs.core.truth_(inst_35949)){
var statearr_35990_37908 = state_35962__$1;
(statearr_35990_37908[(1)] = (13));

} else {
var statearr_35991_37911 = state_35962__$1;
(statearr_35991_37911[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35963 === (2))){
var inst_35924 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35925 = (0);
var state_35962__$1 = (function (){var statearr_35995 = state_35962;
(statearr_35995[(7)] = inst_35925);

(statearr_35995[(9)] = inst_35924);

return statearr_35995;
})();
var statearr_35996_37914 = state_35962__$1;
(statearr_35996_37914[(2)] = null);

(statearr_35996_37914[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35963 === (11))){
var inst_35925 = (state_35962[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_35962,(10),Object,null,(9));
var inst_35935 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35925) : chs__$1.call(null,inst_35925));
var inst_35936 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35925) : done.call(null,inst_35925));
var inst_35937 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35935,inst_35936);
var state_35962__$1 = state_35962;
var statearr_36001_37919 = state_35962__$1;
(statearr_36001_37919[(2)] = inst_35937);


cljs.core.async.impl.ioc_helpers.process_exception(state_35962__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35963 === (9))){
var inst_35925 = (state_35962[(7)]);
var inst_35939 = (state_35962[(2)]);
var inst_35940 = (inst_35925 + (1));
var inst_35925__$1 = inst_35940;
var state_35962__$1 = (function (){var statearr_36002 = state_35962;
(statearr_36002[(7)] = inst_35925__$1);

(statearr_36002[(10)] = inst_35939);

return statearr_36002;
})();
var statearr_36008_37925 = state_35962__$1;
(statearr_36008_37925[(2)] = null);

(statearr_36008_37925[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35963 === (5))){
var inst_35946 = (state_35962[(2)]);
var state_35962__$1 = (function (){var statearr_36010 = state_35962;
(statearr_36010[(11)] = inst_35946);

return statearr_36010;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35962__$1,(12),dchan);
} else {
if((state_val_35963 === (14))){
var inst_35948 = (state_35962[(8)]);
var inst_35953 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35948);
var state_35962__$1 = state_35962;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35962__$1,(16),out,inst_35953);
} else {
if((state_val_35963 === (16))){
var inst_35955 = (state_35962[(2)]);
var state_35962__$1 = (function (){var statearr_36014 = state_35962;
(statearr_36014[(12)] = inst_35955);

return statearr_36014;
})();
var statearr_36015_37936 = state_35962__$1;
(statearr_36015_37936[(2)] = null);

(statearr_36015_37936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35963 === (10))){
var inst_35930 = (state_35962[(2)]);
var inst_35931 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35962__$1 = (function (){var statearr_36018 = state_35962;
(statearr_36018[(13)] = inst_35930);

return statearr_36018;
})();
var statearr_36020_37941 = state_35962__$1;
(statearr_36020_37941[(2)] = inst_35931);


cljs.core.async.impl.ioc_helpers.process_exception(state_35962__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35963 === (8))){
var inst_35944 = (state_35962[(2)]);
var state_35962__$1 = state_35962;
var statearr_36022_37942 = state_35962__$1;
(statearr_36022_37942[(2)] = inst_35944);

(statearr_36022_37942[(1)] = (5));


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
var statearr_36026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36026[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36026[(1)] = (1));

return statearr_36026;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_35962){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_35962);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36027){if((e36027 instanceof Object)){
var ex__34203__auto__ = e36027;
var statearr_36030_37948 = state_35962;
(statearr_36030_37948[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36027;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37950 = state_35962;
state_35962 = G__37950;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_35962){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_35962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34267__auto__ = (function (){var statearr_36032 = (f__34266__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34266__auto__.cljs$core$IFn$_invoke$arity$0() : f__34266__auto__.call(null));
(statearr_36032[(6)] = c__34265__auto___37888);

return statearr_36032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34267__auto__);
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
var G__36040 = arguments.length;
switch (G__36040) {
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
var c__34265__auto___37957 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34266__auto__ = (function (){var switch__34199__auto__ = (function (state_36072){
var state_val_36073 = (state_36072[(1)]);
if((state_val_36073 === (7))){
var inst_36051 = (state_36072[(7)]);
var inst_36052 = (state_36072[(8)]);
var inst_36051__$1 = (state_36072[(2)]);
var inst_36052__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36051__$1,(0),null);
var inst_36053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36051__$1,(1),null);
var inst_36054 = (inst_36052__$1 == null);
var state_36072__$1 = (function (){var statearr_36074 = state_36072;
(statearr_36074[(7)] = inst_36051__$1);

(statearr_36074[(8)] = inst_36052__$1);

(statearr_36074[(9)] = inst_36053);

return statearr_36074;
})();
if(cljs.core.truth_(inst_36054)){
var statearr_36075_37964 = state_36072__$1;
(statearr_36075_37964[(1)] = (8));

} else {
var statearr_36076_37965 = state_36072__$1;
(statearr_36076_37965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36073 === (1))){
var inst_36041 = cljs.core.vec(chs);
var inst_36042 = inst_36041;
var state_36072__$1 = (function (){var statearr_36077 = state_36072;
(statearr_36077[(10)] = inst_36042);

return statearr_36077;
})();
var statearr_36078_37967 = state_36072__$1;
(statearr_36078_37967[(2)] = null);

(statearr_36078_37967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36073 === (4))){
var inst_36042 = (state_36072[(10)]);
var state_36072__$1 = state_36072;
return cljs.core.async.ioc_alts_BANG_(state_36072__$1,(7),inst_36042);
} else {
if((state_val_36073 === (6))){
var inst_36068 = (state_36072[(2)]);
var state_36072__$1 = state_36072;
var statearr_36079_37969 = state_36072__$1;
(statearr_36079_37969[(2)] = inst_36068);

(statearr_36079_37969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36073 === (3))){
var inst_36070 = (state_36072[(2)]);
var state_36072__$1 = state_36072;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36072__$1,inst_36070);
} else {
if((state_val_36073 === (2))){
var inst_36042 = (state_36072[(10)]);
var inst_36044 = cljs.core.count(inst_36042);
var inst_36045 = (inst_36044 > (0));
var state_36072__$1 = state_36072;
if(cljs.core.truth_(inst_36045)){
var statearr_36081_37974 = state_36072__$1;
(statearr_36081_37974[(1)] = (4));

} else {
var statearr_36082_37975 = state_36072__$1;
(statearr_36082_37975[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36073 === (11))){
var inst_36042 = (state_36072[(10)]);
var inst_36061 = (state_36072[(2)]);
var tmp36080 = inst_36042;
var inst_36042__$1 = tmp36080;
var state_36072__$1 = (function (){var statearr_36083 = state_36072;
(statearr_36083[(10)] = inst_36042__$1);

(statearr_36083[(11)] = inst_36061);

return statearr_36083;
})();
var statearr_36084_37976 = state_36072__$1;
(statearr_36084_37976[(2)] = null);

(statearr_36084_37976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36073 === (9))){
var inst_36052 = (state_36072[(8)]);
var state_36072__$1 = state_36072;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36072__$1,(11),out,inst_36052);
} else {
if((state_val_36073 === (5))){
var inst_36066 = cljs.core.async.close_BANG_(out);
var state_36072__$1 = state_36072;
var statearr_36089_37980 = state_36072__$1;
(statearr_36089_37980[(2)] = inst_36066);

(statearr_36089_37980[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36073 === (10))){
var inst_36064 = (state_36072[(2)]);
var state_36072__$1 = state_36072;
var statearr_36091_37981 = state_36072__$1;
(statearr_36091_37981[(2)] = inst_36064);

(statearr_36091_37981[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36073 === (8))){
var inst_36042 = (state_36072[(10)]);
var inst_36051 = (state_36072[(7)]);
var inst_36052 = (state_36072[(8)]);
var inst_36053 = (state_36072[(9)]);
var inst_36056 = (function (){var cs = inst_36042;
var vec__36047 = inst_36051;
var v = inst_36052;
var c = inst_36053;
return (function (p1__36036_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36036_SHARP_);
});
})();
var inst_36057 = cljs.core.filterv(inst_36056,inst_36042);
var inst_36042__$1 = inst_36057;
var state_36072__$1 = (function (){var statearr_36096 = state_36072;
(statearr_36096[(10)] = inst_36042__$1);

return statearr_36096;
})();
var statearr_36097_37986 = state_36072__$1;
(statearr_36097_37986[(2)] = null);

(statearr_36097_37986[(1)] = (2));


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
var statearr_36101 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36101[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36101[(1)] = (1));

return statearr_36101;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36072){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36072);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36102){if((e36102 instanceof Object)){
var ex__34203__auto__ = e36102;
var statearr_36104_37987 = state_36072;
(statearr_36104_37987[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36102;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37989 = state_36072;
state_36072 = G__37989;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36072){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34267__auto__ = (function (){var statearr_36108 = (f__34266__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34266__auto__.cljs$core$IFn$_invoke$arity$0() : f__34266__auto__.call(null));
(statearr_36108[(6)] = c__34265__auto___37957);

return statearr_36108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34267__auto__);
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
var G__36121 = arguments.length;
switch (G__36121) {
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
var c__34265__auto___37995 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34266__auto__ = (function (){var switch__34199__auto__ = (function (state_36150){
var state_val_36151 = (state_36150[(1)]);
if((state_val_36151 === (7))){
var inst_36132 = (state_36150[(7)]);
var inst_36132__$1 = (state_36150[(2)]);
var inst_36133 = (inst_36132__$1 == null);
var inst_36134 = cljs.core.not(inst_36133);
var state_36150__$1 = (function (){var statearr_36154 = state_36150;
(statearr_36154[(7)] = inst_36132__$1);

return statearr_36154;
})();
if(inst_36134){
var statearr_36155_37996 = state_36150__$1;
(statearr_36155_37996[(1)] = (8));

} else {
var statearr_36156_37997 = state_36150__$1;
(statearr_36156_37997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36151 === (1))){
var inst_36127 = (0);
var state_36150__$1 = (function (){var statearr_36158 = state_36150;
(statearr_36158[(8)] = inst_36127);

return statearr_36158;
})();
var statearr_36159_37998 = state_36150__$1;
(statearr_36159_37998[(2)] = null);

(statearr_36159_37998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36151 === (4))){
var state_36150__$1 = state_36150;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36150__$1,(7),ch);
} else {
if((state_val_36151 === (6))){
var inst_36145 = (state_36150[(2)]);
var state_36150__$1 = state_36150;
var statearr_36162_38003 = state_36150__$1;
(statearr_36162_38003[(2)] = inst_36145);

(statearr_36162_38003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36151 === (3))){
var inst_36147 = (state_36150[(2)]);
var inst_36148 = cljs.core.async.close_BANG_(out);
var state_36150__$1 = (function (){var statearr_36164 = state_36150;
(statearr_36164[(9)] = inst_36147);

return statearr_36164;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36150__$1,inst_36148);
} else {
if((state_val_36151 === (2))){
var inst_36127 = (state_36150[(8)]);
var inst_36129 = (inst_36127 < n);
var state_36150__$1 = state_36150;
if(cljs.core.truth_(inst_36129)){
var statearr_36165_38007 = state_36150__$1;
(statearr_36165_38007[(1)] = (4));

} else {
var statearr_36166_38008 = state_36150__$1;
(statearr_36166_38008[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36151 === (11))){
var inst_36127 = (state_36150[(8)]);
var inst_36137 = (state_36150[(2)]);
var inst_36138 = (inst_36127 + (1));
var inst_36127__$1 = inst_36138;
var state_36150__$1 = (function (){var statearr_36170 = state_36150;
(statearr_36170[(10)] = inst_36137);

(statearr_36170[(8)] = inst_36127__$1);

return statearr_36170;
})();
var statearr_36171_38009 = state_36150__$1;
(statearr_36171_38009[(2)] = null);

(statearr_36171_38009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36151 === (9))){
var state_36150__$1 = state_36150;
var statearr_36172_38010 = state_36150__$1;
(statearr_36172_38010[(2)] = null);

(statearr_36172_38010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36151 === (5))){
var state_36150__$1 = state_36150;
var statearr_36173_38011 = state_36150__$1;
(statearr_36173_38011[(2)] = null);

(statearr_36173_38011[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36151 === (10))){
var inst_36142 = (state_36150[(2)]);
var state_36150__$1 = state_36150;
var statearr_36174_38013 = state_36150__$1;
(statearr_36174_38013[(2)] = inst_36142);

(statearr_36174_38013[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36151 === (8))){
var inst_36132 = (state_36150[(7)]);
var state_36150__$1 = state_36150;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36150__$1,(11),out,inst_36132);
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
var statearr_36181 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36181[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36181[(1)] = (1));

return statearr_36181;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36150){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36150);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36183){if((e36183 instanceof Object)){
var ex__34203__auto__ = e36183;
var statearr_36184_38017 = state_36150;
(statearr_36184_38017[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36183;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38021 = state_36150;
state_36150 = G__38021;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36150){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34267__auto__ = (function (){var statearr_36189 = (f__34266__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34266__auto__.cljs$core$IFn$_invoke$arity$0() : f__34266__auto__.call(null));
(statearr_36189[(6)] = c__34265__auto___37995);

return statearr_36189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34267__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36195 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36195 = (function (f,ch,meta36196){
this.f = f;
this.ch = ch;
this.meta36196 = meta36196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36197,meta36196__$1){
var self__ = this;
var _36197__$1 = this;
return (new cljs.core.async.t_cljs$core$async36195(self__.f,self__.ch,meta36196__$1));
}));

(cljs.core.async.t_cljs$core$async36195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36197){
var self__ = this;
var _36197__$1 = this;
return self__.meta36196;
}));

(cljs.core.async.t_cljs$core$async36195.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36195.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36195.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36195.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36195.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36207 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36207 = (function (f,ch,meta36196,_,fn1,meta36208){
this.f = f;
this.ch = ch;
this.meta36196 = meta36196;
this._ = _;
this.fn1 = fn1;
this.meta36208 = meta36208;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36209,meta36208__$1){
var self__ = this;
var _36209__$1 = this;
return (new cljs.core.async.t_cljs$core$async36207(self__.f,self__.ch,self__.meta36196,self__._,self__.fn1,meta36208__$1));
}));

(cljs.core.async.t_cljs$core$async36207.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36209){
var self__ = this;
var _36209__$1 = this;
return self__.meta36208;
}));

(cljs.core.async.t_cljs$core$async36207.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36207.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36207.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36207.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36192_SHARP_){
var G__36215 = (((p1__36192_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36192_SHARP_) : self__.f.call(null,p1__36192_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36215) : f1.call(null,G__36215));
});
}));

(cljs.core.async.t_cljs$core$async36207.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36196","meta36196",325292904,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36195","cljs.core.async/t_cljs$core$async36195",342347770,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36208","meta36208",1549817679,null)], null);
}));

(cljs.core.async.t_cljs$core$async36207.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36207.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36207");

(cljs.core.async.t_cljs$core$async36207.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36207");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36207.
 */
cljs.core.async.__GT_t_cljs$core$async36207 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36207(f__$1,ch__$1,meta36196__$1,___$2,fn1__$1,meta36208){
return (new cljs.core.async.t_cljs$core$async36207(f__$1,ch__$1,meta36196__$1,___$2,fn1__$1,meta36208));
});

}

return (new cljs.core.async.t_cljs$core$async36207(self__.f,self__.ch,self__.meta36196,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36220 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36220) : self__.f.call(null,G__36220));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36195.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36195.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36195.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36196","meta36196",325292904,null)], null);
}));

(cljs.core.async.t_cljs$core$async36195.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36195.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36195");

(cljs.core.async.t_cljs$core$async36195.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36195");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36195.
 */
cljs.core.async.__GT_t_cljs$core$async36195 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36195(f__$1,ch__$1,meta36196){
return (new cljs.core.async.t_cljs$core$async36195(f__$1,ch__$1,meta36196));
});

}

return (new cljs.core.async.t_cljs$core$async36195(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36221 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36221 = (function (f,ch,meta36222){
this.f = f;
this.ch = ch;
this.meta36222 = meta36222;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36223,meta36222__$1){
var self__ = this;
var _36223__$1 = this;
return (new cljs.core.async.t_cljs$core$async36221(self__.f,self__.ch,meta36222__$1));
}));

(cljs.core.async.t_cljs$core$async36221.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36223){
var self__ = this;
var _36223__$1 = this;
return self__.meta36222;
}));

(cljs.core.async.t_cljs$core$async36221.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36221.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36221.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36221.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36221.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36221.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36221.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36222","meta36222",1908857378,null)], null);
}));

(cljs.core.async.t_cljs$core$async36221.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36221.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36221");

(cljs.core.async.t_cljs$core$async36221.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36221");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36221.
 */
cljs.core.async.__GT_t_cljs$core$async36221 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36221(f__$1,ch__$1,meta36222){
return (new cljs.core.async.t_cljs$core$async36221(f__$1,ch__$1,meta36222));
});

}

return (new cljs.core.async.t_cljs$core$async36221(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36233 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36233 = (function (p,ch,meta36234){
this.p = p;
this.ch = ch;
this.meta36234 = meta36234;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36235,meta36234__$1){
var self__ = this;
var _36235__$1 = this;
return (new cljs.core.async.t_cljs$core$async36233(self__.p,self__.ch,meta36234__$1));
}));

(cljs.core.async.t_cljs$core$async36233.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36235){
var self__ = this;
var _36235__$1 = this;
return self__.meta36234;
}));

(cljs.core.async.t_cljs$core$async36233.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36233.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36233.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36233.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36233.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36233.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36233.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36233.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36234","meta36234",-1361614166,null)], null);
}));

(cljs.core.async.t_cljs$core$async36233.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36233.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36233");

(cljs.core.async.t_cljs$core$async36233.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36233");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36233.
 */
cljs.core.async.__GT_t_cljs$core$async36233 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36233(p__$1,ch__$1,meta36234){
return (new cljs.core.async.t_cljs$core$async36233(p__$1,ch__$1,meta36234));
});

}

return (new cljs.core.async.t_cljs$core$async36233(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36248 = arguments.length;
switch (G__36248) {
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
var c__34265__auto___38049 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34266__auto__ = (function (){var switch__34199__auto__ = (function (state_36272){
var state_val_36273 = (state_36272[(1)]);
if((state_val_36273 === (7))){
var inst_36268 = (state_36272[(2)]);
var state_36272__$1 = state_36272;
var statearr_36274_38052 = state_36272__$1;
(statearr_36274_38052[(2)] = inst_36268);

(statearr_36274_38052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36273 === (1))){
var state_36272__$1 = state_36272;
var statearr_36279_38053 = state_36272__$1;
(statearr_36279_38053[(2)] = null);

(statearr_36279_38053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36273 === (4))){
var inst_36254 = (state_36272[(7)]);
var inst_36254__$1 = (state_36272[(2)]);
var inst_36255 = (inst_36254__$1 == null);
var state_36272__$1 = (function (){var statearr_36280 = state_36272;
(statearr_36280[(7)] = inst_36254__$1);

return statearr_36280;
})();
if(cljs.core.truth_(inst_36255)){
var statearr_36281_38055 = state_36272__$1;
(statearr_36281_38055[(1)] = (5));

} else {
var statearr_36282_38056 = state_36272__$1;
(statearr_36282_38056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36273 === (6))){
var inst_36254 = (state_36272[(7)]);
var inst_36259 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36254) : p.call(null,inst_36254));
var state_36272__$1 = state_36272;
if(cljs.core.truth_(inst_36259)){
var statearr_36286_38059 = state_36272__$1;
(statearr_36286_38059[(1)] = (8));

} else {
var statearr_36287_38060 = state_36272__$1;
(statearr_36287_38060[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36273 === (3))){
var inst_36270 = (state_36272[(2)]);
var state_36272__$1 = state_36272;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36272__$1,inst_36270);
} else {
if((state_val_36273 === (2))){
var state_36272__$1 = state_36272;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36272__$1,(4),ch);
} else {
if((state_val_36273 === (11))){
var inst_36262 = (state_36272[(2)]);
var state_36272__$1 = state_36272;
var statearr_36288_38062 = state_36272__$1;
(statearr_36288_38062[(2)] = inst_36262);

(statearr_36288_38062[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36273 === (9))){
var state_36272__$1 = state_36272;
var statearr_36289_38065 = state_36272__$1;
(statearr_36289_38065[(2)] = null);

(statearr_36289_38065[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36273 === (5))){
var inst_36257 = cljs.core.async.close_BANG_(out);
var state_36272__$1 = state_36272;
var statearr_36295_38066 = state_36272__$1;
(statearr_36295_38066[(2)] = inst_36257);

(statearr_36295_38066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36273 === (10))){
var inst_36265 = (state_36272[(2)]);
var state_36272__$1 = (function (){var statearr_36297 = state_36272;
(statearr_36297[(8)] = inst_36265);

return statearr_36297;
})();
var statearr_36298_38067 = state_36272__$1;
(statearr_36298_38067[(2)] = null);

(statearr_36298_38067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36273 === (8))){
var inst_36254 = (state_36272[(7)]);
var state_36272__$1 = state_36272;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36272__$1,(11),out,inst_36254);
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
var statearr_36300 = [null,null,null,null,null,null,null,null,null];
(statearr_36300[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36300[(1)] = (1));

return statearr_36300;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36272){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36272);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36301){if((e36301 instanceof Object)){
var ex__34203__auto__ = e36301;
var statearr_36302_38071 = state_36272;
(statearr_36302_38071[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36301;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38072 = state_36272;
state_36272 = G__38072;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36272){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34267__auto__ = (function (){var statearr_36303 = (f__34266__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34266__auto__.cljs$core$IFn$_invoke$arity$0() : f__34266__auto__.call(null));
(statearr_36303[(6)] = c__34265__auto___38049);

return statearr_36303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34267__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36307 = arguments.length;
switch (G__36307) {
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
var c__34265__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34266__auto__ = (function (){var switch__34199__auto__ = (function (state_36384){
var state_val_36385 = (state_36384[(1)]);
if((state_val_36385 === (7))){
var inst_36375 = (state_36384[(2)]);
var state_36384__$1 = state_36384;
var statearr_36394_38080 = state_36384__$1;
(statearr_36394_38080[(2)] = inst_36375);

(statearr_36394_38080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36385 === (20))){
var inst_36345 = (state_36384[(7)]);
var inst_36356 = (state_36384[(2)]);
var inst_36357 = cljs.core.next(inst_36345);
var inst_36327 = inst_36357;
var inst_36328 = null;
var inst_36329 = (0);
var inst_36330 = (0);
var state_36384__$1 = (function (){var statearr_36396 = state_36384;
(statearr_36396[(8)] = inst_36328);

(statearr_36396[(9)] = inst_36356);

(statearr_36396[(10)] = inst_36329);

(statearr_36396[(11)] = inst_36327);

(statearr_36396[(12)] = inst_36330);

return statearr_36396;
})();
var statearr_36398_38082 = state_36384__$1;
(statearr_36398_38082[(2)] = null);

(statearr_36398_38082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36385 === (1))){
var state_36384__$1 = state_36384;
var statearr_36400_38084 = state_36384__$1;
(statearr_36400_38084[(2)] = null);

(statearr_36400_38084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36385 === (4))){
var inst_36315 = (state_36384[(13)]);
var inst_36315__$1 = (state_36384[(2)]);
var inst_36316 = (inst_36315__$1 == null);
var state_36384__$1 = (function (){var statearr_36401 = state_36384;
(statearr_36401[(13)] = inst_36315__$1);

return statearr_36401;
})();
if(cljs.core.truth_(inst_36316)){
var statearr_36402_38086 = state_36384__$1;
(statearr_36402_38086[(1)] = (5));

} else {
var statearr_36403_38087 = state_36384__$1;
(statearr_36403_38087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36385 === (15))){
var state_36384__$1 = state_36384;
var statearr_36409_38088 = state_36384__$1;
(statearr_36409_38088[(2)] = null);

(statearr_36409_38088[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36385 === (21))){
var state_36384__$1 = state_36384;
var statearr_36410_38090 = state_36384__$1;
(statearr_36410_38090[(2)] = null);

(statearr_36410_38090[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36385 === (13))){
var inst_36328 = (state_36384[(8)]);
var inst_36329 = (state_36384[(10)]);
var inst_36327 = (state_36384[(11)]);
var inst_36330 = (state_36384[(12)]);
var inst_36340 = (state_36384[(2)]);
var inst_36341 = (inst_36330 + (1));
var tmp36406 = inst_36328;
var tmp36407 = inst_36329;
var tmp36408 = inst_36327;
var inst_36327__$1 = tmp36408;
var inst_36328__$1 = tmp36406;
var inst_36329__$1 = tmp36407;
var inst_36330__$1 = inst_36341;
var state_36384__$1 = (function (){var statearr_36411 = state_36384;
(statearr_36411[(8)] = inst_36328__$1);

(statearr_36411[(10)] = inst_36329__$1);

(statearr_36411[(14)] = inst_36340);

(statearr_36411[(11)] = inst_36327__$1);

(statearr_36411[(12)] = inst_36330__$1);

return statearr_36411;
})();
var statearr_36414_38093 = state_36384__$1;
(statearr_36414_38093[(2)] = null);

(statearr_36414_38093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36385 === (22))){
var state_36384__$1 = state_36384;
var statearr_36415_38096 = state_36384__$1;
(statearr_36415_38096[(2)] = null);

(statearr_36415_38096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36385 === (6))){
var inst_36315 = (state_36384[(13)]);
var inst_36325 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36315) : f.call(null,inst_36315));
var inst_36326 = cljs.core.seq(inst_36325);
var inst_36327 = inst_36326;
var inst_36328 = null;
var inst_36329 = (0);
var inst_36330 = (0);
var state_36384__$1 = (function (){var statearr_36416 = state_36384;
(statearr_36416[(8)] = inst_36328);

(statearr_36416[(10)] = inst_36329);

(statearr_36416[(11)] = inst_36327);

(statearr_36416[(12)] = inst_36330);

return statearr_36416;
})();
var statearr_36418_38098 = state_36384__$1;
(statearr_36418_38098[(2)] = null);

(statearr_36418_38098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36385 === (17))){
var inst_36345 = (state_36384[(7)]);
var inst_36349 = cljs.core.chunk_first(inst_36345);
var inst_36350 = cljs.core.chunk_rest(inst_36345);
var inst_36351 = cljs.core.count(inst_36349);
var inst_36327 = inst_36350;
var inst_36328 = inst_36349;
var inst_36329 = inst_36351;
var inst_36330 = (0);
var state_36384__$1 = (function (){var statearr_36422 = state_36384;
(statearr_36422[(8)] = inst_36328);

(statearr_36422[(10)] = inst_36329);

(statearr_36422[(11)] = inst_36327);

(statearr_36422[(12)] = inst_36330);

return statearr_36422;
})();
var statearr_36423_38102 = state_36384__$1;
(statearr_36423_38102[(2)] = null);

(statearr_36423_38102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36385 === (3))){
var inst_36377 = (state_36384[(2)]);
var state_36384__$1 = state_36384;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36384__$1,inst_36377);
} else {
if((state_val_36385 === (12))){
var inst_36365 = (state_36384[(2)]);
var state_36384__$1 = state_36384;
var statearr_36424_38104 = state_36384__$1;
(statearr_36424_38104[(2)] = inst_36365);

(statearr_36424_38104[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36385 === (2))){
var state_36384__$1 = state_36384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36384__$1,(4),in$);
} else {
if((state_val_36385 === (23))){
var inst_36373 = (state_36384[(2)]);
var state_36384__$1 = state_36384;
var statearr_36433_38107 = state_36384__$1;
(statearr_36433_38107[(2)] = inst_36373);

(statearr_36433_38107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36385 === (19))){
var inst_36360 = (state_36384[(2)]);
var state_36384__$1 = state_36384;
var statearr_36434_38108 = state_36384__$1;
(statearr_36434_38108[(2)] = inst_36360);

(statearr_36434_38108[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36385 === (11))){
var inst_36345 = (state_36384[(7)]);
var inst_36327 = (state_36384[(11)]);
var inst_36345__$1 = cljs.core.seq(inst_36327);
var state_36384__$1 = (function (){var statearr_36436 = state_36384;
(statearr_36436[(7)] = inst_36345__$1);

return statearr_36436;
})();
if(inst_36345__$1){
var statearr_36437_38110 = state_36384__$1;
(statearr_36437_38110[(1)] = (14));

} else {
var statearr_36438_38112 = state_36384__$1;
(statearr_36438_38112[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36385 === (9))){
var inst_36367 = (state_36384[(2)]);
var inst_36368 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36384__$1 = (function (){var statearr_36440 = state_36384;
(statearr_36440[(15)] = inst_36367);

return statearr_36440;
})();
if(cljs.core.truth_(inst_36368)){
var statearr_36442_38114 = state_36384__$1;
(statearr_36442_38114[(1)] = (21));

} else {
var statearr_36443_38115 = state_36384__$1;
(statearr_36443_38115[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36385 === (5))){
var inst_36318 = cljs.core.async.close_BANG_(out);
var state_36384__$1 = state_36384;
var statearr_36445_38116 = state_36384__$1;
(statearr_36445_38116[(2)] = inst_36318);

(statearr_36445_38116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36385 === (14))){
var inst_36345 = (state_36384[(7)]);
var inst_36347 = cljs.core.chunked_seq_QMARK_(inst_36345);
var state_36384__$1 = state_36384;
if(inst_36347){
var statearr_36447_38118 = state_36384__$1;
(statearr_36447_38118[(1)] = (17));

} else {
var statearr_36448_38120 = state_36384__$1;
(statearr_36448_38120[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36385 === (16))){
var inst_36363 = (state_36384[(2)]);
var state_36384__$1 = state_36384;
var statearr_36450_38122 = state_36384__$1;
(statearr_36450_38122[(2)] = inst_36363);

(statearr_36450_38122[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36385 === (10))){
var inst_36328 = (state_36384[(8)]);
var inst_36330 = (state_36384[(12)]);
var inst_36337 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36328,inst_36330);
var state_36384__$1 = state_36384;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36384__$1,(13),out,inst_36337);
} else {
if((state_val_36385 === (18))){
var inst_36345 = (state_36384[(7)]);
var inst_36354 = cljs.core.first(inst_36345);
var state_36384__$1 = state_36384;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36384__$1,(20),out,inst_36354);
} else {
if((state_val_36385 === (8))){
var inst_36329 = (state_36384[(10)]);
var inst_36330 = (state_36384[(12)]);
var inst_36333 = (inst_36330 < inst_36329);
var inst_36335 = inst_36333;
var state_36384__$1 = state_36384;
if(cljs.core.truth_(inst_36335)){
var statearr_36452_38125 = state_36384__$1;
(statearr_36452_38125[(1)] = (10));

} else {
var statearr_36453_38127 = state_36384__$1;
(statearr_36453_38127[(1)] = (11));

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
var statearr_36456 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36456[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__);

(statearr_36456[(1)] = (1));

return statearr_36456;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____1 = (function (state_36384){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36384);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36457){if((e36457 instanceof Object)){
var ex__34203__auto__ = e36457;
var statearr_36458_38128 = state_36384;
(statearr_36458_38128[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36457;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38131 = state_36384;
state_36384 = G__38131;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__ = function(state_36384){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____1.call(this,state_36384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__;
})()
})();
var state__34267__auto__ = (function (){var statearr_36459 = (f__34266__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34266__auto__.cljs$core$IFn$_invoke$arity$0() : f__34266__auto__.call(null));
(statearr_36459[(6)] = c__34265__auto__);

return statearr_36459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34267__auto__);
}));

return c__34265__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36465 = arguments.length;
switch (G__36465) {
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
var G__36475 = arguments.length;
switch (G__36475) {
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
var G__36481 = arguments.length;
switch (G__36481) {
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
var c__34265__auto___38139 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34266__auto__ = (function (){var switch__34199__auto__ = (function (state_36508){
var state_val_36509 = (state_36508[(1)]);
if((state_val_36509 === (7))){
var inst_36503 = (state_36508[(2)]);
var state_36508__$1 = state_36508;
var statearr_36512_38141 = state_36508__$1;
(statearr_36512_38141[(2)] = inst_36503);

(statearr_36512_38141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36509 === (1))){
var inst_36485 = null;
var state_36508__$1 = (function (){var statearr_36513 = state_36508;
(statearr_36513[(7)] = inst_36485);

return statearr_36513;
})();
var statearr_36514_38143 = state_36508__$1;
(statearr_36514_38143[(2)] = null);

(statearr_36514_38143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36509 === (4))){
var inst_36488 = (state_36508[(8)]);
var inst_36488__$1 = (state_36508[(2)]);
var inst_36489 = (inst_36488__$1 == null);
var inst_36490 = cljs.core.not(inst_36489);
var state_36508__$1 = (function (){var statearr_36517 = state_36508;
(statearr_36517[(8)] = inst_36488__$1);

return statearr_36517;
})();
if(inst_36490){
var statearr_36518_38145 = state_36508__$1;
(statearr_36518_38145[(1)] = (5));

} else {
var statearr_36519_38146 = state_36508__$1;
(statearr_36519_38146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36509 === (6))){
var state_36508__$1 = state_36508;
var statearr_36520_38147 = state_36508__$1;
(statearr_36520_38147[(2)] = null);

(statearr_36520_38147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36509 === (3))){
var inst_36505 = (state_36508[(2)]);
var inst_36506 = cljs.core.async.close_BANG_(out);
var state_36508__$1 = (function (){var statearr_36528 = state_36508;
(statearr_36528[(9)] = inst_36505);

return statearr_36528;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36508__$1,inst_36506);
} else {
if((state_val_36509 === (2))){
var state_36508__$1 = state_36508;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36508__$1,(4),ch);
} else {
if((state_val_36509 === (11))){
var inst_36488 = (state_36508[(8)]);
var inst_36497 = (state_36508[(2)]);
var inst_36485 = inst_36488;
var state_36508__$1 = (function (){var statearr_36529 = state_36508;
(statearr_36529[(7)] = inst_36485);

(statearr_36529[(10)] = inst_36497);

return statearr_36529;
})();
var statearr_36531_38149 = state_36508__$1;
(statearr_36531_38149[(2)] = null);

(statearr_36531_38149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36509 === (9))){
var inst_36488 = (state_36508[(8)]);
var state_36508__$1 = state_36508;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36508__$1,(11),out,inst_36488);
} else {
if((state_val_36509 === (5))){
var inst_36485 = (state_36508[(7)]);
var inst_36488 = (state_36508[(8)]);
var inst_36492 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36488,inst_36485);
var state_36508__$1 = state_36508;
if(inst_36492){
var statearr_36535_38155 = state_36508__$1;
(statearr_36535_38155[(1)] = (8));

} else {
var statearr_36536_38156 = state_36508__$1;
(statearr_36536_38156[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36509 === (10))){
var inst_36500 = (state_36508[(2)]);
var state_36508__$1 = state_36508;
var statearr_36538_38157 = state_36508__$1;
(statearr_36538_38157[(2)] = inst_36500);

(statearr_36538_38157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36509 === (8))){
var inst_36485 = (state_36508[(7)]);
var tmp36533 = inst_36485;
var inst_36485__$1 = tmp36533;
var state_36508__$1 = (function (){var statearr_36540 = state_36508;
(statearr_36540[(7)] = inst_36485__$1);

return statearr_36540;
})();
var statearr_36541_38158 = state_36508__$1;
(statearr_36541_38158[(2)] = null);

(statearr_36541_38158[(1)] = (2));


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
var statearr_36542 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36542[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36542[(1)] = (1));

return statearr_36542;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36508){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36508);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36544){if((e36544 instanceof Object)){
var ex__34203__auto__ = e36544;
var statearr_36545_38165 = state_36508;
(statearr_36545_38165[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36544;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38166 = state_36508;
state_36508 = G__38166;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36508){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34267__auto__ = (function (){var statearr_36547 = (f__34266__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34266__auto__.cljs$core$IFn$_invoke$arity$0() : f__34266__auto__.call(null));
(statearr_36547[(6)] = c__34265__auto___38139);

return statearr_36547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34267__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36553 = arguments.length;
switch (G__36553) {
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
var c__34265__auto___38171 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34266__auto__ = (function (){var switch__34199__auto__ = (function (state_36594){
var state_val_36595 = (state_36594[(1)]);
if((state_val_36595 === (7))){
var inst_36590 = (state_36594[(2)]);
var state_36594__$1 = state_36594;
var statearr_36604_38172 = state_36594__$1;
(statearr_36604_38172[(2)] = inst_36590);

(statearr_36604_38172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (1))){
var inst_36556 = (new Array(n));
var inst_36557 = inst_36556;
var inst_36558 = (0);
var state_36594__$1 = (function (){var statearr_36607 = state_36594;
(statearr_36607[(7)] = inst_36557);

(statearr_36607[(8)] = inst_36558);

return statearr_36607;
})();
var statearr_36608_38175 = state_36594__$1;
(statearr_36608_38175[(2)] = null);

(statearr_36608_38175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (4))){
var inst_36561 = (state_36594[(9)]);
var inst_36561__$1 = (state_36594[(2)]);
var inst_36562 = (inst_36561__$1 == null);
var inst_36563 = cljs.core.not(inst_36562);
var state_36594__$1 = (function (){var statearr_36609 = state_36594;
(statearr_36609[(9)] = inst_36561__$1);

return statearr_36609;
})();
if(inst_36563){
var statearr_36610_38177 = state_36594__$1;
(statearr_36610_38177[(1)] = (5));

} else {
var statearr_36611_38178 = state_36594__$1;
(statearr_36611_38178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (15))){
var inst_36584 = (state_36594[(2)]);
var state_36594__$1 = state_36594;
var statearr_36614_38179 = state_36594__$1;
(statearr_36614_38179[(2)] = inst_36584);

(statearr_36614_38179[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (13))){
var state_36594__$1 = state_36594;
var statearr_36616_38180 = state_36594__$1;
(statearr_36616_38180[(2)] = null);

(statearr_36616_38180[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (6))){
var inst_36558 = (state_36594[(8)]);
var inst_36580 = (inst_36558 > (0));
var state_36594__$1 = state_36594;
if(cljs.core.truth_(inst_36580)){
var statearr_36617_38182 = state_36594__$1;
(statearr_36617_38182[(1)] = (12));

} else {
var statearr_36618_38183 = state_36594__$1;
(statearr_36618_38183[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (3))){
var inst_36592 = (state_36594[(2)]);
var state_36594__$1 = state_36594;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36594__$1,inst_36592);
} else {
if((state_val_36595 === (12))){
var inst_36557 = (state_36594[(7)]);
var inst_36582 = cljs.core.vec(inst_36557);
var state_36594__$1 = state_36594;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36594__$1,(15),out,inst_36582);
} else {
if((state_val_36595 === (2))){
var state_36594__$1 = state_36594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36594__$1,(4),ch);
} else {
if((state_val_36595 === (11))){
var inst_36574 = (state_36594[(2)]);
var inst_36575 = (new Array(n));
var inst_36557 = inst_36575;
var inst_36558 = (0);
var state_36594__$1 = (function (){var statearr_36620 = state_36594;
(statearr_36620[(10)] = inst_36574);

(statearr_36620[(7)] = inst_36557);

(statearr_36620[(8)] = inst_36558);

return statearr_36620;
})();
var statearr_36621_38187 = state_36594__$1;
(statearr_36621_38187[(2)] = null);

(statearr_36621_38187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (9))){
var inst_36557 = (state_36594[(7)]);
var inst_36572 = cljs.core.vec(inst_36557);
var state_36594__$1 = state_36594;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36594__$1,(11),out,inst_36572);
} else {
if((state_val_36595 === (5))){
var inst_36561 = (state_36594[(9)]);
var inst_36557 = (state_36594[(7)]);
var inst_36558 = (state_36594[(8)]);
var inst_36566 = (state_36594[(11)]);
var inst_36565 = (inst_36557[inst_36558] = inst_36561);
var inst_36566__$1 = (inst_36558 + (1));
var inst_36568 = (inst_36566__$1 < n);
var state_36594__$1 = (function (){var statearr_36622 = state_36594;
(statearr_36622[(12)] = inst_36565);

(statearr_36622[(11)] = inst_36566__$1);

return statearr_36622;
})();
if(cljs.core.truth_(inst_36568)){
var statearr_36624_38190 = state_36594__$1;
(statearr_36624_38190[(1)] = (8));

} else {
var statearr_36625_38191 = state_36594__$1;
(statearr_36625_38191[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (14))){
var inst_36587 = (state_36594[(2)]);
var inst_36588 = cljs.core.async.close_BANG_(out);
var state_36594__$1 = (function (){var statearr_36628 = state_36594;
(statearr_36628[(13)] = inst_36587);

return statearr_36628;
})();
var statearr_36629_38196 = state_36594__$1;
(statearr_36629_38196[(2)] = inst_36588);

(statearr_36629_38196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (10))){
var inst_36578 = (state_36594[(2)]);
var state_36594__$1 = state_36594;
var statearr_36630_38200 = state_36594__$1;
(statearr_36630_38200[(2)] = inst_36578);

(statearr_36630_38200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36595 === (8))){
var inst_36557 = (state_36594[(7)]);
var inst_36566 = (state_36594[(11)]);
var tmp36627 = inst_36557;
var inst_36557__$1 = tmp36627;
var inst_36558 = inst_36566;
var state_36594__$1 = (function (){var statearr_36631 = state_36594;
(statearr_36631[(7)] = inst_36557__$1);

(statearr_36631[(8)] = inst_36558);

return statearr_36631;
})();
var statearr_36634_38201 = state_36594__$1;
(statearr_36634_38201[(2)] = null);

(statearr_36634_38201[(1)] = (2));


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
var statearr_36638 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36638[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36638[(1)] = (1));

return statearr_36638;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36594){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36594);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36657){if((e36657 instanceof Object)){
var ex__34203__auto__ = e36657;
var statearr_36659_38203 = state_36594;
(statearr_36659_38203[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36657;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38205 = state_36594;
state_36594 = G__38205;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34267__auto__ = (function (){var statearr_36667 = (f__34266__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34266__auto__.cljs$core$IFn$_invoke$arity$0() : f__34266__auto__.call(null));
(statearr_36667[(6)] = c__34265__auto___38171);

return statearr_36667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34267__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36671 = arguments.length;
switch (G__36671) {
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
var c__34265__auto___38209 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34266__auto__ = (function (){var switch__34199__auto__ = (function (state_36720){
var state_val_36721 = (state_36720[(1)]);
if((state_val_36721 === (7))){
var inst_36714 = (state_36720[(2)]);
var state_36720__$1 = state_36720;
var statearr_36724_38210 = state_36720__$1;
(statearr_36724_38210[(2)] = inst_36714);

(statearr_36724_38210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (1))){
var inst_36674 = [];
var inst_36675 = inst_36674;
var inst_36676 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36720__$1 = (function (){var statearr_36727 = state_36720;
(statearr_36727[(7)] = inst_36676);

(statearr_36727[(8)] = inst_36675);

return statearr_36727;
})();
var statearr_36728_38214 = state_36720__$1;
(statearr_36728_38214[(2)] = null);

(statearr_36728_38214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (4))){
var inst_36680 = (state_36720[(9)]);
var inst_36680__$1 = (state_36720[(2)]);
var inst_36682 = (inst_36680__$1 == null);
var inst_36683 = cljs.core.not(inst_36682);
var state_36720__$1 = (function (){var statearr_36730 = state_36720;
(statearr_36730[(9)] = inst_36680__$1);

return statearr_36730;
})();
if(inst_36683){
var statearr_36731_38215 = state_36720__$1;
(statearr_36731_38215[(1)] = (5));

} else {
var statearr_36732_38216 = state_36720__$1;
(statearr_36732_38216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (15))){
var inst_36708 = (state_36720[(2)]);
var state_36720__$1 = state_36720;
var statearr_36733_38217 = state_36720__$1;
(statearr_36733_38217[(2)] = inst_36708);

(statearr_36733_38217[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (13))){
var state_36720__$1 = state_36720;
var statearr_36735_38219 = state_36720__$1;
(statearr_36735_38219[(2)] = null);

(statearr_36735_38219[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (6))){
var inst_36675 = (state_36720[(8)]);
var inst_36703 = inst_36675.length;
var inst_36704 = (inst_36703 > (0));
var state_36720__$1 = state_36720;
if(cljs.core.truth_(inst_36704)){
var statearr_36738_38220 = state_36720__$1;
(statearr_36738_38220[(1)] = (12));

} else {
var statearr_36739_38221 = state_36720__$1;
(statearr_36739_38221[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (3))){
var inst_36716 = (state_36720[(2)]);
var state_36720__$1 = state_36720;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36720__$1,inst_36716);
} else {
if((state_val_36721 === (12))){
var inst_36675 = (state_36720[(8)]);
var inst_36706 = cljs.core.vec(inst_36675);
var state_36720__$1 = state_36720;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36720__$1,(15),out,inst_36706);
} else {
if((state_val_36721 === (2))){
var state_36720__$1 = state_36720;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36720__$1,(4),ch);
} else {
if((state_val_36721 === (11))){
var inst_36685 = (state_36720[(10)]);
var inst_36680 = (state_36720[(9)]);
var inst_36696 = (state_36720[(2)]);
var inst_36697 = [];
var inst_36698 = inst_36697.push(inst_36680);
var inst_36675 = inst_36697;
var inst_36676 = inst_36685;
var state_36720__$1 = (function (){var statearr_36743 = state_36720;
(statearr_36743[(11)] = inst_36698);

(statearr_36743[(7)] = inst_36676);

(statearr_36743[(8)] = inst_36675);

(statearr_36743[(12)] = inst_36696);

return statearr_36743;
})();
var statearr_36744_38225 = state_36720__$1;
(statearr_36744_38225[(2)] = null);

(statearr_36744_38225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (9))){
var inst_36675 = (state_36720[(8)]);
var inst_36694 = cljs.core.vec(inst_36675);
var state_36720__$1 = state_36720;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36720__$1,(11),out,inst_36694);
} else {
if((state_val_36721 === (5))){
var inst_36676 = (state_36720[(7)]);
var inst_36685 = (state_36720[(10)]);
var inst_36680 = (state_36720[(9)]);
var inst_36685__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36680) : f.call(null,inst_36680));
var inst_36687 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36685__$1,inst_36676);
var inst_36688 = cljs.core.keyword_identical_QMARK_(inst_36676,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36689 = ((inst_36687) || (inst_36688));
var state_36720__$1 = (function (){var statearr_36747 = state_36720;
(statearr_36747[(10)] = inst_36685__$1);

return statearr_36747;
})();
if(cljs.core.truth_(inst_36689)){
var statearr_36748_38229 = state_36720__$1;
(statearr_36748_38229[(1)] = (8));

} else {
var statearr_36749_38230 = state_36720__$1;
(statearr_36749_38230[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (14))){
var inst_36711 = (state_36720[(2)]);
var inst_36712 = cljs.core.async.close_BANG_(out);
var state_36720__$1 = (function (){var statearr_36752 = state_36720;
(statearr_36752[(13)] = inst_36711);

return statearr_36752;
})();
var statearr_36753_38232 = state_36720__$1;
(statearr_36753_38232[(2)] = inst_36712);

(statearr_36753_38232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (10))){
var inst_36701 = (state_36720[(2)]);
var state_36720__$1 = state_36720;
var statearr_36755_38233 = state_36720__$1;
(statearr_36755_38233[(2)] = inst_36701);

(statearr_36755_38233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (8))){
var inst_36685 = (state_36720[(10)]);
var inst_36680 = (state_36720[(9)]);
var inst_36675 = (state_36720[(8)]);
var inst_36691 = inst_36675.push(inst_36680);
var tmp36751 = inst_36675;
var inst_36675__$1 = tmp36751;
var inst_36676 = inst_36685;
var state_36720__$1 = (function (){var statearr_36757 = state_36720;
(statearr_36757[(14)] = inst_36691);

(statearr_36757[(7)] = inst_36676);

(statearr_36757[(8)] = inst_36675__$1);

return statearr_36757;
})();
var statearr_36758_38234 = state_36720__$1;
(statearr_36758_38234[(2)] = null);

(statearr_36758_38234[(1)] = (2));


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
var statearr_36759 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36759[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36759[(1)] = (1));

return statearr_36759;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36720){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36720);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36761){if((e36761 instanceof Object)){
var ex__34203__auto__ = e36761;
var statearr_36762_38236 = state_36720;
(statearr_36762_38236[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36761;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38238 = state_36720;
state_36720 = G__38238;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36720){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34267__auto__ = (function (){var statearr_36764 = (f__34266__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34266__auto__.cljs$core$IFn$_invoke$arity$0() : f__34266__auto__.call(null));
(statearr_36764[(6)] = c__34265__auto___38209);

return statearr_36764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34267__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
