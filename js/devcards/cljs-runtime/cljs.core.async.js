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
var val_36905 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36905) : fn1.call(null,val_36905));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36905) : fn1.call(null,val_36905));
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
var n__4666__auto___36915 = n;
var x_36916 = (0);
while(true){
if((x_36916 < n__4666__auto___36915)){
(a[x_36916] = x_36916);

var G__36917 = (x_36916 + (1));
x_36916 = G__36917;
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
var G__34373 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34362_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34373) : fret.call(null,G__34373));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34363_SHARP_){
var G__34374 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34363_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34374) : fret.call(null,G__34374));
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
var G__36941 = (i + (1));
i = G__36941;
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
var len__4789__auto___36955 = arguments.length;
var i__4790__auto___36956 = (0);
while(true){
if((i__4790__auto___36956 < len__4789__auto___36955)){
args__4795__auto__.push((arguments[i__4790__auto___36956]));

var G__36957 = (i__4790__auto___36956 + (1));
i__4790__auto___36956 = G__36957;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34380){
var map__34381 = p__34380;
var map__34381__$1 = (((((!((map__34381 == null))))?(((((map__34381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34381):map__34381);
var opts = map__34381__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34378){
var G__34379 = cljs.core.first(seq34378);
var seq34378__$1 = cljs.core.next(seq34378);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34379,seq34378__$1);
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
var G__34387 = arguments.length;
switch (G__34387) {
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
var c__34273__auto___36977 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34423){
var state_val_34424 = (state_34423[(1)]);
if((state_val_34424 === (7))){
var inst_34419 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34425_36983 = state_34423__$1;
(statearr_34425_36983[(2)] = inst_34419);

(statearr_34425_36983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (1))){
var state_34423__$1 = state_34423;
var statearr_34426_36987 = state_34423__$1;
(statearr_34426_36987[(2)] = null);

(statearr_34426_36987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (4))){
var inst_34402 = (state_34423[(7)]);
var inst_34402__$1 = (state_34423[(2)]);
var inst_34403 = (inst_34402__$1 == null);
var state_34423__$1 = (function (){var statearr_34427 = state_34423;
(statearr_34427[(7)] = inst_34402__$1);

return statearr_34427;
})();
if(cljs.core.truth_(inst_34403)){
var statearr_34428_36990 = state_34423__$1;
(statearr_34428_36990[(1)] = (5));

} else {
var statearr_34429_36991 = state_34423__$1;
(statearr_34429_36991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (13))){
var state_34423__$1 = state_34423;
var statearr_34430_36994 = state_34423__$1;
(statearr_34430_36994[(2)] = null);

(statearr_34430_36994[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (6))){
var inst_34402 = (state_34423[(7)]);
var state_34423__$1 = state_34423;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34423__$1,(11),to,inst_34402);
} else {
if((state_val_34424 === (3))){
var inst_34421 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34423__$1,inst_34421);
} else {
if((state_val_34424 === (12))){
var state_34423__$1 = state_34423;
var statearr_34431_36996 = state_34423__$1;
(statearr_34431_36996[(2)] = null);

(statearr_34431_36996[(1)] = (2));


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
var statearr_34432_37000 = state_34423__$1;
(statearr_34432_37000[(1)] = (12));

} else {
var statearr_34433_37001 = state_34423__$1;
(statearr_34433_37001[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (9))){
var state_34423__$1 = state_34423;
var statearr_34434_37007 = state_34423__$1;
(statearr_34434_37007[(2)] = null);

(statearr_34434_37007[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (5))){
var state_34423__$1 = state_34423;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34435_37008 = state_34423__$1;
(statearr_34435_37008[(1)] = (8));

} else {
var statearr_34436_37009 = state_34423__$1;
(statearr_34436_37009[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (14))){
var inst_34417 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34437_37012 = state_34423__$1;
(statearr_34437_37012[(2)] = inst_34417);

(statearr_34437_37012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (10))){
var inst_34409 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34438_37018 = state_34423__$1;
(statearr_34438_37018[(2)] = inst_34409);

(statearr_34438_37018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (8))){
var inst_34406 = cljs.core.async.close_BANG_(to);
var state_34423__$1 = state_34423;
var statearr_34443_37020 = state_34423__$1;
(statearr_34443_37020[(2)] = inst_34406);

(statearr_34443_37020[(1)] = (10));


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
var statearr_34446_37023 = state_34423;
(statearr_34446_37023[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34445;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37025 = state_34423;
state_34423 = G__37025;
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
(statearr_34448[(6)] = c__34273__auto___36977);

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
var c__34273__auto___37033 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
var state_34459__$1 = (function (){var statearr_34461 = state_34459;
(statearr_34461[(7)] = inst_34456);

return statearr_34461;
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
var statearr_34465_37042 = state_34459;
(statearr_34465_37042[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34464;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37043 = state_34459;
state_34459 = G__37043;
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
var state__34275__auto__ = (function (){var statearr_34466 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34466[(6)] = c__34273__auto___37033);

return statearr_34466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34469){
var vec__34473 = p__34469;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34473,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34473,(1),null);
var job = vec__34473;
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
var n__4666__auto___37050 = n;
var __37051 = (0);
while(true){
if((__37051 < n__4666__auto___37050)){
var G__34478_37053 = type;
var G__34478_37054__$1 = (((G__34478_37053 instanceof cljs.core.Keyword))?G__34478_37053.fqn:null);
switch (G__34478_37054__$1) {
case "compute":
var c__34273__auto___37059 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37051,c__34273__auto___37059,G__34478_37053,G__34478_37054__$1,n__4666__auto___37050,jobs,results,process,async){
return (function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = ((function (__37051,c__34273__auto___37059,G__34478_37053,G__34478_37054__$1,n__4666__auto___37050,jobs,results,process,async){
return (function (state_34491){
var state_val_34492 = (state_34491[(1)]);
if((state_val_34492 === (1))){
var state_34491__$1 = state_34491;
var statearr_34493_37062 = state_34491__$1;
(statearr_34493_37062[(2)] = null);

(statearr_34493_37062[(1)] = (2));


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
var statearr_34495_37065 = state_34491__$1;
(statearr_34495_37065[(1)] = (5));

} else {
var statearr_34496_37066 = state_34491__$1;
(statearr_34496_37066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34492 === (5))){
var state_34491__$1 = state_34491;
var statearr_34497_37067 = state_34491__$1;
(statearr_34497_37067[(2)] = null);

(statearr_34497_37067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34492 === (6))){
var state_34491__$1 = state_34491;
var statearr_34498_37069 = state_34491__$1;
(statearr_34498_37069[(2)] = null);

(statearr_34498_37069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34492 === (7))){
var inst_34487 = (state_34491[(2)]);
var state_34491__$1 = state_34491;
var statearr_34499_37072 = state_34491__$1;
(statearr_34499_37072[(2)] = inst_34487);

(statearr_34499_37072[(1)] = (3));


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
});})(__37051,c__34273__auto___37059,G__34478_37053,G__34478_37054__$1,n__4666__auto___37050,jobs,results,process,async))
;
return ((function (__37051,switch__34206__auto__,c__34273__auto___37059,G__34478_37053,G__34478_37054__$1,n__4666__auto___37050,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34500 = [null,null,null,null,null,null,null];
(statearr_34500[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34500[(1)] = (1));

return statearr_34500;
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
}catch (e34505){if((e34505 instanceof Object)){
var ex__34210__auto__ = e34505;
var statearr_34506_37081 = state_34491;
(statearr_34506_37081[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34505;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37082 = state_34491;
state_34491 = G__37082;
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
;})(__37051,switch__34206__auto__,c__34273__auto___37059,G__34478_37053,G__34478_37054__$1,n__4666__auto___37050,jobs,results,process,async))
})();
var state__34275__auto__ = (function (){var statearr_34510 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34510[(6)] = c__34273__auto___37059);

return statearr_34510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
});})(__37051,c__34273__auto___37059,G__34478_37053,G__34478_37054__$1,n__4666__auto___37050,jobs,results,process,async))
);


break;
case "async":
var c__34273__auto___37083 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37051,c__34273__auto___37083,G__34478_37053,G__34478_37054__$1,n__4666__auto___37050,jobs,results,process,async){
return (function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = ((function (__37051,c__34273__auto___37083,G__34478_37053,G__34478_37054__$1,n__4666__auto___37050,jobs,results,process,async){
return (function (state_34523){
var state_val_34524 = (state_34523[(1)]);
if((state_val_34524 === (1))){
var state_34523__$1 = state_34523;
var statearr_34525_37090 = state_34523__$1;
(statearr_34525_37090[(2)] = null);

(statearr_34525_37090[(1)] = (2));


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
var statearr_34526_37095 = state_34523__$1;
(statearr_34526_37095[(1)] = (5));

} else {
var statearr_34527_37096 = state_34523__$1;
(statearr_34527_37096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34524 === (5))){
var state_34523__$1 = state_34523;
var statearr_34528_37097 = state_34523__$1;
(statearr_34528_37097[(2)] = null);

(statearr_34528_37097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34524 === (6))){
var state_34523__$1 = state_34523;
var statearr_34529_37102 = state_34523__$1;
(statearr_34529_37102[(2)] = null);

(statearr_34529_37102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34524 === (7))){
var inst_34519 = (state_34523[(2)]);
var state_34523__$1 = state_34523;
var statearr_34530_37106 = state_34523__$1;
(statearr_34530_37106[(2)] = inst_34519);

(statearr_34530_37106[(1)] = (3));


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
});})(__37051,c__34273__auto___37083,G__34478_37053,G__34478_37054__$1,n__4666__auto___37050,jobs,results,process,async))
;
return ((function (__37051,switch__34206__auto__,c__34273__auto___37083,G__34478_37053,G__34478_37054__$1,n__4666__auto___37050,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34533 = [null,null,null,null,null,null,null];
(statearr_34533[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34533[(1)] = (1));

return statearr_34533;
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
var statearr_34536_37114 = state_34523;
(statearr_34536_37114[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34535;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37118 = state_34523;
state_34523 = G__37118;
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
;})(__37051,switch__34206__auto__,c__34273__auto___37083,G__34478_37053,G__34478_37054__$1,n__4666__auto___37050,jobs,results,process,async))
})();
var state__34275__auto__ = (function (){var statearr_34537 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34537[(6)] = c__34273__auto___37083);

return statearr_34537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
});})(__37051,c__34273__auto___37083,G__34478_37053,G__34478_37054__$1,n__4666__auto___37050,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34478_37054__$1)].join('')));

}

var G__37123 = (__37051 + (1));
__37051 = G__37123;
continue;
} else {
}
break;
}

var c__34273__auto___37124 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34559){
var state_val_34560 = (state_34559[(1)]);
if((state_val_34560 === (7))){
var inst_34555 = (state_34559[(2)]);
var state_34559__$1 = state_34559;
var statearr_34561_37127 = state_34559__$1;
(statearr_34561_37127[(2)] = inst_34555);

(statearr_34561_37127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (1))){
var state_34559__$1 = state_34559;
var statearr_34562_37131 = state_34559__$1;
(statearr_34562_37131[(2)] = null);

(statearr_34562_37131[(1)] = (2));


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
var statearr_34564_37139 = state_34559__$1;
(statearr_34564_37139[(1)] = (5));

} else {
var statearr_34565_37143 = state_34559__$1;
(statearr_34565_37143[(1)] = (6));

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
var statearr_34568_37148 = state_34559__$1;
(statearr_34568_37148[(2)] = null);

(statearr_34568_37148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (5))){
var inst_34543 = cljs.core.async.close_BANG_(jobs);
var state_34559__$1 = state_34559;
var statearr_34569_37150 = state_34559__$1;
(statearr_34569_37150[(2)] = inst_34543);

(statearr_34569_37150[(1)] = (7));


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
var statearr_34573_37157 = state_34559;
(statearr_34573_37157[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37159 = state_34559;
state_34559 = G__37159;
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
(statearr_34574[(6)] = c__34273__auto___37124);

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
var statearr_34614_37164 = state_34612__$1;
(statearr_34614_37164[(2)] = inst_34608);

(statearr_34614_37164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var state_34612__$1 = state_34612;
var statearr_34615_37166 = state_34612__$1;
(statearr_34615_37166[(2)] = null);

(statearr_34615_37166[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34616_37168 = state_34612__$1;
(statearr_34616_37168[(2)] = null);

(statearr_34616_37168[(1)] = (2));


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
var statearr_34618_37173 = state_34612__$1;
(statearr_34618_37173[(1)] = (5));

} else {
var statearr_34619_37176 = state_34612__$1;
(statearr_34619_37176[(1)] = (6));

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
var statearr_34620_37180 = state_34612__$1;
(statearr_34620_37180[(2)] = inst_34603);

(statearr_34620_37180[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_37184 = state_34612__$1;
(statearr_34622_37184[(2)] = null);

(statearr_34622_37184[(1)] = (2));


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
var statearr_34623_37189 = state_34612__$1;
(statearr_34623_37189[(1)] = (19));

} else {
var statearr_34624_37191 = state_34612__$1;
(statearr_34624_37191[(1)] = (20));

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
var statearr_34625_37198 = state_34612__$1;
(statearr_34625_37198[(2)] = null);

(statearr_34625_37198[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34587 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34626 = state_34612;
(statearr_34626[(10)] = inst_34587);

return statearr_34626;
})();
var statearr_34627_37202 = state_34612__$1;
(statearr_34627_37202[(2)] = null);

(statearr_34627_37202[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34628_37204 = state_34612__$1;
(statearr_34628_37204[(2)] = null);

(statearr_34628_37204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_37209 = state_34612__$1;
(statearr_34629_37209[(1)] = (8));

} else {
var statearr_34630_37210 = state_34612__$1;
(statearr_34630_37210[(1)] = (9));

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
var statearr_34632_37215 = state_34612__$1;
(statearr_34632_37215[(1)] = (15));

} else {
var statearr_34633_37217 = state_34612__$1;
(statearr_34633_37217[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34634_37220 = state_34612__$1;
(statearr_34634_37220[(2)] = false);

(statearr_34634_37220[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34635_37222 = state_34612__$1;
(statearr_34635_37222[(2)] = inst_34584);

(statearr_34635_37222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34636_37223 = state_34612__$1;
(statearr_34636_37223[(2)] = inst_34595);

(statearr_34636_37223[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34581 = cljs.core.async.close_BANG_(to);
var state_34612__$1 = state_34612;
var statearr_34637_37226 = state_34612__$1;
(statearr_34637_37226[(2)] = inst_34581);

(statearr_34637_37226[(1)] = (10));


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
var statearr_34641 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34641[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34641[(1)] = (1));

return statearr_34641;
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
}catch (e34642){if((e34642 instanceof Object)){
var ex__34210__auto__ = e34642;
var statearr_34643_37231 = state_34612;
(statearr_34643_37231[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34642;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37232 = state_34612;
state_34612 = G__37232;
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
var state__34275__auto__ = (function (){var statearr_34644 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34644[(6)] = c__34273__auto__);

return statearr_34644;
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
var G__34652 = arguments.length;
switch (G__34652) {
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
var G__34656 = arguments.length;
switch (G__34656) {
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
var G__34660 = arguments.length;
switch (G__34660) {
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
var c__34273__auto___37266 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34691){
var state_val_34692 = (state_34691[(1)]);
if((state_val_34692 === (7))){
var inst_34687 = (state_34691[(2)]);
var state_34691__$1 = state_34691;
var statearr_34693_37272 = state_34691__$1;
(statearr_34693_37272[(2)] = inst_34687);

(statearr_34693_37272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (1))){
var state_34691__$1 = state_34691;
var statearr_34694_37275 = state_34691__$1;
(statearr_34694_37275[(2)] = null);

(statearr_34694_37275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (4))){
var inst_34668 = (state_34691[(7)]);
var inst_34668__$1 = (state_34691[(2)]);
var inst_34669 = (inst_34668__$1 == null);
var state_34691__$1 = (function (){var statearr_34696 = state_34691;
(statearr_34696[(7)] = inst_34668__$1);

return statearr_34696;
})();
if(cljs.core.truth_(inst_34669)){
var statearr_34697_37279 = state_34691__$1;
(statearr_34697_37279[(1)] = (5));

} else {
var statearr_34698_37280 = state_34691__$1;
(statearr_34698_37280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (13))){
var state_34691__$1 = state_34691;
var statearr_34699_37285 = state_34691__$1;
(statearr_34699_37285[(2)] = null);

(statearr_34699_37285[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (6))){
var inst_34668 = (state_34691[(7)]);
var inst_34674 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34668) : p.call(null,inst_34668));
var state_34691__$1 = state_34691;
if(cljs.core.truth_(inst_34674)){
var statearr_34700_37293 = state_34691__$1;
(statearr_34700_37293[(1)] = (9));

} else {
var statearr_34701_37295 = state_34691__$1;
(statearr_34701_37295[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (3))){
var inst_34689 = (state_34691[(2)]);
var state_34691__$1 = state_34691;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34691__$1,inst_34689);
} else {
if((state_val_34692 === (12))){
var state_34691__$1 = state_34691;
var statearr_34702_37296 = state_34691__$1;
(statearr_34702_37296[(2)] = null);

(statearr_34702_37296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (2))){
var state_34691__$1 = state_34691;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34691__$1,(4),ch);
} else {
if((state_val_34692 === (11))){
var inst_34668 = (state_34691[(7)]);
var inst_34678 = (state_34691[(2)]);
var state_34691__$1 = state_34691;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34691__$1,(8),inst_34678,inst_34668);
} else {
if((state_val_34692 === (9))){
var state_34691__$1 = state_34691;
var statearr_34706_37301 = state_34691__$1;
(statearr_34706_37301[(2)] = tc);

(statearr_34706_37301[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (5))){
var inst_34671 = cljs.core.async.close_BANG_(tc);
var inst_34672 = cljs.core.async.close_BANG_(fc);
var state_34691__$1 = (function (){var statearr_34707 = state_34691;
(statearr_34707[(8)] = inst_34671);

return statearr_34707;
})();
var statearr_34708_37303 = state_34691__$1;
(statearr_34708_37303[(2)] = inst_34672);

(statearr_34708_37303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (14))){
var inst_34685 = (state_34691[(2)]);
var state_34691__$1 = state_34691;
var statearr_34712_37305 = state_34691__$1;
(statearr_34712_37305[(2)] = inst_34685);

(statearr_34712_37305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (10))){
var state_34691__$1 = state_34691;
var statearr_34713_37311 = state_34691__$1;
(statearr_34713_37311[(2)] = fc);

(statearr_34713_37311[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (8))){
var inst_34680 = (state_34691[(2)]);
var state_34691__$1 = state_34691;
if(cljs.core.truth_(inst_34680)){
var statearr_34714_37312 = state_34691__$1;
(statearr_34714_37312[(1)] = (12));

} else {
var statearr_34715_37314 = state_34691__$1;
(statearr_34715_37314[(1)] = (13));

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
var statearr_34716 = [null,null,null,null,null,null,null,null,null];
(statearr_34716[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34716[(1)] = (1));

return statearr_34716;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34691){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34691);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34717){if((e34717 instanceof Object)){
var ex__34210__auto__ = e34717;
var statearr_34718_37322 = state_34691;
(statearr_34718_37322[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34717;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37323 = state_34691;
state_34691 = G__37323;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34691){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34722 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34722[(6)] = c__34273__auto___37266);

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
var statearr_34745_37329 = state_34743__$1;
(statearr_34745_37329[(2)] = inst_34739);

(statearr_34745_37329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (1))){
var inst_34723 = init;
var state_34743__$1 = (function (){var statearr_34746 = state_34743;
(statearr_34746[(7)] = inst_34723);

return statearr_34746;
})();
var statearr_34747_37333 = state_34743__$1;
(statearr_34747_37333[(2)] = null);

(statearr_34747_37333[(1)] = (2));


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
var statearr_34749_37334 = state_34743__$1;
(statearr_34749_37334[(1)] = (5));

} else {
var statearr_34750_37337 = state_34743__$1;
(statearr_34750_37337[(1)] = (6));

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
var statearr_34752_37343 = state_34743__$1;
(statearr_34752_37343[(1)] = (8));

} else {
var statearr_34753_37344 = state_34743__$1;
(statearr_34753_37344[(1)] = (9));

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
var statearr_34755_37347 = state_34743__$1;
(statearr_34755_37347[(2)] = null);

(statearr_34755_37347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (5))){
var inst_34723 = (state_34743[(7)]);
var state_34743__$1 = state_34743;
var statearr_34756_37352 = state_34743__$1;
(statearr_34756_37352[(2)] = inst_34723);

(statearr_34756_37352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (10))){
var inst_34737 = (state_34743[(2)]);
var state_34743__$1 = state_34743;
var statearr_34760_37354 = state_34743__$1;
(statearr_34760_37354[(2)] = inst_34737);

(statearr_34760_37354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (8))){
var inst_34730 = (state_34743[(9)]);
var inst_34733 = cljs.core.deref(inst_34730);
var state_34743__$1 = state_34743;
var statearr_34764_37357 = state_34743__$1;
(statearr_34764_37357[(2)] = inst_34733);

(statearr_34764_37357[(1)] = (10));


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
}catch (e34767){if((e34767 instanceof Object)){
var ex__34210__auto__ = e34767;
var statearr_34768_37359 = state_34743;
(statearr_34768_37359[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34767;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37364 = state_34743;
state_34743 = G__37364;
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
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34776){
var state_val_34777 = (state_34776[(1)]);
if((state_val_34777 === (1))){
var inst_34771 = cljs.core.async.reduce(f__$1,init,ch);
var state_34776__$1 = state_34776;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34776__$1,(2),inst_34771);
} else {
if((state_val_34777 === (2))){
var inst_34773 = (state_34776[(2)]);
var inst_34774 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34773) : f__$1.call(null,inst_34773));
var state_34776__$1 = state_34776;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34776__$1,inst_34774);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34207__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34207__auto____0 = (function (){
var statearr_34783 = [null,null,null,null,null,null,null];
(statearr_34783[(0)] = cljs$core$async$transduce_$_state_machine__34207__auto__);

(statearr_34783[(1)] = (1));

return statearr_34783;
});
var cljs$core$async$transduce_$_state_machine__34207__auto____1 = (function (state_34776){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34776);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34784){if((e34784 instanceof Object)){
var ex__34210__auto__ = e34784;
var statearr_34785_37375 = state_34776;
(statearr_34785_37375[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34784;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37378 = state_34776;
state_34776 = G__37378;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34207__auto__ = function(state_34776){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34207__auto____1.call(this,state_34776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34207__auto____0;
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34207__auto____1;
return cljs$core$async$transduce_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34786 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34786[(6)] = c__34273__auto__);

return statearr_34786;
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
var G__34788 = arguments.length;
switch (G__34788) {
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
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34819){
var state_val_34820 = (state_34819[(1)]);
if((state_val_34820 === (7))){
var inst_34801 = (state_34819[(2)]);
var state_34819__$1 = state_34819;
var statearr_34821_37397 = state_34819__$1;
(statearr_34821_37397[(2)] = inst_34801);

(statearr_34821_37397[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (1))){
var inst_34789 = cljs.core.seq(coll);
var inst_34790 = inst_34789;
var state_34819__$1 = (function (){var statearr_34822 = state_34819;
(statearr_34822[(7)] = inst_34790);

return statearr_34822;
})();
var statearr_34823_37405 = state_34819__$1;
(statearr_34823_37405[(2)] = null);

(statearr_34823_37405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (4))){
var inst_34790 = (state_34819[(7)]);
var inst_34799 = cljs.core.first(inst_34790);
var state_34819__$1 = state_34819;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34819__$1,(7),ch,inst_34799);
} else {
if((state_val_34820 === (13))){
var inst_34813 = (state_34819[(2)]);
var state_34819__$1 = state_34819;
var statearr_34824_37408 = state_34819__$1;
(statearr_34824_37408[(2)] = inst_34813);

(statearr_34824_37408[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (6))){
var inst_34804 = (state_34819[(2)]);
var state_34819__$1 = state_34819;
if(cljs.core.truth_(inst_34804)){
var statearr_34825_37414 = state_34819__$1;
(statearr_34825_37414[(1)] = (8));

} else {
var statearr_34826_37415 = state_34819__$1;
(statearr_34826_37415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (3))){
var inst_34817 = (state_34819[(2)]);
var state_34819__$1 = state_34819;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34819__$1,inst_34817);
} else {
if((state_val_34820 === (12))){
var state_34819__$1 = state_34819;
var statearr_34827_37423 = state_34819__$1;
(statearr_34827_37423[(2)] = null);

(statearr_34827_37423[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (2))){
var inst_34790 = (state_34819[(7)]);
var state_34819__$1 = state_34819;
if(cljs.core.truth_(inst_34790)){
var statearr_34828_37425 = state_34819__$1;
(statearr_34828_37425[(1)] = (4));

} else {
var statearr_34829_37426 = state_34819__$1;
(statearr_34829_37426[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (11))){
var inst_34810 = cljs.core.async.close_BANG_(ch);
var state_34819__$1 = state_34819;
var statearr_34830_37428 = state_34819__$1;
(statearr_34830_37428[(2)] = inst_34810);

(statearr_34830_37428[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (9))){
var state_34819__$1 = state_34819;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34831_37435 = state_34819__$1;
(statearr_34831_37435[(1)] = (11));

} else {
var statearr_34832_37436 = state_34819__$1;
(statearr_34832_37436[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (5))){
var inst_34790 = (state_34819[(7)]);
var state_34819__$1 = state_34819;
var statearr_34833_37438 = state_34819__$1;
(statearr_34833_37438[(2)] = inst_34790);

(statearr_34833_37438[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (10))){
var inst_34815 = (state_34819[(2)]);
var state_34819__$1 = state_34819;
var statearr_34834_37440 = state_34819__$1;
(statearr_34834_37440[(2)] = inst_34815);

(statearr_34834_37440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (8))){
var inst_34790 = (state_34819[(7)]);
var inst_34806 = cljs.core.next(inst_34790);
var inst_34790__$1 = inst_34806;
var state_34819__$1 = (function (){var statearr_34835 = state_34819;
(statearr_34835[(7)] = inst_34790__$1);

return statearr_34835;
})();
var statearr_34836_37447 = state_34819__$1;
(statearr_34836_37447[(2)] = null);

(statearr_34836_37447[(1)] = (2));


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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34819){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34819);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34838){if((e34838 instanceof Object)){
var ex__34210__auto__ = e34838;
var statearr_34839_37452 = state_34819;
(statearr_34839_37452[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34838;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37458 = state_34819;
state_34819 = G__37458;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34819);
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
var c__34273__auto___37520 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_35023){
var state_val_35027 = (state_35023[(1)]);
if((state_val_35027 === (7))){
var inst_35002 = (state_35023[(2)]);
var state_35023__$1 = state_35023;
var statearr_35041_37526 = state_35023__$1;
(statearr_35041_37526[(2)] = inst_35002);

(statearr_35041_37526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (20))){
var inst_34889 = (state_35023[(7)]);
var inst_34904 = cljs.core.first(inst_34889);
var inst_34905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34904,(0),null);
var inst_34906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34904,(1),null);
var state_35023__$1 = (function (){var statearr_35047 = state_35023;
(statearr_35047[(8)] = inst_34905);

return statearr_35047;
})();
if(cljs.core.truth_(inst_34906)){
var statearr_35051_37534 = state_35023__$1;
(statearr_35051_37534[(1)] = (22));

} else {
var statearr_35052_37535 = state_35023__$1;
(statearr_35052_37535[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (27))){
var inst_34856 = (state_35023[(9)]);
var inst_34944 = (state_35023[(10)]);
var inst_34937 = (state_35023[(11)]);
var inst_34939 = (state_35023[(12)]);
var inst_34944__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34937,inst_34939);
var inst_34945 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34944__$1,inst_34856,done);
var state_35023__$1 = (function (){var statearr_35063 = state_35023;
(statearr_35063[(10)] = inst_34944__$1);

return statearr_35063;
})();
if(cljs.core.truth_(inst_34945)){
var statearr_35065_37545 = state_35023__$1;
(statearr_35065_37545[(1)] = (30));

} else {
var statearr_35066_37546 = state_35023__$1;
(statearr_35066_37546[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (1))){
var state_35023__$1 = state_35023;
var statearr_35072_37548 = state_35023__$1;
(statearr_35072_37548[(2)] = null);

(statearr_35072_37548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (24))){
var inst_34889 = (state_35023[(7)]);
var inst_34914 = (state_35023[(2)]);
var inst_34915 = cljs.core.next(inst_34889);
var inst_34866 = inst_34915;
var inst_34867 = null;
var inst_34868 = (0);
var inst_34870 = (0);
var state_35023__$1 = (function (){var statearr_35080 = state_35023;
(statearr_35080[(13)] = inst_34866);

(statearr_35080[(14)] = inst_34870);

(statearr_35080[(15)] = inst_34914);

(statearr_35080[(16)] = inst_34868);

(statearr_35080[(17)] = inst_34867);

return statearr_35080;
})();
var statearr_35085_37560 = state_35023__$1;
(statearr_35085_37560[(2)] = null);

(statearr_35085_37560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (39))){
var state_35023__$1 = state_35023;
var statearr_35099_37562 = state_35023__$1;
(statearr_35099_37562[(2)] = null);

(statearr_35099_37562[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (4))){
var inst_34856 = (state_35023[(9)]);
var inst_34856__$1 = (state_35023[(2)]);
var inst_34858 = (inst_34856__$1 == null);
var state_35023__$1 = (function (){var statearr_35105 = state_35023;
(statearr_35105[(9)] = inst_34856__$1);

return statearr_35105;
})();
if(cljs.core.truth_(inst_34858)){
var statearr_35109_37568 = state_35023__$1;
(statearr_35109_37568[(1)] = (5));

} else {
var statearr_35112_37570 = state_35023__$1;
(statearr_35112_37570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (15))){
var inst_34866 = (state_35023[(13)]);
var inst_34870 = (state_35023[(14)]);
var inst_34868 = (state_35023[(16)]);
var inst_34867 = (state_35023[(17)]);
var inst_34885 = (state_35023[(2)]);
var inst_34886 = (inst_34870 + (1));
var tmp35091 = inst_34866;
var tmp35092 = inst_34868;
var tmp35093 = inst_34867;
var inst_34866__$1 = tmp35091;
var inst_34867__$1 = tmp35093;
var inst_34868__$1 = tmp35092;
var inst_34870__$1 = inst_34886;
var state_35023__$1 = (function (){var statearr_35122 = state_35023;
(statearr_35122[(18)] = inst_34885);

(statearr_35122[(13)] = inst_34866__$1);

(statearr_35122[(14)] = inst_34870__$1);

(statearr_35122[(16)] = inst_34868__$1);

(statearr_35122[(17)] = inst_34867__$1);

return statearr_35122;
})();
var statearr_35123_37580 = state_35023__$1;
(statearr_35123_37580[(2)] = null);

(statearr_35123_37580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (21))){
var inst_34918 = (state_35023[(2)]);
var state_35023__$1 = state_35023;
var statearr_35127_37588 = state_35023__$1;
(statearr_35127_37588[(2)] = inst_34918);

(statearr_35127_37588[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (31))){
var inst_34944 = (state_35023[(10)]);
var inst_34948 = done(null);
var inst_34953 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34944);
var state_35023__$1 = (function (){var statearr_35128 = state_35023;
(statearr_35128[(19)] = inst_34948);

return statearr_35128;
})();
var statearr_35129_37595 = state_35023__$1;
(statearr_35129_37595[(2)] = inst_34953);

(statearr_35129_37595[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (32))){
var inst_34937 = (state_35023[(11)]);
var inst_34936 = (state_35023[(20)]);
var inst_34938 = (state_35023[(21)]);
var inst_34939 = (state_35023[(12)]);
var inst_34956 = (state_35023[(2)]);
var inst_34957 = (inst_34939 + (1));
var tmp35124 = inst_34937;
var tmp35125 = inst_34936;
var tmp35126 = inst_34938;
var inst_34936__$1 = tmp35125;
var inst_34937__$1 = tmp35124;
var inst_34938__$1 = tmp35126;
var inst_34939__$1 = inst_34957;
var state_35023__$1 = (function (){var statearr_35132 = state_35023;
(statearr_35132[(22)] = inst_34956);

(statearr_35132[(11)] = inst_34937__$1);

(statearr_35132[(20)] = inst_34936__$1);

(statearr_35132[(21)] = inst_34938__$1);

(statearr_35132[(12)] = inst_34939__$1);

return statearr_35132;
})();
var statearr_35135_37605 = state_35023__$1;
(statearr_35135_37605[(2)] = null);

(statearr_35135_37605[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (40))){
var inst_34970 = (state_35023[(23)]);
var inst_34974 = done(null);
var inst_34975 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34970);
var state_35023__$1 = (function (){var statearr_35159 = state_35023;
(statearr_35159[(24)] = inst_34974);

return statearr_35159;
})();
var statearr_35160_37609 = state_35023__$1;
(statearr_35160_37609[(2)] = inst_34975);

(statearr_35160_37609[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (33))){
var inst_34961 = (state_35023[(25)]);
var inst_34963 = cljs.core.chunked_seq_QMARK_(inst_34961);
var state_35023__$1 = state_35023;
if(inst_34963){
var statearr_35163_37612 = state_35023__$1;
(statearr_35163_37612[(1)] = (36));

} else {
var statearr_35166_37614 = state_35023__$1;
(statearr_35166_37614[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (13))){
var inst_34879 = (state_35023[(26)]);
var inst_34882 = cljs.core.async.close_BANG_(inst_34879);
var state_35023__$1 = state_35023;
var statearr_35167_37615 = state_35023__$1;
(statearr_35167_37615[(2)] = inst_34882);

(statearr_35167_37615[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (22))){
var inst_34905 = (state_35023[(8)]);
var inst_34911 = cljs.core.async.close_BANG_(inst_34905);
var state_35023__$1 = state_35023;
var statearr_35169_37616 = state_35023__$1;
(statearr_35169_37616[(2)] = inst_34911);

(statearr_35169_37616[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (36))){
var inst_34961 = (state_35023[(25)]);
var inst_34965 = cljs.core.chunk_first(inst_34961);
var inst_34966 = cljs.core.chunk_rest(inst_34961);
var inst_34967 = cljs.core.count(inst_34965);
var inst_34936 = inst_34966;
var inst_34937 = inst_34965;
var inst_34938 = inst_34967;
var inst_34939 = (0);
var state_35023__$1 = (function (){var statearr_35178 = state_35023;
(statearr_35178[(11)] = inst_34937);

(statearr_35178[(20)] = inst_34936);

(statearr_35178[(21)] = inst_34938);

(statearr_35178[(12)] = inst_34939);

return statearr_35178;
})();
var statearr_35182_37619 = state_35023__$1;
(statearr_35182_37619[(2)] = null);

(statearr_35182_37619[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (41))){
var inst_34961 = (state_35023[(25)]);
var inst_34977 = (state_35023[(2)]);
var inst_34978 = cljs.core.next(inst_34961);
var inst_34936 = inst_34978;
var inst_34937 = null;
var inst_34938 = (0);
var inst_34939 = (0);
var state_35023__$1 = (function (){var statearr_35198 = state_35023;
(statearr_35198[(11)] = inst_34937);

(statearr_35198[(27)] = inst_34977);

(statearr_35198[(20)] = inst_34936);

(statearr_35198[(21)] = inst_34938);

(statearr_35198[(12)] = inst_34939);

return statearr_35198;
})();
var statearr_35200_37622 = state_35023__$1;
(statearr_35200_37622[(2)] = null);

(statearr_35200_37622[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (43))){
var state_35023__$1 = state_35023;
var statearr_35207_37627 = state_35023__$1;
(statearr_35207_37627[(2)] = null);

(statearr_35207_37627[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (29))){
var inst_34986 = (state_35023[(2)]);
var state_35023__$1 = state_35023;
var statearr_35213_37628 = state_35023__$1;
(statearr_35213_37628[(2)] = inst_34986);

(statearr_35213_37628[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (44))){
var inst_34999 = (state_35023[(2)]);
var state_35023__$1 = (function (){var statearr_35217 = state_35023;
(statearr_35217[(28)] = inst_34999);

return statearr_35217;
})();
var statearr_35220_37632 = state_35023__$1;
(statearr_35220_37632[(2)] = null);

(statearr_35220_37632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (6))){
var inst_34928 = (state_35023[(29)]);
var inst_34927 = cljs.core.deref(cs);
var inst_34928__$1 = cljs.core.keys(inst_34927);
var inst_34929 = cljs.core.count(inst_34928__$1);
var inst_34930 = cljs.core.reset_BANG_(dctr,inst_34929);
var inst_34935 = cljs.core.seq(inst_34928__$1);
var inst_34936 = inst_34935;
var inst_34937 = null;
var inst_34938 = (0);
var inst_34939 = (0);
var state_35023__$1 = (function (){var statearr_35229 = state_35023;
(statearr_35229[(11)] = inst_34937);

(statearr_35229[(30)] = inst_34930);

(statearr_35229[(20)] = inst_34936);

(statearr_35229[(29)] = inst_34928__$1);

(statearr_35229[(21)] = inst_34938);

(statearr_35229[(12)] = inst_34939);

return statearr_35229;
})();
var statearr_35235_37635 = state_35023__$1;
(statearr_35235_37635[(2)] = null);

(statearr_35235_37635[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (28))){
var inst_34961 = (state_35023[(25)]);
var inst_34936 = (state_35023[(20)]);
var inst_34961__$1 = cljs.core.seq(inst_34936);
var state_35023__$1 = (function (){var statearr_35241 = state_35023;
(statearr_35241[(25)] = inst_34961__$1);

return statearr_35241;
})();
if(inst_34961__$1){
var statearr_35244_37636 = state_35023__$1;
(statearr_35244_37636[(1)] = (33));

} else {
var statearr_35246_37637 = state_35023__$1;
(statearr_35246_37637[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (25))){
var inst_34938 = (state_35023[(21)]);
var inst_34939 = (state_35023[(12)]);
var inst_34941 = (inst_34939 < inst_34938);
var inst_34942 = inst_34941;
var state_35023__$1 = state_35023;
if(cljs.core.truth_(inst_34942)){
var statearr_35253_37642 = state_35023__$1;
(statearr_35253_37642[(1)] = (27));

} else {
var statearr_35255_37644 = state_35023__$1;
(statearr_35255_37644[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (34))){
var state_35023__$1 = state_35023;
var statearr_35270_37649 = state_35023__$1;
(statearr_35270_37649[(2)] = null);

(statearr_35270_37649[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (17))){
var state_35023__$1 = state_35023;
var statearr_35275_37651 = state_35023__$1;
(statearr_35275_37651[(2)] = null);

(statearr_35275_37651[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (3))){
var inst_35004 = (state_35023[(2)]);
var state_35023__$1 = state_35023;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35023__$1,inst_35004);
} else {
if((state_val_35027 === (12))){
var inst_34923 = (state_35023[(2)]);
var state_35023__$1 = state_35023;
var statearr_35283_37655 = state_35023__$1;
(statearr_35283_37655[(2)] = inst_34923);

(statearr_35283_37655[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (2))){
var state_35023__$1 = state_35023;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35023__$1,(4),ch);
} else {
if((state_val_35027 === (23))){
var state_35023__$1 = state_35023;
var statearr_35294_37659 = state_35023__$1;
(statearr_35294_37659[(2)] = null);

(statearr_35294_37659[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (35))){
var inst_34984 = (state_35023[(2)]);
var state_35023__$1 = state_35023;
var statearr_35300_37661 = state_35023__$1;
(statearr_35300_37661[(2)] = inst_34984);

(statearr_35300_37661[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (19))){
var inst_34889 = (state_35023[(7)]);
var inst_34895 = cljs.core.chunk_first(inst_34889);
var inst_34896 = cljs.core.chunk_rest(inst_34889);
var inst_34897 = cljs.core.count(inst_34895);
var inst_34866 = inst_34896;
var inst_34867 = inst_34895;
var inst_34868 = inst_34897;
var inst_34870 = (0);
var state_35023__$1 = (function (){var statearr_35309 = state_35023;
(statearr_35309[(13)] = inst_34866);

(statearr_35309[(14)] = inst_34870);

(statearr_35309[(16)] = inst_34868);

(statearr_35309[(17)] = inst_34867);

return statearr_35309;
})();
var statearr_35311_37671 = state_35023__$1;
(statearr_35311_37671[(2)] = null);

(statearr_35311_37671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (11))){
var inst_34866 = (state_35023[(13)]);
var inst_34889 = (state_35023[(7)]);
var inst_34889__$1 = cljs.core.seq(inst_34866);
var state_35023__$1 = (function (){var statearr_35323 = state_35023;
(statearr_35323[(7)] = inst_34889__$1);

return statearr_35323;
})();
if(inst_34889__$1){
var statearr_35327_37675 = state_35023__$1;
(statearr_35327_37675[(1)] = (16));

} else {
var statearr_35330_37676 = state_35023__$1;
(statearr_35330_37676[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (9))){
var inst_34925 = (state_35023[(2)]);
var state_35023__$1 = state_35023;
var statearr_35332_37679 = state_35023__$1;
(statearr_35332_37679[(2)] = inst_34925);

(statearr_35332_37679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (5))){
var inst_34864 = cljs.core.deref(cs);
var inst_34865 = cljs.core.seq(inst_34864);
var inst_34866 = inst_34865;
var inst_34867 = null;
var inst_34868 = (0);
var inst_34870 = (0);
var state_35023__$1 = (function (){var statearr_35333 = state_35023;
(statearr_35333[(13)] = inst_34866);

(statearr_35333[(14)] = inst_34870);

(statearr_35333[(16)] = inst_34868);

(statearr_35333[(17)] = inst_34867);

return statearr_35333;
})();
var statearr_35334_37686 = state_35023__$1;
(statearr_35334_37686[(2)] = null);

(statearr_35334_37686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (14))){
var state_35023__$1 = state_35023;
var statearr_35335_37692 = state_35023__$1;
(statearr_35335_37692[(2)] = null);

(statearr_35335_37692[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (45))){
var inst_34996 = (state_35023[(2)]);
var state_35023__$1 = state_35023;
var statearr_35336_37695 = state_35023__$1;
(statearr_35336_37695[(2)] = inst_34996);

(statearr_35336_37695[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (26))){
var inst_34928 = (state_35023[(29)]);
var inst_34988 = (state_35023[(2)]);
var inst_34993 = cljs.core.seq(inst_34928);
var state_35023__$1 = (function (){var statearr_35337 = state_35023;
(statearr_35337[(31)] = inst_34988);

return statearr_35337;
})();
if(inst_34993){
var statearr_35340_37697 = state_35023__$1;
(statearr_35340_37697[(1)] = (42));

} else {
var statearr_35341_37700 = state_35023__$1;
(statearr_35341_37700[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (16))){
var inst_34889 = (state_35023[(7)]);
var inst_34891 = cljs.core.chunked_seq_QMARK_(inst_34889);
var state_35023__$1 = state_35023;
if(inst_34891){
var statearr_35342_37707 = state_35023__$1;
(statearr_35342_37707[(1)] = (19));

} else {
var statearr_35343_37708 = state_35023__$1;
(statearr_35343_37708[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (38))){
var inst_34981 = (state_35023[(2)]);
var state_35023__$1 = state_35023;
var statearr_35344_37711 = state_35023__$1;
(statearr_35344_37711[(2)] = inst_34981);

(statearr_35344_37711[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (30))){
var state_35023__$1 = state_35023;
var statearr_35345_37712 = state_35023__$1;
(statearr_35345_37712[(2)] = null);

(statearr_35345_37712[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (10))){
var inst_34870 = (state_35023[(14)]);
var inst_34867 = (state_35023[(17)]);
var inst_34878 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34867,inst_34870);
var inst_34879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34878,(0),null);
var inst_34880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34878,(1),null);
var state_35023__$1 = (function (){var statearr_35351 = state_35023;
(statearr_35351[(26)] = inst_34879);

return statearr_35351;
})();
if(cljs.core.truth_(inst_34880)){
var statearr_35354_37719 = state_35023__$1;
(statearr_35354_37719[(1)] = (13));

} else {
var statearr_35355_37723 = state_35023__$1;
(statearr_35355_37723[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (18))){
var inst_34921 = (state_35023[(2)]);
var state_35023__$1 = state_35023;
var statearr_35358_37724 = state_35023__$1;
(statearr_35358_37724[(2)] = inst_34921);

(statearr_35358_37724[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (42))){
var state_35023__$1 = state_35023;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35023__$1,(45),dchan);
} else {
if((state_val_35027 === (37))){
var inst_34856 = (state_35023[(9)]);
var inst_34961 = (state_35023[(25)]);
var inst_34970 = (state_35023[(23)]);
var inst_34970__$1 = cljs.core.first(inst_34961);
var inst_34971 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34970__$1,inst_34856,done);
var state_35023__$1 = (function (){var statearr_35361 = state_35023;
(statearr_35361[(23)] = inst_34970__$1);

return statearr_35361;
})();
if(cljs.core.truth_(inst_34971)){
var statearr_35363_37728 = state_35023__$1;
(statearr_35363_37728[(1)] = (39));

} else {
var statearr_35365_37730 = state_35023__$1;
(statearr_35365_37730[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (8))){
var inst_34870 = (state_35023[(14)]);
var inst_34868 = (state_35023[(16)]);
var inst_34872 = (inst_34870 < inst_34868);
var inst_34873 = inst_34872;
var state_35023__$1 = state_35023;
if(cljs.core.truth_(inst_34873)){
var statearr_35374_37737 = state_35023__$1;
(statearr_35374_37737[(1)] = (10));

} else {
var statearr_35376_37738 = state_35023__$1;
(statearr_35376_37738[(1)] = (11));

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
var statearr_35383 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35383[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35383[(1)] = (1));

return statearr_35383;
});
var cljs$core$async$mult_$_state_machine__34207__auto____1 = (function (state_35023){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35023);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35384){if((e35384 instanceof Object)){
var ex__34210__auto__ = e35384;
var statearr_35386_37749 = state_35023;
(statearr_35386_37749[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35384;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37750 = state_35023;
state_35023 = G__37750;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34207__auto__ = function(state_35023){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34207__auto____1.call(this,state_35023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34207__auto____0;
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34207__auto____1;
return cljs$core$async$mult_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_35390 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_35390[(6)] = c__34273__auto___37520);

return statearr_35390;
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
var G__35399 = arguments.length;
switch (G__35399) {
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
var len__4789__auto___37793 = arguments.length;
var i__4790__auto___37794 = (0);
while(true){
if((i__4790__auto___37794 < len__4789__auto___37793)){
args__4795__auto__.push((arguments[i__4790__auto___37794]));

var G__37798 = (i__4790__auto___37794 + (1));
i__4790__auto___37794 = G__37798;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35531){
var map__35532 = p__35531;
var map__35532__$1 = (((((!((map__35532 == null))))?(((((map__35532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35532):map__35532);
var opts = map__35532__$1;
var statearr_35543_37804 = state;
(statearr_35543_37804[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35550_37808 = state;
(statearr_35550_37808[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35556_37809 = state;
(statearr_35556_37809[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35506){
var G__35507 = cljs.core.first(seq35506);
var seq35506__$1 = cljs.core.next(seq35506);
var G__35508 = cljs.core.first(seq35506__$1);
var seq35506__$2 = cljs.core.next(seq35506__$1);
var G__35509 = cljs.core.first(seq35506__$2);
var seq35506__$3 = cljs.core.next(seq35506__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35507,G__35508,G__35509,seq35506__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35571 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35571 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35572){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35572 = meta35572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35573,meta35572__$1){
var self__ = this;
var _35573__$1 = this;
return (new cljs.core.async.t_cljs$core$async35571(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35572__$1));
}));

(cljs.core.async.t_cljs$core$async35571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35573){
var self__ = this;
var _35573__$1 = this;
return self__.meta35572;
}));

(cljs.core.async.t_cljs$core$async35571.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35571.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35571.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35571.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35571.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35571.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35571.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35571.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35571.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35572","meta35572",139752229,null)], null);
}));

(cljs.core.async.t_cljs$core$async35571.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35571.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35571");

(cljs.core.async.t_cljs$core$async35571.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35571");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35571.
 */
cljs.core.async.__GT_t_cljs$core$async35571 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35571(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35572){
return (new cljs.core.async.t_cljs$core$async35571(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35572));
});

}

return (new cljs.core.async.t_cljs$core$async35571(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34273__auto___37850 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_35700){
var state_val_35701 = (state_35700[(1)]);
if((state_val_35701 === (7))){
var inst_35610 = (state_35700[(2)]);
var state_35700__$1 = state_35700;
var statearr_35708_37855 = state_35700__$1;
(statearr_35708_37855[(2)] = inst_35610);

(statearr_35708_37855[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (20))){
var inst_35622 = (state_35700[(7)]);
var state_35700__$1 = state_35700;
var statearr_35711_37856 = state_35700__$1;
(statearr_35711_37856[(2)] = inst_35622);

(statearr_35711_37856[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (27))){
var state_35700__$1 = state_35700;
var statearr_35713_37857 = state_35700__$1;
(statearr_35713_37857[(2)] = null);

(statearr_35713_37857[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (1))){
var inst_35596 = (state_35700[(8)]);
var inst_35596__$1 = calc_state();
var inst_35598 = (inst_35596__$1 == null);
var inst_35599 = cljs.core.not(inst_35598);
var state_35700__$1 = (function (){var statearr_35720 = state_35700;
(statearr_35720[(8)] = inst_35596__$1);

return statearr_35720;
})();
if(inst_35599){
var statearr_35723_37863 = state_35700__$1;
(statearr_35723_37863[(1)] = (2));

} else {
var statearr_35728_37864 = state_35700__$1;
(statearr_35728_37864[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (24))){
var inst_35673 = (state_35700[(9)]);
var inst_35647 = (state_35700[(10)]);
var inst_35656 = (state_35700[(11)]);
var inst_35673__$1 = (inst_35647.cljs$core$IFn$_invoke$arity$1 ? inst_35647.cljs$core$IFn$_invoke$arity$1(inst_35656) : inst_35647.call(null,inst_35656));
var state_35700__$1 = (function (){var statearr_35734 = state_35700;
(statearr_35734[(9)] = inst_35673__$1);

return statearr_35734;
})();
if(cljs.core.truth_(inst_35673__$1)){
var statearr_35737_37866 = state_35700__$1;
(statearr_35737_37866[(1)] = (29));

} else {
var statearr_35738_37867 = state_35700__$1;
(statearr_35738_37867[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (4))){
var inst_35613 = (state_35700[(2)]);
var state_35700__$1 = state_35700;
if(cljs.core.truth_(inst_35613)){
var statearr_35741_37872 = state_35700__$1;
(statearr_35741_37872[(1)] = (8));

} else {
var statearr_35742_37873 = state_35700__$1;
(statearr_35742_37873[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (15))){
var inst_35641 = (state_35700[(2)]);
var state_35700__$1 = state_35700;
if(cljs.core.truth_(inst_35641)){
var statearr_35745_37876 = state_35700__$1;
(statearr_35745_37876[(1)] = (19));

} else {
var statearr_35746_37877 = state_35700__$1;
(statearr_35746_37877[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (21))){
var inst_35646 = (state_35700[(12)]);
var inst_35646__$1 = (state_35700[(2)]);
var inst_35647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35646__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35646__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35649 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35646__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35700__$1 = (function (){var statearr_35747 = state_35700;
(statearr_35747[(12)] = inst_35646__$1);

(statearr_35747[(10)] = inst_35647);

(statearr_35747[(13)] = inst_35648);

return statearr_35747;
})();
return cljs.core.async.ioc_alts_BANG_(state_35700__$1,(22),inst_35649);
} else {
if((state_val_35701 === (31))){
var inst_35681 = (state_35700[(2)]);
var state_35700__$1 = state_35700;
if(cljs.core.truth_(inst_35681)){
var statearr_35749_37880 = state_35700__$1;
(statearr_35749_37880[(1)] = (32));

} else {
var statearr_35750_37881 = state_35700__$1;
(statearr_35750_37881[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (32))){
var inst_35655 = (state_35700[(14)]);
var state_35700__$1 = state_35700;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35700__$1,(35),out,inst_35655);
} else {
if((state_val_35701 === (33))){
var inst_35646 = (state_35700[(12)]);
var inst_35622 = inst_35646;
var state_35700__$1 = (function (){var statearr_35753 = state_35700;
(statearr_35753[(7)] = inst_35622);

return statearr_35753;
})();
var statearr_35755_37886 = state_35700__$1;
(statearr_35755_37886[(2)] = null);

(statearr_35755_37886[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (13))){
var inst_35622 = (state_35700[(7)]);
var inst_35630 = inst_35622.cljs$lang$protocol_mask$partition0$;
var inst_35631 = (inst_35630 & (64));
var inst_35632 = inst_35622.cljs$core$ISeq$;
var inst_35633 = (cljs.core.PROTOCOL_SENTINEL === inst_35632);
var inst_35634 = ((inst_35631) || (inst_35633));
var state_35700__$1 = state_35700;
if(cljs.core.truth_(inst_35634)){
var statearr_35757_37887 = state_35700__$1;
(statearr_35757_37887[(1)] = (16));

} else {
var statearr_35758_37888 = state_35700__$1;
(statearr_35758_37888[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (22))){
var inst_35655 = (state_35700[(14)]);
var inst_35656 = (state_35700[(11)]);
var inst_35654 = (state_35700[(2)]);
var inst_35655__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35654,(0),null);
var inst_35656__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35654,(1),null);
var inst_35658 = (inst_35655__$1 == null);
var inst_35659 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35656__$1,change);
var inst_35660 = ((inst_35658) || (inst_35659));
var state_35700__$1 = (function (){var statearr_35762 = state_35700;
(statearr_35762[(14)] = inst_35655__$1);

(statearr_35762[(11)] = inst_35656__$1);

return statearr_35762;
})();
if(cljs.core.truth_(inst_35660)){
var statearr_35763_37892 = state_35700__$1;
(statearr_35763_37892[(1)] = (23));

} else {
var statearr_35764_37893 = state_35700__$1;
(statearr_35764_37893[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (36))){
var inst_35646 = (state_35700[(12)]);
var inst_35622 = inst_35646;
var state_35700__$1 = (function (){var statearr_35765 = state_35700;
(statearr_35765[(7)] = inst_35622);

return statearr_35765;
})();
var statearr_35767_37898 = state_35700__$1;
(statearr_35767_37898[(2)] = null);

(statearr_35767_37898[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (29))){
var inst_35673 = (state_35700[(9)]);
var state_35700__$1 = state_35700;
var statearr_35768_37899 = state_35700__$1;
(statearr_35768_37899[(2)] = inst_35673);

(statearr_35768_37899[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (6))){
var state_35700__$1 = state_35700;
var statearr_35769_37900 = state_35700__$1;
(statearr_35769_37900[(2)] = false);

(statearr_35769_37900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (28))){
var inst_35668 = (state_35700[(2)]);
var inst_35669 = calc_state();
var inst_35622 = inst_35669;
var state_35700__$1 = (function (){var statearr_35771 = state_35700;
(statearr_35771[(15)] = inst_35668);

(statearr_35771[(7)] = inst_35622);

return statearr_35771;
})();
var statearr_35776_37901 = state_35700__$1;
(statearr_35776_37901[(2)] = null);

(statearr_35776_37901[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (25))){
var inst_35695 = (state_35700[(2)]);
var state_35700__$1 = state_35700;
var statearr_35781_37902 = state_35700__$1;
(statearr_35781_37902[(2)] = inst_35695);

(statearr_35781_37902[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (34))){
var inst_35693 = (state_35700[(2)]);
var state_35700__$1 = state_35700;
var statearr_35782_37904 = state_35700__$1;
(statearr_35782_37904[(2)] = inst_35693);

(statearr_35782_37904[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (17))){
var state_35700__$1 = state_35700;
var statearr_35788_37905 = state_35700__$1;
(statearr_35788_37905[(2)] = false);

(statearr_35788_37905[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (3))){
var state_35700__$1 = state_35700;
var statearr_35791_37906 = state_35700__$1;
(statearr_35791_37906[(2)] = false);

(statearr_35791_37906[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (12))){
var inst_35697 = (state_35700[(2)]);
var state_35700__$1 = state_35700;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35700__$1,inst_35697);
} else {
if((state_val_35701 === (2))){
var inst_35596 = (state_35700[(8)]);
var inst_35601 = inst_35596.cljs$lang$protocol_mask$partition0$;
var inst_35602 = (inst_35601 & (64));
var inst_35603 = inst_35596.cljs$core$ISeq$;
var inst_35604 = (cljs.core.PROTOCOL_SENTINEL === inst_35603);
var inst_35605 = ((inst_35602) || (inst_35604));
var state_35700__$1 = state_35700;
if(cljs.core.truth_(inst_35605)){
var statearr_35794_37911 = state_35700__$1;
(statearr_35794_37911[(1)] = (5));

} else {
var statearr_35795_37912 = state_35700__$1;
(statearr_35795_37912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (23))){
var inst_35655 = (state_35700[(14)]);
var inst_35662 = (inst_35655 == null);
var state_35700__$1 = state_35700;
if(cljs.core.truth_(inst_35662)){
var statearr_35799_37913 = state_35700__$1;
(statearr_35799_37913[(1)] = (26));

} else {
var statearr_35800_37914 = state_35700__$1;
(statearr_35800_37914[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (35))){
var inst_35684 = (state_35700[(2)]);
var state_35700__$1 = state_35700;
if(cljs.core.truth_(inst_35684)){
var statearr_35802_37915 = state_35700__$1;
(statearr_35802_37915[(1)] = (36));

} else {
var statearr_35804_37916 = state_35700__$1;
(statearr_35804_37916[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (19))){
var inst_35622 = (state_35700[(7)]);
var inst_35643 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35622);
var state_35700__$1 = state_35700;
var statearr_35807_37917 = state_35700__$1;
(statearr_35807_37917[(2)] = inst_35643);

(statearr_35807_37917[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (11))){
var inst_35622 = (state_35700[(7)]);
var inst_35626 = (inst_35622 == null);
var inst_35627 = cljs.core.not(inst_35626);
var state_35700__$1 = state_35700;
if(inst_35627){
var statearr_35808_37922 = state_35700__$1;
(statearr_35808_37922[(1)] = (13));

} else {
var statearr_35811_37923 = state_35700__$1;
(statearr_35811_37923[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (9))){
var inst_35596 = (state_35700[(8)]);
var state_35700__$1 = state_35700;
var statearr_35813_37924 = state_35700__$1;
(statearr_35813_37924[(2)] = inst_35596);

(statearr_35813_37924[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (5))){
var state_35700__$1 = state_35700;
var statearr_35815_37926 = state_35700__$1;
(statearr_35815_37926[(2)] = true);

(statearr_35815_37926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (14))){
var state_35700__$1 = state_35700;
var statearr_35817_37929 = state_35700__$1;
(statearr_35817_37929[(2)] = false);

(statearr_35817_37929[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (26))){
var inst_35656 = (state_35700[(11)]);
var inst_35665 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35656);
var state_35700__$1 = state_35700;
var statearr_35822_37930 = state_35700__$1;
(statearr_35822_37930[(2)] = inst_35665);

(statearr_35822_37930[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (16))){
var state_35700__$1 = state_35700;
var statearr_35823_37931 = state_35700__$1;
(statearr_35823_37931[(2)] = true);

(statearr_35823_37931[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (38))){
var inst_35689 = (state_35700[(2)]);
var state_35700__$1 = state_35700;
var statearr_35827_37932 = state_35700__$1;
(statearr_35827_37932[(2)] = inst_35689);

(statearr_35827_37932[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (30))){
var inst_35647 = (state_35700[(10)]);
var inst_35648 = (state_35700[(13)]);
var inst_35656 = (state_35700[(11)]);
var inst_35676 = cljs.core.empty_QMARK_(inst_35647);
var inst_35677 = (inst_35648.cljs$core$IFn$_invoke$arity$1 ? inst_35648.cljs$core$IFn$_invoke$arity$1(inst_35656) : inst_35648.call(null,inst_35656));
var inst_35678 = cljs.core.not(inst_35677);
var inst_35679 = ((inst_35676) && (inst_35678));
var state_35700__$1 = state_35700;
var statearr_35832_37936 = state_35700__$1;
(statearr_35832_37936[(2)] = inst_35679);

(statearr_35832_37936[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (10))){
var inst_35596 = (state_35700[(8)]);
var inst_35618 = (state_35700[(2)]);
var inst_35619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35618,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35618,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35618,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35622 = inst_35596;
var state_35700__$1 = (function (){var statearr_35833 = state_35700;
(statearr_35833[(16)] = inst_35621);

(statearr_35833[(17)] = inst_35620);

(statearr_35833[(18)] = inst_35619);

(statearr_35833[(7)] = inst_35622);

return statearr_35833;
})();
var statearr_35837_37941 = state_35700__$1;
(statearr_35837_37941[(2)] = null);

(statearr_35837_37941[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (18))){
var inst_35638 = (state_35700[(2)]);
var state_35700__$1 = state_35700;
var statearr_35838_37942 = state_35700__$1;
(statearr_35838_37942[(2)] = inst_35638);

(statearr_35838_37942[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (37))){
var state_35700__$1 = state_35700;
var statearr_35839_37943 = state_35700__$1;
(statearr_35839_37943[(2)] = null);

(statearr_35839_37943[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35701 === (8))){
var inst_35596 = (state_35700[(8)]);
var inst_35615 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35596);
var state_35700__$1 = state_35700;
var statearr_35843_37945 = state_35700__$1;
(statearr_35843_37945[(2)] = inst_35615);

(statearr_35843_37945[(1)] = (10));


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
var statearr_35848 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35848[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35848[(1)] = (1));

return statearr_35848;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35700){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35700);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35849){if((e35849 instanceof Object)){
var ex__34210__auto__ = e35849;
var statearr_35852_37950 = state_35700;
(statearr_35852_37950[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35849;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37951 = state_35700;
state_35700 = G__37951;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35700){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_35855 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_35855[(6)] = c__34273__auto___37850);

return statearr_35855;
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
var G__35883 = arguments.length;
switch (G__35883) {
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
var G__35895 = arguments.length;
switch (G__35895) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35890_SHARP_){
if(cljs.core.truth_((p1__35890_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35890_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35890_SHARP_.call(null,topic)))){
return p1__35890_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35890_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35907 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35907 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35908){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35908 = meta35908;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35909,meta35908__$1){
var self__ = this;
var _35909__$1 = this;
return (new cljs.core.async.t_cljs$core$async35907(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35908__$1));
}));

(cljs.core.async.t_cljs$core$async35907.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35909){
var self__ = this;
var _35909__$1 = this;
return self__.meta35908;
}));

(cljs.core.async.t_cljs$core$async35907.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35907.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35907.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35907.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35907.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35907.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35907.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35907.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35908","meta35908",1615695956,null)], null);
}));

(cljs.core.async.t_cljs$core$async35907.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35907.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35907");

(cljs.core.async.t_cljs$core$async35907.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35907");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35907.
 */
cljs.core.async.__GT_t_cljs$core$async35907 = (function cljs$core$async$__GT_t_cljs$core$async35907(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35908){
return (new cljs.core.async.t_cljs$core$async35907(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35908));
});

}

return (new cljs.core.async.t_cljs$core$async35907(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34273__auto___37977 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36004){
var state_val_36005 = (state_36004[(1)]);
if((state_val_36005 === (7))){
var inst_35999 = (state_36004[(2)]);
var state_36004__$1 = state_36004;
var statearr_36014_37978 = state_36004__$1;
(statearr_36014_37978[(2)] = inst_35999);

(statearr_36014_37978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36005 === (20))){
var state_36004__$1 = state_36004;
var statearr_36015_37980 = state_36004__$1;
(statearr_36015_37980[(2)] = null);

(statearr_36015_37980[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36005 === (1))){
var state_36004__$1 = state_36004;
var statearr_36017_37982 = state_36004__$1;
(statearr_36017_37982[(2)] = null);

(statearr_36017_37982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36005 === (24))){
var inst_35982 = (state_36004[(7)]);
var inst_35991 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35982);
var state_36004__$1 = state_36004;
var statearr_36018_37984 = state_36004__$1;
(statearr_36018_37984[(2)] = inst_35991);

(statearr_36018_37984[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36005 === (4))){
var inst_35934 = (state_36004[(8)]);
var inst_35934__$1 = (state_36004[(2)]);
var inst_35935 = (inst_35934__$1 == null);
var state_36004__$1 = (function (){var statearr_36020 = state_36004;
(statearr_36020[(8)] = inst_35934__$1);

return statearr_36020;
})();
if(cljs.core.truth_(inst_35935)){
var statearr_36021_37985 = state_36004__$1;
(statearr_36021_37985[(1)] = (5));

} else {
var statearr_36022_37987 = state_36004__$1;
(statearr_36022_37987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36005 === (15))){
var inst_35976 = (state_36004[(2)]);
var state_36004__$1 = state_36004;
var statearr_36025_37990 = state_36004__$1;
(statearr_36025_37990[(2)] = inst_35976);

(statearr_36025_37990[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36005 === (21))){
var inst_35996 = (state_36004[(2)]);
var state_36004__$1 = (function (){var statearr_36028 = state_36004;
(statearr_36028[(9)] = inst_35996);

return statearr_36028;
})();
var statearr_36031_37991 = state_36004__$1;
(statearr_36031_37991[(2)] = null);

(statearr_36031_37991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36005 === (13))){
var inst_35958 = (state_36004[(10)]);
var inst_35960 = cljs.core.chunked_seq_QMARK_(inst_35958);
var state_36004__$1 = state_36004;
if(inst_35960){
var statearr_36033_37992 = state_36004__$1;
(statearr_36033_37992[(1)] = (16));

} else {
var statearr_36034_37993 = state_36004__$1;
(statearr_36034_37993[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36005 === (22))){
var inst_35988 = (state_36004[(2)]);
var state_36004__$1 = state_36004;
if(cljs.core.truth_(inst_35988)){
var statearr_36035_37996 = state_36004__$1;
(statearr_36035_37996[(1)] = (23));

} else {
var statearr_36036_37997 = state_36004__$1;
(statearr_36036_37997[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36005 === (6))){
var inst_35984 = (state_36004[(11)]);
var inst_35934 = (state_36004[(8)]);
var inst_35982 = (state_36004[(7)]);
var inst_35982__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35934) : topic_fn.call(null,inst_35934));
var inst_35983 = cljs.core.deref(mults);
var inst_35984__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35983,inst_35982__$1);
var state_36004__$1 = (function (){var statearr_36040 = state_36004;
(statearr_36040[(11)] = inst_35984__$1);

(statearr_36040[(7)] = inst_35982__$1);

return statearr_36040;
})();
if(cljs.core.truth_(inst_35984__$1)){
var statearr_36043_37999 = state_36004__$1;
(statearr_36043_37999[(1)] = (19));

} else {
var statearr_36044_38000 = state_36004__$1;
(statearr_36044_38000[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36005 === (25))){
var inst_35993 = (state_36004[(2)]);
var state_36004__$1 = state_36004;
var statearr_36045_38003 = state_36004__$1;
(statearr_36045_38003[(2)] = inst_35993);

(statearr_36045_38003[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36005 === (17))){
var inst_35958 = (state_36004[(10)]);
var inst_35967 = cljs.core.first(inst_35958);
var inst_35968 = cljs.core.async.muxch_STAR_(inst_35967);
var inst_35969 = cljs.core.async.close_BANG_(inst_35968);
var inst_35970 = cljs.core.next(inst_35958);
var inst_35944 = inst_35970;
var inst_35945 = null;
var inst_35946 = (0);
var inst_35947 = (0);
var state_36004__$1 = (function (){var statearr_36046 = state_36004;
(statearr_36046[(12)] = inst_35944);

(statearr_36046[(13)] = inst_35947);

(statearr_36046[(14)] = inst_35969);

(statearr_36046[(15)] = inst_35945);

(statearr_36046[(16)] = inst_35946);

return statearr_36046;
})();
var statearr_36047_38005 = state_36004__$1;
(statearr_36047_38005[(2)] = null);

(statearr_36047_38005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36005 === (3))){
var inst_36001 = (state_36004[(2)]);
var state_36004__$1 = state_36004;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36004__$1,inst_36001);
} else {
if((state_val_36005 === (12))){
var inst_35978 = (state_36004[(2)]);
var state_36004__$1 = state_36004;
var statearr_36048_38009 = state_36004__$1;
(statearr_36048_38009[(2)] = inst_35978);

(statearr_36048_38009[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36005 === (2))){
var state_36004__$1 = state_36004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36004__$1,(4),ch);
} else {
if((state_val_36005 === (23))){
var state_36004__$1 = state_36004;
var statearr_36049_38010 = state_36004__$1;
(statearr_36049_38010[(2)] = null);

(statearr_36049_38010[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36005 === (19))){
var inst_35984 = (state_36004[(11)]);
var inst_35934 = (state_36004[(8)]);
var inst_35986 = cljs.core.async.muxch_STAR_(inst_35984);
var state_36004__$1 = state_36004;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36004__$1,(22),inst_35986,inst_35934);
} else {
if((state_val_36005 === (11))){
var inst_35944 = (state_36004[(12)]);
var inst_35958 = (state_36004[(10)]);
var inst_35958__$1 = cljs.core.seq(inst_35944);
var state_36004__$1 = (function (){var statearr_36050 = state_36004;
(statearr_36050[(10)] = inst_35958__$1);

return statearr_36050;
})();
if(inst_35958__$1){
var statearr_36055_38014 = state_36004__$1;
(statearr_36055_38014[(1)] = (13));

} else {
var statearr_36056_38015 = state_36004__$1;
(statearr_36056_38015[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36005 === (9))){
var inst_35980 = (state_36004[(2)]);
var state_36004__$1 = state_36004;
var statearr_36057_38016 = state_36004__$1;
(statearr_36057_38016[(2)] = inst_35980);

(statearr_36057_38016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36005 === (5))){
var inst_35941 = cljs.core.deref(mults);
var inst_35942 = cljs.core.vals(inst_35941);
var inst_35943 = cljs.core.seq(inst_35942);
var inst_35944 = inst_35943;
var inst_35945 = null;
var inst_35946 = (0);
var inst_35947 = (0);
var state_36004__$1 = (function (){var statearr_36061 = state_36004;
(statearr_36061[(12)] = inst_35944);

(statearr_36061[(13)] = inst_35947);

(statearr_36061[(15)] = inst_35945);

(statearr_36061[(16)] = inst_35946);

return statearr_36061;
})();
var statearr_36062_38019 = state_36004__$1;
(statearr_36062_38019[(2)] = null);

(statearr_36062_38019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36005 === (14))){
var state_36004__$1 = state_36004;
var statearr_36066_38021 = state_36004__$1;
(statearr_36066_38021[(2)] = null);

(statearr_36066_38021[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36005 === (16))){
var inst_35958 = (state_36004[(10)]);
var inst_35962 = cljs.core.chunk_first(inst_35958);
var inst_35963 = cljs.core.chunk_rest(inst_35958);
var inst_35964 = cljs.core.count(inst_35962);
var inst_35944 = inst_35963;
var inst_35945 = inst_35962;
var inst_35946 = inst_35964;
var inst_35947 = (0);
var state_36004__$1 = (function (){var statearr_36069 = state_36004;
(statearr_36069[(12)] = inst_35944);

(statearr_36069[(13)] = inst_35947);

(statearr_36069[(15)] = inst_35945);

(statearr_36069[(16)] = inst_35946);

return statearr_36069;
})();
var statearr_36071_38023 = state_36004__$1;
(statearr_36071_38023[(2)] = null);

(statearr_36071_38023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36005 === (10))){
var inst_35944 = (state_36004[(12)]);
var inst_35947 = (state_36004[(13)]);
var inst_35945 = (state_36004[(15)]);
var inst_35946 = (state_36004[(16)]);
var inst_35952 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35945,inst_35947);
var inst_35953 = cljs.core.async.muxch_STAR_(inst_35952);
var inst_35954 = cljs.core.async.close_BANG_(inst_35953);
var inst_35955 = (inst_35947 + (1));
var tmp36063 = inst_35944;
var tmp36064 = inst_35945;
var tmp36065 = inst_35946;
var inst_35944__$1 = tmp36063;
var inst_35945__$1 = tmp36064;
var inst_35946__$1 = tmp36065;
var inst_35947__$1 = inst_35955;
var state_36004__$1 = (function (){var statearr_36074 = state_36004;
(statearr_36074[(12)] = inst_35944__$1);

(statearr_36074[(13)] = inst_35947__$1);

(statearr_36074[(17)] = inst_35954);

(statearr_36074[(15)] = inst_35945__$1);

(statearr_36074[(16)] = inst_35946__$1);

return statearr_36074;
})();
var statearr_36076_38027 = state_36004__$1;
(statearr_36076_38027[(2)] = null);

(statearr_36076_38027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36005 === (18))){
var inst_35973 = (state_36004[(2)]);
var state_36004__$1 = state_36004;
var statearr_36078_38030 = state_36004__$1;
(statearr_36078_38030[(2)] = inst_35973);

(statearr_36078_38030[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36005 === (8))){
var inst_35947 = (state_36004[(13)]);
var inst_35946 = (state_36004[(16)]);
var inst_35949 = (inst_35947 < inst_35946);
var inst_35950 = inst_35949;
var state_36004__$1 = state_36004;
if(cljs.core.truth_(inst_35950)){
var statearr_36079_38031 = state_36004__$1;
(statearr_36079_38031[(1)] = (10));

} else {
var statearr_36080_38032 = state_36004__$1;
(statearr_36080_38032[(1)] = (11));

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
var statearr_36083 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36083[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36083[(1)] = (1));

return statearr_36083;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36004){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36004);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36084){if((e36084 instanceof Object)){
var ex__34210__auto__ = e36084;
var statearr_36085_38036 = state_36004;
(statearr_36085_38036[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36084;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38037 = state_36004;
state_36004 = G__38037;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36004){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36086 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36086[(6)] = c__34273__auto___37977);

return statearr_36086;
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
var G__36093 = arguments.length;
switch (G__36093) {
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
var G__36111 = arguments.length;
switch (G__36111) {
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
var G__36118 = arguments.length;
switch (G__36118) {
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
var c__34273__auto___38050 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36174){
var state_val_36175 = (state_36174[(1)]);
if((state_val_36175 === (7))){
var state_36174__$1 = state_36174;
var statearr_36179_38051 = state_36174__$1;
(statearr_36179_38051[(2)] = null);

(statearr_36179_38051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36175 === (1))){
var state_36174__$1 = state_36174;
var statearr_36181_38054 = state_36174__$1;
(statearr_36181_38054[(2)] = null);

(statearr_36181_38054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36175 === (4))){
var inst_36125 = (state_36174[(7)]);
var inst_36127 = (inst_36125 < cnt);
var state_36174__$1 = state_36174;
if(cljs.core.truth_(inst_36127)){
var statearr_36182_38056 = state_36174__$1;
(statearr_36182_38056[(1)] = (6));

} else {
var statearr_36184_38057 = state_36174__$1;
(statearr_36184_38057[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36175 === (15))){
var inst_36169 = (state_36174[(2)]);
var state_36174__$1 = state_36174;
var statearr_36186_38058 = state_36174__$1;
(statearr_36186_38058[(2)] = inst_36169);

(statearr_36186_38058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36175 === (13))){
var inst_36161 = cljs.core.async.close_BANG_(out);
var state_36174__$1 = state_36174;
var statearr_36187_38059 = state_36174__$1;
(statearr_36187_38059[(2)] = inst_36161);

(statearr_36187_38059[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36175 === (6))){
var state_36174__$1 = state_36174;
var statearr_36188_38061 = state_36174__$1;
(statearr_36188_38061[(2)] = null);

(statearr_36188_38061[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36175 === (3))){
var inst_36171 = (state_36174[(2)]);
var state_36174__$1 = state_36174;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36174__$1,inst_36171);
} else {
if((state_val_36175 === (12))){
var inst_36151 = (state_36174[(8)]);
var inst_36151__$1 = (state_36174[(2)]);
var inst_36152 = cljs.core.some(cljs.core.nil_QMARK_,inst_36151__$1);
var state_36174__$1 = (function (){var statearr_36195 = state_36174;
(statearr_36195[(8)] = inst_36151__$1);

return statearr_36195;
})();
if(cljs.core.truth_(inst_36152)){
var statearr_36196_38064 = state_36174__$1;
(statearr_36196_38064[(1)] = (13));

} else {
var statearr_36197_38065 = state_36174__$1;
(statearr_36197_38065[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36175 === (2))){
var inst_36124 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36125 = (0);
var state_36174__$1 = (function (){var statearr_36198 = state_36174;
(statearr_36198[(9)] = inst_36124);

(statearr_36198[(7)] = inst_36125);

return statearr_36198;
})();
var statearr_36199_38066 = state_36174__$1;
(statearr_36199_38066[(2)] = null);

(statearr_36199_38066[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36175 === (11))){
var inst_36125 = (state_36174[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36174,(10),Object,null,(9));
var inst_36138 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36125) : chs__$1.call(null,inst_36125));
var inst_36139 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36125) : done.call(null,inst_36125));
var inst_36140 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36138,inst_36139);
var state_36174__$1 = state_36174;
var statearr_36208_38068 = state_36174__$1;
(statearr_36208_38068[(2)] = inst_36140);


cljs.core.async.impl.ioc_helpers.process_exception(state_36174__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36175 === (9))){
var inst_36125 = (state_36174[(7)]);
var inst_36142 = (state_36174[(2)]);
var inst_36143 = (inst_36125 + (1));
var inst_36125__$1 = inst_36143;
var state_36174__$1 = (function (){var statearr_36209 = state_36174;
(statearr_36209[(10)] = inst_36142);

(statearr_36209[(7)] = inst_36125__$1);

return statearr_36209;
})();
var statearr_36211_38071 = state_36174__$1;
(statearr_36211_38071[(2)] = null);

(statearr_36211_38071[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36175 === (5))){
var inst_36149 = (state_36174[(2)]);
var state_36174__$1 = (function (){var statearr_36213 = state_36174;
(statearr_36213[(11)] = inst_36149);

return statearr_36213;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36174__$1,(12),dchan);
} else {
if((state_val_36175 === (14))){
var inst_36151 = (state_36174[(8)]);
var inst_36164 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36151);
var state_36174__$1 = state_36174;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36174__$1,(16),out,inst_36164);
} else {
if((state_val_36175 === (16))){
var inst_36166 = (state_36174[(2)]);
var state_36174__$1 = (function (){var statearr_36216 = state_36174;
(statearr_36216[(12)] = inst_36166);

return statearr_36216;
})();
var statearr_36217_38072 = state_36174__$1;
(statearr_36217_38072[(2)] = null);

(statearr_36217_38072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36175 === (10))){
var inst_36132 = (state_36174[(2)]);
var inst_36133 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36174__$1 = (function (){var statearr_36219 = state_36174;
(statearr_36219[(13)] = inst_36132);

return statearr_36219;
})();
var statearr_36220_38073 = state_36174__$1;
(statearr_36220_38073[(2)] = inst_36133);


cljs.core.async.impl.ioc_helpers.process_exception(state_36174__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36175 === (8))){
var inst_36147 = (state_36174[(2)]);
var state_36174__$1 = state_36174;
var statearr_36222_38075 = state_36174__$1;
(statearr_36222_38075[(2)] = inst_36147);

(statearr_36222_38075[(1)] = (5));


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
var statearr_36224 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36224[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36224[(1)] = (1));

return statearr_36224;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36174){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36174);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36225){if((e36225 instanceof Object)){
var ex__34210__auto__ = e36225;
var statearr_36226_38081 = state_36174;
(statearr_36226_38081[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36225;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38082 = state_36174;
state_36174 = G__38082;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36229 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36229[(6)] = c__34273__auto___38050);

return statearr_36229;
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
var G__36249 = arguments.length;
switch (G__36249) {
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
var c__34273__auto___38090 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36287){
var state_val_36288 = (state_36287[(1)]);
if((state_val_36288 === (7))){
var inst_36266 = (state_36287[(7)]);
var inst_36265 = (state_36287[(8)]);
var inst_36265__$1 = (state_36287[(2)]);
var inst_36266__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36265__$1,(0),null);
var inst_36267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36265__$1,(1),null);
var inst_36268 = (inst_36266__$1 == null);
var state_36287__$1 = (function (){var statearr_36297 = state_36287;
(statearr_36297[(7)] = inst_36266__$1);

(statearr_36297[(9)] = inst_36267);

(statearr_36297[(8)] = inst_36265__$1);

return statearr_36297;
})();
if(cljs.core.truth_(inst_36268)){
var statearr_36299_38093 = state_36287__$1;
(statearr_36299_38093[(1)] = (8));

} else {
var statearr_36301_38094 = state_36287__$1;
(statearr_36301_38094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36288 === (1))){
var inst_36255 = cljs.core.vec(chs);
var inst_36256 = inst_36255;
var state_36287__$1 = (function (){var statearr_36302 = state_36287;
(statearr_36302[(10)] = inst_36256);

return statearr_36302;
})();
var statearr_36303_38096 = state_36287__$1;
(statearr_36303_38096[(2)] = null);

(statearr_36303_38096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36288 === (4))){
var inst_36256 = (state_36287[(10)]);
var state_36287__$1 = state_36287;
return cljs.core.async.ioc_alts_BANG_(state_36287__$1,(7),inst_36256);
} else {
if((state_val_36288 === (6))){
var inst_36282 = (state_36287[(2)]);
var state_36287__$1 = state_36287;
var statearr_36306_38097 = state_36287__$1;
(statearr_36306_38097[(2)] = inst_36282);

(statearr_36306_38097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36288 === (3))){
var inst_36284 = (state_36287[(2)]);
var state_36287__$1 = state_36287;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36287__$1,inst_36284);
} else {
if((state_val_36288 === (2))){
var inst_36256 = (state_36287[(10)]);
var inst_36258 = cljs.core.count(inst_36256);
var inst_36259 = (inst_36258 > (0));
var state_36287__$1 = state_36287;
if(cljs.core.truth_(inst_36259)){
var statearr_36310_38101 = state_36287__$1;
(statearr_36310_38101[(1)] = (4));

} else {
var statearr_36311_38102 = state_36287__$1;
(statearr_36311_38102[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36288 === (11))){
var inst_36256 = (state_36287[(10)]);
var inst_36275 = (state_36287[(2)]);
var tmp36308 = inst_36256;
var inst_36256__$1 = tmp36308;
var state_36287__$1 = (function (){var statearr_36313 = state_36287;
(statearr_36313[(10)] = inst_36256__$1);

(statearr_36313[(11)] = inst_36275);

return statearr_36313;
})();
var statearr_36315_38103 = state_36287__$1;
(statearr_36315_38103[(2)] = null);

(statearr_36315_38103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36288 === (9))){
var inst_36266 = (state_36287[(7)]);
var state_36287__$1 = state_36287;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36287__$1,(11),out,inst_36266);
} else {
if((state_val_36288 === (5))){
var inst_36280 = cljs.core.async.close_BANG_(out);
var state_36287__$1 = state_36287;
var statearr_36321_38105 = state_36287__$1;
(statearr_36321_38105[(2)] = inst_36280);

(statearr_36321_38105[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36288 === (10))){
var inst_36278 = (state_36287[(2)]);
var state_36287__$1 = state_36287;
var statearr_36327_38106 = state_36287__$1;
(statearr_36327_38106[(2)] = inst_36278);

(statearr_36327_38106[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36288 === (8))){
var inst_36256 = (state_36287[(10)]);
var inst_36266 = (state_36287[(7)]);
var inst_36267 = (state_36287[(9)]);
var inst_36265 = (state_36287[(8)]);
var inst_36270 = (function (){var cs = inst_36256;
var vec__36261 = inst_36265;
var v = inst_36266;
var c = inst_36267;
return (function (p1__36230_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36230_SHARP_);
});
})();
var inst_36271 = cljs.core.filterv(inst_36270,inst_36256);
var inst_36256__$1 = inst_36271;
var state_36287__$1 = (function (){var statearr_36330 = state_36287;
(statearr_36330[(10)] = inst_36256__$1);

return statearr_36330;
})();
var statearr_36332_38109 = state_36287__$1;
(statearr_36332_38109[(2)] = null);

(statearr_36332_38109[(1)] = (2));


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
var statearr_36333 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36333[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36333[(1)] = (1));

return statearr_36333;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36287){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36287);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36338){if((e36338 instanceof Object)){
var ex__34210__auto__ = e36338;
var statearr_36339_38113 = state_36287;
(statearr_36339_38113[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36338;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38114 = state_36287;
state_36287 = G__38114;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36346 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36346[(6)] = c__34273__auto___38090);

return statearr_36346;
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
var G__36358 = arguments.length;
switch (G__36358) {
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
var c__34273__auto___38123 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36386){
var state_val_36387 = (state_36386[(1)]);
if((state_val_36387 === (7))){
var inst_36366 = (state_36386[(7)]);
var inst_36366__$1 = (state_36386[(2)]);
var inst_36369 = (inst_36366__$1 == null);
var inst_36370 = cljs.core.not(inst_36369);
var state_36386__$1 = (function (){var statearr_36391 = state_36386;
(statearr_36391[(7)] = inst_36366__$1);

return statearr_36391;
})();
if(inst_36370){
var statearr_36392_38125 = state_36386__$1;
(statearr_36392_38125[(1)] = (8));

} else {
var statearr_36393_38126 = state_36386__$1;
(statearr_36393_38126[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36387 === (1))){
var inst_36361 = (0);
var state_36386__$1 = (function (){var statearr_36397 = state_36386;
(statearr_36397[(8)] = inst_36361);

return statearr_36397;
})();
var statearr_36399_38128 = state_36386__$1;
(statearr_36399_38128[(2)] = null);

(statearr_36399_38128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36387 === (4))){
var state_36386__$1 = state_36386;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36386__$1,(7),ch);
} else {
if((state_val_36387 === (6))){
var inst_36381 = (state_36386[(2)]);
var state_36386__$1 = state_36386;
var statearr_36400_38130 = state_36386__$1;
(statearr_36400_38130[(2)] = inst_36381);

(statearr_36400_38130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36387 === (3))){
var inst_36383 = (state_36386[(2)]);
var inst_36384 = cljs.core.async.close_BANG_(out);
var state_36386__$1 = (function (){var statearr_36402 = state_36386;
(statearr_36402[(9)] = inst_36383);

return statearr_36402;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36386__$1,inst_36384);
} else {
if((state_val_36387 === (2))){
var inst_36361 = (state_36386[(8)]);
var inst_36363 = (inst_36361 < n);
var state_36386__$1 = state_36386;
if(cljs.core.truth_(inst_36363)){
var statearr_36403_38132 = state_36386__$1;
(statearr_36403_38132[(1)] = (4));

} else {
var statearr_36404_38133 = state_36386__$1;
(statearr_36404_38133[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36387 === (11))){
var inst_36361 = (state_36386[(8)]);
var inst_36373 = (state_36386[(2)]);
var inst_36374 = (inst_36361 + (1));
var inst_36361__$1 = inst_36374;
var state_36386__$1 = (function (){var statearr_36405 = state_36386;
(statearr_36405[(10)] = inst_36373);

(statearr_36405[(8)] = inst_36361__$1);

return statearr_36405;
})();
var statearr_36407_38136 = state_36386__$1;
(statearr_36407_38136[(2)] = null);

(statearr_36407_38136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36387 === (9))){
var state_36386__$1 = state_36386;
var statearr_36408_38138 = state_36386__$1;
(statearr_36408_38138[(2)] = null);

(statearr_36408_38138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36387 === (5))){
var state_36386__$1 = state_36386;
var statearr_36412_38139 = state_36386__$1;
(statearr_36412_38139[(2)] = null);

(statearr_36412_38139[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36387 === (10))){
var inst_36378 = (state_36386[(2)]);
var state_36386__$1 = state_36386;
var statearr_36414_38140 = state_36386__$1;
(statearr_36414_38140[(2)] = inst_36378);

(statearr_36414_38140[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36387 === (8))){
var inst_36366 = (state_36386[(7)]);
var state_36386__$1 = state_36386;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36386__$1,(11),out,inst_36366);
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
var statearr_36416 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36416[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36416[(1)] = (1));

return statearr_36416;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36386){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36386);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36417){if((e36417 instanceof Object)){
var ex__34210__auto__ = e36417;
var statearr_36418_38142 = state_36386;
(statearr_36418_38142[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36417;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38143 = state_36386;
state_36386 = G__38143;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36386){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36420 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36420[(6)] = c__34273__auto___38123);

return statearr_36420;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36423 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36423 = (function (f,ch,meta36424){
this.f = f;
this.ch = ch;
this.meta36424 = meta36424;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36425,meta36424__$1){
var self__ = this;
var _36425__$1 = this;
return (new cljs.core.async.t_cljs$core$async36423(self__.f,self__.ch,meta36424__$1));
}));

(cljs.core.async.t_cljs$core$async36423.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36425){
var self__ = this;
var _36425__$1 = this;
return self__.meta36424;
}));

(cljs.core.async.t_cljs$core$async36423.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36423.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36423.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36423.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36423.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36429 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36429 = (function (f,ch,meta36424,_,fn1,meta36430){
this.f = f;
this.ch = ch;
this.meta36424 = meta36424;
this._ = _;
this.fn1 = fn1;
this.meta36430 = meta36430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36431,meta36430__$1){
var self__ = this;
var _36431__$1 = this;
return (new cljs.core.async.t_cljs$core$async36429(self__.f,self__.ch,self__.meta36424,self__._,self__.fn1,meta36430__$1));
}));

(cljs.core.async.t_cljs$core$async36429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36431){
var self__ = this;
var _36431__$1 = this;
return self__.meta36430;
}));

(cljs.core.async.t_cljs$core$async36429.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36429.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36429.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36429.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36422_SHARP_){
var G__36435 = (((p1__36422_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36422_SHARP_) : self__.f.call(null,p1__36422_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36435) : f1.call(null,G__36435));
});
}));

(cljs.core.async.t_cljs$core$async36429.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36424","meta36424",2136759037,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36423","cljs.core.async/t_cljs$core$async36423",-1803781081,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36430","meta36430",-1077049263,null)], null);
}));

(cljs.core.async.t_cljs$core$async36429.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36429.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36429");

(cljs.core.async.t_cljs$core$async36429.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36429");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36429.
 */
cljs.core.async.__GT_t_cljs$core$async36429 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36429(f__$1,ch__$1,meta36424__$1,___$2,fn1__$1,meta36430){
return (new cljs.core.async.t_cljs$core$async36429(f__$1,ch__$1,meta36424__$1,___$2,fn1__$1,meta36430));
});

}

return (new cljs.core.async.t_cljs$core$async36429(self__.f,self__.ch,self__.meta36424,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36438 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36438) : self__.f.call(null,G__36438));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36423.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36423.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36423.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36424","meta36424",2136759037,null)], null);
}));

(cljs.core.async.t_cljs$core$async36423.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36423.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36423");

(cljs.core.async.t_cljs$core$async36423.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36423");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36423.
 */
cljs.core.async.__GT_t_cljs$core$async36423 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36423(f__$1,ch__$1,meta36424){
return (new cljs.core.async.t_cljs$core$async36423(f__$1,ch__$1,meta36424));
});

}

return (new cljs.core.async.t_cljs$core$async36423(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36442 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36442 = (function (f,ch,meta36443){
this.f = f;
this.ch = ch;
this.meta36443 = meta36443;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36444,meta36443__$1){
var self__ = this;
var _36444__$1 = this;
return (new cljs.core.async.t_cljs$core$async36442(self__.f,self__.ch,meta36443__$1));
}));

(cljs.core.async.t_cljs$core$async36442.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36444){
var self__ = this;
var _36444__$1 = this;
return self__.meta36443;
}));

(cljs.core.async.t_cljs$core$async36442.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36442.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36442.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36442.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36442.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36442.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36442.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36443","meta36443",1346074850,null)], null);
}));

(cljs.core.async.t_cljs$core$async36442.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36442.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36442");

(cljs.core.async.t_cljs$core$async36442.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36442");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36442.
 */
cljs.core.async.__GT_t_cljs$core$async36442 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36442(f__$1,ch__$1,meta36443){
return (new cljs.core.async.t_cljs$core$async36442(f__$1,ch__$1,meta36443));
});

}

return (new cljs.core.async.t_cljs$core$async36442(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36450 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36450 = (function (p,ch,meta36451){
this.p = p;
this.ch = ch;
this.meta36451 = meta36451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36452,meta36451__$1){
var self__ = this;
var _36452__$1 = this;
return (new cljs.core.async.t_cljs$core$async36450(self__.p,self__.ch,meta36451__$1));
}));

(cljs.core.async.t_cljs$core$async36450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36452){
var self__ = this;
var _36452__$1 = this;
return self__.meta36451;
}));

(cljs.core.async.t_cljs$core$async36450.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36450.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36450.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36450.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36450.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36450.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36450.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36450.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36451","meta36451",-521248873,null)], null);
}));

(cljs.core.async.t_cljs$core$async36450.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36450.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36450");

(cljs.core.async.t_cljs$core$async36450.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36450");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36450.
 */
cljs.core.async.__GT_t_cljs$core$async36450 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36450(p__$1,ch__$1,meta36451){
return (new cljs.core.async.t_cljs$core$async36450(p__$1,ch__$1,meta36451));
});

}

return (new cljs.core.async.t_cljs$core$async36450(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36461 = arguments.length;
switch (G__36461) {
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
var c__34273__auto___38157 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36487){
var state_val_36488 = (state_36487[(1)]);
if((state_val_36488 === (7))){
var inst_36483 = (state_36487[(2)]);
var state_36487__$1 = state_36487;
var statearr_36490_38159 = state_36487__$1;
(statearr_36490_38159[(2)] = inst_36483);

(statearr_36490_38159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36488 === (1))){
var state_36487__$1 = state_36487;
var statearr_36492_38160 = state_36487__$1;
(statearr_36492_38160[(2)] = null);

(statearr_36492_38160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36488 === (4))){
var inst_36466 = (state_36487[(7)]);
var inst_36466__$1 = (state_36487[(2)]);
var inst_36467 = (inst_36466__$1 == null);
var state_36487__$1 = (function (){var statearr_36493 = state_36487;
(statearr_36493[(7)] = inst_36466__$1);

return statearr_36493;
})();
if(cljs.core.truth_(inst_36467)){
var statearr_36494_38162 = state_36487__$1;
(statearr_36494_38162[(1)] = (5));

} else {
var statearr_36496_38163 = state_36487__$1;
(statearr_36496_38163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36488 === (6))){
var inst_36466 = (state_36487[(7)]);
var inst_36471 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36466) : p.call(null,inst_36466));
var state_36487__$1 = state_36487;
if(cljs.core.truth_(inst_36471)){
var statearr_36497_38164 = state_36487__$1;
(statearr_36497_38164[(1)] = (8));

} else {
var statearr_36498_38165 = state_36487__$1;
(statearr_36498_38165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36488 === (3))){
var inst_36485 = (state_36487[(2)]);
var state_36487__$1 = state_36487;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36487__$1,inst_36485);
} else {
if((state_val_36488 === (2))){
var state_36487__$1 = state_36487;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36487__$1,(4),ch);
} else {
if((state_val_36488 === (11))){
var inst_36476 = (state_36487[(2)]);
var state_36487__$1 = state_36487;
var statearr_36500_38167 = state_36487__$1;
(statearr_36500_38167[(2)] = inst_36476);

(statearr_36500_38167[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36488 === (9))){
var state_36487__$1 = state_36487;
var statearr_36502_38168 = state_36487__$1;
(statearr_36502_38168[(2)] = null);

(statearr_36502_38168[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36488 === (5))){
var inst_36469 = cljs.core.async.close_BANG_(out);
var state_36487__$1 = state_36487;
var statearr_36506_38170 = state_36487__$1;
(statearr_36506_38170[(2)] = inst_36469);

(statearr_36506_38170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36488 === (10))){
var inst_36479 = (state_36487[(2)]);
var state_36487__$1 = (function (){var statearr_36508 = state_36487;
(statearr_36508[(8)] = inst_36479);

return statearr_36508;
})();
var statearr_36509_38171 = state_36487__$1;
(statearr_36509_38171[(2)] = null);

(statearr_36509_38171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36488 === (8))){
var inst_36466 = (state_36487[(7)]);
var state_36487__$1 = state_36487;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36487__$1,(11),out,inst_36466);
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
var statearr_36511 = [null,null,null,null,null,null,null,null,null];
(statearr_36511[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36511[(1)] = (1));

return statearr_36511;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36487){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36487);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36512){if((e36512 instanceof Object)){
var ex__34210__auto__ = e36512;
var statearr_36513_38173 = state_36487;
(statearr_36513_38173[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36512;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38175 = state_36487;
state_36487 = G__38175;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36487){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36515 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36515[(6)] = c__34273__auto___38157);

return statearr_36515;
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
var G__36518 = arguments.length;
switch (G__36518) {
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
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36586){
var state_val_36587 = (state_36586[(1)]);
if((state_val_36587 === (7))){
var inst_36581 = (state_36586[(2)]);
var state_36586__$1 = state_36586;
var statearr_36590_38179 = state_36586__$1;
(statearr_36590_38179[(2)] = inst_36581);

(statearr_36590_38179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (20))){
var inst_36550 = (state_36586[(7)]);
var inst_36561 = (state_36586[(2)]);
var inst_36563 = cljs.core.next(inst_36550);
var inst_36535 = inst_36563;
var inst_36536 = null;
var inst_36537 = (0);
var inst_36538 = (0);
var state_36586__$1 = (function (){var statearr_36592 = state_36586;
(statearr_36592[(8)] = inst_36535);

(statearr_36592[(9)] = inst_36561);

(statearr_36592[(10)] = inst_36537);

(statearr_36592[(11)] = inst_36536);

(statearr_36592[(12)] = inst_36538);

return statearr_36592;
})();
var statearr_36593_38181 = state_36586__$1;
(statearr_36593_38181[(2)] = null);

(statearr_36593_38181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (1))){
var state_36586__$1 = state_36586;
var statearr_36594_38182 = state_36586__$1;
(statearr_36594_38182[(2)] = null);

(statearr_36594_38182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (4))){
var inst_36524 = (state_36586[(13)]);
var inst_36524__$1 = (state_36586[(2)]);
var inst_36525 = (inst_36524__$1 == null);
var state_36586__$1 = (function (){var statearr_36596 = state_36586;
(statearr_36596[(13)] = inst_36524__$1);

return statearr_36596;
})();
if(cljs.core.truth_(inst_36525)){
var statearr_36597_38184 = state_36586__$1;
(statearr_36597_38184[(1)] = (5));

} else {
var statearr_36598_38185 = state_36586__$1;
(statearr_36598_38185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (15))){
var state_36586__$1 = state_36586;
var statearr_36603_38186 = state_36586__$1;
(statearr_36603_38186[(2)] = null);

(statearr_36603_38186[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (21))){
var state_36586__$1 = state_36586;
var statearr_36604_38188 = state_36586__$1;
(statearr_36604_38188[(2)] = null);

(statearr_36604_38188[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (13))){
var inst_36535 = (state_36586[(8)]);
var inst_36537 = (state_36586[(10)]);
var inst_36536 = (state_36586[(11)]);
var inst_36538 = (state_36586[(12)]);
var inst_36546 = (state_36586[(2)]);
var inst_36547 = (inst_36538 + (1));
var tmp36599 = inst_36535;
var tmp36600 = inst_36537;
var tmp36601 = inst_36536;
var inst_36535__$1 = tmp36599;
var inst_36536__$1 = tmp36601;
var inst_36537__$1 = tmp36600;
var inst_36538__$1 = inst_36547;
var state_36586__$1 = (function (){var statearr_36606 = state_36586;
(statearr_36606[(8)] = inst_36535__$1);

(statearr_36606[(14)] = inst_36546);

(statearr_36606[(10)] = inst_36537__$1);

(statearr_36606[(11)] = inst_36536__$1);

(statearr_36606[(12)] = inst_36538__$1);

return statearr_36606;
})();
var statearr_36607_38190 = state_36586__$1;
(statearr_36607_38190[(2)] = null);

(statearr_36607_38190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (22))){
var state_36586__$1 = state_36586;
var statearr_36609_38191 = state_36586__$1;
(statearr_36609_38191[(2)] = null);

(statearr_36609_38191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (6))){
var inst_36524 = (state_36586[(13)]);
var inst_36533 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36524) : f.call(null,inst_36524));
var inst_36534 = cljs.core.seq(inst_36533);
var inst_36535 = inst_36534;
var inst_36536 = null;
var inst_36537 = (0);
var inst_36538 = (0);
var state_36586__$1 = (function (){var statearr_36610 = state_36586;
(statearr_36610[(8)] = inst_36535);

(statearr_36610[(10)] = inst_36537);

(statearr_36610[(11)] = inst_36536);

(statearr_36610[(12)] = inst_36538);

return statearr_36610;
})();
var statearr_36612_38193 = state_36586__$1;
(statearr_36612_38193[(2)] = null);

(statearr_36612_38193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (17))){
var inst_36550 = (state_36586[(7)]);
var inst_36554 = cljs.core.chunk_first(inst_36550);
var inst_36555 = cljs.core.chunk_rest(inst_36550);
var inst_36556 = cljs.core.count(inst_36554);
var inst_36535 = inst_36555;
var inst_36536 = inst_36554;
var inst_36537 = inst_36556;
var inst_36538 = (0);
var state_36586__$1 = (function (){var statearr_36613 = state_36586;
(statearr_36613[(8)] = inst_36535);

(statearr_36613[(10)] = inst_36537);

(statearr_36613[(11)] = inst_36536);

(statearr_36613[(12)] = inst_36538);

return statearr_36613;
})();
var statearr_36615_38195 = state_36586__$1;
(statearr_36615_38195[(2)] = null);

(statearr_36615_38195[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (3))){
var inst_36583 = (state_36586[(2)]);
var state_36586__$1 = state_36586;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36586__$1,inst_36583);
} else {
if((state_val_36587 === (12))){
var inst_36571 = (state_36586[(2)]);
var state_36586__$1 = state_36586;
var statearr_36616_38197 = state_36586__$1;
(statearr_36616_38197[(2)] = inst_36571);

(statearr_36616_38197[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (2))){
var state_36586__$1 = state_36586;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36586__$1,(4),in$);
} else {
if((state_val_36587 === (23))){
var inst_36579 = (state_36586[(2)]);
var state_36586__$1 = state_36586;
var statearr_36618_38198 = state_36586__$1;
(statearr_36618_38198[(2)] = inst_36579);

(statearr_36618_38198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (19))){
var inst_36566 = (state_36586[(2)]);
var state_36586__$1 = state_36586;
var statearr_36620_38199 = state_36586__$1;
(statearr_36620_38199[(2)] = inst_36566);

(statearr_36620_38199[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (11))){
var inst_36550 = (state_36586[(7)]);
var inst_36535 = (state_36586[(8)]);
var inst_36550__$1 = cljs.core.seq(inst_36535);
var state_36586__$1 = (function (){var statearr_36621 = state_36586;
(statearr_36621[(7)] = inst_36550__$1);

return statearr_36621;
})();
if(inst_36550__$1){
var statearr_36622_38201 = state_36586__$1;
(statearr_36622_38201[(1)] = (14));

} else {
var statearr_36624_38202 = state_36586__$1;
(statearr_36624_38202[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (9))){
var inst_36573 = (state_36586[(2)]);
var inst_36574 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36586__$1 = (function (){var statearr_36625 = state_36586;
(statearr_36625[(15)] = inst_36573);

return statearr_36625;
})();
if(cljs.core.truth_(inst_36574)){
var statearr_36626_38203 = state_36586__$1;
(statearr_36626_38203[(1)] = (21));

} else {
var statearr_36627_38204 = state_36586__$1;
(statearr_36627_38204[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (5))){
var inst_36527 = cljs.core.async.close_BANG_(out);
var state_36586__$1 = state_36586;
var statearr_36629_38205 = state_36586__$1;
(statearr_36629_38205[(2)] = inst_36527);

(statearr_36629_38205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (14))){
var inst_36550 = (state_36586[(7)]);
var inst_36552 = cljs.core.chunked_seq_QMARK_(inst_36550);
var state_36586__$1 = state_36586;
if(inst_36552){
var statearr_36630_38206 = state_36586__$1;
(statearr_36630_38206[(1)] = (17));

} else {
var statearr_36632_38208 = state_36586__$1;
(statearr_36632_38208[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (16))){
var inst_36569 = (state_36586[(2)]);
var state_36586__$1 = state_36586;
var statearr_36633_38209 = state_36586__$1;
(statearr_36633_38209[(2)] = inst_36569);

(statearr_36633_38209[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (10))){
var inst_36536 = (state_36586[(11)]);
var inst_36538 = (state_36586[(12)]);
var inst_36544 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36536,inst_36538);
var state_36586__$1 = state_36586;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36586__$1,(13),out,inst_36544);
} else {
if((state_val_36587 === (18))){
var inst_36550 = (state_36586[(7)]);
var inst_36559 = cljs.core.first(inst_36550);
var state_36586__$1 = state_36586;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36586__$1,(20),out,inst_36559);
} else {
if((state_val_36587 === (8))){
var inst_36537 = (state_36586[(10)]);
var inst_36538 = (state_36586[(12)]);
var inst_36540 = (inst_36538 < inst_36537);
var inst_36541 = inst_36540;
var state_36586__$1 = state_36586;
if(cljs.core.truth_(inst_36541)){
var statearr_36635_38210 = state_36586__$1;
(statearr_36635_38210[(1)] = (10));

} else {
var statearr_36636_38211 = state_36586__$1;
(statearr_36636_38211[(1)] = (11));

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
var statearr_36638 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36638[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36638[(1)] = (1));

return statearr_36638;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36586){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36586);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36639){if((e36639 instanceof Object)){
var ex__34210__auto__ = e36639;
var statearr_36641_38212 = state_36586;
(statearr_36641_38212[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38213 = state_36586;
state_36586 = G__38213;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36586){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36642 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36642[(6)] = c__34273__auto__);

return statearr_36642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));

return c__34273__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36645 = arguments.length;
switch (G__36645) {
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
var G__36650 = arguments.length;
switch (G__36650) {
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
var G__36654 = arguments.length;
switch (G__36654) {
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
var c__34273__auto___38218 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36680){
var state_val_36682 = (state_36680[(1)]);
if((state_val_36682 === (7))){
var inst_36675 = (state_36680[(2)]);
var state_36680__$1 = state_36680;
var statearr_36684_38220 = state_36680__$1;
(statearr_36684_38220[(2)] = inst_36675);

(statearr_36684_38220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (1))){
var inst_36657 = null;
var state_36680__$1 = (function (){var statearr_36685 = state_36680;
(statearr_36685[(7)] = inst_36657);

return statearr_36685;
})();
var statearr_36686_38221 = state_36680__$1;
(statearr_36686_38221[(2)] = null);

(statearr_36686_38221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (4))){
var inst_36660 = (state_36680[(8)]);
var inst_36660__$1 = (state_36680[(2)]);
var inst_36661 = (inst_36660__$1 == null);
var inst_36662 = cljs.core.not(inst_36661);
var state_36680__$1 = (function (){var statearr_36688 = state_36680;
(statearr_36688[(8)] = inst_36660__$1);

return statearr_36688;
})();
if(inst_36662){
var statearr_36689_38223 = state_36680__$1;
(statearr_36689_38223[(1)] = (5));

} else {
var statearr_36690_38224 = state_36680__$1;
(statearr_36690_38224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (6))){
var state_36680__$1 = state_36680;
var statearr_36692_38225 = state_36680__$1;
(statearr_36692_38225[(2)] = null);

(statearr_36692_38225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (3))){
var inst_36677 = (state_36680[(2)]);
var inst_36678 = cljs.core.async.close_BANG_(out);
var state_36680__$1 = (function (){var statearr_36693 = state_36680;
(statearr_36693[(9)] = inst_36677);

return statearr_36693;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36680__$1,inst_36678);
} else {
if((state_val_36682 === (2))){
var state_36680__$1 = state_36680;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36680__$1,(4),ch);
} else {
if((state_val_36682 === (11))){
var inst_36660 = (state_36680[(8)]);
var inst_36669 = (state_36680[(2)]);
var inst_36657 = inst_36660;
var state_36680__$1 = (function (){var statearr_36695 = state_36680;
(statearr_36695[(10)] = inst_36669);

(statearr_36695[(7)] = inst_36657);

return statearr_36695;
})();
var statearr_36696_38226 = state_36680__$1;
(statearr_36696_38226[(2)] = null);

(statearr_36696_38226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (9))){
var inst_36660 = (state_36680[(8)]);
var state_36680__$1 = state_36680;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36680__$1,(11),out,inst_36660);
} else {
if((state_val_36682 === (5))){
var inst_36657 = (state_36680[(7)]);
var inst_36660 = (state_36680[(8)]);
var inst_36664 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36660,inst_36657);
var state_36680__$1 = state_36680;
if(inst_36664){
var statearr_36699_38229 = state_36680__$1;
(statearr_36699_38229[(1)] = (8));

} else {
var statearr_36700_38231 = state_36680__$1;
(statearr_36700_38231[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (10))){
var inst_36672 = (state_36680[(2)]);
var state_36680__$1 = state_36680;
var statearr_36701_38232 = state_36680__$1;
(statearr_36701_38232[(2)] = inst_36672);

(statearr_36701_38232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (8))){
var inst_36657 = (state_36680[(7)]);
var tmp36698 = inst_36657;
var inst_36657__$1 = tmp36698;
var state_36680__$1 = (function (){var statearr_36703 = state_36680;
(statearr_36703[(7)] = inst_36657__$1);

return statearr_36703;
})();
var statearr_36704_38233 = state_36680__$1;
(statearr_36704_38233[(2)] = null);

(statearr_36704_38233[(1)] = (2));


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
var statearr_36706 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36706[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36706[(1)] = (1));

return statearr_36706;
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
}catch (e36707){if((e36707 instanceof Object)){
var ex__34210__auto__ = e36707;
var statearr_36708_38234 = state_36680;
(statearr_36708_38234[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36707;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38235 = state_36680;
state_36680 = G__38235;
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
var state__34275__auto__ = (function (){var statearr_36710 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36710[(6)] = c__34273__auto___38218);

return statearr_36710;
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
var G__36713 = arguments.length;
switch (G__36713) {
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
var c__34273__auto___38237 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36754){
var state_val_36755 = (state_36754[(1)]);
if((state_val_36755 === (7))){
var inst_36750 = (state_36754[(2)]);
var state_36754__$1 = state_36754;
var statearr_36758_38238 = state_36754__$1;
(statearr_36758_38238[(2)] = inst_36750);

(statearr_36758_38238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36755 === (1))){
var inst_36716 = (new Array(n));
var inst_36717 = inst_36716;
var inst_36718 = (0);
var state_36754__$1 = (function (){var statearr_36759 = state_36754;
(statearr_36759[(7)] = inst_36718);

(statearr_36759[(8)] = inst_36717);

return statearr_36759;
})();
var statearr_36760_38239 = state_36754__$1;
(statearr_36760_38239[(2)] = null);

(statearr_36760_38239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36755 === (4))){
var inst_36721 = (state_36754[(9)]);
var inst_36721__$1 = (state_36754[(2)]);
var inst_36722 = (inst_36721__$1 == null);
var inst_36723 = cljs.core.not(inst_36722);
var state_36754__$1 = (function (){var statearr_36762 = state_36754;
(statearr_36762[(9)] = inst_36721__$1);

return statearr_36762;
})();
if(inst_36723){
var statearr_36763_38240 = state_36754__$1;
(statearr_36763_38240[(1)] = (5));

} else {
var statearr_36764_38241 = state_36754__$1;
(statearr_36764_38241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36755 === (15))){
var inst_36744 = (state_36754[(2)]);
var state_36754__$1 = state_36754;
var statearr_36766_38242 = state_36754__$1;
(statearr_36766_38242[(2)] = inst_36744);

(statearr_36766_38242[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36755 === (13))){
var state_36754__$1 = state_36754;
var statearr_36767_38243 = state_36754__$1;
(statearr_36767_38243[(2)] = null);

(statearr_36767_38243[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36755 === (6))){
var inst_36718 = (state_36754[(7)]);
var inst_36740 = (inst_36718 > (0));
var state_36754__$1 = state_36754;
if(cljs.core.truth_(inst_36740)){
var statearr_36768_38244 = state_36754__$1;
(statearr_36768_38244[(1)] = (12));

} else {
var statearr_36770_38245 = state_36754__$1;
(statearr_36770_38245[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36755 === (3))){
var inst_36752 = (state_36754[(2)]);
var state_36754__$1 = state_36754;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36754__$1,inst_36752);
} else {
if((state_val_36755 === (12))){
var inst_36717 = (state_36754[(8)]);
var inst_36742 = cljs.core.vec(inst_36717);
var state_36754__$1 = state_36754;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36754__$1,(15),out,inst_36742);
} else {
if((state_val_36755 === (2))){
var state_36754__$1 = state_36754;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36754__$1,(4),ch);
} else {
if((state_val_36755 === (11))){
var inst_36734 = (state_36754[(2)]);
var inst_36735 = (new Array(n));
var inst_36717 = inst_36735;
var inst_36718 = (0);
var state_36754__$1 = (function (){var statearr_36772 = state_36754;
(statearr_36772[(10)] = inst_36734);

(statearr_36772[(7)] = inst_36718);

(statearr_36772[(8)] = inst_36717);

return statearr_36772;
})();
var statearr_36773_38246 = state_36754__$1;
(statearr_36773_38246[(2)] = null);

(statearr_36773_38246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36755 === (9))){
var inst_36717 = (state_36754[(8)]);
var inst_36732 = cljs.core.vec(inst_36717);
var state_36754__$1 = state_36754;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36754__$1,(11),out,inst_36732);
} else {
if((state_val_36755 === (5))){
var inst_36727 = (state_36754[(11)]);
var inst_36721 = (state_36754[(9)]);
var inst_36718 = (state_36754[(7)]);
var inst_36717 = (state_36754[(8)]);
var inst_36726 = (inst_36717[inst_36718] = inst_36721);
var inst_36727__$1 = (inst_36718 + (1));
var inst_36728 = (inst_36727__$1 < n);
var state_36754__$1 = (function (){var statearr_36775 = state_36754;
(statearr_36775[(11)] = inst_36727__$1);

(statearr_36775[(12)] = inst_36726);

return statearr_36775;
})();
if(cljs.core.truth_(inst_36728)){
var statearr_36777_38247 = state_36754__$1;
(statearr_36777_38247[(1)] = (8));

} else {
var statearr_36778_38248 = state_36754__$1;
(statearr_36778_38248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36755 === (14))){
var inst_36747 = (state_36754[(2)]);
var inst_36748 = cljs.core.async.close_BANG_(out);
var state_36754__$1 = (function (){var statearr_36780 = state_36754;
(statearr_36780[(13)] = inst_36747);

return statearr_36780;
})();
var statearr_36781_38249 = state_36754__$1;
(statearr_36781_38249[(2)] = inst_36748);

(statearr_36781_38249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36755 === (10))){
var inst_36738 = (state_36754[(2)]);
var state_36754__$1 = state_36754;
var statearr_36783_38250 = state_36754__$1;
(statearr_36783_38250[(2)] = inst_36738);

(statearr_36783_38250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36755 === (8))){
var inst_36727 = (state_36754[(11)]);
var inst_36717 = (state_36754[(8)]);
var tmp36779 = inst_36717;
var inst_36717__$1 = tmp36779;
var inst_36718 = inst_36727;
var state_36754__$1 = (function (){var statearr_36784 = state_36754;
(statearr_36784[(7)] = inst_36718);

(statearr_36784[(8)] = inst_36717__$1);

return statearr_36784;
})();
var statearr_36785_38251 = state_36754__$1;
(statearr_36785_38251[(2)] = null);

(statearr_36785_38251[(1)] = (2));


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
var statearr_36787 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36787[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36787[(1)] = (1));

return statearr_36787;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36754){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36754);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36793){if((e36793 instanceof Object)){
var ex__34210__auto__ = e36793;
var statearr_36796_38252 = state_36754;
(statearr_36796_38252[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36793;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38253 = state_36754;
state_36754 = G__38253;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36754){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36798 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36798[(6)] = c__34273__auto___38237);

return statearr_36798;
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
var G__36801 = arguments.length;
switch (G__36801) {
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
var c__34273__auto___38255 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36846){
var state_val_36847 = (state_36846[(1)]);
if((state_val_36847 === (7))){
var inst_36842 = (state_36846[(2)]);
var state_36846__$1 = state_36846;
var statearr_36849_38256 = state_36846__$1;
(statearr_36849_38256[(2)] = inst_36842);

(statearr_36849_38256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36847 === (1))){
var inst_36804 = [];
var inst_36805 = inst_36804;
var inst_36806 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36846__$1 = (function (){var statearr_36851 = state_36846;
(statearr_36851[(7)] = inst_36805);

(statearr_36851[(8)] = inst_36806);

return statearr_36851;
})();
var statearr_36853_38257 = state_36846__$1;
(statearr_36853_38257[(2)] = null);

(statearr_36853_38257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36847 === (4))){
var inst_36809 = (state_36846[(9)]);
var inst_36809__$1 = (state_36846[(2)]);
var inst_36810 = (inst_36809__$1 == null);
var inst_36811 = cljs.core.not(inst_36810);
var state_36846__$1 = (function (){var statearr_36854 = state_36846;
(statearr_36854[(9)] = inst_36809__$1);

return statearr_36854;
})();
if(inst_36811){
var statearr_36855_38258 = state_36846__$1;
(statearr_36855_38258[(1)] = (5));

} else {
var statearr_36856_38259 = state_36846__$1;
(statearr_36856_38259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36847 === (15))){
var inst_36836 = (state_36846[(2)]);
var state_36846__$1 = state_36846;
var statearr_36858_38260 = state_36846__$1;
(statearr_36858_38260[(2)] = inst_36836);

(statearr_36858_38260[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36847 === (13))){
var state_36846__$1 = state_36846;
var statearr_36859_38261 = state_36846__$1;
(statearr_36859_38261[(2)] = null);

(statearr_36859_38261[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36847 === (6))){
var inst_36805 = (state_36846[(7)]);
var inst_36831 = inst_36805.length;
var inst_36832 = (inst_36831 > (0));
var state_36846__$1 = state_36846;
if(cljs.core.truth_(inst_36832)){
var statearr_36861_38262 = state_36846__$1;
(statearr_36861_38262[(1)] = (12));

} else {
var statearr_36862_38263 = state_36846__$1;
(statearr_36862_38263[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36847 === (3))){
var inst_36844 = (state_36846[(2)]);
var state_36846__$1 = state_36846;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36846__$1,inst_36844);
} else {
if((state_val_36847 === (12))){
var inst_36805 = (state_36846[(7)]);
var inst_36834 = cljs.core.vec(inst_36805);
var state_36846__$1 = state_36846;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36846__$1,(15),out,inst_36834);
} else {
if((state_val_36847 === (2))){
var state_36846__$1 = state_36846;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36846__$1,(4),ch);
} else {
if((state_val_36847 === (11))){
var inst_36813 = (state_36846[(10)]);
var inst_36809 = (state_36846[(9)]);
var inst_36823 = (state_36846[(2)]);
var inst_36824 = [];
var inst_36826 = inst_36824.push(inst_36809);
var inst_36805 = inst_36824;
var inst_36806 = inst_36813;
var state_36846__$1 = (function (){var statearr_36865 = state_36846;
(statearr_36865[(7)] = inst_36805);

(statearr_36865[(8)] = inst_36806);

(statearr_36865[(11)] = inst_36826);

(statearr_36865[(12)] = inst_36823);

return statearr_36865;
})();
var statearr_36866_38264 = state_36846__$1;
(statearr_36866_38264[(2)] = null);

(statearr_36866_38264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36847 === (9))){
var inst_36805 = (state_36846[(7)]);
var inst_36821 = cljs.core.vec(inst_36805);
var state_36846__$1 = state_36846;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36846__$1,(11),out,inst_36821);
} else {
if((state_val_36847 === (5))){
var inst_36806 = (state_36846[(8)]);
var inst_36813 = (state_36846[(10)]);
var inst_36809 = (state_36846[(9)]);
var inst_36813__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36809) : f.call(null,inst_36809));
var inst_36814 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36813__$1,inst_36806);
var inst_36815 = cljs.core.keyword_identical_QMARK_(inst_36806,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36816 = ((inst_36814) || (inst_36815));
var state_36846__$1 = (function (){var statearr_36868 = state_36846;
(statearr_36868[(10)] = inst_36813__$1);

return statearr_36868;
})();
if(cljs.core.truth_(inst_36816)){
var statearr_36869_38265 = state_36846__$1;
(statearr_36869_38265[(1)] = (8));

} else {
var statearr_36870_38266 = state_36846__$1;
(statearr_36870_38266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36847 === (14))){
var inst_36839 = (state_36846[(2)]);
var inst_36840 = cljs.core.async.close_BANG_(out);
var state_36846__$1 = (function (){var statearr_36873 = state_36846;
(statearr_36873[(13)] = inst_36839);

return statearr_36873;
})();
var statearr_36874_38267 = state_36846__$1;
(statearr_36874_38267[(2)] = inst_36840);

(statearr_36874_38267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36847 === (10))){
var inst_36829 = (state_36846[(2)]);
var state_36846__$1 = state_36846;
var statearr_36876_38268 = state_36846__$1;
(statearr_36876_38268[(2)] = inst_36829);

(statearr_36876_38268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36847 === (8))){
var inst_36805 = (state_36846[(7)]);
var inst_36813 = (state_36846[(10)]);
var inst_36809 = (state_36846[(9)]);
var inst_36818 = inst_36805.push(inst_36809);
var tmp36872 = inst_36805;
var inst_36805__$1 = tmp36872;
var inst_36806 = inst_36813;
var state_36846__$1 = (function (){var statearr_36877 = state_36846;
(statearr_36877[(7)] = inst_36805__$1);

(statearr_36877[(14)] = inst_36818);

(statearr_36877[(8)] = inst_36806);

return statearr_36877;
})();
var statearr_36878_38269 = state_36846__$1;
(statearr_36878_38269[(2)] = null);

(statearr_36878_38269[(1)] = (2));


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
var statearr_36880 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36880[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36880[(1)] = (1));

return statearr_36880;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36846){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36846);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36882){if((e36882 instanceof Object)){
var ex__34210__auto__ = e36882;
var statearr_36883_38270 = state_36846;
(statearr_36883_38270[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36882;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38271 = state_36846;
state_36846 = G__38271;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36846){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36885 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36885[(6)] = c__34273__auto___38255);

return statearr_36885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
