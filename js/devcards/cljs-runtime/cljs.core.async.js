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
var G__34327 = arguments.length;
switch (G__34327) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34328 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34328 = (function (f,blockable,meta34329){
this.f = f;
this.blockable = blockable;
this.meta34329 = meta34329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34330,meta34329__$1){
var self__ = this;
var _34330__$1 = this;
return (new cljs.core.async.t_cljs$core$async34328(self__.f,self__.blockable,meta34329__$1));
}));

(cljs.core.async.t_cljs$core$async34328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34330){
var self__ = this;
var _34330__$1 = this;
return self__.meta34329;
}));

(cljs.core.async.t_cljs$core$async34328.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34328.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34328.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async34328.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async34328.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34329","meta34329",-1253183027,null)], null);
}));

(cljs.core.async.t_cljs$core$async34328.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34328.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34328");

(cljs.core.async.t_cljs$core$async34328.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34328");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34328.
 */
cljs.core.async.__GT_t_cljs$core$async34328 = (function cljs$core$async$__GT_t_cljs$core$async34328(f__$1,blockable__$1,meta34329){
return (new cljs.core.async.t_cljs$core$async34328(f__$1,blockable__$1,meta34329));
});

}

return (new cljs.core.async.t_cljs$core$async34328(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var val_36864 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36864) : fn1.call(null,val_36864));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36864) : fn1.call(null,val_36864));
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
var n__4666__auto___36868 = n;
var x_36869 = (0);
while(true){
if((x_36869 < n__4666__auto___36868)){
(a[x_36869] = x_36869);

var G__36870 = (x_36869 + (1));
x_36869 = G__36870;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34344 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34344 = (function (flag,meta34345){
this.flag = flag;
this.meta34345 = meta34345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34346,meta34345__$1){
var self__ = this;
var _34346__$1 = this;
return (new cljs.core.async.t_cljs$core$async34344(self__.flag,meta34345__$1));
}));

(cljs.core.async.t_cljs$core$async34344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34346){
var self__ = this;
var _34346__$1 = this;
return self__.meta34345;
}));

(cljs.core.async.t_cljs$core$async34344.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34344.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34344.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34344.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async34344.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34345","meta34345",1950465517,null)], null);
}));

(cljs.core.async.t_cljs$core$async34344.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34344");

(cljs.core.async.t_cljs$core$async34344.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34344");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34344.
 */
cljs.core.async.__GT_t_cljs$core$async34344 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34344(flag__$1,meta34345){
return (new cljs.core.async.t_cljs$core$async34344(flag__$1,meta34345));
});

}

return (new cljs.core.async.t_cljs$core$async34344(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34352 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34352 = (function (flag,cb,meta34353){
this.flag = flag;
this.cb = cb;
this.meta34353 = meta34353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34354,meta34353__$1){
var self__ = this;
var _34354__$1 = this;
return (new cljs.core.async.t_cljs$core$async34352(self__.flag,self__.cb,meta34353__$1));
}));

(cljs.core.async.t_cljs$core$async34352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34354){
var self__ = this;
var _34354__$1 = this;
return self__.meta34353;
}));

(cljs.core.async.t_cljs$core$async34352.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34352.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34352.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34352.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34353","meta34353",-42975121,null)], null);
}));

(cljs.core.async.t_cljs$core$async34352.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34352");

(cljs.core.async.t_cljs$core$async34352.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34352");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34352.
 */
cljs.core.async.__GT_t_cljs$core$async34352 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34352(flag__$1,cb__$1,meta34353){
return (new cljs.core.async.t_cljs$core$async34352(flag__$1,cb__$1,meta34353));
});

}

return (new cljs.core.async.t_cljs$core$async34352(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34366 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34355_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34366) : fret.call(null,G__34366));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34356_SHARP_){
var G__34367 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34356_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34367) : fret.call(null,G__34367));
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
var G__36876 = (i + (1));
i = G__36876;
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
var len__4789__auto___36879 = arguments.length;
var i__4790__auto___36880 = (0);
while(true){
if((i__4790__auto___36880 < len__4789__auto___36879)){
args__4795__auto__.push((arguments[i__4790__auto___36880]));

var G__36881 = (i__4790__auto___36880 + (1));
i__4790__auto___36880 = G__36881;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34373){
var map__34374 = p__34373;
var map__34374__$1 = (((((!((map__34374 == null))))?(((((map__34374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34374):map__34374);
var opts = map__34374__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34371){
var G__34372 = cljs.core.first(seq34371);
var seq34371__$1 = cljs.core.next(seq34371);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34372,seq34371__$1);
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
var G__34380 = arguments.length;
switch (G__34380) {
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
var c__34267__auto___36887 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34416){
var state_val_34417 = (state_34416[(1)]);
if((state_val_34417 === (7))){
var inst_34412 = (state_34416[(2)]);
var state_34416__$1 = state_34416;
var statearr_34418_36889 = state_34416__$1;
(statearr_34418_36889[(2)] = inst_34412);

(statearr_34418_36889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (1))){
var state_34416__$1 = state_34416;
var statearr_34419_36890 = state_34416__$1;
(statearr_34419_36890[(2)] = null);

(statearr_34419_36890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (4))){
var inst_34395 = (state_34416[(7)]);
var inst_34395__$1 = (state_34416[(2)]);
var inst_34396 = (inst_34395__$1 == null);
var state_34416__$1 = (function (){var statearr_34420 = state_34416;
(statearr_34420[(7)] = inst_34395__$1);

return statearr_34420;
})();
if(cljs.core.truth_(inst_34396)){
var statearr_34421_36892 = state_34416__$1;
(statearr_34421_36892[(1)] = (5));

} else {
var statearr_34422_36893 = state_34416__$1;
(statearr_34422_36893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (13))){
var state_34416__$1 = state_34416;
var statearr_34423_36894 = state_34416__$1;
(statearr_34423_36894[(2)] = null);

(statearr_34423_36894[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (6))){
var inst_34395 = (state_34416[(7)]);
var state_34416__$1 = state_34416;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34416__$1,(11),to,inst_34395);
} else {
if((state_val_34417 === (3))){
var inst_34414 = (state_34416[(2)]);
var state_34416__$1 = state_34416;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34416__$1,inst_34414);
} else {
if((state_val_34417 === (12))){
var state_34416__$1 = state_34416;
var statearr_34424_36896 = state_34416__$1;
(statearr_34424_36896[(2)] = null);

(statearr_34424_36896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (2))){
var state_34416__$1 = state_34416;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34416__$1,(4),from);
} else {
if((state_val_34417 === (11))){
var inst_34405 = (state_34416[(2)]);
var state_34416__$1 = state_34416;
if(cljs.core.truth_(inst_34405)){
var statearr_34425_36898 = state_34416__$1;
(statearr_34425_36898[(1)] = (12));

} else {
var statearr_34426_36899 = state_34416__$1;
(statearr_34426_36899[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (9))){
var state_34416__$1 = state_34416;
var statearr_34431_36901 = state_34416__$1;
(statearr_34431_36901[(2)] = null);

(statearr_34431_36901[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (5))){
var state_34416__$1 = state_34416;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34432_36902 = state_34416__$1;
(statearr_34432_36902[(1)] = (8));

} else {
var statearr_34433_36903 = state_34416__$1;
(statearr_34433_36903[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (14))){
var inst_34410 = (state_34416[(2)]);
var state_34416__$1 = state_34416;
var statearr_34434_36905 = state_34416__$1;
(statearr_34434_36905[(2)] = inst_34410);

(statearr_34434_36905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (10))){
var inst_34402 = (state_34416[(2)]);
var state_34416__$1 = state_34416;
var statearr_34435_36906 = state_34416__$1;
(statearr_34435_36906[(2)] = inst_34402);

(statearr_34435_36906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (8))){
var inst_34399 = cljs.core.async.close_BANG_(to);
var state_34416__$1 = state_34416;
var statearr_34436_36908 = state_34416__$1;
(statearr_34436_36908[(2)] = inst_34399);

(statearr_34436_36908[(1)] = (10));


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
var statearr_34438 = [null,null,null,null,null,null,null,null];
(statearr_34438[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_34438[(1)] = (1));

return statearr_34438;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_34416){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34416);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34439){if((e34439 instanceof Object)){
var ex__34203__auto__ = e34439;
var statearr_34440_36910 = state_34416;
(statearr_34440_36910[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34439;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36912 = state_34416;
state_34416 = G__36912;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_34416){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_34416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34441 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34441[(6)] = c__34267__auto___36887);

return statearr_34441;
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
var c__34267__auto___36915 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34452){
var state_val_34453 = (state_34452[(1)]);
if((state_val_34453 === (1))){
var state_34452__$1 = state_34452;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34452__$1,(2),res,v);
} else {
if((state_val_34453 === (2))){
var inst_34449 = (state_34452[(2)]);
var inst_34450 = cljs.core.async.close_BANG_(res);
var state_34452__$1 = (function (){var statearr_34455 = state_34452;
(statearr_34455[(7)] = inst_34449);

return statearr_34455;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34452__$1,inst_34450);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_34456 = [null,null,null,null,null,null,null,null];
(statearr_34456[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34456[(1)] = (1));

return statearr_34456;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34452){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34452);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34457){if((e34457 instanceof Object)){
var ex__34203__auto__ = e34457;
var statearr_34460_36918 = state_34452;
(statearr_34460_36918[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34457;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36920 = state_34452;
state_34452 = G__36920;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34452){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34464 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34464[(6)] = c__34267__auto___36915);

return statearr_34464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34467){
var vec__34468 = p__34467;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34468,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34468,(1),null);
var job = vec__34468;
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
var n__4666__auto___36929 = n;
var __36930 = (0);
while(true){
if((__36930 < n__4666__auto___36929)){
var G__34472_36931 = type;
var G__34472_36932__$1 = (((G__34472_36931 instanceof cljs.core.Keyword))?G__34472_36931.fqn:null);
switch (G__34472_36932__$1) {
case "compute":
var c__34267__auto___36934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36930,c__34267__auto___36934,G__34472_36931,G__34472_36932__$1,n__4666__auto___36929,jobs,results,process,async){
return (function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = ((function (__36930,c__34267__auto___36934,G__34472_36931,G__34472_36932__$1,n__4666__auto___36929,jobs,results,process,async){
return (function (state_34485){
var state_val_34486 = (state_34485[(1)]);
if((state_val_34486 === (1))){
var state_34485__$1 = state_34485;
var statearr_34488_36935 = state_34485__$1;
(statearr_34488_36935[(2)] = null);

(statearr_34488_36935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (2))){
var state_34485__$1 = state_34485;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34485__$1,(4),jobs);
} else {
if((state_val_34486 === (3))){
var inst_34483 = (state_34485[(2)]);
var state_34485__$1 = state_34485;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34485__$1,inst_34483);
} else {
if((state_val_34486 === (4))){
var inst_34475 = (state_34485[(2)]);
var inst_34476 = process(inst_34475);
var state_34485__$1 = state_34485;
if(cljs.core.truth_(inst_34476)){
var statearr_34495_36940 = state_34485__$1;
(statearr_34495_36940[(1)] = (5));

} else {
var statearr_34496_36941 = state_34485__$1;
(statearr_34496_36941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (5))){
var state_34485__$1 = state_34485;
var statearr_34497_36942 = state_34485__$1;
(statearr_34497_36942[(2)] = null);

(statearr_34497_36942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (6))){
var state_34485__$1 = state_34485;
var statearr_34498_36943 = state_34485__$1;
(statearr_34498_36943[(2)] = null);

(statearr_34498_36943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34486 === (7))){
var inst_34481 = (state_34485[(2)]);
var state_34485__$1 = state_34485;
var statearr_34499_36944 = state_34485__$1;
(statearr_34499_36944[(2)] = inst_34481);

(statearr_34499_36944[(1)] = (3));


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
});})(__36930,c__34267__auto___36934,G__34472_36931,G__34472_36932__$1,n__4666__auto___36929,jobs,results,process,async))
;
return ((function (__36930,switch__34199__auto__,c__34267__auto___36934,G__34472_36931,G__34472_36932__$1,n__4666__auto___36929,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_34500 = [null,null,null,null,null,null,null];
(statearr_34500[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34500[(1)] = (1));

return statearr_34500;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34485){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34485);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34501){if((e34501 instanceof Object)){
var ex__34203__auto__ = e34501;
var statearr_34502_36950 = state_34485;
(statearr_34502_36950[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34501;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36952 = state_34485;
state_34485 = G__36952;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34485){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
;})(__36930,switch__34199__auto__,c__34267__auto___36934,G__34472_36931,G__34472_36932__$1,n__4666__auto___36929,jobs,results,process,async))
})();
var state__34269__auto__ = (function (){var statearr_34503 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34503[(6)] = c__34267__auto___36934);

return statearr_34503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
});})(__36930,c__34267__auto___36934,G__34472_36931,G__34472_36932__$1,n__4666__auto___36929,jobs,results,process,async))
);


break;
case "async":
var c__34267__auto___36954 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36930,c__34267__auto___36954,G__34472_36931,G__34472_36932__$1,n__4666__auto___36929,jobs,results,process,async){
return (function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = ((function (__36930,c__34267__auto___36954,G__34472_36931,G__34472_36932__$1,n__4666__auto___36929,jobs,results,process,async){
return (function (state_34516){
var state_val_34517 = (state_34516[(1)]);
if((state_val_34517 === (1))){
var state_34516__$1 = state_34516;
var statearr_34520_36955 = state_34516__$1;
(statearr_34520_36955[(2)] = null);

(statearr_34520_36955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (2))){
var state_34516__$1 = state_34516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34516__$1,(4),jobs);
} else {
if((state_val_34517 === (3))){
var inst_34514 = (state_34516[(2)]);
var state_34516__$1 = state_34516;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34516__$1,inst_34514);
} else {
if((state_val_34517 === (4))){
var inst_34506 = (state_34516[(2)]);
var inst_34507 = async(inst_34506);
var state_34516__$1 = state_34516;
if(cljs.core.truth_(inst_34507)){
var statearr_34522_36957 = state_34516__$1;
(statearr_34522_36957[(1)] = (5));

} else {
var statearr_34523_36959 = state_34516__$1;
(statearr_34523_36959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (5))){
var state_34516__$1 = state_34516;
var statearr_34524_36961 = state_34516__$1;
(statearr_34524_36961[(2)] = null);

(statearr_34524_36961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (6))){
var state_34516__$1 = state_34516;
var statearr_34525_36964 = state_34516__$1;
(statearr_34525_36964[(2)] = null);

(statearr_34525_36964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (7))){
var inst_34512 = (state_34516[(2)]);
var state_34516__$1 = state_34516;
var statearr_34526_36966 = state_34516__$1;
(statearr_34526_36966[(2)] = inst_34512);

(statearr_34526_36966[(1)] = (3));


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
});})(__36930,c__34267__auto___36954,G__34472_36931,G__34472_36932__$1,n__4666__auto___36929,jobs,results,process,async))
;
return ((function (__36930,switch__34199__auto__,c__34267__auto___36954,G__34472_36931,G__34472_36932__$1,n__4666__auto___36929,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_34527 = [null,null,null,null,null,null,null];
(statearr_34527[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34527[(1)] = (1));

return statearr_34527;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34516){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34516);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34528){if((e34528 instanceof Object)){
var ex__34203__auto__ = e34528;
var statearr_34529_36969 = state_34516;
(statearr_34529_36969[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34528;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36972 = state_34516;
state_34516 = G__36972;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34516){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
;})(__36930,switch__34199__auto__,c__34267__auto___36954,G__34472_36931,G__34472_36932__$1,n__4666__auto___36929,jobs,results,process,async))
})();
var state__34269__auto__ = (function (){var statearr_34530 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34530[(6)] = c__34267__auto___36954);

return statearr_34530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
});})(__36930,c__34267__auto___36954,G__34472_36931,G__34472_36932__$1,n__4666__auto___36929,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34472_36932__$1)].join('')));

}

var G__36978 = (__36930 + (1));
__36930 = G__36978;
continue;
} else {
}
break;
}

var c__34267__auto___36979 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34552){
var state_val_34553 = (state_34552[(1)]);
if((state_val_34553 === (7))){
var inst_34548 = (state_34552[(2)]);
var state_34552__$1 = state_34552;
var statearr_34554_36982 = state_34552__$1;
(statearr_34554_36982[(2)] = inst_34548);

(statearr_34554_36982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34553 === (1))){
var state_34552__$1 = state_34552;
var statearr_34555_36985 = state_34552__$1;
(statearr_34555_36985[(2)] = null);

(statearr_34555_36985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34553 === (4))){
var inst_34533 = (state_34552[(7)]);
var inst_34533__$1 = (state_34552[(2)]);
var inst_34534 = (inst_34533__$1 == null);
var state_34552__$1 = (function (){var statearr_34556 = state_34552;
(statearr_34556[(7)] = inst_34533__$1);

return statearr_34556;
})();
if(cljs.core.truth_(inst_34534)){
var statearr_34557_36989 = state_34552__$1;
(statearr_34557_36989[(1)] = (5));

} else {
var statearr_34558_36992 = state_34552__$1;
(statearr_34558_36992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34553 === (6))){
var inst_34538 = (state_34552[(8)]);
var inst_34533 = (state_34552[(7)]);
var inst_34538__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34539 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34540 = [inst_34533,inst_34538__$1];
var inst_34541 = (new cljs.core.PersistentVector(null,2,(5),inst_34539,inst_34540,null));
var state_34552__$1 = (function (){var statearr_34559 = state_34552;
(statearr_34559[(8)] = inst_34538__$1);

return statearr_34559;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34552__$1,(8),jobs,inst_34541);
} else {
if((state_val_34553 === (3))){
var inst_34550 = (state_34552[(2)]);
var state_34552__$1 = state_34552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34552__$1,inst_34550);
} else {
if((state_val_34553 === (2))){
var state_34552__$1 = state_34552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34552__$1,(4),from);
} else {
if((state_val_34553 === (9))){
var inst_34545 = (state_34552[(2)]);
var state_34552__$1 = (function (){var statearr_34560 = state_34552;
(statearr_34560[(9)] = inst_34545);

return statearr_34560;
})();
var statearr_34561_37003 = state_34552__$1;
(statearr_34561_37003[(2)] = null);

(statearr_34561_37003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34553 === (5))){
var inst_34536 = cljs.core.async.close_BANG_(jobs);
var state_34552__$1 = state_34552;
var statearr_34562_37006 = state_34552__$1;
(statearr_34562_37006[(2)] = inst_34536);

(statearr_34562_37006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34553 === (8))){
var inst_34538 = (state_34552[(8)]);
var inst_34543 = (state_34552[(2)]);
var state_34552__$1 = (function (){var statearr_34563 = state_34552;
(statearr_34563[(10)] = inst_34543);

return statearr_34563;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34552__$1,(9),results,inst_34538);
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
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34552){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34552);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34565){if((e34565 instanceof Object)){
var ex__34203__auto__ = e34565;
var statearr_34566_37016 = state_34552;
(statearr_34566_37016[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34565;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37019 = state_34552;
state_34552 = G__37019;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34552){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34567 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34567[(6)] = c__34267__auto___36979);

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
var statearr_34607_37031 = state_34605__$1;
(statearr_34607_37031[(2)] = inst_34601);

(statearr_34607_37031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (20))){
var state_34605__$1 = state_34605;
var statearr_34608_37032 = state_34605__$1;
(statearr_34608_37032[(2)] = null);

(statearr_34608_37032[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (1))){
var state_34605__$1 = state_34605;
var statearr_34609_37035 = state_34605__$1;
(statearr_34609_37035[(2)] = null);

(statearr_34609_37035[(1)] = (2));


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
var statearr_34611_37038 = state_34605__$1;
(statearr_34611_37038[(1)] = (5));

} else {
var statearr_34612_37039 = state_34605__$1;
(statearr_34612_37039[(1)] = (6));

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
var statearr_34613_37041 = state_34605__$1;
(statearr_34613_37041[(2)] = inst_34596);

(statearr_34613_37041[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (13))){
var inst_34598 = (state_34605[(2)]);
var state_34605__$1 = (function (){var statearr_34614 = state_34605;
(statearr_34614[(9)] = inst_34598);

return statearr_34614;
})();
var statearr_34615_37045 = state_34605__$1;
(statearr_34615_37045[(2)] = null);

(statearr_34615_37045[(1)] = (2));


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
var statearr_34616_37051 = state_34605__$1;
(statearr_34616_37051[(1)] = (19));

} else {
var statearr_34617_37052 = state_34605__$1;
(statearr_34617_37052[(1)] = (20));

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
var statearr_34618_37058 = state_34605__$1;
(statearr_34618_37058[(2)] = null);

(statearr_34618_37058[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (11))){
var inst_34580 = (state_34605[(2)]);
var state_34605__$1 = (function (){var statearr_34619 = state_34605;
(statearr_34619[(10)] = inst_34580);

return statearr_34619;
})();
var statearr_34620_37062 = state_34605__$1;
(statearr_34620_37062[(2)] = null);

(statearr_34620_37062[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (9))){
var state_34605__$1 = state_34605;
var statearr_34621_37063 = state_34605__$1;
(statearr_34621_37063[(2)] = null);

(statearr_34621_37063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (5))){
var state_34605__$1 = state_34605;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34622_37065 = state_34605__$1;
(statearr_34622_37065[(1)] = (8));

} else {
var statearr_34623_37067 = state_34605__$1;
(statearr_34623_37067[(1)] = (9));

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
var statearr_34625_37069 = state_34605__$1;
(statearr_34625_37069[(1)] = (15));

} else {
var statearr_34626_37070 = state_34605__$1;
(statearr_34626_37070[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (16))){
var state_34605__$1 = state_34605;
var statearr_34627_37071 = state_34605__$1;
(statearr_34627_37071[(2)] = false);

(statearr_34627_37071[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (10))){
var inst_34577 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34628_37075 = state_34605__$1;
(statearr_34628_37075[(2)] = inst_34577);

(statearr_34628_37075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (18))){
var inst_34588 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34632_37077 = state_34605__$1;
(statearr_34632_37077[(2)] = inst_34588);

(statearr_34632_37077[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (8))){
var inst_34574 = cljs.core.async.close_BANG_(to);
var state_34605__$1 = state_34605;
var statearr_34633_37081 = state_34605__$1;
(statearr_34633_37081[(2)] = inst_34574);

(statearr_34633_37081[(1)] = (10));


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
var statearr_34634 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34634[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34634[(1)] = (1));

return statearr_34634;
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
}catch (e34635){if((e34635 instanceof Object)){
var ex__34203__auto__ = e34635;
var statearr_34636_37088 = state_34605;
(statearr_34636_37088[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34635;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37090 = state_34605;
state_34605 = G__37090;
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
var state__34269__auto__ = (function (){var statearr_34640 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34640[(6)] = c__34267__auto__);

return statearr_34640;
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
var G__34644 = arguments.length;
switch (G__34644) {
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
var G__34649 = arguments.length;
switch (G__34649) {
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
var G__34653 = arguments.length;
switch (G__34653) {
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
var c__34267__auto___37109 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34681){
var state_val_34682 = (state_34681[(1)]);
if((state_val_34682 === (7))){
var inst_34677 = (state_34681[(2)]);
var state_34681__$1 = state_34681;
var statearr_34686_37113 = state_34681__$1;
(statearr_34686_37113[(2)] = inst_34677);

(statearr_34686_37113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (1))){
var state_34681__$1 = state_34681;
var statearr_34687_37117 = state_34681__$1;
(statearr_34687_37117[(2)] = null);

(statearr_34687_37117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (4))){
var inst_34658 = (state_34681[(7)]);
var inst_34658__$1 = (state_34681[(2)]);
var inst_34659 = (inst_34658__$1 == null);
var state_34681__$1 = (function (){var statearr_34688 = state_34681;
(statearr_34688[(7)] = inst_34658__$1);

return statearr_34688;
})();
if(cljs.core.truth_(inst_34659)){
var statearr_34689_37123 = state_34681__$1;
(statearr_34689_37123[(1)] = (5));

} else {
var statearr_34690_37124 = state_34681__$1;
(statearr_34690_37124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (13))){
var state_34681__$1 = state_34681;
var statearr_34692_37125 = state_34681__$1;
(statearr_34692_37125[(2)] = null);

(statearr_34692_37125[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (6))){
var inst_34658 = (state_34681[(7)]);
var inst_34664 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34658) : p.call(null,inst_34658));
var state_34681__$1 = state_34681;
if(cljs.core.truth_(inst_34664)){
var statearr_34693_37126 = state_34681__$1;
(statearr_34693_37126[(1)] = (9));

} else {
var statearr_34694_37127 = state_34681__$1;
(statearr_34694_37127[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (3))){
var inst_34679 = (state_34681[(2)]);
var state_34681__$1 = state_34681;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34681__$1,inst_34679);
} else {
if((state_val_34682 === (12))){
var state_34681__$1 = state_34681;
var statearr_34695_37128 = state_34681__$1;
(statearr_34695_37128[(2)] = null);

(statearr_34695_37128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (2))){
var state_34681__$1 = state_34681;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34681__$1,(4),ch);
} else {
if((state_val_34682 === (11))){
var inst_34658 = (state_34681[(7)]);
var inst_34668 = (state_34681[(2)]);
var state_34681__$1 = state_34681;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34681__$1,(8),inst_34668,inst_34658);
} else {
if((state_val_34682 === (9))){
var state_34681__$1 = state_34681;
var statearr_34696_37135 = state_34681__$1;
(statearr_34696_37135[(2)] = tc);

(statearr_34696_37135[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (5))){
var inst_34661 = cljs.core.async.close_BANG_(tc);
var inst_34662 = cljs.core.async.close_BANG_(fc);
var state_34681__$1 = (function (){var statearr_34697 = state_34681;
(statearr_34697[(8)] = inst_34661);

return statearr_34697;
})();
var statearr_34701_37136 = state_34681__$1;
(statearr_34701_37136[(2)] = inst_34662);

(statearr_34701_37136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (14))){
var inst_34675 = (state_34681[(2)]);
var state_34681__$1 = state_34681;
var statearr_34702_37137 = state_34681__$1;
(statearr_34702_37137[(2)] = inst_34675);

(statearr_34702_37137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (10))){
var state_34681__$1 = state_34681;
var statearr_34703_37142 = state_34681__$1;
(statearr_34703_37142[(2)] = fc);

(statearr_34703_37142[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (8))){
var inst_34670 = (state_34681[(2)]);
var state_34681__$1 = state_34681;
if(cljs.core.truth_(inst_34670)){
var statearr_34704_37143 = state_34681__$1;
(statearr_34704_37143[(1)] = (12));

} else {
var statearr_34705_37144 = state_34681__$1;
(statearr_34705_37144[(1)] = (13));

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
var statearr_34709 = [null,null,null,null,null,null,null,null,null];
(statearr_34709[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_34709[(1)] = (1));

return statearr_34709;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_34681){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34681);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34710){if((e34710 instanceof Object)){
var ex__34203__auto__ = e34710;
var statearr_34711_37155 = state_34681;
(statearr_34711_37155[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34710;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37156 = state_34681;
state_34681 = G__37156;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_34681){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_34681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34712 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34712[(6)] = c__34267__auto___37109);

return statearr_34712;
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
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34736){
var state_val_34737 = (state_34736[(1)]);
if((state_val_34737 === (7))){
var inst_34732 = (state_34736[(2)]);
var state_34736__$1 = state_34736;
var statearr_34738_37166 = state_34736__$1;
(statearr_34738_37166[(2)] = inst_34732);

(statearr_34738_37166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34737 === (1))){
var inst_34716 = init;
var state_34736__$1 = (function (){var statearr_34739 = state_34736;
(statearr_34739[(7)] = inst_34716);

return statearr_34739;
})();
var statearr_34740_37169 = state_34736__$1;
(statearr_34740_37169[(2)] = null);

(statearr_34740_37169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34737 === (4))){
var inst_34719 = (state_34736[(8)]);
var inst_34719__$1 = (state_34736[(2)]);
var inst_34720 = (inst_34719__$1 == null);
var state_34736__$1 = (function (){var statearr_34741 = state_34736;
(statearr_34741[(8)] = inst_34719__$1);

return statearr_34741;
})();
if(cljs.core.truth_(inst_34720)){
var statearr_34742_37172 = state_34736__$1;
(statearr_34742_37172[(1)] = (5));

} else {
var statearr_34743_37174 = state_34736__$1;
(statearr_34743_37174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34737 === (6))){
var inst_34716 = (state_34736[(7)]);
var inst_34719 = (state_34736[(8)]);
var inst_34723 = (state_34736[(9)]);
var inst_34723__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34716,inst_34719) : f.call(null,inst_34716,inst_34719));
var inst_34724 = cljs.core.reduced_QMARK_(inst_34723__$1);
var state_34736__$1 = (function (){var statearr_34744 = state_34736;
(statearr_34744[(9)] = inst_34723__$1);

return statearr_34744;
})();
if(inst_34724){
var statearr_34745_37184 = state_34736__$1;
(statearr_34745_37184[(1)] = (8));

} else {
var statearr_34746_37185 = state_34736__$1;
(statearr_34746_37185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34737 === (3))){
var inst_34734 = (state_34736[(2)]);
var state_34736__$1 = state_34736;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34736__$1,inst_34734);
} else {
if((state_val_34737 === (2))){
var state_34736__$1 = state_34736;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34736__$1,(4),ch);
} else {
if((state_val_34737 === (9))){
var inst_34723 = (state_34736[(9)]);
var inst_34716 = inst_34723;
var state_34736__$1 = (function (){var statearr_34747 = state_34736;
(statearr_34747[(7)] = inst_34716);

return statearr_34747;
})();
var statearr_34748_37190 = state_34736__$1;
(statearr_34748_37190[(2)] = null);

(statearr_34748_37190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34737 === (5))){
var inst_34716 = (state_34736[(7)]);
var state_34736__$1 = state_34736;
var statearr_34749_37192 = state_34736__$1;
(statearr_34749_37192[(2)] = inst_34716);

(statearr_34749_37192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34737 === (10))){
var inst_34730 = (state_34736[(2)]);
var state_34736__$1 = state_34736;
var statearr_34750_37195 = state_34736__$1;
(statearr_34750_37195[(2)] = inst_34730);

(statearr_34750_37195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34737 === (8))){
var inst_34723 = (state_34736[(9)]);
var inst_34726 = cljs.core.deref(inst_34723);
var state_34736__$1 = state_34736;
var statearr_34751_37196 = state_34736__$1;
(statearr_34751_37196[(2)] = inst_34726);

(statearr_34751_37196[(1)] = (10));


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
var statearr_34752 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34752[(0)] = cljs$core$async$reduce_$_state_machine__34200__auto__);

(statearr_34752[(1)] = (1));

return statearr_34752;
});
var cljs$core$async$reduce_$_state_machine__34200__auto____1 = (function (state_34736){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34736);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34753){if((e34753 instanceof Object)){
var ex__34203__auto__ = e34753;
var statearr_34754_37200 = state_34736;
(statearr_34754_37200[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34753;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37204 = state_34736;
state_34736 = G__37204;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34200__auto__ = function(state_34736){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34200__auto____1.call(this,state_34736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34200__auto____0;
cljs$core$async$reduce_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34200__auto____1;
return cljs$core$async$reduce_$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34755 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34755[(6)] = c__34267__auto__);

return statearr_34755;
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
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34764){
var state_val_34765 = (state_34764[(1)]);
if((state_val_34765 === (1))){
var inst_34759 = cljs.core.async.reduce(f__$1,init,ch);
var state_34764__$1 = state_34764;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34764__$1,(2),inst_34759);
} else {
if((state_val_34765 === (2))){
var inst_34761 = (state_34764[(2)]);
var inst_34762 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34761) : f__$1.call(null,inst_34761));
var state_34764__$1 = state_34764;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34764__$1,inst_34762);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34200__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34200__auto____0 = (function (){
var statearr_34770 = [null,null,null,null,null,null,null];
(statearr_34770[(0)] = cljs$core$async$transduce_$_state_machine__34200__auto__);

(statearr_34770[(1)] = (1));

return statearr_34770;
});
var cljs$core$async$transduce_$_state_machine__34200__auto____1 = (function (state_34764){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34764);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34771){if((e34771 instanceof Object)){
var ex__34203__auto__ = e34771;
var statearr_34772_37211 = state_34764;
(statearr_34772_37211[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34771;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37212 = state_34764;
state_34764 = G__37212;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34200__auto__ = function(state_34764){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34200__auto____1.call(this,state_34764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34200__auto____0;
cljs$core$async$transduce_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34200__auto____1;
return cljs$core$async$transduce_$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34773 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34773[(6)] = c__34267__auto__);

return statearr_34773;
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
var G__34776 = arguments.length;
switch (G__34776) {
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
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34806){
var state_val_34807 = (state_34806[(1)]);
if((state_val_34807 === (7))){
var inst_34788 = (state_34806[(2)]);
var state_34806__$1 = state_34806;
var statearr_34808_37219 = state_34806__$1;
(statearr_34808_37219[(2)] = inst_34788);

(statearr_34808_37219[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (1))){
var inst_34779 = cljs.core.seq(coll);
var inst_34781 = inst_34779;
var state_34806__$1 = (function (){var statearr_34809 = state_34806;
(statearr_34809[(7)] = inst_34781);

return statearr_34809;
})();
var statearr_34810_37224 = state_34806__$1;
(statearr_34810_37224[(2)] = null);

(statearr_34810_37224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (4))){
var inst_34781 = (state_34806[(7)]);
var inst_34786 = cljs.core.first(inst_34781);
var state_34806__$1 = state_34806;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34806__$1,(7),ch,inst_34786);
} else {
if((state_val_34807 === (13))){
var inst_34800 = (state_34806[(2)]);
var state_34806__$1 = state_34806;
var statearr_34811_37229 = state_34806__$1;
(statearr_34811_37229[(2)] = inst_34800);

(statearr_34811_37229[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (6))){
var inst_34791 = (state_34806[(2)]);
var state_34806__$1 = state_34806;
if(cljs.core.truth_(inst_34791)){
var statearr_34812_37234 = state_34806__$1;
(statearr_34812_37234[(1)] = (8));

} else {
var statearr_34813_37235 = state_34806__$1;
(statearr_34813_37235[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (3))){
var inst_34804 = (state_34806[(2)]);
var state_34806__$1 = state_34806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34806__$1,inst_34804);
} else {
if((state_val_34807 === (12))){
var state_34806__$1 = state_34806;
var statearr_34817_37240 = state_34806__$1;
(statearr_34817_37240[(2)] = null);

(statearr_34817_37240[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (2))){
var inst_34781 = (state_34806[(7)]);
var state_34806__$1 = state_34806;
if(cljs.core.truth_(inst_34781)){
var statearr_34818_37245 = state_34806__$1;
(statearr_34818_37245[(1)] = (4));

} else {
var statearr_34819_37246 = state_34806__$1;
(statearr_34819_37246[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (11))){
var inst_34797 = cljs.core.async.close_BANG_(ch);
var state_34806__$1 = state_34806;
var statearr_34823_37250 = state_34806__$1;
(statearr_34823_37250[(2)] = inst_34797);

(statearr_34823_37250[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (9))){
var state_34806__$1 = state_34806;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34824_37252 = state_34806__$1;
(statearr_34824_37252[(1)] = (11));

} else {
var statearr_34825_37254 = state_34806__$1;
(statearr_34825_37254[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (5))){
var inst_34781 = (state_34806[(7)]);
var state_34806__$1 = state_34806;
var statearr_34826_37262 = state_34806__$1;
(statearr_34826_37262[(2)] = inst_34781);

(statearr_34826_37262[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (10))){
var inst_34802 = (state_34806[(2)]);
var state_34806__$1 = state_34806;
var statearr_34827_37267 = state_34806__$1;
(statearr_34827_37267[(2)] = inst_34802);

(statearr_34827_37267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (8))){
var inst_34781 = (state_34806[(7)]);
var inst_34793 = cljs.core.next(inst_34781);
var inst_34781__$1 = inst_34793;
var state_34806__$1 = (function (){var statearr_34828 = state_34806;
(statearr_34828[(7)] = inst_34781__$1);

return statearr_34828;
})();
var statearr_34829_37268 = state_34806__$1;
(statearr_34829_37268[(2)] = null);

(statearr_34829_37268[(1)] = (2));


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
var statearr_34830 = [null,null,null,null,null,null,null,null];
(statearr_34830[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_34830[(1)] = (1));

return statearr_34830;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_34806){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34806);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34831){if((e34831 instanceof Object)){
var ex__34203__auto__ = e34831;
var statearr_34832_37273 = state_34806;
(statearr_34832_37273[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34831;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37276 = state_34806;
state_34806 = G__37276;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_34806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_34806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34833 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34833[(6)] = c__34267__auto__);

return statearr_34833;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34834 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34834 = (function (ch,cs,meta34835){
this.ch = ch;
this.cs = cs;
this.meta34835 = meta34835;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34836,meta34835__$1){
var self__ = this;
var _34836__$1 = this;
return (new cljs.core.async.t_cljs$core$async34834(self__.ch,self__.cs,meta34835__$1));
}));

(cljs.core.async.t_cljs$core$async34834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34836){
var self__ = this;
var _34836__$1 = this;
return self__.meta34835;
}));

(cljs.core.async.t_cljs$core$async34834.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34834.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34834.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34834.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34834.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34834.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34834.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34835","meta34835",783644828,null)], null);
}));

(cljs.core.async.t_cljs$core$async34834.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34834.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34834");

(cljs.core.async.t_cljs$core$async34834.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34834");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34834.
 */
cljs.core.async.__GT_t_cljs$core$async34834 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34834(ch__$1,cs__$1,meta34835){
return (new cljs.core.async.t_cljs$core$async34834(ch__$1,cs__$1,meta34835));
});

}

return (new cljs.core.async.t_cljs$core$async34834(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34267__auto___37329 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34986){
var state_val_34990 = (state_34986[(1)]);
if((state_val_34990 === (7))){
var inst_34979 = (state_34986[(2)]);
var state_34986__$1 = state_34986;
var statearr_34991_37330 = state_34986__$1;
(statearr_34991_37330[(2)] = inst_34979);

(statearr_34991_37330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (20))){
var inst_34872 = (state_34986[(7)]);
var inst_34888 = cljs.core.first(inst_34872);
var inst_34889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34888,(0),null);
var inst_34890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34888,(1),null);
var state_34986__$1 = (function (){var statearr_34994 = state_34986;
(statearr_34994[(8)] = inst_34889);

return statearr_34994;
})();
if(cljs.core.truth_(inst_34890)){
var statearr_34995_37335 = state_34986__$1;
(statearr_34995_37335[(1)] = (22));

} else {
var statearr_34997_37336 = state_34986__$1;
(statearr_34997_37336[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (27))){
var inst_34918 = (state_34986[(9)]);
var inst_34925 = (state_34986[(10)]);
var inst_34920 = (state_34986[(11)]);
var inst_34839 = (state_34986[(12)]);
var inst_34925__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34918,inst_34920);
var inst_34926 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34925__$1,inst_34839,done);
var state_34986__$1 = (function (){var statearr_35001 = state_34986;
(statearr_35001[(10)] = inst_34925__$1);

return statearr_35001;
})();
if(cljs.core.truth_(inst_34926)){
var statearr_35002_37342 = state_34986__$1;
(statearr_35002_37342[(1)] = (30));

} else {
var statearr_35003_37345 = state_34986__$1;
(statearr_35003_37345[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (1))){
var state_34986__$1 = state_34986;
var statearr_35004_37346 = state_34986__$1;
(statearr_35004_37346[(2)] = null);

(statearr_35004_37346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (24))){
var inst_34872 = (state_34986[(7)]);
var inst_34895 = (state_34986[(2)]);
var inst_34896 = cljs.core.next(inst_34872);
var inst_34848 = inst_34896;
var inst_34849 = null;
var inst_34850 = (0);
var inst_34851 = (0);
var state_34986__$1 = (function (){var statearr_35006 = state_34986;
(statearr_35006[(13)] = inst_34848);

(statearr_35006[(14)] = inst_34895);

(statearr_35006[(15)] = inst_34849);

(statearr_35006[(16)] = inst_34851);

(statearr_35006[(17)] = inst_34850);

return statearr_35006;
})();
var statearr_35010_37349 = state_34986__$1;
(statearr_35010_37349[(2)] = null);

(statearr_35010_37349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (39))){
var state_34986__$1 = state_34986;
var statearr_35026_37356 = state_34986__$1;
(statearr_35026_37356[(2)] = null);

(statearr_35026_37356[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (4))){
var inst_34839 = (state_34986[(12)]);
var inst_34839__$1 = (state_34986[(2)]);
var inst_34840 = (inst_34839__$1 == null);
var state_34986__$1 = (function (){var statearr_35030 = state_34986;
(statearr_35030[(12)] = inst_34839__$1);

return statearr_35030;
})();
if(cljs.core.truth_(inst_34840)){
var statearr_35031_37358 = state_34986__$1;
(statearr_35031_37358[(1)] = (5));

} else {
var statearr_35033_37360 = state_34986__$1;
(statearr_35033_37360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (15))){
var inst_34848 = (state_34986[(13)]);
var inst_34849 = (state_34986[(15)]);
var inst_34851 = (state_34986[(16)]);
var inst_34850 = (state_34986[(17)]);
var inst_34867 = (state_34986[(2)]);
var inst_34869 = (inst_34851 + (1));
var tmp35011 = inst_34848;
var tmp35012 = inst_34849;
var tmp35013 = inst_34850;
var inst_34848__$1 = tmp35011;
var inst_34849__$1 = tmp35012;
var inst_34850__$1 = tmp35013;
var inst_34851__$1 = inst_34869;
var state_34986__$1 = (function (){var statearr_35037 = state_34986;
(statearr_35037[(13)] = inst_34848__$1);

(statearr_35037[(15)] = inst_34849__$1);

(statearr_35037[(16)] = inst_34851__$1);

(statearr_35037[(17)] = inst_34850__$1);

(statearr_35037[(18)] = inst_34867);

return statearr_35037;
})();
var statearr_35039_37367 = state_34986__$1;
(statearr_35039_37367[(2)] = null);

(statearr_35039_37367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (21))){
var inst_34899 = (state_34986[(2)]);
var state_34986__$1 = state_34986;
var statearr_35048_37368 = state_34986__$1;
(statearr_35048_37368[(2)] = inst_34899);

(statearr_35048_37368[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (31))){
var inst_34925 = (state_34986[(10)]);
var inst_34929 = done(null);
var inst_34934 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34925);
var state_34986__$1 = (function (){var statearr_35055 = state_34986;
(statearr_35055[(19)] = inst_34929);

return statearr_35055;
})();
var statearr_35058_37374 = state_34986__$1;
(statearr_35058_37374[(2)] = inst_34934);

(statearr_35058_37374[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (32))){
var inst_34918 = (state_34986[(9)]);
var inst_34919 = (state_34986[(20)]);
var inst_34920 = (state_34986[(11)]);
var inst_34917 = (state_34986[(21)]);
var inst_34936 = (state_34986[(2)]);
var inst_34938 = (inst_34920 + (1));
var tmp35043 = inst_34918;
var tmp35044 = inst_34919;
var tmp35045 = inst_34917;
var inst_34917__$1 = tmp35045;
var inst_34918__$1 = tmp35043;
var inst_34919__$1 = tmp35044;
var inst_34920__$1 = inst_34938;
var state_34986__$1 = (function (){var statearr_35072 = state_34986;
(statearr_35072[(9)] = inst_34918__$1);

(statearr_35072[(20)] = inst_34919__$1);

(statearr_35072[(11)] = inst_34920__$1);

(statearr_35072[(22)] = inst_34936);

(statearr_35072[(21)] = inst_34917__$1);

return statearr_35072;
})();
var statearr_35078_37378 = state_34986__$1;
(statearr_35078_37378[(2)] = null);

(statearr_35078_37378[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (40))){
var inst_34951 = (state_34986[(23)]);
var inst_34955 = done(null);
var inst_34956 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34951);
var state_34986__$1 = (function (){var statearr_35085 = state_34986;
(statearr_35085[(24)] = inst_34955);

return statearr_35085;
})();
var statearr_35086_37382 = state_34986__$1;
(statearr_35086_37382[(2)] = inst_34956);

(statearr_35086_37382[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (33))){
var inst_34941 = (state_34986[(25)]);
var inst_34944 = cljs.core.chunked_seq_QMARK_(inst_34941);
var state_34986__$1 = state_34986;
if(inst_34944){
var statearr_35095_37385 = state_34986__$1;
(statearr_35095_37385[(1)] = (36));

} else {
var statearr_35096_37389 = state_34986__$1;
(statearr_35096_37389[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (13))){
var inst_34860 = (state_34986[(26)]);
var inst_34864 = cljs.core.async.close_BANG_(inst_34860);
var state_34986__$1 = state_34986;
var statearr_35102_37390 = state_34986__$1;
(statearr_35102_37390[(2)] = inst_34864);

(statearr_35102_37390[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (22))){
var inst_34889 = (state_34986[(8)]);
var inst_34892 = cljs.core.async.close_BANG_(inst_34889);
var state_34986__$1 = state_34986;
var statearr_35111_37392 = state_34986__$1;
(statearr_35111_37392[(2)] = inst_34892);

(statearr_35111_37392[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (36))){
var inst_34941 = (state_34986[(25)]);
var inst_34946 = cljs.core.chunk_first(inst_34941);
var inst_34947 = cljs.core.chunk_rest(inst_34941);
var inst_34948 = cljs.core.count(inst_34946);
var inst_34917 = inst_34947;
var inst_34918 = inst_34946;
var inst_34919 = inst_34948;
var inst_34920 = (0);
var state_34986__$1 = (function (){var statearr_35118 = state_34986;
(statearr_35118[(9)] = inst_34918);

(statearr_35118[(20)] = inst_34919);

(statearr_35118[(11)] = inst_34920);

(statearr_35118[(21)] = inst_34917);

return statearr_35118;
})();
var statearr_35123_37397 = state_34986__$1;
(statearr_35123_37397[(2)] = null);

(statearr_35123_37397[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (41))){
var inst_34941 = (state_34986[(25)]);
var inst_34958 = (state_34986[(2)]);
var inst_34959 = cljs.core.next(inst_34941);
var inst_34917 = inst_34959;
var inst_34918 = null;
var inst_34919 = (0);
var inst_34920 = (0);
var state_34986__$1 = (function (){var statearr_35130 = state_34986;
(statearr_35130[(27)] = inst_34958);

(statearr_35130[(9)] = inst_34918);

(statearr_35130[(20)] = inst_34919);

(statearr_35130[(11)] = inst_34920);

(statearr_35130[(21)] = inst_34917);

return statearr_35130;
})();
var statearr_35134_37401 = state_34986__$1;
(statearr_35134_37401[(2)] = null);

(statearr_35134_37401[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (43))){
var state_34986__$1 = state_34986;
var statearr_35135_37402 = state_34986__$1;
(statearr_35135_37402[(2)] = null);

(statearr_35135_37402[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (29))){
var inst_34967 = (state_34986[(2)]);
var state_34986__$1 = state_34986;
var statearr_35136_37405 = state_34986__$1;
(statearr_35136_37405[(2)] = inst_34967);

(statearr_35136_37405[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (44))){
var inst_34976 = (state_34986[(2)]);
var state_34986__$1 = (function (){var statearr_35137 = state_34986;
(statearr_35137[(28)] = inst_34976);

return statearr_35137;
})();
var statearr_35138_37410 = state_34986__$1;
(statearr_35138_37410[(2)] = null);

(statearr_35138_37410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (6))){
var inst_34909 = (state_34986[(29)]);
var inst_34908 = cljs.core.deref(cs);
var inst_34909__$1 = cljs.core.keys(inst_34908);
var inst_34910 = cljs.core.count(inst_34909__$1);
var inst_34911 = cljs.core.reset_BANG_(dctr,inst_34910);
var inst_34916 = cljs.core.seq(inst_34909__$1);
var inst_34917 = inst_34916;
var inst_34918 = null;
var inst_34919 = (0);
var inst_34920 = (0);
var state_34986__$1 = (function (){var statearr_35141 = state_34986;
(statearr_35141[(9)] = inst_34918);

(statearr_35141[(29)] = inst_34909__$1);

(statearr_35141[(20)] = inst_34919);

(statearr_35141[(11)] = inst_34920);

(statearr_35141[(21)] = inst_34917);

(statearr_35141[(30)] = inst_34911);

return statearr_35141;
})();
var statearr_35142_37426 = state_34986__$1;
(statearr_35142_37426[(2)] = null);

(statearr_35142_37426[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (28))){
var inst_34941 = (state_34986[(25)]);
var inst_34917 = (state_34986[(21)]);
var inst_34941__$1 = cljs.core.seq(inst_34917);
var state_34986__$1 = (function (){var statearr_35145 = state_34986;
(statearr_35145[(25)] = inst_34941__$1);

return statearr_35145;
})();
if(inst_34941__$1){
var statearr_35154_37437 = state_34986__$1;
(statearr_35154_37437[(1)] = (33));

} else {
var statearr_35167_37439 = state_34986__$1;
(statearr_35167_37439[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (25))){
var inst_34919 = (state_34986[(20)]);
var inst_34920 = (state_34986[(11)]);
var inst_34922 = (inst_34920 < inst_34919);
var inst_34923 = inst_34922;
var state_34986__$1 = state_34986;
if(cljs.core.truth_(inst_34923)){
var statearr_35171_37442 = state_34986__$1;
(statearr_35171_37442[(1)] = (27));

} else {
var statearr_35172_37443 = state_34986__$1;
(statearr_35172_37443[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (34))){
var state_34986__$1 = state_34986;
var statearr_35177_37444 = state_34986__$1;
(statearr_35177_37444[(2)] = null);

(statearr_35177_37444[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (17))){
var state_34986__$1 = state_34986;
var statearr_35180_37446 = state_34986__$1;
(statearr_35180_37446[(2)] = null);

(statearr_35180_37446[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (3))){
var inst_34981 = (state_34986[(2)]);
var state_34986__$1 = state_34986;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34986__$1,inst_34981);
} else {
if((state_val_34990 === (12))){
var inst_34904 = (state_34986[(2)]);
var state_34986__$1 = state_34986;
var statearr_35188_37452 = state_34986__$1;
(statearr_35188_37452[(2)] = inst_34904);

(statearr_35188_37452[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (2))){
var state_34986__$1 = state_34986;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34986__$1,(4),ch);
} else {
if((state_val_34990 === (23))){
var state_34986__$1 = state_34986;
var statearr_35200_37459 = state_34986__$1;
(statearr_35200_37459[(2)] = null);

(statearr_35200_37459[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (35))){
var inst_34965 = (state_34986[(2)]);
var state_34986__$1 = state_34986;
var statearr_35208_37462 = state_34986__$1;
(statearr_35208_37462[(2)] = inst_34965);

(statearr_35208_37462[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (19))){
var inst_34872 = (state_34986[(7)]);
var inst_34880 = cljs.core.chunk_first(inst_34872);
var inst_34881 = cljs.core.chunk_rest(inst_34872);
var inst_34882 = cljs.core.count(inst_34880);
var inst_34848 = inst_34881;
var inst_34849 = inst_34880;
var inst_34850 = inst_34882;
var inst_34851 = (0);
var state_34986__$1 = (function (){var statearr_35215 = state_34986;
(statearr_35215[(13)] = inst_34848);

(statearr_35215[(15)] = inst_34849);

(statearr_35215[(16)] = inst_34851);

(statearr_35215[(17)] = inst_34850);

return statearr_35215;
})();
var statearr_35218_37470 = state_34986__$1;
(statearr_35218_37470[(2)] = null);

(statearr_35218_37470[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (11))){
var inst_34848 = (state_34986[(13)]);
var inst_34872 = (state_34986[(7)]);
var inst_34872__$1 = cljs.core.seq(inst_34848);
var state_34986__$1 = (function (){var statearr_35225 = state_34986;
(statearr_35225[(7)] = inst_34872__$1);

return statearr_35225;
})();
if(inst_34872__$1){
var statearr_35227_37473 = state_34986__$1;
(statearr_35227_37473[(1)] = (16));

} else {
var statearr_35231_37474 = state_34986__$1;
(statearr_35231_37474[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (9))){
var inst_34906 = (state_34986[(2)]);
var state_34986__$1 = state_34986;
var statearr_35235_37480 = state_34986__$1;
(statearr_35235_37480[(2)] = inst_34906);

(statearr_35235_37480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (5))){
var inst_34846 = cljs.core.deref(cs);
var inst_34847 = cljs.core.seq(inst_34846);
var inst_34848 = inst_34847;
var inst_34849 = null;
var inst_34850 = (0);
var inst_34851 = (0);
var state_34986__$1 = (function (){var statearr_35241 = state_34986;
(statearr_35241[(13)] = inst_34848);

(statearr_35241[(15)] = inst_34849);

(statearr_35241[(16)] = inst_34851);

(statearr_35241[(17)] = inst_34850);

return statearr_35241;
})();
var statearr_35246_37484 = state_34986__$1;
(statearr_35246_37484[(2)] = null);

(statearr_35246_37484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (14))){
var state_34986__$1 = state_34986;
var statearr_35252_37487 = state_34986__$1;
(statearr_35252_37487[(2)] = null);

(statearr_35252_37487[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (45))){
var inst_34973 = (state_34986[(2)]);
var state_34986__$1 = state_34986;
var statearr_35256_37492 = state_34986__$1;
(statearr_35256_37492[(2)] = inst_34973);

(statearr_35256_37492[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (26))){
var inst_34909 = (state_34986[(29)]);
var inst_34969 = (state_34986[(2)]);
var inst_34970 = cljs.core.seq(inst_34909);
var state_34986__$1 = (function (){var statearr_35263 = state_34986;
(statearr_35263[(31)] = inst_34969);

return statearr_35263;
})();
if(inst_34970){
var statearr_35265_37495 = state_34986__$1;
(statearr_35265_37495[(1)] = (42));

} else {
var statearr_35266_37496 = state_34986__$1;
(statearr_35266_37496[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (16))){
var inst_34872 = (state_34986[(7)]);
var inst_34878 = cljs.core.chunked_seq_QMARK_(inst_34872);
var state_34986__$1 = state_34986;
if(inst_34878){
var statearr_35271_37503 = state_34986__$1;
(statearr_35271_37503[(1)] = (19));

} else {
var statearr_35275_37504 = state_34986__$1;
(statearr_35275_37504[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (38))){
var inst_34962 = (state_34986[(2)]);
var state_34986__$1 = state_34986;
var statearr_35280_37506 = state_34986__$1;
(statearr_35280_37506[(2)] = inst_34962);

(statearr_35280_37506[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (30))){
var state_34986__$1 = state_34986;
var statearr_35284_37508 = state_34986__$1;
(statearr_35284_37508[(2)] = null);

(statearr_35284_37508[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (10))){
var inst_34849 = (state_34986[(15)]);
var inst_34851 = (state_34986[(16)]);
var inst_34859 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34849,inst_34851);
var inst_34860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34859,(0),null);
var inst_34861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34859,(1),null);
var state_34986__$1 = (function (){var statearr_35291 = state_34986;
(statearr_35291[(26)] = inst_34860);

return statearr_35291;
})();
if(cljs.core.truth_(inst_34861)){
var statearr_35294_37515 = state_34986__$1;
(statearr_35294_37515[(1)] = (13));

} else {
var statearr_35297_37517 = state_34986__$1;
(statearr_35297_37517[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (18))){
var inst_34902 = (state_34986[(2)]);
var state_34986__$1 = state_34986;
var statearr_35303_37519 = state_34986__$1;
(statearr_35303_37519[(2)] = inst_34902);

(statearr_35303_37519[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (42))){
var state_34986__$1 = state_34986;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34986__$1,(45),dchan);
} else {
if((state_val_34990 === (37))){
var inst_34951 = (state_34986[(23)]);
var inst_34941 = (state_34986[(25)]);
var inst_34839 = (state_34986[(12)]);
var inst_34951__$1 = cljs.core.first(inst_34941);
var inst_34952 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34951__$1,inst_34839,done);
var state_34986__$1 = (function (){var statearr_35312 = state_34986;
(statearr_35312[(23)] = inst_34951__$1);

return statearr_35312;
})();
if(cljs.core.truth_(inst_34952)){
var statearr_35316_37530 = state_34986__$1;
(statearr_35316_37530[(1)] = (39));

} else {
var statearr_35318_37532 = state_34986__$1;
(statearr_35318_37532[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (8))){
var inst_34851 = (state_34986[(16)]);
var inst_34850 = (state_34986[(17)]);
var inst_34853 = (inst_34851 < inst_34850);
var inst_34854 = inst_34853;
var state_34986__$1 = state_34986;
if(cljs.core.truth_(inst_34854)){
var statearr_35324_37534 = state_34986__$1;
(statearr_35324_37534[(1)] = (10));

} else {
var statearr_35327_37536 = state_34986__$1;
(statearr_35327_37536[(1)] = (11));

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
var statearr_35340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35340[(0)] = cljs$core$async$mult_$_state_machine__34200__auto__);

(statearr_35340[(1)] = (1));

return statearr_35340;
});
var cljs$core$async$mult_$_state_machine__34200__auto____1 = (function (state_34986){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34986);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e35347){if((e35347 instanceof Object)){
var ex__34203__auto__ = e35347;
var statearr_35348_37546 = state_34986;
(statearr_35348_37546[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35347;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37547 = state_34986;
state_34986 = G__37547;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34200__auto__ = function(state_34986){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34200__auto____1.call(this,state_34986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34200__auto____0;
cljs$core$async$mult_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34200__auto____1;
return cljs$core$async$mult_$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_35349 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_35349[(6)] = c__34267__auto___37329);

return statearr_35349;
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
var G__35351 = arguments.length;
switch (G__35351) {
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
var len__4789__auto___37615 = arguments.length;
var i__4790__auto___37616 = (0);
while(true){
if((i__4790__auto___37616 < len__4789__auto___37615)){
args__4795__auto__.push((arguments[i__4790__auto___37616]));

var G__37617 = (i__4790__auto___37616 + (1));
i__4790__auto___37616 = G__37617;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35437){
var map__35438 = p__35437;
var map__35438__$1 = (((((!((map__35438 == null))))?(((((map__35438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35438):map__35438);
var opts = map__35438__$1;
var statearr_35442_37629 = state;
(statearr_35442_37629[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35445_37631 = state;
(statearr_35445_37631[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35446_37633 = state;
(statearr_35446_37633[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35409){
var G__35410 = cljs.core.first(seq35409);
var seq35409__$1 = cljs.core.next(seq35409);
var G__35411 = cljs.core.first(seq35409__$1);
var seq35409__$2 = cljs.core.next(seq35409__$1);
var G__35413 = cljs.core.first(seq35409__$2);
var seq35409__$3 = cljs.core.next(seq35409__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35410,G__35411,G__35413,seq35409__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35495 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35495 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35496){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35496 = meta35496;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35497,meta35496__$1){
var self__ = this;
var _35497__$1 = this;
return (new cljs.core.async.t_cljs$core$async35495(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35496__$1));
}));

(cljs.core.async.t_cljs$core$async35495.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35497){
var self__ = this;
var _35497__$1 = this;
return self__.meta35496;
}));

(cljs.core.async.t_cljs$core$async35495.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35495.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35495.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35495.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35495.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35495.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35495.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35495.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35495.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35496","meta35496",-428358920,null)], null);
}));

(cljs.core.async.t_cljs$core$async35495.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35495.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35495");

(cljs.core.async.t_cljs$core$async35495.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35495");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35495.
 */
cljs.core.async.__GT_t_cljs$core$async35495 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35495(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35496){
return (new cljs.core.async.t_cljs$core$async35495(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35496));
});

}

return (new cljs.core.async.t_cljs$core$async35495(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34267__auto___37666 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_35673){
var state_val_35674 = (state_35673[(1)]);
if((state_val_35674 === (7))){
var inst_35581 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
var statearr_35679_37668 = state_35673__$1;
(statearr_35679_37668[(2)] = inst_35581);

(statearr_35679_37668[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (20))){
var inst_35593 = (state_35673[(7)]);
var state_35673__$1 = state_35673;
var statearr_35681_37669 = state_35673__$1;
(statearr_35681_37669[(2)] = inst_35593);

(statearr_35681_37669[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (27))){
var state_35673__$1 = state_35673;
var statearr_35682_37670 = state_35673__$1;
(statearr_35682_37670[(2)] = null);

(statearr_35682_37670[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (1))){
var inst_35568 = (state_35673[(8)]);
var inst_35568__$1 = calc_state();
var inst_35570 = (inst_35568__$1 == null);
var inst_35571 = cljs.core.not(inst_35570);
var state_35673__$1 = (function (){var statearr_35683 = state_35673;
(statearr_35683[(8)] = inst_35568__$1);

return statearr_35683;
})();
if(inst_35571){
var statearr_35684_37675 = state_35673__$1;
(statearr_35684_37675[(1)] = (2));

} else {
var statearr_35686_37677 = state_35673__$1;
(statearr_35686_37677[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (24))){
var inst_35644 = (state_35673[(9)]);
var inst_35628 = (state_35673[(10)]);
var inst_35619 = (state_35673[(11)]);
var inst_35644__$1 = (inst_35619.cljs$core$IFn$_invoke$arity$1 ? inst_35619.cljs$core$IFn$_invoke$arity$1(inst_35628) : inst_35619.call(null,inst_35628));
var state_35673__$1 = (function (){var statearr_35690 = state_35673;
(statearr_35690[(9)] = inst_35644__$1);

return statearr_35690;
})();
if(cljs.core.truth_(inst_35644__$1)){
var statearr_35691_37683 = state_35673__$1;
(statearr_35691_37683[(1)] = (29));

} else {
var statearr_35692_37684 = state_35673__$1;
(statearr_35692_37684[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (4))){
var inst_35584 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35584)){
var statearr_35697_37688 = state_35673__$1;
(statearr_35697_37688[(1)] = (8));

} else {
var statearr_35698_37689 = state_35673__$1;
(statearr_35698_37689[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (15))){
var inst_35613 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35613)){
var statearr_35700_37691 = state_35673__$1;
(statearr_35700_37691[(1)] = (19));

} else {
var statearr_35701_37692 = state_35673__$1;
(statearr_35701_37692[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (21))){
var inst_35618 = (state_35673[(12)]);
var inst_35618__$1 = (state_35673[(2)]);
var inst_35619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35618__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35618__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35618__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35673__$1 = (function (){var statearr_35703 = state_35673;
(statearr_35703[(12)] = inst_35618__$1);

(statearr_35703[(13)] = inst_35620);

(statearr_35703[(11)] = inst_35619);

return statearr_35703;
})();
return cljs.core.async.ioc_alts_BANG_(state_35673__$1,(22),inst_35621);
} else {
if((state_val_35674 === (31))){
var inst_35652 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35652)){
var statearr_35705_37698 = state_35673__$1;
(statearr_35705_37698[(1)] = (32));

} else {
var statearr_35706_37700 = state_35673__$1;
(statearr_35706_37700[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (32))){
var inst_35627 = (state_35673[(14)]);
var state_35673__$1 = state_35673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35673__$1,(35),out,inst_35627);
} else {
if((state_val_35674 === (33))){
var inst_35618 = (state_35673[(12)]);
var inst_35593 = inst_35618;
var state_35673__$1 = (function (){var statearr_35708 = state_35673;
(statearr_35708[(7)] = inst_35593);

return statearr_35708;
})();
var statearr_35709_37708 = state_35673__$1;
(statearr_35709_37708[(2)] = null);

(statearr_35709_37708[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (13))){
var inst_35593 = (state_35673[(7)]);
var inst_35602 = inst_35593.cljs$lang$protocol_mask$partition0$;
var inst_35603 = (inst_35602 & (64));
var inst_35604 = inst_35593.cljs$core$ISeq$;
var inst_35605 = (cljs.core.PROTOCOL_SENTINEL === inst_35604);
var inst_35606 = ((inst_35603) || (inst_35605));
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35606)){
var statearr_35711_37711 = state_35673__$1;
(statearr_35711_37711[(1)] = (16));

} else {
var statearr_35712_37712 = state_35673__$1;
(statearr_35712_37712[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (22))){
var inst_35627 = (state_35673[(14)]);
var inst_35628 = (state_35673[(10)]);
var inst_35626 = (state_35673[(2)]);
var inst_35627__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35626,(0),null);
var inst_35628__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35626,(1),null);
var inst_35629 = (inst_35627__$1 == null);
var inst_35630 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35628__$1,change);
var inst_35631 = ((inst_35629) || (inst_35630));
var state_35673__$1 = (function (){var statearr_35714 = state_35673;
(statearr_35714[(14)] = inst_35627__$1);

(statearr_35714[(10)] = inst_35628__$1);

return statearr_35714;
})();
if(cljs.core.truth_(inst_35631)){
var statearr_35715_37721 = state_35673__$1;
(statearr_35715_37721[(1)] = (23));

} else {
var statearr_35716_37722 = state_35673__$1;
(statearr_35716_37722[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (36))){
var inst_35618 = (state_35673[(12)]);
var inst_35593 = inst_35618;
var state_35673__$1 = (function (){var statearr_35718 = state_35673;
(statearr_35718[(7)] = inst_35593);

return statearr_35718;
})();
var statearr_35719_37729 = state_35673__$1;
(statearr_35719_37729[(2)] = null);

(statearr_35719_37729[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (29))){
var inst_35644 = (state_35673[(9)]);
var state_35673__$1 = state_35673;
var statearr_35725_37731 = state_35673__$1;
(statearr_35725_37731[(2)] = inst_35644);

(statearr_35725_37731[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (6))){
var state_35673__$1 = state_35673;
var statearr_35726_37733 = state_35673__$1;
(statearr_35726_37733[(2)] = false);

(statearr_35726_37733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (28))){
var inst_35640 = (state_35673[(2)]);
var inst_35641 = calc_state();
var inst_35593 = inst_35641;
var state_35673__$1 = (function (){var statearr_35729 = state_35673;
(statearr_35729[(7)] = inst_35593);

(statearr_35729[(15)] = inst_35640);

return statearr_35729;
})();
var statearr_35732_37742 = state_35673__$1;
(statearr_35732_37742[(2)] = null);

(statearr_35732_37742[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (25))){
var inst_35668 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
var statearr_35746_37744 = state_35673__$1;
(statearr_35746_37744[(2)] = inst_35668);

(statearr_35746_37744[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (34))){
var inst_35666 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
var statearr_35753_37746 = state_35673__$1;
(statearr_35753_37746[(2)] = inst_35666);

(statearr_35753_37746[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (17))){
var state_35673__$1 = state_35673;
var statearr_35754_37747 = state_35673__$1;
(statearr_35754_37747[(2)] = false);

(statearr_35754_37747[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (3))){
var state_35673__$1 = state_35673;
var statearr_35755_37749 = state_35673__$1;
(statearr_35755_37749[(2)] = false);

(statearr_35755_37749[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (12))){
var inst_35670 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35673__$1,inst_35670);
} else {
if((state_val_35674 === (2))){
var inst_35568 = (state_35673[(8)]);
var inst_35573 = inst_35568.cljs$lang$protocol_mask$partition0$;
var inst_35574 = (inst_35573 & (64));
var inst_35575 = inst_35568.cljs$core$ISeq$;
var inst_35576 = (cljs.core.PROTOCOL_SENTINEL === inst_35575);
var inst_35577 = ((inst_35574) || (inst_35576));
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35577)){
var statearr_35760_37758 = state_35673__$1;
(statearr_35760_37758[(1)] = (5));

} else {
var statearr_35761_37759 = state_35673__$1;
(statearr_35761_37759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (23))){
var inst_35627 = (state_35673[(14)]);
var inst_35633 = (inst_35627 == null);
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35633)){
var statearr_35762_37761 = state_35673__$1;
(statearr_35762_37761[(1)] = (26));

} else {
var statearr_35763_37762 = state_35673__$1;
(statearr_35763_37762[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (35))){
var inst_35655 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35655)){
var statearr_35765_37764 = state_35673__$1;
(statearr_35765_37764[(1)] = (36));

} else {
var statearr_35766_37765 = state_35673__$1;
(statearr_35766_37765[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (19))){
var inst_35593 = (state_35673[(7)]);
var inst_35615 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35593);
var state_35673__$1 = state_35673;
var statearr_35767_37767 = state_35673__$1;
(statearr_35767_37767[(2)] = inst_35615);

(statearr_35767_37767[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (11))){
var inst_35593 = (state_35673[(7)]);
var inst_35597 = (inst_35593 == null);
var inst_35598 = cljs.core.not(inst_35597);
var state_35673__$1 = state_35673;
if(inst_35598){
var statearr_35770_37775 = state_35673__$1;
(statearr_35770_37775[(1)] = (13));

} else {
var statearr_35772_37776 = state_35673__$1;
(statearr_35772_37776[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (9))){
var inst_35568 = (state_35673[(8)]);
var state_35673__$1 = state_35673;
var statearr_35773_37778 = state_35673__$1;
(statearr_35773_37778[(2)] = inst_35568);

(statearr_35773_37778[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (5))){
var state_35673__$1 = state_35673;
var statearr_35775_37780 = state_35673__$1;
(statearr_35775_37780[(2)] = true);

(statearr_35775_37780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (14))){
var state_35673__$1 = state_35673;
var statearr_35777_37785 = state_35673__$1;
(statearr_35777_37785[(2)] = false);

(statearr_35777_37785[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (26))){
var inst_35628 = (state_35673[(10)]);
var inst_35637 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35628);
var state_35673__$1 = state_35673;
var statearr_35779_37790 = state_35673__$1;
(statearr_35779_37790[(2)] = inst_35637);

(statearr_35779_37790[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (16))){
var state_35673__$1 = state_35673;
var statearr_35781_37791 = state_35673__$1;
(statearr_35781_37791[(2)] = true);

(statearr_35781_37791[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (38))){
var inst_35662 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
var statearr_35783_37792 = state_35673__$1;
(statearr_35783_37792[(2)] = inst_35662);

(statearr_35783_37792[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (30))){
var inst_35628 = (state_35673[(10)]);
var inst_35620 = (state_35673[(13)]);
var inst_35619 = (state_35673[(11)]);
var inst_35647 = cljs.core.empty_QMARK_(inst_35619);
var inst_35648 = (inst_35620.cljs$core$IFn$_invoke$arity$1 ? inst_35620.cljs$core$IFn$_invoke$arity$1(inst_35628) : inst_35620.call(null,inst_35628));
var inst_35649 = cljs.core.not(inst_35648);
var inst_35650 = ((inst_35647) && (inst_35649));
var state_35673__$1 = state_35673;
var statearr_35784_37797 = state_35673__$1;
(statearr_35784_37797[(2)] = inst_35650);

(statearr_35784_37797[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (10))){
var inst_35568 = (state_35673[(8)]);
var inst_35589 = (state_35673[(2)]);
var inst_35590 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35589,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35589,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35589,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35593 = inst_35568;
var state_35673__$1 = (function (){var statearr_35788 = state_35673;
(statearr_35788[(16)] = inst_35592);

(statearr_35788[(17)] = inst_35590);

(statearr_35788[(7)] = inst_35593);

(statearr_35788[(18)] = inst_35591);

return statearr_35788;
})();
var statearr_35791_37803 = state_35673__$1;
(statearr_35791_37803[(2)] = null);

(statearr_35791_37803[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (18))){
var inst_35610 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
var statearr_35793_37808 = state_35673__$1;
(statearr_35793_37808[(2)] = inst_35610);

(statearr_35793_37808[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (37))){
var state_35673__$1 = state_35673;
var statearr_35795_37810 = state_35673__$1;
(statearr_35795_37810[(2)] = null);

(statearr_35795_37810[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (8))){
var inst_35568 = (state_35673[(8)]);
var inst_35586 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35568);
var state_35673__$1 = state_35673;
var statearr_35798_37814 = state_35673__$1;
(statearr_35798_37814[(2)] = inst_35586);

(statearr_35798_37814[(1)] = (10));


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
var statearr_35800 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35800[(0)] = cljs$core$async$mix_$_state_machine__34200__auto__);

(statearr_35800[(1)] = (1));

return statearr_35800;
});
var cljs$core$async$mix_$_state_machine__34200__auto____1 = (function (state_35673){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_35673);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e35805){if((e35805 instanceof Object)){
var ex__34203__auto__ = e35805;
var statearr_35808_37822 = state_35673;
(statearr_35808_37822[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35805;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37827 = state_35673;
state_35673 = G__37827;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34200__auto__ = function(state_35673){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34200__auto____1.call(this,state_35673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34200__auto____0;
cljs$core$async$mix_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34200__auto____1;
return cljs$core$async$mix_$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_35811 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_35811[(6)] = c__34267__auto___37666);

return statearr_35811;
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
var G__35839 = arguments.length;
switch (G__35839) {
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
var G__35856 = arguments.length;
switch (G__35856) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35852_SHARP_){
if(cljs.core.truth_((p1__35852_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35852_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35852_SHARP_.call(null,topic)))){
return p1__35852_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35852_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35864 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35864 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35865){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35865 = meta35865;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35866,meta35865__$1){
var self__ = this;
var _35866__$1 = this;
return (new cljs.core.async.t_cljs$core$async35864(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35865__$1));
}));

(cljs.core.async.t_cljs$core$async35864.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35866){
var self__ = this;
var _35866__$1 = this;
return self__.meta35865;
}));

(cljs.core.async.t_cljs$core$async35864.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35864.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35864.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35864.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35864.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35864.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35864.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35864.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35865","meta35865",-1174368059,null)], null);
}));

(cljs.core.async.t_cljs$core$async35864.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35864.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35864");

(cljs.core.async.t_cljs$core$async35864.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35864");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35864.
 */
cljs.core.async.__GT_t_cljs$core$async35864 = (function cljs$core$async$__GT_t_cljs$core$async35864(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35865){
return (new cljs.core.async.t_cljs$core$async35864(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35865));
});

}

return (new cljs.core.async.t_cljs$core$async35864(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34267__auto___37889 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_35979){
var state_val_35980 = (state_35979[(1)]);
if((state_val_35980 === (7))){
var inst_35970 = (state_35979[(2)]);
var state_35979__$1 = state_35979;
var statearr_35986_37892 = state_35979__$1;
(statearr_35986_37892[(2)] = inst_35970);

(statearr_35986_37892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (20))){
var state_35979__$1 = state_35979;
var statearr_35989_37895 = state_35979__$1;
(statearr_35989_37895[(2)] = null);

(statearr_35989_37895[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (1))){
var state_35979__$1 = state_35979;
var statearr_35990_37896 = state_35979__$1;
(statearr_35990_37896[(2)] = null);

(statearr_35990_37896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (24))){
var inst_35953 = (state_35979[(7)]);
var inst_35962 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35953);
var state_35979__$1 = state_35979;
var statearr_35991_37898 = state_35979__$1;
(statearr_35991_37898[(2)] = inst_35962);

(statearr_35991_37898[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (4))){
var inst_35894 = (state_35979[(8)]);
var inst_35894__$1 = (state_35979[(2)]);
var inst_35895 = (inst_35894__$1 == null);
var state_35979__$1 = (function (){var statearr_35992 = state_35979;
(statearr_35992[(8)] = inst_35894__$1);

return statearr_35992;
})();
if(cljs.core.truth_(inst_35895)){
var statearr_35995_37903 = state_35979__$1;
(statearr_35995_37903[(1)] = (5));

} else {
var statearr_35996_37904 = state_35979__$1;
(statearr_35996_37904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (15))){
var inst_35946 = (state_35979[(2)]);
var state_35979__$1 = state_35979;
var statearr_35999_37905 = state_35979__$1;
(statearr_35999_37905[(2)] = inst_35946);

(statearr_35999_37905[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (21))){
var inst_35967 = (state_35979[(2)]);
var state_35979__$1 = (function (){var statearr_36002 = state_35979;
(statearr_36002[(9)] = inst_35967);

return statearr_36002;
})();
var statearr_36003_37907 = state_35979__$1;
(statearr_36003_37907[(2)] = null);

(statearr_36003_37907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (13))){
var inst_35925 = (state_35979[(10)]);
var inst_35927 = cljs.core.chunked_seq_QMARK_(inst_35925);
var state_35979__$1 = state_35979;
if(inst_35927){
var statearr_36004_37912 = state_35979__$1;
(statearr_36004_37912[(1)] = (16));

} else {
var statearr_36005_37913 = state_35979__$1;
(statearr_36005_37913[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (22))){
var inst_35959 = (state_35979[(2)]);
var state_35979__$1 = state_35979;
if(cljs.core.truth_(inst_35959)){
var statearr_36006_37914 = state_35979__$1;
(statearr_36006_37914[(1)] = (23));

} else {
var statearr_36008_37915 = state_35979__$1;
(statearr_36008_37915[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (6))){
var inst_35955 = (state_35979[(11)]);
var inst_35894 = (state_35979[(8)]);
var inst_35953 = (state_35979[(7)]);
var inst_35953__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35894) : topic_fn.call(null,inst_35894));
var inst_35954 = cljs.core.deref(mults);
var inst_35955__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35954,inst_35953__$1);
var state_35979__$1 = (function (){var statearr_36012 = state_35979;
(statearr_36012[(11)] = inst_35955__$1);

(statearr_36012[(7)] = inst_35953__$1);

return statearr_36012;
})();
if(cljs.core.truth_(inst_35955__$1)){
var statearr_36013_37921 = state_35979__$1;
(statearr_36013_37921[(1)] = (19));

} else {
var statearr_36014_37922 = state_35979__$1;
(statearr_36014_37922[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (25))){
var inst_35964 = (state_35979[(2)]);
var state_35979__$1 = state_35979;
var statearr_36015_37925 = state_35979__$1;
(statearr_36015_37925[(2)] = inst_35964);

(statearr_36015_37925[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (17))){
var inst_35925 = (state_35979[(10)]);
var inst_35935 = cljs.core.first(inst_35925);
var inst_35937 = cljs.core.async.muxch_STAR_(inst_35935);
var inst_35938 = cljs.core.async.close_BANG_(inst_35937);
var inst_35940 = cljs.core.next(inst_35925);
var inst_35908 = inst_35940;
var inst_35909 = null;
var inst_35910 = (0);
var inst_35911 = (0);
var state_35979__$1 = (function (){var statearr_36016 = state_35979;
(statearr_36016[(12)] = inst_35938);

(statearr_36016[(13)] = inst_35908);

(statearr_36016[(14)] = inst_35909);

(statearr_36016[(15)] = inst_35910);

(statearr_36016[(16)] = inst_35911);

return statearr_36016;
})();
var statearr_36017_37927 = state_35979__$1;
(statearr_36017_37927[(2)] = null);

(statearr_36017_37927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (3))){
var inst_35972 = (state_35979[(2)]);
var state_35979__$1 = state_35979;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35979__$1,inst_35972);
} else {
if((state_val_35980 === (12))){
var inst_35948 = (state_35979[(2)]);
var state_35979__$1 = state_35979;
var statearr_36018_37931 = state_35979__$1;
(statearr_36018_37931[(2)] = inst_35948);

(statearr_36018_37931[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (2))){
var state_35979__$1 = state_35979;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35979__$1,(4),ch);
} else {
if((state_val_35980 === (23))){
var state_35979__$1 = state_35979;
var statearr_36019_37934 = state_35979__$1;
(statearr_36019_37934[(2)] = null);

(statearr_36019_37934[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (19))){
var inst_35955 = (state_35979[(11)]);
var inst_35894 = (state_35979[(8)]);
var inst_35957 = cljs.core.async.muxch_STAR_(inst_35955);
var state_35979__$1 = state_35979;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35979__$1,(22),inst_35957,inst_35894);
} else {
if((state_val_35980 === (11))){
var inst_35908 = (state_35979[(13)]);
var inst_35925 = (state_35979[(10)]);
var inst_35925__$1 = cljs.core.seq(inst_35908);
var state_35979__$1 = (function (){var statearr_36020 = state_35979;
(statearr_36020[(10)] = inst_35925__$1);

return statearr_36020;
})();
if(inst_35925__$1){
var statearr_36021_37935 = state_35979__$1;
(statearr_36021_37935[(1)] = (13));

} else {
var statearr_36022_37936 = state_35979__$1;
(statearr_36022_37936[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (9))){
var inst_35950 = (state_35979[(2)]);
var state_35979__$1 = state_35979;
var statearr_36023_37937 = state_35979__$1;
(statearr_36023_37937[(2)] = inst_35950);

(statearr_36023_37937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (5))){
var inst_35905 = cljs.core.deref(mults);
var inst_35906 = cljs.core.vals(inst_35905);
var inst_35907 = cljs.core.seq(inst_35906);
var inst_35908 = inst_35907;
var inst_35909 = null;
var inst_35910 = (0);
var inst_35911 = (0);
var state_35979__$1 = (function (){var statearr_36024 = state_35979;
(statearr_36024[(13)] = inst_35908);

(statearr_36024[(14)] = inst_35909);

(statearr_36024[(15)] = inst_35910);

(statearr_36024[(16)] = inst_35911);

return statearr_36024;
})();
var statearr_36026_37938 = state_35979__$1;
(statearr_36026_37938[(2)] = null);

(statearr_36026_37938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (14))){
var state_35979__$1 = state_35979;
var statearr_36030_37939 = state_35979__$1;
(statearr_36030_37939[(2)] = null);

(statearr_36030_37939[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (16))){
var inst_35925 = (state_35979[(10)]);
var inst_35929 = cljs.core.chunk_first(inst_35925);
var inst_35931 = cljs.core.chunk_rest(inst_35925);
var inst_35932 = cljs.core.count(inst_35929);
var inst_35908 = inst_35931;
var inst_35909 = inst_35929;
var inst_35910 = inst_35932;
var inst_35911 = (0);
var state_35979__$1 = (function (){var statearr_36032 = state_35979;
(statearr_36032[(13)] = inst_35908);

(statearr_36032[(14)] = inst_35909);

(statearr_36032[(15)] = inst_35910);

(statearr_36032[(16)] = inst_35911);

return statearr_36032;
})();
var statearr_36037_37940 = state_35979__$1;
(statearr_36037_37940[(2)] = null);

(statearr_36037_37940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (10))){
var inst_35908 = (state_35979[(13)]);
var inst_35909 = (state_35979[(14)]);
var inst_35910 = (state_35979[(15)]);
var inst_35911 = (state_35979[(16)]);
var inst_35918 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35909,inst_35911);
var inst_35920 = cljs.core.async.muxch_STAR_(inst_35918);
var inst_35921 = cljs.core.async.close_BANG_(inst_35920);
var inst_35922 = (inst_35911 + (1));
var tmp36027 = inst_35908;
var tmp36028 = inst_35909;
var tmp36029 = inst_35910;
var inst_35908__$1 = tmp36027;
var inst_35909__$1 = tmp36028;
var inst_35910__$1 = tmp36029;
var inst_35911__$1 = inst_35922;
var state_35979__$1 = (function (){var statearr_36041 = state_35979;
(statearr_36041[(17)] = inst_35921);

(statearr_36041[(13)] = inst_35908__$1);

(statearr_36041[(14)] = inst_35909__$1);

(statearr_36041[(15)] = inst_35910__$1);

(statearr_36041[(16)] = inst_35911__$1);

return statearr_36041;
})();
var statearr_36043_37941 = state_35979__$1;
(statearr_36043_37941[(2)] = null);

(statearr_36043_37941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (18))){
var inst_35943 = (state_35979[(2)]);
var state_35979__$1 = state_35979;
var statearr_36044_37942 = state_35979__$1;
(statearr_36044_37942[(2)] = inst_35943);

(statearr_36044_37942[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (8))){
var inst_35910 = (state_35979[(15)]);
var inst_35911 = (state_35979[(16)]);
var inst_35914 = (inst_35911 < inst_35910);
var inst_35915 = inst_35914;
var state_35979__$1 = state_35979;
if(cljs.core.truth_(inst_35915)){
var statearr_36045_37943 = state_35979__$1;
(statearr_36045_37943[(1)] = (10));

} else {
var statearr_36047_37944 = state_35979__$1;
(statearr_36047_37944[(1)] = (11));

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
var statearr_36051 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36051[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36051[(1)] = (1));

return statearr_36051;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_35979){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_35979);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36055){if((e36055 instanceof Object)){
var ex__34203__auto__ = e36055;
var statearr_36056_37948 = state_35979;
(statearr_36056_37948[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36055;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37949 = state_35979;
state_35979 = G__37949;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_35979){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_35979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36058 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36058[(6)] = c__34267__auto___37889);

return statearr_36058;
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
var G__36063 = arguments.length;
switch (G__36063) {
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
var G__36067 = arguments.length;
switch (G__36067) {
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
var c__34267__auto___37962 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36124){
var state_val_36125 = (state_36124[(1)]);
if((state_val_36125 === (7))){
var state_36124__$1 = state_36124;
var statearr_36126_37963 = state_36124__$1;
(statearr_36126_37963[(2)] = null);

(statearr_36126_37963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36125 === (1))){
var state_36124__$1 = state_36124;
var statearr_36128_37964 = state_36124__$1;
(statearr_36128_37964[(2)] = null);

(statearr_36128_37964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36125 === (4))){
var inst_36084 = (state_36124[(7)]);
var inst_36086 = (inst_36084 < cnt);
var state_36124__$1 = state_36124;
if(cljs.core.truth_(inst_36086)){
var statearr_36131_37969 = state_36124__$1;
(statearr_36131_37969[(1)] = (6));

} else {
var statearr_36133_37970 = state_36124__$1;
(statearr_36133_37970[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36125 === (15))){
var inst_36118 = (state_36124[(2)]);
var state_36124__$1 = state_36124;
var statearr_36137_37971 = state_36124__$1;
(statearr_36137_37971[(2)] = inst_36118);

(statearr_36137_37971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36125 === (13))){
var inst_36111 = cljs.core.async.close_BANG_(out);
var state_36124__$1 = state_36124;
var statearr_36140_37973 = state_36124__$1;
(statearr_36140_37973[(2)] = inst_36111);

(statearr_36140_37973[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36125 === (6))){
var state_36124__$1 = state_36124;
var statearr_36142_37976 = state_36124__$1;
(statearr_36142_37976[(2)] = null);

(statearr_36142_37976[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36125 === (3))){
var inst_36120 = (state_36124[(2)]);
var state_36124__$1 = state_36124;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36124__$1,inst_36120);
} else {
if((state_val_36125 === (12))){
var inst_36108 = (state_36124[(8)]);
var inst_36108__$1 = (state_36124[(2)]);
var inst_36109 = cljs.core.some(cljs.core.nil_QMARK_,inst_36108__$1);
var state_36124__$1 = (function (){var statearr_36154 = state_36124;
(statearr_36154[(8)] = inst_36108__$1);

return statearr_36154;
})();
if(cljs.core.truth_(inst_36109)){
var statearr_36155_37977 = state_36124__$1;
(statearr_36155_37977[(1)] = (13));

} else {
var statearr_36157_37978 = state_36124__$1;
(statearr_36157_37978[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36125 === (2))){
var inst_36082 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36084 = (0);
var state_36124__$1 = (function (){var statearr_36158 = state_36124;
(statearr_36158[(7)] = inst_36084);

(statearr_36158[(9)] = inst_36082);

return statearr_36158;
})();
var statearr_36160_37979 = state_36124__$1;
(statearr_36160_37979[(2)] = null);

(statearr_36160_37979[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36125 === (11))){
var inst_36084 = (state_36124[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36124,(10),Object,null,(9));
var inst_36095 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36084) : chs__$1.call(null,inst_36084));
var inst_36096 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36084) : done.call(null,inst_36084));
var inst_36097 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36095,inst_36096);
var state_36124__$1 = state_36124;
var statearr_36162_37983 = state_36124__$1;
(statearr_36162_37983[(2)] = inst_36097);


cljs.core.async.impl.ioc_helpers.process_exception(state_36124__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36125 === (9))){
var inst_36084 = (state_36124[(7)]);
var inst_36099 = (state_36124[(2)]);
var inst_36100 = (inst_36084 + (1));
var inst_36084__$1 = inst_36100;
var state_36124__$1 = (function (){var statearr_36165 = state_36124;
(statearr_36165[(7)] = inst_36084__$1);

(statearr_36165[(10)] = inst_36099);

return statearr_36165;
})();
var statearr_36166_37985 = state_36124__$1;
(statearr_36166_37985[(2)] = null);

(statearr_36166_37985[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36125 === (5))){
var inst_36106 = (state_36124[(2)]);
var state_36124__$1 = (function (){var statearr_36167 = state_36124;
(statearr_36167[(11)] = inst_36106);

return statearr_36167;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36124__$1,(12),dchan);
} else {
if((state_val_36125 === (14))){
var inst_36108 = (state_36124[(8)]);
var inst_36113 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36108);
var state_36124__$1 = state_36124;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36124__$1,(16),out,inst_36113);
} else {
if((state_val_36125 === (16))){
var inst_36115 = (state_36124[(2)]);
var state_36124__$1 = (function (){var statearr_36170 = state_36124;
(statearr_36170[(12)] = inst_36115);

return statearr_36170;
})();
var statearr_36171_37990 = state_36124__$1;
(statearr_36171_37990[(2)] = null);

(statearr_36171_37990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36125 === (10))){
var inst_36089 = (state_36124[(2)]);
var inst_36090 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36124__$1 = (function (){var statearr_36172 = state_36124;
(statearr_36172[(13)] = inst_36089);

return statearr_36172;
})();
var statearr_36173_37995 = state_36124__$1;
(statearr_36173_37995[(2)] = inst_36090);


cljs.core.async.impl.ioc_helpers.process_exception(state_36124__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36125 === (8))){
var inst_36104 = (state_36124[(2)]);
var state_36124__$1 = state_36124;
var statearr_36176_37996 = state_36124__$1;
(statearr_36176_37996[(2)] = inst_36104);

(statearr_36176_37996[(1)] = (5));


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
var statearr_36177 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36177[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36177[(1)] = (1));

return statearr_36177;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36124){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36124);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36178){if((e36178 instanceof Object)){
var ex__34203__auto__ = e36178;
var statearr_36181_37997 = state_36124;
(statearr_36181_37997[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36178;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37999 = state_36124;
state_36124 = G__37999;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36184 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36184[(6)] = c__34267__auto___37962);

return statearr_36184;
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
var G__36202 = arguments.length;
switch (G__36202) {
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
var c__34267__auto___38005 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36236){
var state_val_36237 = (state_36236[(1)]);
if((state_val_36237 === (7))){
var inst_36215 = (state_36236[(7)]);
var inst_36216 = (state_36236[(8)]);
var inst_36215__$1 = (state_36236[(2)]);
var inst_36216__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36215__$1,(0),null);
var inst_36217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36215__$1,(1),null);
var inst_36218 = (inst_36216__$1 == null);
var state_36236__$1 = (function (){var statearr_36242 = state_36236;
(statearr_36242[(7)] = inst_36215__$1);

(statearr_36242[(8)] = inst_36216__$1);

(statearr_36242[(9)] = inst_36217);

return statearr_36242;
})();
if(cljs.core.truth_(inst_36218)){
var statearr_36243_38008 = state_36236__$1;
(statearr_36243_38008[(1)] = (8));

} else {
var statearr_36244_38010 = state_36236__$1;
(statearr_36244_38010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (1))){
var inst_36205 = cljs.core.vec(chs);
var inst_36206 = inst_36205;
var state_36236__$1 = (function (){var statearr_36250 = state_36236;
(statearr_36250[(10)] = inst_36206);

return statearr_36250;
})();
var statearr_36254_38011 = state_36236__$1;
(statearr_36254_38011[(2)] = null);

(statearr_36254_38011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (4))){
var inst_36206 = (state_36236[(10)]);
var state_36236__$1 = state_36236;
return cljs.core.async.ioc_alts_BANG_(state_36236__$1,(7),inst_36206);
} else {
if((state_val_36237 === (6))){
var inst_36232 = (state_36236[(2)]);
var state_36236__$1 = state_36236;
var statearr_36257_38012 = state_36236__$1;
(statearr_36257_38012[(2)] = inst_36232);

(statearr_36257_38012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (3))){
var inst_36234 = (state_36236[(2)]);
var state_36236__$1 = state_36236;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36236__$1,inst_36234);
} else {
if((state_val_36237 === (2))){
var inst_36206 = (state_36236[(10)]);
var inst_36208 = cljs.core.count(inst_36206);
var inst_36209 = (inst_36208 > (0));
var state_36236__$1 = state_36236;
if(cljs.core.truth_(inst_36209)){
var statearr_36262_38015 = state_36236__$1;
(statearr_36262_38015[(1)] = (4));

} else {
var statearr_36263_38018 = state_36236__$1;
(statearr_36263_38018[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (11))){
var inst_36206 = (state_36236[(10)]);
var inst_36225 = (state_36236[(2)]);
var tmp36259 = inst_36206;
var inst_36206__$1 = tmp36259;
var state_36236__$1 = (function (){var statearr_36264 = state_36236;
(statearr_36264[(10)] = inst_36206__$1);

(statearr_36264[(11)] = inst_36225);

return statearr_36264;
})();
var statearr_36266_38019 = state_36236__$1;
(statearr_36266_38019[(2)] = null);

(statearr_36266_38019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (9))){
var inst_36216 = (state_36236[(8)]);
var state_36236__$1 = state_36236;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36236__$1,(11),out,inst_36216);
} else {
if((state_val_36237 === (5))){
var inst_36230 = cljs.core.async.close_BANG_(out);
var state_36236__$1 = state_36236;
var statearr_36268_38020 = state_36236__$1;
(statearr_36268_38020[(2)] = inst_36230);

(statearr_36268_38020[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (10))){
var inst_36228 = (state_36236[(2)]);
var state_36236__$1 = state_36236;
var statearr_36271_38023 = state_36236__$1;
(statearr_36271_38023[(2)] = inst_36228);

(statearr_36271_38023[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (8))){
var inst_36215 = (state_36236[(7)]);
var inst_36216 = (state_36236[(8)]);
var inst_36217 = (state_36236[(9)]);
var inst_36206 = (state_36236[(10)]);
var inst_36220 = (function (){var cs = inst_36206;
var vec__36211 = inst_36215;
var v = inst_36216;
var c = inst_36217;
return (function (p1__36185_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36185_SHARP_);
});
})();
var inst_36221 = cljs.core.filterv(inst_36220,inst_36206);
var inst_36206__$1 = inst_36221;
var state_36236__$1 = (function (){var statearr_36272 = state_36236;
(statearr_36272[(10)] = inst_36206__$1);

return statearr_36272;
})();
var statearr_36273_38024 = state_36236__$1;
(statearr_36273_38024[(2)] = null);

(statearr_36273_38024[(1)] = (2));


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
var statearr_36276 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36276[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36276[(1)] = (1));

return statearr_36276;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36236){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36236);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36277){if((e36277 instanceof Object)){
var ex__34203__auto__ = e36277;
var statearr_36278_38028 = state_36236;
(statearr_36278_38028[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36277;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38029 = state_36236;
state_36236 = G__38029;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36236){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36286 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36286[(6)] = c__34267__auto___38005);

return statearr_36286;
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
var G__36293 = arguments.length;
switch (G__36293) {
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
var c__34267__auto___38034 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36319){
var state_val_36320 = (state_36319[(1)]);
if((state_val_36320 === (7))){
var inst_36301 = (state_36319[(7)]);
var inst_36301__$1 = (state_36319[(2)]);
var inst_36302 = (inst_36301__$1 == null);
var inst_36303 = cljs.core.not(inst_36302);
var state_36319__$1 = (function (){var statearr_36322 = state_36319;
(statearr_36322[(7)] = inst_36301__$1);

return statearr_36322;
})();
if(inst_36303){
var statearr_36326_38037 = state_36319__$1;
(statearr_36326_38037[(1)] = (8));

} else {
var statearr_36327_38039 = state_36319__$1;
(statearr_36327_38039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36320 === (1))){
var inst_36295 = (0);
var state_36319__$1 = (function (){var statearr_36328 = state_36319;
(statearr_36328[(8)] = inst_36295);

return statearr_36328;
})();
var statearr_36329_38040 = state_36319__$1;
(statearr_36329_38040[(2)] = null);

(statearr_36329_38040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36320 === (4))){
var state_36319__$1 = state_36319;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36319__$1,(7),ch);
} else {
if((state_val_36320 === (6))){
var inst_36314 = (state_36319[(2)]);
var state_36319__$1 = state_36319;
var statearr_36332_38041 = state_36319__$1;
(statearr_36332_38041[(2)] = inst_36314);

(statearr_36332_38041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36320 === (3))){
var inst_36316 = (state_36319[(2)]);
var inst_36317 = cljs.core.async.close_BANG_(out);
var state_36319__$1 = (function (){var statearr_36333 = state_36319;
(statearr_36333[(9)] = inst_36316);

return statearr_36333;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36319__$1,inst_36317);
} else {
if((state_val_36320 === (2))){
var inst_36295 = (state_36319[(8)]);
var inst_36297 = (inst_36295 < n);
var state_36319__$1 = state_36319;
if(cljs.core.truth_(inst_36297)){
var statearr_36335_38045 = state_36319__$1;
(statearr_36335_38045[(1)] = (4));

} else {
var statearr_36336_38046 = state_36319__$1;
(statearr_36336_38046[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36320 === (11))){
var inst_36295 = (state_36319[(8)]);
var inst_36306 = (state_36319[(2)]);
var inst_36307 = (inst_36295 + (1));
var inst_36295__$1 = inst_36307;
var state_36319__$1 = (function (){var statearr_36338 = state_36319;
(statearr_36338[(10)] = inst_36306);

(statearr_36338[(8)] = inst_36295__$1);

return statearr_36338;
})();
var statearr_36340_38047 = state_36319__$1;
(statearr_36340_38047[(2)] = null);

(statearr_36340_38047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36320 === (9))){
var state_36319__$1 = state_36319;
var statearr_36344_38049 = state_36319__$1;
(statearr_36344_38049[(2)] = null);

(statearr_36344_38049[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36320 === (5))){
var state_36319__$1 = state_36319;
var statearr_36348_38052 = state_36319__$1;
(statearr_36348_38052[(2)] = null);

(statearr_36348_38052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36320 === (10))){
var inst_36311 = (state_36319[(2)]);
var state_36319__$1 = state_36319;
var statearr_36351_38053 = state_36319__$1;
(statearr_36351_38053[(2)] = inst_36311);

(statearr_36351_38053[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36320 === (8))){
var inst_36301 = (state_36319[(7)]);
var state_36319__$1 = state_36319;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36319__$1,(11),out,inst_36301);
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
var statearr_36352 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36352[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36352[(1)] = (1));

return statearr_36352;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36319){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36319);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36355){if((e36355 instanceof Object)){
var ex__34203__auto__ = e36355;
var statearr_36357_38057 = state_36319;
(statearr_36357_38057[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36355;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38058 = state_36319;
state_36319 = G__38058;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36319){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36358 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36358[(6)] = c__34267__auto___38034);

return statearr_36358;
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

(cljs.core.async.t_cljs$core$async36361.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36361.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36361.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36377 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36377 = (function (f,ch,meta36362,_,fn1,meta36378){
this.f = f;
this.ch = ch;
this.meta36362 = meta36362;
this._ = _;
this.fn1 = fn1;
this.meta36378 = meta36378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36379,meta36378__$1){
var self__ = this;
var _36379__$1 = this;
return (new cljs.core.async.t_cljs$core$async36377(self__.f,self__.ch,self__.meta36362,self__._,self__.fn1,meta36378__$1));
}));

(cljs.core.async.t_cljs$core$async36377.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36379){
var self__ = this;
var _36379__$1 = this;
return self__.meta36378;
}));

(cljs.core.async.t_cljs$core$async36377.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36377.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36377.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36377.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36360_SHARP_){
var G__36387 = (((p1__36360_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36360_SHARP_) : self__.f.call(null,p1__36360_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36387) : f1.call(null,G__36387));
});
}));

(cljs.core.async.t_cljs$core$async36377.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36362","meta36362",1854340596,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36361","cljs.core.async/t_cljs$core$async36361",-1035871207,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36378","meta36378",2036187178,null)], null);
}));

(cljs.core.async.t_cljs$core$async36377.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36377.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36377");

(cljs.core.async.t_cljs$core$async36377.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36377");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36377.
 */
cljs.core.async.__GT_t_cljs$core$async36377 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36377(f__$1,ch__$1,meta36362__$1,___$2,fn1__$1,meta36378){
return (new cljs.core.async.t_cljs$core$async36377(f__$1,ch__$1,meta36362__$1,___$2,fn1__$1,meta36378));
});

}

return (new cljs.core.async.t_cljs$core$async36377(self__.f,self__.ch,self__.meta36362,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36400 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36400) : self__.f.call(null,G__36400));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36361.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36361.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
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
cljs.core.async.__GT_t_cljs$core$async36361 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36361(f__$1,ch__$1,meta36362){
return (new cljs.core.async.t_cljs$core$async36361(f__$1,ch__$1,meta36362));
});

}

return (new cljs.core.async.t_cljs$core$async36361(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36406 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36406 = (function (f,ch,meta36407){
this.f = f;
this.ch = ch;
this.meta36407 = meta36407;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36408,meta36407__$1){
var self__ = this;
var _36408__$1 = this;
return (new cljs.core.async.t_cljs$core$async36406(self__.f,self__.ch,meta36407__$1));
}));

(cljs.core.async.t_cljs$core$async36406.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36408){
var self__ = this;
var _36408__$1 = this;
return self__.meta36407;
}));

(cljs.core.async.t_cljs$core$async36406.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36406.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36406.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36406.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36406.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36406.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36406.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36407","meta36407",-2069640716,null)], null);
}));

(cljs.core.async.t_cljs$core$async36406.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36406.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36406");

(cljs.core.async.t_cljs$core$async36406.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36406");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36406.
 */
cljs.core.async.__GT_t_cljs$core$async36406 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36406(f__$1,ch__$1,meta36407){
return (new cljs.core.async.t_cljs$core$async36406(f__$1,ch__$1,meta36407));
});

}

return (new cljs.core.async.t_cljs$core$async36406(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36419 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36419 = (function (p,ch,meta36420){
this.p = p;
this.ch = ch;
this.meta36420 = meta36420;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36421,meta36420__$1){
var self__ = this;
var _36421__$1 = this;
return (new cljs.core.async.t_cljs$core$async36419(self__.p,self__.ch,meta36420__$1));
}));

(cljs.core.async.t_cljs$core$async36419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36421){
var self__ = this;
var _36421__$1 = this;
return self__.meta36420;
}));

(cljs.core.async.t_cljs$core$async36419.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36419.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36419.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36419.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36419.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36419.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36419.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36419.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36420","meta36420",191534355,null)], null);
}));

(cljs.core.async.t_cljs$core$async36419.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36419.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36419");

(cljs.core.async.t_cljs$core$async36419.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36419");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36419.
 */
cljs.core.async.__GT_t_cljs$core$async36419 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36419(p__$1,ch__$1,meta36420){
return (new cljs.core.async.t_cljs$core$async36419(p__$1,ch__$1,meta36420));
});

}

return (new cljs.core.async.t_cljs$core$async36419(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36432 = arguments.length;
switch (G__36432) {
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
var c__34267__auto___38084 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36459){
var state_val_36460 = (state_36459[(1)]);
if((state_val_36460 === (7))){
var inst_36454 = (state_36459[(2)]);
var state_36459__$1 = state_36459;
var statearr_36462_38087 = state_36459__$1;
(statearr_36462_38087[(2)] = inst_36454);

(statearr_36462_38087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36460 === (1))){
var state_36459__$1 = state_36459;
var statearr_36463_38089 = state_36459__$1;
(statearr_36463_38089[(2)] = null);

(statearr_36463_38089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36460 === (4))){
var inst_36437 = (state_36459[(7)]);
var inst_36437__$1 = (state_36459[(2)]);
var inst_36438 = (inst_36437__$1 == null);
var state_36459__$1 = (function (){var statearr_36465 = state_36459;
(statearr_36465[(7)] = inst_36437__$1);

return statearr_36465;
})();
if(cljs.core.truth_(inst_36438)){
var statearr_36466_38090 = state_36459__$1;
(statearr_36466_38090[(1)] = (5));

} else {
var statearr_36467_38091 = state_36459__$1;
(statearr_36467_38091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36460 === (6))){
var inst_36437 = (state_36459[(7)]);
var inst_36442 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36437) : p.call(null,inst_36437));
var state_36459__$1 = state_36459;
if(cljs.core.truth_(inst_36442)){
var statearr_36469_38093 = state_36459__$1;
(statearr_36469_38093[(1)] = (8));

} else {
var statearr_36470_38095 = state_36459__$1;
(statearr_36470_38095[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36460 === (3))){
var inst_36457 = (state_36459[(2)]);
var state_36459__$1 = state_36459;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36459__$1,inst_36457);
} else {
if((state_val_36460 === (2))){
var state_36459__$1 = state_36459;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36459__$1,(4),ch);
} else {
if((state_val_36460 === (11))){
var inst_36448 = (state_36459[(2)]);
var state_36459__$1 = state_36459;
var statearr_36472_38097 = state_36459__$1;
(statearr_36472_38097[(2)] = inst_36448);

(statearr_36472_38097[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36460 === (9))){
var state_36459__$1 = state_36459;
var statearr_36474_38098 = state_36459__$1;
(statearr_36474_38098[(2)] = null);

(statearr_36474_38098[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36460 === (5))){
var inst_36440 = cljs.core.async.close_BANG_(out);
var state_36459__$1 = state_36459;
var statearr_36478_38100 = state_36459__$1;
(statearr_36478_38100[(2)] = inst_36440);

(statearr_36478_38100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36460 === (10))){
var inst_36451 = (state_36459[(2)]);
var state_36459__$1 = (function (){var statearr_36480 = state_36459;
(statearr_36480[(8)] = inst_36451);

return statearr_36480;
})();
var statearr_36481_38103 = state_36459__$1;
(statearr_36481_38103[(2)] = null);

(statearr_36481_38103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36460 === (8))){
var inst_36437 = (state_36459[(7)]);
var state_36459__$1 = state_36459;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36459__$1,(11),out,inst_36437);
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
var statearr_36483 = [null,null,null,null,null,null,null,null,null];
(statearr_36483[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36483[(1)] = (1));

return statearr_36483;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36459){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36459);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36484){if((e36484 instanceof Object)){
var ex__34203__auto__ = e36484;
var statearr_36485_38105 = state_36459;
(statearr_36485_38105[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36484;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38106 = state_36459;
state_36459 = G__38106;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36459){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36487 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36487[(6)] = c__34267__auto___38084);

return statearr_36487;
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
var G__36490 = arguments.length;
switch (G__36490) {
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
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36558){
var state_val_36559 = (state_36558[(1)]);
if((state_val_36559 === (7))){
var inst_36553 = (state_36558[(2)]);
var state_36558__$1 = state_36558;
var statearr_36562_38111 = state_36558__$1;
(statearr_36562_38111[(2)] = inst_36553);

(statearr_36562_38111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (20))){
var inst_36522 = (state_36558[(7)]);
var inst_36534 = (state_36558[(2)]);
var inst_36535 = cljs.core.next(inst_36522);
var inst_36507 = inst_36535;
var inst_36509 = null;
var inst_36510 = (0);
var inst_36511 = (0);
var state_36558__$1 = (function (){var statearr_36564 = state_36558;
(statearr_36564[(8)] = inst_36509);

(statearr_36564[(9)] = inst_36510);

(statearr_36564[(10)] = inst_36511);

(statearr_36564[(11)] = inst_36507);

(statearr_36564[(12)] = inst_36534);

return statearr_36564;
})();
var statearr_36565_38114 = state_36558__$1;
(statearr_36565_38114[(2)] = null);

(statearr_36565_38114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (1))){
var state_36558__$1 = state_36558;
var statearr_36566_38115 = state_36558__$1;
(statearr_36566_38115[(2)] = null);

(statearr_36566_38115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (4))){
var inst_36496 = (state_36558[(13)]);
var inst_36496__$1 = (state_36558[(2)]);
var inst_36497 = (inst_36496__$1 == null);
var state_36558__$1 = (function (){var statearr_36568 = state_36558;
(statearr_36568[(13)] = inst_36496__$1);

return statearr_36568;
})();
if(cljs.core.truth_(inst_36497)){
var statearr_36569_38116 = state_36558__$1;
(statearr_36569_38116[(1)] = (5));

} else {
var statearr_36570_38117 = state_36558__$1;
(statearr_36570_38117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (15))){
var state_36558__$1 = state_36558;
var statearr_36575_38118 = state_36558__$1;
(statearr_36575_38118[(2)] = null);

(statearr_36575_38118[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (21))){
var state_36558__$1 = state_36558;
var statearr_36576_38119 = state_36558__$1;
(statearr_36576_38119[(2)] = null);

(statearr_36576_38119[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (13))){
var inst_36509 = (state_36558[(8)]);
var inst_36510 = (state_36558[(9)]);
var inst_36511 = (state_36558[(10)]);
var inst_36507 = (state_36558[(11)]);
var inst_36518 = (state_36558[(2)]);
var inst_36519 = (inst_36511 + (1));
var tmp36572 = inst_36509;
var tmp36573 = inst_36510;
var tmp36574 = inst_36507;
var inst_36507__$1 = tmp36574;
var inst_36509__$1 = tmp36572;
var inst_36510__$1 = tmp36573;
var inst_36511__$1 = inst_36519;
var state_36558__$1 = (function (){var statearr_36578 = state_36558;
(statearr_36578[(8)] = inst_36509__$1);

(statearr_36578[(9)] = inst_36510__$1);

(statearr_36578[(10)] = inst_36511__$1);

(statearr_36578[(11)] = inst_36507__$1);

(statearr_36578[(14)] = inst_36518);

return statearr_36578;
})();
var statearr_36579_38126 = state_36558__$1;
(statearr_36579_38126[(2)] = null);

(statearr_36579_38126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (22))){
var state_36558__$1 = state_36558;
var statearr_36581_38127 = state_36558__$1;
(statearr_36581_38127[(2)] = null);

(statearr_36581_38127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (6))){
var inst_36496 = (state_36558[(13)]);
var inst_36505 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36496) : f.call(null,inst_36496));
var inst_36506 = cljs.core.seq(inst_36505);
var inst_36507 = inst_36506;
var inst_36509 = null;
var inst_36510 = (0);
var inst_36511 = (0);
var state_36558__$1 = (function (){var statearr_36582 = state_36558;
(statearr_36582[(8)] = inst_36509);

(statearr_36582[(9)] = inst_36510);

(statearr_36582[(10)] = inst_36511);

(statearr_36582[(11)] = inst_36507);

return statearr_36582;
})();
var statearr_36584_38131 = state_36558__$1;
(statearr_36584_38131[(2)] = null);

(statearr_36584_38131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (17))){
var inst_36522 = (state_36558[(7)]);
var inst_36526 = cljs.core.chunk_first(inst_36522);
var inst_36527 = cljs.core.chunk_rest(inst_36522);
var inst_36529 = cljs.core.count(inst_36526);
var inst_36507 = inst_36527;
var inst_36509 = inst_36526;
var inst_36510 = inst_36529;
var inst_36511 = (0);
var state_36558__$1 = (function (){var statearr_36585 = state_36558;
(statearr_36585[(8)] = inst_36509);

(statearr_36585[(9)] = inst_36510);

(statearr_36585[(10)] = inst_36511);

(statearr_36585[(11)] = inst_36507);

return statearr_36585;
})();
var statearr_36587_38135 = state_36558__$1;
(statearr_36587_38135[(2)] = null);

(statearr_36587_38135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (3))){
var inst_36555 = (state_36558[(2)]);
var state_36558__$1 = state_36558;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36558__$1,inst_36555);
} else {
if((state_val_36559 === (12))){
var inst_36543 = (state_36558[(2)]);
var state_36558__$1 = state_36558;
var statearr_36588_38137 = state_36558__$1;
(statearr_36588_38137[(2)] = inst_36543);

(statearr_36588_38137[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (2))){
var state_36558__$1 = state_36558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36558__$1,(4),in$);
} else {
if((state_val_36559 === (23))){
var inst_36551 = (state_36558[(2)]);
var state_36558__$1 = state_36558;
var statearr_36590_38140 = state_36558__$1;
(statearr_36590_38140[(2)] = inst_36551);

(statearr_36590_38140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (19))){
var inst_36538 = (state_36558[(2)]);
var state_36558__$1 = state_36558;
var statearr_36591_38141 = state_36558__$1;
(statearr_36591_38141[(2)] = inst_36538);

(statearr_36591_38141[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (11))){
var inst_36507 = (state_36558[(11)]);
var inst_36522 = (state_36558[(7)]);
var inst_36522__$1 = cljs.core.seq(inst_36507);
var state_36558__$1 = (function (){var statearr_36593 = state_36558;
(statearr_36593[(7)] = inst_36522__$1);

return statearr_36593;
})();
if(inst_36522__$1){
var statearr_36594_38143 = state_36558__$1;
(statearr_36594_38143[(1)] = (14));

} else {
var statearr_36595_38144 = state_36558__$1;
(statearr_36595_38144[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (9))){
var inst_36545 = (state_36558[(2)]);
var inst_36546 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36558__$1 = (function (){var statearr_36597 = state_36558;
(statearr_36597[(15)] = inst_36545);

return statearr_36597;
})();
if(cljs.core.truth_(inst_36546)){
var statearr_36598_38147 = state_36558__$1;
(statearr_36598_38147[(1)] = (21));

} else {
var statearr_36599_38148 = state_36558__$1;
(statearr_36599_38148[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (5))){
var inst_36499 = cljs.core.async.close_BANG_(out);
var state_36558__$1 = state_36558;
var statearr_36600_38149 = state_36558__$1;
(statearr_36600_38149[(2)] = inst_36499);

(statearr_36600_38149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (14))){
var inst_36522 = (state_36558[(7)]);
var inst_36524 = cljs.core.chunked_seq_QMARK_(inst_36522);
var state_36558__$1 = state_36558;
if(inst_36524){
var statearr_36602_38150 = state_36558__$1;
(statearr_36602_38150[(1)] = (17));

} else {
var statearr_36603_38151 = state_36558__$1;
(statearr_36603_38151[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (16))){
var inst_36541 = (state_36558[(2)]);
var state_36558__$1 = state_36558;
var statearr_36604_38153 = state_36558__$1;
(statearr_36604_38153[(2)] = inst_36541);

(statearr_36604_38153[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36559 === (10))){
var inst_36509 = (state_36558[(8)]);
var inst_36511 = (state_36558[(10)]);
var inst_36516 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36509,inst_36511);
var state_36558__$1 = state_36558;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36558__$1,(13),out,inst_36516);
} else {
if((state_val_36559 === (18))){
var inst_36522 = (state_36558[(7)]);
var inst_36532 = cljs.core.first(inst_36522);
var state_36558__$1 = state_36558;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36558__$1,(20),out,inst_36532);
} else {
if((state_val_36559 === (8))){
var inst_36510 = (state_36558[(9)]);
var inst_36511 = (state_36558[(10)]);
var inst_36513 = (inst_36511 < inst_36510);
var inst_36514 = inst_36513;
var state_36558__$1 = state_36558;
if(cljs.core.truth_(inst_36514)){
var statearr_36607_38156 = state_36558__$1;
(statearr_36607_38156[(1)] = (10));

} else {
var statearr_36608_38157 = state_36558__$1;
(statearr_36608_38157[(1)] = (11));

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
var statearr_36610 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36610[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__);

(statearr_36610[(1)] = (1));

return statearr_36610;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____1 = (function (state_36558){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36558);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36611){if((e36611 instanceof Object)){
var ex__34203__auto__ = e36611;
var statearr_36612_38161 = state_36558;
(statearr_36612_38161[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36611;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38162 = state_36558;
state_36558 = G__38162;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__ = function(state_36558){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____1.call(this,state_36558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36614 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36614[(6)] = c__34267__auto__);

return statearr_36614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));

return c__34267__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36617 = arguments.length;
switch (G__36617) {
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
var G__36621 = arguments.length;
switch (G__36621) {
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
var G__36625 = arguments.length;
switch (G__36625) {
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
var c__34267__auto___38176 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36651){
var state_val_36652 = (state_36651[(1)]);
if((state_val_36652 === (7))){
var inst_36646 = (state_36651[(2)]);
var state_36651__$1 = state_36651;
var statearr_36654_38177 = state_36651__$1;
(statearr_36654_38177[(2)] = inst_36646);

(statearr_36654_38177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (1))){
var inst_36628 = null;
var state_36651__$1 = (function (){var statearr_36656 = state_36651;
(statearr_36656[(7)] = inst_36628);

return statearr_36656;
})();
var statearr_36657_38179 = state_36651__$1;
(statearr_36657_38179[(2)] = null);

(statearr_36657_38179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (4))){
var inst_36631 = (state_36651[(8)]);
var inst_36631__$1 = (state_36651[(2)]);
var inst_36632 = (inst_36631__$1 == null);
var inst_36633 = cljs.core.not(inst_36632);
var state_36651__$1 = (function (){var statearr_36658 = state_36651;
(statearr_36658[(8)] = inst_36631__$1);

return statearr_36658;
})();
if(inst_36633){
var statearr_36659_38182 = state_36651__$1;
(statearr_36659_38182[(1)] = (5));

} else {
var statearr_36661_38184 = state_36651__$1;
(statearr_36661_38184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (6))){
var state_36651__$1 = state_36651;
var statearr_36662_38185 = state_36651__$1;
(statearr_36662_38185[(2)] = null);

(statearr_36662_38185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (3))){
var inst_36648 = (state_36651[(2)]);
var inst_36649 = cljs.core.async.close_BANG_(out);
var state_36651__$1 = (function (){var statearr_36663 = state_36651;
(statearr_36663[(9)] = inst_36648);

return statearr_36663;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36651__$1,inst_36649);
} else {
if((state_val_36652 === (2))){
var state_36651__$1 = state_36651;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36651__$1,(4),ch);
} else {
if((state_val_36652 === (11))){
var inst_36631 = (state_36651[(8)]);
var inst_36640 = (state_36651[(2)]);
var inst_36628 = inst_36631;
var state_36651__$1 = (function (){var statearr_36665 = state_36651;
(statearr_36665[(7)] = inst_36628);

(statearr_36665[(10)] = inst_36640);

return statearr_36665;
})();
var statearr_36666_38186 = state_36651__$1;
(statearr_36666_38186[(2)] = null);

(statearr_36666_38186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (9))){
var inst_36631 = (state_36651[(8)]);
var state_36651__$1 = state_36651;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36651__$1,(11),out,inst_36631);
} else {
if((state_val_36652 === (5))){
var inst_36628 = (state_36651[(7)]);
var inst_36631 = (state_36651[(8)]);
var inst_36635 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36631,inst_36628);
var state_36651__$1 = state_36651;
if(inst_36635){
var statearr_36669_38188 = state_36651__$1;
(statearr_36669_38188[(1)] = (8));

} else {
var statearr_36670_38189 = state_36651__$1;
(statearr_36670_38189[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (10))){
var inst_36643 = (state_36651[(2)]);
var state_36651__$1 = state_36651;
var statearr_36671_38190 = state_36651__$1;
(statearr_36671_38190[(2)] = inst_36643);

(statearr_36671_38190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (8))){
var inst_36628 = (state_36651[(7)]);
var tmp36667 = inst_36628;
var inst_36628__$1 = tmp36667;
var state_36651__$1 = (function (){var statearr_36673 = state_36651;
(statearr_36673[(7)] = inst_36628__$1);

return statearr_36673;
})();
var statearr_36674_38191 = state_36651__$1;
(statearr_36674_38191[(2)] = null);

(statearr_36674_38191[(1)] = (2));


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
var statearr_36675 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36675[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36675[(1)] = (1));

return statearr_36675;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36651){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36651);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36677){if((e36677 instanceof Object)){
var ex__34203__auto__ = e36677;
var statearr_36678_38195 = state_36651;
(statearr_36678_38195[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36677;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38196 = state_36651;
state_36651 = G__38196;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36680 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36680[(6)] = c__34267__auto___38176);

return statearr_36680;
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
var G__36683 = arguments.length;
switch (G__36683) {
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
var c__34267__auto___38201 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36724){
var state_val_36725 = (state_36724[(1)]);
if((state_val_36725 === (7))){
var inst_36720 = (state_36724[(2)]);
var state_36724__$1 = state_36724;
var statearr_36727_38202 = state_36724__$1;
(statearr_36727_38202[(2)] = inst_36720);

(statearr_36727_38202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (1))){
var inst_36686 = (new Array(n));
var inst_36687 = inst_36686;
var inst_36688 = (0);
var state_36724__$1 = (function (){var statearr_36728 = state_36724;
(statearr_36728[(7)] = inst_36687);

(statearr_36728[(8)] = inst_36688);

return statearr_36728;
})();
var statearr_36730_38203 = state_36724__$1;
(statearr_36730_38203[(2)] = null);

(statearr_36730_38203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (4))){
var inst_36691 = (state_36724[(9)]);
var inst_36691__$1 = (state_36724[(2)]);
var inst_36692 = (inst_36691__$1 == null);
var inst_36693 = cljs.core.not(inst_36692);
var state_36724__$1 = (function (){var statearr_36731 = state_36724;
(statearr_36731[(9)] = inst_36691__$1);

return statearr_36731;
})();
if(inst_36693){
var statearr_36732_38205 = state_36724__$1;
(statearr_36732_38205[(1)] = (5));

} else {
var statearr_36733_38206 = state_36724__$1;
(statearr_36733_38206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (15))){
var inst_36714 = (state_36724[(2)]);
var state_36724__$1 = state_36724;
var statearr_36735_38207 = state_36724__$1;
(statearr_36735_38207[(2)] = inst_36714);

(statearr_36735_38207[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (13))){
var state_36724__$1 = state_36724;
var statearr_36736_38208 = state_36724__$1;
(statearr_36736_38208[(2)] = null);

(statearr_36736_38208[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (6))){
var inst_36688 = (state_36724[(8)]);
var inst_36710 = (inst_36688 > (0));
var state_36724__$1 = state_36724;
if(cljs.core.truth_(inst_36710)){
var statearr_36738_38210 = state_36724__$1;
(statearr_36738_38210[(1)] = (12));

} else {
var statearr_36739_38211 = state_36724__$1;
(statearr_36739_38211[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (3))){
var inst_36722 = (state_36724[(2)]);
var state_36724__$1 = state_36724;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36724__$1,inst_36722);
} else {
if((state_val_36725 === (12))){
var inst_36687 = (state_36724[(7)]);
var inst_36712 = cljs.core.vec(inst_36687);
var state_36724__$1 = state_36724;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36724__$1,(15),out,inst_36712);
} else {
if((state_val_36725 === (2))){
var state_36724__$1 = state_36724;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36724__$1,(4),ch);
} else {
if((state_val_36725 === (11))){
var inst_36703 = (state_36724[(2)]);
var inst_36704 = (new Array(n));
var inst_36687 = inst_36704;
var inst_36688 = (0);
var state_36724__$1 = (function (){var statearr_36741 = state_36724;
(statearr_36741[(10)] = inst_36703);

(statearr_36741[(7)] = inst_36687);

(statearr_36741[(8)] = inst_36688);

return statearr_36741;
})();
var statearr_36743_38213 = state_36724__$1;
(statearr_36743_38213[(2)] = null);

(statearr_36743_38213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (9))){
var inst_36687 = (state_36724[(7)]);
var inst_36701 = cljs.core.vec(inst_36687);
var state_36724__$1 = state_36724;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36724__$1,(11),out,inst_36701);
} else {
if((state_val_36725 === (5))){
var inst_36691 = (state_36724[(9)]);
var inst_36687 = (state_36724[(7)]);
var inst_36688 = (state_36724[(8)]);
var inst_36696 = (state_36724[(11)]);
var inst_36695 = (inst_36687[inst_36688] = inst_36691);
var inst_36696__$1 = (inst_36688 + (1));
var inst_36697 = (inst_36696__$1 < n);
var state_36724__$1 = (function (){var statearr_36745 = state_36724;
(statearr_36745[(11)] = inst_36696__$1);

(statearr_36745[(12)] = inst_36695);

return statearr_36745;
})();
if(cljs.core.truth_(inst_36697)){
var statearr_36746_38214 = state_36724__$1;
(statearr_36746_38214[(1)] = (8));

} else {
var statearr_36747_38216 = state_36724__$1;
(statearr_36747_38216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (14))){
var inst_36717 = (state_36724[(2)]);
var inst_36718 = cljs.core.async.close_BANG_(out);
var state_36724__$1 = (function (){var statearr_36749 = state_36724;
(statearr_36749[(13)] = inst_36717);

return statearr_36749;
})();
var statearr_36751_38217 = state_36724__$1;
(statearr_36751_38217[(2)] = inst_36718);

(statearr_36751_38217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (10))){
var inst_36707 = (state_36724[(2)]);
var state_36724__$1 = state_36724;
var statearr_36752_38218 = state_36724__$1;
(statearr_36752_38218[(2)] = inst_36707);

(statearr_36752_38218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (8))){
var inst_36687 = (state_36724[(7)]);
var inst_36696 = (state_36724[(11)]);
var tmp36748 = inst_36687;
var inst_36687__$1 = tmp36748;
var inst_36688 = inst_36696;
var state_36724__$1 = (function (){var statearr_36754 = state_36724;
(statearr_36754[(7)] = inst_36687__$1);

(statearr_36754[(8)] = inst_36688);

return statearr_36754;
})();
var statearr_36755_38220 = state_36724__$1;
(statearr_36755_38220[(2)] = null);

(statearr_36755_38220[(1)] = (2));


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
var statearr_36756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36756[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36756[(1)] = (1));

return statearr_36756;
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
}catch (e36760){if((e36760 instanceof Object)){
var ex__34203__auto__ = e36760;
var statearr_36762_38222 = state_36724;
(statearr_36762_38222[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38223 = state_36724;
state_36724 = G__38223;
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
(statearr_36764[(6)] = c__34267__auto___38201);

return statearr_36764;
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
var G__36768 = arguments.length;
switch (G__36768) {
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
var c__34267__auto___38227 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36813){
var state_val_36814 = (state_36813[(1)]);
if((state_val_36814 === (7))){
var inst_36808 = (state_36813[(2)]);
var state_36813__$1 = state_36813;
var statearr_36816_38228 = state_36813__$1;
(statearr_36816_38228[(2)] = inst_36808);

(statearr_36816_38228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (1))){
var inst_36770 = [];
var inst_36771 = inst_36770;
var inst_36772 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36813__$1 = (function (){var statearr_36818 = state_36813;
(statearr_36818[(7)] = inst_36772);

(statearr_36818[(8)] = inst_36771);

return statearr_36818;
})();
var statearr_36819_38230 = state_36813__$1;
(statearr_36819_38230[(2)] = null);

(statearr_36819_38230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (4))){
var inst_36775 = (state_36813[(9)]);
var inst_36775__$1 = (state_36813[(2)]);
var inst_36777 = (inst_36775__$1 == null);
var inst_36778 = cljs.core.not(inst_36777);
var state_36813__$1 = (function (){var statearr_36820 = state_36813;
(statearr_36820[(9)] = inst_36775__$1);

return statearr_36820;
})();
if(inst_36778){
var statearr_36822_38231 = state_36813__$1;
(statearr_36822_38231[(1)] = (5));

} else {
var statearr_36823_38232 = state_36813__$1;
(statearr_36823_38232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (15))){
var inst_36802 = (state_36813[(2)]);
var state_36813__$1 = state_36813;
var statearr_36824_38234 = state_36813__$1;
(statearr_36824_38234[(2)] = inst_36802);

(statearr_36824_38234[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (13))){
var state_36813__$1 = state_36813;
var statearr_36826_38235 = state_36813__$1;
(statearr_36826_38235[(2)] = null);

(statearr_36826_38235[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (6))){
var inst_36771 = (state_36813[(8)]);
var inst_36797 = inst_36771.length;
var inst_36798 = (inst_36797 > (0));
var state_36813__$1 = state_36813;
if(cljs.core.truth_(inst_36798)){
var statearr_36827_38236 = state_36813__$1;
(statearr_36827_38236[(1)] = (12));

} else {
var statearr_36828_38238 = state_36813__$1;
(statearr_36828_38238[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (3))){
var inst_36810 = (state_36813[(2)]);
var state_36813__$1 = state_36813;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36813__$1,inst_36810);
} else {
if((state_val_36814 === (12))){
var inst_36771 = (state_36813[(8)]);
var inst_36800 = cljs.core.vec(inst_36771);
var state_36813__$1 = state_36813;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36813__$1,(15),out,inst_36800);
} else {
if((state_val_36814 === (2))){
var state_36813__$1 = state_36813;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36813__$1,(4),ch);
} else {
if((state_val_36814 === (11))){
var inst_36780 = (state_36813[(10)]);
var inst_36775 = (state_36813[(9)]);
var inst_36790 = (state_36813[(2)]);
var inst_36791 = [];
var inst_36792 = inst_36791.push(inst_36775);
var inst_36771 = inst_36791;
var inst_36772 = inst_36780;
var state_36813__$1 = (function (){var statearr_36831 = state_36813;
(statearr_36831[(7)] = inst_36772);

(statearr_36831[(8)] = inst_36771);

(statearr_36831[(11)] = inst_36790);

(statearr_36831[(12)] = inst_36792);

return statearr_36831;
})();
var statearr_36832_38240 = state_36813__$1;
(statearr_36832_38240[(2)] = null);

(statearr_36832_38240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (9))){
var inst_36771 = (state_36813[(8)]);
var inst_36788 = cljs.core.vec(inst_36771);
var state_36813__$1 = state_36813;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36813__$1,(11),out,inst_36788);
} else {
if((state_val_36814 === (5))){
var inst_36772 = (state_36813[(7)]);
var inst_36780 = (state_36813[(10)]);
var inst_36775 = (state_36813[(9)]);
var inst_36780__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36775) : f.call(null,inst_36775));
var inst_36781 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36780__$1,inst_36772);
var inst_36782 = cljs.core.keyword_identical_QMARK_(inst_36772,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36783 = ((inst_36781) || (inst_36782));
var state_36813__$1 = (function (){var statearr_36834 = state_36813;
(statearr_36834[(10)] = inst_36780__$1);

return statearr_36834;
})();
if(cljs.core.truth_(inst_36783)){
var statearr_36836_38242 = state_36813__$1;
(statearr_36836_38242[(1)] = (8));

} else {
var statearr_36837_38244 = state_36813__$1;
(statearr_36837_38244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (14))){
var inst_36805 = (state_36813[(2)]);
var inst_36806 = cljs.core.async.close_BANG_(out);
var state_36813__$1 = (function (){var statearr_36839 = state_36813;
(statearr_36839[(13)] = inst_36805);

return statearr_36839;
})();
var statearr_36840_38245 = state_36813__$1;
(statearr_36840_38245[(2)] = inst_36806);

(statearr_36840_38245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (10))){
var inst_36795 = (state_36813[(2)]);
var state_36813__$1 = state_36813;
var statearr_36842_38246 = state_36813__$1;
(statearr_36842_38246[(2)] = inst_36795);

(statearr_36842_38246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (8))){
var inst_36771 = (state_36813[(8)]);
var inst_36780 = (state_36813[(10)]);
var inst_36775 = (state_36813[(9)]);
var inst_36785 = inst_36771.push(inst_36775);
var tmp36838 = inst_36771;
var inst_36771__$1 = tmp36838;
var inst_36772 = inst_36780;
var state_36813__$1 = (function (){var statearr_36843 = state_36813;
(statearr_36843[(7)] = inst_36772);

(statearr_36843[(8)] = inst_36771__$1);

(statearr_36843[(14)] = inst_36785);

return statearr_36843;
})();
var statearr_36845_38248 = state_36813__$1;
(statearr_36845_38248[(2)] = null);

(statearr_36845_38248[(1)] = (2));


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
var statearr_36846 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36846[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36846[(1)] = (1));

return statearr_36846;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36813){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36813);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36848){if((e36848 instanceof Object)){
var ex__34203__auto__ = e36848;
var statearr_36849_38250 = state_36813;
(statearr_36849_38250[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36848;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38252 = state_36813;
state_36813 = G__38252;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36813){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36851 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36851[(6)] = c__34267__auto___38227);

return statearr_36851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
