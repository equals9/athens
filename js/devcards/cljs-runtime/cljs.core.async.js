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
var val_36866 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36866) : fn1.call(null,val_36866));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36866) : fn1.call(null,val_36866));
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
var n__4666__auto___36872 = n;
var x_36873 = (0);
while(true){
if((x_36873 < n__4666__auto___36872)){
(a[x_36873] = x_36873);

var G__36874 = (x_36873 + (1));
x_36873 = G__36874;
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
var G__36883 = (i + (1));
i = G__36883;
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
var len__4789__auto___36885 = arguments.length;
var i__4790__auto___36886 = (0);
while(true){
if((i__4790__auto___36886 < len__4789__auto___36885)){
args__4795__auto__.push((arguments[i__4790__auto___36886]));

var G__36887 = (i__4790__auto___36886 + (1));
i__4790__auto___36886 = G__36887;
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
var c__34273__auto___36892 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34411){
var state_val_34415 = (state_34411[(1)]);
if((state_val_34415 === (7))){
var inst_34407 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34425_36894 = state_34411__$1;
(statearr_34425_36894[(2)] = inst_34407);

(statearr_34425_36894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (1))){
var state_34411__$1 = state_34411;
var statearr_34426_36895 = state_34411__$1;
(statearr_34426_36895[(2)] = null);

(statearr_34426_36895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (4))){
var inst_34390 = (state_34411[(7)]);
var inst_34390__$1 = (state_34411[(2)]);
var inst_34391 = (inst_34390__$1 == null);
var state_34411__$1 = (function (){var statearr_34427 = state_34411;
(statearr_34427[(7)] = inst_34390__$1);

return statearr_34427;
})();
if(cljs.core.truth_(inst_34391)){
var statearr_34428_36897 = state_34411__$1;
(statearr_34428_36897[(1)] = (5));

} else {
var statearr_34429_36898 = state_34411__$1;
(statearr_34429_36898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (13))){
var state_34411__$1 = state_34411;
var statearr_34430_36899 = state_34411__$1;
(statearr_34430_36899[(2)] = null);

(statearr_34430_36899[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (6))){
var inst_34390 = (state_34411[(7)]);
var state_34411__$1 = state_34411;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34411__$1,(11),to,inst_34390);
} else {
if((state_val_34415 === (3))){
var inst_34409 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34411__$1,inst_34409);
} else {
if((state_val_34415 === (12))){
var state_34411__$1 = state_34411;
var statearr_34431_36901 = state_34411__$1;
(statearr_34431_36901[(2)] = null);

(statearr_34431_36901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (2))){
var state_34411__$1 = state_34411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34411__$1,(4),from);
} else {
if((state_val_34415 === (11))){
var inst_34400 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
if(cljs.core.truth_(inst_34400)){
var statearr_34432_36903 = state_34411__$1;
(statearr_34432_36903[(1)] = (12));

} else {
var statearr_34433_36904 = state_34411__$1;
(statearr_34433_36904[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (9))){
var state_34411__$1 = state_34411;
var statearr_34434_36905 = state_34411__$1;
(statearr_34434_36905[(2)] = null);

(statearr_34434_36905[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (5))){
var state_34411__$1 = state_34411;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34435_36906 = state_34411__$1;
(statearr_34435_36906[(1)] = (8));

} else {
var statearr_34436_36908 = state_34411__$1;
(statearr_34436_36908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (14))){
var inst_34405 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34437_36909 = state_34411__$1;
(statearr_34437_36909[(2)] = inst_34405);

(statearr_34437_36909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (10))){
var inst_34397 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34438_36910 = state_34411__$1;
(statearr_34438_36910[(2)] = inst_34397);

(statearr_34438_36910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (8))){
var inst_34394 = cljs.core.async.close_BANG_(to);
var state_34411__$1 = state_34411;
var statearr_34439_36912 = state_34411__$1;
(statearr_34439_36912[(2)] = inst_34394);

(statearr_34439_36912[(1)] = (10));


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
var statearr_34442_36914 = state_34411;
(statearr_34442_36914[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36915 = state_34411;
state_34411 = G__36915;
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
var state__34275__auto__ = (function (){var statearr_34443 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34443[(6)] = c__34273__auto___36892);

return statearr_34443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
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
var c__34273__auto___36918 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34453){
var state_val_34454 = (state_34453[(1)]);
if((state_val_34454 === (1))){
var state_34453__$1 = state_34453;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34453__$1,(2),res,v);
} else {
if((state_val_34454 === (2))){
var inst_34449 = (state_34453[(2)]);
var inst_34450 = cljs.core.async.close_BANG_(res);
var state_34453__$1 = (function (){var statearr_34458 = state_34453;
(statearr_34458[(7)] = inst_34449);

return statearr_34458;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34453__$1,inst_34450);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34459 = [null,null,null,null,null,null,null,null];
(statearr_34459[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34459[(1)] = (1));

return statearr_34459;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34453){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34453);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34460){if((e34460 instanceof Object)){
var ex__34210__auto__ = e34460;
var statearr_34461_36921 = state_34453;
(statearr_34461_36921[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34460;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36922 = state_34453;
state_34453 = G__36922;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34453){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34463 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34463[(6)] = c__34273__auto___36918);

return statearr_34463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34464){
var vec__34465 = p__34464;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34465,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34465,(1),null);
var job = vec__34465;
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
var n__4666__auto___36925 = n;
var __36926 = (0);
while(true){
if((__36926 < n__4666__auto___36925)){
var G__34468_36927 = type;
var G__34468_36928__$1 = (((G__34468_36927 instanceof cljs.core.Keyword))?G__34468_36927.fqn:null);
switch (G__34468_36928__$1) {
case "compute":
var c__34273__auto___36930 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36926,c__34273__auto___36930,G__34468_36927,G__34468_36928__$1,n__4666__auto___36925,jobs,results,process,async){
return (function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = ((function (__36926,c__34273__auto___36930,G__34468_36927,G__34468_36928__$1,n__4666__auto___36925,jobs,results,process,async){
return (function (state_34482){
var state_val_34483 = (state_34482[(1)]);
if((state_val_34483 === (1))){
var state_34482__$1 = state_34482;
var statearr_34485_36932 = state_34482__$1;
(statearr_34485_36932[(2)] = null);

(statearr_34485_36932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (2))){
var state_34482__$1 = state_34482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34482__$1,(4),jobs);
} else {
if((state_val_34483 === (3))){
var inst_34480 = (state_34482[(2)]);
var state_34482__$1 = state_34482;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34482__$1,inst_34480);
} else {
if((state_val_34483 === (4))){
var inst_34472 = (state_34482[(2)]);
var inst_34473 = process(inst_34472);
var state_34482__$1 = state_34482;
if(cljs.core.truth_(inst_34473)){
var statearr_34487_36934 = state_34482__$1;
(statearr_34487_36934[(1)] = (5));

} else {
var statearr_34488_36935 = state_34482__$1;
(statearr_34488_36935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (5))){
var state_34482__$1 = state_34482;
var statearr_34489_36936 = state_34482__$1;
(statearr_34489_36936[(2)] = null);

(statearr_34489_36936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (6))){
var state_34482__$1 = state_34482;
var statearr_34490_36938 = state_34482__$1;
(statearr_34490_36938[(2)] = null);

(statearr_34490_36938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (7))){
var inst_34478 = (state_34482[(2)]);
var state_34482__$1 = state_34482;
var statearr_34491_36939 = state_34482__$1;
(statearr_34491_36939[(2)] = inst_34478);

(statearr_34491_36939[(1)] = (3));


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
});})(__36926,c__34273__auto___36930,G__34468_36927,G__34468_36928__$1,n__4666__auto___36925,jobs,results,process,async))
;
return ((function (__36926,switch__34206__auto__,c__34273__auto___36930,G__34468_36927,G__34468_36928__$1,n__4666__auto___36925,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34492 = [null,null,null,null,null,null,null];
(statearr_34492[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34492[(1)] = (1));

return statearr_34492;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34482){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34482);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34495){if((e34495 instanceof Object)){
var ex__34210__auto__ = e34495;
var statearr_34496_36941 = state_34482;
(statearr_34496_36941[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34495;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36946 = state_34482;
state_34482 = G__36946;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34482){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36926,switch__34206__auto__,c__34273__auto___36930,G__34468_36927,G__34468_36928__$1,n__4666__auto___36925,jobs,results,process,async))
})();
var state__34275__auto__ = (function (){var statearr_34502 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34502[(6)] = c__34273__auto___36930);

return statearr_34502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
});})(__36926,c__34273__auto___36930,G__34468_36927,G__34468_36928__$1,n__4666__auto___36925,jobs,results,process,async))
);


break;
case "async":
var c__34273__auto___36949 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36926,c__34273__auto___36949,G__34468_36927,G__34468_36928__$1,n__4666__auto___36925,jobs,results,process,async){
return (function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = ((function (__36926,c__34273__auto___36949,G__34468_36927,G__34468_36928__$1,n__4666__auto___36925,jobs,results,process,async){
return (function (state_34515){
var state_val_34516 = (state_34515[(1)]);
if((state_val_34516 === (1))){
var state_34515__$1 = state_34515;
var statearr_34517_36951 = state_34515__$1;
(statearr_34517_36951[(2)] = null);

(statearr_34517_36951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (2))){
var state_34515__$1 = state_34515;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34515__$1,(4),jobs);
} else {
if((state_val_34516 === (3))){
var inst_34513 = (state_34515[(2)]);
var state_34515__$1 = state_34515;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34515__$1,inst_34513);
} else {
if((state_val_34516 === (4))){
var inst_34505 = (state_34515[(2)]);
var inst_34506 = async(inst_34505);
var state_34515__$1 = state_34515;
if(cljs.core.truth_(inst_34506)){
var statearr_34518_36952 = state_34515__$1;
(statearr_34518_36952[(1)] = (5));

} else {
var statearr_34519_36953 = state_34515__$1;
(statearr_34519_36953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (5))){
var state_34515__$1 = state_34515;
var statearr_34521_36954 = state_34515__$1;
(statearr_34521_36954[(2)] = null);

(statearr_34521_36954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (6))){
var state_34515__$1 = state_34515;
var statearr_34522_36956 = state_34515__$1;
(statearr_34522_36956[(2)] = null);

(statearr_34522_36956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (7))){
var inst_34511 = (state_34515[(2)]);
var state_34515__$1 = state_34515;
var statearr_34523_36960 = state_34515__$1;
(statearr_34523_36960[(2)] = inst_34511);

(statearr_34523_36960[(1)] = (3));


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
});})(__36926,c__34273__auto___36949,G__34468_36927,G__34468_36928__$1,n__4666__auto___36925,jobs,results,process,async))
;
return ((function (__36926,switch__34206__auto__,c__34273__auto___36949,G__34468_36927,G__34468_36928__$1,n__4666__auto___36925,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34524 = [null,null,null,null,null,null,null];
(statearr_34524[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34524[(1)] = (1));

return statearr_34524;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34515){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34515);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34529){if((e34529 instanceof Object)){
var ex__34210__auto__ = e34529;
var statearr_34530_36961 = state_34515;
(statearr_34530_36961[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34529;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36963 = state_34515;
state_34515 = G__36963;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34515){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36926,switch__34206__auto__,c__34273__auto___36949,G__34468_36927,G__34468_36928__$1,n__4666__auto___36925,jobs,results,process,async))
})();
var state__34275__auto__ = (function (){var statearr_34531 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34531[(6)] = c__34273__auto___36949);

return statearr_34531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
});})(__36926,c__34273__auto___36949,G__34468_36927,G__34468_36928__$1,n__4666__auto___36925,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34468_36928__$1)].join('')));

}

var G__36964 = (__36926 + (1));
__36926 = G__36964;
continue;
} else {
}
break;
}

var c__34273__auto___36965 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34556){
var state_val_34557 = (state_34556[(1)]);
if((state_val_34557 === (7))){
var inst_34552 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
var statearr_34558_36966 = state_34556__$1;
(statearr_34558_36966[(2)] = inst_34552);

(statearr_34558_36966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (1))){
var state_34556__$1 = state_34556;
var statearr_34559_36967 = state_34556__$1;
(statearr_34559_36967[(2)] = null);

(statearr_34559_36967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (4))){
var inst_34537 = (state_34556[(7)]);
var inst_34537__$1 = (state_34556[(2)]);
var inst_34538 = (inst_34537__$1 == null);
var state_34556__$1 = (function (){var statearr_34563 = state_34556;
(statearr_34563[(7)] = inst_34537__$1);

return statearr_34563;
})();
if(cljs.core.truth_(inst_34538)){
var statearr_34564_36968 = state_34556__$1;
(statearr_34564_36968[(1)] = (5));

} else {
var statearr_34565_36969 = state_34556__$1;
(statearr_34565_36969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (6))){
var inst_34542 = (state_34556[(8)]);
var inst_34537 = (state_34556[(7)]);
var inst_34542__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34543 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34544 = [inst_34537,inst_34542__$1];
var inst_34545 = (new cljs.core.PersistentVector(null,2,(5),inst_34543,inst_34544,null));
var state_34556__$1 = (function (){var statearr_34566 = state_34556;
(statearr_34566[(8)] = inst_34542__$1);

return statearr_34566;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34556__$1,(8),jobs,inst_34545);
} else {
if((state_val_34557 === (3))){
var inst_34554 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34556__$1,inst_34554);
} else {
if((state_val_34557 === (2))){
var state_34556__$1 = state_34556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34556__$1,(4),from);
} else {
if((state_val_34557 === (9))){
var inst_34549 = (state_34556[(2)]);
var state_34556__$1 = (function (){var statearr_34567 = state_34556;
(statearr_34567[(9)] = inst_34549);

return statearr_34567;
})();
var statearr_34568_36970 = state_34556__$1;
(statearr_34568_36970[(2)] = null);

(statearr_34568_36970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (5))){
var inst_34540 = cljs.core.async.close_BANG_(jobs);
var state_34556__$1 = state_34556;
var statearr_34569_36971 = state_34556__$1;
(statearr_34569_36971[(2)] = inst_34540);

(statearr_34569_36971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (8))){
var inst_34542 = (state_34556[(8)]);
var inst_34547 = (state_34556[(2)]);
var state_34556__$1 = (function (){var statearr_34570 = state_34556;
(statearr_34570[(10)] = inst_34547);

return statearr_34570;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34556__$1,(9),results,inst_34542);
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
var statearr_34573_36977 = state_34556;
(statearr_34573_36977[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36979 = state_34556;
state_34556 = G__36979;
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
var state__34275__auto__ = (function (){var statearr_34574 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34574[(6)] = c__34273__auto___36965);

return statearr_34574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));


var c__34273__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34612){
var state_val_34613 = (state_34612[(1)]);
if((state_val_34613 === (7))){
var inst_34608 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34614_36980 = state_34612__$1;
(statearr_34614_36980[(2)] = inst_34608);

(statearr_34614_36980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var state_34612__$1 = state_34612;
var statearr_34615_36981 = state_34612__$1;
(statearr_34615_36981[(2)] = null);

(statearr_34615_36981[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34616_36982 = state_34612__$1;
(statearr_34616_36982[(2)] = null);

(statearr_34616_36982[(1)] = (2));


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
var statearr_34618_36983 = state_34612__$1;
(statearr_34618_36983[(1)] = (5));

} else {
var statearr_34619_36984 = state_34612__$1;
(statearr_34619_36984[(1)] = (6));

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
var statearr_34620_36987 = state_34612__$1;
(statearr_34620_36987[(2)] = inst_34603);

(statearr_34620_36987[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_36990 = state_34612__$1;
(statearr_34622_36990[(2)] = null);

(statearr_34622_36990[(1)] = (2));


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
var statearr_34623_36993 = state_34612__$1;
(statearr_34623_36993[(1)] = (19));

} else {
var statearr_34624_36994 = state_34612__$1;
(statearr_34624_36994[(1)] = (20));

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
var statearr_34625_36995 = state_34612__$1;
(statearr_34625_36995[(2)] = null);

(statearr_34625_36995[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34587 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34626 = state_34612;
(statearr_34626[(10)] = inst_34587);

return statearr_34626;
})();
var statearr_34627_36999 = state_34612__$1;
(statearr_34627_36999[(2)] = null);

(statearr_34627_36999[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34628_37001 = state_34612__$1;
(statearr_34628_37001[(2)] = null);

(statearr_34628_37001[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_37002 = state_34612__$1;
(statearr_34629_37002[(1)] = (8));

} else {
var statearr_34630_37005 = state_34612__$1;
(statearr_34630_37005[(1)] = (9));

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
var statearr_34632_37013 = state_34612__$1;
(statearr_34632_37013[(1)] = (15));

} else {
var statearr_34633_37027 = state_34612__$1;
(statearr_34633_37027[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34634_37028 = state_34612__$1;
(statearr_34634_37028[(2)] = false);

(statearr_34634_37028[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34635_37031 = state_34612__$1;
(statearr_34635_37031[(2)] = inst_34584);

(statearr_34635_37031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34636_37039 = state_34612__$1;
(statearr_34636_37039[(2)] = inst_34595);

(statearr_34636_37039[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34581 = cljs.core.async.close_BANG_(to);
var state_34612__$1 = state_34612;
var statearr_34637_37042 = state_34612__$1;
(statearr_34637_37042[(2)] = inst_34581);

(statearr_34637_37042[(1)] = (10));


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
var statearr_34640_37048 = state_34612;
(statearr_34640_37048[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37053 = state_34612;
state_34612 = G__37053;
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
var state__34275__auto__ = (function (){var statearr_34641 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34641[(6)] = c__34273__auto__);

return statearr_34641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));

return c__34273__auto__;
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
var G__34653 = arguments.length;
switch (G__34653) {
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
var c__34273__auto___37083 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34682){
var state_val_34683 = (state_34682[(1)]);
if((state_val_34683 === (7))){
var inst_34678 = (state_34682[(2)]);
var state_34682__$1 = state_34682;
var statearr_34686_37085 = state_34682__$1;
(statearr_34686_37085[(2)] = inst_34678);

(statearr_34686_37085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (1))){
var state_34682__$1 = state_34682;
var statearr_34687_37086 = state_34682__$1;
(statearr_34687_37086[(2)] = null);

(statearr_34687_37086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (4))){
var inst_34658 = (state_34682[(7)]);
var inst_34658__$1 = (state_34682[(2)]);
var inst_34659 = (inst_34658__$1 == null);
var state_34682__$1 = (function (){var statearr_34688 = state_34682;
(statearr_34688[(7)] = inst_34658__$1);

return statearr_34688;
})();
if(cljs.core.truth_(inst_34659)){
var statearr_34689_37089 = state_34682__$1;
(statearr_34689_37089[(1)] = (5));

} else {
var statearr_34690_37090 = state_34682__$1;
(statearr_34690_37090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (13))){
var state_34682__$1 = state_34682;
var statearr_34691_37092 = state_34682__$1;
(statearr_34691_37092[(2)] = null);

(statearr_34691_37092[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (6))){
var inst_34658 = (state_34682[(7)]);
var inst_34665 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34658) : p.call(null,inst_34658));
var state_34682__$1 = state_34682;
if(cljs.core.truth_(inst_34665)){
var statearr_34692_37093 = state_34682__$1;
(statearr_34692_37093[(1)] = (9));

} else {
var statearr_34693_37094 = state_34682__$1;
(statearr_34693_37094[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (3))){
var inst_34680 = (state_34682[(2)]);
var state_34682__$1 = state_34682;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34682__$1,inst_34680);
} else {
if((state_val_34683 === (12))){
var state_34682__$1 = state_34682;
var statearr_34694_37098 = state_34682__$1;
(statearr_34694_37098[(2)] = null);

(statearr_34694_37098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (2))){
var state_34682__$1 = state_34682;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34682__$1,(4),ch);
} else {
if((state_val_34683 === (11))){
var inst_34658 = (state_34682[(7)]);
var inst_34669 = (state_34682[(2)]);
var state_34682__$1 = state_34682;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34682__$1,(8),inst_34669,inst_34658);
} else {
if((state_val_34683 === (9))){
var state_34682__$1 = state_34682;
var statearr_34697_37103 = state_34682__$1;
(statearr_34697_37103[(2)] = tc);

(statearr_34697_37103[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (5))){
var inst_34662 = cljs.core.async.close_BANG_(tc);
var inst_34663 = cljs.core.async.close_BANG_(fc);
var state_34682__$1 = (function (){var statearr_34698 = state_34682;
(statearr_34698[(8)] = inst_34662);

return statearr_34698;
})();
var statearr_34699_37104 = state_34682__$1;
(statearr_34699_37104[(2)] = inst_34663);

(statearr_34699_37104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (14))){
var inst_34676 = (state_34682[(2)]);
var state_34682__$1 = state_34682;
var statearr_34700_37110 = state_34682__$1;
(statearr_34700_37110[(2)] = inst_34676);

(statearr_34700_37110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (10))){
var state_34682__$1 = state_34682;
var statearr_34701_37113 = state_34682__$1;
(statearr_34701_37113[(2)] = fc);

(statearr_34701_37113[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (8))){
var inst_34671 = (state_34682[(2)]);
var state_34682__$1 = state_34682;
if(cljs.core.truth_(inst_34671)){
var statearr_34704_37114 = state_34682__$1;
(statearr_34704_37114[(1)] = (12));

} else {
var statearr_34705_37116 = state_34682__$1;
(statearr_34705_37116[(1)] = (13));

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
var statearr_34706 = [null,null,null,null,null,null,null,null,null];
(statearr_34706[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34706[(1)] = (1));

return statearr_34706;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34682){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34682);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34710){if((e34710 instanceof Object)){
var ex__34210__auto__ = e34710;
var statearr_34711_37119 = state_34682;
(statearr_34711_37119[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34710;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37121 = state_34682;
state_34682 = G__37121;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34712 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34712[(6)] = c__34273__auto___37083);

return statearr_34712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
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
var c__34273__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34734){
var state_val_34735 = (state_34734[(1)]);
if((state_val_34735 === (7))){
var inst_34730 = (state_34734[(2)]);
var state_34734__$1 = state_34734;
var statearr_34739_37129 = state_34734__$1;
(statearr_34739_37129[(2)] = inst_34730);

(statearr_34739_37129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (1))){
var inst_34714 = init;
var state_34734__$1 = (function (){var statearr_34740 = state_34734;
(statearr_34740[(7)] = inst_34714);

return statearr_34740;
})();
var statearr_34741_37131 = state_34734__$1;
(statearr_34741_37131[(2)] = null);

(statearr_34741_37131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (4))){
var inst_34717 = (state_34734[(8)]);
var inst_34717__$1 = (state_34734[(2)]);
var inst_34718 = (inst_34717__$1 == null);
var state_34734__$1 = (function (){var statearr_34745 = state_34734;
(statearr_34745[(8)] = inst_34717__$1);

return statearr_34745;
})();
if(cljs.core.truth_(inst_34718)){
var statearr_34746_37133 = state_34734__$1;
(statearr_34746_37133[(1)] = (5));

} else {
var statearr_34747_37134 = state_34734__$1;
(statearr_34747_37134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (6))){
var inst_34721 = (state_34734[(9)]);
var inst_34717 = (state_34734[(8)]);
var inst_34714 = (state_34734[(7)]);
var inst_34721__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34714,inst_34717) : f.call(null,inst_34714,inst_34717));
var inst_34722 = cljs.core.reduced_QMARK_(inst_34721__$1);
var state_34734__$1 = (function (){var statearr_34748 = state_34734;
(statearr_34748[(9)] = inst_34721__$1);

return statearr_34748;
})();
if(inst_34722){
var statearr_34749_37137 = state_34734__$1;
(statearr_34749_37137[(1)] = (8));

} else {
var statearr_34750_37138 = state_34734__$1;
(statearr_34750_37138[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (3))){
var inst_34732 = (state_34734[(2)]);
var state_34734__$1 = state_34734;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34734__$1,inst_34732);
} else {
if((state_val_34735 === (2))){
var state_34734__$1 = state_34734;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34734__$1,(4),ch);
} else {
if((state_val_34735 === (9))){
var inst_34721 = (state_34734[(9)]);
var inst_34714 = inst_34721;
var state_34734__$1 = (function (){var statearr_34751 = state_34734;
(statearr_34751[(7)] = inst_34714);

return statearr_34751;
})();
var statearr_34755_37142 = state_34734__$1;
(statearr_34755_37142[(2)] = null);

(statearr_34755_37142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (5))){
var inst_34714 = (state_34734[(7)]);
var state_34734__$1 = state_34734;
var statearr_34756_37146 = state_34734__$1;
(statearr_34756_37146[(2)] = inst_34714);

(statearr_34756_37146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (10))){
var inst_34728 = (state_34734[(2)]);
var state_34734__$1 = state_34734;
var statearr_34757_37149 = state_34734__$1;
(statearr_34757_37149[(2)] = inst_34728);

(statearr_34757_37149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (8))){
var inst_34721 = (state_34734[(9)]);
var inst_34724 = cljs.core.deref(inst_34721);
var state_34734__$1 = state_34734;
var statearr_34758_37153 = state_34734__$1;
(statearr_34758_37153[(2)] = inst_34724);

(statearr_34758_37153[(1)] = (10));


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
var statearr_34759 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34759[(0)] = cljs$core$async$reduce_$_state_machine__34207__auto__);

(statearr_34759[(1)] = (1));

return statearr_34759;
});
var cljs$core$async$reduce_$_state_machine__34207__auto____1 = (function (state_34734){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34734);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34760){if((e34760 instanceof Object)){
var ex__34210__auto__ = e34760;
var statearr_34761_37154 = state_34734;
(statearr_34761_37154[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37155 = state_34734;
state_34734 = G__37155;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34207__auto__ = function(state_34734){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34207__auto____1.call(this,state_34734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34207__auto____0;
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34207__auto____1;
return cljs$core$async$reduce_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34762 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34762[(6)] = c__34273__auto__);

return statearr_34762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));

return c__34273__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__34273__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34768){
var state_val_34769 = (state_34768[(1)]);
if((state_val_34769 === (1))){
var inst_34763 = cljs.core.async.reduce(f__$1,init,ch);
var state_34768__$1 = state_34768;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34768__$1,(2),inst_34763);
} else {
if((state_val_34769 === (2))){
var inst_34765 = (state_34768[(2)]);
var inst_34766 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34765) : f__$1.call(null,inst_34765));
var state_34768__$1 = state_34768;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34768__$1,inst_34766);
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
var cljs$core$async$transduce_$_state_machine__34207__auto____1 = (function (state_34768){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34768);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34771){if((e34771 instanceof Object)){
var ex__34210__auto__ = e34771;
var statearr_34772_37166 = state_34768;
(statearr_34772_37166[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34771;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37171 = state_34768;
state_34768 = G__37171;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34207__auto__ = function(state_34768){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34207__auto____1.call(this,state_34768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34207__auto____0;
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34207__auto____1;
return cljs$core$async$transduce_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34773 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34773[(6)] = c__34273__auto__);

return statearr_34773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));

return c__34273__auto__;
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
var c__34273__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34807){
var state_val_34808 = (state_34807[(1)]);
if((state_val_34808 === (7))){
var inst_34789 = (state_34807[(2)]);
var state_34807__$1 = state_34807;
var statearr_34810_37183 = state_34807__$1;
(statearr_34810_37183[(2)] = inst_34789);

(statearr_34810_37183[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (1))){
var inst_34782 = cljs.core.seq(coll);
var inst_34783 = inst_34782;
var state_34807__$1 = (function (){var statearr_34811 = state_34807;
(statearr_34811[(7)] = inst_34783);

return statearr_34811;
})();
var statearr_34813_37189 = state_34807__$1;
(statearr_34813_37189[(2)] = null);

(statearr_34813_37189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (4))){
var inst_34783 = (state_34807[(7)]);
var inst_34787 = cljs.core.first(inst_34783);
var state_34807__$1 = state_34807;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34807__$1,(7),ch,inst_34787);
} else {
if((state_val_34808 === (13))){
var inst_34801 = (state_34807[(2)]);
var state_34807__$1 = state_34807;
var statearr_34817_37192 = state_34807__$1;
(statearr_34817_37192[(2)] = inst_34801);

(statearr_34817_37192[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (6))){
var inst_34792 = (state_34807[(2)]);
var state_34807__$1 = state_34807;
if(cljs.core.truth_(inst_34792)){
var statearr_34819_37195 = state_34807__$1;
(statearr_34819_37195[(1)] = (8));

} else {
var statearr_34820_37196 = state_34807__$1;
(statearr_34820_37196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (3))){
var inst_34805 = (state_34807[(2)]);
var state_34807__$1 = state_34807;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34807__$1,inst_34805);
} else {
if((state_val_34808 === (12))){
var state_34807__$1 = state_34807;
var statearr_34821_37200 = state_34807__$1;
(statearr_34821_37200[(2)] = null);

(statearr_34821_37200[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (2))){
var inst_34783 = (state_34807[(7)]);
var state_34807__$1 = state_34807;
if(cljs.core.truth_(inst_34783)){
var statearr_34822_37205 = state_34807__$1;
(statearr_34822_37205[(1)] = (4));

} else {
var statearr_34823_37206 = state_34807__$1;
(statearr_34823_37206[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (11))){
var inst_34798 = cljs.core.async.close_BANG_(ch);
var state_34807__$1 = state_34807;
var statearr_34824_37213 = state_34807__$1;
(statearr_34824_37213[(2)] = inst_34798);

(statearr_34824_37213[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (9))){
var state_34807__$1 = state_34807;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34825_37214 = state_34807__$1;
(statearr_34825_37214[(1)] = (11));

} else {
var statearr_34826_37215 = state_34807__$1;
(statearr_34826_37215[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (5))){
var inst_34783 = (state_34807[(7)]);
var state_34807__$1 = state_34807;
var statearr_34827_37216 = state_34807__$1;
(statearr_34827_37216[(2)] = inst_34783);

(statearr_34827_37216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (10))){
var inst_34803 = (state_34807[(2)]);
var state_34807__$1 = state_34807;
var statearr_34828_37219 = state_34807__$1;
(statearr_34828_37219[(2)] = inst_34803);

(statearr_34828_37219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (8))){
var inst_34783 = (state_34807[(7)]);
var inst_34794 = cljs.core.next(inst_34783);
var inst_34783__$1 = inst_34794;
var state_34807__$1 = (function (){var statearr_34832 = state_34807;
(statearr_34832[(7)] = inst_34783__$1);

return statearr_34832;
})();
var statearr_34833_37222 = state_34807__$1;
(statearr_34833_37222[(2)] = null);

(statearr_34833_37222[(1)] = (2));


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
var statearr_34837 = [null,null,null,null,null,null,null,null];
(statearr_34837[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34837[(1)] = (1));

return statearr_34837;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34807){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34807);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34838){if((e34838 instanceof Object)){
var ex__34210__auto__ = e34838;
var statearr_34839_37224 = state_34807;
(statearr_34839_37224[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34838;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37226 = state_34807;
state_34807 = G__37226;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34807){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34840 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34840[(6)] = c__34273__auto__);

return statearr_34840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));

return c__34273__auto__;
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
var c__34273__auto___37267 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34990){
var state_val_34996 = (state_34990[(1)]);
if((state_val_34996 === (7))){
var inst_34986 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_34998_37271 = state_34990__$1;
(statearr_34998_37271[(2)] = inst_34986);

(statearr_34998_37271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (20))){
var inst_34877 = (state_34990[(7)]);
var inst_34894 = cljs.core.first(inst_34877);
var inst_34895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34894,(0),null);
var inst_34896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34894,(1),null);
var state_34990__$1 = (function (){var statearr_34999 = state_34990;
(statearr_34999[(8)] = inst_34895);

return statearr_34999;
})();
if(cljs.core.truth_(inst_34896)){
var statearr_35000_37276 = state_34990__$1;
(statearr_35000_37276[(1)] = (22));

} else {
var statearr_35001_37277 = state_34990__$1;
(statearr_35001_37277[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (27))){
var inst_34927 = (state_34990[(9)]);
var inst_34846 = (state_34990[(10)]);
var inst_34925 = (state_34990[(11)]);
var inst_34932 = (state_34990[(12)]);
var inst_34932__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34925,inst_34927);
var inst_34933 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34932__$1,inst_34846,done);
var state_34990__$1 = (function (){var statearr_35006 = state_34990;
(statearr_35006[(12)] = inst_34932__$1);

return statearr_35006;
})();
if(cljs.core.truth_(inst_34933)){
var statearr_35008_37282 = state_34990__$1;
(statearr_35008_37282[(1)] = (30));

} else {
var statearr_35010_37283 = state_34990__$1;
(statearr_35010_37283[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (1))){
var state_34990__$1 = state_34990;
var statearr_35011_37284 = state_34990__$1;
(statearr_35011_37284[(2)] = null);

(statearr_35011_37284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (24))){
var inst_34877 = (state_34990[(7)]);
var inst_34902 = (state_34990[(2)]);
var inst_34903 = cljs.core.next(inst_34877);
var inst_34855 = inst_34903;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34990__$1 = (function (){var statearr_35012 = state_34990;
(statearr_35012[(13)] = inst_34857);

(statearr_35012[(14)] = inst_34856);

(statearr_35012[(15)] = inst_34858);

(statearr_35012[(16)] = inst_34855);

(statearr_35012[(17)] = inst_34902);

return statearr_35012;
})();
var statearr_35014_37285 = state_34990__$1;
(statearr_35014_37285[(2)] = null);

(statearr_35014_37285[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (39))){
var state_34990__$1 = state_34990;
var statearr_35021_37288 = state_34990__$1;
(statearr_35021_37288[(2)] = null);

(statearr_35021_37288[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (4))){
var inst_34846 = (state_34990[(10)]);
var inst_34846__$1 = (state_34990[(2)]);
var inst_34847 = (inst_34846__$1 == null);
var state_34990__$1 = (function (){var statearr_35030 = state_34990;
(statearr_35030[(10)] = inst_34846__$1);

return statearr_35030;
})();
if(cljs.core.truth_(inst_34847)){
var statearr_35036_37292 = state_34990__$1;
(statearr_35036_37292[(1)] = (5));

} else {
var statearr_35039_37294 = state_34990__$1;
(statearr_35039_37294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (15))){
var inst_34857 = (state_34990[(13)]);
var inst_34856 = (state_34990[(14)]);
var inst_34858 = (state_34990[(15)]);
var inst_34855 = (state_34990[(16)]);
var inst_34873 = (state_34990[(2)]);
var inst_34874 = (inst_34858 + (1));
var tmp35017 = inst_34857;
var tmp35019 = inst_34856;
var tmp35020 = inst_34855;
var inst_34855__$1 = tmp35020;
var inst_34856__$1 = tmp35019;
var inst_34857__$1 = tmp35017;
var inst_34858__$1 = inst_34874;
var state_34990__$1 = (function (){var statearr_35042 = state_34990;
(statearr_35042[(18)] = inst_34873);

(statearr_35042[(13)] = inst_34857__$1);

(statearr_35042[(14)] = inst_34856__$1);

(statearr_35042[(15)] = inst_34858__$1);

(statearr_35042[(16)] = inst_34855__$1);

return statearr_35042;
})();
var statearr_35045_37295 = state_34990__$1;
(statearr_35045_37295[(2)] = null);

(statearr_35045_37295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (21))){
var inst_34906 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35049_37296 = state_34990__$1;
(statearr_35049_37296[(2)] = inst_34906);

(statearr_35049_37296[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (31))){
var inst_34932 = (state_34990[(12)]);
var inst_34936 = done(null);
var inst_34937 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34932);
var state_34990__$1 = (function (){var statearr_35054 = state_34990;
(statearr_35054[(19)] = inst_34936);

return statearr_35054;
})();
var statearr_35057_37300 = state_34990__$1;
(statearr_35057_37300[(2)] = inst_34937);

(statearr_35057_37300[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (32))){
var inst_34927 = (state_34990[(9)]);
var inst_34925 = (state_34990[(11)]);
var inst_34924 = (state_34990[(20)]);
var inst_34926 = (state_34990[(21)]);
var inst_34939 = (state_34990[(2)]);
var inst_34940 = (inst_34927 + (1));
var tmp35046 = inst_34925;
var tmp35047 = inst_34924;
var tmp35048 = inst_34926;
var inst_34924__$1 = tmp35047;
var inst_34925__$1 = tmp35046;
var inst_34926__$1 = tmp35048;
var inst_34927__$1 = inst_34940;
var state_34990__$1 = (function (){var statearr_35073 = state_34990;
(statearr_35073[(9)] = inst_34927__$1);

(statearr_35073[(11)] = inst_34925__$1);

(statearr_35073[(20)] = inst_34924__$1);

(statearr_35073[(21)] = inst_34926__$1);

(statearr_35073[(22)] = inst_34939);

return statearr_35073;
})();
var statearr_35078_37309 = state_34990__$1;
(statearr_35078_37309[(2)] = null);

(statearr_35078_37309[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (40))){
var inst_34957 = (state_34990[(23)]);
var inst_34962 = done(null);
var inst_34963 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34957);
var state_34990__$1 = (function (){var statearr_35083 = state_34990;
(statearr_35083[(24)] = inst_34962);

return statearr_35083;
})();
var statearr_35086_37312 = state_34990__$1;
(statearr_35086_37312[(2)] = inst_34963);

(statearr_35086_37312[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (33))){
var inst_34945 = (state_34990[(25)]);
var inst_34948 = cljs.core.chunked_seq_QMARK_(inst_34945);
var state_34990__$1 = state_34990;
if(inst_34948){
var statearr_35092_37315 = state_34990__$1;
(statearr_35092_37315[(1)] = (36));

} else {
var statearr_35095_37317 = state_34990__$1;
(statearr_35095_37317[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (13))){
var inst_34867 = (state_34990[(26)]);
var inst_34870 = cljs.core.async.close_BANG_(inst_34867);
var state_34990__$1 = state_34990;
var statearr_35103_37322 = state_34990__$1;
(statearr_35103_37322[(2)] = inst_34870);

(statearr_35103_37322[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (22))){
var inst_34895 = (state_34990[(8)]);
var inst_34899 = cljs.core.async.close_BANG_(inst_34895);
var state_34990__$1 = state_34990;
var statearr_35110_37329 = state_34990__$1;
(statearr_35110_37329[(2)] = inst_34899);

(statearr_35110_37329[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (36))){
var inst_34945 = (state_34990[(25)]);
var inst_34951 = cljs.core.chunk_first(inst_34945);
var inst_34952 = cljs.core.chunk_rest(inst_34945);
var inst_34954 = cljs.core.count(inst_34951);
var inst_34924 = inst_34952;
var inst_34925 = inst_34951;
var inst_34926 = inst_34954;
var inst_34927 = (0);
var state_34990__$1 = (function (){var statearr_35118 = state_34990;
(statearr_35118[(9)] = inst_34927);

(statearr_35118[(11)] = inst_34925);

(statearr_35118[(20)] = inst_34924);

(statearr_35118[(21)] = inst_34926);

return statearr_35118;
})();
var statearr_35123_37332 = state_34990__$1;
(statearr_35123_37332[(2)] = null);

(statearr_35123_37332[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (41))){
var inst_34945 = (state_34990[(25)]);
var inst_34965 = (state_34990[(2)]);
var inst_34966 = cljs.core.next(inst_34945);
var inst_34924 = inst_34966;
var inst_34925 = null;
var inst_34926 = (0);
var inst_34927 = (0);
var state_34990__$1 = (function (){var statearr_35133 = state_34990;
(statearr_35133[(9)] = inst_34927);

(statearr_35133[(11)] = inst_34925);

(statearr_35133[(20)] = inst_34924);

(statearr_35133[(21)] = inst_34926);

(statearr_35133[(27)] = inst_34965);

return statearr_35133;
})();
var statearr_35136_37340 = state_34990__$1;
(statearr_35136_37340[(2)] = null);

(statearr_35136_37340[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (43))){
var state_34990__$1 = state_34990;
var statearr_35142_37343 = state_34990__$1;
(statearr_35142_37343[(2)] = null);

(statearr_35142_37343[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (29))){
var inst_34974 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35143_37346 = state_34990__$1;
(statearr_35143_37346[(2)] = inst_34974);

(statearr_35143_37346[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (44))){
var inst_34983 = (state_34990[(2)]);
var state_34990__$1 = (function (){var statearr_35144 = state_34990;
(statearr_35144[(28)] = inst_34983);

return statearr_35144;
})();
var statearr_35145_37348 = state_34990__$1;
(statearr_35145_37348[(2)] = null);

(statearr_35145_37348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (6))){
var inst_34916 = (state_34990[(29)]);
var inst_34915 = cljs.core.deref(cs);
var inst_34916__$1 = cljs.core.keys(inst_34915);
var inst_34917 = cljs.core.count(inst_34916__$1);
var inst_34918 = cljs.core.reset_BANG_(dctr,inst_34917);
var inst_34923 = cljs.core.seq(inst_34916__$1);
var inst_34924 = inst_34923;
var inst_34925 = null;
var inst_34926 = (0);
var inst_34927 = (0);
var state_34990__$1 = (function (){var statearr_35148 = state_34990;
(statearr_35148[(9)] = inst_34927);

(statearr_35148[(30)] = inst_34918);

(statearr_35148[(11)] = inst_34925);

(statearr_35148[(20)] = inst_34924);

(statearr_35148[(21)] = inst_34926);

(statearr_35148[(29)] = inst_34916__$1);

return statearr_35148;
})();
var statearr_35149_37361 = state_34990__$1;
(statearr_35149_37361[(2)] = null);

(statearr_35149_37361[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (28))){
var inst_34924 = (state_34990[(20)]);
var inst_34945 = (state_34990[(25)]);
var inst_34945__$1 = cljs.core.seq(inst_34924);
var state_34990__$1 = (function (){var statearr_35150 = state_34990;
(statearr_35150[(25)] = inst_34945__$1);

return statearr_35150;
})();
if(inst_34945__$1){
var statearr_35153_37363 = state_34990__$1;
(statearr_35153_37363[(1)] = (33));

} else {
var statearr_35154_37365 = state_34990__$1;
(statearr_35154_37365[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (25))){
var inst_34927 = (state_34990[(9)]);
var inst_34926 = (state_34990[(21)]);
var inst_34929 = (inst_34927 < inst_34926);
var inst_34930 = inst_34929;
var state_34990__$1 = state_34990;
if(cljs.core.truth_(inst_34930)){
var statearr_35176_37368 = state_34990__$1;
(statearr_35176_37368[(1)] = (27));

} else {
var statearr_35179_37369 = state_34990__$1;
(statearr_35179_37369[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (34))){
var state_34990__$1 = state_34990;
var statearr_35184_37370 = state_34990__$1;
(statearr_35184_37370[(2)] = null);

(statearr_35184_37370[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (17))){
var state_34990__$1 = state_34990;
var statearr_35185_37372 = state_34990__$1;
(statearr_35185_37372[(2)] = null);

(statearr_35185_37372[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (3))){
var inst_34988 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34990__$1,inst_34988);
} else {
if((state_val_34996 === (12))){
var inst_34911 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35190_37379 = state_34990__$1;
(statearr_35190_37379[(2)] = inst_34911);

(statearr_35190_37379[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (2))){
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34990__$1,(4),ch);
} else {
if((state_val_34996 === (23))){
var state_34990__$1 = state_34990;
var statearr_35201_37380 = state_34990__$1;
(statearr_35201_37380[(2)] = null);

(statearr_35201_37380[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (35))){
var inst_34972 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35208_37382 = state_34990__$1;
(statearr_35208_37382[(2)] = inst_34972);

(statearr_35208_37382[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (19))){
var inst_34877 = (state_34990[(7)]);
var inst_34884 = cljs.core.chunk_first(inst_34877);
var inst_34885 = cljs.core.chunk_rest(inst_34877);
var inst_34886 = cljs.core.count(inst_34884);
var inst_34855 = inst_34885;
var inst_34856 = inst_34884;
var inst_34857 = inst_34886;
var inst_34858 = (0);
var state_34990__$1 = (function (){var statearr_35217 = state_34990;
(statearr_35217[(13)] = inst_34857);

(statearr_35217[(14)] = inst_34856);

(statearr_35217[(15)] = inst_34858);

(statearr_35217[(16)] = inst_34855);

return statearr_35217;
})();
var statearr_35223_37390 = state_34990__$1;
(statearr_35223_37390[(2)] = null);

(statearr_35223_37390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (11))){
var inst_34855 = (state_34990[(16)]);
var inst_34877 = (state_34990[(7)]);
var inst_34877__$1 = cljs.core.seq(inst_34855);
var state_34990__$1 = (function (){var statearr_35230 = state_34990;
(statearr_35230[(7)] = inst_34877__$1);

return statearr_35230;
})();
if(inst_34877__$1){
var statearr_35233_37393 = state_34990__$1;
(statearr_35233_37393[(1)] = (16));

} else {
var statearr_35234_37394 = state_34990__$1;
(statearr_35234_37394[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (9))){
var inst_34913 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35240_37397 = state_34990__$1;
(statearr_35240_37397[(2)] = inst_34913);

(statearr_35240_37397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (5))){
var inst_34853 = cljs.core.deref(cs);
var inst_34854 = cljs.core.seq(inst_34853);
var inst_34855 = inst_34854;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34990__$1 = (function (){var statearr_35246 = state_34990;
(statearr_35246[(13)] = inst_34857);

(statearr_35246[(14)] = inst_34856);

(statearr_35246[(15)] = inst_34858);

(statearr_35246[(16)] = inst_34855);

return statearr_35246;
})();
var statearr_35251_37401 = state_34990__$1;
(statearr_35251_37401[(2)] = null);

(statearr_35251_37401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (14))){
var state_34990__$1 = state_34990;
var statearr_35255_37403 = state_34990__$1;
(statearr_35255_37403[(2)] = null);

(statearr_35255_37403[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (45))){
var inst_34980 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35262_37404 = state_34990__$1;
(statearr_35262_37404[(2)] = inst_34980);

(statearr_35262_37404[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (26))){
var inst_34916 = (state_34990[(29)]);
var inst_34976 = (state_34990[(2)]);
var inst_34977 = cljs.core.seq(inst_34916);
var state_34990__$1 = (function (){var statearr_35269 = state_34990;
(statearr_35269[(31)] = inst_34976);

return statearr_35269;
})();
if(inst_34977){
var statearr_35272_37410 = state_34990__$1;
(statearr_35272_37410[(1)] = (42));

} else {
var statearr_35275_37412 = state_34990__$1;
(statearr_35275_37412[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (16))){
var inst_34877 = (state_34990[(7)]);
var inst_34881 = cljs.core.chunked_seq_QMARK_(inst_34877);
var state_34990__$1 = state_34990;
if(inst_34881){
var statearr_35281_37414 = state_34990__$1;
(statearr_35281_37414[(1)] = (19));

} else {
var statearr_35283_37415 = state_34990__$1;
(statearr_35283_37415[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (38))){
var inst_34969 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35287_37416 = state_34990__$1;
(statearr_35287_37416[(2)] = inst_34969);

(statearr_35287_37416[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (30))){
var state_34990__$1 = state_34990;
var statearr_35292_37418 = state_34990__$1;
(statearr_35292_37418[(2)] = null);

(statearr_35292_37418[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (10))){
var inst_34856 = (state_34990[(14)]);
var inst_34858 = (state_34990[(15)]);
var inst_34866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34856,inst_34858);
var inst_34867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(0),null);
var inst_34868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(1),null);
var state_34990__$1 = (function (){var statearr_35298 = state_34990;
(statearr_35298[(26)] = inst_34867);

return statearr_35298;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_35301_37421 = state_34990__$1;
(statearr_35301_37421[(1)] = (13));

} else {
var statearr_35304_37422 = state_34990__$1;
(statearr_35304_37422[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (18))){
var inst_34909 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35308_37426 = state_34990__$1;
(statearr_35308_37426[(2)] = inst_34909);

(statearr_35308_37426[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (42))){
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34990__$1,(45),dchan);
} else {
if((state_val_34996 === (37))){
var inst_34846 = (state_34990[(10)]);
var inst_34957 = (state_34990[(23)]);
var inst_34945 = (state_34990[(25)]);
var inst_34957__$1 = cljs.core.first(inst_34945);
var inst_34959 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34957__$1,inst_34846,done);
var state_34990__$1 = (function (){var statearr_35319 = state_34990;
(statearr_35319[(23)] = inst_34957__$1);

return statearr_35319;
})();
if(cljs.core.truth_(inst_34959)){
var statearr_35323_37430 = state_34990__$1;
(statearr_35323_37430[(1)] = (39));

} else {
var statearr_35325_37431 = state_34990__$1;
(statearr_35325_37431[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (8))){
var inst_34857 = (state_34990[(13)]);
var inst_34858 = (state_34990[(15)]);
var inst_34860 = (inst_34858 < inst_34857);
var inst_34861 = inst_34860;
var state_34990__$1 = state_34990;
if(cljs.core.truth_(inst_34861)){
var statearr_35332_37433 = state_34990__$1;
(statearr_35332_37433[(1)] = (10));

} else {
var statearr_35334_37434 = state_34990__$1;
(statearr_35334_37434[(1)] = (11));

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
var statearr_35347 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35347[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35347[(1)] = (1));

return statearr_35347;
});
var cljs$core$async$mult_$_state_machine__34207__auto____1 = (function (state_34990){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34990);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35354){if((e35354 instanceof Object)){
var ex__34210__auto__ = e35354;
var statearr_35355_37439 = state_34990;
(statearr_35355_37439[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35354;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37443 = state_34990;
state_34990 = G__37443;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34207__auto__ = function(state_34990){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34207__auto____1.call(this,state_34990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34207__auto____0;
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34207__auto____1;
return cljs$core$async$mult_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_35356 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_35356[(6)] = c__34273__auto___37267);

return statearr_35356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
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
var G__35358 = arguments.length;
switch (G__35358) {
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
var len__4789__auto___37490 = arguments.length;
var i__4790__auto___37492 = (0);
while(true){
if((i__4790__auto___37492 < len__4789__auto___37490)){
args__4795__auto__.push((arguments[i__4790__auto___37492]));

var G__37493 = (i__4790__auto___37492 + (1));
i__4790__auto___37492 = G__37493;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35444){
var map__35446 = p__35444;
var map__35446__$1 = (((((!((map__35446 == null))))?(((((map__35446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35446):map__35446);
var opts = map__35446__$1;
var statearr_35451_37497 = state;
(statearr_35451_37497[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35452_37500 = state;
(statearr_35452_37500[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35455_37505 = state;
(statearr_35455_37505[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35417){
var G__35418 = cljs.core.first(seq35417);
var seq35417__$1 = cljs.core.next(seq35417);
var G__35419 = cljs.core.first(seq35417__$1);
var seq35417__$2 = cljs.core.next(seq35417__$1);
var G__35420 = cljs.core.first(seq35417__$2);
var seq35417__$3 = cljs.core.next(seq35417__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35418,G__35419,G__35420,seq35417__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35507 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35507 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35508){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35508 = meta35508;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35509,meta35508__$1){
var self__ = this;
var _35509__$1 = this;
return (new cljs.core.async.t_cljs$core$async35507(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35508__$1));
}));

(cljs.core.async.t_cljs$core$async35507.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35509){
var self__ = this;
var _35509__$1 = this;
return self__.meta35508;
}));

(cljs.core.async.t_cljs$core$async35507.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35507.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35507.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35507.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35507.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35507.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35507.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35507.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35507.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35508","meta35508",1638450177,null)], null);
}));

(cljs.core.async.t_cljs$core$async35507.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35507.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35507");

(cljs.core.async.t_cljs$core$async35507.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35507");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35507.
 */
cljs.core.async.__GT_t_cljs$core$async35507 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35507(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35508){
return (new cljs.core.async.t_cljs$core$async35507(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35508));
});

}

return (new cljs.core.async.t_cljs$core$async35507(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34273__auto___37553 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_35681){
var state_val_35682 = (state_35681[(1)]);
if((state_val_35682 === (7))){
var inst_35588 = (state_35681[(2)]);
var state_35681__$1 = state_35681;
var statearr_35687_37561 = state_35681__$1;
(statearr_35687_37561[(2)] = inst_35588);

(statearr_35687_37561[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (20))){
var inst_35600 = (state_35681[(7)]);
var state_35681__$1 = state_35681;
var statearr_35688_37563 = state_35681__$1;
(statearr_35688_37563[(2)] = inst_35600);

(statearr_35688_37563[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (27))){
var state_35681__$1 = state_35681;
var statearr_35689_37565 = state_35681__$1;
(statearr_35689_37565[(2)] = null);

(statearr_35689_37565[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (1))){
var inst_35575 = (state_35681[(8)]);
var inst_35575__$1 = calc_state();
var inst_35577 = (inst_35575__$1 == null);
var inst_35578 = cljs.core.not(inst_35577);
var state_35681__$1 = (function (){var statearr_35691 = state_35681;
(statearr_35691[(8)] = inst_35575__$1);

return statearr_35691;
})();
if(inst_35578){
var statearr_35694_37577 = state_35681__$1;
(statearr_35694_37577[(1)] = (2));

} else {
var statearr_35696_37578 = state_35681__$1;
(statearr_35696_37578[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (24))){
var inst_35635 = (state_35681[(9)]);
var inst_35626 = (state_35681[(10)]);
var inst_35651 = (state_35681[(11)]);
var inst_35651__$1 = (inst_35626.cljs$core$IFn$_invoke$arity$1 ? inst_35626.cljs$core$IFn$_invoke$arity$1(inst_35635) : inst_35626.call(null,inst_35635));
var state_35681__$1 = (function (){var statearr_35697 = state_35681;
(statearr_35697[(11)] = inst_35651__$1);

return statearr_35697;
})();
if(cljs.core.truth_(inst_35651__$1)){
var statearr_35700_37588 = state_35681__$1;
(statearr_35700_37588[(1)] = (29));

} else {
var statearr_35701_37590 = state_35681__$1;
(statearr_35701_37590[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (4))){
var inst_35591 = (state_35681[(2)]);
var state_35681__$1 = state_35681;
if(cljs.core.truth_(inst_35591)){
var statearr_35705_37592 = state_35681__$1;
(statearr_35705_37592[(1)] = (8));

} else {
var statearr_35706_37593 = state_35681__$1;
(statearr_35706_37593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (15))){
var inst_35620 = (state_35681[(2)]);
var state_35681__$1 = state_35681;
if(cljs.core.truth_(inst_35620)){
var statearr_35708_37596 = state_35681__$1;
(statearr_35708_37596[(1)] = (19));

} else {
var statearr_35709_37600 = state_35681__$1;
(statearr_35709_37600[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (21))){
var inst_35625 = (state_35681[(12)]);
var inst_35625__$1 = (state_35681[(2)]);
var inst_35626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35625__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35625__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35625__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35681__$1 = (function (){var statearr_35711 = state_35681;
(statearr_35711[(13)] = inst_35627);

(statearr_35711[(12)] = inst_35625__$1);

(statearr_35711[(10)] = inst_35626);

return statearr_35711;
})();
return cljs.core.async.ioc_alts_BANG_(state_35681__$1,(22),inst_35628);
} else {
if((state_val_35682 === (31))){
var inst_35661 = (state_35681[(2)]);
var state_35681__$1 = state_35681;
if(cljs.core.truth_(inst_35661)){
var statearr_35712_37609 = state_35681__$1;
(statearr_35712_37609[(1)] = (32));

} else {
var statearr_35713_37611 = state_35681__$1;
(statearr_35713_37611[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (32))){
var inst_35634 = (state_35681[(14)]);
var state_35681__$1 = state_35681;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35681__$1,(35),out,inst_35634);
} else {
if((state_val_35682 === (33))){
var inst_35625 = (state_35681[(12)]);
var inst_35600 = inst_35625;
var state_35681__$1 = (function (){var statearr_35716 = state_35681;
(statearr_35716[(7)] = inst_35600);

return statearr_35716;
})();
var statearr_35717_37619 = state_35681__$1;
(statearr_35717_37619[(2)] = null);

(statearr_35717_37619[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (13))){
var inst_35600 = (state_35681[(7)]);
var inst_35609 = inst_35600.cljs$lang$protocol_mask$partition0$;
var inst_35610 = (inst_35609 & (64));
var inst_35611 = inst_35600.cljs$core$ISeq$;
var inst_35612 = (cljs.core.PROTOCOL_SENTINEL === inst_35611);
var inst_35613 = ((inst_35610) || (inst_35612));
var state_35681__$1 = state_35681;
if(cljs.core.truth_(inst_35613)){
var statearr_35719_37623 = state_35681__$1;
(statearr_35719_37623[(1)] = (16));

} else {
var statearr_35720_37627 = state_35681__$1;
(statearr_35720_37627[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (22))){
var inst_35635 = (state_35681[(9)]);
var inst_35634 = (state_35681[(14)]);
var inst_35633 = (state_35681[(2)]);
var inst_35634__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35633,(0),null);
var inst_35635__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35633,(1),null);
var inst_35636 = (inst_35634__$1 == null);
var inst_35637 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35635__$1,change);
var inst_35638 = ((inst_35636) || (inst_35637));
var state_35681__$1 = (function (){var statearr_35722 = state_35681;
(statearr_35722[(9)] = inst_35635__$1);

(statearr_35722[(14)] = inst_35634__$1);

return statearr_35722;
})();
if(cljs.core.truth_(inst_35638)){
var statearr_35723_37636 = state_35681__$1;
(statearr_35723_37636[(1)] = (23));

} else {
var statearr_35727_37638 = state_35681__$1;
(statearr_35727_37638[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (36))){
var inst_35625 = (state_35681[(12)]);
var inst_35600 = inst_35625;
var state_35681__$1 = (function (){var statearr_35730 = state_35681;
(statearr_35730[(7)] = inst_35600);

return statearr_35730;
})();
var statearr_35731_37646 = state_35681__$1;
(statearr_35731_37646[(2)] = null);

(statearr_35731_37646[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (29))){
var inst_35651 = (state_35681[(11)]);
var state_35681__$1 = state_35681;
var statearr_35735_37648 = state_35681__$1;
(statearr_35735_37648[(2)] = inst_35651);

(statearr_35735_37648[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (6))){
var state_35681__$1 = state_35681;
var statearr_35737_37649 = state_35681__$1;
(statearr_35737_37649[(2)] = false);

(statearr_35737_37649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (28))){
var inst_35647 = (state_35681[(2)]);
var inst_35648 = calc_state();
var inst_35600 = inst_35648;
var state_35681__$1 = (function (){var statearr_35740 = state_35681;
(statearr_35740[(7)] = inst_35600);

(statearr_35740[(15)] = inst_35647);

return statearr_35740;
})();
var statearr_35758_37655 = state_35681__$1;
(statearr_35758_37655[(2)] = null);

(statearr_35758_37655[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (25))){
var inst_35675 = (state_35681[(2)]);
var state_35681__$1 = state_35681;
var statearr_35759_37662 = state_35681__$1;
(statearr_35759_37662[(2)] = inst_35675);

(statearr_35759_37662[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (34))){
var inst_35673 = (state_35681[(2)]);
var state_35681__$1 = state_35681;
var statearr_35763_37664 = state_35681__$1;
(statearr_35763_37664[(2)] = inst_35673);

(statearr_35763_37664[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (17))){
var state_35681__$1 = state_35681;
var statearr_35765_37666 = state_35681__$1;
(statearr_35765_37666[(2)] = false);

(statearr_35765_37666[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (3))){
var state_35681__$1 = state_35681;
var statearr_35766_37667 = state_35681__$1;
(statearr_35766_37667[(2)] = false);

(statearr_35766_37667[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (12))){
var inst_35677 = (state_35681[(2)]);
var state_35681__$1 = state_35681;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35681__$1,inst_35677);
} else {
if((state_val_35682 === (2))){
var inst_35575 = (state_35681[(8)]);
var inst_35580 = inst_35575.cljs$lang$protocol_mask$partition0$;
var inst_35581 = (inst_35580 & (64));
var inst_35582 = inst_35575.cljs$core$ISeq$;
var inst_35583 = (cljs.core.PROTOCOL_SENTINEL === inst_35582);
var inst_35584 = ((inst_35581) || (inst_35583));
var state_35681__$1 = state_35681;
if(cljs.core.truth_(inst_35584)){
var statearr_35768_37676 = state_35681__$1;
(statearr_35768_37676[(1)] = (5));

} else {
var statearr_35769_37678 = state_35681__$1;
(statearr_35769_37678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (23))){
var inst_35634 = (state_35681[(14)]);
var inst_35641 = (inst_35634 == null);
var state_35681__$1 = state_35681;
if(cljs.core.truth_(inst_35641)){
var statearr_35771_37679 = state_35681__$1;
(statearr_35771_37679[(1)] = (26));

} else {
var statearr_35772_37680 = state_35681__$1;
(statearr_35772_37680[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (35))){
var inst_35664 = (state_35681[(2)]);
var state_35681__$1 = state_35681;
if(cljs.core.truth_(inst_35664)){
var statearr_35775_37686 = state_35681__$1;
(statearr_35775_37686[(1)] = (36));

} else {
var statearr_35776_37688 = state_35681__$1;
(statearr_35776_37688[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (19))){
var inst_35600 = (state_35681[(7)]);
var inst_35622 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35600);
var state_35681__$1 = state_35681;
var statearr_35778_37690 = state_35681__$1;
(statearr_35778_37690[(2)] = inst_35622);

(statearr_35778_37690[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (11))){
var inst_35600 = (state_35681[(7)]);
var inst_35606 = (inst_35600 == null);
var inst_35607 = cljs.core.not(inst_35606);
var state_35681__$1 = state_35681;
if(inst_35607){
var statearr_35781_37694 = state_35681__$1;
(statearr_35781_37694[(1)] = (13));

} else {
var statearr_35783_37695 = state_35681__$1;
(statearr_35783_37695[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (9))){
var inst_35575 = (state_35681[(8)]);
var state_35681__$1 = state_35681;
var statearr_35784_37697 = state_35681__$1;
(statearr_35784_37697[(2)] = inst_35575);

(statearr_35784_37697[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (5))){
var state_35681__$1 = state_35681;
var statearr_35785_37698 = state_35681__$1;
(statearr_35785_37698[(2)] = true);

(statearr_35785_37698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (14))){
var state_35681__$1 = state_35681;
var statearr_35787_37699 = state_35681__$1;
(statearr_35787_37699[(2)] = false);

(statearr_35787_37699[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (26))){
var inst_35635 = (state_35681[(9)]);
var inst_35644 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35635);
var state_35681__$1 = state_35681;
var statearr_35788_37702 = state_35681__$1;
(statearr_35788_37702[(2)] = inst_35644);

(statearr_35788_37702[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (16))){
var state_35681__$1 = state_35681;
var statearr_35789_37703 = state_35681__$1;
(statearr_35789_37703[(2)] = true);

(statearr_35789_37703[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (38))){
var inst_35669 = (state_35681[(2)]);
var state_35681__$1 = state_35681;
var statearr_35793_37704 = state_35681__$1;
(statearr_35793_37704[(2)] = inst_35669);

(statearr_35793_37704[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (30))){
var inst_35627 = (state_35681[(13)]);
var inst_35635 = (state_35681[(9)]);
var inst_35626 = (state_35681[(10)]);
var inst_35656 = cljs.core.empty_QMARK_(inst_35626);
var inst_35657 = (inst_35627.cljs$core$IFn$_invoke$arity$1 ? inst_35627.cljs$core$IFn$_invoke$arity$1(inst_35635) : inst_35627.call(null,inst_35635));
var inst_35658 = cljs.core.not(inst_35657);
var inst_35659 = ((inst_35656) && (inst_35658));
var state_35681__$1 = state_35681;
var statearr_35797_37707 = state_35681__$1;
(statearr_35797_37707[(2)] = inst_35659);

(statearr_35797_37707[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (10))){
var inst_35575 = (state_35681[(8)]);
var inst_35596 = (state_35681[(2)]);
var inst_35597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35596,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35598 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35596,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35599 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35596,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35600 = inst_35575;
var state_35681__$1 = (function (){var statearr_35801 = state_35681;
(statearr_35801[(16)] = inst_35598);

(statearr_35801[(7)] = inst_35600);

(statearr_35801[(17)] = inst_35597);

(statearr_35801[(18)] = inst_35599);

return statearr_35801;
})();
var statearr_35802_37712 = state_35681__$1;
(statearr_35802_37712[(2)] = null);

(statearr_35802_37712[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (18))){
var inst_35617 = (state_35681[(2)]);
var state_35681__$1 = state_35681;
var statearr_35804_37713 = state_35681__$1;
(statearr_35804_37713[(2)] = inst_35617);

(statearr_35804_37713[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (37))){
var state_35681__$1 = state_35681;
var statearr_35809_37717 = state_35681__$1;
(statearr_35809_37717[(2)] = null);

(statearr_35809_37717[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (8))){
var inst_35575 = (state_35681[(8)]);
var inst_35593 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35575);
var state_35681__$1 = state_35681;
var statearr_35812_37718 = state_35681__$1;
(statearr_35812_37718[(2)] = inst_35593);

(statearr_35812_37718[(1)] = (10));


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
var statearr_35815 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35815[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35815[(1)] = (1));

return statearr_35815;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35681){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35681);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35816){if((e35816 instanceof Object)){
var ex__34210__auto__ = e35816;
var statearr_35819_37721 = state_35681;
(statearr_35819_37721[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35816;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37722 = state_35681;
state_35681 = G__37722;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35681){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_35821 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_35821[(6)] = c__34273__auto___37553);

return statearr_35821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
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
var G__35850 = arguments.length;
switch (G__35850) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35863_SHARP_){
if(cljs.core.truth_((p1__35863_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35863_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35863_SHARP_.call(null,topic)))){
return p1__35863_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35863_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
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
var c__34273__auto___37791 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_35993){
var state_val_35994 = (state_35993[(1)]);
if((state_val_35994 === (7))){
var inst_35984 = (state_35993[(2)]);
var state_35993__$1 = state_35993;
var statearr_35995_37793 = state_35993__$1;
(statearr_35995_37793[(2)] = inst_35984);

(statearr_35995_37793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (20))){
var state_35993__$1 = state_35993;
var statearr_35997_37799 = state_35993__$1;
(statearr_35997_37799[(2)] = null);

(statearr_35997_37799[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (1))){
var state_35993__$1 = state_35993;
var statearr_35999_37802 = state_35993__$1;
(statearr_35999_37802[(2)] = null);

(statearr_35999_37802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (24))){
var inst_35965 = (state_35993[(7)]);
var inst_35976 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35965);
var state_35993__$1 = state_35993;
var statearr_36003_37804 = state_35993__$1;
(statearr_36003_37804[(2)] = inst_35976);

(statearr_36003_37804[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (4))){
var inst_35909 = (state_35993[(8)]);
var inst_35909__$1 = (state_35993[(2)]);
var inst_35910 = (inst_35909__$1 == null);
var state_35993__$1 = (function (){var statearr_36005 = state_35993;
(statearr_36005[(8)] = inst_35909__$1);

return statearr_36005;
})();
if(cljs.core.truth_(inst_35910)){
var statearr_36006_37806 = state_35993__$1;
(statearr_36006_37806[(1)] = (5));

} else {
var statearr_36007_37810 = state_35993__$1;
(statearr_36007_37810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (15))){
var inst_35959 = (state_35993[(2)]);
var state_35993__$1 = state_35993;
var statearr_36008_37813 = state_35993__$1;
(statearr_36008_37813[(2)] = inst_35959);

(statearr_36008_37813[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (21))){
var inst_35981 = (state_35993[(2)]);
var state_35993__$1 = (function (){var statearr_36010 = state_35993;
(statearr_36010[(9)] = inst_35981);

return statearr_36010;
})();
var statearr_36013_37817 = state_35993__$1;
(statearr_36013_37817[(2)] = null);

(statearr_36013_37817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (13))){
var inst_35938 = (state_35993[(10)]);
var inst_35942 = cljs.core.chunked_seq_QMARK_(inst_35938);
var state_35993__$1 = state_35993;
if(inst_35942){
var statearr_36015_37818 = state_35993__$1;
(statearr_36015_37818[(1)] = (16));

} else {
var statearr_36016_37819 = state_35993__$1;
(statearr_36016_37819[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (22))){
var inst_35972 = (state_35993[(2)]);
var state_35993__$1 = state_35993;
if(cljs.core.truth_(inst_35972)){
var statearr_36017_37821 = state_35993__$1;
(statearr_36017_37821[(1)] = (23));

} else {
var statearr_36018_37822 = state_35993__$1;
(statearr_36018_37822[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (6))){
var inst_35965 = (state_35993[(7)]);
var inst_35909 = (state_35993[(8)]);
var inst_35967 = (state_35993[(11)]);
var inst_35965__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35909) : topic_fn.call(null,inst_35909));
var inst_35966 = cljs.core.deref(mults);
var inst_35967__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35966,inst_35965__$1);
var state_35993__$1 = (function (){var statearr_36019 = state_35993;
(statearr_36019[(7)] = inst_35965__$1);

(statearr_36019[(11)] = inst_35967__$1);

return statearr_36019;
})();
if(cljs.core.truth_(inst_35967__$1)){
var statearr_36020_37827 = state_35993__$1;
(statearr_36020_37827[(1)] = (19));

} else {
var statearr_36021_37828 = state_35993__$1;
(statearr_36021_37828[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (25))){
var inst_35978 = (state_35993[(2)]);
var state_35993__$1 = state_35993;
var statearr_36022_37830 = state_35993__$1;
(statearr_36022_37830[(2)] = inst_35978);

(statearr_36022_37830[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (17))){
var inst_35938 = (state_35993[(10)]);
var inst_35949 = cljs.core.first(inst_35938);
var inst_35950 = cljs.core.async.muxch_STAR_(inst_35949);
var inst_35951 = cljs.core.async.close_BANG_(inst_35950);
var inst_35952 = cljs.core.next(inst_35938);
var inst_35922 = inst_35952;
var inst_35923 = null;
var inst_35924 = (0);
var inst_35925 = (0);
var state_35993__$1 = (function (){var statearr_36023 = state_35993;
(statearr_36023[(12)] = inst_35923);

(statearr_36023[(13)] = inst_35922);

(statearr_36023[(14)] = inst_35925);

(statearr_36023[(15)] = inst_35924);

(statearr_36023[(16)] = inst_35951);

return statearr_36023;
})();
var statearr_36024_37838 = state_35993__$1;
(statearr_36024_37838[(2)] = null);

(statearr_36024_37838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (3))){
var inst_35986 = (state_35993[(2)]);
var state_35993__$1 = state_35993;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35993__$1,inst_35986);
} else {
if((state_val_35994 === (12))){
var inst_35961 = (state_35993[(2)]);
var state_35993__$1 = state_35993;
var statearr_36025_37843 = state_35993__$1;
(statearr_36025_37843[(2)] = inst_35961);

(statearr_36025_37843[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (2))){
var state_35993__$1 = state_35993;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35993__$1,(4),ch);
} else {
if((state_val_35994 === (23))){
var state_35993__$1 = state_35993;
var statearr_36026_37844 = state_35993__$1;
(statearr_36026_37844[(2)] = null);

(statearr_36026_37844[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (19))){
var inst_35909 = (state_35993[(8)]);
var inst_35967 = (state_35993[(11)]);
var inst_35970 = cljs.core.async.muxch_STAR_(inst_35967);
var state_35993__$1 = state_35993;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35993__$1,(22),inst_35970,inst_35909);
} else {
if((state_val_35994 === (11))){
var inst_35938 = (state_35993[(10)]);
var inst_35922 = (state_35993[(13)]);
var inst_35938__$1 = cljs.core.seq(inst_35922);
var state_35993__$1 = (function (){var statearr_36028 = state_35993;
(statearr_36028[(10)] = inst_35938__$1);

return statearr_36028;
})();
if(inst_35938__$1){
var statearr_36029_37851 = state_35993__$1;
(statearr_36029_37851[(1)] = (13));

} else {
var statearr_36030_37852 = state_35993__$1;
(statearr_36030_37852[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (9))){
var inst_35963 = (state_35993[(2)]);
var state_35993__$1 = state_35993;
var statearr_36032_37854 = state_35993__$1;
(statearr_36032_37854[(2)] = inst_35963);

(statearr_36032_37854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (5))){
var inst_35919 = cljs.core.deref(mults);
var inst_35920 = cljs.core.vals(inst_35919);
var inst_35921 = cljs.core.seq(inst_35920);
var inst_35922 = inst_35921;
var inst_35923 = null;
var inst_35924 = (0);
var inst_35925 = (0);
var state_35993__$1 = (function (){var statearr_36040 = state_35993;
(statearr_36040[(12)] = inst_35923);

(statearr_36040[(13)] = inst_35922);

(statearr_36040[(14)] = inst_35925);

(statearr_36040[(15)] = inst_35924);

return statearr_36040;
})();
var statearr_36041_37859 = state_35993__$1;
(statearr_36041_37859[(2)] = null);

(statearr_36041_37859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (14))){
var state_35993__$1 = state_35993;
var statearr_36046_37863 = state_35993__$1;
(statearr_36046_37863[(2)] = null);

(statearr_36046_37863[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (16))){
var inst_35938 = (state_35993[(10)]);
var inst_35944 = cljs.core.chunk_first(inst_35938);
var inst_35945 = cljs.core.chunk_rest(inst_35938);
var inst_35946 = cljs.core.count(inst_35944);
var inst_35922 = inst_35945;
var inst_35923 = inst_35944;
var inst_35924 = inst_35946;
var inst_35925 = (0);
var state_35993__$1 = (function (){var statearr_36047 = state_35993;
(statearr_36047[(12)] = inst_35923);

(statearr_36047[(13)] = inst_35922);

(statearr_36047[(14)] = inst_35925);

(statearr_36047[(15)] = inst_35924);

return statearr_36047;
})();
var statearr_36049_37869 = state_35993__$1;
(statearr_36049_37869[(2)] = null);

(statearr_36049_37869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (10))){
var inst_35923 = (state_35993[(12)]);
var inst_35922 = (state_35993[(13)]);
var inst_35925 = (state_35993[(14)]);
var inst_35924 = (state_35993[(15)]);
var inst_35930 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35923,inst_35925);
var inst_35932 = cljs.core.async.muxch_STAR_(inst_35930);
var inst_35933 = cljs.core.async.close_BANG_(inst_35932);
var inst_35934 = (inst_35925 + (1));
var tmp36043 = inst_35923;
var tmp36044 = inst_35922;
var tmp36045 = inst_35924;
var inst_35922__$1 = tmp36044;
var inst_35923__$1 = tmp36043;
var inst_35924__$1 = tmp36045;
var inst_35925__$1 = inst_35934;
var state_35993__$1 = (function (){var statearr_36054 = state_35993;
(statearr_36054[(17)] = inst_35933);

(statearr_36054[(12)] = inst_35923__$1);

(statearr_36054[(13)] = inst_35922__$1);

(statearr_36054[(14)] = inst_35925__$1);

(statearr_36054[(15)] = inst_35924__$1);

return statearr_36054;
})();
var statearr_36057_37878 = state_35993__$1;
(statearr_36057_37878[(2)] = null);

(statearr_36057_37878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (18))){
var inst_35955 = (state_35993[(2)]);
var state_35993__$1 = state_35993;
var statearr_36058_37879 = state_35993__$1;
(statearr_36058_37879[(2)] = inst_35955);

(statearr_36058_37879[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35994 === (8))){
var inst_35925 = (state_35993[(14)]);
var inst_35924 = (state_35993[(15)]);
var inst_35927 = (inst_35925 < inst_35924);
var inst_35928 = inst_35927;
var state_35993__$1 = state_35993;
if(cljs.core.truth_(inst_35928)){
var statearr_36060_37884 = state_35993__$1;
(statearr_36060_37884[(1)] = (10));

} else {
var statearr_36061_37885 = state_35993__$1;
(statearr_36061_37885[(1)] = (11));

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
var statearr_36062 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36062[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36062[(1)] = (1));

return statearr_36062;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35993){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35993);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36063){if((e36063 instanceof Object)){
var ex__34210__auto__ = e36063;
var statearr_36064_37890 = state_35993;
(statearr_36064_37890[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36063;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37891 = state_35993;
state_35993 = G__37891;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35993){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36066 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36066[(6)] = c__34273__auto___37791);

return statearr_36066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
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
var G__36072 = arguments.length;
switch (G__36072) {
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
var G__36074 = arguments.length;
switch (G__36074) {
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
var G__36080 = arguments.length;
switch (G__36080) {
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
var c__34273__auto___37911 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36129){
var state_val_36130 = (state_36129[(1)]);
if((state_val_36130 === (7))){
var state_36129__$1 = state_36129;
var statearr_36133_37913 = state_36129__$1;
(statearr_36133_37913[(2)] = null);

(statearr_36133_37913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36130 === (1))){
var state_36129__$1 = state_36129;
var statearr_36134_37916 = state_36129__$1;
(statearr_36134_37916[(2)] = null);

(statearr_36134_37916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36130 === (4))){
var inst_36087 = (state_36129[(7)]);
var inst_36089 = (inst_36087 < cnt);
var state_36129__$1 = state_36129;
if(cljs.core.truth_(inst_36089)){
var statearr_36135_37920 = state_36129__$1;
(statearr_36135_37920[(1)] = (6));

} else {
var statearr_36136_37921 = state_36129__$1;
(statearr_36136_37921[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36130 === (15))){
var inst_36125 = (state_36129[(2)]);
var state_36129__$1 = state_36129;
var statearr_36137_37922 = state_36129__$1;
(statearr_36137_37922[(2)] = inst_36125);

(statearr_36137_37922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36130 === (13))){
var inst_36118 = cljs.core.async.close_BANG_(out);
var state_36129__$1 = state_36129;
var statearr_36139_37929 = state_36129__$1;
(statearr_36139_37929[(2)] = inst_36118);

(statearr_36139_37929[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36130 === (6))){
var state_36129__$1 = state_36129;
var statearr_36141_37930 = state_36129__$1;
(statearr_36141_37930[(2)] = null);

(statearr_36141_37930[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36130 === (3))){
var inst_36127 = (state_36129[(2)]);
var state_36129__$1 = state_36129;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36129__$1,inst_36127);
} else {
if((state_val_36130 === (12))){
var inst_36113 = (state_36129[(8)]);
var inst_36113__$1 = (state_36129[(2)]);
var inst_36114 = cljs.core.some(cljs.core.nil_QMARK_,inst_36113__$1);
var state_36129__$1 = (function (){var statearr_36160 = state_36129;
(statearr_36160[(8)] = inst_36113__$1);

return statearr_36160;
})();
if(cljs.core.truth_(inst_36114)){
var statearr_36162_37938 = state_36129__$1;
(statearr_36162_37938[(1)] = (13));

} else {
var statearr_36163_37939 = state_36129__$1;
(statearr_36163_37939[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36130 === (2))){
var inst_36085 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36087 = (0);
var state_36129__$1 = (function (){var statearr_36164 = state_36129;
(statearr_36164[(7)] = inst_36087);

(statearr_36164[(9)] = inst_36085);

return statearr_36164;
})();
var statearr_36165_37944 = state_36129__$1;
(statearr_36165_37944[(2)] = null);

(statearr_36165_37944[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36130 === (11))){
var inst_36087 = (state_36129[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36129,(10),Object,null,(9));
var inst_36100 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36087) : chs__$1.call(null,inst_36087));
var inst_36101 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36087) : done.call(null,inst_36087));
var inst_36102 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36100,inst_36101);
var state_36129__$1 = state_36129;
var statearr_36166_37946 = state_36129__$1;
(statearr_36166_37946[(2)] = inst_36102);


cljs.core.async.impl.ioc_helpers.process_exception(state_36129__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36130 === (9))){
var inst_36087 = (state_36129[(7)]);
var inst_36104 = (state_36129[(2)]);
var inst_36105 = (inst_36087 + (1));
var inst_36087__$1 = inst_36105;
var state_36129__$1 = (function (){var statearr_36167 = state_36129;
(statearr_36167[(7)] = inst_36087__$1);

(statearr_36167[(10)] = inst_36104);

return statearr_36167;
})();
var statearr_36168_37951 = state_36129__$1;
(statearr_36168_37951[(2)] = null);

(statearr_36168_37951[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36130 === (5))){
var inst_36111 = (state_36129[(2)]);
var state_36129__$1 = (function (){var statearr_36169 = state_36129;
(statearr_36169[(11)] = inst_36111);

return statearr_36169;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36129__$1,(12),dchan);
} else {
if((state_val_36130 === (14))){
var inst_36113 = (state_36129[(8)]);
var inst_36120 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36113);
var state_36129__$1 = state_36129;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36129__$1,(16),out,inst_36120);
} else {
if((state_val_36130 === (16))){
var inst_36122 = (state_36129[(2)]);
var state_36129__$1 = (function (){var statearr_36170 = state_36129;
(statearr_36170[(12)] = inst_36122);

return statearr_36170;
})();
var statearr_36172_37953 = state_36129__$1;
(statearr_36172_37953[(2)] = null);

(statearr_36172_37953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36130 === (10))){
var inst_36094 = (state_36129[(2)]);
var inst_36095 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36129__$1 = (function (){var statearr_36173 = state_36129;
(statearr_36173[(13)] = inst_36094);

return statearr_36173;
})();
var statearr_36175_37958 = state_36129__$1;
(statearr_36175_37958[(2)] = inst_36095);


cljs.core.async.impl.ioc_helpers.process_exception(state_36129__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36130 === (8))){
var inst_36109 = (state_36129[(2)]);
var state_36129__$1 = state_36129;
var statearr_36176_37959 = state_36129__$1;
(statearr_36176_37959[(2)] = inst_36109);

(statearr_36176_37959[(1)] = (5));


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
var statearr_36179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36179[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36179[(1)] = (1));

return statearr_36179;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36129){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36129);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36181){if((e36181 instanceof Object)){
var ex__34210__auto__ = e36181;
var statearr_36182_37963 = state_36129;
(statearr_36182_37963[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36181;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37966 = state_36129;
state_36129 = G__37966;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36129){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36183 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36183[(6)] = c__34273__auto___37911);

return statearr_36183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
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
var G__36202 = arguments.length;
switch (G__36202) {
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
var c__34273__auto___37971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36241){
var state_val_36242 = (state_36241[(1)]);
if((state_val_36242 === (7))){
var inst_36217 = (state_36241[(7)]);
var inst_36218 = (state_36241[(8)]);
var inst_36217__$1 = (state_36241[(2)]);
var inst_36218__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36217__$1,(0),null);
var inst_36219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36217__$1,(1),null);
var inst_36220 = (inst_36218__$1 == null);
var state_36241__$1 = (function (){var statearr_36243 = state_36241;
(statearr_36243[(7)] = inst_36217__$1);

(statearr_36243[(8)] = inst_36218__$1);

(statearr_36243[(9)] = inst_36219);

return statearr_36243;
})();
if(cljs.core.truth_(inst_36220)){
var statearr_36246_37977 = state_36241__$1;
(statearr_36246_37977[(1)] = (8));

} else {
var statearr_36247_37978 = state_36241__$1;
(statearr_36247_37978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36242 === (1))){
var inst_36206 = cljs.core.vec(chs);
var inst_36207 = inst_36206;
var state_36241__$1 = (function (){var statearr_36248 = state_36241;
(statearr_36248[(10)] = inst_36207);

return statearr_36248;
})();
var statearr_36249_37979 = state_36241__$1;
(statearr_36249_37979[(2)] = null);

(statearr_36249_37979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36242 === (4))){
var inst_36207 = (state_36241[(10)]);
var state_36241__$1 = state_36241;
return cljs.core.async.ioc_alts_BANG_(state_36241__$1,(7),inst_36207);
} else {
if((state_val_36242 === (6))){
var inst_36236 = (state_36241[(2)]);
var state_36241__$1 = state_36241;
var statearr_36252_37980 = state_36241__$1;
(statearr_36252_37980[(2)] = inst_36236);

(statearr_36252_37980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36242 === (3))){
var inst_36238 = (state_36241[(2)]);
var state_36241__$1 = state_36241;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36241__$1,inst_36238);
} else {
if((state_val_36242 === (2))){
var inst_36207 = (state_36241[(10)]);
var inst_36210 = cljs.core.count(inst_36207);
var inst_36211 = (inst_36210 > (0));
var state_36241__$1 = state_36241;
if(cljs.core.truth_(inst_36211)){
var statearr_36256_37984 = state_36241__$1;
(statearr_36256_37984[(1)] = (4));

} else {
var statearr_36257_37985 = state_36241__$1;
(statearr_36257_37985[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36242 === (11))){
var inst_36207 = (state_36241[(10)]);
var inst_36229 = (state_36241[(2)]);
var tmp36254 = inst_36207;
var inst_36207__$1 = tmp36254;
var state_36241__$1 = (function (){var statearr_36259 = state_36241;
(statearr_36259[(11)] = inst_36229);

(statearr_36259[(10)] = inst_36207__$1);

return statearr_36259;
})();
var statearr_36264_37986 = state_36241__$1;
(statearr_36264_37986[(2)] = null);

(statearr_36264_37986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36242 === (9))){
var inst_36218 = (state_36241[(8)]);
var state_36241__$1 = state_36241;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36241__$1,(11),out,inst_36218);
} else {
if((state_val_36242 === (5))){
var inst_36234 = cljs.core.async.close_BANG_(out);
var state_36241__$1 = state_36241;
var statearr_36270_37991 = state_36241__$1;
(statearr_36270_37991[(2)] = inst_36234);

(statearr_36270_37991[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36242 === (10))){
var inst_36232 = (state_36241[(2)]);
var state_36241__$1 = state_36241;
var statearr_36272_37992 = state_36241__$1;
(statearr_36272_37992[(2)] = inst_36232);

(statearr_36272_37992[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36242 === (8))){
var inst_36217 = (state_36241[(7)]);
var inst_36218 = (state_36241[(8)]);
var inst_36207 = (state_36241[(10)]);
var inst_36219 = (state_36241[(9)]);
var inst_36223 = (function (){var cs = inst_36207;
var vec__36213 = inst_36217;
var v = inst_36218;
var c = inst_36219;
return (function (p1__36186_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36186_SHARP_);
});
})();
var inst_36225 = cljs.core.filterv(inst_36223,inst_36207);
var inst_36207__$1 = inst_36225;
var state_36241__$1 = (function (){var statearr_36275 = state_36241;
(statearr_36275[(10)] = inst_36207__$1);

return statearr_36275;
})();
var statearr_36276_37993 = state_36241__$1;
(statearr_36276_37993[(2)] = null);

(statearr_36276_37993[(1)] = (2));


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
var statearr_36278 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36278[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36278[(1)] = (1));

return statearr_36278;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36241){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36241);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36280){if((e36280 instanceof Object)){
var ex__34210__auto__ = e36280;
var statearr_36281_37995 = state_36241;
(statearr_36281_37995[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36280;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37996 = state_36241;
state_36241 = G__37996;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36282 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36282[(6)] = c__34273__auto___37971);

return statearr_36282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
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
var G__36288 = arguments.length;
switch (G__36288) {
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
var c__34273__auto___38002 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36321){
var state_val_36322 = (state_36321[(1)]);
if((state_val_36322 === (7))){
var inst_36302 = (state_36321[(7)]);
var inst_36302__$1 = (state_36321[(2)]);
var inst_36303 = (inst_36302__$1 == null);
var inst_36304 = cljs.core.not(inst_36303);
var state_36321__$1 = (function (){var statearr_36326 = state_36321;
(statearr_36326[(7)] = inst_36302__$1);

return statearr_36326;
})();
if(inst_36304){
var statearr_36327_38003 = state_36321__$1;
(statearr_36327_38003[(1)] = (8));

} else {
var statearr_36328_38004 = state_36321__$1;
(statearr_36328_38004[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36322 === (1))){
var inst_36296 = (0);
var state_36321__$1 = (function (){var statearr_36329 = state_36321;
(statearr_36329[(8)] = inst_36296);

return statearr_36329;
})();
var statearr_36330_38005 = state_36321__$1;
(statearr_36330_38005[(2)] = null);

(statearr_36330_38005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36322 === (4))){
var state_36321__$1 = state_36321;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36321__$1,(7),ch);
} else {
if((state_val_36322 === (6))){
var inst_36315 = (state_36321[(2)]);
var state_36321__$1 = state_36321;
var statearr_36332_38006 = state_36321__$1;
(statearr_36332_38006[(2)] = inst_36315);

(statearr_36332_38006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36322 === (3))){
var inst_36317 = (state_36321[(2)]);
var inst_36319 = cljs.core.async.close_BANG_(out);
var state_36321__$1 = (function (){var statearr_36334 = state_36321;
(statearr_36334[(9)] = inst_36317);

return statearr_36334;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36321__$1,inst_36319);
} else {
if((state_val_36322 === (2))){
var inst_36296 = (state_36321[(8)]);
var inst_36299 = (inst_36296 < n);
var state_36321__$1 = state_36321;
if(cljs.core.truth_(inst_36299)){
var statearr_36335_38011 = state_36321__$1;
(statearr_36335_38011[(1)] = (4));

} else {
var statearr_36337_38012 = state_36321__$1;
(statearr_36337_38012[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36322 === (11))){
var inst_36296 = (state_36321[(8)]);
var inst_36307 = (state_36321[(2)]);
var inst_36308 = (inst_36296 + (1));
var inst_36296__$1 = inst_36308;
var state_36321__$1 = (function (){var statearr_36338 = state_36321;
(statearr_36338[(10)] = inst_36307);

(statearr_36338[(8)] = inst_36296__$1);

return statearr_36338;
})();
var statearr_36339_38014 = state_36321__$1;
(statearr_36339_38014[(2)] = null);

(statearr_36339_38014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36322 === (9))){
var state_36321__$1 = state_36321;
var statearr_36343_38017 = state_36321__$1;
(statearr_36343_38017[(2)] = null);

(statearr_36343_38017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36322 === (5))){
var state_36321__$1 = state_36321;
var statearr_36344_38018 = state_36321__$1;
(statearr_36344_38018[(2)] = null);

(statearr_36344_38018[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36322 === (10))){
var inst_36312 = (state_36321[(2)]);
var state_36321__$1 = state_36321;
var statearr_36345_38019 = state_36321__$1;
(statearr_36345_38019[(2)] = inst_36312);

(statearr_36345_38019[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36322 === (8))){
var inst_36302 = (state_36321[(7)]);
var state_36321__$1 = state_36321;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36321__$1,(11),out,inst_36302);
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
var statearr_36348 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36348[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36348[(1)] = (1));

return statearr_36348;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36321){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36321);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36349){if((e36349 instanceof Object)){
var ex__34210__auto__ = e36349;
var statearr_36351_38020 = state_36321;
(statearr_36351_38020[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36349;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38024 = state_36321;
state_36321 = G__38024;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36321){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36353 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36353[(6)] = c__34273__auto___38002);

return statearr_36353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36364 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36364 = (function (f,ch,meta36365){
this.f = f;
this.ch = ch;
this.meta36365 = meta36365;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36366,meta36365__$1){
var self__ = this;
var _36366__$1 = this;
return (new cljs.core.async.t_cljs$core$async36364(self__.f,self__.ch,meta36365__$1));
}));

(cljs.core.async.t_cljs$core$async36364.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36366){
var self__ = this;
var _36366__$1 = this;
return self__.meta36365;
}));

(cljs.core.async.t_cljs$core$async36364.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36364.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36364.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36364.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36364.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36371 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36371 = (function (f,ch,meta36365,_,fn1,meta36372){
this.f = f;
this.ch = ch;
this.meta36365 = meta36365;
this._ = _;
this.fn1 = fn1;
this.meta36372 = meta36372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36373,meta36372__$1){
var self__ = this;
var _36373__$1 = this;
return (new cljs.core.async.t_cljs$core$async36371(self__.f,self__.ch,self__.meta36365,self__._,self__.fn1,meta36372__$1));
}));

(cljs.core.async.t_cljs$core$async36371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36373){
var self__ = this;
var _36373__$1 = this;
return self__.meta36372;
}));

(cljs.core.async.t_cljs$core$async36371.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36371.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36371.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36371.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36360_SHARP_){
var G__36378 = (((p1__36360_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36360_SHARP_) : self__.f.call(null,p1__36360_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36378) : f1.call(null,G__36378));
});
}));

(cljs.core.async.t_cljs$core$async36371.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36365","meta36365",-994124455,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36364","cljs.core.async/t_cljs$core$async36364",601842289,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36372","meta36372",-447091795,null)], null);
}));

(cljs.core.async.t_cljs$core$async36371.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36371.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36371");

(cljs.core.async.t_cljs$core$async36371.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36371");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36371.
 */
cljs.core.async.__GT_t_cljs$core$async36371 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36371(f__$1,ch__$1,meta36365__$1,___$2,fn1__$1,meta36372){
return (new cljs.core.async.t_cljs$core$async36371(f__$1,ch__$1,meta36365__$1,___$2,fn1__$1,meta36372));
});

}

return (new cljs.core.async.t_cljs$core$async36371(self__.f,self__.ch,self__.meta36365,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36390 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36390) : self__.f.call(null,G__36390));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36364.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36364.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36364.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36365","meta36365",-994124455,null)], null);
}));

(cljs.core.async.t_cljs$core$async36364.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36364.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36364");

(cljs.core.async.t_cljs$core$async36364.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36364");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36364.
 */
cljs.core.async.__GT_t_cljs$core$async36364 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36364(f__$1,ch__$1,meta36365){
return (new cljs.core.async.t_cljs$core$async36364(f__$1,ch__$1,meta36365));
});

}

return (new cljs.core.async.t_cljs$core$async36364(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36401 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36401 = (function (f,ch,meta36402){
this.f = f;
this.ch = ch;
this.meta36402 = meta36402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36403,meta36402__$1){
var self__ = this;
var _36403__$1 = this;
return (new cljs.core.async.t_cljs$core$async36401(self__.f,self__.ch,meta36402__$1));
}));

(cljs.core.async.t_cljs$core$async36401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36403){
var self__ = this;
var _36403__$1 = this;
return self__.meta36402;
}));

(cljs.core.async.t_cljs$core$async36401.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36401.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36401.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36401.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36401.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36401.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36401.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36402","meta36402",-21403131,null)], null);
}));

(cljs.core.async.t_cljs$core$async36401.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36401.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36401");

(cljs.core.async.t_cljs$core$async36401.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36401");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36401.
 */
cljs.core.async.__GT_t_cljs$core$async36401 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36401(f__$1,ch__$1,meta36402){
return (new cljs.core.async.t_cljs$core$async36401(f__$1,ch__$1,meta36402));
});

}

return (new cljs.core.async.t_cljs$core$async36401(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36421 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36421 = (function (p,ch,meta36422){
this.p = p;
this.ch = ch;
this.meta36422 = meta36422;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36423,meta36422__$1){
var self__ = this;
var _36423__$1 = this;
return (new cljs.core.async.t_cljs$core$async36421(self__.p,self__.ch,meta36422__$1));
}));

(cljs.core.async.t_cljs$core$async36421.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36423){
var self__ = this;
var _36423__$1 = this;
return self__.meta36422;
}));

(cljs.core.async.t_cljs$core$async36421.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36421.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36421.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36421.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36421.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36421.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36421.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36421.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36422","meta36422",445520694,null)], null);
}));

(cljs.core.async.t_cljs$core$async36421.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36421.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36421");

(cljs.core.async.t_cljs$core$async36421.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36421");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36421.
 */
cljs.core.async.__GT_t_cljs$core$async36421 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36421(p__$1,ch__$1,meta36422){
return (new cljs.core.async.t_cljs$core$async36421(p__$1,ch__$1,meta36422));
});

}

return (new cljs.core.async.t_cljs$core$async36421(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36435 = arguments.length;
switch (G__36435) {
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
var c__34273__auto___38049 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36461){
var state_val_36462 = (state_36461[(1)]);
if((state_val_36462 === (7))){
var inst_36457 = (state_36461[(2)]);
var state_36461__$1 = state_36461;
var statearr_36464_38050 = state_36461__$1;
(statearr_36464_38050[(2)] = inst_36457);

(statearr_36464_38050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36462 === (1))){
var state_36461__$1 = state_36461;
var statearr_36466_38052 = state_36461__$1;
(statearr_36466_38052[(2)] = null);

(statearr_36466_38052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36462 === (4))){
var inst_36440 = (state_36461[(7)]);
var inst_36440__$1 = (state_36461[(2)]);
var inst_36441 = (inst_36440__$1 == null);
var state_36461__$1 = (function (){var statearr_36467 = state_36461;
(statearr_36467[(7)] = inst_36440__$1);

return statearr_36467;
})();
if(cljs.core.truth_(inst_36441)){
var statearr_36468_38055 = state_36461__$1;
(statearr_36468_38055[(1)] = (5));

} else {
var statearr_36469_38056 = state_36461__$1;
(statearr_36469_38056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36462 === (6))){
var inst_36440 = (state_36461[(7)]);
var inst_36445 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36440) : p.call(null,inst_36440));
var state_36461__$1 = state_36461;
if(cljs.core.truth_(inst_36445)){
var statearr_36471_38057 = state_36461__$1;
(statearr_36471_38057[(1)] = (8));

} else {
var statearr_36472_38058 = state_36461__$1;
(statearr_36472_38058[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36462 === (3))){
var inst_36459 = (state_36461[(2)]);
var state_36461__$1 = state_36461;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36461__$1,inst_36459);
} else {
if((state_val_36462 === (2))){
var state_36461__$1 = state_36461;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36461__$1,(4),ch);
} else {
if((state_val_36462 === (11))){
var inst_36450 = (state_36461[(2)]);
var state_36461__$1 = state_36461;
var statearr_36474_38060 = state_36461__$1;
(statearr_36474_38060[(2)] = inst_36450);

(statearr_36474_38060[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36462 === (9))){
var state_36461__$1 = state_36461;
var statearr_36475_38063 = state_36461__$1;
(statearr_36475_38063[(2)] = null);

(statearr_36475_38063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36462 === (5))){
var inst_36443 = cljs.core.async.close_BANG_(out);
var state_36461__$1 = state_36461;
var statearr_36479_38064 = state_36461__$1;
(statearr_36479_38064[(2)] = inst_36443);

(statearr_36479_38064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36462 === (10))){
var inst_36453 = (state_36461[(2)]);
var state_36461__$1 = (function (){var statearr_36481 = state_36461;
(statearr_36481[(8)] = inst_36453);

return statearr_36481;
})();
var statearr_36482_38065 = state_36461__$1;
(statearr_36482_38065[(2)] = null);

(statearr_36482_38065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36462 === (8))){
var inst_36440 = (state_36461[(7)]);
var state_36461__$1 = state_36461;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36461__$1,(11),out,inst_36440);
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
var statearr_36484 = [null,null,null,null,null,null,null,null,null];
(statearr_36484[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36484[(1)] = (1));

return statearr_36484;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36461){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36461);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36485){if((e36485 instanceof Object)){
var ex__34210__auto__ = e36485;
var statearr_36486_38069 = state_36461;
(statearr_36486_38069[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36485;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38070 = state_36461;
state_36461 = G__38070;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36461){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36488 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36488[(6)] = c__34273__auto___38049);

return statearr_36488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36491 = arguments.length;
switch (G__36491) {
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
var c__34273__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36558){
var state_val_36559 = (state_36558[(1)]);
if((state_val_36559 === (7))){
var inst_36553 = (state_36558[(2)]);
var state_36558__$1 = state_36558;
var statearr_36563_38075 = state_36558__$1;
(statearr_36563_38075[(2)] = inst_36553);

(statearr_36563_38075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (20))){
var inst_36523 = (state_36558[(7)]);
var inst_36534 = (state_36558[(2)]);
var inst_36535 = cljs.core.next(inst_36523);
var inst_36508 = inst_36535;
var inst_36509 = null;
var inst_36510 = (0);
var inst_36511 = (0);
var state_36558__$1 = (function (){var statearr_36564 = state_36558;
(statearr_36564[(8)] = inst_36509);

(statearr_36564[(9)] = inst_36510);

(statearr_36564[(10)] = inst_36511);

(statearr_36564[(11)] = inst_36534);

(statearr_36564[(12)] = inst_36508);

return statearr_36564;
})();
var statearr_36565_38077 = state_36558__$1;
(statearr_36565_38077[(2)] = null);

(statearr_36565_38077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (1))){
var state_36558__$1 = state_36558;
var statearr_36567_38079 = state_36558__$1;
(statearr_36567_38079[(2)] = null);

(statearr_36567_38079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (4))){
var inst_36497 = (state_36558[(13)]);
var inst_36497__$1 = (state_36558[(2)]);
var inst_36498 = (inst_36497__$1 == null);
var state_36558__$1 = (function (){var statearr_36568 = state_36558;
(statearr_36568[(13)] = inst_36497__$1);

return statearr_36568;
})();
if(cljs.core.truth_(inst_36498)){
var statearr_36569_38081 = state_36558__$1;
(statearr_36569_38081[(1)] = (5));

} else {
var statearr_36571_38082 = state_36558__$1;
(statearr_36571_38082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (15))){
var state_36558__$1 = state_36558;
var statearr_36575_38083 = state_36558__$1;
(statearr_36575_38083[(2)] = null);

(statearr_36575_38083[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (21))){
var state_36558__$1 = state_36558;
var statearr_36576_38084 = state_36558__$1;
(statearr_36576_38084[(2)] = null);

(statearr_36576_38084[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (13))){
var inst_36509 = (state_36558[(8)]);
var inst_36510 = (state_36558[(9)]);
var inst_36511 = (state_36558[(10)]);
var inst_36508 = (state_36558[(12)]);
var inst_36518 = (state_36558[(2)]);
var inst_36519 = (inst_36511 + (1));
var tmp36572 = inst_36509;
var tmp36573 = inst_36510;
var tmp36574 = inst_36508;
var inst_36508__$1 = tmp36574;
var inst_36509__$1 = tmp36572;
var inst_36510__$1 = tmp36573;
var inst_36511__$1 = inst_36519;
var state_36558__$1 = (function (){var statearr_36578 = state_36558;
(statearr_36578[(8)] = inst_36509__$1);

(statearr_36578[(9)] = inst_36510__$1);

(statearr_36578[(10)] = inst_36511__$1);

(statearr_36578[(12)] = inst_36508__$1);

(statearr_36578[(14)] = inst_36518);

return statearr_36578;
})();
var statearr_36579_38088 = state_36558__$1;
(statearr_36579_38088[(2)] = null);

(statearr_36579_38088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (22))){
var state_36558__$1 = state_36558;
var statearr_36581_38089 = state_36558__$1;
(statearr_36581_38089[(2)] = null);

(statearr_36581_38089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (6))){
var inst_36497 = (state_36558[(13)]);
var inst_36506 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36497) : f.call(null,inst_36497));
var inst_36507 = cljs.core.seq(inst_36506);
var inst_36508 = inst_36507;
var inst_36509 = null;
var inst_36510 = (0);
var inst_36511 = (0);
var state_36558__$1 = (function (){var statearr_36583 = state_36558;
(statearr_36583[(8)] = inst_36509);

(statearr_36583[(9)] = inst_36510);

(statearr_36583[(10)] = inst_36511);

(statearr_36583[(12)] = inst_36508);

return statearr_36583;
})();
var statearr_36584_38091 = state_36558__$1;
(statearr_36584_38091[(2)] = null);

(statearr_36584_38091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (17))){
var inst_36523 = (state_36558[(7)]);
var inst_36527 = cljs.core.chunk_first(inst_36523);
var inst_36528 = cljs.core.chunk_rest(inst_36523);
var inst_36529 = cljs.core.count(inst_36527);
var inst_36508 = inst_36528;
var inst_36509 = inst_36527;
var inst_36510 = inst_36529;
var inst_36511 = (0);
var state_36558__$1 = (function (){var statearr_36586 = state_36558;
(statearr_36586[(8)] = inst_36509);

(statearr_36586[(9)] = inst_36510);

(statearr_36586[(10)] = inst_36511);

(statearr_36586[(12)] = inst_36508);

return statearr_36586;
})();
var statearr_36587_38094 = state_36558__$1;
(statearr_36587_38094[(2)] = null);

(statearr_36587_38094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (3))){
var inst_36555 = (state_36558[(2)]);
var state_36558__$1 = state_36558;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36558__$1,inst_36555);
} else {
if((state_val_36559 === (12))){
var inst_36543 = (state_36558[(2)]);
var state_36558__$1 = state_36558;
var statearr_36588_38095 = state_36558__$1;
(statearr_36588_38095[(2)] = inst_36543);

(statearr_36588_38095[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (2))){
var state_36558__$1 = state_36558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36558__$1,(4),in$);
} else {
if((state_val_36559 === (23))){
var inst_36551 = (state_36558[(2)]);
var state_36558__$1 = state_36558;
var statearr_36590_38097 = state_36558__$1;
(statearr_36590_38097[(2)] = inst_36551);

(statearr_36590_38097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (19))){
var inst_36538 = (state_36558[(2)]);
var state_36558__$1 = state_36558;
var statearr_36591_38100 = state_36558__$1;
(statearr_36591_38100[(2)] = inst_36538);

(statearr_36591_38100[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (11))){
var inst_36508 = (state_36558[(12)]);
var inst_36523 = (state_36558[(7)]);
var inst_36523__$1 = cljs.core.seq(inst_36508);
var state_36558__$1 = (function (){var statearr_36593 = state_36558;
(statearr_36593[(7)] = inst_36523__$1);

return statearr_36593;
})();
if(inst_36523__$1){
var statearr_36594_38101 = state_36558__$1;
(statearr_36594_38101[(1)] = (14));

} else {
var statearr_36596_38102 = state_36558__$1;
(statearr_36596_38102[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (9))){
var inst_36545 = (state_36558[(2)]);
var inst_36546 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36558__$1 = (function (){var statearr_36598 = state_36558;
(statearr_36598[(15)] = inst_36545);

return statearr_36598;
})();
if(cljs.core.truth_(inst_36546)){
var statearr_36599_38104 = state_36558__$1;
(statearr_36599_38104[(1)] = (21));

} else {
var statearr_36600_38105 = state_36558__$1;
(statearr_36600_38105[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (5))){
var inst_36500 = cljs.core.async.close_BANG_(out);
var state_36558__$1 = state_36558;
var statearr_36602_38107 = state_36558__$1;
(statearr_36602_38107[(2)] = inst_36500);

(statearr_36602_38107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (14))){
var inst_36523 = (state_36558[(7)]);
var inst_36525 = cljs.core.chunked_seq_QMARK_(inst_36523);
var state_36558__$1 = state_36558;
if(inst_36525){
var statearr_36604_38109 = state_36558__$1;
(statearr_36604_38109[(1)] = (17));

} else {
var statearr_36605_38110 = state_36558__$1;
(statearr_36605_38110[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (16))){
var inst_36541 = (state_36558[(2)]);
var state_36558__$1 = state_36558;
var statearr_36607_38111 = state_36558__$1;
(statearr_36607_38111[(2)] = inst_36541);

(statearr_36607_38111[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (10))){
var inst_36509 = (state_36558[(8)]);
var inst_36511 = (state_36558[(10)]);
var inst_36516 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36509,inst_36511);
var state_36558__$1 = state_36558;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36558__$1,(13),out,inst_36516);
} else {
if((state_val_36559 === (18))){
var inst_36523 = (state_36558[(7)]);
var inst_36532 = cljs.core.first(inst_36523);
var state_36558__$1 = state_36558;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36558__$1,(20),out,inst_36532);
} else {
if((state_val_36559 === (8))){
var inst_36510 = (state_36558[(9)]);
var inst_36511 = (state_36558[(10)]);
var inst_36513 = (inst_36511 < inst_36510);
var inst_36514 = inst_36513;
var state_36558__$1 = state_36558;
if(cljs.core.truth_(inst_36514)){
var statearr_36610_38115 = state_36558__$1;
(statearr_36610_38115[(1)] = (10));

} else {
var statearr_36611_38116 = state_36558__$1;
(statearr_36611_38116[(1)] = (11));

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
var statearr_36613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36613[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36613[(1)] = (1));

return statearr_36613;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36558){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36558);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36614){if((e36614 instanceof Object)){
var ex__34210__auto__ = e36614;
var statearr_36615_38118 = state_36558;
(statearr_36615_38118[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36614;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38120 = state_36558;
state_36558 = G__38120;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36558){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36617 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36617[(6)] = c__34273__auto__);

return statearr_36617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));

return c__34273__auto__;
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
var G__36628 = arguments.length;
switch (G__36628) {
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
var c__34273__auto___38130 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36654){
var state_val_36655 = (state_36654[(1)]);
if((state_val_36655 === (7))){
var inst_36649 = (state_36654[(2)]);
var state_36654__$1 = state_36654;
var statearr_36657_38132 = state_36654__$1;
(statearr_36657_38132[(2)] = inst_36649);

(statearr_36657_38132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (1))){
var inst_36631 = null;
var state_36654__$1 = (function (){var statearr_36658 = state_36654;
(statearr_36658[(7)] = inst_36631);

return statearr_36658;
})();
var statearr_36660_38133 = state_36654__$1;
(statearr_36660_38133[(2)] = null);

(statearr_36660_38133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (4))){
var inst_36634 = (state_36654[(8)]);
var inst_36634__$1 = (state_36654[(2)]);
var inst_36635 = (inst_36634__$1 == null);
var inst_36636 = cljs.core.not(inst_36635);
var state_36654__$1 = (function (){var statearr_36661 = state_36654;
(statearr_36661[(8)] = inst_36634__$1);

return statearr_36661;
})();
if(inst_36636){
var statearr_36662_38135 = state_36654__$1;
(statearr_36662_38135[(1)] = (5));

} else {
var statearr_36663_38136 = state_36654__$1;
(statearr_36663_38136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (6))){
var state_36654__$1 = state_36654;
var statearr_36665_38138 = state_36654__$1;
(statearr_36665_38138[(2)] = null);

(statearr_36665_38138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (3))){
var inst_36651 = (state_36654[(2)]);
var inst_36652 = cljs.core.async.close_BANG_(out);
var state_36654__$1 = (function (){var statearr_36666 = state_36654;
(statearr_36666[(9)] = inst_36651);

return statearr_36666;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36654__$1,inst_36652);
} else {
if((state_val_36655 === (2))){
var state_36654__$1 = state_36654;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36654__$1,(4),ch);
} else {
if((state_val_36655 === (11))){
var inst_36634 = (state_36654[(8)]);
var inst_36643 = (state_36654[(2)]);
var inst_36631 = inst_36634;
var state_36654__$1 = (function (){var statearr_36668 = state_36654;
(statearr_36668[(10)] = inst_36643);

(statearr_36668[(7)] = inst_36631);

return statearr_36668;
})();
var statearr_36669_38141 = state_36654__$1;
(statearr_36669_38141[(2)] = null);

(statearr_36669_38141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (9))){
var inst_36634 = (state_36654[(8)]);
var state_36654__$1 = state_36654;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36654__$1,(11),out,inst_36634);
} else {
if((state_val_36655 === (5))){
var inst_36631 = (state_36654[(7)]);
var inst_36634 = (state_36654[(8)]);
var inst_36638 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36634,inst_36631);
var state_36654__$1 = state_36654;
if(inst_36638){
var statearr_36672_38144 = state_36654__$1;
(statearr_36672_38144[(1)] = (8));

} else {
var statearr_36673_38145 = state_36654__$1;
(statearr_36673_38145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (10))){
var inst_36646 = (state_36654[(2)]);
var state_36654__$1 = state_36654;
var statearr_36674_38146 = state_36654__$1;
(statearr_36674_38146[(2)] = inst_36646);

(statearr_36674_38146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (8))){
var inst_36631 = (state_36654[(7)]);
var tmp36670 = inst_36631;
var inst_36631__$1 = tmp36670;
var state_36654__$1 = (function (){var statearr_36676 = state_36654;
(statearr_36676[(7)] = inst_36631__$1);

return statearr_36676;
})();
var statearr_36677_38147 = state_36654__$1;
(statearr_36677_38147[(2)] = null);

(statearr_36677_38147[(1)] = (2));


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
var statearr_36678 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36678[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36678[(1)] = (1));

return statearr_36678;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36654){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36654);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36680){if((e36680 instanceof Object)){
var ex__34210__auto__ = e36680;
var statearr_36681_38151 = state_36654;
(statearr_36681_38151[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36680;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38152 = state_36654;
state_36654 = G__38152;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36654){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36683 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36683[(6)] = c__34273__auto___38130);

return statearr_36683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
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
var c__34273__auto___38157 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36727){
var state_val_36728 = (state_36727[(1)]);
if((state_val_36728 === (7))){
var inst_36722 = (state_36727[(2)]);
var state_36727__$1 = state_36727;
var statearr_36730_38158 = state_36727__$1;
(statearr_36730_38158[(2)] = inst_36722);

(statearr_36730_38158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36728 === (1))){
var inst_36689 = (new Array(n));
var inst_36690 = inst_36689;
var inst_36691 = (0);
var state_36727__$1 = (function (){var statearr_36731 = state_36727;
(statearr_36731[(7)] = inst_36691);

(statearr_36731[(8)] = inst_36690);

return statearr_36731;
})();
var statearr_36732_38160 = state_36727__$1;
(statearr_36732_38160[(2)] = null);

(statearr_36732_38160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36728 === (4))){
var inst_36694 = (state_36727[(9)]);
var inst_36694__$1 = (state_36727[(2)]);
var inst_36695 = (inst_36694__$1 == null);
var inst_36696 = cljs.core.not(inst_36695);
var state_36727__$1 = (function (){var statearr_36734 = state_36727;
(statearr_36734[(9)] = inst_36694__$1);

return statearr_36734;
})();
if(inst_36696){
var statearr_36735_38162 = state_36727__$1;
(statearr_36735_38162[(1)] = (5));

} else {
var statearr_36736_38164 = state_36727__$1;
(statearr_36736_38164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36728 === (15))){
var inst_36716 = (state_36727[(2)]);
var state_36727__$1 = state_36727;
var statearr_36738_38165 = state_36727__$1;
(statearr_36738_38165[(2)] = inst_36716);

(statearr_36738_38165[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36728 === (13))){
var state_36727__$1 = state_36727;
var statearr_36739_38166 = state_36727__$1;
(statearr_36739_38166[(2)] = null);

(statearr_36739_38166[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36728 === (6))){
var inst_36691 = (state_36727[(7)]);
var inst_36712 = (inst_36691 > (0));
var state_36727__$1 = state_36727;
if(cljs.core.truth_(inst_36712)){
var statearr_36740_38167 = state_36727__$1;
(statearr_36740_38167[(1)] = (12));

} else {
var statearr_36741_38168 = state_36727__$1;
(statearr_36741_38168[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36728 === (3))){
var inst_36724 = (state_36727[(2)]);
var state_36727__$1 = state_36727;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36727__$1,inst_36724);
} else {
if((state_val_36728 === (12))){
var inst_36690 = (state_36727[(8)]);
var inst_36714 = cljs.core.vec(inst_36690);
var state_36727__$1 = state_36727;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36727__$1,(15),out,inst_36714);
} else {
if((state_val_36728 === (2))){
var state_36727__$1 = state_36727;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36727__$1,(4),ch);
} else {
if((state_val_36728 === (11))){
var inst_36706 = (state_36727[(2)]);
var inst_36707 = (new Array(n));
var inst_36690 = inst_36707;
var inst_36691 = (0);
var state_36727__$1 = (function (){var statearr_36744 = state_36727;
(statearr_36744[(7)] = inst_36691);

(statearr_36744[(10)] = inst_36706);

(statearr_36744[(8)] = inst_36690);

return statearr_36744;
})();
var statearr_36745_38171 = state_36727__$1;
(statearr_36745_38171[(2)] = null);

(statearr_36745_38171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36728 === (9))){
var inst_36690 = (state_36727[(8)]);
var inst_36704 = cljs.core.vec(inst_36690);
var state_36727__$1 = state_36727;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36727__$1,(11),out,inst_36704);
} else {
if((state_val_36728 === (5))){
var inst_36691 = (state_36727[(7)]);
var inst_36694 = (state_36727[(9)]);
var inst_36699 = (state_36727[(11)]);
var inst_36690 = (state_36727[(8)]);
var inst_36698 = (inst_36690[inst_36691] = inst_36694);
var inst_36699__$1 = (inst_36691 + (1));
var inst_36700 = (inst_36699__$1 < n);
var state_36727__$1 = (function (){var statearr_36747 = state_36727;
(statearr_36747[(12)] = inst_36698);

(statearr_36747[(11)] = inst_36699__$1);

return statearr_36747;
})();
if(cljs.core.truth_(inst_36700)){
var statearr_36748_38173 = state_36727__$1;
(statearr_36748_38173[(1)] = (8));

} else {
var statearr_36749_38174 = state_36727__$1;
(statearr_36749_38174[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36728 === (14))){
var inst_36719 = (state_36727[(2)]);
var inst_36720 = cljs.core.async.close_BANG_(out);
var state_36727__$1 = (function (){var statearr_36752 = state_36727;
(statearr_36752[(13)] = inst_36719);

return statearr_36752;
})();
var statearr_36753_38175 = state_36727__$1;
(statearr_36753_38175[(2)] = inst_36720);

(statearr_36753_38175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36728 === (10))){
var inst_36710 = (state_36727[(2)]);
var state_36727__$1 = state_36727;
var statearr_36754_38176 = state_36727__$1;
(statearr_36754_38176[(2)] = inst_36710);

(statearr_36754_38176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36728 === (8))){
var inst_36699 = (state_36727[(11)]);
var inst_36690 = (state_36727[(8)]);
var tmp36750 = inst_36690;
var inst_36690__$1 = tmp36750;
var inst_36691 = inst_36699;
var state_36727__$1 = (function (){var statearr_36756 = state_36727;
(statearr_36756[(7)] = inst_36691);

(statearr_36756[(8)] = inst_36690__$1);

return statearr_36756;
})();
var statearr_36757_38178 = state_36727__$1;
(statearr_36757_38178[(2)] = null);

(statearr_36757_38178[(1)] = (2));


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
var statearr_36758 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36758[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36758[(1)] = (1));

return statearr_36758;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36727){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36727);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36764){if((e36764 instanceof Object)){
var ex__34210__auto__ = e36764;
var statearr_36765_38184 = state_36727;
(statearr_36765_38184[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36764;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38185 = state_36727;
state_36727 = G__38185;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36727){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36767 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36767[(6)] = c__34273__auto___38157);

return statearr_36767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36771 = arguments.length;
switch (G__36771) {
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
var c__34273__auto___38190 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36815){
var state_val_36816 = (state_36815[(1)]);
if((state_val_36816 === (7))){
var inst_36811 = (state_36815[(2)]);
var state_36815__$1 = state_36815;
var statearr_36818_38194 = state_36815__$1;
(statearr_36818_38194[(2)] = inst_36811);

(statearr_36818_38194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36816 === (1))){
var inst_36773 = [];
var inst_36774 = inst_36773;
var inst_36775 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36815__$1 = (function (){var statearr_36820 = state_36815;
(statearr_36820[(7)] = inst_36774);

(statearr_36820[(8)] = inst_36775);

return statearr_36820;
})();
var statearr_36821_38196 = state_36815__$1;
(statearr_36821_38196[(2)] = null);

(statearr_36821_38196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36816 === (4))){
var inst_36778 = (state_36815[(9)]);
var inst_36778__$1 = (state_36815[(2)]);
var inst_36779 = (inst_36778__$1 == null);
var inst_36780 = cljs.core.not(inst_36779);
var state_36815__$1 = (function (){var statearr_36823 = state_36815;
(statearr_36823[(9)] = inst_36778__$1);

return statearr_36823;
})();
if(inst_36780){
var statearr_36824_38199 = state_36815__$1;
(statearr_36824_38199[(1)] = (5));

} else {
var statearr_36825_38200 = state_36815__$1;
(statearr_36825_38200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36816 === (15))){
var inst_36805 = (state_36815[(2)]);
var state_36815__$1 = state_36815;
var statearr_36826_38201 = state_36815__$1;
(statearr_36826_38201[(2)] = inst_36805);

(statearr_36826_38201[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36816 === (13))){
var state_36815__$1 = state_36815;
var statearr_36828_38202 = state_36815__$1;
(statearr_36828_38202[(2)] = null);

(statearr_36828_38202[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36816 === (6))){
var inst_36774 = (state_36815[(7)]);
var inst_36800 = inst_36774.length;
var inst_36801 = (inst_36800 > (0));
var state_36815__$1 = state_36815;
if(cljs.core.truth_(inst_36801)){
var statearr_36829_38203 = state_36815__$1;
(statearr_36829_38203[(1)] = (12));

} else {
var statearr_36830_38205 = state_36815__$1;
(statearr_36830_38205[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36816 === (3))){
var inst_36813 = (state_36815[(2)]);
var state_36815__$1 = state_36815;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36815__$1,inst_36813);
} else {
if((state_val_36816 === (12))){
var inst_36774 = (state_36815[(7)]);
var inst_36803 = cljs.core.vec(inst_36774);
var state_36815__$1 = state_36815;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36815__$1,(15),out,inst_36803);
} else {
if((state_val_36816 === (2))){
var state_36815__$1 = state_36815;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36815__$1,(4),ch);
} else {
if((state_val_36816 === (11))){
var inst_36782 = (state_36815[(10)]);
var inst_36778 = (state_36815[(9)]);
var inst_36793 = (state_36815[(2)]);
var inst_36794 = [];
var inst_36795 = inst_36794.push(inst_36778);
var inst_36774 = inst_36794;
var inst_36775 = inst_36782;
var state_36815__$1 = (function (){var statearr_36833 = state_36815;
(statearr_36833[(7)] = inst_36774);

(statearr_36833[(11)] = inst_36795);

(statearr_36833[(8)] = inst_36775);

(statearr_36833[(12)] = inst_36793);

return statearr_36833;
})();
var statearr_36834_38208 = state_36815__$1;
(statearr_36834_38208[(2)] = null);

(statearr_36834_38208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36816 === (9))){
var inst_36774 = (state_36815[(7)]);
var inst_36791 = cljs.core.vec(inst_36774);
var state_36815__$1 = state_36815;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36815__$1,(11),out,inst_36791);
} else {
if((state_val_36816 === (5))){
var inst_36782 = (state_36815[(10)]);
var inst_36778 = (state_36815[(9)]);
var inst_36775 = (state_36815[(8)]);
var inst_36782__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36778) : f.call(null,inst_36778));
var inst_36784 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36782__$1,inst_36775);
var inst_36785 = cljs.core.keyword_identical_QMARK_(inst_36775,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36786 = ((inst_36784) || (inst_36785));
var state_36815__$1 = (function (){var statearr_36836 = state_36815;
(statearr_36836[(10)] = inst_36782__$1);

return statearr_36836;
})();
if(cljs.core.truth_(inst_36786)){
var statearr_36837_38211 = state_36815__$1;
(statearr_36837_38211[(1)] = (8));

} else {
var statearr_36838_38212 = state_36815__$1;
(statearr_36838_38212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36816 === (14))){
var inst_36808 = (state_36815[(2)]);
var inst_36809 = cljs.core.async.close_BANG_(out);
var state_36815__$1 = (function (){var statearr_36841 = state_36815;
(statearr_36841[(13)] = inst_36808);

return statearr_36841;
})();
var statearr_36842_38214 = state_36815__$1;
(statearr_36842_38214[(2)] = inst_36809);

(statearr_36842_38214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36816 === (10))){
var inst_36798 = (state_36815[(2)]);
var state_36815__$1 = state_36815;
var statearr_36844_38215 = state_36815__$1;
(statearr_36844_38215[(2)] = inst_36798);

(statearr_36844_38215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36816 === (8))){
var inst_36782 = (state_36815[(10)]);
var inst_36774 = (state_36815[(7)]);
var inst_36778 = (state_36815[(9)]);
var inst_36788 = inst_36774.push(inst_36778);
var tmp36840 = inst_36774;
var inst_36774__$1 = tmp36840;
var inst_36775 = inst_36782;
var state_36815__$1 = (function (){var statearr_36845 = state_36815;
(statearr_36845[(7)] = inst_36774__$1);

(statearr_36845[(14)] = inst_36788);

(statearr_36845[(8)] = inst_36775);

return statearr_36845;
})();
var statearr_36846_38219 = state_36815__$1;
(statearr_36846_38219[(2)] = null);

(statearr_36846_38219[(1)] = (2));


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
var statearr_36848 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36848[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36848[(1)] = (1));

return statearr_36848;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36815){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36815);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36849){if((e36849 instanceof Object)){
var ex__34210__auto__ = e36849;
var statearr_36851_38220 = state_36815;
(statearr_36851_38220[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36849;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38222 = state_36815;
state_36815 = G__38222;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36815){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36852 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36852[(6)] = c__34273__auto___38190);

return statearr_36852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
