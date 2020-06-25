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
var G__34334 = arguments.length;
switch (G__34334) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34335 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34335 = (function (f,blockable,meta34336){
this.f = f;
this.blockable = blockable;
this.meta34336 = meta34336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34337,meta34336__$1){
var self__ = this;
var _34337__$1 = this;
return (new cljs.core.async.t_cljs$core$async34335(self__.f,self__.blockable,meta34336__$1));
}));

(cljs.core.async.t_cljs$core$async34335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34337){
var self__ = this;
var _34337__$1 = this;
return self__.meta34336;
}));

(cljs.core.async.t_cljs$core$async34335.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34335.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34335.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async34335.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async34335.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34336","meta34336",1337269977,null)], null);
}));

(cljs.core.async.t_cljs$core$async34335.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34335.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34335");

(cljs.core.async.t_cljs$core$async34335.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34335");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34335.
 */
cljs.core.async.__GT_t_cljs$core$async34335 = (function cljs$core$async$__GT_t_cljs$core$async34335(f__$1,blockable__$1,meta34336){
return (new cljs.core.async.t_cljs$core$async34335(f__$1,blockable__$1,meta34336));
});

}

return (new cljs.core.async.t_cljs$core$async34335(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34343 = arguments.length;
switch (G__34343) {
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
var G__34352 = arguments.length;
switch (G__34352) {
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
var val_36824 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36824) : fn1.call(null,val_36824));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36824) : fn1.call(null,val_36824));
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
var G__34355 = arguments.length;
switch (G__34355) {
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
var n__4666__auto___36829 = n;
var x_36830 = (0);
while(true){
if((x_36830 < n__4666__auto___36829)){
(a[x_36830] = x_36830);

var G__36831 = (x_36830 + (1));
x_36830 = G__36831;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34365 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34365 = (function (flag,meta34366){
this.flag = flag;
this.meta34366 = meta34366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34367,meta34366__$1){
var self__ = this;
var _34367__$1 = this;
return (new cljs.core.async.t_cljs$core$async34365(self__.flag,meta34366__$1));
}));

(cljs.core.async.t_cljs$core$async34365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34367){
var self__ = this;
var _34367__$1 = this;
return self__.meta34366;
}));

(cljs.core.async.t_cljs$core$async34365.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34365.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34365.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34365.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async34365.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34366","meta34366",1424200564,null)], null);
}));

(cljs.core.async.t_cljs$core$async34365.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34365.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34365");

(cljs.core.async.t_cljs$core$async34365.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34365");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34365.
 */
cljs.core.async.__GT_t_cljs$core$async34365 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34365(flag__$1,meta34366){
return (new cljs.core.async.t_cljs$core$async34365(flag__$1,meta34366));
});

}

return (new cljs.core.async.t_cljs$core$async34365(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34371 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34371 = (function (flag,cb,meta34372){
this.flag = flag;
this.cb = cb;
this.meta34372 = meta34372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34373,meta34372__$1){
var self__ = this;
var _34373__$1 = this;
return (new cljs.core.async.t_cljs$core$async34371(self__.flag,self__.cb,meta34372__$1));
}));

(cljs.core.async.t_cljs$core$async34371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34373){
var self__ = this;
var _34373__$1 = this;
return self__.meta34372;
}));

(cljs.core.async.t_cljs$core$async34371.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34371.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34371.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34371.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34371.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34372","meta34372",-1262033844,null)], null);
}));

(cljs.core.async.t_cljs$core$async34371.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34371.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34371");

(cljs.core.async.t_cljs$core$async34371.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34371");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34371.
 */
cljs.core.async.__GT_t_cljs$core$async34371 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34371(flag__$1,cb__$1,meta34372){
return (new cljs.core.async.t_cljs$core$async34371(flag__$1,cb__$1,meta34372));
});

}

return (new cljs.core.async.t_cljs$core$async34371(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34377_SHARP_){
var G__34379 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34377_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34379) : fret.call(null,G__34379));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34378_SHARP_){
var G__34380 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34378_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34380) : fret.call(null,G__34380));
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
var G__36839 = (i + (1));
i = G__36839;
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
var len__4789__auto___36842 = arguments.length;
var i__4790__auto___36843 = (0);
while(true){
if((i__4790__auto___36843 < len__4789__auto___36842)){
args__4795__auto__.push((arguments[i__4790__auto___36843]));

var G__36844 = (i__4790__auto___36843 + (1));
i__4790__auto___36843 = G__36844;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34395){
var map__34396 = p__34395;
var map__34396__$1 = (((((!((map__34396 == null))))?(((((map__34396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34396):map__34396);
var opts = map__34396__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34393){
var G__34394 = cljs.core.first(seq34393);
var seq34393__$1 = cljs.core.next(seq34393);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34394,seq34393__$1);
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
var G__34399 = arguments.length;
switch (G__34399) {
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
var c__34274__auto___36849 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34423){
var state_val_34424 = (state_34423[(1)]);
if((state_val_34424 === (7))){
var inst_34419 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34430_36851 = state_34423__$1;
(statearr_34430_36851[(2)] = inst_34419);

(statearr_34430_36851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (1))){
var state_34423__$1 = state_34423;
var statearr_34431_36852 = state_34423__$1;
(statearr_34431_36852[(2)] = null);

(statearr_34431_36852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (4))){
var inst_34402 = (state_34423[(7)]);
var inst_34402__$1 = (state_34423[(2)]);
var inst_34403 = (inst_34402__$1 == null);
var state_34423__$1 = (function (){var statearr_34432 = state_34423;
(statearr_34432[(7)] = inst_34402__$1);

return statearr_34432;
})();
if(cljs.core.truth_(inst_34403)){
var statearr_34433_36854 = state_34423__$1;
(statearr_34433_36854[(1)] = (5));

} else {
var statearr_34434_36855 = state_34423__$1;
(statearr_34434_36855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (13))){
var state_34423__$1 = state_34423;
var statearr_34436_36856 = state_34423__$1;
(statearr_34436_36856[(2)] = null);

(statearr_34436_36856[(1)] = (14));


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
var statearr_34438_36858 = state_34423__$1;
(statearr_34438_36858[(2)] = null);

(statearr_34438_36858[(1)] = (2));


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
var statearr_34440_36859 = state_34423__$1;
(statearr_34440_36859[(1)] = (12));

} else {
var statearr_34441_36860 = state_34423__$1;
(statearr_34441_36860[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (9))){
var state_34423__$1 = state_34423;
var statearr_34442_36862 = state_34423__$1;
(statearr_34442_36862[(2)] = null);

(statearr_34442_36862[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (5))){
var state_34423__$1 = state_34423;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34443_36863 = state_34423__$1;
(statearr_34443_36863[(1)] = (8));

} else {
var statearr_34444_36864 = state_34423__$1;
(statearr_34444_36864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (14))){
var inst_34417 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34447_36866 = state_34423__$1;
(statearr_34447_36866[(2)] = inst_34417);

(statearr_34447_36866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (10))){
var inst_34409 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34448_36867 = state_34423__$1;
(statearr_34448_36867[(2)] = inst_34409);

(statearr_34448_36867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (8))){
var inst_34406 = cljs.core.async.close_BANG_(to);
var state_34423__$1 = state_34423;
var statearr_34452_36868 = state_34423__$1;
(statearr_34452_36868[(2)] = inst_34406);

(statearr_34452_36868[(1)] = (10));


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
var statearr_34455 = [null,null,null,null,null,null,null,null];
(statearr_34455[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34455[(1)] = (1));

return statearr_34455;
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
}catch (e34456){if((e34456 instanceof Object)){
var ex__34210__auto__ = e34456;
var statearr_34457_36870 = state_34423;
(statearr_34457_36870[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36872 = state_34423;
state_34423 = G__36872;
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
var state__34276__auto__ = (function (){var statearr_34458 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34458[(6)] = c__34274__auto___36849);

return statearr_34458;
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
var process = (function (p__34459){
var vec__34460 = p__34459;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34460,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34460,(1),null);
var job = vec__34460;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34274__auto___36875 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34468){
var state_val_34469 = (state_34468[(1)]);
if((state_val_34469 === (1))){
var state_34468__$1 = state_34468;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34468__$1,(2),res,v);
} else {
if((state_val_34469 === (2))){
var inst_34465 = (state_34468[(2)]);
var inst_34466 = cljs.core.async.close_BANG_(res);
var state_34468__$1 = (function (){var statearr_34470 = state_34468;
(statearr_34470[(7)] = inst_34465);

return statearr_34470;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34468__$1,inst_34466);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34471 = [null,null,null,null,null,null,null,null];
(statearr_34471[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34471[(1)] = (1));

return statearr_34471;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34468){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34468);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34472){if((e34472 instanceof Object)){
var ex__34210__auto__ = e34472;
var statearr_34473_36877 = state_34468;
(statearr_34473_36877[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34472;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36879 = state_34468;
state_34468 = G__36879;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34468){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34478 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34478[(6)] = c__34274__auto___36875);

return statearr_34478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34479){
var vec__34483 = p__34479;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34483,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34483,(1),null);
var job = vec__34483;
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
var n__4666__auto___36881 = n;
var __36882 = (0);
while(true){
if((__36882 < n__4666__auto___36881)){
var G__34486_36883 = type;
var G__34486_36884__$1 = (((G__34486_36883 instanceof cljs.core.Keyword))?G__34486_36883.fqn:null);
switch (G__34486_36884__$1) {
case "compute":
var c__34274__auto___36887 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36882,c__34274__auto___36887,G__34486_36883,G__34486_36884__$1,n__4666__auto___36881,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36882,c__34274__auto___36887,G__34486_36883,G__34486_36884__$1,n__4666__auto___36881,jobs,results,process,async){
return (function (state_34499){
var state_val_34500 = (state_34499[(1)]);
if((state_val_34500 === (1))){
var state_34499__$1 = state_34499;
var statearr_34501_36888 = state_34499__$1;
(statearr_34501_36888[(2)] = null);

(statearr_34501_36888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34500 === (2))){
var state_34499__$1 = state_34499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34499__$1,(4),jobs);
} else {
if((state_val_34500 === (3))){
var inst_34497 = (state_34499[(2)]);
var state_34499__$1 = state_34499;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34499__$1,inst_34497);
} else {
if((state_val_34500 === (4))){
var inst_34489 = (state_34499[(2)]);
var inst_34490 = process(inst_34489);
var state_34499__$1 = state_34499;
if(cljs.core.truth_(inst_34490)){
var statearr_34505_36890 = state_34499__$1;
(statearr_34505_36890[(1)] = (5));

} else {
var statearr_34506_36891 = state_34499__$1;
(statearr_34506_36891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34500 === (5))){
var state_34499__$1 = state_34499;
var statearr_34507_36893 = state_34499__$1;
(statearr_34507_36893[(2)] = null);

(statearr_34507_36893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34500 === (6))){
var state_34499__$1 = state_34499;
var statearr_34508_36894 = state_34499__$1;
(statearr_34508_36894[(2)] = null);

(statearr_34508_36894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34500 === (7))){
var inst_34495 = (state_34499[(2)]);
var state_34499__$1 = state_34499;
var statearr_34509_36895 = state_34499__$1;
(statearr_34509_36895[(2)] = inst_34495);

(statearr_34509_36895[(1)] = (3));


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
});})(__36882,c__34274__auto___36887,G__34486_36883,G__34486_36884__$1,n__4666__auto___36881,jobs,results,process,async))
;
return ((function (__36882,switch__34206__auto__,c__34274__auto___36887,G__34486_36883,G__34486_36884__$1,n__4666__auto___36881,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34510 = [null,null,null,null,null,null,null];
(statearr_34510[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34510[(1)] = (1));

return statearr_34510;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34499){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34499);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34511){if((e34511 instanceof Object)){
var ex__34210__auto__ = e34511;
var statearr_34512_36898 = state_34499;
(statearr_34512_36898[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34511;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36899 = state_34499;
state_34499 = G__36899;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34499){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36882,switch__34206__auto__,c__34274__auto___36887,G__34486_36883,G__34486_36884__$1,n__4666__auto___36881,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34513 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34513[(6)] = c__34274__auto___36887);

return statearr_34513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36882,c__34274__auto___36887,G__34486_36883,G__34486_36884__$1,n__4666__auto___36881,jobs,results,process,async))
);


break;
case "async":
var c__34274__auto___36901 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36882,c__34274__auto___36901,G__34486_36883,G__34486_36884__$1,n__4666__auto___36881,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36882,c__34274__auto___36901,G__34486_36883,G__34486_36884__$1,n__4666__auto___36881,jobs,results,process,async){
return (function (state_34526){
var state_val_34527 = (state_34526[(1)]);
if((state_val_34527 === (1))){
var state_34526__$1 = state_34526;
var statearr_34528_36903 = state_34526__$1;
(statearr_34528_36903[(2)] = null);

(statearr_34528_36903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (2))){
var state_34526__$1 = state_34526;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34526__$1,(4),jobs);
} else {
if((state_val_34527 === (3))){
var inst_34524 = (state_34526[(2)]);
var state_34526__$1 = state_34526;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34526__$1,inst_34524);
} else {
if((state_val_34527 === (4))){
var inst_34516 = (state_34526[(2)]);
var inst_34517 = async(inst_34516);
var state_34526__$1 = state_34526;
if(cljs.core.truth_(inst_34517)){
var statearr_34529_36905 = state_34526__$1;
(statearr_34529_36905[(1)] = (5));

} else {
var statearr_34530_36906 = state_34526__$1;
(statearr_34530_36906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (5))){
var state_34526__$1 = state_34526;
var statearr_34531_36907 = state_34526__$1;
(statearr_34531_36907[(2)] = null);

(statearr_34531_36907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (6))){
var state_34526__$1 = state_34526;
var statearr_34532_36908 = state_34526__$1;
(statearr_34532_36908[(2)] = null);

(statearr_34532_36908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (7))){
var inst_34522 = (state_34526[(2)]);
var state_34526__$1 = state_34526;
var statearr_34533_36910 = state_34526__$1;
(statearr_34533_36910[(2)] = inst_34522);

(statearr_34533_36910[(1)] = (3));


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
});})(__36882,c__34274__auto___36901,G__34486_36883,G__34486_36884__$1,n__4666__auto___36881,jobs,results,process,async))
;
return ((function (__36882,switch__34206__auto__,c__34274__auto___36901,G__34486_36883,G__34486_36884__$1,n__4666__auto___36881,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34534 = [null,null,null,null,null,null,null];
(statearr_34534[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34534[(1)] = (1));

return statearr_34534;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34526){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34526);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34535){if((e34535 instanceof Object)){
var ex__34210__auto__ = e34535;
var statearr_34536_36912 = state_34526;
(statearr_34536_36912[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34535;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36913 = state_34526;
state_34526 = G__36913;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34526){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36882,switch__34206__auto__,c__34274__auto___36901,G__34486_36883,G__34486_36884__$1,n__4666__auto___36881,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34537 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34537[(6)] = c__34274__auto___36901);

return statearr_34537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36882,c__34274__auto___36901,G__34486_36883,G__34486_36884__$1,n__4666__auto___36881,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34486_36884__$1)].join('')));

}

var G__36915 = (__36882 + (1));
__36882 = G__36915;
continue;
} else {
}
break;
}

var c__34274__auto___36916 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34559){
var state_val_34560 = (state_34559[(1)]);
if((state_val_34560 === (7))){
var inst_34555 = (state_34559[(2)]);
var state_34559__$1 = state_34559;
var statearr_34561_36918 = state_34559__$1;
(statearr_34561_36918[(2)] = inst_34555);

(statearr_34561_36918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (1))){
var state_34559__$1 = state_34559;
var statearr_34562_36919 = state_34559__$1;
(statearr_34562_36919[(2)] = null);

(statearr_34562_36919[(1)] = (2));


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
var statearr_34564_36920 = state_34559__$1;
(statearr_34564_36920[(1)] = (5));

} else {
var statearr_34565_36922 = state_34559__$1;
(statearr_34565_36922[(1)] = (6));

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
var statearr_34568_36924 = state_34559__$1;
(statearr_34568_36924[(2)] = null);

(statearr_34568_36924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (5))){
var inst_34543 = cljs.core.async.close_BANG_(jobs);
var state_34559__$1 = state_34559;
var statearr_34569_36926 = state_34559__$1;
(statearr_34569_36926[(2)] = inst_34543);

(statearr_34569_36926[(1)] = (7));


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
var statearr_34573_36928 = state_34559;
(statearr_34573_36928[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36930 = state_34559;
state_34559 = G__36930;
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
var state__34276__auto__ = (function (){var statearr_34574 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34574[(6)] = c__34274__auto___36916);

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
var statearr_34614_36932 = state_34612__$1;
(statearr_34614_36932[(2)] = inst_34608);

(statearr_34614_36932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var state_34612__$1 = state_34612;
var statearr_34615_36933 = state_34612__$1;
(statearr_34615_36933[(2)] = null);

(statearr_34615_36933[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34616_36934 = state_34612__$1;
(statearr_34616_36934[(2)] = null);

(statearr_34616_36934[(1)] = (2));


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
var statearr_34621_36936 = state_34612__$1;
(statearr_34621_36936[(1)] = (5));

} else {
var statearr_34622_36937 = state_34612__$1;
(statearr_34622_36937[(1)] = (6));

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
var statearr_34623_36939 = state_34612__$1;
(statearr_34623_36939[(2)] = inst_34603);

(statearr_34623_36939[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34624 = state_34612;
(statearr_34624[(9)] = inst_34605);

return statearr_34624;
})();
var statearr_34625_36940 = state_34612__$1;
(statearr_34625_36940[(2)] = null);

(statearr_34625_36940[(1)] = (2));


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
var statearr_34626_36942 = state_34612__$1;
(statearr_34626_36942[(1)] = (19));

} else {
var statearr_34630_36943 = state_34612__$1;
(statearr_34630_36943[(1)] = (20));

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
var statearr_34633_36945 = state_34612__$1;
(statearr_34633_36945[(2)] = null);

(statearr_34633_36945[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34587 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34634 = state_34612;
(statearr_34634[(10)] = inst_34587);

return statearr_34634;
})();
var statearr_34635_36946 = state_34612__$1;
(statearr_34635_36946[(2)] = null);

(statearr_34635_36946[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34636_36948 = state_34612__$1;
(statearr_34636_36948[(2)] = null);

(statearr_34636_36948[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34638_36949 = state_34612__$1;
(statearr_34638_36949[(1)] = (8));

} else {
var statearr_34639_36950 = state_34612__$1;
(statearr_34639_36950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (14))){
var inst_34590 = (state_34612[(8)]);
var inst_34590__$1 = (state_34612[(2)]);
var inst_34591 = (inst_34590__$1 == null);
var inst_34592 = cljs.core.not(inst_34591);
var state_34612__$1 = (function (){var statearr_34640 = state_34612;
(statearr_34640[(8)] = inst_34590__$1);

return statearr_34640;
})();
if(inst_34592){
var statearr_34641_36952 = state_34612__$1;
(statearr_34641_36952[(1)] = (15));

} else {
var statearr_34642_36953 = state_34612__$1;
(statearr_34642_36953[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34645_36954 = state_34612__$1;
(statearr_34645_36954[(2)] = false);

(statearr_34645_36954[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34646_36956 = state_34612__$1;
(statearr_34646_36956[(2)] = inst_34584);

(statearr_34646_36956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34647_36957 = state_34612__$1;
(statearr_34647_36957[(2)] = inst_34595);

(statearr_34647_36957[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34581 = cljs.core.async.close_BANG_(to);
var state_34612__$1 = state_34612;
var statearr_34648_36958 = state_34612__$1;
(statearr_34648_36958[(2)] = inst_34581);

(statearr_34648_36958[(1)] = (10));


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
var statearr_34649 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34649[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34649[(1)] = (1));

return statearr_34649;
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
}catch (e34650){if((e34650 instanceof Object)){
var ex__34210__auto__ = e34650;
var statearr_34651_36961 = state_34612;
(statearr_34651_36961[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34650;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36962 = state_34612;
state_34612 = G__36962;
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
var state__34276__auto__ = (function (){var statearr_34653 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34653[(6)] = c__34274__auto__);

return statearr_34653;
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
var G__34656 = arguments.length;
switch (G__34656) {
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
var G__34663 = arguments.length;
switch (G__34663) {
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
var G__34666 = arguments.length;
switch (G__34666) {
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
var c__34274__auto___36971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34692){
var state_val_34693 = (state_34692[(1)]);
if((state_val_34693 === (7))){
var inst_34688 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
var statearr_34694_36973 = state_34692__$1;
(statearr_34694_36973[(2)] = inst_34688);

(statearr_34694_36973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (1))){
var state_34692__$1 = state_34692;
var statearr_34695_36974 = state_34692__$1;
(statearr_34695_36974[(2)] = null);

(statearr_34695_36974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (4))){
var inst_34669 = (state_34692[(7)]);
var inst_34669__$1 = (state_34692[(2)]);
var inst_34670 = (inst_34669__$1 == null);
var state_34692__$1 = (function (){var statearr_34699 = state_34692;
(statearr_34699[(7)] = inst_34669__$1);

return statearr_34699;
})();
if(cljs.core.truth_(inst_34670)){
var statearr_34700_36976 = state_34692__$1;
(statearr_34700_36976[(1)] = (5));

} else {
var statearr_34701_36977 = state_34692__$1;
(statearr_34701_36977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (13))){
var state_34692__$1 = state_34692;
var statearr_34702_36978 = state_34692__$1;
(statearr_34702_36978[(2)] = null);

(statearr_34702_36978[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (6))){
var inst_34669 = (state_34692[(7)]);
var inst_34675 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34669) : p.call(null,inst_34669));
var state_34692__$1 = state_34692;
if(cljs.core.truth_(inst_34675)){
var statearr_34703_36980 = state_34692__$1;
(statearr_34703_36980[(1)] = (9));

} else {
var statearr_34704_36981 = state_34692__$1;
(statearr_34704_36981[(1)] = (10));

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
var statearr_34705_36982 = state_34692__$1;
(statearr_34705_36982[(2)] = null);

(statearr_34705_36982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (2))){
var state_34692__$1 = state_34692;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34692__$1,(4),ch);
} else {
if((state_val_34693 === (11))){
var inst_34669 = (state_34692[(7)]);
var inst_34679 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34692__$1,(8),inst_34679,inst_34669);
} else {
if((state_val_34693 === (9))){
var state_34692__$1 = state_34692;
var statearr_34709_36984 = state_34692__$1;
(statearr_34709_36984[(2)] = tc);

(statearr_34709_36984[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (5))){
var inst_34672 = cljs.core.async.close_BANG_(tc);
var inst_34673 = cljs.core.async.close_BANG_(fc);
var state_34692__$1 = (function (){var statearr_34710 = state_34692;
(statearr_34710[(8)] = inst_34672);

return statearr_34710;
})();
var statearr_34711_36986 = state_34692__$1;
(statearr_34711_36986[(2)] = inst_34673);

(statearr_34711_36986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (14))){
var inst_34686 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
var statearr_34712_36987 = state_34692__$1;
(statearr_34712_36987[(2)] = inst_34686);

(statearr_34712_36987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (10))){
var state_34692__$1 = state_34692;
var statearr_34713_36989 = state_34692__$1;
(statearr_34713_36989[(2)] = fc);

(statearr_34713_36989[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (8))){
var inst_34681 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
if(cljs.core.truth_(inst_34681)){
var statearr_34714_36990 = state_34692__$1;
(statearr_34714_36990[(1)] = (12));

} else {
var statearr_34715_36991 = state_34692__$1;
(statearr_34715_36991[(1)] = (13));

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
}catch (e34717){if((e34717 instanceof Object)){
var ex__34210__auto__ = e34717;
var statearr_34718_36993 = state_34692;
(statearr_34718_36993[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34717;

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
var state__34276__auto__ = (function (){var statearr_34722 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34722[(6)] = c__34274__auto___36971);

return statearr_34722;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34743){
var state_val_34744 = (state_34743[(1)]);
if((state_val_34744 === (7))){
var inst_34739 = (state_34743[(2)]);
var state_34743__$1 = state_34743;
var statearr_34745_36997 = state_34743__$1;
(statearr_34745_36997[(2)] = inst_34739);

(statearr_34745_36997[(1)] = (3));


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
var statearr_34752_37003 = state_34743__$1;
(statearr_34752_37003[(1)] = (8));

} else {
var statearr_34753_37004 = state_34743__$1;
(statearr_34753_37004[(1)] = (9));

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
var statearr_34755_37006 = state_34743__$1;
(statearr_34755_37006[(2)] = null);

(statearr_34755_37006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (5))){
var inst_34723 = (state_34743[(7)]);
var state_34743__$1 = state_34743;
var statearr_34756_37007 = state_34743__$1;
(statearr_34756_37007[(2)] = inst_34723);

(statearr_34756_37007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (10))){
var inst_34737 = (state_34743[(2)]);
var state_34743__$1 = state_34743;
var statearr_34757_37009 = state_34743__$1;
(statearr_34757_37009[(2)] = inst_34737);

(statearr_34757_37009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (8))){
var inst_34730 = (state_34743[(9)]);
var inst_34733 = cljs.core.deref(inst_34730);
var state_34743__$1 = state_34743;
var statearr_34758_37010 = state_34743__$1;
(statearr_34758_37010[(2)] = inst_34733);

(statearr_34758_37010[(1)] = (10));


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
}catch (e34760){if((e34760 instanceof Object)){
var ex__34210__auto__ = e34760;
var statearr_34761_37012 = state_34743;
(statearr_34761_37012[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37014 = state_34743;
state_34743 = G__37014;
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
var statearr_34772_37022 = state_34768;
(statearr_34772_37022[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34771;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37023 = state_34768;
state_34768 = G__37023;
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
var statearr_34812_37027 = state_34807__$1;
(statearr_34812_37027[(2)] = inst_34789);

(statearr_34812_37027[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (1))){
var inst_34783 = cljs.core.seq(coll);
var inst_34784 = inst_34783;
var state_34807__$1 = (function (){var statearr_34813 = state_34807;
(statearr_34813[(7)] = inst_34784);

return statearr_34813;
})();
var statearr_34816_37031 = state_34807__$1;
(statearr_34816_37031[(2)] = null);

(statearr_34816_37031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (4))){
var inst_34784 = (state_34807[(7)]);
var inst_34787 = cljs.core.first(inst_34784);
var state_34807__$1 = state_34807;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34807__$1,(7),ch,inst_34787);
} else {
if((state_val_34808 === (13))){
var inst_34801 = (state_34807[(2)]);
var state_34807__$1 = state_34807;
var statearr_34818_37032 = state_34807__$1;
(statearr_34818_37032[(2)] = inst_34801);

(statearr_34818_37032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (6))){
var inst_34792 = (state_34807[(2)]);
var state_34807__$1 = state_34807;
if(cljs.core.truth_(inst_34792)){
var statearr_34819_37033 = state_34807__$1;
(statearr_34819_37033[(1)] = (8));

} else {
var statearr_34820_37034 = state_34807__$1;
(statearr_34820_37034[(1)] = (9));

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
var statearr_34821_37036 = state_34807__$1;
(statearr_34821_37036[(2)] = null);

(statearr_34821_37036[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (2))){
var inst_34784 = (state_34807[(7)]);
var state_34807__$1 = state_34807;
if(cljs.core.truth_(inst_34784)){
var statearr_34822_37037 = state_34807__$1;
(statearr_34822_37037[(1)] = (4));

} else {
var statearr_34823_37038 = state_34807__$1;
(statearr_34823_37038[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (11))){
var inst_34798 = cljs.core.async.close_BANG_(ch);
var state_34807__$1 = state_34807;
var statearr_34824_37039 = state_34807__$1;
(statearr_34824_37039[(2)] = inst_34798);

(statearr_34824_37039[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (9))){
var state_34807__$1 = state_34807;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34825_37040 = state_34807__$1;
(statearr_34825_37040[(1)] = (11));

} else {
var statearr_34826_37041 = state_34807__$1;
(statearr_34826_37041[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (5))){
var inst_34784 = (state_34807[(7)]);
var state_34807__$1 = state_34807;
var statearr_34830_37042 = state_34807__$1;
(statearr_34830_37042[(2)] = inst_34784);

(statearr_34830_37042[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (10))){
var inst_34803 = (state_34807[(2)]);
var state_34807__$1 = state_34807;
var statearr_34831_37043 = state_34807__$1;
(statearr_34831_37043[(2)] = inst_34803);

(statearr_34831_37043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (8))){
var inst_34784 = (state_34807[(7)]);
var inst_34794 = cljs.core.next(inst_34784);
var inst_34784__$1 = inst_34794;
var state_34807__$1 = (function (){var statearr_34835 = state_34807;
(statearr_34835[(7)] = inst_34784__$1);

return statearr_34835;
})();
var statearr_34836_37044 = state_34807__$1;
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
var statearr_34839_37045 = state_34807;
(statearr_34839_37045[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34838;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37046 = state_34807;
state_34807 = G__37046;
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
var c__34274__auto___37063 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34982){
var state_val_34983 = (state_34982[(1)]);
if((state_val_34983 === (7))){
var inst_34978 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_34984_37069 = state_34982__$1;
(statearr_34984_37069[(2)] = inst_34978);

(statearr_34984_37069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (20))){
var inst_34877 = (state_34982[(7)]);
var inst_34889 = cljs.core.first(inst_34877);
var inst_34890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34889,(0),null);
var inst_34891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34889,(1),null);
var state_34982__$1 = (function (){var statearr_34987 = state_34982;
(statearr_34987[(8)] = inst_34890);

return statearr_34987;
})();
if(cljs.core.truth_(inst_34891)){
var statearr_34988_37072 = state_34982__$1;
(statearr_34988_37072[(1)] = (22));

} else {
var statearr_34989_37075 = state_34982__$1;
(statearr_34989_37075[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (27))){
var inst_34927 = (state_34982[(9)]);
var inst_34846 = (state_34982[(10)]);
var inst_34919 = (state_34982[(11)]);
var inst_34921 = (state_34982[(12)]);
var inst_34927__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34919,inst_34921);
var inst_34929 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34927__$1,inst_34846,done);
var state_34982__$1 = (function (){var statearr_34990 = state_34982;
(statearr_34990[(9)] = inst_34927__$1);

return statearr_34990;
})();
if(cljs.core.truth_(inst_34929)){
var statearr_34991_37078 = state_34982__$1;
(statearr_34991_37078[(1)] = (30));

} else {
var statearr_34992_37080 = state_34982__$1;
(statearr_34992_37080[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (1))){
var state_34982__$1 = state_34982;
var statearr_34993_37084 = state_34982__$1;
(statearr_34993_37084[(2)] = null);

(statearr_34993_37084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (24))){
var inst_34877 = (state_34982[(7)]);
var inst_34896 = (state_34982[(2)]);
var inst_34897 = cljs.core.next(inst_34877);
var inst_34855 = inst_34897;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34982__$1 = (function (){var statearr_34994 = state_34982;
(statearr_34994[(13)] = inst_34857);

(statearr_34994[(14)] = inst_34856);

(statearr_34994[(15)] = inst_34858);

(statearr_34994[(16)] = inst_34896);

(statearr_34994[(17)] = inst_34855);

return statearr_34994;
})();
var statearr_34995_37092 = state_34982__$1;
(statearr_34995_37092[(2)] = null);

(statearr_34995_37092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (39))){
var state_34982__$1 = state_34982;
var statearr_35002_37093 = state_34982__$1;
(statearr_35002_37093[(2)] = null);

(statearr_35002_37093[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (4))){
var inst_34846 = (state_34982[(10)]);
var inst_34846__$1 = (state_34982[(2)]);
var inst_34847 = (inst_34846__$1 == null);
var state_34982__$1 = (function (){var statearr_35006 = state_34982;
(statearr_35006[(10)] = inst_34846__$1);

return statearr_35006;
})();
if(cljs.core.truth_(inst_34847)){
var statearr_35007_37096 = state_34982__$1;
(statearr_35007_37096[(1)] = (5));

} else {
var statearr_35008_37099 = state_34982__$1;
(statearr_35008_37099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (15))){
var inst_34857 = (state_34982[(13)]);
var inst_34856 = (state_34982[(14)]);
var inst_34858 = (state_34982[(15)]);
var inst_34855 = (state_34982[(17)]);
var inst_34873 = (state_34982[(2)]);
var inst_34874 = (inst_34858 + (1));
var tmp34998 = inst_34857;
var tmp34999 = inst_34856;
var tmp35000 = inst_34855;
var inst_34855__$1 = tmp35000;
var inst_34856__$1 = tmp34999;
var inst_34857__$1 = tmp34998;
var inst_34858__$1 = inst_34874;
var state_34982__$1 = (function (){var statearr_35009 = state_34982;
(statearr_35009[(18)] = inst_34873);

(statearr_35009[(13)] = inst_34857__$1);

(statearr_35009[(14)] = inst_34856__$1);

(statearr_35009[(15)] = inst_34858__$1);

(statearr_35009[(17)] = inst_34855__$1);

return statearr_35009;
})();
var statearr_35010_37107 = state_34982__$1;
(statearr_35010_37107[(2)] = null);

(statearr_35010_37107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (21))){
var inst_34900 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35014_37110 = state_34982__$1;
(statearr_35014_37110[(2)] = inst_34900);

(statearr_35014_37110[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (31))){
var inst_34927 = (state_34982[(9)]);
var inst_34932 = done(null);
var inst_34935 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34927);
var state_34982__$1 = (function (){var statearr_35015 = state_34982;
(statearr_35015[(19)] = inst_34932);

return statearr_35015;
})();
var statearr_35016_37113 = state_34982__$1;
(statearr_35016_37113[(2)] = inst_34935);

(statearr_35016_37113[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (32))){
var inst_34918 = (state_34982[(20)]);
var inst_34919 = (state_34982[(11)]);
var inst_34920 = (state_34982[(21)]);
var inst_34921 = (state_34982[(12)]);
var inst_34937 = (state_34982[(2)]);
var inst_34938 = (inst_34921 + (1));
var tmp35011 = inst_34918;
var tmp35012 = inst_34919;
var tmp35013 = inst_34920;
var inst_34918__$1 = tmp35011;
var inst_34919__$1 = tmp35012;
var inst_34920__$1 = tmp35013;
var inst_34921__$1 = inst_34938;
var state_34982__$1 = (function (){var statearr_35019 = state_34982;
(statearr_35019[(20)] = inst_34918__$1);

(statearr_35019[(22)] = inst_34937);

(statearr_35019[(11)] = inst_34919__$1);

(statearr_35019[(21)] = inst_34920__$1);

(statearr_35019[(12)] = inst_34921__$1);

return statearr_35019;
})();
var statearr_35021_37125 = state_34982__$1;
(statearr_35021_37125[(2)] = null);

(statearr_35021_37125[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (40))){
var inst_34950 = (state_34982[(23)]);
var inst_34954 = done(null);
var inst_34955 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34950);
var state_34982__$1 = (function (){var statearr_35024 = state_34982;
(statearr_35024[(24)] = inst_34954);

return statearr_35024;
})();
var statearr_35025_37128 = state_34982__$1;
(statearr_35025_37128[(2)] = inst_34955);

(statearr_35025_37128[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (33))){
var inst_34941 = (state_34982[(25)]);
var inst_34943 = cljs.core.chunked_seq_QMARK_(inst_34941);
var state_34982__$1 = state_34982;
if(inst_34943){
var statearr_35027_37131 = state_34982__$1;
(statearr_35027_37131[(1)] = (36));

} else {
var statearr_35028_37132 = state_34982__$1;
(statearr_35028_37132[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (13))){
var inst_34867 = (state_34982[(26)]);
var inst_34870 = cljs.core.async.close_BANG_(inst_34867);
var state_34982__$1 = state_34982;
var statearr_35029_37133 = state_34982__$1;
(statearr_35029_37133[(2)] = inst_34870);

(statearr_35029_37133[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (22))){
var inst_34890 = (state_34982[(8)]);
var inst_34893 = cljs.core.async.close_BANG_(inst_34890);
var state_34982__$1 = state_34982;
var statearr_35030_37135 = state_34982__$1;
(statearr_35030_37135[(2)] = inst_34893);

(statearr_35030_37135[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (36))){
var inst_34941 = (state_34982[(25)]);
var inst_34945 = cljs.core.chunk_first(inst_34941);
var inst_34946 = cljs.core.chunk_rest(inst_34941);
var inst_34947 = cljs.core.count(inst_34945);
var inst_34918 = inst_34946;
var inst_34919 = inst_34945;
var inst_34920 = inst_34947;
var inst_34921 = (0);
var state_34982__$1 = (function (){var statearr_35031 = state_34982;
(statearr_35031[(20)] = inst_34918);

(statearr_35031[(11)] = inst_34919);

(statearr_35031[(21)] = inst_34920);

(statearr_35031[(12)] = inst_34921);

return statearr_35031;
})();
var statearr_35034_37142 = state_34982__$1;
(statearr_35034_37142[(2)] = null);

(statearr_35034_37142[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (41))){
var inst_34941 = (state_34982[(25)]);
var inst_34957 = (state_34982[(2)]);
var inst_34958 = cljs.core.next(inst_34941);
var inst_34918 = inst_34958;
var inst_34919 = null;
var inst_34920 = (0);
var inst_34921 = (0);
var state_34982__$1 = (function (){var statearr_35038 = state_34982;
(statearr_35038[(20)] = inst_34918);

(statearr_35038[(27)] = inst_34957);

(statearr_35038[(11)] = inst_34919);

(statearr_35038[(21)] = inst_34920);

(statearr_35038[(12)] = inst_34921);

return statearr_35038;
})();
var statearr_35040_37145 = state_34982__$1;
(statearr_35040_37145[(2)] = null);

(statearr_35040_37145[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (43))){
var state_34982__$1 = state_34982;
var statearr_35041_37151 = state_34982__$1;
(statearr_35041_37151[(2)] = null);

(statearr_35041_37151[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (29))){
var inst_34966 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35042_37154 = state_34982__$1;
(statearr_35042_37154[(2)] = inst_34966);

(statearr_35042_37154[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (44))){
var inst_34975 = (state_34982[(2)]);
var state_34982__$1 = (function (){var statearr_35044 = state_34982;
(statearr_35044[(28)] = inst_34975);

return statearr_35044;
})();
var statearr_35046_37156 = state_34982__$1;
(statearr_35046_37156[(2)] = null);

(statearr_35046_37156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (6))){
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
var state_34982__$1 = (function (){var statearr_35049 = state_34982;
(statearr_35049[(20)] = inst_34918);

(statearr_35049[(29)] = inst_34910__$1);

(statearr_35049[(11)] = inst_34919);

(statearr_35049[(21)] = inst_34920);

(statearr_35049[(12)] = inst_34921);

(statearr_35049[(30)] = inst_34912);

return statearr_35049;
})();
var statearr_35065_37160 = state_34982__$1;
(statearr_35065_37160[(2)] = null);

(statearr_35065_37160[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (28))){
var inst_34918 = (state_34982[(20)]);
var inst_34941 = (state_34982[(25)]);
var inst_34941__$1 = cljs.core.seq(inst_34918);
var state_34982__$1 = (function (){var statearr_35066 = state_34982;
(statearr_35066[(25)] = inst_34941__$1);

return statearr_35066;
})();
if(inst_34941__$1){
var statearr_35068_37161 = state_34982__$1;
(statearr_35068_37161[(1)] = (33));

} else {
var statearr_35070_37164 = state_34982__$1;
(statearr_35070_37164[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (25))){
var inst_34920 = (state_34982[(21)]);
var inst_34921 = (state_34982[(12)]);
var inst_34923 = (inst_34921 < inst_34920);
var inst_34924 = inst_34923;
var state_34982__$1 = state_34982;
if(cljs.core.truth_(inst_34924)){
var statearr_35073_37166 = state_34982__$1;
(statearr_35073_37166[(1)] = (27));

} else {
var statearr_35074_37168 = state_34982__$1;
(statearr_35074_37168[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (34))){
var state_34982__$1 = state_34982;
var statearr_35075_37171 = state_34982__$1;
(statearr_35075_37171[(2)] = null);

(statearr_35075_37171[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (17))){
var state_34982__$1 = state_34982;
var statearr_35076_37173 = state_34982__$1;
(statearr_35076_37173[(2)] = null);

(statearr_35076_37173[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (3))){
var inst_34980 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34982__$1,inst_34980);
} else {
if((state_val_34983 === (12))){
var inst_34905 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35078_37174 = state_34982__$1;
(statearr_35078_37174[(2)] = inst_34905);

(statearr_35078_37174[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (2))){
var state_34982__$1 = state_34982;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34982__$1,(4),ch);
} else {
if((state_val_34983 === (23))){
var state_34982__$1 = state_34982;
var statearr_35086_37180 = state_34982__$1;
(statearr_35086_37180[(2)] = null);

(statearr_35086_37180[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (35))){
var inst_34964 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35091_37183 = state_34982__$1;
(statearr_35091_37183[(2)] = inst_34964);

(statearr_35091_37183[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (19))){
var inst_34877 = (state_34982[(7)]);
var inst_34881 = cljs.core.chunk_first(inst_34877);
var inst_34882 = cljs.core.chunk_rest(inst_34877);
var inst_34883 = cljs.core.count(inst_34881);
var inst_34855 = inst_34882;
var inst_34856 = inst_34881;
var inst_34857 = inst_34883;
var inst_34858 = (0);
var state_34982__$1 = (function (){var statearr_35098 = state_34982;
(statearr_35098[(13)] = inst_34857);

(statearr_35098[(14)] = inst_34856);

(statearr_35098[(15)] = inst_34858);

(statearr_35098[(17)] = inst_34855);

return statearr_35098;
})();
var statearr_35103_37185 = state_34982__$1;
(statearr_35103_37185[(2)] = null);

(statearr_35103_37185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (11))){
var inst_34855 = (state_34982[(17)]);
var inst_34877 = (state_34982[(7)]);
var inst_34877__$1 = cljs.core.seq(inst_34855);
var state_34982__$1 = (function (){var statearr_35109 = state_34982;
(statearr_35109[(7)] = inst_34877__$1);

return statearr_35109;
})();
if(inst_34877__$1){
var statearr_35111_37189 = state_34982__$1;
(statearr_35111_37189[(1)] = (16));

} else {
var statearr_35113_37190 = state_34982__$1;
(statearr_35113_37190[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (9))){
var inst_34907 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35118_37191 = state_34982__$1;
(statearr_35118_37191[(2)] = inst_34907);

(statearr_35118_37191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (5))){
var inst_34853 = cljs.core.deref(cs);
var inst_34854 = cljs.core.seq(inst_34853);
var inst_34855 = inst_34854;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34982__$1 = (function (){var statearr_35124 = state_34982;
(statearr_35124[(13)] = inst_34857);

(statearr_35124[(14)] = inst_34856);

(statearr_35124[(15)] = inst_34858);

(statearr_35124[(17)] = inst_34855);

return statearr_35124;
})();
var statearr_35128_37196 = state_34982__$1;
(statearr_35128_37196[(2)] = null);

(statearr_35128_37196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (14))){
var state_34982__$1 = state_34982;
var statearr_35134_37200 = state_34982__$1;
(statearr_35134_37200[(2)] = null);

(statearr_35134_37200[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (45))){
var inst_34972 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35140_37201 = state_34982__$1;
(statearr_35140_37201[(2)] = inst_34972);

(statearr_35140_37201[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (26))){
var inst_34910 = (state_34982[(29)]);
var inst_34968 = (state_34982[(2)]);
var inst_34969 = cljs.core.seq(inst_34910);
var state_34982__$1 = (function (){var statearr_35145 = state_34982;
(statearr_35145[(31)] = inst_34968);

return statearr_35145;
})();
if(inst_34969){
var statearr_35149_37204 = state_34982__$1;
(statearr_35149_37204[(1)] = (42));

} else {
var statearr_35151_37205 = state_34982__$1;
(statearr_35151_37205[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (16))){
var inst_34877 = (state_34982[(7)]);
var inst_34879 = cljs.core.chunked_seq_QMARK_(inst_34877);
var state_34982__$1 = state_34982;
if(inst_34879){
var statearr_35157_37206 = state_34982__$1;
(statearr_35157_37206[(1)] = (19));

} else {
var statearr_35158_37208 = state_34982__$1;
(statearr_35158_37208[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (38))){
var inst_34961 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35166_37210 = state_34982__$1;
(statearr_35166_37210[(2)] = inst_34961);

(statearr_35166_37210[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (30))){
var state_34982__$1 = state_34982;
var statearr_35168_37211 = state_34982__$1;
(statearr_35168_37211[(2)] = null);

(statearr_35168_37211[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (10))){
var inst_34856 = (state_34982[(14)]);
var inst_34858 = (state_34982[(15)]);
var inst_34866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34856,inst_34858);
var inst_34867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(0),null);
var inst_34868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(1),null);
var state_34982__$1 = (function (){var statearr_35175 = state_34982;
(statearr_35175[(26)] = inst_34867);

return statearr_35175;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_35176_37215 = state_34982__$1;
(statearr_35176_37215[(1)] = (13));

} else {
var statearr_35177_37216 = state_34982__$1;
(statearr_35177_37216[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (18))){
var inst_34903 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35178_37220 = state_34982__$1;
(statearr_35178_37220[(2)] = inst_34903);

(statearr_35178_37220[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (42))){
var state_34982__$1 = state_34982;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34982__$1,(45),dchan);
} else {
if((state_val_34983 === (37))){
var inst_34950 = (state_34982[(23)]);
var inst_34846 = (state_34982[(10)]);
var inst_34941 = (state_34982[(25)]);
var inst_34950__$1 = cljs.core.first(inst_34941);
var inst_34951 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34950__$1,inst_34846,done);
var state_34982__$1 = (function (){var statearr_35179 = state_34982;
(statearr_35179[(23)] = inst_34950__$1);

return statearr_35179;
})();
if(cljs.core.truth_(inst_34951)){
var statearr_35182_37226 = state_34982__$1;
(statearr_35182_37226[(1)] = (39));

} else {
var statearr_35183_37227 = state_34982__$1;
(statearr_35183_37227[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (8))){
var inst_34857 = (state_34982[(13)]);
var inst_34858 = (state_34982[(15)]);
var inst_34860 = (inst_34858 < inst_34857);
var inst_34861 = inst_34860;
var state_34982__$1 = state_34982;
if(cljs.core.truth_(inst_34861)){
var statearr_35184_37228 = state_34982__$1;
(statearr_35184_37228[(1)] = (10));

} else {
var statearr_35185_37229 = state_34982__$1;
(statearr_35185_37229[(1)] = (11));

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
var statearr_35209 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35209[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35209[(1)] = (1));

return statearr_35209;
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
}catch (e35212){if((e35212 instanceof Object)){
var ex__34210__auto__ = e35212;
var statearr_35213_37236 = state_34982;
(statearr_35213_37236[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35212;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37237 = state_34982;
state_34982 = G__37237;
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
var state__34276__auto__ = (function (){var statearr_35216 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35216[(6)] = c__34274__auto___37063);

return statearr_35216;
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
var G__35221 = arguments.length;
switch (G__35221) {
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
var len__4789__auto___37285 = arguments.length;
var i__4790__auto___37287 = (0);
while(true){
if((i__4790__auto___37287 < len__4789__auto___37285)){
args__4795__auto__.push((arguments[i__4790__auto___37287]));

var G__37288 = (i__4790__auto___37287 + (1));
i__4790__auto___37287 = G__37288;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35352){
var map__35357 = p__35352;
var map__35357__$1 = (((((!((map__35357 == null))))?(((((map__35357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35357):map__35357);
var opts = map__35357__$1;
var statearr_35363_37293 = state;
(statearr_35363_37293[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35367_37294 = state;
(statearr_35367_37294[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35368_37296 = state;
(statearr_35368_37296[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35333){
var G__35334 = cljs.core.first(seq35333);
var seq35333__$1 = cljs.core.next(seq35333);
var G__35335 = cljs.core.first(seq35333__$1);
var seq35333__$2 = cljs.core.next(seq35333__$1);
var G__35336 = cljs.core.first(seq35333__$2);
var seq35333__$3 = cljs.core.next(seq35333__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35334,G__35335,G__35336,seq35333__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35378 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35378 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35379){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35379 = meta35379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35380,meta35379__$1){
var self__ = this;
var _35380__$1 = this;
return (new cljs.core.async.t_cljs$core$async35378(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35379__$1));
}));

(cljs.core.async.t_cljs$core$async35378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35380){
var self__ = this;
var _35380__$1 = this;
return self__.meta35379;
}));

(cljs.core.async.t_cljs$core$async35378.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35378.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35378.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35378.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35378.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35378.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35378.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35378.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35378.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35379","meta35379",267212932,null)], null);
}));

(cljs.core.async.t_cljs$core$async35378.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35378.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35378");

(cljs.core.async.t_cljs$core$async35378.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35378");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35378.
 */
cljs.core.async.__GT_t_cljs$core$async35378 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35378(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35379){
return (new cljs.core.async.t_cljs$core$async35378(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35379));
});

}

return (new cljs.core.async.t_cljs$core$async35378(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37335 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35554){
var state_val_35555 = (state_35554[(1)]);
if((state_val_35555 === (7))){
var inst_35436 = (state_35554[(2)]);
var state_35554__$1 = state_35554;
var statearr_35556_37339 = state_35554__$1;
(statearr_35556_37339[(2)] = inst_35436);

(statearr_35556_37339[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (20))){
var inst_35450 = (state_35554[(7)]);
var state_35554__$1 = state_35554;
var statearr_35559_37343 = state_35554__$1;
(statearr_35559_37343[(2)] = inst_35450);

(statearr_35559_37343[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (27))){
var state_35554__$1 = state_35554;
var statearr_35562_37345 = state_35554__$1;
(statearr_35562_37345[(2)] = null);

(statearr_35562_37345[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (1))){
var inst_35419 = (state_35554[(8)]);
var inst_35419__$1 = calc_state();
var inst_35422 = (inst_35419__$1 == null);
var inst_35423 = cljs.core.not(inst_35422);
var state_35554__$1 = (function (){var statearr_35563 = state_35554;
(statearr_35563[(8)] = inst_35419__$1);

return statearr_35563;
})();
if(inst_35423){
var statearr_35565_37346 = state_35554__$1;
(statearr_35565_37346[(1)] = (2));

} else {
var statearr_35566_37347 = state_35554__$1;
(statearr_35566_37347[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (24))){
var inst_35480 = (state_35554[(9)]);
var inst_35505 = (state_35554[(10)]);
var inst_35489 = (state_35554[(11)]);
var inst_35505__$1 = (inst_35480.cljs$core$IFn$_invoke$arity$1 ? inst_35480.cljs$core$IFn$_invoke$arity$1(inst_35489) : inst_35480.call(null,inst_35489));
var state_35554__$1 = (function (){var statearr_35571 = state_35554;
(statearr_35571[(10)] = inst_35505__$1);

return statearr_35571;
})();
if(cljs.core.truth_(inst_35505__$1)){
var statearr_35574_37349 = state_35554__$1;
(statearr_35574_37349[(1)] = (29));

} else {
var statearr_35575_37351 = state_35554__$1;
(statearr_35575_37351[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (4))){
var inst_35440 = (state_35554[(2)]);
var state_35554__$1 = state_35554;
if(cljs.core.truth_(inst_35440)){
var statearr_35579_37353 = state_35554__$1;
(statearr_35579_37353[(1)] = (8));

} else {
var statearr_35580_37355 = state_35554__$1;
(statearr_35580_37355[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (15))){
var inst_35474 = (state_35554[(2)]);
var state_35554__$1 = state_35554;
if(cljs.core.truth_(inst_35474)){
var statearr_35584_37357 = state_35554__$1;
(statearr_35584_37357[(1)] = (19));

} else {
var statearr_35588_37359 = state_35554__$1;
(statearr_35588_37359[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (21))){
var inst_35479 = (state_35554[(12)]);
var inst_35479__$1 = (state_35554[(2)]);
var inst_35480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35479__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35479__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35479__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35554__$1 = (function (){var statearr_35595 = state_35554;
(statearr_35595[(9)] = inst_35480);

(statearr_35595[(13)] = inst_35481);

(statearr_35595[(12)] = inst_35479__$1);

return statearr_35595;
})();
return cljs.core.async.ioc_alts_BANG_(state_35554__$1,(22),inst_35482);
} else {
if((state_val_35555 === (31))){
var inst_35515 = (state_35554[(2)]);
var state_35554__$1 = state_35554;
if(cljs.core.truth_(inst_35515)){
var statearr_35602_37360 = state_35554__$1;
(statearr_35602_37360[(1)] = (32));

} else {
var statearr_35606_37361 = state_35554__$1;
(statearr_35606_37361[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (32))){
var inst_35488 = (state_35554[(14)]);
var state_35554__$1 = state_35554;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35554__$1,(35),out,inst_35488);
} else {
if((state_val_35555 === (33))){
var inst_35479 = (state_35554[(12)]);
var inst_35450 = inst_35479;
var state_35554__$1 = (function (){var statearr_35616 = state_35554;
(statearr_35616[(7)] = inst_35450);

return statearr_35616;
})();
var statearr_35619_37363 = state_35554__$1;
(statearr_35619_37363[(2)] = null);

(statearr_35619_37363[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (13))){
var inst_35450 = (state_35554[(7)]);
var inst_35463 = inst_35450.cljs$lang$protocol_mask$partition0$;
var inst_35464 = (inst_35463 & (64));
var inst_35465 = inst_35450.cljs$core$ISeq$;
var inst_35466 = (cljs.core.PROTOCOL_SENTINEL === inst_35465);
var inst_35467 = ((inst_35464) || (inst_35466));
var state_35554__$1 = state_35554;
if(cljs.core.truth_(inst_35467)){
var statearr_35626_37367 = state_35554__$1;
(statearr_35626_37367[(1)] = (16));

} else {
var statearr_35627_37368 = state_35554__$1;
(statearr_35627_37368[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (22))){
var inst_35488 = (state_35554[(14)]);
var inst_35489 = (state_35554[(11)]);
var inst_35487 = (state_35554[(2)]);
var inst_35488__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35487,(0),null);
var inst_35489__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35487,(1),null);
var inst_35490 = (inst_35488__$1 == null);
var inst_35492 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35489__$1,change);
var inst_35493 = ((inst_35490) || (inst_35492));
var state_35554__$1 = (function (){var statearr_35636 = state_35554;
(statearr_35636[(14)] = inst_35488__$1);

(statearr_35636[(11)] = inst_35489__$1);

return statearr_35636;
})();
if(cljs.core.truth_(inst_35493)){
var statearr_35639_37376 = state_35554__$1;
(statearr_35639_37376[(1)] = (23));

} else {
var statearr_35641_37378 = state_35554__$1;
(statearr_35641_37378[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (36))){
var inst_35479 = (state_35554[(12)]);
var inst_35450 = inst_35479;
var state_35554__$1 = (function (){var statearr_35647 = state_35554;
(statearr_35647[(7)] = inst_35450);

return statearr_35647;
})();
var statearr_35648_37380 = state_35554__$1;
(statearr_35648_37380[(2)] = null);

(statearr_35648_37380[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (29))){
var inst_35505 = (state_35554[(10)]);
var state_35554__$1 = state_35554;
var statearr_35654_37383 = state_35554__$1;
(statearr_35654_37383[(2)] = inst_35505);

(statearr_35654_37383[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (6))){
var state_35554__$1 = state_35554;
var statearr_35659_37387 = state_35554__$1;
(statearr_35659_37387[(2)] = false);

(statearr_35659_37387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (28))){
var inst_35501 = (state_35554[(2)]);
var inst_35502 = calc_state();
var inst_35450 = inst_35502;
var state_35554__$1 = (function (){var statearr_35660 = state_35554;
(statearr_35660[(7)] = inst_35450);

(statearr_35660[(15)] = inst_35501);

return statearr_35660;
})();
var statearr_35663_37395 = state_35554__$1;
(statearr_35663_37395[(2)] = null);

(statearr_35663_37395[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (25))){
var inst_35529 = (state_35554[(2)]);
var state_35554__$1 = state_35554;
var statearr_35664_37397 = state_35554__$1;
(statearr_35664_37397[(2)] = inst_35529);

(statearr_35664_37397[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (34))){
var inst_35527 = (state_35554[(2)]);
var state_35554__$1 = state_35554;
var statearr_35670_37398 = state_35554__$1;
(statearr_35670_37398[(2)] = inst_35527);

(statearr_35670_37398[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (17))){
var state_35554__$1 = state_35554;
var statearr_35674_37401 = state_35554__$1;
(statearr_35674_37401[(2)] = false);

(statearr_35674_37401[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (3))){
var state_35554__$1 = state_35554;
var statearr_35680_37402 = state_35554__$1;
(statearr_35680_37402[(2)] = false);

(statearr_35680_37402[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (12))){
var inst_35531 = (state_35554[(2)]);
var state_35554__$1 = state_35554;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35554__$1,inst_35531);
} else {
if((state_val_35555 === (2))){
var inst_35419 = (state_35554[(8)]);
var inst_35428 = inst_35419.cljs$lang$protocol_mask$partition0$;
var inst_35429 = (inst_35428 & (64));
var inst_35430 = inst_35419.cljs$core$ISeq$;
var inst_35431 = (cljs.core.PROTOCOL_SENTINEL === inst_35430);
var inst_35432 = ((inst_35429) || (inst_35431));
var state_35554__$1 = state_35554;
if(cljs.core.truth_(inst_35432)){
var statearr_35691_37410 = state_35554__$1;
(statearr_35691_37410[(1)] = (5));

} else {
var statearr_35695_37411 = state_35554__$1;
(statearr_35695_37411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (23))){
var inst_35488 = (state_35554[(14)]);
var inst_35496 = (inst_35488 == null);
var state_35554__$1 = state_35554;
if(cljs.core.truth_(inst_35496)){
var statearr_35699_37414 = state_35554__$1;
(statearr_35699_37414[(1)] = (26));

} else {
var statearr_35701_37417 = state_35554__$1;
(statearr_35701_37417[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (35))){
var inst_35518 = (state_35554[(2)]);
var state_35554__$1 = state_35554;
if(cljs.core.truth_(inst_35518)){
var statearr_35706_37418 = state_35554__$1;
(statearr_35706_37418[(1)] = (36));

} else {
var statearr_35710_37419 = state_35554__$1;
(statearr_35710_37419[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (19))){
var inst_35450 = (state_35554[(7)]);
var inst_35476 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35450);
var state_35554__$1 = state_35554;
var statearr_35714_37423 = state_35554__$1;
(statearr_35714_37423[(2)] = inst_35476);

(statearr_35714_37423[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (11))){
var inst_35450 = (state_35554[(7)]);
var inst_35457 = (inst_35450 == null);
var inst_35458 = cljs.core.not(inst_35457);
var state_35554__$1 = state_35554;
if(inst_35458){
var statearr_35715_37428 = state_35554__$1;
(statearr_35715_37428[(1)] = (13));

} else {
var statearr_35716_37432 = state_35554__$1;
(statearr_35716_37432[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (9))){
var inst_35419 = (state_35554[(8)]);
var state_35554__$1 = state_35554;
var statearr_35717_37436 = state_35554__$1;
(statearr_35717_37436[(2)] = inst_35419);

(statearr_35717_37436[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (5))){
var state_35554__$1 = state_35554;
var statearr_35718_37437 = state_35554__$1;
(statearr_35718_37437[(2)] = true);

(statearr_35718_37437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (14))){
var state_35554__$1 = state_35554;
var statearr_35719_37438 = state_35554__$1;
(statearr_35719_37438[(2)] = false);

(statearr_35719_37438[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (26))){
var inst_35489 = (state_35554[(11)]);
var inst_35498 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35489);
var state_35554__$1 = state_35554;
var statearr_35720_37441 = state_35554__$1;
(statearr_35720_37441[(2)] = inst_35498);

(statearr_35720_37441[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (16))){
var state_35554__$1 = state_35554;
var statearr_35723_37444 = state_35554__$1;
(statearr_35723_37444[(2)] = true);

(statearr_35723_37444[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (38))){
var inst_35523 = (state_35554[(2)]);
var state_35554__$1 = state_35554;
var statearr_35724_37445 = state_35554__$1;
(statearr_35724_37445[(2)] = inst_35523);

(statearr_35724_37445[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (30))){
var inst_35480 = (state_35554[(9)]);
var inst_35481 = (state_35554[(13)]);
var inst_35489 = (state_35554[(11)]);
var inst_35508 = cljs.core.empty_QMARK_(inst_35480);
var inst_35511 = (inst_35481.cljs$core$IFn$_invoke$arity$1 ? inst_35481.cljs$core$IFn$_invoke$arity$1(inst_35489) : inst_35481.call(null,inst_35489));
var inst_35512 = cljs.core.not(inst_35511);
var inst_35513 = ((inst_35508) && (inst_35512));
var state_35554__$1 = state_35554;
var statearr_35725_37448 = state_35554__$1;
(statearr_35725_37448[(2)] = inst_35513);

(statearr_35725_37448[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (10))){
var inst_35419 = (state_35554[(8)]);
var inst_35445 = (state_35554[(2)]);
var inst_35446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35445,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35445,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35449 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35445,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35450 = inst_35419;
var state_35554__$1 = (function (){var statearr_35728 = state_35554;
(statearr_35728[(7)] = inst_35450);

(statearr_35728[(16)] = inst_35446);

(statearr_35728[(17)] = inst_35447);

(statearr_35728[(18)] = inst_35449);

return statearr_35728;
})();
var statearr_35729_37455 = state_35554__$1;
(statearr_35729_37455[(2)] = null);

(statearr_35729_37455[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (18))){
var inst_35471 = (state_35554[(2)]);
var state_35554__$1 = state_35554;
var statearr_35730_37457 = state_35554__$1;
(statearr_35730_37457[(2)] = inst_35471);

(statearr_35730_37457[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (37))){
var state_35554__$1 = state_35554;
var statearr_35731_37458 = state_35554__$1;
(statearr_35731_37458[(2)] = null);

(statearr_35731_37458[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (8))){
var inst_35419 = (state_35554[(8)]);
var inst_35442 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35419);
var state_35554__$1 = state_35554;
var statearr_35734_37465 = state_35554__$1;
(statearr_35734_37465[(2)] = inst_35442);

(statearr_35734_37465[(1)] = (10));


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
var statearr_35737 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35737[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35737[(1)] = (1));

return statearr_35737;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35554){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35554);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35740){if((e35740 instanceof Object)){
var ex__34210__auto__ = e35740;
var statearr_35742_37470 = state_35554;
(statearr_35742_37470[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35740;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37471 = state_35554;
state_35554 = G__37471;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35554){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35744 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35744[(6)] = c__34274__auto___37335);

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
var G__35760 = arguments.length;
switch (G__35760) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35773_SHARP_){
if(cljs.core.truth_((p1__35773_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35773_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35773_SHARP_.call(null,topic)))){
return p1__35773_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35773_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35793 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35793 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35794){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35794 = meta35794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35795,meta35794__$1){
var self__ = this;
var _35795__$1 = this;
return (new cljs.core.async.t_cljs$core$async35793(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35794__$1));
}));

(cljs.core.async.t_cljs$core$async35793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35795){
var self__ = this;
var _35795__$1 = this;
return self__.meta35794;
}));

(cljs.core.async.t_cljs$core$async35793.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35793.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35793.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35793.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35793.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35793.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35793.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35793.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35794","meta35794",-1921333970,null)], null);
}));

(cljs.core.async.t_cljs$core$async35793.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35793.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35793");

(cljs.core.async.t_cljs$core$async35793.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35793");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35793.
 */
cljs.core.async.__GT_t_cljs$core$async35793 = (function cljs$core$async$__GT_t_cljs$core$async35793(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35794){
return (new cljs.core.async.t_cljs$core$async35793(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35794));
});

}

return (new cljs.core.async.t_cljs$core$async35793(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37521 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35900){
var state_val_35901 = (state_35900[(1)]);
if((state_val_35901 === (7))){
var inst_35894 = (state_35900[(2)]);
var state_35900__$1 = state_35900;
var statearr_35906_37524 = state_35900__$1;
(statearr_35906_37524[(2)] = inst_35894);

(statearr_35906_37524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35901 === (20))){
var state_35900__$1 = state_35900;
var statearr_35908_37525 = state_35900__$1;
(statearr_35908_37525[(2)] = null);

(statearr_35908_37525[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35901 === (1))){
var state_35900__$1 = state_35900;
var statearr_35909_37528 = state_35900__$1;
(statearr_35909_37528[(2)] = null);

(statearr_35909_37528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35901 === (24))){
var inst_35872 = (state_35900[(7)]);
var inst_35884 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35872);
var state_35900__$1 = state_35900;
var statearr_35912_37534 = state_35900__$1;
(statearr_35912_37534[(2)] = inst_35884);

(statearr_35912_37534[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35901 === (4))){
var inst_35817 = (state_35900[(8)]);
var inst_35817__$1 = (state_35900[(2)]);
var inst_35818 = (inst_35817__$1 == null);
var state_35900__$1 = (function (){var statearr_35915 = state_35900;
(statearr_35915[(8)] = inst_35817__$1);

return statearr_35915;
})();
if(cljs.core.truth_(inst_35818)){
var statearr_35916_37541 = state_35900__$1;
(statearr_35916_37541[(1)] = (5));

} else {
var statearr_35918_37542 = state_35900__$1;
(statearr_35918_37542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35901 === (15))){
var inst_35863 = (state_35900[(2)]);
var state_35900__$1 = state_35900;
var statearr_35919_37544 = state_35900__$1;
(statearr_35919_37544[(2)] = inst_35863);

(statearr_35919_37544[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35901 === (21))){
var inst_35890 = (state_35900[(2)]);
var state_35900__$1 = (function (){var statearr_35923 = state_35900;
(statearr_35923[(9)] = inst_35890);

return statearr_35923;
})();
var statearr_35925_37545 = state_35900__$1;
(statearr_35925_37545[(2)] = null);

(statearr_35925_37545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35901 === (13))){
var inst_35844 = (state_35900[(10)]);
var inst_35846 = cljs.core.chunked_seq_QMARK_(inst_35844);
var state_35900__$1 = state_35900;
if(inst_35846){
var statearr_35926_37551 = state_35900__$1;
(statearr_35926_37551[(1)] = (16));

} else {
var statearr_35927_37552 = state_35900__$1;
(statearr_35927_37552[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35901 === (22))){
var inst_35879 = (state_35900[(2)]);
var state_35900__$1 = state_35900;
if(cljs.core.truth_(inst_35879)){
var statearr_35930_37558 = state_35900__$1;
(statearr_35930_37558[(1)] = (23));

} else {
var statearr_35932_37560 = state_35900__$1;
(statearr_35932_37560[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35901 === (6))){
var inst_35817 = (state_35900[(8)]);
var inst_35872 = (state_35900[(7)]);
var inst_35874 = (state_35900[(11)]);
var inst_35872__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35817) : topic_fn.call(null,inst_35817));
var inst_35873 = cljs.core.deref(mults);
var inst_35874__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35873,inst_35872__$1);
var state_35900__$1 = (function (){var statearr_35937 = state_35900;
(statearr_35937[(7)] = inst_35872__$1);

(statearr_35937[(11)] = inst_35874__$1);

return statearr_35937;
})();
if(cljs.core.truth_(inst_35874__$1)){
var statearr_35938_37564 = state_35900__$1;
(statearr_35938_37564[(1)] = (19));

} else {
var statearr_35939_37565 = state_35900__$1;
(statearr_35939_37565[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35901 === (25))){
var inst_35886 = (state_35900[(2)]);
var state_35900__$1 = state_35900;
var statearr_35940_37568 = state_35900__$1;
(statearr_35940_37568[(2)] = inst_35886);

(statearr_35940_37568[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35901 === (17))){
var inst_35844 = (state_35900[(10)]);
var inst_35853 = cljs.core.first(inst_35844);
var inst_35855 = cljs.core.async.muxch_STAR_(inst_35853);
var inst_35856 = cljs.core.async.close_BANG_(inst_35855);
var inst_35857 = cljs.core.next(inst_35844);
var inst_35829 = inst_35857;
var inst_35830 = null;
var inst_35831 = (0);
var inst_35832 = (0);
var state_35900__$1 = (function (){var statearr_35944 = state_35900;
(statearr_35944[(12)] = inst_35856);

(statearr_35944[(13)] = inst_35829);

(statearr_35944[(14)] = inst_35831);

(statearr_35944[(15)] = inst_35830);

(statearr_35944[(16)] = inst_35832);

return statearr_35944;
})();
var statearr_35945_37575 = state_35900__$1;
(statearr_35945_37575[(2)] = null);

(statearr_35945_37575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35901 === (3))){
var inst_35896 = (state_35900[(2)]);
var state_35900__$1 = state_35900;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35900__$1,inst_35896);
} else {
if((state_val_35901 === (12))){
var inst_35865 = (state_35900[(2)]);
var state_35900__$1 = state_35900;
var statearr_35948_37581 = state_35900__$1;
(statearr_35948_37581[(2)] = inst_35865);

(statearr_35948_37581[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35901 === (2))){
var state_35900__$1 = state_35900;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35900__$1,(4),ch);
} else {
if((state_val_35901 === (23))){
var state_35900__$1 = state_35900;
var statearr_35952_37584 = state_35900__$1;
(statearr_35952_37584[(2)] = null);

(statearr_35952_37584[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35901 === (19))){
var inst_35817 = (state_35900[(8)]);
var inst_35874 = (state_35900[(11)]);
var inst_35877 = cljs.core.async.muxch_STAR_(inst_35874);
var state_35900__$1 = state_35900;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35900__$1,(22),inst_35877,inst_35817);
} else {
if((state_val_35901 === (11))){
var inst_35844 = (state_35900[(10)]);
var inst_35829 = (state_35900[(13)]);
var inst_35844__$1 = cljs.core.seq(inst_35829);
var state_35900__$1 = (function (){var statearr_35955 = state_35900;
(statearr_35955[(10)] = inst_35844__$1);

return statearr_35955;
})();
if(inst_35844__$1){
var statearr_35958_37589 = state_35900__$1;
(statearr_35958_37589[(1)] = (13));

} else {
var statearr_35959_37592 = state_35900__$1;
(statearr_35959_37592[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35901 === (9))){
var inst_35867 = (state_35900[(2)]);
var state_35900__$1 = state_35900;
var statearr_35961_37595 = state_35900__$1;
(statearr_35961_37595[(2)] = inst_35867);

(statearr_35961_37595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35901 === (5))){
var inst_35826 = cljs.core.deref(mults);
var inst_35827 = cljs.core.vals(inst_35826);
var inst_35828 = cljs.core.seq(inst_35827);
var inst_35829 = inst_35828;
var inst_35830 = null;
var inst_35831 = (0);
var inst_35832 = (0);
var state_35900__$1 = (function (){var statearr_35966 = state_35900;
(statearr_35966[(13)] = inst_35829);

(statearr_35966[(14)] = inst_35831);

(statearr_35966[(15)] = inst_35830);

(statearr_35966[(16)] = inst_35832);

return statearr_35966;
})();
var statearr_35967_37597 = state_35900__$1;
(statearr_35967_37597[(2)] = null);

(statearr_35967_37597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35901 === (14))){
var state_35900__$1 = state_35900;
var statearr_35971_37603 = state_35900__$1;
(statearr_35971_37603[(2)] = null);

(statearr_35971_37603[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35901 === (16))){
var inst_35844 = (state_35900[(10)]);
var inst_35848 = cljs.core.chunk_first(inst_35844);
var inst_35849 = cljs.core.chunk_rest(inst_35844);
var inst_35850 = cljs.core.count(inst_35848);
var inst_35829 = inst_35849;
var inst_35830 = inst_35848;
var inst_35831 = inst_35850;
var inst_35832 = (0);
var state_35900__$1 = (function (){var statearr_35975 = state_35900;
(statearr_35975[(13)] = inst_35829);

(statearr_35975[(14)] = inst_35831);

(statearr_35975[(15)] = inst_35830);

(statearr_35975[(16)] = inst_35832);

return statearr_35975;
})();
var statearr_35977_37607 = state_35900__$1;
(statearr_35977_37607[(2)] = null);

(statearr_35977_37607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35901 === (10))){
var inst_35829 = (state_35900[(13)]);
var inst_35831 = (state_35900[(14)]);
var inst_35830 = (state_35900[(15)]);
var inst_35832 = (state_35900[(16)]);
var inst_35838 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35830,inst_35832);
var inst_35839 = cljs.core.async.muxch_STAR_(inst_35838);
var inst_35840 = cljs.core.async.close_BANG_(inst_35839);
var inst_35841 = (inst_35832 + (1));
var tmp35968 = inst_35829;
var tmp35969 = inst_35831;
var tmp35970 = inst_35830;
var inst_35829__$1 = tmp35968;
var inst_35830__$1 = tmp35970;
var inst_35831__$1 = tmp35969;
var inst_35832__$1 = inst_35841;
var state_35900__$1 = (function (){var statearr_35981 = state_35900;
(statearr_35981[(13)] = inst_35829__$1);

(statearr_35981[(14)] = inst_35831__$1);

(statearr_35981[(15)] = inst_35830__$1);

(statearr_35981[(16)] = inst_35832__$1);

(statearr_35981[(17)] = inst_35840);

return statearr_35981;
})();
var statearr_35982_37616 = state_35900__$1;
(statearr_35982_37616[(2)] = null);

(statearr_35982_37616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35901 === (18))){
var inst_35860 = (state_35900[(2)]);
var state_35900__$1 = state_35900;
var statearr_35985_37617 = state_35900__$1;
(statearr_35985_37617[(2)] = inst_35860);

(statearr_35985_37617[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35901 === (8))){
var inst_35831 = (state_35900[(14)]);
var inst_35832 = (state_35900[(16)]);
var inst_35835 = (inst_35832 < inst_35831);
var inst_35836 = inst_35835;
var state_35900__$1 = state_35900;
if(cljs.core.truth_(inst_35836)){
var statearr_35987_37627 = state_35900__$1;
(statearr_35987_37627[(1)] = (10));

} else {
var statearr_35988_37629 = state_35900__$1;
(statearr_35988_37629[(1)] = (11));

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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35900){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35900);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35994){if((e35994 instanceof Object)){
var ex__34210__auto__ = e35994;
var statearr_35996_37633 = state_35900;
(statearr_35996_37633[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35994;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37639 = state_35900;
state_35900 = G__37639;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35900){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36000 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36000[(6)] = c__34274__auto___37521);

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
var G__36005 = arguments.length;
switch (G__36005) {
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
var G__36020 = arguments.length;
switch (G__36020) {
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
var c__34274__auto___37671 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36082){
var state_val_36083 = (state_36082[(1)]);
if((state_val_36083 === (7))){
var state_36082__$1 = state_36082;
var statearr_36086_37680 = state_36082__$1;
(statearr_36086_37680[(2)] = null);

(statearr_36086_37680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36083 === (1))){
var state_36082__$1 = state_36082;
var statearr_36087_37682 = state_36082__$1;
(statearr_36087_37682[(2)] = null);

(statearr_36087_37682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36083 === (4))){
var inst_36034 = (state_36082[(7)]);
var inst_36036 = (inst_36034 < cnt);
var state_36082__$1 = state_36082;
if(cljs.core.truth_(inst_36036)){
var statearr_36091_37685 = state_36082__$1;
(statearr_36091_37685[(1)] = (6));

} else {
var statearr_36093_37686 = state_36082__$1;
(statearr_36093_37686[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36083 === (15))){
var inst_36074 = (state_36082[(2)]);
var state_36082__$1 = state_36082;
var statearr_36094_37691 = state_36082__$1;
(statearr_36094_37691[(2)] = inst_36074);

(statearr_36094_37691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36083 === (13))){
var inst_36067 = cljs.core.async.close_BANG_(out);
var state_36082__$1 = state_36082;
var statearr_36095_37696 = state_36082__$1;
(statearr_36095_37696[(2)] = inst_36067);

(statearr_36095_37696[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36083 === (6))){
var state_36082__$1 = state_36082;
var statearr_36096_37697 = state_36082__$1;
(statearr_36096_37697[(2)] = null);

(statearr_36096_37697[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36083 === (3))){
var inst_36077 = (state_36082[(2)]);
var state_36082__$1 = state_36082;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36082__$1,inst_36077);
} else {
if((state_val_36083 === (12))){
var inst_36062 = (state_36082[(8)]);
var inst_36062__$1 = (state_36082[(2)]);
var inst_36064 = cljs.core.some(cljs.core.nil_QMARK_,inst_36062__$1);
var state_36082__$1 = (function (){var statearr_36101 = state_36082;
(statearr_36101[(8)] = inst_36062__$1);

return statearr_36101;
})();
if(cljs.core.truth_(inst_36064)){
var statearr_36102_37704 = state_36082__$1;
(statearr_36102_37704[(1)] = (13));

} else {
var statearr_36103_37709 = state_36082__$1;
(statearr_36103_37709[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36083 === (2))){
var inst_36030 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36034 = (0);
var state_36082__$1 = (function (){var statearr_36104 = state_36082;
(statearr_36104[(7)] = inst_36034);

(statearr_36104[(9)] = inst_36030);

return statearr_36104;
})();
var statearr_36105_37712 = state_36082__$1;
(statearr_36105_37712[(2)] = null);

(statearr_36105_37712[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36083 === (11))){
var inst_36034 = (state_36082[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36082,(10),Object,null,(9));
var inst_36047 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36034) : chs__$1.call(null,inst_36034));
var inst_36048 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36034) : done.call(null,inst_36034));
var inst_36049 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36047,inst_36048);
var state_36082__$1 = state_36082;
var statearr_36106_37718 = state_36082__$1;
(statearr_36106_37718[(2)] = inst_36049);


cljs.core.async.impl.ioc_helpers.process_exception(state_36082__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36083 === (9))){
var inst_36034 = (state_36082[(7)]);
var inst_36051 = (state_36082[(2)]);
var inst_36053 = (inst_36034 + (1));
var inst_36034__$1 = inst_36053;
var state_36082__$1 = (function (){var statearr_36107 = state_36082;
(statearr_36107[(7)] = inst_36034__$1);

(statearr_36107[(10)] = inst_36051);

return statearr_36107;
})();
var statearr_36108_37724 = state_36082__$1;
(statearr_36108_37724[(2)] = null);

(statearr_36108_37724[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36083 === (5))){
var inst_36059 = (state_36082[(2)]);
var state_36082__$1 = (function (){var statearr_36109 = state_36082;
(statearr_36109[(11)] = inst_36059);

return statearr_36109;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36082__$1,(12),dchan);
} else {
if((state_val_36083 === (14))){
var inst_36062 = (state_36082[(8)]);
var inst_36069 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36062);
var state_36082__$1 = state_36082;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36082__$1,(16),out,inst_36069);
} else {
if((state_val_36083 === (16))){
var inst_36071 = (state_36082[(2)]);
var state_36082__$1 = (function (){var statearr_36110 = state_36082;
(statearr_36110[(12)] = inst_36071);

return statearr_36110;
})();
var statearr_36111_37735 = state_36082__$1;
(statearr_36111_37735[(2)] = null);

(statearr_36111_37735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36083 === (10))){
var inst_36041 = (state_36082[(2)]);
var inst_36043 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36082__$1 = (function (){var statearr_36112 = state_36082;
(statearr_36112[(13)] = inst_36041);

return statearr_36112;
})();
var statearr_36113_37739 = state_36082__$1;
(statearr_36113_37739[(2)] = inst_36043);


cljs.core.async.impl.ioc_helpers.process_exception(state_36082__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36083 === (8))){
var inst_36057 = (state_36082[(2)]);
var state_36082__$1 = state_36082;
var statearr_36115_37741 = state_36082__$1;
(statearr_36115_37741[(2)] = inst_36057);

(statearr_36115_37741[(1)] = (5));


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
var statearr_36116 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36116[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36116[(1)] = (1));

return statearr_36116;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36082){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36082);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36118){if((e36118 instanceof Object)){
var ex__34210__auto__ = e36118;
var statearr_36119_37750 = state_36082;
(statearr_36119_37750[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36118;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37752 = state_36082;
state_36082 = G__37752;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36082){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36127 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36127[(6)] = c__34274__auto___37671);

return statearr_36127;
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
var c__34274__auto___37762 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36176){
var state_val_36177 = (state_36176[(1)]);
if((state_val_36177 === (7))){
var inst_36155 = (state_36176[(7)]);
var inst_36156 = (state_36176[(8)]);
var inst_36155__$1 = (state_36176[(2)]);
var inst_36156__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36155__$1,(0),null);
var inst_36157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36155__$1,(1),null);
var inst_36158 = (inst_36156__$1 == null);
var state_36176__$1 = (function (){var statearr_36182 = state_36176;
(statearr_36182[(7)] = inst_36155__$1);

(statearr_36182[(8)] = inst_36156__$1);

(statearr_36182[(9)] = inst_36157);

return statearr_36182;
})();
if(cljs.core.truth_(inst_36158)){
var statearr_36183_37766 = state_36176__$1;
(statearr_36183_37766[(1)] = (8));

} else {
var statearr_36185_37767 = state_36176__$1;
(statearr_36185_37767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36177 === (1))){
var inst_36145 = cljs.core.vec(chs);
var inst_36146 = inst_36145;
var state_36176__$1 = (function (){var statearr_36188 = state_36176;
(statearr_36188[(10)] = inst_36146);

return statearr_36188;
})();
var statearr_36189_37768 = state_36176__$1;
(statearr_36189_37768[(2)] = null);

(statearr_36189_37768[(1)] = (2));


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
var statearr_36192_37771 = state_36176__$1;
(statearr_36192_37771[(2)] = inst_36172);

(statearr_36192_37771[(1)] = (3));


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
var statearr_36198_37772 = state_36176__$1;
(statearr_36198_37772[(1)] = (4));

} else {
var statearr_36200_37775 = state_36176__$1;
(statearr_36200_37775[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36177 === (11))){
var inst_36146 = (state_36176[(10)]);
var inst_36165 = (state_36176[(2)]);
var tmp36194 = inst_36146;
var inst_36146__$1 = tmp36194;
var state_36176__$1 = (function (){var statearr_36201 = state_36176;
(statearr_36201[(11)] = inst_36165);

(statearr_36201[(10)] = inst_36146__$1);

return statearr_36201;
})();
var statearr_36202_37776 = state_36176__$1;
(statearr_36202_37776[(2)] = null);

(statearr_36202_37776[(1)] = (2));


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
var statearr_36205_37781 = state_36176__$1;
(statearr_36205_37781[(2)] = inst_36170);

(statearr_36205_37781[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36177 === (10))){
var inst_36168 = (state_36176[(2)]);
var state_36176__$1 = state_36176;
var statearr_36206_37782 = state_36176__$1;
(statearr_36206_37782[(2)] = inst_36168);

(statearr_36206_37782[(1)] = (6));


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
return (function (p1__36129_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36129_SHARP_);
});
})();
var inst_36161 = cljs.core.filterv(inst_36160,inst_36146);
var inst_36146__$1 = inst_36161;
var state_36176__$1 = (function (){var statearr_36207 = state_36176;
(statearr_36207[(10)] = inst_36146__$1);

return statearr_36207;
})();
var statearr_36208_37786 = state_36176__$1;
(statearr_36208_37786[(2)] = null);

(statearr_36208_37786[(1)] = (2));


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
var statearr_36212 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36212[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36212[(1)] = (1));

return statearr_36212;
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
}catch (e36215){if((e36215 instanceof Object)){
var ex__34210__auto__ = e36215;
var statearr_36217_37788 = state_36176;
(statearr_36217_37788[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36215;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37790 = state_36176;
state_36176 = G__37790;
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
var state__34276__auto__ = (function (){var statearr_36222 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36222[(6)] = c__34274__auto___37762);

return statearr_36222;
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
var G__36235 = arguments.length;
switch (G__36235) {
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
var c__34274__auto___37796 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36265){
var state_val_36266 = (state_36265[(1)]);
if((state_val_36266 === (7))){
var inst_36244 = (state_36265[(7)]);
var inst_36244__$1 = (state_36265[(2)]);
var inst_36246 = (inst_36244__$1 == null);
var inst_36247 = cljs.core.not(inst_36246);
var state_36265__$1 = (function (){var statearr_36268 = state_36265;
(statearr_36268[(7)] = inst_36244__$1);

return statearr_36268;
})();
if(inst_36247){
var statearr_36269_37803 = state_36265__$1;
(statearr_36269_37803[(1)] = (8));

} else {
var statearr_36270_37804 = state_36265__$1;
(statearr_36270_37804[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36266 === (1))){
var inst_36239 = (0);
var state_36265__$1 = (function (){var statearr_36271 = state_36265;
(statearr_36271[(8)] = inst_36239);

return statearr_36271;
})();
var statearr_36272_37808 = state_36265__$1;
(statearr_36272_37808[(2)] = null);

(statearr_36272_37808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36266 === (4))){
var state_36265__$1 = state_36265;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36265__$1,(7),ch);
} else {
if((state_val_36266 === (6))){
var inst_36259 = (state_36265[(2)]);
var state_36265__$1 = state_36265;
var statearr_36275_37810 = state_36265__$1;
(statearr_36275_37810[(2)] = inst_36259);

(statearr_36275_37810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36266 === (3))){
var inst_36261 = (state_36265[(2)]);
var inst_36262 = cljs.core.async.close_BANG_(out);
var state_36265__$1 = (function (){var statearr_36276 = state_36265;
(statearr_36276[(9)] = inst_36261);

return statearr_36276;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36265__$1,inst_36262);
} else {
if((state_val_36266 === (2))){
var inst_36239 = (state_36265[(8)]);
var inst_36241 = (inst_36239 < n);
var state_36265__$1 = state_36265;
if(cljs.core.truth_(inst_36241)){
var statearr_36278_37815 = state_36265__$1;
(statearr_36278_37815[(1)] = (4));

} else {
var statearr_36280_37816 = state_36265__$1;
(statearr_36280_37816[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36266 === (11))){
var inst_36239 = (state_36265[(8)]);
var inst_36250 = (state_36265[(2)]);
var inst_36252 = (inst_36239 + (1));
var inst_36239__$1 = inst_36252;
var state_36265__$1 = (function (){var statearr_36283 = state_36265;
(statearr_36283[(10)] = inst_36250);

(statearr_36283[(8)] = inst_36239__$1);

return statearr_36283;
})();
var statearr_36284_37822 = state_36265__$1;
(statearr_36284_37822[(2)] = null);

(statearr_36284_37822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36266 === (9))){
var state_36265__$1 = state_36265;
var statearr_36285_37826 = state_36265__$1;
(statearr_36285_37826[(2)] = null);

(statearr_36285_37826[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36266 === (5))){
var state_36265__$1 = state_36265;
var statearr_36287_37828 = state_36265__$1;
(statearr_36287_37828[(2)] = null);

(statearr_36287_37828[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36266 === (10))){
var inst_36256 = (state_36265[(2)]);
var state_36265__$1 = state_36265;
var statearr_36295_37830 = state_36265__$1;
(statearr_36295_37830[(2)] = inst_36256);

(statearr_36295_37830[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36266 === (8))){
var inst_36244 = (state_36265[(7)]);
var state_36265__$1 = state_36265;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36265__$1,(11),out,inst_36244);
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
var statearr_36296 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36296[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36296[(1)] = (1));

return statearr_36296;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36265){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36265);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36298){if((e36298 instanceof Object)){
var ex__34210__auto__ = e36298;
var statearr_36299_37839 = state_36265;
(statearr_36299_37839[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36298;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37841 = state_36265;
state_36265 = G__37841;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36302 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36302[(6)] = c__34274__auto___37796);

return statearr_36302;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36306 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36306 = (function (f,ch,meta36307){
this.f = f;
this.ch = ch;
this.meta36307 = meta36307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36308,meta36307__$1){
var self__ = this;
var _36308__$1 = this;
return (new cljs.core.async.t_cljs$core$async36306(self__.f,self__.ch,meta36307__$1));
}));

(cljs.core.async.t_cljs$core$async36306.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36308){
var self__ = this;
var _36308__$1 = this;
return self__.meta36307;
}));

(cljs.core.async.t_cljs$core$async36306.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36306.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36306.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36306.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36306.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36313 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36313 = (function (f,ch,meta36307,_,fn1,meta36314){
this.f = f;
this.ch = ch;
this.meta36307 = meta36307;
this._ = _;
this.fn1 = fn1;
this.meta36314 = meta36314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36315,meta36314__$1){
var self__ = this;
var _36315__$1 = this;
return (new cljs.core.async.t_cljs$core$async36313(self__.f,self__.ch,self__.meta36307,self__._,self__.fn1,meta36314__$1));
}));

(cljs.core.async.t_cljs$core$async36313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36315){
var self__ = this;
var _36315__$1 = this;
return self__.meta36314;
}));

(cljs.core.async.t_cljs$core$async36313.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36313.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36313.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36313.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36304_SHARP_){
var G__36321 = (((p1__36304_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36304_SHARP_) : self__.f.call(null,p1__36304_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36321) : f1.call(null,G__36321));
});
}));

(cljs.core.async.t_cljs$core$async36313.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36307","meta36307",348116198,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36306","cljs.core.async/t_cljs$core$async36306",1077785870,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36314","meta36314",-1949065285,null)], null);
}));

(cljs.core.async.t_cljs$core$async36313.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36313.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36313");

(cljs.core.async.t_cljs$core$async36313.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36313");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36313.
 */
cljs.core.async.__GT_t_cljs$core$async36313 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36313(f__$1,ch__$1,meta36307__$1,___$2,fn1__$1,meta36314){
return (new cljs.core.async.t_cljs$core$async36313(f__$1,ch__$1,meta36307__$1,___$2,fn1__$1,meta36314));
});

}

return (new cljs.core.async.t_cljs$core$async36313(self__.f,self__.ch,self__.meta36307,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36328 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36328) : self__.f.call(null,G__36328));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36306.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36306.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36306.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36307","meta36307",348116198,null)], null);
}));

(cljs.core.async.t_cljs$core$async36306.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36306.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36306");

(cljs.core.async.t_cljs$core$async36306.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36306");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36306.
 */
cljs.core.async.__GT_t_cljs$core$async36306 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36306(f__$1,ch__$1,meta36307){
return (new cljs.core.async.t_cljs$core$async36306(f__$1,ch__$1,meta36307));
});

}

return (new cljs.core.async.t_cljs$core$async36306(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36334 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36334 = (function (f,ch,meta36335){
this.f = f;
this.ch = ch;
this.meta36335 = meta36335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36336,meta36335__$1){
var self__ = this;
var _36336__$1 = this;
return (new cljs.core.async.t_cljs$core$async36334(self__.f,self__.ch,meta36335__$1));
}));

(cljs.core.async.t_cljs$core$async36334.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36336){
var self__ = this;
var _36336__$1 = this;
return self__.meta36335;
}));

(cljs.core.async.t_cljs$core$async36334.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36334.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36334.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36334.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36334.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36334.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36334.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36335","meta36335",622785842,null)], null);
}));

(cljs.core.async.t_cljs$core$async36334.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36334.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36334");

(cljs.core.async.t_cljs$core$async36334.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36334");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36334.
 */
cljs.core.async.__GT_t_cljs$core$async36334 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36334(f__$1,ch__$1,meta36335){
return (new cljs.core.async.t_cljs$core$async36334(f__$1,ch__$1,meta36335));
});

}

return (new cljs.core.async.t_cljs$core$async36334(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36347 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36347 = (function (p,ch,meta36348){
this.p = p;
this.ch = ch;
this.meta36348 = meta36348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36349,meta36348__$1){
var self__ = this;
var _36349__$1 = this;
return (new cljs.core.async.t_cljs$core$async36347(self__.p,self__.ch,meta36348__$1));
}));

(cljs.core.async.t_cljs$core$async36347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36349){
var self__ = this;
var _36349__$1 = this;
return self__.meta36348;
}));

(cljs.core.async.t_cljs$core$async36347.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36347.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36347.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36347.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36347.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36347.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36347.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36347.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36348","meta36348",1966817187,null)], null);
}));

(cljs.core.async.t_cljs$core$async36347.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36347.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36347");

(cljs.core.async.t_cljs$core$async36347.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36347");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36347.
 */
cljs.core.async.__GT_t_cljs$core$async36347 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36347(p__$1,ch__$1,meta36348){
return (new cljs.core.async.t_cljs$core$async36347(p__$1,ch__$1,meta36348));
});

}

return (new cljs.core.async.t_cljs$core$async36347(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34274__auto___37934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36406){
var state_val_36407 = (state_36406[(1)]);
if((state_val_36407 === (7))){
var inst_36401 = (state_36406[(2)]);
var state_36406__$1 = state_36406;
var statearr_36408_37939 = state_36406__$1;
(statearr_36408_37939[(2)] = inst_36401);

(statearr_36408_37939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36407 === (1))){
var state_36406__$1 = state_36406;
var statearr_36409_37944 = state_36406__$1;
(statearr_36409_37944[(2)] = null);

(statearr_36409_37944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36407 === (4))){
var inst_36371 = (state_36406[(7)]);
var inst_36371__$1 = (state_36406[(2)]);
var inst_36372 = (inst_36371__$1 == null);
var state_36406__$1 = (function (){var statearr_36410 = state_36406;
(statearr_36410[(7)] = inst_36371__$1);

return statearr_36410;
})();
if(cljs.core.truth_(inst_36372)){
var statearr_36411_37946 = state_36406__$1;
(statearr_36411_37946[(1)] = (5));

} else {
var statearr_36412_37947 = state_36406__$1;
(statearr_36412_37947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36407 === (6))){
var inst_36371 = (state_36406[(7)]);
var inst_36376 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36371) : p.call(null,inst_36371));
var state_36406__$1 = state_36406;
if(cljs.core.truth_(inst_36376)){
var statearr_36415_37951 = state_36406__$1;
(statearr_36415_37951[(1)] = (8));

} else {
var statearr_36416_37952 = state_36406__$1;
(statearr_36416_37952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36407 === (3))){
var inst_36404 = (state_36406[(2)]);
var state_36406__$1 = state_36406;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36406__$1,inst_36404);
} else {
if((state_val_36407 === (2))){
var state_36406__$1 = state_36406;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36406__$1,(4),ch);
} else {
if((state_val_36407 === (11))){
var inst_36394 = (state_36406[(2)]);
var state_36406__$1 = state_36406;
var statearr_36425_37956 = state_36406__$1;
(statearr_36425_37956[(2)] = inst_36394);

(statearr_36425_37956[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36407 === (9))){
var state_36406__$1 = state_36406;
var statearr_36428_37959 = state_36406__$1;
(statearr_36428_37959[(2)] = null);

(statearr_36428_37959[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36407 === (5))){
var inst_36374 = cljs.core.async.close_BANG_(out);
var state_36406__$1 = state_36406;
var statearr_36429_37962 = state_36406__$1;
(statearr_36429_37962[(2)] = inst_36374);

(statearr_36429_37962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36407 === (10))){
var inst_36397 = (state_36406[(2)]);
var state_36406__$1 = (function (){var statearr_36431 = state_36406;
(statearr_36431[(8)] = inst_36397);

return statearr_36431;
})();
var statearr_36432_37963 = state_36406__$1;
(statearr_36432_37963[(2)] = null);

(statearr_36432_37963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36407 === (8))){
var inst_36371 = (state_36406[(7)]);
var state_36406__$1 = state_36406;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36406__$1,(11),out,inst_36371);
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
var statearr_36437 = [null,null,null,null,null,null,null,null,null];
(statearr_36437[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36437[(1)] = (1));

return statearr_36437;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36406){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36406);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36438){if((e36438 instanceof Object)){
var ex__34210__auto__ = e36438;
var statearr_36439_37969 = state_36406;
(statearr_36439_37969[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36438;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37971 = state_36406;
state_36406 = G__37971;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36406){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36446 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36446[(6)] = c__34274__auto___37934);

return statearr_36446;
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
var G__36448 = arguments.length;
switch (G__36448) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36520){
var state_val_36521 = (state_36520[(1)]);
if((state_val_36521 === (7))){
var inst_36516 = (state_36520[(2)]);
var state_36520__$1 = state_36520;
var statearr_36524_37989 = state_36520__$1;
(statearr_36524_37989[(2)] = inst_36516);

(statearr_36524_37989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (20))){
var inst_36486 = (state_36520[(7)]);
var inst_36497 = (state_36520[(2)]);
var inst_36498 = cljs.core.next(inst_36486);
var inst_36471 = inst_36498;
var inst_36472 = null;
var inst_36473 = (0);
var inst_36474 = (0);
var state_36520__$1 = (function (){var statearr_36525 = state_36520;
(statearr_36525[(8)] = inst_36471);

(statearr_36525[(9)] = inst_36473);

(statearr_36525[(10)] = inst_36472);

(statearr_36525[(11)] = inst_36474);

(statearr_36525[(12)] = inst_36497);

return statearr_36525;
})();
var statearr_36528_37995 = state_36520__$1;
(statearr_36528_37995[(2)] = null);

(statearr_36528_37995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (1))){
var state_36520__$1 = state_36520;
var statearr_36530_37997 = state_36520__$1;
(statearr_36530_37997[(2)] = null);

(statearr_36530_37997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (4))){
var inst_36458 = (state_36520[(13)]);
var inst_36458__$1 = (state_36520[(2)]);
var inst_36460 = (inst_36458__$1 == null);
var state_36520__$1 = (function (){var statearr_36533 = state_36520;
(statearr_36533[(13)] = inst_36458__$1);

return statearr_36533;
})();
if(cljs.core.truth_(inst_36460)){
var statearr_36534_37999 = state_36520__$1;
(statearr_36534_37999[(1)] = (5));

} else {
var statearr_36535_38000 = state_36520__$1;
(statearr_36535_38000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (15))){
var state_36520__$1 = state_36520;
var statearr_36539_38003 = state_36520__$1;
(statearr_36539_38003[(2)] = null);

(statearr_36539_38003[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (21))){
var state_36520__$1 = state_36520;
var statearr_36543_38006 = state_36520__$1;
(statearr_36543_38006[(2)] = null);

(statearr_36543_38006[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (13))){
var inst_36471 = (state_36520[(8)]);
var inst_36473 = (state_36520[(9)]);
var inst_36472 = (state_36520[(10)]);
var inst_36474 = (state_36520[(11)]);
var inst_36481 = (state_36520[(2)]);
var inst_36483 = (inst_36474 + (1));
var tmp36536 = inst_36471;
var tmp36537 = inst_36473;
var tmp36538 = inst_36472;
var inst_36471__$1 = tmp36536;
var inst_36472__$1 = tmp36538;
var inst_36473__$1 = tmp36537;
var inst_36474__$1 = inst_36483;
var state_36520__$1 = (function (){var statearr_36545 = state_36520;
(statearr_36545[(8)] = inst_36471__$1);

(statearr_36545[(14)] = inst_36481);

(statearr_36545[(9)] = inst_36473__$1);

(statearr_36545[(10)] = inst_36472__$1);

(statearr_36545[(11)] = inst_36474__$1);

return statearr_36545;
})();
var statearr_36546_38008 = state_36520__$1;
(statearr_36546_38008[(2)] = null);

(statearr_36546_38008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (22))){
var state_36520__$1 = state_36520;
var statearr_36548_38012 = state_36520__$1;
(statearr_36548_38012[(2)] = null);

(statearr_36548_38012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (6))){
var inst_36458 = (state_36520[(13)]);
var inst_36469 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36458) : f.call(null,inst_36458));
var inst_36470 = cljs.core.seq(inst_36469);
var inst_36471 = inst_36470;
var inst_36472 = null;
var inst_36473 = (0);
var inst_36474 = (0);
var state_36520__$1 = (function (){var statearr_36549 = state_36520;
(statearr_36549[(8)] = inst_36471);

(statearr_36549[(9)] = inst_36473);

(statearr_36549[(10)] = inst_36472);

(statearr_36549[(11)] = inst_36474);

return statearr_36549;
})();
var statearr_36550_38015 = state_36520__$1;
(statearr_36550_38015[(2)] = null);

(statearr_36550_38015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (17))){
var inst_36486 = (state_36520[(7)]);
var inst_36490 = cljs.core.chunk_first(inst_36486);
var inst_36491 = cljs.core.chunk_rest(inst_36486);
var inst_36492 = cljs.core.count(inst_36490);
var inst_36471 = inst_36491;
var inst_36472 = inst_36490;
var inst_36473 = inst_36492;
var inst_36474 = (0);
var state_36520__$1 = (function (){var statearr_36552 = state_36520;
(statearr_36552[(8)] = inst_36471);

(statearr_36552[(9)] = inst_36473);

(statearr_36552[(10)] = inst_36472);

(statearr_36552[(11)] = inst_36474);

return statearr_36552;
})();
var statearr_36554_38022 = state_36520__$1;
(statearr_36554_38022[(2)] = null);

(statearr_36554_38022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (3))){
var inst_36518 = (state_36520[(2)]);
var state_36520__$1 = state_36520;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36520__$1,inst_36518);
} else {
if((state_val_36521 === (12))){
var inst_36506 = (state_36520[(2)]);
var state_36520__$1 = state_36520;
var statearr_36558_38023 = state_36520__$1;
(statearr_36558_38023[(2)] = inst_36506);

(statearr_36558_38023[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (2))){
var state_36520__$1 = state_36520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36520__$1,(4),in$);
} else {
if((state_val_36521 === (23))){
var inst_36514 = (state_36520[(2)]);
var state_36520__$1 = state_36520;
var statearr_36559_38025 = state_36520__$1;
(statearr_36559_38025[(2)] = inst_36514);

(statearr_36559_38025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (19))){
var inst_36501 = (state_36520[(2)]);
var state_36520__$1 = state_36520;
var statearr_36561_38026 = state_36520__$1;
(statearr_36561_38026[(2)] = inst_36501);

(statearr_36561_38026[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (11))){
var inst_36486 = (state_36520[(7)]);
var inst_36471 = (state_36520[(8)]);
var inst_36486__$1 = cljs.core.seq(inst_36471);
var state_36520__$1 = (function (){var statearr_36562 = state_36520;
(statearr_36562[(7)] = inst_36486__$1);

return statearr_36562;
})();
if(inst_36486__$1){
var statearr_36563_38028 = state_36520__$1;
(statearr_36563_38028[(1)] = (14));

} else {
var statearr_36565_38031 = state_36520__$1;
(statearr_36565_38031[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (9))){
var inst_36508 = (state_36520[(2)]);
var inst_36509 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36520__$1 = (function (){var statearr_36566 = state_36520;
(statearr_36566[(15)] = inst_36508);

return statearr_36566;
})();
if(cljs.core.truth_(inst_36509)){
var statearr_36567_38034 = state_36520__$1;
(statearr_36567_38034[(1)] = (21));

} else {
var statearr_36568_38035 = state_36520__$1;
(statearr_36568_38035[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (5))){
var inst_36462 = cljs.core.async.close_BANG_(out);
var state_36520__$1 = state_36520;
var statearr_36570_38036 = state_36520__$1;
(statearr_36570_38036[(2)] = inst_36462);

(statearr_36570_38036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (14))){
var inst_36486 = (state_36520[(7)]);
var inst_36488 = cljs.core.chunked_seq_QMARK_(inst_36486);
var state_36520__$1 = state_36520;
if(inst_36488){
var statearr_36571_38037 = state_36520__$1;
(statearr_36571_38037[(1)] = (17));

} else {
var statearr_36572_38038 = state_36520__$1;
(statearr_36572_38038[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (16))){
var inst_36504 = (state_36520[(2)]);
var state_36520__$1 = state_36520;
var statearr_36574_38039 = state_36520__$1;
(statearr_36574_38039[(2)] = inst_36504);

(statearr_36574_38039[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36521 === (10))){
var inst_36472 = (state_36520[(10)]);
var inst_36474 = (state_36520[(11)]);
var inst_36479 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36472,inst_36474);
var state_36520__$1 = state_36520;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36520__$1,(13),out,inst_36479);
} else {
if((state_val_36521 === (18))){
var inst_36486 = (state_36520[(7)]);
var inst_36495 = cljs.core.first(inst_36486);
var state_36520__$1 = state_36520;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36520__$1,(20),out,inst_36495);
} else {
if((state_val_36521 === (8))){
var inst_36473 = (state_36520[(9)]);
var inst_36474 = (state_36520[(11)]);
var inst_36476 = (inst_36474 < inst_36473);
var inst_36477 = inst_36476;
var state_36520__$1 = state_36520;
if(cljs.core.truth_(inst_36477)){
var statearr_36576_38043 = state_36520__$1;
(statearr_36576_38043[(1)] = (10));

} else {
var statearr_36577_38048 = state_36520__$1;
(statearr_36577_38048[(1)] = (11));

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
var statearr_36579 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36579[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36579[(1)] = (1));

return statearr_36579;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36520){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36520);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36580){if((e36580 instanceof Object)){
var ex__34210__auto__ = e36580;
var statearr_36581_38049 = state_36520;
(statearr_36581_38049[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36580;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38050 = state_36520;
state_36520 = G__38050;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36520){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36583 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36583[(6)] = c__34274__auto__);

return statearr_36583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36586 = arguments.length;
switch (G__36586) {
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
var G__36590 = arguments.length;
switch (G__36590) {
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
var G__36594 = arguments.length;
switch (G__36594) {
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
var c__34274__auto___38059 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36620){
var state_val_36621 = (state_36620[(1)]);
if((state_val_36621 === (7))){
var inst_36615 = (state_36620[(2)]);
var state_36620__$1 = state_36620;
var statearr_36623_38060 = state_36620__$1;
(statearr_36623_38060[(2)] = inst_36615);

(statearr_36623_38060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (1))){
var inst_36596 = null;
var state_36620__$1 = (function (){var statearr_36624 = state_36620;
(statearr_36624[(7)] = inst_36596);

return statearr_36624;
})();
var statearr_36625_38061 = state_36620__$1;
(statearr_36625_38061[(2)] = null);

(statearr_36625_38061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (4))){
var inst_36599 = (state_36620[(8)]);
var inst_36599__$1 = (state_36620[(2)]);
var inst_36600 = (inst_36599__$1 == null);
var inst_36601 = cljs.core.not(inst_36600);
var state_36620__$1 = (function (){var statearr_36627 = state_36620;
(statearr_36627[(8)] = inst_36599__$1);

return statearr_36627;
})();
if(inst_36601){
var statearr_36628_38066 = state_36620__$1;
(statearr_36628_38066[(1)] = (5));

} else {
var statearr_36629_38067 = state_36620__$1;
(statearr_36629_38067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (6))){
var state_36620__$1 = state_36620;
var statearr_36630_38068 = state_36620__$1;
(statearr_36630_38068[(2)] = null);

(statearr_36630_38068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (3))){
var inst_36617 = (state_36620[(2)]);
var inst_36618 = cljs.core.async.close_BANG_(out);
var state_36620__$1 = (function (){var statearr_36632 = state_36620;
(statearr_36632[(9)] = inst_36617);

return statearr_36632;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36620__$1,inst_36618);
} else {
if((state_val_36621 === (2))){
var state_36620__$1 = state_36620;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36620__$1,(4),ch);
} else {
if((state_val_36621 === (11))){
var inst_36599 = (state_36620[(8)]);
var inst_36609 = (state_36620[(2)]);
var inst_36596 = inst_36599;
var state_36620__$1 = (function (){var statearr_36634 = state_36620;
(statearr_36634[(10)] = inst_36609);

(statearr_36634[(7)] = inst_36596);

return statearr_36634;
})();
var statearr_36635_38072 = state_36620__$1;
(statearr_36635_38072[(2)] = null);

(statearr_36635_38072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (9))){
var inst_36599 = (state_36620[(8)]);
var state_36620__$1 = state_36620;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36620__$1,(11),out,inst_36599);
} else {
if((state_val_36621 === (5))){
var inst_36599 = (state_36620[(8)]);
var inst_36596 = (state_36620[(7)]);
var inst_36604 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36599,inst_36596);
var state_36620__$1 = state_36620;
if(inst_36604){
var statearr_36638_38073 = state_36620__$1;
(statearr_36638_38073[(1)] = (8));

} else {
var statearr_36639_38074 = state_36620__$1;
(statearr_36639_38074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (10))){
var inst_36612 = (state_36620[(2)]);
var state_36620__$1 = state_36620;
var statearr_36640_38076 = state_36620__$1;
(statearr_36640_38076[(2)] = inst_36612);

(statearr_36640_38076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (8))){
var inst_36596 = (state_36620[(7)]);
var tmp36636 = inst_36596;
var inst_36596__$1 = tmp36636;
var state_36620__$1 = (function (){var statearr_36642 = state_36620;
(statearr_36642[(7)] = inst_36596__$1);

return statearr_36642;
})();
var statearr_36643_38079 = state_36620__$1;
(statearr_36643_38079[(2)] = null);

(statearr_36643_38079[(1)] = (2));


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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36620){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36620);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36646){if((e36646 instanceof Object)){
var ex__34210__auto__ = e36646;
var statearr_36647_38084 = state_36620;
(statearr_36647_38084[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36646;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38085 = state_36620;
state_36620 = G__38085;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36648 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36648[(6)] = c__34274__auto___38059);

return statearr_36648;
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
var c__34274__auto___38092 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36692){
var state_val_36693 = (state_36692[(1)]);
if((state_val_36693 === (7))){
var inst_36688 = (state_36692[(2)]);
var state_36692__$1 = state_36692;
var statearr_36695_38093 = state_36692__$1;
(statearr_36695_38093[(2)] = inst_36688);

(statearr_36695_38093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36693 === (1))){
var inst_36654 = (new Array(n));
var inst_36655 = inst_36654;
var inst_36656 = (0);
var state_36692__$1 = (function (){var statearr_36696 = state_36692;
(statearr_36696[(7)] = inst_36656);

(statearr_36696[(8)] = inst_36655);

return statearr_36696;
})();
var statearr_36698_38094 = state_36692__$1;
(statearr_36698_38094[(2)] = null);

(statearr_36698_38094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36693 === (4))){
var inst_36659 = (state_36692[(9)]);
var inst_36659__$1 = (state_36692[(2)]);
var inst_36660 = (inst_36659__$1 == null);
var inst_36661 = cljs.core.not(inst_36660);
var state_36692__$1 = (function (){var statearr_36699 = state_36692;
(statearr_36699[(9)] = inst_36659__$1);

return statearr_36699;
})();
if(inst_36661){
var statearr_36700_38100 = state_36692__$1;
(statearr_36700_38100[(1)] = (5));

} else {
var statearr_36701_38101 = state_36692__$1;
(statearr_36701_38101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36693 === (15))){
var inst_36682 = (state_36692[(2)]);
var state_36692__$1 = state_36692;
var statearr_36703_38102 = state_36692__$1;
(statearr_36703_38102[(2)] = inst_36682);

(statearr_36703_38102[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36693 === (13))){
var state_36692__$1 = state_36692;
var statearr_36704_38103 = state_36692__$1;
(statearr_36704_38103[(2)] = null);

(statearr_36704_38103[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36693 === (6))){
var inst_36656 = (state_36692[(7)]);
var inst_36678 = (inst_36656 > (0));
var state_36692__$1 = state_36692;
if(cljs.core.truth_(inst_36678)){
var statearr_36706_38104 = state_36692__$1;
(statearr_36706_38104[(1)] = (12));

} else {
var statearr_36707_38105 = state_36692__$1;
(statearr_36707_38105[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36693 === (3))){
var inst_36690 = (state_36692[(2)]);
var state_36692__$1 = state_36692;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36692__$1,inst_36690);
} else {
if((state_val_36693 === (12))){
var inst_36655 = (state_36692[(8)]);
var inst_36680 = cljs.core.vec(inst_36655);
var state_36692__$1 = state_36692;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36692__$1,(15),out,inst_36680);
} else {
if((state_val_36693 === (2))){
var state_36692__$1 = state_36692;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36692__$1,(4),ch);
} else {
if((state_val_36693 === (11))){
var inst_36672 = (state_36692[(2)]);
var inst_36673 = (new Array(n));
var inst_36655 = inst_36673;
var inst_36656 = (0);
var state_36692__$1 = (function (){var statearr_36709 = state_36692;
(statearr_36709[(7)] = inst_36656);

(statearr_36709[(8)] = inst_36655);

(statearr_36709[(10)] = inst_36672);

return statearr_36709;
})();
var statearr_36710_38108 = state_36692__$1;
(statearr_36710_38108[(2)] = null);

(statearr_36710_38108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36693 === (9))){
var inst_36655 = (state_36692[(8)]);
var inst_36670 = cljs.core.vec(inst_36655);
var state_36692__$1 = state_36692;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36692__$1,(11),out,inst_36670);
} else {
if((state_val_36693 === (5))){
var inst_36656 = (state_36692[(7)]);
var inst_36655 = (state_36692[(8)]);
var inst_36664 = (state_36692[(11)]);
var inst_36659 = (state_36692[(9)]);
var inst_36663 = (inst_36655[inst_36656] = inst_36659);
var inst_36664__$1 = (inst_36656 + (1));
var inst_36665 = (inst_36664__$1 < n);
var state_36692__$1 = (function (){var statearr_36712 = state_36692;
(statearr_36712[(12)] = inst_36663);

(statearr_36712[(11)] = inst_36664__$1);

return statearr_36712;
})();
if(cljs.core.truth_(inst_36665)){
var statearr_36713_38110 = state_36692__$1;
(statearr_36713_38110[(1)] = (8));

} else {
var statearr_36714_38111 = state_36692__$1;
(statearr_36714_38111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36693 === (14))){
var inst_36685 = (state_36692[(2)]);
var inst_36686 = cljs.core.async.close_BANG_(out);
var state_36692__$1 = (function (){var statearr_36717 = state_36692;
(statearr_36717[(13)] = inst_36685);

return statearr_36717;
})();
var statearr_36718_38114 = state_36692__$1;
(statearr_36718_38114[(2)] = inst_36686);

(statearr_36718_38114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36693 === (10))){
var inst_36676 = (state_36692[(2)]);
var state_36692__$1 = state_36692;
var statearr_36719_38115 = state_36692__$1;
(statearr_36719_38115[(2)] = inst_36676);

(statearr_36719_38115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36693 === (8))){
var inst_36655 = (state_36692[(8)]);
var inst_36664 = (state_36692[(11)]);
var tmp36716 = inst_36655;
var inst_36655__$1 = tmp36716;
var inst_36656 = inst_36664;
var state_36692__$1 = (function (){var statearr_36721 = state_36692;
(statearr_36721[(7)] = inst_36656);

(statearr_36721[(8)] = inst_36655__$1);

return statearr_36721;
})();
var statearr_36722_38118 = state_36692__$1;
(statearr_36722_38118[(2)] = null);

(statearr_36722_38118[(1)] = (2));


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
var statearr_36724 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36724[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36724[(1)] = (1));

return statearr_36724;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36692){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36692);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36725){if((e36725 instanceof Object)){
var ex__34210__auto__ = e36725;
var statearr_36726_38119 = state_36692;
(statearr_36726_38119[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36725;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38121 = state_36692;
state_36692 = G__38121;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36692){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36727 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36727[(6)] = c__34274__auto___38092);

return statearr_36727;
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
var G__36729 = arguments.length;
switch (G__36729) {
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
var c__34274__auto___38124 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36772){
var state_val_36773 = (state_36772[(1)]);
if((state_val_36773 === (7))){
var inst_36768 = (state_36772[(2)]);
var state_36772__$1 = state_36772;
var statearr_36775_38126 = state_36772__$1;
(statearr_36775_38126[(2)] = inst_36768);

(statearr_36775_38126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36773 === (1))){
var inst_36730 = [];
var inst_36731 = inst_36730;
var inst_36732 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36772__$1 = (function (){var statearr_36777 = state_36772;
(statearr_36777[(7)] = inst_36731);

(statearr_36777[(8)] = inst_36732);

return statearr_36777;
})();
var statearr_36778_38129 = state_36772__$1;
(statearr_36778_38129[(2)] = null);

(statearr_36778_38129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36773 === (4))){
var inst_36735 = (state_36772[(9)]);
var inst_36735__$1 = (state_36772[(2)]);
var inst_36736 = (inst_36735__$1 == null);
var inst_36737 = cljs.core.not(inst_36736);
var state_36772__$1 = (function (){var statearr_36779 = state_36772;
(statearr_36779[(9)] = inst_36735__$1);

return statearr_36779;
})();
if(inst_36737){
var statearr_36781_38130 = state_36772__$1;
(statearr_36781_38130[(1)] = (5));

} else {
var statearr_36782_38131 = state_36772__$1;
(statearr_36782_38131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36773 === (15))){
var inst_36762 = (state_36772[(2)]);
var state_36772__$1 = state_36772;
var statearr_36783_38133 = state_36772__$1;
(statearr_36783_38133[(2)] = inst_36762);

(statearr_36783_38133[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36773 === (13))){
var state_36772__$1 = state_36772;
var statearr_36784_38135 = state_36772__$1;
(statearr_36784_38135[(2)] = null);

(statearr_36784_38135[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36773 === (6))){
var inst_36731 = (state_36772[(7)]);
var inst_36757 = inst_36731.length;
var inst_36758 = (inst_36757 > (0));
var state_36772__$1 = state_36772;
if(cljs.core.truth_(inst_36758)){
var statearr_36786_38137 = state_36772__$1;
(statearr_36786_38137[(1)] = (12));

} else {
var statearr_36787_38138 = state_36772__$1;
(statearr_36787_38138[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36773 === (3))){
var inst_36770 = (state_36772[(2)]);
var state_36772__$1 = state_36772;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36772__$1,inst_36770);
} else {
if((state_val_36773 === (12))){
var inst_36731 = (state_36772[(7)]);
var inst_36760 = cljs.core.vec(inst_36731);
var state_36772__$1 = state_36772;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36772__$1,(15),out,inst_36760);
} else {
if((state_val_36773 === (2))){
var state_36772__$1 = state_36772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36772__$1,(4),ch);
} else {
if((state_val_36773 === (11))){
var inst_36739 = (state_36772[(10)]);
var inst_36735 = (state_36772[(9)]);
var inst_36750 = (state_36772[(2)]);
var inst_36751 = [];
var inst_36752 = inst_36751.push(inst_36735);
var inst_36731 = inst_36751;
var inst_36732 = inst_36739;
var state_36772__$1 = (function (){var statearr_36790 = state_36772;
(statearr_36790[(7)] = inst_36731);

(statearr_36790[(8)] = inst_36732);

(statearr_36790[(11)] = inst_36750);

(statearr_36790[(12)] = inst_36752);

return statearr_36790;
})();
var statearr_36791_38142 = state_36772__$1;
(statearr_36791_38142[(2)] = null);

(statearr_36791_38142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36773 === (9))){
var inst_36731 = (state_36772[(7)]);
var inst_36748 = cljs.core.vec(inst_36731);
var state_36772__$1 = state_36772;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36772__$1,(11),out,inst_36748);
} else {
if((state_val_36773 === (5))){
var inst_36739 = (state_36772[(10)]);
var inst_36732 = (state_36772[(8)]);
var inst_36735 = (state_36772[(9)]);
var inst_36739__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36735) : f.call(null,inst_36735));
var inst_36741 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36739__$1,inst_36732);
var inst_36742 = cljs.core.keyword_identical_QMARK_(inst_36732,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36743 = ((inst_36741) || (inst_36742));
var state_36772__$1 = (function (){var statearr_36793 = state_36772;
(statearr_36793[(10)] = inst_36739__$1);

return statearr_36793;
})();
if(cljs.core.truth_(inst_36743)){
var statearr_36794_38145 = state_36772__$1;
(statearr_36794_38145[(1)] = (8));

} else {
var statearr_36795_38147 = state_36772__$1;
(statearr_36795_38147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36773 === (14))){
var inst_36765 = (state_36772[(2)]);
var inst_36766 = cljs.core.async.close_BANG_(out);
var state_36772__$1 = (function (){var statearr_36798 = state_36772;
(statearr_36798[(13)] = inst_36765);

return statearr_36798;
})();
var statearr_36799_38148 = state_36772__$1;
(statearr_36799_38148[(2)] = inst_36766);

(statearr_36799_38148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36773 === (10))){
var inst_36755 = (state_36772[(2)]);
var state_36772__$1 = state_36772;
var statearr_36800_38149 = state_36772__$1;
(statearr_36800_38149[(2)] = inst_36755);

(statearr_36800_38149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36773 === (8))){
var inst_36731 = (state_36772[(7)]);
var inst_36739 = (state_36772[(10)]);
var inst_36735 = (state_36772[(9)]);
var inst_36745 = inst_36731.push(inst_36735);
var tmp36797 = inst_36731;
var inst_36731__$1 = tmp36797;
var inst_36732 = inst_36739;
var state_36772__$1 = (function (){var statearr_36802 = state_36772;
(statearr_36802[(14)] = inst_36745);

(statearr_36802[(7)] = inst_36731__$1);

(statearr_36802[(8)] = inst_36732);

return statearr_36802;
})();
var statearr_36803_38152 = state_36772__$1;
(statearr_36803_38152[(2)] = null);

(statearr_36803_38152[(1)] = (2));


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
var statearr_36805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36805[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36805[(1)] = (1));

return statearr_36805;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36772){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36772);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36806){if((e36806 instanceof Object)){
var ex__34210__auto__ = e36806;
var statearr_36807_38154 = state_36772;
(statearr_36807_38154[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36806;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38156 = state_36772;
state_36772 = G__38156;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36772){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36809 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36809[(6)] = c__34274__auto___38124);

return statearr_36809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
