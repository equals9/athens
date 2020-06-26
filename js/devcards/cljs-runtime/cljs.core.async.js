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
var val_36777 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36777) : fn1.call(null,val_36777));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36777) : fn1.call(null,val_36777));
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
var n__4666__auto___36782 = n;
var x_36783 = (0);
while(true){
if((x_36783 < n__4666__auto___36782)){
(a[x_36783] = x_36783);

var G__36784 = (x_36783 + (1));
x_36783 = G__36784;
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
var G__36793 = (i + (1));
i = G__36793;
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
var len__4789__auto___36795 = arguments.length;
var i__4790__auto___36796 = (0);
while(true){
if((i__4790__auto___36796 < len__4789__auto___36795)){
args__4795__auto__.push((arguments[i__4790__auto___36796]));

var G__36798 = (i__4790__auto___36796 + (1));
i__4790__auto___36796 = G__36798;
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
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34358){
var G__34359 = cljs.core.first(seq34358);
var seq34358__$1 = cljs.core.next(seq34358);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34359,seq34358__$1);
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
var G__34372 = arguments.length;
switch (G__34372) {
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
var c__34273__auto___36803 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34408){
var state_val_34409 = (state_34408[(1)]);
if((state_val_34409 === (7))){
var inst_34401 = (state_34408[(2)]);
var state_34408__$1 = state_34408;
var statearr_34410_36804 = state_34408__$1;
(statearr_34410_36804[(2)] = inst_34401);

(statearr_34410_36804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (1))){
var state_34408__$1 = state_34408;
var statearr_34411_36806 = state_34408__$1;
(statearr_34411_36806[(2)] = null);

(statearr_34411_36806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (4))){
var inst_34378 = (state_34408[(7)]);
var inst_34378__$1 = (state_34408[(2)]);
var inst_34382 = (inst_34378__$1 == null);
var state_34408__$1 = (function (){var statearr_34412 = state_34408;
(statearr_34412[(7)] = inst_34378__$1);

return statearr_34412;
})();
if(cljs.core.truth_(inst_34382)){
var statearr_34415_36807 = state_34408__$1;
(statearr_34415_36807[(1)] = (5));

} else {
var statearr_34416_36808 = state_34408__$1;
(statearr_34416_36808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (13))){
var state_34408__$1 = state_34408;
var statearr_34418_36810 = state_34408__$1;
(statearr_34418_36810[(2)] = null);

(statearr_34418_36810[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (6))){
var inst_34378 = (state_34408[(7)]);
var state_34408__$1 = state_34408;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34408__$1,(11),to,inst_34378);
} else {
if((state_val_34409 === (3))){
var inst_34403 = (state_34408[(2)]);
var state_34408__$1 = state_34408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34408__$1,inst_34403);
} else {
if((state_val_34409 === (12))){
var state_34408__$1 = state_34408;
var statearr_34419_36812 = state_34408__$1;
(statearr_34419_36812[(2)] = null);

(statearr_34419_36812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (2))){
var state_34408__$1 = state_34408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34408__$1,(4),from);
} else {
if((state_val_34409 === (11))){
var inst_34394 = (state_34408[(2)]);
var state_34408__$1 = state_34408;
if(cljs.core.truth_(inst_34394)){
var statearr_34420_36813 = state_34408__$1;
(statearr_34420_36813[(1)] = (12));

} else {
var statearr_34421_36814 = state_34408__$1;
(statearr_34421_36814[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (9))){
var state_34408__$1 = state_34408;
var statearr_34422_36815 = state_34408__$1;
(statearr_34422_36815[(2)] = null);

(statearr_34422_36815[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (5))){
var state_34408__$1 = state_34408;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34423_36817 = state_34408__$1;
(statearr_34423_36817[(1)] = (8));

} else {
var statearr_34424_36818 = state_34408__$1;
(statearr_34424_36818[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (14))){
var inst_34399 = (state_34408[(2)]);
var state_34408__$1 = state_34408;
var statearr_34425_36819 = state_34408__$1;
(statearr_34425_36819[(2)] = inst_34399);

(statearr_34425_36819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (10))){
var inst_34391 = (state_34408[(2)]);
var state_34408__$1 = state_34408;
var statearr_34426_36821 = state_34408__$1;
(statearr_34426_36821[(2)] = inst_34391);

(statearr_34426_36821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (8))){
var inst_34388 = cljs.core.async.close_BANG_(to);
var state_34408__$1 = state_34408;
var statearr_34427_36822 = state_34408__$1;
(statearr_34427_36822[(2)] = inst_34388);

(statearr_34427_36822[(1)] = (10));


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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34408){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34408);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34432){if((e34432 instanceof Object)){
var ex__34210__auto__ = e34432;
var statearr_34433_36824 = state_34408;
(statearr_34433_36824[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34432;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36825 = state_34408;
state_34408 = G__36825;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34408){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34440 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34440[(6)] = c__34273__auto___36803);

return statearr_34440;
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
var c__34273__auto___36828 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
var statearr_34457_36831 = state_34452;
(statearr_34457_36831[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36832 = state_34452;
state_34452 = G__36832;
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
(statearr_34458[(6)] = c__34273__auto___36828);

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
var n__4666__auto___36835 = n;
var __36836 = (0);
while(true){
if((__36836 < n__4666__auto___36835)){
var G__34463_36837 = type;
var G__34463_36838__$1 = (((G__34463_36837 instanceof cljs.core.Keyword))?G__34463_36837.fqn:null);
switch (G__34463_36838__$1) {
case "compute":
var c__34273__auto___36840 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36836,c__34273__auto___36840,G__34463_36837,G__34463_36838__$1,n__4666__auto___36835,jobs,results,process,async){
return (function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = ((function (__36836,c__34273__auto___36840,G__34463_36837,G__34463_36838__$1,n__4666__auto___36835,jobs,results,process,async){
return (function (state_34476){
var state_val_34477 = (state_34476[(1)]);
if((state_val_34477 === (1))){
var state_34476__$1 = state_34476;
var statearr_34478_36842 = state_34476__$1;
(statearr_34478_36842[(2)] = null);

(statearr_34478_36842[(1)] = (2));


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
var statearr_34479_36844 = state_34476__$1;
(statearr_34479_36844[(1)] = (5));

} else {
var statearr_34480_36845 = state_34476__$1;
(statearr_34480_36845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (5))){
var state_34476__$1 = state_34476;
var statearr_34481_36846 = state_34476__$1;
(statearr_34481_36846[(2)] = null);

(statearr_34481_36846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (6))){
var state_34476__$1 = state_34476;
var statearr_34482_36847 = state_34476__$1;
(statearr_34482_36847[(2)] = null);

(statearr_34482_36847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (7))){
var inst_34472 = (state_34476[(2)]);
var state_34476__$1 = state_34476;
var statearr_34483_36849 = state_34476__$1;
(statearr_34483_36849[(2)] = inst_34472);

(statearr_34483_36849[(1)] = (3));


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
});})(__36836,c__34273__auto___36840,G__34463_36837,G__34463_36838__$1,n__4666__auto___36835,jobs,results,process,async))
;
return ((function (__36836,switch__34206__auto__,c__34273__auto___36840,G__34463_36837,G__34463_36838__$1,n__4666__auto___36835,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34484 = [null,null,null,null,null,null,null];
(statearr_34484[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34484[(1)] = (1));

return statearr_34484;
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
}catch (e34485){if((e34485 instanceof Object)){
var ex__34210__auto__ = e34485;
var statearr_34486_36851 = state_34476;
(statearr_34486_36851[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34485;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36852 = state_34476;
state_34476 = G__36852;
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
;})(__36836,switch__34206__auto__,c__34273__auto___36840,G__34463_36837,G__34463_36838__$1,n__4666__auto___36835,jobs,results,process,async))
})();
var state__34275__auto__ = (function (){var statearr_34487 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34487[(6)] = c__34273__auto___36840);

return statearr_34487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
});})(__36836,c__34273__auto___36840,G__34463_36837,G__34463_36838__$1,n__4666__auto___36835,jobs,results,process,async))
);


break;
case "async":
var c__34273__auto___36854 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36836,c__34273__auto___36854,G__34463_36837,G__34463_36838__$1,n__4666__auto___36835,jobs,results,process,async){
return (function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = ((function (__36836,c__34273__auto___36854,G__34463_36837,G__34463_36838__$1,n__4666__auto___36835,jobs,results,process,async){
return (function (state_34500){
var state_val_34501 = (state_34500[(1)]);
if((state_val_34501 === (1))){
var state_34500__$1 = state_34500;
var statearr_34502_36856 = state_34500__$1;
(statearr_34502_36856[(2)] = null);

(statearr_34502_36856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (2))){
var state_34500__$1 = state_34500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34500__$1,(4),jobs);
} else {
if((state_val_34501 === (3))){
var inst_34498 = (state_34500[(2)]);
var state_34500__$1 = state_34500;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34500__$1,inst_34498);
} else {
if((state_val_34501 === (4))){
var inst_34490 = (state_34500[(2)]);
var inst_34491 = async(inst_34490);
var state_34500__$1 = state_34500;
if(cljs.core.truth_(inst_34491)){
var statearr_34503_36858 = state_34500__$1;
(statearr_34503_36858[(1)] = (5));

} else {
var statearr_34504_36859 = state_34500__$1;
(statearr_34504_36859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (5))){
var state_34500__$1 = state_34500;
var statearr_34505_36860 = state_34500__$1;
(statearr_34505_36860[(2)] = null);

(statearr_34505_36860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (6))){
var state_34500__$1 = state_34500;
var statearr_34506_36861 = state_34500__$1;
(statearr_34506_36861[(2)] = null);

(statearr_34506_36861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (7))){
var inst_34496 = (state_34500[(2)]);
var state_34500__$1 = state_34500;
var statearr_34507_36863 = state_34500__$1;
(statearr_34507_36863[(2)] = inst_34496);

(statearr_34507_36863[(1)] = (3));


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
});})(__36836,c__34273__auto___36854,G__34463_36837,G__34463_36838__$1,n__4666__auto___36835,jobs,results,process,async))
;
return ((function (__36836,switch__34206__auto__,c__34273__auto___36854,G__34463_36837,G__34463_36838__$1,n__4666__auto___36835,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34508 = [null,null,null,null,null,null,null];
(statearr_34508[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34508[(1)] = (1));

return statearr_34508;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34500){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34500);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34509){if((e34509 instanceof Object)){
var ex__34210__auto__ = e34509;
var statearr_34510_36865 = state_34500;
(statearr_34510_36865[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34509;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36866 = state_34500;
state_34500 = G__36866;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34500){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36836,switch__34206__auto__,c__34273__auto___36854,G__34463_36837,G__34463_36838__$1,n__4666__auto___36835,jobs,results,process,async))
})();
var state__34275__auto__ = (function (){var statearr_34511 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34511[(6)] = c__34273__auto___36854);

return statearr_34511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
});})(__36836,c__34273__auto___36854,G__34463_36837,G__34463_36838__$1,n__4666__auto___36835,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34463_36838__$1)].join('')));

}

var G__36868 = (__36836 + (1));
__36836 = G__36868;
continue;
} else {
}
break;
}

var c__34273__auto___36869 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34537){
var state_val_34538 = (state_34537[(1)]);
if((state_val_34538 === (7))){
var inst_34533 = (state_34537[(2)]);
var state_34537__$1 = state_34537;
var statearr_34539_36871 = state_34537__$1;
(statearr_34539_36871[(2)] = inst_34533);

(statearr_34539_36871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (1))){
var state_34537__$1 = state_34537;
var statearr_34540_36872 = state_34537__$1;
(statearr_34540_36872[(2)] = null);

(statearr_34540_36872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (4))){
var inst_34514 = (state_34537[(7)]);
var inst_34514__$1 = (state_34537[(2)]);
var inst_34515 = (inst_34514__$1 == null);
var state_34537__$1 = (function (){var statearr_34541 = state_34537;
(statearr_34541[(7)] = inst_34514__$1);

return statearr_34541;
})();
if(cljs.core.truth_(inst_34515)){
var statearr_34542_36874 = state_34537__$1;
(statearr_34542_36874[(1)] = (5));

} else {
var statearr_34543_36875 = state_34537__$1;
(statearr_34543_36875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (6))){
var inst_34514 = (state_34537[(7)]);
var inst_34520 = (state_34537[(8)]);
var inst_34520__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34524 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34525 = [inst_34514,inst_34520__$1];
var inst_34526 = (new cljs.core.PersistentVector(null,2,(5),inst_34524,inst_34525,null));
var state_34537__$1 = (function (){var statearr_34545 = state_34537;
(statearr_34545[(8)] = inst_34520__$1);

return statearr_34545;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34537__$1,(8),jobs,inst_34526);
} else {
if((state_val_34538 === (3))){
var inst_34535 = (state_34537[(2)]);
var state_34537__$1 = state_34537;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34537__$1,inst_34535);
} else {
if((state_val_34538 === (2))){
var state_34537__$1 = state_34537;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34537__$1,(4),from);
} else {
if((state_val_34538 === (9))){
var inst_34530 = (state_34537[(2)]);
var state_34537__$1 = (function (){var statearr_34546 = state_34537;
(statearr_34546[(9)] = inst_34530);

return statearr_34546;
})();
var statearr_34547_36878 = state_34537__$1;
(statearr_34547_36878[(2)] = null);

(statearr_34547_36878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (5))){
var inst_34517 = cljs.core.async.close_BANG_(jobs);
var state_34537__$1 = state_34537;
var statearr_34548_36879 = state_34537__$1;
(statearr_34548_36879[(2)] = inst_34517);

(statearr_34548_36879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (8))){
var inst_34520 = (state_34537[(8)]);
var inst_34528 = (state_34537[(2)]);
var state_34537__$1 = (function (){var statearr_34549 = state_34537;
(statearr_34549[(10)] = inst_34528);

return statearr_34549;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34537__$1,(9),results,inst_34520);
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
var statearr_34550 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34550[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34550[(1)] = (1));

return statearr_34550;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34537){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34537);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34551){if((e34551 instanceof Object)){
var ex__34210__auto__ = e34551;
var statearr_34553_36881 = state_34537;
(statearr_34553_36881[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34551;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36883 = state_34537;
state_34537 = G__36883;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34537){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34554 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34554[(6)] = c__34273__auto___36869);

return statearr_34554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));


var c__34273__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34593){
var state_val_34594 = (state_34593[(1)]);
if((state_val_34594 === (7))){
var inst_34589 = (state_34593[(2)]);
var state_34593__$1 = state_34593;
var statearr_34596_36885 = state_34593__$1;
(statearr_34596_36885[(2)] = inst_34589);

(statearr_34596_36885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (20))){
var state_34593__$1 = state_34593;
var statearr_34597_36886 = state_34593__$1;
(statearr_34597_36886[(2)] = null);

(statearr_34597_36886[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (1))){
var state_34593__$1 = state_34593;
var statearr_34598_36887 = state_34593__$1;
(statearr_34598_36887[(2)] = null);

(statearr_34598_36887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (4))){
var inst_34558 = (state_34593[(7)]);
var inst_34558__$1 = (state_34593[(2)]);
var inst_34559 = (inst_34558__$1 == null);
var state_34593__$1 = (function (){var statearr_34601 = state_34593;
(statearr_34601[(7)] = inst_34558__$1);

return statearr_34601;
})();
if(cljs.core.truth_(inst_34559)){
var statearr_34602_36889 = state_34593__$1;
(statearr_34602_36889[(1)] = (5));

} else {
var statearr_34603_36890 = state_34593__$1;
(statearr_34603_36890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (15))){
var inst_34571 = (state_34593[(8)]);
var state_34593__$1 = state_34593;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34593__$1,(18),to,inst_34571);
} else {
if((state_val_34594 === (21))){
var inst_34584 = (state_34593[(2)]);
var state_34593__$1 = state_34593;
var statearr_34609_36892 = state_34593__$1;
(statearr_34609_36892[(2)] = inst_34584);

(statearr_34609_36892[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (13))){
var inst_34586 = (state_34593[(2)]);
var state_34593__$1 = (function (){var statearr_34610 = state_34593;
(statearr_34610[(9)] = inst_34586);

return statearr_34610;
})();
var statearr_34611_36893 = state_34593__$1;
(statearr_34611_36893[(2)] = null);

(statearr_34611_36893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (6))){
var inst_34558 = (state_34593[(7)]);
var state_34593__$1 = state_34593;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34593__$1,(11),inst_34558);
} else {
if((state_val_34594 === (17))){
var inst_34579 = (state_34593[(2)]);
var state_34593__$1 = state_34593;
if(cljs.core.truth_(inst_34579)){
var statearr_34612_36895 = state_34593__$1;
(statearr_34612_36895[(1)] = (19));

} else {
var statearr_34613_36896 = state_34593__$1;
(statearr_34613_36896[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (3))){
var inst_34591 = (state_34593[(2)]);
var state_34593__$1 = state_34593;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34593__$1,inst_34591);
} else {
if((state_val_34594 === (12))){
var inst_34568 = (state_34593[(10)]);
var state_34593__$1 = state_34593;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34593__$1,(14),inst_34568);
} else {
if((state_val_34594 === (2))){
var state_34593__$1 = state_34593;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34593__$1,(4),results);
} else {
if((state_val_34594 === (19))){
var state_34593__$1 = state_34593;
var statearr_34614_36898 = state_34593__$1;
(statearr_34614_36898[(2)] = null);

(statearr_34614_36898[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (11))){
var inst_34568 = (state_34593[(2)]);
var state_34593__$1 = (function (){var statearr_34615 = state_34593;
(statearr_34615[(10)] = inst_34568);

return statearr_34615;
})();
var statearr_34616_36900 = state_34593__$1;
(statearr_34616_36900[(2)] = null);

(statearr_34616_36900[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (9))){
var state_34593__$1 = state_34593;
var statearr_34617_36901 = state_34593__$1;
(statearr_34617_36901[(2)] = null);

(statearr_34617_36901[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (5))){
var state_34593__$1 = state_34593;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34619_36902 = state_34593__$1;
(statearr_34619_36902[(1)] = (8));

} else {
var statearr_34620_36903 = state_34593__$1;
(statearr_34620_36903[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (14))){
var inst_34571 = (state_34593[(8)]);
var inst_34571__$1 = (state_34593[(2)]);
var inst_34572 = (inst_34571__$1 == null);
var inst_34573 = cljs.core.not(inst_34572);
var state_34593__$1 = (function (){var statearr_34621 = state_34593;
(statearr_34621[(8)] = inst_34571__$1);

return statearr_34621;
})();
if(inst_34573){
var statearr_34622_36905 = state_34593__$1;
(statearr_34622_36905[(1)] = (15));

} else {
var statearr_34623_36906 = state_34593__$1;
(statearr_34623_36906[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (16))){
var state_34593__$1 = state_34593;
var statearr_34624_36907 = state_34593__$1;
(statearr_34624_36907[(2)] = false);

(statearr_34624_36907[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (10))){
var inst_34565 = (state_34593[(2)]);
var state_34593__$1 = state_34593;
var statearr_34625_36909 = state_34593__$1;
(statearr_34625_36909[(2)] = inst_34565);

(statearr_34625_36909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (18))){
var inst_34576 = (state_34593[(2)]);
var state_34593__$1 = state_34593;
var statearr_34626_36910 = state_34593__$1;
(statearr_34626_36910[(2)] = inst_34576);

(statearr_34626_36910[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (8))){
var inst_34562 = cljs.core.async.close_BANG_(to);
var state_34593__$1 = state_34593;
var statearr_34631_36912 = state_34593__$1;
(statearr_34631_36912[(2)] = inst_34562);

(statearr_34631_36912[(1)] = (10));


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
var statearr_34632 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34632[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34632[(1)] = (1));

return statearr_34632;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34593){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34593);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34636){if((e34636 instanceof Object)){
var ex__34210__auto__ = e34636;
var statearr_34637_36914 = state_34593;
(statearr_34637_36914[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34636;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36916 = state_34593;
state_34593 = G__36916;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34593){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34638 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34638[(6)] = c__34273__auto__);

return statearr_34638;
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
var G__34640 = arguments.length;
switch (G__34640) {
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
var c__34273__auto___36927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34673){
var state_val_34674 = (state_34673[(1)]);
if((state_val_34674 === (7))){
var inst_34669 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34675_36929 = state_34673__$1;
(statearr_34675_36929[(2)] = inst_34669);

(statearr_34675_36929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (1))){
var state_34673__$1 = state_34673;
var statearr_34676_36930 = state_34673__$1;
(statearr_34676_36930[(2)] = null);

(statearr_34676_36930[(1)] = (2));


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
var statearr_34678_36932 = state_34673__$1;
(statearr_34678_36932[(1)] = (5));

} else {
var statearr_34679_36933 = state_34673__$1;
(statearr_34679_36933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (13))){
var state_34673__$1 = state_34673;
var statearr_34680_36934 = state_34673__$1;
(statearr_34680_36934[(2)] = null);

(statearr_34680_36934[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (6))){
var inst_34650 = (state_34673[(7)]);
var inst_34656 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34650) : p.call(null,inst_34650));
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34656)){
var statearr_34681_36936 = state_34673__$1;
(statearr_34681_36936[(1)] = (9));

} else {
var statearr_34682_36937 = state_34673__$1;
(statearr_34682_36937[(1)] = (10));

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
var statearr_34683_36938 = state_34673__$1;
(statearr_34683_36938[(2)] = null);

(statearr_34683_36938[(1)] = (2));


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
var statearr_34684_36940 = state_34673__$1;
(statearr_34684_36940[(2)] = tc);

(statearr_34684_36940[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (5))){
var inst_34653 = cljs.core.async.close_BANG_(tc);
var inst_34654 = cljs.core.async.close_BANG_(fc);
var state_34673__$1 = (function (){var statearr_34685 = state_34673;
(statearr_34685[(8)] = inst_34653);

return statearr_34685;
})();
var statearr_34686_36942 = state_34673__$1;
(statearr_34686_36942[(2)] = inst_34654);

(statearr_34686_36942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (14))){
var inst_34667 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34687_36943 = state_34673__$1;
(statearr_34687_36943[(2)] = inst_34667);

(statearr_34687_36943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (10))){
var state_34673__$1 = state_34673;
var statearr_34688_36944 = state_34673__$1;
(statearr_34688_36944[(2)] = fc);

(statearr_34688_36944[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (8))){
var inst_34662 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34662)){
var statearr_34689_36946 = state_34673__$1;
(statearr_34689_36946[(1)] = (12));

} else {
var statearr_34690_36947 = state_34673__$1;
(statearr_34690_36947[(1)] = (13));

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
var statearr_34693_36949 = state_34673;
(statearr_34693_36949[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34692;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36950 = state_34673;
state_34673 = G__36950;
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
var state__34275__auto__ = (function (){var statearr_34694 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34694[(6)] = c__34273__auto___36927);

return statearr_34694;
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
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34715){
var state_val_34716 = (state_34715[(1)]);
if((state_val_34716 === (7))){
var inst_34711 = (state_34715[(2)]);
var state_34715__$1 = state_34715;
var statearr_34717_36953 = state_34715__$1;
(statearr_34717_36953[(2)] = inst_34711);

(statearr_34717_36953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (1))){
var inst_34695 = init;
var state_34715__$1 = (function (){var statearr_34718 = state_34715;
(statearr_34718[(7)] = inst_34695);

return statearr_34718;
})();
var statearr_34719_36954 = state_34715__$1;
(statearr_34719_36954[(2)] = null);

(statearr_34719_36954[(1)] = (2));


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
var statearr_34721_36956 = state_34715__$1;
(statearr_34721_36956[(1)] = (5));

} else {
var statearr_34722_36957 = state_34715__$1;
(statearr_34722_36957[(1)] = (6));

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
var statearr_34724_36959 = state_34715__$1;
(statearr_34724_36959[(1)] = (8));

} else {
var statearr_34725_36960 = state_34715__$1;
(statearr_34725_36960[(1)] = (9));

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
var state_34715__$1 = (function (){var statearr_34726 = state_34715;
(statearr_34726[(7)] = inst_34695);

return statearr_34726;
})();
var statearr_34727_36962 = state_34715__$1;
(statearr_34727_36962[(2)] = null);

(statearr_34727_36962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (5))){
var inst_34695 = (state_34715[(7)]);
var state_34715__$1 = state_34715;
var statearr_34728_36963 = state_34715__$1;
(statearr_34728_36963[(2)] = inst_34695);

(statearr_34728_36963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (10))){
var inst_34709 = (state_34715[(2)]);
var state_34715__$1 = state_34715;
var statearr_34729_36965 = state_34715__$1;
(statearr_34729_36965[(2)] = inst_34709);

(statearr_34729_36965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (8))){
var inst_34702 = (state_34715[(9)]);
var inst_34705 = cljs.core.deref(inst_34702);
var state_34715__$1 = state_34715;
var statearr_34730_36966 = state_34715__$1;
(statearr_34730_36966[(2)] = inst_34705);

(statearr_34730_36966[(1)] = (10));


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
var statearr_34731 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34731[(0)] = cljs$core$async$reduce_$_state_machine__34207__auto__);

(statearr_34731[(1)] = (1));

return statearr_34731;
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
}catch (e34732){if((e34732 instanceof Object)){
var ex__34210__auto__ = e34732;
var statearr_34733_36968 = state_34715;
(statearr_34733_36968[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34732;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36970 = state_34715;
state_34715 = G__36970;
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
var state__34275__auto__ = (function (){var statearr_34734 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34734[(6)] = c__34273__auto__);

return statearr_34734;
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
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34740){
var state_val_34741 = (state_34740[(1)]);
if((state_val_34741 === (1))){
var inst_34735 = cljs.core.async.reduce(f__$1,init,ch);
var state_34740__$1 = state_34740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34740__$1,(2),inst_34735);
} else {
if((state_val_34741 === (2))){
var inst_34737 = (state_34740[(2)]);
var inst_34738 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34737) : f__$1.call(null,inst_34737));
var state_34740__$1 = state_34740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34740__$1,inst_34738);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34207__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34207__auto____0 = (function (){
var statearr_34745 = [null,null,null,null,null,null,null];
(statearr_34745[(0)] = cljs$core$async$transduce_$_state_machine__34207__auto__);

(statearr_34745[(1)] = (1));

return statearr_34745;
});
var cljs$core$async$transduce_$_state_machine__34207__auto____1 = (function (state_34740){
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
}catch (e34746){if((e34746 instanceof Object)){
var ex__34210__auto__ = e34746;
var statearr_34747_36974 = state_34740;
(statearr_34747_36974[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34746;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36975 = state_34740;
state_34740 = G__36975;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34207__auto__ = function(state_34740){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34207__auto____1.call(this,state_34740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34207__auto____0;
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34207__auto____1;
return cljs$core$async$transduce_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34751 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34751[(6)] = c__34273__auto__);

return statearr_34751;
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
var G__34755 = arguments.length;
switch (G__34755) {
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
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34783){
var state_val_34784 = (state_34783[(1)]);
if((state_val_34784 === (7))){
var inst_34765 = (state_34783[(2)]);
var state_34783__$1 = state_34783;
var statearr_34785_36979 = state_34783__$1;
(statearr_34785_36979[(2)] = inst_34765);

(statearr_34785_36979[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (1))){
var inst_34759 = cljs.core.seq(coll);
var inst_34760 = inst_34759;
var state_34783__$1 = (function (){var statearr_34786 = state_34783;
(statearr_34786[(7)] = inst_34760);

return statearr_34786;
})();
var statearr_34787_36981 = state_34783__$1;
(statearr_34787_36981[(2)] = null);

(statearr_34787_36981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (4))){
var inst_34760 = (state_34783[(7)]);
var inst_34763 = cljs.core.first(inst_34760);
var state_34783__$1 = state_34783;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34783__$1,(7),ch,inst_34763);
} else {
if((state_val_34784 === (13))){
var inst_34777 = (state_34783[(2)]);
var state_34783__$1 = state_34783;
var statearr_34789_36982 = state_34783__$1;
(statearr_34789_36982[(2)] = inst_34777);

(statearr_34789_36982[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (6))){
var inst_34768 = (state_34783[(2)]);
var state_34783__$1 = state_34783;
if(cljs.core.truth_(inst_34768)){
var statearr_34790_36984 = state_34783__$1;
(statearr_34790_36984[(1)] = (8));

} else {
var statearr_34792_36985 = state_34783__$1;
(statearr_34792_36985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (3))){
var inst_34781 = (state_34783[(2)]);
var state_34783__$1 = state_34783;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34783__$1,inst_34781);
} else {
if((state_val_34784 === (12))){
var state_34783__$1 = state_34783;
var statearr_34793_36986 = state_34783__$1;
(statearr_34793_36986[(2)] = null);

(statearr_34793_36986[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (2))){
var inst_34760 = (state_34783[(7)]);
var state_34783__$1 = state_34783;
if(cljs.core.truth_(inst_34760)){
var statearr_34794_36988 = state_34783__$1;
(statearr_34794_36988[(1)] = (4));

} else {
var statearr_34795_36989 = state_34783__$1;
(statearr_34795_36989[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (11))){
var inst_34774 = cljs.core.async.close_BANG_(ch);
var state_34783__$1 = state_34783;
var statearr_34796_36990 = state_34783__$1;
(statearr_34796_36990[(2)] = inst_34774);

(statearr_34796_36990[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (9))){
var state_34783__$1 = state_34783;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34799_36992 = state_34783__$1;
(statearr_34799_36992[(1)] = (11));

} else {
var statearr_34800_36993 = state_34783__$1;
(statearr_34800_36993[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (5))){
var inst_34760 = (state_34783[(7)]);
var state_34783__$1 = state_34783;
var statearr_34801_36994 = state_34783__$1;
(statearr_34801_36994[(2)] = inst_34760);

(statearr_34801_36994[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (10))){
var inst_34779 = (state_34783[(2)]);
var state_34783__$1 = state_34783;
var statearr_34805_36995 = state_34783__$1;
(statearr_34805_36995[(2)] = inst_34779);

(statearr_34805_36995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (8))){
var inst_34760 = (state_34783[(7)]);
var inst_34770 = cljs.core.next(inst_34760);
var inst_34760__$1 = inst_34770;
var state_34783__$1 = (function (){var statearr_34806 = state_34783;
(statearr_34806[(7)] = inst_34760__$1);

return statearr_34806;
})();
var statearr_34807_36997 = state_34783__$1;
(statearr_34807_36997[(2)] = null);

(statearr_34807_36997[(1)] = (2));


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
var statearr_34808 = [null,null,null,null,null,null,null,null];
(statearr_34808[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34808[(1)] = (1));

return statearr_34808;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34783){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34783);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34809){if((e34809 instanceof Object)){
var ex__34210__auto__ = e34809;
var statearr_34810_36999 = state_34783;
(statearr_34810_36999[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34809;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37000 = state_34783;
state_34783 = G__37000;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34783){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34812 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34812[(6)] = c__34273__auto__);

return statearr_34812;
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
var c__34273__auto___37010 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34959){
var state_val_34960 = (state_34959[(1)]);
if((state_val_34960 === (7))){
var inst_34955 = (state_34959[(2)]);
var state_34959__$1 = state_34959;
var statearr_34961_37012 = state_34959__$1;
(statearr_34961_37012[(2)] = inst_34955);

(statearr_34961_37012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (20))){
var inst_34858 = (state_34959[(7)]);
var inst_34870 = cljs.core.first(inst_34858);
var inst_34871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34870,(0),null);
var inst_34872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34870,(1),null);
var state_34959__$1 = (function (){var statearr_34962 = state_34959;
(statearr_34962[(8)] = inst_34871);

return statearr_34962;
})();
if(cljs.core.truth_(inst_34872)){
var statearr_34963_37014 = state_34959__$1;
(statearr_34963_37014[(1)] = (22));

} else {
var statearr_34964_37015 = state_34959__$1;
(statearr_34964_37015[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (27))){
var inst_34900 = (state_34959[(9)]);
var inst_34907 = (state_34959[(10)]);
var inst_34827 = (state_34959[(11)]);
var inst_34902 = (state_34959[(12)]);
var inst_34907__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34900,inst_34902);
var inst_34908 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34907__$1,inst_34827,done);
var state_34959__$1 = (function (){var statearr_34968 = state_34959;
(statearr_34968[(10)] = inst_34907__$1);

return statearr_34968;
})();
if(cljs.core.truth_(inst_34908)){
var statearr_34969_37017 = state_34959__$1;
(statearr_34969_37017[(1)] = (30));

} else {
var statearr_34970_37018 = state_34959__$1;
(statearr_34970_37018[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (1))){
var state_34959__$1 = state_34959;
var statearr_34974_37019 = state_34959__$1;
(statearr_34974_37019[(2)] = null);

(statearr_34974_37019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (24))){
var inst_34858 = (state_34959[(7)]);
var inst_34877 = (state_34959[(2)]);
var inst_34878 = cljs.core.next(inst_34858);
var inst_34836 = inst_34878;
var inst_34837 = null;
var inst_34838 = (0);
var inst_34839 = (0);
var state_34959__$1 = (function (){var statearr_34976 = state_34959;
(statearr_34976[(13)] = inst_34837);

(statearr_34976[(14)] = inst_34877);

(statearr_34976[(15)] = inst_34836);

(statearr_34976[(16)] = inst_34838);

(statearr_34976[(17)] = inst_34839);

return statearr_34976;
})();
var statearr_34977_37021 = state_34959__$1;
(statearr_34977_37021[(2)] = null);

(statearr_34977_37021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (39))){
var state_34959__$1 = state_34959;
var statearr_34981_37022 = state_34959__$1;
(statearr_34981_37022[(2)] = null);

(statearr_34981_37022[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (4))){
var inst_34827 = (state_34959[(11)]);
var inst_34827__$1 = (state_34959[(2)]);
var inst_34828 = (inst_34827__$1 == null);
var state_34959__$1 = (function (){var statearr_34982 = state_34959;
(statearr_34982[(11)] = inst_34827__$1);

return statearr_34982;
})();
if(cljs.core.truth_(inst_34828)){
var statearr_34983_37024 = state_34959__$1;
(statearr_34983_37024[(1)] = (5));

} else {
var statearr_34984_37025 = state_34959__$1;
(statearr_34984_37025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (15))){
var inst_34837 = (state_34959[(13)]);
var inst_34836 = (state_34959[(15)]);
var inst_34838 = (state_34959[(16)]);
var inst_34839 = (state_34959[(17)]);
var inst_34854 = (state_34959[(2)]);
var inst_34855 = (inst_34839 + (1));
var tmp34978 = inst_34837;
var tmp34979 = inst_34836;
var tmp34980 = inst_34838;
var inst_34836__$1 = tmp34979;
var inst_34837__$1 = tmp34978;
var inst_34838__$1 = tmp34980;
var inst_34839__$1 = inst_34855;
var state_34959__$1 = (function (){var statearr_34986 = state_34959;
(statearr_34986[(13)] = inst_34837__$1);

(statearr_34986[(15)] = inst_34836__$1);

(statearr_34986[(16)] = inst_34838__$1);

(statearr_34986[(17)] = inst_34839__$1);

(statearr_34986[(18)] = inst_34854);

return statearr_34986;
})();
var statearr_34988_37027 = state_34959__$1;
(statearr_34988_37027[(2)] = null);

(statearr_34988_37027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (21))){
var inst_34881 = (state_34959[(2)]);
var state_34959__$1 = state_34959;
var statearr_34993_37029 = state_34959__$1;
(statearr_34993_37029[(2)] = inst_34881);

(statearr_34993_37029[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (31))){
var inst_34907 = (state_34959[(10)]);
var inst_34911 = done(null);
var inst_34912 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34907);
var state_34959__$1 = (function (){var statearr_34997 = state_34959;
(statearr_34997[(19)] = inst_34911);

return statearr_34997;
})();
var statearr_34998_37030 = state_34959__$1;
(statearr_34998_37030[(2)] = inst_34912);

(statearr_34998_37030[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (32))){
var inst_34901 = (state_34959[(20)]);
var inst_34899 = (state_34959[(21)]);
var inst_34900 = (state_34959[(9)]);
var inst_34902 = (state_34959[(12)]);
var inst_34914 = (state_34959[(2)]);
var inst_34915 = (inst_34902 + (1));
var tmp34990 = inst_34901;
var tmp34991 = inst_34899;
var tmp34992 = inst_34900;
var inst_34899__$1 = tmp34991;
var inst_34900__$1 = tmp34992;
var inst_34901__$1 = tmp34990;
var inst_34902__$1 = inst_34915;
var state_34959__$1 = (function (){var statearr_34999 = state_34959;
(statearr_34999[(20)] = inst_34901__$1);

(statearr_34999[(21)] = inst_34899__$1);

(statearr_34999[(22)] = inst_34914);

(statearr_34999[(9)] = inst_34900__$1);

(statearr_34999[(12)] = inst_34902__$1);

return statearr_34999;
})();
var statearr_35000_37033 = state_34959__$1;
(statearr_35000_37033[(2)] = null);

(statearr_35000_37033[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (40))){
var inst_34927 = (state_34959[(23)]);
var inst_34931 = done(null);
var inst_34932 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34927);
var state_34959__$1 = (function (){var statearr_35001 = state_34959;
(statearr_35001[(24)] = inst_34931);

return statearr_35001;
})();
var statearr_35002_37034 = state_34959__$1;
(statearr_35002_37034[(2)] = inst_34932);

(statearr_35002_37034[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (33))){
var inst_34918 = (state_34959[(25)]);
var inst_34920 = cljs.core.chunked_seq_QMARK_(inst_34918);
var state_34959__$1 = state_34959;
if(inst_34920){
var statearr_35003_37036 = state_34959__$1;
(statearr_35003_37036[(1)] = (36));

} else {
var statearr_35004_37037 = state_34959__$1;
(statearr_35004_37037[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (13))){
var inst_34848 = (state_34959[(26)]);
var inst_34851 = cljs.core.async.close_BANG_(inst_34848);
var state_34959__$1 = state_34959;
var statearr_35005_37039 = state_34959__$1;
(statearr_35005_37039[(2)] = inst_34851);

(statearr_35005_37039[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (22))){
var inst_34871 = (state_34959[(8)]);
var inst_34874 = cljs.core.async.close_BANG_(inst_34871);
var state_34959__$1 = state_34959;
var statearr_35009_37040 = state_34959__$1;
(statearr_35009_37040[(2)] = inst_34874);

(statearr_35009_37040[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (36))){
var inst_34918 = (state_34959[(25)]);
var inst_34922 = cljs.core.chunk_first(inst_34918);
var inst_34923 = cljs.core.chunk_rest(inst_34918);
var inst_34924 = cljs.core.count(inst_34922);
var inst_34899 = inst_34923;
var inst_34900 = inst_34922;
var inst_34901 = inst_34924;
var inst_34902 = (0);
var state_34959__$1 = (function (){var statearr_35010 = state_34959;
(statearr_35010[(20)] = inst_34901);

(statearr_35010[(21)] = inst_34899);

(statearr_35010[(9)] = inst_34900);

(statearr_35010[(12)] = inst_34902);

return statearr_35010;
})();
var statearr_35014_37042 = state_34959__$1;
(statearr_35014_37042[(2)] = null);

(statearr_35014_37042[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (41))){
var inst_34918 = (state_34959[(25)]);
var inst_34934 = (state_34959[(2)]);
var inst_34935 = cljs.core.next(inst_34918);
var inst_34899 = inst_34935;
var inst_34900 = null;
var inst_34901 = (0);
var inst_34902 = (0);
var state_34959__$1 = (function (){var statearr_35015 = state_34959;
(statearr_35015[(20)] = inst_34901);

(statearr_35015[(21)] = inst_34899);

(statearr_35015[(27)] = inst_34934);

(statearr_35015[(9)] = inst_34900);

(statearr_35015[(12)] = inst_34902);

return statearr_35015;
})();
var statearr_35016_37044 = state_34959__$1;
(statearr_35016_37044[(2)] = null);

(statearr_35016_37044[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (43))){
var state_34959__$1 = state_34959;
var statearr_35017_37045 = state_34959__$1;
(statearr_35017_37045[(2)] = null);

(statearr_35017_37045[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (29))){
var inst_34943 = (state_34959[(2)]);
var state_34959__$1 = state_34959;
var statearr_35018_37047 = state_34959__$1;
(statearr_35018_37047[(2)] = inst_34943);

(statearr_35018_37047[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (44))){
var inst_34952 = (state_34959[(2)]);
var state_34959__$1 = (function (){var statearr_35019 = state_34959;
(statearr_35019[(28)] = inst_34952);

return statearr_35019;
})();
var statearr_35020_37048 = state_34959__$1;
(statearr_35020_37048[(2)] = null);

(statearr_35020_37048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (6))){
var inst_34891 = (state_34959[(29)]);
var inst_34890 = cljs.core.deref(cs);
var inst_34891__$1 = cljs.core.keys(inst_34890);
var inst_34892 = cljs.core.count(inst_34891__$1);
var inst_34893 = cljs.core.reset_BANG_(dctr,inst_34892);
var inst_34898 = cljs.core.seq(inst_34891__$1);
var inst_34899 = inst_34898;
var inst_34900 = null;
var inst_34901 = (0);
var inst_34902 = (0);
var state_34959__$1 = (function (){var statearr_35021 = state_34959;
(statearr_35021[(29)] = inst_34891__$1);

(statearr_35021[(20)] = inst_34901);

(statearr_35021[(21)] = inst_34899);

(statearr_35021[(9)] = inst_34900);

(statearr_35021[(30)] = inst_34893);

(statearr_35021[(12)] = inst_34902);

return statearr_35021;
})();
var statearr_35022_37051 = state_34959__$1;
(statearr_35022_37051[(2)] = null);

(statearr_35022_37051[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (28))){
var inst_34918 = (state_34959[(25)]);
var inst_34899 = (state_34959[(21)]);
var inst_34918__$1 = cljs.core.seq(inst_34899);
var state_34959__$1 = (function (){var statearr_35023 = state_34959;
(statearr_35023[(25)] = inst_34918__$1);

return statearr_35023;
})();
if(inst_34918__$1){
var statearr_35024_37052 = state_34959__$1;
(statearr_35024_37052[(1)] = (33));

} else {
var statearr_35025_37053 = state_34959__$1;
(statearr_35025_37053[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (25))){
var inst_34901 = (state_34959[(20)]);
var inst_34902 = (state_34959[(12)]);
var inst_34904 = (inst_34902 < inst_34901);
var inst_34905 = inst_34904;
var state_34959__$1 = state_34959;
if(cljs.core.truth_(inst_34905)){
var statearr_35026_37055 = state_34959__$1;
(statearr_35026_37055[(1)] = (27));

} else {
var statearr_35027_37056 = state_34959__$1;
(statearr_35027_37056[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (34))){
var state_34959__$1 = state_34959;
var statearr_35028_37057 = state_34959__$1;
(statearr_35028_37057[(2)] = null);

(statearr_35028_37057[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (17))){
var state_34959__$1 = state_34959;
var statearr_35029_37059 = state_34959__$1;
(statearr_35029_37059[(2)] = null);

(statearr_35029_37059[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (3))){
var inst_34957 = (state_34959[(2)]);
var state_34959__$1 = state_34959;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34959__$1,inst_34957);
} else {
if((state_val_34960 === (12))){
var inst_34886 = (state_34959[(2)]);
var state_34959__$1 = state_34959;
var statearr_35030_37060 = state_34959__$1;
(statearr_35030_37060[(2)] = inst_34886);

(statearr_35030_37060[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (2))){
var state_34959__$1 = state_34959;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34959__$1,(4),ch);
} else {
if((state_val_34960 === (23))){
var state_34959__$1 = state_34959;
var statearr_35031_37062 = state_34959__$1;
(statearr_35031_37062[(2)] = null);

(statearr_35031_37062[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (35))){
var inst_34941 = (state_34959[(2)]);
var state_34959__$1 = state_34959;
var statearr_35032_37063 = state_34959__$1;
(statearr_35032_37063[(2)] = inst_34941);

(statearr_35032_37063[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (19))){
var inst_34858 = (state_34959[(7)]);
var inst_34862 = cljs.core.chunk_first(inst_34858);
var inst_34863 = cljs.core.chunk_rest(inst_34858);
var inst_34864 = cljs.core.count(inst_34862);
var inst_34836 = inst_34863;
var inst_34837 = inst_34862;
var inst_34838 = inst_34864;
var inst_34839 = (0);
var state_34959__$1 = (function (){var statearr_35033 = state_34959;
(statearr_35033[(13)] = inst_34837);

(statearr_35033[(15)] = inst_34836);

(statearr_35033[(16)] = inst_34838);

(statearr_35033[(17)] = inst_34839);

return statearr_35033;
})();
var statearr_35034_37065 = state_34959__$1;
(statearr_35034_37065[(2)] = null);

(statearr_35034_37065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (11))){
var inst_34858 = (state_34959[(7)]);
var inst_34836 = (state_34959[(15)]);
var inst_34858__$1 = cljs.core.seq(inst_34836);
var state_34959__$1 = (function (){var statearr_35035 = state_34959;
(statearr_35035[(7)] = inst_34858__$1);

return statearr_35035;
})();
if(inst_34858__$1){
var statearr_35036_37067 = state_34959__$1;
(statearr_35036_37067[(1)] = (16));

} else {
var statearr_35037_37068 = state_34959__$1;
(statearr_35037_37068[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (9))){
var inst_34888 = (state_34959[(2)]);
var state_34959__$1 = state_34959;
var statearr_35038_37069 = state_34959__$1;
(statearr_35038_37069[(2)] = inst_34888);

(statearr_35038_37069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (5))){
var inst_34834 = cljs.core.deref(cs);
var inst_34835 = cljs.core.seq(inst_34834);
var inst_34836 = inst_34835;
var inst_34837 = null;
var inst_34838 = (0);
var inst_34839 = (0);
var state_34959__$1 = (function (){var statearr_35039 = state_34959;
(statearr_35039[(13)] = inst_34837);

(statearr_35039[(15)] = inst_34836);

(statearr_35039[(16)] = inst_34838);

(statearr_35039[(17)] = inst_34839);

return statearr_35039;
})();
var statearr_35040_37071 = state_34959__$1;
(statearr_35040_37071[(2)] = null);

(statearr_35040_37071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (14))){
var state_34959__$1 = state_34959;
var statearr_35041_37073 = state_34959__$1;
(statearr_35041_37073[(2)] = null);

(statearr_35041_37073[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (45))){
var inst_34949 = (state_34959[(2)]);
var state_34959__$1 = state_34959;
var statearr_35042_37074 = state_34959__$1;
(statearr_35042_37074[(2)] = inst_34949);

(statearr_35042_37074[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (26))){
var inst_34891 = (state_34959[(29)]);
var inst_34945 = (state_34959[(2)]);
var inst_34946 = cljs.core.seq(inst_34891);
var state_34959__$1 = (function (){var statearr_35043 = state_34959;
(statearr_35043[(31)] = inst_34945);

return statearr_35043;
})();
if(inst_34946){
var statearr_35044_37076 = state_34959__$1;
(statearr_35044_37076[(1)] = (42));

} else {
var statearr_35045_37077 = state_34959__$1;
(statearr_35045_37077[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (16))){
var inst_34858 = (state_34959[(7)]);
var inst_34860 = cljs.core.chunked_seq_QMARK_(inst_34858);
var state_34959__$1 = state_34959;
if(inst_34860){
var statearr_35046_37078 = state_34959__$1;
(statearr_35046_37078[(1)] = (19));

} else {
var statearr_35047_37079 = state_34959__$1;
(statearr_35047_37079[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (38))){
var inst_34938 = (state_34959[(2)]);
var state_34959__$1 = state_34959;
var statearr_35048_37080 = state_34959__$1;
(statearr_35048_37080[(2)] = inst_34938);

(statearr_35048_37080[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (30))){
var state_34959__$1 = state_34959;
var statearr_35049_37081 = state_34959__$1;
(statearr_35049_37081[(2)] = null);

(statearr_35049_37081[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (10))){
var inst_34837 = (state_34959[(13)]);
var inst_34839 = (state_34959[(17)]);
var inst_34847 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34837,inst_34839);
var inst_34848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34847,(0),null);
var inst_34849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34847,(1),null);
var state_34959__$1 = (function (){var statearr_35050 = state_34959;
(statearr_35050[(26)] = inst_34848);

return statearr_35050;
})();
if(cljs.core.truth_(inst_34849)){
var statearr_35051_37084 = state_34959__$1;
(statearr_35051_37084[(1)] = (13));

} else {
var statearr_35052_37090 = state_34959__$1;
(statearr_35052_37090[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (18))){
var inst_34884 = (state_34959[(2)]);
var state_34959__$1 = state_34959;
var statearr_35053_37091 = state_34959__$1;
(statearr_35053_37091[(2)] = inst_34884);

(statearr_35053_37091[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (42))){
var state_34959__$1 = state_34959;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34959__$1,(45),dchan);
} else {
if((state_val_34960 === (37))){
var inst_34927 = (state_34959[(23)]);
var inst_34918 = (state_34959[(25)]);
var inst_34827 = (state_34959[(11)]);
var inst_34927__$1 = cljs.core.first(inst_34918);
var inst_34928 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34927__$1,inst_34827,done);
var state_34959__$1 = (function (){var statearr_35054 = state_34959;
(statearr_35054[(23)] = inst_34927__$1);

return statearr_35054;
})();
if(cljs.core.truth_(inst_34928)){
var statearr_35055_37093 = state_34959__$1;
(statearr_35055_37093[(1)] = (39));

} else {
var statearr_35056_37094 = state_34959__$1;
(statearr_35056_37094[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (8))){
var inst_34838 = (state_34959[(16)]);
var inst_34839 = (state_34959[(17)]);
var inst_34841 = (inst_34839 < inst_34838);
var inst_34842 = inst_34841;
var state_34959__$1 = state_34959;
if(cljs.core.truth_(inst_34842)){
var statearr_35057_37095 = state_34959__$1;
(statearr_35057_37095[(1)] = (10));

} else {
var statearr_35058_37096 = state_34959__$1;
(statearr_35058_37096[(1)] = (11));

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
var statearr_35059 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35059[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35059[(1)] = (1));

return statearr_35059;
});
var cljs$core$async$mult_$_state_machine__34207__auto____1 = (function (state_34959){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34959);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35060){if((e35060 instanceof Object)){
var ex__34210__auto__ = e35060;
var statearr_35061_37101 = state_34959;
(statearr_35061_37101[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35060;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37102 = state_34959;
state_34959 = G__37102;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34207__auto__ = function(state_34959){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34207__auto____1.call(this,state_34959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34207__auto____0;
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34207__auto____1;
return cljs$core$async$mult_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_35062 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_35062[(6)] = c__34273__auto___37010);

return statearr_35062;
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
var G__35064 = arguments.length;
switch (G__35064) {
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
var len__4789__auto___37108 = arguments.length;
var i__4790__auto___37110 = (0);
while(true){
if((i__4790__auto___37110 < len__4789__auto___37108)){
args__4795__auto__.push((arguments[i__4790__auto___37110]));

var G__37111 = (i__4790__auto___37110 + (1));
i__4790__auto___37110 = G__37111;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35087){
var map__35088 = p__35087;
var map__35088__$1 = (((((!((map__35088 == null))))?(((((map__35088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35088):map__35088);
var opts = map__35088__$1;
var statearr_35090_37114 = state;
(statearr_35090_37114[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35091_37115 = state;
(statearr_35091_37115[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35093_37116 = state;
(statearr_35093_37116[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35080){
var G__35081 = cljs.core.first(seq35080);
var seq35080__$1 = cljs.core.next(seq35080);
var G__35082 = cljs.core.first(seq35080__$1);
var seq35080__$2 = cljs.core.next(seq35080__$1);
var G__35083 = cljs.core.first(seq35080__$2);
var seq35080__$3 = cljs.core.next(seq35080__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35081,G__35082,G__35083,seq35080__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35119 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35119 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35120){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35120 = meta35120;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35121,meta35120__$1){
var self__ = this;
var _35121__$1 = this;
return (new cljs.core.async.t_cljs$core$async35119(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35120__$1));
}));

(cljs.core.async.t_cljs$core$async35119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35121){
var self__ = this;
var _35121__$1 = this;
return self__.meta35120;
}));

(cljs.core.async.t_cljs$core$async35119.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35119.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35119.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35119.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35119.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35119.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35119.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35119.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35119.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35120","meta35120",1503185303,null)], null);
}));

(cljs.core.async.t_cljs$core$async35119.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35119.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35119");

(cljs.core.async.t_cljs$core$async35119.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35119");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35119.
 */
cljs.core.async.__GT_t_cljs$core$async35119 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35119(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35120){
return (new cljs.core.async.t_cljs$core$async35119(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35120));
});

}

return (new cljs.core.async.t_cljs$core$async35119(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34273__auto___37143 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_35304){
var state_val_35305 = (state_35304[(1)]);
if((state_val_35305 === (7))){
var inst_35199 = (state_35304[(2)]);
var state_35304__$1 = state_35304;
var statearr_35306_37150 = state_35304__$1;
(statearr_35306_37150[(2)] = inst_35199);

(statearr_35306_37150[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (20))){
var inst_35212 = (state_35304[(7)]);
var state_35304__$1 = state_35304;
var statearr_35307_37151 = state_35304__$1;
(statearr_35307_37151[(2)] = inst_35212);

(statearr_35307_37151[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (27))){
var state_35304__$1 = state_35304;
var statearr_35308_37152 = state_35304__$1;
(statearr_35308_37152[(2)] = null);

(statearr_35308_37152[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (1))){
var inst_35179 = (state_35304[(8)]);
var inst_35179__$1 = calc_state();
var inst_35182 = (inst_35179__$1 == null);
var inst_35183 = cljs.core.not(inst_35182);
var state_35304__$1 = (function (){var statearr_35311 = state_35304;
(statearr_35311[(8)] = inst_35179__$1);

return statearr_35311;
})();
if(inst_35183){
var statearr_35312_37156 = state_35304__$1;
(statearr_35312_37156[(1)] = (2));

} else {
var statearr_35313_37158 = state_35304__$1;
(statearr_35313_37158[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (24))){
var inst_35257 = (state_35304[(9)]);
var inst_35244 = (state_35304[(10)]);
var inst_35277 = (state_35304[(11)]);
var inst_35277__$1 = (inst_35244.cljs$core$IFn$_invoke$arity$1 ? inst_35244.cljs$core$IFn$_invoke$arity$1(inst_35257) : inst_35244.call(null,inst_35257));
var state_35304__$1 = (function (){var statearr_35316 = state_35304;
(statearr_35316[(11)] = inst_35277__$1);

return statearr_35316;
})();
if(cljs.core.truth_(inst_35277__$1)){
var statearr_35317_37161 = state_35304__$1;
(statearr_35317_37161[(1)] = (29));

} else {
var statearr_35318_37162 = state_35304__$1;
(statearr_35318_37162[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (4))){
var inst_35202 = (state_35304[(2)]);
var state_35304__$1 = state_35304;
if(cljs.core.truth_(inst_35202)){
var statearr_35333_37166 = state_35304__$1;
(statearr_35333_37166[(1)] = (8));

} else {
var statearr_35338_37167 = state_35304__$1;
(statearr_35338_37167[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (15))){
var inst_35236 = (state_35304[(2)]);
var state_35304__$1 = state_35304;
if(cljs.core.truth_(inst_35236)){
var statearr_35344_37168 = state_35304__$1;
(statearr_35344_37168[(1)] = (19));

} else {
var statearr_35345_37170 = state_35304__$1;
(statearr_35345_37170[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (21))){
var inst_35243 = (state_35304[(12)]);
var inst_35243__$1 = (state_35304[(2)]);
var inst_35244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35243__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35245 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35243__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35247 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35243__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35304__$1 = (function (){var statearr_35346 = state_35304;
(statearr_35346[(13)] = inst_35245);

(statearr_35346[(12)] = inst_35243__$1);

(statearr_35346[(10)] = inst_35244);

return statearr_35346;
})();
return cljs.core.async.ioc_alts_BANG_(state_35304__$1,(22),inst_35247);
} else {
if((state_val_35305 === (31))){
var inst_35286 = (state_35304[(2)]);
var state_35304__$1 = state_35304;
if(cljs.core.truth_(inst_35286)){
var statearr_35351_37173 = state_35304__$1;
(statearr_35351_37173[(1)] = (32));

} else {
var statearr_35352_37174 = state_35304__$1;
(statearr_35352_37174[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (32))){
var inst_35256 = (state_35304[(14)]);
var state_35304__$1 = state_35304;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35304__$1,(35),out,inst_35256);
} else {
if((state_val_35305 === (33))){
var inst_35243 = (state_35304[(12)]);
var inst_35212 = inst_35243;
var state_35304__$1 = (function (){var statearr_35354 = state_35304;
(statearr_35354[(7)] = inst_35212);

return statearr_35354;
})();
var statearr_35355_37176 = state_35304__$1;
(statearr_35355_37176[(2)] = null);

(statearr_35355_37176[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (13))){
var inst_35212 = (state_35304[(7)]);
var inst_35224 = inst_35212.cljs$lang$protocol_mask$partition0$;
var inst_35225 = (inst_35224 & (64));
var inst_35227 = inst_35212.cljs$core$ISeq$;
var inst_35228 = (cljs.core.PROTOCOL_SENTINEL === inst_35227);
var inst_35229 = ((inst_35225) || (inst_35228));
var state_35304__$1 = state_35304;
if(cljs.core.truth_(inst_35229)){
var statearr_35363_37179 = state_35304__$1;
(statearr_35363_37179[(1)] = (16));

} else {
var statearr_35365_37180 = state_35304__$1;
(statearr_35365_37180[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (22))){
var inst_35257 = (state_35304[(9)]);
var inst_35256 = (state_35304[(14)]);
var inst_35255 = (state_35304[(2)]);
var inst_35256__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35255,(0),null);
var inst_35257__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35255,(1),null);
var inst_35259 = (inst_35256__$1 == null);
var inst_35261 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35257__$1,change);
var inst_35262 = ((inst_35259) || (inst_35261));
var state_35304__$1 = (function (){var statearr_35371 = state_35304;
(statearr_35371[(9)] = inst_35257__$1);

(statearr_35371[(14)] = inst_35256__$1);

return statearr_35371;
})();
if(cljs.core.truth_(inst_35262)){
var statearr_35378_37189 = state_35304__$1;
(statearr_35378_37189[(1)] = (23));

} else {
var statearr_35379_37191 = state_35304__$1;
(statearr_35379_37191[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (36))){
var inst_35243 = (state_35304[(12)]);
var inst_35212 = inst_35243;
var state_35304__$1 = (function (){var statearr_35387 = state_35304;
(statearr_35387[(7)] = inst_35212);

return statearr_35387;
})();
var statearr_35389_37194 = state_35304__$1;
(statearr_35389_37194[(2)] = null);

(statearr_35389_37194[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (29))){
var inst_35277 = (state_35304[(11)]);
var state_35304__$1 = state_35304;
var statearr_35391_37195 = state_35304__$1;
(statearr_35391_37195[(2)] = inst_35277);

(statearr_35391_37195[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (6))){
var state_35304__$1 = state_35304;
var statearr_35398_37198 = state_35304__$1;
(statearr_35398_37198[(2)] = false);

(statearr_35398_37198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (28))){
var inst_35272 = (state_35304[(2)]);
var inst_35273 = calc_state();
var inst_35212 = inst_35273;
var state_35304__$1 = (function (){var statearr_35403 = state_35304;
(statearr_35403[(7)] = inst_35212);

(statearr_35403[(15)] = inst_35272);

return statearr_35403;
})();
var statearr_35406_37201 = state_35304__$1;
(statearr_35406_37201[(2)] = null);

(statearr_35406_37201[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (25))){
var inst_35300 = (state_35304[(2)]);
var state_35304__$1 = state_35304;
var statearr_35407_37203 = state_35304__$1;
(statearr_35407_37203[(2)] = inst_35300);

(statearr_35407_37203[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (34))){
var inst_35298 = (state_35304[(2)]);
var state_35304__$1 = state_35304;
var statearr_35408_37204 = state_35304__$1;
(statearr_35408_37204[(2)] = inst_35298);

(statearr_35408_37204[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (17))){
var state_35304__$1 = state_35304;
var statearr_35409_37205 = state_35304__$1;
(statearr_35409_37205[(2)] = false);

(statearr_35409_37205[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (3))){
var state_35304__$1 = state_35304;
var statearr_35415_37206 = state_35304__$1;
(statearr_35415_37206[(2)] = false);

(statearr_35415_37206[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (12))){
var inst_35302 = (state_35304[(2)]);
var state_35304__$1 = state_35304;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35304__$1,inst_35302);
} else {
if((state_val_35305 === (2))){
var inst_35179 = (state_35304[(8)]);
var inst_35189 = inst_35179.cljs$lang$protocol_mask$partition0$;
var inst_35190 = (inst_35189 & (64));
var inst_35191 = inst_35179.cljs$core$ISeq$;
var inst_35192 = (cljs.core.PROTOCOL_SENTINEL === inst_35191);
var inst_35193 = ((inst_35190) || (inst_35192));
var state_35304__$1 = state_35304;
if(cljs.core.truth_(inst_35193)){
var statearr_35427_37207 = state_35304__$1;
(statearr_35427_37207[(1)] = (5));

} else {
var statearr_35428_37211 = state_35304__$1;
(statearr_35428_37211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (23))){
var inst_35256 = (state_35304[(14)]);
var inst_35266 = (inst_35256 == null);
var state_35304__$1 = state_35304;
if(cljs.core.truth_(inst_35266)){
var statearr_35436_37215 = state_35304__$1;
(statearr_35436_37215[(1)] = (26));

} else {
var statearr_35437_37218 = state_35304__$1;
(statearr_35437_37218[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (35))){
var inst_35289 = (state_35304[(2)]);
var state_35304__$1 = state_35304;
if(cljs.core.truth_(inst_35289)){
var statearr_35442_37219 = state_35304__$1;
(statearr_35442_37219[(1)] = (36));

} else {
var statearr_35445_37220 = state_35304__$1;
(statearr_35445_37220[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (19))){
var inst_35212 = (state_35304[(7)]);
var inst_35240 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35212);
var state_35304__$1 = state_35304;
var statearr_35450_37221 = state_35304__$1;
(statearr_35450_37221[(2)] = inst_35240);

(statearr_35450_37221[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (11))){
var inst_35212 = (state_35304[(7)]);
var inst_35220 = (inst_35212 == null);
var inst_35221 = cljs.core.not(inst_35220);
var state_35304__$1 = state_35304;
if(inst_35221){
var statearr_35453_37228 = state_35304__$1;
(statearr_35453_37228[(1)] = (13));

} else {
var statearr_35457_37229 = state_35304__$1;
(statearr_35457_37229[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (9))){
var inst_35179 = (state_35304[(8)]);
var state_35304__$1 = state_35304;
var statearr_35461_37230 = state_35304__$1;
(statearr_35461_37230[(2)] = inst_35179);

(statearr_35461_37230[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (5))){
var state_35304__$1 = state_35304;
var statearr_35465_37231 = state_35304__$1;
(statearr_35465_37231[(2)] = true);

(statearr_35465_37231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (14))){
var state_35304__$1 = state_35304;
var statearr_35468_37232 = state_35304__$1;
(statearr_35468_37232[(2)] = false);

(statearr_35468_37232[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (26))){
var inst_35257 = (state_35304[(9)]);
var inst_35269 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35257);
var state_35304__$1 = state_35304;
var statearr_35474_37235 = state_35304__$1;
(statearr_35474_37235[(2)] = inst_35269);

(statearr_35474_37235[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (16))){
var state_35304__$1 = state_35304;
var statearr_35479_37236 = state_35304__$1;
(statearr_35479_37236[(2)] = true);

(statearr_35479_37236[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (38))){
var inst_35294 = (state_35304[(2)]);
var state_35304__$1 = state_35304;
var statearr_35482_37237 = state_35304__$1;
(statearr_35482_37237[(2)] = inst_35294);

(statearr_35482_37237[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (30))){
var inst_35257 = (state_35304[(9)]);
var inst_35245 = (state_35304[(13)]);
var inst_35244 = (state_35304[(10)]);
var inst_35281 = cljs.core.empty_QMARK_(inst_35244);
var inst_35282 = (inst_35245.cljs$core$IFn$_invoke$arity$1 ? inst_35245.cljs$core$IFn$_invoke$arity$1(inst_35257) : inst_35245.call(null,inst_35257));
var inst_35283 = cljs.core.not(inst_35282);
var inst_35284 = ((inst_35281) && (inst_35283));
var state_35304__$1 = state_35304;
var statearr_35489_37240 = state_35304__$1;
(statearr_35489_37240[(2)] = inst_35284);

(statearr_35489_37240[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (10))){
var inst_35179 = (state_35304[(8)]);
var inst_35207 = (state_35304[(2)]);
var inst_35208 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35207,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35210 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35207,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35207,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35212 = inst_35179;
var state_35304__$1 = (function (){var statearr_35498 = state_35304;
(statearr_35498[(16)] = inst_35208);

(statearr_35498[(7)] = inst_35212);

(statearr_35498[(17)] = inst_35211);

(statearr_35498[(18)] = inst_35210);

return statearr_35498;
})();
var statearr_35500_37242 = state_35304__$1;
(statearr_35500_37242[(2)] = null);

(statearr_35500_37242[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (18))){
var inst_35233 = (state_35304[(2)]);
var state_35304__$1 = state_35304;
var statearr_35508_37243 = state_35304__$1;
(statearr_35508_37243[(2)] = inst_35233);

(statearr_35508_37243[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (37))){
var state_35304__$1 = state_35304;
var statearr_35510_37244 = state_35304__$1;
(statearr_35510_37244[(2)] = null);

(statearr_35510_37244[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (8))){
var inst_35179 = (state_35304[(8)]);
var inst_35204 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35179);
var state_35304__$1 = state_35304;
var statearr_35521_37245 = state_35304__$1;
(statearr_35521_37245[(2)] = inst_35204);

(statearr_35521_37245[(1)] = (10));


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
var statearr_35529 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35529[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35529[(1)] = (1));

return statearr_35529;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35304){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35304);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35530){if((e35530 instanceof Object)){
var ex__34210__auto__ = e35530;
var statearr_35531_37253 = state_35304;
(statearr_35531_37253[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35530;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37254 = state_35304;
state_35304 = G__37254;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35304){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_35532 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_35532[(6)] = c__34273__auto___37143);

return statearr_35532;
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
var G__35564 = arguments.length;
switch (G__35564) {
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
var G__35593 = arguments.length;
switch (G__35593) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35580_SHARP_){
if(cljs.core.truth_((p1__35580_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35580_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35580_SHARP_.call(null,topic)))){
return p1__35580_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35580_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35617 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35617 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35618){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35618 = meta35618;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35619,meta35618__$1){
var self__ = this;
var _35619__$1 = this;
return (new cljs.core.async.t_cljs$core$async35617(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35618__$1));
}));

(cljs.core.async.t_cljs$core$async35617.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35619){
var self__ = this;
var _35619__$1 = this;
return self__.meta35618;
}));

(cljs.core.async.t_cljs$core$async35617.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35617.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35617.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35617.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35617.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35617.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35617.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35617.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35618","meta35618",-1447473832,null)], null);
}));

(cljs.core.async.t_cljs$core$async35617.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35617.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35617");

(cljs.core.async.t_cljs$core$async35617.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35617");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35617.
 */
cljs.core.async.__GT_t_cljs$core$async35617 = (function cljs$core$async$__GT_t_cljs$core$async35617(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35618){
return (new cljs.core.async.t_cljs$core$async35617(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35618));
});

}

return (new cljs.core.async.t_cljs$core$async35617(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34273__auto___37285 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_35755){
var state_val_35757 = (state_35755[(1)]);
if((state_val_35757 === (7))){
var inst_35744 = (state_35755[(2)]);
var state_35755__$1 = state_35755;
var statearr_35768_37290 = state_35755__$1;
(statearr_35768_37290[(2)] = inst_35744);

(statearr_35768_37290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35757 === (20))){
var state_35755__$1 = state_35755;
var statearr_35771_37292 = state_35755__$1;
(statearr_35771_37292[(2)] = null);

(statearr_35771_37292[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35757 === (1))){
var state_35755__$1 = state_35755;
var statearr_35783_37293 = state_35755__$1;
(statearr_35783_37293[(2)] = null);

(statearr_35783_37293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35757 === (24))){
var inst_35723 = (state_35755[(7)]);
var inst_35734 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35723);
var state_35755__$1 = state_35755;
var statearr_35788_37294 = state_35755__$1;
(statearr_35788_37294[(2)] = inst_35734);

(statearr_35788_37294[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35757 === (4))){
var inst_35664 = (state_35755[(8)]);
var inst_35664__$1 = (state_35755[(2)]);
var inst_35665 = (inst_35664__$1 == null);
var state_35755__$1 = (function (){var statearr_35795 = state_35755;
(statearr_35795[(8)] = inst_35664__$1);

return statearr_35795;
})();
if(cljs.core.truth_(inst_35665)){
var statearr_35798_37295 = state_35755__$1;
(statearr_35798_37295[(1)] = (5));

} else {
var statearr_35802_37296 = state_35755__$1;
(statearr_35802_37296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35757 === (15))){
var inst_35716 = (state_35755[(2)]);
var state_35755__$1 = state_35755;
var statearr_35805_37299 = state_35755__$1;
(statearr_35805_37299[(2)] = inst_35716);

(statearr_35805_37299[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35757 === (21))){
var inst_35739 = (state_35755[(2)]);
var state_35755__$1 = (function (){var statearr_35810 = state_35755;
(statearr_35810[(9)] = inst_35739);

return statearr_35810;
})();
var statearr_35812_37304 = state_35755__$1;
(statearr_35812_37304[(2)] = null);

(statearr_35812_37304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35757 === (13))){
var inst_35694 = (state_35755[(10)]);
var inst_35696 = cljs.core.chunked_seq_QMARK_(inst_35694);
var state_35755__$1 = state_35755;
if(inst_35696){
var statearr_35818_37305 = state_35755__$1;
(statearr_35818_37305[(1)] = (16));

} else {
var statearr_35820_37306 = state_35755__$1;
(statearr_35820_37306[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35757 === (22))){
var inst_35729 = (state_35755[(2)]);
var state_35755__$1 = state_35755;
if(cljs.core.truth_(inst_35729)){
var statearr_35826_37311 = state_35755__$1;
(statearr_35826_37311[(1)] = (23));

} else {
var statearr_35827_37312 = state_35755__$1;
(statearr_35827_37312[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35757 === (6))){
var inst_35723 = (state_35755[(7)]);
var inst_35664 = (state_35755[(8)]);
var inst_35725 = (state_35755[(11)]);
var inst_35723__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35664) : topic_fn.call(null,inst_35664));
var inst_35724 = cljs.core.deref(mults);
var inst_35725__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35724,inst_35723__$1);
var state_35755__$1 = (function (){var statearr_35828 = state_35755;
(statearr_35828[(7)] = inst_35723__$1);

(statearr_35828[(11)] = inst_35725__$1);

return statearr_35828;
})();
if(cljs.core.truth_(inst_35725__$1)){
var statearr_35829_37317 = state_35755__$1;
(statearr_35829_37317[(1)] = (19));

} else {
var statearr_35830_37318 = state_35755__$1;
(statearr_35830_37318[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35757 === (25))){
var inst_35736 = (state_35755[(2)]);
var state_35755__$1 = state_35755;
var statearr_35831_37322 = state_35755__$1;
(statearr_35831_37322[(2)] = inst_35736);

(statearr_35831_37322[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35757 === (17))){
var inst_35694 = (state_35755[(10)]);
var inst_35706 = cljs.core.first(inst_35694);
var inst_35708 = cljs.core.async.muxch_STAR_(inst_35706);
var inst_35709 = cljs.core.async.close_BANG_(inst_35708);
var inst_35710 = cljs.core.next(inst_35694);
var inst_35674 = inst_35710;
var inst_35675 = null;
var inst_35676 = (0);
var inst_35677 = (0);
var state_35755__$1 = (function (){var statearr_35832 = state_35755;
(statearr_35832[(12)] = inst_35676);

(statearr_35832[(13)] = inst_35674);

(statearr_35832[(14)] = inst_35677);

(statearr_35832[(15)] = inst_35675);

(statearr_35832[(16)] = inst_35709);

return statearr_35832;
})();
var statearr_35835_37327 = state_35755__$1;
(statearr_35835_37327[(2)] = null);

(statearr_35835_37327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35757 === (3))){
var inst_35746 = (state_35755[(2)]);
var state_35755__$1 = state_35755;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35755__$1,inst_35746);
} else {
if((state_val_35757 === (12))){
var inst_35718 = (state_35755[(2)]);
var state_35755__$1 = state_35755;
var statearr_35836_37331 = state_35755__$1;
(statearr_35836_37331[(2)] = inst_35718);

(statearr_35836_37331[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35757 === (2))){
var state_35755__$1 = state_35755;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35755__$1,(4),ch);
} else {
if((state_val_35757 === (23))){
var state_35755__$1 = state_35755;
var statearr_35837_37337 = state_35755__$1;
(statearr_35837_37337[(2)] = null);

(statearr_35837_37337[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35757 === (19))){
var inst_35664 = (state_35755[(8)]);
var inst_35725 = (state_35755[(11)]);
var inst_35727 = cljs.core.async.muxch_STAR_(inst_35725);
var state_35755__$1 = state_35755;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35755__$1,(22),inst_35727,inst_35664);
} else {
if((state_val_35757 === (11))){
var inst_35694 = (state_35755[(10)]);
var inst_35674 = (state_35755[(13)]);
var inst_35694__$1 = cljs.core.seq(inst_35674);
var state_35755__$1 = (function (){var statearr_35840 = state_35755;
(statearr_35840[(10)] = inst_35694__$1);

return statearr_35840;
})();
if(inst_35694__$1){
var statearr_35841_37342 = state_35755__$1;
(statearr_35841_37342[(1)] = (13));

} else {
var statearr_35842_37343 = state_35755__$1;
(statearr_35842_37343[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35757 === (9))){
var inst_35720 = (state_35755[(2)]);
var state_35755__$1 = state_35755;
var statearr_35843_37345 = state_35755__$1;
(statearr_35843_37345[(2)] = inst_35720);

(statearr_35843_37345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35757 === (5))){
var inst_35671 = cljs.core.deref(mults);
var inst_35672 = cljs.core.vals(inst_35671);
var inst_35673 = cljs.core.seq(inst_35672);
var inst_35674 = inst_35673;
var inst_35675 = null;
var inst_35676 = (0);
var inst_35677 = (0);
var state_35755__$1 = (function (){var statearr_35847 = state_35755;
(statearr_35847[(12)] = inst_35676);

(statearr_35847[(13)] = inst_35674);

(statearr_35847[(14)] = inst_35677);

(statearr_35847[(15)] = inst_35675);

return statearr_35847;
})();
var statearr_35849_37352 = state_35755__$1;
(statearr_35849_37352[(2)] = null);

(statearr_35849_37352[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35757 === (14))){
var state_35755__$1 = state_35755;
var statearr_35854_37358 = state_35755__$1;
(statearr_35854_37358[(2)] = null);

(statearr_35854_37358[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35757 === (16))){
var inst_35694 = (state_35755[(10)]);
var inst_35699 = cljs.core.chunk_first(inst_35694);
var inst_35700 = cljs.core.chunk_rest(inst_35694);
var inst_35702 = cljs.core.count(inst_35699);
var inst_35674 = inst_35700;
var inst_35675 = inst_35699;
var inst_35676 = inst_35702;
var inst_35677 = (0);
var state_35755__$1 = (function (){var statearr_35858 = state_35755;
(statearr_35858[(12)] = inst_35676);

(statearr_35858[(13)] = inst_35674);

(statearr_35858[(14)] = inst_35677);

(statearr_35858[(15)] = inst_35675);

return statearr_35858;
})();
var statearr_35859_37361 = state_35755__$1;
(statearr_35859_37361[(2)] = null);

(statearr_35859_37361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35757 === (10))){
var inst_35676 = (state_35755[(12)]);
var inst_35674 = (state_35755[(13)]);
var inst_35677 = (state_35755[(14)]);
var inst_35675 = (state_35755[(15)]);
var inst_35683 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35675,inst_35677);
var inst_35684 = cljs.core.async.muxch_STAR_(inst_35683);
var inst_35686 = cljs.core.async.close_BANG_(inst_35684);
var inst_35689 = (inst_35677 + (1));
var tmp35850 = inst_35676;
var tmp35851 = inst_35674;
var tmp35852 = inst_35675;
var inst_35674__$1 = tmp35851;
var inst_35675__$1 = tmp35852;
var inst_35676__$1 = tmp35850;
var inst_35677__$1 = inst_35689;
var state_35755__$1 = (function (){var statearr_35860 = state_35755;
(statearr_35860[(12)] = inst_35676__$1);

(statearr_35860[(17)] = inst_35686);

(statearr_35860[(13)] = inst_35674__$1);

(statearr_35860[(14)] = inst_35677__$1);

(statearr_35860[(15)] = inst_35675__$1);

return statearr_35860;
})();
var statearr_35861_37365 = state_35755__$1;
(statearr_35861_37365[(2)] = null);

(statearr_35861_37365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35757 === (18))){
var inst_35713 = (state_35755[(2)]);
var state_35755__$1 = state_35755;
var statearr_35864_37367 = state_35755__$1;
(statearr_35864_37367[(2)] = inst_35713);

(statearr_35864_37367[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35757 === (8))){
var inst_35676 = (state_35755[(12)]);
var inst_35677 = (state_35755[(14)]);
var inst_35680 = (inst_35677 < inst_35676);
var inst_35681 = inst_35680;
var state_35755__$1 = state_35755;
if(cljs.core.truth_(inst_35681)){
var statearr_35867_37369 = state_35755__$1;
(statearr_35867_37369[(1)] = (10));

} else {
var statearr_35868_37370 = state_35755__$1;
(statearr_35868_37370[(1)] = (11));

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
var statearr_35872 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35872[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_35872[(1)] = (1));

return statearr_35872;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35755){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35755);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35874){if((e35874 instanceof Object)){
var ex__34210__auto__ = e35874;
var statearr_35876_37376 = state_35755;
(statearr_35876_37376[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35874;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37377 = state_35755;
state_35755 = G__37377;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35755){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_35878 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_35878[(6)] = c__34273__auto___37285);

return statearr_35878;
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
var G__35881 = arguments.length;
switch (G__35881) {
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
var G__35886 = arguments.length;
switch (G__35886) {
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
var G__35898 = arguments.length;
switch (G__35898) {
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
var c__34273__auto___37399 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_35960){
var state_val_35961 = (state_35960[(1)]);
if((state_val_35961 === (7))){
var state_35960__$1 = state_35960;
var statearr_35963_37404 = state_35960__$1;
(statearr_35963_37404[(2)] = null);

(statearr_35963_37404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35961 === (1))){
var state_35960__$1 = state_35960;
var statearr_35964_37405 = state_35960__$1;
(statearr_35964_37405[(2)] = null);

(statearr_35964_37405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35961 === (4))){
var inst_35920 = (state_35960[(7)]);
var inst_35922 = (inst_35920 < cnt);
var state_35960__$1 = state_35960;
if(cljs.core.truth_(inst_35922)){
var statearr_35966_37410 = state_35960__$1;
(statearr_35966_37410[(1)] = (6));

} else {
var statearr_35967_37411 = state_35960__$1;
(statearr_35967_37411[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35961 === (15))){
var inst_35956 = (state_35960[(2)]);
var state_35960__$1 = state_35960;
var statearr_35970_37413 = state_35960__$1;
(statearr_35970_37413[(2)] = inst_35956);

(statearr_35970_37413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35961 === (13))){
var inst_35949 = cljs.core.async.close_BANG_(out);
var state_35960__$1 = state_35960;
var statearr_35971_37417 = state_35960__$1;
(statearr_35971_37417[(2)] = inst_35949);

(statearr_35971_37417[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35961 === (6))){
var state_35960__$1 = state_35960;
var statearr_35973_37418 = state_35960__$1;
(statearr_35973_37418[(2)] = null);

(statearr_35973_37418[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35961 === (3))){
var inst_35958 = (state_35960[(2)]);
var state_35960__$1 = state_35960;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35960__$1,inst_35958);
} else {
if((state_val_35961 === (12))){
var inst_35946 = (state_35960[(8)]);
var inst_35946__$1 = (state_35960[(2)]);
var inst_35947 = cljs.core.some(cljs.core.nil_QMARK_,inst_35946__$1);
var state_35960__$1 = (function (){var statearr_35978 = state_35960;
(statearr_35978[(8)] = inst_35946__$1);

return statearr_35978;
})();
if(cljs.core.truth_(inst_35947)){
var statearr_35979_37423 = state_35960__$1;
(statearr_35979_37423[(1)] = (13));

} else {
var statearr_35980_37425 = state_35960__$1;
(statearr_35980_37425[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35961 === (2))){
var inst_35919 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35920 = (0);
var state_35960__$1 = (function (){var statearr_35981 = state_35960;
(statearr_35981[(7)] = inst_35920);

(statearr_35981[(9)] = inst_35919);

return statearr_35981;
})();
var statearr_35983_37429 = state_35960__$1;
(statearr_35983_37429[(2)] = null);

(statearr_35983_37429[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35961 === (11))){
var inst_35920 = (state_35960[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_35960,(10),Object,null,(9));
var inst_35933 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35920) : chs__$1.call(null,inst_35920));
var inst_35934 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35920) : done.call(null,inst_35920));
var inst_35935 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35933,inst_35934);
var state_35960__$1 = state_35960;
var statearr_35988_37434 = state_35960__$1;
(statearr_35988_37434[(2)] = inst_35935);


cljs.core.async.impl.ioc_helpers.process_exception(state_35960__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35961 === (9))){
var inst_35920 = (state_35960[(7)]);
var inst_35937 = (state_35960[(2)]);
var inst_35938 = (inst_35920 + (1));
var inst_35920__$1 = inst_35938;
var state_35960__$1 = (function (){var statearr_35990 = state_35960;
(statearr_35990[(7)] = inst_35920__$1);

(statearr_35990[(10)] = inst_35937);

return statearr_35990;
})();
var statearr_35991_37439 = state_35960__$1;
(statearr_35991_37439[(2)] = null);

(statearr_35991_37439[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35961 === (5))){
var inst_35944 = (state_35960[(2)]);
var state_35960__$1 = (function (){var statearr_35994 = state_35960;
(statearr_35994[(11)] = inst_35944);

return statearr_35994;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35960__$1,(12),dchan);
} else {
if((state_val_35961 === (14))){
var inst_35946 = (state_35960[(8)]);
var inst_35951 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35946);
var state_35960__$1 = state_35960;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35960__$1,(16),out,inst_35951);
} else {
if((state_val_35961 === (16))){
var inst_35953 = (state_35960[(2)]);
var state_35960__$1 = (function (){var statearr_35996 = state_35960;
(statearr_35996[(12)] = inst_35953);

return statearr_35996;
})();
var statearr_35997_37440 = state_35960__$1;
(statearr_35997_37440[(2)] = null);

(statearr_35997_37440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35961 === (10))){
var inst_35926 = (state_35960[(2)]);
var inst_35927 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35960__$1 = (function (){var statearr_35999 = state_35960;
(statearr_35999[(13)] = inst_35926);

return statearr_35999;
})();
var statearr_36003_37443 = state_35960__$1;
(statearr_36003_37443[(2)] = inst_35927);


cljs.core.async.impl.ioc_helpers.process_exception(state_35960__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35961 === (8))){
var inst_35942 = (state_35960[(2)]);
var state_35960__$1 = state_35960;
var statearr_36006_37446 = state_35960__$1;
(statearr_36006_37446[(2)] = inst_35942);

(statearr_36006_37446[(1)] = (5));


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
var statearr_36010 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36010[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36010[(1)] = (1));

return statearr_36010;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35960){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35960);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36011){if((e36011 instanceof Object)){
var ex__34210__auto__ = e36011;
var statearr_36012_37449 = state_35960;
(statearr_36012_37449[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36011;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37450 = state_35960;
state_35960 = G__37450;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35960){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36016 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36016[(6)] = c__34273__auto___37399);

return statearr_36016;
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
var G__36039 = arguments.length;
switch (G__36039) {
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
var c__34273__auto___37456 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36081){
var state_val_36082 = (state_36081[(1)]);
if((state_val_36082 === (7))){
var inst_36054 = (state_36081[(7)]);
var inst_36053 = (state_36081[(8)]);
var inst_36053__$1 = (state_36081[(2)]);
var inst_36054__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36053__$1,(0),null);
var inst_36055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36053__$1,(1),null);
var inst_36056 = (inst_36054__$1 == null);
var state_36081__$1 = (function (){var statearr_36089 = state_36081;
(statearr_36089[(9)] = inst_36055);

(statearr_36089[(7)] = inst_36054__$1);

(statearr_36089[(8)] = inst_36053__$1);

return statearr_36089;
})();
if(cljs.core.truth_(inst_36056)){
var statearr_36091_37462 = state_36081__$1;
(statearr_36091_37462[(1)] = (8));

} else {
var statearr_36092_37465 = state_36081__$1;
(statearr_36092_37465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36082 === (1))){
var inst_36043 = cljs.core.vec(chs);
var inst_36044 = inst_36043;
var state_36081__$1 = (function (){var statearr_36093 = state_36081;
(statearr_36093[(10)] = inst_36044);

return statearr_36093;
})();
var statearr_36094_37468 = state_36081__$1;
(statearr_36094_37468[(2)] = null);

(statearr_36094_37468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36082 === (4))){
var inst_36044 = (state_36081[(10)]);
var state_36081__$1 = state_36081;
return cljs.core.async.ioc_alts_BANG_(state_36081__$1,(7),inst_36044);
} else {
if((state_val_36082 === (6))){
var inst_36077 = (state_36081[(2)]);
var state_36081__$1 = state_36081;
var statearr_36098_37470 = state_36081__$1;
(statearr_36098_37470[(2)] = inst_36077);

(statearr_36098_37470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36082 === (3))){
var inst_36079 = (state_36081[(2)]);
var state_36081__$1 = state_36081;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36081__$1,inst_36079);
} else {
if((state_val_36082 === (2))){
var inst_36044 = (state_36081[(10)]);
var inst_36046 = cljs.core.count(inst_36044);
var inst_36047 = (inst_36046 > (0));
var state_36081__$1 = state_36081;
if(cljs.core.truth_(inst_36047)){
var statearr_36103_37477 = state_36081__$1;
(statearr_36103_37477[(1)] = (4));

} else {
var statearr_36105_37481 = state_36081__$1;
(statearr_36105_37481[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36082 === (11))){
var inst_36044 = (state_36081[(10)]);
var inst_36070 = (state_36081[(2)]);
var tmp36099 = inst_36044;
var inst_36044__$1 = tmp36099;
var state_36081__$1 = (function (){var statearr_36106 = state_36081;
(statearr_36106[(10)] = inst_36044__$1);

(statearr_36106[(11)] = inst_36070);

return statearr_36106;
})();
var statearr_36107_37485 = state_36081__$1;
(statearr_36107_37485[(2)] = null);

(statearr_36107_37485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36082 === (9))){
var inst_36054 = (state_36081[(7)]);
var state_36081__$1 = state_36081;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36081__$1,(11),out,inst_36054);
} else {
if((state_val_36082 === (5))){
var inst_36075 = cljs.core.async.close_BANG_(out);
var state_36081__$1 = state_36081;
var statearr_36113_37488 = state_36081__$1;
(statearr_36113_37488[(2)] = inst_36075);

(statearr_36113_37488[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36082 === (10))){
var inst_36073 = (state_36081[(2)]);
var state_36081__$1 = state_36081;
var statearr_36116_37490 = state_36081__$1;
(statearr_36116_37490[(2)] = inst_36073);

(statearr_36116_37490[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36082 === (8))){
var inst_36044 = (state_36081[(10)]);
var inst_36055 = (state_36081[(9)]);
var inst_36054 = (state_36081[(7)]);
var inst_36053 = (state_36081[(8)]);
var inst_36065 = (function (){var cs = inst_36044;
var vec__36049 = inst_36053;
var v = inst_36054;
var c = inst_36055;
return (function (p1__36017_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36017_SHARP_);
});
})();
var inst_36066 = cljs.core.filterv(inst_36065,inst_36044);
var inst_36044__$1 = inst_36066;
var state_36081__$1 = (function (){var statearr_36118 = state_36081;
(statearr_36118[(10)] = inst_36044__$1);

return statearr_36118;
})();
var statearr_36120_37498 = state_36081__$1;
(statearr_36120_37498[(2)] = null);

(statearr_36120_37498[(1)] = (2));


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
var statearr_36125 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36125[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36125[(1)] = (1));

return statearr_36125;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36081){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36081);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36126){if((e36126 instanceof Object)){
var ex__34210__auto__ = e36126;
var statearr_36127_37503 = state_36081;
(statearr_36127_37503[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36126;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37507 = state_36081;
state_36081 = G__37507;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36131 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36131[(6)] = c__34273__auto___37456);

return statearr_36131;
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
var G__36135 = arguments.length;
switch (G__36135) {
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
var c__34273__auto___37520 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36165){
var state_val_36167 = (state_36165[(1)]);
if((state_val_36167 === (7))){
var inst_36145 = (state_36165[(7)]);
var inst_36145__$1 = (state_36165[(2)]);
var inst_36146 = (inst_36145__$1 == null);
var inst_36147 = cljs.core.not(inst_36146);
var state_36165__$1 = (function (){var statearr_36168 = state_36165;
(statearr_36168[(7)] = inst_36145__$1);

return statearr_36168;
})();
if(inst_36147){
var statearr_36169_37523 = state_36165__$1;
(statearr_36169_37523[(1)] = (8));

} else {
var statearr_36171_37524 = state_36165__$1;
(statearr_36171_37524[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36167 === (1))){
var inst_36139 = (0);
var state_36165__$1 = (function (){var statearr_36175 = state_36165;
(statearr_36175[(8)] = inst_36139);

return statearr_36175;
})();
var statearr_36177_37526 = state_36165__$1;
(statearr_36177_37526[(2)] = null);

(statearr_36177_37526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36167 === (4))){
var state_36165__$1 = state_36165;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36165__$1,(7),ch);
} else {
if((state_val_36167 === (6))){
var inst_36158 = (state_36165[(2)]);
var state_36165__$1 = state_36165;
var statearr_36180_37531 = state_36165__$1;
(statearr_36180_37531[(2)] = inst_36158);

(statearr_36180_37531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36167 === (3))){
var inst_36160 = (state_36165[(2)]);
var inst_36163 = cljs.core.async.close_BANG_(out);
var state_36165__$1 = (function (){var statearr_36184 = state_36165;
(statearr_36184[(9)] = inst_36160);

return statearr_36184;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36165__$1,inst_36163);
} else {
if((state_val_36167 === (2))){
var inst_36139 = (state_36165[(8)]);
var inst_36141 = (inst_36139 < n);
var state_36165__$1 = state_36165;
if(cljs.core.truth_(inst_36141)){
var statearr_36186_37535 = state_36165__$1;
(statearr_36186_37535[(1)] = (4));

} else {
var statearr_36188_37536 = state_36165__$1;
(statearr_36188_37536[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36167 === (11))){
var inst_36139 = (state_36165[(8)]);
var inst_36150 = (state_36165[(2)]);
var inst_36151 = (inst_36139 + (1));
var inst_36139__$1 = inst_36151;
var state_36165__$1 = (function (){var statearr_36192 = state_36165;
(statearr_36192[(8)] = inst_36139__$1);

(statearr_36192[(10)] = inst_36150);

return statearr_36192;
})();
var statearr_36193_37539 = state_36165__$1;
(statearr_36193_37539[(2)] = null);

(statearr_36193_37539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36167 === (9))){
var state_36165__$1 = state_36165;
var statearr_36195_37545 = state_36165__$1;
(statearr_36195_37545[(2)] = null);

(statearr_36195_37545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36167 === (5))){
var state_36165__$1 = state_36165;
var statearr_36198_37546 = state_36165__$1;
(statearr_36198_37546[(2)] = null);

(statearr_36198_37546[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36167 === (10))){
var inst_36155 = (state_36165[(2)]);
var state_36165__$1 = state_36165;
var statearr_36200_37548 = state_36165__$1;
(statearr_36200_37548[(2)] = inst_36155);

(statearr_36200_37548[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36167 === (8))){
var inst_36145 = (state_36165[(7)]);
var state_36165__$1 = state_36165;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36165__$1,(11),out,inst_36145);
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
var statearr_36205 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36205[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36205[(1)] = (1));

return statearr_36205;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36165){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36165);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36206){if((e36206 instanceof Object)){
var ex__34210__auto__ = e36206;
var statearr_36207_37553 = state_36165;
(statearr_36207_37553[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36206;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37556 = state_36165;
state_36165 = G__37556;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36165){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36208 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36208[(6)] = c__34273__auto___37520);

return statearr_36208;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36216 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36216 = (function (f,ch,meta36217){
this.f = f;
this.ch = ch;
this.meta36217 = meta36217;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36218,meta36217__$1){
var self__ = this;
var _36218__$1 = this;
return (new cljs.core.async.t_cljs$core$async36216(self__.f,self__.ch,meta36217__$1));
}));

(cljs.core.async.t_cljs$core$async36216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36218){
var self__ = this;
var _36218__$1 = this;
return self__.meta36217;
}));

(cljs.core.async.t_cljs$core$async36216.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36216.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36216.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36216.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36216.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36223 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36223 = (function (f,ch,meta36217,_,fn1,meta36224){
this.f = f;
this.ch = ch;
this.meta36217 = meta36217;
this._ = _;
this.fn1 = fn1;
this.meta36224 = meta36224;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36225,meta36224__$1){
var self__ = this;
var _36225__$1 = this;
return (new cljs.core.async.t_cljs$core$async36223(self__.f,self__.ch,self__.meta36217,self__._,self__.fn1,meta36224__$1));
}));

(cljs.core.async.t_cljs$core$async36223.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36225){
var self__ = this;
var _36225__$1 = this;
return self__.meta36224;
}));

(cljs.core.async.t_cljs$core$async36223.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36223.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36223.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36223.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36213_SHARP_){
var G__36226 = (((p1__36213_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36213_SHARP_) : self__.f.call(null,p1__36213_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36226) : f1.call(null,G__36226));
});
}));

(cljs.core.async.t_cljs$core$async36223.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36217","meta36217",-1182892909,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36216","cljs.core.async/t_cljs$core$async36216",-991981981,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36224","meta36224",-1174837688,null)], null);
}));

(cljs.core.async.t_cljs$core$async36223.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36223.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36223");

(cljs.core.async.t_cljs$core$async36223.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36223");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36223.
 */
cljs.core.async.__GT_t_cljs$core$async36223 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36223(f__$1,ch__$1,meta36217__$1,___$2,fn1__$1,meta36224){
return (new cljs.core.async.t_cljs$core$async36223(f__$1,ch__$1,meta36217__$1,___$2,fn1__$1,meta36224));
});

}

return (new cljs.core.async.t_cljs$core$async36223(self__.f,self__.ch,self__.meta36217,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36227 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36227) : self__.f.call(null,G__36227));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36216.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36216.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36216.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36217","meta36217",-1182892909,null)], null);
}));

(cljs.core.async.t_cljs$core$async36216.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36216.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36216");

(cljs.core.async.t_cljs$core$async36216.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36216");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36216.
 */
cljs.core.async.__GT_t_cljs$core$async36216 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36216(f__$1,ch__$1,meta36217){
return (new cljs.core.async.t_cljs$core$async36216(f__$1,ch__$1,meta36217));
});

}

return (new cljs.core.async.t_cljs$core$async36216(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36229 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36229 = (function (f,ch,meta36230){
this.f = f;
this.ch = ch;
this.meta36230 = meta36230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36231,meta36230__$1){
var self__ = this;
var _36231__$1 = this;
return (new cljs.core.async.t_cljs$core$async36229(self__.f,self__.ch,meta36230__$1));
}));

(cljs.core.async.t_cljs$core$async36229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36231){
var self__ = this;
var _36231__$1 = this;
return self__.meta36230;
}));

(cljs.core.async.t_cljs$core$async36229.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36229.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36229.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36229.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36229.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36229.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36229.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36230","meta36230",-1227852521,null)], null);
}));

(cljs.core.async.t_cljs$core$async36229.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36229.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36229");

(cljs.core.async.t_cljs$core$async36229.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36229");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36229.
 */
cljs.core.async.__GT_t_cljs$core$async36229 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36229(f__$1,ch__$1,meta36230){
return (new cljs.core.async.t_cljs$core$async36229(f__$1,ch__$1,meta36230));
});

}

return (new cljs.core.async.t_cljs$core$async36229(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36241 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36241 = (function (p,ch,meta36242){
this.p = p;
this.ch = ch;
this.meta36242 = meta36242;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36243,meta36242__$1){
var self__ = this;
var _36243__$1 = this;
return (new cljs.core.async.t_cljs$core$async36241(self__.p,self__.ch,meta36242__$1));
}));

(cljs.core.async.t_cljs$core$async36241.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36243){
var self__ = this;
var _36243__$1 = this;
return self__.meta36242;
}));

(cljs.core.async.t_cljs$core$async36241.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36241.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36241.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36241.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36241.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36241.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36241.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36241.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36242","meta36242",-1061108286,null)], null);
}));

(cljs.core.async.t_cljs$core$async36241.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36241.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36241");

(cljs.core.async.t_cljs$core$async36241.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36241");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36241.
 */
cljs.core.async.__GT_t_cljs$core$async36241 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36241(p__$1,ch__$1,meta36242){
return (new cljs.core.async.t_cljs$core$async36241(p__$1,ch__$1,meta36242));
});

}

return (new cljs.core.async.t_cljs$core$async36241(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36258 = arguments.length;
switch (G__36258) {
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
var c__34273__auto___37618 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36286){
var state_val_36287 = (state_36286[(1)]);
if((state_val_36287 === (7))){
var inst_36282 = (state_36286[(2)]);
var state_36286__$1 = state_36286;
var statearr_36288_37621 = state_36286__$1;
(statearr_36288_37621[(2)] = inst_36282);

(statearr_36288_37621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36287 === (1))){
var state_36286__$1 = state_36286;
var statearr_36289_37625 = state_36286__$1;
(statearr_36289_37625[(2)] = null);

(statearr_36289_37625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36287 === (4))){
var inst_36261 = (state_36286[(7)]);
var inst_36261__$1 = (state_36286[(2)]);
var inst_36262 = (inst_36261__$1 == null);
var state_36286__$1 = (function (){var statearr_36290 = state_36286;
(statearr_36290[(7)] = inst_36261__$1);

return statearr_36290;
})();
if(cljs.core.truth_(inst_36262)){
var statearr_36291_37633 = state_36286__$1;
(statearr_36291_37633[(1)] = (5));

} else {
var statearr_36292_37634 = state_36286__$1;
(statearr_36292_37634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36287 === (6))){
var inst_36261 = (state_36286[(7)]);
var inst_36266 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36261) : p.call(null,inst_36261));
var state_36286__$1 = state_36286;
if(cljs.core.truth_(inst_36266)){
var statearr_36295_37636 = state_36286__$1;
(statearr_36295_37636[(1)] = (8));

} else {
var statearr_36296_37638 = state_36286__$1;
(statearr_36296_37638[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36287 === (3))){
var inst_36284 = (state_36286[(2)]);
var state_36286__$1 = state_36286;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36286__$1,inst_36284);
} else {
if((state_val_36287 === (2))){
var state_36286__$1 = state_36286;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36286__$1,(4),ch);
} else {
if((state_val_36287 === (11))){
var inst_36276 = (state_36286[(2)]);
var state_36286__$1 = state_36286;
var statearr_36300_37644 = state_36286__$1;
(statearr_36300_37644[(2)] = inst_36276);

(statearr_36300_37644[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36287 === (9))){
var state_36286__$1 = state_36286;
var statearr_36302_37647 = state_36286__$1;
(statearr_36302_37647[(2)] = null);

(statearr_36302_37647[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36287 === (5))){
var inst_36264 = cljs.core.async.close_BANG_(out);
var state_36286__$1 = state_36286;
var statearr_36304_37649 = state_36286__$1;
(statearr_36304_37649[(2)] = inst_36264);

(statearr_36304_37649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36287 === (10))){
var inst_36279 = (state_36286[(2)]);
var state_36286__$1 = (function (){var statearr_36305 = state_36286;
(statearr_36305[(8)] = inst_36279);

return statearr_36305;
})();
var statearr_36306_37650 = state_36286__$1;
(statearr_36306_37650[(2)] = null);

(statearr_36306_37650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36287 === (8))){
var inst_36261 = (state_36286[(7)]);
var state_36286__$1 = state_36286;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36286__$1,(11),out,inst_36261);
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
var statearr_36307 = [null,null,null,null,null,null,null,null,null];
(statearr_36307[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36307[(1)] = (1));

return statearr_36307;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36286){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36286);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36308){if((e36308 instanceof Object)){
var ex__34210__auto__ = e36308;
var statearr_36309_37659 = state_36286;
(statearr_36309_37659[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36308;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37661 = state_36286;
state_36286 = G__37661;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36286){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36312 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36312[(6)] = c__34273__auto___37618);

return statearr_36312;
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
var G__36314 = arguments.length;
switch (G__36314) {
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
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36391){
var state_val_36392 = (state_36391[(1)]);
if((state_val_36392 === (7))){
var inst_36387 = (state_36391[(2)]);
var state_36391__$1 = state_36391;
var statearr_36393_37677 = state_36391__$1;
(statearr_36393_37677[(2)] = inst_36387);

(statearr_36393_37677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36392 === (20))){
var inst_36357 = (state_36391[(7)]);
var inst_36368 = (state_36391[(2)]);
var inst_36369 = cljs.core.next(inst_36357);
var inst_36343 = inst_36369;
var inst_36344 = null;
var inst_36345 = (0);
var inst_36346 = (0);
var state_36391__$1 = (function (){var statearr_36400 = state_36391;
(statearr_36400[(8)] = inst_36368);

(statearr_36400[(9)] = inst_36345);

(statearr_36400[(10)] = inst_36346);

(statearr_36400[(11)] = inst_36344);

(statearr_36400[(12)] = inst_36343);

return statearr_36400;
})();
var statearr_36401_37684 = state_36391__$1;
(statearr_36401_37684[(2)] = null);

(statearr_36401_37684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36392 === (1))){
var state_36391__$1 = state_36391;
var statearr_36402_37686 = state_36391__$1;
(statearr_36402_37686[(2)] = null);

(statearr_36402_37686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36392 === (4))){
var inst_36327 = (state_36391[(13)]);
var inst_36327__$1 = (state_36391[(2)]);
var inst_36329 = (inst_36327__$1 == null);
var state_36391__$1 = (function (){var statearr_36404 = state_36391;
(statearr_36404[(13)] = inst_36327__$1);

return statearr_36404;
})();
if(cljs.core.truth_(inst_36329)){
var statearr_36405_37689 = state_36391__$1;
(statearr_36405_37689[(1)] = (5));

} else {
var statearr_36407_37690 = state_36391__$1;
(statearr_36407_37690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36392 === (15))){
var state_36391__$1 = state_36391;
var statearr_36411_37691 = state_36391__$1;
(statearr_36411_37691[(2)] = null);

(statearr_36411_37691[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36392 === (21))){
var state_36391__$1 = state_36391;
var statearr_36413_37697 = state_36391__$1;
(statearr_36413_37697[(2)] = null);

(statearr_36413_37697[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36392 === (13))){
var inst_36345 = (state_36391[(9)]);
var inst_36346 = (state_36391[(10)]);
var inst_36344 = (state_36391[(11)]);
var inst_36343 = (state_36391[(12)]);
var inst_36353 = (state_36391[(2)]);
var inst_36354 = (inst_36346 + (1));
var tmp36408 = inst_36345;
var tmp36409 = inst_36344;
var tmp36410 = inst_36343;
var inst_36343__$1 = tmp36410;
var inst_36344__$1 = tmp36409;
var inst_36345__$1 = tmp36408;
var inst_36346__$1 = inst_36354;
var state_36391__$1 = (function (){var statearr_36416 = state_36391;
(statearr_36416[(9)] = inst_36345__$1);

(statearr_36416[(10)] = inst_36346__$1);

(statearr_36416[(14)] = inst_36353);

(statearr_36416[(11)] = inst_36344__$1);

(statearr_36416[(12)] = inst_36343__$1);

return statearr_36416;
})();
var statearr_36417_37706 = state_36391__$1;
(statearr_36417_37706[(2)] = null);

(statearr_36417_37706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36392 === (22))){
var state_36391__$1 = state_36391;
var statearr_36418_37711 = state_36391__$1;
(statearr_36418_37711[(2)] = null);

(statearr_36418_37711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36392 === (6))){
var inst_36327 = (state_36391[(13)]);
var inst_36337 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36327) : f.call(null,inst_36327));
var inst_36338 = cljs.core.seq(inst_36337);
var inst_36343 = inst_36338;
var inst_36344 = null;
var inst_36345 = (0);
var inst_36346 = (0);
var state_36391__$1 = (function (){var statearr_36421 = state_36391;
(statearr_36421[(9)] = inst_36345);

(statearr_36421[(10)] = inst_36346);

(statearr_36421[(11)] = inst_36344);

(statearr_36421[(12)] = inst_36343);

return statearr_36421;
})();
var statearr_36422_37717 = state_36391__$1;
(statearr_36422_37717[(2)] = null);

(statearr_36422_37717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36392 === (17))){
var inst_36357 = (state_36391[(7)]);
var inst_36361 = cljs.core.chunk_first(inst_36357);
var inst_36362 = cljs.core.chunk_rest(inst_36357);
var inst_36363 = cljs.core.count(inst_36361);
var inst_36343 = inst_36362;
var inst_36344 = inst_36361;
var inst_36345 = inst_36363;
var inst_36346 = (0);
var state_36391__$1 = (function (){var statearr_36423 = state_36391;
(statearr_36423[(9)] = inst_36345);

(statearr_36423[(10)] = inst_36346);

(statearr_36423[(11)] = inst_36344);

(statearr_36423[(12)] = inst_36343);

return statearr_36423;
})();
var statearr_36424_37728 = state_36391__$1;
(statearr_36424_37728[(2)] = null);

(statearr_36424_37728[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36392 === (3))){
var inst_36389 = (state_36391[(2)]);
var state_36391__$1 = state_36391;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36391__$1,inst_36389);
} else {
if((state_val_36392 === (12))){
var inst_36377 = (state_36391[(2)]);
var state_36391__$1 = state_36391;
var statearr_36427_37731 = state_36391__$1;
(statearr_36427_37731[(2)] = inst_36377);

(statearr_36427_37731[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36392 === (2))){
var state_36391__$1 = state_36391;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36391__$1,(4),in$);
} else {
if((state_val_36392 === (23))){
var inst_36385 = (state_36391[(2)]);
var state_36391__$1 = state_36391;
var statearr_36428_37733 = state_36391__$1;
(statearr_36428_37733[(2)] = inst_36385);

(statearr_36428_37733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36392 === (19))){
var inst_36372 = (state_36391[(2)]);
var state_36391__$1 = state_36391;
var statearr_36431_37739 = state_36391__$1;
(statearr_36431_37739[(2)] = inst_36372);

(statearr_36431_37739[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36392 === (11))){
var inst_36357 = (state_36391[(7)]);
var inst_36343 = (state_36391[(12)]);
var inst_36357__$1 = cljs.core.seq(inst_36343);
var state_36391__$1 = (function (){var statearr_36434 = state_36391;
(statearr_36434[(7)] = inst_36357__$1);

return statearr_36434;
})();
if(inst_36357__$1){
var statearr_36435_37744 = state_36391__$1;
(statearr_36435_37744[(1)] = (14));

} else {
var statearr_36436_37745 = state_36391__$1;
(statearr_36436_37745[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36392 === (9))){
var inst_36379 = (state_36391[(2)]);
var inst_36380 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36391__$1 = (function (){var statearr_36438 = state_36391;
(statearr_36438[(15)] = inst_36379);

return statearr_36438;
})();
if(cljs.core.truth_(inst_36380)){
var statearr_36443_37748 = state_36391__$1;
(statearr_36443_37748[(1)] = (21));

} else {
var statearr_36447_37752 = state_36391__$1;
(statearr_36447_37752[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36392 === (5))){
var inst_36331 = cljs.core.async.close_BANG_(out);
var state_36391__$1 = state_36391;
var statearr_36448_37757 = state_36391__$1;
(statearr_36448_37757[(2)] = inst_36331);

(statearr_36448_37757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36392 === (14))){
var inst_36357 = (state_36391[(7)]);
var inst_36359 = cljs.core.chunked_seq_QMARK_(inst_36357);
var state_36391__$1 = state_36391;
if(inst_36359){
var statearr_36450_37760 = state_36391__$1;
(statearr_36450_37760[(1)] = (17));

} else {
var statearr_36452_37762 = state_36391__$1;
(statearr_36452_37762[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36392 === (16))){
var inst_36375 = (state_36391[(2)]);
var state_36391__$1 = state_36391;
var statearr_36453_37764 = state_36391__$1;
(statearr_36453_37764[(2)] = inst_36375);

(statearr_36453_37764[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36392 === (10))){
var inst_36346 = (state_36391[(10)]);
var inst_36344 = (state_36391[(11)]);
var inst_36351 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36344,inst_36346);
var state_36391__$1 = state_36391;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36391__$1,(13),out,inst_36351);
} else {
if((state_val_36392 === (18))){
var inst_36357 = (state_36391[(7)]);
var inst_36366 = cljs.core.first(inst_36357);
var state_36391__$1 = state_36391;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36391__$1,(20),out,inst_36366);
} else {
if((state_val_36392 === (8))){
var inst_36345 = (state_36391[(9)]);
var inst_36346 = (state_36391[(10)]);
var inst_36348 = (inst_36346 < inst_36345);
var inst_36349 = inst_36348;
var state_36391__$1 = state_36391;
if(cljs.core.truth_(inst_36349)){
var statearr_36457_37774 = state_36391__$1;
(statearr_36457_37774[(1)] = (10));

} else {
var statearr_36458_37775 = state_36391__$1;
(statearr_36458_37775[(1)] = (11));

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
var statearr_36461 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36461[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36461[(1)] = (1));

return statearr_36461;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36391){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36391);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36462){if((e36462 instanceof Object)){
var ex__34210__auto__ = e36462;
var statearr_36463_37787 = state_36391;
(statearr_36463_37787[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36462;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37789 = state_36391;
state_36391 = G__37789;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36391){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36464 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36464[(6)] = c__34273__auto__);

return statearr_36464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));

return c__34273__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36468 = arguments.length;
switch (G__36468) {
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
var G__36479 = arguments.length;
switch (G__36479) {
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
var G__36488 = arguments.length;
switch (G__36488) {
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
var c__34273__auto___37816 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36515){
var state_val_36516 = (state_36515[(1)]);
if((state_val_36516 === (7))){
var inst_36510 = (state_36515[(2)]);
var state_36515__$1 = state_36515;
var statearr_36519_37824 = state_36515__$1;
(statearr_36519_37824[(2)] = inst_36510);

(statearr_36519_37824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (1))){
var inst_36492 = null;
var state_36515__$1 = (function (){var statearr_36520 = state_36515;
(statearr_36520[(7)] = inst_36492);

return statearr_36520;
})();
var statearr_36521_37827 = state_36515__$1;
(statearr_36521_37827[(2)] = null);

(statearr_36521_37827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (4))){
var inst_36495 = (state_36515[(8)]);
var inst_36495__$1 = (state_36515[(2)]);
var inst_36496 = (inst_36495__$1 == null);
var inst_36497 = cljs.core.not(inst_36496);
var state_36515__$1 = (function (){var statearr_36524 = state_36515;
(statearr_36524[(8)] = inst_36495__$1);

return statearr_36524;
})();
if(inst_36497){
var statearr_36525_37830 = state_36515__$1;
(statearr_36525_37830[(1)] = (5));

} else {
var statearr_36526_37834 = state_36515__$1;
(statearr_36526_37834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (6))){
var state_36515__$1 = state_36515;
var statearr_36528_37836 = state_36515__$1;
(statearr_36528_37836[(2)] = null);

(statearr_36528_37836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (3))){
var inst_36512 = (state_36515[(2)]);
var inst_36513 = cljs.core.async.close_BANG_(out);
var state_36515__$1 = (function (){var statearr_36535 = state_36515;
(statearr_36535[(9)] = inst_36512);

return statearr_36535;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36515__$1,inst_36513);
} else {
if((state_val_36516 === (2))){
var state_36515__$1 = state_36515;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36515__$1,(4),ch);
} else {
if((state_val_36516 === (11))){
var inst_36495 = (state_36515[(8)]);
var inst_36504 = (state_36515[(2)]);
var inst_36492 = inst_36495;
var state_36515__$1 = (function (){var statearr_36536 = state_36515;
(statearr_36536[(7)] = inst_36492);

(statearr_36536[(10)] = inst_36504);

return statearr_36536;
})();
var statearr_36538_37842 = state_36515__$1;
(statearr_36538_37842[(2)] = null);

(statearr_36538_37842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (9))){
var inst_36495 = (state_36515[(8)]);
var state_36515__$1 = state_36515;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36515__$1,(11),out,inst_36495);
} else {
if((state_val_36516 === (5))){
var inst_36492 = (state_36515[(7)]);
var inst_36495 = (state_36515[(8)]);
var inst_36499 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36495,inst_36492);
var state_36515__$1 = state_36515;
if(inst_36499){
var statearr_36542_37843 = state_36515__$1;
(statearr_36542_37843[(1)] = (8));

} else {
var statearr_36543_37844 = state_36515__$1;
(statearr_36543_37844[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (10))){
var inst_36507 = (state_36515[(2)]);
var state_36515__$1 = state_36515;
var statearr_36546_37847 = state_36515__$1;
(statearr_36546_37847[(2)] = inst_36507);

(statearr_36546_37847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (8))){
var inst_36492 = (state_36515[(7)]);
var tmp36540 = inst_36492;
var inst_36492__$1 = tmp36540;
var state_36515__$1 = (function (){var statearr_36547 = state_36515;
(statearr_36547[(7)] = inst_36492__$1);

return statearr_36547;
})();
var statearr_36548_37848 = state_36515__$1;
(statearr_36548_37848[(2)] = null);

(statearr_36548_37848[(1)] = (2));


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
var statearr_36550 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36550[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36550[(1)] = (1));

return statearr_36550;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36515){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36515);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36551){if((e36551 instanceof Object)){
var ex__34210__auto__ = e36551;
var statearr_36552_37851 = state_36515;
(statearr_36552_37851[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36551;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37852 = state_36515;
state_36515 = G__37852;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36515){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36554 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36554[(6)] = c__34273__auto___37816);

return statearr_36554;
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
var G__36560 = arguments.length;
switch (G__36560) {
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
var c__34273__auto___37861 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36601){
var state_val_36602 = (state_36601[(1)]);
if((state_val_36602 === (7))){
var inst_36596 = (state_36601[(2)]);
var state_36601__$1 = state_36601;
var statearr_36605_37862 = state_36601__$1;
(statearr_36605_37862[(2)] = inst_36596);

(statearr_36605_37862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36602 === (1))){
var inst_36563 = (new Array(n));
var inst_36564 = inst_36563;
var inst_36565 = (0);
var state_36601__$1 = (function (){var statearr_36612 = state_36601;
(statearr_36612[(7)] = inst_36564);

(statearr_36612[(8)] = inst_36565);

return statearr_36612;
})();
var statearr_36613_37864 = state_36601__$1;
(statearr_36613_37864[(2)] = null);

(statearr_36613_37864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36602 === (4))){
var inst_36568 = (state_36601[(9)]);
var inst_36568__$1 = (state_36601[(2)]);
var inst_36569 = (inst_36568__$1 == null);
var inst_36570 = cljs.core.not(inst_36569);
var state_36601__$1 = (function (){var statearr_36616 = state_36601;
(statearr_36616[(9)] = inst_36568__$1);

return statearr_36616;
})();
if(inst_36570){
var statearr_36617_37866 = state_36601__$1;
(statearr_36617_37866[(1)] = (5));

} else {
var statearr_36618_37867 = state_36601__$1;
(statearr_36618_37867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36602 === (15))){
var inst_36590 = (state_36601[(2)]);
var state_36601__$1 = state_36601;
var statearr_36619_37868 = state_36601__$1;
(statearr_36619_37868[(2)] = inst_36590);

(statearr_36619_37868[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36602 === (13))){
var state_36601__$1 = state_36601;
var statearr_36622_37869 = state_36601__$1;
(statearr_36622_37869[(2)] = null);

(statearr_36622_37869[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36602 === (6))){
var inst_36565 = (state_36601[(8)]);
var inst_36586 = (inst_36565 > (0));
var state_36601__$1 = state_36601;
if(cljs.core.truth_(inst_36586)){
var statearr_36624_37870 = state_36601__$1;
(statearr_36624_37870[(1)] = (12));

} else {
var statearr_36625_37872 = state_36601__$1;
(statearr_36625_37872[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36602 === (3))){
var inst_36598 = (state_36601[(2)]);
var state_36601__$1 = state_36601;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36601__$1,inst_36598);
} else {
if((state_val_36602 === (12))){
var inst_36564 = (state_36601[(7)]);
var inst_36588 = cljs.core.vec(inst_36564);
var state_36601__$1 = state_36601;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36601__$1,(15),out,inst_36588);
} else {
if((state_val_36602 === (2))){
var state_36601__$1 = state_36601;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36601__$1,(4),ch);
} else {
if((state_val_36602 === (11))){
var inst_36580 = (state_36601[(2)]);
var inst_36581 = (new Array(n));
var inst_36564 = inst_36581;
var inst_36565 = (0);
var state_36601__$1 = (function (){var statearr_36627 = state_36601;
(statearr_36627[(7)] = inst_36564);

(statearr_36627[(8)] = inst_36565);

(statearr_36627[(10)] = inst_36580);

return statearr_36627;
})();
var statearr_36629_37882 = state_36601__$1;
(statearr_36629_37882[(2)] = null);

(statearr_36629_37882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36602 === (9))){
var inst_36564 = (state_36601[(7)]);
var inst_36578 = cljs.core.vec(inst_36564);
var state_36601__$1 = state_36601;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36601__$1,(11),out,inst_36578);
} else {
if((state_val_36602 === (5))){
var inst_36573 = (state_36601[(11)]);
var inst_36564 = (state_36601[(7)]);
var inst_36565 = (state_36601[(8)]);
var inst_36568 = (state_36601[(9)]);
var inst_36572 = (inst_36564[inst_36565] = inst_36568);
var inst_36573__$1 = (inst_36565 + (1));
var inst_36574 = (inst_36573__$1 < n);
var state_36601__$1 = (function (){var statearr_36631 = state_36601;
(statearr_36631[(11)] = inst_36573__$1);

(statearr_36631[(12)] = inst_36572);

return statearr_36631;
})();
if(cljs.core.truth_(inst_36574)){
var statearr_36634_37887 = state_36601__$1;
(statearr_36634_37887[(1)] = (8));

} else {
var statearr_36635_37889 = state_36601__$1;
(statearr_36635_37889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36602 === (14))){
var inst_36593 = (state_36601[(2)]);
var inst_36594 = cljs.core.async.close_BANG_(out);
var state_36601__$1 = (function (){var statearr_36640 = state_36601;
(statearr_36640[(13)] = inst_36593);

return statearr_36640;
})();
var statearr_36641_37892 = state_36601__$1;
(statearr_36641_37892[(2)] = inst_36594);

(statearr_36641_37892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36602 === (10))){
var inst_36584 = (state_36601[(2)]);
var state_36601__$1 = state_36601;
var statearr_36647_37894 = state_36601__$1;
(statearr_36647_37894[(2)] = inst_36584);

(statearr_36647_37894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36602 === (8))){
var inst_36573 = (state_36601[(11)]);
var inst_36564 = (state_36601[(7)]);
var tmp36636 = inst_36564;
var inst_36564__$1 = tmp36636;
var inst_36565 = inst_36573;
var state_36601__$1 = (function (){var statearr_36650 = state_36601;
(statearr_36650[(7)] = inst_36564__$1);

(statearr_36650[(8)] = inst_36565);

return statearr_36650;
})();
var statearr_36651_37900 = state_36601__$1;
(statearr_36651_37900[(2)] = null);

(statearr_36651_37900[(1)] = (2));


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
var statearr_36653 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36653[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36653[(1)] = (1));

return statearr_36653;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36601){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36601);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36654){if((e36654 instanceof Object)){
var ex__34210__auto__ = e36654;
var statearr_36655_37907 = state_36601;
(statearr_36655_37907[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36654;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37908 = state_36601;
state_36601 = G__37908;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36601){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36656 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36656[(6)] = c__34273__auto___37861);

return statearr_36656;
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
var G__36658 = arguments.length;
switch (G__36658) {
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
var c__34273__auto___37920 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36710){
var state_val_36711 = (state_36710[(1)]);
if((state_val_36711 === (7))){
var inst_36700 = (state_36710[(2)]);
var state_36710__$1 = state_36710;
var statearr_36712_37926 = state_36710__$1;
(statearr_36712_37926[(2)] = inst_36700);

(statearr_36712_37926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36711 === (1))){
var inst_36659 = [];
var inst_36660 = inst_36659;
var inst_36661 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36710__$1 = (function (){var statearr_36714 = state_36710;
(statearr_36714[(7)] = inst_36661);

(statearr_36714[(8)] = inst_36660);

return statearr_36714;
})();
var statearr_36717_37928 = state_36710__$1;
(statearr_36717_37928[(2)] = null);

(statearr_36717_37928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36711 === (4))){
var inst_36665 = (state_36710[(9)]);
var inst_36665__$1 = (state_36710[(2)]);
var inst_36666 = (inst_36665__$1 == null);
var inst_36667 = cljs.core.not(inst_36666);
var state_36710__$1 = (function (){var statearr_36723 = state_36710;
(statearr_36723[(9)] = inst_36665__$1);

return statearr_36723;
})();
if(inst_36667){
var statearr_36725_37934 = state_36710__$1;
(statearr_36725_37934[(1)] = (5));

} else {
var statearr_36726_37938 = state_36710__$1;
(statearr_36726_37938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36711 === (15))){
var inst_36694 = (state_36710[(2)]);
var state_36710__$1 = state_36710;
var statearr_36728_37940 = state_36710__$1;
(statearr_36728_37940[(2)] = inst_36694);

(statearr_36728_37940[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36711 === (13))){
var state_36710__$1 = state_36710;
var statearr_36729_37941 = state_36710__$1;
(statearr_36729_37941[(2)] = null);

(statearr_36729_37941[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36711 === (6))){
var inst_36660 = (state_36710[(8)]);
var inst_36689 = inst_36660.length;
var inst_36690 = (inst_36689 > (0));
var state_36710__$1 = state_36710;
if(cljs.core.truth_(inst_36690)){
var statearr_36730_37943 = state_36710__$1;
(statearr_36730_37943[(1)] = (12));

} else {
var statearr_36732_37945 = state_36710__$1;
(statearr_36732_37945[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36711 === (3))){
var inst_36702 = (state_36710[(2)]);
var state_36710__$1 = state_36710;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36710__$1,inst_36702);
} else {
if((state_val_36711 === (12))){
var inst_36660 = (state_36710[(8)]);
var inst_36692 = cljs.core.vec(inst_36660);
var state_36710__$1 = state_36710;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36710__$1,(15),out,inst_36692);
} else {
if((state_val_36711 === (2))){
var state_36710__$1 = state_36710;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36710__$1,(4),ch);
} else {
if((state_val_36711 === (11))){
var inst_36665 = (state_36710[(9)]);
var inst_36672 = (state_36710[(10)]);
var inst_36682 = (state_36710[(2)]);
var inst_36683 = [];
var inst_36684 = inst_36683.push(inst_36665);
var inst_36660 = inst_36683;
var inst_36661 = inst_36672;
var state_36710__$1 = (function (){var statearr_36737 = state_36710;
(statearr_36737[(11)] = inst_36684);

(statearr_36737[(7)] = inst_36661);

(statearr_36737[(12)] = inst_36682);

(statearr_36737[(8)] = inst_36660);

return statearr_36737;
})();
var statearr_36738_37955 = state_36710__$1;
(statearr_36738_37955[(2)] = null);

(statearr_36738_37955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36711 === (9))){
var inst_36660 = (state_36710[(8)]);
var inst_36680 = cljs.core.vec(inst_36660);
var state_36710__$1 = state_36710;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36710__$1,(11),out,inst_36680);
} else {
if((state_val_36711 === (5))){
var inst_36661 = (state_36710[(7)]);
var inst_36665 = (state_36710[(9)]);
var inst_36672 = (state_36710[(10)]);
var inst_36672__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36665) : f.call(null,inst_36665));
var inst_36673 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36672__$1,inst_36661);
var inst_36674 = cljs.core.keyword_identical_QMARK_(inst_36661,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36675 = ((inst_36673) || (inst_36674));
var state_36710__$1 = (function (){var statearr_36741 = state_36710;
(statearr_36741[(10)] = inst_36672__$1);

return statearr_36741;
})();
if(cljs.core.truth_(inst_36675)){
var statearr_36742_37960 = state_36710__$1;
(statearr_36742_37960[(1)] = (8));

} else {
var statearr_36745_37964 = state_36710__$1;
(statearr_36745_37964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36711 === (14))){
var inst_36697 = (state_36710[(2)]);
var inst_36698 = cljs.core.async.close_BANG_(out);
var state_36710__$1 = (function (){var statearr_36749 = state_36710;
(statearr_36749[(13)] = inst_36697);

return statearr_36749;
})();
var statearr_36750_37967 = state_36710__$1;
(statearr_36750_37967[(2)] = inst_36698);

(statearr_36750_37967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36711 === (10))){
var inst_36687 = (state_36710[(2)]);
var state_36710__$1 = state_36710;
var statearr_36751_37969 = state_36710__$1;
(statearr_36751_37969[(2)] = inst_36687);

(statearr_36751_37969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36711 === (8))){
var inst_36665 = (state_36710[(9)]);
var inst_36660 = (state_36710[(8)]);
var inst_36672 = (state_36710[(10)]);
var inst_36677 = inst_36660.push(inst_36665);
var tmp36747 = inst_36660;
var inst_36660__$1 = tmp36747;
var inst_36661 = inst_36672;
var state_36710__$1 = (function (){var statearr_36753 = state_36710;
(statearr_36753[(7)] = inst_36661);

(statearr_36753[(14)] = inst_36677);

(statearr_36753[(8)] = inst_36660__$1);

return statearr_36753;
})();
var statearr_36754_37976 = state_36710__$1;
(statearr_36754_37976[(2)] = null);

(statearr_36754_37976[(1)] = (2));


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
var statearr_36755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36755[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36755[(1)] = (1));

return statearr_36755;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36710){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36710);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36757){if((e36757 instanceof Object)){
var ex__34210__auto__ = e36757;
var statearr_36758_37980 = state_36710;
(statearr_36758_37980[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36757;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37982 = state_36710;
state_36710 = G__37982;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36710){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36763 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36763[(6)] = c__34273__auto___37920);

return statearr_36763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
