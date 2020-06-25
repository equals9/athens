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
var val_36841 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36841) : fn1.call(null,val_36841));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36841) : fn1.call(null,val_36841));
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
var n__4666__auto___36847 = n;
var x_36848 = (0);
while(true){
if((x_36848 < n__4666__auto___36847)){
(a[x_36848] = x_36848);

var G__36849 = (x_36848 + (1));
x_36848 = G__36849;
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
var G__34350 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34347_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34350) : fret.call(null,G__34350));
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
var G__36860 = (i + (1));
i = G__36860;
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
var len__4789__auto___36862 = arguments.length;
var i__4790__auto___36864 = (0);
while(true){
if((i__4790__auto___36864 < len__4789__auto___36862)){
args__4795__auto__.push((arguments[i__4790__auto___36864]));

var G__36865 = (i__4790__auto___36864 + (1));
i__4790__auto___36864 = G__36865;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34353){
var map__34354 = p__34353;
var map__34354__$1 = (((((!((map__34354 == null))))?(((((map__34354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34354):map__34354);
var opts = map__34354__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34351){
var G__34352 = cljs.core.first(seq34351);
var seq34351__$1 = cljs.core.next(seq34351);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34352,seq34351__$1);
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
var G__34365 = arguments.length;
switch (G__34365) {
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
var c__34266__auto___36872 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34267__auto__ = (function (){var switch__34199__auto__ = (function (state_34401){
var state_val_34402 = (state_34401[(1)]);
if((state_val_34402 === (7))){
var inst_34394 = (state_34401[(2)]);
var state_34401__$1 = state_34401;
var statearr_34406_36873 = state_34401__$1;
(statearr_34406_36873[(2)] = inst_34394);

(statearr_34406_36873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (1))){
var state_34401__$1 = state_34401;
var statearr_34407_36875 = state_34401__$1;
(statearr_34407_36875[(2)] = null);

(statearr_34407_36875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (4))){
var inst_34371 = (state_34401[(7)]);
var inst_34371__$1 = (state_34401[(2)]);
var inst_34378 = (inst_34371__$1 == null);
var state_34401__$1 = (function (){var statearr_34408 = state_34401;
(statearr_34408[(7)] = inst_34371__$1);

return statearr_34408;
})();
if(cljs.core.truth_(inst_34378)){
var statearr_34409_36877 = state_34401__$1;
(statearr_34409_36877[(1)] = (5));

} else {
var statearr_34410_36878 = state_34401__$1;
(statearr_34410_36878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (13))){
var state_34401__$1 = state_34401;
var statearr_34411_36879 = state_34401__$1;
(statearr_34411_36879[(2)] = null);

(statearr_34411_36879[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (6))){
var inst_34371 = (state_34401[(7)]);
var state_34401__$1 = state_34401;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34401__$1,(11),to,inst_34371);
} else {
if((state_val_34402 === (3))){
var inst_34399 = (state_34401[(2)]);
var state_34401__$1 = state_34401;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34401__$1,inst_34399);
} else {
if((state_val_34402 === (12))){
var state_34401__$1 = state_34401;
var statearr_34412_36882 = state_34401__$1;
(statearr_34412_36882[(2)] = null);

(statearr_34412_36882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (2))){
var state_34401__$1 = state_34401;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34401__$1,(4),from);
} else {
if((state_val_34402 === (11))){
var inst_34387 = (state_34401[(2)]);
var state_34401__$1 = state_34401;
if(cljs.core.truth_(inst_34387)){
var statearr_34413_36884 = state_34401__$1;
(statearr_34413_36884[(1)] = (12));

} else {
var statearr_34414_36885 = state_34401__$1;
(statearr_34414_36885[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (9))){
var state_34401__$1 = state_34401;
var statearr_34415_36886 = state_34401__$1;
(statearr_34415_36886[(2)] = null);

(statearr_34415_36886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (5))){
var state_34401__$1 = state_34401;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34419_36888 = state_34401__$1;
(statearr_34419_36888[(1)] = (8));

} else {
var statearr_34420_36889 = state_34401__$1;
(statearr_34420_36889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (14))){
var inst_34392 = (state_34401[(2)]);
var state_34401__$1 = state_34401;
var statearr_34427_36890 = state_34401__$1;
(statearr_34427_36890[(2)] = inst_34392);

(statearr_34427_36890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (10))){
var inst_34384 = (state_34401[(2)]);
var state_34401__$1 = state_34401;
var statearr_34428_36892 = state_34401__$1;
(statearr_34428_36892[(2)] = inst_34384);

(statearr_34428_36892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (8))){
var inst_34381 = cljs.core.async.close_BANG_(to);
var state_34401__$1 = state_34401;
var statearr_34432_36894 = state_34401__$1;
(statearr_34432_36894[(2)] = inst_34381);

(statearr_34432_36894[(1)] = (10));


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
var statearr_34433 = [null,null,null,null,null,null,null,null];
(statearr_34433[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_34433[(1)] = (1));

return statearr_34433;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_34401){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34401);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34434){if((e34434 instanceof Object)){
var ex__34203__auto__ = e34434;
var statearr_34435_36897 = state_34401;
(statearr_34435_36897[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34434;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36898 = state_34401;
state_34401 = G__36898;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_34401){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_34401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34268__auto__ = (function (){var statearr_34436 = (f__34267__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34267__auto__.cljs$core$IFn$_invoke$arity$0() : f__34267__auto__.call(null));
(statearr_34436[(6)] = c__34266__auto___36872);

return statearr_34436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34268__auto__);
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
var process = (function (p__34437){
var vec__34438 = p__34437;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34438,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34438,(1),null);
var job = vec__34438;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34266__auto___36902 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34267__auto__ = (function (){var switch__34199__auto__ = (function (state_34445){
var state_val_34446 = (state_34445[(1)]);
if((state_val_34446 === (1))){
var state_34445__$1 = state_34445;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34445__$1,(2),res,v);
} else {
if((state_val_34446 === (2))){
var inst_34442 = (state_34445[(2)]);
var inst_34443 = cljs.core.async.close_BANG_(res);
var state_34445__$1 = (function (){var statearr_34447 = state_34445;
(statearr_34447[(7)] = inst_34442);

return statearr_34447;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34445__$1,inst_34443);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_34448 = [null,null,null,null,null,null,null,null];
(statearr_34448[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34448[(1)] = (1));

return statearr_34448;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34445){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34445);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34449){if((e34449 instanceof Object)){
var ex__34203__auto__ = e34449;
var statearr_34450_36905 = state_34445;
(statearr_34450_36905[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34449;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36907 = state_34445;
state_34445 = G__36907;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34445){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
})();
var state__34268__auto__ = (function (){var statearr_34451 = (f__34267__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34267__auto__.cljs$core$IFn$_invoke$arity$0() : f__34267__auto__.call(null));
(statearr_34451[(6)] = c__34266__auto___36902);

return statearr_34451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34268__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34452){
var vec__34453 = p__34452;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34453,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34453,(1),null);
var job = vec__34453;
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
var n__4666__auto___36910 = n;
var __36911 = (0);
while(true){
if((__36911 < n__4666__auto___36910)){
var G__34456_36912 = type;
var G__34456_36913__$1 = (((G__34456_36912 instanceof cljs.core.Keyword))?G__34456_36912.fqn:null);
switch (G__34456_36913__$1) {
case "compute":
var c__34266__auto___36916 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36911,c__34266__auto___36916,G__34456_36912,G__34456_36913__$1,n__4666__auto___36910,jobs,results,process,async){
return (function (){
var f__34267__auto__ = (function (){var switch__34199__auto__ = ((function (__36911,c__34266__auto___36916,G__34456_36912,G__34456_36913__$1,n__4666__auto___36910,jobs,results,process,async){
return (function (state_34469){
var state_val_34470 = (state_34469[(1)]);
if((state_val_34470 === (1))){
var state_34469__$1 = state_34469;
var statearr_34471_36918 = state_34469__$1;
(statearr_34471_36918[(2)] = null);

(statearr_34471_36918[(1)] = (2));


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
var statearr_34473_36920 = state_34469__$1;
(statearr_34473_36920[(1)] = (5));

} else {
var statearr_34477_36921 = state_34469__$1;
(statearr_34477_36921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34470 === (5))){
var state_34469__$1 = state_34469;
var statearr_34478_36923 = state_34469__$1;
(statearr_34478_36923[(2)] = null);

(statearr_34478_36923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34470 === (6))){
var state_34469__$1 = state_34469;
var statearr_34479_36924 = state_34469__$1;
(statearr_34479_36924[(2)] = null);

(statearr_34479_36924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34470 === (7))){
var inst_34465 = (state_34469[(2)]);
var state_34469__$1 = state_34469;
var statearr_34480_36926 = state_34469__$1;
(statearr_34480_36926[(2)] = inst_34465);

(statearr_34480_36926[(1)] = (3));


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
});})(__36911,c__34266__auto___36916,G__34456_36912,G__34456_36913__$1,n__4666__auto___36910,jobs,results,process,async))
;
return ((function (__36911,switch__34199__auto__,c__34266__auto___36916,G__34456_36912,G__34456_36913__$1,n__4666__auto___36910,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_34481 = [null,null,null,null,null,null,null];
(statearr_34481[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34481[(1)] = (1));

return statearr_34481;
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
}catch (e34483){if((e34483 instanceof Object)){
var ex__34203__auto__ = e34483;
var statearr_34484_36929 = state_34469;
(statearr_34484_36929[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34483;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36930 = state_34469;
state_34469 = G__36930;
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
;})(__36911,switch__34199__auto__,c__34266__auto___36916,G__34456_36912,G__34456_36913__$1,n__4666__auto___36910,jobs,results,process,async))
})();
var state__34268__auto__ = (function (){var statearr_34485 = (f__34267__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34267__auto__.cljs$core$IFn$_invoke$arity$0() : f__34267__auto__.call(null));
(statearr_34485[(6)] = c__34266__auto___36916);

return statearr_34485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34268__auto__);
});})(__36911,c__34266__auto___36916,G__34456_36912,G__34456_36913__$1,n__4666__auto___36910,jobs,results,process,async))
);


break;
case "async":
var c__34266__auto___36932 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36911,c__34266__auto___36932,G__34456_36912,G__34456_36913__$1,n__4666__auto___36910,jobs,results,process,async){
return (function (){
var f__34267__auto__ = (function (){var switch__34199__auto__ = ((function (__36911,c__34266__auto___36932,G__34456_36912,G__34456_36913__$1,n__4666__auto___36910,jobs,results,process,async){
return (function (state_34498){
var state_val_34499 = (state_34498[(1)]);
if((state_val_34499 === (1))){
var state_34498__$1 = state_34498;
var statearr_34500_36934 = state_34498__$1;
(statearr_34500_36934[(2)] = null);

(statearr_34500_36934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (2))){
var state_34498__$1 = state_34498;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34498__$1,(4),jobs);
} else {
if((state_val_34499 === (3))){
var inst_34496 = (state_34498[(2)]);
var state_34498__$1 = state_34498;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34498__$1,inst_34496);
} else {
if((state_val_34499 === (4))){
var inst_34488 = (state_34498[(2)]);
var inst_34489 = async(inst_34488);
var state_34498__$1 = state_34498;
if(cljs.core.truth_(inst_34489)){
var statearr_34502_36936 = state_34498__$1;
(statearr_34502_36936[(1)] = (5));

} else {
var statearr_34503_36938 = state_34498__$1;
(statearr_34503_36938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (5))){
var state_34498__$1 = state_34498;
var statearr_34505_36939 = state_34498__$1;
(statearr_34505_36939[(2)] = null);

(statearr_34505_36939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (6))){
var state_34498__$1 = state_34498;
var statearr_34506_36940 = state_34498__$1;
(statearr_34506_36940[(2)] = null);

(statearr_34506_36940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (7))){
var inst_34494 = (state_34498[(2)]);
var state_34498__$1 = state_34498;
var statearr_34507_36941 = state_34498__$1;
(statearr_34507_36941[(2)] = inst_34494);

(statearr_34507_36941[(1)] = (3));


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
});})(__36911,c__34266__auto___36932,G__34456_36912,G__34456_36913__$1,n__4666__auto___36910,jobs,results,process,async))
;
return ((function (__36911,switch__34199__auto__,c__34266__auto___36932,G__34456_36912,G__34456_36913__$1,n__4666__auto___36910,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_34509 = [null,null,null,null,null,null,null];
(statearr_34509[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34509[(1)] = (1));

return statearr_34509;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34498){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34498);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34510){if((e34510 instanceof Object)){
var ex__34203__auto__ = e34510;
var statearr_34511_36949 = state_34498;
(statearr_34511_36949[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34510;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36951 = state_34498;
state_34498 = G__36951;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34498){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
;})(__36911,switch__34199__auto__,c__34266__auto___36932,G__34456_36912,G__34456_36913__$1,n__4666__auto___36910,jobs,results,process,async))
})();
var state__34268__auto__ = (function (){var statearr_34512 = (f__34267__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34267__auto__.cljs$core$IFn$_invoke$arity$0() : f__34267__auto__.call(null));
(statearr_34512[(6)] = c__34266__auto___36932);

return statearr_34512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34268__auto__);
});})(__36911,c__34266__auto___36932,G__34456_36912,G__34456_36913__$1,n__4666__auto___36910,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34456_36913__$1)].join('')));

}

var G__36952 = (__36911 + (1));
__36911 = G__36952;
continue;
} else {
}
break;
}

var c__34266__auto___36953 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34267__auto__ = (function (){var switch__34199__auto__ = (function (state_34541){
var state_val_34542 = (state_34541[(1)]);
if((state_val_34542 === (7))){
var inst_34537 = (state_34541[(2)]);
var state_34541__$1 = state_34541;
var statearr_34543_36958 = state_34541__$1;
(statearr_34543_36958[(2)] = inst_34537);

(statearr_34543_36958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34542 === (1))){
var state_34541__$1 = state_34541;
var statearr_34544_36959 = state_34541__$1;
(statearr_34544_36959[(2)] = null);

(statearr_34544_36959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34542 === (4))){
var inst_34517 = (state_34541[(7)]);
var inst_34517__$1 = (state_34541[(2)]);
var inst_34518 = (inst_34517__$1 == null);
var state_34541__$1 = (function (){var statearr_34546 = state_34541;
(statearr_34546[(7)] = inst_34517__$1);

return statearr_34546;
})();
if(cljs.core.truth_(inst_34518)){
var statearr_34547_36961 = state_34541__$1;
(statearr_34547_36961[(1)] = (5));

} else {
var statearr_34548_36962 = state_34541__$1;
(statearr_34548_36962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34542 === (6))){
var inst_34517 = (state_34541[(7)]);
var inst_34522 = (state_34541[(8)]);
var inst_34522__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34528 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34529 = [inst_34517,inst_34522__$1];
var inst_34530 = (new cljs.core.PersistentVector(null,2,(5),inst_34528,inst_34529,null));
var state_34541__$1 = (function (){var statearr_34549 = state_34541;
(statearr_34549[(8)] = inst_34522__$1);

return statearr_34549;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34541__$1,(8),jobs,inst_34530);
} else {
if((state_val_34542 === (3))){
var inst_34539 = (state_34541[(2)]);
var state_34541__$1 = state_34541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34541__$1,inst_34539);
} else {
if((state_val_34542 === (2))){
var state_34541__$1 = state_34541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34541__$1,(4),from);
} else {
if((state_val_34542 === (9))){
var inst_34534 = (state_34541[(2)]);
var state_34541__$1 = (function (){var statearr_34551 = state_34541;
(statearr_34551[(9)] = inst_34534);

return statearr_34551;
})();
var statearr_34555_36963 = state_34541__$1;
(statearr_34555_36963[(2)] = null);

(statearr_34555_36963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34542 === (5))){
var inst_34520 = cljs.core.async.close_BANG_(jobs);
var state_34541__$1 = state_34541;
var statearr_34556_36964 = state_34541__$1;
(statearr_34556_36964[(2)] = inst_34520);

(statearr_34556_36964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34542 === (8))){
var inst_34522 = (state_34541[(8)]);
var inst_34532 = (state_34541[(2)]);
var state_34541__$1 = (function (){var statearr_34557 = state_34541;
(statearr_34557[(10)] = inst_34532);

return statearr_34557;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34541__$1,(9),results,inst_34522);
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
var statearr_34558 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34558[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34558[(1)] = (1));

return statearr_34558;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34541){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34541);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34559){if((e34559 instanceof Object)){
var ex__34203__auto__ = e34559;
var statearr_34560_36965 = state_34541;
(statearr_34560_36965[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34559;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36966 = state_34541;
state_34541 = G__36966;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34541){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
})();
var state__34268__auto__ = (function (){var statearr_34561 = (f__34267__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34267__auto__.cljs$core$IFn$_invoke$arity$0() : f__34267__auto__.call(null));
(statearr_34561[(6)] = c__34266__auto___36953);

return statearr_34561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34268__auto__);
}));


var c__34266__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34267__auto__ = (function (){var switch__34199__auto__ = (function (state_34602){
var state_val_34603 = (state_34602[(1)]);
if((state_val_34603 === (7))){
var inst_34598 = (state_34602[(2)]);
var state_34602__$1 = state_34602;
var statearr_34604_36973 = state_34602__$1;
(statearr_34604_36973[(2)] = inst_34598);

(statearr_34604_36973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (20))){
var state_34602__$1 = state_34602;
var statearr_34605_36974 = state_34602__$1;
(statearr_34605_36974[(2)] = null);

(statearr_34605_36974[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (1))){
var state_34602__$1 = state_34602;
var statearr_34606_36975 = state_34602__$1;
(statearr_34606_36975[(2)] = null);

(statearr_34606_36975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (4))){
var inst_34567 = (state_34602[(7)]);
var inst_34567__$1 = (state_34602[(2)]);
var inst_34568 = (inst_34567__$1 == null);
var state_34602__$1 = (function (){var statearr_34607 = state_34602;
(statearr_34607[(7)] = inst_34567__$1);

return statearr_34607;
})();
if(cljs.core.truth_(inst_34568)){
var statearr_34608_36976 = state_34602__$1;
(statearr_34608_36976[(1)] = (5));

} else {
var statearr_34609_36977 = state_34602__$1;
(statearr_34609_36977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (15))){
var inst_34580 = (state_34602[(8)]);
var state_34602__$1 = state_34602;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34602__$1,(18),to,inst_34580);
} else {
if((state_val_34603 === (21))){
var inst_34593 = (state_34602[(2)]);
var state_34602__$1 = state_34602;
var statearr_34611_36981 = state_34602__$1;
(statearr_34611_36981[(2)] = inst_34593);

(statearr_34611_36981[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (13))){
var inst_34595 = (state_34602[(2)]);
var state_34602__$1 = (function (){var statearr_34613 = state_34602;
(statearr_34613[(9)] = inst_34595);

return statearr_34613;
})();
var statearr_34615_36985 = state_34602__$1;
(statearr_34615_36985[(2)] = null);

(statearr_34615_36985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (6))){
var inst_34567 = (state_34602[(7)]);
var state_34602__$1 = state_34602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34602__$1,(11),inst_34567);
} else {
if((state_val_34603 === (17))){
var inst_34588 = (state_34602[(2)]);
var state_34602__$1 = state_34602;
if(cljs.core.truth_(inst_34588)){
var statearr_34616_36986 = state_34602__$1;
(statearr_34616_36986[(1)] = (19));

} else {
var statearr_34617_36987 = state_34602__$1;
(statearr_34617_36987[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (3))){
var inst_34600 = (state_34602[(2)]);
var state_34602__$1 = state_34602;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34602__$1,inst_34600);
} else {
if((state_val_34603 === (12))){
var inst_34577 = (state_34602[(10)]);
var state_34602__$1 = state_34602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34602__$1,(14),inst_34577);
} else {
if((state_val_34603 === (2))){
var state_34602__$1 = state_34602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34602__$1,(4),results);
} else {
if((state_val_34603 === (19))){
var state_34602__$1 = state_34602;
var statearr_34618_36995 = state_34602__$1;
(statearr_34618_36995[(2)] = null);

(statearr_34618_36995[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (11))){
var inst_34577 = (state_34602[(2)]);
var state_34602__$1 = (function (){var statearr_34619 = state_34602;
(statearr_34619[(10)] = inst_34577);

return statearr_34619;
})();
var statearr_34620_37000 = state_34602__$1;
(statearr_34620_37000[(2)] = null);

(statearr_34620_37000[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (9))){
var state_34602__$1 = state_34602;
var statearr_34621_37003 = state_34602__$1;
(statearr_34621_37003[(2)] = null);

(statearr_34621_37003[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (5))){
var state_34602__$1 = state_34602;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34622_37004 = state_34602__$1;
(statearr_34622_37004[(1)] = (8));

} else {
var statearr_34623_37006 = state_34602__$1;
(statearr_34623_37006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (14))){
var inst_34580 = (state_34602[(8)]);
var inst_34580__$1 = (state_34602[(2)]);
var inst_34581 = (inst_34580__$1 == null);
var inst_34582 = cljs.core.not(inst_34581);
var state_34602__$1 = (function (){var statearr_34624 = state_34602;
(statearr_34624[(8)] = inst_34580__$1);

return statearr_34624;
})();
if(inst_34582){
var statearr_34625_37016 = state_34602__$1;
(statearr_34625_37016[(1)] = (15));

} else {
var statearr_34626_37019 = state_34602__$1;
(statearr_34626_37019[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (16))){
var state_34602__$1 = state_34602;
var statearr_34627_37021 = state_34602__$1;
(statearr_34627_37021[(2)] = false);

(statearr_34627_37021[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (10))){
var inst_34574 = (state_34602[(2)]);
var state_34602__$1 = state_34602;
var statearr_34628_37023 = state_34602__$1;
(statearr_34628_37023[(2)] = inst_34574);

(statearr_34628_37023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (18))){
var inst_34585 = (state_34602[(2)]);
var state_34602__$1 = state_34602;
var statearr_34629_37027 = state_34602__$1;
(statearr_34629_37027[(2)] = inst_34585);

(statearr_34629_37027[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (8))){
var inst_34571 = cljs.core.async.close_BANG_(to);
var state_34602__$1 = state_34602;
var statearr_34630_37033 = state_34602__$1;
(statearr_34630_37033[(2)] = inst_34571);

(statearr_34630_37033[(1)] = (10));


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
var statearr_34631 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34631[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34631[(1)] = (1));

return statearr_34631;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34602){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34602);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34632){if((e34632 instanceof Object)){
var ex__34203__auto__ = e34632;
var statearr_34633_37039 = state_34602;
(statearr_34633_37039[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34632;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37045 = state_34602;
state_34602 = G__37045;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34602){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
})();
var state__34268__auto__ = (function (){var statearr_34634 = (f__34267__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34267__auto__.cljs$core$IFn$_invoke$arity$0() : f__34267__auto__.call(null));
(statearr_34634[(6)] = c__34266__auto__);

return statearr_34634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34268__auto__);
}));

return c__34266__auto__;
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
var G__34636 = arguments.length;
switch (G__34636) {
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
var G__34638 = arguments.length;
switch (G__34638) {
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
var G__34640 = arguments.length;
switch (G__34640) {
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
var c__34266__auto___37079 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34267__auto__ = (function (){var switch__34199__auto__ = (function (state_34666){
var state_val_34667 = (state_34666[(1)]);
if((state_val_34667 === (7))){
var inst_34662 = (state_34666[(2)]);
var state_34666__$1 = state_34666;
var statearr_34668_37081 = state_34666__$1;
(statearr_34668_37081[(2)] = inst_34662);

(statearr_34668_37081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (1))){
var state_34666__$1 = state_34666;
var statearr_34669_37084 = state_34666__$1;
(statearr_34669_37084[(2)] = null);

(statearr_34669_37084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (4))){
var inst_34643 = (state_34666[(7)]);
var inst_34643__$1 = (state_34666[(2)]);
var inst_34644 = (inst_34643__$1 == null);
var state_34666__$1 = (function (){var statearr_34670 = state_34666;
(statearr_34670[(7)] = inst_34643__$1);

return statearr_34670;
})();
if(cljs.core.truth_(inst_34644)){
var statearr_34671_37089 = state_34666__$1;
(statearr_34671_37089[(1)] = (5));

} else {
var statearr_34672_37091 = state_34666__$1;
(statearr_34672_37091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (13))){
var state_34666__$1 = state_34666;
var statearr_34673_37092 = state_34666__$1;
(statearr_34673_37092[(2)] = null);

(statearr_34673_37092[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (6))){
var inst_34643 = (state_34666[(7)]);
var inst_34649 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34643) : p.call(null,inst_34643));
var state_34666__$1 = state_34666;
if(cljs.core.truth_(inst_34649)){
var statearr_34674_37098 = state_34666__$1;
(statearr_34674_37098[(1)] = (9));

} else {
var statearr_34675_37100 = state_34666__$1;
(statearr_34675_37100[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (3))){
var inst_34664 = (state_34666[(2)]);
var state_34666__$1 = state_34666;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34666__$1,inst_34664);
} else {
if((state_val_34667 === (12))){
var state_34666__$1 = state_34666;
var statearr_34676_37103 = state_34666__$1;
(statearr_34676_37103[(2)] = null);

(statearr_34676_37103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (2))){
var state_34666__$1 = state_34666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34666__$1,(4),ch);
} else {
if((state_val_34667 === (11))){
var inst_34643 = (state_34666[(7)]);
var inst_34653 = (state_34666[(2)]);
var state_34666__$1 = state_34666;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34666__$1,(8),inst_34653,inst_34643);
} else {
if((state_val_34667 === (9))){
var state_34666__$1 = state_34666;
var statearr_34677_37107 = state_34666__$1;
(statearr_34677_37107[(2)] = tc);

(statearr_34677_37107[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (5))){
var inst_34646 = cljs.core.async.close_BANG_(tc);
var inst_34647 = cljs.core.async.close_BANG_(fc);
var state_34666__$1 = (function (){var statearr_34678 = state_34666;
(statearr_34678[(8)] = inst_34646);

return statearr_34678;
})();
var statearr_34679_37110 = state_34666__$1;
(statearr_34679_37110[(2)] = inst_34647);

(statearr_34679_37110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (14))){
var inst_34660 = (state_34666[(2)]);
var state_34666__$1 = state_34666;
var statearr_34680_37116 = state_34666__$1;
(statearr_34680_37116[(2)] = inst_34660);

(statearr_34680_37116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (10))){
var state_34666__$1 = state_34666;
var statearr_34681_37117 = state_34666__$1;
(statearr_34681_37117[(2)] = fc);

(statearr_34681_37117[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (8))){
var inst_34655 = (state_34666[(2)]);
var state_34666__$1 = state_34666;
if(cljs.core.truth_(inst_34655)){
var statearr_34682_37120 = state_34666__$1;
(statearr_34682_37120[(1)] = (12));

} else {
var statearr_34683_37121 = state_34666__$1;
(statearr_34683_37121[(1)] = (13));

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
var statearr_34686_37124 = state_34666;
(statearr_34686_37124[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34685;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37127 = state_34666;
state_34666 = G__37127;
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
var state__34268__auto__ = (function (){var statearr_34687 = (f__34267__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34267__auto__.cljs$core$IFn$_invoke$arity$0() : f__34267__auto__.call(null));
(statearr_34687[(6)] = c__34266__auto___37079);

return statearr_34687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34268__auto__);
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
var c__34266__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34267__auto__ = (function (){var switch__34199__auto__ = (function (state_34714){
var state_val_34715 = (state_34714[(1)]);
if((state_val_34715 === (7))){
var inst_34710 = (state_34714[(2)]);
var state_34714__$1 = state_34714;
var statearr_34718_37137 = state_34714__$1;
(statearr_34718_37137[(2)] = inst_34710);

(statearr_34718_37137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34715 === (1))){
var inst_34691 = init;
var state_34714__$1 = (function (){var statearr_34719 = state_34714;
(statearr_34719[(7)] = inst_34691);

return statearr_34719;
})();
var statearr_34721_37138 = state_34714__$1;
(statearr_34721_37138[(2)] = null);

(statearr_34721_37138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34715 === (4))){
var inst_34694 = (state_34714[(8)]);
var inst_34694__$1 = (state_34714[(2)]);
var inst_34695 = (inst_34694__$1 == null);
var state_34714__$1 = (function (){var statearr_34722 = state_34714;
(statearr_34722[(8)] = inst_34694__$1);

return statearr_34722;
})();
if(cljs.core.truth_(inst_34695)){
var statearr_34723_37145 = state_34714__$1;
(statearr_34723_37145[(1)] = (5));

} else {
var statearr_34724_37146 = state_34714__$1;
(statearr_34724_37146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34715 === (6))){
var inst_34698 = (state_34714[(9)]);
var inst_34694 = (state_34714[(8)]);
var inst_34691 = (state_34714[(7)]);
var inst_34698__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34691,inst_34694) : f.call(null,inst_34691,inst_34694));
var inst_34699 = cljs.core.reduced_QMARK_(inst_34698__$1);
var state_34714__$1 = (function (){var statearr_34725 = state_34714;
(statearr_34725[(9)] = inst_34698__$1);

return statearr_34725;
})();
if(inst_34699){
var statearr_34728_37151 = state_34714__$1;
(statearr_34728_37151[(1)] = (8));

} else {
var statearr_34729_37152 = state_34714__$1;
(statearr_34729_37152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34715 === (3))){
var inst_34712 = (state_34714[(2)]);
var state_34714__$1 = state_34714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34714__$1,inst_34712);
} else {
if((state_val_34715 === (2))){
var state_34714__$1 = state_34714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34714__$1,(4),ch);
} else {
if((state_val_34715 === (9))){
var inst_34698 = (state_34714[(9)]);
var inst_34691 = inst_34698;
var state_34714__$1 = (function (){var statearr_34730 = state_34714;
(statearr_34730[(7)] = inst_34691);

return statearr_34730;
})();
var statearr_34731_37163 = state_34714__$1;
(statearr_34731_37163[(2)] = null);

(statearr_34731_37163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34715 === (5))){
var inst_34691 = (state_34714[(7)]);
var state_34714__$1 = state_34714;
var statearr_34732_37165 = state_34714__$1;
(statearr_34732_37165[(2)] = inst_34691);

(statearr_34732_37165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34715 === (10))){
var inst_34708 = (state_34714[(2)]);
var state_34714__$1 = state_34714;
var statearr_34733_37169 = state_34714__$1;
(statearr_34733_37169[(2)] = inst_34708);

(statearr_34733_37169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34715 === (8))){
var inst_34698 = (state_34714[(9)]);
var inst_34704 = cljs.core.deref(inst_34698);
var state_34714__$1 = state_34714;
var statearr_34734_37175 = state_34714__$1;
(statearr_34734_37175[(2)] = inst_34704);

(statearr_34734_37175[(1)] = (10));


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
var statearr_34736 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34736[(0)] = cljs$core$async$reduce_$_state_machine__34200__auto__);

(statearr_34736[(1)] = (1));

return statearr_34736;
});
var cljs$core$async$reduce_$_state_machine__34200__auto____1 = (function (state_34714){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34714);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34737){if((e34737 instanceof Object)){
var ex__34203__auto__ = e34737;
var statearr_34738_37180 = state_34714;
(statearr_34738_37180[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34737;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37184 = state_34714;
state_34714 = G__37184;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34200__auto__ = function(state_34714){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34200__auto____1.call(this,state_34714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34200__auto____0;
cljs$core$async$reduce_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34200__auto____1;
return cljs$core$async$reduce_$_state_machine__34200__auto__;
})()
})();
var state__34268__auto__ = (function (){var statearr_34740 = (f__34267__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34267__auto__.cljs$core$IFn$_invoke$arity$0() : f__34267__auto__.call(null));
(statearr_34740[(6)] = c__34266__auto__);

return statearr_34740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34268__auto__);
}));

return c__34266__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__34266__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34267__auto__ = (function (){var switch__34199__auto__ = (function (state_34747){
var state_val_34748 = (state_34747[(1)]);
if((state_val_34748 === (1))){
var inst_34741 = cljs.core.async.reduce(f__$1,init,ch);
var state_34747__$1 = state_34747;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34747__$1,(2),inst_34741);
} else {
if((state_val_34748 === (2))){
var inst_34743 = (state_34747[(2)]);
var inst_34744 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34743) : f__$1.call(null,inst_34743));
var state_34747__$1 = state_34747;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34747__$1,inst_34744);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34200__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34200__auto____0 = (function (){
var statearr_34753 = [null,null,null,null,null,null,null];
(statearr_34753[(0)] = cljs$core$async$transduce_$_state_machine__34200__auto__);

(statearr_34753[(1)] = (1));

return statearr_34753;
});
var cljs$core$async$transduce_$_state_machine__34200__auto____1 = (function (state_34747){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34747);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34754){if((e34754 instanceof Object)){
var ex__34203__auto__ = e34754;
var statearr_34755_37200 = state_34747;
(statearr_34755_37200[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34754;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37202 = state_34747;
state_34747 = G__37202;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34200__auto__ = function(state_34747){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34200__auto____1.call(this,state_34747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34200__auto____0;
cljs$core$async$transduce_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34200__auto____1;
return cljs$core$async$transduce_$_state_machine__34200__auto__;
})()
})();
var state__34268__auto__ = (function (){var statearr_34756 = (f__34267__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34267__auto__.cljs$core$IFn$_invoke$arity$0() : f__34267__auto__.call(null));
(statearr_34756[(6)] = c__34266__auto__);

return statearr_34756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34268__auto__);
}));

return c__34266__auto__;
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
var G__34759 = arguments.length;
switch (G__34759) {
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
var c__34266__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34267__auto__ = (function (){var switch__34199__auto__ = (function (state_34787){
var state_val_34788 = (state_34787[(1)]);
if((state_val_34788 === (7))){
var inst_34769 = (state_34787[(2)]);
var state_34787__$1 = state_34787;
var statearr_34792_37213 = state_34787__$1;
(statearr_34792_37213[(2)] = inst_34769);

(statearr_34792_37213[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (1))){
var inst_34760 = cljs.core.seq(coll);
var inst_34761 = inst_34760;
var state_34787__$1 = (function (){var statearr_34793 = state_34787;
(statearr_34793[(7)] = inst_34761);

return statearr_34793;
})();
var statearr_34794_37215 = state_34787__$1;
(statearr_34794_37215[(2)] = null);

(statearr_34794_37215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (4))){
var inst_34761 = (state_34787[(7)]);
var inst_34767 = cljs.core.first(inst_34761);
var state_34787__$1 = state_34787;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34787__$1,(7),ch,inst_34767);
} else {
if((state_val_34788 === (13))){
var inst_34781 = (state_34787[(2)]);
var state_34787__$1 = state_34787;
var statearr_34795_37221 = state_34787__$1;
(statearr_34795_37221[(2)] = inst_34781);

(statearr_34795_37221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (6))){
var inst_34772 = (state_34787[(2)]);
var state_34787__$1 = state_34787;
if(cljs.core.truth_(inst_34772)){
var statearr_34796_37226 = state_34787__$1;
(statearr_34796_37226[(1)] = (8));

} else {
var statearr_34797_37227 = state_34787__$1;
(statearr_34797_37227[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (3))){
var inst_34785 = (state_34787[(2)]);
var state_34787__$1 = state_34787;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34787__$1,inst_34785);
} else {
if((state_val_34788 === (12))){
var state_34787__$1 = state_34787;
var statearr_34801_37232 = state_34787__$1;
(statearr_34801_37232[(2)] = null);

(statearr_34801_37232[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (2))){
var inst_34761 = (state_34787[(7)]);
var state_34787__$1 = state_34787;
if(cljs.core.truth_(inst_34761)){
var statearr_34802_37236 = state_34787__$1;
(statearr_34802_37236[(1)] = (4));

} else {
var statearr_34803_37238 = state_34787__$1;
(statearr_34803_37238[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (11))){
var inst_34778 = cljs.core.async.close_BANG_(ch);
var state_34787__$1 = state_34787;
var statearr_34804_37242 = state_34787__$1;
(statearr_34804_37242[(2)] = inst_34778);

(statearr_34804_37242[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (9))){
var state_34787__$1 = state_34787;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34805_37244 = state_34787__$1;
(statearr_34805_37244[(1)] = (11));

} else {
var statearr_34806_37246 = state_34787__$1;
(statearr_34806_37246[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (5))){
var inst_34761 = (state_34787[(7)]);
var state_34787__$1 = state_34787;
var statearr_34807_37250 = state_34787__$1;
(statearr_34807_37250[(2)] = inst_34761);

(statearr_34807_37250[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (10))){
var inst_34783 = (state_34787[(2)]);
var state_34787__$1 = state_34787;
var statearr_34808_37254 = state_34787__$1;
(statearr_34808_37254[(2)] = inst_34783);

(statearr_34808_37254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (8))){
var inst_34761 = (state_34787[(7)]);
var inst_34774 = cljs.core.next(inst_34761);
var inst_34761__$1 = inst_34774;
var state_34787__$1 = (function (){var statearr_34809 = state_34787;
(statearr_34809[(7)] = inst_34761__$1);

return statearr_34809;
})();
var statearr_34810_37259 = state_34787__$1;
(statearr_34810_37259[(2)] = null);

(statearr_34810_37259[(1)] = (2));


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
var statearr_34811 = [null,null,null,null,null,null,null,null];
(statearr_34811[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_34811[(1)] = (1));

return statearr_34811;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_34787){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34787);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34812){if((e34812 instanceof Object)){
var ex__34203__auto__ = e34812;
var statearr_34813_37266 = state_34787;
(statearr_34813_37266[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34812;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37270 = state_34787;
state_34787 = G__37270;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_34787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_34787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34268__auto__ = (function (){var statearr_34814 = (f__34267__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34267__auto__.cljs$core$IFn$_invoke$arity$0() : f__34267__auto__.call(null));
(statearr_34814[(6)] = c__34266__auto__);

return statearr_34814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34268__auto__);
}));

return c__34266__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34822 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34822 = (function (ch,cs,meta34823){
this.ch = ch;
this.cs = cs;
this.meta34823 = meta34823;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34824,meta34823__$1){
var self__ = this;
var _34824__$1 = this;
return (new cljs.core.async.t_cljs$core$async34822(self__.ch,self__.cs,meta34823__$1));
}));

(cljs.core.async.t_cljs$core$async34822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34824){
var self__ = this;
var _34824__$1 = this;
return self__.meta34823;
}));

(cljs.core.async.t_cljs$core$async34822.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34822.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34822.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34822.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34822.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34822.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34822.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34823","meta34823",-78265650,null)], null);
}));

(cljs.core.async.t_cljs$core$async34822.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34822.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34822");

(cljs.core.async.t_cljs$core$async34822.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34822");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34822.
 */
cljs.core.async.__GT_t_cljs$core$async34822 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34822(ch__$1,cs__$1,meta34823){
return (new cljs.core.async.t_cljs$core$async34822(ch__$1,cs__$1,meta34823));
});

}

return (new cljs.core.async.t_cljs$core$async34822(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34266__auto___37318 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34267__auto__ = (function (){var switch__34199__auto__ = (function (state_34971){
var state_val_34972 = (state_34971[(1)]);
if((state_val_34972 === (7))){
var inst_34967 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
var statearr_34973_37325 = state_34971__$1;
(statearr_34973_37325[(2)] = inst_34967);

(statearr_34973_37325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (20))){
var inst_34867 = (state_34971[(7)]);
var inst_34882 = cljs.core.first(inst_34867);
var inst_34883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34882,(0),null);
var inst_34884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34882,(1),null);
var state_34971__$1 = (function (){var statearr_34974 = state_34971;
(statearr_34974[(8)] = inst_34883);

return statearr_34974;
})();
if(cljs.core.truth_(inst_34884)){
var statearr_34975_37333 = state_34971__$1;
(statearr_34975_37333[(1)] = (22));

} else {
var statearr_34976_37334 = state_34971__$1;
(statearr_34976_37334[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (27))){
var inst_34914 = (state_34971[(9)]);
var inst_34833 = (state_34971[(10)]);
var inst_34919 = (state_34971[(11)]);
var inst_34912 = (state_34971[(12)]);
var inst_34919__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34912,inst_34914);
var inst_34920 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34919__$1,inst_34833,done);
var state_34971__$1 = (function (){var statearr_34977 = state_34971;
(statearr_34977[(11)] = inst_34919__$1);

return statearr_34977;
})();
if(cljs.core.truth_(inst_34920)){
var statearr_34978_37338 = state_34971__$1;
(statearr_34978_37338[(1)] = (30));

} else {
var statearr_34979_37340 = state_34971__$1;
(statearr_34979_37340[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (1))){
var state_34971__$1 = state_34971;
var statearr_34980_37344 = state_34971__$1;
(statearr_34980_37344[(2)] = null);

(statearr_34980_37344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (24))){
var inst_34867 = (state_34971[(7)]);
var inst_34889 = (state_34971[(2)]);
var inst_34890 = cljs.core.next(inst_34867);
var inst_34842 = inst_34890;
var inst_34843 = null;
var inst_34844 = (0);
var inst_34845 = (0);
var state_34971__$1 = (function (){var statearr_34981 = state_34971;
(statearr_34981[(13)] = inst_34843);

(statearr_34981[(14)] = inst_34845);

(statearr_34981[(15)] = inst_34844);

(statearr_34981[(16)] = inst_34889);

(statearr_34981[(17)] = inst_34842);

return statearr_34981;
})();
var statearr_34982_37349 = state_34971__$1;
(statearr_34982_37349[(2)] = null);

(statearr_34982_37349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (39))){
var state_34971__$1 = state_34971;
var statearr_34986_37356 = state_34971__$1;
(statearr_34986_37356[(2)] = null);

(statearr_34986_37356[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (4))){
var inst_34833 = (state_34971[(10)]);
var inst_34833__$1 = (state_34971[(2)]);
var inst_34834 = (inst_34833__$1 == null);
var state_34971__$1 = (function (){var statearr_34987 = state_34971;
(statearr_34987[(10)] = inst_34833__$1);

return statearr_34987;
})();
if(cljs.core.truth_(inst_34834)){
var statearr_34988_37359 = state_34971__$1;
(statearr_34988_37359[(1)] = (5));

} else {
var statearr_34989_37361 = state_34971__$1;
(statearr_34989_37361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (15))){
var inst_34843 = (state_34971[(13)]);
var inst_34845 = (state_34971[(14)]);
var inst_34844 = (state_34971[(15)]);
var inst_34842 = (state_34971[(17)]);
var inst_34860 = (state_34971[(2)]);
var inst_34861 = (inst_34845 + (1));
var tmp34983 = inst_34843;
var tmp34984 = inst_34844;
var tmp34985 = inst_34842;
var inst_34842__$1 = tmp34985;
var inst_34843__$1 = tmp34983;
var inst_34844__$1 = tmp34984;
var inst_34845__$1 = inst_34861;
var state_34971__$1 = (function (){var statearr_34990 = state_34971;
(statearr_34990[(13)] = inst_34843__$1);

(statearr_34990[(14)] = inst_34845__$1);

(statearr_34990[(15)] = inst_34844__$1);

(statearr_34990[(18)] = inst_34860);

(statearr_34990[(17)] = inst_34842__$1);

return statearr_34990;
})();
var statearr_34991_37367 = state_34971__$1;
(statearr_34991_37367[(2)] = null);

(statearr_34991_37367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (21))){
var inst_34893 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
var statearr_34995_37373 = state_34971__$1;
(statearr_34995_37373[(2)] = inst_34893);

(statearr_34995_37373[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (31))){
var inst_34919 = (state_34971[(11)]);
var inst_34923 = done(null);
var inst_34924 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34919);
var state_34971__$1 = (function (){var statearr_34996 = state_34971;
(statearr_34996[(19)] = inst_34923);

return statearr_34996;
})();
var statearr_34997_37376 = state_34971__$1;
(statearr_34997_37376[(2)] = inst_34924);

(statearr_34997_37376[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (32))){
var inst_34914 = (state_34971[(9)]);
var inst_34913 = (state_34971[(20)]);
var inst_34912 = (state_34971[(12)]);
var inst_34911 = (state_34971[(21)]);
var inst_34926 = (state_34971[(2)]);
var inst_34927 = (inst_34914 + (1));
var tmp34992 = inst_34913;
var tmp34993 = inst_34912;
var tmp34994 = inst_34911;
var inst_34911__$1 = tmp34994;
var inst_34912__$1 = tmp34993;
var inst_34913__$1 = tmp34992;
var inst_34914__$1 = inst_34927;
var state_34971__$1 = (function (){var statearr_34998 = state_34971;
(statearr_34998[(9)] = inst_34914__$1);

(statearr_34998[(22)] = inst_34926);

(statearr_34998[(20)] = inst_34913__$1);

(statearr_34998[(12)] = inst_34912__$1);

(statearr_34998[(21)] = inst_34911__$1);

return statearr_34998;
})();
var statearr_34999_37386 = state_34971__$1;
(statearr_34999_37386[(2)] = null);

(statearr_34999_37386[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (40))){
var inst_34939 = (state_34971[(23)]);
var inst_34943 = done(null);
var inst_34944 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34939);
var state_34971__$1 = (function (){var statearr_35000 = state_34971;
(statearr_35000[(24)] = inst_34943);

return statearr_35000;
})();
var statearr_35003_37388 = state_34971__$1;
(statearr_35003_37388[(2)] = inst_34944);

(statearr_35003_37388[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (33))){
var inst_34930 = (state_34971[(25)]);
var inst_34932 = cljs.core.chunked_seq_QMARK_(inst_34930);
var state_34971__$1 = state_34971;
if(inst_34932){
var statearr_35005_37389 = state_34971__$1;
(statearr_35005_37389[(1)] = (36));

} else {
var statearr_35007_37393 = state_34971__$1;
(statearr_35007_37393[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (13))){
var inst_34854 = (state_34971[(26)]);
var inst_34857 = cljs.core.async.close_BANG_(inst_34854);
var state_34971__$1 = state_34971;
var statearr_35010_37395 = state_34971__$1;
(statearr_35010_37395[(2)] = inst_34857);

(statearr_35010_37395[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (22))){
var inst_34883 = (state_34971[(8)]);
var inst_34886 = cljs.core.async.close_BANG_(inst_34883);
var state_34971__$1 = state_34971;
var statearr_35011_37397 = state_34971__$1;
(statearr_35011_37397[(2)] = inst_34886);

(statearr_35011_37397[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (36))){
var inst_34930 = (state_34971[(25)]);
var inst_34934 = cljs.core.chunk_first(inst_34930);
var inst_34935 = cljs.core.chunk_rest(inst_34930);
var inst_34936 = cljs.core.count(inst_34934);
var inst_34911 = inst_34935;
var inst_34912 = inst_34934;
var inst_34913 = inst_34936;
var inst_34914 = (0);
var state_34971__$1 = (function (){var statearr_35012 = state_34971;
(statearr_35012[(9)] = inst_34914);

(statearr_35012[(20)] = inst_34913);

(statearr_35012[(12)] = inst_34912);

(statearr_35012[(21)] = inst_34911);

return statearr_35012;
})();
var statearr_35013_37403 = state_34971__$1;
(statearr_35013_37403[(2)] = null);

(statearr_35013_37403[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (41))){
var inst_34930 = (state_34971[(25)]);
var inst_34946 = (state_34971[(2)]);
var inst_34947 = cljs.core.next(inst_34930);
var inst_34911 = inst_34947;
var inst_34912 = null;
var inst_34913 = (0);
var inst_34914 = (0);
var state_34971__$1 = (function (){var statearr_35014 = state_34971;
(statearr_35014[(27)] = inst_34946);

(statearr_35014[(9)] = inst_34914);

(statearr_35014[(20)] = inst_34913);

(statearr_35014[(12)] = inst_34912);

(statearr_35014[(21)] = inst_34911);

return statearr_35014;
})();
var statearr_35015_37410 = state_34971__$1;
(statearr_35015_37410[(2)] = null);

(statearr_35015_37410[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (43))){
var state_34971__$1 = state_34971;
var statearr_35016_37416 = state_34971__$1;
(statearr_35016_37416[(2)] = null);

(statearr_35016_37416[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (29))){
var inst_34955 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
var statearr_35019_37422 = state_34971__$1;
(statearr_35019_37422[(2)] = inst_34955);

(statearr_35019_37422[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (44))){
var inst_34964 = (state_34971[(2)]);
var state_34971__$1 = (function (){var statearr_35023 = state_34971;
(statearr_35023[(28)] = inst_34964);

return statearr_35023;
})();
var statearr_35024_37425 = state_34971__$1;
(statearr_35024_37425[(2)] = null);

(statearr_35024_37425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (6))){
var inst_34903 = (state_34971[(29)]);
var inst_34902 = cljs.core.deref(cs);
var inst_34903__$1 = cljs.core.keys(inst_34902);
var inst_34904 = cljs.core.count(inst_34903__$1);
var inst_34905 = cljs.core.reset_BANG_(dctr,inst_34904);
var inst_34910 = cljs.core.seq(inst_34903__$1);
var inst_34911 = inst_34910;
var inst_34912 = null;
var inst_34913 = (0);
var inst_34914 = (0);
var state_34971__$1 = (function (){var statearr_35026 = state_34971;
(statearr_35026[(30)] = inst_34905);

(statearr_35026[(9)] = inst_34914);

(statearr_35026[(20)] = inst_34913);

(statearr_35026[(29)] = inst_34903__$1);

(statearr_35026[(12)] = inst_34912);

(statearr_35026[(21)] = inst_34911);

return statearr_35026;
})();
var statearr_35027_37440 = state_34971__$1;
(statearr_35027_37440[(2)] = null);

(statearr_35027_37440[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (28))){
var inst_34930 = (state_34971[(25)]);
var inst_34911 = (state_34971[(21)]);
var inst_34930__$1 = cljs.core.seq(inst_34911);
var state_34971__$1 = (function (){var statearr_35028 = state_34971;
(statearr_35028[(25)] = inst_34930__$1);

return statearr_35028;
})();
if(inst_34930__$1){
var statearr_35029_37446 = state_34971__$1;
(statearr_35029_37446[(1)] = (33));

} else {
var statearr_35030_37447 = state_34971__$1;
(statearr_35030_37447[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (25))){
var inst_34914 = (state_34971[(9)]);
var inst_34913 = (state_34971[(20)]);
var inst_34916 = (inst_34914 < inst_34913);
var inst_34917 = inst_34916;
var state_34971__$1 = state_34971;
if(cljs.core.truth_(inst_34917)){
var statearr_35031_37456 = state_34971__$1;
(statearr_35031_37456[(1)] = (27));

} else {
var statearr_35032_37457 = state_34971__$1;
(statearr_35032_37457[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (34))){
var state_34971__$1 = state_34971;
var statearr_35038_37459 = state_34971__$1;
(statearr_35038_37459[(2)] = null);

(statearr_35038_37459[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (17))){
var state_34971__$1 = state_34971;
var statearr_35040_37462 = state_34971__$1;
(statearr_35040_37462[(2)] = null);

(statearr_35040_37462[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (3))){
var inst_34969 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34971__$1,inst_34969);
} else {
if((state_val_34972 === (12))){
var inst_34898 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
var statearr_35041_37469 = state_34971__$1;
(statearr_35041_37469[(2)] = inst_34898);

(statearr_35041_37469[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (2))){
var state_34971__$1 = state_34971;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34971__$1,(4),ch);
} else {
if((state_val_34972 === (23))){
var state_34971__$1 = state_34971;
var statearr_35042_37475 = state_34971__$1;
(statearr_35042_37475[(2)] = null);

(statearr_35042_37475[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (35))){
var inst_34953 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
var statearr_35045_37478 = state_34971__$1;
(statearr_35045_37478[(2)] = inst_34953);

(statearr_35045_37478[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (19))){
var inst_34867 = (state_34971[(7)]);
var inst_34874 = cljs.core.chunk_first(inst_34867);
var inst_34875 = cljs.core.chunk_rest(inst_34867);
var inst_34876 = cljs.core.count(inst_34874);
var inst_34842 = inst_34875;
var inst_34843 = inst_34874;
var inst_34844 = inst_34876;
var inst_34845 = (0);
var state_34971__$1 = (function (){var statearr_35049 = state_34971;
(statearr_35049[(13)] = inst_34843);

(statearr_35049[(14)] = inst_34845);

(statearr_35049[(15)] = inst_34844);

(statearr_35049[(17)] = inst_34842);

return statearr_35049;
})();
var statearr_35051_37487 = state_34971__$1;
(statearr_35051_37487[(2)] = null);

(statearr_35051_37487[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (11))){
var inst_34867 = (state_34971[(7)]);
var inst_34842 = (state_34971[(17)]);
var inst_34867__$1 = cljs.core.seq(inst_34842);
var state_34971__$1 = (function (){var statearr_35052 = state_34971;
(statearr_35052[(7)] = inst_34867__$1);

return statearr_35052;
})();
if(inst_34867__$1){
var statearr_35053_37491 = state_34971__$1;
(statearr_35053_37491[(1)] = (16));

} else {
var statearr_35054_37495 = state_34971__$1;
(statearr_35054_37495[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (9))){
var inst_34900 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
var statearr_35056_37498 = state_34971__$1;
(statearr_35056_37498[(2)] = inst_34900);

(statearr_35056_37498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (5))){
var inst_34840 = cljs.core.deref(cs);
var inst_34841 = cljs.core.seq(inst_34840);
var inst_34842 = inst_34841;
var inst_34843 = null;
var inst_34844 = (0);
var inst_34845 = (0);
var state_34971__$1 = (function (){var statearr_35060 = state_34971;
(statearr_35060[(13)] = inst_34843);

(statearr_35060[(14)] = inst_34845);

(statearr_35060[(15)] = inst_34844);

(statearr_35060[(17)] = inst_34842);

return statearr_35060;
})();
var statearr_35061_37506 = state_34971__$1;
(statearr_35061_37506[(2)] = null);

(statearr_35061_37506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (14))){
var state_34971__$1 = state_34971;
var statearr_35077_37508 = state_34971__$1;
(statearr_35077_37508[(2)] = null);

(statearr_35077_37508[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (45))){
var inst_34961 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
var statearr_35078_37510 = state_34971__$1;
(statearr_35078_37510[(2)] = inst_34961);

(statearr_35078_37510[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (26))){
var inst_34903 = (state_34971[(29)]);
var inst_34957 = (state_34971[(2)]);
var inst_34958 = cljs.core.seq(inst_34903);
var state_34971__$1 = (function (){var statearr_35081 = state_34971;
(statearr_35081[(31)] = inst_34957);

return statearr_35081;
})();
if(inst_34958){
var statearr_35084_37522 = state_34971__$1;
(statearr_35084_37522[(1)] = (42));

} else {
var statearr_35085_37523 = state_34971__$1;
(statearr_35085_37523[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (16))){
var inst_34867 = (state_34971[(7)]);
var inst_34869 = cljs.core.chunked_seq_QMARK_(inst_34867);
var state_34971__$1 = state_34971;
if(inst_34869){
var statearr_35086_37526 = state_34971__$1;
(statearr_35086_37526[(1)] = (19));

} else {
var statearr_35087_37527 = state_34971__$1;
(statearr_35087_37527[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (38))){
var inst_34950 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
var statearr_35089_37535 = state_34971__$1;
(statearr_35089_37535[(2)] = inst_34950);

(statearr_35089_37535[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (30))){
var state_34971__$1 = state_34971;
var statearr_35094_37537 = state_34971__$1;
(statearr_35094_37537[(2)] = null);

(statearr_35094_37537[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (10))){
var inst_34843 = (state_34971[(13)]);
var inst_34845 = (state_34971[(14)]);
var inst_34853 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34843,inst_34845);
var inst_34854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34853,(0),null);
var inst_34855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34853,(1),null);
var state_34971__$1 = (function (){var statearr_35102 = state_34971;
(statearr_35102[(26)] = inst_34854);

return statearr_35102;
})();
if(cljs.core.truth_(inst_34855)){
var statearr_35105_37550 = state_34971__$1;
(statearr_35105_37550[(1)] = (13));

} else {
var statearr_35106_37551 = state_34971__$1;
(statearr_35106_37551[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (18))){
var inst_34896 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
var statearr_35112_37553 = state_34971__$1;
(statearr_35112_37553[(2)] = inst_34896);

(statearr_35112_37553[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (42))){
var state_34971__$1 = state_34971;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34971__$1,(45),dchan);
} else {
if((state_val_34972 === (37))){
var inst_34833 = (state_34971[(10)]);
var inst_34930 = (state_34971[(25)]);
var inst_34939 = (state_34971[(23)]);
var inst_34939__$1 = cljs.core.first(inst_34930);
var inst_34940 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34939__$1,inst_34833,done);
var state_34971__$1 = (function (){var statearr_35121 = state_34971;
(statearr_35121[(23)] = inst_34939__$1);

return statearr_35121;
})();
if(cljs.core.truth_(inst_34940)){
var statearr_35124_37564 = state_34971__$1;
(statearr_35124_37564[(1)] = (39));

} else {
var statearr_35127_37567 = state_34971__$1;
(statearr_35127_37567[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (8))){
var inst_34845 = (state_34971[(14)]);
var inst_34844 = (state_34971[(15)]);
var inst_34847 = (inst_34845 < inst_34844);
var inst_34848 = inst_34847;
var state_34971__$1 = state_34971;
if(cljs.core.truth_(inst_34848)){
var statearr_35133_37577 = state_34971__$1;
(statearr_35133_37577[(1)] = (10));

} else {
var statearr_35136_37578 = state_34971__$1;
(statearr_35136_37578[(1)] = (11));

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
var statearr_35146 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35146[(0)] = cljs$core$async$mult_$_state_machine__34200__auto__);

(statearr_35146[(1)] = (1));

return statearr_35146;
});
var cljs$core$async$mult_$_state_machine__34200__auto____1 = (function (state_34971){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34971);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e35151){if((e35151 instanceof Object)){
var ex__34203__auto__ = e35151;
var statearr_35155_37590 = state_34971;
(statearr_35155_37590[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35151;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37593 = state_34971;
state_34971 = G__37593;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34200__auto__ = function(state_34971){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34200__auto____1.call(this,state_34971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34200__auto____0;
cljs$core$async$mult_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34200__auto____1;
return cljs$core$async$mult_$_state_machine__34200__auto__;
})()
})();
var state__34268__auto__ = (function (){var statearr_35164 = (f__34267__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34267__auto__.cljs$core$IFn$_invoke$arity$0() : f__34267__auto__.call(null));
(statearr_35164[(6)] = c__34266__auto___37318);

return statearr_35164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34268__auto__);
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
var G__35177 = arguments.length;
switch (G__35177) {
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
var len__4789__auto___37650 = arguments.length;
var i__4790__auto___37651 = (0);
while(true){
if((i__4790__auto___37651 < len__4789__auto___37650)){
args__4795__auto__.push((arguments[i__4790__auto___37651]));

var G__37654 = (i__4790__auto___37651 + (1));
i__4790__auto___37651 = G__37654;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35288){
var map__35289 = p__35288;
var map__35289__$1 = (((((!((map__35289 == null))))?(((((map__35289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35289):map__35289);
var opts = map__35289__$1;
var statearr_35297_37659 = state;
(statearr_35297_37659[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35303_37660 = state;
(statearr_35303_37660[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35308_37664 = state;
(statearr_35308_37664[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35266){
var G__35267 = cljs.core.first(seq35266);
var seq35266__$1 = cljs.core.next(seq35266);
var G__35268 = cljs.core.first(seq35266__$1);
var seq35266__$2 = cljs.core.next(seq35266__$1);
var G__35269 = cljs.core.first(seq35266__$2);
var seq35266__$3 = cljs.core.next(seq35266__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35267,G__35268,G__35269,seq35266__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35360 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35360 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35361){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35361 = meta35361;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35362,meta35361__$1){
var self__ = this;
var _35362__$1 = this;
return (new cljs.core.async.t_cljs$core$async35360(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35361__$1));
}));

(cljs.core.async.t_cljs$core$async35360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35362){
var self__ = this;
var _35362__$1 = this;
return self__.meta35361;
}));

(cljs.core.async.t_cljs$core$async35360.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35360.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35360.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35360.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35360.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35360.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35360.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35360.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35360.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35361","meta35361",-2113700927,null)], null);
}));

(cljs.core.async.t_cljs$core$async35360.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35360.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35360");

(cljs.core.async.t_cljs$core$async35360.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35360");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35360.
 */
cljs.core.async.__GT_t_cljs$core$async35360 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35360(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35361){
return (new cljs.core.async.t_cljs$core$async35360(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35361));
});

}

return (new cljs.core.async.t_cljs$core$async35360(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34266__auto___37712 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34267__auto__ = (function (){var switch__34199__auto__ = (function (state_35496){
var state_val_35497 = (state_35496[(1)]);
if((state_val_35497 === (7))){
var inst_35391 = (state_35496[(2)]);
var state_35496__$1 = state_35496;
var statearr_35498_37721 = state_35496__$1;
(statearr_35498_37721[(2)] = inst_35391);

(statearr_35498_37721[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (20))){
var inst_35404 = (state_35496[(7)]);
var state_35496__$1 = state_35496;
var statearr_35499_37724 = state_35496__$1;
(statearr_35499_37724[(2)] = inst_35404);

(statearr_35499_37724[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (27))){
var state_35496__$1 = state_35496;
var statearr_35500_37725 = state_35496__$1;
(statearr_35500_37725[(2)] = null);

(statearr_35500_37725[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (1))){
var inst_35377 = (state_35496[(8)]);
var inst_35377__$1 = calc_state();
var inst_35379 = (inst_35377__$1 == null);
var inst_35380 = cljs.core.not(inst_35379);
var state_35496__$1 = (function (){var statearr_35501 = state_35496;
(statearr_35501[(8)] = inst_35377__$1);

return statearr_35501;
})();
if(inst_35380){
var statearr_35502_37735 = state_35496__$1;
(statearr_35502_37735[(1)] = (2));

} else {
var statearr_35503_37736 = state_35496__$1;
(statearr_35503_37736[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (24))){
var inst_35464 = (state_35496[(9)]);
var inst_35430 = (state_35496[(10)]);
var inst_35440 = (state_35496[(11)]);
var inst_35464__$1 = (inst_35430.cljs$core$IFn$_invoke$arity$1 ? inst_35430.cljs$core$IFn$_invoke$arity$1(inst_35440) : inst_35430.call(null,inst_35440));
var state_35496__$1 = (function (){var statearr_35504 = state_35496;
(statearr_35504[(9)] = inst_35464__$1);

return statearr_35504;
})();
if(cljs.core.truth_(inst_35464__$1)){
var statearr_35505_37739 = state_35496__$1;
(statearr_35505_37739[(1)] = (29));

} else {
var statearr_35506_37740 = state_35496__$1;
(statearr_35506_37740[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (4))){
var inst_35394 = (state_35496[(2)]);
var state_35496__$1 = state_35496;
if(cljs.core.truth_(inst_35394)){
var statearr_35507_37742 = state_35496__$1;
(statearr_35507_37742[(1)] = (8));

} else {
var statearr_35508_37748 = state_35496__$1;
(statearr_35508_37748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (15))){
var inst_35424 = (state_35496[(2)]);
var state_35496__$1 = state_35496;
if(cljs.core.truth_(inst_35424)){
var statearr_35509_37751 = state_35496__$1;
(statearr_35509_37751[(1)] = (19));

} else {
var statearr_35510_37752 = state_35496__$1;
(statearr_35510_37752[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (21))){
var inst_35429 = (state_35496[(12)]);
var inst_35429__$1 = (state_35496[(2)]);
var inst_35430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35429__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35429__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35429__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35496__$1 = (function (){var statearr_35511 = state_35496;
(statearr_35511[(13)] = inst_35431);

(statearr_35511[(10)] = inst_35430);

(statearr_35511[(12)] = inst_35429__$1);

return statearr_35511;
})();
return cljs.core.async.ioc_alts_BANG_(state_35496__$1,(22),inst_35432);
} else {
if((state_val_35497 === (31))){
var inst_35477 = (state_35496[(2)]);
var state_35496__$1 = state_35496;
if(cljs.core.truth_(inst_35477)){
var statearr_35514_37763 = state_35496__$1;
(statearr_35514_37763[(1)] = (32));

} else {
var statearr_35515_37764 = state_35496__$1;
(statearr_35515_37764[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (32))){
var inst_35439 = (state_35496[(14)]);
var state_35496__$1 = state_35496;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35496__$1,(35),out,inst_35439);
} else {
if((state_val_35497 === (33))){
var inst_35429 = (state_35496[(12)]);
var inst_35404 = inst_35429;
var state_35496__$1 = (function (){var statearr_35523 = state_35496;
(statearr_35523[(7)] = inst_35404);

return statearr_35523;
})();
var statearr_35524_37767 = state_35496__$1;
(statearr_35524_37767[(2)] = null);

(statearr_35524_37767[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (13))){
var inst_35404 = (state_35496[(7)]);
var inst_35413 = inst_35404.cljs$lang$protocol_mask$partition0$;
var inst_35414 = (inst_35413 & (64));
var inst_35415 = inst_35404.cljs$core$ISeq$;
var inst_35416 = (cljs.core.PROTOCOL_SENTINEL === inst_35415);
var inst_35417 = ((inst_35414) || (inst_35416));
var state_35496__$1 = state_35496;
if(cljs.core.truth_(inst_35417)){
var statearr_35528_37774 = state_35496__$1;
(statearr_35528_37774[(1)] = (16));

} else {
var statearr_35530_37776 = state_35496__$1;
(statearr_35530_37776[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (22))){
var inst_35439 = (state_35496[(14)]);
var inst_35440 = (state_35496[(11)]);
var inst_35438 = (state_35496[(2)]);
var inst_35439__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35438,(0),null);
var inst_35440__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35438,(1),null);
var inst_35442 = (inst_35439__$1 == null);
var inst_35446 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35440__$1,change);
var inst_35447 = ((inst_35442) || (inst_35446));
var state_35496__$1 = (function (){var statearr_35532 = state_35496;
(statearr_35532[(14)] = inst_35439__$1);

(statearr_35532[(11)] = inst_35440__$1);

return statearr_35532;
})();
if(cljs.core.truth_(inst_35447)){
var statearr_35536_37785 = state_35496__$1;
(statearr_35536_37785[(1)] = (23));

} else {
var statearr_35538_37786 = state_35496__$1;
(statearr_35538_37786[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (36))){
var inst_35429 = (state_35496[(12)]);
var inst_35404 = inst_35429;
var state_35496__$1 = (function (){var statearr_35541 = state_35496;
(statearr_35541[(7)] = inst_35404);

return statearr_35541;
})();
var statearr_35545_37787 = state_35496__$1;
(statearr_35545_37787[(2)] = null);

(statearr_35545_37787[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (29))){
var inst_35464 = (state_35496[(9)]);
var state_35496__$1 = state_35496;
var statearr_35549_37788 = state_35496__$1;
(statearr_35549_37788[(2)] = inst_35464);

(statearr_35549_37788[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (6))){
var state_35496__$1 = state_35496;
var statearr_35550_37794 = state_35496__$1;
(statearr_35550_37794[(2)] = false);

(statearr_35550_37794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (28))){
var inst_35456 = (state_35496[(2)]);
var inst_35460 = calc_state();
var inst_35404 = inst_35460;
var state_35496__$1 = (function (){var statearr_35552 = state_35496;
(statearr_35552[(15)] = inst_35456);

(statearr_35552[(7)] = inst_35404);

return statearr_35552;
})();
var statearr_35554_37798 = state_35496__$1;
(statearr_35554_37798[(2)] = null);

(statearr_35554_37798[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (25))){
var inst_35492 = (state_35496[(2)]);
var state_35496__$1 = state_35496;
var statearr_35578_37802 = state_35496__$1;
(statearr_35578_37802[(2)] = inst_35492);

(statearr_35578_37802[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (34))){
var inst_35490 = (state_35496[(2)]);
var state_35496__$1 = state_35496;
var statearr_35581_37805 = state_35496__$1;
(statearr_35581_37805[(2)] = inst_35490);

(statearr_35581_37805[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (17))){
var state_35496__$1 = state_35496;
var statearr_35583_37808 = state_35496__$1;
(statearr_35583_37808[(2)] = false);

(statearr_35583_37808[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (3))){
var state_35496__$1 = state_35496;
var statearr_35585_37810 = state_35496__$1;
(statearr_35585_37810[(2)] = false);

(statearr_35585_37810[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (12))){
var inst_35494 = (state_35496[(2)]);
var state_35496__$1 = state_35496;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35496__$1,inst_35494);
} else {
if((state_val_35497 === (2))){
var inst_35377 = (state_35496[(8)]);
var inst_35382 = inst_35377.cljs$lang$protocol_mask$partition0$;
var inst_35383 = (inst_35382 & (64));
var inst_35384 = inst_35377.cljs$core$ISeq$;
var inst_35385 = (cljs.core.PROTOCOL_SENTINEL === inst_35384);
var inst_35386 = ((inst_35383) || (inst_35385));
var state_35496__$1 = state_35496;
if(cljs.core.truth_(inst_35386)){
var statearr_35589_37818 = state_35496__$1;
(statearr_35589_37818[(1)] = (5));

} else {
var statearr_35592_37819 = state_35496__$1;
(statearr_35592_37819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (23))){
var inst_35439 = (state_35496[(14)]);
var inst_35449 = (inst_35439 == null);
var state_35496__$1 = state_35496;
if(cljs.core.truth_(inst_35449)){
var statearr_35596_37824 = state_35496__$1;
(statearr_35596_37824[(1)] = (26));

} else {
var statearr_35599_37825 = state_35496__$1;
(statearr_35599_37825[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (35))){
var inst_35481 = (state_35496[(2)]);
var state_35496__$1 = state_35496;
if(cljs.core.truth_(inst_35481)){
var statearr_35603_37830 = state_35496__$1;
(statearr_35603_37830[(1)] = (36));

} else {
var statearr_35607_37831 = state_35496__$1;
(statearr_35607_37831[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (19))){
var inst_35404 = (state_35496[(7)]);
var inst_35426 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35404);
var state_35496__$1 = state_35496;
var statearr_35614_37835 = state_35496__$1;
(statearr_35614_37835[(2)] = inst_35426);

(statearr_35614_37835[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (11))){
var inst_35404 = (state_35496[(7)]);
var inst_35410 = (inst_35404 == null);
var inst_35411 = cljs.core.not(inst_35410);
var state_35496__$1 = state_35496;
if(inst_35411){
var statearr_35620_37837 = state_35496__$1;
(statearr_35620_37837[(1)] = (13));

} else {
var statearr_35622_37838 = state_35496__$1;
(statearr_35622_37838[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (9))){
var inst_35377 = (state_35496[(8)]);
var state_35496__$1 = state_35496;
var statearr_35628_37840 = state_35496__$1;
(statearr_35628_37840[(2)] = inst_35377);

(statearr_35628_37840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (5))){
var state_35496__$1 = state_35496;
var statearr_35633_37841 = state_35496__$1;
(statearr_35633_37841[(2)] = true);

(statearr_35633_37841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (14))){
var state_35496__$1 = state_35496;
var statearr_35639_37843 = state_35496__$1;
(statearr_35639_37843[(2)] = false);

(statearr_35639_37843[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (26))){
var inst_35440 = (state_35496[(11)]);
var inst_35453 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35440);
var state_35496__$1 = state_35496;
var statearr_35644_37848 = state_35496__$1;
(statearr_35644_37848[(2)] = inst_35453);

(statearr_35644_37848[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (16))){
var state_35496__$1 = state_35496;
var statearr_35648_37849 = state_35496__$1;
(statearr_35648_37849[(2)] = true);

(statearr_35648_37849[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (38))){
var inst_35486 = (state_35496[(2)]);
var state_35496__$1 = state_35496;
var statearr_35658_37853 = state_35496__$1;
(statearr_35658_37853[(2)] = inst_35486);

(statearr_35658_37853[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (30))){
var inst_35431 = (state_35496[(13)]);
var inst_35430 = (state_35496[(10)]);
var inst_35440 = (state_35496[(11)]);
var inst_35470 = cljs.core.empty_QMARK_(inst_35430);
var inst_35472 = (inst_35431.cljs$core$IFn$_invoke$arity$1 ? inst_35431.cljs$core$IFn$_invoke$arity$1(inst_35440) : inst_35431.call(null,inst_35440));
var inst_35473 = cljs.core.not(inst_35472);
var inst_35474 = ((inst_35470) && (inst_35473));
var state_35496__$1 = state_35496;
var statearr_35666_37857 = state_35496__$1;
(statearr_35666_37857[(2)] = inst_35474);

(statearr_35666_37857[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (10))){
var inst_35377 = (state_35496[(8)]);
var inst_35400 = (state_35496[(2)]);
var inst_35401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35400,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35402 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35400,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35403 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35400,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35404 = inst_35377;
var state_35496__$1 = (function (){var statearr_35673 = state_35496;
(statearr_35673[(16)] = inst_35403);

(statearr_35673[(17)] = inst_35401);

(statearr_35673[(7)] = inst_35404);

(statearr_35673[(18)] = inst_35402);

return statearr_35673;
})();
var statearr_35683_37863 = state_35496__$1;
(statearr_35683_37863[(2)] = null);

(statearr_35683_37863[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (18))){
var inst_35421 = (state_35496[(2)]);
var state_35496__$1 = state_35496;
var statearr_35687_37868 = state_35496__$1;
(statearr_35687_37868[(2)] = inst_35421);

(statearr_35687_37868[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (37))){
var state_35496__$1 = state_35496;
var statearr_35693_37870 = state_35496__$1;
(statearr_35693_37870[(2)] = null);

(statearr_35693_37870[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35497 === (8))){
var inst_35377 = (state_35496[(8)]);
var inst_35397 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35377);
var state_35496__$1 = state_35496;
var statearr_35700_37877 = state_35496__$1;
(statearr_35700_37877[(2)] = inst_35397);

(statearr_35700_37877[(1)] = (10));


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
var statearr_35710 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35710[(0)] = cljs$core$async$mix_$_state_machine__34200__auto__);

(statearr_35710[(1)] = (1));

return statearr_35710;
});
var cljs$core$async$mix_$_state_machine__34200__auto____1 = (function (state_35496){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_35496);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e35715){if((e35715 instanceof Object)){
var ex__34203__auto__ = e35715;
var statearr_35717_37889 = state_35496;
(statearr_35717_37889[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35715;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37890 = state_35496;
state_35496 = G__37890;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34200__auto__ = function(state_35496){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34200__auto____1.call(this,state_35496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34200__auto____0;
cljs$core$async$mix_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34200__auto____1;
return cljs$core$async$mix_$_state_machine__34200__auto__;
})()
})();
var state__34268__auto__ = (function (){var statearr_35725 = (f__34267__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34267__auto__.cljs$core$IFn$_invoke$arity$0() : f__34267__auto__.call(null));
(statearr_35725[(6)] = c__34266__auto___37712);

return statearr_35725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34268__auto__);
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
var G__35738 = arguments.length;
switch (G__35738) {
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
var G__35752 = arguments.length;
switch (G__35752) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35748_SHARP_){
if(cljs.core.truth_((p1__35748_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35748_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35748_SHARP_.call(null,topic)))){
return p1__35748_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35748_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35755 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35755 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35756){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35756 = meta35756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35757,meta35756__$1){
var self__ = this;
var _35757__$1 = this;
return (new cljs.core.async.t_cljs$core$async35755(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35756__$1));
}));

(cljs.core.async.t_cljs$core$async35755.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35757){
var self__ = this;
var _35757__$1 = this;
return self__.meta35756;
}));

(cljs.core.async.t_cljs$core$async35755.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35755.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35755.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35755.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35755.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35755.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35755.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35755.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35756","meta35756",278523997,null)], null);
}));

(cljs.core.async.t_cljs$core$async35755.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35755.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35755");

(cljs.core.async.t_cljs$core$async35755.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35755");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35755.
 */
cljs.core.async.__GT_t_cljs$core$async35755 = (function cljs$core$async$__GT_t_cljs$core$async35755(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35756){
return (new cljs.core.async.t_cljs$core$async35755(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35756));
});

}

return (new cljs.core.async.t_cljs$core$async35755(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34266__auto___37930 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34267__auto__ = (function (){var switch__34199__auto__ = (function (state_35872){
var state_val_35873 = (state_35872[(1)]);
if((state_val_35873 === (7))){
var inst_35866 = (state_35872[(2)]);
var state_35872__$1 = state_35872;
var statearr_35875_37933 = state_35872__$1;
(statearr_35875_37933[(2)] = inst_35866);

(statearr_35875_37933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35873 === (20))){
var state_35872__$1 = state_35872;
var statearr_35876_37935 = state_35872__$1;
(statearr_35876_37935[(2)] = null);

(statearr_35876_37935[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35873 === (1))){
var state_35872__$1 = state_35872;
var statearr_35878_37938 = state_35872__$1;
(statearr_35878_37938[(2)] = null);

(statearr_35878_37938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35873 === (24))){
var inst_35848 = (state_35872[(7)]);
var inst_35858 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35848);
var state_35872__$1 = state_35872;
var statearr_35881_37939 = state_35872__$1;
(statearr_35881_37939[(2)] = inst_35858);

(statearr_35881_37939[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35873 === (4))){
var inst_35796 = (state_35872[(8)]);
var inst_35796__$1 = (state_35872[(2)]);
var inst_35797 = (inst_35796__$1 == null);
var state_35872__$1 = (function (){var statearr_35885 = state_35872;
(statearr_35885[(8)] = inst_35796__$1);

return statearr_35885;
})();
if(cljs.core.truth_(inst_35797)){
var statearr_35886_37940 = state_35872__$1;
(statearr_35886_37940[(1)] = (5));

} else {
var statearr_35887_37941 = state_35872__$1;
(statearr_35887_37941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35873 === (15))){
var inst_35842 = (state_35872[(2)]);
var state_35872__$1 = state_35872;
var statearr_35890_37945 = state_35872__$1;
(statearr_35890_37945[(2)] = inst_35842);

(statearr_35890_37945[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35873 === (21))){
var inst_35863 = (state_35872[(2)]);
var state_35872__$1 = (function (){var statearr_35892 = state_35872;
(statearr_35892[(9)] = inst_35863);

return statearr_35892;
})();
var statearr_35893_37946 = state_35872__$1;
(statearr_35893_37946[(2)] = null);

(statearr_35893_37946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35873 === (13))){
var inst_35823 = (state_35872[(10)]);
var inst_35825 = cljs.core.chunked_seq_QMARK_(inst_35823);
var state_35872__$1 = state_35872;
if(inst_35825){
var statearr_35894_37951 = state_35872__$1;
(statearr_35894_37951[(1)] = (16));

} else {
var statearr_35896_37952 = state_35872__$1;
(statearr_35896_37952[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35873 === (22))){
var inst_35854 = (state_35872[(2)]);
var state_35872__$1 = state_35872;
if(cljs.core.truth_(inst_35854)){
var statearr_35901_37953 = state_35872__$1;
(statearr_35901_37953[(1)] = (23));

} else {
var statearr_35903_37954 = state_35872__$1;
(statearr_35903_37954[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35873 === (6))){
var inst_35848 = (state_35872[(7)]);
var inst_35796 = (state_35872[(8)]);
var inst_35850 = (state_35872[(11)]);
var inst_35848__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35796) : topic_fn.call(null,inst_35796));
var inst_35849 = cljs.core.deref(mults);
var inst_35850__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35849,inst_35848__$1);
var state_35872__$1 = (function (){var statearr_35907 = state_35872;
(statearr_35907[(7)] = inst_35848__$1);

(statearr_35907[(11)] = inst_35850__$1);

return statearr_35907;
})();
if(cljs.core.truth_(inst_35850__$1)){
var statearr_35908_37960 = state_35872__$1;
(statearr_35908_37960[(1)] = (19));

} else {
var statearr_35909_37961 = state_35872__$1;
(statearr_35909_37961[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35873 === (25))){
var inst_35860 = (state_35872[(2)]);
var state_35872__$1 = state_35872;
var statearr_35912_37962 = state_35872__$1;
(statearr_35912_37962[(2)] = inst_35860);

(statearr_35912_37962[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35873 === (17))){
var inst_35823 = (state_35872[(10)]);
var inst_35832 = cljs.core.first(inst_35823);
var inst_35833 = cljs.core.async.muxch_STAR_(inst_35832);
var inst_35834 = cljs.core.async.close_BANG_(inst_35833);
var inst_35835 = cljs.core.next(inst_35823);
var inst_35807 = inst_35835;
var inst_35808 = null;
var inst_35809 = (0);
var inst_35810 = (0);
var state_35872__$1 = (function (){var statearr_35914 = state_35872;
(statearr_35914[(12)] = inst_35808);

(statearr_35914[(13)] = inst_35810);

(statearr_35914[(14)] = inst_35809);

(statearr_35914[(15)] = inst_35834);

(statearr_35914[(16)] = inst_35807);

return statearr_35914;
})();
var statearr_35917_37968 = state_35872__$1;
(statearr_35917_37968[(2)] = null);

(statearr_35917_37968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35873 === (3))){
var inst_35868 = (state_35872[(2)]);
var state_35872__$1 = state_35872;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35872__$1,inst_35868);
} else {
if((state_val_35873 === (12))){
var inst_35844 = (state_35872[(2)]);
var state_35872__$1 = state_35872;
var statearr_35920_37969 = state_35872__$1;
(statearr_35920_37969[(2)] = inst_35844);

(statearr_35920_37969[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35873 === (2))){
var state_35872__$1 = state_35872;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35872__$1,(4),ch);
} else {
if((state_val_35873 === (23))){
var state_35872__$1 = state_35872;
var statearr_35923_37970 = state_35872__$1;
(statearr_35923_37970[(2)] = null);

(statearr_35923_37970[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35873 === (19))){
var inst_35796 = (state_35872[(8)]);
var inst_35850 = (state_35872[(11)]);
var inst_35852 = cljs.core.async.muxch_STAR_(inst_35850);
var state_35872__$1 = state_35872;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35872__$1,(22),inst_35852,inst_35796);
} else {
if((state_val_35873 === (11))){
var inst_35823 = (state_35872[(10)]);
var inst_35807 = (state_35872[(16)]);
var inst_35823__$1 = cljs.core.seq(inst_35807);
var state_35872__$1 = (function (){var statearr_35927 = state_35872;
(statearr_35927[(10)] = inst_35823__$1);

return statearr_35927;
})();
if(inst_35823__$1){
var statearr_35928_37974 = state_35872__$1;
(statearr_35928_37974[(1)] = (13));

} else {
var statearr_35929_37975 = state_35872__$1;
(statearr_35929_37975[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35873 === (9))){
var inst_35846 = (state_35872[(2)]);
var state_35872__$1 = state_35872;
var statearr_35933_37976 = state_35872__$1;
(statearr_35933_37976[(2)] = inst_35846);

(statearr_35933_37976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35873 === (5))){
var inst_35804 = cljs.core.deref(mults);
var inst_35805 = cljs.core.vals(inst_35804);
var inst_35806 = cljs.core.seq(inst_35805);
var inst_35807 = inst_35806;
var inst_35808 = null;
var inst_35809 = (0);
var inst_35810 = (0);
var state_35872__$1 = (function (){var statearr_35935 = state_35872;
(statearr_35935[(12)] = inst_35808);

(statearr_35935[(13)] = inst_35810);

(statearr_35935[(14)] = inst_35809);

(statearr_35935[(16)] = inst_35807);

return statearr_35935;
})();
var statearr_35936_37981 = state_35872__$1;
(statearr_35936_37981[(2)] = null);

(statearr_35936_37981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35873 === (14))){
var state_35872__$1 = state_35872;
var statearr_35943_37982 = state_35872__$1;
(statearr_35943_37982[(2)] = null);

(statearr_35943_37982[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35873 === (16))){
var inst_35823 = (state_35872[(10)]);
var inst_35827 = cljs.core.chunk_first(inst_35823);
var inst_35828 = cljs.core.chunk_rest(inst_35823);
var inst_35829 = cljs.core.count(inst_35827);
var inst_35807 = inst_35828;
var inst_35808 = inst_35827;
var inst_35809 = inst_35829;
var inst_35810 = (0);
var state_35872__$1 = (function (){var statearr_35948 = state_35872;
(statearr_35948[(12)] = inst_35808);

(statearr_35948[(13)] = inst_35810);

(statearr_35948[(14)] = inst_35809);

(statearr_35948[(16)] = inst_35807);

return statearr_35948;
})();
var statearr_35949_37985 = state_35872__$1;
(statearr_35949_37985[(2)] = null);

(statearr_35949_37985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35873 === (10))){
var inst_35808 = (state_35872[(12)]);
var inst_35810 = (state_35872[(13)]);
var inst_35809 = (state_35872[(14)]);
var inst_35807 = (state_35872[(16)]);
var inst_35816 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35808,inst_35810);
var inst_35817 = cljs.core.async.muxch_STAR_(inst_35816);
var inst_35818 = cljs.core.async.close_BANG_(inst_35817);
var inst_35820 = (inst_35810 + (1));
var tmp35939 = inst_35808;
var tmp35940 = inst_35809;
var tmp35941 = inst_35807;
var inst_35807__$1 = tmp35941;
var inst_35808__$1 = tmp35939;
var inst_35809__$1 = tmp35940;
var inst_35810__$1 = inst_35820;
var state_35872__$1 = (function (){var statearr_35953 = state_35872;
(statearr_35953[(12)] = inst_35808__$1);

(statearr_35953[(17)] = inst_35818);

(statearr_35953[(13)] = inst_35810__$1);

(statearr_35953[(14)] = inst_35809__$1);

(statearr_35953[(16)] = inst_35807__$1);

return statearr_35953;
})();
var statearr_35954_37987 = state_35872__$1;
(statearr_35954_37987[(2)] = null);

(statearr_35954_37987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35873 === (18))){
var inst_35839 = (state_35872[(2)]);
var state_35872__$1 = state_35872;
var statearr_35955_37990 = state_35872__$1;
(statearr_35955_37990[(2)] = inst_35839);

(statearr_35955_37990[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35873 === (8))){
var inst_35810 = (state_35872[(13)]);
var inst_35809 = (state_35872[(14)]);
var inst_35812 = (inst_35810 < inst_35809);
var inst_35813 = inst_35812;
var state_35872__$1 = state_35872;
if(cljs.core.truth_(inst_35813)){
var statearr_35959_37991 = state_35872__$1;
(statearr_35959_37991[(1)] = (10));

} else {
var statearr_35961_37992 = state_35872__$1;
(statearr_35961_37992[(1)] = (11));

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
var statearr_35965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35965[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_35965[(1)] = (1));

return statearr_35965;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_35872){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_35872);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e35966){if((e35966 instanceof Object)){
var ex__34203__auto__ = e35966;
var statearr_35967_37996 = state_35872;
(statearr_35967_37996[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35966;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37997 = state_35872;
state_35872 = G__37997;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_35872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_35872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34268__auto__ = (function (){var statearr_35971 = (f__34267__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34267__auto__.cljs$core$IFn$_invoke$arity$0() : f__34267__auto__.call(null));
(statearr_35971[(6)] = c__34266__auto___37930);

return statearr_35971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34268__auto__);
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
var G__35977 = arguments.length;
switch (G__35977) {
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
var G__35988 = arguments.length;
switch (G__35988) {
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
var G__36000 = arguments.length;
switch (G__36000) {
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
var c__34266__auto___38013 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34267__auto__ = (function (){var switch__34199__auto__ = (function (state_36049){
var state_val_36050 = (state_36049[(1)]);
if((state_val_36050 === (7))){
var state_36049__$1 = state_36049;
var statearr_36054_38014 = state_36049__$1;
(statearr_36054_38014[(2)] = null);

(statearr_36054_38014[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36050 === (1))){
var state_36049__$1 = state_36049;
var statearr_36055_38017 = state_36049__$1;
(statearr_36055_38017[(2)] = null);

(statearr_36055_38017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36050 === (4))){
var inst_36007 = (state_36049[(7)]);
var inst_36009 = (inst_36007 < cnt);
var state_36049__$1 = state_36049;
if(cljs.core.truth_(inst_36009)){
var statearr_36059_38019 = state_36049__$1;
(statearr_36059_38019[(1)] = (6));

} else {
var statearr_36061_38020 = state_36049__$1;
(statearr_36061_38020[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36050 === (15))){
var inst_36043 = (state_36049[(2)]);
var state_36049__$1 = state_36049;
var statearr_36064_38021 = state_36049__$1;
(statearr_36064_38021[(2)] = inst_36043);

(statearr_36064_38021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36050 === (13))){
var inst_36035 = cljs.core.async.close_BANG_(out);
var state_36049__$1 = state_36049;
var statearr_36066_38024 = state_36049__$1;
(statearr_36066_38024[(2)] = inst_36035);

(statearr_36066_38024[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36050 === (6))){
var state_36049__$1 = state_36049;
var statearr_36068_38026 = state_36049__$1;
(statearr_36068_38026[(2)] = null);

(statearr_36068_38026[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36050 === (3))){
var inst_36045 = (state_36049[(2)]);
var state_36049__$1 = state_36049;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36049__$1,inst_36045);
} else {
if((state_val_36050 === (12))){
var inst_36032 = (state_36049[(8)]);
var inst_36032__$1 = (state_36049[(2)]);
var inst_36033 = cljs.core.some(cljs.core.nil_QMARK_,inst_36032__$1);
var state_36049__$1 = (function (){var statearr_36080 = state_36049;
(statearr_36080[(8)] = inst_36032__$1);

return statearr_36080;
})();
if(cljs.core.truth_(inst_36033)){
var statearr_36081_38029 = state_36049__$1;
(statearr_36081_38029[(1)] = (13));

} else {
var statearr_36083_38030 = state_36049__$1;
(statearr_36083_38030[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36050 === (2))){
var inst_36006 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36007 = (0);
var state_36049__$1 = (function (){var statearr_36087 = state_36049;
(statearr_36087[(7)] = inst_36007);

(statearr_36087[(9)] = inst_36006);

return statearr_36087;
})();
var statearr_36088_38032 = state_36049__$1;
(statearr_36088_38032[(2)] = null);

(statearr_36088_38032[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36050 === (11))){
var inst_36007 = (state_36049[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36049,(10),Object,null,(9));
var inst_36018 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36007) : chs__$1.call(null,inst_36007));
var inst_36019 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36007) : done.call(null,inst_36007));
var inst_36020 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36018,inst_36019);
var state_36049__$1 = state_36049;
var statearr_36089_38034 = state_36049__$1;
(statearr_36089_38034[(2)] = inst_36020);


cljs.core.async.impl.ioc_helpers.process_exception(state_36049__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36050 === (9))){
var inst_36007 = (state_36049[(7)]);
var inst_36022 = (state_36049[(2)]);
var inst_36023 = (inst_36007 + (1));
var inst_36007__$1 = inst_36023;
var state_36049__$1 = (function (){var statearr_36090 = state_36049;
(statearr_36090[(7)] = inst_36007__$1);

(statearr_36090[(10)] = inst_36022);

return statearr_36090;
})();
var statearr_36092_38037 = state_36049__$1;
(statearr_36092_38037[(2)] = null);

(statearr_36092_38037[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36050 === (5))){
var inst_36029 = (state_36049[(2)]);
var state_36049__$1 = (function (){var statearr_36094 = state_36049;
(statearr_36094[(11)] = inst_36029);

return statearr_36094;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36049__$1,(12),dchan);
} else {
if((state_val_36050 === (14))){
var inst_36032 = (state_36049[(8)]);
var inst_36037 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36032);
var state_36049__$1 = state_36049;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36049__$1,(16),out,inst_36037);
} else {
if((state_val_36050 === (16))){
var inst_36040 = (state_36049[(2)]);
var state_36049__$1 = (function (){var statearr_36099 = state_36049;
(statearr_36099[(12)] = inst_36040);

return statearr_36099;
})();
var statearr_36100_38041 = state_36049__$1;
(statearr_36100_38041[(2)] = null);

(statearr_36100_38041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36050 === (10))){
var inst_36011 = (state_36049[(2)]);
var inst_36012 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36049__$1 = (function (){var statearr_36101 = state_36049;
(statearr_36101[(13)] = inst_36011);

return statearr_36101;
})();
var statearr_36102_38045 = state_36049__$1;
(statearr_36102_38045[(2)] = inst_36012);


cljs.core.async.impl.ioc_helpers.process_exception(state_36049__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36050 === (8))){
var inst_36027 = (state_36049[(2)]);
var state_36049__$1 = state_36049;
var statearr_36103_38046 = state_36049__$1;
(statearr_36103_38046[(2)] = inst_36027);

(statearr_36103_38046[(1)] = (5));


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
var statearr_36108 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36108[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36108[(1)] = (1));

return statearr_36108;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36049){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36049);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36109){if((e36109 instanceof Object)){
var ex__34203__auto__ = e36109;
var statearr_36110_38049 = state_36049;
(statearr_36110_38049[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36109;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38051 = state_36049;
state_36049 = G__38051;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36049){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34268__auto__ = (function (){var statearr_36111 = (f__34267__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34267__auto__.cljs$core$IFn$_invoke$arity$0() : f__34267__auto__.call(null));
(statearr_36111[(6)] = c__34266__auto___38013);

return statearr_36111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34268__auto__);
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
var G__36123 = arguments.length;
switch (G__36123) {
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
var c__34266__auto___38056 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34267__auto__ = (function (){var switch__34199__auto__ = (function (state_36163){
var state_val_36164 = (state_36163[(1)]);
if((state_val_36164 === (7))){
var inst_36137 = (state_36163[(7)]);
var inst_36136 = (state_36163[(8)]);
var inst_36136__$1 = (state_36163[(2)]);
var inst_36137__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36136__$1,(0),null);
var inst_36138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36136__$1,(1),null);
var inst_36139 = (inst_36137__$1 == null);
var state_36163__$1 = (function (){var statearr_36166 = state_36163;
(statearr_36166[(9)] = inst_36138);

(statearr_36166[(7)] = inst_36137__$1);

(statearr_36166[(8)] = inst_36136__$1);

return statearr_36166;
})();
if(cljs.core.truth_(inst_36139)){
var statearr_36168_38059 = state_36163__$1;
(statearr_36168_38059[(1)] = (8));

} else {
var statearr_36170_38060 = state_36163__$1;
(statearr_36170_38060[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36164 === (1))){
var inst_36126 = cljs.core.vec(chs);
var inst_36127 = inst_36126;
var state_36163__$1 = (function (){var statearr_36174 = state_36163;
(statearr_36174[(10)] = inst_36127);

return statearr_36174;
})();
var statearr_36175_38062 = state_36163__$1;
(statearr_36175_38062[(2)] = null);

(statearr_36175_38062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36164 === (4))){
var inst_36127 = (state_36163[(10)]);
var state_36163__$1 = state_36163;
return cljs.core.async.ioc_alts_BANG_(state_36163__$1,(7),inst_36127);
} else {
if((state_val_36164 === (6))){
var inst_36159 = (state_36163[(2)]);
var state_36163__$1 = state_36163;
var statearr_36176_38064 = state_36163__$1;
(statearr_36176_38064[(2)] = inst_36159);

(statearr_36176_38064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36164 === (3))){
var inst_36161 = (state_36163[(2)]);
var state_36163__$1 = state_36163;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36163__$1,inst_36161);
} else {
if((state_val_36164 === (2))){
var inst_36127 = (state_36163[(10)]);
var inst_36129 = cljs.core.count(inst_36127);
var inst_36130 = (inst_36129 > (0));
var state_36163__$1 = state_36163;
if(cljs.core.truth_(inst_36130)){
var statearr_36178_38067 = state_36163__$1;
(statearr_36178_38067[(1)] = (4));

} else {
var statearr_36179_38068 = state_36163__$1;
(statearr_36179_38068[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36164 === (11))){
var inst_36127 = (state_36163[(10)]);
var inst_36150 = (state_36163[(2)]);
var tmp36177 = inst_36127;
var inst_36127__$1 = tmp36177;
var state_36163__$1 = (function (){var statearr_36180 = state_36163;
(statearr_36180[(11)] = inst_36150);

(statearr_36180[(10)] = inst_36127__$1);

return statearr_36180;
})();
var statearr_36181_38070 = state_36163__$1;
(statearr_36181_38070[(2)] = null);

(statearr_36181_38070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36164 === (9))){
var inst_36137 = (state_36163[(7)]);
var state_36163__$1 = state_36163;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36163__$1,(11),out,inst_36137);
} else {
if((state_val_36164 === (5))){
var inst_36157 = cljs.core.async.close_BANG_(out);
var state_36163__$1 = state_36163;
var statearr_36182_38073 = state_36163__$1;
(statearr_36182_38073[(2)] = inst_36157);

(statearr_36182_38073[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36164 === (10))){
var inst_36155 = (state_36163[(2)]);
var state_36163__$1 = state_36163;
var statearr_36187_38074 = state_36163__$1;
(statearr_36187_38074[(2)] = inst_36155);

(statearr_36187_38074[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36164 === (8))){
var inst_36138 = (state_36163[(9)]);
var inst_36137 = (state_36163[(7)]);
var inst_36136 = (state_36163[(8)]);
var inst_36127 = (state_36163[(10)]);
var inst_36145 = (function (){var cs = inst_36127;
var vec__36132 = inst_36136;
var v = inst_36137;
var c = inst_36138;
return (function (p1__36112_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36112_SHARP_);
});
})();
var inst_36146 = cljs.core.filterv(inst_36145,inst_36127);
var inst_36127__$1 = inst_36146;
var state_36163__$1 = (function (){var statearr_36191 = state_36163;
(statearr_36191[(10)] = inst_36127__$1);

return statearr_36191;
})();
var statearr_36192_38077 = state_36163__$1;
(statearr_36192_38077[(2)] = null);

(statearr_36192_38077[(1)] = (2));


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
var statearr_36193 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36193[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36193[(1)] = (1));

return statearr_36193;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36163){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36163);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36194){if((e36194 instanceof Object)){
var ex__34203__auto__ = e36194;
var statearr_36196_38079 = state_36163;
(statearr_36196_38079[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36194;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38080 = state_36163;
state_36163 = G__38080;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34268__auto__ = (function (){var statearr_36199 = (f__34267__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34267__auto__.cljs$core$IFn$_invoke$arity$0() : f__34267__auto__.call(null));
(statearr_36199[(6)] = c__34266__auto___38056);

return statearr_36199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34268__auto__);
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
var G__36205 = arguments.length;
switch (G__36205) {
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
var c__34266__auto___38085 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34267__auto__ = (function (){var switch__34199__auto__ = (function (state_36231){
var state_val_36232 = (state_36231[(1)]);
if((state_val_36232 === (7))){
var inst_36213 = (state_36231[(7)]);
var inst_36213__$1 = (state_36231[(2)]);
var inst_36214 = (inst_36213__$1 == null);
var inst_36215 = cljs.core.not(inst_36214);
var state_36231__$1 = (function (){var statearr_36234 = state_36231;
(statearr_36234[(7)] = inst_36213__$1);

return statearr_36234;
})();
if(inst_36215){
var statearr_36236_38086 = state_36231__$1;
(statearr_36236_38086[(1)] = (8));

} else {
var statearr_36238_38087 = state_36231__$1;
(statearr_36238_38087[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36232 === (1))){
var inst_36208 = (0);
var state_36231__$1 = (function (){var statearr_36239 = state_36231;
(statearr_36239[(8)] = inst_36208);

return statearr_36239;
})();
var statearr_36242_38089 = state_36231__$1;
(statearr_36242_38089[(2)] = null);

(statearr_36242_38089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36232 === (4))){
var state_36231__$1 = state_36231;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36231__$1,(7),ch);
} else {
if((state_val_36232 === (6))){
var inst_36226 = (state_36231[(2)]);
var state_36231__$1 = state_36231;
var statearr_36247_38091 = state_36231__$1;
(statearr_36247_38091[(2)] = inst_36226);

(statearr_36247_38091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36232 === (3))){
var inst_36228 = (state_36231[(2)]);
var inst_36229 = cljs.core.async.close_BANG_(out);
var state_36231__$1 = (function (){var statearr_36249 = state_36231;
(statearr_36249[(9)] = inst_36228);

return statearr_36249;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36231__$1,inst_36229);
} else {
if((state_val_36232 === (2))){
var inst_36208 = (state_36231[(8)]);
var inst_36210 = (inst_36208 < n);
var state_36231__$1 = state_36231;
if(cljs.core.truth_(inst_36210)){
var statearr_36250_38096 = state_36231__$1;
(statearr_36250_38096[(1)] = (4));

} else {
var statearr_36251_38097 = state_36231__$1;
(statearr_36251_38097[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36232 === (11))){
var inst_36208 = (state_36231[(8)]);
var inst_36218 = (state_36231[(2)]);
var inst_36219 = (inst_36208 + (1));
var inst_36208__$1 = inst_36219;
var state_36231__$1 = (function (){var statearr_36257 = state_36231;
(statearr_36257[(10)] = inst_36218);

(statearr_36257[(8)] = inst_36208__$1);

return statearr_36257;
})();
var statearr_36264_38101 = state_36231__$1;
(statearr_36264_38101[(2)] = null);

(statearr_36264_38101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36232 === (9))){
var state_36231__$1 = state_36231;
var statearr_36265_38102 = state_36231__$1;
(statearr_36265_38102[(2)] = null);

(statearr_36265_38102[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36232 === (5))){
var state_36231__$1 = state_36231;
var statearr_36266_38103 = state_36231__$1;
(statearr_36266_38103[(2)] = null);

(statearr_36266_38103[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36232 === (10))){
var inst_36223 = (state_36231[(2)]);
var state_36231__$1 = state_36231;
var statearr_36268_38107 = state_36231__$1;
(statearr_36268_38107[(2)] = inst_36223);

(statearr_36268_38107[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36232 === (8))){
var inst_36213 = (state_36231[(7)]);
var state_36231__$1 = state_36231;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36231__$1,(11),out,inst_36213);
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
var statearr_36270 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36270[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36270[(1)] = (1));

return statearr_36270;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36231){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36231);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36273){if((e36273 instanceof Object)){
var ex__34203__auto__ = e36273;
var statearr_36274_38111 = state_36231;
(statearr_36274_38111[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36273;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38112 = state_36231;
state_36231 = G__38112;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36231){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34268__auto__ = (function (){var statearr_36276 = (f__34267__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34267__auto__.cljs$core$IFn$_invoke$arity$0() : f__34267__auto__.call(null));
(statearr_36276[(6)] = c__34266__auto___38085);

return statearr_36276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34268__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36280 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36280 = (function (f,ch,meta36281){
this.f = f;
this.ch = ch;
this.meta36281 = meta36281;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36282,meta36281__$1){
var self__ = this;
var _36282__$1 = this;
return (new cljs.core.async.t_cljs$core$async36280(self__.f,self__.ch,meta36281__$1));
}));

(cljs.core.async.t_cljs$core$async36280.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36282){
var self__ = this;
var _36282__$1 = this;
return self__.meta36281;
}));

(cljs.core.async.t_cljs$core$async36280.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36280.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36280.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36280.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36280.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36288 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36288 = (function (f,ch,meta36281,_,fn1,meta36289){
this.f = f;
this.ch = ch;
this.meta36281 = meta36281;
this._ = _;
this.fn1 = fn1;
this.meta36289 = meta36289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36290,meta36289__$1){
var self__ = this;
var _36290__$1 = this;
return (new cljs.core.async.t_cljs$core$async36288(self__.f,self__.ch,self__.meta36281,self__._,self__.fn1,meta36289__$1));
}));

(cljs.core.async.t_cljs$core$async36288.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36290){
var self__ = this;
var _36290__$1 = this;
return self__.meta36289;
}));

(cljs.core.async.t_cljs$core$async36288.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36288.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36288.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36288.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36279_SHARP_){
var G__36301 = (((p1__36279_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36279_SHARP_) : self__.f.call(null,p1__36279_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36301) : f1.call(null,G__36301));
});
}));

(cljs.core.async.t_cljs$core$async36288.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36281","meta36281",-1585268573,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36280","cljs.core.async/t_cljs$core$async36280",84944600,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36289","meta36289",1706093421,null)], null);
}));

(cljs.core.async.t_cljs$core$async36288.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36288.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36288");

(cljs.core.async.t_cljs$core$async36288.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36288");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36288.
 */
cljs.core.async.__GT_t_cljs$core$async36288 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36288(f__$1,ch__$1,meta36281__$1,___$2,fn1__$1,meta36289){
return (new cljs.core.async.t_cljs$core$async36288(f__$1,ch__$1,meta36281__$1,___$2,fn1__$1,meta36289));
});

}

return (new cljs.core.async.t_cljs$core$async36288(self__.f,self__.ch,self__.meta36281,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36306 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36306) : self__.f.call(null,G__36306));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36280.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36280.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36280.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36281","meta36281",-1585268573,null)], null);
}));

(cljs.core.async.t_cljs$core$async36280.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36280.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36280");

(cljs.core.async.t_cljs$core$async36280.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36280");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36280.
 */
cljs.core.async.__GT_t_cljs$core$async36280 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36280(f__$1,ch__$1,meta36281){
return (new cljs.core.async.t_cljs$core$async36280(f__$1,ch__$1,meta36281));
});

}

return (new cljs.core.async.t_cljs$core$async36280(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36320 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36320 = (function (f,ch,meta36321){
this.f = f;
this.ch = ch;
this.meta36321 = meta36321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36322,meta36321__$1){
var self__ = this;
var _36322__$1 = this;
return (new cljs.core.async.t_cljs$core$async36320(self__.f,self__.ch,meta36321__$1));
}));

(cljs.core.async.t_cljs$core$async36320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36322){
var self__ = this;
var _36322__$1 = this;
return self__.meta36321;
}));

(cljs.core.async.t_cljs$core$async36320.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36320.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36320.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36320.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36320.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36320.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36320.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36321","meta36321",931301641,null)], null);
}));

(cljs.core.async.t_cljs$core$async36320.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36320.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36320");

(cljs.core.async.t_cljs$core$async36320.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36320");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36320.
 */
cljs.core.async.__GT_t_cljs$core$async36320 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36320(f__$1,ch__$1,meta36321){
return (new cljs.core.async.t_cljs$core$async36320(f__$1,ch__$1,meta36321));
});

}

return (new cljs.core.async.t_cljs$core$async36320(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36333 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36333 = (function (p,ch,meta36334){
this.p = p;
this.ch = ch;
this.meta36334 = meta36334;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36335,meta36334__$1){
var self__ = this;
var _36335__$1 = this;
return (new cljs.core.async.t_cljs$core$async36333(self__.p,self__.ch,meta36334__$1));
}));

(cljs.core.async.t_cljs$core$async36333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36335){
var self__ = this;
var _36335__$1 = this;
return self__.meta36334;
}));

(cljs.core.async.t_cljs$core$async36333.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36333.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36333.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36333.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36333.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36333.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36333.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36333.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36334","meta36334",-466817117,null)], null);
}));

(cljs.core.async.t_cljs$core$async36333.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36333.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36333");

(cljs.core.async.t_cljs$core$async36333.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36333");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36333.
 */
cljs.core.async.__GT_t_cljs$core$async36333 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36333(p__$1,ch__$1,meta36334){
return (new cljs.core.async.t_cljs$core$async36333(p__$1,ch__$1,meta36334));
});

}

return (new cljs.core.async.t_cljs$core$async36333(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36353 = arguments.length;
switch (G__36353) {
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
var c__34266__auto___38138 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34267__auto__ = (function (){var switch__34199__auto__ = (function (state_36383){
var state_val_36384 = (state_36383[(1)]);
if((state_val_36384 === (7))){
var inst_36378 = (state_36383[(2)]);
var state_36383__$1 = state_36383;
var statearr_36393_38139 = state_36383__$1;
(statearr_36393_38139[(2)] = inst_36378);

(statearr_36393_38139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (1))){
var state_36383__$1 = state_36383;
var statearr_36396_38140 = state_36383__$1;
(statearr_36396_38140[(2)] = null);

(statearr_36396_38140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (4))){
var inst_36358 = (state_36383[(7)]);
var inst_36358__$1 = (state_36383[(2)]);
var inst_36359 = (inst_36358__$1 == null);
var state_36383__$1 = (function (){var statearr_36397 = state_36383;
(statearr_36397[(7)] = inst_36358__$1);

return statearr_36397;
})();
if(cljs.core.truth_(inst_36359)){
var statearr_36398_38144 = state_36383__$1;
(statearr_36398_38144[(1)] = (5));

} else {
var statearr_36399_38145 = state_36383__$1;
(statearr_36399_38145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (6))){
var inst_36358 = (state_36383[(7)]);
var inst_36363 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36358) : p.call(null,inst_36358));
var state_36383__$1 = state_36383;
if(cljs.core.truth_(inst_36363)){
var statearr_36401_38146 = state_36383__$1;
(statearr_36401_38146[(1)] = (8));

} else {
var statearr_36403_38147 = state_36383__$1;
(statearr_36403_38147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (3))){
var inst_36380 = (state_36383[(2)]);
var state_36383__$1 = state_36383;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36383__$1,inst_36380);
} else {
if((state_val_36384 === (2))){
var state_36383__$1 = state_36383;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36383__$1,(4),ch);
} else {
if((state_val_36384 === (11))){
var inst_36372 = (state_36383[(2)]);
var state_36383__$1 = state_36383;
var statearr_36405_38151 = state_36383__$1;
(statearr_36405_38151[(2)] = inst_36372);

(statearr_36405_38151[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (9))){
var state_36383__$1 = state_36383;
var statearr_36407_38152 = state_36383__$1;
(statearr_36407_38152[(2)] = null);

(statearr_36407_38152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (5))){
var inst_36361 = cljs.core.async.close_BANG_(out);
var state_36383__$1 = state_36383;
var statearr_36421_38153 = state_36383__$1;
(statearr_36421_38153[(2)] = inst_36361);

(statearr_36421_38153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (10))){
var inst_36375 = (state_36383[(2)]);
var state_36383__$1 = (function (){var statearr_36423 = state_36383;
(statearr_36423[(8)] = inst_36375);

return statearr_36423;
})();
var statearr_36424_38154 = state_36383__$1;
(statearr_36424_38154[(2)] = null);

(statearr_36424_38154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (8))){
var inst_36358 = (state_36383[(7)]);
var state_36383__$1 = state_36383;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36383__$1,(11),out,inst_36358);
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
var statearr_36426 = [null,null,null,null,null,null,null,null,null];
(statearr_36426[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36426[(1)] = (1));

return statearr_36426;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36383){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36383);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36431){if((e36431 instanceof Object)){
var ex__34203__auto__ = e36431;
var statearr_36432_38156 = state_36383;
(statearr_36432_38156[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36431;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38157 = state_36383;
state_36383 = G__38157;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36383){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34268__auto__ = (function (){var statearr_36439 = (f__34267__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34267__auto__.cljs$core$IFn$_invoke$arity$0() : f__34267__auto__.call(null));
(statearr_36439[(6)] = c__34266__auto___38138);

return statearr_36439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34268__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36442 = arguments.length;
switch (G__36442) {
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
var c__34266__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34267__auto__ = (function (){var switch__34199__auto__ = (function (state_36520){
var state_val_36521 = (state_36520[(1)]);
if((state_val_36521 === (7))){
var inst_36515 = (state_36520[(2)]);
var state_36520__$1 = state_36520;
var statearr_36527_38161 = state_36520__$1;
(statearr_36527_38161[(2)] = inst_36515);

(statearr_36527_38161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (20))){
var inst_36483 = (state_36520[(7)]);
var inst_36495 = (state_36520[(2)]);
var inst_36496 = cljs.core.next(inst_36483);
var inst_36467 = inst_36496;
var inst_36468 = null;
var inst_36469 = (0);
var inst_36470 = (0);
var state_36520__$1 = (function (){var statearr_36529 = state_36520;
(statearr_36529[(8)] = inst_36467);

(statearr_36529[(9)] = inst_36468);

(statearr_36529[(10)] = inst_36470);

(statearr_36529[(11)] = inst_36469);

(statearr_36529[(12)] = inst_36495);

return statearr_36529;
})();
var statearr_36530_38162 = state_36520__$1;
(statearr_36530_38162[(2)] = null);

(statearr_36530_38162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (1))){
var state_36520__$1 = state_36520;
var statearr_36533_38163 = state_36520__$1;
(statearr_36533_38163[(2)] = null);

(statearr_36533_38163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (4))){
var inst_36456 = (state_36520[(13)]);
var inst_36456__$1 = (state_36520[(2)]);
var inst_36457 = (inst_36456__$1 == null);
var state_36520__$1 = (function (){var statearr_36536 = state_36520;
(statearr_36536[(13)] = inst_36456__$1);

return statearr_36536;
})();
if(cljs.core.truth_(inst_36457)){
var statearr_36537_38165 = state_36520__$1;
(statearr_36537_38165[(1)] = (5));

} else {
var statearr_36538_38166 = state_36520__$1;
(statearr_36538_38166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (15))){
var state_36520__$1 = state_36520;
var statearr_36542_38167 = state_36520__$1;
(statearr_36542_38167[(2)] = null);

(statearr_36542_38167[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (21))){
var state_36520__$1 = state_36520;
var statearr_36544_38168 = state_36520__$1;
(statearr_36544_38168[(2)] = null);

(statearr_36544_38168[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (13))){
var inst_36467 = (state_36520[(8)]);
var inst_36468 = (state_36520[(9)]);
var inst_36470 = (state_36520[(10)]);
var inst_36469 = (state_36520[(11)]);
var inst_36477 = (state_36520[(2)]);
var inst_36480 = (inst_36470 + (1));
var tmp36539 = inst_36467;
var tmp36540 = inst_36468;
var tmp36541 = inst_36469;
var inst_36467__$1 = tmp36539;
var inst_36468__$1 = tmp36540;
var inst_36469__$1 = tmp36541;
var inst_36470__$1 = inst_36480;
var state_36520__$1 = (function (){var statearr_36546 = state_36520;
(statearr_36546[(8)] = inst_36467__$1);

(statearr_36546[(14)] = inst_36477);

(statearr_36546[(9)] = inst_36468__$1);

(statearr_36546[(10)] = inst_36470__$1);

(statearr_36546[(11)] = inst_36469__$1);

return statearr_36546;
})();
var statearr_36547_38170 = state_36520__$1;
(statearr_36547_38170[(2)] = null);

(statearr_36547_38170[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (22))){
var state_36520__$1 = state_36520;
var statearr_36548_38171 = state_36520__$1;
(statearr_36548_38171[(2)] = null);

(statearr_36548_38171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (6))){
var inst_36456 = (state_36520[(13)]);
var inst_36465 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36456) : f.call(null,inst_36456));
var inst_36466 = cljs.core.seq(inst_36465);
var inst_36467 = inst_36466;
var inst_36468 = null;
var inst_36469 = (0);
var inst_36470 = (0);
var state_36520__$1 = (function (){var statearr_36550 = state_36520;
(statearr_36550[(8)] = inst_36467);

(statearr_36550[(9)] = inst_36468);

(statearr_36550[(10)] = inst_36470);

(statearr_36550[(11)] = inst_36469);

return statearr_36550;
})();
var statearr_36551_38173 = state_36520__$1;
(statearr_36551_38173[(2)] = null);

(statearr_36551_38173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (17))){
var inst_36483 = (state_36520[(7)]);
var inst_36488 = cljs.core.chunk_first(inst_36483);
var inst_36489 = cljs.core.chunk_rest(inst_36483);
var inst_36490 = cljs.core.count(inst_36488);
var inst_36467 = inst_36489;
var inst_36468 = inst_36488;
var inst_36469 = inst_36490;
var inst_36470 = (0);
var state_36520__$1 = (function (){var statearr_36553 = state_36520;
(statearr_36553[(8)] = inst_36467);

(statearr_36553[(9)] = inst_36468);

(statearr_36553[(10)] = inst_36470);

(statearr_36553[(11)] = inst_36469);

return statearr_36553;
})();
var statearr_36554_38175 = state_36520__$1;
(statearr_36554_38175[(2)] = null);

(statearr_36554_38175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (3))){
var inst_36517 = (state_36520[(2)]);
var state_36520__$1 = state_36520;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36520__$1,inst_36517);
} else {
if((state_val_36521 === (12))){
var inst_36504 = (state_36520[(2)]);
var state_36520__$1 = state_36520;
var statearr_36556_38177 = state_36520__$1;
(statearr_36556_38177[(2)] = inst_36504);

(statearr_36556_38177[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (2))){
var state_36520__$1 = state_36520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36520__$1,(4),in$);
} else {
if((state_val_36521 === (23))){
var inst_36513 = (state_36520[(2)]);
var state_36520__$1 = state_36520;
var statearr_36558_38178 = state_36520__$1;
(statearr_36558_38178[(2)] = inst_36513);

(statearr_36558_38178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (19))){
var inst_36499 = (state_36520[(2)]);
var state_36520__$1 = state_36520;
var statearr_36559_38180 = state_36520__$1;
(statearr_36559_38180[(2)] = inst_36499);

(statearr_36559_38180[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (11))){
var inst_36467 = (state_36520[(8)]);
var inst_36483 = (state_36520[(7)]);
var inst_36483__$1 = cljs.core.seq(inst_36467);
var state_36520__$1 = (function (){var statearr_36561 = state_36520;
(statearr_36561[(7)] = inst_36483__$1);

return statearr_36561;
})();
if(inst_36483__$1){
var statearr_36562_38181 = state_36520__$1;
(statearr_36562_38181[(1)] = (14));

} else {
var statearr_36563_38182 = state_36520__$1;
(statearr_36563_38182[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (9))){
var inst_36506 = (state_36520[(2)]);
var inst_36507 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36520__$1 = (function (){var statearr_36564 = state_36520;
(statearr_36564[(15)] = inst_36506);

return statearr_36564;
})();
if(cljs.core.truth_(inst_36507)){
var statearr_36566_38184 = state_36520__$1;
(statearr_36566_38184[(1)] = (21));

} else {
var statearr_36567_38185 = state_36520__$1;
(statearr_36567_38185[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (5))){
var inst_36459 = cljs.core.async.close_BANG_(out);
var state_36520__$1 = state_36520;
var statearr_36568_38186 = state_36520__$1;
(statearr_36568_38186[(2)] = inst_36459);

(statearr_36568_38186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (14))){
var inst_36483 = (state_36520[(7)]);
var inst_36486 = cljs.core.chunked_seq_QMARK_(inst_36483);
var state_36520__$1 = state_36520;
if(inst_36486){
var statearr_36570_38188 = state_36520__$1;
(statearr_36570_38188[(1)] = (17));

} else {
var statearr_36571_38189 = state_36520__$1;
(statearr_36571_38189[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (16))){
var inst_36502 = (state_36520[(2)]);
var state_36520__$1 = state_36520;
var statearr_36572_38190 = state_36520__$1;
(statearr_36572_38190[(2)] = inst_36502);

(statearr_36572_38190[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (10))){
var inst_36468 = (state_36520[(9)]);
var inst_36470 = (state_36520[(10)]);
var inst_36475 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36468,inst_36470);
var state_36520__$1 = state_36520;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36520__$1,(13),out,inst_36475);
} else {
if((state_val_36521 === (18))){
var inst_36483 = (state_36520[(7)]);
var inst_36493 = cljs.core.first(inst_36483);
var state_36520__$1 = state_36520;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36520__$1,(20),out,inst_36493);
} else {
if((state_val_36521 === (8))){
var inst_36470 = (state_36520[(10)]);
var inst_36469 = (state_36520[(11)]);
var inst_36472 = (inst_36470 < inst_36469);
var inst_36473 = inst_36472;
var state_36520__$1 = state_36520;
if(cljs.core.truth_(inst_36473)){
var statearr_36575_38192 = state_36520__$1;
(statearr_36575_38192[(1)] = (10));

} else {
var statearr_36576_38194 = state_36520__$1;
(statearr_36576_38194[(1)] = (11));

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
var statearr_36577 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36577[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__);

(statearr_36577[(1)] = (1));

return statearr_36577;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____1 = (function (state_36520){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36520);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36579){if((e36579 instanceof Object)){
var ex__34203__auto__ = e36579;
var statearr_36580_38196 = state_36520;
(statearr_36580_38196[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36579;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38197 = state_36520;
state_36520 = G__38197;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__ = function(state_36520){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____1.call(this,state_36520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__;
})()
})();
var state__34268__auto__ = (function (){var statearr_36582 = (f__34267__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34267__auto__.cljs$core$IFn$_invoke$arity$0() : f__34267__auto__.call(null));
(statearr_36582[(6)] = c__34266__auto__);

return statearr_36582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34268__auto__);
}));

return c__34266__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36585 = arguments.length;
switch (G__36585) {
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
var G__36589 = arguments.length;
switch (G__36589) {
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
var G__36593 = arguments.length;
switch (G__36593) {
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
var c__34266__auto___38204 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34267__auto__ = (function (){var switch__34199__auto__ = (function (state_36620){
var state_val_36621 = (state_36620[(1)]);
if((state_val_36621 === (7))){
var inst_36614 = (state_36620[(2)]);
var state_36620__$1 = state_36620;
var statearr_36623_38206 = state_36620__$1;
(statearr_36623_38206[(2)] = inst_36614);

(statearr_36623_38206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (1))){
var inst_36596 = null;
var state_36620__$1 = (function (){var statearr_36624 = state_36620;
(statearr_36624[(7)] = inst_36596);

return statearr_36624;
})();
var statearr_36625_38207 = state_36620__$1;
(statearr_36625_38207[(2)] = null);

(statearr_36625_38207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (4))){
var inst_36599 = (state_36620[(8)]);
var inst_36599__$1 = (state_36620[(2)]);
var inst_36600 = (inst_36599__$1 == null);
var inst_36601 = cljs.core.not(inst_36600);
var state_36620__$1 = (function (){var statearr_36627 = state_36620;
(statearr_36627[(8)] = inst_36599__$1);

return statearr_36627;
})();
if(inst_36601){
var statearr_36628_38209 = state_36620__$1;
(statearr_36628_38209[(1)] = (5));

} else {
var statearr_36629_38210 = state_36620__$1;
(statearr_36629_38210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (6))){
var state_36620__$1 = state_36620;
var statearr_36630_38211 = state_36620__$1;
(statearr_36630_38211[(2)] = null);

(statearr_36630_38211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (3))){
var inst_36616 = (state_36620[(2)]);
var inst_36618 = cljs.core.async.close_BANG_(out);
var state_36620__$1 = (function (){var statearr_36632 = state_36620;
(statearr_36632[(9)] = inst_36616);

return statearr_36632;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36620__$1,inst_36618);
} else {
if((state_val_36621 === (2))){
var state_36620__$1 = state_36620;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36620__$1,(4),ch);
} else {
if((state_val_36621 === (11))){
var inst_36599 = (state_36620[(8)]);
var inst_36608 = (state_36620[(2)]);
var inst_36596 = inst_36599;
var state_36620__$1 = (function (){var statearr_36634 = state_36620;
(statearr_36634[(10)] = inst_36608);

(statearr_36634[(7)] = inst_36596);

return statearr_36634;
})();
var statearr_36635_38214 = state_36620__$1;
(statearr_36635_38214[(2)] = null);

(statearr_36635_38214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (9))){
var inst_36599 = (state_36620[(8)]);
var state_36620__$1 = state_36620;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36620__$1,(11),out,inst_36599);
} else {
if((state_val_36621 === (5))){
var inst_36599 = (state_36620[(8)]);
var inst_36596 = (state_36620[(7)]);
var inst_36603 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36599,inst_36596);
var state_36620__$1 = state_36620;
if(inst_36603){
var statearr_36638_38215 = state_36620__$1;
(statearr_36638_38215[(1)] = (8));

} else {
var statearr_36639_38216 = state_36620__$1;
(statearr_36639_38216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (10))){
var inst_36611 = (state_36620[(2)]);
var state_36620__$1 = state_36620;
var statearr_36640_38218 = state_36620__$1;
(statearr_36640_38218[(2)] = inst_36611);

(statearr_36640_38218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (8))){
var inst_36596 = (state_36620[(7)]);
var tmp36636 = inst_36596;
var inst_36596__$1 = tmp36636;
var state_36620__$1 = (function (){var statearr_36642 = state_36620;
(statearr_36642[(7)] = inst_36596__$1);

return statearr_36642;
})();
var statearr_36643_38219 = state_36620__$1;
(statearr_36643_38219[(2)] = null);

(statearr_36643_38219[(1)] = (2));


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
var statearr_36645 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36645[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36645[(1)] = (1));

return statearr_36645;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36620){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36620);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36646){if((e36646 instanceof Object)){
var ex__34203__auto__ = e36646;
var statearr_36647_38220 = state_36620;
(statearr_36647_38220[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36646;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38222 = state_36620;
state_36620 = G__38222;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34268__auto__ = (function (){var statearr_36649 = (f__34267__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34267__auto__.cljs$core$IFn$_invoke$arity$0() : f__34267__auto__.call(null));
(statearr_36649[(6)] = c__34266__auto___38204);

return statearr_36649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34268__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36652 = arguments.length;
switch (G__36652) {
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
var c__34266__auto___38224 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34267__auto__ = (function (){var switch__34199__auto__ = (function (state_36693){
var state_val_36694 = (state_36693[(1)]);
if((state_val_36694 === (7))){
var inst_36689 = (state_36693[(2)]);
var state_36693__$1 = state_36693;
var statearr_36696_38225 = state_36693__$1;
(statearr_36696_38225[(2)] = inst_36689);

(statearr_36696_38225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (1))){
var inst_36655 = (new Array(n));
var inst_36656 = inst_36655;
var inst_36657 = (0);
var state_36693__$1 = (function (){var statearr_36698 = state_36693;
(statearr_36698[(7)] = inst_36656);

(statearr_36698[(8)] = inst_36657);

return statearr_36698;
})();
var statearr_36699_38226 = state_36693__$1;
(statearr_36699_38226[(2)] = null);

(statearr_36699_38226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (4))){
var inst_36660 = (state_36693[(9)]);
var inst_36660__$1 = (state_36693[(2)]);
var inst_36661 = (inst_36660__$1 == null);
var inst_36662 = cljs.core.not(inst_36661);
var state_36693__$1 = (function (){var statearr_36700 = state_36693;
(statearr_36700[(9)] = inst_36660__$1);

return statearr_36700;
})();
if(inst_36662){
var statearr_36701_38227 = state_36693__$1;
(statearr_36701_38227[(1)] = (5));

} else {
var statearr_36703_38228 = state_36693__$1;
(statearr_36703_38228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (15))){
var inst_36683 = (state_36693[(2)]);
var state_36693__$1 = state_36693;
var statearr_36704_38229 = state_36693__$1;
(statearr_36704_38229[(2)] = inst_36683);

(statearr_36704_38229[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (13))){
var state_36693__$1 = state_36693;
var statearr_36705_38230 = state_36693__$1;
(statearr_36705_38230[(2)] = null);

(statearr_36705_38230[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (6))){
var inst_36657 = (state_36693[(8)]);
var inst_36678 = (inst_36657 > (0));
var state_36693__$1 = state_36693;
if(cljs.core.truth_(inst_36678)){
var statearr_36707_38231 = state_36693__$1;
(statearr_36707_38231[(1)] = (12));

} else {
var statearr_36708_38233 = state_36693__$1;
(statearr_36708_38233[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (3))){
var inst_36691 = (state_36693[(2)]);
var state_36693__$1 = state_36693;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36693__$1,inst_36691);
} else {
if((state_val_36694 === (12))){
var inst_36656 = (state_36693[(7)]);
var inst_36681 = cljs.core.vec(inst_36656);
var state_36693__$1 = state_36693;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36693__$1,(15),out,inst_36681);
} else {
if((state_val_36694 === (2))){
var state_36693__$1 = state_36693;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36693__$1,(4),ch);
} else {
if((state_val_36694 === (11))){
var inst_36672 = (state_36693[(2)]);
var inst_36673 = (new Array(n));
var inst_36656 = inst_36673;
var inst_36657 = (0);
var state_36693__$1 = (function (){var statearr_36710 = state_36693;
(statearr_36710[(7)] = inst_36656);

(statearr_36710[(8)] = inst_36657);

(statearr_36710[(10)] = inst_36672);

return statearr_36710;
})();
var statearr_36712_38234 = state_36693__$1;
(statearr_36712_38234[(2)] = null);

(statearr_36712_38234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (9))){
var inst_36656 = (state_36693[(7)]);
var inst_36670 = cljs.core.vec(inst_36656);
var state_36693__$1 = state_36693;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36693__$1,(11),out,inst_36670);
} else {
if((state_val_36694 === (5))){
var inst_36656 = (state_36693[(7)]);
var inst_36657 = (state_36693[(8)]);
var inst_36665 = (state_36693[(11)]);
var inst_36660 = (state_36693[(9)]);
var inst_36664 = (inst_36656[inst_36657] = inst_36660);
var inst_36665__$1 = (inst_36657 + (1));
var inst_36666 = (inst_36665__$1 < n);
var state_36693__$1 = (function (){var statearr_36714 = state_36693;
(statearr_36714[(12)] = inst_36664);

(statearr_36714[(11)] = inst_36665__$1);

return statearr_36714;
})();
if(cljs.core.truth_(inst_36666)){
var statearr_36715_38236 = state_36693__$1;
(statearr_36715_38236[(1)] = (8));

} else {
var statearr_36716_38237 = state_36693__$1;
(statearr_36716_38237[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (14))){
var inst_36686 = (state_36693[(2)]);
var inst_36687 = cljs.core.async.close_BANG_(out);
var state_36693__$1 = (function (){var statearr_36719 = state_36693;
(statearr_36719[(13)] = inst_36686);

return statearr_36719;
})();
var statearr_36720_38238 = state_36693__$1;
(statearr_36720_38238[(2)] = inst_36687);

(statearr_36720_38238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (10))){
var inst_36676 = (state_36693[(2)]);
var state_36693__$1 = state_36693;
var statearr_36721_38239 = state_36693__$1;
(statearr_36721_38239[(2)] = inst_36676);

(statearr_36721_38239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (8))){
var inst_36656 = (state_36693[(7)]);
var inst_36665 = (state_36693[(11)]);
var tmp36717 = inst_36656;
var inst_36656__$1 = tmp36717;
var inst_36657 = inst_36665;
var state_36693__$1 = (function (){var statearr_36723 = state_36693;
(statearr_36723[(7)] = inst_36656__$1);

(statearr_36723[(8)] = inst_36657);

return statearr_36723;
})();
var statearr_36724_38241 = state_36693__$1;
(statearr_36724_38241[(2)] = null);

(statearr_36724_38241[(1)] = (2));


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
var statearr_36726 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36726[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36726[(1)] = (1));

return statearr_36726;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36693){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36693);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36734){if((e36734 instanceof Object)){
var ex__34203__auto__ = e36734;
var statearr_36735_38242 = state_36693;
(statearr_36735_38242[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36734;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38243 = state_36693;
state_36693 = G__38243;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36693){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34268__auto__ = (function (){var statearr_36737 = (f__34267__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34267__auto__.cljs$core$IFn$_invoke$arity$0() : f__34267__auto__.call(null));
(statearr_36737[(6)] = c__34266__auto___38224);

return statearr_36737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34268__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36741 = arguments.length;
switch (G__36741) {
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
var c__34266__auto___38245 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34267__auto__ = (function (){var switch__34199__auto__ = (function (state_36785){
var state_val_36786 = (state_36785[(1)]);
if((state_val_36786 === (7))){
var inst_36781 = (state_36785[(2)]);
var state_36785__$1 = state_36785;
var statearr_36789_38246 = state_36785__$1;
(statearr_36789_38246[(2)] = inst_36781);

(statearr_36789_38246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36786 === (1))){
var inst_36743 = [];
var inst_36744 = inst_36743;
var inst_36745 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36785__$1 = (function (){var statearr_36790 = state_36785;
(statearr_36790[(7)] = inst_36745);

(statearr_36790[(8)] = inst_36744);

return statearr_36790;
})();
var statearr_36791_38247 = state_36785__$1;
(statearr_36791_38247[(2)] = null);

(statearr_36791_38247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36786 === (4))){
var inst_36748 = (state_36785[(9)]);
var inst_36748__$1 = (state_36785[(2)]);
var inst_36749 = (inst_36748__$1 == null);
var inst_36750 = cljs.core.not(inst_36749);
var state_36785__$1 = (function (){var statearr_36793 = state_36785;
(statearr_36793[(9)] = inst_36748__$1);

return statearr_36793;
})();
if(inst_36750){
var statearr_36794_38250 = state_36785__$1;
(statearr_36794_38250[(1)] = (5));

} else {
var statearr_36795_38252 = state_36785__$1;
(statearr_36795_38252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36786 === (15))){
var inst_36775 = (state_36785[(2)]);
var state_36785__$1 = state_36785;
var statearr_36796_38253 = state_36785__$1;
(statearr_36796_38253[(2)] = inst_36775);

(statearr_36796_38253[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36786 === (13))){
var state_36785__$1 = state_36785;
var statearr_36798_38254 = state_36785__$1;
(statearr_36798_38254[(2)] = null);

(statearr_36798_38254[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36786 === (6))){
var inst_36744 = (state_36785[(8)]);
var inst_36770 = inst_36744.length;
var inst_36771 = (inst_36770 > (0));
var state_36785__$1 = state_36785;
if(cljs.core.truth_(inst_36771)){
var statearr_36799_38255 = state_36785__$1;
(statearr_36799_38255[(1)] = (12));

} else {
var statearr_36803_38256 = state_36785__$1;
(statearr_36803_38256[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36786 === (3))){
var inst_36783 = (state_36785[(2)]);
var state_36785__$1 = state_36785;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36785__$1,inst_36783);
} else {
if((state_val_36786 === (12))){
var inst_36744 = (state_36785[(8)]);
var inst_36773 = cljs.core.vec(inst_36744);
var state_36785__$1 = state_36785;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36785__$1,(15),out,inst_36773);
} else {
if((state_val_36786 === (2))){
var state_36785__$1 = state_36785;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36785__$1,(4),ch);
} else {
if((state_val_36786 === (11))){
var inst_36748 = (state_36785[(9)]);
var inst_36752 = (state_36785[(10)]);
var inst_36763 = (state_36785[(2)]);
var inst_36764 = [];
var inst_36765 = inst_36764.push(inst_36748);
var inst_36744 = inst_36764;
var inst_36745 = inst_36752;
var state_36785__$1 = (function (){var statearr_36805 = state_36785;
(statearr_36805[(7)] = inst_36745);

(statearr_36805[(11)] = inst_36765);

(statearr_36805[(12)] = inst_36763);

(statearr_36805[(8)] = inst_36744);

return statearr_36805;
})();
var statearr_36807_38257 = state_36785__$1;
(statearr_36807_38257[(2)] = null);

(statearr_36807_38257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36786 === (9))){
var inst_36744 = (state_36785[(8)]);
var inst_36761 = cljs.core.vec(inst_36744);
var state_36785__$1 = state_36785;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36785__$1,(11),out,inst_36761);
} else {
if((state_val_36786 === (5))){
var inst_36745 = (state_36785[(7)]);
var inst_36748 = (state_36785[(9)]);
var inst_36752 = (state_36785[(10)]);
var inst_36752__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36748) : f.call(null,inst_36748));
var inst_36754 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36752__$1,inst_36745);
var inst_36755 = cljs.core.keyword_identical_QMARK_(inst_36745,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36756 = ((inst_36754) || (inst_36755));
var state_36785__$1 = (function (){var statearr_36809 = state_36785;
(statearr_36809[(10)] = inst_36752__$1);

return statearr_36809;
})();
if(cljs.core.truth_(inst_36756)){
var statearr_36810_38258 = state_36785__$1;
(statearr_36810_38258[(1)] = (8));

} else {
var statearr_36811_38259 = state_36785__$1;
(statearr_36811_38259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36786 === (14))){
var inst_36778 = (state_36785[(2)]);
var inst_36779 = cljs.core.async.close_BANG_(out);
var state_36785__$1 = (function (){var statearr_36814 = state_36785;
(statearr_36814[(13)] = inst_36778);

return statearr_36814;
})();
var statearr_36815_38260 = state_36785__$1;
(statearr_36815_38260[(2)] = inst_36779);

(statearr_36815_38260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36786 === (10))){
var inst_36768 = (state_36785[(2)]);
var state_36785__$1 = state_36785;
var statearr_36816_38261 = state_36785__$1;
(statearr_36816_38261[(2)] = inst_36768);

(statearr_36816_38261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36786 === (8))){
var inst_36744 = (state_36785[(8)]);
var inst_36748 = (state_36785[(9)]);
var inst_36752 = (state_36785[(10)]);
var inst_36758 = inst_36744.push(inst_36748);
var tmp36812 = inst_36744;
var inst_36744__$1 = tmp36812;
var inst_36745 = inst_36752;
var state_36785__$1 = (function (){var statearr_36818 = state_36785;
(statearr_36818[(7)] = inst_36745);

(statearr_36818[(14)] = inst_36758);

(statearr_36818[(8)] = inst_36744__$1);

return statearr_36818;
})();
var statearr_36819_38262 = state_36785__$1;
(statearr_36819_38262[(2)] = null);

(statearr_36819_38262[(1)] = (2));


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
var statearr_36821 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36821[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36821[(1)] = (1));

return statearr_36821;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36785){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36785);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36822){if((e36822 instanceof Object)){
var ex__34203__auto__ = e36822;
var statearr_36823_38263 = state_36785;
(statearr_36823_38263[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36822;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38264 = state_36785;
state_36785 = G__38264;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36785){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34268__auto__ = (function (){var statearr_36825 = (f__34267__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34267__auto__.cljs$core$IFn$_invoke$arity$0() : f__34267__auto__.call(null));
(statearr_36825[(6)] = c__34266__auto___38245);

return statearr_36825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34268__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
