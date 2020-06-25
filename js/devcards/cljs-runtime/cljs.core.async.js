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
var G__34325 = arguments.length;
switch (G__34325) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34326 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34326 = (function (f,blockable,meta34327){
this.f = f;
this.blockable = blockable;
this.meta34327 = meta34327;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34328,meta34327__$1){
var self__ = this;
var _34328__$1 = this;
return (new cljs.core.async.t_cljs$core$async34326(self__.f,self__.blockable,meta34327__$1));
}));

(cljs.core.async.t_cljs$core$async34326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34328){
var self__ = this;
var _34328__$1 = this;
return self__.meta34327;
}));

(cljs.core.async.t_cljs$core$async34326.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34326.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34326.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async34326.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async34326.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34327","meta34327",-813329371,null)], null);
}));

(cljs.core.async.t_cljs$core$async34326.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34326.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34326");

(cljs.core.async.t_cljs$core$async34326.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34326");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34326.
 */
cljs.core.async.__GT_t_cljs$core$async34326 = (function cljs$core$async$__GT_t_cljs$core$async34326(f__$1,blockable__$1,meta34327){
return (new cljs.core.async.t_cljs$core$async34326(f__$1,blockable__$1,meta34327));
});

}

return (new cljs.core.async.t_cljs$core$async34326(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34333 = arguments.length;
switch (G__34333) {
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
var G__34335 = arguments.length;
switch (G__34335) {
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
var G__34337 = arguments.length;
switch (G__34337) {
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
var val_36781 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36781) : fn1.call(null,val_36781));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36781) : fn1.call(null,val_36781));
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
var G__34339 = arguments.length;
switch (G__34339) {
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
var n__4666__auto___36787 = n;
var x_36788 = (0);
while(true){
if((x_36788 < n__4666__auto___36787)){
(a[x_36788] = x_36788);

var G__36789 = (x_36788 + (1));
x_36788 = G__36789;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34341 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34341 = (function (flag,meta34342){
this.flag = flag;
this.meta34342 = meta34342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34343,meta34342__$1){
var self__ = this;
var _34343__$1 = this;
return (new cljs.core.async.t_cljs$core$async34341(self__.flag,meta34342__$1));
}));

(cljs.core.async.t_cljs$core$async34341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34343){
var self__ = this;
var _34343__$1 = this;
return self__.meta34342;
}));

(cljs.core.async.t_cljs$core$async34341.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34341.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34341.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34341.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async34341.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34342","meta34342",817471502,null)], null);
}));

(cljs.core.async.t_cljs$core$async34341.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34341.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34341");

(cljs.core.async.t_cljs$core$async34341.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34341");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34341.
 */
cljs.core.async.__GT_t_cljs$core$async34341 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34341(flag__$1,meta34342){
return (new cljs.core.async.t_cljs$core$async34341(flag__$1,meta34342));
});

}

return (new cljs.core.async.t_cljs$core$async34341(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34348 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34348 = (function (flag,cb,meta34349){
this.flag = flag;
this.cb = cb;
this.meta34349 = meta34349;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34350,meta34349__$1){
var self__ = this;
var _34350__$1 = this;
return (new cljs.core.async.t_cljs$core$async34348(self__.flag,self__.cb,meta34349__$1));
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
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34348.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34348.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34348.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34349","meta34349",1097138592,null)], null);
}));

(cljs.core.async.t_cljs$core$async34348.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34348.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34348");

(cljs.core.async.t_cljs$core$async34348.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34348");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34348.
 */
cljs.core.async.__GT_t_cljs$core$async34348 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34348(flag__$1,cb__$1,meta34349){
return (new cljs.core.async.t_cljs$core$async34348(flag__$1,cb__$1,meta34349));
});

}

return (new cljs.core.async.t_cljs$core$async34348(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34355_SHARP_){
var G__34357 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34355_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34357) : fret.call(null,G__34357));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34356_SHARP_){
var G__34358 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34356_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34358) : fret.call(null,G__34358));
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
var G__36800 = (i + (1));
i = G__36800;
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
var len__4789__auto___36802 = arguments.length;
var i__4790__auto___36803 = (0);
while(true){
if((i__4790__auto___36803 < len__4789__auto___36802)){
args__4795__auto__.push((arguments[i__4790__auto___36803]));

var G__36804 = (i__4790__auto___36803 + (1));
i__4790__auto___36803 = G__36804;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34370){
var map__34371 = p__34370;
var map__34371__$1 = (((((!((map__34371 == null))))?(((((map__34371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34371):map__34371);
var opts = map__34371__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34359){
var G__34360 = cljs.core.first(seq34359);
var seq34359__$1 = cljs.core.next(seq34359);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34360,seq34359__$1);
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
var G__34377 = arguments.length;
switch (G__34377) {
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
var c__34267__auto___36810 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34407){
var state_val_34411 = (state_34407[(1)]);
if((state_val_34411 === (7))){
var inst_34400 = (state_34407[(2)]);
var state_34407__$1 = state_34407;
var statearr_34418_36812 = state_34407__$1;
(statearr_34418_36812[(2)] = inst_34400);

(statearr_34418_36812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (1))){
var state_34407__$1 = state_34407;
var statearr_34419_36814 = state_34407__$1;
(statearr_34419_36814[(2)] = null);

(statearr_34419_36814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (4))){
var inst_34383 = (state_34407[(7)]);
var inst_34383__$1 = (state_34407[(2)]);
var inst_34384 = (inst_34383__$1 == null);
var state_34407__$1 = (function (){var statearr_34420 = state_34407;
(statearr_34420[(7)] = inst_34383__$1);

return statearr_34420;
})();
if(cljs.core.truth_(inst_34384)){
var statearr_34421_36815 = state_34407__$1;
(statearr_34421_36815[(1)] = (5));

} else {
var statearr_34422_36817 = state_34407__$1;
(statearr_34422_36817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (13))){
var state_34407__$1 = state_34407;
var statearr_34423_36818 = state_34407__$1;
(statearr_34423_36818[(2)] = null);

(statearr_34423_36818[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (6))){
var inst_34383 = (state_34407[(7)]);
var state_34407__$1 = state_34407;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34407__$1,(11),to,inst_34383);
} else {
if((state_val_34411 === (3))){
var inst_34402 = (state_34407[(2)]);
var state_34407__$1 = state_34407;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34407__$1,inst_34402);
} else {
if((state_val_34411 === (12))){
var state_34407__$1 = state_34407;
var statearr_34424_36820 = state_34407__$1;
(statearr_34424_36820[(2)] = null);

(statearr_34424_36820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (2))){
var state_34407__$1 = state_34407;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34407__$1,(4),from);
} else {
if((state_val_34411 === (11))){
var inst_34393 = (state_34407[(2)]);
var state_34407__$1 = state_34407;
if(cljs.core.truth_(inst_34393)){
var statearr_34425_36822 = state_34407__$1;
(statearr_34425_36822[(1)] = (12));

} else {
var statearr_34426_36823 = state_34407__$1;
(statearr_34426_36823[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (9))){
var state_34407__$1 = state_34407;
var statearr_34427_36824 = state_34407__$1;
(statearr_34427_36824[(2)] = null);

(statearr_34427_36824[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (5))){
var state_34407__$1 = state_34407;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34428_36826 = state_34407__$1;
(statearr_34428_36826[(1)] = (8));

} else {
var statearr_34429_36827 = state_34407__$1;
(statearr_34429_36827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (14))){
var inst_34398 = (state_34407[(2)]);
var state_34407__$1 = state_34407;
var statearr_34430_36828 = state_34407__$1;
(statearr_34430_36828[(2)] = inst_34398);

(statearr_34430_36828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (10))){
var inst_34390 = (state_34407[(2)]);
var state_34407__$1 = state_34407;
var statearr_34431_36830 = state_34407__$1;
(statearr_34431_36830[(2)] = inst_34390);

(statearr_34431_36830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (8))){
var inst_34387 = cljs.core.async.close_BANG_(to);
var state_34407__$1 = state_34407;
var statearr_34432_36831 = state_34407__$1;
(statearr_34432_36831[(2)] = inst_34387);

(statearr_34432_36831[(1)] = (10));


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
var cljs$core$async$state_machine__34200__auto__ = null;
var cljs$core$async$state_machine__34200__auto____0 = (function (){
var statearr_34433 = [null,null,null,null,null,null,null,null];
(statearr_34433[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_34433[(1)] = (1));

return statearr_34433;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_34407){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34407);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34434){if((e34434 instanceof Object)){
var ex__34203__auto__ = e34434;
var statearr_34435_36834 = state_34407;
(statearr_34435_36834[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34434;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36835 = state_34407;
state_34407 = G__36835;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_34407){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_34407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34436 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34436[(6)] = c__34267__auto___36810);

return statearr_34436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
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
var process = (function (p__34437){
var vec__34438 = p__34437;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34438,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34438,(1),null);
var job = vec__34438;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34267__auto___36838 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34446){
var state_val_34447 = (state_34446[(1)]);
if((state_val_34447 === (1))){
var state_34446__$1 = state_34446;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34446__$1,(2),res,v);
} else {
if((state_val_34447 === (2))){
var inst_34442 = (state_34446[(2)]);
var inst_34444 = cljs.core.async.close_BANG_(res);
var state_34446__$1 = (function (){var statearr_34451 = state_34446;
(statearr_34451[(7)] = inst_34442);

return statearr_34451;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34446__$1,inst_34444);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_34452 = [null,null,null,null,null,null,null,null];
(statearr_34452[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34452[(1)] = (1));

return statearr_34452;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34446){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34446);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34453){if((e34453 instanceof Object)){
var ex__34203__auto__ = e34453;
var statearr_34454_36842 = state_34446;
(statearr_34454_36842[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34453;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36843 = state_34446;
state_34446 = G__36843;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34446){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34456 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34456[(6)] = c__34267__auto___36838);

return statearr_34456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34457){
var vec__34458 = p__34457;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34458,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34458,(1),null);
var job = vec__34458;
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
var n__4666__auto___36846 = n;
var __36847 = (0);
while(true){
if((__36847 < n__4666__auto___36846)){
var G__34461_36848 = type;
var G__34461_36849__$1 = (((G__34461_36848 instanceof cljs.core.Keyword))?G__34461_36848.fqn:null);
switch (G__34461_36849__$1) {
case "compute":
var c__34267__auto___36852 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36847,c__34267__auto___36852,G__34461_36848,G__34461_36849__$1,n__4666__auto___36846,jobs,results,process,async){
return (function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = ((function (__36847,c__34267__auto___36852,G__34461_36848,G__34461_36849__$1,n__4666__auto___36846,jobs,results,process,async){
return (function (state_34474){
var state_val_34475 = (state_34474[(1)]);
if((state_val_34475 === (1))){
var state_34474__$1 = state_34474;
var statearr_34478_36853 = state_34474__$1;
(statearr_34478_36853[(2)] = null);

(statearr_34478_36853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34475 === (2))){
var state_34474__$1 = state_34474;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34474__$1,(4),jobs);
} else {
if((state_val_34475 === (3))){
var inst_34472 = (state_34474[(2)]);
var state_34474__$1 = state_34474;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34474__$1,inst_34472);
} else {
if((state_val_34475 === (4))){
var inst_34464 = (state_34474[(2)]);
var inst_34465 = process(inst_34464);
var state_34474__$1 = state_34474;
if(cljs.core.truth_(inst_34465)){
var statearr_34479_36856 = state_34474__$1;
(statearr_34479_36856[(1)] = (5));

} else {
var statearr_34480_36857 = state_34474__$1;
(statearr_34480_36857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34475 === (5))){
var state_34474__$1 = state_34474;
var statearr_34481_36858 = state_34474__$1;
(statearr_34481_36858[(2)] = null);

(statearr_34481_36858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34475 === (6))){
var state_34474__$1 = state_34474;
var statearr_34483_36859 = state_34474__$1;
(statearr_34483_36859[(2)] = null);

(statearr_34483_36859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34475 === (7))){
var inst_34470 = (state_34474[(2)]);
var state_34474__$1 = state_34474;
var statearr_34484_36861 = state_34474__$1;
(statearr_34484_36861[(2)] = inst_34470);

(statearr_34484_36861[(1)] = (3));


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
});})(__36847,c__34267__auto___36852,G__34461_36848,G__34461_36849__$1,n__4666__auto___36846,jobs,results,process,async))
;
return ((function (__36847,switch__34199__auto__,c__34267__auto___36852,G__34461_36848,G__34461_36849__$1,n__4666__auto___36846,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_34485 = [null,null,null,null,null,null,null];
(statearr_34485[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34485[(1)] = (1));

return statearr_34485;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34474){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34474);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34486){if((e34486 instanceof Object)){
var ex__34203__auto__ = e34486;
var statearr_34487_36864 = state_34474;
(statearr_34487_36864[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34486;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36865 = state_34474;
state_34474 = G__36865;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34474){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
;})(__36847,switch__34199__auto__,c__34267__auto___36852,G__34461_36848,G__34461_36849__$1,n__4666__auto___36846,jobs,results,process,async))
})();
var state__34269__auto__ = (function (){var statearr_34490 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34490[(6)] = c__34267__auto___36852);

return statearr_34490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
});})(__36847,c__34267__auto___36852,G__34461_36848,G__34461_36849__$1,n__4666__auto___36846,jobs,results,process,async))
);


break;
case "async":
var c__34267__auto___36867 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36847,c__34267__auto___36867,G__34461_36848,G__34461_36849__$1,n__4666__auto___36846,jobs,results,process,async){
return (function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = ((function (__36847,c__34267__auto___36867,G__34461_36848,G__34461_36849__$1,n__4666__auto___36846,jobs,results,process,async){
return (function (state_34508){
var state_val_34509 = (state_34508[(1)]);
if((state_val_34509 === (1))){
var state_34508__$1 = state_34508;
var statearr_34510_36869 = state_34508__$1;
(statearr_34510_36869[(2)] = null);

(statearr_34510_36869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (2))){
var state_34508__$1 = state_34508;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34508__$1,(4),jobs);
} else {
if((state_val_34509 === (3))){
var inst_34506 = (state_34508[(2)]);
var state_34508__$1 = state_34508;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34508__$1,inst_34506);
} else {
if((state_val_34509 === (4))){
var inst_34498 = (state_34508[(2)]);
var inst_34499 = async(inst_34498);
var state_34508__$1 = state_34508;
if(cljs.core.truth_(inst_34499)){
var statearr_34511_36871 = state_34508__$1;
(statearr_34511_36871[(1)] = (5));

} else {
var statearr_34512_36872 = state_34508__$1;
(statearr_34512_36872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (5))){
var state_34508__$1 = state_34508;
var statearr_34513_36873 = state_34508__$1;
(statearr_34513_36873[(2)] = null);

(statearr_34513_36873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (6))){
var state_34508__$1 = state_34508;
var statearr_34514_36875 = state_34508__$1;
(statearr_34514_36875[(2)] = null);

(statearr_34514_36875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (7))){
var inst_34504 = (state_34508[(2)]);
var state_34508__$1 = state_34508;
var statearr_34516_36876 = state_34508__$1;
(statearr_34516_36876[(2)] = inst_34504);

(statearr_34516_36876[(1)] = (3));


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
});})(__36847,c__34267__auto___36867,G__34461_36848,G__34461_36849__$1,n__4666__auto___36846,jobs,results,process,async))
;
return ((function (__36847,switch__34199__auto__,c__34267__auto___36867,G__34461_36848,G__34461_36849__$1,n__4666__auto___36846,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_34517 = [null,null,null,null,null,null,null];
(statearr_34517[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34517[(1)] = (1));

return statearr_34517;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34508){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34508);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34518){if((e34518 instanceof Object)){
var ex__34203__auto__ = e34518;
var statearr_34519_36879 = state_34508;
(statearr_34519_36879[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34518;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36880 = state_34508;
state_34508 = G__36880;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34508){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
;})(__36847,switch__34199__auto__,c__34267__auto___36867,G__34461_36848,G__34461_36849__$1,n__4666__auto___36846,jobs,results,process,async))
})();
var state__34269__auto__ = (function (){var statearr_34520 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34520[(6)] = c__34267__auto___36867);

return statearr_34520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
});})(__36847,c__34267__auto___36867,G__34461_36848,G__34461_36849__$1,n__4666__auto___36846,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34461_36849__$1)].join('')));

}

var G__36882 = (__36847 + (1));
__36847 = G__36882;
continue;
} else {
}
break;
}

var c__34267__auto___36883 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34549){
var state_val_34550 = (state_34549[(1)]);
if((state_val_34550 === (7))){
var inst_34545 = (state_34549[(2)]);
var state_34549__$1 = state_34549;
var statearr_34551_36885 = state_34549__$1;
(statearr_34551_36885[(2)] = inst_34545);

(statearr_34551_36885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34550 === (1))){
var state_34549__$1 = state_34549;
var statearr_34552_36886 = state_34549__$1;
(statearr_34552_36886[(2)] = null);

(statearr_34552_36886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34550 === (4))){
var inst_34527 = (state_34549[(7)]);
var inst_34527__$1 = (state_34549[(2)]);
var inst_34528 = (inst_34527__$1 == null);
var state_34549__$1 = (function (){var statearr_34553 = state_34549;
(statearr_34553[(7)] = inst_34527__$1);

return statearr_34553;
})();
if(cljs.core.truth_(inst_34528)){
var statearr_34554_36888 = state_34549__$1;
(statearr_34554_36888[(1)] = (5));

} else {
var statearr_34555_36889 = state_34549__$1;
(statearr_34555_36889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34550 === (6))){
var inst_34527 = (state_34549[(7)]);
var inst_34532 = (state_34549[(8)]);
var inst_34532__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34536 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34537 = [inst_34527,inst_34532__$1];
var inst_34538 = (new cljs.core.PersistentVector(null,2,(5),inst_34536,inst_34537,null));
var state_34549__$1 = (function (){var statearr_34556 = state_34549;
(statearr_34556[(8)] = inst_34532__$1);

return statearr_34556;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34549__$1,(8),jobs,inst_34538);
} else {
if((state_val_34550 === (3))){
var inst_34547 = (state_34549[(2)]);
var state_34549__$1 = state_34549;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34549__$1,inst_34547);
} else {
if((state_val_34550 === (2))){
var state_34549__$1 = state_34549;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34549__$1,(4),from);
} else {
if((state_val_34550 === (9))){
var inst_34542 = (state_34549[(2)]);
var state_34549__$1 = (function (){var statearr_34560 = state_34549;
(statearr_34560[(9)] = inst_34542);

return statearr_34560;
})();
var statearr_34561_36893 = state_34549__$1;
(statearr_34561_36893[(2)] = null);

(statearr_34561_36893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34550 === (5))){
var inst_34530 = cljs.core.async.close_BANG_(jobs);
var state_34549__$1 = state_34549;
var statearr_34562_36894 = state_34549__$1;
(statearr_34562_36894[(2)] = inst_34530);

(statearr_34562_36894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34550 === (8))){
var inst_34532 = (state_34549[(8)]);
var inst_34540 = (state_34549[(2)]);
var state_34549__$1 = (function (){var statearr_34563 = state_34549;
(statearr_34563[(10)] = inst_34540);

return statearr_34563;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34549__$1,(9),results,inst_34532);
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
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_34564 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34564[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34564[(1)] = (1));

return statearr_34564;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34549){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34549);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34565){if((e34565 instanceof Object)){
var ex__34203__auto__ = e34565;
var statearr_34566_36897 = state_34549;
(statearr_34566_36897[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34565;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36898 = state_34549;
state_34549 = G__36898;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34549){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34567 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34567[(6)] = c__34267__auto___36883);

return statearr_34567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


var c__34267__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34605){
var state_val_34606 = (state_34605[(1)]);
if((state_val_34606 === (7))){
var inst_34601 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34607_36901 = state_34605__$1;
(statearr_34607_36901[(2)] = inst_34601);

(statearr_34607_36901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (20))){
var state_34605__$1 = state_34605;
var statearr_34608_36902 = state_34605__$1;
(statearr_34608_36902[(2)] = null);

(statearr_34608_36902[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (1))){
var state_34605__$1 = state_34605;
var statearr_34609_36904 = state_34605__$1;
(statearr_34609_36904[(2)] = null);

(statearr_34609_36904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (4))){
var inst_34570 = (state_34605[(7)]);
var inst_34570__$1 = (state_34605[(2)]);
var inst_34571 = (inst_34570__$1 == null);
var state_34605__$1 = (function (){var statearr_34610 = state_34605;
(statearr_34610[(7)] = inst_34570__$1);

return statearr_34610;
})();
if(cljs.core.truth_(inst_34571)){
var statearr_34611_36905 = state_34605__$1;
(statearr_34611_36905[(1)] = (5));

} else {
var statearr_34612_36907 = state_34605__$1;
(statearr_34612_36907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (15))){
var inst_34583 = (state_34605[(8)]);
var state_34605__$1 = state_34605;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34605__$1,(18),to,inst_34583);
} else {
if((state_val_34606 === (21))){
var inst_34596 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34613_36908 = state_34605__$1;
(statearr_34613_36908[(2)] = inst_34596);

(statearr_34613_36908[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (13))){
var inst_34598 = (state_34605[(2)]);
var state_34605__$1 = (function (){var statearr_34614 = state_34605;
(statearr_34614[(9)] = inst_34598);

return statearr_34614;
})();
var statearr_34615_36910 = state_34605__$1;
(statearr_34615_36910[(2)] = null);

(statearr_34615_36910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (6))){
var inst_34570 = (state_34605[(7)]);
var state_34605__$1 = state_34605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34605__$1,(11),inst_34570);
} else {
if((state_val_34606 === (17))){
var inst_34591 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
if(cljs.core.truth_(inst_34591)){
var statearr_34616_36912 = state_34605__$1;
(statearr_34616_36912[(1)] = (19));

} else {
var statearr_34617_36913 = state_34605__$1;
(statearr_34617_36913[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (3))){
var inst_34603 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34605__$1,inst_34603);
} else {
if((state_val_34606 === (12))){
var inst_34580 = (state_34605[(10)]);
var state_34605__$1 = state_34605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34605__$1,(14),inst_34580);
} else {
if((state_val_34606 === (2))){
var state_34605__$1 = state_34605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34605__$1,(4),results);
} else {
if((state_val_34606 === (19))){
var state_34605__$1 = state_34605;
var statearr_34618_36915 = state_34605__$1;
(statearr_34618_36915[(2)] = null);

(statearr_34618_36915[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (11))){
var inst_34580 = (state_34605[(2)]);
var state_34605__$1 = (function (){var statearr_34619 = state_34605;
(statearr_34619[(10)] = inst_34580);

return statearr_34619;
})();
var statearr_34620_36917 = state_34605__$1;
(statearr_34620_36917[(2)] = null);

(statearr_34620_36917[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (9))){
var state_34605__$1 = state_34605;
var statearr_34621_36918 = state_34605__$1;
(statearr_34621_36918[(2)] = null);

(statearr_34621_36918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (5))){
var state_34605__$1 = state_34605;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34622_36920 = state_34605__$1;
(statearr_34622_36920[(1)] = (8));

} else {
var statearr_34623_36921 = state_34605__$1;
(statearr_34623_36921[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (14))){
var inst_34583 = (state_34605[(8)]);
var inst_34583__$1 = (state_34605[(2)]);
var inst_34584 = (inst_34583__$1 == null);
var inst_34585 = cljs.core.not(inst_34584);
var state_34605__$1 = (function (){var statearr_34624 = state_34605;
(statearr_34624[(8)] = inst_34583__$1);

return statearr_34624;
})();
if(inst_34585){
var statearr_34625_36923 = state_34605__$1;
(statearr_34625_36923[(1)] = (15));

} else {
var statearr_34626_36924 = state_34605__$1;
(statearr_34626_36924[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (16))){
var state_34605__$1 = state_34605;
var statearr_34627_36925 = state_34605__$1;
(statearr_34627_36925[(2)] = false);

(statearr_34627_36925[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (10))){
var inst_34577 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34628_36927 = state_34605__$1;
(statearr_34628_36927[(2)] = inst_34577);

(statearr_34628_36927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (18))){
var inst_34588 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34629_36928 = state_34605__$1;
(statearr_34629_36928[(2)] = inst_34588);

(statearr_34629_36928[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (8))){
var inst_34574 = cljs.core.async.close_BANG_(to);
var state_34605__$1 = state_34605;
var statearr_34630_36930 = state_34605__$1;
(statearr_34630_36930[(2)] = inst_34574);

(statearr_34630_36930[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_34631 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34631[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34631[(1)] = (1));

return statearr_34631;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34605){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34605);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34632){if((e34632 instanceof Object)){
var ex__34203__auto__ = e34632;
var statearr_34633_36932 = state_34605;
(statearr_34633_36932[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34632;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36934 = state_34605;
state_34605 = G__36934;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34605){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34634 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34634[(6)] = c__34267__auto__);

return statearr_34634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));

return c__34267__auto__;
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
var G__34636 = arguments.length;
switch (G__34636) {
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
var G__34638 = arguments.length;
switch (G__34638) {
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
var G__34640 = arguments.length;
switch (G__34640) {
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
var c__34267__auto___36944 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34666){
var state_val_34667 = (state_34666[(1)]);
if((state_val_34667 === (7))){
var inst_34662 = (state_34666[(2)]);
var state_34666__$1 = state_34666;
var statearr_34671_36946 = state_34666__$1;
(statearr_34671_36946[(2)] = inst_34662);

(statearr_34671_36946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (1))){
var state_34666__$1 = state_34666;
var statearr_34672_36947 = state_34666__$1;
(statearr_34672_36947[(2)] = null);

(statearr_34672_36947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (4))){
var inst_34643 = (state_34666[(7)]);
var inst_34643__$1 = (state_34666[(2)]);
var inst_34644 = (inst_34643__$1 == null);
var state_34666__$1 = (function (){var statearr_34673 = state_34666;
(statearr_34673[(7)] = inst_34643__$1);

return statearr_34673;
})();
if(cljs.core.truth_(inst_34644)){
var statearr_34674_36949 = state_34666__$1;
(statearr_34674_36949[(1)] = (5));

} else {
var statearr_34675_36950 = state_34666__$1;
(statearr_34675_36950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (13))){
var state_34666__$1 = state_34666;
var statearr_34679_36951 = state_34666__$1;
(statearr_34679_36951[(2)] = null);

(statearr_34679_36951[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (6))){
var inst_34643 = (state_34666[(7)]);
var inst_34649 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34643) : p.call(null,inst_34643));
var state_34666__$1 = state_34666;
if(cljs.core.truth_(inst_34649)){
var statearr_34680_36953 = state_34666__$1;
(statearr_34680_36953[(1)] = (9));

} else {
var statearr_34683_36954 = state_34666__$1;
(statearr_34683_36954[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (3))){
var inst_34664 = (state_34666[(2)]);
var state_34666__$1 = state_34666;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34666__$1,inst_34664);
} else {
if((state_val_34667 === (12))){
var state_34666__$1 = state_34666;
var statearr_34684_36956 = state_34666__$1;
(statearr_34684_36956[(2)] = null);

(statearr_34684_36956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (2))){
var state_34666__$1 = state_34666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34666__$1,(4),ch);
} else {
if((state_val_34667 === (11))){
var inst_34643 = (state_34666[(7)]);
var inst_34653 = (state_34666[(2)]);
var state_34666__$1 = state_34666;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34666__$1,(8),inst_34653,inst_34643);
} else {
if((state_val_34667 === (9))){
var state_34666__$1 = state_34666;
var statearr_34686_36958 = state_34666__$1;
(statearr_34686_36958[(2)] = tc);

(statearr_34686_36958[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (5))){
var inst_34646 = cljs.core.async.close_BANG_(tc);
var inst_34647 = cljs.core.async.close_BANG_(fc);
var state_34666__$1 = (function (){var statearr_34687 = state_34666;
(statearr_34687[(8)] = inst_34646);

return statearr_34687;
})();
var statearr_34688_36960 = state_34666__$1;
(statearr_34688_36960[(2)] = inst_34647);

(statearr_34688_36960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (14))){
var inst_34660 = (state_34666[(2)]);
var state_34666__$1 = state_34666;
var statearr_34691_36961 = state_34666__$1;
(statearr_34691_36961[(2)] = inst_34660);

(statearr_34691_36961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (10))){
var state_34666__$1 = state_34666;
var statearr_34692_36963 = state_34666__$1;
(statearr_34692_36963[(2)] = fc);

(statearr_34692_36963[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (8))){
var inst_34655 = (state_34666[(2)]);
var state_34666__$1 = state_34666;
if(cljs.core.truth_(inst_34655)){
var statearr_34693_36964 = state_34666__$1;
(statearr_34693_36964[(1)] = (12));

} else {
var statearr_34694_36965 = state_34666__$1;
(statearr_34694_36965[(1)] = (13));

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
var cljs$core$async$state_machine__34200__auto__ = null;
var cljs$core$async$state_machine__34200__auto____0 = (function (){
var statearr_34695 = [null,null,null,null,null,null,null,null,null];
(statearr_34695[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_34695[(1)] = (1));

return statearr_34695;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_34666){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34666);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34696){if((e34696 instanceof Object)){
var ex__34203__auto__ = e34696;
var statearr_34697_36968 = state_34666;
(statearr_34697_36968[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34696;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36969 = state_34666;
state_34666 = G__36969;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_34666){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_34666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34699 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34699[(6)] = c__34267__auto___36944);

return statearr_34699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
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
var c__34267__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34723){
var state_val_34724 = (state_34723[(1)]);
if((state_val_34724 === (7))){
var inst_34718 = (state_34723[(2)]);
var state_34723__$1 = state_34723;
var statearr_34728_36972 = state_34723__$1;
(statearr_34728_36972[(2)] = inst_34718);

(statearr_34728_36972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34724 === (1))){
var inst_34701 = init;
var state_34723__$1 = (function (){var statearr_34729 = state_34723;
(statearr_34729[(7)] = inst_34701);

return statearr_34729;
})();
var statearr_34730_36973 = state_34723__$1;
(statearr_34730_36973[(2)] = null);

(statearr_34730_36973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34724 === (4))){
var inst_34704 = (state_34723[(8)]);
var inst_34704__$1 = (state_34723[(2)]);
var inst_34705 = (inst_34704__$1 == null);
var state_34723__$1 = (function (){var statearr_34731 = state_34723;
(statearr_34731[(8)] = inst_34704__$1);

return statearr_34731;
})();
if(cljs.core.truth_(inst_34705)){
var statearr_34732_36975 = state_34723__$1;
(statearr_34732_36975[(1)] = (5));

} else {
var statearr_34733_36976 = state_34723__$1;
(statearr_34733_36976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34724 === (6))){
var inst_34704 = (state_34723[(8)]);
var inst_34708 = (state_34723[(9)]);
var inst_34701 = (state_34723[(7)]);
var inst_34708__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34701,inst_34704) : f.call(null,inst_34701,inst_34704));
var inst_34709 = cljs.core.reduced_QMARK_(inst_34708__$1);
var state_34723__$1 = (function (){var statearr_34734 = state_34723;
(statearr_34734[(9)] = inst_34708__$1);

return statearr_34734;
})();
if(inst_34709){
var statearr_34735_36979 = state_34723__$1;
(statearr_34735_36979[(1)] = (8));

} else {
var statearr_34736_36980 = state_34723__$1;
(statearr_34736_36980[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34724 === (3))){
var inst_34720 = (state_34723[(2)]);
var state_34723__$1 = state_34723;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34723__$1,inst_34720);
} else {
if((state_val_34724 === (2))){
var state_34723__$1 = state_34723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34723__$1,(4),ch);
} else {
if((state_val_34724 === (9))){
var inst_34708 = (state_34723[(9)]);
var inst_34701 = inst_34708;
var state_34723__$1 = (function (){var statearr_34738 = state_34723;
(statearr_34738[(7)] = inst_34701);

return statearr_34738;
})();
var statearr_34739_36982 = state_34723__$1;
(statearr_34739_36982[(2)] = null);

(statearr_34739_36982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34724 === (5))){
var inst_34701 = (state_34723[(7)]);
var state_34723__$1 = state_34723;
var statearr_34740_36983 = state_34723__$1;
(statearr_34740_36983[(2)] = inst_34701);

(statearr_34740_36983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34724 === (10))){
var inst_34716 = (state_34723[(2)]);
var state_34723__$1 = state_34723;
var statearr_34741_36985 = state_34723__$1;
(statearr_34741_36985[(2)] = inst_34716);

(statearr_34741_36985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34724 === (8))){
var inst_34708 = (state_34723[(9)]);
var inst_34711 = cljs.core.deref(inst_34708);
var state_34723__$1 = state_34723;
var statearr_34742_36986 = state_34723__$1;
(statearr_34742_36986[(2)] = inst_34711);

(statearr_34742_36986[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__34200__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34200__auto____0 = (function (){
var statearr_34743 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34743[(0)] = cljs$core$async$reduce_$_state_machine__34200__auto__);

(statearr_34743[(1)] = (1));

return statearr_34743;
});
var cljs$core$async$reduce_$_state_machine__34200__auto____1 = (function (state_34723){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34723);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34747){if((e34747 instanceof Object)){
var ex__34203__auto__ = e34747;
var statearr_34748_36989 = state_34723;
(statearr_34748_36989[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34747;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36990 = state_34723;
state_34723 = G__36990;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34200__auto__ = function(state_34723){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34200__auto____1.call(this,state_34723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34200__auto____0;
cljs$core$async$reduce_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34200__auto____1;
return cljs$core$async$reduce_$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34749 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34749[(6)] = c__34267__auto__);

return statearr_34749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));

return c__34267__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__34267__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34758){
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
var cljs$core$async$transduce_$_state_machine__34200__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34200__auto____0 = (function (){
var statearr_34760 = [null,null,null,null,null,null,null];
(statearr_34760[(0)] = cljs$core$async$transduce_$_state_machine__34200__auto__);

(statearr_34760[(1)] = (1));

return statearr_34760;
});
var cljs$core$async$transduce_$_state_machine__34200__auto____1 = (function (state_34758){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34758);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34761){if((e34761 instanceof Object)){
var ex__34203__auto__ = e34761;
var statearr_34762_36995 = state_34758;
(statearr_34762_36995[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34761;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36996 = state_34758;
state_34758 = G__36996;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34200__auto__ = function(state_34758){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34200__auto____1.call(this,state_34758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34200__auto____0;
cljs$core$async$transduce_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34200__auto____1;
return cljs$core$async$transduce_$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34766 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34766[(6)] = c__34267__auto__);

return statearr_34766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));

return c__34267__auto__;
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
var G__34768 = arguments.length;
switch (G__34768) {
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
var c__34267__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34793){
var state_val_34794 = (state_34793[(1)]);
if((state_val_34794 === (7))){
var inst_34775 = (state_34793[(2)]);
var state_34793__$1 = state_34793;
var statearr_34795_37000 = state_34793__$1;
(statearr_34795_37000[(2)] = inst_34775);

(statearr_34795_37000[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (1))){
var inst_34769 = cljs.core.seq(coll);
var inst_34770 = inst_34769;
var state_34793__$1 = (function (){var statearr_34796 = state_34793;
(statearr_34796[(7)] = inst_34770);

return statearr_34796;
})();
var statearr_34797_37002 = state_34793__$1;
(statearr_34797_37002[(2)] = null);

(statearr_34797_37002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (4))){
var inst_34770 = (state_34793[(7)]);
var inst_34773 = cljs.core.first(inst_34770);
var state_34793__$1 = state_34793;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34793__$1,(7),ch,inst_34773);
} else {
if((state_val_34794 === (13))){
var inst_34787 = (state_34793[(2)]);
var state_34793__$1 = state_34793;
var statearr_34798_37004 = state_34793__$1;
(statearr_34798_37004[(2)] = inst_34787);

(statearr_34798_37004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (6))){
var inst_34778 = (state_34793[(2)]);
var state_34793__$1 = state_34793;
if(cljs.core.truth_(inst_34778)){
var statearr_34799_37005 = state_34793__$1;
(statearr_34799_37005[(1)] = (8));

} else {
var statearr_34800_37007 = state_34793__$1;
(statearr_34800_37007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (3))){
var inst_34791 = (state_34793[(2)]);
var state_34793__$1 = state_34793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34793__$1,inst_34791);
} else {
if((state_val_34794 === (12))){
var state_34793__$1 = state_34793;
var statearr_34801_37008 = state_34793__$1;
(statearr_34801_37008[(2)] = null);

(statearr_34801_37008[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (2))){
var inst_34770 = (state_34793[(7)]);
var state_34793__$1 = state_34793;
if(cljs.core.truth_(inst_34770)){
var statearr_34802_37010 = state_34793__$1;
(statearr_34802_37010[(1)] = (4));

} else {
var statearr_34803_37011 = state_34793__$1;
(statearr_34803_37011[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (11))){
var inst_34784 = cljs.core.async.close_BANG_(ch);
var state_34793__$1 = state_34793;
var statearr_34804_37013 = state_34793__$1;
(statearr_34804_37013[(2)] = inst_34784);

(statearr_34804_37013[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (9))){
var state_34793__$1 = state_34793;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34805_37014 = state_34793__$1;
(statearr_34805_37014[(1)] = (11));

} else {
var statearr_34806_37015 = state_34793__$1;
(statearr_34806_37015[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (5))){
var inst_34770 = (state_34793[(7)]);
var state_34793__$1 = state_34793;
var statearr_34807_37017 = state_34793__$1;
(statearr_34807_37017[(2)] = inst_34770);

(statearr_34807_37017[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (10))){
var inst_34789 = (state_34793[(2)]);
var state_34793__$1 = state_34793;
var statearr_34808_37018 = state_34793__$1;
(statearr_34808_37018[(2)] = inst_34789);

(statearr_34808_37018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (8))){
var inst_34770 = (state_34793[(7)]);
var inst_34780 = cljs.core.next(inst_34770);
var inst_34770__$1 = inst_34780;
var state_34793__$1 = (function (){var statearr_34809 = state_34793;
(statearr_34809[(7)] = inst_34770__$1);

return statearr_34809;
})();
var statearr_34810_37020 = state_34793__$1;
(statearr_34810_37020[(2)] = null);

(statearr_34810_37020[(1)] = (2));


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
var cljs$core$async$state_machine__34200__auto__ = null;
var cljs$core$async$state_machine__34200__auto____0 = (function (){
var statearr_34814 = [null,null,null,null,null,null,null,null];
(statearr_34814[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_34814[(1)] = (1));

return statearr_34814;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_34793){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34793);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34818){if((e34818 instanceof Object)){
var ex__34203__auto__ = e34818;
var statearr_34819_37022 = state_34793;
(statearr_34819_37022[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34818;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37024 = state_34793;
state_34793 = G__37024;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_34793){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_34793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34821 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34821[(6)] = c__34267__auto__);

return statearr_34821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));

return c__34267__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34831 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34831 = (function (ch,cs,meta34832){
this.ch = ch;
this.cs = cs;
this.meta34832 = meta34832;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34833,meta34832__$1){
var self__ = this;
var _34833__$1 = this;
return (new cljs.core.async.t_cljs$core$async34831(self__.ch,self__.cs,meta34832__$1));
}));

(cljs.core.async.t_cljs$core$async34831.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34833){
var self__ = this;
var _34833__$1 = this;
return self__.meta34832;
}));

(cljs.core.async.t_cljs$core$async34831.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34831.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34831.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34831.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34831.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34831.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34831.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34832","meta34832",1371517407,null)], null);
}));

(cljs.core.async.t_cljs$core$async34831.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34831.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34831");

(cljs.core.async.t_cljs$core$async34831.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34831");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34831.
 */
cljs.core.async.__GT_t_cljs$core$async34831 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34831(ch__$1,cs__$1,meta34832){
return (new cljs.core.async.t_cljs$core$async34831(ch__$1,cs__$1,meta34832));
});

}

return (new cljs.core.async.t_cljs$core$async34831(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34267__auto___37040 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34971){
var state_val_34972 = (state_34971[(1)]);
if((state_val_34972 === (7))){
var inst_34967 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
var statearr_34973_37041 = state_34971__$1;
(statearr_34973_37041[(2)] = inst_34967);

(statearr_34973_37041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (20))){
var inst_34870 = (state_34971[(7)]);
var inst_34882 = cljs.core.first(inst_34870);
var inst_34883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34882,(0),null);
var inst_34884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34882,(1),null);
var state_34971__$1 = (function (){var statearr_34974 = state_34971;
(statearr_34974[(8)] = inst_34883);

return statearr_34974;
})();
if(cljs.core.truth_(inst_34884)){
var statearr_34975_37042 = state_34971__$1;
(statearr_34975_37042[(1)] = (22));

} else {
var statearr_34976_37043 = state_34971__$1;
(statearr_34976_37043[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (27))){
var inst_34914 = (state_34971[(9)]);
var inst_34919 = (state_34971[(10)]);
var inst_34912 = (state_34971[(11)]);
var inst_34839 = (state_34971[(12)]);
var inst_34919__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34912,inst_34914);
var inst_34920 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34919__$1,inst_34839,done);
var state_34971__$1 = (function (){var statearr_34977 = state_34971;
(statearr_34977[(10)] = inst_34919__$1);

return statearr_34977;
})();
if(cljs.core.truth_(inst_34920)){
var statearr_34978_37044 = state_34971__$1;
(statearr_34978_37044[(1)] = (30));

} else {
var statearr_34979_37045 = state_34971__$1;
(statearr_34979_37045[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (1))){
var state_34971__$1 = state_34971;
var statearr_34980_37046 = state_34971__$1;
(statearr_34980_37046[(2)] = null);

(statearr_34980_37046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (24))){
var inst_34870 = (state_34971[(7)]);
var inst_34889 = (state_34971[(2)]);
var inst_34890 = cljs.core.next(inst_34870);
var inst_34848 = inst_34890;
var inst_34849 = null;
var inst_34850 = (0);
var inst_34851 = (0);
var state_34971__$1 = (function (){var statearr_34981 = state_34971;
(statearr_34981[(13)] = inst_34848);

(statearr_34981[(14)] = inst_34849);

(statearr_34981[(15)] = inst_34851);

(statearr_34981[(16)] = inst_34850);

(statearr_34981[(17)] = inst_34889);

return statearr_34981;
})();
var statearr_34982_37049 = state_34971__$1;
(statearr_34982_37049[(2)] = null);

(statearr_34982_37049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (39))){
var state_34971__$1 = state_34971;
var statearr_34986_37052 = state_34971__$1;
(statearr_34986_37052[(2)] = null);

(statearr_34986_37052[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (4))){
var inst_34839 = (state_34971[(12)]);
var inst_34839__$1 = (state_34971[(2)]);
var inst_34840 = (inst_34839__$1 == null);
var state_34971__$1 = (function (){var statearr_34987 = state_34971;
(statearr_34987[(12)] = inst_34839__$1);

return statearr_34987;
})();
if(cljs.core.truth_(inst_34840)){
var statearr_34988_37055 = state_34971__$1;
(statearr_34988_37055[(1)] = (5));

} else {
var statearr_34989_37056 = state_34971__$1;
(statearr_34989_37056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (15))){
var inst_34848 = (state_34971[(13)]);
var inst_34849 = (state_34971[(14)]);
var inst_34851 = (state_34971[(15)]);
var inst_34850 = (state_34971[(16)]);
var inst_34866 = (state_34971[(2)]);
var inst_34867 = (inst_34851 + (1));
var tmp34983 = inst_34848;
var tmp34984 = inst_34849;
var tmp34985 = inst_34850;
var inst_34848__$1 = tmp34983;
var inst_34849__$1 = tmp34984;
var inst_34850__$1 = tmp34985;
var inst_34851__$1 = inst_34867;
var state_34971__$1 = (function (){var statearr_34990 = state_34971;
(statearr_34990[(13)] = inst_34848__$1);

(statearr_34990[(18)] = inst_34866);

(statearr_34990[(14)] = inst_34849__$1);

(statearr_34990[(15)] = inst_34851__$1);

(statearr_34990[(16)] = inst_34850__$1);

return statearr_34990;
})();
var statearr_34991_37089 = state_34971__$1;
(statearr_34991_37089[(2)] = null);

(statearr_34991_37089[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (21))){
var inst_34893 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
var statearr_34995_37091 = state_34971__$1;
(statearr_34995_37091[(2)] = inst_34893);

(statearr_34995_37091[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (31))){
var inst_34919 = (state_34971[(10)]);
var inst_34923 = done(null);
var inst_34924 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34919);
var state_34971__$1 = (function (){var statearr_34996 = state_34971;
(statearr_34996[(19)] = inst_34923);

return statearr_34996;
})();
var statearr_34997_37098 = state_34971__$1;
(statearr_34997_37098[(2)] = inst_34924);

(statearr_34997_37098[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (32))){
var inst_34914 = (state_34971[(9)]);
var inst_34913 = (state_34971[(20)]);
var inst_34912 = (state_34971[(11)]);
var inst_34911 = (state_34971[(21)]);
var inst_34926 = (state_34971[(2)]);
var inst_34927 = (inst_34914 + (1));
var tmp34992 = inst_34913;
var tmp34993 = inst_34912;
var tmp34994 = inst_34911;
var inst_34911__$1 = tmp34994;
var inst_34912__$1 = tmp34993;
var inst_34913__$1 = tmp34992;
var inst_34914__$1 = inst_34927;
var state_34971__$1 = (function (){var statearr_34998 = state_34971;
(statearr_34998[(9)] = inst_34914__$1);

(statearr_34998[(22)] = inst_34926);

(statearr_34998[(20)] = inst_34913__$1);

(statearr_34998[(11)] = inst_34912__$1);

(statearr_34998[(21)] = inst_34911__$1);

return statearr_34998;
})();
var statearr_34999_37107 = state_34971__$1;
(statearr_34999_37107[(2)] = null);

(statearr_34999_37107[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (40))){
var inst_34939 = (state_34971[(23)]);
var inst_34943 = done(null);
var inst_34944 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34939);
var state_34971__$1 = (function (){var statearr_35000 = state_34971;
(statearr_35000[(24)] = inst_34943);

return statearr_35000;
})();
var statearr_35001_37119 = state_34971__$1;
(statearr_35001_37119[(2)] = inst_34944);

(statearr_35001_37119[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (33))){
var inst_34930 = (state_34971[(25)]);
var inst_34932 = cljs.core.chunked_seq_QMARK_(inst_34930);
var state_34971__$1 = state_34971;
if(inst_34932){
var statearr_35002_37120 = state_34971__$1;
(statearr_35002_37120[(1)] = (36));

} else {
var statearr_35003_37123 = state_34971__$1;
(statearr_35003_37123[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (13))){
var inst_34860 = (state_34971[(26)]);
var inst_34863 = cljs.core.async.close_BANG_(inst_34860);
var state_34971__$1 = state_34971;
var statearr_35004_37126 = state_34971__$1;
(statearr_35004_37126[(2)] = inst_34863);

(statearr_35004_37126[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (22))){
var inst_34883 = (state_34971[(8)]);
var inst_34886 = cljs.core.async.close_BANG_(inst_34883);
var state_34971__$1 = state_34971;
var statearr_35005_37128 = state_34971__$1;
(statearr_35005_37128[(2)] = inst_34886);

(statearr_35005_37128[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (36))){
var inst_34930 = (state_34971[(25)]);
var inst_34934 = cljs.core.chunk_first(inst_34930);
var inst_34935 = cljs.core.chunk_rest(inst_34930);
var inst_34936 = cljs.core.count(inst_34934);
var inst_34911 = inst_34935;
var inst_34912 = inst_34934;
var inst_34913 = inst_34936;
var inst_34914 = (0);
var state_34971__$1 = (function (){var statearr_35006 = state_34971;
(statearr_35006[(9)] = inst_34914);

(statearr_35006[(20)] = inst_34913);

(statearr_35006[(11)] = inst_34912);

(statearr_35006[(21)] = inst_34911);

return statearr_35006;
})();
var statearr_35007_37137 = state_34971__$1;
(statearr_35007_37137[(2)] = null);

(statearr_35007_37137[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (41))){
var inst_34930 = (state_34971[(25)]);
var inst_34946 = (state_34971[(2)]);
var inst_34947 = cljs.core.next(inst_34930);
var inst_34911 = inst_34947;
var inst_34912 = null;
var inst_34913 = (0);
var inst_34914 = (0);
var state_34971__$1 = (function (){var statearr_35010 = state_34971;
(statearr_35010[(27)] = inst_34946);

(statearr_35010[(9)] = inst_34914);

(statearr_35010[(20)] = inst_34913);

(statearr_35010[(11)] = inst_34912);

(statearr_35010[(21)] = inst_34911);

return statearr_35010;
})();
var statearr_35013_37146 = state_34971__$1;
(statearr_35013_37146[(2)] = null);

(statearr_35013_37146[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (43))){
var state_34971__$1 = state_34971;
var statearr_35016_37149 = state_34971__$1;
(statearr_35016_37149[(2)] = null);

(statearr_35016_37149[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (29))){
var inst_34955 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
var statearr_35017_37150 = state_34971__$1;
(statearr_35017_37150[(2)] = inst_34955);

(statearr_35017_37150[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (44))){
var inst_34964 = (state_34971[(2)]);
var state_34971__$1 = (function (){var statearr_35018 = state_34971;
(statearr_35018[(28)] = inst_34964);

return statearr_35018;
})();
var statearr_35019_37152 = state_34971__$1;
(statearr_35019_37152[(2)] = null);

(statearr_35019_37152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (6))){
var inst_34903 = (state_34971[(29)]);
var inst_34902 = cljs.core.deref(cs);
var inst_34903__$1 = cljs.core.keys(inst_34902);
var inst_34904 = cljs.core.count(inst_34903__$1);
var inst_34905 = cljs.core.reset_BANG_(dctr,inst_34904);
var inst_34910 = cljs.core.seq(inst_34903__$1);
var inst_34911 = inst_34910;
var inst_34912 = null;
var inst_34913 = (0);
var inst_34914 = (0);
var state_34971__$1 = (function (){var statearr_35020 = state_34971;
(statearr_35020[(30)] = inst_34905);

(statearr_35020[(9)] = inst_34914);

(statearr_35020[(20)] = inst_34913);

(statearr_35020[(29)] = inst_34903__$1);

(statearr_35020[(11)] = inst_34912);

(statearr_35020[(21)] = inst_34911);

return statearr_35020;
})();
var statearr_35021_37160 = state_34971__$1;
(statearr_35021_37160[(2)] = null);

(statearr_35021_37160[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (28))){
var inst_34930 = (state_34971[(25)]);
var inst_34911 = (state_34971[(21)]);
var inst_34930__$1 = cljs.core.seq(inst_34911);
var state_34971__$1 = (function (){var statearr_35022 = state_34971;
(statearr_35022[(25)] = inst_34930__$1);

return statearr_35022;
})();
if(inst_34930__$1){
var statearr_35023_37163 = state_34971__$1;
(statearr_35023_37163[(1)] = (33));

} else {
var statearr_35026_37167 = state_34971__$1;
(statearr_35026_37167[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (25))){
var inst_34914 = (state_34971[(9)]);
var inst_34913 = (state_34971[(20)]);
var inst_34916 = (inst_34914 < inst_34913);
var inst_34917 = inst_34916;
var state_34971__$1 = state_34971;
if(cljs.core.truth_(inst_34917)){
var statearr_35029_37170 = state_34971__$1;
(statearr_35029_37170[(1)] = (27));

} else {
var statearr_35031_37172 = state_34971__$1;
(statearr_35031_37172[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (34))){
var state_34971__$1 = state_34971;
var statearr_35032_37173 = state_34971__$1;
(statearr_35032_37173[(2)] = null);

(statearr_35032_37173[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (17))){
var state_34971__$1 = state_34971;
var statearr_35033_37176 = state_34971__$1;
(statearr_35033_37176[(2)] = null);

(statearr_35033_37176[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (3))){
var inst_34969 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34971__$1,inst_34969);
} else {
if((state_val_34972 === (12))){
var inst_34898 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
var statearr_35035_37181 = state_34971__$1;
(statearr_35035_37181[(2)] = inst_34898);

(statearr_35035_37181[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (2))){
var state_34971__$1 = state_34971;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34971__$1,(4),ch);
} else {
if((state_val_34972 === (23))){
var state_34971__$1 = state_34971;
var statearr_35036_37186 = state_34971__$1;
(statearr_35036_37186[(2)] = null);

(statearr_35036_37186[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (35))){
var inst_34953 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
var statearr_35037_37188 = state_34971__$1;
(statearr_35037_37188[(2)] = inst_34953);

(statearr_35037_37188[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (19))){
var inst_34870 = (state_34971[(7)]);
var inst_34874 = cljs.core.chunk_first(inst_34870);
var inst_34875 = cljs.core.chunk_rest(inst_34870);
var inst_34876 = cljs.core.count(inst_34874);
var inst_34848 = inst_34875;
var inst_34849 = inst_34874;
var inst_34850 = inst_34876;
var inst_34851 = (0);
var state_34971__$1 = (function (){var statearr_35038 = state_34971;
(statearr_35038[(13)] = inst_34848);

(statearr_35038[(14)] = inst_34849);

(statearr_35038[(15)] = inst_34851);

(statearr_35038[(16)] = inst_34850);

return statearr_35038;
})();
var statearr_35039_37192 = state_34971__$1;
(statearr_35039_37192[(2)] = null);

(statearr_35039_37192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (11))){
var inst_34848 = (state_34971[(13)]);
var inst_34870 = (state_34971[(7)]);
var inst_34870__$1 = cljs.core.seq(inst_34848);
var state_34971__$1 = (function (){var statearr_35042 = state_34971;
(statearr_35042[(7)] = inst_34870__$1);

return statearr_35042;
})();
if(inst_34870__$1){
var statearr_35045_37194 = state_34971__$1;
(statearr_35045_37194[(1)] = (16));

} else {
var statearr_35046_37195 = state_34971__$1;
(statearr_35046_37195[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (9))){
var inst_34900 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
var statearr_35049_37198 = state_34971__$1;
(statearr_35049_37198[(2)] = inst_34900);

(statearr_35049_37198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (5))){
var inst_34846 = cljs.core.deref(cs);
var inst_34847 = cljs.core.seq(inst_34846);
var inst_34848 = inst_34847;
var inst_34849 = null;
var inst_34850 = (0);
var inst_34851 = (0);
var state_34971__$1 = (function (){var statearr_35050 = state_34971;
(statearr_35050[(13)] = inst_34848);

(statearr_35050[(14)] = inst_34849);

(statearr_35050[(15)] = inst_34851);

(statearr_35050[(16)] = inst_34850);

return statearr_35050;
})();
var statearr_35051_37207 = state_34971__$1;
(statearr_35051_37207[(2)] = null);

(statearr_35051_37207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (14))){
var state_34971__$1 = state_34971;
var statearr_35052_37208 = state_34971__$1;
(statearr_35052_37208[(2)] = null);

(statearr_35052_37208[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (45))){
var inst_34961 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
var statearr_35053_37209 = state_34971__$1;
(statearr_35053_37209[(2)] = inst_34961);

(statearr_35053_37209[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (26))){
var inst_34903 = (state_34971[(29)]);
var inst_34957 = (state_34971[(2)]);
var inst_34958 = cljs.core.seq(inst_34903);
var state_34971__$1 = (function (){var statearr_35055 = state_34971;
(statearr_35055[(31)] = inst_34957);

return statearr_35055;
})();
if(inst_34958){
var statearr_35057_37216 = state_34971__$1;
(statearr_35057_37216[(1)] = (42));

} else {
var statearr_35058_37217 = state_34971__$1;
(statearr_35058_37217[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (16))){
var inst_34870 = (state_34971[(7)]);
var inst_34872 = cljs.core.chunked_seq_QMARK_(inst_34870);
var state_34971__$1 = state_34971;
if(inst_34872){
var statearr_35062_37222 = state_34971__$1;
(statearr_35062_37222[(1)] = (19));

} else {
var statearr_35064_37223 = state_34971__$1;
(statearr_35064_37223[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (38))){
var inst_34950 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
var statearr_35065_37228 = state_34971__$1;
(statearr_35065_37228[(2)] = inst_34950);

(statearr_35065_37228[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (30))){
var state_34971__$1 = state_34971;
var statearr_35066_37235 = state_34971__$1;
(statearr_35066_37235[(2)] = null);

(statearr_35066_37235[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (10))){
var inst_34849 = (state_34971[(14)]);
var inst_34851 = (state_34971[(15)]);
var inst_34859 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34849,inst_34851);
var inst_34860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34859,(0),null);
var inst_34861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34859,(1),null);
var state_34971__$1 = (function (){var statearr_35068 = state_34971;
(statearr_35068[(26)] = inst_34860);

return statearr_35068;
})();
if(cljs.core.truth_(inst_34861)){
var statearr_35071_37240 = state_34971__$1;
(statearr_35071_37240[(1)] = (13));

} else {
var statearr_35073_37244 = state_34971__$1;
(statearr_35073_37244[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (18))){
var inst_34896 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
var statearr_35074_37247 = state_34971__$1;
(statearr_35074_37247[(2)] = inst_34896);

(statearr_35074_37247[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (42))){
var state_34971__$1 = state_34971;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34971__$1,(45),dchan);
} else {
if((state_val_34972 === (37))){
var inst_34930 = (state_34971[(25)]);
var inst_34839 = (state_34971[(12)]);
var inst_34939 = (state_34971[(23)]);
var inst_34939__$1 = cljs.core.first(inst_34930);
var inst_34940 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34939__$1,inst_34839,done);
var state_34971__$1 = (function (){var statearr_35092 = state_34971;
(statearr_35092[(23)] = inst_34939__$1);

return statearr_35092;
})();
if(cljs.core.truth_(inst_34940)){
var statearr_35095_37253 = state_34971__$1;
(statearr_35095_37253[(1)] = (39));

} else {
var statearr_35096_37254 = state_34971__$1;
(statearr_35096_37254[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (8))){
var inst_34851 = (state_34971[(15)]);
var inst_34850 = (state_34971[(16)]);
var inst_34853 = (inst_34851 < inst_34850);
var inst_34854 = inst_34853;
var state_34971__$1 = state_34971;
if(cljs.core.truth_(inst_34854)){
var statearr_35097_37277 = state_34971__$1;
(statearr_35097_37277[(1)] = (10));

} else {
var statearr_35099_37279 = state_34971__$1;
(statearr_35099_37279[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__34200__auto__ = null;
var cljs$core$async$mult_$_state_machine__34200__auto____0 = (function (){
var statearr_35108 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35108[(0)] = cljs$core$async$mult_$_state_machine__34200__auto__);

(statearr_35108[(1)] = (1));

return statearr_35108;
});
var cljs$core$async$mult_$_state_machine__34200__auto____1 = (function (state_34971){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34971);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e35112){if((e35112 instanceof Object)){
var ex__34203__auto__ = e35112;
var statearr_35115_37284 = state_34971;
(statearr_35115_37284[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35112;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37286 = state_34971;
state_34971 = G__37286;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34200__auto__ = function(state_34971){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34200__auto____1.call(this,state_34971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34200__auto____0;
cljs$core$async$mult_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34200__auto____1;
return cljs$core$async$mult_$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_35124 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_35124[(6)] = c__34267__auto___37040);

return statearr_35124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
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
var G__35136 = arguments.length;
switch (G__35136) {
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
var len__4789__auto___37329 = arguments.length;
var i__4790__auto___37330 = (0);
while(true){
if((i__4790__auto___37330 < len__4789__auto___37329)){
args__4795__auto__.push((arguments[i__4790__auto___37330]));

var G__37331 = (i__4790__auto___37330 + (1));
i__4790__auto___37330 = G__37331;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35245){
var map__35247 = p__35245;
var map__35247__$1 = (((((!((map__35247 == null))))?(((((map__35247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35247):map__35247);
var opts = map__35247__$1;
var statearr_35255_37338 = state;
(statearr_35255_37338[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35261_37339 = state;
(statearr_35261_37339[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35265_37340 = state;
(statearr_35265_37340[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35223){
var G__35224 = cljs.core.first(seq35223);
var seq35223__$1 = cljs.core.next(seq35223);
var G__35225 = cljs.core.first(seq35223__$1);
var seq35223__$2 = cljs.core.next(seq35223__$1);
var G__35226 = cljs.core.first(seq35223__$2);
var seq35223__$3 = cljs.core.next(seq35223__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35224,G__35225,G__35226,seq35223__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35311 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35311 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35312){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35312 = meta35312;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35313,meta35312__$1){
var self__ = this;
var _35313__$1 = this;
return (new cljs.core.async.t_cljs$core$async35311(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35312__$1));
}));

(cljs.core.async.t_cljs$core$async35311.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35313){
var self__ = this;
var _35313__$1 = this;
return self__.meta35312;
}));

(cljs.core.async.t_cljs$core$async35311.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35311.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35311.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35311.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35311.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35311.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35311.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35311.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35311.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35312","meta35312",1433310316,null)], null);
}));

(cljs.core.async.t_cljs$core$async35311.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35311.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35311");

(cljs.core.async.t_cljs$core$async35311.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35311");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35311.
 */
cljs.core.async.__GT_t_cljs$core$async35311 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35311(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35312){
return (new cljs.core.async.t_cljs$core$async35311(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35312));
});

}

return (new cljs.core.async.t_cljs$core$async35311(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34267__auto___37397 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_35470){
var state_val_35471 = (state_35470[(1)]);
if((state_val_35471 === (7))){
var inst_35381 = (state_35470[(2)]);
var state_35470__$1 = state_35470;
var statearr_35477_37400 = state_35470__$1;
(statearr_35477_37400[(2)] = inst_35381);

(statearr_35477_37400[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (20))){
var inst_35393 = (state_35470[(7)]);
var state_35470__$1 = state_35470;
var statearr_35480_37406 = state_35470__$1;
(statearr_35480_37406[(2)] = inst_35393);

(statearr_35480_37406[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (27))){
var state_35470__$1 = state_35470;
var statearr_35483_37407 = state_35470__$1;
(statearr_35483_37407[(2)] = null);

(statearr_35483_37407[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (1))){
var inst_35368 = (state_35470[(8)]);
var inst_35368__$1 = calc_state();
var inst_35370 = (inst_35368__$1 == null);
var inst_35371 = cljs.core.not(inst_35370);
var state_35470__$1 = (function (){var statearr_35485 = state_35470;
(statearr_35485[(8)] = inst_35368__$1);

return statearr_35485;
})();
if(inst_35371){
var statearr_35486_37410 = state_35470__$1;
(statearr_35486_37410[(1)] = (2));

} else {
var statearr_35491_37416 = state_35470__$1;
(statearr_35491_37416[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (24))){
var inst_35428 = (state_35470[(9)]);
var inst_35419 = (state_35470[(10)]);
var inst_35442 = (state_35470[(11)]);
var inst_35442__$1 = (inst_35419.cljs$core$IFn$_invoke$arity$1 ? inst_35419.cljs$core$IFn$_invoke$arity$1(inst_35428) : inst_35419.call(null,inst_35428));
var state_35470__$1 = (function (){var statearr_35498 = state_35470;
(statearr_35498[(11)] = inst_35442__$1);

return statearr_35498;
})();
if(cljs.core.truth_(inst_35442__$1)){
var statearr_35499_37419 = state_35470__$1;
(statearr_35499_37419[(1)] = (29));

} else {
var statearr_35503_37420 = state_35470__$1;
(statearr_35503_37420[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (4))){
var inst_35384 = (state_35470[(2)]);
var state_35470__$1 = state_35470;
if(cljs.core.truth_(inst_35384)){
var statearr_35507_37423 = state_35470__$1;
(statearr_35507_37423[(1)] = (8));

} else {
var statearr_35508_37425 = state_35470__$1;
(statearr_35508_37425[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (15))){
var inst_35413 = (state_35470[(2)]);
var state_35470__$1 = state_35470;
if(cljs.core.truth_(inst_35413)){
var statearr_35509_37427 = state_35470__$1;
(statearr_35509_37427[(1)] = (19));

} else {
var statearr_35510_37428 = state_35470__$1;
(statearr_35510_37428[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (21))){
var inst_35418 = (state_35470[(12)]);
var inst_35418__$1 = (state_35470[(2)]);
var inst_35419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35418__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35418__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35421 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35418__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35470__$1 = (function (){var statearr_35513 = state_35470;
(statearr_35513[(10)] = inst_35419);

(statearr_35513[(12)] = inst_35418__$1);

(statearr_35513[(13)] = inst_35420);

return statearr_35513;
})();
return cljs.core.async.ioc_alts_BANG_(state_35470__$1,(22),inst_35421);
} else {
if((state_val_35471 === (31))){
var inst_35452 = (state_35470[(2)]);
var state_35470__$1 = state_35470;
if(cljs.core.truth_(inst_35452)){
var statearr_35514_37434 = state_35470__$1;
(statearr_35514_37434[(1)] = (32));

} else {
var statearr_35517_37438 = state_35470__$1;
(statearr_35517_37438[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (32))){
var inst_35427 = (state_35470[(14)]);
var state_35470__$1 = state_35470;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35470__$1,(35),out,inst_35427);
} else {
if((state_val_35471 === (33))){
var inst_35418 = (state_35470[(12)]);
var inst_35393 = inst_35418;
var state_35470__$1 = (function (){var statearr_35523 = state_35470;
(statearr_35523[(7)] = inst_35393);

return statearr_35523;
})();
var statearr_35524_37441 = state_35470__$1;
(statearr_35524_37441[(2)] = null);

(statearr_35524_37441[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (13))){
var inst_35393 = (state_35470[(7)]);
var inst_35402 = inst_35393.cljs$lang$protocol_mask$partition0$;
var inst_35403 = (inst_35402 & (64));
var inst_35404 = inst_35393.cljs$core$ISeq$;
var inst_35405 = (cljs.core.PROTOCOL_SENTINEL === inst_35404);
var inst_35406 = ((inst_35403) || (inst_35405));
var state_35470__$1 = state_35470;
if(cljs.core.truth_(inst_35406)){
var statearr_35529_37444 = state_35470__$1;
(statearr_35529_37444[(1)] = (16));

} else {
var statearr_35531_37445 = state_35470__$1;
(statearr_35531_37445[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (22))){
var inst_35428 = (state_35470[(9)]);
var inst_35427 = (state_35470[(14)]);
var inst_35426 = (state_35470[(2)]);
var inst_35427__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35426,(0),null);
var inst_35428__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35426,(1),null);
var inst_35429 = (inst_35427__$1 == null);
var inst_35430 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35428__$1,change);
var inst_35431 = ((inst_35429) || (inst_35430));
var state_35470__$1 = (function (){var statearr_35543 = state_35470;
(statearr_35543[(9)] = inst_35428__$1);

(statearr_35543[(14)] = inst_35427__$1);

return statearr_35543;
})();
if(cljs.core.truth_(inst_35431)){
var statearr_35545_37453 = state_35470__$1;
(statearr_35545_37453[(1)] = (23));

} else {
var statearr_35546_37454 = state_35470__$1;
(statearr_35546_37454[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (36))){
var inst_35418 = (state_35470[(12)]);
var inst_35393 = inst_35418;
var state_35470__$1 = (function (){var statearr_35547 = state_35470;
(statearr_35547[(7)] = inst_35393);

return statearr_35547;
})();
var statearr_35548_37456 = state_35470__$1;
(statearr_35548_37456[(2)] = null);

(statearr_35548_37456[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (29))){
var inst_35442 = (state_35470[(11)]);
var state_35470__$1 = state_35470;
var statearr_35551_37457 = state_35470__$1;
(statearr_35551_37457[(2)] = inst_35442);

(statearr_35551_37457[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (6))){
var state_35470__$1 = state_35470;
var statearr_35554_37461 = state_35470__$1;
(statearr_35554_37461[(2)] = false);

(statearr_35554_37461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (28))){
var inst_35438 = (state_35470[(2)]);
var inst_35439 = calc_state();
var inst_35393 = inst_35439;
var state_35470__$1 = (function (){var statearr_35574 = state_35470;
(statearr_35574[(7)] = inst_35393);

(statearr_35574[(15)] = inst_35438);

return statearr_35574;
})();
var statearr_35577_37463 = state_35470__$1;
(statearr_35577_37463[(2)] = null);

(statearr_35577_37463[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (25))){
var inst_35466 = (state_35470[(2)]);
var state_35470__$1 = state_35470;
var statearr_35578_37465 = state_35470__$1;
(statearr_35578_37465[(2)] = inst_35466);

(statearr_35578_37465[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (34))){
var inst_35464 = (state_35470[(2)]);
var state_35470__$1 = state_35470;
var statearr_35579_37468 = state_35470__$1;
(statearr_35579_37468[(2)] = inst_35464);

(statearr_35579_37468[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (17))){
var state_35470__$1 = state_35470;
var statearr_35582_37469 = state_35470__$1;
(statearr_35582_37469[(2)] = false);

(statearr_35582_37469[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (3))){
var state_35470__$1 = state_35470;
var statearr_35586_37472 = state_35470__$1;
(statearr_35586_37472[(2)] = false);

(statearr_35586_37472[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (12))){
var inst_35468 = (state_35470[(2)]);
var state_35470__$1 = state_35470;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35470__$1,inst_35468);
} else {
if((state_val_35471 === (2))){
var inst_35368 = (state_35470[(8)]);
var inst_35373 = inst_35368.cljs$lang$protocol_mask$partition0$;
var inst_35374 = (inst_35373 & (64));
var inst_35375 = inst_35368.cljs$core$ISeq$;
var inst_35376 = (cljs.core.PROTOCOL_SENTINEL === inst_35375);
var inst_35377 = ((inst_35374) || (inst_35376));
var state_35470__$1 = state_35470;
if(cljs.core.truth_(inst_35377)){
var statearr_35593_37478 = state_35470__$1;
(statearr_35593_37478[(1)] = (5));

} else {
var statearr_35595_37479 = state_35470__$1;
(statearr_35595_37479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (23))){
var inst_35427 = (state_35470[(14)]);
var inst_35433 = (inst_35427 == null);
var state_35470__$1 = state_35470;
if(cljs.core.truth_(inst_35433)){
var statearr_35600_37482 = state_35470__$1;
(statearr_35600_37482[(1)] = (26));

} else {
var statearr_35605_37486 = state_35470__$1;
(statearr_35605_37486[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (35))){
var inst_35455 = (state_35470[(2)]);
var state_35470__$1 = state_35470;
if(cljs.core.truth_(inst_35455)){
var statearr_35608_37489 = state_35470__$1;
(statearr_35608_37489[(1)] = (36));

} else {
var statearr_35610_37493 = state_35470__$1;
(statearr_35610_37493[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (19))){
var inst_35393 = (state_35470[(7)]);
var inst_35415 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35393);
var state_35470__$1 = state_35470;
var statearr_35614_37497 = state_35470__$1;
(statearr_35614_37497[(2)] = inst_35415);

(statearr_35614_37497[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (11))){
var inst_35393 = (state_35470[(7)]);
var inst_35399 = (inst_35393 == null);
var inst_35400 = cljs.core.not(inst_35399);
var state_35470__$1 = state_35470;
if(inst_35400){
var statearr_35621_37499 = state_35470__$1;
(statearr_35621_37499[(1)] = (13));

} else {
var statearr_35625_37500 = state_35470__$1;
(statearr_35625_37500[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (9))){
var inst_35368 = (state_35470[(8)]);
var state_35470__$1 = state_35470;
var statearr_35631_37506 = state_35470__$1;
(statearr_35631_37506[(2)] = inst_35368);

(statearr_35631_37506[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (5))){
var state_35470__$1 = state_35470;
var statearr_35636_37509 = state_35470__$1;
(statearr_35636_37509[(2)] = true);

(statearr_35636_37509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (14))){
var state_35470__$1 = state_35470;
var statearr_35640_37515 = state_35470__$1;
(statearr_35640_37515[(2)] = false);

(statearr_35640_37515[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (26))){
var inst_35428 = (state_35470[(9)]);
var inst_35435 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35428);
var state_35470__$1 = state_35470;
var statearr_35645_37517 = state_35470__$1;
(statearr_35645_37517[(2)] = inst_35435);

(statearr_35645_37517[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (16))){
var state_35470__$1 = state_35470;
var statearr_35646_37519 = state_35470__$1;
(statearr_35646_37519[(2)] = true);

(statearr_35646_37519[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (38))){
var inst_35460 = (state_35470[(2)]);
var state_35470__$1 = state_35470;
var statearr_35657_37522 = state_35470__$1;
(statearr_35657_37522[(2)] = inst_35460);

(statearr_35657_37522[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (30))){
var inst_35428 = (state_35470[(9)]);
var inst_35419 = (state_35470[(10)]);
var inst_35420 = (state_35470[(13)]);
var inst_35446 = cljs.core.empty_QMARK_(inst_35419);
var inst_35448 = (inst_35420.cljs$core$IFn$_invoke$arity$1 ? inst_35420.cljs$core$IFn$_invoke$arity$1(inst_35428) : inst_35420.call(null,inst_35428));
var inst_35449 = cljs.core.not(inst_35448);
var inst_35450 = ((inst_35446) && (inst_35449));
var state_35470__$1 = state_35470;
var statearr_35665_37533 = state_35470__$1;
(statearr_35665_37533[(2)] = inst_35450);

(statearr_35665_37533[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (10))){
var inst_35368 = (state_35470[(8)]);
var inst_35389 = (state_35470[(2)]);
var inst_35390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35389,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35389,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35389,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35393 = inst_35368;
var state_35470__$1 = (function (){var statearr_35671 = state_35470;
(statearr_35671[(16)] = inst_35391);

(statearr_35671[(7)] = inst_35393);

(statearr_35671[(17)] = inst_35390);

(statearr_35671[(18)] = inst_35392);

return statearr_35671;
})();
var statearr_35676_37541 = state_35470__$1;
(statearr_35676_37541[(2)] = null);

(statearr_35676_37541[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (18))){
var inst_35410 = (state_35470[(2)]);
var state_35470__$1 = state_35470;
var statearr_35684_37544 = state_35470__$1;
(statearr_35684_37544[(2)] = inst_35410);

(statearr_35684_37544[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (37))){
var state_35470__$1 = state_35470;
var statearr_35688_37546 = state_35470__$1;
(statearr_35688_37546[(2)] = null);

(statearr_35688_37546[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (8))){
var inst_35368 = (state_35470[(8)]);
var inst_35386 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35368);
var state_35470__$1 = state_35470;
var statearr_35694_37549 = state_35470__$1;
(statearr_35694_37549[(2)] = inst_35386);

(statearr_35694_37549[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__34200__auto__ = null;
var cljs$core$async$mix_$_state_machine__34200__auto____0 = (function (){
var statearr_35708 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35708[(0)] = cljs$core$async$mix_$_state_machine__34200__auto__);

(statearr_35708[(1)] = (1));

return statearr_35708;
});
var cljs$core$async$mix_$_state_machine__34200__auto____1 = (function (state_35470){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_35470);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e35711){if((e35711 instanceof Object)){
var ex__34203__auto__ = e35711;
var statearr_35714_37556 = state_35470;
(statearr_35714_37556[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35711;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37562 = state_35470;
state_35470 = G__37562;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34200__auto__ = function(state_35470){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34200__auto____1.call(this,state_35470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34200__auto____0;
cljs$core$async$mix_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34200__auto____1;
return cljs$core$async$mix_$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_35722 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_35722[(6)] = c__34267__auto___37397);

return statearr_35722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
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
var G__35737 = arguments.length;
switch (G__35737) {
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
var G__35751 = arguments.length;
switch (G__35751) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35748_SHARP_){
if(cljs.core.truth_((p1__35748_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35748_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35748_SHARP_.call(null,topic)))){
return p1__35748_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35748_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35755 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35755 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35756){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35756 = meta35756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35757,meta35756__$1){
var self__ = this;
var _35757__$1 = this;
return (new cljs.core.async.t_cljs$core$async35755(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35756__$1));
}));

(cljs.core.async.t_cljs$core$async35755.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35757){
var self__ = this;
var _35757__$1 = this;
return self__.meta35756;
}));

(cljs.core.async.t_cljs$core$async35755.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35755.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35755.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35755.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35755.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35755.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35755.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35755.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35756","meta35756",278523997,null)], null);
}));

(cljs.core.async.t_cljs$core$async35755.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35755.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35755");

(cljs.core.async.t_cljs$core$async35755.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35755");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35755.
 */
cljs.core.async.__GT_t_cljs$core$async35755 = (function cljs$core$async$__GT_t_cljs$core$async35755(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35756){
return (new cljs.core.async.t_cljs$core$async35755(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35756));
});

}

return (new cljs.core.async.t_cljs$core$async35755(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34267__auto___37655 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_35868){
var state_val_35869 = (state_35868[(1)]);
if((state_val_35869 === (7))){
var inst_35864 = (state_35868[(2)]);
var state_35868__$1 = state_35868;
var statearr_35870_37662 = state_35868__$1;
(statearr_35870_37662[(2)] = inst_35864);

(statearr_35870_37662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (20))){
var state_35868__$1 = state_35868;
var statearr_35871_37664 = state_35868__$1;
(statearr_35871_37664[(2)] = null);

(statearr_35871_37664[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (1))){
var state_35868__$1 = state_35868;
var statearr_35873_37666 = state_35868__$1;
(statearr_35873_37666[(2)] = null);

(statearr_35873_37666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (24))){
var inst_35847 = (state_35868[(7)]);
var inst_35856 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35847);
var state_35868__$1 = state_35868;
var statearr_35875_37675 = state_35868__$1;
(statearr_35875_37675[(2)] = inst_35856);

(statearr_35875_37675[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (4))){
var inst_35795 = (state_35868[(8)]);
var inst_35795__$1 = (state_35868[(2)]);
var inst_35800 = (inst_35795__$1 == null);
var state_35868__$1 = (function (){var statearr_35878 = state_35868;
(statearr_35878[(8)] = inst_35795__$1);

return statearr_35878;
})();
if(cljs.core.truth_(inst_35800)){
var statearr_35879_37677 = state_35868__$1;
(statearr_35879_37677[(1)] = (5));

} else {
var statearr_35880_37678 = state_35868__$1;
(statearr_35880_37678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (15))){
var inst_35841 = (state_35868[(2)]);
var state_35868__$1 = state_35868;
var statearr_35881_37688 = state_35868__$1;
(statearr_35881_37688[(2)] = inst_35841);

(statearr_35881_37688[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (21))){
var inst_35861 = (state_35868[(2)]);
var state_35868__$1 = (function (){var statearr_35883 = state_35868;
(statearr_35883[(9)] = inst_35861);

return statearr_35883;
})();
var statearr_35884_37691 = state_35868__$1;
(statearr_35884_37691[(2)] = null);

(statearr_35884_37691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (13))){
var inst_35823 = (state_35868[(10)]);
var inst_35825 = cljs.core.chunked_seq_QMARK_(inst_35823);
var state_35868__$1 = state_35868;
if(inst_35825){
var statearr_35885_37693 = state_35868__$1;
(statearr_35885_37693[(1)] = (16));

} else {
var statearr_35886_37695 = state_35868__$1;
(statearr_35886_37695[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (22))){
var inst_35853 = (state_35868[(2)]);
var state_35868__$1 = state_35868;
if(cljs.core.truth_(inst_35853)){
var statearr_35888_37700 = state_35868__$1;
(statearr_35888_37700[(1)] = (23));

} else {
var statearr_35891_37702 = state_35868__$1;
(statearr_35891_37702[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (6))){
var inst_35847 = (state_35868[(7)]);
var inst_35849 = (state_35868[(11)]);
var inst_35795 = (state_35868[(8)]);
var inst_35847__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35795) : topic_fn.call(null,inst_35795));
var inst_35848 = cljs.core.deref(mults);
var inst_35849__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35848,inst_35847__$1);
var state_35868__$1 = (function (){var statearr_35895 = state_35868;
(statearr_35895[(7)] = inst_35847__$1);

(statearr_35895[(11)] = inst_35849__$1);

return statearr_35895;
})();
if(cljs.core.truth_(inst_35849__$1)){
var statearr_35896_37707 = state_35868__$1;
(statearr_35896_37707[(1)] = (19));

} else {
var statearr_35897_37710 = state_35868__$1;
(statearr_35897_37710[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (25))){
var inst_35858 = (state_35868[(2)]);
var state_35868__$1 = state_35868;
var statearr_35900_37715 = state_35868__$1;
(statearr_35900_37715[(2)] = inst_35858);

(statearr_35900_37715[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (17))){
var inst_35823 = (state_35868[(10)]);
var inst_35832 = cljs.core.first(inst_35823);
var inst_35833 = cljs.core.async.muxch_STAR_(inst_35832);
var inst_35834 = cljs.core.async.close_BANG_(inst_35833);
var inst_35835 = cljs.core.next(inst_35823);
var inst_35809 = inst_35835;
var inst_35810 = null;
var inst_35811 = (0);
var inst_35812 = (0);
var state_35868__$1 = (function (){var statearr_35902 = state_35868;
(statearr_35902[(12)] = inst_35810);

(statearr_35902[(13)] = inst_35809);

(statearr_35902[(14)] = inst_35834);

(statearr_35902[(15)] = inst_35811);

(statearr_35902[(16)] = inst_35812);

return statearr_35902;
})();
var statearr_35904_37721 = state_35868__$1;
(statearr_35904_37721[(2)] = null);

(statearr_35904_37721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (3))){
var inst_35866 = (state_35868[(2)]);
var state_35868__$1 = state_35868;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35868__$1,inst_35866);
} else {
if((state_val_35869 === (12))){
var inst_35843 = (state_35868[(2)]);
var state_35868__$1 = state_35868;
var statearr_35910_37722 = state_35868__$1;
(statearr_35910_37722[(2)] = inst_35843);

(statearr_35910_37722[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (2))){
var state_35868__$1 = state_35868;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35868__$1,(4),ch);
} else {
if((state_val_35869 === (23))){
var state_35868__$1 = state_35868;
var statearr_35914_37725 = state_35868__$1;
(statearr_35914_37725[(2)] = null);

(statearr_35914_37725[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (19))){
var inst_35849 = (state_35868[(11)]);
var inst_35795 = (state_35868[(8)]);
var inst_35851 = cljs.core.async.muxch_STAR_(inst_35849);
var state_35868__$1 = state_35868;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35868__$1,(22),inst_35851,inst_35795);
} else {
if((state_val_35869 === (11))){
var inst_35823 = (state_35868[(10)]);
var inst_35809 = (state_35868[(13)]);
var inst_35823__$1 = cljs.core.seq(inst_35809);
var state_35868__$1 = (function (){var statearr_35917 = state_35868;
(statearr_35917[(10)] = inst_35823__$1);

return statearr_35917;
})();
if(inst_35823__$1){
var statearr_35919_37728 = state_35868__$1;
(statearr_35919_37728[(1)] = (13));

} else {
var statearr_35920_37729 = state_35868__$1;
(statearr_35920_37729[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (9))){
var inst_35845 = (state_35868[(2)]);
var state_35868__$1 = state_35868;
var statearr_35921_37730 = state_35868__$1;
(statearr_35921_37730[(2)] = inst_35845);

(statearr_35921_37730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (5))){
var inst_35806 = cljs.core.deref(mults);
var inst_35807 = cljs.core.vals(inst_35806);
var inst_35808 = cljs.core.seq(inst_35807);
var inst_35809 = inst_35808;
var inst_35810 = null;
var inst_35811 = (0);
var inst_35812 = (0);
var state_35868__$1 = (function (){var statearr_35926 = state_35868;
(statearr_35926[(12)] = inst_35810);

(statearr_35926[(13)] = inst_35809);

(statearr_35926[(15)] = inst_35811);

(statearr_35926[(16)] = inst_35812);

return statearr_35926;
})();
var statearr_35927_37735 = state_35868__$1;
(statearr_35927_37735[(2)] = null);

(statearr_35927_37735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (14))){
var state_35868__$1 = state_35868;
var statearr_35931_37739 = state_35868__$1;
(statearr_35931_37739[(2)] = null);

(statearr_35931_37739[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (16))){
var inst_35823 = (state_35868[(10)]);
var inst_35827 = cljs.core.chunk_first(inst_35823);
var inst_35828 = cljs.core.chunk_rest(inst_35823);
var inst_35829 = cljs.core.count(inst_35827);
var inst_35809 = inst_35828;
var inst_35810 = inst_35827;
var inst_35811 = inst_35829;
var inst_35812 = (0);
var state_35868__$1 = (function (){var statearr_35935 = state_35868;
(statearr_35935[(12)] = inst_35810);

(statearr_35935[(13)] = inst_35809);

(statearr_35935[(15)] = inst_35811);

(statearr_35935[(16)] = inst_35812);

return statearr_35935;
})();
var statearr_35937_37741 = state_35868__$1;
(statearr_35937_37741[(2)] = null);

(statearr_35937_37741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (10))){
var inst_35810 = (state_35868[(12)]);
var inst_35809 = (state_35868[(13)]);
var inst_35811 = (state_35868[(15)]);
var inst_35812 = (state_35868[(16)]);
var inst_35817 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35810,inst_35812);
var inst_35818 = cljs.core.async.muxch_STAR_(inst_35817);
var inst_35819 = cljs.core.async.close_BANG_(inst_35818);
var inst_35820 = (inst_35812 + (1));
var tmp35928 = inst_35810;
var tmp35929 = inst_35809;
var tmp35930 = inst_35811;
var inst_35809__$1 = tmp35929;
var inst_35810__$1 = tmp35928;
var inst_35811__$1 = tmp35930;
var inst_35812__$1 = inst_35820;
var state_35868__$1 = (function (){var statearr_35941 = state_35868;
(statearr_35941[(17)] = inst_35819);

(statearr_35941[(12)] = inst_35810__$1);

(statearr_35941[(13)] = inst_35809__$1);

(statearr_35941[(15)] = inst_35811__$1);

(statearr_35941[(16)] = inst_35812__$1);

return statearr_35941;
})();
var statearr_35944_37744 = state_35868__$1;
(statearr_35944_37744[(2)] = null);

(statearr_35944_37744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (18))){
var inst_35838 = (state_35868[(2)]);
var state_35868__$1 = state_35868;
var statearr_35945_37748 = state_35868__$1;
(statearr_35945_37748[(2)] = inst_35838);

(statearr_35945_37748[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (8))){
var inst_35811 = (state_35868[(15)]);
var inst_35812 = (state_35868[(16)]);
var inst_35814 = (inst_35812 < inst_35811);
var inst_35815 = inst_35814;
var state_35868__$1 = state_35868;
if(cljs.core.truth_(inst_35815)){
var statearr_35948_37754 = state_35868__$1;
(statearr_35948_37754[(1)] = (10));

} else {
var statearr_35949_37755 = state_35868__$1;
(statearr_35949_37755[(1)] = (11));

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
var cljs$core$async$state_machine__34200__auto__ = null;
var cljs$core$async$state_machine__34200__auto____0 = (function (){
var statearr_35954 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35954[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_35954[(1)] = (1));

return statearr_35954;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_35868){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_35868);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e35956){if((e35956 instanceof Object)){
var ex__34203__auto__ = e35956;
var statearr_35957_37761 = state_35868;
(statearr_35957_37761[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35956;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37764 = state_35868;
state_35868 = G__37764;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_35868){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_35868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_35961 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_35961[(6)] = c__34267__auto___37655);

return statearr_35961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
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
var G__35965 = arguments.length;
switch (G__35965) {
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
var G__35972 = arguments.length;
switch (G__35972) {
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
var G__35980 = arguments.length;
switch (G__35980) {
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
var c__34267__auto___37799 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36030){
var state_val_36031 = (state_36030[(1)]);
if((state_val_36031 === (7))){
var state_36030__$1 = state_36030;
var statearr_36033_37806 = state_36030__$1;
(statearr_36033_37806[(2)] = null);

(statearr_36033_37806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36031 === (1))){
var state_36030__$1 = state_36030;
var statearr_36036_37808 = state_36030__$1;
(statearr_36036_37808[(2)] = null);

(statearr_36036_37808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36031 === (4))){
var inst_35991 = (state_36030[(7)]);
var inst_35993 = (inst_35991 < cnt);
var state_36030__$1 = state_36030;
if(cljs.core.truth_(inst_35993)){
var statearr_36038_37810 = state_36030__$1;
(statearr_36038_37810[(1)] = (6));

} else {
var statearr_36039_37811 = state_36030__$1;
(statearr_36039_37811[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36031 === (15))){
var inst_36026 = (state_36030[(2)]);
var state_36030__$1 = state_36030;
var statearr_36041_37813 = state_36030__$1;
(statearr_36041_37813[(2)] = inst_36026);

(statearr_36041_37813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36031 === (13))){
var inst_36019 = cljs.core.async.close_BANG_(out);
var state_36030__$1 = state_36030;
var statearr_36045_37819 = state_36030__$1;
(statearr_36045_37819[(2)] = inst_36019);

(statearr_36045_37819[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36031 === (6))){
var state_36030__$1 = state_36030;
var statearr_36048_37823 = state_36030__$1;
(statearr_36048_37823[(2)] = null);

(statearr_36048_37823[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36031 === (3))){
var inst_36028 = (state_36030[(2)]);
var state_36030__$1 = state_36030;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36030__$1,inst_36028);
} else {
if((state_val_36031 === (12))){
var inst_36016 = (state_36030[(8)]);
var inst_36016__$1 = (state_36030[(2)]);
var inst_36017 = cljs.core.some(cljs.core.nil_QMARK_,inst_36016__$1);
var state_36030__$1 = (function (){var statearr_36052 = state_36030;
(statearr_36052[(8)] = inst_36016__$1);

return statearr_36052;
})();
if(cljs.core.truth_(inst_36017)){
var statearr_36053_37826 = state_36030__$1;
(statearr_36053_37826[(1)] = (13));

} else {
var statearr_36054_37827 = state_36030__$1;
(statearr_36054_37827[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36031 === (2))){
var inst_35990 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35991 = (0);
var state_36030__$1 = (function (){var statearr_36057 = state_36030;
(statearr_36057[(7)] = inst_35991);

(statearr_36057[(9)] = inst_35990);

return statearr_36057;
})();
var statearr_36058_37834 = state_36030__$1;
(statearr_36058_37834[(2)] = null);

(statearr_36058_37834[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36031 === (11))){
var inst_35991 = (state_36030[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36030,(10),Object,null,(9));
var inst_36002 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35991) : chs__$1.call(null,inst_35991));
var inst_36003 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35991) : done.call(null,inst_35991));
var inst_36004 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36002,inst_36003);
var state_36030__$1 = state_36030;
var statearr_36060_37839 = state_36030__$1;
(statearr_36060_37839[(2)] = inst_36004);


cljs.core.async.impl.ioc_helpers.process_exception(state_36030__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36031 === (9))){
var inst_35991 = (state_36030[(7)]);
var inst_36006 = (state_36030[(2)]);
var inst_36007 = (inst_35991 + (1));
var inst_35991__$1 = inst_36007;
var state_36030__$1 = (function (){var statearr_36063 = state_36030;
(statearr_36063[(10)] = inst_36006);

(statearr_36063[(7)] = inst_35991__$1);

return statearr_36063;
})();
var statearr_36064_37847 = state_36030__$1;
(statearr_36064_37847[(2)] = null);

(statearr_36064_37847[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36031 === (5))){
var inst_36014 = (state_36030[(2)]);
var state_36030__$1 = (function (){var statearr_36065 = state_36030;
(statearr_36065[(11)] = inst_36014);

return statearr_36065;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36030__$1,(12),dchan);
} else {
if((state_val_36031 === (14))){
var inst_36016 = (state_36030[(8)]);
var inst_36021 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36016);
var state_36030__$1 = state_36030;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36030__$1,(16),out,inst_36021);
} else {
if((state_val_36031 === (16))){
var inst_36023 = (state_36030[(2)]);
var state_36030__$1 = (function (){var statearr_36067 = state_36030;
(statearr_36067[(12)] = inst_36023);

return statearr_36067;
})();
var statearr_36068_37850 = state_36030__$1;
(statearr_36068_37850[(2)] = null);

(statearr_36068_37850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36031 === (10))){
var inst_35995 = (state_36030[(2)]);
var inst_35996 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36030__$1 = (function (){var statearr_36069 = state_36030;
(statearr_36069[(13)] = inst_35995);

return statearr_36069;
})();
var statearr_36070_37855 = state_36030__$1;
(statearr_36070_37855[(2)] = inst_35996);


cljs.core.async.impl.ioc_helpers.process_exception(state_36030__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36031 === (8))){
var inst_36012 = (state_36030[(2)]);
var state_36030__$1 = state_36030;
var statearr_36074_37859 = state_36030__$1;
(statearr_36074_37859[(2)] = inst_36012);

(statearr_36074_37859[(1)] = (5));


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
var cljs$core$async$state_machine__34200__auto__ = null;
var cljs$core$async$state_machine__34200__auto____0 = (function (){
var statearr_36075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36075[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36075[(1)] = (1));

return statearr_36075;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36030){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36030);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36076){if((e36076 instanceof Object)){
var ex__34203__auto__ = e36076;
var statearr_36077_37868 = state_36030;
(statearr_36077_37868[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36076;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37870 = state_36030;
state_36030 = G__37870;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36084 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36084[(6)] = c__34267__auto___37799);

return statearr_36084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
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
var G__36088 = arguments.length;
switch (G__36088) {
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
var c__34267__auto___37880 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36120){
var state_val_36121 = (state_36120[(1)]);
if((state_val_36121 === (7))){
var inst_36099 = (state_36120[(7)]);
var inst_36100 = (state_36120[(8)]);
var inst_36099__$1 = (state_36120[(2)]);
var inst_36100__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36099__$1,(0),null);
var inst_36101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36099__$1,(1),null);
var inst_36102 = (inst_36100__$1 == null);
var state_36120__$1 = (function (){var statearr_36122 = state_36120;
(statearr_36122[(9)] = inst_36101);

(statearr_36122[(7)] = inst_36099__$1);

(statearr_36122[(8)] = inst_36100__$1);

return statearr_36122;
})();
if(cljs.core.truth_(inst_36102)){
var statearr_36123_37889 = state_36120__$1;
(statearr_36123_37889[(1)] = (8));

} else {
var statearr_36124_37892 = state_36120__$1;
(statearr_36124_37892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36121 === (1))){
var inst_36089 = cljs.core.vec(chs);
var inst_36090 = inst_36089;
var state_36120__$1 = (function (){var statearr_36125 = state_36120;
(statearr_36125[(10)] = inst_36090);

return statearr_36125;
})();
var statearr_36126_37895 = state_36120__$1;
(statearr_36126_37895[(2)] = null);

(statearr_36126_37895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36121 === (4))){
var inst_36090 = (state_36120[(10)]);
var state_36120__$1 = state_36120;
return cljs.core.async.ioc_alts_BANG_(state_36120__$1,(7),inst_36090);
} else {
if((state_val_36121 === (6))){
var inst_36116 = (state_36120[(2)]);
var state_36120__$1 = state_36120;
var statearr_36127_37902 = state_36120__$1;
(statearr_36127_37902[(2)] = inst_36116);

(statearr_36127_37902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36121 === (3))){
var inst_36118 = (state_36120[(2)]);
var state_36120__$1 = state_36120;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36120__$1,inst_36118);
} else {
if((state_val_36121 === (2))){
var inst_36090 = (state_36120[(10)]);
var inst_36092 = cljs.core.count(inst_36090);
var inst_36093 = (inst_36092 > (0));
var state_36120__$1 = state_36120;
if(cljs.core.truth_(inst_36093)){
var statearr_36133_37908 = state_36120__$1;
(statearr_36133_37908[(1)] = (4));

} else {
var statearr_36135_37909 = state_36120__$1;
(statearr_36135_37909[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36121 === (11))){
var inst_36090 = (state_36120[(10)]);
var inst_36109 = (state_36120[(2)]);
var tmp36129 = inst_36090;
var inst_36090__$1 = tmp36129;
var state_36120__$1 = (function (){var statearr_36139 = state_36120;
(statearr_36139[(11)] = inst_36109);

(statearr_36139[(10)] = inst_36090__$1);

return statearr_36139;
})();
var statearr_36140_37914 = state_36120__$1;
(statearr_36140_37914[(2)] = null);

(statearr_36140_37914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36121 === (9))){
var inst_36100 = (state_36120[(8)]);
var state_36120__$1 = state_36120;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36120__$1,(11),out,inst_36100);
} else {
if((state_val_36121 === (5))){
var inst_36114 = cljs.core.async.close_BANG_(out);
var state_36120__$1 = state_36120;
var statearr_36148_37915 = state_36120__$1;
(statearr_36148_37915[(2)] = inst_36114);

(statearr_36148_37915[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36121 === (10))){
var inst_36112 = (state_36120[(2)]);
var state_36120__$1 = state_36120;
var statearr_36150_37917 = state_36120__$1;
(statearr_36150_37917[(2)] = inst_36112);

(statearr_36150_37917[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36121 === (8))){
var inst_36101 = (state_36120[(9)]);
var inst_36099 = (state_36120[(7)]);
var inst_36100 = (state_36120[(8)]);
var inst_36090 = (state_36120[(10)]);
var inst_36104 = (function (){var cs = inst_36090;
var vec__36095 = inst_36099;
var v = inst_36100;
var c = inst_36101;
return (function (p1__36086_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36086_SHARP_);
});
})();
var inst_36105 = cljs.core.filterv(inst_36104,inst_36090);
var inst_36090__$1 = inst_36105;
var state_36120__$1 = (function (){var statearr_36151 = state_36120;
(statearr_36151[(10)] = inst_36090__$1);

return statearr_36151;
})();
var statearr_36152_37923 = state_36120__$1;
(statearr_36152_37923[(2)] = null);

(statearr_36152_37923[(1)] = (2));


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
var cljs$core$async$state_machine__34200__auto__ = null;
var cljs$core$async$state_machine__34200__auto____0 = (function (){
var statearr_36153 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36153[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36153[(1)] = (1));

return statearr_36153;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36120){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36120);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36154){if((e36154 instanceof Object)){
var ex__34203__auto__ = e36154;
var statearr_36155_37929 = state_36120;
(statearr_36155_37929[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36154;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37931 = state_36120;
state_36120 = G__37931;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36120){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36156 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36156[(6)] = c__34267__auto___37880);

return statearr_36156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
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
var G__36160 = arguments.length;
switch (G__36160) {
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
var c__34267__auto___37942 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36188){
var state_val_36189 = (state_36188[(1)]);
if((state_val_36189 === (7))){
var inst_36170 = (state_36188[(7)]);
var inst_36170__$1 = (state_36188[(2)]);
var inst_36171 = (inst_36170__$1 == null);
var inst_36172 = cljs.core.not(inst_36171);
var state_36188__$1 = (function (){var statearr_36194 = state_36188;
(statearr_36194[(7)] = inst_36170__$1);

return statearr_36194;
})();
if(inst_36172){
var statearr_36195_37950 = state_36188__$1;
(statearr_36195_37950[(1)] = (8));

} else {
var statearr_36196_37951 = state_36188__$1;
(statearr_36196_37951[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36189 === (1))){
var inst_36165 = (0);
var state_36188__$1 = (function (){var statearr_36197 = state_36188;
(statearr_36197[(8)] = inst_36165);

return statearr_36197;
})();
var statearr_36198_37958 = state_36188__$1;
(statearr_36198_37958[(2)] = null);

(statearr_36198_37958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36189 === (4))){
var state_36188__$1 = state_36188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36188__$1,(7),ch);
} else {
if((state_val_36189 === (6))){
var inst_36183 = (state_36188[(2)]);
var state_36188__$1 = state_36188;
var statearr_36199_37961 = state_36188__$1;
(statearr_36199_37961[(2)] = inst_36183);

(statearr_36199_37961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36189 === (3))){
var inst_36185 = (state_36188[(2)]);
var inst_36186 = cljs.core.async.close_BANG_(out);
var state_36188__$1 = (function (){var statearr_36200 = state_36188;
(statearr_36200[(9)] = inst_36185);

return statearr_36200;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36188__$1,inst_36186);
} else {
if((state_val_36189 === (2))){
var inst_36165 = (state_36188[(8)]);
var inst_36167 = (inst_36165 < n);
var state_36188__$1 = state_36188;
if(cljs.core.truth_(inst_36167)){
var statearr_36201_37966 = state_36188__$1;
(statearr_36201_37966[(1)] = (4));

} else {
var statearr_36202_37967 = state_36188__$1;
(statearr_36202_37967[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36189 === (11))){
var inst_36165 = (state_36188[(8)]);
var inst_36175 = (state_36188[(2)]);
var inst_36176 = (inst_36165 + (1));
var inst_36165__$1 = inst_36176;
var state_36188__$1 = (function (){var statearr_36203 = state_36188;
(statearr_36203[(8)] = inst_36165__$1);

(statearr_36203[(10)] = inst_36175);

return statearr_36203;
})();
var statearr_36204_37972 = state_36188__$1;
(statearr_36204_37972[(2)] = null);

(statearr_36204_37972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36189 === (9))){
var state_36188__$1 = state_36188;
var statearr_36205_37973 = state_36188__$1;
(statearr_36205_37973[(2)] = null);

(statearr_36205_37973[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36189 === (5))){
var state_36188__$1 = state_36188;
var statearr_36206_37975 = state_36188__$1;
(statearr_36206_37975[(2)] = null);

(statearr_36206_37975[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36189 === (10))){
var inst_36180 = (state_36188[(2)]);
var state_36188__$1 = state_36188;
var statearr_36207_37976 = state_36188__$1;
(statearr_36207_37976[(2)] = inst_36180);

(statearr_36207_37976[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36189 === (8))){
var inst_36170 = (state_36188[(7)]);
var state_36188__$1 = state_36188;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36188__$1,(11),out,inst_36170);
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
var cljs$core$async$state_machine__34200__auto__ = null;
var cljs$core$async$state_machine__34200__auto____0 = (function (){
var statearr_36208 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36208[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36208[(1)] = (1));

return statearr_36208;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36188){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36188);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36209){if((e36209 instanceof Object)){
var ex__34203__auto__ = e36209;
var statearr_36210_37982 = state_36188;
(statearr_36210_37982[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36209;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37986 = state_36188;
state_36188 = G__37986;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36188){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36212 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36212[(6)] = c__34267__auto___37942);

return statearr_36212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36215 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36215 = (function (f,ch,meta36216){
this.f = f;
this.ch = ch;
this.meta36216 = meta36216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36217,meta36216__$1){
var self__ = this;
var _36217__$1 = this;
return (new cljs.core.async.t_cljs$core$async36215(self__.f,self__.ch,meta36216__$1));
}));

(cljs.core.async.t_cljs$core$async36215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36217){
var self__ = this;
var _36217__$1 = this;
return self__.meta36216;
}));

(cljs.core.async.t_cljs$core$async36215.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36215.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36215.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36215.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36215.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36222 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36222 = (function (f,ch,meta36216,_,fn1,meta36223){
this.f = f;
this.ch = ch;
this.meta36216 = meta36216;
this._ = _;
this.fn1 = fn1;
this.meta36223 = meta36223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36224,meta36223__$1){
var self__ = this;
var _36224__$1 = this;
return (new cljs.core.async.t_cljs$core$async36222(self__.f,self__.ch,self__.meta36216,self__._,self__.fn1,meta36223__$1));
}));

(cljs.core.async.t_cljs$core$async36222.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36224){
var self__ = this;
var _36224__$1 = this;
return self__.meta36223;
}));

(cljs.core.async.t_cljs$core$async36222.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36222.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36222.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36222.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36213_SHARP_){
var G__36230 = (((p1__36213_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36213_SHARP_) : self__.f.call(null,p1__36213_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36230) : f1.call(null,G__36230));
});
}));

(cljs.core.async.t_cljs$core$async36222.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36216","meta36216",-1124070893,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36215","cljs.core.async/t_cljs$core$async36215",798286073,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36223","meta36223",-1625194852,null)], null);
}));

(cljs.core.async.t_cljs$core$async36222.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36222.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36222");

(cljs.core.async.t_cljs$core$async36222.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36222");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36222.
 */
cljs.core.async.__GT_t_cljs$core$async36222 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36222(f__$1,ch__$1,meta36216__$1,___$2,fn1__$1,meta36223){
return (new cljs.core.async.t_cljs$core$async36222(f__$1,ch__$1,meta36216__$1,___$2,fn1__$1,meta36223));
});

}

return (new cljs.core.async.t_cljs$core$async36222(self__.f,self__.ch,self__.meta36216,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36238 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36238) : self__.f.call(null,G__36238));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36215.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36215.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36215.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36216","meta36216",-1124070893,null)], null);
}));

(cljs.core.async.t_cljs$core$async36215.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36215.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36215");

(cljs.core.async.t_cljs$core$async36215.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36215");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36215.
 */
cljs.core.async.__GT_t_cljs$core$async36215 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36215(f__$1,ch__$1,meta36216){
return (new cljs.core.async.t_cljs$core$async36215(f__$1,ch__$1,meta36216));
});

}

return (new cljs.core.async.t_cljs$core$async36215(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36244 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36244 = (function (f,ch,meta36245){
this.f = f;
this.ch = ch;
this.meta36245 = meta36245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36246,meta36245__$1){
var self__ = this;
var _36246__$1 = this;
return (new cljs.core.async.t_cljs$core$async36244(self__.f,self__.ch,meta36245__$1));
}));

(cljs.core.async.t_cljs$core$async36244.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36246){
var self__ = this;
var _36246__$1 = this;
return self__.meta36245;
}));

(cljs.core.async.t_cljs$core$async36244.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36244.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36244.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36244.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36244.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36244.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36244.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36245","meta36245",-1588645322,null)], null);
}));

(cljs.core.async.t_cljs$core$async36244.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36244.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36244");

(cljs.core.async.t_cljs$core$async36244.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36244");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36244.
 */
cljs.core.async.__GT_t_cljs$core$async36244 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36244(f__$1,ch__$1,meta36245){
return (new cljs.core.async.t_cljs$core$async36244(f__$1,ch__$1,meta36245));
});

}

return (new cljs.core.async.t_cljs$core$async36244(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36247 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36247 = (function (p,ch,meta36248){
this.p = p;
this.ch = ch;
this.meta36248 = meta36248;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36249,meta36248__$1){
var self__ = this;
var _36249__$1 = this;
return (new cljs.core.async.t_cljs$core$async36247(self__.p,self__.ch,meta36248__$1));
}));

(cljs.core.async.t_cljs$core$async36247.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36249){
var self__ = this;
var _36249__$1 = this;
return self__.meta36248;
}));

(cljs.core.async.t_cljs$core$async36247.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36247.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36247.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36247.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36247.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36247.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36247.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36247.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36248","meta36248",-1789413550,null)], null);
}));

(cljs.core.async.t_cljs$core$async36247.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36247.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36247");

(cljs.core.async.t_cljs$core$async36247.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36247");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36247.
 */
cljs.core.async.__GT_t_cljs$core$async36247 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36247(p__$1,ch__$1,meta36248){
return (new cljs.core.async.t_cljs$core$async36247(p__$1,ch__$1,meta36248));
});

}

return (new cljs.core.async.t_cljs$core$async36247(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36263 = arguments.length;
switch (G__36263) {
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
var c__34267__auto___38016 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36286){
var state_val_36287 = (state_36286[(1)]);
if((state_val_36287 === (7))){
var inst_36282 = (state_36286[(2)]);
var state_36286__$1 = state_36286;
var statearr_36290_38017 = state_36286__$1;
(statearr_36290_38017[(2)] = inst_36282);

(statearr_36290_38017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36287 === (1))){
var state_36286__$1 = state_36286;
var statearr_36291_38018 = state_36286__$1;
(statearr_36291_38018[(2)] = null);

(statearr_36291_38018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36287 === (4))){
var inst_36268 = (state_36286[(7)]);
var inst_36268__$1 = (state_36286[(2)]);
var inst_36269 = (inst_36268__$1 == null);
var state_36286__$1 = (function (){var statearr_36292 = state_36286;
(statearr_36292[(7)] = inst_36268__$1);

return statearr_36292;
})();
if(cljs.core.truth_(inst_36269)){
var statearr_36293_38019 = state_36286__$1;
(statearr_36293_38019[(1)] = (5));

} else {
var statearr_36294_38021 = state_36286__$1;
(statearr_36294_38021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36287 === (6))){
var inst_36268 = (state_36286[(7)]);
var inst_36273 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36268) : p.call(null,inst_36268));
var state_36286__$1 = state_36286;
if(cljs.core.truth_(inst_36273)){
var statearr_36295_38024 = state_36286__$1;
(statearr_36295_38024[(1)] = (8));

} else {
var statearr_36296_38025 = state_36286__$1;
(statearr_36296_38025[(1)] = (9));

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
var statearr_36301_38030 = state_36286__$1;
(statearr_36301_38030[(2)] = inst_36276);

(statearr_36301_38030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36287 === (9))){
var state_36286__$1 = state_36286;
var statearr_36305_38031 = state_36286__$1;
(statearr_36305_38031[(2)] = null);

(statearr_36305_38031[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36287 === (5))){
var inst_36271 = cljs.core.async.close_BANG_(out);
var state_36286__$1 = state_36286;
var statearr_36307_38032 = state_36286__$1;
(statearr_36307_38032[(2)] = inst_36271);

(statearr_36307_38032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36287 === (10))){
var inst_36279 = (state_36286[(2)]);
var state_36286__$1 = (function (){var statearr_36308 = state_36286;
(statearr_36308[(8)] = inst_36279);

return statearr_36308;
})();
var statearr_36309_38034 = state_36286__$1;
(statearr_36309_38034[(2)] = null);

(statearr_36309_38034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36287 === (8))){
var inst_36268 = (state_36286[(7)]);
var state_36286__$1 = state_36286;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36286__$1,(11),out,inst_36268);
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
var cljs$core$async$state_machine__34200__auto__ = null;
var cljs$core$async$state_machine__34200__auto____0 = (function (){
var statearr_36310 = [null,null,null,null,null,null,null,null,null];
(statearr_36310[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36310[(1)] = (1));

return statearr_36310;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36286){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36286);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36313){if((e36313 instanceof Object)){
var ex__34203__auto__ = e36313;
var statearr_36314_38039 = state_36286;
(statearr_36314_38039[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36313;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38040 = state_36286;
state_36286 = G__38040;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36286){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36315 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36315[(6)] = c__34267__auto___38016);

return statearr_36315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36328 = arguments.length;
switch (G__36328) {
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
var c__34267__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36397){
var state_val_36398 = (state_36397[(1)]);
if((state_val_36398 === (7))){
var inst_36392 = (state_36397[(2)]);
var state_36397__$1 = state_36397;
var statearr_36399_38047 = state_36397__$1;
(statearr_36399_38047[(2)] = inst_36392);

(statearr_36399_38047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36398 === (20))){
var inst_36361 = (state_36397[(7)]);
var inst_36372 = (state_36397[(2)]);
var inst_36373 = cljs.core.next(inst_36361);
var inst_36347 = inst_36373;
var inst_36348 = null;
var inst_36349 = (0);
var inst_36350 = (0);
var state_36397__$1 = (function (){var statearr_36400 = state_36397;
(statearr_36400[(8)] = inst_36349);

(statearr_36400[(9)] = inst_36347);

(statearr_36400[(10)] = inst_36348);

(statearr_36400[(11)] = inst_36372);

(statearr_36400[(12)] = inst_36350);

return statearr_36400;
})();
var statearr_36401_38049 = state_36397__$1;
(statearr_36401_38049[(2)] = null);

(statearr_36401_38049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36398 === (1))){
var state_36397__$1 = state_36397;
var statearr_36404_38050 = state_36397__$1;
(statearr_36404_38050[(2)] = null);

(statearr_36404_38050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36398 === (4))){
var inst_36335 = (state_36397[(13)]);
var inst_36335__$1 = (state_36397[(2)]);
var inst_36336 = (inst_36335__$1 == null);
var state_36397__$1 = (function (){var statearr_36405 = state_36397;
(statearr_36405[(13)] = inst_36335__$1);

return statearr_36405;
})();
if(cljs.core.truth_(inst_36336)){
var statearr_36406_38053 = state_36397__$1;
(statearr_36406_38053[(1)] = (5));

} else {
var statearr_36407_38054 = state_36397__$1;
(statearr_36407_38054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36398 === (15))){
var state_36397__$1 = state_36397;
var statearr_36413_38055 = state_36397__$1;
(statearr_36413_38055[(2)] = null);

(statearr_36413_38055[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36398 === (21))){
var state_36397__$1 = state_36397;
var statearr_36416_38056 = state_36397__$1;
(statearr_36416_38056[(2)] = null);

(statearr_36416_38056[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36398 === (13))){
var inst_36349 = (state_36397[(8)]);
var inst_36347 = (state_36397[(9)]);
var inst_36348 = (state_36397[(10)]);
var inst_36350 = (state_36397[(12)]);
var inst_36357 = (state_36397[(2)]);
var inst_36358 = (inst_36350 + (1));
var tmp36408 = inst_36349;
var tmp36409 = inst_36347;
var tmp36410 = inst_36348;
var inst_36347__$1 = tmp36409;
var inst_36348__$1 = tmp36410;
var inst_36349__$1 = tmp36408;
var inst_36350__$1 = inst_36358;
var state_36397__$1 = (function (){var statearr_36417 = state_36397;
(statearr_36417[(8)] = inst_36349__$1);

(statearr_36417[(9)] = inst_36347__$1);

(statearr_36417[(14)] = inst_36357);

(statearr_36417[(10)] = inst_36348__$1);

(statearr_36417[(12)] = inst_36350__$1);

return statearr_36417;
})();
var statearr_36423_38059 = state_36397__$1;
(statearr_36423_38059[(2)] = null);

(statearr_36423_38059[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36398 === (22))){
var state_36397__$1 = state_36397;
var statearr_36427_38062 = state_36397__$1;
(statearr_36427_38062[(2)] = null);

(statearr_36427_38062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36398 === (6))){
var inst_36335 = (state_36397[(13)]);
var inst_36345 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36335) : f.call(null,inst_36335));
var inst_36346 = cljs.core.seq(inst_36345);
var inst_36347 = inst_36346;
var inst_36348 = null;
var inst_36349 = (0);
var inst_36350 = (0);
var state_36397__$1 = (function (){var statearr_36428 = state_36397;
(statearr_36428[(8)] = inst_36349);

(statearr_36428[(9)] = inst_36347);

(statearr_36428[(10)] = inst_36348);

(statearr_36428[(12)] = inst_36350);

return statearr_36428;
})();
var statearr_36430_38063 = state_36397__$1;
(statearr_36430_38063[(2)] = null);

(statearr_36430_38063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36398 === (17))){
var inst_36361 = (state_36397[(7)]);
var inst_36365 = cljs.core.chunk_first(inst_36361);
var inst_36366 = cljs.core.chunk_rest(inst_36361);
var inst_36367 = cljs.core.count(inst_36365);
var inst_36347 = inst_36366;
var inst_36348 = inst_36365;
var inst_36349 = inst_36367;
var inst_36350 = (0);
var state_36397__$1 = (function (){var statearr_36433 = state_36397;
(statearr_36433[(8)] = inst_36349);

(statearr_36433[(9)] = inst_36347);

(statearr_36433[(10)] = inst_36348);

(statearr_36433[(12)] = inst_36350);

return statearr_36433;
})();
var statearr_36434_38066 = state_36397__$1;
(statearr_36434_38066[(2)] = null);

(statearr_36434_38066[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36398 === (3))){
var inst_36394 = (state_36397[(2)]);
var state_36397__$1 = state_36397;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36397__$1,inst_36394);
} else {
if((state_val_36398 === (12))){
var inst_36382 = (state_36397[(2)]);
var state_36397__$1 = state_36397;
var statearr_36437_38067 = state_36397__$1;
(statearr_36437_38067[(2)] = inst_36382);

(statearr_36437_38067[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36398 === (2))){
var state_36397__$1 = state_36397;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36397__$1,(4),in$);
} else {
if((state_val_36398 === (23))){
var inst_36390 = (state_36397[(2)]);
var state_36397__$1 = state_36397;
var statearr_36439_38068 = state_36397__$1;
(statearr_36439_38068[(2)] = inst_36390);

(statearr_36439_38068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36398 === (19))){
var inst_36377 = (state_36397[(2)]);
var state_36397__$1 = state_36397;
var statearr_36441_38071 = state_36397__$1;
(statearr_36441_38071[(2)] = inst_36377);

(statearr_36441_38071[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36398 === (11))){
var inst_36347 = (state_36397[(9)]);
var inst_36361 = (state_36397[(7)]);
var inst_36361__$1 = cljs.core.seq(inst_36347);
var state_36397__$1 = (function (){var statearr_36442 = state_36397;
(statearr_36442[(7)] = inst_36361__$1);

return statearr_36442;
})();
if(inst_36361__$1){
var statearr_36443_38073 = state_36397__$1;
(statearr_36443_38073[(1)] = (14));

} else {
var statearr_36444_38074 = state_36397__$1;
(statearr_36444_38074[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36398 === (9))){
var inst_36384 = (state_36397[(2)]);
var inst_36385 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36397__$1 = (function (){var statearr_36447 = state_36397;
(statearr_36447[(15)] = inst_36384);

return statearr_36447;
})();
if(cljs.core.truth_(inst_36385)){
var statearr_36448_38075 = state_36397__$1;
(statearr_36448_38075[(1)] = (21));

} else {
var statearr_36449_38076 = state_36397__$1;
(statearr_36449_38076[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36398 === (5))){
var inst_36339 = cljs.core.async.close_BANG_(out);
var state_36397__$1 = state_36397;
var statearr_36450_38079 = state_36397__$1;
(statearr_36450_38079[(2)] = inst_36339);

(statearr_36450_38079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36398 === (14))){
var inst_36361 = (state_36397[(7)]);
var inst_36363 = cljs.core.chunked_seq_QMARK_(inst_36361);
var state_36397__$1 = state_36397;
if(inst_36363){
var statearr_36452_38081 = state_36397__$1;
(statearr_36452_38081[(1)] = (17));

} else {
var statearr_36454_38082 = state_36397__$1;
(statearr_36454_38082[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36398 === (16))){
var inst_36380 = (state_36397[(2)]);
var state_36397__$1 = state_36397;
var statearr_36457_38083 = state_36397__$1;
(statearr_36457_38083[(2)] = inst_36380);

(statearr_36457_38083[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36398 === (10))){
var inst_36348 = (state_36397[(10)]);
var inst_36350 = (state_36397[(12)]);
var inst_36355 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36348,inst_36350);
var state_36397__$1 = state_36397;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36397__$1,(13),out,inst_36355);
} else {
if((state_val_36398 === (18))){
var inst_36361 = (state_36397[(7)]);
var inst_36370 = cljs.core.first(inst_36361);
var state_36397__$1 = state_36397;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36397__$1,(20),out,inst_36370);
} else {
if((state_val_36398 === (8))){
var inst_36349 = (state_36397[(8)]);
var inst_36350 = (state_36397[(12)]);
var inst_36352 = (inst_36350 < inst_36349);
var inst_36353 = inst_36352;
var state_36397__$1 = state_36397;
if(cljs.core.truth_(inst_36353)){
var statearr_36465_38087 = state_36397__$1;
(statearr_36465_38087[(1)] = (10));

} else {
var statearr_36467_38088 = state_36397__$1;
(statearr_36467_38088[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_36468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36468[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__);

(statearr_36468[(1)] = (1));

return statearr_36468;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____1 = (function (state_36397){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36397);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36470){if((e36470 instanceof Object)){
var ex__34203__auto__ = e36470;
var statearr_36471_38090 = state_36397;
(statearr_36471_38090[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36470;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38093 = state_36397;
state_36397 = G__38093;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__ = function(state_36397){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____1.call(this,state_36397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36474 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36474[(6)] = c__34267__auto__);

return statearr_36474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));

return c__34267__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36478 = arguments.length;
switch (G__36478) {
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
var G__36484 = arguments.length;
switch (G__36484) {
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
var G__36495 = arguments.length;
switch (G__36495) {
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
var c__34267__auto___38103 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36522){
var state_val_36523 = (state_36522[(1)]);
if((state_val_36523 === (7))){
var inst_36516 = (state_36522[(2)]);
var state_36522__$1 = state_36522;
var statearr_36526_38104 = state_36522__$1;
(statearr_36526_38104[(2)] = inst_36516);

(statearr_36526_38104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (1))){
var inst_36497 = null;
var state_36522__$1 = (function (){var statearr_36527 = state_36522;
(statearr_36527[(7)] = inst_36497);

return statearr_36527;
})();
var statearr_36528_38105 = state_36522__$1;
(statearr_36528_38105[(2)] = null);

(statearr_36528_38105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (4))){
var inst_36501 = (state_36522[(8)]);
var inst_36501__$1 = (state_36522[(2)]);
var inst_36502 = (inst_36501__$1 == null);
var inst_36503 = cljs.core.not(inst_36502);
var state_36522__$1 = (function (){var statearr_36530 = state_36522;
(statearr_36530[(8)] = inst_36501__$1);

return statearr_36530;
})();
if(inst_36503){
var statearr_36531_38109 = state_36522__$1;
(statearr_36531_38109[(1)] = (5));

} else {
var statearr_36532_38110 = state_36522__$1;
(statearr_36532_38110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (6))){
var state_36522__$1 = state_36522;
var statearr_36534_38111 = state_36522__$1;
(statearr_36534_38111[(2)] = null);

(statearr_36534_38111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (3))){
var inst_36518 = (state_36522[(2)]);
var inst_36519 = cljs.core.async.close_BANG_(out);
var state_36522__$1 = (function (){var statearr_36536 = state_36522;
(statearr_36536[(9)] = inst_36518);

return statearr_36536;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36522__$1,inst_36519);
} else {
if((state_val_36523 === (2))){
var state_36522__$1 = state_36522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36522__$1,(4),ch);
} else {
if((state_val_36523 === (11))){
var inst_36501 = (state_36522[(8)]);
var inst_36510 = (state_36522[(2)]);
var inst_36497 = inst_36501;
var state_36522__$1 = (function (){var statearr_36537 = state_36522;
(statearr_36537[(10)] = inst_36510);

(statearr_36537[(7)] = inst_36497);

return statearr_36537;
})();
var statearr_36538_38115 = state_36522__$1;
(statearr_36538_38115[(2)] = null);

(statearr_36538_38115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (9))){
var inst_36501 = (state_36522[(8)]);
var state_36522__$1 = state_36522;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36522__$1,(11),out,inst_36501);
} else {
if((state_val_36523 === (5))){
var inst_36501 = (state_36522[(8)]);
var inst_36497 = (state_36522[(7)]);
var inst_36505 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36501,inst_36497);
var state_36522__$1 = state_36522;
if(inst_36505){
var statearr_36544_38116 = state_36522__$1;
(statearr_36544_38116[(1)] = (8));

} else {
var statearr_36546_38117 = state_36522__$1;
(statearr_36546_38117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (10))){
var inst_36513 = (state_36522[(2)]);
var state_36522__$1 = state_36522;
var statearr_36547_38119 = state_36522__$1;
(statearr_36547_38119[(2)] = inst_36513);

(statearr_36547_38119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (8))){
var inst_36497 = (state_36522[(7)]);
var tmp36542 = inst_36497;
var inst_36497__$1 = tmp36542;
var state_36522__$1 = (function (){var statearr_36548 = state_36522;
(statearr_36548[(7)] = inst_36497__$1);

return statearr_36548;
})();
var statearr_36549_38122 = state_36522__$1;
(statearr_36549_38122[(2)] = null);

(statearr_36549_38122[(1)] = (2));


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
var cljs$core$async$state_machine__34200__auto__ = null;
var cljs$core$async$state_machine__34200__auto____0 = (function (){
var statearr_36552 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36552[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36552[(1)] = (1));

return statearr_36552;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36522){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36522);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36554){if((e36554 instanceof Object)){
var ex__34203__auto__ = e36554;
var statearr_36556_38124 = state_36522;
(statearr_36556_38124[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36554;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38126 = state_36522;
state_36522 = G__38126;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36522){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36564 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36564[(6)] = c__34267__auto___38103);

return statearr_36564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36568 = arguments.length;
switch (G__36568) {
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
var c__34267__auto___38130 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36610){
var state_val_36611 = (state_36610[(1)]);
if((state_val_36611 === (7))){
var inst_36604 = (state_36610[(2)]);
var state_36610__$1 = state_36610;
var statearr_36614_38133 = state_36610__$1;
(statearr_36614_38133[(2)] = inst_36604);

(statearr_36614_38133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36611 === (1))){
var inst_36571 = (new Array(n));
var inst_36572 = inst_36571;
var inst_36573 = (0);
var state_36610__$1 = (function (){var statearr_36618 = state_36610;
(statearr_36618[(7)] = inst_36573);

(statearr_36618[(8)] = inst_36572);

return statearr_36618;
})();
var statearr_36624_38134 = state_36610__$1;
(statearr_36624_38134[(2)] = null);

(statearr_36624_38134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36611 === (4))){
var inst_36576 = (state_36610[(9)]);
var inst_36576__$1 = (state_36610[(2)]);
var inst_36577 = (inst_36576__$1 == null);
var inst_36578 = cljs.core.not(inst_36577);
var state_36610__$1 = (function (){var statearr_36627 = state_36610;
(statearr_36627[(9)] = inst_36576__$1);

return statearr_36627;
})();
if(inst_36578){
var statearr_36628_38136 = state_36610__$1;
(statearr_36628_38136[(1)] = (5));

} else {
var statearr_36630_38138 = state_36610__$1;
(statearr_36630_38138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36611 === (15))){
var inst_36598 = (state_36610[(2)]);
var state_36610__$1 = state_36610;
var statearr_36631_38140 = state_36610__$1;
(statearr_36631_38140[(2)] = inst_36598);

(statearr_36631_38140[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36611 === (13))){
var state_36610__$1 = state_36610;
var statearr_36636_38141 = state_36610__$1;
(statearr_36636_38141[(2)] = null);

(statearr_36636_38141[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36611 === (6))){
var inst_36573 = (state_36610[(7)]);
var inst_36594 = (inst_36573 > (0));
var state_36610__$1 = state_36610;
if(cljs.core.truth_(inst_36594)){
var statearr_36637_38142 = state_36610__$1;
(statearr_36637_38142[(1)] = (12));

} else {
var statearr_36639_38143 = state_36610__$1;
(statearr_36639_38143[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36611 === (3))){
var inst_36607 = (state_36610[(2)]);
var state_36610__$1 = state_36610;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36610__$1,inst_36607);
} else {
if((state_val_36611 === (12))){
var inst_36572 = (state_36610[(8)]);
var inst_36596 = cljs.core.vec(inst_36572);
var state_36610__$1 = state_36610;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36610__$1,(15),out,inst_36596);
} else {
if((state_val_36611 === (2))){
var state_36610__$1 = state_36610;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36610__$1,(4),ch);
} else {
if((state_val_36611 === (11))){
var inst_36588 = (state_36610[(2)]);
var inst_36589 = (new Array(n));
var inst_36572 = inst_36589;
var inst_36573 = (0);
var state_36610__$1 = (function (){var statearr_36646 = state_36610;
(statearr_36646[(10)] = inst_36588);

(statearr_36646[(7)] = inst_36573);

(statearr_36646[(8)] = inst_36572);

return statearr_36646;
})();
var statearr_36649_38147 = state_36610__$1;
(statearr_36649_38147[(2)] = null);

(statearr_36649_38147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36611 === (9))){
var inst_36572 = (state_36610[(8)]);
var inst_36586 = cljs.core.vec(inst_36572);
var state_36610__$1 = state_36610;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36610__$1,(11),out,inst_36586);
} else {
if((state_val_36611 === (5))){
var inst_36573 = (state_36610[(7)]);
var inst_36576 = (state_36610[(9)]);
var inst_36572 = (state_36610[(8)]);
var inst_36581 = (state_36610[(11)]);
var inst_36580 = (inst_36572[inst_36573] = inst_36576);
var inst_36581__$1 = (inst_36573 + (1));
var inst_36582 = (inst_36581__$1 < n);
var state_36610__$1 = (function (){var statearr_36657 = state_36610;
(statearr_36657[(12)] = inst_36580);

(statearr_36657[(11)] = inst_36581__$1);

return statearr_36657;
})();
if(cljs.core.truth_(inst_36582)){
var statearr_36658_38151 = state_36610__$1;
(statearr_36658_38151[(1)] = (8));

} else {
var statearr_36659_38152 = state_36610__$1;
(statearr_36659_38152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36611 === (14))){
var inst_36601 = (state_36610[(2)]);
var inst_36602 = cljs.core.async.close_BANG_(out);
var state_36610__$1 = (function (){var statearr_36661 = state_36610;
(statearr_36661[(13)] = inst_36601);

return statearr_36661;
})();
var statearr_36662_38153 = state_36610__$1;
(statearr_36662_38153[(2)] = inst_36602);

(statearr_36662_38153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36611 === (10))){
var inst_36592 = (state_36610[(2)]);
var state_36610__$1 = state_36610;
var statearr_36665_38155 = state_36610__$1;
(statearr_36665_38155[(2)] = inst_36592);

(statearr_36665_38155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36611 === (8))){
var inst_36572 = (state_36610[(8)]);
var inst_36581 = (state_36610[(11)]);
var tmp36660 = inst_36572;
var inst_36572__$1 = tmp36660;
var inst_36573 = inst_36581;
var state_36610__$1 = (function (){var statearr_36666 = state_36610;
(statearr_36666[(7)] = inst_36573);

(statearr_36666[(8)] = inst_36572__$1);

return statearr_36666;
})();
var statearr_36667_38158 = state_36610__$1;
(statearr_36667_38158[(2)] = null);

(statearr_36667_38158[(1)] = (2));


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
var cljs$core$async$state_machine__34200__auto__ = null;
var cljs$core$async$state_machine__34200__auto____0 = (function (){
var statearr_36671 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36671[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36671[(1)] = (1));

return statearr_36671;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36610){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36610);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36672){if((e36672 instanceof Object)){
var ex__34203__auto__ = e36672;
var statearr_36673_38160 = state_36610;
(statearr_36673_38160[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36672;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38162 = state_36610;
state_36610 = G__38162;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36610){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36674 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36674[(6)] = c__34267__auto___38130);

return statearr_36674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36676 = arguments.length;
switch (G__36676) {
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
var c__34267__auto___38166 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36724){
var state_val_36725 = (state_36724[(1)]);
if((state_val_36725 === (7))){
var inst_36719 = (state_36724[(2)]);
var state_36724__$1 = state_36724;
var statearr_36726_38169 = state_36724__$1;
(statearr_36726_38169[(2)] = inst_36719);

(statearr_36726_38169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (1))){
var inst_36679 = [];
var inst_36680 = inst_36679;
var inst_36681 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36724__$1 = (function (){var statearr_36728 = state_36724;
(statearr_36728[(7)] = inst_36681);

(statearr_36728[(8)] = inst_36680);

return statearr_36728;
})();
var statearr_36729_38170 = state_36724__$1;
(statearr_36729_38170[(2)] = null);

(statearr_36729_38170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (4))){
var inst_36684 = (state_36724[(9)]);
var inst_36684__$1 = (state_36724[(2)]);
var inst_36685 = (inst_36684__$1 == null);
var inst_36686 = cljs.core.not(inst_36685);
var state_36724__$1 = (function (){var statearr_36730 = state_36724;
(statearr_36730[(9)] = inst_36684__$1);

return statearr_36730;
})();
if(inst_36686){
var statearr_36732_38171 = state_36724__$1;
(statearr_36732_38171[(1)] = (5));

} else {
var statearr_36733_38173 = state_36724__$1;
(statearr_36733_38173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (15))){
var inst_36713 = (state_36724[(2)]);
var state_36724__$1 = state_36724;
var statearr_36736_38175 = state_36724__$1;
(statearr_36736_38175[(2)] = inst_36713);

(statearr_36736_38175[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (13))){
var state_36724__$1 = state_36724;
var statearr_36739_38177 = state_36724__$1;
(statearr_36739_38177[(2)] = null);

(statearr_36739_38177[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (6))){
var inst_36680 = (state_36724[(8)]);
var inst_36707 = inst_36680.length;
var inst_36708 = (inst_36707 > (0));
var state_36724__$1 = state_36724;
if(cljs.core.truth_(inst_36708)){
var statearr_36740_38178 = state_36724__$1;
(statearr_36740_38178[(1)] = (12));

} else {
var statearr_36741_38179 = state_36724__$1;
(statearr_36741_38179[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (3))){
var inst_36721 = (state_36724[(2)]);
var state_36724__$1 = state_36724;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36724__$1,inst_36721);
} else {
if((state_val_36725 === (12))){
var inst_36680 = (state_36724[(8)]);
var inst_36711 = cljs.core.vec(inst_36680);
var state_36724__$1 = state_36724;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36724__$1,(15),out,inst_36711);
} else {
if((state_val_36725 === (2))){
var state_36724__$1 = state_36724;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36724__$1,(4),ch);
} else {
if((state_val_36725 === (11))){
var inst_36684 = (state_36724[(9)]);
var inst_36688 = (state_36724[(10)]);
var inst_36698 = (state_36724[(2)]);
var inst_36700 = [];
var inst_36702 = inst_36700.push(inst_36684);
var inst_36680 = inst_36700;
var inst_36681 = inst_36688;
var state_36724__$1 = (function (){var statearr_36744 = state_36724;
(statearr_36744[(11)] = inst_36698);

(statearr_36744[(7)] = inst_36681);

(statearr_36744[(12)] = inst_36702);

(statearr_36744[(8)] = inst_36680);

return statearr_36744;
})();
var statearr_36745_38182 = state_36724__$1;
(statearr_36745_38182[(2)] = null);

(statearr_36745_38182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (9))){
var inst_36680 = (state_36724[(8)]);
var inst_36696 = cljs.core.vec(inst_36680);
var state_36724__$1 = state_36724;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36724__$1,(11),out,inst_36696);
} else {
if((state_val_36725 === (5))){
var inst_36684 = (state_36724[(9)]);
var inst_36688 = (state_36724[(10)]);
var inst_36681 = (state_36724[(7)]);
var inst_36688__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36684) : f.call(null,inst_36684));
var inst_36689 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36688__$1,inst_36681);
var inst_36690 = cljs.core.keyword_identical_QMARK_(inst_36681,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36691 = ((inst_36689) || (inst_36690));
var state_36724__$1 = (function (){var statearr_36747 = state_36724;
(statearr_36747[(10)] = inst_36688__$1);

return statearr_36747;
})();
if(cljs.core.truth_(inst_36691)){
var statearr_36749_38184 = state_36724__$1;
(statearr_36749_38184[(1)] = (8));

} else {
var statearr_36750_38185 = state_36724__$1;
(statearr_36750_38185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (14))){
var inst_36716 = (state_36724[(2)]);
var inst_36717 = cljs.core.async.close_BANG_(out);
var state_36724__$1 = (function (){var statearr_36752 = state_36724;
(statearr_36752[(13)] = inst_36716);

return statearr_36752;
})();
var statearr_36754_38186 = state_36724__$1;
(statearr_36754_38186[(2)] = inst_36717);

(statearr_36754_38186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (10))){
var inst_36705 = (state_36724[(2)]);
var state_36724__$1 = state_36724;
var statearr_36755_38187 = state_36724__$1;
(statearr_36755_38187[(2)] = inst_36705);

(statearr_36755_38187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (8))){
var inst_36684 = (state_36724[(9)]);
var inst_36688 = (state_36724[(10)]);
var inst_36680 = (state_36724[(8)]);
var inst_36693 = inst_36680.push(inst_36684);
var tmp36751 = inst_36680;
var inst_36680__$1 = tmp36751;
var inst_36681 = inst_36688;
var state_36724__$1 = (function (){var statearr_36757 = state_36724;
(statearr_36757[(14)] = inst_36693);

(statearr_36757[(7)] = inst_36681);

(statearr_36757[(8)] = inst_36680__$1);

return statearr_36757;
})();
var statearr_36758_38190 = state_36724__$1;
(statearr_36758_38190[(2)] = null);

(statearr_36758_38190[(1)] = (2));


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
var cljs$core$async$state_machine__34200__auto__ = null;
var cljs$core$async$state_machine__34200__auto____0 = (function (){
var statearr_36760 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36760[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36760[(1)] = (1));

return statearr_36760;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36724){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36724);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36761){if((e36761 instanceof Object)){
var ex__34203__auto__ = e36761;
var statearr_36762_38195 = state_36724;
(statearr_36762_38195[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36761;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38196 = state_36724;
state_36724 = G__38196;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36724){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36764 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36764[(6)] = c__34267__auto___38166);

return statearr_36764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
