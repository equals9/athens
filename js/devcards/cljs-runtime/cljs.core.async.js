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
var G__34332 = arguments.length;
switch (G__34332) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34333 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34333 = (function (f,blockable,meta34334){
this.f = f;
this.blockable = blockable;
this.meta34334 = meta34334;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34335,meta34334__$1){
var self__ = this;
var _34335__$1 = this;
return (new cljs.core.async.t_cljs$core$async34333(self__.f,self__.blockable,meta34334__$1));
}));

(cljs.core.async.t_cljs$core$async34333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34335){
var self__ = this;
var _34335__$1 = this;
return self__.meta34334;
}));

(cljs.core.async.t_cljs$core$async34333.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34333.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34333.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async34333.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async34333.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34334","meta34334",-578887715,null)], null);
}));

(cljs.core.async.t_cljs$core$async34333.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34333.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34333");

(cljs.core.async.t_cljs$core$async34333.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34333");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34333.
 */
cljs.core.async.__GT_t_cljs$core$async34333 = (function cljs$core$async$__GT_t_cljs$core$async34333(f__$1,blockable__$1,meta34334){
return (new cljs.core.async.t_cljs$core$async34333(f__$1,blockable__$1,meta34334));
});

}

return (new cljs.core.async.t_cljs$core$async34333(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34340 = arguments.length;
switch (G__34340) {
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
var G__34342 = arguments.length;
switch (G__34342) {
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
var G__34344 = arguments.length;
switch (G__34344) {
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
var val_36892 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36892) : fn1.call(null,val_36892));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36892) : fn1.call(null,val_36892));
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
var G__34346 = arguments.length;
switch (G__34346) {
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
var n__4666__auto___36898 = n;
var x_36899 = (0);
while(true){
if((x_36899 < n__4666__auto___36898)){
(a[x_36899] = x_36899);

var G__36901 = (x_36899 + (1));
x_36899 = G__36901;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34347 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34347 = (function (flag,meta34348){
this.flag = flag;
this.meta34348 = meta34348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34349,meta34348__$1){
var self__ = this;
var _34349__$1 = this;
return (new cljs.core.async.t_cljs$core$async34347(self__.flag,meta34348__$1));
}));

(cljs.core.async.t_cljs$core$async34347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34349){
var self__ = this;
var _34349__$1 = this;
return self__.meta34348;
}));

(cljs.core.async.t_cljs$core$async34347.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34347.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34347.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34347.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async34347.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34348","meta34348",2664160,null)], null);
}));

(cljs.core.async.t_cljs$core$async34347.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34347.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34347");

(cljs.core.async.t_cljs$core$async34347.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34347");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34347.
 */
cljs.core.async.__GT_t_cljs$core$async34347 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34347(flag__$1,meta34348){
return (new cljs.core.async.t_cljs$core$async34347(flag__$1,meta34348));
});

}

return (new cljs.core.async.t_cljs$core$async34347(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34351 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34351 = (function (flag,cb,meta34352){
this.flag = flag;
this.cb = cb;
this.meta34352 = meta34352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34353,meta34352__$1){
var self__ = this;
var _34353__$1 = this;
return (new cljs.core.async.t_cljs$core$async34351(self__.flag,self__.cb,meta34352__$1));
}));

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34353){
var self__ = this;
var _34353__$1 = this;
return self__.meta34352;
}));

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34351.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34352","meta34352",58586617,null)], null);
}));

(cljs.core.async.t_cljs$core$async34351.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34351.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34351");

(cljs.core.async.t_cljs$core$async34351.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34351");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34351.
 */
cljs.core.async.__GT_t_cljs$core$async34351 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34351(flag__$1,cb__$1,meta34352){
return (new cljs.core.async.t_cljs$core$async34351(flag__$1,cb__$1,meta34352));
});

}

return (new cljs.core.async.t_cljs$core$async34351(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34362_SHARP_){
var G__34364 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34362_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34364) : fret.call(null,G__34364));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34363_SHARP_){
var G__34365 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34363_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34365) : fret.call(null,G__34365));
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
var G__36920 = (i + (1));
i = G__36920;
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
var len__4789__auto___36923 = arguments.length;
var i__4790__auto___36924 = (0);
while(true){
if((i__4790__auto___36924 < len__4789__auto___36923)){
args__4795__auto__.push((arguments[i__4790__auto___36924]));

var G__36925 = (i__4790__auto___36924 + (1));
i__4790__auto___36924 = G__36925;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34368){
var map__34369 = p__34368;
var map__34369__$1 = (((((!((map__34369 == null))))?(((((map__34369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34369):map__34369);
var opts = map__34369__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34366){
var G__34367 = cljs.core.first(seq34366);
var seq34366__$1 = cljs.core.next(seq34366);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34367,seq34366__$1);
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
var G__34381 = arguments.length;
switch (G__34381) {
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
var c__34274__auto___36933 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34411){
var state_val_34412 = (state_34411[(1)]);
if((state_val_34412 === (7))){
var inst_34407 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34425_36937 = state_34411__$1;
(statearr_34425_36937[(2)] = inst_34407);

(statearr_34425_36937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (1))){
var state_34411__$1 = state_34411;
var statearr_34426_36939 = state_34411__$1;
(statearr_34426_36939[(2)] = null);

(statearr_34426_36939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (4))){
var inst_34390 = (state_34411[(7)]);
var inst_34390__$1 = (state_34411[(2)]);
var inst_34391 = (inst_34390__$1 == null);
var state_34411__$1 = (function (){var statearr_34427 = state_34411;
(statearr_34427[(7)] = inst_34390__$1);

return statearr_34427;
})();
if(cljs.core.truth_(inst_34391)){
var statearr_34428_36945 = state_34411__$1;
(statearr_34428_36945[(1)] = (5));

} else {
var statearr_34429_36946 = state_34411__$1;
(statearr_34429_36946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (13))){
var state_34411__$1 = state_34411;
var statearr_34430_36947 = state_34411__$1;
(statearr_34430_36947[(2)] = null);

(statearr_34430_36947[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (6))){
var inst_34390 = (state_34411[(7)]);
var state_34411__$1 = state_34411;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34411__$1,(11),to,inst_34390);
} else {
if((state_val_34412 === (3))){
var inst_34409 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34411__$1,inst_34409);
} else {
if((state_val_34412 === (12))){
var state_34411__$1 = state_34411;
var statearr_34431_36952 = state_34411__$1;
(statearr_34431_36952[(2)] = null);

(statearr_34431_36952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (2))){
var state_34411__$1 = state_34411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34411__$1,(4),from);
} else {
if((state_val_34412 === (11))){
var inst_34400 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
if(cljs.core.truth_(inst_34400)){
var statearr_34432_36958 = state_34411__$1;
(statearr_34432_36958[(1)] = (12));

} else {
var statearr_34433_36960 = state_34411__$1;
(statearr_34433_36960[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (9))){
var state_34411__$1 = state_34411;
var statearr_34434_36962 = state_34411__$1;
(statearr_34434_36962[(2)] = null);

(statearr_34434_36962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (5))){
var state_34411__$1 = state_34411;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34435_36969 = state_34411__$1;
(statearr_34435_36969[(1)] = (8));

} else {
var statearr_34436_36970 = state_34411__$1;
(statearr_34436_36970[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (14))){
var inst_34405 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34437_36971 = state_34411__$1;
(statearr_34437_36971[(2)] = inst_34405);

(statearr_34437_36971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (10))){
var inst_34397 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34438_36974 = state_34411__$1;
(statearr_34438_36974[(2)] = inst_34397);

(statearr_34438_36974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (8))){
var inst_34394 = cljs.core.async.close_BANG_(to);
var state_34411__$1 = state_34411;
var statearr_34439_36977 = state_34411__$1;
(statearr_34439_36977[(2)] = inst_34394);

(statearr_34439_36977[(1)] = (10));


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
var cljs$core$async$state_machine__34207__auto__ = null;
var cljs$core$async$state_machine__34207__auto____0 = (function (){
var statearr_34440 = [null,null,null,null,null,null,null,null];
(statearr_34440[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34440[(1)] = (1));

return statearr_34440;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34411){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34411);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34441){if((e34441 instanceof Object)){
var ex__34210__auto__ = e34441;
var statearr_34442_36985 = state_34411;
(statearr_34442_36985[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36988 = state_34411;
state_34411 = G__36988;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34411){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34443 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34443[(6)] = c__34274__auto___36933);

return statearr_34443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
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
var process = (function (p__34444){
var vec__34445 = p__34444;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34445,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34445,(1),null);
var job = vec__34445;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34274__auto___37002 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34452){
var state_val_34453 = (state_34452[(1)]);
if((state_val_34453 === (1))){
var state_34452__$1 = state_34452;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34452__$1,(2),res,v);
} else {
if((state_val_34453 === (2))){
var inst_34449 = (state_34452[(2)]);
var inst_34450 = cljs.core.async.close_BANG_(res);
var state_34452__$1 = (function (){var statearr_34454 = state_34452;
(statearr_34454[(7)] = inst_34449);

return statearr_34454;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34452__$1,inst_34450);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34455 = [null,null,null,null,null,null,null,null];
(statearr_34455[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34455[(1)] = (1));

return statearr_34455;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34452){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34452);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34456){if((e34456 instanceof Object)){
var ex__34210__auto__ = e34456;
var statearr_34457_37008 = state_34452;
(statearr_34457_37008[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37012 = state_34452;
state_34452 = G__37012;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34452){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34462 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34462[(6)] = c__34274__auto___37002);

return statearr_34462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34463){
var vec__34464 = p__34463;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34464,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34464,(1),null);
var job = vec__34464;
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
var n__4666__auto___37024 = n;
var __37025 = (0);
while(true){
if((__37025 < n__4666__auto___37024)){
var G__34468_37027 = type;
var G__34468_37028__$1 = (((G__34468_37027 instanceof cljs.core.Keyword))?G__34468_37027.fqn:null);
switch (G__34468_37028__$1) {
case "compute":
var c__34274__auto___37031 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37025,c__34274__auto___37031,G__34468_37027,G__34468_37028__$1,n__4666__auto___37024,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__37025,c__34274__auto___37031,G__34468_37027,G__34468_37028__$1,n__4666__auto___37024,jobs,results,process,async){
return (function (state_34481){
var state_val_34482 = (state_34481[(1)]);
if((state_val_34482 === (1))){
var state_34481__$1 = state_34481;
var statearr_34483_37034 = state_34481__$1;
(statearr_34483_37034[(2)] = null);

(statearr_34483_37034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34482 === (2))){
var state_34481__$1 = state_34481;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34481__$1,(4),jobs);
} else {
if((state_val_34482 === (3))){
var inst_34479 = (state_34481[(2)]);
var state_34481__$1 = state_34481;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34481__$1,inst_34479);
} else {
if((state_val_34482 === (4))){
var inst_34471 = (state_34481[(2)]);
var inst_34472 = process(inst_34471);
var state_34481__$1 = state_34481;
if(cljs.core.truth_(inst_34472)){
var statearr_34485_37036 = state_34481__$1;
(statearr_34485_37036[(1)] = (5));

} else {
var statearr_34486_37037 = state_34481__$1;
(statearr_34486_37037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34482 === (5))){
var state_34481__$1 = state_34481;
var statearr_34487_37040 = state_34481__$1;
(statearr_34487_37040[(2)] = null);

(statearr_34487_37040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34482 === (6))){
var state_34481__$1 = state_34481;
var statearr_34489_37042 = state_34481__$1;
(statearr_34489_37042[(2)] = null);

(statearr_34489_37042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34482 === (7))){
var inst_34477 = (state_34481[(2)]);
var state_34481__$1 = state_34481;
var statearr_34490_37044 = state_34481__$1;
(statearr_34490_37044[(2)] = inst_34477);

(statearr_34490_37044[(1)] = (3));


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
});})(__37025,c__34274__auto___37031,G__34468_37027,G__34468_37028__$1,n__4666__auto___37024,jobs,results,process,async))
;
return ((function (__37025,switch__34206__auto__,c__34274__auto___37031,G__34468_37027,G__34468_37028__$1,n__4666__auto___37024,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34491 = [null,null,null,null,null,null,null];
(statearr_34491[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34491[(1)] = (1));

return statearr_34491;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34481){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34481);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34493){if((e34493 instanceof Object)){
var ex__34210__auto__ = e34493;
var statearr_34494_37053 = state_34481;
(statearr_34494_37053[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34493;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37056 = state_34481;
state_34481 = G__37056;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34481){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__37025,switch__34206__auto__,c__34274__auto___37031,G__34468_37027,G__34468_37028__$1,n__4666__auto___37024,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34495 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34495[(6)] = c__34274__auto___37031);

return statearr_34495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__37025,c__34274__auto___37031,G__34468_37027,G__34468_37028__$1,n__4666__auto___37024,jobs,results,process,async))
);


break;
case "async":
var c__34274__auto___37058 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37025,c__34274__auto___37058,G__34468_37027,G__34468_37028__$1,n__4666__auto___37024,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__37025,c__34274__auto___37058,G__34468_37027,G__34468_37028__$1,n__4666__auto___37024,jobs,results,process,async){
return (function (state_34510){
var state_val_34511 = (state_34510[(1)]);
if((state_val_34511 === (1))){
var state_34510__$1 = state_34510;
var statearr_34517_37061 = state_34510__$1;
(statearr_34517_37061[(2)] = null);

(statearr_34517_37061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34511 === (2))){
var state_34510__$1 = state_34510;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34510__$1,(4),jobs);
} else {
if((state_val_34511 === (3))){
var inst_34508 = (state_34510[(2)]);
var state_34510__$1 = state_34510;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34510__$1,inst_34508);
} else {
if((state_val_34511 === (4))){
var inst_34498 = (state_34510[(2)]);
var inst_34499 = async(inst_34498);
var state_34510__$1 = state_34510;
if(cljs.core.truth_(inst_34499)){
var statearr_34518_37066 = state_34510__$1;
(statearr_34518_37066[(1)] = (5));

} else {
var statearr_34519_37067 = state_34510__$1;
(statearr_34519_37067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34511 === (5))){
var state_34510__$1 = state_34510;
var statearr_34520_37072 = state_34510__$1;
(statearr_34520_37072[(2)] = null);

(statearr_34520_37072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34511 === (6))){
var state_34510__$1 = state_34510;
var statearr_34521_37073 = state_34510__$1;
(statearr_34521_37073[(2)] = null);

(statearr_34521_37073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34511 === (7))){
var inst_34506 = (state_34510[(2)]);
var state_34510__$1 = state_34510;
var statearr_34522_37076 = state_34510__$1;
(statearr_34522_37076[(2)] = inst_34506);

(statearr_34522_37076[(1)] = (3));


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
});})(__37025,c__34274__auto___37058,G__34468_37027,G__34468_37028__$1,n__4666__auto___37024,jobs,results,process,async))
;
return ((function (__37025,switch__34206__auto__,c__34274__auto___37058,G__34468_37027,G__34468_37028__$1,n__4666__auto___37024,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34523 = [null,null,null,null,null,null,null];
(statearr_34523[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34523[(1)] = (1));

return statearr_34523;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34510){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34510);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34525){if((e34525 instanceof Object)){
var ex__34210__auto__ = e34525;
var statearr_34526_37079 = state_34510;
(statearr_34526_37079[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34525;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37080 = state_34510;
state_34510 = G__37080;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34510){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__37025,switch__34206__auto__,c__34274__auto___37058,G__34468_37027,G__34468_37028__$1,n__4666__auto___37024,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34527 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34527[(6)] = c__34274__auto___37058);

return statearr_34527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__37025,c__34274__auto___37058,G__34468_37027,G__34468_37028__$1,n__4666__auto___37024,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34468_37028__$1)].join('')));

}

var G__37084 = (__37025 + (1));
__37025 = G__37084;
continue;
} else {
}
break;
}

var c__34274__auto___37088 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34556){
var state_val_34557 = (state_34556[(1)]);
if((state_val_34557 === (7))){
var inst_34549 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
var statearr_34558_37093 = state_34556__$1;
(statearr_34558_37093[(2)] = inst_34549);

(statearr_34558_37093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (1))){
var state_34556__$1 = state_34556;
var statearr_34559_37095 = state_34556__$1;
(statearr_34559_37095[(2)] = null);

(statearr_34559_37095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (4))){
var inst_34530 = (state_34556[(7)]);
var inst_34530__$1 = (state_34556[(2)]);
var inst_34531 = (inst_34530__$1 == null);
var state_34556__$1 = (function (){var statearr_34560 = state_34556;
(statearr_34560[(7)] = inst_34530__$1);

return statearr_34560;
})();
if(cljs.core.truth_(inst_34531)){
var statearr_34561_37096 = state_34556__$1;
(statearr_34561_37096[(1)] = (5));

} else {
var statearr_34562_37097 = state_34556__$1;
(statearr_34562_37097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (6))){
var inst_34536 = (state_34556[(8)]);
var inst_34530 = (state_34556[(7)]);
var inst_34536__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34540 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34541 = [inst_34530,inst_34536__$1];
var inst_34542 = (new cljs.core.PersistentVector(null,2,(5),inst_34540,inst_34541,null));
var state_34556__$1 = (function (){var statearr_34563 = state_34556;
(statearr_34563[(8)] = inst_34536__$1);

return statearr_34563;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34556__$1,(8),jobs,inst_34542);
} else {
if((state_val_34557 === (3))){
var inst_34551 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34556__$1,inst_34551);
} else {
if((state_val_34557 === (2))){
var state_34556__$1 = state_34556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34556__$1,(4),from);
} else {
if((state_val_34557 === (9))){
var inst_34546 = (state_34556[(2)]);
var state_34556__$1 = (function (){var statearr_34564 = state_34556;
(statearr_34564[(9)] = inst_34546);

return statearr_34564;
})();
var statearr_34565_37104 = state_34556__$1;
(statearr_34565_37104[(2)] = null);

(statearr_34565_37104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (5))){
var inst_34533 = cljs.core.async.close_BANG_(jobs);
var state_34556__$1 = state_34556;
var statearr_34569_37109 = state_34556__$1;
(statearr_34569_37109[(2)] = inst_34533);

(statearr_34569_37109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (8))){
var inst_34536 = (state_34556[(8)]);
var inst_34544 = (state_34556[(2)]);
var state_34556__$1 = (function (){var statearr_34570 = state_34556;
(statearr_34570[(10)] = inst_34544);

return statearr_34570;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34556__$1,(9),results,inst_34536);
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
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34571 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34571[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34571[(1)] = (1));

return statearr_34571;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34556){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34556);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34572){if((e34572 instanceof Object)){
var ex__34210__auto__ = e34572;
var statearr_34573_37120 = state_34556;
(statearr_34573_37120[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37121 = state_34556;
state_34556 = G__37121;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34556){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34574 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34574[(6)] = c__34274__auto___37088);

return statearr_34574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


var c__34274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34612){
var state_val_34613 = (state_34612[(1)]);
if((state_val_34613 === (7))){
var inst_34608 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34614_37130 = state_34612__$1;
(statearr_34614_37130[(2)] = inst_34608);

(statearr_34614_37130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var state_34612__$1 = state_34612;
var statearr_34615_37132 = state_34612__$1;
(statearr_34615_37132[(2)] = null);

(statearr_34615_37132[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34616_37135 = state_34612__$1;
(statearr_34616_37135[(2)] = null);

(statearr_34616_37135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (4))){
var inst_34577 = (state_34612[(7)]);
var inst_34577__$1 = (state_34612[(2)]);
var inst_34578 = (inst_34577__$1 == null);
var state_34612__$1 = (function (){var statearr_34617 = state_34612;
(statearr_34617[(7)] = inst_34577__$1);

return statearr_34617;
})();
if(cljs.core.truth_(inst_34578)){
var statearr_34618_37138 = state_34612__$1;
(statearr_34618_37138[(1)] = (5));

} else {
var statearr_34619_37140 = state_34612__$1;
(statearr_34619_37140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (15))){
var inst_34590 = (state_34612[(8)]);
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34612__$1,(18),to,inst_34590);
} else {
if((state_val_34613 === (21))){
var inst_34603 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34620_37147 = state_34612__$1;
(statearr_34620_37147[(2)] = inst_34603);

(statearr_34620_37147[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_37154 = state_34612__$1;
(statearr_34622_37154[(2)] = null);

(statearr_34622_37154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (6))){
var inst_34577 = (state_34612[(7)]);
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34612__$1,(11),inst_34577);
} else {
if((state_val_34613 === (17))){
var inst_34598 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
if(cljs.core.truth_(inst_34598)){
var statearr_34623_37157 = state_34612__$1;
(statearr_34623_37157[(1)] = (19));

} else {
var statearr_34624_37158 = state_34612__$1;
(statearr_34624_37158[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (3))){
var inst_34610 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34612__$1,inst_34610);
} else {
if((state_val_34613 === (12))){
var inst_34587 = (state_34612[(10)]);
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34612__$1,(14),inst_34587);
} else {
if((state_val_34613 === (2))){
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34612__$1,(4),results);
} else {
if((state_val_34613 === (19))){
var state_34612__$1 = state_34612;
var statearr_34625_37161 = state_34612__$1;
(statearr_34625_37161[(2)] = null);

(statearr_34625_37161[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34587 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34626 = state_34612;
(statearr_34626[(10)] = inst_34587);

return statearr_34626;
})();
var statearr_34627_37163 = state_34612__$1;
(statearr_34627_37163[(2)] = null);

(statearr_34627_37163[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34628_37165 = state_34612__$1;
(statearr_34628_37165[(2)] = null);

(statearr_34628_37165[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_37167 = state_34612__$1;
(statearr_34629_37167[(1)] = (8));

} else {
var statearr_34630_37168 = state_34612__$1;
(statearr_34630_37168[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (14))){
var inst_34590 = (state_34612[(8)]);
var inst_34590__$1 = (state_34612[(2)]);
var inst_34591 = (inst_34590__$1 == null);
var inst_34592 = cljs.core.not(inst_34591);
var state_34612__$1 = (function (){var statearr_34631 = state_34612;
(statearr_34631[(8)] = inst_34590__$1);

return statearr_34631;
})();
if(inst_34592){
var statearr_34632_37173 = state_34612__$1;
(statearr_34632_37173[(1)] = (15));

} else {
var statearr_34633_37174 = state_34612__$1;
(statearr_34633_37174[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34634_37176 = state_34612__$1;
(statearr_34634_37176[(2)] = false);

(statearr_34634_37176[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34635_37177 = state_34612__$1;
(statearr_34635_37177[(2)] = inst_34584);

(statearr_34635_37177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34636_37181 = state_34612__$1;
(statearr_34636_37181[(2)] = inst_34595);

(statearr_34636_37181[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34581 = cljs.core.async.close_BANG_(to);
var state_34612__$1 = state_34612;
var statearr_34637_37183 = state_34612__$1;
(statearr_34637_37183[(2)] = inst_34581);

(statearr_34637_37183[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34638 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34638[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34638[(1)] = (1));

return statearr_34638;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34612){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34612);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34639){if((e34639 instanceof Object)){
var ex__34210__auto__ = e34639;
var statearr_34640_37189 = state_34612;
(statearr_34640_37189[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37191 = state_34612;
state_34612 = G__37191;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34612){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34641 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34641[(6)] = c__34274__auto__);

return statearr_34641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
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
var G__34643 = arguments.length;
switch (G__34643) {
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
var G__34645 = arguments.length;
switch (G__34645) {
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
var G__34647 = arguments.length;
switch (G__34647) {
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
var c__34274__auto___37228 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34676){
var state_val_34677 = (state_34676[(1)]);
if((state_val_34677 === (7))){
var inst_34669 = (state_34676[(2)]);
var state_34676__$1 = state_34676;
var statearr_34678_37231 = state_34676__$1;
(statearr_34678_37231[(2)] = inst_34669);

(statearr_34678_37231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (1))){
var state_34676__$1 = state_34676;
var statearr_34679_37232 = state_34676__$1;
(statearr_34679_37232[(2)] = null);

(statearr_34679_37232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (4))){
var inst_34650 = (state_34676[(7)]);
var inst_34650__$1 = (state_34676[(2)]);
var inst_34651 = (inst_34650__$1 == null);
var state_34676__$1 = (function (){var statearr_34683 = state_34676;
(statearr_34683[(7)] = inst_34650__$1);

return statearr_34683;
})();
if(cljs.core.truth_(inst_34651)){
var statearr_34684_37233 = state_34676__$1;
(statearr_34684_37233[(1)] = (5));

} else {
var statearr_34685_37236 = state_34676__$1;
(statearr_34685_37236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (13))){
var state_34676__$1 = state_34676;
var statearr_34688_37237 = state_34676__$1;
(statearr_34688_37237[(2)] = null);

(statearr_34688_37237[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (6))){
var inst_34650 = (state_34676[(7)]);
var inst_34656 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34650) : p.call(null,inst_34650));
var state_34676__$1 = state_34676;
if(cljs.core.truth_(inst_34656)){
var statearr_34689_37242 = state_34676__$1;
(statearr_34689_37242[(1)] = (9));

} else {
var statearr_34690_37243 = state_34676__$1;
(statearr_34690_37243[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (3))){
var inst_34671 = (state_34676[(2)]);
var state_34676__$1 = state_34676;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34676__$1,inst_34671);
} else {
if((state_val_34677 === (12))){
var state_34676__$1 = state_34676;
var statearr_34692_37244 = state_34676__$1;
(statearr_34692_37244[(2)] = null);

(statearr_34692_37244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (2))){
var state_34676__$1 = state_34676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34676__$1,(4),ch);
} else {
if((state_val_34677 === (11))){
var inst_34650 = (state_34676[(7)]);
var inst_34660 = (state_34676[(2)]);
var state_34676__$1 = state_34676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34676__$1,(8),inst_34660,inst_34650);
} else {
if((state_val_34677 === (9))){
var state_34676__$1 = state_34676;
var statearr_34693_37248 = state_34676__$1;
(statearr_34693_37248[(2)] = tc);

(statearr_34693_37248[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (5))){
var inst_34653 = cljs.core.async.close_BANG_(tc);
var inst_34654 = cljs.core.async.close_BANG_(fc);
var state_34676__$1 = (function (){var statearr_34696 = state_34676;
(statearr_34696[(8)] = inst_34653);

return statearr_34696;
})();
var statearr_34697_37253 = state_34676__$1;
(statearr_34697_37253[(2)] = inst_34654);

(statearr_34697_37253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (14))){
var inst_34667 = (state_34676[(2)]);
var state_34676__$1 = state_34676;
var statearr_34698_37256 = state_34676__$1;
(statearr_34698_37256[(2)] = inst_34667);

(statearr_34698_37256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (10))){
var state_34676__$1 = state_34676;
var statearr_34699_37259 = state_34676__$1;
(statearr_34699_37259[(2)] = fc);

(statearr_34699_37259[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (8))){
var inst_34662 = (state_34676[(2)]);
var state_34676__$1 = state_34676;
if(cljs.core.truth_(inst_34662)){
var statearr_34700_37262 = state_34676__$1;
(statearr_34700_37262[(1)] = (12));

} else {
var statearr_34701_37263 = state_34676__$1;
(statearr_34701_37263[(1)] = (13));

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
var cljs$core$async$state_machine__34207__auto__ = null;
var cljs$core$async$state_machine__34207__auto____0 = (function (){
var statearr_34702 = [null,null,null,null,null,null,null,null,null];
(statearr_34702[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34702[(1)] = (1));

return statearr_34702;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34676){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34676);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34703){if((e34703 instanceof Object)){
var ex__34210__auto__ = e34703;
var statearr_34705_37274 = state_34676;
(statearr_34705_37274[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34703;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37278 = state_34676;
state_34676 = G__37278;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34676){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34707 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34707[(6)] = c__34274__auto___37228);

return statearr_34707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
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
var c__34274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34733){
var state_val_34734 = (state_34733[(1)]);
if((state_val_34734 === (7))){
var inst_34729 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
var statearr_34735_37286 = state_34733__$1;
(statearr_34735_37286[(2)] = inst_34729);

(statearr_34735_37286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (1))){
var inst_34710 = init;
var state_34733__$1 = (function (){var statearr_34736 = state_34733;
(statearr_34736[(7)] = inst_34710);

return statearr_34736;
})();
var statearr_34737_37289 = state_34733__$1;
(statearr_34737_37289[(2)] = null);

(statearr_34737_37289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (4))){
var inst_34713 = (state_34733[(8)]);
var inst_34713__$1 = (state_34733[(2)]);
var inst_34714 = (inst_34713__$1 == null);
var state_34733__$1 = (function (){var statearr_34739 = state_34733;
(statearr_34739[(8)] = inst_34713__$1);

return statearr_34739;
})();
if(cljs.core.truth_(inst_34714)){
var statearr_34740_37294 = state_34733__$1;
(statearr_34740_37294[(1)] = (5));

} else {
var statearr_34741_37295 = state_34733__$1;
(statearr_34741_37295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (6))){
var inst_34713 = (state_34733[(8)]);
var inst_34710 = (state_34733[(7)]);
var inst_34717 = (state_34733[(9)]);
var inst_34717__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34710,inst_34713) : f.call(null,inst_34710,inst_34713));
var inst_34720 = cljs.core.reduced_QMARK_(inst_34717__$1);
var state_34733__$1 = (function (){var statearr_34742 = state_34733;
(statearr_34742[(9)] = inst_34717__$1);

return statearr_34742;
})();
if(inst_34720){
var statearr_34743_37303 = state_34733__$1;
(statearr_34743_37303[(1)] = (8));

} else {
var statearr_34744_37307 = state_34733__$1;
(statearr_34744_37307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (3))){
var inst_34731 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34733__$1,inst_34731);
} else {
if((state_val_34734 === (2))){
var state_34733__$1 = state_34733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34733__$1,(4),ch);
} else {
if((state_val_34734 === (9))){
var inst_34717 = (state_34733[(9)]);
var inst_34710 = inst_34717;
var state_34733__$1 = (function (){var statearr_34745 = state_34733;
(statearr_34745[(7)] = inst_34710);

return statearr_34745;
})();
var statearr_34746_37313 = state_34733__$1;
(statearr_34746_37313[(2)] = null);

(statearr_34746_37313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (5))){
var inst_34710 = (state_34733[(7)]);
var state_34733__$1 = state_34733;
var statearr_34747_37316 = state_34733__$1;
(statearr_34747_37316[(2)] = inst_34710);

(statearr_34747_37316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (10))){
var inst_34727 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
var statearr_34748_37317 = state_34733__$1;
(statearr_34748_37317[(2)] = inst_34727);

(statearr_34748_37317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (8))){
var inst_34717 = (state_34733[(9)]);
var inst_34723 = cljs.core.deref(inst_34717);
var state_34733__$1 = state_34733;
var statearr_34752_37320 = state_34733__$1;
(statearr_34752_37320[(2)] = inst_34723);

(statearr_34752_37320[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__34207__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34207__auto____0 = (function (){
var statearr_34753 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34753[(0)] = cljs$core$async$reduce_$_state_machine__34207__auto__);

(statearr_34753[(1)] = (1));

return statearr_34753;
});
var cljs$core$async$reduce_$_state_machine__34207__auto____1 = (function (state_34733){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34733);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34754){if((e34754 instanceof Object)){
var ex__34210__auto__ = e34754;
var statearr_34755_37327 = state_34733;
(statearr_34755_37327[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34754;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37329 = state_34733;
state_34733 = G__37329;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34207__auto__ = function(state_34733){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34207__auto____1.call(this,state_34733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34207__auto____0;
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34207__auto____1;
return cljs$core$async$reduce_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34759 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34759[(6)] = c__34274__auto__);

return statearr_34759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__34274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34765){
var state_val_34766 = (state_34765[(1)]);
if((state_val_34766 === (1))){
var inst_34760 = cljs.core.async.reduce(f__$1,init,ch);
var state_34765__$1 = state_34765;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34765__$1,(2),inst_34760);
} else {
if((state_val_34766 === (2))){
var inst_34762 = (state_34765[(2)]);
var inst_34763 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34762) : f__$1.call(null,inst_34762));
var state_34765__$1 = state_34765;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34765__$1,inst_34763);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34207__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34207__auto____0 = (function (){
var statearr_34770 = [null,null,null,null,null,null,null];
(statearr_34770[(0)] = cljs$core$async$transduce_$_state_machine__34207__auto__);

(statearr_34770[(1)] = (1));

return statearr_34770;
});
var cljs$core$async$transduce_$_state_machine__34207__auto____1 = (function (state_34765){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34765);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34771){if((e34771 instanceof Object)){
var ex__34210__auto__ = e34771;
var statearr_34772_37344 = state_34765;
(statearr_34772_37344[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34771;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37345 = state_34765;
state_34765 = G__37345;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34207__auto__ = function(state_34765){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34207__auto____1.call(this,state_34765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34207__auto____0;
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34207__auto____1;
return cljs$core$async$transduce_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34773 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34773[(6)] = c__34274__auto__);

return statearr_34773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
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
var G__34775 = arguments.length;
switch (G__34775) {
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
var c__34274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34800){
var state_val_34801 = (state_34800[(1)]);
if((state_val_34801 === (7))){
var inst_34782 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
var statearr_34802_37356 = state_34800__$1;
(statearr_34802_37356[(2)] = inst_34782);

(statearr_34802_37356[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (1))){
var inst_34776 = cljs.core.seq(coll);
var inst_34777 = inst_34776;
var state_34800__$1 = (function (){var statearr_34803 = state_34800;
(statearr_34803[(7)] = inst_34777);

return statearr_34803;
})();
var statearr_34804_37361 = state_34800__$1;
(statearr_34804_37361[(2)] = null);

(statearr_34804_37361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (4))){
var inst_34777 = (state_34800[(7)]);
var inst_34780 = cljs.core.first(inst_34777);
var state_34800__$1 = state_34800;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34800__$1,(7),ch,inst_34780);
} else {
if((state_val_34801 === (13))){
var inst_34794 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
var statearr_34805_37365 = state_34800__$1;
(statearr_34805_37365[(2)] = inst_34794);

(statearr_34805_37365[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (6))){
var inst_34785 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
if(cljs.core.truth_(inst_34785)){
var statearr_34806_37366 = state_34800__$1;
(statearr_34806_37366[(1)] = (8));

} else {
var statearr_34807_37368 = state_34800__$1;
(statearr_34807_37368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (3))){
var inst_34798 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34800__$1,inst_34798);
} else {
if((state_val_34801 === (12))){
var state_34800__$1 = state_34800;
var statearr_34808_37369 = state_34800__$1;
(statearr_34808_37369[(2)] = null);

(statearr_34808_37369[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (2))){
var inst_34777 = (state_34800[(7)]);
var state_34800__$1 = state_34800;
if(cljs.core.truth_(inst_34777)){
var statearr_34809_37374 = state_34800__$1;
(statearr_34809_37374[(1)] = (4));

} else {
var statearr_34810_37375 = state_34800__$1;
(statearr_34810_37375[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (11))){
var inst_34791 = cljs.core.async.close_BANG_(ch);
var state_34800__$1 = state_34800;
var statearr_34811_37376 = state_34800__$1;
(statearr_34811_37376[(2)] = inst_34791);

(statearr_34811_37376[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (9))){
var state_34800__$1 = state_34800;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34815_37380 = state_34800__$1;
(statearr_34815_37380[(1)] = (11));

} else {
var statearr_34816_37381 = state_34800__$1;
(statearr_34816_37381[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (5))){
var inst_34777 = (state_34800[(7)]);
var state_34800__$1 = state_34800;
var statearr_34820_37382 = state_34800__$1;
(statearr_34820_37382[(2)] = inst_34777);

(statearr_34820_37382[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (10))){
var inst_34796 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
var statearr_34821_37385 = state_34800__$1;
(statearr_34821_37385[(2)] = inst_34796);

(statearr_34821_37385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (8))){
var inst_34777 = (state_34800[(7)]);
var inst_34787 = cljs.core.next(inst_34777);
var inst_34777__$1 = inst_34787;
var state_34800__$1 = (function (){var statearr_34823 = state_34800;
(statearr_34823[(7)] = inst_34777__$1);

return statearr_34823;
})();
var statearr_34824_37390 = state_34800__$1;
(statearr_34824_37390[(2)] = null);

(statearr_34824_37390[(1)] = (2));


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
var cljs$core$async$state_machine__34207__auto__ = null;
var cljs$core$async$state_machine__34207__auto____0 = (function (){
var statearr_34825 = [null,null,null,null,null,null,null,null];
(statearr_34825[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34825[(1)] = (1));

return statearr_34825;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34800){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34800);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34826){if((e34826 instanceof Object)){
var ex__34210__auto__ = e34826;
var statearr_34829_37397 = state_34800;
(statearr_34829_37397[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34826;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37400 = state_34800;
state_34800 = G__37400;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34800){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34834 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34834[(6)] = c__34274__auto__);

return statearr_34834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34841 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34841 = (function (ch,cs,meta34842){
this.ch = ch;
this.cs = cs;
this.meta34842 = meta34842;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34843,meta34842__$1){
var self__ = this;
var _34843__$1 = this;
return (new cljs.core.async.t_cljs$core$async34841(self__.ch,self__.cs,meta34842__$1));
}));

(cljs.core.async.t_cljs$core$async34841.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34843){
var self__ = this;
var _34843__$1 = this;
return self__.meta34842;
}));

(cljs.core.async.t_cljs$core$async34841.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34841.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34841.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34841.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34841.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34841.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34841.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34842","meta34842",1188200688,null)], null);
}));

(cljs.core.async.t_cljs$core$async34841.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34841.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34841");

(cljs.core.async.t_cljs$core$async34841.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34841");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34841.
 */
cljs.core.async.__GT_t_cljs$core$async34841 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34841(ch__$1,cs__$1,meta34842){
return (new cljs.core.async.t_cljs$core$async34841(ch__$1,cs__$1,meta34842));
});

}

return (new cljs.core.async.t_cljs$core$async34841(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34274__auto___37460 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34984){
var state_val_34993 = (state_34984[(1)]);
if((state_val_34993 === (7))){
var inst_34980 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_34998_37466 = state_34984__$1;
(statearr_34998_37466[(2)] = inst_34980);

(statearr_34998_37466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (20))){
var inst_34877 = (state_34984[(7)]);
var inst_34889 = cljs.core.first(inst_34877);
var inst_34890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34889,(0),null);
var inst_34891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34889,(1),null);
var state_34984__$1 = (function (){var statearr_34999 = state_34984;
(statearr_34999[(8)] = inst_34890);

return statearr_34999;
})();
if(cljs.core.truth_(inst_34891)){
var statearr_35000_37470 = state_34984__$1;
(statearr_35000_37470[(1)] = (22));

} else {
var statearr_35001_37471 = state_34984__$1;
(statearr_35001_37471[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (27))){
var inst_34846 = (state_34984[(9)]);
var inst_34926 = (state_34984[(10)]);
var inst_34919 = (state_34984[(11)]);
var inst_34921 = (state_34984[(12)]);
var inst_34926__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34919,inst_34921);
var inst_34927 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34926__$1,inst_34846,done);
var state_34984__$1 = (function (){var statearr_35002 = state_34984;
(statearr_35002[(10)] = inst_34926__$1);

return statearr_35002;
})();
if(cljs.core.truth_(inst_34927)){
var statearr_35005_37479 = state_34984__$1;
(statearr_35005_37479[(1)] = (30));

} else {
var statearr_35006_37480 = state_34984__$1;
(statearr_35006_37480[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (1))){
var state_34984__$1 = state_34984;
var statearr_35009_37482 = state_34984__$1;
(statearr_35009_37482[(2)] = null);

(statearr_35009_37482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (24))){
var inst_34877 = (state_34984[(7)]);
var inst_34896 = (state_34984[(2)]);
var inst_34897 = cljs.core.next(inst_34877);
var inst_34855 = inst_34897;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34984__$1 = (function (){var statearr_35012 = state_34984;
(statearr_35012[(13)] = inst_34857);

(statearr_35012[(14)] = inst_34856);

(statearr_35012[(15)] = inst_34858);

(statearr_35012[(16)] = inst_34896);

(statearr_35012[(17)] = inst_34855);

return statearr_35012;
})();
var statearr_35013_37494 = state_34984__$1;
(statearr_35013_37494[(2)] = null);

(statearr_35013_37494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (39))){
var state_34984__$1 = state_34984;
var statearr_35018_37496 = state_34984__$1;
(statearr_35018_37496[(2)] = null);

(statearr_35018_37496[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (4))){
var inst_34846 = (state_34984[(9)]);
var inst_34846__$1 = (state_34984[(2)]);
var inst_34847 = (inst_34846__$1 == null);
var state_34984__$1 = (function (){var statearr_35022 = state_34984;
(statearr_35022[(9)] = inst_34846__$1);

return statearr_35022;
})();
if(cljs.core.truth_(inst_34847)){
var statearr_35023_37502 = state_34984__$1;
(statearr_35023_37502[(1)] = (5));

} else {
var statearr_35030_37505 = state_34984__$1;
(statearr_35030_37505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (15))){
var inst_34857 = (state_34984[(13)]);
var inst_34856 = (state_34984[(14)]);
var inst_34858 = (state_34984[(15)]);
var inst_34855 = (state_34984[(17)]);
var inst_34873 = (state_34984[(2)]);
var inst_34874 = (inst_34858 + (1));
var tmp35014 = inst_34857;
var tmp35015 = inst_34856;
var tmp35016 = inst_34855;
var inst_34855__$1 = tmp35016;
var inst_34856__$1 = tmp35015;
var inst_34857__$1 = tmp35014;
var inst_34858__$1 = inst_34874;
var state_34984__$1 = (function (){var statearr_35040 = state_34984;
(statearr_35040[(18)] = inst_34873);

(statearr_35040[(13)] = inst_34857__$1);

(statearr_35040[(14)] = inst_34856__$1);

(statearr_35040[(15)] = inst_34858__$1);

(statearr_35040[(17)] = inst_34855__$1);

return statearr_35040;
})();
var statearr_35043_37518 = state_34984__$1;
(statearr_35043_37518[(2)] = null);

(statearr_35043_37518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (21))){
var inst_34900 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35053_37521 = state_34984__$1;
(statearr_35053_37521[(2)] = inst_34900);

(statearr_35053_37521[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (31))){
var inst_34926 = (state_34984[(10)]);
var inst_34930 = done(null);
var inst_34931 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34926);
var state_34984__$1 = (function (){var statearr_35060 = state_34984;
(statearr_35060[(19)] = inst_34930);

return statearr_35060;
})();
var statearr_35063_37524 = state_34984__$1;
(statearr_35063_37524[(2)] = inst_34931);

(statearr_35063_37524[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (32))){
var inst_34918 = (state_34984[(20)]);
var inst_34919 = (state_34984[(11)]);
var inst_34920 = (state_34984[(21)]);
var inst_34921 = (state_34984[(12)]);
var inst_34933 = (state_34984[(2)]);
var inst_34934 = (inst_34921 + (1));
var tmp35046 = inst_34918;
var tmp35047 = inst_34919;
var tmp35048 = inst_34920;
var inst_34918__$1 = tmp35046;
var inst_34919__$1 = tmp35047;
var inst_34920__$1 = tmp35048;
var inst_34921__$1 = inst_34934;
var state_34984__$1 = (function (){var statearr_35079 = state_34984;
(statearr_35079[(20)] = inst_34918__$1);

(statearr_35079[(22)] = inst_34933);

(statearr_35079[(11)] = inst_34919__$1);

(statearr_35079[(21)] = inst_34920__$1);

(statearr_35079[(12)] = inst_34921__$1);

return statearr_35079;
})();
var statearr_35087_37534 = state_34984__$1;
(statearr_35087_37534[(2)] = null);

(statearr_35087_37534[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (40))){
var inst_34947 = (state_34984[(23)]);
var inst_34952 = done(null);
var inst_34953 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34947);
var state_34984__$1 = (function (){var statearr_35095 = state_34984;
(statearr_35095[(24)] = inst_34952);

return statearr_35095;
})();
var statearr_35098_37546 = state_34984__$1;
(statearr_35098_37546[(2)] = inst_34953);

(statearr_35098_37546[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (33))){
var inst_34937 = (state_34984[(25)]);
var inst_34939 = cljs.core.chunked_seq_QMARK_(inst_34937);
var state_34984__$1 = state_34984;
if(inst_34939){
var statearr_35105_37548 = state_34984__$1;
(statearr_35105_37548[(1)] = (36));

} else {
var statearr_35108_37549 = state_34984__$1;
(statearr_35108_37549[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (13))){
var inst_34867 = (state_34984[(26)]);
var inst_34870 = cljs.core.async.close_BANG_(inst_34867);
var state_34984__$1 = state_34984;
var statearr_35116_37552 = state_34984__$1;
(statearr_35116_37552[(2)] = inst_34870);

(statearr_35116_37552[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (22))){
var inst_34890 = (state_34984[(8)]);
var inst_34893 = cljs.core.async.close_BANG_(inst_34890);
var state_34984__$1 = state_34984;
var statearr_35123_37560 = state_34984__$1;
(statearr_35123_37560[(2)] = inst_34893);

(statearr_35123_37560[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (36))){
var inst_34937 = (state_34984[(25)]);
var inst_34941 = cljs.core.chunk_first(inst_34937);
var inst_34942 = cljs.core.chunk_rest(inst_34937);
var inst_34943 = cljs.core.count(inst_34941);
var inst_34918 = inst_34942;
var inst_34919 = inst_34941;
var inst_34920 = inst_34943;
var inst_34921 = (0);
var state_34984__$1 = (function (){var statearr_35132 = state_34984;
(statearr_35132[(20)] = inst_34918);

(statearr_35132[(11)] = inst_34919);

(statearr_35132[(21)] = inst_34920);

(statearr_35132[(12)] = inst_34921);

return statearr_35132;
})();
var statearr_35136_37571 = state_34984__$1;
(statearr_35136_37571[(2)] = null);

(statearr_35136_37571[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (41))){
var inst_34937 = (state_34984[(25)]);
var inst_34955 = (state_34984[(2)]);
var inst_34956 = cljs.core.next(inst_34937);
var inst_34918 = inst_34956;
var inst_34919 = null;
var inst_34920 = (0);
var inst_34921 = (0);
var state_34984__$1 = (function (){var statearr_35140 = state_34984;
(statearr_35140[(20)] = inst_34918);

(statearr_35140[(11)] = inst_34919);

(statearr_35140[(27)] = inst_34955);

(statearr_35140[(21)] = inst_34920);

(statearr_35140[(12)] = inst_34921);

return statearr_35140;
})();
var statearr_35141_37576 = state_34984__$1;
(statearr_35141_37576[(2)] = null);

(statearr_35141_37576[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (43))){
var state_34984__$1 = state_34984;
var statearr_35142_37577 = state_34984__$1;
(statearr_35142_37577[(2)] = null);

(statearr_35142_37577[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (29))){
var inst_34964 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35143_37578 = state_34984__$1;
(statearr_35143_37578[(2)] = inst_34964);

(statearr_35143_37578[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (44))){
var inst_34977 = (state_34984[(2)]);
var state_34984__$1 = (function (){var statearr_35146 = state_34984;
(statearr_35146[(28)] = inst_34977);

return statearr_35146;
})();
var statearr_35147_37579 = state_34984__$1;
(statearr_35147_37579[(2)] = null);

(statearr_35147_37579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (6))){
var inst_34910 = (state_34984[(29)]);
var inst_34909 = cljs.core.deref(cs);
var inst_34910__$1 = cljs.core.keys(inst_34909);
var inst_34911 = cljs.core.count(inst_34910__$1);
var inst_34912 = cljs.core.reset_BANG_(dctr,inst_34911);
var inst_34917 = cljs.core.seq(inst_34910__$1);
var inst_34918 = inst_34917;
var inst_34919 = null;
var inst_34920 = (0);
var inst_34921 = (0);
var state_34984__$1 = (function (){var statearr_35150 = state_34984;
(statearr_35150[(20)] = inst_34918);

(statearr_35150[(29)] = inst_34910__$1);

(statearr_35150[(11)] = inst_34919);

(statearr_35150[(21)] = inst_34920);

(statearr_35150[(12)] = inst_34921);

(statearr_35150[(30)] = inst_34912);

return statearr_35150;
})();
var statearr_35171_37580 = state_34984__$1;
(statearr_35171_37580[(2)] = null);

(statearr_35171_37580[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (28))){
var inst_34918 = (state_34984[(20)]);
var inst_34937 = (state_34984[(25)]);
var inst_34937__$1 = cljs.core.seq(inst_34918);
var state_34984__$1 = (function (){var statearr_35175 = state_34984;
(statearr_35175[(25)] = inst_34937__$1);

return statearr_35175;
})();
if(inst_34937__$1){
var statearr_35176_37581 = state_34984__$1;
(statearr_35176_37581[(1)] = (33));

} else {
var statearr_35179_37582 = state_34984__$1;
(statearr_35179_37582[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (25))){
var inst_34920 = (state_34984[(21)]);
var inst_34921 = (state_34984[(12)]);
var inst_34923 = (inst_34921 < inst_34920);
var inst_34924 = inst_34923;
var state_34984__$1 = state_34984;
if(cljs.core.truth_(inst_34924)){
var statearr_35182_37603 = state_34984__$1;
(statearr_35182_37603[(1)] = (27));

} else {
var statearr_35183_37605 = state_34984__$1;
(statearr_35183_37605[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (34))){
var state_34984__$1 = state_34984;
var statearr_35193_37607 = state_34984__$1;
(statearr_35193_37607[(2)] = null);

(statearr_35193_37607[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (17))){
var state_34984__$1 = state_34984;
var statearr_35199_37609 = state_34984__$1;
(statearr_35199_37609[(2)] = null);

(statearr_35199_37609[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (3))){
var inst_34982 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34984__$1,inst_34982);
} else {
if((state_val_34993 === (12))){
var inst_34905 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35208_37617 = state_34984__$1;
(statearr_35208_37617[(2)] = inst_34905);

(statearr_35208_37617[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (2))){
var state_34984__$1 = state_34984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34984__$1,(4),ch);
} else {
if((state_val_34993 === (23))){
var state_34984__$1 = state_34984;
var statearr_35220_37619 = state_34984__$1;
(statearr_35220_37619[(2)] = null);

(statearr_35220_37619[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (35))){
var inst_34962 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35228_37626 = state_34984__$1;
(statearr_35228_37626[(2)] = inst_34962);

(statearr_35228_37626[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (19))){
var inst_34877 = (state_34984[(7)]);
var inst_34881 = cljs.core.chunk_first(inst_34877);
var inst_34882 = cljs.core.chunk_rest(inst_34877);
var inst_34883 = cljs.core.count(inst_34881);
var inst_34855 = inst_34882;
var inst_34856 = inst_34881;
var inst_34857 = inst_34883;
var inst_34858 = (0);
var state_34984__$1 = (function (){var statearr_35235 = state_34984;
(statearr_35235[(13)] = inst_34857);

(statearr_35235[(14)] = inst_34856);

(statearr_35235[(15)] = inst_34858);

(statearr_35235[(17)] = inst_34855);

return statearr_35235;
})();
var statearr_35240_37632 = state_34984__$1;
(statearr_35240_37632[(2)] = null);

(statearr_35240_37632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (11))){
var inst_34855 = (state_34984[(17)]);
var inst_34877 = (state_34984[(7)]);
var inst_34877__$1 = cljs.core.seq(inst_34855);
var state_34984__$1 = (function (){var statearr_35247 = state_34984;
(statearr_35247[(7)] = inst_34877__$1);

return statearr_35247;
})();
if(inst_34877__$1){
var statearr_35249_37633 = state_34984__$1;
(statearr_35249_37633[(1)] = (16));

} else {
var statearr_35251_37634 = state_34984__$1;
(statearr_35251_37634[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (9))){
var inst_34907 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35258_37637 = state_34984__$1;
(statearr_35258_37637[(2)] = inst_34907);

(statearr_35258_37637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (5))){
var inst_34853 = cljs.core.deref(cs);
var inst_34854 = cljs.core.seq(inst_34853);
var inst_34855 = inst_34854;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34984__$1 = (function (){var statearr_35265 = state_34984;
(statearr_35265[(13)] = inst_34857);

(statearr_35265[(14)] = inst_34856);

(statearr_35265[(15)] = inst_34858);

(statearr_35265[(17)] = inst_34855);

return statearr_35265;
})();
var statearr_35268_37639 = state_34984__$1;
(statearr_35268_37639[(2)] = null);

(statearr_35268_37639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (14))){
var state_34984__$1 = state_34984;
var statearr_35273_37641 = state_34984__$1;
(statearr_35273_37641[(2)] = null);

(statearr_35273_37641[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (45))){
var inst_34974 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35279_37642 = state_34984__$1;
(statearr_35279_37642[(2)] = inst_34974);

(statearr_35279_37642[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (26))){
var inst_34910 = (state_34984[(29)]);
var inst_34966 = (state_34984[(2)]);
var inst_34970 = cljs.core.seq(inst_34910);
var state_34984__$1 = (function (){var statearr_35285 = state_34984;
(statearr_35285[(31)] = inst_34966);

return statearr_35285;
})();
if(inst_34970){
var statearr_35287_37647 = state_34984__$1;
(statearr_35287_37647[(1)] = (42));

} else {
var statearr_35290_37648 = state_34984__$1;
(statearr_35290_37648[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (16))){
var inst_34877 = (state_34984[(7)]);
var inst_34879 = cljs.core.chunked_seq_QMARK_(inst_34877);
var state_34984__$1 = state_34984;
if(inst_34879){
var statearr_35295_37652 = state_34984__$1;
(statearr_35295_37652[(1)] = (19));

} else {
var statearr_35298_37653 = state_34984__$1;
(statearr_35298_37653[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (38))){
var inst_34959 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35302_37654 = state_34984__$1;
(statearr_35302_37654[(2)] = inst_34959);

(statearr_35302_37654[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (30))){
var state_34984__$1 = state_34984;
var statearr_35308_37656 = state_34984__$1;
(statearr_35308_37656[(2)] = null);

(statearr_35308_37656[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (10))){
var inst_34856 = (state_34984[(14)]);
var inst_34858 = (state_34984[(15)]);
var inst_34866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34856,inst_34858);
var inst_34867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(0),null);
var inst_34868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(1),null);
var state_34984__$1 = (function (){var statearr_35318 = state_34984;
(statearr_35318[(26)] = inst_34867);

return statearr_35318;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_35320_37658 = state_34984__$1;
(statearr_35320_37658[(1)] = (13));

} else {
var statearr_35321_37659 = state_34984__$1;
(statearr_35321_37659[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (18))){
var inst_34903 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35328_37660 = state_34984__$1;
(statearr_35328_37660[(2)] = inst_34903);

(statearr_35328_37660[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (42))){
var state_34984__$1 = state_34984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34984__$1,(45),dchan);
} else {
if((state_val_34993 === (37))){
var inst_34947 = (state_34984[(23)]);
var inst_34846 = (state_34984[(9)]);
var inst_34937 = (state_34984[(25)]);
var inst_34947__$1 = cljs.core.first(inst_34937);
var inst_34949 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34947__$1,inst_34846,done);
var state_34984__$1 = (function (){var statearr_35342 = state_34984;
(statearr_35342[(23)] = inst_34947__$1);

return statearr_35342;
})();
if(cljs.core.truth_(inst_34949)){
var statearr_35346_37665 = state_34984__$1;
(statearr_35346_37665[(1)] = (39));

} else {
var statearr_35348_37667 = state_34984__$1;
(statearr_35348_37667[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (8))){
var inst_34857 = (state_34984[(13)]);
var inst_34858 = (state_34984[(15)]);
var inst_34860 = (inst_34858 < inst_34857);
var inst_34861 = inst_34860;
var state_34984__$1 = state_34984;
if(cljs.core.truth_(inst_34861)){
var statearr_35351_37672 = state_34984__$1;
(statearr_35351_37672[(1)] = (10));

} else {
var statearr_35352_37674 = state_34984__$1;
(statearr_35352_37674[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__34207__auto__ = null;
var cljs$core$async$mult_$_state_machine__34207__auto____0 = (function (){
var statearr_35353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35353[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35353[(1)] = (1));

return statearr_35353;
});
var cljs$core$async$mult_$_state_machine__34207__auto____1 = (function (state_34984){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34984);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35354){if((e35354 instanceof Object)){
var ex__34210__auto__ = e35354;
var statearr_35355_37682 = state_34984;
(statearr_35355_37682[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35354;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37684 = state_34984;
state_34984 = G__37684;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34207__auto__ = function(state_34984){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34207__auto____1.call(this,state_34984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34207__auto____0;
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34207__auto____1;
return cljs$core$async$mult_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35358 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35358[(6)] = c__34274__auto___37460);

return statearr_35358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
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
var G__35360 = arguments.length;
switch (G__35360) {
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
var len__4789__auto___37733 = arguments.length;
var i__4790__auto___37735 = (0);
while(true){
if((i__4790__auto___37735 < len__4789__auto___37733)){
args__4795__auto__.push((arguments[i__4790__auto___37735]));

var G__37736 = (i__4790__auto___37735 + (1));
i__4790__auto___37735 = G__37736;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35453){
var map__35455 = p__35453;
var map__35455__$1 = (((((!((map__35455 == null))))?(((((map__35455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35455):map__35455);
var opts = map__35455__$1;
var statearr_35463_37745 = state;
(statearr_35463_37745[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35470_37746 = state;
(statearr_35470_37746[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35476_37748 = state;
(statearr_35476_37748[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35442){
var G__35443 = cljs.core.first(seq35442);
var seq35442__$1 = cljs.core.next(seq35442);
var G__35444 = cljs.core.first(seq35442__$1);
var seq35442__$2 = cljs.core.next(seq35442__$1);
var G__35445 = cljs.core.first(seq35442__$2);
var seq35442__$3 = cljs.core.next(seq35442__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35443,G__35444,G__35445,seq35442__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35536 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35536 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35537){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35537 = meta35537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35538,meta35537__$1){
var self__ = this;
var _35538__$1 = this;
return (new cljs.core.async.t_cljs$core$async35536(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35537__$1));
}));

(cljs.core.async.t_cljs$core$async35536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35538){
var self__ = this;
var _35538__$1 = this;
return self__.meta35537;
}));

(cljs.core.async.t_cljs$core$async35536.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35536.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35536.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35536.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35536.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35536.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35536.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35536.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35536.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35537","meta35537",673485645,null)], null);
}));

(cljs.core.async.t_cljs$core$async35536.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35536.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35536");

(cljs.core.async.t_cljs$core$async35536.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35536");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35536.
 */
cljs.core.async.__GT_t_cljs$core$async35536 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35536(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35537){
return (new cljs.core.async.t_cljs$core$async35536(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35537));
});

}

return (new cljs.core.async.t_cljs$core$async35536(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37794 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35685){
var state_val_35686 = (state_35685[(1)]);
if((state_val_35686 === (7))){
var inst_35592 = (state_35685[(2)]);
var state_35685__$1 = state_35685;
var statearr_35691_37799 = state_35685__$1;
(statearr_35691_37799[(2)] = inst_35592);

(statearr_35691_37799[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (20))){
var inst_35604 = (state_35685[(7)]);
var state_35685__$1 = state_35685;
var statearr_35694_37801 = state_35685__$1;
(statearr_35694_37801[(2)] = inst_35604);

(statearr_35694_37801[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (27))){
var state_35685__$1 = state_35685;
var statearr_35697_37805 = state_35685__$1;
(statearr_35697_37805[(2)] = null);

(statearr_35697_37805[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (1))){
var inst_35577 = (state_35685[(8)]);
var inst_35577__$1 = calc_state();
var inst_35579 = (inst_35577__$1 == null);
var inst_35580 = cljs.core.not(inst_35579);
var state_35685__$1 = (function (){var statearr_35699 = state_35685;
(statearr_35699[(8)] = inst_35577__$1);

return statearr_35699;
})();
if(inst_35580){
var statearr_35701_37810 = state_35685__$1;
(statearr_35701_37810[(1)] = (2));

} else {
var statearr_35702_37812 = state_35685__$1;
(statearr_35702_37812[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (24))){
var inst_35659 = (state_35685[(9)]);
var inst_35639 = (state_35685[(10)]);
var inst_35628 = (state_35685[(11)]);
var inst_35659__$1 = (inst_35628.cljs$core$IFn$_invoke$arity$1 ? inst_35628.cljs$core$IFn$_invoke$arity$1(inst_35639) : inst_35628.call(null,inst_35639));
var state_35685__$1 = (function (){var statearr_35703 = state_35685;
(statearr_35703[(9)] = inst_35659__$1);

return statearr_35703;
})();
if(cljs.core.truth_(inst_35659__$1)){
var statearr_35705_37816 = state_35685__$1;
(statearr_35705_37816[(1)] = (29));

} else {
var statearr_35706_37817 = state_35685__$1;
(statearr_35706_37817[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (4))){
var inst_35595 = (state_35685[(2)]);
var state_35685__$1 = state_35685;
if(cljs.core.truth_(inst_35595)){
var statearr_35708_37819 = state_35685__$1;
(statearr_35708_37819[(1)] = (8));

} else {
var statearr_35709_37820 = state_35685__$1;
(statearr_35709_37820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (15))){
var inst_35622 = (state_35685[(2)]);
var state_35685__$1 = state_35685;
if(cljs.core.truth_(inst_35622)){
var statearr_35711_37821 = state_35685__$1;
(statearr_35711_37821[(1)] = (19));

} else {
var statearr_35712_37823 = state_35685__$1;
(statearr_35712_37823[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (21))){
var inst_35627 = (state_35685[(12)]);
var inst_35627__$1 = (state_35685[(2)]);
var inst_35628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35627__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35627__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35627__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35685__$1 = (function (){var statearr_35714 = state_35685;
(statearr_35714[(13)] = inst_35629);

(statearr_35714[(12)] = inst_35627__$1);

(statearr_35714[(11)] = inst_35628);

return statearr_35714;
})();
return cljs.core.async.ioc_alts_BANG_(state_35685__$1,(22),inst_35630);
} else {
if((state_val_35686 === (31))){
var inst_35667 = (state_35685[(2)]);
var state_35685__$1 = state_35685;
if(cljs.core.truth_(inst_35667)){
var statearr_35715_37831 = state_35685__$1;
(statearr_35715_37831[(1)] = (32));

} else {
var statearr_35716_37832 = state_35685__$1;
(statearr_35716_37832[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (32))){
var inst_35638 = (state_35685[(14)]);
var state_35685__$1 = state_35685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35685__$1,(35),out,inst_35638);
} else {
if((state_val_35686 === (33))){
var inst_35627 = (state_35685[(12)]);
var inst_35604 = inst_35627;
var state_35685__$1 = (function (){var statearr_35722 = state_35685;
(statearr_35722[(7)] = inst_35604);

return statearr_35722;
})();
var statearr_35724_37836 = state_35685__$1;
(statearr_35724_37836[(2)] = null);

(statearr_35724_37836[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (13))){
var inst_35604 = (state_35685[(7)]);
var inst_35611 = inst_35604.cljs$lang$protocol_mask$partition0$;
var inst_35612 = (inst_35611 & (64));
var inst_35613 = inst_35604.cljs$core$ISeq$;
var inst_35614 = (cljs.core.PROTOCOL_SENTINEL === inst_35613);
var inst_35615 = ((inst_35612) || (inst_35614));
var state_35685__$1 = state_35685;
if(cljs.core.truth_(inst_35615)){
var statearr_35727_37841 = state_35685__$1;
(statearr_35727_37841[(1)] = (16));

} else {
var statearr_35730_37842 = state_35685__$1;
(statearr_35730_37842[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (22))){
var inst_35638 = (state_35685[(14)]);
var inst_35639 = (state_35685[(10)]);
var inst_35637 = (state_35685[(2)]);
var inst_35638__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35637,(0),null);
var inst_35639__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35637,(1),null);
var inst_35641 = (inst_35638__$1 == null);
var inst_35642 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35639__$1,change);
var inst_35643 = ((inst_35641) || (inst_35642));
var state_35685__$1 = (function (){var statearr_35733 = state_35685;
(statearr_35733[(14)] = inst_35638__$1);

(statearr_35733[(10)] = inst_35639__$1);

return statearr_35733;
})();
if(cljs.core.truth_(inst_35643)){
var statearr_35738_37846 = state_35685__$1;
(statearr_35738_37846[(1)] = (23));

} else {
var statearr_35741_37849 = state_35685__$1;
(statearr_35741_37849[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (36))){
var inst_35627 = (state_35685[(12)]);
var inst_35604 = inst_35627;
var state_35685__$1 = (function (){var statearr_35747 = state_35685;
(statearr_35747[(7)] = inst_35604);

return statearr_35747;
})();
var statearr_35749_37851 = state_35685__$1;
(statearr_35749_37851[(2)] = null);

(statearr_35749_37851[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (29))){
var inst_35659 = (state_35685[(9)]);
var state_35685__$1 = state_35685;
var statearr_35755_37856 = state_35685__$1;
(statearr_35755_37856[(2)] = inst_35659);

(statearr_35755_37856[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (6))){
var state_35685__$1 = state_35685;
var statearr_35756_37859 = state_35685__$1;
(statearr_35756_37859[(2)] = false);

(statearr_35756_37859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (28))){
var inst_35654 = (state_35685[(2)]);
var inst_35656 = calc_state();
var inst_35604 = inst_35656;
var state_35685__$1 = (function (){var statearr_35759 = state_35685;
(statearr_35759[(15)] = inst_35654);

(statearr_35759[(7)] = inst_35604);

return statearr_35759;
})();
var statearr_35762_37867 = state_35685__$1;
(statearr_35762_37867[(2)] = null);

(statearr_35762_37867[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (25))){
var inst_35681 = (state_35685[(2)]);
var state_35685__$1 = state_35685;
var statearr_35764_37870 = state_35685__$1;
(statearr_35764_37870[(2)] = inst_35681);

(statearr_35764_37870[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (34))){
var inst_35679 = (state_35685[(2)]);
var state_35685__$1 = state_35685;
var statearr_35765_37873 = state_35685__$1;
(statearr_35765_37873[(2)] = inst_35679);

(statearr_35765_37873[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (17))){
var state_35685__$1 = state_35685;
var statearr_35767_37874 = state_35685__$1;
(statearr_35767_37874[(2)] = false);

(statearr_35767_37874[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (3))){
var state_35685__$1 = state_35685;
var statearr_35770_37876 = state_35685__$1;
(statearr_35770_37876[(2)] = false);

(statearr_35770_37876[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (12))){
var inst_35683 = (state_35685[(2)]);
var state_35685__$1 = state_35685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35685__$1,inst_35683);
} else {
if((state_val_35686 === (2))){
var inst_35577 = (state_35685[(8)]);
var inst_35584 = inst_35577.cljs$lang$protocol_mask$partition0$;
var inst_35585 = (inst_35584 & (64));
var inst_35586 = inst_35577.cljs$core$ISeq$;
var inst_35587 = (cljs.core.PROTOCOL_SENTINEL === inst_35586);
var inst_35588 = ((inst_35585) || (inst_35587));
var state_35685__$1 = state_35685;
if(cljs.core.truth_(inst_35588)){
var statearr_35772_37881 = state_35685__$1;
(statearr_35772_37881[(1)] = (5));

} else {
var statearr_35774_37882 = state_35685__$1;
(statearr_35774_37882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (23))){
var inst_35638 = (state_35685[(14)]);
var inst_35646 = (inst_35638 == null);
var state_35685__$1 = state_35685;
if(cljs.core.truth_(inst_35646)){
var statearr_35776_37884 = state_35685__$1;
(statearr_35776_37884[(1)] = (26));

} else {
var statearr_35778_37885 = state_35685__$1;
(statearr_35778_37885[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (35))){
var inst_35670 = (state_35685[(2)]);
var state_35685__$1 = state_35685;
if(cljs.core.truth_(inst_35670)){
var statearr_35779_37890 = state_35685__$1;
(statearr_35779_37890[(1)] = (36));

} else {
var statearr_35780_37891 = state_35685__$1;
(statearr_35780_37891[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (19))){
var inst_35604 = (state_35685[(7)]);
var inst_35624 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35604);
var state_35685__$1 = state_35685;
var statearr_35782_37892 = state_35685__$1;
(statearr_35782_37892[(2)] = inst_35624);

(statearr_35782_37892[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (11))){
var inst_35604 = (state_35685[(7)]);
var inst_35608 = (inst_35604 == null);
var inst_35609 = cljs.core.not(inst_35608);
var state_35685__$1 = state_35685;
if(inst_35609){
var statearr_35783_37894 = state_35685__$1;
(statearr_35783_37894[(1)] = (13));

} else {
var statearr_35784_37897 = state_35685__$1;
(statearr_35784_37897[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (9))){
var inst_35577 = (state_35685[(8)]);
var state_35685__$1 = state_35685;
var statearr_35786_37900 = state_35685__$1;
(statearr_35786_37900[(2)] = inst_35577);

(statearr_35786_37900[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (5))){
var state_35685__$1 = state_35685;
var statearr_35789_37903 = state_35685__$1;
(statearr_35789_37903[(2)] = true);

(statearr_35789_37903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (14))){
var state_35685__$1 = state_35685;
var statearr_35793_37904 = state_35685__$1;
(statearr_35793_37904[(2)] = false);

(statearr_35793_37904[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (26))){
var inst_35639 = (state_35685[(10)]);
var inst_35651 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35639);
var state_35685__$1 = state_35685;
var statearr_35797_37906 = state_35685__$1;
(statearr_35797_37906[(2)] = inst_35651);

(statearr_35797_37906[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (16))){
var state_35685__$1 = state_35685;
var statearr_35798_37907 = state_35685__$1;
(statearr_35798_37907[(2)] = true);

(statearr_35798_37907[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (38))){
var inst_35675 = (state_35685[(2)]);
var state_35685__$1 = state_35685;
var statearr_35804_37909 = state_35685__$1;
(statearr_35804_37909[(2)] = inst_35675);

(statearr_35804_37909[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (30))){
var inst_35629 = (state_35685[(13)]);
var inst_35639 = (state_35685[(10)]);
var inst_35628 = (state_35685[(11)]);
var inst_35662 = cljs.core.empty_QMARK_(inst_35628);
var inst_35663 = (inst_35629.cljs$core$IFn$_invoke$arity$1 ? inst_35629.cljs$core$IFn$_invoke$arity$1(inst_35639) : inst_35629.call(null,inst_35639));
var inst_35664 = cljs.core.not(inst_35663);
var inst_35665 = ((inst_35662) && (inst_35664));
var state_35685__$1 = state_35685;
var statearr_35809_37914 = state_35685__$1;
(statearr_35809_37914[(2)] = inst_35665);

(statearr_35809_37914[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (10))){
var inst_35577 = (state_35685[(8)]);
var inst_35600 = (state_35685[(2)]);
var inst_35601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35600,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35600,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35600,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35604 = inst_35577;
var state_35685__$1 = (function (){var statearr_35810 = state_35685;
(statearr_35810[(16)] = inst_35602);

(statearr_35810[(17)] = inst_35601);

(statearr_35810[(18)] = inst_35603);

(statearr_35810[(7)] = inst_35604);

return statearr_35810;
})();
var statearr_35813_37915 = state_35685__$1;
(statearr_35813_37915[(2)] = null);

(statearr_35813_37915[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (18))){
var inst_35619 = (state_35685[(2)]);
var state_35685__$1 = state_35685;
var statearr_35815_37919 = state_35685__$1;
(statearr_35815_37919[(2)] = inst_35619);

(statearr_35815_37919[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (37))){
var state_35685__$1 = state_35685;
var statearr_35817_37920 = state_35685__$1;
(statearr_35817_37920[(2)] = null);

(statearr_35817_37920[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (8))){
var inst_35577 = (state_35685[(8)]);
var inst_35597 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35577);
var state_35685__$1 = state_35685;
var statearr_35821_37921 = state_35685__$1;
(statearr_35821_37921[(2)] = inst_35597);

(statearr_35821_37921[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__34207__auto__ = null;
var cljs$core$async$mix_$_state_machine__34207__auto____0 = (function (){
var statearr_35824 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35824[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35824[(1)] = (1));

return statearr_35824;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35685){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35685);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35826){if((e35826 instanceof Object)){
var ex__34210__auto__ = e35826;
var statearr_35828_37926 = state_35685;
(statearr_35828_37926[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35826;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37927 = state_35685;
state_35685 = G__37927;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35685){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35831 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35831[(6)] = c__34274__auto___37794);

return statearr_35831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
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
var G__35863 = arguments.length;
switch (G__35863) {
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
var G__35883 = arguments.length;
switch (G__35883) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35876_SHARP_){
if(cljs.core.truth_((p1__35876_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35876_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35876_SHARP_.call(null,topic)))){
return p1__35876_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35876_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35887 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35887 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35888){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35888 = meta35888;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35889,meta35888__$1){
var self__ = this;
var _35889__$1 = this;
return (new cljs.core.async.t_cljs$core$async35887(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35888__$1));
}));

(cljs.core.async.t_cljs$core$async35887.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35889){
var self__ = this;
var _35889__$1 = this;
return self__.meta35888;
}));

(cljs.core.async.t_cljs$core$async35887.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35887.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35887.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35887.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35887.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35887.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35887.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35887.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35888","meta35888",-14518431,null)], null);
}));

(cljs.core.async.t_cljs$core$async35887.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35887.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35887");

(cljs.core.async.t_cljs$core$async35887.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35887");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35887.
 */
cljs.core.async.__GT_t_cljs$core$async35887 = (function cljs$core$async$__GT_t_cljs$core$async35887(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35888){
return (new cljs.core.async.t_cljs$core$async35887(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35888));
});

}

return (new cljs.core.async.t_cljs$core$async35887(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37959 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36000){
var state_val_36002 = (state_36000[(1)]);
if((state_val_36002 === (7))){
var inst_35995 = (state_36000[(2)]);
var state_36000__$1 = state_36000;
var statearr_36005_37960 = state_36000__$1;
(statearr_36005_37960[(2)] = inst_35995);

(statearr_36005_37960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36002 === (20))){
var state_36000__$1 = state_36000;
var statearr_36006_37961 = state_36000__$1;
(statearr_36006_37961[(2)] = null);

(statearr_36006_37961[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36002 === (1))){
var state_36000__$1 = state_36000;
var statearr_36007_37962 = state_36000__$1;
(statearr_36007_37962[(2)] = null);

(statearr_36007_37962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36002 === (24))){
var inst_35978 = (state_36000[(7)]);
var inst_35987 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35978);
var state_36000__$1 = state_36000;
var statearr_36008_37964 = state_36000__$1;
(statearr_36008_37964[(2)] = inst_35987);

(statearr_36008_37964[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36002 === (4))){
var inst_35924 = (state_36000[(8)]);
var inst_35924__$1 = (state_36000[(2)]);
var inst_35925 = (inst_35924__$1 == null);
var state_36000__$1 = (function (){var statearr_36009 = state_36000;
(statearr_36009[(8)] = inst_35924__$1);

return statearr_36009;
})();
if(cljs.core.truth_(inst_35925)){
var statearr_36010_37967 = state_36000__$1;
(statearr_36010_37967[(1)] = (5));

} else {
var statearr_36011_37968 = state_36000__$1;
(statearr_36011_37968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36002 === (15))){
var inst_35972 = (state_36000[(2)]);
var state_36000__$1 = state_36000;
var statearr_36012_37969 = state_36000__$1;
(statearr_36012_37969[(2)] = inst_35972);

(statearr_36012_37969[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36002 === (21))){
var inst_35992 = (state_36000[(2)]);
var state_36000__$1 = (function (){var statearr_36013 = state_36000;
(statearr_36013[(9)] = inst_35992);

return statearr_36013;
})();
var statearr_36014_37970 = state_36000__$1;
(statearr_36014_37970[(2)] = null);

(statearr_36014_37970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36002 === (13))){
var inst_35953 = (state_36000[(10)]);
var inst_35956 = cljs.core.chunked_seq_QMARK_(inst_35953);
var state_36000__$1 = state_36000;
if(inst_35956){
var statearr_36015_37973 = state_36000__$1;
(statearr_36015_37973[(1)] = (16));

} else {
var statearr_36016_37974 = state_36000__$1;
(statearr_36016_37974[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36002 === (22))){
var inst_35984 = (state_36000[(2)]);
var state_36000__$1 = state_36000;
if(cljs.core.truth_(inst_35984)){
var statearr_36017_37975 = state_36000__$1;
(statearr_36017_37975[(1)] = (23));

} else {
var statearr_36018_37976 = state_36000__$1;
(statearr_36018_37976[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36002 === (6))){
var inst_35978 = (state_36000[(7)]);
var inst_35924 = (state_36000[(8)]);
var inst_35980 = (state_36000[(11)]);
var inst_35978__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35924) : topic_fn.call(null,inst_35924));
var inst_35979 = cljs.core.deref(mults);
var inst_35980__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35979,inst_35978__$1);
var state_36000__$1 = (function (){var statearr_36019 = state_36000;
(statearr_36019[(7)] = inst_35978__$1);

(statearr_36019[(11)] = inst_35980__$1);

return statearr_36019;
})();
if(cljs.core.truth_(inst_35980__$1)){
var statearr_36021_37979 = state_36000__$1;
(statearr_36021_37979[(1)] = (19));

} else {
var statearr_36022_37980 = state_36000__$1;
(statearr_36022_37980[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36002 === (25))){
var inst_35989 = (state_36000[(2)]);
var state_36000__$1 = state_36000;
var statearr_36023_37982 = state_36000__$1;
(statearr_36023_37982[(2)] = inst_35989);

(statearr_36023_37982[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36002 === (17))){
var inst_35953 = (state_36000[(10)]);
var inst_35963 = cljs.core.first(inst_35953);
var inst_35964 = cljs.core.async.muxch_STAR_(inst_35963);
var inst_35965 = cljs.core.async.close_BANG_(inst_35964);
var inst_35966 = cljs.core.next(inst_35953);
var inst_35936 = inst_35966;
var inst_35937 = null;
var inst_35938 = (0);
var inst_35939 = (0);
var state_36000__$1 = (function (){var statearr_36032 = state_36000;
(statearr_36032[(12)] = inst_35938);

(statearr_36032[(13)] = inst_35965);

(statearr_36032[(14)] = inst_35937);

(statearr_36032[(15)] = inst_35936);

(statearr_36032[(16)] = inst_35939);

return statearr_36032;
})();
var statearr_36034_37984 = state_36000__$1;
(statearr_36034_37984[(2)] = null);

(statearr_36034_37984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36002 === (3))){
var inst_35997 = (state_36000[(2)]);
var state_36000__$1 = state_36000;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36000__$1,inst_35997);
} else {
if((state_val_36002 === (12))){
var inst_35974 = (state_36000[(2)]);
var state_36000__$1 = state_36000;
var statearr_36035_37986 = state_36000__$1;
(statearr_36035_37986[(2)] = inst_35974);

(statearr_36035_37986[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36002 === (2))){
var state_36000__$1 = state_36000;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36000__$1,(4),ch);
} else {
if((state_val_36002 === (23))){
var state_36000__$1 = state_36000;
var statearr_36037_37989 = state_36000__$1;
(statearr_36037_37989[(2)] = null);

(statearr_36037_37989[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36002 === (19))){
var inst_35924 = (state_36000[(8)]);
var inst_35980 = (state_36000[(11)]);
var inst_35982 = cljs.core.async.muxch_STAR_(inst_35980);
var state_36000__$1 = state_36000;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36000__$1,(22),inst_35982,inst_35924);
} else {
if((state_val_36002 === (11))){
var inst_35936 = (state_36000[(15)]);
var inst_35953 = (state_36000[(10)]);
var inst_35953__$1 = cljs.core.seq(inst_35936);
var state_36000__$1 = (function (){var statearr_36042 = state_36000;
(statearr_36042[(10)] = inst_35953__$1);

return statearr_36042;
})();
if(inst_35953__$1){
var statearr_36045_37990 = state_36000__$1;
(statearr_36045_37990[(1)] = (13));

} else {
var statearr_36046_37992 = state_36000__$1;
(statearr_36046_37992[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36002 === (9))){
var inst_35976 = (state_36000[(2)]);
var state_36000__$1 = state_36000;
var statearr_36048_37994 = state_36000__$1;
(statearr_36048_37994[(2)] = inst_35976);

(statearr_36048_37994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36002 === (5))){
var inst_35933 = cljs.core.deref(mults);
var inst_35934 = cljs.core.vals(inst_35933);
var inst_35935 = cljs.core.seq(inst_35934);
var inst_35936 = inst_35935;
var inst_35937 = null;
var inst_35938 = (0);
var inst_35939 = (0);
var state_36000__$1 = (function (){var statearr_36049 = state_36000;
(statearr_36049[(12)] = inst_35938);

(statearr_36049[(14)] = inst_35937);

(statearr_36049[(15)] = inst_35936);

(statearr_36049[(16)] = inst_35939);

return statearr_36049;
})();
var statearr_36050_37996 = state_36000__$1;
(statearr_36050_37996[(2)] = null);

(statearr_36050_37996[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36002 === (14))){
var state_36000__$1 = state_36000;
var statearr_36057_37997 = state_36000__$1;
(statearr_36057_37997[(2)] = null);

(statearr_36057_37997[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36002 === (16))){
var inst_35953 = (state_36000[(10)]);
var inst_35958 = cljs.core.chunk_first(inst_35953);
var inst_35959 = cljs.core.chunk_rest(inst_35953);
var inst_35960 = cljs.core.count(inst_35958);
var inst_35936 = inst_35959;
var inst_35937 = inst_35958;
var inst_35938 = inst_35960;
var inst_35939 = (0);
var state_36000__$1 = (function (){var statearr_36060 = state_36000;
(statearr_36060[(12)] = inst_35938);

(statearr_36060[(14)] = inst_35937);

(statearr_36060[(15)] = inst_35936);

(statearr_36060[(16)] = inst_35939);

return statearr_36060;
})();
var statearr_36061_38001 = state_36000__$1;
(statearr_36061_38001[(2)] = null);

(statearr_36061_38001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36002 === (10))){
var inst_35938 = (state_36000[(12)]);
var inst_35937 = (state_36000[(14)]);
var inst_35936 = (state_36000[(15)]);
var inst_35939 = (state_36000[(16)]);
var inst_35945 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35937,inst_35939);
var inst_35947 = cljs.core.async.muxch_STAR_(inst_35945);
var inst_35948 = cljs.core.async.close_BANG_(inst_35947);
var inst_35949 = (inst_35939 + (1));
var tmp36052 = inst_35938;
var tmp36053 = inst_35937;
var tmp36054 = inst_35936;
var inst_35936__$1 = tmp36054;
var inst_35937__$1 = tmp36053;
var inst_35938__$1 = tmp36052;
var inst_35939__$1 = inst_35949;
var state_36000__$1 = (function (){var statearr_36062 = state_36000;
(statearr_36062[(17)] = inst_35948);

(statearr_36062[(12)] = inst_35938__$1);

(statearr_36062[(14)] = inst_35937__$1);

(statearr_36062[(15)] = inst_35936__$1);

(statearr_36062[(16)] = inst_35939__$1);

return statearr_36062;
})();
var statearr_36063_38005 = state_36000__$1;
(statearr_36063_38005[(2)] = null);

(statearr_36063_38005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36002 === (18))){
var inst_35969 = (state_36000[(2)]);
var state_36000__$1 = state_36000;
var statearr_36064_38006 = state_36000__$1;
(statearr_36064_38006[(2)] = inst_35969);

(statearr_36064_38006[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36002 === (8))){
var inst_35938 = (state_36000[(12)]);
var inst_35939 = (state_36000[(16)]);
var inst_35941 = (inst_35939 < inst_35938);
var inst_35942 = inst_35941;
var state_36000__$1 = state_36000;
if(cljs.core.truth_(inst_35942)){
var statearr_36065_38009 = state_36000__$1;
(statearr_36065_38009[(1)] = (10));

} else {
var statearr_36066_38010 = state_36000__$1;
(statearr_36066_38010[(1)] = (11));

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
var cljs$core$async$state_machine__34207__auto__ = null;
var cljs$core$async$state_machine__34207__auto____0 = (function (){
var statearr_36067 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36067[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36067[(1)] = (1));

return statearr_36067;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36000){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36000);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36072){if((e36072 instanceof Object)){
var ex__34210__auto__ = e36072;
var statearr_36073_38012 = state_36000;
(statearr_36073_38012[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36072;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38014 = state_36000;
state_36000 = G__38014;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36000){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36077 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36077[(6)] = c__34274__auto___37959);

return statearr_36077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
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
var G__36079 = arguments.length;
switch (G__36079) {
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
var G__36088 = arguments.length;
switch (G__36088) {
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
var G__36092 = arguments.length;
switch (G__36092) {
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
var c__34274__auto___38027 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36156){
var state_val_36157 = (state_36156[(1)]);
if((state_val_36157 === (7))){
var state_36156__$1 = state_36156;
var statearr_36161_38030 = state_36156__$1;
(statearr_36161_38030[(2)] = null);

(statearr_36161_38030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36157 === (1))){
var state_36156__$1 = state_36156;
var statearr_36162_38031 = state_36156__$1;
(statearr_36162_38031[(2)] = null);

(statearr_36162_38031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36157 === (4))){
var inst_36105 = (state_36156[(7)]);
var inst_36107 = (inst_36105 < cnt);
var state_36156__$1 = state_36156;
if(cljs.core.truth_(inst_36107)){
var statearr_36163_38032 = state_36156__$1;
(statearr_36163_38032[(1)] = (6));

} else {
var statearr_36164_38033 = state_36156__$1;
(statearr_36164_38033[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36157 === (15))){
var inst_36149 = (state_36156[(2)]);
var state_36156__$1 = state_36156;
var statearr_36167_38034 = state_36156__$1;
(statearr_36167_38034[(2)] = inst_36149);

(statearr_36167_38034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36157 === (13))){
var inst_36142 = cljs.core.async.close_BANG_(out);
var state_36156__$1 = state_36156;
var statearr_36168_38035 = state_36156__$1;
(statearr_36168_38035[(2)] = inst_36142);

(statearr_36168_38035[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36157 === (6))){
var state_36156__$1 = state_36156;
var statearr_36169_38036 = state_36156__$1;
(statearr_36169_38036[(2)] = null);

(statearr_36169_38036[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36157 === (3))){
var inst_36151 = (state_36156[(2)]);
var state_36156__$1 = state_36156;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36156__$1,inst_36151);
} else {
if((state_val_36157 === (12))){
var inst_36138 = (state_36156[(8)]);
var inst_36138__$1 = (state_36156[(2)]);
var inst_36139 = cljs.core.some(cljs.core.nil_QMARK_,inst_36138__$1);
var state_36156__$1 = (function (){var statearr_36182 = state_36156;
(statearr_36182[(8)] = inst_36138__$1);

return statearr_36182;
})();
if(cljs.core.truth_(inst_36139)){
var statearr_36183_38037 = state_36156__$1;
(statearr_36183_38037[(1)] = (13));

} else {
var statearr_36184_38039 = state_36156__$1;
(statearr_36184_38039[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36157 === (2))){
var inst_36104 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36105 = (0);
var state_36156__$1 = (function (){var statearr_36187 = state_36156;
(statearr_36187[(7)] = inst_36105);

(statearr_36187[(9)] = inst_36104);

return statearr_36187;
})();
var statearr_36188_38042 = state_36156__$1;
(statearr_36188_38042[(2)] = null);

(statearr_36188_38042[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36157 === (11))){
var inst_36105 = (state_36156[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36156,(10),Object,null,(9));
var inst_36125 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36105) : chs__$1.call(null,inst_36105));
var inst_36126 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36105) : done.call(null,inst_36105));
var inst_36127 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36125,inst_36126);
var state_36156__$1 = state_36156;
var statearr_36191_38043 = state_36156__$1;
(statearr_36191_38043[(2)] = inst_36127);


cljs.core.async.impl.ioc_helpers.process_exception(state_36156__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36157 === (9))){
var inst_36105 = (state_36156[(7)]);
var inst_36129 = (state_36156[(2)]);
var inst_36130 = (inst_36105 + (1));
var inst_36105__$1 = inst_36130;
var state_36156__$1 = (function (){var statearr_36193 = state_36156;
(statearr_36193[(10)] = inst_36129);

(statearr_36193[(7)] = inst_36105__$1);

return statearr_36193;
})();
var statearr_36194_38047 = state_36156__$1;
(statearr_36194_38047[(2)] = null);

(statearr_36194_38047[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36157 === (5))){
var inst_36136 = (state_36156[(2)]);
var state_36156__$1 = (function (){var statearr_36196 = state_36156;
(statearr_36196[(11)] = inst_36136);

return statearr_36196;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36156__$1,(12),dchan);
} else {
if((state_val_36157 === (14))){
var inst_36138 = (state_36156[(8)]);
var inst_36144 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36138);
var state_36156__$1 = state_36156;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36156__$1,(16),out,inst_36144);
} else {
if((state_val_36157 === (16))){
var inst_36146 = (state_36156[(2)]);
var state_36156__$1 = (function (){var statearr_36198 = state_36156;
(statearr_36198[(12)] = inst_36146);

return statearr_36198;
})();
var statearr_36199_38050 = state_36156__$1;
(statearr_36199_38050[(2)] = null);

(statearr_36199_38050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36157 === (10))){
var inst_36120 = (state_36156[(2)]);
var inst_36121 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36156__$1 = (function (){var statearr_36200 = state_36156;
(statearr_36200[(13)] = inst_36120);

return statearr_36200;
})();
var statearr_36203_38052 = state_36156__$1;
(statearr_36203_38052[(2)] = inst_36121);


cljs.core.async.impl.ioc_helpers.process_exception(state_36156__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36157 === (8))){
var inst_36134 = (state_36156[(2)]);
var state_36156__$1 = state_36156;
var statearr_36204_38053 = state_36156__$1;
(statearr_36204_38053[(2)] = inst_36134);

(statearr_36204_38053[(1)] = (5));


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
var cljs$core$async$state_machine__34207__auto__ = null;
var cljs$core$async$state_machine__34207__auto____0 = (function (){
var statearr_36205 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36205[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36205[(1)] = (1));

return statearr_36205;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36156){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36156);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36208){if((e36208 instanceof Object)){
var ex__34210__auto__ = e36208;
var statearr_36210_38057 = state_36156;
(statearr_36210_38057[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36208;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38058 = state_36156;
state_36156 = G__38058;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36156){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36212 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36212[(6)] = c__34274__auto___38027);

return statearr_36212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
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
var G__36230 = arguments.length;
switch (G__36230) {
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
var c__34274__auto___38063 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36267){
var state_val_36268 = (state_36267[(1)]);
if((state_val_36268 === (7))){
var inst_36245 = (state_36267[(7)]);
var inst_36246 = (state_36267[(8)]);
var inst_36245__$1 = (state_36267[(2)]);
var inst_36246__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36245__$1,(0),null);
var inst_36247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36245__$1,(1),null);
var inst_36248 = (inst_36246__$1 == null);
var state_36267__$1 = (function (){var statearr_36276 = state_36267;
(statearr_36276[(9)] = inst_36247);

(statearr_36276[(7)] = inst_36245__$1);

(statearr_36276[(8)] = inst_36246__$1);

return statearr_36276;
})();
if(cljs.core.truth_(inst_36248)){
var statearr_36278_38066 = state_36267__$1;
(statearr_36278_38066[(1)] = (8));

} else {
var statearr_36283_38068 = state_36267__$1;
(statearr_36283_38068[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36268 === (1))){
var inst_36233 = cljs.core.vec(chs);
var inst_36234 = inst_36233;
var state_36267__$1 = (function (){var statearr_36285 = state_36267;
(statearr_36285[(10)] = inst_36234);

return statearr_36285;
})();
var statearr_36286_38069 = state_36267__$1;
(statearr_36286_38069[(2)] = null);

(statearr_36286_38069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36268 === (4))){
var inst_36234 = (state_36267[(10)]);
var state_36267__$1 = state_36267;
return cljs.core.async.ioc_alts_BANG_(state_36267__$1,(7),inst_36234);
} else {
if((state_val_36268 === (6))){
var inst_36262 = (state_36267[(2)]);
var state_36267__$1 = state_36267;
var statearr_36288_38070 = state_36267__$1;
(statearr_36288_38070[(2)] = inst_36262);

(statearr_36288_38070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36268 === (3))){
var inst_36264 = (state_36267[(2)]);
var state_36267__$1 = state_36267;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36267__$1,inst_36264);
} else {
if((state_val_36268 === (2))){
var inst_36234 = (state_36267[(10)]);
var inst_36236 = cljs.core.count(inst_36234);
var inst_36237 = (inst_36236 > (0));
var state_36267__$1 = state_36267;
if(cljs.core.truth_(inst_36237)){
var statearr_36293_38074 = state_36267__$1;
(statearr_36293_38074[(1)] = (4));

} else {
var statearr_36294_38075 = state_36267__$1;
(statearr_36294_38075[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36268 === (11))){
var inst_36234 = (state_36267[(10)]);
var inst_36255 = (state_36267[(2)]);
var tmp36289 = inst_36234;
var inst_36234__$1 = tmp36289;
var state_36267__$1 = (function (){var statearr_36295 = state_36267;
(statearr_36295[(11)] = inst_36255);

(statearr_36295[(10)] = inst_36234__$1);

return statearr_36295;
})();
var statearr_36298_38076 = state_36267__$1;
(statearr_36298_38076[(2)] = null);

(statearr_36298_38076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36268 === (9))){
var inst_36246 = (state_36267[(8)]);
var state_36267__$1 = state_36267;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36267__$1,(11),out,inst_36246);
} else {
if((state_val_36268 === (5))){
var inst_36260 = cljs.core.async.close_BANG_(out);
var state_36267__$1 = state_36267;
var statearr_36301_38080 = state_36267__$1;
(statearr_36301_38080[(2)] = inst_36260);

(statearr_36301_38080[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36268 === (10))){
var inst_36258 = (state_36267[(2)]);
var state_36267__$1 = state_36267;
var statearr_36303_38081 = state_36267__$1;
(statearr_36303_38081[(2)] = inst_36258);

(statearr_36303_38081[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36268 === (8))){
var inst_36247 = (state_36267[(9)]);
var inst_36234 = (state_36267[(10)]);
var inst_36245 = (state_36267[(7)]);
var inst_36246 = (state_36267[(8)]);
var inst_36250 = (function (){var cs = inst_36234;
var vec__36241 = inst_36245;
var v = inst_36246;
var c = inst_36247;
return (function (p1__36214_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36214_SHARP_);
});
})();
var inst_36251 = cljs.core.filterv(inst_36250,inst_36234);
var inst_36234__$1 = inst_36251;
var state_36267__$1 = (function (){var statearr_36312 = state_36267;
(statearr_36312[(10)] = inst_36234__$1);

return statearr_36312;
})();
var statearr_36313_38083 = state_36267__$1;
(statearr_36313_38083[(2)] = null);

(statearr_36313_38083[(1)] = (2));


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
var cljs$core$async$state_machine__34207__auto__ = null;
var cljs$core$async$state_machine__34207__auto____0 = (function (){
var statearr_36314 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36314[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36314[(1)] = (1));

return statearr_36314;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36267){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36267);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36317){if((e36317 instanceof Object)){
var ex__34210__auto__ = e36317;
var statearr_36319_38086 = state_36267;
(statearr_36319_38086[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36317;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38087 = state_36267;
state_36267 = G__38087;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36267){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36320 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36320[(6)] = c__34274__auto___38063);

return statearr_36320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
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
var G__36325 = arguments.length;
switch (G__36325) {
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
var c__34274__auto___38092 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36361){
var state_val_36362 = (state_36361[(1)]);
if((state_val_36362 === (7))){
var inst_36343 = (state_36361[(7)]);
var inst_36343__$1 = (state_36361[(2)]);
var inst_36344 = (inst_36343__$1 == null);
var inst_36345 = cljs.core.not(inst_36344);
var state_36361__$1 = (function (){var statearr_36368 = state_36361;
(statearr_36368[(7)] = inst_36343__$1);

return statearr_36368;
})();
if(inst_36345){
var statearr_36369_38093 = state_36361__$1;
(statearr_36369_38093[(1)] = (8));

} else {
var statearr_36370_38094 = state_36361__$1;
(statearr_36370_38094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36362 === (1))){
var inst_36337 = (0);
var state_36361__$1 = (function (){var statearr_36371 = state_36361;
(statearr_36371[(8)] = inst_36337);

return statearr_36371;
})();
var statearr_36375_38095 = state_36361__$1;
(statearr_36375_38095[(2)] = null);

(statearr_36375_38095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36362 === (4))){
var state_36361__$1 = state_36361;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36361__$1,(7),ch);
} else {
if((state_val_36362 === (6))){
var inst_36356 = (state_36361[(2)]);
var state_36361__$1 = state_36361;
var statearr_36379_38097 = state_36361__$1;
(statearr_36379_38097[(2)] = inst_36356);

(statearr_36379_38097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36362 === (3))){
var inst_36358 = (state_36361[(2)]);
var inst_36359 = cljs.core.async.close_BANG_(out);
var state_36361__$1 = (function (){var statearr_36381 = state_36361;
(statearr_36381[(9)] = inst_36358);

return statearr_36381;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36361__$1,inst_36359);
} else {
if((state_val_36362 === (2))){
var inst_36337 = (state_36361[(8)]);
var inst_36339 = (inst_36337 < n);
var state_36361__$1 = state_36361;
if(cljs.core.truth_(inst_36339)){
var statearr_36388_38103 = state_36361__$1;
(statearr_36388_38103[(1)] = (4));

} else {
var statearr_36389_38104 = state_36361__$1;
(statearr_36389_38104[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36362 === (11))){
var inst_36337 = (state_36361[(8)]);
var inst_36348 = (state_36361[(2)]);
var inst_36349 = (inst_36337 + (1));
var inst_36337__$1 = inst_36349;
var state_36361__$1 = (function (){var statearr_36392 = state_36361;
(statearr_36392[(10)] = inst_36348);

(statearr_36392[(8)] = inst_36337__$1);

return statearr_36392;
})();
var statearr_36394_38105 = state_36361__$1;
(statearr_36394_38105[(2)] = null);

(statearr_36394_38105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36362 === (9))){
var state_36361__$1 = state_36361;
var statearr_36395_38109 = state_36361__$1;
(statearr_36395_38109[(2)] = null);

(statearr_36395_38109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36362 === (5))){
var state_36361__$1 = state_36361;
var statearr_36396_38110 = state_36361__$1;
(statearr_36396_38110[(2)] = null);

(statearr_36396_38110[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36362 === (10))){
var inst_36353 = (state_36361[(2)]);
var state_36361__$1 = state_36361;
var statearr_36399_38111 = state_36361__$1;
(statearr_36399_38111[(2)] = inst_36353);

(statearr_36399_38111[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36362 === (8))){
var inst_36343 = (state_36361[(7)]);
var state_36361__$1 = state_36361;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36361__$1,(11),out,inst_36343);
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
var cljs$core$async$state_machine__34207__auto__ = null;
var cljs$core$async$state_machine__34207__auto____0 = (function (){
var statearr_36400 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36400[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36400[(1)] = (1));

return statearr_36400;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36361){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36361);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36403){if((e36403 instanceof Object)){
var ex__34210__auto__ = e36403;
var statearr_36405_38117 = state_36361;
(statearr_36405_38117[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36403;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38119 = state_36361;
state_36361 = G__38119;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36361){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36408 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36408[(6)] = c__34274__auto___38092);

return statearr_36408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36414 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36414 = (function (f,ch,meta36415){
this.f = f;
this.ch = ch;
this.meta36415 = meta36415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36416,meta36415__$1){
var self__ = this;
var _36416__$1 = this;
return (new cljs.core.async.t_cljs$core$async36414(self__.f,self__.ch,meta36415__$1));
}));

(cljs.core.async.t_cljs$core$async36414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36416){
var self__ = this;
var _36416__$1 = this;
return self__.meta36415;
}));

(cljs.core.async.t_cljs$core$async36414.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36414.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36414.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36414.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36414.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36419 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36419 = (function (f,ch,meta36415,_,fn1,meta36420){
this.f = f;
this.ch = ch;
this.meta36415 = meta36415;
this._ = _;
this.fn1 = fn1;
this.meta36420 = meta36420;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36421,meta36420__$1){
var self__ = this;
var _36421__$1 = this;
return (new cljs.core.async.t_cljs$core$async36419(self__.f,self__.ch,self__.meta36415,self__._,self__.fn1,meta36420__$1));
}));

(cljs.core.async.t_cljs$core$async36419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36421){
var self__ = this;
var _36421__$1 = this;
return self__.meta36420;
}));

(cljs.core.async.t_cljs$core$async36419.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36419.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36419.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36419.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36409_SHARP_){
var G__36428 = (((p1__36409_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36409_SHARP_) : self__.f.call(null,p1__36409_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36428) : f1.call(null,G__36428));
});
}));

(cljs.core.async.t_cljs$core$async36419.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36415","meta36415",-1063843268,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36414","cljs.core.async/t_cljs$core$async36414",-26617155,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36420","meta36420",191534355,null)], null);
}));

(cljs.core.async.t_cljs$core$async36419.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36419.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36419");

(cljs.core.async.t_cljs$core$async36419.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36419");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36419.
 */
cljs.core.async.__GT_t_cljs$core$async36419 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36419(f__$1,ch__$1,meta36415__$1,___$2,fn1__$1,meta36420){
return (new cljs.core.async.t_cljs$core$async36419(f__$1,ch__$1,meta36415__$1,___$2,fn1__$1,meta36420));
});

}

return (new cljs.core.async.t_cljs$core$async36419(self__.f,self__.ch,self__.meta36415,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36431 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36431) : self__.f.call(null,G__36431));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36414.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36414.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36414.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36415","meta36415",-1063843268,null)], null);
}));

(cljs.core.async.t_cljs$core$async36414.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36414.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36414");

(cljs.core.async.t_cljs$core$async36414.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36414");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36414.
 */
cljs.core.async.__GT_t_cljs$core$async36414 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36414(f__$1,ch__$1,meta36415){
return (new cljs.core.async.t_cljs$core$async36414(f__$1,ch__$1,meta36415));
});

}

return (new cljs.core.async.t_cljs$core$async36414(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36435 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36435 = (function (f,ch,meta36436){
this.f = f;
this.ch = ch;
this.meta36436 = meta36436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36437,meta36436__$1){
var self__ = this;
var _36437__$1 = this;
return (new cljs.core.async.t_cljs$core$async36435(self__.f,self__.ch,meta36436__$1));
}));

(cljs.core.async.t_cljs$core$async36435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36437){
var self__ = this;
var _36437__$1 = this;
return self__.meta36436;
}));

(cljs.core.async.t_cljs$core$async36435.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36435.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36435.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36435.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36435.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36435.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36435.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36436","meta36436",1492388624,null)], null);
}));

(cljs.core.async.t_cljs$core$async36435.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36435.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36435");

(cljs.core.async.t_cljs$core$async36435.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36435");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36435.
 */
cljs.core.async.__GT_t_cljs$core$async36435 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36435(f__$1,ch__$1,meta36436){
return (new cljs.core.async.t_cljs$core$async36435(f__$1,ch__$1,meta36436));
});

}

return (new cljs.core.async.t_cljs$core$async36435(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36443 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36443 = (function (p,ch,meta36444){
this.p = p;
this.ch = ch;
this.meta36444 = meta36444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36445,meta36444__$1){
var self__ = this;
var _36445__$1 = this;
return (new cljs.core.async.t_cljs$core$async36443(self__.p,self__.ch,meta36444__$1));
}));

(cljs.core.async.t_cljs$core$async36443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36445){
var self__ = this;
var _36445__$1 = this;
return self__.meta36444;
}));

(cljs.core.async.t_cljs$core$async36443.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36443.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36443.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36443.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36443.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36443.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36443.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36443.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36444","meta36444",-1443472669,null)], null);
}));

(cljs.core.async.t_cljs$core$async36443.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36443.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36443");

(cljs.core.async.t_cljs$core$async36443.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36443");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36443.
 */
cljs.core.async.__GT_t_cljs$core$async36443 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36443(p__$1,ch__$1,meta36444){
return (new cljs.core.async.t_cljs$core$async36443(p__$1,ch__$1,meta36444));
});

}

return (new cljs.core.async.t_cljs$core$async36443(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36454 = arguments.length;
switch (G__36454) {
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
var c__34274__auto___38144 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36480){
var state_val_36481 = (state_36480[(1)]);
if((state_val_36481 === (7))){
var inst_36476 = (state_36480[(2)]);
var state_36480__$1 = state_36480;
var statearr_36484_38146 = state_36480__$1;
(statearr_36484_38146[(2)] = inst_36476);

(statearr_36484_38146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36481 === (1))){
var state_36480__$1 = state_36480;
var statearr_36485_38147 = state_36480__$1;
(statearr_36485_38147[(2)] = null);

(statearr_36485_38147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36481 === (4))){
var inst_36459 = (state_36480[(7)]);
var inst_36459__$1 = (state_36480[(2)]);
var inst_36460 = (inst_36459__$1 == null);
var state_36480__$1 = (function (){var statearr_36487 = state_36480;
(statearr_36487[(7)] = inst_36459__$1);

return statearr_36487;
})();
if(cljs.core.truth_(inst_36460)){
var statearr_36488_38148 = state_36480__$1;
(statearr_36488_38148[(1)] = (5));

} else {
var statearr_36489_38149 = state_36480__$1;
(statearr_36489_38149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36481 === (6))){
var inst_36459 = (state_36480[(7)]);
var inst_36464 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36459) : p.call(null,inst_36459));
var state_36480__$1 = state_36480;
if(cljs.core.truth_(inst_36464)){
var statearr_36490_38151 = state_36480__$1;
(statearr_36490_38151[(1)] = (8));

} else {
var statearr_36492_38153 = state_36480__$1;
(statearr_36492_38153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36481 === (3))){
var inst_36478 = (state_36480[(2)]);
var state_36480__$1 = state_36480;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36480__$1,inst_36478);
} else {
if((state_val_36481 === (2))){
var state_36480__$1 = state_36480;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36480__$1,(4),ch);
} else {
if((state_val_36481 === (11))){
var inst_36470 = (state_36480[(2)]);
var state_36480__$1 = state_36480;
var statearr_36493_38155 = state_36480__$1;
(statearr_36493_38155[(2)] = inst_36470);

(statearr_36493_38155[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36481 === (9))){
var state_36480__$1 = state_36480;
var statearr_36495_38156 = state_36480__$1;
(statearr_36495_38156[(2)] = null);

(statearr_36495_38156[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36481 === (5))){
var inst_36462 = cljs.core.async.close_BANG_(out);
var state_36480__$1 = state_36480;
var statearr_36496_38158 = state_36480__$1;
(statearr_36496_38158[(2)] = inst_36462);

(statearr_36496_38158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36481 === (10))){
var inst_36473 = (state_36480[(2)]);
var state_36480__$1 = (function (){var statearr_36499 = state_36480;
(statearr_36499[(8)] = inst_36473);

return statearr_36499;
})();
var statearr_36500_38161 = state_36480__$1;
(statearr_36500_38161[(2)] = null);

(statearr_36500_38161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36481 === (8))){
var inst_36459 = (state_36480[(7)]);
var state_36480__$1 = state_36480;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36480__$1,(11),out,inst_36459);
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
var cljs$core$async$state_machine__34207__auto__ = null;
var cljs$core$async$state_machine__34207__auto____0 = (function (){
var statearr_36502 = [null,null,null,null,null,null,null,null,null];
(statearr_36502[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36502[(1)] = (1));

return statearr_36502;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36480){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36480);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36503){if((e36503 instanceof Object)){
var ex__34210__auto__ = e36503;
var statearr_36505_38162 = state_36480;
(statearr_36505_38162[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36503;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38163 = state_36480;
state_36480 = G__38163;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36480){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36506 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36506[(6)] = c__34274__auto___38144);

return statearr_36506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36510 = arguments.length;
switch (G__36510) {
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
var c__34274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36577){
var state_val_36578 = (state_36577[(1)]);
if((state_val_36578 === (7))){
var inst_36572 = (state_36577[(2)]);
var state_36577__$1 = state_36577;
var statearr_36581_38166 = state_36577__$1;
(statearr_36581_38166[(2)] = inst_36572);

(statearr_36581_38166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36578 === (20))){
var inst_36541 = (state_36577[(7)]);
var inst_36553 = (state_36577[(2)]);
var inst_36554 = cljs.core.next(inst_36541);
var inst_36527 = inst_36554;
var inst_36528 = null;
var inst_36529 = (0);
var inst_36530 = (0);
var state_36577__$1 = (function (){var statearr_36583 = state_36577;
(statearr_36583[(8)] = inst_36530);

(statearr_36583[(9)] = inst_36527);

(statearr_36583[(10)] = inst_36553);

(statearr_36583[(11)] = inst_36529);

(statearr_36583[(12)] = inst_36528);

return statearr_36583;
})();
var statearr_36584_38168 = state_36577__$1;
(statearr_36584_38168[(2)] = null);

(statearr_36584_38168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36578 === (1))){
var state_36577__$1 = state_36577;
var statearr_36586_38170 = state_36577__$1;
(statearr_36586_38170[(2)] = null);

(statearr_36586_38170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36578 === (4))){
var inst_36515 = (state_36577[(13)]);
var inst_36515__$1 = (state_36577[(2)]);
var inst_36516 = (inst_36515__$1 == null);
var state_36577__$1 = (function (){var statearr_36587 = state_36577;
(statearr_36587[(13)] = inst_36515__$1);

return statearr_36587;
})();
if(cljs.core.truth_(inst_36516)){
var statearr_36588_38171 = state_36577__$1;
(statearr_36588_38171[(1)] = (5));

} else {
var statearr_36590_38172 = state_36577__$1;
(statearr_36590_38172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36578 === (15))){
var state_36577__$1 = state_36577;
var statearr_36594_38173 = state_36577__$1;
(statearr_36594_38173[(2)] = null);

(statearr_36594_38173[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36578 === (21))){
var state_36577__$1 = state_36577;
var statearr_36595_38174 = state_36577__$1;
(statearr_36595_38174[(2)] = null);

(statearr_36595_38174[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36578 === (13))){
var inst_36530 = (state_36577[(8)]);
var inst_36527 = (state_36577[(9)]);
var inst_36529 = (state_36577[(11)]);
var inst_36528 = (state_36577[(12)]);
var inst_36537 = (state_36577[(2)]);
var inst_36538 = (inst_36530 + (1));
var tmp36591 = inst_36527;
var tmp36592 = inst_36529;
var tmp36593 = inst_36528;
var inst_36527__$1 = tmp36591;
var inst_36528__$1 = tmp36593;
var inst_36529__$1 = tmp36592;
var inst_36530__$1 = inst_36538;
var state_36577__$1 = (function (){var statearr_36597 = state_36577;
(statearr_36597[(8)] = inst_36530__$1);

(statearr_36597[(9)] = inst_36527__$1);

(statearr_36597[(14)] = inst_36537);

(statearr_36597[(11)] = inst_36529__$1);

(statearr_36597[(12)] = inst_36528__$1);

return statearr_36597;
})();
var statearr_36599_38176 = state_36577__$1;
(statearr_36599_38176[(2)] = null);

(statearr_36599_38176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36578 === (22))){
var state_36577__$1 = state_36577;
var statearr_36600_38177 = state_36577__$1;
(statearr_36600_38177[(2)] = null);

(statearr_36600_38177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36578 === (6))){
var inst_36515 = (state_36577[(13)]);
var inst_36525 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36515) : f.call(null,inst_36515));
var inst_36526 = cljs.core.seq(inst_36525);
var inst_36527 = inst_36526;
var inst_36528 = null;
var inst_36529 = (0);
var inst_36530 = (0);
var state_36577__$1 = (function (){var statearr_36602 = state_36577;
(statearr_36602[(8)] = inst_36530);

(statearr_36602[(9)] = inst_36527);

(statearr_36602[(11)] = inst_36529);

(statearr_36602[(12)] = inst_36528);

return statearr_36602;
})();
var statearr_36603_38179 = state_36577__$1;
(statearr_36603_38179[(2)] = null);

(statearr_36603_38179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36578 === (17))){
var inst_36541 = (state_36577[(7)]);
var inst_36546 = cljs.core.chunk_first(inst_36541);
var inst_36547 = cljs.core.chunk_rest(inst_36541);
var inst_36548 = cljs.core.count(inst_36546);
var inst_36527 = inst_36547;
var inst_36528 = inst_36546;
var inst_36529 = inst_36548;
var inst_36530 = (0);
var state_36577__$1 = (function (){var statearr_36605 = state_36577;
(statearr_36605[(8)] = inst_36530);

(statearr_36605[(9)] = inst_36527);

(statearr_36605[(11)] = inst_36529);

(statearr_36605[(12)] = inst_36528);

return statearr_36605;
})();
var statearr_36606_38181 = state_36577__$1;
(statearr_36606_38181[(2)] = null);

(statearr_36606_38181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36578 === (3))){
var inst_36574 = (state_36577[(2)]);
var state_36577__$1 = state_36577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36577__$1,inst_36574);
} else {
if((state_val_36578 === (12))){
var inst_36562 = (state_36577[(2)]);
var state_36577__$1 = state_36577;
var statearr_36608_38182 = state_36577__$1;
(statearr_36608_38182[(2)] = inst_36562);

(statearr_36608_38182[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36578 === (2))){
var state_36577__$1 = state_36577;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36577__$1,(4),in$);
} else {
if((state_val_36578 === (23))){
var inst_36570 = (state_36577[(2)]);
var state_36577__$1 = state_36577;
var statearr_36610_38184 = state_36577__$1;
(statearr_36610_38184[(2)] = inst_36570);

(statearr_36610_38184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36578 === (19))){
var inst_36557 = (state_36577[(2)]);
var state_36577__$1 = state_36577;
var statearr_36611_38185 = state_36577__$1;
(statearr_36611_38185[(2)] = inst_36557);

(statearr_36611_38185[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36578 === (11))){
var inst_36527 = (state_36577[(9)]);
var inst_36541 = (state_36577[(7)]);
var inst_36541__$1 = cljs.core.seq(inst_36527);
var state_36577__$1 = (function (){var statearr_36613 = state_36577;
(statearr_36613[(7)] = inst_36541__$1);

return statearr_36613;
})();
if(inst_36541__$1){
var statearr_36614_38187 = state_36577__$1;
(statearr_36614_38187[(1)] = (14));

} else {
var statearr_36615_38188 = state_36577__$1;
(statearr_36615_38188[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36578 === (9))){
var inst_36564 = (state_36577[(2)]);
var inst_36565 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36577__$1 = (function (){var statearr_36616 = state_36577;
(statearr_36616[(15)] = inst_36564);

return statearr_36616;
})();
if(cljs.core.truth_(inst_36565)){
var statearr_36618_38189 = state_36577__$1;
(statearr_36618_38189[(1)] = (21));

} else {
var statearr_36619_38190 = state_36577__$1;
(statearr_36619_38190[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36578 === (5))){
var inst_36518 = cljs.core.async.close_BANG_(out);
var state_36577__$1 = state_36577;
var statearr_36620_38192 = state_36577__$1;
(statearr_36620_38192[(2)] = inst_36518);

(statearr_36620_38192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36578 === (14))){
var inst_36541 = (state_36577[(7)]);
var inst_36543 = cljs.core.chunked_seq_QMARK_(inst_36541);
var state_36577__$1 = state_36577;
if(inst_36543){
var statearr_36622_38193 = state_36577__$1;
(statearr_36622_38193[(1)] = (17));

} else {
var statearr_36623_38194 = state_36577__$1;
(statearr_36623_38194[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36578 === (16))){
var inst_36560 = (state_36577[(2)]);
var state_36577__$1 = state_36577;
var statearr_36624_38196 = state_36577__$1;
(statearr_36624_38196[(2)] = inst_36560);

(statearr_36624_38196[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36578 === (10))){
var inst_36530 = (state_36577[(8)]);
var inst_36528 = (state_36577[(12)]);
var inst_36535 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36528,inst_36530);
var state_36577__$1 = state_36577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36577__$1,(13),out,inst_36535);
} else {
if((state_val_36578 === (18))){
var inst_36541 = (state_36577[(7)]);
var inst_36551 = cljs.core.first(inst_36541);
var state_36577__$1 = state_36577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36577__$1,(20),out,inst_36551);
} else {
if((state_val_36578 === (8))){
var inst_36530 = (state_36577[(8)]);
var inst_36529 = (state_36577[(11)]);
var inst_36532 = (inst_36530 < inst_36529);
var inst_36533 = inst_36532;
var state_36577__$1 = state_36577;
if(cljs.core.truth_(inst_36533)){
var statearr_36627_38198 = state_36577__$1;
(statearr_36627_38198[(1)] = (10));

} else {
var statearr_36628_38199 = state_36577__$1;
(statearr_36628_38199[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_36630 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36630[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36630[(1)] = (1));

return statearr_36630;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36577){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36577);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36631){if((e36631 instanceof Object)){
var ex__34210__auto__ = e36631;
var statearr_36632_38201 = state_36577;
(statearr_36632_38201[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36631;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38202 = state_36577;
state_36577 = G__38202;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36577){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36634 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36634[(6)] = c__34274__auto__);

return statearr_36634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36637 = arguments.length;
switch (G__36637) {
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
var G__36641 = arguments.length;
switch (G__36641) {
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
var G__36646 = arguments.length;
switch (G__36646) {
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
var c__34274__auto___38209 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36672){
var state_val_36673 = (state_36672[(1)]);
if((state_val_36673 === (7))){
var inst_36667 = (state_36672[(2)]);
var state_36672__$1 = state_36672;
var statearr_36675_38211 = state_36672__$1;
(statearr_36675_38211[(2)] = inst_36667);

(statearr_36675_38211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36673 === (1))){
var inst_36648 = null;
var state_36672__$1 = (function (){var statearr_36676 = state_36672;
(statearr_36676[(7)] = inst_36648);

return statearr_36676;
})();
var statearr_36677_38212 = state_36672__$1;
(statearr_36677_38212[(2)] = null);

(statearr_36677_38212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36673 === (4))){
var inst_36651 = (state_36672[(8)]);
var inst_36651__$1 = (state_36672[(2)]);
var inst_36652 = (inst_36651__$1 == null);
var inst_36653 = cljs.core.not(inst_36652);
var state_36672__$1 = (function (){var statearr_36679 = state_36672;
(statearr_36679[(8)] = inst_36651__$1);

return statearr_36679;
})();
if(inst_36653){
var statearr_36680_38213 = state_36672__$1;
(statearr_36680_38213[(1)] = (5));

} else {
var statearr_36681_38215 = state_36672__$1;
(statearr_36681_38215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36673 === (6))){
var state_36672__$1 = state_36672;
var statearr_36683_38216 = state_36672__$1;
(statearr_36683_38216[(2)] = null);

(statearr_36683_38216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36673 === (3))){
var inst_36669 = (state_36672[(2)]);
var inst_36670 = cljs.core.async.close_BANG_(out);
var state_36672__$1 = (function (){var statearr_36684 = state_36672;
(statearr_36684[(9)] = inst_36669);

return statearr_36684;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36672__$1,inst_36670);
} else {
if((state_val_36673 === (2))){
var state_36672__$1 = state_36672;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36672__$1,(4),ch);
} else {
if((state_val_36673 === (11))){
var inst_36651 = (state_36672[(8)]);
var inst_36661 = (state_36672[(2)]);
var inst_36648 = inst_36651;
var state_36672__$1 = (function (){var statearr_36686 = state_36672;
(statearr_36686[(10)] = inst_36661);

(statearr_36686[(7)] = inst_36648);

return statearr_36686;
})();
var statearr_36687_38218 = state_36672__$1;
(statearr_36687_38218[(2)] = null);

(statearr_36687_38218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36673 === (9))){
var inst_36651 = (state_36672[(8)]);
var state_36672__$1 = state_36672;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36672__$1,(11),out,inst_36651);
} else {
if((state_val_36673 === (5))){
var inst_36648 = (state_36672[(7)]);
var inst_36651 = (state_36672[(8)]);
var inst_36655 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36651,inst_36648);
var state_36672__$1 = state_36672;
if(inst_36655){
var statearr_36690_38220 = state_36672__$1;
(statearr_36690_38220[(1)] = (8));

} else {
var statearr_36691_38221 = state_36672__$1;
(statearr_36691_38221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36673 === (10))){
var inst_36664 = (state_36672[(2)]);
var state_36672__$1 = state_36672;
var statearr_36693_38222 = state_36672__$1;
(statearr_36693_38222[(2)] = inst_36664);

(statearr_36693_38222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36673 === (8))){
var inst_36648 = (state_36672[(7)]);
var tmp36689 = inst_36648;
var inst_36648__$1 = tmp36689;
var state_36672__$1 = (function (){var statearr_36694 = state_36672;
(statearr_36694[(7)] = inst_36648__$1);

return statearr_36694;
})();
var statearr_36695_38224 = state_36672__$1;
(statearr_36695_38224[(2)] = null);

(statearr_36695_38224[(1)] = (2));


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
var cljs$core$async$state_machine__34207__auto__ = null;
var cljs$core$async$state_machine__34207__auto____0 = (function (){
var statearr_36697 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36697[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36697[(1)] = (1));

return statearr_36697;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36672){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36672);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36698){if((e36698 instanceof Object)){
var ex__34210__auto__ = e36698;
var statearr_36699_38225 = state_36672;
(statearr_36699_38225[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36698;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38227 = state_36672;
state_36672 = G__38227;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36701 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36701[(6)] = c__34274__auto___38209);

return statearr_36701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36704 = arguments.length;
switch (G__36704) {
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
var c__34274__auto___38230 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36745){
var state_val_36746 = (state_36745[(1)]);
if((state_val_36746 === (7))){
var inst_36741 = (state_36745[(2)]);
var state_36745__$1 = state_36745;
var statearr_36750_38231 = state_36745__$1;
(statearr_36750_38231[(2)] = inst_36741);

(statearr_36750_38231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36746 === (1))){
var inst_36707 = (new Array(n));
var inst_36708 = inst_36707;
var inst_36709 = (0);
var state_36745__$1 = (function (){var statearr_36752 = state_36745;
(statearr_36752[(7)] = inst_36709);

(statearr_36752[(8)] = inst_36708);

return statearr_36752;
})();
var statearr_36753_38232 = state_36745__$1;
(statearr_36753_38232[(2)] = null);

(statearr_36753_38232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36746 === (4))){
var inst_36713 = (state_36745[(9)]);
var inst_36713__$1 = (state_36745[(2)]);
var inst_36714 = (inst_36713__$1 == null);
var inst_36715 = cljs.core.not(inst_36714);
var state_36745__$1 = (function (){var statearr_36754 = state_36745;
(statearr_36754[(9)] = inst_36713__$1);

return statearr_36754;
})();
if(inst_36715){
var statearr_36756_38234 = state_36745__$1;
(statearr_36756_38234[(1)] = (5));

} else {
var statearr_36757_38235 = state_36745__$1;
(statearr_36757_38235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36746 === (15))){
var inst_36735 = (state_36745[(2)]);
var state_36745__$1 = state_36745;
var statearr_36758_38236 = state_36745__$1;
(statearr_36758_38236[(2)] = inst_36735);

(statearr_36758_38236[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36746 === (13))){
var state_36745__$1 = state_36745;
var statearr_36760_38237 = state_36745__$1;
(statearr_36760_38237[(2)] = null);

(statearr_36760_38237[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36746 === (6))){
var inst_36709 = (state_36745[(7)]);
var inst_36731 = (inst_36709 > (0));
var state_36745__$1 = state_36745;
if(cljs.core.truth_(inst_36731)){
var statearr_36761_38238 = state_36745__$1;
(statearr_36761_38238[(1)] = (12));

} else {
var statearr_36762_38239 = state_36745__$1;
(statearr_36762_38239[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36746 === (3))){
var inst_36743 = (state_36745[(2)]);
var state_36745__$1 = state_36745;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36745__$1,inst_36743);
} else {
if((state_val_36746 === (12))){
var inst_36708 = (state_36745[(8)]);
var inst_36733 = cljs.core.vec(inst_36708);
var state_36745__$1 = state_36745;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36745__$1,(15),out,inst_36733);
} else {
if((state_val_36746 === (2))){
var state_36745__$1 = state_36745;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36745__$1,(4),ch);
} else {
if((state_val_36746 === (11))){
var inst_36725 = (state_36745[(2)]);
var inst_36726 = (new Array(n));
var inst_36708 = inst_36726;
var inst_36709 = (0);
var state_36745__$1 = (function (){var statearr_36765 = state_36745;
(statearr_36765[(7)] = inst_36709);

(statearr_36765[(10)] = inst_36725);

(statearr_36765[(8)] = inst_36708);

return statearr_36765;
})();
var statearr_36766_38240 = state_36745__$1;
(statearr_36766_38240[(2)] = null);

(statearr_36766_38240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36746 === (9))){
var inst_36708 = (state_36745[(8)]);
var inst_36723 = cljs.core.vec(inst_36708);
var state_36745__$1 = state_36745;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36745__$1,(11),out,inst_36723);
} else {
if((state_val_36746 === (5))){
var inst_36709 = (state_36745[(7)]);
var inst_36708 = (state_36745[(8)]);
var inst_36718 = (state_36745[(11)]);
var inst_36713 = (state_36745[(9)]);
var inst_36717 = (inst_36708[inst_36709] = inst_36713);
var inst_36718__$1 = (inst_36709 + (1));
var inst_36719 = (inst_36718__$1 < n);
var state_36745__$1 = (function (){var statearr_36768 = state_36745;
(statearr_36768[(11)] = inst_36718__$1);

(statearr_36768[(12)] = inst_36717);

return statearr_36768;
})();
if(cljs.core.truth_(inst_36719)){
var statearr_36769_38241 = state_36745__$1;
(statearr_36769_38241[(1)] = (8));

} else {
var statearr_36770_38242 = state_36745__$1;
(statearr_36770_38242[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36746 === (14))){
var inst_36738 = (state_36745[(2)]);
var inst_36739 = cljs.core.async.close_BANG_(out);
var state_36745__$1 = (function (){var statearr_36773 = state_36745;
(statearr_36773[(13)] = inst_36738);

return statearr_36773;
})();
var statearr_36774_38243 = state_36745__$1;
(statearr_36774_38243[(2)] = inst_36739);

(statearr_36774_38243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36746 === (10))){
var inst_36729 = (state_36745[(2)]);
var state_36745__$1 = state_36745;
var statearr_36776_38245 = state_36745__$1;
(statearr_36776_38245[(2)] = inst_36729);

(statearr_36776_38245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36746 === (8))){
var inst_36708 = (state_36745[(8)]);
var inst_36718 = (state_36745[(11)]);
var tmp36772 = inst_36708;
var inst_36708__$1 = tmp36772;
var inst_36709 = inst_36718;
var state_36745__$1 = (function (){var statearr_36777 = state_36745;
(statearr_36777[(7)] = inst_36709);

(statearr_36777[(8)] = inst_36708__$1);

return statearr_36777;
})();
var statearr_36778_38246 = state_36745__$1;
(statearr_36778_38246[(2)] = null);

(statearr_36778_38246[(1)] = (2));


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
var cljs$core$async$state_machine__34207__auto__ = null;
var cljs$core$async$state_machine__34207__auto____0 = (function (){
var statearr_36780 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36780[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36780[(1)] = (1));

return statearr_36780;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36745){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36745);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36786){if((e36786 instanceof Object)){
var ex__34210__auto__ = e36786;
var statearr_36788_38247 = state_36745;
(statearr_36788_38247[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36786;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38249 = state_36745;
state_36745 = G__38249;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36745){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36789 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36789[(6)] = c__34274__auto___38230);

return statearr_36789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36793 = arguments.length;
switch (G__36793) {
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
var c__34274__auto___38252 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36838){
var state_val_36839 = (state_36838[(1)]);
if((state_val_36839 === (7))){
var inst_36834 = (state_36838[(2)]);
var state_36838__$1 = state_36838;
var statearr_36841_38253 = state_36838__$1;
(statearr_36841_38253[(2)] = inst_36834);

(statearr_36841_38253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36839 === (1))){
var inst_36796 = [];
var inst_36797 = inst_36796;
var inst_36798 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36838__$1 = (function (){var statearr_36843 = state_36838;
(statearr_36843[(7)] = inst_36797);

(statearr_36843[(8)] = inst_36798);

return statearr_36843;
})();
var statearr_36844_38254 = state_36838__$1;
(statearr_36844_38254[(2)] = null);

(statearr_36844_38254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36839 === (4))){
var inst_36801 = (state_36838[(9)]);
var inst_36801__$1 = (state_36838[(2)]);
var inst_36802 = (inst_36801__$1 == null);
var inst_36803 = cljs.core.not(inst_36802);
var state_36838__$1 = (function (){var statearr_36845 = state_36838;
(statearr_36845[(9)] = inst_36801__$1);

return statearr_36845;
})();
if(inst_36803){
var statearr_36846_38255 = state_36838__$1;
(statearr_36846_38255[(1)] = (5));

} else {
var statearr_36848_38256 = state_36838__$1;
(statearr_36848_38256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36839 === (15))){
var inst_36828 = (state_36838[(2)]);
var state_36838__$1 = state_36838;
var statearr_36849_38257 = state_36838__$1;
(statearr_36849_38257[(2)] = inst_36828);

(statearr_36849_38257[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36839 === (13))){
var state_36838__$1 = state_36838;
var statearr_36850_38260 = state_36838__$1;
(statearr_36850_38260[(2)] = null);

(statearr_36850_38260[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36839 === (6))){
var inst_36797 = (state_36838[(7)]);
var inst_36823 = inst_36797.length;
var inst_36824 = (inst_36823 > (0));
var state_36838__$1 = state_36838;
if(cljs.core.truth_(inst_36824)){
var statearr_36852_38262 = state_36838__$1;
(statearr_36852_38262[(1)] = (12));

} else {
var statearr_36853_38263 = state_36838__$1;
(statearr_36853_38263[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36839 === (3))){
var inst_36836 = (state_36838[(2)]);
var state_36838__$1 = state_36838;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36838__$1,inst_36836);
} else {
if((state_val_36839 === (12))){
var inst_36797 = (state_36838[(7)]);
var inst_36826 = cljs.core.vec(inst_36797);
var state_36838__$1 = state_36838;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36838__$1,(15),out,inst_36826);
} else {
if((state_val_36839 === (2))){
var state_36838__$1 = state_36838;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36838__$1,(4),ch);
} else {
if((state_val_36839 === (11))){
var inst_36805 = (state_36838[(10)]);
var inst_36801 = (state_36838[(9)]);
var inst_36815 = (state_36838[(2)]);
var inst_36816 = [];
var inst_36817 = inst_36816.push(inst_36801);
var inst_36797 = inst_36816;
var inst_36798 = inst_36805;
var state_36838__$1 = (function (){var statearr_36856 = state_36838;
(statearr_36856[(11)] = inst_36815);

(statearr_36856[(7)] = inst_36797);

(statearr_36856[(8)] = inst_36798);

(statearr_36856[(12)] = inst_36817);

return statearr_36856;
})();
var statearr_36857_38264 = state_36838__$1;
(statearr_36857_38264[(2)] = null);

(statearr_36857_38264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36839 === (9))){
var inst_36797 = (state_36838[(7)]);
var inst_36813 = cljs.core.vec(inst_36797);
var state_36838__$1 = state_36838;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36838__$1,(11),out,inst_36813);
} else {
if((state_val_36839 === (5))){
var inst_36805 = (state_36838[(10)]);
var inst_36798 = (state_36838[(8)]);
var inst_36801 = (state_36838[(9)]);
var inst_36805__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36801) : f.call(null,inst_36801));
var inst_36806 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36805__$1,inst_36798);
var inst_36807 = cljs.core.keyword_identical_QMARK_(inst_36798,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36808 = ((inst_36806) || (inst_36807));
var state_36838__$1 = (function (){var statearr_36859 = state_36838;
(statearr_36859[(10)] = inst_36805__$1);

return statearr_36859;
})();
if(cljs.core.truth_(inst_36808)){
var statearr_36860_38265 = state_36838__$1;
(statearr_36860_38265[(1)] = (8));

} else {
var statearr_36862_38266 = state_36838__$1;
(statearr_36862_38266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36839 === (14))){
var inst_36831 = (state_36838[(2)]);
var inst_36832 = cljs.core.async.close_BANG_(out);
var state_36838__$1 = (function (){var statearr_36864 = state_36838;
(statearr_36864[(13)] = inst_36831);

return statearr_36864;
})();
var statearr_36865_38267 = state_36838__$1;
(statearr_36865_38267[(2)] = inst_36832);

(statearr_36865_38267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36839 === (10))){
var inst_36821 = (state_36838[(2)]);
var state_36838__$1 = state_36838;
var statearr_36867_38268 = state_36838__$1;
(statearr_36867_38268[(2)] = inst_36821);

(statearr_36867_38268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36839 === (8))){
var inst_36805 = (state_36838[(10)]);
var inst_36797 = (state_36838[(7)]);
var inst_36801 = (state_36838[(9)]);
var inst_36810 = inst_36797.push(inst_36801);
var tmp36863 = inst_36797;
var inst_36797__$1 = tmp36863;
var inst_36798 = inst_36805;
var state_36838__$1 = (function (){var statearr_36868 = state_36838;
(statearr_36868[(7)] = inst_36797__$1);

(statearr_36868[(8)] = inst_36798);

(statearr_36868[(14)] = inst_36810);

return statearr_36868;
})();
var statearr_36869_38269 = state_36838__$1;
(statearr_36869_38269[(2)] = null);

(statearr_36869_38269[(1)] = (2));


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
var cljs$core$async$state_machine__34207__auto__ = null;
var cljs$core$async$state_machine__34207__auto____0 = (function (){
var statearr_36871 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36871[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36871[(1)] = (1));

return statearr_36871;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36838){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36838);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36873){if((e36873 instanceof Object)){
var ex__34210__auto__ = e36873;
var statearr_36874_38270 = state_36838;
(statearr_36874_38270[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36873;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38271 = state_36838;
state_36838 = G__38271;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36876 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36876[(6)] = c__34274__auto___38252);

return statearr_36876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
