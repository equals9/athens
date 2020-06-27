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
var val_36876 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36876) : fn1.call(null,val_36876));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36876) : fn1.call(null,val_36876));
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
var n__4666__auto___36882 = n;
var x_36884 = (0);
while(true){
if((x_36884 < n__4666__auto___36882)){
(a[x_36884] = x_36884);

var G__36885 = (x_36884 + (1));
x_36884 = G__36885;
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
var G__36894 = (i + (1));
i = G__36894;
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
var len__4789__auto___36897 = arguments.length;
var i__4790__auto___36898 = (0);
while(true){
if((i__4790__auto___36898 < len__4789__auto___36897)){
args__4795__auto__.push((arguments[i__4790__auto___36898]));

var G__36899 = (i__4790__auto___36898 + (1));
i__4790__auto___36898 = G__36899;
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
var c__34274__auto___36905 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34411){
var state_val_34412 = (state_34411[(1)]);
if((state_val_34412 === (7))){
var inst_34407 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34425_36907 = state_34411__$1;
(statearr_34425_36907[(2)] = inst_34407);

(statearr_34425_36907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (1))){
var state_34411__$1 = state_34411;
var statearr_34426_36908 = state_34411__$1;
(statearr_34426_36908[(2)] = null);

(statearr_34426_36908[(1)] = (2));


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
var statearr_34428_36909 = state_34411__$1;
(statearr_34428_36909[(1)] = (5));

} else {
var statearr_34429_36911 = state_34411__$1;
(statearr_34429_36911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (13))){
var state_34411__$1 = state_34411;
var statearr_34430_36912 = state_34411__$1;
(statearr_34430_36912[(2)] = null);

(statearr_34430_36912[(1)] = (14));


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
var statearr_34431_36914 = state_34411__$1;
(statearr_34431_36914[(2)] = null);

(statearr_34431_36914[(1)] = (2));


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
var statearr_34432_36915 = state_34411__$1;
(statearr_34432_36915[(1)] = (12));

} else {
var statearr_34433_36916 = state_34411__$1;
(statearr_34433_36916[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (9))){
var state_34411__$1 = state_34411;
var statearr_34434_36917 = state_34411__$1;
(statearr_34434_36917[(2)] = null);

(statearr_34434_36917[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (5))){
var state_34411__$1 = state_34411;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34435_36919 = state_34411__$1;
(statearr_34435_36919[(1)] = (8));

} else {
var statearr_34436_36920 = state_34411__$1;
(statearr_34436_36920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (14))){
var inst_34405 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34437_36927 = state_34411__$1;
(statearr_34437_36927[(2)] = inst_34405);

(statearr_34437_36927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (10))){
var inst_34397 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34438_36928 = state_34411__$1;
(statearr_34438_36928[(2)] = inst_34397);

(statearr_34438_36928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (8))){
var inst_34394 = cljs.core.async.close_BANG_(to);
var state_34411__$1 = state_34411;
var statearr_34439_36929 = state_34411__$1;
(statearr_34439_36929[(2)] = inst_34394);

(statearr_34439_36929[(1)] = (10));


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
var statearr_34442_36931 = state_34411;
(statearr_34442_36931[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36932 = state_34411;
state_34411 = G__36932;
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
(statearr_34443[(6)] = c__34274__auto___36905);

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
var c__34274__auto___36937 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
var state_34452__$1 = (function (){var statearr_34458 = state_34452;
(statearr_34458[(7)] = inst_34449);

return statearr_34458;
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
var statearr_34459 = [null,null,null,null,null,null,null,null];
(statearr_34459[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34459[(1)] = (1));

return statearr_34459;
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
}catch (e34460){if((e34460 instanceof Object)){
var ex__34210__auto__ = e34460;
var statearr_34461_36942 = state_34452;
(statearr_34461_36942[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34460;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36945 = state_34452;
state_34452 = G__36945;
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
var state__34276__auto__ = (function (){var statearr_34463 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34463[(6)] = c__34274__auto___36937);

return statearr_34463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
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
var n__4666__auto___36947 = n;
var __36948 = (0);
while(true){
if((__36948 < n__4666__auto___36947)){
var G__34468_36949 = type;
var G__34468_36950__$1 = (((G__34468_36949 instanceof cljs.core.Keyword))?G__34468_36949.fqn:null);
switch (G__34468_36950__$1) {
case "compute":
var c__34274__auto___36952 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36948,c__34274__auto___36952,G__34468_36949,G__34468_36950__$1,n__4666__auto___36947,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36948,c__34274__auto___36952,G__34468_36949,G__34468_36950__$1,n__4666__auto___36947,jobs,results,process,async){
return (function (state_34482){
var state_val_34483 = (state_34482[(1)]);
if((state_val_34483 === (1))){
var state_34482__$1 = state_34482;
var statearr_34485_36955 = state_34482__$1;
(statearr_34485_36955[(2)] = null);

(statearr_34485_36955[(1)] = (2));


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
var statearr_34486_36960 = state_34482__$1;
(statearr_34486_36960[(1)] = (5));

} else {
var statearr_34488_36961 = state_34482__$1;
(statearr_34488_36961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (5))){
var state_34482__$1 = state_34482;
var statearr_34489_36962 = state_34482__$1;
(statearr_34489_36962[(2)] = null);

(statearr_34489_36962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (6))){
var state_34482__$1 = state_34482;
var statearr_34490_36963 = state_34482__$1;
(statearr_34490_36963[(2)] = null);

(statearr_34490_36963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (7))){
var inst_34478 = (state_34482[(2)]);
var state_34482__$1 = state_34482;
var statearr_34491_36965 = state_34482__$1;
(statearr_34491_36965[(2)] = inst_34478);

(statearr_34491_36965[(1)] = (3));


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
});})(__36948,c__34274__auto___36952,G__34468_36949,G__34468_36950__$1,n__4666__auto___36947,jobs,results,process,async))
;
return ((function (__36948,switch__34206__auto__,c__34274__auto___36952,G__34468_36949,G__34468_36950__$1,n__4666__auto___36947,jobs,results,process,async){
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
var statearr_34496_36974 = state_34482;
(statearr_34496_36974[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34495;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36976 = state_34482;
state_34482 = G__36976;
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
;})(__36948,switch__34206__auto__,c__34274__auto___36952,G__34468_36949,G__34468_36950__$1,n__4666__auto___36947,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34502 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34502[(6)] = c__34274__auto___36952);

return statearr_34502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36948,c__34274__auto___36952,G__34468_36949,G__34468_36950__$1,n__4666__auto___36947,jobs,results,process,async))
);


break;
case "async":
var c__34274__auto___36980 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36948,c__34274__auto___36980,G__34468_36949,G__34468_36950__$1,n__4666__auto___36947,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36948,c__34274__auto___36980,G__34468_36949,G__34468_36950__$1,n__4666__auto___36947,jobs,results,process,async){
return (function (state_34515){
var state_val_34516 = (state_34515[(1)]);
if((state_val_34516 === (1))){
var state_34515__$1 = state_34515;
var statearr_34517_36986 = state_34515__$1;
(statearr_34517_36986[(2)] = null);

(statearr_34517_36986[(1)] = (2));


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
var statearr_34519_36995 = state_34515__$1;
(statearr_34519_36995[(1)] = (5));

} else {
var statearr_34520_36996 = state_34515__$1;
(statearr_34520_36996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (5))){
var state_34515__$1 = state_34515;
var statearr_34521_36997 = state_34515__$1;
(statearr_34521_36997[(2)] = null);

(statearr_34521_36997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (6))){
var state_34515__$1 = state_34515;
var statearr_34522_37000 = state_34515__$1;
(statearr_34522_37000[(2)] = null);

(statearr_34522_37000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (7))){
var inst_34511 = (state_34515[(2)]);
var state_34515__$1 = state_34515;
var statearr_34527_37003 = state_34515__$1;
(statearr_34527_37003[(2)] = inst_34511);

(statearr_34527_37003[(1)] = (3));


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
});})(__36948,c__34274__auto___36980,G__34468_36949,G__34468_36950__$1,n__4666__auto___36947,jobs,results,process,async))
;
return ((function (__36948,switch__34206__auto__,c__34274__auto___36980,G__34468_36949,G__34468_36950__$1,n__4666__auto___36947,jobs,results,process,async){
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
var statearr_34533_37011 = state_34515;
(statearr_34533_37011[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34532;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37014 = state_34515;
state_34515 = G__37014;
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
;})(__36948,switch__34206__auto__,c__34274__auto___36980,G__34468_36949,G__34468_36950__$1,n__4666__auto___36947,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34534 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34534[(6)] = c__34274__auto___36980);

return statearr_34534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36948,c__34274__auto___36980,G__34468_36949,G__34468_36950__$1,n__4666__auto___36947,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34468_36950__$1)].join('')));

}

var G__37020 = (__36948 + (1));
__36948 = G__37020;
continue;
} else {
}
break;
}

var c__34274__auto___37022 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34556){
var state_val_34557 = (state_34556[(1)]);
if((state_val_34557 === (7))){
var inst_34552 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
var statearr_34561_37029 = state_34556__$1;
(statearr_34561_37029[(2)] = inst_34552);

(statearr_34561_37029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (1))){
var state_34556__$1 = state_34556;
var statearr_34562_37031 = state_34556__$1;
(statearr_34562_37031[(2)] = null);

(statearr_34562_37031[(1)] = (2));


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
var statearr_34564_37034 = state_34556__$1;
(statearr_34564_37034[(1)] = (5));

} else {
var statearr_34565_37035 = state_34556__$1;
(statearr_34565_37035[(1)] = (6));

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
var statearr_34568_37042 = state_34556__$1;
(statearr_34568_37042[(2)] = null);

(statearr_34568_37042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (5))){
var inst_34540 = cljs.core.async.close_BANG_(jobs);
var state_34556__$1 = state_34556;
var statearr_34569_37048 = state_34556__$1;
(statearr_34569_37048[(2)] = inst_34540);

(statearr_34569_37048[(1)] = (7));


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
var statearr_34573_37057 = state_34556;
(statearr_34573_37057[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37058 = state_34556;
state_34556 = G__37058;
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
(statearr_34574[(6)] = c__34274__auto___37022);

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
var statearr_34614_37062 = state_34612__$1;
(statearr_34614_37062[(2)] = inst_34608);

(statearr_34614_37062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var state_34612__$1 = state_34612;
var statearr_34615_37063 = state_34612__$1;
(statearr_34615_37063[(2)] = null);

(statearr_34615_37063[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34616_37066 = state_34612__$1;
(statearr_34616_37066[(2)] = null);

(statearr_34616_37066[(1)] = (2));


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
var statearr_34618_37068 = state_34612__$1;
(statearr_34618_37068[(1)] = (5));

} else {
var statearr_34619_37070 = state_34612__$1;
(statearr_34619_37070[(1)] = (6));

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
var statearr_34620_37074 = state_34612__$1;
(statearr_34620_37074[(2)] = inst_34603);

(statearr_34620_37074[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_37075 = state_34612__$1;
(statearr_34622_37075[(2)] = null);

(statearr_34622_37075[(1)] = (2));


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
var statearr_34623_37083 = state_34612__$1;
(statearr_34623_37083[(1)] = (19));

} else {
var statearr_34624_37084 = state_34612__$1;
(statearr_34624_37084[(1)] = (20));

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
var statearr_34625_37087 = state_34612__$1;
(statearr_34625_37087[(2)] = null);

(statearr_34625_37087[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34587 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34626 = state_34612;
(statearr_34626[(10)] = inst_34587);

return statearr_34626;
})();
var statearr_34627_37090 = state_34612__$1;
(statearr_34627_37090[(2)] = null);

(statearr_34627_37090[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34628_37091 = state_34612__$1;
(statearr_34628_37091[(2)] = null);

(statearr_34628_37091[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_37093 = state_34612__$1;
(statearr_34629_37093[(1)] = (8));

} else {
var statearr_34630_37096 = state_34612__$1;
(statearr_34630_37096[(1)] = (9));

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
var statearr_34632_37101 = state_34612__$1;
(statearr_34632_37101[(1)] = (15));

} else {
var statearr_34633_37102 = state_34612__$1;
(statearr_34633_37102[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34634_37103 = state_34612__$1;
(statearr_34634_37103[(2)] = false);

(statearr_34634_37103[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34635_37106 = state_34612__$1;
(statearr_34635_37106[(2)] = inst_34584);

(statearr_34635_37106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34636_37107 = state_34612__$1;
(statearr_34636_37107[(2)] = inst_34595);

(statearr_34636_37107[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34581 = cljs.core.async.close_BANG_(to);
var state_34612__$1 = state_34612;
var statearr_34637_37110 = state_34612__$1;
(statearr_34637_37110[(2)] = inst_34581);

(statearr_34637_37110[(1)] = (10));


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
var statearr_34640_37114 = state_34612;
(statearr_34640_37114[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37118 = state_34612;
state_34612 = G__37118;
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
var G__34651 = arguments.length;
switch (G__34651) {
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
var G__34656 = arguments.length;
switch (G__34656) {
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
var c__34274__auto___37145 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34684){
var state_val_34685 = (state_34684[(1)]);
if((state_val_34685 === (7))){
var inst_34680 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
var statearr_34687_37148 = state_34684__$1;
(statearr_34687_37148[(2)] = inst_34680);

(statearr_34687_37148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (1))){
var state_34684__$1 = state_34684;
var statearr_34688_37152 = state_34684__$1;
(statearr_34688_37152[(2)] = null);

(statearr_34688_37152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (4))){
var inst_34661 = (state_34684[(7)]);
var inst_34661__$1 = (state_34684[(2)]);
var inst_34662 = (inst_34661__$1 == null);
var state_34684__$1 = (function (){var statearr_34689 = state_34684;
(statearr_34689[(7)] = inst_34661__$1);

return statearr_34689;
})();
if(cljs.core.truth_(inst_34662)){
var statearr_34691_37157 = state_34684__$1;
(statearr_34691_37157[(1)] = (5));

} else {
var statearr_34692_37160 = state_34684__$1;
(statearr_34692_37160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (13))){
var state_34684__$1 = state_34684;
var statearr_34693_37161 = state_34684__$1;
(statearr_34693_37161[(2)] = null);

(statearr_34693_37161[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (6))){
var inst_34661 = (state_34684[(7)]);
var inst_34667 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34661) : p.call(null,inst_34661));
var state_34684__$1 = state_34684;
if(cljs.core.truth_(inst_34667)){
var statearr_34694_37166 = state_34684__$1;
(statearr_34694_37166[(1)] = (9));

} else {
var statearr_34695_37167 = state_34684__$1;
(statearr_34695_37167[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (3))){
var inst_34682 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34684__$1,inst_34682);
} else {
if((state_val_34685 === (12))){
var state_34684__$1 = state_34684;
var statearr_34698_37169 = state_34684__$1;
(statearr_34698_37169[(2)] = null);

(statearr_34698_37169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (2))){
var state_34684__$1 = state_34684;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34684__$1,(4),ch);
} else {
if((state_val_34685 === (11))){
var inst_34661 = (state_34684[(7)]);
var inst_34671 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34684__$1,(8),inst_34671,inst_34661);
} else {
if((state_val_34685 === (9))){
var state_34684__$1 = state_34684;
var statearr_34702_37181 = state_34684__$1;
(statearr_34702_37181[(2)] = tc);

(statearr_34702_37181[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (5))){
var inst_34664 = cljs.core.async.close_BANG_(tc);
var inst_34665 = cljs.core.async.close_BANG_(fc);
var state_34684__$1 = (function (){var statearr_34703 = state_34684;
(statearr_34703[(8)] = inst_34664);

return statearr_34703;
})();
var statearr_34704_37183 = state_34684__$1;
(statearr_34704_37183[(2)] = inst_34665);

(statearr_34704_37183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (14))){
var inst_34678 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
var statearr_34705_37186 = state_34684__$1;
(statearr_34705_37186[(2)] = inst_34678);

(statearr_34705_37186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (10))){
var state_34684__$1 = state_34684;
var statearr_34706_37189 = state_34684__$1;
(statearr_34706_37189[(2)] = fc);

(statearr_34706_37189[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (8))){
var inst_34673 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
if(cljs.core.truth_(inst_34673)){
var statearr_34707_37190 = state_34684__$1;
(statearr_34707_37190[(1)] = (12));

} else {
var statearr_34708_37191 = state_34684__$1;
(statearr_34708_37191[(1)] = (13));

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
var statearr_34710 = [null,null,null,null,null,null,null,null,null];
(statearr_34710[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34710[(1)] = (1));

return statearr_34710;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34684){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34684);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34711){if((e34711 instanceof Object)){
var ex__34210__auto__ = e34711;
var statearr_34712_37194 = state_34684;
(statearr_34712_37194[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34711;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37196 = state_34684;
state_34684 = G__37196;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34713 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34713[(6)] = c__34274__auto___37145);

return statearr_34713;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34740){
var state_val_34741 = (state_34740[(1)]);
if((state_val_34741 === (7))){
var inst_34733 = (state_34740[(2)]);
var state_34740__$1 = state_34740;
var statearr_34742_37202 = state_34740__$1;
(statearr_34742_37202[(2)] = inst_34733);

(statearr_34742_37202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (1))){
var inst_34717 = init;
var state_34740__$1 = (function (){var statearr_34743 = state_34740;
(statearr_34743[(7)] = inst_34717);

return statearr_34743;
})();
var statearr_34744_37203 = state_34740__$1;
(statearr_34744_37203[(2)] = null);

(statearr_34744_37203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (4))){
var inst_34720 = (state_34740[(8)]);
var inst_34720__$1 = (state_34740[(2)]);
var inst_34721 = (inst_34720__$1 == null);
var state_34740__$1 = (function (){var statearr_34745 = state_34740;
(statearr_34745[(8)] = inst_34720__$1);

return statearr_34745;
})();
if(cljs.core.truth_(inst_34721)){
var statearr_34746_37208 = state_34740__$1;
(statearr_34746_37208[(1)] = (5));

} else {
var statearr_34747_37209 = state_34740__$1;
(statearr_34747_37209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (6))){
var inst_34724 = (state_34740[(9)]);
var inst_34717 = (state_34740[(7)]);
var inst_34720 = (state_34740[(8)]);
var inst_34724__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34717,inst_34720) : f.call(null,inst_34717,inst_34720));
var inst_34725 = cljs.core.reduced_QMARK_(inst_34724__$1);
var state_34740__$1 = (function (){var statearr_34751 = state_34740;
(statearr_34751[(9)] = inst_34724__$1);

return statearr_34751;
})();
if(inst_34725){
var statearr_34752_37214 = state_34740__$1;
(statearr_34752_37214[(1)] = (8));

} else {
var statearr_34753_37216 = state_34740__$1;
(statearr_34753_37216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (3))){
var inst_34735 = (state_34740[(2)]);
var state_34740__$1 = state_34740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34740__$1,inst_34735);
} else {
if((state_val_34741 === (2))){
var state_34740__$1 = state_34740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34740__$1,(4),ch);
} else {
if((state_val_34741 === (9))){
var inst_34724 = (state_34740[(9)]);
var inst_34717 = inst_34724;
var state_34740__$1 = (function (){var statearr_34754 = state_34740;
(statearr_34754[(7)] = inst_34717);

return statearr_34754;
})();
var statearr_34755_37221 = state_34740__$1;
(statearr_34755_37221[(2)] = null);

(statearr_34755_37221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (5))){
var inst_34717 = (state_34740[(7)]);
var state_34740__$1 = state_34740;
var statearr_34756_37225 = state_34740__$1;
(statearr_34756_37225[(2)] = inst_34717);

(statearr_34756_37225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (10))){
var inst_34731 = (state_34740[(2)]);
var state_34740__$1 = state_34740;
var statearr_34757_37227 = state_34740__$1;
(statearr_34757_37227[(2)] = inst_34731);

(statearr_34757_37227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (8))){
var inst_34724 = (state_34740[(9)]);
var inst_34727 = cljs.core.deref(inst_34724);
var state_34740__$1 = state_34740;
var statearr_34758_37232 = state_34740__$1;
(statearr_34758_37232[(2)] = inst_34727);

(statearr_34758_37232[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__34207__auto____1 = (function (state_34740){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34740);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34760){if((e34760 instanceof Object)){
var ex__34210__auto__ = e34760;
var statearr_34761_37238 = state_34740;
(statearr_34761_37238[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37242 = state_34740;
state_34740 = G__37242;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34207__auto__ = function(state_34740){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34207__auto____1.call(this,state_34740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34207__auto____0;
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34207__auto____1;
return cljs$core$async$reduce_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34762 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34762[(6)] = c__34274__auto__);

return statearr_34762;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34768){
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
var statearr_34772_37258 = state_34768;
(statearr_34772_37258[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34771;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37260 = state_34768;
state_34768 = G__37260;
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
var G__34778 = arguments.length;
switch (G__34778) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34807){
var state_val_34808 = (state_34807[(1)]);
if((state_val_34808 === (7))){
var inst_34789 = (state_34807[(2)]);
var state_34807__$1 = state_34807;
var statearr_34810_37267 = state_34807__$1;
(statearr_34810_37267[(2)] = inst_34789);

(statearr_34810_37267[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (1))){
var inst_34782 = cljs.core.seq(coll);
var inst_34783 = inst_34782;
var state_34807__$1 = (function (){var statearr_34811 = state_34807;
(statearr_34811[(7)] = inst_34783);

return statearr_34811;
})();
var statearr_34812_37269 = state_34807__$1;
(statearr_34812_37269[(2)] = null);

(statearr_34812_37269[(1)] = (2));


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
var statearr_34817_37270 = state_34807__$1;
(statearr_34817_37270[(2)] = inst_34801);

(statearr_34817_37270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (6))){
var inst_34792 = (state_34807[(2)]);
var state_34807__$1 = state_34807;
if(cljs.core.truth_(inst_34792)){
var statearr_34819_37274 = state_34807__$1;
(statearr_34819_37274[(1)] = (8));

} else {
var statearr_34820_37276 = state_34807__$1;
(statearr_34820_37276[(1)] = (9));

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
var statearr_34821_37280 = state_34807__$1;
(statearr_34821_37280[(2)] = null);

(statearr_34821_37280[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (2))){
var inst_34783 = (state_34807[(7)]);
var state_34807__$1 = state_34807;
if(cljs.core.truth_(inst_34783)){
var statearr_34822_37283 = state_34807__$1;
(statearr_34822_37283[(1)] = (4));

} else {
var statearr_34823_37284 = state_34807__$1;
(statearr_34823_37284[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (11))){
var inst_34798 = cljs.core.async.close_BANG_(ch);
var state_34807__$1 = state_34807;
var statearr_34824_37288 = state_34807__$1;
(statearr_34824_37288[(2)] = inst_34798);

(statearr_34824_37288[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (9))){
var state_34807__$1 = state_34807;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34825_37290 = state_34807__$1;
(statearr_34825_37290[(1)] = (11));

} else {
var statearr_34826_37291 = state_34807__$1;
(statearr_34826_37291[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (5))){
var inst_34783 = (state_34807[(7)]);
var state_34807__$1 = state_34807;
var statearr_34827_37294 = state_34807__$1;
(statearr_34827_37294[(2)] = inst_34783);

(statearr_34827_37294[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (10))){
var inst_34803 = (state_34807[(2)]);
var state_34807__$1 = state_34807;
var statearr_34828_37300 = state_34807__$1;
(statearr_34828_37300[(2)] = inst_34803);

(statearr_34828_37300[(1)] = (3));


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
var statearr_34833_37307 = state_34807__$1;
(statearr_34833_37307[(2)] = null);

(statearr_34833_37307[(1)] = (2));


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
var statearr_34834 = [null,null,null,null,null,null,null,null];
(statearr_34834[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34834[(1)] = (1));

return statearr_34834;
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
var statearr_34839_37310 = state_34807;
(statearr_34839_37310[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34838;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37315 = state_34807;
state_34807 = G__37315;
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
var state__34276__auto__ = (function (){var statearr_34840 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34840[(6)] = c__34274__auto__);

return statearr_34840;
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
var c__34274__auto___37363 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34990){
var state_val_34991 = (state_34990[(1)]);
if((state_val_34991 === (7))){
var inst_34984 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_34996_37364 = state_34990__$1;
(statearr_34996_37364[(2)] = inst_34984);

(statearr_34996_37364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (20))){
var inst_34877 = (state_34990[(7)]);
var inst_34889 = cljs.core.first(inst_34877);
var inst_34890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34889,(0),null);
var inst_34891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34889,(1),null);
var state_34990__$1 = (function (){var statearr_34999 = state_34990;
(statearr_34999[(8)] = inst_34890);

return statearr_34999;
})();
if(cljs.core.truth_(inst_34891)){
var statearr_35000_37372 = state_34990__$1;
(statearr_35000_37372[(1)] = (22));

} else {
var statearr_35001_37373 = state_34990__$1;
(statearr_35001_37373[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (27))){
var inst_34931 = (state_34990[(9)]);
var inst_34923 = (state_34990[(10)]);
var inst_34846 = (state_34990[(11)]);
var inst_34925 = (state_34990[(12)]);
var inst_34931__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34923,inst_34925);
var inst_34933 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34931__$1,inst_34846,done);
var state_34990__$1 = (function (){var statearr_35002 = state_34990;
(statearr_35002[(9)] = inst_34931__$1);

return statearr_35002;
})();
if(cljs.core.truth_(inst_34933)){
var statearr_35003_37376 = state_34990__$1;
(statearr_35003_37376[(1)] = (30));

} else {
var statearr_35004_37377 = state_34990__$1;
(statearr_35004_37377[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (1))){
var state_34990__$1 = state_34990;
var statearr_35005_37379 = state_34990__$1;
(statearr_35005_37379[(2)] = null);

(statearr_35005_37379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (24))){
var inst_34877 = (state_34990[(7)]);
var inst_34898 = (state_34990[(2)]);
var inst_34899 = cljs.core.next(inst_34877);
var inst_34855 = inst_34899;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34990__$1 = (function (){var statearr_35008 = state_34990;
(statearr_35008[(13)] = inst_34857);

(statearr_35008[(14)] = inst_34856);

(statearr_35008[(15)] = inst_34898);

(statearr_35008[(16)] = inst_34858);

(statearr_35008[(17)] = inst_34855);

return statearr_35008;
})();
var statearr_35011_37386 = state_34990__$1;
(statearr_35011_37386[(2)] = null);

(statearr_35011_37386[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (39))){
var state_34990__$1 = state_34990;
var statearr_35017_37387 = state_34990__$1;
(statearr_35017_37387[(2)] = null);

(statearr_35017_37387[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (4))){
var inst_34846 = (state_34990[(11)]);
var inst_34846__$1 = (state_34990[(2)]);
var inst_34847 = (inst_34846__$1 == null);
var state_34990__$1 = (function (){var statearr_35018 = state_34990;
(statearr_35018[(11)] = inst_34846__$1);

return statearr_35018;
})();
if(cljs.core.truth_(inst_34847)){
var statearr_35020_37389 = state_34990__$1;
(statearr_35020_37389[(1)] = (5));

} else {
var statearr_35021_37390 = state_34990__$1;
(statearr_35021_37390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (15))){
var inst_34857 = (state_34990[(13)]);
var inst_34856 = (state_34990[(14)]);
var inst_34858 = (state_34990[(16)]);
var inst_34855 = (state_34990[(17)]);
var inst_34873 = (state_34990[(2)]);
var inst_34874 = (inst_34858 + (1));
var tmp35014 = inst_34857;
var tmp35015 = inst_34856;
var tmp35016 = inst_34855;
var inst_34855__$1 = tmp35016;
var inst_34856__$1 = tmp35015;
var inst_34857__$1 = tmp35014;
var inst_34858__$1 = inst_34874;
var state_34990__$1 = (function (){var statearr_35025 = state_34990;
(statearr_35025[(18)] = inst_34873);

(statearr_35025[(13)] = inst_34857__$1);

(statearr_35025[(14)] = inst_34856__$1);

(statearr_35025[(16)] = inst_34858__$1);

(statearr_35025[(17)] = inst_34855__$1);

return statearr_35025;
})();
var statearr_35038_37395 = state_34990__$1;
(statearr_35038_37395[(2)] = null);

(statearr_35038_37395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (21))){
var inst_34902 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35045_37399 = state_34990__$1;
(statearr_35045_37399[(2)] = inst_34902);

(statearr_35045_37399[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (31))){
var inst_34931 = (state_34990[(9)]);
var inst_34936 = done(null);
var inst_34937 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34931);
var state_34990__$1 = (function (){var statearr_35048 = state_34990;
(statearr_35048[(19)] = inst_34936);

return statearr_35048;
})();
var statearr_35049_37402 = state_34990__$1;
(statearr_35049_37402[(2)] = inst_34937);

(statearr_35049_37402[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (32))){
var inst_34923 = (state_34990[(10)]);
var inst_34925 = (state_34990[(12)]);
var inst_34924 = (state_34990[(20)]);
var inst_34922 = (state_34990[(21)]);
var inst_34939 = (state_34990[(2)]);
var inst_34940 = (inst_34925 + (1));
var tmp35042 = inst_34923;
var tmp35043 = inst_34924;
var tmp35044 = inst_34922;
var inst_34922__$1 = tmp35044;
var inst_34923__$1 = tmp35042;
var inst_34924__$1 = tmp35043;
var inst_34925__$1 = inst_34940;
var state_34990__$1 = (function (){var statearr_35056 = state_34990;
(statearr_35056[(10)] = inst_34923__$1);

(statearr_35056[(12)] = inst_34925__$1);

(statearr_35056[(20)] = inst_34924__$1);

(statearr_35056[(21)] = inst_34922__$1);

(statearr_35056[(22)] = inst_34939);

return statearr_35056;
})();
var statearr_35062_37408 = state_34990__$1;
(statearr_35062_37408[(2)] = null);

(statearr_35062_37408[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (40))){
var inst_34952 = (state_34990[(23)]);
var inst_34956 = done(null);
var inst_34957 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34952);
var state_34990__$1 = (function (){var statearr_35068 = state_34990;
(statearr_35068[(24)] = inst_34956);

return statearr_35068;
})();
var statearr_35070_37414 = state_34990__$1;
(statearr_35070_37414[(2)] = inst_34957);

(statearr_35070_37414[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (33))){
var inst_34943 = (state_34990[(25)]);
var inst_34945 = cljs.core.chunked_seq_QMARK_(inst_34943);
var state_34990__$1 = state_34990;
if(inst_34945){
var statearr_35078_37422 = state_34990__$1;
(statearr_35078_37422[(1)] = (36));

} else {
var statearr_35079_37423 = state_34990__$1;
(statearr_35079_37423[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (13))){
var inst_34867 = (state_34990[(26)]);
var inst_34870 = cljs.core.async.close_BANG_(inst_34867);
var state_34990__$1 = state_34990;
var statearr_35085_37425 = state_34990__$1;
(statearr_35085_37425[(2)] = inst_34870);

(statearr_35085_37425[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (22))){
var inst_34890 = (state_34990[(8)]);
var inst_34895 = cljs.core.async.close_BANG_(inst_34890);
var state_34990__$1 = state_34990;
var statearr_35092_37427 = state_34990__$1;
(statearr_35092_37427[(2)] = inst_34895);

(statearr_35092_37427[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (36))){
var inst_34943 = (state_34990[(25)]);
var inst_34947 = cljs.core.chunk_first(inst_34943);
var inst_34948 = cljs.core.chunk_rest(inst_34943);
var inst_34949 = cljs.core.count(inst_34947);
var inst_34922 = inst_34948;
var inst_34923 = inst_34947;
var inst_34924 = inst_34949;
var inst_34925 = (0);
var state_34990__$1 = (function (){var statearr_35099 = state_34990;
(statearr_35099[(10)] = inst_34923);

(statearr_35099[(12)] = inst_34925);

(statearr_35099[(20)] = inst_34924);

(statearr_35099[(21)] = inst_34922);

return statearr_35099;
})();
var statearr_35106_37440 = state_34990__$1;
(statearr_35106_37440[(2)] = null);

(statearr_35106_37440[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (41))){
var inst_34943 = (state_34990[(25)]);
var inst_34959 = (state_34990[(2)]);
var inst_34960 = cljs.core.next(inst_34943);
var inst_34922 = inst_34960;
var inst_34923 = null;
var inst_34924 = (0);
var inst_34925 = (0);
var state_34990__$1 = (function (){var statearr_35113 = state_34990;
(statearr_35113[(10)] = inst_34923);

(statearr_35113[(27)] = inst_34959);

(statearr_35113[(12)] = inst_34925);

(statearr_35113[(20)] = inst_34924);

(statearr_35113[(21)] = inst_34922);

return statearr_35113;
})();
var statearr_35117_37443 = state_34990__$1;
(statearr_35117_37443[(2)] = null);

(statearr_35117_37443[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (43))){
var state_34990__$1 = state_34990;
var statearr_35122_37449 = state_34990__$1;
(statearr_35122_37449[(2)] = null);

(statearr_35122_37449[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (29))){
var inst_34968 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35129_37452 = state_34990__$1;
(statearr_35129_37452[(2)] = inst_34968);

(statearr_35129_37452[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (44))){
var inst_34980 = (state_34990[(2)]);
var state_34990__$1 = (function (){var statearr_35134 = state_34990;
(statearr_35134[(28)] = inst_34980);

return statearr_35134;
})();
var statearr_35138_37459 = state_34990__$1;
(statearr_35138_37459[(2)] = null);

(statearr_35138_37459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (6))){
var inst_34913 = (state_34990[(29)]);
var inst_34912 = cljs.core.deref(cs);
var inst_34913__$1 = cljs.core.keys(inst_34912);
var inst_34914 = cljs.core.count(inst_34913__$1);
var inst_34915 = cljs.core.reset_BANG_(dctr,inst_34914);
var inst_34921 = cljs.core.seq(inst_34913__$1);
var inst_34922 = inst_34921;
var inst_34923 = null;
var inst_34924 = (0);
var inst_34925 = (0);
var state_34990__$1 = (function (){var statearr_35146 = state_34990;
(statearr_35146[(10)] = inst_34923);

(statearr_35146[(12)] = inst_34925);

(statearr_35146[(20)] = inst_34924);

(statearr_35146[(29)] = inst_34913__$1);

(statearr_35146[(30)] = inst_34915);

(statearr_35146[(21)] = inst_34922);

return statearr_35146;
})();
var statearr_35147_37468 = state_34990__$1;
(statearr_35147_37468[(2)] = null);

(statearr_35147_37468[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (28))){
var inst_34943 = (state_34990[(25)]);
var inst_34922 = (state_34990[(21)]);
var inst_34943__$1 = cljs.core.seq(inst_34922);
var state_34990__$1 = (function (){var statearr_35148 = state_34990;
(statearr_35148[(25)] = inst_34943__$1);

return statearr_35148;
})();
if(inst_34943__$1){
var statearr_35149_37470 = state_34990__$1;
(statearr_35149_37470[(1)] = (33));

} else {
var statearr_35150_37471 = state_34990__$1;
(statearr_35150_37471[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (25))){
var inst_34925 = (state_34990[(12)]);
var inst_34924 = (state_34990[(20)]);
var inst_34928 = (inst_34925 < inst_34924);
var inst_34929 = inst_34928;
var state_34990__$1 = state_34990;
if(cljs.core.truth_(inst_34929)){
var statearr_35152_37478 = state_34990__$1;
(statearr_35152_37478[(1)] = (27));

} else {
var statearr_35154_37480 = state_34990__$1;
(statearr_35154_37480[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (34))){
var state_34990__$1 = state_34990;
var statearr_35157_37482 = state_34990__$1;
(statearr_35157_37482[(2)] = null);

(statearr_35157_37482[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (17))){
var state_34990__$1 = state_34990;
var statearr_35178_37483 = state_34990__$1;
(statearr_35178_37483[(2)] = null);

(statearr_35178_37483[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (3))){
var inst_34986 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34990__$1,inst_34986);
} else {
if((state_val_34991 === (12))){
var inst_34907 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35182_37490 = state_34990__$1;
(statearr_35182_37490[(2)] = inst_34907);

(statearr_35182_37490[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (2))){
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34990__$1,(4),ch);
} else {
if((state_val_34991 === (23))){
var state_34990__$1 = state_34990;
var statearr_35187_37493 = state_34990__$1;
(statearr_35187_37493[(2)] = null);

(statearr_35187_37493[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (35))){
var inst_34966 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35188_37494 = state_34990__$1;
(statearr_35188_37494[(2)] = inst_34966);

(statearr_35188_37494[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (19))){
var inst_34877 = (state_34990[(7)]);
var inst_34881 = cljs.core.chunk_first(inst_34877);
var inst_34882 = cljs.core.chunk_rest(inst_34877);
var inst_34883 = cljs.core.count(inst_34881);
var inst_34855 = inst_34882;
var inst_34856 = inst_34881;
var inst_34857 = inst_34883;
var inst_34858 = (0);
var state_34990__$1 = (function (){var statearr_35194 = state_34990;
(statearr_35194[(13)] = inst_34857);

(statearr_35194[(14)] = inst_34856);

(statearr_35194[(16)] = inst_34858);

(statearr_35194[(17)] = inst_34855);

return statearr_35194;
})();
var statearr_35198_37503 = state_34990__$1;
(statearr_35198_37503[(2)] = null);

(statearr_35198_37503[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (11))){
var inst_34855 = (state_34990[(17)]);
var inst_34877 = (state_34990[(7)]);
var inst_34877__$1 = cljs.core.seq(inst_34855);
var state_34990__$1 = (function (){var statearr_35205 = state_34990;
(statearr_35205[(7)] = inst_34877__$1);

return statearr_35205;
})();
if(inst_34877__$1){
var statearr_35207_37510 = state_34990__$1;
(statearr_35207_37510[(1)] = (16));

} else {
var statearr_35213_37511 = state_34990__$1;
(statearr_35213_37511[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (9))){
var inst_34909 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35216_37513 = state_34990__$1;
(statearr_35216_37513[(2)] = inst_34909);

(statearr_35216_37513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (5))){
var inst_34853 = cljs.core.deref(cs);
var inst_34854 = cljs.core.seq(inst_34853);
var inst_34855 = inst_34854;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34990__$1 = (function (){var statearr_35223 = state_34990;
(statearr_35223[(13)] = inst_34857);

(statearr_35223[(14)] = inst_34856);

(statearr_35223[(16)] = inst_34858);

(statearr_35223[(17)] = inst_34855);

return statearr_35223;
})();
var statearr_35229_37524 = state_34990__$1;
(statearr_35229_37524[(2)] = null);

(statearr_35229_37524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (14))){
var state_34990__$1 = state_34990;
var statearr_35233_37526 = state_34990__$1;
(statearr_35233_37526[(2)] = null);

(statearr_35233_37526[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (45))){
var inst_34977 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35239_37528 = state_34990__$1;
(statearr_35239_37528[(2)] = inst_34977);

(statearr_35239_37528[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (26))){
var inst_34913 = (state_34990[(29)]);
var inst_34970 = (state_34990[(2)]);
var inst_34973 = cljs.core.seq(inst_34913);
var state_34990__$1 = (function (){var statearr_35245 = state_34990;
(statearr_35245[(31)] = inst_34970);

return statearr_35245;
})();
if(inst_34973){
var statearr_35247_37531 = state_34990__$1;
(statearr_35247_37531[(1)] = (42));

} else {
var statearr_35250_37533 = state_34990__$1;
(statearr_35250_37533[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (16))){
var inst_34877 = (state_34990[(7)]);
var inst_34879 = cljs.core.chunked_seq_QMARK_(inst_34877);
var state_34990__$1 = state_34990;
if(inst_34879){
var statearr_35255_37541 = state_34990__$1;
(statearr_35255_37541[(1)] = (19));

} else {
var statearr_35258_37542 = state_34990__$1;
(statearr_35258_37542[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (38))){
var inst_34963 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35264_37544 = state_34990__$1;
(statearr_35264_37544[(2)] = inst_34963);

(statearr_35264_37544[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (30))){
var state_34990__$1 = state_34990;
var statearr_35269_37545 = state_34990__$1;
(statearr_35269_37545[(2)] = null);

(statearr_35269_37545[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (10))){
var inst_34856 = (state_34990[(14)]);
var inst_34858 = (state_34990[(16)]);
var inst_34866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34856,inst_34858);
var inst_34867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(0),null);
var inst_34868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(1),null);
var state_34990__$1 = (function (){var statearr_35276 = state_34990;
(statearr_35276[(26)] = inst_34867);

return statearr_35276;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_35279_37557 = state_34990__$1;
(statearr_35279_37557[(1)] = (13));

} else {
var statearr_35282_37559 = state_34990__$1;
(statearr_35282_37559[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (18))){
var inst_34905 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35288_37561 = state_34990__$1;
(statearr_35288_37561[(2)] = inst_34905);

(statearr_35288_37561[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (42))){
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34990__$1,(45),dchan);
} else {
if((state_val_34991 === (37))){
var inst_34952 = (state_34990[(23)]);
var inst_34846 = (state_34990[(11)]);
var inst_34943 = (state_34990[(25)]);
var inst_34952__$1 = cljs.core.first(inst_34943);
var inst_34953 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34952__$1,inst_34846,done);
var state_34990__$1 = (function (){var statearr_35296 = state_34990;
(statearr_35296[(23)] = inst_34952__$1);

return statearr_35296;
})();
if(cljs.core.truth_(inst_34953)){
var statearr_35298_37570 = state_34990__$1;
(statearr_35298_37570[(1)] = (39));

} else {
var statearr_35302_37572 = state_34990__$1;
(statearr_35302_37572[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (8))){
var inst_34857 = (state_34990[(13)]);
var inst_34858 = (state_34990[(16)]);
var inst_34860 = (inst_34858 < inst_34857);
var inst_34861 = inst_34860;
var state_34990__$1 = state_34990;
if(cljs.core.truth_(inst_34861)){
var statearr_35307_37575 = state_34990__$1;
(statearr_35307_37575[(1)] = (10));

} else {
var statearr_35310_37576 = state_34990__$1;
(statearr_35310_37576[(1)] = (11));

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
var statearr_35322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35322[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35322[(1)] = (1));

return statearr_35322;
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
}catch (e35328){if((e35328 instanceof Object)){
var ex__34210__auto__ = e35328;
var statearr_35329_37588 = state_34990;
(statearr_35329_37588[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35328;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37594 = state_34990;
state_34990 = G__37594;
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
var state__34276__auto__ = (function (){var statearr_35338 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35338[(6)] = c__34274__auto___37363);

return statearr_35338;
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
var G__35355 = arguments.length;
switch (G__35355) {
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

var G__37653 = (i__4790__auto___37651 + (1));
i__4790__auto___37651 = G__37653;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35411){
var map__35413 = p__35411;
var map__35413__$1 = (((((!((map__35413 == null))))?(((((map__35413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35413):map__35413);
var opts = map__35413__$1;
var statearr_35420_37658 = state;
(statearr_35420_37658[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35423_37659 = state;
(statearr_35423_37659[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35424_37660 = state;
(statearr_35424_37660[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35399){
var G__35400 = cljs.core.first(seq35399);
var seq35399__$1 = cljs.core.next(seq35399);
var G__35402 = cljs.core.first(seq35399__$1);
var seq35399__$2 = cljs.core.next(seq35399__$1);
var G__35403 = cljs.core.first(seq35399__$2);
var seq35399__$3 = cljs.core.next(seq35399__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35400,G__35402,G__35403,seq35399__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35464 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35464 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35465){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35465 = meta35465;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35466,meta35465__$1){
var self__ = this;
var _35466__$1 = this;
return (new cljs.core.async.t_cljs$core$async35464(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35465__$1));
}));

(cljs.core.async.t_cljs$core$async35464.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35466){
var self__ = this;
var _35466__$1 = this;
return self__.meta35465;
}));

(cljs.core.async.t_cljs$core$async35464.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35464.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35464.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35464.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35464.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35464.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35464.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35464.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35464.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35465","meta35465",2106885347,null)], null);
}));

(cljs.core.async.t_cljs$core$async35464.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35464.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35464");

(cljs.core.async.t_cljs$core$async35464.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35464");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35464.
 */
cljs.core.async.__GT_t_cljs$core$async35464 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35464(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35465){
return (new cljs.core.async.t_cljs$core$async35464(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35465));
});

}

return (new cljs.core.async.t_cljs$core$async35464(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37688 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35673){
var state_val_35674 = (state_35673[(1)]);
if((state_val_35674 === (7))){
var inst_35562 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
var statearr_35677_37692 = state_35673__$1;
(statearr_35677_37692[(2)] = inst_35562);

(statearr_35677_37692[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (20))){
var inst_35579 = (state_35673[(7)]);
var state_35673__$1 = state_35673;
var statearr_35678_37693 = state_35673__$1;
(statearr_35678_37693[(2)] = inst_35579);

(statearr_35678_37693[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (27))){
var state_35673__$1 = state_35673;
var statearr_35681_37695 = state_35673__$1;
(statearr_35681_37695[(2)] = null);

(statearr_35681_37695[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (1))){
var inst_35544 = (state_35673[(8)]);
var inst_35544__$1 = calc_state();
var inst_35548 = (inst_35544__$1 == null);
var inst_35550 = cljs.core.not(inst_35548);
var state_35673__$1 = (function (){var statearr_35682 = state_35673;
(statearr_35682[(8)] = inst_35544__$1);

return statearr_35682;
})();
if(inst_35550){
var statearr_35683_37701 = state_35673__$1;
(statearr_35683_37701[(1)] = (2));

} else {
var statearr_35684_37705 = state_35673__$1;
(statearr_35684_37705[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (24))){
var inst_35647 = (state_35673[(9)]);
var inst_35626 = (state_35673[(10)]);
var inst_35612 = (state_35673[(11)]);
var inst_35647__$1 = (inst_35612.cljs$core$IFn$_invoke$arity$1 ? inst_35612.cljs$core$IFn$_invoke$arity$1(inst_35626) : inst_35612.call(null,inst_35626));
var state_35673__$1 = (function (){var statearr_35685 = state_35673;
(statearr_35685[(9)] = inst_35647__$1);

return statearr_35685;
})();
if(cljs.core.truth_(inst_35647__$1)){
var statearr_35688_37708 = state_35673__$1;
(statearr_35688_37708[(1)] = (29));

} else {
var statearr_35689_37710 = state_35673__$1;
(statearr_35689_37710[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (4))){
var inst_35568 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35568)){
var statearr_35693_37711 = state_35673__$1;
(statearr_35693_37711[(1)] = (8));

} else {
var statearr_35695_37714 = state_35673__$1;
(statearr_35695_37714[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (15))){
var inst_35606 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35606)){
var statearr_35698_37720 = state_35673__$1;
(statearr_35698_37720[(1)] = (19));

} else {
var statearr_35699_37721 = state_35673__$1;
(statearr_35699_37721[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (21))){
var inst_35611 = (state_35673[(12)]);
var inst_35611__$1 = (state_35673[(2)]);
var inst_35612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35611__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35611__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35611__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35673__$1 = (function (){var statearr_35700 = state_35673;
(statearr_35700[(11)] = inst_35612);

(statearr_35700[(13)] = inst_35614);

(statearr_35700[(12)] = inst_35611__$1);

return statearr_35700;
})();
return cljs.core.async.ioc_alts_BANG_(state_35673__$1,(22),inst_35615);
} else {
if((state_val_35674 === (31))){
var inst_35655 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35655)){
var statearr_35702_37730 = state_35673__$1;
(statearr_35702_37730[(1)] = (32));

} else {
var statearr_35704_37731 = state_35673__$1;
(statearr_35704_37731[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (32))){
var inst_35624 = (state_35673[(14)]);
var state_35673__$1 = state_35673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35673__$1,(35),out,inst_35624);
} else {
if((state_val_35674 === (33))){
var inst_35611 = (state_35673[(12)]);
var inst_35579 = inst_35611;
var state_35673__$1 = (function (){var statearr_35707 = state_35673;
(statearr_35707[(7)] = inst_35579);

return statearr_35707;
})();
var statearr_35710_37735 = state_35673__$1;
(statearr_35710_37735[(2)] = null);

(statearr_35710_37735[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (13))){
var inst_35579 = (state_35673[(7)]);
var inst_35593 = inst_35579.cljs$lang$protocol_mask$partition0$;
var inst_35594 = (inst_35593 & (64));
var inst_35597 = inst_35579.cljs$core$ISeq$;
var inst_35598 = (cljs.core.PROTOCOL_SENTINEL === inst_35597);
var inst_35599 = ((inst_35594) || (inst_35598));
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35599)){
var statearr_35713_37743 = state_35673__$1;
(statearr_35713_37743[(1)] = (16));

} else {
var statearr_35715_37744 = state_35673__$1;
(statearr_35715_37744[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (22))){
var inst_35624 = (state_35673[(14)]);
var inst_35626 = (state_35673[(10)]);
var inst_35623 = (state_35673[(2)]);
var inst_35624__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35623,(0),null);
var inst_35626__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35623,(1),null);
var inst_35628 = (inst_35624__$1 == null);
var inst_35629 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35626__$1,change);
var inst_35630 = ((inst_35628) || (inst_35629));
var state_35673__$1 = (function (){var statearr_35717 = state_35673;
(statearr_35717[(14)] = inst_35624__$1);

(statearr_35717[(10)] = inst_35626__$1);

return statearr_35717;
})();
if(cljs.core.truth_(inst_35630)){
var statearr_35718_37747 = state_35673__$1;
(statearr_35718_37747[(1)] = (23));

} else {
var statearr_35719_37749 = state_35673__$1;
(statearr_35719_37749[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (36))){
var inst_35611 = (state_35673[(12)]);
var inst_35579 = inst_35611;
var state_35673__$1 = (function (){var statearr_35721 = state_35673;
(statearr_35721[(7)] = inst_35579);

return statearr_35721;
})();
var statearr_35722_37757 = state_35673__$1;
(statearr_35722_37757[(2)] = null);

(statearr_35722_37757[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (29))){
var inst_35647 = (state_35673[(9)]);
var state_35673__$1 = state_35673;
var statearr_35723_37759 = state_35673__$1;
(statearr_35723_37759[(2)] = inst_35647);

(statearr_35723_37759[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (6))){
var state_35673__$1 = state_35673;
var statearr_35725_37760 = state_35673__$1;
(statearr_35725_37760[(2)] = false);

(statearr_35725_37760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (28))){
var inst_35643 = (state_35673[(2)]);
var inst_35644 = calc_state();
var inst_35579 = inst_35644;
var state_35673__$1 = (function (){var statearr_35726 = state_35673;
(statearr_35726[(7)] = inst_35579);

(statearr_35726[(15)] = inst_35643);

return statearr_35726;
})();
var statearr_35728_37763 = state_35673__$1;
(statearr_35728_37763[(2)] = null);

(statearr_35728_37763[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (25))){
var inst_35669 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
var statearr_35730_37771 = state_35673__$1;
(statearr_35730_37771[(2)] = inst_35669);

(statearr_35730_37771[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (34))){
var inst_35667 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
var statearr_35732_37774 = state_35673__$1;
(statearr_35732_37774[(2)] = inst_35667);

(statearr_35732_37774[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (17))){
var state_35673__$1 = state_35673;
var statearr_35736_37776 = state_35673__$1;
(statearr_35736_37776[(2)] = false);

(statearr_35736_37776[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (3))){
var state_35673__$1 = state_35673;
var statearr_35739_37783 = state_35673__$1;
(statearr_35739_37783[(2)] = false);

(statearr_35739_37783[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (12))){
var inst_35671 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35673__$1,inst_35671);
} else {
if((state_val_35674 === (2))){
var inst_35544 = (state_35673[(8)]);
var inst_35553 = inst_35544.cljs$lang$protocol_mask$partition0$;
var inst_35554 = (inst_35553 & (64));
var inst_35556 = inst_35544.cljs$core$ISeq$;
var inst_35557 = (cljs.core.PROTOCOL_SENTINEL === inst_35556);
var inst_35558 = ((inst_35554) || (inst_35557));
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35558)){
var statearr_35744_37786 = state_35673__$1;
(statearr_35744_37786[(1)] = (5));

} else {
var statearr_35745_37787 = state_35673__$1;
(statearr_35745_37787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (23))){
var inst_35624 = (state_35673[(14)]);
var inst_35635 = (inst_35624 == null);
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35635)){
var statearr_35748_37789 = state_35673__$1;
(statearr_35748_37789[(1)] = (26));

} else {
var statearr_35753_37791 = state_35673__$1;
(statearr_35753_37791[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (35))){
var inst_35658 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35658)){
var statearr_35760_37794 = state_35673__$1;
(statearr_35760_37794[(1)] = (36));

} else {
var statearr_35762_37796 = state_35673__$1;
(statearr_35762_37796[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (19))){
var inst_35579 = (state_35673[(7)]);
var inst_35608 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35579);
var state_35673__$1 = state_35673;
var statearr_35768_37804 = state_35673__$1;
(statearr_35768_37804[(2)] = inst_35608);

(statearr_35768_37804[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (11))){
var inst_35579 = (state_35673[(7)]);
var inst_35587 = (inst_35579 == null);
var inst_35588 = cljs.core.not(inst_35587);
var state_35673__$1 = state_35673;
if(inst_35588){
var statearr_35770_37809 = state_35673__$1;
(statearr_35770_37809[(1)] = (13));

} else {
var statearr_35771_37810 = state_35673__$1;
(statearr_35771_37810[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (9))){
var inst_35544 = (state_35673[(8)]);
var state_35673__$1 = state_35673;
var statearr_35774_37817 = state_35673__$1;
(statearr_35774_37817[(2)] = inst_35544);

(statearr_35774_37817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (5))){
var state_35673__$1 = state_35673;
var statearr_35775_37819 = state_35673__$1;
(statearr_35775_37819[(2)] = true);

(statearr_35775_37819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (14))){
var state_35673__$1 = state_35673;
var statearr_35778_37821 = state_35673__$1;
(statearr_35778_37821[(2)] = false);

(statearr_35778_37821[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (26))){
var inst_35626 = (state_35673[(10)]);
var inst_35640 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35626);
var state_35673__$1 = state_35673;
var statearr_35779_37825 = state_35673__$1;
(statearr_35779_37825[(2)] = inst_35640);

(statearr_35779_37825[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (16))){
var state_35673__$1 = state_35673;
var statearr_35780_37827 = state_35673__$1;
(statearr_35780_37827[(2)] = true);

(statearr_35780_37827[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (38))){
var inst_35663 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
var statearr_35782_37831 = state_35673__$1;
(statearr_35782_37831[(2)] = inst_35663);

(statearr_35782_37831[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (30))){
var inst_35626 = (state_35673[(10)]);
var inst_35612 = (state_35673[(11)]);
var inst_35614 = (state_35673[(13)]);
var inst_35650 = cljs.core.empty_QMARK_(inst_35612);
var inst_35651 = (inst_35614.cljs$core$IFn$_invoke$arity$1 ? inst_35614.cljs$core$IFn$_invoke$arity$1(inst_35626) : inst_35614.call(null,inst_35626));
var inst_35652 = cljs.core.not(inst_35651);
var inst_35653 = ((inst_35650) && (inst_35652));
var state_35673__$1 = state_35673;
var statearr_35786_37836 = state_35673__$1;
(statearr_35786_37836[(2)] = inst_35653);

(statearr_35786_37836[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (10))){
var inst_35544 = (state_35673[(8)]);
var inst_35573 = (state_35673[(2)]);
var inst_35574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35573,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35576 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35573,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35578 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35573,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35579 = inst_35544;
var state_35673__$1 = (function (){var statearr_35787 = state_35673;
(statearr_35787[(16)] = inst_35574);

(statearr_35787[(17)] = inst_35578);

(statearr_35787[(18)] = inst_35576);

(statearr_35787[(7)] = inst_35579);

return statearr_35787;
})();
var statearr_35789_37845 = state_35673__$1;
(statearr_35789_37845[(2)] = null);

(statearr_35789_37845[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (18))){
var inst_35603 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
var statearr_35792_37854 = state_35673__$1;
(statearr_35792_37854[(2)] = inst_35603);

(statearr_35792_37854[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (37))){
var state_35673__$1 = state_35673;
var statearr_35794_37855 = state_35673__$1;
(statearr_35794_37855[(2)] = null);

(statearr_35794_37855[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (8))){
var inst_35544 = (state_35673[(8)]);
var inst_35570 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35544);
var state_35673__$1 = state_35673;
var statearr_35795_37857 = state_35673__$1;
(statearr_35795_37857[(2)] = inst_35570);

(statearr_35795_37857[(1)] = (10));


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
var statearr_35797 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35797[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35797[(1)] = (1));

return statearr_35797;
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
}catch (e35798){if((e35798 instanceof Object)){
var ex__34210__auto__ = e35798;
var statearr_35799_37863 = state_35673;
(statearr_35799_37863[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35798;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37865 = state_35673;
state_35673 = G__37865;
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
var state__34276__auto__ = (function (){var statearr_35803 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35803[(6)] = c__34274__auto___37688);

return statearr_35803;
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
var G__35832 = arguments.length;
switch (G__35832) {
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
var G__35849 = arguments.length;
switch (G__35849) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35844_SHARP_){
if(cljs.core.truth_((p1__35844_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35844_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35844_SHARP_.call(null,topic)))){
return p1__35844_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35844_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35860 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35860 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35861){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35861 = meta35861;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35862,meta35861__$1){
var self__ = this;
var _35862__$1 = this;
return (new cljs.core.async.t_cljs$core$async35860(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35861__$1));
}));

(cljs.core.async.t_cljs$core$async35860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35862){
var self__ = this;
var _35862__$1 = this;
return self__.meta35861;
}));

(cljs.core.async.t_cljs$core$async35860.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35860.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35860.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35860.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35860.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35860.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35860.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35860.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35861","meta35861",-1077375476,null)], null);
}));

(cljs.core.async.t_cljs$core$async35860.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35860.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35860");

(cljs.core.async.t_cljs$core$async35860.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35860");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35860.
 */
cljs.core.async.__GT_t_cljs$core$async35860 = (function cljs$core$async$__GT_t_cljs$core$async35860(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35861){
return (new cljs.core.async.t_cljs$core$async35860(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35861));
});

}

return (new cljs.core.async.t_cljs$core$async35860(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37923 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35970){
var state_val_35971 = (state_35970[(1)]);
if((state_val_35971 === (7))){
var inst_35963 = (state_35970[(2)]);
var state_35970__$1 = state_35970;
var statearr_35977_37924 = state_35970__$1;
(statearr_35977_37924[(2)] = inst_35963);

(statearr_35977_37924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (20))){
var state_35970__$1 = state_35970;
var statearr_35980_37925 = state_35970__$1;
(statearr_35980_37925[(2)] = null);

(statearr_35980_37925[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (1))){
var state_35970__$1 = state_35970;
var statearr_35981_37929 = state_35970__$1;
(statearr_35981_37929[(2)] = null);

(statearr_35981_37929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (24))){
var inst_35946 = (state_35970[(7)]);
var inst_35955 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35946);
var state_35970__$1 = state_35970;
var statearr_35986_37930 = state_35970__$1;
(statearr_35986_37930[(2)] = inst_35955);

(statearr_35986_37930[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (4))){
var inst_35894 = (state_35970[(8)]);
var inst_35894__$1 = (state_35970[(2)]);
var inst_35896 = (inst_35894__$1 == null);
var state_35970__$1 = (function (){var statearr_35988 = state_35970;
(statearr_35988[(8)] = inst_35894__$1);

return statearr_35988;
})();
if(cljs.core.truth_(inst_35896)){
var statearr_35990_37935 = state_35970__$1;
(statearr_35990_37935[(1)] = (5));

} else {
var statearr_35993_37936 = state_35970__$1;
(statearr_35993_37936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (15))){
var inst_35940 = (state_35970[(2)]);
var state_35970__$1 = state_35970;
var statearr_35994_37937 = state_35970__$1;
(statearr_35994_37937[(2)] = inst_35940);

(statearr_35994_37937[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (21))){
var inst_35960 = (state_35970[(2)]);
var state_35970__$1 = (function (){var statearr_35996 = state_35970;
(statearr_35996[(9)] = inst_35960);

return statearr_35996;
})();
var statearr_35999_37938 = state_35970__$1;
(statearr_35999_37938[(2)] = null);

(statearr_35999_37938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (13))){
var inst_35921 = (state_35970[(10)]);
var inst_35923 = cljs.core.chunked_seq_QMARK_(inst_35921);
var state_35970__$1 = state_35970;
if(inst_35923){
var statearr_36001_37939 = state_35970__$1;
(statearr_36001_37939[(1)] = (16));

} else {
var statearr_36003_37940 = state_35970__$1;
(statearr_36003_37940[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (22))){
var inst_35952 = (state_35970[(2)]);
var state_35970__$1 = state_35970;
if(cljs.core.truth_(inst_35952)){
var statearr_36007_37941 = state_35970__$1;
(statearr_36007_37941[(1)] = (23));

} else {
var statearr_36008_37943 = state_35970__$1;
(statearr_36008_37943[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (6))){
var inst_35948 = (state_35970[(11)]);
var inst_35894 = (state_35970[(8)]);
var inst_35946 = (state_35970[(7)]);
var inst_35946__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35894) : topic_fn.call(null,inst_35894));
var inst_35947 = cljs.core.deref(mults);
var inst_35948__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35947,inst_35946__$1);
var state_35970__$1 = (function (){var statearr_36009 = state_35970;
(statearr_36009[(11)] = inst_35948__$1);

(statearr_36009[(7)] = inst_35946__$1);

return statearr_36009;
})();
if(cljs.core.truth_(inst_35948__$1)){
var statearr_36010_37944 = state_35970__$1;
(statearr_36010_37944[(1)] = (19));

} else {
var statearr_36011_37949 = state_35970__$1;
(statearr_36011_37949[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (25))){
var inst_35957 = (state_35970[(2)]);
var state_35970__$1 = state_35970;
var statearr_36014_37950 = state_35970__$1;
(statearr_36014_37950[(2)] = inst_35957);

(statearr_36014_37950[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (17))){
var inst_35921 = (state_35970[(10)]);
var inst_35931 = cljs.core.first(inst_35921);
var inst_35932 = cljs.core.async.muxch_STAR_(inst_35931);
var inst_35933 = cljs.core.async.close_BANG_(inst_35932);
var inst_35934 = cljs.core.next(inst_35921);
var inst_35905 = inst_35934;
var inst_35906 = null;
var inst_35907 = (0);
var inst_35908 = (0);
var state_35970__$1 = (function (){var statearr_36016 = state_35970;
(statearr_36016[(12)] = inst_35933);

(statearr_36016[(13)] = inst_35908);

(statearr_36016[(14)] = inst_35906);

(statearr_36016[(15)] = inst_35907);

(statearr_36016[(16)] = inst_35905);

return statearr_36016;
})();
var statearr_36019_37951 = state_35970__$1;
(statearr_36019_37951[(2)] = null);

(statearr_36019_37951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (3))){
var inst_35965 = (state_35970[(2)]);
var state_35970__$1 = state_35970;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35970__$1,inst_35965);
} else {
if((state_val_35971 === (12))){
var inst_35942 = (state_35970[(2)]);
var state_35970__$1 = state_35970;
var statearr_36021_37952 = state_35970__$1;
(statearr_36021_37952[(2)] = inst_35942);

(statearr_36021_37952[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (2))){
var state_35970__$1 = state_35970;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35970__$1,(4),ch);
} else {
if((state_val_35971 === (23))){
var state_35970__$1 = state_35970;
var statearr_36022_37955 = state_35970__$1;
(statearr_36022_37955[(2)] = null);

(statearr_36022_37955[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (19))){
var inst_35948 = (state_35970[(11)]);
var inst_35894 = (state_35970[(8)]);
var inst_35950 = cljs.core.async.muxch_STAR_(inst_35948);
var state_35970__$1 = state_35970;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35970__$1,(22),inst_35950,inst_35894);
} else {
if((state_val_35971 === (11))){
var inst_35921 = (state_35970[(10)]);
var inst_35905 = (state_35970[(16)]);
var inst_35921__$1 = cljs.core.seq(inst_35905);
var state_35970__$1 = (function (){var statearr_36027 = state_35970;
(statearr_36027[(10)] = inst_35921__$1);

return statearr_36027;
})();
if(inst_35921__$1){
var statearr_36028_37959 = state_35970__$1;
(statearr_36028_37959[(1)] = (13));

} else {
var statearr_36029_37960 = state_35970__$1;
(statearr_36029_37960[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (9))){
var inst_35944 = (state_35970[(2)]);
var state_35970__$1 = state_35970;
var statearr_36030_37963 = state_35970__$1;
(statearr_36030_37963[(2)] = inst_35944);

(statearr_36030_37963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (5))){
var inst_35902 = cljs.core.deref(mults);
var inst_35903 = cljs.core.vals(inst_35902);
var inst_35904 = cljs.core.seq(inst_35903);
var inst_35905 = inst_35904;
var inst_35906 = null;
var inst_35907 = (0);
var inst_35908 = (0);
var state_35970__$1 = (function (){var statearr_36031 = state_35970;
(statearr_36031[(13)] = inst_35908);

(statearr_36031[(14)] = inst_35906);

(statearr_36031[(15)] = inst_35907);

(statearr_36031[(16)] = inst_35905);

return statearr_36031;
})();
var statearr_36032_37964 = state_35970__$1;
(statearr_36032_37964[(2)] = null);

(statearr_36032_37964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (14))){
var state_35970__$1 = state_35970;
var statearr_36036_37965 = state_35970__$1;
(statearr_36036_37965[(2)] = null);

(statearr_36036_37965[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (16))){
var inst_35921 = (state_35970[(10)]);
var inst_35925 = cljs.core.chunk_first(inst_35921);
var inst_35926 = cljs.core.chunk_rest(inst_35921);
var inst_35927 = cljs.core.count(inst_35925);
var inst_35905 = inst_35926;
var inst_35906 = inst_35925;
var inst_35907 = inst_35927;
var inst_35908 = (0);
var state_35970__$1 = (function (){var statearr_36037 = state_35970;
(statearr_36037[(13)] = inst_35908);

(statearr_36037[(14)] = inst_35906);

(statearr_36037[(15)] = inst_35907);

(statearr_36037[(16)] = inst_35905);

return statearr_36037;
})();
var statearr_36038_37969 = state_35970__$1;
(statearr_36038_37969[(2)] = null);

(statearr_36038_37969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (10))){
var inst_35908 = (state_35970[(13)]);
var inst_35906 = (state_35970[(14)]);
var inst_35907 = (state_35970[(15)]);
var inst_35905 = (state_35970[(16)]);
var inst_35913 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35906,inst_35908);
var inst_35915 = cljs.core.async.muxch_STAR_(inst_35913);
var inst_35916 = cljs.core.async.close_BANG_(inst_35915);
var inst_35918 = (inst_35908 + (1));
var tmp36033 = inst_35906;
var tmp36034 = inst_35907;
var tmp36035 = inst_35905;
var inst_35905__$1 = tmp36035;
var inst_35906__$1 = tmp36033;
var inst_35907__$1 = tmp36034;
var inst_35908__$1 = inst_35918;
var state_35970__$1 = (function (){var statearr_36039 = state_35970;
(statearr_36039[(17)] = inst_35916);

(statearr_36039[(13)] = inst_35908__$1);

(statearr_36039[(14)] = inst_35906__$1);

(statearr_36039[(15)] = inst_35907__$1);

(statearr_36039[(16)] = inst_35905__$1);

return statearr_36039;
})();
var statearr_36040_37974 = state_35970__$1;
(statearr_36040_37974[(2)] = null);

(statearr_36040_37974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (18))){
var inst_35937 = (state_35970[(2)]);
var state_35970__$1 = state_35970;
var statearr_36041_37975 = state_35970__$1;
(statearr_36041_37975[(2)] = inst_35937);

(statearr_36041_37975[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35971 === (8))){
var inst_35908 = (state_35970[(13)]);
var inst_35907 = (state_35970[(15)]);
var inst_35910 = (inst_35908 < inst_35907);
var inst_35911 = inst_35910;
var state_35970__$1 = state_35970;
if(cljs.core.truth_(inst_35911)){
var statearr_36042_37981 = state_35970__$1;
(statearr_36042_37981[(1)] = (10));

} else {
var statearr_36043_37982 = state_35970__$1;
(statearr_36043_37982[(1)] = (11));

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
var statearr_36045 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36045[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36045[(1)] = (1));

return statearr_36045;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35970){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35970);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36046){if((e36046 instanceof Object)){
var ex__34210__auto__ = e36046;
var statearr_36048_37983 = state_35970;
(statearr_36048_37983[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36046;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37984 = state_35970;
state_35970 = G__37984;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35970){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36053 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36053[(6)] = c__34274__auto___37923);

return statearr_36053;
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
var G__36059 = arguments.length;
switch (G__36059) {
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
var G__36068 = arguments.length;
switch (G__36068) {
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
var G__36076 = arguments.length;
switch (G__36076) {
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
var c__34274__auto___38000 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36122){
var state_val_36123 = (state_36122[(1)]);
if((state_val_36123 === (7))){
var state_36122__$1 = state_36122;
var statearr_36128_38001 = state_36122__$1;
(statearr_36128_38001[(2)] = null);

(statearr_36128_38001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36123 === (1))){
var state_36122__$1 = state_36122;
var statearr_36130_38002 = state_36122__$1;
(statearr_36130_38002[(2)] = null);

(statearr_36130_38002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36123 === (4))){
var inst_36079 = (state_36122[(7)]);
var inst_36081 = (inst_36079 < cnt);
var state_36122__$1 = state_36122;
if(cljs.core.truth_(inst_36081)){
var statearr_36132_38004 = state_36122__$1;
(statearr_36132_38004[(1)] = (6));

} else {
var statearr_36133_38005 = state_36122__$1;
(statearr_36133_38005[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36123 === (15))){
var inst_36118 = (state_36122[(2)]);
var state_36122__$1 = state_36122;
var statearr_36135_38007 = state_36122__$1;
(statearr_36135_38007[(2)] = inst_36118);

(statearr_36135_38007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36123 === (13))){
var inst_36111 = cljs.core.async.close_BANG_(out);
var state_36122__$1 = state_36122;
var statearr_36136_38008 = state_36122__$1;
(statearr_36136_38008[(2)] = inst_36111);

(statearr_36136_38008[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36123 === (6))){
var state_36122__$1 = state_36122;
var statearr_36137_38009 = state_36122__$1;
(statearr_36137_38009[(2)] = null);

(statearr_36137_38009[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36123 === (3))){
var inst_36120 = (state_36122[(2)]);
var state_36122__$1 = state_36122;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36122__$1,inst_36120);
} else {
if((state_val_36123 === (12))){
var inst_36105 = (state_36122[(8)]);
var inst_36105__$1 = (state_36122[(2)]);
var inst_36106 = cljs.core.some(cljs.core.nil_QMARK_,inst_36105__$1);
var state_36122__$1 = (function (){var statearr_36140 = state_36122;
(statearr_36140[(8)] = inst_36105__$1);

return statearr_36140;
})();
if(cljs.core.truth_(inst_36106)){
var statearr_36141_38011 = state_36122__$1;
(statearr_36141_38011[(1)] = (13));

} else {
var statearr_36143_38012 = state_36122__$1;
(statearr_36143_38012[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36123 === (2))){
var inst_36078 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36079 = (0);
var state_36122__$1 = (function (){var statearr_36146 = state_36122;
(statearr_36146[(9)] = inst_36078);

(statearr_36146[(7)] = inst_36079);

return statearr_36146;
})();
var statearr_36148_38015 = state_36122__$1;
(statearr_36148_38015[(2)] = null);

(statearr_36148_38015[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36123 === (11))){
var inst_36079 = (state_36122[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36122,(10),Object,null,(9));
var inst_36092 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36079) : chs__$1.call(null,inst_36079));
var inst_36093 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36079) : done.call(null,inst_36079));
var inst_36094 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36092,inst_36093);
var state_36122__$1 = state_36122;
var statearr_36154_38016 = state_36122__$1;
(statearr_36154_38016[(2)] = inst_36094);


cljs.core.async.impl.ioc_helpers.process_exception(state_36122__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36123 === (9))){
var inst_36079 = (state_36122[(7)]);
var inst_36096 = (state_36122[(2)]);
var inst_36097 = (inst_36079 + (1));
var inst_36079__$1 = inst_36097;
var state_36122__$1 = (function (){var statearr_36156 = state_36122;
(statearr_36156[(7)] = inst_36079__$1);

(statearr_36156[(10)] = inst_36096);

return statearr_36156;
})();
var statearr_36157_38020 = state_36122__$1;
(statearr_36157_38020[(2)] = null);

(statearr_36157_38020[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36123 === (5))){
var inst_36103 = (state_36122[(2)]);
var state_36122__$1 = (function (){var statearr_36158 = state_36122;
(statearr_36158[(11)] = inst_36103);

return statearr_36158;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36122__$1,(12),dchan);
} else {
if((state_val_36123 === (14))){
var inst_36105 = (state_36122[(8)]);
var inst_36113 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36105);
var state_36122__$1 = state_36122;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36122__$1,(16),out,inst_36113);
} else {
if((state_val_36123 === (16))){
var inst_36115 = (state_36122[(2)]);
var state_36122__$1 = (function (){var statearr_36170 = state_36122;
(statearr_36170[(12)] = inst_36115);

return statearr_36170;
})();
var statearr_36171_38022 = state_36122__$1;
(statearr_36171_38022[(2)] = null);

(statearr_36171_38022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36123 === (10))){
var inst_36083 = (state_36122[(2)]);
var inst_36084 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36122__$1 = (function (){var statearr_36172 = state_36122;
(statearr_36172[(13)] = inst_36083);

return statearr_36172;
})();
var statearr_36173_38025 = state_36122__$1;
(statearr_36173_38025[(2)] = inst_36084);


cljs.core.async.impl.ioc_helpers.process_exception(state_36122__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36123 === (8))){
var inst_36101 = (state_36122[(2)]);
var state_36122__$1 = state_36122;
var statearr_36175_38026 = state_36122__$1;
(statearr_36175_38026[(2)] = inst_36101);

(statearr_36175_38026[(1)] = (5));


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
var statearr_36178 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36178[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36178[(1)] = (1));

return statearr_36178;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36122){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36122);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36180){if((e36180 instanceof Object)){
var ex__34210__auto__ = e36180;
var statearr_36181_38030 = state_36122;
(statearr_36181_38030[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36180;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38031 = state_36122;
state_36122 = G__38031;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36122){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36183 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36183[(6)] = c__34274__auto___38000);

return statearr_36183;
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
var G__36205 = arguments.length;
switch (G__36205) {
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
var c__34274__auto___38036 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36241){
var state_val_36242 = (state_36241[(1)]);
if((state_val_36242 === (7))){
var inst_36220 = (state_36241[(7)]);
var inst_36219 = (state_36241[(8)]);
var inst_36219__$1 = (state_36241[(2)]);
var inst_36220__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36219__$1,(0),null);
var inst_36221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36219__$1,(1),null);
var inst_36223 = (inst_36220__$1 == null);
var state_36241__$1 = (function (){var statearr_36245 = state_36241;
(statearr_36245[(9)] = inst_36221);

(statearr_36245[(7)] = inst_36220__$1);

(statearr_36245[(8)] = inst_36219__$1);

return statearr_36245;
})();
if(cljs.core.truth_(inst_36223)){
var statearr_36246_38038 = state_36241__$1;
(statearr_36246_38038[(1)] = (8));

} else {
var statearr_36247_38040 = state_36241__$1;
(statearr_36247_38040[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36242 === (1))){
var inst_36208 = cljs.core.vec(chs);
var inst_36209 = inst_36208;
var state_36241__$1 = (function (){var statearr_36249 = state_36241;
(statearr_36249[(10)] = inst_36209);

return statearr_36249;
})();
var statearr_36251_38042 = state_36241__$1;
(statearr_36251_38042[(2)] = null);

(statearr_36251_38042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36242 === (4))){
var inst_36209 = (state_36241[(10)]);
var state_36241__$1 = state_36241;
return cljs.core.async.ioc_alts_BANG_(state_36241__$1,(7),inst_36209);
} else {
if((state_val_36242 === (6))){
var inst_36237 = (state_36241[(2)]);
var state_36241__$1 = state_36241;
var statearr_36254_38043 = state_36241__$1;
(statearr_36254_38043[(2)] = inst_36237);

(statearr_36254_38043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36242 === (3))){
var inst_36239 = (state_36241[(2)]);
var state_36241__$1 = state_36241;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36241__$1,inst_36239);
} else {
if((state_val_36242 === (2))){
var inst_36209 = (state_36241[(10)]);
var inst_36211 = cljs.core.count(inst_36209);
var inst_36212 = (inst_36211 > (0));
var state_36241__$1 = state_36241;
if(cljs.core.truth_(inst_36212)){
var statearr_36265_38047 = state_36241__$1;
(statearr_36265_38047[(1)] = (4));

} else {
var statearr_36266_38048 = state_36241__$1;
(statearr_36266_38048[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36242 === (11))){
var inst_36209 = (state_36241[(10)]);
var inst_36230 = (state_36241[(2)]);
var tmp36263 = inst_36209;
var inst_36209__$1 = tmp36263;
var state_36241__$1 = (function (){var statearr_36268 = state_36241;
(statearr_36268[(10)] = inst_36209__$1);

(statearr_36268[(11)] = inst_36230);

return statearr_36268;
})();
var statearr_36270_38049 = state_36241__$1;
(statearr_36270_38049[(2)] = null);

(statearr_36270_38049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36242 === (9))){
var inst_36220 = (state_36241[(7)]);
var state_36241__$1 = state_36241;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36241__$1,(11),out,inst_36220);
} else {
if((state_val_36242 === (5))){
var inst_36235 = cljs.core.async.close_BANG_(out);
var state_36241__$1 = state_36241;
var statearr_36274_38052 = state_36241__$1;
(statearr_36274_38052[(2)] = inst_36235);

(statearr_36274_38052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36242 === (10))){
var inst_36233 = (state_36241[(2)]);
var state_36241__$1 = state_36241;
var statearr_36276_38054 = state_36241__$1;
(statearr_36276_38054[(2)] = inst_36233);

(statearr_36276_38054[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36242 === (8))){
var inst_36221 = (state_36241[(9)]);
var inst_36209 = (state_36241[(10)]);
var inst_36220 = (state_36241[(7)]);
var inst_36219 = (state_36241[(8)]);
var inst_36225 = (function (){var cs = inst_36209;
var vec__36215 = inst_36219;
var v = inst_36220;
var c = inst_36221;
return (function (p1__36186_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36186_SHARP_);
});
})();
var inst_36226 = cljs.core.filterv(inst_36225,inst_36209);
var inst_36209__$1 = inst_36226;
var state_36241__$1 = (function (){var statearr_36277 = state_36241;
(statearr_36277[(10)] = inst_36209__$1);

return statearr_36277;
})();
var statearr_36278_38056 = state_36241__$1;
(statearr_36278_38056[(2)] = null);

(statearr_36278_38056[(1)] = (2));


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
var statearr_36281 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36281[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36281[(1)] = (1));

return statearr_36281;
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
}catch (e36282){if((e36282 instanceof Object)){
var ex__34210__auto__ = e36282;
var statearr_36283_38059 = state_36241;
(statearr_36283_38059[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36282;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38060 = state_36241;
state_36241 = G__38060;
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
var state__34276__auto__ = (function (){var statearr_36286 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36286[(6)] = c__34274__auto___38036);

return statearr_36286;
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
var G__36297 = arguments.length;
switch (G__36297) {
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
var c__34274__auto___38065 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36325){
var state_val_36326 = (state_36325[(1)]);
if((state_val_36326 === (7))){
var inst_36306 = (state_36325[(7)]);
var inst_36306__$1 = (state_36325[(2)]);
var inst_36308 = (inst_36306__$1 == null);
var inst_36309 = cljs.core.not(inst_36308);
var state_36325__$1 = (function (){var statearr_36329 = state_36325;
(statearr_36329[(7)] = inst_36306__$1);

return statearr_36329;
})();
if(inst_36309){
var statearr_36330_38069 = state_36325__$1;
(statearr_36330_38069[(1)] = (8));

} else {
var statearr_36331_38070 = state_36325__$1;
(statearr_36331_38070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (1))){
var inst_36301 = (0);
var state_36325__$1 = (function (){var statearr_36332 = state_36325;
(statearr_36332[(8)] = inst_36301);

return statearr_36332;
})();
var statearr_36333_38071 = state_36325__$1;
(statearr_36333_38071[(2)] = null);

(statearr_36333_38071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (4))){
var state_36325__$1 = state_36325;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36325__$1,(7),ch);
} else {
if((state_val_36326 === (6))){
var inst_36320 = (state_36325[(2)]);
var state_36325__$1 = state_36325;
var statearr_36337_38073 = state_36325__$1;
(statearr_36337_38073[(2)] = inst_36320);

(statearr_36337_38073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (3))){
var inst_36322 = (state_36325[(2)]);
var inst_36323 = cljs.core.async.close_BANG_(out);
var state_36325__$1 = (function (){var statearr_36340 = state_36325;
(statearr_36340[(9)] = inst_36322);

return statearr_36340;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36325__$1,inst_36323);
} else {
if((state_val_36326 === (2))){
var inst_36301 = (state_36325[(8)]);
var inst_36303 = (inst_36301 < n);
var state_36325__$1 = state_36325;
if(cljs.core.truth_(inst_36303)){
var statearr_36341_38076 = state_36325__$1;
(statearr_36341_38076[(1)] = (4));

} else {
var statearr_36342_38077 = state_36325__$1;
(statearr_36342_38077[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (11))){
var inst_36301 = (state_36325[(8)]);
var inst_36312 = (state_36325[(2)]);
var inst_36313 = (inst_36301 + (1));
var inst_36301__$1 = inst_36313;
var state_36325__$1 = (function (){var statearr_36344 = state_36325;
(statearr_36344[(10)] = inst_36312);

(statearr_36344[(8)] = inst_36301__$1);

return statearr_36344;
})();
var statearr_36345_38080 = state_36325__$1;
(statearr_36345_38080[(2)] = null);

(statearr_36345_38080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (9))){
var state_36325__$1 = state_36325;
var statearr_36347_38082 = state_36325__$1;
(statearr_36347_38082[(2)] = null);

(statearr_36347_38082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (5))){
var state_36325__$1 = state_36325;
var statearr_36349_38083 = state_36325__$1;
(statearr_36349_38083[(2)] = null);

(statearr_36349_38083[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (10))){
var inst_36317 = (state_36325[(2)]);
var state_36325__$1 = state_36325;
var statearr_36356_38084 = state_36325__$1;
(statearr_36356_38084[(2)] = inst_36317);

(statearr_36356_38084[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36326 === (8))){
var inst_36306 = (state_36325[(7)]);
var state_36325__$1 = state_36325;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36325__$1,(11),out,inst_36306);
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
var statearr_36359 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36359[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36359[(1)] = (1));

return statearr_36359;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36325){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36325);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36360){if((e36360 instanceof Object)){
var ex__34210__auto__ = e36360;
var statearr_36361_38088 = state_36325;
(statearr_36361_38088[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36360;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38089 = state_36325;
state_36325 = G__38089;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36365 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36365[(6)] = c__34274__auto___38065);

return statearr_36365;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36368 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36368 = (function (f,ch,meta36369){
this.f = f;
this.ch = ch;
this.meta36369 = meta36369;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36370,meta36369__$1){
var self__ = this;
var _36370__$1 = this;
return (new cljs.core.async.t_cljs$core$async36368(self__.f,self__.ch,meta36369__$1));
}));

(cljs.core.async.t_cljs$core$async36368.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36370){
var self__ = this;
var _36370__$1 = this;
return self__.meta36369;
}));

(cljs.core.async.t_cljs$core$async36368.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36368.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36368.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36368.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36368.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36384 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36384 = (function (f,ch,meta36369,_,fn1,meta36385){
this.f = f;
this.ch = ch;
this.meta36369 = meta36369;
this._ = _;
this.fn1 = fn1;
this.meta36385 = meta36385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36386,meta36385__$1){
var self__ = this;
var _36386__$1 = this;
return (new cljs.core.async.t_cljs$core$async36384(self__.f,self__.ch,self__.meta36369,self__._,self__.fn1,meta36385__$1));
}));

(cljs.core.async.t_cljs$core$async36384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36386){
var self__ = this;
var _36386__$1 = this;
return self__.meta36385;
}));

(cljs.core.async.t_cljs$core$async36384.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36384.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36384.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36384.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36366_SHARP_){
var G__36393 = (((p1__36366_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36366_SHARP_) : self__.f.call(null,p1__36366_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36393) : f1.call(null,G__36393));
});
}));

(cljs.core.async.t_cljs$core$async36384.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36369","meta36369",-2060633949,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36368","cljs.core.async/t_cljs$core$async36368",-1548015111,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36385","meta36385",-1915993510,null)], null);
}));

(cljs.core.async.t_cljs$core$async36384.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36384.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36384");

(cljs.core.async.t_cljs$core$async36384.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36384");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36384.
 */
cljs.core.async.__GT_t_cljs$core$async36384 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36384(f__$1,ch__$1,meta36369__$1,___$2,fn1__$1,meta36385){
return (new cljs.core.async.t_cljs$core$async36384(f__$1,ch__$1,meta36369__$1,___$2,fn1__$1,meta36385));
});

}

return (new cljs.core.async.t_cljs$core$async36384(self__.f,self__.ch,self__.meta36369,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36409 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36409) : self__.f.call(null,G__36409));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36368.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36368.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36368.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36369","meta36369",-2060633949,null)], null);
}));

(cljs.core.async.t_cljs$core$async36368.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36368.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36368");

(cljs.core.async.t_cljs$core$async36368.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36368");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36368.
 */
cljs.core.async.__GT_t_cljs$core$async36368 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36368(f__$1,ch__$1,meta36369){
return (new cljs.core.async.t_cljs$core$async36368(f__$1,ch__$1,meta36369));
});

}

return (new cljs.core.async.t_cljs$core$async36368(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36415 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36415 = (function (f,ch,meta36416){
this.f = f;
this.ch = ch;
this.meta36416 = meta36416;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36417,meta36416__$1){
var self__ = this;
var _36417__$1 = this;
return (new cljs.core.async.t_cljs$core$async36415(self__.f,self__.ch,meta36416__$1));
}));

(cljs.core.async.t_cljs$core$async36415.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36417){
var self__ = this;
var _36417__$1 = this;
return self__.meta36416;
}));

(cljs.core.async.t_cljs$core$async36415.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36415.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36415.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36415.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36415.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36415.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36415.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36416","meta36416",2095720356,null)], null);
}));

(cljs.core.async.t_cljs$core$async36415.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36415.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36415");

(cljs.core.async.t_cljs$core$async36415.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36415");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36415.
 */
cljs.core.async.__GT_t_cljs$core$async36415 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36415(f__$1,ch__$1,meta36416){
return (new cljs.core.async.t_cljs$core$async36415(f__$1,ch__$1,meta36416));
});

}

return (new cljs.core.async.t_cljs$core$async36415(f,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36440 = arguments.length;
switch (G__36440) {
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
var c__34274__auto___38115 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36466){
var state_val_36467 = (state_36466[(1)]);
if((state_val_36467 === (7))){
var inst_36462 = (state_36466[(2)]);
var state_36466__$1 = state_36466;
var statearr_36470_38116 = state_36466__$1;
(statearr_36470_38116[(2)] = inst_36462);

(statearr_36470_38116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36467 === (1))){
var state_36466__$1 = state_36466;
var statearr_36471_38120 = state_36466__$1;
(statearr_36471_38120[(2)] = null);

(statearr_36471_38120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36467 === (4))){
var inst_36445 = (state_36466[(7)]);
var inst_36445__$1 = (state_36466[(2)]);
var inst_36446 = (inst_36445__$1 == null);
var state_36466__$1 = (function (){var statearr_36472 = state_36466;
(statearr_36472[(7)] = inst_36445__$1);

return statearr_36472;
})();
if(cljs.core.truth_(inst_36446)){
var statearr_36474_38121 = state_36466__$1;
(statearr_36474_38121[(1)] = (5));

} else {
var statearr_36475_38122 = state_36466__$1;
(statearr_36475_38122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36467 === (6))){
var inst_36445 = (state_36466[(7)]);
var inst_36450 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36445) : p.call(null,inst_36445));
var state_36466__$1 = state_36466;
if(cljs.core.truth_(inst_36450)){
var statearr_36476_38125 = state_36466__$1;
(statearr_36476_38125[(1)] = (8));

} else {
var statearr_36477_38127 = state_36466__$1;
(statearr_36477_38127[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36467 === (3))){
var inst_36464 = (state_36466[(2)]);
var state_36466__$1 = state_36466;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36466__$1,inst_36464);
} else {
if((state_val_36467 === (2))){
var state_36466__$1 = state_36466;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36466__$1,(4),ch);
} else {
if((state_val_36467 === (11))){
var inst_36455 = (state_36466[(2)]);
var state_36466__$1 = state_36466;
var statearr_36479_38128 = state_36466__$1;
(statearr_36479_38128[(2)] = inst_36455);

(statearr_36479_38128[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36467 === (9))){
var state_36466__$1 = state_36466;
var statearr_36481_38129 = state_36466__$1;
(statearr_36481_38129[(2)] = null);

(statearr_36481_38129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36467 === (5))){
var inst_36448 = cljs.core.async.close_BANG_(out);
var state_36466__$1 = state_36466;
var statearr_36485_38130 = state_36466__$1;
(statearr_36485_38130[(2)] = inst_36448);

(statearr_36485_38130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36467 === (10))){
var inst_36458 = (state_36466[(2)]);
var state_36466__$1 = (function (){var statearr_36487 = state_36466;
(statearr_36487[(8)] = inst_36458);

return statearr_36487;
})();
var statearr_36488_38131 = state_36466__$1;
(statearr_36488_38131[(2)] = null);

(statearr_36488_38131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36467 === (8))){
var inst_36445 = (state_36466[(7)]);
var state_36466__$1 = state_36466;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36466__$1,(11),out,inst_36445);
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
var statearr_36489 = [null,null,null,null,null,null,null,null,null];
(statearr_36489[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36489[(1)] = (1));

return statearr_36489;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36466){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36466);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36491){if((e36491 instanceof Object)){
var ex__34210__auto__ = e36491;
var statearr_36492_38135 = state_36466;
(statearr_36492_38135[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36491;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38136 = state_36466;
state_36466 = G__38136;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36494 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36494[(6)] = c__34274__auto___38115);

return statearr_36494;
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
var G__36497 = arguments.length;
switch (G__36497) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36565){
var state_val_36566 = (state_36565[(1)]);
if((state_val_36566 === (7))){
var inst_36560 = (state_36565[(2)]);
var state_36565__$1 = state_36565;
var statearr_36569_38142 = state_36565__$1;
(statearr_36569_38142[(2)] = inst_36560);

(statearr_36569_38142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36566 === (20))){
var inst_36529 = (state_36565[(7)]);
var inst_36540 = (state_36565[(2)]);
var inst_36541 = cljs.core.next(inst_36529);
var inst_36514 = inst_36541;
var inst_36515 = null;
var inst_36516 = (0);
var inst_36517 = (0);
var state_36565__$1 = (function (){var statearr_36570 = state_36565;
(statearr_36570[(8)] = inst_36516);

(statearr_36570[(9)] = inst_36515);

(statearr_36570[(10)] = inst_36514);

(statearr_36570[(11)] = inst_36540);

(statearr_36570[(12)] = inst_36517);

return statearr_36570;
})();
var statearr_36572_38145 = state_36565__$1;
(statearr_36572_38145[(2)] = null);

(statearr_36572_38145[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36566 === (1))){
var state_36565__$1 = state_36565;
var statearr_36573_38146 = state_36565__$1;
(statearr_36573_38146[(2)] = null);

(statearr_36573_38146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36566 === (4))){
var inst_36503 = (state_36565[(13)]);
var inst_36503__$1 = (state_36565[(2)]);
var inst_36504 = (inst_36503__$1 == null);
var state_36565__$1 = (function (){var statearr_36574 = state_36565;
(statearr_36574[(13)] = inst_36503__$1);

return statearr_36574;
})();
if(cljs.core.truth_(inst_36504)){
var statearr_36576_38151 = state_36565__$1;
(statearr_36576_38151[(1)] = (5));

} else {
var statearr_36577_38152 = state_36565__$1;
(statearr_36577_38152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36566 === (15))){
var state_36565__$1 = state_36565;
var statearr_36581_38156 = state_36565__$1;
(statearr_36581_38156[(2)] = null);

(statearr_36581_38156[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36566 === (21))){
var state_36565__$1 = state_36565;
var statearr_36583_38157 = state_36565__$1;
(statearr_36583_38157[(2)] = null);

(statearr_36583_38157[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36566 === (13))){
var inst_36516 = (state_36565[(8)]);
var inst_36515 = (state_36565[(9)]);
var inst_36514 = (state_36565[(10)]);
var inst_36517 = (state_36565[(12)]);
var inst_36525 = (state_36565[(2)]);
var inst_36526 = (inst_36517 + (1));
var tmp36578 = inst_36516;
var tmp36579 = inst_36515;
var tmp36580 = inst_36514;
var inst_36514__$1 = tmp36580;
var inst_36515__$1 = tmp36579;
var inst_36516__$1 = tmp36578;
var inst_36517__$1 = inst_36526;
var state_36565__$1 = (function (){var statearr_36584 = state_36565;
(statearr_36584[(8)] = inst_36516__$1);

(statearr_36584[(9)] = inst_36515__$1);

(statearr_36584[(10)] = inst_36514__$1);

(statearr_36584[(12)] = inst_36517__$1);

(statearr_36584[(14)] = inst_36525);

return statearr_36584;
})();
var statearr_36586_38159 = state_36565__$1;
(statearr_36586_38159[(2)] = null);

(statearr_36586_38159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36566 === (22))){
var state_36565__$1 = state_36565;
var statearr_36587_38160 = state_36565__$1;
(statearr_36587_38160[(2)] = null);

(statearr_36587_38160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36566 === (6))){
var inst_36503 = (state_36565[(13)]);
var inst_36512 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36503) : f.call(null,inst_36503));
var inst_36513 = cljs.core.seq(inst_36512);
var inst_36514 = inst_36513;
var inst_36515 = null;
var inst_36516 = (0);
var inst_36517 = (0);
var state_36565__$1 = (function (){var statearr_36589 = state_36565;
(statearr_36589[(8)] = inst_36516);

(statearr_36589[(9)] = inst_36515);

(statearr_36589[(10)] = inst_36514);

(statearr_36589[(12)] = inst_36517);

return statearr_36589;
})();
var statearr_36590_38163 = state_36565__$1;
(statearr_36590_38163[(2)] = null);

(statearr_36590_38163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36566 === (17))){
var inst_36529 = (state_36565[(7)]);
var inst_36533 = cljs.core.chunk_first(inst_36529);
var inst_36534 = cljs.core.chunk_rest(inst_36529);
var inst_36535 = cljs.core.count(inst_36533);
var inst_36514 = inst_36534;
var inst_36515 = inst_36533;
var inst_36516 = inst_36535;
var inst_36517 = (0);
var state_36565__$1 = (function (){var statearr_36592 = state_36565;
(statearr_36592[(8)] = inst_36516);

(statearr_36592[(9)] = inst_36515);

(statearr_36592[(10)] = inst_36514);

(statearr_36592[(12)] = inst_36517);

return statearr_36592;
})();
var statearr_36593_38165 = state_36565__$1;
(statearr_36593_38165[(2)] = null);

(statearr_36593_38165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36566 === (3))){
var inst_36562 = (state_36565[(2)]);
var state_36565__$1 = state_36565;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36565__$1,inst_36562);
} else {
if((state_val_36566 === (12))){
var inst_36549 = (state_36565[(2)]);
var state_36565__$1 = state_36565;
var statearr_36595_38167 = state_36565__$1;
(statearr_36595_38167[(2)] = inst_36549);

(statearr_36595_38167[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36566 === (2))){
var state_36565__$1 = state_36565;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36565__$1,(4),in$);
} else {
if((state_val_36566 === (23))){
var inst_36558 = (state_36565[(2)]);
var state_36565__$1 = state_36565;
var statearr_36596_38170 = state_36565__$1;
(statearr_36596_38170[(2)] = inst_36558);

(statearr_36596_38170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36566 === (19))){
var inst_36544 = (state_36565[(2)]);
var state_36565__$1 = state_36565;
var statearr_36598_38171 = state_36565__$1;
(statearr_36598_38171[(2)] = inst_36544);

(statearr_36598_38171[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36566 === (11))){
var inst_36514 = (state_36565[(10)]);
var inst_36529 = (state_36565[(7)]);
var inst_36529__$1 = cljs.core.seq(inst_36514);
var state_36565__$1 = (function (){var statearr_36599 = state_36565;
(statearr_36599[(7)] = inst_36529__$1);

return statearr_36599;
})();
if(inst_36529__$1){
var statearr_36601_38172 = state_36565__$1;
(statearr_36601_38172[(1)] = (14));

} else {
var statearr_36602_38173 = state_36565__$1;
(statearr_36602_38173[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36566 === (9))){
var inst_36552 = (state_36565[(2)]);
var inst_36553 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36565__$1 = (function (){var statearr_36603 = state_36565;
(statearr_36603[(15)] = inst_36552);

return statearr_36603;
})();
if(cljs.core.truth_(inst_36553)){
var statearr_36604_38175 = state_36565__$1;
(statearr_36604_38175[(1)] = (21));

} else {
var statearr_36606_38176 = state_36565__$1;
(statearr_36606_38176[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36566 === (5))){
var inst_36506 = cljs.core.async.close_BANG_(out);
var state_36565__$1 = state_36565;
var statearr_36607_38177 = state_36565__$1;
(statearr_36607_38177[(2)] = inst_36506);

(statearr_36607_38177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36566 === (14))){
var inst_36529 = (state_36565[(7)]);
var inst_36531 = cljs.core.chunked_seq_QMARK_(inst_36529);
var state_36565__$1 = state_36565;
if(inst_36531){
var statearr_36609_38178 = state_36565__$1;
(statearr_36609_38178[(1)] = (17));

} else {
var statearr_36610_38179 = state_36565__$1;
(statearr_36610_38179[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36566 === (16))){
var inst_36547 = (state_36565[(2)]);
var state_36565__$1 = state_36565;
var statearr_36611_38180 = state_36565__$1;
(statearr_36611_38180[(2)] = inst_36547);

(statearr_36611_38180[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36566 === (10))){
var inst_36515 = (state_36565[(9)]);
var inst_36517 = (state_36565[(12)]);
var inst_36522 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36515,inst_36517);
var state_36565__$1 = state_36565;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36565__$1,(13),out,inst_36522);
} else {
if((state_val_36566 === (18))){
var inst_36529 = (state_36565[(7)]);
var inst_36538 = cljs.core.first(inst_36529);
var state_36565__$1 = state_36565;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36565__$1,(20),out,inst_36538);
} else {
if((state_val_36566 === (8))){
var inst_36516 = (state_36565[(8)]);
var inst_36517 = (state_36565[(12)]);
var inst_36519 = (inst_36517 < inst_36516);
var inst_36520 = inst_36519;
var state_36565__$1 = state_36565;
if(cljs.core.truth_(inst_36520)){
var statearr_36613_38184 = state_36565__$1;
(statearr_36613_38184[(1)] = (10));

} else {
var statearr_36615_38185 = state_36565__$1;
(statearr_36615_38185[(1)] = (11));

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
var statearr_36616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36616[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36616[(1)] = (1));

return statearr_36616;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36565){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36565);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36618){if((e36618 instanceof Object)){
var ex__34210__auto__ = e36618;
var statearr_36619_38189 = state_36565;
(statearr_36619_38189[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36618;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38190 = state_36565;
state_36565 = G__38190;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36565){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36621 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36621[(6)] = c__34274__auto__);

return statearr_36621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36624 = arguments.length;
switch (G__36624) {
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
var G__36628 = arguments.length;
switch (G__36628) {
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
var G__36632 = arguments.length;
switch (G__36632) {
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
var c__34274__auto___38196 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36658){
var state_val_36660 = (state_36658[(1)]);
if((state_val_36660 === (7))){
var inst_36653 = (state_36658[(2)]);
var state_36658__$1 = state_36658;
var statearr_36662_38197 = state_36658__$1;
(statearr_36662_38197[(2)] = inst_36653);

(statearr_36662_38197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36660 === (1))){
var inst_36635 = null;
var state_36658__$1 = (function (){var statearr_36663 = state_36658;
(statearr_36663[(7)] = inst_36635);

return statearr_36663;
})();
var statearr_36664_38199 = state_36658__$1;
(statearr_36664_38199[(2)] = null);

(statearr_36664_38199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36660 === (4))){
var inst_36638 = (state_36658[(8)]);
var inst_36638__$1 = (state_36658[(2)]);
var inst_36639 = (inst_36638__$1 == null);
var inst_36640 = cljs.core.not(inst_36639);
var state_36658__$1 = (function (){var statearr_36666 = state_36658;
(statearr_36666[(8)] = inst_36638__$1);

return statearr_36666;
})();
if(inst_36640){
var statearr_36667_38200 = state_36658__$1;
(statearr_36667_38200[(1)] = (5));

} else {
var statearr_36668_38201 = state_36658__$1;
(statearr_36668_38201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36660 === (6))){
var state_36658__$1 = state_36658;
var statearr_36669_38202 = state_36658__$1;
(statearr_36669_38202[(2)] = null);

(statearr_36669_38202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36660 === (3))){
var inst_36655 = (state_36658[(2)]);
var inst_36656 = cljs.core.async.close_BANG_(out);
var state_36658__$1 = (function (){var statearr_36671 = state_36658;
(statearr_36671[(9)] = inst_36655);

return statearr_36671;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36658__$1,inst_36656);
} else {
if((state_val_36660 === (2))){
var state_36658__$1 = state_36658;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36658__$1,(4),ch);
} else {
if((state_val_36660 === (11))){
var inst_36638 = (state_36658[(8)]);
var inst_36647 = (state_36658[(2)]);
var inst_36635 = inst_36638;
var state_36658__$1 = (function (){var statearr_36673 = state_36658;
(statearr_36673[(7)] = inst_36635);

(statearr_36673[(10)] = inst_36647);

return statearr_36673;
})();
var statearr_36674_38204 = state_36658__$1;
(statearr_36674_38204[(2)] = null);

(statearr_36674_38204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36660 === (9))){
var inst_36638 = (state_36658[(8)]);
var state_36658__$1 = state_36658;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36658__$1,(11),out,inst_36638);
} else {
if((state_val_36660 === (5))){
var inst_36635 = (state_36658[(7)]);
var inst_36638 = (state_36658[(8)]);
var inst_36642 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36638,inst_36635);
var state_36658__$1 = state_36658;
if(inst_36642){
var statearr_36677_38205 = state_36658__$1;
(statearr_36677_38205[(1)] = (8));

} else {
var statearr_36678_38206 = state_36658__$1;
(statearr_36678_38206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36660 === (10))){
var inst_36650 = (state_36658[(2)]);
var state_36658__$1 = state_36658;
var statearr_36679_38207 = state_36658__$1;
(statearr_36679_38207[(2)] = inst_36650);

(statearr_36679_38207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36660 === (8))){
var inst_36635 = (state_36658[(7)]);
var tmp36675 = inst_36635;
var inst_36635__$1 = tmp36675;
var state_36658__$1 = (function (){var statearr_36681 = state_36658;
(statearr_36681[(7)] = inst_36635__$1);

return statearr_36681;
})();
var statearr_36682_38209 = state_36658__$1;
(statearr_36682_38209[(2)] = null);

(statearr_36682_38209[(1)] = (2));


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
var statearr_36683 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36683[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36683[(1)] = (1));

return statearr_36683;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36658){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36658);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36685){if((e36685 instanceof Object)){
var ex__34210__auto__ = e36685;
var statearr_36686_38211 = state_36658;
(statearr_36686_38211[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36685;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38212 = state_36658;
state_36658 = G__38212;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36658){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36688 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36688[(6)] = c__34274__auto___38196);

return statearr_36688;
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
var G__36691 = arguments.length;
switch (G__36691) {
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
var c__34274__auto___38215 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36731){
var state_val_36732 = (state_36731[(1)]);
if((state_val_36732 === (7))){
var inst_36727 = (state_36731[(2)]);
var state_36731__$1 = state_36731;
var statearr_36734_38217 = state_36731__$1;
(statearr_36734_38217[(2)] = inst_36727);

(statearr_36734_38217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36732 === (1))){
var inst_36693 = (new Array(n));
var inst_36694 = inst_36693;
var inst_36695 = (0);
var state_36731__$1 = (function (){var statearr_36735 = state_36731;
(statearr_36735[(7)] = inst_36694);

(statearr_36735[(8)] = inst_36695);

return statearr_36735;
})();
var statearr_36737_38219 = state_36731__$1;
(statearr_36737_38219[(2)] = null);

(statearr_36737_38219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36732 === (4))){
var inst_36698 = (state_36731[(9)]);
var inst_36698__$1 = (state_36731[(2)]);
var inst_36699 = (inst_36698__$1 == null);
var inst_36700 = cljs.core.not(inst_36699);
var state_36731__$1 = (function (){var statearr_36738 = state_36731;
(statearr_36738[(9)] = inst_36698__$1);

return statearr_36738;
})();
if(inst_36700){
var statearr_36739_38220 = state_36731__$1;
(statearr_36739_38220[(1)] = (5));

} else {
var statearr_36741_38221 = state_36731__$1;
(statearr_36741_38221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36732 === (15))){
var inst_36721 = (state_36731[(2)]);
var state_36731__$1 = state_36731;
var statearr_36742_38223 = state_36731__$1;
(statearr_36742_38223[(2)] = inst_36721);

(statearr_36742_38223[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36732 === (13))){
var state_36731__$1 = state_36731;
var statearr_36743_38224 = state_36731__$1;
(statearr_36743_38224[(2)] = null);

(statearr_36743_38224[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36732 === (6))){
var inst_36695 = (state_36731[(8)]);
var inst_36717 = (inst_36695 > (0));
var state_36731__$1 = state_36731;
if(cljs.core.truth_(inst_36717)){
var statearr_36745_38225 = state_36731__$1;
(statearr_36745_38225[(1)] = (12));

} else {
var statearr_36746_38226 = state_36731__$1;
(statearr_36746_38226[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36732 === (3))){
var inst_36729 = (state_36731[(2)]);
var state_36731__$1 = state_36731;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36731__$1,inst_36729);
} else {
if((state_val_36732 === (12))){
var inst_36694 = (state_36731[(7)]);
var inst_36719 = cljs.core.vec(inst_36694);
var state_36731__$1 = state_36731;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36731__$1,(15),out,inst_36719);
} else {
if((state_val_36732 === (2))){
var state_36731__$1 = state_36731;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36731__$1,(4),ch);
} else {
if((state_val_36732 === (11))){
var inst_36710 = (state_36731[(2)]);
var inst_36712 = (new Array(n));
var inst_36694 = inst_36712;
var inst_36695 = (0);
var state_36731__$1 = (function (){var statearr_36748 = state_36731;
(statearr_36748[(7)] = inst_36694);

(statearr_36748[(10)] = inst_36710);

(statearr_36748[(8)] = inst_36695);

return statearr_36748;
})();
var statearr_36750_38229 = state_36731__$1;
(statearr_36750_38229[(2)] = null);

(statearr_36750_38229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36732 === (9))){
var inst_36694 = (state_36731[(7)]);
var inst_36708 = cljs.core.vec(inst_36694);
var state_36731__$1 = state_36731;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36731__$1,(11),out,inst_36708);
} else {
if((state_val_36732 === (5))){
var inst_36703 = (state_36731[(11)]);
var inst_36698 = (state_36731[(9)]);
var inst_36694 = (state_36731[(7)]);
var inst_36695 = (state_36731[(8)]);
var inst_36702 = (inst_36694[inst_36695] = inst_36698);
var inst_36703__$1 = (inst_36695 + (1));
var inst_36704 = (inst_36703__$1 < n);
var state_36731__$1 = (function (){var statearr_36752 = state_36731;
(statearr_36752[(11)] = inst_36703__$1);

(statearr_36752[(12)] = inst_36702);

return statearr_36752;
})();
if(cljs.core.truth_(inst_36704)){
var statearr_36753_38231 = state_36731__$1;
(statearr_36753_38231[(1)] = (8));

} else {
var statearr_36754_38232 = state_36731__$1;
(statearr_36754_38232[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36732 === (14))){
var inst_36724 = (state_36731[(2)]);
var inst_36725 = cljs.core.async.close_BANG_(out);
var state_36731__$1 = (function (){var statearr_36757 = state_36731;
(statearr_36757[(13)] = inst_36724);

return statearr_36757;
})();
var statearr_36758_38233 = state_36731__$1;
(statearr_36758_38233[(2)] = inst_36725);

(statearr_36758_38233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36732 === (10))){
var inst_36715 = (state_36731[(2)]);
var state_36731__$1 = state_36731;
var statearr_36759_38235 = state_36731__$1;
(statearr_36759_38235[(2)] = inst_36715);

(statearr_36759_38235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36732 === (8))){
var inst_36703 = (state_36731[(11)]);
var inst_36694 = (state_36731[(7)]);
var tmp36755 = inst_36694;
var inst_36694__$1 = tmp36755;
var inst_36695 = inst_36703;
var state_36731__$1 = (function (){var statearr_36761 = state_36731;
(statearr_36761[(7)] = inst_36694__$1);

(statearr_36761[(8)] = inst_36695);

return statearr_36761;
})();
var statearr_36762_38236 = state_36731__$1;
(statearr_36762_38236[(2)] = null);

(statearr_36762_38236[(1)] = (2));


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
var statearr_36763 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36763[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36763[(1)] = (1));

return statearr_36763;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36731){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36731);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36770){if((e36770 instanceof Object)){
var ex__34210__auto__ = e36770;
var statearr_36772_38238 = state_36731;
(statearr_36772_38238[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36770;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38240 = state_36731;
state_36731 = G__38240;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36731){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36774 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36774[(6)] = c__34274__auto___38215);

return statearr_36774;
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
var G__36777 = arguments.length;
switch (G__36777) {
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
var c__34274__auto___38243 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36822){
var state_val_36823 = (state_36822[(1)]);
if((state_val_36823 === (7))){
var inst_36818 = (state_36822[(2)]);
var state_36822__$1 = state_36822;
var statearr_36825_38245 = state_36822__$1;
(statearr_36825_38245[(2)] = inst_36818);

(statearr_36825_38245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36823 === (1))){
var inst_36780 = [];
var inst_36781 = inst_36780;
var inst_36782 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36822__$1 = (function (){var statearr_36827 = state_36822;
(statearr_36827[(7)] = inst_36782);

(statearr_36827[(8)] = inst_36781);

return statearr_36827;
})();
var statearr_36828_38246 = state_36822__$1;
(statearr_36828_38246[(2)] = null);

(statearr_36828_38246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36823 === (4))){
var inst_36785 = (state_36822[(9)]);
var inst_36785__$1 = (state_36822[(2)]);
var inst_36786 = (inst_36785__$1 == null);
var inst_36787 = cljs.core.not(inst_36786);
var state_36822__$1 = (function (){var statearr_36830 = state_36822;
(statearr_36830[(9)] = inst_36785__$1);

return statearr_36830;
})();
if(inst_36787){
var statearr_36831_38248 = state_36822__$1;
(statearr_36831_38248[(1)] = (5));

} else {
var statearr_36832_38249 = state_36822__$1;
(statearr_36832_38249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36823 === (15))){
var inst_36812 = (state_36822[(2)]);
var state_36822__$1 = state_36822;
var statearr_36834_38250 = state_36822__$1;
(statearr_36834_38250[(2)] = inst_36812);

(statearr_36834_38250[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36823 === (13))){
var state_36822__$1 = state_36822;
var statearr_36835_38252 = state_36822__$1;
(statearr_36835_38252[(2)] = null);

(statearr_36835_38252[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36823 === (6))){
var inst_36781 = (state_36822[(8)]);
var inst_36807 = inst_36781.length;
var inst_36808 = (inst_36807 > (0));
var state_36822__$1 = state_36822;
if(cljs.core.truth_(inst_36808)){
var statearr_36837_38253 = state_36822__$1;
(statearr_36837_38253[(1)] = (12));

} else {
var statearr_36838_38254 = state_36822__$1;
(statearr_36838_38254[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36823 === (3))){
var inst_36820 = (state_36822[(2)]);
var state_36822__$1 = state_36822;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36822__$1,inst_36820);
} else {
if((state_val_36823 === (12))){
var inst_36781 = (state_36822[(8)]);
var inst_36810 = cljs.core.vec(inst_36781);
var state_36822__$1 = state_36822;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36822__$1,(15),out,inst_36810);
} else {
if((state_val_36823 === (2))){
var state_36822__$1 = state_36822;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36822__$1,(4),ch);
} else {
if((state_val_36823 === (11))){
var inst_36789 = (state_36822[(10)]);
var inst_36785 = (state_36822[(9)]);
var inst_36800 = (state_36822[(2)]);
var inst_36801 = [];
var inst_36802 = inst_36801.push(inst_36785);
var inst_36781 = inst_36801;
var inst_36782 = inst_36789;
var state_36822__$1 = (function (){var statearr_36840 = state_36822;
(statearr_36840[(7)] = inst_36782);

(statearr_36840[(11)] = inst_36802);

(statearr_36840[(12)] = inst_36800);

(statearr_36840[(8)] = inst_36781);

return statearr_36840;
})();
var statearr_36842_38257 = state_36822__$1;
(statearr_36842_38257[(2)] = null);

(statearr_36842_38257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36823 === (9))){
var inst_36781 = (state_36822[(8)]);
var inst_36798 = cljs.core.vec(inst_36781);
var state_36822__$1 = state_36822;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36822__$1,(11),out,inst_36798);
} else {
if((state_val_36823 === (5))){
var inst_36782 = (state_36822[(7)]);
var inst_36789 = (state_36822[(10)]);
var inst_36785 = (state_36822[(9)]);
var inst_36789__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36785) : f.call(null,inst_36785));
var inst_36790 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36789__$1,inst_36782);
var inst_36791 = cljs.core.keyword_identical_QMARK_(inst_36782,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36792 = ((inst_36790) || (inst_36791));
var state_36822__$1 = (function (){var statearr_36844 = state_36822;
(statearr_36844[(10)] = inst_36789__$1);

return statearr_36844;
})();
if(cljs.core.truth_(inst_36792)){
var statearr_36845_38258 = state_36822__$1;
(statearr_36845_38258[(1)] = (8));

} else {
var statearr_36847_38259 = state_36822__$1;
(statearr_36847_38259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36823 === (14))){
var inst_36815 = (state_36822[(2)]);
var inst_36816 = cljs.core.async.close_BANG_(out);
var state_36822__$1 = (function (){var statearr_36849 = state_36822;
(statearr_36849[(13)] = inst_36815);

return statearr_36849;
})();
var statearr_36850_38260 = state_36822__$1;
(statearr_36850_38260[(2)] = inst_36816);

(statearr_36850_38260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36823 === (10))){
var inst_36805 = (state_36822[(2)]);
var state_36822__$1 = state_36822;
var statearr_36852_38262 = state_36822__$1;
(statearr_36852_38262[(2)] = inst_36805);

(statearr_36852_38262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36823 === (8))){
var inst_36789 = (state_36822[(10)]);
var inst_36785 = (state_36822[(9)]);
var inst_36781 = (state_36822[(8)]);
var inst_36795 = inst_36781.push(inst_36785);
var tmp36848 = inst_36781;
var inst_36781__$1 = tmp36848;
var inst_36782 = inst_36789;
var state_36822__$1 = (function (){var statearr_36853 = state_36822;
(statearr_36853[(7)] = inst_36782);

(statearr_36853[(14)] = inst_36795);

(statearr_36853[(8)] = inst_36781__$1);

return statearr_36853;
})();
var statearr_36854_38263 = state_36822__$1;
(statearr_36854_38263[(2)] = null);

(statearr_36854_38263[(1)] = (2));


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
var statearr_36856 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36856[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36856[(1)] = (1));

return statearr_36856;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36822){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36822);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36857){if((e36857 instanceof Object)){
var ex__34210__auto__ = e36857;
var statearr_36859_38264 = state_36822;
(statearr_36859_38264[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36857;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38265 = state_36822;
state_36822 = G__38265;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36860 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36860[(6)] = c__34274__auto___38243);

return statearr_36860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
