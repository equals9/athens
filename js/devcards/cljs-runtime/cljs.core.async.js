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
var val_36839 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36839) : fn1.call(null,val_36839));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36839) : fn1.call(null,val_36839));
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
var n__4666__auto___36845 = n;
var x_36846 = (0);
while(true){
if((x_36846 < n__4666__auto___36845)){
(a[x_36846] = x_36846);

var G__36847 = (x_36846 + (1));
x_36846 = G__36847;
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
var G__36857 = (i + (1));
i = G__36857;
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
var len__4789__auto___36860 = arguments.length;
var i__4790__auto___36861 = (0);
while(true){
if((i__4790__auto___36861 < len__4789__auto___36860)){
args__4795__auto__.push((arguments[i__4790__auto___36861]));

var G__36862 = (i__4790__auto___36861 + (1));
i__4790__auto___36861 = G__36862;
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
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34369){
var G__34370 = cljs.core.first(seq34369);
var seq34369__$1 = cljs.core.next(seq34369);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34370,seq34369__$1);
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
var c__34274__auto___36868 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34423){
var state_val_34424 = (state_34423[(1)]);
if((state_val_34424 === (7))){
var inst_34413 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34425_36869 = state_34423__$1;
(statearr_34425_36869[(2)] = inst_34413);

(statearr_34425_36869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (1))){
var state_34423__$1 = state_34423;
var statearr_34426_36871 = state_34423__$1;
(statearr_34426_36871[(2)] = null);

(statearr_34426_36871[(1)] = (2));


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
var statearr_34428_36873 = state_34423__$1;
(statearr_34428_36873[(1)] = (5));

} else {
var statearr_34429_36874 = state_34423__$1;
(statearr_34429_36874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (13))){
var state_34423__$1 = state_34423;
var statearr_34430_36875 = state_34423__$1;
(statearr_34430_36875[(2)] = null);

(statearr_34430_36875[(1)] = (14));


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
var statearr_34431_36877 = state_34423__$1;
(statearr_34431_36877[(2)] = null);

(statearr_34431_36877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (2))){
var state_34423__$1 = state_34423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34423__$1,(4),from);
} else {
if((state_val_34424 === (11))){
var inst_34403 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
if(cljs.core.truth_(inst_34403)){
var statearr_34432_36879 = state_34423__$1;
(statearr_34432_36879[(1)] = (12));

} else {
var statearr_34433_36880 = state_34423__$1;
(statearr_34433_36880[(1)] = (13));

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
var statearr_34435_36883 = state_34423__$1;
(statearr_34435_36883[(1)] = (8));

} else {
var statearr_34436_36884 = state_34423__$1;
(statearr_34436_36884[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (14))){
var inst_34411 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34437_36885 = state_34423__$1;
(statearr_34437_36885[(2)] = inst_34411);

(statearr_34437_36885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (10))){
var inst_34397 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34438_36887 = state_34423__$1;
(statearr_34438_36887[(2)] = inst_34397);

(statearr_34438_36887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (8))){
var inst_34394 = cljs.core.async.close_BANG_(to);
var state_34423__$1 = state_34423;
var statearr_34439_36888 = state_34423__$1;
(statearr_34439_36888[(2)] = inst_34394);

(statearr_34439_36888[(1)] = (10));


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
var state__34276__auto__ = (function (){var statearr_34443 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34443[(6)] = c__34274__auto___36868);

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
var process = (function (p__34448){
var vec__34449 = p__34448;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34449,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34449,(1),null);
var job = vec__34449;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34274__auto___36895 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34456){
var state_val_34457 = (state_34456[(1)]);
if((state_val_34457 === (1))){
var state_34456__$1 = state_34456;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34456__$1,(2),res,v);
} else {
if((state_val_34457 === (2))){
var inst_34453 = (state_34456[(2)]);
var inst_34454 = cljs.core.async.close_BANG_(res);
var state_34456__$1 = (function (){var statearr_34459 = state_34456;
(statearr_34459[(7)] = inst_34453);

return statearr_34459;
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
var statearr_34460 = [null,null,null,null,null,null,null,null];
(statearr_34460[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34460[(1)] = (1));

return statearr_34460;
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
var G__36900 = state_34456;
state_34456 = G__36900;
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
var state__34276__auto__ = (function (){var statearr_34463 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34463[(6)] = c__34274__auto___36895);

return statearr_34463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34465){
var vec__34466 = p__34465;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34466,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34466,(1),null);
var job = vec__34466;
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
var n__4666__auto___36903 = n;
var __36904 = (0);
while(true){
if((__36904 < n__4666__auto___36903)){
var G__34470_36905 = type;
var G__34470_36906__$1 = (((G__34470_36905 instanceof cljs.core.Keyword))?G__34470_36905.fqn:null);
switch (G__34470_36906__$1) {
case "compute":
var c__34274__auto___36908 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36904,c__34274__auto___36908,G__34470_36905,G__34470_36906__$1,n__4666__auto___36903,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36904,c__34274__auto___36908,G__34470_36905,G__34470_36906__$1,n__4666__auto___36903,jobs,results,process,async){
return (function (state_34483){
var state_val_34484 = (state_34483[(1)]);
if((state_val_34484 === (1))){
var state_34483__$1 = state_34483;
var statearr_34486_36910 = state_34483__$1;
(statearr_34486_36910[(2)] = null);

(statearr_34486_36910[(1)] = (2));


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
var statearr_34489_36912 = state_34483__$1;
(statearr_34489_36912[(1)] = (5));

} else {
var statearr_34490_36913 = state_34483__$1;
(statearr_34490_36913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34484 === (5))){
var state_34483__$1 = state_34483;
var statearr_34494_36915 = state_34483__$1;
(statearr_34494_36915[(2)] = null);

(statearr_34494_36915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34484 === (6))){
var state_34483__$1 = state_34483;
var statearr_34497_36916 = state_34483__$1;
(statearr_34497_36916[(2)] = null);

(statearr_34497_36916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34484 === (7))){
var inst_34479 = (state_34483[(2)]);
var state_34483__$1 = state_34483;
var statearr_34498_36918 = state_34483__$1;
(statearr_34498_36918[(2)] = inst_34479);

(statearr_34498_36918[(1)] = (3));


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
});})(__36904,c__34274__auto___36908,G__34470_36905,G__34470_36906__$1,n__4666__auto___36903,jobs,results,process,async))
;
return ((function (__36904,switch__34206__auto__,c__34274__auto___36908,G__34470_36905,G__34470_36906__$1,n__4666__auto___36903,jobs,results,process,async){
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
var statearr_34501_36920 = state_34483;
(statearr_34501_36920[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34500;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36922 = state_34483;
state_34483 = G__36922;
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
;})(__36904,switch__34206__auto__,c__34274__auto___36908,G__34470_36905,G__34470_36906__$1,n__4666__auto___36903,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34502 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34502[(6)] = c__34274__auto___36908);

return statearr_34502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36904,c__34274__auto___36908,G__34470_36905,G__34470_36906__$1,n__4666__auto___36903,jobs,results,process,async))
);


break;
case "async":
var c__34274__auto___36923 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36904,c__34274__auto___36923,G__34470_36905,G__34470_36906__$1,n__4666__auto___36903,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36904,c__34274__auto___36923,G__34470_36905,G__34470_36906__$1,n__4666__auto___36903,jobs,results,process,async){
return (function (state_34515){
var state_val_34516 = (state_34515[(1)]);
if((state_val_34516 === (1))){
var state_34515__$1 = state_34515;
var statearr_34518_36925 = state_34515__$1;
(statearr_34518_36925[(2)] = null);

(statearr_34518_36925[(1)] = (2));


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
var statearr_34519_36927 = state_34515__$1;
(statearr_34519_36927[(1)] = (5));

} else {
var statearr_34520_36929 = state_34515__$1;
(statearr_34520_36929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (5))){
var state_34515__$1 = state_34515;
var statearr_34522_36930 = state_34515__$1;
(statearr_34522_36930[(2)] = null);

(statearr_34522_36930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (6))){
var state_34515__$1 = state_34515;
var statearr_34526_36931 = state_34515__$1;
(statearr_34526_36931[(2)] = null);

(statearr_34526_36931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (7))){
var inst_34511 = (state_34515[(2)]);
var state_34515__$1 = state_34515;
var statearr_34527_36933 = state_34515__$1;
(statearr_34527_36933[(2)] = inst_34511);

(statearr_34527_36933[(1)] = (3));


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
});})(__36904,c__34274__auto___36923,G__34470_36905,G__34470_36906__$1,n__4666__auto___36903,jobs,results,process,async))
;
return ((function (__36904,switch__34206__auto__,c__34274__auto___36923,G__34470_36905,G__34470_36906__$1,n__4666__auto___36903,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34531 = [null,null,null,null,null,null,null];
(statearr_34531[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34531[(1)] = (1));

return statearr_34531;
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
var statearr_34533_36935 = state_34515;
(statearr_34533_36935[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34532;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36937 = state_34515;
state_34515 = G__36937;
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
;})(__36904,switch__34206__auto__,c__34274__auto___36923,G__34470_36905,G__34470_36906__$1,n__4666__auto___36903,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34534 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34534[(6)] = c__34274__auto___36923);

return statearr_34534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36904,c__34274__auto___36923,G__34470_36905,G__34470_36906__$1,n__4666__auto___36903,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34470_36906__$1)].join('')));

}

var G__36939 = (__36904 + (1));
__36904 = G__36939;
continue;
} else {
}
break;
}

var c__34274__auto___36940 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34556){
var state_val_34557 = (state_34556[(1)]);
if((state_val_34557 === (7))){
var inst_34552 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
var statearr_34561_36941 = state_34556__$1;
(statearr_34561_36941[(2)] = inst_34552);

(statearr_34561_36941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (1))){
var state_34556__$1 = state_34556;
var statearr_34562_36943 = state_34556__$1;
(statearr_34562_36943[(2)] = null);

(statearr_34562_36943[(1)] = (2));


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
var statearr_34564_36945 = state_34556__$1;
(statearr_34564_36945[(1)] = (5));

} else {
var statearr_34565_36946 = state_34556__$1;
(statearr_34565_36946[(1)] = (6));

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
var statearr_34568_36949 = state_34556__$1;
(statearr_34568_36949[(2)] = null);

(statearr_34568_36949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (5))){
var inst_34540 = cljs.core.async.close_BANG_(jobs);
var state_34556__$1 = state_34556;
var statearr_34569_36951 = state_34556__$1;
(statearr_34569_36951[(2)] = inst_34540);

(statearr_34569_36951[(1)] = (7));


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
var statearr_34573_36953 = state_34556;
(statearr_34573_36953[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36955 = state_34556;
state_34556 = G__36955;
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
(statearr_34574[(6)] = c__34274__auto___36940);

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
var statearr_34614_36957 = state_34612__$1;
(statearr_34614_36957[(2)] = inst_34608);

(statearr_34614_36957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var state_34612__$1 = state_34612;
var statearr_34615_36958 = state_34612__$1;
(statearr_34615_36958[(2)] = null);

(statearr_34615_36958[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34616_36960 = state_34612__$1;
(statearr_34616_36960[(2)] = null);

(statearr_34616_36960[(1)] = (2));


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
var statearr_34618_36961 = state_34612__$1;
(statearr_34618_36961[(1)] = (5));

} else {
var statearr_34619_36963 = state_34612__$1;
(statearr_34619_36963[(1)] = (6));

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
var statearr_34620_36964 = state_34612__$1;
(statearr_34620_36964[(2)] = inst_34603);

(statearr_34620_36964[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_36966 = state_34612__$1;
(statearr_34622_36966[(2)] = null);

(statearr_34622_36966[(1)] = (2));


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
var statearr_34623_36968 = state_34612__$1;
(statearr_34623_36968[(1)] = (19));

} else {
var statearr_34624_36969 = state_34612__$1;
(statearr_34624_36969[(1)] = (20));

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
var statearr_34625_36970 = state_34612__$1;
(statearr_34625_36970[(2)] = null);

(statearr_34625_36970[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34587 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34626 = state_34612;
(statearr_34626[(10)] = inst_34587);

return statearr_34626;
})();
var statearr_34627_36972 = state_34612__$1;
(statearr_34627_36972[(2)] = null);

(statearr_34627_36972[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34628_36979 = state_34612__$1;
(statearr_34628_36979[(2)] = null);

(statearr_34628_36979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_36980 = state_34612__$1;
(statearr_34629_36980[(1)] = (8));

} else {
var statearr_34630_36981 = state_34612__$1;
(statearr_34630_36981[(1)] = (9));

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
var statearr_34632_36983 = state_34612__$1;
(statearr_34632_36983[(1)] = (15));

} else {
var statearr_34633_36984 = state_34612__$1;
(statearr_34633_36984[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34634_36985 = state_34612__$1;
(statearr_34634_36985[(2)] = false);

(statearr_34634_36985[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34635_36986 = state_34612__$1;
(statearr_34635_36986[(2)] = inst_34584);

(statearr_34635_36986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34636_36990 = state_34612__$1;
(statearr_34636_36990[(2)] = inst_34595);

(statearr_34636_36990[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34581 = cljs.core.async.close_BANG_(to);
var state_34612__$1 = state_34612;
var statearr_34637_36992 = state_34612__$1;
(statearr_34637_36992[(2)] = inst_34581);

(statearr_34637_36992[(1)] = (10));


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
var statearr_34640_36994 = state_34612;
(statearr_34640_36994[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36995 = state_34612;
state_34612 = G__36995;
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
var G__34655 = arguments.length;
switch (G__34655) {
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
var c__34274__auto___37011 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34684){
var state_val_34685 = (state_34684[(1)]);
if((state_val_34685 === (7))){
var inst_34680 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
var statearr_34686_37012 = state_34684__$1;
(statearr_34686_37012[(2)] = inst_34680);

(statearr_34686_37012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (1))){
var state_34684__$1 = state_34684;
var statearr_34687_37013 = state_34684__$1;
(statearr_34687_37013[(2)] = null);

(statearr_34687_37013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (4))){
var inst_34659 = (state_34684[(7)]);
var inst_34659__$1 = (state_34684[(2)]);
var inst_34660 = (inst_34659__$1 == null);
var state_34684__$1 = (function (){var statearr_34688 = state_34684;
(statearr_34688[(7)] = inst_34659__$1);

return statearr_34688;
})();
if(cljs.core.truth_(inst_34660)){
var statearr_34689_37017 = state_34684__$1;
(statearr_34689_37017[(1)] = (5));

} else {
var statearr_34690_37019 = state_34684__$1;
(statearr_34690_37019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (13))){
var state_34684__$1 = state_34684;
var statearr_34692_37020 = state_34684__$1;
(statearr_34692_37020[(2)] = null);

(statearr_34692_37020[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (6))){
var inst_34659 = (state_34684[(7)]);
var inst_34665 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34659) : p.call(null,inst_34659));
var state_34684__$1 = state_34684;
if(cljs.core.truth_(inst_34665)){
var statearr_34693_37026 = state_34684__$1;
(statearr_34693_37026[(1)] = (9));

} else {
var statearr_34694_37027 = state_34684__$1;
(statearr_34694_37027[(1)] = (10));

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
var statearr_34696_37030 = state_34684__$1;
(statearr_34696_37030[(2)] = null);

(statearr_34696_37030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (2))){
var state_34684__$1 = state_34684;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34684__$1,(4),ch);
} else {
if((state_val_34685 === (11))){
var inst_34659 = (state_34684[(7)]);
var inst_34669 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34684__$1,(8),inst_34669,inst_34659);
} else {
if((state_val_34685 === (9))){
var state_34684__$1 = state_34684;
var statearr_34698_37036 = state_34684__$1;
(statearr_34698_37036[(2)] = tc);

(statearr_34698_37036[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (5))){
var inst_34662 = cljs.core.async.close_BANG_(tc);
var inst_34663 = cljs.core.async.close_BANG_(fc);
var state_34684__$1 = (function (){var statearr_34700 = state_34684;
(statearr_34700[(8)] = inst_34662);

return statearr_34700;
})();
var statearr_34701_37044 = state_34684__$1;
(statearr_34701_37044[(2)] = inst_34663);

(statearr_34701_37044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (14))){
var inst_34678 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
var statearr_34705_37048 = state_34684__$1;
(statearr_34705_37048[(2)] = inst_34678);

(statearr_34705_37048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (10))){
var state_34684__$1 = state_34684;
var statearr_34706_37049 = state_34684__$1;
(statearr_34706_37049[(2)] = fc);

(statearr_34706_37049[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (8))){
var inst_34671 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
if(cljs.core.truth_(inst_34671)){
var statearr_34707_37052 = state_34684__$1;
(statearr_34707_37052[(1)] = (12));

} else {
var statearr_34708_37053 = state_34684__$1;
(statearr_34708_37053[(1)] = (13));

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
var statearr_34709 = [null,null,null,null,null,null,null,null,null];
(statearr_34709[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34709[(1)] = (1));

return statearr_34709;
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
}catch (e34710){if((e34710 instanceof Object)){
var ex__34210__auto__ = e34710;
var statearr_34711_37061 = state_34684;
(statearr_34711_37061[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34710;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37064 = state_34684;
state_34684 = G__37064;
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
(statearr_34713[(6)] = c__34274__auto___37011);

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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34737){
var state_val_34738 = (state_34737[(1)]);
if((state_val_34738 === (7))){
var inst_34733 = (state_34737[(2)]);
var state_34737__$1 = state_34737;
var statearr_34742_37074 = state_34737__$1;
(statearr_34742_37074[(2)] = inst_34733);

(statearr_34742_37074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34738 === (1))){
var inst_34717 = init;
var state_34737__$1 = (function (){var statearr_34743 = state_34737;
(statearr_34743[(7)] = inst_34717);

return statearr_34743;
})();
var statearr_34744_37081 = state_34737__$1;
(statearr_34744_37081[(2)] = null);

(statearr_34744_37081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34738 === (4))){
var inst_34720 = (state_34737[(8)]);
var inst_34720__$1 = (state_34737[(2)]);
var inst_34721 = (inst_34720__$1 == null);
var state_34737__$1 = (function (){var statearr_34745 = state_34737;
(statearr_34745[(8)] = inst_34720__$1);

return statearr_34745;
})();
if(cljs.core.truth_(inst_34721)){
var statearr_34746_37083 = state_34737__$1;
(statearr_34746_37083[(1)] = (5));

} else {
var statearr_34747_37085 = state_34737__$1;
(statearr_34747_37085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34738 === (6))){
var inst_34724 = (state_34737[(9)]);
var inst_34717 = (state_34737[(7)]);
var inst_34720 = (state_34737[(8)]);
var inst_34724__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34717,inst_34720) : f.call(null,inst_34717,inst_34720));
var inst_34725 = cljs.core.reduced_QMARK_(inst_34724__$1);
var state_34737__$1 = (function (){var statearr_34748 = state_34737;
(statearr_34748[(9)] = inst_34724__$1);

return statearr_34748;
})();
if(inst_34725){
var statearr_34749_37089 = state_34737__$1;
(statearr_34749_37089[(1)] = (8));

} else {
var statearr_34753_37090 = state_34737__$1;
(statearr_34753_37090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34738 === (3))){
var inst_34735 = (state_34737[(2)]);
var state_34737__$1 = state_34737;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34737__$1,inst_34735);
} else {
if((state_val_34738 === (2))){
var state_34737__$1 = state_34737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34737__$1,(4),ch);
} else {
if((state_val_34738 === (9))){
var inst_34724 = (state_34737[(9)]);
var inst_34717 = inst_34724;
var state_34737__$1 = (function (){var statearr_34754 = state_34737;
(statearr_34754[(7)] = inst_34717);

return statearr_34754;
})();
var statearr_34755_37094 = state_34737__$1;
(statearr_34755_37094[(2)] = null);

(statearr_34755_37094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34738 === (5))){
var inst_34717 = (state_34737[(7)]);
var state_34737__$1 = state_34737;
var statearr_34756_37100 = state_34737__$1;
(statearr_34756_37100[(2)] = inst_34717);

(statearr_34756_37100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34738 === (10))){
var inst_34731 = (state_34737[(2)]);
var state_34737__$1 = state_34737;
var statearr_34757_37101 = state_34737__$1;
(statearr_34757_37101[(2)] = inst_34731);

(statearr_34757_37101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34738 === (8))){
var inst_34724 = (state_34737[(9)]);
var inst_34727 = cljs.core.deref(inst_34724);
var state_34737__$1 = state_34737;
var statearr_34758_37107 = state_34737__$1;
(statearr_34758_37107[(2)] = inst_34727);

(statearr_34758_37107[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__34207__auto____1 = (function (state_34737){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34737);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34760){if((e34760 instanceof Object)){
var ex__34210__auto__ = e34760;
var statearr_34761_37111 = state_34737;
(statearr_34761_37111[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37114 = state_34737;
state_34737 = G__37114;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34207__auto__ = function(state_34737){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34207__auto____1.call(this,state_34737);
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
var statearr_34772_37123 = state_34768;
(statearr_34772_37123[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34771;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37130 = state_34768;
state_34768 = G__37130;
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
var state__34276__auto__ = (function (){var statearr_34776 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34776[(6)] = c__34274__auto__);

return statearr_34776;
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
var G__34782 = arguments.length;
switch (G__34782) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34809){
var state_val_34810 = (state_34809[(1)]);
if((state_val_34810 === (7))){
var inst_34790 = (state_34809[(2)]);
var state_34809__$1 = state_34809;
var statearr_34815_37137 = state_34809__$1;
(statearr_34815_37137[(2)] = inst_34790);

(statearr_34815_37137[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (1))){
var inst_34783 = cljs.core.seq(coll);
var inst_34784 = inst_34783;
var state_34809__$1 = (function (){var statearr_34816 = state_34809;
(statearr_34816[(7)] = inst_34784);

return statearr_34816;
})();
var statearr_34817_37141 = state_34809__$1;
(statearr_34817_37141[(2)] = null);

(statearr_34817_37141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (4))){
var inst_34784 = (state_34809[(7)]);
var inst_34788 = cljs.core.first(inst_34784);
var state_34809__$1 = state_34809;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34809__$1,(7),ch,inst_34788);
} else {
if((state_val_34810 === (13))){
var inst_34802 = (state_34809[(2)]);
var state_34809__$1 = state_34809;
var statearr_34818_37146 = state_34809__$1;
(statearr_34818_37146[(2)] = inst_34802);

(statearr_34818_37146[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (6))){
var inst_34793 = (state_34809[(2)]);
var state_34809__$1 = state_34809;
if(cljs.core.truth_(inst_34793)){
var statearr_34819_37149 = state_34809__$1;
(statearr_34819_37149[(1)] = (8));

} else {
var statearr_34820_37150 = state_34809__$1;
(statearr_34820_37150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (3))){
var inst_34807 = (state_34809[(2)]);
var state_34809__$1 = state_34809;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34809__$1,inst_34807);
} else {
if((state_val_34810 === (12))){
var state_34809__$1 = state_34809;
var statearr_34821_37151 = state_34809__$1;
(statearr_34821_37151[(2)] = null);

(statearr_34821_37151[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (2))){
var inst_34784 = (state_34809[(7)]);
var state_34809__$1 = state_34809;
if(cljs.core.truth_(inst_34784)){
var statearr_34822_37154 = state_34809__$1;
(statearr_34822_37154[(1)] = (4));

} else {
var statearr_34823_37155 = state_34809__$1;
(statearr_34823_37155[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (11))){
var inst_34799 = cljs.core.async.close_BANG_(ch);
var state_34809__$1 = state_34809;
var statearr_34824_37156 = state_34809__$1;
(statearr_34824_37156[(2)] = inst_34799);

(statearr_34824_37156[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (9))){
var state_34809__$1 = state_34809;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34828_37158 = state_34809__$1;
(statearr_34828_37158[(1)] = (11));

} else {
var statearr_34829_37161 = state_34809__$1;
(statearr_34829_37161[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (5))){
var inst_34784 = (state_34809[(7)]);
var state_34809__$1 = state_34809;
var statearr_34830_37165 = state_34809__$1;
(statearr_34830_37165[(2)] = inst_34784);

(statearr_34830_37165[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (10))){
var inst_34804 = (state_34809[(2)]);
var state_34809__$1 = state_34809;
var statearr_34834_37168 = state_34809__$1;
(statearr_34834_37168[(2)] = inst_34804);

(statearr_34834_37168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34810 === (8))){
var inst_34784 = (state_34809[(7)]);
var inst_34795 = cljs.core.next(inst_34784);
var inst_34784__$1 = inst_34795;
var state_34809__$1 = (function (){var statearr_34835 = state_34809;
(statearr_34835[(7)] = inst_34784__$1);

return statearr_34835;
})();
var statearr_34836_37172 = state_34809__$1;
(statearr_34836_37172[(2)] = null);

(statearr_34836_37172[(1)] = (2));


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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34809){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34809);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34838){if((e34838 instanceof Object)){
var ex__34210__auto__ = e34838;
var statearr_34839_37173 = state_34809;
(statearr_34839_37173[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34838;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37174 = state_34809;
state_34809 = G__37174;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34809){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34809);
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
var c__34274__auto___37228 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34990){
var state_val_34995 = (state_34990[(1)]);
if((state_val_34995 === (7))){
var inst_34986 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_34998_37233 = state_34990__$1;
(statearr_34998_37233[(2)] = inst_34986);

(statearr_34998_37233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (20))){
var inst_34877 = (state_34990[(7)]);
var inst_34894 = cljs.core.first(inst_34877);
var inst_34895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34894,(0),null);
var inst_34896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34894,(1),null);
var state_34990__$1 = (function (){var statearr_34999 = state_34990;
(statearr_34999[(8)] = inst_34895);

return statearr_34999;
})();
if(cljs.core.truth_(inst_34896)){
var statearr_35000_37235 = state_34990__$1;
(statearr_35000_37235[(1)] = (22));

} else {
var statearr_35001_37236 = state_34990__$1;
(statearr_35001_37236[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (27))){
var inst_34927 = (state_34990[(9)]);
var inst_34846 = (state_34990[(10)]);
var inst_34925 = (state_34990[(11)]);
var inst_34932 = (state_34990[(12)]);
var inst_34932__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34925,inst_34927);
var inst_34933 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34932__$1,inst_34846,done);
var state_34990__$1 = (function (){var statearr_35004 = state_34990;
(statearr_35004[(12)] = inst_34932__$1);

return statearr_35004;
})();
if(cljs.core.truth_(inst_34933)){
var statearr_35005_37241 = state_34990__$1;
(statearr_35005_37241[(1)] = (30));

} else {
var statearr_35007_37242 = state_34990__$1;
(statearr_35007_37242[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (1))){
var state_34990__$1 = state_34990;
var statearr_35010_37244 = state_34990__$1;
(statearr_35010_37244[(2)] = null);

(statearr_35010_37244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (24))){
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
var statearr_35013_37253 = state_34990__$1;
(statearr_35013_37253[(2)] = null);

(statearr_35013_37253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (39))){
var state_34990__$1 = state_34990;
var statearr_35020_37254 = state_34990__$1;
(statearr_35020_37254[(2)] = null);

(statearr_35020_37254[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (4))){
var inst_34846 = (state_34990[(10)]);
var inst_34846__$1 = (state_34990[(2)]);
var inst_34847 = (inst_34846__$1 == null);
var state_34990__$1 = (function (){var statearr_35022 = state_34990;
(statearr_35022[(10)] = inst_34846__$1);

return statearr_35022;
})();
if(cljs.core.truth_(inst_34847)){
var statearr_35025_37259 = state_34990__$1;
(statearr_35025_37259[(1)] = (5));

} else {
var statearr_35036_37264 = state_34990__$1;
(statearr_35036_37264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (15))){
var inst_34857 = (state_34990[(13)]);
var inst_34856 = (state_34990[(14)]);
var inst_34858 = (state_34990[(15)]);
var inst_34855 = (state_34990[(16)]);
var inst_34873 = (state_34990[(2)]);
var inst_34874 = (inst_34858 + (1));
var tmp35014 = inst_34857;
var tmp35015 = inst_34856;
var tmp35016 = inst_34855;
var inst_34855__$1 = tmp35016;
var inst_34856__$1 = tmp35015;
var inst_34857__$1 = tmp35014;
var inst_34858__$1 = inst_34874;
var state_34990__$1 = (function (){var statearr_35040 = state_34990;
(statearr_35040[(18)] = inst_34873);

(statearr_35040[(13)] = inst_34857__$1);

(statearr_35040[(14)] = inst_34856__$1);

(statearr_35040[(15)] = inst_34858__$1);

(statearr_35040[(16)] = inst_34855__$1);

return statearr_35040;
})();
var statearr_35043_37277 = state_34990__$1;
(statearr_35043_37277[(2)] = null);

(statearr_35043_37277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (21))){
var inst_34906 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35049_37282 = state_34990__$1;
(statearr_35049_37282[(2)] = inst_34906);

(statearr_35049_37282[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (31))){
var inst_34932 = (state_34990[(12)]);
var inst_34936 = done(null);
var inst_34937 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34932);
var state_34990__$1 = (function (){var statearr_35054 = state_34990;
(statearr_35054[(19)] = inst_34936);

return statearr_35054;
})();
var statearr_35057_37287 = state_34990__$1;
(statearr_35057_37287[(2)] = inst_34937);

(statearr_35057_37287[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (32))){
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
var state_34990__$1 = (function (){var statearr_35071 = state_34990;
(statearr_35071[(9)] = inst_34927__$1);

(statearr_35071[(11)] = inst_34925__$1);

(statearr_35071[(20)] = inst_34924__$1);

(statearr_35071[(21)] = inst_34926__$1);

(statearr_35071[(22)] = inst_34939);

return statearr_35071;
})();
var statearr_35078_37292 = state_34990__$1;
(statearr_35078_37292[(2)] = null);

(statearr_35078_37292[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (40))){
var inst_34956 = (state_34990[(23)]);
var inst_34961 = done(null);
var inst_34962 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34956);
var state_34990__$1 = (function (){var statearr_35083 = state_34990;
(statearr_35083[(24)] = inst_34961);

return statearr_35083;
})();
var statearr_35087_37295 = state_34990__$1;
(statearr_35087_37295[(2)] = inst_34962);

(statearr_35087_37295[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (33))){
var inst_34945 = (state_34990[(25)]);
var inst_34947 = cljs.core.chunked_seq_QMARK_(inst_34945);
var state_34990__$1 = state_34990;
if(inst_34947){
var statearr_35093_37299 = state_34990__$1;
(statearr_35093_37299[(1)] = (36));

} else {
var statearr_35095_37301 = state_34990__$1;
(statearr_35095_37301[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (13))){
var inst_34867 = (state_34990[(26)]);
var inst_34870 = cljs.core.async.close_BANG_(inst_34867);
var state_34990__$1 = state_34990;
var statearr_35103_37302 = state_34990__$1;
(statearr_35103_37302[(2)] = inst_34870);

(statearr_35103_37302[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (22))){
var inst_34895 = (state_34990[(8)]);
var inst_34899 = cljs.core.async.close_BANG_(inst_34895);
var state_34990__$1 = state_34990;
var statearr_35110_37303 = state_34990__$1;
(statearr_35110_37303[(2)] = inst_34899);

(statearr_35110_37303[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (36))){
var inst_34945 = (state_34990[(25)]);
var inst_34950 = cljs.core.chunk_first(inst_34945);
var inst_34951 = cljs.core.chunk_rest(inst_34945);
var inst_34952 = cljs.core.count(inst_34950);
var inst_34924 = inst_34951;
var inst_34925 = inst_34950;
var inst_34926 = inst_34952;
var inst_34927 = (0);
var state_34990__$1 = (function (){var statearr_35118 = state_34990;
(statearr_35118[(9)] = inst_34927);

(statearr_35118[(11)] = inst_34925);

(statearr_35118[(20)] = inst_34924);

(statearr_35118[(21)] = inst_34926);

return statearr_35118;
})();
var statearr_35123_37308 = state_34990__$1;
(statearr_35123_37308[(2)] = null);

(statearr_35123_37308[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (41))){
var inst_34945 = (state_34990[(25)]);
var inst_34964 = (state_34990[(2)]);
var inst_34965 = cljs.core.next(inst_34945);
var inst_34924 = inst_34965;
var inst_34925 = null;
var inst_34926 = (0);
var inst_34927 = (0);
var state_34990__$1 = (function (){var statearr_35131 = state_34990;
(statearr_35131[(9)] = inst_34927);

(statearr_35131[(11)] = inst_34925);

(statearr_35131[(20)] = inst_34924);

(statearr_35131[(21)] = inst_34926);

(statearr_35131[(27)] = inst_34964);

return statearr_35131;
})();
var statearr_35135_37316 = state_34990__$1;
(statearr_35135_37316[(2)] = null);

(statearr_35135_37316[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (43))){
var state_34990__$1 = state_34990;
var statearr_35142_37319 = state_34990__$1;
(statearr_35142_37319[(2)] = null);

(statearr_35142_37319[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (29))){
var inst_34974 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35143_37322 = state_34990__$1;
(statearr_35143_37322[(2)] = inst_34974);

(statearr_35143_37322[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (44))){
var inst_34983 = (state_34990[(2)]);
var state_34990__$1 = (function (){var statearr_35144 = state_34990;
(statearr_35144[(28)] = inst_34983);

return statearr_35144;
})();
var statearr_35145_37328 = state_34990__$1;
(statearr_35145_37328[(2)] = null);

(statearr_35145_37328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (6))){
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
var statearr_35151_37337 = state_34990__$1;
(statearr_35151_37337[(2)] = null);

(statearr_35151_37337[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (28))){
var inst_34924 = (state_34990[(20)]);
var inst_34945 = (state_34990[(25)]);
var inst_34945__$1 = cljs.core.seq(inst_34924);
var state_34990__$1 = (function (){var statearr_35175 = state_34990;
(statearr_35175[(25)] = inst_34945__$1);

return statearr_35175;
})();
if(inst_34945__$1){
var statearr_35176_37345 = state_34990__$1;
(statearr_35176_37345[(1)] = (33));

} else {
var statearr_35177_37346 = state_34990__$1;
(statearr_35177_37346[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (25))){
var inst_34927 = (state_34990[(9)]);
var inst_34926 = (state_34990[(21)]);
var inst_34929 = (inst_34927 < inst_34926);
var inst_34930 = inst_34929;
var state_34990__$1 = state_34990;
if(cljs.core.truth_(inst_34930)){
var statearr_35180_37350 = state_34990__$1;
(statearr_35180_37350[(1)] = (27));

} else {
var statearr_35183_37352 = state_34990__$1;
(statearr_35183_37352[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (34))){
var state_34990__$1 = state_34990;
var statearr_35192_37353 = state_34990__$1;
(statearr_35192_37353[(2)] = null);

(statearr_35192_37353[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (17))){
var state_34990__$1 = state_34990;
var statearr_35197_37356 = state_34990__$1;
(statearr_35197_37356[(2)] = null);

(statearr_35197_37356[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (3))){
var inst_34988 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34990__$1,inst_34988);
} else {
if((state_val_34995 === (12))){
var inst_34911 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35206_37363 = state_34990__$1;
(statearr_35206_37363[(2)] = inst_34911);

(statearr_35206_37363[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (2))){
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34990__$1,(4),ch);
} else {
if((state_val_34995 === (23))){
var state_34990__$1 = state_34990;
var statearr_35215_37369 = state_34990__$1;
(statearr_35215_37369[(2)] = null);

(statearr_35215_37369[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (35))){
var inst_34971 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35223_37370 = state_34990__$1;
(statearr_35223_37370[(2)] = inst_34971);

(statearr_35223_37370[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (19))){
var inst_34877 = (state_34990[(7)]);
var inst_34884 = cljs.core.chunk_first(inst_34877);
var inst_34885 = cljs.core.chunk_rest(inst_34877);
var inst_34887 = cljs.core.count(inst_34884);
var inst_34855 = inst_34885;
var inst_34856 = inst_34884;
var inst_34857 = inst_34887;
var inst_34858 = (0);
var state_34990__$1 = (function (){var statearr_35230 = state_34990;
(statearr_35230[(13)] = inst_34857);

(statearr_35230[(14)] = inst_34856);

(statearr_35230[(15)] = inst_34858);

(statearr_35230[(16)] = inst_34855);

return statearr_35230;
})();
var statearr_35234_37375 = state_34990__$1;
(statearr_35234_37375[(2)] = null);

(statearr_35234_37375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (11))){
var inst_34855 = (state_34990[(16)]);
var inst_34877 = (state_34990[(7)]);
var inst_34877__$1 = cljs.core.seq(inst_34855);
var state_34990__$1 = (function (){var statearr_35241 = state_34990;
(statearr_35241[(7)] = inst_34877__$1);

return statearr_35241;
})();
if(inst_34877__$1){
var statearr_35244_37380 = state_34990__$1;
(statearr_35244_37380[(1)] = (16));

} else {
var statearr_35245_37383 = state_34990__$1;
(statearr_35245_37383[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (9))){
var inst_34913 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35251_37385 = state_34990__$1;
(statearr_35251_37385[(2)] = inst_34913);

(statearr_35251_37385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (5))){
var inst_34853 = cljs.core.deref(cs);
var inst_34854 = cljs.core.seq(inst_34853);
var inst_34855 = inst_34854;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34990__$1 = (function (){var statearr_35260 = state_34990;
(statearr_35260[(13)] = inst_34857);

(statearr_35260[(14)] = inst_34856);

(statearr_35260[(15)] = inst_34858);

(statearr_35260[(16)] = inst_34855);

return statearr_35260;
})();
var statearr_35266_37388 = state_34990__$1;
(statearr_35266_37388[(2)] = null);

(statearr_35266_37388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (14))){
var state_34990__$1 = state_34990;
var statearr_35269_37395 = state_34990__$1;
(statearr_35269_37395[(2)] = null);

(statearr_35269_37395[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (45))){
var inst_34980 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35274_37397 = state_34990__$1;
(statearr_35274_37397[(2)] = inst_34980);

(statearr_35274_37397[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (26))){
var inst_34916 = (state_34990[(29)]);
var inst_34976 = (state_34990[(2)]);
var inst_34977 = cljs.core.seq(inst_34916);
var state_34990__$1 = (function (){var statearr_35281 = state_34990;
(statearr_35281[(31)] = inst_34976);

return statearr_35281;
})();
if(inst_34977){
var statearr_35285_37401 = state_34990__$1;
(statearr_35285_37401[(1)] = (42));

} else {
var statearr_35287_37402 = state_34990__$1;
(statearr_35287_37402[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (16))){
var inst_34877 = (state_34990[(7)]);
var inst_34881 = cljs.core.chunked_seq_QMARK_(inst_34877);
var state_34990__$1 = state_34990;
if(inst_34881){
var statearr_35293_37404 = state_34990__$1;
(statearr_35293_37404[(1)] = (19));

} else {
var statearr_35295_37405 = state_34990__$1;
(statearr_35295_37405[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (38))){
var inst_34968 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35301_37409 = state_34990__$1;
(statearr_35301_37409[(2)] = inst_34968);

(statearr_35301_37409[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (30))){
var state_34990__$1 = state_34990;
var statearr_35306_37410 = state_34990__$1;
(statearr_35306_37410[(2)] = null);

(statearr_35306_37410[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (10))){
var inst_34856 = (state_34990[(14)]);
var inst_34858 = (state_34990[(15)]);
var inst_34866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34856,inst_34858);
var inst_34867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(0),null);
var inst_34868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(1),null);
var state_34990__$1 = (function (){var statearr_35313 = state_34990;
(statearr_35313[(26)] = inst_34867);

return statearr_35313;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_35317_37418 = state_34990__$1;
(statearr_35317_37418[(1)] = (13));

} else {
var statearr_35320_37419 = state_34990__$1;
(statearr_35320_37419[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (18))){
var inst_34909 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35322_37421 = state_34990__$1;
(statearr_35322_37421[(2)] = inst_34909);

(statearr_35322_37421[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (42))){
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34990__$1,(45),dchan);
} else {
if((state_val_34995 === (37))){
var inst_34846 = (state_34990[(10)]);
var inst_34956 = (state_34990[(23)]);
var inst_34945 = (state_34990[(25)]);
var inst_34956__$1 = cljs.core.first(inst_34945);
var inst_34958 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34956__$1,inst_34846,done);
var state_34990__$1 = (function (){var statearr_35337 = state_34990;
(statearr_35337[(23)] = inst_34956__$1);

return statearr_35337;
})();
if(cljs.core.truth_(inst_34958)){
var statearr_35342_37427 = state_34990__$1;
(statearr_35342_37427[(1)] = (39));

} else {
var statearr_35344_37428 = state_34990__$1;
(statearr_35344_37428[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (8))){
var inst_34857 = (state_34990[(13)]);
var inst_34858 = (state_34990[(15)]);
var inst_34860 = (inst_34858 < inst_34857);
var inst_34861 = inst_34860;
var state_34990__$1 = state_34990;
if(cljs.core.truth_(inst_34861)){
var statearr_35351_37432 = state_34990__$1;
(statearr_35351_37432[(1)] = (10));

} else {
var statearr_35352_37433 = state_34990__$1;
(statearr_35352_37433[(1)] = (11));

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
var G__37440 = state_34990;
state_34990 = G__37440;
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
var state__34276__auto__ = (function (){var statearr_35356 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35356[(6)] = c__34274__auto___37228);

return statearr_35356;
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
var len__4789__auto___37493 = arguments.length;
var i__4790__auto___37494 = (0);
while(true){
if((i__4790__auto___37494 < len__4789__auto___37493)){
args__4795__auto__.push((arguments[i__4790__auto___37494]));

var G__37495 = (i__4790__auto___37494 + (1));
i__4790__auto___37494 = G__37495;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35446){
var map__35447 = p__35446;
var map__35447__$1 = (((((!((map__35447 == null))))?(((((map__35447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35447):map__35447);
var opts = map__35447__$1;
var statearr_35451_37504 = state;
(statearr_35451_37504[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35453_37506 = state;
(statearr_35453_37506[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35459_37507 = state;
(statearr_35459_37507[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35419){
var G__35420 = cljs.core.first(seq35419);
var seq35419__$1 = cljs.core.next(seq35419);
var G__35421 = cljs.core.first(seq35419__$1);
var seq35419__$2 = cljs.core.next(seq35419__$1);
var G__35422 = cljs.core.first(seq35419__$2);
var seq35419__$3 = cljs.core.next(seq35419__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35420,G__35421,G__35422,seq35419__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35513 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35513 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35514){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35514 = meta35514;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35515,meta35514__$1){
var self__ = this;
var _35515__$1 = this;
return (new cljs.core.async.t_cljs$core$async35513(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35514__$1));
}));

(cljs.core.async.t_cljs$core$async35513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35515){
var self__ = this;
var _35515__$1 = this;
return self__.meta35514;
}));

(cljs.core.async.t_cljs$core$async35513.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35513.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35513.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35513.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35513.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35513.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35513.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35513.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35513.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35514","meta35514",327184272,null)], null);
}));

(cljs.core.async.t_cljs$core$async35513.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35513.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35513");

(cljs.core.async.t_cljs$core$async35513.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35513");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35513.
 */
cljs.core.async.__GT_t_cljs$core$async35513 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35513(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35514){
return (new cljs.core.async.t_cljs$core$async35513(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35514));
});

}

return (new cljs.core.async.t_cljs$core$async35513(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37571 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35681){
var state_val_35682 = (state_35681[(1)]);
if((state_val_35682 === (7))){
var inst_35590 = (state_35681[(2)]);
var state_35681__$1 = state_35681;
var statearr_35687_37575 = state_35681__$1;
(statearr_35687_37575[(2)] = inst_35590);

(statearr_35687_37575[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (20))){
var inst_35602 = (state_35681[(7)]);
var state_35681__$1 = state_35681;
var statearr_35688_37577 = state_35681__$1;
(statearr_35688_37577[(2)] = inst_35602);

(statearr_35688_37577[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (27))){
var state_35681__$1 = state_35681;
var statearr_35689_37582 = state_35681__$1;
(statearr_35689_37582[(2)] = null);

(statearr_35689_37582[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (1))){
var inst_35575 = (state_35681[(8)]);
var inst_35575__$1 = calc_state();
var inst_35578 = (inst_35575__$1 == null);
var inst_35579 = cljs.core.not(inst_35578);
var state_35681__$1 = (function (){var statearr_35691 = state_35681;
(statearr_35691[(8)] = inst_35575__$1);

return statearr_35691;
})();
if(inst_35579){
var statearr_35692_37588 = state_35681__$1;
(statearr_35692_37588[(1)] = (2));

} else {
var statearr_35695_37589 = state_35681__$1;
(statearr_35695_37589[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (24))){
var inst_35637 = (state_35681[(9)]);
var inst_35628 = (state_35681[(10)]);
var inst_35651 = (state_35681[(11)]);
var inst_35651__$1 = (inst_35628.cljs$core$IFn$_invoke$arity$1 ? inst_35628.cljs$core$IFn$_invoke$arity$1(inst_35637) : inst_35628.call(null,inst_35637));
var state_35681__$1 = (function (){var statearr_35697 = state_35681;
(statearr_35697[(11)] = inst_35651__$1);

return statearr_35697;
})();
if(cljs.core.truth_(inst_35651__$1)){
var statearr_35698_37600 = state_35681__$1;
(statearr_35698_37600[(1)] = (29));

} else {
var statearr_35699_37602 = state_35681__$1;
(statearr_35699_37602[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (4))){
var inst_35593 = (state_35681[(2)]);
var state_35681__$1 = state_35681;
if(cljs.core.truth_(inst_35593)){
var statearr_35704_37604 = state_35681__$1;
(statearr_35704_37604[(1)] = (8));

} else {
var statearr_35705_37605 = state_35681__$1;
(statearr_35705_37605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (15))){
var inst_35620 = (state_35681[(2)]);
var state_35681__$1 = state_35681;
if(cljs.core.truth_(inst_35620)){
var statearr_35707_37607 = state_35681__$1;
(statearr_35707_37607[(1)] = (19));

} else {
var statearr_35708_37612 = state_35681__$1;
(statearr_35708_37612[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (21))){
var inst_35626 = (state_35681[(12)]);
var inst_35626__$1 = (state_35681[(2)]);
var inst_35628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35626__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35626__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35626__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35681__$1 = (function (){var statearr_35710 = state_35681;
(statearr_35710[(13)] = inst_35629);

(statearr_35710[(12)] = inst_35626__$1);

(statearr_35710[(10)] = inst_35628);

return statearr_35710;
})();
return cljs.core.async.ioc_alts_BANG_(state_35681__$1,(22),inst_35630);
} else {
if((state_val_35682 === (31))){
var inst_35661 = (state_35681[(2)]);
var state_35681__$1 = state_35681;
if(cljs.core.truth_(inst_35661)){
var statearr_35712_37620 = state_35681__$1;
(statearr_35712_37620[(1)] = (32));

} else {
var statearr_35713_37624 = state_35681__$1;
(statearr_35713_37624[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (32))){
var inst_35636 = (state_35681[(14)]);
var state_35681__$1 = state_35681;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35681__$1,(35),out,inst_35636);
} else {
if((state_val_35682 === (33))){
var inst_35626 = (state_35681[(12)]);
var inst_35602 = inst_35626;
var state_35681__$1 = (function (){var statearr_35715 = state_35681;
(statearr_35715[(7)] = inst_35602);

return statearr_35715;
})();
var statearr_35716_37632 = state_35681__$1;
(statearr_35716_37632[(2)] = null);

(statearr_35716_37632[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (13))){
var inst_35602 = (state_35681[(7)]);
var inst_35609 = inst_35602.cljs$lang$protocol_mask$partition0$;
var inst_35610 = (inst_35609 & (64));
var inst_35611 = inst_35602.cljs$core$ISeq$;
var inst_35612 = (cljs.core.PROTOCOL_SENTINEL === inst_35611);
var inst_35613 = ((inst_35610) || (inst_35612));
var state_35681__$1 = state_35681;
if(cljs.core.truth_(inst_35613)){
var statearr_35718_37639 = state_35681__$1;
(statearr_35718_37639[(1)] = (16));

} else {
var statearr_35719_37642 = state_35681__$1;
(statearr_35719_37642[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (22))){
var inst_35636 = (state_35681[(14)]);
var inst_35637 = (state_35681[(9)]);
var inst_35635 = (state_35681[(2)]);
var inst_35636__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35635,(0),null);
var inst_35637__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35635,(1),null);
var inst_35638 = (inst_35636__$1 == null);
var inst_35639 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35637__$1,change);
var inst_35640 = ((inst_35638) || (inst_35639));
var state_35681__$1 = (function (){var statearr_35721 = state_35681;
(statearr_35721[(14)] = inst_35636__$1);

(statearr_35721[(9)] = inst_35637__$1);

return statearr_35721;
})();
if(cljs.core.truth_(inst_35640)){
var statearr_35722_37650 = state_35681__$1;
(statearr_35722_37650[(1)] = (23));

} else {
var statearr_35723_37655 = state_35681__$1;
(statearr_35723_37655[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (36))){
var inst_35626 = (state_35681[(12)]);
var inst_35602 = inst_35626;
var state_35681__$1 = (function (){var statearr_35725 = state_35681;
(statearr_35725[(7)] = inst_35602);

return statearr_35725;
})();
var statearr_35726_37658 = state_35681__$1;
(statearr_35726_37658[(2)] = null);

(statearr_35726_37658[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (29))){
var inst_35651 = (state_35681[(11)]);
var state_35681__$1 = state_35681;
var statearr_35730_37661 = state_35681__$1;
(statearr_35730_37661[(2)] = inst_35651);

(statearr_35730_37661[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (6))){
var state_35681__$1 = state_35681;
var statearr_35733_37666 = state_35681__$1;
(statearr_35733_37666[(2)] = false);

(statearr_35733_37666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (28))){
var inst_35647 = (state_35681[(2)]);
var inst_35648 = calc_state();
var inst_35602 = inst_35648;
var state_35681__$1 = (function (){var statearr_35736 = state_35681;
(statearr_35736[(7)] = inst_35602);

(statearr_35736[(15)] = inst_35647);

return statearr_35736;
})();
var statearr_35739_37671 = state_35681__$1;
(statearr_35739_37671[(2)] = null);

(statearr_35739_37671[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (25))){
var inst_35676 = (state_35681[(2)]);
var state_35681__$1 = state_35681;
var statearr_35752_37673 = state_35681__$1;
(statearr_35752_37673[(2)] = inst_35676);

(statearr_35752_37673[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (34))){
var inst_35674 = (state_35681[(2)]);
var state_35681__$1 = state_35681;
var statearr_35758_37680 = state_35681__$1;
(statearr_35758_37680[(2)] = inst_35674);

(statearr_35758_37680[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (17))){
var state_35681__$1 = state_35681;
var statearr_35761_37682 = state_35681__$1;
(statearr_35761_37682[(2)] = false);

(statearr_35761_37682[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (3))){
var state_35681__$1 = state_35681;
var statearr_35762_37684 = state_35681__$1;
(statearr_35762_37684[(2)] = false);

(statearr_35762_37684[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (12))){
var inst_35678 = (state_35681[(2)]);
var state_35681__$1 = state_35681;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35681__$1,inst_35678);
} else {
if((state_val_35682 === (2))){
var inst_35575 = (state_35681[(8)]);
var inst_35582 = inst_35575.cljs$lang$protocol_mask$partition0$;
var inst_35583 = (inst_35582 & (64));
var inst_35584 = inst_35575.cljs$core$ISeq$;
var inst_35585 = (cljs.core.PROTOCOL_SENTINEL === inst_35584);
var inst_35586 = ((inst_35583) || (inst_35585));
var state_35681__$1 = state_35681;
if(cljs.core.truth_(inst_35586)){
var statearr_35767_37688 = state_35681__$1;
(statearr_35767_37688[(1)] = (5));

} else {
var statearr_35768_37689 = state_35681__$1;
(statearr_35768_37689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (23))){
var inst_35636 = (state_35681[(14)]);
var inst_35642 = (inst_35636 == null);
var state_35681__$1 = state_35681;
if(cljs.core.truth_(inst_35642)){
var statearr_35769_37690 = state_35681__$1;
(statearr_35769_37690[(1)] = (26));

} else {
var statearr_35770_37693 = state_35681__$1;
(statearr_35770_37693[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (35))){
var inst_35664 = (state_35681[(2)]);
var state_35681__$1 = state_35681;
if(cljs.core.truth_(inst_35664)){
var statearr_35771_37694 = state_35681__$1;
(statearr_35771_37694[(1)] = (36));

} else {
var statearr_35773_37695 = state_35681__$1;
(statearr_35773_37695[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (19))){
var inst_35602 = (state_35681[(7)]);
var inst_35623 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35602);
var state_35681__$1 = state_35681;
var statearr_35774_37696 = state_35681__$1;
(statearr_35774_37696[(2)] = inst_35623);

(statearr_35774_37696[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (11))){
var inst_35602 = (state_35681[(7)]);
var inst_35606 = (inst_35602 == null);
var inst_35607 = cljs.core.not(inst_35606);
var state_35681__$1 = state_35681;
if(inst_35607){
var statearr_35776_37699 = state_35681__$1;
(statearr_35776_37699[(1)] = (13));

} else {
var statearr_35778_37700 = state_35681__$1;
(statearr_35778_37700[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (9))){
var inst_35575 = (state_35681[(8)]);
var state_35681__$1 = state_35681;
var statearr_35780_37705 = state_35681__$1;
(statearr_35780_37705[(2)] = inst_35575);

(statearr_35780_37705[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (5))){
var state_35681__$1 = state_35681;
var statearr_35781_37706 = state_35681__$1;
(statearr_35781_37706[(2)] = true);

(statearr_35781_37706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (14))){
var state_35681__$1 = state_35681;
var statearr_35783_37707 = state_35681__$1;
(statearr_35783_37707[(2)] = false);

(statearr_35783_37707[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (26))){
var inst_35637 = (state_35681[(9)]);
var inst_35644 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35637);
var state_35681__$1 = state_35681;
var statearr_35786_37711 = state_35681__$1;
(statearr_35786_37711[(2)] = inst_35644);

(statearr_35786_37711[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (16))){
var state_35681__$1 = state_35681;
var statearr_35788_37712 = state_35681__$1;
(statearr_35788_37712[(2)] = true);

(statearr_35788_37712[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (38))){
var inst_35670 = (state_35681[(2)]);
var state_35681__$1 = state_35681;
var statearr_35790_37714 = state_35681__$1;
(statearr_35790_37714[(2)] = inst_35670);

(statearr_35790_37714[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (30))){
var inst_35629 = (state_35681[(13)]);
var inst_35637 = (state_35681[(9)]);
var inst_35628 = (state_35681[(10)]);
var inst_35656 = cljs.core.empty_QMARK_(inst_35628);
var inst_35657 = (inst_35629.cljs$core$IFn$_invoke$arity$1 ? inst_35629.cljs$core$IFn$_invoke$arity$1(inst_35637) : inst_35629.call(null,inst_35637));
var inst_35658 = cljs.core.not(inst_35657);
var inst_35659 = ((inst_35656) && (inst_35658));
var state_35681__$1 = state_35681;
var statearr_35791_37716 = state_35681__$1;
(statearr_35791_37716[(2)] = inst_35659);

(statearr_35791_37716[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (10))){
var inst_35575 = (state_35681[(8)]);
var inst_35598 = (state_35681[(2)]);
var inst_35599 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35598,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35600 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35598,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35598,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35602 = inst_35575;
var state_35681__$1 = (function (){var statearr_35794 = state_35681;
(statearr_35794[(16)] = inst_35600);

(statearr_35794[(7)] = inst_35602);

(statearr_35794[(17)] = inst_35601);

(statearr_35794[(18)] = inst_35599);

return statearr_35794;
})();
var statearr_35798_37721 = state_35681__$1;
(statearr_35798_37721[(2)] = null);

(statearr_35798_37721[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (18))){
var inst_35617 = (state_35681[(2)]);
var state_35681__$1 = state_35681;
var statearr_35800_37727 = state_35681__$1;
(statearr_35800_37727[(2)] = inst_35617);

(statearr_35800_37727[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (37))){
var state_35681__$1 = state_35681;
var statearr_35801_37729 = state_35681__$1;
(statearr_35801_37729[(2)] = null);

(statearr_35801_37729[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35682 === (8))){
var inst_35575 = (state_35681[(8)]);
var inst_35595 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35575);
var state_35681__$1 = state_35681;
var statearr_35805_37733 = state_35681__$1;
(statearr_35805_37733[(2)] = inst_35595);

(statearr_35805_37733[(1)] = (10));


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
var statearr_35811 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35811[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35811[(1)] = (1));

return statearr_35811;
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
}catch (e35814){if((e35814 instanceof Object)){
var ex__34210__auto__ = e35814;
var statearr_35817_37739 = state_35681;
(statearr_35817_37739[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35814;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37740 = state_35681;
state_35681 = G__37740;
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
var state__34276__auto__ = (function (){var statearr_35818 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35818[(6)] = c__34274__auto___37571);

return statearr_35818;
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
var G__35845 = arguments.length;
switch (G__35845) {
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
var G__35863 = arguments.length;
switch (G__35863) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35859_SHARP_){
if(cljs.core.truth_((p1__35859_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35859_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35859_SHARP_.call(null,topic)))){
return p1__35859_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35859_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35871 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35871 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35872){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35872 = meta35872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35873,meta35872__$1){
var self__ = this;
var _35873__$1 = this;
return (new cljs.core.async.t_cljs$core$async35871(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35872__$1));
}));

(cljs.core.async.t_cljs$core$async35871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35873){
var self__ = this;
var _35873__$1 = this;
return self__.meta35872;
}));

(cljs.core.async.t_cljs$core$async35871.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35871.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35871.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35871.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35871.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35871.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35871.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35871.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35872","meta35872",-1351325810,null)], null);
}));

(cljs.core.async.t_cljs$core$async35871.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35871.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35871");

(cljs.core.async.t_cljs$core$async35871.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35871");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35871.
 */
cljs.core.async.__GT_t_cljs$core$async35871 = (function cljs$core$async$__GT_t_cljs$core$async35871(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35872){
return (new cljs.core.async.t_cljs$core$async35871(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35872));
});

}

return (new cljs.core.async.t_cljs$core$async35871(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37821 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35967){
var state_val_35968 = (state_35967[(1)]);
if((state_val_35968 === (7))){
var inst_35963 = (state_35967[(2)]);
var state_35967__$1 = state_35967;
var statearr_35972_37824 = state_35967__$1;
(statearr_35972_37824[(2)] = inst_35963);

(statearr_35972_37824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (20))){
var state_35967__$1 = state_35967;
var statearr_35973_37828 = state_35967__$1;
(statearr_35973_37828[(2)] = null);

(statearr_35973_37828[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (1))){
var state_35967__$1 = state_35967;
var statearr_35974_37829 = state_35967__$1;
(statearr_35974_37829[(2)] = null);

(statearr_35974_37829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (24))){
var inst_35946 = (state_35967[(7)]);
var inst_35955 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35946);
var state_35967__$1 = state_35967;
var statearr_35975_37832 = state_35967__$1;
(statearr_35975_37832[(2)] = inst_35955);

(statearr_35975_37832[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (4))){
var inst_35898 = (state_35967[(8)]);
var inst_35898__$1 = (state_35967[(2)]);
var inst_35899 = (inst_35898__$1 == null);
var state_35967__$1 = (function (){var statearr_35981 = state_35967;
(statearr_35981[(8)] = inst_35898__$1);

return statearr_35981;
})();
if(cljs.core.truth_(inst_35899)){
var statearr_35984_37838 = state_35967__$1;
(statearr_35984_37838[(1)] = (5));

} else {
var statearr_35985_37840 = state_35967__$1;
(statearr_35985_37840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (15))){
var inst_35940 = (state_35967[(2)]);
var state_35967__$1 = state_35967;
var statearr_35986_37844 = state_35967__$1;
(statearr_35986_37844[(2)] = inst_35940);

(statearr_35986_37844[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (21))){
var inst_35960 = (state_35967[(2)]);
var state_35967__$1 = (function (){var statearr_35991 = state_35967;
(statearr_35991[(9)] = inst_35960);

return statearr_35991;
})();
var statearr_35992_37849 = state_35967__$1;
(statearr_35992_37849[(2)] = null);

(statearr_35992_37849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (13))){
var inst_35922 = (state_35967[(10)]);
var inst_35924 = cljs.core.chunked_seq_QMARK_(inst_35922);
var state_35967__$1 = state_35967;
if(inst_35924){
var statearr_35996_37851 = state_35967__$1;
(statearr_35996_37851[(1)] = (16));

} else {
var statearr_35998_37854 = state_35967__$1;
(statearr_35998_37854[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (22))){
var inst_35952 = (state_35967[(2)]);
var state_35967__$1 = state_35967;
if(cljs.core.truth_(inst_35952)){
var statearr_35999_37856 = state_35967__$1;
(statearr_35999_37856[(1)] = (23));

} else {
var statearr_36001_37858 = state_35967__$1;
(statearr_36001_37858[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (6))){
var inst_35948 = (state_35967[(11)]);
var inst_35898 = (state_35967[(8)]);
var inst_35946 = (state_35967[(7)]);
var inst_35946__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35898) : topic_fn.call(null,inst_35898));
var inst_35947 = cljs.core.deref(mults);
var inst_35948__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35947,inst_35946__$1);
var state_35967__$1 = (function (){var statearr_36005 = state_35967;
(statearr_36005[(11)] = inst_35948__$1);

(statearr_36005[(7)] = inst_35946__$1);

return statearr_36005;
})();
if(cljs.core.truth_(inst_35948__$1)){
var statearr_36007_37866 = state_35967__$1;
(statearr_36007_37866[(1)] = (19));

} else {
var statearr_36009_37867 = state_35967__$1;
(statearr_36009_37867[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (25))){
var inst_35957 = (state_35967[(2)]);
var state_35967__$1 = state_35967;
var statearr_36012_37872 = state_35967__$1;
(statearr_36012_37872[(2)] = inst_35957);

(statearr_36012_37872[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (17))){
var inst_35922 = (state_35967[(10)]);
var inst_35931 = cljs.core.first(inst_35922);
var inst_35932 = cljs.core.async.muxch_STAR_(inst_35931);
var inst_35933 = cljs.core.async.close_BANG_(inst_35932);
var inst_35934 = cljs.core.next(inst_35922);
var inst_35908 = inst_35934;
var inst_35909 = null;
var inst_35910 = (0);
var inst_35911 = (0);
var state_35967__$1 = (function (){var statearr_36013 = state_35967;
(statearr_36013[(12)] = inst_35933);

(statearr_36013[(13)] = inst_35908);

(statearr_36013[(14)] = inst_35909);

(statearr_36013[(15)] = inst_35910);

(statearr_36013[(16)] = inst_35911);

return statearr_36013;
})();
var statearr_36014_37877 = state_35967__$1;
(statearr_36014_37877[(2)] = null);

(statearr_36014_37877[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (3))){
var inst_35965 = (state_35967[(2)]);
var state_35967__$1 = state_35967;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35967__$1,inst_35965);
} else {
if((state_val_35968 === (12))){
var inst_35942 = (state_35967[(2)]);
var state_35967__$1 = state_35967;
var statearr_36018_37879 = state_35967__$1;
(statearr_36018_37879[(2)] = inst_35942);

(statearr_36018_37879[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (2))){
var state_35967__$1 = state_35967;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35967__$1,(4),ch);
} else {
if((state_val_35968 === (23))){
var state_35967__$1 = state_35967;
var statearr_36022_37881 = state_35967__$1;
(statearr_36022_37881[(2)] = null);

(statearr_36022_37881[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (19))){
var inst_35948 = (state_35967[(11)]);
var inst_35898 = (state_35967[(8)]);
var inst_35950 = cljs.core.async.muxch_STAR_(inst_35948);
var state_35967__$1 = state_35967;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35967__$1,(22),inst_35950,inst_35898);
} else {
if((state_val_35968 === (11))){
var inst_35908 = (state_35967[(13)]);
var inst_35922 = (state_35967[(10)]);
var inst_35922__$1 = cljs.core.seq(inst_35908);
var state_35967__$1 = (function (){var statearr_36023 = state_35967;
(statearr_36023[(10)] = inst_35922__$1);

return statearr_36023;
})();
if(inst_35922__$1){
var statearr_36024_37891 = state_35967__$1;
(statearr_36024_37891[(1)] = (13));

} else {
var statearr_36025_37893 = state_35967__$1;
(statearr_36025_37893[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (9))){
var inst_35944 = (state_35967[(2)]);
var state_35967__$1 = state_35967;
var statearr_36029_37896 = state_35967__$1;
(statearr_36029_37896[(2)] = inst_35944);

(statearr_36029_37896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (5))){
var inst_35905 = cljs.core.deref(mults);
var inst_35906 = cljs.core.vals(inst_35905);
var inst_35907 = cljs.core.seq(inst_35906);
var inst_35908 = inst_35907;
var inst_35909 = null;
var inst_35910 = (0);
var inst_35911 = (0);
var state_35967__$1 = (function (){var statearr_36031 = state_35967;
(statearr_36031[(13)] = inst_35908);

(statearr_36031[(14)] = inst_35909);

(statearr_36031[(15)] = inst_35910);

(statearr_36031[(16)] = inst_35911);

return statearr_36031;
})();
var statearr_36032_37900 = state_35967__$1;
(statearr_36032_37900[(2)] = null);

(statearr_36032_37900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (14))){
var state_35967__$1 = state_35967;
var statearr_36036_37903 = state_35967__$1;
(statearr_36036_37903[(2)] = null);

(statearr_36036_37903[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (16))){
var inst_35922 = (state_35967[(10)]);
var inst_35926 = cljs.core.chunk_first(inst_35922);
var inst_35927 = cljs.core.chunk_rest(inst_35922);
var inst_35928 = cljs.core.count(inst_35926);
var inst_35908 = inst_35927;
var inst_35909 = inst_35926;
var inst_35910 = inst_35928;
var inst_35911 = (0);
var state_35967__$1 = (function (){var statearr_36037 = state_35967;
(statearr_36037[(13)] = inst_35908);

(statearr_36037[(14)] = inst_35909);

(statearr_36037[(15)] = inst_35910);

(statearr_36037[(16)] = inst_35911);

return statearr_36037;
})();
var statearr_36038_37911 = state_35967__$1;
(statearr_36038_37911[(2)] = null);

(statearr_36038_37911[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (10))){
var inst_35908 = (state_35967[(13)]);
var inst_35909 = (state_35967[(14)]);
var inst_35910 = (state_35967[(15)]);
var inst_35911 = (state_35967[(16)]);
var inst_35916 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35909,inst_35911);
var inst_35917 = cljs.core.async.muxch_STAR_(inst_35916);
var inst_35918 = cljs.core.async.close_BANG_(inst_35917);
var inst_35919 = (inst_35911 + (1));
var tmp36033 = inst_35908;
var tmp36034 = inst_35909;
var tmp36035 = inst_35910;
var inst_35908__$1 = tmp36033;
var inst_35909__$1 = tmp36034;
var inst_35910__$1 = tmp36035;
var inst_35911__$1 = inst_35919;
var state_35967__$1 = (function (){var statearr_36039 = state_35967;
(statearr_36039[(17)] = inst_35918);

(statearr_36039[(13)] = inst_35908__$1);

(statearr_36039[(14)] = inst_35909__$1);

(statearr_36039[(15)] = inst_35910__$1);

(statearr_36039[(16)] = inst_35911__$1);

return statearr_36039;
})();
var statearr_36040_37923 = state_35967__$1;
(statearr_36040_37923[(2)] = null);

(statearr_36040_37923[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (18))){
var inst_35937 = (state_35967[(2)]);
var state_35967__$1 = state_35967;
var statearr_36041_37926 = state_35967__$1;
(statearr_36041_37926[(2)] = inst_35937);

(statearr_36041_37926[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35968 === (8))){
var inst_35910 = (state_35967[(15)]);
var inst_35911 = (state_35967[(16)]);
var inst_35913 = (inst_35911 < inst_35910);
var inst_35914 = inst_35913;
var state_35967__$1 = state_35967;
if(cljs.core.truth_(inst_35914)){
var statearr_36042_37928 = state_35967__$1;
(statearr_36042_37928[(1)] = (10));

} else {
var statearr_36043_37931 = state_35967__$1;
(statearr_36043_37931[(1)] = (11));

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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35967){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35967);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36045){if((e36045 instanceof Object)){
var ex__34210__auto__ = e36045;
var statearr_36047_37935 = state_35967;
(statearr_36047_37935[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36045;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37938 = state_35967;
state_35967 = G__37938;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35967){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36048 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36048[(6)] = c__34274__auto___37821);

return statearr_36048;
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
var G__36061 = arguments.length;
switch (G__36061) {
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
var G__36070 = arguments.length;
switch (G__36070) {
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
var c__34274__auto___37960 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36115){
var state_val_36116 = (state_36115[(1)]);
if((state_val_36116 === (7))){
var state_36115__$1 = state_36115;
var statearr_36117_37961 = state_36115__$1;
(statearr_36117_37961[(2)] = null);

(statearr_36117_37961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (1))){
var state_36115__$1 = state_36115;
var statearr_36118_37962 = state_36115__$1;
(statearr_36118_37962[(2)] = null);

(statearr_36118_37962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (4))){
var inst_36079 = (state_36115[(7)]);
var inst_36081 = (inst_36079 < cnt);
var state_36115__$1 = state_36115;
if(cljs.core.truth_(inst_36081)){
var statearr_36119_37963 = state_36115__$1;
(statearr_36119_37963[(1)] = (6));

} else {
var statearr_36120_37968 = state_36115__$1;
(statearr_36120_37968[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (15))){
var inst_36111 = (state_36115[(2)]);
var state_36115__$1 = state_36115;
var statearr_36121_37969 = state_36115__$1;
(statearr_36121_37969[(2)] = inst_36111);

(statearr_36121_37969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (13))){
var inst_36104 = cljs.core.async.close_BANG_(out);
var state_36115__$1 = state_36115;
var statearr_36122_37970 = state_36115__$1;
(statearr_36122_37970[(2)] = inst_36104);

(statearr_36122_37970[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (6))){
var state_36115__$1 = state_36115;
var statearr_36123_37971 = state_36115__$1;
(statearr_36123_37971[(2)] = null);

(statearr_36123_37971[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (3))){
var inst_36113 = (state_36115[(2)]);
var state_36115__$1 = state_36115;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36115__$1,inst_36113);
} else {
if((state_val_36116 === (12))){
var inst_36101 = (state_36115[(8)]);
var inst_36101__$1 = (state_36115[(2)]);
var inst_36102 = cljs.core.some(cljs.core.nil_QMARK_,inst_36101__$1);
var state_36115__$1 = (function (){var statearr_36128 = state_36115;
(statearr_36128[(8)] = inst_36101__$1);

return statearr_36128;
})();
if(cljs.core.truth_(inst_36102)){
var statearr_36129_37972 = state_36115__$1;
(statearr_36129_37972[(1)] = (13));

} else {
var statearr_36130_37973 = state_36115__$1;
(statearr_36130_37973[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (2))){
var inst_36078 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36079 = (0);
var state_36115__$1 = (function (){var statearr_36131 = state_36115;
(statearr_36131[(9)] = inst_36078);

(statearr_36131[(7)] = inst_36079);

return statearr_36131;
})();
var statearr_36133_37975 = state_36115__$1;
(statearr_36133_37975[(2)] = null);

(statearr_36133_37975[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (11))){
var inst_36079 = (state_36115[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36115,(10),Object,null,(9));
var inst_36088 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36079) : chs__$1.call(null,inst_36079));
var inst_36089 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36079) : done.call(null,inst_36079));
var inst_36090 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36088,inst_36089);
var state_36115__$1 = state_36115;
var statearr_36136_37980 = state_36115__$1;
(statearr_36136_37980[(2)] = inst_36090);


cljs.core.async.impl.ioc_helpers.process_exception(state_36115__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (9))){
var inst_36079 = (state_36115[(7)]);
var inst_36092 = (state_36115[(2)]);
var inst_36093 = (inst_36079 + (1));
var inst_36079__$1 = inst_36093;
var state_36115__$1 = (function (){var statearr_36137 = state_36115;
(statearr_36137[(10)] = inst_36092);

(statearr_36137[(7)] = inst_36079__$1);

return statearr_36137;
})();
var statearr_36138_37981 = state_36115__$1;
(statearr_36138_37981[(2)] = null);

(statearr_36138_37981[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (5))){
var inst_36099 = (state_36115[(2)]);
var state_36115__$1 = (function (){var statearr_36140 = state_36115;
(statearr_36140[(11)] = inst_36099);

return statearr_36140;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36115__$1,(12),dchan);
} else {
if((state_val_36116 === (14))){
var inst_36101 = (state_36115[(8)]);
var inst_36106 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36101);
var state_36115__$1 = state_36115;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36115__$1,(16),out,inst_36106);
} else {
if((state_val_36116 === (16))){
var inst_36108 = (state_36115[(2)]);
var state_36115__$1 = (function (){var statearr_36144 = state_36115;
(statearr_36144[(12)] = inst_36108);

return statearr_36144;
})();
var statearr_36146_37982 = state_36115__$1;
(statearr_36146_37982[(2)] = null);

(statearr_36146_37982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (10))){
var inst_36083 = (state_36115[(2)]);
var inst_36084 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36115__$1 = (function (){var statearr_36147 = state_36115;
(statearr_36147[(13)] = inst_36083);

return statearr_36147;
})();
var statearr_36149_37987 = state_36115__$1;
(statearr_36149_37987[(2)] = inst_36084);


cljs.core.async.impl.ioc_helpers.process_exception(state_36115__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (8))){
var inst_36097 = (state_36115[(2)]);
var state_36115__$1 = state_36115;
var statearr_36151_37988 = state_36115__$1;
(statearr_36151_37988[(2)] = inst_36097);

(statearr_36151_37988[(1)] = (5));


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
var statearr_36152 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36152[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36152[(1)] = (1));

return statearr_36152;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36115){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36115);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36153){if((e36153 instanceof Object)){
var ex__34210__auto__ = e36153;
var statearr_36154_37992 = state_36115;
(statearr_36154_37992[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36153;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37993 = state_36115;
state_36115 = G__37993;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36157 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36157[(6)] = c__34274__auto___37960);

return statearr_36157;
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
var G__36160 = arguments.length;
switch (G__36160) {
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
var c__34274__auto___37998 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36192){
var state_val_36193 = (state_36192[(1)]);
if((state_val_36193 === (7))){
var inst_36172 = (state_36192[(7)]);
var inst_36171 = (state_36192[(8)]);
var inst_36171__$1 = (state_36192[(2)]);
var inst_36172__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36171__$1,(0),null);
var inst_36173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36171__$1,(1),null);
var inst_36174 = (inst_36172__$1 == null);
var state_36192__$1 = (function (){var statearr_36194 = state_36192;
(statearr_36194[(9)] = inst_36173);

(statearr_36194[(7)] = inst_36172__$1);

(statearr_36194[(8)] = inst_36171__$1);

return statearr_36194;
})();
if(cljs.core.truth_(inst_36174)){
var statearr_36195_38003 = state_36192__$1;
(statearr_36195_38003[(1)] = (8));

} else {
var statearr_36196_38004 = state_36192__$1;
(statearr_36196_38004[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (1))){
var inst_36161 = cljs.core.vec(chs);
var inst_36162 = inst_36161;
var state_36192__$1 = (function (){var statearr_36197 = state_36192;
(statearr_36197[(10)] = inst_36162);

return statearr_36197;
})();
var statearr_36198_38005 = state_36192__$1;
(statearr_36198_38005[(2)] = null);

(statearr_36198_38005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (4))){
var inst_36162 = (state_36192[(10)]);
var state_36192__$1 = state_36192;
return cljs.core.async.ioc_alts_BANG_(state_36192__$1,(7),inst_36162);
} else {
if((state_val_36193 === (6))){
var inst_36188 = (state_36192[(2)]);
var state_36192__$1 = state_36192;
var statearr_36202_38011 = state_36192__$1;
(statearr_36202_38011[(2)] = inst_36188);

(statearr_36202_38011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (3))){
var inst_36190 = (state_36192[(2)]);
var state_36192__$1 = state_36192;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36192__$1,inst_36190);
} else {
if((state_val_36193 === (2))){
var inst_36162 = (state_36192[(10)]);
var inst_36164 = cljs.core.count(inst_36162);
var inst_36165 = (inst_36164 > (0));
var state_36192__$1 = state_36192;
if(cljs.core.truth_(inst_36165)){
var statearr_36210_38012 = state_36192__$1;
(statearr_36210_38012[(1)] = (4));

} else {
var statearr_36212_38013 = state_36192__$1;
(statearr_36212_38013[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (11))){
var inst_36162 = (state_36192[(10)]);
var inst_36181 = (state_36192[(2)]);
var tmp36205 = inst_36162;
var inst_36162__$1 = tmp36205;
var state_36192__$1 = (function (){var statearr_36213 = state_36192;
(statearr_36213[(11)] = inst_36181);

(statearr_36213[(10)] = inst_36162__$1);

return statearr_36213;
})();
var statearr_36214_38015 = state_36192__$1;
(statearr_36214_38015[(2)] = null);

(statearr_36214_38015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (9))){
var inst_36172 = (state_36192[(7)]);
var state_36192__$1 = state_36192;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36192__$1,(11),out,inst_36172);
} else {
if((state_val_36193 === (5))){
var inst_36186 = cljs.core.async.close_BANG_(out);
var state_36192__$1 = state_36192;
var statearr_36226_38020 = state_36192__$1;
(statearr_36226_38020[(2)] = inst_36186);

(statearr_36226_38020[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (10))){
var inst_36184 = (state_36192[(2)]);
var state_36192__$1 = state_36192;
var statearr_36228_38021 = state_36192__$1;
(statearr_36228_38021[(2)] = inst_36184);

(statearr_36228_38021[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (8))){
var inst_36162 = (state_36192[(10)]);
var inst_36173 = (state_36192[(9)]);
var inst_36172 = (state_36192[(7)]);
var inst_36171 = (state_36192[(8)]);
var inst_36176 = (function (){var cs = inst_36162;
var vec__36167 = inst_36171;
var v = inst_36172;
var c = inst_36173;
return (function (p1__36158_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36158_SHARP_);
});
})();
var inst_36177 = cljs.core.filterv(inst_36176,inst_36162);
var inst_36162__$1 = inst_36177;
var state_36192__$1 = (function (){var statearr_36231 = state_36192;
(statearr_36231[(10)] = inst_36162__$1);

return statearr_36231;
})();
var statearr_36232_38023 = state_36192__$1;
(statearr_36232_38023[(2)] = null);

(statearr_36232_38023[(1)] = (2));


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
var statearr_36233 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36233[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36233[(1)] = (1));

return statearr_36233;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36192){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36192);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36234){if((e36234 instanceof Object)){
var ex__34210__auto__ = e36234;
var statearr_36235_38026 = state_36192;
(statearr_36235_38026[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36234;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38027 = state_36192;
state_36192 = G__38027;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36192){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36236 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36236[(6)] = c__34274__auto___37998);

return statearr_36236;
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
var G__36242 = arguments.length;
switch (G__36242) {
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
var c__34274__auto___38033 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36268){
var state_val_36269 = (state_36268[(1)]);
if((state_val_36269 === (7))){
var inst_36250 = (state_36268[(7)]);
var inst_36250__$1 = (state_36268[(2)]);
var inst_36251 = (inst_36250__$1 == null);
var inst_36252 = cljs.core.not(inst_36251);
var state_36268__$1 = (function (){var statearr_36273 = state_36268;
(statearr_36273[(7)] = inst_36250__$1);

return statearr_36273;
})();
if(inst_36252){
var statearr_36275_38035 = state_36268__$1;
(statearr_36275_38035[(1)] = (8));

} else {
var statearr_36276_38037 = state_36268__$1;
(statearr_36276_38037[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36269 === (1))){
var inst_36243 = (0);
var state_36268__$1 = (function (){var statearr_36277 = state_36268;
(statearr_36277[(8)] = inst_36243);

return statearr_36277;
})();
var statearr_36278_38038 = state_36268__$1;
(statearr_36278_38038[(2)] = null);

(statearr_36278_38038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36269 === (4))){
var state_36268__$1 = state_36268;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36268__$1,(7),ch);
} else {
if((state_val_36269 === (6))){
var inst_36263 = (state_36268[(2)]);
var state_36268__$1 = state_36268;
var statearr_36287_38039 = state_36268__$1;
(statearr_36287_38039[(2)] = inst_36263);

(statearr_36287_38039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36269 === (3))){
var inst_36265 = (state_36268[(2)]);
var inst_36266 = cljs.core.async.close_BANG_(out);
var state_36268__$1 = (function (){var statearr_36288 = state_36268;
(statearr_36288[(9)] = inst_36265);

return statearr_36288;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36268__$1,inst_36266);
} else {
if((state_val_36269 === (2))){
var inst_36243 = (state_36268[(8)]);
var inst_36247 = (inst_36243 < n);
var state_36268__$1 = state_36268;
if(cljs.core.truth_(inst_36247)){
var statearr_36290_38042 = state_36268__$1;
(statearr_36290_38042[(1)] = (4));

} else {
var statearr_36291_38043 = state_36268__$1;
(statearr_36291_38043[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36269 === (11))){
var inst_36243 = (state_36268[(8)]);
var inst_36255 = (state_36268[(2)]);
var inst_36256 = (inst_36243 + (1));
var inst_36243__$1 = inst_36256;
var state_36268__$1 = (function (){var statearr_36293 = state_36268;
(statearr_36293[(8)] = inst_36243__$1);

(statearr_36293[(10)] = inst_36255);

return statearr_36293;
})();
var statearr_36295_38045 = state_36268__$1;
(statearr_36295_38045[(2)] = null);

(statearr_36295_38045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36269 === (9))){
var state_36268__$1 = state_36268;
var statearr_36297_38046 = state_36268__$1;
(statearr_36297_38046[(2)] = null);

(statearr_36297_38046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36269 === (5))){
var state_36268__$1 = state_36268;
var statearr_36299_38048 = state_36268__$1;
(statearr_36299_38048[(2)] = null);

(statearr_36299_38048[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36269 === (10))){
var inst_36260 = (state_36268[(2)]);
var state_36268__$1 = state_36268;
var statearr_36300_38051 = state_36268__$1;
(statearr_36300_38051[(2)] = inst_36260);

(statearr_36300_38051[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36269 === (8))){
var inst_36250 = (state_36268[(7)]);
var state_36268__$1 = state_36268;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36268__$1,(11),out,inst_36250);
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
var statearr_36303 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36303[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36303[(1)] = (1));

return statearr_36303;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36268){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36268);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36304){if((e36304 instanceof Object)){
var ex__34210__auto__ = e36304;
var statearr_36305_38053 = state_36268;
(statearr_36305_38053[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36304;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38056 = state_36268;
state_36268 = G__38056;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36268){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36308 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36308[(6)] = c__34274__auto___38033);

return statearr_36308;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36312 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36312 = (function (f,ch,meta36313){
this.f = f;
this.ch = ch;
this.meta36313 = meta36313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36314,meta36313__$1){
var self__ = this;
var _36314__$1 = this;
return (new cljs.core.async.t_cljs$core$async36312(self__.f,self__.ch,meta36313__$1));
}));

(cljs.core.async.t_cljs$core$async36312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36314){
var self__ = this;
var _36314__$1 = this;
return self__.meta36313;
}));

(cljs.core.async.t_cljs$core$async36312.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36312.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36312.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36312.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36312.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36326 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36326 = (function (f,ch,meta36313,_,fn1,meta36327){
this.f = f;
this.ch = ch;
this.meta36313 = meta36313;
this._ = _;
this.fn1 = fn1;
this.meta36327 = meta36327;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36328,meta36327__$1){
var self__ = this;
var _36328__$1 = this;
return (new cljs.core.async.t_cljs$core$async36326(self__.f,self__.ch,self__.meta36313,self__._,self__.fn1,meta36327__$1));
}));

(cljs.core.async.t_cljs$core$async36326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36328){
var self__ = this;
var _36328__$1 = this;
return self__.meta36327;
}));

(cljs.core.async.t_cljs$core$async36326.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36326.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36326.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36326.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36309_SHARP_){
var G__36334 = (((p1__36309_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36309_SHARP_) : self__.f.call(null,p1__36309_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36334) : f1.call(null,G__36334));
});
}));

(cljs.core.async.t_cljs$core$async36326.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36313","meta36313",-1855059289,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36312","cljs.core.async/t_cljs$core$async36312",-1478467488,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36327","meta36327",-73518937,null)], null);
}));

(cljs.core.async.t_cljs$core$async36326.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36326.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36326");

(cljs.core.async.t_cljs$core$async36326.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36326");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36326.
 */
cljs.core.async.__GT_t_cljs$core$async36326 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36326(f__$1,ch__$1,meta36313__$1,___$2,fn1__$1,meta36327){
return (new cljs.core.async.t_cljs$core$async36326(f__$1,ch__$1,meta36313__$1,___$2,fn1__$1,meta36327));
});

}

return (new cljs.core.async.t_cljs$core$async36326(self__.f,self__.ch,self__.meta36313,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36336 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36336) : self__.f.call(null,G__36336));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36312.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36312.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36312.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36313","meta36313",-1855059289,null)], null);
}));

(cljs.core.async.t_cljs$core$async36312.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36312.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36312");

(cljs.core.async.t_cljs$core$async36312.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36312");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36312.
 */
cljs.core.async.__GT_t_cljs$core$async36312 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36312(f__$1,ch__$1,meta36313){
return (new cljs.core.async.t_cljs$core$async36312(f__$1,ch__$1,meta36313));
});

}

return (new cljs.core.async.t_cljs$core$async36312(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36339 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36339 = (function (f,ch,meta36340){
this.f = f;
this.ch = ch;
this.meta36340 = meta36340;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36341,meta36340__$1){
var self__ = this;
var _36341__$1 = this;
return (new cljs.core.async.t_cljs$core$async36339(self__.f,self__.ch,meta36340__$1));
}));

(cljs.core.async.t_cljs$core$async36339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36341){
var self__ = this;
var _36341__$1 = this;
return self__.meta36340;
}));

(cljs.core.async.t_cljs$core$async36339.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36339.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36339.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36339.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36339.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36339.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36339.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36340","meta36340",2120143757,null)], null);
}));

(cljs.core.async.t_cljs$core$async36339.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36339.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36339");

(cljs.core.async.t_cljs$core$async36339.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36339");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36339.
 */
cljs.core.async.__GT_t_cljs$core$async36339 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36339(f__$1,ch__$1,meta36340){
return (new cljs.core.async.t_cljs$core$async36339(f__$1,ch__$1,meta36340));
});

}

return (new cljs.core.async.t_cljs$core$async36339(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36355 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36355 = (function (p,ch,meta36356){
this.p = p;
this.ch = ch;
this.meta36356 = meta36356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36357,meta36356__$1){
var self__ = this;
var _36357__$1 = this;
return (new cljs.core.async.t_cljs$core$async36355(self__.p,self__.ch,meta36356__$1));
}));

(cljs.core.async.t_cljs$core$async36355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36357){
var self__ = this;
var _36357__$1 = this;
return self__.meta36356;
}));

(cljs.core.async.t_cljs$core$async36355.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36355.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36355.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36355.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36355.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36355.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36355.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36355.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36356","meta36356",869544725,null)], null);
}));

(cljs.core.async.t_cljs$core$async36355.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36355.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36355");

(cljs.core.async.t_cljs$core$async36355.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36355");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36355.
 */
cljs.core.async.__GT_t_cljs$core$async36355 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36355(p__$1,ch__$1,meta36356){
return (new cljs.core.async.t_cljs$core$async36355(p__$1,ch__$1,meta36356));
});

}

return (new cljs.core.async.t_cljs$core$async36355(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36369 = arguments.length;
switch (G__36369) {
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
var c__34274__auto___38082 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36400){
var state_val_36401 = (state_36400[(1)]);
if((state_val_36401 === (7))){
var inst_36396 = (state_36400[(2)]);
var state_36400__$1 = state_36400;
var statearr_36404_38085 = state_36400__$1;
(statearr_36404_38085[(2)] = inst_36396);

(statearr_36404_38085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (1))){
var state_36400__$1 = state_36400;
var statearr_36406_38087 = state_36400__$1;
(statearr_36406_38087[(2)] = null);

(statearr_36406_38087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (4))){
var inst_36382 = (state_36400[(7)]);
var inst_36382__$1 = (state_36400[(2)]);
var inst_36383 = (inst_36382__$1 == null);
var state_36400__$1 = (function (){var statearr_36407 = state_36400;
(statearr_36407[(7)] = inst_36382__$1);

return statearr_36407;
})();
if(cljs.core.truth_(inst_36383)){
var statearr_36409_38088 = state_36400__$1;
(statearr_36409_38088[(1)] = (5));

} else {
var statearr_36410_38089 = state_36400__$1;
(statearr_36410_38089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (6))){
var inst_36382 = (state_36400[(7)]);
var inst_36387 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36382) : p.call(null,inst_36382));
var state_36400__$1 = state_36400;
if(cljs.core.truth_(inst_36387)){
var statearr_36411_38092 = state_36400__$1;
(statearr_36411_38092[(1)] = (8));

} else {
var statearr_36412_38093 = state_36400__$1;
(statearr_36412_38093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (3))){
var inst_36398 = (state_36400[(2)]);
var state_36400__$1 = state_36400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36400__$1,inst_36398);
} else {
if((state_val_36401 === (2))){
var state_36400__$1 = state_36400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36400__$1,(4),ch);
} else {
if((state_val_36401 === (11))){
var inst_36390 = (state_36400[(2)]);
var state_36400__$1 = state_36400;
var statearr_36415_38095 = state_36400__$1;
(statearr_36415_38095[(2)] = inst_36390);

(statearr_36415_38095[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (9))){
var state_36400__$1 = state_36400;
var statearr_36418_38096 = state_36400__$1;
(statearr_36418_38096[(2)] = null);

(statearr_36418_38096[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (5))){
var inst_36385 = cljs.core.async.close_BANG_(out);
var state_36400__$1 = state_36400;
var statearr_36419_38099 = state_36400__$1;
(statearr_36419_38099[(2)] = inst_36385);

(statearr_36419_38099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (10))){
var inst_36393 = (state_36400[(2)]);
var state_36400__$1 = (function (){var statearr_36420 = state_36400;
(statearr_36420[(8)] = inst_36393);

return statearr_36420;
})();
var statearr_36421_38101 = state_36400__$1;
(statearr_36421_38101[(2)] = null);

(statearr_36421_38101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (8))){
var inst_36382 = (state_36400[(7)]);
var state_36400__$1 = state_36400;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36400__$1,(11),out,inst_36382);
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
var statearr_36425 = [null,null,null,null,null,null,null,null,null];
(statearr_36425[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36425[(1)] = (1));

return statearr_36425;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36400){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36400);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36426){if((e36426 instanceof Object)){
var ex__34210__auto__ = e36426;
var statearr_36432_38105 = state_36400;
(statearr_36432_38105[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36426;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38106 = state_36400;
state_36400 = G__38106;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36400){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36435 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36435[(6)] = c__34274__auto___38082);

return statearr_36435;
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
var G__36438 = arguments.length;
switch (G__36438) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36519){
var state_val_36520 = (state_36519[(1)]);
if((state_val_36520 === (7))){
var inst_36512 = (state_36519[(2)]);
var state_36519__$1 = state_36519;
var statearr_36524_38112 = state_36519__$1;
(statearr_36524_38112[(2)] = inst_36512);

(statearr_36524_38112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36520 === (20))){
var inst_36476 = (state_36519[(7)]);
var inst_36488 = (state_36519[(2)]);
var inst_36489 = cljs.core.next(inst_36476);
var inst_36462 = inst_36489;
var inst_36463 = null;
var inst_36464 = (0);
var inst_36465 = (0);
var state_36519__$1 = (function (){var statearr_36525 = state_36519;
(statearr_36525[(8)] = inst_36488);

(statearr_36525[(9)] = inst_36465);

(statearr_36525[(10)] = inst_36463);

(statearr_36525[(11)] = inst_36462);

(statearr_36525[(12)] = inst_36464);

return statearr_36525;
})();
var statearr_36528_38115 = state_36519__$1;
(statearr_36528_38115[(2)] = null);

(statearr_36528_38115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36520 === (1))){
var state_36519__$1 = state_36519;
var statearr_36529_38116 = state_36519__$1;
(statearr_36529_38116[(2)] = null);

(statearr_36529_38116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36520 === (4))){
var inst_36451 = (state_36519[(13)]);
var inst_36451__$1 = (state_36519[(2)]);
var inst_36452 = (inst_36451__$1 == null);
var state_36519__$1 = (function (){var statearr_36530 = state_36519;
(statearr_36530[(13)] = inst_36451__$1);

return statearr_36530;
})();
if(cljs.core.truth_(inst_36452)){
var statearr_36531_38118 = state_36519__$1;
(statearr_36531_38118[(1)] = (5));

} else {
var statearr_36532_38119 = state_36519__$1;
(statearr_36532_38119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36520 === (15))){
var state_36519__$1 = state_36519;
var statearr_36536_38122 = state_36519__$1;
(statearr_36536_38122[(2)] = null);

(statearr_36536_38122[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36520 === (21))){
var state_36519__$1 = state_36519;
var statearr_36537_38123 = state_36519__$1;
(statearr_36537_38123[(2)] = null);

(statearr_36537_38123[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36520 === (13))){
var inst_36465 = (state_36519[(9)]);
var inst_36463 = (state_36519[(10)]);
var inst_36462 = (state_36519[(11)]);
var inst_36464 = (state_36519[(12)]);
var inst_36472 = (state_36519[(2)]);
var inst_36473 = (inst_36465 + (1));
var tmp36533 = inst_36463;
var tmp36534 = inst_36462;
var tmp36535 = inst_36464;
var inst_36462__$1 = tmp36534;
var inst_36463__$1 = tmp36533;
var inst_36464__$1 = tmp36535;
var inst_36465__$1 = inst_36473;
var state_36519__$1 = (function (){var statearr_36538 = state_36519;
(statearr_36538[(9)] = inst_36465__$1);

(statearr_36538[(10)] = inst_36463__$1);

(statearr_36538[(14)] = inst_36472);

(statearr_36538[(11)] = inst_36462__$1);

(statearr_36538[(12)] = inst_36464__$1);

return statearr_36538;
})();
var statearr_36539_38124 = state_36519__$1;
(statearr_36539_38124[(2)] = null);

(statearr_36539_38124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36520 === (22))){
var state_36519__$1 = state_36519;
var statearr_36540_38126 = state_36519__$1;
(statearr_36540_38126[(2)] = null);

(statearr_36540_38126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36520 === (6))){
var inst_36451 = (state_36519[(13)]);
var inst_36460 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36451) : f.call(null,inst_36451));
var inst_36461 = cljs.core.seq(inst_36460);
var inst_36462 = inst_36461;
var inst_36463 = null;
var inst_36464 = (0);
var inst_36465 = (0);
var state_36519__$1 = (function (){var statearr_36542 = state_36519;
(statearr_36542[(9)] = inst_36465);

(statearr_36542[(10)] = inst_36463);

(statearr_36542[(11)] = inst_36462);

(statearr_36542[(12)] = inst_36464);

return statearr_36542;
})();
var statearr_36544_38129 = state_36519__$1;
(statearr_36544_38129[(2)] = null);

(statearr_36544_38129[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36520 === (17))){
var inst_36476 = (state_36519[(7)]);
var inst_36481 = cljs.core.chunk_first(inst_36476);
var inst_36482 = cljs.core.chunk_rest(inst_36476);
var inst_36483 = cljs.core.count(inst_36481);
var inst_36462 = inst_36482;
var inst_36463 = inst_36481;
var inst_36464 = inst_36483;
var inst_36465 = (0);
var state_36519__$1 = (function (){var statearr_36546 = state_36519;
(statearr_36546[(9)] = inst_36465);

(statearr_36546[(10)] = inst_36463);

(statearr_36546[(11)] = inst_36462);

(statearr_36546[(12)] = inst_36464);

return statearr_36546;
})();
var statearr_36551_38130 = state_36519__$1;
(statearr_36551_38130[(2)] = null);

(statearr_36551_38130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36520 === (3))){
var inst_36514 = (state_36519[(2)]);
var state_36519__$1 = state_36519;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36519__$1,inst_36514);
} else {
if((state_val_36520 === (12))){
var inst_36499 = (state_36519[(2)]);
var state_36519__$1 = state_36519;
var statearr_36553_38132 = state_36519__$1;
(statearr_36553_38132[(2)] = inst_36499);

(statearr_36553_38132[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36520 === (2))){
var state_36519__$1 = state_36519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36519__$1,(4),in$);
} else {
if((state_val_36520 === (23))){
var inst_36507 = (state_36519[(2)]);
var state_36519__$1 = state_36519;
var statearr_36554_38138 = state_36519__$1;
(statearr_36554_38138[(2)] = inst_36507);

(statearr_36554_38138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36520 === (19))){
var inst_36492 = (state_36519[(2)]);
var state_36519__$1 = state_36519;
var statearr_36555_38142 = state_36519__$1;
(statearr_36555_38142[(2)] = inst_36492);

(statearr_36555_38142[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36520 === (11))){
var inst_36476 = (state_36519[(7)]);
var inst_36462 = (state_36519[(11)]);
var inst_36476__$1 = cljs.core.seq(inst_36462);
var state_36519__$1 = (function (){var statearr_36557 = state_36519;
(statearr_36557[(7)] = inst_36476__$1);

return statearr_36557;
})();
if(inst_36476__$1){
var statearr_36560_38143 = state_36519__$1;
(statearr_36560_38143[(1)] = (14));

} else {
var statearr_36561_38144 = state_36519__$1;
(statearr_36561_38144[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36520 === (9))){
var inst_36501 = (state_36519[(2)]);
var inst_36502 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36519__$1 = (function (){var statearr_36564 = state_36519;
(statearr_36564[(15)] = inst_36501);

return statearr_36564;
})();
if(cljs.core.truth_(inst_36502)){
var statearr_36565_38148 = state_36519__$1;
(statearr_36565_38148[(1)] = (21));

} else {
var statearr_36566_38149 = state_36519__$1;
(statearr_36566_38149[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36520 === (5))){
var inst_36454 = cljs.core.async.close_BANG_(out);
var state_36519__$1 = state_36519;
var statearr_36568_38151 = state_36519__$1;
(statearr_36568_38151[(2)] = inst_36454);

(statearr_36568_38151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36520 === (14))){
var inst_36476 = (state_36519[(7)]);
var inst_36478 = cljs.core.chunked_seq_QMARK_(inst_36476);
var state_36519__$1 = state_36519;
if(inst_36478){
var statearr_36569_38154 = state_36519__$1;
(statearr_36569_38154[(1)] = (17));

} else {
var statearr_36570_38155 = state_36519__$1;
(statearr_36570_38155[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36520 === (16))){
var inst_36497 = (state_36519[(2)]);
var state_36519__$1 = state_36519;
var statearr_36571_38156 = state_36519__$1;
(statearr_36571_38156[(2)] = inst_36497);

(statearr_36571_38156[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36520 === (10))){
var inst_36465 = (state_36519[(9)]);
var inst_36463 = (state_36519[(10)]);
var inst_36470 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36463,inst_36465);
var state_36519__$1 = state_36519;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36519__$1,(13),out,inst_36470);
} else {
if((state_val_36520 === (18))){
var inst_36476 = (state_36519[(7)]);
var inst_36486 = cljs.core.first(inst_36476);
var state_36519__$1 = state_36519;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36519__$1,(20),out,inst_36486);
} else {
if((state_val_36520 === (8))){
var inst_36465 = (state_36519[(9)]);
var inst_36464 = (state_36519[(12)]);
var inst_36467 = (inst_36465 < inst_36464);
var inst_36468 = inst_36467;
var state_36519__$1 = state_36519;
if(cljs.core.truth_(inst_36468)){
var statearr_36574_38160 = state_36519__$1;
(statearr_36574_38160[(1)] = (10));

} else {
var statearr_36576_38161 = state_36519__$1;
(statearr_36576_38161[(1)] = (11));

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
var statearr_36577 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36577[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36577[(1)] = (1));

return statearr_36577;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36519){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36519);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36579){if((e36579 instanceof Object)){
var ex__34210__auto__ = e36579;
var statearr_36580_38162 = state_36519;
(statearr_36580_38162[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36579;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38164 = state_36519;
state_36519 = G__38164;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36519){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36581 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36581[(6)] = c__34274__auto__);

return statearr_36581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36584 = arguments.length;
switch (G__36584) {
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
var G__36588 = arguments.length;
switch (G__36588) {
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
var G__36592 = arguments.length;
switch (G__36592) {
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
var c__34274__auto___38177 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36619){
var state_val_36620 = (state_36619[(1)]);
if((state_val_36620 === (7))){
var inst_36613 = (state_36619[(2)]);
var state_36619__$1 = state_36619;
var statearr_36622_38181 = state_36619__$1;
(statearr_36622_38181[(2)] = inst_36613);

(statearr_36622_38181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36620 === (1))){
var inst_36595 = null;
var state_36619__$1 = (function (){var statearr_36623 = state_36619;
(statearr_36623[(7)] = inst_36595);

return statearr_36623;
})();
var statearr_36625_38182 = state_36619__$1;
(statearr_36625_38182[(2)] = null);

(statearr_36625_38182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36620 === (4))){
var inst_36598 = (state_36619[(8)]);
var inst_36598__$1 = (state_36619[(2)]);
var inst_36599 = (inst_36598__$1 == null);
var inst_36600 = cljs.core.not(inst_36599);
var state_36619__$1 = (function (){var statearr_36626 = state_36619;
(statearr_36626[(8)] = inst_36598__$1);

return statearr_36626;
})();
if(inst_36600){
var statearr_36627_38184 = state_36619__$1;
(statearr_36627_38184[(1)] = (5));

} else {
var statearr_36629_38185 = state_36619__$1;
(statearr_36629_38185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36620 === (6))){
var state_36619__$1 = state_36619;
var statearr_36630_38186 = state_36619__$1;
(statearr_36630_38186[(2)] = null);

(statearr_36630_38186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36620 === (3))){
var inst_36615 = (state_36619[(2)]);
var inst_36616 = cljs.core.async.close_BANG_(out);
var state_36619__$1 = (function (){var statearr_36632 = state_36619;
(statearr_36632[(9)] = inst_36615);

return statearr_36632;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36619__$1,inst_36616);
} else {
if((state_val_36620 === (2))){
var state_36619__$1 = state_36619;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36619__$1,(4),ch);
} else {
if((state_val_36620 === (11))){
var inst_36598 = (state_36619[(8)]);
var inst_36607 = (state_36619[(2)]);
var inst_36595 = inst_36598;
var state_36619__$1 = (function (){var statearr_36633 = state_36619;
(statearr_36633[(10)] = inst_36607);

(statearr_36633[(7)] = inst_36595);

return statearr_36633;
})();
var statearr_36635_38189 = state_36619__$1;
(statearr_36635_38189[(2)] = null);

(statearr_36635_38189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36620 === (9))){
var inst_36598 = (state_36619[(8)]);
var state_36619__$1 = state_36619;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36619__$1,(11),out,inst_36598);
} else {
if((state_val_36620 === (5))){
var inst_36598 = (state_36619[(8)]);
var inst_36595 = (state_36619[(7)]);
var inst_36602 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36598,inst_36595);
var state_36619__$1 = state_36619;
if(inst_36602){
var statearr_36637_38191 = state_36619__$1;
(statearr_36637_38191[(1)] = (8));

} else {
var statearr_36639_38192 = state_36619__$1;
(statearr_36639_38192[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36620 === (10))){
var inst_36610 = (state_36619[(2)]);
var state_36619__$1 = state_36619;
var statearr_36640_38195 = state_36619__$1;
(statearr_36640_38195[(2)] = inst_36610);

(statearr_36640_38195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36620 === (8))){
var inst_36595 = (state_36619[(7)]);
var tmp36636 = inst_36595;
var inst_36595__$1 = tmp36636;
var state_36619__$1 = (function (){var statearr_36641 = state_36619;
(statearr_36641[(7)] = inst_36595__$1);

return statearr_36641;
})();
var statearr_36643_38197 = state_36619__$1;
(statearr_36643_38197[(2)] = null);

(statearr_36643_38197[(1)] = (2));


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
var statearr_36644 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36644[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36644[(1)] = (1));

return statearr_36644;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36619){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36619);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36646){if((e36646 instanceof Object)){
var ex__34210__auto__ = e36646;
var statearr_36647_38198 = state_36619;
(statearr_36647_38198[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36646;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38200 = state_36619;
state_36619 = G__38200;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36619){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36649 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36649[(6)] = c__34274__auto___38177);

return statearr_36649;
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
var c__34274__auto___38202 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36693){
var state_val_36694 = (state_36693[(1)]);
if((state_val_36694 === (7))){
var inst_36688 = (state_36693[(2)]);
var state_36693__$1 = state_36693;
var statearr_36696_38204 = state_36693__$1;
(statearr_36696_38204[(2)] = inst_36688);

(statearr_36696_38204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (1))){
var inst_36654 = (new Array(n));
var inst_36655 = inst_36654;
var inst_36656 = (0);
var state_36693__$1 = (function (){var statearr_36697 = state_36693;
(statearr_36697[(7)] = inst_36656);

(statearr_36697[(8)] = inst_36655);

return statearr_36697;
})();
var statearr_36698_38207 = state_36693__$1;
(statearr_36698_38207[(2)] = null);

(statearr_36698_38207[(1)] = (2));


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
var statearr_36701_38208 = state_36693__$1;
(statearr_36701_38208[(1)] = (5));

} else {
var statearr_36702_38209 = state_36693__$1;
(statearr_36702_38209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (15))){
var inst_36682 = (state_36693[(2)]);
var state_36693__$1 = state_36693;
var statearr_36704_38213 = state_36693__$1;
(statearr_36704_38213[(2)] = inst_36682);

(statearr_36704_38213[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (13))){
var state_36693__$1 = state_36693;
var statearr_36705_38214 = state_36693__$1;
(statearr_36705_38214[(2)] = null);

(statearr_36705_38214[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (6))){
var inst_36656 = (state_36693[(7)]);
var inst_36678 = (inst_36656 > (0));
var state_36693__$1 = state_36693;
if(cljs.core.truth_(inst_36678)){
var statearr_36707_38215 = state_36693__$1;
(statearr_36707_38215[(1)] = (12));

} else {
var statearr_36708_38216 = state_36693__$1;
(statearr_36708_38216[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (3))){
var inst_36690 = (state_36693[(2)]);
var state_36693__$1 = state_36693;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36693__$1,inst_36690);
} else {
if((state_val_36694 === (12))){
var inst_36655 = (state_36693[(8)]);
var inst_36680 = cljs.core.vec(inst_36655);
var state_36693__$1 = state_36693;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36693__$1,(15),out,inst_36680);
} else {
if((state_val_36694 === (2))){
var state_36693__$1 = state_36693;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36693__$1,(4),ch);
} else {
if((state_val_36694 === (11))){
var inst_36672 = (state_36693[(2)]);
var inst_36673 = (new Array(n));
var inst_36655 = inst_36673;
var inst_36656 = (0);
var state_36693__$1 = (function (){var statearr_36710 = state_36693;
(statearr_36710[(7)] = inst_36656);

(statearr_36710[(8)] = inst_36655);

(statearr_36710[(10)] = inst_36672);

return statearr_36710;
})();
var statearr_36712_38218 = state_36693__$1;
(statearr_36712_38218[(2)] = null);

(statearr_36712_38218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (9))){
var inst_36655 = (state_36693[(8)]);
var inst_36670 = cljs.core.vec(inst_36655);
var state_36693__$1 = state_36693;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36693__$1,(11),out,inst_36670);
} else {
if((state_val_36694 === (5))){
var inst_36656 = (state_36693[(7)]);
var inst_36655 = (state_36693[(8)]);
var inst_36665 = (state_36693[(11)]);
var inst_36660 = (state_36693[(9)]);
var inst_36664 = (inst_36655[inst_36656] = inst_36660);
var inst_36665__$1 = (inst_36656 + (1));
var inst_36666 = (inst_36665__$1 < n);
var state_36693__$1 = (function (){var statearr_36714 = state_36693;
(statearr_36714[(12)] = inst_36664);

(statearr_36714[(11)] = inst_36665__$1);

return statearr_36714;
})();
if(cljs.core.truth_(inst_36666)){
var statearr_36715_38219 = state_36693__$1;
(statearr_36715_38219[(1)] = (8));

} else {
var statearr_36716_38220 = state_36693__$1;
(statearr_36716_38220[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (14))){
var inst_36685 = (state_36693[(2)]);
var inst_36686 = cljs.core.async.close_BANG_(out);
var state_36693__$1 = (function (){var statearr_36719 = state_36693;
(statearr_36719[(13)] = inst_36685);

return statearr_36719;
})();
var statearr_36720_38221 = state_36693__$1;
(statearr_36720_38221[(2)] = inst_36686);

(statearr_36720_38221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (10))){
var inst_36676 = (state_36693[(2)]);
var state_36693__$1 = state_36693;
var statearr_36721_38223 = state_36693__$1;
(statearr_36721_38223[(2)] = inst_36676);

(statearr_36721_38223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (8))){
var inst_36655 = (state_36693[(8)]);
var inst_36665 = (state_36693[(11)]);
var tmp36718 = inst_36655;
var inst_36655__$1 = tmp36718;
var inst_36656 = inst_36665;
var state_36693__$1 = (function (){var statearr_36723 = state_36693;
(statearr_36723[(7)] = inst_36656);

(statearr_36723[(8)] = inst_36655__$1);

return statearr_36723;
})();
var statearr_36724_38225 = state_36693__$1;
(statearr_36724_38225[(2)] = null);

(statearr_36724_38225[(1)] = (2));


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
var statearr_36726 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36726[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36726[(1)] = (1));

return statearr_36726;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36693){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36693);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36732){if((e36732 instanceof Object)){
var ex__34210__auto__ = e36732;
var statearr_36734_38226 = state_36693;
(statearr_36734_38226[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36732;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38227 = state_36693;
state_36693 = G__38227;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36693){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36736 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36736[(6)] = c__34274__auto___38202);

return statearr_36736;
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
var G__36739 = arguments.length;
switch (G__36739) {
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
var c__34274__auto___38230 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36784){
var state_val_36785 = (state_36784[(1)]);
if((state_val_36785 === (7))){
var inst_36780 = (state_36784[(2)]);
var state_36784__$1 = state_36784;
var statearr_36788_38231 = state_36784__$1;
(statearr_36788_38231[(2)] = inst_36780);

(statearr_36788_38231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (1))){
var inst_36742 = [];
var inst_36743 = inst_36742;
var inst_36744 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36784__$1 = (function (){var statearr_36789 = state_36784;
(statearr_36789[(7)] = inst_36744);

(statearr_36789[(8)] = inst_36743);

return statearr_36789;
})();
var statearr_36791_38233 = state_36784__$1;
(statearr_36791_38233[(2)] = null);

(statearr_36791_38233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (4))){
var inst_36747 = (state_36784[(9)]);
var inst_36747__$1 = (state_36784[(2)]);
var inst_36748 = (inst_36747__$1 == null);
var inst_36749 = cljs.core.not(inst_36748);
var state_36784__$1 = (function (){var statearr_36792 = state_36784;
(statearr_36792[(9)] = inst_36747__$1);

return statearr_36792;
})();
if(inst_36749){
var statearr_36793_38235 = state_36784__$1;
(statearr_36793_38235[(1)] = (5));

} else {
var statearr_36795_38236 = state_36784__$1;
(statearr_36795_38236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (15))){
var inst_36774 = (state_36784[(2)]);
var state_36784__$1 = state_36784;
var statearr_36796_38237 = state_36784__$1;
(statearr_36796_38237[(2)] = inst_36774);

(statearr_36796_38237[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (13))){
var state_36784__$1 = state_36784;
var statearr_36797_38238 = state_36784__$1;
(statearr_36797_38238[(2)] = null);

(statearr_36797_38238[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (6))){
var inst_36743 = (state_36784[(8)]);
var inst_36769 = inst_36743.length;
var inst_36770 = (inst_36769 > (0));
var state_36784__$1 = state_36784;
if(cljs.core.truth_(inst_36770)){
var statearr_36799_38240 = state_36784__$1;
(statearr_36799_38240[(1)] = (12));

} else {
var statearr_36800_38241 = state_36784__$1;
(statearr_36800_38241[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (3))){
var inst_36782 = (state_36784[(2)]);
var state_36784__$1 = state_36784;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36784__$1,inst_36782);
} else {
if((state_val_36785 === (12))){
var inst_36743 = (state_36784[(8)]);
var inst_36772 = cljs.core.vec(inst_36743);
var state_36784__$1 = state_36784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36784__$1,(15),out,inst_36772);
} else {
if((state_val_36785 === (2))){
var state_36784__$1 = state_36784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36784__$1,(4),ch);
} else {
if((state_val_36785 === (11))){
var inst_36751 = (state_36784[(10)]);
var inst_36747 = (state_36784[(9)]);
var inst_36762 = (state_36784[(2)]);
var inst_36763 = [];
var inst_36764 = inst_36763.push(inst_36747);
var inst_36743 = inst_36763;
var inst_36744 = inst_36751;
var state_36784__$1 = (function (){var statearr_36803 = state_36784;
(statearr_36803[(11)] = inst_36764);

(statearr_36803[(7)] = inst_36744);

(statearr_36803[(8)] = inst_36743);

(statearr_36803[(12)] = inst_36762);

return statearr_36803;
})();
var statearr_36804_38244 = state_36784__$1;
(statearr_36804_38244[(2)] = null);

(statearr_36804_38244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (9))){
var inst_36743 = (state_36784[(8)]);
var inst_36760 = cljs.core.vec(inst_36743);
var state_36784__$1 = state_36784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36784__$1,(11),out,inst_36760);
} else {
if((state_val_36785 === (5))){
var inst_36751 = (state_36784[(10)]);
var inst_36744 = (state_36784[(7)]);
var inst_36747 = (state_36784[(9)]);
var inst_36751__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36747) : f.call(null,inst_36747));
var inst_36752 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36751__$1,inst_36744);
var inst_36753 = cljs.core.keyword_identical_QMARK_(inst_36744,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36754 = ((inst_36752) || (inst_36753));
var state_36784__$1 = (function (){var statearr_36806 = state_36784;
(statearr_36806[(10)] = inst_36751__$1);

return statearr_36806;
})();
if(cljs.core.truth_(inst_36754)){
var statearr_36807_38246 = state_36784__$1;
(statearr_36807_38246[(1)] = (8));

} else {
var statearr_36809_38247 = state_36784__$1;
(statearr_36809_38247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (14))){
var inst_36777 = (state_36784[(2)]);
var inst_36778 = cljs.core.async.close_BANG_(out);
var state_36784__$1 = (function (){var statearr_36811 = state_36784;
(statearr_36811[(13)] = inst_36777);

return statearr_36811;
})();
var statearr_36812_38248 = state_36784__$1;
(statearr_36812_38248[(2)] = inst_36778);

(statearr_36812_38248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (10))){
var inst_36767 = (state_36784[(2)]);
var state_36784__$1 = state_36784;
var statearr_36814_38250 = state_36784__$1;
(statearr_36814_38250[(2)] = inst_36767);

(statearr_36814_38250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36785 === (8))){
var inst_36751 = (state_36784[(10)]);
var inst_36747 = (state_36784[(9)]);
var inst_36743 = (state_36784[(8)]);
var inst_36756 = inst_36743.push(inst_36747);
var tmp36810 = inst_36743;
var inst_36743__$1 = tmp36810;
var inst_36744 = inst_36751;
var state_36784__$1 = (function (){var statearr_36815 = state_36784;
(statearr_36815[(7)] = inst_36744);

(statearr_36815[(14)] = inst_36756);

(statearr_36815[(8)] = inst_36743__$1);

return statearr_36815;
})();
var statearr_36817_38252 = state_36784__$1;
(statearr_36817_38252[(2)] = null);

(statearr_36817_38252[(1)] = (2));


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
var statearr_36818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36818[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36818[(1)] = (1));

return statearr_36818;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36784){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36784);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36820){if((e36820 instanceof Object)){
var ex__34210__auto__ = e36820;
var statearr_36821_38254 = state_36784;
(statearr_36821_38254[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36820;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38255 = state_36784;
state_36784 = G__38255;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36823 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36823[(6)] = c__34274__auto___38230);

return statearr_36823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
