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
var val_36816 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36816) : fn1.call(null,val_36816));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36816) : fn1.call(null,val_36816));
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
var n__4666__auto___36822 = n;
var x_36823 = (0);
while(true){
if((x_36823 < n__4666__auto___36822)){
(a[x_36823] = x_36823);

var G__36824 = (x_36823 + (1));
x_36823 = G__36824;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34354 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34354 = (function (flag,cb,meta34355){
this.flag = flag;
this.cb = cb;
this.meta34355 = meta34355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34356,meta34355__$1){
var self__ = this;
var _34356__$1 = this;
return (new cljs.core.async.t_cljs$core$async34354(self__.flag,self__.cb,meta34355__$1));
}));

(cljs.core.async.t_cljs$core$async34354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34356){
var self__ = this;
var _34356__$1 = this;
return self__.meta34355;
}));

(cljs.core.async.t_cljs$core$async34354.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34354.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34354.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34354.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34354.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34355","meta34355",-157438434,null)], null);
}));

(cljs.core.async.t_cljs$core$async34354.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34354.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34354");

(cljs.core.async.t_cljs$core$async34354.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34354");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34354.
 */
cljs.core.async.__GT_t_cljs$core$async34354 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34354(flag__$1,cb__$1,meta34355){
return (new cljs.core.async.t_cljs$core$async34354(flag__$1,cb__$1,meta34355));
});

}

return (new cljs.core.async.t_cljs$core$async34354(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36833 = (i + (1));
i = G__36833;
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
var len__4789__auto___36835 = arguments.length;
var i__4790__auto___36837 = (0);
while(true){
if((i__4790__auto___36837 < len__4789__auto___36835)){
args__4795__auto__.push((arguments[i__4790__auto___36837]));

var G__36838 = (i__4790__auto___36837 + (1));
i__4790__auto___36837 = G__36838;
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
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34375){
var G__34376 = cljs.core.first(seq34375);
var seq34375__$1 = cljs.core.next(seq34375);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34376,seq34375__$1);
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
var G__34386 = arguments.length;
switch (G__34386) {
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
var c__34273__auto___36843 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34423){
var state_val_34424 = (state_34423[(1)]);
if((state_val_34424 === (7))){
var inst_34419 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34425_36844 = state_34423__$1;
(statearr_34425_36844[(2)] = inst_34419);

(statearr_34425_36844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (1))){
var state_34423__$1 = state_34423;
var statearr_34426_36846 = state_34423__$1;
(statearr_34426_36846[(2)] = null);

(statearr_34426_36846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (4))){
var inst_34399 = (state_34423[(7)]);
var inst_34399__$1 = (state_34423[(2)]);
var inst_34403 = (inst_34399__$1 == null);
var state_34423__$1 = (function (){var statearr_34427 = state_34423;
(statearr_34427[(7)] = inst_34399__$1);

return statearr_34427;
})();
if(cljs.core.truth_(inst_34403)){
var statearr_34428_36848 = state_34423__$1;
(statearr_34428_36848[(1)] = (5));

} else {
var statearr_34429_36849 = state_34423__$1;
(statearr_34429_36849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (13))){
var state_34423__$1 = state_34423;
var statearr_34430_36850 = state_34423__$1;
(statearr_34430_36850[(2)] = null);

(statearr_34430_36850[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (6))){
var inst_34399 = (state_34423[(7)]);
var state_34423__$1 = state_34423;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34423__$1,(11),to,inst_34399);
} else {
if((state_val_34424 === (3))){
var inst_34421 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34423__$1,inst_34421);
} else {
if((state_val_34424 === (12))){
var state_34423__$1 = state_34423;
var statearr_34431_36852 = state_34423__$1;
(statearr_34431_36852[(2)] = null);

(statearr_34431_36852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (2))){
var state_34423__$1 = state_34423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34423__$1,(4),from);
} else {
if((state_val_34424 === (11))){
var inst_34412 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
if(cljs.core.truth_(inst_34412)){
var statearr_34432_36854 = state_34423__$1;
(statearr_34432_36854[(1)] = (12));

} else {
var statearr_34433_36855 = state_34423__$1;
(statearr_34433_36855[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (9))){
var state_34423__$1 = state_34423;
var statearr_34434_36856 = state_34423__$1;
(statearr_34434_36856[(2)] = null);

(statearr_34434_36856[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (5))){
var state_34423__$1 = state_34423;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34435_36857 = state_34423__$1;
(statearr_34435_36857[(1)] = (8));

} else {
var statearr_34436_36859 = state_34423__$1;
(statearr_34436_36859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (14))){
var inst_34417 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34437_36860 = state_34423__$1;
(statearr_34437_36860[(2)] = inst_34417);

(statearr_34437_36860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (10))){
var inst_34409 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34439_36861 = state_34423__$1;
(statearr_34439_36861[(2)] = inst_34409);

(statearr_34439_36861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (8))){
var inst_34406 = cljs.core.async.close_BANG_(to);
var state_34423__$1 = state_34423;
var statearr_34443_36863 = state_34423__$1;
(statearr_34443_36863[(2)] = inst_34406);

(statearr_34443_36863[(1)] = (10));


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
var statearr_34444 = [null,null,null,null,null,null,null,null];
(statearr_34444[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34444[(1)] = (1));

return statearr_34444;
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
}catch (e34445){if((e34445 instanceof Object)){
var ex__34210__auto__ = e34445;
var statearr_34446_36865 = state_34423;
(statearr_34446_36865[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34445;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36866 = state_34423;
state_34423 = G__36866;
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
var state__34275__auto__ = (function (){var statearr_34448 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34448[(6)] = c__34273__auto___36843);

return statearr_34448;
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
var process = (function (p__34450){
var vec__34451 = p__34450;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34451,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34451,(1),null);
var job = vec__34451;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34273__auto___36869 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34459){
var state_val_34460 = (state_34459[(1)]);
if((state_val_34460 === (1))){
var state_34459__$1 = state_34459;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34459__$1,(2),res,v);
} else {
if((state_val_34460 === (2))){
var inst_34456 = (state_34459[(2)]);
var inst_34457 = cljs.core.async.close_BANG_(res);
var state_34459__$1 = (function (){var statearr_34462 = state_34459;
(statearr_34462[(7)] = inst_34456);

return statearr_34462;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34459__$1,inst_34457);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34463 = [null,null,null,null,null,null,null,null];
(statearr_34463[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34463[(1)] = (1));

return statearr_34463;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34459){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34459);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34464){if((e34464 instanceof Object)){
var ex__34210__auto__ = e34464;
var statearr_34465_36872 = state_34459;
(statearr_34465_36872[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34464;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36874 = state_34459;
state_34459 = G__36874;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34459){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34468 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34468[(6)] = c__34273__auto___36869);

return statearr_34468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34474){
var vec__34475 = p__34474;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34475,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34475,(1),null);
var job = vec__34475;
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
var n__4666__auto___36876 = n;
var __36878 = (0);
while(true){
if((__36878 < n__4666__auto___36876)){
var G__34478_36879 = type;
var G__34478_36880__$1 = (((G__34478_36879 instanceof cljs.core.Keyword))?G__34478_36879.fqn:null);
switch (G__34478_36880__$1) {
case "compute":
var c__34273__auto___36882 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36878,c__34273__auto___36882,G__34478_36879,G__34478_36880__$1,n__4666__auto___36876,jobs,results,process,async){
return (function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = ((function (__36878,c__34273__auto___36882,G__34478_36879,G__34478_36880__$1,n__4666__auto___36876,jobs,results,process,async){
return (function (state_34491){
var state_val_34492 = (state_34491[(1)]);
if((state_val_34492 === (1))){
var state_34491__$1 = state_34491;
var statearr_34494_36884 = state_34491__$1;
(statearr_34494_36884[(2)] = null);

(statearr_34494_36884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34492 === (2))){
var state_34491__$1 = state_34491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34491__$1,(4),jobs);
} else {
if((state_val_34492 === (3))){
var inst_34489 = (state_34491[(2)]);
var state_34491__$1 = state_34491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34491__$1,inst_34489);
} else {
if((state_val_34492 === (4))){
var inst_34481 = (state_34491[(2)]);
var inst_34482 = process(inst_34481);
var state_34491__$1 = state_34491;
if(cljs.core.truth_(inst_34482)){
var statearr_34495_36886 = state_34491__$1;
(statearr_34495_36886[(1)] = (5));

} else {
var statearr_34496_36887 = state_34491__$1;
(statearr_34496_36887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34492 === (5))){
var state_34491__$1 = state_34491;
var statearr_34497_36888 = state_34491__$1;
(statearr_34497_36888[(2)] = null);

(statearr_34497_36888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34492 === (6))){
var state_34491__$1 = state_34491;
var statearr_34499_36890 = state_34491__$1;
(statearr_34499_36890[(2)] = null);

(statearr_34499_36890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34492 === (7))){
var inst_34487 = (state_34491[(2)]);
var state_34491__$1 = state_34491;
var statearr_34503_36891 = state_34491__$1;
(statearr_34503_36891[(2)] = inst_34487);

(statearr_34503_36891[(1)] = (3));


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
});})(__36878,c__34273__auto___36882,G__34478_36879,G__34478_36880__$1,n__4666__auto___36876,jobs,results,process,async))
;
return ((function (__36878,switch__34206__auto__,c__34273__auto___36882,G__34478_36879,G__34478_36880__$1,n__4666__auto___36876,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34507 = [null,null,null,null,null,null,null];
(statearr_34507[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34507[(1)] = (1));

return statearr_34507;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34491){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34491);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34508){if((e34508 instanceof Object)){
var ex__34210__auto__ = e34508;
var statearr_34509_36893 = state_34491;
(statearr_34509_36893[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34508;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36895 = state_34491;
state_34491 = G__36895;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34491){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36878,switch__34206__auto__,c__34273__auto___36882,G__34478_36879,G__34478_36880__$1,n__4666__auto___36876,jobs,results,process,async))
})();
var state__34275__auto__ = (function (){var statearr_34510 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34510[(6)] = c__34273__auto___36882);

return statearr_34510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
});})(__36878,c__34273__auto___36882,G__34478_36879,G__34478_36880__$1,n__4666__auto___36876,jobs,results,process,async))
);


break;
case "async":
var c__34273__auto___36896 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36878,c__34273__auto___36896,G__34478_36879,G__34478_36880__$1,n__4666__auto___36876,jobs,results,process,async){
return (function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = ((function (__36878,c__34273__auto___36896,G__34478_36879,G__34478_36880__$1,n__4666__auto___36876,jobs,results,process,async){
return (function (state_34523){
var state_val_34524 = (state_34523[(1)]);
if((state_val_34524 === (1))){
var state_34523__$1 = state_34523;
var statearr_34525_36898 = state_34523__$1;
(statearr_34525_36898[(2)] = null);

(statearr_34525_36898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34524 === (2))){
var state_34523__$1 = state_34523;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34523__$1,(4),jobs);
} else {
if((state_val_34524 === (3))){
var inst_34521 = (state_34523[(2)]);
var state_34523__$1 = state_34523;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34523__$1,inst_34521);
} else {
if((state_val_34524 === (4))){
var inst_34513 = (state_34523[(2)]);
var inst_34514 = async(inst_34513);
var state_34523__$1 = state_34523;
if(cljs.core.truth_(inst_34514)){
var statearr_34528_36900 = state_34523__$1;
(statearr_34528_36900[(1)] = (5));

} else {
var statearr_34530_36901 = state_34523__$1;
(statearr_34530_36901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34524 === (5))){
var state_34523__$1 = state_34523;
var statearr_34531_36903 = state_34523__$1;
(statearr_34531_36903[(2)] = null);

(statearr_34531_36903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34524 === (6))){
var state_34523__$1 = state_34523;
var statearr_34532_36904 = state_34523__$1;
(statearr_34532_36904[(2)] = null);

(statearr_34532_36904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34524 === (7))){
var inst_34519 = (state_34523[(2)]);
var state_34523__$1 = state_34523;
var statearr_34533_36905 = state_34523__$1;
(statearr_34533_36905[(2)] = inst_34519);

(statearr_34533_36905[(1)] = (3));


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
});})(__36878,c__34273__auto___36896,G__34478_36879,G__34478_36880__$1,n__4666__auto___36876,jobs,results,process,async))
;
return ((function (__36878,switch__34206__auto__,c__34273__auto___36896,G__34478_36879,G__34478_36880__$1,n__4666__auto___36876,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34534 = [null,null,null,null,null,null,null];
(statearr_34534[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34534[(1)] = (1));

return statearr_34534;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34523){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34523);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34535){if((e34535 instanceof Object)){
var ex__34210__auto__ = e34535;
var statearr_34536_36908 = state_34523;
(statearr_34536_36908[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34535;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36909 = state_34523;
state_34523 = G__36909;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34523){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36878,switch__34206__auto__,c__34273__auto___36896,G__34478_36879,G__34478_36880__$1,n__4666__auto___36876,jobs,results,process,async))
})();
var state__34275__auto__ = (function (){var statearr_34537 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34537[(6)] = c__34273__auto___36896);

return statearr_34537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
});})(__36878,c__34273__auto___36896,G__34478_36879,G__34478_36880__$1,n__4666__auto___36876,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34478_36880__$1)].join('')));

}

var G__36911 = (__36878 + (1));
__36878 = G__36911;
continue;
} else {
}
break;
}

var c__34273__auto___36912 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34559){
var state_val_34560 = (state_34559[(1)]);
if((state_val_34560 === (7))){
var inst_34555 = (state_34559[(2)]);
var state_34559__$1 = state_34559;
var statearr_34561_36914 = state_34559__$1;
(statearr_34561_36914[(2)] = inst_34555);

(statearr_34561_36914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (1))){
var state_34559__$1 = state_34559;
var statearr_34562_36915 = state_34559__$1;
(statearr_34562_36915[(2)] = null);

(statearr_34562_36915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (4))){
var inst_34540 = (state_34559[(7)]);
var inst_34540__$1 = (state_34559[(2)]);
var inst_34541 = (inst_34540__$1 == null);
var state_34559__$1 = (function (){var statearr_34563 = state_34559;
(statearr_34563[(7)] = inst_34540__$1);

return statearr_34563;
})();
if(cljs.core.truth_(inst_34541)){
var statearr_34564_36917 = state_34559__$1;
(statearr_34564_36917[(1)] = (5));

} else {
var statearr_34565_36918 = state_34559__$1;
(statearr_34565_36918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (6))){
var inst_34540 = (state_34559[(7)]);
var inst_34545 = (state_34559[(8)]);
var inst_34545__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34546 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34547 = [inst_34540,inst_34545__$1];
var inst_34548 = (new cljs.core.PersistentVector(null,2,(5),inst_34546,inst_34547,null));
var state_34559__$1 = (function (){var statearr_34566 = state_34559;
(statearr_34566[(8)] = inst_34545__$1);

return statearr_34566;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34559__$1,(8),jobs,inst_34548);
} else {
if((state_val_34560 === (3))){
var inst_34557 = (state_34559[(2)]);
var state_34559__$1 = state_34559;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34559__$1,inst_34557);
} else {
if((state_val_34560 === (2))){
var state_34559__$1 = state_34559;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34559__$1,(4),from);
} else {
if((state_val_34560 === (9))){
var inst_34552 = (state_34559[(2)]);
var state_34559__$1 = (function (){var statearr_34567 = state_34559;
(statearr_34567[(9)] = inst_34552);

return statearr_34567;
})();
var statearr_34568_36921 = state_34559__$1;
(statearr_34568_36921[(2)] = null);

(statearr_34568_36921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (5))){
var inst_34543 = cljs.core.async.close_BANG_(jobs);
var state_34559__$1 = state_34559;
var statearr_34569_36922 = state_34559__$1;
(statearr_34569_36922[(2)] = inst_34543);

(statearr_34569_36922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (8))){
var inst_34545 = (state_34559[(8)]);
var inst_34550 = (state_34559[(2)]);
var state_34559__$1 = (function (){var statearr_34570 = state_34559;
(statearr_34570[(10)] = inst_34550);

return statearr_34570;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34559__$1,(9),results,inst_34545);
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
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34559){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34559);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34572){if((e34572 instanceof Object)){
var ex__34210__auto__ = e34572;
var statearr_34573_36925 = state_34559;
(statearr_34573_36925[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36926 = state_34559;
state_34559 = G__36926;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34559){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34574 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34574[(6)] = c__34273__auto___36912);

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
var statearr_34614_36928 = state_34612__$1;
(statearr_34614_36928[(2)] = inst_34608);

(statearr_34614_36928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var state_34612__$1 = state_34612;
var statearr_34615_36930 = state_34612__$1;
(statearr_34615_36930[(2)] = null);

(statearr_34615_36930[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34616_36931 = state_34612__$1;
(statearr_34616_36931[(2)] = null);

(statearr_34616_36931[(1)] = (2));


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
var statearr_34618_36933 = state_34612__$1;
(statearr_34618_36933[(1)] = (5));

} else {
var statearr_34619_36934 = state_34612__$1;
(statearr_34619_36934[(1)] = (6));

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
var statearr_34620_36935 = state_34612__$1;
(statearr_34620_36935[(2)] = inst_34603);

(statearr_34620_36935[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_36937 = state_34612__$1;
(statearr_34622_36937[(2)] = null);

(statearr_34622_36937[(1)] = (2));


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
var statearr_34623_36938 = state_34612__$1;
(statearr_34623_36938[(1)] = (19));

} else {
var statearr_34624_36940 = state_34612__$1;
(statearr_34624_36940[(1)] = (20));

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
var statearr_34625_36942 = state_34612__$1;
(statearr_34625_36942[(2)] = null);

(statearr_34625_36942[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34587 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34626 = state_34612;
(statearr_34626[(10)] = inst_34587);

return statearr_34626;
})();
var statearr_34627_36943 = state_34612__$1;
(statearr_34627_36943[(2)] = null);

(statearr_34627_36943[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34628_36944 = state_34612__$1;
(statearr_34628_36944[(2)] = null);

(statearr_34628_36944[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_36946 = state_34612__$1;
(statearr_34629_36946[(1)] = (8));

} else {
var statearr_34630_36947 = state_34612__$1;
(statearr_34630_36947[(1)] = (9));

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
var statearr_34635_36949 = state_34612__$1;
(statearr_34635_36949[(1)] = (15));

} else {
var statearr_34636_36950 = state_34612__$1;
(statearr_34636_36950[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34637_36951 = state_34612__$1;
(statearr_34637_36951[(2)] = false);

(statearr_34637_36951[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34638_36953 = state_34612__$1;
(statearr_34638_36953[(2)] = inst_34584);

(statearr_34638_36953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34639_36954 = state_34612__$1;
(statearr_34639_36954[(2)] = inst_34595);

(statearr_34639_36954[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34581 = cljs.core.async.close_BANG_(to);
var state_34612__$1 = state_34612;
var statearr_34643_36956 = state_34612__$1;
(statearr_34643_36956[(2)] = inst_34581);

(statearr_34643_36956[(1)] = (10));


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
var statearr_34646 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34646[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34646[(1)] = (1));

return statearr_34646;
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
}catch (e34647){if((e34647 instanceof Object)){
var ex__34210__auto__ = e34647;
var statearr_34648_36958 = state_34612;
(statearr_34648_36958[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34647;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36959 = state_34612;
state_34612 = G__36959;
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
var state__34275__auto__ = (function (){var statearr_34650 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34650[(6)] = c__34273__auto__);

return statearr_34650;
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
var G__34654 = arguments.length;
switch (G__34654) {
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
var G__34657 = arguments.length;
switch (G__34657) {
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
var G__34665 = arguments.length;
switch (G__34665) {
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
var c__34273__auto___36969 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34692){
var state_val_34693 = (state_34692[(1)]);
if((state_val_34693 === (7))){
var inst_34687 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
var statearr_34694_36971 = state_34692__$1;
(statearr_34694_36971[(2)] = inst_34687);

(statearr_34694_36971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (1))){
var state_34692__$1 = state_34692;
var statearr_34695_36972 = state_34692__$1;
(statearr_34695_36972[(2)] = null);

(statearr_34695_36972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (4))){
var inst_34668 = (state_34692[(7)]);
var inst_34668__$1 = (state_34692[(2)]);
var inst_34669 = (inst_34668__$1 == null);
var state_34692__$1 = (function (){var statearr_34696 = state_34692;
(statearr_34696[(7)] = inst_34668__$1);

return statearr_34696;
})();
if(cljs.core.truth_(inst_34669)){
var statearr_34697_36974 = state_34692__$1;
(statearr_34697_36974[(1)] = (5));

} else {
var statearr_34698_36975 = state_34692__$1;
(statearr_34698_36975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (13))){
var state_34692__$1 = state_34692;
var statearr_34702_36976 = state_34692__$1;
(statearr_34702_36976[(2)] = null);

(statearr_34702_36976[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (6))){
var inst_34668 = (state_34692[(7)]);
var inst_34674 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34668) : p.call(null,inst_34668));
var state_34692__$1 = state_34692;
if(cljs.core.truth_(inst_34674)){
var statearr_34703_36978 = state_34692__$1;
(statearr_34703_36978[(1)] = (9));

} else {
var statearr_34704_36979 = state_34692__$1;
(statearr_34704_36979[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (3))){
var inst_34690 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34692__$1,inst_34690);
} else {
if((state_val_34693 === (12))){
var state_34692__$1 = state_34692;
var statearr_34708_36981 = state_34692__$1;
(statearr_34708_36981[(2)] = null);

(statearr_34708_36981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (2))){
var state_34692__$1 = state_34692;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34692__$1,(4),ch);
} else {
if((state_val_34693 === (11))){
var inst_34668 = (state_34692[(7)]);
var inst_34678 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34692__$1,(8),inst_34678,inst_34668);
} else {
if((state_val_34693 === (9))){
var state_34692__$1 = state_34692;
var statearr_34709_36983 = state_34692__$1;
(statearr_34709_36983[(2)] = tc);

(statearr_34709_36983[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (5))){
var inst_34671 = cljs.core.async.close_BANG_(tc);
var inst_34672 = cljs.core.async.close_BANG_(fc);
var state_34692__$1 = (function (){var statearr_34710 = state_34692;
(statearr_34710[(8)] = inst_34671);

return statearr_34710;
})();
var statearr_34711_36985 = state_34692__$1;
(statearr_34711_36985[(2)] = inst_34672);

(statearr_34711_36985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (14))){
var inst_34685 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
var statearr_34712_36986 = state_34692__$1;
(statearr_34712_36986[(2)] = inst_34685);

(statearr_34712_36986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (10))){
var state_34692__$1 = state_34692;
var statearr_34716_36988 = state_34692__$1;
(statearr_34716_36988[(2)] = fc);

(statearr_34716_36988[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (8))){
var inst_34680 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
if(cljs.core.truth_(inst_34680)){
var statearr_34717_36989 = state_34692__$1;
(statearr_34717_36989[(1)] = (12));

} else {
var statearr_34718_36990 = state_34692__$1;
(statearr_34718_36990[(1)] = (13));

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
var statearr_34719 = [null,null,null,null,null,null,null,null,null];
(statearr_34719[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34719[(1)] = (1));

return statearr_34719;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34692){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34692);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34720){if((e34720 instanceof Object)){
var ex__34210__auto__ = e34720;
var statearr_34721_36993 = state_34692;
(statearr_34721_36993[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34720;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36994 = state_34692;
state_34692 = G__36994;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34692){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34722 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34722[(6)] = c__34273__auto___36969);

return statearr_34722;
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
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34743){
var state_val_34744 = (state_34743[(1)]);
if((state_val_34744 === (7))){
var inst_34739 = (state_34743[(2)]);
var state_34743__$1 = state_34743;
var statearr_34745_36996 = state_34743__$1;
(statearr_34745_36996[(2)] = inst_34739);

(statearr_34745_36996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (1))){
var inst_34723 = init;
var state_34743__$1 = (function (){var statearr_34746 = state_34743;
(statearr_34746[(7)] = inst_34723);

return statearr_34746;
})();
var statearr_34747_36998 = state_34743__$1;
(statearr_34747_36998[(2)] = null);

(statearr_34747_36998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (4))){
var inst_34726 = (state_34743[(8)]);
var inst_34726__$1 = (state_34743[(2)]);
var inst_34727 = (inst_34726__$1 == null);
var state_34743__$1 = (function (){var statearr_34748 = state_34743;
(statearr_34748[(8)] = inst_34726__$1);

return statearr_34748;
})();
if(cljs.core.truth_(inst_34727)){
var statearr_34749_37000 = state_34743__$1;
(statearr_34749_37000[(1)] = (5));

} else {
var statearr_34750_37001 = state_34743__$1;
(statearr_34750_37001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (6))){
var inst_34730 = (state_34743[(9)]);
var inst_34726 = (state_34743[(8)]);
var inst_34723 = (state_34743[(7)]);
var inst_34730__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34723,inst_34726) : f.call(null,inst_34723,inst_34726));
var inst_34731 = cljs.core.reduced_QMARK_(inst_34730__$1);
var state_34743__$1 = (function (){var statearr_34751 = state_34743;
(statearr_34751[(9)] = inst_34730__$1);

return statearr_34751;
})();
if(inst_34731){
var statearr_34752_37002 = state_34743__$1;
(statearr_34752_37002[(1)] = (8));

} else {
var statearr_34753_37003 = state_34743__$1;
(statearr_34753_37003[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (3))){
var inst_34741 = (state_34743[(2)]);
var state_34743__$1 = state_34743;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34743__$1,inst_34741);
} else {
if((state_val_34744 === (2))){
var state_34743__$1 = state_34743;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34743__$1,(4),ch);
} else {
if((state_val_34744 === (9))){
var inst_34730 = (state_34743[(9)]);
var inst_34723 = inst_34730;
var state_34743__$1 = (function (){var statearr_34754 = state_34743;
(statearr_34754[(7)] = inst_34723);

return statearr_34754;
})();
var statearr_34755_37005 = state_34743__$1;
(statearr_34755_37005[(2)] = null);

(statearr_34755_37005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (5))){
var inst_34723 = (state_34743[(7)]);
var state_34743__$1 = state_34743;
var statearr_34756_37006 = state_34743__$1;
(statearr_34756_37006[(2)] = inst_34723);

(statearr_34756_37006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (10))){
var inst_34737 = (state_34743[(2)]);
var state_34743__$1 = state_34743;
var statearr_34760_37008 = state_34743__$1;
(statearr_34760_37008[(2)] = inst_34737);

(statearr_34760_37008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (8))){
var inst_34730 = (state_34743[(9)]);
var inst_34733 = cljs.core.deref(inst_34730);
var state_34743__$1 = state_34743;
var statearr_34761_37009 = state_34743__$1;
(statearr_34761_37009[(2)] = inst_34733);

(statearr_34761_37009[(1)] = (10));


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
var statearr_34765 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34765[(0)] = cljs$core$async$reduce_$_state_machine__34207__auto__);

(statearr_34765[(1)] = (1));

return statearr_34765;
});
var cljs$core$async$reduce_$_state_machine__34207__auto____1 = (function (state_34743){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34743);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34766){if((e34766 instanceof Object)){
var ex__34210__auto__ = e34766;
var statearr_34767_37011 = state_34743;
(statearr_34767_37011[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34766;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37013 = state_34743;
state_34743 = G__37013;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34207__auto__ = function(state_34743){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34207__auto____1.call(this,state_34743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34207__auto____0;
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34207__auto____1;
return cljs$core$async$reduce_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34769 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34769[(6)] = c__34273__auto__);

return statearr_34769;
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
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34775){
var state_val_34776 = (state_34775[(1)]);
if((state_val_34776 === (1))){
var inst_34770 = cljs.core.async.reduce(f__$1,init,ch);
var state_34775__$1 = state_34775;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34775__$1,(2),inst_34770);
} else {
if((state_val_34776 === (2))){
var inst_34772 = (state_34775[(2)]);
var inst_34773 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34772) : f__$1.call(null,inst_34772));
var state_34775__$1 = state_34775;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34775__$1,inst_34773);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34207__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34207__auto____0 = (function (){
var statearr_34777 = [null,null,null,null,null,null,null];
(statearr_34777[(0)] = cljs$core$async$transduce_$_state_machine__34207__auto__);

(statearr_34777[(1)] = (1));

return statearr_34777;
});
var cljs$core$async$transduce_$_state_machine__34207__auto____1 = (function (state_34775){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34775);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34779){if((e34779 instanceof Object)){
var ex__34210__auto__ = e34779;
var statearr_34780_37022 = state_34775;
(statearr_34780_37022[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34779;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37023 = state_34775;
state_34775 = G__37023;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34207__auto__ = function(state_34775){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34207__auto____1.call(this,state_34775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34207__auto____0;
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34207__auto____1;
return cljs$core$async$transduce_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34781 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34781[(6)] = c__34273__auto__);

return statearr_34781;
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
var G__34785 = arguments.length;
switch (G__34785) {
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
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34813){
var state_val_34814 = (state_34813[(1)]);
if((state_val_34814 === (7))){
var inst_34795 = (state_34813[(2)]);
var state_34813__$1 = state_34813;
var statearr_34815_37027 = state_34813__$1;
(statearr_34815_37027[(2)] = inst_34795);

(statearr_34815_37027[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (1))){
var inst_34789 = cljs.core.seq(coll);
var inst_34790 = inst_34789;
var state_34813__$1 = (function (){var statearr_34816 = state_34813;
(statearr_34816[(7)] = inst_34790);

return statearr_34816;
})();
var statearr_34817_37031 = state_34813__$1;
(statearr_34817_37031[(2)] = null);

(statearr_34817_37031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (4))){
var inst_34790 = (state_34813[(7)]);
var inst_34793 = cljs.core.first(inst_34790);
var state_34813__$1 = state_34813;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34813__$1,(7),ch,inst_34793);
} else {
if((state_val_34814 === (13))){
var inst_34807 = (state_34813[(2)]);
var state_34813__$1 = state_34813;
var statearr_34821_37032 = state_34813__$1;
(statearr_34821_37032[(2)] = inst_34807);

(statearr_34821_37032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (6))){
var inst_34798 = (state_34813[(2)]);
var state_34813__$1 = state_34813;
if(cljs.core.truth_(inst_34798)){
var statearr_34822_37034 = state_34813__$1;
(statearr_34822_37034[(1)] = (8));

} else {
var statearr_34823_37035 = state_34813__$1;
(statearr_34823_37035[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (3))){
var inst_34811 = (state_34813[(2)]);
var state_34813__$1 = state_34813;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34813__$1,inst_34811);
} else {
if((state_val_34814 === (12))){
var state_34813__$1 = state_34813;
var statearr_34827_37036 = state_34813__$1;
(statearr_34827_37036[(2)] = null);

(statearr_34827_37036[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (2))){
var inst_34790 = (state_34813[(7)]);
var state_34813__$1 = state_34813;
if(cljs.core.truth_(inst_34790)){
var statearr_34828_37037 = state_34813__$1;
(statearr_34828_37037[(1)] = (4));

} else {
var statearr_34829_37038 = state_34813__$1;
(statearr_34829_37038[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (11))){
var inst_34804 = cljs.core.async.close_BANG_(ch);
var state_34813__$1 = state_34813;
var statearr_34830_37039 = state_34813__$1;
(statearr_34830_37039[(2)] = inst_34804);

(statearr_34830_37039[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (9))){
var state_34813__$1 = state_34813;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34831_37040 = state_34813__$1;
(statearr_34831_37040[(1)] = (11));

} else {
var statearr_34832_37041 = state_34813__$1;
(statearr_34832_37041[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (5))){
var inst_34790 = (state_34813[(7)]);
var state_34813__$1 = state_34813;
var statearr_34833_37042 = state_34813__$1;
(statearr_34833_37042[(2)] = inst_34790);

(statearr_34833_37042[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (10))){
var inst_34809 = (state_34813[(2)]);
var state_34813__$1 = state_34813;
var statearr_34834_37043 = state_34813__$1;
(statearr_34834_37043[(2)] = inst_34809);

(statearr_34834_37043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (8))){
var inst_34790 = (state_34813[(7)]);
var inst_34800 = cljs.core.next(inst_34790);
var inst_34790__$1 = inst_34800;
var state_34813__$1 = (function (){var statearr_34835 = state_34813;
(statearr_34835[(7)] = inst_34790__$1);

return statearr_34835;
})();
var statearr_34836_37044 = state_34813__$1;
(statearr_34836_37044[(2)] = null);

(statearr_34836_37044[(1)] = (2));


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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34813){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34813);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34838){if((e34838 instanceof Object)){
var ex__34210__auto__ = e34838;
var statearr_34839_37045 = state_34813;
(statearr_34839_37045[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34838;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37046 = state_34813;
state_34813 = G__37046;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34813){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34813);
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
var c__34273__auto___37073 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34990){
var state_val_34991 = (state_34990[(1)]);
if((state_val_34991 === (7))){
var inst_34982 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_34994_37078 = state_34990__$1;
(statearr_34994_37078[(2)] = inst_34982);

(statearr_34994_37078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (20))){
var inst_34877 = (state_34990[(7)]);
var inst_34891 = cljs.core.first(inst_34877);
var inst_34892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34891,(0),null);
var inst_34893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34891,(1),null);
var state_34990__$1 = (function (){var statearr_34996 = state_34990;
(statearr_34996[(8)] = inst_34892);

return statearr_34996;
})();
if(cljs.core.truth_(inst_34893)){
var statearr_34998_37087 = state_34990__$1;
(statearr_34998_37087[(1)] = (22));

} else {
var statearr_35000_37088 = state_34990__$1;
(statearr_35000_37088[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (27))){
var inst_34846 = (state_34990[(9)]);
var inst_34924 = (state_34990[(10)]);
var inst_34926 = (state_34990[(11)]);
var inst_34932 = (state_34990[(12)]);
var inst_34932__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34924,inst_34926);
var inst_34933 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34932__$1,inst_34846,done);
var state_34990__$1 = (function (){var statearr_35002 = state_34990;
(statearr_35002[(12)] = inst_34932__$1);

return statearr_35002;
})();
if(cljs.core.truth_(inst_34933)){
var statearr_35003_37091 = state_34990__$1;
(statearr_35003_37091[(1)] = (30));

} else {
var statearr_35004_37092 = state_34990__$1;
(statearr_35004_37092[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (1))){
var state_34990__$1 = state_34990;
var statearr_35005_37095 = state_34990__$1;
(statearr_35005_37095[(2)] = null);

(statearr_35005_37095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (24))){
var inst_34877 = (state_34990[(7)]);
var inst_34899 = (state_34990[(2)]);
var inst_34900 = cljs.core.next(inst_34877);
var inst_34855 = inst_34900;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34990__$1 = (function (){var statearr_35006 = state_34990;
(statearr_35006[(13)] = inst_34857);

(statearr_35006[(14)] = inst_34856);

(statearr_35006[(15)] = inst_34858);

(statearr_35006[(16)] = inst_34899);

(statearr_35006[(17)] = inst_34855);

return statearr_35006;
})();
var statearr_35007_37103 = state_34990__$1;
(statearr_35007_37103[(2)] = null);

(statearr_35007_37103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (39))){
var state_34990__$1 = state_34990;
var statearr_35014_37106 = state_34990__$1;
(statearr_35014_37106[(2)] = null);

(statearr_35014_37106[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (4))){
var inst_34846 = (state_34990[(9)]);
var inst_34846__$1 = (state_34990[(2)]);
var inst_34847 = (inst_34846__$1 == null);
var state_34990__$1 = (function (){var statearr_35017 = state_34990;
(statearr_35017[(9)] = inst_34846__$1);

return statearr_35017;
})();
if(cljs.core.truth_(inst_34847)){
var statearr_35019_37109 = state_34990__$1;
(statearr_35019_37109[(1)] = (5));

} else {
var statearr_35020_37112 = state_34990__$1;
(statearr_35020_37112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (15))){
var inst_34857 = (state_34990[(13)]);
var inst_34856 = (state_34990[(14)]);
var inst_34858 = (state_34990[(15)]);
var inst_34855 = (state_34990[(17)]);
var inst_34873 = (state_34990[(2)]);
var inst_34874 = (inst_34858 + (1));
var tmp35008 = inst_34857;
var tmp35010 = inst_34856;
var tmp35011 = inst_34855;
var inst_34855__$1 = tmp35011;
var inst_34856__$1 = tmp35010;
var inst_34857__$1 = tmp35008;
var inst_34858__$1 = inst_34874;
var state_34990__$1 = (function (){var statearr_35021 = state_34990;
(statearr_35021[(18)] = inst_34873);

(statearr_35021[(13)] = inst_34857__$1);

(statearr_35021[(14)] = inst_34856__$1);

(statearr_35021[(15)] = inst_34858__$1);

(statearr_35021[(17)] = inst_34855__$1);

return statearr_35021;
})();
var statearr_35022_37122 = state_34990__$1;
(statearr_35022_37122[(2)] = null);

(statearr_35022_37122[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (21))){
var inst_34903 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35029_37123 = state_34990__$1;
(statearr_35029_37123[(2)] = inst_34903);

(statearr_35029_37123[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (31))){
var inst_34932 = (state_34990[(12)]);
var inst_34936 = done(null);
var inst_34937 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34932);
var state_34990__$1 = (function (){var statearr_35031 = state_34990;
(statearr_35031[(19)] = inst_34936);

return statearr_35031;
})();
var statearr_35032_37128 = state_34990__$1;
(statearr_35032_37128[(2)] = inst_34937);

(statearr_35032_37128[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (32))){
var inst_34923 = (state_34990[(20)]);
var inst_34925 = (state_34990[(21)]);
var inst_34924 = (state_34990[(10)]);
var inst_34926 = (state_34990[(11)]);
var inst_34939 = (state_34990[(2)]);
var inst_34940 = (inst_34926 + (1));
var tmp35024 = inst_34923;
var tmp35025 = inst_34925;
var tmp35026 = inst_34924;
var inst_34923__$1 = tmp35024;
var inst_34924__$1 = tmp35026;
var inst_34925__$1 = tmp35025;
var inst_34926__$1 = inst_34940;
var state_34990__$1 = (function (){var statearr_35050 = state_34990;
(statearr_35050[(20)] = inst_34923__$1);

(statearr_35050[(21)] = inst_34925__$1);

(statearr_35050[(10)] = inst_34924__$1);

(statearr_35050[(11)] = inst_34926__$1);

(statearr_35050[(22)] = inst_34939);

return statearr_35050;
})();
var statearr_35053_37130 = state_34990__$1;
(statearr_35053_37130[(2)] = null);

(statearr_35053_37130[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (40))){
var inst_34952 = (state_34990[(23)]);
var inst_34956 = done(null);
var inst_34957 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34952);
var state_34990__$1 = (function (){var statearr_35054 = state_34990;
(statearr_35054[(24)] = inst_34956);

return statearr_35054;
})();
var statearr_35056_37139 = state_34990__$1;
(statearr_35056_37139[(2)] = inst_34957);

(statearr_35056_37139[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (33))){
var inst_34943 = (state_34990[(25)]);
var inst_34945 = cljs.core.chunked_seq_QMARK_(inst_34943);
var state_34990__$1 = state_34990;
if(inst_34945){
var statearr_35062_37140 = state_34990__$1;
(statearr_35062_37140[(1)] = (36));

} else {
var statearr_35065_37141 = state_34990__$1;
(statearr_35065_37141[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (13))){
var inst_34867 = (state_34990[(26)]);
var inst_34870 = cljs.core.async.close_BANG_(inst_34867);
var state_34990__$1 = state_34990;
var statearr_35070_37147 = state_34990__$1;
(statearr_35070_37147[(2)] = inst_34870);

(statearr_35070_37147[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (22))){
var inst_34892 = (state_34990[(8)]);
var inst_34896 = cljs.core.async.close_BANG_(inst_34892);
var state_34990__$1 = state_34990;
var statearr_35073_37151 = state_34990__$1;
(statearr_35073_37151[(2)] = inst_34896);

(statearr_35073_37151[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (36))){
var inst_34943 = (state_34990[(25)]);
var inst_34947 = cljs.core.chunk_first(inst_34943);
var inst_34948 = cljs.core.chunk_rest(inst_34943);
var inst_34949 = cljs.core.count(inst_34947);
var inst_34923 = inst_34948;
var inst_34924 = inst_34947;
var inst_34925 = inst_34949;
var inst_34926 = (0);
var state_34990__$1 = (function (){var statearr_35081 = state_34990;
(statearr_35081[(20)] = inst_34923);

(statearr_35081[(21)] = inst_34925);

(statearr_35081[(10)] = inst_34924);

(statearr_35081[(11)] = inst_34926);

return statearr_35081;
})();
var statearr_35084_37154 = state_34990__$1;
(statearr_35084_37154[(2)] = null);

(statearr_35084_37154[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (41))){
var inst_34943 = (state_34990[(25)]);
var inst_34959 = (state_34990[(2)]);
var inst_34960 = cljs.core.next(inst_34943);
var inst_34923 = inst_34960;
var inst_34924 = null;
var inst_34925 = (0);
var inst_34926 = (0);
var state_34990__$1 = (function (){var statearr_35090 = state_34990;
(statearr_35090[(20)] = inst_34923);

(statearr_35090[(27)] = inst_34959);

(statearr_35090[(21)] = inst_34925);

(statearr_35090[(10)] = inst_34924);

(statearr_35090[(11)] = inst_34926);

return statearr_35090;
})();
var statearr_35095_37156 = state_34990__$1;
(statearr_35095_37156[(2)] = null);

(statearr_35095_37156[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (43))){
var state_34990__$1 = state_34990;
var statearr_35100_37159 = state_34990__$1;
(statearr_35100_37159[(2)] = null);

(statearr_35100_37159[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (29))){
var inst_34968 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35104_37161 = state_34990__$1;
(statearr_35104_37161[(2)] = inst_34968);

(statearr_35104_37161[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (44))){
var inst_34979 = (state_34990[(2)]);
var state_34990__$1 = (function (){var statearr_35111 = state_34990;
(statearr_35111[(28)] = inst_34979);

return statearr_35111;
})();
var statearr_35113_37165 = state_34990__$1;
(statearr_35113_37165[(2)] = null);

(statearr_35113_37165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (6))){
var inst_34914 = (state_34990[(29)]);
var inst_34913 = cljs.core.deref(cs);
var inst_34914__$1 = cljs.core.keys(inst_34913);
var inst_34916 = cljs.core.count(inst_34914__$1);
var inst_34917 = cljs.core.reset_BANG_(dctr,inst_34916);
var inst_34922 = cljs.core.seq(inst_34914__$1);
var inst_34923 = inst_34922;
var inst_34924 = null;
var inst_34925 = (0);
var inst_34926 = (0);
var state_34990__$1 = (function (){var statearr_35122 = state_34990;
(statearr_35122[(20)] = inst_34923);

(statearr_35122[(21)] = inst_34925);

(statearr_35122[(29)] = inst_34914__$1);

(statearr_35122[(10)] = inst_34924);

(statearr_35122[(11)] = inst_34926);

(statearr_35122[(30)] = inst_34917);

return statearr_35122;
})();
var statearr_35127_37173 = state_34990__$1;
(statearr_35127_37173[(2)] = null);

(statearr_35127_37173[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (28))){
var inst_34923 = (state_34990[(20)]);
var inst_34943 = (state_34990[(25)]);
var inst_34943__$1 = cljs.core.seq(inst_34923);
var state_34990__$1 = (function (){var statearr_35133 = state_34990;
(statearr_35133[(25)] = inst_34943__$1);

return statearr_35133;
})();
if(inst_34943__$1){
var statearr_35135_37175 = state_34990__$1;
(statearr_35135_37175[(1)] = (33));

} else {
var statearr_35137_37177 = state_34990__$1;
(statearr_35137_37177[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (25))){
var inst_34925 = (state_34990[(21)]);
var inst_34926 = (state_34990[(11)]);
var inst_34929 = (inst_34926 < inst_34925);
var inst_34930 = inst_34929;
var state_34990__$1 = state_34990;
if(cljs.core.truth_(inst_34930)){
var statearr_35145_37178 = state_34990__$1;
(statearr_35145_37178[(1)] = (27));

} else {
var statearr_35146_37181 = state_34990__$1;
(statearr_35146_37181[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (34))){
var state_34990__$1 = state_34990;
var statearr_35153_37182 = state_34990__$1;
(statearr_35153_37182[(2)] = null);

(statearr_35153_37182[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (17))){
var state_34990__$1 = state_34990;
var statearr_35154_37184 = state_34990__$1;
(statearr_35154_37184[(2)] = null);

(statearr_35154_37184[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (3))){
var inst_34984 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34990__$1,inst_34984);
} else {
if((state_val_34991 === (12))){
var inst_34909 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35155_37188 = state_34990__$1;
(statearr_35155_37188[(2)] = inst_34909);

(statearr_35155_37188[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (2))){
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34990__$1,(4),ch);
} else {
if((state_val_34991 === (23))){
var state_34990__$1 = state_34990;
var statearr_35158_37193 = state_34990__$1;
(statearr_35158_37193[(2)] = null);

(statearr_35158_37193[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (35))){
var inst_34966 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35159_37194 = state_34990__$1;
(statearr_35159_37194[(2)] = inst_34966);

(statearr_35159_37194[(1)] = (29));


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
var state_34990__$1 = (function (){var statearr_35164 = state_34990;
(statearr_35164[(13)] = inst_34857);

(statearr_35164[(14)] = inst_34856);

(statearr_35164[(15)] = inst_34858);

(statearr_35164[(17)] = inst_34855);

return statearr_35164;
})();
var statearr_35183_37198 = state_34990__$1;
(statearr_35183_37198[(2)] = null);

(statearr_35183_37198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (11))){
var inst_34855 = (state_34990[(17)]);
var inst_34877 = (state_34990[(7)]);
var inst_34877__$1 = cljs.core.seq(inst_34855);
var state_34990__$1 = (function (){var statearr_35187 = state_34990;
(statearr_35187[(7)] = inst_34877__$1);

return statearr_35187;
})();
if(inst_34877__$1){
var statearr_35188_37200 = state_34990__$1;
(statearr_35188_37200[(1)] = (16));

} else {
var statearr_35191_37202 = state_34990__$1;
(statearr_35191_37202[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (9))){
var inst_34911 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35193_37205 = state_34990__$1;
(statearr_35193_37205[(2)] = inst_34911);

(statearr_35193_37205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (5))){
var inst_34853 = cljs.core.deref(cs);
var inst_34854 = cljs.core.seq(inst_34853);
var inst_34855 = inst_34854;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34990__$1 = (function (){var statearr_35195 = state_34990;
(statearr_35195[(13)] = inst_34857);

(statearr_35195[(14)] = inst_34856);

(statearr_35195[(15)] = inst_34858);

(statearr_35195[(17)] = inst_34855);

return statearr_35195;
})();
var statearr_35196_37213 = state_34990__$1;
(statearr_35196_37213[(2)] = null);

(statearr_35196_37213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (14))){
var state_34990__$1 = state_34990;
var statearr_35198_37215 = state_34990__$1;
(statearr_35198_37215[(2)] = null);

(statearr_35198_37215[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (45))){
var inst_34976 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35204_37216 = state_34990__$1;
(statearr_35204_37216[(2)] = inst_34976);

(statearr_35204_37216[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (26))){
var inst_34914 = (state_34990[(29)]);
var inst_34970 = (state_34990[(2)]);
var inst_34973 = cljs.core.seq(inst_34914);
var state_34990__$1 = (function (){var statearr_35208 = state_34990;
(statearr_35208[(31)] = inst_34970);

return statearr_35208;
})();
if(inst_34973){
var statearr_35212_37217 = state_34990__$1;
(statearr_35212_37217[(1)] = (42));

} else {
var statearr_35215_37218 = state_34990__$1;
(statearr_35215_37218[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (16))){
var inst_34877 = (state_34990[(7)]);
var inst_34879 = cljs.core.chunked_seq_QMARK_(inst_34877);
var state_34990__$1 = state_34990;
if(inst_34879){
var statearr_35222_37225 = state_34990__$1;
(statearr_35222_37225[(1)] = (19));

} else {
var statearr_35224_37226 = state_34990__$1;
(statearr_35224_37226[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (38))){
var inst_34963 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35231_37227 = state_34990__$1;
(statearr_35231_37227[(2)] = inst_34963);

(statearr_35231_37227[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (30))){
var state_34990__$1 = state_34990;
var statearr_35233_37228 = state_34990__$1;
(statearr_35233_37228[(2)] = null);

(statearr_35233_37228[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (10))){
var inst_34856 = (state_34990[(14)]);
var inst_34858 = (state_34990[(15)]);
var inst_34866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34856,inst_34858);
var inst_34867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(0),null);
var inst_34868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(1),null);
var state_34990__$1 = (function (){var statearr_35241 = state_34990;
(statearr_35241[(26)] = inst_34867);

return statearr_35241;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_35244_37233 = state_34990__$1;
(statearr_35244_37233[(1)] = (13));

} else {
var statearr_35247_37234 = state_34990__$1;
(statearr_35247_37234[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (18))){
var inst_34907 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35250_37239 = state_34990__$1;
(statearr_35250_37239[(2)] = inst_34907);

(statearr_35250_37239[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (42))){
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34990__$1,(45),dchan);
} else {
if((state_val_34991 === (37))){
var inst_34952 = (state_34990[(23)]);
var inst_34846 = (state_34990[(9)]);
var inst_34943 = (state_34990[(25)]);
var inst_34952__$1 = cljs.core.first(inst_34943);
var inst_34953 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34952__$1,inst_34846,done);
var state_34990__$1 = (function (){var statearr_35260 = state_34990;
(statearr_35260[(23)] = inst_34952__$1);

return statearr_35260;
})();
if(cljs.core.truth_(inst_34953)){
var statearr_35262_37247 = state_34990__$1;
(statearr_35262_37247[(1)] = (39));

} else {
var statearr_35264_37248 = state_34990__$1;
(statearr_35264_37248[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (8))){
var inst_34857 = (state_34990[(13)]);
var inst_34858 = (state_34990[(15)]);
var inst_34860 = (inst_34858 < inst_34857);
var inst_34861 = inst_34860;
var state_34990__$1 = state_34990;
if(cljs.core.truth_(inst_34861)){
var statearr_35270_37252 = state_34990__$1;
(statearr_35270_37252[(1)] = (10));

} else {
var statearr_35272_37253 = state_34990__$1;
(statearr_35272_37253[(1)] = (11));

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
var statearr_35283 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35283[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35283[(1)] = (1));

return statearr_35283;
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
}catch (e35286){if((e35286 instanceof Object)){
var ex__34210__auto__ = e35286;
var statearr_35289_37263 = state_34990;
(statearr_35289_37263[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35286;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37265 = state_34990;
state_34990 = G__37265;
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
var state__34275__auto__ = (function (){var statearr_35297 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_35297[(6)] = c__34273__auto___37073);

return statearr_35297;
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
var G__35307 = arguments.length;
switch (G__35307) {
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
var len__4789__auto___37297 = arguments.length;
var i__4790__auto___37298 = (0);
while(true){
if((i__4790__auto___37298 < len__4789__auto___37297)){
args__4795__auto__.push((arguments[i__4790__auto___37298]));

var G__37302 = (i__4790__auto___37298 + (1));
i__4790__auto___37298 = G__37302;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35383){
var map__35387 = p__35383;
var map__35387__$1 = (((((!((map__35387 == null))))?(((((map__35387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35387):map__35387);
var opts = map__35387__$1;
var statearr_35393_37308 = state;
(statearr_35393_37308[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35397_37311 = state;
(statearr_35397_37311[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35398_37313 = state;
(statearr_35398_37313[(2)] = cljs.core.deref(cb));


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
var G__35372 = cljs.core.first(seq35370__$1);
var seq35370__$2 = cljs.core.next(seq35370__$1);
var G__35373 = cljs.core.first(seq35370__$2);
var seq35370__$3 = cljs.core.next(seq35370__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35371,G__35372,G__35373,seq35370__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35424 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35424 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35425){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35425 = meta35425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35426,meta35425__$1){
var self__ = this;
var _35426__$1 = this;
return (new cljs.core.async.t_cljs$core$async35424(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35425__$1));
}));

(cljs.core.async.t_cljs$core$async35424.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35426){
var self__ = this;
var _35426__$1 = this;
return self__.meta35425;
}));

(cljs.core.async.t_cljs$core$async35424.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35424.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35424.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35424.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35424.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35424.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35424.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35424.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35424.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35425","meta35425",1562716440,null)], null);
}));

(cljs.core.async.t_cljs$core$async35424.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35424.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35424");

(cljs.core.async.t_cljs$core$async35424.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35424");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35424.
 */
cljs.core.async.__GT_t_cljs$core$async35424 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35424(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35425){
return (new cljs.core.async.t_cljs$core$async35424(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35425));
});

}

return (new cljs.core.async.t_cljs$core$async35424(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34273__auto___37348 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_35623){
var state_val_35625 = (state_35623[(1)]);
if((state_val_35625 === (7))){
var inst_35496 = (state_35623[(2)]);
var state_35623__$1 = state_35623;
var statearr_35642_37350 = state_35623__$1;
(statearr_35642_37350[(2)] = inst_35496);

(statearr_35642_37350[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (20))){
var inst_35512 = (state_35623[(7)]);
var state_35623__$1 = state_35623;
var statearr_35647_37354 = state_35623__$1;
(statearr_35647_37354[(2)] = inst_35512);

(statearr_35647_37354[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (27))){
var state_35623__$1 = state_35623;
var statearr_35650_37357 = state_35623__$1;
(statearr_35650_37357[(2)] = null);

(statearr_35650_37357[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (1))){
var inst_35477 = (state_35623[(8)]);
var inst_35477__$1 = calc_state();
var inst_35483 = (inst_35477__$1 == null);
var inst_35484 = cljs.core.not(inst_35483);
var state_35623__$1 = (function (){var statearr_35660 = state_35623;
(statearr_35660[(8)] = inst_35477__$1);

return statearr_35660;
})();
if(inst_35484){
var statearr_35662_37363 = state_35623__$1;
(statearr_35662_37363[(1)] = (2));

} else {
var statearr_35663_37364 = state_35623__$1;
(statearr_35663_37364[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (24))){
var inst_35546 = (state_35623[(9)]);
var inst_35560 = (state_35623[(10)]);
var inst_35589 = (state_35623[(11)]);
var inst_35589__$1 = (inst_35546.cljs$core$IFn$_invoke$arity$1 ? inst_35546.cljs$core$IFn$_invoke$arity$1(inst_35560) : inst_35546.call(null,inst_35560));
var state_35623__$1 = (function (){var statearr_35669 = state_35623;
(statearr_35669[(11)] = inst_35589__$1);

return statearr_35669;
})();
if(cljs.core.truth_(inst_35589__$1)){
var statearr_35672_37369 = state_35623__$1;
(statearr_35672_37369[(1)] = (29));

} else {
var statearr_35675_37373 = state_35623__$1;
(statearr_35675_37373[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (4))){
var inst_35499 = (state_35623[(2)]);
var state_35623__$1 = state_35623;
if(cljs.core.truth_(inst_35499)){
var statearr_35684_37377 = state_35623__$1;
(statearr_35684_37377[(1)] = (8));

} else {
var statearr_35685_37380 = state_35623__$1;
(statearr_35685_37380[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (15))){
var inst_35540 = (state_35623[(2)]);
var state_35623__$1 = state_35623;
if(cljs.core.truth_(inst_35540)){
var statearr_35686_37384 = state_35623__$1;
(statearr_35686_37384[(1)] = (19));

} else {
var statearr_35687_37385 = state_35623__$1;
(statearr_35687_37385[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (21))){
var inst_35545 = (state_35623[(12)]);
var inst_35545__$1 = (state_35623[(2)]);
var inst_35546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35545__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35545__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35545__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35623__$1 = (function (){var statearr_35688 = state_35623;
(statearr_35688[(12)] = inst_35545__$1);

(statearr_35688[(9)] = inst_35546);

(statearr_35688[(13)] = inst_35547);

return statearr_35688;
})();
return cljs.core.async.ioc_alts_BANG_(state_35623__$1,(22),inst_35548);
} else {
if((state_val_35625 === (31))){
var inst_35599 = (state_35623[(2)]);
var state_35623__$1 = state_35623;
if(cljs.core.truth_(inst_35599)){
var statearr_35689_37395 = state_35623__$1;
(statearr_35689_37395[(1)] = (32));

} else {
var statearr_35690_37396 = state_35623__$1;
(statearr_35690_37396[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (32))){
var inst_35558 = (state_35623[(14)]);
var state_35623__$1 = state_35623;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35623__$1,(35),out,inst_35558);
} else {
if((state_val_35625 === (33))){
var inst_35545 = (state_35623[(12)]);
var inst_35512 = inst_35545;
var state_35623__$1 = (function (){var statearr_35693 = state_35623;
(statearr_35693[(7)] = inst_35512);

return statearr_35693;
})();
var statearr_35694_37401 = state_35623__$1;
(statearr_35694_37401[(2)] = null);

(statearr_35694_37401[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (13))){
var inst_35512 = (state_35623[(7)]);
var inst_35528 = inst_35512.cljs$lang$protocol_mask$partition0$;
var inst_35529 = (inst_35528 & (64));
var inst_35530 = inst_35512.cljs$core$ISeq$;
var inst_35531 = (cljs.core.PROTOCOL_SENTINEL === inst_35530);
var inst_35532 = ((inst_35529) || (inst_35531));
var state_35623__$1 = state_35623;
if(cljs.core.truth_(inst_35532)){
var statearr_35695_37407 = state_35623__$1;
(statearr_35695_37407[(1)] = (16));

} else {
var statearr_35696_37409 = state_35623__$1;
(statearr_35696_37409[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (22))){
var inst_35558 = (state_35623[(14)]);
var inst_35560 = (state_35623[(10)]);
var inst_35556 = (state_35623[(2)]);
var inst_35558__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35556,(0),null);
var inst_35560__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35556,(1),null);
var inst_35561 = (inst_35558__$1 == null);
var inst_35563 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35560__$1,change);
var inst_35564 = ((inst_35561) || (inst_35563));
var state_35623__$1 = (function (){var statearr_35699 = state_35623;
(statearr_35699[(14)] = inst_35558__$1);

(statearr_35699[(10)] = inst_35560__$1);

return statearr_35699;
})();
if(cljs.core.truth_(inst_35564)){
var statearr_35700_37417 = state_35623__$1;
(statearr_35700_37417[(1)] = (23));

} else {
var statearr_35701_37420 = state_35623__$1;
(statearr_35701_37420[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (36))){
var inst_35545 = (state_35623[(12)]);
var inst_35512 = inst_35545;
var state_35623__$1 = (function (){var statearr_35702 = state_35623;
(statearr_35702[(7)] = inst_35512);

return statearr_35702;
})();
var statearr_35703_37423 = state_35623__$1;
(statearr_35703_37423[(2)] = null);

(statearr_35703_37423[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (29))){
var inst_35589 = (state_35623[(11)]);
var state_35623__$1 = state_35623;
var statearr_35704_37425 = state_35623__$1;
(statearr_35704_37425[(2)] = inst_35589);

(statearr_35704_37425[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (6))){
var state_35623__$1 = state_35623;
var statearr_35707_37427 = state_35623__$1;
(statearr_35707_37427[(2)] = false);

(statearr_35707_37427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (28))){
var inst_35582 = (state_35623[(2)]);
var inst_35584 = calc_state();
var inst_35512 = inst_35584;
var state_35623__$1 = (function (){var statearr_35710 = state_35623;
(statearr_35710[(15)] = inst_35582);

(statearr_35710[(7)] = inst_35512);

return statearr_35710;
})();
var statearr_35713_37433 = state_35623__$1;
(statearr_35713_37433[(2)] = null);

(statearr_35713_37433[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (25))){
var inst_35616 = (state_35623[(2)]);
var state_35623__$1 = state_35623;
var statearr_35716_37435 = state_35623__$1;
(statearr_35716_37435[(2)] = inst_35616);

(statearr_35716_37435[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (34))){
var inst_35614 = (state_35623[(2)]);
var state_35623__$1 = state_35623;
var statearr_35717_37437 = state_35623__$1;
(statearr_35717_37437[(2)] = inst_35614);

(statearr_35717_37437[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (17))){
var state_35623__$1 = state_35623;
var statearr_35718_37443 = state_35623__$1;
(statearr_35718_37443[(2)] = false);

(statearr_35718_37443[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (3))){
var state_35623__$1 = state_35623;
var statearr_35719_37445 = state_35623__$1;
(statearr_35719_37445[(2)] = false);

(statearr_35719_37445[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (12))){
var inst_35618 = (state_35623[(2)]);
var state_35623__$1 = state_35623;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35623__$1,inst_35618);
} else {
if((state_val_35625 === (2))){
var inst_35477 = (state_35623[(8)]);
var inst_35487 = inst_35477.cljs$lang$protocol_mask$partition0$;
var inst_35488 = (inst_35487 & (64));
var inst_35489 = inst_35477.cljs$core$ISeq$;
var inst_35490 = (cljs.core.PROTOCOL_SENTINEL === inst_35489);
var inst_35491 = ((inst_35488) || (inst_35490));
var state_35623__$1 = state_35623;
if(cljs.core.truth_(inst_35491)){
var statearr_35724_37450 = state_35623__$1;
(statearr_35724_37450[(1)] = (5));

} else {
var statearr_35725_37451 = state_35623__$1;
(statearr_35725_37451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (23))){
var inst_35558 = (state_35623[(14)]);
var inst_35567 = (inst_35558 == null);
var state_35623__$1 = state_35623;
if(cljs.core.truth_(inst_35567)){
var statearr_35726_37453 = state_35623__$1;
(statearr_35726_37453[(1)] = (26));

} else {
var statearr_35729_37456 = state_35623__$1;
(statearr_35729_37456[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (35))){
var inst_35603 = (state_35623[(2)]);
var state_35623__$1 = state_35623;
if(cljs.core.truth_(inst_35603)){
var statearr_35732_37458 = state_35623__$1;
(statearr_35732_37458[(1)] = (36));

} else {
var statearr_35733_37459 = state_35623__$1;
(statearr_35733_37459[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (19))){
var inst_35512 = (state_35623[(7)]);
var inst_35542 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35512);
var state_35623__$1 = state_35623;
var statearr_35735_37460 = state_35623__$1;
(statearr_35735_37460[(2)] = inst_35542);

(statearr_35735_37460[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (11))){
var inst_35512 = (state_35623[(7)]);
var inst_35517 = (inst_35512 == null);
var inst_35518 = cljs.core.not(inst_35517);
var state_35623__$1 = state_35623;
if(inst_35518){
var statearr_35736_37468 = state_35623__$1;
(statearr_35736_37468[(1)] = (13));

} else {
var statearr_35738_37469 = state_35623__$1;
(statearr_35738_37469[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (9))){
var inst_35477 = (state_35623[(8)]);
var state_35623__$1 = state_35623;
var statearr_35739_37470 = state_35623__$1;
(statearr_35739_37470[(2)] = inst_35477);

(statearr_35739_37470[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (5))){
var state_35623__$1 = state_35623;
var statearr_35740_37472 = state_35623__$1;
(statearr_35740_37472[(2)] = true);

(statearr_35740_37472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (14))){
var state_35623__$1 = state_35623;
var statearr_35742_37474 = state_35623__$1;
(statearr_35742_37474[(2)] = false);

(statearr_35742_37474[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (26))){
var inst_35560 = (state_35623[(10)]);
var inst_35579 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35560);
var state_35623__$1 = state_35623;
var statearr_35743_37479 = state_35623__$1;
(statearr_35743_37479[(2)] = inst_35579);

(statearr_35743_37479[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (16))){
var state_35623__$1 = state_35623;
var statearr_35745_37480 = state_35623__$1;
(statearr_35745_37480[(2)] = true);

(statearr_35745_37480[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (38))){
var inst_35610 = (state_35623[(2)]);
var state_35623__$1 = state_35623;
var statearr_35747_37484 = state_35623__$1;
(statearr_35747_37484[(2)] = inst_35610);

(statearr_35747_37484[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (30))){
var inst_35546 = (state_35623[(9)]);
var inst_35547 = (state_35623[(13)]);
var inst_35560 = (state_35623[(10)]);
var inst_35594 = cljs.core.empty_QMARK_(inst_35546);
var inst_35595 = (inst_35547.cljs$core$IFn$_invoke$arity$1 ? inst_35547.cljs$core$IFn$_invoke$arity$1(inst_35560) : inst_35547.call(null,inst_35560));
var inst_35596 = cljs.core.not(inst_35595);
var inst_35597 = ((inst_35594) && (inst_35596));
var state_35623__$1 = state_35623;
var statearr_35749_37486 = state_35623__$1;
(statearr_35749_37486[(2)] = inst_35597);

(statearr_35749_37486[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (10))){
var inst_35477 = (state_35623[(8)]);
var inst_35506 = (state_35623[(2)]);
var inst_35507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35506,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35506,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35509 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35506,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35512 = inst_35477;
var state_35623__$1 = (function (){var statearr_35751 = state_35623;
(statearr_35751[(16)] = inst_35508);

(statearr_35751[(17)] = inst_35507);

(statearr_35751[(7)] = inst_35512);

(statearr_35751[(18)] = inst_35509);

return statearr_35751;
})();
var statearr_35755_37494 = state_35623__$1;
(statearr_35755_37494[(2)] = null);

(statearr_35755_37494[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (18))){
var inst_35536 = (state_35623[(2)]);
var state_35623__$1 = state_35623;
var statearr_35758_37495 = state_35623__$1;
(statearr_35758_37495[(2)] = inst_35536);

(statearr_35758_37495[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (37))){
var state_35623__$1 = state_35623;
var statearr_35760_37498 = state_35623__$1;
(statearr_35760_37498[(2)] = null);

(statearr_35760_37498[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35625 === (8))){
var inst_35477 = (state_35623[(8)]);
var inst_35503 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35477);
var state_35623__$1 = state_35623;
var statearr_35764_37503 = state_35623__$1;
(statearr_35764_37503[(2)] = inst_35503);

(statearr_35764_37503[(1)] = (10));


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
var statearr_35766 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35766[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35766[(1)] = (1));

return statearr_35766;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35623){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35623);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35773){if((e35773 instanceof Object)){
var ex__34210__auto__ = e35773;
var statearr_35775_37510 = state_35623;
(statearr_35775_37510[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35773;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37517 = state_35623;
state_35623 = G__37517;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35623){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_35784 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_35784[(6)] = c__34273__auto___37348);

return statearr_35784;
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
var G__35823 = arguments.length;
switch (G__35823) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35818_SHARP_){
if(cljs.core.truth_((p1__35818_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35818_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35818_SHARP_.call(null,topic)))){
return p1__35818_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35818_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35833 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35833 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35834){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35834 = meta35834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35835,meta35834__$1){
var self__ = this;
var _35835__$1 = this;
return (new cljs.core.async.t_cljs$core$async35833(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35834__$1));
}));

(cljs.core.async.t_cljs$core$async35833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35835){
var self__ = this;
var _35835__$1 = this;
return self__.meta35834;
}));

(cljs.core.async.t_cljs$core$async35833.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35833.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35833.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35833.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35833.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35833.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35833.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35833.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35834","meta35834",736940433,null)], null);
}));

(cljs.core.async.t_cljs$core$async35833.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35833.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35833");

(cljs.core.async.t_cljs$core$async35833.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35833");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35833.
 */
cljs.core.async.__GT_t_cljs$core$async35833 = (function cljs$core$async$__GT_t_cljs$core$async35833(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35834){
return (new cljs.core.async.t_cljs$core$async35833(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35834));
});

}

return (new cljs.core.async.t_cljs$core$async35833(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34273__auto___37612 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_35938){
var state_val_35939 = (state_35938[(1)]);
if((state_val_35939 === (7))){
var inst_35934 = (state_35938[(2)]);
var state_35938__$1 = state_35938;
var statearr_35942_37614 = state_35938__$1;
(statearr_35942_37614[(2)] = inst_35934);

(statearr_35942_37614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (20))){
var state_35938__$1 = state_35938;
var statearr_35944_37624 = state_35938__$1;
(statearr_35944_37624[(2)] = null);

(statearr_35944_37624[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (1))){
var state_35938__$1 = state_35938;
var statearr_35946_37627 = state_35938__$1;
(statearr_35946_37627[(2)] = null);

(statearr_35946_37627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (24))){
var inst_35914 = (state_35938[(7)]);
var inst_35925 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35914);
var state_35938__$1 = state_35938;
var statearr_35950_37630 = state_35938__$1;
(statearr_35950_37630[(2)] = inst_35925);

(statearr_35950_37630[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (4))){
var inst_35861 = (state_35938[(8)]);
var inst_35861__$1 = (state_35938[(2)]);
var inst_35862 = (inst_35861__$1 == null);
var state_35938__$1 = (function (){var statearr_35951 = state_35938;
(statearr_35951[(8)] = inst_35861__$1);

return statearr_35951;
})();
if(cljs.core.truth_(inst_35862)){
var statearr_35952_37639 = state_35938__$1;
(statearr_35952_37639[(1)] = (5));

} else {
var statearr_35955_37640 = state_35938__$1;
(statearr_35955_37640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (15))){
var inst_35907 = (state_35938[(2)]);
var state_35938__$1 = state_35938;
var statearr_35957_37642 = state_35938__$1;
(statearr_35957_37642[(2)] = inst_35907);

(statearr_35957_37642[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (21))){
var inst_35930 = (state_35938[(2)]);
var state_35938__$1 = (function (){var statearr_35960 = state_35938;
(statearr_35960[(9)] = inst_35930);

return statearr_35960;
})();
var statearr_35962_37648 = state_35938__$1;
(statearr_35962_37648[(2)] = null);

(statearr_35962_37648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (13))){
var inst_35886 = (state_35938[(10)]);
var inst_35888 = cljs.core.chunked_seq_QMARK_(inst_35886);
var state_35938__$1 = state_35938;
if(inst_35888){
var statearr_35964_37655 = state_35938__$1;
(statearr_35964_37655[(1)] = (16));

} else {
var statearr_35966_37656 = state_35938__$1;
(statearr_35966_37656[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (22))){
var inst_35921 = (state_35938[(2)]);
var state_35938__$1 = state_35938;
if(cljs.core.truth_(inst_35921)){
var statearr_35968_37659 = state_35938__$1;
(statearr_35968_37659[(1)] = (23));

} else {
var statearr_35971_37660 = state_35938__$1;
(statearr_35971_37660[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (6))){
var inst_35861 = (state_35938[(8)]);
var inst_35914 = (state_35938[(7)]);
var inst_35916 = (state_35938[(11)]);
var inst_35914__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35861) : topic_fn.call(null,inst_35861));
var inst_35915 = cljs.core.deref(mults);
var inst_35916__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35915,inst_35914__$1);
var state_35938__$1 = (function (){var statearr_35974 = state_35938;
(statearr_35974[(7)] = inst_35914__$1);

(statearr_35974[(11)] = inst_35916__$1);

return statearr_35974;
})();
if(cljs.core.truth_(inst_35916__$1)){
var statearr_35976_37670 = state_35938__$1;
(statearr_35976_37670[(1)] = (19));

} else {
var statearr_35978_37671 = state_35938__$1;
(statearr_35978_37671[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (25))){
var inst_35927 = (state_35938[(2)]);
var state_35938__$1 = state_35938;
var statearr_35980_37677 = state_35938__$1;
(statearr_35980_37677[(2)] = inst_35927);

(statearr_35980_37677[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (17))){
var inst_35886 = (state_35938[(10)]);
var inst_35897 = cljs.core.first(inst_35886);
var inst_35899 = cljs.core.async.muxch_STAR_(inst_35897);
var inst_35900 = cljs.core.async.close_BANG_(inst_35899);
var inst_35901 = cljs.core.next(inst_35886);
var inst_35871 = inst_35901;
var inst_35872 = null;
var inst_35873 = (0);
var inst_35874 = (0);
var state_35938__$1 = (function (){var statearr_35981 = state_35938;
(statearr_35981[(12)] = inst_35872);

(statearr_35981[(13)] = inst_35873);

(statearr_35981[(14)] = inst_35871);

(statearr_35981[(15)] = inst_35900);

(statearr_35981[(16)] = inst_35874);

return statearr_35981;
})();
var statearr_35982_37690 = state_35938__$1;
(statearr_35982_37690[(2)] = null);

(statearr_35982_37690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (3))){
var inst_35936 = (state_35938[(2)]);
var state_35938__$1 = state_35938;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35938__$1,inst_35936);
} else {
if((state_val_35939 === (12))){
var inst_35909 = (state_35938[(2)]);
var state_35938__$1 = state_35938;
var statearr_35986_37695 = state_35938__$1;
(statearr_35986_37695[(2)] = inst_35909);

(statearr_35986_37695[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (2))){
var state_35938__$1 = state_35938;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35938__$1,(4),ch);
} else {
if((state_val_35939 === (23))){
var state_35938__$1 = state_35938;
var statearr_35987_37698 = state_35938__$1;
(statearr_35987_37698[(2)] = null);

(statearr_35987_37698[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (19))){
var inst_35861 = (state_35938[(8)]);
var inst_35916 = (state_35938[(11)]);
var inst_35919 = cljs.core.async.muxch_STAR_(inst_35916);
var state_35938__$1 = state_35938;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35938__$1,(22),inst_35919,inst_35861);
} else {
if((state_val_35939 === (11))){
var inst_35886 = (state_35938[(10)]);
var inst_35871 = (state_35938[(14)]);
var inst_35886__$1 = cljs.core.seq(inst_35871);
var state_35938__$1 = (function (){var statearr_35991 = state_35938;
(statearr_35991[(10)] = inst_35886__$1);

return statearr_35991;
})();
if(inst_35886__$1){
var statearr_35992_37710 = state_35938__$1;
(statearr_35992_37710[(1)] = (13));

} else {
var statearr_35993_37712 = state_35938__$1;
(statearr_35993_37712[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (9))){
var inst_35911 = (state_35938[(2)]);
var state_35938__$1 = state_35938;
var statearr_35997_37717 = state_35938__$1;
(statearr_35997_37717[(2)] = inst_35911);

(statearr_35997_37717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (5))){
var inst_35868 = cljs.core.deref(mults);
var inst_35869 = cljs.core.vals(inst_35868);
var inst_35870 = cljs.core.seq(inst_35869);
var inst_35871 = inst_35870;
var inst_35872 = null;
var inst_35873 = (0);
var inst_35874 = (0);
var state_35938__$1 = (function (){var statearr_35998 = state_35938;
(statearr_35998[(12)] = inst_35872);

(statearr_35998[(13)] = inst_35873);

(statearr_35998[(14)] = inst_35871);

(statearr_35998[(16)] = inst_35874);

return statearr_35998;
})();
var statearr_35999_37723 = state_35938__$1;
(statearr_35999_37723[(2)] = null);

(statearr_35999_37723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (14))){
var state_35938__$1 = state_35938;
var statearr_36008_37729 = state_35938__$1;
(statearr_36008_37729[(2)] = null);

(statearr_36008_37729[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (16))){
var inst_35886 = (state_35938[(10)]);
var inst_35892 = cljs.core.chunk_first(inst_35886);
var inst_35893 = cljs.core.chunk_rest(inst_35886);
var inst_35894 = cljs.core.count(inst_35892);
var inst_35871 = inst_35893;
var inst_35872 = inst_35892;
var inst_35873 = inst_35894;
var inst_35874 = (0);
var state_35938__$1 = (function (){var statearr_36011 = state_35938;
(statearr_36011[(12)] = inst_35872);

(statearr_36011[(13)] = inst_35873);

(statearr_36011[(14)] = inst_35871);

(statearr_36011[(16)] = inst_35874);

return statearr_36011;
})();
var statearr_36015_37735 = state_35938__$1;
(statearr_36015_37735[(2)] = null);

(statearr_36015_37735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (10))){
var inst_35872 = (state_35938[(12)]);
var inst_35873 = (state_35938[(13)]);
var inst_35871 = (state_35938[(14)]);
var inst_35874 = (state_35938[(16)]);
var inst_35880 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35872,inst_35874);
var inst_35881 = cljs.core.async.muxch_STAR_(inst_35880);
var inst_35882 = cljs.core.async.close_BANG_(inst_35881);
var inst_35883 = (inst_35874 + (1));
var tmp36003 = inst_35872;
var tmp36004 = inst_35873;
var tmp36005 = inst_35871;
var inst_35871__$1 = tmp36005;
var inst_35872__$1 = tmp36003;
var inst_35873__$1 = tmp36004;
var inst_35874__$1 = inst_35883;
var state_35938__$1 = (function (){var statearr_36021 = state_35938;
(statearr_36021[(12)] = inst_35872__$1);

(statearr_36021[(17)] = inst_35882);

(statearr_36021[(13)] = inst_35873__$1);

(statearr_36021[(14)] = inst_35871__$1);

(statearr_36021[(16)] = inst_35874__$1);

return statearr_36021;
})();
var statearr_36023_37739 = state_35938__$1;
(statearr_36023_37739[(2)] = null);

(statearr_36023_37739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (18))){
var inst_35904 = (state_35938[(2)]);
var state_35938__$1 = state_35938;
var statearr_36027_37740 = state_35938__$1;
(statearr_36027_37740[(2)] = inst_35904);

(statearr_36027_37740[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (8))){
var inst_35873 = (state_35938[(13)]);
var inst_35874 = (state_35938[(16)]);
var inst_35877 = (inst_35874 < inst_35873);
var inst_35878 = inst_35877;
var state_35938__$1 = state_35938;
if(cljs.core.truth_(inst_35878)){
var statearr_36031_37743 = state_35938__$1;
(statearr_36031_37743[(1)] = (10));

} else {
var statearr_36033_37744 = state_35938__$1;
(statearr_36033_37744[(1)] = (11));

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
var statearr_36034 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36034[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36034[(1)] = (1));

return statearr_36034;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35938){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35938);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36035){if((e36035 instanceof Object)){
var ex__34210__auto__ = e36035;
var statearr_36036_37752 = state_35938;
(statearr_36036_37752[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36035;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37753 = state_35938;
state_35938 = G__37753;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36041 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36041[(6)] = c__34273__auto___37612);

return statearr_36041;
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
var G__36045 = arguments.length;
switch (G__36045) {
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
var c__34273__auto___37777 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36096){
var state_val_36097 = (state_36096[(1)]);
if((state_val_36097 === (7))){
var state_36096__$1 = state_36096;
var statearr_36100_37786 = state_36096__$1;
(statearr_36100_37786[(2)] = null);

(statearr_36100_37786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36097 === (1))){
var state_36096__$1 = state_36096;
var statearr_36104_37789 = state_36096__$1;
(statearr_36104_37789[(2)] = null);

(statearr_36104_37789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36097 === (4))){
var inst_36057 = (state_36096[(7)]);
var inst_36059 = (inst_36057 < cnt);
var state_36096__$1 = state_36096;
if(cljs.core.truth_(inst_36059)){
var statearr_36105_37791 = state_36096__$1;
(statearr_36105_37791[(1)] = (6));

} else {
var statearr_36107_37792 = state_36096__$1;
(statearr_36107_37792[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36097 === (15))){
var inst_36091 = (state_36096[(2)]);
var state_36096__$1 = state_36096;
var statearr_36108_37799 = state_36096__$1;
(statearr_36108_37799[(2)] = inst_36091);

(statearr_36108_37799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36097 === (13))){
var inst_36084 = cljs.core.async.close_BANG_(out);
var state_36096__$1 = state_36096;
var statearr_36109_37802 = state_36096__$1;
(statearr_36109_37802[(2)] = inst_36084);

(statearr_36109_37802[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36097 === (6))){
var state_36096__$1 = state_36096;
var statearr_36111_37803 = state_36096__$1;
(statearr_36111_37803[(2)] = null);

(statearr_36111_37803[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36097 === (3))){
var inst_36093 = (state_36096[(2)]);
var state_36096__$1 = state_36096;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36096__$1,inst_36093);
} else {
if((state_val_36097 === (12))){
var inst_36081 = (state_36096[(8)]);
var inst_36081__$1 = (state_36096[(2)]);
var inst_36082 = cljs.core.some(cljs.core.nil_QMARK_,inst_36081__$1);
var state_36096__$1 = (function (){var statearr_36120 = state_36096;
(statearr_36120[(8)] = inst_36081__$1);

return statearr_36120;
})();
if(cljs.core.truth_(inst_36082)){
var statearr_36123_37812 = state_36096__$1;
(statearr_36123_37812[(1)] = (13));

} else {
var statearr_36126_37813 = state_36096__$1;
(statearr_36126_37813[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36097 === (2))){
var inst_36056 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36057 = (0);
var state_36096__$1 = (function (){var statearr_36127 = state_36096;
(statearr_36127[(7)] = inst_36057);

(statearr_36127[(9)] = inst_36056);

return statearr_36127;
})();
var statearr_36128_37822 = state_36096__$1;
(statearr_36128_37822[(2)] = null);

(statearr_36128_37822[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36097 === (11))){
var inst_36057 = (state_36096[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36096,(10),Object,null,(9));
var inst_36068 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36057) : chs__$1.call(null,inst_36057));
var inst_36069 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36057) : done.call(null,inst_36057));
var inst_36070 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36068,inst_36069);
var state_36096__$1 = state_36096;
var statearr_36129_37826 = state_36096__$1;
(statearr_36129_37826[(2)] = inst_36070);


cljs.core.async.impl.ioc_helpers.process_exception(state_36096__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36097 === (9))){
var inst_36057 = (state_36096[(7)]);
var inst_36072 = (state_36096[(2)]);
var inst_36073 = (inst_36057 + (1));
var inst_36057__$1 = inst_36073;
var state_36096__$1 = (function (){var statearr_36130 = state_36096;
(statearr_36130[(7)] = inst_36057__$1);

(statearr_36130[(10)] = inst_36072);

return statearr_36130;
})();
var statearr_36131_37832 = state_36096__$1;
(statearr_36131_37832[(2)] = null);

(statearr_36131_37832[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36097 === (5))){
var inst_36079 = (state_36096[(2)]);
var state_36096__$1 = (function (){var statearr_36132 = state_36096;
(statearr_36132[(11)] = inst_36079);

return statearr_36132;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36096__$1,(12),dchan);
} else {
if((state_val_36097 === (14))){
var inst_36081 = (state_36096[(8)]);
var inst_36086 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36081);
var state_36096__$1 = state_36096;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36096__$1,(16),out,inst_36086);
} else {
if((state_val_36097 === (16))){
var inst_36088 = (state_36096[(2)]);
var state_36096__$1 = (function (){var statearr_36133 = state_36096;
(statearr_36133[(12)] = inst_36088);

return statearr_36133;
})();
var statearr_36134_37838 = state_36096__$1;
(statearr_36134_37838[(2)] = null);

(statearr_36134_37838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36097 === (10))){
var inst_36062 = (state_36096[(2)]);
var inst_36063 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36096__$1 = (function (){var statearr_36135 = state_36096;
(statearr_36135[(13)] = inst_36062);

return statearr_36135;
})();
var statearr_36136_37846 = state_36096__$1;
(statearr_36136_37846[(2)] = inst_36063);


cljs.core.async.impl.ioc_helpers.process_exception(state_36096__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36097 === (8))){
var inst_36077 = (state_36096[(2)]);
var state_36096__$1 = state_36096;
var statearr_36137_37848 = state_36096__$1;
(statearr_36137_37848[(2)] = inst_36077);

(statearr_36137_37848[(1)] = (5));


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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36096){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36096);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36139){if((e36139 instanceof Object)){
var ex__34210__auto__ = e36139;
var statearr_36140_37859 = state_36096;
(statearr_36140_37859[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36139;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37860 = state_36096;
state_36096 = G__37860;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36145 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36145[(6)] = c__34273__auto___37777);

return statearr_36145;
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
var G__36150 = arguments.length;
switch (G__36150) {
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
var c__34273__auto___37868 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36182){
var state_val_36183 = (state_36182[(1)]);
if((state_val_36183 === (7))){
var inst_36162 = (state_36182[(7)]);
var inst_36161 = (state_36182[(8)]);
var inst_36161__$1 = (state_36182[(2)]);
var inst_36162__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36161__$1,(0),null);
var inst_36163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36161__$1,(1),null);
var inst_36164 = (inst_36162__$1 == null);
var state_36182__$1 = (function (){var statearr_36184 = state_36182;
(statearr_36184[(7)] = inst_36162__$1);

(statearr_36184[(8)] = inst_36161__$1);

(statearr_36184[(9)] = inst_36163);

return statearr_36184;
})();
if(cljs.core.truth_(inst_36164)){
var statearr_36185_37876 = state_36182__$1;
(statearr_36185_37876[(1)] = (8));

} else {
var statearr_36186_37878 = state_36182__$1;
(statearr_36186_37878[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36183 === (1))){
var inst_36151 = cljs.core.vec(chs);
var inst_36152 = inst_36151;
var state_36182__$1 = (function (){var statearr_36187 = state_36182;
(statearr_36187[(10)] = inst_36152);

return statearr_36187;
})();
var statearr_36188_37882 = state_36182__$1;
(statearr_36188_37882[(2)] = null);

(statearr_36188_37882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36183 === (4))){
var inst_36152 = (state_36182[(10)]);
var state_36182__$1 = state_36182;
return cljs.core.async.ioc_alts_BANG_(state_36182__$1,(7),inst_36152);
} else {
if((state_val_36183 === (6))){
var inst_36178 = (state_36182[(2)]);
var state_36182__$1 = state_36182;
var statearr_36189_37888 = state_36182__$1;
(statearr_36189_37888[(2)] = inst_36178);

(statearr_36189_37888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36183 === (3))){
var inst_36180 = (state_36182[(2)]);
var state_36182__$1 = state_36182;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36182__$1,inst_36180);
} else {
if((state_val_36183 === (2))){
var inst_36152 = (state_36182[(10)]);
var inst_36154 = cljs.core.count(inst_36152);
var inst_36155 = (inst_36154 > (0));
var state_36182__$1 = state_36182;
if(cljs.core.truth_(inst_36155)){
var statearr_36192_37894 = state_36182__$1;
(statearr_36192_37894[(1)] = (4));

} else {
var statearr_36193_37896 = state_36182__$1;
(statearr_36193_37896[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36183 === (11))){
var inst_36152 = (state_36182[(10)]);
var inst_36171 = (state_36182[(2)]);
var tmp36190 = inst_36152;
var inst_36152__$1 = tmp36190;
var state_36182__$1 = (function (){var statearr_36194 = state_36182;
(statearr_36194[(10)] = inst_36152__$1);

(statearr_36194[(11)] = inst_36171);

return statearr_36194;
})();
var statearr_36195_37901 = state_36182__$1;
(statearr_36195_37901[(2)] = null);

(statearr_36195_37901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36183 === (9))){
var inst_36162 = (state_36182[(7)]);
var state_36182__$1 = state_36182;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36182__$1,(11),out,inst_36162);
} else {
if((state_val_36183 === (5))){
var inst_36176 = cljs.core.async.close_BANG_(out);
var state_36182__$1 = state_36182;
var statearr_36201_37906 = state_36182__$1;
(statearr_36201_37906[(2)] = inst_36176);

(statearr_36201_37906[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36183 === (10))){
var inst_36174 = (state_36182[(2)]);
var state_36182__$1 = state_36182;
var statearr_36202_37909 = state_36182__$1;
(statearr_36202_37909[(2)] = inst_36174);

(statearr_36202_37909[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36183 === (8))){
var inst_36162 = (state_36182[(7)]);
var inst_36152 = (state_36182[(10)]);
var inst_36161 = (state_36182[(8)]);
var inst_36163 = (state_36182[(9)]);
var inst_36166 = (function (){var cs = inst_36152;
var vec__36157 = inst_36161;
var v = inst_36162;
var c = inst_36163;
return (function (p1__36146_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36146_SHARP_);
});
})();
var inst_36167 = cljs.core.filterv(inst_36166,inst_36152);
var inst_36152__$1 = inst_36167;
var state_36182__$1 = (function (){var statearr_36205 = state_36182;
(statearr_36205[(10)] = inst_36152__$1);

return statearr_36205;
})();
var statearr_36206_37917 = state_36182__$1;
(statearr_36206_37917[(2)] = null);

(statearr_36206_37917[(1)] = (2));


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
var statearr_36207 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36207[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36207[(1)] = (1));

return statearr_36207;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36182){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36182);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36208){if((e36208 instanceof Object)){
var ex__34210__auto__ = e36208;
var statearr_36209_37925 = state_36182;
(statearr_36209_37925[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36208;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37926 = state_36182;
state_36182 = G__37926;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36182){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36212 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36212[(6)] = c__34273__auto___37868);

return statearr_36212;
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
var G__36218 = arguments.length;
switch (G__36218) {
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
var c__34273__auto___37935 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36249){
var state_val_36250 = (state_36249[(1)]);
if((state_val_36250 === (7))){
var inst_36230 = (state_36249[(7)]);
var inst_36230__$1 = (state_36249[(2)]);
var inst_36231 = (inst_36230__$1 == null);
var inst_36232 = cljs.core.not(inst_36231);
var state_36249__$1 = (function (){var statearr_36261 = state_36249;
(statearr_36261[(7)] = inst_36230__$1);

return statearr_36261;
})();
if(inst_36232){
var statearr_36262_37940 = state_36249__$1;
(statearr_36262_37940[(1)] = (8));

} else {
var statearr_36263_37942 = state_36249__$1;
(statearr_36263_37942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (1))){
var inst_36225 = (0);
var state_36249__$1 = (function (){var statearr_36265 = state_36249;
(statearr_36265[(8)] = inst_36225);

return statearr_36265;
})();
var statearr_36266_37945 = state_36249__$1;
(statearr_36266_37945[(2)] = null);

(statearr_36266_37945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (4))){
var state_36249__$1 = state_36249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36249__$1,(7),ch);
} else {
if((state_val_36250 === (6))){
var inst_36243 = (state_36249[(2)]);
var state_36249__$1 = state_36249;
var statearr_36269_37948 = state_36249__$1;
(statearr_36269_37948[(2)] = inst_36243);

(statearr_36269_37948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (3))){
var inst_36246 = (state_36249[(2)]);
var inst_36247 = cljs.core.async.close_BANG_(out);
var state_36249__$1 = (function (){var statearr_36271 = state_36249;
(statearr_36271[(9)] = inst_36246);

return statearr_36271;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36249__$1,inst_36247);
} else {
if((state_val_36250 === (2))){
var inst_36225 = (state_36249[(8)]);
var inst_36227 = (inst_36225 < n);
var state_36249__$1 = state_36249;
if(cljs.core.truth_(inst_36227)){
var statearr_36273_37955 = state_36249__$1;
(statearr_36273_37955[(1)] = (4));

} else {
var statearr_36274_37956 = state_36249__$1;
(statearr_36274_37956[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (11))){
var inst_36225 = (state_36249[(8)]);
var inst_36235 = (state_36249[(2)]);
var inst_36236 = (inst_36225 + (1));
var inst_36225__$1 = inst_36236;
var state_36249__$1 = (function (){var statearr_36275 = state_36249;
(statearr_36275[(10)] = inst_36235);

(statearr_36275[(8)] = inst_36225__$1);

return statearr_36275;
})();
var statearr_36277_37963 = state_36249__$1;
(statearr_36277_37963[(2)] = null);

(statearr_36277_37963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (9))){
var state_36249__$1 = state_36249;
var statearr_36279_37969 = state_36249__$1;
(statearr_36279_37969[(2)] = null);

(statearr_36279_37969[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (5))){
var state_36249__$1 = state_36249;
var statearr_36280_37972 = state_36249__$1;
(statearr_36280_37972[(2)] = null);

(statearr_36280_37972[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (10))){
var inst_36240 = (state_36249[(2)]);
var state_36249__$1 = state_36249;
var statearr_36281_37975 = state_36249__$1;
(statearr_36281_37975[(2)] = inst_36240);

(statearr_36281_37975[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (8))){
var inst_36230 = (state_36249[(7)]);
var state_36249__$1 = state_36249;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36249__$1,(11),out,inst_36230);
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
var statearr_36284 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36284[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36284[(1)] = (1));

return statearr_36284;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36249){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36249);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36285){if((e36285 instanceof Object)){
var ex__34210__auto__ = e36285;
var statearr_36286_37995 = state_36249;
(statearr_36286_37995[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36285;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37996 = state_36249;
state_36249 = G__37996;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36249){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36289 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36289[(6)] = c__34273__auto___37935);

return statearr_36289;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36293 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36293 = (function (f,ch,meta36294){
this.f = f;
this.ch = ch;
this.meta36294 = meta36294;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36295,meta36294__$1){
var self__ = this;
var _36295__$1 = this;
return (new cljs.core.async.t_cljs$core$async36293(self__.f,self__.ch,meta36294__$1));
}));

(cljs.core.async.t_cljs$core$async36293.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36295){
var self__ = this;
var _36295__$1 = this;
return self__.meta36294;
}));

(cljs.core.async.t_cljs$core$async36293.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36293.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36293.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36293.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36293.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36308 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36308 = (function (f,ch,meta36294,_,fn1,meta36309){
this.f = f;
this.ch = ch;
this.meta36294 = meta36294;
this._ = _;
this.fn1 = fn1;
this.meta36309 = meta36309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36310,meta36309__$1){
var self__ = this;
var _36310__$1 = this;
return (new cljs.core.async.t_cljs$core$async36308(self__.f,self__.ch,self__.meta36294,self__._,self__.fn1,meta36309__$1));
}));

(cljs.core.async.t_cljs$core$async36308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36310){
var self__ = this;
var _36310__$1 = this;
return self__.meta36309;
}));

(cljs.core.async.t_cljs$core$async36308.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36308.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36308.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36308.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36292_SHARP_){
var G__36314 = (((p1__36292_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36292_SHARP_) : self__.f.call(null,p1__36292_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36314) : f1.call(null,G__36314));
});
}));

(cljs.core.async.t_cljs$core$async36308.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36294","meta36294",1936540444,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36293","cljs.core.async/t_cljs$core$async36293",246317326,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36309","meta36309",1642335137,null)], null);
}));

(cljs.core.async.t_cljs$core$async36308.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36308.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36308");

(cljs.core.async.t_cljs$core$async36308.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36308");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36308.
 */
cljs.core.async.__GT_t_cljs$core$async36308 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36308(f__$1,ch__$1,meta36294__$1,___$2,fn1__$1,meta36309){
return (new cljs.core.async.t_cljs$core$async36308(f__$1,ch__$1,meta36294__$1,___$2,fn1__$1,meta36309));
});

}

return (new cljs.core.async.t_cljs$core$async36308(self__.f,self__.ch,self__.meta36294,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36321 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36321) : self__.f.call(null,G__36321));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36293.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36293.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36293.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36294","meta36294",1936540444,null)], null);
}));

(cljs.core.async.t_cljs$core$async36293.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36293.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36293");

(cljs.core.async.t_cljs$core$async36293.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36293");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36293.
 */
cljs.core.async.__GT_t_cljs$core$async36293 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36293(f__$1,ch__$1,meta36294){
return (new cljs.core.async.t_cljs$core$async36293(f__$1,ch__$1,meta36294));
});

}

return (new cljs.core.async.t_cljs$core$async36293(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36332 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36332 = (function (f,ch,meta36333){
this.f = f;
this.ch = ch;
this.meta36333 = meta36333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36334,meta36333__$1){
var self__ = this;
var _36334__$1 = this;
return (new cljs.core.async.t_cljs$core$async36332(self__.f,self__.ch,meta36333__$1));
}));

(cljs.core.async.t_cljs$core$async36332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36334){
var self__ = this;
var _36334__$1 = this;
return self__.meta36333;
}));

(cljs.core.async.t_cljs$core$async36332.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36332.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36332.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36332.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36332.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36332.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36332.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36333","meta36333",596044259,null)], null);
}));

(cljs.core.async.t_cljs$core$async36332.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36332.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36332");

(cljs.core.async.t_cljs$core$async36332.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36332");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36332.
 */
cljs.core.async.__GT_t_cljs$core$async36332 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36332(f__$1,ch__$1,meta36333){
return (new cljs.core.async.t_cljs$core$async36332(f__$1,ch__$1,meta36333));
});

}

return (new cljs.core.async.t_cljs$core$async36332(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36344 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36344 = (function (p,ch,meta36345){
this.p = p;
this.ch = ch;
this.meta36345 = meta36345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36346,meta36345__$1){
var self__ = this;
var _36346__$1 = this;
return (new cljs.core.async.t_cljs$core$async36344(self__.p,self__.ch,meta36345__$1));
}));

(cljs.core.async.t_cljs$core$async36344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36346){
var self__ = this;
var _36346__$1 = this;
return self__.meta36345;
}));

(cljs.core.async.t_cljs$core$async36344.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36344.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36344.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36344.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36344.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36344.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36344.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36344.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36345","meta36345",-82122636,null)], null);
}));

(cljs.core.async.t_cljs$core$async36344.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36344");

(cljs.core.async.t_cljs$core$async36344.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36344");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36344.
 */
cljs.core.async.__GT_t_cljs$core$async36344 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36344(p__$1,ch__$1,meta36345){
return (new cljs.core.async.t_cljs$core$async36344(p__$1,ch__$1,meta36345));
});

}

return (new cljs.core.async.t_cljs$core$async36344(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36363 = arguments.length;
switch (G__36363) {
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
var c__34273__auto___38030 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36389){
var state_val_36390 = (state_36389[(1)]);
if((state_val_36390 === (7))){
var inst_36385 = (state_36389[(2)]);
var state_36389__$1 = state_36389;
var statearr_36391_38031 = state_36389__$1;
(statearr_36391_38031[(2)] = inst_36385);

(statearr_36391_38031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36390 === (1))){
var state_36389__$1 = state_36389;
var statearr_36393_38033 = state_36389__$1;
(statearr_36393_38033[(2)] = null);

(statearr_36393_38033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36390 === (4))){
var inst_36370 = (state_36389[(7)]);
var inst_36370__$1 = (state_36389[(2)]);
var inst_36372 = (inst_36370__$1 == null);
var state_36389__$1 = (function (){var statearr_36395 = state_36389;
(statearr_36395[(7)] = inst_36370__$1);

return statearr_36395;
})();
if(cljs.core.truth_(inst_36372)){
var statearr_36397_38038 = state_36389__$1;
(statearr_36397_38038[(1)] = (5));

} else {
var statearr_36399_38039 = state_36389__$1;
(statearr_36399_38039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36390 === (6))){
var inst_36370 = (state_36389[(7)]);
var inst_36376 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36370) : p.call(null,inst_36370));
var state_36389__$1 = state_36389;
if(cljs.core.truth_(inst_36376)){
var statearr_36405_38041 = state_36389__$1;
(statearr_36405_38041[(1)] = (8));

} else {
var statearr_36407_38042 = state_36389__$1;
(statearr_36407_38042[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36390 === (3))){
var inst_36387 = (state_36389[(2)]);
var state_36389__$1 = state_36389;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36389__$1,inst_36387);
} else {
if((state_val_36390 === (2))){
var state_36389__$1 = state_36389;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36389__$1,(4),ch);
} else {
if((state_val_36390 === (11))){
var inst_36379 = (state_36389[(2)]);
var state_36389__$1 = state_36389;
var statearr_36409_38047 = state_36389__$1;
(statearr_36409_38047[(2)] = inst_36379);

(statearr_36409_38047[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36390 === (9))){
var state_36389__$1 = state_36389;
var statearr_36410_38048 = state_36389__$1;
(statearr_36410_38048[(2)] = null);

(statearr_36410_38048[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36390 === (5))){
var inst_36374 = cljs.core.async.close_BANG_(out);
var state_36389__$1 = state_36389;
var statearr_36413_38049 = state_36389__$1;
(statearr_36413_38049[(2)] = inst_36374);

(statearr_36413_38049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36390 === (10))){
var inst_36382 = (state_36389[(2)]);
var state_36389__$1 = (function (){var statearr_36414 = state_36389;
(statearr_36414[(8)] = inst_36382);

return statearr_36414;
})();
var statearr_36415_38051 = state_36389__$1;
(statearr_36415_38051[(2)] = null);

(statearr_36415_38051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36390 === (8))){
var inst_36370 = (state_36389[(7)]);
var state_36389__$1 = state_36389;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36389__$1,(11),out,inst_36370);
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
var statearr_36417 = [null,null,null,null,null,null,null,null,null];
(statearr_36417[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36417[(1)] = (1));

return statearr_36417;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36389){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36389);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36418){if((e36418 instanceof Object)){
var ex__34210__auto__ = e36418;
var statearr_36419_38054 = state_36389;
(statearr_36419_38054[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36418;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38055 = state_36389;
state_36389 = G__38055;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36421 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36421[(6)] = c__34273__auto___38030);

return statearr_36421;
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
var G__36425 = arguments.length;
switch (G__36425) {
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
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36499){
var state_val_36500 = (state_36499[(1)]);
if((state_val_36500 === (7))){
var inst_36495 = (state_36499[(2)]);
var state_36499__$1 = state_36499;
var statearr_36501_38063 = state_36499__$1;
(statearr_36501_38063[(2)] = inst_36495);

(statearr_36501_38063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36500 === (20))){
var inst_36465 = (state_36499[(7)]);
var inst_36476 = (state_36499[(2)]);
var inst_36477 = cljs.core.next(inst_36465);
var inst_36451 = inst_36477;
var inst_36452 = null;
var inst_36453 = (0);
var inst_36454 = (0);
var state_36499__$1 = (function (){var statearr_36503 = state_36499;
(statearr_36503[(8)] = inst_36451);

(statearr_36503[(9)] = inst_36476);

(statearr_36503[(10)] = inst_36452);

(statearr_36503[(11)] = inst_36453);

(statearr_36503[(12)] = inst_36454);

return statearr_36503;
})();
var statearr_36504_38064 = state_36499__$1;
(statearr_36504_38064[(2)] = null);

(statearr_36504_38064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36500 === (1))){
var state_36499__$1 = state_36499;
var statearr_36505_38066 = state_36499__$1;
(statearr_36505_38066[(2)] = null);

(statearr_36505_38066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36500 === (4))){
var inst_36440 = (state_36499[(13)]);
var inst_36440__$1 = (state_36499[(2)]);
var inst_36441 = (inst_36440__$1 == null);
var state_36499__$1 = (function (){var statearr_36510 = state_36499;
(statearr_36510[(13)] = inst_36440__$1);

return statearr_36510;
})();
if(cljs.core.truth_(inst_36441)){
var statearr_36511_38069 = state_36499__$1;
(statearr_36511_38069[(1)] = (5));

} else {
var statearr_36512_38070 = state_36499__$1;
(statearr_36512_38070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36500 === (15))){
var state_36499__$1 = state_36499;
var statearr_36518_38071 = state_36499__$1;
(statearr_36518_38071[(2)] = null);

(statearr_36518_38071[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36500 === (21))){
var state_36499__$1 = state_36499;
var statearr_36523_38072 = state_36499__$1;
(statearr_36523_38072[(2)] = null);

(statearr_36523_38072[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36500 === (13))){
var inst_36451 = (state_36499[(8)]);
var inst_36452 = (state_36499[(10)]);
var inst_36453 = (state_36499[(11)]);
var inst_36454 = (state_36499[(12)]);
var inst_36461 = (state_36499[(2)]);
var inst_36462 = (inst_36454 + (1));
var tmp36513 = inst_36451;
var tmp36514 = inst_36452;
var tmp36515 = inst_36453;
var inst_36451__$1 = tmp36513;
var inst_36452__$1 = tmp36514;
var inst_36453__$1 = tmp36515;
var inst_36454__$1 = inst_36462;
var state_36499__$1 = (function (){var statearr_36524 = state_36499;
(statearr_36524[(8)] = inst_36451__$1);

(statearr_36524[(14)] = inst_36461);

(statearr_36524[(10)] = inst_36452__$1);

(statearr_36524[(11)] = inst_36453__$1);

(statearr_36524[(12)] = inst_36454__$1);

return statearr_36524;
})();
var statearr_36528_38076 = state_36499__$1;
(statearr_36528_38076[(2)] = null);

(statearr_36528_38076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36500 === (22))){
var state_36499__$1 = state_36499;
var statearr_36532_38077 = state_36499__$1;
(statearr_36532_38077[(2)] = null);

(statearr_36532_38077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36500 === (6))){
var inst_36440 = (state_36499[(13)]);
var inst_36449 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36440) : f.call(null,inst_36440));
var inst_36450 = cljs.core.seq(inst_36449);
var inst_36451 = inst_36450;
var inst_36452 = null;
var inst_36453 = (0);
var inst_36454 = (0);
var state_36499__$1 = (function (){var statearr_36536 = state_36499;
(statearr_36536[(8)] = inst_36451);

(statearr_36536[(10)] = inst_36452);

(statearr_36536[(11)] = inst_36453);

(statearr_36536[(12)] = inst_36454);

return statearr_36536;
})();
var statearr_36538_38079 = state_36499__$1;
(statearr_36538_38079[(2)] = null);

(statearr_36538_38079[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36500 === (17))){
var inst_36465 = (state_36499[(7)]);
var inst_36469 = cljs.core.chunk_first(inst_36465);
var inst_36470 = cljs.core.chunk_rest(inst_36465);
var inst_36471 = cljs.core.count(inst_36469);
var inst_36451 = inst_36470;
var inst_36452 = inst_36469;
var inst_36453 = inst_36471;
var inst_36454 = (0);
var state_36499__$1 = (function (){var statearr_36539 = state_36499;
(statearr_36539[(8)] = inst_36451);

(statearr_36539[(10)] = inst_36452);

(statearr_36539[(11)] = inst_36453);

(statearr_36539[(12)] = inst_36454);

return statearr_36539;
})();
var statearr_36540_38082 = state_36499__$1;
(statearr_36540_38082[(2)] = null);

(statearr_36540_38082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36500 === (3))){
var inst_36497 = (state_36499[(2)]);
var state_36499__$1 = state_36499;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36499__$1,inst_36497);
} else {
if((state_val_36500 === (12))){
var inst_36485 = (state_36499[(2)]);
var state_36499__$1 = state_36499;
var statearr_36543_38083 = state_36499__$1;
(statearr_36543_38083[(2)] = inst_36485);

(statearr_36543_38083[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36500 === (2))){
var state_36499__$1 = state_36499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36499__$1,(4),in$);
} else {
if((state_val_36500 === (23))){
var inst_36493 = (state_36499[(2)]);
var state_36499__$1 = state_36499;
var statearr_36546_38087 = state_36499__$1;
(statearr_36546_38087[(2)] = inst_36493);

(statearr_36546_38087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36500 === (19))){
var inst_36480 = (state_36499[(2)]);
var state_36499__$1 = state_36499;
var statearr_36548_38088 = state_36499__$1;
(statearr_36548_38088[(2)] = inst_36480);

(statearr_36548_38088[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36500 === (11))){
var inst_36451 = (state_36499[(8)]);
var inst_36465 = (state_36499[(7)]);
var inst_36465__$1 = cljs.core.seq(inst_36451);
var state_36499__$1 = (function (){var statearr_36550 = state_36499;
(statearr_36550[(7)] = inst_36465__$1);

return statearr_36550;
})();
if(inst_36465__$1){
var statearr_36552_38089 = state_36499__$1;
(statearr_36552_38089[(1)] = (14));

} else {
var statearr_36553_38090 = state_36499__$1;
(statearr_36553_38090[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36500 === (9))){
var inst_36487 = (state_36499[(2)]);
var inst_36488 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36499__$1 = (function (){var statearr_36554 = state_36499;
(statearr_36554[(15)] = inst_36487);

return statearr_36554;
})();
if(cljs.core.truth_(inst_36488)){
var statearr_36555_38093 = state_36499__$1;
(statearr_36555_38093[(1)] = (21));

} else {
var statearr_36557_38095 = state_36499__$1;
(statearr_36557_38095[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36500 === (5))){
var inst_36443 = cljs.core.async.close_BANG_(out);
var state_36499__$1 = state_36499;
var statearr_36560_38096 = state_36499__$1;
(statearr_36560_38096[(2)] = inst_36443);

(statearr_36560_38096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36500 === (14))){
var inst_36465 = (state_36499[(7)]);
var inst_36467 = cljs.core.chunked_seq_QMARK_(inst_36465);
var state_36499__$1 = state_36499;
if(inst_36467){
var statearr_36562_38097 = state_36499__$1;
(statearr_36562_38097[(1)] = (17));

} else {
var statearr_36563_38098 = state_36499__$1;
(statearr_36563_38098[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36500 === (16))){
var inst_36483 = (state_36499[(2)]);
var state_36499__$1 = state_36499;
var statearr_36564_38099 = state_36499__$1;
(statearr_36564_38099[(2)] = inst_36483);

(statearr_36564_38099[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36500 === (10))){
var inst_36452 = (state_36499[(10)]);
var inst_36454 = (state_36499[(12)]);
var inst_36459 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36452,inst_36454);
var state_36499__$1 = state_36499;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36499__$1,(13),out,inst_36459);
} else {
if((state_val_36500 === (18))){
var inst_36465 = (state_36499[(7)]);
var inst_36474 = cljs.core.first(inst_36465);
var state_36499__$1 = state_36499;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36499__$1,(20),out,inst_36474);
} else {
if((state_val_36500 === (8))){
var inst_36453 = (state_36499[(11)]);
var inst_36454 = (state_36499[(12)]);
var inst_36456 = (inst_36454 < inst_36453);
var inst_36457 = inst_36456;
var state_36499__$1 = state_36499;
if(cljs.core.truth_(inst_36457)){
var statearr_36566_38103 = state_36499__$1;
(statearr_36566_38103[(1)] = (10));

} else {
var statearr_36567_38104 = state_36499__$1;
(statearr_36567_38104[(1)] = (11));

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
var statearr_36569 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36569[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36569[(1)] = (1));

return statearr_36569;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36499){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36499);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36572){if((e36572 instanceof Object)){
var ex__34210__auto__ = e36572;
var statearr_36575_38108 = state_36499;
(statearr_36575_38108[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38109 = state_36499;
state_36499 = G__38109;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36499){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36576 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36576[(6)] = c__34273__auto__);

return statearr_36576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));

return c__34273__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36579 = arguments.length;
switch (G__36579) {
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
var G__36583 = arguments.length;
switch (G__36583) {
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
var G__36587 = arguments.length;
switch (G__36587) {
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
var c__34273__auto___38119 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36613){
var state_val_36614 = (state_36613[(1)]);
if((state_val_36614 === (7))){
var inst_36608 = (state_36613[(2)]);
var state_36613__$1 = state_36613;
var statearr_36616_38121 = state_36613__$1;
(statearr_36616_38121[(2)] = inst_36608);

(statearr_36616_38121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36614 === (1))){
var inst_36589 = null;
var state_36613__$1 = (function (){var statearr_36617 = state_36613;
(statearr_36617[(7)] = inst_36589);

return statearr_36617;
})();
var statearr_36618_38124 = state_36613__$1;
(statearr_36618_38124[(2)] = null);

(statearr_36618_38124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36614 === (4))){
var inst_36593 = (state_36613[(8)]);
var inst_36593__$1 = (state_36613[(2)]);
var inst_36594 = (inst_36593__$1 == null);
var inst_36595 = cljs.core.not(inst_36594);
var state_36613__$1 = (function (){var statearr_36620 = state_36613;
(statearr_36620[(8)] = inst_36593__$1);

return statearr_36620;
})();
if(inst_36595){
var statearr_36621_38125 = state_36613__$1;
(statearr_36621_38125[(1)] = (5));

} else {
var statearr_36622_38126 = state_36613__$1;
(statearr_36622_38126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36614 === (6))){
var state_36613__$1 = state_36613;
var statearr_36624_38127 = state_36613__$1;
(statearr_36624_38127[(2)] = null);

(statearr_36624_38127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36614 === (3))){
var inst_36610 = (state_36613[(2)]);
var inst_36611 = cljs.core.async.close_BANG_(out);
var state_36613__$1 = (function (){var statearr_36625 = state_36613;
(statearr_36625[(9)] = inst_36610);

return statearr_36625;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36613__$1,inst_36611);
} else {
if((state_val_36614 === (2))){
var state_36613__$1 = state_36613;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36613__$1,(4),ch);
} else {
if((state_val_36614 === (11))){
var inst_36593 = (state_36613[(8)]);
var inst_36602 = (state_36613[(2)]);
var inst_36589 = inst_36593;
var state_36613__$1 = (function (){var statearr_36627 = state_36613;
(statearr_36627[(10)] = inst_36602);

(statearr_36627[(7)] = inst_36589);

return statearr_36627;
})();
var statearr_36628_38131 = state_36613__$1;
(statearr_36628_38131[(2)] = null);

(statearr_36628_38131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36614 === (9))){
var inst_36593 = (state_36613[(8)]);
var state_36613__$1 = state_36613;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36613__$1,(11),out,inst_36593);
} else {
if((state_val_36614 === (5))){
var inst_36593 = (state_36613[(8)]);
var inst_36589 = (state_36613[(7)]);
var inst_36597 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36593,inst_36589);
var state_36613__$1 = state_36613;
if(inst_36597){
var statearr_36630_38134 = state_36613__$1;
(statearr_36630_38134[(1)] = (8));

} else {
var statearr_36632_38135 = state_36613__$1;
(statearr_36632_38135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36614 === (10))){
var inst_36605 = (state_36613[(2)]);
var state_36613__$1 = state_36613;
var statearr_36633_38137 = state_36613__$1;
(statearr_36633_38137[(2)] = inst_36605);

(statearr_36633_38137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36614 === (8))){
var inst_36589 = (state_36613[(7)]);
var tmp36629 = inst_36589;
var inst_36589__$1 = tmp36629;
var state_36613__$1 = (function (){var statearr_36634 = state_36613;
(statearr_36634[(7)] = inst_36589__$1);

return statearr_36634;
})();
var statearr_36635_38138 = state_36613__$1;
(statearr_36635_38138[(2)] = null);

(statearr_36635_38138[(1)] = (2));


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
var statearr_36637 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36637[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36637[(1)] = (1));

return statearr_36637;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36613){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36613);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36639){if((e36639 instanceof Object)){
var ex__34210__auto__ = e36639;
var statearr_36640_38142 = state_36613;
(statearr_36640_38142[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38143 = state_36613;
state_36613 = G__38143;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36641 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36641[(6)] = c__34273__auto___38119);

return statearr_36641;
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
var G__36645 = arguments.length;
switch (G__36645) {
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
var c__34273__auto___38148 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36685){
var state_val_36686 = (state_36685[(1)]);
if((state_val_36686 === (7))){
var inst_36681 = (state_36685[(2)]);
var state_36685__$1 = state_36685;
var statearr_36688_38149 = state_36685__$1;
(statearr_36688_38149[(2)] = inst_36681);

(statearr_36688_38149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (1))){
var inst_36647 = (new Array(n));
var inst_36648 = inst_36647;
var inst_36649 = (0);
var state_36685__$1 = (function (){var statearr_36689 = state_36685;
(statearr_36689[(7)] = inst_36649);

(statearr_36689[(8)] = inst_36648);

return statearr_36689;
})();
var statearr_36690_38151 = state_36685__$1;
(statearr_36690_38151[(2)] = null);

(statearr_36690_38151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (4))){
var inst_36652 = (state_36685[(9)]);
var inst_36652__$1 = (state_36685[(2)]);
var inst_36653 = (inst_36652__$1 == null);
var inst_36654 = cljs.core.not(inst_36653);
var state_36685__$1 = (function (){var statearr_36692 = state_36685;
(statearr_36692[(9)] = inst_36652__$1);

return statearr_36692;
})();
if(inst_36654){
var statearr_36693_38154 = state_36685__$1;
(statearr_36693_38154[(1)] = (5));

} else {
var statearr_36694_38155 = state_36685__$1;
(statearr_36694_38155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (15))){
var inst_36675 = (state_36685[(2)]);
var state_36685__$1 = state_36685;
var statearr_36696_38156 = state_36685__$1;
(statearr_36696_38156[(2)] = inst_36675);

(statearr_36696_38156[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (13))){
var state_36685__$1 = state_36685;
var statearr_36697_38157 = state_36685__$1;
(statearr_36697_38157[(2)] = null);

(statearr_36697_38157[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (6))){
var inst_36649 = (state_36685[(7)]);
var inst_36671 = (inst_36649 > (0));
var state_36685__$1 = state_36685;
if(cljs.core.truth_(inst_36671)){
var statearr_36698_38160 = state_36685__$1;
(statearr_36698_38160[(1)] = (12));

} else {
var statearr_36700_38161 = state_36685__$1;
(statearr_36700_38161[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (3))){
var inst_36683 = (state_36685[(2)]);
var state_36685__$1 = state_36685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36685__$1,inst_36683);
} else {
if((state_val_36686 === (12))){
var inst_36648 = (state_36685[(8)]);
var inst_36673 = cljs.core.vec(inst_36648);
var state_36685__$1 = state_36685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36685__$1,(15),out,inst_36673);
} else {
if((state_val_36686 === (2))){
var state_36685__$1 = state_36685;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36685__$1,(4),ch);
} else {
if((state_val_36686 === (11))){
var inst_36664 = (state_36685[(2)]);
var inst_36665 = (new Array(n));
var inst_36648 = inst_36665;
var inst_36649 = (0);
var state_36685__$1 = (function (){var statearr_36702 = state_36685;
(statearr_36702[(10)] = inst_36664);

(statearr_36702[(7)] = inst_36649);

(statearr_36702[(8)] = inst_36648);

return statearr_36702;
})();
var statearr_36703_38164 = state_36685__$1;
(statearr_36703_38164[(2)] = null);

(statearr_36703_38164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (9))){
var inst_36648 = (state_36685[(8)]);
var inst_36662 = cljs.core.vec(inst_36648);
var state_36685__$1 = state_36685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36685__$1,(11),out,inst_36662);
} else {
if((state_val_36686 === (5))){
var inst_36657 = (state_36685[(11)]);
var inst_36649 = (state_36685[(7)]);
var inst_36648 = (state_36685[(8)]);
var inst_36652 = (state_36685[(9)]);
var inst_36656 = (inst_36648[inst_36649] = inst_36652);
var inst_36657__$1 = (inst_36649 + (1));
var inst_36658 = (inst_36657__$1 < n);
var state_36685__$1 = (function (){var statearr_36705 = state_36685;
(statearr_36705[(12)] = inst_36656);

(statearr_36705[(11)] = inst_36657__$1);

return statearr_36705;
})();
if(cljs.core.truth_(inst_36658)){
var statearr_36707_38167 = state_36685__$1;
(statearr_36707_38167[(1)] = (8));

} else {
var statearr_36708_38168 = state_36685__$1;
(statearr_36708_38168[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (14))){
var inst_36678 = (state_36685[(2)]);
var inst_36679 = cljs.core.async.close_BANG_(out);
var state_36685__$1 = (function (){var statearr_36710 = state_36685;
(statearr_36710[(13)] = inst_36678);

return statearr_36710;
})();
var statearr_36711_38169 = state_36685__$1;
(statearr_36711_38169[(2)] = inst_36679);

(statearr_36711_38169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (10))){
var inst_36668 = (state_36685[(2)]);
var state_36685__$1 = state_36685;
var statearr_36713_38171 = state_36685__$1;
(statearr_36713_38171[(2)] = inst_36668);

(statearr_36713_38171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (8))){
var inst_36657 = (state_36685[(11)]);
var inst_36648 = (state_36685[(8)]);
var tmp36709 = inst_36648;
var inst_36648__$1 = tmp36709;
var inst_36649 = inst_36657;
var state_36685__$1 = (function (){var statearr_36714 = state_36685;
(statearr_36714[(7)] = inst_36649);

(statearr_36714[(8)] = inst_36648__$1);

return statearr_36714;
})();
var statearr_36715_38174 = state_36685__$1;
(statearr_36715_38174[(2)] = null);

(statearr_36715_38174[(1)] = (2));


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
var statearr_36717 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36717[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36717[(1)] = (1));

return statearr_36717;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36685){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36685);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36718){if((e36718 instanceof Object)){
var ex__34210__auto__ = e36718;
var statearr_36719_38175 = state_36685;
(statearr_36719_38175[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36718;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38176 = state_36685;
state_36685 = G__38176;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36685){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36720 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36720[(6)] = c__34273__auto___38148);

return statearr_36720;
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
var G__36722 = arguments.length;
switch (G__36722) {
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
var c__34273__auto___38181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36765){
var state_val_36766 = (state_36765[(1)]);
if((state_val_36766 === (7))){
var inst_36761 = (state_36765[(2)]);
var state_36765__$1 = state_36765;
var statearr_36768_38182 = state_36765__$1;
(statearr_36768_38182[(2)] = inst_36761);

(statearr_36768_38182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36766 === (1))){
var inst_36723 = [];
var inst_36724 = inst_36723;
var inst_36725 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36765__$1 = (function (){var statearr_36769 = state_36765;
(statearr_36769[(7)] = inst_36725);

(statearr_36769[(8)] = inst_36724);

return statearr_36769;
})();
var statearr_36770_38183 = state_36765__$1;
(statearr_36770_38183[(2)] = null);

(statearr_36770_38183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36766 === (4))){
var inst_36728 = (state_36765[(9)]);
var inst_36728__$1 = (state_36765[(2)]);
var inst_36729 = (inst_36728__$1 == null);
var inst_36730 = cljs.core.not(inst_36729);
var state_36765__$1 = (function (){var statearr_36772 = state_36765;
(statearr_36772[(9)] = inst_36728__$1);

return statearr_36772;
})();
if(inst_36730){
var statearr_36773_38185 = state_36765__$1;
(statearr_36773_38185[(1)] = (5));

} else {
var statearr_36774_38186 = state_36765__$1;
(statearr_36774_38186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36766 === (15))){
var inst_36755 = (state_36765[(2)]);
var state_36765__$1 = state_36765;
var statearr_36775_38188 = state_36765__$1;
(statearr_36775_38188[(2)] = inst_36755);

(statearr_36775_38188[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36766 === (13))){
var state_36765__$1 = state_36765;
var statearr_36777_38190 = state_36765__$1;
(statearr_36777_38190[(2)] = null);

(statearr_36777_38190[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36766 === (6))){
var inst_36724 = (state_36765[(8)]);
var inst_36750 = inst_36724.length;
var inst_36751 = (inst_36750 > (0));
var state_36765__$1 = state_36765;
if(cljs.core.truth_(inst_36751)){
var statearr_36778_38194 = state_36765__$1;
(statearr_36778_38194[(1)] = (12));

} else {
var statearr_36779_38195 = state_36765__$1;
(statearr_36779_38195[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36766 === (3))){
var inst_36763 = (state_36765[(2)]);
var state_36765__$1 = state_36765;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36765__$1,inst_36763);
} else {
if((state_val_36766 === (12))){
var inst_36724 = (state_36765[(8)]);
var inst_36753 = cljs.core.vec(inst_36724);
var state_36765__$1 = state_36765;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36765__$1,(15),out,inst_36753);
} else {
if((state_val_36766 === (2))){
var state_36765__$1 = state_36765;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36765__$1,(4),ch);
} else {
if((state_val_36766 === (11))){
var inst_36732 = (state_36765[(10)]);
var inst_36728 = (state_36765[(9)]);
var inst_36742 = (state_36765[(2)]);
var inst_36743 = [];
var inst_36745 = inst_36743.push(inst_36728);
var inst_36724 = inst_36743;
var inst_36725 = inst_36732;
var state_36765__$1 = (function (){var statearr_36782 = state_36765;
(statearr_36782[(11)] = inst_36745);

(statearr_36782[(7)] = inst_36725);

(statearr_36782[(12)] = inst_36742);

(statearr_36782[(8)] = inst_36724);

return statearr_36782;
})();
var statearr_36783_38199 = state_36765__$1;
(statearr_36783_38199[(2)] = null);

(statearr_36783_38199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36766 === (9))){
var inst_36724 = (state_36765[(8)]);
var inst_36740 = cljs.core.vec(inst_36724);
var state_36765__$1 = state_36765;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36765__$1,(11),out,inst_36740);
} else {
if((state_val_36766 === (5))){
var inst_36725 = (state_36765[(7)]);
var inst_36732 = (state_36765[(10)]);
var inst_36728 = (state_36765[(9)]);
var inst_36732__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36728) : f.call(null,inst_36728));
var inst_36733 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36732__$1,inst_36725);
var inst_36734 = cljs.core.keyword_identical_QMARK_(inst_36725,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36735 = ((inst_36733) || (inst_36734));
var state_36765__$1 = (function (){var statearr_36785 = state_36765;
(statearr_36785[(10)] = inst_36732__$1);

return statearr_36785;
})();
if(cljs.core.truth_(inst_36735)){
var statearr_36786_38204 = state_36765__$1;
(statearr_36786_38204[(1)] = (8));

} else {
var statearr_36787_38205 = state_36765__$1;
(statearr_36787_38205[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36766 === (14))){
var inst_36758 = (state_36765[(2)]);
var inst_36759 = cljs.core.async.close_BANG_(out);
var state_36765__$1 = (function (){var statearr_36790 = state_36765;
(statearr_36790[(13)] = inst_36758);

return statearr_36790;
})();
var statearr_36791_38208 = state_36765__$1;
(statearr_36791_38208[(2)] = inst_36759);

(statearr_36791_38208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36766 === (10))){
var inst_36748 = (state_36765[(2)]);
var state_36765__$1 = state_36765;
var statearr_36792_38209 = state_36765__$1;
(statearr_36792_38209[(2)] = inst_36748);

(statearr_36792_38209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36766 === (8))){
var inst_36732 = (state_36765[(10)]);
var inst_36728 = (state_36765[(9)]);
var inst_36724 = (state_36765[(8)]);
var inst_36737 = inst_36724.push(inst_36728);
var tmp36788 = inst_36724;
var inst_36724__$1 = tmp36788;
var inst_36725 = inst_36732;
var state_36765__$1 = (function (){var statearr_36794 = state_36765;
(statearr_36794[(14)] = inst_36737);

(statearr_36794[(7)] = inst_36725);

(statearr_36794[(8)] = inst_36724__$1);

return statearr_36794;
})();
var statearr_36795_38210 = state_36765__$1;
(statearr_36795_38210[(2)] = null);

(statearr_36795_38210[(1)] = (2));


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
var statearr_36797 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36797[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36797[(1)] = (1));

return statearr_36797;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36765){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36765);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36798){if((e36798 instanceof Object)){
var ex__34210__auto__ = e36798;
var statearr_36799_38214 = state_36765;
(statearr_36799_38214[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36798;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38215 = state_36765;
state_36765 = G__38215;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36765){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36801 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36801[(6)] = c__34273__auto___38181);

return statearr_36801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
