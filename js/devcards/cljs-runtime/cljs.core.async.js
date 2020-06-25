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
var val_36809 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36809) : fn1.call(null,val_36809));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36809) : fn1.call(null,val_36809));
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
var n__4666__auto___36816 = n;
var x_36817 = (0);
while(true){
if((x_36817 < n__4666__auto___36816)){
(a[x_36817] = x_36817);

var G__36818 = (x_36817 + (1));
x_36817 = G__36818;
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
var G__36830 = (i + (1));
i = G__36830;
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
var len__4789__auto___36832 = arguments.length;
var i__4790__auto___36834 = (0);
while(true){
if((i__4790__auto___36834 < len__4789__auto___36832)){
args__4795__auto__.push((arguments[i__4790__auto___36834]));

var G__36835 = (i__4790__auto___36834 + (1));
i__4790__auto___36834 = G__36835;
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
var c__34274__auto___36841 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34411){
var state_val_34412 = (state_34411[(1)]);
if((state_val_34412 === (7))){
var inst_34407 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34416_36843 = state_34411__$1;
(statearr_34416_36843[(2)] = inst_34407);

(statearr_34416_36843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (1))){
var state_34411__$1 = state_34411;
var statearr_34420_36845 = state_34411__$1;
(statearr_34420_36845[(2)] = null);

(statearr_34420_36845[(1)] = (2));


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
var statearr_34428_36847 = state_34411__$1;
(statearr_34428_36847[(1)] = (5));

} else {
var statearr_34429_36848 = state_34411__$1;
(statearr_34429_36848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (13))){
var state_34411__$1 = state_34411;
var statearr_34430_36849 = state_34411__$1;
(statearr_34430_36849[(2)] = null);

(statearr_34430_36849[(1)] = (14));


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
var statearr_34431_36852 = state_34411__$1;
(statearr_34431_36852[(2)] = null);

(statearr_34431_36852[(1)] = (2));


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
var statearr_34432_36853 = state_34411__$1;
(statearr_34432_36853[(1)] = (12));

} else {
var statearr_34433_36855 = state_34411__$1;
(statearr_34433_36855[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (9))){
var state_34411__$1 = state_34411;
var statearr_34434_36856 = state_34411__$1;
(statearr_34434_36856[(2)] = null);

(statearr_34434_36856[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (5))){
var state_34411__$1 = state_34411;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34435_36858 = state_34411__$1;
(statearr_34435_36858[(1)] = (8));

} else {
var statearr_34436_36859 = state_34411__$1;
(statearr_34436_36859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (14))){
var inst_34405 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34437_36860 = state_34411__$1;
(statearr_34437_36860[(2)] = inst_34405);

(statearr_34437_36860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (10))){
var inst_34397 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34438_36862 = state_34411__$1;
(statearr_34438_36862[(2)] = inst_34397);

(statearr_34438_36862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (8))){
var inst_34394 = cljs.core.async.close_BANG_(to);
var state_34411__$1 = state_34411;
var statearr_34439_36863 = state_34411__$1;
(statearr_34439_36863[(2)] = inst_34394);

(statearr_34439_36863[(1)] = (10));


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
var statearr_34442_36866 = state_34411;
(statearr_34442_36866[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36868 = state_34411;
state_34411 = G__36868;
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
(statearr_34443[(6)] = c__34274__auto___36841);

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
var c__34274__auto___36871 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
var statearr_34457_36875 = state_34452;
(statearr_34457_36875[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36877 = state_34452;
state_34452 = G__36877;
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
var state__34276__auto__ = (function (){var statearr_34458 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34458[(6)] = c__34274__auto___36871);

return statearr_34458;
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
var n__4666__auto___36880 = n;
var __36881 = (0);
while(true){
if((__36881 < n__4666__auto___36880)){
var G__34467_36882 = type;
var G__34467_36883__$1 = (((G__34467_36882 instanceof cljs.core.Keyword))?G__34467_36882.fqn:null);
switch (G__34467_36883__$1) {
case "compute":
var c__34274__auto___36885 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36881,c__34274__auto___36885,G__34467_36882,G__34467_36883__$1,n__4666__auto___36880,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36881,c__34274__auto___36885,G__34467_36882,G__34467_36883__$1,n__4666__auto___36880,jobs,results,process,async){
return (function (state_34480){
var state_val_34481 = (state_34480[(1)]);
if((state_val_34481 === (1))){
var state_34480__$1 = state_34480;
var statearr_34483_36887 = state_34480__$1;
(statearr_34483_36887[(2)] = null);

(statearr_34483_36887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34481 === (2))){
var state_34480__$1 = state_34480;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34480__$1,(4),jobs);
} else {
if((state_val_34481 === (3))){
var inst_34478 = (state_34480[(2)]);
var state_34480__$1 = state_34480;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34480__$1,inst_34478);
} else {
if((state_val_34481 === (4))){
var inst_34470 = (state_34480[(2)]);
var inst_34471 = process(inst_34470);
var state_34480__$1 = state_34480;
if(cljs.core.truth_(inst_34471)){
var statearr_34484_36890 = state_34480__$1;
(statearr_34484_36890[(1)] = (5));

} else {
var statearr_34485_36892 = state_34480__$1;
(statearr_34485_36892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34481 === (5))){
var state_34480__$1 = state_34480;
var statearr_34486_36893 = state_34480__$1;
(statearr_34486_36893[(2)] = null);

(statearr_34486_36893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34481 === (6))){
var state_34480__$1 = state_34480;
var statearr_34487_36894 = state_34480__$1;
(statearr_34487_36894[(2)] = null);

(statearr_34487_36894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34481 === (7))){
var inst_34476 = (state_34480[(2)]);
var state_34480__$1 = state_34480;
var statearr_34488_36896 = state_34480__$1;
(statearr_34488_36896[(2)] = inst_34476);

(statearr_34488_36896[(1)] = (3));


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
});})(__36881,c__34274__auto___36885,G__34467_36882,G__34467_36883__$1,n__4666__auto___36880,jobs,results,process,async))
;
return ((function (__36881,switch__34206__auto__,c__34274__auto___36885,G__34467_36882,G__34467_36883__$1,n__4666__auto___36880,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34490 = [null,null,null,null,null,null,null];
(statearr_34490[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34490[(1)] = (1));

return statearr_34490;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34480){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34480);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34491){if((e34491 instanceof Object)){
var ex__34210__auto__ = e34491;
var statearr_34492_36899 = state_34480;
(statearr_34492_36899[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34491;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36900 = state_34480;
state_34480 = G__36900;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34480){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36881,switch__34206__auto__,c__34274__auto___36885,G__34467_36882,G__34467_36883__$1,n__4666__auto___36880,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34494 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34494[(6)] = c__34274__auto___36885);

return statearr_34494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36881,c__34274__auto___36885,G__34467_36882,G__34467_36883__$1,n__4666__auto___36880,jobs,results,process,async))
);


break;
case "async":
var c__34274__auto___36902 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36881,c__34274__auto___36902,G__34467_36882,G__34467_36883__$1,n__4666__auto___36880,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36881,c__34274__auto___36902,G__34467_36882,G__34467_36883__$1,n__4666__auto___36880,jobs,results,process,async){
return (function (state_34507){
var state_val_34508 = (state_34507[(1)]);
if((state_val_34508 === (1))){
var state_34507__$1 = state_34507;
var statearr_34510_36904 = state_34507__$1;
(statearr_34510_36904[(2)] = null);

(statearr_34510_36904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (2))){
var state_34507__$1 = state_34507;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34507__$1,(4),jobs);
} else {
if((state_val_34508 === (3))){
var inst_34505 = (state_34507[(2)]);
var state_34507__$1 = state_34507;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34507__$1,inst_34505);
} else {
if((state_val_34508 === (4))){
var inst_34497 = (state_34507[(2)]);
var inst_34498 = async(inst_34497);
var state_34507__$1 = state_34507;
if(cljs.core.truth_(inst_34498)){
var statearr_34511_36906 = state_34507__$1;
(statearr_34511_36906[(1)] = (5));

} else {
var statearr_34512_36908 = state_34507__$1;
(statearr_34512_36908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (5))){
var state_34507__$1 = state_34507;
var statearr_34514_36909 = state_34507__$1;
(statearr_34514_36909[(2)] = null);

(statearr_34514_36909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (6))){
var state_34507__$1 = state_34507;
var statearr_34516_36911 = state_34507__$1;
(statearr_34516_36911[(2)] = null);

(statearr_34516_36911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (7))){
var inst_34503 = (state_34507[(2)]);
var state_34507__$1 = state_34507;
var statearr_34520_36912 = state_34507__$1;
(statearr_34520_36912[(2)] = inst_34503);

(statearr_34520_36912[(1)] = (3));


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
});})(__36881,c__34274__auto___36902,G__34467_36882,G__34467_36883__$1,n__4666__auto___36880,jobs,results,process,async))
;
return ((function (__36881,switch__34206__auto__,c__34274__auto___36902,G__34467_36882,G__34467_36883__$1,n__4666__auto___36880,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34523 = [null,null,null,null,null,null,null];
(statearr_34523[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34523[(1)] = (1));

return statearr_34523;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34507){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34507);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34524){if((e34524 instanceof Object)){
var ex__34210__auto__ = e34524;
var statearr_34525_36915 = state_34507;
(statearr_34525_36915[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34524;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36916 = state_34507;
state_34507 = G__36916;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34507){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36881,switch__34206__auto__,c__34274__auto___36902,G__34467_36882,G__34467_36883__$1,n__4666__auto___36880,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34526 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34526[(6)] = c__34274__auto___36902);

return statearr_34526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36881,c__34274__auto___36902,G__34467_36882,G__34467_36883__$1,n__4666__auto___36880,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34467_36883__$1)].join('')));

}

var G__36918 = (__36881 + (1));
__36881 = G__36918;
continue;
} else {
}
break;
}

var c__34274__auto___36920 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34548){
var state_val_34549 = (state_34548[(1)]);
if((state_val_34549 === (7))){
var inst_34544 = (state_34548[(2)]);
var state_34548__$1 = state_34548;
var statearr_34550_36921 = state_34548__$1;
(statearr_34550_36921[(2)] = inst_34544);

(statearr_34550_36921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (1))){
var state_34548__$1 = state_34548;
var statearr_34551_36923 = state_34548__$1;
(statearr_34551_36923[(2)] = null);

(statearr_34551_36923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (4))){
var inst_34529 = (state_34548[(7)]);
var inst_34529__$1 = (state_34548[(2)]);
var inst_34530 = (inst_34529__$1 == null);
var state_34548__$1 = (function (){var statearr_34552 = state_34548;
(statearr_34552[(7)] = inst_34529__$1);

return statearr_34552;
})();
if(cljs.core.truth_(inst_34530)){
var statearr_34554_36925 = state_34548__$1;
(statearr_34554_36925[(1)] = (5));

} else {
var statearr_34555_36926 = state_34548__$1;
(statearr_34555_36926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (6))){
var inst_34529 = (state_34548[(7)]);
var inst_34534 = (state_34548[(8)]);
var inst_34534__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34535 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34536 = [inst_34529,inst_34534__$1];
var inst_34537 = (new cljs.core.PersistentVector(null,2,(5),inst_34535,inst_34536,null));
var state_34548__$1 = (function (){var statearr_34556 = state_34548;
(statearr_34556[(8)] = inst_34534__$1);

return statearr_34556;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34548__$1,(8),jobs,inst_34537);
} else {
if((state_val_34549 === (3))){
var inst_34546 = (state_34548[(2)]);
var state_34548__$1 = state_34548;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34548__$1,inst_34546);
} else {
if((state_val_34549 === (2))){
var state_34548__$1 = state_34548;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34548__$1,(4),from);
} else {
if((state_val_34549 === (9))){
var inst_34541 = (state_34548[(2)]);
var state_34548__$1 = (function (){var statearr_34557 = state_34548;
(statearr_34557[(9)] = inst_34541);

return statearr_34557;
})();
var statearr_34558_36929 = state_34548__$1;
(statearr_34558_36929[(2)] = null);

(statearr_34558_36929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (5))){
var inst_34532 = cljs.core.async.close_BANG_(jobs);
var state_34548__$1 = state_34548;
var statearr_34559_36931 = state_34548__$1;
(statearr_34559_36931[(2)] = inst_34532);

(statearr_34559_36931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (8))){
var inst_34534 = (state_34548[(8)]);
var inst_34539 = (state_34548[(2)]);
var state_34548__$1 = (function (){var statearr_34560 = state_34548;
(statearr_34560[(10)] = inst_34539);

return statearr_34560;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34548__$1,(9),results,inst_34534);
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
var statearr_34565 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34565[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34565[(1)] = (1));

return statearr_34565;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34548){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34548);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34566){if((e34566 instanceof Object)){
var ex__34210__auto__ = e34566;
var statearr_34567_36934 = state_34548;
(statearr_34567_36934[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34566;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36936 = state_34548;
state_34548 = G__36936;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34548){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34571 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34571[(6)] = c__34274__auto___36920);

return statearr_34571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


var c__34274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34609){
var state_val_34610 = (state_34609[(1)]);
if((state_val_34610 === (7))){
var inst_34605 = (state_34609[(2)]);
var state_34609__$1 = state_34609;
var statearr_34611_36938 = state_34609__$1;
(statearr_34611_36938[(2)] = inst_34605);

(statearr_34611_36938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (20))){
var state_34609__$1 = state_34609;
var statearr_34612_36940 = state_34609__$1;
(statearr_34612_36940[(2)] = null);

(statearr_34612_36940[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (1))){
var state_34609__$1 = state_34609;
var statearr_34613_36941 = state_34609__$1;
(statearr_34613_36941[(2)] = null);

(statearr_34613_36941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (4))){
var inst_34574 = (state_34609[(7)]);
var inst_34574__$1 = (state_34609[(2)]);
var inst_34575 = (inst_34574__$1 == null);
var state_34609__$1 = (function (){var statearr_34614 = state_34609;
(statearr_34614[(7)] = inst_34574__$1);

return statearr_34614;
})();
if(cljs.core.truth_(inst_34575)){
var statearr_34615_36943 = state_34609__$1;
(statearr_34615_36943[(1)] = (5));

} else {
var statearr_34616_36945 = state_34609__$1;
(statearr_34616_36945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (15))){
var inst_34587 = (state_34609[(8)]);
var state_34609__$1 = state_34609;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34609__$1,(18),to,inst_34587);
} else {
if((state_val_34610 === (21))){
var inst_34600 = (state_34609[(2)]);
var state_34609__$1 = state_34609;
var statearr_34617_36946 = state_34609__$1;
(statearr_34617_36946[(2)] = inst_34600);

(statearr_34617_36946[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (13))){
var inst_34602 = (state_34609[(2)]);
var state_34609__$1 = (function (){var statearr_34618 = state_34609;
(statearr_34618[(9)] = inst_34602);

return statearr_34618;
})();
var statearr_34619_36948 = state_34609__$1;
(statearr_34619_36948[(2)] = null);

(statearr_34619_36948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (6))){
var inst_34574 = (state_34609[(7)]);
var state_34609__$1 = state_34609;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34609__$1,(11),inst_34574);
} else {
if((state_val_34610 === (17))){
var inst_34595 = (state_34609[(2)]);
var state_34609__$1 = state_34609;
if(cljs.core.truth_(inst_34595)){
var statearr_34622_36950 = state_34609__$1;
(statearr_34622_36950[(1)] = (19));

} else {
var statearr_34623_36951 = state_34609__$1;
(statearr_34623_36951[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (3))){
var inst_34607 = (state_34609[(2)]);
var state_34609__$1 = state_34609;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34609__$1,inst_34607);
} else {
if((state_val_34610 === (12))){
var inst_34584 = (state_34609[(10)]);
var state_34609__$1 = state_34609;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34609__$1,(14),inst_34584);
} else {
if((state_val_34610 === (2))){
var state_34609__$1 = state_34609;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34609__$1,(4),results);
} else {
if((state_val_34610 === (19))){
var state_34609__$1 = state_34609;
var statearr_34625_36954 = state_34609__$1;
(statearr_34625_36954[(2)] = null);

(statearr_34625_36954[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (11))){
var inst_34584 = (state_34609[(2)]);
var state_34609__$1 = (function (){var statearr_34626 = state_34609;
(statearr_34626[(10)] = inst_34584);

return statearr_34626;
})();
var statearr_34627_36956 = state_34609__$1;
(statearr_34627_36956[(2)] = null);

(statearr_34627_36956[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (9))){
var state_34609__$1 = state_34609;
var statearr_34628_36957 = state_34609__$1;
(statearr_34628_36957[(2)] = null);

(statearr_34628_36957[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (5))){
var state_34609__$1 = state_34609;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_36959 = state_34609__$1;
(statearr_34629_36959[(1)] = (8));

} else {
var statearr_34630_36960 = state_34609__$1;
(statearr_34630_36960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (14))){
var inst_34587 = (state_34609[(8)]);
var inst_34587__$1 = (state_34609[(2)]);
var inst_34588 = (inst_34587__$1 == null);
var inst_34589 = cljs.core.not(inst_34588);
var state_34609__$1 = (function (){var statearr_34631 = state_34609;
(statearr_34631[(8)] = inst_34587__$1);

return statearr_34631;
})();
if(inst_34589){
var statearr_34632_36962 = state_34609__$1;
(statearr_34632_36962[(1)] = (15));

} else {
var statearr_34633_36963 = state_34609__$1;
(statearr_34633_36963[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (16))){
var state_34609__$1 = state_34609;
var statearr_34634_36964 = state_34609__$1;
(statearr_34634_36964[(2)] = false);

(statearr_34634_36964[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (10))){
var inst_34581 = (state_34609[(2)]);
var state_34609__$1 = state_34609;
var statearr_34635_36966 = state_34609__$1;
(statearr_34635_36966[(2)] = inst_34581);

(statearr_34635_36966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (18))){
var inst_34592 = (state_34609[(2)]);
var state_34609__$1 = state_34609;
var statearr_34636_36967 = state_34609__$1;
(statearr_34636_36967[(2)] = inst_34592);

(statearr_34636_36967[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (8))){
var inst_34578 = cljs.core.async.close_BANG_(to);
var state_34609__$1 = state_34609;
var statearr_34637_36969 = state_34609__$1;
(statearr_34637_36969[(2)] = inst_34578);

(statearr_34637_36969[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34609){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34609);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34639){if((e34639 instanceof Object)){
var ex__34210__auto__ = e34639;
var statearr_34640_36972 = state_34609;
(statearr_34640_36972[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36973 = state_34609;
state_34609 = G__36973;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34609){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34609);
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
var c__34274__auto___36985 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34673){
var state_val_34674 = (state_34673[(1)]);
if((state_val_34674 === (7))){
var inst_34669 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34675_36987 = state_34673__$1;
(statearr_34675_36987[(2)] = inst_34669);

(statearr_34675_36987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (1))){
var state_34673__$1 = state_34673;
var statearr_34676_36988 = state_34673__$1;
(statearr_34676_36988[(2)] = null);

(statearr_34676_36988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (4))){
var inst_34650 = (state_34673[(7)]);
var inst_34650__$1 = (state_34673[(2)]);
var inst_34651 = (inst_34650__$1 == null);
var state_34673__$1 = (function (){var statearr_34677 = state_34673;
(statearr_34677[(7)] = inst_34650__$1);

return statearr_34677;
})();
if(cljs.core.truth_(inst_34651)){
var statearr_34678_36989 = state_34673__$1;
(statearr_34678_36989[(1)] = (5));

} else {
var statearr_34679_36990 = state_34673__$1;
(statearr_34679_36990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (13))){
var state_34673__$1 = state_34673;
var statearr_34680_36993 = state_34673__$1;
(statearr_34680_36993[(2)] = null);

(statearr_34680_36993[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (6))){
var inst_34650 = (state_34673[(7)]);
var inst_34656 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34650) : p.call(null,inst_34650));
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34656)){
var statearr_34681_36999 = state_34673__$1;
(statearr_34681_36999[(1)] = (9));

} else {
var statearr_34682_37000 = state_34673__$1;
(statearr_34682_37000[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (3))){
var inst_34671 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34673__$1,inst_34671);
} else {
if((state_val_34674 === (12))){
var state_34673__$1 = state_34673;
var statearr_34683_37002 = state_34673__$1;
(statearr_34683_37002[(2)] = null);

(statearr_34683_37002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (2))){
var state_34673__$1 = state_34673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34673__$1,(4),ch);
} else {
if((state_val_34674 === (11))){
var inst_34650 = (state_34673[(7)]);
var inst_34660 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34673__$1,(8),inst_34660,inst_34650);
} else {
if((state_val_34674 === (9))){
var state_34673__$1 = state_34673;
var statearr_34684_37004 = state_34673__$1;
(statearr_34684_37004[(2)] = tc);

(statearr_34684_37004[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (5))){
var inst_34653 = cljs.core.async.close_BANG_(tc);
var inst_34654 = cljs.core.async.close_BANG_(fc);
var state_34673__$1 = (function (){var statearr_34685 = state_34673;
(statearr_34685[(8)] = inst_34653);

return statearr_34685;
})();
var statearr_34686_37008 = state_34673__$1;
(statearr_34686_37008[(2)] = inst_34654);

(statearr_34686_37008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (14))){
var inst_34667 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34687_37009 = state_34673__$1;
(statearr_34687_37009[(2)] = inst_34667);

(statearr_34687_37009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (10))){
var state_34673__$1 = state_34673;
var statearr_34688_37010 = state_34673__$1;
(statearr_34688_37010[(2)] = fc);

(statearr_34688_37010[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (8))){
var inst_34662 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34662)){
var statearr_34689_37012 = state_34673__$1;
(statearr_34689_37012[(1)] = (12));

} else {
var statearr_34690_37013 = state_34673__$1;
(statearr_34690_37013[(1)] = (13));

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
var statearr_34691 = [null,null,null,null,null,null,null,null,null];
(statearr_34691[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34691[(1)] = (1));

return statearr_34691;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34673){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34673);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34692){if((e34692 instanceof Object)){
var ex__34210__auto__ = e34692;
var statearr_34693_37014 = state_34673;
(statearr_34693_37014[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34692;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37015 = state_34673;
state_34673 = G__37015;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34694 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34694[(6)] = c__34274__auto___36985);

return statearr_34694;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34715){
var state_val_34716 = (state_34715[(1)]);
if((state_val_34716 === (7))){
var inst_34711 = (state_34715[(2)]);
var state_34715__$1 = state_34715;
var statearr_34717_37016 = state_34715__$1;
(statearr_34717_37016[(2)] = inst_34711);

(statearr_34717_37016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (1))){
var inst_34695 = init;
var state_34715__$1 = (function (){var statearr_34718 = state_34715;
(statearr_34718[(7)] = inst_34695);

return statearr_34718;
})();
var statearr_34719_37017 = state_34715__$1;
(statearr_34719_37017[(2)] = null);

(statearr_34719_37017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (4))){
var inst_34698 = (state_34715[(8)]);
var inst_34698__$1 = (state_34715[(2)]);
var inst_34699 = (inst_34698__$1 == null);
var state_34715__$1 = (function (){var statearr_34720 = state_34715;
(statearr_34720[(8)] = inst_34698__$1);

return statearr_34720;
})();
if(cljs.core.truth_(inst_34699)){
var statearr_34721_37018 = state_34715__$1;
(statearr_34721_37018[(1)] = (5));

} else {
var statearr_34722_37019 = state_34715__$1;
(statearr_34722_37019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (6))){
var inst_34698 = (state_34715[(8)]);
var inst_34695 = (state_34715[(7)]);
var inst_34702 = (state_34715[(9)]);
var inst_34702__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34695,inst_34698) : f.call(null,inst_34695,inst_34698));
var inst_34703 = cljs.core.reduced_QMARK_(inst_34702__$1);
var state_34715__$1 = (function (){var statearr_34723 = state_34715;
(statearr_34723[(9)] = inst_34702__$1);

return statearr_34723;
})();
if(inst_34703){
var statearr_34724_37024 = state_34715__$1;
(statearr_34724_37024[(1)] = (8));

} else {
var statearr_34725_37026 = state_34715__$1;
(statearr_34725_37026[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (3))){
var inst_34713 = (state_34715[(2)]);
var state_34715__$1 = state_34715;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34715__$1,inst_34713);
} else {
if((state_val_34716 === (2))){
var state_34715__$1 = state_34715;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34715__$1,(4),ch);
} else {
if((state_val_34716 === (9))){
var inst_34702 = (state_34715[(9)]);
var inst_34695 = inst_34702;
var state_34715__$1 = (function (){var statearr_34729 = state_34715;
(statearr_34729[(7)] = inst_34695);

return statearr_34729;
})();
var statearr_34730_37028 = state_34715__$1;
(statearr_34730_37028[(2)] = null);

(statearr_34730_37028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (5))){
var inst_34695 = (state_34715[(7)]);
var state_34715__$1 = state_34715;
var statearr_34731_37029 = state_34715__$1;
(statearr_34731_37029[(2)] = inst_34695);

(statearr_34731_37029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (10))){
var inst_34709 = (state_34715[(2)]);
var state_34715__$1 = state_34715;
var statearr_34732_37030 = state_34715__$1;
(statearr_34732_37030[(2)] = inst_34709);

(statearr_34732_37030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (8))){
var inst_34702 = (state_34715[(9)]);
var inst_34705 = cljs.core.deref(inst_34702);
var state_34715__$1 = state_34715;
var statearr_34736_37031 = state_34715__$1;
(statearr_34736_37031[(2)] = inst_34705);

(statearr_34736_37031[(1)] = (10));


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
var statearr_34739 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34739[(0)] = cljs$core$async$reduce_$_state_machine__34207__auto__);

(statearr_34739[(1)] = (1));

return statearr_34739;
});
var cljs$core$async$reduce_$_state_machine__34207__auto____1 = (function (state_34715){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34715);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34740){if((e34740 instanceof Object)){
var ex__34210__auto__ = e34740;
var statearr_34741_37038 = state_34715;
(statearr_34741_37038[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34740;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37039 = state_34715;
state_34715 = G__37039;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34207__auto__ = function(state_34715){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34207__auto____1.call(this,state_34715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34207__auto____0;
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34207__auto____1;
return cljs$core$async$reduce_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34743 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34743[(6)] = c__34274__auto__);

return statearr_34743;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34751){
var state_val_34752 = (state_34751[(1)]);
if((state_val_34752 === (1))){
var inst_34746 = cljs.core.async.reduce(f__$1,init,ch);
var state_34751__$1 = state_34751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34751__$1,(2),inst_34746);
} else {
if((state_val_34752 === (2))){
var inst_34748 = (state_34751[(2)]);
var inst_34749 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34748) : f__$1.call(null,inst_34748));
var state_34751__$1 = state_34751;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34751__$1,inst_34749);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34207__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34207__auto____0 = (function (){
var statearr_34753 = [null,null,null,null,null,null,null];
(statearr_34753[(0)] = cljs$core$async$transduce_$_state_machine__34207__auto__);

(statearr_34753[(1)] = (1));

return statearr_34753;
});
var cljs$core$async$transduce_$_state_machine__34207__auto____1 = (function (state_34751){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34751);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34754){if((e34754 instanceof Object)){
var ex__34210__auto__ = e34754;
var statearr_34755_37054 = state_34751;
(statearr_34755_37054[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34754;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37059 = state_34751;
state_34751 = G__37059;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34207__auto__ = function(state_34751){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34207__auto____1.call(this,state_34751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34207__auto____0;
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34207__auto____1;
return cljs$core$async$transduce_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34757 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34757[(6)] = c__34274__auto__);

return statearr_34757;
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
var G__34760 = arguments.length;
switch (G__34760) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34790){
var state_val_34791 = (state_34790[(1)]);
if((state_val_34791 === (7))){
var inst_34772 = (state_34790[(2)]);
var state_34790__$1 = state_34790;
var statearr_34792_37077 = state_34790__$1;
(statearr_34792_37077[(2)] = inst_34772);

(statearr_34792_37077[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34791 === (1))){
var inst_34762 = cljs.core.seq(coll);
var inst_34763 = inst_34762;
var state_34790__$1 = (function (){var statearr_34794 = state_34790;
(statearr_34794[(7)] = inst_34763);

return statearr_34794;
})();
var statearr_34795_37081 = state_34790__$1;
(statearr_34795_37081[(2)] = null);

(statearr_34795_37081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34791 === (4))){
var inst_34763 = (state_34790[(7)]);
var inst_34770 = cljs.core.first(inst_34763);
var state_34790__$1 = state_34790;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34790__$1,(7),ch,inst_34770);
} else {
if((state_val_34791 === (13))){
var inst_34784 = (state_34790[(2)]);
var state_34790__$1 = state_34790;
var statearr_34796_37087 = state_34790__$1;
(statearr_34796_37087[(2)] = inst_34784);

(statearr_34796_37087[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34791 === (6))){
var inst_34775 = (state_34790[(2)]);
var state_34790__$1 = state_34790;
if(cljs.core.truth_(inst_34775)){
var statearr_34797_37093 = state_34790__$1;
(statearr_34797_37093[(1)] = (8));

} else {
var statearr_34798_37097 = state_34790__$1;
(statearr_34798_37097[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34791 === (3))){
var inst_34788 = (state_34790[(2)]);
var state_34790__$1 = state_34790;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34790__$1,inst_34788);
} else {
if((state_val_34791 === (12))){
var state_34790__$1 = state_34790;
var statearr_34799_37100 = state_34790__$1;
(statearr_34799_37100[(2)] = null);

(statearr_34799_37100[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34791 === (2))){
var inst_34763 = (state_34790[(7)]);
var state_34790__$1 = state_34790;
if(cljs.core.truth_(inst_34763)){
var statearr_34803_37103 = state_34790__$1;
(statearr_34803_37103[(1)] = (4));

} else {
var statearr_34804_37106 = state_34790__$1;
(statearr_34804_37106[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34791 === (11))){
var inst_34781 = cljs.core.async.close_BANG_(ch);
var state_34790__$1 = state_34790;
var statearr_34805_37107 = state_34790__$1;
(statearr_34805_37107[(2)] = inst_34781);

(statearr_34805_37107[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34791 === (9))){
var state_34790__$1 = state_34790;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34806_37109 = state_34790__$1;
(statearr_34806_37109[(1)] = (11));

} else {
var statearr_34807_37110 = state_34790__$1;
(statearr_34807_37110[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34791 === (5))){
var inst_34763 = (state_34790[(7)]);
var state_34790__$1 = state_34790;
var statearr_34811_37114 = state_34790__$1;
(statearr_34811_37114[(2)] = inst_34763);

(statearr_34811_37114[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34791 === (10))){
var inst_34786 = (state_34790[(2)]);
var state_34790__$1 = state_34790;
var statearr_34812_37120 = state_34790__$1;
(statearr_34812_37120[(2)] = inst_34786);

(statearr_34812_37120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34791 === (8))){
var inst_34763 = (state_34790[(7)]);
var inst_34777 = cljs.core.next(inst_34763);
var inst_34763__$1 = inst_34777;
var state_34790__$1 = (function (){var statearr_34813 = state_34790;
(statearr_34813[(7)] = inst_34763__$1);

return statearr_34813;
})();
var statearr_34814_37121 = state_34790__$1;
(statearr_34814_37121[(2)] = null);

(statearr_34814_37121[(1)] = (2));


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
var statearr_34815 = [null,null,null,null,null,null,null,null];
(statearr_34815[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34815[(1)] = (1));

return statearr_34815;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34790){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34790);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34816){if((e34816 instanceof Object)){
var ex__34210__auto__ = e34816;
var statearr_34817_37130 = state_34790;
(statearr_34817_37130[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34816;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37133 = state_34790;
state_34790 = G__37133;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34790){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34821 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34821[(6)] = c__34274__auto__);

return statearr_34821;
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
var c__34274__auto___37175 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34978){
var state_val_34979 = (state_34978[(1)]);
if((state_val_34979 === (7))){
var inst_34974 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_34980_37177 = state_34978__$1;
(statearr_34980_37177[(2)] = inst_34974);

(statearr_34980_37177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (20))){
var inst_34868 = (state_34978[(7)]);
var inst_34883 = cljs.core.first(inst_34868);
var inst_34884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34883,(0),null);
var inst_34885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34883,(1),null);
var state_34978__$1 = (function (){var statearr_34981 = state_34978;
(statearr_34981[(8)] = inst_34884);

return statearr_34981;
})();
if(cljs.core.truth_(inst_34885)){
var statearr_34982_37183 = state_34978__$1;
(statearr_34982_37183[(1)] = (22));

} else {
var statearr_34983_37184 = state_34978__$1;
(statearr_34983_37184[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (27))){
var inst_34913 = (state_34978[(9)]);
var inst_34920 = (state_34978[(10)]);
var inst_34915 = (state_34978[(11)]);
var inst_34834 = (state_34978[(12)]);
var inst_34920__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34913,inst_34915);
var inst_34921 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34920__$1,inst_34834,done);
var state_34978__$1 = (function (){var statearr_34984 = state_34978;
(statearr_34984[(10)] = inst_34920__$1);

return statearr_34984;
})();
if(cljs.core.truth_(inst_34921)){
var statearr_34985_37193 = state_34978__$1;
(statearr_34985_37193[(1)] = (30));

} else {
var statearr_34986_37194 = state_34978__$1;
(statearr_34986_37194[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (1))){
var state_34978__$1 = state_34978;
var statearr_34987_37198 = state_34978__$1;
(statearr_34987_37198[(2)] = null);

(statearr_34987_37198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (24))){
var inst_34868 = (state_34978[(7)]);
var inst_34890 = (state_34978[(2)]);
var inst_34891 = cljs.core.next(inst_34868);
var inst_34843 = inst_34891;
var inst_34844 = null;
var inst_34845 = (0);
var inst_34846 = (0);
var state_34978__$1 = (function (){var statearr_34988 = state_34978;
(statearr_34988[(13)] = inst_34843);

(statearr_34988[(14)] = inst_34845);

(statearr_34988[(15)] = inst_34844);

(statearr_34988[(16)] = inst_34846);

(statearr_34988[(17)] = inst_34890);

return statearr_34988;
})();
var statearr_34989_37206 = state_34978__$1;
(statearr_34989_37206[(2)] = null);

(statearr_34989_37206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (39))){
var state_34978__$1 = state_34978;
var statearr_34993_37212 = state_34978__$1;
(statearr_34993_37212[(2)] = null);

(statearr_34993_37212[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (4))){
var inst_34834 = (state_34978[(12)]);
var inst_34834__$1 = (state_34978[(2)]);
var inst_34835 = (inst_34834__$1 == null);
var state_34978__$1 = (function (){var statearr_34994 = state_34978;
(statearr_34994[(12)] = inst_34834__$1);

return statearr_34994;
})();
if(cljs.core.truth_(inst_34835)){
var statearr_34995_37215 = state_34978__$1;
(statearr_34995_37215[(1)] = (5));

} else {
var statearr_34996_37218 = state_34978__$1;
(statearr_34996_37218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (15))){
var inst_34843 = (state_34978[(13)]);
var inst_34845 = (state_34978[(14)]);
var inst_34844 = (state_34978[(15)]);
var inst_34846 = (state_34978[(16)]);
var inst_34864 = (state_34978[(2)]);
var inst_34865 = (inst_34846 + (1));
var tmp34990 = inst_34843;
var tmp34991 = inst_34845;
var tmp34992 = inst_34844;
var inst_34843__$1 = tmp34990;
var inst_34844__$1 = tmp34992;
var inst_34845__$1 = tmp34991;
var inst_34846__$1 = inst_34865;
var state_34978__$1 = (function (){var statearr_34997 = state_34978;
(statearr_34997[(13)] = inst_34843__$1);

(statearr_34997[(14)] = inst_34845__$1);

(statearr_34997[(15)] = inst_34844__$1);

(statearr_34997[(16)] = inst_34846__$1);

(statearr_34997[(18)] = inst_34864);

return statearr_34997;
})();
var statearr_34998_37232 = state_34978__$1;
(statearr_34998_37232[(2)] = null);

(statearr_34998_37232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (21))){
var inst_34894 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35002_37233 = state_34978__$1;
(statearr_35002_37233[(2)] = inst_34894);

(statearr_35002_37233[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (31))){
var inst_34920 = (state_34978[(10)]);
var inst_34924 = done(null);
var inst_34925 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34920);
var state_34978__$1 = (function (){var statearr_35003 = state_34978;
(statearr_35003[(19)] = inst_34924);

return statearr_35003;
})();
var statearr_35004_37238 = state_34978__$1;
(statearr_35004_37238[(2)] = inst_34925);

(statearr_35004_37238[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (32))){
var inst_34914 = (state_34978[(20)]);
var inst_34913 = (state_34978[(9)]);
var inst_34915 = (state_34978[(11)]);
var inst_34912 = (state_34978[(21)]);
var inst_34927 = (state_34978[(2)]);
var inst_34931 = (inst_34915 + (1));
var tmp34999 = inst_34914;
var tmp35000 = inst_34913;
var tmp35001 = inst_34912;
var inst_34912__$1 = tmp35001;
var inst_34913__$1 = tmp35000;
var inst_34914__$1 = tmp34999;
var inst_34915__$1 = inst_34931;
var state_34978__$1 = (function (){var statearr_35005 = state_34978;
(statearr_35005[(22)] = inst_34927);

(statearr_35005[(20)] = inst_34914__$1);

(statearr_35005[(9)] = inst_34913__$1);

(statearr_35005[(11)] = inst_34915__$1);

(statearr_35005[(21)] = inst_34912__$1);

return statearr_35005;
})();
var statearr_35006_37241 = state_34978__$1;
(statearr_35006_37241[(2)] = null);

(statearr_35006_37241[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (40))){
var inst_34943 = (state_34978[(23)]);
var inst_34947 = done(null);
var inst_34948 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34943);
var state_34978__$1 = (function (){var statearr_35007 = state_34978;
(statearr_35007[(24)] = inst_34947);

return statearr_35007;
})();
var statearr_35008_37247 = state_34978__$1;
(statearr_35008_37247[(2)] = inst_34948);

(statearr_35008_37247[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (33))){
var inst_34934 = (state_34978[(25)]);
var inst_34936 = cljs.core.chunked_seq_QMARK_(inst_34934);
var state_34978__$1 = state_34978;
if(inst_34936){
var statearr_35009_37249 = state_34978__$1;
(statearr_35009_37249[(1)] = (36));

} else {
var statearr_35010_37250 = state_34978__$1;
(statearr_35010_37250[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (13))){
var inst_34857 = (state_34978[(26)]);
var inst_34861 = cljs.core.async.close_BANG_(inst_34857);
var state_34978__$1 = state_34978;
var statearr_35011_37254 = state_34978__$1;
(statearr_35011_37254[(2)] = inst_34861);

(statearr_35011_37254[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (22))){
var inst_34884 = (state_34978[(8)]);
var inst_34887 = cljs.core.async.close_BANG_(inst_34884);
var state_34978__$1 = state_34978;
var statearr_35012_37256 = state_34978__$1;
(statearr_35012_37256[(2)] = inst_34887);

(statearr_35012_37256[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (36))){
var inst_34934 = (state_34978[(25)]);
var inst_34938 = cljs.core.chunk_first(inst_34934);
var inst_34939 = cljs.core.chunk_rest(inst_34934);
var inst_34940 = cljs.core.count(inst_34938);
var inst_34912 = inst_34939;
var inst_34913 = inst_34938;
var inst_34914 = inst_34940;
var inst_34915 = (0);
var state_34978__$1 = (function (){var statearr_35013 = state_34978;
(statearr_35013[(20)] = inst_34914);

(statearr_35013[(9)] = inst_34913);

(statearr_35013[(11)] = inst_34915);

(statearr_35013[(21)] = inst_34912);

return statearr_35013;
})();
var statearr_35014_37263 = state_34978__$1;
(statearr_35014_37263[(2)] = null);

(statearr_35014_37263[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (41))){
var inst_34934 = (state_34978[(25)]);
var inst_34950 = (state_34978[(2)]);
var inst_34954 = cljs.core.next(inst_34934);
var inst_34912 = inst_34954;
var inst_34913 = null;
var inst_34914 = (0);
var inst_34915 = (0);
var state_34978__$1 = (function (){var statearr_35015 = state_34978;
(statearr_35015[(27)] = inst_34950);

(statearr_35015[(20)] = inst_34914);

(statearr_35015[(9)] = inst_34913);

(statearr_35015[(11)] = inst_34915);

(statearr_35015[(21)] = inst_34912);

return statearr_35015;
})();
var statearr_35016_37271 = state_34978__$1;
(statearr_35016_37271[(2)] = null);

(statearr_35016_37271[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (43))){
var state_34978__$1 = state_34978;
var statearr_35019_37276 = state_34978__$1;
(statearr_35019_37276[(2)] = null);

(statearr_35019_37276[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (29))){
var inst_34962 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35022_37280 = state_34978__$1;
(statearr_35022_37280[(2)] = inst_34962);

(statearr_35022_37280[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (44))){
var inst_34971 = (state_34978[(2)]);
var state_34978__$1 = (function (){var statearr_35025 = state_34978;
(statearr_35025[(28)] = inst_34971);

return statearr_35025;
})();
var statearr_35026_37283 = state_34978__$1;
(statearr_35026_37283[(2)] = null);

(statearr_35026_37283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (6))){
var inst_34904 = (state_34978[(29)]);
var inst_34903 = cljs.core.deref(cs);
var inst_34904__$1 = cljs.core.keys(inst_34903);
var inst_34905 = cljs.core.count(inst_34904__$1);
var inst_34906 = cljs.core.reset_BANG_(dctr,inst_34905);
var inst_34911 = cljs.core.seq(inst_34904__$1);
var inst_34912 = inst_34911;
var inst_34913 = null;
var inst_34914 = (0);
var inst_34915 = (0);
var state_34978__$1 = (function (){var statearr_35027 = state_34978;
(statearr_35027[(20)] = inst_34914);

(statearr_35027[(9)] = inst_34913);

(statearr_35027[(30)] = inst_34906);

(statearr_35027[(11)] = inst_34915);

(statearr_35027[(21)] = inst_34912);

(statearr_35027[(29)] = inst_34904__$1);

return statearr_35027;
})();
var statearr_35028_37294 = state_34978__$1;
(statearr_35028_37294[(2)] = null);

(statearr_35028_37294[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (28))){
var inst_34934 = (state_34978[(25)]);
var inst_34912 = (state_34978[(21)]);
var inst_34934__$1 = cljs.core.seq(inst_34912);
var state_34978__$1 = (function (){var statearr_35029 = state_34978;
(statearr_35029[(25)] = inst_34934__$1);

return statearr_35029;
})();
if(inst_34934__$1){
var statearr_35030_37300 = state_34978__$1;
(statearr_35030_37300[(1)] = (33));

} else {
var statearr_35031_37301 = state_34978__$1;
(statearr_35031_37301[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (25))){
var inst_34914 = (state_34978[(20)]);
var inst_34915 = (state_34978[(11)]);
var inst_34917 = (inst_34915 < inst_34914);
var inst_34918 = inst_34917;
var state_34978__$1 = state_34978;
if(cljs.core.truth_(inst_34918)){
var statearr_35032_37306 = state_34978__$1;
(statearr_35032_37306[(1)] = (27));

} else {
var statearr_35035_37307 = state_34978__$1;
(statearr_35035_37307[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (34))){
var state_34978__$1 = state_34978;
var statearr_35040_37308 = state_34978__$1;
(statearr_35040_37308[(2)] = null);

(statearr_35040_37308[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (17))){
var state_34978__$1 = state_34978;
var statearr_35041_37309 = state_34978__$1;
(statearr_35041_37309[(2)] = null);

(statearr_35041_37309[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (3))){
var inst_34976 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34978__$1,inst_34976);
} else {
if((state_val_34979 === (12))){
var inst_34899 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35042_37313 = state_34978__$1;
(statearr_35042_37313[(2)] = inst_34899);

(statearr_35042_37313[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (2))){
var state_34978__$1 = state_34978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34978__$1,(4),ch);
} else {
if((state_val_34979 === (23))){
var state_34978__$1 = state_34978;
var statearr_35043_37317 = state_34978__$1;
(statearr_35043_37317[(2)] = null);

(statearr_35043_37317[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (35))){
var inst_34960 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35044_37318 = state_34978__$1;
(statearr_35044_37318[(2)] = inst_34960);

(statearr_35044_37318[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (19))){
var inst_34868 = (state_34978[(7)]);
var inst_34875 = cljs.core.chunk_first(inst_34868);
var inst_34876 = cljs.core.chunk_rest(inst_34868);
var inst_34877 = cljs.core.count(inst_34875);
var inst_34843 = inst_34876;
var inst_34844 = inst_34875;
var inst_34845 = inst_34877;
var inst_34846 = (0);
var state_34978__$1 = (function (){var statearr_35049 = state_34978;
(statearr_35049[(13)] = inst_34843);

(statearr_35049[(14)] = inst_34845);

(statearr_35049[(15)] = inst_34844);

(statearr_35049[(16)] = inst_34846);

return statearr_35049;
})();
var statearr_35051_37322 = state_34978__$1;
(statearr_35051_37322[(2)] = null);

(statearr_35051_37322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (11))){
var inst_34843 = (state_34978[(13)]);
var inst_34868 = (state_34978[(7)]);
var inst_34868__$1 = cljs.core.seq(inst_34843);
var state_34978__$1 = (function (){var statearr_35053 = state_34978;
(statearr_35053[(7)] = inst_34868__$1);

return statearr_35053;
})();
if(inst_34868__$1){
var statearr_35054_37329 = state_34978__$1;
(statearr_35054_37329[(1)] = (16));

} else {
var statearr_35055_37330 = state_34978__$1;
(statearr_35055_37330[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (9))){
var inst_34901 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35056_37333 = state_34978__$1;
(statearr_35056_37333[(2)] = inst_34901);

(statearr_35056_37333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (5))){
var inst_34841 = cljs.core.deref(cs);
var inst_34842 = cljs.core.seq(inst_34841);
var inst_34843 = inst_34842;
var inst_34844 = null;
var inst_34845 = (0);
var inst_34846 = (0);
var state_34978__$1 = (function (){var statearr_35057 = state_34978;
(statearr_35057[(13)] = inst_34843);

(statearr_35057[(14)] = inst_34845);

(statearr_35057[(15)] = inst_34844);

(statearr_35057[(16)] = inst_34846);

return statearr_35057;
})();
var statearr_35058_37340 = state_34978__$1;
(statearr_35058_37340[(2)] = null);

(statearr_35058_37340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (14))){
var state_34978__$1 = state_34978;
var statearr_35061_37344 = state_34978__$1;
(statearr_35061_37344[(2)] = null);

(statearr_35061_37344[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (45))){
var inst_34968 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35064_37351 = state_34978__$1;
(statearr_35064_37351[(2)] = inst_34968);

(statearr_35064_37351[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (26))){
var inst_34904 = (state_34978[(29)]);
var inst_34964 = (state_34978[(2)]);
var inst_34965 = cljs.core.seq(inst_34904);
var state_34978__$1 = (function (){var statearr_35067 = state_34978;
(statearr_35067[(31)] = inst_34964);

return statearr_35067;
})();
if(inst_34965){
var statearr_35068_37354 = state_34978__$1;
(statearr_35068_37354[(1)] = (42));

} else {
var statearr_35069_37355 = state_34978__$1;
(statearr_35069_37355[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (16))){
var inst_34868 = (state_34978[(7)]);
var inst_34873 = cljs.core.chunked_seq_QMARK_(inst_34868);
var state_34978__$1 = state_34978;
if(inst_34873){
var statearr_35070_37362 = state_34978__$1;
(statearr_35070_37362[(1)] = (19));

} else {
var statearr_35071_37364 = state_34978__$1;
(statearr_35071_37364[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (38))){
var inst_34957 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35075_37367 = state_34978__$1;
(statearr_35075_37367[(2)] = inst_34957);

(statearr_35075_37367[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (30))){
var state_34978__$1 = state_34978;
var statearr_35077_37370 = state_34978__$1;
(statearr_35077_37370[(2)] = null);

(statearr_35077_37370[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (10))){
var inst_34844 = (state_34978[(15)]);
var inst_34846 = (state_34978[(16)]);
var inst_34855 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34844,inst_34846);
var inst_34857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34855,(0),null);
var inst_34859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34855,(1),null);
var state_34978__$1 = (function (){var statearr_35091 = state_34978;
(statearr_35091[(26)] = inst_34857);

return statearr_35091;
})();
if(cljs.core.truth_(inst_34859)){
var statearr_35094_37378 = state_34978__$1;
(statearr_35094_37378[(1)] = (13));

} else {
var statearr_35095_37382 = state_34978__$1;
(statearr_35095_37382[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (18))){
var inst_34897 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35098_37386 = state_34978__$1;
(statearr_35098_37386[(2)] = inst_34897);

(statearr_35098_37386[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (42))){
var state_34978__$1 = state_34978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34978__$1,(45),dchan);
} else {
if((state_val_34979 === (37))){
var inst_34934 = (state_34978[(25)]);
var inst_34834 = (state_34978[(12)]);
var inst_34943 = (state_34978[(23)]);
var inst_34943__$1 = cljs.core.first(inst_34934);
var inst_34944 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34943__$1,inst_34834,done);
var state_34978__$1 = (function (){var statearr_35101 = state_34978;
(statearr_35101[(23)] = inst_34943__$1);

return statearr_35101;
})();
if(cljs.core.truth_(inst_34944)){
var statearr_35102_37391 = state_34978__$1;
(statearr_35102_37391[(1)] = (39));

} else {
var statearr_35104_37392 = state_34978__$1;
(statearr_35104_37392[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (8))){
var inst_34845 = (state_34978[(14)]);
var inst_34846 = (state_34978[(16)]);
var inst_34849 = (inst_34846 < inst_34845);
var inst_34850 = inst_34849;
var state_34978__$1 = state_34978;
if(cljs.core.truth_(inst_34850)){
var statearr_35109_37397 = state_34978__$1;
(statearr_35109_37397[(1)] = (10));

} else {
var statearr_35111_37401 = state_34978__$1;
(statearr_35111_37401[(1)] = (11));

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
var statearr_35121 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35121[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35121[(1)] = (1));

return statearr_35121;
});
var cljs$core$async$mult_$_state_machine__34207__auto____1 = (function (state_34978){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34978);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35128){if((e35128 instanceof Object)){
var ex__34210__auto__ = e35128;
var statearr_35130_37409 = state_34978;
(statearr_35130_37409[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35128;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37411 = state_34978;
state_34978 = G__37411;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34207__auto__ = function(state_34978){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34207__auto____1.call(this,state_34978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34207__auto____0;
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34207__auto____1;
return cljs$core$async$mult_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35137 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35137[(6)] = c__34274__auto___37175);

return statearr_35137;
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
var G__35150 = arguments.length;
switch (G__35150) {
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
var len__4789__auto___37448 = arguments.length;
var i__4790__auto___37451 = (0);
while(true){
if((i__4790__auto___37451 < len__4789__auto___37448)){
args__4795__auto__.push((arguments[i__4790__auto___37451]));

var G__37453 = (i__4790__auto___37451 + (1));
i__4790__auto___37451 = G__37453;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35295){
var map__35296 = p__35295;
var map__35296__$1 = (((((!((map__35296 == null))))?(((((map__35296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35296):map__35296);
var opts = map__35296__$1;
var statearr_35304_37462 = state;
(statearr_35304_37462[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35310_37467 = state;
(statearr_35310_37467[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35316_37470 = state;
(statearr_35316_37470[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35273){
var G__35275 = cljs.core.first(seq35273);
var seq35273__$1 = cljs.core.next(seq35273);
var G__35276 = cljs.core.first(seq35273__$1);
var seq35273__$2 = cljs.core.next(seq35273__$1);
var G__35277 = cljs.core.first(seq35273__$2);
var seq35273__$3 = cljs.core.next(seq35273__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35275,G__35276,G__35277,seq35273__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35369 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35369 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35370){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35370 = meta35370;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35371,meta35370__$1){
var self__ = this;
var _35371__$1 = this;
return (new cljs.core.async.t_cljs$core$async35369(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35370__$1));
}));

(cljs.core.async.t_cljs$core$async35369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35371){
var self__ = this;
var _35371__$1 = this;
return self__.meta35370;
}));

(cljs.core.async.t_cljs$core$async35369.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35369.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35369.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35369.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35369.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35369.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35369.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35369.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35369.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35370","meta35370",-1077361373,null)], null);
}));

(cljs.core.async.t_cljs$core$async35369.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35369.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35369");

(cljs.core.async.t_cljs$core$async35369.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35369");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35369.
 */
cljs.core.async.__GT_t_cljs$core$async35369 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35369(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35370){
return (new cljs.core.async.t_cljs$core$async35369(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35370));
});

}

return (new cljs.core.async.t_cljs$core$async35369(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37537 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35528){
var state_val_35530 = (state_35528[(1)]);
if((state_val_35530 === (7))){
var inst_35418 = (state_35528[(2)]);
var state_35528__$1 = state_35528;
var statearr_35533_37541 = state_35528__$1;
(statearr_35533_37541[(2)] = inst_35418);

(statearr_35533_37541[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (20))){
var inst_35430 = (state_35528[(7)]);
var state_35528__$1 = state_35528;
var statearr_35536_37544 = state_35528__$1;
(statearr_35536_37544[(2)] = inst_35430);

(statearr_35536_37544[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (27))){
var state_35528__$1 = state_35528;
var statearr_35547_37553 = state_35528__$1;
(statearr_35547_37553[(2)] = null);

(statearr_35547_37553[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (1))){
var inst_35402 = (state_35528[(8)]);
var inst_35402__$1 = calc_state();
var inst_35407 = (inst_35402__$1 == null);
var inst_35408 = cljs.core.not(inst_35407);
var state_35528__$1 = (function (){var statearr_35561 = state_35528;
(statearr_35561[(8)] = inst_35402__$1);

return statearr_35561;
})();
if(inst_35408){
var statearr_35563_37557 = state_35528__$1;
(statearr_35563_37557[(1)] = (2));

} else {
var statearr_35565_37558 = state_35528__$1;
(statearr_35565_37558[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (24))){
var inst_35491 = (state_35528[(9)]);
var inst_35458 = (state_35528[(10)]);
var inst_35472 = (state_35528[(11)]);
var inst_35491__$1 = (inst_35458.cljs$core$IFn$_invoke$arity$1 ? inst_35458.cljs$core$IFn$_invoke$arity$1(inst_35472) : inst_35458.call(null,inst_35472));
var state_35528__$1 = (function (){var statearr_35567 = state_35528;
(statearr_35567[(9)] = inst_35491__$1);

return statearr_35567;
})();
if(cljs.core.truth_(inst_35491__$1)){
var statearr_35569_37568 = state_35528__$1;
(statearr_35569_37568[(1)] = (29));

} else {
var statearr_35571_37569 = state_35528__$1;
(statearr_35571_37569[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (4))){
var inst_35421 = (state_35528[(2)]);
var state_35528__$1 = state_35528;
if(cljs.core.truth_(inst_35421)){
var statearr_35581_37572 = state_35528__$1;
(statearr_35581_37572[(1)] = (8));

} else {
var statearr_35582_37576 = state_35528__$1;
(statearr_35582_37576[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (15))){
var inst_35450 = (state_35528[(2)]);
var state_35528__$1 = state_35528;
if(cljs.core.truth_(inst_35450)){
var statearr_35592_37583 = state_35528__$1;
(statearr_35592_37583[(1)] = (19));

} else {
var statearr_35594_37584 = state_35528__$1;
(statearr_35594_37584[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (21))){
var inst_35457 = (state_35528[(12)]);
var inst_35457__$1 = (state_35528[(2)]);
var inst_35458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35457__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35457__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35460 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35457__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35528__$1 = (function (){var statearr_35600 = state_35528;
(statearr_35600[(10)] = inst_35458);

(statearr_35600[(13)] = inst_35459);

(statearr_35600[(12)] = inst_35457__$1);

return statearr_35600;
})();
return cljs.core.async.ioc_alts_BANG_(state_35528__$1,(22),inst_35460);
} else {
if((state_val_35530 === (31))){
var inst_35503 = (state_35528[(2)]);
var state_35528__$1 = state_35528;
if(cljs.core.truth_(inst_35503)){
var statearr_35610_37596 = state_35528__$1;
(statearr_35610_37596[(1)] = (32));

} else {
var statearr_35612_37597 = state_35528__$1;
(statearr_35612_37597[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (32))){
var inst_35470 = (state_35528[(14)]);
var state_35528__$1 = state_35528;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35528__$1,(35),out,inst_35470);
} else {
if((state_val_35530 === (33))){
var inst_35457 = (state_35528[(12)]);
var inst_35430 = inst_35457;
var state_35528__$1 = (function (){var statearr_35622 = state_35528;
(statearr_35622[(7)] = inst_35430);

return statearr_35622;
})();
var statearr_35624_37609 = state_35528__$1;
(statearr_35624_37609[(2)] = null);

(statearr_35624_37609[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (13))){
var inst_35430 = (state_35528[(7)]);
var inst_35439 = inst_35430.cljs$lang$protocol_mask$partition0$;
var inst_35440 = (inst_35439 & (64));
var inst_35441 = inst_35430.cljs$core$ISeq$;
var inst_35442 = (cljs.core.PROTOCOL_SENTINEL === inst_35441);
var inst_35443 = ((inst_35440) || (inst_35442));
var state_35528__$1 = state_35528;
if(cljs.core.truth_(inst_35443)){
var statearr_35631_37616 = state_35528__$1;
(statearr_35631_37616[(1)] = (16));

} else {
var statearr_35634_37618 = state_35528__$1;
(statearr_35634_37618[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (22))){
var inst_35470 = (state_35528[(14)]);
var inst_35472 = (state_35528[(11)]);
var inst_35468 = (state_35528[(2)]);
var inst_35470__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35468,(0),null);
var inst_35472__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35468,(1),null);
var inst_35473 = (inst_35470__$1 == null);
var inst_35474 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35472__$1,change);
var inst_35475 = ((inst_35473) || (inst_35474));
var state_35528__$1 = (function (){var statearr_35642 = state_35528;
(statearr_35642[(14)] = inst_35470__$1);

(statearr_35642[(11)] = inst_35472__$1);

return statearr_35642;
})();
if(cljs.core.truth_(inst_35475)){
var statearr_35645_37628 = state_35528__$1;
(statearr_35645_37628[(1)] = (23));

} else {
var statearr_35647_37633 = state_35528__$1;
(statearr_35647_37633[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (36))){
var inst_35457 = (state_35528[(12)]);
var inst_35430 = inst_35457;
var state_35528__$1 = (function (){var statearr_35652 = state_35528;
(statearr_35652[(7)] = inst_35430);

return statearr_35652;
})();
var statearr_35654_37637 = state_35528__$1;
(statearr_35654_37637[(2)] = null);

(statearr_35654_37637[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (29))){
var inst_35491 = (state_35528[(9)]);
var state_35528__$1 = state_35528;
var statearr_35658_37639 = state_35528__$1;
(statearr_35658_37639[(2)] = inst_35491);

(statearr_35658_37639[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (6))){
var state_35528__$1 = state_35528;
var statearr_35660_37647 = state_35528__$1;
(statearr_35660_37647[(2)] = false);

(statearr_35660_37647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (28))){
var inst_35486 = (state_35528[(2)]);
var inst_35488 = calc_state();
var inst_35430 = inst_35488;
var state_35528__$1 = (function (){var statearr_35665 = state_35528;
(statearr_35665[(15)] = inst_35486);

(statearr_35665[(7)] = inst_35430);

return statearr_35665;
})();
var statearr_35668_37650 = state_35528__$1;
(statearr_35668_37650[(2)] = null);

(statearr_35668_37650[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (25))){
var inst_35519 = (state_35528[(2)]);
var state_35528__$1 = state_35528;
var statearr_35669_37656 = state_35528__$1;
(statearr_35669_37656[(2)] = inst_35519);

(statearr_35669_37656[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (34))){
var inst_35517 = (state_35528[(2)]);
var state_35528__$1 = state_35528;
var statearr_35670_37663 = state_35528__$1;
(statearr_35670_37663[(2)] = inst_35517);

(statearr_35670_37663[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (17))){
var state_35528__$1 = state_35528;
var statearr_35674_37665 = state_35528__$1;
(statearr_35674_37665[(2)] = false);

(statearr_35674_37665[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (3))){
var state_35528__$1 = state_35528;
var statearr_35680_37667 = state_35528__$1;
(statearr_35680_37667[(2)] = false);

(statearr_35680_37667[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (12))){
var inst_35521 = (state_35528[(2)]);
var state_35528__$1 = state_35528;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35528__$1,inst_35521);
} else {
if((state_val_35530 === (2))){
var inst_35402 = (state_35528[(8)]);
var inst_35410 = inst_35402.cljs$lang$protocol_mask$partition0$;
var inst_35411 = (inst_35410 & (64));
var inst_35412 = inst_35402.cljs$core$ISeq$;
var inst_35413 = (cljs.core.PROTOCOL_SENTINEL === inst_35412);
var inst_35414 = ((inst_35411) || (inst_35413));
var state_35528__$1 = state_35528;
if(cljs.core.truth_(inst_35414)){
var statearr_35694_37677 = state_35528__$1;
(statearr_35694_37677[(1)] = (5));

} else {
var statearr_35697_37678 = state_35528__$1;
(statearr_35697_37678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (23))){
var inst_35470 = (state_35528[(14)]);
var inst_35477 = (inst_35470 == null);
var state_35528__$1 = state_35528;
if(cljs.core.truth_(inst_35477)){
var statearr_35701_37685 = state_35528__$1;
(statearr_35701_37685[(1)] = (26));

} else {
var statearr_35704_37687 = state_35528__$1;
(statearr_35704_37687[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (35))){
var inst_35507 = (state_35528[(2)]);
var state_35528__$1 = state_35528;
if(cljs.core.truth_(inst_35507)){
var statearr_35709_37689 = state_35528__$1;
(statearr_35709_37689[(1)] = (36));

} else {
var statearr_35712_37690 = state_35528__$1;
(statearr_35712_37690[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (19))){
var inst_35430 = (state_35528[(7)]);
var inst_35453 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35430);
var state_35528__$1 = state_35528;
var statearr_35714_37694 = state_35528__$1;
(statearr_35714_37694[(2)] = inst_35453);

(statearr_35714_37694[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (11))){
var inst_35430 = (state_35528[(7)]);
var inst_35436 = (inst_35430 == null);
var inst_35437 = cljs.core.not(inst_35436);
var state_35528__$1 = state_35528;
if(inst_35437){
var statearr_35715_37695 = state_35528__$1;
(statearr_35715_37695[(1)] = (13));

} else {
var statearr_35716_37696 = state_35528__$1;
(statearr_35716_37696[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (9))){
var inst_35402 = (state_35528[(8)]);
var state_35528__$1 = state_35528;
var statearr_35717_37699 = state_35528__$1;
(statearr_35717_37699[(2)] = inst_35402);

(statearr_35717_37699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (5))){
var state_35528__$1 = state_35528;
var statearr_35718_37700 = state_35528__$1;
(statearr_35718_37700[(2)] = true);

(statearr_35718_37700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (14))){
var state_35528__$1 = state_35528;
var statearr_35719_37703 = state_35528__$1;
(statearr_35719_37703[(2)] = false);

(statearr_35719_37703[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (26))){
var inst_35472 = (state_35528[(11)]);
var inst_35481 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35472);
var state_35528__$1 = state_35528;
var statearr_35722_37704 = state_35528__$1;
(statearr_35722_37704[(2)] = inst_35481);

(statearr_35722_37704[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (16))){
var state_35528__$1 = state_35528;
var statearr_35723_37709 = state_35528__$1;
(statearr_35723_37709[(2)] = true);

(statearr_35723_37709[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (38))){
var inst_35513 = (state_35528[(2)]);
var state_35528__$1 = state_35528;
var statearr_35724_37710 = state_35528__$1;
(statearr_35724_37710[(2)] = inst_35513);

(statearr_35724_37710[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (30))){
var inst_35458 = (state_35528[(10)]);
var inst_35459 = (state_35528[(13)]);
var inst_35472 = (state_35528[(11)]);
var inst_35498 = cljs.core.empty_QMARK_(inst_35458);
var inst_35499 = (inst_35459.cljs$core$IFn$_invoke$arity$1 ? inst_35459.cljs$core$IFn$_invoke$arity$1(inst_35472) : inst_35459.call(null,inst_35472));
var inst_35500 = cljs.core.not(inst_35499);
var inst_35501 = ((inst_35498) && (inst_35500));
var state_35528__$1 = state_35528;
var statearr_35727_37714 = state_35528__$1;
(statearr_35727_37714[(2)] = inst_35501);

(statearr_35727_37714[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (10))){
var inst_35402 = (state_35528[(8)]);
var inst_35426 = (state_35528[(2)]);
var inst_35427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35426,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35426,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35429 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35426,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35430 = inst_35402;
var state_35528__$1 = (function (){var statearr_35728 = state_35528;
(statearr_35728[(16)] = inst_35428);

(statearr_35728[(17)] = inst_35427);

(statearr_35728[(7)] = inst_35430);

(statearr_35728[(18)] = inst_35429);

return statearr_35728;
})();
var statearr_35729_37717 = state_35528__$1;
(statearr_35729_37717[(2)] = null);

(statearr_35729_37717[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (18))){
var inst_35447 = (state_35528[(2)]);
var state_35528__$1 = state_35528;
var statearr_35730_37718 = state_35528__$1;
(statearr_35730_37718[(2)] = inst_35447);

(statearr_35730_37718[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (37))){
var state_35528__$1 = state_35528;
var statearr_35733_37723 = state_35528__$1;
(statearr_35733_37723[(2)] = null);

(statearr_35733_37723[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (8))){
var inst_35402 = (state_35528[(8)]);
var inst_35423 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35402);
var state_35528__$1 = state_35528;
var statearr_35735_37729 = state_35528__$1;
(statearr_35735_37729[(2)] = inst_35423);

(statearr_35735_37729[(1)] = (10));


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
var statearr_35739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35739[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35739[(1)] = (1));

return statearr_35739;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35528){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35528);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35742){if((e35742 instanceof Object)){
var ex__34210__auto__ = e35742;
var statearr_35743_37735 = state_35528;
(statearr_35743_37735[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35742;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37739 = state_35528;
state_35528 = G__37739;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35528){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35744 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35744[(6)] = c__34274__auto___37537);

return statearr_35744;
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
var G__35761 = arguments.length;
switch (G__35761) {
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
var G__35793 = arguments.length;
switch (G__35793) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35789_SHARP_){
if(cljs.core.truth_((p1__35789_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35789_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35789_SHARP_.call(null,topic)))){
return p1__35789_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35789_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35798 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35798 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35799){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35799 = meta35799;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35800,meta35799__$1){
var self__ = this;
var _35800__$1 = this;
return (new cljs.core.async.t_cljs$core$async35798(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35799__$1));
}));

(cljs.core.async.t_cljs$core$async35798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35800){
var self__ = this;
var _35800__$1 = this;
return self__.meta35799;
}));

(cljs.core.async.t_cljs$core$async35798.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35798.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35798.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35798.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35798.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35798.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35798.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35798.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35799","meta35799",-1779080314,null)], null);
}));

(cljs.core.async.t_cljs$core$async35798.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35798.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35798");

(cljs.core.async.t_cljs$core$async35798.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35798");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35798.
 */
cljs.core.async.__GT_t_cljs$core$async35798 = (function cljs$core$async$__GT_t_cljs$core$async35798(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35799){
return (new cljs.core.async.t_cljs$core$async35798(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35799));
});

}

return (new cljs.core.async.t_cljs$core$async35798(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37826 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35893){
var state_val_35894 = (state_35893[(1)]);
if((state_val_35894 === (7))){
var inst_35886 = (state_35893[(2)]);
var state_35893__$1 = state_35893;
var statearr_35898_37834 = state_35893__$1;
(statearr_35898_37834[(2)] = inst_35886);

(statearr_35898_37834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (20))){
var state_35893__$1 = state_35893;
var statearr_35901_37836 = state_35893__$1;
(statearr_35901_37836[(2)] = null);

(statearr_35901_37836[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (1))){
var state_35893__$1 = state_35893;
var statearr_35902_37840 = state_35893__$1;
(statearr_35902_37840[(2)] = null);

(statearr_35902_37840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (24))){
var inst_35868 = (state_35893[(7)]);
var inst_35877 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35868);
var state_35893__$1 = state_35893;
var statearr_35905_37845 = state_35893__$1;
(statearr_35905_37845[(2)] = inst_35877);

(statearr_35905_37845[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (4))){
var inst_35816 = (state_35893[(8)]);
var inst_35816__$1 = (state_35893[(2)]);
var inst_35817 = (inst_35816__$1 == null);
var state_35893__$1 = (function (){var statearr_35907 = state_35893;
(statearr_35907[(8)] = inst_35816__$1);

return statearr_35907;
})();
if(cljs.core.truth_(inst_35817)){
var statearr_35908_37850 = state_35893__$1;
(statearr_35908_37850[(1)] = (5));

} else {
var statearr_35909_37851 = state_35893__$1;
(statearr_35909_37851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (15))){
var inst_35862 = (state_35893[(2)]);
var state_35893__$1 = state_35893;
var statearr_35914_37856 = state_35893__$1;
(statearr_35914_37856[(2)] = inst_35862);

(statearr_35914_37856[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (21))){
var inst_35882 = (state_35893[(2)]);
var state_35893__$1 = (function (){var statearr_35915 = state_35893;
(statearr_35915[(9)] = inst_35882);

return statearr_35915;
})();
var statearr_35916_37861 = state_35893__$1;
(statearr_35916_37861[(2)] = null);

(statearr_35916_37861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (13))){
var inst_35842 = (state_35893[(10)]);
var inst_35845 = cljs.core.chunked_seq_QMARK_(inst_35842);
var state_35893__$1 = state_35893;
if(inst_35845){
var statearr_35919_37866 = state_35893__$1;
(statearr_35919_37866[(1)] = (16));

} else {
var statearr_35920_37868 = state_35893__$1;
(statearr_35920_37868[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (22))){
var inst_35874 = (state_35893[(2)]);
var state_35893__$1 = state_35893;
if(cljs.core.truth_(inst_35874)){
var statearr_35923_37872 = state_35893__$1;
(statearr_35923_37872[(1)] = (23));

} else {
var statearr_35924_37873 = state_35893__$1;
(statearr_35924_37873[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (6))){
var inst_35868 = (state_35893[(7)]);
var inst_35816 = (state_35893[(8)]);
var inst_35870 = (state_35893[(11)]);
var inst_35868__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35816) : topic_fn.call(null,inst_35816));
var inst_35869 = cljs.core.deref(mults);
var inst_35870__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35869,inst_35868__$1);
var state_35893__$1 = (function (){var statearr_35928 = state_35893;
(statearr_35928[(7)] = inst_35868__$1);

(statearr_35928[(11)] = inst_35870__$1);

return statearr_35928;
})();
if(cljs.core.truth_(inst_35870__$1)){
var statearr_35931_37875 = state_35893__$1;
(statearr_35931_37875[(1)] = (19));

} else {
var statearr_35932_37877 = state_35893__$1;
(statearr_35932_37877[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (25))){
var inst_35879 = (state_35893[(2)]);
var state_35893__$1 = state_35893;
var statearr_35933_37880 = state_35893__$1;
(statearr_35933_37880[(2)] = inst_35879);

(statearr_35933_37880[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (17))){
var inst_35842 = (state_35893[(10)]);
var inst_35853 = cljs.core.first(inst_35842);
var inst_35854 = cljs.core.async.muxch_STAR_(inst_35853);
var inst_35855 = cljs.core.async.close_BANG_(inst_35854);
var inst_35856 = cljs.core.next(inst_35842);
var inst_35827 = inst_35856;
var inst_35828 = null;
var inst_35829 = (0);
var inst_35830 = (0);
var state_35893__$1 = (function (){var statearr_35937 = state_35893;
(statearr_35937[(12)] = inst_35829);

(statearr_35937[(13)] = inst_35828);

(statearr_35937[(14)] = inst_35827);

(statearr_35937[(15)] = inst_35830);

(statearr_35937[(16)] = inst_35855);

return statearr_35937;
})();
var statearr_35939_37888 = state_35893__$1;
(statearr_35939_37888[(2)] = null);

(statearr_35939_37888[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (3))){
var inst_35888 = (state_35893[(2)]);
var state_35893__$1 = state_35893;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35893__$1,inst_35888);
} else {
if((state_val_35894 === (12))){
var inst_35864 = (state_35893[(2)]);
var state_35893__$1 = state_35893;
var statearr_35943_37892 = state_35893__$1;
(statearr_35943_37892[(2)] = inst_35864);

(statearr_35943_37892[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (2))){
var state_35893__$1 = state_35893;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35893__$1,(4),ch);
} else {
if((state_val_35894 === (23))){
var state_35893__$1 = state_35893;
var statearr_35946_37895 = state_35893__$1;
(statearr_35946_37895[(2)] = null);

(statearr_35946_37895[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (19))){
var inst_35816 = (state_35893[(8)]);
var inst_35870 = (state_35893[(11)]);
var inst_35872 = cljs.core.async.muxch_STAR_(inst_35870);
var state_35893__$1 = state_35893;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35893__$1,(22),inst_35872,inst_35816);
} else {
if((state_val_35894 === (11))){
var inst_35842 = (state_35893[(10)]);
var inst_35827 = (state_35893[(14)]);
var inst_35842__$1 = cljs.core.seq(inst_35827);
var state_35893__$1 = (function (){var statearr_35948 = state_35893;
(statearr_35948[(10)] = inst_35842__$1);

return statearr_35948;
})();
if(inst_35842__$1){
var statearr_35951_37908 = state_35893__$1;
(statearr_35951_37908[(1)] = (13));

} else {
var statearr_35952_37909 = state_35893__$1;
(statearr_35952_37909[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (9))){
var inst_35866 = (state_35893[(2)]);
var state_35893__$1 = state_35893;
var statearr_35958_37916 = state_35893__$1;
(statearr_35958_37916[(2)] = inst_35866);

(statearr_35958_37916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (5))){
var inst_35824 = cljs.core.deref(mults);
var inst_35825 = cljs.core.vals(inst_35824);
var inst_35826 = cljs.core.seq(inst_35825);
var inst_35827 = inst_35826;
var inst_35828 = null;
var inst_35829 = (0);
var inst_35830 = (0);
var state_35893__$1 = (function (){var statearr_35962 = state_35893;
(statearr_35962[(12)] = inst_35829);

(statearr_35962[(13)] = inst_35828);

(statearr_35962[(14)] = inst_35827);

(statearr_35962[(15)] = inst_35830);

return statearr_35962;
})();
var statearr_35965_37922 = state_35893__$1;
(statearr_35965_37922[(2)] = null);

(statearr_35965_37922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (14))){
var state_35893__$1 = state_35893;
var statearr_35971_37923 = state_35893__$1;
(statearr_35971_37923[(2)] = null);

(statearr_35971_37923[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (16))){
var inst_35842 = (state_35893[(10)]);
var inst_35848 = cljs.core.chunk_first(inst_35842);
var inst_35849 = cljs.core.chunk_rest(inst_35842);
var inst_35850 = cljs.core.count(inst_35848);
var inst_35827 = inst_35849;
var inst_35828 = inst_35848;
var inst_35829 = inst_35850;
var inst_35830 = (0);
var state_35893__$1 = (function (){var statearr_35972 = state_35893;
(statearr_35972[(12)] = inst_35829);

(statearr_35972[(13)] = inst_35828);

(statearr_35972[(14)] = inst_35827);

(statearr_35972[(15)] = inst_35830);

return statearr_35972;
})();
var statearr_35975_37927 = state_35893__$1;
(statearr_35975_37927[(2)] = null);

(statearr_35975_37927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (10))){
var inst_35829 = (state_35893[(12)]);
var inst_35828 = (state_35893[(13)]);
var inst_35827 = (state_35893[(14)]);
var inst_35830 = (state_35893[(15)]);
var inst_35835 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35828,inst_35830);
var inst_35836 = cljs.core.async.muxch_STAR_(inst_35835);
var inst_35837 = cljs.core.async.close_BANG_(inst_35836);
var inst_35838 = (inst_35830 + (1));
var tmp35968 = inst_35829;
var tmp35969 = inst_35828;
var tmp35970 = inst_35827;
var inst_35827__$1 = tmp35970;
var inst_35828__$1 = tmp35969;
var inst_35829__$1 = tmp35968;
var inst_35830__$1 = inst_35838;
var state_35893__$1 = (function (){var statearr_35979 = state_35893;
(statearr_35979[(12)] = inst_35829__$1);

(statearr_35979[(13)] = inst_35828__$1);

(statearr_35979[(17)] = inst_35837);

(statearr_35979[(14)] = inst_35827__$1);

(statearr_35979[(15)] = inst_35830__$1);

return statearr_35979;
})();
var statearr_35982_37935 = state_35893__$1;
(statearr_35982_37935[(2)] = null);

(statearr_35982_37935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (18))){
var inst_35859 = (state_35893[(2)]);
var state_35893__$1 = state_35893;
var statearr_35983_37936 = state_35893__$1;
(statearr_35983_37936[(2)] = inst_35859);

(statearr_35983_37936[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (8))){
var inst_35829 = (state_35893[(12)]);
var inst_35830 = (state_35893[(15)]);
var inst_35832 = (inst_35830 < inst_35829);
var inst_35833 = inst_35832;
var state_35893__$1 = state_35893;
if(cljs.core.truth_(inst_35833)){
var statearr_35987_37938 = state_35893__$1;
(statearr_35987_37938[(1)] = (10));

} else {
var statearr_35988_37939 = state_35893__$1;
(statearr_35988_37939[(1)] = (11));

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
var statearr_35993 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35993[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_35993[(1)] = (1));

return statearr_35993;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35893){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35893);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35994){if((e35994 instanceof Object)){
var ex__34210__auto__ = e35994;
var statearr_35996_37946 = state_35893;
(statearr_35996_37946[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35994;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37948 = state_35893;
state_35893 = G__37948;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35893){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36000 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36000[(6)] = c__34274__auto___37826);

return statearr_36000;
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
var G__36006 = arguments.length;
switch (G__36006) {
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
var G__36012 = arguments.length;
switch (G__36012) {
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
var G__36017 = arguments.length;
switch (G__36017) {
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
var c__34274__auto___37964 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36071){
var state_val_36072 = (state_36071[(1)]);
if((state_val_36072 === (7))){
var state_36071__$1 = state_36071;
var statearr_36076_37965 = state_36071__$1;
(statearr_36076_37965[(2)] = null);

(statearr_36076_37965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (1))){
var state_36071__$1 = state_36071;
var statearr_36079_37966 = state_36071__$1;
(statearr_36079_37966[(2)] = null);

(statearr_36079_37966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (4))){
var inst_36029 = (state_36071[(7)]);
var inst_36032 = (inst_36029 < cnt);
var state_36071__$1 = state_36071;
if(cljs.core.truth_(inst_36032)){
var statearr_36082_37967 = state_36071__$1;
(statearr_36082_37967[(1)] = (6));

} else {
var statearr_36084_37969 = state_36071__$1;
(statearr_36084_37969[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (15))){
var inst_36067 = (state_36071[(2)]);
var state_36071__$1 = state_36071;
var statearr_36087_37970 = state_36071__$1;
(statearr_36087_37970[(2)] = inst_36067);

(statearr_36087_37970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (13))){
var inst_36060 = cljs.core.async.close_BANG_(out);
var state_36071__$1 = state_36071;
var statearr_36089_37971 = state_36071__$1;
(statearr_36089_37971[(2)] = inst_36060);

(statearr_36089_37971[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (6))){
var state_36071__$1 = state_36071;
var statearr_36090_37976 = state_36071__$1;
(statearr_36090_37976[(2)] = null);

(statearr_36090_37976[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (3))){
var inst_36069 = (state_36071[(2)]);
var state_36071__$1 = state_36071;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36071__$1,inst_36069);
} else {
if((state_val_36072 === (12))){
var inst_36056 = (state_36071[(8)]);
var inst_36056__$1 = (state_36071[(2)]);
var inst_36058 = cljs.core.some(cljs.core.nil_QMARK_,inst_36056__$1);
var state_36071__$1 = (function (){var statearr_36097 = state_36071;
(statearr_36097[(8)] = inst_36056__$1);

return statearr_36097;
})();
if(cljs.core.truth_(inst_36058)){
var statearr_36098_37977 = state_36071__$1;
(statearr_36098_37977[(1)] = (13));

} else {
var statearr_36099_37978 = state_36071__$1;
(statearr_36099_37978[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (2))){
var inst_36028 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36029 = (0);
var state_36071__$1 = (function (){var statearr_36100 = state_36071;
(statearr_36100[(9)] = inst_36028);

(statearr_36100[(7)] = inst_36029);

return statearr_36100;
})();
var statearr_36101_37979 = state_36071__$1;
(statearr_36101_37979[(2)] = null);

(statearr_36101_37979[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (11))){
var inst_36029 = (state_36071[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36071,(10),Object,null,(9));
var inst_36043 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36029) : chs__$1.call(null,inst_36029));
var inst_36044 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36029) : done.call(null,inst_36029));
var inst_36045 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36043,inst_36044);
var state_36071__$1 = state_36071;
var statearr_36106_37984 = state_36071__$1;
(statearr_36106_37984[(2)] = inst_36045);


cljs.core.async.impl.ioc_helpers.process_exception(state_36071__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (9))){
var inst_36029 = (state_36071[(7)]);
var inst_36047 = (state_36071[(2)]);
var inst_36048 = (inst_36029 + (1));
var inst_36029__$1 = inst_36048;
var state_36071__$1 = (function (){var statearr_36107 = state_36071;
(statearr_36107[(7)] = inst_36029__$1);

(statearr_36107[(10)] = inst_36047);

return statearr_36107;
})();
var statearr_36108_37985 = state_36071__$1;
(statearr_36108_37985[(2)] = null);

(statearr_36108_37985[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (5))){
var inst_36054 = (state_36071[(2)]);
var state_36071__$1 = (function (){var statearr_36109 = state_36071;
(statearr_36109[(11)] = inst_36054);

return statearr_36109;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36071__$1,(12),dchan);
} else {
if((state_val_36072 === (14))){
var inst_36056 = (state_36071[(8)]);
var inst_36062 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36056);
var state_36071__$1 = state_36071;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36071__$1,(16),out,inst_36062);
} else {
if((state_val_36072 === (16))){
var inst_36064 = (state_36071[(2)]);
var state_36071__$1 = (function (){var statearr_36110 = state_36071;
(statearr_36110[(12)] = inst_36064);

return statearr_36110;
})();
var statearr_36111_37989 = state_36071__$1;
(statearr_36111_37989[(2)] = null);

(statearr_36111_37989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (10))){
var inst_36035 = (state_36071[(2)]);
var inst_36036 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36071__$1 = (function (){var statearr_36112 = state_36071;
(statearr_36112[(13)] = inst_36035);

return statearr_36112;
})();
var statearr_36113_37990 = state_36071__$1;
(statearr_36113_37990[(2)] = inst_36036);


cljs.core.async.impl.ioc_helpers.process_exception(state_36071__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (8))){
var inst_36052 = (state_36071[(2)]);
var state_36071__$1 = state_36071;
var statearr_36114_37992 = state_36071__$1;
(statearr_36114_37992[(2)] = inst_36052);

(statearr_36114_37992[(1)] = (5));


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
var statearr_36115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36115[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36115[(1)] = (1));

return statearr_36115;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36071){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36071);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36116){if((e36116 instanceof Object)){
var ex__34210__auto__ = e36116;
var statearr_36117_37995 = state_36071;
(statearr_36117_37995[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36116;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38000 = state_36071;
state_36071 = G__38000;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36071){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36118 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36118[(6)] = c__34274__auto___37964);

return statearr_36118;
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
var G__36121 = arguments.length;
switch (G__36121) {
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
var c__34274__auto___38007 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36153){
var state_val_36154 = (state_36153[(1)]);
if((state_val_36154 === (7))){
var inst_36132 = (state_36153[(7)]);
var inst_36133 = (state_36153[(8)]);
var inst_36132__$1 = (state_36153[(2)]);
var inst_36133__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36132__$1,(0),null);
var inst_36134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36132__$1,(1),null);
var inst_36135 = (inst_36133__$1 == null);
var state_36153__$1 = (function (){var statearr_36155 = state_36153;
(statearr_36155[(7)] = inst_36132__$1);

(statearr_36155[(8)] = inst_36133__$1);

(statearr_36155[(9)] = inst_36134);

return statearr_36155;
})();
if(cljs.core.truth_(inst_36135)){
var statearr_36156_38008 = state_36153__$1;
(statearr_36156_38008[(1)] = (8));

} else {
var statearr_36157_38009 = state_36153__$1;
(statearr_36157_38009[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36154 === (1))){
var inst_36122 = cljs.core.vec(chs);
var inst_36123 = inst_36122;
var state_36153__$1 = (function (){var statearr_36158 = state_36153;
(statearr_36158[(10)] = inst_36123);

return statearr_36158;
})();
var statearr_36159_38011 = state_36153__$1;
(statearr_36159_38011[(2)] = null);

(statearr_36159_38011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36154 === (4))){
var inst_36123 = (state_36153[(10)]);
var state_36153__$1 = state_36153;
return cljs.core.async.ioc_alts_BANG_(state_36153__$1,(7),inst_36123);
} else {
if((state_val_36154 === (6))){
var inst_36149 = (state_36153[(2)]);
var state_36153__$1 = state_36153;
var statearr_36160_38016 = state_36153__$1;
(statearr_36160_38016[(2)] = inst_36149);

(statearr_36160_38016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36154 === (3))){
var inst_36151 = (state_36153[(2)]);
var state_36153__$1 = state_36153;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36153__$1,inst_36151);
} else {
if((state_val_36154 === (2))){
var inst_36123 = (state_36153[(10)]);
var inst_36125 = cljs.core.count(inst_36123);
var inst_36126 = (inst_36125 > (0));
var state_36153__$1 = state_36153;
if(cljs.core.truth_(inst_36126)){
var statearr_36162_38017 = state_36153__$1;
(statearr_36162_38017[(1)] = (4));

} else {
var statearr_36163_38018 = state_36153__$1;
(statearr_36163_38018[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36154 === (11))){
var inst_36123 = (state_36153[(10)]);
var inst_36142 = (state_36153[(2)]);
var tmp36161 = inst_36123;
var inst_36123__$1 = tmp36161;
var state_36153__$1 = (function (){var statearr_36165 = state_36153;
(statearr_36165[(11)] = inst_36142);

(statearr_36165[(10)] = inst_36123__$1);

return statearr_36165;
})();
var statearr_36166_38022 = state_36153__$1;
(statearr_36166_38022[(2)] = null);

(statearr_36166_38022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36154 === (9))){
var inst_36133 = (state_36153[(8)]);
var state_36153__$1 = state_36153;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36153__$1,(11),out,inst_36133);
} else {
if((state_val_36154 === (5))){
var inst_36147 = cljs.core.async.close_BANG_(out);
var state_36153__$1 = state_36153;
var statearr_36169_38023 = state_36153__$1;
(statearr_36169_38023[(2)] = inst_36147);

(statearr_36169_38023[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36154 === (10))){
var inst_36145 = (state_36153[(2)]);
var state_36153__$1 = state_36153;
var statearr_36173_38024 = state_36153__$1;
(statearr_36173_38024[(2)] = inst_36145);

(statearr_36173_38024[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36154 === (8))){
var inst_36132 = (state_36153[(7)]);
var inst_36133 = (state_36153[(8)]);
var inst_36134 = (state_36153[(9)]);
var inst_36123 = (state_36153[(10)]);
var inst_36137 = (function (){var cs = inst_36123;
var vec__36128 = inst_36132;
var v = inst_36133;
var c = inst_36134;
return (function (p1__36119_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36119_SHARP_);
});
})();
var inst_36138 = cljs.core.filterv(inst_36137,inst_36123);
var inst_36123__$1 = inst_36138;
var state_36153__$1 = (function (){var statearr_36177 = state_36153;
(statearr_36177[(10)] = inst_36123__$1);

return statearr_36177;
})();
var statearr_36178_38027 = state_36153__$1;
(statearr_36178_38027[(2)] = null);

(statearr_36178_38027[(1)] = (2));


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
var statearr_36180 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36180[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36180[(1)] = (1));

return statearr_36180;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36153){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36153);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36181){if((e36181 instanceof Object)){
var ex__34210__auto__ = e36181;
var statearr_36182_38030 = state_36153;
(statearr_36182_38030[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36181;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38031 = state_36153;
state_36153 = G__38031;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36153){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36183 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36183[(6)] = c__34274__auto___38007);

return statearr_36183;
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
var G__36193 = arguments.length;
switch (G__36193) {
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
var c__34274__auto___38035 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36220){
var state_val_36221 = (state_36220[(1)]);
if((state_val_36221 === (7))){
var inst_36202 = (state_36220[(7)]);
var inst_36202__$1 = (state_36220[(2)]);
var inst_36203 = (inst_36202__$1 == null);
var inst_36204 = cljs.core.not(inst_36203);
var state_36220__$1 = (function (){var statearr_36224 = state_36220;
(statearr_36224[(7)] = inst_36202__$1);

return statearr_36224;
})();
if(inst_36204){
var statearr_36225_38039 = state_36220__$1;
(statearr_36225_38039[(1)] = (8));

} else {
var statearr_36226_38040 = state_36220__$1;
(statearr_36226_38040[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36221 === (1))){
var inst_36197 = (0);
var state_36220__$1 = (function (){var statearr_36227 = state_36220;
(statearr_36227[(8)] = inst_36197);

return statearr_36227;
})();
var statearr_36228_38041 = state_36220__$1;
(statearr_36228_38041[(2)] = null);

(statearr_36228_38041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36221 === (4))){
var state_36220__$1 = state_36220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36220__$1,(7),ch);
} else {
if((state_val_36221 === (6))){
var inst_36215 = (state_36220[(2)]);
var state_36220__$1 = state_36220;
var statearr_36229_38044 = state_36220__$1;
(statearr_36229_38044[(2)] = inst_36215);

(statearr_36229_38044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36221 === (3))){
var inst_36217 = (state_36220[(2)]);
var inst_36218 = cljs.core.async.close_BANG_(out);
var state_36220__$1 = (function (){var statearr_36230 = state_36220;
(statearr_36230[(9)] = inst_36217);

return statearr_36230;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36220__$1,inst_36218);
} else {
if((state_val_36221 === (2))){
var inst_36197 = (state_36220[(8)]);
var inst_36199 = (inst_36197 < n);
var state_36220__$1 = state_36220;
if(cljs.core.truth_(inst_36199)){
var statearr_36231_38046 = state_36220__$1;
(statearr_36231_38046[(1)] = (4));

} else {
var statearr_36232_38047 = state_36220__$1;
(statearr_36232_38047[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36221 === (11))){
var inst_36197 = (state_36220[(8)]);
var inst_36207 = (state_36220[(2)]);
var inst_36208 = (inst_36197 + (1));
var inst_36197__$1 = inst_36208;
var state_36220__$1 = (function (){var statearr_36233 = state_36220;
(statearr_36233[(10)] = inst_36207);

(statearr_36233[(8)] = inst_36197__$1);

return statearr_36233;
})();
var statearr_36234_38050 = state_36220__$1;
(statearr_36234_38050[(2)] = null);

(statearr_36234_38050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36221 === (9))){
var state_36220__$1 = state_36220;
var statearr_36235_38052 = state_36220__$1;
(statearr_36235_38052[(2)] = null);

(statearr_36235_38052[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36221 === (5))){
var state_36220__$1 = state_36220;
var statearr_36236_38053 = state_36220__$1;
(statearr_36236_38053[(2)] = null);

(statearr_36236_38053[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36221 === (10))){
var inst_36212 = (state_36220[(2)]);
var state_36220__$1 = state_36220;
var statearr_36237_38054 = state_36220__$1;
(statearr_36237_38054[(2)] = inst_36212);

(statearr_36237_38054[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36221 === (8))){
var inst_36202 = (state_36220[(7)]);
var state_36220__$1 = state_36220;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36220__$1,(11),out,inst_36202);
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
var statearr_36238 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36238[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36238[(1)] = (1));

return statearr_36238;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36220){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36220);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36239){if((e36239 instanceof Object)){
var ex__34210__auto__ = e36239;
var statearr_36240_38058 = state_36220;
(statearr_36240_38058[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36239;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38060 = state_36220;
state_36220 = G__38060;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36220){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36245 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36245[(6)] = c__34274__auto___38035);

return statearr_36245;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36250 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36250 = (function (f,ch,meta36251){
this.f = f;
this.ch = ch;
this.meta36251 = meta36251;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36252,meta36251__$1){
var self__ = this;
var _36252__$1 = this;
return (new cljs.core.async.t_cljs$core$async36250(self__.f,self__.ch,meta36251__$1));
}));

(cljs.core.async.t_cljs$core$async36250.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36252){
var self__ = this;
var _36252__$1 = this;
return self__.meta36251;
}));

(cljs.core.async.t_cljs$core$async36250.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36250.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36250.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36250.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36250.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36259 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36259 = (function (f,ch,meta36251,_,fn1,meta36260){
this.f = f;
this.ch = ch;
this.meta36251 = meta36251;
this._ = _;
this.fn1 = fn1;
this.meta36260 = meta36260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36261,meta36260__$1){
var self__ = this;
var _36261__$1 = this;
return (new cljs.core.async.t_cljs$core$async36259(self__.f,self__.ch,self__.meta36251,self__._,self__.fn1,meta36260__$1));
}));

(cljs.core.async.t_cljs$core$async36259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36261){
var self__ = this;
var _36261__$1 = this;
return self__.meta36260;
}));

(cljs.core.async.t_cljs$core$async36259.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36259.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36259.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36259.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36249_SHARP_){
var G__36265 = (((p1__36249_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36249_SHARP_) : self__.f.call(null,p1__36249_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36265) : f1.call(null,G__36265));
});
}));

(cljs.core.async.t_cljs$core$async36259.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36251","meta36251",1064451899,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36250","cljs.core.async/t_cljs$core$async36250",1087524413,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36260","meta36260",-1600977011,null)], null);
}));

(cljs.core.async.t_cljs$core$async36259.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36259");

(cljs.core.async.t_cljs$core$async36259.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36259");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36259.
 */
cljs.core.async.__GT_t_cljs$core$async36259 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36259(f__$1,ch__$1,meta36251__$1,___$2,fn1__$1,meta36260){
return (new cljs.core.async.t_cljs$core$async36259(f__$1,ch__$1,meta36251__$1,___$2,fn1__$1,meta36260));
});

}

return (new cljs.core.async.t_cljs$core$async36259(self__.f,self__.ch,self__.meta36251,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36271 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36271) : self__.f.call(null,G__36271));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36250.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36250.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36250.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36251","meta36251",1064451899,null)], null);
}));

(cljs.core.async.t_cljs$core$async36250.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36250.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36250");

(cljs.core.async.t_cljs$core$async36250.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36250");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36250.
 */
cljs.core.async.__GT_t_cljs$core$async36250 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36250(f__$1,ch__$1,meta36251){
return (new cljs.core.async.t_cljs$core$async36250(f__$1,ch__$1,meta36251));
});

}

return (new cljs.core.async.t_cljs$core$async36250(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36288 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36288 = (function (f,ch,meta36289){
this.f = f;
this.ch = ch;
this.meta36289 = meta36289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36290,meta36289__$1){
var self__ = this;
var _36290__$1 = this;
return (new cljs.core.async.t_cljs$core$async36288(self__.f,self__.ch,meta36289__$1));
}));

(cljs.core.async.t_cljs$core$async36288.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36290){
var self__ = this;
var _36290__$1 = this;
return self__.meta36289;
}));

(cljs.core.async.t_cljs$core$async36288.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36288.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36288.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36288.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36288.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36288.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36288.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36289","meta36289",1706093421,null)], null);
}));

(cljs.core.async.t_cljs$core$async36288.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36288.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36288");

(cljs.core.async.t_cljs$core$async36288.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36288");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36288.
 */
cljs.core.async.__GT_t_cljs$core$async36288 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36288(f__$1,ch__$1,meta36289){
return (new cljs.core.async.t_cljs$core$async36288(f__$1,ch__$1,meta36289));
});

}

return (new cljs.core.async.t_cljs$core$async36288(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36298 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36298 = (function (p,ch,meta36299){
this.p = p;
this.ch = ch;
this.meta36299 = meta36299;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36300,meta36299__$1){
var self__ = this;
var _36300__$1 = this;
return (new cljs.core.async.t_cljs$core$async36298(self__.p,self__.ch,meta36299__$1));
}));

(cljs.core.async.t_cljs$core$async36298.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36300){
var self__ = this;
var _36300__$1 = this;
return self__.meta36299;
}));

(cljs.core.async.t_cljs$core$async36298.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36298.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36298.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36298.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36298.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36298.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36298.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36298.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36299","meta36299",2009959051,null)], null);
}));

(cljs.core.async.t_cljs$core$async36298.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36298.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36298");

(cljs.core.async.t_cljs$core$async36298.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36298");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36298.
 */
cljs.core.async.__GT_t_cljs$core$async36298 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36298(p__$1,ch__$1,meta36299){
return (new cljs.core.async.t_cljs$core$async36298(p__$1,ch__$1,meta36299));
});

}

return (new cljs.core.async.t_cljs$core$async36298(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36319 = arguments.length;
switch (G__36319) {
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
var c__34274__auto___38088 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36344){
var state_val_36345 = (state_36344[(1)]);
if((state_val_36345 === (7))){
var inst_36340 = (state_36344[(2)]);
var state_36344__$1 = state_36344;
var statearr_36346_38089 = state_36344__$1;
(statearr_36346_38089[(2)] = inst_36340);

(statearr_36346_38089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36345 === (1))){
var state_36344__$1 = state_36344;
var statearr_36347_38090 = state_36344__$1;
(statearr_36347_38090[(2)] = null);

(statearr_36347_38090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36345 === (4))){
var inst_36326 = (state_36344[(7)]);
var inst_36326__$1 = (state_36344[(2)]);
var inst_36327 = (inst_36326__$1 == null);
var state_36344__$1 = (function (){var statearr_36350 = state_36344;
(statearr_36350[(7)] = inst_36326__$1);

return statearr_36350;
})();
if(cljs.core.truth_(inst_36327)){
var statearr_36351_38093 = state_36344__$1;
(statearr_36351_38093[(1)] = (5));

} else {
var statearr_36352_38095 = state_36344__$1;
(statearr_36352_38095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36345 === (6))){
var inst_36326 = (state_36344[(7)]);
var inst_36331 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36326) : p.call(null,inst_36326));
var state_36344__$1 = state_36344;
if(cljs.core.truth_(inst_36331)){
var statearr_36353_38096 = state_36344__$1;
(statearr_36353_38096[(1)] = (8));

} else {
var statearr_36354_38097 = state_36344__$1;
(statearr_36354_38097[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36345 === (3))){
var inst_36342 = (state_36344[(2)]);
var state_36344__$1 = state_36344;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36344__$1,inst_36342);
} else {
if((state_val_36345 === (2))){
var state_36344__$1 = state_36344;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36344__$1,(4),ch);
} else {
if((state_val_36345 === (11))){
var inst_36334 = (state_36344[(2)]);
var state_36344__$1 = state_36344;
var statearr_36359_38099 = state_36344__$1;
(statearr_36359_38099[(2)] = inst_36334);

(statearr_36359_38099[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36345 === (9))){
var state_36344__$1 = state_36344;
var statearr_36360_38101 = state_36344__$1;
(statearr_36360_38101[(2)] = null);

(statearr_36360_38101[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36345 === (5))){
var inst_36329 = cljs.core.async.close_BANG_(out);
var state_36344__$1 = state_36344;
var statearr_36361_38103 = state_36344__$1;
(statearr_36361_38103[(2)] = inst_36329);

(statearr_36361_38103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36345 === (10))){
var inst_36337 = (state_36344[(2)]);
var state_36344__$1 = (function (){var statearr_36362 = state_36344;
(statearr_36362[(8)] = inst_36337);

return statearr_36362;
})();
var statearr_36363_38104 = state_36344__$1;
(statearr_36363_38104[(2)] = null);

(statearr_36363_38104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36345 === (8))){
var inst_36326 = (state_36344[(7)]);
var state_36344__$1 = state_36344;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36344__$1,(11),out,inst_36326);
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
var statearr_36364 = [null,null,null,null,null,null,null,null,null];
(statearr_36364[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36364[(1)] = (1));

return statearr_36364;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36344){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36344);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36366){if((e36366 instanceof Object)){
var ex__34210__auto__ = e36366;
var statearr_36371_38108 = state_36344;
(statearr_36371_38108[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36366;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38109 = state_36344;
state_36344 = G__38109;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36344){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36375 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36375[(6)] = c__34274__auto___38088);

return statearr_36375;
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
var G__36379 = arguments.length;
switch (G__36379) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36446){
var state_val_36447 = (state_36446[(1)]);
if((state_val_36447 === (7))){
var inst_36442 = (state_36446[(2)]);
var state_36446__$1 = state_36446;
var statearr_36448_38114 = state_36446__$1;
(statearr_36448_38114[(2)] = inst_36442);

(statearr_36448_38114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (20))){
var inst_36412 = (state_36446[(7)]);
var inst_36423 = (state_36446[(2)]);
var inst_36424 = cljs.core.next(inst_36412);
var inst_36398 = inst_36424;
var inst_36399 = null;
var inst_36400 = (0);
var inst_36401 = (0);
var state_36446__$1 = (function (){var statearr_36449 = state_36446;
(statearr_36449[(8)] = inst_36399);

(statearr_36449[(9)] = inst_36423);

(statearr_36449[(10)] = inst_36398);

(statearr_36449[(11)] = inst_36400);

(statearr_36449[(12)] = inst_36401);

return statearr_36449;
})();
var statearr_36452_38118 = state_36446__$1;
(statearr_36452_38118[(2)] = null);

(statearr_36452_38118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (1))){
var state_36446__$1 = state_36446;
var statearr_36453_38119 = state_36446__$1;
(statearr_36453_38119[(2)] = null);

(statearr_36453_38119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (4))){
var inst_36387 = (state_36446[(13)]);
var inst_36387__$1 = (state_36446[(2)]);
var inst_36388 = (inst_36387__$1 == null);
var state_36446__$1 = (function (){var statearr_36454 = state_36446;
(statearr_36454[(13)] = inst_36387__$1);

return statearr_36454;
})();
if(cljs.core.truth_(inst_36388)){
var statearr_36457_38120 = state_36446__$1;
(statearr_36457_38120[(1)] = (5));

} else {
var statearr_36458_38121 = state_36446__$1;
(statearr_36458_38121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (15))){
var state_36446__$1 = state_36446;
var statearr_36462_38122 = state_36446__$1;
(statearr_36462_38122[(2)] = null);

(statearr_36462_38122[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (21))){
var state_36446__$1 = state_36446;
var statearr_36464_38123 = state_36446__$1;
(statearr_36464_38123[(2)] = null);

(statearr_36464_38123[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (13))){
var inst_36399 = (state_36446[(8)]);
var inst_36398 = (state_36446[(10)]);
var inst_36400 = (state_36446[(11)]);
var inst_36401 = (state_36446[(12)]);
var inst_36408 = (state_36446[(2)]);
var inst_36409 = (inst_36401 + (1));
var tmp36459 = inst_36399;
var tmp36460 = inst_36398;
var tmp36461 = inst_36400;
var inst_36398__$1 = tmp36460;
var inst_36399__$1 = tmp36459;
var inst_36400__$1 = tmp36461;
var inst_36401__$1 = inst_36409;
var state_36446__$1 = (function (){var statearr_36471 = state_36446;
(statearr_36471[(8)] = inst_36399__$1);

(statearr_36471[(14)] = inst_36408);

(statearr_36471[(10)] = inst_36398__$1);

(statearr_36471[(11)] = inst_36400__$1);

(statearr_36471[(12)] = inst_36401__$1);

return statearr_36471;
})();
var statearr_36472_38127 = state_36446__$1;
(statearr_36472_38127[(2)] = null);

(statearr_36472_38127[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (22))){
var state_36446__$1 = state_36446;
var statearr_36474_38128 = state_36446__$1;
(statearr_36474_38128[(2)] = null);

(statearr_36474_38128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (6))){
var inst_36387 = (state_36446[(13)]);
var inst_36396 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36387) : f.call(null,inst_36387));
var inst_36397 = cljs.core.seq(inst_36396);
var inst_36398 = inst_36397;
var inst_36399 = null;
var inst_36400 = (0);
var inst_36401 = (0);
var state_36446__$1 = (function (){var statearr_36476 = state_36446;
(statearr_36476[(8)] = inst_36399);

(statearr_36476[(10)] = inst_36398);

(statearr_36476[(11)] = inst_36400);

(statearr_36476[(12)] = inst_36401);

return statearr_36476;
})();
var statearr_36478_38129 = state_36446__$1;
(statearr_36478_38129[(2)] = null);

(statearr_36478_38129[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (17))){
var inst_36412 = (state_36446[(7)]);
var inst_36416 = cljs.core.chunk_first(inst_36412);
var inst_36417 = cljs.core.chunk_rest(inst_36412);
var inst_36418 = cljs.core.count(inst_36416);
var inst_36398 = inst_36417;
var inst_36399 = inst_36416;
var inst_36400 = inst_36418;
var inst_36401 = (0);
var state_36446__$1 = (function (){var statearr_36481 = state_36446;
(statearr_36481[(8)] = inst_36399);

(statearr_36481[(10)] = inst_36398);

(statearr_36481[(11)] = inst_36400);

(statearr_36481[(12)] = inst_36401);

return statearr_36481;
})();
var statearr_36482_38131 = state_36446__$1;
(statearr_36482_38131[(2)] = null);

(statearr_36482_38131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (3))){
var inst_36444 = (state_36446[(2)]);
var state_36446__$1 = state_36446;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36446__$1,inst_36444);
} else {
if((state_val_36447 === (12))){
var inst_36432 = (state_36446[(2)]);
var state_36446__$1 = state_36446;
var statearr_36484_38137 = state_36446__$1;
(statearr_36484_38137[(2)] = inst_36432);

(statearr_36484_38137[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (2))){
var state_36446__$1 = state_36446;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36446__$1,(4),in$);
} else {
if((state_val_36447 === (23))){
var inst_36440 = (state_36446[(2)]);
var state_36446__$1 = state_36446;
var statearr_36486_38138 = state_36446__$1;
(statearr_36486_38138[(2)] = inst_36440);

(statearr_36486_38138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (19))){
var inst_36427 = (state_36446[(2)]);
var state_36446__$1 = state_36446;
var statearr_36487_38139 = state_36446__$1;
(statearr_36487_38139[(2)] = inst_36427);

(statearr_36487_38139[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (11))){
var inst_36412 = (state_36446[(7)]);
var inst_36398 = (state_36446[(10)]);
var inst_36412__$1 = cljs.core.seq(inst_36398);
var state_36446__$1 = (function (){var statearr_36489 = state_36446;
(statearr_36489[(7)] = inst_36412__$1);

return statearr_36489;
})();
if(inst_36412__$1){
var statearr_36490_38143 = state_36446__$1;
(statearr_36490_38143[(1)] = (14));

} else {
var statearr_36491_38144 = state_36446__$1;
(statearr_36491_38144[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (9))){
var inst_36434 = (state_36446[(2)]);
var inst_36435 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36446__$1 = (function (){var statearr_36495 = state_36446;
(statearr_36495[(15)] = inst_36434);

return statearr_36495;
})();
if(cljs.core.truth_(inst_36435)){
var statearr_36496_38145 = state_36446__$1;
(statearr_36496_38145[(1)] = (21));

} else {
var statearr_36497_38146 = state_36446__$1;
(statearr_36497_38146[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (5))){
var inst_36390 = cljs.core.async.close_BANG_(out);
var state_36446__$1 = state_36446;
var statearr_36498_38150 = state_36446__$1;
(statearr_36498_38150[(2)] = inst_36390);

(statearr_36498_38150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (14))){
var inst_36412 = (state_36446[(7)]);
var inst_36414 = cljs.core.chunked_seq_QMARK_(inst_36412);
var state_36446__$1 = state_36446;
if(inst_36414){
var statearr_36501_38151 = state_36446__$1;
(statearr_36501_38151[(1)] = (17));

} else {
var statearr_36502_38152 = state_36446__$1;
(statearr_36502_38152[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (16))){
var inst_36430 = (state_36446[(2)]);
var state_36446__$1 = state_36446;
var statearr_36503_38154 = state_36446__$1;
(statearr_36503_38154[(2)] = inst_36430);

(statearr_36503_38154[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (10))){
var inst_36399 = (state_36446[(8)]);
var inst_36401 = (state_36446[(12)]);
var inst_36406 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36399,inst_36401);
var state_36446__$1 = state_36446;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36446__$1,(13),out,inst_36406);
} else {
if((state_val_36447 === (18))){
var inst_36412 = (state_36446[(7)]);
var inst_36421 = cljs.core.first(inst_36412);
var state_36446__$1 = state_36446;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36446__$1,(20),out,inst_36421);
} else {
if((state_val_36447 === (8))){
var inst_36400 = (state_36446[(11)]);
var inst_36401 = (state_36446[(12)]);
var inst_36403 = (inst_36401 < inst_36400);
var inst_36404 = inst_36403;
var state_36446__$1 = state_36446;
if(cljs.core.truth_(inst_36404)){
var statearr_36507_38157 = state_36446__$1;
(statearr_36507_38157[(1)] = (10));

} else {
var statearr_36509_38158 = state_36446__$1;
(statearr_36509_38158[(1)] = (11));

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
var statearr_36517 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36517[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36517[(1)] = (1));

return statearr_36517;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36446){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36446);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36518){if((e36518 instanceof Object)){
var ex__34210__auto__ = e36518;
var statearr_36519_38162 = state_36446;
(statearr_36519_38162[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36518;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38163 = state_36446;
state_36446 = G__38163;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36446){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36521 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36521[(6)] = c__34274__auto__);

return statearr_36521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36525 = arguments.length;
switch (G__36525) {
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
var G__36530 = arguments.length;
switch (G__36530) {
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
var G__36545 = arguments.length;
switch (G__36545) {
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
var c__34274__auto___38173 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36579){
var state_val_36580 = (state_36579[(1)]);
if((state_val_36580 === (7))){
var inst_36574 = (state_36579[(2)]);
var state_36579__$1 = state_36579;
var statearr_36584_38174 = state_36579__$1;
(statearr_36584_38174[(2)] = inst_36574);

(statearr_36584_38174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36580 === (1))){
var inst_36550 = null;
var state_36579__$1 = (function (){var statearr_36589 = state_36579;
(statearr_36589[(7)] = inst_36550);

return statearr_36589;
})();
var statearr_36590_38175 = state_36579__$1;
(statearr_36590_38175[(2)] = null);

(statearr_36590_38175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36580 === (4))){
var inst_36553 = (state_36579[(8)]);
var inst_36553__$1 = (state_36579[(2)]);
var inst_36560 = (inst_36553__$1 == null);
var inst_36561 = cljs.core.not(inst_36560);
var state_36579__$1 = (function (){var statearr_36594 = state_36579;
(statearr_36594[(8)] = inst_36553__$1);

return statearr_36594;
})();
if(inst_36561){
var statearr_36595_38180 = state_36579__$1;
(statearr_36595_38180[(1)] = (5));

} else {
var statearr_36596_38181 = state_36579__$1;
(statearr_36596_38181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36580 === (6))){
var state_36579__$1 = state_36579;
var statearr_36597_38185 = state_36579__$1;
(statearr_36597_38185[(2)] = null);

(statearr_36597_38185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36580 === (3))){
var inst_36576 = (state_36579[(2)]);
var inst_36577 = cljs.core.async.close_BANG_(out);
var state_36579__$1 = (function (){var statearr_36598 = state_36579;
(statearr_36598[(9)] = inst_36576);

return statearr_36598;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36579__$1,inst_36577);
} else {
if((state_val_36580 === (2))){
var state_36579__$1 = state_36579;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36579__$1,(4),ch);
} else {
if((state_val_36580 === (11))){
var inst_36553 = (state_36579[(8)]);
var inst_36568 = (state_36579[(2)]);
var inst_36550 = inst_36553;
var state_36579__$1 = (function (){var statearr_36601 = state_36579;
(statearr_36601[(7)] = inst_36550);

(statearr_36601[(10)] = inst_36568);

return statearr_36601;
})();
var statearr_36602_38187 = state_36579__$1;
(statearr_36602_38187[(2)] = null);

(statearr_36602_38187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36580 === (9))){
var inst_36553 = (state_36579[(8)]);
var state_36579__$1 = state_36579;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36579__$1,(11),out,inst_36553);
} else {
if((state_val_36580 === (5))){
var inst_36550 = (state_36579[(7)]);
var inst_36553 = (state_36579[(8)]);
var inst_36563 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36553,inst_36550);
var state_36579__$1 = state_36579;
if(inst_36563){
var statearr_36607_38188 = state_36579__$1;
(statearr_36607_38188[(1)] = (8));

} else {
var statearr_36608_38189 = state_36579__$1;
(statearr_36608_38189[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36580 === (10))){
var inst_36571 = (state_36579[(2)]);
var state_36579__$1 = state_36579;
var statearr_36611_38190 = state_36579__$1;
(statearr_36611_38190[(2)] = inst_36571);

(statearr_36611_38190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36580 === (8))){
var inst_36550 = (state_36579[(7)]);
var tmp36606 = inst_36550;
var inst_36550__$1 = tmp36606;
var state_36579__$1 = (function (){var statearr_36612 = state_36579;
(statearr_36612[(7)] = inst_36550__$1);

return statearr_36612;
})();
var statearr_36613_38193 = state_36579__$1;
(statearr_36613_38193[(2)] = null);

(statearr_36613_38193[(1)] = (2));


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
var statearr_36618 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36618[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36618[(1)] = (1));

return statearr_36618;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36579){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36579);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36619){if((e36619 instanceof Object)){
var ex__34210__auto__ = e36619;
var statearr_36620_38195 = state_36579;
(statearr_36620_38195[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36619;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38196 = state_36579;
state_36579 = G__38196;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36622 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36622[(6)] = c__34274__auto___38173);

return statearr_36622;
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
var G__36625 = arguments.length;
switch (G__36625) {
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
var c__34274__auto___38201 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36668){
var state_val_36669 = (state_36668[(1)]);
if((state_val_36669 === (7))){
var inst_36664 = (state_36668[(2)]);
var state_36668__$1 = state_36668;
var statearr_36671_38202 = state_36668__$1;
(statearr_36671_38202[(2)] = inst_36664);

(statearr_36671_38202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (1))){
var inst_36630 = (new Array(n));
var inst_36631 = inst_36630;
var inst_36632 = (0);
var state_36668__$1 = (function (){var statearr_36673 = state_36668;
(statearr_36673[(7)] = inst_36632);

(statearr_36673[(8)] = inst_36631);

return statearr_36673;
})();
var statearr_36674_38204 = state_36668__$1;
(statearr_36674_38204[(2)] = null);

(statearr_36674_38204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (4))){
var inst_36635 = (state_36668[(9)]);
var inst_36635__$1 = (state_36668[(2)]);
var inst_36636 = (inst_36635__$1 == null);
var inst_36637 = cljs.core.not(inst_36636);
var state_36668__$1 = (function (){var statearr_36675 = state_36668;
(statearr_36675[(9)] = inst_36635__$1);

return statearr_36675;
})();
if(inst_36637){
var statearr_36677_38205 = state_36668__$1;
(statearr_36677_38205[(1)] = (5));

} else {
var statearr_36678_38206 = state_36668__$1;
(statearr_36678_38206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (15))){
var inst_36658 = (state_36668[(2)]);
var state_36668__$1 = state_36668;
var statearr_36679_38207 = state_36668__$1;
(statearr_36679_38207[(2)] = inst_36658);

(statearr_36679_38207[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (13))){
var state_36668__$1 = state_36668;
var statearr_36681_38208 = state_36668__$1;
(statearr_36681_38208[(2)] = null);

(statearr_36681_38208[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (6))){
var inst_36632 = (state_36668[(7)]);
var inst_36654 = (inst_36632 > (0));
var state_36668__$1 = state_36668;
if(cljs.core.truth_(inst_36654)){
var statearr_36682_38211 = state_36668__$1;
(statearr_36682_38211[(1)] = (12));

} else {
var statearr_36683_38213 = state_36668__$1;
(statearr_36683_38213[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (3))){
var inst_36666 = (state_36668[(2)]);
var state_36668__$1 = state_36668;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36668__$1,inst_36666);
} else {
if((state_val_36669 === (12))){
var inst_36631 = (state_36668[(8)]);
var inst_36656 = cljs.core.vec(inst_36631);
var state_36668__$1 = state_36668;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36668__$1,(15),out,inst_36656);
} else {
if((state_val_36669 === (2))){
var state_36668__$1 = state_36668;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36668__$1,(4),ch);
} else {
if((state_val_36669 === (11))){
var inst_36648 = (state_36668[(2)]);
var inst_36649 = (new Array(n));
var inst_36631 = inst_36649;
var inst_36632 = (0);
var state_36668__$1 = (function (){var statearr_36686 = state_36668;
(statearr_36686[(7)] = inst_36632);

(statearr_36686[(8)] = inst_36631);

(statearr_36686[(10)] = inst_36648);

return statearr_36686;
})();
var statearr_36687_38216 = state_36668__$1;
(statearr_36687_38216[(2)] = null);

(statearr_36687_38216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (9))){
var inst_36631 = (state_36668[(8)]);
var inst_36646 = cljs.core.vec(inst_36631);
var state_36668__$1 = state_36668;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36668__$1,(11),out,inst_36646);
} else {
if((state_val_36669 === (5))){
var inst_36640 = (state_36668[(11)]);
var inst_36632 = (state_36668[(7)]);
var inst_36635 = (state_36668[(9)]);
var inst_36631 = (state_36668[(8)]);
var inst_36639 = (inst_36631[inst_36632] = inst_36635);
var inst_36640__$1 = (inst_36632 + (1));
var inst_36642 = (inst_36640__$1 < n);
var state_36668__$1 = (function (){var statearr_36689 = state_36668;
(statearr_36689[(12)] = inst_36639);

(statearr_36689[(11)] = inst_36640__$1);

return statearr_36689;
})();
if(cljs.core.truth_(inst_36642)){
var statearr_36690_38218 = state_36668__$1;
(statearr_36690_38218[(1)] = (8));

} else {
var statearr_36691_38219 = state_36668__$1;
(statearr_36691_38219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (14))){
var inst_36661 = (state_36668[(2)]);
var inst_36662 = cljs.core.async.close_BANG_(out);
var state_36668__$1 = (function (){var statearr_36694 = state_36668;
(statearr_36694[(13)] = inst_36661);

return statearr_36694;
})();
var statearr_36695_38220 = state_36668__$1;
(statearr_36695_38220[(2)] = inst_36662);

(statearr_36695_38220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (10))){
var inst_36652 = (state_36668[(2)]);
var state_36668__$1 = state_36668;
var statearr_36696_38222 = state_36668__$1;
(statearr_36696_38222[(2)] = inst_36652);

(statearr_36696_38222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (8))){
var inst_36640 = (state_36668[(11)]);
var inst_36631 = (state_36668[(8)]);
var tmp36692 = inst_36631;
var inst_36631__$1 = tmp36692;
var inst_36632 = inst_36640;
var state_36668__$1 = (function (){var statearr_36698 = state_36668;
(statearr_36698[(7)] = inst_36632);

(statearr_36698[(8)] = inst_36631__$1);

return statearr_36698;
})();
var statearr_36699_38223 = state_36668__$1;
(statearr_36699_38223[(2)] = null);

(statearr_36699_38223[(1)] = (2));


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
var statearr_36701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36701[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36701[(1)] = (1));

return statearr_36701;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36668){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36668);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36702){if((e36702 instanceof Object)){
var ex__34210__auto__ = e36702;
var statearr_36703_38225 = state_36668;
(statearr_36703_38225[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36702;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38226 = state_36668;
state_36668 = G__38226;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36668){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36704 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36704[(6)] = c__34274__auto___38201);

return statearr_36704;
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
var G__36706 = arguments.length;
switch (G__36706) {
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
var c__34274__auto___38229 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36750){
var state_val_36751 = (state_36750[(1)]);
if((state_val_36751 === (7))){
var inst_36746 = (state_36750[(2)]);
var state_36750__$1 = state_36750;
var statearr_36753_38230 = state_36750__$1;
(statearr_36753_38230[(2)] = inst_36746);

(statearr_36753_38230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36751 === (1))){
var inst_36708 = [];
var inst_36709 = inst_36708;
var inst_36710 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36750__$1 = (function (){var statearr_36754 = state_36750;
(statearr_36754[(7)] = inst_36709);

(statearr_36754[(8)] = inst_36710);

return statearr_36754;
})();
var statearr_36756_38232 = state_36750__$1;
(statearr_36756_38232[(2)] = null);

(statearr_36756_38232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36751 === (4))){
var inst_36713 = (state_36750[(9)]);
var inst_36713__$1 = (state_36750[(2)]);
var inst_36714 = (inst_36713__$1 == null);
var inst_36715 = cljs.core.not(inst_36714);
var state_36750__$1 = (function (){var statearr_36757 = state_36750;
(statearr_36757[(9)] = inst_36713__$1);

return statearr_36757;
})();
if(inst_36715){
var statearr_36758_38233 = state_36750__$1;
(statearr_36758_38233[(1)] = (5));

} else {
var statearr_36760_38234 = state_36750__$1;
(statearr_36760_38234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36751 === (15))){
var inst_36740 = (state_36750[(2)]);
var state_36750__$1 = state_36750;
var statearr_36761_38236 = state_36750__$1;
(statearr_36761_38236[(2)] = inst_36740);

(statearr_36761_38236[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36751 === (13))){
var state_36750__$1 = state_36750;
var statearr_36762_38237 = state_36750__$1;
(statearr_36762_38237[(2)] = null);

(statearr_36762_38237[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36751 === (6))){
var inst_36709 = (state_36750[(7)]);
var inst_36735 = inst_36709.length;
var inst_36736 = (inst_36735 > (0));
var state_36750__$1 = state_36750;
if(cljs.core.truth_(inst_36736)){
var statearr_36764_38238 = state_36750__$1;
(statearr_36764_38238[(1)] = (12));

} else {
var statearr_36765_38239 = state_36750__$1;
(statearr_36765_38239[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36751 === (3))){
var inst_36748 = (state_36750[(2)]);
var state_36750__$1 = state_36750;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36750__$1,inst_36748);
} else {
if((state_val_36751 === (12))){
var inst_36709 = (state_36750[(7)]);
var inst_36738 = cljs.core.vec(inst_36709);
var state_36750__$1 = state_36750;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36750__$1,(15),out,inst_36738);
} else {
if((state_val_36751 === (2))){
var state_36750__$1 = state_36750;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36750__$1,(4),ch);
} else {
if((state_val_36751 === (11))){
var inst_36717 = (state_36750[(10)]);
var inst_36713 = (state_36750[(9)]);
var inst_36728 = (state_36750[(2)]);
var inst_36729 = [];
var inst_36730 = inst_36729.push(inst_36713);
var inst_36709 = inst_36729;
var inst_36710 = inst_36717;
var state_36750__$1 = (function (){var statearr_36768 = state_36750;
(statearr_36768[(11)] = inst_36730);

(statearr_36768[(7)] = inst_36709);

(statearr_36768[(12)] = inst_36728);

(statearr_36768[(8)] = inst_36710);

return statearr_36768;
})();
var statearr_36769_38242 = state_36750__$1;
(statearr_36769_38242[(2)] = null);

(statearr_36769_38242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36751 === (9))){
var inst_36709 = (state_36750[(7)]);
var inst_36726 = cljs.core.vec(inst_36709);
var state_36750__$1 = state_36750;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36750__$1,(11),out,inst_36726);
} else {
if((state_val_36751 === (5))){
var inst_36717 = (state_36750[(10)]);
var inst_36710 = (state_36750[(8)]);
var inst_36713 = (state_36750[(9)]);
var inst_36717__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36713) : f.call(null,inst_36713));
var inst_36718 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36717__$1,inst_36710);
var inst_36719 = cljs.core.keyword_identical_QMARK_(inst_36710,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36720 = ((inst_36718) || (inst_36719));
var state_36750__$1 = (function (){var statearr_36772 = state_36750;
(statearr_36772[(10)] = inst_36717__$1);

return statearr_36772;
})();
if(cljs.core.truth_(inst_36720)){
var statearr_36773_38244 = state_36750__$1;
(statearr_36773_38244[(1)] = (8));

} else {
var statearr_36774_38245 = state_36750__$1;
(statearr_36774_38245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36751 === (14))){
var inst_36743 = (state_36750[(2)]);
var inst_36744 = cljs.core.async.close_BANG_(out);
var state_36750__$1 = (function (){var statearr_36776 = state_36750;
(statearr_36776[(13)] = inst_36743);

return statearr_36776;
})();
var statearr_36778_38247 = state_36750__$1;
(statearr_36778_38247[(2)] = inst_36744);

(statearr_36778_38247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36751 === (10))){
var inst_36733 = (state_36750[(2)]);
var state_36750__$1 = state_36750;
var statearr_36779_38248 = state_36750__$1;
(statearr_36779_38248[(2)] = inst_36733);

(statearr_36779_38248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36751 === (8))){
var inst_36709 = (state_36750[(7)]);
var inst_36717 = (state_36750[(10)]);
var inst_36713 = (state_36750[(9)]);
var inst_36722 = inst_36709.push(inst_36713);
var tmp36775 = inst_36709;
var inst_36709__$1 = tmp36775;
var inst_36710 = inst_36717;
var state_36750__$1 = (function (){var statearr_36781 = state_36750;
(statearr_36781[(7)] = inst_36709__$1);

(statearr_36781[(14)] = inst_36722);

(statearr_36781[(8)] = inst_36710);

return statearr_36781;
})();
var statearr_36783_38250 = state_36750__$1;
(statearr_36783_38250[(2)] = null);

(statearr_36783_38250[(1)] = (2));


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
var statearr_36785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36785[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36785[(1)] = (1));

return statearr_36785;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36750){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36750);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36787){if((e36787 instanceof Object)){
var ex__34210__auto__ = e36787;
var statearr_36788_38252 = state_36750;
(statearr_36788_38252[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36787;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38253 = state_36750;
state_36750 = G__38253;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36791 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36791[(6)] = c__34274__auto___38229);

return statearr_36791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
