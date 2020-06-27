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
var G__34338 = arguments.length;
switch (G__34338) {
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
var val_36854 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36854) : fn1.call(null,val_36854));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36854) : fn1.call(null,val_36854));
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
var n__4666__auto___36860 = n;
var x_36861 = (0);
while(true){
if((x_36861 < n__4666__auto___36860)){
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34350 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34350 = (function (flag,cb,meta34351){
this.flag = flag;
this.cb = cb;
this.meta34351 = meta34351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34352,meta34351__$1){
var self__ = this;
var _34352__$1 = this;
return (new cljs.core.async.t_cljs$core$async34350(self__.flag,self__.cb,meta34351__$1));
}));

(cljs.core.async.t_cljs$core$async34350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34352){
var self__ = this;
var _34352__$1 = this;
return self__.meta34351;
}));

(cljs.core.async.t_cljs$core$async34350.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34350.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34350.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34350.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34351","meta34351",-207253899,null)], null);
}));

(cljs.core.async.t_cljs$core$async34350.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34350.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34350");

(cljs.core.async.t_cljs$core$async34350.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34350");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34350.
 */
cljs.core.async.__GT_t_cljs$core$async34350 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34350(flag__$1,cb__$1,meta34351){
return (new cljs.core.async.t_cljs$core$async34350(flag__$1,cb__$1,meta34351));
});

}

return (new cljs.core.async.t_cljs$core$async34350(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34353_SHARP_){
var G__34355 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34353_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34355) : fret.call(null,G__34355));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34354_SHARP_){
var G__34356 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34354_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34356) : fret.call(null,G__34356));
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
var G__36873 = (i + (1));
i = G__36873;
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
var len__4789__auto___36875 = arguments.length;
var i__4790__auto___36876 = (0);
while(true){
if((i__4790__auto___36876 < len__4789__auto___36875)){
args__4795__auto__.push((arguments[i__4790__auto___36876]));

var G__36877 = (i__4790__auto___36876 + (1));
i__4790__auto___36876 = G__36877;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34360){
var map__34361 = p__34360;
var map__34361__$1 = (((((!((map__34361 == null))))?(((((map__34361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34361):map__34361);
var opts = map__34361__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34357){
var G__34358 = cljs.core.first(seq34357);
var seq34357__$1 = cljs.core.next(seq34357);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34358,seq34357__$1);
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
var G__34367 = arguments.length;
switch (G__34367) {
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
var c__34273__auto___36883 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34405){
var state_val_34406 = (state_34405[(1)]);
if((state_val_34406 === (7))){
var inst_34398 = (state_34405[(2)]);
var state_34405__$1 = state_34405;
var statearr_34410_36885 = state_34405__$1;
(statearr_34410_36885[(2)] = inst_34398);

(statearr_34410_36885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34406 === (1))){
var state_34405__$1 = state_34405;
var statearr_34411_36886 = state_34405__$1;
(statearr_34411_36886[(2)] = null);

(statearr_34411_36886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34406 === (4))){
var inst_34375 = (state_34405[(7)]);
var inst_34375__$1 = (state_34405[(2)]);
var inst_34376 = (inst_34375__$1 == null);
var state_34405__$1 = (function (){var statearr_34412 = state_34405;
(statearr_34412[(7)] = inst_34375__$1);

return statearr_34412;
})();
if(cljs.core.truth_(inst_34376)){
var statearr_34413_36888 = state_34405__$1;
(statearr_34413_36888[(1)] = (5));

} else {
var statearr_34414_36889 = state_34405__$1;
(statearr_34414_36889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34406 === (13))){
var state_34405__$1 = state_34405;
var statearr_34415_36891 = state_34405__$1;
(statearr_34415_36891[(2)] = null);

(statearr_34415_36891[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34406 === (6))){
var inst_34375 = (state_34405[(7)]);
var state_34405__$1 = state_34405;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34405__$1,(11),to,inst_34375);
} else {
if((state_val_34406 === (3))){
var inst_34400 = (state_34405[(2)]);
var state_34405__$1 = state_34405;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34405__$1,inst_34400);
} else {
if((state_val_34406 === (12))){
var state_34405__$1 = state_34405;
var statearr_34419_36893 = state_34405__$1;
(statearr_34419_36893[(2)] = null);

(statearr_34419_36893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34406 === (2))){
var state_34405__$1 = state_34405;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34405__$1,(4),from);
} else {
if((state_val_34406 === (11))){
var inst_34388 = (state_34405[(2)]);
var state_34405__$1 = state_34405;
if(cljs.core.truth_(inst_34388)){
var statearr_34420_36895 = state_34405__$1;
(statearr_34420_36895[(1)] = (12));

} else {
var statearr_34421_36896 = state_34405__$1;
(statearr_34421_36896[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34406 === (9))){
var state_34405__$1 = state_34405;
var statearr_34422_36897 = state_34405__$1;
(statearr_34422_36897[(2)] = null);

(statearr_34422_36897[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34406 === (5))){
var state_34405__$1 = state_34405;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34423_36899 = state_34405__$1;
(statearr_34423_36899[(1)] = (8));

} else {
var statearr_34424_36900 = state_34405__$1;
(statearr_34424_36900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34406 === (14))){
var inst_34396 = (state_34405[(2)]);
var state_34405__$1 = state_34405;
var statearr_34425_36901 = state_34405__$1;
(statearr_34425_36901[(2)] = inst_34396);

(statearr_34425_36901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34406 === (10))){
var inst_34382 = (state_34405[(2)]);
var state_34405__$1 = state_34405;
var statearr_34426_36903 = state_34405__$1;
(statearr_34426_36903[(2)] = inst_34382);

(statearr_34426_36903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34406 === (8))){
var inst_34379 = cljs.core.async.close_BANG_(to);
var state_34405__$1 = state_34405;
var statearr_34427_36904 = state_34405__$1;
(statearr_34427_36904[(2)] = inst_34379);

(statearr_34427_36904[(1)] = (10));


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
var statearr_34428 = [null,null,null,null,null,null,null,null];
(statearr_34428[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34428[(1)] = (1));

return statearr_34428;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34405){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34405);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34429){if((e34429 instanceof Object)){
var ex__34210__auto__ = e34429;
var statearr_34430_36906 = state_34405;
(statearr_34430_36906[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34429;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36908 = state_34405;
state_34405 = G__36908;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34405){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34437 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34437[(6)] = c__34273__auto___36883);

return statearr_34437;
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
var c__34273__auto___36911 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34452){
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
var statearr_34457_36914 = state_34452;
(statearr_34457_36914[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36916 = state_34452;
state_34452 = G__36916;
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
var state__34275__auto__ = (function (){var statearr_34458 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34458[(6)] = c__34273__auto___36911);

return statearr_34458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34459){
var vec__34460 = p__34459;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34460,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34460,(1),null);
var job = vec__34460;
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
var n__4666__auto___36919 = n;
var __36920 = (0);
while(true){
if((__36920 < n__4666__auto___36919)){
var G__34463_36921 = type;
var G__34463_36922__$1 = (((G__34463_36921 instanceof cljs.core.Keyword))?G__34463_36921.fqn:null);
switch (G__34463_36922__$1) {
case "compute":
var c__34273__auto___36924 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36920,c__34273__auto___36924,G__34463_36921,G__34463_36922__$1,n__4666__auto___36919,jobs,results,process,async){
return (function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = ((function (__36920,c__34273__auto___36924,G__34463_36921,G__34463_36922__$1,n__4666__auto___36919,jobs,results,process,async){
return (function (state_34476){
var state_val_34477 = (state_34476[(1)]);
if((state_val_34477 === (1))){
var state_34476__$1 = state_34476;
var statearr_34478_36926 = state_34476__$1;
(statearr_34478_36926[(2)] = null);

(statearr_34478_36926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (2))){
var state_34476__$1 = state_34476;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34476__$1,(4),jobs);
} else {
if((state_val_34477 === (3))){
var inst_34474 = (state_34476[(2)]);
var state_34476__$1 = state_34476;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34476__$1,inst_34474);
} else {
if((state_val_34477 === (4))){
var inst_34466 = (state_34476[(2)]);
var inst_34467 = process(inst_34466);
var state_34476__$1 = state_34476;
if(cljs.core.truth_(inst_34467)){
var statearr_34479_36928 = state_34476__$1;
(statearr_34479_36928[(1)] = (5));

} else {
var statearr_34480_36929 = state_34476__$1;
(statearr_34480_36929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (5))){
var state_34476__$1 = state_34476;
var statearr_34481_36930 = state_34476__$1;
(statearr_34481_36930[(2)] = null);

(statearr_34481_36930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (6))){
var state_34476__$1 = state_34476;
var statearr_34486_36931 = state_34476__$1;
(statearr_34486_36931[(2)] = null);

(statearr_34486_36931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (7))){
var inst_34472 = (state_34476[(2)]);
var state_34476__$1 = state_34476;
var statearr_34487_36932 = state_34476__$1;
(statearr_34487_36932[(2)] = inst_34472);

(statearr_34487_36932[(1)] = (3));


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
});})(__36920,c__34273__auto___36924,G__34463_36921,G__34463_36922__$1,n__4666__auto___36919,jobs,results,process,async))
;
return ((function (__36920,switch__34206__auto__,c__34273__auto___36924,G__34463_36921,G__34463_36922__$1,n__4666__auto___36919,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34489 = [null,null,null,null,null,null,null];
(statearr_34489[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34489[(1)] = (1));

return statearr_34489;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34476){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34476);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34490){if((e34490 instanceof Object)){
var ex__34210__auto__ = e34490;
var statearr_34492_36935 = state_34476;
(statearr_34492_36935[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34490;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36936 = state_34476;
state_34476 = G__36936;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34476){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36920,switch__34206__auto__,c__34273__auto___36924,G__34463_36921,G__34463_36922__$1,n__4666__auto___36919,jobs,results,process,async))
})();
var state__34275__auto__ = (function (){var statearr_34494 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34494[(6)] = c__34273__auto___36924);

return statearr_34494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
});})(__36920,c__34273__auto___36924,G__34463_36921,G__34463_36922__$1,n__4666__auto___36919,jobs,results,process,async))
);


break;
case "async":
var c__34273__auto___36938 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36920,c__34273__auto___36938,G__34463_36921,G__34463_36922__$1,n__4666__auto___36919,jobs,results,process,async){
return (function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = ((function (__36920,c__34273__auto___36938,G__34463_36921,G__34463_36922__$1,n__4666__auto___36919,jobs,results,process,async){
return (function (state_34507){
var state_val_34508 = (state_34507[(1)]);
if((state_val_34508 === (1))){
var state_34507__$1 = state_34507;
var statearr_34510_36940 = state_34507__$1;
(statearr_34510_36940[(2)] = null);

(statearr_34510_36940[(1)] = (2));


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
var statearr_34513_36942 = state_34507__$1;
(statearr_34513_36942[(1)] = (5));

} else {
var statearr_34514_36943 = state_34507__$1;
(statearr_34514_36943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (5))){
var state_34507__$1 = state_34507;
var statearr_34518_36945 = state_34507__$1;
(statearr_34518_36945[(2)] = null);

(statearr_34518_36945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (6))){
var state_34507__$1 = state_34507;
var statearr_34521_36946 = state_34507__$1;
(statearr_34521_36946[(2)] = null);

(statearr_34521_36946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (7))){
var inst_34503 = (state_34507[(2)]);
var state_34507__$1 = state_34507;
var statearr_34522_36947 = state_34507__$1;
(statearr_34522_36947[(2)] = inst_34503);

(statearr_34522_36947[(1)] = (3));


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
});})(__36920,c__34273__auto___36938,G__34463_36921,G__34463_36922__$1,n__4666__auto___36919,jobs,results,process,async))
;
return ((function (__36920,switch__34206__auto__,c__34273__auto___36938,G__34463_36921,G__34463_36922__$1,n__4666__auto___36919,jobs,results,process,async){
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
var statearr_34525_36949 = state_34507;
(statearr_34525_36949[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34524;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36950 = state_34507;
state_34507 = G__36950;
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
;})(__36920,switch__34206__auto__,c__34273__auto___36938,G__34463_36921,G__34463_36922__$1,n__4666__auto___36919,jobs,results,process,async))
})();
var state__34275__auto__ = (function (){var statearr_34527 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34527[(6)] = c__34273__auto___36938);

return statearr_34527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
});})(__36920,c__34273__auto___36938,G__34463_36921,G__34463_36922__$1,n__4666__auto___36919,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34463_36922__$1)].join('')));

}

var G__36958 = (__36920 + (1));
__36920 = G__36958;
continue;
} else {
}
break;
}

var c__34273__auto___36959 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34550){
var state_val_34551 = (state_34550[(1)]);
if((state_val_34551 === (7))){
var inst_34545 = (state_34550[(2)]);
var state_34550__$1 = state_34550;
var statearr_34558_36960 = state_34550__$1;
(statearr_34558_36960[(2)] = inst_34545);

(statearr_34558_36960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34551 === (1))){
var state_34550__$1 = state_34550;
var statearr_34559_36962 = state_34550__$1;
(statearr_34559_36962[(2)] = null);

(statearr_34559_36962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34551 === (4))){
var inst_34530 = (state_34550[(7)]);
var inst_34530__$1 = (state_34550[(2)]);
var inst_34531 = (inst_34530__$1 == null);
var state_34550__$1 = (function (){var statearr_34560 = state_34550;
(statearr_34560[(7)] = inst_34530__$1);

return statearr_34560;
})();
if(cljs.core.truth_(inst_34531)){
var statearr_34561_36963 = state_34550__$1;
(statearr_34561_36963[(1)] = (5));

} else {
var statearr_34562_36964 = state_34550__$1;
(statearr_34562_36964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34551 === (6))){
var inst_34535 = (state_34550[(8)]);
var inst_34530 = (state_34550[(7)]);
var inst_34535__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34536 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34537 = [inst_34530,inst_34535__$1];
var inst_34538 = (new cljs.core.PersistentVector(null,2,(5),inst_34536,inst_34537,null));
var state_34550__$1 = (function (){var statearr_34563 = state_34550;
(statearr_34563[(8)] = inst_34535__$1);

return statearr_34563;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34550__$1,(8),jobs,inst_34538);
} else {
if((state_val_34551 === (3))){
var inst_34547 = (state_34550[(2)]);
var state_34550__$1 = state_34550;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34550__$1,inst_34547);
} else {
if((state_val_34551 === (2))){
var state_34550__$1 = state_34550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34550__$1,(4),from);
} else {
if((state_val_34551 === (9))){
var inst_34542 = (state_34550[(2)]);
var state_34550__$1 = (function (){var statearr_34564 = state_34550;
(statearr_34564[(9)] = inst_34542);

return statearr_34564;
})();
var statearr_34565_36969 = state_34550__$1;
(statearr_34565_36969[(2)] = null);

(statearr_34565_36969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34551 === (5))){
var inst_34533 = cljs.core.async.close_BANG_(jobs);
var state_34550__$1 = state_34550;
var statearr_34566_36970 = state_34550__$1;
(statearr_34566_36970[(2)] = inst_34533);

(statearr_34566_36970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34551 === (8))){
var inst_34535 = (state_34550[(8)]);
var inst_34540 = (state_34550[(2)]);
var state_34550__$1 = (function (){var statearr_34567 = state_34550;
(statearr_34567[(10)] = inst_34540);

return statearr_34567;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34550__$1,(9),results,inst_34535);
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
var statearr_34570 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34570[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34570[(1)] = (1));

return statearr_34570;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34550){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34550);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34572){if((e34572 instanceof Object)){
var ex__34210__auto__ = e34572;
var statearr_34573_36978 = state_34550;
(statearr_34573_36978[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36979 = state_34550;
state_34550 = G__36979;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34550){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34574 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34574[(6)] = c__34273__auto___36959);

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
var statearr_34618_36987 = state_34612__$1;
(statearr_34618_36987[(1)] = (5));

} else {
var statearr_34619_36989 = state_34612__$1;
(statearr_34619_36989[(1)] = (6));

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
var statearr_34620_36991 = state_34612__$1;
(statearr_34620_36991[(2)] = inst_34603);

(statearr_34620_36991[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_36992 = state_34612__$1;
(statearr_34622_36992[(2)] = null);

(statearr_34622_36992[(1)] = (2));


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
var statearr_34623_36996 = state_34612__$1;
(statearr_34623_36996[(1)] = (19));

} else {
var statearr_34624_36998 = state_34612__$1;
(statearr_34624_36998[(1)] = (20));

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
var statearr_34625_37004 = state_34612__$1;
(statearr_34625_37004[(2)] = null);

(statearr_34625_37004[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34587 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34626 = state_34612;
(statearr_34626[(10)] = inst_34587);

return statearr_34626;
})();
var statearr_34627_37007 = state_34612__$1;
(statearr_34627_37007[(2)] = null);

(statearr_34627_37007[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34628_37010 = state_34612__$1;
(statearr_34628_37010[(2)] = null);

(statearr_34628_37010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_37011 = state_34612__$1;
(statearr_34629_37011[(1)] = (8));

} else {
var statearr_34630_37013 = state_34612__$1;
(statearr_34630_37013[(1)] = (9));

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
var statearr_34632_37019 = state_34612__$1;
(statearr_34632_37019[(1)] = (15));

} else {
var statearr_34633_37021 = state_34612__$1;
(statearr_34633_37021[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34634_37025 = state_34612__$1;
(statearr_34634_37025[(2)] = false);

(statearr_34634_37025[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34635_37029 = state_34612__$1;
(statearr_34635_37029[(2)] = inst_34584);

(statearr_34635_37029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34636_37030 = state_34612__$1;
(statearr_34636_37030[(2)] = inst_34595);

(statearr_34636_37030[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34581 = cljs.core.async.close_BANG_(to);
var state_34612__$1 = state_34612;
var statearr_34637_37033 = state_34612__$1;
(statearr_34637_37033[(2)] = inst_34581);

(statearr_34637_37033[(1)] = (10));


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
var statearr_34640_37041 = state_34612;
(statearr_34640_37041[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37044 = state_34612;
state_34612 = G__37044;
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
var c__34273__auto___37076 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34673){
var state_val_34674 = (state_34673[(1)]);
if((state_val_34674 === (7))){
var inst_34669 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34675_37079 = state_34673__$1;
(statearr_34675_37079[(2)] = inst_34669);

(statearr_34675_37079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (1))){
var state_34673__$1 = state_34673;
var statearr_34676_37084 = state_34673__$1;
(statearr_34676_37084[(2)] = null);

(statearr_34676_37084[(1)] = (2));


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
var statearr_34678_37087 = state_34673__$1;
(statearr_34678_37087[(1)] = (5));

} else {
var statearr_34679_37088 = state_34673__$1;
(statearr_34679_37088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (13))){
var state_34673__$1 = state_34673;
var statearr_34683_37091 = state_34673__$1;
(statearr_34683_37091[(2)] = null);

(statearr_34683_37091[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (6))){
var inst_34650 = (state_34673[(7)]);
var inst_34656 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34650) : p.call(null,inst_34650));
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34656)){
var statearr_34684_37093 = state_34673__$1;
(statearr_34684_37093[(1)] = (9));

} else {
var statearr_34685_37094 = state_34673__$1;
(statearr_34685_37094[(1)] = (10));

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
var statearr_34686_37095 = state_34673__$1;
(statearr_34686_37095[(2)] = null);

(statearr_34686_37095[(1)] = (2));


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
var statearr_34690_37100 = state_34673__$1;
(statearr_34690_37100[(2)] = tc);

(statearr_34690_37100[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (5))){
var inst_34653 = cljs.core.async.close_BANG_(tc);
var inst_34654 = cljs.core.async.close_BANG_(fc);
var state_34673__$1 = (function (){var statearr_34693 = state_34673;
(statearr_34693[(8)] = inst_34653);

return statearr_34693;
})();
var statearr_34694_37104 = state_34673__$1;
(statearr_34694_37104[(2)] = inst_34654);

(statearr_34694_37104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (14))){
var inst_34667 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34695_37105 = state_34673__$1;
(statearr_34695_37105[(2)] = inst_34667);

(statearr_34695_37105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (10))){
var state_34673__$1 = state_34673;
var statearr_34697_37112 = state_34673__$1;
(statearr_34697_37112[(2)] = fc);

(statearr_34697_37112[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (8))){
var inst_34662 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34662)){
var statearr_34698_37114 = state_34673__$1;
(statearr_34698_37114[(1)] = (12));

} else {
var statearr_34699_37115 = state_34673__$1;
(statearr_34699_37115[(1)] = (13));

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
}catch (e34703){if((e34703 instanceof Object)){
var ex__34210__auto__ = e34703;
var statearr_34704_37119 = state_34673;
(statearr_34704_37119[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34703;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37121 = state_34673;
state_34673 = G__37121;
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
var state__34275__auto__ = (function (){var statearr_34705 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34705[(6)] = c__34273__auto___37076);

return statearr_34705;
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
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34726){
var state_val_34727 = (state_34726[(1)]);
if((state_val_34727 === (7))){
var inst_34722 = (state_34726[(2)]);
var state_34726__$1 = state_34726;
var statearr_34729_37129 = state_34726__$1;
(statearr_34729_37129[(2)] = inst_34722);

(statearr_34729_37129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34727 === (1))){
var inst_34706 = init;
var state_34726__$1 = (function (){var statearr_34731 = state_34726;
(statearr_34731[(7)] = inst_34706);

return statearr_34731;
})();
var statearr_34732_37131 = state_34726__$1;
(statearr_34732_37131[(2)] = null);

(statearr_34732_37131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34727 === (4))){
var inst_34709 = (state_34726[(8)]);
var inst_34709__$1 = (state_34726[(2)]);
var inst_34710 = (inst_34709__$1 == null);
var state_34726__$1 = (function (){var statearr_34733 = state_34726;
(statearr_34733[(8)] = inst_34709__$1);

return statearr_34733;
})();
if(cljs.core.truth_(inst_34710)){
var statearr_34734_37133 = state_34726__$1;
(statearr_34734_37133[(1)] = (5));

} else {
var statearr_34735_37134 = state_34726__$1;
(statearr_34735_37134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34727 === (6))){
var inst_34713 = (state_34726[(9)]);
var inst_34706 = (state_34726[(7)]);
var inst_34709 = (state_34726[(8)]);
var inst_34713__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34706,inst_34709) : f.call(null,inst_34706,inst_34709));
var inst_34714 = cljs.core.reduced_QMARK_(inst_34713__$1);
var state_34726__$1 = (function (){var statearr_34737 = state_34726;
(statearr_34737[(9)] = inst_34713__$1);

return statearr_34737;
})();
if(inst_34714){
var statearr_34739_37137 = state_34726__$1;
(statearr_34739_37137[(1)] = (8));

} else {
var statearr_34740_37138 = state_34726__$1;
(statearr_34740_37138[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34727 === (3))){
var inst_34724 = (state_34726[(2)]);
var state_34726__$1 = state_34726;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34726__$1,inst_34724);
} else {
if((state_val_34727 === (2))){
var state_34726__$1 = state_34726;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34726__$1,(4),ch);
} else {
if((state_val_34727 === (9))){
var inst_34713 = (state_34726[(9)]);
var inst_34706 = inst_34713;
var state_34726__$1 = (function (){var statearr_34744 = state_34726;
(statearr_34744[(7)] = inst_34706);

return statearr_34744;
})();
var statearr_34745_37145 = state_34726__$1;
(statearr_34745_37145[(2)] = null);

(statearr_34745_37145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34727 === (5))){
var inst_34706 = (state_34726[(7)]);
var state_34726__$1 = state_34726;
var statearr_34746_37149 = state_34726__$1;
(statearr_34746_37149[(2)] = inst_34706);

(statearr_34746_37149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34727 === (10))){
var inst_34720 = (state_34726[(2)]);
var state_34726__$1 = state_34726;
var statearr_34747_37152 = state_34726__$1;
(statearr_34747_37152[(2)] = inst_34720);

(statearr_34747_37152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34727 === (8))){
var inst_34713 = (state_34726[(9)]);
var inst_34716 = cljs.core.deref(inst_34713);
var state_34726__$1 = state_34726;
var statearr_34748_37153 = state_34726__$1;
(statearr_34748_37153[(2)] = inst_34716);

(statearr_34748_37153[(1)] = (10));


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
var statearr_34749 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34749[(0)] = cljs$core$async$reduce_$_state_machine__34207__auto__);

(statearr_34749[(1)] = (1));

return statearr_34749;
});
var cljs$core$async$reduce_$_state_machine__34207__auto____1 = (function (state_34726){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34726);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34751){if((e34751 instanceof Object)){
var ex__34210__auto__ = e34751;
var statearr_34752_37160 = state_34726;
(statearr_34752_37160[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34751;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37161 = state_34726;
state_34726 = G__37161;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34207__auto__ = function(state_34726){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34207__auto____1.call(this,state_34726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34207__auto____0;
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34207__auto____1;
return cljs$core$async$reduce_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34753 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34753[(6)] = c__34273__auto__);

return statearr_34753;
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
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34762){
var state_val_34763 = (state_34762[(1)]);
if((state_val_34763 === (1))){
var inst_34754 = cljs.core.async.reduce(f__$1,init,ch);
var state_34762__$1 = state_34762;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34762__$1,(2),inst_34754);
} else {
if((state_val_34763 === (2))){
var inst_34756 = (state_34762[(2)]);
var inst_34757 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34756) : f__$1.call(null,inst_34756));
var state_34762__$1 = state_34762;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34762__$1,inst_34757);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34207__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34207__auto____0 = (function (){
var statearr_34764 = [null,null,null,null,null,null,null];
(statearr_34764[(0)] = cljs$core$async$transduce_$_state_machine__34207__auto__);

(statearr_34764[(1)] = (1));

return statearr_34764;
});
var cljs$core$async$transduce_$_state_machine__34207__auto____1 = (function (state_34762){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34762);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34765){if((e34765 instanceof Object)){
var ex__34210__auto__ = e34765;
var statearr_34766_37176 = state_34762;
(statearr_34766_37176[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34765;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37178 = state_34762;
state_34762 = G__37178;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34207__auto__ = function(state_34762){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34207__auto____1.call(this,state_34762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34207__auto____0;
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34207__auto____1;
return cljs$core$async$transduce_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34770 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34770[(6)] = c__34273__auto__);

return statearr_34770;
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
var G__34772 = arguments.length;
switch (G__34772) {
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
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34797){
var state_val_34798 = (state_34797[(1)]);
if((state_val_34798 === (7))){
var inst_34779 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
var statearr_34802_37192 = state_34797__$1;
(statearr_34802_37192[(2)] = inst_34779);

(statearr_34802_37192[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (1))){
var inst_34773 = cljs.core.seq(coll);
var inst_34774 = inst_34773;
var state_34797__$1 = (function (){var statearr_34803 = state_34797;
(statearr_34803[(7)] = inst_34774);

return statearr_34803;
})();
var statearr_34804_37194 = state_34797__$1;
(statearr_34804_37194[(2)] = null);

(statearr_34804_37194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (4))){
var inst_34774 = (state_34797[(7)]);
var inst_34777 = cljs.core.first(inst_34774);
var state_34797__$1 = state_34797;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34797__$1,(7),ch,inst_34777);
} else {
if((state_val_34798 === (13))){
var inst_34791 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
var statearr_34805_37201 = state_34797__$1;
(statearr_34805_37201[(2)] = inst_34791);

(statearr_34805_37201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (6))){
var inst_34782 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
if(cljs.core.truth_(inst_34782)){
var statearr_34806_37208 = state_34797__$1;
(statearr_34806_37208[(1)] = (8));

} else {
var statearr_34807_37209 = state_34797__$1;
(statearr_34807_37209[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (3))){
var inst_34795 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34797__$1,inst_34795);
} else {
if((state_val_34798 === (12))){
var state_34797__$1 = state_34797;
var statearr_34808_37212 = state_34797__$1;
(statearr_34808_37212[(2)] = null);

(statearr_34808_37212[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (2))){
var inst_34774 = (state_34797[(7)]);
var state_34797__$1 = state_34797;
if(cljs.core.truth_(inst_34774)){
var statearr_34809_37215 = state_34797__$1;
(statearr_34809_37215[(1)] = (4));

} else {
var statearr_34810_37216 = state_34797__$1;
(statearr_34810_37216[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (11))){
var inst_34788 = cljs.core.async.close_BANG_(ch);
var state_34797__$1 = state_34797;
var statearr_34811_37218 = state_34797__$1;
(statearr_34811_37218[(2)] = inst_34788);

(statearr_34811_37218[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (9))){
var state_34797__$1 = state_34797;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34812_37219 = state_34797__$1;
(statearr_34812_37219[(1)] = (11));

} else {
var statearr_34813_37220 = state_34797__$1;
(statearr_34813_37220[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (5))){
var inst_34774 = (state_34797[(7)]);
var state_34797__$1 = state_34797;
var statearr_34814_37222 = state_34797__$1;
(statearr_34814_37222[(2)] = inst_34774);

(statearr_34814_37222[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (10))){
var inst_34793 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
var statearr_34815_37225 = state_34797__$1;
(statearr_34815_37225[(2)] = inst_34793);

(statearr_34815_37225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (8))){
var inst_34774 = (state_34797[(7)]);
var inst_34784 = cljs.core.next(inst_34774);
var inst_34774__$1 = inst_34784;
var state_34797__$1 = (function (){var statearr_34816 = state_34797;
(statearr_34816[(7)] = inst_34774__$1);

return statearr_34816;
})();
var statearr_34817_37229 = state_34797__$1;
(statearr_34817_37229[(2)] = null);

(statearr_34817_37229[(1)] = (2));


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
var statearr_34818 = [null,null,null,null,null,null,null,null];
(statearr_34818[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34818[(1)] = (1));

return statearr_34818;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34797){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34797);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34819){if((e34819 instanceof Object)){
var ex__34210__auto__ = e34819;
var statearr_34820_37234 = state_34797;
(statearr_34820_37234[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34819;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37236 = state_34797;
state_34797 = G__37236;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34797){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34821 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34821[(6)] = c__34273__auto__);

return statearr_34821;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34835 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34835 = (function (ch,cs,meta34836){
this.ch = ch;
this.cs = cs;
this.meta34836 = meta34836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34837,meta34836__$1){
var self__ = this;
var _34837__$1 = this;
return (new cljs.core.async.t_cljs$core$async34835(self__.ch,self__.cs,meta34836__$1));
}));

(cljs.core.async.t_cljs$core$async34835.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34837){
var self__ = this;
var _34837__$1 = this;
return self__.meta34836;
}));

(cljs.core.async.t_cljs$core$async34835.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34835.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34835.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34835.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34835.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34835.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34835.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34836","meta34836",-820760856,null)], null);
}));

(cljs.core.async.t_cljs$core$async34835.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34835.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34835");

(cljs.core.async.t_cljs$core$async34835.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34835");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34835.
 */
cljs.core.async.__GT_t_cljs$core$async34835 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34835(ch__$1,cs__$1,meta34836){
return (new cljs.core.async.t_cljs$core$async34835(ch__$1,cs__$1,meta34836));
});

}

return (new cljs.core.async.t_cljs$core$async34835(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34273__auto___37283 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34978){
var state_val_34979 = (state_34978[(1)]);
if((state_val_34979 === (7))){
var inst_34974 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_34980_37285 = state_34978__$1;
(statearr_34980_37285[(2)] = inst_34974);

(statearr_34980_37285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (20))){
var inst_34877 = (state_34978[(7)]);
var inst_34889 = cljs.core.first(inst_34877);
var inst_34890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34889,(0),null);
var inst_34891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34889,(1),null);
var state_34978__$1 = (function (){var statearr_34981 = state_34978;
(statearr_34981[(8)] = inst_34890);

return statearr_34981;
})();
if(cljs.core.truth_(inst_34891)){
var statearr_34982_37286 = state_34978__$1;
(statearr_34982_37286[(1)] = (22));

} else {
var statearr_34983_37287 = state_34978__$1;
(statearr_34983_37287[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (27))){
var inst_34846 = (state_34978[(9)]);
var inst_34926 = (state_34978[(10)]);
var inst_34919 = (state_34978[(11)]);
var inst_34921 = (state_34978[(12)]);
var inst_34926__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34919,inst_34921);
var inst_34927 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34926__$1,inst_34846,done);
var state_34978__$1 = (function (){var statearr_34984 = state_34978;
(statearr_34984[(10)] = inst_34926__$1);

return statearr_34984;
})();
if(cljs.core.truth_(inst_34927)){
var statearr_34985_37294 = state_34978__$1;
(statearr_34985_37294[(1)] = (30));

} else {
var statearr_34986_37297 = state_34978__$1;
(statearr_34986_37297[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (1))){
var state_34978__$1 = state_34978;
var statearr_34987_37299 = state_34978__$1;
(statearr_34987_37299[(2)] = null);

(statearr_34987_37299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (24))){
var inst_34877 = (state_34978[(7)]);
var inst_34896 = (state_34978[(2)]);
var inst_34897 = cljs.core.next(inst_34877);
var inst_34855 = inst_34897;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34978__$1 = (function (){var statearr_34988 = state_34978;
(statearr_34988[(13)] = inst_34857);

(statearr_34988[(14)] = inst_34856);

(statearr_34988[(15)] = inst_34858);

(statearr_34988[(16)] = inst_34896);

(statearr_34988[(17)] = inst_34855);

return statearr_34988;
})();
var statearr_34989_37304 = state_34978__$1;
(statearr_34989_37304[(2)] = null);

(statearr_34989_37304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (39))){
var state_34978__$1 = state_34978;
var statearr_34993_37307 = state_34978__$1;
(statearr_34993_37307[(2)] = null);

(statearr_34993_37307[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (4))){
var inst_34846 = (state_34978[(9)]);
var inst_34846__$1 = (state_34978[(2)]);
var inst_34847 = (inst_34846__$1 == null);
var state_34978__$1 = (function (){var statearr_34994 = state_34978;
(statearr_34994[(9)] = inst_34846__$1);

return statearr_34994;
})();
if(cljs.core.truth_(inst_34847)){
var statearr_34995_37316 = state_34978__$1;
(statearr_34995_37316[(1)] = (5));

} else {
var statearr_34996_37318 = state_34978__$1;
(statearr_34996_37318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (15))){
var inst_34857 = (state_34978[(13)]);
var inst_34856 = (state_34978[(14)]);
var inst_34858 = (state_34978[(15)]);
var inst_34855 = (state_34978[(17)]);
var inst_34873 = (state_34978[(2)]);
var inst_34874 = (inst_34858 + (1));
var tmp34990 = inst_34857;
var tmp34991 = inst_34856;
var tmp34992 = inst_34855;
var inst_34855__$1 = tmp34992;
var inst_34856__$1 = tmp34991;
var inst_34857__$1 = tmp34990;
var inst_34858__$1 = inst_34874;
var state_34978__$1 = (function (){var statearr_34997 = state_34978;
(statearr_34997[(18)] = inst_34873);

(statearr_34997[(13)] = inst_34857__$1);

(statearr_34997[(14)] = inst_34856__$1);

(statearr_34997[(15)] = inst_34858__$1);

(statearr_34997[(17)] = inst_34855__$1);

return statearr_34997;
})();
var statearr_34998_37323 = state_34978__$1;
(statearr_34998_37323[(2)] = null);

(statearr_34998_37323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (21))){
var inst_34900 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35002_37326 = state_34978__$1;
(statearr_35002_37326[(2)] = inst_34900);

(statearr_35002_37326[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (31))){
var inst_34926 = (state_34978[(10)]);
var inst_34930 = done(null);
var inst_34931 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34926);
var state_34978__$1 = (function (){var statearr_35003 = state_34978;
(statearr_35003[(19)] = inst_34930);

return statearr_35003;
})();
var statearr_35004_37333 = state_34978__$1;
(statearr_35004_37333[(2)] = inst_34931);

(statearr_35004_37333[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (32))){
var inst_34918 = (state_34978[(20)]);
var inst_34919 = (state_34978[(11)]);
var inst_34920 = (state_34978[(21)]);
var inst_34921 = (state_34978[(12)]);
var inst_34933 = (state_34978[(2)]);
var inst_34934 = (inst_34921 + (1));
var tmp34999 = inst_34918;
var tmp35000 = inst_34919;
var tmp35001 = inst_34920;
var inst_34918__$1 = tmp34999;
var inst_34919__$1 = tmp35000;
var inst_34920__$1 = tmp35001;
var inst_34921__$1 = inst_34934;
var state_34978__$1 = (function (){var statearr_35005 = state_34978;
(statearr_35005[(20)] = inst_34918__$1);

(statearr_35005[(22)] = inst_34933);

(statearr_35005[(11)] = inst_34919__$1);

(statearr_35005[(21)] = inst_34920__$1);

(statearr_35005[(12)] = inst_34921__$1);

return statearr_35005;
})();
var statearr_35006_37342 = state_34978__$1;
(statearr_35006_37342[(2)] = null);

(statearr_35006_37342[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (40))){
var inst_34946 = (state_34978[(23)]);
var inst_34950 = done(null);
var inst_34951 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34946);
var state_34978__$1 = (function (){var statearr_35007 = state_34978;
(statearr_35007[(24)] = inst_34950);

return statearr_35007;
})();
var statearr_35008_37351 = state_34978__$1;
(statearr_35008_37351[(2)] = inst_34951);

(statearr_35008_37351[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (33))){
var inst_34937 = (state_34978[(25)]);
var inst_34939 = cljs.core.chunked_seq_QMARK_(inst_34937);
var state_34978__$1 = state_34978;
if(inst_34939){
var statearr_35009_37352 = state_34978__$1;
(statearr_35009_37352[(1)] = (36));

} else {
var statearr_35010_37353 = state_34978__$1;
(statearr_35010_37353[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (13))){
var inst_34867 = (state_34978[(26)]);
var inst_34870 = cljs.core.async.close_BANG_(inst_34867);
var state_34978__$1 = state_34978;
var statearr_35011_37356 = state_34978__$1;
(statearr_35011_37356[(2)] = inst_34870);

(statearr_35011_37356[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (22))){
var inst_34890 = (state_34978[(8)]);
var inst_34893 = cljs.core.async.close_BANG_(inst_34890);
var state_34978__$1 = state_34978;
var statearr_35012_37359 = state_34978__$1;
(statearr_35012_37359[(2)] = inst_34893);

(statearr_35012_37359[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (36))){
var inst_34937 = (state_34978[(25)]);
var inst_34941 = cljs.core.chunk_first(inst_34937);
var inst_34942 = cljs.core.chunk_rest(inst_34937);
var inst_34943 = cljs.core.count(inst_34941);
var inst_34918 = inst_34942;
var inst_34919 = inst_34941;
var inst_34920 = inst_34943;
var inst_34921 = (0);
var state_34978__$1 = (function (){var statearr_35013 = state_34978;
(statearr_35013[(20)] = inst_34918);

(statearr_35013[(11)] = inst_34919);

(statearr_35013[(21)] = inst_34920);

(statearr_35013[(12)] = inst_34921);

return statearr_35013;
})();
var statearr_35014_37367 = state_34978__$1;
(statearr_35014_37367[(2)] = null);

(statearr_35014_37367[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (41))){
var inst_34937 = (state_34978[(25)]);
var inst_34953 = (state_34978[(2)]);
var inst_34954 = cljs.core.next(inst_34937);
var inst_34918 = inst_34954;
var inst_34919 = null;
var inst_34920 = (0);
var inst_34921 = (0);
var state_34978__$1 = (function (){var statearr_35015 = state_34978;
(statearr_35015[(20)] = inst_34918);

(statearr_35015[(11)] = inst_34919);

(statearr_35015[(21)] = inst_34920);

(statearr_35015[(27)] = inst_34953);

(statearr_35015[(12)] = inst_34921);

return statearr_35015;
})();
var statearr_35016_37370 = state_34978__$1;
(statearr_35016_37370[(2)] = null);

(statearr_35016_37370[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (43))){
var state_34978__$1 = state_34978;
var statearr_35017_37372 = state_34978__$1;
(statearr_35017_37372[(2)] = null);

(statearr_35017_37372[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (29))){
var inst_34962 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35018_37378 = state_34978__$1;
(statearr_35018_37378[(2)] = inst_34962);

(statearr_35018_37378[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (44))){
var inst_34971 = (state_34978[(2)]);
var state_34978__$1 = (function (){var statearr_35019 = state_34978;
(statearr_35019[(28)] = inst_34971);

return statearr_35019;
})();
var statearr_35020_37380 = state_34978__$1;
(statearr_35020_37380[(2)] = null);

(statearr_35020_37380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (6))){
var inst_34910 = (state_34978[(29)]);
var inst_34909 = cljs.core.deref(cs);
var inst_34910__$1 = cljs.core.keys(inst_34909);
var inst_34911 = cljs.core.count(inst_34910__$1);
var inst_34912 = cljs.core.reset_BANG_(dctr,inst_34911);
var inst_34917 = cljs.core.seq(inst_34910__$1);
var inst_34918 = inst_34917;
var inst_34919 = null;
var inst_34920 = (0);
var inst_34921 = (0);
var state_34978__$1 = (function (){var statearr_35021 = state_34978;
(statearr_35021[(20)] = inst_34918);

(statearr_35021[(29)] = inst_34910__$1);

(statearr_35021[(11)] = inst_34919);

(statearr_35021[(21)] = inst_34920);

(statearr_35021[(12)] = inst_34921);

(statearr_35021[(30)] = inst_34912);

return statearr_35021;
})();
var statearr_35022_37387 = state_34978__$1;
(statearr_35022_37387[(2)] = null);

(statearr_35022_37387[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (28))){
var inst_34918 = (state_34978[(20)]);
var inst_34937 = (state_34978[(25)]);
var inst_34937__$1 = cljs.core.seq(inst_34918);
var state_34978__$1 = (function (){var statearr_35023 = state_34978;
(statearr_35023[(25)] = inst_34937__$1);

return statearr_35023;
})();
if(inst_34937__$1){
var statearr_35024_37389 = state_34978__$1;
(statearr_35024_37389[(1)] = (33));

} else {
var statearr_35027_37390 = state_34978__$1;
(statearr_35027_37390[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (25))){
var inst_34920 = (state_34978[(21)]);
var inst_34921 = (state_34978[(12)]);
var inst_34923 = (inst_34921 < inst_34920);
var inst_34924 = inst_34923;
var state_34978__$1 = state_34978;
if(cljs.core.truth_(inst_34924)){
var statearr_35029_37398 = state_34978__$1;
(statearr_35029_37398[(1)] = (27));

} else {
var statearr_35031_37399 = state_34978__$1;
(statearr_35031_37399[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (34))){
var state_34978__$1 = state_34978;
var statearr_35033_37400 = state_34978__$1;
(statearr_35033_37400[(2)] = null);

(statearr_35033_37400[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (17))){
var state_34978__$1 = state_34978;
var statearr_35035_37402 = state_34978__$1;
(statearr_35035_37402[(2)] = null);

(statearr_35035_37402[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (3))){
var inst_34976 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34978__$1,inst_34976);
} else {
if((state_val_34979 === (12))){
var inst_34905 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35036_37404 = state_34978__$1;
(statearr_35036_37404[(2)] = inst_34905);

(statearr_35036_37404[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (2))){
var state_34978__$1 = state_34978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34978__$1,(4),ch);
} else {
if((state_val_34979 === (23))){
var state_34978__$1 = state_34978;
var statearr_35040_37409 = state_34978__$1;
(statearr_35040_37409[(2)] = null);

(statearr_35040_37409[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (35))){
var inst_34960 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35043_37413 = state_34978__$1;
(statearr_35043_37413[(2)] = inst_34960);

(statearr_35043_37413[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (19))){
var inst_34877 = (state_34978[(7)]);
var inst_34881 = cljs.core.chunk_first(inst_34877);
var inst_34882 = cljs.core.chunk_rest(inst_34877);
var inst_34883 = cljs.core.count(inst_34881);
var inst_34855 = inst_34882;
var inst_34856 = inst_34881;
var inst_34857 = inst_34883;
var inst_34858 = (0);
var state_34978__$1 = (function (){var statearr_35045 = state_34978;
(statearr_35045[(13)] = inst_34857);

(statearr_35045[(14)] = inst_34856);

(statearr_35045[(15)] = inst_34858);

(statearr_35045[(17)] = inst_34855);

return statearr_35045;
})();
var statearr_35046_37419 = state_34978__$1;
(statearr_35046_37419[(2)] = null);

(statearr_35046_37419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (11))){
var inst_34855 = (state_34978[(17)]);
var inst_34877 = (state_34978[(7)]);
var inst_34877__$1 = cljs.core.seq(inst_34855);
var state_34978__$1 = (function (){var statearr_35047 = state_34978;
(statearr_35047[(7)] = inst_34877__$1);

return statearr_35047;
})();
if(inst_34877__$1){
var statearr_35048_37420 = state_34978__$1;
(statearr_35048_37420[(1)] = (16));

} else {
var statearr_35049_37421 = state_34978__$1;
(statearr_35049_37421[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (9))){
var inst_34907 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35050_37425 = state_34978__$1;
(statearr_35050_37425[(2)] = inst_34907);

(statearr_35050_37425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (5))){
var inst_34853 = cljs.core.deref(cs);
var inst_34854 = cljs.core.seq(inst_34853);
var inst_34855 = inst_34854;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34978__$1 = (function (){var statearr_35052 = state_34978;
(statearr_35052[(13)] = inst_34857);

(statearr_35052[(14)] = inst_34856);

(statearr_35052[(15)] = inst_34858);

(statearr_35052[(17)] = inst_34855);

return statearr_35052;
})();
var statearr_35054_37429 = state_34978__$1;
(statearr_35054_37429[(2)] = null);

(statearr_35054_37429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (14))){
var state_34978__$1 = state_34978;
var statearr_35057_37433 = state_34978__$1;
(statearr_35057_37433[(2)] = null);

(statearr_35057_37433[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (45))){
var inst_34968 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35060_37434 = state_34978__$1;
(statearr_35060_37434[(2)] = inst_34968);

(statearr_35060_37434[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (26))){
var inst_34910 = (state_34978[(29)]);
var inst_34964 = (state_34978[(2)]);
var inst_34965 = cljs.core.seq(inst_34910);
var state_34978__$1 = (function (){var statearr_35061 = state_34978;
(statearr_35061[(31)] = inst_34964);

return statearr_35061;
})();
if(inst_34965){
var statearr_35062_37438 = state_34978__$1;
(statearr_35062_37438[(1)] = (42));

} else {
var statearr_35063_37442 = state_34978__$1;
(statearr_35063_37442[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (16))){
var inst_34877 = (state_34978[(7)]);
var inst_34879 = cljs.core.chunked_seq_QMARK_(inst_34877);
var state_34978__$1 = state_34978;
if(inst_34879){
var statearr_35064_37449 = state_34978__$1;
(statearr_35064_37449[(1)] = (19));

} else {
var statearr_35065_37451 = state_34978__$1;
(statearr_35065_37451[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (38))){
var inst_34957 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35066_37453 = state_34978__$1;
(statearr_35066_37453[(2)] = inst_34957);

(statearr_35066_37453[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (30))){
var state_34978__$1 = state_34978;
var statearr_35069_37455 = state_34978__$1;
(statearr_35069_37455[(2)] = null);

(statearr_35069_37455[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (10))){
var inst_34856 = (state_34978[(14)]);
var inst_34858 = (state_34978[(15)]);
var inst_34866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34856,inst_34858);
var inst_34867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(0),null);
var inst_34868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(1),null);
var state_34978__$1 = (function (){var statearr_35072 = state_34978;
(statearr_35072[(26)] = inst_34867);

return statearr_35072;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_35075_37466 = state_34978__$1;
(statearr_35075_37466[(1)] = (13));

} else {
var statearr_35076_37468 = state_34978__$1;
(statearr_35076_37468[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (18))){
var inst_34903 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35077_37471 = state_34978__$1;
(statearr_35077_37471[(2)] = inst_34903);

(statearr_35077_37471[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (42))){
var state_34978__$1 = state_34978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34978__$1,(45),dchan);
} else {
if((state_val_34979 === (37))){
var inst_34946 = (state_34978[(23)]);
var inst_34846 = (state_34978[(9)]);
var inst_34937 = (state_34978[(25)]);
var inst_34946__$1 = cljs.core.first(inst_34937);
var inst_34947 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34946__$1,inst_34846,done);
var state_34978__$1 = (function (){var statearr_35079 = state_34978;
(statearr_35079[(23)] = inst_34946__$1);

return statearr_35079;
})();
if(cljs.core.truth_(inst_34947)){
var statearr_35082_37478 = state_34978__$1;
(statearr_35082_37478[(1)] = (39));

} else {
var statearr_35084_37479 = state_34978__$1;
(statearr_35084_37479[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (8))){
var inst_34857 = (state_34978[(13)]);
var inst_34858 = (state_34978[(15)]);
var inst_34860 = (inst_34858 < inst_34857);
var inst_34861 = inst_34860;
var state_34978__$1 = state_34978;
if(cljs.core.truth_(inst_34861)){
var statearr_35085_37486 = state_34978__$1;
(statearr_35085_37486[(1)] = (10));

} else {
var statearr_35098_37488 = state_34978__$1;
(statearr_35098_37488[(1)] = (11));

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
var statearr_35103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35103[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35103[(1)] = (1));

return statearr_35103;
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
}catch (e35106){if((e35106 instanceof Object)){
var ex__34210__auto__ = e35106;
var statearr_35108_37497 = state_34978;
(statearr_35108_37497[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35106;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37499 = state_34978;
state_34978 = G__37499;
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
var state__34275__auto__ = (function (){var statearr_35110 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_35110[(6)] = c__34273__auto___37283);

return statearr_35110;
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
var G__35123 = arguments.length;
switch (G__35123) {
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
var len__4789__auto___37548 = arguments.length;
var i__4790__auto___37552 = (0);
while(true){
if((i__4790__auto___37552 < len__4789__auto___37548)){
args__4795__auto__.push((arguments[i__4790__auto___37552]));

var G__37554 = (i__4790__auto___37552 + (1));
i__4790__auto___37552 = G__37554;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35233){
var map__35235 = p__35233;
var map__35235__$1 = (((((!((map__35235 == null))))?(((((map__35235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35235):map__35235);
var opts = map__35235__$1;
var statearr_35242_37561 = state;
(statearr_35242_37561[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35251_37569 = state;
(statearr_35251_37569[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35258_37572 = state;
(statearr_35258_37572[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35221){
var G__35222 = cljs.core.first(seq35221);
var seq35221__$1 = cljs.core.next(seq35221);
var G__35223 = cljs.core.first(seq35221__$1);
var seq35221__$2 = cljs.core.next(seq35221__$1);
var G__35224 = cljs.core.first(seq35221__$2);
var seq35221__$3 = cljs.core.next(seq35221__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35222,G__35223,G__35224,seq35221__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35306 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35306 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35307){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35307 = meta35307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35308,meta35307__$1){
var self__ = this;
var _35308__$1 = this;
return (new cljs.core.async.t_cljs$core$async35306(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35307__$1));
}));

(cljs.core.async.t_cljs$core$async35306.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35308){
var self__ = this;
var _35308__$1 = this;
return self__.meta35307;
}));

(cljs.core.async.t_cljs$core$async35306.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35306.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35306.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35306.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35306.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35306.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35306.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35306.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35306.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35307","meta35307",-1432114123,null)], null);
}));

(cljs.core.async.t_cljs$core$async35306.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35306.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35306");

(cljs.core.async.t_cljs$core$async35306.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35306");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35306.
 */
cljs.core.async.__GT_t_cljs$core$async35306 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35306(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35307){
return (new cljs.core.async.t_cljs$core$async35306(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35307));
});

}

return (new cljs.core.async.t_cljs$core$async35306(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34273__auto___37637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_35488){
var state_val_35492 = (state_35488[(1)]);
if((state_val_35492 === (7))){
var inst_35388 = (state_35488[(2)]);
var state_35488__$1 = state_35488;
var statearr_35504_37641 = state_35488__$1;
(statearr_35504_37641[(2)] = inst_35388);

(statearr_35504_37641[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35492 === (20))){
var inst_35400 = (state_35488[(7)]);
var state_35488__$1 = state_35488;
var statearr_35506_37643 = state_35488__$1;
(statearr_35506_37643[(2)] = inst_35400);

(statearr_35506_37643[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35492 === (27))){
var state_35488__$1 = state_35488;
var statearr_35507_37648 = state_35488__$1;
(statearr_35507_37648[(2)] = null);

(statearr_35507_37648[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35492 === (1))){
var inst_35375 = (state_35488[(8)]);
var inst_35375__$1 = calc_state();
var inst_35377 = (inst_35375__$1 == null);
var inst_35378 = cljs.core.not(inst_35377);
var state_35488__$1 = (function (){var statearr_35511 = state_35488;
(statearr_35511[(8)] = inst_35375__$1);

return statearr_35511;
})();
if(inst_35378){
var statearr_35513_37653 = state_35488__$1;
(statearr_35513_37653[(1)] = (2));

} else {
var statearr_35516_37655 = state_35488__$1;
(statearr_35516_37655[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35492 === (24))){
var inst_35424 = (state_35488[(9)]);
var inst_35435 = (state_35488[(10)]);
var inst_35453 = (state_35488[(11)]);
var inst_35453__$1 = (inst_35424.cljs$core$IFn$_invoke$arity$1 ? inst_35424.cljs$core$IFn$_invoke$arity$1(inst_35435) : inst_35424.call(null,inst_35435));
var state_35488__$1 = (function (){var statearr_35520 = state_35488;
(statearr_35520[(11)] = inst_35453__$1);

return statearr_35520;
})();
if(cljs.core.truth_(inst_35453__$1)){
var statearr_35521_37662 = state_35488__$1;
(statearr_35521_37662[(1)] = (29));

} else {
var statearr_35524_37663 = state_35488__$1;
(statearr_35524_37663[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35492 === (4))){
var inst_35391 = (state_35488[(2)]);
var state_35488__$1 = state_35488;
if(cljs.core.truth_(inst_35391)){
var statearr_35527_37665 = state_35488__$1;
(statearr_35527_37665[(1)] = (8));

} else {
var statearr_35529_37667 = state_35488__$1;
(statearr_35529_37667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35492 === (15))){
var inst_35418 = (state_35488[(2)]);
var state_35488__$1 = state_35488;
if(cljs.core.truth_(inst_35418)){
var statearr_35535_37670 = state_35488__$1;
(statearr_35535_37670[(1)] = (19));

} else {
var statearr_35537_37671 = state_35488__$1;
(statearr_35537_37671[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35492 === (21))){
var inst_35423 = (state_35488[(12)]);
var inst_35423__$1 = (state_35488[(2)]);
var inst_35424 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35423__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35425 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35423__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35423__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35488__$1 = (function (){var statearr_35544 = state_35488;
(statearr_35544[(12)] = inst_35423__$1);

(statearr_35544[(9)] = inst_35424);

(statearr_35544[(13)] = inst_35425);

return statearr_35544;
})();
return cljs.core.async.ioc_alts_BANG_(state_35488__$1,(22),inst_35426);
} else {
if((state_val_35492 === (31))){
var inst_35464 = (state_35488[(2)]);
var state_35488__$1 = state_35488;
if(cljs.core.truth_(inst_35464)){
var statearr_35545_37675 = state_35488__$1;
(statearr_35545_37675[(1)] = (32));

} else {
var statearr_35546_37676 = state_35488__$1;
(statearr_35546_37676[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35492 === (32))){
var inst_35434 = (state_35488[(14)]);
var state_35488__$1 = state_35488;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35488__$1,(35),out,inst_35434);
} else {
if((state_val_35492 === (33))){
var inst_35423 = (state_35488[(12)]);
var inst_35400 = inst_35423;
var state_35488__$1 = (function (){var statearr_35551 = state_35488;
(statearr_35551[(7)] = inst_35400);

return statearr_35551;
})();
var statearr_35562_37677 = state_35488__$1;
(statearr_35562_37677[(2)] = null);

(statearr_35562_37677[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35492 === (13))){
var inst_35400 = (state_35488[(7)]);
var inst_35407 = inst_35400.cljs$lang$protocol_mask$partition0$;
var inst_35408 = (inst_35407 & (64));
var inst_35409 = inst_35400.cljs$core$ISeq$;
var inst_35410 = (cljs.core.PROTOCOL_SENTINEL === inst_35409);
var inst_35411 = ((inst_35408) || (inst_35410));
var state_35488__$1 = state_35488;
if(cljs.core.truth_(inst_35411)){
var statearr_35574_37680 = state_35488__$1;
(statearr_35574_37680[(1)] = (16));

} else {
var statearr_35575_37681 = state_35488__$1;
(statearr_35575_37681[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35492 === (22))){
var inst_35434 = (state_35488[(14)]);
var inst_35435 = (state_35488[(10)]);
var inst_35432 = (state_35488[(2)]);
var inst_35434__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35432,(0),null);
var inst_35435__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35432,(1),null);
var inst_35436 = (inst_35434__$1 == null);
var inst_35437 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35435__$1,change);
var inst_35438 = ((inst_35436) || (inst_35437));
var state_35488__$1 = (function (){var statearr_35580 = state_35488;
(statearr_35580[(14)] = inst_35434__$1);

(statearr_35580[(10)] = inst_35435__$1);

return statearr_35580;
})();
if(cljs.core.truth_(inst_35438)){
var statearr_35581_37686 = state_35488__$1;
(statearr_35581_37686[(1)] = (23));

} else {
var statearr_35582_37690 = state_35488__$1;
(statearr_35582_37690[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35492 === (36))){
var inst_35423 = (state_35488[(12)]);
var inst_35400 = inst_35423;
var state_35488__$1 = (function (){var statearr_35584 = state_35488;
(statearr_35584[(7)] = inst_35400);

return statearr_35584;
})();
var statearr_35586_37691 = state_35488__$1;
(statearr_35586_37691[(2)] = null);

(statearr_35586_37691[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35492 === (29))){
var inst_35453 = (state_35488[(11)]);
var state_35488__$1 = state_35488;
var statearr_35592_37693 = state_35488__$1;
(statearr_35592_37693[(2)] = inst_35453);

(statearr_35592_37693[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35492 === (6))){
var state_35488__$1 = state_35488;
var statearr_35596_37694 = state_35488__$1;
(statearr_35596_37694[(2)] = false);

(statearr_35596_37694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35492 === (28))){
var inst_35445 = (state_35488[(2)]);
var inst_35448 = calc_state();
var inst_35400 = inst_35448;
var state_35488__$1 = (function (){var statearr_35603 = state_35488;
(statearr_35603[(15)] = inst_35445);

(statearr_35603[(7)] = inst_35400);

return statearr_35603;
})();
var statearr_35616_37696 = state_35488__$1;
(statearr_35616_37696[(2)] = null);

(statearr_35616_37696[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35492 === (25))){
var inst_35482 = (state_35488[(2)]);
var state_35488__$1 = state_35488;
var statearr_35626_37697 = state_35488__$1;
(statearr_35626_37697[(2)] = inst_35482);

(statearr_35626_37697[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35492 === (34))){
var inst_35480 = (state_35488[(2)]);
var state_35488__$1 = state_35488;
var statearr_35634_37699 = state_35488__$1;
(statearr_35634_37699[(2)] = inst_35480);

(statearr_35634_37699[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35492 === (17))){
var state_35488__$1 = state_35488;
var statearr_35639_37703 = state_35488__$1;
(statearr_35639_37703[(2)] = false);

(statearr_35639_37703[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35492 === (3))){
var state_35488__$1 = state_35488;
var statearr_35645_37709 = state_35488__$1;
(statearr_35645_37709[(2)] = false);

(statearr_35645_37709[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35492 === (12))){
var inst_35484 = (state_35488[(2)]);
var state_35488__$1 = state_35488;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35488__$1,inst_35484);
} else {
if((state_val_35492 === (2))){
var inst_35375 = (state_35488[(8)]);
var inst_35380 = inst_35375.cljs$lang$protocol_mask$partition0$;
var inst_35381 = (inst_35380 & (64));
var inst_35382 = inst_35375.cljs$core$ISeq$;
var inst_35383 = (cljs.core.PROTOCOL_SENTINEL === inst_35382);
var inst_35384 = ((inst_35381) || (inst_35383));
var state_35488__$1 = state_35488;
if(cljs.core.truth_(inst_35384)){
var statearr_35656_37714 = state_35488__$1;
(statearr_35656_37714[(1)] = (5));

} else {
var statearr_35658_37715 = state_35488__$1;
(statearr_35658_37715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35492 === (23))){
var inst_35434 = (state_35488[(14)]);
var inst_35440 = (inst_35434 == null);
var state_35488__$1 = state_35488;
if(cljs.core.truth_(inst_35440)){
var statearr_35664_37717 = state_35488__$1;
(statearr_35664_37717[(1)] = (26));

} else {
var statearr_35666_37718 = state_35488__$1;
(statearr_35666_37718[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35492 === (35))){
var inst_35467 = (state_35488[(2)]);
var state_35488__$1 = state_35488;
if(cljs.core.truth_(inst_35467)){
var statearr_35677_37722 = state_35488__$1;
(statearr_35677_37722[(1)] = (36));

} else {
var statearr_35680_37723 = state_35488__$1;
(statearr_35680_37723[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35492 === (19))){
var inst_35400 = (state_35488[(7)]);
var inst_35420 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35400);
var state_35488__$1 = state_35488;
var statearr_35686_37725 = state_35488__$1;
(statearr_35686_37725[(2)] = inst_35420);

(statearr_35686_37725[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35492 === (11))){
var inst_35400 = (state_35488[(7)]);
var inst_35404 = (inst_35400 == null);
var inst_35405 = cljs.core.not(inst_35404);
var state_35488__$1 = state_35488;
if(inst_35405){
var statearr_35694_37731 = state_35488__$1;
(statearr_35694_37731[(1)] = (13));

} else {
var statearr_35698_37735 = state_35488__$1;
(statearr_35698_37735[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35492 === (9))){
var inst_35375 = (state_35488[(8)]);
var state_35488__$1 = state_35488;
var statearr_35703_37737 = state_35488__$1;
(statearr_35703_37737[(2)] = inst_35375);

(statearr_35703_37737[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35492 === (5))){
var state_35488__$1 = state_35488;
var statearr_35706_37739 = state_35488__$1;
(statearr_35706_37739[(2)] = true);

(statearr_35706_37739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35492 === (14))){
var state_35488__$1 = state_35488;
var statearr_35712_37741 = state_35488__$1;
(statearr_35712_37741[(2)] = false);

(statearr_35712_37741[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35492 === (26))){
var inst_35435 = (state_35488[(10)]);
var inst_35442 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35435);
var state_35488__$1 = state_35488;
var statearr_35717_37748 = state_35488__$1;
(statearr_35717_37748[(2)] = inst_35442);

(statearr_35717_37748[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35492 === (16))){
var state_35488__$1 = state_35488;
var statearr_35721_37750 = state_35488__$1;
(statearr_35721_37750[(2)] = true);

(statearr_35721_37750[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35492 === (38))){
var inst_35476 = (state_35488[(2)]);
var state_35488__$1 = state_35488;
var statearr_35722_37752 = state_35488__$1;
(statearr_35722_37752[(2)] = inst_35476);

(statearr_35722_37752[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35492 === (30))){
var inst_35424 = (state_35488[(9)]);
var inst_35435 = (state_35488[(10)]);
var inst_35425 = (state_35488[(13)]);
var inst_35459 = cljs.core.empty_QMARK_(inst_35424);
var inst_35460 = (inst_35425.cljs$core$IFn$_invoke$arity$1 ? inst_35425.cljs$core$IFn$_invoke$arity$1(inst_35435) : inst_35425.call(null,inst_35435));
var inst_35461 = cljs.core.not(inst_35460);
var inst_35462 = ((inst_35459) && (inst_35461));
var state_35488__$1 = state_35488;
var statearr_35723_37760 = state_35488__$1;
(statearr_35723_37760[(2)] = inst_35462);

(statearr_35723_37760[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35492 === (10))){
var inst_35375 = (state_35488[(8)]);
var inst_35396 = (state_35488[(2)]);
var inst_35397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35396,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35396,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35396,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35400 = inst_35375;
var state_35488__$1 = (function (){var statearr_35726 = state_35488;
(statearr_35726[(16)] = inst_35399);

(statearr_35726[(17)] = inst_35398);

(statearr_35726[(18)] = inst_35397);

(statearr_35726[(7)] = inst_35400);

return statearr_35726;
})();
var statearr_35727_37770 = state_35488__$1;
(statearr_35727_37770[(2)] = null);

(statearr_35727_37770[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35492 === (18))){
var inst_35415 = (state_35488[(2)]);
var state_35488__$1 = state_35488;
var statearr_35728_37772 = state_35488__$1;
(statearr_35728_37772[(2)] = inst_35415);

(statearr_35728_37772[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35492 === (37))){
var state_35488__$1 = state_35488;
var statearr_35729_37774 = state_35488__$1;
(statearr_35729_37774[(2)] = null);

(statearr_35729_37774[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35492 === (8))){
var inst_35375 = (state_35488[(8)]);
var inst_35393 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35375);
var state_35488__$1 = state_35488;
var statearr_35732_37776 = state_35488__$1;
(statearr_35732_37776[(2)] = inst_35393);

(statearr_35732_37776[(1)] = (10));


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
var statearr_35733 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35733[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35733[(1)] = (1));

return statearr_35733;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35488){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35488);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35734){if((e35734 instanceof Object)){
var ex__34210__auto__ = e35734;
var statearr_35735_37786 = state_35488;
(statearr_35735_37786[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35734;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37788 = state_35488;
state_35488 = G__37788;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35488){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_35740 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_35740[(6)] = c__34273__auto___37637);

return statearr_35740;
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
var G__35758 = arguments.length;
switch (G__35758) {
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
var G__35779 = arguments.length;
switch (G__35779) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35770_SHARP_){
if(cljs.core.truth_((p1__35770_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35770_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35770_SHARP_.call(null,topic)))){
return p1__35770_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35770_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35795 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35795 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35796){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35796 = meta35796;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35797,meta35796__$1){
var self__ = this;
var _35797__$1 = this;
return (new cljs.core.async.t_cljs$core$async35795(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35796__$1));
}));

(cljs.core.async.t_cljs$core$async35795.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35797){
var self__ = this;
var _35797__$1 = this;
return self__.meta35796;
}));

(cljs.core.async.t_cljs$core$async35795.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35795.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35795.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35795.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35795.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35795.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35795.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35795.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35796","meta35796",613002915,null)], null);
}));

(cljs.core.async.t_cljs$core$async35795.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35795.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35795");

(cljs.core.async.t_cljs$core$async35795.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35795");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35795.
 */
cljs.core.async.__GT_t_cljs$core$async35795 = (function cljs$core$async$__GT_t_cljs$core$async35795(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35796){
return (new cljs.core.async.t_cljs$core$async35795(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35796));
});

}

return (new cljs.core.async.t_cljs$core$async35795(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34273__auto___37857 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_35907){
var state_val_35908 = (state_35907[(1)]);
if((state_val_35908 === (7))){
var inst_35901 = (state_35907[(2)]);
var state_35907__$1 = state_35907;
var statearr_35912_37860 = state_35907__$1;
(statearr_35912_37860[(2)] = inst_35901);

(statearr_35912_37860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35908 === (20))){
var state_35907__$1 = state_35907;
var statearr_35915_37863 = state_35907__$1;
(statearr_35915_37863[(2)] = null);

(statearr_35915_37863[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35908 === (1))){
var state_35907__$1 = state_35907;
var statearr_35918_37864 = state_35907__$1;
(statearr_35918_37864[(2)] = null);

(statearr_35918_37864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35908 === (24))){
var inst_35880 = (state_35907[(7)]);
var inst_35892 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35880);
var state_35907__$1 = state_35907;
var statearr_35919_37866 = state_35907__$1;
(statearr_35919_37866[(2)] = inst_35892);

(statearr_35919_37866[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35908 === (4))){
var inst_35825 = (state_35907[(8)]);
var inst_35825__$1 = (state_35907[(2)]);
var inst_35826 = (inst_35825__$1 == null);
var state_35907__$1 = (function (){var statearr_35922 = state_35907;
(statearr_35922[(8)] = inst_35825__$1);

return statearr_35922;
})();
if(cljs.core.truth_(inst_35826)){
var statearr_35924_37868 = state_35907__$1;
(statearr_35924_37868[(1)] = (5));

} else {
var statearr_35925_37870 = state_35907__$1;
(statearr_35925_37870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35908 === (15))){
var inst_35874 = (state_35907[(2)]);
var state_35907__$1 = state_35907;
var statearr_35930_37874 = state_35907__$1;
(statearr_35930_37874[(2)] = inst_35874);

(statearr_35930_37874[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35908 === (21))){
var inst_35897 = (state_35907[(2)]);
var state_35907__$1 = (function (){var statearr_35931 = state_35907;
(statearr_35931[(9)] = inst_35897);

return statearr_35931;
})();
var statearr_35932_37876 = state_35907__$1;
(statearr_35932_37876[(2)] = null);

(statearr_35932_37876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35908 === (13))){
var inst_35853 = (state_35907[(10)]);
var inst_35855 = cljs.core.chunked_seq_QMARK_(inst_35853);
var state_35907__$1 = state_35907;
if(inst_35855){
var statearr_35936_37881 = state_35907__$1;
(statearr_35936_37881[(1)] = (16));

} else {
var statearr_35937_37882 = state_35907__$1;
(statearr_35937_37882[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35908 === (22))){
var inst_35886 = (state_35907[(2)]);
var state_35907__$1 = state_35907;
if(cljs.core.truth_(inst_35886)){
var statearr_35938_37883 = state_35907__$1;
(statearr_35938_37883[(1)] = (23));

} else {
var statearr_35939_37885 = state_35907__$1;
(statearr_35939_37885[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35908 === (6))){
var inst_35882 = (state_35907[(11)]);
var inst_35825 = (state_35907[(8)]);
var inst_35880 = (state_35907[(7)]);
var inst_35880__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35825) : topic_fn.call(null,inst_35825));
var inst_35881 = cljs.core.deref(mults);
var inst_35882__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35881,inst_35880__$1);
var state_35907__$1 = (function (){var statearr_35944 = state_35907;
(statearr_35944[(11)] = inst_35882__$1);

(statearr_35944[(7)] = inst_35880__$1);

return statearr_35944;
})();
if(cljs.core.truth_(inst_35882__$1)){
var statearr_35946_37890 = state_35907__$1;
(statearr_35946_37890[(1)] = (19));

} else {
var statearr_35949_37891 = state_35907__$1;
(statearr_35949_37891[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35908 === (25))){
var inst_35894 = (state_35907[(2)]);
var state_35907__$1 = state_35907;
var statearr_35950_37893 = state_35907__$1;
(statearr_35950_37893[(2)] = inst_35894);

(statearr_35950_37893[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35908 === (17))){
var inst_35853 = (state_35907[(10)]);
var inst_35864 = cljs.core.first(inst_35853);
var inst_35865 = cljs.core.async.muxch_STAR_(inst_35864);
var inst_35867 = cljs.core.async.close_BANG_(inst_35865);
var inst_35868 = cljs.core.next(inst_35853);
var inst_35839 = inst_35868;
var inst_35840 = null;
var inst_35841 = (0);
var inst_35842 = (0);
var state_35907__$1 = (function (){var statearr_35953 = state_35907;
(statearr_35953[(12)] = inst_35867);

(statearr_35953[(13)] = inst_35839);

(statearr_35953[(14)] = inst_35842);

(statearr_35953[(15)] = inst_35841);

(statearr_35953[(16)] = inst_35840);

return statearr_35953;
})();
var statearr_35955_37903 = state_35907__$1;
(statearr_35955_37903[(2)] = null);

(statearr_35955_37903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35908 === (3))){
var inst_35903 = (state_35907[(2)]);
var state_35907__$1 = state_35907;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35907__$1,inst_35903);
} else {
if((state_val_35908 === (12))){
var inst_35876 = (state_35907[(2)]);
var state_35907__$1 = state_35907;
var statearr_35960_37911 = state_35907__$1;
(statearr_35960_37911[(2)] = inst_35876);

(statearr_35960_37911[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35908 === (2))){
var state_35907__$1 = state_35907;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35907__$1,(4),ch);
} else {
if((state_val_35908 === (23))){
var state_35907__$1 = state_35907;
var statearr_35961_37914 = state_35907__$1;
(statearr_35961_37914[(2)] = null);

(statearr_35961_37914[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35908 === (19))){
var inst_35882 = (state_35907[(11)]);
var inst_35825 = (state_35907[(8)]);
var inst_35884 = cljs.core.async.muxch_STAR_(inst_35882);
var state_35907__$1 = state_35907;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35907__$1,(22),inst_35884,inst_35825);
} else {
if((state_val_35908 === (11))){
var inst_35839 = (state_35907[(13)]);
var inst_35853 = (state_35907[(10)]);
var inst_35853__$1 = cljs.core.seq(inst_35839);
var state_35907__$1 = (function (){var statearr_35965 = state_35907;
(statearr_35965[(10)] = inst_35853__$1);

return statearr_35965;
})();
if(inst_35853__$1){
var statearr_35967_37919 = state_35907__$1;
(statearr_35967_37919[(1)] = (13));

} else {
var statearr_35969_37921 = state_35907__$1;
(statearr_35969_37921[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35908 === (9))){
var inst_35878 = (state_35907[(2)]);
var state_35907__$1 = state_35907;
var statearr_35972_37923 = state_35907__$1;
(statearr_35972_37923[(2)] = inst_35878);

(statearr_35972_37923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35908 === (5))){
var inst_35836 = cljs.core.deref(mults);
var inst_35837 = cljs.core.vals(inst_35836);
var inst_35838 = cljs.core.seq(inst_35837);
var inst_35839 = inst_35838;
var inst_35840 = null;
var inst_35841 = (0);
var inst_35842 = (0);
var state_35907__$1 = (function (){var statearr_35973 = state_35907;
(statearr_35973[(13)] = inst_35839);

(statearr_35973[(14)] = inst_35842);

(statearr_35973[(15)] = inst_35841);

(statearr_35973[(16)] = inst_35840);

return statearr_35973;
})();
var statearr_35976_37927 = state_35907__$1;
(statearr_35976_37927[(2)] = null);

(statearr_35976_37927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35908 === (14))){
var state_35907__$1 = state_35907;
var statearr_35981_37929 = state_35907__$1;
(statearr_35981_37929[(2)] = null);

(statearr_35981_37929[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35908 === (16))){
var inst_35853 = (state_35907[(10)]);
var inst_35859 = cljs.core.chunk_first(inst_35853);
var inst_35860 = cljs.core.chunk_rest(inst_35853);
var inst_35861 = cljs.core.count(inst_35859);
var inst_35839 = inst_35860;
var inst_35840 = inst_35859;
var inst_35841 = inst_35861;
var inst_35842 = (0);
var state_35907__$1 = (function (){var statearr_35985 = state_35907;
(statearr_35985[(13)] = inst_35839);

(statearr_35985[(14)] = inst_35842);

(statearr_35985[(15)] = inst_35841);

(statearr_35985[(16)] = inst_35840);

return statearr_35985;
})();
var statearr_35987_37934 = state_35907__$1;
(statearr_35987_37934[(2)] = null);

(statearr_35987_37934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35908 === (10))){
var inst_35839 = (state_35907[(13)]);
var inst_35842 = (state_35907[(14)]);
var inst_35841 = (state_35907[(15)]);
var inst_35840 = (state_35907[(16)]);
var inst_35847 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35840,inst_35842);
var inst_35848 = cljs.core.async.muxch_STAR_(inst_35847);
var inst_35849 = cljs.core.async.close_BANG_(inst_35848);
var inst_35850 = (inst_35842 + (1));
var tmp35977 = inst_35839;
var tmp35978 = inst_35841;
var tmp35979 = inst_35840;
var inst_35839__$1 = tmp35977;
var inst_35840__$1 = tmp35979;
var inst_35841__$1 = tmp35978;
var inst_35842__$1 = inst_35850;
var state_35907__$1 = (function (){var statearr_35990 = state_35907;
(statearr_35990[(13)] = inst_35839__$1);

(statearr_35990[(14)] = inst_35842__$1);

(statearr_35990[(15)] = inst_35841__$1);

(statearr_35990[(17)] = inst_35849);

(statearr_35990[(16)] = inst_35840__$1);

return statearr_35990;
})();
var statearr_35994_37942 = state_35907__$1;
(statearr_35994_37942[(2)] = null);

(statearr_35994_37942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35908 === (18))){
var inst_35871 = (state_35907[(2)]);
var state_35907__$1 = state_35907;
var statearr_35996_37944 = state_35907__$1;
(statearr_35996_37944[(2)] = inst_35871);

(statearr_35996_37944[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35908 === (8))){
var inst_35842 = (state_35907[(14)]);
var inst_35841 = (state_35907[(15)]);
var inst_35844 = (inst_35842 < inst_35841);
var inst_35845 = inst_35844;
var state_35907__$1 = state_35907;
if(cljs.core.truth_(inst_35845)){
var statearr_35998_37945 = state_35907__$1;
(statearr_35998_37945[(1)] = (10));

} else {
var statearr_36000_37946 = state_35907__$1;
(statearr_36000_37946[(1)] = (11));

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
var statearr_36002 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36002[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36002[(1)] = (1));

return statearr_36002;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35907){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35907);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36003){if((e36003 instanceof Object)){
var ex__34210__auto__ = e36003;
var statearr_36004_37952 = state_35907;
(statearr_36004_37952[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36003;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37953 = state_35907;
state_35907 = G__37953;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35907){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36007 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36007[(6)] = c__34273__auto___37857);

return statearr_36007;
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
var G__36012 = arguments.length;
switch (G__36012) {
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
var G__36018 = arguments.length;
switch (G__36018) {
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
var G__36035 = arguments.length;
switch (G__36035) {
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
var c__34273__auto___37965 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36089){
var state_val_36090 = (state_36089[(1)]);
if((state_val_36090 === (7))){
var state_36089__$1 = state_36089;
var statearr_36094_37966 = state_36089__$1;
(statearr_36094_37966[(2)] = null);

(statearr_36094_37966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36090 === (1))){
var state_36089__$1 = state_36089;
var statearr_36095_37971 = state_36089__$1;
(statearr_36095_37971[(2)] = null);

(statearr_36095_37971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36090 === (4))){
var inst_36046 = (state_36089[(7)]);
var inst_36048 = (inst_36046 < cnt);
var state_36089__$1 = state_36089;
if(cljs.core.truth_(inst_36048)){
var statearr_36096_37972 = state_36089__$1;
(statearr_36096_37972[(1)] = (6));

} else {
var statearr_36097_37973 = state_36089__$1;
(statearr_36097_37973[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36090 === (15))){
var inst_36084 = (state_36089[(2)]);
var state_36089__$1 = state_36089;
var statearr_36098_37974 = state_36089__$1;
(statearr_36098_37974[(2)] = inst_36084);

(statearr_36098_37974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36090 === (13))){
var inst_36077 = cljs.core.async.close_BANG_(out);
var state_36089__$1 = state_36089;
var statearr_36099_37975 = state_36089__$1;
(statearr_36099_37975[(2)] = inst_36077);

(statearr_36099_37975[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36090 === (6))){
var state_36089__$1 = state_36089;
var statearr_36100_37976 = state_36089__$1;
(statearr_36100_37976[(2)] = null);

(statearr_36100_37976[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36090 === (3))){
var inst_36086 = (state_36089[(2)]);
var state_36089__$1 = state_36089;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36089__$1,inst_36086);
} else {
if((state_val_36090 === (12))){
var inst_36073 = (state_36089[(8)]);
var inst_36073__$1 = (state_36089[(2)]);
var inst_36074 = cljs.core.some(cljs.core.nil_QMARK_,inst_36073__$1);
var state_36089__$1 = (function (){var statearr_36101 = state_36089;
(statearr_36101[(8)] = inst_36073__$1);

return statearr_36101;
})();
if(cljs.core.truth_(inst_36074)){
var statearr_36102_37981 = state_36089__$1;
(statearr_36102_37981[(1)] = (13));

} else {
var statearr_36104_37982 = state_36089__$1;
(statearr_36104_37982[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36090 === (2))){
var inst_36045 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36046 = (0);
var state_36089__$1 = (function (){var statearr_36105 = state_36089;
(statearr_36105[(7)] = inst_36046);

(statearr_36105[(9)] = inst_36045);

return statearr_36105;
})();
var statearr_36106_37984 = state_36089__$1;
(statearr_36106_37984[(2)] = null);

(statearr_36106_37984[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36090 === (11))){
var inst_36046 = (state_36089[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36089,(10),Object,null,(9));
var inst_36058 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36046) : chs__$1.call(null,inst_36046));
var inst_36059 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36046) : done.call(null,inst_36046));
var inst_36060 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36058,inst_36059);
var state_36089__$1 = state_36089;
var statearr_36112_37987 = state_36089__$1;
(statearr_36112_37987[(2)] = inst_36060);


cljs.core.async.impl.ioc_helpers.process_exception(state_36089__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36090 === (9))){
var inst_36046 = (state_36089[(7)]);
var inst_36062 = (state_36089[(2)]);
var inst_36063 = (inst_36046 + (1));
var inst_36046__$1 = inst_36063;
var state_36089__$1 = (function (){var statearr_36116 = state_36089;
(statearr_36116[(7)] = inst_36046__$1);

(statearr_36116[(10)] = inst_36062);

return statearr_36116;
})();
var statearr_36117_37988 = state_36089__$1;
(statearr_36117_37988[(2)] = null);

(statearr_36117_37988[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36090 === (5))){
var inst_36070 = (state_36089[(2)]);
var state_36089__$1 = (function (){var statearr_36118 = state_36089;
(statearr_36118[(11)] = inst_36070);

return statearr_36118;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36089__$1,(12),dchan);
} else {
if((state_val_36090 === (14))){
var inst_36073 = (state_36089[(8)]);
var inst_36079 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36073);
var state_36089__$1 = state_36089;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36089__$1,(16),out,inst_36079);
} else {
if((state_val_36090 === (16))){
var inst_36081 = (state_36089[(2)]);
var state_36089__$1 = (function (){var statearr_36120 = state_36089;
(statearr_36120[(12)] = inst_36081);

return statearr_36120;
})();
var statearr_36121_37992 = state_36089__$1;
(statearr_36121_37992[(2)] = null);

(statearr_36121_37992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36090 === (10))){
var inst_36052 = (state_36089[(2)]);
var inst_36053 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36089__$1 = (function (){var statearr_36123 = state_36089;
(statearr_36123[(13)] = inst_36052);

return statearr_36123;
})();
var statearr_36124_37993 = state_36089__$1;
(statearr_36124_37993[(2)] = inst_36053);


cljs.core.async.impl.ioc_helpers.process_exception(state_36089__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36090 === (8))){
var inst_36068 = (state_36089[(2)]);
var state_36089__$1 = state_36089;
var statearr_36127_37998 = state_36089__$1;
(statearr_36127_37998[(2)] = inst_36068);

(statearr_36127_37998[(1)] = (5));


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
var statearr_36132 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36132[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36132[(1)] = (1));

return statearr_36132;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36089){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36089);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36133){if((e36133 instanceof Object)){
var ex__34210__auto__ = e36133;
var statearr_36135_38000 = state_36089;
(statearr_36135_38000[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36133;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38005 = state_36089;
state_36089 = G__38005;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36136 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36136[(6)] = c__34273__auto___37965);

return statearr_36136;
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
var G__36148 = arguments.length;
switch (G__36148) {
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
var c__34273__auto___38007 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36187){
var state_val_36188 = (state_36187[(1)]);
if((state_val_36188 === (7))){
var inst_36162 = (state_36187[(7)]);
var inst_36163 = (state_36187[(8)]);
var inst_36162__$1 = (state_36187[(2)]);
var inst_36163__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36162__$1,(0),null);
var inst_36164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36162__$1,(1),null);
var inst_36165 = (inst_36163__$1 == null);
var state_36187__$1 = (function (){var statearr_36191 = state_36187;
(statearr_36191[(7)] = inst_36162__$1);

(statearr_36191[(9)] = inst_36164);

(statearr_36191[(8)] = inst_36163__$1);

return statearr_36191;
})();
if(cljs.core.truth_(inst_36165)){
var statearr_36193_38013 = state_36187__$1;
(statearr_36193_38013[(1)] = (8));

} else {
var statearr_36194_38014 = state_36187__$1;
(statearr_36194_38014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (1))){
var inst_36152 = cljs.core.vec(chs);
var inst_36153 = inst_36152;
var state_36187__$1 = (function (){var statearr_36195 = state_36187;
(statearr_36195[(10)] = inst_36153);

return statearr_36195;
})();
var statearr_36196_38015 = state_36187__$1;
(statearr_36196_38015[(2)] = null);

(statearr_36196_38015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (4))){
var inst_36153 = (state_36187[(10)]);
var state_36187__$1 = state_36187;
return cljs.core.async.ioc_alts_BANG_(state_36187__$1,(7),inst_36153);
} else {
if((state_val_36188 === (6))){
var inst_36182 = (state_36187[(2)]);
var state_36187__$1 = state_36187;
var statearr_36197_38016 = state_36187__$1;
(statearr_36197_38016[(2)] = inst_36182);

(statearr_36197_38016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (3))){
var inst_36184 = (state_36187[(2)]);
var state_36187__$1 = state_36187;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36187__$1,inst_36184);
} else {
if((state_val_36188 === (2))){
var inst_36153 = (state_36187[(10)]);
var inst_36155 = cljs.core.count(inst_36153);
var inst_36156 = (inst_36155 > (0));
var state_36187__$1 = state_36187;
if(cljs.core.truth_(inst_36156)){
var statearr_36201_38020 = state_36187__$1;
(statearr_36201_38020[(1)] = (4));

} else {
var statearr_36202_38021 = state_36187__$1;
(statearr_36202_38021[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (11))){
var inst_36153 = (state_36187[(10)]);
var inst_36175 = (state_36187[(2)]);
var tmp36200 = inst_36153;
var inst_36153__$1 = tmp36200;
var state_36187__$1 = (function (){var statearr_36203 = state_36187;
(statearr_36203[(11)] = inst_36175);

(statearr_36203[(10)] = inst_36153__$1);

return statearr_36203;
})();
var statearr_36204_38022 = state_36187__$1;
(statearr_36204_38022[(2)] = null);

(statearr_36204_38022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (9))){
var inst_36163 = (state_36187[(8)]);
var state_36187__$1 = state_36187;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36187__$1,(11),out,inst_36163);
} else {
if((state_val_36188 === (5))){
var inst_36180 = cljs.core.async.close_BANG_(out);
var state_36187__$1 = state_36187;
var statearr_36208_38025 = state_36187__$1;
(statearr_36208_38025[(2)] = inst_36180);

(statearr_36208_38025[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (10))){
var inst_36178 = (state_36187[(2)]);
var state_36187__$1 = state_36187;
var statearr_36211_38028 = state_36187__$1;
(statearr_36211_38028[(2)] = inst_36178);

(statearr_36211_38028[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (8))){
var inst_36162 = (state_36187[(7)]);
var inst_36153 = (state_36187[(10)]);
var inst_36164 = (state_36187[(9)]);
var inst_36163 = (state_36187[(8)]);
var inst_36169 = (function (){var cs = inst_36153;
var vec__36158 = inst_36162;
var v = inst_36163;
var c = inst_36164;
return (function (p1__36140_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36140_SHARP_);
});
})();
var inst_36171 = cljs.core.filterv(inst_36169,inst_36153);
var inst_36153__$1 = inst_36171;
var state_36187__$1 = (function (){var statearr_36217 = state_36187;
(statearr_36217[(10)] = inst_36153__$1);

return statearr_36217;
})();
var statearr_36218_38029 = state_36187__$1;
(statearr_36218_38029[(2)] = null);

(statearr_36218_38029[(1)] = (2));


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
var statearr_36219 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36219[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36219[(1)] = (1));

return statearr_36219;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36187){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36187);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36220){if((e36220 instanceof Object)){
var ex__34210__auto__ = e36220;
var statearr_36221_38032 = state_36187;
(statearr_36221_38032[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36220;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38033 = state_36187;
state_36187 = G__38033;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36187){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36222 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36222[(6)] = c__34273__auto___38007);

return statearr_36222;
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
var G__36224 = arguments.length;
switch (G__36224) {
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
var c__34273__auto___38038 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36259){
var state_val_36260 = (state_36259[(1)]);
if((state_val_36260 === (7))){
var inst_36231 = (state_36259[(7)]);
var inst_36231__$1 = (state_36259[(2)]);
var inst_36236 = (inst_36231__$1 == null);
var inst_36237 = cljs.core.not(inst_36236);
var state_36259__$1 = (function (){var statearr_36262 = state_36259;
(statearr_36262[(7)] = inst_36231__$1);

return statearr_36262;
})();
if(inst_36237){
var statearr_36263_38041 = state_36259__$1;
(statearr_36263_38041[(1)] = (8));

} else {
var statearr_36264_38043 = state_36259__$1;
(statearr_36264_38043[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (1))){
var inst_36225 = (0);
var state_36259__$1 = (function (){var statearr_36266 = state_36259;
(statearr_36266[(8)] = inst_36225);

return statearr_36266;
})();
var statearr_36267_38044 = state_36259__$1;
(statearr_36267_38044[(2)] = null);

(statearr_36267_38044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (4))){
var state_36259__$1 = state_36259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36259__$1,(7),ch);
} else {
if((state_val_36260 === (6))){
var inst_36248 = (state_36259[(2)]);
var state_36259__$1 = state_36259;
var statearr_36270_38045 = state_36259__$1;
(statearr_36270_38045[(2)] = inst_36248);

(statearr_36270_38045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (3))){
var inst_36253 = (state_36259[(2)]);
var inst_36256 = cljs.core.async.close_BANG_(out);
var state_36259__$1 = (function (){var statearr_36272 = state_36259;
(statearr_36272[(9)] = inst_36253);

return statearr_36272;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36259__$1,inst_36256);
} else {
if((state_val_36260 === (2))){
var inst_36225 = (state_36259[(8)]);
var inst_36228 = (inst_36225 < n);
var state_36259__$1 = state_36259;
if(cljs.core.truth_(inst_36228)){
var statearr_36273_38049 = state_36259__$1;
(statearr_36273_38049[(1)] = (4));

} else {
var statearr_36276_38050 = state_36259__$1;
(statearr_36276_38050[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (11))){
var inst_36225 = (state_36259[(8)]);
var inst_36240 = (state_36259[(2)]);
var inst_36241 = (inst_36225 + (1));
var inst_36225__$1 = inst_36241;
var state_36259__$1 = (function (){var statearr_36277 = state_36259;
(statearr_36277[(10)] = inst_36240);

(statearr_36277[(8)] = inst_36225__$1);

return statearr_36277;
})();
var statearr_36278_38052 = state_36259__$1;
(statearr_36278_38052[(2)] = null);

(statearr_36278_38052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (9))){
var state_36259__$1 = state_36259;
var statearr_36279_38054 = state_36259__$1;
(statearr_36279_38054[(2)] = null);

(statearr_36279_38054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (5))){
var state_36259__$1 = state_36259;
var statearr_36280_38056 = state_36259__$1;
(statearr_36280_38056[(2)] = null);

(statearr_36280_38056[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (10))){
var inst_36245 = (state_36259[(2)]);
var state_36259__$1 = state_36259;
var statearr_36283_38057 = state_36259__$1;
(statearr_36283_38057[(2)] = inst_36245);

(statearr_36283_38057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (8))){
var inst_36231 = (state_36259[(7)]);
var state_36259__$1 = state_36259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36259__$1,(11),out,inst_36231);
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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36259){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36259);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36287){if((e36287 instanceof Object)){
var ex__34210__auto__ = e36287;
var statearr_36289_38061 = state_36259;
(statearr_36289_38061[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36287;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38062 = state_36259;
state_36259 = G__38062;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36291 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36291[(6)] = c__34273__auto___38038);

return statearr_36291;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36301 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36301 = (function (f,ch,meta36302){
this.f = f;
this.ch = ch;
this.meta36302 = meta36302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36303,meta36302__$1){
var self__ = this;
var _36303__$1 = this;
return (new cljs.core.async.t_cljs$core$async36301(self__.f,self__.ch,meta36302__$1));
}));

(cljs.core.async.t_cljs$core$async36301.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36303){
var self__ = this;
var _36303__$1 = this;
return self__.meta36302;
}));

(cljs.core.async.t_cljs$core$async36301.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36301.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36301.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36301.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36301.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36309 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36309 = (function (f,ch,meta36302,_,fn1,meta36310){
this.f = f;
this.ch = ch;
this.meta36302 = meta36302;
this._ = _;
this.fn1 = fn1;
this.meta36310 = meta36310;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36311,meta36310__$1){
var self__ = this;
var _36311__$1 = this;
return (new cljs.core.async.t_cljs$core$async36309(self__.f,self__.ch,self__.meta36302,self__._,self__.fn1,meta36310__$1));
}));

(cljs.core.async.t_cljs$core$async36309.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36311){
var self__ = this;
var _36311__$1 = this;
return self__.meta36310;
}));

(cljs.core.async.t_cljs$core$async36309.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36309.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36309.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36309.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36293_SHARP_){
var G__36314 = (((p1__36293_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36293_SHARP_) : self__.f.call(null,p1__36293_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36314) : f1.call(null,G__36314));
});
}));

(cljs.core.async.t_cljs$core$async36309.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36302","meta36302",-20229454,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36301","cljs.core.async/t_cljs$core$async36301",886856746,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36310","meta36310",-1787906238,null)], null);
}));

(cljs.core.async.t_cljs$core$async36309.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36309.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36309");

(cljs.core.async.t_cljs$core$async36309.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36309");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36309.
 */
cljs.core.async.__GT_t_cljs$core$async36309 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36309(f__$1,ch__$1,meta36302__$1,___$2,fn1__$1,meta36310){
return (new cljs.core.async.t_cljs$core$async36309(f__$1,ch__$1,meta36302__$1,___$2,fn1__$1,meta36310));
});

}

return (new cljs.core.async.t_cljs$core$async36309(self__.f,self__.ch,self__.meta36302,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async36301.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36301.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36301.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36302","meta36302",-20229454,null)], null);
}));

(cljs.core.async.t_cljs$core$async36301.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36301.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36301");

(cljs.core.async.t_cljs$core$async36301.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36301");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36301.
 */
cljs.core.async.__GT_t_cljs$core$async36301 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36301(f__$1,ch__$1,meta36302){
return (new cljs.core.async.t_cljs$core$async36301(f__$1,ch__$1,meta36302));
});

}

return (new cljs.core.async.t_cljs$core$async36301(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
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

(cljs.core.async.t_cljs$core$async36331.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36331.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36331.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36331.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
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
cljs.core.async.__GT_t_cljs$core$async36331 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36331(f__$1,ch__$1,meta36332){
return (new cljs.core.async.t_cljs$core$async36331(f__$1,ch__$1,meta36332));
});

}

return (new cljs.core.async.t_cljs$core$async36331(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36342 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36342 = (function (p,ch,meta36343){
this.p = p;
this.ch = ch;
this.meta36343 = meta36343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36344,meta36343__$1){
var self__ = this;
var _36344__$1 = this;
return (new cljs.core.async.t_cljs$core$async36342(self__.p,self__.ch,meta36343__$1));
}));

(cljs.core.async.t_cljs$core$async36342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36344){
var self__ = this;
var _36344__$1 = this;
return self__.meta36343;
}));

(cljs.core.async.t_cljs$core$async36342.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36342.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36342.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36342.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36342.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36342.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36342.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36342.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36343","meta36343",2142020441,null)], null);
}));

(cljs.core.async.t_cljs$core$async36342.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36342.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36342");

(cljs.core.async.t_cljs$core$async36342.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36342");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36342.
 */
cljs.core.async.__GT_t_cljs$core$async36342 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36342(p__$1,ch__$1,meta36343){
return (new cljs.core.async.t_cljs$core$async36342(p__$1,ch__$1,meta36343));
});

}

return (new cljs.core.async.t_cljs$core$async36342(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34273__auto___38089 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36400){
var state_val_36401 = (state_36400[(1)]);
if((state_val_36401 === (7))){
var inst_36395 = (state_36400[(2)]);
var state_36400__$1 = state_36400;
var statearr_36405_38092 = state_36400__$1;
(statearr_36405_38092[(2)] = inst_36395);

(statearr_36405_38092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (1))){
var state_36400__$1 = state_36400;
var statearr_36406_38093 = state_36400__$1;
(statearr_36406_38093[(2)] = null);

(statearr_36406_38093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (4))){
var inst_36369 = (state_36400[(7)]);
var inst_36369__$1 = (state_36400[(2)]);
var inst_36370 = (inst_36369__$1 == null);
var state_36400__$1 = (function (){var statearr_36407 = state_36400;
(statearr_36407[(7)] = inst_36369__$1);

return statearr_36407;
})();
if(cljs.core.truth_(inst_36370)){
var statearr_36409_38095 = state_36400__$1;
(statearr_36409_38095[(1)] = (5));

} else {
var statearr_36410_38096 = state_36400__$1;
(statearr_36410_38096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (6))){
var inst_36369 = (state_36400[(7)]);
var inst_36374 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36369) : p.call(null,inst_36369));
var state_36400__$1 = state_36400;
if(cljs.core.truth_(inst_36374)){
var statearr_36411_38099 = state_36400__$1;
(statearr_36411_38099[(1)] = (8));

} else {
var statearr_36412_38100 = state_36400__$1;
(statearr_36412_38100[(1)] = (9));

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
var inst_36383 = (state_36400[(2)]);
var state_36400__$1 = state_36400;
var statearr_36415_38101 = state_36400__$1;
(statearr_36415_38101[(2)] = inst_36383);

(statearr_36415_38101[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (9))){
var state_36400__$1 = state_36400;
var statearr_36418_38103 = state_36400__$1;
(statearr_36418_38103[(2)] = null);

(statearr_36418_38103[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (5))){
var inst_36372 = cljs.core.async.close_BANG_(out);
var state_36400__$1 = state_36400;
var statearr_36450_38106 = state_36400__$1;
(statearr_36450_38106[(2)] = inst_36372);

(statearr_36450_38106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (10))){
var inst_36386 = (state_36400[(2)]);
var state_36400__$1 = (function (){var statearr_36451 = state_36400;
(statearr_36451[(8)] = inst_36386);

return statearr_36451;
})();
var statearr_36452_38107 = state_36400__$1;
(statearr_36452_38107[(2)] = null);

(statearr_36452_38107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36401 === (8))){
var inst_36369 = (state_36400[(7)]);
var state_36400__$1 = state_36400;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36400__$1,(11),out,inst_36369);
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
var statearr_36455 = [null,null,null,null,null,null,null,null,null];
(statearr_36455[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36455[(1)] = (1));

return statearr_36455;
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
}catch (e36456){if((e36456 instanceof Object)){
var ex__34210__auto__ = e36456;
var statearr_36457_38111 = state_36400;
(statearr_36457_38111[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38112 = state_36400;
state_36400 = G__38112;
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
var state__34275__auto__ = (function (){var statearr_36460 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36460[(6)] = c__34273__auto___38089);

return statearr_36460;
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
var G__36465 = arguments.length;
switch (G__36465) {
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
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36537){
var state_val_36538 = (state_36537[(1)]);
if((state_val_36538 === (7))){
var inst_36533 = (state_36537[(2)]);
var state_36537__$1 = state_36537;
var statearr_36542_38117 = state_36537__$1;
(statearr_36542_38117[(2)] = inst_36533);

(statearr_36542_38117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (20))){
var inst_36499 = (state_36537[(7)]);
var inst_36512 = (state_36537[(2)]);
var inst_36513 = cljs.core.next(inst_36499);
var inst_36484 = inst_36513;
var inst_36485 = null;
var inst_36486 = (0);
var inst_36487 = (0);
var state_36537__$1 = (function (){var statearr_36543 = state_36537;
(statearr_36543[(8)] = inst_36486);

(statearr_36543[(9)] = inst_36485);

(statearr_36543[(10)] = inst_36484);

(statearr_36543[(11)] = inst_36512);

(statearr_36543[(12)] = inst_36487);

return statearr_36543;
})();
var statearr_36545_38119 = state_36537__$1;
(statearr_36545_38119[(2)] = null);

(statearr_36545_38119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (1))){
var state_36537__$1 = state_36537;
var statearr_36546_38122 = state_36537__$1;
(statearr_36546_38122[(2)] = null);

(statearr_36546_38122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (4))){
var inst_36473 = (state_36537[(13)]);
var inst_36473__$1 = (state_36537[(2)]);
var inst_36474 = (inst_36473__$1 == null);
var state_36537__$1 = (function (){var statearr_36548 = state_36537;
(statearr_36548[(13)] = inst_36473__$1);

return statearr_36548;
})();
if(cljs.core.truth_(inst_36474)){
var statearr_36549_38123 = state_36537__$1;
(statearr_36549_38123[(1)] = (5));

} else {
var statearr_36550_38124 = state_36537__$1;
(statearr_36550_38124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (15))){
var state_36537__$1 = state_36537;
var statearr_36554_38125 = state_36537__$1;
(statearr_36554_38125[(2)] = null);

(statearr_36554_38125[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (21))){
var state_36537__$1 = state_36537;
var statearr_36556_38126 = state_36537__$1;
(statearr_36556_38126[(2)] = null);

(statearr_36556_38126[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (13))){
var inst_36486 = (state_36537[(8)]);
var inst_36485 = (state_36537[(9)]);
var inst_36484 = (state_36537[(10)]);
var inst_36487 = (state_36537[(12)]);
var inst_36494 = (state_36537[(2)]);
var inst_36496 = (inst_36487 + (1));
var tmp36551 = inst_36486;
var tmp36552 = inst_36485;
var tmp36553 = inst_36484;
var inst_36484__$1 = tmp36553;
var inst_36485__$1 = tmp36552;
var inst_36486__$1 = tmp36551;
var inst_36487__$1 = inst_36496;
var state_36537__$1 = (function (){var statearr_36558 = state_36537;
(statearr_36558[(8)] = inst_36486__$1);

(statearr_36558[(14)] = inst_36494);

(statearr_36558[(9)] = inst_36485__$1);

(statearr_36558[(10)] = inst_36484__$1);

(statearr_36558[(12)] = inst_36487__$1);

return statearr_36558;
})();
var statearr_36559_38129 = state_36537__$1;
(statearr_36559_38129[(2)] = null);

(statearr_36559_38129[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (22))){
var state_36537__$1 = state_36537;
var statearr_36561_38130 = state_36537__$1;
(statearr_36561_38130[(2)] = null);

(statearr_36561_38130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (6))){
var inst_36473 = (state_36537[(13)]);
var inst_36482 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36473) : f.call(null,inst_36473));
var inst_36483 = cljs.core.seq(inst_36482);
var inst_36484 = inst_36483;
var inst_36485 = null;
var inst_36486 = (0);
var inst_36487 = (0);
var state_36537__$1 = (function (){var statearr_36562 = state_36537;
(statearr_36562[(8)] = inst_36486);

(statearr_36562[(9)] = inst_36485);

(statearr_36562[(10)] = inst_36484);

(statearr_36562[(12)] = inst_36487);

return statearr_36562;
})();
var statearr_36563_38135 = state_36537__$1;
(statearr_36563_38135[(2)] = null);

(statearr_36563_38135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (17))){
var inst_36499 = (state_36537[(7)]);
var inst_36503 = cljs.core.chunk_first(inst_36499);
var inst_36504 = cljs.core.chunk_rest(inst_36499);
var inst_36505 = cljs.core.count(inst_36503);
var inst_36484 = inst_36504;
var inst_36485 = inst_36503;
var inst_36486 = inst_36505;
var inst_36487 = (0);
var state_36537__$1 = (function (){var statearr_36565 = state_36537;
(statearr_36565[(8)] = inst_36486);

(statearr_36565[(9)] = inst_36485);

(statearr_36565[(10)] = inst_36484);

(statearr_36565[(12)] = inst_36487);

return statearr_36565;
})();
var statearr_36566_38139 = state_36537__$1;
(statearr_36566_38139[(2)] = null);

(statearr_36566_38139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (3))){
var inst_36535 = (state_36537[(2)]);
var state_36537__$1 = state_36537;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36537__$1,inst_36535);
} else {
if((state_val_36538 === (12))){
var inst_36522 = (state_36537[(2)]);
var state_36537__$1 = state_36537;
var statearr_36568_38143 = state_36537__$1;
(statearr_36568_38143[(2)] = inst_36522);

(statearr_36568_38143[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (2))){
var state_36537__$1 = state_36537;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36537__$1,(4),in$);
} else {
if((state_val_36538 === (23))){
var inst_36531 = (state_36537[(2)]);
var state_36537__$1 = state_36537;
var statearr_36570_38144 = state_36537__$1;
(statearr_36570_38144[(2)] = inst_36531);

(statearr_36570_38144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (19))){
var inst_36516 = (state_36537[(2)]);
var state_36537__$1 = state_36537;
var statearr_36571_38147 = state_36537__$1;
(statearr_36571_38147[(2)] = inst_36516);

(statearr_36571_38147[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (11))){
var inst_36499 = (state_36537[(7)]);
var inst_36484 = (state_36537[(10)]);
var inst_36499__$1 = cljs.core.seq(inst_36484);
var state_36537__$1 = (function (){var statearr_36573 = state_36537;
(statearr_36573[(7)] = inst_36499__$1);

return statearr_36573;
})();
if(inst_36499__$1){
var statearr_36574_38149 = state_36537__$1;
(statearr_36574_38149[(1)] = (14));

} else {
var statearr_36575_38150 = state_36537__$1;
(statearr_36575_38150[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (9))){
var inst_36524 = (state_36537[(2)]);
var inst_36526 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36537__$1 = (function (){var statearr_36577 = state_36537;
(statearr_36577[(15)] = inst_36524);

return statearr_36577;
})();
if(cljs.core.truth_(inst_36526)){
var statearr_36578_38151 = state_36537__$1;
(statearr_36578_38151[(1)] = (21));

} else {
var statearr_36579_38152 = state_36537__$1;
(statearr_36579_38152[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (5))){
var inst_36476 = cljs.core.async.close_BANG_(out);
var state_36537__$1 = state_36537;
var statearr_36581_38155 = state_36537__$1;
(statearr_36581_38155[(2)] = inst_36476);

(statearr_36581_38155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (14))){
var inst_36499 = (state_36537[(7)]);
var inst_36501 = cljs.core.chunked_seq_QMARK_(inst_36499);
var state_36537__$1 = state_36537;
if(inst_36501){
var statearr_36582_38157 = state_36537__$1;
(statearr_36582_38157[(1)] = (17));

} else {
var statearr_36583_38158 = state_36537__$1;
(statearr_36583_38158[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (16))){
var inst_36519 = (state_36537[(2)]);
var state_36537__$1 = state_36537;
var statearr_36585_38159 = state_36537__$1;
(statearr_36585_38159[(2)] = inst_36519);

(statearr_36585_38159[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (10))){
var inst_36485 = (state_36537[(9)]);
var inst_36487 = (state_36537[(12)]);
var inst_36492 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36485,inst_36487);
var state_36537__$1 = state_36537;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36537__$1,(13),out,inst_36492);
} else {
if((state_val_36538 === (18))){
var inst_36499 = (state_36537[(7)]);
var inst_36510 = cljs.core.first(inst_36499);
var state_36537__$1 = state_36537;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36537__$1,(20),out,inst_36510);
} else {
if((state_val_36538 === (8))){
var inst_36486 = (state_36537[(8)]);
var inst_36487 = (state_36537[(12)]);
var inst_36489 = (inst_36487 < inst_36486);
var inst_36490 = inst_36489;
var state_36537__$1 = state_36537;
if(cljs.core.truth_(inst_36490)){
var statearr_36587_38161 = state_36537__$1;
(statearr_36587_38161[(1)] = (10));

} else {
var statearr_36588_38163 = state_36537__$1;
(statearr_36588_38163[(1)] = (11));

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
var statearr_36590 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36590[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36590[(1)] = (1));

return statearr_36590;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36537){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36537);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36591){if((e36591 instanceof Object)){
var ex__34210__auto__ = e36591;
var statearr_36593_38165 = state_36537;
(statearr_36593_38165[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36591;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38167 = state_36537;
state_36537 = G__38167;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36537){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36594 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36594[(6)] = c__34273__auto__);

return statearr_36594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));

return c__34273__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36598 = arguments.length;
switch (G__36598) {
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
var G__36602 = arguments.length;
switch (G__36602) {
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
var G__36606 = arguments.length;
switch (G__36606) {
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
var c__34273__auto___38181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36632){
var state_val_36633 = (state_36632[(1)]);
if((state_val_36633 === (7))){
var inst_36627 = (state_36632[(2)]);
var state_36632__$1 = state_36632;
var statearr_36636_38183 = state_36632__$1;
(statearr_36636_38183[(2)] = inst_36627);

(statearr_36636_38183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36633 === (1))){
var inst_36609 = null;
var state_36632__$1 = (function (){var statearr_36637 = state_36632;
(statearr_36637[(7)] = inst_36609);

return statearr_36637;
})();
var statearr_36638_38185 = state_36632__$1;
(statearr_36638_38185[(2)] = null);

(statearr_36638_38185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36633 === (4))){
var inst_36612 = (state_36632[(8)]);
var inst_36612__$1 = (state_36632[(2)]);
var inst_36613 = (inst_36612__$1 == null);
var inst_36614 = cljs.core.not(inst_36613);
var state_36632__$1 = (function (){var statearr_36640 = state_36632;
(statearr_36640[(8)] = inst_36612__$1);

return statearr_36640;
})();
if(inst_36614){
var statearr_36641_38186 = state_36632__$1;
(statearr_36641_38186[(1)] = (5));

} else {
var statearr_36642_38187 = state_36632__$1;
(statearr_36642_38187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36633 === (6))){
var state_36632__$1 = state_36632;
var statearr_36643_38189 = state_36632__$1;
(statearr_36643_38189[(2)] = null);

(statearr_36643_38189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36633 === (3))){
var inst_36629 = (state_36632[(2)]);
var inst_36630 = cljs.core.async.close_BANG_(out);
var state_36632__$1 = (function (){var statearr_36645 = state_36632;
(statearr_36645[(9)] = inst_36629);

return statearr_36645;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36632__$1,inst_36630);
} else {
if((state_val_36633 === (2))){
var state_36632__$1 = state_36632;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36632__$1,(4),ch);
} else {
if((state_val_36633 === (11))){
var inst_36612 = (state_36632[(8)]);
var inst_36621 = (state_36632[(2)]);
var inst_36609 = inst_36612;
var state_36632__$1 = (function (){var statearr_36647 = state_36632;
(statearr_36647[(7)] = inst_36609);

(statearr_36647[(10)] = inst_36621);

return statearr_36647;
})();
var statearr_36648_38193 = state_36632__$1;
(statearr_36648_38193[(2)] = null);

(statearr_36648_38193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36633 === (9))){
var inst_36612 = (state_36632[(8)]);
var state_36632__$1 = state_36632;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36632__$1,(11),out,inst_36612);
} else {
if((state_val_36633 === (5))){
var inst_36609 = (state_36632[(7)]);
var inst_36612 = (state_36632[(8)]);
var inst_36616 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36612,inst_36609);
var state_36632__$1 = state_36632;
if(inst_36616){
var statearr_36651_38194 = state_36632__$1;
(statearr_36651_38194[(1)] = (8));

} else {
var statearr_36652_38195 = state_36632__$1;
(statearr_36652_38195[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36633 === (10))){
var inst_36624 = (state_36632[(2)]);
var state_36632__$1 = state_36632;
var statearr_36653_38197 = state_36632__$1;
(statearr_36653_38197[(2)] = inst_36624);

(statearr_36653_38197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36633 === (8))){
var inst_36609 = (state_36632[(7)]);
var tmp36649 = inst_36609;
var inst_36609__$1 = tmp36649;
var state_36632__$1 = (function (){var statearr_36655 = state_36632;
(statearr_36655[(7)] = inst_36609__$1);

return statearr_36655;
})();
var statearr_36656_38198 = state_36632__$1;
(statearr_36656_38198[(2)] = null);

(statearr_36656_38198[(1)] = (2));


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
var statearr_36657 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36657[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36657[(1)] = (1));

return statearr_36657;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36632){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36632);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36659){if((e36659 instanceof Object)){
var ex__34210__auto__ = e36659;
var statearr_36660_38199 = state_36632;
(statearr_36660_38199[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36659;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38202 = state_36632;
state_36632 = G__38202;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36632){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36662 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36662[(6)] = c__34273__auto___38181);

return statearr_36662;
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
var G__36665 = arguments.length;
switch (G__36665) {
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
var c__34273__auto___38207 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36706){
var state_val_36707 = (state_36706[(1)]);
if((state_val_36707 === (7))){
var inst_36702 = (state_36706[(2)]);
var state_36706__$1 = state_36706;
var statearr_36709_38209 = state_36706__$1;
(statearr_36709_38209[(2)] = inst_36702);

(statearr_36709_38209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36707 === (1))){
var inst_36668 = (new Array(n));
var inst_36669 = inst_36668;
var inst_36670 = (0);
var state_36706__$1 = (function (){var statearr_36710 = state_36706;
(statearr_36710[(7)] = inst_36669);

(statearr_36710[(8)] = inst_36670);

return statearr_36710;
})();
var statearr_36712_38210 = state_36706__$1;
(statearr_36712_38210[(2)] = null);

(statearr_36712_38210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36707 === (4))){
var inst_36673 = (state_36706[(9)]);
var inst_36673__$1 = (state_36706[(2)]);
var inst_36674 = (inst_36673__$1 == null);
var inst_36675 = cljs.core.not(inst_36674);
var state_36706__$1 = (function (){var statearr_36713 = state_36706;
(statearr_36713[(9)] = inst_36673__$1);

return statearr_36713;
})();
if(inst_36675){
var statearr_36715_38211 = state_36706__$1;
(statearr_36715_38211[(1)] = (5));

} else {
var statearr_36716_38212 = state_36706__$1;
(statearr_36716_38212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36707 === (15))){
var inst_36696 = (state_36706[(2)]);
var state_36706__$1 = state_36706;
var statearr_36717_38213 = state_36706__$1;
(statearr_36717_38213[(2)] = inst_36696);

(statearr_36717_38213[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36707 === (13))){
var state_36706__$1 = state_36706;
var statearr_36719_38215 = state_36706__$1;
(statearr_36719_38215[(2)] = null);

(statearr_36719_38215[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36707 === (6))){
var inst_36670 = (state_36706[(8)]);
var inst_36692 = (inst_36670 > (0));
var state_36706__$1 = state_36706;
if(cljs.core.truth_(inst_36692)){
var statearr_36720_38216 = state_36706__$1;
(statearr_36720_38216[(1)] = (12));

} else {
var statearr_36721_38217 = state_36706__$1;
(statearr_36721_38217[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36707 === (3))){
var inst_36704 = (state_36706[(2)]);
var state_36706__$1 = state_36706;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36706__$1,inst_36704);
} else {
if((state_val_36707 === (12))){
var inst_36669 = (state_36706[(7)]);
var inst_36694 = cljs.core.vec(inst_36669);
var state_36706__$1 = state_36706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36706__$1,(15),out,inst_36694);
} else {
if((state_val_36707 === (2))){
var state_36706__$1 = state_36706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36706__$1,(4),ch);
} else {
if((state_val_36707 === (11))){
var inst_36685 = (state_36706[(2)]);
var inst_36687 = (new Array(n));
var inst_36669 = inst_36687;
var inst_36670 = (0);
var state_36706__$1 = (function (){var statearr_36724 = state_36706;
(statearr_36724[(7)] = inst_36669);

(statearr_36724[(10)] = inst_36685);

(statearr_36724[(8)] = inst_36670);

return statearr_36724;
})();
var statearr_36725_38219 = state_36706__$1;
(statearr_36725_38219[(2)] = null);

(statearr_36725_38219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36707 === (9))){
var inst_36669 = (state_36706[(7)]);
var inst_36683 = cljs.core.vec(inst_36669);
var state_36706__$1 = state_36706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36706__$1,(11),out,inst_36683);
} else {
if((state_val_36707 === (5))){
var inst_36669 = (state_36706[(7)]);
var inst_36673 = (state_36706[(9)]);
var inst_36670 = (state_36706[(8)]);
var inst_36678 = (state_36706[(11)]);
var inst_36677 = (inst_36669[inst_36670] = inst_36673);
var inst_36678__$1 = (inst_36670 + (1));
var inst_36679 = (inst_36678__$1 < n);
var state_36706__$1 = (function (){var statearr_36727 = state_36706;
(statearr_36727[(12)] = inst_36677);

(statearr_36727[(11)] = inst_36678__$1);

return statearr_36727;
})();
if(cljs.core.truth_(inst_36679)){
var statearr_36728_38221 = state_36706__$1;
(statearr_36728_38221[(1)] = (8));

} else {
var statearr_36730_38222 = state_36706__$1;
(statearr_36730_38222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36707 === (14))){
var inst_36699 = (state_36706[(2)]);
var inst_36700 = cljs.core.async.close_BANG_(out);
var state_36706__$1 = (function (){var statearr_36732 = state_36706;
(statearr_36732[(13)] = inst_36699);

return statearr_36732;
})();
var statearr_36733_38223 = state_36706__$1;
(statearr_36733_38223[(2)] = inst_36700);

(statearr_36733_38223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36707 === (10))){
var inst_36690 = (state_36706[(2)]);
var state_36706__$1 = state_36706;
var statearr_36735_38224 = state_36706__$1;
(statearr_36735_38224[(2)] = inst_36690);

(statearr_36735_38224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36707 === (8))){
var inst_36669 = (state_36706[(7)]);
var inst_36678 = (state_36706[(11)]);
var tmp36731 = inst_36669;
var inst_36669__$1 = tmp36731;
var inst_36670 = inst_36678;
var state_36706__$1 = (function (){var statearr_36736 = state_36706;
(statearr_36736[(7)] = inst_36669__$1);

(statearr_36736[(8)] = inst_36670);

return statearr_36736;
})();
var statearr_36737_38226 = state_36706__$1;
(statearr_36737_38226[(2)] = null);

(statearr_36737_38226[(1)] = (2));


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
var statearr_36739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36739[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36739[(1)] = (1));

return statearr_36739;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36706){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36706);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36749){if((e36749 instanceof Object)){
var ex__34210__auto__ = e36749;
var statearr_36750_38227 = state_36706;
(statearr_36750_38227[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36749;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38229 = state_36706;
state_36706 = G__38229;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36752 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36752[(6)] = c__34273__auto___38207);

return statearr_36752;
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
var G__36756 = arguments.length;
switch (G__36756) {
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
var c__34273__auto___38232 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36801){
var state_val_36802 = (state_36801[(1)]);
if((state_val_36802 === (7))){
var inst_36796 = (state_36801[(2)]);
var state_36801__$1 = state_36801;
var statearr_36804_38233 = state_36801__$1;
(statearr_36804_38233[(2)] = inst_36796);

(statearr_36804_38233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36802 === (1))){
var inst_36758 = [];
var inst_36759 = inst_36758;
var inst_36760 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36801__$1 = (function (){var statearr_36805 = state_36801;
(statearr_36805[(7)] = inst_36759);

(statearr_36805[(8)] = inst_36760);

return statearr_36805;
})();
var statearr_36807_38235 = state_36801__$1;
(statearr_36807_38235[(2)] = null);

(statearr_36807_38235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36802 === (4))){
var inst_36764 = (state_36801[(9)]);
var inst_36764__$1 = (state_36801[(2)]);
var inst_36765 = (inst_36764__$1 == null);
var inst_36766 = cljs.core.not(inst_36765);
var state_36801__$1 = (function (){var statearr_36808 = state_36801;
(statearr_36808[(9)] = inst_36764__$1);

return statearr_36808;
})();
if(inst_36766){
var statearr_36809_38237 = state_36801__$1;
(statearr_36809_38237[(1)] = (5));

} else {
var statearr_36811_38238 = state_36801__$1;
(statearr_36811_38238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36802 === (15))){
var inst_36790 = (state_36801[(2)]);
var state_36801__$1 = state_36801;
var statearr_36812_38239 = state_36801__$1;
(statearr_36812_38239[(2)] = inst_36790);

(statearr_36812_38239[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36802 === (13))){
var state_36801__$1 = state_36801;
var statearr_36813_38240 = state_36801__$1;
(statearr_36813_38240[(2)] = null);

(statearr_36813_38240[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36802 === (6))){
var inst_36759 = (state_36801[(7)]);
var inst_36785 = inst_36759.length;
var inst_36786 = (inst_36785 > (0));
var state_36801__$1 = state_36801;
if(cljs.core.truth_(inst_36786)){
var statearr_36815_38242 = state_36801__$1;
(statearr_36815_38242[(1)] = (12));

} else {
var statearr_36816_38243 = state_36801__$1;
(statearr_36816_38243[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36802 === (3))){
var inst_36798 = (state_36801[(2)]);
var state_36801__$1 = state_36801;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36801__$1,inst_36798);
} else {
if((state_val_36802 === (12))){
var inst_36759 = (state_36801[(7)]);
var inst_36788 = cljs.core.vec(inst_36759);
var state_36801__$1 = state_36801;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36801__$1,(15),out,inst_36788);
} else {
if((state_val_36802 === (2))){
var state_36801__$1 = state_36801;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36801__$1,(4),ch);
} else {
if((state_val_36802 === (11))){
var inst_36764 = (state_36801[(9)]);
var inst_36768 = (state_36801[(10)]);
var inst_36778 = (state_36801[(2)]);
var inst_36779 = [];
var inst_36780 = inst_36779.push(inst_36764);
var inst_36759 = inst_36779;
var inst_36760 = inst_36768;
var state_36801__$1 = (function (){var statearr_36819 = state_36801;
(statearr_36819[(7)] = inst_36759);

(statearr_36819[(11)] = inst_36780);

(statearr_36819[(8)] = inst_36760);

(statearr_36819[(12)] = inst_36778);

return statearr_36819;
})();
var statearr_36820_38246 = state_36801__$1;
(statearr_36820_38246[(2)] = null);

(statearr_36820_38246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36802 === (9))){
var inst_36759 = (state_36801[(7)]);
var inst_36776 = cljs.core.vec(inst_36759);
var state_36801__$1 = state_36801;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36801__$1,(11),out,inst_36776);
} else {
if((state_val_36802 === (5))){
var inst_36764 = (state_36801[(9)]);
var inst_36768 = (state_36801[(10)]);
var inst_36760 = (state_36801[(8)]);
var inst_36768__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36764) : f.call(null,inst_36764));
var inst_36769 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36768__$1,inst_36760);
var inst_36770 = cljs.core.keyword_identical_QMARK_(inst_36760,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36771 = ((inst_36769) || (inst_36770));
var state_36801__$1 = (function (){var statearr_36822 = state_36801;
(statearr_36822[(10)] = inst_36768__$1);

return statearr_36822;
})();
if(cljs.core.truth_(inst_36771)){
var statearr_36823_38248 = state_36801__$1;
(statearr_36823_38248[(1)] = (8));

} else {
var statearr_36824_38249 = state_36801__$1;
(statearr_36824_38249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36802 === (14))){
var inst_36793 = (state_36801[(2)]);
var inst_36794 = cljs.core.async.close_BANG_(out);
var state_36801__$1 = (function (){var statearr_36827 = state_36801;
(statearr_36827[(13)] = inst_36793);

return statearr_36827;
})();
var statearr_36828_38250 = state_36801__$1;
(statearr_36828_38250[(2)] = inst_36794);

(statearr_36828_38250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36802 === (10))){
var inst_36783 = (state_36801[(2)]);
var state_36801__$1 = state_36801;
var statearr_36830_38252 = state_36801__$1;
(statearr_36830_38252[(2)] = inst_36783);

(statearr_36830_38252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36802 === (8))){
var inst_36759 = (state_36801[(7)]);
var inst_36764 = (state_36801[(9)]);
var inst_36768 = (state_36801[(10)]);
var inst_36773 = inst_36759.push(inst_36764);
var tmp36826 = inst_36759;
var inst_36759__$1 = tmp36826;
var inst_36760 = inst_36768;
var state_36801__$1 = (function (){var statearr_36831 = state_36801;
(statearr_36831[(7)] = inst_36759__$1);

(statearr_36831[(14)] = inst_36773);

(statearr_36831[(8)] = inst_36760);

return statearr_36831;
})();
var statearr_36832_38254 = state_36801__$1;
(statearr_36832_38254[(2)] = null);

(statearr_36832_38254[(1)] = (2));


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
var statearr_36834 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36834[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36834[(1)] = (1));

return statearr_36834;
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
}catch (e36835){if((e36835 instanceof Object)){
var ex__34210__auto__ = e36835;
var statearr_36837_38256 = state_36801;
(statearr_36837_38256[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36835;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38257 = state_36801;
state_36801 = G__38257;
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
var state__34275__auto__ = (function (){var statearr_36839 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36839[(6)] = c__34273__auto___38232);

return statearr_36839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
