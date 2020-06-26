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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34334 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34334 = (function (f,blockable,meta34335){
this.f = f;
this.blockable = blockable;
this.meta34335 = meta34335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34336,meta34335__$1){
var self__ = this;
var _34336__$1 = this;
return (new cljs.core.async.t_cljs$core$async34334(self__.f,self__.blockable,meta34335__$1));
}));

(cljs.core.async.t_cljs$core$async34334.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34336){
var self__ = this;
var _34336__$1 = this;
return self__.meta34335;
}));

(cljs.core.async.t_cljs$core$async34334.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34334.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34334.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async34334.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async34334.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34335","meta34335",1072514632,null)], null);
}));

(cljs.core.async.t_cljs$core$async34334.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34334.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34334");

(cljs.core.async.t_cljs$core$async34334.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34334");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34334.
 */
cljs.core.async.__GT_t_cljs$core$async34334 = (function cljs$core$async$__GT_t_cljs$core$async34334(f__$1,blockable__$1,meta34335){
return (new cljs.core.async.t_cljs$core$async34334(f__$1,blockable__$1,meta34335));
});

}

return (new cljs.core.async.t_cljs$core$async34334(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var val_36805 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36805) : fn1.call(null,val_36805));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36805) : fn1.call(null,val_36805));
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
var n__4666__auto___36810 = n;
var x_36811 = (0);
while(true){
if((x_36811 < n__4666__auto___36810)){
(a[x_36811] = x_36811);

var G__36813 = (x_36811 + (1));
x_36811 = G__36813;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34348 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34348 = (function (flag,meta34349){
this.flag = flag;
this.meta34349 = meta34349;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34350,meta34349__$1){
var self__ = this;
var _34350__$1 = this;
return (new cljs.core.async.t_cljs$core$async34348(self__.flag,meta34349__$1));
}));

(cljs.core.async.t_cljs$core$async34348.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34350){
var self__ = this;
var _34350__$1 = this;
return self__.meta34349;
}));

(cljs.core.async.t_cljs$core$async34348.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34348.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34348.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34348.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async34348.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34349","meta34349",1097138592,null)], null);
}));

(cljs.core.async.t_cljs$core$async34348.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34348.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34348");

(cljs.core.async.t_cljs$core$async34348.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34348");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34348.
 */
cljs.core.async.__GT_t_cljs$core$async34348 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34348(flag__$1,meta34349){
return (new cljs.core.async.t_cljs$core$async34348(flag__$1,meta34349));
});

}

return (new cljs.core.async.t_cljs$core$async34348(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34358 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34358 = (function (flag,cb,meta34359){
this.flag = flag;
this.cb = cb;
this.meta34359 = meta34359;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34360,meta34359__$1){
var self__ = this;
var _34360__$1 = this;
return (new cljs.core.async.t_cljs$core$async34358(self__.flag,self__.cb,meta34359__$1));
}));

(cljs.core.async.t_cljs$core$async34358.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34360){
var self__ = this;
var _34360__$1 = this;
return self__.meta34359;
}));

(cljs.core.async.t_cljs$core$async34358.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34358.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34358.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34358.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34358.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34359","meta34359",932037391,null)], null);
}));

(cljs.core.async.t_cljs$core$async34358.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34358.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34358");

(cljs.core.async.t_cljs$core$async34358.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34358");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34358.
 */
cljs.core.async.__GT_t_cljs$core$async34358 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34358(flag__$1,cb__$1,meta34359){
return (new cljs.core.async.t_cljs$core$async34358(flag__$1,cb__$1,meta34359));
});

}

return (new cljs.core.async.t_cljs$core$async34358(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36821 = (i + (1));
i = G__36821;
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
var len__4789__auto___36823 = arguments.length;
var i__4790__auto___36824 = (0);
while(true){
if((i__4790__auto___36824 < len__4789__auto___36823)){
args__4795__auto__.push((arguments[i__4790__auto___36824]));

var G__36826 = (i__4790__auto___36824 + (1));
i__4790__auto___36824 = G__36826;
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
var c__34274__auto___36831 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34411){
var state_val_34412 = (state_34411[(1)]);
if((state_val_34412 === (7))){
var inst_34407 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34425_36832 = state_34411__$1;
(statearr_34425_36832[(2)] = inst_34407);

(statearr_34425_36832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (1))){
var state_34411__$1 = state_34411;
var statearr_34426_36834 = state_34411__$1;
(statearr_34426_36834[(2)] = null);

(statearr_34426_36834[(1)] = (2));


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
var statearr_34428_36835 = state_34411__$1;
(statearr_34428_36835[(1)] = (5));

} else {
var statearr_34429_36837 = state_34411__$1;
(statearr_34429_36837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (13))){
var state_34411__$1 = state_34411;
var statearr_34430_36838 = state_34411__$1;
(statearr_34430_36838[(2)] = null);

(statearr_34430_36838[(1)] = (14));


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
var statearr_34431_36840 = state_34411__$1;
(statearr_34431_36840[(2)] = null);

(statearr_34431_36840[(1)] = (2));


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
var statearr_34432_36841 = state_34411__$1;
(statearr_34432_36841[(1)] = (12));

} else {
var statearr_34433_36843 = state_34411__$1;
(statearr_34433_36843[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (9))){
var state_34411__$1 = state_34411;
var statearr_34434_36844 = state_34411__$1;
(statearr_34434_36844[(2)] = null);

(statearr_34434_36844[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (5))){
var state_34411__$1 = state_34411;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34435_36845 = state_34411__$1;
(statearr_34435_36845[(1)] = (8));

} else {
var statearr_34436_36846 = state_34411__$1;
(statearr_34436_36846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (14))){
var inst_34405 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34437_36848 = state_34411__$1;
(statearr_34437_36848[(2)] = inst_34405);

(statearr_34437_36848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (10))){
var inst_34397 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34438_36849 = state_34411__$1;
(statearr_34438_36849[(2)] = inst_34397);

(statearr_34438_36849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (8))){
var inst_34394 = cljs.core.async.close_BANG_(to);
var state_34411__$1 = state_34411;
var statearr_34439_36851 = state_34411__$1;
(statearr_34439_36851[(2)] = inst_34394);

(statearr_34439_36851[(1)] = (10));


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
var statearr_34442_36853 = state_34411;
(statearr_34442_36853[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36854 = state_34411;
state_34411 = G__36854;
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
(statearr_34443[(6)] = c__34274__auto___36831);

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
var c__34274__auto___36857 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
var statearr_34457_36860 = state_34452;
(statearr_34457_36860[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36861 = state_34452;
state_34452 = G__36861;
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
(statearr_34458[(6)] = c__34274__auto___36857);

return statearr_34458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
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
var n__4666__auto___36864 = n;
var __36865 = (0);
while(true){
if((__36865 < n__4666__auto___36864)){
var G__34463_36866 = type;
var G__34463_36867__$1 = (((G__34463_36866 instanceof cljs.core.Keyword))?G__34463_36866.fqn:null);
switch (G__34463_36867__$1) {
case "compute":
var c__34274__auto___36869 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36865,c__34274__auto___36869,G__34463_36866,G__34463_36867__$1,n__4666__auto___36864,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36865,c__34274__auto___36869,G__34463_36866,G__34463_36867__$1,n__4666__auto___36864,jobs,results,process,async){
return (function (state_34476){
var state_val_34477 = (state_34476[(1)]);
if((state_val_34477 === (1))){
var state_34476__$1 = state_34476;
var statearr_34478_36871 = state_34476__$1;
(statearr_34478_36871[(2)] = null);

(statearr_34478_36871[(1)] = (2));


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
var statearr_34479_36873 = state_34476__$1;
(statearr_34479_36873[(1)] = (5));

} else {
var statearr_34480_36874 = state_34476__$1;
(statearr_34480_36874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (5))){
var state_34476__$1 = state_34476;
var statearr_34481_36875 = state_34476__$1;
(statearr_34481_36875[(2)] = null);

(statearr_34481_36875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (6))){
var state_34476__$1 = state_34476;
var statearr_34482_36877 = state_34476__$1;
(statearr_34482_36877[(2)] = null);

(statearr_34482_36877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (7))){
var inst_34472 = (state_34476[(2)]);
var state_34476__$1 = state_34476;
var statearr_34483_36878 = state_34476__$1;
(statearr_34483_36878[(2)] = inst_34472);

(statearr_34483_36878[(1)] = (3));


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
});})(__36865,c__34274__auto___36869,G__34463_36866,G__34463_36867__$1,n__4666__auto___36864,jobs,results,process,async))
;
return ((function (__36865,switch__34206__auto__,c__34274__auto___36869,G__34463_36866,G__34463_36867__$1,n__4666__auto___36864,jobs,results,process,async){
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
}catch (e34489){if((e34489 instanceof Object)){
var ex__34210__auto__ = e34489;
var statearr_34490_36880 = state_34476;
(statearr_34490_36880[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34489;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36882 = state_34476;
state_34476 = G__36882;
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
;})(__36865,switch__34206__auto__,c__34274__auto___36869,G__34463_36866,G__34463_36867__$1,n__4666__auto___36864,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34491 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34491[(6)] = c__34274__auto___36869);

return statearr_34491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36865,c__34274__auto___36869,G__34463_36866,G__34463_36867__$1,n__4666__auto___36864,jobs,results,process,async))
);


break;
case "async":
var c__34274__auto___36883 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36865,c__34274__auto___36883,G__34463_36866,G__34463_36867__$1,n__4666__auto___36864,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36865,c__34274__auto___36883,G__34463_36866,G__34463_36867__$1,n__4666__auto___36864,jobs,results,process,async){
return (function (state_34504){
var state_val_34505 = (state_34504[(1)]);
if((state_val_34505 === (1))){
var state_34504__$1 = state_34504;
var statearr_34507_36885 = state_34504__$1;
(statearr_34507_36885[(2)] = null);

(statearr_34507_36885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (2))){
var state_34504__$1 = state_34504;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34504__$1,(4),jobs);
} else {
if((state_val_34505 === (3))){
var inst_34502 = (state_34504[(2)]);
var state_34504__$1 = state_34504;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34504__$1,inst_34502);
} else {
if((state_val_34505 === (4))){
var inst_34494 = (state_34504[(2)]);
var inst_34495 = async(inst_34494);
var state_34504__$1 = state_34504;
if(cljs.core.truth_(inst_34495)){
var statearr_34508_36887 = state_34504__$1;
(statearr_34508_36887[(1)] = (5));

} else {
var statearr_34509_36888 = state_34504__$1;
(statearr_34509_36888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (5))){
var state_34504__$1 = state_34504;
var statearr_34510_36889 = state_34504__$1;
(statearr_34510_36889[(2)] = null);

(statearr_34510_36889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (6))){
var state_34504__$1 = state_34504;
var statearr_34511_36891 = state_34504__$1;
(statearr_34511_36891[(2)] = null);

(statearr_34511_36891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (7))){
var inst_34500 = (state_34504[(2)]);
var state_34504__$1 = state_34504;
var statearr_34512_36892 = state_34504__$1;
(statearr_34512_36892[(2)] = inst_34500);

(statearr_34512_36892[(1)] = (3));


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
});})(__36865,c__34274__auto___36883,G__34463_36866,G__34463_36867__$1,n__4666__auto___36864,jobs,results,process,async))
;
return ((function (__36865,switch__34206__auto__,c__34274__auto___36883,G__34463_36866,G__34463_36867__$1,n__4666__auto___36864,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34514 = [null,null,null,null,null,null,null];
(statearr_34514[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34514[(1)] = (1));

return statearr_34514;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34504){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34504);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34515){if((e34515 instanceof Object)){
var ex__34210__auto__ = e34515;
var statearr_34516_36894 = state_34504;
(statearr_34516_36894[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34515;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36896 = state_34504;
state_34504 = G__36896;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34504){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36865,switch__34206__auto__,c__34274__auto___36883,G__34463_36866,G__34463_36867__$1,n__4666__auto___36864,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34518 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34518[(6)] = c__34274__auto___36883);

return statearr_34518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36865,c__34274__auto___36883,G__34463_36866,G__34463_36867__$1,n__4666__auto___36864,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34463_36867__$1)].join('')));

}

var G__36898 = (__36865 + (1));
__36865 = G__36898;
continue;
} else {
}
break;
}

var c__34274__auto___36899 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34541){
var state_val_34542 = (state_34541[(1)]);
if((state_val_34542 === (7))){
var inst_34537 = (state_34541[(2)]);
var state_34541__$1 = state_34541;
var statearr_34550_36900 = state_34541__$1;
(statearr_34550_36900[(2)] = inst_34537);

(statearr_34550_36900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34542 === (1))){
var state_34541__$1 = state_34541;
var statearr_34551_36901 = state_34541__$1;
(statearr_34551_36901[(2)] = null);

(statearr_34551_36901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34542 === (4))){
var inst_34521 = (state_34541[(7)]);
var inst_34521__$1 = (state_34541[(2)]);
var inst_34522 = (inst_34521__$1 == null);
var state_34541__$1 = (function (){var statearr_34552 = state_34541;
(statearr_34552[(7)] = inst_34521__$1);

return statearr_34552;
})();
if(cljs.core.truth_(inst_34522)){
var statearr_34553_36903 = state_34541__$1;
(statearr_34553_36903[(1)] = (5));

} else {
var statearr_34554_36904 = state_34541__$1;
(statearr_34554_36904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34542 === (6))){
var inst_34521 = (state_34541[(7)]);
var inst_34526 = (state_34541[(8)]);
var inst_34526__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34528 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34529 = [inst_34521,inst_34526__$1];
var inst_34530 = (new cljs.core.PersistentVector(null,2,(5),inst_34528,inst_34529,null));
var state_34541__$1 = (function (){var statearr_34555 = state_34541;
(statearr_34555[(8)] = inst_34526__$1);

return statearr_34555;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34541__$1,(8),jobs,inst_34530);
} else {
if((state_val_34542 === (3))){
var inst_34539 = (state_34541[(2)]);
var state_34541__$1 = state_34541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34541__$1,inst_34539);
} else {
if((state_val_34542 === (2))){
var state_34541__$1 = state_34541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34541__$1,(4),from);
} else {
if((state_val_34542 === (9))){
var inst_34534 = (state_34541[(2)]);
var state_34541__$1 = (function (){var statearr_34556 = state_34541;
(statearr_34556[(9)] = inst_34534);

return statearr_34556;
})();
var statearr_34558_36907 = state_34541__$1;
(statearr_34558_36907[(2)] = null);

(statearr_34558_36907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34542 === (5))){
var inst_34524 = cljs.core.async.close_BANG_(jobs);
var state_34541__$1 = state_34541;
var statearr_34559_36908 = state_34541__$1;
(statearr_34559_36908[(2)] = inst_34524);

(statearr_34559_36908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34542 === (8))){
var inst_34526 = (state_34541[(8)]);
var inst_34532 = (state_34541[(2)]);
var state_34541__$1 = (function (){var statearr_34560 = state_34541;
(statearr_34560[(10)] = inst_34532);

return statearr_34560;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34541__$1,(9),results,inst_34526);
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
var statearr_34561 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34561[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34561[(1)] = (1));

return statearr_34561;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34541){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34541);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34562){if((e34562 instanceof Object)){
var ex__34210__auto__ = e34562;
var statearr_34563_36911 = state_34541;
(statearr_34563_36911[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34562;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36912 = state_34541;
state_34541 = G__36912;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34541){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34568 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34568[(6)] = c__34274__auto___36899);

return statearr_34568;
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
var statearr_34611_36914 = state_34609__$1;
(statearr_34611_36914[(2)] = inst_34605);

(statearr_34611_36914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (20))){
var state_34609__$1 = state_34609;
var statearr_34612_36916 = state_34609__$1;
(statearr_34612_36916[(2)] = null);

(statearr_34612_36916[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (1))){
var state_34609__$1 = state_34609;
var statearr_34613_36917 = state_34609__$1;
(statearr_34613_36917[(2)] = null);

(statearr_34613_36917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (4))){
var inst_34571 = (state_34609[(7)]);
var inst_34571__$1 = (state_34609[(2)]);
var inst_34572 = (inst_34571__$1 == null);
var state_34609__$1 = (function (){var statearr_34615 = state_34609;
(statearr_34615[(7)] = inst_34571__$1);

return statearr_34615;
})();
if(cljs.core.truth_(inst_34572)){
var statearr_34617_36919 = state_34609__$1;
(statearr_34617_36919[(1)] = (5));

} else {
var statearr_34619_36920 = state_34609__$1;
(statearr_34619_36920[(1)] = (6));

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
var statearr_34620_36922 = state_34609__$1;
(statearr_34620_36922[(2)] = inst_34600);

(statearr_34620_36922[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (13))){
var inst_34602 = (state_34609[(2)]);
var state_34609__$1 = (function (){var statearr_34621 = state_34609;
(statearr_34621[(9)] = inst_34602);

return statearr_34621;
})();
var statearr_34622_36923 = state_34609__$1;
(statearr_34622_36923[(2)] = null);

(statearr_34622_36923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (6))){
var inst_34571 = (state_34609[(7)]);
var state_34609__$1 = state_34609;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34609__$1,(11),inst_34571);
} else {
if((state_val_34610 === (17))){
var inst_34595 = (state_34609[(2)]);
var state_34609__$1 = state_34609;
if(cljs.core.truth_(inst_34595)){
var statearr_34623_36925 = state_34609__$1;
(statearr_34623_36925[(1)] = (19));

} else {
var statearr_34624_36926 = state_34609__$1;
(statearr_34624_36926[(1)] = (20));

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
var statearr_34625_36928 = state_34609__$1;
(statearr_34625_36928[(2)] = null);

(statearr_34625_36928[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (11))){
var inst_34584 = (state_34609[(2)]);
var state_34609__$1 = (function (){var statearr_34626 = state_34609;
(statearr_34626[(10)] = inst_34584);

return statearr_34626;
})();
var statearr_34627_36929 = state_34609__$1;
(statearr_34627_36929[(2)] = null);

(statearr_34627_36929[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (9))){
var state_34609__$1 = state_34609;
var statearr_34628_36931 = state_34609__$1;
(statearr_34628_36931[(2)] = null);

(statearr_34628_36931[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (5))){
var state_34609__$1 = state_34609;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_36932 = state_34609__$1;
(statearr_34629_36932[(1)] = (8));

} else {
var statearr_34630_36933 = state_34609__$1;
(statearr_34630_36933[(1)] = (9));

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
var statearr_34632_36935 = state_34609__$1;
(statearr_34632_36935[(1)] = (15));

} else {
var statearr_34633_36936 = state_34609__$1;
(statearr_34633_36936[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (16))){
var state_34609__$1 = state_34609;
var statearr_34634_36937 = state_34609__$1;
(statearr_34634_36937[(2)] = false);

(statearr_34634_36937[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (10))){
var inst_34581 = (state_34609[(2)]);
var state_34609__$1 = state_34609;
var statearr_34635_36939 = state_34609__$1;
(statearr_34635_36939[(2)] = inst_34581);

(statearr_34635_36939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (18))){
var inst_34592 = (state_34609[(2)]);
var state_34609__$1 = state_34609;
var statearr_34636_36940 = state_34609__$1;
(statearr_34636_36940[(2)] = inst_34592);

(statearr_34636_36940[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (8))){
var inst_34578 = cljs.core.async.close_BANG_(to);
var state_34609__$1 = state_34609;
var statearr_34637_36942 = state_34609__$1;
(statearr_34637_36942[(2)] = inst_34578);

(statearr_34637_36942[(1)] = (10));


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
var statearr_34640_36944 = state_34609;
(statearr_34640_36944[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36945 = state_34609;
state_34609 = G__36945;
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
var c__34274__auto___36954 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34673){
var state_val_34674 = (state_34673[(1)]);
if((state_val_34674 === (7))){
var inst_34669 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34675_36956 = state_34673__$1;
(statearr_34675_36956[(2)] = inst_34669);

(statearr_34675_36956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (1))){
var state_34673__$1 = state_34673;
var statearr_34676_36957 = state_34673__$1;
(statearr_34676_36957[(2)] = null);

(statearr_34676_36957[(1)] = (2));


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
var statearr_34678_36959 = state_34673__$1;
(statearr_34678_36959[(1)] = (5));

} else {
var statearr_34679_36960 = state_34673__$1;
(statearr_34679_36960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (13))){
var state_34673__$1 = state_34673;
var statearr_34680_36961 = state_34673__$1;
(statearr_34680_36961[(2)] = null);

(statearr_34680_36961[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (6))){
var inst_34650 = (state_34673[(7)]);
var inst_34656 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34650) : p.call(null,inst_34650));
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34656)){
var statearr_34681_36963 = state_34673__$1;
(statearr_34681_36963[(1)] = (9));

} else {
var statearr_34682_36964 = state_34673__$1;
(statearr_34682_36964[(1)] = (10));

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
var statearr_34683_36966 = state_34673__$1;
(statearr_34683_36966[(2)] = null);

(statearr_34683_36966[(1)] = (2));


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
var statearr_34684_36967 = state_34673__$1;
(statearr_34684_36967[(2)] = tc);

(statearr_34684_36967[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (5))){
var inst_34653 = cljs.core.async.close_BANG_(tc);
var inst_34654 = cljs.core.async.close_BANG_(fc);
var state_34673__$1 = (function (){var statearr_34685 = state_34673;
(statearr_34685[(8)] = inst_34653);

return statearr_34685;
})();
var statearr_34686_36969 = state_34673__$1;
(statearr_34686_36969[(2)] = inst_34654);

(statearr_34686_36969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (14))){
var inst_34667 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34687_36970 = state_34673__$1;
(statearr_34687_36970[(2)] = inst_34667);

(statearr_34687_36970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (10))){
var state_34673__$1 = state_34673;
var statearr_34688_36972 = state_34673__$1;
(statearr_34688_36972[(2)] = fc);

(statearr_34688_36972[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (8))){
var inst_34662 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34662)){
var statearr_34689_36973 = state_34673__$1;
(statearr_34689_36973[(1)] = (12));

} else {
var statearr_34690_36974 = state_34673__$1;
(statearr_34690_36974[(1)] = (13));

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
var statearr_34693_36976 = state_34673;
(statearr_34693_36976[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34692;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36978 = state_34673;
state_34673 = G__36978;
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
var state__34276__auto__ = (function (){var statearr_34697 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34697[(6)] = c__34274__auto___36954);

return statearr_34697;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34723){
var state_val_34724 = (state_34723[(1)]);
if((state_val_34724 === (7))){
var inst_34719 = (state_34723[(2)]);
var state_34723__$1 = state_34723;
var statearr_34726_36980 = state_34723__$1;
(statearr_34726_36980[(2)] = inst_34719);

(statearr_34726_36980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34724 === (1))){
var inst_34701 = init;
var state_34723__$1 = (function (){var statearr_34727 = state_34723;
(statearr_34727[(7)] = inst_34701);

return statearr_34727;
})();
var statearr_34728_36982 = state_34723__$1;
(statearr_34728_36982[(2)] = null);

(statearr_34728_36982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34724 === (4))){
var inst_34706 = (state_34723[(8)]);
var inst_34706__$1 = (state_34723[(2)]);
var inst_34707 = (inst_34706__$1 == null);
var state_34723__$1 = (function (){var statearr_34729 = state_34723;
(statearr_34729[(8)] = inst_34706__$1);

return statearr_34729;
})();
if(cljs.core.truth_(inst_34707)){
var statearr_34730_36983 = state_34723__$1;
(statearr_34730_36983[(1)] = (5));

} else {
var statearr_34733_36985 = state_34723__$1;
(statearr_34733_36985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34724 === (6))){
var inst_34710 = (state_34723[(9)]);
var inst_34706 = (state_34723[(8)]);
var inst_34701 = (state_34723[(7)]);
var inst_34710__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34701,inst_34706) : f.call(null,inst_34701,inst_34706));
var inst_34711 = cljs.core.reduced_QMARK_(inst_34710__$1);
var state_34723__$1 = (function (){var statearr_34734 = state_34723;
(statearr_34734[(9)] = inst_34710__$1);

return statearr_34734;
})();
if(inst_34711){
var statearr_34735_36986 = state_34723__$1;
(statearr_34735_36986[(1)] = (8));

} else {
var statearr_34736_36988 = state_34723__$1;
(statearr_34736_36988[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34724 === (3))){
var inst_34721 = (state_34723[(2)]);
var state_34723__$1 = state_34723;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34723__$1,inst_34721);
} else {
if((state_val_34724 === (2))){
var state_34723__$1 = state_34723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34723__$1,(4),ch);
} else {
if((state_val_34724 === (9))){
var inst_34710 = (state_34723[(9)]);
var inst_34701 = inst_34710;
var state_34723__$1 = (function (){var statearr_34737 = state_34723;
(statearr_34737[(7)] = inst_34701);

return statearr_34737;
})();
var statearr_34738_36990 = state_34723__$1;
(statearr_34738_36990[(2)] = null);

(statearr_34738_36990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34724 === (5))){
var inst_34701 = (state_34723[(7)]);
var state_34723__$1 = state_34723;
var statearr_34739_36991 = state_34723__$1;
(statearr_34739_36991[(2)] = inst_34701);

(statearr_34739_36991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34724 === (10))){
var inst_34717 = (state_34723[(2)]);
var state_34723__$1 = state_34723;
var statearr_34740_36992 = state_34723__$1;
(statearr_34740_36992[(2)] = inst_34717);

(statearr_34740_36992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34724 === (8))){
var inst_34710 = (state_34723[(9)]);
var inst_34713 = cljs.core.deref(inst_34710);
var state_34723__$1 = state_34723;
var statearr_34742_36994 = state_34723__$1;
(statearr_34742_36994[(2)] = inst_34713);

(statearr_34742_36994[(1)] = (10));


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
var statearr_34744 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34744[(0)] = cljs$core$async$reduce_$_state_machine__34207__auto__);

(statearr_34744[(1)] = (1));

return statearr_34744;
});
var cljs$core$async$reduce_$_state_machine__34207__auto____1 = (function (state_34723){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34723);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34745){if((e34745 instanceof Object)){
var ex__34210__auto__ = e34745;
var statearr_34746_36996 = state_34723;
(statearr_34746_36996[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34745;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36997 = state_34723;
state_34723 = G__36997;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34207__auto__ = function(state_34723){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34207__auto____1.call(this,state_34723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34207__auto____0;
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34207__auto____1;
return cljs$core$async$reduce_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34749 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34749[(6)] = c__34274__auto__);

return statearr_34749;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34758){
var state_val_34759 = (state_34758[(1)]);
if((state_val_34759 === (1))){
var inst_34753 = cljs.core.async.reduce(f__$1,init,ch);
var state_34758__$1 = state_34758;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34758__$1,(2),inst_34753);
} else {
if((state_val_34759 === (2))){
var inst_34755 = (state_34758[(2)]);
var inst_34756 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34755) : f__$1.call(null,inst_34755));
var state_34758__$1 = state_34758;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34758__$1,inst_34756);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34207__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34207__auto____0 = (function (){
var statearr_34760 = [null,null,null,null,null,null,null];
(statearr_34760[(0)] = cljs$core$async$transduce_$_state_machine__34207__auto__);

(statearr_34760[(1)] = (1));

return statearr_34760;
});
var cljs$core$async$transduce_$_state_machine__34207__auto____1 = (function (state_34758){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34758);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34762){if((e34762 instanceof Object)){
var ex__34210__auto__ = e34762;
var statearr_34763_37001 = state_34758;
(statearr_34763_37001[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34762;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37002 = state_34758;
state_34758 = G__37002;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34207__auto__ = function(state_34758){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34207__auto____1.call(this,state_34758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34207__auto____0;
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34207__auto____1;
return cljs$core$async$transduce_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34764 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34764[(6)] = c__34274__auto__);

return statearr_34764;
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
var G__34766 = arguments.length;
switch (G__34766) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34797){
var state_val_34798 = (state_34797[(1)]);
if((state_val_34798 === (7))){
var inst_34779 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
var statearr_34799_37007 = state_34797__$1;
(statearr_34799_37007[(2)] = inst_34779);

(statearr_34799_37007[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (1))){
var inst_34770 = cljs.core.seq(coll);
var inst_34771 = inst_34770;
var state_34797__$1 = (function (){var statearr_34800 = state_34797;
(statearr_34800[(7)] = inst_34771);

return statearr_34800;
})();
var statearr_34801_37008 = state_34797__$1;
(statearr_34801_37008[(2)] = null);

(statearr_34801_37008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (4))){
var inst_34771 = (state_34797[(7)]);
var inst_34777 = cljs.core.first(inst_34771);
var state_34797__$1 = state_34797;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34797__$1,(7),ch,inst_34777);
} else {
if((state_val_34798 === (13))){
var inst_34791 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
var statearr_34805_37010 = state_34797__$1;
(statearr_34805_37010[(2)] = inst_34791);

(statearr_34805_37010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (6))){
var inst_34782 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
if(cljs.core.truth_(inst_34782)){
var statearr_34806_37011 = state_34797__$1;
(statearr_34806_37011[(1)] = (8));

} else {
var statearr_34807_37012 = state_34797__$1;
(statearr_34807_37012[(1)] = (9));

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
var statearr_34808_37014 = state_34797__$1;
(statearr_34808_37014[(2)] = null);

(statearr_34808_37014[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (2))){
var inst_34771 = (state_34797[(7)]);
var state_34797__$1 = state_34797;
if(cljs.core.truth_(inst_34771)){
var statearr_34809_37015 = state_34797__$1;
(statearr_34809_37015[(1)] = (4));

} else {
var statearr_34810_37017 = state_34797__$1;
(statearr_34810_37017[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (11))){
var inst_34788 = cljs.core.async.close_BANG_(ch);
var state_34797__$1 = state_34797;
var statearr_34811_37018 = state_34797__$1;
(statearr_34811_37018[(2)] = inst_34788);

(statearr_34811_37018[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (9))){
var state_34797__$1 = state_34797;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34812_37019 = state_34797__$1;
(statearr_34812_37019[(1)] = (11));

} else {
var statearr_34813_37020 = state_34797__$1;
(statearr_34813_37020[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (5))){
var inst_34771 = (state_34797[(7)]);
var state_34797__$1 = state_34797;
var statearr_34814_37022 = state_34797__$1;
(statearr_34814_37022[(2)] = inst_34771);

(statearr_34814_37022[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (10))){
var inst_34793 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
var statearr_34815_37023 = state_34797__$1;
(statearr_34815_37023[(2)] = inst_34793);

(statearr_34815_37023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (8))){
var inst_34771 = (state_34797[(7)]);
var inst_34784 = cljs.core.next(inst_34771);
var inst_34771__$1 = inst_34784;
var state_34797__$1 = (function (){var statearr_34816 = state_34797;
(statearr_34816[(7)] = inst_34771__$1);

return statearr_34816;
})();
var statearr_34817_37025 = state_34797__$1;
(statearr_34817_37025[(2)] = null);

(statearr_34817_37025[(1)] = (2));


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
var statearr_34820_37027 = state_34797;
(statearr_34820_37027[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34819;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37028 = state_34797;
state_34797 = G__37028;
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
var c__34274__auto___37042 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34978){
var state_val_34979 = (state_34978[(1)]);
if((state_val_34979 === (7))){
var inst_34974 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_34980_37046 = state_34978__$1;
(statearr_34980_37046[(2)] = inst_34974);

(statearr_34980_37046[(1)] = (3));


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
var statearr_34982_37048 = state_34978__$1;
(statearr_34982_37048[(1)] = (22));

} else {
var statearr_34983_37049 = state_34978__$1;
(statearr_34983_37049[(1)] = (23));

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
var statearr_34985_37051 = state_34978__$1;
(statearr_34985_37051[(1)] = (30));

} else {
var statearr_34986_37052 = state_34978__$1;
(statearr_34986_37052[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (1))){
var state_34978__$1 = state_34978;
var statearr_34987_37053 = state_34978__$1;
(statearr_34987_37053[(2)] = null);

(statearr_34987_37053[(1)] = (2));


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
var statearr_34989_37056 = state_34978__$1;
(statearr_34989_37056[(2)] = null);

(statearr_34989_37056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (39))){
var state_34978__$1 = state_34978;
var statearr_34993_37058 = state_34978__$1;
(statearr_34993_37058[(2)] = null);

(statearr_34993_37058[(1)] = (41));


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
var statearr_34995_37062 = state_34978__$1;
(statearr_34995_37062[(1)] = (5));

} else {
var statearr_34996_37063 = state_34978__$1;
(statearr_34996_37063[(1)] = (6));

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
var statearr_34998_37064 = state_34978__$1;
(statearr_34998_37064[(2)] = null);

(statearr_34998_37064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (21))){
var inst_34900 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35002_37065 = state_34978__$1;
(statearr_35002_37065[(2)] = inst_34900);

(statearr_35002_37065[(1)] = (18));


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
var statearr_35004_37066 = state_34978__$1;
(statearr_35004_37066[(2)] = inst_34931);

(statearr_35004_37066[(1)] = (32));


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
var statearr_35006_37073 = state_34978__$1;
(statearr_35006_37073[(2)] = null);

(statearr_35006_37073[(1)] = (25));


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
var statearr_35008_37074 = state_34978__$1;
(statearr_35008_37074[(2)] = inst_34951);

(statearr_35008_37074[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (33))){
var inst_34937 = (state_34978[(25)]);
var inst_34939 = cljs.core.chunked_seq_QMARK_(inst_34937);
var state_34978__$1 = state_34978;
if(inst_34939){
var statearr_35010_37075 = state_34978__$1;
(statearr_35010_37075[(1)] = (36));

} else {
var statearr_35012_37076 = state_34978__$1;
(statearr_35012_37076[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (13))){
var inst_34867 = (state_34978[(26)]);
var inst_34870 = cljs.core.async.close_BANG_(inst_34867);
var state_34978__$1 = state_34978;
var statearr_35014_37078 = state_34978__$1;
(statearr_35014_37078[(2)] = inst_34870);

(statearr_35014_37078[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (22))){
var inst_34890 = (state_34978[(8)]);
var inst_34893 = cljs.core.async.close_BANG_(inst_34890);
var state_34978__$1 = state_34978;
var statearr_35018_37082 = state_34978__$1;
(statearr_35018_37082[(2)] = inst_34893);

(statearr_35018_37082[(1)] = (24));


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
var state_34978__$1 = (function (){var statearr_35019 = state_34978;
(statearr_35019[(20)] = inst_34918);

(statearr_35019[(11)] = inst_34919);

(statearr_35019[(21)] = inst_34920);

(statearr_35019[(12)] = inst_34921);

return statearr_35019;
})();
var statearr_35020_37088 = state_34978__$1;
(statearr_35020_37088[(2)] = null);

(statearr_35020_37088[(1)] = (25));


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
var state_34978__$1 = (function (){var statearr_35021 = state_34978;
(statearr_35021[(20)] = inst_34918);

(statearr_35021[(11)] = inst_34919);

(statearr_35021[(21)] = inst_34920);

(statearr_35021[(27)] = inst_34953);

(statearr_35021[(12)] = inst_34921);

return statearr_35021;
})();
var statearr_35022_37093 = state_34978__$1;
(statearr_35022_37093[(2)] = null);

(statearr_35022_37093[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (43))){
var state_34978__$1 = state_34978;
var statearr_35023_37095 = state_34978__$1;
(statearr_35023_37095[(2)] = null);

(statearr_35023_37095[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (29))){
var inst_34962 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35024_37100 = state_34978__$1;
(statearr_35024_37100[(2)] = inst_34962);

(statearr_35024_37100[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (44))){
var inst_34971 = (state_34978[(2)]);
var state_34978__$1 = (function (){var statearr_35025 = state_34978;
(statearr_35025[(28)] = inst_34971);

return statearr_35025;
})();
var statearr_35028_37106 = state_34978__$1;
(statearr_35028_37106[(2)] = null);

(statearr_35028_37106[(1)] = (2));


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
var state_34978__$1 = (function (){var statearr_35032 = state_34978;
(statearr_35032[(20)] = inst_34918);

(statearr_35032[(29)] = inst_34910__$1);

(statearr_35032[(11)] = inst_34919);

(statearr_35032[(21)] = inst_34920);

(statearr_35032[(12)] = inst_34921);

(statearr_35032[(30)] = inst_34912);

return statearr_35032;
})();
var statearr_35034_37112 = state_34978__$1;
(statearr_35034_37112[(2)] = null);

(statearr_35034_37112[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (28))){
var inst_34918 = (state_34978[(20)]);
var inst_34937 = (state_34978[(25)]);
var inst_34937__$1 = cljs.core.seq(inst_34918);
var state_34978__$1 = (function (){var statearr_35035 = state_34978;
(statearr_35035[(25)] = inst_34937__$1);

return statearr_35035;
})();
if(inst_34937__$1){
var statearr_35036_37118 = state_34978__$1;
(statearr_35036_37118[(1)] = (33));

} else {
var statearr_35037_37121 = state_34978__$1;
(statearr_35037_37121[(1)] = (34));

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
var statearr_35038_37123 = state_34978__$1;
(statearr_35038_37123[(1)] = (27));

} else {
var statearr_35039_37125 = state_34978__$1;
(statearr_35039_37125[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (34))){
var state_34978__$1 = state_34978;
var statearr_35040_37128 = state_34978__$1;
(statearr_35040_37128[(2)] = null);

(statearr_35040_37128[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (17))){
var state_34978__$1 = state_34978;
var statearr_35043_37129 = state_34978__$1;
(statearr_35043_37129[(2)] = null);

(statearr_35043_37129[(1)] = (18));


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
var statearr_35047_37133 = state_34978__$1;
(statearr_35047_37133[(2)] = inst_34905);

(statearr_35047_37133[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (2))){
var state_34978__$1 = state_34978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34978__$1,(4),ch);
} else {
if((state_val_34979 === (23))){
var state_34978__$1 = state_34978;
var statearr_35049_37138 = state_34978__$1;
(statearr_35049_37138[(2)] = null);

(statearr_35049_37138[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (35))){
var inst_34960 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35050_37145 = state_34978__$1;
(statearr_35050_37145[(2)] = inst_34960);

(statearr_35050_37145[(1)] = (29));


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
var state_34978__$1 = (function (){var statearr_35053 = state_34978;
(statearr_35053[(13)] = inst_34857);

(statearr_35053[(14)] = inst_34856);

(statearr_35053[(15)] = inst_34858);

(statearr_35053[(17)] = inst_34855);

return statearr_35053;
})();
var statearr_35056_37148 = state_34978__$1;
(statearr_35056_37148[(2)] = null);

(statearr_35056_37148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (11))){
var inst_34855 = (state_34978[(17)]);
var inst_34877 = (state_34978[(7)]);
var inst_34877__$1 = cljs.core.seq(inst_34855);
var state_34978__$1 = (function (){var statearr_35059 = state_34978;
(statearr_35059[(7)] = inst_34877__$1);

return statearr_35059;
})();
if(inst_34877__$1){
var statearr_35060_37151 = state_34978__$1;
(statearr_35060_37151[(1)] = (16));

} else {
var statearr_35061_37152 = state_34978__$1;
(statearr_35061_37152[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (9))){
var inst_34907 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35062_37154 = state_34978__$1;
(statearr_35062_37154[(2)] = inst_34907);

(statearr_35062_37154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (5))){
var inst_34853 = cljs.core.deref(cs);
var inst_34854 = cljs.core.seq(inst_34853);
var inst_34855 = inst_34854;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34978__$1 = (function (){var statearr_35064 = state_34978;
(statearr_35064[(13)] = inst_34857);

(statearr_35064[(14)] = inst_34856);

(statearr_35064[(15)] = inst_34858);

(statearr_35064[(17)] = inst_34855);

return statearr_35064;
})();
var statearr_35068_37158 = state_34978__$1;
(statearr_35068_37158[(2)] = null);

(statearr_35068_37158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (14))){
var state_34978__$1 = state_34978;
var statearr_35069_37161 = state_34978__$1;
(statearr_35069_37161[(2)] = null);

(statearr_35069_37161[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (45))){
var inst_34968 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35082_37165 = state_34978__$1;
(statearr_35082_37165[(2)] = inst_34968);

(statearr_35082_37165[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (26))){
var inst_34910 = (state_34978[(29)]);
var inst_34964 = (state_34978[(2)]);
var inst_34965 = cljs.core.seq(inst_34910);
var state_34978__$1 = (function (){var statearr_35086 = state_34978;
(statearr_35086[(31)] = inst_34964);

return statearr_35086;
})();
if(inst_34965){
var statearr_35087_37166 = state_34978__$1;
(statearr_35087_37166[(1)] = (42));

} else {
var statearr_35088_37167 = state_34978__$1;
(statearr_35088_37167[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (16))){
var inst_34877 = (state_34978[(7)]);
var inst_34879 = cljs.core.chunked_seq_QMARK_(inst_34877);
var state_34978__$1 = state_34978;
if(inst_34879){
var statearr_35092_37174 = state_34978__$1;
(statearr_35092_37174[(1)] = (19));

} else {
var statearr_35094_37176 = state_34978__$1;
(statearr_35094_37176[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (38))){
var inst_34957 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35095_37178 = state_34978__$1;
(statearr_35095_37178[(2)] = inst_34957);

(statearr_35095_37178[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (30))){
var state_34978__$1 = state_34978;
var statearr_35097_37179 = state_34978__$1;
(statearr_35097_37179[(2)] = null);

(statearr_35097_37179[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (10))){
var inst_34856 = (state_34978[(14)]);
var inst_34858 = (state_34978[(15)]);
var inst_34866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34856,inst_34858);
var inst_34867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(0),null);
var inst_34868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(1),null);
var state_34978__$1 = (function (){var statearr_35103 = state_34978;
(statearr_35103[(26)] = inst_34867);

return statearr_35103;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_35106_37182 = state_34978__$1;
(statearr_35106_37182[(1)] = (13));

} else {
var statearr_35108_37184 = state_34978__$1;
(statearr_35108_37184[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (18))){
var inst_34903 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35114_37185 = state_34978__$1;
(statearr_35114_37185[(2)] = inst_34903);

(statearr_35114_37185[(1)] = (12));


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
var state_34978__$1 = (function (){var statearr_35122 = state_34978;
(statearr_35122[(23)] = inst_34946__$1);

return statearr_35122;
})();
if(cljs.core.truth_(inst_34947)){
var statearr_35124_37189 = state_34978__$1;
(statearr_35124_37189[(1)] = (39));

} else {
var statearr_35128_37190 = state_34978__$1;
(statearr_35128_37190[(1)] = (40));

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
var statearr_35132_37195 = state_34978__$1;
(statearr_35132_37195[(1)] = (10));

} else {
var statearr_35135_37196 = state_34978__$1;
(statearr_35135_37196[(1)] = (11));

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
var statearr_35145 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35145[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35145[(1)] = (1));

return statearr_35145;
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
}catch (e35150){if((e35150 instanceof Object)){
var ex__34210__auto__ = e35150;
var statearr_35153_37204 = state_34978;
(statearr_35153_37204[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35150;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37205 = state_34978;
state_34978 = G__37205;
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
var state__34276__auto__ = (function (){var statearr_35160 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35160[(6)] = c__34274__auto___37042);

return statearr_35160;
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
var G__35175 = arguments.length;
switch (G__35175) {
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
var len__4789__auto___37232 = arguments.length;
var i__4790__auto___37234 = (0);
while(true){
if((i__4790__auto___37234 < len__4789__auto___37232)){
args__4795__auto__.push((arguments[i__4790__auto___37234]));

var G__37235 = (i__4790__auto___37234 + (1));
i__4790__auto___37234 = G__37235;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35280){
var map__35283 = p__35280;
var map__35283__$1 = (((((!((map__35283 == null))))?(((((map__35283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35283):map__35283);
var opts = map__35283__$1;
var statearr_35290_37236 = state;
(statearr_35290_37236[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35297_37237 = state;
(statearr_35297_37237[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35301_37238 = state;
(statearr_35301_37238[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35262){
var G__35263 = cljs.core.first(seq35262);
var seq35262__$1 = cljs.core.next(seq35262);
var G__35264 = cljs.core.first(seq35262__$1);
var seq35262__$2 = cljs.core.next(seq35262__$1);
var G__35265 = cljs.core.first(seq35262__$2);
var seq35262__$3 = cljs.core.next(seq35262__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35263,G__35264,G__35265,seq35262__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35349 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35349 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35350){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35350 = meta35350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35351,meta35350__$1){
var self__ = this;
var _35351__$1 = this;
return (new cljs.core.async.t_cljs$core$async35349(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35350__$1));
}));

(cljs.core.async.t_cljs$core$async35349.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35351){
var self__ = this;
var _35351__$1 = this;
return self__.meta35350;
}));

(cljs.core.async.t_cljs$core$async35349.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35349.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35349.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35349.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35349.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35349.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35349.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35349.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35349.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35350","meta35350",1784095861,null)], null);
}));

(cljs.core.async.t_cljs$core$async35349.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35349.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35349");

(cljs.core.async.t_cljs$core$async35349.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35349");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35349.
 */
cljs.core.async.__GT_t_cljs$core$async35349 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35349(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35350){
return (new cljs.core.async.t_cljs$core$async35349(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35350));
});

}

return (new cljs.core.async.t_cljs$core$async35349(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37285 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35505){
var state_val_35506 = (state_35505[(1)]);
if((state_val_35506 === (7))){
var inst_35397 = (state_35505[(2)]);
var state_35505__$1 = state_35505;
var statearr_35514_37286 = state_35505__$1;
(statearr_35514_37286[(2)] = inst_35397);

(statearr_35514_37286[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (20))){
var inst_35411 = (state_35505[(7)]);
var state_35505__$1 = state_35505;
var statearr_35517_37289 = state_35505__$1;
(statearr_35517_37289[(2)] = inst_35411);

(statearr_35517_37289[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (27))){
var state_35505__$1 = state_35505;
var statearr_35520_37292 = state_35505__$1;
(statearr_35520_37292[(2)] = null);

(statearr_35520_37292[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (1))){
var inst_35382 = (state_35505[(8)]);
var inst_35382__$1 = calc_state();
var inst_35386 = (inst_35382__$1 == null);
var inst_35387 = cljs.core.not(inst_35386);
var state_35505__$1 = (function (){var statearr_35522 = state_35505;
(statearr_35522[(8)] = inst_35382__$1);

return statearr_35522;
})();
if(inst_35387){
var statearr_35525_37293 = state_35505__$1;
(statearr_35525_37293[(1)] = (2));

} else {
var statearr_35527_37295 = state_35505__$1;
(statearr_35527_37295[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (24))){
var inst_35477 = (state_35505[(9)]);
var inst_35447 = (state_35505[(10)]);
var inst_35437 = (state_35505[(11)]);
var inst_35477__$1 = (inst_35437.cljs$core$IFn$_invoke$arity$1 ? inst_35437.cljs$core$IFn$_invoke$arity$1(inst_35447) : inst_35437.call(null,inst_35447));
var state_35505__$1 = (function (){var statearr_35531 = state_35505;
(statearr_35531[(9)] = inst_35477__$1);

return statearr_35531;
})();
if(cljs.core.truth_(inst_35477__$1)){
var statearr_35535_37297 = state_35505__$1;
(statearr_35535_37297[(1)] = (29));

} else {
var statearr_35538_37298 = state_35505__$1;
(statearr_35538_37298[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (4))){
var inst_35400 = (state_35505[(2)]);
var state_35505__$1 = state_35505;
if(cljs.core.truth_(inst_35400)){
var statearr_35540_37299 = state_35505__$1;
(statearr_35540_37299[(1)] = (8));

} else {
var statearr_35543_37300 = state_35505__$1;
(statearr_35543_37300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (15))){
var inst_35431 = (state_35505[(2)]);
var state_35505__$1 = state_35505;
if(cljs.core.truth_(inst_35431)){
var statearr_35544_37301 = state_35505__$1;
(statearr_35544_37301[(1)] = (19));

} else {
var statearr_35547_37302 = state_35505__$1;
(statearr_35547_37302[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (21))){
var inst_35436 = (state_35505[(12)]);
var inst_35436__$1 = (state_35505[(2)]);
var inst_35437 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35436__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35436__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35436__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35505__$1 = (function (){var statearr_35567 = state_35505;
(statearr_35567[(12)] = inst_35436__$1);

(statearr_35567[(11)] = inst_35437);

(statearr_35567[(13)] = inst_35438);

return statearr_35567;
})();
return cljs.core.async.ioc_alts_BANG_(state_35505__$1,(22),inst_35439);
} else {
if((state_val_35506 === (31))){
var inst_35485 = (state_35505[(2)]);
var state_35505__$1 = state_35505;
if(cljs.core.truth_(inst_35485)){
var statearr_35570_37308 = state_35505__$1;
(statearr_35570_37308[(1)] = (32));

} else {
var statearr_35571_37309 = state_35505__$1;
(statearr_35571_37309[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (32))){
var inst_35446 = (state_35505[(14)]);
var state_35505__$1 = state_35505;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35505__$1,(35),out,inst_35446);
} else {
if((state_val_35506 === (33))){
var inst_35436 = (state_35505[(12)]);
var inst_35411 = inst_35436;
var state_35505__$1 = (function (){var statearr_35576 = state_35505;
(statearr_35576[(7)] = inst_35411);

return statearr_35576;
})();
var statearr_35577_37311 = state_35505__$1;
(statearr_35577_37311[(2)] = null);

(statearr_35577_37311[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (13))){
var inst_35411 = (state_35505[(7)]);
var inst_35420 = inst_35411.cljs$lang$protocol_mask$partition0$;
var inst_35421 = (inst_35420 & (64));
var inst_35422 = inst_35411.cljs$core$ISeq$;
var inst_35423 = (cljs.core.PROTOCOL_SENTINEL === inst_35422);
var inst_35424 = ((inst_35421) || (inst_35423));
var state_35505__$1 = state_35505;
if(cljs.core.truth_(inst_35424)){
var statearr_35579_37312 = state_35505__$1;
(statearr_35579_37312[(1)] = (16));

} else {
var statearr_35581_37316 = state_35505__$1;
(statearr_35581_37316[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (22))){
var inst_35446 = (state_35505[(14)]);
var inst_35447 = (state_35505[(10)]);
var inst_35445 = (state_35505[(2)]);
var inst_35446__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35445,(0),null);
var inst_35447__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35445,(1),null);
var inst_35449 = (inst_35446__$1 == null);
var inst_35452 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35447__$1,change);
var inst_35454 = ((inst_35449) || (inst_35452));
var state_35505__$1 = (function (){var statearr_35588 = state_35505;
(statearr_35588[(14)] = inst_35446__$1);

(statearr_35588[(10)] = inst_35447__$1);

return statearr_35588;
})();
if(cljs.core.truth_(inst_35454)){
var statearr_35593_37319 = state_35505__$1;
(statearr_35593_37319[(1)] = (23));

} else {
var statearr_35594_37320 = state_35505__$1;
(statearr_35594_37320[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (36))){
var inst_35436 = (state_35505[(12)]);
var inst_35411 = inst_35436;
var state_35505__$1 = (function (){var statearr_35599 = state_35505;
(statearr_35599[(7)] = inst_35411);

return statearr_35599;
})();
var statearr_35602_37322 = state_35505__$1;
(statearr_35602_37322[(2)] = null);

(statearr_35602_37322[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (29))){
var inst_35477 = (state_35505[(9)]);
var state_35505__$1 = state_35505;
var statearr_35608_37326 = state_35505__$1;
(statearr_35608_37326[(2)] = inst_35477);

(statearr_35608_37326[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (6))){
var state_35505__$1 = state_35505;
var statearr_35613_37328 = state_35505__$1;
(statearr_35613_37328[(2)] = false);

(statearr_35613_37328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (28))){
var inst_35473 = (state_35505[(2)]);
var inst_35474 = calc_state();
var inst_35411 = inst_35474;
var state_35505__$1 = (function (){var statearr_35623 = state_35505;
(statearr_35623[(7)] = inst_35411);

(statearr_35623[(15)] = inst_35473);

return statearr_35623;
})();
var statearr_35630_37332 = state_35505__$1;
(statearr_35630_37332[(2)] = null);

(statearr_35630_37332[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (25))){
var inst_35499 = (state_35505[(2)]);
var state_35505__$1 = state_35505;
var statearr_35640_37336 = state_35505__$1;
(statearr_35640_37336[(2)] = inst_35499);

(statearr_35640_37336[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (34))){
var inst_35497 = (state_35505[(2)]);
var state_35505__$1 = state_35505;
var statearr_35647_37338 = state_35505__$1;
(statearr_35647_37338[(2)] = inst_35497);

(statearr_35647_37338[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (17))){
var state_35505__$1 = state_35505;
var statearr_35650_37342 = state_35505__$1;
(statearr_35650_37342[(2)] = false);

(statearr_35650_37342[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (3))){
var state_35505__$1 = state_35505;
var statearr_35656_37344 = state_35505__$1;
(statearr_35656_37344[(2)] = false);

(statearr_35656_37344[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (12))){
var inst_35501 = (state_35505[(2)]);
var state_35505__$1 = state_35505;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35505__$1,inst_35501);
} else {
if((state_val_35506 === (2))){
var inst_35382 = (state_35505[(8)]);
var inst_35389 = inst_35382.cljs$lang$protocol_mask$partition0$;
var inst_35390 = (inst_35389 & (64));
var inst_35391 = inst_35382.cljs$core$ISeq$;
var inst_35392 = (cljs.core.PROTOCOL_SENTINEL === inst_35391);
var inst_35393 = ((inst_35390) || (inst_35392));
var state_35505__$1 = state_35505;
if(cljs.core.truth_(inst_35393)){
var statearr_35666_37349 = state_35505__$1;
(statearr_35666_37349[(1)] = (5));

} else {
var statearr_35672_37350 = state_35505__$1;
(statearr_35672_37350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (23))){
var inst_35446 = (state_35505[(14)]);
var inst_35456 = (inst_35446 == null);
var state_35505__$1 = state_35505;
if(cljs.core.truth_(inst_35456)){
var statearr_35678_37355 = state_35505__$1;
(statearr_35678_37355[(1)] = (26));

} else {
var statearr_35682_37356 = state_35505__$1;
(statearr_35682_37356[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (35))){
var inst_35488 = (state_35505[(2)]);
var state_35505__$1 = state_35505;
if(cljs.core.truth_(inst_35488)){
var statearr_35686_37358 = state_35505__$1;
(statearr_35686_37358[(1)] = (36));

} else {
var statearr_35690_37359 = state_35505__$1;
(statearr_35690_37359[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (19))){
var inst_35411 = (state_35505[(7)]);
var inst_35433 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35411);
var state_35505__$1 = state_35505;
var statearr_35696_37363 = state_35505__$1;
(statearr_35696_37363[(2)] = inst_35433);

(statearr_35696_37363[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (11))){
var inst_35411 = (state_35505[(7)]);
var inst_35415 = (inst_35411 == null);
var inst_35416 = cljs.core.not(inst_35415);
var state_35505__$1 = state_35505;
if(inst_35416){
var statearr_35703_37376 = state_35505__$1;
(statearr_35703_37376[(1)] = (13));

} else {
var statearr_35704_37377 = state_35505__$1;
(statearr_35704_37377[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (9))){
var inst_35382 = (state_35505[(8)]);
var state_35505__$1 = state_35505;
var statearr_35709_37378 = state_35505__$1;
(statearr_35709_37378[(2)] = inst_35382);

(statearr_35709_37378[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (5))){
var state_35505__$1 = state_35505;
var statearr_35712_37379 = state_35505__$1;
(statearr_35712_37379[(2)] = true);

(statearr_35712_37379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (14))){
var state_35505__$1 = state_35505;
var statearr_35719_37380 = state_35505__$1;
(statearr_35719_37380[(2)] = false);

(statearr_35719_37380[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (26))){
var inst_35447 = (state_35505[(10)]);
var inst_35470 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35447);
var state_35505__$1 = state_35505;
var statearr_35720_37383 = state_35505__$1;
(statearr_35720_37383[(2)] = inst_35470);

(statearr_35720_37383[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (16))){
var state_35505__$1 = state_35505;
var statearr_35721_37386 = state_35505__$1;
(statearr_35721_37386[(2)] = true);

(statearr_35721_37386[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (38))){
var inst_35493 = (state_35505[(2)]);
var state_35505__$1 = state_35505;
var statearr_35722_37389 = state_35505__$1;
(statearr_35722_37389[(2)] = inst_35493);

(statearr_35722_37389[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (30))){
var inst_35447 = (state_35505[(10)]);
var inst_35437 = (state_35505[(11)]);
var inst_35438 = (state_35505[(13)]);
var inst_35480 = cljs.core.empty_QMARK_(inst_35437);
var inst_35481 = (inst_35438.cljs$core$IFn$_invoke$arity$1 ? inst_35438.cljs$core$IFn$_invoke$arity$1(inst_35447) : inst_35438.call(null,inst_35447));
var inst_35482 = cljs.core.not(inst_35481);
var inst_35483 = ((inst_35480) && (inst_35482));
var state_35505__$1 = state_35505;
var statearr_35723_37390 = state_35505__$1;
(statearr_35723_37390[(2)] = inst_35483);

(statearr_35723_37390[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (10))){
var inst_35382 = (state_35505[(8)]);
var inst_35405 = (state_35505[(2)]);
var inst_35406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35405,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35407 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35405,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35409 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35405,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35411 = inst_35382;
var state_35505__$1 = (function (){var statearr_35726 = state_35505;
(statearr_35726[(7)] = inst_35411);

(statearr_35726[(16)] = inst_35407);

(statearr_35726[(17)] = inst_35409);

(statearr_35726[(18)] = inst_35406);

return statearr_35726;
})();
var statearr_35727_37400 = state_35505__$1;
(statearr_35727_37400[(2)] = null);

(statearr_35727_37400[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (18))){
var inst_35428 = (state_35505[(2)]);
var state_35505__$1 = state_35505;
var statearr_35729_37401 = state_35505__$1;
(statearr_35729_37401[(2)] = inst_35428);

(statearr_35729_37401[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (37))){
var state_35505__$1 = state_35505;
var statearr_35731_37404 = state_35505__$1;
(statearr_35731_37404[(2)] = null);

(statearr_35731_37404[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (8))){
var inst_35382 = (state_35505[(8)]);
var inst_35402 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35382);
var state_35505__$1 = state_35505;
var statearr_35732_37407 = state_35505__$1;
(statearr_35732_37407[(2)] = inst_35402);

(statearr_35732_37407[(1)] = (10));


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
var statearr_35735 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35735[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35735[(1)] = (1));

return statearr_35735;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35505){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35505);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35737){if((e35737 instanceof Object)){
var ex__34210__auto__ = e35737;
var statearr_35739_37418 = state_35505;
(statearr_35739_37418[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35737;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37422 = state_35505;
state_35505 = G__37422;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35505){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35742 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35742[(6)] = c__34274__auto___37285);

return statearr_35742;
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
var G__35759 = arguments.length;
switch (G__35759) {
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
var G__35781 = arguments.length;
switch (G__35781) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35771_SHARP_){
if(cljs.core.truth_((p1__35771_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35771_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35771_SHARP_.call(null,topic)))){
return p1__35771_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35771_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
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
var c__34274__auto___37478 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35893){
var state_val_35894 = (state_35893[(1)]);
if((state_val_35894 === (7))){
var inst_35886 = (state_35893[(2)]);
var state_35893__$1 = state_35893;
var statearr_35898_37484 = state_35893__$1;
(statearr_35898_37484[(2)] = inst_35886);

(statearr_35898_37484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (20))){
var state_35893__$1 = state_35893;
var statearr_35901_37487 = state_35893__$1;
(statearr_35901_37487[(2)] = null);

(statearr_35901_37487[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (1))){
var state_35893__$1 = state_35893;
var statearr_35902_37488 = state_35893__$1;
(statearr_35902_37488[(2)] = null);

(statearr_35902_37488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (24))){
var inst_35868 = (state_35893[(7)]);
var inst_35878 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35868);
var state_35893__$1 = state_35893;
var statearr_35905_37490 = state_35893__$1;
(statearr_35905_37490[(2)] = inst_35878);

(statearr_35905_37490[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (4))){
var inst_35820 = (state_35893[(8)]);
var inst_35820__$1 = (state_35893[(2)]);
var inst_35821 = (inst_35820__$1 == null);
var state_35893__$1 = (function (){var statearr_35907 = state_35893;
(statearr_35907[(8)] = inst_35820__$1);

return statearr_35907;
})();
if(cljs.core.truth_(inst_35821)){
var statearr_35908_37492 = state_35893__$1;
(statearr_35908_37492[(1)] = (5));

} else {
var statearr_35909_37493 = state_35893__$1;
(statearr_35909_37493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (15))){
var inst_35862 = (state_35893[(2)]);
var state_35893__$1 = state_35893;
var statearr_35913_37496 = state_35893__$1;
(statearr_35913_37496[(2)] = inst_35862);

(statearr_35913_37496[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (21))){
var inst_35883 = (state_35893[(2)]);
var state_35893__$1 = (function (){var statearr_35915 = state_35893;
(statearr_35915[(9)] = inst_35883);

return statearr_35915;
})();
var statearr_35916_37499 = state_35893__$1;
(statearr_35916_37499[(2)] = null);

(statearr_35916_37499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (13))){
var inst_35844 = (state_35893[(10)]);
var inst_35846 = cljs.core.chunked_seq_QMARK_(inst_35844);
var state_35893__$1 = state_35893;
if(inst_35846){
var statearr_35917_37503 = state_35893__$1;
(statearr_35917_37503[(1)] = (16));

} else {
var statearr_35920_37504 = state_35893__$1;
(statearr_35920_37504[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (22))){
var inst_35875 = (state_35893[(2)]);
var state_35893__$1 = state_35893;
if(cljs.core.truth_(inst_35875)){
var statearr_35922_37505 = state_35893__$1;
(statearr_35922_37505[(1)] = (23));

} else {
var statearr_35923_37506 = state_35893__$1;
(statearr_35923_37506[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (6))){
var inst_35868 = (state_35893[(7)]);
var inst_35870 = (state_35893[(11)]);
var inst_35820 = (state_35893[(8)]);
var inst_35868__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35820) : topic_fn.call(null,inst_35820));
var inst_35869 = cljs.core.deref(mults);
var inst_35870__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35869,inst_35868__$1);
var state_35893__$1 = (function (){var statearr_35926 = state_35893;
(statearr_35926[(7)] = inst_35868__$1);

(statearr_35926[(11)] = inst_35870__$1);

return statearr_35926;
})();
if(cljs.core.truth_(inst_35870__$1)){
var statearr_35928_37508 = state_35893__$1;
(statearr_35928_37508[(1)] = (19));

} else {
var statearr_35930_37512 = state_35893__$1;
(statearr_35930_37512[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (25))){
var inst_35880 = (state_35893[(2)]);
var state_35893__$1 = state_35893;
var statearr_35933_37514 = state_35893__$1;
(statearr_35933_37514[(2)] = inst_35880);

(statearr_35933_37514[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (17))){
var inst_35844 = (state_35893[(10)]);
var inst_35853 = cljs.core.first(inst_35844);
var inst_35854 = cljs.core.async.muxch_STAR_(inst_35853);
var inst_35855 = cljs.core.async.close_BANG_(inst_35854);
var inst_35856 = cljs.core.next(inst_35844);
var inst_35830 = inst_35856;
var inst_35831 = null;
var inst_35832 = (0);
var inst_35833 = (0);
var state_35893__$1 = (function (){var statearr_35934 = state_35893;
(statearr_35934[(12)] = inst_35831);

(statearr_35934[(13)] = inst_35830);

(statearr_35934[(14)] = inst_35833);

(statearr_35934[(15)] = inst_35832);

(statearr_35934[(16)] = inst_35855);

return statearr_35934;
})();
var statearr_35937_37518 = state_35893__$1;
(statearr_35937_37518[(2)] = null);

(statearr_35937_37518[(1)] = (8));


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
var statearr_35941_37519 = state_35893__$1;
(statearr_35941_37519[(2)] = inst_35864);

(statearr_35941_37519[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (2))){
var state_35893__$1 = state_35893;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35893__$1,(4),ch);
} else {
if((state_val_35894 === (23))){
var state_35893__$1 = state_35893;
var statearr_35944_37523 = state_35893__$1;
(statearr_35944_37523[(2)] = null);

(statearr_35944_37523[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (19))){
var inst_35870 = (state_35893[(11)]);
var inst_35820 = (state_35893[(8)]);
var inst_35872 = cljs.core.async.muxch_STAR_(inst_35870);
var state_35893__$1 = state_35893;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35893__$1,(22),inst_35872,inst_35820);
} else {
if((state_val_35894 === (11))){
var inst_35844 = (state_35893[(10)]);
var inst_35830 = (state_35893[(13)]);
var inst_35844__$1 = cljs.core.seq(inst_35830);
var state_35893__$1 = (function (){var statearr_35948 = state_35893;
(statearr_35948[(10)] = inst_35844__$1);

return statearr_35948;
})();
if(inst_35844__$1){
var statearr_35949_37528 = state_35893__$1;
(statearr_35949_37528[(1)] = (13));

} else {
var statearr_35950_37529 = state_35893__$1;
(statearr_35950_37529[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (9))){
var inst_35866 = (state_35893[(2)]);
var state_35893__$1 = state_35893;
var statearr_35951_37530 = state_35893__$1;
(statearr_35951_37530[(2)] = inst_35866);

(statearr_35951_37530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (5))){
var inst_35827 = cljs.core.deref(mults);
var inst_35828 = cljs.core.vals(inst_35827);
var inst_35829 = cljs.core.seq(inst_35828);
var inst_35830 = inst_35829;
var inst_35831 = null;
var inst_35832 = (0);
var inst_35833 = (0);
var state_35893__$1 = (function (){var statearr_35956 = state_35893;
(statearr_35956[(12)] = inst_35831);

(statearr_35956[(13)] = inst_35830);

(statearr_35956[(14)] = inst_35833);

(statearr_35956[(15)] = inst_35832);

return statearr_35956;
})();
var statearr_35959_37542 = state_35893__$1;
(statearr_35959_37542[(2)] = null);

(statearr_35959_37542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (14))){
var state_35893__$1 = state_35893;
var statearr_35964_37544 = state_35893__$1;
(statearr_35964_37544[(2)] = null);

(statearr_35964_37544[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (16))){
var inst_35844 = (state_35893[(10)]);
var inst_35848 = cljs.core.chunk_first(inst_35844);
var inst_35849 = cljs.core.chunk_rest(inst_35844);
var inst_35850 = cljs.core.count(inst_35848);
var inst_35830 = inst_35849;
var inst_35831 = inst_35848;
var inst_35832 = inst_35850;
var inst_35833 = (0);
var state_35893__$1 = (function (){var statearr_35967 = state_35893;
(statearr_35967[(12)] = inst_35831);

(statearr_35967[(13)] = inst_35830);

(statearr_35967[(14)] = inst_35833);

(statearr_35967[(15)] = inst_35832);

return statearr_35967;
})();
var statearr_35969_37547 = state_35893__$1;
(statearr_35969_37547[(2)] = null);

(statearr_35969_37547[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (10))){
var inst_35831 = (state_35893[(12)]);
var inst_35830 = (state_35893[(13)]);
var inst_35833 = (state_35893[(14)]);
var inst_35832 = (state_35893[(15)]);
var inst_35838 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35831,inst_35833);
var inst_35839 = cljs.core.async.muxch_STAR_(inst_35838);
var inst_35840 = cljs.core.async.close_BANG_(inst_35839);
var inst_35841 = (inst_35833 + (1));
var tmp35961 = inst_35831;
var tmp35962 = inst_35830;
var tmp35963 = inst_35832;
var inst_35830__$1 = tmp35962;
var inst_35831__$1 = tmp35961;
var inst_35832__$1 = tmp35963;
var inst_35833__$1 = inst_35841;
var state_35893__$1 = (function (){var statearr_35974 = state_35893;
(statearr_35974[(12)] = inst_35831__$1);

(statearr_35974[(13)] = inst_35830__$1);

(statearr_35974[(14)] = inst_35833__$1);

(statearr_35974[(15)] = inst_35832__$1);

(statearr_35974[(17)] = inst_35840);

return statearr_35974;
})();
var statearr_35975_37561 = state_35893__$1;
(statearr_35975_37561[(2)] = null);

(statearr_35975_37561[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (18))){
var inst_35859 = (state_35893[(2)]);
var state_35893__$1 = state_35893;
var statearr_35976_37563 = state_35893__$1;
(statearr_35976_37563[(2)] = inst_35859);

(statearr_35976_37563[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (8))){
var inst_35833 = (state_35893[(14)]);
var inst_35832 = (state_35893[(15)]);
var inst_35835 = (inst_35833 < inst_35832);
var inst_35836 = inst_35835;
var state_35893__$1 = state_35893;
if(cljs.core.truth_(inst_35836)){
var statearr_35980_37569 = state_35893__$1;
(statearr_35980_37569[(1)] = (10));

} else {
var statearr_35981_37570 = state_35893__$1;
(statearr_35981_37570[(1)] = (11));

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
var statearr_35985 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35985[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_35985[(1)] = (1));

return statearr_35985;
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
}catch (e35987){if((e35987 instanceof Object)){
var ex__34210__auto__ = e35987;
var statearr_35988_37579 = state_35893;
(statearr_35988_37579[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35987;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37581 = state_35893;
state_35893 = G__37581;
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
var state__34276__auto__ = (function (){var statearr_35991 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35991[(6)] = c__34274__auto___37478);

return statearr_35991;
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
var G__35998 = arguments.length;
switch (G__35998) {
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
var G__36009 = arguments.length;
switch (G__36009) {
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
var G__36013 = arguments.length;
switch (G__36013) {
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
var c__34274__auto___37609 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36059){
var state_val_36060 = (state_36059[(1)]);
if((state_val_36060 === (7))){
var state_36059__$1 = state_36059;
var statearr_36064_37615 = state_36059__$1;
(statearr_36064_37615[(2)] = null);

(statearr_36064_37615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (1))){
var state_36059__$1 = state_36059;
var statearr_36067_37618 = state_36059__$1;
(statearr_36067_37618[(2)] = null);

(statearr_36067_37618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (4))){
var inst_36020 = (state_36059[(7)]);
var inst_36022 = (inst_36020 < cnt);
var state_36059__$1 = state_36059;
if(cljs.core.truth_(inst_36022)){
var statearr_36070_37620 = state_36059__$1;
(statearr_36070_37620[(1)] = (6));

} else {
var statearr_36071_37621 = state_36059__$1;
(statearr_36071_37621[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (15))){
var inst_36055 = (state_36059[(2)]);
var state_36059__$1 = state_36059;
var statearr_36073_37624 = state_36059__$1;
(statearr_36073_37624[(2)] = inst_36055);

(statearr_36073_37624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (13))){
var inst_36048 = cljs.core.async.close_BANG_(out);
var state_36059__$1 = state_36059;
var statearr_36077_37629 = state_36059__$1;
(statearr_36077_37629[(2)] = inst_36048);

(statearr_36077_37629[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (6))){
var state_36059__$1 = state_36059;
var statearr_36079_37631 = state_36059__$1;
(statearr_36079_37631[(2)] = null);

(statearr_36079_37631[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (3))){
var inst_36057 = (state_36059[(2)]);
var state_36059__$1 = state_36059;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36059__$1,inst_36057);
} else {
if((state_val_36060 === (12))){
var inst_36045 = (state_36059[(8)]);
var inst_36045__$1 = (state_36059[(2)]);
var inst_36046 = cljs.core.some(cljs.core.nil_QMARK_,inst_36045__$1);
var state_36059__$1 = (function (){var statearr_36091 = state_36059;
(statearr_36091[(8)] = inst_36045__$1);

return statearr_36091;
})();
if(cljs.core.truth_(inst_36046)){
var statearr_36092_37635 = state_36059__$1;
(statearr_36092_37635[(1)] = (13));

} else {
var statearr_36093_37639 = state_36059__$1;
(statearr_36093_37639[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (2))){
var inst_36019 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36020 = (0);
var state_36059__$1 = (function (){var statearr_36094 = state_36059;
(statearr_36094[(7)] = inst_36020);

(statearr_36094[(9)] = inst_36019);

return statearr_36094;
})();
var statearr_36095_37646 = state_36059__$1;
(statearr_36095_37646[(2)] = null);

(statearr_36095_37646[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (11))){
var inst_36020 = (state_36059[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36059,(10),Object,null,(9));
var inst_36032 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36020) : chs__$1.call(null,inst_36020));
var inst_36033 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36020) : done.call(null,inst_36020));
var inst_36034 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36032,inst_36033);
var state_36059__$1 = state_36059;
var statearr_36098_37649 = state_36059__$1;
(statearr_36098_37649[(2)] = inst_36034);


cljs.core.async.impl.ioc_helpers.process_exception(state_36059__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (9))){
var inst_36020 = (state_36059[(7)]);
var inst_36036 = (state_36059[(2)]);
var inst_36037 = (inst_36020 + (1));
var inst_36020__$1 = inst_36037;
var state_36059__$1 = (function (){var statearr_36101 = state_36059;
(statearr_36101[(7)] = inst_36020__$1);

(statearr_36101[(10)] = inst_36036);

return statearr_36101;
})();
var statearr_36103_37658 = state_36059__$1;
(statearr_36103_37658[(2)] = null);

(statearr_36103_37658[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (5))){
var inst_36043 = (state_36059[(2)]);
var state_36059__$1 = (function (){var statearr_36105 = state_36059;
(statearr_36105[(11)] = inst_36043);

return statearr_36105;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36059__$1,(12),dchan);
} else {
if((state_val_36060 === (14))){
var inst_36045 = (state_36059[(8)]);
var inst_36050 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36045);
var state_36059__$1 = state_36059;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36059__$1,(16),out,inst_36050);
} else {
if((state_val_36060 === (16))){
var inst_36052 = (state_36059[(2)]);
var state_36059__$1 = (function (){var statearr_36106 = state_36059;
(statearr_36106[(12)] = inst_36052);

return statearr_36106;
})();
var statearr_36107_37669 = state_36059__$1;
(statearr_36107_37669[(2)] = null);

(statearr_36107_37669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (10))){
var inst_36027 = (state_36059[(2)]);
var inst_36028 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36059__$1 = (function (){var statearr_36108 = state_36059;
(statearr_36108[(13)] = inst_36027);

return statearr_36108;
})();
var statearr_36110_37673 = state_36059__$1;
(statearr_36110_37673[(2)] = inst_36028);


cljs.core.async.impl.ioc_helpers.process_exception(state_36059__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (8))){
var inst_36041 = (state_36059[(2)]);
var state_36059__$1 = state_36059;
var statearr_36113_37675 = state_36059__$1;
(statearr_36113_37675[(2)] = inst_36041);

(statearr_36113_37675[(1)] = (5));


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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36059){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36059);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36116){if((e36116 instanceof Object)){
var ex__34210__auto__ = e36116;
var statearr_36117_37685 = state_36059;
(statearr_36117_37685[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36116;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37686 = state_36059;
state_36059 = G__37686;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36118 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36118[(6)] = c__34274__auto___37609);

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
var c__34274__auto___37701 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
var statearr_36156_37711 = state_36153__$1;
(statearr_36156_37711[(1)] = (8));

} else {
var statearr_36157_37712 = state_36153__$1;
(statearr_36157_37712[(1)] = (9));

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
var statearr_36159_37718 = state_36153__$1;
(statearr_36159_37718[(2)] = null);

(statearr_36159_37718[(1)] = (2));


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
var statearr_36160_37725 = state_36153__$1;
(statearr_36160_37725[(2)] = inst_36149);

(statearr_36160_37725[(1)] = (3));


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
var statearr_36162_37728 = state_36153__$1;
(statearr_36162_37728[(1)] = (4));

} else {
var statearr_36163_37732 = state_36153__$1;
(statearr_36163_37732[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36154 === (11))){
var inst_36123 = (state_36153[(10)]);
var inst_36142 = (state_36153[(2)]);
var tmp36161 = inst_36123;
var inst_36123__$1 = tmp36161;
var state_36153__$1 = (function (){var statearr_36164 = state_36153;
(statearr_36164[(11)] = inst_36142);

(statearr_36164[(10)] = inst_36123__$1);

return statearr_36164;
})();
var statearr_36165_37738 = state_36153__$1;
(statearr_36165_37738[(2)] = null);

(statearr_36165_37738[(1)] = (2));


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
var statearr_36166_37740 = state_36153__$1;
(statearr_36166_37740[(2)] = inst_36147);

(statearr_36166_37740[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36154 === (10))){
var inst_36145 = (state_36153[(2)]);
var state_36153__$1 = state_36153;
var statearr_36167_37746 = state_36153__$1;
(statearr_36167_37746[(2)] = inst_36145);

(statearr_36167_37746[(1)] = (6));


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
var state_36153__$1 = (function (){var statearr_36169 = state_36153;
(statearr_36169[(10)] = inst_36123__$1);

return statearr_36169;
})();
var statearr_36170_37754 = state_36153__$1;
(statearr_36170_37754[(2)] = null);

(statearr_36170_37754[(1)] = (2));


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
var statearr_36172 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36172[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36172[(1)] = (1));

return statearr_36172;
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
}catch (e36174){if((e36174 instanceof Object)){
var ex__34210__auto__ = e36174;
var statearr_36177_37764 = state_36153;
(statearr_36177_37764[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36174;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37766 = state_36153;
state_36153 = G__37766;
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
var state__34276__auto__ = (function (){var statearr_36179 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36179[(6)] = c__34274__auto___37701);

return statearr_36179;
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
var G__36185 = arguments.length;
switch (G__36185) {
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
var c__34274__auto___37778 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36214){
var state_val_36215 = (state_36214[(1)]);
if((state_val_36215 === (7))){
var inst_36194 = (state_36214[(7)]);
var inst_36194__$1 = (state_36214[(2)]);
var inst_36195 = (inst_36194__$1 == null);
var inst_36196 = cljs.core.not(inst_36195);
var state_36214__$1 = (function (){var statearr_36219 = state_36214;
(statearr_36219[(7)] = inst_36194__$1);

return statearr_36219;
})();
if(inst_36196){
var statearr_36220_37780 = state_36214__$1;
(statearr_36220_37780[(1)] = (8));

} else {
var statearr_36221_37781 = state_36214__$1;
(statearr_36221_37781[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36215 === (1))){
var inst_36187 = (0);
var state_36214__$1 = (function (){var statearr_36222 = state_36214;
(statearr_36222[(8)] = inst_36187);

return statearr_36222;
})();
var statearr_36223_37782 = state_36214__$1;
(statearr_36223_37782[(2)] = null);

(statearr_36223_37782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36215 === (4))){
var state_36214__$1 = state_36214;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36214__$1,(7),ch);
} else {
if((state_val_36215 === (6))){
var inst_36207 = (state_36214[(2)]);
var state_36214__$1 = state_36214;
var statearr_36227_37785 = state_36214__$1;
(statearr_36227_37785[(2)] = inst_36207);

(statearr_36227_37785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36215 === (3))){
var inst_36209 = (state_36214[(2)]);
var inst_36211 = cljs.core.async.close_BANG_(out);
var state_36214__$1 = (function (){var statearr_36230 = state_36214;
(statearr_36230[(9)] = inst_36209);

return statearr_36230;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36214__$1,inst_36211);
} else {
if((state_val_36215 === (2))){
var inst_36187 = (state_36214[(8)]);
var inst_36189 = (inst_36187 < n);
var state_36214__$1 = state_36214;
if(cljs.core.truth_(inst_36189)){
var statearr_36231_37788 = state_36214__$1;
(statearr_36231_37788[(1)] = (4));

} else {
var statearr_36232_37789 = state_36214__$1;
(statearr_36232_37789[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36215 === (11))){
var inst_36187 = (state_36214[(8)]);
var inst_36199 = (state_36214[(2)]);
var inst_36200 = (inst_36187 + (1));
var inst_36187__$1 = inst_36200;
var state_36214__$1 = (function (){var statearr_36233 = state_36214;
(statearr_36233[(10)] = inst_36199);

(statearr_36233[(8)] = inst_36187__$1);

return statearr_36233;
})();
var statearr_36234_37790 = state_36214__$1;
(statearr_36234_37790[(2)] = null);

(statearr_36234_37790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36215 === (9))){
var state_36214__$1 = state_36214;
var statearr_36235_37795 = state_36214__$1;
(statearr_36235_37795[(2)] = null);

(statearr_36235_37795[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36215 === (5))){
var state_36214__$1 = state_36214;
var statearr_36236_37796 = state_36214__$1;
(statearr_36236_37796[(2)] = null);

(statearr_36236_37796[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36215 === (10))){
var inst_36204 = (state_36214[(2)]);
var state_36214__$1 = state_36214;
var statearr_36237_37797 = state_36214__$1;
(statearr_36237_37797[(2)] = inst_36204);

(statearr_36237_37797[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36215 === (8))){
var inst_36194 = (state_36214[(7)]);
var state_36214__$1 = state_36214;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36214__$1,(11),out,inst_36194);
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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36214){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36214);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36239){if((e36239 instanceof Object)){
var ex__34210__auto__ = e36239;
var statearr_36240_37802 = state_36214;
(statearr_36240_37802[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36239;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37804 = state_36214;
state_36214 = G__37804;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36241 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36241[(6)] = c__34274__auto___37778);

return statearr_36241;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36243 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36243 = (function (f,ch,meta36244){
this.f = f;
this.ch = ch;
this.meta36244 = meta36244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36245,meta36244__$1){
var self__ = this;
var _36245__$1 = this;
return (new cljs.core.async.t_cljs$core$async36243(self__.f,self__.ch,meta36244__$1));
}));

(cljs.core.async.t_cljs$core$async36243.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36245){
var self__ = this;
var _36245__$1 = this;
return self__.meta36244;
}));

(cljs.core.async.t_cljs$core$async36243.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36243.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36243.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36243.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36243.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36253 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36253 = (function (f,ch,meta36244,_,fn1,meta36254){
this.f = f;
this.ch = ch;
this.meta36244 = meta36244;
this._ = _;
this.fn1 = fn1;
this.meta36254 = meta36254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36255,meta36254__$1){
var self__ = this;
var _36255__$1 = this;
return (new cljs.core.async.t_cljs$core$async36253(self__.f,self__.ch,self__.meta36244,self__._,self__.fn1,meta36254__$1));
}));

(cljs.core.async.t_cljs$core$async36253.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36255){
var self__ = this;
var _36255__$1 = this;
return self__.meta36254;
}));

(cljs.core.async.t_cljs$core$async36253.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36253.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36253.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36253.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36242_SHARP_){
var G__36260 = (((p1__36242_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36242_SHARP_) : self__.f.call(null,p1__36242_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36260) : f1.call(null,G__36260));
});
}));

(cljs.core.async.t_cljs$core$async36253.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36244","meta36244",636321101,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36243","cljs.core.async/t_cljs$core$async36243",-831380931,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36254","meta36254",1355561793,null)], null);
}));

(cljs.core.async.t_cljs$core$async36253.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36253.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36253");

(cljs.core.async.t_cljs$core$async36253.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36253");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36253.
 */
cljs.core.async.__GT_t_cljs$core$async36253 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36253(f__$1,ch__$1,meta36244__$1,___$2,fn1__$1,meta36254){
return (new cljs.core.async.t_cljs$core$async36253(f__$1,ch__$1,meta36244__$1,___$2,fn1__$1,meta36254));
});

}

return (new cljs.core.async.t_cljs$core$async36253(self__.f,self__.ch,self__.meta36244,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36264 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36264) : self__.f.call(null,G__36264));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36243.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36243.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36243.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36244","meta36244",636321101,null)], null);
}));

(cljs.core.async.t_cljs$core$async36243.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36243.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36243");

(cljs.core.async.t_cljs$core$async36243.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36243");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36243.
 */
cljs.core.async.__GT_t_cljs$core$async36243 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36243(f__$1,ch__$1,meta36244){
return (new cljs.core.async.t_cljs$core$async36243(f__$1,ch__$1,meta36244));
});

}

return (new cljs.core.async.t_cljs$core$async36243(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36269 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36269 = (function (f,ch,meta36270){
this.f = f;
this.ch = ch;
this.meta36270 = meta36270;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36271,meta36270__$1){
var self__ = this;
var _36271__$1 = this;
return (new cljs.core.async.t_cljs$core$async36269(self__.f,self__.ch,meta36270__$1));
}));

(cljs.core.async.t_cljs$core$async36269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36271){
var self__ = this;
var _36271__$1 = this;
return self__.meta36270;
}));

(cljs.core.async.t_cljs$core$async36269.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36269.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36269.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36269.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36269.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36269.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36269.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36270","meta36270",1341189309,null)], null);
}));

(cljs.core.async.t_cljs$core$async36269.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36269.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36269");

(cljs.core.async.t_cljs$core$async36269.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36269");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36269.
 */
cljs.core.async.__GT_t_cljs$core$async36269 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36269(f__$1,ch__$1,meta36270){
return (new cljs.core.async.t_cljs$core$async36269(f__$1,ch__$1,meta36270));
});

}

return (new cljs.core.async.t_cljs$core$async36269(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
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
cljs.core.async.t_cljs$core$async36293 = (function (p,ch,meta36294){
this.p = p;
this.ch = ch;
this.meta36294 = meta36294;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36295,meta36294__$1){
var self__ = this;
var _36295__$1 = this;
return (new cljs.core.async.t_cljs$core$async36293(self__.p,self__.ch,meta36294__$1));
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
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36293.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36293.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36293.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36294","meta36294",1936540444,null)], null);
}));

(cljs.core.async.t_cljs$core$async36293.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36293.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36293");

(cljs.core.async.t_cljs$core$async36293.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36293");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36293.
 */
cljs.core.async.__GT_t_cljs$core$async36293 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36293(p__$1,ch__$1,meta36294){
return (new cljs.core.async.t_cljs$core$async36293(p__$1,ch__$1,meta36294));
});

}

return (new cljs.core.async.t_cljs$core$async36293(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36308 = arguments.length;
switch (G__36308) {
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
var c__34274__auto___37872 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36337){
var state_val_36338 = (state_36337[(1)]);
if((state_val_36338 === (7))){
var inst_36333 = (state_36337[(2)]);
var state_36337__$1 = state_36337;
var statearr_36340_37879 = state_36337__$1;
(statearr_36340_37879[(2)] = inst_36333);

(statearr_36340_37879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36338 === (1))){
var state_36337__$1 = state_36337;
var statearr_36341_37882 = state_36337__$1;
(statearr_36341_37882[(2)] = null);

(statearr_36341_37882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36338 === (4))){
var inst_36319 = (state_36337[(7)]);
var inst_36319__$1 = (state_36337[(2)]);
var inst_36320 = (inst_36319__$1 == null);
var state_36337__$1 = (function (){var statearr_36343 = state_36337;
(statearr_36343[(7)] = inst_36319__$1);

return statearr_36343;
})();
if(cljs.core.truth_(inst_36320)){
var statearr_36345_37885 = state_36337__$1;
(statearr_36345_37885[(1)] = (5));

} else {
var statearr_36346_37886 = state_36337__$1;
(statearr_36346_37886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36338 === (6))){
var inst_36319 = (state_36337[(7)]);
var inst_36324 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36319) : p.call(null,inst_36319));
var state_36337__$1 = state_36337;
if(cljs.core.truth_(inst_36324)){
var statearr_36348_37891 = state_36337__$1;
(statearr_36348_37891[(1)] = (8));

} else {
var statearr_36350_37893 = state_36337__$1;
(statearr_36350_37893[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36338 === (3))){
var inst_36335 = (state_36337[(2)]);
var state_36337__$1 = state_36337;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36337__$1,inst_36335);
} else {
if((state_val_36338 === (2))){
var state_36337__$1 = state_36337;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36337__$1,(4),ch);
} else {
if((state_val_36338 === (11))){
var inst_36327 = (state_36337[(2)]);
var state_36337__$1 = state_36337;
var statearr_36352_37897 = state_36337__$1;
(statearr_36352_37897[(2)] = inst_36327);

(statearr_36352_37897[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36338 === (9))){
var state_36337__$1 = state_36337;
var statearr_36354_37899 = state_36337__$1;
(statearr_36354_37899[(2)] = null);

(statearr_36354_37899[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36338 === (5))){
var inst_36322 = cljs.core.async.close_BANG_(out);
var state_36337__$1 = state_36337;
var statearr_36355_37900 = state_36337__$1;
(statearr_36355_37900[(2)] = inst_36322);

(statearr_36355_37900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36338 === (10))){
var inst_36330 = (state_36337[(2)]);
var state_36337__$1 = (function (){var statearr_36356 = state_36337;
(statearr_36356[(8)] = inst_36330);

return statearr_36356;
})();
var statearr_36357_37904 = state_36337__$1;
(statearr_36357_37904[(2)] = null);

(statearr_36357_37904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36338 === (8))){
var inst_36319 = (state_36337[(7)]);
var state_36337__$1 = state_36337;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36337__$1,(11),out,inst_36319);
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
var statearr_36358 = [null,null,null,null,null,null,null,null,null];
(statearr_36358[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36358[(1)] = (1));

return statearr_36358;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36337){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36337);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36359){if((e36359 instanceof Object)){
var ex__34210__auto__ = e36359;
var statearr_36360_37910 = state_36337;
(statearr_36360_37910[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36359;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37915 = state_36337;
state_36337 = G__37915;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36337){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36363 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36363[(6)] = c__34274__auto___37872);

return statearr_36363;
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
var G__36367 = arguments.length;
switch (G__36367) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36441){
var state_val_36442 = (state_36441[(1)]);
if((state_val_36442 === (7))){
var inst_36437 = (state_36441[(2)]);
var state_36441__$1 = state_36441;
var statearr_36445_37928 = state_36441__$1;
(statearr_36445_37928[(2)] = inst_36437);

(statearr_36445_37928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36442 === (20))){
var inst_36406 = (state_36441[(7)]);
var inst_36418 = (state_36441[(2)]);
var inst_36419 = cljs.core.next(inst_36406);
var inst_36391 = inst_36419;
var inst_36392 = null;
var inst_36393 = (0);
var inst_36394 = (0);
var state_36441__$1 = (function (){var statearr_36447 = state_36441;
(statearr_36447[(8)] = inst_36418);

(statearr_36447[(9)] = inst_36394);

(statearr_36447[(10)] = inst_36392);

(statearr_36447[(11)] = inst_36393);

(statearr_36447[(12)] = inst_36391);

return statearr_36447;
})();
var statearr_36448_37933 = state_36441__$1;
(statearr_36448_37933[(2)] = null);

(statearr_36448_37933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36442 === (1))){
var state_36441__$1 = state_36441;
var statearr_36451_37935 = state_36441__$1;
(statearr_36451_37935[(2)] = null);

(statearr_36451_37935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36442 === (4))){
var inst_36380 = (state_36441[(13)]);
var inst_36380__$1 = (state_36441[(2)]);
var inst_36381 = (inst_36380__$1 == null);
var state_36441__$1 = (function (){var statearr_36452 = state_36441;
(statearr_36452[(13)] = inst_36380__$1);

return statearr_36452;
})();
if(cljs.core.truth_(inst_36381)){
var statearr_36453_37939 = state_36441__$1;
(statearr_36453_37939[(1)] = (5));

} else {
var statearr_36454_37941 = state_36441__$1;
(statearr_36454_37941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36442 === (15))){
var state_36441__$1 = state_36441;
var statearr_36458_37944 = state_36441__$1;
(statearr_36458_37944[(2)] = null);

(statearr_36458_37944[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36442 === (21))){
var state_36441__$1 = state_36441;
var statearr_36461_37946 = state_36441__$1;
(statearr_36461_37946[(2)] = null);

(statearr_36461_37946[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36442 === (13))){
var inst_36394 = (state_36441[(9)]);
var inst_36392 = (state_36441[(10)]);
var inst_36393 = (state_36441[(11)]);
var inst_36391 = (state_36441[(12)]);
var inst_36401 = (state_36441[(2)]);
var inst_36402 = (inst_36394 + (1));
var tmp36455 = inst_36392;
var tmp36456 = inst_36393;
var tmp36457 = inst_36391;
var inst_36391__$1 = tmp36457;
var inst_36392__$1 = tmp36455;
var inst_36393__$1 = tmp36456;
var inst_36394__$1 = inst_36402;
var state_36441__$1 = (function (){var statearr_36462 = state_36441;
(statearr_36462[(9)] = inst_36394__$1);

(statearr_36462[(10)] = inst_36392__$1);

(statearr_36462[(11)] = inst_36393__$1);

(statearr_36462[(14)] = inst_36401);

(statearr_36462[(12)] = inst_36391__$1);

return statearr_36462;
})();
var statearr_36465_37955 = state_36441__$1;
(statearr_36465_37955[(2)] = null);

(statearr_36465_37955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36442 === (22))){
var state_36441__$1 = state_36441;
var statearr_36466_37958 = state_36441__$1;
(statearr_36466_37958[(2)] = null);

(statearr_36466_37958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36442 === (6))){
var inst_36380 = (state_36441[(13)]);
var inst_36389 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36380) : f.call(null,inst_36380));
var inst_36390 = cljs.core.seq(inst_36389);
var inst_36391 = inst_36390;
var inst_36392 = null;
var inst_36393 = (0);
var inst_36394 = (0);
var state_36441__$1 = (function (){var statearr_36474 = state_36441;
(statearr_36474[(9)] = inst_36394);

(statearr_36474[(10)] = inst_36392);

(statearr_36474[(11)] = inst_36393);

(statearr_36474[(12)] = inst_36391);

return statearr_36474;
})();
var statearr_36475_37965 = state_36441__$1;
(statearr_36475_37965[(2)] = null);

(statearr_36475_37965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36442 === (17))){
var inst_36406 = (state_36441[(7)]);
var inst_36410 = cljs.core.chunk_first(inst_36406);
var inst_36411 = cljs.core.chunk_rest(inst_36406);
var inst_36412 = cljs.core.count(inst_36410);
var inst_36391 = inst_36411;
var inst_36392 = inst_36410;
var inst_36393 = inst_36412;
var inst_36394 = (0);
var state_36441__$1 = (function (){var statearr_36477 = state_36441;
(statearr_36477[(9)] = inst_36394);

(statearr_36477[(10)] = inst_36392);

(statearr_36477[(11)] = inst_36393);

(statearr_36477[(12)] = inst_36391);

return statearr_36477;
})();
var statearr_36478_37967 = state_36441__$1;
(statearr_36478_37967[(2)] = null);

(statearr_36478_37967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36442 === (3))){
var inst_36439 = (state_36441[(2)]);
var state_36441__$1 = state_36441;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36441__$1,inst_36439);
} else {
if((state_val_36442 === (12))){
var inst_36427 = (state_36441[(2)]);
var state_36441__$1 = state_36441;
var statearr_36481_37968 = state_36441__$1;
(statearr_36481_37968[(2)] = inst_36427);

(statearr_36481_37968[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36442 === (2))){
var state_36441__$1 = state_36441;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36441__$1,(4),in$);
} else {
if((state_val_36442 === (23))){
var inst_36435 = (state_36441[(2)]);
var state_36441__$1 = state_36441;
var statearr_36484_37974 = state_36441__$1;
(statearr_36484_37974[(2)] = inst_36435);

(statearr_36484_37974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36442 === (19))){
var inst_36422 = (state_36441[(2)]);
var state_36441__$1 = state_36441;
var statearr_36485_37980 = state_36441__$1;
(statearr_36485_37980[(2)] = inst_36422);

(statearr_36485_37980[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36442 === (11))){
var inst_36406 = (state_36441[(7)]);
var inst_36391 = (state_36441[(12)]);
var inst_36406__$1 = cljs.core.seq(inst_36391);
var state_36441__$1 = (function (){var statearr_36486 = state_36441;
(statearr_36486[(7)] = inst_36406__$1);

return statearr_36486;
})();
if(inst_36406__$1){
var statearr_36488_37981 = state_36441__$1;
(statearr_36488_37981[(1)] = (14));

} else {
var statearr_36489_37982 = state_36441__$1;
(statearr_36489_37982[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36442 === (9))){
var inst_36429 = (state_36441[(2)]);
var inst_36430 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36441__$1 = (function (){var statearr_36490 = state_36441;
(statearr_36490[(15)] = inst_36429);

return statearr_36490;
})();
if(cljs.core.truth_(inst_36430)){
var statearr_36492_37983 = state_36441__$1;
(statearr_36492_37983[(1)] = (21));

} else {
var statearr_36493_37985 = state_36441__$1;
(statearr_36493_37985[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36442 === (5))){
var inst_36383 = cljs.core.async.close_BANG_(out);
var state_36441__$1 = state_36441;
var statearr_36494_37988 = state_36441__$1;
(statearr_36494_37988[(2)] = inst_36383);

(statearr_36494_37988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36442 === (14))){
var inst_36406 = (state_36441[(7)]);
var inst_36408 = cljs.core.chunked_seq_QMARK_(inst_36406);
var state_36441__$1 = state_36441;
if(inst_36408){
var statearr_36496_37991 = state_36441__$1;
(statearr_36496_37991[(1)] = (17));

} else {
var statearr_36497_37992 = state_36441__$1;
(statearr_36497_37992[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36442 === (16))){
var inst_36425 = (state_36441[(2)]);
var state_36441__$1 = state_36441;
var statearr_36498_37994 = state_36441__$1;
(statearr_36498_37994[(2)] = inst_36425);

(statearr_36498_37994[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36442 === (10))){
var inst_36394 = (state_36441[(9)]);
var inst_36392 = (state_36441[(10)]);
var inst_36399 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36392,inst_36394);
var state_36441__$1 = state_36441;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36441__$1,(13),out,inst_36399);
} else {
if((state_val_36442 === (18))){
var inst_36406 = (state_36441[(7)]);
var inst_36416 = cljs.core.first(inst_36406);
var state_36441__$1 = state_36441;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36441__$1,(20),out,inst_36416);
} else {
if((state_val_36442 === (8))){
var inst_36394 = (state_36441[(9)]);
var inst_36393 = (state_36441[(11)]);
var inst_36396 = (inst_36394 < inst_36393);
var inst_36397 = inst_36396;
var state_36441__$1 = state_36441;
if(cljs.core.truth_(inst_36397)){
var statearr_36504_38000 = state_36441__$1;
(statearr_36504_38000[(1)] = (10));

} else {
var statearr_36505_38001 = state_36441__$1;
(statearr_36505_38001[(1)] = (11));

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
var statearr_36506 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36506[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36506[(1)] = (1));

return statearr_36506;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36441){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36441);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36508){if((e36508 instanceof Object)){
var ex__34210__auto__ = e36508;
var statearr_36509_38013 = state_36441;
(statearr_36509_38013[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36508;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38016 = state_36441;
state_36441 = G__38016;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36441){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36512 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36512[(6)] = c__34274__auto__);

return statearr_36512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36522 = arguments.length;
switch (G__36522) {
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
var G__36527 = arguments.length;
switch (G__36527) {
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
var G__36534 = arguments.length;
switch (G__36534) {
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
var c__34274__auto___38032 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36568){
var state_val_36569 = (state_36568[(1)]);
if((state_val_36569 === (7))){
var inst_36562 = (state_36568[(2)]);
var state_36568__$1 = state_36568;
var statearr_36571_38035 = state_36568__$1;
(statearr_36571_38035[(2)] = inst_36562);

(statearr_36571_38035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36569 === (1))){
var inst_36540 = null;
var state_36568__$1 = (function (){var statearr_36572 = state_36568;
(statearr_36572[(7)] = inst_36540);

return statearr_36572;
})();
var statearr_36574_38036 = state_36568__$1;
(statearr_36574_38036[(2)] = null);

(statearr_36574_38036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36569 === (4))){
var inst_36546 = (state_36568[(8)]);
var inst_36546__$1 = (state_36568[(2)]);
var inst_36547 = (inst_36546__$1 == null);
var inst_36548 = cljs.core.not(inst_36547);
var state_36568__$1 = (function (){var statearr_36578 = state_36568;
(statearr_36578[(8)] = inst_36546__$1);

return statearr_36578;
})();
if(inst_36548){
var statearr_36579_38041 = state_36568__$1;
(statearr_36579_38041[(1)] = (5));

} else {
var statearr_36580_38043 = state_36568__$1;
(statearr_36580_38043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36569 === (6))){
var state_36568__$1 = state_36568;
var statearr_36587_38046 = state_36568__$1;
(statearr_36587_38046[(2)] = null);

(statearr_36587_38046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36569 === (3))){
var inst_36564 = (state_36568[(2)]);
var inst_36566 = cljs.core.async.close_BANG_(out);
var state_36568__$1 = (function (){var statearr_36588 = state_36568;
(statearr_36588[(9)] = inst_36564);

return statearr_36588;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36568__$1,inst_36566);
} else {
if((state_val_36569 === (2))){
var state_36568__$1 = state_36568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36568__$1,(4),ch);
} else {
if((state_val_36569 === (11))){
var inst_36546 = (state_36568[(8)]);
var inst_36556 = (state_36568[(2)]);
var inst_36540 = inst_36546;
var state_36568__$1 = (function (){var statearr_36590 = state_36568;
(statearr_36590[(7)] = inst_36540);

(statearr_36590[(10)] = inst_36556);

return statearr_36590;
})();
var statearr_36593_38048 = state_36568__$1;
(statearr_36593_38048[(2)] = null);

(statearr_36593_38048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36569 === (9))){
var inst_36546 = (state_36568[(8)]);
var state_36568__$1 = state_36568;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36568__$1,(11),out,inst_36546);
} else {
if((state_val_36569 === (5))){
var inst_36546 = (state_36568[(8)]);
var inst_36540 = (state_36568[(7)]);
var inst_36551 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36546,inst_36540);
var state_36568__$1 = state_36568;
if(inst_36551){
var statearr_36601_38052 = state_36568__$1;
(statearr_36601_38052[(1)] = (8));

} else {
var statearr_36603_38053 = state_36568__$1;
(statearr_36603_38053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36569 === (10))){
var inst_36559 = (state_36568[(2)]);
var state_36568__$1 = state_36568;
var statearr_36604_38056 = state_36568__$1;
(statearr_36604_38056[(2)] = inst_36559);

(statearr_36604_38056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36569 === (8))){
var inst_36540 = (state_36568[(7)]);
var tmp36598 = inst_36540;
var inst_36540__$1 = tmp36598;
var state_36568__$1 = (function (){var statearr_36605 = state_36568;
(statearr_36605[(7)] = inst_36540__$1);

return statearr_36605;
})();
var statearr_36606_38057 = state_36568__$1;
(statearr_36606_38057[(2)] = null);

(statearr_36606_38057[(1)] = (2));


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
var statearr_36609 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36609[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36609[(1)] = (1));

return statearr_36609;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36568){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36568);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36610){if((e36610 instanceof Object)){
var ex__34210__auto__ = e36610;
var statearr_36611_38058 = state_36568;
(statearr_36611_38058[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36610;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38062 = state_36568;
state_36568 = G__38062;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36615 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36615[(6)] = c__34274__auto___38032);

return statearr_36615;
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
var G__36619 = arguments.length;
switch (G__36619) {
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
var c__34274__auto___38068 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36662){
var state_val_36663 = (state_36662[(1)]);
if((state_val_36663 === (7))){
var inst_36658 = (state_36662[(2)]);
var state_36662__$1 = state_36662;
var statearr_36665_38069 = state_36662__$1;
(statearr_36665_38069[(2)] = inst_36658);

(statearr_36665_38069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36663 === (1))){
var inst_36624 = (new Array(n));
var inst_36625 = inst_36624;
var inst_36626 = (0);
var state_36662__$1 = (function (){var statearr_36666 = state_36662;
(statearr_36666[(7)] = inst_36625);

(statearr_36666[(8)] = inst_36626);

return statearr_36666;
})();
var statearr_36669_38070 = state_36662__$1;
(statearr_36669_38070[(2)] = null);

(statearr_36669_38070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36663 === (4))){
var inst_36629 = (state_36662[(9)]);
var inst_36629__$1 = (state_36662[(2)]);
var inst_36630 = (inst_36629__$1 == null);
var inst_36631 = cljs.core.not(inst_36630);
var state_36662__$1 = (function (){var statearr_36672 = state_36662;
(statearr_36672[(9)] = inst_36629__$1);

return statearr_36672;
})();
if(inst_36631){
var statearr_36673_38072 = state_36662__$1;
(statearr_36673_38072[(1)] = (5));

} else {
var statearr_36674_38073 = state_36662__$1;
(statearr_36674_38073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36663 === (15))){
var inst_36652 = (state_36662[(2)]);
var state_36662__$1 = state_36662;
var statearr_36675_38074 = state_36662__$1;
(statearr_36675_38074[(2)] = inst_36652);

(statearr_36675_38074[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36663 === (13))){
var state_36662__$1 = state_36662;
var statearr_36677_38075 = state_36662__$1;
(statearr_36677_38075[(2)] = null);

(statearr_36677_38075[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36663 === (6))){
var inst_36626 = (state_36662[(8)]);
var inst_36647 = (inst_36626 > (0));
var state_36662__$1 = state_36662;
if(cljs.core.truth_(inst_36647)){
var statearr_36678_38080 = state_36662__$1;
(statearr_36678_38080[(1)] = (12));

} else {
var statearr_36679_38081 = state_36662__$1;
(statearr_36679_38081[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36663 === (3))){
var inst_36660 = (state_36662[(2)]);
var state_36662__$1 = state_36662;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36662__$1,inst_36660);
} else {
if((state_val_36663 === (12))){
var inst_36625 = (state_36662[(7)]);
var inst_36650 = cljs.core.vec(inst_36625);
var state_36662__$1 = state_36662;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36662__$1,(15),out,inst_36650);
} else {
if((state_val_36663 === (2))){
var state_36662__$1 = state_36662;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36662__$1,(4),ch);
} else {
if((state_val_36663 === (11))){
var inst_36641 = (state_36662[(2)]);
var inst_36642 = (new Array(n));
var inst_36625 = inst_36642;
var inst_36626 = (0);
var state_36662__$1 = (function (){var statearr_36682 = state_36662;
(statearr_36682[(7)] = inst_36625);

(statearr_36682[(8)] = inst_36626);

(statearr_36682[(10)] = inst_36641);

return statearr_36682;
})();
var statearr_36683_38082 = state_36662__$1;
(statearr_36683_38082[(2)] = null);

(statearr_36683_38082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36663 === (9))){
var inst_36625 = (state_36662[(7)]);
var inst_36639 = cljs.core.vec(inst_36625);
var state_36662__$1 = state_36662;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36662__$1,(11),out,inst_36639);
} else {
if((state_val_36663 === (5))){
var inst_36625 = (state_36662[(7)]);
var inst_36634 = (state_36662[(11)]);
var inst_36626 = (state_36662[(8)]);
var inst_36629 = (state_36662[(9)]);
var inst_36633 = (inst_36625[inst_36626] = inst_36629);
var inst_36634__$1 = (inst_36626 + (1));
var inst_36635 = (inst_36634__$1 < n);
var state_36662__$1 = (function (){var statearr_36685 = state_36662;
(statearr_36685[(11)] = inst_36634__$1);

(statearr_36685[(12)] = inst_36633);

return statearr_36685;
})();
if(cljs.core.truth_(inst_36635)){
var statearr_36686_38085 = state_36662__$1;
(statearr_36686_38085[(1)] = (8));

} else {
var statearr_36688_38088 = state_36662__$1;
(statearr_36688_38088[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36663 === (14))){
var inst_36655 = (state_36662[(2)]);
var inst_36656 = cljs.core.async.close_BANG_(out);
var state_36662__$1 = (function (){var statearr_36690 = state_36662;
(statearr_36690[(13)] = inst_36655);

return statearr_36690;
})();
var statearr_36691_38089 = state_36662__$1;
(statearr_36691_38089[(2)] = inst_36656);

(statearr_36691_38089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36663 === (10))){
var inst_36645 = (state_36662[(2)]);
var state_36662__$1 = state_36662;
var statearr_36693_38091 = state_36662__$1;
(statearr_36693_38091[(2)] = inst_36645);

(statearr_36693_38091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36663 === (8))){
var inst_36625 = (state_36662[(7)]);
var inst_36634 = (state_36662[(11)]);
var tmp36689 = inst_36625;
var inst_36625__$1 = tmp36689;
var inst_36626 = inst_36634;
var state_36662__$1 = (function (){var statearr_36694 = state_36662;
(statearr_36694[(7)] = inst_36625__$1);

(statearr_36694[(8)] = inst_36626);

return statearr_36694;
})();
var statearr_36695_38094 = state_36662__$1;
(statearr_36695_38094[(2)] = null);

(statearr_36695_38094[(1)] = (2));


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
var statearr_36697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36697[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36697[(1)] = (1));

return statearr_36697;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36662){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36662);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36702){if((e36702 instanceof Object)){
var ex__34210__auto__ = e36702;
var statearr_36703_38095 = state_36662;
(statearr_36703_38095[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36702;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38096 = state_36662;
state_36662 = G__38096;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36662){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36705 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36705[(6)] = c__34274__auto___38068);

return statearr_36705;
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
var G__36708 = arguments.length;
switch (G__36708) {
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
var c__34274__auto___38101 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36753){
var state_val_36754 = (state_36753[(1)]);
if((state_val_36754 === (7))){
var inst_36749 = (state_36753[(2)]);
var state_36753__$1 = state_36753;
var statearr_36757_38106 = state_36753__$1;
(statearr_36757_38106[(2)] = inst_36749);

(statearr_36757_38106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (1))){
var inst_36711 = [];
var inst_36712 = inst_36711;
var inst_36713 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36753__$1 = (function (){var statearr_36758 = state_36753;
(statearr_36758[(7)] = inst_36712);

(statearr_36758[(8)] = inst_36713);

return statearr_36758;
})();
var statearr_36759_38107 = state_36753__$1;
(statearr_36759_38107[(2)] = null);

(statearr_36759_38107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (4))){
var inst_36716 = (state_36753[(9)]);
var inst_36716__$1 = (state_36753[(2)]);
var inst_36717 = (inst_36716__$1 == null);
var inst_36718 = cljs.core.not(inst_36717);
var state_36753__$1 = (function (){var statearr_36761 = state_36753;
(statearr_36761[(9)] = inst_36716__$1);

return statearr_36761;
})();
if(inst_36718){
var statearr_36762_38113 = state_36753__$1;
(statearr_36762_38113[(1)] = (5));

} else {
var statearr_36763_38114 = state_36753__$1;
(statearr_36763_38114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (15))){
var inst_36743 = (state_36753[(2)]);
var state_36753__$1 = state_36753;
var statearr_36765_38115 = state_36753__$1;
(statearr_36765_38115[(2)] = inst_36743);

(statearr_36765_38115[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (13))){
var state_36753__$1 = state_36753;
var statearr_36766_38116 = state_36753__$1;
(statearr_36766_38116[(2)] = null);

(statearr_36766_38116[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (6))){
var inst_36712 = (state_36753[(7)]);
var inst_36738 = inst_36712.length;
var inst_36739 = (inst_36738 > (0));
var state_36753__$1 = state_36753;
if(cljs.core.truth_(inst_36739)){
var statearr_36768_38117 = state_36753__$1;
(statearr_36768_38117[(1)] = (12));

} else {
var statearr_36769_38118 = state_36753__$1;
(statearr_36769_38118[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (3))){
var inst_36751 = (state_36753[(2)]);
var state_36753__$1 = state_36753;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36753__$1,inst_36751);
} else {
if((state_val_36754 === (12))){
var inst_36712 = (state_36753[(7)]);
var inst_36741 = cljs.core.vec(inst_36712);
var state_36753__$1 = state_36753;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36753__$1,(15),out,inst_36741);
} else {
if((state_val_36754 === (2))){
var state_36753__$1 = state_36753;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36753__$1,(4),ch);
} else {
if((state_val_36754 === (11))){
var inst_36720 = (state_36753[(10)]);
var inst_36716 = (state_36753[(9)]);
var inst_36731 = (state_36753[(2)]);
var inst_36732 = [];
var inst_36733 = inst_36732.push(inst_36716);
var inst_36712 = inst_36732;
var inst_36713 = inst_36720;
var state_36753__$1 = (function (){var statearr_36771 = state_36753;
(statearr_36771[(11)] = inst_36731);

(statearr_36771[(7)] = inst_36712);

(statearr_36771[(8)] = inst_36713);

(statearr_36771[(12)] = inst_36733);

return statearr_36771;
})();
var statearr_36773_38124 = state_36753__$1;
(statearr_36773_38124[(2)] = null);

(statearr_36773_38124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (9))){
var inst_36712 = (state_36753[(7)]);
var inst_36729 = cljs.core.vec(inst_36712);
var state_36753__$1 = state_36753;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36753__$1,(11),out,inst_36729);
} else {
if((state_val_36754 === (5))){
var inst_36720 = (state_36753[(10)]);
var inst_36716 = (state_36753[(9)]);
var inst_36713 = (state_36753[(8)]);
var inst_36720__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36716) : f.call(null,inst_36716));
var inst_36722 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36720__$1,inst_36713);
var inst_36723 = cljs.core.keyword_identical_QMARK_(inst_36713,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36724 = ((inst_36722) || (inst_36723));
var state_36753__$1 = (function (){var statearr_36775 = state_36753;
(statearr_36775[(10)] = inst_36720__$1);

return statearr_36775;
})();
if(cljs.core.truth_(inst_36724)){
var statearr_36776_38127 = state_36753__$1;
(statearr_36776_38127[(1)] = (8));

} else {
var statearr_36777_38128 = state_36753__$1;
(statearr_36777_38128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (14))){
var inst_36746 = (state_36753[(2)]);
var inst_36747 = cljs.core.async.close_BANG_(out);
var state_36753__$1 = (function (){var statearr_36779 = state_36753;
(statearr_36779[(13)] = inst_36746);

return statearr_36779;
})();
var statearr_36781_38130 = state_36753__$1;
(statearr_36781_38130[(2)] = inst_36747);

(statearr_36781_38130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (10))){
var inst_36736 = (state_36753[(2)]);
var state_36753__$1 = state_36753;
var statearr_36782_38131 = state_36753__$1;
(statearr_36782_38131[(2)] = inst_36736);

(statearr_36782_38131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36754 === (8))){
var inst_36720 = (state_36753[(10)]);
var inst_36716 = (state_36753[(9)]);
var inst_36712 = (state_36753[(7)]);
var inst_36726 = inst_36712.push(inst_36716);
var tmp36778 = inst_36712;
var inst_36712__$1 = tmp36778;
var inst_36713 = inst_36720;
var state_36753__$1 = (function (){var statearr_36783 = state_36753;
(statearr_36783[(14)] = inst_36726);

(statearr_36783[(7)] = inst_36712__$1);

(statearr_36783[(8)] = inst_36713);

return statearr_36783;
})();
var statearr_36785_38134 = state_36753__$1;
(statearr_36785_38134[(2)] = null);

(statearr_36785_38134[(1)] = (2));


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
var statearr_36786 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36786[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36786[(1)] = (1));

return statearr_36786;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36753){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36753);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36788){if((e36788 instanceof Object)){
var ex__34210__auto__ = e36788;
var statearr_36789_38137 = state_36753;
(statearr_36789_38137[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36788;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38138 = state_36753;
state_36753 = G__38138;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36753){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36791 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36791[(6)] = c__34274__auto___38101);

return statearr_36791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
