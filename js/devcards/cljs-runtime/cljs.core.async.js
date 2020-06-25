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
var val_36855 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36855) : fn1.call(null,val_36855));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36855) : fn1.call(null,val_36855));
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
var n__4666__auto___36859 = n;
var x_36861 = (0);
while(true){
if((x_36861 < n__4666__auto___36859)){
(a[x_36861] = x_36861);

var G__36862 = (x_36861 + (1));
x_36861 = G__36862;
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
var G__36870 = (i + (1));
i = G__36870;
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
var len__4789__auto___36872 = arguments.length;
var i__4790__auto___36873 = (0);
while(true){
if((i__4790__auto___36873 < len__4789__auto___36872)){
args__4795__auto__.push((arguments[i__4790__auto___36873]));

var G__36875 = (i__4790__auto___36873 + (1));
i__4790__auto___36873 = G__36875;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34371){
var map__34375 = p__34371;
var map__34375__$1 = (((((!((map__34375 == null))))?(((((map__34375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34375):map__34375);
var opts = map__34375__$1;
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
var c__34274__auto___36880 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34423){
var state_val_34424 = (state_34423[(1)]);
if((state_val_34424 === (7))){
var inst_34410 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34425_36881 = state_34423__$1;
(statearr_34425_36881[(2)] = inst_34410);

(statearr_34425_36881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (1))){
var state_34423__$1 = state_34423;
var statearr_34426_36883 = state_34423__$1;
(statearr_34426_36883[(2)] = null);

(statearr_34426_36883[(1)] = (2));


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
var statearr_34428_36884 = state_34423__$1;
(statearr_34428_36884[(1)] = (5));

} else {
var statearr_34429_36886 = state_34423__$1;
(statearr_34429_36886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (13))){
var state_34423__$1 = state_34423;
var statearr_34430_36887 = state_34423__$1;
(statearr_34430_36887[(2)] = null);

(statearr_34430_36887[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (6))){
var inst_34390 = (state_34423[(7)]);
var state_34423__$1 = state_34423;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34423__$1,(11),to,inst_34390);
} else {
if((state_val_34424 === (3))){
var inst_34415 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34423__$1,inst_34415);
} else {
if((state_val_34424 === (12))){
var state_34423__$1 = state_34423;
var statearr_34431_36889 = state_34423__$1;
(statearr_34431_36889[(2)] = null);

(statearr_34431_36889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (2))){
var state_34423__$1 = state_34423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34423__$1,(4),from);
} else {
if((state_val_34424 === (11))){
var inst_34400 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
if(cljs.core.truth_(inst_34400)){
var statearr_34432_36890 = state_34423__$1;
(statearr_34432_36890[(1)] = (12));

} else {
var statearr_34433_36891 = state_34423__$1;
(statearr_34433_36891[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (9))){
var state_34423__$1 = state_34423;
var statearr_34434_36893 = state_34423__$1;
(statearr_34434_36893[(2)] = null);

(statearr_34434_36893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (5))){
var state_34423__$1 = state_34423;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34435_36895 = state_34423__$1;
(statearr_34435_36895[(1)] = (8));

} else {
var statearr_34436_36897 = state_34423__$1;
(statearr_34436_36897[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (14))){
var inst_34408 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34437_36898 = state_34423__$1;
(statearr_34437_36898[(2)] = inst_34408);

(statearr_34437_36898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (10))){
var inst_34397 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34438_36899 = state_34423__$1;
(statearr_34438_36899[(2)] = inst_34397);

(statearr_34438_36899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (8))){
var inst_34394 = cljs.core.async.close_BANG_(to);
var state_34423__$1 = state_34423;
var statearr_34439_36901 = state_34423__$1;
(statearr_34439_36901[(2)] = inst_34394);

(statearr_34439_36901[(1)] = (10));


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
var statearr_34442_36903 = state_34423;
(statearr_34442_36903[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36904 = state_34423;
state_34423 = G__36904;
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
(statearr_34443[(6)] = c__34274__auto___36880);

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
var c__34274__auto___36908 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
var statearr_34461_36911 = state_34452;
(statearr_34461_36911[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34460;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36912 = state_34452;
state_34452 = G__36912;
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
(statearr_34462[(6)] = c__34274__auto___36908);

return statearr_34462;
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
var n__4666__auto___36915 = n;
var __36916 = (0);
while(true){
if((__36916 < n__4666__auto___36915)){
var G__34468_36917 = type;
var G__34468_36918__$1 = (((G__34468_36917 instanceof cljs.core.Keyword))?G__34468_36917.fqn:null);
switch (G__34468_36918__$1) {
case "compute":
var c__34274__auto___36920 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36916,c__34274__auto___36920,G__34468_36917,G__34468_36918__$1,n__4666__auto___36915,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36916,c__34274__auto___36920,G__34468_36917,G__34468_36918__$1,n__4666__auto___36915,jobs,results,process,async){
return (function (state_34481){
var state_val_34482 = (state_34481[(1)]);
if((state_val_34482 === (1))){
var state_34481__$1 = state_34481;
var statearr_34484_36922 = state_34481__$1;
(statearr_34484_36922[(2)] = null);

(statearr_34484_36922[(1)] = (2));


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
var statearr_34486_36924 = state_34481__$1;
(statearr_34486_36924[(1)] = (5));

} else {
var statearr_34487_36925 = state_34481__$1;
(statearr_34487_36925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34482 === (5))){
var state_34481__$1 = state_34481;
var statearr_34488_36926 = state_34481__$1;
(statearr_34488_36926[(2)] = null);

(statearr_34488_36926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34482 === (6))){
var state_34481__$1 = state_34481;
var statearr_34489_36928 = state_34481__$1;
(statearr_34489_36928[(2)] = null);

(statearr_34489_36928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34482 === (7))){
var inst_34477 = (state_34481[(2)]);
var state_34481__$1 = state_34481;
var statearr_34491_36929 = state_34481__$1;
(statearr_34491_36929[(2)] = inst_34477);

(statearr_34491_36929[(1)] = (3));


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
});})(__36916,c__34274__auto___36920,G__34468_36917,G__34468_36918__$1,n__4666__auto___36915,jobs,results,process,async))
;
return ((function (__36916,switch__34206__auto__,c__34274__auto___36920,G__34468_36917,G__34468_36918__$1,n__4666__auto___36915,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34492 = [null,null,null,null,null,null,null];
(statearr_34492[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34492[(1)] = (1));

return statearr_34492;
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
var statearr_34494_36931 = state_34481;
(statearr_34494_36931[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34493;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36933 = state_34481;
state_34481 = G__36933;
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
;})(__36916,switch__34206__auto__,c__34274__auto___36920,G__34468_36917,G__34468_36918__$1,n__4666__auto___36915,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34497 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34497[(6)] = c__34274__auto___36920);

return statearr_34497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36916,c__34274__auto___36920,G__34468_36917,G__34468_36918__$1,n__4666__auto___36915,jobs,results,process,async))
);


break;
case "async":
var c__34274__auto___36934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36916,c__34274__auto___36934,G__34468_36917,G__34468_36918__$1,n__4666__auto___36915,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36916,c__34274__auto___36934,G__34468_36917,G__34468_36918__$1,n__4666__auto___36915,jobs,results,process,async){
return (function (state_34513){
var state_val_34514 = (state_34513[(1)]);
if((state_val_34514 === (1))){
var state_34513__$1 = state_34513;
var statearr_34517_36936 = state_34513__$1;
(statearr_34517_36936[(2)] = null);

(statearr_34517_36936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34514 === (2))){
var state_34513__$1 = state_34513;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34513__$1,(4),jobs);
} else {
if((state_val_34514 === (3))){
var inst_34511 = (state_34513[(2)]);
var state_34513__$1 = state_34513;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34513__$1,inst_34511);
} else {
if((state_val_34514 === (4))){
var inst_34500 = (state_34513[(2)]);
var inst_34504 = async(inst_34500);
var state_34513__$1 = state_34513;
if(cljs.core.truth_(inst_34504)){
var statearr_34518_36938 = state_34513__$1;
(statearr_34518_36938[(1)] = (5));

} else {
var statearr_34519_36939 = state_34513__$1;
(statearr_34519_36939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34514 === (5))){
var state_34513__$1 = state_34513;
var statearr_34520_36941 = state_34513__$1;
(statearr_34520_36941[(2)] = null);

(statearr_34520_36941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34514 === (6))){
var state_34513__$1 = state_34513;
var statearr_34521_36942 = state_34513__$1;
(statearr_34521_36942[(2)] = null);

(statearr_34521_36942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34514 === (7))){
var inst_34509 = (state_34513[(2)]);
var state_34513__$1 = state_34513;
var statearr_34522_36943 = state_34513__$1;
(statearr_34522_36943[(2)] = inst_34509);

(statearr_34522_36943[(1)] = (3));


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
});})(__36916,c__34274__auto___36934,G__34468_36917,G__34468_36918__$1,n__4666__auto___36915,jobs,results,process,async))
;
return ((function (__36916,switch__34206__auto__,c__34274__auto___36934,G__34468_36917,G__34468_36918__$1,n__4666__auto___36915,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34524 = [null,null,null,null,null,null,null];
(statearr_34524[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34524[(1)] = (1));

return statearr_34524;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34513){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34513);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34525){if((e34525 instanceof Object)){
var ex__34210__auto__ = e34525;
var statearr_34526_36945 = state_34513;
(statearr_34526_36945[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34525;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36947 = state_34513;
state_34513 = G__36947;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34513){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36916,switch__34206__auto__,c__34274__auto___36934,G__34468_36917,G__34468_36918__$1,n__4666__auto___36915,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34527 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34527[(6)] = c__34274__auto___36934);

return statearr_34527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36916,c__34274__auto___36934,G__34468_36917,G__34468_36918__$1,n__4666__auto___36915,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34468_36918__$1)].join('')));

}

var G__36948 = (__36916 + (1));
__36916 = G__36948;
continue;
} else {
}
break;
}

var c__34274__auto___36949 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34556){
var state_val_34557 = (state_34556[(1)]);
if((state_val_34557 === (7))){
var inst_34549 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
var statearr_34558_36951 = state_34556__$1;
(statearr_34558_36951[(2)] = inst_34549);

(statearr_34558_36951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (1))){
var state_34556__$1 = state_34556;
var statearr_34559_36952 = state_34556__$1;
(statearr_34559_36952[(2)] = null);

(statearr_34559_36952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (4))){
var inst_34531 = (state_34556[(7)]);
var inst_34531__$1 = (state_34556[(2)]);
var inst_34532 = (inst_34531__$1 == null);
var state_34556__$1 = (function (){var statearr_34560 = state_34556;
(statearr_34560[(7)] = inst_34531__$1);

return statearr_34560;
})();
if(cljs.core.truth_(inst_34532)){
var statearr_34561_36954 = state_34556__$1;
(statearr_34561_36954[(1)] = (5));

} else {
var statearr_34562_36955 = state_34556__$1;
(statearr_34562_36955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (6))){
var inst_34531 = (state_34556[(7)]);
var inst_34539 = (state_34556[(8)]);
var inst_34539__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34540 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34541 = [inst_34531,inst_34539__$1];
var inst_34542 = (new cljs.core.PersistentVector(null,2,(5),inst_34540,inst_34541,null));
var state_34556__$1 = (function (){var statearr_34566 = state_34556;
(statearr_34566[(8)] = inst_34539__$1);

return statearr_34566;
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
var state_34556__$1 = (function (){var statearr_34567 = state_34556;
(statearr_34567[(9)] = inst_34546);

return statearr_34567;
})();
var statearr_34568_36957 = state_34556__$1;
(statearr_34568_36957[(2)] = null);

(statearr_34568_36957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (5))){
var inst_34534 = cljs.core.async.close_BANG_(jobs);
var state_34556__$1 = state_34556;
var statearr_34569_36958 = state_34556__$1;
(statearr_34569_36958[(2)] = inst_34534);

(statearr_34569_36958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (8))){
var inst_34539 = (state_34556[(8)]);
var inst_34544 = (state_34556[(2)]);
var state_34556__$1 = (function (){var statearr_34570 = state_34556;
(statearr_34570[(10)] = inst_34544);

return statearr_34570;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34556__$1,(9),results,inst_34539);
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
var statearr_34573_36966 = state_34556;
(statearr_34573_36966[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36967 = state_34556;
state_34556 = G__36967;
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
(statearr_34574[(6)] = c__34274__auto___36949);

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
var statearr_34614_36969 = state_34612__$1;
(statearr_34614_36969[(2)] = inst_34608);

(statearr_34614_36969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var state_34612__$1 = state_34612;
var statearr_34615_36970 = state_34612__$1;
(statearr_34615_36970[(2)] = null);

(statearr_34615_36970[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34616_36971 = state_34612__$1;
(statearr_34616_36971[(2)] = null);

(statearr_34616_36971[(1)] = (2));


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
var statearr_34618_36976 = state_34612__$1;
(statearr_34618_36976[(1)] = (5));

} else {
var statearr_34619_36977 = state_34612__$1;
(statearr_34619_36977[(1)] = (6));

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
var statearr_34620_36978 = state_34612__$1;
(statearr_34620_36978[(2)] = inst_34603);

(statearr_34620_36978[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_36979 = state_34612__$1;
(statearr_34622_36979[(2)] = null);

(statearr_34622_36979[(1)] = (2));


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
var statearr_34623_36981 = state_34612__$1;
(statearr_34623_36981[(1)] = (19));

} else {
var statearr_34624_36983 = state_34612__$1;
(statearr_34624_36983[(1)] = (20));

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
var statearr_34625_36988 = state_34612__$1;
(statearr_34625_36988[(2)] = null);

(statearr_34625_36988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34587 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34626 = state_34612;
(statearr_34626[(10)] = inst_34587);

return statearr_34626;
})();
var statearr_34627_36990 = state_34612__$1;
(statearr_34627_36990[(2)] = null);

(statearr_34627_36990[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34628_36991 = state_34612__$1;
(statearr_34628_36991[(2)] = null);

(statearr_34628_36991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_36992 = state_34612__$1;
(statearr_34629_36992[(1)] = (8));

} else {
var statearr_34630_36993 = state_34612__$1;
(statearr_34630_36993[(1)] = (9));

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
var statearr_34632_36994 = state_34612__$1;
(statearr_34632_36994[(1)] = (15));

} else {
var statearr_34633_36995 = state_34612__$1;
(statearr_34633_36995[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34634_36996 = state_34612__$1;
(statearr_34634_36996[(2)] = false);

(statearr_34634_36996[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34635_36997 = state_34612__$1;
(statearr_34635_36997[(2)] = inst_34584);

(statearr_34635_36997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34636_37000 = state_34612__$1;
(statearr_34636_37000[(2)] = inst_34595);

(statearr_34636_37000[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34581 = cljs.core.async.close_BANG_(to);
var state_34612__$1 = state_34612;
var statearr_34637_37003 = state_34612__$1;
(statearr_34637_37003[(2)] = inst_34581);

(statearr_34637_37003[(1)] = (10));


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
var statearr_34640_37006 = state_34612;
(statearr_34640_37006[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37007 = state_34612;
state_34612 = G__37007;
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
var c__34274__auto___37041 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34676){
var state_val_34677 = (state_34676[(1)]);
if((state_val_34677 === (7))){
var inst_34672 = (state_34676[(2)]);
var state_34676__$1 = state_34676;
var statearr_34678_37047 = state_34676__$1;
(statearr_34678_37047[(2)] = inst_34672);

(statearr_34678_37047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (1))){
var state_34676__$1 = state_34676;
var statearr_34679_37048 = state_34676__$1;
(statearr_34679_37048[(2)] = null);

(statearr_34679_37048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (4))){
var inst_34650 = (state_34676[(7)]);
var inst_34650__$1 = (state_34676[(2)]);
var inst_34654 = (inst_34650__$1 == null);
var state_34676__$1 = (function (){var statearr_34680 = state_34676;
(statearr_34680[(7)] = inst_34650__$1);

return statearr_34680;
})();
if(cljs.core.truth_(inst_34654)){
var statearr_34684_37053 = state_34676__$1;
(statearr_34684_37053[(1)] = (5));

} else {
var statearr_34685_37054 = state_34676__$1;
(statearr_34685_37054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (13))){
var state_34676__$1 = state_34676;
var statearr_34686_37056 = state_34676__$1;
(statearr_34686_37056[(2)] = null);

(statearr_34686_37056[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (6))){
var inst_34650 = (state_34676[(7)]);
var inst_34659 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34650) : p.call(null,inst_34650));
var state_34676__$1 = state_34676;
if(cljs.core.truth_(inst_34659)){
var statearr_34689_37061 = state_34676__$1;
(statearr_34689_37061[(1)] = (9));

} else {
var statearr_34690_37063 = state_34676__$1;
(statearr_34690_37063[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (3))){
var inst_34674 = (state_34676[(2)]);
var state_34676__$1 = state_34676;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34676__$1,inst_34674);
} else {
if((state_val_34677 === (12))){
var state_34676__$1 = state_34676;
var statearr_34691_37068 = state_34676__$1;
(statearr_34691_37068[(2)] = null);

(statearr_34691_37068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (2))){
var state_34676__$1 = state_34676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34676__$1,(4),ch);
} else {
if((state_val_34677 === (11))){
var inst_34650 = (state_34676[(7)]);
var inst_34663 = (state_34676[(2)]);
var state_34676__$1 = state_34676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34676__$1,(8),inst_34663,inst_34650);
} else {
if((state_val_34677 === (9))){
var state_34676__$1 = state_34676;
var statearr_34693_37072 = state_34676__$1;
(statearr_34693_37072[(2)] = tc);

(statearr_34693_37072[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (5))){
var inst_34656 = cljs.core.async.close_BANG_(tc);
var inst_34657 = cljs.core.async.close_BANG_(fc);
var state_34676__$1 = (function (){var statearr_34694 = state_34676;
(statearr_34694[(8)] = inst_34656);

return statearr_34694;
})();
var statearr_34695_37076 = state_34676__$1;
(statearr_34695_37076[(2)] = inst_34657);

(statearr_34695_37076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (14))){
var inst_34670 = (state_34676[(2)]);
var state_34676__$1 = state_34676;
var statearr_34698_37078 = state_34676__$1;
(statearr_34698_37078[(2)] = inst_34670);

(statearr_34698_37078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (10))){
var state_34676__$1 = state_34676;
var statearr_34699_37080 = state_34676__$1;
(statearr_34699_37080[(2)] = fc);

(statearr_34699_37080[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (8))){
var inst_34665 = (state_34676[(2)]);
var state_34676__$1 = state_34676;
if(cljs.core.truth_(inst_34665)){
var statearr_34700_37081 = state_34676__$1;
(statearr_34700_37081[(1)] = (12));

} else {
var statearr_34701_37082 = state_34676__$1;
(statearr_34701_37082[(1)] = (13));

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
var statearr_34704_37091 = state_34676;
(statearr_34704_37091[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34703;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37092 = state_34676;
state_34676 = G__37092;
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
var state__34276__auto__ = (function (){var statearr_34706 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34706[(6)] = c__34274__auto___37041);

return statearr_34706;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34730){
var state_val_34731 = (state_34730[(1)]);
if((state_val_34731 === (7))){
var inst_34725 = (state_34730[(2)]);
var state_34730__$1 = state_34730;
var statearr_34735_37101 = state_34730__$1;
(statearr_34735_37101[(2)] = inst_34725);

(statearr_34735_37101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (1))){
var inst_34708 = init;
var state_34730__$1 = (function (){var statearr_34736 = state_34730;
(statearr_34736[(7)] = inst_34708);

return statearr_34736;
})();
var statearr_34737_37102 = state_34730__$1;
(statearr_34737_37102[(2)] = null);

(statearr_34737_37102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (4))){
var inst_34711 = (state_34730[(8)]);
var inst_34711__$1 = (state_34730[(2)]);
var inst_34712 = (inst_34711__$1 == null);
var state_34730__$1 = (function (){var statearr_34738 = state_34730;
(statearr_34738[(8)] = inst_34711__$1);

return statearr_34738;
})();
if(cljs.core.truth_(inst_34712)){
var statearr_34739_37105 = state_34730__$1;
(statearr_34739_37105[(1)] = (5));

} else {
var statearr_34740_37106 = state_34730__$1;
(statearr_34740_37106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (6))){
var inst_34711 = (state_34730[(8)]);
var inst_34708 = (state_34730[(7)]);
var inst_34715 = (state_34730[(9)]);
var inst_34715__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34708,inst_34711) : f.call(null,inst_34708,inst_34711));
var inst_34716 = cljs.core.reduced_QMARK_(inst_34715__$1);
var state_34730__$1 = (function (){var statearr_34741 = state_34730;
(statearr_34741[(9)] = inst_34715__$1);

return statearr_34741;
})();
if(inst_34716){
var statearr_34743_37108 = state_34730__$1;
(statearr_34743_37108[(1)] = (8));

} else {
var statearr_34744_37109 = state_34730__$1;
(statearr_34744_37109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (3))){
var inst_34727 = (state_34730[(2)]);
var state_34730__$1 = state_34730;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34730__$1,inst_34727);
} else {
if((state_val_34731 === (2))){
var state_34730__$1 = state_34730;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34730__$1,(4),ch);
} else {
if((state_val_34731 === (9))){
var inst_34715 = (state_34730[(9)]);
var inst_34708 = inst_34715;
var state_34730__$1 = (function (){var statearr_34745 = state_34730;
(statearr_34745[(7)] = inst_34708);

return statearr_34745;
})();
var statearr_34746_37114 = state_34730__$1;
(statearr_34746_37114[(2)] = null);

(statearr_34746_37114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (5))){
var inst_34708 = (state_34730[(7)]);
var state_34730__$1 = state_34730;
var statearr_34747_37118 = state_34730__$1;
(statearr_34747_37118[(2)] = inst_34708);

(statearr_34747_37118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (10))){
var inst_34723 = (state_34730[(2)]);
var state_34730__$1 = state_34730;
var statearr_34748_37119 = state_34730__$1;
(statearr_34748_37119[(2)] = inst_34723);

(statearr_34748_37119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34731 === (8))){
var inst_34715 = (state_34730[(9)]);
var inst_34718 = cljs.core.deref(inst_34715);
var state_34730__$1 = state_34730;
var statearr_34752_37120 = state_34730__$1;
(statearr_34752_37120[(2)] = inst_34718);

(statearr_34752_37120[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__34207__auto____1 = (function (state_34730){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34730);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34754){if((e34754 instanceof Object)){
var ex__34210__auto__ = e34754;
var statearr_34755_37128 = state_34730;
(statearr_34755_37128[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34754;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37130 = state_34730;
state_34730 = G__37130;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34207__auto__ = function(state_34730){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34207__auto____1.call(this,state_34730);
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
var statearr_34772_37141 = state_34765;
(statearr_34772_37141[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34771;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37142 = state_34765;
state_34765 = G__37142;
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
var statearr_34802_37148 = state_34800__$1;
(statearr_34802_37148[(2)] = inst_34782);

(statearr_34802_37148[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (1))){
var inst_34776 = cljs.core.seq(coll);
var inst_34777 = inst_34776;
var state_34800__$1 = (function (){var statearr_34803 = state_34800;
(statearr_34803[(7)] = inst_34777);

return statearr_34803;
})();
var statearr_34804_37151 = state_34800__$1;
(statearr_34804_37151[(2)] = null);

(statearr_34804_37151[(1)] = (2));


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
var statearr_34805_37157 = state_34800__$1;
(statearr_34805_37157[(2)] = inst_34794);

(statearr_34805_37157[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (6))){
var inst_34785 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
if(cljs.core.truth_(inst_34785)){
var statearr_34806_37162 = state_34800__$1;
(statearr_34806_37162[(1)] = (8));

} else {
var statearr_34807_37163 = state_34800__$1;
(statearr_34807_37163[(1)] = (9));

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
var statearr_34811_37164 = state_34800__$1;
(statearr_34811_37164[(2)] = null);

(statearr_34811_37164[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (2))){
var inst_34777 = (state_34800[(7)]);
var state_34800__$1 = state_34800;
if(cljs.core.truth_(inst_34777)){
var statearr_34812_37165 = state_34800__$1;
(statearr_34812_37165[(1)] = (4));

} else {
var statearr_34816_37166 = state_34800__$1;
(statearr_34816_37166[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (11))){
var inst_34791 = cljs.core.async.close_BANG_(ch);
var state_34800__$1 = state_34800;
var statearr_34817_37167 = state_34800__$1;
(statearr_34817_37167[(2)] = inst_34791);

(statearr_34817_37167[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (9))){
var state_34800__$1 = state_34800;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34819_37168 = state_34800__$1;
(statearr_34819_37168[(1)] = (11));

} else {
var statearr_34820_37170 = state_34800__$1;
(statearr_34820_37170[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (5))){
var inst_34777 = (state_34800[(7)]);
var state_34800__$1 = state_34800;
var statearr_34821_37176 = state_34800__$1;
(statearr_34821_37176[(2)] = inst_34777);

(statearr_34821_37176[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (10))){
var inst_34796 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
var statearr_34822_37177 = state_34800__$1;
(statearr_34822_37177[(2)] = inst_34796);

(statearr_34822_37177[(1)] = (3));


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
var statearr_34824_37179 = state_34800__$1;
(statearr_34824_37179[(2)] = null);

(statearr_34824_37179[(1)] = (2));


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
var statearr_34826 = [null,null,null,null,null,null,null,null];
(statearr_34826[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34826[(1)] = (1));

return statearr_34826;
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
}catch (e34827){if((e34827 instanceof Object)){
var ex__34210__auto__ = e34827;
var statearr_34828_37184 = state_34800;
(statearr_34828_37184[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34827;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37188 = state_34800;
state_34800 = G__37188;
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
var state__34276__auto__ = (function (){var statearr_34831 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34831[(6)] = c__34274__auto__);

return statearr_34831;
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
var c__34274__auto___37226 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34982){
var state_val_34985 = (state_34982[(1)]);
if((state_val_34985 === (7))){
var inst_34974 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_34986_37228 = state_34982__$1;
(statearr_34986_37228[(2)] = inst_34974);

(statearr_34986_37228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (20))){
var inst_34877 = (state_34982[(7)]);
var inst_34889 = cljs.core.first(inst_34877);
var inst_34890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34889,(0),null);
var inst_34891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34889,(1),null);
var state_34982__$1 = (function (){var statearr_34987 = state_34982;
(statearr_34987[(8)] = inst_34890);

return statearr_34987;
})();
if(cljs.core.truth_(inst_34891)){
var statearr_34988_37233 = state_34982__$1;
(statearr_34988_37233[(1)] = (22));

} else {
var statearr_34989_37235 = state_34982__$1;
(statearr_34989_37235[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (27))){
var inst_34846 = (state_34982[(9)]);
var inst_34926 = (state_34982[(10)]);
var inst_34919 = (state_34982[(11)]);
var inst_34921 = (state_34982[(12)]);
var inst_34926__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34919,inst_34921);
var inst_34927 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34926__$1,inst_34846,done);
var state_34982__$1 = (function (){var statearr_34992 = state_34982;
(statearr_34992[(10)] = inst_34926__$1);

return statearr_34992;
})();
if(cljs.core.truth_(inst_34927)){
var statearr_34994_37237 = state_34982__$1;
(statearr_34994_37237[(1)] = (30));

} else {
var statearr_34995_37238 = state_34982__$1;
(statearr_34995_37238[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (1))){
var state_34982__$1 = state_34982;
var statearr_34998_37239 = state_34982__$1;
(statearr_34998_37239[(2)] = null);

(statearr_34998_37239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (24))){
var inst_34877 = (state_34982[(7)]);
var inst_34896 = (state_34982[(2)]);
var inst_34897 = cljs.core.next(inst_34877);
var inst_34855 = inst_34897;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34982__$1 = (function (){var statearr_35000 = state_34982;
(statearr_35000[(13)] = inst_34857);

(statearr_35000[(14)] = inst_34856);

(statearr_35000[(15)] = inst_34858);

(statearr_35000[(16)] = inst_34896);

(statearr_35000[(17)] = inst_34855);

return statearr_35000;
})();
var statearr_35001_37244 = state_34982__$1;
(statearr_35001_37244[(2)] = null);

(statearr_35001_37244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (39))){
var state_34982__$1 = state_34982;
var statearr_35005_37246 = state_34982__$1;
(statearr_35005_37246[(2)] = null);

(statearr_35005_37246[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (4))){
var inst_34846 = (state_34982[(9)]);
var inst_34846__$1 = (state_34982[(2)]);
var inst_34847 = (inst_34846__$1 == null);
var state_34982__$1 = (function (){var statearr_35006 = state_34982;
(statearr_35006[(9)] = inst_34846__$1);

return statearr_35006;
})();
if(cljs.core.truth_(inst_34847)){
var statearr_35007_37250 = state_34982__$1;
(statearr_35007_37250[(1)] = (5));

} else {
var statearr_35008_37252 = state_34982__$1;
(statearr_35008_37252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (15))){
var inst_34857 = (state_34982[(13)]);
var inst_34856 = (state_34982[(14)]);
var inst_34858 = (state_34982[(15)]);
var inst_34855 = (state_34982[(17)]);
var inst_34873 = (state_34982[(2)]);
var inst_34874 = (inst_34858 + (1));
var tmp35002 = inst_34857;
var tmp35003 = inst_34856;
var tmp35004 = inst_34855;
var inst_34855__$1 = tmp35004;
var inst_34856__$1 = tmp35003;
var inst_34857__$1 = tmp35002;
var inst_34858__$1 = inst_34874;
var state_34982__$1 = (function (){var statearr_35011 = state_34982;
(statearr_35011[(18)] = inst_34873);

(statearr_35011[(13)] = inst_34857__$1);

(statearr_35011[(14)] = inst_34856__$1);

(statearr_35011[(15)] = inst_34858__$1);

(statearr_35011[(17)] = inst_34855__$1);

return statearr_35011;
})();
var statearr_35014_37258 = state_34982__$1;
(statearr_35014_37258[(2)] = null);

(statearr_35014_37258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (21))){
var inst_34900 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35019_37262 = state_34982__$1;
(statearr_35019_37262[(2)] = inst_34900);

(statearr_35019_37262[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (31))){
var inst_34926 = (state_34982[(10)]);
var inst_34930 = done(null);
var inst_34931 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34926);
var state_34982__$1 = (function (){var statearr_35021 = state_34982;
(statearr_35021[(19)] = inst_34930);

return statearr_35021;
})();
var statearr_35022_37267 = state_34982__$1;
(statearr_35022_37267[(2)] = inst_34931);

(statearr_35022_37267[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (32))){
var inst_34918 = (state_34982[(20)]);
var inst_34919 = (state_34982[(11)]);
var inst_34920 = (state_34982[(21)]);
var inst_34921 = (state_34982[(12)]);
var inst_34933 = (state_34982[(2)]);
var inst_34934 = (inst_34921 + (1));
var tmp35015 = inst_34918;
var tmp35016 = inst_34919;
var tmp35017 = inst_34920;
var inst_34918__$1 = tmp35015;
var inst_34919__$1 = tmp35016;
var inst_34920__$1 = tmp35017;
var inst_34921__$1 = inst_34934;
var state_34982__$1 = (function (){var statearr_35023 = state_34982;
(statearr_35023[(20)] = inst_34918__$1);

(statearr_35023[(22)] = inst_34933);

(statearr_35023[(11)] = inst_34919__$1);

(statearr_35023[(21)] = inst_34920__$1);

(statearr_35023[(12)] = inst_34921__$1);

return statearr_35023;
})();
var statearr_35026_37275 = state_34982__$1;
(statearr_35026_37275[(2)] = null);

(statearr_35026_37275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (40))){
var inst_34946 = (state_34982[(23)]);
var inst_34950 = done(null);
var inst_34951 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34946);
var state_34982__$1 = (function (){var statearr_35028 = state_34982;
(statearr_35028[(24)] = inst_34950);

return statearr_35028;
})();
var statearr_35030_37278 = state_34982__$1;
(statearr_35030_37278[(2)] = inst_34951);

(statearr_35030_37278[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (33))){
var inst_34937 = (state_34982[(25)]);
var inst_34939 = cljs.core.chunked_seq_QMARK_(inst_34937);
var state_34982__$1 = state_34982;
if(inst_34939){
var statearr_35033_37282 = state_34982__$1;
(statearr_35033_37282[(1)] = (36));

} else {
var statearr_35034_37284 = state_34982__$1;
(statearr_35034_37284[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (13))){
var inst_34867 = (state_34982[(26)]);
var inst_34870 = cljs.core.async.close_BANG_(inst_34867);
var state_34982__$1 = state_34982;
var statearr_35035_37288 = state_34982__$1;
(statearr_35035_37288[(2)] = inst_34870);

(statearr_35035_37288[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (22))){
var inst_34890 = (state_34982[(8)]);
var inst_34893 = cljs.core.async.close_BANG_(inst_34890);
var state_34982__$1 = state_34982;
var statearr_35037_37292 = state_34982__$1;
(statearr_35037_37292[(2)] = inst_34893);

(statearr_35037_37292[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (36))){
var inst_34937 = (state_34982[(25)]);
var inst_34941 = cljs.core.chunk_first(inst_34937);
var inst_34942 = cljs.core.chunk_rest(inst_34937);
var inst_34943 = cljs.core.count(inst_34941);
var inst_34918 = inst_34942;
var inst_34919 = inst_34941;
var inst_34920 = inst_34943;
var inst_34921 = (0);
var state_34982__$1 = (function (){var statearr_35041 = state_34982;
(statearr_35041[(20)] = inst_34918);

(statearr_35041[(11)] = inst_34919);

(statearr_35041[(21)] = inst_34920);

(statearr_35041[(12)] = inst_34921);

return statearr_35041;
})();
var statearr_35042_37298 = state_34982__$1;
(statearr_35042_37298[(2)] = null);

(statearr_35042_37298[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (41))){
var inst_34937 = (state_34982[(25)]);
var inst_34953 = (state_34982[(2)]);
var inst_34954 = cljs.core.next(inst_34937);
var inst_34918 = inst_34954;
var inst_34919 = null;
var inst_34920 = (0);
var inst_34921 = (0);
var state_34982__$1 = (function (){var statearr_35056 = state_34982;
(statearr_35056[(20)] = inst_34918);

(statearr_35056[(11)] = inst_34919);

(statearr_35056[(21)] = inst_34920);

(statearr_35056[(27)] = inst_34953);

(statearr_35056[(12)] = inst_34921);

return statearr_35056;
})();
var statearr_35059_37299 = state_34982__$1;
(statearr_35059_37299[(2)] = null);

(statearr_35059_37299[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (43))){
var state_34982__$1 = state_34982;
var statearr_35060_37300 = state_34982__$1;
(statearr_35060_37300[(2)] = null);

(statearr_35060_37300[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (29))){
var inst_34962 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35064_37303 = state_34982__$1;
(statearr_35064_37303[(2)] = inst_34962);

(statearr_35064_37303[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (44))){
var inst_34971 = (state_34982[(2)]);
var state_34982__$1 = (function (){var statearr_35066 = state_34982;
(statearr_35066[(28)] = inst_34971);

return statearr_35066;
})();
var statearr_35067_37306 = state_34982__$1;
(statearr_35067_37306[(2)] = null);

(statearr_35067_37306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (6))){
var inst_34910 = (state_34982[(29)]);
var inst_34909 = cljs.core.deref(cs);
var inst_34910__$1 = cljs.core.keys(inst_34909);
var inst_34911 = cljs.core.count(inst_34910__$1);
var inst_34912 = cljs.core.reset_BANG_(dctr,inst_34911);
var inst_34917 = cljs.core.seq(inst_34910__$1);
var inst_34918 = inst_34917;
var inst_34919 = null;
var inst_34920 = (0);
var inst_34921 = (0);
var state_34982__$1 = (function (){var statearr_35072 = state_34982;
(statearr_35072[(20)] = inst_34918);

(statearr_35072[(29)] = inst_34910__$1);

(statearr_35072[(11)] = inst_34919);

(statearr_35072[(21)] = inst_34920);

(statearr_35072[(12)] = inst_34921);

(statearr_35072[(30)] = inst_34912);

return statearr_35072;
})();
var statearr_35077_37309 = state_34982__$1;
(statearr_35077_37309[(2)] = null);

(statearr_35077_37309[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (28))){
var inst_34918 = (state_34982[(20)]);
var inst_34937 = (state_34982[(25)]);
var inst_34937__$1 = cljs.core.seq(inst_34918);
var state_34982__$1 = (function (){var statearr_35083 = state_34982;
(statearr_35083[(25)] = inst_34937__$1);

return statearr_35083;
})();
if(inst_34937__$1){
var statearr_35086_37312 = state_34982__$1;
(statearr_35086_37312[(1)] = (33));

} else {
var statearr_35089_37314 = state_34982__$1;
(statearr_35089_37314[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (25))){
var inst_34920 = (state_34982[(21)]);
var inst_34921 = (state_34982[(12)]);
var inst_34923 = (inst_34921 < inst_34920);
var inst_34924 = inst_34923;
var state_34982__$1 = state_34982;
if(cljs.core.truth_(inst_34924)){
var statearr_35095_37316 = state_34982__$1;
(statearr_35095_37316[(1)] = (27));

} else {
var statearr_35099_37319 = state_34982__$1;
(statearr_35099_37319[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (34))){
var state_34982__$1 = state_34982;
var statearr_35111_37323 = state_34982__$1;
(statearr_35111_37323[(2)] = null);

(statearr_35111_37323[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (17))){
var state_34982__$1 = state_34982;
var statearr_35115_37324 = state_34982__$1;
(statearr_35115_37324[(2)] = null);

(statearr_35115_37324[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (3))){
var inst_34976 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34982__$1,inst_34976);
} else {
if((state_val_34985 === (12))){
var inst_34905 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35126_37329 = state_34982__$1;
(statearr_35126_37329[(2)] = inst_34905);

(statearr_35126_37329[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (2))){
var state_34982__$1 = state_34982;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34982__$1,(4),ch);
} else {
if((state_val_34985 === (23))){
var state_34982__$1 = state_34982;
var statearr_35136_37331 = state_34982__$1;
(statearr_35136_37331[(2)] = null);

(statearr_35136_37331[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (35))){
var inst_34960 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35141_37334 = state_34982__$1;
(statearr_35141_37334[(2)] = inst_34960);

(statearr_35141_37334[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (19))){
var inst_34877 = (state_34982[(7)]);
var inst_34881 = cljs.core.chunk_first(inst_34877);
var inst_34882 = cljs.core.chunk_rest(inst_34877);
var inst_34883 = cljs.core.count(inst_34881);
var inst_34855 = inst_34882;
var inst_34856 = inst_34881;
var inst_34857 = inst_34883;
var inst_34858 = (0);
var state_34982__$1 = (function (){var statearr_35149 = state_34982;
(statearr_35149[(13)] = inst_34857);

(statearr_35149[(14)] = inst_34856);

(statearr_35149[(15)] = inst_34858);

(statearr_35149[(17)] = inst_34855);

return statearr_35149;
})();
var statearr_35153_37345 = state_34982__$1;
(statearr_35153_37345[(2)] = null);

(statearr_35153_37345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (11))){
var inst_34855 = (state_34982[(17)]);
var inst_34877 = (state_34982[(7)]);
var inst_34877__$1 = cljs.core.seq(inst_34855);
var state_34982__$1 = (function (){var statearr_35160 = state_34982;
(statearr_35160[(7)] = inst_34877__$1);

return statearr_35160;
})();
if(inst_34877__$1){
var statearr_35161_37348 = state_34982__$1;
(statearr_35161_37348[(1)] = (16));

} else {
var statearr_35162_37349 = state_34982__$1;
(statearr_35162_37349[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (9))){
var inst_34907 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35163_37352 = state_34982__$1;
(statearr_35163_37352[(2)] = inst_34907);

(statearr_35163_37352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (5))){
var inst_34853 = cljs.core.deref(cs);
var inst_34854 = cljs.core.seq(inst_34853);
var inst_34855 = inst_34854;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34982__$1 = (function (){var statearr_35164 = state_34982;
(statearr_35164[(13)] = inst_34857);

(statearr_35164[(14)] = inst_34856);

(statearr_35164[(15)] = inst_34858);

(statearr_35164[(17)] = inst_34855);

return statearr_35164;
})();
var statearr_35165_37359 = state_34982__$1;
(statearr_35165_37359[(2)] = null);

(statearr_35165_37359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (14))){
var state_34982__$1 = state_34982;
var statearr_35168_37362 = state_34982__$1;
(statearr_35168_37362[(2)] = null);

(statearr_35168_37362[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (45))){
var inst_34968 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35169_37364 = state_34982__$1;
(statearr_35169_37364[(2)] = inst_34968);

(statearr_35169_37364[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (26))){
var inst_34910 = (state_34982[(29)]);
var inst_34964 = (state_34982[(2)]);
var inst_34965 = cljs.core.seq(inst_34910);
var state_34982__$1 = (function (){var statearr_35170 = state_34982;
(statearr_35170[(31)] = inst_34964);

return statearr_35170;
})();
if(inst_34965){
var statearr_35173_37370 = state_34982__$1;
(statearr_35173_37370[(1)] = (42));

} else {
var statearr_35174_37372 = state_34982__$1;
(statearr_35174_37372[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (16))){
var inst_34877 = (state_34982[(7)]);
var inst_34879 = cljs.core.chunked_seq_QMARK_(inst_34877);
var state_34982__$1 = state_34982;
if(inst_34879){
var statearr_35195_37377 = state_34982__$1;
(statearr_35195_37377[(1)] = (19));

} else {
var statearr_35198_37380 = state_34982__$1;
(statearr_35198_37380[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (38))){
var inst_34957 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35200_37382 = state_34982__$1;
(statearr_35200_37382[(2)] = inst_34957);

(statearr_35200_37382[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (30))){
var state_34982__$1 = state_34982;
var statearr_35203_37383 = state_34982__$1;
(statearr_35203_37383[(2)] = null);

(statearr_35203_37383[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (10))){
var inst_34856 = (state_34982[(14)]);
var inst_34858 = (state_34982[(15)]);
var inst_34866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34856,inst_34858);
var inst_34867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(0),null);
var inst_34868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(1),null);
var state_34982__$1 = (function (){var statearr_35206 = state_34982;
(statearr_35206[(26)] = inst_34867);

return statearr_35206;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_35207_37388 = state_34982__$1;
(statearr_35207_37388[(1)] = (13));

} else {
var statearr_35208_37389 = state_34982__$1;
(statearr_35208_37389[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (18))){
var inst_34903 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35210_37391 = state_34982__$1;
(statearr_35210_37391[(2)] = inst_34903);

(statearr_35210_37391[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (42))){
var state_34982__$1 = state_34982;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34982__$1,(45),dchan);
} else {
if((state_val_34985 === (37))){
var inst_34946 = (state_34982[(23)]);
var inst_34846 = (state_34982[(9)]);
var inst_34937 = (state_34982[(25)]);
var inst_34946__$1 = cljs.core.first(inst_34937);
var inst_34947 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34946__$1,inst_34846,done);
var state_34982__$1 = (function (){var statearr_35219 = state_34982;
(statearr_35219[(23)] = inst_34946__$1);

return statearr_35219;
})();
if(cljs.core.truth_(inst_34947)){
var statearr_35221_37398 = state_34982__$1;
(statearr_35221_37398[(1)] = (39));

} else {
var statearr_35224_37399 = state_34982__$1;
(statearr_35224_37399[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (8))){
var inst_34857 = (state_34982[(13)]);
var inst_34858 = (state_34982[(15)]);
var inst_34860 = (inst_34858 < inst_34857);
var inst_34861 = inst_34860;
var state_34982__$1 = state_34982;
if(cljs.core.truth_(inst_34861)){
var statearr_35233_37401 = state_34982__$1;
(statearr_35233_37401[(1)] = (10));

} else {
var statearr_35234_37402 = state_34982__$1;
(statearr_35234_37402[(1)] = (11));

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
var statearr_35243 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35243[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35243[(1)] = (1));

return statearr_35243;
});
var cljs$core$async$mult_$_state_machine__34207__auto____1 = (function (state_34982){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34982);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35251){if((e35251 instanceof Object)){
var ex__34210__auto__ = e35251;
var statearr_35252_37410 = state_34982;
(statearr_35252_37410[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35251;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37412 = state_34982;
state_34982 = G__37412;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34207__auto__ = function(state_34982){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34207__auto____1.call(this,state_34982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34207__auto____0;
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34207__auto____1;
return cljs$core$async$mult_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35259 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35259[(6)] = c__34274__auto___37226);

return statearr_35259;
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
var G__35272 = arguments.length;
switch (G__35272) {
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
var len__4789__auto___37441 = arguments.length;
var i__4790__auto___37442 = (0);
while(true){
if((i__4790__auto___37442 < len__4789__auto___37441)){
args__4795__auto__.push((arguments[i__4790__auto___37442]));

var G__37444 = (i__4790__auto___37442 + (1));
i__4790__auto___37442 = G__37444;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35365){
var map__35366 = p__35365;
var map__35366__$1 = (((((!((map__35366 == null))))?(((((map__35366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35366):map__35366);
var opts = map__35366__$1;
var statearr_35372_37448 = state;
(statearr_35372_37448[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35376_37449 = state;
(statearr_35376_37449[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35379_37450 = state;
(statearr_35379_37450[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35359){
var G__35360 = cljs.core.first(seq35359);
var seq35359__$1 = cljs.core.next(seq35359);
var G__35361 = cljs.core.first(seq35359__$1);
var seq35359__$2 = cljs.core.next(seq35359__$1);
var G__35362 = cljs.core.first(seq35359__$2);
var seq35359__$3 = cljs.core.next(seq35359__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35360,G__35361,G__35362,seq35359__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35408 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35408 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35409){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35409 = meta35409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35410,meta35409__$1){
var self__ = this;
var _35410__$1 = this;
return (new cljs.core.async.t_cljs$core$async35408(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35409__$1));
}));

(cljs.core.async.t_cljs$core$async35408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35410){
var self__ = this;
var _35410__$1 = this;
return self__.meta35409;
}));

(cljs.core.async.t_cljs$core$async35408.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35408.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35408.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35408.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35408.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35408.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35408.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35408.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35408.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35409","meta35409",1099950660,null)], null);
}));

(cljs.core.async.t_cljs$core$async35408.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35408.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35408");

(cljs.core.async.t_cljs$core$async35408.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35408");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35408.
 */
cljs.core.async.__GT_t_cljs$core$async35408 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35408(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35409){
return (new cljs.core.async.t_cljs$core$async35408(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35409));
});

}

return (new cljs.core.async.t_cljs$core$async35408(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37500 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35598){
var state_val_35601 = (state_35598[(1)]);
if((state_val_35601 === (7))){
var inst_35473 = (state_35598[(2)]);
var state_35598__$1 = state_35598;
var statearr_35611_37507 = state_35598__$1;
(statearr_35611_37507[(2)] = inst_35473);

(statearr_35611_37507[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35601 === (20))){
var inst_35486 = (state_35598[(7)]);
var state_35598__$1 = state_35598;
var statearr_35615_37509 = state_35598__$1;
(statearr_35615_37509[(2)] = inst_35486);

(statearr_35615_37509[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35601 === (27))){
var state_35598__$1 = state_35598;
var statearr_35620_37511 = state_35598__$1;
(statearr_35620_37511[(2)] = null);

(statearr_35620_37511[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35601 === (1))){
var inst_35460 = (state_35598[(8)]);
var inst_35460__$1 = calc_state();
var inst_35462 = (inst_35460__$1 == null);
var inst_35463 = cljs.core.not(inst_35462);
var state_35598__$1 = (function (){var statearr_35627 = state_35598;
(statearr_35627[(8)] = inst_35460__$1);

return statearr_35627;
})();
if(inst_35463){
var statearr_35628_37517 = state_35598__$1;
(statearr_35628_37517[(1)] = (2));

} else {
var statearr_35630_37519 = state_35598__$1;
(statearr_35630_37519[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35601 === (24))){
var inst_35515 = (state_35598[(9)]);
var inst_35560 = (state_35598[(10)]);
var inst_35528 = (state_35598[(11)]);
var inst_35560__$1 = (inst_35515.cljs$core$IFn$_invoke$arity$1 ? inst_35515.cljs$core$IFn$_invoke$arity$1(inst_35528) : inst_35515.call(null,inst_35528));
var state_35598__$1 = (function (){var statearr_35636 = state_35598;
(statearr_35636[(10)] = inst_35560__$1);

return statearr_35636;
})();
if(cljs.core.truth_(inst_35560__$1)){
var statearr_35640_37522 = state_35598__$1;
(statearr_35640_37522[(1)] = (29));

} else {
var statearr_35646_37523 = state_35598__$1;
(statearr_35646_37523[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35601 === (4))){
var inst_35476 = (state_35598[(2)]);
var state_35598__$1 = state_35598;
if(cljs.core.truth_(inst_35476)){
var statearr_35657_37526 = state_35598__$1;
(statearr_35657_37526[(1)] = (8));

} else {
var statearr_35658_37527 = state_35598__$1;
(statearr_35658_37527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35601 === (15))){
var inst_35509 = (state_35598[(2)]);
var state_35598__$1 = state_35598;
if(cljs.core.truth_(inst_35509)){
var statearr_35665_37532 = state_35598__$1;
(statearr_35665_37532[(1)] = (19));

} else {
var statearr_35669_37534 = state_35598__$1;
(statearr_35669_37534[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35601 === (21))){
var inst_35514 = (state_35598[(12)]);
var inst_35514__$1 = (state_35598[(2)]);
var inst_35515 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35514__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35514__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35514__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35598__$1 = (function (){var statearr_35676 = state_35598;
(statearr_35676[(12)] = inst_35514__$1);

(statearr_35676[(9)] = inst_35515);

(statearr_35676[(13)] = inst_35516);

return statearr_35676;
})();
return cljs.core.async.ioc_alts_BANG_(state_35598__$1,(22),inst_35518);
} else {
if((state_val_35601 === (31))){
var inst_35573 = (state_35598[(2)]);
var state_35598__$1 = state_35598;
if(cljs.core.truth_(inst_35573)){
var statearr_35681_37541 = state_35598__$1;
(statearr_35681_37541[(1)] = (32));

} else {
var statearr_35683_37543 = state_35598__$1;
(statearr_35683_37543[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35601 === (32))){
var inst_35525 = (state_35598[(14)]);
var state_35598__$1 = state_35598;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35598__$1,(35),out,inst_35525);
} else {
if((state_val_35601 === (33))){
var inst_35514 = (state_35598[(12)]);
var inst_35486 = inst_35514;
var state_35598__$1 = (function (){var statearr_35691 = state_35598;
(statearr_35691[(7)] = inst_35486);

return statearr_35691;
})();
var statearr_35692_37546 = state_35598__$1;
(statearr_35692_37546[(2)] = null);

(statearr_35692_37546[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35601 === (13))){
var inst_35486 = (state_35598[(7)]);
var inst_35497 = inst_35486.cljs$lang$protocol_mask$partition0$;
var inst_35498 = (inst_35497 & (64));
var inst_35499 = inst_35486.cljs$core$ISeq$;
var inst_35500 = (cljs.core.PROTOCOL_SENTINEL === inst_35499);
var inst_35501 = ((inst_35498) || (inst_35500));
var state_35598__$1 = state_35598;
if(cljs.core.truth_(inst_35501)){
var statearr_35693_37554 = state_35598__$1;
(statearr_35693_37554[(1)] = (16));

} else {
var statearr_35694_37555 = state_35598__$1;
(statearr_35694_37555[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35601 === (22))){
var inst_35525 = (state_35598[(14)]);
var inst_35528 = (state_35598[(11)]);
var inst_35524 = (state_35598[(2)]);
var inst_35525__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35524,(0),null);
var inst_35528__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35524,(1),null);
var inst_35531 = (inst_35525__$1 == null);
var inst_35532 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35528__$1,change);
var inst_35533 = ((inst_35531) || (inst_35532));
var state_35598__$1 = (function (){var statearr_35695 = state_35598;
(statearr_35695[(14)] = inst_35525__$1);

(statearr_35695[(11)] = inst_35528__$1);

return statearr_35695;
})();
if(cljs.core.truth_(inst_35533)){
var statearr_35696_37562 = state_35598__$1;
(statearr_35696_37562[(1)] = (23));

} else {
var statearr_35697_37567 = state_35598__$1;
(statearr_35697_37567[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35601 === (36))){
var inst_35514 = (state_35598[(12)]);
var inst_35486 = inst_35514;
var state_35598__$1 = (function (){var statearr_35700 = state_35598;
(statearr_35700[(7)] = inst_35486);

return statearr_35700;
})();
var statearr_35701_37570 = state_35598__$1;
(statearr_35701_37570[(2)] = null);

(statearr_35701_37570[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35601 === (29))){
var inst_35560 = (state_35598[(10)]);
var state_35598__$1 = state_35598;
var statearr_35702_37572 = state_35598__$1;
(statearr_35702_37572[(2)] = inst_35560);

(statearr_35702_37572[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35601 === (6))){
var state_35598__$1 = state_35598;
var statearr_35703_37574 = state_35598__$1;
(statearr_35703_37574[(2)] = false);

(statearr_35703_37574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35601 === (28))){
var inst_35555 = (state_35598[(2)]);
var inst_35556 = calc_state();
var inst_35486 = inst_35556;
var state_35598__$1 = (function (){var statearr_35706 = state_35598;
(statearr_35706[(7)] = inst_35486);

(statearr_35706[(15)] = inst_35555);

return statearr_35706;
})();
var statearr_35707_37583 = state_35598__$1;
(statearr_35707_37583[(2)] = null);

(statearr_35707_37583[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35601 === (25))){
var inst_35590 = (state_35598[(2)]);
var state_35598__$1 = state_35598;
var statearr_35710_37585 = state_35598__$1;
(statearr_35710_37585[(2)] = inst_35590);

(statearr_35710_37585[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35601 === (34))){
var inst_35588 = (state_35598[(2)]);
var state_35598__$1 = state_35598;
var statearr_35713_37586 = state_35598__$1;
(statearr_35713_37586[(2)] = inst_35588);

(statearr_35713_37586[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35601 === (17))){
var state_35598__$1 = state_35598;
var statearr_35716_37589 = state_35598__$1;
(statearr_35716_37589[(2)] = false);

(statearr_35716_37589[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35601 === (3))){
var state_35598__$1 = state_35598;
var statearr_35718_37597 = state_35598__$1;
(statearr_35718_37597[(2)] = false);

(statearr_35718_37597[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35601 === (12))){
var inst_35593 = (state_35598[(2)]);
var state_35598__$1 = state_35598;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35598__$1,inst_35593);
} else {
if((state_val_35601 === (2))){
var inst_35460 = (state_35598[(8)]);
var inst_35465 = inst_35460.cljs$lang$protocol_mask$partition0$;
var inst_35466 = (inst_35465 & (64));
var inst_35467 = inst_35460.cljs$core$ISeq$;
var inst_35468 = (cljs.core.PROTOCOL_SENTINEL === inst_35467);
var inst_35469 = ((inst_35466) || (inst_35468));
var state_35598__$1 = state_35598;
if(cljs.core.truth_(inst_35469)){
var statearr_35720_37602 = state_35598__$1;
(statearr_35720_37602[(1)] = (5));

} else {
var statearr_35721_37603 = state_35598__$1;
(statearr_35721_37603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35601 === (23))){
var inst_35525 = (state_35598[(14)]);
var inst_35535 = (inst_35525 == null);
var state_35598__$1 = state_35598;
if(cljs.core.truth_(inst_35535)){
var statearr_35722_37608 = state_35598__$1;
(statearr_35722_37608[(1)] = (26));

} else {
var statearr_35723_37610 = state_35598__$1;
(statearr_35723_37610[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35601 === (35))){
var inst_35579 = (state_35598[(2)]);
var state_35598__$1 = state_35598;
if(cljs.core.truth_(inst_35579)){
var statearr_35727_37614 = state_35598__$1;
(statearr_35727_37614[(1)] = (36));

} else {
var statearr_35729_37615 = state_35598__$1;
(statearr_35729_37615[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35601 === (19))){
var inst_35486 = (state_35598[(7)]);
var inst_35511 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35486);
var state_35598__$1 = state_35598;
var statearr_35730_37617 = state_35598__$1;
(statearr_35730_37617[(2)] = inst_35511);

(statearr_35730_37617[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35601 === (11))){
var inst_35486 = (state_35598[(7)]);
var inst_35491 = (inst_35486 == null);
var inst_35492 = cljs.core.not(inst_35491);
var state_35598__$1 = state_35598;
if(inst_35492){
var statearr_35733_37623 = state_35598__$1;
(statearr_35733_37623[(1)] = (13));

} else {
var statearr_35736_37624 = state_35598__$1;
(statearr_35736_37624[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35601 === (9))){
var inst_35460 = (state_35598[(8)]);
var state_35598__$1 = state_35598;
var statearr_35737_37631 = state_35598__$1;
(statearr_35737_37631[(2)] = inst_35460);

(statearr_35737_37631[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35601 === (5))){
var state_35598__$1 = state_35598;
var statearr_35739_37632 = state_35598__$1;
(statearr_35739_37632[(2)] = true);

(statearr_35739_37632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35601 === (14))){
var state_35598__$1 = state_35598;
var statearr_35740_37634 = state_35598__$1;
(statearr_35740_37634[(2)] = false);

(statearr_35740_37634[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35601 === (26))){
var inst_35528 = (state_35598[(11)]);
var inst_35552 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35528);
var state_35598__$1 = state_35598;
var statearr_35742_37637 = state_35598__$1;
(statearr_35742_37637[(2)] = inst_35552);

(statearr_35742_37637[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35601 === (16))){
var state_35598__$1 = state_35598;
var statearr_35743_37644 = state_35598__$1;
(statearr_35743_37644[(2)] = true);

(statearr_35743_37644[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35601 === (38))){
var inst_35584 = (state_35598[(2)]);
var state_35598__$1 = state_35598;
var statearr_35745_37646 = state_35598__$1;
(statearr_35745_37646[(2)] = inst_35584);

(statearr_35745_37646[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35601 === (30))){
var inst_35515 = (state_35598[(9)]);
var inst_35516 = (state_35598[(13)]);
var inst_35528 = (state_35598[(11)]);
var inst_35568 = cljs.core.empty_QMARK_(inst_35515);
var inst_35569 = (inst_35516.cljs$core$IFn$_invoke$arity$1 ? inst_35516.cljs$core$IFn$_invoke$arity$1(inst_35528) : inst_35516.call(null,inst_35528));
var inst_35570 = cljs.core.not(inst_35569);
var inst_35571 = ((inst_35568) && (inst_35570));
var state_35598__$1 = state_35598;
var statearr_35747_37650 = state_35598__$1;
(statearr_35747_37650[(2)] = inst_35571);

(statearr_35747_37650[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35601 === (10))){
var inst_35460 = (state_35598[(8)]);
var inst_35481 = (state_35598[(2)]);
var inst_35482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35481,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35483 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35481,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35481,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35486 = inst_35460;
var state_35598__$1 = (function (){var statearr_35749 = state_35598;
(statearr_35749[(7)] = inst_35486);

(statearr_35749[(16)] = inst_35485);

(statearr_35749[(17)] = inst_35482);

(statearr_35749[(18)] = inst_35483);

return statearr_35749;
})();
var statearr_35750_37661 = state_35598__$1;
(statearr_35750_37661[(2)] = null);

(statearr_35750_37661[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35601 === (18))){
var inst_35505 = (state_35598[(2)]);
var state_35598__$1 = state_35598;
var statearr_35752_37663 = state_35598__$1;
(statearr_35752_37663[(2)] = inst_35505);

(statearr_35752_37663[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35601 === (37))){
var state_35598__$1 = state_35598;
var statearr_35753_37668 = state_35598__$1;
(statearr_35753_37668[(2)] = null);

(statearr_35753_37668[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35601 === (8))){
var inst_35460 = (state_35598[(8)]);
var inst_35478 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35460);
var state_35598__$1 = state_35598;
var statearr_35754_37673 = state_35598__$1;
(statearr_35754_37673[(2)] = inst_35478);

(statearr_35754_37673[(1)] = (10));


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
var statearr_35761 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35761[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35761[(1)] = (1));

return statearr_35761;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35598){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35598);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35762){if((e35762 instanceof Object)){
var ex__34210__auto__ = e35762;
var statearr_35764_37684 = state_35598;
(statearr_35764_37684[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35762;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37687 = state_35598;
state_35598 = G__37687;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35598){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35768 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35768[(6)] = c__34274__auto___37500);

return statearr_35768;
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
var G__35800 = arguments.length;
switch (G__35800) {
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
var G__35814 = arguments.length;
switch (G__35814) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35809_SHARP_){
if(cljs.core.truth_((p1__35809_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35809_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35809_SHARP_.call(null,topic)))){
return p1__35809_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35809_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35824 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35824 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35825){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35825 = meta35825;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35826,meta35825__$1){
var self__ = this;
var _35826__$1 = this;
return (new cljs.core.async.t_cljs$core$async35824(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35825__$1));
}));

(cljs.core.async.t_cljs$core$async35824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35826){
var self__ = this;
var _35826__$1 = this;
return self__.meta35825;
}));

(cljs.core.async.t_cljs$core$async35824.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35824.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35824.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35824.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35824.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35824.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35824.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35824.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35825","meta35825",-2000200174,null)], null);
}));

(cljs.core.async.t_cljs$core$async35824.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35824.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35824");

(cljs.core.async.t_cljs$core$async35824.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35824");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35824.
 */
cljs.core.async.__GT_t_cljs$core$async35824 = (function cljs$core$async$__GT_t_cljs$core$async35824(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35825){
return (new cljs.core.async.t_cljs$core$async35824(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35825));
});

}

return (new cljs.core.async.t_cljs$core$async35824(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37729 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35938){
var state_val_35940 = (state_35938[(1)]);
if((state_val_35940 === (7))){
var inst_35932 = (state_35938[(2)]);
var state_35938__$1 = state_35938;
var statearr_35944_37735 = state_35938__$1;
(statearr_35944_37735[(2)] = inst_35932);

(statearr_35944_37735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (20))){
var state_35938__$1 = state_35938;
var statearr_35946_37736 = state_35938__$1;
(statearr_35946_37736[(2)] = null);

(statearr_35946_37736[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (1))){
var state_35938__$1 = state_35938;
var statearr_35949_37740 = state_35938__$1;
(statearr_35949_37740[(2)] = null);

(statearr_35949_37740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (24))){
var inst_35913 = (state_35938[(7)]);
var inst_35924 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35913);
var state_35938__$1 = state_35938;
var statearr_35950_37742 = state_35938__$1;
(statearr_35950_37742[(2)] = inst_35924);

(statearr_35950_37742[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (4))){
var inst_35860 = (state_35938[(8)]);
var inst_35860__$1 = (state_35938[(2)]);
var inst_35862 = (inst_35860__$1 == null);
var state_35938__$1 = (function (){var statearr_35953 = state_35938;
(statearr_35953[(8)] = inst_35860__$1);

return statearr_35953;
})();
if(cljs.core.truth_(inst_35862)){
var statearr_35954_37746 = state_35938__$1;
(statearr_35954_37746[(1)] = (5));

} else {
var statearr_35956_37748 = state_35938__$1;
(statearr_35956_37748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (15))){
var inst_35907 = (state_35938[(2)]);
var state_35938__$1 = state_35938;
var statearr_35958_37750 = state_35938__$1;
(statearr_35958_37750[(2)] = inst_35907);

(statearr_35958_37750[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (21))){
var inst_35929 = (state_35938[(2)]);
var state_35938__$1 = (function (){var statearr_35961 = state_35938;
(statearr_35961[(9)] = inst_35929);

return statearr_35961;
})();
var statearr_35963_37751 = state_35938__$1;
(statearr_35963_37751[(2)] = null);

(statearr_35963_37751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (13))){
var inst_35886 = (state_35938[(10)]);
var inst_35890 = cljs.core.chunked_seq_QMARK_(inst_35886);
var state_35938__$1 = state_35938;
if(inst_35890){
var statearr_35964_37760 = state_35938__$1;
(statearr_35964_37760[(1)] = (16));

} else {
var statearr_35966_37761 = state_35938__$1;
(statearr_35966_37761[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (22))){
var inst_35921 = (state_35938[(2)]);
var state_35938__$1 = state_35938;
if(cljs.core.truth_(inst_35921)){
var statearr_35967_37764 = state_35938__$1;
(statearr_35967_37764[(1)] = (23));

} else {
var statearr_35969_37765 = state_35938__$1;
(statearr_35969_37765[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (6))){
var inst_35916 = (state_35938[(11)]);
var inst_35860 = (state_35938[(8)]);
var inst_35913 = (state_35938[(7)]);
var inst_35913__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35860) : topic_fn.call(null,inst_35860));
var inst_35915 = cljs.core.deref(mults);
var inst_35916__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35915,inst_35913__$1);
var state_35938__$1 = (function (){var statearr_35974 = state_35938;
(statearr_35974[(11)] = inst_35916__$1);

(statearr_35974[(7)] = inst_35913__$1);

return statearr_35974;
})();
if(cljs.core.truth_(inst_35916__$1)){
var statearr_35975_37772 = state_35938__$1;
(statearr_35975_37772[(1)] = (19));

} else {
var statearr_35976_37774 = state_35938__$1;
(statearr_35976_37774[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (25))){
var inst_35926 = (state_35938[(2)]);
var state_35938__$1 = state_35938;
var statearr_35979_37776 = state_35938__$1;
(statearr_35979_37776[(2)] = inst_35926);

(statearr_35979_37776[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (17))){
var inst_35886 = (state_35938[(10)]);
var inst_35898 = cljs.core.first(inst_35886);
var inst_35899 = cljs.core.async.muxch_STAR_(inst_35898);
var inst_35900 = cljs.core.async.close_BANG_(inst_35899);
var inst_35901 = cljs.core.next(inst_35886);
var inst_35872 = inst_35901;
var inst_35873 = null;
var inst_35874 = (0);
var inst_35875 = (0);
var state_35938__$1 = (function (){var statearr_35981 = state_35938;
(statearr_35981[(12)] = inst_35872);

(statearr_35981[(13)] = inst_35875);

(statearr_35981[(14)] = inst_35873);

(statearr_35981[(15)] = inst_35900);

(statearr_35981[(16)] = inst_35874);

return statearr_35981;
})();
var statearr_35982_37785 = state_35938__$1;
(statearr_35982_37785[(2)] = null);

(statearr_35982_37785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (3))){
var inst_35935 = (state_35938[(2)]);
var state_35938__$1 = state_35938;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35938__$1,inst_35935);
} else {
if((state_val_35940 === (12))){
var inst_35909 = (state_35938[(2)]);
var state_35938__$1 = state_35938;
var statearr_35983_37787 = state_35938__$1;
(statearr_35983_37787[(2)] = inst_35909);

(statearr_35983_37787[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (2))){
var state_35938__$1 = state_35938;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35938__$1,(4),ch);
} else {
if((state_val_35940 === (23))){
var state_35938__$1 = state_35938;
var statearr_35986_37790 = state_35938__$1;
(statearr_35986_37790[(2)] = null);

(statearr_35986_37790[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (19))){
var inst_35916 = (state_35938[(11)]);
var inst_35860 = (state_35938[(8)]);
var inst_35919 = cljs.core.async.muxch_STAR_(inst_35916);
var state_35938__$1 = state_35938;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35938__$1,(22),inst_35919,inst_35860);
} else {
if((state_val_35940 === (11))){
var inst_35872 = (state_35938[(12)]);
var inst_35886 = (state_35938[(10)]);
var inst_35886__$1 = cljs.core.seq(inst_35872);
var state_35938__$1 = (function (){var statearr_35989 = state_35938;
(statearr_35989[(10)] = inst_35886__$1);

return statearr_35989;
})();
if(inst_35886__$1){
var statearr_35991_37799 = state_35938__$1;
(statearr_35991_37799[(1)] = (13));

} else {
var statearr_35992_37800 = state_35938__$1;
(statearr_35992_37800[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (9))){
var inst_35911 = (state_35938[(2)]);
var state_35938__$1 = state_35938;
var statearr_35994_37801 = state_35938__$1;
(statearr_35994_37801[(2)] = inst_35911);

(statearr_35994_37801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (5))){
var inst_35869 = cljs.core.deref(mults);
var inst_35870 = cljs.core.vals(inst_35869);
var inst_35871 = cljs.core.seq(inst_35870);
var inst_35872 = inst_35871;
var inst_35873 = null;
var inst_35874 = (0);
var inst_35875 = (0);
var state_35938__$1 = (function (){var statearr_35995 = state_35938;
(statearr_35995[(12)] = inst_35872);

(statearr_35995[(13)] = inst_35875);

(statearr_35995[(14)] = inst_35873);

(statearr_35995[(16)] = inst_35874);

return statearr_35995;
})();
var statearr_35998_37808 = state_35938__$1;
(statearr_35998_37808[(2)] = null);

(statearr_35998_37808[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (14))){
var state_35938__$1 = state_35938;
var statearr_36003_37812 = state_35938__$1;
(statearr_36003_37812[(2)] = null);

(statearr_36003_37812[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (16))){
var inst_35886 = (state_35938[(10)]);
var inst_35892 = cljs.core.chunk_first(inst_35886);
var inst_35893 = cljs.core.chunk_rest(inst_35886);
var inst_35894 = cljs.core.count(inst_35892);
var inst_35872 = inst_35893;
var inst_35873 = inst_35892;
var inst_35874 = inst_35894;
var inst_35875 = (0);
var state_35938__$1 = (function (){var statearr_36004 = state_35938;
(statearr_36004[(12)] = inst_35872);

(statearr_36004[(13)] = inst_35875);

(statearr_36004[(14)] = inst_35873);

(statearr_36004[(16)] = inst_35874);

return statearr_36004;
})();
var statearr_36005_37815 = state_35938__$1;
(statearr_36005_37815[(2)] = null);

(statearr_36005_37815[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (10))){
var inst_35872 = (state_35938[(12)]);
var inst_35875 = (state_35938[(13)]);
var inst_35873 = (state_35938[(14)]);
var inst_35874 = (state_35938[(16)]);
var inst_35880 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35873,inst_35875);
var inst_35881 = cljs.core.async.muxch_STAR_(inst_35880);
var inst_35882 = cljs.core.async.close_BANG_(inst_35881);
var inst_35883 = (inst_35875 + (1));
var tmp36000 = inst_35872;
var tmp36001 = inst_35873;
var tmp36002 = inst_35874;
var inst_35872__$1 = tmp36000;
var inst_35873__$1 = tmp36001;
var inst_35874__$1 = tmp36002;
var inst_35875__$1 = inst_35883;
var state_35938__$1 = (function (){var statearr_36012 = state_35938;
(statearr_36012[(12)] = inst_35872__$1);

(statearr_36012[(13)] = inst_35875__$1);

(statearr_36012[(17)] = inst_35882);

(statearr_36012[(14)] = inst_35873__$1);

(statearr_36012[(16)] = inst_35874__$1);

return statearr_36012;
})();
var statearr_36014_37824 = state_35938__$1;
(statearr_36014_37824[(2)] = null);

(statearr_36014_37824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (18))){
var inst_35904 = (state_35938[(2)]);
var state_35938__$1 = state_35938;
var statearr_36016_37826 = state_35938__$1;
(statearr_36016_37826[(2)] = inst_35904);

(statearr_36016_37826[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (8))){
var inst_35875 = (state_35938[(13)]);
var inst_35874 = (state_35938[(16)]);
var inst_35877 = (inst_35875 < inst_35874);
var inst_35878 = inst_35877;
var state_35938__$1 = state_35938;
if(cljs.core.truth_(inst_35878)){
var statearr_36020_37832 = state_35938__$1;
(statearr_36020_37832[(1)] = (10));

} else {
var statearr_36021_37833 = state_35938__$1;
(statearr_36021_37833[(1)] = (11));

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
var statearr_36026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36026[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36026[(1)] = (1));

return statearr_36026;
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
}catch (e36028){if((e36028 instanceof Object)){
var ex__34210__auto__ = e36028;
var statearr_36030_37838 = state_35938;
(statearr_36030_37838[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36028;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37840 = state_35938;
state_35938 = G__37840;
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
var state__34276__auto__ = (function (){var statearr_36034 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36034[(6)] = c__34274__auto___37729);

return statearr_36034;
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
var G__36039 = arguments.length;
switch (G__36039) {
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
var G__36047 = arguments.length;
switch (G__36047) {
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
var c__34274__auto___37868 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36101){
var state_val_36102 = (state_36101[(1)]);
if((state_val_36102 === (7))){
var state_36101__$1 = state_36101;
var statearr_36104_37872 = state_36101__$1;
(statearr_36104_37872[(2)] = null);

(statearr_36104_37872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36102 === (1))){
var state_36101__$1 = state_36101;
var statearr_36105_37874 = state_36101__$1;
(statearr_36105_37874[(2)] = null);

(statearr_36105_37874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36102 === (4))){
var inst_36056 = (state_36101[(7)]);
var inst_36058 = (inst_36056 < cnt);
var state_36101__$1 = state_36101;
if(cljs.core.truth_(inst_36058)){
var statearr_36106_37878 = state_36101__$1;
(statearr_36106_37878[(1)] = (6));

} else {
var statearr_36108_37879 = state_36101__$1;
(statearr_36108_37879[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36102 === (15))){
var inst_36089 = (state_36101[(2)]);
var state_36101__$1 = state_36101;
var statearr_36109_37882 = state_36101__$1;
(statearr_36109_37882[(2)] = inst_36089);

(statearr_36109_37882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36102 === (13))){
var inst_36082 = cljs.core.async.close_BANG_(out);
var state_36101__$1 = state_36101;
var statearr_36112_37885 = state_36101__$1;
(statearr_36112_37885[(2)] = inst_36082);

(statearr_36112_37885[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36102 === (6))){
var state_36101__$1 = state_36101;
var statearr_36115_37887 = state_36101__$1;
(statearr_36115_37887[(2)] = null);

(statearr_36115_37887[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36102 === (3))){
var inst_36091 = (state_36101[(2)]);
var state_36101__$1 = state_36101;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36101__$1,inst_36091);
} else {
if((state_val_36102 === (12))){
var inst_36079 = (state_36101[(8)]);
var inst_36079__$1 = (state_36101[(2)]);
var inst_36080 = cljs.core.some(cljs.core.nil_QMARK_,inst_36079__$1);
var state_36101__$1 = (function (){var statearr_36122 = state_36101;
(statearr_36122[(8)] = inst_36079__$1);

return statearr_36122;
})();
if(cljs.core.truth_(inst_36080)){
var statearr_36125_37895 = state_36101__$1;
(statearr_36125_37895[(1)] = (13));

} else {
var statearr_36126_37896 = state_36101__$1;
(statearr_36126_37896[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36102 === (2))){
var inst_36055 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36056 = (0);
var state_36101__$1 = (function (){var statearr_36127 = state_36101;
(statearr_36127[(9)] = inst_36055);

(statearr_36127[(7)] = inst_36056);

return statearr_36127;
})();
var statearr_36128_37898 = state_36101__$1;
(statearr_36128_37898[(2)] = null);

(statearr_36128_37898[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36102 === (11))){
var inst_36056 = (state_36101[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36101,(10),Object,null,(9));
var inst_36065 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36056) : chs__$1.call(null,inst_36056));
var inst_36067 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36056) : done.call(null,inst_36056));
var inst_36068 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36065,inst_36067);
var state_36101__$1 = state_36101;
var statearr_36129_37903 = state_36101__$1;
(statearr_36129_37903[(2)] = inst_36068);


cljs.core.async.impl.ioc_helpers.process_exception(state_36101__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36102 === (9))){
var inst_36056 = (state_36101[(7)]);
var inst_36070 = (state_36101[(2)]);
var inst_36071 = (inst_36056 + (1));
var inst_36056__$1 = inst_36071;
var state_36101__$1 = (function (){var statearr_36130 = state_36101;
(statearr_36130[(10)] = inst_36070);

(statearr_36130[(7)] = inst_36056__$1);

return statearr_36130;
})();
var statearr_36131_37907 = state_36101__$1;
(statearr_36131_37907[(2)] = null);

(statearr_36131_37907[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36102 === (5))){
var inst_36077 = (state_36101[(2)]);
var state_36101__$1 = (function (){var statearr_36132 = state_36101;
(statearr_36132[(11)] = inst_36077);

return statearr_36132;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36101__$1,(12),dchan);
} else {
if((state_val_36102 === (14))){
var inst_36079 = (state_36101[(8)]);
var inst_36084 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36079);
var state_36101__$1 = state_36101;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36101__$1,(16),out,inst_36084);
} else {
if((state_val_36102 === (16))){
var inst_36086 = (state_36101[(2)]);
var state_36101__$1 = (function (){var statearr_36133 = state_36101;
(statearr_36133[(12)] = inst_36086);

return statearr_36133;
})();
var statearr_36134_37910 = state_36101__$1;
(statearr_36134_37910[(2)] = null);

(statearr_36134_37910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36102 === (10))){
var inst_36060 = (state_36101[(2)]);
var inst_36061 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36101__$1 = (function (){var statearr_36135 = state_36101;
(statearr_36135[(13)] = inst_36060);

return statearr_36135;
})();
var statearr_36136_37915 = state_36101__$1;
(statearr_36136_37915[(2)] = inst_36061);


cljs.core.async.impl.ioc_helpers.process_exception(state_36101__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36102 === (8))){
var inst_36075 = (state_36101[(2)]);
var state_36101__$1 = state_36101;
var statearr_36137_37916 = state_36101__$1;
(statearr_36137_37916[(2)] = inst_36075);

(statearr_36137_37916[(1)] = (5));


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
var statearr_36142 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36142[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36142[(1)] = (1));

return statearr_36142;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36101){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36101);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36146){if((e36146 instanceof Object)){
var ex__34210__auto__ = e36146;
var statearr_36147_37922 = state_36101;
(statearr_36147_37922[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36146;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37924 = state_36101;
state_36101 = G__37924;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36148 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36148[(6)] = c__34274__auto___37868);

return statearr_36148;
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
var G__36163 = arguments.length;
switch (G__36163) {
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
var c__34274__auto___37931 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36213){
var state_val_36214 = (state_36213[(1)]);
if((state_val_36214 === (7))){
var inst_36182 = (state_36213[(7)]);
var inst_36181 = (state_36213[(8)]);
var inst_36181__$1 = (state_36213[(2)]);
var inst_36182__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36181__$1,(0),null);
var inst_36183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36181__$1,(1),null);
var inst_36184 = (inst_36182__$1 == null);
var state_36213__$1 = (function (){var statearr_36216 = state_36213;
(statearr_36216[(7)] = inst_36182__$1);

(statearr_36216[(8)] = inst_36181__$1);

(statearr_36216[(9)] = inst_36183);

return statearr_36216;
})();
if(cljs.core.truth_(inst_36184)){
var statearr_36217_37937 = state_36213__$1;
(statearr_36217_37937[(1)] = (8));

} else {
var statearr_36219_37938 = state_36213__$1;
(statearr_36219_37938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36214 === (1))){
var inst_36171 = cljs.core.vec(chs);
var inst_36172 = inst_36171;
var state_36213__$1 = (function (){var statearr_36220 = state_36213;
(statearr_36220[(10)] = inst_36172);

return statearr_36220;
})();
var statearr_36222_37945 = state_36213__$1;
(statearr_36222_37945[(2)] = null);

(statearr_36222_37945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36214 === (4))){
var inst_36172 = (state_36213[(10)]);
var state_36213__$1 = state_36213;
return cljs.core.async.ioc_alts_BANG_(state_36213__$1,(7),inst_36172);
} else {
if((state_val_36214 === (6))){
var inst_36203 = (state_36213[(2)]);
var state_36213__$1 = state_36213;
var statearr_36225_37952 = state_36213__$1;
(statearr_36225_37952[(2)] = inst_36203);

(statearr_36225_37952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36214 === (3))){
var inst_36205 = (state_36213[(2)]);
var state_36213__$1 = state_36213;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36213__$1,inst_36205);
} else {
if((state_val_36214 === (2))){
var inst_36172 = (state_36213[(10)]);
var inst_36174 = cljs.core.count(inst_36172);
var inst_36175 = (inst_36174 > (0));
var state_36213__$1 = state_36213;
if(cljs.core.truth_(inst_36175)){
var statearr_36229_37956 = state_36213__$1;
(statearr_36229_37956[(1)] = (4));

} else {
var statearr_36230_37959 = state_36213__$1;
(statearr_36230_37959[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36214 === (11))){
var inst_36172 = (state_36213[(10)]);
var inst_36196 = (state_36213[(2)]);
var tmp36226 = inst_36172;
var inst_36172__$1 = tmp36226;
var state_36213__$1 = (function (){var statearr_36231 = state_36213;
(statearr_36231[(11)] = inst_36196);

(statearr_36231[(10)] = inst_36172__$1);

return statearr_36231;
})();
var statearr_36232_37960 = state_36213__$1;
(statearr_36232_37960[(2)] = null);

(statearr_36232_37960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36214 === (9))){
var inst_36182 = (state_36213[(7)]);
var state_36213__$1 = state_36213;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36213__$1,(11),out,inst_36182);
} else {
if((state_val_36214 === (5))){
var inst_36201 = cljs.core.async.close_BANG_(out);
var state_36213__$1 = state_36213;
var statearr_36235_37964 = state_36213__$1;
(statearr_36235_37964[(2)] = inst_36201);

(statearr_36235_37964[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36214 === (10))){
var inst_36199 = (state_36213[(2)]);
var state_36213__$1 = state_36213;
var statearr_36237_37967 = state_36213__$1;
(statearr_36237_37967[(2)] = inst_36199);

(statearr_36237_37967[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36214 === (8))){
var inst_36182 = (state_36213[(7)]);
var inst_36181 = (state_36213[(8)]);
var inst_36172 = (state_36213[(10)]);
var inst_36183 = (state_36213[(9)]);
var inst_36187 = (function (){var cs = inst_36172;
var vec__36177 = inst_36181;
var v = inst_36182;
var c = inst_36183;
return (function (p1__36150_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36150_SHARP_);
});
})();
var inst_36188 = cljs.core.filterv(inst_36187,inst_36172);
var inst_36172__$1 = inst_36188;
var state_36213__$1 = (function (){var statearr_36241 = state_36213;
(statearr_36241[(10)] = inst_36172__$1);

return statearr_36241;
})();
var statearr_36242_37969 = state_36213__$1;
(statearr_36242_37969[(2)] = null);

(statearr_36242_37969[(1)] = (2));


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
var statearr_36248 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36248[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36248[(1)] = (1));

return statearr_36248;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36213){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36213);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36252){if((e36252 instanceof Object)){
var ex__34210__auto__ = e36252;
var statearr_36253_37974 = state_36213;
(statearr_36253_37974[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36252;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37976 = state_36213;
state_36213 = G__37976;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36213){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36254 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36254[(6)] = c__34274__auto___37931);

return statearr_36254;
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
var G__36261 = arguments.length;
switch (G__36261) {
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
var c__34274__auto___37985 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36289){
var state_val_36290 = (state_36289[(1)]);
if((state_val_36290 === (7))){
var inst_36269 = (state_36289[(7)]);
var inst_36269__$1 = (state_36289[(2)]);
var inst_36270 = (inst_36269__$1 == null);
var inst_36271 = cljs.core.not(inst_36270);
var state_36289__$1 = (function (){var statearr_36291 = state_36289;
(statearr_36291[(7)] = inst_36269__$1);

return statearr_36291;
})();
if(inst_36271){
var statearr_36293_37986 = state_36289__$1;
(statearr_36293_37986[(1)] = (8));

} else {
var statearr_36295_37987 = state_36289__$1;
(statearr_36295_37987[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36290 === (1))){
var inst_36264 = (0);
var state_36289__$1 = (function (){var statearr_36297 = state_36289;
(statearr_36297[(8)] = inst_36264);

return statearr_36297;
})();
var statearr_36299_37990 = state_36289__$1;
(statearr_36299_37990[(2)] = null);

(statearr_36299_37990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36290 === (4))){
var state_36289__$1 = state_36289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36289__$1,(7),ch);
} else {
if((state_val_36290 === (6))){
var inst_36282 = (state_36289[(2)]);
var state_36289__$1 = state_36289;
var statearr_36300_37994 = state_36289__$1;
(statearr_36300_37994[(2)] = inst_36282);

(statearr_36300_37994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36290 === (3))){
var inst_36284 = (state_36289[(2)]);
var inst_36285 = cljs.core.async.close_BANG_(out);
var state_36289__$1 = (function (){var statearr_36306 = state_36289;
(statearr_36306[(9)] = inst_36284);

return statearr_36306;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36289__$1,inst_36285);
} else {
if((state_val_36290 === (2))){
var inst_36264 = (state_36289[(8)]);
var inst_36266 = (inst_36264 < n);
var state_36289__$1 = state_36289;
if(cljs.core.truth_(inst_36266)){
var statearr_36310_37995 = state_36289__$1;
(statearr_36310_37995[(1)] = (4));

} else {
var statearr_36311_37996 = state_36289__$1;
(statearr_36311_37996[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36290 === (11))){
var inst_36264 = (state_36289[(8)]);
var inst_36274 = (state_36289[(2)]);
var inst_36275 = (inst_36264 + (1));
var inst_36264__$1 = inst_36275;
var state_36289__$1 = (function (){var statearr_36312 = state_36289;
(statearr_36312[(10)] = inst_36274);

(statearr_36312[(8)] = inst_36264__$1);

return statearr_36312;
})();
var statearr_36314_38000 = state_36289__$1;
(statearr_36314_38000[(2)] = null);

(statearr_36314_38000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36290 === (9))){
var state_36289__$1 = state_36289;
var statearr_36315_38001 = state_36289__$1;
(statearr_36315_38001[(2)] = null);

(statearr_36315_38001[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36290 === (5))){
var state_36289__$1 = state_36289;
var statearr_36317_38002 = state_36289__$1;
(statearr_36317_38002[(2)] = null);

(statearr_36317_38002[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36290 === (10))){
var inst_36279 = (state_36289[(2)]);
var state_36289__$1 = state_36289;
var statearr_36319_38003 = state_36289__$1;
(statearr_36319_38003[(2)] = inst_36279);

(statearr_36319_38003[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36290 === (8))){
var inst_36269 = (state_36289[(7)]);
var state_36289__$1 = state_36289;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36289__$1,(11),out,inst_36269);
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
var statearr_36322 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36322[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36322[(1)] = (1));

return statearr_36322;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36289){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36289);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36323){if((e36323 instanceof Object)){
var ex__34210__auto__ = e36323;
var statearr_36325_38008 = state_36289;
(statearr_36325_38008[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36323;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38009 = state_36289;
state_36289 = G__38009;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36289){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36327 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36327[(6)] = c__34274__auto___37985);

return statearr_36327;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36331 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36331 = (function (f,ch,meta36332){
this.f = f;
this.ch = ch;
this.meta36332 = meta36332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36333,meta36332__$1){
var self__ = this;
var _36333__$1 = this;
return (new cljs.core.async.t_cljs$core$async36331(self__.f,self__.ch,meta36332__$1));
}));

(cljs.core.async.t_cljs$core$async36331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36333){
var self__ = this;
var _36333__$1 = this;
return self__.meta36332;
}));

(cljs.core.async.t_cljs$core$async36331.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36331.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36331.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36331.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36331.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36343 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36343 = (function (f,ch,meta36332,_,fn1,meta36344){
this.f = f;
this.ch = ch;
this.meta36332 = meta36332;
this._ = _;
this.fn1 = fn1;
this.meta36344 = meta36344;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36345,meta36344__$1){
var self__ = this;
var _36345__$1 = this;
return (new cljs.core.async.t_cljs$core$async36343(self__.f,self__.ch,self__.meta36332,self__._,self__.fn1,meta36344__$1));
}));

(cljs.core.async.t_cljs$core$async36343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36345){
var self__ = this;
var _36345__$1 = this;
return self__.meta36344;
}));

(cljs.core.async.t_cljs$core$async36343.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36343.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36343.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36343.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36328_SHARP_){
var G__36351 = (((p1__36328_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36328_SHARP_) : self__.f.call(null,p1__36328_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36351) : f1.call(null,G__36351));
});
}));

(cljs.core.async.t_cljs$core$async36343.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36332","meta36332",296211190,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36331","cljs.core.async/t_cljs$core$async36331",605875159,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36344","meta36344",-849983698,null)], null);
}));

(cljs.core.async.t_cljs$core$async36343.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36343.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36343");

(cljs.core.async.t_cljs$core$async36343.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36343");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36343.
 */
cljs.core.async.__GT_t_cljs$core$async36343 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36343(f__$1,ch__$1,meta36332__$1,___$2,fn1__$1,meta36344){
return (new cljs.core.async.t_cljs$core$async36343(f__$1,ch__$1,meta36332__$1,___$2,fn1__$1,meta36344));
});

}

return (new cljs.core.async.t_cljs$core$async36343(self__.f,self__.ch,self__.meta36332,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36355 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36355) : self__.f.call(null,G__36355));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36331.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36331.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36331.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36332","meta36332",296211190,null)], null);
}));

(cljs.core.async.t_cljs$core$async36331.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36331.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36331");

(cljs.core.async.t_cljs$core$async36331.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36331");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36331.
 */
cljs.core.async.__GT_t_cljs$core$async36331 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36331(f__$1,ch__$1,meta36332){
return (new cljs.core.async.t_cljs$core$async36331(f__$1,ch__$1,meta36332));
});

}

return (new cljs.core.async.t_cljs$core$async36331(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36361 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36361 = (function (f,ch,meta36362){
this.f = f;
this.ch = ch;
this.meta36362 = meta36362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36363,meta36362__$1){
var self__ = this;
var _36363__$1 = this;
return (new cljs.core.async.t_cljs$core$async36361(self__.f,self__.ch,meta36362__$1));
}));

(cljs.core.async.t_cljs$core$async36361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36363){
var self__ = this;
var _36363__$1 = this;
return self__.meta36362;
}));

(cljs.core.async.t_cljs$core$async36361.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36361.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36361.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36361.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36361.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36361.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36361.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36362","meta36362",1854340596,null)], null);
}));

(cljs.core.async.t_cljs$core$async36361.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36361.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36361");

(cljs.core.async.t_cljs$core$async36361.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36361");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36361.
 */
cljs.core.async.__GT_t_cljs$core$async36361 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36361(f__$1,ch__$1,meta36362){
return (new cljs.core.async.t_cljs$core$async36361(f__$1,ch__$1,meta36362));
});

}

return (new cljs.core.async.t_cljs$core$async36361(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36379 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36379 = (function (p,ch,meta36380){
this.p = p;
this.ch = ch;
this.meta36380 = meta36380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36381,meta36380__$1){
var self__ = this;
var _36381__$1 = this;
return (new cljs.core.async.t_cljs$core$async36379(self__.p,self__.ch,meta36380__$1));
}));

(cljs.core.async.t_cljs$core$async36379.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36381){
var self__ = this;
var _36381__$1 = this;
return self__.meta36380;
}));

(cljs.core.async.t_cljs$core$async36379.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36379.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36379.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36379.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36379.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36379.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36379.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36379.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36380","meta36380",-2025328216,null)], null);
}));

(cljs.core.async.t_cljs$core$async36379.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36379.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36379");

(cljs.core.async.t_cljs$core$async36379.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36379");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36379.
 */
cljs.core.async.__GT_t_cljs$core$async36379 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36379(p__$1,ch__$1,meta36380){
return (new cljs.core.async.t_cljs$core$async36379(p__$1,ch__$1,meta36380));
});

}

return (new cljs.core.async.t_cljs$core$async36379(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36408 = arguments.length;
switch (G__36408) {
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
var c__34274__auto___38036 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36443){
var state_val_36444 = (state_36443[(1)]);
if((state_val_36444 === (7))){
var inst_36437 = (state_36443[(2)]);
var state_36443__$1 = state_36443;
var statearr_36448_38041 = state_36443__$1;
(statearr_36448_38041[(2)] = inst_36437);

(statearr_36448_38041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (1))){
var state_36443__$1 = state_36443;
var statearr_36449_38042 = state_36443__$1;
(statearr_36449_38042[(2)] = null);

(statearr_36449_38042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (4))){
var inst_36417 = (state_36443[(7)]);
var inst_36417__$1 = (state_36443[(2)]);
var inst_36418 = (inst_36417__$1 == null);
var state_36443__$1 = (function (){var statearr_36453 = state_36443;
(statearr_36453[(7)] = inst_36417__$1);

return statearr_36453;
})();
if(cljs.core.truth_(inst_36418)){
var statearr_36455_38043 = state_36443__$1;
(statearr_36455_38043[(1)] = (5));

} else {
var statearr_36456_38044 = state_36443__$1;
(statearr_36456_38044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (6))){
var inst_36417 = (state_36443[(7)]);
var inst_36423 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36417) : p.call(null,inst_36417));
var state_36443__$1 = state_36443;
if(cljs.core.truth_(inst_36423)){
var statearr_36457_38045 = state_36443__$1;
(statearr_36457_38045[(1)] = (8));

} else {
var statearr_36458_38047 = state_36443__$1;
(statearr_36458_38047[(1)] = (9));

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
var statearr_36460_38050 = state_36443__$1;
(statearr_36460_38050[(2)] = inst_36431);

(statearr_36460_38050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (9))){
var state_36443__$1 = state_36443;
var statearr_36461_38051 = state_36443__$1;
(statearr_36461_38051[(2)] = null);

(statearr_36461_38051[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (5))){
var inst_36421 = cljs.core.async.close_BANG_(out);
var state_36443__$1 = state_36443;
var statearr_36468_38052 = state_36443__$1;
(statearr_36468_38052[(2)] = inst_36421);

(statearr_36468_38052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (10))){
var inst_36434 = (state_36443[(2)]);
var state_36443__$1 = (function (){var statearr_36469 = state_36443;
(statearr_36469[(8)] = inst_36434);

return statearr_36469;
})();
var statearr_36471_38055 = state_36443__$1;
(statearr_36471_38055[(2)] = null);

(statearr_36471_38055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (8))){
var inst_36417 = (state_36443[(7)]);
var state_36443__$1 = state_36443;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36443__$1,(11),out,inst_36417);
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
var statearr_36473 = [null,null,null,null,null,null,null,null,null];
(statearr_36473[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36473[(1)] = (1));

return statearr_36473;
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
}catch (e36474){if((e36474 instanceof Object)){
var ex__34210__auto__ = e36474;
var statearr_36475_38058 = state_36443;
(statearr_36475_38058[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36474;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38059 = state_36443;
state_36443 = G__38059;
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
var state__34276__auto__ = (function (){var statearr_36477 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36477[(6)] = c__34274__auto___38036);

return statearr_36477;
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
var G__36480 = arguments.length;
switch (G__36480) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36547){
var state_val_36548 = (state_36547[(1)]);
if((state_val_36548 === (7))){
var inst_36542 = (state_36547[(2)]);
var state_36547__$1 = state_36547;
var statearr_36551_38063 = state_36547__$1;
(statearr_36551_38063[(2)] = inst_36542);

(statearr_36551_38063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (20))){
var inst_36511 = (state_36547[(7)]);
var inst_36523 = (state_36547[(2)]);
var inst_36524 = cljs.core.next(inst_36511);
var inst_36497 = inst_36524;
var inst_36498 = null;
var inst_36499 = (0);
var inst_36500 = (0);
var state_36547__$1 = (function (){var statearr_36553 = state_36547;
(statearr_36553[(8)] = inst_36499);

(statearr_36553[(9)] = inst_36523);

(statearr_36553[(10)] = inst_36500);

(statearr_36553[(11)] = inst_36497);

(statearr_36553[(12)] = inst_36498);

return statearr_36553;
})();
var statearr_36554_38067 = state_36547__$1;
(statearr_36554_38067[(2)] = null);

(statearr_36554_38067[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (1))){
var state_36547__$1 = state_36547;
var statearr_36556_38068 = state_36547__$1;
(statearr_36556_38068[(2)] = null);

(statearr_36556_38068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (4))){
var inst_36485 = (state_36547[(13)]);
var inst_36485__$1 = (state_36547[(2)]);
var inst_36486 = (inst_36485__$1 == null);
var state_36547__$1 = (function (){var statearr_36557 = state_36547;
(statearr_36557[(13)] = inst_36485__$1);

return statearr_36557;
})();
if(cljs.core.truth_(inst_36486)){
var statearr_36558_38069 = state_36547__$1;
(statearr_36558_38069[(1)] = (5));

} else {
var statearr_36559_38071 = state_36547__$1;
(statearr_36559_38071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (15))){
var state_36547__$1 = state_36547;
var statearr_36564_38073 = state_36547__$1;
(statearr_36564_38073[(2)] = null);

(statearr_36564_38073[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (21))){
var state_36547__$1 = state_36547;
var statearr_36565_38075 = state_36547__$1;
(statearr_36565_38075[(2)] = null);

(statearr_36565_38075[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (13))){
var inst_36499 = (state_36547[(8)]);
var inst_36500 = (state_36547[(10)]);
var inst_36497 = (state_36547[(11)]);
var inst_36498 = (state_36547[(12)]);
var inst_36507 = (state_36547[(2)]);
var inst_36508 = (inst_36500 + (1));
var tmp36561 = inst_36499;
var tmp36562 = inst_36497;
var tmp36563 = inst_36498;
var inst_36497__$1 = tmp36562;
var inst_36498__$1 = tmp36563;
var inst_36499__$1 = tmp36561;
var inst_36500__$1 = inst_36508;
var state_36547__$1 = (function (){var statearr_36567 = state_36547;
(statearr_36567[(8)] = inst_36499__$1);

(statearr_36567[(14)] = inst_36507);

(statearr_36567[(10)] = inst_36500__$1);

(statearr_36567[(11)] = inst_36497__$1);

(statearr_36567[(12)] = inst_36498__$1);

return statearr_36567;
})();
var statearr_36568_38077 = state_36547__$1;
(statearr_36568_38077[(2)] = null);

(statearr_36568_38077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (22))){
var state_36547__$1 = state_36547;
var statearr_36570_38079 = state_36547__$1;
(statearr_36570_38079[(2)] = null);

(statearr_36570_38079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (6))){
var inst_36485 = (state_36547[(13)]);
var inst_36495 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36485) : f.call(null,inst_36485));
var inst_36496 = cljs.core.seq(inst_36495);
var inst_36497 = inst_36496;
var inst_36498 = null;
var inst_36499 = (0);
var inst_36500 = (0);
var state_36547__$1 = (function (){var statearr_36571 = state_36547;
(statearr_36571[(8)] = inst_36499);

(statearr_36571[(10)] = inst_36500);

(statearr_36571[(11)] = inst_36497);

(statearr_36571[(12)] = inst_36498);

return statearr_36571;
})();
var statearr_36572_38081 = state_36547__$1;
(statearr_36572_38081[(2)] = null);

(statearr_36572_38081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (17))){
var inst_36511 = (state_36547[(7)]);
var inst_36516 = cljs.core.chunk_first(inst_36511);
var inst_36517 = cljs.core.chunk_rest(inst_36511);
var inst_36518 = cljs.core.count(inst_36516);
var inst_36497 = inst_36517;
var inst_36498 = inst_36516;
var inst_36499 = inst_36518;
var inst_36500 = (0);
var state_36547__$1 = (function (){var statearr_36574 = state_36547;
(statearr_36574[(8)] = inst_36499);

(statearr_36574[(10)] = inst_36500);

(statearr_36574[(11)] = inst_36497);

(statearr_36574[(12)] = inst_36498);

return statearr_36574;
})();
var statearr_36575_38085 = state_36547__$1;
(statearr_36575_38085[(2)] = null);

(statearr_36575_38085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (3))){
var inst_36544 = (state_36547[(2)]);
var state_36547__$1 = state_36547;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36547__$1,inst_36544);
} else {
if((state_val_36548 === (12))){
var inst_36532 = (state_36547[(2)]);
var state_36547__$1 = state_36547;
var statearr_36577_38086 = state_36547__$1;
(statearr_36577_38086[(2)] = inst_36532);

(statearr_36577_38086[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (2))){
var state_36547__$1 = state_36547;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36547__$1,(4),in$);
} else {
if((state_val_36548 === (23))){
var inst_36540 = (state_36547[(2)]);
var state_36547__$1 = state_36547;
var statearr_36579_38088 = state_36547__$1;
(statearr_36579_38088[(2)] = inst_36540);

(statearr_36579_38088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (19))){
var inst_36527 = (state_36547[(2)]);
var state_36547__$1 = state_36547;
var statearr_36580_38091 = state_36547__$1;
(statearr_36580_38091[(2)] = inst_36527);

(statearr_36580_38091[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (11))){
var inst_36511 = (state_36547[(7)]);
var inst_36497 = (state_36547[(11)]);
var inst_36511__$1 = cljs.core.seq(inst_36497);
var state_36547__$1 = (function (){var statearr_36581 = state_36547;
(statearr_36581[(7)] = inst_36511__$1);

return statearr_36581;
})();
if(inst_36511__$1){
var statearr_36583_38092 = state_36547__$1;
(statearr_36583_38092[(1)] = (14));

} else {
var statearr_36584_38093 = state_36547__$1;
(statearr_36584_38093[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (9))){
var inst_36534 = (state_36547[(2)]);
var inst_36535 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36547__$1 = (function (){var statearr_36585 = state_36547;
(statearr_36585[(15)] = inst_36534);

return statearr_36585;
})();
if(cljs.core.truth_(inst_36535)){
var statearr_36586_38095 = state_36547__$1;
(statearr_36586_38095[(1)] = (21));

} else {
var statearr_36588_38096 = state_36547__$1;
(statearr_36588_38096[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (5))){
var inst_36489 = cljs.core.async.close_BANG_(out);
var state_36547__$1 = state_36547;
var statearr_36589_38098 = state_36547__$1;
(statearr_36589_38098[(2)] = inst_36489);

(statearr_36589_38098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (14))){
var inst_36511 = (state_36547[(7)]);
var inst_36513 = cljs.core.chunked_seq_QMARK_(inst_36511);
var state_36547__$1 = state_36547;
if(inst_36513){
var statearr_36590_38100 = state_36547__$1;
(statearr_36590_38100[(1)] = (17));

} else {
var statearr_36592_38101 = state_36547__$1;
(statearr_36592_38101[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (16))){
var inst_36530 = (state_36547[(2)]);
var state_36547__$1 = state_36547;
var statearr_36593_38102 = state_36547__$1;
(statearr_36593_38102[(2)] = inst_36530);

(statearr_36593_38102[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (10))){
var inst_36500 = (state_36547[(10)]);
var inst_36498 = (state_36547[(12)]);
var inst_36505 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36498,inst_36500);
var state_36547__$1 = state_36547;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36547__$1,(13),out,inst_36505);
} else {
if((state_val_36548 === (18))){
var inst_36511 = (state_36547[(7)]);
var inst_36521 = cljs.core.first(inst_36511);
var state_36547__$1 = state_36547;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36547__$1,(20),out,inst_36521);
} else {
if((state_val_36548 === (8))){
var inst_36499 = (state_36547[(8)]);
var inst_36500 = (state_36547[(10)]);
var inst_36502 = (inst_36500 < inst_36499);
var inst_36503 = inst_36502;
var state_36547__$1 = state_36547;
if(cljs.core.truth_(inst_36503)){
var statearr_36595_38106 = state_36547__$1;
(statearr_36595_38106[(1)] = (10));

} else {
var statearr_36596_38107 = state_36547__$1;
(statearr_36596_38107[(1)] = (11));

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
var statearr_36598 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36598[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36598[(1)] = (1));

return statearr_36598;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36547){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36547);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36599){if((e36599 instanceof Object)){
var ex__34210__auto__ = e36599;
var statearr_36600_38110 = state_36547;
(statearr_36600_38110[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36599;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38112 = state_36547;
state_36547 = G__38112;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36547){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36602 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36602[(6)] = c__34274__auto__);

return statearr_36602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36605 = arguments.length;
switch (G__36605) {
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
var G__36609 = arguments.length;
switch (G__36609) {
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
var G__36613 = arguments.length;
switch (G__36613) {
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
var c__34274__auto___38122 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36639){
var state_val_36640 = (state_36639[(1)]);
if((state_val_36640 === (7))){
var inst_36634 = (state_36639[(2)]);
var state_36639__$1 = state_36639;
var statearr_36642_38123 = state_36639__$1;
(statearr_36642_38123[(2)] = inst_36634);

(statearr_36642_38123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (1))){
var inst_36616 = null;
var state_36639__$1 = (function (){var statearr_36644 = state_36639;
(statearr_36644[(7)] = inst_36616);

return statearr_36644;
})();
var statearr_36645_38124 = state_36639__$1;
(statearr_36645_38124[(2)] = null);

(statearr_36645_38124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (4))){
var inst_36619 = (state_36639[(8)]);
var inst_36619__$1 = (state_36639[(2)]);
var inst_36620 = (inst_36619__$1 == null);
var inst_36621 = cljs.core.not(inst_36620);
var state_36639__$1 = (function (){var statearr_36646 = state_36639;
(statearr_36646[(8)] = inst_36619__$1);

return statearr_36646;
})();
if(inst_36621){
var statearr_36648_38128 = state_36639__$1;
(statearr_36648_38128[(1)] = (5));

} else {
var statearr_36649_38129 = state_36639__$1;
(statearr_36649_38129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (6))){
var state_36639__$1 = state_36639;
var statearr_36650_38130 = state_36639__$1;
(statearr_36650_38130[(2)] = null);

(statearr_36650_38130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (3))){
var inst_36636 = (state_36639[(2)]);
var inst_36637 = cljs.core.async.close_BANG_(out);
var state_36639__$1 = (function (){var statearr_36652 = state_36639;
(statearr_36652[(9)] = inst_36636);

return statearr_36652;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36639__$1,inst_36637);
} else {
if((state_val_36640 === (2))){
var state_36639__$1 = state_36639;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36639__$1,(4),ch);
} else {
if((state_val_36640 === (11))){
var inst_36619 = (state_36639[(8)]);
var inst_36628 = (state_36639[(2)]);
var inst_36616 = inst_36619;
var state_36639__$1 = (function (){var statearr_36653 = state_36639;
(statearr_36653[(10)] = inst_36628);

(statearr_36653[(7)] = inst_36616);

return statearr_36653;
})();
var statearr_36654_38134 = state_36639__$1;
(statearr_36654_38134[(2)] = null);

(statearr_36654_38134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (9))){
var inst_36619 = (state_36639[(8)]);
var state_36639__$1 = state_36639;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36639__$1,(11),out,inst_36619);
} else {
if((state_val_36640 === (5))){
var inst_36616 = (state_36639[(7)]);
var inst_36619 = (state_36639[(8)]);
var inst_36623 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36619,inst_36616);
var state_36639__$1 = state_36639;
if(inst_36623){
var statearr_36657_38135 = state_36639__$1;
(statearr_36657_38135[(1)] = (8));

} else {
var statearr_36658_38136 = state_36639__$1;
(statearr_36658_38136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (10))){
var inst_36631 = (state_36639[(2)]);
var state_36639__$1 = state_36639;
var statearr_36660_38138 = state_36639__$1;
(statearr_36660_38138[(2)] = inst_36631);

(statearr_36660_38138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (8))){
var inst_36616 = (state_36639[(7)]);
var tmp36656 = inst_36616;
var inst_36616__$1 = tmp36656;
var state_36639__$1 = (function (){var statearr_36661 = state_36639;
(statearr_36661[(7)] = inst_36616__$1);

return statearr_36661;
})();
var statearr_36662_38141 = state_36639__$1;
(statearr_36662_38141[(2)] = null);

(statearr_36662_38141[(1)] = (2));


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
var statearr_36664 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36664[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36664[(1)] = (1));

return statearr_36664;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36639){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36639);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36665){if((e36665 instanceof Object)){
var ex__34210__auto__ = e36665;
var statearr_36666_38143 = state_36639;
(statearr_36666_38143[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36665;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38145 = state_36639;
state_36639 = G__38145;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36639){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36668 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36668[(6)] = c__34274__auto___38122);

return statearr_36668;
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
var G__36671 = arguments.length;
switch (G__36671) {
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
var c__34274__auto___38149 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36712){
var state_val_36713 = (state_36712[(1)]);
if((state_val_36713 === (7))){
var inst_36708 = (state_36712[(2)]);
var state_36712__$1 = state_36712;
var statearr_36715_38152 = state_36712__$1;
(statearr_36715_38152[(2)] = inst_36708);

(statearr_36715_38152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (1))){
var inst_36674 = (new Array(n));
var inst_36675 = inst_36674;
var inst_36676 = (0);
var state_36712__$1 = (function (){var statearr_36717 = state_36712;
(statearr_36717[(7)] = inst_36676);

(statearr_36717[(8)] = inst_36675);

return statearr_36717;
})();
var statearr_36718_38153 = state_36712__$1;
(statearr_36718_38153[(2)] = null);

(statearr_36718_38153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (4))){
var inst_36679 = (state_36712[(9)]);
var inst_36679__$1 = (state_36712[(2)]);
var inst_36680 = (inst_36679__$1 == null);
var inst_36681 = cljs.core.not(inst_36680);
var state_36712__$1 = (function (){var statearr_36719 = state_36712;
(statearr_36719[(9)] = inst_36679__$1);

return statearr_36719;
})();
if(inst_36681){
var statearr_36720_38155 = state_36712__$1;
(statearr_36720_38155[(1)] = (5));

} else {
var statearr_36722_38157 = state_36712__$1;
(statearr_36722_38157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (15))){
var inst_36702 = (state_36712[(2)]);
var state_36712__$1 = state_36712;
var statearr_36723_38159 = state_36712__$1;
(statearr_36723_38159[(2)] = inst_36702);

(statearr_36723_38159[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (13))){
var state_36712__$1 = state_36712;
var statearr_36724_38160 = state_36712__$1;
(statearr_36724_38160[(2)] = null);

(statearr_36724_38160[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (6))){
var inst_36676 = (state_36712[(7)]);
var inst_36698 = (inst_36676 > (0));
var state_36712__$1 = state_36712;
if(cljs.core.truth_(inst_36698)){
var statearr_36726_38161 = state_36712__$1;
(statearr_36726_38161[(1)] = (12));

} else {
var statearr_36727_38162 = state_36712__$1;
(statearr_36727_38162[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (3))){
var inst_36710 = (state_36712[(2)]);
var state_36712__$1 = state_36712;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36712__$1,inst_36710);
} else {
if((state_val_36713 === (12))){
var inst_36675 = (state_36712[(8)]);
var inst_36700 = cljs.core.vec(inst_36675);
var state_36712__$1 = state_36712;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36712__$1,(15),out,inst_36700);
} else {
if((state_val_36713 === (2))){
var state_36712__$1 = state_36712;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36712__$1,(4),ch);
} else {
if((state_val_36713 === (11))){
var inst_36692 = (state_36712[(2)]);
var inst_36693 = (new Array(n));
var inst_36675 = inst_36693;
var inst_36676 = (0);
var state_36712__$1 = (function (){var statearr_36729 = state_36712;
(statearr_36729[(7)] = inst_36676);

(statearr_36729[(10)] = inst_36692);

(statearr_36729[(8)] = inst_36675);

return statearr_36729;
})();
var statearr_36730_38166 = state_36712__$1;
(statearr_36730_38166[(2)] = null);

(statearr_36730_38166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (9))){
var inst_36675 = (state_36712[(8)]);
var inst_36690 = cljs.core.vec(inst_36675);
var state_36712__$1 = state_36712;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36712__$1,(11),out,inst_36690);
} else {
if((state_val_36713 === (5))){
var inst_36684 = (state_36712[(11)]);
var inst_36679 = (state_36712[(9)]);
var inst_36676 = (state_36712[(7)]);
var inst_36675 = (state_36712[(8)]);
var inst_36683 = (inst_36675[inst_36676] = inst_36679);
var inst_36684__$1 = (inst_36676 + (1));
var inst_36686 = (inst_36684__$1 < n);
var state_36712__$1 = (function (){var statearr_36732 = state_36712;
(statearr_36732[(11)] = inst_36684__$1);

(statearr_36732[(12)] = inst_36683);

return statearr_36732;
})();
if(cljs.core.truth_(inst_36686)){
var statearr_36734_38168 = state_36712__$1;
(statearr_36734_38168[(1)] = (8));

} else {
var statearr_36735_38170 = state_36712__$1;
(statearr_36735_38170[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (14))){
var inst_36705 = (state_36712[(2)]);
var inst_36706 = cljs.core.async.close_BANG_(out);
var state_36712__$1 = (function (){var statearr_36737 = state_36712;
(statearr_36737[(13)] = inst_36705);

return statearr_36737;
})();
var statearr_36738_38172 = state_36712__$1;
(statearr_36738_38172[(2)] = inst_36706);

(statearr_36738_38172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (10))){
var inst_36696 = (state_36712[(2)]);
var state_36712__$1 = state_36712;
var statearr_36740_38173 = state_36712__$1;
(statearr_36740_38173[(2)] = inst_36696);

(statearr_36740_38173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (8))){
var inst_36684 = (state_36712[(11)]);
var inst_36675 = (state_36712[(8)]);
var tmp36736 = inst_36675;
var inst_36675__$1 = tmp36736;
var inst_36676 = inst_36684;
var state_36712__$1 = (function (){var statearr_36741 = state_36712;
(statearr_36741[(7)] = inst_36676);

(statearr_36741[(8)] = inst_36675__$1);

return statearr_36741;
})();
var statearr_36742_38174 = state_36712__$1;
(statearr_36742_38174[(2)] = null);

(statearr_36742_38174[(1)] = (2));


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
var statearr_36744 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36744[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36744[(1)] = (1));

return statearr_36744;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36712){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36712);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36751){if((e36751 instanceof Object)){
var ex__34210__auto__ = e36751;
var statearr_36752_38177 = state_36712;
(statearr_36752_38177[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36751;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38179 = state_36712;
state_36712 = G__38179;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36754 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36754[(6)] = c__34274__auto___38149);

return statearr_36754;
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
var G__36757 = arguments.length;
switch (G__36757) {
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
var c__34274__auto___38181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36801){
var state_val_36802 = (state_36801[(1)]);
if((state_val_36802 === (7))){
var inst_36797 = (state_36801[(2)]);
var state_36801__$1 = state_36801;
var statearr_36805_38182 = state_36801__$1;
(statearr_36805_38182[(2)] = inst_36797);

(statearr_36805_38182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36802 === (1))){
var inst_36759 = [];
var inst_36760 = inst_36759;
var inst_36761 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36801__$1 = (function (){var statearr_36806 = state_36801;
(statearr_36806[(7)] = inst_36761);

(statearr_36806[(8)] = inst_36760);

return statearr_36806;
})();
var statearr_36807_38184 = state_36801__$1;
(statearr_36807_38184[(2)] = null);

(statearr_36807_38184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36802 === (4))){
var inst_36764 = (state_36801[(9)]);
var inst_36764__$1 = (state_36801[(2)]);
var inst_36765 = (inst_36764__$1 == null);
var inst_36766 = cljs.core.not(inst_36765);
var state_36801__$1 = (function (){var statearr_36809 = state_36801;
(statearr_36809[(9)] = inst_36764__$1);

return statearr_36809;
})();
if(inst_36766){
var statearr_36810_38190 = state_36801__$1;
(statearr_36810_38190[(1)] = (5));

} else {
var statearr_36811_38191 = state_36801__$1;
(statearr_36811_38191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36802 === (15))){
var inst_36791 = (state_36801[(2)]);
var state_36801__$1 = state_36801;
var statearr_36813_38192 = state_36801__$1;
(statearr_36813_38192[(2)] = inst_36791);

(statearr_36813_38192[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36802 === (13))){
var state_36801__$1 = state_36801;
var statearr_36814_38193 = state_36801__$1;
(statearr_36814_38193[(2)] = null);

(statearr_36814_38193[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36802 === (6))){
var inst_36760 = (state_36801[(8)]);
var inst_36786 = inst_36760.length;
var inst_36787 = (inst_36786 > (0));
var state_36801__$1 = state_36801;
if(cljs.core.truth_(inst_36787)){
var statearr_36815_38197 = state_36801__$1;
(statearr_36815_38197[(1)] = (12));

} else {
var statearr_36817_38198 = state_36801__$1;
(statearr_36817_38198[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36802 === (3))){
var inst_36799 = (state_36801[(2)]);
var state_36801__$1 = state_36801;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36801__$1,inst_36799);
} else {
if((state_val_36802 === (12))){
var inst_36760 = (state_36801[(8)]);
var inst_36789 = cljs.core.vec(inst_36760);
var state_36801__$1 = state_36801;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36801__$1,(15),out,inst_36789);
} else {
if((state_val_36802 === (2))){
var state_36801__$1 = state_36801;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36801__$1,(4),ch);
} else {
if((state_val_36802 === (11))){
var inst_36764 = (state_36801[(9)]);
var inst_36769 = (state_36801[(10)]);
var inst_36779 = (state_36801[(2)]);
var inst_36780 = [];
var inst_36781 = inst_36780.push(inst_36764);
var inst_36760 = inst_36780;
var inst_36761 = inst_36769;
var state_36801__$1 = (function (){var statearr_36819 = state_36801;
(statearr_36819[(11)] = inst_36779);

(statearr_36819[(7)] = inst_36761);

(statearr_36819[(8)] = inst_36760);

(statearr_36819[(12)] = inst_36781);

return statearr_36819;
})();
var statearr_36820_38202 = state_36801__$1;
(statearr_36820_38202[(2)] = null);

(statearr_36820_38202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36802 === (9))){
var inst_36760 = (state_36801[(8)]);
var inst_36777 = cljs.core.vec(inst_36760);
var state_36801__$1 = state_36801;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36801__$1,(11),out,inst_36777);
} else {
if((state_val_36802 === (5))){
var inst_36764 = (state_36801[(9)]);
var inst_36761 = (state_36801[(7)]);
var inst_36769 = (state_36801[(10)]);
var inst_36769__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36764) : f.call(null,inst_36764));
var inst_36770 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36769__$1,inst_36761);
var inst_36771 = cljs.core.keyword_identical_QMARK_(inst_36761,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36772 = ((inst_36770) || (inst_36771));
var state_36801__$1 = (function (){var statearr_36823 = state_36801;
(statearr_36823[(10)] = inst_36769__$1);

return statearr_36823;
})();
if(cljs.core.truth_(inst_36772)){
var statearr_36824_38206 = state_36801__$1;
(statearr_36824_38206[(1)] = (8));

} else {
var statearr_36825_38207 = state_36801__$1;
(statearr_36825_38207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36802 === (14))){
var inst_36794 = (state_36801[(2)]);
var inst_36795 = cljs.core.async.close_BANG_(out);
var state_36801__$1 = (function (){var statearr_36827 = state_36801;
(statearr_36827[(13)] = inst_36794);

return statearr_36827;
})();
var statearr_36829_38208 = state_36801__$1;
(statearr_36829_38208[(2)] = inst_36795);

(statearr_36829_38208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36802 === (10))){
var inst_36784 = (state_36801[(2)]);
var state_36801__$1 = state_36801;
var statearr_36830_38210 = state_36801__$1;
(statearr_36830_38210[(2)] = inst_36784);

(statearr_36830_38210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36802 === (8))){
var inst_36764 = (state_36801[(9)]);
var inst_36760 = (state_36801[(8)]);
var inst_36769 = (state_36801[(10)]);
var inst_36774 = inst_36760.push(inst_36764);
var tmp36826 = inst_36760;
var inst_36760__$1 = tmp36826;
var inst_36761 = inst_36769;
var state_36801__$1 = (function (){var statearr_36832 = state_36801;
(statearr_36832[(14)] = inst_36774);

(statearr_36832[(7)] = inst_36761);

(statearr_36832[(8)] = inst_36760__$1);

return statearr_36832;
})();
var statearr_36833_38213 = state_36801__$1;
(statearr_36833_38213[(2)] = null);

(statearr_36833_38213[(1)] = (2));


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
var statearr_36835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36835[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36835[(1)] = (1));

return statearr_36835;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36801){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36801);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36836){if((e36836 instanceof Object)){
var ex__34210__auto__ = e36836;
var statearr_36837_38215 = state_36801;
(statearr_36837_38215[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36836;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38216 = state_36801;
state_36801 = G__38216;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36801){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36840 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36840[(6)] = c__34274__auto___38181);

return statearr_36840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
