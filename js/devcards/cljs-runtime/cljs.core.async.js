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
var val_36844 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36844) : fn1.call(null,val_36844));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36844) : fn1.call(null,val_36844));
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
var n__4666__auto___36849 = n;
var x_36850 = (0);
while(true){
if((x_36850 < n__4666__auto___36849)){
(a[x_36850] = x_36850);

var G__36851 = (x_36850 + (1));
x_36850 = G__36851;
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
var i__4790__auto___36863 = (0);
while(true){
if((i__4790__auto___36863 < len__4789__auto___36862)){
args__4795__auto__.push((arguments[i__4790__auto___36863]));

var G__36864 = (i__4790__auto___36863 + (1));
i__4790__auto___36863 = G__36864;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34377){
var map__34378 = p__34377;
var map__34378__$1 = (((((!((map__34378 == null))))?(((((map__34378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34378):map__34378);
var opts = map__34378__$1;
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
var G__34384 = arguments.length;
switch (G__34384) {
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
var c__34273__auto___36870 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34423){
var state_val_34424 = (state_34423[(1)]);
if((state_val_34424 === (7))){
var inst_34416 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34425_36871 = state_34423__$1;
(statearr_34425_36871[(2)] = inst_34416);

(statearr_34425_36871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (1))){
var state_34423__$1 = state_34423;
var statearr_34426_36873 = state_34423__$1;
(statearr_34426_36873[(2)] = null);

(statearr_34426_36873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (4))){
var inst_34390 = (state_34423[(7)]);
var inst_34390__$1 = (state_34423[(2)]);
var inst_34391 = (inst_34390__$1 == null);
var state_34423__$1 = (function (){var statearr_34427 = state_34423;
(statearr_34427[(7)] = inst_34390__$1);

return statearr_34427;
})();
if(cljs.core.truth_(inst_34391)){
var statearr_34428_36874 = state_34423__$1;
(statearr_34428_36874[(1)] = (5));

} else {
var statearr_34429_36875 = state_34423__$1;
(statearr_34429_36875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (13))){
var state_34423__$1 = state_34423;
var statearr_34430_36877 = state_34423__$1;
(statearr_34430_36877[(2)] = null);

(statearr_34430_36877[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (6))){
var inst_34390 = (state_34423[(7)]);
var state_34423__$1 = state_34423;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34423__$1,(11),to,inst_34390);
} else {
if((state_val_34424 === (3))){
var inst_34418 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34423__$1,inst_34418);
} else {
if((state_val_34424 === (12))){
var state_34423__$1 = state_34423;
var statearr_34431_36878 = state_34423__$1;
(statearr_34431_36878[(2)] = null);

(statearr_34431_36878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (2))){
var state_34423__$1 = state_34423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34423__$1,(4),from);
} else {
if((state_val_34424 === (11))){
var inst_34406 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
if(cljs.core.truth_(inst_34406)){
var statearr_34432_36880 = state_34423__$1;
(statearr_34432_36880[(1)] = (12));

} else {
var statearr_34433_36881 = state_34423__$1;
(statearr_34433_36881[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (9))){
var state_34423__$1 = state_34423;
var statearr_34434_36882 = state_34423__$1;
(statearr_34434_36882[(2)] = null);

(statearr_34434_36882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (5))){
var state_34423__$1 = state_34423;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34435_36884 = state_34423__$1;
(statearr_34435_36884[(1)] = (8));

} else {
var statearr_34436_36885 = state_34423__$1;
(statearr_34436_36885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (14))){
var inst_34414 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34437_36886 = state_34423__$1;
(statearr_34437_36886[(2)] = inst_34414);

(statearr_34437_36886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (10))){
var inst_34400 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34438_36887 = state_34423__$1;
(statearr_34438_36887[(2)] = inst_34400);

(statearr_34438_36887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (8))){
var inst_34394 = cljs.core.async.close_BANG_(to);
var state_34423__$1 = state_34423;
var statearr_34439_36889 = state_34423__$1;
(statearr_34439_36889[(2)] = inst_34394);

(statearr_34439_36889[(1)] = (10));


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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34423){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34423);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34441){if((e34441 instanceof Object)){
var ex__34210__auto__ = e34441;
var statearr_34442_36891 = state_34423;
(statearr_34442_36891[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36892 = state_34423;
state_34423 = G__36892;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34423){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34443 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34443[(6)] = c__34273__auto___36870);

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
var c__34273__auto___36895 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34456){
var state_val_34457 = (state_34456[(1)]);
if((state_val_34457 === (1))){
var state_34456__$1 = state_34456;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34456__$1,(2),res,v);
} else {
if((state_val_34457 === (2))){
var inst_34453 = (state_34456[(2)]);
var inst_34454 = cljs.core.async.close_BANG_(res);
var state_34456__$1 = (function (){var statearr_34458 = state_34456;
(statearr_34458[(7)] = inst_34453);

return statearr_34458;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34456__$1,inst_34454);
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
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34456){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34456);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34461){if((e34461 instanceof Object)){
var ex__34210__auto__ = e34461;
var statearr_34462_36898 = state_34456;
(statearr_34462_36898[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34461;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36899 = state_34456;
state_34456 = G__36899;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34456){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34463 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34463[(6)] = c__34273__auto___36895);

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
var n__4666__auto___36902 = n;
var __36903 = (0);
while(true){
if((__36903 < n__4666__auto___36902)){
var G__34469_36904 = type;
var G__34469_36905__$1 = (((G__34469_36904 instanceof cljs.core.Keyword))?G__34469_36904.fqn:null);
switch (G__34469_36905__$1) {
case "compute":
var c__34273__auto___36907 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36903,c__34273__auto___36907,G__34469_36904,G__34469_36905__$1,n__4666__auto___36902,jobs,results,process,async){
return (function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = ((function (__36903,c__34273__auto___36907,G__34469_36904,G__34469_36905__$1,n__4666__auto___36902,jobs,results,process,async){
return (function (state_34483){
var state_val_34484 = (state_34483[(1)]);
if((state_val_34484 === (1))){
var state_34483__$1 = state_34483;
var statearr_34486_36909 = state_34483__$1;
(statearr_34486_36909[(2)] = null);

(statearr_34486_36909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34484 === (2))){
var state_34483__$1 = state_34483;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34483__$1,(4),jobs);
} else {
if((state_val_34484 === (3))){
var inst_34481 = (state_34483[(2)]);
var state_34483__$1 = state_34483;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34483__$1,inst_34481);
} else {
if((state_val_34484 === (4))){
var inst_34473 = (state_34483[(2)]);
var inst_34474 = process(inst_34473);
var state_34483__$1 = state_34483;
if(cljs.core.truth_(inst_34474)){
var statearr_34487_36911 = state_34483__$1;
(statearr_34487_36911[(1)] = (5));

} else {
var statearr_34488_36912 = state_34483__$1;
(statearr_34488_36912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34484 === (5))){
var state_34483__$1 = state_34483;
var statearr_34491_36913 = state_34483__$1;
(statearr_34491_36913[(2)] = null);

(statearr_34491_36913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34484 === (6))){
var state_34483__$1 = state_34483;
var statearr_34492_36914 = state_34483__$1;
(statearr_34492_36914[(2)] = null);

(statearr_34492_36914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34484 === (7))){
var inst_34479 = (state_34483[(2)]);
var state_34483__$1 = state_34483;
var statearr_34498_36916 = state_34483__$1;
(statearr_34498_36916[(2)] = inst_34479);

(statearr_34498_36916[(1)] = (3));


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
});})(__36903,c__34273__auto___36907,G__34469_36904,G__34469_36905__$1,n__4666__auto___36902,jobs,results,process,async))
;
return ((function (__36903,switch__34206__auto__,c__34273__auto___36907,G__34469_36904,G__34469_36905__$1,n__4666__auto___36902,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34499 = [null,null,null,null,null,null,null];
(statearr_34499[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34499[(1)] = (1));

return statearr_34499;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34483){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34483);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34500){if((e34500 instanceof Object)){
var ex__34210__auto__ = e34500;
var statearr_34501_36918 = state_34483;
(statearr_34501_36918[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34500;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36919 = state_34483;
state_34483 = G__36919;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34483){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36903,switch__34206__auto__,c__34273__auto___36907,G__34469_36904,G__34469_36905__$1,n__4666__auto___36902,jobs,results,process,async))
})();
var state__34275__auto__ = (function (){var statearr_34502 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34502[(6)] = c__34273__auto___36907);

return statearr_34502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
});})(__36903,c__34273__auto___36907,G__34469_36904,G__34469_36905__$1,n__4666__auto___36902,jobs,results,process,async))
);


break;
case "async":
var c__34273__auto___36921 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36903,c__34273__auto___36921,G__34469_36904,G__34469_36905__$1,n__4666__auto___36902,jobs,results,process,async){
return (function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = ((function (__36903,c__34273__auto___36921,G__34469_36904,G__34469_36905__$1,n__4666__auto___36902,jobs,results,process,async){
return (function (state_34515){
var state_val_34516 = (state_34515[(1)]);
if((state_val_34516 === (1))){
var state_34515__$1 = state_34515;
var statearr_34518_36923 = state_34515__$1;
(statearr_34518_36923[(2)] = null);

(statearr_34518_36923[(1)] = (2));


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
var statearr_34519_36925 = state_34515__$1;
(statearr_34519_36925[(1)] = (5));

} else {
var statearr_34520_36926 = state_34515__$1;
(statearr_34520_36926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (5))){
var state_34515__$1 = state_34515;
var statearr_34521_36927 = state_34515__$1;
(statearr_34521_36927[(2)] = null);

(statearr_34521_36927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (6))){
var state_34515__$1 = state_34515;
var statearr_34522_36929 = state_34515__$1;
(statearr_34522_36929[(2)] = null);

(statearr_34522_36929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (7))){
var inst_34511 = (state_34515[(2)]);
var state_34515__$1 = state_34515;
var statearr_34527_36930 = state_34515__$1;
(statearr_34527_36930[(2)] = inst_34511);

(statearr_34527_36930[(1)] = (3));


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
});})(__36903,c__34273__auto___36921,G__34469_36904,G__34469_36905__$1,n__4666__auto___36902,jobs,results,process,async))
;
return ((function (__36903,switch__34206__auto__,c__34273__auto___36921,G__34469_36904,G__34469_36905__$1,n__4666__auto___36902,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34528 = [null,null,null,null,null,null,null];
(statearr_34528[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34528[(1)] = (1));

return statearr_34528;
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
}catch (e34532){if((e34532 instanceof Object)){
var ex__34210__auto__ = e34532;
var statearr_34533_36932 = state_34515;
(statearr_34533_36932[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34532;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36934 = state_34515;
state_34515 = G__36934;
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
;})(__36903,switch__34206__auto__,c__34273__auto___36921,G__34469_36904,G__34469_36905__$1,n__4666__auto___36902,jobs,results,process,async))
})();
var state__34275__auto__ = (function (){var statearr_34534 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34534[(6)] = c__34273__auto___36921);

return statearr_34534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
});})(__36903,c__34273__auto___36921,G__34469_36904,G__34469_36905__$1,n__4666__auto___36902,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34469_36905__$1)].join('')));

}

var G__36935 = (__36903 + (1));
__36903 = G__36935;
continue;
} else {
}
break;
}

var c__34273__auto___36936 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34556){
var state_val_34557 = (state_34556[(1)]);
if((state_val_34557 === (7))){
var inst_34552 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
var statearr_34561_36938 = state_34556__$1;
(statearr_34561_36938[(2)] = inst_34552);

(statearr_34561_36938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (1))){
var state_34556__$1 = state_34556;
var statearr_34562_36939 = state_34556__$1;
(statearr_34562_36939[(2)] = null);

(statearr_34562_36939[(1)] = (2));


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
var statearr_34564_36941 = state_34556__$1;
(statearr_34564_36941[(1)] = (5));

} else {
var statearr_34565_36942 = state_34556__$1;
(statearr_34565_36942[(1)] = (6));

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
var statearr_34568_36945 = state_34556__$1;
(statearr_34568_36945[(2)] = null);

(statearr_34568_36945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (5))){
var inst_34540 = cljs.core.async.close_BANG_(jobs);
var state_34556__$1 = state_34556;
var statearr_34569_36946 = state_34556__$1;
(statearr_34569_36946[(2)] = inst_34540);

(statearr_34569_36946[(1)] = (7));


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
var statearr_34573_36949 = state_34556;
(statearr_34573_36949[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36950 = state_34556;
state_34556 = G__36950;
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
(statearr_34574[(6)] = c__34273__auto___36936);

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
var statearr_34614_36953 = state_34612__$1;
(statearr_34614_36953[(2)] = inst_34608);

(statearr_34614_36953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var state_34612__$1 = state_34612;
var statearr_34615_36954 = state_34612__$1;
(statearr_34615_36954[(2)] = null);

(statearr_34615_36954[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34616_36955 = state_34612__$1;
(statearr_34616_36955[(2)] = null);

(statearr_34616_36955[(1)] = (2));


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
var statearr_34618_36957 = state_34612__$1;
(statearr_34618_36957[(1)] = (5));

} else {
var statearr_34619_36958 = state_34612__$1;
(statearr_34619_36958[(1)] = (6));

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
var statearr_34620_36960 = state_34612__$1;
(statearr_34620_36960[(2)] = inst_34603);

(statearr_34620_36960[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_36961 = state_34612__$1;
(statearr_34622_36961[(2)] = null);

(statearr_34622_36961[(1)] = (2));


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
var statearr_34623_36963 = state_34612__$1;
(statearr_34623_36963[(1)] = (19));

} else {
var statearr_34624_36964 = state_34612__$1;
(statearr_34624_36964[(1)] = (20));

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
var statearr_34625_36966 = state_34612__$1;
(statearr_34625_36966[(2)] = null);

(statearr_34625_36966[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34587 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34626 = state_34612;
(statearr_34626[(10)] = inst_34587);

return statearr_34626;
})();
var statearr_34627_36968 = state_34612__$1;
(statearr_34627_36968[(2)] = null);

(statearr_34627_36968[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34628_36969 = state_34612__$1;
(statearr_34628_36969[(2)] = null);

(statearr_34628_36969[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_36971 = state_34612__$1;
(statearr_34629_36971[(1)] = (8));

} else {
var statearr_34630_36972 = state_34612__$1;
(statearr_34630_36972[(1)] = (9));

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
var statearr_34632_36973 = state_34612__$1;
(statearr_34632_36973[(1)] = (15));

} else {
var statearr_34633_36975 = state_34612__$1;
(statearr_34633_36975[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34634_36976 = state_34612__$1;
(statearr_34634_36976[(2)] = false);

(statearr_34634_36976[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34635_36977 = state_34612__$1;
(statearr_34635_36977[(2)] = inst_34584);

(statearr_34635_36977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34636_36979 = state_34612__$1;
(statearr_34636_36979[(2)] = inst_34595);

(statearr_34636_36979[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34581 = cljs.core.async.close_BANG_(to);
var state_34612__$1 = state_34612;
var statearr_34637_36980 = state_34612__$1;
(statearr_34637_36980[(2)] = inst_34581);

(statearr_34637_36980[(1)] = (10));


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
var statearr_34640_36981 = state_34612;
(statearr_34640_36981[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36982 = state_34612;
state_34612 = G__36982;
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
var G__34650 = arguments.length;
switch (G__34650) {
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
var c__34273__auto___36998 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34679){
var state_val_34681 = (state_34679[(1)]);
if((state_val_34681 === (7))){
var inst_34675 = (state_34679[(2)]);
var state_34679__$1 = state_34679;
var statearr_34683_37000 = state_34679__$1;
(statearr_34683_37000[(2)] = inst_34675);

(statearr_34683_37000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34681 === (1))){
var state_34679__$1 = state_34679;
var statearr_34685_37001 = state_34679__$1;
(statearr_34685_37001[(2)] = null);

(statearr_34685_37001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34681 === (4))){
var inst_34656 = (state_34679[(7)]);
var inst_34656__$1 = (state_34679[(2)]);
var inst_34657 = (inst_34656__$1 == null);
var state_34679__$1 = (function (){var statearr_34686 = state_34679;
(statearr_34686[(7)] = inst_34656__$1);

return statearr_34686;
})();
if(cljs.core.truth_(inst_34657)){
var statearr_34687_37002 = state_34679__$1;
(statearr_34687_37002[(1)] = (5));

} else {
var statearr_34688_37003 = state_34679__$1;
(statearr_34688_37003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34681 === (13))){
var state_34679__$1 = state_34679;
var statearr_34689_37004 = state_34679__$1;
(statearr_34689_37004[(2)] = null);

(statearr_34689_37004[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34681 === (6))){
var inst_34656 = (state_34679[(7)]);
var inst_34662 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34656) : p.call(null,inst_34656));
var state_34679__$1 = state_34679;
if(cljs.core.truth_(inst_34662)){
var statearr_34692_37005 = state_34679__$1;
(statearr_34692_37005[(1)] = (9));

} else {
var statearr_34693_37006 = state_34679__$1;
(statearr_34693_37006[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34681 === (3))){
var inst_34677 = (state_34679[(2)]);
var state_34679__$1 = state_34679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34679__$1,inst_34677);
} else {
if((state_val_34681 === (12))){
var state_34679__$1 = state_34679;
var statearr_34694_37007 = state_34679__$1;
(statearr_34694_37007[(2)] = null);

(statearr_34694_37007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34681 === (2))){
var state_34679__$1 = state_34679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34679__$1,(4),ch);
} else {
if((state_val_34681 === (11))){
var inst_34656 = (state_34679[(7)]);
var inst_34666 = (state_34679[(2)]);
var state_34679__$1 = state_34679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34679__$1,(8),inst_34666,inst_34656);
} else {
if((state_val_34681 === (9))){
var state_34679__$1 = state_34679;
var statearr_34695_37008 = state_34679__$1;
(statearr_34695_37008[(2)] = tc);

(statearr_34695_37008[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34681 === (5))){
var inst_34659 = cljs.core.async.close_BANG_(tc);
var inst_34660 = cljs.core.async.close_BANG_(fc);
var state_34679__$1 = (function (){var statearr_34696 = state_34679;
(statearr_34696[(8)] = inst_34659);

return statearr_34696;
})();
var statearr_34697_37009 = state_34679__$1;
(statearr_34697_37009[(2)] = inst_34660);

(statearr_34697_37009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34681 === (14))){
var inst_34673 = (state_34679[(2)]);
var state_34679__$1 = state_34679;
var statearr_34698_37010 = state_34679__$1;
(statearr_34698_37010[(2)] = inst_34673);

(statearr_34698_37010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34681 === (10))){
var state_34679__$1 = state_34679;
var statearr_34700_37011 = state_34679__$1;
(statearr_34700_37011[(2)] = fc);

(statearr_34700_37011[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34681 === (8))){
var inst_34668 = (state_34679[(2)]);
var state_34679__$1 = state_34679;
if(cljs.core.truth_(inst_34668)){
var statearr_34701_37012 = state_34679__$1;
(statearr_34701_37012[(1)] = (12));

} else {
var statearr_34702_37013 = state_34679__$1;
(statearr_34702_37013[(1)] = (13));

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
var statearr_34704 = [null,null,null,null,null,null,null,null,null];
(statearr_34704[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34704[(1)] = (1));

return statearr_34704;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34679){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34679);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34705){if((e34705 instanceof Object)){
var ex__34210__auto__ = e34705;
var statearr_34706_37014 = state_34679;
(statearr_34706_37014[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34705;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37015 = state_34679;
state_34679 = G__37015;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34712 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34712[(6)] = c__34273__auto___36998);

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
var statearr_34736_37022 = state_34734__$1;
(statearr_34736_37022[(2)] = inst_34730);

(statearr_34736_37022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (1))){
var inst_34713 = init;
var state_34734__$1 = (function (){var statearr_34737 = state_34734;
(statearr_34737[(7)] = inst_34713);

return statearr_34737;
})();
var statearr_34738_37023 = state_34734__$1;
(statearr_34738_37023[(2)] = null);

(statearr_34738_37023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (4))){
var inst_34716 = (state_34734[(8)]);
var inst_34716__$1 = (state_34734[(2)]);
var inst_34718 = (inst_34716__$1 == null);
var state_34734__$1 = (function (){var statearr_34742 = state_34734;
(statearr_34742[(8)] = inst_34716__$1);

return statearr_34742;
})();
if(cljs.core.truth_(inst_34718)){
var statearr_34743_37024 = state_34734__$1;
(statearr_34743_37024[(1)] = (5));

} else {
var statearr_34744_37025 = state_34734__$1;
(statearr_34744_37025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (6))){
var inst_34721 = (state_34734[(9)]);
var inst_34713 = (state_34734[(7)]);
var inst_34716 = (state_34734[(8)]);
var inst_34721__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34713,inst_34716) : f.call(null,inst_34713,inst_34716));
var inst_34722 = cljs.core.reduced_QMARK_(inst_34721__$1);
var state_34734__$1 = (function (){var statearr_34748 = state_34734;
(statearr_34748[(9)] = inst_34721__$1);

return statearr_34748;
})();
if(inst_34722){
var statearr_34749_37026 = state_34734__$1;
(statearr_34749_37026[(1)] = (8));

} else {
var statearr_34750_37027 = state_34734__$1;
(statearr_34750_37027[(1)] = (9));

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
var inst_34713 = inst_34721;
var state_34734__$1 = (function (){var statearr_34751 = state_34734;
(statearr_34751[(7)] = inst_34713);

return statearr_34751;
})();
var statearr_34752_37030 = state_34734__$1;
(statearr_34752_37030[(2)] = null);

(statearr_34752_37030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (5))){
var inst_34713 = (state_34734[(7)]);
var state_34734__$1 = state_34734;
var statearr_34753_37032 = state_34734__$1;
(statearr_34753_37032[(2)] = inst_34713);

(statearr_34753_37032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (10))){
var inst_34728 = (state_34734[(2)]);
var state_34734__$1 = state_34734;
var statearr_34757_37035 = state_34734__$1;
(statearr_34757_37035[(2)] = inst_34728);

(statearr_34757_37035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (8))){
var inst_34721 = (state_34734[(9)]);
var inst_34724 = cljs.core.deref(inst_34721);
var state_34734__$1 = state_34734;
var statearr_34758_37037 = state_34734__$1;
(statearr_34758_37037[(2)] = inst_34724);

(statearr_34758_37037[(1)] = (10));


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
var statearr_34761_37038 = state_34734;
(statearr_34761_37038[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37039 = state_34734;
state_34734 = G__37039;
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
var statearr_34772_37053 = state_34768;
(statearr_34772_37053[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34771;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37054 = state_34768;
state_34768 = G__37054;
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
var statearr_34811_37069 = state_34807__$1;
(statearr_34811_37069[(2)] = inst_34789);

(statearr_34811_37069[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (1))){
var inst_34782 = cljs.core.seq(coll);
var inst_34783 = inst_34782;
var state_34807__$1 = (function (){var statearr_34813 = state_34807;
(statearr_34813[(7)] = inst_34783);

return statearr_34813;
})();
var statearr_34816_37072 = state_34807__$1;
(statearr_34816_37072[(2)] = null);

(statearr_34816_37072[(1)] = (2));


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
var statearr_34818_37078 = state_34807__$1;
(statearr_34818_37078[(2)] = inst_34801);

(statearr_34818_37078[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (6))){
var inst_34792 = (state_34807[(2)]);
var state_34807__$1 = state_34807;
if(cljs.core.truth_(inst_34792)){
var statearr_34819_37081 = state_34807__$1;
(statearr_34819_37081[(1)] = (8));

} else {
var statearr_34820_37082 = state_34807__$1;
(statearr_34820_37082[(1)] = (9));

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
var statearr_34821_37087 = state_34807__$1;
(statearr_34821_37087[(2)] = null);

(statearr_34821_37087[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (2))){
var inst_34783 = (state_34807[(7)]);
var state_34807__$1 = state_34807;
if(cljs.core.truth_(inst_34783)){
var statearr_34822_37088 = state_34807__$1;
(statearr_34822_37088[(1)] = (4));

} else {
var statearr_34823_37089 = state_34807__$1;
(statearr_34823_37089[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (11))){
var inst_34798 = cljs.core.async.close_BANG_(ch);
var state_34807__$1 = state_34807;
var statearr_34824_37092 = state_34807__$1;
(statearr_34824_37092[(2)] = inst_34798);

(statearr_34824_37092[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (9))){
var state_34807__$1 = state_34807;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34825_37097 = state_34807__$1;
(statearr_34825_37097[(1)] = (11));

} else {
var statearr_34826_37098 = state_34807__$1;
(statearr_34826_37098[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (5))){
var inst_34783 = (state_34807[(7)]);
var state_34807__$1 = state_34807;
var statearr_34827_37103 = state_34807__$1;
(statearr_34827_37103[(2)] = inst_34783);

(statearr_34827_37103[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (10))){
var inst_34803 = (state_34807[(2)]);
var state_34807__$1 = state_34807;
var statearr_34831_37107 = state_34807__$1;
(statearr_34831_37107[(2)] = inst_34803);

(statearr_34831_37107[(1)] = (3));


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
var statearr_34836_37108 = state_34807__$1;
(statearr_34836_37108[(2)] = null);

(statearr_34836_37108[(1)] = (2));


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
var statearr_34839_37113 = state_34807;
(statearr_34839_37113[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34838;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37115 = state_34807;
state_34807 = G__37115;
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
var c__34273__auto___37148 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34989){
var state_val_34991 = (state_34989[(1)]);
if((state_val_34991 === (7))){
var inst_34980 = (state_34989[(2)]);
var state_34989__$1 = state_34989;
var statearr_34992_37150 = state_34989__$1;
(statearr_34992_37150[(2)] = inst_34980);

(statearr_34992_37150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (20))){
var inst_34877 = (state_34989[(7)]);
var inst_34889 = cljs.core.first(inst_34877);
var inst_34890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34889,(0),null);
var inst_34891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34889,(1),null);
var state_34989__$1 = (function (){var statearr_34993 = state_34989;
(statearr_34993[(8)] = inst_34890);

return statearr_34993;
})();
if(cljs.core.truth_(inst_34891)){
var statearr_34996_37152 = state_34989__$1;
(statearr_34996_37152[(1)] = (22));

} else {
var statearr_34997_37153 = state_34989__$1;
(statearr_34997_37153[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (27))){
var inst_34929 = (state_34989[(9)]);
var inst_34923 = (state_34989[(10)]);
var inst_34846 = (state_34989[(11)]);
var inst_34921 = (state_34989[(12)]);
var inst_34929__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34921,inst_34923);
var inst_34930 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34929__$1,inst_34846,done);
var state_34989__$1 = (function (){var statearr_35001 = state_34989;
(statearr_35001[(9)] = inst_34929__$1);

return statearr_35001;
})();
if(cljs.core.truth_(inst_34930)){
var statearr_35003_37157 = state_34989__$1;
(statearr_35003_37157[(1)] = (30));

} else {
var statearr_35004_37158 = state_34989__$1;
(statearr_35004_37158[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (1))){
var state_34989__$1 = state_34989;
var statearr_35005_37159 = state_34989__$1;
(statearr_35005_37159[(2)] = null);

(statearr_35005_37159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (24))){
var inst_34877 = (state_34989[(7)]);
var inst_34896 = (state_34989[(2)]);
var inst_34897 = cljs.core.next(inst_34877);
var inst_34855 = inst_34897;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34989__$1 = (function (){var statearr_35006 = state_34989;
(statearr_35006[(13)] = inst_34857);

(statearr_35006[(14)] = inst_34856);

(statearr_35006[(15)] = inst_34858);

(statearr_35006[(16)] = inst_34896);

(statearr_35006[(17)] = inst_34855);

return statearr_35006;
})();
var statearr_35007_37167 = state_34989__$1;
(statearr_35007_37167[(2)] = null);

(statearr_35007_37167[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (39))){
var state_34989__$1 = state_34989;
var statearr_35014_37168 = state_34989__$1;
(statearr_35014_37168[(2)] = null);

(statearr_35014_37168[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (4))){
var inst_34846 = (state_34989[(11)]);
var inst_34846__$1 = (state_34989[(2)]);
var inst_34847 = (inst_34846__$1 == null);
var state_34989__$1 = (function (){var statearr_35018 = state_34989;
(statearr_35018[(11)] = inst_34846__$1);

return statearr_35018;
})();
if(cljs.core.truth_(inst_34847)){
var statearr_35019_37170 = state_34989__$1;
(statearr_35019_37170[(1)] = (5));

} else {
var statearr_35020_37172 = state_34989__$1;
(statearr_35020_37172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (15))){
var inst_34857 = (state_34989[(13)]);
var inst_34856 = (state_34989[(14)]);
var inst_34858 = (state_34989[(15)]);
var inst_34855 = (state_34989[(17)]);
var inst_34873 = (state_34989[(2)]);
var inst_34874 = (inst_34858 + (1));
var tmp35008 = inst_34857;
var tmp35009 = inst_34856;
var tmp35010 = inst_34855;
var inst_34855__$1 = tmp35010;
var inst_34856__$1 = tmp35009;
var inst_34857__$1 = tmp35008;
var inst_34858__$1 = inst_34874;
var state_34989__$1 = (function (){var statearr_35021 = state_34989;
(statearr_35021[(18)] = inst_34873);

(statearr_35021[(13)] = inst_34857__$1);

(statearr_35021[(14)] = inst_34856__$1);

(statearr_35021[(15)] = inst_34858__$1);

(statearr_35021[(17)] = inst_34855__$1);

return statearr_35021;
})();
var statearr_35022_37175 = state_34989__$1;
(statearr_35022_37175[(2)] = null);

(statearr_35022_37175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (21))){
var inst_34900 = (state_34989[(2)]);
var state_34989__$1 = state_34989;
var statearr_35026_37176 = state_34989__$1;
(statearr_35026_37176[(2)] = inst_34900);

(statearr_35026_37176[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (31))){
var inst_34929 = (state_34989[(9)]);
var inst_34935 = done(null);
var inst_34937 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34929);
var state_34989__$1 = (function (){var statearr_35027 = state_34989;
(statearr_35027[(19)] = inst_34935);

return statearr_35027;
})();
var statearr_35028_37178 = state_34989__$1;
(statearr_35028_37178[(2)] = inst_34937);

(statearr_35028_37178[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (32))){
var inst_34923 = (state_34989[(10)]);
var inst_34920 = (state_34989[(20)]);
var inst_34921 = (state_34989[(12)]);
var inst_34922 = (state_34989[(21)]);
var inst_34939 = (state_34989[(2)]);
var inst_34940 = (inst_34923 + (1));
var tmp35023 = inst_34920;
var tmp35024 = inst_34921;
var tmp35025 = inst_34922;
var inst_34920__$1 = tmp35023;
var inst_34921__$1 = tmp35024;
var inst_34922__$1 = tmp35025;
var inst_34923__$1 = inst_34940;
var state_34989__$1 = (function (){var statearr_35030 = state_34989;
(statearr_35030[(10)] = inst_34923__$1);

(statearr_35030[(20)] = inst_34920__$1);

(statearr_35030[(12)] = inst_34921__$1);

(statearr_35030[(21)] = inst_34922__$1);

(statearr_35030[(22)] = inst_34939);

return statearr_35030;
})();
var statearr_35034_37186 = state_34989__$1;
(statearr_35034_37186[(2)] = null);

(statearr_35034_37186[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (40))){
var inst_34952 = (state_34989[(23)]);
var inst_34956 = done(null);
var inst_34957 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34952);
var state_34989__$1 = (function (){var statearr_35035 = state_34989;
(statearr_35035[(24)] = inst_34956);

return statearr_35035;
})();
var statearr_35048_37190 = state_34989__$1;
(statearr_35048_37190[(2)] = inst_34957);

(statearr_35048_37190[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (33))){
var inst_34943 = (state_34989[(25)]);
var inst_34945 = cljs.core.chunked_seq_QMARK_(inst_34943);
var state_34989__$1 = state_34989;
if(inst_34945){
var statearr_35052_37191 = state_34989__$1;
(statearr_35052_37191[(1)] = (36));

} else {
var statearr_35053_37192 = state_34989__$1;
(statearr_35053_37192[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (13))){
var inst_34867 = (state_34989[(26)]);
var inst_34870 = cljs.core.async.close_BANG_(inst_34867);
var state_34989__$1 = state_34989;
var statearr_35054_37193 = state_34989__$1;
(statearr_35054_37193[(2)] = inst_34870);

(statearr_35054_37193[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (22))){
var inst_34890 = (state_34989[(8)]);
var inst_34893 = cljs.core.async.close_BANG_(inst_34890);
var state_34989__$1 = state_34989;
var statearr_35055_37194 = state_34989__$1;
(statearr_35055_37194[(2)] = inst_34893);

(statearr_35055_37194[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (36))){
var inst_34943 = (state_34989[(25)]);
var inst_34947 = cljs.core.chunk_first(inst_34943);
var inst_34948 = cljs.core.chunk_rest(inst_34943);
var inst_34949 = cljs.core.count(inst_34947);
var inst_34920 = inst_34948;
var inst_34921 = inst_34947;
var inst_34922 = inst_34949;
var inst_34923 = (0);
var state_34989__$1 = (function (){var statearr_35059 = state_34989;
(statearr_35059[(10)] = inst_34923);

(statearr_35059[(20)] = inst_34920);

(statearr_35059[(12)] = inst_34921);

(statearr_35059[(21)] = inst_34922);

return statearr_35059;
})();
var statearr_35061_37201 = state_34989__$1;
(statearr_35061_37201[(2)] = null);

(statearr_35061_37201[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (41))){
var inst_34943 = (state_34989[(25)]);
var inst_34959 = (state_34989[(2)]);
var inst_34960 = cljs.core.next(inst_34943);
var inst_34920 = inst_34960;
var inst_34921 = null;
var inst_34922 = (0);
var inst_34923 = (0);
var state_34989__$1 = (function (){var statearr_35063 = state_34989;
(statearr_35063[(10)] = inst_34923);

(statearr_35063[(27)] = inst_34959);

(statearr_35063[(20)] = inst_34920);

(statearr_35063[(12)] = inst_34921);

(statearr_35063[(21)] = inst_34922);

return statearr_35063;
})();
var statearr_35068_37206 = state_34989__$1;
(statearr_35068_37206[(2)] = null);

(statearr_35068_37206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (43))){
var state_34989__$1 = state_34989;
var statearr_35073_37207 = state_34989__$1;
(statearr_35073_37207[(2)] = null);

(statearr_35073_37207[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (29))){
var inst_34968 = (state_34989[(2)]);
var state_34989__$1 = state_34989;
var statearr_35079_37208 = state_34989__$1;
(statearr_35079_37208[(2)] = inst_34968);

(statearr_35079_37208[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (44))){
var inst_34977 = (state_34989[(2)]);
var state_34989__$1 = (function (){var statearr_35087 = state_34989;
(statearr_35087[(28)] = inst_34977);

return statearr_35087;
})();
var statearr_35089_37213 = state_34989__$1;
(statearr_35089_37213[(2)] = null);

(statearr_35089_37213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (6))){
var inst_34911 = (state_34989[(29)]);
var inst_34910 = cljs.core.deref(cs);
var inst_34911__$1 = cljs.core.keys(inst_34910);
var inst_34913 = cljs.core.count(inst_34911__$1);
var inst_34914 = cljs.core.reset_BANG_(dctr,inst_34913);
var inst_34919 = cljs.core.seq(inst_34911__$1);
var inst_34920 = inst_34919;
var inst_34921 = null;
var inst_34922 = (0);
var inst_34923 = (0);
var state_34989__$1 = (function (){var statearr_35100 = state_34989;
(statearr_35100[(10)] = inst_34923);

(statearr_35100[(30)] = inst_34914);

(statearr_35100[(20)] = inst_34920);

(statearr_35100[(12)] = inst_34921);

(statearr_35100[(29)] = inst_34911__$1);

(statearr_35100[(21)] = inst_34922);

return statearr_35100;
})();
var statearr_35105_37220 = state_34989__$1;
(statearr_35105_37220[(2)] = null);

(statearr_35105_37220[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (28))){
var inst_34920 = (state_34989[(20)]);
var inst_34943 = (state_34989[(25)]);
var inst_34943__$1 = cljs.core.seq(inst_34920);
var state_34989__$1 = (function (){var statearr_35111 = state_34989;
(statearr_35111[(25)] = inst_34943__$1);

return statearr_35111;
})();
if(inst_34943__$1){
var statearr_35116_37224 = state_34989__$1;
(statearr_35116_37224[(1)] = (33));

} else {
var statearr_35117_37226 = state_34989__$1;
(statearr_35117_37226[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (25))){
var inst_34923 = (state_34989[(10)]);
var inst_34922 = (state_34989[(21)]);
var inst_34925 = (inst_34923 < inst_34922);
var inst_34926 = inst_34925;
var state_34989__$1 = state_34989;
if(cljs.core.truth_(inst_34926)){
var statearr_35124_37229 = state_34989__$1;
(statearr_35124_37229[(1)] = (27));

} else {
var statearr_35126_37232 = state_34989__$1;
(statearr_35126_37232[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (34))){
var state_34989__$1 = state_34989;
var statearr_35147_37234 = state_34989__$1;
(statearr_35147_37234[(2)] = null);

(statearr_35147_37234[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (17))){
var state_34989__$1 = state_34989;
var statearr_35153_37235 = state_34989__$1;
(statearr_35153_37235[(2)] = null);

(statearr_35153_37235[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (3))){
var inst_34982 = (state_34989[(2)]);
var state_34989__$1 = state_34989;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34989__$1,inst_34982);
} else {
if((state_val_34991 === (12))){
var inst_34905 = (state_34989[(2)]);
var state_34989__$1 = state_34989;
var statearr_35155_37239 = state_34989__$1;
(statearr_35155_37239[(2)] = inst_34905);

(statearr_35155_37239[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (2))){
var state_34989__$1 = state_34989;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34989__$1,(4),ch);
} else {
if((state_val_34991 === (23))){
var state_34989__$1 = state_34989;
var statearr_35156_37241 = state_34989__$1;
(statearr_35156_37241[(2)] = null);

(statearr_35156_37241[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (35))){
var inst_34966 = (state_34989[(2)]);
var state_34989__$1 = state_34989;
var statearr_35159_37243 = state_34989__$1;
(statearr_35159_37243[(2)] = inst_34966);

(statearr_35159_37243[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (19))){
var inst_34877 = (state_34989[(7)]);
var inst_34881 = cljs.core.chunk_first(inst_34877);
var inst_34882 = cljs.core.chunk_rest(inst_34877);
var inst_34883 = cljs.core.count(inst_34881);
var inst_34855 = inst_34882;
var inst_34856 = inst_34881;
var inst_34857 = inst_34883;
var inst_34858 = (0);
var state_34989__$1 = (function (){var statearr_35160 = state_34989;
(statearr_35160[(13)] = inst_34857);

(statearr_35160[(14)] = inst_34856);

(statearr_35160[(15)] = inst_34858);

(statearr_35160[(17)] = inst_34855);

return statearr_35160;
})();
var statearr_35163_37256 = state_34989__$1;
(statearr_35163_37256[(2)] = null);

(statearr_35163_37256[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (11))){
var inst_34855 = (state_34989[(17)]);
var inst_34877 = (state_34989[(7)]);
var inst_34877__$1 = cljs.core.seq(inst_34855);
var state_34989__$1 = (function (){var statearr_35184 = state_34989;
(statearr_35184[(7)] = inst_34877__$1);

return statearr_35184;
})();
if(inst_34877__$1){
var statearr_35188_37257 = state_34989__$1;
(statearr_35188_37257[(1)] = (16));

} else {
var statearr_35189_37258 = state_34989__$1;
(statearr_35189_37258[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (9))){
var inst_34907 = (state_34989[(2)]);
var state_34989__$1 = state_34989;
var statearr_35190_37261 = state_34989__$1;
(statearr_35190_37261[(2)] = inst_34907);

(statearr_35190_37261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (5))){
var inst_34853 = cljs.core.deref(cs);
var inst_34854 = cljs.core.seq(inst_34853);
var inst_34855 = inst_34854;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34989__$1 = (function (){var statearr_35193 = state_34989;
(statearr_35193[(13)] = inst_34857);

(statearr_35193[(14)] = inst_34856);

(statearr_35193[(15)] = inst_34858);

(statearr_35193[(17)] = inst_34855);

return statearr_35193;
})();
var statearr_35195_37264 = state_34989__$1;
(statearr_35195_37264[(2)] = null);

(statearr_35195_37264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (14))){
var state_34989__$1 = state_34989;
var statearr_35197_37265 = state_34989__$1;
(statearr_35197_37265[(2)] = null);

(statearr_35197_37265[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (45))){
var inst_34974 = (state_34989[(2)]);
var state_34989__$1 = state_34989;
var statearr_35199_37267 = state_34989__$1;
(statearr_35199_37267[(2)] = inst_34974);

(statearr_35199_37267[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (26))){
var inst_34911 = (state_34989[(29)]);
var inst_34970 = (state_34989[(2)]);
var inst_34971 = cljs.core.seq(inst_34911);
var state_34989__$1 = (function (){var statearr_35207 = state_34989;
(statearr_35207[(31)] = inst_34970);

return statearr_35207;
})();
if(inst_34971){
var statearr_35209_37269 = state_34989__$1;
(statearr_35209_37269[(1)] = (42));

} else {
var statearr_35210_37270 = state_34989__$1;
(statearr_35210_37270[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (16))){
var inst_34877 = (state_34989[(7)]);
var inst_34879 = cljs.core.chunked_seq_QMARK_(inst_34877);
var state_34989__$1 = state_34989;
if(inst_34879){
var statearr_35216_37272 = state_34989__$1;
(statearr_35216_37272[(1)] = (19));

} else {
var statearr_35217_37275 = state_34989__$1;
(statearr_35217_37275[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (38))){
var inst_34963 = (state_34989[(2)]);
var state_34989__$1 = state_34989;
var statearr_35224_37278 = state_34989__$1;
(statearr_35224_37278[(2)] = inst_34963);

(statearr_35224_37278[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (30))){
var state_34989__$1 = state_34989;
var statearr_35232_37279 = state_34989__$1;
(statearr_35232_37279[(2)] = null);

(statearr_35232_37279[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (10))){
var inst_34856 = (state_34989[(14)]);
var inst_34858 = (state_34989[(15)]);
var inst_34866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34856,inst_34858);
var inst_34867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(0),null);
var inst_34868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(1),null);
var state_34989__$1 = (function (){var statearr_35234 = state_34989;
(statearr_35234[(26)] = inst_34867);

return statearr_35234;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_35240_37281 = state_34989__$1;
(statearr_35240_37281[(1)] = (13));

} else {
var statearr_35241_37282 = state_34989__$1;
(statearr_35241_37282[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (18))){
var inst_34903 = (state_34989[(2)]);
var state_34989__$1 = state_34989;
var statearr_35245_37283 = state_34989__$1;
(statearr_35245_37283[(2)] = inst_34903);

(statearr_35245_37283[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (42))){
var state_34989__$1 = state_34989;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34989__$1,(45),dchan);
} else {
if((state_val_34991 === (37))){
var inst_34952 = (state_34989[(23)]);
var inst_34846 = (state_34989[(11)]);
var inst_34943 = (state_34989[(25)]);
var inst_34952__$1 = cljs.core.first(inst_34943);
var inst_34953 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34952__$1,inst_34846,done);
var state_34989__$1 = (function (){var statearr_35254 = state_34989;
(statearr_35254[(23)] = inst_34952__$1);

return statearr_35254;
})();
if(cljs.core.truth_(inst_34953)){
var statearr_35257_37288 = state_34989__$1;
(statearr_35257_37288[(1)] = (39));

} else {
var statearr_35258_37290 = state_34989__$1;
(statearr_35258_37290[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (8))){
var inst_34857 = (state_34989[(13)]);
var inst_34858 = (state_34989[(15)]);
var inst_34860 = (inst_34858 < inst_34857);
var inst_34861 = inst_34860;
var state_34989__$1 = state_34989;
if(cljs.core.truth_(inst_34861)){
var statearr_35264_37291 = state_34989__$1;
(statearr_35264_37291[(1)] = (10));

} else {
var statearr_35266_37292 = state_34989__$1;
(statearr_35266_37292[(1)] = (11));

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
var statearr_35277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35277[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35277[(1)] = (1));

return statearr_35277;
});
var cljs$core$async$mult_$_state_machine__34207__auto____1 = (function (state_34989){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34989);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35282){if((e35282 instanceof Object)){
var ex__34210__auto__ = e35282;
var statearr_35286_37301 = state_34989;
(statearr_35286_37301[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35282;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37303 = state_34989;
state_34989 = G__37303;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34207__auto__ = function(state_34989){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34207__auto____1.call(this,state_34989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34207__auto____0;
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34207__auto____1;
return cljs$core$async$mult_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_35292 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_35292[(6)] = c__34273__auto___37148);

return statearr_35292;
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
var G__35306 = arguments.length;
switch (G__35306) {
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
var len__4789__auto___37336 = arguments.length;
var i__4790__auto___37337 = (0);
while(true){
if((i__4790__auto___37337 < len__4789__auto___37336)){
args__4795__auto__.push((arguments[i__4790__auto___37337]));

var G__37338 = (i__4790__auto___37337 + (1));
i__4790__auto___37337 = G__37338;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35386){
var map__35387 = p__35386;
var map__35387__$1 = (((((!((map__35387 == null))))?(((((map__35387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35387):map__35387);
var opts = map__35387__$1;
var statearr_35395_37342 = state;
(statearr_35395_37342[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35397_37344 = state;
(statearr_35397_37344[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35398_37346 = state;
(statearr_35398_37346[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35370){
var G__35371 = cljs.core.first(seq35370);
var seq35370__$1 = cljs.core.next(seq35370);
var G__35373 = cljs.core.first(seq35370__$1);
var seq35370__$2 = cljs.core.next(seq35370__$1);
var G__35374 = cljs.core.first(seq35370__$2);
var seq35370__$3 = cljs.core.next(seq35370__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35371,G__35373,G__35374,seq35370__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35425 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35425 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35426){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35426 = meta35426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35427,meta35426__$1){
var self__ = this;
var _35427__$1 = this;
return (new cljs.core.async.t_cljs$core$async35425(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35426__$1));
}));

(cljs.core.async.t_cljs$core$async35425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35427){
var self__ = this;
var _35427__$1 = this;
return self__.meta35426;
}));

(cljs.core.async.t_cljs$core$async35425.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35425.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35425.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35425.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35425.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35425.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35425.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35425.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35425.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35426","meta35426",332097432,null)], null);
}));

(cljs.core.async.t_cljs$core$async35425.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35425.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35425");

(cljs.core.async.t_cljs$core$async35425.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35425");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35425.
 */
cljs.core.async.__GT_t_cljs$core$async35425 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35425(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35426){
return (new cljs.core.async.t_cljs$core$async35425(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35426));
});

}

return (new cljs.core.async.t_cljs$core$async35425(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34273__auto___37378 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_35628){
var state_val_35629 = (state_35628[(1)]);
if((state_val_35629 === (7))){
var inst_35501 = (state_35628[(2)]);
var state_35628__$1 = state_35628;
var statearr_35646_37384 = state_35628__$1;
(statearr_35646_37384[(2)] = inst_35501);

(statearr_35646_37384[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (20))){
var inst_35516 = (state_35628[(7)]);
var state_35628__$1 = state_35628;
var statearr_35650_37385 = state_35628__$1;
(statearr_35650_37385[(2)] = inst_35516);

(statearr_35650_37385[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (27))){
var state_35628__$1 = state_35628;
var statearr_35659_37388 = state_35628__$1;
(statearr_35659_37388[(2)] = null);

(statearr_35659_37388[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (1))){
var inst_35483 = (state_35628[(8)]);
var inst_35483__$1 = calc_state();
var inst_35487 = (inst_35483__$1 == null);
var inst_35488 = cljs.core.not(inst_35487);
var state_35628__$1 = (function (){var statearr_35664 = state_35628;
(statearr_35664[(8)] = inst_35483__$1);

return statearr_35664;
})();
if(inst_35488){
var statearr_35667_37391 = state_35628__$1;
(statearr_35667_37391[(1)] = (2));

} else {
var statearr_35669_37392 = state_35628__$1;
(statearr_35669_37392[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (24))){
var inst_35592 = (state_35628[(9)]);
var inst_35549 = (state_35628[(10)]);
var inst_35560 = (state_35628[(11)]);
var inst_35592__$1 = (inst_35549.cljs$core$IFn$_invoke$arity$1 ? inst_35549.cljs$core$IFn$_invoke$arity$1(inst_35560) : inst_35549.call(null,inst_35560));
var state_35628__$1 = (function (){var statearr_35675 = state_35628;
(statearr_35675[(9)] = inst_35592__$1);

return statearr_35675;
})();
if(cljs.core.truth_(inst_35592__$1)){
var statearr_35679_37396 = state_35628__$1;
(statearr_35679_37396[(1)] = (29));

} else {
var statearr_35683_37399 = state_35628__$1;
(statearr_35683_37399[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (4))){
var inst_35504 = (state_35628[(2)]);
var state_35628__$1 = state_35628;
if(cljs.core.truth_(inst_35504)){
var statearr_35684_37402 = state_35628__$1;
(statearr_35684_37402[(1)] = (8));

} else {
var statearr_35685_37404 = state_35628__$1;
(statearr_35685_37404[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (15))){
var inst_35543 = (state_35628[(2)]);
var state_35628__$1 = state_35628;
if(cljs.core.truth_(inst_35543)){
var statearr_35686_37410 = state_35628__$1;
(statearr_35686_37410[(1)] = (19));

} else {
var statearr_35687_37411 = state_35628__$1;
(statearr_35687_37411[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (21))){
var inst_35548 = (state_35628[(12)]);
var inst_35548__$1 = (state_35628[(2)]);
var inst_35549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35548__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35550 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35548__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35552 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35548__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35628__$1 = (function (){var statearr_35688 = state_35628;
(statearr_35688[(12)] = inst_35548__$1);

(statearr_35688[(10)] = inst_35549);

(statearr_35688[(13)] = inst_35550);

return statearr_35688;
})();
return cljs.core.async.ioc_alts_BANG_(state_35628__$1,(22),inst_35552);
} else {
if((state_val_35629 === (31))){
var inst_35604 = (state_35628[(2)]);
var state_35628__$1 = state_35628;
if(cljs.core.truth_(inst_35604)){
var statearr_35691_37416 = state_35628__$1;
(statearr_35691_37416[(1)] = (32));

} else {
var statearr_35692_37417 = state_35628__$1;
(statearr_35692_37417[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (32))){
var inst_35559 = (state_35628[(14)]);
var state_35628__$1 = state_35628;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35628__$1,(35),out,inst_35559);
} else {
if((state_val_35629 === (33))){
var inst_35548 = (state_35628[(12)]);
var inst_35516 = inst_35548;
var state_35628__$1 = (function (){var statearr_35693 = state_35628;
(statearr_35693[(7)] = inst_35516);

return statearr_35693;
})();
var statearr_35694_37419 = state_35628__$1;
(statearr_35694_37419[(2)] = null);

(statearr_35694_37419[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (13))){
var inst_35516 = (state_35628[(7)]);
var inst_35529 = inst_35516.cljs$lang$protocol_mask$partition0$;
var inst_35530 = (inst_35529 & (64));
var inst_35532 = inst_35516.cljs$core$ISeq$;
var inst_35533 = (cljs.core.PROTOCOL_SENTINEL === inst_35532);
var inst_35534 = ((inst_35530) || (inst_35533));
var state_35628__$1 = state_35628;
if(cljs.core.truth_(inst_35534)){
var statearr_35697_37421 = state_35628__$1;
(statearr_35697_37421[(1)] = (16));

} else {
var statearr_35698_37424 = state_35628__$1;
(statearr_35698_37424[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (22))){
var inst_35559 = (state_35628[(14)]);
var inst_35560 = (state_35628[(11)]);
var inst_35558 = (state_35628[(2)]);
var inst_35559__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35558,(0),null);
var inst_35560__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35558,(1),null);
var inst_35563 = (inst_35559__$1 == null);
var inst_35565 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35560__$1,change);
var inst_35566 = ((inst_35563) || (inst_35565));
var state_35628__$1 = (function (){var statearr_35699 = state_35628;
(statearr_35699[(14)] = inst_35559__$1);

(statearr_35699[(11)] = inst_35560__$1);

return statearr_35699;
})();
if(cljs.core.truth_(inst_35566)){
var statearr_35700_37429 = state_35628__$1;
(statearr_35700_37429[(1)] = (23));

} else {
var statearr_35701_37430 = state_35628__$1;
(statearr_35701_37430[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (36))){
var inst_35548 = (state_35628[(12)]);
var inst_35516 = inst_35548;
var state_35628__$1 = (function (){var statearr_35704 = state_35628;
(statearr_35704[(7)] = inst_35516);

return statearr_35704;
})();
var statearr_35705_37432 = state_35628__$1;
(statearr_35705_37432[(2)] = null);

(statearr_35705_37432[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (29))){
var inst_35592 = (state_35628[(9)]);
var state_35628__$1 = state_35628;
var statearr_35708_37438 = state_35628__$1;
(statearr_35708_37438[(2)] = inst_35592);

(statearr_35708_37438[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (6))){
var state_35628__$1 = state_35628;
var statearr_35709_37440 = state_35628__$1;
(statearr_35709_37440[(2)] = false);

(statearr_35709_37440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (28))){
var inst_35586 = (state_35628[(2)]);
var inst_35588 = calc_state();
var inst_35516 = inst_35588;
var state_35628__$1 = (function (){var statearr_35712 = state_35628;
(statearr_35712[(15)] = inst_35586);

(statearr_35712[(7)] = inst_35516);

return statearr_35712;
})();
var statearr_35715_37442 = state_35628__$1;
(statearr_35715_37442[(2)] = null);

(statearr_35715_37442[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (25))){
var inst_35619 = (state_35628[(2)]);
var state_35628__$1 = state_35628;
var statearr_35716_37444 = state_35628__$1;
(statearr_35716_37444[(2)] = inst_35619);

(statearr_35716_37444[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (34))){
var inst_35617 = (state_35628[(2)]);
var state_35628__$1 = state_35628;
var statearr_35717_37447 = state_35628__$1;
(statearr_35717_37447[(2)] = inst_35617);

(statearr_35717_37447[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (17))){
var state_35628__$1 = state_35628;
var statearr_35720_37448 = state_35628__$1;
(statearr_35720_37448[(2)] = false);

(statearr_35720_37448[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (3))){
var state_35628__$1 = state_35628;
var statearr_35723_37450 = state_35628__$1;
(statearr_35723_37450[(2)] = false);

(statearr_35723_37450[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (12))){
var inst_35622 = (state_35628[(2)]);
var state_35628__$1 = state_35628;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35628__$1,inst_35622);
} else {
if((state_val_35629 === (2))){
var inst_35483 = (state_35628[(8)]);
var inst_35492 = inst_35483.cljs$lang$protocol_mask$partition0$;
var inst_35493 = (inst_35492 & (64));
var inst_35494 = inst_35483.cljs$core$ISeq$;
var inst_35495 = (cljs.core.PROTOCOL_SENTINEL === inst_35494);
var inst_35496 = ((inst_35493) || (inst_35495));
var state_35628__$1 = state_35628;
if(cljs.core.truth_(inst_35496)){
var statearr_35726_37454 = state_35628__$1;
(statearr_35726_37454[(1)] = (5));

} else {
var statearr_35727_37455 = state_35628__$1;
(statearr_35727_37455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (23))){
var inst_35559 = (state_35628[(14)]);
var inst_35569 = (inst_35559 == null);
var state_35628__$1 = state_35628;
if(cljs.core.truth_(inst_35569)){
var statearr_35730_37456 = state_35628__$1;
(statearr_35730_37456[(1)] = (26));

} else {
var statearr_35732_37459 = state_35628__$1;
(statearr_35732_37459[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (35))){
var inst_35607 = (state_35628[(2)]);
var state_35628__$1 = state_35628;
if(cljs.core.truth_(inst_35607)){
var statearr_35733_37464 = state_35628__$1;
(statearr_35733_37464[(1)] = (36));

} else {
var statearr_35734_37466 = state_35628__$1;
(statearr_35734_37466[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (19))){
var inst_35516 = (state_35628[(7)]);
var inst_35545 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35516);
var state_35628__$1 = state_35628;
var statearr_35736_37467 = state_35628__$1;
(statearr_35736_37467[(2)] = inst_35545);

(statearr_35736_37467[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (11))){
var inst_35516 = (state_35628[(7)]);
var inst_35525 = (inst_35516 == null);
var inst_35526 = cljs.core.not(inst_35525);
var state_35628__$1 = state_35628;
if(inst_35526){
var statearr_35737_37469 = state_35628__$1;
(statearr_35737_37469[(1)] = (13));

} else {
var statearr_35738_37470 = state_35628__$1;
(statearr_35738_37470[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (9))){
var inst_35483 = (state_35628[(8)]);
var state_35628__$1 = state_35628;
var statearr_35740_37472 = state_35628__$1;
(statearr_35740_37472[(2)] = inst_35483);

(statearr_35740_37472[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (5))){
var state_35628__$1 = state_35628;
var statearr_35741_37473 = state_35628__$1;
(statearr_35741_37473[(2)] = true);

(statearr_35741_37473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (14))){
var state_35628__$1 = state_35628;
var statearr_35742_37475 = state_35628__$1;
(statearr_35742_37475[(2)] = false);

(statearr_35742_37475[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (26))){
var inst_35560 = (state_35628[(11)]);
var inst_35583 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35560);
var state_35628__$1 = state_35628;
var statearr_35744_37479 = state_35628__$1;
(statearr_35744_37479[(2)] = inst_35583);

(statearr_35744_37479[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (16))){
var state_35628__$1 = state_35628;
var statearr_35745_37483 = state_35628__$1;
(statearr_35745_37483[(2)] = true);

(statearr_35745_37483[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (38))){
var inst_35613 = (state_35628[(2)]);
var state_35628__$1 = state_35628;
var statearr_35747_37484 = state_35628__$1;
(statearr_35747_37484[(2)] = inst_35613);

(statearr_35747_37484[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (30))){
var inst_35549 = (state_35628[(10)]);
var inst_35560 = (state_35628[(11)]);
var inst_35550 = (state_35628[(13)]);
var inst_35599 = cljs.core.empty_QMARK_(inst_35549);
var inst_35600 = (inst_35550.cljs$core$IFn$_invoke$arity$1 ? inst_35550.cljs$core$IFn$_invoke$arity$1(inst_35560) : inst_35550.call(null,inst_35560));
var inst_35601 = cljs.core.not(inst_35600);
var inst_35602 = ((inst_35599) && (inst_35601));
var state_35628__$1 = state_35628;
var statearr_35749_37485 = state_35628__$1;
(statearr_35749_37485[(2)] = inst_35602);

(statearr_35749_37485[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (10))){
var inst_35483 = (state_35628[(8)]);
var inst_35509 = (state_35628[(2)]);
var inst_35510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35509,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35514 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35509,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35515 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35509,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35516 = inst_35483;
var state_35628__$1 = (function (){var statearr_35751 = state_35628;
(statearr_35751[(16)] = inst_35514);

(statearr_35751[(17)] = inst_35515);

(statearr_35751[(18)] = inst_35510);

(statearr_35751[(7)] = inst_35516);

return statearr_35751;
})();
var statearr_35754_37490 = state_35628__$1;
(statearr_35754_37490[(2)] = null);

(statearr_35754_37490[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (18))){
var inst_35538 = (state_35628[(2)]);
var state_35628__$1 = state_35628;
var statearr_35758_37492 = state_35628__$1;
(statearr_35758_37492[(2)] = inst_35538);

(statearr_35758_37492[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (37))){
var state_35628__$1 = state_35628;
var statearr_35759_37493 = state_35628__$1;
(statearr_35759_37493[(2)] = null);

(statearr_35759_37493[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35629 === (8))){
var inst_35483 = (state_35628[(8)]);
var inst_35506 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35483);
var state_35628__$1 = state_35628;
var statearr_35762_37494 = state_35628__$1;
(statearr_35762_37494[(2)] = inst_35506);

(statearr_35762_37494[(1)] = (10));


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
var statearr_35765 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35765[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35765[(1)] = (1));

return statearr_35765;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35628){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35628);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35768){if((e35768 instanceof Object)){
var ex__34210__auto__ = e35768;
var statearr_35773_37500 = state_35628;
(statearr_35773_37500[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35768;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37505 = state_35628;
state_35628 = G__37505;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35628){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_35781 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_35781[(6)] = c__34273__auto___37378);

return statearr_35781;
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
var G__35802 = arguments.length;
switch (G__35802) {
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
var G__35819 = arguments.length;
switch (G__35819) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35812_SHARP_){
if(cljs.core.truth_((p1__35812_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35812_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35812_SHARP_.call(null,topic)))){
return p1__35812_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35812_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35827 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35827 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35828){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35828 = meta35828;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35829,meta35828__$1){
var self__ = this;
var _35829__$1 = this;
return (new cljs.core.async.t_cljs$core$async35827(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35828__$1));
}));

(cljs.core.async.t_cljs$core$async35827.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35829){
var self__ = this;
var _35829__$1 = this;
return self__.meta35828;
}));

(cljs.core.async.t_cljs$core$async35827.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35827.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35827.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35827.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35827.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35827.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35827.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35827.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35828","meta35828",885589779,null)], null);
}));

(cljs.core.async.t_cljs$core$async35827.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35827.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35827");

(cljs.core.async.t_cljs$core$async35827.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35827");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35827.
 */
cljs.core.async.__GT_t_cljs$core$async35827 = (function cljs$core$async$__GT_t_cljs$core$async35827(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35828){
return (new cljs.core.async.t_cljs$core$async35827(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35828));
});

}

return (new cljs.core.async.t_cljs$core$async35827(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34273__auto___37572 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_35945){
var state_val_35946 = (state_35945[(1)]);
if((state_val_35946 === (7))){
var inst_35937 = (state_35945[(2)]);
var state_35945__$1 = state_35945;
var statearr_35950_37575 = state_35945__$1;
(statearr_35950_37575[(2)] = inst_35937);

(statearr_35950_37575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (20))){
var state_35945__$1 = state_35945;
var statearr_35951_37577 = state_35945__$1;
(statearr_35951_37577[(2)] = null);

(statearr_35951_37577[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (1))){
var state_35945__$1 = state_35945;
var statearr_35953_37578 = state_35945__$1;
(statearr_35953_37578[(2)] = null);

(statearr_35953_37578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (24))){
var inst_35919 = (state_35945[(7)]);
var inst_35929 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35919);
var state_35945__$1 = state_35945;
var statearr_35957_37584 = state_35945__$1;
(statearr_35957_37584[(2)] = inst_35929);

(statearr_35957_37584[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (4))){
var inst_35865 = (state_35945[(8)]);
var inst_35865__$1 = (state_35945[(2)]);
var inst_35866 = (inst_35865__$1 == null);
var state_35945__$1 = (function (){var statearr_35959 = state_35945;
(statearr_35959[(8)] = inst_35865__$1);

return statearr_35959;
})();
if(cljs.core.truth_(inst_35866)){
var statearr_35960_37587 = state_35945__$1;
(statearr_35960_37587[(1)] = (5));

} else {
var statearr_35961_37588 = state_35945__$1;
(statearr_35961_37588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (15))){
var inst_35913 = (state_35945[(2)]);
var state_35945__$1 = state_35945;
var statearr_35965_37590 = state_35945__$1;
(statearr_35965_37590[(2)] = inst_35913);

(statearr_35965_37590[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (21))){
var inst_35934 = (state_35945[(2)]);
var state_35945__$1 = (function (){var statearr_35968 = state_35945;
(statearr_35968[(9)] = inst_35934);

return statearr_35968;
})();
var statearr_35969_37593 = state_35945__$1;
(statearr_35969_37593[(2)] = null);

(statearr_35969_37593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (13))){
var inst_35893 = (state_35945[(10)]);
var inst_35895 = cljs.core.chunked_seq_QMARK_(inst_35893);
var state_35945__$1 = state_35945;
if(inst_35895){
var statearr_35970_37598 = state_35945__$1;
(statearr_35970_37598[(1)] = (16));

} else {
var statearr_35972_37600 = state_35945__$1;
(statearr_35972_37600[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (22))){
var inst_35926 = (state_35945[(2)]);
var state_35945__$1 = state_35945;
if(cljs.core.truth_(inst_35926)){
var statearr_35975_37602 = state_35945__$1;
(statearr_35975_37602[(1)] = (23));

} else {
var statearr_35976_37603 = state_35945__$1;
(statearr_35976_37603[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (6))){
var inst_35865 = (state_35945[(8)]);
var inst_35922 = (state_35945[(11)]);
var inst_35919 = (state_35945[(7)]);
var inst_35919__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35865) : topic_fn.call(null,inst_35865));
var inst_35921 = cljs.core.deref(mults);
var inst_35922__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35921,inst_35919__$1);
var state_35945__$1 = (function (){var statearr_35977 = state_35945;
(statearr_35977[(11)] = inst_35922__$1);

(statearr_35977[(7)] = inst_35919__$1);

return statearr_35977;
})();
if(cljs.core.truth_(inst_35922__$1)){
var statearr_35978_37613 = state_35945__$1;
(statearr_35978_37613[(1)] = (19));

} else {
var statearr_35979_37614 = state_35945__$1;
(statearr_35979_37614[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (25))){
var inst_35931 = (state_35945[(2)]);
var state_35945__$1 = state_35945;
var statearr_35980_37617 = state_35945__$1;
(statearr_35980_37617[(2)] = inst_35931);

(statearr_35980_37617[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (17))){
var inst_35893 = (state_35945[(10)]);
var inst_35902 = cljs.core.first(inst_35893);
var inst_35905 = cljs.core.async.muxch_STAR_(inst_35902);
var inst_35906 = cljs.core.async.close_BANG_(inst_35905);
var inst_35907 = cljs.core.next(inst_35893);
var inst_35878 = inst_35907;
var inst_35879 = null;
var inst_35880 = (0);
var inst_35881 = (0);
var state_35945__$1 = (function (){var statearr_35984 = state_35945;
(statearr_35984[(12)] = inst_35879);

(statearr_35984[(13)] = inst_35881);

(statearr_35984[(14)] = inst_35906);

(statearr_35984[(15)] = inst_35880);

(statearr_35984[(16)] = inst_35878);

return statearr_35984;
})();
var statearr_35985_37625 = state_35945__$1;
(statearr_35985_37625[(2)] = null);

(statearr_35985_37625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (3))){
var inst_35939 = (state_35945[(2)]);
var state_35945__$1 = state_35945;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35945__$1,inst_35939);
} else {
if((state_val_35946 === (12))){
var inst_35915 = (state_35945[(2)]);
var state_35945__$1 = state_35945;
var statearr_35988_37629 = state_35945__$1;
(statearr_35988_37629[(2)] = inst_35915);

(statearr_35988_37629[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (2))){
var state_35945__$1 = state_35945;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35945__$1,(4),ch);
} else {
if((state_val_35946 === (23))){
var state_35945__$1 = state_35945;
var statearr_35990_37631 = state_35945__$1;
(statearr_35990_37631[(2)] = null);

(statearr_35990_37631[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (19))){
var inst_35865 = (state_35945[(8)]);
var inst_35922 = (state_35945[(11)]);
var inst_35924 = cljs.core.async.muxch_STAR_(inst_35922);
var state_35945__$1 = state_35945;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35945__$1,(22),inst_35924,inst_35865);
} else {
if((state_val_35946 === (11))){
var inst_35893 = (state_35945[(10)]);
var inst_35878 = (state_35945[(16)]);
var inst_35893__$1 = cljs.core.seq(inst_35878);
var state_35945__$1 = (function (){var statearr_35991 = state_35945;
(statearr_35991[(10)] = inst_35893__$1);

return statearr_35991;
})();
if(inst_35893__$1){
var statearr_35992_37643 = state_35945__$1;
(statearr_35992_37643[(1)] = (13));

} else {
var statearr_35995_37644 = state_35945__$1;
(statearr_35995_37644[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (9))){
var inst_35917 = (state_35945[(2)]);
var state_35945__$1 = state_35945;
var statearr_35997_37646 = state_35945__$1;
(statearr_35997_37646[(2)] = inst_35917);

(statearr_35997_37646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (5))){
var inst_35874 = cljs.core.deref(mults);
var inst_35875 = cljs.core.vals(inst_35874);
var inst_35876 = cljs.core.seq(inst_35875);
var inst_35878 = inst_35876;
var inst_35879 = null;
var inst_35880 = (0);
var inst_35881 = (0);
var state_35945__$1 = (function (){var statearr_35998 = state_35945;
(statearr_35998[(12)] = inst_35879);

(statearr_35998[(13)] = inst_35881);

(statearr_35998[(15)] = inst_35880);

(statearr_35998[(16)] = inst_35878);

return statearr_35998;
})();
var statearr_35999_37655 = state_35945__$1;
(statearr_35999_37655[(2)] = null);

(statearr_35999_37655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (14))){
var state_35945__$1 = state_35945;
var statearr_36003_37657 = state_35945__$1;
(statearr_36003_37657[(2)] = null);

(statearr_36003_37657[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (16))){
var inst_35893 = (state_35945[(10)]);
var inst_35897 = cljs.core.chunk_first(inst_35893);
var inst_35898 = cljs.core.chunk_rest(inst_35893);
var inst_35899 = cljs.core.count(inst_35897);
var inst_35878 = inst_35898;
var inst_35879 = inst_35897;
var inst_35880 = inst_35899;
var inst_35881 = (0);
var state_35945__$1 = (function (){var statearr_36010 = state_35945;
(statearr_36010[(12)] = inst_35879);

(statearr_36010[(13)] = inst_35881);

(statearr_36010[(15)] = inst_35880);

(statearr_36010[(16)] = inst_35878);

return statearr_36010;
})();
var statearr_36012_37661 = state_35945__$1;
(statearr_36012_37661[(2)] = null);

(statearr_36012_37661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (10))){
var inst_35879 = (state_35945[(12)]);
var inst_35881 = (state_35945[(13)]);
var inst_35880 = (state_35945[(15)]);
var inst_35878 = (state_35945[(16)]);
var inst_35887 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35879,inst_35881);
var inst_35888 = cljs.core.async.muxch_STAR_(inst_35887);
var inst_35889 = cljs.core.async.close_BANG_(inst_35888);
var inst_35890 = (inst_35881 + (1));
var tmp36000 = inst_35879;
var tmp36001 = inst_35880;
var tmp36002 = inst_35878;
var inst_35878__$1 = tmp36002;
var inst_35879__$1 = tmp36000;
var inst_35880__$1 = tmp36001;
var inst_35881__$1 = inst_35890;
var state_35945__$1 = (function (){var statearr_36017 = state_35945;
(statearr_36017[(12)] = inst_35879__$1);

(statearr_36017[(13)] = inst_35881__$1);

(statearr_36017[(17)] = inst_35889);

(statearr_36017[(15)] = inst_35880__$1);

(statearr_36017[(16)] = inst_35878__$1);

return statearr_36017;
})();
var statearr_36019_37673 = state_35945__$1;
(statearr_36019_37673[(2)] = null);

(statearr_36019_37673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (18))){
var inst_35910 = (state_35945[(2)]);
var state_35945__$1 = state_35945;
var statearr_36022_37678 = state_35945__$1;
(statearr_36022_37678[(2)] = inst_35910);

(statearr_36022_37678[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (8))){
var inst_35881 = (state_35945[(13)]);
var inst_35880 = (state_35945[(15)]);
var inst_35884 = (inst_35881 < inst_35880);
var inst_35885 = inst_35884;
var state_35945__$1 = state_35945;
if(cljs.core.truth_(inst_35885)){
var statearr_36025_37684 = state_35945__$1;
(statearr_36025_37684[(1)] = (10));

} else {
var statearr_36026_37685 = state_35945__$1;
(statearr_36026_37685[(1)] = (11));

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
var statearr_36030 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36030[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36030[(1)] = (1));

return statearr_36030;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35945){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35945);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36033){if((e36033 instanceof Object)){
var ex__34210__auto__ = e36033;
var statearr_36035_37697 = state_35945;
(statearr_36035_37697[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36033;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37699 = state_35945;
state_35945 = G__37699;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36037 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36037[(6)] = c__34273__auto___37572);

return statearr_36037;
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
var G__36041 = arguments.length;
switch (G__36041) {
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
var G__36051 = arguments.length;
switch (G__36051) {
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
var G__36053 = arguments.length;
switch (G__36053) {
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
var c__34273__auto___37735 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36102){
var state_val_36103 = (state_36102[(1)]);
if((state_val_36103 === (7))){
var state_36102__$1 = state_36102;
var statearr_36105_37738 = state_36102__$1;
(statearr_36105_37738[(2)] = null);

(statearr_36105_37738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (1))){
var state_36102__$1 = state_36102;
var statearr_36106_37743 = state_36102__$1;
(statearr_36106_37743[(2)] = null);

(statearr_36106_37743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (4))){
var inst_36057 = (state_36102[(7)]);
var inst_36059 = (inst_36057 < cnt);
var state_36102__$1 = state_36102;
if(cljs.core.truth_(inst_36059)){
var statearr_36111_37745 = state_36102__$1;
(statearr_36111_37745[(1)] = (6));

} else {
var statearr_36114_37747 = state_36102__$1;
(statearr_36114_37747[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (15))){
var inst_36097 = (state_36102[(2)]);
var state_36102__$1 = state_36102;
var statearr_36115_37748 = state_36102__$1;
(statearr_36115_37748[(2)] = inst_36097);

(statearr_36115_37748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (13))){
var inst_36090 = cljs.core.async.close_BANG_(out);
var state_36102__$1 = state_36102;
var statearr_36117_37752 = state_36102__$1;
(statearr_36117_37752[(2)] = inst_36090);

(statearr_36117_37752[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (6))){
var state_36102__$1 = state_36102;
var statearr_36118_37753 = state_36102__$1;
(statearr_36118_37753[(2)] = null);

(statearr_36118_37753[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (3))){
var inst_36099 = (state_36102[(2)]);
var state_36102__$1 = state_36102;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36102__$1,inst_36099);
} else {
if((state_val_36103 === (12))){
var inst_36084 = (state_36102[(8)]);
var inst_36084__$1 = (state_36102[(2)]);
var inst_36085 = cljs.core.some(cljs.core.nil_QMARK_,inst_36084__$1);
var state_36102__$1 = (function (){var statearr_36124 = state_36102;
(statearr_36124[(8)] = inst_36084__$1);

return statearr_36124;
})();
if(cljs.core.truth_(inst_36085)){
var statearr_36125_37754 = state_36102__$1;
(statearr_36125_37754[(1)] = (13));

} else {
var statearr_36126_37757 = state_36102__$1;
(statearr_36126_37757[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (2))){
var inst_36055 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36057 = (0);
var state_36102__$1 = (function (){var statearr_36127 = state_36102;
(statearr_36127[(9)] = inst_36055);

(statearr_36127[(7)] = inst_36057);

return statearr_36127;
})();
var statearr_36128_37758 = state_36102__$1;
(statearr_36128_37758[(2)] = null);

(statearr_36128_37758[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (11))){
var inst_36057 = (state_36102[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36102,(10),Object,null,(9));
var inst_36067 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36057) : chs__$1.call(null,inst_36057));
var inst_36068 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36057) : done.call(null,inst_36057));
var inst_36069 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36067,inst_36068);
var state_36102__$1 = state_36102;
var statearr_36129_37761 = state_36102__$1;
(statearr_36129_37761[(2)] = inst_36069);


cljs.core.async.impl.ioc_helpers.process_exception(state_36102__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (9))){
var inst_36057 = (state_36102[(7)]);
var inst_36071 = (state_36102[(2)]);
var inst_36072 = (inst_36057 + (1));
var inst_36057__$1 = inst_36072;
var state_36102__$1 = (function (){var statearr_36130 = state_36102;
(statearr_36130[(10)] = inst_36071);

(statearr_36130[(7)] = inst_36057__$1);

return statearr_36130;
})();
var statearr_36131_37762 = state_36102__$1;
(statearr_36131_37762[(2)] = null);

(statearr_36131_37762[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (5))){
var inst_36078 = (state_36102[(2)]);
var state_36102__$1 = (function (){var statearr_36132 = state_36102;
(statearr_36132[(11)] = inst_36078);

return statearr_36132;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36102__$1,(12),dchan);
} else {
if((state_val_36103 === (14))){
var inst_36084 = (state_36102[(8)]);
var inst_36092 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36084);
var state_36102__$1 = state_36102;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36102__$1,(16),out,inst_36092);
} else {
if((state_val_36103 === (16))){
var inst_36094 = (state_36102[(2)]);
var state_36102__$1 = (function (){var statearr_36137 = state_36102;
(statearr_36137[(12)] = inst_36094);

return statearr_36137;
})();
var statearr_36138_37767 = state_36102__$1;
(statearr_36138_37767[(2)] = null);

(statearr_36138_37767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (10))){
var inst_36061 = (state_36102[(2)]);
var inst_36062 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36102__$1 = (function (){var statearr_36139 = state_36102;
(statearr_36139[(13)] = inst_36061);

return statearr_36139;
})();
var statearr_36141_37771 = state_36102__$1;
(statearr_36141_37771[(2)] = inst_36062);


cljs.core.async.impl.ioc_helpers.process_exception(state_36102__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (8))){
var inst_36076 = (state_36102[(2)]);
var state_36102__$1 = state_36102;
var statearr_36144_37773 = state_36102__$1;
(statearr_36144_37773[(2)] = inst_36076);

(statearr_36144_37773[(1)] = (5));


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
var statearr_36145 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36145[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36145[(1)] = (1));

return statearr_36145;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36102){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36102);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36146){if((e36146 instanceof Object)){
var ex__34210__auto__ = e36146;
var statearr_36147_37775 = state_36102;
(statearr_36147_37775[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36146;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37776 = state_36102;
state_36102 = G__37776;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36102){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36151 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36151[(6)] = c__34273__auto___37735);

return statearr_36151;
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
var G__36170 = arguments.length;
switch (G__36170) {
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
var c__34273__auto___37787 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36216){
var state_val_36217 = (state_36216[(1)]);
if((state_val_36217 === (7))){
var inst_36192 = (state_36216[(7)]);
var inst_36193 = (state_36216[(8)]);
var inst_36192__$1 = (state_36216[(2)]);
var inst_36193__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36192__$1,(0),null);
var inst_36194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36192__$1,(1),null);
var inst_36195 = (inst_36193__$1 == null);
var state_36216__$1 = (function (){var statearr_36221 = state_36216;
(statearr_36221[(9)] = inst_36194);

(statearr_36221[(7)] = inst_36192__$1);

(statearr_36221[(8)] = inst_36193__$1);

return statearr_36221;
})();
if(cljs.core.truth_(inst_36195)){
var statearr_36222_37792 = state_36216__$1;
(statearr_36222_37792[(1)] = (8));

} else {
var statearr_36224_37794 = state_36216__$1;
(statearr_36224_37794[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (1))){
var inst_36182 = cljs.core.vec(chs);
var inst_36183 = inst_36182;
var state_36216__$1 = (function (){var statearr_36225 = state_36216;
(statearr_36225[(10)] = inst_36183);

return statearr_36225;
})();
var statearr_36226_37797 = state_36216__$1;
(statearr_36226_37797[(2)] = null);

(statearr_36226_37797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (4))){
var inst_36183 = (state_36216[(10)]);
var state_36216__$1 = state_36216;
return cljs.core.async.ioc_alts_BANG_(state_36216__$1,(7),inst_36183);
} else {
if((state_val_36217 === (6))){
var inst_36210 = (state_36216[(2)]);
var state_36216__$1 = state_36216;
var statearr_36227_37800 = state_36216__$1;
(statearr_36227_37800[(2)] = inst_36210);

(statearr_36227_37800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (3))){
var inst_36212 = (state_36216[(2)]);
var state_36216__$1 = state_36216;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36216__$1,inst_36212);
} else {
if((state_val_36217 === (2))){
var inst_36183 = (state_36216[(10)]);
var inst_36185 = cljs.core.count(inst_36183);
var inst_36186 = (inst_36185 > (0));
var state_36216__$1 = state_36216;
if(cljs.core.truth_(inst_36186)){
var statearr_36231_37806 = state_36216__$1;
(statearr_36231_37806[(1)] = (4));

} else {
var statearr_36232_37807 = state_36216__$1;
(statearr_36232_37807[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (11))){
var inst_36183 = (state_36216[(10)]);
var inst_36203 = (state_36216[(2)]);
var tmp36228 = inst_36183;
var inst_36183__$1 = tmp36228;
var state_36216__$1 = (function (){var statearr_36233 = state_36216;
(statearr_36233[(11)] = inst_36203);

(statearr_36233[(10)] = inst_36183__$1);

return statearr_36233;
})();
var statearr_36235_37813 = state_36216__$1;
(statearr_36235_37813[(2)] = null);

(statearr_36235_37813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (9))){
var inst_36193 = (state_36216[(8)]);
var state_36216__$1 = state_36216;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36216__$1,(11),out,inst_36193);
} else {
if((state_val_36217 === (5))){
var inst_36208 = cljs.core.async.close_BANG_(out);
var state_36216__$1 = state_36216;
var statearr_36247_37815 = state_36216__$1;
(statearr_36247_37815[(2)] = inst_36208);

(statearr_36247_37815[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (10))){
var inst_36206 = (state_36216[(2)]);
var state_36216__$1 = state_36216;
var statearr_36248_37816 = state_36216__$1;
(statearr_36248_37816[(2)] = inst_36206);

(statearr_36248_37816[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36217 === (8))){
var inst_36194 = (state_36216[(9)]);
var inst_36183 = (state_36216[(10)]);
var inst_36192 = (state_36216[(7)]);
var inst_36193 = (state_36216[(8)]);
var inst_36198 = (function (){var cs = inst_36183;
var vec__36188 = inst_36192;
var v = inst_36193;
var c = inst_36194;
return (function (p1__36154_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36154_SHARP_);
});
})();
var inst_36199 = cljs.core.filterv(inst_36198,inst_36183);
var inst_36183__$1 = inst_36199;
var state_36216__$1 = (function (){var statearr_36250 = state_36216;
(statearr_36250[(10)] = inst_36183__$1);

return statearr_36250;
})();
var statearr_36251_37825 = state_36216__$1;
(statearr_36251_37825[(2)] = null);

(statearr_36251_37825[(1)] = (2));


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
var statearr_36254 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36254[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36254[(1)] = (1));

return statearr_36254;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36216){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36216);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36256){if((e36256 instanceof Object)){
var ex__34210__auto__ = e36256;
var statearr_36257_37833 = state_36216;
(statearr_36257_37833[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36256;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37835 = state_36216;
state_36216 = G__37835;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36216){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36259 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36259[(6)] = c__34273__auto___37787);

return statearr_36259;
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
var G__36265 = arguments.length;
switch (G__36265) {
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
var c__34273__auto___37847 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36293){
var state_val_36294 = (state_36293[(1)]);
if((state_val_36294 === (7))){
var inst_36275 = (state_36293[(7)]);
var inst_36275__$1 = (state_36293[(2)]);
var inst_36276 = (inst_36275__$1 == null);
var inst_36277 = cljs.core.not(inst_36276);
var state_36293__$1 = (function (){var statearr_36303 = state_36293;
(statearr_36303[(7)] = inst_36275__$1);

return statearr_36303;
})();
if(inst_36277){
var statearr_36304_37849 = state_36293__$1;
(statearr_36304_37849[(1)] = (8));

} else {
var statearr_36305_37850 = state_36293__$1;
(statearr_36305_37850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36294 === (1))){
var inst_36269 = (0);
var state_36293__$1 = (function (){var statearr_36306 = state_36293;
(statearr_36306[(8)] = inst_36269);

return statearr_36306;
})();
var statearr_36307_37856 = state_36293__$1;
(statearr_36307_37856[(2)] = null);

(statearr_36307_37856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36294 === (4))){
var state_36293__$1 = state_36293;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36293__$1,(7),ch);
} else {
if((state_val_36294 === (6))){
var inst_36288 = (state_36293[(2)]);
var state_36293__$1 = state_36293;
var statearr_36309_37860 = state_36293__$1;
(statearr_36309_37860[(2)] = inst_36288);

(statearr_36309_37860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36294 === (3))){
var inst_36290 = (state_36293[(2)]);
var inst_36291 = cljs.core.async.close_BANG_(out);
var state_36293__$1 = (function (){var statearr_36312 = state_36293;
(statearr_36312[(9)] = inst_36290);

return statearr_36312;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36293__$1,inst_36291);
} else {
if((state_val_36294 === (2))){
var inst_36269 = (state_36293[(8)]);
var inst_36272 = (inst_36269 < n);
var state_36293__$1 = state_36293;
if(cljs.core.truth_(inst_36272)){
var statearr_36313_37863 = state_36293__$1;
(statearr_36313_37863[(1)] = (4));

} else {
var statearr_36315_37864 = state_36293__$1;
(statearr_36315_37864[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36294 === (11))){
var inst_36269 = (state_36293[(8)]);
var inst_36280 = (state_36293[(2)]);
var inst_36281 = (inst_36269 + (1));
var inst_36269__$1 = inst_36281;
var state_36293__$1 = (function (){var statearr_36317 = state_36293;
(statearr_36317[(8)] = inst_36269__$1);

(statearr_36317[(10)] = inst_36280);

return statearr_36317;
})();
var statearr_36318_37871 = state_36293__$1;
(statearr_36318_37871[(2)] = null);

(statearr_36318_37871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36294 === (9))){
var state_36293__$1 = state_36293;
var statearr_36319_37874 = state_36293__$1;
(statearr_36319_37874[(2)] = null);

(statearr_36319_37874[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36294 === (5))){
var state_36293__$1 = state_36293;
var statearr_36321_37875 = state_36293__$1;
(statearr_36321_37875[(2)] = null);

(statearr_36321_37875[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36294 === (10))){
var inst_36285 = (state_36293[(2)]);
var state_36293__$1 = state_36293;
var statearr_36323_37878 = state_36293__$1;
(statearr_36323_37878[(2)] = inst_36285);

(statearr_36323_37878[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36294 === (8))){
var inst_36275 = (state_36293[(7)]);
var state_36293__$1 = state_36293;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36293__$1,(11),out,inst_36275);
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
var statearr_36324 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36324[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36324[(1)] = (1));

return statearr_36324;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36293){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36293);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36325){if((e36325 instanceof Object)){
var ex__34210__auto__ = e36325;
var statearr_36326_37887 = state_36293;
(statearr_36326_37887[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36325;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37888 = state_36293;
state_36293 = G__37888;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36293){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36329 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36329[(6)] = c__34273__auto___37847);

return statearr_36329;
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
cljs.core.async.t_cljs$core$async36333 = (function (f,ch,meta36334){
this.f = f;
this.ch = ch;
this.meta36334 = meta36334;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36335,meta36334__$1){
var self__ = this;
var _36335__$1 = this;
return (new cljs.core.async.t_cljs$core$async36333(self__.f,self__.ch,meta36334__$1));
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
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36346 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36346 = (function (f,ch,meta36334,_,fn1,meta36347){
this.f = f;
this.ch = ch;
this.meta36334 = meta36334;
this._ = _;
this.fn1 = fn1;
this.meta36347 = meta36347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36348,meta36347__$1){
var self__ = this;
var _36348__$1 = this;
return (new cljs.core.async.t_cljs$core$async36346(self__.f,self__.ch,self__.meta36334,self__._,self__.fn1,meta36347__$1));
}));

(cljs.core.async.t_cljs$core$async36346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36348){
var self__ = this;
var _36348__$1 = this;
return self__.meta36347;
}));

(cljs.core.async.t_cljs$core$async36346.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36346.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36346.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36346.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36331_SHARP_){
var G__36353 = (((p1__36331_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36331_SHARP_) : self__.f.call(null,p1__36331_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36353) : f1.call(null,G__36353));
});
}));

(cljs.core.async.t_cljs$core$async36346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36334","meta36334",-466817117,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36333","cljs.core.async/t_cljs$core$async36333",1860255262,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36347","meta36347",800743982,null)], null);
}));

(cljs.core.async.t_cljs$core$async36346.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36346");

(cljs.core.async.t_cljs$core$async36346.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36346");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36346.
 */
cljs.core.async.__GT_t_cljs$core$async36346 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36346(f__$1,ch__$1,meta36334__$1,___$2,fn1__$1,meta36347){
return (new cljs.core.async.t_cljs$core$async36346(f__$1,ch__$1,meta36334__$1,___$2,fn1__$1,meta36347));
});

}

return (new cljs.core.async.t_cljs$core$async36346(self__.f,self__.ch,self__.meta36334,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36358 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36358) : self__.f.call(null,G__36358));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36333.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36333.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36333.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36334","meta36334",-466817117,null)], null);
}));

(cljs.core.async.t_cljs$core$async36333.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36333.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36333");

(cljs.core.async.t_cljs$core$async36333.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36333");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36333.
 */
cljs.core.async.__GT_t_cljs$core$async36333 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36333(f__$1,ch__$1,meta36334){
return (new cljs.core.async.t_cljs$core$async36333(f__$1,ch__$1,meta36334));
});

}

return (new cljs.core.async.t_cljs$core$async36333(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36370 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36370 = (function (f,ch,meta36371){
this.f = f;
this.ch = ch;
this.meta36371 = meta36371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36372,meta36371__$1){
var self__ = this;
var _36372__$1 = this;
return (new cljs.core.async.t_cljs$core$async36370(self__.f,self__.ch,meta36371__$1));
}));

(cljs.core.async.t_cljs$core$async36370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36372){
var self__ = this;
var _36372__$1 = this;
return self__.meta36371;
}));

(cljs.core.async.t_cljs$core$async36370.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36370.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36370.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36370.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36370.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36370.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36370.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36371","meta36371",1376530487,null)], null);
}));

(cljs.core.async.t_cljs$core$async36370.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36370.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36370");

(cljs.core.async.t_cljs$core$async36370.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36370");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36370.
 */
cljs.core.async.__GT_t_cljs$core$async36370 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36370(f__$1,ch__$1,meta36371){
return (new cljs.core.async.t_cljs$core$async36370(f__$1,ch__$1,meta36371));
});

}

return (new cljs.core.async.t_cljs$core$async36370(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36381 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36381 = (function (p,ch,meta36382){
this.p = p;
this.ch = ch;
this.meta36382 = meta36382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36383,meta36382__$1){
var self__ = this;
var _36383__$1 = this;
return (new cljs.core.async.t_cljs$core$async36381(self__.p,self__.ch,meta36382__$1));
}));

(cljs.core.async.t_cljs$core$async36381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36383){
var self__ = this;
var _36383__$1 = this;
return self__.meta36382;
}));

(cljs.core.async.t_cljs$core$async36381.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36381.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36381.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36381.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36381.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36381.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36381.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36381.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36382","meta36382",1356888983,null)], null);
}));

(cljs.core.async.t_cljs$core$async36381.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36381");

(cljs.core.async.t_cljs$core$async36381.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36381");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36381.
 */
cljs.core.async.__GT_t_cljs$core$async36381 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36381(p__$1,ch__$1,meta36382){
return (new cljs.core.async.t_cljs$core$async36381(p__$1,ch__$1,meta36382));
});

}

return (new cljs.core.async.t_cljs$core$async36381(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36414 = arguments.length;
switch (G__36414) {
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
var c__34273__auto___37948 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36443){
var state_val_36444 = (state_36443[(1)]);
if((state_val_36444 === (7))){
var inst_36437 = (state_36443[(2)]);
var state_36443__$1 = state_36443;
var statearr_36448_37950 = state_36443__$1;
(statearr_36448_37950[(2)] = inst_36437);

(statearr_36448_37950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (1))){
var state_36443__$1 = state_36443;
var statearr_36449_37954 = state_36443__$1;
(statearr_36449_37954[(2)] = null);

(statearr_36449_37954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (4))){
var inst_36421 = (state_36443[(7)]);
var inst_36421__$1 = (state_36443[(2)]);
var inst_36422 = (inst_36421__$1 == null);
var state_36443__$1 = (function (){var statearr_36452 = state_36443;
(statearr_36452[(7)] = inst_36421__$1);

return statearr_36452;
})();
if(cljs.core.truth_(inst_36422)){
var statearr_36454_37956 = state_36443__$1;
(statearr_36454_37956[(1)] = (5));

} else {
var statearr_36456_37958 = state_36443__$1;
(statearr_36456_37958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (6))){
var inst_36421 = (state_36443[(7)]);
var inst_36426 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36421) : p.call(null,inst_36421));
var state_36443__$1 = state_36443;
if(cljs.core.truth_(inst_36426)){
var statearr_36457_37961 = state_36443__$1;
(statearr_36457_37961[(1)] = (8));

} else {
var statearr_36458_37962 = state_36443__$1;
(statearr_36458_37962[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (3))){
var inst_36439 = (state_36443[(2)]);
var state_36443__$1 = state_36443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36443__$1,inst_36439);
} else {
if((state_val_36444 === (2))){
var state_36443__$1 = state_36443;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36443__$1,(4),ch);
} else {
if((state_val_36444 === (11))){
var inst_36431 = (state_36443[(2)]);
var state_36443__$1 = state_36443;
var statearr_36459_37965 = state_36443__$1;
(statearr_36459_37965[(2)] = inst_36431);

(statearr_36459_37965[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (9))){
var state_36443__$1 = state_36443;
var statearr_36461_37967 = state_36443__$1;
(statearr_36461_37967[(2)] = null);

(statearr_36461_37967[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (5))){
var inst_36424 = cljs.core.async.close_BANG_(out);
var state_36443__$1 = state_36443;
var statearr_36467_37970 = state_36443__$1;
(statearr_36467_37970[(2)] = inst_36424);

(statearr_36467_37970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (10))){
var inst_36434 = (state_36443[(2)]);
var state_36443__$1 = (function (){var statearr_36468 = state_36443;
(statearr_36468[(8)] = inst_36434);

return statearr_36468;
})();
var statearr_36469_37974 = state_36443__$1;
(statearr_36469_37974[(2)] = null);

(statearr_36469_37974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (8))){
var inst_36421 = (state_36443[(7)]);
var state_36443__$1 = state_36443;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36443__$1,(11),out,inst_36421);
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
var statearr_36471 = [null,null,null,null,null,null,null,null,null];
(statearr_36471[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36471[(1)] = (1));

return statearr_36471;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36443){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36443);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36472){if((e36472 instanceof Object)){
var ex__34210__auto__ = e36472;
var statearr_36473_37982 = state_36443;
(statearr_36473_37982[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36472;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37988 = state_36443;
state_36443 = G__37988;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36475 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36475[(6)] = c__34273__auto___37948);

return statearr_36475;
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
var G__36478 = arguments.length;
switch (G__36478) {
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
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36544){
var state_val_36545 = (state_36544[(1)]);
if((state_val_36545 === (7))){
var inst_36539 = (state_36544[(2)]);
var state_36544__$1 = state_36544;
var statearr_36549_37998 = state_36544__$1;
(statearr_36549_37998[(2)] = inst_36539);

(statearr_36549_37998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36545 === (20))){
var inst_36509 = (state_36544[(7)]);
var inst_36520 = (state_36544[(2)]);
var inst_36521 = cljs.core.next(inst_36509);
var inst_36494 = inst_36521;
var inst_36495 = null;
var inst_36496 = (0);
var inst_36497 = (0);
var state_36544__$1 = (function (){var statearr_36550 = state_36544;
(statearr_36550[(8)] = inst_36494);

(statearr_36550[(9)] = inst_36520);

(statearr_36550[(10)] = inst_36496);

(statearr_36550[(11)] = inst_36495);

(statearr_36550[(12)] = inst_36497);

return statearr_36550;
})();
var statearr_36552_38001 = state_36544__$1;
(statearr_36552_38001[(2)] = null);

(statearr_36552_38001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36545 === (1))){
var state_36544__$1 = state_36544;
var statearr_36553_38003 = state_36544__$1;
(statearr_36553_38003[(2)] = null);

(statearr_36553_38003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36545 === (4))){
var inst_36483 = (state_36544[(13)]);
var inst_36483__$1 = (state_36544[(2)]);
var inst_36484 = (inst_36483__$1 == null);
var state_36544__$1 = (function (){var statearr_36554 = state_36544;
(statearr_36554[(13)] = inst_36483__$1);

return statearr_36554;
})();
if(cljs.core.truth_(inst_36484)){
var statearr_36555_38008 = state_36544__$1;
(statearr_36555_38008[(1)] = (5));

} else {
var statearr_36557_38009 = state_36544__$1;
(statearr_36557_38009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36545 === (15))){
var state_36544__$1 = state_36544;
var statearr_36561_38010 = state_36544__$1;
(statearr_36561_38010[(2)] = null);

(statearr_36561_38010[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36545 === (21))){
var state_36544__$1 = state_36544;
var statearr_36562_38011 = state_36544__$1;
(statearr_36562_38011[(2)] = null);

(statearr_36562_38011[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36545 === (13))){
var inst_36494 = (state_36544[(8)]);
var inst_36496 = (state_36544[(10)]);
var inst_36495 = (state_36544[(11)]);
var inst_36497 = (state_36544[(12)]);
var inst_36504 = (state_36544[(2)]);
var inst_36505 = (inst_36497 + (1));
var tmp36558 = inst_36494;
var tmp36559 = inst_36496;
var tmp36560 = inst_36495;
var inst_36494__$1 = tmp36558;
var inst_36495__$1 = tmp36560;
var inst_36496__$1 = tmp36559;
var inst_36497__$1 = inst_36505;
var state_36544__$1 = (function (){var statearr_36564 = state_36544;
(statearr_36564[(8)] = inst_36494__$1);

(statearr_36564[(14)] = inst_36504);

(statearr_36564[(10)] = inst_36496__$1);

(statearr_36564[(11)] = inst_36495__$1);

(statearr_36564[(12)] = inst_36497__$1);

return statearr_36564;
})();
var statearr_36565_38019 = state_36544__$1;
(statearr_36565_38019[(2)] = null);

(statearr_36565_38019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36545 === (22))){
var state_36544__$1 = state_36544;
var statearr_36567_38020 = state_36544__$1;
(statearr_36567_38020[(2)] = null);

(statearr_36567_38020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36545 === (6))){
var inst_36483 = (state_36544[(13)]);
var inst_36492 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36483) : f.call(null,inst_36483));
var inst_36493 = cljs.core.seq(inst_36492);
var inst_36494 = inst_36493;
var inst_36495 = null;
var inst_36496 = (0);
var inst_36497 = (0);
var state_36544__$1 = (function (){var statearr_36568 = state_36544;
(statearr_36568[(8)] = inst_36494);

(statearr_36568[(10)] = inst_36496);

(statearr_36568[(11)] = inst_36495);

(statearr_36568[(12)] = inst_36497);

return statearr_36568;
})();
var statearr_36570_38022 = state_36544__$1;
(statearr_36570_38022[(2)] = null);

(statearr_36570_38022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36545 === (17))){
var inst_36509 = (state_36544[(7)]);
var inst_36513 = cljs.core.chunk_first(inst_36509);
var inst_36514 = cljs.core.chunk_rest(inst_36509);
var inst_36515 = cljs.core.count(inst_36513);
var inst_36494 = inst_36514;
var inst_36495 = inst_36513;
var inst_36496 = inst_36515;
var inst_36497 = (0);
var state_36544__$1 = (function (){var statearr_36571 = state_36544;
(statearr_36571[(8)] = inst_36494);

(statearr_36571[(10)] = inst_36496);

(statearr_36571[(11)] = inst_36495);

(statearr_36571[(12)] = inst_36497);

return statearr_36571;
})();
var statearr_36573_38031 = state_36544__$1;
(statearr_36573_38031[(2)] = null);

(statearr_36573_38031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36545 === (3))){
var inst_36541 = (state_36544[(2)]);
var state_36544__$1 = state_36544;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36544__$1,inst_36541);
} else {
if((state_val_36545 === (12))){
var inst_36529 = (state_36544[(2)]);
var state_36544__$1 = state_36544;
var statearr_36574_38036 = state_36544__$1;
(statearr_36574_38036[(2)] = inst_36529);

(statearr_36574_38036[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36545 === (2))){
var state_36544__$1 = state_36544;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36544__$1,(4),in$);
} else {
if((state_val_36545 === (23))){
var inst_36537 = (state_36544[(2)]);
var state_36544__$1 = state_36544;
var statearr_36576_38037 = state_36544__$1;
(statearr_36576_38037[(2)] = inst_36537);

(statearr_36576_38037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36545 === (19))){
var inst_36524 = (state_36544[(2)]);
var state_36544__$1 = state_36544;
var statearr_36577_38038 = state_36544__$1;
(statearr_36577_38038[(2)] = inst_36524);

(statearr_36577_38038[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36545 === (11))){
var inst_36509 = (state_36544[(7)]);
var inst_36494 = (state_36544[(8)]);
var inst_36509__$1 = cljs.core.seq(inst_36494);
var state_36544__$1 = (function (){var statearr_36579 = state_36544;
(statearr_36579[(7)] = inst_36509__$1);

return statearr_36579;
})();
if(inst_36509__$1){
var statearr_36580_38039 = state_36544__$1;
(statearr_36580_38039[(1)] = (14));

} else {
var statearr_36581_38040 = state_36544__$1;
(statearr_36581_38040[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36545 === (9))){
var inst_36531 = (state_36544[(2)]);
var inst_36532 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36544__$1 = (function (){var statearr_36583 = state_36544;
(statearr_36583[(15)] = inst_36531);

return statearr_36583;
})();
if(cljs.core.truth_(inst_36532)){
var statearr_36584_38042 = state_36544__$1;
(statearr_36584_38042[(1)] = (21));

} else {
var statearr_36585_38043 = state_36544__$1;
(statearr_36585_38043[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36545 === (5))){
var inst_36486 = cljs.core.async.close_BANG_(out);
var state_36544__$1 = state_36544;
var statearr_36586_38044 = state_36544__$1;
(statearr_36586_38044[(2)] = inst_36486);

(statearr_36586_38044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36545 === (14))){
var inst_36509 = (state_36544[(7)]);
var inst_36511 = cljs.core.chunked_seq_QMARK_(inst_36509);
var state_36544__$1 = state_36544;
if(inst_36511){
var statearr_36588_38045 = state_36544__$1;
(statearr_36588_38045[(1)] = (17));

} else {
var statearr_36589_38046 = state_36544__$1;
(statearr_36589_38046[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36545 === (16))){
var inst_36527 = (state_36544[(2)]);
var state_36544__$1 = state_36544;
var statearr_36590_38051 = state_36544__$1;
(statearr_36590_38051[(2)] = inst_36527);

(statearr_36590_38051[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36545 === (10))){
var inst_36495 = (state_36544[(11)]);
var inst_36497 = (state_36544[(12)]);
var inst_36502 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36495,inst_36497);
var state_36544__$1 = state_36544;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36544__$1,(13),out,inst_36502);
} else {
if((state_val_36545 === (18))){
var inst_36509 = (state_36544[(7)]);
var inst_36518 = cljs.core.first(inst_36509);
var state_36544__$1 = state_36544;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36544__$1,(20),out,inst_36518);
} else {
if((state_val_36545 === (8))){
var inst_36496 = (state_36544[(10)]);
var inst_36497 = (state_36544[(12)]);
var inst_36499 = (inst_36497 < inst_36496);
var inst_36500 = inst_36499;
var state_36544__$1 = state_36544;
if(cljs.core.truth_(inst_36500)){
var statearr_36593_38052 = state_36544__$1;
(statearr_36593_38052[(1)] = (10));

} else {
var statearr_36594_38053 = state_36544__$1;
(statearr_36594_38053[(1)] = (11));

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
var statearr_36596 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36596[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36596[(1)] = (1));

return statearr_36596;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36544){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36544);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36597){if((e36597 instanceof Object)){
var ex__34210__auto__ = e36597;
var statearr_36598_38054 = state_36544;
(statearr_36598_38054[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36597;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38055 = state_36544;
state_36544 = G__38055;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36544){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36600 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36600[(6)] = c__34273__auto__);

return statearr_36600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));

return c__34273__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36603 = arguments.length;
switch (G__36603) {
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
var G__36607 = arguments.length;
switch (G__36607) {
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
var G__36612 = arguments.length;
switch (G__36612) {
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
var c__34273__auto___38066 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36638){
var state_val_36639 = (state_36638[(1)]);
if((state_val_36639 === (7))){
var inst_36633 = (state_36638[(2)]);
var state_36638__$1 = state_36638;
var statearr_36641_38068 = state_36638__$1;
(statearr_36641_38068[(2)] = inst_36633);

(statearr_36641_38068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (1))){
var inst_36615 = null;
var state_36638__$1 = (function (){var statearr_36642 = state_36638;
(statearr_36642[(7)] = inst_36615);

return statearr_36642;
})();
var statearr_36644_38071 = state_36638__$1;
(statearr_36644_38071[(2)] = null);

(statearr_36644_38071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (4))){
var inst_36618 = (state_36638[(8)]);
var inst_36618__$1 = (state_36638[(2)]);
var inst_36619 = (inst_36618__$1 == null);
var inst_36620 = cljs.core.not(inst_36619);
var state_36638__$1 = (function (){var statearr_36645 = state_36638;
(statearr_36645[(8)] = inst_36618__$1);

return statearr_36645;
})();
if(inst_36620){
var statearr_36646_38072 = state_36638__$1;
(statearr_36646_38072[(1)] = (5));

} else {
var statearr_36647_38073 = state_36638__$1;
(statearr_36647_38073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (6))){
var state_36638__$1 = state_36638;
var statearr_36649_38078 = state_36638__$1;
(statearr_36649_38078[(2)] = null);

(statearr_36649_38078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (3))){
var inst_36635 = (state_36638[(2)]);
var inst_36636 = cljs.core.async.close_BANG_(out);
var state_36638__$1 = (function (){var statearr_36650 = state_36638;
(statearr_36650[(9)] = inst_36635);

return statearr_36650;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36638__$1,inst_36636);
} else {
if((state_val_36639 === (2))){
var state_36638__$1 = state_36638;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36638__$1,(4),ch);
} else {
if((state_val_36639 === (11))){
var inst_36618 = (state_36638[(8)]);
var inst_36627 = (state_36638[(2)]);
var inst_36615 = inst_36618;
var state_36638__$1 = (function (){var statearr_36652 = state_36638;
(statearr_36652[(7)] = inst_36615);

(statearr_36652[(10)] = inst_36627);

return statearr_36652;
})();
var statearr_36653_38080 = state_36638__$1;
(statearr_36653_38080[(2)] = null);

(statearr_36653_38080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (9))){
var inst_36618 = (state_36638[(8)]);
var state_36638__$1 = state_36638;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36638__$1,(11),out,inst_36618);
} else {
if((state_val_36639 === (5))){
var inst_36615 = (state_36638[(7)]);
var inst_36618 = (state_36638[(8)]);
var inst_36622 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36618,inst_36615);
var state_36638__$1 = state_36638;
if(inst_36622){
var statearr_36656_38085 = state_36638__$1;
(statearr_36656_38085[(1)] = (8));

} else {
var statearr_36657_38086 = state_36638__$1;
(statearr_36657_38086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (10))){
var inst_36630 = (state_36638[(2)]);
var state_36638__$1 = state_36638;
var statearr_36659_38087 = state_36638__$1;
(statearr_36659_38087[(2)] = inst_36630);

(statearr_36659_38087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (8))){
var inst_36615 = (state_36638[(7)]);
var tmp36655 = inst_36615;
var inst_36615__$1 = tmp36655;
var state_36638__$1 = (function (){var statearr_36660 = state_36638;
(statearr_36660[(7)] = inst_36615__$1);

return statearr_36660;
})();
var statearr_36661_38088 = state_36638__$1;
(statearr_36661_38088[(2)] = null);

(statearr_36661_38088[(1)] = (2));


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
var statearr_36663 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36663[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36663[(1)] = (1));

return statearr_36663;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36638){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36638);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36664){if((e36664 instanceof Object)){
var ex__34210__auto__ = e36664;
var statearr_36665_38094 = state_36638;
(statearr_36665_38094[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36664;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38095 = state_36638;
state_36638 = G__38095;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36638){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36667 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36667[(6)] = c__34273__auto___38066);

return statearr_36667;
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
var G__36670 = arguments.length;
switch (G__36670) {
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
var c__34273__auto___38097 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36711){
var state_val_36712 = (state_36711[(1)]);
if((state_val_36712 === (7))){
var inst_36707 = (state_36711[(2)]);
var state_36711__$1 = state_36711;
var statearr_36714_38099 = state_36711__$1;
(statearr_36714_38099[(2)] = inst_36707);

(statearr_36714_38099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (1))){
var inst_36673 = (new Array(n));
var inst_36674 = inst_36673;
var inst_36675 = (0);
var state_36711__$1 = (function (){var statearr_36716 = state_36711;
(statearr_36716[(7)] = inst_36674);

(statearr_36716[(8)] = inst_36675);

return statearr_36716;
})();
var statearr_36717_38101 = state_36711__$1;
(statearr_36717_38101[(2)] = null);

(statearr_36717_38101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (4))){
var inst_36678 = (state_36711[(9)]);
var inst_36678__$1 = (state_36711[(2)]);
var inst_36679 = (inst_36678__$1 == null);
var inst_36680 = cljs.core.not(inst_36679);
var state_36711__$1 = (function (){var statearr_36718 = state_36711;
(statearr_36718[(9)] = inst_36678__$1);

return statearr_36718;
})();
if(inst_36680){
var statearr_36720_38103 = state_36711__$1;
(statearr_36720_38103[(1)] = (5));

} else {
var statearr_36721_38104 = state_36711__$1;
(statearr_36721_38104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (15))){
var inst_36701 = (state_36711[(2)]);
var state_36711__$1 = state_36711;
var statearr_36722_38105 = state_36711__$1;
(statearr_36722_38105[(2)] = inst_36701);

(statearr_36722_38105[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (13))){
var state_36711__$1 = state_36711;
var statearr_36724_38106 = state_36711__$1;
(statearr_36724_38106[(2)] = null);

(statearr_36724_38106[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (6))){
var inst_36675 = (state_36711[(8)]);
var inst_36697 = (inst_36675 > (0));
var state_36711__$1 = state_36711;
if(cljs.core.truth_(inst_36697)){
var statearr_36725_38109 = state_36711__$1;
(statearr_36725_38109[(1)] = (12));

} else {
var statearr_36726_38110 = state_36711__$1;
(statearr_36726_38110[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (3))){
var inst_36709 = (state_36711[(2)]);
var state_36711__$1 = state_36711;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36711__$1,inst_36709);
} else {
if((state_val_36712 === (12))){
var inst_36674 = (state_36711[(7)]);
var inst_36699 = cljs.core.vec(inst_36674);
var state_36711__$1 = state_36711;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36711__$1,(15),out,inst_36699);
} else {
if((state_val_36712 === (2))){
var state_36711__$1 = state_36711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36711__$1,(4),ch);
} else {
if((state_val_36712 === (11))){
var inst_36691 = (state_36711[(2)]);
var inst_36692 = (new Array(n));
var inst_36674 = inst_36692;
var inst_36675 = (0);
var state_36711__$1 = (function (){var statearr_36729 = state_36711;
(statearr_36729[(10)] = inst_36691);

(statearr_36729[(7)] = inst_36674);

(statearr_36729[(8)] = inst_36675);

return statearr_36729;
})();
var statearr_36730_38113 = state_36711__$1;
(statearr_36730_38113[(2)] = null);

(statearr_36730_38113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (9))){
var inst_36674 = (state_36711[(7)]);
var inst_36689 = cljs.core.vec(inst_36674);
var state_36711__$1 = state_36711;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36711__$1,(11),out,inst_36689);
} else {
if((state_val_36712 === (5))){
var inst_36684 = (state_36711[(11)]);
var inst_36674 = (state_36711[(7)]);
var inst_36675 = (state_36711[(8)]);
var inst_36678 = (state_36711[(9)]);
var inst_36682 = (inst_36674[inst_36675] = inst_36678);
var inst_36684__$1 = (inst_36675 + (1));
var inst_36685 = (inst_36684__$1 < n);
var state_36711__$1 = (function (){var statearr_36732 = state_36711;
(statearr_36732[(11)] = inst_36684__$1);

(statearr_36732[(12)] = inst_36682);

return statearr_36732;
})();
if(cljs.core.truth_(inst_36685)){
var statearr_36733_38115 = state_36711__$1;
(statearr_36733_38115[(1)] = (8));

} else {
var statearr_36734_38117 = state_36711__$1;
(statearr_36734_38117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (14))){
var inst_36704 = (state_36711[(2)]);
var inst_36705 = cljs.core.async.close_BANG_(out);
var state_36711__$1 = (function (){var statearr_36737 = state_36711;
(statearr_36737[(13)] = inst_36704);

return statearr_36737;
})();
var statearr_36738_38118 = state_36711__$1;
(statearr_36738_38118[(2)] = inst_36705);

(statearr_36738_38118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (10))){
var inst_36695 = (state_36711[(2)]);
var state_36711__$1 = state_36711;
var statearr_36739_38119 = state_36711__$1;
(statearr_36739_38119[(2)] = inst_36695);

(statearr_36739_38119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (8))){
var inst_36684 = (state_36711[(11)]);
var inst_36674 = (state_36711[(7)]);
var tmp36735 = inst_36674;
var inst_36674__$1 = tmp36735;
var inst_36675 = inst_36684;
var state_36711__$1 = (function (){var statearr_36741 = state_36711;
(statearr_36741[(7)] = inst_36674__$1);

(statearr_36741[(8)] = inst_36675);

return statearr_36741;
})();
var statearr_36742_38120 = state_36711__$1;
(statearr_36742_38120[(2)] = null);

(statearr_36742_38120[(1)] = (2));


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
var statearr_36743 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36743[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36743[(1)] = (1));

return statearr_36743;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36711){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36711);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36746){if((e36746 instanceof Object)){
var ex__34210__auto__ = e36746;
var statearr_36747_38123 = state_36711;
(statearr_36747_38123[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36746;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38125 = state_36711;
state_36711 = G__38125;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36711){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36748 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36748[(6)] = c__34273__auto___38097);

return statearr_36748;
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
var G__36750 = arguments.length;
switch (G__36750) {
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
var c__34273__auto___38128 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36793){
var state_val_36794 = (state_36793[(1)]);
if((state_val_36794 === (7))){
var inst_36788 = (state_36793[(2)]);
var state_36793__$1 = state_36793;
var statearr_36796_38131 = state_36793__$1;
(statearr_36796_38131[(2)] = inst_36788);

(statearr_36796_38131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (1))){
var inst_36751 = [];
var inst_36752 = inst_36751;
var inst_36753 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36793__$1 = (function (){var statearr_36797 = state_36793;
(statearr_36797[(7)] = inst_36753);

(statearr_36797[(8)] = inst_36752);

return statearr_36797;
})();
var statearr_36798_38132 = state_36793__$1;
(statearr_36798_38132[(2)] = null);

(statearr_36798_38132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (4))){
var inst_36756 = (state_36793[(9)]);
var inst_36756__$1 = (state_36793[(2)]);
var inst_36757 = (inst_36756__$1 == null);
var inst_36758 = cljs.core.not(inst_36757);
var state_36793__$1 = (function (){var statearr_36800 = state_36793;
(statearr_36800[(9)] = inst_36756__$1);

return statearr_36800;
})();
if(inst_36758){
var statearr_36801_38134 = state_36793__$1;
(statearr_36801_38134[(1)] = (5));

} else {
var statearr_36802_38135 = state_36793__$1;
(statearr_36802_38135[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (15))){
var inst_36782 = (state_36793[(2)]);
var state_36793__$1 = state_36793;
var statearr_36803_38138 = state_36793__$1;
(statearr_36803_38138[(2)] = inst_36782);

(statearr_36803_38138[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (13))){
var state_36793__$1 = state_36793;
var statearr_36805_38139 = state_36793__$1;
(statearr_36805_38139[(2)] = null);

(statearr_36805_38139[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (6))){
var inst_36752 = (state_36793[(8)]);
var inst_36777 = inst_36752.length;
var inst_36778 = (inst_36777 > (0));
var state_36793__$1 = state_36793;
if(cljs.core.truth_(inst_36778)){
var statearr_36806_38140 = state_36793__$1;
(statearr_36806_38140[(1)] = (12));

} else {
var statearr_36807_38141 = state_36793__$1;
(statearr_36807_38141[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (3))){
var inst_36790 = (state_36793[(2)]);
var state_36793__$1 = state_36793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36793__$1,inst_36790);
} else {
if((state_val_36794 === (12))){
var inst_36752 = (state_36793[(8)]);
var inst_36780 = cljs.core.vec(inst_36752);
var state_36793__$1 = state_36793;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36793__$1,(15),out,inst_36780);
} else {
if((state_val_36794 === (2))){
var state_36793__$1 = state_36793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36793__$1,(4),ch);
} else {
if((state_val_36794 === (11))){
var inst_36756 = (state_36793[(9)]);
var inst_36760 = (state_36793[(10)]);
var inst_36770 = (state_36793[(2)]);
var inst_36771 = [];
var inst_36772 = inst_36771.push(inst_36756);
var inst_36752 = inst_36771;
var inst_36753 = inst_36760;
var state_36793__$1 = (function (){var statearr_36810 = state_36793;
(statearr_36810[(11)] = inst_36772);

(statearr_36810[(7)] = inst_36753);

(statearr_36810[(12)] = inst_36770);

(statearr_36810[(8)] = inst_36752);

return statearr_36810;
})();
var statearr_36811_38145 = state_36793__$1;
(statearr_36811_38145[(2)] = null);

(statearr_36811_38145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (9))){
var inst_36752 = (state_36793[(8)]);
var inst_36768 = cljs.core.vec(inst_36752);
var state_36793__$1 = state_36793;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36793__$1,(11),out,inst_36768);
} else {
if((state_val_36794 === (5))){
var inst_36753 = (state_36793[(7)]);
var inst_36756 = (state_36793[(9)]);
var inst_36760 = (state_36793[(10)]);
var inst_36760__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36756) : f.call(null,inst_36756));
var inst_36761 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36760__$1,inst_36753);
var inst_36762 = cljs.core.keyword_identical_QMARK_(inst_36753,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36763 = ((inst_36761) || (inst_36762));
var state_36793__$1 = (function (){var statearr_36813 = state_36793;
(statearr_36813[(10)] = inst_36760__$1);

return statearr_36813;
})();
if(cljs.core.truth_(inst_36763)){
var statearr_36814_38149 = state_36793__$1;
(statearr_36814_38149[(1)] = (8));

} else {
var statearr_36816_38150 = state_36793__$1;
(statearr_36816_38150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (14))){
var inst_36785 = (state_36793[(2)]);
var inst_36786 = cljs.core.async.close_BANG_(out);
var state_36793__$1 = (function (){var statearr_36818 = state_36793;
(statearr_36818[(13)] = inst_36785);

return statearr_36818;
})();
var statearr_36819_38151 = state_36793__$1;
(statearr_36819_38151[(2)] = inst_36786);

(statearr_36819_38151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (10))){
var inst_36775 = (state_36793[(2)]);
var state_36793__$1 = state_36793;
var statearr_36821_38152 = state_36793__$1;
(statearr_36821_38152[(2)] = inst_36775);

(statearr_36821_38152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (8))){
var inst_36756 = (state_36793[(9)]);
var inst_36760 = (state_36793[(10)]);
var inst_36752 = (state_36793[(8)]);
var inst_36765 = inst_36752.push(inst_36756);
var tmp36817 = inst_36752;
var inst_36752__$1 = tmp36817;
var inst_36753 = inst_36760;
var state_36793__$1 = (function (){var statearr_36822 = state_36793;
(statearr_36822[(14)] = inst_36765);

(statearr_36822[(7)] = inst_36753);

(statearr_36822[(8)] = inst_36752__$1);

return statearr_36822;
})();
var statearr_36823_38154 = state_36793__$1;
(statearr_36823_38154[(2)] = null);

(statearr_36823_38154[(1)] = (2));


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
var statearr_36825 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36825[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36825[(1)] = (1));

return statearr_36825;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36793){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36793);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36826){if((e36826 instanceof Object)){
var ex__34210__auto__ = e36826;
var statearr_36828_38157 = state_36793;
(statearr_36828_38157[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36826;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38158 = state_36793;
state_36793 = G__38158;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36793){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36829 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36829[(6)] = c__34273__auto___38128);

return statearr_36829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
