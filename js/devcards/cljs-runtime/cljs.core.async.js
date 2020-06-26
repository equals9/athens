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
var val_36814 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36814) : fn1.call(null,val_36814));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36814) : fn1.call(null,val_36814));
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
var n__4666__auto___36821 = n;
var x_36822 = (0);
while(true){
if((x_36822 < n__4666__auto___36821)){
(a[x_36822] = x_36822);

var G__36823 = (x_36822 + (1));
x_36822 = G__36823;
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
var G__36836 = (i + (1));
i = G__36836;
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
var len__4789__auto___36838 = arguments.length;
var i__4790__auto___36839 = (0);
while(true){
if((i__4790__auto___36839 < len__4789__auto___36838)){
args__4795__auto__.push((arguments[i__4790__auto___36839]));

var G__36841 = (i__4790__auto___36839 + (1));
i__4790__auto___36839 = G__36841;
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
var c__34273__auto___36847 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34414){
var state_val_34415 = (state_34414[(1)]);
if((state_val_34415 === (7))){
var inst_34407 = (state_34414[(2)]);
var state_34414__$1 = state_34414;
var statearr_34425_36848 = state_34414__$1;
(statearr_34425_36848[(2)] = inst_34407);

(statearr_34425_36848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (1))){
var state_34414__$1 = state_34414;
var statearr_34426_36850 = state_34414__$1;
(statearr_34426_36850[(2)] = null);

(statearr_34426_36850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (4))){
var inst_34390 = (state_34414[(7)]);
var inst_34390__$1 = (state_34414[(2)]);
var inst_34391 = (inst_34390__$1 == null);
var state_34414__$1 = (function (){var statearr_34427 = state_34414;
(statearr_34427[(7)] = inst_34390__$1);

return statearr_34427;
})();
if(cljs.core.truth_(inst_34391)){
var statearr_34428_36851 = state_34414__$1;
(statearr_34428_36851[(1)] = (5));

} else {
var statearr_34429_36853 = state_34414__$1;
(statearr_34429_36853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (13))){
var state_34414__$1 = state_34414;
var statearr_34430_36854 = state_34414__$1;
(statearr_34430_36854[(2)] = null);

(statearr_34430_36854[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (6))){
var inst_34390 = (state_34414[(7)]);
var state_34414__$1 = state_34414;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34414__$1,(11),to,inst_34390);
} else {
if((state_val_34415 === (3))){
var inst_34409 = (state_34414[(2)]);
var state_34414__$1 = state_34414;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34414__$1,inst_34409);
} else {
if((state_val_34415 === (12))){
var state_34414__$1 = state_34414;
var statearr_34431_36856 = state_34414__$1;
(statearr_34431_36856[(2)] = null);

(statearr_34431_36856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (2))){
var state_34414__$1 = state_34414;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34414__$1,(4),from);
} else {
if((state_val_34415 === (11))){
var inst_34400 = (state_34414[(2)]);
var state_34414__$1 = state_34414;
if(cljs.core.truth_(inst_34400)){
var statearr_34432_36858 = state_34414__$1;
(statearr_34432_36858[(1)] = (12));

} else {
var statearr_34433_36859 = state_34414__$1;
(statearr_34433_36859[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (9))){
var state_34414__$1 = state_34414;
var statearr_34434_36860 = state_34414__$1;
(statearr_34434_36860[(2)] = null);

(statearr_34434_36860[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (5))){
var state_34414__$1 = state_34414;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34435_36862 = state_34414__$1;
(statearr_34435_36862[(1)] = (8));

} else {
var statearr_34436_36863 = state_34414__$1;
(statearr_34436_36863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (14))){
var inst_34405 = (state_34414[(2)]);
var state_34414__$1 = state_34414;
var statearr_34437_36864 = state_34414__$1;
(statearr_34437_36864[(2)] = inst_34405);

(statearr_34437_36864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (10))){
var inst_34397 = (state_34414[(2)]);
var state_34414__$1 = state_34414;
var statearr_34438_36866 = state_34414__$1;
(statearr_34438_36866[(2)] = inst_34397);

(statearr_34438_36866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (8))){
var inst_34394 = cljs.core.async.close_BANG_(to);
var state_34414__$1 = state_34414;
var statearr_34439_36867 = state_34414__$1;
(statearr_34439_36867[(2)] = inst_34394);

(statearr_34439_36867[(1)] = (10));


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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34414){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34414);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34441){if((e34441 instanceof Object)){
var ex__34210__auto__ = e34441;
var statearr_34442_36869 = state_34414;
(statearr_34442_36869[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36871 = state_34414;
state_34414 = G__36871;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34443 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34443[(6)] = c__34273__auto___36847);

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
var c__34273__auto___36874 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34453){
var state_val_34454 = (state_34453[(1)]);
if((state_val_34454 === (1))){
var state_34453__$1 = state_34453;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34453__$1,(2),res,v);
} else {
if((state_val_34454 === (2))){
var inst_34449 = (state_34453[(2)]);
var inst_34451 = cljs.core.async.close_BANG_(res);
var state_34453__$1 = (function (){var statearr_34458 = state_34453;
(statearr_34458[(7)] = inst_34449);

return statearr_34458;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34453__$1,inst_34451);
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
var statearr_34462_36877 = state_34453;
(statearr_34462_36877[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34460;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36879 = state_34453;
state_34453 = G__36879;
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
(statearr_34463[(6)] = c__34273__auto___36874);

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
var n__4666__auto___36882 = n;
var __36883 = (0);
while(true){
if((__36883 < n__4666__auto___36882)){
var G__34468_36884 = type;
var G__34468_36885__$1 = (((G__34468_36884 instanceof cljs.core.Keyword))?G__34468_36884.fqn:null);
switch (G__34468_36885__$1) {
case "compute":
var c__34273__auto___36887 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36883,c__34273__auto___36887,G__34468_36884,G__34468_36885__$1,n__4666__auto___36882,jobs,results,process,async){
return (function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = ((function (__36883,c__34273__auto___36887,G__34468_36884,G__34468_36885__$1,n__4666__auto___36882,jobs,results,process,async){
return (function (state_34482){
var state_val_34483 = (state_34482[(1)]);
if((state_val_34483 === (1))){
var state_34482__$1 = state_34482;
var statearr_34485_36889 = state_34482__$1;
(statearr_34485_36889[(2)] = null);

(statearr_34485_36889[(1)] = (2));


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
var statearr_34486_36891 = state_34482__$1;
(statearr_34486_36891[(1)] = (5));

} else {
var statearr_34488_36892 = state_34482__$1;
(statearr_34488_36892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (5))){
var state_34482__$1 = state_34482;
var statearr_34489_36894 = state_34482__$1;
(statearr_34489_36894[(2)] = null);

(statearr_34489_36894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (6))){
var state_34482__$1 = state_34482;
var statearr_34490_36895 = state_34482__$1;
(statearr_34490_36895[(2)] = null);

(statearr_34490_36895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (7))){
var inst_34478 = (state_34482[(2)]);
var state_34482__$1 = state_34482;
var statearr_34491_36897 = state_34482__$1;
(statearr_34491_36897[(2)] = inst_34478);

(statearr_34491_36897[(1)] = (3));


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
});})(__36883,c__34273__auto___36887,G__34468_36884,G__34468_36885__$1,n__4666__auto___36882,jobs,results,process,async))
;
return ((function (__36883,switch__34206__auto__,c__34273__auto___36887,G__34468_36884,G__34468_36885__$1,n__4666__auto___36882,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34493 = [null,null,null,null,null,null,null];
(statearr_34493[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34493[(1)] = (1));

return statearr_34493;
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
var statearr_34499_36899 = state_34482;
(statearr_34499_36899[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34495;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36901 = state_34482;
state_34482 = G__36901;
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
;})(__36883,switch__34206__auto__,c__34273__auto___36887,G__34468_36884,G__34468_36885__$1,n__4666__auto___36882,jobs,results,process,async))
})();
var state__34275__auto__ = (function (){var statearr_34502 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34502[(6)] = c__34273__auto___36887);

return statearr_34502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
});})(__36883,c__34273__auto___36887,G__34468_36884,G__34468_36885__$1,n__4666__auto___36882,jobs,results,process,async))
);


break;
case "async":
var c__34273__auto___36902 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36883,c__34273__auto___36902,G__34468_36884,G__34468_36885__$1,n__4666__auto___36882,jobs,results,process,async){
return (function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = ((function (__36883,c__34273__auto___36902,G__34468_36884,G__34468_36885__$1,n__4666__auto___36882,jobs,results,process,async){
return (function (state_34515){
var state_val_34516 = (state_34515[(1)]);
if((state_val_34516 === (1))){
var state_34515__$1 = state_34515;
var statearr_34517_36904 = state_34515__$1;
(statearr_34517_36904[(2)] = null);

(statearr_34517_36904[(1)] = (2));


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
var statearr_34518_36907 = state_34515__$1;
(statearr_34518_36907[(1)] = (5));

} else {
var statearr_34520_36908 = state_34515__$1;
(statearr_34520_36908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (5))){
var state_34515__$1 = state_34515;
var statearr_34521_36909 = state_34515__$1;
(statearr_34521_36909[(2)] = null);

(statearr_34521_36909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (6))){
var state_34515__$1 = state_34515;
var statearr_34522_36911 = state_34515__$1;
(statearr_34522_36911[(2)] = null);

(statearr_34522_36911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (7))){
var inst_34511 = (state_34515[(2)]);
var state_34515__$1 = state_34515;
var statearr_34523_36912 = state_34515__$1;
(statearr_34523_36912[(2)] = inst_34511);

(statearr_34523_36912[(1)] = (3));


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
});})(__36883,c__34273__auto___36902,G__34468_36884,G__34468_36885__$1,n__4666__auto___36882,jobs,results,process,async))
;
return ((function (__36883,switch__34206__auto__,c__34273__auto___36902,G__34468_36884,G__34468_36885__$1,n__4666__auto___36882,jobs,results,process,async){
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
}catch (e34526){if((e34526 instanceof Object)){
var ex__34210__auto__ = e34526;
var statearr_34530_36914 = state_34515;
(statearr_34530_36914[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34526;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36916 = state_34515;
state_34515 = G__36916;
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
;})(__36883,switch__34206__auto__,c__34273__auto___36902,G__34468_36884,G__34468_36885__$1,n__4666__auto___36882,jobs,results,process,async))
})();
var state__34275__auto__ = (function (){var statearr_34531 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34531[(6)] = c__34273__auto___36902);

return statearr_34531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
});})(__36883,c__34273__auto___36902,G__34468_36884,G__34468_36885__$1,n__4666__auto___36882,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34468_36885__$1)].join('')));

}

var G__36918 = (__36883 + (1));
__36883 = G__36918;
continue;
} else {
}
break;
}

var c__34273__auto___36919 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34556){
var state_val_34557 = (state_34556[(1)]);
if((state_val_34557 === (7))){
var inst_34552 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
var statearr_34558_36921 = state_34556__$1;
(statearr_34558_36921[(2)] = inst_34552);

(statearr_34558_36921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (1))){
var state_34556__$1 = state_34556;
var statearr_34559_36922 = state_34556__$1;
(statearr_34559_36922[(2)] = null);

(statearr_34559_36922[(1)] = (2));


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
var statearr_34564_36924 = state_34556__$1;
(statearr_34564_36924[(1)] = (5));

} else {
var statearr_34565_36925 = state_34556__$1;
(statearr_34565_36925[(1)] = (6));

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
var statearr_34568_36928 = state_34556__$1;
(statearr_34568_36928[(2)] = null);

(statearr_34568_36928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (5))){
var inst_34540 = cljs.core.async.close_BANG_(jobs);
var state_34556__$1 = state_34556;
var statearr_34569_36930 = state_34556__$1;
(statearr_34569_36930[(2)] = inst_34540);

(statearr_34569_36930[(1)] = (7));


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
var statearr_34573_36933 = state_34556;
(statearr_34573_36933[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36934 = state_34556;
state_34556 = G__36934;
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
(statearr_34574[(6)] = c__34273__auto___36919);

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
var statearr_34614_36936 = state_34612__$1;
(statearr_34614_36936[(2)] = inst_34608);

(statearr_34614_36936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var state_34612__$1 = state_34612;
var statearr_34615_36938 = state_34612__$1;
(statearr_34615_36938[(2)] = null);

(statearr_34615_36938[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34616_36939 = state_34612__$1;
(statearr_34616_36939[(2)] = null);

(statearr_34616_36939[(1)] = (2));


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
var statearr_34618_36941 = state_34612__$1;
(statearr_34618_36941[(1)] = (5));

} else {
var statearr_34619_36942 = state_34612__$1;
(statearr_34619_36942[(1)] = (6));

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
var statearr_34620_36944 = state_34612__$1;
(statearr_34620_36944[(2)] = inst_34603);

(statearr_34620_36944[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_36946 = state_34612__$1;
(statearr_34622_36946[(2)] = null);

(statearr_34622_36946[(1)] = (2));


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
var statearr_34623_36948 = state_34612__$1;
(statearr_34623_36948[(1)] = (19));

} else {
var statearr_34624_36949 = state_34612__$1;
(statearr_34624_36949[(1)] = (20));

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
var statearr_34625_36951 = state_34612__$1;
(statearr_34625_36951[(2)] = null);

(statearr_34625_36951[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34587 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34626 = state_34612;
(statearr_34626[(10)] = inst_34587);

return statearr_34626;
})();
var statearr_34627_36953 = state_34612__$1;
(statearr_34627_36953[(2)] = null);

(statearr_34627_36953[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34628_36954 = state_34612__$1;
(statearr_34628_36954[(2)] = null);

(statearr_34628_36954[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_36955 = state_34612__$1;
(statearr_34629_36955[(1)] = (8));

} else {
var statearr_34630_36957 = state_34612__$1;
(statearr_34630_36957[(1)] = (9));

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
var statearr_34632_36958 = state_34612__$1;
(statearr_34632_36958[(1)] = (15));

} else {
var statearr_34633_36960 = state_34612__$1;
(statearr_34633_36960[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34634_36961 = state_34612__$1;
(statearr_34634_36961[(2)] = false);

(statearr_34634_36961[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34635_36962 = state_34612__$1;
(statearr_34635_36962[(2)] = inst_34584);

(statearr_34635_36962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34636_36964 = state_34612__$1;
(statearr_34636_36964[(2)] = inst_34595);

(statearr_34636_36964[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34581 = cljs.core.async.close_BANG_(to);
var state_34612__$1 = state_34612;
var statearr_34637_36965 = state_34612__$1;
(statearr_34637_36965[(2)] = inst_34581);

(statearr_34637_36965[(1)] = (10));


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
var statearr_34640_36968 = state_34612;
(statearr_34640_36968[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36969 = state_34612;
state_34612 = G__36969;
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
var c__34273__auto___36980 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34681){
var state_val_34682 = (state_34681[(1)]);
if((state_val_34682 === (7))){
var inst_34677 = (state_34681[(2)]);
var state_34681__$1 = state_34681;
var statearr_34684_36982 = state_34681__$1;
(statearr_34684_36982[(2)] = inst_34677);

(statearr_34684_36982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (1))){
var state_34681__$1 = state_34681;
var statearr_34685_36983 = state_34681__$1;
(statearr_34685_36983[(2)] = null);

(statearr_34685_36983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (4))){
var inst_34656 = (state_34681[(7)]);
var inst_34656__$1 = (state_34681[(2)]);
var inst_34657 = (inst_34656__$1 == null);
var state_34681__$1 = (function (){var statearr_34686 = state_34681;
(statearr_34686[(7)] = inst_34656__$1);

return statearr_34686;
})();
if(cljs.core.truth_(inst_34657)){
var statearr_34687_36985 = state_34681__$1;
(statearr_34687_36985[(1)] = (5));

} else {
var statearr_34690_36986 = state_34681__$1;
(statearr_34690_36986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (13))){
var state_34681__$1 = state_34681;
var statearr_34691_36987 = state_34681__$1;
(statearr_34691_36987[(2)] = null);

(statearr_34691_36987[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (6))){
var inst_34656 = (state_34681[(7)]);
var inst_34664 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34656) : p.call(null,inst_34656));
var state_34681__$1 = state_34681;
if(cljs.core.truth_(inst_34664)){
var statearr_34692_36989 = state_34681__$1;
(statearr_34692_36989[(1)] = (9));

} else {
var statearr_34693_36990 = state_34681__$1;
(statearr_34693_36990[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (3))){
var inst_34679 = (state_34681[(2)]);
var state_34681__$1 = state_34681;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34681__$1,inst_34679);
} else {
if((state_val_34682 === (12))){
var state_34681__$1 = state_34681;
var statearr_34694_36992 = state_34681__$1;
(statearr_34694_36992[(2)] = null);

(statearr_34694_36992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (2))){
var state_34681__$1 = state_34681;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34681__$1,(4),ch);
} else {
if((state_val_34682 === (11))){
var inst_34656 = (state_34681[(7)]);
var inst_34668 = (state_34681[(2)]);
var state_34681__$1 = state_34681;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34681__$1,(8),inst_34668,inst_34656);
} else {
if((state_val_34682 === (9))){
var state_34681__$1 = state_34681;
var statearr_34695_36994 = state_34681__$1;
(statearr_34695_36994[(2)] = tc);

(statearr_34695_36994[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (5))){
var inst_34659 = cljs.core.async.close_BANG_(tc);
var inst_34660 = cljs.core.async.close_BANG_(fc);
var state_34681__$1 = (function (){var statearr_34697 = state_34681;
(statearr_34697[(8)] = inst_34659);

return statearr_34697;
})();
var statearr_34698_36996 = state_34681__$1;
(statearr_34698_36996[(2)] = inst_34660);

(statearr_34698_36996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (14))){
var inst_34675 = (state_34681[(2)]);
var state_34681__$1 = state_34681;
var statearr_34699_36997 = state_34681__$1;
(statearr_34699_36997[(2)] = inst_34675);

(statearr_34699_36997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (10))){
var state_34681__$1 = state_34681;
var statearr_34701_36998 = state_34681__$1;
(statearr_34701_36998[(2)] = fc);

(statearr_34701_36998[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (8))){
var inst_34670 = (state_34681[(2)]);
var state_34681__$1 = state_34681;
if(cljs.core.truth_(inst_34670)){
var statearr_34702_36999 = state_34681__$1;
(statearr_34702_36999[(1)] = (12));

} else {
var statearr_34703_37000 = state_34681__$1;
(statearr_34703_37000[(1)] = (13));

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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34681){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34681);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34705){if((e34705 instanceof Object)){
var ex__34210__auto__ = e34705;
var statearr_34708_37008 = state_34681;
(statearr_34708_37008[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34705;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37009 = state_34681;
state_34681 = G__37009;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34681){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34712 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34712[(6)] = c__34273__auto___36980);

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
var statearr_34736_37012 = state_34734__$1;
(statearr_34736_37012[(2)] = inst_34730);

(statearr_34736_37012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (1))){
var inst_34713 = init;
var state_34734__$1 = (function (){var statearr_34737 = state_34734;
(statearr_34737[(7)] = inst_34713);

return statearr_34737;
})();
var statearr_34738_37016 = state_34734__$1;
(statearr_34738_37016[(2)] = null);

(statearr_34738_37016[(1)] = (2));


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
var statearr_34743_37017 = state_34734__$1;
(statearr_34743_37017[(1)] = (5));

} else {
var statearr_34744_37018 = state_34734__$1;
(statearr_34744_37018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (6))){
var inst_34721 = (state_34734[(9)]);
var inst_34713 = (state_34734[(7)]);
var inst_34716 = (state_34734[(8)]);
var inst_34721__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34713,inst_34716) : f.call(null,inst_34713,inst_34716));
var inst_34722 = cljs.core.reduced_QMARK_(inst_34721__$1);
var state_34734__$1 = (function (){var statearr_34745 = state_34734;
(statearr_34745[(9)] = inst_34721__$1);

return statearr_34745;
})();
if(inst_34722){
var statearr_34746_37020 = state_34734__$1;
(statearr_34746_37020[(1)] = (8));

} else {
var statearr_34747_37021 = state_34734__$1;
(statearr_34747_37021[(1)] = (9));

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
var statearr_34752_37022 = state_34734__$1;
(statearr_34752_37022[(2)] = null);

(statearr_34752_37022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (5))){
var inst_34713 = (state_34734[(7)]);
var state_34734__$1 = state_34734;
var statearr_34753_37023 = state_34734__$1;
(statearr_34753_37023[(2)] = inst_34713);

(statearr_34753_37023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (10))){
var inst_34728 = (state_34734[(2)]);
var state_34734__$1 = state_34734;
var statearr_34754_37024 = state_34734__$1;
(statearr_34754_37024[(2)] = inst_34728);

(statearr_34754_37024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (8))){
var inst_34721 = (state_34734[(9)]);
var inst_34724 = cljs.core.deref(inst_34721);
var state_34734__$1 = state_34734;
var statearr_34755_37025 = state_34734__$1;
(statearr_34755_37025[(2)] = inst_34724);

(statearr_34755_37025[(1)] = (10));


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
var statearr_34761_37026 = state_34734;
(statearr_34761_37026[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37027 = state_34734;
state_34734 = G__37027;
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
var statearr_34772_37034 = state_34768;
(statearr_34772_37034[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34771;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37035 = state_34768;
state_34768 = G__37035;
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
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34803){
var state_val_34804 = (state_34803[(1)]);
if((state_val_34804 === (7))){
var inst_34782 = (state_34803[(2)]);
var state_34803__$1 = state_34803;
var statearr_34808_37043 = state_34803__$1;
(statearr_34808_37043[(2)] = inst_34782);

(statearr_34808_37043[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34804 === (1))){
var inst_34776 = cljs.core.seq(coll);
var inst_34777 = inst_34776;
var state_34803__$1 = (function (){var statearr_34810 = state_34803;
(statearr_34810[(7)] = inst_34777);

return statearr_34810;
})();
var statearr_34811_37044 = state_34803__$1;
(statearr_34811_37044[(2)] = null);

(statearr_34811_37044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34804 === (4))){
var inst_34777 = (state_34803[(7)]);
var inst_34780 = cljs.core.first(inst_34777);
var state_34803__$1 = state_34803;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34803__$1,(7),ch,inst_34780);
} else {
if((state_val_34804 === (13))){
var inst_34794 = (state_34803[(2)]);
var state_34803__$1 = state_34803;
var statearr_34812_37049 = state_34803__$1;
(statearr_34812_37049[(2)] = inst_34794);

(statearr_34812_37049[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34804 === (6))){
var inst_34785 = (state_34803[(2)]);
var state_34803__$1 = state_34803;
if(cljs.core.truth_(inst_34785)){
var statearr_34813_37053 = state_34803__$1;
(statearr_34813_37053[(1)] = (8));

} else {
var statearr_34814_37056 = state_34803__$1;
(statearr_34814_37056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34804 === (3))){
var inst_34798 = (state_34803[(2)]);
var state_34803__$1 = state_34803;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34803__$1,inst_34798);
} else {
if((state_val_34804 === (12))){
var state_34803__$1 = state_34803;
var statearr_34815_37059 = state_34803__$1;
(statearr_34815_37059[(2)] = null);

(statearr_34815_37059[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34804 === (2))){
var inst_34777 = (state_34803[(7)]);
var state_34803__$1 = state_34803;
if(cljs.core.truth_(inst_34777)){
var statearr_34816_37062 = state_34803__$1;
(statearr_34816_37062[(1)] = (4));

} else {
var statearr_34817_37063 = state_34803__$1;
(statearr_34817_37063[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34804 === (11))){
var inst_34791 = cljs.core.async.close_BANG_(ch);
var state_34803__$1 = state_34803;
var statearr_34819_37065 = state_34803__$1;
(statearr_34819_37065[(2)] = inst_34791);

(statearr_34819_37065[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34804 === (9))){
var state_34803__$1 = state_34803;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34820_37070 = state_34803__$1;
(statearr_34820_37070[(1)] = (11));

} else {
var statearr_34822_37073 = state_34803__$1;
(statearr_34822_37073[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34804 === (5))){
var inst_34777 = (state_34803[(7)]);
var state_34803__$1 = state_34803;
var statearr_34824_37077 = state_34803__$1;
(statearr_34824_37077[(2)] = inst_34777);

(statearr_34824_37077[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34804 === (10))){
var inst_34796 = (state_34803[(2)]);
var state_34803__$1 = state_34803;
var statearr_34827_37081 = state_34803__$1;
(statearr_34827_37081[(2)] = inst_34796);

(statearr_34827_37081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34804 === (8))){
var inst_34777 = (state_34803[(7)]);
var inst_34787 = cljs.core.next(inst_34777);
var inst_34777__$1 = inst_34787;
var state_34803__$1 = (function (){var statearr_34829 = state_34803;
(statearr_34829[(7)] = inst_34777__$1);

return statearr_34829;
})();
var statearr_34830_37084 = state_34803__$1;
(statearr_34830_37084[(2)] = null);

(statearr_34830_37084[(1)] = (2));


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
var statearr_34831 = [null,null,null,null,null,null,null,null];
(statearr_34831[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34831[(1)] = (1));

return statearr_34831;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34803){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34803);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34832){if((e34832 instanceof Object)){
var ex__34210__auto__ = e34832;
var statearr_34833_37092 = state_34803;
(statearr_34833_37092[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34832;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37095 = state_34803;
state_34803 = G__37095;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34803){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34834 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34834[(6)] = c__34273__auto__);

return statearr_34834;
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
var c__34273__auto___37139 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34984){
var state_val_34987 = (state_34984[(1)]);
if((state_val_34987 === (7))){
var inst_34980 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_34992_37143 = state_34984__$1;
(statearr_34992_37143[(2)] = inst_34980);

(statearr_34992_37143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (20))){
var inst_34877 = (state_34984[(7)]);
var inst_34889 = cljs.core.first(inst_34877);
var inst_34890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34889,(0),null);
var inst_34891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34889,(1),null);
var state_34984__$1 = (function (){var statearr_34993 = state_34984;
(statearr_34993[(8)] = inst_34890);

return statearr_34993;
})();
if(cljs.core.truth_(inst_34891)){
var statearr_34994_37150 = state_34984__$1;
(statearr_34994_37150[(1)] = (22));

} else {
var statearr_34995_37152 = state_34984__$1;
(statearr_34995_37152[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (27))){
var inst_34846 = (state_34984[(9)]);
var inst_34926 = (state_34984[(10)]);
var inst_34919 = (state_34984[(11)]);
var inst_34921 = (state_34984[(12)]);
var inst_34926__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34919,inst_34921);
var inst_34927 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34926__$1,inst_34846,done);
var state_34984__$1 = (function (){var statearr_34996 = state_34984;
(statearr_34996[(10)] = inst_34926__$1);

return statearr_34996;
})();
if(cljs.core.truth_(inst_34927)){
var statearr_34997_37154 = state_34984__$1;
(statearr_34997_37154[(1)] = (30));

} else {
var statearr_34998_37155 = state_34984__$1;
(statearr_34998_37155[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (1))){
var state_34984__$1 = state_34984;
var statearr_34999_37158 = state_34984__$1;
(statearr_34999_37158[(2)] = null);

(statearr_34999_37158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (24))){
var inst_34877 = (state_34984[(7)]);
var inst_34896 = (state_34984[(2)]);
var inst_34897 = cljs.core.next(inst_34877);
var inst_34855 = inst_34897;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34984__$1 = (function (){var statearr_35003 = state_34984;
(statearr_35003[(13)] = inst_34857);

(statearr_35003[(14)] = inst_34856);

(statearr_35003[(15)] = inst_34858);

(statearr_35003[(16)] = inst_34896);

(statearr_35003[(17)] = inst_34855);

return statearr_35003;
})();
var statearr_35005_37163 = state_34984__$1;
(statearr_35005_37163[(2)] = null);

(statearr_35005_37163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (39))){
var state_34984__$1 = state_34984;
var statearr_35011_37168 = state_34984__$1;
(statearr_35011_37168[(2)] = null);

(statearr_35011_37168[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (4))){
var inst_34846 = (state_34984[(9)]);
var inst_34846__$1 = (state_34984[(2)]);
var inst_34847 = (inst_34846__$1 == null);
var state_34984__$1 = (function (){var statearr_35012 = state_34984;
(statearr_35012[(9)] = inst_34846__$1);

return statearr_35012;
})();
if(cljs.core.truth_(inst_34847)){
var statearr_35013_37170 = state_34984__$1;
(statearr_35013_37170[(1)] = (5));

} else {
var statearr_35014_37172 = state_34984__$1;
(statearr_35014_37172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (15))){
var inst_34857 = (state_34984[(13)]);
var inst_34856 = (state_34984[(14)]);
var inst_34858 = (state_34984[(15)]);
var inst_34855 = (state_34984[(17)]);
var inst_34873 = (state_34984[(2)]);
var inst_34874 = (inst_34858 + (1));
var tmp35008 = inst_34857;
var tmp35009 = inst_34856;
var tmp35010 = inst_34855;
var inst_34855__$1 = tmp35010;
var inst_34856__$1 = tmp35009;
var inst_34857__$1 = tmp35008;
var inst_34858__$1 = inst_34874;
var state_34984__$1 = (function (){var statearr_35016 = state_34984;
(statearr_35016[(18)] = inst_34873);

(statearr_35016[(13)] = inst_34857__$1);

(statearr_35016[(14)] = inst_34856__$1);

(statearr_35016[(15)] = inst_34858__$1);

(statearr_35016[(17)] = inst_34855__$1);

return statearr_35016;
})();
var statearr_35018_37175 = state_34984__$1;
(statearr_35018_37175[(2)] = null);

(statearr_35018_37175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (21))){
var inst_34900 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35025_37177 = state_34984__$1;
(statearr_35025_37177[(2)] = inst_34900);

(statearr_35025_37177[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (31))){
var inst_34926 = (state_34984[(10)]);
var inst_34930 = done(null);
var inst_34931 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34926);
var state_34984__$1 = (function (){var statearr_35027 = state_34984;
(statearr_35027[(19)] = inst_34930);

return statearr_35027;
})();
var statearr_35028_37183 = state_34984__$1;
(statearr_35028_37183[(2)] = inst_34931);

(statearr_35028_37183[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (32))){
var inst_34918 = (state_34984[(20)]);
var inst_34919 = (state_34984[(11)]);
var inst_34920 = (state_34984[(21)]);
var inst_34921 = (state_34984[(12)]);
var inst_34933 = (state_34984[(2)]);
var inst_34934 = (inst_34921 + (1));
var tmp35021 = inst_34918;
var tmp35022 = inst_34919;
var tmp35023 = inst_34920;
var inst_34918__$1 = tmp35021;
var inst_34919__$1 = tmp35022;
var inst_34920__$1 = tmp35023;
var inst_34921__$1 = inst_34934;
var state_34984__$1 = (function (){var statearr_35033 = state_34984;
(statearr_35033[(20)] = inst_34918__$1);

(statearr_35033[(22)] = inst_34933);

(statearr_35033[(11)] = inst_34919__$1);

(statearr_35033[(21)] = inst_34920__$1);

(statearr_35033[(12)] = inst_34921__$1);

return statearr_35033;
})();
var statearr_35046_37189 = state_34984__$1;
(statearr_35046_37189[(2)] = null);

(statearr_35046_37189[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (40))){
var inst_34948 = (state_34984[(23)]);
var inst_34952 = done(null);
var inst_34953 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34948);
var state_34984__$1 = (function (){var statearr_35050 = state_34984;
(statearr_35050[(24)] = inst_34952);

return statearr_35050;
})();
var statearr_35051_37190 = state_34984__$1;
(statearr_35051_37190[(2)] = inst_34953);

(statearr_35051_37190[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (33))){
var inst_34937 = (state_34984[(25)]);
var inst_34939 = cljs.core.chunked_seq_QMARK_(inst_34937);
var state_34984__$1 = state_34984;
if(inst_34939){
var statearr_35054_37197 = state_34984__$1;
(statearr_35054_37197[(1)] = (36));

} else {
var statearr_35057_37198 = state_34984__$1;
(statearr_35057_37198[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (13))){
var inst_34867 = (state_34984[(26)]);
var inst_34870 = cljs.core.async.close_BANG_(inst_34867);
var state_34984__$1 = state_34984;
var statearr_35058_37199 = state_34984__$1;
(statearr_35058_37199[(2)] = inst_34870);

(statearr_35058_37199[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (22))){
var inst_34890 = (state_34984[(8)]);
var inst_34893 = cljs.core.async.close_BANG_(inst_34890);
var state_34984__$1 = state_34984;
var statearr_35061_37204 = state_34984__$1;
(statearr_35061_37204[(2)] = inst_34893);

(statearr_35061_37204[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (36))){
var inst_34937 = (state_34984[(25)]);
var inst_34941 = cljs.core.chunk_first(inst_34937);
var inst_34943 = cljs.core.chunk_rest(inst_34937);
var inst_34945 = cljs.core.count(inst_34941);
var inst_34918 = inst_34943;
var inst_34919 = inst_34941;
var inst_34920 = inst_34945;
var inst_34921 = (0);
var state_34984__$1 = (function (){var statearr_35069 = state_34984;
(statearr_35069[(20)] = inst_34918);

(statearr_35069[(11)] = inst_34919);

(statearr_35069[(21)] = inst_34920);

(statearr_35069[(12)] = inst_34921);

return statearr_35069;
})();
var statearr_35075_37212 = state_34984__$1;
(statearr_35075_37212[(2)] = null);

(statearr_35075_37212[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (41))){
var inst_34937 = (state_34984[(25)]);
var inst_34955 = (state_34984[(2)]);
var inst_34956 = cljs.core.next(inst_34937);
var inst_34918 = inst_34956;
var inst_34919 = null;
var inst_34920 = (0);
var inst_34921 = (0);
var state_34984__$1 = (function (){var statearr_35081 = state_34984;
(statearr_35081[(20)] = inst_34918);

(statearr_35081[(11)] = inst_34919);

(statearr_35081[(27)] = inst_34955);

(statearr_35081[(21)] = inst_34920);

(statearr_35081[(12)] = inst_34921);

return statearr_35081;
})();
var statearr_35085_37219 = state_34984__$1;
(statearr_35085_37219[(2)] = null);

(statearr_35085_37219[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (43))){
var state_34984__$1 = state_34984;
var statearr_35091_37221 = state_34984__$1;
(statearr_35091_37221[(2)] = null);

(statearr_35091_37221[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (29))){
var inst_34964 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35097_37226 = state_34984__$1;
(statearr_35097_37226[(2)] = inst_34964);

(statearr_35097_37226[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (44))){
var inst_34977 = (state_34984[(2)]);
var state_34984__$1 = (function (){var statearr_35102 = state_34984;
(statearr_35102[(28)] = inst_34977);

return statearr_35102;
})();
var statearr_35105_37230 = state_34984__$1;
(statearr_35105_37230[(2)] = null);

(statearr_35105_37230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (6))){
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
var state_34984__$1 = (function (){var statearr_35114 = state_34984;
(statearr_35114[(20)] = inst_34918);

(statearr_35114[(29)] = inst_34910__$1);

(statearr_35114[(11)] = inst_34919);

(statearr_35114[(21)] = inst_34920);

(statearr_35114[(12)] = inst_34921);

(statearr_35114[(30)] = inst_34912);

return statearr_35114;
})();
var statearr_35120_37246 = state_34984__$1;
(statearr_35120_37246[(2)] = null);

(statearr_35120_37246[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (28))){
var inst_34918 = (state_34984[(20)]);
var inst_34937 = (state_34984[(25)]);
var inst_34937__$1 = cljs.core.seq(inst_34918);
var state_34984__$1 = (function (){var statearr_35126 = state_34984;
(statearr_35126[(25)] = inst_34937__$1);

return statearr_35126;
})();
if(inst_34937__$1){
var statearr_35130_37247 = state_34984__$1;
(statearr_35130_37247[(1)] = (33));

} else {
var statearr_35131_37248 = state_34984__$1;
(statearr_35131_37248[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (25))){
var inst_34920 = (state_34984[(21)]);
var inst_34921 = (state_34984[(12)]);
var inst_34923 = (inst_34921 < inst_34920);
var inst_34924 = inst_34923;
var state_34984__$1 = state_34984;
if(cljs.core.truth_(inst_34924)){
var statearr_35137_37249 = state_34984__$1;
(statearr_35137_37249[(1)] = (27));

} else {
var statearr_35141_37250 = state_34984__$1;
(statearr_35141_37250[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (34))){
var state_34984__$1 = state_34984;
var statearr_35153_37253 = state_34984__$1;
(statearr_35153_37253[(2)] = null);

(statearr_35153_37253[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (17))){
var state_34984__$1 = state_34984;
var statearr_35154_37256 = state_34984__$1;
(statearr_35154_37256[(2)] = null);

(statearr_35154_37256[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (3))){
var inst_34982 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34984__$1,inst_34982);
} else {
if((state_val_34987 === (12))){
var inst_34905 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35155_37257 = state_34984__$1;
(statearr_35155_37257[(2)] = inst_34905);

(statearr_35155_37257[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (2))){
var state_34984__$1 = state_34984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34984__$1,(4),ch);
} else {
if((state_val_34987 === (23))){
var state_34984__$1 = state_34984;
var statearr_35158_37259 = state_34984__$1;
(statearr_35158_37259[(2)] = null);

(statearr_35158_37259[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (35))){
var inst_34962 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35159_37261 = state_34984__$1;
(statearr_35159_37261[(2)] = inst_34962);

(statearr_35159_37261[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (19))){
var inst_34877 = (state_34984[(7)]);
var inst_34881 = cljs.core.chunk_first(inst_34877);
var inst_34882 = cljs.core.chunk_rest(inst_34877);
var inst_34883 = cljs.core.count(inst_34881);
var inst_34855 = inst_34882;
var inst_34856 = inst_34881;
var inst_34857 = inst_34883;
var inst_34858 = (0);
var state_34984__$1 = (function (){var statearr_35162 = state_34984;
(statearr_35162[(13)] = inst_34857);

(statearr_35162[(14)] = inst_34856);

(statearr_35162[(15)] = inst_34858);

(statearr_35162[(17)] = inst_34855);

return statearr_35162;
})();
var statearr_35183_37267 = state_34984__$1;
(statearr_35183_37267[(2)] = null);

(statearr_35183_37267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (11))){
var inst_34855 = (state_34984[(17)]);
var inst_34877 = (state_34984[(7)]);
var inst_34877__$1 = cljs.core.seq(inst_34855);
var state_34984__$1 = (function (){var statearr_35187 = state_34984;
(statearr_35187[(7)] = inst_34877__$1);

return statearr_35187;
})();
if(inst_34877__$1){
var statearr_35188_37269 = state_34984__$1;
(statearr_35188_37269[(1)] = (16));

} else {
var statearr_35191_37273 = state_34984__$1;
(statearr_35191_37273[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (9))){
var inst_34907 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35194_37275 = state_34984__$1;
(statearr_35194_37275[(2)] = inst_34907);

(statearr_35194_37275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (5))){
var inst_34853 = cljs.core.deref(cs);
var inst_34854 = cljs.core.seq(inst_34853);
var inst_34855 = inst_34854;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34984__$1 = (function (){var statearr_35195 = state_34984;
(statearr_35195[(13)] = inst_34857);

(statearr_35195[(14)] = inst_34856);

(statearr_35195[(15)] = inst_34858);

(statearr_35195[(17)] = inst_34855);

return statearr_35195;
})();
var statearr_35197_37278 = state_34984__$1;
(statearr_35197_37278[(2)] = null);

(statearr_35197_37278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (14))){
var state_34984__$1 = state_34984;
var statearr_35201_37282 = state_34984__$1;
(statearr_35201_37282[(2)] = null);

(statearr_35201_37282[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (45))){
var inst_34974 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35207_37283 = state_34984__$1;
(statearr_35207_37283[(2)] = inst_34974);

(statearr_35207_37283[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (26))){
var inst_34910 = (state_34984[(29)]);
var inst_34966 = (state_34984[(2)]);
var inst_34971 = cljs.core.seq(inst_34910);
var state_34984__$1 = (function (){var statearr_35213 = state_34984;
(statearr_35213[(31)] = inst_34966);

return statearr_35213;
})();
if(inst_34971){
var statearr_35215_37288 = state_34984__$1;
(statearr_35215_37288[(1)] = (42));

} else {
var statearr_35221_37289 = state_34984__$1;
(statearr_35221_37289[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (16))){
var inst_34877 = (state_34984[(7)]);
var inst_34879 = cljs.core.chunked_seq_QMARK_(inst_34877);
var state_34984__$1 = state_34984;
if(inst_34879){
var statearr_35229_37291 = state_34984__$1;
(statearr_35229_37291[(1)] = (19));

} else {
var statearr_35231_37294 = state_34984__$1;
(statearr_35231_37294[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (38))){
var inst_34959 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35235_37297 = state_34984__$1;
(statearr_35235_37297[(2)] = inst_34959);

(statearr_35235_37297[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (30))){
var state_34984__$1 = state_34984;
var statearr_35240_37302 = state_34984__$1;
(statearr_35240_37302[(2)] = null);

(statearr_35240_37302[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (10))){
var inst_34856 = (state_34984[(14)]);
var inst_34858 = (state_34984[(15)]);
var inst_34866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34856,inst_34858);
var inst_34867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(0),null);
var inst_34868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(1),null);
var state_34984__$1 = (function (){var statearr_35247 = state_34984;
(statearr_35247[(26)] = inst_34867);

return statearr_35247;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_35251_37309 = state_34984__$1;
(statearr_35251_37309[(1)] = (13));

} else {
var statearr_35254_37311 = state_34984__$1;
(statearr_35254_37311[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (18))){
var inst_34903 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35258_37313 = state_34984__$1;
(statearr_35258_37313[(2)] = inst_34903);

(statearr_35258_37313[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (42))){
var state_34984__$1 = state_34984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34984__$1,(45),dchan);
} else {
if((state_val_34987 === (37))){
var inst_34846 = (state_34984[(9)]);
var inst_34937 = (state_34984[(25)]);
var inst_34948 = (state_34984[(23)]);
var inst_34948__$1 = cljs.core.first(inst_34937);
var inst_34949 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34948__$1,inst_34846,done);
var state_34984__$1 = (function (){var statearr_35267 = state_34984;
(statearr_35267[(23)] = inst_34948__$1);

return statearr_35267;
})();
if(cljs.core.truth_(inst_34949)){
var statearr_35271_37320 = state_34984__$1;
(statearr_35271_37320[(1)] = (39));

} else {
var statearr_35274_37322 = state_34984__$1;
(statearr_35274_37322[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34987 === (8))){
var inst_34857 = (state_34984[(13)]);
var inst_34858 = (state_34984[(15)]);
var inst_34860 = (inst_34858 < inst_34857);
var inst_34861 = inst_34860;
var state_34984__$1 = state_34984;
if(cljs.core.truth_(inst_34861)){
var statearr_35279_37326 = state_34984__$1;
(statearr_35279_37326[(1)] = (10));

} else {
var statearr_35283_37328 = state_34984__$1;
(statearr_35283_37328[(1)] = (11));

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
var statearr_35292 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35292[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35292[(1)] = (1));

return statearr_35292;
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
}catch (e35297){if((e35297 instanceof Object)){
var ex__34210__auto__ = e35297;
var statearr_35300_37333 = state_34984;
(statearr_35300_37333[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35297;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37334 = state_34984;
state_34984 = G__37334;
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
var state__34275__auto__ = (function (){var statearr_35308 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_35308[(6)] = c__34273__auto___37139);

return statearr_35308;
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
var G__35321 = arguments.length;
switch (G__35321) {
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
var len__4789__auto___37372 = arguments.length;
var i__4790__auto___37375 = (0);
while(true){
if((i__4790__auto___37375 < len__4789__auto___37372)){
args__4795__auto__.push((arguments[i__4790__auto___37375]));

var G__37379 = (i__4790__auto___37375 + (1));
i__4790__auto___37375 = G__37379;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35397){
var map__35401 = p__35397;
var map__35401__$1 = (((((!((map__35401 == null))))?(((((map__35401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35401):map__35401);
var opts = map__35401__$1;
var statearr_35405_37384 = state;
(statearr_35405_37384[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35410_37386 = state;
(statearr_35410_37386[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35411_37391 = state;
(statearr_35411_37391[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35389){
var G__35390 = cljs.core.first(seq35389);
var seq35389__$1 = cljs.core.next(seq35389);
var G__35391 = cljs.core.first(seq35389__$1);
var seq35389__$2 = cljs.core.next(seq35389__$1);
var G__35392 = cljs.core.first(seq35389__$2);
var seq35389__$3 = cljs.core.next(seq35389__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35390,G__35391,G__35392,seq35389__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35454 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35454 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35455){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35455 = meta35455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35456,meta35455__$1){
var self__ = this;
var _35456__$1 = this;
return (new cljs.core.async.t_cljs$core$async35454(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35455__$1));
}));

(cljs.core.async.t_cljs$core$async35454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35456){
var self__ = this;
var _35456__$1 = this;
return self__.meta35455;
}));

(cljs.core.async.t_cljs$core$async35454.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35454.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35454.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35454.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35454.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35454.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35454.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35454.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35454.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35455","meta35455",-1670899727,null)], null);
}));

(cljs.core.async.t_cljs$core$async35454.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35454.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35454");

(cljs.core.async.t_cljs$core$async35454.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35454");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35454.
 */
cljs.core.async.__GT_t_cljs$core$async35454 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35454(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35455){
return (new cljs.core.async.t_cljs$core$async35454(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35455));
});

}

return (new cljs.core.async.t_cljs$core$async35454(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34273__auto___37434 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_35673){
var state_val_35674 = (state_35673[(1)]);
if((state_val_35674 === (7))){
var inst_35542 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
var statearr_35675_37437 = state_35673__$1;
(statearr_35675_37437[(2)] = inst_35542);

(statearr_35675_37437[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (20))){
var inst_35555 = (state_35673[(7)]);
var state_35673__$1 = state_35673;
var statearr_35676_37439 = state_35673__$1;
(statearr_35676_37439[(2)] = inst_35555);

(statearr_35676_37439[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (27))){
var state_35673__$1 = state_35673;
var statearr_35679_37443 = state_35673__$1;
(statearr_35679_37443[(2)] = null);

(statearr_35679_37443[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (1))){
var inst_35520 = (state_35673[(8)]);
var inst_35520__$1 = calc_state();
var inst_35526 = (inst_35520__$1 == null);
var inst_35527 = cljs.core.not(inst_35526);
var state_35673__$1 = (function (){var statearr_35680 = state_35673;
(statearr_35680[(8)] = inst_35520__$1);

return statearr_35680;
})();
if(inst_35527){
var statearr_35681_37447 = state_35673__$1;
(statearr_35681_37447[(1)] = (2));

} else {
var statearr_35682_37448 = state_35673__$1;
(statearr_35682_37448[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (24))){
var inst_35596 = (state_35673[(9)]);
var inst_35610 = (state_35673[(10)]);
var inst_35642 = (state_35673[(11)]);
var inst_35642__$1 = (inst_35596.cljs$core$IFn$_invoke$arity$1 ? inst_35596.cljs$core$IFn$_invoke$arity$1(inst_35610) : inst_35596.call(null,inst_35610));
var state_35673__$1 = (function (){var statearr_35685 = state_35673;
(statearr_35685[(11)] = inst_35642__$1);

return statearr_35685;
})();
if(cljs.core.truth_(inst_35642__$1)){
var statearr_35686_37450 = state_35673__$1;
(statearr_35686_37450[(1)] = (29));

} else {
var statearr_35687_37452 = state_35673__$1;
(statearr_35687_37452[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (4))){
var inst_35545 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35545)){
var statearr_35688_37456 = state_35673__$1;
(statearr_35688_37456[(1)] = (8));

} else {
var statearr_35689_37457 = state_35673__$1;
(statearr_35689_37457[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (15))){
var inst_35589 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35589)){
var statearr_35692_37458 = state_35673__$1;
(statearr_35692_37458[(1)] = (19));

} else {
var statearr_35694_37459 = state_35673__$1;
(statearr_35694_37459[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (21))){
var inst_35594 = (state_35673[(12)]);
var inst_35594__$1 = (state_35673[(2)]);
var inst_35596 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35594__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35598 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35594__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35599 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35594__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35673__$1 = (function (){var statearr_35697 = state_35673;
(statearr_35697[(13)] = inst_35598);

(statearr_35697[(9)] = inst_35596);

(statearr_35697[(12)] = inst_35594__$1);

return statearr_35697;
})();
return cljs.core.async.ioc_alts_BANG_(state_35673__$1,(22),inst_35599);
} else {
if((state_val_35674 === (31))){
var inst_35655 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35655)){
var statearr_35700_37483 = state_35673__$1;
(statearr_35700_37483[(1)] = (32));

} else {
var statearr_35702_37484 = state_35673__$1;
(statearr_35702_37484[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (32))){
var inst_35606 = (state_35673[(14)]);
var state_35673__$1 = state_35673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35673__$1,(35),out,inst_35606);
} else {
if((state_val_35674 === (33))){
var inst_35594 = (state_35673[(12)]);
var inst_35555 = inst_35594;
var state_35673__$1 = (function (){var statearr_35703 = state_35673;
(statearr_35703[(7)] = inst_35555);

return statearr_35703;
})();
var statearr_35704_37491 = state_35673__$1;
(statearr_35704_37491[(2)] = null);

(statearr_35704_37491[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (13))){
var inst_35555 = (state_35673[(7)]);
var inst_35575 = inst_35555.cljs$lang$protocol_mask$partition0$;
var inst_35576 = (inst_35575 & (64));
var inst_35578 = inst_35555.cljs$core$ISeq$;
var inst_35579 = (cljs.core.PROTOCOL_SENTINEL === inst_35578);
var inst_35580 = ((inst_35576) || (inst_35579));
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35580)){
var statearr_35707_37501 = state_35673__$1;
(statearr_35707_37501[(1)] = (16));

} else {
var statearr_35709_37502 = state_35673__$1;
(statearr_35709_37502[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (22))){
var inst_35610 = (state_35673[(10)]);
var inst_35606 = (state_35673[(14)]);
var inst_35605 = (state_35673[(2)]);
var inst_35606__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35605,(0),null);
var inst_35610__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35605,(1),null);
var inst_35613 = (inst_35606__$1 == null);
var inst_35617 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35610__$1,change);
var inst_35618 = ((inst_35613) || (inst_35617));
var state_35673__$1 = (function (){var statearr_35713 = state_35673;
(statearr_35713[(10)] = inst_35610__$1);

(statearr_35713[(14)] = inst_35606__$1);

return statearr_35713;
})();
if(cljs.core.truth_(inst_35618)){
var statearr_35714_37516 = state_35673__$1;
(statearr_35714_37516[(1)] = (23));

} else {
var statearr_35717_37517 = state_35673__$1;
(statearr_35717_37517[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (36))){
var inst_35594 = (state_35673[(12)]);
var inst_35555 = inst_35594;
var state_35673__$1 = (function (){var statearr_35719 = state_35673;
(statearr_35719[(7)] = inst_35555);

return statearr_35719;
})();
var statearr_35720_37519 = state_35673__$1;
(statearr_35720_37519[(2)] = null);

(statearr_35720_37519[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (29))){
var inst_35642 = (state_35673[(11)]);
var state_35673__$1 = state_35673;
var statearr_35722_37526 = state_35673__$1;
(statearr_35722_37526[(2)] = inst_35642);

(statearr_35722_37526[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (6))){
var state_35673__$1 = state_35673;
var statearr_35723_37528 = state_35673__$1;
(statearr_35723_37528[(2)] = false);

(statearr_35723_37528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (28))){
var inst_35636 = (state_35673[(2)]);
var inst_35638 = calc_state();
var inst_35555 = inst_35638;
var state_35673__$1 = (function (){var statearr_35724 = state_35673;
(statearr_35724[(15)] = inst_35636);

(statearr_35724[(7)] = inst_35555);

return statearr_35724;
})();
var statearr_35727_37532 = state_35673__$1;
(statearr_35727_37532[(2)] = null);

(statearr_35727_37532[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (25))){
var inst_35669 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
var statearr_35728_37537 = state_35673__$1;
(statearr_35728_37537[(2)] = inst_35669);

(statearr_35728_37537[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (34))){
var inst_35667 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
var statearr_35731_37539 = state_35673__$1;
(statearr_35731_37539[(2)] = inst_35667);

(statearr_35731_37539[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (17))){
var state_35673__$1 = state_35673;
var statearr_35732_37541 = state_35673__$1;
(statearr_35732_37541[(2)] = false);

(statearr_35732_37541[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (3))){
var state_35673__$1 = state_35673;
var statearr_35733_37547 = state_35673__$1;
(statearr_35733_37547[(2)] = false);

(statearr_35733_37547[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (12))){
var inst_35671 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35673__$1,inst_35671);
} else {
if((state_val_35674 === (2))){
var inst_35520 = (state_35673[(8)]);
var inst_35533 = inst_35520.cljs$lang$protocol_mask$partition0$;
var inst_35534 = (inst_35533 & (64));
var inst_35535 = inst_35520.cljs$core$ISeq$;
var inst_35536 = (cljs.core.PROTOCOL_SENTINEL === inst_35535);
var inst_35537 = ((inst_35534) || (inst_35536));
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35537)){
var statearr_35740_37551 = state_35673__$1;
(statearr_35740_37551[(1)] = (5));

} else {
var statearr_35741_37552 = state_35673__$1;
(statearr_35741_37552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (23))){
var inst_35606 = (state_35673[(14)]);
var inst_35620 = (inst_35606 == null);
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35620)){
var statearr_35744_37558 = state_35673__$1;
(statearr_35744_37558[(1)] = (26));

} else {
var statearr_35745_37560 = state_35673__$1;
(statearr_35745_37560[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (35))){
var inst_35658 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35658)){
var statearr_35748_37562 = state_35673__$1;
(statearr_35748_37562[(1)] = (36));

} else {
var statearr_35749_37563 = state_35673__$1;
(statearr_35749_37563[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (19))){
var inst_35555 = (state_35673[(7)]);
var inst_35591 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35555);
var state_35673__$1 = state_35673;
var statearr_35752_37567 = state_35673__$1;
(statearr_35752_37567[(2)] = inst_35591);

(statearr_35752_37567[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (11))){
var inst_35555 = (state_35673[(7)]);
var inst_35571 = (inst_35555 == null);
var inst_35572 = cljs.core.not(inst_35571);
var state_35673__$1 = state_35673;
if(inst_35572){
var statearr_35763_37573 = state_35673__$1;
(statearr_35763_37573[(1)] = (13));

} else {
var statearr_35765_37574 = state_35673__$1;
(statearr_35765_37574[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (9))){
var inst_35520 = (state_35673[(8)]);
var state_35673__$1 = state_35673;
var statearr_35769_37576 = state_35673__$1;
(statearr_35769_37576[(2)] = inst_35520);

(statearr_35769_37576[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (5))){
var state_35673__$1 = state_35673;
var statearr_35773_37579 = state_35673__$1;
(statearr_35773_37579[(2)] = true);

(statearr_35773_37579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (14))){
var state_35673__$1 = state_35673;
var statearr_35774_37587 = state_35673__$1;
(statearr_35774_37587[(2)] = false);

(statearr_35774_37587[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (26))){
var inst_35610 = (state_35673[(10)]);
var inst_35633 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35610);
var state_35673__$1 = state_35673;
var statearr_35777_37590 = state_35673__$1;
(statearr_35777_37590[(2)] = inst_35633);

(statearr_35777_37590[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (16))){
var state_35673__$1 = state_35673;
var statearr_35780_37592 = state_35673__$1;
(statearr_35780_37592[(2)] = true);

(statearr_35780_37592[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (38))){
var inst_35663 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
var statearr_35781_37595 = state_35673__$1;
(statearr_35781_37595[(2)] = inst_35663);

(statearr_35781_37595[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (30))){
var inst_35598 = (state_35673[(13)]);
var inst_35596 = (state_35673[(9)]);
var inst_35610 = (state_35673[(10)]);
var inst_35650 = cljs.core.empty_QMARK_(inst_35596);
var inst_35651 = (inst_35598.cljs$core$IFn$_invoke$arity$1 ? inst_35598.cljs$core$IFn$_invoke$arity$1(inst_35610) : inst_35598.call(null,inst_35610));
var inst_35652 = cljs.core.not(inst_35651);
var inst_35653 = ((inst_35650) && (inst_35652));
var state_35673__$1 = state_35673;
var statearr_35783_37604 = state_35673__$1;
(statearr_35783_37604[(2)] = inst_35653);

(statearr_35783_37604[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (10))){
var inst_35520 = (state_35673[(8)]);
var inst_35550 = (state_35673[(2)]);
var inst_35552 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35550,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35553 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35550,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35554 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35550,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35555 = inst_35520;
var state_35673__$1 = (function (){var statearr_35785 = state_35673;
(statearr_35785[(16)] = inst_35552);

(statearr_35785[(7)] = inst_35555);

(statearr_35785[(17)] = inst_35554);

(statearr_35785[(18)] = inst_35553);

return statearr_35785;
})();
var statearr_35787_37616 = state_35673__$1;
(statearr_35787_37616[(2)] = null);

(statearr_35787_37616[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (18))){
var inst_35586 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
var statearr_35789_37618 = state_35673__$1;
(statearr_35789_37618[(2)] = inst_35586);

(statearr_35789_37618[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (37))){
var state_35673__$1 = state_35673;
var statearr_35790_37620 = state_35673__$1;
(statearr_35790_37620[(2)] = null);

(statearr_35790_37620[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (8))){
var inst_35520 = (state_35673[(8)]);
var inst_35547 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35520);
var state_35673__$1 = state_35673;
var statearr_35793_37628 = state_35673__$1;
(statearr_35793_37628[(2)] = inst_35547);

(statearr_35793_37628[(1)] = (10));


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
var statearr_35796 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35796[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35796[(1)] = (1));

return statearr_35796;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35673){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35673);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35797){if((e35797 instanceof Object)){
var ex__34210__auto__ = e35797;
var statearr_35799_37640 = state_35673;
(statearr_35799_37640[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35797;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37643 = state_35673;
state_35673 = G__37643;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35673){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_35800 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_35800[(6)] = c__34273__auto___37434);

return statearr_35800;
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
var G__35829 = arguments.length;
switch (G__35829) {
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
var G__35846 = arguments.length;
switch (G__35846) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35839_SHARP_){
if(cljs.core.truth_((p1__35839_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35839_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35839_SHARP_.call(null,topic)))){
return p1__35839_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35839_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35853 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35853 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35854){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35854 = meta35854;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35855,meta35854__$1){
var self__ = this;
var _35855__$1 = this;
return (new cljs.core.async.t_cljs$core$async35853(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35854__$1));
}));

(cljs.core.async.t_cljs$core$async35853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35855){
var self__ = this;
var _35855__$1 = this;
return self__.meta35854;
}));

(cljs.core.async.t_cljs$core$async35853.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35853.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35853.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35853.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35853.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35853.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35853.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35853.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35854","meta35854",1380333453,null)], null);
}));

(cljs.core.async.t_cljs$core$async35853.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35853.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35853");

(cljs.core.async.t_cljs$core$async35853.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35853");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35853.
 */
cljs.core.async.__GT_t_cljs$core$async35853 = (function cljs$core$async$__GT_t_cljs$core$async35853(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35854){
return (new cljs.core.async.t_cljs$core$async35853(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35854));
});

}

return (new cljs.core.async.t_cljs$core$async35853(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34273__auto___37714 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_35964){
var state_val_35965 = (state_35964[(1)]);
if((state_val_35965 === (7))){
var inst_35960 = (state_35964[(2)]);
var state_35964__$1 = state_35964;
var statearr_35969_37715 = state_35964__$1;
(statearr_35969_37715[(2)] = inst_35960);

(statearr_35969_37715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35965 === (20))){
var state_35964__$1 = state_35964;
var statearr_35970_37718 = state_35964__$1;
(statearr_35970_37718[(2)] = null);

(statearr_35970_37718[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35965 === (1))){
var state_35964__$1 = state_35964;
var statearr_35973_37719 = state_35964__$1;
(statearr_35973_37719[(2)] = null);

(statearr_35973_37719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35965 === (24))){
var inst_35943 = (state_35964[(7)]);
var inst_35952 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35943);
var state_35964__$1 = state_35964;
var statearr_35982_37720 = state_35964__$1;
(statearr_35982_37720[(2)] = inst_35952);

(statearr_35982_37720[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35965 === (4))){
var inst_35892 = (state_35964[(8)]);
var inst_35892__$1 = (state_35964[(2)]);
var inst_35893 = (inst_35892__$1 == null);
var state_35964__$1 = (function (){var statearr_35983 = state_35964;
(statearr_35983[(8)] = inst_35892__$1);

return statearr_35983;
})();
if(cljs.core.truth_(inst_35893)){
var statearr_35985_37721 = state_35964__$1;
(statearr_35985_37721[(1)] = (5));

} else {
var statearr_35988_37722 = state_35964__$1;
(statearr_35988_37722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35965 === (15))){
var inst_35937 = (state_35964[(2)]);
var state_35964__$1 = state_35964;
var statearr_35990_37723 = state_35964__$1;
(statearr_35990_37723[(2)] = inst_35937);

(statearr_35990_37723[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35965 === (21))){
var inst_35957 = (state_35964[(2)]);
var state_35964__$1 = (function (){var statearr_35994 = state_35964;
(statearr_35994[(9)] = inst_35957);

return statearr_35994;
})();
var statearr_35996_37724 = state_35964__$1;
(statearr_35996_37724[(2)] = null);

(statearr_35996_37724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35965 === (13))){
var inst_35916 = (state_35964[(10)]);
var inst_35920 = cljs.core.chunked_seq_QMARK_(inst_35916);
var state_35964__$1 = state_35964;
if(inst_35920){
var statearr_35998_37725 = state_35964__$1;
(statearr_35998_37725[(1)] = (16));

} else {
var statearr_35999_37726 = state_35964__$1;
(statearr_35999_37726[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35965 === (22))){
var inst_35949 = (state_35964[(2)]);
var state_35964__$1 = state_35964;
if(cljs.core.truth_(inst_35949)){
var statearr_36003_37727 = state_35964__$1;
(statearr_36003_37727[(1)] = (23));

} else {
var statearr_36004_37732 = state_35964__$1;
(statearr_36004_37732[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35965 === (6))){
var inst_35892 = (state_35964[(8)]);
var inst_35943 = (state_35964[(7)]);
var inst_35945 = (state_35964[(11)]);
var inst_35943__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35892) : topic_fn.call(null,inst_35892));
var inst_35944 = cljs.core.deref(mults);
var inst_35945__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35944,inst_35943__$1);
var state_35964__$1 = (function (){var statearr_36009 = state_35964;
(statearr_36009[(7)] = inst_35943__$1);

(statearr_36009[(11)] = inst_35945__$1);

return statearr_36009;
})();
if(cljs.core.truth_(inst_35945__$1)){
var statearr_36010_37736 = state_35964__$1;
(statearr_36010_37736[(1)] = (19));

} else {
var statearr_36011_37737 = state_35964__$1;
(statearr_36011_37737[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35965 === (25))){
var inst_35954 = (state_35964[(2)]);
var state_35964__$1 = state_35964;
var statearr_36012_37738 = state_35964__$1;
(statearr_36012_37738[(2)] = inst_35954);

(statearr_36012_37738[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35965 === (17))){
var inst_35916 = (state_35964[(10)]);
var inst_35927 = cljs.core.first(inst_35916);
var inst_35928 = cljs.core.async.muxch_STAR_(inst_35927);
var inst_35929 = cljs.core.async.close_BANG_(inst_35928);
var inst_35930 = cljs.core.next(inst_35916);
var inst_35902 = inst_35930;
var inst_35903 = null;
var inst_35904 = (0);
var inst_35905 = (0);
var state_35964__$1 = (function (){var statearr_36015 = state_35964;
(statearr_36015[(12)] = inst_35903);

(statearr_36015[(13)] = inst_35905);

(statearr_36015[(14)] = inst_35929);

(statearr_36015[(15)] = inst_35904);

(statearr_36015[(16)] = inst_35902);

return statearr_36015;
})();
var statearr_36016_37741 = state_35964__$1;
(statearr_36016_37741[(2)] = null);

(statearr_36016_37741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35965 === (3))){
var inst_35962 = (state_35964[(2)]);
var state_35964__$1 = state_35964;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35964__$1,inst_35962);
} else {
if((state_val_35965 === (12))){
var inst_35939 = (state_35964[(2)]);
var state_35964__$1 = state_35964;
var statearr_36020_37742 = state_35964__$1;
(statearr_36020_37742[(2)] = inst_35939);

(statearr_36020_37742[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35965 === (2))){
var state_35964__$1 = state_35964;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35964__$1,(4),ch);
} else {
if((state_val_35965 === (23))){
var state_35964__$1 = state_35964;
var statearr_36022_37747 = state_35964__$1;
(statearr_36022_37747[(2)] = null);

(statearr_36022_37747[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35965 === (19))){
var inst_35892 = (state_35964[(8)]);
var inst_35945 = (state_35964[(11)]);
var inst_35947 = cljs.core.async.muxch_STAR_(inst_35945);
var state_35964__$1 = state_35964;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35964__$1,(22),inst_35947,inst_35892);
} else {
if((state_val_35965 === (11))){
var inst_35916 = (state_35964[(10)]);
var inst_35902 = (state_35964[(16)]);
var inst_35916__$1 = cljs.core.seq(inst_35902);
var state_35964__$1 = (function (){var statearr_36024 = state_35964;
(statearr_36024[(10)] = inst_35916__$1);

return statearr_36024;
})();
if(inst_35916__$1){
var statearr_36027_37757 = state_35964__$1;
(statearr_36027_37757[(1)] = (13));

} else {
var statearr_36028_37758 = state_35964__$1;
(statearr_36028_37758[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35965 === (9))){
var inst_35941 = (state_35964[(2)]);
var state_35964__$1 = state_35964;
var statearr_36030_37760 = state_35964__$1;
(statearr_36030_37760[(2)] = inst_35941);

(statearr_36030_37760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35965 === (5))){
var inst_35899 = cljs.core.deref(mults);
var inst_35900 = cljs.core.vals(inst_35899);
var inst_35901 = cljs.core.seq(inst_35900);
var inst_35902 = inst_35901;
var inst_35903 = null;
var inst_35904 = (0);
var inst_35905 = (0);
var state_35964__$1 = (function (){var statearr_36031 = state_35964;
(statearr_36031[(12)] = inst_35903);

(statearr_36031[(13)] = inst_35905);

(statearr_36031[(15)] = inst_35904);

(statearr_36031[(16)] = inst_35902);

return statearr_36031;
})();
var statearr_36032_37764 = state_35964__$1;
(statearr_36032_37764[(2)] = null);

(statearr_36032_37764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35965 === (14))){
var state_35964__$1 = state_35964;
var statearr_36036_37766 = state_35964__$1;
(statearr_36036_37766[(2)] = null);

(statearr_36036_37766[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35965 === (16))){
var inst_35916 = (state_35964[(10)]);
var inst_35922 = cljs.core.chunk_first(inst_35916);
var inst_35923 = cljs.core.chunk_rest(inst_35916);
var inst_35924 = cljs.core.count(inst_35922);
var inst_35902 = inst_35923;
var inst_35903 = inst_35922;
var inst_35904 = inst_35924;
var inst_35905 = (0);
var state_35964__$1 = (function (){var statearr_36037 = state_35964;
(statearr_36037[(12)] = inst_35903);

(statearr_36037[(13)] = inst_35905);

(statearr_36037[(15)] = inst_35904);

(statearr_36037[(16)] = inst_35902);

return statearr_36037;
})();
var statearr_36038_37775 = state_35964__$1;
(statearr_36038_37775[(2)] = null);

(statearr_36038_37775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35965 === (10))){
var inst_35903 = (state_35964[(12)]);
var inst_35905 = (state_35964[(13)]);
var inst_35904 = (state_35964[(15)]);
var inst_35902 = (state_35964[(16)]);
var inst_35910 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35903,inst_35905);
var inst_35911 = cljs.core.async.muxch_STAR_(inst_35910);
var inst_35912 = cljs.core.async.close_BANG_(inst_35911);
var inst_35913 = (inst_35905 + (1));
var tmp36033 = inst_35903;
var tmp36034 = inst_35904;
var tmp36035 = inst_35902;
var inst_35902__$1 = tmp36035;
var inst_35903__$1 = tmp36033;
var inst_35904__$1 = tmp36034;
var inst_35905__$1 = inst_35913;
var state_35964__$1 = (function (){var statearr_36039 = state_35964;
(statearr_36039[(17)] = inst_35912);

(statearr_36039[(12)] = inst_35903__$1);

(statearr_36039[(13)] = inst_35905__$1);

(statearr_36039[(15)] = inst_35904__$1);

(statearr_36039[(16)] = inst_35902__$1);

return statearr_36039;
})();
var statearr_36040_37785 = state_35964__$1;
(statearr_36040_37785[(2)] = null);

(statearr_36040_37785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35965 === (18))){
var inst_35934 = (state_35964[(2)]);
var state_35964__$1 = state_35964;
var statearr_36041_37786 = state_35964__$1;
(statearr_36041_37786[(2)] = inst_35934);

(statearr_36041_37786[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35965 === (8))){
var inst_35905 = (state_35964[(13)]);
var inst_35904 = (state_35964[(15)]);
var inst_35907 = (inst_35905 < inst_35904);
var inst_35908 = inst_35907;
var state_35964__$1 = state_35964;
if(cljs.core.truth_(inst_35908)){
var statearr_36042_37789 = state_35964__$1;
(statearr_36042_37789[(1)] = (10));

} else {
var statearr_36043_37790 = state_35964__$1;
(statearr_36043_37790[(1)] = (11));

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
var statearr_36044 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36044[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36044[(1)] = (1));

return statearr_36044;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35964){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35964);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36045){if((e36045 instanceof Object)){
var ex__34210__auto__ = e36045;
var statearr_36047_37799 = state_35964;
(statearr_36047_37799[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36045;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37800 = state_35964;
state_35964 = G__37800;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35964){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36048 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36048[(6)] = c__34273__auto___37714);

return statearr_36048;
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
var G__36051 = arguments.length;
switch (G__36051) {
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
var G__36057 = arguments.length;
switch (G__36057) {
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
var G__36062 = arguments.length;
switch (G__36062) {
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
var c__34273__auto___37835 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36109){
var state_val_36110 = (state_36109[(1)]);
if((state_val_36110 === (7))){
var state_36109__$1 = state_36109;
var statearr_36111_37841 = state_36109__$1;
(statearr_36111_37841[(2)] = null);

(statearr_36111_37841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36110 === (1))){
var state_36109__$1 = state_36109;
var statearr_36112_37845 = state_36109__$1;
(statearr_36112_37845[(2)] = null);

(statearr_36112_37845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36110 === (4))){
var inst_36067 = (state_36109[(7)]);
var inst_36069 = (inst_36067 < cnt);
var state_36109__$1 = state_36109;
if(cljs.core.truth_(inst_36069)){
var statearr_36113_37846 = state_36109__$1;
(statearr_36113_37846[(1)] = (6));

} else {
var statearr_36114_37848 = state_36109__$1;
(statearr_36114_37848[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36110 === (15))){
var inst_36105 = (state_36109[(2)]);
var state_36109__$1 = state_36109;
var statearr_36115_37850 = state_36109__$1;
(statearr_36115_37850[(2)] = inst_36105);

(statearr_36115_37850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36110 === (13))){
var inst_36098 = cljs.core.async.close_BANG_(out);
var state_36109__$1 = state_36109;
var statearr_36117_37854 = state_36109__$1;
(statearr_36117_37854[(2)] = inst_36098);

(statearr_36117_37854[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36110 === (6))){
var state_36109__$1 = state_36109;
var statearr_36118_37856 = state_36109__$1;
(statearr_36118_37856[(2)] = null);

(statearr_36118_37856[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36110 === (3))){
var inst_36107 = (state_36109[(2)]);
var state_36109__$1 = state_36109;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36109__$1,inst_36107);
} else {
if((state_val_36110 === (12))){
var inst_36095 = (state_36109[(8)]);
var inst_36095__$1 = (state_36109[(2)]);
var inst_36096 = cljs.core.some(cljs.core.nil_QMARK_,inst_36095__$1);
var state_36109__$1 = (function (){var statearr_36124 = state_36109;
(statearr_36124[(8)] = inst_36095__$1);

return statearr_36124;
})();
if(cljs.core.truth_(inst_36096)){
var statearr_36125_37864 = state_36109__$1;
(statearr_36125_37864[(1)] = (13));

} else {
var statearr_36126_37865 = state_36109__$1;
(statearr_36126_37865[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36110 === (2))){
var inst_36066 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36067 = (0);
var state_36109__$1 = (function (){var statearr_36127 = state_36109;
(statearr_36127[(9)] = inst_36066);

(statearr_36127[(7)] = inst_36067);

return statearr_36127;
})();
var statearr_36128_37870 = state_36109__$1;
(statearr_36128_37870[(2)] = null);

(statearr_36128_37870[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36110 === (11))){
var inst_36067 = (state_36109[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36109,(10),Object,null,(9));
var inst_36080 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36067) : chs__$1.call(null,inst_36067));
var inst_36081 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36067) : done.call(null,inst_36067));
var inst_36082 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36080,inst_36081);
var state_36109__$1 = state_36109;
var statearr_36129_37876 = state_36109__$1;
(statearr_36129_37876[(2)] = inst_36082);


cljs.core.async.impl.ioc_helpers.process_exception(state_36109__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36110 === (9))){
var inst_36067 = (state_36109[(7)]);
var inst_36086 = (state_36109[(2)]);
var inst_36087 = (inst_36067 + (1));
var inst_36067__$1 = inst_36087;
var state_36109__$1 = (function (){var statearr_36130 = state_36109;
(statearr_36130[(10)] = inst_36086);

(statearr_36130[(7)] = inst_36067__$1);

return statearr_36130;
})();
var statearr_36131_37881 = state_36109__$1;
(statearr_36131_37881[(2)] = null);

(statearr_36131_37881[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36110 === (5))){
var inst_36093 = (state_36109[(2)]);
var state_36109__$1 = (function (){var statearr_36132 = state_36109;
(statearr_36132[(11)] = inst_36093);

return statearr_36132;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36109__$1,(12),dchan);
} else {
if((state_val_36110 === (14))){
var inst_36095 = (state_36109[(8)]);
var inst_36100 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36095);
var state_36109__$1 = state_36109;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36109__$1,(16),out,inst_36100);
} else {
if((state_val_36110 === (16))){
var inst_36102 = (state_36109[(2)]);
var state_36109__$1 = (function (){var statearr_36133 = state_36109;
(statearr_36133[(12)] = inst_36102);

return statearr_36133;
})();
var statearr_36134_37889 = state_36109__$1;
(statearr_36134_37889[(2)] = null);

(statearr_36134_37889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36110 === (10))){
var inst_36073 = (state_36109[(2)]);
var inst_36074 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36109__$1 = (function (){var statearr_36135 = state_36109;
(statearr_36135[(13)] = inst_36073);

return statearr_36135;
})();
var statearr_36136_37894 = state_36109__$1;
(statearr_36136_37894[(2)] = inst_36074);


cljs.core.async.impl.ioc_helpers.process_exception(state_36109__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36110 === (8))){
var inst_36091 = (state_36109[(2)]);
var state_36109__$1 = state_36109;
var statearr_36137_37898 = state_36109__$1;
(statearr_36137_37898[(2)] = inst_36091);

(statearr_36137_37898[(1)] = (5));


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
var statearr_36138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36138[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36138[(1)] = (1));

return statearr_36138;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36109){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36109);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36139){if((e36139 instanceof Object)){
var ex__34210__auto__ = e36139;
var statearr_36140_37907 = state_36109;
(statearr_36140_37907[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36139;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37909 = state_36109;
state_36109 = G__37909;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36109){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36141 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36141[(6)] = c__34273__auto___37835);

return statearr_36141;
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
var G__36144 = arguments.length;
switch (G__36144) {
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
var c__34273__auto___37915 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36176){
var state_val_36177 = (state_36176[(1)]);
if((state_val_36177 === (7))){
var inst_36155 = (state_36176[(7)]);
var inst_36156 = (state_36176[(8)]);
var inst_36155__$1 = (state_36176[(2)]);
var inst_36156__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36155__$1,(0),null);
var inst_36157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36155__$1,(1),null);
var inst_36158 = (inst_36156__$1 == null);
var state_36176__$1 = (function (){var statearr_36178 = state_36176;
(statearr_36178[(7)] = inst_36155__$1);

(statearr_36178[(8)] = inst_36156__$1);

(statearr_36178[(9)] = inst_36157);

return statearr_36178;
})();
if(cljs.core.truth_(inst_36158)){
var statearr_36179_37922 = state_36176__$1;
(statearr_36179_37922[(1)] = (8));

} else {
var statearr_36180_37923 = state_36176__$1;
(statearr_36180_37923[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36177 === (1))){
var inst_36145 = cljs.core.vec(chs);
var inst_36146 = inst_36145;
var state_36176__$1 = (function (){var statearr_36181 = state_36176;
(statearr_36181[(10)] = inst_36146);

return statearr_36181;
})();
var statearr_36182_37928 = state_36176__$1;
(statearr_36182_37928[(2)] = null);

(statearr_36182_37928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36177 === (4))){
var inst_36146 = (state_36176[(10)]);
var state_36176__$1 = state_36176;
return cljs.core.async.ioc_alts_BANG_(state_36176__$1,(7),inst_36146);
} else {
if((state_val_36177 === (6))){
var inst_36172 = (state_36176[(2)]);
var state_36176__$1 = state_36176;
var statearr_36183_37931 = state_36176__$1;
(statearr_36183_37931[(2)] = inst_36172);

(statearr_36183_37931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36177 === (3))){
var inst_36174 = (state_36176[(2)]);
var state_36176__$1 = state_36176;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36176__$1,inst_36174);
} else {
if((state_val_36177 === (2))){
var inst_36146 = (state_36176[(10)]);
var inst_36148 = cljs.core.count(inst_36146);
var inst_36149 = (inst_36148 > (0));
var state_36176__$1 = state_36176;
if(cljs.core.truth_(inst_36149)){
var statearr_36189_37935 = state_36176__$1;
(statearr_36189_37935[(1)] = (4));

} else {
var statearr_36190_37937 = state_36176__$1;
(statearr_36190_37937[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36177 === (11))){
var inst_36146 = (state_36176[(10)]);
var inst_36165 = (state_36176[(2)]);
var tmp36184 = inst_36146;
var inst_36146__$1 = tmp36184;
var state_36176__$1 = (function (){var statearr_36191 = state_36176;
(statearr_36191[(11)] = inst_36165);

(statearr_36191[(10)] = inst_36146__$1);

return statearr_36191;
})();
var statearr_36192_37942 = state_36176__$1;
(statearr_36192_37942[(2)] = null);

(statearr_36192_37942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36177 === (9))){
var inst_36156 = (state_36176[(8)]);
var state_36176__$1 = state_36176;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36176__$1,(11),out,inst_36156);
} else {
if((state_val_36177 === (5))){
var inst_36170 = cljs.core.async.close_BANG_(out);
var state_36176__$1 = state_36176;
var statearr_36196_37948 = state_36176__$1;
(statearr_36196_37948[(2)] = inst_36170);

(statearr_36196_37948[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36177 === (10))){
var inst_36168 = (state_36176[(2)]);
var state_36176__$1 = state_36176;
var statearr_36197_37951 = state_36176__$1;
(statearr_36197_37951[(2)] = inst_36168);

(statearr_36197_37951[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36177 === (8))){
var inst_36146 = (state_36176[(10)]);
var inst_36155 = (state_36176[(7)]);
var inst_36156 = (state_36176[(8)]);
var inst_36157 = (state_36176[(9)]);
var inst_36160 = (function (){var cs = inst_36146;
var vec__36151 = inst_36155;
var v = inst_36156;
var c = inst_36157;
return (function (p1__36142_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36142_SHARP_);
});
})();
var inst_36161 = cljs.core.filterv(inst_36160,inst_36146);
var inst_36146__$1 = inst_36161;
var state_36176__$1 = (function (){var statearr_36201 = state_36176;
(statearr_36201[(10)] = inst_36146__$1);

return statearr_36201;
})();
var statearr_36203_37962 = state_36176__$1;
(statearr_36203_37962[(2)] = null);

(statearr_36203_37962[(1)] = (2));


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
var statearr_36205 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36205[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36205[(1)] = (1));

return statearr_36205;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36176){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36176);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36207){if((e36207 instanceof Object)){
var ex__34210__auto__ = e36207;
var statearr_36208_37967 = state_36176;
(statearr_36208_37967[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36207;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37970 = state_36176;
state_36176 = G__37970;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36176){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36210 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36210[(6)] = c__34273__auto___37915);

return statearr_36210;
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
var G__36212 = arguments.length;
switch (G__36212) {
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
var c__34273__auto___37977 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36236){
var state_val_36237 = (state_36236[(1)]);
if((state_val_36237 === (7))){
var inst_36218 = (state_36236[(7)]);
var inst_36218__$1 = (state_36236[(2)]);
var inst_36219 = (inst_36218__$1 == null);
var inst_36220 = cljs.core.not(inst_36219);
var state_36236__$1 = (function (){var statearr_36240 = state_36236;
(statearr_36240[(7)] = inst_36218__$1);

return statearr_36240;
})();
if(inst_36220){
var statearr_36241_37983 = state_36236__$1;
(statearr_36241_37983[(1)] = (8));

} else {
var statearr_36242_37986 = state_36236__$1;
(statearr_36242_37986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (1))){
var inst_36213 = (0);
var state_36236__$1 = (function (){var statearr_36243 = state_36236;
(statearr_36243[(8)] = inst_36213);

return statearr_36243;
})();
var statearr_36244_37987 = state_36236__$1;
(statearr_36244_37987[(2)] = null);

(statearr_36244_37987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (4))){
var state_36236__$1 = state_36236;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36236__$1,(7),ch);
} else {
if((state_val_36237 === (6))){
var inst_36231 = (state_36236[(2)]);
var state_36236__$1 = state_36236;
var statearr_36246_37989 = state_36236__$1;
(statearr_36246_37989[(2)] = inst_36231);

(statearr_36246_37989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (3))){
var inst_36233 = (state_36236[(2)]);
var inst_36234 = cljs.core.async.close_BANG_(out);
var state_36236__$1 = (function (){var statearr_36249 = state_36236;
(statearr_36249[(9)] = inst_36233);

return statearr_36249;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36236__$1,inst_36234);
} else {
if((state_val_36237 === (2))){
var inst_36213 = (state_36236[(8)]);
var inst_36215 = (inst_36213 < n);
var state_36236__$1 = state_36236;
if(cljs.core.truth_(inst_36215)){
var statearr_36253_37995 = state_36236__$1;
(statearr_36253_37995[(1)] = (4));

} else {
var statearr_36255_37996 = state_36236__$1;
(statearr_36255_37996[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (11))){
var inst_36213 = (state_36236[(8)]);
var inst_36223 = (state_36236[(2)]);
var inst_36224 = (inst_36213 + (1));
var inst_36213__$1 = inst_36224;
var state_36236__$1 = (function (){var statearr_36259 = state_36236;
(statearr_36259[(10)] = inst_36223);

(statearr_36259[(8)] = inst_36213__$1);

return statearr_36259;
})();
var statearr_36260_37997 = state_36236__$1;
(statearr_36260_37997[(2)] = null);

(statearr_36260_37997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (9))){
var state_36236__$1 = state_36236;
var statearr_36261_37998 = state_36236__$1;
(statearr_36261_37998[(2)] = null);

(statearr_36261_37998[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (5))){
var state_36236__$1 = state_36236;
var statearr_36262_37999 = state_36236__$1;
(statearr_36262_37999[(2)] = null);

(statearr_36262_37999[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (10))){
var inst_36228 = (state_36236[(2)]);
var state_36236__$1 = state_36236;
var statearr_36263_38003 = state_36236__$1;
(statearr_36263_38003[(2)] = inst_36228);

(statearr_36263_38003[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (8))){
var inst_36218 = (state_36236[(7)]);
var state_36236__$1 = state_36236;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36236__$1,(11),out,inst_36218);
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
var statearr_36264 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36264[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36264[(1)] = (1));

return statearr_36264;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36236){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36236);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36265){if((e36265 instanceof Object)){
var ex__34210__auto__ = e36265;
var statearr_36266_38008 = state_36236;
(statearr_36266_38008[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36265;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38009 = state_36236;
state_36236 = G__38009;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36236){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36267 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36267[(6)] = c__34273__auto___37977);

return statearr_36267;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36274 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36274 = (function (f,ch,meta36275){
this.f = f;
this.ch = ch;
this.meta36275 = meta36275;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36276,meta36275__$1){
var self__ = this;
var _36276__$1 = this;
return (new cljs.core.async.t_cljs$core$async36274(self__.f,self__.ch,meta36275__$1));
}));

(cljs.core.async.t_cljs$core$async36274.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36276){
var self__ = this;
var _36276__$1 = this;
return self__.meta36275;
}));

(cljs.core.async.t_cljs$core$async36274.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36274.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36274.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36274.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36274.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36287 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36287 = (function (f,ch,meta36275,_,fn1,meta36288){
this.f = f;
this.ch = ch;
this.meta36275 = meta36275;
this._ = _;
this.fn1 = fn1;
this.meta36288 = meta36288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36289,meta36288__$1){
var self__ = this;
var _36289__$1 = this;
return (new cljs.core.async.t_cljs$core$async36287(self__.f,self__.ch,self__.meta36275,self__._,self__.fn1,meta36288__$1));
}));

(cljs.core.async.t_cljs$core$async36287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36289){
var self__ = this;
var _36289__$1 = this;
return self__.meta36288;
}));

(cljs.core.async.t_cljs$core$async36287.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36287.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36287.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36287.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36268_SHARP_){
var G__36293 = (((p1__36268_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36268_SHARP_) : self__.f.call(null,p1__36268_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36293) : f1.call(null,G__36293));
});
}));

(cljs.core.async.t_cljs$core$async36287.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36275","meta36275",-112810055,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36274","cljs.core.async/t_cljs$core$async36274",897982280,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36288","meta36288",-1138058549,null)], null);
}));

(cljs.core.async.t_cljs$core$async36287.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36287.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36287");

(cljs.core.async.t_cljs$core$async36287.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36287");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36287.
 */
cljs.core.async.__GT_t_cljs$core$async36287 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36287(f__$1,ch__$1,meta36275__$1,___$2,fn1__$1,meta36288){
return (new cljs.core.async.t_cljs$core$async36287(f__$1,ch__$1,meta36275__$1,___$2,fn1__$1,meta36288));
});

}

return (new cljs.core.async.t_cljs$core$async36287(self__.f,self__.ch,self__.meta36275,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36297 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36297) : self__.f.call(null,G__36297));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36274.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36274.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36274.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36275","meta36275",-112810055,null)], null);
}));

(cljs.core.async.t_cljs$core$async36274.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36274.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36274");

(cljs.core.async.t_cljs$core$async36274.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36274");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36274.
 */
cljs.core.async.__GT_t_cljs$core$async36274 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36274(f__$1,ch__$1,meta36275){
return (new cljs.core.async.t_cljs$core$async36274(f__$1,ch__$1,meta36275));
});

}

return (new cljs.core.async.t_cljs$core$async36274(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36309 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36309 = (function (f,ch,meta36310){
this.f = f;
this.ch = ch;
this.meta36310 = meta36310;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36311,meta36310__$1){
var self__ = this;
var _36311__$1 = this;
return (new cljs.core.async.t_cljs$core$async36309(self__.f,self__.ch,meta36310__$1));
}));

(cljs.core.async.t_cljs$core$async36309.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36311){
var self__ = this;
var _36311__$1 = this;
return self__.meta36310;
}));

(cljs.core.async.t_cljs$core$async36309.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36309.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36309.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36309.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36309.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36309.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36309.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36310","meta36310",-1787906238,null)], null);
}));

(cljs.core.async.t_cljs$core$async36309.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36309.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36309");

(cljs.core.async.t_cljs$core$async36309.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36309");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36309.
 */
cljs.core.async.__GT_t_cljs$core$async36309 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36309(f__$1,ch__$1,meta36310){
return (new cljs.core.async.t_cljs$core$async36309(f__$1,ch__$1,meta36310));
});

}

return (new cljs.core.async.t_cljs$core$async36309(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36321 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36321 = (function (p,ch,meta36322){
this.p = p;
this.ch = ch;
this.meta36322 = meta36322;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36323,meta36322__$1){
var self__ = this;
var _36323__$1 = this;
return (new cljs.core.async.t_cljs$core$async36321(self__.p,self__.ch,meta36322__$1));
}));

(cljs.core.async.t_cljs$core$async36321.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36323){
var self__ = this;
var _36323__$1 = this;
return self__.meta36322;
}));

(cljs.core.async.t_cljs$core$async36321.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36321.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36321.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36321.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36321.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36321.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36321.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36321.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36322","meta36322",-1265685795,null)], null);
}));

(cljs.core.async.t_cljs$core$async36321.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36321.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36321");

(cljs.core.async.t_cljs$core$async36321.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36321");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36321.
 */
cljs.core.async.__GT_t_cljs$core$async36321 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36321(p__$1,ch__$1,meta36322){
return (new cljs.core.async.t_cljs$core$async36321(p__$1,ch__$1,meta36322));
});

}

return (new cljs.core.async.t_cljs$core$async36321(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36342 = arguments.length;
switch (G__36342) {
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
var c__34273__auto___38040 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36365){
var state_val_36366 = (state_36365[(1)]);
if((state_val_36366 === (7))){
var inst_36361 = (state_36365[(2)]);
var state_36365__$1 = state_36365;
var statearr_36369_38044 = state_36365__$1;
(statearr_36369_38044[(2)] = inst_36361);

(statearr_36369_38044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (1))){
var state_36365__$1 = state_36365;
var statearr_36370_38045 = state_36365__$1;
(statearr_36370_38045[(2)] = null);

(statearr_36370_38045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (4))){
var inst_36347 = (state_36365[(7)]);
var inst_36347__$1 = (state_36365[(2)]);
var inst_36348 = (inst_36347__$1 == null);
var state_36365__$1 = (function (){var statearr_36371 = state_36365;
(statearr_36371[(7)] = inst_36347__$1);

return statearr_36371;
})();
if(cljs.core.truth_(inst_36348)){
var statearr_36374_38046 = state_36365__$1;
(statearr_36374_38046[(1)] = (5));

} else {
var statearr_36375_38049 = state_36365__$1;
(statearr_36375_38049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (6))){
var inst_36347 = (state_36365[(7)]);
var inst_36352 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36347) : p.call(null,inst_36347));
var state_36365__$1 = state_36365;
if(cljs.core.truth_(inst_36352)){
var statearr_36376_38050 = state_36365__$1;
(statearr_36376_38050[(1)] = (8));

} else {
var statearr_36377_38051 = state_36365__$1;
(statearr_36377_38051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (3))){
var inst_36363 = (state_36365[(2)]);
var state_36365__$1 = state_36365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36365__$1,inst_36363);
} else {
if((state_val_36366 === (2))){
var state_36365__$1 = state_36365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36365__$1,(4),ch);
} else {
if((state_val_36366 === (11))){
var inst_36355 = (state_36365[(2)]);
var state_36365__$1 = state_36365;
var statearr_36385_38054 = state_36365__$1;
(statearr_36385_38054[(2)] = inst_36355);

(statearr_36385_38054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (9))){
var state_36365__$1 = state_36365;
var statearr_36387_38055 = state_36365__$1;
(statearr_36387_38055[(2)] = null);

(statearr_36387_38055[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (5))){
var inst_36350 = cljs.core.async.close_BANG_(out);
var state_36365__$1 = state_36365;
var statearr_36388_38057 = state_36365__$1;
(statearr_36388_38057[(2)] = inst_36350);

(statearr_36388_38057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (10))){
var inst_36358 = (state_36365[(2)]);
var state_36365__$1 = (function (){var statearr_36389 = state_36365;
(statearr_36389[(8)] = inst_36358);

return statearr_36389;
})();
var statearr_36390_38059 = state_36365__$1;
(statearr_36390_38059[(2)] = null);

(statearr_36390_38059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (8))){
var inst_36347 = (state_36365[(7)]);
var state_36365__$1 = state_36365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36365__$1,(11),out,inst_36347);
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
var statearr_36391 = [null,null,null,null,null,null,null,null,null];
(statearr_36391[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36391[(1)] = (1));

return statearr_36391;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36365){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36365);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36393){if((e36393 instanceof Object)){
var ex__34210__auto__ = e36393;
var statearr_36395_38061 = state_36365;
(statearr_36395_38061[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36393;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38064 = state_36365;
state_36365 = G__38064;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36398 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36398[(6)] = c__34273__auto___38040);

return statearr_36398;
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
var G__36401 = arguments.length;
switch (G__36401) {
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
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36470){
var state_val_36471 = (state_36470[(1)]);
if((state_val_36471 === (7))){
var inst_36466 = (state_36470[(2)]);
var state_36470__$1 = state_36470;
var statearr_36474_38069 = state_36470__$1;
(statearr_36474_38069[(2)] = inst_36466);

(statearr_36474_38069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (20))){
var inst_36436 = (state_36470[(7)]);
var inst_36447 = (state_36470[(2)]);
var inst_36448 = cljs.core.next(inst_36436);
var inst_36420 = inst_36448;
var inst_36421 = null;
var inst_36422 = (0);
var inst_36423 = (0);
var state_36470__$1 = (function (){var statearr_36477 = state_36470;
(statearr_36477[(8)] = inst_36447);

(statearr_36477[(9)] = inst_36420);

(statearr_36477[(10)] = inst_36423);

(statearr_36477[(11)] = inst_36421);

(statearr_36477[(12)] = inst_36422);

return statearr_36477;
})();
var statearr_36483_38073 = state_36470__$1;
(statearr_36483_38073[(2)] = null);

(statearr_36483_38073[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (1))){
var state_36470__$1 = state_36470;
var statearr_36486_38074 = state_36470__$1;
(statearr_36486_38074[(2)] = null);

(statearr_36486_38074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (4))){
var inst_36409 = (state_36470[(13)]);
var inst_36409__$1 = (state_36470[(2)]);
var inst_36410 = (inst_36409__$1 == null);
var state_36470__$1 = (function (){var statearr_36487 = state_36470;
(statearr_36487[(13)] = inst_36409__$1);

return statearr_36487;
})();
if(cljs.core.truth_(inst_36410)){
var statearr_36488_38077 = state_36470__$1;
(statearr_36488_38077[(1)] = (5));

} else {
var statearr_36489_38078 = state_36470__$1;
(statearr_36489_38078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (15))){
var state_36470__$1 = state_36470;
var statearr_36495_38080 = state_36470__$1;
(statearr_36495_38080[(2)] = null);

(statearr_36495_38080[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (21))){
var state_36470__$1 = state_36470;
var statearr_36497_38081 = state_36470__$1;
(statearr_36497_38081[(2)] = null);

(statearr_36497_38081[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (13))){
var inst_36420 = (state_36470[(9)]);
var inst_36423 = (state_36470[(10)]);
var inst_36421 = (state_36470[(11)]);
var inst_36422 = (state_36470[(12)]);
var inst_36430 = (state_36470[(2)]);
var inst_36431 = (inst_36423 + (1));
var tmp36490 = inst_36420;
var tmp36491 = inst_36421;
var tmp36492 = inst_36422;
var inst_36420__$1 = tmp36490;
var inst_36421__$1 = tmp36491;
var inst_36422__$1 = tmp36492;
var inst_36423__$1 = inst_36431;
var state_36470__$1 = (function (){var statearr_36499 = state_36470;
(statearr_36499[(9)] = inst_36420__$1);

(statearr_36499[(10)] = inst_36423__$1);

(statearr_36499[(11)] = inst_36421__$1);

(statearr_36499[(14)] = inst_36430);

(statearr_36499[(12)] = inst_36422__$1);

return statearr_36499;
})();
var statearr_36500_38085 = state_36470__$1;
(statearr_36500_38085[(2)] = null);

(statearr_36500_38085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (22))){
var state_36470__$1 = state_36470;
var statearr_36501_38086 = state_36470__$1;
(statearr_36501_38086[(2)] = null);

(statearr_36501_38086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (6))){
var inst_36409 = (state_36470[(13)]);
var inst_36418 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36409) : f.call(null,inst_36409));
var inst_36419 = cljs.core.seq(inst_36418);
var inst_36420 = inst_36419;
var inst_36421 = null;
var inst_36422 = (0);
var inst_36423 = (0);
var state_36470__$1 = (function (){var statearr_36504 = state_36470;
(statearr_36504[(9)] = inst_36420);

(statearr_36504[(10)] = inst_36423);

(statearr_36504[(11)] = inst_36421);

(statearr_36504[(12)] = inst_36422);

return statearr_36504;
})();
var statearr_36505_38090 = state_36470__$1;
(statearr_36505_38090[(2)] = null);

(statearr_36505_38090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (17))){
var inst_36436 = (state_36470[(7)]);
var inst_36440 = cljs.core.chunk_first(inst_36436);
var inst_36441 = cljs.core.chunk_rest(inst_36436);
var inst_36442 = cljs.core.count(inst_36440);
var inst_36420 = inst_36441;
var inst_36421 = inst_36440;
var inst_36422 = inst_36442;
var inst_36423 = (0);
var state_36470__$1 = (function (){var statearr_36508 = state_36470;
(statearr_36508[(9)] = inst_36420);

(statearr_36508[(10)] = inst_36423);

(statearr_36508[(11)] = inst_36421);

(statearr_36508[(12)] = inst_36422);

return statearr_36508;
})();
var statearr_36512_38092 = state_36470__$1;
(statearr_36512_38092[(2)] = null);

(statearr_36512_38092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (3))){
var inst_36468 = (state_36470[(2)]);
var state_36470__$1 = state_36470;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36470__$1,inst_36468);
} else {
if((state_val_36471 === (12))){
var inst_36456 = (state_36470[(2)]);
var state_36470__$1 = state_36470;
var statearr_36519_38095 = state_36470__$1;
(statearr_36519_38095[(2)] = inst_36456);

(statearr_36519_38095[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (2))){
var state_36470__$1 = state_36470;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36470__$1,(4),in$);
} else {
if((state_val_36471 === (23))){
var inst_36464 = (state_36470[(2)]);
var state_36470__$1 = state_36470;
var statearr_36521_38096 = state_36470__$1;
(statearr_36521_38096[(2)] = inst_36464);

(statearr_36521_38096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (19))){
var inst_36451 = (state_36470[(2)]);
var state_36470__$1 = state_36470;
var statearr_36523_38098 = state_36470__$1;
(statearr_36523_38098[(2)] = inst_36451);

(statearr_36523_38098[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (11))){
var inst_36420 = (state_36470[(9)]);
var inst_36436 = (state_36470[(7)]);
var inst_36436__$1 = cljs.core.seq(inst_36420);
var state_36470__$1 = (function (){var statearr_36524 = state_36470;
(statearr_36524[(7)] = inst_36436__$1);

return statearr_36524;
})();
if(inst_36436__$1){
var statearr_36526_38101 = state_36470__$1;
(statearr_36526_38101[(1)] = (14));

} else {
var statearr_36530_38102 = state_36470__$1;
(statearr_36530_38102[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (9))){
var inst_36458 = (state_36470[(2)]);
var inst_36459 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36470__$1 = (function (){var statearr_36531 = state_36470;
(statearr_36531[(15)] = inst_36458);

return statearr_36531;
})();
if(cljs.core.truth_(inst_36459)){
var statearr_36532_38103 = state_36470__$1;
(statearr_36532_38103[(1)] = (21));

} else {
var statearr_36539_38105 = state_36470__$1;
(statearr_36539_38105[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (5))){
var inst_36412 = cljs.core.async.close_BANG_(out);
var state_36470__$1 = state_36470;
var statearr_36540_38107 = state_36470__$1;
(statearr_36540_38107[(2)] = inst_36412);

(statearr_36540_38107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (14))){
var inst_36436 = (state_36470[(7)]);
var inst_36438 = cljs.core.chunked_seq_QMARK_(inst_36436);
var state_36470__$1 = state_36470;
if(inst_36438){
var statearr_36541_38109 = state_36470__$1;
(statearr_36541_38109[(1)] = (17));

} else {
var statearr_36543_38110 = state_36470__$1;
(statearr_36543_38110[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (16))){
var inst_36454 = (state_36470[(2)]);
var state_36470__$1 = state_36470;
var statearr_36549_38111 = state_36470__$1;
(statearr_36549_38111[(2)] = inst_36454);

(statearr_36549_38111[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (10))){
var inst_36423 = (state_36470[(10)]);
var inst_36421 = (state_36470[(11)]);
var inst_36428 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36421,inst_36423);
var state_36470__$1 = state_36470;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36470__$1,(13),out,inst_36428);
} else {
if((state_val_36471 === (18))){
var inst_36436 = (state_36470[(7)]);
var inst_36445 = cljs.core.first(inst_36436);
var state_36470__$1 = state_36470;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36470__$1,(20),out,inst_36445);
} else {
if((state_val_36471 === (8))){
var inst_36423 = (state_36470[(10)]);
var inst_36422 = (state_36470[(12)]);
var inst_36425 = (inst_36423 < inst_36422);
var inst_36426 = inst_36425;
var state_36470__$1 = state_36470;
if(cljs.core.truth_(inst_36426)){
var statearr_36554_38115 = state_36470__$1;
(statearr_36554_38115[(1)] = (10));

} else {
var statearr_36555_38116 = state_36470__$1;
(statearr_36555_38116[(1)] = (11));

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
var statearr_36556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36556[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36556[(1)] = (1));

return statearr_36556;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36470){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36470);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36559){if((e36559 instanceof Object)){
var ex__34210__auto__ = e36559;
var statearr_36560_38120 = state_36470;
(statearr_36560_38120[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36559;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38122 = state_36470;
state_36470 = G__38122;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36470){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36563 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36563[(6)] = c__34273__auto__);

return statearr_36563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));

return c__34273__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36568 = arguments.length;
switch (G__36568) {
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
var G__36574 = arguments.length;
switch (G__36574) {
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
var G__36582 = arguments.length;
switch (G__36582) {
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
var c__34273__auto___38134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36607){
var state_val_36608 = (state_36607[(1)]);
if((state_val_36608 === (7))){
var inst_36602 = (state_36607[(2)]);
var state_36607__$1 = state_36607;
var statearr_36610_38135 = state_36607__$1;
(statearr_36610_38135[(2)] = inst_36602);

(statearr_36610_38135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36608 === (1))){
var inst_36584 = null;
var state_36607__$1 = (function (){var statearr_36612 = state_36607;
(statearr_36612[(7)] = inst_36584);

return statearr_36612;
})();
var statearr_36613_38139 = state_36607__$1;
(statearr_36613_38139[(2)] = null);

(statearr_36613_38139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36608 === (4))){
var inst_36587 = (state_36607[(8)]);
var inst_36587__$1 = (state_36607[(2)]);
var inst_36588 = (inst_36587__$1 == null);
var inst_36589 = cljs.core.not(inst_36588);
var state_36607__$1 = (function (){var statearr_36614 = state_36607;
(statearr_36614[(8)] = inst_36587__$1);

return statearr_36614;
})();
if(inst_36589){
var statearr_36616_38140 = state_36607__$1;
(statearr_36616_38140[(1)] = (5));

} else {
var statearr_36617_38141 = state_36607__$1;
(statearr_36617_38141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36608 === (6))){
var state_36607__$1 = state_36607;
var statearr_36618_38143 = state_36607__$1;
(statearr_36618_38143[(2)] = null);

(statearr_36618_38143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36608 === (3))){
var inst_36604 = (state_36607[(2)]);
var inst_36605 = cljs.core.async.close_BANG_(out);
var state_36607__$1 = (function (){var statearr_36620 = state_36607;
(statearr_36620[(9)] = inst_36604);

return statearr_36620;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36607__$1,inst_36605);
} else {
if((state_val_36608 === (2))){
var state_36607__$1 = state_36607;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36607__$1,(4),ch);
} else {
if((state_val_36608 === (11))){
var inst_36587 = (state_36607[(8)]);
var inst_36596 = (state_36607[(2)]);
var inst_36584 = inst_36587;
var state_36607__$1 = (function (){var statearr_36621 = state_36607;
(statearr_36621[(10)] = inst_36596);

(statearr_36621[(7)] = inst_36584);

return statearr_36621;
})();
var statearr_36623_38147 = state_36607__$1;
(statearr_36623_38147[(2)] = null);

(statearr_36623_38147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36608 === (9))){
var inst_36587 = (state_36607[(8)]);
var state_36607__$1 = state_36607;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36607__$1,(11),out,inst_36587);
} else {
if((state_val_36608 === (5))){
var inst_36584 = (state_36607[(7)]);
var inst_36587 = (state_36607[(8)]);
var inst_36591 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36587,inst_36584);
var state_36607__$1 = state_36607;
if(inst_36591){
var statearr_36625_38150 = state_36607__$1;
(statearr_36625_38150[(1)] = (8));

} else {
var statearr_36627_38151 = state_36607__$1;
(statearr_36627_38151[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36608 === (10))){
var inst_36599 = (state_36607[(2)]);
var state_36607__$1 = state_36607;
var statearr_36628_38152 = state_36607__$1;
(statearr_36628_38152[(2)] = inst_36599);

(statearr_36628_38152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36608 === (8))){
var inst_36584 = (state_36607[(7)]);
var tmp36624 = inst_36584;
var inst_36584__$1 = tmp36624;
var state_36607__$1 = (function (){var statearr_36629 = state_36607;
(statearr_36629[(7)] = inst_36584__$1);

return statearr_36629;
})();
var statearr_36631_38154 = state_36607__$1;
(statearr_36631_38154[(2)] = null);

(statearr_36631_38154[(1)] = (2));


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
var statearr_36632 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36632[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36632[(1)] = (1));

return statearr_36632;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36607){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36607);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36634){if((e36634 instanceof Object)){
var ex__34210__auto__ = e36634;
var statearr_36635_38157 = state_36607;
(statearr_36635_38157[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36634;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38158 = state_36607;
state_36607 = G__38158;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36607){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36637 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36637[(6)] = c__34273__auto___38134);

return statearr_36637;
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
var G__36640 = arguments.length;
switch (G__36640) {
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
var c__34273__auto___38163 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36680){
var state_val_36681 = (state_36680[(1)]);
if((state_val_36681 === (7))){
var inst_36676 = (state_36680[(2)]);
var state_36680__$1 = state_36680;
var statearr_36683_38164 = state_36680__$1;
(statearr_36683_38164[(2)] = inst_36676);

(statearr_36683_38164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36681 === (1))){
var inst_36642 = (new Array(n));
var inst_36643 = inst_36642;
var inst_36644 = (0);
var state_36680__$1 = (function (){var statearr_36685 = state_36680;
(statearr_36685[(7)] = inst_36643);

(statearr_36685[(8)] = inst_36644);

return statearr_36685;
})();
var statearr_36686_38165 = state_36680__$1;
(statearr_36686_38165[(2)] = null);

(statearr_36686_38165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36681 === (4))){
var inst_36647 = (state_36680[(9)]);
var inst_36647__$1 = (state_36680[(2)]);
var inst_36649 = (inst_36647__$1 == null);
var inst_36650 = cljs.core.not(inst_36649);
var state_36680__$1 = (function (){var statearr_36688 = state_36680;
(statearr_36688[(9)] = inst_36647__$1);

return statearr_36688;
})();
if(inst_36650){
var statearr_36689_38166 = state_36680__$1;
(statearr_36689_38166[(1)] = (5));

} else {
var statearr_36690_38167 = state_36680__$1;
(statearr_36690_38167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36681 === (15))){
var inst_36670 = (state_36680[(2)]);
var state_36680__$1 = state_36680;
var statearr_36691_38168 = state_36680__$1;
(statearr_36691_38168[(2)] = inst_36670);

(statearr_36691_38168[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36681 === (13))){
var state_36680__$1 = state_36680;
var statearr_36693_38170 = state_36680__$1;
(statearr_36693_38170[(2)] = null);

(statearr_36693_38170[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36681 === (6))){
var inst_36644 = (state_36680[(8)]);
var inst_36666 = (inst_36644 > (0));
var state_36680__$1 = state_36680;
if(cljs.core.truth_(inst_36666)){
var statearr_36694_38171 = state_36680__$1;
(statearr_36694_38171[(1)] = (12));

} else {
var statearr_36696_38172 = state_36680__$1;
(statearr_36696_38172[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36681 === (3))){
var inst_36678 = (state_36680[(2)]);
var state_36680__$1 = state_36680;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36680__$1,inst_36678);
} else {
if((state_val_36681 === (12))){
var inst_36643 = (state_36680[(7)]);
var inst_36668 = cljs.core.vec(inst_36643);
var state_36680__$1 = state_36680;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36680__$1,(15),out,inst_36668);
} else {
if((state_val_36681 === (2))){
var state_36680__$1 = state_36680;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36680__$1,(4),ch);
} else {
if((state_val_36681 === (11))){
var inst_36660 = (state_36680[(2)]);
var inst_36661 = (new Array(n));
var inst_36643 = inst_36661;
var inst_36644 = (0);
var state_36680__$1 = (function (){var statearr_36698 = state_36680;
(statearr_36698[(7)] = inst_36643);

(statearr_36698[(8)] = inst_36644);

(statearr_36698[(10)] = inst_36660);

return statearr_36698;
})();
var statearr_36699_38178 = state_36680__$1;
(statearr_36699_38178[(2)] = null);

(statearr_36699_38178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36681 === (9))){
var inst_36643 = (state_36680[(7)]);
var inst_36658 = cljs.core.vec(inst_36643);
var state_36680__$1 = state_36680;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36680__$1,(11),out,inst_36658);
} else {
if((state_val_36681 === (5))){
var inst_36653 = (state_36680[(11)]);
var inst_36643 = (state_36680[(7)]);
var inst_36644 = (state_36680[(8)]);
var inst_36647 = (state_36680[(9)]);
var inst_36652 = (inst_36643[inst_36644] = inst_36647);
var inst_36653__$1 = (inst_36644 + (1));
var inst_36654 = (inst_36653__$1 < n);
var state_36680__$1 = (function (){var statearr_36701 = state_36680;
(statearr_36701[(11)] = inst_36653__$1);

(statearr_36701[(12)] = inst_36652);

return statearr_36701;
})();
if(cljs.core.truth_(inst_36654)){
var statearr_36703_38182 = state_36680__$1;
(statearr_36703_38182[(1)] = (8));

} else {
var statearr_36704_38183 = state_36680__$1;
(statearr_36704_38183[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36681 === (14))){
var inst_36673 = (state_36680[(2)]);
var inst_36674 = cljs.core.async.close_BANG_(out);
var state_36680__$1 = (function (){var statearr_36706 = state_36680;
(statearr_36706[(13)] = inst_36673);

return statearr_36706;
})();
var statearr_36708_38187 = state_36680__$1;
(statearr_36708_38187[(2)] = inst_36674);

(statearr_36708_38187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36681 === (10))){
var inst_36664 = (state_36680[(2)]);
var state_36680__$1 = state_36680;
var statearr_36709_38188 = state_36680__$1;
(statearr_36709_38188[(2)] = inst_36664);

(statearr_36709_38188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36681 === (8))){
var inst_36653 = (state_36680[(11)]);
var inst_36643 = (state_36680[(7)]);
var tmp36705 = inst_36643;
var inst_36643__$1 = tmp36705;
var inst_36644 = inst_36653;
var state_36680__$1 = (function (){var statearr_36711 = state_36680;
(statearr_36711[(7)] = inst_36643__$1);

(statearr_36711[(8)] = inst_36644);

return statearr_36711;
})();
var statearr_36712_38192 = state_36680__$1;
(statearr_36712_38192[(2)] = null);

(statearr_36712_38192[(1)] = (2));


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
var statearr_36713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36713[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36713[(1)] = (1));

return statearr_36713;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36680){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36680);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36715){if((e36715 instanceof Object)){
var ex__34210__auto__ = e36715;
var statearr_36716_38193 = state_36680;
(statearr_36716_38193[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36715;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38195 = state_36680;
state_36680 = G__38195;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36680){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36717 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36717[(6)] = c__34273__auto___38163);

return statearr_36717;
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
var G__36719 = arguments.length;
switch (G__36719) {
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
var c__34273__auto___38199 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36762){
var state_val_36763 = (state_36762[(1)]);
if((state_val_36763 === (7))){
var inst_36758 = (state_36762[(2)]);
var state_36762__$1 = state_36762;
var statearr_36765_38201 = state_36762__$1;
(statearr_36765_38201[(2)] = inst_36758);

(statearr_36765_38201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36763 === (1))){
var inst_36720 = [];
var inst_36721 = inst_36720;
var inst_36722 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36762__$1 = (function (){var statearr_36766 = state_36762;
(statearr_36766[(7)] = inst_36722);

(statearr_36766[(8)] = inst_36721);

return statearr_36766;
})();
var statearr_36768_38203 = state_36762__$1;
(statearr_36768_38203[(2)] = null);

(statearr_36768_38203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36763 === (4))){
var inst_36725 = (state_36762[(9)]);
var inst_36725__$1 = (state_36762[(2)]);
var inst_36726 = (inst_36725__$1 == null);
var inst_36727 = cljs.core.not(inst_36726);
var state_36762__$1 = (function (){var statearr_36769 = state_36762;
(statearr_36769[(9)] = inst_36725__$1);

return statearr_36769;
})();
if(inst_36727){
var statearr_36770_38205 = state_36762__$1;
(statearr_36770_38205[(1)] = (5));

} else {
var statearr_36772_38206 = state_36762__$1;
(statearr_36772_38206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36763 === (15))){
var inst_36752 = (state_36762[(2)]);
var state_36762__$1 = state_36762;
var statearr_36773_38208 = state_36762__$1;
(statearr_36773_38208[(2)] = inst_36752);

(statearr_36773_38208[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36763 === (13))){
var state_36762__$1 = state_36762;
var statearr_36774_38211 = state_36762__$1;
(statearr_36774_38211[(2)] = null);

(statearr_36774_38211[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36763 === (6))){
var inst_36721 = (state_36762[(8)]);
var inst_36747 = inst_36721.length;
var inst_36748 = (inst_36747 > (0));
var state_36762__$1 = state_36762;
if(cljs.core.truth_(inst_36748)){
var statearr_36776_38212 = state_36762__$1;
(statearr_36776_38212[(1)] = (12));

} else {
var statearr_36777_38213 = state_36762__$1;
(statearr_36777_38213[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36763 === (3))){
var inst_36760 = (state_36762[(2)]);
var state_36762__$1 = state_36762;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36762__$1,inst_36760);
} else {
if((state_val_36763 === (12))){
var inst_36721 = (state_36762[(8)]);
var inst_36750 = cljs.core.vec(inst_36721);
var state_36762__$1 = state_36762;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36762__$1,(15),out,inst_36750);
} else {
if((state_val_36763 === (2))){
var state_36762__$1 = state_36762;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36762__$1,(4),ch);
} else {
if((state_val_36763 === (11))){
var inst_36725 = (state_36762[(9)]);
var inst_36729 = (state_36762[(10)]);
var inst_36740 = (state_36762[(2)]);
var inst_36741 = [];
var inst_36742 = inst_36741.push(inst_36725);
var inst_36721 = inst_36741;
var inst_36722 = inst_36729;
var state_36762__$1 = (function (){var statearr_36780 = state_36762;
(statearr_36780[(11)] = inst_36740);

(statearr_36780[(7)] = inst_36722);

(statearr_36780[(8)] = inst_36721);

(statearr_36780[(12)] = inst_36742);

return statearr_36780;
})();
var statearr_36781_38221 = state_36762__$1;
(statearr_36781_38221[(2)] = null);

(statearr_36781_38221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36763 === (9))){
var inst_36721 = (state_36762[(8)]);
var inst_36738 = cljs.core.vec(inst_36721);
var state_36762__$1 = state_36762;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36762__$1,(11),out,inst_36738);
} else {
if((state_val_36763 === (5))){
var inst_36725 = (state_36762[(9)]);
var inst_36722 = (state_36762[(7)]);
var inst_36729 = (state_36762[(10)]);
var inst_36729__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36725) : f.call(null,inst_36725));
var inst_36730 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36729__$1,inst_36722);
var inst_36731 = cljs.core.keyword_identical_QMARK_(inst_36722,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36732 = ((inst_36730) || (inst_36731));
var state_36762__$1 = (function (){var statearr_36783 = state_36762;
(statearr_36783[(10)] = inst_36729__$1);

return statearr_36783;
})();
if(cljs.core.truth_(inst_36732)){
var statearr_36784_38223 = state_36762__$1;
(statearr_36784_38223[(1)] = (8));

} else {
var statearr_36785_38224 = state_36762__$1;
(statearr_36785_38224[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36763 === (14))){
var inst_36755 = (state_36762[(2)]);
var inst_36756 = cljs.core.async.close_BANG_(out);
var state_36762__$1 = (function (){var statearr_36788 = state_36762;
(statearr_36788[(13)] = inst_36755);

return statearr_36788;
})();
var statearr_36789_38227 = state_36762__$1;
(statearr_36789_38227[(2)] = inst_36756);

(statearr_36789_38227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36763 === (10))){
var inst_36745 = (state_36762[(2)]);
var state_36762__$1 = state_36762;
var statearr_36790_38228 = state_36762__$1;
(statearr_36790_38228[(2)] = inst_36745);

(statearr_36790_38228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36763 === (8))){
var inst_36725 = (state_36762[(9)]);
var inst_36729 = (state_36762[(10)]);
var inst_36721 = (state_36762[(8)]);
var inst_36734 = inst_36721.push(inst_36725);
var tmp36786 = inst_36721;
var inst_36721__$1 = tmp36786;
var inst_36722 = inst_36729;
var state_36762__$1 = (function (){var statearr_36792 = state_36762;
(statearr_36792[(7)] = inst_36722);

(statearr_36792[(8)] = inst_36721__$1);

(statearr_36792[(14)] = inst_36734);

return statearr_36792;
})();
var statearr_36793_38230 = state_36762__$1;
(statearr_36793_38230[(2)] = null);

(statearr_36793_38230[(1)] = (2));


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
var statearr_36795 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36795[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36795[(1)] = (1));

return statearr_36795;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36762){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36762);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36796){if((e36796 instanceof Object)){
var ex__34210__auto__ = e36796;
var statearr_36798_38234 = state_36762;
(statearr_36798_38234[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36796;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38235 = state_36762;
state_36762 = G__38235;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36799 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36799[(6)] = c__34273__auto___38199);

return statearr_36799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
